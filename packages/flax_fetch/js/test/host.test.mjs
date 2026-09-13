import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';
import { createContext, runInContext } from 'node:vm';
import { buildHost, hostBundles } from '../../../../tool/src/host_bundle.mjs';

const baseCode = await buildHost(hostBundles.find((bundle) => bundle.base));
const fetchCode = await buildHost(
  hostBundles.find((bundle) => bundle.packageName === 'flax_fetch'),
);
function environment(beforeFetch = () => {}) {
  let base;
  const timers = new Map();
  const logs = [];
  const context = createContext({
    __flaxBaseCall(operation, ...args) {
      if (operation === 'timeOrigin') return Date.now();
      if (operation === 'now') return performance.now();
      if (operation === 'timer') {
        const [id, delay, repeat] = args;
        timers.set(
          id,
          repeat
            ? setInterval(() => base.fire(id), delay)
            : setTimeout(() => {
                timers.delete(id);
                base.fire(id);
              }, delay),
        );
      } else if (operation === 'clearTimer') {
        clearTimeout(timers.get(args[0]));
        timers.delete(args[0]);
      } else if (operation === 'error') logs.push(args[0]);
    },
    __flaxFetchCall(op) {
      if (op === 'baseUrl') return 'http://example.test/';
      throw Error('Unexpected network request');
    },
  });
  base = runInContext(baseCode, context);
  beforeFetch(context);
  const fetch = runInContext(fetchCode, context);
  return {
    context,
    logs,
    close() {
      fetch.close();
      base.close();
      for (const timer of timers.values()) clearTimeout(timer);
    },
  };
}

test('standard data and streams work without browser or Node globals', async () => {
  const e = environment();
  try {
    const result = await runInContext(
      `(async () => {
      const equal = (a,b) => {if (JSON.stringify(a)!==JSON.stringify(b)) throw Error(JSON.stringify([a,b]));};
      equal([typeof window,typeof document,typeof process], ['undefined','undefined','undefined']);
      equal(new DOMException('invalid', 'SyntaxError').code, 12);
      try { atob('!'); throw Error('Invalid base64 accepted'); } catch(e) { equal([e instanceof DOMException, e.name], [true, 'InvalidCharacterError']); }
      equal(new Request('/a', {referrer:''}).clone().referrer, '');
      const b = new Blob(['中文',new Uint8Array([0,255])],{type:'APPLICATION/BINARY'});
      equal([b.size,b.type], [8,'application/binary']);
      equal([...await b.slice(6).bytes()],[0,255]);
      const r = new Response('abc'); const clone = r.clone();
      equal([await r.text(), await clone.text()], ['abc','abc']);
      let failed = false;try{await r.text();}catch{failed=true;}equal(failed,true);
      const headers = new Headers([['X',' a '],['X','b'],['Set-Cookie','x=1'],['Set-Cookie','y=2']]);
      equal([headers.get('x'),headers.getSetCookie()],['a, b',['x=1','y=2']]);
      const fd = new FormData();fd.append('same','a');fd.append('same','b');fd.append('file',b,'日本.bin');
      const encoded = new Response(fd); const decoded = await encoded.formData();
      equal(decoded.getAll('same'),['a','b']);equal(decoded.get('file').name,'日本.bin');
      equal([...await decoded.get('file').bytes()],[...await b.bytes()]);
      const reader = b.stream().getReader({mode:'byob'});const buffer = new Uint8Array(16);const sibling = new Uint8Array(buffer.buffer);
      const first = await reader.read(buffer);equal([buffer.byteLength,sibling.byteLength],[0,0]);
      equal([...first.value],[...await b.bytes()].slice(0,first.value.length));await reader.cancel();
      const input = new ReadableStream({start(c){c.enqueue('\\ud83c');c.enqueue('\\udf31');c.close();}});
      const output = input.pipeThrough(new TextEncoderStream()).pipeThrough(new TextDecoderStream());
      let text='';for await(const chunk of output)text+=chunk;equal(text,'🌱');
      const ac = new AbortController();const inner = AbortSignal.any([ac.signal]);const outer=AbortSignal.any([inner]);
      ac.abort('reason');equal([inner.reason,outer.reason],['reason','reason']);
      return 'ok';
    })()`,
      e.context,
    );
    assert.equal(result, 'ok');
    assert.deepEqual(e.logs, []);
  } finally {
    e.close();
  }
});

test('unsupported options, invalid headers and streams reject rather than fake success', async () => {
  const e = environment();
  try {
    assert.equal(
      await runInContext(
        `(async () => {
    let count=0;for(const action of [() => new Request('/a',{mode:'no-cors'}),()=>new Request('/a',{cache:'force-cache'}),()=>new Request('/a',{method:'GET',body:'x'}),()=>new Headers({'bad name':'x'}),()=>new Response('x',{status:204})]) {try{action();}catch{count++;}}
    try{await new Response(new ReadableStream({start(c){c.enqueue('invalid');c.close();}})).text();}catch{count++;}
    return count;
  })()`,
        e.context,
      ),
      6,
    );
  } finally {
    e.close();
  }
});

test('the complete selected upstream Headers WPT files pass', async () => {
  const { wptSource } = await import('./ui.mjs');
  const e = environment();
  try {
    runInContext(await wptSource(), e.context);
    assert.ok(runInContext('wptResults.length', e.context) > 20);
  } finally {
    e.close();
  }
});

const bodyCases = await readFile(new URL('./body-cases.js', import.meta.url), 'utf8');
for (const name of [
  'emptyChunks',
  'streamOwnership',
  'disturbedInput',
  'bodyUsed',
  'requestTransfer',
  'reusedBuffer',
  'cancellationAndErrors',
]) {
  test(`Body contract: ${name}`, async () => {
    const e = environment();
    let timeout;
    try {
      runInContext(bodyCases, e.context);
      await Promise.race([
        runInContext(`hostBodyCases.${name}()`, e.context),
        new Promise((_, reject) => {
          timeout = setTimeout(
            () => reject(Error('Body check did not complete')),
            1000,
          );
        }),
      ]);
      assert.deepEqual(e.logs, []);
    } finally {
      clearTimeout(timeout);
      e.close();
    }
  });
}

test('dependent abort signals retain listeners across real GC', async () => {
  assert.equal(typeof global.gc, 'function', 'Run Node with --expose-gc');
  const e = environment();
  try {
    runInContext(bodyCases, e.context);
    runInContext('prepareAbortProbes()', e.context);
    for (let i = 0; i < 10; i++) {
      await new Promise(setImmediate);
      global.gc();
    }
    runInContext('checkAbortProbes()', e.context);
    for (let i = 0; i < 10; i++) {
      await new Promise(setImmediate);
      global.gc();
    }
    assert.equal(
      runInContext('abortProbes.every(p => p.weak.deref() === undefined)', e.context),
      true,
    );
  } finally {
    e.close();
  }
});

test('pinned Streams adapter validates the real disturbed slot', async () => {
  const { build } = await import('esbuild');
  const adapter = await build({
    entryPoints: ['src/streams.ts'],
    bundle: true,
    write: false,
    format: 'iife',
    globalName: 'adapter',
  });
  const e = environment();
  try {
    runInContext(adapter.outputFiles[0].text, e.context);
    await runInContext(
      `(async () => {
      const { isDisturbed } = adapter;
      const check = value => { if (!value) throw Error('Adapter contract'); };
      const stream = new ReadableStream({start(c) {c.close();}});
      check(!isDisturbed(stream));
      const reader = stream.getReader(); check(!isDisturbed(stream));
      await reader.read(); reader.releaseLock(); check(isDisturbed(stream));
      for (const value of [undefined, 0]) {
        stream._disturbed = value;
        let error; try { isDisturbed(stream); } catch(e) { error=e; }
        check(error instanceof TypeError);
      }
      let error; try { isDisturbed({_disturbed:false}); } catch(e) {error=e;}
      check(error instanceof TypeError);
    })()`,
      e.context,
    );
  } finally {
    e.close();
  }
});

test('Fetch reuses base constructors and objects made before plugin installation', async () => {
  const e = environment((context) =>
    runInContext(
      `
    globalThis.originals = [Blob, File, FormData, ReadableStream, TransformStream, TextEncoderStream];
    globalThis.earlyBlob = new Blob(['early']);
    globalThis.earlyFile = new File([earlyBlob], 'early.txt');
    globalThis.earlyForm = new FormData(); earlyForm.append('file', earlyFile);
    globalThis.earlyStream = earlyBlob.stream();
  `,
      context,
    ),
  );
  try {
    assert.equal(
      await runInContext(
        `(async () => {
      if (![Blob,File,FormData,ReadableStream,TransformStream,TextEncoderStream].every((c,i)=>c===originals[i])) throw Error('Reinstalled constructor');
      if (new Response(earlyStream).body !== earlyStream) throw Error('Changed stream');
      if (await new Response(earlyBlob).text() !== 'early') throw Error('Blob');
      const form = await new Response(earlyForm).formData();
      if (!(form instanceof FormData) || !(form.get('file') instanceof File)) throw Error('Form identity');
      if (!(await new Response(earlyFile).blob() instanceof Blob)) throw Error('Blob identity');
      return 'ok';
    })()`,
        e.context,
      ),
      'ok',
    );
  } finally {
    e.close();
  }
});
