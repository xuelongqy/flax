import { type FlaxInstanceType as _FlaxInstanceType, type DartInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_FormField';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_RestorationMixin';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorationMixin';
import type * as upstream4 from '@flax/flutter/services/_bindings/sdk_services_RestorationBucket';
import '@flax/flutter/services/_bindings/sdk_services_RestorationBucket';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableProperty';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FormFieldState<T extends unknown | null = unknown | null> extends Omit<upstream0.State<upstream1.FormField<T>>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.State<upstream1.FormField<T>>>, Omit<upstream3.RestorationMixin<upstream1.FormField<T>>, _flaxOwnMembers0 | keyof upstream0.State<upstream1.FormField<T>> | keyof upstream2.Diagnosticable>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/form.dart::FormFieldState": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream1.FormField<T>];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorationMixin": readonly [upstream1.FormField<T>];
}> {
    readonly __FormFieldState: unique symbol;
    readonly [_flaxDartTypeValue]: FormFieldState<T>;
    readonly restorationId: string | null;
    readonly bucket: upstream4.RestorationBucket | null;
    readonly restorePending: boolean;
    readonly widget: upstream1.FormField<T>;
    readonly context: upstream5.BuildContext;
    readonly mounted: boolean;
    readonly value: T | null;
    readonly errorText: string | null;
    readonly hasError: boolean;
    readonly hasInteractedByUser: boolean;
    readonly isValid: boolean;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream6.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream8.DiagnosticsTreeStyle | null | undefined;
    }): upstream7.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    restoreState(oldBucket: Readonly<{
        "__flaxBound:package:flutter/src/services/restoration.dart::RestorationBucket": readonly [];
    }> | null, initialRestore: boolean): void;
    didToggleBucket(oldBucket: Readonly<{
        "__flaxBound:package:flutter/src/services/restoration.dart::RestorationBucket": readonly [];
    }> | null): void;
    registerForRestoration(property: Readonly<{
        "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>, restorationId: string): void;
    unregisterFromRestoration(property: Readonly<{
        "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): void;
    didUpdateRestorationId(): void;
    didUpdateWidget(oldWidget: upstream1.FormField<T>): void;
    didChangeDependencies(): void;
    dispose(): void;
    initState(): void;
    reassemble(): void;
    setState(fn: (() => void)): void;
    deactivate(): void;
    activate(): void;
    build(context: upstream5.BuildContext): Widget;
    save(): void;
    reset(): void;
    clearError(): void;
    validate(): boolean;
    didChange(value: (T | DartInput<T>) | null): void;
    setValue(value: (T | DartInput<T>) | null): void;
}
export declare function _FormFieldStateFactory<T extends unknown | null = unknown | null>(): FormFieldState<T>;
export declare function _FormFieldStateFactory(): FormFieldState<unknown | null>;
export declare const FormFieldState: typeof _FormFieldStateFactory & _FlaxInstanceType<FormFieldState<unknown | null>> & _FlaxDartType<FormFieldState<unknown | null>, readonly ["class", "flax.core/sdk_widgets#type:FormFieldState", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "restorationId" | "bucket" | "restorePending" | "widget" | "context" | "mounted" | "value" | "errorText" | "hasError" | "hasInteractedByUser" | "isValid" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "restoreState" | "didToggleBucket" | "registerForRestoration" | "unregisterFromRestoration" | "didUpdateRestorationId" | "didUpdateWidget" | "didChangeDependencies" | "dispose" | "initState" | "reassemble" | "setState" | "deactivate" | "activate" | "build" | "save" | "reset" | "clearError" | "validate" | "didChange" | "setValue" | "__flaxBound:package:flutter/src/widgets/form.dart::FormFieldState" | "__flaxBound:package:flutter/src/widgets/framework.dart::State" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorationMixin";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        (): FormFieldState<_Selected0>;
        readonly prototype: FormFieldState<_Selected0>;
    } & _FlaxInstanceType<FormFieldState<_Selected0>> & _FlaxDartType<FormFieldState<_Selected0>> : never : never;
}
export {};
