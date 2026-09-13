import { bind, signal } from '@flax/core';
import {
  Column,
  Expanded,
  FocusNode,
  ListView,
  ListenableBuilder,
  ValueListenableBuilder,
  MainAxisSize,
  Navigator,
  Row,
  SchedulerBinding,
  State,
  StatefulWidget,
  Text,
  TextEditingController,
  ValueKey,
  registerPage,
  type BuildContext,
  type Widget,
  type WidgetOptions,
} from '@flax/core/flutter';
import {
  InputDecoration,
  MaterialPageRoute,
  TextButton,
  TextField,
  Theme,
} from '@flax/material-ui';

class Counter extends StatefulWidget {
  constructor(
    readonly label: string,
    readonly initial = 0,
    options: WidgetOptions = {},
  ) {
    super(options);
  }
  createState(): State<Counter> {
    return new CounterState();
  }
}
class AlternateCounter extends Counter {}

class CounterState extends State<Counter> {
  count = 0;
  readonly detail = signal(0);
  initState(): void {
    super.initState();
    this.count = this.widget.initial;
  }
  build(): Widget {
    return Row({
      children: [
        Text(`${this.widget.label}: ${this.count}`),
        TextButton({
          child: Text(`Count ${this.widget.label}`),
          onPressed: () =>
            this.setState(() => {
              this.count++;
            }),
        }),
        TextButton({
          child: Text(`Signal ${this.widget.label}`),
          onPressed: () => this.detail.value++,
        }),
        Text(bind(() => String(this.detail.value))),
      ].map((child) => Expanded({ child })),
    });
  }
}
class Editor extends StatefulWidget {
  createState(): State<Editor> {
    return new EditorState();
  }
}
class EditorState extends State<Editor> {
  controller!: TextEditingController;
  focus!: FocusNode;
  readonly staticHint = Text('Static editing child');
  initState(): void {
    super.initState();
    this.controller = TextEditingController({ text: 'State-owned input' });
    this.focus = FocusNode();
  }
  dispose(): void {
    this.focus.dispose();
    this.controller.dispose();
    super.dispose();
  }
  build(context: BuildContext): Widget {
    const field = TextField({
      key: ValueKey('component-input'),
      controller: this.controller,
      focusNode: this.focus,
      style: Theme.of(context).textTheme.bodyMedium,
      decoration: InputDecoration({
        labelText: 'Preserved through parent and theme rebuilds',
        helperText: `Ancestor: ${context.findAncestorWidgetOfExactType(ComponentsPage)?.title ?? 'none'}`,
      }),
    });
    return Column({
      children: [
        ValueListenableBuilder({
          valueListenable: this.controller,
          child: this.staticHint,
          builder: (_context, value, child) =>
            Row({ children: [Text(`Editing length: ${value.text.length}`), child!] }),
        }),
        ListenableBuilder({
          listenable: this.focus,
          child: field,
          builder: (_context, child) =>
            Column({
              children: [Text(`Editor focused: ${this.focus.hasFocus}`), child!],
            }),
        }),
      ],
    });
  }
}
class ComponentsPage extends StatefulWidget {
  readonly title = 'ComponentsPage';
  createState(): State<ComponentsPage> {
    return new ComponentsState();
  }
}
class ComponentsState extends State<ComponentsPage> {
  initial = 0;
  identity = 0;
  visible = true;
  reversed = false;
  alternate = false;
  readonly measurement = signal('Component size: not measured');
  async measure(): Promise<void> {
    await SchedulerBinding.instance.endOfFrame;
    if (!this.mounted) return;
    const size = this.context.size;
    this.measurement.value =
      size === null
        ? 'Component size: no RenderBox'
        : `Component size: ${Math.round(size.width)} × ${Math.round(size.height)}`;
  }
  build(context: BuildContext): Widget {
    const ids = this.reversed ? [3, 2, 1] : [1, 2, 3];
    const indices = new Map(ids.map((id, index) => [id, index]));
    return Column({
      mainAxisSize: MainAxisSize.max,
      children: [
        new Editor(),
        Row({
          children: [
            Expanded({ child: Text(this.measurement.bind) }),
            TextButton({
              child: Text('Measure component'),
              onPressed: () => this.measure(),
            }),
            TextButton({
              child: Text('Switch component type'),
              onPressed: () =>
                this.setState(() => {
                  this.alternate = !this.alternate;
                }),
            }),
          ],
        }),
        Row({
          children: [
            TextButton({
              child: Text('Update initial prop'),
              onPressed: () =>
                this.setState(() => {
                  this.initial++;
                }),
            }),
            TextButton({
              child: Text('Reset component key'),
              onPressed: () =>
                this.setState(() => {
                  this.identity++;
                }),
            }),
            TextButton({
              child: Text('Toggle component'),
              onPressed: () =>
                this.setState(() => {
                  this.visible = !this.visible;
                }),
            }),
          ].map((child) => Expanded({ child })),
        }),
        ...(this.visible
          ? [
              new (this.alternate ? AlternateCounter : Counter)('first', this.initial, {
                key: ValueKey(this.identity),
              }),
            ]
          : []),
        new Counter('second', 0, { key: ValueKey('second') }),
        TextButton({
          child: Text('Reverse component rows'),
          onPressed: () =>
            this.setState(() => {
              this.reversed = !this.reversed;
            }),
        }),
        TextButton({
          child: Text('Push component page'),
          onPressed: () =>
            Navigator.of(context).push(
              MaterialPageRoute({
                builder: (inner) =>
                  Column({
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      new Counter('route'),
                      TextButton({
                        child: Text('Return to components'),
                        onPressed: () => Navigator.of(inner).pop(),
                      }),
                    ],
                  }),
              }),
            ),
        }),
        Expanded({
          child: ListView.builder({
            itemCount: ids.length,
            itemExtent: 56,
            findChildIndexCallback: (key) =>
              indices.get((key as ValueKey).value as number) ?? null,
            itemBuilder: (_, index) =>
              new Counter(`row ${ids[index]!}`, 0, { key: ValueKey(ids[index]!) }),
          }),
        }),
      ],
    });
  }
}
registerPage('components', () => new ComponentsPage());
