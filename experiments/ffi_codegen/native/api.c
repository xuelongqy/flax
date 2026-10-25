#include "api.h"
#include <stdarg.h>
#include <stdlib.h>

struct CgCounter { int32_t value; };
static uint32_t alive, freed;
int32_t cg_global = 41;

int32_t cg_add(int32_t a, int32_t b) { return a + b; }
_Bool cg_bool(_Bool value) { return !value; }
long cg_long(long value) { return value + 1; }
size_t cg_size(size_t value) { return value + 1; }
uint64_t cg_big(void) { return CG_BIG; }
CgStatus cg_status(CgStatus value) { return value; }
CgTargetValue cg_target(CgTargetValue value) { return value + 1; }
CgPoint cg_move(CgPoint point, float delta) {
  point.x += delta;
  point.y += delta;
  return point;
}
uint32_t cg_union_bits(CgNumber value) { return value.bits; }
uint64_t cg_record_value(CgRecord value) {
  return value.stamp + value.tag + (uint64_t)value.point.x;
}
double cg_array_sum(CgArray value) {
  return value.values[0] + value.values[1] + value.values[2];
}
uint32_t cg_packed_value(CgPacked value) { return value.tag + value.value; }
int32_t cg_sum_array(const int32_t values[4]) {
  return values[0] + values[1] + values[2] + values[3];
}
int32_t cg_callback(CgCallback callback, int32_t value, void *context) {
  return callback(value, context);
}
const char *cg_greeting(void) { return "generated"; }
int32_t cg_variadic(int32_t count, ...) {
  va_list values;
  va_start(values, count);
  int32_t result = 0;
  for (int32_t i = 0; i < count; ++i) result += va_arg(values, int);
  va_end(values);
  return result;
}
CgCounter *cg_counter_create(int32_t value) {
  if (value == INT32_MIN) return NULL;
  CgCounter *counter = malloc(sizeof(*counter));
  if (counter) { counter->value = value; ++alive; }
  return counter;
}
int32_t cg_counter_add(CgCounter *counter, int32_t value) {
  return counter->value += value;
}
void cg_counter_destroy(CgCounter *counter) {
  if (!counter) return;
  --alive;
  ++freed;
  free(counter);
}
uint32_t cg_counter_alive(void) { return alive; }
uint32_t cg_counter_freed(void) { return freed; }
