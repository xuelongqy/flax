#include "api.h"

CmValue cm_add(CmValue value) { return value + 1; }
int32_t cm_ndebug(void) {
#ifdef NDEBUG
  return 1;
#else
  return 0;
#endif
}
int32_t cm_minimum(void) {
#if TARGET_OS_IPHONE
  return __ENVIRONMENT_IPHONE_OS_VERSION_MIN_REQUIRED__;
#else
  return __ENVIRONMENT_MAC_OS_X_VERSION_MIN_REQUIRED__;
#endif
}
int32_t cm_config(void) { return CM_CONFIG_VALUE; }
int32_t cm_char(char value) { return value; }
