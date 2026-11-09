import { Color, Paint, PaintingStyle, Path } from '@flax/dart/ui';
import { CustomPainter } from '@flax/flutter/rendering';
import {
  CustomPaint,
  RepaintBoundary,
  Semantics,
  SizedBox,
  type Widget,
} from '@flax/flutter/widgets';

type Glyph = 'bolt' | 'orbit' | 'chain' | 'crown' | 'pause';
const paths = new Map<Glyph, Path>();
const painters = new Map<string, CustomPainter>();

function geometry(kind: Glyph): Path {
  const cached = paths.get(kind);
  if (cached) return cached;
  const path = Path();
  const polygon = (points: number[][]): void => {
    path.moveTo(points[0]![0]!, points[0]![1]!);
    for (const [x, y] of points.slice(1)) path.lineTo(x!, y!);
    path.close();
  };
  if (kind === 'bolt') {
    polygon([
      [7, 14],
      [15, 6],
      [22, 3],
      [19, 10],
      [11, 17],
    ]);
    polygon([
      [2, 17],
      [7, 12],
      [9, 13],
      [4, 18],
    ]);
    polygon([
      [3, 22],
      [10, 15],
      [12, 17],
    ]);
    polygon([
      [10, 22],
      [15, 15],
      [17, 13],
      [15, 18],
    ]);
  } else if (kind === 'orbit') {
    for (let i = 0; i < 3; i++) {
      const angle = (i * Math.PI * 2) / 3;
      const point = (x: number, y: number): [number, number] => [
        12 + x * Math.cos(angle) - y * Math.sin(angle),
        12 + x * Math.sin(angle) + y * Math.cos(angle),
      ];
      path.moveTo(...point(-3, -10));
      path.cubicTo(...point(5, -11), ...point(10, -6), ...point(9, 1));
      path.cubicTo(...point(6, -3), ...point(2, -5), ...point(-3, -10));
      path.close();
    }
  } else if (kind === 'chain') {
    // A single outlined path keeps the link glyph crisp at the small HUD size.
    const nodes = [
      [3, 20],
      [9, 11],
      [16, 14],
      [22, 4],
    ];
    path.moveTo(3, 20);
    for (const [x, y] of nodes.slice(1)) path.lineTo(x!, y!);
    for (const [x, y] of nodes) {
      path.moveTo(x! + 2, y!);
      path.cubicTo(x! + 2, y! - 2.7, x! - 2, y! - 2.7, x! - 2, y!);
      path.cubicTo(x! - 2, y! + 2.7, x! + 2, y! + 2.7, x! + 2, y!);
      path.close();
    }
  } else if (kind === 'crown') {
    polygon([
      [2, 11],
      [8, 14],
      [7, 5],
      [11, 11],
      [14, 2],
      [16, 12],
      [22, 7],
      [19, 18],
      [5, 18],
    ]);
    polygon([
      [5, 20],
      [19, 20],
      [18, 22],
      [6, 22],
    ]);
  } else {
    polygon([
      [5, 4],
      [9, 4],
      [9, 20],
      [5, 20],
    ]);
    polygon([
      [15, 4],
      [19, 4],
      [19, 20],
      [15, 20],
    ]);
  }
  paths.set(kind, path);
  return path;
}

export function glyph(
  kind: Glyph,
  size: number,
  lit = true,
  semanticLabel?: string,
): Widget {
  const key = `${kind}/${lit}`;
  let painter = painters.get(key);
  if (!painter) {
    const path = geometry(kind);
    const paint = Paint();
    paint.color = Color(lit ? 0xff63f5f4 : 0xff31505d);
    if (kind === 'chain') {
      paint.style = PaintingStyle.stroke;
      paint.strokeWidth = 1.65;
    }
    const glow = Paint();
    glow.color = Color(0x2863f5f4);
    glow.style = PaintingStyle.stroke;
    glow.strokeWidth = kind === 'chain' ? 3.5 : 2;
    painter = CustomPainter.implement([], {
      paint(canvas, bounds) {
        canvas.save();
        canvas.scale(bounds.width / 24, bounds.height / 24);
        if (lit) canvas.drawPath(path, glow);
        canvas.drawPath(path, paint);
        canvas.restore();
      },
      shouldRepaint: () => true,
    });
    painters.set(key, painter);
  }
  const child = RepaintBoundary({
    child: SizedBox({ width: size, height: size, child: CustomPaint({ painter }) }),
  });
  return semanticLabel ? Semantics({ label: semanticLabel, child }) : child;
}
