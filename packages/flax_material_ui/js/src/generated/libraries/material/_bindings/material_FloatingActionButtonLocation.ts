// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream1 from '@flax/material-ui/_bindings/material_ScaffoldPrelayoutGeometry';
import '@flax/material-ui/_bindings/material_ScaffoldPrelayoutGeometry';
import { _flaxMemberParameters141, _flaxMemberParameters2 } from "@flax/material-ui/_bindings/material.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FloatingActionButtonLocation extends Readonly<{ "__flaxBound:package:material_ui/src/floating_action_button_location.dart::FloatingActionButtonLocation": readonly [] }> { readonly __FloatingActionButtonLocation: unique symbol;
readonly [_flaxDartTypeValue]: FloatingActionButtonLocation;

}
defineObject("flax.material/material#type:FloatingActionButtonLocation", [], [], _flaxBindingMethods("flax.material/material#type:FloatingActionButtonLocation", "object", {"getOffset":_flaxMemberParameters141,"toString":_flaxMemberParameters2}, {}), []);
const _FloatingActionButtonLocationProxy = {type: "flax.material/material#type:FloatingActionButtonLocation", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"getOffset":_flaxMemberParameters141,"toString":_flaxMemberParameters2}, getters: [], setters: [], contextMembers: [], superMembers: ["toString"]} as const;
export interface FloatingActionButtonLocation {
readonly [_flaxDartTypeValue]: FloatingActionButtonLocation;

toString(): string;
}
export abstract class FloatingActionButtonLocation extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FloatingActionButtonLocation>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: FloatingActionButtonLocation;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:FloatingActionButtonLocation", readonly [], false];
constructor() { super(_FloatingActionButtonLocationProxy, Array.from(arguments)); }
abstract getOffset(scaffoldGeometry: Readonly<{ "__flaxBound:package:material_ui/src/scaffold.dart::ScaffoldPrelayoutGeometry": readonly [] }>): upstream0.Offset;
}
_flaxDefineProxyBase(FloatingActionButtonLocation.prototype, _FloatingActionButtonLocationProxy);
export namespace FloatingActionButtonLocation { export function implement(args: [], implementation: {getOffset: ((scaffoldGeometry: upstream1.ScaffoldPrelayoutGeometry) => Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>)}): FloatingActionButtonLocation {
return constructProxy(_FloatingActionButtonLocationProxy, args, implementation) as FloatingActionButtonLocation; } }
export namespace FloatingActionButtonLocation { export declare const startTop: FloatingActionButtonLocation; }
export namespace FloatingActionButtonLocation { export declare const miniStartTop: FloatingActionButtonLocation; }
export namespace FloatingActionButtonLocation { export declare const centerTop: FloatingActionButtonLocation; }
export namespace FloatingActionButtonLocation { export declare const miniCenterTop: FloatingActionButtonLocation; }
export namespace FloatingActionButtonLocation { export declare const endTop: FloatingActionButtonLocation; }
export namespace FloatingActionButtonLocation { export declare const miniEndTop: FloatingActionButtonLocation; }
export namespace FloatingActionButtonLocation { export declare const startFloat: FloatingActionButtonLocation; }
export namespace FloatingActionButtonLocation { export declare const miniStartFloat: FloatingActionButtonLocation; }
export namespace FloatingActionButtonLocation { export declare const centerFloat: FloatingActionButtonLocation; }
export namespace FloatingActionButtonLocation { export declare const miniCenterFloat: FloatingActionButtonLocation; }
export namespace FloatingActionButtonLocation { export declare const endFloat: FloatingActionButtonLocation; }
export namespace FloatingActionButtonLocation { export declare const miniEndFloat: FloatingActionButtonLocation; }
export namespace FloatingActionButtonLocation { export declare const startDocked: FloatingActionButtonLocation; }
export namespace FloatingActionButtonLocation { export declare const miniStartDocked: FloatingActionButtonLocation; }
export namespace FloatingActionButtonLocation { export declare const centerDocked: FloatingActionButtonLocation; }
export namespace FloatingActionButtonLocation { export declare const miniCenterDocked: FloatingActionButtonLocation; }
export namespace FloatingActionButtonLocation { export declare const endDocked: FloatingActionButtonLocation; }
export namespace FloatingActionButtonLocation { export declare const miniEndDocked: FloatingActionButtonLocation; }
export namespace FloatingActionButtonLocation { export declare const endContained: FloatingActionButtonLocation; }
_flaxDefineStaticGetters(FloatingActionButtonLocation, "flax.material/material#read:FloatingActionButtonLocation.", ["startTop","miniStartTop","centerTop","miniCenterTop","endTop","miniEndTop","startFloat","miniStartFloat","centerFloat","miniCenterFloat","endFloat","miniEndFloat","startDocked","miniStartDocked","centerDocked","miniCenterDocked","endDocked","miniEndDocked","endContained"]);
_flaxBindInstanceType<FloatingActionButtonLocation, typeof FloatingActionButtonLocation>(FloatingActionButtonLocation, "flax.material/material#type:FloatingActionButtonLocation", ["dart:core::Object"]);
