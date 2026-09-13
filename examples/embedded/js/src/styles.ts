import { bind, computed, signal } from '@flax/core';
import {
  Builder,
  Color,
  Column,
  FocusNode,
  FontWeight,
  LengthLimitingTextInputFormatter,
  Navigator,
  Padding,
  EdgeInsets,
  Text,
  TextEditingController,
  ValueKey,
  WidgetState,
  WidgetStateProperty,
  registerPage,
} from '@flax/core/flutter';
import {
  Brightness,
  ButtonStyle,
  ColorScheme,
  InputDecoration,
  MaterialPageRoute,
  TextButton,
  TextField,
  Theme,
  ThemeData,
} from '@flax/material-ui';

registerPage('styles', (_, lifecycle) => {
  const controller = TextEditingController();
  const focus = FocusNode();
  const text = signal(controller.text);
  const focused = signal(false);
  const count = signal(0);
  const showError = signal(false);
  const error = computed(() =>
    showError.value && text.value.length === 0 ? 'Enter a name' : null,
  );
  const readText = () => {
    text.value = controller.text;
  };
  const readFocus = () => {
    focused.value = focus.hasFocus;
  };
  controller.addListener(readText);
  focus.addListener(readFocus);
  lifecycle.onDispose(() => controller.dispose());
  lifecycle.onDispose(() => focus.dispose());
  lifecycle.onDispose(() => controller.removeListener(readText));
  lifecycle.onDispose(() => focus.removeListener(readFocus));
  const formatter = LengthLimitingTextInputFormatter(20);
  const bold = FontWeight.bold;
  const seed = Color(0xff793ac1);
  let alternateButton = false;
  const makeButtonStyle = () => {
    const normal = Color(alternateButton ? 0xff315cba : 0xff793ac1);
    const pressed = Color(alternateButton ? 0xffba315c : 0xff315cba);
    return ButtonStyle({
      backgroundColor: WidgetStateProperty.resolveWith<Color | null>((states) =>
        states.contains(WidgetState.pressed) ? pressed : normal,
      ),
      foregroundColor: WidgetStateProperty.resolveWith<Color | null>(() =>
        Color(0xffffffff),
      ),
      elevation: WidgetStateProperty.resolveWith<number | null>((states) =>
        states.contains(WidgetState.pressed) ? 8 : 2,
      ),
    });
  };
  const buttonStyle = signal(makeButtonStyle());
  let localDark = true;
  const makeLocalTheme = () =>
    ThemeData({
      colorScheme: ColorScheme.fromSeed({
        seedColor: seed,
        brightness: localDark ? Brightness.dark : Brightness.light,
      }),
    });
  const local = signal(makeLocalTheme());

  const form = Builder({
    builder: (context) => {
      const theme = Theme.of(context);
      const colors = theme.colorScheme;
      const fonts = theme.textTheme;
      const errorStyle = fonts.bodyMedium?.copyWith({ color: colors.error });
      const fillColor = colors.surface;
      return Column({
        spacing: 8,
        children: [
          Text('Host-derived typography', { style: fonts.titleLarge }),
          TextField({
            key: ValueKey('styled-input'),
            controller,
            focusNode: focus,
            inputFormatters: [formatter],
            style: fonts.bodyMedium,
            decoration: bind(() =>
              InputDecoration({
                labelText: 'Display name',
                hintText: 'Up to 20 characters',
                helperText: 'Formatting and focus use Flutter',
                errorText: error.value,
                errorStyle,
                filled: true,
                fillColor,
              }),
            ),
          }),
        ],
      });
    },
  });
  return Padding({
    padding: EdgeInsets.all(16),
    child: Column({
      spacing: 12,
      children: [
        Builder({
          builder: (context) => {
            const host = Theme.of(context);
            const fonts = host.textTheme;
            return Column({
              spacing: 8,
              children: [
                Text(
                  host.brightness === Brightness.dark
                    ? 'Host theme: dark'
                    : 'Host theme: light',
                  { style: fonts.titleLarge },
                ),
                Theme({
                  data: host.copyWith({
                    textTheme: fonts.copyWith({
                      titleLarge: fonts.titleLarge?.copyWith({ fontWeight: bold }),
                    }),
                  }),
                  child: form,
                }),
              ],
            });
          },
        }),
        Theme({
          data: local.bind,
          child: Builder({
            builder: (context) => {
              const theme = Theme.of(context);
              return Text(
                theme.brightness === Brightness.dark
                  ? 'Local theme: dark'
                  : 'Local theme: light',
                {
                  style: theme.textTheme.titleLarge?.copyWith({
                    color: theme.colorScheme.primary,
                  }),
                },
              );
            },
          }),
        }),
        TextButton({
          child: Text('Toggle local theme'),
          onPressed: () => {
            localDark = !localDark;
            local.value = makeLocalTheme();
          },
        }),
        Text(bind(() => `Styled count: ${count.value}`)),
        TextButton({
          style: buttonStyle.bind,
          child: Text('Increment styled count'),
          onPressed: () => count.value++,
        }),
        TextButton({
          child: Text('Toggle generated button style'),
          onPressed: () => {
            alternateButton = !alternateButton;
            buttonStyle.value = makeButtonStyle();
          },
        }),
        Text(
          bind(
            () => `Name: ${text.value} · ${focused.value ? 'Focused' : 'Unfocused'}`,
          ),
        ),
        TextButton({
          child: Text('Focus styled input'),
          onPressed: () => focus.requestFocus(),
        }),
        TextButton({
          child: Text('Show input error'),
          onPressed: () => (showError.value = true),
        }),
        TextButton({
          child: Text('Clear input and error'),
          onPressed: () => {
            showError.value = false;
            controller.clear();
          },
        }),
        Builder({
          builder: (context) =>
            TextButton({
              child: Text('Open style detail'),
              onPressed: () =>
                Navigator.of(context).push(
                  MaterialPageRoute({
                    builder: (detailContext) =>
                      Column({
                        children: [
                          Text('Style detail'),
                          TextButton({
                            child: Text('Return to styles'),
                            onPressed: () => Navigator.of(detailContext).pop(),
                          }),
                        ],
                      }),
                  }),
                ),
            }),
        }),
        Text('Static style example sibling'),
      ],
    }),
  });
});
