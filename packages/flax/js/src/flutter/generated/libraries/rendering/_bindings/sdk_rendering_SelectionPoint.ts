// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_TextSelectionHandleType';
import '@flax/flutter/rendering/_bindings/sdk_rendering_TextSelectionHandleType';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { _flaxMemberParameters343, _flaxMemberParameters1, _flaxMemberParameters16, _flaxMemberParameters15, _flaxMemberParameters12 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SelectionPoint extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionPoint": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __SelectionPoint: unique symbol;
readonly [_flaxDartTypeValue]: SelectionPoint;

readonly localPosition: upstream1.Offset;
readonly lineHeight: number;
readonly handleType: upstream2.TextSelectionHandleType;
toStringShort(): string;
toString(options?: {minLevel?: upstream3.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream5.DiagnosticsTreeStyle | null | undefined}): upstream4.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
}
defineObject("flax.core/sdk_rendering#type:SelectionPoint", ["localPosition","lineHeight","handleType"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:SelectionPoint", "object", {}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export function _SelectionPointFactory(options: { localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; lineHeight: number; handleType: upstream2.TextSelectionHandleType }): SelectionPoint {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:SelectionPoint", "", [{"name":"localPosition","required":true},{"name":"lineHeight","required":true},{"name":"handleType","required":true}], [], options) as SelectionPoint;
}
const _SelectionPointProxy = {type: "flax.core/sdk_rendering#type:SelectionPoint", parameters: _flaxMemberParameters343, constructors: {"": _flaxMemberParameters343}, methods: {"toStringShort":_flaxMemberParameters1,"toString":_flaxMemberParameters16,"toDiagnosticsNode":_flaxMemberParameters15,"debugFillProperties":_flaxMemberParameters12}, getters: ["localPosition","lineHeight","handleType"], setters: [], contextMembers: [], superMembers: ["get:localPosition","get:lineHeight","get:handleType","toStringShort","toString","toDiagnosticsNode","debugFillProperties"]} as const;
export interface _SelectionPointNative extends SelectionPoint {
readonly [_flaxDartTypeValue]: _SelectionPointNative;

toStringShort(): string;
toString(options?: {minLevel?: upstream3.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream5.DiagnosticsTreeStyle | null | undefined}): upstream4.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
get localPosition(): upstream1.Offset;
get lineHeight(): number;
get handleType(): upstream2.TextSelectionHandleType;
}
export abstract class _SelectionPointNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SelectionPoint>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SelectionPoint;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SelectionPoint", readonly [], false];
constructor(options: {localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; lineHeight: number; handleType: upstream2.TextSelectionHandleType}) { super(_SelectionPointProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_SelectionPointNative.prototype, _SelectionPointProxy);
export namespace _SelectionPointFactory { export function implement(args: [options: {localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; lineHeight: number; handleType: upstream2.TextSelectionHandleType}], implementation: {}): SelectionPoint {
return constructProxy(_SelectionPointProxy, args, implementation) as SelectionPoint; } }
const _SelectionPointBinding = _flaxProxyFactory(_SelectionPointFactory, _SelectionPointNative) as unknown as typeof _SelectionPointFactory & (new(options: {localPosition: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; lineHeight: number; handleType: upstream2.TextSelectionHandleType}) => _SelectionPointNative);
export const SelectionPoint: typeof _SelectionPointBinding & _FlaxInstanceType<SelectionPoint> & _FlaxDartType<SelectionPoint, readonly ["class", "flax.core/sdk_rendering#type:SelectionPoint", readonly [], false]> = _flaxBindInstanceType<SelectionPoint, typeof _SelectionPointBinding>(_SelectionPointBinding, "flax.core/sdk_rendering#type:SelectionPoint", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _SelectionPointBinding & _FlaxInstanceType<SelectionPoint> & _FlaxDartType<SelectionPoint, readonly ["class", "flax.core/sdk_rendering#type:SelectionPoint", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "localPosition" | "lineHeight" | "handleType" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionPoint" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
