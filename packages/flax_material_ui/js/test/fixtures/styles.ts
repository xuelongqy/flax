import { bind, signal } from '@flax/core';
import {
  Builder,
  Color,
  Column,
  EdgeInsets,
  FontStyle,
  FontWeight,
  Text,
  TextStyle,
  ValueKey,
  WidgetState,
  WidgetStateProperty,
  registerPage,
} from '@flax/core/flutter';
import { ButtonStyle, InputDecoration, TextButton, TextField } from '@flax/material-ui';

const normalColor = Color(0xff315cba);
const pressedColor = Color(0xffba315c);
const background = WidgetStateProperty.resolveWith<Color | null>((states) =>
  states.contains(WidgetState.pressed) ? pressedColor : normalColor,
);
const elevation = WidgetStateProperty.resolveWith<number | null>((states) =>
  states.contains(WidgetState.pressed) ? 8 : 2,
);

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
        key: ValueKey('styled'),
        style: bind(() => {
          if (hooks.fail.value) throw Error('style failed');
          return hooks.style.value;
        }),
      }),
      TextField({
        key: ValueKey('decorated'),
        style: hooks.style.bind,
        decoration: hooks.decoration.bind,
      }),
      TextField({ key: ValueKey('default') }),
      TextField({ key: ValueKey('undefined'), decoration: undefined }),
      TextField({ key: ValueKey('plain'), decoration: null }),
      TextButton({
        key: ValueKey('state-style'),
        style: ButtonStyle({
          backgroundColor: background,
          overlayColor: background,
          elevation,
        }),
        onPressed: () => {},
        child: Text('State styled'),
      }),
      Builder({
        key: ValueKey('static'),
        builder: () => {
          hooks.staticBuilds++;
          return Text('Static style sibling');
        },
      }),
    ],
  });
});
