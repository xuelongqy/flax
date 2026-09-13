import { bind, computed, signal } from '@flax/core';
import {
  registerPage,
  Builder,
  Container,
  BoxDecoration,
  Border,
  BorderDirectional,
  BorderSide,
  BorderRadius,
  BorderRadiusDirectional,
  Radius,
  EdgeInsetsDirectional,
  Color,
  Clip,
  SizedBox,
  Column,
  Row,
  Expanded,
  Flexible,
  FlexFit,
  Stack,
  StackFit,
  Positioned,
  Align,
  AlignmentDirectional,
  ListView,
  Text,
  ValueKey,
  ScrollController,
  TextEditingController,
  FocusNode,
  type Key,
} from '@flax/core/flutter';
import { TextButton, TextField, InputDecoration, Theme } from '@flax/material-ui';

registerPage('layout', (_, lifecycle) => {
  const scroll = ScrollController();
  const text = TextEditingController();
  const focus = FocusNode();
  lifecycle.onDispose(() => scroll.dispose());
  lifecycle.onDispose(() => text.dispose());
  lifecycle.onDispose(() => focus.dispose());
  const query = signal('');
  const flex = signal(3);
  const left = signal(false);
  const end = signal(false);
  const clicks = signal(0);
  const clipped = signal(false);
  const data = Array.from({ length: 10000 }, (_, index) => index);
  const rows = computed(() => data.filter((id) => `Item ${id}`.includes(query.value)));
  const counts = new Map<number, ReturnType<typeof signal<number>>>();
  const button = (label: string, action: () => void) =>
    TextButton({ onPressed: action, child: Text(label) });
  const input = TextField({
    controller: text,
    focusNode: focus,
    decoration: InputDecoration({ labelText: 'Filter items' }),
    onChanged: (value) => (query.value = value),
  });
  const rowRadius = BorderRadius.circular(10);
  return Column({
    children: [
      Text('Generated layout · 10,000 items', { key: ValueKey('layout-static') }),
      Row({
        children: [
          Flexible({
            flex: flex.bind,
            fit: FlexFit.tight,
            child: Builder({
              builder: (context) => {
                const scheme = Theme.of(context).colorScheme;
                return Container({
                  key: ValueKey('layout-input-decoration'),
                  padding: EdgeInsetsDirectional.only({ start: 12, end: 4 }),
                  decoration: BoxDecoration({
                    color: scheme.surface,
                    border: BorderDirectional({
                      start: BorderSide({
                        width: 3,
                        color: scheme.primary,
                      }),
                    }),
                    borderRadius: BorderRadiusDirectional.only({
                      topStart: Radius.circular(12),
                      bottomEnd: Radius.elliptical(16, 8),
                    }),
                  }),
                  child: input,
                });
              },
            }),
          }),
          Flexible({ child: Text(bind(() => `Matches: ${rows.value.length}`)) }),
        ],
      }),
      Row({
        children: [
          Expanded({
            child: button('Change flex', () => (flex.value = flex.value === 3 ? 1 : 3)),
          }),
          Expanded({ child: button('Move button', () => (left.value = !left.value)) }),
          Expanded({
            child: button('Change alignment', () => (end.value = !end.value)),
          }),
        ],
      }),
      Align({
        alignment: bind(() =>
          end.value ? AlignmentDirectional.centerEnd : AlignmentDirectional.centerStart,
        ),
        child: TextButton({
          onPressed: () => clicks.value++,
          child: Text(bind(() => `Page count: ${clicks.value}`)),
        }),
      }),
      Row({
        children: [
          Expanded({
            child: button('Toggle clipping', () => (clipped.value = !clipped.value)),
          }),
          Container({
            key: ValueKey('layout-clip'),
            width: 32,
            height: 32,
            decoration: BoxDecoration({
              color: Color(0xffff0000),
              borderRadius: BorderRadius.circular(12),
            }),
            clipBehavior: bind(() => (clipped.value ? Clip.hardEdge : Clip.none)),
            child: Container({ color: Color(0xff00aa00) }),
          }),
          SizedBox({ width: 12 }),
        ],
      }),
      Expanded({
        child: Stack({
          fit: StackFit.expand,
          children: [
            ListView.builder({
              key: ValueKey('layout-list'),
              controller: scroll,
              itemExtent: 56,
              itemCount: computed(() => rows.value.length).bind,
              itemBuilder: bind(() => {
                const current = rows.value;
                return (_, index) => {
                  const id = current[index]!;
                  let count = counts.get(id);
                  if (!count) {
                    count = signal(0);
                    counts.set(id, count);
                  }
                  const value = count;
                  const child = TextButton({
                    onPressed: () => value.value++,
                    child: Text(bind(() => `Item ${id}: ${value.value}`)),
                  });
                  return Builder({
                    key: ValueKey(id),
                    builder: (context) => {
                      const scheme = Theme.of(context).colorScheme;
                      const surface = scheme.surface;
                      const primary = scheme.primary;
                      const normal = BoxDecoration({
                        color: surface,
                        border: Border.all({ width: 2, color: surface }),
                        borderRadius: rowRadius,
                      });
                      const selected = normal.copyWith({
                        border: Border.all({ width: 2, color: primary }),
                      });
                      return Container({
                        key: ValueKey(`layout-row-${id}`),
                        margin: EdgeInsetsDirectional.fromSTEB(12, 2, 4, 2),
                        decoration: bind(() => (value.value % 2 ? selected : normal)),
                        child,
                      });
                    },
                  });
                };
              }),
              findChildIndexCallback: bind(() => {
                const indices = new Map(rows.value.map((id, index) => [id, index]));
                return (key: Key) =>
                  indices.get((key as ValueKey).value as number) ?? null;
              }),
            }),
            Positioned({
              left: bind(() => (left.value ? 12 : null)),
              right: bind(() => (left.value ? null : 12)),
              bottom: 12,
              child: button('Back to top', () => {
                if (scroll.hasClients) scroll.jumpTo(0);
              }),
            }),
          ],
        }),
      }),
    ],
  });
});
