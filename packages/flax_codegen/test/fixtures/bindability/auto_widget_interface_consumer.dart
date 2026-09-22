import 'package:flutter/widgets.dart';

import 'auto_widget_interface_provider.dart';

class ExternalPreferredTile extends StatelessWidget
    implements ExternalPreferred {
  const ExternalPreferredTile({super.key, this.extent = 32});

  @override
  final double extent;

  @override
  Widget build(BuildContext context) => SizedBox(height: extent);
}
