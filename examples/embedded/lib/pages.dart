import 'engine.dart';

import 'dart:async';

import 'package:flax/flax.dart';
import 'package:material_ui/material_ui.dart';

import 'main.dart' show embeddedBindings;

/// A host owns URL mapping and Pages; Flax only supplies the selected content.
class PagesDemo extends StatefulWidget {
  const PagesDemo({super.key, required this.source});
  final String source;
  @override
  State<PagesDemo> createState() => _PagesDemoState();
}

class _PagesDemoState extends State<PagesDemo> {
  late final _session = FlaxSession(
    createRuntime: createExampleRuntime,
    source: widget.source,
    bindings: embeddedBindings,
    sourceUrl: 'flax:example/pages',
  );
  late final _router = OrdersRouter(_session);
  final _information = PlatformRouteInformationProvider(
    initialRouteInformation: RouteInformation(
      uri: Uri.parse('/orders/42?filter=all'),
    ),
  );

  @override
  Widget build(BuildContext context) => Scaffold(
    appBar: AppBar(title: const Text('Native Router and JS Pages')),
    body: Column(
      children: [
        Wrap(
          children: [
            TextButton(
              onPressed: _router.updateFilter,
              child: const Text('Update filter'),
            ),
            TextButton(
              onPressed: _router.replaceIdentity,
              child: const Text('Replace page key'),
            ),
            TextButton(
              onPressed: _router.openSecond,
              child: const Text('Open second instance'),
            ),
            TextButton(
              onPressed: () => _router.setNewRoutePath(Uri.parse('/stack')),
              child: const Text('Show JS Pages'),
            ),
            TextButton(
              onPressed: () => Navigator.of(context).pop(),
              child: const Text('Exit Pages demo'),
            ),
          ],
        ),
        Expanded(
          child: Router<Uri>(
            routerDelegate: _router,
            routeInformationParser: const OrderPathParser(),
            routeInformationProvider: _information,
          ),
        ),
      ],
    ),
  );

  @override
  void dispose() {
    _information.dispose();
    _router.dispose();
    unawaited(_session.close());
    super.dispose();
  }
}

class OrderPathParser extends RouteInformationParser<Uri> {
  const OrderPathParser();
  @override
  Future<Uri> parseRouteInformation(RouteInformation routeInformation) async =>
      routeInformation.uri;
  @override
  RouteInformation restoreRouteInformation(Uri configuration) =>
      RouteInformation(uri: configuration);
}

class OrdersRouter extends RouterDelegate<Uri>
    with ChangeNotifier, PopNavigatorRouterDelegateMixin<Uri> {
  OrdersRouter(this.session);
  final FlaxSession session;
  @override
  final navigatorKey = GlobalKey<NavigatorState>();
  final _entries = <({Uri uri, String key})>[];
  int _generation = 0;
  @override
  Uri? get currentConfiguration => _entries.lastOrNull?.uri;

  @override
  Future<void> setNewRoutePath(Uri configuration) async {
    _entries
      ..clear()
      ..add((uri: configuration, key: configuration.path));
    notifyListeners();
  }

  void updateFilter() {
    final current = _entries.last;
    _entries[_entries.length - 1] = (
      key: current.key,
      uri: current.uri.replace(queryParameters: {'filter': 'recent'}),
    );
    notifyListeners();
  }

  void replaceIdentity() {
    final current = _entries.last;
    _entries[_entries.length - 1] = (
      uri: current.uri,
      key: 'replacement-${++_generation}',
    );
    notifyListeners();
  }

  void openSecond() {
    _entries.add((
      uri: Uri.parse('/orders/42?filter=all'),
      key: 'second-${++_generation}',
    ));
    notifyListeners();
  }

  @override
  Widget build(BuildContext context) => _entries.isEmpty
      ? const SizedBox.shrink()
      : Navigator(
          key: navigatorKey,
          pages: [
            for (final entry in _entries)
              MaterialPage<Object?>(
                key: ValueKey(entry.key),
                name: entry.uri.toString(),
                child: entry.uri.path == '/stack'
                    ? FlaxView.page(session: session, name: 'pageStack')
                    : entry.uri.pathSegments.length == 2 &&
                          entry.uri.pathSegments.first == 'orders'
                    ? FlaxView.page(
                        session: session,
                        name: 'orderDetails',
                        arguments: {
                          'orderId': entry.uri.pathSegments.last,
                          'filter':
                              entry.uri.queryParameters['filter'] ?? 'all',
                        },
                      )
                    : const Center(child: Text('Unknown host path')),
              ),
          ],
          onDidRemovePage: (page) {
            _entries.removeWhere((entry) => ValueKey(entry.key) == page.key);
            notifyListeners();
          },
        );
}
