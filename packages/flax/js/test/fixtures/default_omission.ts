import { registerPage } from '@flax/flutter/widgets';
import * as omission from '../../../.dart_tool/flax/ui/default_omission_bindings.js';

class GoodProxy extends omission.OmissionProxy {
  override async work(options: Parameters<omission.OmissionProxy['work']>[0] = {}) {
    return super.work(options);
  }
}
class BadProxy extends omission.OmissionProxy {
  override async work() {
    return 99;
  }
}
const hooks = {
  completed: false,
  failure: '',
  missingSuper: '',
  rejected: 0,
  exercise() {
    const plain = omission.OmissionCalls();
    const omitted = omission.OmissionCalls({ numbers: undefined, callback: undefined });
    const nulled = omission.OmissionCalls({ numbers: null, callback: null });
    if (plain.total !== 19 || omitted.total !== 19 || nulled.total !== 9)
      throw Error('constructor defaults');
    for (let mask = 0; mask < 64; mask++) {
      const names = ['token', 'numbers', 'mapping', 'callback', 'labels', 'extra'];
      const weights = [2, 4, 4, 6, 2, 7];
      const options = Object.fromEntries(
        names.map((name, i) => [name, mask & (1 << i) ? null : undefined]),
      );
      const expected =
        19 - weights.reduce((sum, n, i) => sum + (mask & (1 << i) ? n : 0), 0);
      if (
        omission.OmissionCalls(options).total !== expected ||
        plain.compute(options) !== expected ||
        omission.OmissionCalls.measure(options) !== expected ||
        plain.returned(options) !== expected ||
        omission.omissionTotal(options) !== expected ||
        omission.OmissionChild(options).total !== expected ||
        omission.OmissionGeneric(3, options).total !== expected
      )
        throw Error(`mask ${mask}`);
    }
    if (plain.compute({ callback: (n) => n * 2 }) !== 22) throw Error('JS callback');
    if (
      !omission.OmissionFactory().defaulted ||
      !omission.OmissionFactory({ token: undefined }).defaulted ||
      omission.OmissionFactory({ token: null }).defaulted
    )
      throw Error('factory default');
    if (
      omission.OmissionPositional().total !== 17 ||
      omission.OmissionPositional(null).total !== 10 ||
      omission.OmissionPositional(null, null, 8).total !== 6
    )
      throw Error('positional suffix');
    for (const action of [
      () => omission.OmissionPositional(undefined, null),
      () => omission.OmissionCalls({ numbers: ['wrong'] as never }),
      () => (omission.OmissionGeneric as (...args: unknown[]) => unknown)(),
    ]) {
      try {
        action();
      } catch {
        this.rejected++;
      }
    }
    if (this.rejected !== 3) throw Error('invalid input accepted');
    this.completed = true;
  },
  async proxies() {
    const good = new GoodProxy();
    const values = [good.total, await good.work(), await good.work({ token: null })];
    if (values.join(',') !== '19,19,17') throw Error(`proxy defaults ${values}`);
    try {
      await new BadProxy().trigger();
    } catch (error) {
      this.missingSuper = String(error);
    }
  },
};
Object.assign(globalThis, { omission, omissionHooks: hooks });
registerPage('default-omission', () => omission.OmissionWidget());
registerPage('default-omission-null', () =>
  omission.OmissionWidget({ labels: null, padding: null }),
);
