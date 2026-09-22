import 'package:flutter/widgets.dart';
export 'package:flutter/widgets.dart' show BuildContext, Key, Widget;

typedef CellBuilder = Widget? Function(BuildContext, int);

class CoreValuePeer {
  CoreValuePeer(this.date, this.uri, this.buffer);
  final DateTime date;
  final Uri uri;
  final StringBuffer buffer;
}

/// A native consumer can keep a Widget without mounting it or returning it to JS.
class WidgetCache {
  WidgetCache({this.child});
  Widget? child;
  void save(Widget value, {bool fail = false}) {
    child = Padding(padding: const EdgeInsets.all(3), child: value);
    if (fail) throw StateError('Saved before failure');
  }

  Widget? take() => child;
  Widget Function(Widget) get wrap =>
      (value) => Padding(padding: const EdgeInsets.all(2), child: value);
  Widget Function(Widget) transform(Widget Function(Widget) callback) =>
      callback;
  Widget? Function(Widget?) get nullable =>
      (value) => value;
  Widget Function(Widget)? savedTransform;
  void saveTransform(Widget Function(Widget) callback) =>
      savedTransform = callback;
  Widget callTransform(Widget child) => savedTransform!(child);
  void clear() => child = null;
}

class AsyncWidgetStore {
  AsyncWidgetStore(this.callback);
  final Future<Widget> Function() callback;
  Future<Widget> load() => callback();
}

class CallbackStore {
  CallbackStore(this.builders) {
    lastCreated = WeakReference(this);
  }
  static WeakReference<CallbackStore>? lastCreated;
  final List<CellBuilder> builders;
  List<CellBuilder> get wrappedBuilders => [
    (context, index) => Center(child: builders.single(context, index)),
  ];
  static final Widget nativeTile = SizedBox(
    key: ValueKey('native-tile'),
    width: 37,
    height: 19,
  );
  static final List<Widget> widgets = [nativeTile];
  static final List<CellBuilder> nativeBuilders = [
    (_, index) => index < 0 ? null : Text('Native $index'),
  ];
}

class InvalidCallbackKeys {
  InvalidCallbackKeys(this.values);
  final Map<VoidCallback, int> values;
}

/// One Flax owner can receive many native child Contexts over its lifetime.
class ContextBatch extends StatelessWidget {
  const ContextBatch({
    super.key,
    required this.render,
    required this.epoch,
    this.count = 130,
  });
  final CellBuilder render;
  final int epoch;
  final int count;
  @override
  Widget build(BuildContext context) => Column(
    children: [
      for (var i = 0; i < count; i++)
        Builder(
          key: ValueKey((epoch, i)),
          builder: (context) => render(context, i)!,
        ),
    ],
  );
}

class NestedBatch extends StatelessWidget {
  const NestedBatch({
    super.key,
    required this.builders,
    this.groups = const {},
    this.keyed = const {},
    this.events = const [],
    this.discard = false,
    this.repeat = 1,
  });
  final List<CellBuilder> builders;
  List<CellBuilder> get wrappedBuilders => [
    (context, index) => Center(child: builders.single(context, index)),
  ];
  final Map<String, List<CellBuilder>> groups;
  final Map<Object?, CellBuilder> keyed;
  final List<VoidCallback> events;
  final bool discard;
  final int repeat;
  static int builds = 0;
  static bool sharedLists = false;
  static bool nativeListPreserved = false;
  static bool selfKeyPreserved = false;
  @override
  Widget build(BuildContext context) {
    builds++;
    sharedLists = groups.length >= 2 && identical(groups['a'], groups['b']);
    nativeListPreserved = identical(
      groups['native'],
      CallbackStore.nativeBuilders,
    );
    selfKeyPreserved = keyed.isNotEmpty && identical(keyed.keys.single, keyed);
    final children = <Widget>[];
    var index = 0;
    for (final builder in [
      ...builders,
      ...groups.values.expand((v) => v),
      ...keyed.values,
    ]) {
      for (var i = 0; i < repeat; i++) {
        final result = builder(context, index++);
        if (!discard && result != null) children.add(result);
      }
    }
    for (var i = 0; i < events.length; i++) {
      children.add(GestureDetector(onTap: events[i], child: Text('Event $i')));
    }
    return Column(children: children);
  }
}

/// Calls the same function repeatedly, including results Flutter never mounts.
class TileBatch extends StatelessWidget {
  const TileBatch({
    super.key,
    required this.render,
    this.count = 2,
    this.discard = false,
  });
  final Widget? Function(BuildContext, int) render;
  final int count;
  final bool discard;

  @override
  Widget build(BuildContext context) {
    final children = <Widget>[];
    for (var i = 0; i < count; i++) {
      final child = render(context, i);
      if (!discard && child != null) children.add(child);
    }
    return Column(children: children);
  }
}

class WidgetListBatch extends StatelessWidget {
  const WidgetListBatch({super.key, required this.render, this.onChildren});
  final List<Widget> Function(BuildContext) render;
  final void Function(List<Widget>)? onChildren;

  @override
  Widget build(BuildContext context) {
    final children = render(context);
    onChildren?.call(children);
    return Column(children: children);
  }
}

/// Native state and keep-alive behavior, observable only by tests.
class RetainedTile extends StatefulWidget {
  RetainedTile({
    super.key,
    required this.label,
    required this.child,
    this.keep = false,
  }) {
    constructions++;
  }
  final String label;
  final Widget child;
  final bool keep;
  static int constructions = 0;
  static final mounts = <String, int>{};
  static final disposals = <String, int>{};
  @override
  State<RetainedTile> createState() => _RetainedTileState();
}

class _RetainedTileState extends State<RetainedTile>
    with AutomaticKeepAliveClientMixin {
  @override
  bool get wantKeepAlive => widget.keep;
  @override
  void initState() {
    super.initState();
    RetainedTile.mounts.update(widget.label, (n) => n + 1, ifAbsent: () => 1);
  }

  @override
  void didUpdateWidget(covariant RetainedTile oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (oldWidget.keep != widget.keep) updateKeepAlive();
  }

  @override
  Widget build(BuildContext context) {
    super.build(context);
    return widget.child;
  }

  @override
  void dispose() {
    RetainedTile.disposals.update(
      widget.label,
      (n) => n + 1,
      ifAbsent: () => 1,
    );
    super.dispose();
  }
}

class UnsupportedWidgetCollection {
  List<Widget> Function(BuildContext) get render =>
      (_) => [];
}

class ChildConsumer extends StatelessWidget {
  const ChildConsumer({super.key, required this.render, this.child});
  final Widget Function(BuildContext, Widget?) render;
  final Widget? child;
  @override
  Widget build(BuildContext context) => render(context, child);
}
