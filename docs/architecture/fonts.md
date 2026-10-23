# Module and Canvas fonts

Canvas uses Flutter's registered fonts. Each Session owns a native
`dart:ui.FlaxFontCollection`: private module families are searched first, followed by
public host asset, host-loaded and system fonts. Canvas measurement and drawing use that
same collection; there is no separate Canvas font registry. A host-only context may
return null from `FlaxHostContext.fontCollection` to select public fonts.

## Module registration

Store a manifest and font in the business AssetBundle:

```json
{
  "formatVersion": 1,
  "fonts": {
    "body": {
      "family": "Brand",
      "asset": "assets/fonts/body.ttf",
      "sha256": "<64 lowercase hexadecimal characters>"
    }
  }
}
```

```ts
import { registerFont } from '@flax/core/assets';

const body = registerFont({ manifest: 'assets/module-fonts.json', name: 'body' });
const family = await body.ready;
const context = new OffscreenCanvas(320, 100).getContext('2d')!;
context.font = `24px ${JSON.stringify(family)}`;
context.fillText('Hello', 0, 30);
```

The optional family defaults to the entry name. Dart validates the path and SHA-256,
loads bytes into the existing engine collection, and returns the logical family name.
Font bytes do not cross JS. Identical manifest/name registrations reuse one resource
within a Session. Equal font bytes share native sources without sharing private family
registrations. Wait for `ready` before measuring or drawing; a retained Picture keeps
its earlier glyphs and is not reshaped when a font arrives.

## Existing Flutter APIs and lifetime

The Session resource scope also supplies ordinary Flutter text. JS FontLoader,
loadFontFromList, TextPainter and ParagraphBuilder use that domain through the existing
binding calls. Host Dart font loading remains public. Later public registrations refresh
private collections' public lookup caches before the next Canvas measure/draw.
Applications do not rewrite family strings with Session identifiers.

Session close releases its registrations. Mounted native resource scopes and existing
paragraphs retain independent ownership until they are released. `FlaxFontScope` lets a
host subtree retain a resource explicitly; it cannot combine different Session domains.
Disposing a declaration does not remove one family while the domain is still owned. One
manifest entry supplies one file; different faces may use the same logical family and
Flutter's normal style matching. Face replacement requires a new Session.

## Validation and limits

Canvas integration checks use two private fonts under the same escaped family name, a
third public-only Session, real glyph pixels, late host registration and native
ownership counts after close. The selected WPT suite checks parsing, metrics, spacing
and baselines. Font size keywords and ex/ch/ic use the Offscreen reference font; system
shorthands use Flutter's default family at 14px because no DOM element/theme exists. The
Canvas parser accepts CSS escapes/comments, decimal weights, oblique angles and typed
calc/min/max/clamp expressions. It preserves family names when resolving them through
the existing font collection. Native paragraph shaping supplies missing bold/italic
faces; Canvas also supplies static oblique shear. Missing small-cap features, complete
variable/fallback font matching, DOM-dependent units/variables, newer CSS math, mobile
runtime acceptance and extended font cache stress remain outside this validation.

See the [Canvas contract](canvas.md) and [coverage audit](canvas-api-coverage.md).
