import 'dart:convert';
import 'dart:math' as math;
import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flutter/painting.dart';
import 'package:path_drawing/path_drawing.dart';

import 'surface.dart';

const canvasCommandMagic = 0x31435643;
const canvasCommandVersion = 1;

const opSave = 1;
const opRestore = 2;
const opReset = 3;
const opSetTransform = 4;
const opTransform = 5;
const opTranslate = 6;
const opRotate = 7;
const opScale = 8;
const opResetTransform = 9;
const opFillRect = 10;
const opStrokeRect = 11;
const opClearRect = 12;
const opFillPath = 13;
const opStrokePath = 14;
const opClipPath = 15;
const opFillText = 16;
const opStrokeText = 17;
const opDrawImage = 18;
const opPutImageData = 19;
const opSetFillColor = 20;
const opSetStrokeColor = 21;
const opSetFillLinear = 22;
const opSetStrokeLinear = 23;
const opSetFillRadial = 24;
const opSetStrokeRadial = 25;
const opSetFillConic = 26;
const opSetStrokeConic = 27;
const opSetGlobalAlpha = 28;
const opSetComposite = 29;
const opSetLineWidth = 30;
const opSetLineCap = 31;
const opSetLineJoin = 32;
const opSetMiterLimit = 33;
const opSetLineDash = 34;
const opSetLineDashOffset = 35;
const opSetShadow = 36;
const opSetSmoothing = 37;
const opSetFilter = 38;
const opSetFont = 39;
const opSetTextAlign = 40;
const opSetTextBaseline = 41;
const opSetDirection = 42;
const opSetLetterSpacing = 43;
const opSetWordSpacing = 44;
const opSetFillPattern = 45;
const opSetStrokePattern = 46;

const pathMove = 1;
const pathLine = 2;
const pathClose = 3;
const pathRect = 4;
const pathCubic = 5;
const pathQuad = 6;
const pathArc = 7;
const pathEllipse = 8;
const pathArcTo = 9;
const pathRoundRect = 10;
const pathSvg = 11;
const pathAdd = 12;
const pathExtend = 13;

const blends = {
  'source-over': BlendMode.srcOver,
  'source-in': BlendMode.srcIn,
  'source-out': BlendMode.srcOut,
  'source-atop': BlendMode.srcATop,
  'destination-over': BlendMode.dstOver,
  'destination-in': BlendMode.dstIn,
  'destination-out': BlendMode.dstOut,
  'destination-atop': BlendMode.dstATop,
  'xor': BlendMode.xor,
  'copy': BlendMode.src,
  'lighter': BlendMode.plus,
  'multiply': BlendMode.multiply,
  'screen': BlendMode.screen,
  'overlay': BlendMode.overlay,
  'darken': BlendMode.darken,
  'lighten': BlendMode.lighten,
  'color-dodge': BlendMode.colorDodge,
  'color-burn': BlendMode.colorBurn,
  'hard-light': BlendMode.hardLight,
  'soft-light': BlendMode.softLight,
  'difference': BlendMode.difference,
  'exclusion': BlendMode.exclusion,
  'hue': BlendMode.hue,
  'saturation': BlendMode.saturation,
  'color': BlendMode.color,
  'luminosity': BlendMode.luminosity,
};

class Affine {
  Affine([
    this.a = 1,
    this.b = 0,
    this.c = 0,
    this.d = 1,
    this.e = 0,
    this.f = 0,
  ]);
  double a, b, c, d, e, f;
  Affine clone() => Affine(a, b, c, d, e, f);
  Affine multiplied(Affine other) => Affine(
    a * other.a + c * other.b,
    b * other.a + d * other.b,
    a * other.c + c * other.d,
    b * other.c + d * other.d,
    a * other.e + c * other.f + e,
    b * other.e + d * other.f + f,
  );
  Affine inverted() {
    final det = a * d - b * c;
    if (det.abs() < 1e-12) return Affine();
    return Affine(
      d / det,
      -b / det,
      -c / det,
      a / det,
      (c * f - d * e) / det,
      (b * e - a * f) / det,
    );
  }

  Float64List get storage =>
      Float64List.fromList([a, b, 0, 0, c, d, 0, 0, 0, 0, 1, 0, e, f, 0, 1]);
  bool get isIdentity =>
      a == 1 && b == 0 && c == 0 && d == 1 && e == 0 && f == 0;
  bool get isInvertible => (a * d - b * c).abs() >= 1e-12;
  Offset map(double x, double y) =>
      Offset(a * x + c * y + e, b * x + d * y + f);
}

class CanvasDrawState {
  Affine transform = Affine();
  final stack = <CanvasDrawState>[];
  final clips = <ui.Path>[];
  Color fillColor = const Color(0xff000000);
  Color strokeColor = const Color(0xff000000);
  Shader? fillShader;
  Shader? strokeShader;
  double globalAlpha = 1;
  BlendMode blend = BlendMode.srcOver;
  double lineWidth = 1;
  StrokeCap lineCap = StrokeCap.butt;
  StrokeJoin lineJoin = StrokeJoin.miter;
  double miterLimit = 10;
  List<double> lineDash = const [];
  double lineDashOffset = 0;
  Color shadowColor = const Color(0x00000000);
  double shadowBlur = 0;
  double shadowOffsetX = 0;
  double shadowOffsetY = 0;
  bool smoothing = true;
  int smoothingQuality = 0;
  String font = '10px sans-serif';
  String textAlign = 'start';
  String textBaseline = 'alphabetic';
  String direction = 'ltr';
  double letterSpacing = 0;
  double wordSpacing = 0;
  String filter = 'none';
  ColorFilter? colorFilter;
  ui.ImageFilter? imageFilter;

  CanvasDrawState clone() {
    final copy = CanvasDrawState()
      ..transform = transform.clone()
      ..fillColor = fillColor
      ..strokeColor = strokeColor
      ..fillShader = fillShader
      ..strokeShader = strokeShader
      ..globalAlpha = globalAlpha
      ..blend = blend
      ..lineWidth = lineWidth
      ..lineCap = lineCap
      ..lineJoin = lineJoin
      ..miterLimit = miterLimit
      ..lineDash = List<double>.from(lineDash)
      ..lineDashOffset = lineDashOffset
      ..shadowColor = shadowColor
      ..shadowBlur = shadowBlur
      ..shadowOffsetX = shadowOffsetX
      ..shadowOffsetY = shadowOffsetY
      ..smoothing = smoothing
      ..smoothingQuality = smoothingQuality
      ..font = font
      ..textAlign = textAlign
      ..textBaseline = textBaseline
      ..direction = direction
      ..letterSpacing = letterSpacing
      ..wordSpacing = wordSpacing
      ..filter = filter
      ..colorFilter = colorFilter
      ..imageFilter = imageFilter;
    copy.clips.addAll(clips.map(ui.Path.from));
    copy.stack.addAll(stack.map((entry) => entry.clone()));
    return copy;
  }

  Paint paint({required bool fill}) {
    final base = fill ? fillColor : strokeColor;
    final result = Paint()
      ..isAntiAlias = smoothing
      ..color = base.withValues(alpha: base.a * globalAlpha)
      ..blendMode = blend
      ..style = fill ? PaintingStyle.fill : PaintingStyle.stroke
      ..strokeWidth = lineWidth
      ..strokeCap = lineCap
      ..strokeJoin = lineJoin
      ..strokeMiterLimit = miterLimit
      ..filterQuality = filterQuality;
    final shader = fill ? fillShader : strokeShader;
    if (shader != null) result.shader = shader;
    if (colorFilter != null) result.colorFilter = colorFilter;
    if (imageFilter != null) result.imageFilter = imageFilter;
    return result;
  }

  FilterQuality get filterQuality {
    if (!smoothing) return FilterQuality.none;
    return switch (smoothingQuality) {
      1 => FilterQuality.medium,
      2 => FilterQuality.high,
      _ => FilterQuality.low,
    };
  }
}

class _Reader {
  _Reader(this.bytes);
  final ByteData bytes;
  int offset = 0;
  int get length => bytes.lengthInBytes;
  void check(int count) {
    if (offset + count > length) {
      throw const FormatException('Truncated canvas command');
    }
  }

  int u16() {
    check(2);
    final value = bytes.getUint16(offset, Endian.little);
    offset += 2;
    return value;
  }

  int u32() {
    check(4);
    final value = bytes.getUint32(offset, Endian.little);
    offset += 4;
    return value;
  }

  double f64() {
    check(8);
    final value = bytes.getFloat64(offset, Endian.little);
    offset += 8;
    if (!value.isFinite) {
      throw const FormatException('Non-finite canvas number');
    }
    return value;
  }

  Uint8List blob(int count) {
    check(count);
    final value = bytes.buffer.asUint8List(bytes.offsetInBytes + offset, count);
    offset += count;
    return Uint8List.fromList(value);
  }

  String text() {
    final count = u32();
    return utf8.decode(blob(count));
  }

  void align() {
    final pad = (8 - (offset % 8)) % 8;
    if (pad == 0) return;
    check(pad);
    offset += pad;
  }

  Affine affine() => Affine(f64(), f64(), f64(), f64(), f64(), f64());
}

void decodeCanvasCommands(
  FlaxCanvasSurface surface,
  Uint8List bytes, {
  ui.Image? Function(int id)? lookupImage,
  required CanvasDrawState state,
}) {
  if (bytes.length < 24) {
    throw const FormatException('Canvas command header too short');
  }
  final reader = _Reader(ByteData.sublistView(bytes));
  if (reader.u32() != canvasCommandMagic) {
    throw const FormatException('Invalid canvas command magic');
  }
  if (reader.u32() != canvasCommandVersion) {
    throw const FormatException('Unsupported canvas command version');
  }
  reader
    ..u32()
    ..u32()
    ..u32();
  final used = reader.u32();
  if (used != bytes.length) {
    throw const FormatException('Canvas command length mismatch');
  }
  final recorder = ui.PictureRecorder();
  final canvas = ui.Canvas(recorder);
  _beginBatch(canvas, state);
  var cleared = false;
  final blitImages = <ui.Image>[];
  try {
    while (reader.offset < used) {
      final opcode = reader.u16();
      reader.u16();
      final payload = reader.u32();
      final end = reader.offset + payload;
      if (end > used) throw const FormatException('Invalid canvas payload');
      switch (opcode) {
        case opSave:
          state.stack.add(state.clone()..stack.clear());
          canvas.save();
        case opRestore:
          if (state.stack.isEmpty) break;
          final previous = state.stack.removeLast();
          _copyState(state, previous);
          canvas.restore();
        case opReset:
          while (canvas.getSaveCount() > 1) {
            canvas.restore();
          }
          canvas.save();
          _copyState(state, CanvasDrawState());
          state.stack.clear();
        case opSetTransform:
          _setTransform(canvas, state, reader.affine());
        case opTransform:
          _setTransform(
            canvas,
            state,
            state.transform.multiplied(reader.affine()),
          );
        case opTranslate:
          _setTransform(
            canvas,
            state,
            state.transform.multiplied(
              Affine(1, 0, 0, 1, reader.f64(), reader.f64()),
            ),
          );
        case opRotate:
          final angle = reader.f64();
          final cos = math.cos(angle);
          final sin = math.sin(angle);
          _setTransform(
            canvas,
            state,
            state.transform.multiplied(Affine(cos, sin, -sin, cos, 0, 0)),
          );
        case opScale:
          _setTransform(
            canvas,
            state,
            state.transform.multiplied(
              Affine(reader.f64(), 0, 0, reader.f64(), 0, 0),
            ),
          );
        case opResetTransform:
          _setTransform(canvas, state, Affine());
        case opFillRect:
          _drawRect(canvas, state, _rect(reader), fill: true);
        case opStrokeRect:
          _drawRect(canvas, state, _rect(reader), fill: false);
        case opClearRect:
          final rect = _rect(reader);
          canvas.save();
          canvas.clipRect(rect);
          if (surface.alpha) {
            canvas.drawColor(const Color(0x00000000), BlendMode.clear);
          } else {
            canvas.drawColor(const Color(0xff000000), BlendMode.src);
          }
          canvas.restore();
          if (rect.left <= 0 &&
              rect.top <= 0 &&
              rect.right >= surface.width &&
              rect.bottom >= surface.height &&
              state.stack.isEmpty &&
              state.clips.isEmpty &&
              state.transform.isIdentity) {
            cleared = true;
          }
        case opFillPath:
          _drawPath(canvas, state, _readStyledPath(reader), fill: true);
        case opStrokePath:
          _drawPath(canvas, state, _readPath(reader), fill: false);
        case opClipPath:
          final path = _readStyledPath(reader);
          canvas.clipPath(path);
          state.clips.add(path.transform(state.transform.storage));
        case opFillText:
          _drawText(
            canvas,
            state,
            reader.text(),
            reader.f64(),
            reader.f64(),
            true,
          );
        case opStrokeText:
          _drawText(
            canvas,
            state,
            reader.text(),
            reader.f64(),
            reader.f64(),
            false,
          );
        case opDrawImage:
          final id = reader.u32();
          final image = lookupImage?.call(id);
          final src = Rect.fromLTWH(
            reader.f64(),
            reader.f64(),
            reader.f64(),
            reader.f64(),
          );
          final dst = Rect.fromLTWH(
            reader.f64(),
            reader.f64(),
            reader.f64(),
            reader.f64(),
          );
          if (image == null) {
            throw FormatException('Unknown canvas image $id');
          }
          _drawShadow(canvas, state, (paint) {
            canvas.drawImageRect(
              image,
              src,
              dst,
              paint
                ..isAntiAlias = state.smoothing
                ..filterQuality = state.filterQuality,
            );
          });
          canvas.drawImageRect(image, src, dst, _imagePaint(state));
        case opPutImageData:
          canvas.save();
          canvas.transform(state.transform.inverted().storage);
          blitImages.add(_putImageData(canvas, reader, opaque: !surface.alpha));
          canvas.restore();
        case opSetFillColor:
          state
            ..fillColor = _color(reader)
            ..fillShader = null;
        case opSetStrokeColor:
          state
            ..strokeColor = _color(reader)
            ..strokeShader = null;
        case opSetFillLinear:
          state.fillShader = _linear(reader);
        case opSetStrokeLinear:
          state.strokeShader = _linear(reader);
        case opSetFillRadial:
          state.fillShader = _radial(reader);
        case opSetStrokeRadial:
          state.strokeShader = _radial(reader);
        case opSetFillConic:
          state.fillShader = _conic(reader);
        case opSetStrokeConic:
          state.strokeShader = _conic(reader);
        case opSetFillPattern:
          state.fillShader = _pattern(reader, lookupImage);
        case opSetStrokePattern:
          state.strokeShader = _pattern(reader, lookupImage);
        case opSetGlobalAlpha:
          state.globalAlpha = reader.f64().clamp(0, 1);
        case opSetComposite:
          final blend = blends[reader.text()];
          if (blend != null) state.blend = blend;
        case opSetLineWidth:
          state.lineWidth = math.max(0, reader.f64());
        case opSetLineCap:
          state.lineCap = switch (reader.text()) {
            'round' => StrokeCap.round,
            'square' => StrokeCap.square,
            _ => StrokeCap.butt,
          };
        case opSetLineJoin:
          state.lineJoin = switch (reader.text()) {
            'round' => StrokeJoin.round,
            'bevel' => StrokeJoin.bevel,
            _ => StrokeJoin.miter,
          };
        case opSetMiterLimit:
          state.miterLimit = math.max(0, reader.f64());
        case opSetLineDash:
          final count = reader.u32();
          state.lineDash = [
            for (var i = 0; i < count; i++) math.max(0, reader.f64()),
          ];
        case opSetLineDashOffset:
          state.lineDashOffset = reader.f64();
        case opSetShadow:
          state
            ..shadowColor = _color(reader)
            ..shadowBlur = math.max(0, reader.f64())
            ..shadowOffsetX = reader.f64()
            ..shadowOffsetY = reader.f64();
        case opSetSmoothing:
          state.smoothing = reader.u32() != 0;
          if (reader.offset + 4 <= end) {
            state.smoothingQuality = reader.u32().clamp(0, 2);
          }
        case opSetFilter:
          final filter = parseCanvasFilter(reader.text());
          if (filter != null) {
            state
              ..filter = filter.$1
              ..colorFilter = filter.$2
              ..imageFilter = filter.$3;
          }
        case opSetFont:
          state.font = reader.text();
        case opSetTextAlign:
          state.textAlign = reader.text();
        case opSetTextBaseline:
          state.textBaseline = reader.text();
        case opSetDirection:
          state.direction = reader.text();
        case opSetLetterSpacing:
          state.letterSpacing = reader.f64();
        case opSetWordSpacing:
          state.wordSpacing = reader.f64();
        default:
          throw FormatException('Unknown canvas opcode $opcode');
      }
      reader.offset = end;
      reader.align();
    }
    if (!surface.alpha && surface.width > 0 && surface.height > 0) {
      while (canvas.getSaveCount() > 1) {
        canvas.restore();
      }
      canvas.drawRect(
        Rect.fromLTWH(
          0,
          0,
          surface.width.toDouble(),
          surface.height.toDouble(),
        ),
        Paint()
          ..color = const Color(0xff000000)
          ..blendMode = BlendMode.dstOver,
      );
    }
    final picture = recorder.endRecording();
    if (cleared) surface.replaceWithClear();
    surface.addPicture(picture, used);
  } finally {
    for (final image in blitImages) {
      image.dispose();
    }
  }
}

void _beginBatch(ui.Canvas canvas, CanvasDrawState state) {
  canvas.save();
  for (final saved in state.stack) {
    _applyDeviceState(canvas, saved);
    canvas.save();
    canvas.transform(saved.transform.inverted().storage);
  }
  _applyDeviceState(canvas, state);
}

void _applyDeviceState(ui.Canvas canvas, CanvasDrawState state) {
  for (final clip in state.clips) {
    canvas.clipPath(clip);
  }
  canvas.transform(state.transform.storage);
}

Paint _imagePaint(CanvasDrawState state) {
  return Paint()
    ..isAntiAlias = state.smoothing
    ..filterQuality = state.filterQuality
    ..blendMode = state.blend
    ..colorFilter = state.colorFilter
    ..imageFilter = state.imageFilter
    ..color = Color.fromARGB((state.globalAlpha * 255).round(), 255, 255, 255);
}

void _copyState(CanvasDrawState target, CanvasDrawState source) {
  target
    ..transform = source.transform.clone()
    ..fillColor = source.fillColor
    ..strokeColor = source.strokeColor
    ..fillShader = source.fillShader
    ..strokeShader = source.strokeShader
    ..globalAlpha = source.globalAlpha
    ..blend = source.blend
    ..lineWidth = source.lineWidth
    ..lineCap = source.lineCap
    ..lineJoin = source.lineJoin
    ..miterLimit = source.miterLimit
    ..lineDash = List<double>.from(source.lineDash)
    ..lineDashOffset = source.lineDashOffset
    ..shadowColor = source.shadowColor
    ..shadowBlur = source.shadowBlur
    ..shadowOffsetX = source.shadowOffsetX
    ..shadowOffsetY = source.shadowOffsetY
    ..smoothing = source.smoothing
    ..smoothingQuality = source.smoothingQuality
    ..font = source.font
    ..textAlign = source.textAlign
    ..textBaseline = source.textBaseline
    ..direction = source.direction
    ..letterSpacing = source.letterSpacing
    ..wordSpacing = source.wordSpacing
    ..filter = source.filter
    ..colorFilter = source.colorFilter
    ..imageFilter = source.imageFilter;
  target.clips
    ..clear()
    ..addAll(source.clips.map(ui.Path.from));
}

void _setTransform(ui.Canvas canvas, CanvasDrawState state, Affine next) {
  canvas.transform(state.transform.inverted().multiplied(next).storage);
  state.transform = next;
}

Rect _rect(_Reader reader) =>
    Rect.fromLTWH(reader.f64(), reader.f64(), reader.f64(), reader.f64());

Color _color(_Reader reader) {
  final r = (reader.f64() * 255).round().clamp(0, 255);
  final g = (reader.f64() * 255).round().clamp(0, 255);
  final b = (reader.f64() * 255).round().clamp(0, 255);
  final a = (reader.f64() * 255).round().clamp(0, 255);
  return Color.fromARGB(a, r, g, b);
}

ui.Gradient _linear(_Reader reader) {
  final start = Offset(reader.f64(), reader.f64());
  final end = Offset(reader.f64(), reader.f64());
  final stops = _stops(reader);
  return ui.Gradient.linear(start, end, stops.$1, stops.$2);
}

ui.Gradient _radial(_Reader reader) {
  final x0 = reader.f64();
  final y0 = reader.f64();
  final r0 = reader.f64();
  final x1 = reader.f64();
  final y1 = reader.f64();
  final r1 = reader.f64();
  final stops = _stops(reader);
  var center = Offset(x1, y1);
  var focal = Offset(x0, y0);
  if (center == Offset.zero && focal == Offset.zero && r0 != 0) {
    center = const Offset(1e-6, 0);
    focal = const Offset(1e-6, 0);
  }
  return ui.Gradient.radial(
    center,
    r1,
    stops.$1,
    stops.$2,
    TileMode.clamp,
    null,
    focal,
    r0,
  );
}

ui.Gradient _conic(_Reader reader) {
  final center = Offset(reader.f64(), reader.f64());
  final angle = reader.f64();
  final stops = _stops(reader);
  return ui.Gradient.sweep(
    center,
    stops.$1,
    stops.$2,
    TileMode.clamp,
    angle,
    angle + math.pi * 2,
  );
}

(List<Color>, List<double>) _stops(_Reader reader) {
  final count = reader.u32();
  final stops = <({double offset, Color color})>[
    for (var i = 0; i < count; i++)
      (offset: reader.f64().clamp(0, 1), color: _color(reader)),
  ];
  stops.sort((a, b) => a.offset.compareTo(b.offset));
  return (
    [for (final stop in stops) stop.color],
    [for (final stop in stops) stop.offset],
  );
}

ui.ImageShader _pattern(
  _Reader reader,
  ui.Image? Function(int id)? lookupImage,
) {
  final image = lookupImage?.call(reader.u32());
  if (image == null) throw const FormatException('Unknown pattern image');
  final repeat = reader.text();
  final matrix = reader.affine().storage;
  return ui.ImageShader(
    image,
    repeat == 'repeat' || repeat == 'repeat-x'
        ? TileMode.repeated
        : TileMode.decal,
    repeat == 'repeat' || repeat == 'repeat-y'
        ? TileMode.repeated
        : TileMode.decal,
    matrix,
  );
}

void _drawText(
  ui.Canvas canvas,
  CanvasDrawState state,
  String text,
  double x,
  double y,
  bool fill,
) {
  final painter = textPainter(state, text, fill)..layout();
  final offset = textOffset(state, painter, x, y);
  _drawShadow(canvas, state, (paint) {
    final shadow = textPainter(state, text, fill, paint: paint)..layout();
    shadow.paint(canvas, offset);
  }, fill: fill);
  painter.paint(canvas, offset);
}

ui.Path _readStyledPath(_Reader reader) {
  final path = _readPath(reader);
  if (reader.u32() == 1) path.fillType = ui.PathFillType.evenOdd;
  return path;
}

ui.Path _dashed(CanvasDrawState state, ui.Path path) {
  if (state.lineDash.isEmpty) return path;
  return dashPath(
    path,
    dashArray: CircularIntervalList<double>(state.lineDash),
    dashOffset: DashOffset.absolute(state.lineDashOffset),
  );
}

void _drawRect(
  ui.Canvas canvas,
  CanvasDrawState state,
  Rect rect, {
  required bool fill,
}) {
  if (fill) {
    _drawShadow(
      canvas,
      state,
      (paint) => canvas.drawRect(rect, paint),
      fill: true,
    );
    canvas.drawRect(rect, state.paint(fill: true));
    return;
  }
  _drawPath(canvas, state, ui.Path()..addRect(rect), fill: false);
}

void _drawPath(
  ui.Canvas canvas,
  CanvasDrawState state,
  ui.Path path, {
  required bool fill,
}) {
  final drawn = fill ? path : _dashed(state, path);
  _drawShadow(
    canvas,
    state,
    (paint) => canvas.drawPath(drawn, paint),
    fill: fill,
  );
  canvas.drawPath(drawn, state.paint(fill: fill));
}

void _drawShadow(
  ui.Canvas canvas,
  CanvasDrawState state,
  void Function(Paint paint) draw, {
  bool fill = true,
}) {
  if (state.shadowColor.a == 0 ||
      (state.shadowBlur == 0 &&
          state.shadowOffsetX == 0 &&
          state.shadowOffsetY == 0)) {
    return;
  }
  canvas.save();
  canvas.translate(state.shadowOffsetX, state.shadowOffsetY);
  draw(
    Paint()
      ..color = state.shadowColor.withValues(
        alpha: state.shadowColor.a * state.globalAlpha,
      )
      ..maskFilter = state.shadowBlur > 0
          ? MaskFilter.blur(BlurStyle.normal, state.shadowBlur)
          : null
      ..style = fill ? PaintingStyle.fill : PaintingStyle.stroke
      ..strokeWidth = state.lineWidth
      ..strokeCap = state.lineCap
      ..strokeJoin = state.lineJoin
      ..strokeMiterLimit = state.miterLimit,
  );
  canvas.restore();
}

TextPainter textPainter(
  CanvasDrawState state,
  String text,
  bool fill, {
  Paint? paint,
}) {
  final font = parseFont(state.font);
  return TextPainter(
    text: TextSpan(
      text: text,
      style: TextStyle(
        fontSize: font.size,
        fontFamily: font.family,
        fontWeight: font.weight,
        fontStyle: font.style,
        letterSpacing: state.letterSpacing,
        wordSpacing: state.wordSpacing,
        foreground: paint ?? state.paint(fill: fill),
      ),
    ),
    textAlign: switch (state.textAlign) {
      'center' => TextAlign.center,
      'right' || 'end' => TextAlign.right,
      _ => TextAlign.left,
    },
    textDirection: state.direction == 'rtl'
        ? TextDirection.rtl
        : TextDirection.ltr,
  );
}

Offset textOffset(
  CanvasDrawState state,
  TextPainter painter,
  double x,
  double y,
) {
  var dx = x;
  var dy = y;
  final rtl = state.direction == 'rtl';
  switch (state.textAlign) {
    case 'center':
      dx -= painter.width / 2;
    case 'right':
      dx -= painter.width;
    case 'end' when !rtl:
      dx -= painter.width;
    case 'start' when rtl:
      dx -= painter.width;
    case 'end' when rtl:
      break;
  }
  final metrics = painter.computeLineMetrics();
  final ascent = metrics.isEmpty ? painter.height : metrics.first.ascent;
  switch (state.textBaseline) {
    case 'middle':
      dy -= painter.height / 2;
    case 'alphabetic':
      dy -= ascent;
    case 'bottom':
    case 'ideographic':
      dy -= painter.height;
  }
  return Offset(dx, dy);
}

({
  double width,
  double actualBoundingBoxLeft,
  double actualBoundingBoxRight,
  double actualBoundingBoxAscent,
  double actualBoundingBoxDescent,
  double fontBoundingBoxAscent,
  double fontBoundingBoxDescent,
})
measureCanvasText(CanvasDrawState state, String text) {
  final painter = textPainter(state, text, true)..layout();
  final offset = textOffset(state, painter, 0, 0);
  final metrics = painter.computeLineMetrics();
  final fontAscent = metrics.isEmpty ? painter.height : metrics.first.ascent;
  final fontDescent = metrics.isEmpty ? 0.0 : metrics.first.descent;
  return (
    width: painter.width,
    actualBoundingBoxLeft: -offset.dx,
    actualBoundingBoxRight: painter.width + offset.dx,
    actualBoundingBoxAscent: -offset.dy,
    actualBoundingBoxDescent: painter.height + offset.dy,
    fontBoundingBoxAscent: fontAscent,
    fontBoundingBoxDescent: fontDescent,
  );
}

({double size, String family, FontWeight weight, FontStyle style}) parseFont(
  String font,
) {
  var style = FontStyle.normal;
  var weight = FontWeight.normal;
  var size = 10.0;
  var family = 'sans-serif';
  for (final part in font.trim().split(RegExp(r'\s+'))) {
    if (part == 'italic' || part == 'oblique') {
      style = FontStyle.italic;
    } else if (part == 'bold') {
      weight = FontWeight.bold;
    } else if (int.tryParse(part) case final value?
        when value >= 100 && value <= 900) {
      weight = FontWeight.values[((value / 100).round() - 1).clamp(0, 8)];
    } else if (part.endsWith('px')) {
      size = double.tryParse(part.substring(0, part.length - 2)) ?? size;
    } else if (!part.contains('/')) {
      family = part.replaceAll(RegExp(r'''['"]'''), '');
    }
  }
  return (size: size, family: family, weight: weight, style: style);
}

ui.Image _putImageData(
  ui.Canvas canvas,
  _Reader reader, {
  required bool opaque,
}) {
  final width = reader.u32();
  final height = reader.u32();
  final dx = reader.f64();
  final dy = reader.f64();
  var pixels = reader.blob(width * height * 4);
  if (opaque) {
    pixels = Uint8List.fromList(pixels);
    for (var i = 3; i < pixels.length; i += 4) {
      pixels[i] = 255;
    }
  }
  final image = _imageFromPixels(pixels, width, height);
  canvas.drawImage(image, Offset(dx, dy), Paint()..blendMode = BlendMode.src);
  return image;
}

ui.Image _imageFromPixels(Uint8List pixels, int width, int height) {
  try {
    return ui.decodeImageFromPixelsSync(
      pixels,
      width,
      height,
      ui.PixelFormat.rgba8888,
    );
  } catch (error) {
    if (!error.toString().contains('not implemented')) rethrow;
  }
  final recorder = ui.PictureRecorder();
  final canvas = ui.Canvas(recorder);
  for (var y = 0; y < height; y++) {
    for (var x = 0; x < width; x++) {
      final i = (y * width + x) * 4;
      canvas.drawRect(
        Rect.fromLTWH(x.toDouble(), y.toDouble(), 1, 1),
        Paint()
          ..blendMode = BlendMode.src
          ..color = Color.fromARGB(
            pixels[i + 3],
            pixels[i],
            pixels[i + 1],
            pixels[i + 2],
          ),
      );
    }
  }
  final picture = recorder.endRecording();
  try {
    return picture.toImageSync(width, height);
  } finally {
    picture.dispose();
  }
}

double canvasSweep(double start, double end, bool ccw) {
  if (start == end) return 0;
  const tau = 2 * math.pi;
  var sweep = ccw ? start - end : end - start;
  sweep %= tau;
  if (sweep <= 0) sweep += tau;
  return ccw ? -sweep : sweep;
}

class _DecodedPath {
  _DecodedPath(this.path, this.current, this.subpathStart);
  final ui.Path path;
  final Offset? current;
  final Offset? subpathStart;
}

ui.Path _readPath(_Reader reader) => _decodePath(reader).path;

_DecodedPath _decodePath(_Reader reader) {
  final count = reader.u32();
  final path = ui.Path();
  Offset? current;
  Offset? subpathStart;
  void moveTo(double x, double y) {
    path.moveTo(x, y);
    current = subpathStart = Offset(x, y);
  }

  void lineTo(double x, double y) {
    if (current == null) {
      moveTo(x, y);
      return;
    }
    path.lineTo(x, y);
    current = Offset(x, y);
  }

  void appendTransformed(bool extend) {
    final matrix = Affine(
      reader.f64(),
      reader.f64(),
      reader.f64(),
      reader.f64(),
      reader.f64(),
      reader.f64(),
    );
    final child = _decodePath(reader);
    if (extend && current != null) {
      path.extendWithPath(child.path, Offset.zero, matrix4: matrix.storage);
    } else {
      path.addPath(child.path, Offset.zero, matrix4: matrix.storage);
      if (child.subpathStart != null) {
        subpathStart = matrix.map(
          child.subpathStart!.dx,
          child.subpathStart!.dy,
        );
      }
    }
    if (child.current != null) {
      current = matrix.map(child.current!.dx, child.current!.dy);
    }
  }

  for (var i = 0; i < count; i++) {
    switch (reader.u16()) {
      case pathMove:
        moveTo(reader.f64(), reader.f64());
      case pathLine:
        lineTo(reader.f64(), reader.f64());
      case pathClose:
        path.close();
        current = subpathStart;
      case pathRect:
        final rect = _rect(reader);
        path.addRect(rect);
        current = subpathStart = rect.topLeft;
      case pathCubic:
        final cp1x = reader.f64();
        final cp1y = reader.f64();
        final cp2x = reader.f64();
        final cp2y = reader.f64();
        final x = reader.f64();
        final y = reader.f64();
        if (current == null) moveTo(cp1x, cp1y);
        path.cubicTo(cp1x, cp1y, cp2x, cp2y, x, y);
        current = Offset(x, y);
      case pathQuad:
        final cpx = reader.f64();
        final cpy = reader.f64();
        final x = reader.f64();
        final y = reader.f64();
        if (current == null) moveTo(cpx, cpy);
        path.quadraticBezierTo(cpx, cpy, x, y);
        current = Offset(x, y);
      case pathArc:
        final x = reader.f64();
        final y = reader.f64();
        final radius = reader.f64();
        current = _addCanvasEllipse(
          path,
          current,
          x,
          y,
          radius,
          radius,
          0,
          reader.f64(),
          reader.f64(),
          reader.f64() != 0,
          (value) => subpathStart = value,
        );
      case pathEllipse:
        current = _addCanvasEllipse(
          path,
          current,
          reader.f64(),
          reader.f64(),
          reader.f64(),
          reader.f64(),
          reader.f64(),
          reader.f64(),
          reader.f64(),
          reader.f64() != 0,
          (value) => subpathStart = value,
        );
      case pathArcTo:
        final x2 = reader.f64();
        final y2 = reader.f64();
        final radius = reader.f64();
        final x1 = reader.f64();
        final y1 = reader.f64();
        current = _addCanvasArcTo(
          path,
          current,
          x1,
          y1,
          x2,
          y2,
          radius,
          (value) => subpathStart = value,
        );
      case pathRoundRect:
        final rect = _rect(reader);
        path.addRRect(
          RRect.fromRectAndCorners(
            rect,
            topLeft: Radius.elliptical(reader.f64(), reader.f64()),
            topRight: Radius.elliptical(reader.f64(), reader.f64()),
            bottomRight: Radius.elliptical(reader.f64(), reader.f64()),
            bottomLeft: Radius.elliptical(reader.f64(), reader.f64()),
          ),
        );
        current = subpathStart = rect.topLeft;
      case pathSvg:
        _addSvgPath(
          path,
          reader.text(),
          (value) => current = value,
          (value) => subpathStart = value,
        );
      case pathAdd:
        appendTransformed(false);
      case pathExtend:
        appendTransformed(true);
      default:
        throw const FormatException('Unknown path command');
    }
  }
  return _DecodedPath(path, current, subpathStart);
}

Offset _ellipsePoint(
  double x,
  double y,
  double rx,
  double ry,
  double rotation,
  double angle,
) {
  final px = rx * math.cos(angle);
  final py = ry * math.sin(angle);
  final cos = math.cos(rotation);
  final sin = math.sin(rotation);
  return Offset(x + px * cos - py * sin, y + px * sin + py * cos);
}

Offset? _addCanvasEllipse(
  ui.Path path,
  Offset? current,
  double x,
  double y,
  double rx,
  double ry,
  double rotation,
  double start,
  double end,
  bool ccw,
  void Function(Offset start) onSubpath,
) {
  final sweep = canvasSweep(start, end, ccw);
  if (rotation == 0) {
    final rect = Rect.fromCenter(
      center: Offset(x, y),
      width: rx * 2,
      height: ry * 2,
    );
    // Path.arcTo drops sweeps that are a multiple of 2π.
    if (sweep.abs() >= math.pi * 2 - 1e-12) {
      final half = sweep / 2;
      path.arcTo(rect, start, half, false);
      path.arcTo(rect, start + half, sweep - half, false);
    } else {
      path.arcTo(rect, start, sweep, false);
    }
    if (current == null) onSubpath(_ellipsePoint(x, y, rx, ry, 0, start));
    return _ellipsePoint(x, y, rx, ry, 0, start + sweep);
  }
  final startPoint = _ellipsePoint(x, y, rx, ry, rotation, start);
  if (current == null) {
    path.moveTo(startPoint.dx, startPoint.dy);
    onSubpath(startPoint);
  } else {
    path.lineTo(startPoint.dx, startPoint.dy);
  }
  if (sweep == 0) return startPoint;
  void addSweep(double from, double to) {
    final delta = to - from;
    path.arcToPoint(
      _ellipsePoint(x, y, rx, ry, rotation, to),
      radius: Radius.elliptical(rx.abs(), ry.abs()),
      rotation: rotation * 180 / math.pi,
      largeArc: delta.abs() > math.pi,
      clockwise: delta > 0,
    );
  }

  if (sweep.abs() >= math.pi * 2 - 1e-12) {
    final mid = start + sweep / 2;
    addSweep(start, mid);
    addSweep(mid, start + sweep);
  } else {
    addSweep(start, start + sweep);
  }
  return _ellipsePoint(x, y, rx, ry, rotation, start + sweep);
}

Offset? _addCanvasArcTo(
  ui.Path path,
  Offset? current,
  double x1,
  double y1,
  double x2,
  double y2,
  double radius,
  void Function(Offset start) onSubpath,
) {
  if (current == null) {
    path.moveTo(x1, y1);
    onSubpath(Offset(x1, y1));
    return Offset(x1, y1);
  }
  final p0 = current;
  final p1 = Offset(x1, y1);
  final p2 = Offset(x2, y2);
  if (radius == 0 || p0 == p1 || p1 == p2) {
    path.lineTo(x1, y1);
    return p1;
  }
  final v1 = p0 - p1;
  final v2 = p2 - p1;
  final len1 = v1.distance;
  final len2 = v2.distance;
  if (len1 == 0 || len2 == 0) {
    path.lineTo(x1, y1);
    return p1;
  }
  final dx1 = v1.dx / len1;
  final dy1 = v1.dy / len1;
  final dx2 = v2.dx / len2;
  final dy2 = v2.dy / len2;
  final cross = dx1 * dy2 - dy1 * dx2;
  if (cross.abs() < 1e-12) {
    path.lineTo(x1, y1);
    return p1;
  }
  final dot = (dx1 * dx2 + dy1 * dy2).clamp(-1.0, 1.0);
  final omega = math.acos(dot);
  final dist = radius.abs() / math.tan(omega / 2);
  final t1 = Offset(x1 + dx1 * dist, y1 + dy1 * dist);
  final t2 = Offset(x1 + dx2 * dist, y1 + dy2 * dist);
  path.lineTo(t1.dx, t1.dy);
  path.arcToPoint(
    t2,
    radius: Radius.circular(radius.abs()),
    largeArc: false,
    clockwise: cross < 0,
  );
  return t2;
}

void _addSvgPath(
  ui.Path path,
  String source,
  void Function(Offset value) setCurrent,
  void Function(Offset value) setSubpathStart,
) {
  final svg = parseSvgPathData(source);
  path.addPath(svg, Offset.zero);
  Offset? start;
  Offset? current;
  for (final metric in svg.computeMetrics()) {
    start = metric.getTangentForOffset(0)?.position ?? start;
    current = metric.getTangentForOffset(metric.length)?.position ?? current;
  }
  if (start != null) setSubpathStart(start);
  if (current != null) setCurrent(current);
}

ui.Path decodeCanvasPath(Uint8List bytes) {
  return _readPath(_Reader(ByteData.sublistView(bytes)));
}

(String, ColorFilter?, ui.ImageFilter?)? parseCanvasFilter(String input) {
  final value = input.trim();
  if (value.isEmpty || value == 'none') return ('none', null, null);
  if (RegExp(r'url\s*\(|drop-shadow', caseSensitive: false).hasMatch(value)) {
    return null;
  }
  final pattern = RegExp(
    r'(blur|brightness|contrast|grayscale|invert|opacity|saturate|sepia)\(\s*([-\d.]+)\s*(px|%)?\s*\)|hue-rotate\(\s*([-\d.]+)\s*deg\s*\)',
    caseSensitive: false,
  );
  var consumed = 0;
  Float64List? color;
  var blur = 0.0;
  for (final match in pattern.allMatches(value)) {
    if (value.substring(consumed, match.start).trim().isNotEmpty) return null;
    consumed = match.end;
    if (match.group(4) != null) {
      color = _multiplyColor(color, _hueRotate(double.parse(match.group(4)!)));
      continue;
    }
    final name = match.group(1)!.toLowerCase();
    final amount = double.parse(match.group(2)!);
    final unit = match.group(3);
    switch (name) {
      case 'blur':
        if (unit != 'px' && unit != null) return null;
        blur = math.max(blur, amount);
      case 'brightness':
        color = _multiplyColor(color, _brightness(_unit(amount, unit)));
      case 'contrast':
        color = _multiplyColor(color, _contrast(_unit(amount, unit)));
      case 'grayscale':
        color = _multiplyColor(color, _grayscale(_unit(amount, unit)));
      case 'invert':
        color = _multiplyColor(color, _invert(_unit(amount, unit)));
      case 'opacity':
        color = _multiplyColor(color, _opacity(_unit(amount, unit)));
      case 'saturate':
        color = _multiplyColor(color, _saturate(_unit(amount, unit)));
      case 'sepia':
        color = _multiplyColor(color, _sepia(_unit(amount, unit)));
    }
  }
  if (value.substring(consumed).trim().isNotEmpty) return null;
  return (
    value,
    color == null ? null : ColorFilter.matrix(color),
    blur == 0 ? null : ui.ImageFilter.blur(sigmaX: blur, sigmaY: blur),
  );
}

double _unit(double amount, String? unit) =>
    unit == '%' ? amount / 100 : amount;

Float64List _multiplyColor(Float64List? left, Float64List right) {
  if (left == null) return right;
  final out = Float64List(20);
  for (var row = 0; row < 4; row++) {
    for (var col = 0; col < 5; col++) {
      out[row * 5 + col] =
          left[row * 5] * right[col] +
          left[row * 5 + 1] * right[5 + col] +
          left[row * 5 + 2] * right[10 + col] +
          left[row * 5 + 3] * right[15 + col] +
          (col == 4 ? left[row * 5 + 4] : 0);
    }
  }
  return out;
}

Float64List _matrix(List<double> values) => Float64List.fromList(values);

Float64List _brightness(double a) =>
    _matrix([a, 0, 0, 0, 0, 0, a, 0, 0, 0, 0, 0, a, 0, 0, 0, 0, 0, 1, 0]);

Float64List _contrast(double a) {
  final t = 255 * (0.5 * (1 - a));
  return _matrix([a, 0, 0, 0, t, 0, a, 0, 0, t, 0, 0, a, 0, t, 0, 0, 0, 1, 0]);
}

Float64List _grayscale(double a) {
  final t = 1 - a;
  return _matrix([
    0.2126 + 0.7874 * t,
    0.7152 - 0.7152 * t,
    0.0722 - 0.0722 * t,
    0,
    0,
    0.2126 - 0.2126 * t,
    0.7152 + 0.2848 * t,
    0.0722 - 0.0722 * t,
    0,
    0,
    0.2126 - 0.2126 * t,
    0.7152 - 0.7152 * t,
    0.0722 + 0.9278 * t,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
  ]);
}

Float64List _invert(double a) {
  final t = 1 - 2 * a;
  final o = 255 * a;
  return _matrix([t, 0, 0, 0, o, 0, t, 0, 0, o, 0, 0, t, 0, o, 0, 0, 0, 1, 0]);
}

Float64List _opacity(double a) =>
    _matrix([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, a, 0]);

Float64List _saturate(double a) => _matrix([
  0.213 + 0.787 * a,
  0.715 - 0.715 * a,
  0.072 - 0.072 * a,
  0,
  0,
  0.213 - 0.213 * a,
  0.715 + 0.285 * a,
  0.072 - 0.072 * a,
  0,
  0,
  0.213 - 0.213 * a,
  0.715 - 0.715 * a,
  0.072 + 0.928 * a,
  0,
  0,
  0,
  0,
  0,
  1,
  0,
]);

Float64List _sepia(double a) {
  final t = 1 - a;
  return _matrix([
    0.393 + 0.607 * t,
    0.769 - 0.769 * t,
    0.189 - 0.189 * t,
    0,
    0,
    0.349 - 0.349 * t,
    0.686 + 0.314 * t,
    0.168 - 0.168 * t,
    0,
    0,
    0.272 - 0.272 * t,
    0.534 - 0.534 * t,
    0.131 + 0.869 * t,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
  ]);
}

Float64List _hueRotate(double degrees) {
  final r = degrees * math.pi / 180;
  final cos = math.cos(r);
  final sin = math.sin(r);
  return _matrix([
    0.213 + cos * 0.787 - sin * 0.213,
    0.715 - cos * 0.715 - sin * 0.715,
    0.072 - cos * 0.072 + sin * 0.928,
    0,
    0,
    0.213 - cos * 0.213 + sin * 0.143,
    0.715 + cos * 0.285 + sin * 0.140,
    0.072 - cos * 0.072 - sin * 0.283,
    0,
    0,
    0.213 - cos * 0.213 - sin * 0.787,
    0.715 - cos * 0.715 + sin * 0.715,
    0.072 + cos * 0.928 + sin * 0.072,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
  ]);
}
