import { dartTypes } from '@flax/core/bindings';
import { Color, FontWeight } from '@flax/dart/ui';
import {
  Border,
  BorderRadius,
  BoxDecoration,
  EdgeInsets,
  TextStyle,
} from '@flax/flutter/painting';
import { KeyDownEvent, LogicalKeyboardKey } from '@flax/flutter/services';
import {
  Center,
  Builder,
  Column,
  ConstrainedBox,
  Container,
  CrossAxisAlignment,
  DefaultTextStyle,
  EditableText,
  Focus,
  GestureDetector,
  KeyEventResult,
  Overlay,
  Padding,
  Semantics,
  SingleChildScrollView,
  SizedBox,
  Text,
  ValueKey,
  WidgetsApp,
  runApp,
  type FocusNode,
  type TextEditingController,
  type Widget,
} from '@flax/flutter/widgets';
import { BoxConstraints } from '@flax/flutter/rendering';

export const exampleColors = {
  background: Color(0xfff5f5f0),
  surface: Color(0xffffffff),
  ink: Color(0xff202d29),
  muted: Color(0xff66736b),
  green: Color(0xff245c48),
  border: Color(0xffe1e6dd),
};

const StringKey = ValueKey.$type(dartTypes.string);

export function exampleKey(value: string): ValueKey<string> {
  return StringKey(value);
}

/** Package-only hosts need Flutter's focus, localization and overlay environment. */
export function runExample(widget: Widget): void {
  runApp(
    WidgetsApp({
      color: exampleColors.background,
      debugShowCheckedModeBanner: false,
      builder: () => Overlay.wrap({ child: widget }),
    }),
  );
}

export function text(
  value: string,
  size = 15,
  color = exampleColors.ink,
  bold = false,
): Widget {
  return Text(value, {
    style: TextStyle({
      fontSize: size,
      color,
      height: 1.45,
      ...(bold ? { fontWeight: FontWeight.w600 } : {}),
    }),
  });
}

export function input(
  controller: TextEditingController,
  focusNode: FocusNode,
  label: string,
  id: string,
  onSubmitted?: () => void,
): Widget {
  return Semantics({
    label,
    child: Container({
      padding: EdgeInsets.all(14),
      decoration: BoxDecoration({
        color: exampleColors.surface,
        border: Border.all({ color: exampleColors.border }),
        borderRadius: BorderRadius.circular(10),
      }),
      child: EditableText({
        key: exampleKey(id),
        controller,
        focusNode,
        style: TextStyle({ color: exampleColors.ink, fontSize: 15 }),
        cursorColor: exampleColors.green,
        backgroundCursorColor: exampleColors.border,
        ...(onSubmitted ? { onSubmitted: () => onSubmitted() } : {}),
      }),
    }),
  });
}

export function section(title: string, description: string, child: Widget): Widget {
  return Container({
    margin: EdgeInsets.only({ bottom: 18 }),
    padding: EdgeInsets.all(24),
    decoration: BoxDecoration({
      color: exampleColors.surface,
      borderRadius: BorderRadius.circular(20),
      border: Border.all({ color: exampleColors.border }),
    }),
    child: Column({
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Semantics({ header: true, child: text(title, 20, exampleColors.ink, true) }),
        SizedBox({ height: 6 }),
        text(description, 14, exampleColors.muted),
        SizedBox({ height: 22 }),
        child,
      ],
    }),
  });
}

export function examplePage(
  eyebrow: string,
  title: string,
  description: string,
  children: readonly Widget[],
): Widget {
  return DefaultTextStyle({
    style: TextStyle({ color: exampleColors.ink, fontSize: 15 }),
    child: Container({
      color: exampleColors.background,
      child: SingleChildScrollView({
        child: Center({
          child: ConstrainedBox({
            constraints: BoxConstraints({ maxWidth: 1000 }),
            child: Padding({
              padding: EdgeInsets.fromLTRB(24, 32, 24, 32),
              child: Column({
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  text(eyebrow.toUpperCase(), 12, exampleColors.green, true),
                  SizedBox({ height: 12 }),
                  text(title, 36, exampleColors.ink, true),
                  SizedBox({ height: 8 }),
                  text(description, 16, exampleColors.muted),
                  SizedBox({ height: 28 }),
                  ...children,
                  SizedBox({ height: 8 }),
                  text(
                    'Made with JavaScript. Rendered by Flutter.',
                    12,
                    exampleColors.muted,
                  ),
                ],
              }),
            }),
          }),
        }),
      }),
    }),
  });
}

/** Core-only control: keyboard activation and semantics work without a UI package. */
export function action(caption: string, onTap: () => void, id?: string): Widget {
  return Focus({
    onKeyEvent: (_node, event) => {
      if (
        event instanceof KeyDownEvent &&
        (event.logicalKey.keyId === LogicalKeyboardKey.enter.keyId ||
          event.logicalKey.keyId === LogicalKeyboardKey.space.keyId)
      ) {
        onTap();
        return KeyEventResult.handled;
      }
      return KeyEventResult.ignored;
    },
    child: Builder({
      builder: (context) => {
        const focused = Focus.of(context).hasFocus;
        return Semantics({
          button: true,
          label: caption,
          onTap,
          focused,
          excludeSemantics: true,
          child: GestureDetector({
            ...(id ? { key: exampleKey(id) } : {}),
            onTap,
            excludeFromSemantics: true,
            child: Container({
              padding: EdgeInsets.symmetric({ horizontal: 18, vertical: 12 }),
              decoration: BoxDecoration({
                color: exampleColors.green,
                borderRadius: BorderRadius.circular(12),
                border: Border.all({
                  color: focused ? Color(0xffe7b86b) : exampleColors.green,
                  width: 2,
                }),
              }),
              child: text(caption, 14, exampleColors.surface, true),
            }),
          }),
        });
      },
    }),
  });
}
