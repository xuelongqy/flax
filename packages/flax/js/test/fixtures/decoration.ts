import { bind, signal } from '@flax/core';
import * as f from '@flax/core/flutter';
import { RetainedTile } from '../../../.dart_tool/flax/ui/repeated_bindings.js';

const red = f.Color(0xffff0000);
const blue = f.Color(0xff0000ff);
const green = f.Color(0xff00ff00);
const state = {
  ...f,
  red,
  blue,
  green,
  color: signal(red),
  width: signal(4),
  padding: signal<f.EdgeInsetsGeometry | null>(f.EdgeInsets.zero),
  bad: signal(false),
  clip: signal(f.Clip.none),
  node: signal<f.Widget | null>(
    f.SizedBox({ key: f.ValueKey('valid'), width: 20, height: 20 }),
  ),
  factories: 0,
};
Object.assign(globalThis, { decoration: state });
const key = (value: string) => f.ValueKey(value);
const leaf = () =>
  f.Container({ key: key('leaf'), width: 24, height: 18, color: green });

f.registerPage('decoration', (params) => {
  const name = (params.value as { scene: string }).scene;
  const side = (width: number) => f.BorderSide({ color: blue, width });
  const base = f.BoxDecoration({
    color: red,
    border: f.Border.all({ color: blue, width: 4 }),
  });
  switch (name) {
    case 'geometry':
      return f.Container({
        width: 100,
        height: 90,
        constraints: f.BoxConstraints({ maxWidth: 110, maxHeight: 100 }),
        alignment: f.AlignmentDirectional.centerStart,
        margin: f.EdgeInsetsDirectional.fromSTEB(3, 5, 9, 7),
        padding: f.EdgeInsetsDirectional.only({ start: 11, end: 2, top: 6 }),
        decoration: base,
        child: leaf(),
      });
    case 'empty':
      return f.Container({
        constraints: f.BoxConstraints.tightFor({ width: 70, height: 40 }),
        decoration: base,
      });
    case 'expand':
      return f.Container({ constraints: f.BoxConstraints.expand(), color: red });
    case 'foreground':
      return f.Container({
        width: 100,
        height: 90,
        color: red,
        foregroundDecoration: f.BoxDecoration({ color: blue }),
        child: leaf(),
      });
    case 'decorated':
      return f.DecoratedBox({ decoration: base, child: leaf() });
    case 'decorated-foreground':
      return f.DecoratedBox({
        decoration: base,
        position: f.DecorationPosition.foreground,
        child: leaf(),
      });
    case 'sides':
      return f.Container({
        width: 100,
        height: 90,
        decoration: f.BoxDecoration({
          color: red,
          border: f.Border({
            top: side(2),
            right: side(4),
            bottom: side(6),
            left: side(8),
          }),
        }),
        child: leaf(),
      });
    case 'directional':
      return f.Container({
        width: 100,
        height: 90,
        decoration: f.BoxDecoration({
          color: red,
          border: f.BorderDirectional({
            top: side(2),
            start: side(8),
            end: side(4),
            bottom: side(6),
          }),
          borderRadius: f.BorderRadiusDirectional.only({
            topStart: f.Radius.elliptical(18, 12),
            bottomEnd: f.Radius.circular(9),
          }),
        }),
        child: leaf(),
      });
    case 'corners':
      return f.Container({
        width: 100,
        height: 90,
        decoration: f.BoxDecoration({
          color: red,
          borderRadius: f.BorderRadius.only({
            topLeft: f.Radius.elliptical(18, 12),
            bottomRight: f.Radius.circular(9),
          }),
        }),
      });
    case 'circle':
      return f.Container({
        width: 100,
        height: 90,
        decoration: f.BoxDecoration({
          color: red,
          shape: f.BoxShape.circle,
          border: f.Border.all({ color: blue, width: 4 }),
        }),
      });
    case 'none':
      return f.Container({
        width: 100,
        height: 90,
        decoration: f.BoxDecoration({
          color: red,
          border: f.Border.all({ color: blue, width: 4, style: f.BorderStyle.none }),
        }),
        child: leaf(),
      });
    case 'center':
    case 'outside':
      return f.Container({
        width: 100,
        height: 90,
        decoration: f.BoxDecoration({
          color: red,
          border: f.Border.all({
            color: blue,
            width: 8,
            strokeAlign:
              name === 'center'
                ? f.BorderSide.strokeAlignCenter
                : f.BorderSide.strokeAlignOutside,
          }),
        }),
        child: leaf(),
      });
    case 'no-clip':
    case 'clip':
      return f.Container({
        width: 100,
        height: 90,
        decoration: f.BoxDecoration({
          color: red,
          borderRadius: f.BorderRadius.circular(24),
        }),
        clipBehavior: name === 'clip' ? f.Clip.hardEdge : f.Clip.none,
        child: f.Container({ color: green }),
      });
    case 'bad-paint':
      return f.Container({
        width: 100,
        height: 90,
        decoration: f.BoxDecoration({
          borderRadius: f.BorderRadius.circular(12),
          border: f.Border({
            top: side(4),
            bottom: f.BorderSide({ color: red, width: 4 }),
          }),
        }),
      });
    default:
      throw new Error(`Unknown scene: ${name}`);
  }
});
f.registerPage('state', () => {
  state.factories++;
  return f.Container({
    key: key('state-box'),
    clipBehavior: state.clip.bind,
    padding: state.padding.bind,
    decoration: bind(() => f.BoxDecoration({ color: state.color.value })),
    child: RetainedTile({ label: 'state', child: f.Text('Retained') }),
  });
});
f.registerPage('cost', () =>
  f.Row({
    children: [
      f.Container({
        key: key('static-box'),
        width: 100,
        height: 90,
        color: blue,
        child: f.Text('Static'),
      }),
      f.Container({
        key: key('dynamic-box'),
        width: 100,
        height: 90,
        decoration: bind(() =>
          state.bad.value
            ? ('invalid' as unknown as f.Decoration)
            : f.BoxDecoration({
                color: state.color.value,
                border: f.Border.all({ width: state.width.value, color: blue }),
              }),
        ),
        child: f.SizedBox({ key: key('cost-child'), width: 20, height: 20 }),
      }),
    ],
  }),
);
f.registerPage('values', () => f.SizedBox());

f.registerPage('invalid', () => f.Center({ child: state.node.bind }));
