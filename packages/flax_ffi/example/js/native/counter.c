#include <stdint.h>
#include <stdlib.h>
#include <string.h>

typedef struct { int32_t value; } Counter;

Counter *counter_create(int32_t value) {
  Counter *counter = malloc(sizeof(*counter));
  if (counter) counter->value = value;
  return counter;
}

int32_t counter_add(Counter *counter, int32_t amount) {
  return counter->value += amount;
}

void counter_destroy(Counter *counter) { free(counter); }

void bytes_increment(uint8_t *bytes, int32_t length) {
  for (int32_t i = 0; i < length; ++i) ++bytes[i];
}

char *message_create(void) {
  char *message = malloc(5);
  if (message) memcpy(message, "Flax", 5);
  return message;
}

void message_destroy(char *message) { free(message); }
