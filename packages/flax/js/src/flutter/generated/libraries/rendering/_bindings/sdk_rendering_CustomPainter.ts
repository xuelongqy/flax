// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_CustomPainterSemantics';
import '@flax/flutter/rendering/_bindings/sdk_rendering_CustomPainterSemantics';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
const _flaxMemberParameters0 = [{"name":"canvas","required":true,"positional":true},{"name":"size","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"oldDelegate","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"position","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [] as const;
const _flaxMemberParameters4 = [{"name":"repaint"}] as const;
const _flaxMemberParameters5 = [{"name":"listener","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CustomPainter extends Omit<upstream0.Listenable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/custom_paint.dart::CustomPainter": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __CustomPainter: unique symbol;
readonly [_flaxDartTypeValue]: CustomPainter;

}
defineObject("flax.core/sdk_rendering#type:CustomPainter", ["semanticsBuilder"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:CustomPainter", "object", {"paint":_flaxMemberParameters0,"shouldRebuildSemantics":_flaxMemberParameters1,"shouldRepaint":_flaxMemberParameters1,"hitTest":_flaxMemberParameters2,"toString":_flaxMemberParameters3}, {}), ["removeListener"], undefined, "flax.core/flutter#type:Listenable");
const _CustomPainterProxy = {type: "flax.core/sdk_rendering#type:CustomPainter", parameters: _flaxMemberParameters4, constructors: {"": _flaxMemberParameters4}, methods: {"addListener":_flaxMemberParameters5,"removeListener":_flaxMemberParameters5,"paint":_flaxMemberParameters0,"shouldRebuildSemantics":_flaxMemberParameters1,"shouldRepaint":_flaxMemberParameters1,"hitTest":_flaxMemberParameters2,"toString":_flaxMemberParameters3}, getters: ["semanticsBuilder"], setters: [], contextMembers: [], superMembers: ["get:semanticsBuilder","addListener","removeListener","shouldRebuildSemantics","hitTest","toString"]} as const;
export interface CustomPainter {
readonly [_flaxDartTypeValue]: CustomPainter;

addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
shouldRebuildSemantics(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/rendering/custom_paint.dart::CustomPainter": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>): boolean;
hitTest(position: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): boolean | null;
toString(): string;
get semanticsBuilder(): ((size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>) => DartList<upstream1.CustomPainterSemantics>) | null;
}
export abstract class CustomPainter extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CustomPainter>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: CustomPainter;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:CustomPainter", readonly [], false];
constructor(options?: {repaint?: Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined}) { super(_CustomPainterProxy, Array.from(arguments)); }
abstract paint(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): void;
abstract shouldRepaint(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/rendering/custom_paint.dart::CustomPainter": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>): boolean;
}
_flaxDefineProxyBase(CustomPainter.prototype, _CustomPainterProxy);
export namespace CustomPainter { export function implement(args: [options?: {repaint?: Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined}], implementation: {paint: ((canvas: upstream3.Canvas, size: upstream2.Size) => void); shouldRepaint: ((oldDelegate: CustomPainter) => boolean)}): CustomPainter {
return constructProxy(_CustomPainterProxy, args, implementation) as CustomPainter; } }
_flaxBindInstanceType<CustomPainter, typeof CustomPainter>(CustomPainter, "flax.core/sdk_rendering#type:CustomPainter", ["flax.core/flutter#type:Listenable","dart:core::Object"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "semanticsBuilder" | "addListener" | "removeListener" | "paint" | "shouldRebuildSemantics" | "shouldRepaint" | "hitTest" | "toString" | "__flaxBound:package:flutter/src/rendering/custom_paint.dart::CustomPainter" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
