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
registerPage('functions', () => root);
registerPage('application', () =>
  MaterialApp({ navigatorObservers: [observer], home: root }),
);
runApp(root);
Object.assign(globalThis, {
  topLevel: {
    functions,
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
    fixture(failAfterPush = false, before?: () => void) {
      return functions.openFixturePanel({
        origin: context,
        content,
        root: false,
        failAfterPush,
        before,
      });
    },
    fit() {
      return applyBoxFit(BoxFit.contain, Size(100, 50), Size(40, 40));
    },
  },
});
