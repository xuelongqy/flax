import '@flax/flutter/services/_bindings/sdk_services_AssetBundle';
import type { AssetBundle } from '@flax/flutter/services/_bindings/sdk_services_AssetBundle';

/** Returns this session's native Flutter resource bundle, without a BuildContext. */
export function getAssetBundle(): AssetBundle {
  const host = globalThis as typeof globalThis & {
    __flaxAssetBundle?: () => AssetBundle;
  };
  if (!host.__flaxAssetBundle)
    throw new Error('A Flax session is required to access application assets');
  return host.__flaxAssetBundle();
}
