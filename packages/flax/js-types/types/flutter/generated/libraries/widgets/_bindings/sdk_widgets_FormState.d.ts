import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartSet, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_Form';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_FormFieldState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_FormFieldState';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FormState extends Omit<upstream0.State<upstream1.Form>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.State<upstream1.Form>>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/form.dart::FormState": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream1.Form];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __FormState: unique symbol;
    readonly [_flaxDartTypeValue]: FormState;
    readonly fields: DartIterable<upstream3.FormFieldState<unknown | null>>;
    readonly widget: upstream1.Form;
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
    build(context: upstream4.BuildContext): Widget;
    save(): void;
    reset(): void;
    clearError(): void;
    validate(): boolean;
    validateGranularly(): DartSet<upstream3.FormFieldState<unknown | null>>;
    initState(): void;
    didUpdateWidget(oldWidget: upstream1.Form): void;
    reassemble(): void;
    setState(fn: (() => void)): void;
    deactivate(): void;
    activate(): void;
    dispose(): void;
    didChangeDependencies(): void;
}
export declare function _FormStateFactory(): FormState;
export declare const FormState: typeof _FormStateFactory & _FlaxInstanceType<FormState> & _FlaxDartType<FormState, readonly ["class", "flax.core/sdk_widgets#type:FormState", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "fields" | "widget" | "context" | "mounted" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "build" | "save" | "reset" | "clearError" | "validate" | "validateGranularly" | "initState" | "didUpdateWidget" | "reassemble" | "setState" | "deactivate" | "activate" | "dispose" | "didChangeDependencies" | "__flaxBound:package:flutter/src/widgets/form.dart::FormState" | "__flaxBound:package:flutter/src/widgets/framework.dart::State" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
