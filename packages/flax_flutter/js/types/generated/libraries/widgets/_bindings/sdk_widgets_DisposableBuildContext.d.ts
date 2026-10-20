import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DisposableBuildContext<T extends upstream0.State<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>> = upstream0.State<upstream1.StatefulWidget>> extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/disposable_build_context.dart::DisposableBuildContext": readonly [T];
}> {
    readonly __DisposableBuildContext: unique symbol;
    readonly [_flaxDartTypeValue]: DisposableBuildContext<T>;
    readonly context: upstream2.BuildContext | null;
    dispose(): void;
}
export declare function _DisposableBuildContextFactory<T extends upstream0.State<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>> = upstream0.State<upstream1.StatefulWidget>>(_state: (T | DartInput<T>)): DisposableBuildContext<T>;
export declare function _DisposableBuildContextFactory(_state: upstream0.State<upstream1.StatefulWidget>): DisposableBuildContext<upstream0.State<upstream1.StatefulWidget>>;
export interface _DisposableBuildContextNative<T extends upstream0.State<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>> = upstream0.State<upstream1.StatefulWidget>> extends DisposableBuildContext<T> {
    readonly [_flaxDartTypeValue]: _DisposableBuildContextNative<T>;
    dispose(): void;
    get context(): upstream2.BuildContext | null;
}
export declare abstract class _DisposableBuildContextNative<T extends upstream0.State<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>> = upstream0.State<upstream1.StatefulWidget>> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DisposableBuildContext<upstream0.State<upstream1.StatefulWidget>>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DisposableBuildContext<upstream0.State<upstream1.StatefulWidget>>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:DisposableBuildContext", readonly [readonly ["class", "flax.core/components#type:State", readonly [readonly ["class", "flax.core/components#type:StatefulWidget", readonly [], false]], false]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor(_state: upstream0.State<upstream1.StatefulWidget>);
}
export declare namespace _DisposableBuildContextFactory {
    function implement<T extends upstream0.State<Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>> = upstream0.State<upstream1.StatefulWidget>>(args: [_state: upstream0.State<upstream1.StatefulWidget>], implementation: {}): DisposableBuildContext<T>;
}
declare const _DisposableBuildContextBinding: typeof _DisposableBuildContextFactory & (new <T extends upstream0.State<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>> = upstream0.State<upstream1.StatefulWidget>>(_state: upstream0.State<upstream1.StatefulWidget>) => _DisposableBuildContextNative<T>);
export declare const DisposableBuildContext: typeof _DisposableBuildContextBinding & _FlaxInstanceType<DisposableBuildContext<upstream0.State<upstream1.StatefulWidget>>> & _FlaxDartType<DisposableBuildContext<upstream0.State<upstream1.StatefulWidget>>, readonly ["class", "flax.core/sdk_widgets#type:DisposableBuildContext", readonly [readonly ["class", "flax.core/components#type:State", readonly [readonly ["class", "flax.core/components#type:StatefulWidget", readonly [], false]], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.State<Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>>] ? (new (_state: upstream0.State<upstream1.StatefulWidget>) => _DisposableBuildContextNative<_Selected0>) & {
        (_state: (_Selected0 | DartInput<_Selected0>)): _DisposableBuildContextNative<_Selected0>;
        readonly prototype: _DisposableBuildContextNative<_Selected0>;
        implement(args: readonly [upstream0.State<upstream1.StatefulWidget>], implementation: Partial<_DisposableBuildContextNative<_Selected0>>): _DisposableBuildContextNative<_Selected0>;
    } & _FlaxInstanceType<_DisposableBuildContextNative<_Selected0>> & _FlaxDartType<_DisposableBuildContextNative<_Selected0>> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.State<Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>>] ? (new (_state: upstream0.State<upstream1.StatefulWidget>) => _DisposableBuildContextNative<_Selected0>) & {
        (_state: (_Selected0 | DartInput<_Selected0>)): _DisposableBuildContextNative<_Selected0>;
        readonly prototype: _DisposableBuildContextNative<_Selected0>;
        implement(args: readonly [upstream0.State<upstream1.StatefulWidget>], implementation: Partial<_DisposableBuildContextNative<_Selected0>>): _DisposableBuildContextNative<_Selected0>;
    } & _FlaxInstanceType<_DisposableBuildContextNative<_Selected0>> & _FlaxDartType<_DisposableBuildContextNative<_Selected0>> : never : never;
}
export {};
