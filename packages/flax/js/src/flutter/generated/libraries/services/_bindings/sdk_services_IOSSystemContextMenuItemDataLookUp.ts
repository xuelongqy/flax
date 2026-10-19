// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_IOSSystemContextMenuItemData';
import '@flax/flutter/services/_bindings/sdk_services_IOSSystemContextMenuItemData';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface IOSSystemContextMenuItemDataLookUp extends Omit<upstream0.IOSSystemContextMenuItemData, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.IOSSystemContextMenuItemData>, Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::IOSSystemContextMenuItemDataLookUp": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::IOSSystemContextMenuItemData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __IOSSystemContextMenuItemDataLookUp: unique symbol;
readonly [_flaxDartTypeValue]: IOSSystemContextMenuItemDataLookUp;

readonly title: string;
toStringShort(): string;
toString(options?: {minLevel?: upstream2.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream4.DiagnosticsTreeStyle | null | undefined}): upstream3.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
}
defineObject("flax.core/sdk_services#type:IOSSystemContextMenuItemDataLookUp", ["title"], [], _flaxBindingMethods("flax.core/sdk_services#type:IOSSystemContextMenuItemDataLookUp", "object", {}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export function _IOSSystemContextMenuItemDataLookUpFactory(options: { title: string }): IOSSystemContextMenuItemDataLookUp {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:IOSSystemContextMenuItemDataLookUp", "", [{"name":"title","required":true}], [], options) as IOSSystemContextMenuItemDataLookUp;
}
export const IOSSystemContextMenuItemDataLookUp: typeof _IOSSystemContextMenuItemDataLookUpFactory & _FlaxInstanceType<IOSSystemContextMenuItemDataLookUp> & _FlaxDartType<IOSSystemContextMenuItemDataLookUp, readonly ["class", "flax.core/sdk_services#type:IOSSystemContextMenuItemDataLookUp", readonly [], false]> = _flaxBindInstanceType<IOSSystemContextMenuItemDataLookUp, typeof _IOSSystemContextMenuItemDataLookUpFactory>(_IOSSystemContextMenuItemDataLookUpFactory, "flax.core/sdk_services#type:IOSSystemContextMenuItemDataLookUp", ["flax.core/sdk_services#type:IOSSystemContextMenuItemData","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _IOSSystemContextMenuItemDataLookUpFactory & _FlaxInstanceType<IOSSystemContextMenuItemDataLookUp> & _FlaxDartType<IOSSystemContextMenuItemDataLookUp, readonly ["class", "flax.core/sdk_services#type:IOSSystemContextMenuItemDataLookUp", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "title" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:flutter/src/services/text_input.dart::IOSSystemContextMenuItemDataLookUp" | "__flaxBound:package:flutter/src/services/text_input.dart::IOSSystemContextMenuItemData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
