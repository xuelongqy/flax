import {
  Column,
  Expanded,
  State,
  StatefulWidget,
  Wrap,
  type Widget,
} from '@flax/flutter/widgets';
import { runExample, action } from './ui';
import { createCoreExample } from './showcase';
import { createFetchExample } from './fetch';

class CoreExample extends StatefulWidget {
  createState(): State<CoreExample> {
    return new CoreState();
  }
}
class CoreState extends State<CoreExample> {
  showFetch = false;
  build(): Widget {
    return Column({
      children: [
        Wrap({
          spacing: 12,
          children: [
            action('Core & signals', () =>
              this.setState(() => {
                this.showFetch = false;
              }),
            ),
            action('Fetch', () =>
              this.setState(() => {
                this.showFetch = true;
              }),
            ),
          ],
        }),
        Expanded({
          child: this.showFetch ? createFetchExample() : createCoreExample(),
        }),
      ],
    });
  }
}
runExample(new CoreExample());
