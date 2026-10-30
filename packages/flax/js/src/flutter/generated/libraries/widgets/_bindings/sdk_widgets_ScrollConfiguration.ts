// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedWidget';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ProxyWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollBehavior';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollBehavior';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedElement';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { _flaxMemberParameters0, _flaxMemberParameters3 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ScrollConfiguration extends _FlaxDartWidget, Omit<upstream0.InheritedWidget, _flaxOwnMembers0>, Omit<upstream1.ProxyWidget, _flaxOwnMembers0 | keyof upstream0.InheritedWidget>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.InheritedWidget | keyof upstream1.ProxyWidget>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_configuration.dart::ScrollConfiguration": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::InheritedWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __ScrollConfiguration: unique symbol;
readonly [_flaxDartTypeValue]: ScrollConfiguration;

readonly behavior: upstream3.ScrollBehavior;
readonly child: Widget;
readonly key: upstream2.Key | null;
updateShouldNotify(oldWidget: ScrollConfiguration): boolean;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
createElement(): upstream6.InheritedElement;
toStringShort(): string;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream7.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream7.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream9.DiagnosticsTreeStyle | null | undefined}): upstream8.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream8.DiagnosticsNode>;
}
defineObject("flax.core/sdk_widgets#type:ScrollConfiguration", ["behavior","child","key"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ScrollConfiguration", "object", {"updateShouldNotify":_flaxMemberParameters3}, {}), [], undefined, "flax.core/sdk_widgets#type:InheritedWidget");
export function _ScrollConfigurationFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; behavior: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_configuration.dart::ScrollBehavior": readonly [] }>; child: Widget }): ScrollConfiguration {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:ScrollConfiguration", "", [{"name":"key"},{"name":"behavior","required":true},{"name":"child","required":true}], [], options) as ScrollConfiguration;
}
export declare namespace _ScrollConfigurationFactory { const __flaxJsx: { readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _ScrollConfigurationFactory>[0]>), "child"> & ({ "child": (globalThis.NonNullable<globalThis.Parameters<typeof _ScrollConfigurationFactory>[0]>)["child"]; children?: never } | { "child"?: never; children: (globalThis.NonNullable<globalThis.Parameters<typeof _ScrollConfigurationFactory>[0]>)["child"] }); readonly slot: "child"; readonly many: false; }; }
export namespace _ScrollConfigurationFactory { export function of(context: upstream4.BuildContext): upstream3.ScrollBehavior {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:ScrollConfiguration.of", [contextHandle(context, "flax.core/flutter#type:BuildContext")], _flaxMemberParameters0);
return _flaxResult as upstream3.ScrollBehavior;
} }
export const ScrollConfiguration: typeof _ScrollConfigurationFactory & _FlaxInstanceType<ScrollConfiguration> & _FlaxDartType<ScrollConfiguration, readonly ["class", "flax.core/sdk_widgets#type:ScrollConfiguration", readonly [], false]> = _flaxBindInstanceType<ScrollConfiguration, typeof _ScrollConfigurationFactory>(_ScrollConfigurationFactory, "flax.core/sdk_widgets#type:ScrollConfiguration", ["flax.core/sdk_widgets#type:InheritedWidget","flax.core/sdk_widgets#type:ProxyWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _ScrollConfigurationFactory & _FlaxInstanceType<ScrollConfiguration> & _FlaxDartType<ScrollConfiguration, readonly ["class", "flax.core/sdk_widgets#type:ScrollConfiguration", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "behavior" | "child" | "key" | "updateShouldNotify" | "debugFillProperties" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/scroll_configuration.dart::ScrollConfiguration" | "__flaxBound:package:flutter/src/widgets/framework.dart::InheritedWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
