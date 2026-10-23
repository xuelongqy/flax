import 'dart:async';
import 'dart:ui' show FontFeature, FramePhase, FrameTiming;

import 'package:flutter/scheduler.dart';
import 'package:material_ui/material_ui.dart';

/// Native example chrome; install once outside the application's FlaxViews.
class FlaxExampleApp extends StatefulWidget {
  const FlaxExampleApp({
    super.key,
    required this.title,
    required this.child,
    this.actions = const [],
  });

  final String title;
  final Widget child;
  final List<Widget> actions;

  @override
  State<FlaxExampleApp> createState() => _FlaxExampleAppState();
}

class _FlaxExampleAppState extends State<FlaxExampleApp> {
  final _scaffoldKey = GlobalKey<ScaffoldState>();
  ThemeMode _themeMode = ThemeMode.system;
  bool _showFps = false;

  @override
  Widget build(BuildContext context) => MaterialApp(
    debugShowCheckedModeBanner: false,
    themeMode: _themeMode,
    theme: ThemeData(
      colorScheme: ColorScheme.fromSeed(seedColor: const Color(0xff245c48)),
      useMaterial3: true,
    ),
    darkTheme: ThemeData(
      colorScheme: ColorScheme.fromSeed(
        seedColor: const Color(0xff245c48),
        brightness: Brightness.dark,
      ),
      useMaterial3: true,
    ),
    builder: (context, navigator) => MediaQuery(
      // Nested JS Material/Cupertino apps and Core pages share the host choice.
      data: MediaQuery.of(context)
          .copyWith(platformBrightness: Theme.of(context).brightness),
      child: Stack(
        fit: StackFit.expand,
        children: [
          navigator!,
          if (_showFps)
            Positioned(
              top: MediaQuery.paddingOf(context).top + 64,
              right: MediaQuery.paddingOf(context).right + 12,
              child: const IgnorePointer(child: _FpsIndicator()),
            ),
        ],
      ),
    ),
    home: Scaffold(
      key: _scaffoldKey,
      appBar: AppBar(
        toolbarHeight: 52,
        titleSpacing: 20,
        title: Row(
          children: [
            const Text(
              'FLAX',
              style: TextStyle(
                fontSize: 13,
                fontWeight: FontWeight.w700,
                letterSpacing: 3,
              ),
            ),
            const SizedBox(width: 16),
            Expanded(
              child: Text(
                widget.title,
                overflow: TextOverflow.ellipsis,
                style: const TextStyle(fontSize: 14),
              ),
            ),
          ],
        ),
        actions: [
          ...widget.actions,
          IconButton(
            key: const ValueKey('example-settings-toggle'),
            tooltip: 'Settings',
            onPressed: () => _scaffoldKey.currentState!.openEndDrawer(),
            icon: const Icon(Icons.settings_outlined),
          ),
          const SizedBox(width: 12),
        ],
      ),
      endDrawer: Drawer(
        width: 320,
        child: SafeArea(
          child: ListView(
            padding: const EdgeInsets.all(24),
            children: [
              Row(
                children: [
                  const Expanded(
                    child: Text(
                      'Settings',
                      style: TextStyle(
                        fontSize: 22,
                        fontWeight: FontWeight.w600,
                      ),
                    ),
                  ),
                  IconButton(
                    key: const ValueKey('example-settings-close'),
                    tooltip: 'Close settings',
                    onPressed: () =>
                        _scaffoldKey.currentState!.closeEndDrawer(),
                    icon: const Icon(Icons.close),
                  ),
                ],
              ),
              const SizedBox(height: 28),
              const Text('Appearance'),
              const SizedBox(height: 12),
              SegmentedButton<ThemeMode>(
                showSelectedIcon: false,
                segments: const [
                  ButtonSegment(
                    value: ThemeMode.system,
                    label: Text(
                      'System',
                      key: ValueKey('example-theme-system'),
                    ),
                  ),
                  ButtonSegment(
                    value: ThemeMode.light,
                    label: Text('Light', key: ValueKey('example-theme-light')),
                  ),
                  ButtonSegment(
                    value: ThemeMode.dark,
                    label: Text('Dark', key: ValueKey('example-theme-dark')),
                  ),
                ],
                selected: {_themeMode},
                onSelectionChanged: (selection) =>
                    setState(() => _themeMode = selection.single),
              ),
              const SizedBox(height: 24),
              SwitchListTile(
                key: const ValueKey('example-fps-toggle'),
                contentPadding: EdgeInsets.zero,
                title: const Text('Show FPS'),
                subtitle: const Text('Float above the page'),
                value: _showFps,
                onChanged: (value) => setState(() => _showFps = value),
              ),
            ],
          ),
        ),
      ),
      body: SafeArea(child: widget.child),
    ),
  );
}

class _FpsIndicator extends StatefulWidget {
  const _FpsIndicator();

  @override
  State<_FpsIndicator> createState() => _FpsIndicatorState();
}

class _FpsIndicatorState extends State<_FpsIndicator> {
  late final Timer _timer;
  int _count = 0;
  int _first = 0;
  int _last = 0;
  int? _fps;

  @override
  void initState() {
    super.initState();
    SchedulerBinding.instance.addTimingsCallback(_onTimings);
    // Passive timing reports avoid adding an animation workload to the example.
    _timer = Timer.periodic(const Duration(seconds: 1), (_) {
      final elapsed = _last - _first;
      final fps = _count < 2 || elapsed <= 0
          ? null
          : ((_count - 1) * 1000000 / elapsed).round();
      _count = 0;
      if (fps != _fps) setState(() => _fps = fps);
    });
  }

  void _onTimings(List<FrameTiming> timings) {
    for (final timing in timings) {
      _last = timing.timestampInMicroseconds(FramePhase.rasterFinish);
      if (_count == 0) _first = _last;
      _count++;
    }
  }

  @override
  void dispose() {
    _timer.cancel();
    SchedulerBinding.instance.removeTimingsCallback(_onTimings);
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final colors = Theme.of(context).colorScheme;
    final idle = _fps == null;
    return Semantics(
      container: true,
      label: idle ? 'Frame rate: idle' : 'Frame rate: $_fps FPS',
      excludeSemantics: true,
      child: DecoratedBox(
        key: const ValueKey('example-fps'),
        decoration: BoxDecoration(
          color: colors.surfaceContainerHigh.withValues(alpha: 0.96),
          borderRadius: BorderRadius.circular(14),
          border: Border.all(
            color: colors.outlineVariant.withValues(alpha: 0.6),
          ),
          boxShadow: [
            BoxShadow(
              color: colors.shadow.withValues(
                alpha: colors.brightness == Brightness.dark ? 0.18 : 0.08,
              ),
              blurRadius: 16,
              offset: const Offset(0, 4),
            ),
          ],
        ),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              ConstrainedBox(
                constraints: const BoxConstraints(minWidth: 42),
                child: Text(
                  _fps?.toString() ?? '—',
                  key: const ValueKey('example-fps-value'),
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    color: idle ? colors.onSurfaceVariant : colors.onSurface,
                    fontSize: 22,
                    height: 1,
                    fontWeight: FontWeight.w600,
                    fontFeatures: const [FontFeature.tabularFigures()],
                    decoration: TextDecoration.none,
                  ),
                ),
              ),
              const SizedBox(width: 10),
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisSize: MainAxisSize.min,
                children: [
                  Text(
                    'FPS',
                    style: TextStyle(
                      color: colors.onSurfaceVariant,
                      fontSize: 10,
                      height: 1.2,
                      fontWeight: FontWeight.w600,
                      letterSpacing: 1,
                      decoration: TextDecoration.none,
                    ),
                  ),
                  const SizedBox(height: 4),
                  Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      DecoratedBox(
                        decoration: BoxDecoration(
                          color: idle ? colors.outline : colors.primary,
                          shape: BoxShape.circle,
                        ),
                        child: const SizedBox(width: 5, height: 5),
                      ),
                      const SizedBox(width: 4),
                      Text(
                        idle ? 'Idle' : 'Live',
                        style: TextStyle(
                          color: colors.onSurfaceVariant,
                          fontSize: 10,
                          height: 1.2,
                          decoration: TextDecoration.none,
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
