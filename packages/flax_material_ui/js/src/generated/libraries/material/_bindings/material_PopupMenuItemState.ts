// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/material-ui/_bindings/material_PopupMenuItem';
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
import { _flaxMemberParameters2, _flaxMemberParameters3, _flaxMemberParameters4, _flaxMemberParameters5, _flaxMemberParameters9, _flaxMemberParameters226, _flaxMemberParameters0, _flaxMemberParameters102 } from "@flax/material-ui/_bindings/material.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PopupMenuItemState<T extends unknown | null = unknown | null, W extends upstream0.PopupMenuItem<T> = upstream0.PopupMenuItem<T>> extends Omit<upstream1.State<W>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream1.State<W>>, Readonly<{ "__flaxBound:package:material_ui/src/popup_menu.dart::PopupMenuItemState": readonly [T, W] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [W] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __PopupMenuItemState: unique symbol;
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
defineObject("flax.material/material#type:PopupMenuItemState", ["widget","context","mounted"], [], _flaxBindingMethods("flax.material/material#type:PopupMenuItemState", "object", {"toStringShort":_flaxMemberParameters2,"toString":_flaxMemberParameters3,"toDiagnosticsNode":_flaxMemberParameters4,"debugFillProperties":_flaxMemberParameters5,"buildChild":_flaxMemberParameters2,"handleTap":_flaxMemberParameters2,"build":_flaxMemberParameters9,"buildSemantics":_flaxMemberParameters226,"initState":_flaxMemberParameters2,"didUpdateWidget":_flaxMemberParameters0,"reassemble":_flaxMemberParameters2,"setState":_flaxMemberParameters102,"deactivate":_flaxMemberParameters2,"activate":_flaxMemberParameters2,"dispose":_flaxMemberParameters2,"didChangeDependencies":_flaxMemberParameters2}, {}), []);
export function _PopupMenuItemStateFactory<T extends unknown | null = unknown | null, W extends upstream0.PopupMenuItem<T> = upstream0.PopupMenuItem<T>>(): PopupMenuItemState<T, W>;
export function _PopupMenuItemStateFactory(): PopupMenuItemState<unknown | null, upstream0.PopupMenuItem<unknown | null>>;
export function _PopupMenuItemStateFactory(): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:PopupMenuItemState", "", _flaxMemberParameters2, [], {}) as PopupMenuItemState<unknown | null, upstream0.PopupMenuItem<unknown | null>>;
}
export const PopupMenuItemState: typeof _PopupMenuItemStateFactory & _FlaxInstanceType<PopupMenuItemState<unknown | null, upstream0.PopupMenuItem<unknown | null>>> & _FlaxDartType<PopupMenuItemState<unknown | null, upstream0.PopupMenuItem<unknown | null>>, readonly ["class", "flax.material/material#type:PopupMenuItemState", readonly [readonly ["any", null, readonly [], true], readonly ["class", "flax.material/material#type:PopupMenuItem", readonly [readonly ["any", null, readonly [], true]], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<PopupMenuItemState<unknown | null, upstream0.PopupMenuItem<unknown | null>>, typeof _PopupMenuItemStateFactory>(_PopupMenuItemStateFactory, "flax.material/material#type:PopupMenuItemState", ["flax.core/components#type:State","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _PopupMenuItemStateFactory & _FlaxInstanceType<PopupMenuItemState<unknown | null, upstream0.PopupMenuItem<unknown | null>>> & _FlaxDartType<PopupMenuItemState<unknown | null, upstream0.PopupMenuItem<unknown | null>>, readonly ["class", "flax.material/material#type:PopupMenuItemState", readonly [readonly ["any", null, readonly [], true], readonly ["class", "flax.material/material#type:PopupMenuItem", readonly [readonly ["any", null, readonly [], true]], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(PopupMenuItemState, "flax.material/material#type:PopupMenuItemState", {"category":"object","constructors":{"":[]}});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "widget" | "context" | "mounted" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "buildChild" | "handleTap" | "build" | "buildSemantics" | "initState" | "didUpdateWidget" | "reassemble" | "setState" | "deactivate" | "activate" | "dispose" | "didChangeDependencies" | "__flaxBound:package:material_ui/src/popup_menu.dart::PopupMenuItemState" | "__flaxBound:package:flutter/src/widgets/framework.dart::State" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1 extends upstream0.PopupMenuItem<any>] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [upstream0.PopupMenuItem<_Selected0>] ? {(): PopupMenuItemState<_Selected0, _Selected1>;readonly prototype: PopupMenuItemState<_Selected0, _Selected1>;} & _FlaxInstanceType<PopupMenuItemState<_Selected0, _Selected1>> & _FlaxDartType<PopupMenuItemState<_Selected0, _Selected1>> : never : never : never; }
