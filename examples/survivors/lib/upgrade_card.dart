import 'package:flax/flax.dart';
import 'package:flutter/widgets.dart';
import 'package:material_ui/material_ui.dart' show TextButton;

const _painterType = FlaxTypeRef(
  'object',
  id: 'flax.core/sdk_rendering#type:CustomPainter',
);

final upgradeCardPlugin = FlaxBindingPlugin(
  id: 'lumen-outpost.upgrade',
  jsModules: const {},
  bindingModules: const [
    FlaxBindingModule(
      'Lumen Outpost upgrade card',
      [
        FlaxWidgetBinding('lumen-outpost/upgrade#Card', {
          '': [
            FlaxParameter.required('title', flaxStringType),
            FlaxParameter.required('description', flaxStringType),
            FlaxParameter.required('rankLabel', flaxStringType),
            FlaxParameter.required('rank', flaxIntType),
            FlaxParameter.required('maxRank', flaxIntType),
            FlaxParameter.required('index', flaxIntType),
            FlaxParameter.required('mobile', flaxBoolType),
            FlaxParameter.required('reducedMotion', flaxBoolType),
            FlaxParameter.required('height', flaxDoubleType),
            FlaxParameter.required('icon', flaxWidgetType),
            FlaxParameter.required('actionPainter', _painterType),
            FlaxParameter.required('glowPainter', _painterType),
            FlaxParameter.required('onPressed', flaxVoidCallbackType),
          ],
        }, _UpgradeCardHost.new),
      ],
      moduleId: 'lumen-outpost/upgrade',
      uiProtocol: flaxBindingVersion,
      requiredCapabilities: [],
    ),
  ],
);

class _UpgradeCardHost extends FlaxWidgetHost {
  _UpgradeCardHost(super.node);

  @override
  Widget buildNative(Map<String, Object?> values) => _UpgradeCard(
    title: values['title'] as String,
    description: values['description'] as String,
    rankLabel: values['rankLabel'] as String,
    rank: values['rank'] as int,
    maxRank: values['maxRank'] as int,
    index: values['index'] as int,
    mobile: values['mobile'] as bool,
    reducedMotion: values['reducedMotion'] as bool,
    height: values['height'] as double,
    icon: values['icon'] as Widget,
    actionPainter: values['actionPainter'] as CustomPainter,
    glowPainter: values['glowPainter'] as CustomPainter,
    onPressed: values['onPressed'] as VoidCallback,
  );
}

class _UpgradeCard extends StatefulWidget {
  const _UpgradeCard({
    required this.title,
    required this.description,
    required this.rankLabel,
    required this.rank,
    required this.maxRank,
    required this.index,
    required this.mobile,
    required this.reducedMotion,
    required this.height,
    required this.icon,
    required this.actionPainter,
    required this.glowPainter,
    required this.onPressed,
  });

  final String title, description, rankLabel;
  final int rank, maxRank, index;
  final bool mobile, reducedMotion;
  final double height;
  final Widget icon;
  final CustomPainter actionPainter, glowPainter;
  final VoidCallback onPressed;

  @override
  State<_UpgradeCard> createState() => _UpgradeCardState();
}

class _UpgradeCardState extends State<_UpgradeCard> {
  static const _cyan = Color(0xff63f5f4);
  static const _white = Color(0xffedf8ff);
  static const _dim = Color(0xff9fb6c3);
  static const _unlit = Color(0xff31505d);
  static final _style = TextButton.styleFrom(
    minimumSize: const Size(48, 48),
    padding: EdgeInsets.zero,
    foregroundColor: _cyan,
    overlayColor: const Color(0x00000000),
    shape: const BeveledRectangleBorder(
      borderRadius: BorderRadius.all(Radius.circular(12)),
    ),
  );

  late bool _focused = widget.index == 0;
  bool _hovered = false;
  bool _pressed = false;
  late final _opacity = ValueNotifier<double>(_focused ? 0.8 : 0);

  void _updateGlow({bool? focused, bool? hovered, bool? pressed}) {
    if (!mounted) return;
    _focused = focused ?? _focused;
    _hovered = hovered ?? _hovered;
    _pressed = pressed ?? _pressed;
    _opacity.value = _pressed
        ? 1
        : _focused
        ? 0.8
        : _hovered
        ? 0.55
        : 0;
  }

  @override
  void dispose() {
    _opacity.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final compact = widget.height < 210;
    final body = SizedBox(
      height: widget.height,
      child: Column(
        children: [
          if (!widget.mobile)
            Row(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                Text(
                  '[${widget.index + 1}]',
                  style: const TextStyle(color: _dim, fontSize: 11),
                ),
              ],
            ),
          Expanded(child: Center(child: widget.icon)),
          Text(
            widget.title,
            textAlign: TextAlign.center,
            maxLines: 2,
            style: TextStyle(
              color: _white,
              fontSize: compact ? 17 : 20,
              fontWeight: FontWeight.bold,
              letterSpacing: 0.5,
            ),
          ),
          const SizedBox(height: 8),
          SizedBox(
            height: compact ? 42 : 52,
            child: Center(
              child: Text(
                widget.description,
                textAlign: TextAlign.center,
                maxLines: 3,
                style: const TextStyle(color: _dim, fontSize: 12),
              ),
            ),
          ),
          const SizedBox(height: 8),
          if (widget.maxRank > 0)
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                for (var i = 0; i < widget.maxRank; i++)
                  Padding(
                    padding: const EdgeInsets.all(2),
                    child: SizedBox(
                      width: 17,
                      height: 5,
                      child: ColoredBox(
                        color: i < widget.rank ? _cyan : _unlit,
                      ),
                    ),
                  ),
              ],
            ),
          const SizedBox(height: 5),
          Text(
            widget.rankLabel,
            style: const TextStyle(color: _dim, fontSize: 10),
          ),
        ],
      ),
    );
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 6),
      child: Semantics(
        label: '${widget.index + 1}: ${widget.title}',
        child: Listener(
          onPointerDown: (_) => _updateGlow(pressed: true),
          onPointerUp: (_) => _updateGlow(pressed: false),
          onPointerCancel: (_) => _updateGlow(pressed: false),
          child: TextButton(
            style: _style,
            autofocus: widget.index == 0,
            onPressed: widget.onPressed,
            onHover: (value) => _updateGlow(hovered: value),
            onFocusChange: (value) => _updateGlow(focused: value),
            child: Stack(
              children: [
                CustomPaint(
                  painter: widget.actionPainter,
                  child: Padding(
                    padding: const EdgeInsets.all(12),
                    child: body,
                  ),
                ),
                Positioned.fill(
                  child: IgnorePointer(
                    child: ValueListenableBuilder<double>(
                      valueListenable: _opacity,
                      child: CustomPaint(painter: widget.glowPainter),
                      builder: (context, opacity, child) => AnimatedOpacity(
                        opacity: opacity,
                        duration: widget.reducedMotion
                            ? Duration.zero
                            : const Duration(milliseconds: 140),
                        child: child,
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
