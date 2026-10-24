#include "jsi_abi/JsiAbiRuntime.h"
#include <dart_flax_api.h>
void flaxFfiCollectJs(facebook::jsi::Runtime &runtime) {
  auto *state = getState(jsi::abi::getAbiRuntime(runtime));
  V8Scope scope(state);
  if (state->heap->cell_count() != 0) {
    // Real Sessions need joint tracing on the idle owner thread.
    state->heap->ScheduleIdle();
    state->heap->Request(true);
    return;
  }
  state->isolate->ClearKeptObjects();
  state->isolate->LowMemoryNotification();
  Dart_FlaxCollect(false, true);
}
