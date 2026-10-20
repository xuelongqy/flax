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
    get layer(): T | null;
    toString(): string;
    set layer(value: (T | DartInput<T>) | null);
}
export declare function _LayerHandleFactory<T extends upstream0.Layer = upstream0.Layer>(_layer?: (T | DartInput<T>) | null): LayerHandle<T>;
export declare function _LayerHandleFactory(_layer?: (Readonly<{
    "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>) | null): LayerHandle<upstream0.Layer>;
export interface _LayerHandleNative<T extends upstream0.Layer = upstream0.Layer> extends LayerHandle<T> {
    readonly [_flaxDartTypeValue]: _LayerHandleNative<T>;
    toString(): string;
    get layer(): T | null;
    set layer(value: (T | DartInput<T>) | null);
}
export declare abstract class _LayerHandleNative<T extends upstream0.Layer = upstream0.Layer> extends _FlaxProxyBase {
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
export declare namespace _LayerHandleFactory {
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
declare const _LayerHandleBinding: typeof _LayerHandleFactory & (new <T extends upstream0.Layer = upstream0.Layer>(_layer?: (Readonly<{
    "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>) | null) => _LayerHandleNative<T>);
export declare const LayerHandle: typeof _LayerHandleBinding & _FlaxInstanceType<LayerHandle<upstream0.Layer>> & _FlaxDartType<LayerHandle<upstream0.Layer>, readonly ["class", "flax.core/sdk_rendering#type:LayerHandle", readonly [readonly ["class", "flax.core/sdk_rendering#type:Layer", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Layer] ? (new (_layer?: (Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null) => _LayerHandleNative<_Selected0>) & {
        (_layer?: (_Selected0 | DartInput<_Selected0>) | null): _LayerHandleNative<_Selected0>;
        readonly prototype: _LayerHandleNative<_Selected0>;
        implement(args: readonly [(Readonly<{
            "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null], implementation: Partial<_LayerHandleNative<_Selected0>>): _LayerHandleNative<_Selected0>;
    } & _FlaxInstanceType<_LayerHandleNative<_Selected0>> & _FlaxDartType<_LayerHandleNative<_Selected0>> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Layer] ? (new (_layer?: (Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null) => _LayerHandleNative<_Selected0>) & {
        (_layer?: (_Selected0 | DartInput<_Selected0>) | null): _LayerHandleNative<_Selected0>;
        readonly prototype: _LayerHandleNative<_Selected0>;
        implement(args: readonly [(Readonly<{
            "__flaxBound:package:flutter/src/rendering/layer.dart::Layer": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null], implementation: Partial<_LayerHandleNative<_Selected0>>): _LayerHandleNative<_Selected0>;
    } & _FlaxInstanceType<_LayerHandleNative<_Selected0>> & _FlaxDartType<_LayerHandleNative<_Selected0>> : never : never;
}
export {};
