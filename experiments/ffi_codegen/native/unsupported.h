#include "api.h"

typedef struct { unsigned value : 3; unsigned other : 5; } CgBitfield;
typedef struct __attribute__((aligned(32))) { int32_t value; } CgAligned;
int32_t cg_bad_bits(CgBitfield value);
int32_t cg_bad_alignment(CgAligned value);
