let producer, measurement;
const error = (value) =>
  postMessage({ type: 'error', error: value.stack ?? String(value) });
self.onmessage = ({ data }) => {
  (async () => {
    const { id, action, value } = data;
    let result;
    if (action === 'init') {
      if (typeof document !== 'undefined' || typeof window !== 'undefined')
        throw Error('The rendering Worker must remain DOM-free');
      const start = performance.now();
      const { createProducer } = await import(
        value.config.baseUrl + 'scene.js?sha256=' + value.config.sceneSha256
      );
      const importMs = performance.now() - start;
      producer = await createProducer(value.canvas, value.config, (seq) =>
        postMessage({ type: 'ack', seq }),
      );
      result = { ...producer.metadata, importMs, domFree: true };
    } else if (action === 'start') {
      measurement = producer.start(value, () => postMessage({ type: 'window-end' }));
      measurement.catch(error);
      return;
    } else if (action === 'input') {
      producer.input(value);
      return;
    } else if (action === 'collect') result = await producer.collect();
    else if (action === 'warm') result = await producer.warm(value);
    else if (action === 'snapshot') result = await producer.snapshot(value);
    else if (action === 'close') await producer.close();
    else throw Error('Unknown renderer Worker action: ' + action);
    postMessage({ type: 'result', id, result });
  })().catch(error);
};
