// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
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
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { _flaxMemberParameters0, _flaxMemberParameters2, _flaxMemberParameters3, _flaxMemberParameters17 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FormState extends Omit<upstream0.State<upstream1.Form>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.State<upstream1.Form>>, Readonly<{ "__flaxBound:package:flutter/src/widgets/form.dart::FormState": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream1.Form] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __FormState: unique symbol;
readonly [_flaxDartTypeValue]: FormState;

readonly fields: DartIterable<upstream3.FormFieldState<unknown | null>>;
readonly widget: upstream1.Form;
readonly context: upstream4.BuildContext;
readonly mounted: boolean;
toStringShort(): string;
toString(options?: {minLevel?: upstream5.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream7.DiagnosticsTreeStyle | null | undefined}): upstream6.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
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
defineObject("flax.core/sdk_widgets#type:FormState", ["fields","widget","context","mounted"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:FormState", "object", {"build":_flaxMemberParameters0,"save":_flaxMemberParameters2,"reset":_flaxMemberParameters2,"clearError":_flaxMemberParameters2,"validate":_flaxMemberParameters2,"validateGranularly":_flaxMemberParameters2,"initState":_flaxMemberParameters2,"didUpdateWidget":_flaxMemberParameters3,"reassemble":_flaxMemberParameters2,"setState":_flaxMemberParameters17,"deactivate":_flaxMemberParameters2,"activate":_flaxMemberParameters2,"dispose":_flaxMemberParameters2,"didChangeDependencies":_flaxMemberParameters2}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export function _FormStateFactory(): FormState {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:FormState", "", _flaxMemberParameters2, [], {}) as FormState;
}
export const FormState: typeof _FormStateFactory & _FlaxInstanceType<FormState> & _FlaxDartType<FormState, readonly ["class", "flax.core/sdk_widgets#type:FormState", readonly [], false]> = _flaxBindInstanceType<FormState, typeof _FormStateFactory>(_FormStateFactory, "flax.core/sdk_widgets#type:FormState", ["flax.core/components#type:State","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _FormStateFactory & _FlaxInstanceType<FormState> & _FlaxDartType<FormState, readonly ["class", "flax.core/sdk_widgets#type:FormState", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "fields" | "widget" | "context" | "mounted" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "build" | "save" | "reset" | "clearError" | "validate" | "validateGranularly" | "initState" | "didUpdateWidget" | "reassemble" | "setState" | "deactivate" | "activate" | "dispose" | "didChangeDependencies" | "__flaxBound:package:flutter/src/widgets/form.dart::FormState" | "__flaxBound:package:flutter/src/widgets/framework.dart::State" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
