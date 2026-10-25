#include "counter.h"
#include <stdlib.h>

struct Counter { int32_t value; };
Counter *counter_create(int32_t initial) {
  Counter *counter = malloc(sizeof(*counter));
  if (counter) counter->value = initial;
  return counter;
}
int32_t counter_add(Counter *counter, int32_t delta) { return counter->value += delta; }
void counter_destroy(Counter *counter) { free(counter); }
