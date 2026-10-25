// ignore_for_file: depend_on_referenced_packages

import 'dart:ui' show FrameTiming;

import 'package:flutter/widgets.dart';
import 'package:material_ui/material_ui.dart' show MaterialApp;

final clock = Stopwatch()..start();
final child = ValueNotifier<Widget>(const SizedBox.shrink());
final tickTimes = <int>[];
final timerTimes = <int>[];
final frameTimes = <FrameTiming>[];

class Shell extends StatefulWidget {
  const Shell({super.key});
  @override
  State<Shell> createState() => _ShellState();
}

class _ShellState extends State<Shell> with SingleTickerProviderStateMixin {
  late final AnimationController animation;
  @override
  void initState() {
    super.initState();
    animation = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 1),
    )..repeat();
  }

  @override
  void dispose() {
    animation.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => MaterialApp(
    debugShowCheckedModeBanner: false,
    home: Column(
      children: [
        RepaintBoundary(
          child: SizedBox(
            height: 56,
            width: double.infinity,
            child: CustomPaint(painter: Pulse(animation)),
          ),
        ),
        Expanded(
          child: ValueListenableBuilder<Widget>(
            valueListenable: child,
            builder: (_, value, _) => value,
          ),
        ),
      ],
    ),
  );
}

class Pulse extends CustomPainter {
  Pulse(this.animation) : super(repaint: animation);
  final Animation<double> animation;
  @override
  void paint(Canvas canvas, Size size) {
    canvas.drawRect(
      Offset.zero & size,
      Paint()..color = const Color(0xff163d32),
    );
    canvas.drawCircle(
      Offset(24 + (size.width - 48) * animation.value, 28),
      16,
      Paint()..color = const Color(0xffbde6a1),
    );
  }

  @override
  bool shouldRepaint(Pulse oldDelegate) => false;
}
