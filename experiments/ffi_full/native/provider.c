#include "provider_api.h"
#include <pthread.h>
#include <stdatomic.h>
#include <stdlib.h>

static _Atomic uint64_t created, destroyed;
static _Atomic uint64_t wrong_thread_destroys;
typedef struct Counter {
  int32_t value;
  pthread_t owner;
} Counter;
static _Atomic uint32_t next_fault;
int64_t flax_ffi_fixture_add(int32_t a, int32_t b) { return (int64_t)a + b; }
void *fixture_create(int32_t value) {
  if (atomic_load(&next_fault) == 1) {
    atomic_store(&next_fault, 0);
    return NULL;
  }
  Counter *counter = malloc(sizeof(*counter));
  if (counter) {
    counter->value = value;
    counter->owner = pthread_self();
    atomic_fetch_add(&created, 1);
  }
  return counter;
}
int32_t fixture_update(void *counter, int32_t delta) {
  /* The adapter validates the range before this deliberately small C target. */
  Counter *value = counter;
  value->value += delta;
  return value->value;
}
int32_t fixture_destroy(void *counter) {
  if (atomic_load(&next_fault) == 2) {
    atomic_store(&next_fault, 0);
    return 1;
  }
  if (!pthread_equal(((Counter *)counter)->owner, pthread_self()))
    atomic_fetch_add(&wrong_thread_destroys, 1);
  free(counter);
  atomic_fetch_add(&destroyed, 1);
  return 0;
}
int32_t fixture_inline(FfiInline callback, void *context, int32_t value) {
  return callback(context, value);
}
int32_t fixture_compare(FfiCompare callback, int32_t a, int32_t b) {
  return callback(a, b);
}
uint64_t fixture_stat(uint32_t index) {
  return index == 0   ? atomic_load(&created)
         : index == 1 ? atomic_load(&destroyed)
                      : atomic_load(&wrong_thread_destroys);
}
void fixture_fault(uint32_t value) { atomic_store(&next_fault, value); }
#include "provider.g.inc"
