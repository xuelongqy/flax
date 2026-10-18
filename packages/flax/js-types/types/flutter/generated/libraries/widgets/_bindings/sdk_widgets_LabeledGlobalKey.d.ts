import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_GlobalKey';
import '@flax/flutter/widgets/_bindings/sdk_widgets_GlobalKey';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface LabeledGlobalKey<T extends upstream0.State<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>> = upstream0.State<upstream1.StatefulWidget>> extends Omit<upstream2.GlobalKey<T>, _flaxOwnMembers0>, Omit<upstream3.Key, _flaxOwnMembers0 | keyof upstream2.GlobalKey<T>>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::LabeledGlobalKey": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::GlobalKey": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
}> {
    readonly __LabeledGlobalKey: unique symbol;
    readonly [_flaxDartTypeValue]: LabeledGlobalKey<T>;
}
export interface LabeledGlobalKey<T extends upstream0.State<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>> = upstream0.State<upstream1.StatefulWidget>> {
    readonly [_flaxDartTypeValue]: LabeledGlobalKey<T>;
    toString(): string;
    get currentContext(): upstream4.BuildContext | null;
    get currentWidget(): Widget | null;
    get currentState(): T | null;
}
export declare abstract class LabeledGlobalKey<T extends upstream0.State<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>> = upstream0.State<upstream1.StatefulWidget>> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LabeledGlobalKey<upstream0.State<upstream1.StatefulWidget>>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: LabeledGlobalKey<upstream0.State<upstream1.StatefulWidget>>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:LabeledGlobalKey", readonly [readonly ["class", "flax.core/components#type:State", readonly [readonly ["class", "flax.core/components#type:StatefulWidget", readonly [], false]], false]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor(_debugLabel: string | null);
}
export declare namespace LabeledGlobalKey {
    function implement<T extends upstream0.State<Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>> = upstream0.State<upstream1.StatefulWidget>>(args: [_debugLabel: string | null], implementation: {}): LabeledGlobalKey<T>;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "currentContext" | "currentWidget" | "currentState" | "toString" | "__flaxBound:package:flutter/src/widgets/framework.dart::LabeledGlobalKey" | "__flaxBound:package:flutter/src/widgets/framework.dart::GlobalKey" | "__flaxBound:package:flutter/src/foundation/key.dart::Key";
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.State<Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>>] ? (abstract new (_debugLabel: string | null) => LabeledGlobalKey<_Selected0>) & {
        readonly prototype: LabeledGlobalKey<_Selected0>;
        implement(args: readonly [string | null], implementation: Partial<LabeledGlobalKey<_Selected0>>): LabeledGlobalKey<_Selected0>;
    } & _FlaxInstanceType<LabeledGlobalKey<_Selected0>> & _FlaxDartType<LabeledGlobalKey<_Selected0>> : never : never;
}
export {};
