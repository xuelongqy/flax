import type { DartList, DartMap, Widget } from '@flax/core/bindings';
import * as plugin from '../../../.dart_tool/flax/ui/interop_bindings.js';
import { ValueListenable } from '@flax/flutter/foundation';
import {
  StatelessWidget,
  Text,
  registerPage,
  type BuildContext,
  type State,
} from '@flax/flutter/widgets';

class FlutterProperties {
  #reads = 0;
  #writes = 0;
  get reads() {
    return this.#reads;
  }
  get writes() {
    return this.#writes;
  }
  #child: Widget | null = null;
  #context: BuildContext | null = null;
  #state: State | null = null;
  #children: ReadonlyArray<Widget | null> | DartList<Widget | null> = [];
  get child() {
    this.#reads++;
    return this.#child;
  }
  set child(value: Widget | null) {
    this.#writes++;
    this.#child = value;
  }
  get context() {
    this.#reads++;
    return this.#context;
  }
  set context(value: BuildContext | null) {
    this.#writes++;
    this.#context = value;
  }
  get state() {
    this.#reads++;
    return this.#state;
  }
  set state(value: State | null) {
    this.#writes++;
    this.#state = value;
  }
  get children(): ReadonlyArray<Widget | null> | DartList<Widget | null> {
    this.#reads++;
    return this.#children;
  }
  set children(value: DartList<Widget | null>) {
    this.#writes++;
    this.#children = value;
  }
}

class PropertyWidget extends StatelessWidget {
  #label = 'Proxy widget';
  build(): Widget {
    return Text(this.#label);
  }
}

const observations = { reads: 0, writes: 0, adds: 0, removes: 0 };
let readFailure: 'none' | 'error' | 'promise' | 'type' = 'none';
let writeFailure: 'none' | 'error' | 'promise' = 'none';
let beforeRead: (() => void) | undefined;
const initial = plugin.Token(5);
let token: plugin.Token | null = initial;
let mode = plugin.Mode.first;
let items: ReadonlyArray<plugin.Token> | DartList<plugin.Token> = [initial];
let groups:
  | Readonly<Record<string, ReadonlyArray<plugin.Token>>>
  | DartMap<string, DartList<plugin.Token>> = { a: [initial] };
let transform: (value: plugin.Token) => plugin.Token = (value: plugin.Token) => value;
const implementation = {
  get readOnly(): number {
    observations.reads++;
    beforeRead?.();
    if (readFailure === 'error') throw Error('property getter failed');
    if (readFailure === 'promise') return Promise.resolve(1) as unknown as number;
    if (readFailure === 'type') return 'bad' as unknown as number;
    return 7;
  },
  set writeOnly(value: number) {
    observations.writes++;
    if (writeFailure === 'error') throw Error('property setter failed');
    // @ts-expect-error Exercise the runtime rejection of asynchronous setters.
    if (writeFailure === 'promise') return Promise.resolve() as never;
  },
  get token() {
    return token;
  },
  set token(value: plugin.Token | null) {
    token = value;
  },
  get mode() {
    return mode;
  },
  set mode(value: plugin.Mode) {
    mode = value;
  },
  get items(): ReadonlyArray<plugin.Token> | DartList<plugin.Token> {
    return items;
  },
  set items(value: DartList<plugin.Token>) {
    items = value;
  },
  get groups():
    | Readonly<Record<string, ReadonlyArray<plugin.Token>>>
    | DartMap<string, DartList<plugin.Token>> {
    return groups;
  },
  set groups(value: DartMap<string, DartList<plugin.Token>>) {
    groups = value;
  },
  get transform() {
    return transform;
  },
  set transform(value: (value: plugin.Token) => plugin.Token) {
    transform = value;
  },
};
const sources: { value: number; listeners: (() => void)[] }[] = [];
const properties = {
  plugin,
  observations,
  implementation,
  flutterImplementation: () => new FlutterProperties(),
  makeWidget: () => new PropertyWidget(),
  createPort: () => plugin.PropertyPort.implement([], implementation),
  setReadFailure: (value: typeof readFailure) => {
    readFailure = value;
  },
  setWriteFailure: (value: typeof writeFailure) => {
    writeFailure = value;
  },
  beforeRead: (fn: () => void) => {
    beforeRead = fn;
  },
  source(value: number) {
    const data = { value, listeners: [] as (() => void)[] };
    sources.push(data);
    return ValueListenable.implement<number>([], {
      get value() {
        observations.reads++;
        return data.value;
      },
      addListener(listener) {
        observations.adds++;
        data.listeners.push(listener);
      },
      removeListener(listener) {
        observations.removes++;
        const index = data.listeners.indexOf(listener);
        if (index < 0) throw Error('listener wrapper identity changed');
        data.listeners.splice(index, 1);
      },
    });
  },
  set(index: number, value: number, notify = true) {
    const data = sources[index]!;
    data.value = value;
    if (notify) for (const listener of [...data.listeners]) listener();
  },
  listeners: (index: number) => sources[index]!.listeners.length,
};
Object.assign(globalThis, { properties });
registerPage('properties', () => Text('Proxy properties'));
