#include "flax/runtime.h"
#include <dlfcn.h>
#include <cstring>
#include <iostream>
#include <stdexcept>
#include <vector>

namespace {
void require(bool condition, const char *message) {
  if (!condition) throw std::runtime_error(message);
}
const FlaxApi *load(const char *path, const char *entry) {
  // Libraries own process-lifetime engine state; never unload them during use.
  auto *library = dlopen(path, RTLD_NOW | RTLD_LOCAL);
  if (!library) throw std::runtime_error(dlerror());
  auto bootstrap = reinterpret_cast<const void *(*)(uint32_t)>(dlsym(library, entry));
  require(bootstrap != nullptr, "Missing engine entry");
  auto *api = static_cast<const FlaxApi *>(bootstrap(FLAX_ABI_VERSION));
  require(api && api->version == FLAX_ABI_VERSION && api->struct_size == sizeof(FlaxApi),
          "Incompatible ABI");
  return api;
}
struct Runtime {
  const FlaxApi *api;
  FlaxRuntime *runtime = nullptr;
  FlaxError error{};
  explicit Runtime(const FlaxApi *api) : api(api) { check(api->create(&runtime, &error)); }
  ~Runtime() {
    if (runtime) api->destroy(runtime, &error);
    api->error_clear(&error);
  }
  void check(int status) {
    if (status != FLAX_OK) throw std::runtime_error(
        std::string(reinterpret_cast<char *>(error.message), error.message_length));
  }
  FlaxValueId eval(const char *source) {
    FlaxValueId value = 0;
    check(api->evaluate(runtime, reinterpret_cast<const uint8_t *>(source),
                        std::strlen(source), nullptr, 0, &value, &error));
    return value;
  }
  double number(FlaxValueId value) {
    FlaxValueInfo info{};
    check(api->inspect(runtime, value, &info, &error));
    api->buffer_free(info.string_data);
    require(info.kind == FLAX_NUMBER, "Expected number");
    return info.number;
  }
  void close() { check(api->destroy(runtime, &error)); runtime = nullptr; }
};
void reject(Runtime &target, FlaxValueId foreign, FlaxValueId local,
            FlaxValueId function) {
  auto *api = target.api;
  auto *r = target.runtime;
  auto *e = &target.error;
  FlaxValueInfo info{};
  FlaxValueId out = 0;
  int32_t equal = 0;
  const auto *key = reinterpret_cast<const uint16_t *>(u"value");
  require(api->inspect(r, foreign, &info, e) == FLAX_STATE_ERROR, "Foreign inspect accepted");
  require(api->clone_value(r, foreign, &out, e) == FLAX_STATE_ERROR, "Foreign clone accepted");
  require(api->release_value(r, foreign, e) == FLAX_STATE_ERROR, "Foreign release accepted");
  require(api->get_property(r, foreign, key, 5, &out, e) == FLAX_STATE_ERROR, "Foreign object read accepted");
  require(api->set_property(r, foreign, key, 5, local, e) == FLAX_STATE_ERROR, "Foreign object write accepted");
  require(api->set_property(r, local, key, 5, foreign, e) == FLAX_STATE_ERROR, "Foreign property value accepted");
  require(api->strict_equals(r, local, foreign, &equal, e) == FLAX_STATE_ERROR, "Foreign comparison accepted");
  require(api->call(r, function, 0, &foreign, 1, &out, e) == FLAX_STATE_ERROR, "Foreign argument accepted");
  require(api->call(r, function, foreign, nullptr, 0, &out, e) == FLAX_STATE_ERROR, "Foreign receiver accepted");
  require(api->call(r, foreign, 0, nullptr, 0, &out, e) == FLAX_STATE_ERROR, "Foreign callee accepted");
  target.check(api->get_property(r, local, key, 5, &out, e));
  require(target.number(out) == 42, "Rejected access mutated/released local object");
  require(target.number(target.eval("calls")) == 0, "Rejected call executed JS");
}
void exercise(const FlaxApi *a, const FlaxApi *b, bool reverseDestruction) {
  Runtime first(a), second(b);
  auto left = first.eval("globalThis.calls=0; ({value:42})");
  auto right = second.eval("globalThis.calls=0; ({value:42})");
  auto lf = first.eval("(() => { calls++; })");
  auto rf = second.eval("(() => { calls++; })");
  reject(second, left, right, rf);
  reject(first, right, left, lf);
  first.check(a->release_value(first.runtime, left, &first.error));
  reject(first, left, first.eval("({value:42})"), lf);
  if (reverseDestruction) {
    second.close();
    require(first.number(first.eval("21*2")) == 42, "Survivor failed");
  } else {
    first.close();
    require(second.number(second.eval("21*2")) == 42, "Survivor failed");
  }
  Runtime recreated(a);
  reject(recreated, left, recreated.eval("globalThis.calls=0; ({value:42})"),
         recreated.eval("(() => { calls++; })"));
}
}
int main(int argc, char **argv) {
  try {
    require(argc >= 5 && argc % 2 == 1,
            "Expected at least two library and entry-symbol pairs");
    std::vector<const FlaxApi *> engines;
    for (int i = 1; i < argc; i += 2) engines.push_back(load(argv[i], argv[i + 1]));
    for (int i = 0; i < 20; ++i) {
      for (auto *left : engines) {
        for (auto *right : engines) exercise(left, right, i % 2);
      }
    }
    std::cout << "Native cross-engine/runtime handles, rejection and recreation passed.\n";
    return 0;
  } catch (const std::exception &e) {
    std::cerr << e.what() << '\n';
    return 1;
  }
}
