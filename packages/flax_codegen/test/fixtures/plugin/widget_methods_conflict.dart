// Deliberately invalid upstream code tests the generator's conflict diagnostic.
// ignore_for_file: invalid_override, invalid_implementation_override
import 'package:flutter/widgets.dart';

export 'package:flutter/widgets.dart' show Widget;

abstract class CountContract implements Widget {
  int get count;
}

abstract class TextContract implements Widget {
  String get count;
}

class ConflictingTile extends StatelessWidget
    implements CountContract, TextContract {
  const ConflictingTile({super.key});
  @override
  int get count => 1;
  @override
  Widget build(BuildContext context) => const SizedBox();
}
