// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { _flaxMemberParameters228, _flaxMemberParameters229, _flaxMemberParameters4 } from "@flax/material-ui/_bindings/material.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MenuAcceleratorLabel extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{ "__flaxBound:package:material_ui/src/menu_anchor.dart::MenuAcceleratorLabel": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __MenuAcceleratorLabel: unique symbol;
readonly [_flaxDartTypeValue]: MenuAcceleratorLabel;

readonly label: string;
readonly displayLabel: string;
readonly builder: ((context: upstream2.BuildContext, label: string, index: number) => Widget);
readonly hasAccelerator: boolean;
readonly key: upstream1.Key | null;
createState(): upstream3.State<MenuAcceleratorLabel>;
toString(options?: {minLevel?: upstream4.DiagnosticLevel | undefined}): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
createElement(): upstream6.StatefulElement;
toStringShort(): string;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream4.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream4.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream8.DiagnosticsTreeStyle | null | undefined}): upstream7.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream7.DiagnosticsNode>;
}
defineObject("flax.material/material#type:MenuAcceleratorLabel", ["label","displayLabel","builder","hasAccelerator","key"], [], _flaxBindingMethods("flax.material/material#type:MenuAcceleratorLabel", "object", {"createState":_flaxMemberParameters4,"createElement":_flaxMemberParameters4}, {}), [], undefined, "flax.core/components#type:StatefulWidget");
export function _MenuAcceleratorLabelFactory(label: string, options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; builder?: ((context: upstream2.BuildContext, label: string, index: number) => Widget) | undefined } = {}): MenuAcceleratorLabel {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:MenuAcceleratorLabel", "", [{"name":"label","required":true,"positional":true},{"name":"key"},{"name":"builder"}], [label], options) as MenuAcceleratorLabel;
}
export declare namespace _MenuAcceleratorLabelFactory { const __flaxJsx: { readonly props: ({ "label": globalThis.Parameters<typeof _MenuAcceleratorLabelFactory>[0] } & globalThis.NonNullable<globalThis.Parameters<typeof _MenuAcceleratorLabelFactory>[1]>); readonly slot: null; readonly many: false; }; }
export namespace _MenuAcceleratorLabelFactory { export function defaultLabelBuilder(context: upstream2.BuildContext, label: string, index: number): Widget {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:MenuAcceleratorLabel.defaultLabelBuilder", [contextHandle(context, "flax.core/flutter#type:BuildContext"), label, index], _flaxMemberParameters228);
return _flaxResult as Widget;
} }
export namespace _MenuAcceleratorLabelFactory { export function stripAcceleratorMarkers(label: string, options: { setIndex?: ((index: number) => void) | null | undefined } = {}): string {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["setIndex"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:MenuAcceleratorLabel.stripAcceleratorMarkers", [label, options.setIndex], _flaxMemberParameters229);
return _flaxResult as string;
} }
export const MenuAcceleratorLabel: typeof _MenuAcceleratorLabelFactory & _FlaxInstanceType<MenuAcceleratorLabel> & _FlaxDartType<MenuAcceleratorLabel, readonly ["class", "flax.material/material#type:MenuAcceleratorLabel", readonly [], false]> = _flaxBindInstanceType<MenuAcceleratorLabel, typeof _MenuAcceleratorLabelFactory>(_MenuAcceleratorLabelFactory, "flax.material/material#type:MenuAcceleratorLabel", ["flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _MenuAcceleratorLabelFactory & _FlaxInstanceType<MenuAcceleratorLabel> & _FlaxDartType<MenuAcceleratorLabel, readonly ["class", "flax.material/material#type:MenuAcceleratorLabel", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "label" | "displayLabel" | "builder" | "hasAccelerator" | "key" | "createState" | "toString" | "debugFillProperties" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:material_ui/src/menu_anchor.dart::MenuAcceleratorLabel" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
