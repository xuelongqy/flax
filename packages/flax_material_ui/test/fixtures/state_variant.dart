import 'package:flutter/scheduler.dart';
import 'package:flutter/widgets.dart';

export 'package:flutter/widgets.dart' show State;

mixin ContextInputMixin on State<StatefulWidget> {
  BuildContext? _input;

  bool get inputMounted => _input?.mounted ?? false;
  set input(BuildContext? value) => _input = value;
  bool isMountedContext(BuildContext value) => value.mounted;
}

class TickerProviderProbe {
  TickerProviderProbe({required TickerProvider vsync})
    : _ticker = vsync.createTicker((_) {});

  final Ticker _ticker;

  void dispose() => _ticker.dispose();
}
