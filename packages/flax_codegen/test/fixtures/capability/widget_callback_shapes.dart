// Flutter callback shape fixtures for the Stage 2 mechanism matrix.
//
// The fixture both imports and re-exports the barrel so the fixture library
// sees the same public names an application would see.

import 'dart:async';

import 'package:flutter/widgets.dart';

export 'package:flutter/widgets.dart';

class WidgetBuilderBox {
  const WidgetBuilderBox({required this.builder});

  final Widget Function(BuildContext) builder;

  void configure(Widget Function(BuildContext) build) {}

  Widget buildOnce(BuildContext context) => builder(context);

  Widget buildIndexed(
    BuildContext context,
    Widget Function(BuildContext, int) build,
  ) => build(context, 1);
  Widget? buildNullable(
    BuildContext context,
    Widget? Function(BuildContext) build,
  ) => build(context);
  Widget buildNamed(
    BuildContext context,
    Widget Function({required BuildContext context}) build,
  ) => build(context: context);
  Future<Widget> buildAsync(
    BuildContext context,
    Future<Widget> Function(BuildContext) build,
  ) => build(context);
}

class WidgetSinkBox {
  WidgetSinkBox();

  void sink(Widget child) {}

  void sinkAll(void Function(Widget) handler) {}

  Widget children() => const SizedBox.shrink();

  Text concrete(Text Function() build) => build();
}

class WidgetFutureBox {
  WidgetFutureBox();

  Future<Widget> later(Future<Widget> Function() compute) => compute();
}

class WidgetNullableBox {
  WidgetNullableBox();

  Widget? maybe(Widget? Function(Object?) build) => build(null);
}

class WidgetAggregateBox {
  WidgetAggregateBox();
  FutureOr<Iterable<Widget>> finiteIterable(
    FutureOr<Iterable<Widget>> Function(BuildContext) build,
    BuildContext context,
  ) => build(context);
  Future<List<Widget>> futureList(Future<List<Widget>> Function() build) =>
      build();
  List<Widget?>? nullableList(List<Widget?>? Function() build) => build();
  ({Widget child}) record(({Widget child}) Function() build) => build();
  BuildContext? context(BuildContext? value) => value;
  BuildContext? contextCallback(BuildContext? Function() read) => read();
  FutureOr<BuildContext?> asyncContextCallback(
    FutureOr<BuildContext?> Function() read,
  ) => read();
  Stream<BuildContext?> streamContextCallback(
    Stream<BuildContext?> Function() read,
  ) => read();
}
