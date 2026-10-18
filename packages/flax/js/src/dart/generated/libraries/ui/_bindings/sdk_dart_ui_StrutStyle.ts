// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextLeadingDistribution';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextLeadingDistribution';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_FontWeight';
import '@flax/dart/ui/_bindings/flutter_FontWeight';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_FontStyle';
import '@flax/dart/ui/_bindings/flutter_FontStyle';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StrutStyle extends Readonly<{ "__flaxBound:dart:ui::StrutStyle": readonly [] }> { readonly __StrutStyle: unique symbol;
readonly [_flaxDartTypeValue]: StrutStyle;

}
defineObject("flax.core/sdk_dart_ui#type:StrutStyle", [], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:StrutStyle", "object", {}, {}), []);
export function _StrutStyleFactory(options: { fontFamily?: string | null | undefined; fontFamilyFallback?: DartListInput<string, string> | null | undefined; fontSize?: number | null | undefined; height?: number | null | undefined; leadingDistribution?: upstream0.TextLeadingDistribution | null | undefined; leading?: number | null | undefined; fontWeight?: Readonly<{ "__flaxBound:dart:ui::FontWeight": readonly [] }> | null | undefined; fontStyle?: upstream2.FontStyle | null | undefined; forceStrutHeight?: boolean | null | undefined } = {}): StrutStyle {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:StrutStyle", "", [{"name":"fontFamily","required":false,"positional":false},{"name":"fontFamilyFallback","required":false,"positional":false},{"name":"fontSize","required":false,"positional":false},{"name":"height","required":false,"positional":false},{"name":"leadingDistribution","required":false,"positional":false},{"name":"leading","required":false,"positional":false},{"name":"fontWeight","required":false,"positional":false},{"name":"fontStyle","required":false,"positional":false},{"name":"forceStrutHeight","required":false,"positional":false}], [], options) as StrutStyle;
}
export const StrutStyle: typeof _StrutStyleFactory & _FlaxInstanceType<StrutStyle> & _FlaxDartType<StrutStyle, readonly ["class", "flax.core/sdk_dart_ui#type:StrutStyle", readonly [], false]> = _flaxBindInstanceType<StrutStyle, typeof _StrutStyleFactory>(_StrutStyleFactory, "flax.core/sdk_dart_ui#type:StrutStyle", ["dart:core::Object"]) as typeof _StrutStyleFactory & _FlaxInstanceType<StrutStyle> & _FlaxDartType<StrutStyle, readonly ["class", "flax.core/sdk_dart_ui#type:StrutStyle", readonly [], false]>;
