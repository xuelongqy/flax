// Same-stack interruption probe, not a production continuation API.
#include <v8.h>
#include <CoreFoundation/CoreFoundation.h>
#include <dispatch/dispatch.h>
#include <pthread.h>
#include <atomic>
#include <algorithm>
#include <chrono>
#include <cstring>
#include <cstdlib>
#include <string>

namespace {
using Clock = std::chrono::steady_clock;
using CanYield = uint8_t (*)();
std::atomic<v8::Isolate*> engine{nullptr};
std::atomic<bool> enabled{false}, pending{false};
std::atomic<int64_t> requests{0};
dispatch_queue_t timer_queue = nullptr;
dispatch_source_t timer = nullptr;
CanYield can_yield = nullptr;
pthread_t owner;
bool paused = false;
int64_t interrupts = 0, yields = 0, suppressed = 0, wrong_thread = 0;
int64_t yielded_us = 0, max_yield_us = 0;
int64_t interval_us = 3000, pump_us = 1000;

void interrupted(v8::Isolate* isolate, void*) {
  if (enabled.load() && isolate == engine.load()) {
    ++interrupts;
    if (!pthread_equal(owner, pthread_self())) {
      ++wrong_thread;
    } else if (!paused && can_yield && can_yield()) {
      ++yields;
      paused = true;
      auto start = Clock::now();
      // shortcut: a nested native event loop retains the original stack; only
      // an experiment may rely on it until frame/reentry/GC safety is proven.
      CFRunLoopRunInMode(kCFRunLoopDefaultMode, pump_us / 1000000.0, true);
      auto elapsed = std::chrono::duration_cast<std::chrono::microseconds>(Clock::now() - start).count();
      yielded_us += elapsed;
      max_yield_us = std::max<int64_t>(max_yield_us, elapsed);
      paused = false;
    } else {
      ++suppressed;
    }
  }
  pending.store(false);
}

void tick(void*) {
  auto* isolate = engine.load();
  if (!isolate || !enabled.load()) return;
  bool expected = false;
  if (pending.compare_exchange_strong(expected, true)) {
    ++requests;
    // The timer queue only sets V8's thread-safe interrupt flag. All JS,
    // callbacks, Flutter and collection execute on the original UI thread.
    isolate->RequestInterrupt(interrupted, nullptr);
  }
}
}

extern "C" {
int flax_slice_capture(CanYield callback) {
  auto* isolate = v8::Isolate::GetCurrent();
  if (!isolate || timer) return 0;
  engine.store(isolate);
  can_yield = callback;
  owner = pthread_self();
  timer_queue = dispatch_queue_create("flax.probe.interrupt-signal", DISPATCH_QUEUE_SERIAL);
  timer = dispatch_source_create(DISPATCH_SOURCE_TYPE_TIMER, 0, 0, timer_queue);
  dispatch_source_set_event_handler_f(timer, tick);
  dispatch_source_set_timer(timer, dispatch_time(DISPATCH_TIME_NOW, interval_us * 1000), interval_us * 1000, 100000);
  dispatch_resume(timer);
  return 1;
}

void flax_slice_enable(int value) {
  if (!pthread_equal(owner, pthread_self())) std::abort();
  enabled.store(value != 0);
}

int flax_slice_paused() { return paused ? 1 : 0; }

char* flax_slice_stats() {
  uint64_t thread_id = 0;
  pthread_threadid_np(nullptr, &thread_id);
  auto text = std::string("{\"interrupts\":") + std::to_string(interrupts) +
      ",\"requests\":" + std::to_string(requests.load()) +
      ",\"pending\":" + (pending.load() ? "true" : "false") +
      ",\"yields\":" + std::to_string(yields) +
      ",\"suppressed\":" + std::to_string(suppressed) +
      ",\"wrongThread\":" + std::to_string(wrong_thread) +
      ",\"yieldedMicros\":" + std::to_string(yielded_us) +
      ",\"maxYieldMicros\":" + std::to_string(max_yield_us) +
      ",\"uiThreadId\":" + std::to_string(thread_id) + "}";
  return strdup(text.c_str());
}

void flax_slice_free(char* text) { free(text); }

void flax_slice_close() {
  enabled.store(false);
  if (timer) {
    dispatch_source_cancel(timer);
    dispatch_sync_f(timer_queue, nullptr, [](void*) {});
    dispatch_release(timer);
    dispatch_release(timer_queue);
    timer = nullptr;
    timer_queue = nullptr;
  }
  engine.store(nullptr);
  can_yield = nullptr;
  // A queued interrupt has static storage and becomes a no-op after close.
}
}
