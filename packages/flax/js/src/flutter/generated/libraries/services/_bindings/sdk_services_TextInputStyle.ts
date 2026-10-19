// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_FontWeight';
import '@flax/dart/ui/_bindings/flutter_FontWeight';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_TextAlign';
import '@flax/dart/ui/_bindings/flutter_TextAlign';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { _flaxMemberParameters0 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextInputStyle extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputStyle": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __TextInputStyle: unique symbol;
readonly [_flaxDartTypeValue]: TextInputStyle;

readonly fontFamily: string | null;
readonly fontSize: number | null;
readonly fontWeight: upstream1.FontWeight | null;
readonly textDirection: upstream2.TextDirection;
readonly textAlign: upstream3.TextAlign;
readonly letterSpacing: number | null;
readonly wordSpacing: number | null;
readonly lineHeight: number | null;
toStringShort(): string;
toString(options?: {minLevel?: upstream4.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toJson(): DartMap<string, unknown | null>;
}
defineObject("flax.core/sdk_services#type:TextInputStyle", ["fontFamily","fontSize","fontWeight","textDirection","textAlign","letterSpacing","wordSpacing","lineHeight"], [], _flaxBindingMethods("flax.core/sdk_services#type:TextInputStyle", "object", {"toJson":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export function _TextInputStyleFactory(options: { fontFamily?: string | null | undefined; fontSize?: number | null | undefined; fontWeight?: Readonly<{ "__flaxBound:dart:ui::FontWeight": readonly [] }> | null | undefined; textDirection: upstream2.TextDirection; textAlign: upstream3.TextAlign; letterSpacing?: number | null | undefined; wordSpacing?: number | null | undefined; lineHeight?: number | null | undefined }): TextInputStyle {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:TextInputStyle", "", [{"name":"fontFamily"},{"name":"fontSize"},{"name":"fontWeight"},{"name":"textDirection","required":true},{"name":"textAlign","required":true},{"name":"letterSpacing"},{"name":"wordSpacing"},{"name":"lineHeight"}], [], options) as TextInputStyle;
}
export const TextInputStyle: typeof _TextInputStyleFactory & _FlaxInstanceType<TextInputStyle> & _FlaxDartType<TextInputStyle, readonly ["class", "flax.core/sdk_services#type:TextInputStyle", readonly [], false]> = _flaxBindInstanceType<TextInputStyle, typeof _TextInputStyleFactory>(_TextInputStyleFactory, "flax.core/sdk_services#type:TextInputStyle", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _TextInputStyleFactory & _FlaxInstanceType<TextInputStyle> & _FlaxDartType<TextInputStyle, readonly ["class", "flax.core/sdk_services#type:TextInputStyle", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "fontFamily" | "fontSize" | "fontWeight" | "textDirection" | "textAlign" | "letterSpacing" | "wordSpacing" | "lineHeight" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "toJson" | "__flaxBound:package:flutter/src/services/text_input.dart::TextInputStyle" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
