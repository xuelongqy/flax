#ifndef FLAX_FFI_PROVIDER_API_H
#define FLAX_FFI_PROVIDER_API_H
#include "ffi_experiment.h"
__attribute__((visibility("default"), used))
int64_t flax_ffi_fixture_add(int32_t a, int32_t b);
void *fixture_create(int32_t value);
int32_t fixture_update(void *counter, int32_t delta);
int32_t fixture_destroy(void *counter);
int32_t fixture_inline(FfiInline callback, void *context, int32_t value);
int32_t fixture_compare(FfiCompare callback, int32_t a, int32_t b);
uint64_t fixture_stat(uint32_t index);
void fixture_fault(uint32_t value);
#endif
