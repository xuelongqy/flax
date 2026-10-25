#ifndef FLAX_CODEGEN_CMAKE_H
#define FLAX_CODEGEN_CMAKE_H
#include <stdint.h>
#include <TargetConditionals.h>

/* Release defaults must not change the header's calling ABI. */
#ifdef NDEBUG
typedef double CmValue;
#else
typedef uint64_t CmValue;
#endif
#ifdef __cplusplus
extern "C" {
#endif
CmValue cm_add(CmValue value);
int32_t cm_ndebug(void);
int32_t cm_minimum(void);
int32_t cm_config(void);
int32_t cm_char(char value);
#ifdef __cplusplus
}
#endif
#endif
