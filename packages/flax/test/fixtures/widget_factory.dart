import 'package:flutter/widgets.dart';

export 'package:flutter/widgets.dart' show StatelessWidget;

abstract class WidgetFactory {
  WidgetFactory();

  Widget create(BuildContext context);
  Text createText() => const Text('Native factory');
  Widget? optional() => null;
}

abstract interface class WidgetFactoryInterface implements WidgetFactory {}
