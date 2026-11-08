#import <CoreGraphics/CoreGraphics.h>
#import <CoreImage/CoreImage.h>
#import <ImageIO/ImageIO.h>

namespace {
enum class EncodedImageType : uint32_t { PNG, JPEG, HDRPNG };
constexpr size_t kMaxCanvasImageBytes = 0x7fffffff;
size_t canvasImageStride(const void *pixels, size_t length, uint32_t width,
                         uint32_t height, uint32_t float16) {
  const size_t stride = size_t(width) * (float16 ? 8 : 4);
  require(pixels && stride && height && height <= kMaxCanvasImageBytes / stride &&
              length == stride * height,
          "Invalid canvas image encoding storage");
  return stride;
}
} // namespace

extern "C" const void *flax_webgpu_encode_image(
    const void *pixels, size_t length, uint32_t width, uint32_t height,
    uint32_t float16, uint32_t displayP3, uint32_t premultiplied, uint32_t type,
    double quality) {
  const void *result = nullptr;
  status([&] {
    const size_t bits = float16 ? 16 : 8;
    const size_t stride = canvasImageStride(pixels, length, width, height, float16);
    const auto format = EncodedImageType(type);
    const bool jpeg = format == EncodedImageType::JPEG;
    const bool hdr = format == EncodedImageType::HDRPNG;
    require((jpeg || format == EncodedImageType::PNG || (hdr && float16)) &&
                quality >= 0 && quality <= 1,
            "Invalid canvas image encoding options");

    const auto sdrSpace = displayP3 ? kCGColorSpaceDisplayP3 : kCGColorSpaceSRGB;
    auto sourceSpace = sdrSpace;
    if (float16)
      sourceSpace = displayP3 ? kCGColorSpaceExtendedDisplayP3
                             : kCGColorSpaceExtendedSRGB;
    id colorSpace = CFBridgingRelease(CGColorSpaceCreateWithName(sourceSpace));
    // ImageIO finishes reading the borrowed pixel storage before this call returns.
    id provider = CFBridgingRelease(
        CGDataProviderCreateWithData(nullptr, pixels, length, nullptr));
    require(colorSpace && provider, "Cannot prepare canvas image data");
    uint32_t bitmapInfo =
        premultiplied ? kCGImageAlphaPremultipliedLast : kCGImageAlphaLast;
    if (float16)
      bitmapInfo |= kCGBitmapFloatComponents | kCGBitmapByteOrder16Little;
    id image = CFBridgingRelease(CGImageCreate(
        width, height, bits, bits * 4, stride, (__bridge CGColorSpaceRef)colorSpace,
        bitmapInfo, (__bridge CGDataProviderRef)provider, nullptr, false,
        kCGRenderingIntentRelativeColorimetric));
    require(image != nil, "Cannot create a canvas image for encoding");

    if (float16) {
      const auto linearSpace = displayP3 ? kCGColorSpaceExtendedLinearDisplayP3
                                        : kCGColorSpaceExtendedLinearSRGB;
      id working = CFBridgingRelease(CGColorSpaceCreateWithName(linearSpace));
      id output = CFBridgingRelease(CGColorSpaceCreateWithName(
          hdr ? kCGColorSpaceITUR_2100_PQ : sdrSpace));
      require(working && output, "Cannot prepare canvas image color spaces");
      auto context = [CIContext contextWithOptions:@{
        kCIContextWorkingColorSpace : working,
        kCIContextUseSoftwareRenderer : @YES,
      }];
      auto input = [CIImage imageWithCGImage:(__bridge CGImageRef)image];
      image = CFBridgingRelease([context createCGImage:input
                                            fromRect:input.extent
                                              format:jpeg ? kCIFormatRGBA8 : kCIFormatRGBA16
                                          colorSpace:(__bridge CGColorSpaceRef)output]);
      require(image != nil, "Cannot convert canvas pixels for encoding");
    }

    auto contents = [NSMutableData data];
    id destination = CFBridgingRelease(CGImageDestinationCreateWithData(
        (__bridge CFMutableDataRef)contents, jpeg ? CFSTR("public.jpeg") : CFSTR("public.png"),
        1, nullptr));
    require(destination != nil, "Cannot create the canvas image encoder");
    auto properties = [NSMutableDictionary dictionaryWithDictionary:@{
      (__bridge NSString *)kCGImagePropertyDPIWidth : @96,
      (__bridge NSString *)kCGImagePropertyDPIHeight : @96,
    }];
    if (jpeg) {
      properties[(__bridge NSString *)kCGImageDestinationLossyCompressionQuality] = @(quality);
      properties[(__bridge NSString *)kCGImageDestinationBackgroundColor] =
          (__bridge id)CGColorGetConstantColor(kCGColorBlack);
    }
    CGImageDestinationAddImage((__bridge CGImageDestinationRef)destination,
                               (__bridge CGImageRef)image,
                               (__bridge CFDictionaryRef)properties);
    require(CGImageDestinationFinalize((__bridge CGImageDestinationRef)destination) &&
                contents.length && contents.length <= kMaxCanvasImageBytes,
            "Cannot encode the canvas image");
    result = CFBridgingRetain(contents);
  });
  return result;
}

extern "C" int32_t flax_webgpu_encode_image_async(
    void *value, uint64_t request, const void *pixels, size_t length,
    uint32_t width, uint32_t height, uint32_t float16, uint32_t displayP3,
    uint32_t premultiplied, uint32_t type, double quality) {
  std::weak_ptr<State> weak;
  NSData *input = nil;
  const auto ready = status([&] {
    weak = live(value);
    canvasImageStride(pixels, length, width, height, float16);
    // Capture before returning so caller-owned FFI input can be collected.
    input = [NSData dataWithBytes:pixels length:length];
    require(input != nil, "Cannot capture canvas pixels for encoding");
  });
  if (ready != 1)
    return ready;

  static auto queue = dispatch_queue_create("dev.flax.webgpu.encode", DISPATCH_QUEUE_SERIAL);
  dispatch_async(queue, ^{
    @autoreleasepool {
      if (auto owner = weak.lock(); !owner || owner->closed)
        return;
      auto image = flax_webgpu_encode_image(input.bytes, input.length, width,
                                            height, float16, displayP3,
                                            premultiplied, type, quality);
      if (!image) {
        if (auto owner = weak.lock())
          owner->emit(@{
            @"request" : @(request), @"error" : @"EncodingError",
            @"message" : @(flax_webgpu_error())
          });
        return;
      }
      auto lease = std::shared_ptr<void>(const_cast<void *>(image),
                                         flax_webgpu_encoded_image_release);
      if (auto owner = weak.lock())
        owner->emit(@{
          @"request" : @(request), @"kind" : @"EncodedImage",
          @"handle" : address(image)
        }, std::move(lease));
    }
  });
  return ready;
}

extern "C" const void *flax_webgpu_encoded_image_bytes(const void *value,
                                                      size_t *length) {
  NSData *image = (__bridge NSData *)value;
  *length = image.length;
  return image.bytes;
}

extern "C" void flax_webgpu_encoded_image_release(const void *image) {
  CFRelease(image);
}
