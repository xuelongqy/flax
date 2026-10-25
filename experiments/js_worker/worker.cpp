// Experimental transport, not the Flax runtime or a cross-heap collector.
// V8 is initialized by the maintained engine before this library is used.
#include <v8.h>
#include <chrono>
#include <condition_variable>
#include <cstdlib>
#include <cstring>
#include <deque>
#include <memory>
#include <mutex>
#include <string>
#include <thread>

namespace {
using namespace std::chrono_literals;
struct Job {
  int64_t id;
  std::string source;
  bool sync = false, done = false;
  std::string result;
};
char* copy(const std::string& value) { return strdup(value.c_str()); }
v8::Local<v8::String> str(v8::Isolate* isolate, const std::string& value) {
  return v8::String::NewFromUtf8(isolate, value.c_str()).ToLocalChecked();
}
std::string utf8(v8::Isolate* isolate, v8::Local<v8::Value> value) {
  v8::String::Utf8Value text(isolate, value);
  return *text ? std::string(*text, text.length()) : "unprintable exception";
}
struct Worker {
  std::mutex mutex;
  std::condition_variable changed;
  std::deque<std::shared_ptr<Job>> jobs;
  std::deque<std::string> events;
  std::thread thread;
  v8::Isolate* isolate = nullptr;
  v8::Global<v8::Context> context;
  bool stop = false, closed = false, sync_waiting = false;
  int64_t request_id = 0, response_id = 0;
  std::string response;

  void emit(int kind, int64_t id, const std::string& body) {
    std::lock_guard lock(mutex);
    events.push_back("[" + std::to_string(kind) + "," + std::to_string(id) + "," + body + "]");
  }
  static void host(const v8::FunctionCallbackInfo<v8::Value>& info) {
    auto* self = static_cast<Worker*>(info.Data().As<v8::External>()->Value(v8::kExternalPointerTypeTagDefault));
    auto* isolate = info.GetIsolate();
    auto ctx = isolate->GetCurrentContext();
    v8::Local<v8::String> encoded;
    if (info.Length() != 1 || !v8::JSON::Stringify(ctx, info[0]).ToLocal(&encoded)) return;
    std::unique_lock lock(self->mutex);
    if (self->sync_waiting || self->stop) {
      isolate->ThrowException(v8::Exception::Error(str(isolate,
          "UI is synchronously waiting: calling Dart here would deadlock")));
      return;
    }
    auto id = ++self->request_id;
    self->events.push_back("[1," + std::to_string(id) + "," + utf8(isolate, encoded) + "]");
    if (!self->changed.wait_for(lock, 5s, [&] {
      return self->stop || self->sync_waiting || self->response_id == id;
    }) || self->stop || self->sync_waiting) {
      isolate->ThrowException(v8::Exception::Error(str(isolate, "Dart reply cancelled or unavailable")));
      return;
    }
    auto response = std::move(self->response);
    lock.unlock();
    v8::Local<v8::Value> decoded;
    if (!v8::JSON::Parse(ctx, str(isolate, response)).ToLocal(&decoded)) return;
    auto object = decoded.As<v8::Object>();
    auto value = object->Get(ctx, str(isolate, "value")).ToLocalChecked();
    if (!object->Get(ctx, str(isolate, "ok")).ToLocalChecked()->BooleanValue(isolate)) {
      isolate->ThrowException(v8::Exception::Error(str(isolate, utf8(isolate, value))));
    } else {
      info.GetReturnValue().Set(value);
    }
  }
  std::string evaluate(const std::string& source) {
    v8::HandleScope handles(isolate);
    auto ctx = context.Get(isolate);
    v8::Context::Scope entered(ctx);
    v8::TryCatch caught(isolate);
    if (source == "@gc") {
      isolate->ClearKeptObjects();
      isolate->LowMemoryNotification();
      return "{\"ok\":true,\"value\":null}";
    }
    v8::Local<v8::Script> script;
    v8::Local<v8::Value> value;
    bool ok = v8::Script::Compile(ctx, str(isolate, source)).ToLocal(&script) && script->Run(ctx).ToLocal(&value);
    if (caught.HasTerminated()) {
      isolate->CancelTerminateExecution();
      return "{\"ok\":false,\"value\":\"Execution terminated\"}";
    }
    if (!ok) value = str(isolate, utf8(isolate, caught.Exception()));
    if (value->IsUndefined()) value = v8::Null(isolate);
    v8::Local<v8::String> encoded;
    if (!v8::JSON::Stringify(ctx, value).ToLocal(&encoded))
      return "{\"ok\":false,\"value\":\"Result must be JSON transferable\"}";
    return std::string("{\"ok\":") + (ok ? "true" : "false") + ",\"value\":" + utf8(isolate, encoded) + "}";
  }
  void run() {
    std::unique_ptr<v8::ArrayBuffer::Allocator> allocator(v8::ArrayBuffer::Allocator::NewDefaultAllocator());
    v8::Isolate::CreateParams params;
    params.array_buffer_allocator = allocator.get();
    auto* own_isolate = v8::Isolate::New(params);
    {
      std::lock_guard lock(mutex);
      isolate = own_isolate;
    }
    {
      v8::Locker locker(own_isolate);
      v8::Isolate::Scope entered(own_isolate);
      {
        v8::HandleScope handles(own_isolate);
        auto ctx = v8::Context::New(own_isolate);
        v8::Context::Scope scoped(ctx);
        context.Reset(own_isolate, ctx);
        auto external = v8::External::New(own_isolate, this, v8::kExternalPointerTypeTagDefault);
        ctx->Global()->Set(ctx, str(own_isolate, "nativeCall"), v8::Function::New(ctx, host, external).ToLocalChecked()).Check();
      }
      emit(3, 0, "\"ready\"");
      while (true) {
        std::shared_ptr<Job> job;
        {
          std::unique_lock lock(mutex);
          changed.wait(lock, [&] { return stop || !jobs.empty(); });
          if (stop) break;
          job = jobs.front();
          jobs.pop_front();
        }
        emit(4, job->id, "null");
        auto result = evaluate(job->source);
        own_isolate->ClearKeptObjects();
        {
          std::lock_guard lock(mutex);
          job->result = result;
          job->done = true;
        }
        changed.notify_all();
        if (!job->sync) emit(2, job->id, result);
      }
      context.Reset();
    }
    {
      std::lock_guard lock(mutex);
      isolate = nullptr;
    }
    own_isolate->Dispose();
    {
      std::lock_guard lock(mutex);
      closed = true;
      for (auto& job : jobs) {
        job->result = "{\"ok\":false,\"value\":\"Worker closed\"}";
        job->done = true;
      }
      jobs.clear();
    }
    changed.notify_all();
    emit(3, 0, "\"closed\"");
  }
};
}
extern "C" {
void* flax_worker_create() {
  auto* worker = new Worker();
  worker->thread = std::thread([worker] { worker->run(); });
  return worker;
}
int flax_worker_submit(Worker* worker, int64_t id, const char* source) {
  std::lock_guard lock(worker->mutex);
  if (worker->stop || worker->jobs.size() >= 64) return 0;
  worker->jobs.push_back(std::make_shared<Job>(Job{id, source, false, false, {}}));
  worker->changed.notify_all();
  return 1;
}
char* flax_worker_sync(Worker* worker, const char* source) {
  auto job = std::make_shared<Job>(Job{-1, source, true, false, {}});
  std::unique_lock lock(worker->mutex);
  if (worker->stop) return copy("{\"ok\":false,\"value\":\"Worker closed\"}");
  worker->sync_waiting = true;
  worker->jobs.push_back(job);
  worker->changed.notify_all();
  bool done = worker->changed.wait_for(lock, 5s, [&] { return job->done || worker->closed; });
  worker->sync_waiting = false;
  if (!done) {
    worker->stop = true;
    if (worker->isolate) worker->isolate->TerminateExecution();
    worker->changed.notify_all();
    return copy("{\"ok\":false,\"value\":\"Synchronous deadline exceeded\"}");
  }
  return copy(job->done ? job->result : "{\"ok\":false,\"value\":\"Worker closed\"}");
}
char* flax_worker_poll(Worker* worker) {
  std::lock_guard lock(worker->mutex);
  if (worker->events.empty()) return nullptr;
  auto value = std::move(worker->events.front());
  worker->events.pop_front();
  return copy(value);
}
void flax_worker_reply(Worker* worker, int64_t id, const char* reply) {
  std::lock_guard lock(worker->mutex);
  if (worker->stop) return;
  worker->response_id = id;
  worker->response = reply;
  worker->changed.notify_all();
}
void flax_worker_stop(Worker* worker) {
  std::lock_guard lock(worker->mutex);
  worker->stop = true;
  if (worker->isolate) worker->isolate->TerminateExecution();
  worker->changed.notify_all();
}
void flax_worker_destroy(Worker* worker) {
  flax_worker_stop(worker);
  worker->thread.join();
  delete worker;
}
void flax_worker_free(char* text) { free(text); }
}
