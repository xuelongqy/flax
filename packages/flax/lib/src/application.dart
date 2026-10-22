import 'dart:io';

import 'package:flutter/services.dart';

import 'directory_asset_bundle.dart';
import 'manifest.dart';
import 'network.dart';
import 'package.dart';
import 'prefixed_asset_bundle.dart';

/// A loaded application, reusable by an owning View or an explicit Session.
class FlaxApplication {
  const FlaxApplication._(
    this.source,
    this.assetBundle,
    this.sourceUrl,
    this.manifest,
  );

  final String source;
  final AssetBundle assetBundle;
  final String sourceUrl;
  final FlaxManifest? manifest;

  static Future<FlaxApplication> bundle(AssetBundle bundle) async {
    final manifest = await FlaxManifest.load(bundle);
    // Validate the resource index before executing application code.
    await AssetManifest.loadFromAssetBundle(bundle);
    return FlaxApplication._(
      await bundle.loadString(manifest.entry),
      bundle,
      'flax:${manifest.id}/${manifest.version}/${manifest.entry}',
      manifest,
    );
  }

  static Future<FlaxApplication> directory(Directory directory) =>
      bundle(FlaxDirectoryAssetBundle(directory));

  static Future<FlaxApplication> package(
    File file, {
    Directory? installationDirectory,
  }) async => directory(
    await FlaxPackage.install(
      file,
      installationDirectory: installationDirectory,
    ),
  );

  /// Script-only mode does not discover a neighboring manifest or resource folder.
  /// Resources default to assets/flax inside Flutter's rootBundle.
  static Future<FlaxApplication> file(
    File file, {
    AssetBundle? assetBundle,
  }) async => FlaxApplication._(
    await file.readAsString(),
    assetBundle ?? FlaxPrefixedAssetBundle(),
    file.absolute.uri.toString(),
    null,
  );

  /// Downloads once, then uses the same script reader or package installer.
  static Future<FlaxApplication> network({
    required Uri uri,
    required FlaxRemoteFormat format,
    Map<String, String> headers = const {},
    String? expectedSha256,
    FlaxDownloader? download,
    Directory? cacheDirectory,
    Directory? installationDirectory,
    AssetBundle? assetBundle,
    Future<void>? cancelled,
  }) async {
    if (format == FlaxRemoteFormat.package && assetBundle != null) {
      throw ArgumentError('Package resources come from the package itself');
    }
    final options = FlaxNetworkOptions(
      uri: uri,
      format: format,
      headers: headers,
      expectedSha256: expectedSha256,
      download: download,
      cacheDirectory: cacheDirectory,
      installationDirectory: installationDirectory,
    );
    final cancellation = FlaxLoadCancellation(cancelled);
    final downloaded = await downloadFlaxApplication(
      options,
      cancellation: cancellation,
    );
    late FlaxApplication application;
    try {
      cancellation.check();
      if (format == FlaxRemoteFormat.package) {
        application = await package(
          downloaded.file,
          installationDirectory: options.installationDirectory,
        );
      } else {
        final loaded = await file(downloaded.file, assetBundle: assetBundle);
        application = FlaxApplication._(
          loaded.source,
          loaded.assetBundle,
          Uri(
            scheme: uri.scheme,
            host: uri.host,
            port: uri.hasPort ? uri.port : null,
            path: uri.path,
          ).toString(),
          null,
        );
      }
    } finally {
      await downloaded.release();
    }
    cancellation.check();
    return application;
  }
}
