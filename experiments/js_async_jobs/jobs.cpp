// Reuse the previous interruption probe; only the asynchronous entry is new.
#include "../js_slicing/slicing.cpp"
#include "dart_api_dl.h"

namespace {
using RunJob = void (*)();
Dart_Isolate dart_isolate = nullptr;
CFRunLoopRef run_loop = nullptr;
RunJob run_job = nullptr;
bool scheduled = false, running = false, again = false;
int64_t jobs = 0, rearmed = 0;

void schedule_job() {
  if (!run_job) return;
  if (running) {
    again = true;
    return;
  }
  if (scheduled) return;
  scheduled = true;
  CFRunLoopPerformBlock(run_loop, kCFRunLoopCommonModes, ^{
    scheduled = false;
    if (!run_job) return;
    if (running || !pthread_equal(owner, pthread_self())) std::abort();
    auto previous = Dart_CurrentIsolate_DL();
    if (previous && previous != dart_isolate) std::abort();
    if (!previous) Dart_EnterIsolate_DL(dart_isolate);
    Dart_EnterScope_DL();
    running = true;
    ++jobs;
    {
      // One lock covers member lookup, argument construction and JS execution.
      v8::Locker locker(engine.load());
      v8::Isolate::Scope scope(engine.load());
      if (pending.load()) {
        // A final request can outlive the last JS instruction of the prior job.
        // Rearm once after V8 restores thread state; never clear the queue latch.
        ++rearmed;
        engine.load()->RequestInterrupt(interrupted, nullptr);
      }
      flax_slice_enable(1);
      run_job();
      flax_slice_enable(0);
    }
    running = false;
    Dart_ExitScope_DL();
    if (!previous) Dart_ExitIsolate_DL();
    if (again) {
      again = false;
      schedule_job();
    }
  });
  CFRunLoopWakeUp(run_loop);
}
}

extern "C" {
int flax_jobs_init(void* api, RunJob callback) {
  if (Dart_InitializeApiDL(api) != 0 || run_job || !engine.load()) return 0;
  dart_isolate = Dart_CurrentIsolate_DL();
  if (!dart_isolate) return 0;
  run_loop = CFRunLoopGetCurrent();
  CFRetain(run_loop);
  run_job = callback;
  return 1;
}
void flax_jobs_schedule() { schedule_job(); }
int flax_jobs_running() { return running ? 1 : 0; }
int64_t flax_jobs_count() { return jobs; }
int64_t flax_jobs_rearmed() { return rearmed; }
void flax_jobs_close() {
  if (running || scheduled) std::abort();
  run_job = nullptr;
  dart_isolate = nullptr;
  CFRelease(run_loop);
  run_loop = nullptr;
}
}
