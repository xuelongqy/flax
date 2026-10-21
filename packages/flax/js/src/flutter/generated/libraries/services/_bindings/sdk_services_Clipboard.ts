// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_ClipboardData';
import '@flax/flutter/services/_bindings/sdk_services_ClipboardData';
import { _flaxMemberParameters29, _flaxMemberParameters30, _flaxMemberParameters0 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Clipboard extends Readonly<{ "__flaxBound:package:flutter/src/services/clipboard.dart::Clipboard": readonly [] }> { readonly __Clipboard: unique symbol;
readonly [_flaxDartTypeValue]: Clipboard;

}
defineObject("flax.core/sdk_services#type:Clipboard", [], [], _flaxBindingMethods("flax.core/sdk_services#type:Clipboard", "object", {}, {}), []);
export namespace _ClipboardFactory { export declare const kTextPlain: string; }
_flaxDefineStaticGetters(_ClipboardFactory, "flax.core/sdk_services#read:Clipboard.", ["kTextPlain"]);
export namespace _ClipboardFactory { export function setData(data: Readonly<{ "__flaxBound:package:flutter/src/services/clipboard.dart::ClipboardData": readonly [] }>): Promise<void> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:Clipboard.setData", [data], _flaxMemberParameters29);
return _flaxResult as Promise<void>;
} }
export namespace _ClipboardFactory { export function getData(format: string): Promise<upstream0.ClipboardData | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:Clipboard.getData", [format], _flaxMemberParameters30);
return _flaxResult as Promise<upstream0.ClipboardData | null>;
} }
export namespace _ClipboardFactory { export function hasStrings(): Promise<boolean> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:Clipboard.hasStrings", [], _flaxMemberParameters0);
return _flaxResult as Promise<boolean>;
} }
export const Clipboard: typeof _ClipboardFactory & _FlaxInstanceType<Clipboard> & _FlaxDartType<Clipboard, readonly ["class", "flax.core/sdk_services#type:Clipboard", readonly [], false]> = _flaxBindInstanceType<Clipboard, typeof _ClipboardFactory>(_ClipboardFactory, "flax.core/sdk_services#type:Clipboard", ["dart:core::Object"]) as typeof _ClipboardFactory & _FlaxInstanceType<Clipboard> & _FlaxDartType<Clipboard, readonly ["class", "flax.core/sdk_services#type:Clipboard", readonly [], false]>;
