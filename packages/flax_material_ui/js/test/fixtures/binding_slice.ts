import { bind, signal } from '@flax/core';
import {
  BorderRadius,
  Clip,
  Column,
  Row,
  SizedBox,
  Spacer,
  Text,
  TextStyle,
  registerPage,
} from '@flax/flutter/widgets';
import { ValueKey } from '@flax/flutter/foundation';
import { Color } from '@flax/flutter/services';
import {
  InkWell,
  LinearProgressIndicator,
  Material,
  MaterialType,
} from '@flax/flutter/material';

const slice = {
  flex: signal(2),
  progress: signal<number | null>(0.25),
  styled: signal(false),
  showInk: signal(true),
  taps: signal(0),
  longPresses: 0,
  hover: [] as boolean[],
  highlight: [] as boolean[],
};
Object.assign(globalThis, { slice });

registerPage('binding-slice', () => {
  const foreground = Color(0xff1565c0);
  const background = Color(0xffe3f2fd);
  const textStyle = TextStyle({ inherit: false, color: foreground, fontSize: 22 });
  const radius = BorderRadius.circular(8);
  return Material({
    key: ValueKey('slice-material'),
    type: MaterialType.card,
    elevation: 2,
    color: bind(() => (slice.styled.value ? background : null)),
    shadowColor: foreground,
    surfaceTintColor: background,
    textStyle: bind(() => (slice.styled.value ? textStyle : null)),
    borderRadius: radius,
    clipBehavior: Clip.antiAlias,
    child: Column({
      children: [
        SizedBox({
          height: 40,
          child: Row({
            children: [
              SizedBox({ key: ValueKey('slice-left'), width: 20, height: 20 }),
              Spacer({ key: ValueKey('slice-default-spacer') }),
              SizedBox({ key: ValueKey('slice-middle'), width: 20, height: 20 }),
              Spacer({ key: ValueKey('slice-weighted-spacer'), flex: slice.flex.bind }),
              SizedBox({ key: ValueKey('slice-right'), width: 20, height: 20 }),
            ],
          }),
        }),
        SizedBox({
          height: 64,
          child: bind(() =>
            slice.showInk.value
              ? InkWell({
                  key: ValueKey('slice-ink'),
                  onTap: () => {
                    slice.taps.value++;
                    slice.progress.value = 0.5;
                  },
                  onLongPress: () => slice.longPresses++,
                  onHover: (value) => slice.hover.push(value),
                  onHighlightChanged: (value) => slice.highlight.push(value),
                  splashColor: foreground,
                  highlightColor: background,
                  hoverColor: background,
                  borderRadius: radius,
                  enableFeedback: false,
                  child: SizedBox({
                    width: 300,
                    height: 64,
                    child: Text(
                      bind(() => `Taps ${slice.taps.value}`),
                      {
                        key: ValueKey('slice-text'),
                      },
                    ),
                  }),
                })
              : null,
          ),
        }),
        LinearProgressIndicator({
          key: ValueKey('slice-progress'),
          value: slice.progress.bind,
          color: bind(() => (slice.styled.value ? foreground : null)),
          backgroundColor: bind(() => (slice.styled.value ? background : null)),
          minHeight: 6,
          borderRadius: BorderRadius.circular(4),
          semanticsLabel: 'Binding progress',
          semanticsValue: bind(() =>
            slice.progress.value === null ? null : `${slice.progress.value * 100}%`,
          ),
        }),
      ],
    }),
  });
});
