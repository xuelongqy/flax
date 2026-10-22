// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/async/_bindings/flutter_Stream';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_LicenseEntry';
import '@flax/flutter/foundation/_bindings/sdk_foundation_LicenseEntry';
import { _flaxMemberParameters81 } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface LicenseRegistry extends Readonly<{ "__flaxBound:package:flutter/src/foundation/licenses.dart::LicenseRegistry": readonly [] }> { readonly __LicenseRegistry: unique symbol;
readonly [_flaxDartTypeValue]: LicenseRegistry;

}
defineObject("flax.core/sdk_foundation#type:LicenseRegistry", [], [], _flaxBindingMethods("flax.core/sdk_foundation#type:LicenseRegistry", "object", {}, {}), []);
export namespace _LicenseRegistryFactory { export declare const licenses: upstream0.Stream<upstream1.LicenseEntry>; }
_flaxDefineStaticGetters(_LicenseRegistryFactory, "flax.core/sdk_foundation#read:LicenseRegistry.", ["licenses"]);
export namespace _LicenseRegistryFactory { export function addLicense(collector: (() => (upstream0.Stream<upstream1.LicenseEntry> | upstream0.Stream<Readonly<{ "__flaxBound:package:flutter/src/foundation/licenses.dart::LicenseEntry": readonly [] }>>))): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_foundation#function:LicenseRegistry.addLicense", [collector], _flaxMemberParameters81);
} }
export const LicenseRegistry: typeof _LicenseRegistryFactory & _FlaxInstanceType<LicenseRegistry> & _FlaxDartType<LicenseRegistry, readonly ["class", "flax.core/sdk_foundation#type:LicenseRegistry", readonly [], false]> = _flaxBindInstanceType<LicenseRegistry, typeof _LicenseRegistryFactory>(_LicenseRegistryFactory, "flax.core/sdk_foundation#type:LicenseRegistry", ["dart:core::Object"]) as typeof _LicenseRegistryFactory & _FlaxInstanceType<LicenseRegistry> & _FlaxDartType<LicenseRegistry, readonly ["class", "flax.core/sdk_foundation#type:LicenseRegistry", readonly [], false]>;
