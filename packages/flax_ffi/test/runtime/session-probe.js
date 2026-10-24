import ffi from '@flax/ffi';
import { assets } from '@flax/ffi-native-fixture';
import { mountRoot } from 'flax:probe-bindings';
import { Counter } from './counter.js';
import { asyncProbe } from './async-probe.js';
globalThis.asyncFfiResult = null;
asyncProbe().then(
  (checks) => {
    globalThis.asyncFfiResult = { checks, metrics: globalThis.asyncFfiMetrics };
  },
  (error) => {
    globalThis.asyncFfiResult = { error: String(error.stack ?? error) };
  },
);

const verify = (value, message) => {
  if (!value) throw new Error(message);
};
for (const id of assets) {
  const lib = ffi.DynamicLibrary.codeAsset(id);
  verify(
    lib.getFunction(
      id.endsWith('/dependent') ? 'ffi_dependent_add' : 'ffi_packaged_add',
      {
        arguments: ['int32', 'int32'],
        return: 'int32',
      },
    )(20, 22) === 42,
    `packaged ${id}`,
  );
  lib.close();
}
const lib = ffi.DynamicLibrary.process();
globalThis.sessionPrepareStopImage = () => {
  const image = new ffi.DynamicLibrary(globalThis.fixturePath);
  const stop = image.getFunction('flax_dynamic_worker_stop', {});
  globalThis.sessionRetainedStop = stop;
  const callback = lib.registerCallback({}, () => {}, { stop });
  image.close();
  globalThis.sessionReleaseStopImage = () => lib.unregisterCallback(callback);
};
const notify = lib.getFunction('flax_static_notify_on_thread', {
  arguments: ['pointer'],
});
let notifications = 0;
const callback = lib.registerCallback(
  { arguments: ['pointer', 'uint32'] },
  (address, length) => {
    verify(
      ffi.toUint8Array(address, length).join() === '11,22,33,44',
      'copied payload at real session checkpoint',
    );
    notifications++;
  },
  { mode: 'listener', copies: [{ argument: 0, lengthArgument: 1 }] },
);
notify(callback);
verify(notifications === 0, 'listener must be deferred');
const stop = lib.getFunction('flax_static_worker_stop', {});
const worker = lib.registerCallback({}, () => {}, { mode: 'listener', stop });
verify(
  lib.getFunction('flax_static_worker_start', {
    arguments: ['pointer'],
    return: 'uint32',
  })(worker) === 1,
  'start owned producer',
);
const free = lib.getFunction('flax_static_finalizer_free', { arguments: ['pointer'] });
const finalizer = new ffi.NativeFinalizer(free);
let cleanupWakeOwners = [];
let cleanupWakeCallback;
globalThis.sessionCleanupWakeCount = 0;
const cleanupWakeHandler = (address, length) => {
  verify(
    ffi.toUint8Array(address, length).join() === '11,22,33,44',
    'cleanup notification payload',
  );
  sessionCleanupWakeCount++;
};
globalThis.sessionPrepareCleanupWake = () => {
  cleanupWakeCallback = lib.registerCallback(
    { arguments: ['pointer', 'uint32'] },
    cleanupWakeHandler,
    { mode: 'listener', copies: [{ argument: 0, lengthArgument: 1 }] },
  );
  const notifyOnCleanup = new ffi.NativeFinalizer(notify);
  for (let i = 0; i < 129; i++) {
    const target = {};
    notifyOnCleanup.attach(target, cleanupWakeCallback);
    cleanupWakeOwners.push(target);
  }
  cleanupWakeOwners = [];
};
globalThis.sessionFinishCleanupWake = () => lib.unregisterCallback(cleanupWakeCallback);
globalThis.sessionOwner = {};
finalizer.attach(sessionOwner, ffi.malloc(16));
let bulkOwners = [];
const retainedBulkOwners = [];
const bulkDetach = {},
  bulkPointers = [];
globalThis.sessionPrepareBulk = () => {
  for (let i = 0; i < 1024; i++) {
    const target = {},
      pointer = ffi.malloc(8);
    finalizer.attach(target, pointer, i < 32 ? { detach: bulkDetach } : {});
    if (i < 32) bulkPointers.push(pointer);
    bulkOwners.push(target);
  }
  bulkOwners = [];
};
globalThis.sessionCancelBulk = () => {
  finalizer.detach(bulkDetach);
  for (const pointer of bulkPointers) ffi.free(pointer);
  bulkPointers.length = 0;
};
globalThis.sessionRetainBulk = () => {
  for (let i = 0; i < 1024; i++) {
    const target = {};
    finalizer.attach(target, ffi.malloc(8));
    retainedBulkOwners.push(target);
  }
};
globalThis.sessionCounter = new Counter(81);
let sessionGcCounter = new Counter(42);
globalThis.sessionDropCounter = () => {
  verify(sessionGcCounter.value === 42, 'class instance is usable before collection');
  sessionGcCounter = null;
};
const sibling = lib.registerCallback({}, () => {});
const queued = lib.registerCallback(
  { arguments: ['int32'], return: 'int32' },
  (value) => value + 1,
  { mode: 'threadsafe' },
);
const callCallback = lib.getFunction('flax_static_call_callback', {
  arguments: ['pointer', 'int32'],
  return: 'int32',
});
globalThis.sessionQueuedResult = null;
globalThis.sessionQueueCallback = () => {
  ffi.callAsync(callCallback, [queued, 41]).then(
    (value) => {
      globalThis.sessionQueuedResult = value;
    },
    (error) => {
      globalThis.sessionQueuedResult = String(error);
    },
  );
};
globalThis.sessionUnregisterSibling = () => lib.unregisterCallback(sibling);
globalThis.sessionQueueNotification = () => notify(callback);
globalThis.sessionUnregisterNotification = () => lib.unregisterCallback(callback);
globalThis.sessionStartListenerLifetime = () => {
  const other = ffi.DynamicLibrary.process();
  const signature = { arguments: ['pointer', 'uint32'] };
  const options = { mode: 'listener', copies: [{ argument: 0, lengthArgument: 1 }] };
  const stat = lib.getFunction('flax_ffi_dlopen_stat', {
    arguments: ['uint32'],
    return: 'uint64',
  });
  const unexpected = () => {
    throw new Error('cancelled listener was delivered');
  };
  const discarded = lib.registerCallback(signature, unexpected, options);
  const otherCallback = other.registerCallback(signature, unexpected, options);
  globalThis.sessionListenerDeliveries = 0;
  const active = lib.registerCallback(
    signature,
    (address, length) => {
      const view = ffi.toUint8Array(address, length, false);
      if (sessionListenerDeliveries === 0) {
        verify(stat(16) === 16n, 'active listener still owns its copied bytes');
        let rejected = false;
        try {
          lib.unregisterCallback(active);
        } catch (error) {
          rejected = error.code === 'ERR_INVALID_STATE';
        }
        verify(
          rejected,
          'active self-unregister is rejected before changing its queue',
        );
        lib.unregisterCallback(discarded);
        other.close();
        verify(stat(16) === 8n, 'cancellation releases only the other two messages');
      }
      verify(
        view.join() === '11,22,33,44',
        'active borrowed payload survives nested cleanup',
      );
      globalThis.sessionListenerDeliveries++;
    },
    options,
  );
  notify(active);
  notify(active);
  notify(discarded);
  notify(otherCallback);
  globalThis.sessionFinishListenerLifetime = () => {
    lib.unregisterCallback(active);
    other.close();
  };
};
globalThis.sessionQueueListenerErrors = () => {
  const callbacks = [];
  for (let id = 0; id < 3; ++id) {
    const pointer = lib.registerCallback(
      { arguments: ['pointer', 'uint32'] },
      (address, length) => {
        verify(
          ffi.toUint8Array(address, length, false).join() === '11,22,33,44',
          'throwing listener retains its copied payload',
        );
        throw new Error(`listener callback failure ${id}`);
      },
      { mode: 'listener', copies: [{ argument: 0, lengthArgument: 1 }] },
    );
    callbacks.push(pointer);
    notify(pointer);
  }
  globalThis.sessionFinishListenerErrors = () => {
    for (const pointer of callbacks) lib.unregisterCallback(pointer);
  };
};
globalThis.sessionStartManagedCompletion = (closeLibrary) => {
  const managed = ffi.DynamicLibrary.process();
  const stop = lib.getFunction('flax_static_late_stop_unpause', {
    arguments: ['pointer'],
  });
  const unpause = lib.getFunction('flax_ffi_dlopen_pause_delivery', {
    arguments: ['uint8'],
  });
  globalThis.sessionManagedCompletions = 0;
  const pointer = managed.registerCallback(
    { arguments: ['int32'], return: 'int32' },
    () => {
      globalThis.sessionManagedCompletions++;
      return 42;
    },
    { mode: 'threadsafe', stop, stopToken: unpause.pointer, exceptionalReturn: -17 },
  );
  verify(
    lib.getFunction('flax_static_late_start', {
      arguments: ['pointer', 'pointer'],
      return: 'uint32',
    })(pointer, 0n) === 1,
    'start managed completion race',
  );
  globalThis.sessionFinishManagedCompletion = () => {
    if (!closeLibrary) managed.unregisterCallback(pointer);
    managed.close();
  };
};
globalThis.sessionBeginCompletedCallbacks = () => {
  const resume = lib.getFunction('flax_ffi_dlopen_resume_delivery_wait', {
    return: 'uint8',
  });
  globalThis.sessionReleaseCompletedDuringOwnerCall = () =>
    verify(
      resume() === 1,
      'completed errors retain their delivery during an owner call',
    );
  const pointerCallback = lib.registerCallback(
    { return: 'pointer' },
    () => ffi.malloc(16),
    { mode: 'threadsafe' },
  );
  const errorCallback = lib.registerCallback(
    { arguments: ['int32'], return: 'int32' },
    () => {
      throw new Error('completed callback failure');
    },
    { mode: 'threadsafe' },
  );
  const foreignErrorCallback = lib.registerCallback(
    { arguments: ['int32'], return: 'int32' },
    (id) => {
      throw new Error(`completed producer callback failure ${id}`);
    },
    { mode: 'threadsafe', exceptionalReturn: -19 },
  );
  const callOnThread = lib.getFunction('flax_static_call_on_thread', {
    arguments: ['pointer', 'int32'],
    return: 'int32',
  });
  const consume = lib.getFunction('flax_static_consume_callback_pointer', {
    arguments: ['pointer'],
    return: 'uint32',
  });
  const observe = lib.getFunction('flax_static_callback_outcome_observed', {
    arguments: ['uint32'],
  });
  const abort = new AbortController();
  globalThis.sessionAbortCompletedCall = () => abort.abort();
  ffi.callAsync(consume, [pointerCallback]).then((result) => {
    verify(result === 1, 'completed callback pointer reaches the native consumer');
  });
  ffi.callAsync(consume, [pointerCallback], { signal: abort.signal }).catch((error) => {
    verify(error.name === 'AbortError', 'background abort preserves its reason');
    observe(1);
  });
  ffi.callAsync(callCallback, [errorCallback, 0]).catch((error) => {
    verify(
      error.message.includes('completed callback failure'),
      'callback error survives retirement',
    );
    observe(0);
  });
  for (let id = 0; id < 3; ++id) {
    ffi.callAsync(callOnThread, [foreignErrorCallback, id]).then((result) => {
      verify(result === -19, 'foreign callback failure returns its native fallback');
    });
  }
};
globalThis.sessionBeginCleanup = () => {
  const lateStop = lib.getFunction('flax_static_late_stop', {});
  const lateCallback = lib.registerCallback(
    { arguments: ['int32'], return: 'int32' },
    () => {
      throw new Error('Callback entered JS during Session retirement');
    },
    { mode: 'threadsafe', stop: lateStop, exceptionalReturn: -13 },
  );
  verify(
    lib.getFunction('flax_static_late_start', {
      arguments: ['pointer', 'pointer'],
      return: 'uint32',
    })(lateCallback, 0n) === 1,
    'start late callback for Session retirement',
  );
  const pointer = ffi.malloc(8);
  let chain = Promise.resolve(0);
  for (let i = 0; i < 4096; ++i) chain = chain.then((value) => value + 1);
  chain.finally(() => free(pointer));
  const pendingPointer = ffi.malloc(8);
  const background = lib.getFunction('flax_static_background', {
    arguments: ['pointer', 'uint32', 'uint32', 'int32'],
    return: 'int32',
  });
  ffi
    .callAsync(background, [pendingPointer, 8, 100, 0])
    .catch(() => {})
    .finally(() => free(pendingPointer));
  ffi
    .callAsync(lib.getFunction('flax_static_wait_until_stop', { return: 'uint32' }), [])
    .catch(() => {});
};
globalThis.sessionFfiResult = () =>
  JSON.stringify({
    notifications,
    assets: assets.length,
    counter: sessionCounter.value,
  });
mountRoot({
  kind: 'widget',
  type: 'flax.core/flutter#type:SizedBox',
  ctor: '',
  args: { width: 1, height: 1 },
});
