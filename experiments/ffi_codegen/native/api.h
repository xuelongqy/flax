#ifndef FLAX_CODEGEN_API_H
#define FLAX_CODEGEN_API_H

#include <stddef.h>
#include <stdint.h>
#include <TargetConditionals.h>

#define CG_MAGIC (1u << 5)
#define CG_BIG UINT64_C(18446744073709551601)
#define CG_FUNCTION_MACRO(x) ((x) + 1)

typedef struct CgCounter CgCounter;
typedef struct { float x; float y; } CgPoint;
typedef union { uint32_t bits; float number; } CgNumber;
typedef struct { uint8_t tag; uint64_t stamp; CgPoint point; } CgRecord;
typedef struct { double values[3]; } CgArray;
#pragma pack(push, 1)
typedef struct { uint8_t tag; uint32_t value; } CgPacked;
#pragma pack(pop)
typedef int32_t (*CgCallback)(int32_t value, void *context);
typedef enum { CG_ZERO = 0, CG_ANSWER = 6 * 7, CG_NEGATIVE = -7 } CgStatus;

/* The same CPU architecture has different declarations on these SDKs. */
#if TARGET_OS_SIMULATOR
typedef uint32_t CgTargetValue;
#elif TARGET_OS_IPHONE
typedef uint16_t CgTargetValue;
#else
typedef uint64_t CgTargetValue;
#endif
#define CG_TARGET_BYTES sizeof(CgTargetValue)

int32_t cg_add(int32_t a, int32_t b);
_Bool cg_bool(_Bool value);
long cg_long(long value);
size_t cg_size(size_t value);
uint64_t cg_big(void);
CgStatus cg_status(CgStatus value);
CgTargetValue cg_target(CgTargetValue value);
CgPoint cg_move(CgPoint point, float delta);
uint32_t cg_union_bits(CgNumber value);
uint64_t cg_record_value(CgRecord value);
double cg_array_sum(CgArray value);
uint32_t cg_packed_value(CgPacked value);
int32_t cg_sum_array(const int32_t values[4]);
int32_t cg_callback(CgCallback callback, int32_t value, void *context);
const char *cg_greeting(void);
int32_t cg_variadic(int32_t count, ...);

CgCounter *cg_counter_create(int32_t value);
int32_t cg_counter_add(CgCounter *counter, int32_t value);
void cg_counter_destroy(CgCounter *counter);
uint32_t cg_counter_alive(void);
uint32_t cg_counter_freed(void);
extern int32_t cg_global;

#endif
