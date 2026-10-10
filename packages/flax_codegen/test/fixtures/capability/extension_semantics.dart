import 'package:flutter/widgets.dart';
export 'package:flutter/widgets.dart' show BuildContext, Route;

extension ContextX on BuildContext {
  bool get isMounted => mounted;
  BuildContext get same => this;
  Stream<BuildContext> get events => Stream.value(this);
  BuildContext through(BuildContext Function(BuildContext) callback) =>
      callback(this);
  Future<BuildContext> later(Future<BuildContext> Function() callback) =>
      callback();
}

extension RouteX on Route<Object?> {
  void call(Route<Object?> Function() callback) => callback();
  void nested(Route<Object?> Function() Function() callback) => callback()();
}
