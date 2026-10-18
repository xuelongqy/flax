import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_Layer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Layer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ClipRectLayer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_LeaderLayer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_OpacityLayer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerLayer';
import '@flax/flutter/rendering/_bindings/sdk_rendering_TransformLayer';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface LayerHandle<T extends upstream0.Layer = upstream0.Layer> extends Readonly<{
    "__flaxBound:package:flutter/src/rendering/layer.dart::LayerHandle": readonly [T];
}> {
    readonly __LayerHandle: unique symbol;
    readonly [_flaxDartTypeValue]: LayerHandle<T>;
}
export interface LayerHandle<T extends upstream0.Layer = upstream0.Layer> {
    readonly [_flaxDartTypeValue]: LayerHandle<T>;
    toString(): string;
    get layer(): T | null;
    set layer(value: (T | DartInput<T>) | null);
}
export declare abstract class LayerHandle<T extends upstream0.Layer = upstream0.Layer> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LayerHandle<upstream0.Layer>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: LayerHandle<upstream0.Layer>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:LayerHandle", readonly [readonly ["class", "flax.core/sdk_rendering#type:Layer", readonly [], false]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor(_layer?: (Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null);
}
export declare namespace LayerHandle {
    function implement<T extends upstream0.Layer = upstream0.Layer>(args: [_layer?: (Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null], implementation: {}): LayerHandle<T>;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Layer] ? (abstract new (_layer?: (Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null) => LayerHandle<_Selected0>) & {
        readonly prototype: LayerHandle<_Selected0>;
        implement(args: readonly [(Readonly<{
            "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null], implementation: Partial<LayerHandle<_Selected0>>): LayerHandle<_Selected0>;
    } & _FlaxInstanceType<LayerHandle<_Selected0>> & _FlaxDartType<LayerHandle<_Selected0>> : never : never;
}
export {};
