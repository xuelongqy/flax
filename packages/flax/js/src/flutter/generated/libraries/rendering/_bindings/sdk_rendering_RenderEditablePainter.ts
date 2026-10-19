// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream4 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderEditable';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderEditable';
import type * as upstream5 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream6 from '@flax/flutter/rendering/_bindings/sdk_rendering_TextParentData';
const _flaxMemberParameters0 = [{"name":"oldDelegate","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"canvas","required":true,"positional":true},{"name":"size","required":true,"positional":true},{"name":"renderEditable","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [] as const;
const _flaxMemberParameters3 = [{"name":"listener","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RenderEditablePainter extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/rendering/editable.dart::RenderEditablePainter": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __RenderEditablePainter: unique symbol;
readonly [_flaxDartTypeValue]: RenderEditablePainter;

}
defineObject("flax.core/sdk_rendering#type:RenderEditablePainter", ["hasListeners"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:RenderEditablePainter", "object", {"shouldRepaint":_flaxMemberParameters0,"paint":_flaxMemberParameters1}, {}), ["removeListener"], undefined, "flax.core/sdk_foundation#type:ChangeNotifier");
const _RenderEditablePainterProxy = {type: "flax.core/sdk_rendering#type:RenderEditablePainter", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"addListener":_flaxMemberParameters3,"removeListener":_flaxMemberParameters3,"dispose":_flaxMemberParameters2,"shouldRepaint":_flaxMemberParameters0,"paint":_flaxMemberParameters1}, getters: ["hasListeners"], setters: [], contextMembers: [], superMembers: ["get:hasListeners","addListener","removeListener","dispose"]} as const;
export interface RenderEditablePainter {
readonly [_flaxDartTypeValue]: RenderEditablePainter;

addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
get hasListeners(): boolean;
}
export abstract class RenderEditablePainter extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RenderEditablePainter>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: RenderEditablePainter;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:RenderEditablePainter", readonly [], false];
constructor() { super(_RenderEditablePainterProxy, Array.from(arguments)); }
abstract shouldRepaint(oldDelegate: Readonly<{ "__flaxBound:package:flutter/src/rendering/editable.dart::RenderEditablePainter": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null): boolean;
abstract paint(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, renderEditable: Readonly<{ "__flaxBound:package:flutter/src/rendering/editable.dart::RenderEditable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/text_layout_metrics.dart::TextLayoutMetrics": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RelayoutWhenSystemFontsChangeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::ContainerRenderObjectMixin": readonly [upstream5.RenderBox, upstream6.TextParentData] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/paragraph.dart::RenderInlineChildrenContainerDefaults": readonly [] }>): void;
}
_flaxDefineProxyBase(RenderEditablePainter.prototype, _RenderEditablePainterProxy);
export namespace RenderEditablePainter { export function implement(args: [], implementation: {shouldRepaint: ((oldDelegate: RenderEditablePainter | null) => boolean); paint: ((canvas: upstream2.Canvas, size: upstream3.Size, renderEditable: upstream4.RenderEditable) => void)}): RenderEditablePainter {
return constructProxy(_RenderEditablePainterProxy, args, implementation) as RenderEditablePainter; } }
_flaxBindInstanceType<RenderEditablePainter, typeof RenderEditablePainter>(RenderEditablePainter, "flax.core/sdk_rendering#type:RenderEditablePainter", ["flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "addListener" | "removeListener" | "dispose" | "shouldRepaint" | "paint" | "__flaxBound:package:flutter/src/rendering/editable.dart::RenderEditablePainter" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
