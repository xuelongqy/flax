// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_PaintingContext';
import '@flax/flutter/rendering/_bindings/sdk_rendering_PaintingContext';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_Image';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Image';
import { _flaxMemberParameters393, _flaxMemberParameters394, _flaxMemberParameters395, _flaxMemberParameters2, _flaxMemberParameters12 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SnapshotPainter extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/widgets/snapshot_widget.dart::SnapshotPainter": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __SnapshotPainter: unique symbol;
readonly [_flaxDartTypeValue]: SnapshotPainter;

}
defineObject("flax.core/sdk_widgets#type:SnapshotPainter", ["hasListeners"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:SnapshotPainter", "object", {"paintSnapshot":_flaxMemberParameters393,"paint":_flaxMemberParameters394,"shouldRepaint":_flaxMemberParameters395}, {}), ["removeListener"], undefined, "flax.core/sdk_foundation#type:ChangeNotifier");
const _SnapshotPainterProxy = {type: "flax.core/sdk_widgets#type:SnapshotPainter", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"addListener":_flaxMemberParameters12,"removeListener":_flaxMemberParameters12,"dispose":_flaxMemberParameters2,"paintSnapshot":_flaxMemberParameters393,"paint":_flaxMemberParameters394,"shouldRepaint":_flaxMemberParameters395}, getters: ["hasListeners"], setters: [], contextMembers: [], superMembers: ["get:hasListeners","addListener","removeListener","dispose"]} as const;
export interface SnapshotPainter {
readonly [_flaxDartTypeValue]: SnapshotPainter;

addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
get hasListeners(): boolean;
}
export abstract class SnapshotPainter extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SnapshotPainter>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SnapshotPainter;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:SnapshotPainter", readonly [], false];
constructor() { super(_SnapshotPainterProxy, Array.from(arguments)); }
abstract paintSnapshot(context: Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::PaintingContext": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/clip.dart::ClipContext": readonly [] }>, offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, image: Readonly<{ "__flaxBound:dart:ui::Image": readonly [] }>, sourceSize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, pixelRatio: number): void;
abstract paint(context: Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::PaintingContext": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/clip.dart::ClipContext": readonly [] }>, offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, painter: ((context: upstream2.PaintingContext, offset: upstream3.Offset) => void)): void;
abstract shouldRepaint(oldPainter: Readonly<{ "__flaxBound:package:flutter/src/widgets/snapshot_widget.dart::SnapshotPainter": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>): boolean;
}
_flaxDefineProxyBase(SnapshotPainter.prototype, _SnapshotPainterProxy);
export namespace SnapshotPainter { export function implement(args: [], implementation: {paintSnapshot: ((context: upstream2.PaintingContext, offset: upstream3.Offset, size: upstream4.Size, image: upstream5.Image, sourceSize: upstream4.Size, pixelRatio: number) => void); paint: ((context: upstream2.PaintingContext, offset: upstream3.Offset, size: upstream4.Size, painter: ((context: Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::PaintingContext": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/clip.dart::ClipContext": readonly [] }>, offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>) => void)) => void); shouldRepaint: ((oldPainter: SnapshotPainter) => boolean)}): SnapshotPainter {
return constructProxy(_SnapshotPainterProxy, args, implementation) as SnapshotPainter; } }
_flaxBindInstanceType<SnapshotPainter, typeof SnapshotPainter>(SnapshotPainter, "flax.core/sdk_widgets#type:SnapshotPainter", ["flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "addListener" | "removeListener" | "dispose" | "paintSnapshot" | "paint" | "shouldRepaint" | "__flaxBound:package:flutter/src/widgets/snapshot_widget.dart::SnapshotPainter" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
