// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_LicenseEntry';
import '@flax/flutter/foundation/_bindings/sdk_foundation_LicenseEntry';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_LicenseParagraph';
import '@flax/flutter/foundation/_bindings/sdk_foundation_LicenseParagraph';
import { _flaxMemberParameters66 } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface LicenseEntryWithLineBreaks extends Omit<upstream0.LicenseEntry, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/foundation/licenses.dart::LicenseEntryWithLineBreaks": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/licenses.dart::LicenseEntry": readonly [] }> { readonly __LicenseEntryWithLineBreaks: unique symbol;
readonly [_flaxDartTypeValue]: LicenseEntryWithLineBreaks;

}
defineObject("flax.core/sdk_foundation#type:LicenseEntryWithLineBreaks", ["packages","paragraphs","text"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:LicenseEntryWithLineBreaks", "object", {}, {}), [], undefined, "flax.core/sdk_foundation#type:LicenseEntry");
const _LicenseEntryWithLineBreaksProxy = {type: "flax.core/sdk_foundation#type:LicenseEntryWithLineBreaks", parameters: _flaxMemberParameters66, constructors: {"": _flaxMemberParameters66}, methods: {}, getters: ["packages","text","paragraphs"], setters: [], contextMembers: [], superMembers: ["get:packages","get:text","get:paragraphs"]} as const;
export interface LicenseEntryWithLineBreaks {
readonly [_flaxDartTypeValue]: LicenseEntryWithLineBreaks;

get packages(): DartList<string>;
get text(): string;
get paragraphs(): DartIterable<upstream1.LicenseParagraph>;
}
export abstract class LicenseEntryWithLineBreaks extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LicenseEntryWithLineBreaks>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: LicenseEntryWithLineBreaks;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:LicenseEntryWithLineBreaks", readonly [], false];
constructor(packages: DartListInput<string, string>, text: string) { super(_LicenseEntryWithLineBreaksProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(LicenseEntryWithLineBreaks.prototype, _LicenseEntryWithLineBreaksProxy);
export namespace LicenseEntryWithLineBreaks { export function implement(args: [packages: DartListInput<string, string>, text: string], implementation: {}): LicenseEntryWithLineBreaks {
return constructProxy(_LicenseEntryWithLineBreaksProxy, args, implementation) as LicenseEntryWithLineBreaks; } }
_flaxBindInstanceType<LicenseEntryWithLineBreaks, typeof LicenseEntryWithLineBreaks>(LicenseEntryWithLineBreaks, "flax.core/sdk_foundation#type:LicenseEntryWithLineBreaks", ["flax.core/sdk_foundation#type:LicenseEntry","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "packages" | "paragraphs" | "text" | "__flaxBound:package:flutter/src/foundation/licenses.dart::LicenseEntryWithLineBreaks" | "__flaxBound:package:flutter/src/foundation/licenses.dart::LicenseEntry";
