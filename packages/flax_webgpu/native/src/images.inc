namespace {
void awaitSnapshot(std::future<bool> completion) {
  require(completion.wait_for(std::chrono::seconds(30)) == std::future_status::ready,
          "Canvas snapshot GPU completion timed out");
  require(completion.get(), "Cannot read the canvas drawing buffer");
}

void readDrawingTexture(Surface &canvas, const wgpu::Texture &texture,
                        uint8_t *output, size_t rowBytes) {
  const size_t stride = (rowBytes + 255) & ~size_t(255);
  wgpu::Limits limits;
  require(canvas.device.GetLimits(&limits) == wgpu::Status::Success,
          "Cannot read WebGPU buffer limits");
  // A valid texture can hold more bytes than the device allows in one buffer.
  const uint32_t rowsPerCopy =
      std::min<uint64_t>(canvas.height, limits.maxBufferSize / stride);
  require(rowsPerCopy > 0, "Cannot fit a canvas row in a GPU buffer");
  wgpu::BufferDescriptor bufferDescriptor;
  bufferDescriptor.size = stride * rowsPerCopy;
  bufferDescriptor.usage = wgpu::BufferUsage::CopyDst | wgpu::BufferUsage::MapRead;
  auto buffer = canvas.device.CreateBuffer(&bufferDescriptor);
  auto queue = canvas.device.GetQueue();
  for (uint32_t y = 0; y < canvas.height; y += rowsPerCopy) {
    const auto rows = std::min(rowsPerCopy, canvas.height - y);
    wgpu::DawnEncoderInternalUsageDescriptor internal;
    internal.useInternalUsages = true;
    wgpu::CommandEncoderDescriptor descriptor;
    descriptor.nextInChain = &internal;
    auto encoder = canvas.device.CreateCommandEncoder(&descriptor);
    wgpu::TexelCopyTextureInfo source{.texture = texture, .origin = {0, y, 0}};
    wgpu::TexelCopyBufferInfo destination;
    destination.buffer = buffer;
    destination.layout.bytesPerRow = uint32_t(stride);
    wgpu::Extent3D size{canvas.width, rows, 1};
    encoder.CopyTextureToBuffer(&source, &destination, &size);
    auto commands = encoder.Finish();
    queue.Submit(1, &commands);
    const size_t length = stride * rows;
    auto done = std::make_shared<std::promise<bool>>();
    auto completion = done->get_future();
    buffer.MapAsync(wgpu::MapMode::Read, 0, length,
                    wgpu::CallbackMode::AllowSpontaneous,
                    [done](wgpu::MapAsyncStatus result, wgpu::StringView) {
                      done->set_value(result == wgpu::MapAsyncStatus::Success);
                    });
    awaitSnapshot(std::move(completion));
    auto *pixels = static_cast<const uint8_t *>(buffer.GetConstMappedRange(0, length));
    require(pixels != nullptr, "Cannot map the canvas drawing buffer");
    for (uint32_t row = 0; row < rows; ++row)
      memcpy(output + (y + row) * rowBytes, pixels + row * stride, rowBytes);
    buffer.Unmap();
  }
}

bool readDrawingSurface(Surface &canvas, uint8_t *output, size_t rowBytes) {
  auto source = canvas.current;
  __attribute__((objc_precise_lifetime)) id<MTLTexture> published = nil;
  if (source) {
    // Initialize untouched recycled storage without publishing or expiring it.
    canvas.materializeOutput();
  } else {
    published = [canvas.endpoint->output copyFlaxDawnMetalTexture];
    auto lease = (FlaxWebGpuLease *)objc_getAssociatedObject(
        published, @selector(copyFlaxDawnMetalTexture));
    if (lease)
      source = lease->storage;
  }
  if (!source)
    return false;

  auto done = std::make_shared<std::promise<bool>>();
  auto completion = done->get_future();
  canvas.device.GetQueue().OnSubmittedWorkDone(
      wgpu::CallbackMode::AllowSpontaneous,
      [done](wgpu::QueueWorkDoneStatus result, wgpu::StringView) {
        done->set_value(result == wgpu::QueueWorkDoneStatus::Success);
      });
  awaitSnapshot(std::move(completion));

  const bool video = source->pixels != nullptr;
  require(video ? CVPixelBufferLockBaseAddress(source->pixels,
                                               kCVPixelBufferLock_ReadOnly) ==
                      kCVReturnSuccess
                : IOSurfaceLock(source->rgbaPixels, kIOSurfaceLockReadOnly,
                                nullptr) == kIOReturnSuccess,
          "Cannot read the canvas IOSurface");
  const auto *pixels = static_cast<const uint8_t *>(
      video ? CVPixelBufferGetBaseAddress(source->pixels)
            : IOSurfaceGetBaseAddress(source->rgbaPixels));
  const size_t stride = video ? CVPixelBufferGetBytesPerRow(source->pixels)
                              : IOSurfaceGetBytesPerRow(source->rgbaPixels);
  if (pixels && stride >= rowBytes)
    for (uint32_t y = 0; y < canvas.height; ++y)
      memcpy(output + y * rowBytes, pixels + y * stride, rowBytes);
  if (video)
    CVPixelBufferUnlockBaseAddress(source->pixels, kCVPixelBufferLock_ReadOnly);
  else
    IOSurfaceUnlock(source->rgbaPixels, kIOSurfaceLockReadOnly, nullptr);
  require(pixels && stride >= rowBytes, "Invalid canvas IOSurface layout");
  return true;
}
} // namespace

// Explicit snapshots only. Ordinary frame presentation never reads pixels.
extern "C" int32_t flax_webgpu_canvas_readback(void *value, void *destination,
                                               size_t length,
                                               uint32_t transfer) {
  return status([&] {
    auto &canvas = *static_cast<Surface *>(value);
    auto *output = static_cast<uint8_t *>(destination);
    const bool fp16 = canvas.format == wgpu::TextureFormat::RGBA16Float;
    const size_t rowBytes = size_t(canvas.width) * (fp16 ? 8 : 4);
    require(canvas.device && output && rowBytes && canvas.height &&
                length / canvas.height == rowBytes && length % canvas.height == 0,
            "Invalid canvas snapshot storage");

    const auto &texture = canvas.colorInput && !canvas.outputFrozen
                              ? canvas.colorInput
                              : canvas.lastDrawingBuffer;
    bool captured = true;
    if (texture)
      readDrawingTexture(canvas, texture, output, rowBytes);
    else if (!readDrawingSurface(canvas, output, rowBytes)) {
      memset(output, 0, length);
      captured = false;
    }

    if (canvas.format == wgpu::TextureFormat::BGRA8Unorm)
      for (size_t i = 0; i < length; i += 4)
        std::swap(output[i], output[i + 2]);
    if (canvas.opaque) {
      if (fp16) {
        const uint16_t one = 0x3c00;
        for (size_t i = 6; i < length; i += 8)
          memcpy(output + i, &one, sizeof(one));
      } else {
        for (size_t i = 3; i < length; i += 4)
          output[i] = 255;
      }
    }
    if (transfer && captured) {
      require(canvas.discardCurrent() == wgpu::Status::Success,
              "Cannot expire the transferred canvas texture");
      canvas.acquire();
      canvas.present();
    }
  });
}
