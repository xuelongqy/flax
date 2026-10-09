import 'dart:async';

import 'package:flutter/widgets.dart';
export 'package:flutter/widgets.dart' show BuildContext;

typedef ContextStreamRecord = ({
  BuildContext context,
  List<BuildContext?> siblings,
});
typedef ContextStreamPair = (BuildContext?, {ContextStreamRecord nested});
typedef ContextStreamCallbackRecord = ({
  BuildContext context,
  BuildContext? Function() current,
});

class ContextStreams {
  ContextStreams();
  Stream<BuildContext?> Function()? retained;
  StreamController<BuildContext?>? controller;
  WeakReference<BuildContext>? observedWeak;

  Stream<BuildContext?> stream(Stream<BuildContext?> Function() source) =>
      source();
  Stream<BuildContext> strict(Stream<BuildContext> Function() source) =>
      source();
  Stream<List<BuildContext?>> lists(
    Stream<List<BuildContext?>> Function() source,
  ) => source();
  Stream<ContextStreamRecord> records(
    Stream<ContextStreamRecord> Function() source,
  ) => source();
  Stream<ContextStreamPair> pairs(
    Stream<ContextStreamPair> Function() source,
  ) => source();
  Stream<ContextStreamCallbackRecord> callbackRecords(
    Stream<ContextStreamCallbackRecord> Function() source,
  ) => source();
  Future<Stream<BuildContext?>> future(
    Future<Stream<BuildContext?>> Function() source,
  ) => source();
  FutureOr<Stream<BuildContext?>> futureOr(
    FutureOr<Stream<BuildContext?>> Function() source,
  ) => source();
  Stream<Future<BuildContext?>> futures(
    Stream<Future<BuildContext?>> Function() source,
  ) => source();
  Stream<FutureOr<BuildContext?>> futureOrEvents(
    Stream<FutureOr<BuildContext?>> Function() source,
  ) => source();
  Stream<BuildContext?> nativeStream(BuildContext context) =>
      Stream<BuildContext?>.fromIterable([context, null]);
  Stream<ContextStreamCallbackRecord> nativeCallbackRecords(
    BuildContext context,
  ) => Stream.value((context: context, current: () => context));
  Stream<BuildContext?> controlled() =>
      (controller ??= StreamController<BuildContext?>()).stream;
  Stream<BuildContext?> Function() returned(BuildContext context) =>
      () => nativeStream(context);
  void keep(Stream<BuildContext?> Function() source) => retained = source;
  void rememberWeak(BuildContext context) =>
      observedWeak = WeakReference(context);
  Future<List<BuildContext?>> collect(
    Stream<BuildContext?> Function() source,
  ) => source().toList();
}
