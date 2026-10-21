// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextLeadingDistribution';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextLeadingDistribution';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_FontWeight';
import '@flax/dart/ui/_bindings/flutter_FontWeight';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_FontStyle';
import '@flax/dart/ui/_bindings/flutter_FontStyle';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream9 from '@flax/flutter/painting/_bindings/sdk_painting_RenderComparison';
import '@flax/flutter/painting/_bindings/sdk_painting_RenderComparison';
import { _flaxMemberParameters129, _flaxMemberParameters21, _flaxMemberParameters130, _flaxMemberParameters131, _flaxMemberParameters2, _flaxMemberParameters58, _flaxMemberParameters56 } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/painting/_bindings/sdk_painting.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StrutStyle extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/painting/strut_style.dart::StrutStyle": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __StrutStyle: unique symbol;
readonly [_flaxDartTypeValue]: StrutStyle;

readonly fontFamily: string | null;
readonly fontFamilyFallback: DartList<string> | null;
readonly fontSize: number | null;
readonly height: number | null;
readonly leadingDistribution: upstream1.TextLeadingDistribution | null;
readonly fontWeight: upstream2.FontWeight | null;
readonly fontStyle: upstream3.FontStyle | null;
readonly leading: number | null;
readonly forceStrutHeight: boolean | null;
readonly debugLabel: string | null;
toStringShort(): string;
toString(options?: {minLevel?: upstream5.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream7.DiagnosticsTreeStyle | null | undefined}): upstream6.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>, options?: {prefix?: string | undefined}): void;
compareTo(other: Readonly<{ "__flaxBound:package:flutter/src/painting/strut_style.dart::StrutStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): upstream9.RenderComparison;
inheritFromTextStyle(other: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null): StrutStyle;
merge(other: Readonly<{ "__flaxBound:package:flutter/src/painting/strut_style.dart::StrutStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null): StrutStyle;
}
defineObject("flax.core/sdk_painting#type:StrutStyle", ["fontFamily","fontFamilyFallback","fontSize","height","leadingDistribution","fontWeight","fontStyle","leading","forceStrutHeight","debugLabel"], [], _flaxBindingMethods("flax.core/sdk_painting#type:StrutStyle", "object", {"debugFillProperties":_flaxMemberParameters129,"compareTo":_flaxMemberParameters21,"inheritFromTextStyle":_flaxMemberParameters21,"merge":_flaxMemberParameters21}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export function _StrutStyleFactory(options: { fontFamily?: string | null | undefined; fontFamilyFallback?: DartListInput<string, string> | null | undefined; fontSize?: number | null | undefined; height?: number | null | undefined; leadingDistribution?: upstream1.TextLeadingDistribution | null | undefined; leading?: number | null | undefined; fontWeight?: Readonly<{ "__flaxBound:dart:ui::FontWeight": readonly [] }> | null | undefined; fontStyle?: upstream3.FontStyle | null | undefined; forceStrutHeight?: boolean | null | undefined; debugLabel?: string | null | undefined; package?: string | null | undefined } = {}): StrutStyle {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_painting#type:StrutStyle", "", [{"name":"fontFamily"},{"name":"fontFamilyFallback"},{"name":"fontSize"},{"name":"height"},{"name":"leadingDistribution"},{"name":"leading"},{"name":"fontWeight"},{"name":"fontStyle"},{"name":"forceStrutHeight"},{"name":"debugLabel"},{"name":"package"}], [], options) as StrutStyle;
}
export namespace _StrutStyleFactory {
export function fromTextStyle(textStyle: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, options: { fontFamily?: string | null | undefined; fontFamilyFallback?: DartListInput<string, string> | null | undefined; fontSize?: number | null | undefined; height?: number | null | undefined; leadingDistribution?: upstream1.TextLeadingDistribution | null | undefined; leading?: number | null | undefined; fontWeight?: Readonly<{ "__flaxBound:dart:ui::FontWeight": readonly [] }> | null | undefined; fontStyle?: upstream3.FontStyle | null | undefined; forceStrutHeight?: boolean | null | undefined; debugLabel?: string | null | undefined; package?: string | null | undefined } = {}): StrutStyle {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_painting#type:StrutStyle", "fromTextStyle", [{"name":"textStyle","required":true,"positional":true},{"name":"fontFamily"},{"name":"fontFamilyFallback"},{"name":"fontSize"},{"name":"height"},{"name":"leadingDistribution"},{"name":"leading"},{"name":"fontWeight"},{"name":"fontStyle"},{"name":"forceStrutHeight"},{"name":"debugLabel"},{"name":"package"}], [textStyle], options) as StrutStyle;
}
}
const _StrutStyleProxy = {type: "flax.core/sdk_painting#type:StrutStyle", parameters: _flaxMemberParameters130, constructors: {"": _flaxMemberParameters130,"fromTextStyle": _flaxMemberParameters131}, methods: {"toStringShort":_flaxMemberParameters2,"toString":_flaxMemberParameters58,"toDiagnosticsNode":_flaxMemberParameters56,"debugFillProperties":_flaxMemberParameters129,"compareTo":_flaxMemberParameters21,"inheritFromTextStyle":_flaxMemberParameters21,"merge":_flaxMemberParameters21}, getters: ["fontFamily","fontFamilyFallback","fontSize","height","leadingDistribution","fontWeight","fontStyle","leading","forceStrutHeight","debugLabel"], setters: [], contextMembers: [], superMembers: ["get:fontFamily","get:fontFamilyFallback","get:fontSize","get:height","get:leadingDistribution","get:fontWeight","get:fontStyle","get:leading","get:forceStrutHeight","get:debugLabel","toStringShort","toString","toDiagnosticsNode","debugFillProperties","compareTo","inheritFromTextStyle","merge"]} as const;
export interface _StrutStyleNative extends StrutStyle {
readonly [_flaxDartTypeValue]: _StrutStyleNative;
readonly [_flaxDartConstructors]?: {"": (options?: {fontFamily?: string | null | undefined; fontFamilyFallback?: DartListInput<string, string> | null | undefined; fontSize?: number | null | undefined; height?: number | null | undefined; leadingDistribution?: upstream1.TextLeadingDistribution | null | undefined; leading?: number | null | undefined; fontWeight?: Readonly<{ "__flaxBound:dart:ui::FontWeight": readonly [] }> | null | undefined; fontStyle?: upstream3.FontStyle | null | undefined; forceStrutHeight?: boolean | null | undefined; debugLabel?: string | null | undefined; package?: string | null | undefined}) => void;"fromTextStyle": (textStyle: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, options?: {fontFamily?: string | null | undefined; fontFamilyFallback?: DartListInput<string, string> | null | undefined; fontSize?: number | null | undefined; height?: number | null | undefined; leadingDistribution?: upstream1.TextLeadingDistribution | null | undefined; leading?: number | null | undefined; fontWeight?: Readonly<{ "__flaxBound:dart:ui::FontWeight": readonly [] }> | null | undefined; fontStyle?: upstream3.FontStyle | null | undefined; forceStrutHeight?: boolean | null | undefined; debugLabel?: string | null | undefined; package?: string | null | undefined}) => void;};

toStringShort(): string;
toString(options?: {minLevel?: upstream5.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream7.DiagnosticsTreeStyle | null | undefined}): upstream6.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>, options?: {prefix?: string | undefined}): void;
compareTo(other: Readonly<{ "__flaxBound:package:flutter/src/painting/strut_style.dart::StrutStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): upstream9.RenderComparison;
inheritFromTextStyle(other: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null): StrutStyle;
merge(other: Readonly<{ "__flaxBound:package:flutter/src/painting/strut_style.dart::StrutStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null): StrutStyle;
get fontFamily(): string | null;
get fontFamilyFallback(): DartList<string> | null;
get fontSize(): number | null;
get height(): number | null;
get leadingDistribution(): upstream1.TextLeadingDistribution | null;
get fontWeight(): upstream2.FontWeight | null;
get fontStyle(): upstream3.FontStyle | null;
get leading(): number | null;
get forceStrutHeight(): boolean | null;
get debugLabel(): string | null;
}
export abstract class _StrutStyleNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<StrutStyle>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: StrutStyle;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_painting#type:StrutStyle", readonly [], false];
constructor(options?: {fontFamily?: string | null | undefined; fontFamilyFallback?: DartListInput<string, string> | null | undefined; fontSize?: number | null | undefined; height?: number | null | undefined; leadingDistribution?: upstream1.TextLeadingDistribution | null | undefined; leading?: number | null | undefined; fontWeight?: Readonly<{ "__flaxBound:dart:ui::FontWeight": readonly [] }> | null | undefined; fontStyle?: upstream3.FontStyle | null | undefined; forceStrutHeight?: boolean | null | undefined; debugLabel?: string | null | undefined; package?: string | null | undefined}); constructor(call: _FlaxProxySuper<_StrutStyleNative>); constructor(...args: unknown[]) { super(_StrutStyleProxy, args); }
}
_flaxDefineProxyBase(_StrutStyleNative.prototype, _StrutStyleProxy);
export namespace _StrutStyleFactory { export function implement(args: [options?: {fontFamily?: string | null | undefined; fontFamilyFallback?: DartListInput<string, string> | null | undefined; fontSize?: number | null | undefined; height?: number | null | undefined; leadingDistribution?: upstream1.TextLeadingDistribution | null | undefined; leading?: number | null | undefined; fontWeight?: Readonly<{ "__flaxBound:dart:ui::FontWeight": readonly [] }> | null | undefined; fontStyle?: upstream3.FontStyle | null | undefined; forceStrutHeight?: boolean | null | undefined; debugLabel?: string | null | undefined; package?: string | null | undefined}], implementation: {}): StrutStyle {
return constructProxy(_StrutStyleProxy, args, implementation) as StrutStyle; } }
const _StrutStyleBinding = _flaxProxyFactory(_StrutStyleFactory, _StrutStyleNative) as unknown as typeof _StrutStyleFactory & (new(options?: {fontFamily?: string | null | undefined; fontFamilyFallback?: DartListInput<string, string> | null | undefined; fontSize?: number | null | undefined; height?: number | null | undefined; leadingDistribution?: upstream1.TextLeadingDistribution | null | undefined; leading?: number | null | undefined; fontWeight?: Readonly<{ "__flaxBound:dart:ui::FontWeight": readonly [] }> | null | undefined; fontStyle?: upstream3.FontStyle | null | undefined; forceStrutHeight?: boolean | null | undefined; debugLabel?: string | null | undefined; package?: string | null | undefined}) => _StrutStyleNative) & (new(call: _FlaxProxySuper<_StrutStyleNative>) => _StrutStyleNative);
export namespace _StrutStyleFactory { export declare const disabled: StrutStyle; }
_flaxDefineStaticGetters(_StrutStyleFactory, "flax.core/sdk_painting#read:StrutStyle.", ["disabled"]);
export const StrutStyle: typeof _StrutStyleBinding & _FlaxInstanceType<StrutStyle> & _FlaxDartType<StrutStyle, readonly ["class", "flax.core/sdk_painting#type:StrutStyle", readonly [], false]> = _flaxBindInstanceType<StrutStyle, typeof _StrutStyleBinding>(_StrutStyleBinding, "flax.core/sdk_painting#type:StrutStyle", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _StrutStyleBinding & _FlaxInstanceType<StrutStyle> & _FlaxDartType<StrutStyle, readonly ["class", "flax.core/sdk_painting#type:StrutStyle", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "fontFamily" | "fontFamilyFallback" | "fontSize" | "height" | "leadingDistribution" | "fontWeight" | "fontStyle" | "leading" | "forceStrutHeight" | "debugLabel" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "compareTo" | "inheritFromTextStyle" | "merge" | "__flaxBound:package:flutter/src/painting/strut_style.dart::StrutStyle" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
