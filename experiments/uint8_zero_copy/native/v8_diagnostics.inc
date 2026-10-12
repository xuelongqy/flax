#include <dart_flax_api.h>
#include "jsi_abi/JsiAbiRuntime.h"
#include "prototype.h"
namespace flax_uint8 {
void collect(facebook::jsi::Runtime& runtime, bool young, bool compact) {
  auto* state = getState(jsi::abi::getAbiRuntime(runtime));
  V8Scope scope(state);
  // Follow the same joint collector as normal engine GC.
  state->heap->Request(true);
  Dart_FlaxCollect(young, compact);
}
}  // namespace flax_uint8
