#ifndef FLAX_UINT8_PROTOTYPE_H
#define FLAX_UINT8_PROTOTYPE_H
#include <stddef.h>
#include <stdint.h>

#include "flax/runtime.h"
typedef struct _Dart_Handle* Dart_Handle;
#ifdef __cplusplus
extern "C" {
#endif
/* Experiment-only exports; no change to native ABI 2 or generated UI bindings.
 */
uintptr_t flax_uint8_dart_address(Dart_Handle);
int32_t flax_uint8_collect(FlaxRuntime*, uint8_t young, uint8_t compact,
                           FlaxError*);
uint64_t flax_uint8_counter(uint32_t index);
#ifdef __cplusplus
}
#endif
#endif
