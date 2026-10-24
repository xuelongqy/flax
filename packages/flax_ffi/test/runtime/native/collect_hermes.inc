#include <dart_flax_api.h>
void flaxFfiCollectJs(facebook::jsi::Runtime &runtime) {
  auto heap = flax::sessions.at(&runtime);
  if (heap->count() == 0) {
    facebook::hermes::collectFlaxGC(
        static_cast<facebook::hermes::HermesRuntime &>(runtime));
  }
  Dart_FlaxCollect(false, true);
}
