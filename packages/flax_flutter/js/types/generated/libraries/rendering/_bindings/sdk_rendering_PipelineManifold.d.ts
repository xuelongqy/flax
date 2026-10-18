import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PipelineManifold extends Omit<upstream0.Listenable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::PipelineManifold": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __PipelineManifold: unique symbol;
    readonly [_flaxDartTypeValue]: PipelineManifold;
    readonly semanticsEnabled: boolean;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    requestVisualUpdate(): void;
}
export declare namespace _PipelineManifoldFactory {
    function implement(args: [], implementation: {
        addListener: ((listener: (() => void)) => void);
        removeListener: ((listener: (() => void)) => void);
        requestVisualUpdate: (() => void);
        get semanticsEnabled(): boolean;
    }): PipelineManifold;
}
export declare const PipelineManifold: typeof _PipelineManifoldFactory & _FlaxInstanceType<PipelineManifold> & _FlaxDartType<PipelineManifold, readonly ["class", "flax.core/sdk_rendering#type:PipelineManifold", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "semanticsEnabled" | "addListener" | "removeListener" | "requestVisualUpdate" | "__flaxBound:package:flutter/src/rendering/object.dart::PipelineManifold" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
