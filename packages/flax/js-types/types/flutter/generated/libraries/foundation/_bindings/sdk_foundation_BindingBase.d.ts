import { type FlaxInstanceType as _FlaxInstanceType, type DartMap, type DartMapInput, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_SingletonFlutterWindow';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SingletonFlutterWindow';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_PlatformDispatcher';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PlatformDispatcher';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_Type';
import '@flax/dart/core/_bindings/flutter_Type';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface BindingBase extends Readonly<{
    "__flaxBound:package:flutter/src/foundation/binding.dart::BindingBase": readonly [];
}> {
    readonly __BindingBase: unique symbol;
    readonly [_flaxDartTypeValue]: BindingBase;
}
export interface BindingBase {
    readonly [_flaxDartTypeValue]: BindingBase;
    initInstances(): void;
    debugCheckZone(entryPoint: string): boolean;
    initServiceExtensions(): void;
    lockEvents(callback: (() => Promise<void>)): Promise<void>;
    unlocked(): void;
    reassembleApplication(): Promise<void>;
    performReassemble(): Promise<void>;
    registerSignalServiceExtension(options: {
        name: string;
        callback: (() => Promise<void>);
    }): void;
    registerBoolServiceExtension(options: {
        name: string;
        getter: (() => Promise<boolean>);
        setter: ((value: boolean) => Promise<void>);
    }): void;
    registerNumericServiceExtension(options: {
        name: string;
        getter: (() => Promise<number>);
        setter: ((value: number) => Promise<void>);
    }): void;
    postEvent(eventKind: string, eventData: DartMapInput<string, unknown | null, string, unknown | null>): void;
    registerStringServiceExtension(options: {
        name: string;
        getter: (() => Promise<string>);
        setter: ((value: string) => Promise<void>);
    }): void;
    registerServiceExtension(options: {
        name: string;
        callback: ((parameters: DartMap<string, string>) => Promise<DartMapInput<string, unknown | null, string, unknown | null>>);
    }): void;
    toString(): string;
    get window(): upstream0.SingletonFlutterWindow;
    get platformDispatcher(): upstream1.PlatformDispatcher;
    get locked(): boolean;
}
export declare abstract class BindingBase extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BindingBase>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: BindingBase;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:BindingBase", readonly [], false];
    constructor();
}
export declare namespace BindingBase {
    function implement(args: [], implementation: {}): BindingBase;
}
export declare namespace BindingBase {
    function setDebugZoneErrorsAreFatal(value: boolean): void;
}
export declare namespace BindingBase {
    const debugZoneErrorsAreFatal: boolean;
}
export declare namespace BindingBase {
    function _flaxDefault_checkInstance<T extends BindingBase = BindingBase>(instance: (T | DartInput<T>) | null): T;
    export const checkInstance: _FlaxDartCallable<typeof _flaxDefault_checkInstance, _FlaxSignature0>;
    export {};
}
export declare namespace BindingBase {
    function debugBindingType(): upstream2.Type | null;
}
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [BindingBase] ? (instance: (_Selected0 | DartInput<_Selected0>) | null) => _Selected0 : never : never;
}
export {};
