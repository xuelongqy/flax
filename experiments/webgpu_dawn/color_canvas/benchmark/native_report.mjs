import { DynamicLibrary, toString } from '../../../../packages/flax_ffi/js/api.js';

const report = globalThis.__colorBenchmarkReport;
globalThis.__colorBenchmarkReport = async (payload) => {
  try {
    const result = JSON.parse(payload);
    if (result.error) {
      report(payload);
      return;
    }
    // Let the final Flutter consumer complete before reading the instrumented asset.
    await new Promise((resolve) => setTimeout(resolve, 100));
    const library = DynamicLibrary.codeAsset('@flax/webgpu/dawn');
    try {
      const read = library.getFunction('flax_webgpu_benchmark_stats', {
        arguments: [],
        return: 'pointer',
      });
      result.native = JSON.parse(toString(read()));
    } finally {
      library.close();
    }
    report(JSON.stringify(result));
  } catch (error) {
    report(JSON.stringify({ error: error.stack || String(error) }));
  }
};
