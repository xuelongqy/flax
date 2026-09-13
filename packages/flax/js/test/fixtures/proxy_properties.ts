import type { DartList, DartMap } from '@flax/core/bindings';
import * as plugin from '../../../.dart_tool/flax/ui/interop_bindings.js';
import { ValueListenable, Text, registerPage } from '@flax/core/flutter';

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
