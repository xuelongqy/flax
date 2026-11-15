import { bind, signal } from '@flax/core';
import { Duration } from '@flax/dart/core';
import { Color, Paint, PaintingStyle, Path, Size } from '@flax/dart/ui';
import {
  BeveledRectangleBorder,
  BorderRadius,
  EdgeInsets,
} from '@flax/flutter/painting';
import { CustomPainter } from '@flax/flutter/rendering';
import {
  AnimatedOpacity,
  CustomPaint,
  IgnorePointer,
  Listener,
  Positioned,
  RepaintBoundary,
  Semantics,
  SizedBox,
  Stack,
  Container,
  type Widget,
} from '@flax/flutter/widgets';
import { TextButton } from '@flax/material-ui';

const painters = new Map<string, CustomPainter>();
export function chrome(
  kind: 'panel' | 'action' | 'primary' | 'glow' | 'banner',
): CustomPainter {
  const cached = painters.get(kind);
  if (cached) return cached;
  const fill = Paint();
  fill.color = Color(kind === 'primary' ? 0xed153e49 : 0xe60d1923);
  const edge = Paint();
  edge.style = PaintingStyle.stroke;
  edge.strokeWidth = kind === 'glow' ? 2 : 1;
  edge.color = Color(kind === 'glow' || kind === 'primary' ? 0xff63f5f4 : 0xff507386);
  const haze = Paint();
  haze.style = PaintingStyle.stroke;
  haze.strokeWidth = 7;
  haze.color = Color(0x2463f5f4);
  const trim = Paint();
  trim.style = PaintingStyle.stroke;
  trim.strokeWidth = 2;
  trim.color = Color(0xff63f5f4);
  const painter = CustomPainter.implement([], {
    paint(canvas, size) {
      const w = size.width - 2,
        h = size.height - 2,
        cut = Math.min(12, h / 4);
      if (kind === 'banner') {
        const wings = Path();
        wings.moveTo(0, h / 2);
        wings.lineTo(44, h / 2);
        wings.lineTo(56, h);
        wings.lineTo(w - 56, h);
        wings.lineTo(w - 44, h / 2);
        wings.lineTo(w, h / 2);
        canvas.drawPath(wings, haze);
        canvas.drawPath(wings, trim);
        return;
      }
      const outline = Path();
      outline.moveTo(1 + cut, 1);
      outline.lineTo(w, 1);
      outline.lineTo(w, h - cut);
      outline.lineTo(w - cut, h);
      outline.lineTo(1, h);
      outline.lineTo(1, 1 + cut);
      outline.close();
      if (kind === 'glow') canvas.drawPath(outline, haze);
      else canvas.drawPath(outline, fill);
      canvas.drawPath(outline, edge);
      const accents = Path();
      accents.moveTo(1, 1 + cut + Math.min(20, h / 5));
      accents.lineTo(1, 1 + cut);
      accents.lineTo(1 + cut, 1);
      accents.lineTo(1 + cut + Math.min(44, w / 5), 1);
      accents.moveTo(w, h - cut - Math.min(20, h / 5));
      accents.lineTo(w, h - cut);
      accents.lineTo(w - cut, h);
      accents.lineTo(w - cut - Math.min(44, w / 5), h);
      canvas.drawPath(accents, trim);
    },
    shouldRepaint: () => false,
  });
  painters.set(kind, painter);
  return painter;
}
export function upgradeHeading(child: Widget): Widget {
  return RepaintBoundary({
    child: CustomPaint({
      painter: chrome('banner'),
      child: Container({
        padding: EdgeInsets.symmetric({ horizontal: 55, vertical: 6 }),
        child,
      }),
    }),
  });
}
export function panel(child: Widget, padding = 20): Widget {
  return RepaintBoundary({
    child: CustomPaint({
      painter: chrome('panel'),
      child: Container({ padding: EdgeInsets.all(padding), child }),
    }),
  });
}
let buttonStyle: ReturnType<typeof TextButton.styleFrom> | undefined;
const transition = Duration({ milliseconds: 140 });
const immediate = Duration({ milliseconds: 0 });

/** Native buttons keep keyboard and accessibility behavior; only their chrome is custom. */
export function action(
  child: Widget,
  onPressed: () => void,
  options: {
    primary?: boolean;
    autofocus?: boolean;
    reducedMotion?: boolean;
    semanticLabel?: string;
    padding?: number;
  } = {},
): Widget {
  const focused = signal(options.autofocus ?? false),
    hovered = signal(false),
    pressed = signal(false);
  buttonStyle ??= TextButton.styleFrom({
    minimumSize: Size(48, 48),
    padding: EdgeInsets.all(0),
    foregroundColor: Color(0xff63f5f4),
    overlayColor: Color(0),
    shape: BeveledRectangleBorder({ borderRadius: BorderRadius.circular(12) }),
  });
  const button = Listener({
    onPointerDown: () => {
      pressed.value = true;
    },
    onPointerUp: () => {
      pressed.value = false;
    },
    onPointerCancel: () => {
      pressed.value = false;
    },
    child: TextButton({
      style: buttonStyle,
      autofocus: options.autofocus ?? false,
      onPressed,
      onHover: (value) => {
        hovered.value = value;
      },
      onFocusChange: (value) => {
        focused.value = value;
      },
      child: Stack({
        children: [
          CustomPaint({
            painter: chrome(options.primary ? 'primary' : 'action'),
            child: Container({ padding: EdgeInsets.all(options.padding ?? 12), child }),
          }),
          Positioned.fill({
            child: IgnorePointer({
              child: SizedBox({
                child: bind(() =>
                  AnimatedOpacity({
                    opacity: pressed.value
                      ? 1
                      : focused.value
                        ? 0.8
                        : hovered.value
                          ? 0.55
                          : 0,
                    duration: options.reducedMotion ? immediate : transition,
                    child: CustomPaint({ painter: chrome('glow') }),
                  }),
                ),
              }),
            }),
          }),
        ],
      }),
    }),
  });
  return options.semanticLabel
    ? Semantics({ label: options.semanticLabel, child: button })
    : button;
}
