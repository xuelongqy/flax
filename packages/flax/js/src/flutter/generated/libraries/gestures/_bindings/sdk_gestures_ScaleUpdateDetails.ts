// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"minLevel","required":false,"positional":false}] as const;
const _flaxMemberParameters2 = [{"name":"name","required":false,"positional":false},{"name":"style","required":false,"positional":false}] as const;
const _flaxMemberParameters3 = [{"name":"properties","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ScaleUpdateDetails extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/gestures/scale.dart::ScaleUpdateDetails": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __ScaleUpdateDetails: unique symbol;
readonly [_flaxDartTypeValue]: ScaleUpdateDetails;

}
defineObject("flax.core/sdk_gestures#type:ScaleUpdateDetails", ["focalPointDelta","focalPoint","localFocalPoint","scale","horizontalScale","verticalScale","rotation","pointerCount","sourceTimeStamp"], [], _flaxBindingMethods("flax.core/sdk_gestures#type:ScaleUpdateDetails", "object", {}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
const _ScaleUpdateDetailsProxy = {type: "flax.core/sdk_gestures#type:ScaleUpdateDetails", parameters: [{"name":"focalPoint","required":false,"positional":false},{"name":"localFocalPoint","required":false,"positional":false},{"name":"scale","required":false,"positional":false},{"name":"horizontalScale","required":false,"positional":false},{"name":"verticalScale","required":false,"positional":false},{"name":"rotation","required":false,"positional":false},{"name":"pointerCount","required":false,"positional":false},{"name":"focalPointDelta","required":false,"positional":false},{"name":"sourceTimeStamp","required":false,"positional":false}], constructors: {"":[{"name":"focalPoint","required":false,"positional":false},{"name":"localFocalPoint","required":false,"positional":false},{"name":"scale","required":false,"positional":false},{"name":"horizontalScale","required":false,"positional":false},{"name":"verticalScale","required":false,"positional":false},{"name":"rotation","required":false,"positional":false},{"name":"pointerCount","required":false,"positional":false},{"name":"focalPointDelta","required":false,"positional":false},{"name":"sourceTimeStamp","required":false,"positional":false}]}, methods: {"toStringShort":_flaxMemberParameters0,"toString":_flaxMemberParameters1,"toDiagnosticsNode":_flaxMemberParameters2,"debugFillProperties":_flaxMemberParameters3}, getters: ["focalPointDelta","focalPoint","localFocalPoint","scale","horizontalScale","verticalScale","rotation","pointerCount","sourceTimeStamp"], setters: [], contextMembers: [], superMembers: ["get:focalPointDelta","get:focalPoint","get:localFocalPoint","get:scale","get:horizontalScale","get:verticalScale","get:rotation","get:pointerCount","get:sourceTimeStamp","toStringShort","toString","toDiagnosticsNode","debugFillProperties"]} as const;
export interface ScaleUpdateDetails {
readonly [_flaxDartTypeValue]: ScaleUpdateDetails;

toStringShort(): string;
toString(options?: {minLevel?: upstream3.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream5.DiagnosticsTreeStyle | null | undefined}): upstream4.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
get focalPointDelta(): upstream1.Offset;
get focalPoint(): upstream1.Offset;
get localFocalPoint(): upstream1.Offset;
get scale(): number;
get horizontalScale(): number;
get verticalScale(): number;
get rotation(): number;
get pointerCount(): number;
get sourceTimeStamp(): upstream2.Duration | null;
}
export abstract class ScaleUpdateDetails extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ScaleUpdateDetails>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ScaleUpdateDetails;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:ScaleUpdateDetails", readonly [], false];
constructor(options?: {focalPoint?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; localFocalPoint?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; scale?: number | undefined; horizontalScale?: number | undefined; verticalScale?: number | undefined; rotation?: number | undefined; pointerCount?: number | undefined; focalPointDelta?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; sourceTimeStamp?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration] }> | null | undefined}) { super(_ScaleUpdateDetailsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ScaleUpdateDetails.prototype, _ScaleUpdateDetailsProxy);
export namespace ScaleUpdateDetails { export function implement(args: [options?: {focalPoint?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; localFocalPoint?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; scale?: number | undefined; horizontalScale?: number | undefined; verticalScale?: number | undefined; rotation?: number | undefined; pointerCount?: number | undefined; focalPointDelta?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; sourceTimeStamp?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration] }> | null | undefined}], implementation: {}): ScaleUpdateDetails {
return constructProxy(_ScaleUpdateDetailsProxy, args, implementation) as ScaleUpdateDetails; } }
_flaxBindInstanceType<ScaleUpdateDetails, typeof ScaleUpdateDetails>(ScaleUpdateDetails, "flax.core/sdk_gestures#type:ScaleUpdateDetails", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "focalPointDelta" | "focalPoint" | "localFocalPoint" | "scale" | "horizontalScale" | "verticalScale" | "rotation" | "pointerCount" | "sourceTimeStamp" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:flutter/src/gestures/scale.dart::ScaleUpdateDetails" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
