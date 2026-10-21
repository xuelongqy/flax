import 'dart:convert';
import 'dart:io';

import 'package:flax/flax.dart';
import 'package:flutter/services.dart';

/// Copies demonstration resources, not a production update installer.
Future<FlaxDirectoryAssetBundle> prepareSandboxAssets(
  Directory directory, {
  required AssetBundle source,
}) async {
  final metadata = await FlaxManifest.load(source);
  final manifest = await AssetManifest.loadFromAssetBundle(source);
  final keys = <String>{'flax.json', metadata.entry, 'AssetManifest.bin'};
  for (final key in manifest.listAssets()) {
    keys.add(key);
    for (final variant in manifest.getAssetVariants(key)!) {
      keys.add(variant.key);
    }
  }
  if (await directory.exists() &&
      !await directory.list(followLinks: false).isEmpty) {
    final previous = await FlaxManifest.load(
      FlaxDirectoryAssetBundle(directory),
    );
    if (previous.id != metadata.id) {
      throw StateError(
        'Sandbox directory belongs to another Flax application.',
      );
    }
  }
  final resources = Directory('${directory.path}/assets');
  final type = await FileSystemEntity.type(resources.path, followLinks: false);
  if (type == FileSystemEntityType.link) {
    await Link(resources.path).delete();
  } else if (type == FileSystemEntityType.directory) {
    await resources.delete(recursive: true);
  } else if (type != FileSystemEntityType.notFound) {
    throw StateError('Sandbox assets path must be a directory.');
  }
  for (final key in keys) {
    final file = File('${directory.path}/$key');
    await file.parent.create(recursive: true);
    final data = await source.load(key);
    await file.writeAsBytes(
      data.buffer.asUint8List(data.offsetInBytes, data.lengthInBytes),
    );
  }
  await File('${directory.path}/assets/data/example.json').writeAsString(
    jsonEncode({'message': 'JSON loaded from the sandbox asset bundle'}),
  );
  return FlaxDirectoryAssetBundle(directory);
}
