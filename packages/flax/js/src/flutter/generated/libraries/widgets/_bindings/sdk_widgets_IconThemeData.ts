// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Shadow';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Shadow';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { _flaxMemberParameters204, _flaxMemberParameters66, _flaxMemberParameters0, _flaxMemberParameters205, _flaxMemberParameters2, _flaxMemberParameters9, _flaxMemberParameters8, _flaxMemberParameters5 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface IconThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __IconThemeData: unique symbol;
readonly [_flaxDartTypeValue]: IconThemeData;

}
defineObject("flax.core/sdk_widgets#type:IconThemeData", ["isConcrete","size","fill","weight","grade","opticalSize","color","opacity","shadows","applyTextScaling"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:IconThemeData", "object", {"copyWith":_flaxMemberParameters204,"merge":_flaxMemberParameters66,"resolve":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
const _IconThemeDataProxy = {type: "flax.core/sdk_widgets#type:IconThemeData", parameters: _flaxMemberParameters205, constructors: {"": _flaxMemberParameters205}, methods: {"toStringShort":_flaxMemberParameters2,"toString":_flaxMemberParameters9,"toDiagnosticsNode":_flaxMemberParameters8,"debugFillProperties":_flaxMemberParameters5,"copyWith":_flaxMemberParameters204,"merge":_flaxMemberParameters66,"resolve":_flaxMemberParameters0}, getters: ["isConcrete","size","fill","weight","grade","opticalSize","color","opacity","shadows","applyTextScaling"], setters: [], contextMembers: [], superMembers: ["get:isConcrete","get:size","get:fill","get:weight","get:grade","get:opticalSize","get:color","get:opacity","get:shadows","get:applyTextScaling","toStringShort","toString","toDiagnosticsNode","debugFillProperties","copyWith","merge","resolve"]} as const;
export interface IconThemeData {
readonly [_flaxDartTypeValue]: IconThemeData;

toStringShort(): string;
toString(options?: {minLevel?: upstream3.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream5.DiagnosticsTreeStyle | null | undefined}): upstream4.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
copyWith(options?: {size?: number | null | undefined; fill?: number | null | undefined; weight?: number | null | undefined; grade?: number | null | undefined; opticalSize?: number | null | undefined; color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; opacity?: number | null | undefined; shadows?: DartListInput<upstream2.Shadow, Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }>> | null | undefined; applyTextScaling?: boolean | null | undefined}): IconThemeData;
merge(other: Readonly<{ "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null): IconThemeData;
resolve(context: upstream7.BuildContext): IconThemeData;
get isConcrete(): boolean;
get size(): number | null;
get fill(): number | null;
get weight(): number | null;
get grade(): number | null;
get opticalSize(): number | null;
get color(): upstream1.Color | null;
get opacity(): number | null;
get shadows(): DartList<upstream2.Shadow> | null;
get applyTextScaling(): boolean | null;
}
export abstract class IconThemeData extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<IconThemeData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: IconThemeData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:IconThemeData", readonly [], false];
constructor(options?: {size?: number | null | undefined; fill?: number | null | undefined; weight?: number | null | undefined; grade?: number | null | undefined; opticalSize?: number | null | undefined; color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; opacity?: number | null | undefined; shadows?: DartListInput<upstream2.Shadow, Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }>> | null | undefined; applyTextScaling?: boolean | null | undefined}) { super(_IconThemeDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(IconThemeData.prototype, _IconThemeDataProxy);
export namespace IconThemeData { export function implement(args: [options?: {size?: number | null | undefined; fill?: number | null | undefined; weight?: number | null | undefined; grade?: number | null | undefined; opticalSize?: number | null | undefined; color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; opacity?: number | null | undefined; shadows?: DartListInput<upstream2.Shadow, Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }>> | null | undefined; applyTextScaling?: boolean | null | undefined}], implementation: {}): IconThemeData {
return constructProxy(_IconThemeDataProxy, args, implementation) as IconThemeData; } }
export namespace IconThemeData { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null, t: number): IconThemeData {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:IconThemeData.lerp", [a, b, t]);
return _flaxResult as IconThemeData;
} }
_flaxBindInstanceType<IconThemeData, typeof IconThemeData>(IconThemeData, "flax.core/sdk_widgets#type:IconThemeData", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "isConcrete" | "size" | "fill" | "weight" | "grade" | "opticalSize" | "color" | "opacity" | "shadows" | "applyTextScaling" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "merge" | "resolve" | "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
