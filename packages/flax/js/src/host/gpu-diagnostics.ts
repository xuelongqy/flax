interface CompilationMessageFields {
  readonly message: string;
  readonly type: 'error' | 'warning' | 'info';
  readonly lineNum: number;
  readonly linePos: number;
  readonly offset: number;
  readonly length: number;
}

const hostKey = Symbol.for('flax.gpu.diagnostics');

export function gpuDiagnosticsHost(global: typeof globalThis = globalThis) {
  const host = (global as any)[hostKey] as
    ReturnType<typeof installGPUDiagnostics> | undefined;
  if (!host) throw new TypeError('GPU diagnostics host is unavailable');
  return host;
}

export function installGPUDiagnostics(global: typeof globalThis) {
  const secret = {};
  const messageFields = new WeakMap<object, CompilationMessageFields>();
  const infoMessages = new WeakMap<object, readonly GPUCompilationMessage[]>();
  function fields(receiver: object) {
    const value = messageFields.get(receiver);
    if (!value) throw new TypeError('Illegal invocation');
    return value;
  }
  class GPUCompilationMessage {
    constructor(token: object, value: CompilationMessageFields) {
      if (token !== secret) throw new TypeError('Illegal constructor');
      const { message, type, lineNum, linePos, offset, length } = value;
      messageFields.set(this, { message, type, lineNum, linePos, offset, length });
    }
    get message() {
      return fields(this).message;
    }
    get type() {
      return fields(this).type;
    }
    get lineNum() {
      return fields(this).lineNum;
    }
    get linePos() {
      return fields(this).linePos;
    }
    get offset() {
      return fields(this).offset;
    }
    get length() {
      return fields(this).length;
    }
  }
  class GPUCompilationInfo {
    constructor(token: object, messages: readonly GPUCompilationMessage[]) {
      if (token !== secret) throw new TypeError('Illegal constructor');
      if (
        !Array.isArray(messages) ||
        messages.some((value) => !messageFields.has(value))
      )
        throw new TypeError('Expected GPU compilation messages');
      // Keep decoded objects and the array identity shared with the native clone graph.
      infoMessages.set(this, Object.freeze(messages));
    }
    get messages() {
      const value = infoMessages.get(this);
      if (!value) throw new TypeError('Illegal invocation');
      return value;
    }
  }
  for (const [name, Class] of Object.entries({
    GPUCompilationInfo,
    GPUCompilationMessage,
  })) {
    Object.defineProperties(Class, {
      name: { value: name },
      length: { value: 0 },
    });
    for (const key of Object.getOwnPropertyNames(Class.prototype)) {
      const descriptor = Object.getOwnPropertyDescriptor(Class.prototype, key)!;
      if (descriptor.get)
        Object.defineProperty(Class.prototype, key, {
          ...descriptor,
          enumerable: true,
        });
    }
    Object.defineProperties(Class.prototype, {
      [Symbol.toStringTag]: { value: name, configurable: true },
      [Symbol.for('flax.uncloneable')]: { value: true },
    });
    Object.defineProperty(global, name, {
      value: Class,
      configurable: true,
      writable: true,
    });
  }
  const host = {
    message(value: CompilationMessageFields) {
      return new GPUCompilationMessage(secret, value);
    },
    info(messages: readonly GPUCompilationMessage[]) {
      return new GPUCompilationInfo(secret, messages);
    },
    serialize(value: object): unknown[] | undefined {
      const messages = infoMessages.get(value);
      if (messages) return ['GPUCompilationInfo', messages];
      const fields = messageFields.get(value);
      if (fields) return ['GPUCompilationMessage', fields];
      return undefined;
    },
    deserialize(record: any[]) {
      if (record[0] === 'GPUCompilationInfo') return host.info(record[1]);
      if (record[0] === 'GPUCompilationMessage') return host.message(record[1]);
      throw new TypeError('Invalid GPU diagnostics clone record');
    },
  };
  Object.defineProperty(global, hostKey, { value: host });
  return host;
}
