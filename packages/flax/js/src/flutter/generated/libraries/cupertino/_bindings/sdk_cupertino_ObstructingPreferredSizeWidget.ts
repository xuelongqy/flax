// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
const _flaxMemberParameters0 = [{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"}] as const;
const _flaxMemberParameters1 = [{"name":"key"}] as const;
const _flaxMemberParameters2 = [{"name":"joiner"},{"name":"minLevel"}] as const;
const _flaxMemberParameters3 = [{"name":"minLevel"},{"name":"prefixLineOne"},{"name":"prefixOtherLines"},{"name":"wrapWidth"}] as const;
const _flaxMemberParameters4 = [] as const;
const _flaxMemberParameters5 = [{"name":"name"},{"name":"style"}] as const;
const _flaxMemberParameters6 = [{"name":"properties","required":true,"positional":true}] as const;
const _flaxMemberParameters7 = [{"name":"minLevel"}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/cupertino/_bindings/sdk_cupertino.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ObstructingPreferredSizeWidget extends _FlaxDartWidget, Omit<Widget, _flaxOwnMembers0>, Omit<upstream0.PreferredSizeWidget, _flaxOwnMembers0 | keyof Widget>, Readonly<{ "__flaxBound:package:flutter/src/cupertino/page_scaffold.dart::ObstructingPreferredSizeWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/preferred_size.dart::PreferredSizeWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __ObstructingPreferredSizeWidget: unique symbol;
readonly [_flaxDartTypeValue]: ObstructingPreferredSizeWidget;

readonly preferredSize: upstream2.Size;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream3.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream3.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream5.DiagnosticsTreeStyle | null | undefined}): upstream4.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream4.DiagnosticsNode>;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream3.DiagnosticLevel | undefined}): string;
shouldFullyObstruct(context: upstream7.BuildContext): boolean;
}
defineObject("flax.core/sdk_cupertino#type:ObstructingPreferredSizeWidget", ["preferredSize"], [], _flaxBindingMethods("flax.core/sdk_cupertino#type:ObstructingPreferredSizeWidget", "object", {"shouldFullyObstruct":_flaxMemberParameters0}, {}), [], undefined, "flax.core/flutter#type:PreferredSizeWidget");
const _ObstructingPreferredSizeWidgetProxy = {nativeWidget: true, type: "flax.core/sdk_cupertino#type:ObstructingPreferredSizeWidget", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"toStringShallow":_flaxMemberParameters2,"toStringDeep":_flaxMemberParameters3,"toStringShort":_flaxMemberParameters4,"toDiagnosticsNode":_flaxMemberParameters5,"debugDescribeChildren":_flaxMemberParameters4,"debugFillProperties":_flaxMemberParameters6,"toString":_flaxMemberParameters7,"shouldFullyObstruct":_flaxMemberParameters0,"build":_flaxMemberParameters0}, getters: ["preferredSize"], setters: [], contextMembers: [], superMembers: ["toStringShallow","toStringDeep","toStringShort","toDiagnosticsNode","debugDescribeChildren","debugFillProperties","toString"]} as const;
export interface _ObstructingPreferredSizeWidgetImplementation extends ObstructingPreferredSizeWidget {
readonly [_flaxDartTypeValue]: _ObstructingPreferredSizeWidgetImplementation;

toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream3.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; minLevel?: upstream3.DiagnosticLevel | undefined; wrapWidth?: number | undefined}): string;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream5.DiagnosticsTreeStyle | null | undefined}): upstream4.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream4.DiagnosticsNode>;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream3.DiagnosticLevel | undefined}): string;
}
export abstract class _ObstructingPreferredSizeWidgetImplementation extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ObstructingPreferredSizeWidget>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ObstructingPreferredSizeWidget;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_cupertino#type:ObstructingPreferredSizeWidget", readonly [], false];
constructor(options?: {key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined}) { super(_ObstructingPreferredSizeWidgetProxy, Array.from(arguments)); }
abstract shouldFullyObstruct(context: upstream7.BuildContext): boolean;
abstract build(context: upstream7.BuildContext): Widget;
abstract get preferredSize(): upstream2.Size;
}
_flaxDefineProxyBase(_ObstructingPreferredSizeWidgetImplementation.prototype, _ObstructingPreferredSizeWidgetProxy);
export const ObstructingPreferredSizeWidget: typeof _ObstructingPreferredSizeWidgetImplementation & _FlaxInstanceType<ObstructingPreferredSizeWidget> & _FlaxDartType<ObstructingPreferredSizeWidget, readonly ["class", "flax.core/sdk_cupertino#type:ObstructingPreferredSizeWidget", readonly [], false]> = _flaxBindInstanceType<ObstructingPreferredSizeWidget, typeof _ObstructingPreferredSizeWidgetImplementation>(_ObstructingPreferredSizeWidgetImplementation, "flax.core/sdk_cupertino#type:ObstructingPreferredSizeWidget", ["dart:core::Object","flax.core/flutter#type:PreferredSizeWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _ObstructingPreferredSizeWidgetImplementation & _FlaxInstanceType<ObstructingPreferredSizeWidget> & _FlaxDartType<ObstructingPreferredSizeWidget, readonly ["class", "flax.core/sdk_cupertino#type:ObstructingPreferredSizeWidget", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "preferredSize" | "toStringShallow" | "toStringDeep" | "toStringShort" | "toDiagnosticsNode" | "debugDescribeChildren" | "debugFillProperties" | "toString" | "shouldFullyObstruct" | "__flaxBound:package:flutter/src/cupertino/page_scaffold.dart::ObstructingPreferredSizeWidget" | "__flaxBound:package:flutter/src/widgets/preferred_size.dart::PreferredSizeWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
