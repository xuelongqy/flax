// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Canvas';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
const _flaxMemberParameters0 = [{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"canvas","required":true,"positional":true},{"name":"rect","required":true,"positional":true},{"name":"columns","required":true,"positional":false},{"name":"rows","required":true,"positional":false}] as const;
const _flaxMemberParameters2 = [] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TableBorder extends Readonly<{ "__flaxBound:package:flutter/src/rendering/table_border.dart::TableBorder": readonly [] }> { readonly __TableBorder: unique symbol;
readonly [_flaxDartTypeValue]: TableBorder;

}
defineObject("flax.core/sdk_rendering#type:TableBorder", ["top","right","bottom","left","horizontalInside","verticalInside","borderRadius","dimensions","isUniform"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:TableBorder", "object", {"scale":_flaxMemberParameters0,"paint":_flaxMemberParameters1,"toString":_flaxMemberParameters2}, {}), []);
const _TableBorderProxy = {type: "flax.core/sdk_rendering#type:TableBorder", parameters: [{"name":"top","required":false,"positional":false},{"name":"right","required":false,"positional":false},{"name":"bottom","required":false,"positional":false},{"name":"left","required":false,"positional":false},{"name":"horizontalInside","required":false,"positional":false},{"name":"verticalInside","required":false,"positional":false},{"name":"borderRadius","required":false,"positional":false}], constructors: {"":[{"name":"top","required":false,"positional":false},{"name":"right","required":false,"positional":false},{"name":"bottom","required":false,"positional":false},{"name":"left","required":false,"positional":false},{"name":"horizontalInside","required":false,"positional":false},{"name":"verticalInside","required":false,"positional":false},{"name":"borderRadius","required":false,"positional":false}]}, methods: {"scale":_flaxMemberParameters0,"paint":_flaxMemberParameters1,"toString":_flaxMemberParameters2}, getters: ["top","right","bottom","left","horizontalInside","verticalInside","borderRadius","dimensions","isUniform"], setters: [], contextMembers: [], superMembers: ["get:top","get:right","get:bottom","get:left","get:horizontalInside","get:verticalInside","get:borderRadius","get:dimensions","get:isUniform","scale","paint","toString"]} as const;
export interface TableBorder {
readonly [_flaxDartTypeValue]: TableBorder;

scale(t: number): TableBorder;
paint(canvas: Readonly<{ "__flaxBound:dart:ui::Canvas": readonly [] }>, rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, options: {rows: DartIterableInput<number, number>; columns: DartIterableInput<number, number>}): void;
toString(): string;
get top(): upstream0.BorderSide;
get right(): upstream0.BorderSide;
get bottom(): upstream0.BorderSide;
get left(): upstream0.BorderSide;
get horizontalInside(): upstream0.BorderSide;
get verticalInside(): upstream0.BorderSide;
get borderRadius(): upstream1.BorderRadius;
get dimensions(): upstream2.EdgeInsets;
get isUniform(): boolean;
}
export abstract class TableBorder extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TableBorder>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TableBorder;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:TableBorder", readonly [], false];
constructor(options?: {top?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; right?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; bottom?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; left?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; horizontalInside?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; verticalInside?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; borderRadius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | undefined}) { super(_TableBorderProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(TableBorder.prototype, _TableBorderProxy);
export namespace TableBorder { export function implement(args: [options?: {top?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; right?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; bottom?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; left?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; horizontalInside?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; verticalInside?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | undefined; borderRadius?: Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [] }> | undefined}], implementation: {}): TableBorder {
return constructProxy(_TableBorderProxy, args, implementation) as TableBorder; } }
export namespace TableBorder { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/rendering/table_border.dart::TableBorder": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/rendering/table_border.dart::TableBorder": readonly [] }> | null, t: number): TableBorder | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_rendering#function:TableBorder.lerp", [a, b, t]);
return _flaxResult as TableBorder | null;
} }
_flaxBindInstanceType<TableBorder, typeof TableBorder>(TableBorder, "flax.core/sdk_rendering#type:TableBorder", ["dart:core::Object"]);
