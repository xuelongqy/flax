// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream1 from '@flax/material-ui/_bindings/material_CornerRounding';
import '@flax/material-ui/_bindings/material_CornerRounding';
import { _flaxMemberParameters4 } from "@flax/material-ui/_bindings/material.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RoundedPolygon extends Readonly<{ "__flaxBound:package:material_ui/src/shapes/rounded_polygon.dart::RoundedPolygon": readonly [] }> { readonly __RoundedPolygon: unique symbol;
readonly [_flaxDartTypeValue]: RoundedPolygon;

normalized(): RoundedPolygon;
toString(): string;
}
defineObject("flax.material/material#type:RoundedPolygon", [], [], _flaxBindingMethods("flax.material/material#type:RoundedPolygon", "object", {"normalized":_flaxMemberParameters4,"toString":_flaxMemberParameters4}, {}), []);
export function _RoundedPolygonFactory(numVertices: number, options: { radius?: number | undefined; center?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined; rounding?: Readonly<{ "__flaxBound:package:material_ui/src/shapes/corner_rounding.dart::CornerRounding": readonly [] }> | undefined; perVertexRounding?: DartListInput<upstream1.CornerRounding, Readonly<{ "__flaxBound:package:material_ui/src/shapes/corner_rounding.dart::CornerRounding": readonly [] }>> | null | undefined } = {}): RoundedPolygon {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:RoundedPolygon", "", [{"name":"numVertices","required":true,"positional":true},{"name":"radius"},{"name":"center"},{"name":"rounding"},{"name":"perVertexRounding"}], [numVertices], options) as RoundedPolygon;
}
export namespace _RoundedPolygonFactory {
export function fromVertices(vertices: DartListInput<upstream0.Offset, Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>>, options: { rounding?: Readonly<{ "__flaxBound:package:material_ui/src/shapes/corner_rounding.dart::CornerRounding": readonly [] }> | undefined; perVertexRounding?: DartListInput<upstream1.CornerRounding, Readonly<{ "__flaxBound:package:material_ui/src/shapes/corner_rounding.dart::CornerRounding": readonly [] }>> | null | undefined; center?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined } = {}): RoundedPolygon {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:RoundedPolygon", "fromVertices", [{"name":"vertices","required":true,"positional":true},{"name":"rounding"},{"name":"perVertexRounding"},{"name":"center"}], [vertices], options) as RoundedPolygon;
}
}
export namespace _RoundedPolygonFactory {
export function circle(options: { numVertices?: number | undefined; radius?: number | undefined; center?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined } = {}): RoundedPolygon {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:RoundedPolygon", "circle", [{"name":"numVertices"},{"name":"radius"},{"name":"center"}], [], options) as RoundedPolygon;
}
}
export namespace _RoundedPolygonFactory {
export function rectangle(options: { width?: number | undefined; height?: number | undefined; rounding?: Readonly<{ "__flaxBound:package:material_ui/src/shapes/corner_rounding.dart::CornerRounding": readonly [] }> | undefined; perVertexRounding?: DartListInput<upstream1.CornerRounding, Readonly<{ "__flaxBound:package:material_ui/src/shapes/corner_rounding.dart::CornerRounding": readonly [] }>> | null | undefined; center?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined } = {}): RoundedPolygon {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:RoundedPolygon", "rectangle", [{"name":"width"},{"name":"height"},{"name":"rounding"},{"name":"perVertexRounding"},{"name":"center"}], [], options) as RoundedPolygon;
}
}
export namespace _RoundedPolygonFactory {
export function star(options: { numVerticesPerRadius: number; radius?: number | undefined; innerRadius?: number | undefined; rounding?: Readonly<{ "__flaxBound:package:material_ui/src/shapes/corner_rounding.dart::CornerRounding": readonly [] }> | undefined; innerRounding?: Readonly<{ "__flaxBound:package:material_ui/src/shapes/corner_rounding.dart::CornerRounding": readonly [] }> | null | undefined; perVertexRounding?: DartListInput<upstream1.CornerRounding, Readonly<{ "__flaxBound:package:material_ui/src/shapes/corner_rounding.dart::CornerRounding": readonly [] }>> | null | undefined; center?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined }): RoundedPolygon {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:RoundedPolygon", "star", [{"name":"numVerticesPerRadius","required":true},{"name":"radius"},{"name":"innerRadius"},{"name":"rounding"},{"name":"innerRounding"},{"name":"perVertexRounding"},{"name":"center"}], [], options) as RoundedPolygon;
}
}
export namespace _RoundedPolygonFactory {
export function pill(options: { width?: number | undefined; height?: number | undefined; smoothing?: number | undefined; center?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined } = {}): RoundedPolygon {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:RoundedPolygon", "pill", [{"name":"width"},{"name":"height"},{"name":"smoothing"},{"name":"center"}], [], options) as RoundedPolygon;
}
}
export namespace _RoundedPolygonFactory {
export function pillStar(options: { width?: number | undefined; height?: number | undefined; numVerticesPerRadius?: number | undefined; innerRadiusRatio?: number | undefined; rounding?: Readonly<{ "__flaxBound:package:material_ui/src/shapes/corner_rounding.dart::CornerRounding": readonly [] }> | undefined; innerRounding?: Readonly<{ "__flaxBound:package:material_ui/src/shapes/corner_rounding.dart::CornerRounding": readonly [] }> | null | undefined; perVertexRounding?: DartListInput<upstream1.CornerRounding, Readonly<{ "__flaxBound:package:material_ui/src/shapes/corner_rounding.dart::CornerRounding": readonly [] }>> | null | undefined; vertexSpacing?: number | undefined; startLocation?: number | undefined; center?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | undefined } = {}): RoundedPolygon {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:RoundedPolygon", "pillStar", [{"name":"width"},{"name":"height"},{"name":"numVerticesPerRadius"},{"name":"innerRadiusRatio"},{"name":"rounding"},{"name":"innerRounding"},{"name":"perVertexRounding"},{"name":"vertexSpacing"},{"name":"startLocation"},{"name":"center"}], [], options) as RoundedPolygon;
}
}
export const RoundedPolygon: typeof _RoundedPolygonFactory & _FlaxInstanceType<RoundedPolygon> & _FlaxDartType<RoundedPolygon, readonly ["class", "flax.material/material#type:RoundedPolygon", readonly [], false]> = _flaxBindInstanceType<RoundedPolygon, typeof _RoundedPolygonFactory>(_RoundedPolygonFactory, "flax.material/material#type:RoundedPolygon", ["dart:core::Object"]) as typeof _RoundedPolygonFactory & _FlaxInstanceType<RoundedPolygon> & _FlaxDartType<RoundedPolygon, readonly ["class", "flax.material/material#type:RoundedPolygon", readonly [], false]>;
