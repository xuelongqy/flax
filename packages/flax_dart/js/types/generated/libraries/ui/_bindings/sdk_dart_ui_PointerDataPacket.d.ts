import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerData';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerData';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface PointerDataPacket extends Readonly<{
    "__flaxBound:dart:ui::PointerDataPacket": readonly [];
}> {
    readonly __PointerDataPacket: unique symbol;
    readonly [_flaxDartTypeValue]: PointerDataPacket;
}
export interface PointerDataPacket {
    readonly [_flaxDartTypeValue]: PointerDataPacket;
    get data(): DartList<upstream0.PointerData>;
}
export declare abstract class PointerDataPacket extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PointerDataPacket>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: PointerDataPacket;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:PointerDataPacket", readonly [], false];
    constructor(options?: {
        data?: DartListInput<upstream0.PointerData, Readonly<{
            "__flaxBound:dart:ui::PointerData": readonly [];
        }>> | undefined;
    });
}
export declare namespace PointerDataPacket {
    function implement(args: [options?: {
        data?: DartListInput<upstream0.PointerData, Readonly<{
            "__flaxBound:dart:ui::PointerData": readonly [];
        }>> | undefined;
    }], implementation: {}): PointerDataPacket;
}
