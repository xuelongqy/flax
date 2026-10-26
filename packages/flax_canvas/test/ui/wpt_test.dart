import 'dart:convert';
import 'dart:ui' as ui;

import 'package:flax/flax.dart';
import 'package:flax_canvas/flax_canvas.dart';
import 'package:flax_test/flax_test.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:material_ui/material_ui.dart';

import '../support/harness.dart' show Harness, registry;
import '../wpt/cases.dart';
import '../wpt/harness.dart';

void main() {
  setUpAll(() async {
    for (final font in wptFonts.entries) {
      await ui.loadFontFromList(base64Decode(font.value), fontFamily: font.key);
    }
    await ui.loadFontFromList(
      base64Decode(wptFonts['CanvasTest']!),
      fontFamily: ' Canvas\\Font\n" ',
    );
  });
  tearDown(() => Flax.registerPlugins([]));
  for (final entry in wptCases.entries) {
    testWidgets('WPT ${entry.key}', (tester) async {
      final h = await _mount(tester);
      await flaxTestRunHostScript(tester, h, '''
$wptHarness
${entry.value}
await Promise.all(pending);
_assert(completed > 0 && assertions > 0, 'WPT ran without assertions');
''');
      expect(h.errors, isEmpty);
      await flaxTestUnmount(tester);
    }, timeout: const Timeout(Duration(seconds: 20)));
  }
  for (final entry in wptFontSyntax.entries) {
    testWidgets('WPT font grammar ${entry.key}', (tester) async {
      final h = await _mount(tester);
      await flaxTestRunHostScript(tester, h, '''
$wptHarness
const context = new OffscreenCanvas(1, 1).getContext('2d');
const sentinel = '983px __font_sentinel__';
function test(fn) { fn(); ++completed; }
// Reuse CSS grammar inputs with Canvas's computed-size/no-line-height serialization.
function test_valid_value(property, value, expected = value) {
  test(() => {
    assert_equals(property, 'font');
    context.font = sentinel; context.font = value;
    const actual = context.font;
    assert_not_equals(actual, sentinel, 'valid font: ' + value);
    context.font = sentinel; context.font = expected;
    assert_equals(actual, context.font, 'canonical font: ' + value);
    context.font = sentinel; context.font = actual;
    assert_equals(context.font, actual, 'font round trip: ' + value);
  });
}
function test_invalid_value(property, value) {
  test(() => {
    assert_equals(property, 'font');
    context.font = sentinel; context.font = value;
    assert_equals(context.font, sentinel, 'invalid font: ' + value);
  });
}
const target = {style: {
  get font() { return context.font; }, set font(value) { context.font = value; },
  getPropertyValue(property) { assert_equals(property, 'font'); return context.font; }
}};
const document = { getElementById(id) { assert_equals(id, 'target'); return target; } };
${entry.value}
console.log('WPT font grammar ${entry.key}: ' + completed + ' cases');
_assert(completed > 0 && assertions > 0, 'font grammar ran without assertions');
''');
      expect(h.errors, isEmpty);
      await flaxTestUnmount(tester);
    });
  }

  for (final entry in wptBitmapScripts.entries) {
    testWidgets('WPT bitmap options ${entry.key}', (tester) async {
      final h = await _mount(tester);
      await flaxTestRunHostScript(tester, h, '''
$wptHarness
// The upstream drawing/assertion bodies are unchanged; only canvas creation is adapted.
const document = {createElement(name) {
  _assertSame(name, 'canvas'); return new OffscreenCanvas(300, 150);
}};
let f, o;
${entry.value}
await Promise.all(pending);
_assertSame(completed, 12, 'bitmap option cases');
_assert(assertions > 0, 'bitmap assertions executed');
''');
      expect(h.errors, isEmpty);
      await flaxTestUnmount(tester);
    }, timeout: const Timeout(Duration(seconds: 45)));
  }

  testWidgets('Bitmap Blob decoding honors profiles, EXIF and flipY', (
    tester,
  ) async {
    final h = await _mount(tester);
    await flaxTestRunHostScript(tester, h, r'''
      const blob = path => new Blob([Uint8Array.from(atob(__wptImages[path]), c=>c.charCodeAt(0))]);
      const context = image => {
        const c = new OffscreenCanvas(image.width,image.height).getContext('2d');
        c.drawImage(image,0,0);return c;
      };
      const jpeg=blob('/html/canvas/element/manual/imagebitmap/resources/squares_6.jpg');
      const oriented=await createImageBitmap(jpeg), flipped=await createImageBitmap(jpeg,{imageOrientation:'flipY'});
      if(oriented.width!==320 || oriented.height!==160 || flipped.width!==160 || flipped.height!==320)
        throw Error('EXIF/flipY dimensions');
      const a=context(oriented), b=context(flipped);
      const colors=[[255,0,0,255],[0,255,0,255],[0,0,255,255],[0,0,0,255],
                    [255,128,128,255],[128,255,128,255],[128,128,255,255],[128,128,128,255]];
      for(let row=0;row<2;row++) for(let col=0;col<4;col++) {
        const normal=a.getImageData(col*80+40,row*80+40,1,1).data;
        const flip=b.getImageData(row*80+40,col*80+40,1,1).data;
        for(let c=0;c<4;c++) {
          if(Math.abs(normal[c]-colors[row*4+col][c])>1) throw Error('EXIF pixel '+normal);
          if(normal[c]!==flip[c]) throw Error('flipY must disregard encoded EXIF rotation');
        }
      }
      oriented.close();flipped.close();
      const png=blob('/images/wide-gamut-pattern.png');
      const raw=await createImageBitmap(png,{colorSpaceConversion:'none'});
      const x=context(raw);
      const expected=[[124,0,27,255],[0,124,46,255],[60,0,123,255],[0,0,0,255]];
      for(let row=0;row<2;row++) for(let col=0;col<2;col++) {
        const no=x.getImageData(col*10+5,row*10+5,1,1).data;
        for(let c=0;c<4;c++) {
          if(Math.abs(no[c]-expected[row*2+col][c])>10) throw Error('Unconverted ICC channels '+no);
        }
      }
      raw.close();
      // PQ/HDR tone mapping is not defined by Canvas's default conversion option.
      const p3=blob('/html/canvas/element/manual/wide-gamut-canvas/resources/Display-P3-BB0000FF.png');
      const untouched=await createImageBitmap(p3,{colorSpaceConversion:'none'}), converted=await createImageBitmap(p3);
      const no=context(untouched).getImageData(0,0,1,1).data;
      const yes=context(converted).getImageData(0,0,1,1).data;
      if(String(no)!=='187,0,0,255' || String(yes)!=='205,0,0,255')
        throw Error('Display-P3 to sRGB conversion '+no+' / '+yes);
      untouched.close();converted.close();
    ''');
    expect(h.errors, isEmpty);
    await flaxTestUnmount(tester);
  }, timeout: const Timeout(Duration(seconds: 45)));

  testWidgets(
    'ImageData draw overloads use drawing state and retain source bytes',
    (tester) async {
      final h = await _mount(tester);
      await flaxTestRunHostScript(tester, h, r'''
      const data=new ImageData(new Uint8ClampedArray([255,0,0,128,0,255,0,255,0,0,255,64,255,255,0,255]),2);
      const bitmap=await createImageBitmap(data);
      for(const args of [[2,2],[2,2,8,8],[0,0,1,2,2,2,8,8]]) {
        const a=new OffscreenCanvas(16,16).getContext('2d'),b=new OffscreenCanvas(16,16).getContext('2d');
        for(const ctx of [a,b]) {
          ctx.fillStyle='white';ctx.fillRect(0,0,16,16);
          ctx.translate(2,1);ctx.globalAlpha=.5;
          ctx.beginPath();ctx.rect(0,0,10,10);ctx.clip();
          ctx.drawImage(ctx===a?data:bitmap,...args);
        }
        const x=a.getImageData(0,0,16,16).data,y=b.getImageData(0,0,16,16).data;
        for(let i=0;i<x.length;i++) if(x[i]!==y[i]) throw Error('ImageData draw overload '+args+' at '+i+': '+x[i]+'/'+y[i]);
      }
      const c=new OffscreenCanvas(2,2).getContext('2d');
      c.drawImage(data,0,0);data.data.fill(0);
      if(c.getImageData(1,0,1,1).data[1]!==255) throw Error('ImageData bytes were not captured at call time');
      bitmap.close();
    ''');
      expect(h.errors, isEmpty);
      await flaxTestUnmount(tester);
    },
  );

  testWidgets('SVG Path2D retains segments and starts independent subpaths', (
    tester,
  ) async {
    final h = await _mount(tester);
    await flaxTestRunHostScript(tester, h, r'''
      const context = () => new OffscreenCanvas(64,64).getContext('2d');
      function same(a,b,label) {
        const x = a.getImageData(0,0,64,64).data, y = b.getImageData(0,0,64,64).data;
        for (let i=0;i<x.length;++i) if(x[i]!==y[i]) throw Error(label+': '+i+' '+x[i]+'/'+y[i]);
      }
      const cases = [
        ['M4 4h20v20h-20z', p => {p.moveTo(4,4);p.lineTo(24,4);p.lineTo(24,24);p.lineTo(4,24);p.closePath();p.moveTo(4,4);}],
        ['m4 4 20 0 0 20 -20 0z', p => {p.moveTo(4,4);p.lineTo(24,4);p.lineTo(24,24);p.lineTo(4,24);p.closePath();p.moveTo(4,4);}],
        ['M4 20C8 4 16 4 20 20S32 36 36 20Q40 4 44 20T52 20', p => {p.moveTo(4,20);p.bezierCurveTo(8,4,16,4,20,20);p.bezierCurveTo(24,36,32,36,36,20);p.quadraticCurveTo(40,4,44,20);p.quadraticCurveTo(48,36,52,20);p.moveTo(52,20);}],
        ['M4 20c4-16 12-16 16 0s12 16 16 0q4-16 8 0t8 0', p => {p.moveTo(4,20);p.bezierCurveTo(8,4,16,4,20,20);p.bezierCurveTo(24,36,32,36,36,20);p.quadraticCurveTo(40,4,44,20);p.quadraticCurveTo(48,36,52,20);p.moveTo(52,20);}],
        ['M4 4L24 4 24 24 4 24Z L30 30 40 broken', p => {p.moveTo(4,4);p.lineTo(24,4);p.lineTo(24,24);p.lineTo(4,24);p.closePath();p.lineTo(30,30);p.moveTo(30,30);}],
        ['M4 4H24V24H4Z\0M50 50L60 60', p => {p.moveTo(4,4);p.lineTo(24,4);p.lineTo(24,24);p.lineTo(4,24);p.closePath();p.moveTo(4,4);}],
        ['M4 4L24 4,,24 24', p => {p.moveTo(4,4);p.lineTo(24,4);p.moveTo(24,4);}],
        ['L4 4M20 20', p => {}],
        ['M4', p => {}],
      ];
      for (const [source, build] of cases) {
        const svg = new Path2D(source), expected = new Path2D(); build(expected);
        // Closing a constructor path must not close the preceding SVG contour.
        svg.lineTo(50,50); svg.closePath(); expected.lineTo(50,50); expected.closePath();
        const a=context(),b=context(); a.stroke(svg);b.stroke(expected);same(a,b,source);
        const copy=new Path2D(svg), c=context();c.stroke(copy);same(a,c,'copy '+source);
      }
      for (const source of ['M4 20A8 8 0 0112 28', 'M4 20a8 8 0 018 8']) {
        const a=context(),b=context(), p=new Path2D();
        p.moveTo(4,20);p.arc(4,28,8,-Math.PI/2,0);p.moveTo(12,28);
        a.stroke(new Path2D(source));b.stroke(p);same(a,b,'compact arc flags');
      }
      for (const transform of [undefined,{a:1,b:0,c:0,d:1,e:5,f:7}]) {
        const source=new Path2D('M4 4L24 4L24 24'), path=new Path2D();
        path.moveTo(60,60);path.addPath(source,transform);path.lineTo(4,24);path.closePath();
        const expected=new Path2D(), dx=transform?.e??0,dy=transform?.f??0;
        expected.moveTo(4+dx,4+dy);expected.lineTo(24+dx,4+dy);expected.lineTo(24+dx,24+dy);
        expected.moveTo(24+dx,24+dy);expected.lineTo(4,24);expected.closePath();
        const a=context(),b=context();a.fill(path);b.fill(expected);same(a,b,'addPath subpath');
      }
      for(const [w,h] of [[24,24],[-24,24],[24,-24],[-24,-24]]) {
        const a=context(),b=context(),p=new Path2D(),q=new Path2D();
        p.roundRect(32,32,w,h,0);
        q.moveTo(32,32);q.lineTo(32+w,32);q.lineTo(32+w,32+h);q.lineTo(32,32+h);q.closePath();q.moveTo(32,32);
        a.setLineDash([3,5]);b.setLineDash([3,5]);a.stroke(p);b.stroke(q);same(a,b,'roundRect dash start');
      }
      const canvas=context();canvas.fillStyle='lime';canvas.fillRect(0,0,64,64);
      canvas.stroke(new Path2D('M0 0Lbroken'));
      if(canvas.getImageData(32,32,1,1).data[1]!==255) throw Error('invalid SVG rolled back commit');
    ''');
    expect(h.errors, isEmpty);
    await flaxTestUnmount(tester);
  });

  testWidgets(
    'font escapes, math, fractional weights and oblique reach drawing',
    (tester) async {
      final h = await _mount(tester);
      await flaxTestRunHostScript(tester, h, r'''
      const ctx=new OffscreenCanvas(128,64).getContext('2d');
      ctx.font=String.raw`450.5 calc(1em + 10px) / 2 "\43 anvasTest"`;
      if(ctx.font!=='450.5 20px "CanvasTest"') throw Error(ctx.font);
      const width=ctx.measureText('MM').width;
      ctx.fillText('MM',10,30);
      if(!(width>0 && ctx.getImageData(0,0,128,64).data.some(n=>n!==0))) throw Error('font did not draw');
      ctx.font=String.raw`450.5 20px " Canvas\\Font\a \" "`;
      if(ctx.measureText('MM').width!==width) throw Error('CSS escapes changed the registered family');
      ctx.font='20px CanvasTest';
      const normal=ctx.measureText('MM');
      for(const angle of [-30,0,30]) {
        ctx.clearRect(0,0,128,64);ctx.font='oblique '+angle+'deg 20px CanvasTest';
        const metrics=ctx.measureText('MM');
        if(metrics.width!==normal.width) throw Error('oblique changed advance');
        if(angle!==0 && metrics.actualBoundingBoxLeft===normal.actualBoundingBoxLeft && metrics.actualBoundingBoxRight===normal.actualBoundingBoxRight) throw Error('oblique angle ignored');
        const gradient=ctx.createLinearGradient(0,0,128,0);gradient.addColorStop(0,'red');gradient.addColorStop(1,'blue');
        ctx.fillStyle=gradient;ctx.fillText('MM',20,30,25);ctx.strokeText('M',75,30);
        if(!ctx.getImageData(0,0,128,64).data.some(n=>n!==0)) throw Error('oblique did not draw');
      }
    ''');
      expect(h.errors, isEmpty);
      await flaxTestUnmount(tester);
    },
  );

  for (final entry in wptGrids.entries) {
    testWidgets('WPT reference ${entry.key} (26 operators)', (tester) async {
      final h = await _mount(tester);
      final rgba = (await tester.runAsync(() async {
        final codec = await ui.instantiateImageCodec(
          base64Decode(entry.value.$2),
        );
        try {
          final frame = await codec.getNextFrame();
          try {
            return (await frame.image.toByteData())!.buffer.asUint8List();
          } finally {
            frame.image.dispose();
          }
        } finally {
          codec.dispose();
        }
      }))!;
      h.execute('globalThis.__wptGridChanged = 0');
      for (var cell = 0; cell < entry.value.$1.length; cell++) {
        final expected = <int>[];
        for (var y = 0; y < 60; y++) {
          for (var x = 0; x < 80; x++) {
            final pixel = ((cell ~/ 6 * 60 + y) * 480 + cell % 6 * 80 + x) * 4;
            for (var channel = 0; channel < 3; channel++) {
              expected.add(rgba[pixel + channel] + 255 - rgba[pixel + 3]);
            }
          }
        }
        await flaxTestRunHostScript(tester, h, '''
$wptHarness
${entry.value.$1[cell]}
// Match the upstream bitmap transfer before white-page composition.
const bitmap = canvas.transferToImageBitmap();
const page = new OffscreenCanvas(80,60).getContext('2d');
page.fillStyle = 'white'; page.fillRect(0,0,80,60);
page.drawImage(bitmap,0,0); bitmap.close();
const actual = page.getImageData(0, 0, 80, 60).data;
const expected = ${jsonEncode(expected)};
let changed = 0;
for (let i = 0; i < 4800; i++) {
  let different = false;
  for (let channel = 0; channel < 3; channel++) {
    const value = actual[i * 4 + channel];
    const difference = Math.abs(value - expected[i * 3 + channel]);
    _assert(difference <= 4, 'operator $cell, pixel ' + (i % 80) + ',' + Math.floor(i / 80) + ', channel ' + channel + ': ' + value + '/' + expected[i * 3 + channel]);
    different ||= difference !== 0;
  }
  if (different) ++changed;
}
globalThis.__wptGridChanged += changed;
''');
      }
      await flaxTestRunHostScript(tester, h, '''
$wptHarness
console.log('WPT reference ${entry.key}: ' + globalThis.__wptGridChanged + '/33000 differing pixels');
_assert(globalThis.__wptGridChanged <= 33000, 'WPT fuzzy pixel count: ' + globalThis.__wptGridChanged);
''');
      expect(h.errors, isEmpty);
      await flaxTestUnmount(tester);
    }, timeout: const Timeout(Duration(seconds: 60)));
  }

  testWidgets('effect source alpha is quantized before reuse', (tester) async {
    final h = await _mount(tester);
    await flaxTestRunHostScript(tester, h, r'''
      const image = new OffscreenCanvas(80,60), imageCtx = image.getContext('2d');
      imageCtx.fillStyle = 'rgb(52,255,52)'; imageCtx.fillRect(0,0,80,60);
      // Source, filter, shadow, both effects, background, destructive composition.
      const stages = [
        [false,false,false,'source-over',128],
        [true,false,false,'copy',192],
        [false,true,false,'source-over',179],
        [true,true,false,'source-over',230],
        [true,true,true,'source-over',250],
        [true,true,true,'copy',192],
      ];
      for (const [filter,shadow,background,mode,alpha] of stages) {
        for (const kind of ['pattern','fillRect','drawImage']) {
          const canvas = new OffscreenCanvas(80,60), ctx = canvas.getContext('2d');
          if (background) {
            ctx.fillStyle = 'rgba(0,102,240,.8)'; ctx.fillRect(15,15,50,30);
          }
          ctx.translate(25,20); ctx.rotate(Math.PI/2); ctx.scale(.6,1.2); ctx.translate(-25,-20);
          ctx.globalAlpha = .5;
          if (filter) ctx.filter = 'drop-shadow(5px -5px 0px rgb(255,154,100))';
          if (shadow) {
            ctx.shadowOffsetX = 20; ctx.shadowOffsetY = 20; ctx.shadowColor = 'rgba(154,0,154,.8)';
          }
          ctx.globalCompositeOperation = mode;
          if (kind === 'drawImage') ctx.drawImage(image,5,5,50,30);
          else {
            ctx.fillStyle = kind === 'pattern' ? ctx.createPattern(image,'repeat') : 'rgb(52,255,52)';
            ctx.fillRect(5,5,50,30);
          }
          // Isolate the bitmap boundary from backend-specific RGB rounding.
          const actual = ctx.getImageData(35,30,1,1).data[3];
          if (actual !== alpha) throw Error(kind + ': effect source alpha ' + actual + '/' + alpha);
        }
      }
    ''');
    expect(h.errors, isEmpty);
    await flaxTestUnmount(tester);
  }, timeout: const Timeout(Duration(seconds: 30)));

  testWidgets('effects, text, alpha and snapshot formats', (tester) async {
    final h = await _mount(tester);
    Future<(List<int>, int)> flutterSnapshot() async {
      final recorder = ui.PictureRecorder();
      final canvas = ui.Canvas(recorder);
      const bounds = ui.Rect.fromLTWH(0, 0, 64, 64);
      canvas.saveLayer(bounds, ui.Paint());
      canvas.drawRect(bounds, ui.Paint()..color = const ui.Color(0x884b96e1));
      canvas.drawRect(
        const ui.Rect.fromLTWH(8, 8, 48, 48),
        ui.Paint()..color = const ui.Color(0x44803623),
      );
      canvas.restore();
      final picture = recorder.endRecording();
      try {
        final image = await picture.toImage(64, 64);
        try {
          final rgba = (await image.toByteData())!.buffer.asUint8List();
          final png = (await image.toByteData(format: ui.ImageByteFormat.png))!;
          return (rgba.toList(), png.getUint8(24));
        } finally {
          image.dispose();
        }
      } finally {
        picture.dispose();
      }
    }

    final before = (await tester.runAsync(flutterSnapshot))!;
    await flaxTestRunHostScript(tester, h, r'''
      function check(value, message) { if (!value) throw Error(message); }
      function context() { return new OffscreenCanvas(64, 64).getContext('2d'); }
      function compare(a, b, message, tolerance = 1) {
        const x = a.getImageData(0, 0, 64, 64).data;
        const y = b.getImageData(0, 0, 64, 64).data;
        for (let i = 0; i < x.length; i++) {
          if (Math.abs(x[i] - y[i]) > tolerance) throw Error(message + ': channel ' + i + ': ' + x[i] + '/' + y[i]);
        }
      }
      const a = context(), b = context();
      a.filter = 'brightness(2) invert(1)';
      a.fillStyle = '#404040'; a.fillRect(0, 0, 64, 64);
      check(Math.abs(a.getImageData(20,20,1,1).data[0] - 127) <= 1, 'filter order');
      a.reset(); a.filter = 'invert(1) brightness(2)';
      a.fillStyle = '#404040'; a.fillRect(0, 0, 64, 64);
      check(a.getImageData(20,20,1,1).data[0] === 255, 'reverse filter order');
      a.reset(); b.reset();
      a.scale(2, 2); a.filter = 'blur(3px)'; a.fillRect(10, 10, 5, 5);
      b.filter = 'blur(3px)'; b.fillRect(20, 20, 10, 10);
      compare(a, b, 'filter blur scaled with CTM');
      a.reset(); b.reset();
      a.font = '40px serif'; a.filter = 'blur(1em)'; a.fillRect(20,20,20,20);
      b.filter = 'blur(10px)'; b.fillRect(20,20,20,20);
      compare(a,b,'Offscreen filter font style source');
      a.reset(); b.reset();
      a.filter = 'blur(3px) blur(4px)'; a.fillRect(20, 20, 20, 20);
      b.filter = 'blur(5px)'; b.fillRect(20, 20, 20, 20);
      compare(a, b, 'successive Gaussian variance', 3);
      a.reset(); b.reset();
      a.filter = 'opacity(.5)'; a.shadowColor = 'red'; a.shadowOffsetX = 30;
      a.fillRect(0,0,10,10);
      b.fillStyle = 'rgba(255, 0, 0, .5)'; b.fillRect(30,0,10,10);
      b.fillStyle = 'rgba(0, 0, 0, .5)'; b.fillRect(0,0,10,10);
      compare(a, b, 'shadow ignores filtered source alpha');
      a.reset(); b.reset();
      a.shadowBlur = 6; a.shadowColor = 'red'; a.shadowOffsetX = 30;
      a.fillRect(0,20,10,10);
      b.filter = 'drop-shadow(30px 0px 3px red)'; b.fillRect(0,20,10,10);
      compare(a, b, 'shadow sigma');
      a.reset(); b.reset();
      a.fillStyle = 'rgba(0,0,0,0)';
      const gradient = a.createLinearGradient(0,0,64,0);
      gradient.addColorStop(0, 'lime'); gradient.addColorStop(1, 'lime');
      a.fillStyle = gradient; a.fillRect(0,0,64,64);
      b.fillStyle = gradient; b.fillRect(0,0,64,64);
      compare(a, b, 'gradient inherited a solid color alpha');
      a.reset(); b.reset();
      const tile = new OffscreenCanvas(4,4);
      tile.getContext('2d').fillRect(0,0,4,4);
      a.globalAlpha = .5; a.fillStyle = a.createPattern(tile, 'repeat');
      a.filter = 'drop-shadow(30px 0px 0px red)'; a.fillRect(0,0,10,10);
      const patternAlpha = a.getImageData(35,5,1,1).data[3];
      check(Math.abs(patternAlpha - 128) <= 1, 'filtered pattern alpha: ' + patternAlpha);
      a.font = '0px serif';
      check(a.font === '0px serif' && a.measureText('zero').width === 0, 'zero font');
      a.font = '.5px serif';
      check(a.measureText('small').width > 0, 'fractional font');
      const source = new OffscreenCanvas(2,1), sourceCtx = source.getContext('2d');
      sourceCtx.fillStyle = 'rgb(52,255,52)'; sourceCtx.globalAlpha = .5;
      sourceCtx.fillRect(0,0,2,1);
      const encoded = new Uint8Array(await (await source.convertToBlob()).arrayBuffer());
      check(encoded[24] === 8, 'default Canvas PNG must store RGBA8');
      const bitmap = source.transferToImageBitmap();
      const page = new OffscreenCanvas(2,1).getContext('2d');
      page.fillStyle = 'white'; page.fillRect(0,0,2,1); page.drawImage(bitmap,0,0); bitmap.close();
      check(page.getImageData(0,0,1,1).data.join() === '153,255,153,255', 'bitmap RGBA8 quantization');
      a.reset(); b.reset();
      a.fillRect(0,0,64,64); a.globalCompositeOperation = 'color-dodge';
      a.fillStyle = 'white'; a.fillRect(0,0,64,64);
      b.fillRect(0,0,64,64); compare(a,b,'color-dodge black backdrop');
      a.reset(); b.reset();
      a.fillStyle = 'white'; a.fillRect(0,0,64,64);
      a.globalCompositeOperation = 'color-burn'; a.fillStyle = 'black'; a.fillRect(0,0,64,64);
      b.fillStyle = 'white'; b.fillRect(0,0,64,64); compare(a,b,'color-burn white backdrop');
      const opaque = new OffscreenCanvas(2,1).getContext('2d', {alpha:false});
      opaque.fillStyle = 'lime'; opaque.fillRect(0,0,2,1);
      opaque.globalCompositeOperation = 'destination-in';
      opaque.fillRect(0,0,1,1);
      opaque.globalCompositeOperation = 'destination-over';
      opaque.fillStyle = 'red'; opaque.fillRect(0,0,2,1);
      const pixels = opaque.getImageData(0,0,2,1).data;
      check(pixels.join() === '0,255,0,255,0,0,0,255', 'opaque per-operation alpha: ' + pixels);
    ''');
    final after = (await tester.runAsync(flutterSnapshot))!;
    expect(after.$1, orderedEquals(before.$1));
    expect(after.$2, before.$2, reason: 'Canvas leaked its snapshot format');
    expect(h.errors, isEmpty);
    await flaxTestUnmount(tester);
  }, timeout: const Timeout(Duration(seconds: 30)));
}

Future<Harness> _mount(WidgetTester tester) async {
  final h = Harness();
  await flaxTestPumpView(
    tester,
    MaterialApp(
      home: FlaxView(
        createRuntime: h.create,
        source: flaxTestFixtureSource('canvas', packageName: 'flax_canvas'),
        bindings: registry,
        plugins: const [FlaxCanvasPlugin()],
        onError: (error, _) => h.errors.add(error),
      ),
    ),
  );
  h.execute('globalThis.__wptImages = ${jsonEncode(wptImages)}');
  return h;
}
