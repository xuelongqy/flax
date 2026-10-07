import 'package:flutter/rendering.dart';
import 'package:flutter/widgets.dart';
export 'package:flutter/rendering.dart' show RenderObject, RenderConstrainedBox;
export 'package:flutter/widgets.dart';

class NativeLabel extends Text {
  const NativeLabel(super.data, {super.key});
}

class NativeCounter extends StatefulWidget {
  const NativeCounter({super.key});
  @override
  State<NativeCounter> createState() => NativeCounterState();
}

class NativeCounterState extends State<NativeCounter> {
  int count = 0;
  @override
  Widget build(BuildContext context) => Text('$count');
}

class NativeBox extends LeafRenderObjectWidget {
  const NativeBox({super.key});
  @override
  RenderConstrainedBox createRenderObject(BuildContext context) =>
      RenderConstrainedBox(
        additionalConstraints: const BoxConstraints.tightFor(
          width: 10,
          height: 10,
        ),
      );
  @override
  void updateRenderObject(
    BuildContext context,
    RenderConstrainedBox renderObject,
  ) {
    renderObject.additionalConstraints = const BoxConstraints.tightFor(
      width: 20,
      height: 20,
    );
  }
}

class NativeDependency extends InheritedWidget {
  const NativeDependency({required super.child, super.key});
  @override
  bool updateShouldNotify(NativeDependency oldWidget) =>
      child != oldWidget.child;
}

class NativeWidgetCalls {
  const NativeWidgetCalls();
  Text text(Text Function() callback) => callback();
  Text input(Text value) => value;
  Text? nullable(Text? Function() callback) => callback();
  List<Text> texts(List<Text> Function() callback) => callback();
  Future<Text> later(Future<Text> Function() callback) => callback();
  NativeCounter counter(NativeCounter Function() callback) => callback();
  NativeBox box(NativeBox Function() callback) => callback();
  NativeDependency dependency(NativeDependency Function() callback) =>
      callback();
}
