// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream1 from '@flax/material-ui/_bindings/material_PopupMenuButton';
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
import { _flaxMemberParameters4, _flaxMemberParameters5, _flaxMemberParameters6, _flaxMemberParameters7, _flaxMemberParameters0, _flaxMemberParameters1, _flaxMemberParameters112 } from "@flax/material-ui/_bindings/material.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PopupMenuButtonState<T extends unknown | null = unknown | null> extends Omit<upstream0.State<upstream1.PopupMenuButton<T>>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.State<upstream1.PopupMenuButton<T>>>, Readonly<{ "__flaxBound:package:material_ui/src/popup_menu.dart::PopupMenuButtonState": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream1.PopupMenuButton<T>] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __PopupMenuButtonState: unique symbol;
readonly [_flaxDartTypeValue]: PopupMenuButtonState<T>;

readonly widget: upstream1.PopupMenuButton<T>;
readonly context: upstream3.BuildContext;
readonly mounted: boolean;
toStringShort(): string;
toString(options?: {minLevel?: upstream4.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
didChangeDependencies(): void;
showButtonMenu(): void;
build(context: upstream3.BuildContext): Widget;
initState(): void;
didUpdateWidget(oldWidget: upstream1.PopupMenuButton<T>): void;
reassemble(): void;
setState(fn: (() => void)): void;
deactivate(): void;
activate(): void;
dispose(): void;
}
defineObject("flax.material/material#type:PopupMenuButtonState", ["widget","context","mounted"], [], _flaxBindingMethods("flax.material/material#type:PopupMenuButtonState", "object", {"toStringShort":_flaxMemberParameters4,"toString":_flaxMemberParameters5,"toDiagnosticsNode":_flaxMemberParameters6,"debugFillProperties":_flaxMemberParameters7,"didChangeDependencies":_flaxMemberParameters4,"showButtonMenu":_flaxMemberParameters4,"build":_flaxMemberParameters0,"initState":_flaxMemberParameters4,"didUpdateWidget":_flaxMemberParameters1,"reassemble":_flaxMemberParameters4,"setState":_flaxMemberParameters112,"deactivate":_flaxMemberParameters4,"activate":_flaxMemberParameters4,"dispose":_flaxMemberParameters4}, {}), []);
export function _PopupMenuButtonStateFactory<T extends unknown | null = unknown | null>(): PopupMenuButtonState<T>;
export function _PopupMenuButtonStateFactory(): PopupMenuButtonState<unknown | null>;
export function _PopupMenuButtonStateFactory(): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:PopupMenuButtonState", "", _flaxMemberParameters4, [], {}) as PopupMenuButtonState<unknown | null>;
}
export const PopupMenuButtonState: typeof _PopupMenuButtonStateFactory & _FlaxInstanceType<PopupMenuButtonState<unknown | null>> & _FlaxDartType<PopupMenuButtonState<unknown | null>, readonly ["class", "flax.material/material#type:PopupMenuButtonState", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<PopupMenuButtonState<unknown | null>, typeof _PopupMenuButtonStateFactory>(_PopupMenuButtonStateFactory, "flax.material/material#type:PopupMenuButtonState", ["flax.core/components#type:State","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _PopupMenuButtonStateFactory & _FlaxInstanceType<PopupMenuButtonState<unknown | null>> & _FlaxDartType<PopupMenuButtonState<unknown | null>, readonly ["class", "flax.material/material#type:PopupMenuButtonState", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(PopupMenuButtonState, "flax.material/material#type:PopupMenuButtonState", {"category":"object","constructors":{"":[]}});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "widget" | "context" | "mounted" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "didChangeDependencies" | "showButtonMenu" | "build" | "initState" | "didUpdateWidget" | "reassemble" | "setState" | "deactivate" | "activate" | "dispose" | "__flaxBound:package:material_ui/src/popup_menu.dart::PopupMenuButtonState" | "__flaxBound:package:flutter/src/widgets/framework.dart::State" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {(): PopupMenuButtonState<_Selected0>;readonly prototype: PopupMenuButtonState<_Selected0>;} & _FlaxInstanceType<PopupMenuButtonState<_Selected0>> & _FlaxDartType<PopupMenuButtonState<_Selected0>> : never : never; }
