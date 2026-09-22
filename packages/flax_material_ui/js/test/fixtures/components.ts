import * as ui from '@flax/flutter/widgets';
import * as material from '@flax/flutter/material';
import * as scheduler from '@flax/flutter/scheduler';
import { signal, bind, batch } from '@flax/core';

const hooks = {
  events: [] as string[],
  states: [] as CounterState[],
  statelessBuilds: 0,
  fail: '',
};
class Counter extends ui.StatefulWidget {
  constructor(
    readonly label: string,
    readonly initial = 0,
    options: ui.WidgetOptions = {},
  ) {
    super(options);
  }
  createState(): ui.State<Counter> {
    return new CounterState();
  }
}
class CounterState extends ui.State<Counter> {
  count = 0;
  readonly detail = signal('ready');
  builds = 0;
  latestContext: ui.BuildContext | null = null;
  log(event: string): void {
    hooks.events.push(`${this.widget.label}:${event}`);
  }
  initState(): void {
    this.log('init:before');
    super.initState();
    this.log('init:after');
    this.count = this.widget.initial;
    hooks.states.push(this);
  }
  didChangeDependencies(): void {
    super.didChangeDependencies();
    this.log('dependencies');
  }
  didUpdateWidget(oldWidget: Counter): void {
    this.log(`update:${oldWidget.initial}->${this.widget.initial}`);
    super.didUpdateWidget(oldWidget);
  }
  deactivate(): void {
    this.log('deactivate');
    super.deactivate();
  }
  activate(): void {
    super.activate();
    this.log('activate');
  }
  reassemble(): void {
    super.reassemble();
    this.log('reassemble');
  }
  dispose(): void {
    this.log(`dispose:${this.mounted}/${this.context.mounted}`);
    super.dispose();
  }
  build(context: ui.BuildContext): ui.Widget {
    this.builds++;
    this.latestContext = context;
    this.log('build');
    if (hooks.fail === 'throw') throw new Error('component build failure');
    if (hooks.fail === 'promise')
      return Promise.resolve(ui.Text('invalid')) as unknown as ui.Widget;
    if (hooks.fail === 'invalid') return undefined as unknown as ui.Widget;
    if (hooks.fail === 'duplicate')
      return ui.Column({
        children: [
          ui.Text('a', { key: ui.ValueKey('same') }),
          ui.Text('b', { key: ui.ValueKey('same') }),
        ],
      });
    const direction = ui.Directionality.of(context);
    return ui.Column({
      mainAxisSize: ui.MainAxisSize.min,
      children: [
        ui.Text(
          `${this.widget.label}:${this.count}:${direction === ui.TextDirection.ltr ? 'ltr' : 'rtl'}`,
        ),
        ui.Text(this.detail.bind, { key: ui.ValueKey(`${this.widget.label}:detail`) }),
        ui.Text('static', { key: ui.ValueKey(`${this.widget.label}:static`) }),
        material.TextButton({
          onPressed: () =>
            this.setState(() => {
              this.count++;
            }),
          child: ui.Text(`inc:${this.widget.label}`),
        }),
      ],
    });
  }
}
class Caption extends ui.StatelessWidget {
  constructor(
    readonly text: string,
    options: ui.WidgetOptions = {},
  ) {
    super(options);
  }
  build(context: ui.BuildContext): ui.Widget {
    hooks.statelessBuilds++;
    return ui.Text(
      `${this.text}:${ui.Directionality.of(context) === ui.TextDirection.ltr ? 'ltr' : 'rtl'}`,
    );
  }
}
Object.assign(globalThis, {
  componentApi: {
    ...ui,
    ...material,
    ...scheduler,
    signal,
    bind,
    batch,
    Counter,
    CounterState,
    Caption,
  },
  componentHooks: hooks,
});
