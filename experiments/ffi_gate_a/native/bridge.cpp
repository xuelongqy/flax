#include "flax/runtime.h"
#include "provider.h"
#include <cmath>
#include <cstring>
#include <limits>
#include <memory>
#include <stdexcept>
#include <string>
#include <unordered_map>
#include <vector>

// This fixture uses the existing ABI, not a new production module interface.
namespace {
const FlaxApi* engine = nullptr;
FlaxApi decorated{};
uint64_t nativeEntries = 0, dartEntries = 0;

struct Counter {
  FlaxValueId identity;
  GateACounter* value;
  ~Counter() { gate_a_counter_free(value); }
};
struct DartCallback {
  FlaxHostCallback function;
  void* context;
};
struct State {
  FlaxRuntime* runtime;
  std::vector<std::unique_ptr<Counter>> counters;
  std::vector<std::unique_ptr<DartCallback>> dartCallbacks;
};
// All accesses originate on the engine's owning UI thread.
std::unordered_map<FlaxRuntime*, std::unique_ptr<State>> states;

int32_t fail(FlaxError* error, const char* message) {
  engine->error_set(error, FLAX_NATIVE_ERROR,
      reinterpret_cast<const uint8_t*>(message), std::strlen(message), nullptr, 0);
  return FLAX_NATIVE_ERROR;
}

template <typename Action>
int32_t protect(FlaxError* error, Action action) noexcept {
  try { return action(); }
  catch (const std::exception& exception) { return fail(error, exception.what()); }
  catch (...) { return fail(error, "Unknown Gate A native failure"); }
}

double number(FlaxRuntime* runtime, FlaxValueId id, bool integer) {
  FlaxValueInfo info{};
  FlaxError error{};
  const auto status = engine->inspect(runtime, id, &info, &error);
  engine->buffer_free(info.string_data);
  engine->error_clear(&error);
  if (status != FLAX_OK) throw std::runtime_error("Cannot inspect argument");
  if (info.kind != FLAX_NUMBER)
    throw std::invalid_argument("Expected a number");
  if (integer && (!std::isfinite(info.number) ||
      std::trunc(info.number) != info.number ||
      info.number < std::numeric_limits<int32_t>::min() ||
      info.number > std::numeric_limits<int32_t>::max()))
    throw std::invalid_argument("Expected int32");
  return info.number;
}

Counter& counter(State& state, FlaxValueId identity) {
  for (const auto& entry : state.counters) {
    int32_t equal = 0;
    FlaxError error{};
    const auto status = engine->strict_equals(state.runtime, identity,
                                              entry->identity, &equal, &error);
    engine->error_clear(&error);
    if (status != FLAX_OK) throw std::runtime_error("Cannot compare counter");
    if (equal) return *entry;
  }
  throw std::invalid_argument("Foreign or forged counter");
}

enum class Operation { add, affine, create, increment, close };

int32_t invoke(Operation operation, void* context, FlaxRuntime* runtime,
               const FlaxValueId* arguments, size_t count, FlaxValueId* result,
               FlaxError* error) noexcept {
  ++nativeEntries;
  return protect(error, [&]() -> int32_t {
    auto& state = *static_cast<State*>(context);
    if (state.runtime != runtime) throw std::invalid_argument("Foreign runtime");
    const size_t expected = operation == Operation::affine ? 3 :
        (operation == Operation::create || operation == Operation::close ? 1 : 2);
    if (count != expected) throw std::invalid_argument("Wrong argument count");
    double output = 0;
    switch (operation) {
      case Operation::add:
        output = static_cast<double>(gate_a_add_i32(
            static_cast<int32_t>(number(runtime, arguments[0], true)),
            static_cast<int32_t>(number(runtime, arguments[1], true))));
        break;
      case Operation::affine:
        output = gate_a_affine_f64(number(runtime, arguments[0], false),
            number(runtime, arguments[1], false), number(runtime, arguments[2], false));
        break;
      case Operation::create: {
        const auto initial = static_cast<int32_t>(number(runtime, arguments[0], true));
        auto record = std::unique_ptr<Counter>(new Counter{0, gate_a_counter_create(initial)});
        if (!record->value) throw std::bad_alloc();
        const char object[] = "({})";
        auto status = engine->evaluate(runtime,
            reinterpret_cast<const uint8_t*>(object), sizeof(object) - 1,
            nullptr, 0, result, error);
        if (status != FLAX_OK) return status;
        status = engine->clone_value(runtime, *result, &record->identity, error);
        if (status != FLAX_OK) return status;
        // shortcut: identity roots last until runtime destruction; Gate B needs weak peers.
        const auto identity = record->identity;
        try { state.counters.push_back(std::move(record)); }
        catch (...) {
          FlaxError cleanup{};
          engine->release_value(runtime, identity, &cleanup);
          engine->error_clear(&cleanup);
          throw;
        }
        return FLAX_OK;
      }
      case Operation::increment: {
        auto& record = counter(state, arguments[0]);
        if (!record.value) throw std::invalid_argument("Counter closed");
        int32_t value = 0;
        if (!gate_a_counter_add(record.value,
            static_cast<int32_t>(number(runtime, arguments[1], true)), &value))
          throw std::overflow_error("Counter overflow");
        output = value;
        break;
      }
      case Operation::close: {
        auto& record = counter(state, arguments[0]);
        gate_a_counter_free(record.value);
        record.value = nullptr;
        return engine->make_value(runtime, FLAX_UNDEFINED, 0, nullptr, 0, result, error);
      }
    }
    return engine->make_value(runtime, FLAX_NUMBER, output, nullptr, 0, result, error);
  });
}

#define GATE_CALLBACK(name, operation) \
int32_t name(void* context, FlaxRuntime* runtime, FlaxValueId, \
             const FlaxValueId* args, size_t count, FlaxValueId* result, \
             FlaxError* error) { \
  return invoke(Operation::operation, context, runtime, args, count, result, error); \
}
GATE_CALLBACK(add, add)
GATE_CALLBACK(affine, affine)
GATE_CALLBACK(createCounter, create)
GATE_CALLBACK(incrementCounter, increment)
GATE_CALLBACK(closeCounter, close)
#undef GATE_CALLBACK

int32_t create(FlaxRuntime** result, FlaxError* error) noexcept {
  const auto status = engine->create(result, error);
  if (status != FLAX_OK) return status;
  auto* runtime = *result;
  const auto installed = protect(error, [&]() -> int32_t {
    states.emplace(runtime, std::unique_ptr<State>(new State{runtime, {}, {}}));
    auto* state = states.at(runtime).get();
    const struct { const char16_t* name; FlaxHostCallback callback; } functions[] = {
      {u"gate_add_i32", add}, {u"gate_affine_f64", affine},
      {u"gate_counter_create", createCounter},
      {u"gate_counter_add", incrementCounter}, {u"gate_counter_close", closeCounter},
    };
    for (const auto& function : functions) {
      const auto registered = engine->register_host(runtime,
          reinterpret_cast<const uint16_t*>(function.name),
          std::char_traits<char16_t>::length(function.name), function.callback,
          state, error);
      if (registered != FLAX_OK) return registered;
    }
    return FLAX_OK;
  });
  if (installed != FLAX_OK && *result) {
    FlaxError cleanup{};
    const auto destroyed = engine->destroy(runtime, &cleanup);
    engine->error_clear(&cleanup);
    if (destroyed == FLAX_OK) states.erase(runtime);
    *result = nullptr;
  }
  return installed;
}

int32_t destroy(FlaxRuntime* runtime, FlaxError* error) noexcept {
  const auto status = engine->destroy(runtime, error);
  if (status == FLAX_OK) states.erase(runtime);
  return status;
}

int32_t traceDart(void* context, FlaxRuntime* runtime, FlaxValueId receiver,
                  const FlaxValueId* args, size_t count, FlaxValueId* result,
                  FlaxError* error) {
  ++dartEntries;
  auto& callback = *static_cast<DartCallback*>(context);
  return callback.function(callback.context, runtime, receiver, args, count, result, error);
}

int32_t registerDart(FlaxRuntime* runtime, const uint16_t* name, size_t length,
                     FlaxHostCallback callback, void* context, FlaxError* error) noexcept {
  return protect(error, [&]() -> int32_t {
    auto found = states.find(runtime);
    if (found == states.end() || !callback)
      throw std::invalid_argument("Invalid Dart callback registration");
    auto record = std::unique_ptr<DartCallback>(new DartCallback{callback, context});
    auto* pointer = record.get();
    found->second->dartCallbacks.push_back(std::move(record));
    return engine->register_host(runtime, name, length, traceDart, pointer, error);
  });
}
} // namespace

#define EXPORT extern "C" __attribute__((visibility("default"), used))
EXPORT const FlaxApi* flax_gate_a_get_api(const FlaxApi* original) noexcept {
  if (!original || original->version != FLAX_ABI_VERSION ||
      original->struct_size != sizeof(FlaxApi) || (engine && engine != original))
    return nullptr;
  engine = original;
  decorated = *original;
  decorated.create = create;
  decorated.destroy = destroy;
  decorated.register_host = registerDart;
  return &decorated;
}

EXPORT uint64_t flax_gate_a_stat(uint32_t index) noexcept {
  if (index == 0) return nativeEntries;
  if (index == 1) return dartEntries;
  if (index == 2) return states.size();
  return gate_a_provider_stat(index - 3);
}
