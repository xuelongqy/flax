#ifndef FLAX_CODEGEN_COUNTER_H
#define FLAX_CODEGEN_COUNTER_H
#include <stdint.h>

typedef struct Counter Counter;
Counter *counter_create(int32_t initial);
int32_t counter_add(Counter *counter, int32_t delta);
void counter_destroy(Counter *counter);
#endif
