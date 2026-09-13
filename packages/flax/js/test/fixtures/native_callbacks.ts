import {
  Builder,
  Column,
  Text,
  ValueKey,
  registerPage,
  runApp,
  StatefulWidget,
  State,
  type BuildContext,
  type Widget,
} from '@flax/core/flutter';
import { signal } from '@flax/core';
import { CallbackStore } from '../../../.dart_tool/flax/ui/repeated_bindings.js';
const label = signal('Borrowed 0');
const render = signal<(context: BuildContext) => Widget>((context) =>
  CallbackStore.nativeBuilders.get(0)(context, 9)!,
);
const source = (context: BuildContext, index: number) =>
  Text(label.bind, { key: ValueKey(`borrowed-${index}`) });
const store = CallbackStore([source]);
Object.assign(globalThis, {
  nativeCallbacks: { CallbackStore, store, label, source, render },
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
