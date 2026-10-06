import {
  Builder,
  Column,
  Text,
  BoxFit,
  applyBoxFit,
  Navigator,
  StatefulWidget,
  State,
  TextEditingController,
  registerPage,
  runApp,
  type BuildContext,
  type Widget,
} from '@flax/flutter/widgets';
import { ValueKey } from '@flax/flutter/foundation';
import { Size } from '@flax/flutter/services';
import { FlaxNavigatorObserver } from '@flax/core/navigation';
import {
  AlertDialog,
  MaterialApp,
  TextButton,
  TextField,
  showDialog,
} from '@flax/flutter/material';
import { signal } from '@flax/core';
import * as functions from '../../../.dart_tool/flax/ui/functions_bindings.js';

let context: BuildContext;
let mode = 'valid';
let builds = 0;
let created = 0;
let disposed = 0;
let result: unknown = 'pending';
const label = signal('Dialog label');
let inline: Widget | null = null;
const observer = FlaxNavigatorObserver();

class DialogContent extends StatefulWidget {
  createState() {
    return new DialogState();
  }
}
class DialogState extends State<DialogContent> {
  count = 0;
  controller!: TextEditingController;
  initState() {
    super.initState();
    created++;
    this.controller = TextEditingController({ text: 'Keep input' });
  }
  build(dialogContext: BuildContext): Widget {
    builds++;
    return AlertDialog({
      title: Text(label.bind, { key: ValueKey('dialog-label') }),
      content: Column({
        children: [
          Text(`Local ${this.count}`),
          TextField({ controller: this.controller }),
        ],
      }),
      actions: [
        TextButton({
          onPressed: () => this.setState(() => this.count++),
          child: Text('Increment dialog'),
        }),
        TextButton({
          onPressed: () =>
            Navigator.of(dialogContext).pop({ accepted: [true, this.count] }),
          child: Text('Accept dialog'),
        }),
      ],
    });
  }
  dispose() {
    this.controller.dispose();
    disposed++;
    super.dispose();
  }
}

function content(): Widget {
  if (mode === 'throw') throw new Error('dialog builder failed');
  if (mode === 'promise') return Promise.resolve(Text('bad')) as unknown as Widget;
  if (mode === 'invalid') return 7 as unknown as Widget;
  return new DialogContent();
}
function open(options: Partial<Parameters<typeof showDialog>[0]> = {}) {
  result = 'pending';
  const promise = showDialog({ context, builder: content, ...options });
  promise.then(
    (v) => {
      result = v;
    },
    (e) => {
      result = String(e);
    },
  );
  return promise;
}
const root = Builder({
  builder: (current) => {
    context = current;
    if (inline !== null) return inline;
    return Column({
      children: [
        Text('Static source', { key: ValueKey('static-source') }),
        TextButton({
          onPressed: () => {
            open();
          },
          child: Text('Open dialog'),
        }),
      ],
    });
  },
});
let preview: Widget;
let builderKind = 'function';
let builderCalls = 0;
let builderMounted = false;
let lastBuilderContext: BuildContext | undefined;
let builderIndex = 0;
const builderBox = functions.BuilderBox();
let contextBox: functions.ContextBox | undefined;
function genericContent(current: BuildContext): Widget {
  builderCalls++;
  lastBuilderContext = current;
  builderMounted = current.mounted;
  Navigator.of(current);
  return mode === 'native' ? functions.nativeTile() : content();
}
registerPage('builder', () => {
  if (builderKind === 'indexed')
    return functions.indexedBuilder((current, index) => {
      builderIndex = index;
      return genericContent(current);
    });
  if (builderKind === 'nullable')
    return functions.nullableBuilder((current) => {
      genericContent(current);
      return null;
    });
  if (builderKind === 'async')
    return functions.asyncBuilder(async (current) => {
      await Promise.resolve();
      return genericContent(current);
    });
  if (builderKind === 'named')
    return functions.namedBuilder(({ context }) => genericContent(context));
  if (builderKind === 'optional')
    return functions.optionalContextBuilder((current) => genericContent(current!));
  if (builderKind === 'nested') return functions.nestedBuilders([genericContent]);

  if (builderKind === 'constructor') {
    return functions.BuilderBox(genericContent).wrap();
  }
  if (builderKind === 'method') {
    builderBox.configure(genericContent);
    return builderBox.wrap();
  }
  if (builderKind === 'static') {
    return functions.BuilderBox.wrapStatic(genericContent);
  }
  if (builderKind === 'returned') {
    return functions.builderWrapper()(genericContent);
  }
  if (builderKind === 'preview') return preview;
  if (builderKind === 'stored') return builderBox.wrap();
  if (builderKind === 'repeat') {
    builderBox.configure(genericContent);
    return Column({ children: [builderBox.wrap(), builderBox.wrap()] });
  }
  if (builderKind === 'undefined') return functions.wrapBuilder(undefined);
  if (builderKind === 'null') return functions.wrapBuilder(null);
  return functions.wrapBuilder(genericContent);
});
registerPage('functions', () => root);
registerPage('context', () =>
  Builder({ builder: (current) => functions.ContextTile({ origin: current }) }),
);
registerPage('application', () =>
  MaterialApp({ navigatorObservers: [observer], home: root }),
);
runApp(root);
Object.assign(globalThis, {
  topLevel: {
    functions,
    builderBox,
    makeContextBox(origin = context, optional?: BuildContext | null) {
      contextBox = functions.ContextBox(origin, { optional });
      return contextBox;
    },
    get contextBox() {
      return contextBox;
    },
    inline() {
      builderBox.configure(genericContent);
      inline = builderBox.wrap();
    },
    saveContext() {
      functions.saveBuilderContext(context);
    },
    stale() {
      functions.invokeStaleBuilder(genericContent);
    },
    preview() {
      preview = functions.invokeBuilder(context, genericContent);
    },
    store() {
      builderBox.configure(genericContent);
    },
    get builderCalls() {
      return builderCalls;
    },
    get lastBuilderContext() {
      return lastBuilderContext;
    },
    get builderIndex() {
      return builderIndex;
    },
    get builderMounted() {
      return builderMounted;
    },
    setBuilderKind(value: string) {
      builderKind = value;
    },
    label,
    open,
    get context() {
      return context;
    },
    get result() {
      return result;
    },
    get builds() {
      return builds;
    },
    get created() {
      return created;
    },
    get disposed() {
      return disposed;
    },
    setMode(value: string) {
      mode = value;
    },
    fixture(failAfterPush = false, before?: () => void, maintainState = true) {
      return functions.openFixturePanel({
        origin: context,
        content,
        root: false,
        failAfterPush,
        maintainState,
        before,
      });
    },
    fit() {
      return applyBoxFit(BoxFit.contain, Size(100, 50), Size(40, 40));
    },
  },
});
