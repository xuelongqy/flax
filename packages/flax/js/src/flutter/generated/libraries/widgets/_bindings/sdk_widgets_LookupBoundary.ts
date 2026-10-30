// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedWidget';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ProxyWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedElement';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream7 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_Element';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Element';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { _flaxMemberParameters211, _flaxMemberParameters0, _flaxMemberParameters242 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface LookupBoundary extends _FlaxDartWidget, Omit<upstream0.InheritedWidget, _flaxOwnMembers0>, Omit<upstream1.ProxyWidget, _flaxOwnMembers0 | keyof upstream0.InheritedWidget>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.InheritedWidget | keyof upstream1.ProxyWidget>, Readonly<{ "__flaxBound:package:flutter/src/widgets/lookup_boundary.dart::LookupBoundary": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::InheritedWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __LookupBoundary: unique symbol;
readonly [_flaxDartTypeValue]: LookupBoundary;

readonly child: Widget;
readonly key: upstream2.Key | null;
updateShouldNotify(oldWidget: upstream0.InheritedWidget): boolean;
createElement(): upstream4.InheritedElement;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream10.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream10.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream12.DiagnosticsTreeStyle | null | undefined}): upstream11.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream11.DiagnosticsNode>;
}
defineObject("flax.core/sdk_widgets#type:LookupBoundary", ["child","key"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:LookupBoundary", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:InheritedWidget");
export function _LookupBoundaryFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; child: Widget }): LookupBoundary {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:LookupBoundary", "", [{"name":"key"},{"name":"child","required":true}], [], options) as LookupBoundary;
}
export declare namespace _LookupBoundaryFactory { const __flaxJsx: { readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _LookupBoundaryFactory>[0]>), "child"> & ({ "child": (globalThis.NonNullable<globalThis.Parameters<typeof _LookupBoundaryFactory>[0]>)["child"]; children?: never } | { "child"?: never; children: (globalThis.NonNullable<globalThis.Parameters<typeof _LookupBoundaryFactory>[0]>)["child"] }); readonly slot: "child"; readonly many: false; }; }
export namespace _LookupBoundaryFactory { function _flaxDefault_dependOnInheritedWidgetOfExactType<T extends upstream0.InheritedWidget = upstream0.InheritedWidget>(context: upstream3.BuildContext, options: { aspect?: unknown | null | undefined } = {}): T | null {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["aspect"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:LookupBoundary.dependOnInheritedWidgetOfExactType", [contextHandle(context, "flax.core/flutter#type:BuildContext"), options.aspect], _flaxMemberParameters211);
return _flaxResult as T | null;
}
export const dependOnInheritedWidgetOfExactType = _flaxDefineDartCallTypes(_flaxDefault_dependOnInheritedWidgetOfExactType, {"id":"flax.core/sdk_widgets#function:LookupBoundary.dependOnInheritedWidgetOfExactType","parameters":[{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"},{"name":"aspect"}]}) as _FlaxDartCallable<typeof _flaxDefault_dependOnInheritedWidgetOfExactType, _FlaxSignature0>;
}
export namespace _LookupBoundaryFactory { function _flaxDefault_getInheritedWidgetOfExactType<T extends upstream0.InheritedWidget = upstream0.InheritedWidget>(context: upstream3.BuildContext, options: { aspect?: unknown | null | undefined } = {}): T | null {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["aspect"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:LookupBoundary.getInheritedWidgetOfExactType", [contextHandle(context, "flax.core/flutter#type:BuildContext"), options.aspect], _flaxMemberParameters211);
return _flaxResult as T | null;
}
export const getInheritedWidgetOfExactType = _flaxDefineDartCallTypes(_flaxDefault_getInheritedWidgetOfExactType, {"id":"flax.core/sdk_widgets#function:LookupBoundary.getInheritedWidgetOfExactType","parameters":[{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"},{"name":"aspect"}]}) as _FlaxDartCallable<typeof _flaxDefault_getInheritedWidgetOfExactType, _FlaxSignature1>;
}
export namespace _LookupBoundaryFactory { function _flaxDefault_getElementForInheritedWidgetOfExactType<T extends upstream0.InheritedWidget = upstream0.InheritedWidget>(context: upstream3.BuildContext): upstream4.InheritedElement | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:LookupBoundary.getElementForInheritedWidgetOfExactType", [contextHandle(context, "flax.core/flutter#type:BuildContext")], _flaxMemberParameters0);
return _flaxResult as upstream4.InheritedElement | null;
}
export const getElementForInheritedWidgetOfExactType = _flaxDefineDartCallTypes(_flaxDefault_getElementForInheritedWidgetOfExactType, {"id":"flax.core/sdk_widgets#function:LookupBoundary.getElementForInheritedWidgetOfExactType","parameters":[{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"}]}) as _FlaxDartCallable<typeof _flaxDefault_getElementForInheritedWidgetOfExactType, _FlaxSignature2>;
}
export namespace _LookupBoundaryFactory { function _flaxDefault_findAncestorWidgetOfExactType<T extends Widget = Widget>(context: upstream3.BuildContext): T | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:LookupBoundary.findAncestorWidgetOfExactType", [contextHandle(context, "flax.core/flutter#type:BuildContext")], _flaxMemberParameters0);
return _flaxResult as T | null;
}
export const findAncestorWidgetOfExactType = _flaxDefineDartCallTypes(_flaxDefault_findAncestorWidgetOfExactType, {"id":"flax.core/sdk_widgets#function:LookupBoundary.findAncestorWidgetOfExactType","parameters":[{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"}]}) as _FlaxDartCallable<typeof _flaxDefault_findAncestorWidgetOfExactType, _FlaxSignature3>;
}
export namespace _LookupBoundaryFactory { function _flaxDefault_findAncestorStateOfType<T extends upstream5.State<Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>> = upstream5.State<upstream6.StatefulWidget>>(context: upstream3.BuildContext): T | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:LookupBoundary.findAncestorStateOfType", [contextHandle(context, "flax.core/flutter#type:BuildContext")], _flaxMemberParameters0);
return _flaxResult as T | null;
}
export const findAncestorStateOfType = _flaxDefineDartCallTypes(_flaxDefault_findAncestorStateOfType, {"id":"flax.core/sdk_widgets#function:LookupBoundary.findAncestorStateOfType","parameters":[{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"}]}) as _FlaxDartCallable<typeof _flaxDefault_findAncestorStateOfType, _FlaxSignature4>;
}
export namespace _LookupBoundaryFactory { function _flaxDefault_findRootAncestorStateOfType<T extends upstream5.State<Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>> = upstream5.State<upstream6.StatefulWidget>>(context: upstream3.BuildContext): T | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:LookupBoundary.findRootAncestorStateOfType", [contextHandle(context, "flax.core/flutter#type:BuildContext")], _flaxMemberParameters0);
return _flaxResult as T | null;
}
export const findRootAncestorStateOfType = _flaxDefineDartCallTypes(_flaxDefault_findRootAncestorStateOfType, {"id":"flax.core/sdk_widgets#function:LookupBoundary.findRootAncestorStateOfType","parameters":[{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"}]}) as _FlaxDartCallable<typeof _flaxDefault_findRootAncestorStateOfType, _FlaxSignature5>;
}
export namespace _LookupBoundaryFactory { function _flaxDefault_findAncestorRenderObjectOfType<T extends upstream7.RenderObject = upstream7.RenderObject>(context: upstream3.BuildContext): T | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:LookupBoundary.findAncestorRenderObjectOfType", [contextHandle(context, "flax.core/flutter#type:BuildContext")], _flaxMemberParameters0);
return _flaxResult as T | null;
}
export const findAncestorRenderObjectOfType = _flaxDefineDartCallTypes(_flaxDefault_findAncestorRenderObjectOfType, {"id":"flax.core/sdk_widgets#function:LookupBoundary.findAncestorRenderObjectOfType","parameters":[{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"}]}) as _FlaxDartCallable<typeof _flaxDefault_findAncestorRenderObjectOfType, _FlaxSignature6>;
}
export namespace _LookupBoundaryFactory { export function visitAncestorElements(context: upstream3.BuildContext, visitor: ((element: upstream8.Element) => boolean)): void {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:LookupBoundary.visitAncestorElements", [contextHandle(context, "flax.core/flutter#type:BuildContext"), visitor], _flaxMemberParameters242);
} }
export namespace _LookupBoundaryFactory { export function visitChildElements(context: upstream3.BuildContext, visitor: ((element: upstream8.Element) => void)): void {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:LookupBoundary.visitChildElements", [contextHandle(context, "flax.core/flutter#type:BuildContext"), visitor], _flaxMemberParameters242);
} }
export namespace _LookupBoundaryFactory { function _flaxDefault_debugIsHidingAncestorWidgetOfExactType<T extends Widget = Widget>(context: upstream3.BuildContext): boolean {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:LookupBoundary.debugIsHidingAncestorWidgetOfExactType", [contextHandle(context, "flax.core/flutter#type:BuildContext")], _flaxMemberParameters0);
return _flaxResult as boolean;
}
export const debugIsHidingAncestorWidgetOfExactType = _flaxDefineDartCallTypes(_flaxDefault_debugIsHidingAncestorWidgetOfExactType, {"id":"flax.core/sdk_widgets#function:LookupBoundary.debugIsHidingAncestorWidgetOfExactType","parameters":[{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"}]}) as _FlaxDartCallable<typeof _flaxDefault_debugIsHidingAncestorWidgetOfExactType, _FlaxSignature7>;
}
export namespace _LookupBoundaryFactory { function _flaxDefault_debugIsHidingAncestorStateOfType<T extends upstream5.State<Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>> = upstream5.State<upstream6.StatefulWidget>>(context: upstream3.BuildContext): boolean {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:LookupBoundary.debugIsHidingAncestorStateOfType", [contextHandle(context, "flax.core/flutter#type:BuildContext")], _flaxMemberParameters0);
return _flaxResult as boolean;
}
export const debugIsHidingAncestorStateOfType = _flaxDefineDartCallTypes(_flaxDefault_debugIsHidingAncestorStateOfType, {"id":"flax.core/sdk_widgets#function:LookupBoundary.debugIsHidingAncestorStateOfType","parameters":[{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"}]}) as _FlaxDartCallable<typeof _flaxDefault_debugIsHidingAncestorStateOfType, _FlaxSignature8>;
}
export namespace _LookupBoundaryFactory { function _flaxDefault_debugIsHidingAncestorRenderObjectOfType<T extends upstream7.RenderObject = upstream7.RenderObject>(context: upstream3.BuildContext): boolean {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:LookupBoundary.debugIsHidingAncestorRenderObjectOfType", [contextHandle(context, "flax.core/flutter#type:BuildContext")], _flaxMemberParameters0);
return _flaxResult as boolean;
}
export const debugIsHidingAncestorRenderObjectOfType = _flaxDefineDartCallTypes(_flaxDefault_debugIsHidingAncestorRenderObjectOfType, {"id":"flax.core/sdk_widgets#function:LookupBoundary.debugIsHidingAncestorRenderObjectOfType","parameters":[{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"}]}) as _FlaxDartCallable<typeof _flaxDefault_debugIsHidingAncestorRenderObjectOfType, _FlaxSignature9>;
}
export const LookupBoundary: typeof _LookupBoundaryFactory & _FlaxInstanceType<LookupBoundary> & _FlaxDartType<LookupBoundary, readonly ["class", "flax.core/sdk_widgets#type:LookupBoundary", readonly [], false]> = _flaxBindInstanceType<LookupBoundary, typeof _LookupBoundaryFactory>(_LookupBoundaryFactory, "flax.core/sdk_widgets#type:LookupBoundary", ["flax.core/sdk_widgets#type:InheritedWidget","flax.core/sdk_widgets#type:ProxyWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _LookupBoundaryFactory & _FlaxInstanceType<LookupBoundary> & _FlaxDartType<LookupBoundary, readonly ["class", "flax.core/sdk_widgets#type:LookupBoundary", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "child" | "key" | "updateShouldNotify" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/lookup_boundary.dart::LookupBoundary" | "__flaxBound:package:flutter/src/widgets/framework.dart::InheritedWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.InheritedWidget] ? (context: upstream3.BuildContext,options?: {aspect?: unknown | null | undefined}) => _Selected0 | null : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.InheritedWidget] ? (context: upstream3.BuildContext,options?: {aspect?: unknown | null | undefined}) => _Selected0 | null : never : never; }
interface _FlaxSignature2 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.InheritedWidget] ? (context: upstream3.BuildContext) => upstream4.InheritedElement | null : never : never; }
interface _FlaxSignature3 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [Widget] ? (context: upstream3.BuildContext) => _Selected0 | null : never : never; }
interface _FlaxSignature4 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream5.State<Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>] ? (context: upstream3.BuildContext) => _Selected0 | null : never : never; }
interface _FlaxSignature5 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream5.State<Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>] ? (context: upstream3.BuildContext) => _Selected0 | null : never : never; }
interface _FlaxSignature6 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream7.RenderObject] ? (context: upstream3.BuildContext) => _Selected0 | null : never : never; }
interface _FlaxSignature7 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [Widget] ? (context: upstream3.BuildContext) => boolean : never : never; }
interface _FlaxSignature8 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream5.State<Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>] ? (context: upstream3.BuildContext) => boolean : never : never; }
interface _FlaxSignature9 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream7.RenderObject] ? (context: upstream3.BuildContext) => boolean : never : never; }
