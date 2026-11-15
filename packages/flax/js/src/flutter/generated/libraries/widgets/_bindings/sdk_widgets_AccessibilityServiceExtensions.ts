// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AccessibilityServiceExtensions extends DartEnum, Omit<upstream0.Enum, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/service_extensions.dart::AccessibilityServiceExtensions": readonly [] }> { readonly __AccessibilityServiceExtensions: unique symbol;
readonly [_flaxDartTypeValue]: AccessibilityServiceExtensions;
readonly name: string;
readonly index: number;

readonly extensionName: string;
}
defineEnum("flax.core/sdk_widgets#type:AccessibilityServiceExtensions", ["getSemanticsTree","getIssuesAndSemanticsTree","enableSemantics","disposeSemantics"], {
get extensionName(): string { return invokeTopLevel("flax.core/sdk_widgets#function:AccessibilityServiceExtensions.extensionName%3Aget", [this]) as string; },
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_AccessibilityServiceExtensions_api = {
getSemanticsTree: enumValue<AccessibilityServiceExtensions>("flax.core/sdk_widgets#type:AccessibilityServiceExtensions", "getSemanticsTree"),
getIssuesAndSemanticsTree: enumValue<AccessibilityServiceExtensions>("flax.core/sdk_widgets#type:AccessibilityServiceExtensions", "getIssuesAndSemanticsTree"),
enableSemantics: enumValue<AccessibilityServiceExtensions>("flax.core/sdk_widgets#type:AccessibilityServiceExtensions", "enableSemantics"),
disposeSemantics: enumValue<AccessibilityServiceExtensions>("flax.core/sdk_widgets#type:AccessibilityServiceExtensions", "disposeSemantics"),
values: Object.freeze([enumValue<AccessibilityServiceExtensions>("flax.core/sdk_widgets#type:AccessibilityServiceExtensions", "getSemanticsTree"), enumValue<AccessibilityServiceExtensions>("flax.core/sdk_widgets#type:AccessibilityServiceExtensions", "getIssuesAndSemanticsTree"), enumValue<AccessibilityServiceExtensions>("flax.core/sdk_widgets#type:AccessibilityServiceExtensions", "enableSemantics"), enumValue<AccessibilityServiceExtensions>("flax.core/sdk_widgets#type:AccessibilityServiceExtensions", "disposeSemantics")]),
};
export const AccessibilityServiceExtensions = Object.freeze(_flaxBindInstanceType<AccessibilityServiceExtensions, typeof _flaxEnum_AccessibilityServiceExtensions_api>(_flaxEnum_AccessibilityServiceExtensions_api, "flax.core/sdk_widgets#type:AccessibilityServiceExtensions", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_AccessibilityServiceExtensions_api & _FlaxInstanceType<AccessibilityServiceExtensions> & _FlaxDartType<AccessibilityServiceExtensions, readonly ["class", "flax.core/sdk_widgets#type:AccessibilityServiceExtensions", readonly [], false]>);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "extensionName" | "__flaxBound:package:flutter/src/widgets/service_extensions.dart::AccessibilityServiceExtensions";
