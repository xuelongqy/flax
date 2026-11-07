import { distribution, gaps, observeRootFrames } from './metrics.mjs';

export const cases = [
  { name: '960x540-64', width: 960, height: 540, models: 64 },
  { name: '1920x1080-64', width: 1920, height: 1080, models: 64 },
  { name: '1920x1080-512', width: 1920, height: 1080, models: 512 },
];
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function endpoint(canvas, config, acknowledge, worker) {
  let producer,
    nextId = 0,
    rejectWindow,
    endWindow;
  let measurement, failure;
  const pending = new Map();
  const failed = (error) => {
    failure = error;
    rejectWindow?.(error);
    for (const value of pending.values()) {
      clearTimeout(value.timeout);
      value.reject(error);
    }
    pending.clear();
  };
  const post = (action, value, transfer = [], id) =>
    worker.postMessage({ action, value, id }, transfer);
  const call = (action, value, transfer = []) =>
    new Promise((resolve, reject) => {
      if (failure) {
        reject(failure);
        return;
      }
      const id = ++nextId;
      const timeout = setTimeout(() => {
        pending.delete(id);
        reject(Error('Renderer Worker timed out: ' + action));
      }, 120000);
      pending.set(id, { resolve, reject, timeout });
      post(action, value, transfer, id);
    });
  let metadata;
  if (config.arm === 'worker') {
    worker.onerror = (event) => failed(Error(event.message));
    worker.onmessage = ({ data }) => {
      if (data.type === 'error') failed(Error(data.error));
      else if (data.type === 'ack') acknowledge(data.seq);
      else if (data.type === 'window-end') endWindow();
      else if (data.type === 'result') {
        const value = pending.get(data.id);
        if (!value) return;
        clearTimeout(value.timeout);
        pending.delete(data.id);
        value.resolve(data.result);
      } else failed(Error('Unknown rendering Worker message'));
    };
    metadata = await call('init', { canvas, config }, [canvas]);
    if (canvas.width !== 0)
      throw Error('Rendering ownership must transfer to the Worker');
  } else {
    const start = performance.now();
    const { createProducer } = await import(
      config.baseUrl + 'scene.js?sha256=' + config.sceneSha256
    );
    const importMs = performance.now() - start;
    producer = await createProducer(canvas, config, acknowledge);
    metadata = { ...producer.metadata, importMs, domFree: false };
  }
  return {
    metadata,
    warm: (value) => (worker ? call('warm', value) : producer.warm(value)),
    start(value) {
      if (failure) throw failure;
      const windowEnded = new Promise((resolve, reject) => {
        endWindow = resolve;
        rejectWindow = reject;
      });
      if (worker) post('start', value);
      else {
        measurement = producer.start(value, endWindow);
        measurement.catch(failed);
      }
      return windowEnded;
    },
    input: (id) => (worker ? post('input', id) : producer.input(id)),
    collect: () => (worker ? call('collect') : producer.collect()),
    snapshot: (time) => (worker ? call('snapshot', time) : producer.snapshot(time)),
    async close() {
      if (worker) await call('close');
      else await producer.close();
      if (failure) throw failure;
    },
  };
}

export async function runComparison(
  config,
  createCanvas,
  phase = () => {},
  verifyCanvas = async () => ({}),
) {
  if (!['main', 'worker'].includes(config.arm))
    throw Error('arm must be main or worker');
  const throughputMs = config.smoke ? (config.throughputMs ?? 2000) : 20000;
  const latencyMs = config.smoke ? (config.latencyMs ?? 2000) : 10000;
  if (!(
    Number.isFinite(throughputMs) &&
    Number.isFinite(latencyMs) &&
    throughputMs >= 500 &&
    latencyMs >= 500 &&
    throughputMs <= 20000 &&
    latencyMs <= 10000
  ))
    throw Error(
      'Measurement windows must be finite, at least 500 ms, and no longer than full runs',
    );
  const warmupMs = 3000,
    warmupFrames = 120;
  const refreshRate = config.refreshRate;
  if (!(refreshRate > 0)) throw Error('Supply the display refresh rate');
  const periodMs = 1000 / refreshRate;
  const order = config.caseOrder ?? [0, 1, 2];
  if (
    !order.length ||
    new Set(order).size !== order.length ||
    order.some((i) => !Number.isInteger(i) || !cases[i])
  )
    throw Error('caseOrder must contain distinct valid case indices');
  const results = [];
  // One realm per process gives all arms the same module-cache lifetime across cases.
  let renderingWorker;
  try {
    for (const index of order) {
      const spec = cases[index];
      phase(spec.name, 'cold');
      const began = performance.now();
      const coldObservation = observeRootFrames();
      if (config.arm === 'worker' && !renderingWorker)
        renderingWorker = new Worker(config.baseUrl + 'renderer-worker.js', {
          type: 'module',
        });
      const canvas = createCanvas(spec.width, spec.height);
      const acknowledgements = [];
      const probes = new Map();
      let unexpectedAcks = 0;
      const value = await endpoint(
        canvas,
        { ...config, ...spec },
        (id) => {
          const probe = probes.get(id);
          if (!probe || probe.ackAt !== undefined) {
            unexpectedAcks++;
            return;
          }
          probe.ackAt = performance.now();
          acknowledgements.push(probe);
        },
        renderingWorker,
      );
      const cold = {
        rootSetupToFirstGpuAckMs: performance.now() - began,
        ...value.metadata,
      };
      const coldWindowEndMs = coldObservation.mark();
      await delay(300);
      cold.rootFrames = coldObservation.stop(coldWindowEndMs, periodMs);
      try {
        phase(spec.name, 'warmup');
        const warmup = await value.warm({ warmupMs, warmupFrames });
        if (warmup.frames < warmupFrames || warmup.elapsedMs < warmupMs)
          throw Error('Warmup protocol was not met');
        phase(spec.name, 'throughput-and-tail');
        const observation = observeRootFrames();
        await value.start({ kind: 'throughput', durationMs: throughputMs });
        const windowEndMs = observation.mark();
        // No pixels, quantiles or result serialization until this deferred-stall observation ends.
        await delay(300);
        const rootFrames = observation.stop(windowEndMs, periodMs);
        const throughput = await value.collect();
        if (throughput.frames < 5 || throughput.elapsedMs < throughputMs)
          throw Error('Throughput window did not render');
        phase(spec.name, 'latency');
        const latencyStart = performance.now();
        const planned = Math.ceil(latencyMs / 100) - 1;
        const timers = [];
        // Register every finite deadline before rendering can block root dispatch.
        const dispatched = Array.from(
          { length: planned },
          (_, index) =>
            new Promise((resolve) => {
              const id = index + 1;
              const deadline = latencyStart + id * 100;
              timers.push(
                setTimeout(
                  () => {
                    const probe = { id, deadline, dispatchAt: performance.now() };
                    probes.set(id, probe);
                    value.input(id);
                    resolve();
                  },
                  Math.max(0, deadline - performance.now()),
                ),
              );
            }),
        );
        let rootLatencyWindowEnd, latencyRun;
        try {
          await value.start({ kind: 'latency', durationMs: latencyMs });
          rootLatencyWindowEnd = performance.now();
          await Promise.all(dispatched);
          latencyRun = await value.collect();
        } finally {
          for (const timer of timers) clearTimeout(timer);
        }
        const rootLatencyObservationMs = performance.now() - latencyStart;
        if (
          unexpectedAcks ||
          acknowledgements.length < 3 ||
          probes.size !== planned ||
          acknowledgements.length !== probes.size
        )
          throw Error('Missing or duplicate latency acknowledgements');
        const dispatchDelay = acknowledgements.map((p) => p.dispatchAt - p.deadline);
        const dispatchToAck = acknowledgements.map((p) => p.ackAt - p.dispatchAt);
        const deadlineToAck = acknowledgements.map((p) => p.ackAt - p.deadline);
        phase(spec.name, 'verification');
        const snapshots = [];
        for (const time of [0, 0.5]) snapshots.push(await value.snapshot(time));
        const displayed = await verifyCanvas(spec.name);
        results.push({
          ...spec,
          logicalCanvas: [880, 495],
          cold,
          warmup,
          throughput: {
            ...throughput,
            renderCost: distribution(throughput.renderMs),
            producerOccupiedMs: throughput.renderMs.reduce(
              (sum, cost) => sum + cost,
              0,
            ),
            producerGaps: gaps(throughput.startsMs, periodMs),
            rootFrames,
          },
          latency: {
            endpoint: 'scheduled update to GPU-completion acknowledgement',
            intervalMs: 100,
            elapsedMs: latencyRun.elapsedMs,
            rootObservationMs: rootLatencyObservationMs,
            rootWindowEndMs: rootLatencyWindowEnd - latencyStart,
            lastAckAfterWindowEndMs: Math.max(
              0,
              ...acknowledgements.map((p) => p.ackAt - rootLatencyWindowEnd),
            ),
            probesRenderedAfterWindow: latencyRun.probesRenderedAfterWindow,
            probeDrainMs: latencyRun.probeDrainMs,
            scheduled: planned,
            dispatched: probes.size,
            acknowledged: acknowledgements.length,
            coalescedBeforeRender: latencyRun.coalescedBeforeRender,
            unacknowledgedIds: [...probes.values()]
              .filter((p) => p.ackAt === undefined)
              .map((p) => p.id),
            deadlineToDispatch: distribution(dispatchDelay, true),
            dispatchToAck: distribution(dispatchToAck, true),
            deadlineToAck: distribution(deadlineToAck, true),
            observations: acknowledgements.map((p) => ({
              id: p.id,
              deadlineMs: p.deadline - latencyStart,
              dispatchMs: p.dispatchAt - latencyStart,
              ackMs: p.ackAt - latencyStart,
            })),
          },
          snapshots,
          displayed,
        });
      } finally {
        await value.close();
      }
    }
  } finally {
    renderingWorker?.terminate();
  }
  phase('', 'complete');
  return {
    passed: true,
    arm: config.arm,
    smoke: config.smoke === true,
    sourceSha256: config.sourceSha256,
    sceneSha256: config.sceneSha256,
    rendererRealm:
      config.arm === 'worker' ? 'one persistent Worker per process' : 'root realm',
    protocol: {
      throughputMs,
      latencyMs,
      warmupMs,
      warmupFrames,
      postObservationMs: 300,
      refreshRate,
      caseOrder: order,
    },
    cases: results,
  };
}
