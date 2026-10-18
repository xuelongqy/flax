import { type FlaxInstanceType as _FlaxInstanceType, type DartMapInput, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import '@flax/flutter/services/_bindings/sdk_services_RestorationManager';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RestorationBucket extends Readonly<{
    "__flaxBound:package:flutter/src/services/restoration.dart::RestorationBucket": readonly [];
}> {
    readonly __RestorationBucket: unique symbol;
    readonly [_flaxDartTypeValue]: RestorationBucket;
    readonly [_flaxDartMethodCases]?: {
        read: _FlaxSignature0;
        write: _FlaxSignature1;
        remove: _FlaxSignature2;
    };
    readonly debugOwner: unknown | null;
    readonly isReplacing: boolean;
    readonly restorationId: string;
    read<P extends unknown | null = unknown | null>(restorationId: string): _FlaxDartOutput<P> | null;
    write<P extends unknown | null = unknown | null>(restorationId: string, value: (P | _FlaxDartOutput<P>)): void;
    remove<P extends unknown | null = unknown | null>(restorationId: string): _FlaxDartOutput<P> | null;
    contains(restorationId: string): boolean;
    claimChild(restorationId: string, options: {
        debugOwner: unknown | null;
    }): RestorationBucket;
    adoptChild(child: Readonly<{
        "__flaxBound:package:flutter/src/services/restoration.dart::RestorationBucket": readonly [];
    }>): void;
    rename(newRestorationId: string): void;
    dispose(): void;
    toString(): string;
}
export declare namespace _RestorationBucketFactory {
    function empty(options: {
        restorationId: string;
        debugOwner: unknown | null;
    }): RestorationBucket;
}
export declare namespace _RestorationBucketFactory {
    function root(options: {
        manager: Readonly<{
            "__flaxBound:package:flutter/src/services/restoration.dart::RestorationManager": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>;
        rawData: DartMapInput<unknown | null, unknown | null, unknown | null, unknown | null> | null;
    }): RestorationBucket;
}
export declare namespace _RestorationBucketFactory {
    function child(options: {
        restorationId: string;
        parent: Readonly<{
            "__flaxBound:package:flutter/src/services/restoration.dart::RestorationBucket": readonly [];
        }>;
        debugOwner: unknown | null;
    }): RestorationBucket;
}
export declare const RestorationBucket: typeof _RestorationBucketFactory & _FlaxInstanceType<RestorationBucket> & _FlaxDartType<RestorationBucket, readonly ["class", "flax.core/sdk_services#type:RestorationBucket", readonly [], false]>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (restorationId: string) => _Selected0 | null : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (restorationId: string, value: (_Selected0 | DartInput<_Selected0>)) => void : never : never;
}
interface _FlaxSignature2 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (restorationId: string) => _Selected0 | null : never : never;
}
export {};
