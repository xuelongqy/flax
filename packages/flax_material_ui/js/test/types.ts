import { signal } from '@flax/core';
import { BorderRadius, Clip, Spacer, Text, TextStyle } from '@flax/flutter/widgets';
import { ValueKey } from '@flax/flutter/foundation';
import { Color } from '@flax/flutter/services';
import {
  InkWell,
  LinearProgressIndicator,
  Material,
  MaterialType,
} from '@flax/flutter/material';

const radius = BorderRadius.circular(8);
const color = Color(0xff1565c0);
const progress = signal<number | null>(0.25);
const child = InkWell({
  key: ValueKey('ink'),
  child: Text('Tap'),
  onTap: () => {},
  onLongPress: null,
  onHover: (value: boolean) => {},
  onHighlightChanged: (value: boolean) => {},
  splashColor: color,
  highlightColor: color,
  hoverColor: color,
  borderRadius: radius,
  enableFeedback: false,
});
Material({
  type: MaterialType.card,
  child,
  color,
  elevation: 2,
  shadowColor: color,
  surfaceTintColor: color,
  textStyle: TextStyle({ fontSize: 18 }),
  borderRadius: radius,
  clipBehavior: Clip.antiAlias,
});
Spacer({ flex: signal(2).bind });
LinearProgressIndicator({
  value: progress.bind,
  color,
  backgroundColor: null,
  minHeight: 6,
  semanticsLabel: 'Loading',
  semanticsValue: '25%',
  borderRadius: radius,
});
LinearProgressIndicator({ value: undefined, color: null });
// @ts-expect-error Flex is a number, not a string.
Spacer({ flex: '2' });
// @ts-expect-error A Material enum cannot be replaced by another Core enum.
Material({ type: Clip.none });
// @ts-expect-error Colors are Core values, not raw ARGB integers.
Material({ color: 0xff1565c0 });
// @ts-expect-error Hover callbacks receive a boolean.
InkWell({ onHover: (value: string) => {} });
// @ts-expect-error Widget children cannot be replaced by scalar values.
InkWell({ child: 1 });
// @ts-expect-error Progress remains numeric or null.
LinearProgressIndicator({ value: '0.5' });
// @ts-expect-error Feedback uses a non-nullable boolean.
InkWell({ enableFeedback: null });
