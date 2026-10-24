// Included only in the isolated engine experiment, after runtime.cpp.
#include "dart_native_api.h"
#include "ffi_experiment.h"
#include <algorithm>
#include <array>
#include <atomic>
#include <chrono>
#include <cmath>
#include <condition_variable>
#include <dart_flax_api.h>
#include <deque>
#include <jsi/instrumentation.h>
#include <thread>

void flaxFfiCollectJs(fbjsi::Runtime &);

namespace ffi_experiment {
std::atomic<uint64_t> liveBlocks{0}, liveOwners{0}, liveWorkers{0};
std::atomic<uint64_t> entries{0}, inlineFailures{0}, wrongThreads{0};
struct Owner;
std::mutex quarantineMutex;
std::vector<std::shared_ptr<Owner>> quarantine;

struct Block : fbjsi::MutableBuffer {
  explicit Block(size_t length)
      : bytes(length ? std::make_unique<uint8_t[]>(length) : nullptr),
        length(length) {
    ++liveBlocks;
  }
  ~Block() override { --liveBlocks; }
  size_t size() const override { return length; }
  uint8_t *data() override { return bytes.get(); }
  std::unique_ptr<uint8_t[]> bytes;
  const size_t length;
};

struct Owner {
  enum Kind { Memory, Counter } kind;
  Owner(Kind kind, const FfiProvider *provider)
      : kind(kind), provider(provider) {
    ++liveOwners;
  }
  ~Owner() {
    release();
    --liveOwners;
  }
  void release() {
    if (!closed || active || releaseFailed)
      return;
    if (pointer) {
      if (provider->destroy(pointer) != 0) {
        releaseFailed = true;
        return;
      }
      pointer = nullptr;
    }
    storage.reset();
  }
  void close() {
    closed = true;
    release();
  }
  const FfiProvider *provider;
  std::shared_ptr<Block> storage;
  void *pointer = nullptr;
  std::atomic<size_t> handles{0};
  size_t active = 0;
  bool closed = false;
  bool releaseFailed = false;
};

// Native-only storage can outlive the VM; finalizers never call JSI or Dart.
struct Handle : fbjsi::HostObject {
  Handle(std::shared_ptr<Owner> owner, size_t offset, size_t length)
      : owner(std::move(owner)), offset(offset), length(length) {
    ++this->owner->handles;
  }
  ~Handle() override { --owner->handles; }
  std::shared_ptr<Owner> owner;
  size_t offset, length;
};
struct Lease {
  explicit Lease(std::shared_ptr<Owner> owner) : owner(std::move(owner)) {
    ++this->owner->active;
  }
  ~Lease() {
    --owner->active;
    owner->release();
  }
  std::shared_ptr<Owner> owner;
};

struct Event {
  int32_t sequence;
  std::array<uint8_t, 2> payload;
};
struct Work {
  ~Work() {
    if (thread.joinable())
      thread.join();
  }
  std::mutex mutex;
  std::condition_variable changed;
  std::deque<Event> queue;
  std::thread thread;
  std::atomic<bool> cancel{false}, done{false};
  bool released = false, overflow = false, stubborn = false;
  size_t dropped = 0;
  int64_t port = 0;
  uint64_t generation = 0;
  bool job = false;
  double result = 0;
};
struct State : std::enable_shared_from_this<State> {
  const FfiProvider *provider;
  int64_t port;
  uint64_t generation;
  bool closing = false;
  size_t activeCalls = 0;
  std::vector<std::shared_ptr<Owner>> owners;
  // This registry authenticates handles without RTTI or an exposed JS brand.
  std::unordered_map<fbjsi::HostObject *, std::weak_ptr<Handle>> handles;
  std::shared_ptr<Work> work;
  std::unique_ptr<fbjsi::Function> notification;
  std::unique_ptr<fbjsi::Function> resolve, reject;
  std::unique_ptr<fbjsi::Function> promise;
  size_t delivered = 0;
  uint32_t fault = 0;
  void sweep() {
    for (auto &owner : owners) {
      if (closing || owner->handles.load() == 0)
        owner->close();
    }
    owners.erase(std::remove_if(owners.begin(), owners.end(),
                                [](const auto &owner) {
                                  return owner->closed && owner->active == 0 &&
                                         !owner->pointer && !owner->storage;
                                }),
                 owners.end());
    for (auto it = handles.begin(); it != handles.end();) {
      if (it->second.expired())
        it = handles.erase(it);
      else
        ++it;
    }
  }
};
std::unordered_map<FlaxRuntime *, std::shared_ptr<State>> states;
std::mutex statesMutex;
std::atomic<uint64_t> generation{0};
std::shared_ptr<State> stateFor(FlaxRuntime *runtime) {
  std::lock_guard<std::mutex> lock(statesMutex);
  auto found = states.find(runtime);
  return found == states.end() ? nullptr : found->second;
}
void eraseState(FlaxRuntime *runtime) {
  std::lock_guard<std::mutex> lock(statesMutex);
  states.erase(runtime);
}

void wake(int64_t port, uint64_t generation) {
  Dart_CObject value{};
  value.type = Dart_CObject_kInt64;
  value.value.as_int64 = static_cast<int64_t>(generation);
  Dart_PostCObject(port, &value);
}

struct ActiveCall {
  explicit ActiveCall(State &state) : state(state) { ++state.activeCalls; }
  ~ActiveCall() {
    if (--state.activeCalls == 0 && state.closing)
      wake(state.port, state.generation);
  }
  State &state;
};

size_t integer(fbjsi::Runtime &js, const fbjsi::Value &value, size_t maximum) {
  if (!value.isNumber() || !std::isfinite(value.getNumber()) ||
      std::floor(value.getNumber()) != value.getNumber() ||
      value.getNumber() < 0 || value.getNumber() > static_cast<double>(maximum))
    throw fbjsi::JSError(js, "Expected a bounded nonnegative integer");
  return static_cast<size_t>(value.getNumber());
}
int32_t i32(fbjsi::Runtime &js, const fbjsi::Value &value) {
  if (!value.isNumber() || !std::isfinite(value.getNumber()) ||
      std::floor(value.getNumber()) != value.getNumber() ||
      value.getNumber() < INT32_MIN || value.getNumber() > INT32_MAX)
    throw fbjsi::JSError(js, "Expected int32");
  return static_cast<int32_t>(value.getNumber());
}

fbjsi::Value wrap(fbjsi::Runtime &js, State &state,
                  std::shared_ptr<Owner> owner, size_t offset, size_t length) {
  auto handle = std::make_shared<Handle>(std::move(owner), offset, length);
  auto result = fbjsi::Object::createFromHostObject(js, handle);
  state.handles[handle.get()] = handle;
  return result;
}
std::shared_ptr<Handle> handle(fbjsi::Runtime &js, State &state,
                               const fbjsi::Value &value,
                               bool allowClosed = false) {
  if (!value.isObject() || !value.getObject(js).isHostObject(js))
    throw fbjsi::JSError(js, "Expected a native handle");
  auto host = value.getObject(js).getHostObject(js);
  auto found = state.handles.find(host.get());
  auto result = found == state.handles.end() ? nullptr : found->second.lock();
  if (!result || (!allowClosed && result->owner->closed))
    throw fbjsi::JSError(js, "Closed or foreign native handle");
  return result;
}
std::shared_ptr<Handle> memory(fbjsi::Runtime &js, State &state,
                               const fbjsi::Value &value) {
  auto result = handle(js, state, value);
  if (result->owner->kind != Owner::Memory)
    throw fbjsi::JSError(js, "Expected a memory handle");
  return result;
}
std::shared_ptr<Handle> counter(fbjsi::Runtime &js, State &state,
                                const fbjsi::Value &value) {
  auto result = handle(js, state, value);
  if (result->owner->kind != Owner::Counter)
    throw fbjsi::JSError(js, "Expected a counter handle");
  return result;
}

struct InlineFrame {
  fbjsi::Runtime &js;
  fbjsi::Function function;
  std::thread::id owner = std::this_thread::get_id();
  std::exception_ptr failure;
  std::atomic<bool> wrongThread{false};
  int32_t call(int32_t a, int32_t b, bool compare) noexcept {
    if (owner != std::this_thread::get_id()) {
      wrongThread = true;
      ++wrongThreads;
      return 0;
    }
    try {
      auto result = compare ? function.call(js, a, b) : function.call(js, a);
      return i32(js, result);
    } catch (...) {
      failure = std::current_exception();
      ++inlineFailures;
      return 0;
    }
  }
  void finish() {
    if (wrongThread)
      throw fbjsi::JSError(js, "Synchronous callback arrived on a worker");
    if (failure)
      std::rethrow_exception(failure);
  }
};
int32_t inlineThunk(void *context, int32_t value) noexcept {
  return static_cast<InlineFrame *>(context)->call(value, 0, false);
}
thread_local InlineFrame *comparator = nullptr;
int32_t compareThunk(int32_t a, int32_t b) noexcept {
  if (!comparator) {
    ++wrongThreads;
    return 0;
  }
  return comparator->call(a, b, true);
}

fbjsi::Value dispatch(fbjsi::Runtime &js, State &state, const std::string &name,
                      const fbjsi::Value *args, size_t count) {
  ++entries;
  state.sweep();
  if (state.closing)
    throw fbjsi::JSError(js, "FFI session is closing");
  ActiveCall active(state);
  auto arity = [&](size_t expected) {
    if (count != expected)
      throw fbjsi::JSError(js, "Invalid FFI arity");
  };
  if (name == "add") {
    arity(2);
    return static_cast<double>(
        state.provider->add(i32(js, args[0]), i32(js, args[1])));
  }
  if (name == "now") {
    arity(0);
    return std::chrono::duration<double, std::milli>(
               std::chrono::steady_clock::now().time_since_epoch())
        .count();
  }
  if (name == "directBenchmark") {
    arity(1);
    auto iterations = integer(js, args[0], 1000000);
    volatile int64_t checksum = 0;
    auto started = std::chrono::steady_clock::now();
    for (size_t i = 0; i < iterations; ++i)
      checksum = checksum + state.provider->add(static_cast<int32_t>(i), 1);
    auto elapsed = std::chrono::duration<double, std::milli>(
                       std::chrono::steady_clock::now() - started)
                       .count();
    fbjsi::Object result(js);
    result.setProperty(js, "milliseconds", elapsed);
    result.setProperty(js, "checksum", static_cast<double>(checksum));
    return result;
  }
  if (name == "fault") {
    arity(1);
    state.fault = static_cast<uint32_t>(integer(js, args[0], 4));
    state.provider->fault(state.fault <= 2 ? state.fault : 0);
    return {};
  }
  if (name == "alloc" || name == "counter") {
    arity(1);
    const auto length =
        name == "alloc" ? integer(js, args[0], 16 * 1024 * 1024) : 0;
    const auto initial = name == "counter" ? i32(js, args[0]) : 0;
    auto owner = std::make_shared<Owner>(
        name == "alloc" ? Owner::Memory : Owner::Counter, state.provider);
    owner->closed = true;
    // Register cleanup before allocation, including handles that fail JS
    // adoption.
    state.owners.push_back(owner);
    try {
      if (name == "alloc")
        owner->storage = std::make_shared<Block>(length);
      else {
        owner->pointer = state.provider->create(initial);
        if (!owner->pointer)
          throw fbjsi::JSError(js, "Native allocation failed");
      }
      auto result = wrap(js, state, owner, 0, length);
      if (state.fault == 3) {
        state.fault = 0;
        throw fbjsi::JSError(
            js, "Injected output adoption failure after JS handle creation");
      }
      owner->closed = false;
      return result;
    } catch (...) {
      owner->close();
      throw;
    }
  }
  if (name == "alias") {
    arity(1);
    auto h = handle(js, state, args[0]);
    return wrap(js, state, h->owner, h->offset, h->length);
  }
  if (name == "slice") {
    arity(3);
    auto h = memory(js, state, args[0]);
    auto offset = integer(js, args[1], h->length);
    auto length = integer(js, args[2], h->length - offset);
    return wrap(js, state, h->owner, h->offset + offset, length);
  }
  if (name == "close") {
    arity(1);
    auto owner = handle(js, state, args[0], true)->owner;
    owner->releaseFailed = false;
    owner->close();
    if (owner->releaseFailed)
      throw fbjsi::JSError(js, "Native destructor failed; ownership retained");
    return {};
  }
  if (name == "read" || name == "write") {
    arity(name == "read" ? 2 : 3);
    auto h = memory(js, state, args[0]);
    auto offset = integer(js, args[1], h->length);
    if (offset == h->length)
      throw fbjsi::JSError(js, "Byte offset is out of bounds");
    auto &byte = h->owner->storage->bytes[h->offset + offset];
    if (name == "write")
      byte = static_cast<uint8_t>(integer(js, args[2], 255));
    return static_cast<double>(byte);
  }
  if (name == "bytes") {
    arity(1);
    auto h = memory(js, state, args[0]);
    auto buffer = fbjsi::ArrayBuffer(js, h->owner->storage);
    auto constructor = js.global().getPropertyAsFunction(js, "Uint8Array");
    return constructor.callAsConstructor(js, buffer,
                                         static_cast<double>(h->offset),
                                         static_cast<double>(h->length));
  }
  if (name == "update" || name == "withCounter") {
    arity(2);
    auto h = counter(js, state, args[0]);
    Lease lease(h->owner);
    if (name == "withCounter") {
      auto callback = args[1].asObject(js).asFunction(js);
      callback.call(js);
      return state.provider->update(h->owner->pointer, 0);
    }
    auto delta = i32(js, args[1]);
    int64_t next =
        static_cast<int64_t>(state.provider->update(h->owner->pointer, 0)) +
        delta;
    if (next < INT32_MIN || next > INT32_MAX)
      throw fbjsi::JSError(js, "Counter overflow");
    return state.provider->update(h->owner->pointer, delta);
  }
  if (name == "inline" || name == "compare" || name == "wrongThread") {
    arity(name == "compare" ? 3 : 2);
    InlineFrame frame{js, args[0].asObject(js).asFunction(js)};
    int32_t result = 0;
    if (name == "compare") {
      auto a = i32(js, args[1]), b = i32(js, args[2]);
      auto *previous = comparator;
      comparator = &frame;
      result = state.provider->compare(compareThunk, a, b);
      comparator = previous;
    } else {
      auto value = i32(js, args[1]);
      if (name == "wrongThread") {
        std::thread worker([&] {
          result = state.provider->inline_call(inlineThunk, &frame, value);
        });
        worker.join();
      } else
        result = state.provider->inline_call(inlineThunk, &frame, value);
    }
    frame.finish();
    return result;
  }
  if (name == "start") {
    arity(3);
    if (state.work)
      throw fbjsi::JSError(js, "A producer is already installed");
    auto callback = args[0].asObject(js).asFunction(js);
    auto events = integer(js, args[1], 100000);
    auto mode = integer(js, args[2], 2);
    auto work = std::make_shared<Work>();
    work->port = state.port;
    work->generation = state.generation;
    work->stubborn = mode == 2;
    state.notification = std::make_unique<fbjsi::Function>(std::move(callback));
    state.work = work;
    try {
      if (state.fault == 4) {
        state.fault = 0;
        throw fbjsi::JSError(js, "Injected worker startup failure");
      }
      work->thread = std::thread([work, events] {
        ++liveWorkers;
        {
          std::unique_lock<std::mutex> lock(work->mutex);
          work->changed.wait(lock, [&] {
            return work->released || (work->cancel && !work->stubborn);
          });
        }
        for (size_t i = 0; i < events && !work->cancel; ++i) {
          std::lock_guard<std::mutex> lock(work->mutex);
          if (work->queue.size() == 8) {
            work->overflow = true;
            ++work->dropped;
            break;
          }
          work->queue.push_back(
              {static_cast<int32_t>(i), {static_cast<uint8_t>(i), 42}});
        }
        --liveWorkers;
        work->done = true;
        wake(work->port, work->generation);
      });
    } catch (...) {
      state.work.reset();
      state.notification.reset();
      throw;
    }
    return static_cast<double>(state.generation);
  }
  if (name == "asyncAdd") {
    arity(2);
    if (state.work)
      throw fbjsi::JSError(js, "A producer is already installed");
    auto a = i32(js, args[0]), b = i32(js, args[1]);
    auto executor = fbjsi::Function::createFromHostFunction(
        js, fbjsi::PropNameID::forAscii(js, "ffiExecutor"), 2,
        [saved = state.shared_from_this()](
            fbjsi::Runtime &js, const fbjsi::Value &,
            const fbjsi::Value *values, size_t count) {
          if (count != 2)
            throw fbjsi::JSError(js, "Invalid Promise executor");
          saved->resolve = std::make_unique<fbjsi::Function>(
              values[0].asObject(js).asFunction(js));
          saved->reject = std::make_unique<fbjsi::Function>(
              values[1].asObject(js).asFunction(js));
          return fbjsi::Value();
        });
    auto result = state.promise->callAsConstructor(js, executor);
    if (!state.resolve || !state.reject)
      throw fbjsi::JSError(js, "Promise executor did not run synchronously");
    auto work = std::make_shared<Work>();
    work->job = true;
    work->port = state.port;
    work->generation = state.generation;
    state.work = work;
    const auto *provider = state.provider;
    try {
      work->thread = std::thread([work, provider, a, b] {
        ++liveWorkers;
        work->result = static_cast<double>(provider->add(a, b));
        --liveWorkers;
        work->done = true;
        wake(work->port, work->generation);
      });
    } catch (...) {
      state.reject->call(
          js, fbjsi::String::createFromAscii(js, "Native job startup failed"));
      state.resolve.reset();
      state.reject.reset();
      state.work.reset();
    }
    return result;
  }
  if (name == "releaseWorker" || name == "waitWorker" || name == "cancel") {
    arity(0);
    if (!state.work)
      throw fbjsi::JSError(js, "No producer");
    auto work = state.work;
    if (name == "cancel")
      work->cancel = true;
    if (name != "waitWorker") {
      {
        std::lock_guard<std::mutex> lock(work->mutex);
        work->released = true;
      }
      work->changed.notify_all();
    }
    // Test-only latch: the producer never depends on JS or owner-thread
    // draining.
    if (name == "waitWorker" && work->thread.joinable())
      work->thread.join();
    return {};
  }
  if (name == "stats") {
    arity(0);
    fbjsi::Object result(js);
    result.setProperty(js, "owners", static_cast<double>(state.owners.size()));
    result.setProperty(js, "blocks", static_cast<double>(liveBlocks.load()));
    result.setProperty(js, "created",
                       static_cast<double>(state.provider->stat(0)));
    result.setProperty(js, "destroyed",
                       static_cast<double>(state.provider->stat(1)));
    result.setProperty(js, "wrongThreadDestroys",
                       static_cast<double>(state.provider->stat(2)));
    result.setProperty(js, "delivered", static_cast<double>(state.delivered));
    return result;
  }
  throw fbjsi::JSError(js, "Unknown FFI experiment entry");
}

void drain(FlaxRuntime *runtime, State &state) {
  state.sweep();
  auto work = state.work;
  if (!work)
    return;
  if (work->job) {
    if (!work->done)
      return;
    if (work->thread.joinable())
      work->thread.join();
    auto resolve = std::move(state.resolve);
    auto reject = std::move(state.reject);
    state.work.reset();
    if (!state.closing && !work->cancel && resolve)
      resolve->call(*runtime->js, work->result);
    else if (reject)
      reject->call(*runtime->js, fbjsi::String::createFromAscii(
                                     *runtime->js, "Native job cancelled"));
    return;
  }
  std::deque<Event> events;
  bool overflow = false;
  {
    std::lock_guard<std::mutex> lock(work->mutex);
    events.swap(work->queue);
    overflow = work->overflow;
  }
  auto &js = *runtime->js;
  try {
    for (const auto &event : events) {
      if (state.closing || work->cancel || !state.notification)
        break;
      auto storage = std::make_shared<Block>(event.payload.size());
      std::memcpy(storage->data(), event.payload.data(), event.payload.size());
      fbjsi::ArrayBuffer buffer(js, storage);
      auto view = js.global()
                      .getPropertyAsFunction(js, "Uint8Array")
                      .callAsConstructor(js, buffer);
      ++state.delivered;
      auto callback =
          fbjsi::Value(js, *state.notification).asObject(js).asFunction(js);
      ActiveCall active(state);
      callback.call(js, event.sequence, view);
    }
    if (overflow && !state.closing && !work->cancel)
      throw fbjsi::JSError(js, "Native notification queue overflow");
  } catch (...) {
    work->cancel = true;
    state.notification.reset();
    throw;
  }
  if (work->done) {
    if (work->thread.joinable())
      work->thread.join();
    state.notification.reset();
    state.work.reset();
  }
}
} // namespace ffi_experiment

extern "C" __attribute__((visibility("default"))) int32_t
flax_ffi_experiment_install(FlaxRuntime *runtime, const FfiProvider *provider,
                            int64_t port, FlaxError *error) {
  return enter(runtime, error, [&] {
    using namespace ffi_experiment;
    if (!provider || provider->version != 1 ||
        provider->size != sizeof(FfiProvider) || !provider->add ||
        !provider->create || !provider->update || !provider->destroy ||
        !provider->inline_call || !provider->compare || !provider->stat ||
        !provider->fault || port <= 0)
      throw BridgeError(FLAX_ARGUMENT_ERROR, "Invalid FFI provider descriptor");
    if (stateFor(runtime))
      throw BridgeError(FLAX_STATE_ERROR, "FFI already installed");
    auto state = std::make_shared<State>();
    state->provider = provider;
    state->port = port;
    state->generation = ++generation;
    auto &js = *runtime->js;
    state->promise = std::make_unique<fbjsi::Function>(
        js.global().getPropertyAsFunction(js, "Promise"));
    fbjsi::Object module(js);
    for (const char *name :
         {"add",        "alloc",       "counter",        "alias",
          "slice",      "close",       "read",           "write",
          "bytes",      "update",      "withCounter",    "inline",
          "compare",    "wrongThread", "start",          "releaseWorker",
          "waitWorker", "cancel",      "stats",          "fault",
          "asyncAdd",   "now",         "directBenchmark"}) {
      module.setProperty(
          js, name,
          fbjsi::Function::createFromHostFunction(
              js, fbjsi::PropNameID::forAscii(js, name), 0,
              [runtime, state, name](fbjsi::Runtime &js, const fbjsi::Value &,
                                     const fbjsi::Value *args, size_t count) {
                Entry entry(runtime);
                return dispatch(js, *state, name, args, count);
              }));
    }
    module.setProperty(
        js, "requestClose",
        fbjsi::Function::createFromHostFunction(
            js, fbjsi::PropNameID::forAscii(js, "requestClose"), 0,
            [runtime](fbjsi::Runtime &js, const fbjsi::Value &,
                      const fbjsi::Value *, size_t count) {
              if (count)
                throw fbjsi::JSError(js, "Invalid close arity");
              int32_t done = 0;
              FlaxError error{};
              auto code = flax_ffi_experiment_close(runtime, &done, &error);
              std::string message =
                  error.message
                      ? std::string(reinterpret_cast<char *>(error.message),
                                    error.message_length)
                      : "";
              clearError(&error);
              if (code != FLAX_OK)
                throw fbjsi::JSError(js, message);
              return fbjsi::Value(done != 0);
            }));
    {
      std::lock_guard<std::mutex> lock(statesMutex);
      states.emplace(runtime, state);
    }
    try {
      js.global().setProperty(js, "ffi", std::move(module));
    } catch (...) {
      state->closing = true;
      state->promise.reset();
      eraseState(runtime);
      throw;
    }
  });
}
extern "C" __attribute__((visibility("default"))) int32_t
flax_ffi_experiment_drain(FlaxRuntime *runtime, FlaxError *error) {
  return enter(runtime, error, [&] {
    auto state = ffi_experiment::stateFor(runtime);
    if (state)
      ffi_experiment::drain(runtime, *state);
  });
}
extern "C" __attribute__((visibility("default"))) int32_t
flax_ffi_experiment_close(FlaxRuntime *runtime, int32_t *done,
                          FlaxError *error) {
  return enter(runtime, error, [&] {
    using namespace ffi_experiment;
    if (!done)
      throw BridgeError(FLAX_ARGUMENT_ERROR, "Missing close output");
    *done = 0;
    auto saved = stateFor(runtime);
    if (!saved) {
      *done = 1;
      return;
    }
    auto &state = *saved;
    state.closing = true;
    state.notification.reset();
    state.promise.reset();
    if (state.reject) {
      auto reject = std::move(state.reject);
      state.resolve.reset();
      reject->call(*runtime->js, fbjsi::String::createFromAscii(
                                     *runtime->js, "Native job cancelled"));
    }
    if (state.work) {
      auto work = state.work;
      work->cancel = true;
      work->changed.notify_all();
      if (!work->done)
        return;
      if (work->thread.joinable())
        work->thread.join();
      {
        std::lock_guard<std::mutex> lock(work->mutex);
        work->queue.clear();
      }
      state.work.reset();
    }
    state.sweep();
    for (const auto &owner : state.owners) {
      if (owner->releaseFailed) {
        owner->releaseFailed = false;
        throw BridgeError(FLAX_NATIVE_ERROR,
                          "Destructor failed; retry session retirement");
      }
    }
    // A reentrant close cannot retire active native call leases.
    if (state.activeCalls)
      return;
    for (const auto &owner : state.owners)
      if (owner->active)
        return;
    eraseState(runtime);
    *done = 1;
  });
}
extern "C" __attribute__((visibility("default"))) uint64_t
flax_ffi_experiment_stat(uint32_t index) {
  using namespace ffi_experiment;
  switch (index) {
  case 0: {
    std::lock_guard<std::mutex> lock(statesMutex);
    return states.size();
  }
  case 1:
    return liveOwners;
  case 2:
    return liveBlocks;
  case 3:
    return liveWorkers;
  case 4:
    return entries;
  case 5:
    return inlineFailures;
  case 6:
    return wrongThreads;
  case 8: {
    std::lock_guard<std::mutex> lock(quarantineMutex);
    return quarantine.size();
  }
  default:
    return UINT64_MAX;
  }
}

bool flaxFfiExperimentInstalled(FlaxRuntime *runtime) {
  return ffi_experiment::stateFor(runtime) != nullptr;
}
void flaxFfiExperimentShutdown(FlaxRuntime *runtime) {
  using namespace ffi_experiment;
  auto saved = stateFor(runtime);
  if (!saved)
    return;
  auto &state = *saved;
  state.closing = true;
  state.notification.reset();
  state.promise.reset();
  state.resolve.reset();
  state.reject.reset();
  if (auto work = state.work) {
    work->cancel = true;
    {
      std::lock_guard<std::mutex> lock(work->mutex);
      work->released = true;
      work->queue.clear();
    }
    work->changed.notify_all();
    // The detached producer owns only native data and an inert port/generation.
    if (work->thread.joinable())
      work->thread.detach();
    state.work.reset();
  }
  state.sweep();
  {
    std::lock_guard<std::mutex> lock(quarantineMutex);
    for (const auto &owner : state.owners) {
      if (owner->pointer || owner->storage)
        quarantine.push_back(owner);
    }
  }
  state.owners.clear();
  eraseState(runtime);
}

extern "C" __attribute__((visibility("default"))) int32_t
flax_ffi_experiment_collect(FlaxRuntime *runtime, FlaxError *error) {
  return protect(error, [&] {
    if (!runtime || runtime->depth || runtime->owner != Dart_CurrentIsolate())
      throw BridgeError(FLAX_STATE_ERROR,
                        "Collection requires an idle owner isolate");
    flaxFfiCollectJs(*runtime->js);
    auto state = ffi_experiment::stateFor(runtime);
    if (state)
      state->sweep();
  });
}

extern "C" __attribute__((visibility("default"))) int32_t
flax_ffi_experiment_release_worker(FlaxRuntime *runtime, FlaxError *error) {
  return enter(runtime, error, [&] {
    auto state = ffi_experiment::stateFor(runtime);
    if (!state || !state->work)
      throw BridgeError(FLAX_STATE_ERROR, "No native worker");
    auto work = state->work;
    {
      std::lock_guard<std::mutex> lock(work->mutex);
      work->released = true;
    }
    work->changed.notify_all();
  });
}
extern "C" __attribute__((visibility("default"))) void
flax_ffi_experiment_shutdown_isolate() {
  flax_engine_shutdown_current_isolate();
}
