import 'package:flutter/widgets.dart';

import 'auto_widget_interface_provider.dart';

ExternalPreferred applyPreferred(
  ExternalPreferred value,
  ExternalPreferred Function(ExternalPreferred) transform,
) => transform(value);

ExternalPreferred Function(ExternalPreferred) preferredIdentity() =>
    (value) => value;

class ExternalPreferredBuilder extends StatelessWidget {
  const ExternalPreferredBuilder({required this.builder, super.key});
  final ExternalPreferred Function() builder;
  @override
  Widget build(BuildContext context) => builder();
}

class ExternalPreferredListBuilder extends StatelessWidget {
  const ExternalPreferredListBuilder({required this.builder, super.key});
  final List<ExternalPreferred> Function() builder;
  @override
  Widget build(BuildContext context) => Column(children: builder());
}

class ExternalPreferredNestedBuilder extends StatelessWidget {
  const ExternalPreferredNestedBuilder({required this.builders, super.key});
  final List<ExternalPreferred Function()> builders;
  @override
  Widget build(BuildContext context) => builders.single();
}

class ExternalPreferredTile extends StatelessWidget
    implements ExternalPreferred {
  const ExternalPreferredTile({super.key, this.extent = 32});

  @override
  final double extent;

  @override
  Widget build(BuildContext context) => SizedBox(height: extent);
}
