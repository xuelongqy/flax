import { type FlaxInstanceType as _FlaxInstanceType, type DartSet, type DartSetInput, type DartInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MaterialStateMixin<T extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> = upstream0.StatefulWidget> extends Omit<upstream1.State<T>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream1.State<T>>, Readonly<{
    "__flaxBound:package:flutter/src/material/material_state_mixin.dart::MaterialStateMixin": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __MaterialStateMixin: unique symbol;
    readonly [_flaxDartTypeValue]: MaterialStateMixin<T>;
    get materialStates(): DartSet<upstream3.WidgetState>;
    readonly isDisabled: boolean;
    readonly isDragged: boolean;
    readonly isErrored: boolean;
    readonly isFocused: boolean;
    readonly isHovered: boolean;
    readonly isPressed: boolean;
    readonly isScrolledUnder: boolean;
    readonly isSelected: boolean;
    readonly widget: T;
    readonly context: upstream4.BuildContext;
    readonly mounted: boolean;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream5.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream7.DiagnosticsTreeStyle | null | undefined;
    }): upstream6.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    updateMaterialState(key: upstream3.WidgetState, options?: {
        onChanged?: ((value: boolean) => void) | null | undefined;
    }): ((value: boolean) => void);
    setMaterialState(state: upstream3.WidgetState, isSet: boolean): void;
    addMaterialState(state: upstream3.WidgetState): void;
    removeMaterialState(state: upstream3.WidgetState): void;
    initState(): void;
    didUpdateWidget(oldWidget: (T | DartInput<T>)): void;
    reassemble(): void;
    setState(fn: (() => void)): void;
    deactivate(): void;
    activate(): void;
    dispose(): void;
    build(context: upstream4.BuildContext): Widget;
    didChangeDependencies(): void;
    set materialStates(value: DartSetInput<upstream3.WidgetState, upstream3.WidgetState>);
}
export declare const MaterialStateMixin: object & _FlaxInstanceType<MaterialStateMixin<upstream0.StatefulWidget>> & _FlaxDartType<MaterialStateMixin<upstream0.StatefulWidget>, readonly ["class", "flax.core/sdk_material#type:MaterialStateMixin", readonly [readonly ["class", "flax.core/components#type:StatefulWidget", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "materialStates" | "isDisabled" | "isDragged" | "isErrored" | "isFocused" | "isHovered" | "isPressed" | "isScrolledUnder" | "isSelected" | "widget" | "context" | "mounted" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "updateMaterialState" | "setMaterialState" | "addMaterialState" | "removeMaterialState" | "initState" | "didUpdateWidget" | "reassemble" | "setState" | "deactivate" | "activate" | "dispose" | "build" | "didChangeDependencies" | "__flaxBound:package:flutter/src/material/material_state_mixin.dart::MaterialStateMixin" | "__flaxBound:package:flutter/src/widgets/framework.dart::State" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>] ? {
        readonly prototype: MaterialStateMixin<_Selected0>;
    } & _FlaxInstanceType<MaterialStateMixin<_Selected0>> & _FlaxDartType<MaterialStateMixin<_Selected0>> : never : never;
}
export {};
