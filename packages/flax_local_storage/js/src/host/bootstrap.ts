import type {
  Storage as StorageContract,
  StorageEvent as StorageEventContract,
  StorageEventInit,
} from '../types.js';

type Call = (operation: string, ...args: unknown[]) => unknown;
const owners = new WeakMap<object, Call>();
const token = {};

function owner(value: object): Call {
  const call = owners.get(value);
  if (!call) throw new TypeError('Illegal Storage receiver');
  return call;
}
function string(value: unknown): string {
  if (typeof value === 'symbol') throw new TypeError('Cannot convert Symbol to string');
  return String(value);
}
function required(actual: number, count: number): void {
  if (actual < count) throw new TypeError(`Expected ${count} arguments`);
}
function write(call: Call, operation: string, ...args: unknown[]): void {
  if (call(operation, ...args) === false)
    throw new DOMException('localStorage quota exceeded', 'QuotaExceededError');
}

export class Storage implements StorageContract {
  [name: string]: any;
  /** @internal */ constructor(secret: object) {
    if (secret !== token) throw new TypeError('Illegal constructor');
  }
  get length(): number {
    return owner(this)('length') as number;
  }
  key(index: number): string | null {
    const call = owner(this);
    required(arguments.length, 1);
    return call('key', +index >>> 0) as string | null;
  }
  getItem(key: string): string | null {
    const call = owner(this);
    required(arguments.length, 1);
    return call('get', string(key)) as string | null;
  }
  setItem(key: string, value: string): void {
    const call = owner(this);
    required(arguments.length, 2);
    write(call, 'set', string(key), string(value));
  }
  removeItem(key: string): void {
    const call = owner(this);
    required(arguments.length, 1);
    write(call, 'remove', string(key));
  }
  clear(): void {
    write(owner(this), 'clear');
  }
}

export class StorageEvent extends Event implements StorageEventContract {
  readonly key: string | null;
  readonly oldValue: string | null;
  readonly newValue: string | null;
  readonly url: string;
  readonly storageArea: Storage | null;
  constructor(type: string, options: StorageEventInit = {}) {
    required(arguments.length, 1);
    options = options ?? {};
    super(string(type), options);
    this.key = options.key == null ? null : string(options.key);
    this.oldValue = options.oldValue == null ? null : string(options.oldValue);
    this.newValue = options.newValue == null ? null : string(options.newValue);
    this.url = options.url === undefined ? '' : string(options.url);
    this.storageArea = options.storageArea ?? null;
    if (this.storageArea !== null && !owners.has(this.storageArea))
      throw new TypeError('Expected Storage');
  }
}

export function install(global: typeof globalThis, call: Call) {
  const target = new Storage(token);
  const storage = new Proxy(target, {
    get(target, key, receiver) {
      if (typeof key !== 'string' || Reflect.has(target, key))
        return Reflect.get(target, key, receiver);
      return call('get', key) ?? undefined;
    },
    set(target, key, value, receiver) {
      if (typeof key !== 'string' || receiver !== storage)
        return Reflect.set(target, key, value, receiver);
      write(call, 'set', key, string(value));
      return true;
    },
    has(target, key) {
      return (
        Reflect.has(target, key) ||
        (typeof key === 'string' && call('get', key) !== null)
      );
    },
    deleteProperty(target, key) {
      if (typeof key === 'string' && !Reflect.has(target, key)) {
        write(call, 'remove', key);
        return true;
      }
      return Reflect.deleteProperty(target, key);
    },
    ownKeys(target) {
      const keys: string[] = [];
      call('keys', keys);
      return [
        ...keys.filter((key) => !Reflect.has(target, key)),
        ...Reflect.ownKeys(target),
      ];
    },
    getOwnPropertyDescriptor(target, key) {
      const existing = Reflect.getOwnPropertyDescriptor(target, key);
      if (existing || typeof key !== 'string' || Reflect.has(target, key))
        return existing;
      const value = call('get', key);
      return value === null
        ? undefined
        : {
            value,
            writable: true,
            enumerable: true,
            configurable: true,
          };
    },
    defineProperty(target, key, descriptor) {
      if (typeof key !== 'string')
        return Reflect.defineProperty(target, key, descriptor);
      // A Proxy cannot claim a non-configurable virtual property without freezing
      // its target. Reject it before writing instead of violating Proxy invariants.
      if (
        'get' in descriptor ||
        'set' in descriptor ||
        (!('value' in descriptor) && !('writable' in descriptor)) ||
        descriptor.configurable === false
      )
        return false;
      write(call, 'set', key, string(descriptor.value));
      return true;
    },
    preventExtensions: () => false,
    setPrototypeOf: (target, prototype) => Reflect.getPrototypeOf(target) === prototype,
  });
  owners.set(target, call);
  owners.set(storage, call);
  for (const name of ['length', 'key', 'getItem', 'setItem', 'removeItem', 'clear']) {
    Object.defineProperty(Storage.prototype, name, {
      ...Object.getOwnPropertyDescriptor(Storage.prototype, name),
      enumerable: true,
    });
  }
  Object.defineProperty(Storage.prototype, Symbol.toStringTag, {
    value: 'Storage',
    configurable: true,
  });
  const add = global.addEventListener.bind(global);
  const remove = global.removeEventListener.bind(global);
  const dispatch = global.dispatchEvent.bind(global);
  let listener: ((this: typeof globalThis, event: StorageEvent) => unknown) | null =
    null;
  const handle = (event: Event) => listener?.call(global, event as StorageEvent);
  for (const [name, value] of Object.entries({ Storage, StorageEvent })) {
    Object.defineProperty(global, name, { value, writable: true, configurable: true });
  }
  Object.defineProperty(global, 'localStorage', {
    get: () => storage,
    configurable: true,
  });
  Object.defineProperty(global, 'onstorage', {
    enumerable: true,
    configurable: true,
    get: () => listener,
    set: (value: typeof listener) => {
      const next = typeof value === 'function' ? value : null;
      if (!listener && next) add('storage', handle);
      if (listener && !next) remove('storage', handle);
      listener = next;
    },
  });
  return {
    event(key: string | null, oldValue: string | null, newValue: string | null) {
      dispatch(
        new StorageEvent('storage', { key, oldValue, newValue, storageArea: storage }),
      );
    },
  };
}
