#include "provider.h"
#include <limits.h>
#include <stdlib.h>

struct GateACounter { int32_t value; };
static uint64_t stats[4];

int64_t gate_a_add_i32(int32_t left, int32_t right) {
  ++stats[0];
  return (int64_t)left + right;
}

double gate_a_affine_f64(double value, double scale, double offset) {
  ++stats[1];
  return value * scale + offset;
}

GateACounter* gate_a_counter_create(int32_t value) {
  GateACounter* counter = malloc(sizeof(*counter));
  if (counter) {
    counter->value = value;
    ++stats[2];
  }
  return counter;
}

int gate_a_counter_add(GateACounter* counter, int32_t delta, int32_t* result) {
  const int64_t next = (int64_t)counter->value + delta;
  if (next < INT32_MIN || next > INT32_MAX) return 0;
  *result = counter->value = (int32_t)next;
  return 1;
}

void gate_a_counter_free(GateACounter* counter) {
  if (counter) {
    ++stats[3];
    free(counter);
  }
}

uint64_t gate_a_provider_stat(uint32_t index) {
  return index < 4 ? stats[index] : 0;
}
