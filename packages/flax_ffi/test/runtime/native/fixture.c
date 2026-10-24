#include <pthread.h>
#include <stddef.h>
#include <stdint.h>
#include <stdlib.h>
#include <errno.h>
#include <time.h>
#include <stdatomic.h>

#ifdef FFI_DYNAMIC
#define FN(name) flax_dynamic_##name
#else
#define FN(name) flax_static_##name
#endif
#define API __attribute__((visibility("default")))

static int32_t value = 42;
API void FN(noop)(void) {}
API void *FN(echo_pointer)(void *pointer) { return pointer; }
API int32_t FN(add)(int32_t a, int32_t b) { return a + b; }
API int8_t FN(i8)(int8_t a) { return a; }
API uint8_t FN(u8)(uint8_t a) { return a; }
API int16_t FN(i16)(int16_t a) { return a; }
API uint16_t FN(u16)(uint16_t a) { return a; }
API int32_t FN(i32)(int32_t a) { return a; }
API uint32_t FN(u32)(uint32_t a) { return a; }
API float FN(f32)(float a) { return a; }
API double FN(f64)(double a) { return a; }
API double FN(mixed)(int32_t a, double b, float c, uint32_t d, int32_t e,
                     double f, float g, int32_t h, double i, uint32_t j) {
  return a + b + c + d + e + f + g + h + i + j;
}
API int32_t FN(sum12)(int32_t a, int32_t b, int32_t c, int32_t d, int32_t e,
                      int32_t f, int32_t g, int32_t h, int32_t i, int32_t j,
                      int32_t k, int32_t l) {
  return a + b + c + d + e + f + g + h + i + j + k + l;
}
API double FN(sum12d)(double a, double b, double c, double d, double e,
                      double f, double g, double h, double i, double j,
                      double k, double l) {
  return a + b + c + d + e + f + g + h + i + j + k + l;
}
API void FN(store)(int32_t input) { value = input; }
API int32_t FN(read)(void) { return value; }
API void *FN(token)(int32_t present) { return present ? &value : 0; }
API int32_t FN(dereference)(void *pointer) {
  return pointer ? *(int32_t *)pointer : -1;
}

struct Allocation {
  pthread_t owner;
  max_align_t alignment;
  uint8_t bytes[];
};
static uint32_t allocations = 0, frees = 0, wrong_thread_frees = 0;
API void *FN(memory_alloc)(uint32_t size) {
  struct Allocation *value = calloc(1, sizeof(*value) + size);
  if (!value)
    return NULL;
  value->owner = pthread_self();
  ++allocations;
  return value->bytes;
}
API void FN(memory_free)(void *pointer) {
  if (!pointer)
    return;
  struct Allocation *value =
      (struct Allocation *)((uint8_t *)pointer -
                            offsetof(struct Allocation, bytes));
  if (!pthread_equal(value->owner, pthread_self()))
    ++wrong_thread_frees;
  ++frees;
  free(value);
}
API uint32_t FN(memory_stat)(uint32_t kind) {
  return kind == 0 ? allocations : kind == 1 ? frees : wrong_thread_frees;
}
API uint8_t FN(memory_read)(void *pointer, uint32_t offset) {
  return ((uint8_t *)pointer)[offset];
}
API void FN(memory_write)(void *pointer, uint32_t offset, uint8_t value) {
  ((uint8_t *)pointer)[offset] = value;
}
API void *FN(memory_offset)(void *pointer, uint32_t offset) {
  return (uint8_t *)pointer + offset;
}
API void *FN(memory_text)(void) {
  static const char text[] = "Flax 中文 😀";
  return (void *)text;
}
API uint32_t FN(memory_text_size)(void) { return 17; }
API void *FN(memory_unterminated)(void) {
  static uint8_t bytes[] = {'a', 'b', 'c', 'd'};
  return bytes;
}

struct Counter {
  pthread_t owner;
  int32_t value;
};
static uint32_t counter_allocations = 0, counter_frees = 0;
static uint32_t counter_wrong_thread_frees = 0;
static int counter_fail_create = 0;
API void FN(counter_fail_next_create)(void) { counter_fail_create = 1; }
API void *FN(counter_create)(int32_t initial_value) {
  if (counter_fail_create) {
    counter_fail_create = 0;
    return NULL;
  }
  struct Counter *counter = malloc(sizeof(*counter));
  if (!counter)
    return NULL;
  counter->owner = pthread_self();
  counter->value = initial_value;
  ++counter_allocations;
  return counter;
}
API int32_t FN(counter_get)(void *pointer) {
  return ((struct Counter *)pointer)->value;
}
API void FN(counter_destroy)(void *pointer) {
  if (!pointer)
    return;
  struct Counter *counter = pointer;
  if (!pthread_equal(counter->owner, pthread_self()))
    ++counter_wrong_thread_frees;
  ++counter_frees;
  free(counter);
}
API uint32_t FN(counter_stat)(uint32_t kind) {
  return kind == 0   ? counter_allocations
         : kind == 1 ? counter_frees
                     : counter_wrong_thread_frees;
}

#include <stdarg.h>
#include <string.h>
#include <wchar.h>
API int64_t FN(i64)(int64_t input) { return input; }
API uint64_t FN(u64)(uint64_t input) { return input; }
API char FN(character)(char input) { return input; }
API long FN(c_long)(long input) { return input; }
API size_t FN(c_size)(size_t input) { return input; }
API wchar_t FN(wide_char)(wchar_t input) { return input; }
API uint64_t FN(text_length)(const char *input) { return strlen(input); }
API void *FN(add_pointer)(void) { return (void *)&FN(add); }
API int32_t FN(global_value) = 81;
API int32_t FN(global_read)(void) { return FN(global_value); }

struct Point {
  double x, y;
};
struct Grid {
  struct Point points[2];
  int32_t tag;
};
union Word {
  uint64_t bits;
  double number;
};
union Floats {
  float single;
  float values[3];
};
struct __attribute__((packed)) Packed {
  uint8_t tag;
  double value;
};
struct __attribute__((packed)) PackedFloats {
  float x, y;
};
union Large {
  uint64_t words[3];
  struct Point point;
};
struct Flexible {
  uint32_t count;
  uint8_t bytes[];
};
API struct Point FN(point)(struct Point point, double delta) {
  point.x += delta;
  point.y -= delta;
  return point;
}
API struct Grid FN(grid)(struct Grid grid) {
  grid.points[1].y += grid.tag;
  grid.tag += 1;
  return grid;
}
API union Word FN(word)(union Word word) {
  word.bits ^= UINT64_C(0x123456789abcdef0);
  return word;
}
API union Floats FN(floats)(union Floats floats) {
  floats.values[0] += 1;
  floats.values[1] += 2;
  floats.values[2] += 3;
  return floats;
}
API struct Packed FN(packed)(struct Packed packed) {
  packed.tag += 1;
  packed.value *= 2;
  return packed;
}
API struct PackedFloats FN(packed_floats)(struct PackedFloats point) {
  point.x += 1;
  point.y += 2;
  return point;
}
API union Large FN(large)(union Large value) {
  value.words[2] += 5;
  return value;
}
API uint32_t FN(flexible)(const struct Flexible *value) {
  uint32_t sum = 0;
  for (uint32_t i = 0; i < value->count; ++i)
    sum += value->bytes[i];
  return sum;
}
API uint64_t FN(layout)(uint32_t shape, uint32_t part) {
  switch (shape) {
  case 0:
    return part == 0   ? sizeof(struct Point)
           : part == 1 ? _Alignof(struct Point)
                       : offsetof(struct Point, y);
  case 1:
    return part == 0   ? sizeof(struct Grid)
           : part == 1 ? _Alignof(struct Grid)
                       : offsetof(struct Grid, tag);
  case 2:
    return part == 0 ? sizeof(union Word) : _Alignof(union Word);
  case 3:
    return part == 0 ? sizeof(union Floats) : _Alignof(union Floats);
  case 4:
    return part == 0   ? sizeof(struct Packed)
           : part == 1 ? _Alignof(struct Packed)
                       : offsetof(struct Packed, value);
  case 5:
    return part == 0 ? sizeof(struct PackedFloats)
                     : _Alignof(struct PackedFloats);
  case 6:
    return part == 0 ? sizeof(union Large) : _Alignof(union Large);
  case 7:
    return part == 0   ? sizeof(struct Flexible)
           : part == 1 ? _Alignof(struct Flexible)
                       : offsetof(struct Flexible, bytes);
  default:
    return UINT64_MAX;
  }
}
API int64_t FN(variadic_int)(uint32_t count, ...) {
  va_list arguments;
  va_start(arguments, count);
  int64_t result = 0;
  for (uint32_t i = 0; i < count; ++i)
    result += va_arg(arguments, int);
  va_end(arguments);
  return result;
}
API double FN(variadic_mixed)(int32_t base, ...) {
  va_list arguments;
  va_start(arguments, base);
  int integer = va_arg(arguments, int);
  double number = va_arg(arguments, double);
  const char *text = va_arg(arguments, const char *);
  va_end(arguments);
  return base + integer + number + strlen(text);
}
typedef int32_t (*IntCallback)(int32_t);
API int32_t FN(call_callback)(void *function, int32_t input) {
  return ((IntCallback)function)(input);
}
API struct Point FN(call_point_callback)(void *function, struct Point point) {
  return ((struct Point (*)(struct Point))function)(point);
}
static IntCallback retained;
API void FN(set_retained)(void *function) { retained = (IntCallback)function; }
API int32_t FN(call_retained)(int32_t input) {
  return retained ? retained(input) : -1;
}
API void FN(clear_retained)(void) { retained = NULL; }
struct ThreadCall {
  IntCallback function;
  int32_t input, result;
};
static void *thread_call(void *data) {
  struct ThreadCall *call = data;
  call->result = call->function(call->input);
  return NULL;
}
API int32_t FN(call_on_thread)(void *function, int32_t input) {
  struct ThreadCall call = {(IntCallback)function, input, 0};
  pthread_t thread;
  if (pthread_create(&thread, NULL, thread_call, &call) != 0)
    return -1;
  pthread_join(thread, NULL);
  return call.result;
}
static void *thread_notify(void *data) {
  uint8_t bytes[] = {11, 22, 33, 44};
  ((void (*)(void *, uint32_t))data)(bytes, sizeof(bytes));
  memset(bytes, 0, sizeof(bytes));
  return NULL;
}
API void FN(notify_on_thread)(void *function) {
  pthread_t thread;
  if (pthread_create(&thread, NULL, thread_notify, function) == 0)
    pthread_join(thread, NULL);
}
static uint32_t finalizer_calls = 0;
API void FN(finalizer_free)(void *pointer) {
  ++finalizer_calls;
  free(pointer);
}
API uint32_t FN(finalizer_count)(void) { return finalizer_calls; }

static pthread_t owned_worker;
static pthread_mutex_t worker_mutex = PTHREAD_MUTEX_INITIALIZER;
static pthread_cond_t worker_condition = PTHREAD_COND_INITIALIZER;
static int worker_running = 0, worker_stopping = 0;
static uint32_t worker_stops = 0;
static void *owned_worker_main(void *callback) {
  ((void (*)(void))callback)();
  pthread_mutex_lock(&worker_mutex);
  while (!worker_stopping)
    pthread_cond_wait(&worker_condition, &worker_mutex);
  pthread_mutex_unlock(&worker_mutex);
  return NULL;
}
API uint32_t FN(worker_start)(void *callback) {
  if (worker_running)
    return 0;
  worker_stopping = 0;
  if (pthread_create(&owned_worker, NULL, owned_worker_main, callback) != 0)
    return 0;
  worker_running = 1;
  return 1;
}
API void FN(worker_stop)(void) {
  if (!worker_running)
    return;
  pthread_mutex_lock(&worker_mutex);
  worker_stopping = 1;
  pthread_cond_broadcast(&worker_condition);
  pthread_mutex_unlock(&worker_mutex);
  pthread_join(owned_worker, NULL);
  worker_running = 0;
  ++worker_stops;
}
API uint32_t FN(worker_stop_count)(void) { return worker_stops; }
static atomic_uint wait_started = 0;
API uint32_t FN(wait_until_stop)(void) {
  pthread_mutex_lock(&worker_mutex);
  atomic_fetch_add(&wait_started, 1);
  while (!worker_stopping) pthread_cond_wait(&worker_condition, &worker_mutex);
  pthread_mutex_unlock(&worker_mutex);
  return 42;
}
API uint32_t FN(wait_started)(void) { return atomic_load(&wait_started); }

static pthread_t late_worker;
static pthread_mutex_t late_mutex = PTHREAD_MUTEX_INITIALIZER;
static pthread_cond_t late_condition = PTHREAD_COND_INITIALIZER;
static IntCallback late_first, late_second;
static int late_running, late_stopping, late_done, late_result;
static uint32_t late_timeouts;
static void *late_worker_main(void *unused) {
  (void)unused;
  pthread_mutex_lock(&late_mutex);
  while (!late_stopping) pthread_cond_wait(&late_condition, &late_mutex);
  pthread_mutex_unlock(&late_mutex);
  int result = late_first(20);
  if (late_second) result += late_second(22);
  pthread_mutex_lock(&late_mutex);
  late_result = result;
  late_done = 1;
  pthread_cond_broadcast(&late_condition);
  pthread_mutex_unlock(&late_mutex);
  return NULL;
}
API uint32_t FN(late_start)(void *first, void *second) {
  if (late_running) return 0;
  late_first = (IntCallback)first;
  late_second = (IntCallback)second;
  late_stopping = late_done = late_result = 0;
  late_timeouts = 0;
  late_running = pthread_create(&late_worker, NULL, late_worker_main, NULL) == 0;
  return late_running;
}
API void FN(late_stop)(void) {
  if (!late_running) return;
  struct timespec deadline;
  clock_gettime(CLOCK_REALTIME, &deadline);
  deadline.tv_sec += 2;
  pthread_mutex_lock(&late_mutex);
  late_stopping = 1;
  pthread_cond_broadcast(&late_condition);
  while (!late_done) {
    // Bound a regression failure instead of hanging the test application's owner.
    if (pthread_cond_timedwait(&late_condition, &late_mutex, &deadline) == ETIMEDOUT) {
      ++late_timeouts;
      pthread_mutex_unlock(&late_mutex);
      return;
    }
  }
  pthread_mutex_unlock(&late_mutex);
  pthread_join(late_worker, NULL);
  late_running = 0;
}
API int32_t FN(late_stat)(uint32_t kind) {
  return kind == 0 ? late_result : (int32_t)late_timeouts;
}
API void FN(late_begin)(void) {
  pthread_mutex_lock(&late_mutex);
  late_stopping = 1;
  pthread_cond_broadcast(&late_condition);
  pthread_mutex_unlock(&late_mutex);
}
API void FN(late_stop_unpause)(void *unpause) {
  ((void (*)(uint8_t))unpause)(0);
  FN(late_stop)();
}
API int32_t FN(sum20)(int32_t a, int32_t b, int32_t c, int32_t d, int32_t e,
                      int32_t f, int32_t g, int32_t h, int32_t i, int32_t j,
                      int32_t k, int32_t l, int32_t m, int32_t n, int32_t o,
                      int32_t p, int32_t q, int32_t r, int32_t s, int32_t t) {
  return a + b + c + d + e + f + g + h + i + j + k + l + m + n + o + p + q + r +
         s + t;
}
struct PointerThreadCall {
  void *function, *input;
  int32_t result;
};
static void *pointer_thread_call(void *data) {
  struct PointerThreadCall *call = data;
  call->result = ((int32_t (*)(void *))call->function)(call->input);
  return NULL;
}
API int32_t FN(call_pointer_on_thread)(void *function, void *input) {
  struct PointerThreadCall call = {function, input, 0};
  pthread_t thread;
  if (pthread_create(&thread, NULL, pointer_thread_call, &call) != 0)
    return -1;
  pthread_join(thread, NULL);
  return call.result;
}

API _Bool FN(not_bool)(_Bool value) { return !value; }

API int32_t FN(background)(uint8_t *bytes, uint32_t length, uint32_t milliseconds, int32_t error) {
  struct timespec delay = { milliseconds / 1000, (milliseconds % 1000) * 1000000 };
  nanosleep(&delay, NULL);
  for (uint32_t i = 0; i < length; ++i) ++bytes[i];
  errno = error;
  return (int32_t)length;
}
API uint32_t FN(overlap)(uint8_t *first, uint8_t *second) {
  ++first[1];
  return second[0];
}
static atomic_uint async_allocations = 0, async_frees = 0;
API void *FN(async_alloc)(void) {
  void *result = malloc(16);
  if (result) atomic_fetch_add(&async_allocations, 1);
  struct timespec delay = {0, 80000000};
  nanosleep(&delay, NULL);
  return result;
}
API void FN(async_free)(void *pointer) {
  if (pointer) { free(pointer); atomic_fetch_add(&async_frees, 1); }
}
API uint32_t FN(async_stat)(uint32_t freed) {
  return atomic_load(freed ? &async_frees : &async_allocations);
}

static atomic_uint callback_consumed = 0, callback_errors = 0, callback_aborts = 0;
API uint32_t FN(consume_callback_pointer)(void *callback) {
  void *pointer = ((void *(*)(void))callback)();
  if (!pointer) return 0;
  free(pointer);
  atomic_fetch_add(&callback_consumed, 1);
  return 1;
}
API void FN(callback_outcome_observed)(uint32_t aborted) {
  atomic_fetch_add(aborted ? &callback_aborts : &callback_errors, 1);
}
API uint32_t FN(callback_retirement_stat)(uint32_t kind) {
  return atomic_load(kind == 0 ? &callback_consumed : kind == 1 ? &callback_errors : &callback_aborts);
}
