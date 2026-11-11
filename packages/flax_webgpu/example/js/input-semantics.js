// Check observable conversion order and native validation using ordinary GPU objects.
export async function verifyInputSemantics(device, assert) {
  let assertions = 0;
  const check = (value, message) => {
    assertions++;
    assert(value, message);
  };
  const throws = (action, name, message) => {
    let error;
    try {
      action();
    } catch (value) {
      error = value;
    }
    check(error?.name === name, message);
  };
  const source = device.createBuffer({
    size: 32,
    usage: GPUBufferUsage.COPY_SRC | GPUBufferUsage.VERTEX | GPUBufferUsage.INDEX,
    mappedAtCreation: true,
  });
  const output = device.createBuffer({
    size: 32,
    usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.MAP_READ,
  });
  const texture = device.createTexture({
    size: [1, 1],
    format: 'rgba8unorm',
    usage: GPUTextureUsage.RENDER_ATTACHMENT,
  });
  const reads = [];
  const number = (name, value) => ({
    valueOf() {
      reads.push(name);
      return value;
    },
  });
  try {
    const chainDescriptor = Object.getOwnPropertyDescriptor(
      Object.prototype,
      'nextInChain',
    );
    const compareDescriptor = Object.getOwnPropertyDescriptor(
      Object.prototype,
      'compare',
    );
    const bufferDescriptor = Object.getOwnPropertyDescriptor(
      Object.prototype,
      'buffer',
    );
    const sizeDescriptor = Object.getOwnPropertyDescriptor(Object.prototype, 'size');
    let chainReads = 0,
      compareReads = 0,
      bufferReads = 0,
      sizeReads = 0,
      packedTexture,
      uniform;
    try {
      Object.defineProperty(Object.prototype, 'nextInChain', {
        configurable: true,
        get() {
          chainReads++;
          throw Error('Native-only fields must not read inherited values');
        },
      });
      Object.defineProperty(Object.prototype, 'compare', {
        configurable: true,
        get() {
          compareReads++;
          return undefined;
        },
      });
      for (const descriptor of [null, {}]) {
        const before = compareReads;
        device.createSampler(descriptor);
        check(
          compareReads - before === Number(descriptor !== null),
          'Native packing does not repeat optional sampler dictionary getter reads',
        );
      }
      packedTexture = device.createTexture({
        size: [1, 1],
        format: 'rgba8unorm',
        usage: GPUTextureUsage.TEXTURE_BINDING,
      });
      check(
        chainReads === 0 && packedTexture.width === 1,
        'Sampler and texture packing ignore inherited native-only chain fields',
      );
      const layout = device.createBindGroupLayout({
        entries: [
          { binding: 0, visibility: GPUShaderStage.FRAGMENT, sampler: {} },
          { binding: 1, visibility: GPUShaderStage.FRAGMENT, texture: {} },
          { binding: 2, visibility: GPUShaderStage.FRAGMENT, buffer: {} },
          { binding: 3, visibility: GPUShaderStage.FRAGMENT, buffer: {} },
        ],
      });
      const sampler = device.createSampler();
      const view = packedTexture.createView();
      for (const resource of [sampler, view])
        Object.defineProperty(resource, 'buffer', {
          configurable: true,
          get() {
            bufferReads++;
            throw Error('Resource binding detection must not read buffer expandos');
          },
        });
      uniform = device.createBuffer({ size: 16, usage: GPUBufferUsage.UNIFORM });
      Object.defineProperty(Object.prototype, 'buffer', {
        configurable: true,
        get() {
          bufferReads++;
          throw Error(
            'Resource binding detection must not read inherited buffer fields',
          );
        },
      });
      Object.defineProperty(Object.prototype, 'size', {
        configurable: true,
        get() {
          sizeReads++;
          return undefined;
        },
      });
      device.createBindGroup({
        layout,
        entries: [
          { binding: 0, resource: sampler },
          { binding: 1, resource: view },
          { binding: 2, resource: { buffer: uniform } },
          { binding: 3, resource: uniform },
        ],
      });
      check(
        bufferReads === 0 && sizeReads === 1,
        'Sampler and view bindings ignore buffer expandos while both buffer forms preserve size conversion',
      );
    } finally {
      if (chainDescriptor)
        Object.defineProperty(Object.prototype, 'nextInChain', chainDescriptor);
      else delete Object.prototype.nextInChain;
      if (compareDescriptor)
        Object.defineProperty(Object.prototype, 'compare', compareDescriptor);
      else delete Object.prototype.compare;
      if (bufferDescriptor)
        Object.defineProperty(Object.prototype, 'buffer', bufferDescriptor);
      else delete Object.prototype.buffer;
      if (sizeDescriptor)
        Object.defineProperty(Object.prototype, 'size', sizeDescriptor);
      else delete Object.prototype.size;
      packedTexture?.destroy();
      uniform?.destroy();
    }
    const optionalDescriptors = [
      [
        'sampler',
        () =>
          (...args) =>
            device.createSampler(...args),
      ],
      [
        'compute pass',
        () => {
          const command = device.createCommandEncoder();
          return (...args) => {
            const pass = command.beginComputePass(...args);
            pass.end();
            command.finish();
            return pass;
          };
        },
      ],
      [
        'render bundle',
        () => {
          const bundle = device.createRenderBundleEncoder({
            colorFormats: ['rgba8unorm'],
          });
          return (...args) => bundle.finish(...args);
        },
      ],
    ];
    for (const [name, prepare] of optionalDescriptors) {
      for (const args of [[], [undefined], [null], [{}]]) {
        const call = prepare();
        const saved = Object.getOwnPropertyDescriptor(Object.prototype, 'label');
        let reads = 0,
          result;
        try {
          Object.defineProperty(Object.prototype, 'label', {
            configurable: true,
            get() {
              reads++;
              return 'prototype-label';
            },
          });
          result = call(...args);
        } finally {
          if (saved) Object.defineProperty(Object.prototype, 'label', saved);
          else delete Object.prototype.label;
        }
        const explicit = args[0] != null;
        check(
          reads === Number(explicit) &&
            result.label === (explicit ? 'prototype-label' : ''),
          name + ' preserves empty-dictionary defaults and explicit inherited members',
        );
      }
    }
    check(
      (await navigator.gpu.requestAdapter({ featureLevel: 'Core' })) === null,
      'Unknown feature-level strings resolve to a null adapter',
    );
    for (const args of [[], [undefined], [null], [{}]]) {
      const explicit = args[0] != null;
      for (const operation of ['requestAdapter', 'requestDevice']) {
        const adapter =
          operation === 'requestDevice'
            ? await navigator.gpu.requestAdapter()
            : undefined;
        const key = operation === 'requestDevice' ? 'label' : 'powerPreference';
        const saved = Object.getOwnPropertyDescriptor(Object.prototype, key);
        let reads = 0,
          result;
        try {
          Object.defineProperty(Object.prototype, key, {
            configurable: true,
            get() {
              reads++;
              return key === 'label' ? 'prototype-label' : 'low-power';
            },
          });
          result = await (operation === 'requestDevice'
            ? adapter.requestDevice(...args)
            : navigator.gpu.requestAdapter(...args));
        } finally {
          if (saved) Object.defineProperty(Object.prototype, key, saved);
          else delete Object.prototype[key];
        }
        try {
          check(
            result && reads === Number(explicit),
            operation +
              ' preserves nullish defaults and explicit dictionary inheritance',
          );
          if (operation === 'requestDevice')
            check(
              result.label === (explicit ? 'prototype-label' : '') &&
                result.queue.label === '',
              'Default device queues do not inherit object-prototype labels',
            );
        } finally {
          if (operation === 'requestDevice') result?.destroy();
        }
      }
    }
    for (const input of [undefined, null]) {
      throws(
        () => device.createBuffer(input),
        'TypeError',
        'Buffer descriptors still require size and usage',
      );
      throws(
        () => device.createRenderBundleEncoder(input),
        'TypeError',
        'Bundle encoders still require colorFormats',
      );
      throws(
        () => device.createCommandEncoder().beginRenderPass(input),
        'TypeError',
        'Render passes still require colorAttachments',
      );
    }
    const mapped = source.getMappedRange(number('mappedOffset', 8));
    check(
      mapped.byteLength === 24 && reads.join() === 'mappedOffset',
      'getMappedRange converts its offset once before deriving the default size',
    );
    new Uint32Array(mapped).set([11, 22, 33, 44, 55, 66]);
    new Uint32Array(source.getMappedRange(0, 8)).set([101, 202]);
    source.unmap();

    const encoder = device.createCommandEncoder();
    encoder.copyBufferToBuffer(source, output, null);
    reads.length = 0;
    encoder.copyBufferToBuffer(
      source,
      number('copySource', 8),
      output,
      number('copyDestination', 8),
    );
    check(
      reads.join() === 'copySource,copyDestination',
      'The four-argument copy overload converts object offsets once in argument order',
    );
    reads.length = 0;
    encoder.clearBuffer(output, number('clearOffset', 16));
    check(reads.join() === 'clearOffset', 'clearBuffer converts its offset once');
    let iteratorReads = 0;
    const commands = {
      get [Symbol.iterator]() {
        iteratorReads++;
        return function* () {
          yield encoder.finish();
        };
      },
    };
    device.queue.submit(commands);
    check(iteratorReads === 1, 'submit reads the sequence iterator once');
    reads.length = 0;
    await output.mapAsync(number('mapMode', GPUMapMode.READ), number('mapOffset', 0));
    check(
      reads.join() === 'mapMode,mapOffset',
      'mapAsync converts mode and default-range offset once',
    );
    throws(
      () => output.getMappedRange(64),
      'OperationError',
      'An omitted mapped size with an out-of-bounds offset raises OperationError',
    );
    const bytes = new Uint32Array(output.getMappedRange(8));
    check(
      Array.from(new Uint32Array(output.getMappedRange(0, 8))).join() === '0,0',
      'An explicit null copy size converts to zero instead of the default remaining size',
    );
    check(
      Array.from(bytes).join() === '11,22,0,0,0,0',
      'Default copy and clear ranges preserve the expected GPU bytes',
    );
    output.unmap();
    let mapError;
    try {
      await output.mapAsync(GPUMapMode.READ, 64);
    } catch (error) {
      mapError = error;
    }
    check(
      mapError?.name === 'OperationError',
      'An omitted map size outside the buffer rejects with OperationError',
    );

    for (const value of ['', '0', { length: 0 }, null])
      throws(
        () => device.queue.submit(value),
        'TypeError',
        'submit rejects non-sequence input',
      );
    let closed = 0;
    throws(
      () =>
        device.queue.submit({
          [Symbol.iterator]() {
            return {
              next() {
                return { value: {}, done: false };
              },
              return() {
                closed++;
                return { done: true };
              },
            };
          },
        }),
      'TypeError',
      'submit converts each command while iterating',
    );
    check(
      closed === 0,
      'WebIDL sequence conversion leaves the iterator open on conversion failure',
    );

    const attachment = {
      view: texture.createView(),
      loadOp: 'clear',
      storeOp: 'store',
    };
    const bundle = device
      .createRenderBundleEncoder({ colorFormats: ['rgba8unorm'] })
      .finish();
    const rendering = device.createCommandEncoder();
    const pass = rendering.beginRenderPass({ colorAttachments: [attachment] });
    for (const value of ['', { length: 0 }])
      throws(
        () => pass.executeBundles(value),
        'TypeError',
        'executeBundles requires a sequence object',
      );
    iteratorReads = 0;
    pass.executeBundles({
      get [Symbol.iterator]() {
        iteratorReads++;
        return function* () {
          yield bundle;
        };
      },
    });
    check(iteratorReads === 1, 'executeBundles reads its iterator method once');
    pass.end();
    device.queue.submit([rendering.finish()]);

    for (const kind of ['compute', 'render', 'bundle']) {
      const command = device.createCommandEncoder();
      const binding =
        kind === 'compute'
          ? command.beginComputePass()
          : kind === 'render'
            ? command.beginRenderPass({ colorAttachments: [attachment] })
            : device.createRenderBundleEncoder({ colorFormats: ['rgba8unorm'] });
      for (const value of ['', '0', { length: 0 }, null])
        throws(
          () => binding.setBindGroup(0, null, value),
          'TypeError',
          kind + ' setBindGroup requires sequence offsets',
        );
      throws(
        () => binding.setBindGroup(0, null, new Uint32Array(), 0),
        'TypeError',
        kind + ' setBindGroup rejects the missing fifth overload argument',
      );
      throws(
        () => binding.setBindGroup(0, null, [], 0, 0),
        'TypeError',
        kind + ' setBindGroup requires Uint32Array in the five-argument overload',
      );
      throws(
        () => binding.setBindGroup(0, null, new Uint32Array(), undefined, undefined),
        'TypeError',
        kind + ' setBindGroup converts required five-argument overload scalars',
      );
      iteratorReads = 0;
      binding.setBindGroup(0, null, {
        get [Symbol.iterator]() {
          iteratorReads++;
          return function* () {};
        },
      });
      check(iteratorReads === 1, kind + ' setBindGroup reads its iterator method once');
      if (kind !== 'compute') {
        reads.length = 0;
        binding.setIndexBuffer(source, 'uint32', number('indexOffset', 8));
        check(
          reads.join() === 'indexOffset',
          kind + ' setIndexBuffer converts its default-range offset once',
        );
        for (const format of ['UINT32', 'uint-32'])
          throws(
            () => binding.setIndexBuffer(source, format),
            'TypeError',
            'Index formats use exact IDL spelling',
          );
      }
      if (kind === 'bundle') binding.finish();
      else binding.end();
      command.finish();
    }
    for (const kind of ['render', 'bundle']) {
      device.pushErrorScope('validation');
      const command = device.createCommandEncoder();
      const pass =
        kind === 'render'
          ? command.beginRenderPass({ colorAttachments: [attachment] })
          : device.createRenderBundleEncoder({ colorFormats: ['rgba8unorm'] });
      pass.setVertexBuffer(0, null, 0, 4);
      if (kind === 'render') {
        pass.end();
        command.finish();
      } else pass.finish();
      check(
        (await device.popErrorScope()) instanceof GPUValidationError,
        kind + ' null vertex buffer preserves explicit nonzero-size native validation',
      );
    }
    device.pushErrorScope('validation');
    const invalidClear = device.createCommandEncoder();
    invalidClear.clearBuffer(output, 64);
    invalidClear.finish();
    check(
      (await device.popErrorScope()) instanceof GPUValidationError,
      'clearBuffer omitted size preserves native out-of-bounds validation',
    );

    source.label = 'label\ud800';
    check(source.label === 'label\ufffd', 'Object labels use USVString replacement');
    const label = Object.getOwnPropertyDescriptor(GPUBuffer.prototype, 'label');
    check(
      label.configurable && label.enumerable && !Object.hasOwn(source, 'label'),
      'GPU labels are configurable enumerable prototype accessors',
    );
    const handler = Object.getOwnPropertyDescriptor(
      GPUDevice.prototype,
      'onuncapturederror',
    );
    check(
      handler.configurable &&
        handler.enumerable &&
        !Object.hasOwn(device, 'onuncapturederror'),
      'The uncaptured-error handler uses a configurable prototype accessor',
    );
    throws(
      () =>
        Object.getOwnPropertyDescriptor(GPUAdapter.prototype, 'features').get.call(
          device,
        ),
      'TypeError',
      'Readonly attributes reject a receiver from a different GPU interface',
    );
    check(
      GPUCommandEncoder.prototype.copyBufferToBuffer.length === 2 &&
        GPUCommandEncoder.prototype.copyBufferToBuffer.name === 'copyBufferToBuffer',
      'Overloaded methods retain their standard function length and name',
    );
    const message = Object.getOwnPropertyDescriptor(GPUError.prototype, 'message');
    check(
      GPUBuffer.length === 0 && GPUError.length === 0,
      'Illegal GPU constructors have the standard zero function length',
    );
    check(
      Object.getPrototypeOf(GPUBuffer) === Function.prototype &&
        Object.getPrototypeOf(GPUBuffer.prototype) === Object.prototype &&
        Object.getPrototypeOf(GPUDevice) === EventTarget &&
        Object.getPrototypeOf(GPUDevice.prototype) === EventTarget.prototype,
      'GPU objects preserve their direct standard constructor and prototype inheritance',
    );
    for (const Constructor of [
      GPUValidationError,
      GPUOutOfMemoryError,
      GPUInternalError,
    ]) {
      const error = new Constructor('message');
      check(
        error instanceof GPUError &&
          !(error instanceof Error) &&
          error.message === 'message',
        'GPU errors inherit the standard GPUError object interface',
      );
      check(
        !Object.hasOwn(error, 'message') && message.enumerable && message.configurable,
        'GPUError.message is a readonly prototype attribute',
      );
      throws(
        () => new Constructor(),
        'TypeError',
        'GPU error constructors require their message argument',
      );
    }
    const eventReads = [];
    const error = new GPUValidationError('event');
    const event = new GPUUncapturedErrorEvent(
      'uncapturederror',
      new Proxy(
        { error },
        {
          get(target, key) {
            eventReads.push(key);
            return target[key];
          },
        },
      ),
    );
    check(
      eventReads.join() === 'bubbles,cancelable,composed,error' &&
        event.error === error,
      'GPUUncapturedErrorEvent converts inherited members first and reads error once',
    );
    check(
      !Object.hasOwn(event, 'error'),
      'GPUUncapturedErrorEvent.error is a prototype attribute',
    );
    throws(
      () => message.get.call({}),
      'TypeError',
      'GPU error getters enforce their receiver brand',
    );
    throws(
      () =>
        new GPUUncapturedErrorEvent('x', { error: Object.create(GPUError.prototype) }),
      'TypeError',
      'Uncaptured events reject forged GPUError objects',
    );
    const pipelineReads = [];
    const pipelineError = new GPUPipelineError(
      {
        toString() {
          pipelineReads.push('message');
          return 'pipeline';
        },
      },
      {
        get reason() {
          pipelineReads.push('reason');
          return 'validation';
        },
      },
    );
    check(
      pipelineReads.join() === 'message,reason' &&
        pipelineError.reason === 'validation',
      'Pipeline errors convert message before options',
    );
    check(
      !Object.hasOwn(pipelineError, 'reason') &&
        Object.getOwnPropertyDescriptor(GPUPipelineError.prototype, 'reason')
          .configurable,
      'Pipeline error reason is a configurable readonly prototype attribute',
    );
    return {
      assertions,
      bufferRanges: true,
      overloads: true,
      sequences: true,
      errors: true,
    };
  } finally {
    source.destroy();
    output.destroy();
    texture.destroy();
  }
}
