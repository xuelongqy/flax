#ifndef FLAX_WEBGPU_H_
#define FLAX_WEBGPU_H_
#include "dawn/webgpu.h"
#include <stddef.h>
#include <stdint.h>
#ifdef __cplusplus
extern "C" {
#endif
/* Private host glue. Ordinary GPU operations use Dawn's generated C functions.
 */
void *flax_webgpu_create(void);
void flax_webgpu_signal(void *context, void (*notify)(void));
void flax_webgpu_stop(void *context);
void flax_webgpu_release_context(void *context);
const char *flax_webgpu_error(void);
const char *flax_webgpu_poll(void *context);
void flax_webgpu_acknowledge(void *context);
const char *flax_webgpu_stats(void *context);
const char *flax_webgpu_wgsl(void *context);
void *flax_webgpu_proc(const char *name);
int32_t flax_webgpu_init(const char *name, void *data, size_t size);
int32_t flax_webgpu_adapter(void *context, uint64_t request,
                            uint32_t preference, uint32_t fallback,
                            uint32_t feature_level);
int32_t flax_webgpu_device(void *context, WGPUAdapter adapter, uint64_t request,
                           const char *descriptor);
void flax_webgpu_release_device(WGPUDevice device);
const char *flax_webgpu_info(uint32_t kind, void *object);
int32_t flax_webgpu_map(void *context, WGPUBuffer buffer, uint64_t request,
                        uint64_t mode, uint64_t offset, uint64_t size);
void *flax_webgpu_mapped_range(WGPUBuffer buffer, uint64_t mode,
                               uint64_t offset, uint64_t size);
void *flax_webgpu_mapped_data(void *mapping);
int32_t flax_webgpu_mapped_flush(void *mapping);
void flax_webgpu_mapped_release(void *mapping);
int32_t flax_webgpu_done(void *context, WGPUQueue queue, uint64_t request);
int32_t flax_webgpu_pop_error(void *context, WGPUDevice device,
                              uint64_t request);
int32_t flax_webgpu_compilation_info(void *context, WGPUShaderModule shader,
                                     uint64_t request);
int32_t flax_webgpu_pipeline(void *context, WGPUDevice device, uint64_t request,
                             uint32_t kind, const void *descriptor);
/* Index 5 counts unsafe canvas retirement. Indices 10–13 count video frames,
 * pixel-buffer leases, pending GPU reads and retirement errors. */
uint64_t flax_webgpu_live(uint32_t kind);
/* A registered producer returns an owned frame, or null with an empty error
 * while no frame is available. Frame info timestamps and durations are in µs. */
void *flax_webgpu_video_frame_acquire(void *registry, const char *source_id);
const char *flax_webgpu_video_frame_info(void *frame);
/* Returns an independent owned lease sharing the same pixel buffer. */
void *flax_webgpu_video_frame_clone(void *frame);
/* Copies original-format planes; layout contains offset/stride pairs in bytes. */
int32_t flax_webgpu_video_frame_copy(void *frame, void *destination, size_t length,
                                     uint32_t x, uint32_t y, uint32_t width,
                                     uint32_t height, const uint32_t *layout,
                                     uint32_t planes);
/* Returns an owned Dawn handle; color_space is 0 (sRGB) or 1 (Display P3). */
WGPUExternalTexture flax_webgpu_video_frame_import(WGPUDevice device, void *frame,
                                                   uint32_t color_space);
void flax_webgpu_video_frame_release(void *frame);
void *flax_webgpu_canvas_create(void *context, void *registry);
/* Private owned ArrayBuffer backing storage; only its original address is a lease.
 * The backing-store deleter owns token_release independently of any JS runtime. */
void *flax_webgpu_canvas_token_create(void *registry, uint32_t width, uint32_t height);
void flax_webgpu_canvas_token_release(void *token);
uint32_t flax_webgpu_canvas_token_dimension(void *token, uint32_t axis);
int64_t flax_webgpu_canvas_token_id(void *token);
int32_t flax_webgpu_canvas_token_resize(void *token, uint32_t width, uint32_t height);
void *flax_webgpu_canvas_token_display(void *token);
int64_t flax_webgpu_canvas_display_id(void *display);
uint64_t flax_webgpu_canvas_display_size(void *display);
int32_t flax_webgpu_canvas_display_initialize(void *display, void *registry);
void flax_webgpu_canvas_display_release(void *display);
void *flax_webgpu_canvas_from_token(void *context, void *token);
int64_t flax_webgpu_canvas_id(void *canvas);
int32_t flax_webgpu_canvas_configure(void *canvas, WGPUDevice device,
                                     const WGPUTextureDescriptor *descriptor,
                                     uint32_t opaque, uint32_t display_p3,
                                     uint32_t extended_tone_mapping);
void flax_webgpu_canvas_resize(void *canvas, uint32_t width, uint32_t height);
WGPUTexture flax_webgpu_canvas_texture(void *canvas);
int32_t flax_webgpu_canvas_destroy_texture(void *canvas, WGPUTexture texture);
int32_t flax_webgpu_canvas_present(void *canvas);
int32_t flax_webgpu_canvas_readback(void *canvas, void *pixels, size_t length,
                                    uint32_t transfer);
void flax_webgpu_canvas_unconfigure(void *canvas);
void flax_webgpu_canvas_release(void *canvas);
/* Encoded bytes stay valid until the returned image handle is released. */
const void *flax_webgpu_encode_image(const void *pixels, size_t length,
                                     uint32_t width, uint32_t height,
                                     uint32_t float16, uint32_t display_p3,
                                     uint32_t premultiplied, uint32_t type,
                                     double quality);
int32_t flax_webgpu_encode_image_async(
    void *context, uint64_t request, const void *pixels, size_t length,
    uint32_t width, uint32_t height, uint32_t float16, uint32_t display_p3,
    uint32_t premultiplied, uint32_t type, double quality);
const void *flax_webgpu_encoded_image_bytes(const void *image, size_t *length);
void flax_webgpu_encoded_image_release(const void *image);
#ifdef __cplusplus
}
#endif
#endif
