// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_PopupMenuItem';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"minLevel"}] as const;
const _flaxMemberParameters2 = [{"name":"name"},{"name":"style"}] as const;
const _flaxMemberParameters3 = [{"name":"properties","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"}] as const;
const _flaxMemberParameters5 = [{"name":"child","required":true}] as const;
const _flaxMemberParameters6 = [{"name":"oldWidget","required":true,"positional":true}] as const;
const _flaxMemberParameters7 = [{"name":"fn","required":true,"positional":true}] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PopupMenuItemState<T extends unknown | null = unknown | null, W extends upstream0.PopupMenuItem<T> = upstream0.PopupMenuItem<T>> extends Omit<upstream1.State<W>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream1.State<W>>, Readonly<{ "__flaxBound:package:flutter/src/material/popup_menu.dart::PopupMenuItemState": readonly [T, W] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [W] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __PopupMenuItemState: unique symbol;
readonly [_flaxDartTypeValue]: PopupMenuItemState<T, W>;

readonly widget: W;
readonly context: upstream3.BuildContext;
readonly mounted: boolean;
toStringShort(): string;
toString(options?: {minLevel?: upstream4.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
buildChild(): Widget | null;
handleTap(): void;
build(context: upstream3.BuildContext): Widget;
buildSemantics(options: {child: Widget}): Widget;
initState(): void;
didUpdateWidget(oldWidget: (W | DartInput<W>)): void;
reassemble(): void;
setState(fn: (() => void)): void;
deactivate(): void;
activate(): void;
dispose(): void;
didChangeDependencies(): void;
}
defineObject("flax.core/sdk_material#type:PopupMenuItemState", ["widget","context","mounted"], [], _flaxBindingMethods("flax.core/sdk_material#type:PopupMenuItemState", "object", {"toStringShort":_flaxMemberParameters0,"toString":_flaxMemberParameters1,"toDiagnosticsNode":_flaxMemberParameters2,"debugFillProperties":_flaxMemberParameters3,"buildChild":_flaxMemberParameters0,"handleTap":_flaxMemberParameters0,"build":_flaxMemberParameters4,"buildSemantics":_flaxMemberParameters5,"initState":_flaxMemberParameters0,"didUpdateWidget":_flaxMemberParameters6,"reassemble":_flaxMemberParameters0,"setState":_flaxMemberParameters7,"deactivate":_flaxMemberParameters0,"activate":_flaxMemberParameters0,"dispose":_flaxMemberParameters0,"didChangeDependencies":_flaxMemberParameters0}, {}), []);
export function _PopupMenuItemStateFactory<T extends unknown | null = unknown | null, W extends upstream0.PopupMenuItem<T> = upstream0.PopupMenuItem<T>>(): PopupMenuItemState<T, W>;
export function _PopupMenuItemStateFactory(): PopupMenuItemState<unknown | null, upstream0.PopupMenuItem<unknown | null>>;
export function _PopupMenuItemStateFactory(): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_material#type:PopupMenuItemState", "", _flaxMemberParameters0, [], {}) as PopupMenuItemState<unknown | null, upstream0.PopupMenuItem<unknown | null>>;
}
export const PopupMenuItemState: typeof _PopupMenuItemStateFactory & _FlaxInstanceType<PopupMenuItemState<unknown | null, upstream0.PopupMenuItem<unknown | null>>> & _FlaxDartType<PopupMenuItemState<unknown | null, upstream0.PopupMenuItem<unknown | null>>, readonly ["class", "flax.core/sdk_material#type:PopupMenuItemState", readonly [readonly ["any", null, readonly [], true], readonly ["class", "flax.core/sdk_material#type:PopupMenuItem", readonly [readonly ["any", null, readonly [], true]], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<PopupMenuItemState<unknown | null, upstream0.PopupMenuItem<unknown | null>>, typeof _PopupMenuItemStateFactory>(_PopupMenuItemStateFactory, "flax.core/sdk_material#type:PopupMenuItemState", ["flax.core/components#type:State","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _PopupMenuItemStateFactory & _FlaxInstanceType<PopupMenuItemState<unknown | null, upstream0.PopupMenuItem<unknown | null>>> & _FlaxDartType<PopupMenuItemState<unknown | null, upstream0.PopupMenuItem<unknown | null>>, readonly ["class", "flax.core/sdk_material#type:PopupMenuItemState", readonly [readonly ["any", null, readonly [], true], readonly ["class", "flax.core/sdk_material#type:PopupMenuItem", readonly [readonly ["any", null, readonly [], true]], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(PopupMenuItemState, "flax.core/sdk_material#type:PopupMenuItemState", {"category":"object","constructors":{"":[]}});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "widget" | "context" | "mounted" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "buildChild" | "handleTap" | "build" | "buildSemantics" | "initState" | "didUpdateWidget" | "reassemble" | "setState" | "deactivate" | "activate" | "dispose" | "didChangeDependencies" | "__flaxBound:package:flutter/src/material/popup_menu.dart::PopupMenuItemState" | "__flaxBound:package:flutter/src/widgets/framework.dart::State" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1 extends upstream0.PopupMenuItem<any>] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [upstream0.PopupMenuItem<_Selected0>] ? {(): PopupMenuItemState<_Selected0, _Selected1>;readonly prototype: PopupMenuItemState<_Selected0, _Selected1>;} & _FlaxInstanceType<PopupMenuItemState<_Selected0, _Selected1>> & _FlaxDartType<PopupMenuItemState<_Selected0, _Selected1>> : never : never : never; }
