import 'dart:async';
import 'dart:convert';
import 'dart:io';

import 'package:flutter/services.dart';

import 'directory_asset_bundle.dart';
import 'manifest.dart';
import 'network.dart';
import 'package.dart';
import 'prefixed_asset_bundle.dart';
import 'asset_key.dart';
import 'runtime/modules.dart';

/// A loaded application, reusable by an owning View or an explicit Session.
class FlaxApplication {
  const FlaxApplication._(
    this.source,
    this.assetBundle,
    this.sourceUrl,
    this.manifest, {
    this.entryUri,
    this.loadModule,
    this.imports = const {},
  });

  final String source;
  final AssetBundle assetBundle;
  final String sourceUrl;
  final FlaxManifest? manifest;
  final Uri? entryUri;
  final FlaxModuleSourceLoader? loadModule;
  final Map<String, Uri> imports;

  static Future<FlaxApplication> bundle(
    AssetBundle bundle, {
    Map<String, Uri> imports = const {},
    FlaxModuleSourceLoader? loadModule,
    FlaxDownloader? download,
    Directory? cacheDirectory,
    bool sandbox = false,
  }) async {
    if (sandbox) {
      throw UnsupportedError('Flax sandbox is reserved and not implemented');
    }
    final manifest = await FlaxManifest.load(bundle);
    // Validate the resource index before executing application code.
    await AssetManifest.loadFromAssetBundle(bundle);
    final base = Uri(
      scheme: 'flax',
      host: 'application',
      pathSegments: [manifest.id, manifest.version, ''],
    );
    final entry = base.resolve(manifest.entry);
    Future<FlaxModuleSource> local(FlaxModuleRequest request) async {
      if (request.uri.scheme == 'http' || request.uri.scheme == 'https') {
        return loadRemoteModule(
          request,
          download: download,
          cacheDirectory: cacheDirectory,
        );
      }
      if (!request.uri.toString().startsWith(base.toString())) {
        throw const FormatException('Module escapes its application root');
      }
      final key = request.uri.path.substring(base.path.length);
      if (!isFlaxApplicationEntry(key) ||
          manifest.modules.isNotEmpty && !manifest.modules.containsKey(key)) {
        throw const FormatException('Undeclared application module');
      }
      return FlaxModuleSource(
        uri: request.uri,
        kind: manifest.modules[key] ?? _fileKind(key),
        bytes: Uint8List.sublistView(await bundle.load(key)),
      );
    }

    return FlaxApplication._(
      await bundle.loadString(manifest.entry),
      bundle,
      'flax:${manifest.id}/${manifest.version}/${manifest.entry}',
      manifest,
      entryUri: entry,
      loadModule: loadModule ?? local,
      imports: Map.unmodifiable(imports),
    );
  }

  static Future<FlaxApplication> directory(
    Directory directory, {
    Map<String, Uri> imports = const {},
    FlaxModuleSourceLoader? loadModule,
    FlaxDownloader? download,
    Directory? cacheDirectory,
    bool sandbox = false,
  }) => bundle(
    FlaxDirectoryAssetBundle(directory),
    imports: imports,
    loadModule: loadModule,
    download: download,
    cacheDirectory: cacheDirectory,
    sandbox: sandbox,
  );

  static Future<FlaxApplication> package(
    File file, {
    Directory? installationDirectory,
    Map<String, Uri> imports = const {},
    FlaxModuleSourceLoader? loadModule,
    FlaxDownloader? download,
    Directory? cacheDirectory,
    bool sandbox = false,
  }) async {
    if (sandbox) {
      throw UnsupportedError('Flax sandbox is reserved and not implemented');
    }
    return directory(
      await FlaxPackage.install(
        file,
        installationDirectory: installationDirectory,
      ),
      imports: imports,
      loadModule: loadModule,
      download: download,
      cacheDirectory: cacheDirectory,
    );
  }

  /// A file entry does not discover a neighboring manifest or resource folder.
  /// Resources default to assets/flax inside Flutter's rootBundle.
  static Future<FlaxApplication> file(
    File file, {
    AssetBundle? assetBundle,
    Map<String, Uri> imports = const {},
    FlaxModuleSourceLoader? loadModule,
    FlaxDownloader? download,
    Directory? cacheDirectory,
    bool sandbox = false,
  }) async {
    if (sandbox) {
      throw UnsupportedError('Flax sandbox is reserved and not implemented');
    }
    final resolved = File(await file.resolveSymbolicLinks());
    final root = resolved.parent.path;
    final entry = resolved.uri;
    Future<FlaxModuleSource> local(FlaxModuleRequest request) async {
      if (request.uri.scheme == 'http' || request.uri.scheme == 'https') {
        return loadRemoteModule(
          request,
          download: download,
          cacheDirectory: cacheDirectory,
        );
      }
      if (request.uri.scheme != 'file' || request.uri.host.isNotEmpty) {
        throw const FormatException('Unsupported local module URL');
      }
      final base = Directory(root).uri;
      if (!request.uri.path.startsWith(base.path)) {
        throw const FormatException('Module escapes its file root');
      }
      final key = request.uri.path.substring(base.path.length);
      if (!isFlaxApplicationEntry(key)) {
        throw const FormatException('Invalid module path');
      }
      return FlaxModuleSource(
        uri: request.uri,
        kind: _fileKind(key),
        bytes: Uint8List.sublistView(
          await FlaxDirectoryAssetBundle(Directory(root)).load(key),
        ),
      );
    }

    return FlaxApplication._(
      await file.readAsString(),
      assetBundle ?? FlaxPrefixedAssetBundle(),
      file.absolute.uri.toString(),
      null,
      entryUri: entry,
      loadModule: loadModule ?? local,
      imports: Map.unmodifiable(imports),
    );
  }

  /// Downloads an ESM entry or installs a business package.
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
    Map<String, Uri> imports = const {},
    FlaxModuleSourceLoader? loadModule,
    bool sandbox = false,
  }) async {
    if (sandbox) {
      throw UnsupportedError('Flax sandbox is reserved and not implemented');
    }
    if (format == FlaxRemoteFormat.package && assetBundle != null) {
      throw ArgumentError('Package resources come from the package itself');
    }
    if (format == FlaxRemoteFormat.javascript &&
        installationDirectory != null) {
      throw ArgumentError(
        'installationDirectory only applies to package format',
      );
    }
    if (format == FlaxRemoteFormat.javascript) {
      headers = Map.unmodifiable(headers);
      final source = await loadRemoteModule(
        FlaxModuleRequest(
          uri: uri,
          expectedKind: null,
          cancelled: cancelled ?? Completer<void>().future,
        ),
        headers: headers,
        expectedSha256: expectedSha256,
        download: download,
        cacheDirectory: cacheDirectory,
      );
      if (source.kind != FlaxModuleKind.javascript) {
        throw const FormatException(
          'A module application entry must be JavaScript',
        );
      }
      return FlaxApplication._(
        utf8.decode(source.bytes),
        assetBundle ?? FlaxPrefixedAssetBundle(),
        _diagnosticUrl(source.uri),
        null,
        entryUri: source.uri,
        imports: Map.unmodifiable(imports),
        loadModule:
            loadModule ??
            (request) => loadRemoteModule(
              request,
              headers: request.uri.origin == uri.origin ? headers : const {},
              download: download,
              cacheDirectory: cacheDirectory,
            ),
      );
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
      application = await package(
        downloaded.file,
        installationDirectory: options.installationDirectory,
        imports: imports,
        loadModule: loadModule,
        download: download,
        cacheDirectory: cacheDirectory,
      );
    } finally {
      await downloaded.release();
    }
    cancellation.check();
    return application;
  }

  /// Default HTTP module transport, also used by source-backed Sessions.
  static Future<FlaxModuleSource> loadRemoteModule(
    FlaxModuleRequest request, {
    Map<String, String> headers = const {},
    String? expectedSha256,
    FlaxDownloader? download,
    Directory? cacheDirectory,
  }) async {
    final cancellation = FlaxLoadCancellation(request.cancelled);
    final downloaded = await downloadFlaxApplication(
      FlaxNetworkOptions(
        uri: request.uri.removeFragment(),
        format: FlaxRemoteFormat.javascript,
        headers: {
          for (final header in headers.entries)
            if (header.key.toLowerCase() != 'accept') header.key: header.value,
          'accept': request.expectedKind == FlaxModuleKind.json
              ? 'application/json'
              : 'text/javascript, application/javascript, application/wasm',
        },
        expectedSha256: expectedSha256,
        download: download,
        cacheDirectory: cacheDirectory,
        modules: true,
      ),
      cancellation: cancellation,
    );
    try {
      cancellation.check();
      final mime = downloaded.contentType!
          .split(';')
          .first
          .trim()
          .toLowerCase();
      final kind = mime == 'application/wasm'
          ? FlaxModuleKind.wasm
          : mime == 'application/json' || mime.endsWith('+json')
          ? FlaxModuleKind.json
          : FlaxModuleKind.javascript;
      if (request.expectedKind == FlaxModuleKind.json &&
              kind != FlaxModuleKind.json ||
          request.expectedKind != FlaxModuleKind.json &&
              kind == FlaxModuleKind.json) {
        throw const FormatException(
          'Module Content-Type does not match import attributes',
        );
      }
      final uri = request.uri.hasFragment
          ? downloaded.finalUri!.replace(fragment: request.uri.fragment)
          : downloaded.finalUri!;
      final bytes = await downloaded.file.readAsBytes();
      cancellation.check();
      return FlaxModuleSource(uri: uri, kind: kind, bytes: bytes);
    } finally {
      await downloaded.release();
    }
  }
}

String _diagnosticUrl(Uri uri) => Uri(
  scheme: uri.scheme,
  host: uri.host,
  port: uri.hasPort ? uri.port : null,
  path: uri.path,
).toString();

FlaxModuleKind _fileKind(String path) {
  final extension = path.split('.').last.toLowerCase();
  return switch (extension) {
    'js' || 'mjs' => FlaxModuleKind.javascript,
    'json' => FlaxModuleKind.json,
    'wasm' => FlaxModuleKind.wasm,
    _ => throw const FormatException('Unsupported module file type'),
  };
}
