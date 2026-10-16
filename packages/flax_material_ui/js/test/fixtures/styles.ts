import {
  dartType as selectDartType,
  dartTypes as nativeTypes,
} from '@flax/core/bindings';
import { bind, signal } from '@flax/core';
import {
  Builder,
  Column,
  EdgeInsets,
  FontStyle,
  Text,
  TextStyle,
  WidgetState,
  WidgetStateProperty,
  registerPage,
} from '@flax/flutter/widgets';
import { Color, FontWeight } from '@flax/flutter/services';
import { ValueKey } from '@flax/flutter/foundation';
import {
  ButtonStyle,
  InputDecoration,
  TextButton,
  TextField,
} from '@flax/flutter/material';

const StringKey = selectDartType(ValueKey, nativeTypes.string);

const normalColor = Color(0xff315cba);
const pressedColor = Color(0xffba315c);
const background = WidgetStateProperty.resolveWith<Color | null>((states) =>
  states.contains(WidgetState.pressed) ? pressedColor : normalColor,
);
// ButtonStyle requires double; TS number alone selects the broader Dart num type.
const elevation = selectDartType(
  WidgetStateProperty.resolveWith,
  nativeTypes.nullable(nativeTypes.double),
)((states) => (states.contains(WidgetState.pressed) ? 8 : 2));

const hooks = {
  Color,
  FontWeight,
  FontStyle,
  TextStyle,
  InputDecoration,
  ButtonStyle,
  WidgetState,
  background,
  elevation,
  normalColor,
  pressedColor,
  EdgeInsets,
  style: signal<TextStyle | null>(null),
  decoration: signal<InputDecoration | null>(null),
  fail: signal(false),
  staticBuilds: 0,
};
Object.assign(globalThis, { styles: hooks });

registerPage('styles', () => {
  hooks.style.value = TextStyle({ color: Color(0xff315cba), fontSize: 20 });
  hooks.decoration.value = InputDecoration({ labelText: 'Label', hintText: 'Hint' });
  return Column({
    children: [
      Text('Styled', {
        key: StringKey('styled'),
        style: bind(() => {
          if (hooks.fail.value) throw Error('style failed');
          return hooks.style.value;
        }),
      }),
      TextField({
        key: StringKey('decorated'),
        style: hooks.style.bind,
        decoration: hooks.decoration.bind,
      }),
      TextField({ key: StringKey('default') }),
      TextField({ key: StringKey('undefined'), decoration: undefined }),
      TextField({ key: StringKey('plain'), decoration: null }),
      TextButton({
        key: StringKey('state-style'),
        style: ButtonStyle({
          backgroundColor: background,
          overlayColor: background,
          elevation,
        }),
        onPressed: () => {},
        child: Text('State styled'),
      }),
      Builder({
        key: StringKey('static'),
        builder: () => {
          hooks.staticBuilds++;
          return Text('Static style sibling');
        },
      }),
    ],
  });
});
