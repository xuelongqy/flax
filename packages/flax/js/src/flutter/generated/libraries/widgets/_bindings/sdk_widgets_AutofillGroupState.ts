// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_AutofillGroup';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/flutter/services/_bindings/sdk_services_AutofillScopeMixin';
import '@flax/flutter/services/_bindings/sdk_services_AutofillScopeMixin';
import type * as upstream4 from '@flax/flutter/services/_bindings/sdk_services_AutofillScope';
import '@flax/flutter/services/_bindings/sdk_services_AutofillScope';
import type * as upstream5 from '@flax/flutter/services/_bindings/sdk_services_AutofillClient';
import '@flax/flutter/services/_bindings/sdk_services_AutofillClient';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream11 from '@flax/flutter/services/_bindings/sdk_services_TextInputConnection';
import '@flax/flutter/services/_bindings/sdk_services_TextInputConnection';
import type * as upstream12 from '@flax/flutter/services/_bindings/sdk_services_TextInputClient';
import '@flax/flutter/services/_bindings/sdk_services_TextInputClient';
import type * as upstream13 from '@flax/flutter/services/_bindings/sdk_services_TextInputConfiguration';
import '@flax/flutter/services/_bindings/sdk_services_TextInputConfiguration';
import { _flaxMemberParameters2, _flaxMemberParameters9, _flaxMemberParameters8, _flaxMemberParameters5, _flaxMemberParameters28, _flaxMemberParameters29, _flaxMemberParameters0, _flaxMemberParameters3, _flaxMemberParameters14 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AutofillGroupState extends Omit<upstream0.State<upstream1.AutofillGroup>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.State<upstream1.AutofillGroup>>, Omit<upstream3.AutofillScopeMixin, _flaxOwnMembers0 | keyof upstream0.State<upstream1.AutofillGroup> | keyof upstream2.Diagnosticable>, Omit<upstream4.AutofillScope, _flaxOwnMembers0 | keyof upstream0.State<upstream1.AutofillGroup> | keyof upstream2.Diagnosticable | keyof upstream3.AutofillScopeMixin>, Readonly<{ "__flaxBound:package:flutter/src/widgets/autofill.dart::AutofillGroupState": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream1.AutofillGroup] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/autofill.dart::AutofillScopeMixin": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/autofill.dart::AutofillScope": readonly [] }> { readonly __AutofillGroupState: unique symbol;
readonly [_flaxDartTypeValue]: AutofillGroupState;

readonly autofillClients: DartIterable<upstream5.AutofillClient>;
readonly widget: upstream1.AutofillGroup;
readonly context: upstream6.BuildContext;
readonly mounted: boolean;
toStringShort(): string;
toString(options?: {minLevel?: upstream7.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream9.DiagnosticsTreeStyle | null | undefined}): upstream8.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
attach(trigger: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputClient": readonly [] }>, configuration: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputConfiguration": readonly [] }>): upstream11.TextInputConnection;
getAutofillClient(autofillId: string): upstream5.AutofillClient | null;
register(client: Readonly<{ "__flaxBound:package:flutter/src/services/autofill.dart::AutofillClient": readonly [] }>): void;
unregister(autofillId: string): void;
didChangeDependencies(): void;
build(context: upstream6.BuildContext): Widget;
dispose(): void;
initState(): void;
didUpdateWidget(oldWidget: upstream1.AutofillGroup): void;
reassemble(): void;
setState(fn: (() => void)): void;
deactivate(): void;
activate(): void;
}
defineObject("flax.core/sdk_widgets#type:AutofillGroupState", ["autofillClients","widget","context","mounted"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:AutofillGroupState", "object", {"toStringShort":_flaxMemberParameters2,"toString":_flaxMemberParameters9,"toDiagnosticsNode":_flaxMemberParameters8,"debugFillProperties":_flaxMemberParameters5,"register":_flaxMemberParameters28,"unregister":_flaxMemberParameters29,"didChangeDependencies":_flaxMemberParameters2,"build":_flaxMemberParameters0,"dispose":_flaxMemberParameters2,"initState":_flaxMemberParameters2,"didUpdateWidget":_flaxMemberParameters3,"reassemble":_flaxMemberParameters2,"setState":_flaxMemberParameters14,"deactivate":_flaxMemberParameters2,"activate":_flaxMemberParameters2}, {}), [], undefined, "flax.core/sdk_services#type:AutofillScopeMixin");
export function _AutofillGroupStateFactory(): AutofillGroupState {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:AutofillGroupState", "", _flaxMemberParameters2, [], {}) as AutofillGroupState;
}
export const AutofillGroupState: typeof _AutofillGroupStateFactory & _FlaxInstanceType<AutofillGroupState> & _FlaxDartType<AutofillGroupState, readonly ["class", "flax.core/sdk_widgets#type:AutofillGroupState", readonly [], false]> = _flaxBindInstanceType<AutofillGroupState, typeof _AutofillGroupStateFactory>(_AutofillGroupStateFactory, "flax.core/sdk_widgets#type:AutofillGroupState", ["flax.core/components#type:State","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable","flax.core/sdk_services#type:AutofillScopeMixin","flax.core/sdk_services#type:AutofillScope"]) as typeof _AutofillGroupStateFactory & _FlaxInstanceType<AutofillGroupState> & _FlaxDartType<AutofillGroupState, readonly ["class", "flax.core/sdk_widgets#type:AutofillGroupState", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "autofillClients" | "widget" | "context" | "mounted" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "attach" | "getAutofillClient" | "register" | "unregister" | "didChangeDependencies" | "build" | "dispose" | "initState" | "didUpdateWidget" | "reassemble" | "setState" | "deactivate" | "activate" | "__flaxBound:package:flutter/src/widgets/autofill.dart::AutofillGroupState" | "__flaxBound:package:flutter/src/widgets/framework.dart::State" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/services/autofill.dart::AutofillScopeMixin" | "__flaxBound:package:flutter/src/services/autofill.dart::AutofillScope";
