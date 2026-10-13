import 'package:flutter/widgets.dart';

class CodegenTypeBag<T> {
  static int count = 0;
  static String source() => 'bag';
  CodegenTypeBag(this.items, [this.capacity = 10]);
  CodegenTypeBag.named({required this.items, this.capacity = 10});
  CodegenTypeBag.labeled(this.items, {this.capacity = 10});
  CodegenTypeBag.empty() : items = <T>[], capacity = 10;
  final List<T> items;
  final int capacity;
  String get typeName => '$T';
}

class CodegenTypeProcessor<T> {
  static String source() => 'processor';
  CodegenTypeProcessor(this.seed, {this.label = 'native'});
  final T seed;
  final String label;
  String get typeName => '$T';
  T transform(T value) => value;
  T nativeCall(T value) => transform(value);
  String describe() => label;
}

class CodegenTypeBound<T extends List<BigInt>> {
  CodegenTypeBound();
  String get typeName => '$T';
}

class CodegenTypeWidget<T> extends StatelessWidget {
  const CodegenTypeWidget(this.value, {super.key});
  final T value;
  String get typeName => '$T';
  String label(T input) => '$input';
  String nativeLabel(T input) => label(input);
  @override
  Widget build(BuildContext context) => Text(label(value));
}

abstract class CodegenTypeUses {
  CodegenTypeWidget<String> stringWidget();
  CodegenTypeWidget<int> intWidget();
  CodegenTypeBag<Text> widgets();
  CodegenTypeBag<BuildContext> contexts();
  CodegenTypeBag<State<StatefulWidget>> states();
  CodegenTypeBag<String> strings();
  CodegenTypeBag<int> integers();
  CodegenTypeBag<List<String>> lists();
  CodegenTypeBag<Map<String, List<int>>> maps();
  CodegenTypeBag<List<String?>> nullableItems();
  CodegenTypeBag<List<String>?> nullableLists();
  CodegenTypeBag<CodegenTypeBag<String>> nestedObjects();
  CodegenTypeProcessor<String> stringProcessor();
  CodegenTypeProcessor<int> intProcessor();
}
