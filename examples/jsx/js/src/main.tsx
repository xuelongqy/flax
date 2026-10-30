import { signal } from '@flax/core';
import {
  StatefulWidget,
  State,
  Column,
  Directionality,
  LayoutBuilder,
  Text,
  runApp,
  registerPage,
  type Widget,
  type BuildContext,
} from '@flax/flutter/widgets';
import { ValueKey } from '@flax/flutter/foundation';
import { TextDirection } from '@flax/dart/ui';
import { Counter, metrics } from './counter.js';
import { caption } from './caption.js';
import { Welcome } from './welcome.js';

const label = signal('Signal: first');
export class Demo extends StatefulWidget {
  constructor(readonly jsx: boolean) {
    super();
  }
  override createState() {
    return new DemoState();
  }
}
class DemoState extends State<Demo> {
  order = ['A', 'B'];
  override initState() {
    super.initState();
    Object.assign(globalThis, {
      jsxDemo: {
        metrics,
        update: () => {
          label.value = 'Signal: updated';
        },
        reorder: () =>
          this.setState(() => {
            this.order.reverse();
          }),
      },
    });
  }
  override build(_context: BuildContext): Widget {
    const children = this.order.map((label) =>
      this.widget.jsx ? (
        <Counter label={label} jsx key={ValueKey<string>(label)} />
      ) : (
        new Counter(label, false, { key: ValueKey<string>(label) })
      ),
    );
    const builder = (context: BuildContext) => Text(`Context: ${context.mounted}`);
    return (
      <Column>
        <Welcome />
        {Column({ children })}
        {caption(label.bind)}
        <LayoutBuilder
          builder={(context, constraints) => {
            if (!constraints.hasBoundedWidth) throw new Error('Expected bounded width');
            return builder(context);
          }}
        />
      </Column>
    );
  }
}
registerPage('jsx', () => <Demo jsx />);
registerPage('ordinary', () => new Demo(false));
runApp(
  <Directionality textDirection={TextDirection.ltr}>
    <Demo jsx />
  </Directionality>,
);
