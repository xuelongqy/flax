import {
  Builder,
  Column,
  Text,
  registerPage,
  runApp,
  StatefulWidget,
  State,
  type BuildContext,
  type Widget,
} from '@flax/flutter/widgets';
import { ValueKey } from '@flax/flutter/foundation';
import { signal } from '@flax/core';
import {
  CallbackStore,
  WidgetListBatch,
} from '../../../.dart_tool/flax/ui/repeated_bindings.js';
const label = signal('Borrowed 0');
const render = signal<(context: BuildContext) => Widget>((context) =>
  CallbackStore.nativeBuilders.get(0)(context, 9)!,
);
const listSuccess = (_context: BuildContext) => [Text('List initial')];
const listRecovered = (_context: BuildContext) => [Text('List recovered')];
const listFailure = (_context: BuildContext): Widget[] => {
  throw new Error('List callback failure');
};
const listRender = signal<(context: BuildContext) => Widget[]>(listSuccess);
const source = (context: BuildContext, index: number) =>
  Text(label.bind, { key: ValueKey(`borrowed-${index}`) });
const store = CallbackStore([source]);
const listState = { count: 0, same: false };
Object.assign(globalThis, {
  nativeCallbacks: {
    CallbackStore,
    store,
    label,
    source,
    render,
    listState,
    listRender,
    listFailure,
    listRecovered,
  },
});
runApp(CallbackStore.widgets.get(0));
registerPage('native-callbacks', () =>
  Builder({
    builder: (context) => {
      const native = CallbackStore.nativeBuilders.get(0);
      const js = store.builders.get(0);
      Object.assign(globalThis, {
        savedContext: context,
        savedNative: native,
        savedJs: js,
      });
      return Column({
        children: [native(context, 7)!, js(context, 1)!, js(context, 2)!],
      });
    },
  }),
);
registerPage('native-children', () => Column({ children: CallbackStore.widgets }));
class NativeComponent extends StatefulWidget {
  createState() {
    return new NativeState();
  }
}
class NativeState extends State<NativeComponent> {
  build() {
    return CallbackStore.widgets.get(0);
  }
}
registerPage('native-component', () => new NativeComponent());

registerPage('native-failure', () => Builder({ builder: render.bind }));

registerPage('wrapped-child', () =>
  Builder({ builder: (context) => store.wrappedBuilders.get(0)(context, 4)! }),
);
registerPage('widget-list-callback', () =>
  WidgetListBatch({
    render: () => [Text('List A'), Text('List B')],
    onChildren: (children) => {
      listState.count = children.length;
      listState.same = children.toArray()[0] === children.get(0);
    },
  }),
);
registerPage('widget-list-duplicate', () =>
  WidgetListBatch({
    render: () => [
      Text('First', { key: ValueKey('duplicate') }),
      Text('Second', { key: ValueKey('duplicate') }),
    ],
  }),
);
registerPage('widget-list-failure', () =>
  WidgetListBatch({ render: listRender.bind }),
);
