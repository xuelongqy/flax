import 'package:flutter/foundation.dart';
import 'package:flutter/widgets.dart';

abstract class WidgetMemberBase extends StatelessWidget {
  const WidgetMemberBase(this.label, {super.key});

  final String label;
  String get uppercase => label.toUpperCase();

  static int requested = 0;
  int get requestedValue => requested;
  set requestedValue(int value) => requested = value;

  @nonVirtual
  int textLength() => label.length;

  @protected
  String protectedLabel() => label;

  @override
  Widget build(BuildContext context) => Text(label);
}

class ComputedWidget extends WidgetMemberBase {
  const ComputedWidget(super.label, {super.key});
  const ComputedWidget.named(super.label, {super.key});

  static int reads = 0;
  int get trackedLength {
    reads++;
    return textLength();
  }

  String get failure => throw StateError('Widget getter failure');
  int repeatLength(int count, {int extra = 1}) => textLength() * count + extra;
  int callWith(int Function(int) callback) => callback(textLength());
  ComputedWidget echo(ComputedWidget value) => value;
  WidgetMemberBase asBase() => this;
  Future<String> later() async => uppercase;
  Stream<int> get lengths => Stream.value(textLength());
}

final class FinalComputedWidget extends WidgetMemberBase {
  const FinalComputedWidget(super.label, {super.key});
}

class ReturnedComputedWidget extends WidgetMemberBase {
  const ReturnedComputedWidget._() : super('returned');
}

ReturnedComputedWidget createReturnedComputedWidget() =>
    const ReturnedComputedWidget._();

class GenericComputedWidget<T> extends StatelessWidget {
  const GenericComputedWidget(this.value, {super.key});
  final T value;
  T echo(T value) => value;

  @override
  Widget build(BuildContext context) => Text('$value');
}

GenericComputedWidget<String> createGenericComputedWidget() =>
    const GenericComputedWidget('generic');

class DerivedGenericWidget extends GenericComputedWidget<String> {
  const DerivedGenericWidget(super.value, {super.key});
}

class AggregateComputedWidget<T extends Iterable<String>>
    extends StatelessWidget {
  const AggregateComputedWidget(this.items, {super.key});
  final T items;
  T echo(T value) => value;

  @override
  Widget build(BuildContext context) => Text(items.join(','));
}

AggregateComputedWidget<List<String>> createListComputedWidget() =>
    const AggregateComputedWidget(['list']);
AggregateComputedWidget<Set<String>> createSetComputedWidget() =>
    const AggregateComputedWidget({'set'});
