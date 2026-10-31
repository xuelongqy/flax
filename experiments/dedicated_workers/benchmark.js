(async () => {
  const source = `
    onmessage = ({data}) => {
      if (data.op === 'busy') {
        postMessage({started:true});
        const until=performance.now()+data.ms;
        let sum=0; while(performance.now()<until) sum++;
        postMessage({done:true,sum});
      } else if(data.op === 'transfer') postMessage(data, [data.buffer]);
      else postMessage(data);
    };
    postMessage({ready:true, noWindow:typeof window==='undefined', noDocument:typeof document==='undefined'});
  `;
  const now = () => performance.now();
  const percentile = (values, p) =>
    [...values].sort((a, b) => a - b)[
      Math.min(values.length - 1, Math.floor(values.length * p))
    ];
  const summary = (values) => ({
    n: values.length,
    medianMs: percentile(values, 0.5),
    p95Ms: percentile(values, 0.95),
    p99Ms: percentile(values, 0.99),
    maxMs: Math.max(...values),
  });
  async function create() {
    const start = now(),
      url = URL.createObjectURL(new Blob([source]));
    const worker = new Worker(url);
    URL.revokeObjectURL(url);
    await new Promise((resolve, reject) => {
      worker.onmessage = ({ data }) =>
        data.ready && data.noWindow && data.noDocument
          ? resolve()
          : reject(new Error('Invalid worker host'));
      worker.onerror = (e) => reject(new Error(e.message));
    });
    return { worker, ms: now() - start };
  }
  const startup = [];
  const first = await create();
  const worker = first.worker;
  globalThis.__flaxWorkerBenchmarkPhase?.('first Worker ready');
  for (let i = 0; i < 10; i++) {
    const item = await create();
    startup.push(item.ms);
    item.worker.terminate();
  }
  async function roundtrip(data, transfer) {
    const response = new Promise((resolve, reject) => {
      worker.onmessage = (e) => resolve(e.data);
      worker.onerror = (e) => reject(new Error(e.message));
    });
    const start = now();
    worker.postMessage(data, transfer || []);
    const postMs = now() - start;
    const result = await response;
    return { data: result, ms: now() - start, postMs };
  }
  const small = [];
  for (let i = 0; i < 100; i++) small.push((await roundtrip({ value: i })).ms);
  globalThis.__flaxWorkerBenchmarkPhase?.('small messages done');
  const bytes = 16 * 1024 * 1024,
    copy = [],
    copyPost = [];
  let buffer = new ArrayBuffer(bytes);
  new Uint8Array(buffer).fill(127);
  async function measureTransfers(buffer, count = 20) {
    const times = [],
      post = [];
    const start = now();
    for (let i = 0; i < count; i++) {
      const input = buffer;
      const result = await roundtrip({ buffer, op: 'transfer' }, [buffer]);
      if (
        input.byteLength !== 0 ||
        result.data.buffer.byteLength !== bytes ||
        new Uint8Array(result.data.buffer)[bytes - 1] !== 127
      )
        throw new Error('Transfer corrupted');
      buffer = result.data.buffer;
      times.push(result.ms);
      post.push(result.postMs);
    }
    return {
      buffer,
      times: summary(times),
      post: summary(post),
      elapsedMs: now() - start,
    };
  }
  const beforeCopy = await measureTransfers(buffer);
  globalThis.__flaxWorkerBenchmarkPhase?.('transfer before copy done');
  buffer = beforeCopy.buffer;
  for (let i = 0; i < 20; i++) {
    const result = await roundtrip({ buffer, op: 'copy' });
    if (
      result.data.buffer.byteLength !== bytes ||
      new Uint8Array(result.data.buffer)[bytes - 1] !== 127
    )
      throw new Error('Copy corrupted');
    copy.push(result.ms);
    copyPost.push(result.postMs);
  }
  const afterCopy = await measureTransfers(buffer);
  globalThis.__flaxWorkerBenchmarkPhase?.('copy and transfer done');
  const transferGaps = [];
  let lastTransferTick = now();
  const transferObservationStart = lastTransferTick;
  const transferTimer = setInterval(() => {
    const time = now();
    transferGaps.push(time - lastTransferTick);
    lastTransferTick = time;
  }, 5);
  const transferObservation = new Promise((resolve) =>
    setTimeout(() => {
      clearInterval(transferTimer);
      resolve(now() - transferObservationStart);
    }, 500),
  );
  const sustainedStart = now();
  const sustained = await measureTransfers(afterCopy.buffer, 200);
  await new Promise((resolve) => setTimeout(resolve, 30));
  const sustainedSettledMs = now() - sustainedStart;
  const transferObservationMs = await transferObservation;
  globalThis.__flaxWorkerBenchmarkPhase?.('sustained transfer done');
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  async function responsiveness(background) {
    globalThis.__flaxWorkerBenchmarkPhase?.(
      'responsiveness ' + (background ? 'worker' : 'main') + ' starting',
    );
    const gaps = [];
    let last = now();
    const timer = setInterval(() => {
      const t = now();
      gaps.push(t - last);
      last = t;
    }, 5);
    await sleep(30);
    globalThis.__flaxWorkerBenchmarkPhase?.('responsiveness work starting');
    const start = now();
    if (background)
      await new Promise((resolve, reject) => {
        worker.onmessage = ({ data }) => {
          if (data.done) resolve();
        };
        worker.onerror = (e) => reject(new Error(e.message));
        worker.postMessage({ op: 'busy', ms: 200 });
      });
    else {
      const until = now() + 200;
      while (now() < until) {}
    }
    const elapsed = now() - start;
    globalThis.__flaxWorkerBenchmarkPhase?.('responsiveness work done');
    await sleep(30);
    clearInterval(timer);
    return {
      elapsedMs: elapsed,
      ticks: gaps.length,
      maxGapMs: Math.max(...gaps),
      p95GapMs: percentile(gaps, 0.95),
    };
  }
  const background = await responsiveness(true),
    main = await responsiveness(false);
  worker.terminate();
  globalThis.workerBenchmark = JSON.stringify({
    firstStartupMs: first.ms,
    repeatedStartup: summary(startup),
    smallRoundtrip: summary(small),
    bufferBytes: bytes,
    copyRoundtrip: summary(copy),
    copyPost: summary(copyPost),
    transferBeforeCopy: beforeCopy.times,
    transferRoundtrip: afterCopy.times,
    transferPost: afterCopy.post,
    sustainedTransfer: {
      ...sustained.times,
      elapsedMs: sustained.elapsedMs,
      settledElapsedMs: sustainedSettledMs,
      timerGaps: summary(transferGaps),
      timerTailMs: 30,
      timerWindowMs: 500,
      timerObservationMs: transferObservationMs,
    },
    responsiveness: { background, main },
    carrier: 'Isolate.spawn (same isolate group)',
    transport: 'native V8 serializer + BackingStore',
  });
  globalThis.__flaxWorkerBenchmarkDone?.(globalThis.workerBenchmark);
})().catch((error) => {
  globalThis.workerBenchmark = String(error.stack || error);
  globalThis.__flaxWorkerBenchmarkDone?.(globalThis.workerBenchmark);
});
