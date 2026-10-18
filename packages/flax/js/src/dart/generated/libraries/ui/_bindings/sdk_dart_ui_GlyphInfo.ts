// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_TextRange';
import '@flax/dart/ui/_bindings/flutter_TextRange';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
const _flaxMemberParameters0 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface GlyphInfo extends Readonly<{ "__flaxBound:dart:ui::GlyphInfo": readonly [] }> { readonly __GlyphInfo: unique symbol;
readonly [_flaxDartTypeValue]: GlyphInfo;

readonly graphemeClusterLayoutBounds: upstream0.Rect;
readonly graphemeClusterCodeUnitRange: upstream1.TextRange;
readonly writingDirection: upstream2.TextDirection;
toString(): string;
}
defineObject("flax.core/sdk_dart_ui#type:GlyphInfo", ["graphemeClusterLayoutBounds","graphemeClusterCodeUnitRange","writingDirection"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:GlyphInfo", "object", {"toString":_flaxMemberParameters0}, {}), []);
export function _GlyphInfoFactory(graphemeClusterLayoutBounds: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>, graphemeClusterCodeUnitRange: Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>, writingDirection: upstream2.TextDirection): GlyphInfo {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 3) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:GlyphInfo", "", [{"name":"graphemeClusterLayoutBounds","required":true,"positional":true},{"name":"graphemeClusterCodeUnitRange","required":true,"positional":true},{"name":"writingDirection","required":true,"positional":true}], [graphemeClusterLayoutBounds, graphemeClusterCodeUnitRange, writingDirection], {}) as GlyphInfo;
}
export const GlyphInfo: typeof _GlyphInfoFactory & _FlaxInstanceType<GlyphInfo> & _FlaxDartType<GlyphInfo, readonly ["class", "flax.core/sdk_dart_ui#type:GlyphInfo", readonly [], false]> = _flaxBindInstanceType<GlyphInfo, typeof _GlyphInfoFactory>(_GlyphInfoFactory, "flax.core/sdk_dart_ui#type:GlyphInfo", ["dart:core::Object"]) as typeof _GlyphInfoFactory & _FlaxInstanceType<GlyphInfo> & _FlaxDartType<GlyphInfo, readonly ["class", "flax.core/sdk_dart_ui#type:GlyphInfo", readonly [], false]>;
