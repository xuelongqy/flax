// Test-only dynamic entry; production bridges do not include this translation
// unit.
#include <cstdlib>
#define main flax_runtime_contract_main
#include "runtime_test.cpp"
#undef main

#if defined(_WIN32)
#define FLAX_TEST_EXPORT __declspec(dllexport)
#else
#define FLAX_TEST_EXPORT __attribute__((visibility("default")))
#endif
extern "C" FLAX_TEST_EXPORT int flax_test_contracts_run() {
#ifdef FLAX_TEST_V8
#if defined(_WIN32)
  _putenv_s("FLAX_VERIFY_V8_JIT", "1");
#else
  setenv("FLAX_VERIFY_V8_JIT", "1", 1);
#endif
#endif
  const auto result = flax_runtime_contract_main();
#ifdef FLAX_TEST_V8
#if defined(_WIN32)
  _putenv_s("FLAX_VERIFY_V8_JIT", "");
#else
  unsetenv("FLAX_VERIFY_V8_JIT");
#endif
#endif
  return result;
}
