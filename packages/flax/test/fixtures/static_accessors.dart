import 'dart:async';

import 'package:flutter/widgets.dart';

class StaticToken {
  StaticToken(this.value);
  final int value;
}

class _StaticLateValue {
  late int value;
}

class StaticCounter<T> {
  static int count = 0;
  static int? optional;
  static var _delayed = _StaticLateValue();
  static int get delayed => _delayed.value;
  static set delayed(int value) => _delayed.value = value;
  static int reads = 0;
  static int writes = 0;
  static List<StaticToken> tokens = [];
  static (int, {String label}) record = (0, label: 'initial');
  static int Function(int)? transform;
  static Future<int> later = Future.value(0);
  static int get tracked {
    reads++;
    return count;
  }

  static set tracked(num value) {
    writes++;
    if (value < 0) throw StateError('negative count');
    count = value.round();
  }

  static set writeOnly(int value) => count = value;
  static int get failure => throw StateError('static read failure');
  static int callTransform(int value) => transform!(value);

  static void reset() {
    count = reads = writes = 0;
    optional = null;
    _delayed = _StaticLateValue();
    transform = null;
    tokens = [];
    record = (0, label: 'initial');
    later = Future.value(0);
  }
}

class StaticWidget extends StatelessWidget {
  const StaticWidget({super.key});
  static int count = 0;
  @override
  Widget build(BuildContext context) => const SizedBox();
}

class StaticRenamedWidget extends StatelessWidget {
  const StaticRenamedWidget({super.key});
  static int get count => StaticWidget.count;
  @override
  Widget build(BuildContext context) => const SizedBox();
}

class StaticState extends State<StatefulWidget> {
  static int count = 0;
  @override
  Widget build(BuildContext context) => const SizedBox();
}

abstract class StaticRoute extends Route<void> {
  static int count = 0;
}

abstract class StaticPage extends Page<void> {
  static int count = 0;
}

abstract class StaticStream<T> extends Stream<T> {
  static int count = 0;
}

class StaticMembers<T> {
  static int count = 0;
}

abstract class StaticInterface implements Widget {
  static int count = 0;
  String get label;
}

class StaticProxy {
  StaticProxy();
  static int count = 0;
}

void resetStaticAccessors() {
  StaticCounter.reset();
  StaticWidget.count = StaticState.count = StaticRoute.count =
      StaticPage.count = 0;
  StaticStream.count = StaticMembers.count = StaticInterface.count =
      StaticProxy.count = 0;
}
