import '@flax/flutter/services/_bindings/sdk_services_AssetBundle';
import type { AssetBundle } from '@flax/flutter/services/_bindings/sdk_services_AssetBundle';
import '@flax/core/navigation/_bindings/flutter_FlaxFont';
import type { FlaxFont } from '@flax/core/navigation/_bindings/flutter_FlaxFont';

/** Returns this session's native Flutter resource bundle, without a BuildContext. */
export function getAssetBundle(): AssetBundle {
  const host = globalThis as typeof globalThis & {
    __flaxAssetBundle?: () => AssetBundle;
  };
  if (!host.__flaxAssetBundle)
    throw new Error('A Flax session is required to access application assets');
  return host.__flaxAssetBundle();
}

/** A module registers its declared font when imported, before widgets are constructed. */
export function registerFont(options: { manifest: string; name: string }): FlaxFont {
  const host = globalThis as typeof globalThis & {
    __flaxRegisterFont?: (manifest: string, name: string) => FlaxFont;
  };
  if (!host.__flaxRegisterFont)
    throw new Error('A Flax session is required to register module fonts');
  if (typeof options.manifest !== 'string' || typeof options.name !== 'string')
    throw new TypeError('Expected a module font manifest and name');
  return host.__flaxRegisterFont(options.manifest, options.name);
}
