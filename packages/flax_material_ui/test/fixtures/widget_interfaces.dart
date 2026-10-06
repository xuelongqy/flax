import 'dart:async';

import 'package:flax/bindings.dart';
import 'package:flutter/widgets.dart';
export 'package:flutter/widgets.dart'
    show Widget, Key, Route, Page, BuildContext;

abstract class ExtentContract implements Widget {
  double get extent;
}

abstract class LabelledContract implements ExtentContract {
  String get label;
}

class ExtentTile extends StatelessWidget implements LabelledContract {
  ExtentTile({
    super.key,
    double extent = 24,
    this.label = 'Tile',
    required this.child,
    // Keep the public constructor name distinct from its instrumented getter.
    // ignore: prefer_initializing_formals
  }) : _extent = extent {
    constructions++;
  }
  static int constructions = 0;
  static int reads = 0;
  @override
  double get extent {
    reads++;
    return _extent;
  }

  final double _extent;
  @override
  final String label;
  final Widget child;
  @override
  Widget build(BuildContext context) => SizedBox(height: extent, child: child);
}

class ExtentFrame extends StatelessWidget {
  const ExtentFrame({super.key, required this.item, this.items = const []});
  final ExtentContract item;
  final List<ExtentContract> items;
  @override
  Widget build(BuildContext context) => Column(
    children: [
      SizedBox(height: item.extent, child: item),
      ...items,
    ],
  );
}

class ExtentProbe {
  static final ExtentContract native = ExtentTile(
    child: const Text('Native tile'),
  );
  static final Widget plain = const SizedBox();
  static final Widget opaque = native;
  static const Widget header = PreferredSize(
    preferredSize: Size.fromHeight(33),
    child: Text('Native header'),
  );
}

/// A consumer may read Widget configuration without mounting that Widget.
class MetadataFrame extends StatefulWidget {
  const MetadataFrame({super.key, required this.item});
  final ExtentContract item;
  static double? previous;
  static Object? failure;
  @override
  State<MetadataFrame> createState() => _MetadataFrameState();
}

class _MetadataFrameState extends State<MetadataFrame> {
  @override
  void didUpdateWidget(MetadataFrame oldWidget) {
    super.didUpdateWidget(oldWidget);
    try {
      MetadataFrame.previous = oldWidget.item.extent;
    } catch (error) {
      // Record the native getter failure without interrupting Flutter's update.
      MetadataFrame.failure = error;
    }
  }

  @override
  Widget build(BuildContext context) => Text('Metadata ${widget.item.extent}');
}

abstract class InvalidContract implements Widget {
  void update();
}

class CallbackTile extends StatelessWidget implements ExtentContract {
  const CallbackTile({
    required this.callback,
    this.callbacks = const [],
    super.key,
  });
  final VoidCallback callback;
  final List<VoidCallback> callbacks;
  @override
  double get extent => 1;
  @override
  Widget build(BuildContext context) => GestureDetector(
    onTap: () {
      callback();
      for (final next in callbacks) {
        next();
      }
    },
    child: const Text('Callback tile'),
  );
}

class InterfaceBuilder extends StatelessWidget {
  const InterfaceBuilder({
    required this.builder,
    this.discard = false,
    super.key,
  });
  final ExtentContract Function() builder;
  final bool discard;
  static ExtentContract? last;
  @override
  Widget build(BuildContext context) {
    final value = builder();
    last = value;
    return discard ? const SizedBox() : value;
  }
}

class InterfaceListBuilder extends StatelessWidget {
  const InterfaceListBuilder({required this.builder, super.key});
  final List<ExtentContract> Function() builder;
  @override
  Widget build(BuildContext context) => Column(children: builder());
}

class InterfaceNestedBuilder extends StatelessWidget {
  const InterfaceNestedBuilder({required this.builders, super.key});
  final List<ExtentContract Function()> builders;
  @override
  Widget build(BuildContext context) => builders.single();
}

class InterfaceRoute extends PageRouteBuilder<Object?> {
  InterfaceRoute({required ExtentContract Function(BuildContext) builder})
    : super(pageBuilder: (context, _, _) => builder(context));
}

class WidgetResultBuilder extends StatelessWidget {
  const WidgetResultBuilder({
    required this.builder,
    this.discard = false,
    super.key,
  });
  final WidgetBuilder builder;
  final bool discard;
  static Widget? last;
  @override
  Widget build(BuildContext context) {
    final value = builder(context);
    last = value;
    return discard ? const SizedBox() : value;
  }
}

class InterfaceAsyncBuilder extends StatelessWidget {
  const InterfaceAsyncBuilder({required this.builder, super.key});
  final Future<ExtentContract> Function(BuildContext) builder;
  @override
  Widget build(BuildContext context) => FutureBuilder<ExtentContract>(
    future: builder(context),
    builder: (_, value) => value.hasError
        ? Text('Async error: ${value.error}')
        : value.data ?? const SizedBox(),
  );
}

class InterfaceFutureOrBuilder extends StatelessWidget {
  const InterfaceFutureOrBuilder({required this.builder, super.key});
  final FutureOr<ExtentContract> Function(BuildContext) builder;
  @override
  Widget build(BuildContext context) => FutureBuilder<ExtentContract>(
    future: Future.value(builder(context)),
    builder: (_, value) => value.data ?? const SizedBox(),
  );
}

class InterfaceStreamBuilder extends StatelessWidget {
  const InterfaceStreamBuilder({required this.builder, super.key});
  final Stream<ExtentContract> Function(BuildContext) builder;
  @override
  Widget build(BuildContext context) => StreamBuilder<ExtentContract>(
    stream: builder(context),
    builder: (_, value) => value.data ?? const SizedBox(),
  );
}

class InterfacePage extends Page<Object?> {
  const InterfacePage({required this.builder, super.key});
  final ExtentContract Function(BuildContext) builder;
  @override
  Route<Object?> createRoute(BuildContext context) =>
      throw UnimplementedError();
}

FlaxPageRoute adaptInterfacePage(InterfacePage page) =>
    _InterfacePageRoute(page);

class _InterfacePageRoute extends FlaxPageRoute {
  _InterfacePageRoute(InterfacePage page) : super(page: page);
  @override
  Widget buildPage(
    BuildContext context,
    Animation<double> animation,
    Animation<double> secondaryAnimation,
  ) => (settings as InterfacePage).builder(context);
  @override
  Duration get transitionDuration => Duration.zero;
  @override
  Color? get barrierColor => null;
  @override
  String? get barrierLabel => null;
  @override
  bool get maintainState => true;
}

class InterfaceNullableBuilder extends StatelessWidget {
  const InterfaceNullableBuilder({required this.builder, super.key});
  final ExtentContract? Function() builder;
  @override
  Widget build(BuildContext context) => builder() ?? const SizedBox();
}

Future<Object?> openInterfacePanel({
  required BuildContext origin,
  required ExtentContract Function(BuildContext) content,
  bool root = false,
}) => Navigator.of(origin, rootNavigator: root).push<Object?>(
  PageRouteBuilder<Object?>(pageBuilder: (context, _, _) => content(context)),
);

Stream<ExtentContract> interfaceStream(ExtentContract value) =>
    Stream.value(value);
