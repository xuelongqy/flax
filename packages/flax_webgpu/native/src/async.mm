#include "dawn/native/DawnNative.h"
#include "flax/webgpu.h"
#import <Foundation/Foundation.h>
#include <atomic>
#include <chrono>
#include <condition_variable>
#include <cstring>
#include <deque>
#include <dlfcn.h>
#include <memory>
#include <mutex>
#include <stdexcept>
#include <string>
#include <type_traits>
#include <unordered_map>
#include <vector>

namespace {
thread_local std::string errorText, resultText;
std::atomic<size_t> contexts{0}, mappings{0};
std::atomic<size_t> surfaces{0}, storages{0}, publications{0},
    retirementErrors{0};
NSString *string(wgpu::StringView value) {
  if (!value.data)
    return @"";
  return [[NSString alloc]
             initWithBytes:value.data
                    length:value.length == WGPU_STRLEN ? strlen(value.data)
                                                       : value.length
                  encoding:NSUTF8StringEncoding]
             ?: @"";
}
NSString *address(const void *pointer) {
  return [NSString
      stringWithFormat:@"%llu", (unsigned long long)(uintptr_t)pointer];
}
const char *json(id value) {
  auto data = [NSJSONSerialization dataWithJSONObject:value
                                              options:0
                                                error:nullptr];
  if (!data)
    throw std::invalid_argument("Cannot serialize WebGPU result");
  resultText.assign((const char *)data.bytes, data.length);
  return resultText.c_str();
}
NSDictionary *dictionary(const char *value) {
  if (!value)
    return @{};
  auto data = [NSData dataWithBytes:value length:strlen(value)];
  id result = [NSJSONSerialization JSONObjectWithData:data
                                              options:0
                                                error:nullptr];
  if (![result isKindOfClass:NSDictionary.class])
    throw std::invalid_argument("Invalid WebGPU descriptor");
  return result;
}
struct Feature {
  const char *name;
  wgpu::FeatureName value;
};
const Feature features[] = {
#include "feature_names.inc"
};
NSArray *featureNames(const wgpu::SupportedFeatures &supported) {
  auto result = [NSMutableArray new];
  for (size_t i = 0; i < supported.featureCount; ++i)
    for (auto f : features)
      if (f.value == supported.features[i])
        [result addObject:@(f.name)];
  return result;
}
NSDictionary *limits(const wgpu::Limits &value) {
  auto result = [NSMutableDictionary new];
#define LIMIT(name) result[@ #name] = @(value.name);
#define STAGE_LIMIT(name, common) result[@ #name] = @(value.common);
#include "limits.inc"
#undef LIMIT
#undef STAGE_LIMIT
  return result;
}
NSString *errorKind(wgpu::ErrorType type) {
  switch (type) {
  case wgpu::ErrorType::Validation:
    return @"validation";
  case wgpu::ErrorType::OutOfMemory:
    return @"out-of-memory";
  case wgpu::ErrorType::Internal:
    return @"internal";
  case wgpu::ErrorType::NoError:
    return @"none";
  default:
    return @"internal";
  }
}
struct Event {
  __strong NSDictionary *value;
  std::shared_ptr<void> owner;
};
struct State {
  wgpu::Instance instance = wgpu::CreateInstance();
  std::mutex mutex;
  std::atomic<bool> closed{false};
  void (*notify)(void) = nullptr;
  bool notificationPending = false;
  std::deque<Event> events;
  Event delivered;
  State() {
    if (!instance)
      throw std::runtime_error("Cannot create Dawn instance");
    ++contexts;
  }
  ~State() { --contexts; }
  void emit(NSDictionary *value, std::shared_ptr<void> owner = {}) {
    std::lock_guard lock(mutex);
    if (closed)
      return;
    events.push_back({value, std::move(owner)});
    // The listener trampoline copies its notification without entering JS.
    // One wake drains the queue; bursts of completions must not fill the FFI
    // queue.
    if (notify && !notificationPending) {
      notificationPending = true;
      notify();
    }
  }
  void stop() {
    std::lock_guard lock(mutex);
    closed = true;
    notify = nullptr;
    events.clear();
    delivered = {};
  }
};
using Context = std::shared_ptr<State>;
std::mutex devicesMutex;
std::unordered_map<WGPUDevice, std::weak_ptr<State>> devices;
Context state(void *context) {
  if (!context)
    throw std::invalid_argument("Missing WebGPU context");
  return *static_cast<Context *>(context);
}
Context live(void *context) {
  auto value = state(context);
  if (value->closed)
    throw std::runtime_error("WebGPU session is closed");
  return value;
}
template <class F> int status(F body) {
  errorText.clear();
  try {
    @autoreleasepool {
      body();
    }
    return 1;
  } catch (const std::exception &error) {
    errorText = error.what();
    return -1;
  }
}
template <class T> T retained(T value) {
  if (value) {
    if constexpr (std::is_same_v<T, WGPUBuffer>)
      wgpuBufferAddRef(value);
    if constexpr (std::is_same_v<T, WGPUQueue>)
      wgpuQueueAddRef(value);
    if constexpr (std::is_same_v<T, WGPUDevice>)
      wgpuDeviceAddRef(value);
    if constexpr (std::is_same_v<T, WGPUAdapter>)
      wgpuAdapterAddRef(value);
    if constexpr (std::is_same_v<T, WGPUShaderModule>)
      wgpuShaderModuleAddRef(value);
  }
  return value;
}
struct Mapping {
  wgpu::Buffer buffer;
  uint64_t offset;
  bool write;
  std::vector<uint8_t> data;
  Mapping(WGPUBuffer value, uint64_t mode, uint64_t at, size_t size)
      : buffer(wgpu::Buffer::Acquire(retained(value))), offset(at),
        write(mode == uint64_t(wgpu::MapMode::Write)), data(size) {
    if (buffer.ReadMappedRange(at, data.data(), size) != wgpu::Status::Success)
      throw std::runtime_error("Cannot read the mapped buffer range");
    ++mappings;
  }
  ~Mapping() { --mappings; }
};
} // namespace

extern "C" const char *flax_webgpu_error() { return errorText.c_str(); }
extern "C" uint64_t flax_webgpu_live(uint32_t kind) {
  switch (kind) {
  case 0:
    return contexts;
  case 1:
    return mappings;
  case 2:
    return surfaces;
  case 3:
    return storages;
  case 4:
    return publications;
  case 5:
    return retirementErrors;
  default:
    return 0;
  }
}
extern "C" void *flax_webgpu_proc(const char *name) {
  return reinterpret_cast<void *>(
      dawn::native::GetProcs().getProcAddress({name, WGPU_STRLEN}));
}
extern "C" int32_t flax_webgpu_init(const char *name, void *data, size_t size) {
  return status([&] {
#include "struct_defaults.inc"
    throw std::invalid_argument("Unknown WebGPU native structure");
  });
}
extern "C" void *flax_webgpu_create() {
  void *result = nullptr;
  status([&] {
    // Metal completion handlers may outlive their Session's FFI image lease.
    static std::once_flag pin;
    std::call_once(pin, [] {
      Dl_info image{};
      if (!dladdr(reinterpret_cast<void *>(&flax_webgpu_create), &image) ||
          !dlopen(image.dli_fname, RTLD_NOW | RTLD_LOCAL))
        throw std::runtime_error("Cannot retain the WebGPU native image");
    });
    result = new Context(std::make_shared<State>());
  });
  return result;
}
extern "C" void flax_webgpu_signal(void *context, void (*notify)(void)) {
  auto s = state(context);
  std::lock_guard lock(s->mutex);
  if (!s->closed)
    s->notify = notify;
}
extern "C" void flax_webgpu_stop(void *context) {
  if (context)
    state(context)->stop();
}
extern "C" void flax_webgpu_release_context(void *context) {
  if (!context)
    return;
  state(context)->stop();
  delete static_cast<Context *>(context);
}
extern "C" const char *flax_webgpu_poll(void *context) {
  const char *result = nullptr;
  status([&] {
    auto s = state(context);
    s->instance.ProcessEvents();
    std::lock_guard lock(s->mutex);
    s->delivered = {};
    if (s->events.empty()) {
      return;
    }
    s->delivered = std::move(s->events.front());
    s->events.pop_front();
    result = json(s->delivered.value);
  });
  return result;
}
extern "C" void flax_webgpu_acknowledge(void *context) {
  auto s = state(context);
  std::lock_guard lock(s->mutex);
  s->notificationPending = false;
}

extern "C" const char *flax_webgpu_stats(void *context) {
  const char *result = nullptr;
  status([&] {
    auto s = state(context);
    std::lock_guard lock(s->mutex);
    result = json(@{
      @"contexts" : @(contexts.load()),
      @"mappings" : @(mappings.load()),
      @"pendingEvents" : @(s->events.size()),
      @"notificationPending" : @(s->notificationPending),
      @"closed" : @(s->closed.load())
    });
  });
  return result;
}
extern "C" int32_t flax_webgpu_adapter(void *context, uint64_t request,
                                       uint32_t preference, uint32_t fallback) {
  return status([&] {
    auto s = live(context);
    std::weak_ptr<State> weak = s;
    wgpu::RequestAdapterOptions options;
    options.backendType = wgpu::BackendType::Metal;
    options.forceFallbackAdapter = fallback;
    options.powerPreference = preference == 1 ? wgpu::PowerPreference::LowPower
                              : preference == 2
                                  ? wgpu::PowerPreference::HighPerformance
                                  : wgpu::PowerPreference::Undefined;
    s->instance.RequestAdapter(
        &options, wgpu::CallbackMode::AllowSpontaneous,
        [weak, request](wgpu::RequestAdapterStatus result,
                        wgpu::Adapter adapter, wgpu::StringView message) {
          @autoreleasepool {
            if (auto s = weak.lock()) {
              if (result == wgpu::RequestAdapterStatus::Success) {
                auto raw = adapter.MoveToCHandle();
                auto owner = std::shared_ptr<void>(
                    raw, [](void *p) { wgpuAdapterRelease((WGPUAdapter)p); });
                s->emit(
                    @{
                      @"request" : @(request),
                      @"kind" : @"GPUAdapter",
                      @"handle" : address(raw)
                    },
                    owner);
              } else
                s->emit(@{
                  @"request" : @(request),
                  @"value" : NSNull.null,
                  @"message" : string(message)
                });
            }
          }
        });
  });
}
extern "C" int32_t flax_webgpu_device(void *context, WGPUAdapter adapter,
                                      uint64_t request,
                                      const char *descriptor) {
  return status([&] {
    auto s = live(context);
    std::weak_ptr<State> weak = s;
    auto input = dictionary(descriptor);
    auto nativeAdapter = wgpu::Adapter::Acquire(retained(adapter));
    std::vector<wgpu::FeatureName> requested;
    for (auto feature : {wgpu::FeatureName::SharedTextureMemoryIOSurface,
                         wgpu::FeatureName::SharedFenceMTLSharedEvent}) {
      if (!nativeAdapter.HasFeature(feature))
        throw std::runtime_error("Dawn Metal texture sharing is unavailable");
      requested.push_back(feature);
    }
    for (NSString *name in input[@"requiredFeatures"] ?: @[]) {
      bool found = false;
      for (auto f : features)
        if ([name isEqualToString:@(f.name)]) {
          requested.push_back(f.value);
          found = true;
          break;
        }
      if (!found)
        throw std::invalid_argument("Invalid WebGPU feature name");
    }
    wgpu::Limits required;
    NSDictionary *requestedLimits = input[@"requiredLimits"];
    for (NSString *key in requestedLimits ?: @{}) {
      bool found = false;
#define LIMIT(name)                                                            \
  if ([key isEqualToString:@ #name]) {                                         \
    required.name = [requestedLimits[key] unsignedLongLongValue];              \
    found = true;                                                              \
  }
#define STAGE_LIMIT(name, common)                                              \
  if ([key isEqualToString:@ #name]) {                                         \
    auto n = [requestedLimits[key] unsignedLongLongValue];                     \
    required.common = required.common == wgpu::kLimitU32Undefined              \
                          ? n                                                  \
                          : std::max<uint64_t>(required.common, n);            \
    found = true;                                                              \
  }
#include "limits.inc"
#undef LIMIT
#undef STAGE_LIMIT
      if (!found)
        throw std::invalid_argument("Unknown required WebGPU limit");
    }
    std::string label = [(input[@"label"] ?: @"") UTF8String];
    std::string queueLabel =
        [(input[@"defaultQueue"][@"label"] ?: @"") UTF8String];
    wgpu::DeviceDescriptor desc;
    desc.label = {label.data(), label.size()};
    desc.defaultQueue.label = {queueLabel.data(), queueLabel.size()};
    desc.requiredFeatureCount = requested.size();
    desc.requiredFeatures = requested.data();
    desc.requiredLimits = requestedLimits ? &required : nullptr;
    desc.SetUncapturedErrorCallback([](const wgpu::Device &device,
                                       wgpu::ErrorType type,
                                       wgpu::StringView message) {
      @autoreleasepool {
        std::shared_ptr<State> s;
        {
          std::lock_guard lock(devicesMutex);
          auto it = devices.find(device.Get());
          if (it != devices.end())
            s = it->second.lock();
        }
        if (s)
          s->emit(@{
            @"event" : @"uncapturederror",
            @"device" : address(device.Get()),
            @"type" : errorKind(type),
            @"message" : string(message)
          });
      }
    });
    desc.SetDeviceLostCallback(
        wgpu::CallbackMode::AllowSpontaneous,
        [weak](const wgpu::Device &device, wgpu::DeviceLostReason reason,
               wgpu::StringView message) {
          @autoreleasepool {
            {
              std::lock_guard lock(devicesMutex);
              devices.erase(device.Get());
            }
            if (auto s = weak.lock())
              s->emit(@{
                @"event" : @"lost",
                @"device" : address(device.Get()),
                @"reason" : reason == wgpu::DeviceLostReason::Destroyed
                    ? @"destroyed"
                    : @"unknown",
                @"message" : string(message)
              });
          }
        });
    nativeAdapter.RequestDevice(
        &desc, wgpu::CallbackMode::AllowSpontaneous,
        [weak, request](wgpu::RequestDeviceStatus result, wgpu::Device device,
                        wgpu::StringView message) {
          @autoreleasepool {
            if (auto s = weak.lock()) {
              if (result == wgpu::RequestDeviceStatus::Success) {
                auto raw = device.MoveToCHandle();
                {
                  std::lock_guard lock(devicesMutex);
                  devices[raw] = weak;
                }
                auto owner = std::shared_ptr<void>(
                    raw, [](void *p) { wgpuDeviceRelease((WGPUDevice)p); });
                s->emit(
                    @{
                      @"request" : @(request),
                      @"kind" : @"GPUDevice",
                      @"handle" : address(raw)
                    },
                    owner);
              } else
                s->emit(@{
                  @"request" : @(request),
                  @"error" : @"OperationError",
                  @"message" : string(message)
                });
            }
          }
        });
  });
}

#include "canvas.inc"
#include "images.inc"
extern "C" const char *flax_webgpu_info(uint32_t kind, void *object) {
  const char *result = nullptr;
  status([&] {
    wgpu::SupportedFeatures supported;
    wgpu::Limits supportedLimits;
    if (kind == 1) {
      auto adapter = wgpu::Adapter::Acquire(retained((WGPUAdapter)object));
      adapter.GetFeatures(&supported);
      adapter.GetLimits(&supportedLimits);
      wgpu::AdapterInfo info;
      adapter.GetInfo(&info);
      result = json(@{
        @"features" : featureNames(supported),
        @"limits" : limits(supportedLimits),
        @"info" : @{
          @"vendor" : string(info.vendor),
          @"architecture" : string(info.architecture),
          @"device" : string(info.device),
          @"description" : string(info.description),
          @"subgroupMinSize" : @(info.subgroupMinSize),
          @"subgroupMaxSize" : @(info.subgroupMaxSize),
          @"isFallbackAdapter" : @(info.adapterType == wgpu::AdapterType::CPU)
        },
        @"isFallbackAdapter" : @(info.adapterType == wgpu::AdapterType::CPU)
      });
    } else {
      auto device = wgpu::Device::Acquire(retained((WGPUDevice)object));
      device.GetFeatures(&supported);
      device.GetLimits(&supportedLimits);
      result = json(@{
        @"features" : featureNames(supported),
        @"limits" : limits(supportedLimits)
      });
    }
  });
  return result;
}
extern "C" const char *flax_webgpu_wgsl(void *context) {
  const char *result = nullptr;
  status([&] {
    wgpu::SupportedWGSLLanguageFeatures supported;
    live(context)->instance.GetWGSLLanguageFeatures(&supported);
    auto names = [NSMutableArray new];
    for (size_t i = 0; i < supported.featureCount; ++i) {
#define WGSL_FEATURE(native, name)                                             \
  if (supported.features[i] == wgpu::WGSLLanguageFeatureName::native)          \
    [names addObject:@name];
#include "wgsl_features.inc"
#undef WGSL_FEATURE
    }
    result = json(names);
  });
  return result;
}
extern "C" int32_t flax_webgpu_map(void *context, WGPUBuffer buffer,
                                   uint64_t request, uint64_t mode,
                                   uint64_t offset, uint64_t size) {
  return status([&] {
    auto s = live(context);
    std::weak_ptr<State> weak = s;
    auto value = wgpu::Buffer::Acquire(retained(buffer));
    value.MapAsync(wgpu::MapMode(mode), offset, size,
                   wgpu::CallbackMode::AllowSpontaneous,
                   [weak, request, keepAlive = value](
                       wgpu::MapAsyncStatus result, wgpu::StringView message) {
                     (void)keepAlive;
                     @autoreleasepool {
                       if (auto s = weak.lock()) {
                         if (result == wgpu::MapAsyncStatus::Success)
                           s->emit(@{@"request" : @(request)});
                         else
                           s->emit(@{
                             @"request" : @(request),
                             @"error" : result == wgpu::MapAsyncStatus::Aborted
                                 ? @"AbortError"
                                 : @"OperationError",
                             @"message" : string(message)
                           });
                       }
                     }
                   });
  });
}
extern "C" void *flax_webgpu_mapped_range(WGPUBuffer buffer, uint64_t mode,
                                          uint64_t offset, uint64_t size) {
  void *result = nullptr;
  status([&] { result = new Mapping(buffer, mode, offset, size); });
  return result;
}
extern "C" void *flax_webgpu_mapped_data(void *mapping) {
  return static_cast<Mapping *>(mapping)->data.data();
}
extern "C" int32_t flax_webgpu_mapped_flush(void *mapping) {
  return status([&] {
    auto &value = *static_cast<Mapping *>(mapping);
    if (value.write && value.buffer.WriteMappedRange(
                           value.offset, value.data.data(),
                           value.data.size()) != wgpu::Status::Success)
      throw std::runtime_error("Cannot write the mapped buffer range");
  });
}
extern "C" void flax_webgpu_mapped_release(void *mapping) {
  delete static_cast<Mapping *>(mapping);
}
extern "C" int32_t flax_webgpu_done(void *context, WGPUQueue queue,
                                    uint64_t request) {
  return status([&] {
    auto s = live(context);
    std::weak_ptr<State> weak = s;
    auto value = wgpu::Queue::Acquire(retained(queue));
    value.OnSubmittedWorkDone(
        wgpu::CallbackMode::AllowSpontaneous,
        [weak, request, keepAlive = value](wgpu::QueueWorkDoneStatus result,
                                           wgpu::StringView message) {
          (void)keepAlive;
          @autoreleasepool {
            if (auto s = weak.lock()) {
              if (result == wgpu::QueueWorkDoneStatus::Success)
                s->emit(@{@"request" : @(request)});
              else
                s->emit(@{
                  @"request" : @(request),
                  @"error" : @"OperationError",
                  @"message" : string(message)
                });
            }
          }
        });
  });
}
extern "C" int32_t flax_webgpu_pop_error(void *context, WGPUDevice device,
                                         uint64_t request) {
  return status([&] {
    auto s = live(context);
    std::weak_ptr<State> weak = s;
    auto value = wgpu::Device::Acquire(retained(device));
    value.PopErrorScope(wgpu::CallbackMode::AllowSpontaneous,
                        [weak, request](wgpu::PopErrorScopeStatus result,
                                        wgpu::ErrorType type,
                                        wgpu::StringView message) {
                          @autoreleasepool {
                            if (auto s = weak.lock()) {
                              if (result != wgpu::PopErrorScopeStatus::Success)
                                s->emit(@{
                                  @"request" : @(request),
                                  @"error" : @"OperationError",
                                  @"message" : string(message)
                                });
                              else
                                s->emit(@{
                                  @"request" : @(request),
                                  @"type" : errorKind(type),
                                  @"message" : string(message)
                                });
                            }
                          }
                        });
  });
}
extern "C" int32_t flax_webgpu_compilation_info(void *context,
                                                WGPUShaderModule shader,
                                                uint64_t request) {
  return status([&] {
    auto s = live(context);
    std::weak_ptr<State> weak = s;
    auto value = wgpu::ShaderModule::Acquire(retained(shader));
    value.GetCompilationInfo(
        wgpu::CallbackMode::AllowSpontaneous,
        [weak, request,
         keepAlive = value](wgpu::CompilationInfoRequestStatus result,
                            const wgpu::CompilationInfo *info) {
          (void)keepAlive;
          @autoreleasepool {
            if (auto s = weak.lock()) {
              auto messages = [NSMutableArray new];
              if (result == wgpu::CompilationInfoRequestStatus::Success) {
                for (size_t i = 0; i < info->messageCount; ++i) {
                  const auto &m = info->messages[i];
                  [messages addObject:@{
                    @"message" : string(m.message),
                    @"type" : m.type == wgpu::CompilationMessageType::Error
                        ? @"error"
                    : m.type == wgpu::CompilationMessageType::Warning
                        ? @"warning"
                        : @"info",
                    @"lineNum" : @(m.lineNum),
                    @"linePos" : @(m.linePos),
                    @"offset" : @(m.offset),
                    @"length" : @(m.length)
                  }];
                }
                s->emit(@{@"request" : @(request), @"messages" : messages});
              } else
                s->emit(@{
                  @"request" : @(request),
                  @"error" : @"OperationError",
                  @"message" : @"Shader compilation information is unavailable"
                });
            }
          }
        });
  });
}

extern "C" int32_t flax_webgpu_pipeline(void *context, WGPUDevice device,
                                        uint64_t request, uint32_t kind,
                                        const void *descriptor) {
  return status([&] {
    auto s = live(context);
    std::weak_ptr<State> weak = s;
    auto value = wgpu::Device::Acquire(retained(device));
    auto complete = [weak, request, keepAlive = value](
                        auto status, auto pipeline, wgpu::StringView message) {
      (void)keepAlive;
      @autoreleasepool {
        if (auto s = weak.lock()) {
          using T = decltype(pipeline);
          if (status == wgpu::CreatePipelineAsyncStatus::Success) {
            auto raw = pipeline.MoveToCHandle();
            auto owner = std::shared_ptr<void>(raw, [](void *p) {
              if constexpr (std::is_same_v<T, wgpu::ComputePipeline>)
                wgpuComputePipelineRelease((WGPUComputePipeline)p);
              else
                wgpuRenderPipelineRelease((WGPURenderPipeline)p);
            });
            s->emit(
                @{
                  @"request" : @(request),
                  @"kind" : std::is_same_v<T, wgpu::ComputePipeline>
                      ? @"GPUComputePipeline"
                      : @"GPURenderPipeline",
                  @"handle" : address(raw)
                },
                owner);
          } else
            s->emit(@{
              @"request" : @(request),
              @"error" : @"GPUPipelineError",
              @"reason" : status ==
                      wgpu::CreatePipelineAsyncStatus::ValidationError
                  ? @"validation"
                  : @"internal",
              @"message" : string(message)
            });
        }
      }
    };
    if (kind == 1)
      value.CreateComputePipelineAsync(
          static_cast<const wgpu::ComputePipelineDescriptor *>(descriptor),
          wgpu::CallbackMode::AllowSpontaneous,
          [complete](wgpu::CreatePipelineAsyncStatus status,
                     wgpu::ComputePipeline pipeline, wgpu::StringView message) {
            complete(status, std::move(pipeline), message);
          });
    else if (kind == 2)
      value.CreateRenderPipelineAsync(
          static_cast<const wgpu::RenderPipelineDescriptor *>(descriptor),
          wgpu::CallbackMode::AllowSpontaneous,
          [complete](wgpu::CreatePipelineAsyncStatus status,
                     wgpu::RenderPipeline pipeline, wgpu::StringView message) {
            complete(status, std::move(pipeline), message);
          });
    else
      throw std::invalid_argument("Invalid pipeline kind");
  });
}
