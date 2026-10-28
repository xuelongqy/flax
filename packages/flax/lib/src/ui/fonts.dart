part of '../../bindings.dart';

// Native font ownership is independent of the JS runtime and shared AssetBundle.
class _FontResources extends ChangeNotifier implements FlaxFontResources {
  _FontResources([this._owners = 1]);
  int _owners;
  int _generation = 0;
  bool _mounted = false;
  bool _notificationPending = false;
  ui.FlaxFontCollection? _collection;

  @override
  ui.FlaxFontCollection get collection {
    if (_owners == 0) throw StateError('Font resources were released');
    return _collection ??= (ui.FlaxFontCollection()..onChanged = _changed);
  }

  void _changed() {
    if (!hasListeners || _notificationPending) return;
    _notificationPending = true;
    void notify() {
      _notificationPending = false;
      if (_owners > 0) notifyListeners();
    }

    final scheduler = SchedulerBinding.instance;
    if (scheduler.schedulerPhase == SchedulerPhase.idle) {
      scheduleMicrotask(notify);
    } else {
      scheduler.addPostFrameCallback((_) => notify());
      scheduler.ensureVisualUpdate();
    }
  }

  @override
  void retain({bool mounted = false}) {
    _owners++;
    _mounted |= mounted;
  }

  @override
  void release() {
    assert(_owners > 0);
    if (--_owners != 0) return;
    _generation++;
    _collection?.dispose();
    _collection = null;
    if (_mounted) SchedulerBinding.instance.scheduleFrame();
  }

  void add(Uint8List bytes, String family) {
    if (_owners == 0) throw StateError('Font resources were released');
    collection.addFont(bytes, family: family);
  }
}

class _FontResourceScope extends StatefulWidget {
  const _FontResourceScope({required this.resources, required this.child});
  final _FontResources resources;
  final Widget child;
  @override
  State<_FontResourceScope> createState() => _FontResourceScopeState();
}

class _FontResourceScopeState extends State<_FontResourceScope> {
  @override
  void initState() {
    super.initState();
    widget.resources.retain(mounted: true);
  }

  @override
  void didUpdateWidget(_FontResourceScope oldWidget) {
    super.didUpdateWidget(oldWidget);
    if (!identical(oldWidget.resources, widget.resources)) {
      widget.resources.retain(mounted: true);
      oldWidget.resources.release();
    }
  }

  @override
  Widget build(BuildContext context) => DefaultFontCollection(
    fontCollection: widget.resources.collection,
    fontResources: widget.resources,
    notifier: widget.resources,
    child: widget.child,
  );
  @override
  void dispose() {
    widget.resources.release();
    super.dispose();
  }
}

/// A module's native font resource, independent of its JavaScript runtime.
/// The registration owns one reference until [dispose]. Mounted [FlaxFontScope]s
/// hold independent references and may continue displaying the font after that.
class FlaxFont {
  FlaxFont._(this._bundle, this._manifest, this._name, this._resources) {
    _resources.retain();
    _start();
  }

  final _FontResources _resources;
  final AssetBundle _bundle;
  final String _manifest;
  final String _name;
  int _owners = 1;
  int _generation = 0;
  bool _disposed = false;
  bool _hadScope = false;
  Future<String>? _ready;

  /// The private logical family, available while this resource has an owner.
  Future<String> get ready {
    if (_owners == 0) {
      throw StateError('Font has no owner; mount a FlaxFontScope');
    }
    return _ready ?? _start();
  }

  Future<String> _start() {
    _generation = _resources._generation;
    final generation = _generation;
    final ready = _load(generation).then(
      (family) => family,
      onError: (Object error, StackTrace stack) {
        if (generation == _generation) _ready = null;
        Error.throwWithStackTrace(error, stack);
      },
    );
    _ready = ready;
    // Modules may register a font without ever awaiting it or constructing UI.
    _ready!.ignore();
    return ready;
  }

  void _retain() {
    _hadScope = true;
    if (_owners++ == 0) {
      if (_generation != _resources._generation) _ready = null;
      _resources.retain();
      _ready ?? _start();
    }
  }

  void _release() {
    assert(_owners > 0);
    if (--_owners != 0) return;
    _resources.release();
    if (_resources._owners == 0) _ready = null;
    if (_hadScope) SchedulerBinding.instance.scheduleFrame();
  }

  /// Releases the declaring module or caller's reference, once.
  /// Scopes keep their own references; a later scope can reload this resource.
  void dispose() {
    if (_disposed) return;
    _disposed = true;
    _release();
  }

  Future<String> _load(int generation) async {
    final declaration = jsonDecode(await _bundle.loadString(_manifest));
    if (declaration is! Map ||
        declaration['formatVersion'] != 1 ||
        declaration['fonts'] is! Map) {
      throw const FormatException('Invalid module font manifest');
    }
    final font = (declaration['fonts'] as Map)[_name];
    if (font is! Map ||
        font['sha256'] is! String ||
        !RegExp(r'^[a-f0-9]{64}$').hasMatch(font['sha256'] as String) ||
        font['asset'] is! String) {
      throw FormatException('Invalid module font: $_name');
    }
    final asset = font['asset'] as String;
    _checkFontAsset(asset);
    final digest = font['sha256'] as String;
    final data = await _bundle.load(asset);
    final bytes = data.buffer.asUint8List(
      data.offsetInBytes,
      data.lengthInBytes,
    );
    if (crypto.sha256.convert(bytes).toString() != digest) {
      throw StateError('Module font digest mismatch: $_name');
    }
    // A moved native subtree can outlive the declaring module's JS reference.
    if (_resources._owners == 0 || generation != _resources._generation) {
      throw StateError('Module font resources were released');
    }
    final declaredFamily = font['family'];
    if (declaredFamily != null &&
        (declaredFamily is! String ||
            declaredFamily.trim().isEmpty ||
            declaredFamily.contains('\x00'))) {
      throw FormatException('Invalid module font family: $_name');
    }
    final family = declaredFamily as String? ?? _name;
    _resources.add(bytes, family);
    return family;
  }
}

/// Starts loading one module font. The caller must dispose its registration.
/// Session module declarations release this reference automatically on shutdown.
FlaxFont registerFlaxFont(
  AssetBundle bundle, {
  required String manifest,
  required String name,
}) {
  _checkFontAsset(manifest);
  if (name.isEmpty) throw ArgumentError('Invalid module font name');
  return FlaxFont._(bundle, manifest, name, _FontResources(0));
}

void _checkFontAsset(String asset) {
  if (asset.isEmpty ||
      asset.contains(RegExp(r'[\\:\x00]')) ||
      asset
          .split('/')
          .any((part) => part.isEmpty || part == '.' || part == '..')) {
    throw ArgumentError('Invalid module font asset');
  }
}

/// Keeps custom fonts alive for a native subtree, including after Session close.
/// Await a font's ready family before using it in an ordinary TextStyle.
class FlaxFontScope extends StatefulWidget {
  const FlaxFontScope({required this.fonts, required this.child, super.key});

  final List<FlaxFont> fonts;
  final Widget child;

  @override
  State<FlaxFontScope> createState() => _FlaxFontScopeState();
}

class _FlaxFontScopeState extends State<FlaxFontScope> {
  Set<FlaxFont> _fonts = {};

  void _update() {
    final next = widget.fonts.toSet();
    for (final font in next.difference(_fonts)) {
      font._retain();
    }
    for (final font in _fonts.difference(next)) {
      font._release();
    }
    _fonts = next;
  }

  @override
  void initState() {
    super.initState();
    _update();
  }

  @override
  void didUpdateWidget(covariant FlaxFontScope oldWidget) {
    super.didUpdateWidget(oldWidget);
    _update();
  }

  @override
  Widget build(BuildContext context) {
    if (_fonts.isEmpty) return widget.child;
    final resources = _fonts.first._resources;
    if (_fonts.any((font) => !identical(font._resources, resources))) {
      throw ArgumentError('A font scope cannot combine different Sessions');
    }
    return DefaultFontCollection(
      fontCollection: resources.collection,
      fontResources: resources,
      notifier: resources,
      child: widget.child,
    );
  }

  @override
  void dispose() {
    for (final font in _fonts) {
      font._release();
    }
    super.dispose();
  }
}

extension _FontBindingCalls on _Session {
  Widget _traceNativeWidget(FlaxWidgetHost host, Map<String, Object?> values) {
    final tracing = Flax.traceForExperiment;
    final label = tracing == null ? '' : 'create:${host.node.definition.id}';
    tracing?.call(label, true);
    try {
      return _sandboxCall(
        host.node.definition.id,
        'construct',
        host.node.ctor,
        null,
        values,
        () => host.buildNative(values),
      ) as Widget;
    } finally {
      tracing?.call(label, false);
    }
  }

  Object createFontAwareObject(
    FlaxObjectBinding binding,
    String name,
    Map<String, Object?> values,
  ) {
    final tracing = Flax.traceForExperiment;
    final label = tracing == null ? '' : 'create:${binding.id}';
    tracing?.call(label, true);
    try {
      if (binding.id == 'flax.core/sdk_dart_ui#type:ParagraphBuilder' &&
          name.isEmpty) {
        return ui.ParagraphBuilder(
          values['style'] as ui.ParagraphStyle,
          fontCollection: _fontResources.collection,
        );
      }
      if (binding.id == 'flax.core/sdk_widgets#type:BannerPainter' &&
          name.isEmpty) {
        return Function.apply(BannerPainter.new, const [], {
          for (final entry in values.entries) Symbol(entry.key): entry.value,
          #fontCollection: _fontResources.collection,
        }) as BannerPainter;
      }
      final value = _sandboxCall(
        binding.id,
        'construct',
        name,
        null,
        values,
        () => binding.create(name, values),
      )!;
      if (value is Widget) {
        // Host-only SDK entry; applications cannot select another font domain.
        // ignore: invalid_use_of_internal_member
        Element.attachFlaxFontResources(value, _fontResources);
      }
      if (value is RenderParagraph) {
        // ignore: invalid_use_of_internal_member
        value.fontCollection = _fontResources.collection;
      }
      if (value is RenderEditable) {
        // ignore: invalid_use_of_internal_member
        value.fontCollection = _fontResources.collection;
      }
      if (value is TextPainter) {
        // ignore: invalid_use_of_internal_member
        value.fontCollection = _fontResources.collection;
      }
      if (value is FontLoader) {
        // ignore: invalid_use_of_internal_member
        value.fontCollection = _fontResources.collection;
      }
      return value;
    } finally {
      tracing?.call(label, false);
    }
  }

  Object? callFontAwareFunction(
    String id,
    Map<String, Object?> values,
    Object? Function() invoke,
  ) {
    if (id == 'flax.core/sdk_dart_ui#function:loadFontFromList') {
      return Future<void>.sync(() {
        requireOpen();
        _fontResources.collection.addFont(
          values['list'] as Uint8List,
          family: values['fontFamily'] as String? ?? '',
        );
      });
    }
    final Function function;
    switch (id) {
      case 'flax.core/sdk_painting#function:TextPainter.computeWidth':
        function = TextPainter.computeWidth;
      case 'flax.core/sdk_painting#function:TextPainter.computeMaxIntrinsicWidth':
        function = TextPainter.computeMaxIntrinsicWidth;
      default:
        return invoke();
    }
    return Function.apply(function, const [], {
      for (final entry in values.entries) Symbol(entry.key): entry.value,
      #fontCollection: _fontResources.collection,
    });
  }
}
