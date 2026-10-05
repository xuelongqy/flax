import { registerPage, Text } from '@flax/flutter/widgets';
import * as statics from '../../../.dart_tool/flax/ui/static_accessors_bindings.js';

const C = statics.StaticCounter;
const hooks = {
  rejected: 0,
  pending: 0,
  exercise() {
    if ((C.reads as number) !== 0) throw Error('eager static read');
    try {
      void C.delayed;
    } catch {
      this.rejected++;
    }
    C.setCount(4);
    if (
      (C.count as number) !== 4 ||
      C.tracked !== 4 ||
      C.tracked !== 4 ||
      (C.reads as number) !== 2
    )
      throw Error('live static read');
    C.setTracked(2.5);
    if ((C.count as number) !== 3 || (C.writes as number) !== 1)
      throw Error('independent setter type');
    C.setOptional(null);
    if (C.optional !== null) throw Error('nullable static write');
    C.setOptional(9);
    C.setDelayed(11);
    if (C.optional !== 9 || C.delayed !== 11) throw Error('late static write');
    const token = statics.StaticToken(12);
    C.setTokens([token, token]);
    const tokens = C.tokens;
    if (tokens.get(0) !== token || tokens.get(1) !== token)
      throw Error('static object identity');
    C.setRecord({ $1: 5, label: 'static record' });
    if (C.record.$1 !== 5 || C.record.label !== 'static record')
      throw Error('static record');
    C.setTransform((value) => value * 2);
    if (C.callTransform(6) !== 12 || C.transform!(7) !== 14)
      throw Error('static callback');
    C.setLater(Promise.resolve(13));
    C.later.then((value) => {
      this.pending = value;
    });
    for (const action of [
      () => C.setCount('bad' as never),
      () => C.setCount(null as never),
      () => C.setCount(undefined as never),
      () => C.setCount(1.5),
      () => C.setOptional(undefined as never),
      () => (C.setCount as (...args: unknown[]) => void)(),
      () => (C.setCount as (...args: unknown[]) => void)(1, 2),
      () => C.setTracked(-1),
      () => C.failure,
    ]) {
      try {
        action();
      } catch {
        this.rejected++;
      }
    }
    if (this.rejected !== 10 || (C.count as number) !== 3 || (C.writes as number) !== 2)
      throw Error('static rejection or side effects');
    C.setWriteOnly(17);
    if ((C.count as number) !== 17) throw Error('setter-only');
    for (const owner of [
      statics.StaticWidget,
      statics.StaticState,
      statics.StaticRoute,
      statics.StaticPage,
      statics.StaticStream,
      statics.StaticMembers,
      statics.StaticInterface,
      statics.StaticProxy,
    ]) {
      owner.setCount(23);
      if (owner.count !== 23) throw Error('static class category');
    }
    if (statics.StaticRenamedWidget.count !== 23)
      throw Error('readonly static with renamed constructor');
  },
  read() {
    return C.count;
  },
  write(value: number) {
    C.setCount(value);
  },
  release() {
    C.setTransform(null);
    C.setTokens([]);
  },
};
Object.assign(globalThis, { staticHooks: hooks });
registerPage('static-accessors', () => Text('static accessors'));
