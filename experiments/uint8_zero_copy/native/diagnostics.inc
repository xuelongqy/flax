#include "api.h"
#include "prototype.h"
#include <jsi/instrumentation.h>
extern "C" __attribute__((visibility("default"))) uintptr_t
flax_uint8_dart_address(Dart_Handle bytes) {
  Dart_TypedData_Type type;
  void* data = nullptr;
  intptr_t length;
  checkDartBuffer(
      Dart_TypedDataAcquireData(bytes, &type, &data, &length));
  checkDartBuffer(Dart_TypedDataReleaseData(bytes));
  return reinterpret_cast<uintptr_t>(data);
}

extern "C" __attribute__((visibility("default"))) int32_t flax_uint8_collect(
    FlaxRuntime* runtime, uint8_t young, uint8_t compact, FlaxError* error) {
  // No active JS Entry: joint GC needs the owner thread at an idle checkpoint.
  return protect(error, [&] {
    auto found = runtimes.find(Dart_CurrentIsolate());
    if (found == runtimes.end() || found->second.empty()) {
      Dart_FlaxCollect(young != 0, compact != 0);
      return;
    }
    runtime = *found->second.begin();
    if (runtime->depth) throw BridgeError(FLAX_STATE_ERROR, "GC needs an idle runtime");
    flax_uint8::collect(*runtime->js, young != 0, compact != 0);
  });
}

extern "C" __attribute__((visibility("default"))) uint64_t
flax_uint8_counter(uint32_t index) {
  switch (index) {
    case 0:
      return flax_uint8_pin_counter(0);
    case 1:
      return flax_uint8_pin_counter(1);
    case 2:
      return flax_uint8_pin_counter(2);
    case 3:
      return uint8_dart_views.load();
    case 4: return pinnedBytes.size();
    case 5: {
      auto found = runtimes.find(Dart_CurrentIsolate());
      if (found == runtimes.end() || found->second.empty()) return 0;
      auto info = (*found->second.begin())->js->instrumentation().getHeapInfo(false);
      auto bytes = info.find("hermes_externalBytes");
      return bytes == info.end() ? UINT64_MAX : bytes->second;
    }
    default:
      return UINT64_MAX;
  }
}
