part of '../../sandbox_ui.dart';

Iterable<FlaxSelectedFile> _selectedImageFiles(ImageProvider provider) sync* {
  if (provider is FileImage && provider.file is FlaxSelectedFile) {
    yield provider.file as FlaxSelectedFile;
  } else if (provider is ResizeImage) {
    yield* _selectedImageFiles(provider.imageProvider);
  } else if (provider is ScrollAwareImageProvider) {
    yield* _selectedImageFiles(provider.imageProvider);
  }
}

final _selectedImageKeys = Expando<_SelectedImageKeys>();

final class _SelectedImageKeys {
  _SelectedImageKeys(this.file) {
    file.onChanged(evict);
    file.permission.onRevoke(evict);
  }
  final FlaxSelectedFile file;
  final keys = <Object>{};
  void evict() {
    final expired = keys.toList();
    keys.clear();
    for (final key in expired) {
      PaintingBinding.instance.imageCache.evict(key);
    }
  }
}

void _selectedImageKey(FlaxSelectedFile file, Object key) {
  file.requireActive();
  (_selectedImageKeys[file] ??= _SelectedImageKeys(file)).keys.add(key);
}

/// Required for host Flutter consumers of selected Files as well as JS bindings.
final class FlaxSelectedFileImage extends FileImage {
  // Keep the selected-resource type in the public constructor.
  // ignore: use_super_parameters
  const FlaxSelectedFileImage(FlaxSelectedFile file, {super.scale})
    : super(file);
  FlaxSelectedFile get _selected => file as FlaxSelectedFile;
  @override
  Future<FileImage> obtainKey(ImageConfiguration configuration) {
    _selectedImageKey(_selected, this);
    return SynchronousFuture(this);
  }

  @override
  void resolveStreamForKey(
    ImageConfiguration configuration,
    ImageStream stream,
    FileImage key,
    ImageErrorListener handleError,
  ) {
    _selectedImageKey(_selected, key);
    super.resolveStreamForKey(configuration, stream, key, handleError);
  }

  @override
  ImageStreamCompleter loadImage(FileImage key, ImageDecoderCallback decode) {
    _selected.requireActive();
    late _SelectedImageCompleter result;
    result = _SelectedImageCompleter(
      _selected,
      () => super.loadImage(key, (buffer, {getTargetSize}) async {
        _selected.requireActive();
        final codec = await decode(buffer, getTargetSize: getTargetSize);
        try {
          _selected.requireActive();
        } catch (_) {
          codec.dispose();
          rethrow;
        }
        result.animated = codec.frameCount > 1;
        return _SelectedImageCodec(codec, _selected);
      }),
    );
    return result;
  }

  // Flutter still routes the selected legacy loadBuffer operation through this API.
  @override
  // ignore: deprecated_member_use
  ImageStreamCompleter loadBuffer(
    FileImage key,
    // ignore: deprecated_member_use
    DecoderBufferCallback decode,
  ) => loadImage(key, (buffer, {getTargetSize}) => decode(buffer));
}

final class _FlaxSelectedResizeImage extends ResizeImage {
  const _FlaxSelectedResizeImage(
    super.imageProvider, {
    super.width,
    super.height,
    super.policy,
    super.allowUpscaling,
  });
  void _check(Object key) {
    for (final file in _selectedImageFiles(imageProvider)) {
      _selectedImageKey(file, key);
    }
  }

  @override
  Future<ResizeImageKey> obtainKey(ImageConfiguration configuration) {
    for (final file in _selectedImageFiles(imageProvider)) {
      file.requireActive();
    }
    return super.obtainKey(configuration).then((key) {
      _check(key);
      return key;
    });
  }

  @override
  void resolveStreamForKey(
    ImageConfiguration configuration,
    ImageStream stream,
    ResizeImageKey key,
    ImageErrorListener handleError,
  ) {
    _check(key);
    super.resolveStreamForKey(configuration, stream, key, handleError);
  }
}

final class _SelectedImageCodec implements ui.Codec {
  _SelectedImageCodec(this.source, this.file);
  final ui.Codec source;
  final FlaxSelectedFile file;
  bool _disposed = false;
  @override
  int get frameCount => source.frameCount;
  @override
  int get repetitionCount => source.repetitionCount;
  @override
  Future<ui.FrameInfo> getNextFrame() async {
    file.requireActive();
    if (_disposed) throw StateError('Disposed image codec');
    final frame = await source.getNextFrame();
    try {
      file.requireActive();
    } catch (_) {
      frame.image.dispose();
      rethrow;
    }
    return frame;
  }

  @override
  void dispose() {
    if (!_disposed) {
      _disposed = true;
      source.dispose();
    }
  }
}

/// Keeps live widgets current after writes while retaining ordinary static cache hits.
final class _SelectedImageCompleter extends ImageStreamCompleter {
  _SelectedImageCompleter(this.file, this.load);
  final FlaxSelectedFile file;
  final ImageStreamCompleter Function() load;
  ImageStreamCompleter? _source;
  ImageStreamListener? _listener;
  void Function()? _removeChange, _removeRevoke;
  int _generation = 0, _revision = -1;
  bool _hasImage = false;
  bool animated = true;

  @override
  void addListener(ImageStreamListener listener) {
    file.requireActive();
    if (!hasListeners) {
      _removeChange = file.onChanged(_reload);
      _removeRevoke = file.permission.onRevoke(() {
        _stopSource();
        if (hasListeners) {
          try {
            file.requireActive();
          } catch (error, stack) {
            reportError(exception: error, stack: stack, silent: true);
          }
        }
      });
      if (!_hasImage || _revision != file.imageRevision || animated) _reload();
    }
    super.addListener(listener);
  }

  void _reload() {
    _stopSource();
    file.requireActive();
    _revision = file.imageRevision;
    final generation = _generation;
    final source = _source = load();
    final listener = _listener = ImageStreamListener(
      (image, synchronous) {
        if (generation != _generation) {
          image.dispose();
          return;
        }
        try {
          file.requireActive();
        } catch (error, stack) {
          image.dispose();
          reportError(exception: error, stack: stack, silent: true);
          return;
        }
        _hasImage = true;
        setImage(image);
      },
      onChunk: reportImageChunkEvent,
      onError: (Object error, StackTrace? stack) {
        if (generation == _generation) {
          reportError(exception: error, stack: stack, silent: true);
        }
      },
    );
    source.addListener(listener);
  }

  void _stopSource() {
    _generation++;
    final source = _source, listener = _listener;
    _source = null;
    _listener = null;
    if (source != null && listener != null) {
      source.addEphemeralErrorListener((_, _) {});
      source.removeListener(listener);
    }
  }

  @override
  void removeListener(ImageStreamListener listener) {
    super.removeListener(listener);
    if (!hasListeners) {
      _stopSource();
      _removeChange?.call();
      _removeRevoke?.call();
      _removeChange = null;
      _removeRevoke = null;
    }
  }
}

Image sandboxImageFile(
  FlaxSandboxContext c,
  FlaxFilePolicy p,
  File file, {
  Key? key,
  double scale = 1.0,
  ImageFrameBuilder? frameBuilder,
  ImageErrorWidgetBuilder? errorBuilder,
  String? semanticLabel,
  bool excludeFromSemantics = false,
  double? width,
  double? height,
  Color? color,
  Animation<double>? opacity,
  BlendMode? colorBlendMode,
  BoxFit? fit,
  AlignmentGeometry alignment = Alignment.center,
  ImageRepeat repeat = ImageRepeat.noRepeat,
  Rect? centerSlice,
  bool matchTextDirection = false,
  bool gaplessPlayback = false,
  bool isAntiAlias = false,
  FilterQuality filterQuality = FilterQuality.medium,
  int? cacheWidth,
  int? cacheHeight,
}) {
  p.requireFile(c.scope, file);
  ImageProvider provider = file is FlaxSelectedFile
      ? FlaxSelectedFileImage(file, scale: scale)
      : FileImage(file, scale: scale);
  if (cacheWidth != null || cacheHeight != null) {
    provider = file is FlaxSelectedFile
        ? _FlaxSelectedResizeImage(
            provider,
            width: cacheWidth,
            height: cacheHeight,
          )
        : ResizeImage(provider, width: cacheWidth, height: cacheHeight);
  }
  return Image(
    image: provider,
    key: key,
    frameBuilder: frameBuilder,
    errorBuilder: errorBuilder,
    semanticLabel: semanticLabel,
    excludeFromSemantics: excludeFromSemantics,
    width: width,
    height: height,
    color: color,
    opacity: opacity,
    colorBlendMode: colorBlendMode,
    fit: fit,
    alignment: alignment,
    repeat: repeat,
    centerSlice: centerSlice,
    matchTextDirection: matchTextDirection,
    gaplessPlayback: gaplessPlayback,
    isAntiAlias: isAntiAlias,
    filterQuality: filterQuality,
  );
}
