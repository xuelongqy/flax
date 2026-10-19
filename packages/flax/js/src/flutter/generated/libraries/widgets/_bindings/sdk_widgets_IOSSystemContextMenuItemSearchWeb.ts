// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_IOSSystemContextMenuItem';
import '@flax/flutter/widgets/_bindings/sdk_widgets_IOSSystemContextMenuItem';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_IOSSystemContextMenuItemDataSearchWeb';
import '@flax/flutter/services/_bindings/sdk_services_IOSSystemContextMenuItemDataSearchWeb';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetsLocalizations';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetsLocalizations';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { _flaxMemberParameters201 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface IOSSystemContextMenuItemSearchWeb extends Omit<upstream0.IOSSystemContextMenuItem, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.IOSSystemContextMenuItem>, Readonly<{ "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::IOSSystemContextMenuItemSearchWeb": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::IOSSystemContextMenuItem": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __IOSSystemContextMenuItemSearchWeb: unique symbol;
readonly [_flaxDartTypeValue]: IOSSystemContextMenuItemSearchWeb;

readonly title: string | null;
getData(localizations: Readonly<{ "__flaxBound:package:flutter/src/widgets/localizations.dart::WidgetsLocalizations": readonly [] }>): upstream2.IOSSystemContextMenuItemDataSearchWeb;
toStringShort(): string;
toString(options?: {minLevel?: upstream4.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
}
defineObject("flax.core/sdk_widgets#type:IOSSystemContextMenuItemSearchWeb", ["title"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:IOSSystemContextMenuItemSearchWeb", "object", {"getData":_flaxMemberParameters201}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export function _IOSSystemContextMenuItemSearchWebFactory(options: { title?: string | null | undefined } = {}): IOSSystemContextMenuItemSearchWeb {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:IOSSystemContextMenuItemSearchWeb", "", [{"name":"title"}], [], options) as IOSSystemContextMenuItemSearchWeb;
}
export const IOSSystemContextMenuItemSearchWeb: typeof _IOSSystemContextMenuItemSearchWebFactory & _FlaxInstanceType<IOSSystemContextMenuItemSearchWeb> & _FlaxDartType<IOSSystemContextMenuItemSearchWeb, readonly ["class", "flax.core/sdk_widgets#type:IOSSystemContextMenuItemSearchWeb", readonly [], false]> = _flaxBindInstanceType<IOSSystemContextMenuItemSearchWeb, typeof _IOSSystemContextMenuItemSearchWebFactory>(_IOSSystemContextMenuItemSearchWebFactory, "flax.core/sdk_widgets#type:IOSSystemContextMenuItemSearchWeb", ["flax.core/sdk_widgets#type:IOSSystemContextMenuItem","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _IOSSystemContextMenuItemSearchWebFactory & _FlaxInstanceType<IOSSystemContextMenuItemSearchWeb> & _FlaxDartType<IOSSystemContextMenuItemSearchWeb, readonly ["class", "flax.core/sdk_widgets#type:IOSSystemContextMenuItemSearchWeb", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "title" | "getData" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::IOSSystemContextMenuItemSearchWeb" | "__flaxBound:package:flutter/src/widgets/system_context_menu.dart::IOSSystemContextMenuItem" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
