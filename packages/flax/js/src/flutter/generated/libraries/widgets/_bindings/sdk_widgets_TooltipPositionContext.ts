// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import { _flaxMemberParameters419 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TooltipPositionContext extends Readonly<{ "__flaxBound:package:flutter/src/widgets/raw_tooltip.dart::TooltipPositionContext": readonly [] }> { readonly __TooltipPositionContext: unique symbol;
readonly [_flaxDartTypeValue]: TooltipPositionContext;

readonly target: upstream0.Offset;
readonly targetSize: upstream1.Size;
readonly tooltipSize: upstream1.Size;
readonly verticalOffset: number;
readonly preferBelow: boolean;
readonly overlaySize: upstream1.Size;
}
defineObject("flax.core/sdk_widgets#type:TooltipPositionContext", ["target","targetSize","tooltipSize","verticalOffset","preferBelow","overlaySize"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:TooltipPositionContext", "object", {}, {}), []);
export function _TooltipPositionContextFactory(options: { target: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; targetSize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; tooltipSize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; verticalOffset: number; preferBelow?: boolean | undefined; overlaySize?: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined }): TooltipPositionContext {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:TooltipPositionContext", "", [{"name":"target","required":true},{"name":"targetSize","required":true},{"name":"tooltipSize","required":true},{"name":"verticalOffset","required":true},{"name":"preferBelow"},{"name":"overlaySize"}], [], options) as TooltipPositionContext;
}
const _TooltipPositionContextProxy = {type: "flax.core/sdk_widgets#type:TooltipPositionContext", parameters: _flaxMemberParameters419, constructors: {"": _flaxMemberParameters419}, methods: {}, getters: ["target","targetSize","tooltipSize","verticalOffset","preferBelow","overlaySize"], setters: [], contextMembers: [], superMembers: ["get:target","get:targetSize","get:tooltipSize","get:verticalOffset","get:preferBelow","get:overlaySize"]} as const;
export interface _TooltipPositionContextNative extends TooltipPositionContext {
readonly [_flaxDartTypeValue]: _TooltipPositionContextNative;

get target(): upstream0.Offset;
get targetSize(): upstream1.Size;
get tooltipSize(): upstream1.Size;
get verticalOffset(): number;
get preferBelow(): boolean;
get overlaySize(): upstream1.Size;
}
export abstract class _TooltipPositionContextNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TooltipPositionContext>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TooltipPositionContext;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:TooltipPositionContext", readonly [], false];
constructor(options: {target: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; targetSize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; tooltipSize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; verticalOffset: number; preferBelow?: boolean | undefined; overlaySize?: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined}) { super(_TooltipPositionContextProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_TooltipPositionContextNative.prototype, _TooltipPositionContextProxy);
export namespace _TooltipPositionContextFactory { export function implement(args: [options: {target: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; targetSize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; tooltipSize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; verticalOffset: number; preferBelow?: boolean | undefined; overlaySize?: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined}], implementation: {}): TooltipPositionContext {
return constructProxy(_TooltipPositionContextProxy, args, implementation) as TooltipPositionContext; } }
const _TooltipPositionContextBinding = _flaxProxyFactory(_TooltipPositionContextFactory, _TooltipPositionContextNative) as unknown as typeof _TooltipPositionContextFactory & (new(options: {target: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; targetSize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; tooltipSize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; verticalOffset: number; preferBelow?: boolean | undefined; overlaySize?: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined}) => _TooltipPositionContextNative);
export const TooltipPositionContext: typeof _TooltipPositionContextBinding & _FlaxInstanceType<TooltipPositionContext> & _FlaxDartType<TooltipPositionContext, readonly ["class", "flax.core/sdk_widgets#type:TooltipPositionContext", readonly [], false]> = _flaxBindInstanceType<TooltipPositionContext, typeof _TooltipPositionContextBinding>(_TooltipPositionContextBinding, "flax.core/sdk_widgets#type:TooltipPositionContext", ["dart:core::Object"]) as typeof _TooltipPositionContextBinding & _FlaxInstanceType<TooltipPositionContext> & _FlaxDartType<TooltipPositionContext, readonly ["class", "flax.core/sdk_widgets#type:TooltipPositionContext", readonly [], false]>;
