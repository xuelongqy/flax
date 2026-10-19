// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
const _flaxMemberParameters0 = [{"name":"target","required":true},{"name":"targetSize","required":true},{"name":"tooltipSize","required":true},{"name":"verticalOffset","required":true},{"name":"preferBelow"},{"name":"overlaySize"}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TooltipPositionContext extends Readonly<{ "__flaxBound:package:flutter/src/widgets/raw_tooltip.dart::TooltipPositionContext": readonly [] }> { readonly __TooltipPositionContext: unique symbol;
readonly [_flaxDartTypeValue]: TooltipPositionContext;

}
defineObject("flax.core/sdk_widgets#type:TooltipPositionContext", ["target","targetSize","tooltipSize","verticalOffset","preferBelow","overlaySize"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:TooltipPositionContext", "object", {}, {}), []);
const _TooltipPositionContextProxy = {type: "flax.core/sdk_widgets#type:TooltipPositionContext", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {}, getters: ["target","targetSize","tooltipSize","verticalOffset","preferBelow","overlaySize"], setters: [], contextMembers: [], superMembers: ["get:target","get:targetSize","get:tooltipSize","get:verticalOffset","get:preferBelow","get:overlaySize"]} as const;
export interface TooltipPositionContext {
readonly [_flaxDartTypeValue]: TooltipPositionContext;

get target(): upstream0.Offset;
get targetSize(): upstream1.Size;
get tooltipSize(): upstream1.Size;
get verticalOffset(): number;
get preferBelow(): boolean;
get overlaySize(): upstream1.Size;
}
export abstract class TooltipPositionContext extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TooltipPositionContext>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TooltipPositionContext;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:TooltipPositionContext", readonly [], false];
constructor(options: {target: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; targetSize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; tooltipSize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; verticalOffset: number; preferBelow?: boolean | undefined; overlaySize?: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined}) { super(_TooltipPositionContextProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(TooltipPositionContext.prototype, _TooltipPositionContextProxy);
export namespace TooltipPositionContext { export function implement(args: [options: {target: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; targetSize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; tooltipSize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; verticalOffset: number; preferBelow?: boolean | undefined; overlaySize?: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined}], implementation: {}): TooltipPositionContext {
return constructProxy(_TooltipPositionContextProxy, args, implementation) as TooltipPositionContext; } }
_flaxBindInstanceType<TooltipPositionContext, typeof TooltipPositionContext>(TooltipPositionContext, "flax.core/sdk_widgets#type:TooltipPositionContext", ["dart:core::Object"]);
