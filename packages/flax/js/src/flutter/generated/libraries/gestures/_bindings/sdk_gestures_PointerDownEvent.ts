// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream5 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
const _flaxMemberParameters0 = [{"name":"transform","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"buttons","required":false,"positional":false},{"name":"delta","required":false,"positional":false},{"name":"device","required":false,"positional":false},{"name":"distance","required":false,"positional":false},{"name":"distanceMax","required":false,"positional":false},{"name":"embedderId","required":false,"positional":false},{"name":"kind","required":false,"positional":false},{"name":"obscured","required":false,"positional":false},{"name":"orientation","required":false,"positional":false},{"name":"pointer","required":false,"positional":false},{"name":"position","required":false,"positional":false},{"name":"pressure","required":false,"positional":false},{"name":"pressureMax","required":false,"positional":false},{"name":"pressureMin","required":false,"positional":false},{"name":"radiusMajor","required":false,"positional":false},{"name":"radiusMax","required":false,"positional":false},{"name":"radiusMin","required":false,"positional":false},{"name":"radiusMinor","required":false,"positional":false},{"name":"size","required":false,"positional":false},{"name":"synthesized","required":false,"positional":false},{"name":"tilt","required":false,"positional":false},{"name":"timeStamp","required":false,"positional":false},{"name":"viewId","required":false,"positional":false}] as const;
const _flaxMemberParameters2 = [] as const;
const _flaxMemberParameters3 = [{"name":"name","required":false,"positional":false},{"name":"style","required":false,"positional":false}] as const;
const _flaxMemberParameters4 = [{"name":"properties","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"minLevel","required":false,"positional":false}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/gestures/_bindings/sdk_gestures.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PointerDownEvent extends Omit<upstream0.PointerEvent, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.PointerEvent>, Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerDownEvent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerDownEvent": readonly [] }> { readonly __PointerDownEvent: unique symbol;
readonly [_flaxDartTypeValue]: PointerDownEvent;

}
defineObject("flax.core/sdk_gestures#type:PointerDownEvent", ["viewId","embedderId","timeStamp","pointer","kind","device","position","localPosition","delta","localDelta","buttons","down","obscured","pressure","pressureMin","pressureMax","distance","distanceMin","distanceMax","size","radiusMajor","radiusMinor","radiusMin","radiusMax","orientation","tilt","platformData","synthesized","transform","original"], [], _flaxBindingMethods("flax.core/sdk_gestures#type:PointerDownEvent", "object", {"transformed":_flaxMemberParameters0,"copyWith":_flaxMemberParameters1,"toStringFull":_flaxMemberParameters2}, {}), [], undefined, "flax.core/flutter#type:PointerEvent");
const _PointerDownEventProxy = {type: "flax.core/sdk_gestures#type:PointerDownEvent", parameters: [{"name":"viewId","required":false,"positional":false},{"name":"timeStamp","required":false,"positional":false},{"name":"pointer","required":false,"positional":false},{"name":"kind","required":false,"positional":false},{"name":"device","required":false,"positional":false},{"name":"position","required":false,"positional":false},{"name":"buttons","required":false,"positional":false},{"name":"obscured","required":false,"positional":false},{"name":"pressure","required":false,"positional":false},{"name":"pressureMin","required":false,"positional":false},{"name":"pressureMax","required":false,"positional":false},{"name":"distanceMax","required":false,"positional":false},{"name":"size","required":false,"positional":false},{"name":"radiusMajor","required":false,"positional":false},{"name":"radiusMinor","required":false,"positional":false},{"name":"radiusMin","required":false,"positional":false},{"name":"radiusMax","required":false,"positional":false},{"name":"orientation","required":false,"positional":false},{"name":"tilt","required":false,"positional":false},{"name":"embedderId","required":false,"positional":false}], constructors: {"":[{"name":"viewId","required":false,"positional":false},{"name":"timeStamp","required":false,"positional":false},{"name":"pointer","required":false,"positional":false},{"name":"kind","required":false,"positional":false},{"name":"device","required":false,"positional":false},{"name":"position","required":false,"positional":false},{"name":"buttons","required":false,"positional":false},{"name":"obscured","required":false,"positional":false},{"name":"pressure","required":false,"positional":false},{"name":"pressureMin","required":false,"positional":false},{"name":"pressureMax","required":false,"positional":false},{"name":"distanceMax","required":false,"positional":false},{"name":"size","required":false,"positional":false},{"name":"radiusMajor","required":false,"positional":false},{"name":"radiusMinor","required":false,"positional":false},{"name":"radiusMin","required":false,"positional":false},{"name":"radiusMax","required":false,"positional":false},{"name":"orientation","required":false,"positional":false},{"name":"tilt","required":false,"positional":false},{"name":"embedderId","required":false,"positional":false}]}, methods: {"transformed":_flaxMemberParameters0,"copyWith":_flaxMemberParameters1,"toStringShort":_flaxMemberParameters2,"toDiagnosticsNode":_flaxMemberParameters3,"debugFillProperties":_flaxMemberParameters4,"toString":_flaxMemberParameters5,"toStringFull":_flaxMemberParameters2}, getters: ["viewId","embedderId","timeStamp","pointer","kind","device","position","localPosition","delta","localDelta","buttons","down","obscured","pressure","pressureMin","pressureMax","distance","distanceMin","distanceMax","size","radiusMajor","radiusMinor","radiusMin","radiusMax","orientation","tilt","platformData","synthesized","transform","original"], setters: [], contextMembers: [], superMembers: ["get:viewId","get:embedderId","get:timeStamp","get:pointer","get:kind","get:device","get:position","get:localPosition","get:delta","get:localDelta","get:buttons","get:down","get:obscured","get:pressure","get:pressureMin","get:pressureMax","get:distance","get:distanceMin","get:distanceMax","get:size","get:radiusMajor","get:radiusMinor","get:radiusMin","get:radiusMax","get:orientation","get:tilt","get:platformData","get:synthesized","get:transform","get:original","transformed","copyWith","toStringShort","toDiagnosticsNode","debugFillProperties","toString","toStringFull"]} as const;
export interface PointerDownEvent {
readonly [_flaxDartTypeValue]: PointerDownEvent;

transformed(transform: Readonly<{ "__flaxBound:package:vector_math/vector_math_64.dart::Matrix4": readonly [] }> | null): PointerDownEvent;
copyWith(options?: {viewId?: number | null | undefined; timeStamp?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration] }> | null | undefined; pointer?: number | null | undefined; kind?: upstream3.PointerDeviceKind | null | undefined; device?: number | null | undefined; position?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; delta?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; buttons?: number | null | undefined; obscured?: boolean | null | undefined; pressure?: number | null | undefined; pressureMin?: number | null | undefined; pressureMax?: number | null | undefined; distance?: number | null | undefined; distanceMax?: number | null | undefined; size?: number | null | undefined; radiusMajor?: number | null | undefined; radiusMinor?: number | null | undefined; radiusMin?: number | null | undefined; radiusMax?: number | null | undefined; orientation?: number | null | undefined; tilt?: number | null | undefined; synthesized?: boolean | null | undefined; embedderId?: number | null | undefined}): PointerDownEvent;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream7.DiagnosticsTreeStyle | null | undefined}): upstream6.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream9.DiagnosticLevel | undefined}): string;
toStringFull(): string;
get viewId(): number;
get embedderId(): number;
get timeStamp(): upstream2.Duration;
get pointer(): number;
get kind(): upstream3.PointerDeviceKind;
get device(): number;
get position(): upstream4.Offset;
get localPosition(): upstream4.Offset;
get delta(): upstream4.Offset;
get localDelta(): upstream4.Offset;
get buttons(): number;
get down(): boolean;
get obscured(): boolean;
get pressure(): number;
get pressureMin(): number;
get pressureMax(): number;
get distance(): number;
get distanceMin(): number;
get distanceMax(): number;
get size(): number;
get radiusMajor(): number;
get radiusMinor(): number;
get radiusMin(): number;
get radiusMax(): number;
get orientation(): number;
get tilt(): number;
get platformData(): number;
get synthesized(): boolean;
get transform(): upstream5.Matrix4 | null;
get original(): upstream0.PointerEvent | null;
}
export abstract class PointerDownEvent extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PointerDownEvent>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PointerDownEvent;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:PointerDownEvent", readonly [], false];
constructor(options?: {viewId?: number | undefined; timeStamp?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration] }> | undefined; pointer?: number | undefined; kind?: upstream3.PointerDeviceKind | undefined; device?: number | undefined; position?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; buttons?: number | undefined; obscured?: boolean | undefined; pressure?: number | undefined; pressureMin?: number | undefined; pressureMax?: number | undefined; distanceMax?: number | undefined; size?: number | undefined; radiusMajor?: number | undefined; radiusMinor?: number | undefined; radiusMin?: number | undefined; radiusMax?: number | undefined; orientation?: number | undefined; tilt?: number | undefined; embedderId?: number | undefined}) { super(_PointerDownEventProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(PointerDownEvent.prototype, _PointerDownEventProxy);
export namespace PointerDownEvent { export function implement(args: [options?: {viewId?: number | undefined; timeStamp?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration] }> | undefined; pointer?: number | undefined; kind?: upstream3.PointerDeviceKind | undefined; device?: number | undefined; position?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; buttons?: number | undefined; obscured?: boolean | undefined; pressure?: number | undefined; pressureMin?: number | undefined; pressureMax?: number | undefined; distanceMax?: number | undefined; size?: number | undefined; radiusMajor?: number | undefined; radiusMinor?: number | undefined; radiusMin?: number | undefined; radiusMax?: number | undefined; orientation?: number | undefined; tilt?: number | undefined; embedderId?: number | undefined}], implementation: {}): PointerDownEvent {
return constructProxy(_PointerDownEventProxy, args, implementation) as PointerDownEvent; } }
_flaxBindInstanceType<PointerDownEvent, typeof PointerDownEvent>(PointerDownEvent, "flax.core/sdk_gestures#type:PointerDownEvent", ["flax.core/flutter#type:PointerEvent","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable","package:flutter/src/gestures/events.dart::_PointerEventDescription","package:flutter/src/gestures/events.dart::_CopyPointerDownEvent"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "viewId" | "embedderId" | "timeStamp" | "pointer" | "kind" | "device" | "position" | "localPosition" | "delta" | "localDelta" | "buttons" | "down" | "obscured" | "pressure" | "pressureMin" | "pressureMax" | "distance" | "distanceMin" | "distanceMax" | "size" | "radiusMajor" | "radiusMinor" | "radiusMin" | "radiusMax" | "orientation" | "tilt" | "platformData" | "synthesized" | "transform" | "original" | "transformed" | "copyWith" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "toStringFull" | "__flaxBound:package:flutter/src/gestures/events.dart::PointerDownEvent" | "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription" | "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerDownEvent";
