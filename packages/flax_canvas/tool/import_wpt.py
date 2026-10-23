"""Refresh the selected, unmodified WPT worker sources and test fonts."""
import base64
import concurrent.futures
import hashlib
import json
import re
from pathlib import Path
import subprocess
import time

REVISION = "f6880eca1af36e5572d433b6032915d1fd7e3725"
ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "test/wpt"
MODES = ["source-over", "source-in", "source-out", "source-atop",
         "destination-over", "destination-in", "destination-out",
         "destination-atop", "lighter", "copy", "xor"]
CASES = {
    "compositing": [f"2d.composite.{kind}.{mode}"
                    for kind in ["solid", "transparent"]
                    for mode in MODES] + [f"2d.composite.{kind}.{mode}"
                    for kind in ["uncovered.fill", "clip"]
                    for mode in ["source-in", "source-out", "destination-in", "destination-atop", "copy"]] + ["2d.composite.operation.clear"],
    "shadows": ["2d.shadow." + suffix for suffix in [
        "enable.off.1", "enable.off.2", "enable.blur", "enable.x", "enable.y",
        "offset.positiveX", "offset.negativeX", "offset.positiveY", "offset.negativeY",
        "outside", "clip.1", "clip.2", "clip.3", "stroke.basic",
        "gradient.basic", "gradient.transparent.1", "gradient.transparent.2",
        "gradient.alpha", "transform.1", "transform.2",
        "alpha.1", "alpha.2", "alpha.3", "alpha.4", "alpha.5",
        "composite.1", "composite.2", "composite.3"]],
    "filters": ["2d.filter.value"],
    "text": ["2d.text." + suffix for suffix in [
        "font.parse.basic", "font.parse.tiny", "font.parse.complex",
        "font.parse.complex2", "font.parse.invalid", "font.default", "font.weight",
        "font.relative_size", "direction.default",
        "draw.baseline.alphabetic", "draw.baseline.bottom", "draw.baseline.hanging",
        "draw.baseline.ideographic", "draw.baseline.middle", "draw.baseline.top",
        "measure.fontBoundingBox", "measure.fontBoundingBox-reduced-ascent",
        "measure.fontBoundingBox-zero-descent", "measure.emHeights",
        "measure.emHeights-low-ascent", "measure.emHeights-zero-descent",
        "measure.baselines", "measure.actualBoundingBox.small-font",
        "drawing.style.absolute.spacing", "drawing.style.font-relative.spacing",
        "drawing.style.letterSpacing.measure", "drawing.style.wordSpacing.measure",
        "drawing.style.letterSpacing.change.font", "drawing.style.wordSpacing.change.font"]],
}
CASES['fill-and-stroke-styles'] = [
    "2d.fillStyle.parse.css-color-4-hsl-1",
    "2d.fillStyle.parse.css-color-4-hsl-2",
    "2d.fillStyle.parse.css-color-4-hsl-3",
    "2d.fillStyle.parse.css-color-4-hsl-4",
    "2d.fillStyle.parse.css-color-4-hsl-5",
    "2d.fillStyle.parse.css-color-4-hsl-6",
    "2d.fillStyle.parse.css-color-4-hsl-7",
    "2d.fillStyle.parse.css-color-4-hsl-8",
    "2d.fillStyle.parse.css-color-4-hsl-9",
    "2d.fillStyle.parse.css-color-4-hsla-1",
    "2d.fillStyle.parse.css-color-4-hsla-2",
    "2d.fillStyle.parse.css-color-4-hsla-3",
    "2d.fillStyle.parse.css-color-4-hsla-4",
    "2d.fillStyle.parse.css-color-4-hsla-5",
    "2d.fillStyle.parse.css-color-4-hsla-6",
    "2d.fillStyle.parse.css-color-4-hsla-7",
    "2d.fillStyle.parse.css-color-4-hsla-8",
    "2d.fillStyle.parse.css-color-4-hsla-9",
    "2d.fillStyle.parse.css-color-4-rgb-1",
    "2d.fillStyle.parse.css-color-4-rgb-2",
    "2d.fillStyle.parse.css-color-4-rgb-3",
    "2d.fillStyle.parse.css-color-4-rgb-4",
    "2d.fillStyle.parse.css-color-4-rgb-5",
    "2d.fillStyle.parse.css-color-4-rgb-6",
    "2d.fillStyle.parse.css-color-4-rgba-1",
    "2d.fillStyle.parse.css-color-4-rgba-2",
    "2d.fillStyle.parse.css-color-4-rgba-3",
    "2d.fillStyle.parse.css-color-4-rgba-4",
    "2d.fillStyle.parse.css-color-4-rgba-5",
    "2d.fillStyle.parse.css-color-4-rgba-6",
    "2d.fillStyle.parse.hex3",
    "2d.fillStyle.parse.hex4",
    "2d.fillStyle.parse.hex6",
    "2d.fillStyle.parse.hex8",
    "2d.fillStyle.parse.hsl-1",
    "2d.fillStyle.parse.hsl-2",
    "2d.fillStyle.parse.hsl-3",
    "2d.fillStyle.parse.hsl-4",
    "2d.fillStyle.parse.hsl-5",
    "2d.fillStyle.parse.hsl-6",
    "2d.fillStyle.parse.hsl-clamp-1",
    "2d.fillStyle.parse.hsl-clamp-2",
    "2d.fillStyle.parse.hsl-clamp-3",
    "2d.fillStyle.parse.hsl-clamp-4",
    "2d.fillStyle.parse.hsl-clamp-negative-saturation",
    "2d.fillStyle.parse.hsla-1",
    "2d.fillStyle.parse.hsla-2",
    "2d.fillStyle.parse.hsla-clamp-1",
    "2d.fillStyle.parse.hsla-clamp-2",
    "2d.fillStyle.parse.hsla-clamp-3",
    "2d.fillStyle.parse.hsla-clamp-4",
    "2d.fillStyle.parse.hsla-clamp-5",
    "2d.fillStyle.parse.hsla-clamp-6",
    "2d.fillStyle.parse.hsla-clamp-alpha-1",
    "2d.fillStyle.parse.hsla-clamp-alpha-2",
    "2d.fillStyle.parse.hsla-clamp-negative-saturation",
    "2d.fillStyle.parse.html4",
    "2d.fillStyle.parse.invalid.css-color-4-hsl-1",
    "2d.fillStyle.parse.invalid.css-color-4-hsl-2",
    "2d.fillStyle.parse.invalid.css-color-4-hsl-3",
    "2d.fillStyle.parse.invalid.css-color-4-hsl-4",
    "2d.fillStyle.parse.invalid.css-color-4-hsl-5",
    "2d.fillStyle.parse.invalid.css-color-4-hsl-6",
    "2d.fillStyle.parse.invalid.css-color-4-hsl-7",
    "2d.fillStyle.parse.invalid.css-color-4-hsla-1",
    "2d.fillStyle.parse.invalid.css-color-4-hsla-2",
    "2d.fillStyle.parse.invalid.css-color-4-hsla-3",
    "2d.fillStyle.parse.invalid.css-color-4-rgb-1",
    "2d.fillStyle.parse.invalid.css-color-4-rgb-2",
    "2d.fillStyle.parse.invalid.css-color-4-rgb-3",
    "2d.fillStyle.parse.invalid.css-color-4-rgb-4",
    "2d.fillStyle.parse.invalid.css-color-4-rgb-5",
    "2d.fillStyle.parse.invalid.css-color-4-rgb-6",
    "2d.fillStyle.parse.invalid.css-color-4-rgb-7",
    "2d.fillStyle.parse.invalid.css-color-4-rgba-1",
    "2d.fillStyle.parse.invalid.css-color-4-rgba-2",
    "2d.fillStyle.parse.invalid.css-color-4-rgba-3",
    "2d.fillStyle.parse.invalid.hex1",
    "2d.fillStyle.parse.invalid.hex2",
    "2d.fillStyle.parse.invalid.hex3",
    "2d.fillStyle.parse.invalid.hex4",
    "2d.fillStyle.parse.invalid.hex5",
    "2d.fillStyle.parse.invalid.hex6",
    "2d.fillStyle.parse.invalid.hex7",
    "2d.fillStyle.parse.invalid.hex8",
    "2d.fillStyle.parse.invalid.hsl-1",
    "2d.fillStyle.parse.invalid.hsl-2",
    "2d.fillStyle.parse.invalid.hsl-3",
    "2d.fillStyle.parse.invalid.hsl-4",
    "2d.fillStyle.parse.invalid.hsl-5",
    "2d.fillStyle.parse.invalid.hsl-6",
    "2d.fillStyle.parse.invalid.hsla-1",
    "2d.fillStyle.parse.invalid.hsla-2",
    "2d.fillStyle.parse.invalid.hsla-3",
    "2d.fillStyle.parse.invalid.name-1",
    "2d.fillStyle.parse.invalid.name-2",
    "2d.fillStyle.parse.invalid.name-3",
    "2d.fillStyle.parse.invalid.name-4",
    "2d.fillStyle.parse.invalid.name-5",
    "2d.fillStyle.parse.invalid.no-context.em-1",
    "2d.fillStyle.parse.invalid.no-context.em-2",
    "2d.fillStyle.parse.invalid.no-context.em-3",
    "2d.fillStyle.parse.invalid.no-context.em-4",
    "2d.fillStyle.parse.invalid.no-context.random-1",
    "2d.fillStyle.parse.invalid.no-context.random-2",
    "2d.fillStyle.parse.invalid.no-context.random-3",
    "2d.fillStyle.parse.invalid.no-context.random-4",
    "2d.fillStyle.parse.invalid.rgb-1",
    "2d.fillStyle.parse.invalid.rgb-2",
    "2d.fillStyle.parse.invalid.rgb-3",
    "2d.fillStyle.parse.invalid.rgba-1",
    "2d.fillStyle.parse.invalid.rgba-2",
    "2d.fillStyle.parse.invalid.rgba-3",
    "2d.fillStyle.parse.invalid.rgba-4",
    "2d.fillStyle.parse.invalid.rgba-5",
    "2d.fillStyle.parse.rgb-clamp-1",
    "2d.fillStyle.parse.rgb-clamp-2",
    "2d.fillStyle.parse.rgb-clamp-3",
    "2d.fillStyle.parse.rgb-clamp-4",
    "2d.fillStyle.parse.rgb-clamp-5",
    "2d.fillStyle.parse.rgb-eof",
    "2d.fillStyle.parse.rgb-num",
    "2d.fillStyle.parse.rgb-percent",
    "2d.fillStyle.parse.rgba-clamp-1",
    "2d.fillStyle.parse.rgba-clamp-2",
    "2d.fillStyle.parse.rgba-eof",
    "2d.fillStyle.parse.rgba-num-1",
    "2d.fillStyle.parse.rgba-num-2",
    "2d.fillStyle.parse.rgba-percent",
    "2d.fillStyle.parse.rgba-solid-1",
    "2d.fillStyle.parse.rgba-solid-2",
    "2d.fillStyle.parse.rgba-solid-3",
    "2d.fillStyle.parse.rgba-solid-4",
    "2d.fillStyle.parse.svg-1",
    "2d.fillStyle.parse.svg-2",
    "2d.fillStyle.parse.system",
    "2d.fillStyle.parse.transparent-1",
    "2d.fillStyle.parse.transparent-2",
]
CASES['text'] += ['2d.text.font.parse.family', '2d.text.font.parse.system']

CASES['drawing-images-to-the-canvas'] = [
    "2d.drawImage.3arg",
    "2d.drawImage.5arg",
    "2d.drawImage.9arg.basic",
    "2d.drawImage.9arg.destpos",
    "2d.drawImage.9arg.destsize",
    "2d.drawImage.9arg.sourcepos",
    "2d.drawImage.9arg.sourcesize",
    "2d.drawImage.alpha",
    "2d.drawImage.broken",
    "2d.drawImage.canvas",
    "2d.drawImage.clip",
    "2d.drawImage.composite",
    "2d.drawImage.floatsource",
    "2d.drawImage.negativedest",
    "2d.drawImage.negativedir",
    "2d.drawImage.negativesource",
    "2d.drawImage.nonfinite",
    "2d.drawImage.nowrap",
    "2d.drawImage.null",
    "2d.drawImage.path",
    "2d.drawImage.self.1",
    "2d.drawImage.self.2",
    "2d.drawImage.transform",
    "2d.drawImage.wrongtype",
    "2d.drawImage.zerocanvas",
    "2d.drawImage.zerosource",
]
CASES['path-objects'] = [
    '2d.path.roundrect.1.radius.dompoint.single.argument',
    '2d.path.roundrect.1.radius.dompoint',
    '2d.path.roundrect.1.radius.dompointinit.single.argument',
    '2d.path.roundrect.1.radius.dompointinit',
    '2d.path.roundrect.1.radius.double.single.argument',
    '2d.path.roundrect.1.radius.double',
    '2d.path.roundrect.2.radii.1.dompoint',
    '2d.path.roundrect.2.radii.1.dompointinit',
    '2d.path.roundrect.2.radii.1.double',
    '2d.path.roundrect.2.radii.2.dompoint',
    '2d.path.roundrect.2.radii.2.dompointinit',
    '2d.path.roundrect.2.radii.2.double',
    '2d.path.roundrect.3.radii.1.dompoint',
    '2d.path.roundrect.3.radii.1.dompointinit',
    '2d.path.roundrect.3.radii.1.double',
    '2d.path.roundrect.3.radii.2.dompoint',
    '2d.path.roundrect.3.radii.2.dompointinit',
    '2d.path.roundrect.3.radii.2.double',
    '2d.path.roundrect.3.radii.3.dompoint',
    '2d.path.roundrect.3.radii.3.dompointinit',
    '2d.path.roundrect.3.radii.3.double',
    '2d.path.roundrect.4.radii.1.dompoint',
    '2d.path.roundrect.4.radii.1.dompointinit',
    '2d.path.roundrect.4.radii.1.double',
    '2d.path.roundrect.4.radii.2.dompoint',
    '2d.path.roundrect.4.radii.2.dompointinit',
    '2d.path.roundrect.4.radii.2.double',
    '2d.path.roundrect.4.radii.3.dompoint',
    '2d.path.roundrect.4.radii.3.dompointinit',
    '2d.path.roundrect.4.radii.3.double',
    '2d.path.roundrect.4.radii.4.dompoint',
    '2d.path.roundrect.4.radii.4.dompointinit',
    '2d.path.roundrect.4.radii.4.double',
    '2d.path.roundrect.badinput',
    '2d.path.roundrect.closed',
    '2d.path.roundrect.end.1',
    '2d.path.roundrect.end.2',
    '2d.path.roundrect.end.3',
    '2d.path.roundrect.end.4',
    '2d.path.roundrect.negative',
    '2d.path.roundrect.newsubpath',
    '2d.path.roundrect.nonfinite',
    '2d.path.roundrect.radius.intersecting.1',
    '2d.path.roundrect.radius.intersecting.2',
    '2d.path.roundrect.radius.negative',
    '2d.path.roundrect.radius.noargument',
    '2d.path.roundrect.radius.none',
    '2d.path.roundrect.radius.toomany',
    '2d.path.roundrect.selfintersect',
    '2d.path.roundrect.winding',
    '2d.path.roundrect.zero.1',
    '2d.path.roundrect.zero.2',
    '2d.path.roundrect.zero.3',
    '2d.path.roundrect.zero.4',
    '2d.path.roundrect.zero.5',
    '2d.path.roundrect.zero.6',
]

CASES['pixel-manipulation'] = ['2d.imageData.' + suffix for suffix in [
    'create1.basic', 'create1.initial', 'create1.zero',
    'create2.basic', 'create2.double', 'create2.initial', 'create2.negative',
    'create2.nonfinite', 'create2.round', 'create2.zero',
    'get.basic', 'get.clamp', 'get.double', 'get.invalid', 'get.length',
    'get.nonfinite', 'get.nonpremul', 'get.order.alpha', 'get.order.cols',
    'get.order.rgb', 'get.order.rows', 'get.range', 'get.rounding',
    'get.source.negative', 'get.source.outside', 'get.source.size',
    'get.unaffected', 'get.zero',
    'put.alpha', 'put.basic', 'put.clip', 'put.created', 'put.cross',
    'put.dirty.negative', 'put.dirty.outside', 'put.dirty.rect1',
    'put.dirty.rect2', 'put.dirty.zero', 'put.modified', 'put.nonfinite',
    'put.null', 'put.path', 'put.unaffected', 'put.unchanged', 'put.wrongtype',
]]
CASES['fill-and-stroke-styles'] += [
    '2d.gradient.object.invalidcolor', '2d.gradient.object.invalidoffset',
    '2d.gradient.linear.nonfinite', '2d.gradient.radial.nonfinite',
    '2d.pattern.transform.invalid', '2d.fillStyle.invalidtype',
]

CASES['fill-and-stroke-styles'] += [
    f'2d.gradient.{kind}.transform.{n}'
    for kind in ['linear', 'radial'] for n in range(1, 4)
]

IMAGES = [
    "images/broken.png",
    "images/wide-gamut-pattern.png",
    "html/canvas/element/manual/wide-gamut-canvas/resources/Display-P3-BB0000FF.png",
    "html/canvas/element/manual/imagebitmap/resources/squares_6.jpg",
    "images/ggrr-256x256.png",
    "images/green.png",
    "images/red.png",
    "images/redtransparent.png",
    "images/rgrg-256x256.png",
]

GRIDS = ["2d.composite.grid.filter.shadow." + kind
         for kind in ["fillRect", "drawImage", "pattern"]]
FONTS = ["CanvasTest", "CanvasTest-ascent256", "CanvasTest-descent0"]
FONT_SYNTAX = ["font-valid", "font-invalid"]
BITMAP_SCRIPTS = ["createImageBitmap-premultiplyAlpha"]


def fetch(path):
    for attempt in range(3):
        try:
            response = subprocess.check_output([
                "gh", "api", "--cache", "24h",
                f"repos/web-platform-tests/wpt/contents/{path}?ref={REVISION}"
            ])
            break
        except subprocess.CalledProcessError:
            if attempt == 2:
                raise
            time.sleep(attempt + 1)
    return base64.b64decode(json.loads(response)["content"])


def main():
    paths = [f"html/canvas/offscreen/{area}/{name}.worker.js"
             for area, names in CASES.items() for name in names]
    paths += [f"fonts/{name}.ttf" for name in FONTS]
    paths += [f"html/canvas/offscreen/compositing/{name}{suffix}"
              for name in GRIDS for suffix in [".w.html", "-expected.html", ".png"]]
    paths += IMAGES
    paths += [f"css/css-fonts/parsing/{name}.html" for name in FONT_SYNTAX]
    paths += [f"html/canvas/element/manual/imagebitmap/{name}.html" for name in BITMAP_SCRIPTS]
    paths += ["LICENSE.md"]
    with concurrent.futures.ThreadPoolExecutor(max_workers=5) as pool:
        content = dict(zip(paths, pool.map(fetch, paths)))
    OUTPUT.mkdir(parents=True, exist_ok=True)
    manifest = {
        "repository": "https://github.com/web-platform-tests/wpt",
        "revision": REVISION,
        "files": {path: hashlib.sha256(data).hexdigest()
                  for path, data in content.items()},
    }
    (OUTPUT / "manifest.json").write_text(json.dumps(manifest, indent=2) + "\n")
    (OUTPUT / "LICENSE.md").write_bytes(content["LICENSE.md"])
    source = ["// Generated by tool/import_wpt.py. WPT sources are BSD-3-Clause.",
              "// See manifest.json and README.md for provenance and adapters.",
              "const wptCases = <String, String>{"]
    for path in paths:
        if path.endswith(".worker.js"):
            name = path.rsplit("/", 1)[1].removesuffix(".worker.js")
            script = content[path].decode()
            assert "'''" not in script
            source.append(f"  '{name}': r'''{script}''',")
    source += ["};", "const wptFontSyntax = <String, String>{"]
    for name in FONT_SYNTAX:
        html = content[f"css/css-fonts/parsing/{name}.html"].decode()
        script = "\n".join(re.findall(r"<script>(.*?)</script>", html, re.S))
        assert script and "'''" not in script
        source.append(f"  '{name}': r'''{script}''',")
    source += ["};", "const wptBitmapScripts = <String, String>{"]
    for name in BITMAP_SCRIPTS:
        html = content[f"html/canvas/element/manual/imagebitmap/{name}.html"].decode()
        script = "\n".join(re.findall(r"<script>(.*?)</script>", html, re.S))
        assert script and "'''" not in script
        source.append(f"  '{name}': r'''{script}''',")
    source += ["};", "const wptImages = <String, String>{"]
    for path in IMAGES:
        encoded = base64.b64encode(content[path]).decode()
        source.append(f"  '/{path}': '{encoded}',")
    source += ["};", "const wptFonts = <String, String>{"]
    for name in FONTS:
        data = base64.b64encode(content[f"fonts/{name}.ttf"]).decode()
        source.append(f"  '{name}': '{data}',")
    source += ["};", "const wptGrids = <String, (List<String>, String)>{"]
    for name in GRIDS:
        prefix = f"html/canvas/offscreen/compositing/{name}"
        html = content[prefix + ".w.html"].decode()
        blocks = re.findall(r'const canvas = new OffscreenCanvas.*?(?=const bitmap = canvas.transferToImageBitmap)', html, re.S)
        assert len(blocks) == 26
        assert 'maxDifference=0-4; totalPixels=0-33000' in html
        source.append(f"  '{name}': ([")
        for block in blocks:
            source.append("    r\"\"\"" + block + "\"\"\",")
        png = base64.b64encode(content[prefix + ".png"]).decode()
        source.append(f"  ], '{png}'),")
    source += ["};", ""]
    (OUTPUT / "cases.dart").write_text("\n".join(source))
    subprocess.run(["dart", "format", str(OUTPUT / "cases.dart")], check=True)
    print(f"Imported {sum(map(len, CASES.values()))} WPT cases and {len(FONTS)} fonts at {REVISION}")


if __name__ == "__main__":
    main()
