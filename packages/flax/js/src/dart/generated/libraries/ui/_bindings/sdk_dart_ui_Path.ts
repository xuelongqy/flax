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
const _flaxMemberParameters0 = [{"name":"x","required":true,"positional":true},{"name":"y","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"dx","required":true,"positional":true},{"name":"dy","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"x1","required":true,"positional":true},{"name":"y1","required":true,"positional":true},{"name":"x2","required":true,"positional":true},{"name":"y2","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"x1","required":true,"positional":true},{"name":"y1","required":true,"positional":true},{"name":"x2","required":true,"positional":true},{"name":"y2","required":true,"positional":true},{"name":"x3","required":true,"positional":true},{"name":"y3","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"x1","required":true,"positional":true},{"name":"y1","required":true,"positional":true},{"name":"x2","required":true,"positional":true},{"name":"y2","required":true,"positional":true},{"name":"w","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"rect","required":true,"positional":true},{"name":"startAngle","required":true,"positional":true},{"name":"sweepAngle","required":true,"positional":true},{"name":"forceMoveTo","required":true,"positional":true}] as const;
const _flaxMemberParameters6 = [{"name":"arcEnd","required":true,"positional":true},{"name":"clockwise","required":false,"positional":false},{"name":"largeArc","required":false,"positional":false},{"name":"radius","required":false,"positional":false},{"name":"rotation","required":false,"positional":false}] as const;
const _flaxMemberParameters7 = [{"name":"arcEndDelta","required":true,"positional":true},{"name":"clockwise","required":false,"positional":false},{"name":"largeArc","required":false,"positional":false},{"name":"radius","required":false,"positional":false},{"name":"rotation","required":false,"positional":false}] as const;
const _flaxMemberParameters8 = [{"name":"rect","required":true,"positional":true}] as const;
const _flaxMemberParameters9 = [{"name":"oval","required":true,"positional":true}] as const;
const _flaxMemberParameters10 = [{"name":"oval","required":true,"positional":true},{"name":"startAngle","required":true,"positional":true},{"name":"sweepAngle","required":true,"positional":true}] as const;
const _flaxMemberParameters11 = [{"name":"points","required":true,"positional":true},{"name":"close","required":true,"positional":true}] as const;
const _flaxMemberParameters12 = [{"name":"rrect","required":true,"positional":true}] as const;
const _flaxMemberParameters13 = [{"name":"rsuperellipse","required":true,"positional":true}] as const;
const _flaxMemberParameters14 = [{"name":"path","required":true,"positional":true},{"name":"offset","required":true,"positional":true},{"name":"matrix4","required":false,"positional":false}] as const;
const _flaxMemberParameters15 = [] as const;
const _flaxMemberParameters16 = [{"name":"point","required":true,"positional":true}] as const;
const _flaxMemberParameters17 = [{"name":"offset","required":true,"positional":true}] as const;
const _flaxMemberParameters18 = [{"name":"matrix4","required":true,"positional":true}] as const;
const _flaxMemberParameters19 = [{"name":"forceClosed","required":false,"positional":false}] as const;
const _flaxMemberParameters20 = [{"name":"arcEnd","required":true,"positional":true},{"name":"radius","required":false,"positional":false},{"name":"rotation","required":false,"positional":false},{"name":"largeArc","required":false,"positional":false},{"name":"clockwise","required":false,"positional":false}] as const;
const _flaxMemberParameters21 = [{"name":"arcEndDelta","required":true,"positional":true},{"name":"radius","required":false,"positional":false},{"name":"rotation","required":false,"positional":false},{"name":"largeArc","required":false,"positional":false},{"name":"clockwise","required":false,"positional":false}] as const;
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
defineObject("flax.core/sdk_dart_ui#type:Path", ["fillType"], ["fillType"], _flaxBindingMethods("flax.core/sdk_dart_ui#type:Path", "object", {"moveTo":_flaxMemberParameters0,"relativeMoveTo":_flaxMemberParameters1,"lineTo":_flaxMemberParameters0,"relativeLineTo":_flaxMemberParameters1,"quadraticBezierTo":_flaxMemberParameters2,"relativeQuadraticBezierTo":_flaxMemberParameters2,"cubicTo":_flaxMemberParameters3,"relativeCubicTo":_flaxMemberParameters3,"conicTo":_flaxMemberParameters4,"relativeConicTo":_flaxMemberParameters4,"arcTo":_flaxMemberParameters5,"arcToPoint":_flaxMemberParameters6,"relativeArcToPoint":_flaxMemberParameters7,"addRect":_flaxMemberParameters8,"addOval":_flaxMemberParameters9,"addArc":_flaxMemberParameters10,"addPolygon":_flaxMemberParameters11,"addRRect":_flaxMemberParameters12,"addRSuperellipse":_flaxMemberParameters13,"addPath":_flaxMemberParameters14,"extendWithPath":_flaxMemberParameters14,"close":_flaxMemberParameters15,"reset":_flaxMemberParameters15,"contains":_flaxMemberParameters16,"shift":_flaxMemberParameters17,"transform":_flaxMemberParameters18,"getBounds":_flaxMemberParameters15,"computeMetrics":_flaxMemberParameters19}, {}), []);
export function _PathFactory(): Path {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:Path", "", [], [], {}) as Path;
}
export namespace _PathFactory {
export function from(source: Readonly<{ "__flaxBound:dart:ui::Path": readonly [] }>): Path {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:Path", "from", [{"name":"source","required":true,"positional":true}], [source], {}) as Path;
}
}
const _PathProxy = {type: "flax.core/sdk_dart_ui#type:Path", parameters: [], constructors: {"":[],"from":[{"name":"source","required":true,"positional":true}]}, methods: {"moveTo":_flaxMemberParameters0,"relativeMoveTo":_flaxMemberParameters1,"lineTo":_flaxMemberParameters0,"relativeLineTo":_flaxMemberParameters1,"quadraticBezierTo":_flaxMemberParameters2,"relativeQuadraticBezierTo":_flaxMemberParameters2,"cubicTo":_flaxMemberParameters3,"relativeCubicTo":_flaxMemberParameters3,"conicTo":_flaxMemberParameters4,"relativeConicTo":_flaxMemberParameters4,"arcTo":_flaxMemberParameters5,"arcToPoint":_flaxMemberParameters20,"relativeArcToPoint":_flaxMemberParameters21,"addRect":_flaxMemberParameters8,"addOval":_flaxMemberParameters9,"addArc":_flaxMemberParameters10,"addPolygon":_flaxMemberParameters11,"addRRect":_flaxMemberParameters12,"addRSuperellipse":_flaxMemberParameters13,"addPath":_flaxMemberParameters14,"extendWithPath":_flaxMemberParameters14,"close":_flaxMemberParameters15,"reset":_flaxMemberParameters15,"contains":_flaxMemberParameters16,"shift":_flaxMemberParameters17,"transform":_flaxMemberParameters18,"getBounds":_flaxMemberParameters15,"computeMetrics":_flaxMemberParameters19}, getters: ["fillType"], setters: ["fillType"], contextMembers: [], superMembers: []} as const;
export namespace _PathFactory { export function implement(args: [], implementation: {moveTo: ((x: number, y: number) => void); relativeMoveTo: ((dx: number, dy: number) => void); lineTo: ((x: number, y: number) => void); relativeLineTo: ((dx: number, dy: number) => void); quadraticBezierTo: ((x1: number, y1: number, x2: number, y2: number) => void); relativeQuadraticBezierTo: ((x1: number, y1: number, x2: number, y2: number) => void); cubicTo: ((x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) => void); relativeCubicTo: ((x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) => void); conicTo: ((x1: number, y1: number, x2: number, y2: number, w: number) => void); relativeConicTo: ((x1: number, y1: number, x2: number, y2: number, w: number) => void); arcTo: ((rect: upstream2.Rect, startAngle: number, sweepAngle: number, forceMoveTo: boolean) => void); arcToPoint: ((arcEnd: upstream3.Offset, options?: { radius?: upstream4.Radius | undefined; rotation?: number | undefined; largeArc?: boolean | undefined; clockwise?: boolean | undefined }) => void); relativeArcToPoint: ((arcEndDelta: upstream3.Offset, options?: { radius?: upstream4.Radius | undefined; rotation?: number | undefined; largeArc?: boolean | undefined; clockwise?: boolean | undefined }) => void); addRect: ((rect: upstream2.Rect) => void); addOval: ((oval: upstream2.Rect) => void); addArc: ((oval: upstream2.Rect, startAngle: number, sweepAngle: number) => void); addPolygon: ((points: DartList<upstream3.Offset>, close: boolean) => void); addRRect: ((rrect: upstream5.RRect) => void); addRSuperellipse: ((rsuperellipse: upstream6.RSuperellipse) => void); addPath: ((path: Path, offset: upstream3.Offset, options?: { matrix4?: globalThis.Float64Array | null | undefined }) => void); extendWithPath: ((path: Path, offset: upstream3.Offset, options?: { matrix4?: globalThis.Float64Array | null | undefined }) => void); close: (() => void); reset: (() => void); contains: ((point: upstream3.Offset) => boolean); shift: ((offset: upstream3.Offset) => Readonly<{ "__flaxBound:dart:ui::Path": readonly [] }>); transform: ((matrix4: globalThis.Float64Array) => Readonly<{ "__flaxBound:dart:ui::Path": readonly [] }>); getBounds: (() => Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>); computeMetrics: ((options?: { forceClosed?: boolean | undefined }) => Readonly<{ "__flaxBound:dart:ui::PathMetrics": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Iterable": readonly [upstream8.PathMetric] }>); get fillType(): upstream0.PathFillType; set fillType(value: upstream0.PathFillType)}): Path {
return constructProxy(_PathProxy, args, implementation) as Path; } }
export namespace _PathFactory { export function combine(operation: upstream1.PathOperation, path1: Readonly<{ "__flaxBound:dart:ui::Path": readonly [] }>, path2: Readonly<{ "__flaxBound:dart:ui::Path": readonly [] }>): Path {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dart_ui#function:Path.combine", [operation, path1, path2]);
return _flaxResult as Path;
} }
export const Path: typeof _PathFactory & _FlaxInstanceType<Path> & _FlaxDartType<Path, readonly ["class", "flax.core/sdk_dart_ui#type:Path", readonly [], false]> = _flaxBindInstanceType<Path, typeof _PathFactory>(_PathFactory, "flax.core/sdk_dart_ui#type:Path", ["dart:core::Object"]) as typeof _PathFactory & _FlaxInstanceType<Path> & _FlaxDartType<Path, readonly ["class", "flax.core/sdk_dart_ui#type:Path", readonly [], false]>;
