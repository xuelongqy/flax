// Included by async.mm; the same private image owns Dawn and presentation.
#import <CoreVideo/CoreVideo.h>
#import <IOSurface/IOSurface.h>
#import <Metal/Metal.h>
#include <dawn/native/MetalBackend.h>
#import <objc/runtime.h>
#if FLAX_WEBGPU_BENCHMARK
#include "benchmark.inc"
#endif

@protocol FlaxWebGpuRegistry <NSObject>
- (int64_t)registerTexture:(id)texture;
- (void)unregisterTexture:(int64_t)textureId;
- (void)textureFrameAvailable:(int64_t)textureId;
@end

// These selectors are the versioned private engine overlay's texture contract.
@protocol FlaxDawnFrame <NSObject>
- (id<MTLFence>)prepareOnQueue:(id<MTLCommandQueue>)queue;
- (void)encodeReadComplete:(id<MTLCommandBuffer>)commands;
@end
namespace {
struct Storage {
  Storage() { ++storages; }
  CVPixelBufferRef pixels = nullptr;
  IOSurfaceRef rgbaPixels = nullptr;
  wgpu::SharedTextureMemory memory;
  wgpu::Texture texture;
  wgpu::SharedFence consumerFence;
  __strong id<MTLTexture> metal;
  __strong id<MTLFence> readyFence;
  __strong id<MTLSharedEvent> consumerEvent;
  std::atomic<bool> leased{false};
  std::atomic<uint64_t> consumerValue{0};
  bool initialized = false;
#if FLAX_WEBGPU_BENCHMARK
  std::shared_ptr<BenchmarkSample> sample;
#endif
  ~Storage() {
    if (pixels)
      CVPixelBufferRelease(pixels);
    if (rgbaPixels)
      CFRelease(rgbaPixels);
    --storages;
  }
};
void require(bool value, const char *message) {
  if (!value)
    throw std::runtime_error(message);
}
} // namespace

@interface FlaxWebGpuLease : NSObject <FlaxDawnFrame> {
@public
  std::shared_ptr<Storage> storage;
  id<MTLSharedEvent> producer;
  uint64_t producerValue;
  id<MTLCommandQueue> consumerQueue;
#if FLAX_WEBGPU_BENCHMARK
  std::shared_ptr<BenchmarkMetrics> metrics;
  std::shared_ptr<BenchmarkSample> sample;
#endif
}
- (void)acquired;
@end
@implementation FlaxWebGpuLease
- (void)acquired {
#if FLAX_WEBGPU_BENCHMARK
  if (metrics) {
    std::lock_guard lock(metrics->mutex);
    if (sample->read == BenchmarkClock::time_point{}) {
      sample->read = BenchmarkClock::now();
      sample->pendingProducer = producer.signaledValue < producerValue;
    }
  }
#endif
}
- (instancetype)init {
  if ((self = [super init]))
    ++publications;
  return self;
}
- (id<MTLFence>)prepareOnQueue:(id<MTLCommandQueue>)queue {
  if (!consumerQueue) {
    consumerQueue = queue;
    auto commands = [queue commandBuffer];
    [commands encodeWaitForEvent:producer value:producerValue];
    auto blit = [commands blitCommandEncoder];
    [blit updateFence:storage->readyFence];
    [blit endEncoding];
    [commands commit];
  }
  // shortcut: one compositor Metal queue; add per-queue gates before supporting
  // another.
  if (consumerQueue != queue) {
    ++retirementErrors;
    return nil;
  }
  return storage->readyFence;
}
- (void)encodeReadComplete:(id<MTLCommandBuffer>)commands {
  const uint64_t value = ++storage->consumerValue;
  [commands encodeSignalEvent:storage->consumerEvent value:value];
  // Retain the lease and IOSurface through the consumer's GPU completion.
  [commands addCompletedHandler:^(id<MTLCommandBuffer> completed) {
    if (completed.status != MTLCommandBufferStatusCompleted ||
        self->storage->consumerEvent.signaledValue < value) {
      ++retirementErrors;
    }
#if FLAX_WEBGPU_BENCHMARK
    if (self->metrics) {
      std::lock_guard lock(self->metrics->mutex);
      if (self->sample->consumed == BenchmarkClock::time_point{}) {
        self->sample->consumed = BenchmarkClock::now();
        self->sample->consumerGpuMs =
            (completed.GPUEndTime - completed.GPUStartTime) * 1000;
      }
    }
#endif
  }];
}
- (void)dealloc {
  storage->leased =
      storage->consumerEvent.signaledValue < storage->consumerValue;
  if (storage->leased)
    ++retirementErrors;
  --publications;
}
@end

@interface FlaxWebGpuTexture : NSObject {
  std::mutex mutex;
  id<MTLTexture> current;
}
- (BOOL)publish:(id<MTLTexture>)texture;
- (id<MTLTexture>)copyFlaxDawnMetalTexture;
- (CVPixelBufferRef)copyPixelBuffer;
@end
@implementation FlaxWebGpuTexture
- (BOOL)publish:(id<MTLTexture>)texture {
  std::lock_guard lock(mutex);
  const BOOL hadFrame = current != nil;
  current = texture;
  return hadFrame;
}
- (id<MTLTexture>)copyFlaxDawnMetalTexture {
  std::lock_guard lock(mutex);
#if FLAX_WEBGPU_BENCHMARK
  [(FlaxWebGpuLease *)objc_getAssociatedObject(
      current, @selector(copyFlaxDawnMetalTexture)) acquired];
#endif
  return current;
}
- (CVPixelBufferRef)copyPixelBuffer {
  return nullptr;
}
@end

namespace {
struct Endpoint {
  __strong id<FlaxWebGpuRegistry> registry;
  __strong FlaxWebGpuTexture *output = [FlaxWebGpuTexture new];
  int64_t textureId = 0;
  std::atomic<uint64_t> size{0};
  explicit Endpoint(void *registrar) {
    if (registrar) initialize(registrar);
    ++canvasEndpoints;
  }
  void initialize(void *registrar) {
    if (textureId) return;
    registry = (__bridge id<FlaxWebGpuRegistry>)registrar;
    require(registry != nil, "The Flutter texture registry is unavailable");
    auto registerTexture = ^{
      textureId = [registry registerTexture:output];
    };
    if (NSThread.isMainThread)
      registerTexture();
    else
      dispatch_sync(dispatch_get_main_queue(), registerTexture);
  }
  ~Endpoint() {
    [output publish:nil];
    auto owner = registry;
    const int64_t id = textureId;
    if (id) dispatch_async(dispatch_get_main_queue(), ^{
        [owner unregisterTexture:id];
      });
    --canvasEndpoints;
  }
};
struct CanvasToken {
  std::shared_ptr<Endpoint> endpoint;
  // The transferable ArrayBuffer exposes only this writable byte.
  uint8_t transferByte = 0;
  CanvasToken(void *registry, uint32_t w, uint32_t h)
      : endpoint(std::make_shared<Endpoint>(registry)) {
    endpoint->size = (uint64_t(w) << 32) | h;
    ++canvasTokens;
  }
  ~CanvasToken() { --canvasTokens; }
};
std::mutex canvasTokensMutex;
std::unordered_map<void *, std::shared_ptr<CanvasToken>> tokenOwners;
std::shared_ptr<CanvasToken> canvasToken(void *address) {
  std::lock_guard lock(canvasTokensMutex);
  auto found = tokenOwners.find(address);
  require(found != tokenOwners.end(), "Invalid or retired OffscreenCanvas lease");
  return found->second;
}

// Project for Flutter in encoded extended sRGB. Standard range clamps in P3.
constexpr char kColorProjection[] = R"(
@group(0) @binding(0) var inputTexture: texture_2d<f32>;
override sourceP3: bool;
override standardRange: bool;
override opaque: bool;

const srgbToP3 = mat3x3f(
    0.82246197, 0.03319420, 0.01708263,
    0.17753803, 0.96680580, 0.07239744,
    0, 0, 0.91051993);
const p3ToSrgb = mat3x3f(
    1.22494018, -0.04205695, -0.01963755,
    -0.22494018, 1.04205695, -0.07863605,
    0, 0, 1.09827360);

fn decodeSrgb(encoded: vec3f) -> vec3f {
  let value = abs(encoded);
  return sign(encoded) * select(value / 12.92,
      pow((value + 0.055) / 1.055, vec3f(2.4)), value > vec3f(0.04045));
}

fn encodeSrgb(linear: vec3f) -> vec3f {
  let value = abs(linear);
  return sign(linear) * select(value * 12.92,
      1.055 * pow(value, vec3f(1.0 / 2.4)) - 0.055, value > vec3f(0.0031308));
}

@vertex
fn vertex(@builtin(vertex_index) index: u32) -> @builtin(position) vec4f {
  let positions = array(vec2f(-1, -1), vec2f(3, -1), vec2f(-1, 3));
  return vec4f(positions[index], 0, 1);
}

@fragment
fn fragment(@builtin(position) position: vec4f) -> @location(0) vec4f {
  let color = textureLoad(inputTexture, vec2i(position.xy), 0);
  let alpha = select(color.a, 1.0, opaque);
  if (alpha == 0.0 || (standardRange && !(alpha > 0.0))) {
    return vec4f(0);
  }
  var linearP3 = decodeSrgb(color.rgb / alpha);
  if (!sourceP3) {
    linearP3 = srgbToP3 * linearP3;
  }
  if (standardRange) {
    linearP3 = clamp(linearP3, vec3f(0), vec3f(1));
  }
  let sRGB = encodeSrgb(p3ToSrgb * linearP3);
  return vec4f(sRGB * alpha, alpha);
}
)";

struct Surface {
  std::weak_ptr<State> owner;
  std::shared_ptr<Endpoint> endpoint;
  wgpu::Device device;
  uint32_t width = 0, height = 0;
  uint32_t maxTextureDimension2D = 0;
  wgpu::TextureUsage usage;
  wgpu::TextureFormat format = wgpu::TextureFormat::BGRA8Unorm;
  std::vector<wgpu::TextureFormat> viewFormats;
  bool displayP3 = false;
  bool extendedToneMapping = false;
  bool opaque = true;
  bool unknownUsage = false;
  bool invalidConfiguration = false;
  bool invalidSize = false;
  std::vector<std::shared_ptr<Storage>> pool;
  std::shared_ptr<Storage> current;
  wgpu::Texture colorInput;
  bool outputFrozen = false;
  wgpu::Texture lastDrawingBuffer;
  wgpu::RenderPipeline colorProjection;
  wgpu::BindGroup projectionBinding;
#if FLAX_WEBGPU_BENCHMARK
  std::shared_ptr<BenchmarkMetrics> metrics;
#endif
  explicit Surface(const Context &state, std::shared_ptr<Endpoint> value)
      : owner(state), endpoint(std::move(value)) {
#if FLAX_WEBGPU_BENCHMARK
    const char *enabled = std::getenv("FLAX_WEBGPU_BENCHMARK_METRICS");
    if (enabled && std::string(enabled) == "1") {
      metrics = std::make_shared<BenchmarkMetrics>();
      latestBenchmark = metrics;
    }
#endif
    std::lock_guard lock(state->mutex);
    require(!state->closed, "The WebGPU session is closed");
    state->ownedCanvases.push_back(this);
    ++surfaces;
  }
  void retireColorInput() {
    if (colorInput) {
      colorInput.Destroy();
      colorInput = nullptr;
    }
  }
  wgpu::Status discardCurrent() {
    retireColorInput();
    outputFrozen = false;
    if (!current)
      return wgpu::Status::Success;
    wgpu::SharedTextureMemoryEndAccessState end;
    const auto result = current->memory.EndAccess(current->texture, &end);
    current->texture.Destroy();
    current->leased = false;
    current.reset();
    return result;
  }
  void resetDrawingBuffer() {
    discardCurrent();
    if ([endpoint->output publish:nil] && endpoint->textureId)
      [endpoint->registry textureFrameAvailable:endpoint->textureId];
    projectionBinding = nullptr;
    colorProjection = nullptr;
    lastDrawingBuffer = nullptr;
    pool.clear();
  }
  void unconfigure() {
    resetDrawingBuffer();
    viewFormats = std::vector<wgpu::TextureFormat>{};
    device = nullptr;
  }
  void setSize(uint32_t nextWidth, uint32_t nextHeight) {
    width = nextWidth;
    height = nextHeight;
    invalidSize = !width || !height || width > maxTextureDimension2D ||
                  height > maxTextureDimension2D;
  }
  void validateTextureDescriptor(const wgpu::TextureDescriptor &descriptor) {
    if (unknownUsage) {
      // Dawn also has native-only usage bits; they are not WebGPU permissions.
      device.InjectError(wgpu::ErrorType::Validation,
                         "Invalid canvas texture usage flags");
    } else {
      device.ValidateTextureDescriptor(&descriptor);
    }
  }
  ~Surface() {
    if (auto state = owner.lock()) {
      std::lock_guard lock(state->mutex);
      std::erase(state->ownedCanvases, this);
    }
    unconfigure();
    --surfaces;
  }
  wgpu::TextureFormat presentationFormat() const {
    return displayP3 ? wgpu::TextureFormat::RGBA16Float : format;
  }
  bool projectsStandardRange() const {
    return format == wgpu::TextureFormat::RGBA16Float && !extendedToneMapping;
  }
  MTLPixelFormat metalFormat() const {
    switch (presentationFormat()) {
      case wgpu::TextureFormat::RGBA16Float: return MTLPixelFormatRGBA16Float;
      case wgpu::TextureFormat::BGRA8Unorm: return MTLPixelFormatBGRA8Unorm;
      default: return MTLPixelFormatRGBA8Unorm;
    }
  }
  std::shared_ptr<Storage> allocate() {
    auto frame = std::make_shared<Storage>();
    NSDictionary *attrs = @{
      (id)kCVPixelBufferIOSurfacePropertiesKey : @{},
      (id)kCVPixelBufferMetalCompatibilityKey : @YES
    };
    IOSurfaceRef surface;
    const auto outputFormat = presentationFormat();
    if (outputFormat != wgpu::TextureFormat::RGBA8Unorm) {
      const auto pixelFormat = outputFormat == wgpu::TextureFormat::RGBA16Float
                                   ? kCVPixelFormatType_64RGBAHalf
                                   : kCVPixelFormatType_32BGRA;
      require(CVPixelBufferCreate(kCFAllocatorDefault, width, height,
                                  pixelFormat,
                                  (__bridge CFDictionaryRef)attrs,
                                  &frame->pixels) == kCVReturnSuccess,
              "Cannot allocate WebGPU IOSurface");
      surface = CVPixelBufferGetIOSurface(frame->pixels);
    } else {
      // CoreVideo rejects RGBA Metal buffers; Dawn and Metal accept the raw
      // IOSurface.
      const size_t stride =
          IOSurfaceAlignProperty(kIOSurfaceBytesPerRow, size_t(width) * 4);
      NSDictionary *properties = @{
        (id)kIOSurfaceWidth : @(width),
        (id)kIOSurfaceHeight : @(height),
        (id)kIOSurfaceBytesPerElement : @4,
        (id)kIOSurfaceBytesPerRow : @(stride),
        (id)kIOSurfaceAllocSize : @(stride * height),
        (id)kIOSurfacePixelFormat : @(kCVPixelFormatType_32RGBA)
      };
      frame->rgbaPixels = IOSurfaceCreate((__bridge CFDictionaryRef)properties);
      require(frame->rgbaPixels != nullptr,
              "Cannot allocate RGBA WebGPU IOSurface");
      surface = frame->rgbaPixels;
    }
    wgpu::SharedTextureMemoryIOSurfaceDescriptor io;
    io.ioSurface = surface;
    wgpu::SharedTextureMemoryDescriptor desc;
    desc.nextInChain = &io;
    frame->memory = device.ImportSharedTextureMemory(&desc);
    auto metalDevice = dawn::native::metal::GetMTLDevice(device.Get());
    auto texture =
        [MTLTextureDescriptor texture2DDescriptorWithPixelFormat:metalFormat()
                                                           width:width
                                                          height:height
                                                       mipmapped:NO];
    texture.usage = MTLTextureUsageShaderRead | MTLTextureUsagePixelFormatView;
    texture.storageMode = MTLStorageModeShared;
    frame->metal = [metalDevice newTextureWithDescriptor:texture
                                               iosurface:surface
                                                   plane:0];
    frame->readyFence = [metalDevice newFence];
    frame->consumerEvent = [metalDevice newSharedEvent];
    wgpu::SharedFenceMTLSharedEventDescriptor event;
    event.sharedEvent = (__bridge void *)frame->consumerEvent;
    wgpu::SharedFenceDescriptor fence;
    fence.nextInChain = &event;
    frame->consumerFence = device.ImportSharedFence(&fence);
    require(frame->memory && frame->metal && frame->readyFence &&
                frame->consumerFence,
            "Cannot import WebGPU shared texture resources");
    pool.push_back(frame);
    return frame;
  }
  wgpu::Texture acquire() {
    require(bool(device), "The WebGPU canvas is not configured");
    if (current)
      return colorInput ? colorInput : current->texture;
    wgpu::TextureDescriptor descriptor;
    descriptor.dimension = wgpu::TextureDimension::e2D;
    descriptor.size = {width, height, 1};
    descriptor.format = format;
    descriptor.viewFormatCount = viewFormats.size();
    descriptor.viewFormats = viewFormats.data();
    descriptor.usage = usage;
    if (invalidConfiguration || invalidSize) {
      // Invalid configurations still expose an error texture with the requested
      // properties, without acquiring or publishing IOSurface storage.
      validateTextureDescriptor(descriptor);
      return device.CreateErrorTexture(&descriptor);
    }
    wgpu::DawnTextureInternalUsageDescriptor internal;
    internal.internalUsage = wgpu::TextureUsage::RenderAttachment;
    descriptor.nextInChain = &internal;
#if FLAX_WEBGPU_BENCHMARK
    auto sample = metrics ? std::make_shared<BenchmarkSample>() : nullptr;
#endif
    std::shared_ptr<Storage> frame;
    for (const auto &candidate : pool) {
      bool free = false;
      if (candidate->leased.compare_exchange_strong(free, true)) {
        frame = candidate;
        break;
      }
    }
    if (!frame) {
      // Pool pressure fails acquisition before the application can submit this
      // frame.
      require(pool.size() < 8,
              "The WebGPU canvas has too many in-flight textures");
      frame = allocate();
      frame->leased = true;
    }
    const bool usesColorInput = displayP3 || projectsStandardRange();
    if (usesColorInput) {
      wgpu::TextureDescriptor output;
      output.size = descriptor.size;
      output.format = presentationFormat();
      output.usage = wgpu::TextureUsage::RenderAttachment;
      frame->texture = frame->memory.CreateTexture(&output);
    } else {
      frame->texture = frame->memory.CreateTexture(&descriptor);
    }
    const uint64_t consumed = frame->consumerValue;
    wgpu::SharedTextureMemoryBeginAccessDescriptor begin;
    // Each new current texture starts transparent even when its IOSurface is
    // reused.
    begin.initialized = false;
    if (consumed) {
      begin.fenceCount = begin.signaledValueCount = 1;
      begin.fences = &frame->consumerFence;
      begin.signaledValues = &consumed;
    }
    if (frame->memory.BeginAccess(frame->texture, &begin) !=
        wgpu::Status::Success) {
      frame->texture.Destroy();
      frame->leased = false;
      throw std::runtime_error("Cannot acquire the WebGPU canvas texture");
    }
    current = std::move(frame);
    outputFrozen = false;
#if FLAX_WEBGPU_BENCHMARK
    current->sample = sample;
    if (metrics) {
      std::lock_guard lock(metrics->mutex);
      metrics->samples.push_back(sample);
    }
#endif
    if (usesColorInput) {
      internal.internalUsage |= wgpu::TextureUsage::CopySrc;
      colorInput = device.CreateTexture(&descriptor);
      return colorInput;
    }
    return current->texture;
  }
  void renderColorOutput() {
    if (!colorProjection) {
      wgpu::ShaderSourceWGSL wgsl;
      wgsl.code = kColorProjection;
      wgpu::ShaderModuleDescriptor shader;
      shader.nextInChain = &wgsl;
      auto module = device.CreateShaderModule(&shader);
      wgpu::ConstantEntry constants[] = {
          {.key = "sourceP3", .value = double(displayP3)},
          {.key = "standardRange", .value = double(projectsStandardRange())},
          {.key = "opaque", .value = double(opaque)},
      };
      wgpu::ColorTargetState target;
      target.format = presentationFormat();
      wgpu::FragmentState fragment;
      fragment.module = module;
      fragment.entryPoint = "fragment";
      fragment.constantCount = std::size(constants);
      fragment.constants = constants;
      fragment.targetCount = 1;
      fragment.targets = &target;
      wgpu::RenderPipelineDescriptor pipeline;
      pipeline.vertex.module = module;
      pipeline.vertex.entryPoint = "vertex";
      pipeline.fragment = &fragment;
      colorProjection = device.CreateRenderPipeline(&pipeline);

      // One texture keeps the raw drawing buffer after the JS texture expires.
      wgpu::TextureDescriptor descriptor;
      descriptor.size = {width, height, 1};
      descriptor.format = format;
      descriptor.usage = wgpu::TextureUsage::CopyDst |
                         wgpu::TextureUsage::CopySrc |
                         wgpu::TextureUsage::TextureBinding;
      lastDrawingBuffer = device.CreateTexture(&descriptor);
      wgpu::BindGroupEntry entry{.textureView = lastDrawingBuffer.CreateView()};
      wgpu::BindGroupDescriptor binding;
      binding.layout = colorProjection.GetBindGroupLayout(0);
      binding.entryCount = 1;
      binding.entries = &entry;
      projectionBinding = device.CreateBindGroup(&binding);
    }
    wgpu::DawnEncoderInternalUsageDescriptor internal;
    internal.useInternalUsages = true;
    wgpu::CommandEncoderDescriptor commands;
    commands.nextInChain = &internal;
    auto encoder = device.CreateCommandEncoder(&commands);
    wgpu::TexelCopyTextureInfo input{.texture = colorInput};
    wgpu::TexelCopyTextureInfo retained{.texture = lastDrawingBuffer};
    wgpu::Extent3D size{width, height, 1};
    encoder.CopyTextureToTexture(&input, &retained, &size);
    wgpu::RenderPassColorAttachment color;
    color.view = current->texture.CreateView();
    color.loadOp = wgpu::LoadOp::Clear;
    color.storeOp = wgpu::StoreOp::Store;
    wgpu::RenderPassDescriptor passDescriptor;
    passDescriptor.colorAttachmentCount = 1;
    passDescriptor.colorAttachments = &color;
    auto pass = encoder.BeginRenderPass(&passDescriptor);
    pass.SetPipeline(colorProjection);
    pass.SetBindGroup(0, projectionBinding);
    pass.Draw(3);
    pass.End();
    auto projected = encoder.Finish();
    device.GetQueue().Submit(1, &projected);
  }
  void initializeOutput(wgpu::LoadOp loadOp) {
    wgpu::DawnEncoderInternalUsageDescriptor internal;
    internal.useInternalUsages = true;
    wgpu::CommandEncoderDescriptor encoderDescriptor;
    encoderDescriptor.nextInChain = &internal;
    auto encoder = device.CreateCommandEncoder(&encoderDescriptor);
    wgpu::RenderPassColorAttachment color;
    color.view = current->texture.CreateView();
    color.loadOp = loadOp;
    color.storeOp = wgpu::StoreOp::Store;
    wgpu::RenderPassDescriptor descriptor;
    descriptor.colorAttachmentCount = 1;
    descriptor.colorAttachments = &color;
    auto pass = encoder.BeginRenderPass(&descriptor);
    pass.End();
    auto commands = encoder.Finish();
    device.GetQueue().Submit(1, &commands);
  }
  void materializeOutput() {
    if (outputFrozen)
      return;
    if (colorInput)
      renderColorOutput();
    else
      initializeOutput(wgpu::LoadOp::Load);
  }
  void present() {
    if (!current)
      return;
    if (colorInput && !outputFrozen)
      renderColorOutput();
    wgpu::SharedTextureMemoryEndAccessState end;
    require(current->memory.EndAccess(current->texture, &end) ==
                wgpu::Status::Success,
            "Cannot present the WebGPU canvas texture");
    if (!end.initialized) {
      wgpu::SharedTextureMemoryBeginAccessDescriptor begin;
      begin.initialized = false;
      begin.fenceCount = end.fenceCount;
      begin.fences = end.fences;
      begin.signaledValueCount = end.signaledValueCount;
      begin.signaledValues = end.signaledValues;
      require(current->memory.BeginAccess(current->texture, &begin) ==
                  wgpu::Status::Success,
              "Cannot clear an unused canvas texture");
      initializeOutput(wgpu::LoadOp::Clear);
      require(current->memory.EndAccess(current->texture, &end) ==
                  wgpu::Status::Success,
              "Cannot release the cleared canvas texture");
    }
    require(end.fenceCount == 1 && end.signaledValueCount == 1,
            "Dawn did not produce a Metal completion fence");
    current->initialized = end.initialized;
    wgpu::SharedFenceMTLSharedEventExportInfo event;
    wgpu::SharedFenceExportInfo info;
    info.nextInChain = &event;
    end.fences[0].ExportInfo(&info);
    require(info.type == wgpu::SharedFenceType::MTLSharedEvent &&
                event.sharedEvent,
            "Cannot export the producer fence");
    auto lease = [FlaxWebGpuLease new];
    lease->storage = current;
    lease->producer = (__bridge id<MTLSharedEvent>)event.sharedEvent;
    lease->producerValue = end.signaledValues[0];
#if FLAX_WEBGPU_BENCHMARK
    lease->metrics = metrics;
    lease->sample = current->sample;
    if (metrics) {
      auto sample = current->sample;
      auto owner = metrics;
      device.GetQueue().OnSubmittedWorkDone(
          wgpu::CallbackMode::AllowSpontaneous,
          [sample, owner](wgpu::QueueWorkDoneStatus status, wgpu::StringView) {
            if (status == wgpu::QueueWorkDoneStatus::Success) {
              std::lock_guard lock(owner->mutex);
              sample->produced = BenchmarkClock::now();
            }
          });
    }
#endif
    auto channels = MTLTextureSwizzleChannelsMake(
        MTLTextureSwizzleRed, MTLTextureSwizzleGreen, MTLTextureSwizzleBlue,
        opaque ? MTLTextureSwizzleOne : MTLTextureSwizzleAlpha);
    auto view = [current->metal newTextureViewWithPixelFormat:metalFormat()
                                                  textureType:MTLTextureType2D
                                                       levels:NSMakeRange(0, 1)
                                                       slices:NSMakeRange(0, 1)
                                                      swizzle:channels];
    require(view != nil, "Cannot create the compositor texture view");
    objc_setAssociatedObject(view, @selector(copyFlaxDawnMetalTexture), lease,
                             OBJC_ASSOCIATION_RETAIN_NONATOMIC);
#if FLAX_WEBGPU_BENCHMARK
    if (metrics) {
      std::lock_guard lock(metrics->mutex);
      current->sample->published = BenchmarkClock::now();
    }
#endif
    [endpoint->output publish:view];
    [endpoint->registry textureFrameAvailable:endpoint->textureId];
    retireColorInput();
    current->texture.Destroy();
    current.reset();
  }
};
void retireSurface(Surface *surface) { surface->unconfigure(); }
} // namespace
extern "C" void *flax_webgpu_canvas_create(void *context, void *registry) {
  void *result = nullptr;
  status([&] { result = new Surface(live(context), std::make_shared<Endpoint>(registry)); });
  return result;
}
extern "C" int64_t flax_webgpu_canvas_id(void *value) {
  return static_cast<Surface *>(value)->endpoint->textureId;
}
extern "C" void *flax_webgpu_canvas_token_create(void *registry, uint32_t width,
                                                 uint32_t height) {
  void *result = nullptr;
  status([&] {
    auto token = std::make_shared<CanvasToken>(registry, width, height);
    result = &token->transferByte;
    std::lock_guard lock(canvasTokensMutex);
    tokenOwners.emplace(result, std::move(token));
  });
  return result;
}
extern "C" void flax_webgpu_canvas_token_release(void *value) {
  std::shared_ptr<CanvasToken> owner;
  {
    std::lock_guard lock(canvasTokensMutex);
    auto found = tokenOwners.find(value);
    if (found == tokenOwners.end()) {
      ++retirementErrors;
      return;
    }
    owner = std::move(found->second);
    tokenOwners.erase(found);
  }
}
extern "C" uint32_t flax_webgpu_canvas_token_dimension(void *value, uint32_t axis) {
  uint32_t result = 0;
  status([&] {
    const auto token = canvasToken(value);
    const uint64_t size = token->endpoint->size;
    result = axis ? uint32_t(size) : uint32_t(size >> 32);
  });
  return result;
}
extern "C" int32_t flax_webgpu_canvas_token_resize(void *value, uint32_t width,
                                                   uint32_t height) {
  return status([&] {
    auto token = canvasToken(value);
    token->endpoint->size = (uint64_t(width) << 32) | height;
  });
}
extern "C" int64_t flax_webgpu_canvas_token_id(void *value) {
  int64_t result = 0;
  status([&] { result = canvasToken(value)->endpoint->textureId; });
  return result;
}
extern "C" void *flax_webgpu_canvas_token_display(void *value) {
  void *result = nullptr;
  status([&] { result = new std::shared_ptr<Endpoint>(canvasToken(value)->endpoint); });
  return result;
}
extern "C" int64_t flax_webgpu_canvas_display_id(void *value) {
  return (*static_cast<std::shared_ptr<Endpoint> *>(value))->textureId;
}
extern "C" uint64_t flax_webgpu_canvas_display_size(void *value) {
  return (*static_cast<std::shared_ptr<Endpoint> *>(value))->size;
}
extern "C" int32_t flax_webgpu_canvas_display_initialize(void *value, void *registry) {
  return status([&] { (*static_cast<std::shared_ptr<Endpoint> *>(value))->initialize(registry); });
}
extern "C" void flax_webgpu_canvas_display_release(void *value) {
  delete static_cast<std::shared_ptr<Endpoint> *>(value);
}
extern "C" void *flax_webgpu_canvas_from_token(void *context, void *value) {
  void *result = nullptr;
  status([&] { result = new Surface(live(context), canvasToken(value)->endpoint); });
  return result;
}
extern "C" int32_t flax_webgpu_canvas_configure(void *value, WGPUDevice device,
                                                const WGPUTextureDescriptor *input,
                                                uint32_t opaque,
                                                uint32_t displayP3,
                                                uint32_t extendedToneMapping) {
  return status([&] {
    auto &canvas = *static_cast<Surface *>(value);
    const auto &descriptor = *reinterpret_cast<const wgpu::TextureDescriptor *>(input);
    const auto format = descriptor.format;
    require(format == wgpu::TextureFormat::BGRA8Unorm ||
                format == wgpu::TextureFormat::RGBA8Unorm ||
                format == wgpu::TextureFormat::RGBA16Float,
            "Unsupported canvas texture format");
    auto nextDevice = wgpu::Device::Acquire(retained(device));
    wgpu::Limits limits;
    nextDevice.GetLimits(&limits);
    std::vector<wgpu::TextureFormat> viewFormats;
    if (descriptor.viewFormatCount)
      viewFormats.assign(descriptor.viewFormats,
                         descriptor.viewFormats + descriptor.viewFormatCount);
    const auto srgbFormat = format == wgpu::TextureFormat::BGRA8Unorm
                                ? wgpu::TextureFormat::BGRA8UnormSrgb
                            : format == wgpu::TextureFormat::RGBA8Unorm
                                ? wgpu::TextureFormat::RGBA8UnormSrgb
                                : format;
    const bool incompatibleViews = std::ranges::any_of(viewFormats, [&](auto view) {
      return view != format && view != srgbFormat;
    });
    canvas.resetDrawingBuffer();
    canvas.device = std::move(nextDevice);
    canvas.format = format;
    canvas.viewFormats = std::move(viewFormats);
    canvas.displayP3 = displayP3 != 0;
    canvas.extendedToneMapping = extendedToneMapping != 0;
    canvas.maxTextureDimension2D = limits.maxTextureDimension2D;
    canvas.setSize(descriptor.size.width, descriptor.size.height);
    canvas.usage = descriptor.usage;
    canvas.opaque = opaque;
    constexpr auto publicUsages = wgpu::TextureUsage::CopySrc |
                                  wgpu::TextureUsage::CopyDst |
                                  wgpu::TextureUsage::TextureBinding |
                                  wgpu::TextureUsage::StorageBinding |
                                  wgpu::TextureUsage::RenderAttachment;
    canvas.unknownUsage = bool(canvas.usage & ~publicUsages);
    canvas.invalidConfiguration =
        incompatibleViews || canvas.unknownUsage ||
        canvas.usage == wgpu::TextureUsage::None ||
        (canvas.format == wgpu::TextureFormat::BGRA8Unorm &&
         bool(canvas.usage & wgpu::TextureUsage::StorageBinding) &&
         !canvas.device.HasFeature(wgpu::FeatureName::BGRA8UnormStorage));
    canvas.validateTextureDescriptor(descriptor);
  });
}
extern "C" void flax_webgpu_canvas_resize(void *value, uint32_t width,
                                           uint32_t height) {
  auto &canvas = *static_cast<Surface *>(value);
  canvas.resetDrawingBuffer();
  canvas.setSize(width, height);
}
extern "C" WGPUTexture flax_webgpu_canvas_texture(void *value) {
  WGPUTexture result = nullptr;
  status([&] {
    auto texture = static_cast<Surface *>(value)->acquire();
    result = texture.MoveToCHandle();
  });
  return result;
}
extern "C" int32_t flax_webgpu_canvas_destroy_texture(void *value,
                                                    WGPUTexture texture) {
  return status([&] {
    auto &canvas = *static_cast<Surface *>(value);
    if (canvas.current) {
      const auto &input =
          canvas.colorInput ? canvas.colorInput : canvas.current->texture;
      if (input.Get() == texture) {
        // Preserve submitted drawing and initialize untouched recycled storage.
        canvas.materializeOutput();
        canvas.outputFrozen = true;
      }
    }
    wgpuTextureDestroy(texture);
  });
}
extern "C" int32_t flax_webgpu_canvas_present(void *value) {
  return status([&] { static_cast<Surface *>(value)->present(); });
}
extern "C" void flax_webgpu_canvas_unconfigure(void *value) {
  static_cast<Surface *>(value)->unconfigure();
}
extern "C" void flax_webgpu_canvas_release(void *value) {
  delete static_cast<Surface *>(value);
}
