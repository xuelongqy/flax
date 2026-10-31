import assert from 'node:assert/strict';
import test from 'node:test';
import { readFile } from 'node:fs/promises';
import { createContext, runInContext } from 'node:vm';
import { build } from 'esbuild';
import { buildHost, hostBundles } from '../../../../../tool/src/host_bundle.mjs';

const baseCode = await buildHost(hostBundles.find((bundle) => bundle.base));
test('session close rejects Fetch awaiting headers and ignores late settlement', async () => {
  const operations = [];
  const context = createContext({
    __flaxBaseCall(operation, ...args) {
      if (operation === 'timeOrigin') return 0;
      if (operation === 'fetch' && args[0] !== 'baseUrl') operations.push(args);
    },
  });
  const base = runInContext(baseCode, context);
  const response = runInContext(
    "fetch('http://example.test/').then(() => 'resolved', error => error.message)",
    context,
  );
  const [open, openId] = operations.shift();
  assert.equal(open, 'open');
  base.fetch.settle(openId, true, null);
  await new Promise((resolve) => setImmediate(resolve));
  const [headers, headersId] = operations.shift();
  assert.equal(headers, 'headers');
  base.close();
  base.fetch.settle(
    headersId,
    true,
    JSON.stringify({ status: 200, statusText: 'OK', headers: [] }),
  );
  assert.equal(await response, 'FlaxSessionClosed');
});

function environment(beforeFetch = () => {}) {
  let base;
  const timers = new Map();
  const logs = [];
  const context = createContext({
    __flaxBaseCall(operation, ...args) {
      if (operation === 'fetch') {
        if (context.__flaxFetchCall) return context.__flaxFetchCall(...args);
        if (args[0] === 'baseUrl') return 'http://example.test/';
        if (args[0] === 'abort') return;
        throw Error('Unexpected network request');
      }
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
  });
  base = runInContext(baseCode, context);
  beforeFetch(context);

  return {
    context,
    logs,
    settle: base.fetch.settle,
    close() {
      base.close();
      for (const timer of timers.values()) clearTimeout(timer);
    },
  };
}

test('window alias preserves Axios Fetch with the session base URL and no cookie storage', async () => {
  const bundle = await build({
    entryPoints: ['test/fetch/axios-entry.ts'],
    absWorkingDir: new URL('../..', import.meta.url).pathname,
    bundle: true,
    write: false,
    format: 'iife',
    platform: 'neutral',
    conditions: ['react-native'],
    mainFields: ['module', 'main'],
  });
  const e = environment();
  try {
    runInContext(
      `
      if(location.href!=='http://example.test/' || location.origin!=='http://example.test')throw Error('Session address');
      if(document.cookie!=='')throw Error('Unexpected cookie storage');
      try {document.cookie='token=value';throw Error('Cookie write accepted');} catch(e) {if(e.name!=='NotSupportedError')throw e;}
      globalThis.lastRequest=null;
      globalThis.fetch=async request=>{lastRequest=request;return new Response('{"ok":true}',{headers:{'Content-Type':'application/json'}});};
    `,
      e.context,
    );
    runInContext(bundle.outputFiles[0].text, e.context);
    assert.equal(
      await runInContext(
        `(async()=>{const response=await axios.get('/data',{adapter:'fetch'});return response.data.ok===true&&lastRequest.url==='http://example.test/data'&&!lastRequest.headers.has('X-XSRF-TOKEN');})()`,
        e.context,
      ),
      true,
    );
    assert.deepEqual(e.logs, []);
  } finally {
    e.close();
  }
});

test('standard data and streams work without browser or Node globals', async () => {
  const e = environment();
  try {
    const result = await runInContext(
      `(async () => {
      const equal = (a,b) => {if (JSON.stringify(a)!==JSON.stringify(b)) throw Error(JSON.stringify([a,b]));};
      equal([typeof window,typeof document,typeof process], ['object','object','undefined']);
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
    entryPoints: ['src/host/fetch/streams.ts'],
    plugins: [
      {
        name: 'installed-streams',
        setup(build) {
          build.onResolve({ filter: /^web-streams-polyfill$/ }, () => ({
            path: 'streams',
            namespace: 'installed',
          }));
          build.onLoad({ filter: /.*/, namespace: 'installed' }, () => ({
            contents: 'export const {ReadableStream} = globalThis;',
          }));
        },
      },
    ],
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

test('Fetch reuses the default base constructors and objects', async () => {
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

test('session Blob URLs preserve bytes, revocation, isolation and abort behavior', async () => {
  const e = environment(),
    other = environment();
  try {
    const url = runInContext(
      `URL.createObjectURL(new Blob(['model bytes'], {type:'model/gltf-binary'}))`,
      e.context,
    );
    e.context.blobUrl = url;
    other.context.blobUrl = url;
    await assert.rejects(
      runInContext('fetch(blobUrl)', other.context),
      (error) => error.name === 'TypeError',
    );
    assert.equal(
      await runInContext(
        `(async () => {
      const response = await fetch(blobUrl + '#image');
      if (response.status !== 200 || response.url !== blobUrl || response.headers.get('content-type') !== 'model/gltf-binary' || response.headers.get('content-length') !== '11') throw Error('Blob response metadata');
      URL.revokeObjectURL(blobUrl);
      if (await response.text() !== 'model bytes') throw Error('Captured Blob bytes');
      try { await fetch(blobUrl); throw Error('Revoked URL accepted'); } catch(e) { if (!(e instanceof TypeError)) throw e; }
      const active = URL.createObjectURL(new Blob(['abc']));
      for (const init of [{method:'POST'}]) {
        try { await fetch(active, init); throw Error('Unsupported Blob request accepted'); } catch(e) { if (!(e instanceof TypeError)) throw e; }
      }
      const controller = new AbortController(), reason = {};
      const body = await fetch(active, {signal: controller.signal}); controller.abort(reason);
      try { await body.text(); throw Error('Aborted body accepted'); } catch(e) { if (e !== reason) throw e; }
      URL.revokeObjectURL(active);
      return true;
    })()`,
        e.context,
      ),
      true,
    );
    const pending = await runInContext(
      "fetch(URL.createObjectURL(new Blob(['pending'])))",
      e.context,
    );
    e.close();
    await assert.rejects(pending.text(), /FlaxSessionClosed/);
    assert.deepEqual(e.logs, []);
  } finally {
    e.close();
    other.close();
  }
});

test('HTTP redirects cannot enter the session Blob URL registry', async () => {
  let e,
    opens = 0,
    aborts = 0;
  e = environment((context) => {
    context.__flaxFetchCall = (operation, id) => {
      if (operation === 'baseUrl') return 'http://example.test/';
      if (operation === 'abort') {
        aborts++;
        return;
      }
      if (operation === 'open') opens++;
      if (!['open', 'headers'].includes(operation)) throw Error(operation);
      queueMicrotask(() =>
        e.settle(
          id,
          true,
          operation === 'headers'
            ? JSON.stringify({
                status: 302,
                statusText: 'Found',
                headers: [['location', context.destination]],
              })
            : undefined,
        ),
      );
    };
  });
  try {
    e.context.destination = runInContext(
      "URL.createObjectURL(new Blob(['private']))",
      e.context,
    );
    await assert.rejects(
      runInContext("fetch('http://example.test/model')", e.context),
      /Redirect targets must use HTTP or HTTPS/,
    );
    assert.equal(opens, 1);
    assert.equal(aborts, 1);
  } finally {
    e.close();
  }
});

test('data URLs decode binary percent bytes, base64, MIME parameters and HEAD without network', async () => {
  const e = environment();
  try {
    assert.equal(
      await runInContext(
        `(async()=>{
      const cases=[['data:,abc','text/plain;charset=US-ASCII',[97,98,99]],['data:invalid,abc','text/plain;charset=US-ASCII',[97,98,99]],['data:text/plain;charset=UTF-8,hi','text/plain;charset=UTF-8',[104,105]],['data:application/octet-stream,%FF%00','application/octet-stream',[255,0]],['data:text/plain;base64,YWJj','text/plain',[97,98,99]],['data:;charset=utf-8,中文','text/plain;charset=utf-8',[228,184,173,230,150,135]]];
      for(const [url,type,bytes]of cases){
        const response=await fetch(url,{headers:{Range:'bytes=0-1'}});
        if(response.type!=='basic'||response.status!==200||response.headers.get('content-type')!==type||response.headers.has('content-length'))throw Error('Data metadata '+url);
        if(JSON.stringify([...await response.bytes()])!==JSON.stringify(bytes))throw Error('Data bytes '+url);
        if((await(await fetch(url,{method:'HEAD'})).bytes()).length!==0)throw Error('HEAD body');
      }
      for(const url of ['data:no-comma','data:text/plain;base64,!!']){
        let failed=false;try{await fetch(url)}catch(error){failed=error instanceof TypeError}if(!failed)throw Error('Malformed data accepted');
      }
      const controller=new AbortController(),reason={};controller.abort(reason);
      try{await fetch('data:,abc',{signal:controller.signal});throw Error('Aborted request')}catch(error){if(error!==reason)throw error}
      return true;
    })()`,
        e.context,
      ),
      true,
    );
    assert.deepEqual(e.logs, []);
  } finally {
    e.close();
  }
});

test('Blob byte ranges match browser interval, suffix and failure behavior', async () => {
  const e = environment();
  try {
    assert.equal(
      await runInContext(
        `(async()=>{
      const url=URL.createObjectURL(new Blob(['abcdef'],{type:'text/plain'}));
      for(const [range,text,contentRange] of [['bytes=1-3','bcd','bytes 1-3/6'],['bytes= 1 - 3','bcd','bytes 1-3/6'],['bytes=2-','cdef','bytes 2-5/6'],['bytes=-2','ef','bytes 4-5/6'],['bytes=0-999999999999999999999','abcdef','bytes 0-5/6']]){
        const r=await fetch(url,{headers:{Range:range}});
        if(r.status!==206||r.headers.get('content-range')!==contentRange||r.headers.get('content-length')!==String(text.length)||await r.text()!==text)throw Error('Range '+range);
      }
      for(const range of ['bytes=8-9','bytes=3-1','bytes=-0','bytes=0-1,3-4','invalid']){
        let failed=false;try{await fetch(url,{headers:{Range:range}})}catch(error){failed=error instanceof TypeError}if(!failed)throw Error('Invalid range '+range);
      }
      URL.revokeObjectURL(url);return true;
    })()`,
        e.context,
      ),
      true,
    );
  } finally {
    e.close();
  }
});
