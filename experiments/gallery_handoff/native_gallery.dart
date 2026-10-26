// ignore_for_file: depend_on_referenced_packages

import 'dart:math' as math;

import 'package:material_ui/material_ui.dart';

// Mirror the aggregate entrance, including its Builder callbacks and Material fork.
// The experiment checks text, layout, render objects and pixels against the JS page.
Widget nativeGallery() => MaterialApp(
  title: 'Flax Playground',
  debugShowCheckedModeBanner: false,
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
  home: _GalleryHome(),
);

const _entries = [
  (
    id: 'core',
    title: 'Core & signals',
    mark: '01',
    color: 0xff245c48,
    tag: 'START HERE',
    description:
        'Reactive state, computed values and real Flutter composition.',
  ),
  (
    id: 'material',
    title: 'Material UI',
    mark: 'M',
    color: 0xff54683b,
    tag: '5 COLLECTIONS',
    description: 'Expressive buttons, forms, selection, feedback and surfaces.',
  ),
  (
    id: 'cupertino',
    title: 'Cupertino UI',
    mark: 'C',
    color: 0xff456da7,
    tag: '4 COLLECTIONS',
    description:
        'Thoughtful iOS-style controls, grouped lists and native overlays.',
  ),
  (
    id: 'canvas',
    title: 'Canvas 2D',
    mark: '2D',
    color: 0xffa36a4b,
    tag: 'CREATIVE TOOLS',
    description:
        'Shape a light sculpture, animate it and capture a PNG postcard.',
  ),
  (
    id: 'fetch',
    title: 'Fetch',
    mark: '↗',
    color: 0xff7c6494,
    tag: 'CONNECT',
    description: 'Send requests, inspect responses and cancel unfinished work.',
  ),
  (
    id: 'websocket',
    title: 'WebSocket',
    mark: '↔',
    color: 0xff337c7e,
    tag: 'REAL TIME',
    description: 'Open a connection and exchange messages with an echo server.',
  ),
  (
    id: 'storage',
    title: 'Local storage',
    mark: 'S',
    color: 0xff9a7041,
    tag: 'PERSIST',
    description: 'Save a note, keep a counter and pick up where you left off.',
  ),
];

({Color background, Color surface, Color ink, Color muted, Color green})
_palette(BuildContext context) =>
    MediaQuery.platformBrightnessOf(context) == Brightness.dark
    ? (
        background: const Color(0xff151c19),
        surface: const Color(0xff202b25),
        ink: const Color(0xffe4eee7),
        muted: const Color(0xffb1c1b6),
        green: const Color(0xffa2d6b5),
      )
    : (
        background: const Color(0xfff5f5f0),
        surface: const Color(0xffffffff),
        ink: const Color(0xff202d29),
        muted: const Color(0xff66736b),
        green: const Color(0xff245c48),
      );

Widget _text(String value, double size, Color color, [bool bold = false]) =>
    Text(
      value,
      style: TextStyle(
        fontSize: size,
        color: color,
        height: 1.45,
        fontWeight: bold ? FontWeight.w600 : null,
      ),
    );

class _GalleryHome extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final colors = _palette(context);
    return Scaffold(
      backgroundColor: colors.background,
      body: LayoutBuilder(
        builder: (_, constraints) {
          final narrow = constraints.maxWidth < 680;
          final width = math.min(
            constraints.maxWidth - (narrow ? 32 : 64),
            1120.0,
          );
          final columns = narrow ? 1 : (constraints.maxWidth >= 1000 ? 3 : 2);
          final cardWidth = (width - 20 * (columns - 1)) / columns;
          return SingleChildScrollView(
            child: Center(
              child: ConstrainedBox(
                constraints: const BoxConstraints(maxWidth: 1184),
                child: Padding(
                  padding: EdgeInsets.all(narrow ? 16 : 32),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Container(
                        width: width,
                        padding: EdgeInsets.all(narrow ? 26 : 40),
                        decoration: BoxDecoration(
                          color: const Color(0xff245c48),
                          borderRadius: BorderRadius.circular(28),
                        ),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              'FLAX / THE PLAYGROUND',
                              style: TextStyle(
                                color: const Color(0xffc0d7ba),
                                fontSize: 12,
                                fontWeight: FontWeight.w600,
                                letterSpacing: 2,
                              ),
                            ),
                            SizedBox(height: 24),
                            Text(
                              'A little JavaScript.\nA lot of Flutter.',
                              style: TextStyle(
                                color: const Color(0xffffffff),
                                fontSize: narrow ? 34 : 52,
                                height: 1.12,
                                fontWeight: FontWeight.w600,
                                letterSpacing: -1.5,
                              ),
                            ),
                            SizedBox(height: 20),
                            Text(
                              'Real widgets. Familiar patterns. Room to explore.',
                              style: TextStyle(
                                color: const Color(0xffd3e3ce),
                                fontSize: 16,
                                height: 1.5,
                              ),
                            ),
                            SizedBox(height: 26),
                            Wrap(
                              spacing: 10,
                              runSpacing: 10,
                              children: [
                                badge('7 modules'),
                                badge('Live interactions'),
                                badge('Native rendering'),
                              ],
                            ),
                          ],
                        ),
                      ),
                      SizedBox(height: 36),
                      _text('Choose your playground', 26, colors.ink, true),
                      SizedBox(height: 8),
                      _text(
                        'Open a module. Try the controls. Make it your own.',
                        15,
                        colors.muted,
                      ),
                      SizedBox(height: 24),
                      Wrap(
                        spacing: 20,
                        runSpacing: 20,
                        children: _entries.map((entry) {
                          // Entrance-only mirror: module interactions use the real
                          // seven-module JS tour in the separate acceptance runner.
                          void open() => Navigator.of(context).push<void>(
                            MaterialPageRoute(
                              builder: (_) => Scaffold(
                                appBar: AppBar(title: Text(entry.title)),
                                body: Center(child: Text(entry.description)),
                              ),
                            ),
                          );
                          return SizedBox(
                            width: cardWidth,
                            child: Semantics(
                              button: true,
                              label: 'Explore ${entry.title}',
                              onTap: open,
                              excludeSemantics: true,
                              child: Card(
                                margin: EdgeInsets.zero,
                                elevation: 0,
                                color: colors.surface,
                                shape: RoundedRectangleBorder(
                                  borderRadius: BorderRadius.circular(20),
                                ),
                                child: InkWell(
                                  key: ValueKey('open-${entry.id}'),
                                  borderRadius: BorderRadius.circular(20),
                                  onTap: open,
                                  child: Padding(
                                    padding: EdgeInsets.all(24),
                                    child: Column(
                                      crossAxisAlignment:
                                          CrossAxisAlignment.start,
                                      children: [
                                        Row(
                                          children: [
                                            Container(
                                              width: 44,
                                              height: 44,
                                              alignment: Alignment.center,
                                              decoration: BoxDecoration(
                                                color: Color(entry.color),
                                                borderRadius:
                                                    BorderRadius.circular(13),
                                              ),
                                              child: _text(
                                                entry.mark,
                                                21,
                                                const Color(0xffffffff),
                                                true,
                                              ),
                                            ),
                                            SizedBox(width: 14),
                                            Expanded(
                                              child: _text(
                                                entry.tag,
                                                10,
                                                colors.muted,
                                                true,
                                              ),
                                            ),
                                            _text('↗', 23, colors.muted),
                                          ],
                                        ),
                                        SizedBox(height: 24),
                                        _text(
                                          entry.title,
                                          23,
                                          colors.ink,
                                          true,
                                        ),
                                        SizedBox(height: 8),
                                        _text(
                                          entry.description,
                                          14,
                                          colors.muted,
                                        ),
                                        SizedBox(height: 18),
                                        _text(
                                          'Explore ${entry.title}',
                                          13,
                                          colors.green,
                                          true,
                                        ),
                                      ],
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          );
                        }).toList(),
                      ),
                      SizedBox(height: 32),
                      _text(
                        'One gallery. Independent examples. Built with Flax.',
                        12,
                        colors.muted,
                      ),
                    ],
                  ),
                ),
              ),
            ),
          );
        },
      ),
    );
  }

  Widget badge(String value) => Container(
    padding: EdgeInsets.symmetric(horizontal: 12, vertical: 7),
    decoration: BoxDecoration(
      color: const Color(0xff386c56),
      borderRadius: BorderRadius.circular(30),
    ),
    child: _text(value, 12, const Color(0xffffffff)),
  );
}
