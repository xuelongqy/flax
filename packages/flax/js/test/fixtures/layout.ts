import { bind, signal } from '@flax/core';
import {
  registerPage,
  Expanded,
  Flexible,
  FlexFit,
  Row,
  Column,
  Stack,
  StackFit,
  Clip,
  Positioned,
  Align,
  Alignment,
  AlignmentDirectional,
  Builder,
  SizedBox,
  Text,
  type AlignmentGeometry,
} from '@flax/flutter/widgets';
import { ValueKey } from '@flax/flutter/foundation';
import { RetainedTile } from '../../../.dart_tool/flax/ui/repeated_bindings.js';

const state = {
  flex: signal(1),
  fit: signal(FlexFit.loose),
  swap: signal(false),
  show: signal(true),
  changed: signal(false),
  epoch: signal(0),
  count: signal(0),
  left: signal<number | null>(10),
  right: signal<number | null>(null),
  top: signal<number | null>(20),
  bottom: signal<number | null>(null),
  width: signal<number | null>(60),
  height: signal<number | null>(40),
  alignment: signal<AlignmentGeometry>(AlignmentDirectional.topStart),
  stackFit: signal(StackFit.loose),
  clip: signal(Clip.hardEdge),
  factor: signal<number | null>(null),
  factories: 0,
  builders: 0,
  Alignment,
  AlignmentDirectional,
  FlexFit,
  StackFit,
  Clip,
};
Object.assign(globalThis, { layout: state });
const key = (name: string) => ValueKey(name);
const box = (name: string, width: number, height: number) =>
  SizedBox({ key: key(name), width, height, child: Text(name) });

registerPage('flex', (params) => {
  state.factories++;
  const a = Expanded({
    key: key('a'),
    flex: state.flex.bind,
    child: box('a-box', 40, 30),
  });
  const b = Flexible({
    key: key('b'),
    flex: 2,
    fit: state.fit.bind,
    child: box('b-box', 50, 40),
  });
  const vertical = (params.value as { vertical: boolean }).vertical;
  return SizedBox({
    width: 300,
    height: 200,
    child: (vertical ? Column : Row)({
      key: key('flex-parent'),
      children: [a, b],
    }),
  });
});

registerPage('stack', () =>
  Stack({
    key: key('stack'),
    alignment: state.alignment.bind,
    fit: state.stackFit.bind,
    clipBehavior: state.clip.bind,
    children: [
      box('loose-box', 50, 30),
      Positioned({
        key: key('positioned'),
        left: state.left.bind,
        right: state.right.bind,
        top: state.top.bind,
        bottom: state.bottom.bind,
        width: state.width.bind,
        height: state.height.bind,
        child: box('positioned-box', 1, 1),
      }),
    ],
  }),
);

registerPage('align', () =>
  Align({
    key: key('align'),
    alignment: state.alignment.bind,
    widthFactor: state.factor.bind,
    heightFactor: state.factor.bind,
    child: box('aligned-box', 50, 30),
  }),
);

registerPage('defaults', () =>
  Row({
    children: [
      SizedBox({
        width: 100,
        height: 100,
        child: Stack({ children: [box('default-stack', 20, 20)] }),
      }),
      SizedBox({
        width: 100,
        height: 100,
        child: Align({ child: box('default-align', 20, 20) }),
      }),
    ],
  }),
);

registerPage('identity', () => {
  const tile = (name: string) =>
    RetainedTile({
      label: name,
      child: Text(
        bind(() => `${name}: ${state.count.value}`),
        { key: key(`text-${name}`) },
      ),
    });
  const a = Expanded({ key: key('a'), child: tile('a') });
  const b = Expanded({ key: key('b'), child: tile('b') });
  return SizedBox({
    height: 100,
    child: Row({
      key: key('identity-row'),
      children: bind(() => {
        state.epoch.value;
        const first = state.changed.value
          ? Flexible({ key: key('a'), child: tile('a') })
          : a;
        return state.show.value ? (state.swap.value ? [b, first] : [first, b]) : [b];
      }),
    }),
  });
});

registerPage('shared', () => {
  const shared = Expanded({
    key: key('shared'),
    child: RetainedTile({
      label: 'shared',
      child: Text(bind(() => `Shared ${state.count.value}`)),
    }),
  });
  return Column({
    children: [
      SizedBox({ height: 50, child: Row({ children: [shared] }) }),
      SizedBox({ height: 50, child: Row({ children: [shared] }) }),
    ],
  });
});

registerPage('builder', () =>
  Row({
    children: [
      Builder({
        builder: () => {
          state.builders++;
          return Expanded({
            child: Stack({
              children: [
                Builder({
                  builder: () => {
                    state.builders++;
                    return Positioned({
                      left: 10,
                      top: 20,
                      width: 60,
                      height: 40,
                      child: Text('Built'),
                    });
                  },
                }),
              ],
            }),
          });
        },
      }),
    ],
  }),
);

registerPage('bad-ancestor', () => Expanded({ child: Text('Invalid') }));
registerPage('cost', () =>
  Column({
    children: [
      Align({ key: key('static-align'), child: Text('Static') }),
      Align({
        key: key('dynamic-align'),
        alignment: state.alignment.bind,
        child: Text('Dynamic'),
      }),
    ],
  }),
);
registerPage('unbounded', () =>
  Column({ children: [Expanded({ child: Text('Invalid') })] }),
);
registerPage('conflict', () =>
  Row({ children: [Expanded({ child: Flexible({ child: Text('Invalid') }) })] }),
);
