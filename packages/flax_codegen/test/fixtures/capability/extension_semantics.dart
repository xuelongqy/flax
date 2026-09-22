import 'package:flutter/widgets.dart';
export 'package:flutter/widgets.dart' show BuildContext;

extension ContextX on BuildContext {
  bool get isMounted => mounted;
}
