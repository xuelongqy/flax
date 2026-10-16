// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"backgroundColor","required":false,"positional":false},{"name":"color","required":false,"positional":false},{"name":"fontSize","required":false,"positional":false},{"name":"fontStyle","required":false,"positional":false},{"name":"fontWeight","required":false,"positional":false},{"name":"height","required":false,"positional":false},{"name":"inherit","required":false,"positional":false},{"name":"letterSpacing","required":false,"positional":false},{"name":"wordSpacing","required":false,"positional":false}] as const;
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_FontWeight';
import '@flax/flutter/services/_bindings/flutter_FontWeight';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_FontStyle';
import '@flax/flutter/widgets/_bindings/flutter_FontStyle';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextStyle extends Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __TextStyle: unique symbol;

readonly inherit: boolean;
readonly color: upstream0.Color | null;
readonly backgroundColor: upstream0.Color | null;
readonly fontSize: number | null;
readonly fontWeight: upstream1.FontWeight | null;
readonly fontStyle: upstream2.FontStyle | null;
readonly letterSpacing: number | null;
readonly wordSpacing: number | null;
readonly height: number | null;
copyWith(options?: {backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; fontSize?: number | null | undefined; fontStyle?: upstream2.FontStyle | null | undefined; fontWeight?: Readonly<{ "__flaxBound:dart:ui::FontWeight": readonly [] }> | null | undefined; height?: number | null | undefined; inherit?: boolean | null | undefined; letterSpacing?: number | null | undefined; wordSpacing?: number | null | undefined}): TextStyle;
}
defineObject("flax.core/flutter#type:TextStyle", ["inherit","color","backgroundColor","fontSize","fontWeight","fontStyle","letterSpacing","wordSpacing","height"], [], _flaxBindingMethods("flax.core/flutter#type:TextStyle", "object", {"copyWith":_flaxMemberParameters0}, {}), []);
function _TextStyleFactory(options: { inherit?: boolean | undefined; color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; fontSize?: number | null | undefined; fontWeight?: Readonly<{ "__flaxBound:dart:ui::FontWeight": readonly [] }> | null | undefined; fontStyle?: upstream2.FontStyle | null | undefined; letterSpacing?: number | null | undefined; wordSpacing?: number | null | undefined; height?: number | null | undefined } = {}): TextStyle {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:TextStyle", "", [{"name":"inherit","required":false,"positional":false},{"name":"color","required":false,"positional":false},{"name":"backgroundColor","required":false,"positional":false},{"name":"fontSize","required":false,"positional":false},{"name":"fontWeight","required":false,"positional":false},{"name":"fontStyle","required":false,"positional":false},{"name":"letterSpacing","required":false,"positional":false},{"name":"wordSpacing","required":false,"positional":false},{"name":"height","required":false,"positional":false}], [], options) as TextStyle;
}
export const TextStyle: typeof _TextStyleFactory & _FlaxInstanceType<TextStyle> & _FlaxDartType<TextStyle, readonly ["class", "flax.core/flutter#type:TextStyle", readonly [], false]> = _flaxBindInstanceType<TextStyle, typeof _TextStyleFactory>(_TextStyleFactory, "flax.core/flutter#type:TextStyle", ["dart:core::Object","package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]) as typeof _TextStyleFactory & _FlaxInstanceType<TextStyle> & _FlaxDartType<TextStyle, readonly ["class", "flax.core/flutter#type:TextStyle", readonly [], false]>;
