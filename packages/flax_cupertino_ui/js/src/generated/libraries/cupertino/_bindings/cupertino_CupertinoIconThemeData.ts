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
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { _flaxMemberParameters36, _flaxMemberParameters37, _flaxMemberParameters0, _flaxMemberParameters23, _flaxMemberParameters24, _flaxMemberParameters25, _flaxMemberParameters38, _flaxMemberParameters26 } from "@flax/cupertino-ui/_bindings/cupertino.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/cupertino-ui/_bindings/cupertino.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CupertinoIconThemeData extends Omit<upstream0.IconThemeData, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.IconThemeData>, Readonly<{ "__flaxBound:package:cupertino_ui/src/icon_theme_data.dart::CupertinoIconThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __CupertinoIconThemeData: unique symbol;
readonly [_flaxDartTypeValue]: CupertinoIconThemeData;

readonly isConcrete: boolean;
readonly size: number | null;
readonly fill: number | null;
readonly weight: number | null;
readonly grade: number | null;
readonly opticalSize: number | null;
readonly color: upstream2.Color | null;
readonly opacity: number | null;
readonly shadows: DartList<upstream3.Shadow> | null;
readonly applyTextScaling: boolean | null;
toStringShort(): string;
toString(options?: {minLevel?: upstream4.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
copyWith(options?: {applyTextScaling?: boolean | null | undefined; color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; fill?: number | null | undefined; grade?: number | null | undefined; opacity?: number | null | undefined; opticalSize?: number | null | undefined; shadows?: DartListInput<upstream3.Shadow, Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }>> | null | undefined; size?: number | null | undefined; weight?: number | null | undefined}): CupertinoIconThemeData;
merge(other: Readonly<{ "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null): upstream0.IconThemeData;
resolve(context: upstream8.BuildContext): upstream0.IconThemeData;
}
defineObject("flax.cupertino/cupertino#type:CupertinoIconThemeData", ["isConcrete","size","fill","weight","grade","opticalSize","color","opacity","shadows","applyTextScaling"], [], _flaxBindingMethods("flax.cupertino/cupertino#type:CupertinoIconThemeData", "object", {"copyWith":_flaxMemberParameters36}, {}), [], undefined, "flax.core/sdk_widgets#type:IconThemeData");
export function _CupertinoIconThemeDataFactory(options: { size?: number | null | undefined; fill?: number | null | undefined; weight?: number | null | undefined; grade?: number | null | undefined; opticalSize?: number | null | undefined; color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; opacity?: number | null | undefined; shadows?: DartListInput<upstream3.Shadow, Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }>> | null | undefined; applyTextScaling?: boolean | null | undefined } = {}): CupertinoIconThemeData {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.cupertino/cupertino#type:CupertinoIconThemeData", "", [{"name":"size"},{"name":"fill"},{"name":"weight"},{"name":"grade"},{"name":"opticalSize"},{"name":"color"},{"name":"opacity"},{"name":"shadows"},{"name":"applyTextScaling"}], [], options) as CupertinoIconThemeData;
}
const _CupertinoIconThemeDataProxy = {type: "flax.cupertino/cupertino#type:CupertinoIconThemeData", parameters: _flaxMemberParameters37, constructors: {"": _flaxMemberParameters37}, methods: {"toStringShort":_flaxMemberParameters0,"toString":_flaxMemberParameters23,"toDiagnosticsNode":_flaxMemberParameters24,"debugFillProperties":_flaxMemberParameters25,"copyWith":_flaxMemberParameters36,"merge":_flaxMemberParameters38,"resolve":_flaxMemberParameters26}, getters: ["isConcrete","size","fill","weight","grade","opticalSize","color","opacity","shadows","applyTextScaling"], setters: [], contextMembers: [], superMembers: ["get:isConcrete","get:size","get:fill","get:weight","get:grade","get:opticalSize","get:color","get:opacity","get:shadows","get:applyTextScaling","toStringShort","toString","toDiagnosticsNode","debugFillProperties","copyWith","merge","resolve"]} as const;
export interface _CupertinoIconThemeDataNative extends CupertinoIconThemeData {
readonly [_flaxDartTypeValue]: _CupertinoIconThemeDataNative;

toStringShort(): string;
toString(options?: {minLevel?: upstream4.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
copyWith(options?: {size?: number | null | undefined; fill?: number | null | undefined; weight?: number | null | undefined; grade?: number | null | undefined; opticalSize?: number | null | undefined; color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; opacity?: number | null | undefined; shadows?: DartListInput<upstream3.Shadow, Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }>> | null | undefined; applyTextScaling?: boolean | null | undefined}): CupertinoIconThemeData;
merge(other: Readonly<{ "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null): upstream0.IconThemeData;
resolve(context: upstream8.BuildContext): upstream0.IconThemeData;
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
export abstract class _CupertinoIconThemeDataNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CupertinoIconThemeData>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: CupertinoIconThemeData;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.cupertino/cupertino#type:CupertinoIconThemeData", readonly [], false];
constructor(options?: {size?: number | null | undefined; fill?: number | null | undefined; weight?: number | null | undefined; grade?: number | null | undefined; opticalSize?: number | null | undefined; color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; opacity?: number | null | undefined; shadows?: DartListInput<upstream3.Shadow, Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }>> | null | undefined; applyTextScaling?: boolean | null | undefined}) { super(_CupertinoIconThemeDataProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_CupertinoIconThemeDataNative.prototype, _CupertinoIconThemeDataProxy);
export namespace _CupertinoIconThemeDataFactory { export function implement(args: [options?: {size?: number | null | undefined; fill?: number | null | undefined; weight?: number | null | undefined; grade?: number | null | undefined; opticalSize?: number | null | undefined; color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; opacity?: number | null | undefined; shadows?: DartListInput<upstream3.Shadow, Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }>> | null | undefined; applyTextScaling?: boolean | null | undefined}], implementation: {}): CupertinoIconThemeData {
return constructProxy(_CupertinoIconThemeDataProxy, args, implementation) as CupertinoIconThemeData; } }
const _CupertinoIconThemeDataBinding = _flaxProxyFactory(_CupertinoIconThemeDataFactory, _CupertinoIconThemeDataNative) as unknown as typeof _CupertinoIconThemeDataFactory & (new(options?: {size?: number | null | undefined; fill?: number | null | undefined; weight?: number | null | undefined; grade?: number | null | undefined; opticalSize?: number | null | undefined; color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; opacity?: number | null | undefined; shadows?: DartListInput<upstream3.Shadow, Readonly<{ "__flaxBound:dart:ui::Shadow": readonly [] }>> | null | undefined; applyTextScaling?: boolean | null | undefined}) => _CupertinoIconThemeDataNative);
export const CupertinoIconThemeData: typeof _CupertinoIconThemeDataBinding & _FlaxInstanceType<CupertinoIconThemeData> & _FlaxDartType<CupertinoIconThemeData, readonly ["class", "flax.cupertino/cupertino#type:CupertinoIconThemeData", readonly [], false]> = _flaxBindInstanceType<CupertinoIconThemeData, typeof _CupertinoIconThemeDataBinding>(_CupertinoIconThemeDataBinding, "flax.cupertino/cupertino#type:CupertinoIconThemeData", ["flax.core/sdk_widgets#type:IconThemeData","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _CupertinoIconThemeDataBinding & _FlaxInstanceType<CupertinoIconThemeData> & _FlaxDartType<CupertinoIconThemeData, readonly ["class", "flax.cupertino/cupertino#type:CupertinoIconThemeData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "isConcrete" | "size" | "fill" | "weight" | "grade" | "opticalSize" | "color" | "opacity" | "shadows" | "applyTextScaling" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "merge" | "resolve" | "__flaxBound:package:cupertino_ui/src/icon_theme_data.dart::CupertinoIconThemeData" | "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
