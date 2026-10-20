// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_PathFillType';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PathFillType';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_PathOperation';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PathOperation';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Radius';
import '@flax/dart/ui/_bindings/flutter_Radius';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_RRect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_RRect';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_RSuperellipse';
import '@flax/dart/ui/_bindings/sdk_dart_ui_RSuperellipse';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_PathMetrics';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PathMetrics';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_PathMetric';
import { _flaxMemberParameters84, _flaxMemberParameters4, _flaxMemberParameters85, _flaxMemberParameters86, _flaxMemberParameters87, _flaxMemberParameters88, _flaxMemberParameters89, _flaxMemberParameters90, _flaxMemberParameters91, _flaxMemberParameters92, _flaxMemberParameters93, _flaxMemberParameters94, _flaxMemberParameters95, _flaxMemberParameters96, _flaxMemberParameters97, _flaxMemberParameters0, _flaxMemberParameters98, _flaxMemberParameters74, _flaxMemberParameters8, _flaxMemberParameters99, _flaxMemberParameters100, _flaxMemberParameters101 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Path extends Readonly<{ "__flaxBound:dart:ui::Path": readonly [] }> { readonly __Path: unique symbol;
readonly [_flaxDartTypeValue]: Path;

get fillType(): upstream0.PathFillType;
moveTo(x: number, y: number): void;
relativeMoveTo(dx: number, dy: number): void;
lineTo(x: number, y: number): void;
relativeLineTo(dx: number, dy: number): void;
quadraticBezierTo(x1: number, y1: number, x2: number, y2: number): void;
relativeQuadraticBezierTo(x1: number, y1: number, x2: number, y2: number): void;
cubicTo(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;
relativeCubicTo(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;
conicTo(x1: number, y1: number, x2: number, y2: number, w: number): void;
relativeConicTo(x1: number, y1: number, x2: number, y2: number, w: number): void;
arcTo(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, startAngle: number, sweepAngle: number, forceMoveTo: boolean): void;
arcToPoint(arcEnd: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, options?: {clockwise?: boolean | undefined; largeArc?: boolean | undefined; radius?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; rotation?: number | undefined}): void;
relativeArcToPoint(arcEndDelta: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, options?: {clockwise?: boolean | undefined; largeArc?: boolean | undefined; radius?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; rotation?: number | undefined}): void;
addRect(rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>): void;
addOval(oval: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>): void;
addArc(oval: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, startAngle: number, sweepAngle: number): void;
addPolygon(points: DartListInput<upstream3.Offset, Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>>, close: boolean): void;
addRRect(rrect: Readonly<{ "__flaxBound:dart:ui::RRect": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::_RRectLike": readonly [upstream5.RRect] }>): void;
addRSuperellipse(rsuperellipse: Readonly<{ "__flaxBound:dart:ui::RSuperellipse": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::_RRectLike": readonly [upstream6.RSuperellipse] }>): void;
addPath(path: Readonly<{ "__flaxBound:dart:ui::Path": readonly [] }>, offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, options?: {matrix4?: globalThis.Float64Array | null | undefined}): void;
extendWithPath(path: Readonly<{ "__flaxBound:dart:ui::Path": readonly [] }>, offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, options?: {matrix4?: globalThis.Float64Array | null | undefined}): void;
close(): void;
reset(): void;
contains(point: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): boolean;
shift(offset: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): Path;
transform(matrix4: globalThis.Float64Array): Path;
getBounds(): upstream2.Rect;
computeMetrics(options?: {forceClosed?: boolean | undefined}): upstream7.PathMetrics;
set fillType(value: upstream0.PathFillType);
}
defineObject("flax.core/sdk_dart_ui#type:Path", ["fillType"], ["fillType"], _flaxBindingMethods("flax.core/sdk_dart_ui#type:Path", "object", {"moveTo":_flaxMemberParameters84,"relativeMoveTo":_flaxMemberParameters4,"lineTo":_flaxMemberParameters84,"relativeLineTo":_flaxMemberParameters4,"quadraticBezierTo":_flaxMemberParameters85,"relativeQuadraticBezierTo":_flaxMemberParameters85,"cubicTo":_flaxMemberParameters86,"relativeCubicTo":_flaxMemberParameters86,"conicTo":_flaxMemberParameters87,"relativeConicTo":_flaxMemberParameters87,"arcTo":_flaxMemberParameters88,"arcToPoint":_flaxMemberParameters89,"relativeArcToPoint":_flaxMemberParameters90,"addRect":_flaxMemberParameters91,"addOval":_flaxMemberParameters92,"addArc":_flaxMemberParameters93,"addPolygon":_flaxMemberParameters94,"addRRect":_flaxMemberParameters95,"addRSuperellipse":_flaxMemberParameters96,"addPath":_flaxMemberParameters97,"extendWithPath":_flaxMemberParameters97,"close":_flaxMemberParameters0,"reset":_flaxMemberParameters0,"contains":_flaxMemberParameters98,"shift":_flaxMemberParameters74,"transform":_flaxMemberParameters8,"getBounds":_flaxMemberParameters0,"computeMetrics":_flaxMemberParameters99}, {}), []);
export function _PathFactory(): Path {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:Path", "", _flaxMemberParameters0, [], {}) as Path;
}
export namespace _PathFactory {
export function from(source: Readonly<{ "__flaxBound:dart:ui::Path": readonly [] }>): Path {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:Path", "from", [{"name":"source","required":true,"positional":true}], [source], {}) as Path;
}
}
const _PathProxy = {type: "flax.core/sdk_dart_ui#type:Path", parameters: _flaxMemberParameters0, constructors: {}, methods: {"moveTo":_flaxMemberParameters84,"relativeMoveTo":_flaxMemberParameters4,"lineTo":_flaxMemberParameters84,"relativeLineTo":_flaxMemberParameters4,"quadraticBezierTo":_flaxMemberParameters85,"relativeQuadraticBezierTo":_flaxMemberParameters85,"cubicTo":_flaxMemberParameters86,"relativeCubicTo":_flaxMemberParameters86,"conicTo":_flaxMemberParameters87,"relativeConicTo":_flaxMemberParameters87,"arcTo":_flaxMemberParameters88,"arcToPoint":_flaxMemberParameters100,"relativeArcToPoint":_flaxMemberParameters101,"addRect":_flaxMemberParameters91,"addOval":_flaxMemberParameters92,"addArc":_flaxMemberParameters93,"addPolygon":_flaxMemberParameters94,"addRRect":_flaxMemberParameters95,"addRSuperellipse":_flaxMemberParameters96,"addPath":_flaxMemberParameters97,"extendWithPath":_flaxMemberParameters97,"close":_flaxMemberParameters0,"reset":_flaxMemberParameters0,"contains":_flaxMemberParameters98,"shift":_flaxMemberParameters74,"transform":_flaxMemberParameters8,"getBounds":_flaxMemberParameters0,"computeMetrics":_flaxMemberParameters99}, getters: ["fillType"], setters: ["fillType"], contextMembers: [], superMembers: []} as const;
export namespace _PathFactory { export function implement(args: [], implementation: {moveTo: ((x: number, y: number) => void); relativeMoveTo: ((dx: number, dy: number) => void); lineTo: ((x: number, y: number) => void); relativeLineTo: ((dx: number, dy: number) => void); quadraticBezierTo: ((x1: number, y1: number, x2: number, y2: number) => void); relativeQuadraticBezierTo: ((x1: number, y1: number, x2: number, y2: number) => void); cubicTo: ((x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) => void); relativeCubicTo: ((x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) => void); conicTo: ((x1: number, y1: number, x2: number, y2: number, w: number) => void); relativeConicTo: ((x1: number, y1: number, x2: number, y2: number, w: number) => void); arcTo: ((rect: upstream2.Rect, startAngle: number, sweepAngle: number, forceMoveTo: boolean) => void); arcToPoint: ((arcEnd: upstream3.Offset, options?: { radius?: upstream4.Radius | undefined; rotation?: number | undefined; largeArc?: boolean | undefined; clockwise?: boolean | undefined }) => void); relativeArcToPoint: ((arcEndDelta: upstream3.Offset, options?: { radius?: upstream4.Radius | undefined; rotation?: number | undefined; largeArc?: boolean | undefined; clockwise?: boolean | undefined }) => void); addRect: ((rect: upstream2.Rect) => void); addOval: ((oval: upstream2.Rect) => void); addArc: ((oval: upstream2.Rect, startAngle: number, sweepAngle: number) => void); addPolygon: ((points: DartList<upstream3.Offset>, close: boolean) => void); addRRect: ((rrect: upstream5.RRect) => void); addRSuperellipse: ((rsuperellipse: upstream6.RSuperellipse) => void); addPath: ((path: Path, offset: upstream3.Offset, options?: { matrix4?: globalThis.Float64Array | null | undefined }) => void); extendWithPath: ((path: Path, offset: upstream3.Offset, options?: { matrix4?: globalThis.Float64Array | null | undefined }) => void); close: (() => void); reset: (() => void); contains: ((point: upstream3.Offset) => boolean); shift: ((offset: upstream3.Offset) => Readonly<{ "__flaxBound:dart:ui::Path": readonly [] }>); transform: ((matrix4: globalThis.Float64Array) => Readonly<{ "__flaxBound:dart:ui::Path": readonly [] }>); getBounds: (() => Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>); computeMetrics: ((options?: { forceClosed?: boolean | undefined }) => Readonly<{ "__flaxBound:dart:ui::PathMetrics": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Iterable": readonly [upstream8.PathMetric] }>); get fillType(): upstream0.PathFillType; set fillType(value: upstream0.PathFillType)}): Path {
return constructProxy(_PathProxy, args, implementation) as Path; } }
export namespace _PathFactory { export function combine(operation: upstream1.PathOperation, path1: Readonly<{ "__flaxBound:dart:ui::Path": readonly [] }>, path2: Readonly<{ "__flaxBound:dart:ui::Path": readonly [] }>): Path {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dart_ui#function:Path.combine", [operation, path1, path2]);
return _flaxResult as Path;
} }
export const Path: typeof _PathFactory & _FlaxInstanceType<Path> & _FlaxDartType<Path, readonly ["class", "flax.core/sdk_dart_ui#type:Path", readonly [], false]> = _flaxBindInstanceType<Path, typeof _PathFactory>(_PathFactory, "flax.core/sdk_dart_ui#type:Path", ["dart:core::Object"]) as typeof _PathFactory & _FlaxInstanceType<Path> & _FlaxDartType<Path, readonly ["class", "flax.core/sdk_dart_ui#type:Path", readonly [], false]>;
