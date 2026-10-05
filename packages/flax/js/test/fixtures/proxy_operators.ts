import { Text, registerPage } from '@flax/flutter/widgets';
import * as plugin from '../../../.dart_tool/flax/ui/proxy_operators_bindings.js';

let failed = false;
let badResult = false;
class CustomBox extends plugin.NumberBox {
  override operatorAdd(other: number): number {
    if (failed) throw Error('operator failed');
    if (badResult) return 'bad' as unknown as number;
    return super.operatorAdd(other) + 10;
  }
  override operatorEquals(other: unknown): boolean {
    return super.operatorEquals(other);
  }
  override get hashCode(): number {
    return super.hashCode;
  }
}

class CustomData extends plugin.DataOperator {
  override operatorAdd(other: unknown): unknown {
    return super.operatorAdd(other);
  }
}
class CustomCallback extends plugin.CallbackOperator {
  override operatorAdd(callback: (value: number) => void): number {
    callback(3);
    return super.operatorAdd(callback);
  }
}

class CustomMixed extends plugin.MixedOperator {
  override operatorAdd(other: number): number {
    return super.operatorAdd(other) + 10;
  }
}

const hooks = {
  data: () => new CustomData(),
  callback: () => new CustomCallback(),
  mixed: () => new CustomMixed(),
  create: (value: number) => new CustomBox(value),
  abstract: () =>
    plugin.AbstractAdder.implement([], {
      operatorAdd: (other: number) => other + 20,
    }),
  fail: (value: boolean) => {
    failed = value;
  },
  badResult: (value: boolean) => {
    badResult = value;
  },
};
(globalThis as typeof globalThis & { operatorHooks: typeof hooks }).operatorHooks =
  hooks;
registerPage('proxy-operators', () => Text('proxy operators'));
