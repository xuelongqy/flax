#ifndef FLAX_FFI_EXPERIMENT_H
#define FLAX_FFI_EXPERIMENT_H
#include "flax/runtime.h"
#include <stddef.h>
#include <stdint.h>
#ifdef __cplusplus
extern "C" {
#endif

/* Experimental, process-local C ABI. No JSI, STL, or exceptions cross it. */
typedef int32_t (*FfiInline)(void *, int32_t);
typedef int32_t (*FfiCompare)(int32_t, int32_t);
typedef struct FfiProvider {
  uint32_t version;
  size_t size;
  int64_t (*add)(int32_t, int32_t);
  void *(*create)(int32_t);
  int32_t (*update)(void *, int32_t);
  int32_t (*destroy)(void *);
  int32_t (*inline_call)(FfiInline, void *, int32_t);
  int32_t (*compare)(FfiCompare, int32_t, int32_t);
  uint64_t (*stat)(uint32_t);
  void (*fault)(uint32_t);
} FfiProvider;

__attribute__((visibility("default"), used))
const FfiProvider *flax_ffi_fixture_provider(void);
/* Control calls run on the owning isolate; worker wakeups carry no JS
 * references. */
int32_t flax_ffi_experiment_install(FlaxRuntime *, const FfiProvider *,
                                    int64_t port, FlaxError *);
int32_t flax_ffi_experiment_drain(FlaxRuntime *, FlaxError *);
int32_t flax_ffi_experiment_close(FlaxRuntime *, int32_t *done, FlaxError *);
uint64_t flax_ffi_experiment_stat(uint32_t);
int32_t flax_ffi_experiment_collect(FlaxRuntime *, FlaxError *);
#ifdef __cplusplus
}
#endif
#endif
