import 'package:flutter/widgets.dart';
export 'package:flutter/widgets.dart' show Axis, Widget;

class Box extends StatelessWidget {
  const Box({super.key, required this.child, this.axis = Axis.vertical});

  final Widget child;
  final Axis axis;

  @override
  Widget build(BuildContext context) => child;
}
