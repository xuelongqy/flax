// Exercise the real native serializer and the selected WebGPU Dedicated Worker realm.
export async function verifyDiagnostics(device, assert) {
  let assertions = 0;
  const check = (value, message) => {
    assertions++;
    assert(value, message);
  };
  const throws = (action, name, message) => {
    let thrown;
    try {
      action();
    } catch (error) {
      thrown = error;
    }
    check(thrown?.name === name, message);
  };
  const fields = (message) =>
    Object.fromEntries(
      ['message', 'type', 'lineNum', 'linePos', 'offset', 'length'].map((key) => [
        key,
        message[key],
      ]),
    );
  let info;
  for (const [source, token] of [
    [
      '/*😀*/ @compute @workgroup_size(1) fn main() { let café = missing_name; }',
      'missing_name',
    ],
    [
      '// 注释😀\n/*é*/ @compute @workgroup_size(1) fn main() { let café = missing_name; }',
      'missing_name',
    ],
    ['/*😀*/ @compute @workgroup_size(1) fn main() { let value: u32 = café; }', 'café'],
  ]) {
    device.pushErrorScope('validation');
    const current = await device
      .createShaderModule({ code: source })
      .getCompilationInfo();
    check(
      (await device.popErrorScope()) instanceof GPUValidationError,
      'Invalid WGSL reports a native validation error',
    );
    const message = current.messages[0];
    const offset = source.indexOf(token);
    check(
      message?.type === 'error' &&
        message.offset === offset &&
        message.length === token.length &&
        message.lineNum === source.slice(0, offset).split('\n').length &&
        message.linePos === offset - source.lastIndexOf('\n', offset - 1),
      'Native compilation source locations use UTF-16 code units',
    );
    info ??= current;
  }
  const messages = info.messages;
  const message = messages[0];
  check(
    info instanceof GPUCompilationInfo && message instanceof GPUCompilationMessage,
    'Native compilation diagnostics use Core brands',
  );
  check(
    message.type === 'error' &&
      message.message.length > 0 &&
      message.lineNum > 0 &&
      message.linePos > 0,
    'Native compilation diagnostics retain their message and source location',
  );
  const original = fields(message);
  const graph = [info, messages, message, message];
  for (const Class of [GPUCompilationInfo, GPUCompilationMessage]) {
    throws(() => new Class(), 'TypeError', Class.name + ' has an illegal constructor');
    const key = Class === GPUCompilationInfo ? 'messages' : 'message';
    const descriptor = Object.getOwnPropertyDescriptor(Class.prototype, key);
    check(
      descriptor.enumerable && descriptor.configurable,
      Class.name + ' exposes its WebIDL getter descriptor',
    );
    throws(
      () => descriptor.get.call(Object.create(Class.prototype)),
      'TypeError',
      Class.name + ' checks its receiver brand',
    );
  }
  throws(
    () => messages.push(message),
    'TypeError',
    'Compilation messages are exposed as a frozen array',
  );
  const empty = await device
    .createShaderModule({
      code: '@compute @workgroup_size(1) fn main() {}',
    })
    .getCompilationInfo();
  check(
    empty.messages.length === 0 && Object.isFrozen(empty.messages),
    'Valid WGSL exposes a frozen empty compilation-message array',
  );
  const shadow = () => {
    throw Error('Public diagnostic getters must not be read');
  };
  for (const key of Object.keys(original))
    Object.defineProperty(message, key, { get: shadow });
  Object.defineProperty(info, 'messages', { get: shadow });
  info.extra = 'ignored';
  const verifyGraph = (copy, label) => {
    check(
      copy[0] instanceof GPUCompilationInfo && copy[2] instanceof GPUCompilationMessage,
      label + ' restores destination-realm diagnostic brands',
    );
    check(
      copy[0].messages === copy[1] &&
        copy[0].messages[0] === copy[2] &&
        copy[2] === copy[3],
      label + ' preserves array and repeated message identities',
    );
    check(
      Object.isFrozen(copy[0].messages) &&
        JSON.stringify(fields(copy[2])) === JSON.stringify(original) &&
        copy[0].extra === undefined,
      label + ' clones backing slots and freezes the decoded messages array',
    );
  };
  const copy = structuredClone(graph);
  verifyGraph(copy, 'structuredClone');
  check(
    copy[0] !== info && copy[2] !== message,
    'structuredClone creates new diagnostic objects',
  );
  const liveBuffer = device.createBuffer({ size: 4, usage: GPUBufferUsage.COPY_DST });
  const transferable = new Uint8Array([4, 3, 2, 1]).buffer;
  try {
    for (const unsupported of [
      device,
      liveBuffer,
      Object.create(GPUCompilationInfo.prototype),
    ]) {
      throws(
        () =>
          structuredClone([info, transferable, unsupported], {
            transfer: [transferable],
          }),
        'DataCloneError',
        'Unsupported platform objects still reject diagnostic-containing clone graphs',
      );
      check(
        transferable.byteLength === 4 && new Uint8Array(transferable)[0] === 4,
        'A failed graph clone does not detach earlier ArrayBuffer transfers',
      );
    }
    throws(
      () => structuredClone(info, { transfer: [transferable, info] }),
      'DataCloneError',
      'Compilation diagnostics are serializable but not transferable',
    );
    check(
      transferable.byteLength === 4,
      'An invalid diagnostic transfer preserves earlier buffers',
    );

    const source = `
      onmessage = ({data}) => {
        const [info, messages, message, repeated] = data;
        const checks = {
          brands: info instanceof GPUCompilationInfo && message instanceof GPUCompilationMessage,
          identities: info.messages === messages && messages[0] === message && message === repeated,
          frozen: Object.isFrozen(messages),
          selectedGpuProfile: typeof navigator.gpu?.requestAdapter === 'function' && typeof OffscreenCanvas === 'function',
          noDom: typeof window === 'undefined' && typeof document === 'undefined' && typeof HTMLCanvasElement === 'undefined',
        };
        postMessage({checks, graph: data, local: structuredClone(data)});
      };`;
    const worker = new Worker(
      'data:application/javascript,' + encodeURIComponent(source),
    );
    try {
      throws(
        () => worker.postMessage([info, liveBuffer], [transferable]),
        'DataCloneError',
        'Worker messaging still rejects live GPU resources',
      );
      throws(
        () => worker.postMessage(info, [transferable, info]),
        'DataCloneError',
        'Worker messaging rejects diagnostics in transfer lists',
      );
      check(
        transferable.byteLength === 4,
        'Failed Worker messages preserve ArrayBuffer ownership',
      );
      const result = await new Promise((resolve, reject) => {
        const timeout = setTimeout(
          () => reject(Error('Diagnostic Worker timed out')),
          10000,
        );
        worker.onmessage = ({ data }) => {
          clearTimeout(timeout);
          resolve(data);
        };
        worker.onerror = (event) => {
          clearTimeout(timeout);
          reject(Error(event.message));
        };
        worker.onmessageerror = () => {
          clearTimeout(timeout);
          reject(Error('Diagnostic Worker clone failed'));
        };
        worker.postMessage(graph);
      });
      check(
        Object.values(result.checks).every(Boolean),
        'A WebGPU Worker without a DOM clones branded diagnostics',
      );
      verifyGraph(result.graph, 'Worker round trip');
      verifyGraph(result.local, 'Worker structuredClone round trip');
    } finally {
      worker.terminate();
    }
  } finally {
    liveBuffer.destroy();
  }
  const pipelineError = new GPUPipelineError('pipeline diagnostic', {
    reason: 'validation',
  });
  const clonedError = structuredClone(pipelineError);
  check(
    clonedError instanceof DOMException &&
      clonedError.name === pipelineError.name &&
      clonedError.message === pipelineError.message,
    'GPUPipelineError uses inherited DOMException serialization',
  );
  return { assertions, messages: messages.length, worker: true };
}
