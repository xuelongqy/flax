import { Column, registerPage } from '@flax/flutter/widgets';
import { Type, Symbol as DartSymbol, Record as DartRecord } from '@flax/dart/core';
import { asDart, getDartType } from '@flax/core/bindings';
import { Stream } from '@flax/dart/async';
import * as bindings from '../../../.dart_tool/flax/ui/binding_parity_bindings.js';

let calls = 0;
let tile: ReturnType<typeof bindings.CallbackTile> | undefined;
let weakTap: WeakRef<() => void>;
let weakTile: WeakRef<object>;
function createTile(): void {
  const tap = () => calls++;
  weakTap = new WeakRef(tap);
  tile = bindings.CallbackTile({ onTap: tap, callbacks: [() => calls++] });
  weakTile = new WeakRef(tile);
}
createTile();
registerPage('bindingParity', () => Column({ children: tile ? [tile] : [] }));

Object.assign(globalThis, {
  parity: {
    ...bindings,
    Type,
    DartSymbol,
    DartRecord,
    asDart,
    getDartType,
    Stream,
    calls: () => calls,
    tapAlive: () => weakTap.deref() !== undefined,
    tileAlive: () => weakTile.deref() !== undefined,
    releaseTile() {
      tile = undefined;
    },
  },
});
