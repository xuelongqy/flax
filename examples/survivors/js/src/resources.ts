import type {} from '@flax/canvas/globals';
import { getAssetBundle } from '@flax/core/assets';
import type { ImageBitmap } from '@flax/canvas';

export interface SceneAssets {
  actors: ImageBitmap;
  floor: ImageBitmap;
}

export async function loadSceneAssets(): Promise<SceneAssets> {
  let actors: ImageBitmap | undefined;
  try {
    const decode = async (path: string): Promise<ImageBitmap> => {
      const bytes = await getAssetBundle().load(path);
      return createImageBitmap(
        new Blob([new Uint8Array(bytes.buffer, bytes.byteOffset, bytes.byteLength)], {
          type: 'image/png',
        }),
      );
    };
    actors = await decode('assets/images/actors-directional-v3.png');
    const floor = await decode('assets/images/floor-metal-v2.png');
    return { actors, floor };
  } catch (error) {
    actors?.close();
    throw error;
  }
}
