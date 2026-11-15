import type {} from '@flax/canvas/globals';
import { getAssetBundle } from '@flax/core/assets';
import type { ImageBitmap, ImageBitmapOptions } from '@flax/canvas';

export interface SceneAssets {
  actors: ImageBitmap;
  floor: ImageBitmap;
  projectiles: ImageBitmap;
}

export async function loadSceneAssets(): Promise<SceneAssets> {
  let actors: ImageBitmap | undefined;
  let floor: ImageBitmap | undefined;
  try {
    const decode = async (
      path: string,
      options?: ImageBitmapOptions,
    ): Promise<ImageBitmap> => {
      const bytes = await getAssetBundle().load(path);
      const blob = new Blob(
        [new Uint8Array(bytes.buffer, bytes.byteOffset, bytes.byteLength)],
        { type: 'image/png' },
      );
      return options ? createImageBitmap(blob, options) : createImageBitmap(blob);
    };
    actors = await decode('assets/images/actors-directional-v3.png');
    floor = await decode('assets/images/floor-metal-v2.png');
    const projectiles = await decode('assets/images/projectiles-v1.png', {
      resizeWidth: 512,
      resizeHeight: 512,
      resizeQuality: 'high',
    });
    return { actors, floor, projectiles };
  } catch (error) {
    for (const bitmap of [actors, floor])
      try {
        bitmap?.close();
      } catch {
        /* Preserve the asset failure while releasing all decoded inputs. */
      }
    throw error;
  }
}
