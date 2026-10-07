export '../../../../flax/test/fixtures/native_widgets.dart';

import 'package:flutter/widgets.dart';

class NamedLabel extends Text {
  const NamedLabel.named(super.data, {super.key});
}

class NativeToolbar extends Text implements PreferredSizeWidget {
  const NativeToolbar(super.data, {super.key});
  @override
  Size get preferredSize => const Size.fromHeight(40);
}

class GenericLabel<T extends Object> extends StatelessWidget {
  const GenericLabel(this.value, {super.key});
  final T value;
  @override
  Widget build(BuildContext context) => Text('$value');
}
