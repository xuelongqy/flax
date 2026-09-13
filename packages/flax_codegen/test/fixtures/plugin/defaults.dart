import 'package:flutter/widgets.dart';
export 'package:flutter/widgets.dart';

final calls = <String>[];
void _first() => calls.add('default first');
void _second() => calls.add('default second');

abstract class DefaultsBase extends StatelessWidget {
  const DefaultsBase({
    super.key,
    this.children = const [],
    this.onFirst = _first,
  });
  final List<Widget> children;
  final VoidCallback? onFirst;
}

class DefaultsPanel extends DefaultsBase {
  const DefaultsPanel({
    super.key,
    super.children,
    super.onFirst,
    this.onSecond = _second,
  });
  final VoidCallback? onSecond;
  @override
  Widget build(BuildContext context) => Column(children: children);
}
