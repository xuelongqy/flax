// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_LicenseParagraph';
import '@flax/flutter/foundation/_bindings/sdk_foundation_LicenseParagraph';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface LicenseEntry extends Readonly<{ "__flaxBound:package:flutter/src/foundation/licenses.dart::LicenseEntry": readonly [] }> { readonly __LicenseEntry: unique symbol;
readonly [_flaxDartTypeValue]: LicenseEntry;

readonly packages: DartIterable<string>;
readonly paragraphs: DartIterable<upstream0.LicenseParagraph>;
}
defineObject("flax.core/sdk_foundation#type:LicenseEntry", ["packages","paragraphs"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:LicenseEntry", "object", {}, {}), []);
const _LicenseEntryProxy = {type: "flax.core/sdk_foundation#type:LicenseEntry", parameters: [], constructors: {}, methods: {}, getters: ["packages","paragraphs"], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _LicenseEntryFactory { export function implement(args: [], implementation: {get packages(): DartIterableInput<string, string>; get paragraphs(): DartIterableInput<upstream0.LicenseParagraph, Readonly<{ "__flaxBound:package:flutter/src/foundation/licenses.dart::LicenseParagraph": readonly [] }>>}): LicenseEntry {
return constructProxy(_LicenseEntryProxy, args, implementation) as LicenseEntry; } }
export const LicenseEntry: typeof _LicenseEntryFactory & _FlaxInstanceType<LicenseEntry> & _FlaxDartType<LicenseEntry, readonly ["class", "flax.core/sdk_foundation#type:LicenseEntry", readonly [], false]> = _flaxBindInstanceType<LicenseEntry, typeof _LicenseEntryFactory>(_LicenseEntryFactory, "flax.core/sdk_foundation#type:LicenseEntry", ["dart:core::Object"]) as typeof _LicenseEntryFactory & _FlaxInstanceType<LicenseEntry> & _FlaxDartType<LicenseEntry, readonly ["class", "flax.core/sdk_foundation#type:LicenseEntry", readonly [], false]>;
