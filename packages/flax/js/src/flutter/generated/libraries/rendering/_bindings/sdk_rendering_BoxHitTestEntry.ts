// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestEntry';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestEntry';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import { _flaxMemberParameters1, _flaxMemberParameters21 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BoxHitTestEntry extends Omit<upstream0.HitTestEntry<upstream1.RenderBox>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxHitTestEntry": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestEntry": readonly [upstream1.RenderBox] }> { readonly __BoxHitTestEntry: unique symbol;
readonly [_flaxDartTypeValue]: BoxHitTestEntry;

readonly target: upstream1.RenderBox;
readonly transform: upstream3.Matrix4 | null;
readonly localPosition: upstream2.Offset;
toString(): string;
}
defineObject("flax.core/sdk_rendering#type:BoxHitTestEntry", ["target","transform","localPosition"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:BoxHitTestEntry", "object", {"toString":_flaxMemberParameters1}, {}), []);
export function _BoxHitTestEntryFactory(target: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): BoxHitTestEntry {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:BoxHitTestEntry", "", [{"name":"target","required":true,"positional":true},{"name":"localPosition","required":true,"positional":true}], [target, localPosition], {}) as BoxHitTestEntry;
}
const _BoxHitTestEntryProxy = {type: "flax.core/sdk_rendering#type:BoxHitTestEntry", parameters: _flaxMemberParameters21, constructors: {"": _flaxMemberParameters21}, methods: {"toString":_flaxMemberParameters1}, getters: ["localPosition","target","transform"], setters: [], contextMembers: [], superMembers: ["get:localPosition","get:target","get:transform","toString"]} as const;
export interface _BoxHitTestEntryNative extends BoxHitTestEntry {
readonly [_flaxDartTypeValue]: _BoxHitTestEntryNative;

toString(): string;
get localPosition(): upstream2.Offset;
get target(): upstream1.RenderBox;
get transform(): upstream3.Matrix4 | null;
}
export abstract class _BoxHitTestEntryNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BoxHitTestEntry>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: BoxHitTestEntry;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:BoxHitTestEntry", readonly [], false];
constructor(target: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>) { super(_BoxHitTestEntryProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_BoxHitTestEntryNative.prototype, _BoxHitTestEntryProxy);
export namespace _BoxHitTestEntryFactory { export function implement(args: [target: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>], implementation: {}): BoxHitTestEntry {
return constructProxy(_BoxHitTestEntryProxy, args, implementation) as BoxHitTestEntry; } }
const _BoxHitTestEntryBinding = _flaxProxyFactory(_BoxHitTestEntryFactory, _BoxHitTestEntryNative) as unknown as typeof _BoxHitTestEntryFactory & (new(target: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>) => _BoxHitTestEntryNative);
export const BoxHitTestEntry: typeof _BoxHitTestEntryBinding & _FlaxInstanceType<BoxHitTestEntry> & _FlaxDartType<BoxHitTestEntry, readonly ["class", "flax.core/sdk_rendering#type:BoxHitTestEntry", readonly [], false]> = _flaxBindInstanceType<BoxHitTestEntry, typeof _BoxHitTestEntryBinding>(_BoxHitTestEntryBinding, "flax.core/sdk_rendering#type:BoxHitTestEntry", ["flax.core/sdk_gestures#type:HitTestEntry","dart:core::Object"]) as typeof _BoxHitTestEntryBinding & _FlaxInstanceType<BoxHitTestEntry> & _FlaxDartType<BoxHitTestEntry, readonly ["class", "flax.core/sdk_rendering#type:BoxHitTestEntry", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "target" | "transform" | "localPosition" | "toString" | "__flaxBound:package:flutter/src/rendering/box.dart::BoxHitTestEntry" | "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestEntry";
