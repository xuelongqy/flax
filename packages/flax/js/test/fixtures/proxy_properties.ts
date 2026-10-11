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

class WidgetFactory extends plugin.WidgetFactory {
  #label = 'Factory widget';
  create(context: BuildContext): Widget {
    Object.assign(properties, { factoryContext: context });
    return new PropertyWidget();
  }
  createText(): Text {
    return Text(`${this.#label}: ${super.createText().data}`);
  }
}

let superMode:
  | 'good'
  | 'missing'
  | 'wrong'
  | 'nested-missing'
  | 'nested-good'
  | 'throw'
  | 'late'
  | 'reject'
  | 'promise' = 'good';

class SuperProperties extends plugin.AccessorRequiredSuper {
  get value(): number {
    if (superMode === 'throw') throw Error('required getter failed');
    if (superMode === 'missing') return 9;
    if (superMode === 'wrong') {
      super.value = 9;
      return 9;
    }
    if (superMode === 'nested-missing' || superMode === 'nested-good') {
      const mode = superMode;
      const parent = mode === 'nested-good' ? super.value : 0;
      superMode = 'good';
      try {
        this.read();
      } finally {
        superMode = mode;
      }
      return parent + 1;
    }
    return super.value + 1;
  }
  set value(value: number) {
    if (superMode === 'throw') throw Error('required setter failed');
    if (superMode === 'missing') return;
    if (superMode === 'wrong') {
      void super.value;
      return;
    }
    super.value = value;
  }
  get pending(): Promise<number> {
    if (superMode === 'throw') throw Error('required async getter failed');
    if (superMode === 'reject')
      return Promise.reject(Error('required getter rejected'));
    if (superMode === 'missing') return Promise.resolve(9);
    if (superMode === 'late') return Promise.resolve().then(() => super.pending);
    return super.pending.then((value) => value + 1);
  }
  get mixed(): number | Promise<number> {
    if (superMode === 'missing') return 9;
    if (superMode === 'late') return Promise.resolve().then(() => super.mixed);
    if (superMode === 'reject') return Promise.reject(Error('required mixed rejected'));
    const parent = super.mixed;
    if (typeof parent !== 'number') throw Error('fixture parent must be synchronous');
    const value = parent + 1;
    return superMode === 'promise' ? Promise.resolve(value) : value;
  }
  get optional(): Promise<number> | null {
    return superMode === 'missing' ? null : super.optional;
  }
  get effect(): void {
    if (superMode !== 'missing') super.effect;
  }
}

class DefaultSuperProperties extends plugin.AccessorRequiredSuper {}

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
  makeSuperPort: (override = true) =>
    override ? new SuperProperties() : new DefaultSuperProperties(),
  setSuperMode: (value: typeof superMode) => {
    superMode = value;
  },
  makeWidget: () => new PropertyWidget(),
  makeFactory: (extendsClass: boolean) => {
    const implementation = extendsClass
      ? new WidgetFactory()
      : ({
          create(context: BuildContext) {
            Object.assign(properties, { factoryContext: context });
            return new PropertyWidget();
          },
          createText: () => Text('Interface factory'),
          optional: () => null,
        } satisfies Parameters<typeof plugin.WidgetFactoryInterface.implement>[1]);
    Object.assign(properties, { factoryImplementation: implementation });
    return extendsClass
      ? (implementation as WidgetFactory)
      : plugin.WidgetFactoryInterface.implement([], implementation);
  },
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
