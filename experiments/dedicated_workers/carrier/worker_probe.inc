// Experimental carrier gate. No joint heap or Dart object peers are installed.
#include <dart_api.h>
#include <dart_native_api.h>
#include <unordered_map>
#include <thread>

namespace {
struct WorkerProbe {
  Dart_Isolate owner = Dart_CurrentIsolate();
  jsi_runtime* runtime = nullptr;
  int64_t port = 0;
  ~WorkerProbe() { if (runtime) jsi_release(runtime); }
};
std::mutex workerProbeMutex;
uint64_t nextWorkerProbe = 1;
std::unordered_map<uint64_t, std::shared_ptr<WorkerProbe>> workerProbes;
std::shared_ptr<WorkerProbe> workerProbe(uint64_t id) {
  std::lock_guard lock(workerProbeMutex);
  auto it = workerProbes.find(id);
  if (it == workerProbes.end()) return {};
  return it->second;
}
}
#define WORKER_PROBE_EXPORT extern "C" __attribute__((visibility("default")))
WORKER_PROBE_EXPORT uint64_t flax_worker_probe_create(int64_t port) {
  auto probe = std::make_shared<WorkerProbe>();
  auto previous = flaxFfiDetachedRuntime;
  flaxFfiDetachedRuntime = true;
  probe->runtime = v8_create_runtime(JSI_ABI_VERSION,
      [](void*, jsi_config config) {
        v8_jsi_config_set_explicit_microtask_policy(config, true);
        v8_jsi_config_enable_multi_thread(config, true);
        return jsi_no_error;
      }, nullptr);
  flaxFfiDetachedRuntime = previous;
  if (!probe->runtime) return 0;
  probe->port = port;
  auto* state = getState(probe->runtime);
  {
    V8Scope scope(state);
    auto callback = v8::Function::New(state->getContextLocal(),
        [](const v8::FunctionCallbackInfo<v8::Value>& args) {
          auto* probe = static_cast<WorkerProbe*>(args.Data().As<v8::External>()->Value(v8::kExternalPointerTypeTagDefault));
          if (!args.Length() || !args[0]->IsNumber()) return;
          Dart_CObject message{};
          message.type = Dart_CObject_kDouble;
          message.value.as_double = args[0].As<v8::Number>()->Value();
          Dart_PostCObject(probe->port, &message);
        }, v8::External::New(state->isolate, probe.get(), v8::kExternalPointerTypeTagDefault)).ToLocalChecked();
    state->getContextLocal()->Global()->Set(state->getContextLocal(),
        v8::String::NewFromUtf8Literal(state->isolate, "postMessage"), callback).Check();
  }
  std::lock_guard lock(workerProbeMutex);
  auto id = nextWorkerProbe++;
  workerProbes.emplace(id, std::move(probe));
  return id;
}
WORKER_PROBE_EXPORT int32_t flax_worker_probe_eval(uint64_t id,
                                                  const char* source,
                                                  double* output) {
  auto probe = workerProbe(id);
  if (!probe || probe->owner != Dart_CurrentIsolate()) return 3;
  auto* state = getState(probe->runtime);
  V8Scope scope(state);
  v8::TryCatch errors(state->isolate);
  v8::Local<v8::Script> script;
  v8::Local<v8::Value> result;
  auto code = v8::String::NewFromUtf8(state->isolate, source).ToLocalChecked();
  if (!v8::Script::Compile(state->getContextLocal(), code).ToLocal(&script) ||
      !script->Run(state->getContextLocal()).ToLocal(&result))
    return errors.HasTerminated() ? 2 : 1;
  *output = result->IsNumber() ? result.As<v8::Number>()->Value() : 0;
  return 0;
}
WORKER_PROBE_EXPORT int32_t flax_worker_probe_pump(uint64_t id) {
  auto probe = workerProbe(id);
  if (!probe || probe->owner != Dart_CurrentIsolate()) return 3;
  auto* state = getState(probe->runtime);
  V8Scope scope(state);
  state->microtasks->PerformCheckpoint(state->isolate);
  return 0;
}
WORKER_PROBE_EXPORT void flax_worker_probe_interrupt(uint64_t id) {
  // Holding the registry lock makes the interrupt/disposal race explicit.
  std::lock_guard lock(workerProbeMutex);
  auto it = workerProbes.find(id);
  if (it != workerProbes.end())
    getState(it->second->runtime)->isolate->TerminateExecution();
}
WORKER_PROBE_EXPORT int32_t flax_worker_probe_destroy(uint64_t id) {
  std::shared_ptr<WorkerProbe> probe;
  {
    std::lock_guard lock(workerProbeMutex);
    auto it = workerProbes.find(id);
    if (it == workerProbes.end()) return 0;
    if (it->second->owner != Dart_CurrentIsolate()) return 3;
    probe = std::move(it->second);
    workerProbes.erase(it);
  }
  getState(probe->runtime)->isolate->CancelTerminateExecution();
  probe.reset();
  return 0;
}
WORKER_PROBE_EXPORT uint64_t flax_worker_probe_thread() {
  return std::hash<std::thread::id>{}(std::this_thread::get_id());
}
#undef WORKER_PROBE_EXPORT
