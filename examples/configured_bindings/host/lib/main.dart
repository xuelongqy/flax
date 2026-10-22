import 'package:configured_prices/configured_prices.dart';
import 'package:flax/flax.dart';
import 'package:flax_material_ui/flax_material_ui.dart';
import 'package:flutter/services.dart';
import 'package:material_ui/material_ui.dart';

import 'configured_host.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  Flax.moduleAssets = await FlaxModuleAssets.load(
    bundle: rootBundle,
    manifest: 'assets/flax_modules/modules.json',
  );
  runApp(const FlaxConfiguredBindingsApp());
}

class FlaxConfiguredBindingsApp extends StatelessWidget {
  const FlaxConfiguredBindingsApp({super.key});

  @override
  Widget build(BuildContext context) => MaterialApp(
    home: Scaffold(
      appBar: AppBar(title: const Text('Configured host bindings')),
      body: LayoutBuilder(
        builder: (context, constraints) {
          final width = constraints.maxWidth - 32;
          final cardWidth = width >= 850 ? (width - 16) / 2 : width;
          return SingleChildScrollView(
            padding: const EdgeInsets.all(16),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text(
                  'Four FlaxViews, four independent JS sessions, one shared Dart cart. '
                  'Buttons and live results belong to each JS miniapp.\n'
                  'Shop A/B subscribe to cart.quantities: Add item in either shop or '
                  'Reset cart in the manager, and both live totals update automatically.',
                ),
                const SizedBox(height: 16),
                Wrap(
                  spacing: 16,
                  runSpacing: 16,
                  children: [
                    SizedBox(
                      width: cardWidth,
                      child: _BindingCard(
                        title: 'Shop A · public SDK',
                        application: 'first',
                        plugins: [
                          const FlaxMaterialPlugin(),
                          shopPlugin,
                          deliveryPlugin,
                          const FlaxPricesPlugin(),
                        ],
                        api:
                            'currentCart().add(1) → Money\n'
                            'cart.quantities → Stream<int> (live subscription)',
                      ),
                    ),
                    SizedBox(
                      width: cardWidth,
                      child: _BindingCard(
                        title: 'Shop B · public SDK',
                        application: 'second',
                        plugins: [
                          const FlaxMaterialPlugin(),
                          shopPlugin,
                          deliveryPlugin,
                          const FlaxPricesPlugin(),
                        ],
                        api:
                            'currentCart().add(1) → Money\n'
                            'cart.quantities → Stream<int> (live subscription)',
                      ),
                    ),
                    SizedBox(
                      width: cardWidth,
                      child: _BindingCard(
                        title: 'Internal manager',
                        application: 'manager',
                        plugins: [
                          const FlaxMaterialPlugin(),
                          adminPlugin,
                          appPlugin,
                          const FlaxPricesPlugin(),
                        ],
                        api:
                            'resetCart() from @flax/app/admin\n'
                            'hostAppName() from @flax/app/host\n'
                            'Resets the shared Dart cart to quantity 1.',
                      ),
                    ),
                    SizedBox(
                      width: cardWidth,
                      child: _BindingCard(
                        title: 'Missing internal plugin · expected failure',
                        application: 'forbidden',
                        plugins: [
                          const FlaxMaterialPlugin(),
                          shopPlugin,
                          deliveryPlugin,
                          const FlaxPricesPlugin(),
                        ],
                        api:
                            'resetCart() from @flax/app/admin\n'
                            'adminPlugin and appPlugin are intentionally absent.',
                      ),
                    ),
                  ],
                ),
              ],
            ),
          );
        },
      ),
    ),
  );
}

class _BindingCard extends StatefulWidget {
  const _BindingCard({
    required this.title,
    required this.application,
    required this.plugins,
    required this.api,
  });

  final String title;
  final String application;
  final List<FlaxPlugin> plugins;
  final String api;

  @override
  State<_BindingCard> createState() => _BindingCardState();
}

class _BindingCardState extends State<_BindingCard> {
  Object? _error;

  void _reportError(Object error, StackTrace stack) {
    // Session startup can report errors while its child is being built.
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (mounted) {
        setState(() => _error = error);
      }
    });
  }

  @override
  Widget build(BuildContext context) {
    final error = _error;
    return SizedBox(
      height: 320,
      child: Card(
        margin: EdgeInsets.zero,
        child: Padding(
          padding: const EdgeInsets.all(16),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                widget.title,
                style: Theme.of(context).textTheme.titleMedium,
              ),
              const SizedBox(height: 8),
              const Text(
                'Injected plugins',
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 12,
                  height: 1.3,
                ),
              ),
              Text(
                widget.plugins.map((plugin) => plugin.id).join(' + '),
                style: const TextStyle(fontFamily: 'monospace', fontSize: 12),
              ),
              const SizedBox(height: 8),
              const Text(
                'API request',
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                  fontSize: 12,
                  height: 1.3,
                ),
              ),
              Text(
                widget.api,
                style: const TextStyle(fontFamily: 'monospace', fontSize: 12),
              ),
              const Divider(height: 16),
              Expanded(
                child: Stack(
                  fit: StackFit.expand,
                  children: [
                    Offstage(
                      offstage: error != null,
                      child: FlaxView.bundle(
                        key: ValueKey('view-${widget.application}'),
                        prefix: 'applications/${widget.application}',
                        createRuntime: FlaxEngine.createRuntime,
                        plugins: widget.plugins,
                        loadingBuilder: (_) =>
                            const Center(child: Text('Starting JS session…')),
                        errorBuilder: (_, _, _) => const SizedBox.shrink(),
                        onError: _reportError,
                      ),
                    ),
                    if (error != null)
                      ColoredBox(
                        color: Theme.of(context).colorScheme.errorContainer,
                        child: SingleChildScrollView(
                          padding: const EdgeInsets.all(8),
                          child: Text(
                            'Unexpected load failure\n$error',
                            style: TextStyle(
                              color: Theme.of(context)
                                  .colorScheme
                                  .onErrorContainer,
                              fontSize: 12,
                            ),
                          ),
                        ),
                      ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
