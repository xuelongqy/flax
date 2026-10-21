bool isFlaxAssetKey(String key) =>
    key.isNotEmpty &&
    !key.contains('\\') &&
    !key.contains(':') &&
    !key.contains('\u0000') &&
    !key.split('/').any((part) => part.isEmpty || part == '.' || part == '..');

bool isFlaxApplicationEntry(String key) {
  final root = key.split('/').first.toLowerCase();
  return isFlaxAssetKey(key) &&
      root != 'flax.json' &&
      root != 'flax.assets.json' &&
      root != 'flax.files.json' &&
      root != '.flax-install.json' &&
      root != 'assets' &&
      !root.startsWith('assetmanifest.');
}
