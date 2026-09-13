import 'package:flutter/widgets.dart';
export 'package:flutter/widgets.dart' show Widget, Key;

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
  const CallbackTile({required this.callback, super.key});
  final VoidCallback callback;
  @override
  double get extent => 1;
  @override
  Widget build(BuildContext context) => const SizedBox();
}
