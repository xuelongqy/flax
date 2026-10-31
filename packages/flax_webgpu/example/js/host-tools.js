export async function verifyHostTools(assert) {
  assert(window === globalThis && window === self, 'window is the shared global');
  assert(window.document.defaultView === window, 'Canvas document shares window');
  const bytes = new Uint8Array(24).fill(255),
    view = new Uint32Array(bytes.buffer, 8, 2);
  assert(
    window.crypto.getRandomValues(view) === view,
    'Random values return the supplied view',
  );
  assert(
    bytes.subarray(0, 8).every((x) => x === 255) &&
      bytes.subarray(16).every((x) => x === 255),
    'Random values preserve surrounding bytes',
  );
  crypto.getRandomValues(new BigUint64Array(2));
  const id = crypto.randomUUID();
  assert(
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(id),
    'UUID v4',
  );
  const detail = { scene: ['three'] };
  const start = performance.mark(id, { detail });
  detail.scene[0] = 'changed';
  assert(start.detail.scene[0] === 'three', 'PerformanceMark clones detail');
  let observer;
  try {
    const delivered = new Promise((resolve) => {
      observer = new PerformanceObserver((list, self) => {
        const records = list.getEntriesByName(id, 'measure');
        if (records.length) {
          self.disconnect();
          resolve(records);
        }
      });
      observer.observe({ type: 'measure' });
    });
    await new Promise((resolve) => setTimeout(resolve, 0));
    const measure = performance.measure(id, { start: id, end: performance.now() });
    const records = await delivered;
    assert(
      measure.duration >= 0 && records[0] === measure,
      'Observer delivers the real measured entry',
    );
    assert(
      performance.getEntriesByName(id).length === 2,
      'Mark and measure share the timeline',
    );
    return {
      window: true,
      randomViews: true,
      uuid: true,
      userTiming: true,
      observer: true,
    };
  } finally {
    observer?.disconnect();
    performance.clearMarks(id);
    performance.clearMeasures(id);
  }
}
