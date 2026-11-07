import assert from 'node:assert/strict';
import test from 'node:test';
import { createContext, runInContext } from 'node:vm';
import {
  gpuDiagnosticsHost,
  installGPUDiagnostics,
} from '../../dist/host/gpu-diagnostics.js';
import { installWorkers } from '../../dist/host/workers.js';
import { buildHost, hostBundles } from '../../../../../tool/src/host_bundle.mjs';

const fields = {
  message: 'unexpected token',
  type: 'error',
  lineNum: 3,
  linePos: 4,
  offset: 12,
  length: 2,
};

test('GPU diagnostic objects have private brands, readonly fields and frozen message arrays', () => {
  const global = {};
  const host = installGPUDiagnostics(global);
  assert.equal(gpuDiagnosticsHost(global), host);
  const input = { ...fields };
  const message = host.message(input);
  const messages = [message, message];
  const info = host.info(messages);
  input.message = 'changed';
  assert.equal(message.message, fields.message);
  assert.ok(message instanceof global.GPUCompilationMessage);
  assert.ok(info instanceof global.GPUCompilationInfo);
  assert.equal(
    Object.prototype.toString.call(message),
    '[object GPUCompilationMessage]',
  );
  assert.equal(Object.prototype.toString.call(info), '[object GPUCompilationInfo]');
  assert.equal(info.messages, messages);
  assert.equal(info.messages[0], info.messages[1]);
  assert.ok(Object.isFrozen(info.messages));
  assert.ok(Object.isFrozen(host.info([]).messages));
  assert.throws(() => {
    message.message = 'changed';
  }, TypeError);
  assert.throws(() => {
    info.messages = [];
  }, TypeError);
  assert.throws(() => messages.push(message), TypeError);
  for (const Class of [global.GPUCompilationInfo, global.GPUCompilationMessage]) {
    assert.equal(Class.length, 0);
    assert.throws(() => new Class(), TypeError);
    assert.throws(() => new Class({}, []), TypeError);
    const key = Class === global.GPUCompilationInfo ? 'messages' : 'message';
    const descriptor = Object.getOwnPropertyDescriptor(Class.prototype, key);
    assert.equal(descriptor.enumerable, true);
    assert.equal(descriptor.configurable, true);
    const get = descriptor.get;
    assert.throws(() => get.call(Object.create(Class.prototype)), TypeError);
  }
  assert.equal(
    host.serialize(Object.create(global.GPUCompilationMessage.prototype)),
    undefined,
  );
  assert.throws(() => host.info([{}]), TypeError);
  assert.throws(() => gpuDiagnosticsHost({}), TypeError);
});

test('the GPU diagnostics codec reads backing slots and retains decoded graph identities', () => {
  const global = {};
  const host = installGPUDiagnostics(global);
  const message = host.message(fields);
  const messages = [message];
  const info = host.info(messages);
  const shadow = () => {
    throw new Error('public getters must not be read');
  };
  for (const key of Object.keys(fields))
    Object.defineProperty(message, key, { get: shadow });
  Object.defineProperty(info, 'messages', { get: shadow });
  const encodedMessage = host.serialize(message);
  assert.deepEqual(encodedMessage, ['GPUCompilationMessage', fields]);
  const encodedInfo = host.serialize(info);
  assert.equal(encodedInfo[1], messages);
  assert.equal(encodedInfo[1][0], message);
  const otherGlobal = {};
  const otherHost = installGPUDiagnostics(otherGlobal);
  const decodedMessage = otherHost.deserialize(encodedMessage);
  const decodedArray = [decodedMessage, decodedMessage];
  const decodedInfo = otherHost.deserialize(['GPUCompilationInfo', decodedArray]);
  assert.equal(decodedInfo.messages, decodedArray);
  assert.equal(decodedInfo.messages[0], decodedMessage);
  assert.equal(decodedInfo.messages[0], decodedInfo.messages[1]);
  assert.ok(Object.isFrozen(decodedArray));
  assert.ok(decodedMessage instanceof otherGlobal.GPUCompilationMessage);
  assert.ok(!(decodedMessage instanceof global.GPUCompilationMessage));
  assert.equal(otherHost.serialize(message), undefined);
});

test('structuredClone wires GPU diagnostics into the existing Core native codec hooks', () => {
  const global = {};
  const host = installGPUDiagnostics(global);
  const message = host.message(fields);
  const info = host.info([message]);
  const transfer = new ArrayBuffer(4);
  global.__flaxNativeWorker = {
    clone(value, buffers, serialize, deserialize) {
      assert.equal(value, info);
      assert.deepEqual(buffers, [transfer]);
      assert.deepEqual(serialize(message), ['GPUCompilationMessage', fields]);
      assert.equal(serialize(info)[1][0], message);
      const decoded = deserialize(['GPUCompilationMessage', fields]);
      const result = deserialize(['GPUCompilationInfo', [decoded]]);
      assert.ok(result instanceof global.GPUCompilationInfo);
      assert.equal(result.messages[0], decoded);
      assert.throws(() => deserialize(['Unsupported']), { name: 'DataCloneError' });
      return result;
    },
  };
  const workers = installWorkers(global, () => {});
  assert.equal(
    global.structuredClone(info, { transfer: [transfer] }).messages[0].message,
    fields.message,
  );
  workers.close();
});

const code = await buildHost(
  hostBundles.find((bundle) => bundle.base),
  {
    prepareOnly: true,
  },
);
test('base bootstrap installs GPU diagnostics in main and Worker realms without graphics', () => {
  for (const worker of [undefined, { id: 1, type: 'classic', name: 'diagnostics' }]) {
    const context = createContext({});
    const install = runInContext(code, context);
    const host = install(
      context,
      (operation, ...args) => {
        if (operation === 'fetch' && args[0] === 'baseUrl') return 'data:,diagnostics';
        if (operation === 'timeOrigin' || operation === 'now') return 0;
        throw new Error(operation);
      },
      worker,
    );
    assert.deepEqual(
      Array.from(
        runInContext(
          `[
        GPUCompilationInfo.name,
        GPUCompilationMessage.name,
      typeof navigator.gpu,
      typeof navigator.gpu?.requestAdapter,
    ]`,
          context,
        ),
      ),
      ['GPUCompilationInfo', 'GPUCompilationMessage', 'undefined', 'undefined'],
    );
    if (worker)
      assert.equal(runInContext('typeof OffscreenCanvas', context), 'undefined');
    host.close();
  }
});
