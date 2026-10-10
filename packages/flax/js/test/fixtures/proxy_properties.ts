import type { DartList, DartMap, Widget } from '@flax/core/bindings';
import * as plugin from '../../../.dart_tool/flax/ui/interop_bindings.js';
import { ValueListenable } from '@flax/flutter/foundation';
import { Stream } from '@flax/dart/async';
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

class AsyncProperties {
  #observations = { reads: 0, writes: 0, listens: 0, next: 0, cancels: 0 };
  get observations() {
    return this.#observations;
  }
  #future = Promise.resolve(4);
  #optionalFuture: Promise<number> | null = null;
  #futureOr: number | Promise<number> = 5;
  #events: Stream<number>;
  #optionalEvents: Stream<number> | null = null;
  #transform = async (value: number) => value + 1;
  get effect(): void {}
  event(): void {}
  constructor() {
    const observations = this.observations;
    this.#events = Stream.fromAsyncIterable<number>({
      [Symbol.asyncIterator]() {
        observations.listens++;
        let index = 0;
        return {
          async next() {
            observations.next++;
            return index < 2
              ? { done: false as const, value: ++index }
              : { done: true as const, value: undefined };
          },
          async return() {
            observations.cancels++;
            return { done: true as const, value: undefined };
          },
        };
      },
    });
  }
  get future() {
    this.observations.reads++;
    return this.#future;
  }
  set future(value: Promise<number>) {
    this.observations.writes++;
    this.#future = value;
  }
  get inherited() {
    return Promise.resolve(8);
  }
  get optionalFuture() {
    return this.#optionalFuture;
  }
  set optionalFuture(value: Promise<number> | null) {
    this.#optionalFuture = value;
  }
  get futureOr() {
    return this.#futureOr;
  }
  set futureOr(value: number | Promise<number>) {
    this.#futureOr = value;
  }
  get events() {
    this.observations.reads++;
    return this.#events;
  }
  set events(value: Stream<number>) {
    this.observations.writes++;
    this.#events = value;
  }
  get optionalEvents() {
    return this.#optionalEvents;
  }
  set optionalEvents(value: Stream<number> | null) {
    this.#optionalEvents = value;
  }
  get snapshot() {
    return { pending: this.#future, events: this.#events };
  }
  set snapshot(value: {
    readonly pending: Promise<number>;
    readonly events: Stream<number>;
  }) {
    this.#future = value.pending;
    this.#events = value.events;
  }
  get transform() {
    return this.#transform;
  }
  set transform(value: (value: number) => Promise<number>) {
    this.#transform = value;
  }
  get child(): Promise<Widget | null> {
    return Promise.resolve(new PropertyWidget());
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
  Stream,
  observations,
  implementation,
  flutterImplementation: () => new FlutterProperties(),
  asyncImplementation: () => new AsyncProperties(),
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
