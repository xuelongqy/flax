#ifndef FLAX_FFI_GATE_A_PROVIDER_H
#define FLAX_FFI_GATE_A_PROVIDER_H
#include <stdint.h>
#ifdef __cplusplus
extern "C" {
#endif
typedef struct GateACounter GateACounter;
int64_t gate_a_add_i32(int32_t left, int32_t right);
double gate_a_affine_f64(double value, double scale, double offset);
GateACounter* gate_a_counter_create(int32_t value);
int gate_a_counter_add(GateACounter*, int32_t delta, int32_t* result);
void gate_a_counter_free(GateACounter*);
uint64_t gate_a_provider_stat(uint32_t index);
#ifdef __cplusplus
}
#endif
#endif
