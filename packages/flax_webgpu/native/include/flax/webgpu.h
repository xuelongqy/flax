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
/* Session, mapping, surface, IOSurface and publication counts; index 5 is
 * unsafe retirement. */
uint64_t flax_webgpu_live(uint32_t kind);
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
                                     uint32_t width, uint32_t height,
                                     uint64_t usage, uint32_t opaque,
                                     WGPUTextureFormat format,
                                     uint32_t srgb_view, uint32_t display_p3,
                                     uint32_t extended_tone_mapping);
WGPUTexture flax_webgpu_canvas_texture(void *canvas);
int32_t flax_webgpu_canvas_destroy_texture(void *canvas, WGPUTexture texture);
int32_t flax_webgpu_canvas_present(void *canvas);
int32_t flax_webgpu_canvas_readback(void *canvas, void *pixels, size_t length,
                                    uint32_t transfer);
void flax_webgpu_canvas_unconfigure(void *canvas);
void flax_webgpu_canvas_release(void *canvas);
#ifdef __cplusplus
}
#endif
#endif
