part of '../../bindings.dart';

class _DevelopmentView extends StatefulWidget {
  const _DevelopmentView({required this.builder});
  final Widget Function(VoidCallback onLoaded) builder;

  @override
  State<_DevelopmentView> createState() => _DevelopmentViewState();
}

class _DevelopmentViewState extends State<_DevelopmentView>
    with SingleTickerProviderStateMixin {
  int _generation = 0;
  bool _loading = true;
  bool _focused = false;
  bool _hovered = false;
  Offset? _position;
  late final AnimationController _rotation;

  @override
  void initState() {
    super.initState();
    _rotation = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 900),
    );
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    _animateLoading();
  }

  void _animateLoading() {
    if (_loading &&
        !(MediaQuery.maybeOf(context)?.disableAnimations ?? false)) {
      if (!_rotation.isAnimating) _rotation.repeat();
    } else {
      _rotation.stop();
    }
  }

  void _reload() {
    if (_loading) return;
    setState(() {
      _loading = true;
      _generation++;
    });
    _animateLoading();
  }

  void _loaded(int generation) {
    // A child can finish synchronously during its ancestor's build.
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (mounted && generation == _generation && _loading) {
        setState(() => _loading = false);
        _animateLoading();
      }
    });
  }

  @override
  void dispose() {
    _rotation.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final generation = _generation;
    final media = MediaQuery.maybeOf(context);
    final textColor = DefaultTextStyle.of(context).style.color;
    // A forced-light host can run on a dark desktop.
    final dark = textColor == null
        ? media?.platformBrightness == Brightness.dark
        : textColor.computeLuminance() > 0.5;
    final highlighted = _hovered || _focused;
    final surface = dark ? const Color(0xff2b3038) : const Color(0xfffcfdff);
    final foreground = highlighted || _loading
        ? (dark ? const Color(0xff9adac7) : const Color(0xff247565))
        : (dark ? const Color(0xffc6d0db) : const Color(0xff546273));
    return Stack(
      fit: StackFit.passthrough,
      children: [
        KeyedSubtree(
          key: ValueKey(generation),
          child: widget.builder(() => _loaded(generation)),
        ),
        Positioned.fill(
          child: Padding(
            padding:
                (media?.padding ?? EdgeInsets.zero) +
                (media?.viewInsets ?? EdgeInsets.zero),
            child: LayoutBuilder(
              builder: (context, constraints) {
                const size = 48.0;
                final maxX = (constraints.maxWidth - size)
                    .clamp(0.0, double.infinity)
                    .toDouble();
                final maxY = (constraints.maxHeight - size)
                    .clamp(0.0, double.infinity)
                    .toDouble();
                Offset bounded(Offset value) => Offset(
                  value.dx.clamp(0.0, maxX).toDouble(),
                  value.dy.clamp(0.0, maxY).toDouble(),
                );
                final position = bounded(
                  _position ?? Offset(maxX - 16, maxY - 16),
                );
                return Stack(
                  children: [
                    Positioned(
                      left: position.dx,
                      top: position.dy,
                      child: Semantics(
                        label: _loading
                            ? 'Reloading Flax application'
                            : 'Reload Flax application',
                        hint: 'Resets this session state. Drag to move.',
                        button: true,
                        enabled: !_loading,
                        onTap: _loading ? null : _reload,
                        child: FocusableActionDetector(
                          enabled: !_loading,
                          shortcuts: const {
                            SingleActivator(LogicalKeyboardKey.enter):
                                ActivateIntent(),
                            SingleActivator(LogicalKeyboardKey.space):
                                ActivateIntent(),
                          },
                          actions: {
                            ActivateIntent: CallbackAction<ActivateIntent>(
                              onInvoke: (_) {
                                _reload();
                                return null;
                              },
                            ),
                          },
                          onShowFocusHighlight: (focused) =>
                              setState(() => _focused = focused),
                          onShowHoverHighlight: (hovered) =>
                              setState(() => _hovered = hovered),
                          child: ExcludeSemantics(
                            child: MouseRegion(
                              cursor: _loading
                                  ? SystemMouseCursors.progress
                                  : SystemMouseCursors.click,
                              child: GestureDetector(
                                behavior: HitTestBehavior.opaque,
                                onTap: _loading ? null : _reload,
                                onPanUpdate: (details) {
                                  final current = bounded(
                                    _position ?? position,
                                  );
                                  setState(() {
                                    _position = bounded(
                                      current + details.delta,
                                    );
                                  });
                                },
                                child: SizedBox.square(
                                  dimension: size,
                                  child: Padding(
                                    padding: const EdgeInsets.all(4),
                                    child: AnimatedContainer(
                                      duration: media?.disableAnimations == true
                                          ? Duration.zero
                                          : const Duration(milliseconds: 120),
                                      decoration: BoxDecoration(
                                        color: surface,
                                        borderRadius: BorderRadius.circular(12),
                                        border: Border.all(
                                          color: highlighted
                                              ? foreground
                                              : (dark
                                                    ? const Color(0xff444d59)
                                                    : const Color(0xffe3e8ef)),
                                        ),
                                        boxShadow: [
                                          BoxShadow(
                                            color: dark
                                                ? const Color(0x30000000)
                                                : const Color(0x140e2438),
                                            blurRadius: highlighted ? 18 : 12,
                                            offset: const Offset(0, 3),
                                          ),
                                        ],
                                      ),
                                      child: Center(
                                        child: SizedBox.square(
                                          dimension: 20,
                                          child: CustomPaint(
                                            painter: _ReloadGlyph(
                                              foreground,
                                              _loading,
                                              _rotation,
                                            ),
                                          ),
                                        ),
                                      ),
                                    ),
                                  ),
                                ),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ],
                );
              },
            ),
          ),
        ),
      ],
    );
  }
}

class _ReloadGlyph extends CustomPainter {
  _ReloadGlyph(this.color, this.loading, this.rotation)
    : super(repaint: rotation);

  final Color color;
  final bool loading;
  final Animation<double> rotation;

  @override
  void paint(Canvas canvas, Size size) {
    canvas.scale(size.width / 20, size.height / 20);
    canvas.translate(10, 10);
    if (loading) canvas.rotate(rotation.value * math.pi * 2);
    final stroke = Paint()
      ..color = color
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1.8
      ..strokeCap = StrokeCap.round
      ..strokeJoin = StrokeJoin.round;
    canvas.drawArc(
      const Rect.fromLTWH(-7, -7, 14, 14),
      loading ? -math.pi / 2 : math.pi / 5,
      loading ? math.pi * 1.4 : math.pi * 1.6,
      false,
      stroke,
    );
    if (!loading) {
      canvas.drawPath(
        Path()
          ..moveTo(6.5, -7.5)
          ..lineTo(6.5, -3.5)
          ..lineTo(2.5, -3.5),
        stroke,
      );
    }
  }

  @override
  bool shouldRepaint(_ReloadGlyph oldDelegate) =>
      color != oldDelegate.color ||
      loading != oldDelegate.loading ||
      rotation != oldDelegate.rotation;
}
