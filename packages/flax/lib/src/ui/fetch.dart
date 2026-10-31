part of '../../bindings.dart';

class _FetchRequest {
  bool isCancelled = false;
  bool finished = false;
  final _cancelPending = <void Function()>{};
  HttpClientRequest? request;
  HttpClientResponse? response;
  StreamIterator<List<int>>? responseIterator;
  FlaxPermissionLease? permission;
  Object? cancellationError;
  void abort([Object? error]) {
    if (isCancelled) return;
    isCancelled = true;
    cancellationError = error ?? StateError('Fetch request cancelled');
    permission?.close();
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
        result.completeError(
          cancellationError ?? StateError('Fetch request cancelled'),
        );
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
  _FetchHost(this.context, this.baseUrl, {this.onSettled, this.observeNetwork});
  // Worker brokers retain transport and permission objects in the root isolate.
  final void Function(int, bool, Object?)? onSettled;
  final void Function(Uri)? observeNetwork;
  final FlaxHostContext context;
  final String? baseUrl;
  HttpClient? _client;
  final _requests = <int, _FetchRequest>{};
  final _pending = <int>{};
  final _pendingRecords = <int, _FetchRequest>{};
  FlaxJsObject? _state;
  bool _closed = false;

  FlaxJsValue call(List<FlaxJsValue> args) {
    final operation = (args[1] as FlaxJsString).value;
    if (operation == 'baseUrl') {
      return baseUrl == null ? const FlaxJsUndefined() : FlaxJsString(baseUrl!);
    }
    if (operation == 'abort') {
      dispatch(operation, 0, (args[2] as FlaxJsNumber).value.toInt(), null);
      return const FlaxJsUndefined();
    }
    final input = switch (operation) {
      'open' => jsonDecode((args[4] as FlaxJsString).value),
      'write' => context.runtime.readBytes(args[4] as FlaxJsObject),
      _ => null,
    };
    dispatch(
      operation,
      (args[2] as FlaxJsNumber).value.toInt(),
      (args[3] as FlaxJsNumber).value.toInt(),
      input,
    );
    return const FlaxJsUndefined();
  }

  // Both JS admission and Worker messages enter the same transport implementation.
  void dispatch(String operation, int id, int requestId, Object? input) {
    if (operation == 'abort') {
      if (context case final _WorkerHostContext host) {
        host.fetch(host.id, operation, requestId, null).ignore();
      } else {
        _requests.remove(requestId)?.abort();
      }
      return;
    }
    if (_closed || context.isClosing) throw StateError('FlaxSessionClosed');
    if (!_pending.add(id)) throw ArgumentError('Duplicate Fetch operation');
    try {
      Future<Object?> result;
      if (context case final _WorkerHostContext host) {
        result = host.fetch(host.id, operation, requestId, input);
      } else {
        switch (operation) {
          case 'open':
            if (_requests.containsKey(requestId)) {
              throw ArgumentError('Duplicate request');
            }
            final record = _FetchRequest();
            _requests[requestId] = record;
            result = _open(record, (input as Map).cast<String, Object?>());
          case 'write':
            final record = _record(requestId);
            result = record.wait(_write(record, input as Uint8List));
          case 'headers':
            final record = _record(requestId);
            result = record.wait(_headers(record));
          case 'read':
            final record = _record(requestId);
            result = record.wait(_read(requestId, record));
          default:
            throw ArgumentError('Unknown Fetch operation: $operation');
        }
      }
      final record = _requests[requestId];
      if (record != null) _pendingRecords[id] = record;
      result.then(
        (value) => _settle(id, true, value),
        onError: (Object error, StackTrace stack) => _settle(
          id,
          false,
          error is FlaxPermissionException ? error.toJson() : error.toString(),
        ),
      );
    } catch (error) {
      _settle(
        id,
        false,
        error is FlaxPermissionException ? error.toJson() : error.toString(),
      );
    }
  }

  _FetchRequest _record(int id) {
    final record = _requests[id];
    if (record == null || record.isCancelled) {
      throw record?.cancellationError ?? StateError('Fetch request cancelled');
    }
    record.permission?.requireActive();
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
    final permissions = context.permissions;
    if (permissions == null) {
      throw const FlaxPermissionException(
        permission: 'flax.network',
        operation: 'fetch',
        reason: 'notDeclared',
      );
    }
    final lease = record.permission = permissions.network(url);
    observeNetwork?.call(url);
    lease.onRevoke(
      () => record.abort(
        const FlaxPermissionException(
          permission: 'flax.network',
          operation: 'fetch',
          reason: 'revoked',
        ),
      ),
    );
    for (final pair in (settings['headers'] as List).cast<List<Object?>>()) {
      if ((pair[0] as String).toLowerCase() == 'host') {
        FlaxPermissionContext.checkHostHeader(url, pair[1] as String);
      }
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
    lease.requireActive();
    request.followRedirects = false;
    request.contentLength = (settings['length'] as num).toInt();
    for (final pair
        in (settings['headers'] as List<Object?>).cast<List<Object?>>()) {
      request.headers.add(pair[0] as String, pair[1] as String);
    }
    return null;
  }

  Future<Object?> _write(_FetchRequest record, Uint8List bytes) async {
    record.permission?.requireActive();
    record.request!.add(bytes);
    await record.request!.flush();
    return null;
  }

  Future<Object?> _headers(_FetchRequest record) async {
    record.permission?.requireActive();
    final response = await record.request!.close();
    if (record.isCancelled) {
      await response.listen((_) {}).cancel();
      throw record.cancellationError ?? StateError('Fetch request cancelled');
    }
    record.permission?.requireActive();
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
      record.permission?.requireActive();
      if (iterator.current.isNotEmpty) {
        return Uint8List.fromList(iterator.current);
      }
    }
    _requests.remove(id);
    record.finished = true;
    await iterator.cancel();
    return null;
  }

  void _settle(int id, bool ok, Object? value) {
    final record = _pendingRecords.remove(id);
    if (!_pending.remove(id) || !context.isActive) return;
    context.enqueue(() {
      // Close must win over a completed transport result still waiting for JS.
      if (_closed) return;
      var deliveryOk = ok;
      var delivery = value;
      try {
        record?.permission?.requireActive();
      } on FlaxPermissionException catch (error) {
        deliveryOk = false;
        delivery = error.toJson();
      }
      if (onSettled case final settle?) {
        try {
          settle(id, deliveryOk, delivery);
        } finally {
          if (record?.finished == true) record?.permission?.close();
        }
        return;
      }
      final result = switch (delivery) {
        Uint8List() => context.runtime.createArrayBuffer(delivery),
        String() => FlaxJsString(delivery),
        Map<String, Object?>() => context.runtime.evaluate(
          '(${jsonEncode(delivery)})',
        ),
        null => const FlaxJsNull(),
        _ => throw StateError('Invalid Fetch result'),
      };
      try {
        _call('settle', [
          FlaxJsNumber(id.toDouble()),
          FlaxJsBoolean(deliveryOk),
          result,
        ]);
      } finally {
        if (result is FlaxJsObject) result.release();
        if (record?.finished == true) record?.permission?.close();
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
    _pendingRecords.clear();
    _client?.close(force: true);
    _client = null;
  }

  void dispose() {
    close();
    _state?.release();
    _state = null;
  }
}
