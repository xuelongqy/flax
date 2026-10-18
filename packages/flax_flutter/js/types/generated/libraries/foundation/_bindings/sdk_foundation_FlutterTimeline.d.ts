import { type FlaxInstanceType as _FlaxInstanceType, type DartMapInput, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_AggregatedTimings';
import '@flax/flutter/foundation/_bindings/sdk_foundation_AggregatedTimings';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FlutterTimeline extends Readonly<{
    "__flaxBound:package:flutter/src/foundation/timeline.dart::FlutterTimeline": readonly [];
}> {
    readonly __FlutterTimeline: unique symbol;
    readonly [_flaxDartTypeValue]: FlutterTimeline;
}
export declare namespace _FlutterTimelineFactory {
    function setDebugCollectionEnabled(value: boolean): void;
}
export declare namespace _FlutterTimelineFactory {
    const debugCollectionEnabled: boolean;
}
export declare namespace _FlutterTimelineFactory {
    const now: number;
}
export declare namespace _FlutterTimelineFactory {
    function startSync(name: string, options?: {
        arguments?: DartMapInput<string, unknown | null, string, unknown | null> | null | undefined;
    }): void;
}
export declare namespace _FlutterTimelineFactory {
    function finishSync(): void;
}
export declare namespace _FlutterTimelineFactory {
    function instantSync(name: string, options?: {
        arguments?: DartMapInput<string, unknown | null, string, unknown | null> | null | undefined;
    }): void;
}
export declare namespace _FlutterTimelineFactory {
    function _flaxDefault_timeSync<T extends unknown | null = unknown | null>(name: string, _flaxArg_66756e6374696f6e: (() => (T | _FlaxDartOutput<T>)), options?: {
        arguments?: DartMapInput<string, unknown | null, string, unknown | null> | null | undefined;
    }): _FlaxDartOutput<T>;
    export const timeSync: _FlaxDartCallable<typeof _flaxDefault_timeSync, _FlaxSignature0>;
    export {};
}
export declare namespace _FlutterTimelineFactory {
    function debugCollect(): upstream0.AggregatedTimings;
}
export declare namespace _FlutterTimelineFactory {
    function debugReset(): void;
}
export declare const FlutterTimeline: typeof _FlutterTimelineFactory & _FlaxInstanceType<FlutterTimeline> & _FlaxDartType<FlutterTimeline, readonly ["class", "flax.core/sdk_foundation#type:FlutterTimeline", readonly [], false]>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (name: string, _flaxArg_66756e6374696f6e: (() => (_Selected0 | DartInput<_Selected0>)), options?: {
        arguments?: DartMapInput<string, unknown | null, string, unknown | null> | null | undefined;
    }) => _Selected0 : never : never;
}
export {};
