part of '../../bindings.dart';

/// Opaque image shared by renderer providers; JavaScript owns its bitmap lifetime.
abstract class FlaxImageBitmapResource {
  ui.Image get image;
}

const flaxImageBitmapType = 'flax.core/flutter#type:FlaxImageBitmapResource';

class _SharedImage extends FlaxImageBitmapResource {
  _SharedImage(this.pixels, this.width, this.height) {
    if (width <= 0 ||
        height <= 0 ||
        width * height > 0x7fffffff ~/ 4 ||
        pixels.length != width * height * 4) {
      throw ArgumentError('Invalid image pixel dimensions');
    }
  }
  final Uint8List pixels;
  final int width, height;
  ui.Image? _image;
  bool closed = false;
  @override
  ui.Image get image {
    if (closed) throw StateError('ImageBitmap is closed');
    return _image ??= FlaxImageCodec.fromPixels(pixels, width, height);
  }

  void dispose() {
    if (closed) return;
    closed = true;
    _image?.dispose();
    _image = null;
  }
}

Future<List<Object>> _decodeSharedImage(
  Uint8List bytes,
  bool convert,
  bool orient,
) => Isolate.run(
  () => FlaxImageCodec.decode(bytes, convert: convert, orient: orient),
);
Future<Uint8List> _transformSharedImage(Uint8List pixels, List<int> options) =>
    Isolate.run(() => FlaxImageCodec.transform(pixels, options));
Future<Uint8List> _encodeSharedImage(
  Uint8List pixels,
  int width,
  int height,
  String type,
  int quality,
) => Isolate.run(
  () => FlaxImageCodec.encode(pixels, width, height, type, quality),
);

class _SharedImages {
  _SharedImages(this.context, this.deliver);
  final FlaxHostContext context;
  final void Function(int, bool, FlaxJsValue) deliver;
  final images = <int, _SharedImage>{};
  int next = 1;
  bool closed = false;
  int retain(Uint8List pixels, int width, int height) {
    if (closed) throw StateError('The image session closed');
    final id = next++;
    images[id] = _SharedImage(pixels, width, height);
    return id;
  }

  _SharedImage image(int id) =>
      images[id] ?? (throw StateError('ImageBitmap is closed'));
  void release(int id) => images.remove(id)?.dispose();
  void start(List<FlaxJsValue> args) {
    final id = (args[1] as FlaxJsNumber).value.toInt();
    final operation = (args[2] as FlaxJsString).value;
    // Snapshot bytes before the asynchronous codec can yield to application code.
    final pixels = context.runtime.readBytes(args[3] as FlaxJsObject);
    final Future<Object> work;
    if (operation == 'decode') {
      final convert = (args[4] as FlaxJsBoolean).value,
          orient = (args[5] as FlaxJsBoolean).value;
      work = _decodeSharedImage(pixels, convert, orient).then(
        (decoded) => _SharedImage(
          decoded[0] as Uint8List,
          decoded[1] as int,
          decoded[2] as int,
        ),
      );
    } else if (operation == 'transform') {
      final options = (jsonDecode((args[4] as FlaxJsString).value) as List)
          .map((x) => (x as num).toInt())
          .toList();
      work = _transformSharedImage(
        pixels,
        options,
      ).then((bytes) => _SharedImage(bytes, options[6], options[7]));
    } else if (operation == 'encode') {
      final width = (args[4] as FlaxJsNumber).value.toInt(),
          height = (args[5] as FlaxJsNumber).value.toInt();
      final type = (args[6] as FlaxJsString).value,
          quality = ((args[7] as FlaxJsNumber).value * 100).round();
      work = _encode(pixels, width, height, type, quality);
    } else {
      throw ArgumentError('Unknown shared image operation: $operation');
    }
    work.then(
      (value) => settle(id, true, value),
      onError: (Object error) => settle(id, false, error.toString()),
    );
  }

  Future<Uint8List> _encode(
    Uint8List pixels,
    int width,
    int height,
    String type,
    int quality,
  ) => _encodeSharedImage(pixels, width, height, type, quality);

  void settle(int id, bool ok, Object value) {
    if (closed || !context.isActive) {
      if (value is _SharedImage) value.dispose();
      return;
    }
    context.enqueue(() {
      if (closed) {
        if (value is _SharedImage) value.dispose();
        return;
      }
      FlaxJsValue result = const FlaxJsUndefined();
      try {
        if (value is _SharedImage) {
          final key = next++;
          images[key] = value;
          final object = context.runtime.evaluate(
            '({id:$key,width:${value.width},height:${value.height}})',
          ) as FlaxJsObject;
          final bytes = context.runtime.createArrayBuffer(value.pixels);
          try {
            object.setProperty('pixels', bytes);
          } finally {
            bytes.release();
          }
          result = object;
        } else if (value is Uint8List) {
          result = context.runtime.createArrayBuffer(value);
        } else {
          result = FlaxJsString(value.toString());
        }
        deliver(id, ok, result);
      } catch (error, stack) {
        context.report(error, stack);
      } finally {
        if (result is FlaxJsObject) result.release();
      }
    });
  }

  void close() {
    if (closed) return;
    closed = true;
    for (final image in images.values) {
      image.dispose();
    }
    images.clear();
  }
}
