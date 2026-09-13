import assert from 'node:assert/strict';
import test from 'node:test';
import { createContext, runInContext } from 'node:vm';
import { buildHost, hostBundles } from '../../../../tool/src/host_bundle.mjs';

const baseCode = await buildHost(hostBundles.find((bundle) => bundle.base));
const storageCode = await buildHost(
  hostBundles.find((bundle) => bundle.packageName === 'flax_local_storage'),
);
function setup(quota = 10000) {
  const data = new Map(),
    calls = [],
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
    __flaxLocalStorageCall(op, key, value) {
      calls.push(op);
      if (op === 'length') return data.size;
      if (op === 'get') return data.get(key) ?? null;
      if (op === 'key') return [...data.keys()][key] ?? null;
      if (op === 'keys') {
        key.push(...data.keys());
        return;
      }
      if (op === 'set') {
        if (2 * (key.length + value.length) > quota) return false;
        data.set(key, value);
      } else if (op === 'remove') data.delete(key);
      else if (op === 'clear') data.clear();
      return true;
    },
  });
  const js = (code) => runInContext(code, context);
  const base = js(baseCode);
  assert.equal(js('typeof localStorage'), 'undefined');
  const host = js(storageCode);
  return { js, host, base, data, calls, errors };
}

test('Storage methods, conversion, unicode and receiver checks', () => {
  const { js } = setup();
  assert.equal(
    js(`
    localStorage.setItem('empty','');
    localStorage.setItem('unicode','汉😀\u0000\ud800');
    localStorage.setItem('null',null);
    localStorage.setItem('missing-value',undefined);
    JSON.stringify([localStorage.length,localStorage.getItem('empty'),localStorage.getItem('absent'),localStorage.getItem('unicode'),localStorage.getItem('null'),localStorage.getItem('missing-value'),localStorage.key(-1)])
  `),
    JSON.stringify([4, '', null, '汉😀\u0000\ud800', 'null', 'undefined', null]),
  );
  for (const code of [
    'new Storage()',
    'Storage.prototype.getItem.call({}, "x")',
    'localStorage.getItem()',
    'localStorage.setItem("x")',
    'localStorage.removeItem()',
    'localStorage.key()',
    'localStorage.key(1n)',
    'localStorage.setItem(Symbol(),"x")',
    'localStorage.setItem("x",Symbol())',
  ])
    assert.throws(() => js(code), { name: 'TypeError' });
  assert.equal(js('Object.prototype.toString.call(localStorage)'), '[object Storage]');
});

test('named properties preserve methods, symbol expandos and enumeration', () => {
  const { js, data, calls } = setup();
  js(
    `localStorage.foo=123;localStorage.setItem('getItem','stored');localStorage.length='stored';`,
  );
  assert.equal(js('localStorage.foo'), '123');
  assert.equal(js('typeof localStorage.getItem'), 'function');
  assert.equal(js('localStorage.length'), 3);
  assert.equal(js('JSON.stringify(Object.keys(localStorage))'), '["foo"]');
  assert.equal(
    js(
      `'foo' in localStorage && 'getItem' in localStorage && !('absent' in localStorage)`,
    ),
    true,
  );
  js(`delete localStorage.foo;globalThis.symbol=Symbol();localStorage[symbol]=42;`);
  assert.equal(js('localStorage.foo'), undefined);
  assert.equal(js('localStorage[symbol]'), 42);
  assert.equal(data.size, 2);
  js(`Object.defineProperty(localStorage,'defined',{value:'yes'});`);
  assert.equal(data.get('defined'), 'yes');
  assert.equal(
    js(`Reflect.defineProperty(localStorage,'bad',{get(){return 1;}})`),
    false,
  );
  assert.equal(
    js(`Reflect.defineProperty(localStorage,'bad',{value:'x',configurable:false})`),
    false,
  );
  assert.equal(data.has('bad'), false);
  js(`localStorage.setItem('descriptor','original');`);
  const callsBeforeInvalidDescriptors = calls.length;
  assert.equal(js(`Reflect.defineProperty(localStorage,'descriptor',{})`), false);
  assert.equal(
    js(
      `Reflect.defineProperty(localStorage,'descriptor',{enumerable:true,configurable:true})`,
    ),
    false,
  );
  assert.throws(() => js(`Object.defineProperty(localStorage,'descriptor',{})`), {
    name: 'TypeError',
  });
  assert.equal(data.get('descriptor'), 'original');
  assert.equal(calls.length, callsBeforeInvalidDescriptors);
  assert.equal(
    js(`Reflect.defineProperty(localStorage,'explicit',{value:undefined})`),
    true,
  );
  assert.equal(
    js(`Reflect.defineProperty(localStorage,'writable',{writable:true})`),
    true,
  );
  assert.equal(data.get('explicit'), 'undefined');
  assert.equal(data.get('writable'), 'undefined');
  assert.throws(() => js('Object.freeze(localStorage)'), { name: 'TypeError' });
});

test('quota errors precede replacement and methods return undefined', () => {
  const { js } = setup(12);
  assert.equal(js(`localStorage.setItem('x','a')`), undefined);
  assert.throws(() => js(`localStorage.setItem('x','123456')`), {
    name: 'QuotaExceededError',
  });
  assert.equal(js(`localStorage.getItem('x')`), 'a');
  assert.equal(js(`localStorage.removeItem('x')`), undefined);
  assert.equal(js(`localStorage.clear()`), undefined);
});

test('global events share EventTarget behavior and storageArea identity', () => {
  const { js, host, base, errors } = setup();
  js(`globalThis.events=[];globalThis.controller=new AbortController();
    addEventListener('storage',function(e){events.push([this===globalThis,e.target===globalThis,e.currentTarget===globalThis,e.storageArea===localStorage,e.key,e.oldValue,e.newValue,e.url]);},{once:true});
    onstorage=e=>events.push(e.newValue);
    addEventListener('storage',{handleEvent(e){events.push('object');}},{signal:controller.signal});
  `);
  host.event('key', null, 'first');
  js('controller.abort();');
  host.event('key', 'first', 'second');
  assert.equal(
    js('JSON.stringify(events)'),
    JSON.stringify([
      [true, true, true, true, 'key', null, 'first', ''],
      'first',
      'object',
      'second',
    ]),
  );
  js(`onstorage=null;addEventListener('storage',()=>{throw Error('listener');});`);
  host.event(null, null, null);
  assert.equal(errors.length, 1);
  base.close();
  host.event(null, null, null);
  assert.equal(errors.length, 1);
});

test('StorageEvent validates its area and global dispatch cancellation', () => {
  const { js } = setup();
  assert.throws(() => js(`new StorageEvent('storage',{storageArea:{}})`), {
    name: 'TypeError',
  });
  assert.equal(js(`new StorageEvent('storage').storageArea`), null);
  assert.equal(
    js(
      `addEventListener('custom',e=>e.preventDefault());dispatchEvent(new Event('custom',{cancelable:true}))`,
    ),
    false,
  );
});
