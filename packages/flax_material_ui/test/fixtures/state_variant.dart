import 'package:flutter/scheduler.dart';

class TickerProviderProbe {
  TickerProviderProbe({required TickerProvider vsync})
    : _ticker = vsync.createTicker((_) {});

  final Ticker _ticker;

  void dispose() => _ticker.dispose();
}
