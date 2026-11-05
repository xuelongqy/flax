import 'dart:async';

import 'package:flax/permissions.dart';
import 'package:flutter/material.dart';

/// Shows trusted host consent for any module permission, with optional host UI.
/// Defaults use SDK Material. Other UI hosts provide their builder and barrier label.
/// The host keeps these controls outside module reach; this is not UI isolation.
Future<FlaxPermissionDecision> showFlaxPermissionDialog({
  required BuildContext context,
  required FlaxPermissionRequest request,
  WidgetBuilder? builder,
  String? barrierLabel,
}) async {
  if (!context.mounted || request.isCancelled) {
    return FlaxPermissionDecision.cancel;
  }
  final navigator = Navigator.of(context, rootNavigator: true);
  late final DialogRoute<FlaxPermissionDecision> route;
  route = DialogRoute<FlaxPermissionDecision>(
    context: context,
    barrierLabel: barrierLabel,
    themes: InheritedTheme.capture(from: context, to: navigator.context),
    traversalEdgeBehavior: TraversalEdgeBehavior.closedLoop,
    builder:
        builder ??
        (_) => AlertDialog(
          title: Text(
            '${request.applicationName}: ${request.definition.title}',
          ),
          content: Text(
            [
              request.purpose,
              'Requested scope: ${request.scope}',
              if (request.approvedScope != null)
                'Previously approved: ${request.approvedScope}',
            ].join('\n\n'),
          ),
          actions: [
            TextButton(
              onPressed: () =>
                  navigator.removeRoute(route, FlaxPermissionDecision.deny),
              child: const Text('Deny'),
            ),
            TextButton(
              onPressed: () =>
                  navigator.removeRoute(route, FlaxPermissionDecision.allow),
              child: const Text('Allow module'),
            ),
          ],
        ),
  );
  unawaited(
    request.whenCancelled.then((_) {
      if (route.isActive) navigator.removeRoute(route);
    }),
  );
  return await navigator.push(route) ?? FlaxPermissionDecision.cancel;
}
