// Flutter callback shape fixtures for the Stage 2 mechanism matrix.
//
// The fixture both imports and re-exports the barrel so the fixture library
// sees the same public names an application would see.

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
}

class WidgetFutureBox {
  WidgetFutureBox();

  Future<Widget> later(Future<Widget> Function() compute) => compute();
}

class WidgetNullableBox {
  WidgetNullableBox();

  Widget? maybe(Widget? Function(Object?) build) => build(null);
}
