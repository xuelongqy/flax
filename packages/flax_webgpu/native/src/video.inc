// The plugin registers this producer in the Flutter texture registry.
#include <array>

@interface FlaxWebGpuVideoSource : NSObject
+ (instancetype)videoSourceForRegistry:(id)registry sourceId:(NSString *)sourceId;
- (CVPixelBufferRef)copyFlaxVideoFrameWithTimestamp:(int64_t *)timestamp
                                           duration:(int64_t *)duration CF_RETURNS_RETAINED;
@end

namespace {
using VideoBuffer =
    std::unique_ptr<std::remove_pointer_t<CVPixelBufferRef>, decltype(&CVPixelBufferRelease)>;

struct VideoPixels {
  explicit VideoPixels(VideoBuffer value) : buffer(std::move(value)) { ++videoPixels; }
  ~VideoPixels() {
    buffer.reset();
    --videoPixels;
  }
  VideoBuffer buffer;
};

struct VideoImport {
  wgpu::Device device;
  wgpu::SharedTextureMemory memory;
  wgpu::Texture texture;
  wgpu::TextureView plane0, plane1;
  wgpu::ExternalTexture external[2];
};

struct VideoFrame {
  VideoFrame(VideoBuffer buffer, wgpu::Extent2D size, OSType format, bool bt709,
             int64_t timestamp, int64_t duration)
      : pixels(std::make_shared<VideoPixels>(std::move(buffer))), size(size), format(format),
        bt709(bt709), timestamp(timestamp), duration(duration) {
    ++videoFrames;
  }
  ~VideoFrame() { --videoFrames; }

  bool nv12() const { return format != kCVPixelFormatType_32BGRA; }

  std::shared_ptr<VideoPixels> pixels;
  wgpu::Extent2D size;
  OSType format;
  bool bt709;
  int64_t timestamp, duration;
  std::vector<VideoImport> imports;
};

id videoAttachment(CVPixelBufferRef buffer, CFStringRef key) {
  return CFBridgingRelease(CVBufferCopyAttachment(buffer, key, nullptr));
}

bool matchesVideoTag(id tag, CFTypeRef expected) {
  return tag && CFEqual((__bridge CFTypeRef)tag, expected);
}

bool videoUsesBt709Transfer(CVPixelBufferRef pixels, bool nv12) {
  id primaries = videoAttachment(pixels, kCVImageBufferColorPrimariesKey);
  id matrix = videoAttachment(pixels, kCVImageBufferYCbCrMatrixKey);
  id transfer = videoAttachment(pixels, kCVImageBufferTransferFunctionKey);
  require(matchesVideoTag(primaries, kCVImageBufferColorPrimaries_ITU_R_709_2) ||
              (!nv12 && !primaries),
          "Unsupported video color primaries. Expected BT.709 or sRGB");
  require(matchesVideoTag(matrix, kCVImageBufferYCbCrMatrix_ITU_R_709_2) || (!nv12 && !matrix),
          "Unsupported video color matrix. Expected BT.709");
  const bool bt709 = matchesVideoTag(transfer, kCVImageBufferTransferFunction_ITU_R_709_2);
  require(bt709 || (!nv12 &&
                    (matchesVideoTag(transfer, kCVImageBufferTransferFunction_sRGB) ||
                     (!transfer && !videoAttachment(pixels, kCVImageBufferGammaLevelKey)))),
          "Unsupported video transfer function. Expected BT.709 or sRGB");
  require(!videoAttachment(pixels, kCVImageBufferLogTransferFunctionKey) &&
              !videoAttachment(pixels, kCVImageBufferICCProfileKey),
          "Unsupported video log transfer or ICC profile");

  if (id profile = videoAttachment(pixels, kCVImageBufferCGColorSpaceKey)) {
    auto space = (__bridge CGColorSpaceRef)profile;
    require(CFGetTypeID(space) == CGColorSpaceGetTypeID(), "Invalid video color space");
    auto name = CGColorSpaceGetName(space);
    const bool profile709 = name && (CFEqual(name, kCGColorSpaceITUR_709) ||
                                    CFEqual(name, kCGColorSpaceCoreMedia709));
    const bool profileSrgb = name && CFEqual(name, kCGColorSpaceSRGB);
    require((profile709 || (!nv12 && profileSrgb)) && (!transfer || bt709 == profile709),
            "Unsupported or conflicting video color space");
    return profile709;
  }
  return bt709;
}

constexpr std::array<float, 12> videoBt709Matrix(float black, float lumaRange,
                                                 float chromaRange) {
  const float luma = 255.f / lumaRange;
  const float chroma = 255.f / chromaRange;
  const float red = 1.5748f * chroma;
  const float greenCb = -0.18732427f * chroma;
  const float greenCr = -0.46812427f * chroma;
  const float blue = 1.8556f * chroma;
  const float offset = -black / lumaRange;
  const float neutral = 128.f / 255.f;
  return {
      luma, 0.f,     red,     offset - neutral * red,
      luma, greenCb, greenCr, offset - neutral * (greenCb + greenCr),
      luma, blue,    0.f,     offset - neutral * blue,
  };
}

constexpr auto videoBt709Limited = videoBt709Matrix(16.f, 219.f, 224.f);
constexpr auto videoBt709Full = videoBt709Matrix(0.f, 255.f, 255.f);
constexpr float videoBt709Decode[7] = {
    1.f / .45f, 1.f / 1.099f, .099f / 1.099f, 1.f / 4.5f, .081f, 0.f, 0.f,
};
constexpr float videoSrgbDecode[7] = {
    2.4f, 1.f / 1.055f, .055f / 1.055f, 1.f / 12.92f, .04045f, 0.f, 0.f,
};
constexpr float videoSrgbEncode[7] = {
    1.f / 2.4f, 1.13711897f, 0.f, 12.92f, .0031308f, -.055f, 0.f,
};
constexpr float videoIdentityGamut[9] = {
    1.f, 0.f, 0.f, 0.f, 1.f, 0.f, 0.f, 0.f, 1.f,
};
// BT.709 shares sRGB primaries. Dawn expects this matrix in column order.
constexpr float videoSrgbToP3[9] = {
    .82259287f, .03319951f, .01708535f, .17753395f, .9667835f,
    .07239572f, 0.f,        0.f,        .91030148f,
};

VideoImport &videoImportForDevice(VideoFrame &frame, WGPUDevice raw) {
  for (auto &cached : frame.imports)
    if (cached.device.Get() == raw)
      return cached;

  VideoImport backing;
  backing.device = wgpu::Device::Acquire(retained(raw));
  const bool nv12 = frame.nv12();
  require(!nv12 || backing.device.HasFeature(wgpu::FeatureName::DawnMultiPlanarFormats),
          "Dawn NV12 import is unavailable on this device");
  wgpu::SharedTextureMemoryIOSurfaceDescriptor iosurface;
  iosurface.ioSurface = CVPixelBufferGetIOSurface(frame.pixels->buffer.get());
  iosurface.allowStorageBinding = false;
  wgpu::SharedTextureMemoryDescriptor memoryDescriptor;
  memoryDescriptor.nextInChain = &iosurface;
  backing.memory = backing.device.ImportSharedTextureMemory(&memoryDescriptor);
  wgpu::SharedTextureMemoryProperties properties;
  const auto format =
      nv12 ? wgpu::TextureFormat::R8BG8Biplanar420Unorm : wgpu::TextureFormat::BGRA8Unorm;
  require(backing.memory.GetProperties(&properties) == wgpu::Status::Success &&
              properties.format == format && properties.size.width == frame.size.width &&
              properties.size.height == frame.size.height &&
              static_cast<bool>(properties.usage & wgpu::TextureUsage::TextureBinding),
          "Dawn did not import a sampleable video IOSurface");

  wgpu::TextureDescriptor textureDescriptor;
  textureDescriptor.size = properties.size;
  textureDescriptor.format = format;
  textureDescriptor.usage = wgpu::TextureUsage::TextureBinding;
  backing.texture = backing.memory.CreateTexture(&textureDescriptor);
  if (nv12) {
    wgpu::TextureViewDescriptor plane;
    plane.format = wgpu::TextureFormat::R8Unorm;
    plane.aspect = wgpu::TextureAspect::Plane0Only;
    backing.plane0 = backing.texture.CreateView(&plane);
    plane.format = wgpu::TextureFormat::RG8Unorm;
    plane.aspect = wgpu::TextureAspect::Plane1Only;
    backing.plane1 = backing.texture.CreateView(&plane);
  } else {
    backing.plane0 = backing.texture.CreateView();
  }

  wgpu::SharedTextureMemoryBeginAccessDescriptor access;
  access.initialized = true;
  access.concurrentRead = true;
  frame.imports.push_back(std::move(backing));
  auto &result = frame.imports.back();
  if (result.memory.BeginAccess(result.texture, &access) != wgpu::Status::Success) {
    frame.imports.pop_back();
    throw std::runtime_error("Cannot begin reading a video IOSurface");
  }
  return result;
}

void retireVideoImport(const VideoImport &import, const std::shared_ptr<VideoPixels> &pixels) {
  // Dawn can report work done early after loss. Destroy drains the Metal queue.
  if (import.memory.IsDeviceLost()) {
    import.device.Destroy();
    return;
  }
  for (const auto &external : import.external)
    if (external)
      external.Expire();
  wgpu::SharedTextureMemoryEndAccessState end;
  const auto ended = import.memory.EndAccess(import.texture, &end);
  if (ended == wgpu::Status::Success && end.fenceCount == 0)
    return;
  bool hasMetalFence = false;
  if (ended == wgpu::Status::Success && end.fenceCount == 1 && end.signaledValueCount == 1) {
    wgpu::SharedFenceMTLSharedEventExportInfo event;
    wgpu::SharedFenceExportInfo info;
    info.nextInChain = &event;
    end.fences[0].ExportInfo(&info);
    hasMetalFence = info.type == wgpu::SharedFenceType::MTLSharedEvent && event.sharedEvent;
    if (hasMetalFence && ((__bridge id<MTLSharedEvent>)event.sharedEvent).signaledValue >=
                             end.signaledValues[0])
      return;
  }
  if (!hasMetalFence)
    ++videoRetirementErrors;

  // WorkDone also targets deferred uploads, which may be the last queue call.
  dawn::native::DeviceTick(import.device.Get());
  // A Metal command buffer that fails may never signal its event. The Dawn
  // queue serial also advances after a failed command buffer finishes.
  ++videoFences;
  try {
    import.device.GetQueue().OnSubmittedWorkDone(
        wgpu::CallbackMode::AllowSpontaneous,
        [pixels](wgpu::QueueWorkDoneStatus status, wgpu::StringView) {
          (void)pixels;
          if (status != wgpu::QueueWorkDoneStatus::Success)
            ++videoRetirementErrors;
          --videoFences;
        });
  } catch (const std::bad_alloc &) {
    --videoFences;
    ++videoRetirementErrors;
    import.device.Destroy();
    return;
  }
  if (import.memory.IsDeviceLost())
    import.device.Destroy();
}
} // namespace

extern "C" void *flax_webgpu_video_frame_acquire(void *registry, const char *source_id) {
  void *result = nullptr;
  status([&] {
    if (!registry || !source_id)
      return;
    NSString *name = [NSString stringWithUTF8String:source_id];
    Class sourceClass = objc_lookUpClass("FlaxWebGpuVideoSource");
    if (!name || !sourceClass)
      return;
    FlaxWebGpuVideoSource *source =
        [(id)sourceClass videoSourceForRegistry:(__bridge id)registry sourceId:name];
    int64_t timestamp = 0, duration = -1;
    VideoBuffer buffer([source copyFlaxVideoFrameWithTimestamp:&timestamp duration:&duration],
                       CVPixelBufferRelease);
    if (!buffer)
      return;

    const auto pixels = buffer.get();
    const auto format = CVPixelBufferGetPixelFormatType(pixels);
    const bool nv12 = format == kCVPixelFormatType_420YpCbCr8BiPlanarVideoRange ||
                      format == kCVPixelFormatType_420YpCbCr8BiPlanarFullRange;
    require(nv12 || format == kCVPixelFormatType_32BGRA,
            "Unsupported video pixel format. Expected 8-bit BGRA or NV12");
    const auto surface = CVPixelBufferGetIOSurface(pixels);
    const auto width = CVPixelBufferGetWidth(pixels);
    const auto height = CVPixelBufferGetHeight(pixels);
    require(surface && IOSurfaceGetPixelFormat(surface) == format &&
                IOSurfaceGetWidth(surface) == width && IOSurfaceGetHeight(surface) == height &&
                IOSurfaceGetPlaneCount(surface) == (nv12 ? 2u : 0u) &&
                CVPixelBufferGetPlaneCount(pixels) == (nv12 ? 2u : 0u),
            "Expected a video frame with matching IOSurface backing");
    require(width && height && width <= UINT32_MAX && height <= UINT32_MAX &&
                (!nv12 || (width % 2 == 0 && height % 2 == 0)),
            "Unsupported video frame dimensions");
    const auto display = CVImageBufferGetDisplaySize(pixels);
    id fields = videoAttachment(pixels, kCVImageBufferFieldCountKey);
    require(
        CGRectEqualToRect(CVImageBufferGetCleanRect(pixels),
                          CGRectMake(0, 0, width, height)) &&
            display.width == width && display.height == height &&
            (!fields || ([fields isKindOfClass:NSNumber.class] && [fields doubleValue] == 1)),
        "Expected a full-frame progressive video with square pixels");
    if (!nv12) {
      id alpha = videoAttachment(pixels, kCVImageBufferAlphaChannelModeKey);
      require(!alpha || matchesVideoTag(alpha, kCVImageBufferAlphaChannelMode_StraightAlpha) ||
                  matchesVideoTag(videoAttachment(pixels, kCVImageBufferAlphaChannelIsOpaque),
                                  kCFBooleanTrue),
              "Unsupported video alpha mode. Expected straight or opaque alpha");
    }
    const bool bt709 = videoUsesBt709Transfer(pixels, nv12);
    result = new VideoFrame(std::move(buffer),
                            {static_cast<uint32_t>(width), static_cast<uint32_t>(height)},
                            format, bt709, timestamp, duration);
  });
  return result;
}

extern "C" const char *flax_webgpu_video_frame_info(void *frame) {
  const char *result = nullptr;
  status([&] {
    require(frame, "Missing video frame");
    auto &value = *static_cast<VideoFrame *>(frame);
    result = json(@{
      @"codedWidth" : @(value.size.width),
      @"codedHeight" : @(value.size.height),
      @"displayWidth" : @(value.size.width),
      @"displayHeight" : @(value.size.height),
      @"timestamp" : @(value.timestamp),
      @"duration" : value.duration < 0 ? (id)NSNull.null : @(value.duration),
      @"format" : value.nv12() ? @"NV12" : @"BGRA",
    });
  });
  return result;
}

extern "C" WGPUExternalTexture flax_webgpu_video_frame_import(WGPUDevice raw, void *frame,
                                                              uint32_t color_space) {
  WGPUExternalTexture result = nullptr;
  status([&] {
    require(raw && frame && color_space <= 1, "Invalid video frame import");
    auto &value = *static_cast<VideoFrame *>(frame);
    auto &backing = videoImportForDevice(value, raw);
    require(!backing.memory.IsDeviceLost(), "The video frame device is lost");
    auto &external = backing.external[color_space];
    if (!external) {
      wgpu::ExternalTextureDescriptor descriptor;
      descriptor.plane0 = backing.plane0;
      descriptor.plane1 = backing.plane1;
      descriptor.cropSize = value.size;
      descriptor.apparentSize = value.size;
      descriptor.doYuvToRgbConversionOnly = !value.bt709 && color_space == 0;
      if (value.nv12()) {
        descriptor.yuvToRgbConversionMatrix =
            (value.format == kCVPixelFormatType_420YpCbCr8BiPlanarFullRange
                 ? videoBt709Full
                 : videoBt709Limited)
                .data();
      }
      descriptor.srcTransferFunctionParameters =
          value.bt709 ? videoBt709Decode : videoSrgbDecode;
      descriptor.dstTransferFunctionParameters = videoSrgbEncode;
      descriptor.gamutConversionMatrix = color_space == 1 ? videoSrgbToP3 : videoIdentityGamut;
      external = backing.device.CreateExternalTexture(&descriptor);
    }
    result = wgpu::ExternalTexture(external).MoveToCHandle();
  });
  return result;
}

extern "C" void flax_webgpu_video_frame_release(void *frame) {
  if (!frame)
    return;
  status([&] {
    std::unique_ptr<VideoFrame> value(static_cast<VideoFrame *>(frame));
    for (const auto &import : value->imports)
      retireVideoImport(import, value->pixels);
  });
}
