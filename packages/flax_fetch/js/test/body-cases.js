// The same public-API checks run in Node and the actual Flutter engines.
const check = (condition, message) => {
  if (!condition) throw new Error(message);
};
const rejects = (action, message) => {
  let error;
  try {
    action();
  } catch (caught) {
    error = caught;
  }
  check(error instanceof TypeError, message);
};
globalThis.hostBodyCases = {
  async emptyChunks() {
    for (const chunks of [
      [[], [65], [], [], [66], []],
      [[], []],
    ]) {
      const stream = new ReadableStream({
        start(controller) {
          for (const chunk of chunks) controller.enqueue(new Uint8Array(chunk));
          controller.close();
        },
      });
      const text = await new Response(stream).text();
      check(
        text === (chunks.length === 2 ? '' : 'AB'),
        'Empty chunks must not stop consumption',
      );
    }
  },
  async streamOwnership() {
    const input = new Uint8Array([1, 2, 3]);
    const sibling = new DataView(input.buffer);
    const stream = new ReadableStream({
      start(c) {
        c.enqueue(input);
        c.close();
      },
    });
    const response = new Response(stream);
    check(
      response.body === stream && !stream.locked,
      'Preserve the original stream without locking',
    );
    rejects(
      () => response.body.getReader({ mode: 'byob' }),
      'Default streams do not acquire BYOB support',
    );
    check((await response.bytes()).join() === '1,2,3', 'Response bytes');
    check(
      input.byteLength === 3 && sibling.byteLength === 3,
      'Do not detach producer buffers',
    );
    const requestStream = new ReadableStream({
      start(c) {
        c.close();
      },
    });
    const request = new Request('http://example.test/', {
      method: 'POST',
      body: requestStream,
    });
    check(request.body === requestStream, 'Request body preserves stream identity');
    await request.text();
  },
  async disturbedInput() {
    for (const kind of ['default', 'byob', 'cancel', 'pipe', 'tee', 'iterate']) {
      const stream = new Blob(['AB']).stream();
      if (kind === 'default' || kind === 'byob') {
        const reader = stream.getReader(kind === 'byob' ? { mode: 'byob' } : undefined);
        await reader.read(kind === 'byob' ? new Uint8Array(1) : undefined);
        reader.releaseLock();
      } else if (kind === 'cancel') await stream.cancel();
      else if (kind === 'pipe') await stream.pipeTo(new WritableStream());
      else if (kind === 'tee') {
        const [a, b] = stream.tee();
        await Promise.all([new Response(a).text(), new Response(b).text()]);
      } else {
        for await (const chunk of stream) {
          check(chunk.length > 0, 'Iteration');
        }
      }
      rejects(() => new Response(stream), `Reject consumed Response input: ${kind}`);
      rejects(
        () => new Request('http://example.test/', { method: 'POST', body: stream }),
        `Reject consumed Request input: ${kind}`,
      );
    }
    const untouched = new ReadableStream({
      start(c) {
        c.close();
      },
    });
    check(
      (await new Response(untouched).text()) === '',
      'An untouched closed stream is valid',
    );
  },
  async bodyUsed() {
    for (const mode of ['default', 'byob', 'cancel', 'pipe', 'tee']) {
      const response = new Response('AB');
      check(!response.bodyUsed, 'Initially unused');
      if (mode === 'default' || mode === 'byob') {
        const reader = response.body.getReader(
          mode === 'byob' ? { mode: 'byob' } : undefined,
        );
        check(!response.bodyUsed, 'Locking alone is not consumption');
        const reading = reader.read(mode === 'byob' ? new Uint8Array(1) : undefined);
        check(response.bodyUsed, 'read disturbs synchronously');
        await reading;
        await reader.cancel();
        reader.releaseLock();
      } else if (mode === 'cancel') {
        const cancelling = response.body.cancel();
        check(response.bodyUsed, 'cancel disturbs synchronously');
        await cancelling;
      } else if (mode === 'pipe') {
        const piping = response.body.pipeTo(new WritableStream());
        check(response.bodyUsed, 'pipe disturbs synchronously');
        await piping;
      } else {
        const [a, b] = response.body.tee();
        await Promise.all([new Response(a).text(), new Response(b).text()]);
      }
      check(response.bodyUsed, 'Consumption is permanent');
      rejects(() => response.clone(), 'Consumed response cannot clone');
    }
  },
  async requestTransfer() {
    const old = new Request('http://example.test/', {
      method: 'POST',
      body: 'hello',
      headers: { 'x-test': 'value' },
    });
    rejects(() => new Request(old, { method: 'GET' }), 'Invalid GET body');
    check(
      !old.bodyUsed && !old.body.locked,
      'Failed construction must preserve source',
    );
    const next = new Request(old);
    check(old.bodyUsed && old.body.locked, 'Source request transferred synchronously');
    check(
      !next.bodyUsed && next.headers.get('x-test') === 'value',
      'New request retains metadata',
    );
    const clone = next.clone();
    check(
      (await Promise.all([next.text(), clone.text()])).join() === 'hello,hello',
      'Both clone branches consume',
    );
    let notifyCancellation;
    const cancellation = new Promise((resolve) => {
      notifyCancellation = resolve;
    });
    const stream = new ReadableStream({
      cancel(reason) {
        notifyCancellation(reason);
      },
    });
    const origin = new Request('http://example.test/', {
      method: 'POST',
      body: stream,
    });
    const transferred = new Request(origin);
    const reason = {};
    await transferred.body.cancel(reason);
    check((await cancellation) === reason, 'Transferred request cancels its source');
  },
  async reusedBuffer() {
    const buffer = new Uint8Array(1);
    let count = 0;
    const stream = new ReadableStream(
      {
        pull(c) {
          if (++count > 3) {
            c.close();
            return;
          }
          buffer[0] = count;
          c.enqueue(buffer);
        },
      },
      { highWaterMark: 0 },
    );
    check(
      (await new Response(stream).bytes()).join() === '1,2,3',
      'Consumption owns each observed chunk',
    );
    check(buffer.byteLength === 1, 'Producer buffer still usable');
  },
  async cancellationAndErrors() {
    let cancellation;
    const body = new ReadableStream({
      cancel(reason) {
        cancellation = reason;
      },
    });
    const response = new Response(body);
    const reader = response.body.getReader();
    const reading = reader.read();
    const reason = {};
    await reader.cancel(reason);
    check(
      (await reading).done && cancellation === reason,
      'Cancel pending read and source',
    );
    reader.releaseLock();
    const error = new Error('source failure');
    try {
      await new Response(
        new ReadableStream({
          start(c) {
            c.error(error);
          },
        }),
      ).bytes();
      throw Error('Expected source error');
    } catch (caught) {
      check(caught === error, 'Original source error preserved');
    }
    let invalidCancelled = false;
    try {
      await new Response(
        new ReadableStream({
          start(c) {
            c.enqueue('invalid');
          },
          cancel() {
            invalidCancelled = true;
          },
        }),
      ).bytes();
      throw Error('Expected invalid chunk error');
    } catch (caught) {
      check(
        caught instanceof TypeError && invalidCancelled,
        'Invalid chunks cancel the source',
      );
    }
  },
};

function abortListener(probe) {
  return () => {
    probe.calls++;
  };
}

globalThis.prepareAbortProbes = () => {
  const source = new AbortController();
  const first = AbortSignal.any([source.signal]);
  const second = AbortSignal.any([first]);
  const order = [];
  source.signal.addEventListener('abort', () => {
    check(first.aborted && second.aborted, 'Dependent states precede notifications');
    order.push('source');
  });
  first.onabort = () => order.push('first');
  second.onabort = () => order.push('second');
  source.abort();
  check(
    order.join() === 'source,first,second',
    'Source precedes dependent notifications',
  );
  globalThis.abortProbes = [
    'active',
    'removed',
    'onabort',
    'cleared',
    'once',
    'controlled',
  ].map((mode) => {
    const record = {
      mode,
      controller: new AbortController(),
      calls: 0,
      listener: null,
      weak: null,
    };
    record.listener = abortListener(record);
    const intermediate = AbortSignal.any([record.controller.signal]);
    const signal = AbortSignal.any([intermediate]);
    record.weak = new WeakRef(signal);
    if (mode === 'onabort' || mode === 'cleared') {
      signal.onabort = record.listener;
      if (mode === 'cleared') signal.onabort = null;
    } else if (mode === 'controlled') {
      const removal = new AbortController();
      signal.addEventListener('abort', record.listener, { signal: removal.signal });
      removal.abort();
    } else {
      signal.addEventListener('abort', record.listener, { once: mode === 'once' });
      signal.addEventListener('abort', record.listener);
      if (mode === 'removed') signal.removeEventListener('abort', record.listener);
      if (mode === 'once') record.controller.abort();
    }
    return record;
  });
};
globalThis.checkAbortProbes = () => {
  for (const record of abortProbes) {
    const alive = record.weak.deref() !== undefined;
    check(
      alive === ['active', 'onabort'].includes(record.mode),
      `GC retention: ${record.mode}: ${alive}`,
    );
    record.controller.abort();
    check(
      record.calls === (['active', 'onabort', 'once'].includes(record.mode) ? 1 : 0),
      `Abort notification: ${record.mode}`,
    );
  }
};
