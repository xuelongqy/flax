// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_IconThemeData';
import '@flax/flutter/widgets/_bindings/sdk_widgets_IconThemeData';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_Shadow';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Shadow';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { _flaxMemberParameters32, _flaxMemberParameters33, _flaxMemberParameters34, _flaxMemberParameters24, _flaxMemberParameters23, _flaxMemberParameters0, _flaxMemberParameters22, _flaxMemberParameters21 } from "@flax/flutter/cupertino/_bindings/sdk_cupertino.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/cupertino/_bindings/sdk_cupertino.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CupertinoIconThemeData extends Omit<upstream0.IconThemeData, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.IconThemeData>, Readonly<{ "__flaxBound:package:flutter/src/cupertino/icon_theme_data.dart::CupertinoIconThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __CupertinoIconThemeData: unique symbol;
readonly [_flaxDartTypeValue]: CupertinoIconThemeData;

}
defineObject("flax.core/sdk_cupertino#type:CupertinoIconThemeData", ["isConcrete","size","fill","weight","grade","opticalSize","color","opacity","shadows","applyTextScaling"], [], _flaxBindingMethods("flax.core/sdk_cupertino#type:CupertinoIconThemeData", "object", {"copyWith":_flaxMemberParameters32}, {}), [], undefined, "flax.core/sdk_widgets#type:IconThemeData");
const _CupertinoIconThemeDataProxy = {type: "flax.core/sdk_cupertino#type:CupertinoIconThemeData", parameters: _flaxMemberParameters33, constructors: {"": _flaxMemberParameters33}, methods: {"copyWith":_flaxMemberParameters32,"merge":_flaxMemberParameters34,"resolve":_flaxMemberParameters24,"debugFillProperties":_flaxMemberParameters23,"toStringShort":_flaxMemberParameters0,"toDiagnosticsNode":_flaxMemberParameters22,"toString":_flaxMemberParameters21}, getters: ["isConcrete","size","fill","weight","grade","opticalSize","color","opacity","shadows","applyTextScaling"], setters: [], contextMembers: [], superMembers: ["get:isConcrete","get:size","get:fill","get:weight","get:grade","get:opticalSize","get:color","get:opacity","get:shadows","get:applyTextScaling","copyWith","merge","resolve","debugFillProperties","toStringShort","toDiagnosticsNode","toString"]} as const;
export interface CupertinoIconThemeData {
readonly [_flaxDartTypeValue]: CupertinoIconThemeData;

copyWith(options?: {size?: number | null | undefined; fill?: number | null | undefined; weight?: number | null | undefined; grade?: number | null | undefined; opticalSize?: number | null | undefined; color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; opacity?: number | null | undefined; shadows?: DartListInput<upstream3.Shadow, Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }>> | null | undefined; applyTextScaling?: boolean | null | undefined}): CupertinoIconThemeData;
merge(other: Readonly<{ "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null): upstream0.IconThemeData;
resolve(context: upstream4.BuildContext): upstream0.IconThemeData;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream7.DiagnosticsTreeStyle | null | undefined}): upstream6.DiagnosticsNode;
toString(options?: {minLevel?: upstream8.DiagnosticLevel | undefined}): string;
get isConcrete(): boolean;
get size(): number | null;
get fill(): number | null;
get weight(): number | null;
get grade(): number | null;
get opticalSize(): number | null;
get color(): upstream2.Color | null;
get opacity(): number | null;
get shadows(): DartList<upstream3.Shadow> | null;
get applyTextScaling(): boolean | null;
}
export abstract class CupertinoIconThemeData extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CupertinoIconThemeData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: CupertinoIconThemeData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_cupertino#type:CupertinoIconThemeData", readonly [], false];
constructor(options?: {size?: number | null | undefined; fill?: number | null | undefined; weight?: number | null | undefined; grade?: number | null | undefined; opticalSize?: number | null | undefined; color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; opacity?: number | null | undefined; shadows?: DartListInput<upstream3.Shadow, Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }>> | null | undefined; applyTextScaling?: boolean | null | undefined}) { super(_CupertinoIconThemeDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(CupertinoIconThemeData.prototype, _CupertinoIconThemeDataProxy);
export namespace CupertinoIconThemeData { export function implement(args: [options?: {size?: number | null | undefined; fill?: number | null | undefined; weight?: number | null | undefined; grade?: number | null | undefined; opticalSize?: number | null | undefined; color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; opacity?: number | null | undefined; shadows?: DartListInput<upstream3.Shadow, Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }>> | null | undefined; applyTextScaling?: boolean | null | undefined}], implementation: {}): CupertinoIconThemeData {
return constructProxy(_CupertinoIconThemeDataProxy, args, implementation) as CupertinoIconThemeData; } }
_flaxBindInstanceType<CupertinoIconThemeData, typeof CupertinoIconThemeData>(CupertinoIconThemeData, "flax.core/sdk_cupertino#type:CupertinoIconThemeData", ["flax.core/sdk_widgets#type:IconThemeData","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "isConcrete" | "size" | "fill" | "weight" | "grade" | "opticalSize" | "color" | "opacity" | "shadows" | "applyTextScaling" | "copyWith" | "merge" | "resolve" | "debugFillProperties" | "toStringShort" | "toDiagnosticsNode" | "toString" | "__flaxBound:package:flutter/src/cupertino/icon_theme_data.dart::CupertinoIconThemeData" | "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
