part of '../../bindings.dart';

class _FetchRequest {
  bool isCancelled = false;
  final _cancelPending = <void Function()>{};
  HttpClientRequest? request;
  HttpClientResponse? response;
  StreamIterator<List<int>>? responseIterator;
  void abort() {
    if (isCancelled) return;
    isCancelled = true;
    request?.abort(StateError('Fetch request cancelled'));
    final iterator = responseIterator;
    if (iterator != null) {
      iterator.cancel().ignore();
    } else {
      // StreamIterator.cancel does not subscribe before its first moveNext.
      response?.listen((_) {}).cancel().ignore();
    }
    for (final cancel in _cancelPending.toList()) {
      cancel();
    }
    _cancelPending.clear();
  }

  Future<T> wait<T>(Future<T> future) {
    final result = Completer<T>();
    void cancel() {
      if (!result.isCompleted) {
        result.completeError(StateError('Fetch request cancelled'));
      }
    }

    if (isCancelled) {
      cancel();
    } else {
      _cancelPending.add(cancel);
    }
    future.then(
      (value) {
        _cancelPending.remove(cancel);
        if (!result.isCompleted) result.complete(value);
      },
      onError: (Object error, StackTrace stack) {
        _cancelPending.remove(cancel);
        if (!result.isCompleted) result.completeError(error, stack);
      },
    );
    return result.future;
  }
}

class _FetchHost {
  _FetchHost(this.context, this.baseUrl);
  final FlaxHostContext context;
  final String? baseUrl;
  HttpClient? _client;
  final _requests = <int, _FetchRequest>{};
  final _pending = <int>{};
  FlaxJsObject? _state;
  bool _closed = false;

  FlaxJsValue call(List<FlaxJsValue> args) {
    final operation = (args[1] as FlaxJsString).value;
    if (operation == 'baseUrl') {
      return baseUrl == null ? const FlaxJsUndefined() : FlaxJsString(baseUrl!);
    }
    if (operation == 'abort') {
      _requests.remove((args[2] as FlaxJsNumber).value.toInt())?.abort();
      return const FlaxJsUndefined();
    }
    if (_closed || context.isClosing) throw StateError('FlaxSessionClosed');
    final id = (args[2] as FlaxJsNumber).value.toInt();
    final requestId = (args[3] as FlaxJsNumber).value.toInt();
    if (!_pending.add(id)) throw ArgumentError('Duplicate Fetch operation');
    try {
      Future<Object?> result;
      switch (operation) {
        case 'open':
          final settings = jsonDecode(
            (args[4] as FlaxJsString).value,
          ) as Map<String, Object?>;
          if (_requests.containsKey(requestId)) {
            throw ArgumentError('Duplicate request');
          }
          final record = _FetchRequest();
          _requests[requestId] = record;
          result = _open(record, settings);
        case 'write':
          final record = _record(requestId);
          final bytes = context.runtime.readBytes(args[4] as FlaxJsObject);
          result = record.wait(_write(record, bytes));
        case 'headers':
          final record = _record(requestId);
          result = record.wait(_headers(record));
        case 'read':
          final record = _record(requestId);
          result = record.wait(_read(requestId, record));
        default:
          throw ArgumentError('Unknown Fetch operation: $operation');
      }
      result.then(
        (value) => _settle(id, true, value),
        onError: (Object error, StackTrace stack) =>
            _settle(id, false, error.toString()),
      );
    } catch (error) {
      _settle(id, false, error.toString());
    }
    return const FlaxJsUndefined();
  }

  _FetchRequest _record(int id) {
    final record = _requests[id];
    if (record == null || record.isCancelled) {
      throw StateError('Fetch request cancelled');
    }
    return record;
  }

  Future<Object?> _open(
    _FetchRequest record,
    Map<String, Object?> settings,
  ) async {
    final url = Uri.parse(settings['url'] as String);
    if (!['http', 'https'].contains(url.scheme)) {
      throw ArgumentError('Unsupported URL scheme');
    }
    final opening = (_client ??= HttpClient()).openUrl(
      settings['method'] as String,
      url,
    );
    // openUrl itself has no per-request cancellation API. Abort as soon as it returns.
    opening.then((request) {
      record.request = request;
      if (record.isCancelled) request.abort();
    }, onError: (Object error) {});
    final request = await record.wait(opening);
    request.followRedirects = false;
    request.contentLength = (settings['length'] as num).toInt();
    for (final pair
        in (settings['headers'] as List<Object?>).cast<List<Object?>>()) {
      request.headers.add(pair[0] as String, pair[1] as String);
    }
    return null;
  }

  Future<Object?> _write(_FetchRequest record, Uint8List bytes) async {
    record.request!.add(bytes);
    await record.request!.flush();
    return null;
  }

  Future<Object?> _headers(_FetchRequest record) async {
    final response = await record.request!.close();
    if (record.isCancelled) {
      await response.listen((_) {}).cancel();
      throw StateError('Fetch request cancelled');
    }
    record.response = response;
    final headers = <List<String>>[];
    response.headers.forEach((name, values) {
      for (final value in values) {
        headers.add([name, value]);
      }
    });
    return jsonEncode({
      'status': response.statusCode,
      'statusText': response.reasonPhrase,
      'headers': headers,
    });
  }

  Future<Object?> _read(int id, _FetchRequest record) async {
    final response = record.response;
    if (response == null) throw StateError('Response headers have not arrived');
    final iterator = record.responseIterator ??= StreamIterator(response);
    while (await iterator.moveNext()) {
      if (iterator.current.isNotEmpty) {
        return Uint8List.fromList(iterator.current);
      }
    }
    _requests.remove(id);
    await iterator.cancel();
    return null;
  }

  void _settle(int id, bool ok, Object? value) {
    if (!_pending.remove(id) || !context.isActive) return;
    context.enqueue(() {
      // Close must win over a completed transport result still waiting for JS.
      if (_closed) return;
      final result = switch (value) {
        Uint8List() => context.runtime.createArrayBuffer(value),
        String() => FlaxJsString(value),
        null => const FlaxJsNull(),
        _ => throw StateError('Invalid Fetch result'),
      };
      try {
        _call('settle', [
          FlaxJsNumber(id.toDouble()),
          FlaxJsBoolean(ok),
          result,
        ]);
      } finally {
        if (result is FlaxJsObject) result.release();
      }
    });
  }

  void _call(String name, List<FlaxJsValue> args) {
    final state = _state;
    if (state == null) return;
    final function = state.getProperty(name) as FlaxJsFunction;
    try {
      final result = function.call(args, thisValue: state);
      if (result is FlaxJsObject) result.release();
    } finally {
      function.release();
    }
  }

  void close() {
    if (_closed) return;
    _closed = true;
    for (final record in _requests.values) {
      record.abort();
    }
    _requests.clear();
    _pending.clear();
    _client?.close(force: true);
    _client = null;
  }

  void dispose() {
    close();
    _state?.release();
    _state = null;
  }
}
