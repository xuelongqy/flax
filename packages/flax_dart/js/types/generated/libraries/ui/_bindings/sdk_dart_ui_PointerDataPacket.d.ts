import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerData';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerData';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PointerDataPacket extends Readonly<{
    "__flaxBound:dart:ui::PointerDataPacket": readonly [];
}> {
    readonly __PointerDataPacket: unique symbol;
    readonly [_flaxDartTypeValue]: PointerDataPacket;
    readonly data: DartList<upstream0.PointerData>;
}
export declare function _PointerDataPacketFactory(options?: {
    data?: DartListInput<upstream0.PointerData, Readonly<{
        "__flaxBound:dart:ui::PointerData": readonly [];
    }>> | undefined;
}): PointerDataPacket;
export interface _PointerDataPacketNative extends PointerDataPacket {
    readonly [_flaxDartTypeValue]: _PointerDataPacketNative;
    get data(): DartList<upstream0.PointerData>;
}
export declare abstract class _PointerDataPacketNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PointerDataPacket>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: PointerDataPacket;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:PointerDataPacket", readonly [], false];
    constructor(options?: {
        data?: DartListInput<upstream0.PointerData, Readonly<{
            "__flaxBound:dart:ui::PointerData": readonly [];
        }>> | undefined;
    });
}
export declare namespace _PointerDataPacketFactory {
    function implement(args: [options?: {
        data?: DartListInput<upstream0.PointerData, Readonly<{
            "__flaxBound:dart:ui::PointerData": readonly [];
        }>> | undefined;
    }], implementation: {}): PointerDataPacket;
}
declare const _PointerDataPacketBinding: typeof _PointerDataPacketFactory & (new (options?: {
    data?: DartListInput<upstream0.PointerData, Readonly<{
        "__flaxBound:dart:ui::PointerData": readonly [];
    }>> | undefined;
}) => _PointerDataPacketNative);
export declare const PointerDataPacket: typeof _PointerDataPacketBinding & _FlaxInstanceType<PointerDataPacket> & _FlaxDartType<PointerDataPacket, readonly ["class", "flax.core/sdk_dart_ui#type:PointerDataPacket", readonly [], false]>;
export {};
