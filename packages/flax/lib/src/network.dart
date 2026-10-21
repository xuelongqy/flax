import 'dart:async';
import 'dart:convert';
import 'dart:io';
import 'dart:isolate';

import 'package:crypto/crypto.dart';
import 'package:path/path.dart' as p;
import 'package:path_provider/path_provider.dart';

/// The response format is explicit because CDN URLs need not have an extension.
enum FlaxRemoteFormat { javascript, package }

/// Adapts a host HTTP stack; Flax owns caching, byte validation and file writes.
typedef FlaxDownloader = Future<FlaxDownloadResponse> Function(
  FlaxDownloadRequest request,
);

class FlaxDownloadRequest {
  FlaxDownloadRequest._(this.uri, this.headers, this.cancelled);
  final Uri uri;
  final Map<String, String> headers;

  /// Completes when the owning View is removed or its input changes.
  final Future<void> cancelled;
}

class FlaxDownloadResponse {
  FlaxDownloadResponse({
    required this.statusCode,
    required this.body,
    Map<String, String> headers = const {},
    this.onClose,
  }) : headers = Map.unmodifiable({
         for (final entry in headers.entries)
           entry.key.toLowerCase(): entry.value,
       });

  final int statusCode;

  /// Artifact bytes, after transport decompression. Omit content-length if the
  /// HTTP adapter cannot provide the length of these decoded bytes.
  final Stream<List<int>> body;
  final Map<String, String> headers;
  final FutureOr<void> Function()? onClose;
  StreamIterator<List<int>>? _reader;
  Future<void>? _closed;
  Future<void> close() => _closed ??= _close();

  Future<void> _close() async {
    // Adapter shutdown and subscription cancellation can release each other.
    await Future.wait<void>([
      Future<void>.sync(() => onClose?.call()),
      Future<void>.sync(
        () =>
            _reader?.cancel() ??
            body.listen(null, onError: (Object _, StackTrace _) {}).cancel(),
      ),
    ], eagerError: true);
  }
}

/// Internal shared configuration for the Widget and explicit application loader.
class FlaxNetworkOptions {
  FlaxNetworkOptions({
    required this.uri,
    required this.format,
    Map<String, String> headers = const {},
    String? expectedSha256,
    this.download,
    Directory? cacheDirectory,
    Directory? installationDirectory,
  }) : cacheDirectory = cacheDirectory?.absolute,
       installationDirectory = installationDirectory?.absolute,
       expectedSha256 = expectedSha256?.toLowerCase(),
       headers = _headers(headers) {
    if (!{'http', 'https'}.contains(uri.scheme) ||
        uri.host.isEmpty ||
        uri.userInfo.isNotEmpty ||
        uri.hasFragment) {
      throw ArgumentError(
        'Expected an HTTP(S) URL without credentials or fragment',
        'uri',
      );
    }
    if (this.expectedSha256 case final digest?) {
      if (!_digestPattern.hasMatch(digest)) {
        throw ArgumentError.value(
          expectedSha256,
          'expectedSha256',
          'Expected 64 hexadecimal characters',
        );
      }
    }
    if (format == FlaxRemoteFormat.javascript &&
        installationDirectory != null) {
      throw ArgumentError(
        'installationDirectory only applies to package format',
      );
    }
  }

  final Uri uri;
  final FlaxRemoteFormat format;
  final Map<String, String> headers;
  final String? expectedSha256;
  final FlaxDownloader? download;
  final Directory? cacheDirectory;
  final Directory? installationDirectory;

  String get requestKey => sha256
      .convert(
        utf8.encode(
          jsonEncode([uri.toString(), format.name, headers, expectedSha256]),
        ),
      )
      .toString();

  Object get identity => (
    requestKey,
    download,
    cacheDirectory?.absolute.path,
    installationDirectory?.absolute.path,
  );
}

final _digestPattern = RegExp(r'^[a-f0-9]{64}$');
const _cacheFormatVersion = 2;
const _timeout = Duration(seconds: 30);
const _maxBytes = 512 * 1024 * 1024;

Map<String, String> _headers(Map<String, String> supplied) {
  final result = <String, String>{};
  for (final entry in supplied.entries) {
    final name = entry.key.toLowerCase();
    if (!RegExp(r"^[!#$%&'*+.^_`|~0-9a-z-]+$").hasMatch(name) ||
        RegExp(r'[\r\n\x00]').hasMatch(entry.value) ||
        result.containsKey(name) ||
        {
          'if-none-match',
          'if-modified-since',
          'range',
          'if-range',
        }.contains(name)) {
      throw ArgumentError('Invalid or loader-owned request header: $name');
    }
    result[name] = entry.value;
  }
  result.putIfAbsent('user-agent', () => 'Flax');
  result.putIfAbsent('accept-encoding', () => 'identity');
  final keys = result.keys.toList()..sort();
  return Map.unmodifiable({for (final key in keys) key: result[key]!});
}

class FlaxDownloadedFile {
  FlaxDownloadedFile(this.file, [this.temporaryDirectory]);
  final File file;
  final Directory? temporaryDirectory;
  Future<void> release() async {
    if (temporaryDirectory case final directory?) {
      await directory.delete(recursive: true);
    }
  }
}

/// A deliberately revalidating artifact cache, not an HTTP freshness cache.
Future<FlaxDownloadedFile> downloadFlaxApplication(
  FlaxNetworkOptions options, {
  required FlaxLoadCancellation cancellation,
}) async {
  // Observe a completed signal before any filesystem or plugin work.
  await Future<void>.value();
  cancellation.check();
  final root =
      options.cacheDirectory ??
      Directory(
        p.join(
          (await getApplicationSupportDirectory()).path,
          'flax',
          'downloads',
        ),
      );
  final requests = Directory(p.join(root.path, 'requests'));
  final blobs = Directory(p.join(root.path, 'blobs'));
  for (final directory in [root, requests, blobs]) {
    cancellation.check();
    await directory.create(recursive: true);
    if (await FileSystemEntity.type(directory.path, followLinks: false) !=
        FileSystemEntityType.directory) {
      throw FileSystemException(
        'Download cache must use real directories',
        directory.path,
      );
    }
  }
  final record = File(p.join(requests.path, '${options.requestKey}.json'));
  cancellation.check();
  final cached = await _readCache(record, blobs, options.expectedSha256);
  cancellation.check();
  final headers = Map<String, String>.of(options.headers);
  if (cached?.etag case final etag?) headers['if-none-match'] = etag;
  final request = FlaxDownloadRequest._(
    options.uri,
    Map.unmodifiable(headers),
    cancellation.future,
  );
  final pending = Future<FlaxDownloadResponse>.sync(
    () => (options.download ?? _download)(request),
  );
  // An adapter may finish after unmounting; it must still release its response.
  unawaited(
    pending
        .then<void>((response) async {
          if (cancellation.isCancelled) await response.close();
        })
        .catchError((Object _, StackTrace _) {}),
  );
  final response = await cancellation
      .wait(pending)
      .timeout(
        _timeout,
        onTimeout: () {
          cancellation.cancel();
          throw TimeoutException('Artifact response timed out', _timeout);
        },
      );
  Directory? staging;
  try {
    cancellation.check();
    if (response.statusCode == HttpStatus.notModified) {
      if (cached == null || !headers.containsKey('if-none-match')) {
        throw const HttpException('304 without a validated cached artifact');
      }
      // A server can revoke caching even when it returns a conditional hit.
      if (_noStore(response.headers)) {
        staging = await root.createTemp('.download-');
        final copy = await cached.file.copy(p.join(staging.path, 'artifact'));
        await _removeRecord(record);
        final result = FlaxDownloadedFile(copy, staging);
        await response.close();
        staging = null;
        return result;
      }
      final etag = _etag(response.headers['etag']);
      if (etag != null && etag != cached.etag) {
        staging = await root.createTemp('.download-');
        await _writeRecord(
          record,
          staging,
          digest: p.basename(cached.file.path),
          size: await cached.file.length(),
          etag: etag,
        );
      }
      return FlaxDownloadedFile(cached.file);
    }
    if (response.statusCode != HttpStatus.ok) {
      throw HttpException(
        'Artifact request failed (HTTP ${response.statusCode})',
      );
    }
    staging = await root.createTemp('.download-');
    final file = File(p.join(staging.path, 'artifact'));
    final (digest, size) = await _writeResponse(file, response, cancellation);
    if (options.expectedSha256 case final expected?) {
      if (digest != expected) {
        throw const FormatException('Artifact SHA-256 mismatch');
      }
    }
    cancellation.check();
    if (_noStore(response.headers)) {
      await _removeRecord(record);
      final result = FlaxDownloadedFile(file, staging);
      await response.close();
      staging = null;
      return result;
    }
    final blob = await file.rename(p.join(blobs.path, digest));
    await _writeRecord(
      record,
      staging,
      digest: digest,
      size: size,
      etag: _etag(response.headers['etag']),
    );
    return FlaxDownloadedFile(blob);
  } finally {
    try {
      await response.close();
    } finally {
      if (staging != null) await staging.delete(recursive: true);
    }
  }
}

Future<void> _writeRecord(
  File record,
  Directory staging, {
  required String digest,
  required int size,
  String? etag,
}) async {
  final metadata = File(p.join(staging.path, 'record.json'));
  await metadata.writeAsString(
    jsonEncode({
      'formatVersion': _cacheFormatVersion,
      'sha256': digest,
      'size': size,
      'etag': etag,
    }),
    flush: true,
  );
  await metadata.rename(record.path);
}

bool _noStore(Map<String, String> headers) =>
    (headers['cache-control'] ?? '')
        .split(',')
        .any((v) => v.trim().toLowerCase() == 'no-store') ||
    (headers['vary'] ?? '').split(',').any((v) => v.trim() == '*');

String? _etag(String? value) =>
    value != null &&
        value.isNotEmpty &&
        value.length <= 4096 &&
        !RegExp(r'[\r\n\x00]').hasMatch(value)
    ? value
    : null;

Future<void> _removeRecord(File record) async {
  try {
    await record.delete();
  } on PathNotFoundException {
    // Concurrent revalidations may have removed the same record.
  }
}

Future<({File file, String? etag})?> _readCache(
  File record,
  Directory blobs,
  String? expected,
) async {
  try {
    if (await FileSystemEntity.type(record.path, followLinks: false) !=
        FileSystemEntityType.file) {
      return null;
    }
    final value = jsonDecode(await record.readAsString());
    if (value is! Map ||
        value['formatVersion'] != _cacheFormatVersion ||
        value['sha256'] is! String ||
        !_digestPattern.hasMatch(value['sha256'] as String) ||
        value['size'] is! int ||
        (value['size'] as int) < 0 ||
        (value['size'] as int) > _maxBytes) {
      return null;
    }
    final etag = value['etag'] is String
        ? _etag(value['etag'] as String)
        : null;
    if (etag == null) return null;
    final digest = value['sha256'] as String;
    if (expected != null && expected != digest) return null;
    final file = File(p.join(blobs.path, digest));
    if (await FileSystemEntity.type(file.path, followLinks: false) !=
            FileSystemEntityType.file ||
        await file.length() != value['size']) {
      return null;
    }
    // Recheck cached bytes before sending a validator; a 304 carries no payload.
    if (await Isolate.run(() => _hashFile(file.path)) != digest) return null;
    return (file: file, etag: etag);
  } on FileSystemException {
    return null;
  } on FormatException {
    return null;
  }
}

Future<String> _hashFile(String path) async =>
    (await sha256.bind(File(path).openRead()).first).toString();

Future<(String, int)> _writeResponse(
  File file,
  FlaxDownloadResponse response,
  FlaxLoadCancellation cancellation,
) async {
  final lengthHeader = response.headers['content-length'];
  final length = lengthHeader == null ? null : int.tryParse(lengthHeader);
  if (lengthHeader != null &&
      (length == null || length < 0 || length > _maxBytes)) {
    throw const FormatException('Invalid artifact content-length');
  }
  final output = await file.open(mode: FileMode.write);
  final digest = _DigestSink();
  final hash = sha256.startChunkedConversion(digest);
  final input = response._reader ??= StreamIterator(
    response.body.timeout(_timeout),
  );
  var size = 0;
  // One cancellation listener per response, rather than one retained Future per chunk.
  unawaited(
    cancellation.future
        .then((_) => response.close())
        .catchError((Object _, StackTrace _) {}),
  );
  try {
    while (await input.moveNext()) {
      cancellation.check();
      final chunk = input.current;
      size += chunk.length;
      if (size > _maxBytes || (length != null && size > length)) {
        throw const FormatException('Artifact exceeds its byte limit');
      }
      hash.add(chunk);
      await output.writeFrom(chunk);
    }
    cancellation.check();
    if (length != null && size != length) {
      throw const FormatException('Incomplete artifact download');
    }
    hash.close();
    await output.flush();
    return (digest.value.toString(), size);
  } finally {
    await output.close();
  }
}

class _DigestSink implements Sink<Digest> {
  late Digest value;
  @override
  void add(Digest data) => value = data;
  @override
  void close() {}
}

class FlaxLoadCancellation {
  FlaxLoadCancellation(Future<void>? cancelled) {
    cancelled?.then(
      (_) => cancel(),
      onError: (Object _, StackTrace _) => cancel(),
    );
  }
  final _signal = Completer<void>();
  Future<void> get future => _signal.future;
  bool isCancelled = false;
  void cancel() {
    if (isCancelled) return;
    isCancelled = true;
    _signal.complete();
  }

  void check() {
    if (isCancelled) throw StateError('Application download cancelled');
  }

  Future<T> wait<T>(Future<T> work) => Future.any([
    work,
    future.then<T>((_) => throw StateError('Application download cancelled')),
  ]);
}

Future<FlaxDownloadResponse> _download(FlaxDownloadRequest request) async {
  var uri = request.uri;
  final client = HttpClient()..connectionTimeout = _timeout;
  var closed = false;
  void close() {
    if (closed) return;
    closed = true;
    client.close(force: true);
  }

  unawaited(request.cancelled.then((_) => close()));
  try {
    for (var redirects = 0; redirects <= 5; redirects++) {
      final outgoing = await client.getUrl(uri).timeout(_timeout);
      outgoing.followRedirects = false;
      for (final header in request.headers.entries) {
        if (redirects == 0 || header.key != 'if-none-match') {
          outgoing.headers.set(header.key, header.value);
        }
      }
      final incoming = await outgoing.close().timeout(_timeout);
      if ({301, 302, 303, 307, 308}.contains(incoming.statusCode)) {
        final location = incoming.headers.value(HttpHeaders.locationHeader);
        if (location == null) {
          throw const HttpException('Redirect without Location');
        }
        final next = uri.resolve(location);
        if (next.origin != request.uri.origin ||
            next.userInfo.isNotEmpty ||
            next.hasFragment) {
          throw const HttpException(
            'Default downloader only follows same-origin redirects',
          );
        }
        await incoming.drain<void>().timeout(_timeout);
        uri = next;
        continue;
      }
      final headers = <String, String>{};
      incoming.headers.forEach(
        (key, values) => headers[key] = values.join(','),
      );
      if (redirects > 0) {
        if (incoming.statusCode == HttpStatus.notModified) {
          throw const HttpException('304 after an unconditional redirect');
        }
        // Validators belong to the final URI, not the original redirect URL.
        headers.remove('etag');
      }
      if (incoming.compressionState ==
          HttpClientResponseCompressionState.decompressed) {
        headers.remove('content-length');
      }
      return FlaxDownloadResponse(
        statusCode: incoming.statusCode,
        headers: headers,
        body: incoming,
        onClose: close,
      );
    }
    throw const HttpException('Too many artifact redirects');
  } catch (_) {
    close();
    rethrow;
  }
}
