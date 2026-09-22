import { signal } from '@flax/core';
import { Text, registerPage } from '@flax/flutter/widgets';
import {
  AsyncCallbacks,
  AsyncContract,
  Mode,
  Token,
  UnsupportedFunctionResults,
} from '../../../.dart_tool/flax/ui/interop_bindings.js';
import { AsyncWidgetStore } from '../../../.dart_tool/flax/ui/repeated_bindings.js';

const label = signal('initial');
const hooks = {
  mode: 'resolved',
  calls: 0,
  label,
};

function result(value: number): Promise<number> {
  hooks.calls++;
  switch (hooks.mode) {
    case 'resolved':
      return Promise.resolve(value + 1);
    case 'delayed':
      return new Promise((resolve) => setTimeout(() => resolve(value + 2), 20));
    case 'staggered':
      return new Promise((resolve) =>
        setTimeout(() => resolve(value), (4 - value) * 10),
      );
    case 'rejected':
      return Promise.reject(new Error('async rejected'));
    case 'primitive-rejection':
      return Promise.reject('plain rejection');
    case 'symbol-rejection':
      return Promise.reject({
        [Symbol.toPrimitive]() {
          throw new Error('coercion failed');
        },
      }) as never;
    case 'accessor-rejection':
      return Promise.reject({
        get message() {
          throw new Error('message failed');
        },
        get stack() {
          throw new Error('stack failed');
        },
      }) as never;
    case 'proxy-rejection':
      return Promise.reject(
        new Proxy(
          {},
          {
            get() {
              throw new Error('proxy access failed');
            },
          },
        ),
      ) as never;
    case 'scalar':
      return value as never;
    case 'wrong-value':
      return Promise.resolve('wrong' as never);
    case 'getter-error':
      return {
        get then(): never {
          throw new Error('then getter failed');
        },
      } as never;
    case 'call-error':
      return {
        then(): never {
          throw new Error('then call failed');
        },
      } as never;
    case 'twice':
      return {
        then(resolve: (next: number) => void, reject: (error: Error) => void) {
          resolve(value + 3);
          reject(new Error('late'));
          resolve(value + 4);
        },
      } as Promise<number>;
    default:
      return Promise.resolve(value);
  }
}

function nestedResult(): Promise<Promise<number>> {
  hooks.calls++;
  switch (hooks.mode) {
    case 'nested-delayed':
      return new Promise<number>((resolve) =>
        setTimeout(() => resolve(23), 20),
      ) as unknown as Promise<Promise<number>>;
    case 'nested-rejected':
      return Promise.reject(new Error('nested async rejected'));
    default:
      // Native promises assimilate the inner promise. The declared nested type is
      // reconstructed by the Dart callback adapter.
      return Promise.resolve(Promise.resolve(21)) as unknown as Promise<
        Promise<number>
      >;
  }
}

const callbacks = AsyncCallbacks(result, {
  optional: () => (hooks.mode === 'null-future' ? null : Promise.resolve(5)),
  nestedTransform: nestedResult,
});
callbacks.callbacks.add(async (value) => value * 2);
callbacks.mapping.set('triple', async (value) => value * 3);
const contract = AsyncContract.implement([], {
  read: () => result(10),
});
const widgets = AsyncWidgetStore(async () => Text(label.bind));
const token = Token(8);
const nativeAsync = UnsupportedFunctionResults().asynchronous;
Object.assign(hooks, {
  roundTrips: async () => {
    const echoed = callbacks.echo(async (value) => value + 4);
    const returned = await echoed(2);
    const sameToken =
      (await callbacks.runToken(async (value) => value, token)) === token;
    const values = await callbacks.runList(async (value) => value, [3, 4]);
    const data = await callbacks.runData(async (value) => value, { value: 9 });
    await callbacks.runVoid(async () => {});
    const nullable = await callbacks.runNullable(async () => null);
    const mode = await callbacks.runMode(async (value) => value, Mode.first);
    const laterCallback = await callbacks.runCallback(async () => () => 17);
    const laterAsyncCallback = await callbacks.runAsyncCallback(
      async () => async () => 18,
    );
    const nativeAsyncValue = await nativeAsync();
    Object.assign(hooks, {
      returned,
      sameToken,
      listValue: values.get(1),
      dataValue: (data as { value: number }).value,
      nullable,
      sameMode: mode === Mode.first,
      callbackValue: laterCallback(),
      asyncCallbackValue: await laterAsyncCallback(),
      nativeAsyncValue,
      roundTripsDone: true,
    });
  },
  nestedRoundTrips: async () => {
    const nestedValue = await callbacks.nestedValue(31);
    const nestedFutureOrValue = await callbacks.nestedFutureOrValue(32);
    const futureOrNestedValue = await callbacks.futureOrNestedValue(33);
    const nestedCallback = await callbacks.runNested(
      () => Promise.resolve(Promise.resolve(41)) as unknown as Promise<Promise<number>>,
    );
    const nestedFutureOrCallback = await callbacks.runNestedFutureOr(async () => 42);
    const futureOrUsesFutureBranch = callbacks.futureOrNestedUsesFutureBranch(
      () => Promise.resolve(Promise.resolve(43)) as unknown as Promise<Promise<number>>,
    );
    const map = await callbacks.runNestedMap(async () => ({
      direct: 51,
      async: Promise.resolve(52),
    }));
    const record = await callbacks.runNestedRecord(async () => ({
      $1: Promise.resolve(61),
      value: Promise.resolve('record'),
    }));
    const nullableDirect = await callbacks.runNullableNested(() => null);
    const nullableAsync = await callbacks.runNullableNested(() =>
      Promise.resolve(null),
    );
    const alias = await callbacks.runNestedAlias(async (value) => value + 1, 70);
    Object.assign(hooks, {
      nestedValue,
      nestedFutureOrValue,
      futureOrNestedValue,
      nestedCallback,
      nestedFutureOrCallback,
      futureOrUsesFutureBranch,
      nestedMapDirect: map.get('direct'),
      nestedMapAsync: map.get('async'),
      nestedRecordFirst: record.$1,
      nestedRecordValue: record.value,
      nullableDirect,
      nullableAsync,
      nestedAlias: alias,
      nestedRoundTripsDone: true,
    });
  },
  nestedListTiming: async () => {
    const values = await callbacks.runNestedList(() =>
      Promise.resolve([
        Promise.resolve(1),
        new Promise<number>((resolve) => setTimeout(() => resolve(2), 20)),
      ]),
    );
    Object.assign(hooks, {
      nestedListFirst: values.get(0),
      nestedListSecond: values.get(1),
      nestedListDone: true,
    });
  },
  nestedFailures: async () => {
    let outerRejected = false;
    let innerRejected = false;
    try {
      await callbacks.runNested(() =>
        Promise.reject(new Error('nested outer rejected')),
      );
    } catch {
      outerRejected = true;
    }
    try {
      await callbacks.runNestedList(() =>
        Promise.resolve([
          Promise.resolve(1),
          Promise.reject(new Error('nested inner rejected')),
        ]),
      );
    } catch {
      innerRejected = true;
    }
    Object.assign(hooks, {
      nestedOuterRejected: outerRejected,
      nestedInnerRejected: innerRejected,
      nestedFailuresDone: true,
    });
  },
});

Object.assign(globalThis, {
  asyncHooks: hooks,
  asyncCallbacks: callbacks,
  asyncContract: contract,
  asyncWidgets: widgets,
  asyncToken: token,
});

registerPage('async-callbacks', () => Text('Async callback fixture'));
