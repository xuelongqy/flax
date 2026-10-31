// Explicit snapshots only. Ordinary frame presentation never reads pixels.
extern "C" int32_t flax_webgpu_canvas_readback(void *value, void *destination,
                                               size_t length,
                                               uint32_t transfer) {
  return status([&] {
    auto &canvas = *static_cast<Surface *>(value);
    auto *output = static_cast<uint8_t *>(destination);
    require(canvas.device && output &&
                length == size_t(canvas.width) * canvas.height * 4,
            "Invalid canvas snapshot storage");
    auto source = canvas.current;
    __strong id<MTLTexture> published;
    if (source) {
      // Load/store initializes an unused texture without replacing its JS
      // identity.
      auto encoder = canvas.device.CreateCommandEncoder();
      wgpu::RenderPassColorAttachment color;
      color.view = source->texture.CreateView();
      color.loadOp = wgpu::LoadOp::Load;
      color.storeOp = wgpu::StoreOp::Store;
      wgpu::RenderPassDescriptor descriptor;
      descriptor.colorAttachmentCount = 1;
      descriptor.colorAttachments = &color;
      auto pass = encoder.BeginRenderPass(&descriptor);
      pass.End();
      auto commands = encoder.Finish();
      canvas.device.GetQueue().Submit(1, &commands);
    } else {
      published = [canvas.output copyFlaxDawnMetalTexture];
      auto lease = (FlaxWebGpuLease *)objc_getAssociatedObject(
          published, @selector(copyFlaxDawnMetalTexture));
      if (lease)
        source = lease->storage;
    }
    if (!source) {
      memset(output, 0, length);
      if (canvas.opaque)
        for (size_t i = 3; i < length; i += 4)
          output[i] = 255;
      return;
    }
    struct Completion {
      std::mutex mutex;
      std::condition_variable changed;
      bool ready = false;
      wgpu::QueueWorkDoneStatus status = wgpu::QueueWorkDoneStatus::Error;
    };
    auto done = std::make_shared<Completion>();
    canvas.device.GetQueue().OnSubmittedWorkDone(
        wgpu::CallbackMode::AllowSpontaneous,
        [done](wgpu::QueueWorkDoneStatus result, wgpu::StringView) {
          {
            std::lock_guard lock(done->mutex);
            done->status = result;
            done->ready = true;
          }
          done->changed.notify_one();
        });
    {
      std::unique_lock lock(done->mutex);
      require(done->changed.wait_for(lock, std::chrono::seconds(30),
                                     [&] { return done->ready; }),
              "Canvas snapshot GPU completion timed out");
      require(done->status == wgpu::QueueWorkDoneStatus::Success,
              "Canvas snapshot device was lost");
    }
    const bool video = source->pixels != nullptr;
    require(video ? CVPixelBufferLockBaseAddress(source->pixels,
                                                 kCVPixelBufferLock_ReadOnly) ==
                        kCVReturnSuccess
                  : IOSurfaceLock(source->rgbaPixels, kIOSurfaceLockReadOnly,
                                  nullptr) == kIOReturnSuccess,
            "Cannot read the canvas IOSurface");
    auto unlock = [&] {
      if (video)
        CVPixelBufferUnlockBaseAddress(source->pixels,
                                       kCVPixelBufferLock_ReadOnly);
      else
        IOSurfaceUnlock(source->rgbaPixels, kIOSurfaceLockReadOnly, nullptr);
    };
    auto pixels = static_cast<const uint8_t *>(
        video ? CVPixelBufferGetBaseAddress(source->pixels)
              : IOSurfaceGetBaseAddress(source->rgbaPixels));
    const size_t stride = video ? CVPixelBufferGetBytesPerRow(source->pixels)
                                : IOSurfaceGetBytesPerRow(source->rgbaPixels);
    if (!pixels || stride < size_t(canvas.width) * 4) {
      unlock();
      throw std::runtime_error("Invalid canvas IOSurface layout");
    }
    for (uint32_t y = 0; y < canvas.height; y++)
      for (uint32_t x = 0; x < canvas.width; x++) {
        const auto *pixel = pixels + stride * y + x * 4;
        auto *rgba = output + (size_t(y) * canvas.width + x) * 4;
        const uint32_t alpha = canvas.opaque ? 255 : pixel[3];
        for (int channel = 0; channel < 3; channel++) {
          const uint32_t value =
              pixel[canvas.format == wgpu::TextureFormat::BGRA8Unorm
                        ? 2 - channel
                        : channel];
          rgba[channel] =
              canvas.opaque ? value
              : alpha       ? std::min(255u, (value * 255 + alpha / 2) / alpha)
                            : 0;
        }
        rgba[3] = alpha;
      }
    unlock();
    if (transfer) {
      if (canvas.current) {
        wgpu::SharedTextureMemoryEndAccessState end;
        require(canvas.current->memory.EndAccess(canvas.current->texture,
                                                 &end) == wgpu::Status::Success,
                "Cannot expire the transferred canvas texture");
        canvas.current->texture.Destroy();
        canvas.current->leased = false;
        canvas.current.reset();
      }
      canvas.acquire();
      canvas.present();
    }
  });
}
