// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerChange';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerChange';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerSignalKind';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerSignalKind';
import { _flaxMemberParameters136, _flaxMemberParameters0, _flaxMemberParameters137 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PointerData extends Readonly<{ "__flaxBound:dart:ui::PointerData": readonly [] }> { readonly __PointerData: unique symbol;
readonly [_flaxDartTypeValue]: PointerData;

readonly viewId: number;
readonly embedderId: number;
readonly timeStamp: upstream0.Duration;
readonly change: upstream1.PointerChange;
readonly kind: upstream2.PointerDeviceKind;
readonly signalKind: upstream3.PointerSignalKind | null;
readonly device: number;
readonly pointerIdentifier: number;
readonly physicalX: number;
readonly physicalY: number;
readonly physicalDeltaX: number;
readonly physicalDeltaY: number;
readonly buttons: number;
readonly obscured: boolean;
readonly synthesized: boolean;
readonly pressure: number;
readonly pressureMin: number;
readonly pressureMax: number;
readonly distance: number;
readonly distanceMax: number;
readonly size: number;
readonly radiusMajor: number;
readonly radiusMinor: number;
readonly radiusMin: number;
readonly radiusMax: number;
readonly orientation: number;
readonly tilt: number;
readonly platformData: number;
readonly scrollDeltaX: number;
readonly scrollDeltaY: number;
readonly panX: number;
readonly panY: number;
readonly panDeltaX: number;
readonly panDeltaY: number;
readonly scale: number;
readonly rotation: number;
respond(options: {allowPlatformDefault: boolean}): void;
toString(): string;
toStringFull(): string;
}
defineObject("flax.core/sdk_dart_ui#type:PointerData", ["viewId","embedderId","timeStamp","change","kind","signalKind","device","pointerIdentifier","physicalX","physicalY","physicalDeltaX","physicalDeltaY","buttons","obscured","synthesized","pressure","pressureMin","pressureMax","distance","distanceMax","size","radiusMajor","radiusMinor","radiusMin","radiusMax","orientation","tilt","platformData","scrollDeltaX","scrollDeltaY","panX","panY","panDeltaX","panDeltaY","scale","rotation"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:PointerData", "object", {"respond":_flaxMemberParameters136,"toString":_flaxMemberParameters0,"toStringFull":_flaxMemberParameters0}, {}), []);
export function _PointerDataFactory(options: { viewId?: number | undefined; embedderId?: number | undefined; timeStamp?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }> | undefined; change?: upstream1.PointerChange | undefined; kind?: upstream2.PointerDeviceKind | undefined; signalKind?: upstream3.PointerSignalKind | null | undefined; device?: number | undefined; pointerIdentifier?: number | undefined; physicalX?: number | undefined; physicalY?: number | undefined; physicalDeltaX?: number | undefined; physicalDeltaY?: number | undefined; buttons?: number | undefined; obscured?: boolean | undefined; synthesized?: boolean | undefined; pressure?: number | undefined; pressureMin?: number | undefined; pressureMax?: number | undefined; distance?: number | undefined; distanceMax?: number | undefined; size?: number | undefined; radiusMajor?: number | undefined; radiusMinor?: number | undefined; radiusMin?: number | undefined; radiusMax?: number | undefined; orientation?: number | undefined; tilt?: number | undefined; platformData?: number | undefined; scrollDeltaX?: number | undefined; scrollDeltaY?: number | undefined; panX?: number | undefined; panY?: number | undefined; panDeltaX?: number | undefined; panDeltaY?: number | undefined; scale?: number | undefined; rotation?: number | undefined; onRespond?: ((options?: { allowPlatformDefault?: boolean | undefined }) => void) | null | undefined } = {}): PointerData {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:PointerData", "", [{"name":"viewId"},{"name":"embedderId"},{"name":"timeStamp"},{"name":"change"},{"name":"kind"},{"name":"signalKind"},{"name":"device"},{"name":"pointerIdentifier"},{"name":"physicalX"},{"name":"physicalY"},{"name":"physicalDeltaX"},{"name":"physicalDeltaY"},{"name":"buttons"},{"name":"obscured"},{"name":"synthesized"},{"name":"pressure"},{"name":"pressureMin"},{"name":"pressureMax"},{"name":"distance"},{"name":"distanceMax"},{"name":"size"},{"name":"radiusMajor"},{"name":"radiusMinor"},{"name":"radiusMin"},{"name":"radiusMax"},{"name":"orientation"},{"name":"tilt"},{"name":"platformData"},{"name":"scrollDeltaX"},{"name":"scrollDeltaY"},{"name":"panX"},{"name":"panY"},{"name":"panDeltaX"},{"name":"panDeltaY"},{"name":"scale"},{"name":"rotation"},{"name":"onRespond"}], [], options) as PointerData;
}
const _PointerDataProxy = {type: "flax.core/sdk_dart_ui#type:PointerData", parameters: _flaxMemberParameters137, constructors: {"": _flaxMemberParameters137}, methods: {"respond":_flaxMemberParameters136,"toString":_flaxMemberParameters0,"toStringFull":_flaxMemberParameters0}, getters: ["viewId","embedderId","timeStamp","change","kind","signalKind","device","pointerIdentifier","physicalX","physicalY","physicalDeltaX","physicalDeltaY","buttons","obscured","synthesized","pressure","pressureMin","pressureMax","distance","distanceMax","size","radiusMajor","radiusMinor","radiusMin","radiusMax","orientation","tilt","platformData","scrollDeltaX","scrollDeltaY","panX","panY","panDeltaX","panDeltaY","scale","rotation"], setters: [], contextMembers: [], superMembers: ["get:viewId","get:embedderId","get:timeStamp","get:change","get:kind","get:signalKind","get:device","get:pointerIdentifier","get:physicalX","get:physicalY","get:physicalDeltaX","get:physicalDeltaY","get:buttons","get:obscured","get:synthesized","get:pressure","get:pressureMin","get:pressureMax","get:distance","get:distanceMax","get:size","get:radiusMajor","get:radiusMinor","get:radiusMin","get:radiusMax","get:orientation","get:tilt","get:platformData","get:scrollDeltaX","get:scrollDeltaY","get:panX","get:panY","get:panDeltaX","get:panDeltaY","get:scale","get:rotation","respond","toString","toStringFull"]} as const;
export interface _PointerDataNative extends PointerData {
readonly [_flaxDartTypeValue]: _PointerDataNative;

respond(options: {allowPlatformDefault: boolean}): void;
toString(): string;
toStringFull(): string;
get viewId(): number;
get embedderId(): number;
get timeStamp(): upstream0.Duration;
get change(): upstream1.PointerChange;
get kind(): upstream2.PointerDeviceKind;
get signalKind(): upstream3.PointerSignalKind | null;
get device(): number;
get pointerIdentifier(): number;
get physicalX(): number;
get physicalY(): number;
get physicalDeltaX(): number;
get physicalDeltaY(): number;
get buttons(): number;
get obscured(): boolean;
get synthesized(): boolean;
get pressure(): number;
get pressureMin(): number;
get pressureMax(): number;
get distance(): number;
get distanceMax(): number;
get size(): number;
get radiusMajor(): number;
get radiusMinor(): number;
get radiusMin(): number;
get radiusMax(): number;
get orientation(): number;
get tilt(): number;
get platformData(): number;
get scrollDeltaX(): number;
get scrollDeltaY(): number;
get panX(): number;
get panY(): number;
get panDeltaX(): number;
get panDeltaY(): number;
get scale(): number;
get rotation(): number;
}
export abstract class _PointerDataNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PointerData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PointerData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:PointerData", readonly [], false];
constructor(options?: {viewId?: number | undefined; embedderId?: number | undefined; timeStamp?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }> | undefined; change?: upstream1.PointerChange | undefined; kind?: upstream2.PointerDeviceKind | undefined; signalKind?: upstream3.PointerSignalKind | null | undefined; device?: number | undefined; pointerIdentifier?: number | undefined; physicalX?: number | undefined; physicalY?: number | undefined; physicalDeltaX?: number | undefined; physicalDeltaY?: number | undefined; buttons?: number | undefined; obscured?: boolean | undefined; synthesized?: boolean | undefined; pressure?: number | undefined; pressureMin?: number | undefined; pressureMax?: number | undefined; distance?: number | undefined; distanceMax?: number | undefined; size?: number | undefined; radiusMajor?: number | undefined; radiusMinor?: number | undefined; radiusMin?: number | undefined; radiusMax?: number | undefined; orientation?: number | undefined; tilt?: number | undefined; platformData?: number | undefined; scrollDeltaX?: number | undefined; scrollDeltaY?: number | undefined; panX?: number | undefined; panY?: number | undefined; panDeltaX?: number | undefined; panDeltaY?: number | undefined; scale?: number | undefined; rotation?: number | undefined; onRespond?: ((options?: { allowPlatformDefault?: boolean | undefined }) => void) | null | undefined}) { super(_PointerDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_PointerDataNative.prototype, _PointerDataProxy);
export namespace _PointerDataFactory { export function implement(args: [options?: {viewId?: number | undefined; embedderId?: number | undefined; timeStamp?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }> | undefined; change?: upstream1.PointerChange | undefined; kind?: upstream2.PointerDeviceKind | undefined; signalKind?: upstream3.PointerSignalKind | null | undefined; device?: number | undefined; pointerIdentifier?: number | undefined; physicalX?: number | undefined; physicalY?: number | undefined; physicalDeltaX?: number | undefined; physicalDeltaY?: number | undefined; buttons?: number | undefined; obscured?: boolean | undefined; synthesized?: boolean | undefined; pressure?: number | undefined; pressureMin?: number | undefined; pressureMax?: number | undefined; distance?: number | undefined; distanceMax?: number | undefined; size?: number | undefined; radiusMajor?: number | undefined; radiusMinor?: number | undefined; radiusMin?: number | undefined; radiusMax?: number | undefined; orientation?: number | undefined; tilt?: number | undefined; platformData?: number | undefined; scrollDeltaX?: number | undefined; scrollDeltaY?: number | undefined; panX?: number | undefined; panY?: number | undefined; panDeltaX?: number | undefined; panDeltaY?: number | undefined; scale?: number | undefined; rotation?: number | undefined; onRespond?: ((options?: { allowPlatformDefault?: boolean | undefined }) => void) | null | undefined}], implementation: {}): PointerData {
return constructProxy(_PointerDataProxy, args, implementation) as PointerData; } }
const _PointerDataBinding = _flaxProxyFactory(_PointerDataFactory, _PointerDataNative) as unknown as typeof _PointerDataFactory & (new(options?: {viewId?: number | undefined; embedderId?: number | undefined; timeStamp?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration] }> | undefined; change?: upstream1.PointerChange | undefined; kind?: upstream2.PointerDeviceKind | undefined; signalKind?: upstream3.PointerSignalKind | null | undefined; device?: number | undefined; pointerIdentifier?: number | undefined; physicalX?: number | undefined; physicalY?: number | undefined; physicalDeltaX?: number | undefined; physicalDeltaY?: number | undefined; buttons?: number | undefined; obscured?: boolean | undefined; synthesized?: boolean | undefined; pressure?: number | undefined; pressureMin?: number | undefined; pressureMax?: number | undefined; distance?: number | undefined; distanceMax?: number | undefined; size?: number | undefined; radiusMajor?: number | undefined; radiusMinor?: number | undefined; radiusMin?: number | undefined; radiusMax?: number | undefined; orientation?: number | undefined; tilt?: number | undefined; platformData?: number | undefined; scrollDeltaX?: number | undefined; scrollDeltaY?: number | undefined; panX?: number | undefined; panY?: number | undefined; panDeltaX?: number | undefined; panDeltaY?: number | undefined; scale?: number | undefined; rotation?: number | undefined; onRespond?: ((options?: { allowPlatformDefault?: boolean | undefined }) => void) | null | undefined}) => _PointerDataNative);
export const PointerData: typeof _PointerDataBinding & _FlaxInstanceType<PointerData> & _FlaxDartType<PointerData, readonly ["class", "flax.core/sdk_dart_ui#type:PointerData", readonly [], false]> = _flaxBindInstanceType<PointerData, typeof _PointerDataBinding>(_PointerDataBinding, "flax.core/sdk_dart_ui#type:PointerData", ["dart:core::Object"]) as typeof _PointerDataBinding & _FlaxInstanceType<PointerData> & _FlaxDartType<PointerData, readonly ["class", "flax.core/sdk_dart_ui#type:PointerData", readonly [], false]>;
