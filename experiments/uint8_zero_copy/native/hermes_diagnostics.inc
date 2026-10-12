#include <dart_flax_api.h>
#include "prototype.h"
namespace flax_uint8 {
void collect(facebook::jsi::Runtime& runtime, bool young, bool compact) {
  auto heap = flax::sessions.at(&runtime);
  // Conditional JS roots need Dart's joint marking before Hermes can reclaim
  // them.
  if (heap->count() == 0) {
    facebook::hermes::collectFlaxGC(
        static_cast<facebook::hermes::HermesRuntime&>(runtime));
  }
  Dart_FlaxCollect(young, compact);
}
}  // namespace flax_uint8
