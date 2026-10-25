// Experimental serial ownership of the maintained engine's empty V8 context.
// No Dart callback or peer may be present while the worker owns the isolate.
#include <v8.h>
#include <atomic>
#include <chrono>
#include <climits>
#include <cstdlib>
#include <cstring>
#include <dlfcn.h>
#include <fstream>
#include <pthread.h>
#include <string>
#include <thread>

namespace {
using Clock = std::chrono::steady_clock;
int64_t micros(Clock::time_point start) {
  return std::chrono::duration_cast<std::chrono::microseconds>(Clock::now() - start).count();
}
uint64_t threadId() {
  uint64_t value = 0;
  pthread_threadid_np(nullptr, &value);
  return value;
}
struct Handoff {
  v8::Isolate* isolate;
  v8::Global<v8::Context> context;
  uint64_t owner = threadId(), worker_id = 0;
  std::thread worker;
  std::atomic<int> state{0};  // 0: UI-owned, 1: worker-owned, 2: ready to join.
  std::string source, error;
  int64_t lock_us = 0, compile_us = 0, run_us = 0, total_us = 0;
  int64_t file_us = 0;
  bool source_file = false;
  bool ok = false;
  bool deferred_gc = false;
  using GcPhase = int (*)(void*, int);
  GcPhase gc_phase = nullptr;

  explicit Handoff(v8::Isolate* value)
      : isolate(value), context(value, value->GetCurrentContext()) {}
  void execute() {
    worker_id = threadId();
    const auto start = Clock::now();
    if (source_file) {
      source_file = false;
      std::ifstream input(source, std::ios::binary | std::ios::ate);
      const auto size = input ? static_cast<int64_t>(input.tellg()) : -1;
      if (size < 0 || size > INT_MAX) {
        error = "Cannot read background JavaScript source file";
      } else {
        std::string text(static_cast<size_t>(size), '\0');
        input.seekg(0);
        if (!input.read(text.data(), size)) error = "Incomplete background source read";
        else source.swap(text);
      }
      file_us = micros(start);
      if (!error.empty()) {
        total_us = micros(start);
        state.store(2, std::memory_order_release);
        return;
      }
    }
    const auto locking = Clock::now();
    {
      v8::Locker lock(isolate);
      lock_us = micros(locking);
      v8::Isolate::Scope entered(isolate);
      v8::HandleScope handles(isolate);
      auto ctx = context.Get(isolate);
      v8::Context::Scope active(ctx);
      v8::TryCatch caught(isolate);
      const auto compiling = Clock::now();
      v8::Local<v8::String> text;
      v8::Local<v8::Script> script;
      ok = v8::String::NewFromUtf8(isolate, source.data(), v8::NewStringType::kNormal,
                                 static_cast<int>(source.size())).ToLocal(&text) &&
           v8::Script::Compile(ctx, text).ToLocal(&script);
      compile_us = micros(compiling);
      const auto running = Clock::now();
      v8::Local<v8::Value> result;
      if (ok) ok = script->Run(ctx).ToLocal(&result);
      run_us = micros(running);
      if (!ok) {
        v8::String::Utf8Value message(isolate, caught.Exception());
        error = *message ? *message : "V8 initialization failed";
      }
    }
    total_us = micros(start);
    // Publish only after all V8 scopes and its Locker have been released.
    state.store(2, std::memory_order_release);
  }
};
}

extern "C" {
void* flax_handoff_capture() {
  auto* isolate = v8::Isolate::GetCurrent();
  if (!isolate || !isolate->InContext()) return nullptr;
  return new Handoff(isolate);
}
int flax_handoff_start(void* raw, const char* source, intptr_t length, int background) {
  auto* self = static_cast<Handoff*>(raw);
  if (threadId() != self->owner || self->state.load() != 0 || length < 0 ||
      length > INT_MAX) return 0;
  self->source.assign(source, length);
  self->error.clear();
  self->ok = false;
  self->file_us = self->lock_us = self->compile_us = self->run_us = self->total_us = 0;
  self->deferred_gc = background && std::getenv("FLAX_HANDOFF_DEFER_GC");
  if (self->deferred_gc) {
    self->gc_phase = reinterpret_cast<Handoff::GcPhase>(dlsym(RTLD_DEFAULT, "flax_experiment_handoff_gc"));
    if (!self->gc_phase || !self->gc_phase(self->isolate, 1)) {
      self->error = "Experimental pure-JS GC phase unavailable or rejected";
      return 0;
    }
  }
  self->state.store(1);
  try {
    if (background) self->worker = std::thread([self] { self->execute(); });
    else self->execute();
  } catch (const std::exception& error) {
    if (self->deferred_gc && !self->gc_phase(self->isolate, 0)) std::abort();
    self->error = error.what();
    self->state.store(0);
    return 0;
  }
  return 1;
}
int flax_handoff_start_file(void* raw, const char* path, intptr_t length, int background) {
  auto* self = static_cast<Handoff*>(raw);
  if (!background || threadId() != self->owner || self->state.load() != 0) return 0;
  self->source_file = true;
  const int started = flax_handoff_start(raw, path, length, background);
  if (!started) self->source_file = false;
  return started;
}
int flax_handoff_ready(void* raw) {
  return static_cast<Handoff*>(raw)->state.load(std::memory_order_acquire) == 2;
}
char* flax_handoff_take(void* raw) {
  auto* self = static_cast<Handoff*>(raw);
  if (threadId() != self->owner || self->state.load(std::memory_order_acquire) != 2)
    return nullptr;
  const auto start = Clock::now();
  if (self->worker.joinable()) self->worker.join();
  if (self->deferred_gc && !self->gc_phase(self->isolate, 0)) std::abort();
  const auto joined_us = micros(start);
  auto text = std::string("{\"ok\":") + (self->ok ? "true" : "false") +
      ",\"uiThread\":" + std::to_string(self->owner) +
      ",\"executionThread\":" + std::to_string(self->worker_id) +
      ",\"lockUs\":" + std::to_string(self->lock_us) +
      ",\"fileReadUs\":" + std::to_string(self->file_us) +
      ",\"compileUs\":" + std::to_string(self->compile_us) +
      ",\"executeUs\":" + std::to_string(self->run_us) +
      ",\"totalUs\":" + std::to_string(self->total_us) +
      ",\"joinUs\":" + std::to_string(joined_us) +
      ",\"deferredJointGc\":" + (self->deferred_gc ? "true" : "false") + "}";
  self->source.clear();
  self->state.store(0);
  return strdup(text.c_str());
}
const char* flax_handoff_error(void* raw) {
  return static_cast<Handoff*>(raw)->error.c_str();
}
int flax_handoff_close(void* raw) {
  auto* self = static_cast<Handoff*>(raw);
  if (threadId() != self->owner || self->state.load() != 0) return 0;
  {
    v8::Locker lock(self->isolate);
    self->context.Reset();
  }
  delete self;
  return 1;
}
void flax_handoff_free(char* text) { free(text); }
}
