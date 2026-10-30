// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_RootElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RootElement';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_BuildOwner';
import '@flax/flutter/widgets/_bindings/sdk_widgets_BuildOwner';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { _flaxMemberParameters2, _flaxMemberParameters346 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RootWidget extends _FlaxDartWidget, Omit<Widget, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/binding.dart::RootWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __RootWidget: unique symbol;
readonly [_flaxDartTypeValue]: RootWidget;

readonly child: Widget | null;
readonly debugShortDescription: string | null;
readonly key: upstream0.Key | null;
createElement(): upstream1.RootElement;
attach(owner: Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::BuildOwner": readonly [] }>, element?: Readonly<{ "__flaxBound:package:flutter/src/widgets/binding.dart::RootElement": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::RootElementMixin": readonly [] }> | null): upstream1.RootElement;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream4.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream4.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream5.DiagnosticsNode>;
}
defineObject("flax.core/sdk_widgets#type:RootWidget", ["child","debugShortDescription","key"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:RootWidget", "object", {"createElement":_flaxMemberParameters2,"attach":_flaxMemberParameters346}, {}), [], undefined, "flax.core/sdk_widgets#type:Widget");
export function _RootWidgetFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; child?: Widget | null | undefined; debugShortDescription?: string | null | undefined } = {}): RootWidget {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:RootWidget", "", [{"name":"key"},{"name":"child"},{"name":"debugShortDescription"}], [], options) as RootWidget;
}
export declare namespace _RootWidgetFactory { const __flaxJsx: { readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _RootWidgetFactory>[0]>), "child"> & ({ "child"?: (globalThis.NonNullable<globalThis.Parameters<typeof _RootWidgetFactory>[0]>)["child"]; children?: never } | { "child"?: never; children?: (globalThis.NonNullable<globalThis.Parameters<typeof _RootWidgetFactory>[0]>)["child"] }); readonly slot: "child"; readonly many: false; }; }
export const RootWidget: typeof _RootWidgetFactory & _FlaxInstanceType<RootWidget> & _FlaxDartType<RootWidget, readonly ["class", "flax.core/sdk_widgets#type:RootWidget", readonly [], false]> = _flaxBindInstanceType<RootWidget, typeof _RootWidgetFactory>(_RootWidgetFactory, "flax.core/sdk_widgets#type:RootWidget", ["flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _RootWidgetFactory & _FlaxInstanceType<RootWidget> & _FlaxDartType<RootWidget, readonly ["class", "flax.core/sdk_widgets#type:RootWidget", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "child" | "debugShortDescription" | "key" | "createElement" | "attach" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/binding.dart::RootWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
