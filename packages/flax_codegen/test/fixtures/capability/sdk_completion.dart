import 'package:flutter/widgets.dart';

abstract class OptionalPainter {
  int paint([void Function() onChanged]);
}

class DefaultPainter extends OptionalPainter {
  @override
  int paint([void Function()? onChanged]) {
    onChanged?.call();
    return onChanged == null ? 2 : 3;
  }
}

class IntentBound {}

abstract class ActionLike<T extends IntentBound> {
  ActionLike();
  T? invoke(T intent) => intent;
}

ActionLike<dynamic>? observedAction;

abstract class SelfBound<T extends SelfBound<T>> {
  const SelfBound();
  T copy(T value) => value;
}

SelfBound<dynamic>? observedSelf;

mixin WidgetMixin on Widget {
  String get label => 'widget mixin';
}

typedef ImportedWidgetBuilder = Widget Function(BuildContext context);
