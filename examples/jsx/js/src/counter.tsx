import {
  StatefulWidget,
  State,
  GestureDetector,
  Text,
  Column,
  type Widget,
  type BuildContext,
} from '@flax/flutter/widgets';
import type { ValueKey } from '@flax/flutter/foundation';

export const metrics = { initialized: 0, disposed: 0, builds: 0, realContext: false };

export class Counter extends StatefulWidget {
  constructor(
    readonly label: string,
    readonly jsx: boolean,
    options: { key?: ValueKey | null } = {},
  ) {
    super(options);
  }
  override createState() {
    return new CounterState();
  }
}

class CounterState extends State<Counter> {
  count = 0;
  override initState() {
    super.initState();
    metrics.initialized++;
  }
  override dispose() {
    metrics.disposed++;
    super.dispose();
  }
  override build(context: BuildContext): Widget {
    metrics.builds++;
    metrics.realContext = context.mounted;
    const title = `${this.widget.label}: ${this.count}`;
    const onTap = () =>
      this.setState(() => {
        this.count++;
      });
    return this.widget.jsx ? (
      <GestureDetector onTap={onTap}>
        <Column>
          <Text data={title} />
        </Column>
      </GestureDetector>
    ) : (
      GestureDetector({ onTap, child: Column({ children: [Text(title)] }) })
    );
  }
}
