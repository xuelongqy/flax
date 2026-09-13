import assert from 'node:assert/strict';
import test from 'node:test';
import { createContext, runInContext } from 'node:vm';
import { buildHost, hostBundles } from '../../../../tool/src/host_bundle.mjs';

const baseCode = await buildHost(hostBundles.find((bundle) => bundle.base));
const socketCode = await buildHost(
  hostBundles.find((bundle) => bundle.packageName === 'flax_websocket'),
);
function setup(baseUrl) {
  const calls = [],
    errors = [];
  const context = createContext({
    __flaxBaseCall(op, ...args) {
      if (op === 'timeOrigin' || op === 'now') return 0;
      if (op === 'error') {
        errors.push(args);
        return;
      }
      if (op === 'checkpoint') return;
      throw Error(op);
    },
    __flaxWebSocketCall(op, ...args) {
      if (op === 'baseUrl') return baseUrl;
      calls.push([op, ...args]);
    },
  });
  runInContext(baseCode, context);
  const identities = runInContext('[Blob,EventTarget,MessageEvent]', context);
  const host = runInContext(socketCode, context);
  assert.deepEqual(
    runInContext('[Blob,EventTarget,MessageEvent]', context),
    identities,
  );
  return { context, host, calls, errors, js: (s) => runInContext(s, context) };
}
const turn = async () => {
  for (let i = 0; i < 10; i++) await Promise.resolve();
};

test('close immediately notifies Dart while waiting for a send acknowledgement', async () => {
  const { js, calls, host } = setup();
  js(`globalThis.socket = new WebSocket('ws://example.test/');`);
  host.event(1, 'open', '');
  js(
    `socket.send('blocked'); socket.send('queued'); socket.close(1000); socket.close(1000);`,
  );
  assert.deepEqual(
    calls.map((c) => c[0]),
    ['open', 'send', 'beginClose'],
  );
  host.event(1, 'close', JSON.stringify({ code: 1006, wasClean: false, error: true }));
  host.event(1, 'written', null);
  await turn();
  assert.equal(js('socket.readyState'), 3);
  assert.deepEqual(
    calls.map((c) => c[0]),
    ['open', 'send', 'beginClose'],
  );
});

test('constructor validation, overloads, headers and deferred bufferedAmount', () => {
  const { js, calls, host } = setup('https://example.test/base/');
  js(
    `globalThis.socket = new WebSocket('../echo', ['chat'], { headers: { Authorization: 'Bearer x', Cookie: ['a=1','b=2'], Origin: 'app://flax' } });`,
  );
  const config = JSON.parse(calls[0][2]);
  assert.equal(config.url, 'wss://example.test/echo');
  assert.equal(config.handshakeTimeout, 30000);
  assert.equal(config.maxPayload, 16 * 1024 * 1024);
  assert.equal(js("'bufferedAmount' in socket"), false);
  assert.equal(js('socket.binaryType'), 'blob');
  assert.equal(js('socket.CONNECTING === WebSocket.CONNECTING'), true);
  for (const input of [
    'new WebSocket()',
    "new WebSocket('file:///tmp')",
    "new WebSocket('ws://x/#')",
    "new WebSocket('ws://x/', ['a','a'])",
    "new WebSocket('ws://x/', ['bad protocol'])",
    "new WebSocket('ws://x/', {headers:{Connection:'close'}})",
    "new WebSocket('ws://x/', {headers:{x:'a\\rb'}})",
    "new WebSocket('ws://x/', {compression:true})",
    "new WebSocket('ws://x/', {pingInterval:0})",
    "new WebSocket('ws://x/', {maxPayload:NaN})",
    "new WebSocket('ws://x/', {signal:{}})",
  ])
    assert.throws(() => js(input), input);
  js(`globalThis.other = new WebSocket('http://example.test/', {handshakeTimeout:0});`);
  assert.equal(js('other.url'), 'ws://example.test/');
  assert.throws(() => js('socket.send("early")'), /connecting/);
  host.close();
  assert.equal(js('socket.readyState'), 3);
  assert.throws(() => js("new WebSocket('ws://x/')"), /Closed/);
});

test('ordered Blob, text and copied view sends; close waits for accepted sends', async () => {
  const { js, calls, host } = setup();
  js(`globalThis.socket=new WebSocket('ws://example.test/');`);
  host.event(1, 'open', '');
  js(
    `globalThis.input=new Uint8Array([0,65,66,0]);socket.send(new Blob(['first']));socket.send('second');socket.send(input.subarray(1,3));input.fill(0);socket.close(1000,'done');`,
  );
  assert.deepEqual(calls.at(-1), ['beginClose', 1]);
  await turn();
  let sends = calls.filter((c) => c[0] === 'send');
  assert.equal(sends.length, 1);
  assert.equal(new TextDecoder().decode(sends[0][2]), 'first');
  assert.equal(
    calls.some((c) => c[0] === 'close'),
    false,
  );
  host.event(1, 'written', null);
  await turn();
  sends = calls.filter((c) => c[0] === 'send');
  assert.equal(sends[1][2], 'second');
  host.event(1, 'written', null);
  await turn();
  sends = calls.filter((c) => c[0] === 'send');
  assert.deepEqual([...sends[2][2]], [65, 66]);
  host.event(1, 'written', null);
  await turn();
  assert.deepEqual(calls.at(-1), ['close', 1, 1000, 'done']);
  assert.equal(js('input.byteLength'), 4);
  host.event(
    1,
    'close',
    JSON.stringify({ code: 1000, reason: 'done', wasClean: true, error: false }),
  );
  assert.equal(js('socket.readyState'), 3);
  assert.equal(calls.filter((c) => c[0] === 'beginClose').length, 1);
});

test('close covers Blob preparation; late reads, writes and aborts cannot send again', async () => {
  const { js, calls, host } = setup();
  js(`
    globalThis.controller = new AbortController();
    globalThis.socket = new WebSocket('ws://example.test/', {signal:controller.signal});
    globalThis.events = [];
    socket.onerror = () => events.push('error');
    socket.onclose = e => events.push(e.code, e.wasClean);
    globalThis.blob = new Blob(['pending']);
    blob.arrayBuffer = () => new Promise(resolve => globalThis.finishRead = resolve);
  `);
  host.event(1, 'open', '');
  js(`socket.send(blob); socket.send('later'); socket.close(1000); socket.close();`);
  assert.deepEqual(
    calls.map((c) => c[0]),
    ['open', 'beginClose'],
  );
  host.event(1, 'close', JSON.stringify({ code: 1006, wasClean: false, error: true }));
  js(`finishRead(new ArrayBuffer(7)); controller.abort();`);
  host.event(1, 'written', null);
  await turn();
  assert.deepEqual(
    calls.map((c) => c[0]),
    ['open', 'beginClose'],
  );
  assert.equal(js('JSON.stringify(events)'), '["error",1006,false]');
});

test('connecting close and abort or session close interrupt without a grace period', async () => {
  const { js, calls, host } = setup();
  js(`globalThis.socket = new WebSocket('ws://example.test/'); socket.close();`);
  assert.deepEqual(
    calls.map((c) => c[0]),
    ['open', 'abort'],
  );
  host.event(1, 'open', '');
  assert.equal(js('socket.readyState'), 2);
  host.event(1, 'close', JSON.stringify({ code: 1006, wasClean: false, error: true }));
  js(`globalThis.controller = new AbortController();
    globalThis.next = new WebSocket('ws://example.test/', {signal:controller.signal});`);
  host.event(2, 'open', '');
  js(`next.send('pending'); next.close(); controller.abort();`);
  assert.deepEqual(
    calls.slice(-3).map((c) => c[0]),
    ['send', 'beginClose', 'abort'],
  );
  host.close();
  await turn();
  const count = calls.length;
  host.event(2, 'written', null);
  js('controller.abort();');
  await turn();
  assert.equal(calls.length, count);
  assert.equal(js('next.readyState'), 3);
});

test('typed listeners reuse EventTarget registration, options and receiver', () => {
  const { js, host } = setup();
  js(`globalThis.socket = new WebSocket('ws://example.test/'); globalThis.events = [];
    globalThis.controller = new AbortController();
    globalThis.listener = {handleEvent(e){events.push(e.data);}};
    socket.addEventListener('message', listener, {capture:true});
    socket.addEventListener('message', function(e){events.push(this === socket, e.data);}, {once:true});
    socket.addEventListener('message', e => events.push('aborted'), {signal:controller.signal});
    controller.abort();
  `);
  assert.equal(js(`Object.hasOwn(WebSocket.prototype, 'addEventListener')`), false);
  host.event(1, 'open', '');
  host.event(1, 'message', 'first');
  js(`socket.removeEventListener('message', listener, {capture:true});`);
  host.event(1, 'message', 'second');
  assert.equal(js('JSON.stringify(events)'), '["first",true,"first"]');
  host.close();
});

test('event state, handler replacement order, binaryType and exception reporting', () => {
  const { js, host, errors } = setup();
  js(`globalThis.events=[];globalThis.socket=new WebSocket('ws://example.test/path');
    socket.onopen=()=>events.push('old');socket.addEventListener('open',()=>events.push('listener'));
    socket.onopen=function(e){events.push(this.readyState,e.target===this);};
    socket.onmessage=e=>events.push(e.data instanceof Blob,e.origin);
    socket.onerror=()=>{events.push(socket.readyState);throw Error('listener error');};
    socket.onclose=e=>events.push(e.code,e.wasClean,e.reason);`);
  host.event(1, 'open', '');
  assert.equal(js("events.join(',')"), '1,true,listener');
  host.event(1, 'message', js('new Uint8Array([1,2]).buffer'));
  assert.equal(js("events.slice(-2).join(',')"), 'true,http://example.test');
  js(
    `socket.binaryType='arraybuffer';socket.onmessage=e=>events.push(e.data.byteLength);`,
  );
  host.event(1, 'message', js('new Uint8Array([3,4]).buffer'));
  assert.equal(js('events.at(-1)'), 2);
  host.event(
    1,
    'close',
    JSON.stringify({ code: 1006, reason: '', wasClean: false, error: true }),
  );
  assert.equal(js("events.slice(-4).join(',')"), '3,1006,false,');
  assert.equal(errors.length, 1);
  host.event(1, 'message', 'late');
  assert.equal(js('events.at(-1)'), '');
});

test('abort listeners detach on completion, close validation and queue bounds', async () => {
  const { js, calls, host } = setup();
  js(
    `globalThis.controller = new AbortController();globalThis.socket=new WebSocket('ws://example.test/',{signal:controller.signal});`,
  );
  host.event(1, 'open', '');
  for (const action of [
    'socket.close(1001)',
    'socket.close(5000)',
    `socket.close(1000,'中'.repeat(42))`,
  ])
    assert.throws(() => js(action));
  js("socket.send('');");
  await turn();
  assert.equal(calls.at(-1)[2], '');
  host.event(1, 'written', null);
  await turn();
  host.event(1, 'close', JSON.stringify({ code: 1000, wasClean: true, error: false }));
  const before = calls.length;
  js('controller.abort();');
  assert.equal(calls.length, before);
  js(`globalThis.second=new WebSocket('ws://example.test/');`);
  host.event(2, 'open', '');
  js(`for(let i=0;i<1025;i++)second.send('x');`);
  assert.equal(js('second.readyState'), 2);
  assert.equal(calls.at(-1)[0], 'abort');
  host.close();
  await turn();
});

test('pinned protocol WPT subset also passes Node built-in WebSocket', async () => {
  const { wptSource } = await import('./ui.mjs');
  const source = await wptSource();
  const flax = setup();
  flax.js(source);
  const count = flax.js('wptResults.length');
  assert.ok(count >= 4);
  assert.equal(flax.calls.length, 0, 'Invalid protocols fail before transport');
  const node = createContext({
    WebSocket: globalThis.WebSocket,
    URLSearchParams: globalThis.URLSearchParams,
    DOMException: globalThis.DOMException,
  });
  runInContext(source, node);
  assert.equal(runInContext('wptResults.length', node), count);
  flax.host.close();
});
