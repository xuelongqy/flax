import { installWebGpu } from '../webgpu.js';
import type { VideoSources } from '../video-frames.js';
export function install(
  global: typeof globalThis,
  call: (operation: string, ...args: unknown[]) => unknown,
  videoSources: VideoSources = [],
) {
  return installWebGpu(global, call, false, videoSources);
}

export function installWorker(
  global: typeof globalThis,
  configuration: { registry: string; videoSources?: VideoSources },
) {
  const state = installWebGpu(
    global,
    (operation, ...args) => {
      if (operation === 'resize') {
        (global as any).__flaxBaseCall(
          'workerProviderMessage',
          '@flax/webgpu/host',
          operation,
          ...args,
        );
      }
    },
    true,
    configuration.videoSources,
  );
  state.initialize(configuration.registry);
  return state;
}
