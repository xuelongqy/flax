// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindInstanceType as _flaxHostBindInstanceType, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineEnum as _flaxHostDefineEnum, invokeEnum as _flaxHostInvokeEnum, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"brightness","required":false,"positional":false},{"name":"error","required":false,"positional":false},{"name":"onError","required":false,"positional":false},{"name":"onPrimary","required":false,"positional":false},{"name":"onSurface","required":false,"positional":false},{"name":"primary","required":false,"positional":false},{"name":"surface","required":false,"positional":false}] as const;
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream1 from '@flax/flutter/material/_bindings/material_Brightness';
import '@flax/flutter/material/_bindings/material_Brightness';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/material.__module";
export interface ColorScheme extends Readonly<{ "__flaxBound:package:material_ui/src/color_scheme.dart::ColorScheme": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __ColorScheme: unique symbol;
readonly brightness: upstream1.Brightness;
readonly primary: upstream0.Color;
readonly onPrimary: upstream0.Color;
readonly surface: upstream0.Color;
readonly onSurface: upstream0.Color;
readonly error: upstream0.Color;
readonly onError: upstream0.Color;
copyWith(options?: {brightness?: upstream1.Brightness | null | undefined; error?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; onError?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; onPrimary?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; onSurface?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; primary?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; surface?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined}): ColorScheme;
}
defineObject("flax.material/material#type:ColorScheme", ["brightness","primary","onPrimary","surface","onSurface","error","onError"], [], _flaxBindingMethods("flax.material/material#type:ColorScheme", "object", {"copyWith":_flaxMemberParameters0}), []);
namespace _ColorSchemeFactory {
export function fromSeed(options: { seedColor: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>; brightness?: upstream1.Brightness | undefined }): ColorScheme {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:ColorScheme", "fromSeed", [{"name":"seedColor","required":true,"positional":false},{"name":"brightness","required":false,"positional":false}], [], options) as ColorScheme;
}
}
export const ColorScheme: typeof _ColorSchemeFactory & _FlaxInstanceType<ColorScheme> = _flaxBindInstanceType<ColorScheme, typeof _ColorSchemeFactory>(_ColorSchemeFactory, "flax.material/material#type:ColorScheme", ["dart:core::Object","package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);
