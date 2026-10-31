#import "FlutterTexture.h"
#import "flax_dawn_interop.h"
#include "scene_wgsl.h"
#import <CoreVideo/CoreVideo.h>
#import <Foundation/Foundation.h>
#import <IOSurface/IOSurface.h>
#include <algorithm>
#include <atomic>
#include <chrono>
#include <cmath>
#include <cstdlib>
#include <dawn/native/MetalBackend.h>
#include <dawn/webgpu_cpp.h>
#include <map>
#include <memory>
#include <mutex>
#include <stdexcept>
#include <string>
#include <vector>

using Clock = std::chrono::steady_clock;
static double millis(Clock::time_point start) {
  return std::chrono::duration<double, std::milli>(Clock::now() - start)
      .count();
}
static void require(bool ok, const char *message) {
  if (!ok)
    throw std::runtime_error(message);
}
static std::atomic<uint64_t> liveDevices{0};

static std::atomic<uint64_t> liveFrameLeases{0};
struct Frame {
  CVPixelBufferRef pixels = nullptr;
  wgpu::SharedTextureMemory memory;
  wgpu::Texture texture;
  wgpu::SharedFence consumerFence;
  __strong id<MTLTexture> metalTexture = nil;
  __strong id<MTLFence> readyFence = nil;
  __strong id<MTLSharedEvent> consumerEvent = nil;
  std::atomic<uint64_t> consumerValue{0};
  std::atomic<bool> leased{false};
  bool initialized = false, used = false;
  ~Frame() {
    if (pixels)
      CVPixelBufferRelease(pixels);
  }
};
struct Sample {
  Clock::time_point submittedAt, completedAt, acquiredAt;
  bool completed = false, acquired = false, deliveryRecorded = false;
  bool consumed = false, measured = true;
};
struct InteropMetrics {
  std::mutex mutex;
  uint64_t reads = 0, gates = 0, readsPendingProducer = 0, retired = 0;
  uint64_t consumerSignals = 0, retirementErrors = 0;
  std::vector<double> deliveryMs, acquireMs, consumerMs, consumerGpuMs;
  std::string error;
  void delivery(Sample &sample) {
    if (sample.completed && sample.acquired && !sample.deliveryRecorded) {
      if (sample.measured && deliveryMs.size() < 4096)
        deliveryMs.push_back(std::chrono::duration<double, std::milli>(
                                 sample.acquiredAt - sample.completedAt)
                                 .count());
      sample.deliveryRecorded = true;
    }
  }
};

@interface DawnFrameLease : NSObject <FlaxDawnFrame> {
  std::shared_ptr<Frame> _frame;
  std::shared_ptr<Sample> _sample;
  std::shared_ptr<InteropMetrics> _metrics;
  id<MTLSharedEvent> _readyEvent;
  uint64_t _readyValue;
  id<MTLCommandQueue> _consumerQueue;
}
- (instancetype)initWithFrame:(std::shared_ptr<Frame>)frame
                       sample:(std::shared_ptr<Sample>)sample
                      metrics:(std::shared_ptr<InteropMetrics>)metrics
                   readyEvent:(id<MTLSharedEvent>)event
                   readyValue:(uint64_t)value;
- (void)acquired;
@end
@implementation DawnFrameLease
- (instancetype)initWithFrame:(std::shared_ptr<Frame>)frame
                       sample:(std::shared_ptr<Sample>)sample
                      metrics:(std::shared_ptr<InteropMetrics>)metrics
                   readyEvent:(id<MTLSharedEvent>)event
                   readyValue:(uint64_t)value {
  if ((self = [super init])) {
    _frame = std::move(frame);
    _sample = std::move(sample);
    _metrics = std::move(metrics);
    _readyEvent = event;
    _readyValue = value;
    ++liveFrameLeases;
  }
  return self;
}
- (void)acquired {
  std::lock_guard<std::mutex> lock(_metrics->mutex);
  ++_metrics->reads;
  if (!_sample->acquired) {
    _sample->acquired = true;
    _sample->acquiredAt = Clock::now();
    if (_sample->measured && _metrics->acquireMs.size() < 4096)
      _metrics->acquireMs.push_back(millis(_sample->submittedAt));
    if (_readyEvent.signaledValue < _readyValue)
      ++_metrics->readsPendingProducer;
    _metrics->delivery(*_sample);
  }
}
- (id<MTLFence>)prepareOnQueue:(id<MTLCommandQueue>)queue {
  if (!_consumerQueue) {
    _consumerQueue = queue;
    auto commands = [queue commandBuffer];
    // Shared events are valid across Dawn/Flutter queues; fences order this
    // pass.
    [commands encodeWaitForEvent:_readyEvent value:_readyValue];
    auto blit = [commands blitCommandEncoder];
    [blit updateFence:_frame->readyFence];
    [blit endEncoding];
    [commands addCompletedHandler:^(id<MTLCommandBuffer> completed) {
      if (completed.status != MTLCommandBufferStatusCompleted) {
        std::lock_guard<std::mutex> lock(self->_metrics->mutex);
        self->_metrics->error = "Flutter ready-event gate failed";
      }
    }];
    [commands commit];
    std::lock_guard<std::mutex> lock(_metrics->mutex);
    ++_metrics->gates;
  }
  // The maintained macOS compositor and its snapshots share one Metal queue.
  if (_consumerQueue != queue) {
    std::lock_guard<std::mutex> lock(_metrics->mutex);
    _metrics->error = "The probe does not support a second Flutter Metal queue";
    return nil;
  }
  return _frame->readyFence;
}
- (void)encodeReadComplete:(id<MTLCommandBuffer>)commands {
  const uint64_t value = ++_frame->consumerValue;
  [commands encodeSignalEvent:_frame->consumerEvent value:value];
  {
    std::lock_guard<std::mutex> lock(_metrics->mutex);
    ++_metrics->consumerSignals;
  }
  // Keep the lease through actual GPU completion.
  // The command buffer also retains the Metal view.
  [commands addCompletedHandler:^(id<MTLCommandBuffer> completed) {
    std::lock_guard<std::mutex> lock(self->_metrics->mutex);
    if (completed.status != MTLCommandBufferStatusCompleted) {
      self->_metrics->error = "Flutter texture consumption failed";
    } else if (!self->_sample->consumed) {
      self->_sample->consumed = true;
      if (self->_sample->measured && self->_metrics->consumerMs.size() < 4096) {
        self->_metrics->consumerMs.push_back(
            millis(self->_sample->submittedAt));
        self->_metrics->consumerGpuMs.push_back(
            (completed.GPUEndTime - completed.GPUStartTime) * 1000);
      }
    }
  }];
}
- (void)dealloc {
  // Cached images and in-flight Metal commands both retain the texture
  // view/lease.
  const bool safe =
      _frame->consumerEvent.signaledValue >= _frame->consumerValue;
  {
    std::lock_guard<std::mutex> lock(_metrics->mutex);
    ++_metrics->retired;
    if (!safe) {
      ++_metrics->retirementErrors;
      _metrics->error = "A surface retired before its consumer GPU fence";
    }
  }
  _frame->leased = !safe;
  --liveFrameLeases;
}
@end

@interface DawnProbeTexture
    : NSObject <FlutterTexture, FlaxDawnTextureProvider> {
  std::mutex _mutex;
  id<MTLTexture> _texture;
}
- (void)publish:(id<MTLTexture>)texture;
@end
@implementation DawnProbeTexture
- (void)publish:(id<MTLTexture>)texture {
  std::lock_guard<std::mutex> lock(_mutex);
  _texture = texture;
}
- (id<MTLTexture>)copyFlaxDawnMetalTexture {
  std::lock_guard<std::mutex> lock(_mutex);
  [(DawnFrameLease *)FlaxDawnFrameForTexture(_texture) acquired];
  return _texture;
}
- (CVPixelBufferRef)copyPixelBuffer {
  return nullptr;
}
@end

namespace {
struct State {
  wgpu::Instance instance;
  wgpu::Adapter adapter;
  wgpu::Device device;
  wgpu::Queue queue;
  wgpu::RenderPipeline pipeline;
  wgpu::Buffer uniform;
  wgpu::BindGroup group;
  __strong NSObject<FlutterTextureRegistry> *registry = nil;
  __strong DawnProbeTexture *texture = nil;
  int64_t textureId = 0;
  uint32_t width = 0, height = 0;
  std::atomic<bool> closed{false}, busy{false};
  std::atomic<uint64_t> submitted{0}, completed{0}, displayed{0}, skipped{0};
  std::mutex mutex;
  std::string error;
  std::string adapterName;
  std::vector<double> encodeMs, completionMs;
  bool timestamps = false, renderTiming = false;
  wgpu::QuerySet renderQueries;
  wgpu::Buffer renderResolve, renderReadback;
  std::vector<double> renderGpuMs;
  uint64_t gpuTimestampReadbacks = 0;
  std::vector<std::shared_ptr<Frame>> pool;
  std::shared_ptr<InteropMetrics> interop = std::make_shared<InteropMetrics>();
  uint64_t reused = 0, poolMisses = 0;
  State() { ++liveDevices; }
  ~State() {
    group = nullptr;
    uniform = nullptr;
    pipeline = nullptr;
    queue = nullptr;
    if (device)
      device.Destroy();
    device = nullptr;
    adapter = nullptr;
    instance = nullptr;
    --liveDevices;
  }
};
std::mutex validationMutex;
std::string validationError;
std::mutex statesMutex;
std::map<uint64_t, std::shared_ptr<State>> states;
uint64_t nextId = 1;
thread_local std::string resultText, lastError;

std::shared_ptr<State> lookup(uint64_t id) {
  std::lock_guard<std::mutex> lock(statesMutex);
  auto it = states.find(id);
  require(it != states.end(), "Unknown or closed Dawn probe");
  return it->second;
}
void wait(State &s, wgpu::Future future) {
  require(s.instance.WaitAny(future, 10'000'000'000) ==
              wgpu::WaitStatus::Success,
          "Dawn operation exceeded ten seconds");
}
wgpu::ShaderModule shader(State &s, const char *source) {
  wgpu::ShaderSourceWGSL code;
  code.code = source;
  wgpu::ShaderModuleDescriptor desc;
  desc.nextInChain = &code;
  return s.device.CreateShaderModule(&desc);
}
wgpu::Buffer buffer(State &s, uint64_t size, wgpu::BufferUsage usage) {
  wgpu::BufferDescriptor desc;
  desc.size = size;
  desc.usage = usage;
  return s.device.CreateBuffer(&desc);
}
double percentile(std::vector<double> values, double p) {
  if (values.empty())
    return 0;
  std::sort(values.begin(), values.end());
  return values[std::min(
      values.size() - 1,
      static_cast<size_t>(std::ceil(values.size() * p) - 1))];
}
NSDictionary *distribution(const std::vector<double> &values) {
  return @{
    @"count" : @(values.size()),
    @"p50Ms" : @(percentile(values, .5)),
    @"p95Ms" : @(percentile(values, .95)),
    @"p99Ms" : @(percentile(values, .99))
  };
}
const char *json(NSDictionary *value) {
  NSData *data = [NSJSONSerialization dataWithJSONObject:value
                                                 options:NSJSONWritingSortedKeys
                                                   error:nil];
  require(data != nil, "Cannot encode probe result");
  resultText.assign(static_cast<const char *>(data.bytes), data.length);
  return resultText.c_str();
}
std::shared_ptr<State> createDevice() {
  auto s = std::make_shared<State>();
  wgpu::InstanceFeatureName feature = wgpu::InstanceFeatureName::TimedWaitAny;
  wgpu::InstanceDescriptor desc;
  desc.requiredFeatureCount = 1;
  desc.requiredFeatures = &feature;
  s->instance = wgpu::CreateInstance(&desc);
  require(bool(s->instance), "Cannot create Dawn instance");
  wgpu::RequestAdapterOptions options;
  options.backendType = wgpu::BackendType::Metal;
  options.powerPreference = wgpu::PowerPreference::HighPerformance;
  wait(*s, s->instance.RequestAdapter(
               &options, wgpu::CallbackMode::WaitAnyOnly,
               [&](wgpu::RequestAdapterStatus status, wgpu::Adapter adapter,
                   wgpu::StringView message) {
                 if (status == wgpu::RequestAdapterStatus::Success)
                   s->adapter = std::move(adapter);
                 else
                   s->error.assign(message.data, message.length);
               }));
  require(bool(s->adapter), "No hardware Metal adapter");
  wgpu::AdapterInfo info;
  s->adapter.GetInfo(&info);
  require(info.adapterType != wgpu::AdapterType::CPU,
          "Software adapter rejected");
  s->adapterName.assign(info.device.data, info.device.length);
  std::vector<wgpu::FeatureName> features{
      wgpu::FeatureName::SharedTextureMemoryIOSurface,
      wgpu::FeatureName::SharedFenceMTLSharedEvent};
  for (auto f : features)
    require(s->adapter.HasFeature(f), "Missing IOSurface/shared-event feature");
  s->timestamps = s->adapter.HasFeature(wgpu::FeatureName::TimestampQuery);
  if (s->timestamps)
    features.push_back(wgpu::FeatureName::TimestampQuery);
  wgpu::DeviceDescriptor deviceDesc;
  deviceDesc.requiredFeatureCount = features.size();
  deviceDesc.requiredFeatures = features.data();
  deviceDesc.SetUncapturedErrorCallback(
      [](const wgpu::Device &, wgpu::ErrorType, wgpu::StringView message) {
        std::lock_guard<std::mutex> lock(validationMutex);
        validationError.assign(message.data, message.length);
        fprintf(stderr, "DAWN_VALIDATION: %s\n", validationError.c_str());
      });
  wait(*s, s->adapter.RequestDevice(
               &deviceDesc, wgpu::CallbackMode::WaitAnyOnly,
               [&](wgpu::RequestDeviceStatus status, wgpu::Device device,
                   wgpu::StringView message) {
                 if (status == wgpu::RequestDeviceStatus::Success)
                   s->device = std::move(device);
                 else
                   s->error.assign(message.data, message.length);
               }));
  require(bool(s->device), "Cannot create Metal WebGPU device");
  s->queue = s->device.GetQueue();
  return s;
}

NSDictionary *computeCheck(State &s) {
  constexpr uint32_t count = 262144, batches = 32, samples = 40;
  constexpr uint64_t bytes = count * sizeof(float);
  std::vector<float> values(count);
  for (uint32_t i = 0; i < count; ++i)
    values[i] = float(i % 1024);
  auto input =
      buffer(s, bytes, wgpu::BufferUsage::Storage | wgpu::BufferUsage::CopyDst);
  auto output =
      buffer(s, bytes, wgpu::BufferUsage::Storage | wgpu::BufferUsage::CopySrc);
  auto readback =
      buffer(s, bytes, wgpu::BufferUsage::MapRead | wgpu::BufferUsage::CopyDst);
  s.queue.WriteBuffer(input, 0, values.data(), bytes);
  auto module = shader(s, R"(
@group(0) @binding(0) var<storage, read> input: array<f32>;
@group(0) @binding(1) var<storage, read_write> output: array<f32>;
@compute @workgroup_size(64) fn main(@builtin(global_invocation_id) id: vec3u) {
  if (id.x < arrayLength(&input)) { output[id.x] = input[id.x] * 3.0 + 7.0; }
})");
  wgpu::ComputePipelineDescriptor desc;
  desc.compute.module = module;
  desc.compute.entryPoint = "main";
  auto pipeline = s.device.CreateComputePipeline(&desc);
  wgpu::BindGroupEntry entries[2];
  entries[0].binding = 0;
  entries[0].buffer = input;
  entries[0].size = bytes;
  entries[1].binding = 1;
  entries[1].buffer = output;
  entries[1].size = bytes;
  wgpu::BindGroupDescriptor groupDesc;
  groupDesc.layout = pipeline.GetBindGroupLayout(0);
  groupDesc.entryCount = 2;
  groupDesc.entries = entries;
  auto group = s.device.CreateBindGroup(&groupDesc);
  wgpu::QuerySet queries;
  wgpu::Buffer queryResolve, queryRead;
  if (s.timestamps) {
    wgpu::QuerySetDescriptor q;
    q.type = wgpu::QueryType::Timestamp;
    q.count = 2;
    queries = s.device.CreateQuerySet(&q);
    queryResolve = buffer(
        s, 16, wgpu::BufferUsage::QueryResolve | wgpu::BufferUsage::CopySrc);
    queryRead =
        buffer(s, 16, wgpu::BufferUsage::CopyDst | wgpu::BufferUsage::MapRead);
  }
  std::vector<double> gpu, host;
  for (uint32_t sample = 0; sample < samples + 5; ++sample) {
    const auto start = Clock::now();
    auto encoder = s.device.CreateCommandEncoder();
    wgpu::ComputePassDescriptor passDesc;
    wgpu::PassTimestampWrites timestampWrites;
    if (s.timestamps) {
      timestampWrites.querySet = queries;
      timestampWrites.beginningOfPassWriteIndex = 0;
      timestampWrites.endOfPassWriteIndex = 1;
      passDesc.timestampWrites = &timestampWrites;
    }
    auto pass = encoder.BeginComputePass(&passDesc);
    pass.SetPipeline(pipeline);
    pass.SetBindGroup(0, group);
    for (uint32_t i = 0; i < batches; ++i)
      pass.DispatchWorkgroups(count / 64);
    pass.End();
    encoder.CopyBufferToBuffer(output, 0, readback, 0, bytes);
    if (s.timestamps) {
      encoder.ResolveQuerySet(queries, 0, 2, queryResolve, 0);
      encoder.CopyBufferToBuffer(queryResolve, 0, queryRead, 0, 16);
    }
    auto command = encoder.Finish();
    s.queue.Submit(1, &command);
    bool mapped = false;
    wait(s, readback.MapAsync(
                wgpu::MapMode::Read, 0, bytes, wgpu::CallbackMode::WaitAnyOnly,
                [&](wgpu::MapAsyncStatus status, wgpu::StringView) {
                  mapped = status == wgpu::MapAsyncStatus::Success;
                }));
    require(mapped, "Compute output map failed");
    const float *actual =
        static_cast<const float *>(readback.GetConstMappedRange());
    for (uint32_t i = 0; i < count; ++i)
      require(actual[i] == values[i] * 3.0f + 7.0f,
              "WGSL compute result mismatch");
    readback.Unmap();
    if (sample >= 5)
      host.push_back(millis(start));
    if (s.timestamps) {
      mapped = false;
      wait(s, queryRead.MapAsync(
                  wgpu::MapMode::Read, 0, 16, wgpu::CallbackMode::WaitAnyOnly,
                  [&](wgpu::MapAsyncStatus status, wgpu::StringView) {
                    mapped = status == wgpu::MapAsyncStatus::Success;
                  }));
      require(mapped, "Timestamp map failed");
      const uint64_t *ticks =
          static_cast<const uint64_t *>(queryRead.GetConstMappedRange());
      if (sample >= 5)
        gpu.push_back(double(ticks[1] - ticks[0]) / 1e6);
      queryRead.Unmap();
    }
  }
  require(s.error.empty(), "Dawn validation failed during compute");
  {
    std::lock_guard<std::mutex> lock(validationMutex);
    require(validationError.empty(),
            "Dawn reported an uncaptured validation error");
  }
  return @{
    @"verifiedElementsPerSample" : @(count),
    @"dispatchesPerSample" : @(batches),
    @"samples" : @(samples),
    @"gpuBatch" : distribution(gpu),
    @"hostBatchIncludingReadbackAndValidation" : distribution(host),
    @"timestampQuery" : @(s.timestamps),
    @"timestampsUseDefaultDawnQuantization" : @YES
  };
}

void createRenderer(State &s) {
  auto module = shader(s, kSceneWGSL);
  wgpu::ColorTargetState target;
  target.format = wgpu::TextureFormat::BGRA8Unorm;
  wgpu::FragmentState fragment;
  fragment.module = module;
  fragment.entryPoint = "fragment";
  fragment.targetCount = 1;
  fragment.targets = &target;
  wgpu::RenderPipelineDescriptor desc;
  desc.vertex.module = module;
  desc.vertex.entryPoint = "vertex";
  desc.fragment = &fragment;
  s.pipeline = s.device.CreateRenderPipeline(&desc);
  s.uniform =
      buffer(s, 16, wgpu::BufferUsage::Uniform | wgpu::BufferUsage::CopyDst);
  wgpu::BindGroupEntry entry;
  entry.binding = 0;
  entry.buffer = s.uniform;
  entry.size = 16;
  wgpu::BindGroupDescriptor group;
  group.layout = s.pipeline.GetBindGroupLayout(0);
  group.entryCount = 1;
  group.entries = &entry;
  s.group = s.device.CreateBindGroup(&group);
  const char *timing = std::getenv("FLAX_DAWN_GPU_TIMING");
  s.renderTiming = timing && std::string(timing) == "1";
  if (s.renderTiming) {
    require(s.timestamps, "Render GPU timing requires timestamp-query");
    wgpu::QuerySetDescriptor queries;
    queries.type = wgpu::QueryType::Timestamp;
    queries.count = 2;
    s.renderQueries = s.device.CreateQuerySet(&queries);
    s.renderResolve = buffer(
        s, 16, wgpu::BufferUsage::QueryResolve | wgpu::BufferUsage::CopySrc);
    s.renderReadback =
        buffer(s, 16, wgpu::BufferUsage::CopyDst | wgpu::BufferUsage::MapRead);
  }
}
void createPool(State &s) {
  auto device = dawn::native::metal::GetMTLDevice(s.device.Get());
  for (unsigned i = 0; i < 3; ++i) {
    auto frame = std::make_shared<Frame>();
    NSDictionary *attributes = @{
      (id)kCVPixelBufferIOSurfacePropertiesKey : @{},
      (id)kCVPixelBufferMetalCompatibilityKey : @YES
    };
    require(CVPixelBufferCreate(kCFAllocatorDefault, s.width, s.height,
                                kCVPixelFormatType_32BGRA,
                                (__bridge CFDictionaryRef)attributes,
                                &frame->pixels) == kCVReturnSuccess,
            "Cannot allocate IOSurface pixel buffer");
    auto surface = CVPixelBufferGetIOSurface(frame->pixels);
    require(surface != nullptr, "Pixel buffer has no IOSurface");
    wgpu::SharedTextureMemoryIOSurfaceDescriptor ioSurface;
    ioSurface.ioSurface = surface;
    wgpu::SharedTextureMemoryDescriptor memory;
    memory.nextInChain = &ioSurface;
    frame->memory = s.device.ImportSharedTextureMemory(&memory);
    wgpu::TextureDescriptor desc;
    desc.size = {s.width, s.height, 1};
    desc.format = wgpu::TextureFormat::BGRA8Unorm;
    desc.usage = wgpu::TextureUsage::RenderAttachment |
                 wgpu::TextureUsage::TextureBinding;
    frame->texture = frame->memory.CreateTexture(&desc);
    auto metalDesc = [MTLTextureDescriptor
        texture2DDescriptorWithPixelFormat:MTLPixelFormatBGRA8Unorm
                                     width:s.width
                                    height:s.height
                                 mipmapped:NO];
    metalDesc.usage =
        MTLTextureUsageShaderRead | MTLTextureUsagePixelFormatView;
    metalDesc.storageMode = MTLStorageModeShared;
    frame->metalTexture = [device newTextureWithDescriptor:metalDesc
                                                 iosurface:surface
                                                     plane:0];
    frame->readyFence = [device newFence];
    frame->consumerEvent = [device newSharedEvent];
    require(frame->metalTexture && frame->readyFence && frame->consumerEvent,
            "Cannot create shared Metal resources");
    wgpu::SharedFenceMTLSharedEventDescriptor metalFence;
    metalFence.sharedEvent = (__bridge void *)frame->consumerEvent;
    wgpu::SharedFenceDescriptor fence;
    fence.nextInChain = &metalFence;
    frame->consumerFence = s.device.ImportSharedFence(&fence);
    s.pool.push_back(frame);
  }
}
id<MTLTexture>
leasedTextureView(const std::shared_ptr<Frame> &frame,
                  const std::shared_ptr<Sample> &sample,
                  const std::shared_ptr<InteropMetrics> &metrics,
                  const wgpu::SharedTextureMemoryEndAccessState &end) {
  require(end.fenceCount == 1 && end.signaledValueCount == 1,
          "Expected one Dawn Metal release fence");
  wgpu::SharedFenceMTLSharedEventExportInfo metalEvent;
  wgpu::SharedFenceExportInfo exportInfo;
  exportInfo.nextInChain = &metalEvent;
  end.fences[0].ExportInfo(&exportInfo);
  require(exportInfo.type == wgpu::SharedFenceType::MTLSharedEvent &&
              metalEvent.sharedEvent,
          "Cannot export Dawn's producer shared event");
  DawnFrameLease *lease = [[DawnFrameLease alloc]
      initWithFrame:frame
             sample:sample
            metrics:metrics
         readyEvent:(__bridge id<MTLSharedEvent>)metalEvent.sharedEvent
         readyValue:end.signaledValues[0]];
  // A view gives this publication its own lifetime without reallocating
  // storage.
  auto view = [frame->metalTexture
      newTextureViewWithPixelFormat:MTLPixelFormatBGRA8Unorm];
  require(view != nil, "Cannot create a leased Metal texture view");
  objc_setAssociatedObject(view, @selector(copyFlaxDawnMetalTexture), lease,
                           OBJC_ASSOCIATION_RETAIN_NONATOMIC);
  return view;
}
NSDictionary *fenceCheck(State &s) {
  s.width = s.height = 16;
  createPool(s);
  auto frame = s.pool.front();
  auto metrics = std::make_shared<InteropMetrics>();
  const auto start = Clock::now();
  double heldMs = 0;
  @autoreleasepool {
    frame->leased = true;
    auto device = dawn::native::metal::GetMTLDevice(s.device.Get());
    auto hold = [device newSharedEvent];
    struct SignalOnExit {
      __strong id<MTLSharedEvent> event;
      ~SignalOnExit() { event.signaledValue = 1; }
    } unblock{hold};
    wgpu::SharedFenceMTLSharedEventDescriptor metalHold;
    metalHold.sharedEvent = (__bridge void *)hold;
    wgpu::SharedFenceDescriptor fenceDesc;
    fenceDesc.nextInChain = &metalHold;
    auto producerHold = s.device.ImportSharedFence(&fenceDesc);
    uint64_t value = 1;
    wgpu::SharedTextureMemoryBeginAccessDescriptor begin;
    begin.fenceCount = begin.signaledValueCount = 1;
    begin.fences = &producerHold;
    begin.signaledValues = &value;
    require(frame->memory.BeginAccess(frame->texture, &begin) ==
                wgpu::Status::Success,
            "Fence check BeginAccess failed");
    auto encoder = s.device.CreateCommandEncoder();
    wgpu::RenderPassColorAttachment color;
    color.view = frame->texture.CreateView();
    color.loadOp = wgpu::LoadOp::Clear;
    color.storeOp = wgpu::StoreOp::Store;
    color.clearValue = {1, 0, 0, 1};
    wgpu::RenderPassDescriptor passDesc;
    passDesc.colorAttachmentCount = 1;
    passDesc.colorAttachments = &color;
    auto pass = encoder.BeginRenderPass(&passDesc);
    pass.End();
    auto work = encoder.Finish();
    s.queue.Submit(1, &work);
    wgpu::SharedTextureMemoryEndAccessState end;
    require(frame->memory.EndAccess(frame->texture, &end) ==
                wgpu::Status::Success,
            "Fence check EndAccess failed");
    auto sample = std::make_shared<Sample>();
    sample->submittedAt = start;
    auto view = leasedTextureView(frame, sample, metrics, end);
    DawnFrameLease *lease = (DawnFrameLease *)FlaxDawnFrameForTexture(view);
    [lease acquired];
    auto queue = [device newCommandQueue];
    auto ready = [lease prepareOnQueue:queue];
    auto commands = [queue commandBuffer];
    auto blit = [commands blitCommandEncoder];
    auto pixels = [device newBufferWithLength:16 * 256
                                      options:MTLResourceStorageModeShared];
    [blit waitForFence:ready];
    [blit copyFromTexture:view
                     sourceSlice:0
                     sourceLevel:0
                    sourceOrigin:MTLOriginMake(0, 0, 0)
                      sourceSize:MTLSizeMake(16, 16, 1)
                        toBuffer:pixels
               destinationOffset:0
          destinationBytesPerRow:256
        destinationBytesPerImage:16 * 256];
    [blit endEncoding];
    [lease encodeReadComplete:commands];
    auto finished = dispatch_semaphore_create(0);
    [commands addCompletedHandler:^(id<MTLCommandBuffer>) {
      dispatch_semaphore_signal(finished);
    }];
    [commands commit];
    const bool blocked = dispatch_semaphore_wait(
                             finished, dispatch_time(DISPATCH_TIME_NOW,
                                                     50 * NSEC_PER_MSEC)) != 0;
    const bool retained =
        frame->leased && frame->consumerEvent.signaledValue == 0;
    heldMs = millis(start);
    hold.signaledValue = 1;
    require(blocked && retained,
            "Consumer ran or texture retired before the producer fence");
    require(dispatch_semaphore_wait(
                finished, dispatch_time(DISPATCH_TIME_NOW, 2 * NSEC_PER_SEC)) ==
                0,
            "Consumer did not resume after the producer fence");
    require(commands.status == MTLCommandBufferStatusCompleted,
            "Fence check Metal commands failed");
    auto bytes = static_cast<const uint8_t *>(pixels.contents);
    for (unsigned y = 0; y < 16; ++y)
      for (unsigned x = 0; x < 16; ++x) {
        const auto p = bytes + y * 256 + x * 4;
        require(p[0] == 0 && p[1] == 0 && p[2] == 255 && p[3] == 255,
                "Fence check read stale or incomplete GPU pixels");
      }
    wait(s, s.queue.OnSubmittedWorkDone(
                wgpu::CallbackMode::WaitAnyOnly,
                [](wgpu::QueueWorkDoneStatus, wgpu::StringView) {}));
  }
  for (unsigned i = 0; i < 200 && frame->leased; ++i)
    [NSThread sleepForTimeInterval:.001];
  require(!frame->leased && metrics->retired == 1 &&
              metrics->retirementErrors == 0 && metrics->error.empty() &&
              metrics->readsPendingProducer == 1,
          "Fence check did not retire its texture lease cleanly");
  return @{
    @"passed" : @YES,
    @"producerHeldMs" : @(heldMs),
    @"consumerBlockedBeforeRelease" : @YES,
    @"verifiedPixels" : @256,
    @"retiredTextureLeases" : @(metrics->retired),
    @"verificationReadbacks" : @1
  };
}
int render(const std::shared_ptr<State> &s, float time) {
  if (s->closed)
    return 0;
  bool expected = false;
  if (!s->busy.compare_exchange_strong(expected, true)) {
    ++s->skipped;
    return 0;
  }
  const auto start = Clock::now();
  try {
    std::shared_ptr<Frame> frame;
    for (auto &candidate : s->pool) {
      bool available = false;
      if (candidate->leased.compare_exchange_strong(available, true)) {
        frame = candidate;
        break;
      }
    }
    if (!frame) {
      ++s->poolMisses;
      s->busy = false;
      return 0;
    }
    const uint64_t consumerValue = frame->consumerValue;
    wgpu::SharedTextureMemoryBeginAccessDescriptor begin;
    begin.initialized = frame->initialized;
    if (frame->used)
      ++s->reused;
    frame->used = true;
    if (consumerValue) {
      begin.fenceCount = begin.signaledValueCount = 1;
      begin.fences = &frame->consumerFence;
      begin.signaledValues = &consumerValue;
    }
    require(frame->memory.BeginAccess(frame->texture, &begin) ==
                wgpu::Status::Success,
            "IOSurface BeginAccess failed");
    float params[4] = {time, float(s->width), float(s->height), 0};
    s->queue.WriteBuffer(s->uniform, 0, params, sizeof(params));
    auto encoder = s->device.CreateCommandEncoder();
    wgpu::RenderPassColorAttachment color;
    color.view = frame->texture.CreateView();
    color.loadOp = wgpu::LoadOp::Clear;
    color.storeOp = wgpu::StoreOp::Store;
    color.clearValue = {0, 0, 0, 1};
    wgpu::RenderPassDescriptor passDesc;
    passDesc.colorAttachmentCount = 1;
    passDesc.colorAttachments = &color;
    wgpu::PassTimestampWrites timestamps;
    if (s->renderTiming) {
      timestamps.querySet = s->renderQueries;
      timestamps.beginningOfPassWriteIndex = 0;
      timestamps.endOfPassWriteIndex = 1;
      passDesc.timestampWrites = &timestamps;
    }
    auto pass = encoder.BeginRenderPass(&passDesc);
    pass.SetPipeline(s->pipeline);
    pass.SetBindGroup(0, s->group);
    pass.Draw(3);
    pass.End();
    if (s->renderTiming) {
      encoder.ResolveQuerySet(s->renderQueries, 0, 2, s->renderResolve, 0);
      encoder.CopyBufferToBuffer(s->renderResolve, 0, s->renderReadback, 0, 16);
    }
    auto commands = encoder.Finish();
    s->queue.Submit(1, &commands);
    wgpu::SharedTextureMemoryEndAccessState end;
    require(frame->memory.EndAccess(frame->texture, &end) ==
                wgpu::Status::Success,
            "IOSurface EndAccess failed");
    frame->initialized = end.initialized;
    auto sample = std::make_shared<Sample>();
    sample->submittedAt = start;
    sample->measured = s->submitted.load() >= 31;
    auto view = leasedTextureView(frame, sample, s->interop, end);
    [s->texture publish:view];
    [s->registry textureFrameAvailable:s->textureId];
    ++s->displayed;
    const double encoded = millis(start);
    ++s->submitted;
    std::weak_ptr<State> weak = s;
    s->queue.OnSubmittedWorkDone(
        wgpu::CallbackMode::AllowSpontaneous,
        [weak, sample](wgpu::QueueWorkDoneStatus status,
                       wgpu::StringView message) {
          const auto s = weak.lock();
          if (!s)
            return;
          if (status != wgpu::QueueWorkDoneStatus::Success) {
            std::lock_guard<std::mutex> lock(s->mutex);
            s->error.assign(message.data, message.length);
          } else {
            ++s->completed;
            {
              std::lock_guard<std::mutex> lock(s->interop->mutex);
              sample->completed = true;
              sample->completedAt = Clock::now();
              s->interop->delivery(*sample);
            }
            std::lock_guard<std::mutex> lock(s->mutex);
            if (sample->measured && s->completionMs.size() < 4096)
              s->completionMs.push_back(millis(sample->submittedAt));
          }
          s->busy = false;
        });
    {
      std::lock_guard<std::mutex> lock(s->mutex);
      if (sample->measured && s->encodeMs.size() < 4096)
        s->encodeMs.push_back(encoded);
    }
    if (s->renderTiming) {
      // Diagnostic runs read timestamps separately from the no-readback
      // benchmark.
      bool mapped = false;
      wait(*s, s->renderReadback.MapAsync(
                   wgpu::MapMode::Read, 0, 16, wgpu::CallbackMode::WaitAnyOnly,
                   [&](wgpu::MapAsyncStatus status, wgpu::StringView) {
                     mapped = status == wgpu::MapAsyncStatus::Success;
                   }));
      require(mapped, "Render timestamp map failed");
      auto ticks = static_cast<const uint64_t *>(
          s->renderReadback.GetConstMappedRange());
      require(ticks[1] >= ticks[0], "Render timestamps are not monotonic");
      if (sample->measured && s->renderGpuMs.size() < 4096) {
        std::lock_guard<std::mutex> lock(s->mutex);
        s->renderGpuMs.push_back(double(ticks[1] - ticks[0]) / 1e6);
      }
      s->renderReadback.Unmap();
      ++s->gpuTimestampReadbacks;
    }
    return 1;
  } catch (...) {
    s->busy = false;
    throw;
  }
}
} // namespace

extern "C" const char *dawn_probe_error() { return lastError.c_str(); }
extern "C" const char *dawn_probe_self_check() {
  @autoreleasepool {
    try {
      auto s = createDevice();
      auto result = computeCheck(*s);
      return json(@{
        @"adapter" : @(s->adapterName.c_str()),
        @"backend" : @"Metal",
        @"validationEnabled" : @YES,
        @"compute" : result,
        @"fenceCheck" : fenceCheck(*s)
      });
    } catch (const std::exception &e) {
      lastError = e.what();
      fprintf(stderr, "%s\n", e.what());
      return nullptr;
    }
  }
}
extern "C" uint64_t dawn_probe_create(void *registry, uint32_t width,
                                      uint32_t height) {
  @autoreleasepool {
    try {
      require([NSThread isMainThread],
              "Create must run on the platform thread");
      require(registry && width > 0 && height > 0 && width <= 4096 &&
                  height <= 4096,
              "Invalid surface size/registry");
      auto s = createDevice();
      s->width = width;
      s->height = height;
      s->registry = (__bridge NSObject<FlutterTextureRegistry> *)registry;
      s->texture = [DawnProbeTexture new];
      createRenderer(*s);
      createPool(*s);
      s->textureId = [s->registry registerTexture:s->texture];
      require(s->textureId != 0, "Flutter rejected the external texture");
      std::lock_guard<std::mutex> lock(statesMutex);
      const auto id = nextId++;
      states[id] = s;
      return id;
    } catch (const std::exception &e) {
      lastError = e.what();
      return 0;
    }
  }
}
extern "C" int64_t dawn_probe_texture_id(uint64_t id) {
  try {
    return lookup(id)->textureId;
  } catch (const std::exception &e) {
    lastError = e.what();
    return 0;
  }
}
extern "C" int dawn_probe_render(uint64_t id, float time) {
  @autoreleasepool {
    try {
      require(std::isfinite(time), "Time must be finite");
      return render(lookup(id), time);
    } catch (const std::exception &e) {
      lastError = e.what();
      return -1;
    }
  }
}
extern "C" const char *dawn_probe_stats(uint64_t id) {
  @autoreleasepool {
    try {
      auto s = lookup(id);
      std::lock_guard<std::mutex> lock(s->mutex);
      std::lock_guard<std::mutex> interopLock(s->interop->mutex);
      std::lock_guard<std::mutex> validationLock(validationMutex);
      const auto &metrics = *s->interop;
      return json(@{
        @"adapter" : @(s->adapterName.c_str()),
        @"backend" : @"Metal",
        @"width" : @(s->width),
        @"height" : @(s->height),
        @"submitted" : @(s->submitted.load()),
        @"completed" : @(s->completed.load()),
        @"notifiedFlutter" : @(s->displayed.load()),
        @"flutterTextureReads" : @(metrics.reads),
        @"gpuCompletionToFlutterTextureRead" : distribution(metrics.deliveryMs),
        @"skippedBusy" : @(s->skipped.load()),
        @"nativeEncodeIncludingPoolAcquire" : distribution(s->encodeMs),
        @"submitToCompletionIncludingEncode" : distribution(s->completionMs),
        @"error" : @((!s->error.empty()        ? s->error
                      : !metrics.error.empty() ? metrics.error
                                               : validationError)
                         .c_str()),
        @"frameCpuReadbacks" : @0,
        @"warmupSubmittedFrames" : @31,
        @"renderGpuTimingEnabled" : @(s->renderTiming),
        @"renderGpuPass" : distribution(s->renderGpuMs),
        @"gpuTimestampReadbacks" : @(s->gpuTimestampReadbacks),
        @"surfacePoolCapacity" : @(s->pool.size()),
        @"surfaceAllocations" : @(s->pool.size()),
        @"surfaceReuses" : @(s->reused),
        @"poolMisses" : @(s->poolMisses),
        @"retiredLeases" : @(metrics.retired),
        @"retirementErrors" : @(metrics.retirementErrors),
        @"producerGpuGates" : @(metrics.gates),
        @"consumerGpuSignals" : @(metrics.consumerSignals),
        @"textureReadsBeforeProducerFence" : @(metrics.readsPendingProducer),
        @"submitToFlutterTextureRead" : distribution(metrics.acquireMs),
        @"submitToFlutterGpuCompletionCallback" :
            distribution(metrics.consumerMs),
        @"flutterConsumerGpuDuration" : distribution(metrics.consumerGpuMs)
      });
    } catch (const std::exception &e) {
      lastError = e.what();
      return nullptr;
    }
  }
}
extern "C" uint64_t dawn_probe_active_count() {
  std::lock_guard<std::mutex> lock(statesMutex);
  return states.size();
}
extern "C" uint64_t dawn_probe_live_frame_count() {
  return liveFrameLeases.load();
}
extern "C" uint64_t dawn_probe_live_device_count() {
  return liveDevices.load();
}
extern "C" int dawn_probe_destroy(uint64_t id) {
  try {
    require([NSThread isMainThread], "Destroy must run on the platform thread");
    auto s = lookup(id);
    s->closed = true;
    // Drain the last completion without relying on another animation frame.
    bool finished = false;
    wait(*s, s->queue.OnSubmittedWorkDone(
                 wgpu::CallbackMode::WaitAnyOnly,
                 [&](wgpu::QueueWorkDoneStatus status, wgpu::StringView) {
                   finished = status == wgpu::QueueWorkDoneStatus::Success;
                 }));
    s->instance.ProcessEvents();
    require(finished, "GPU queue did not retire cleanly");
    [s->registry unregisterTexture:s->textureId];
    [s->texture publish:nil];
    std::lock_guard<std::mutex> lock(statesMutex);
    states.erase(id);
    return 1;
  } catch (const std::exception &e) {
    lastError = e.what();
    return 0;
  }
}
