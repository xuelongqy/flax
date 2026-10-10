// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindInstanceType as _flaxHostBindInstanceType, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"brightness","required":false,"positional":false},{"name":"colorScheme","required":false,"positional":false},{"name":"textTheme","required":false,"positional":false}] as const;
import type * as upstream0 from '@flax/flutter/material/_bindings/material_ColorScheme';
import '@flax/flutter/material/_bindings/material_ColorScheme';
import type * as upstream1 from '@flax/flutter/material/_bindings/material_Brightness';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream3 from '@flax/flutter/material/_bindings/material_TextTheme';
import '@flax/flutter/material/_bindings/material_TextTheme';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/material.__module";
export interface ThemeData extends Readonly<{ "__flaxBound:package:material_ui/src/theme_data.dart::ThemeData": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __ThemeData: unique symbol;
readonly brightness: upstream1.Brightness;
readonly colorScheme: upstream0.ColorScheme;
readonly textTheme: upstream3.TextTheme;
copyWith(options?: {brightness?: upstream1.Brightness | null | undefined; colorScheme?: Readonly<{ "__flaxBound:package:material_ui/src/color_scheme.dart::ColorScheme": readonly [] }> | null | undefined; textTheme?: Readonly<{ "__flaxBound:package:material_ui/src/text_theme.dart::TextTheme": readonly [] }> | null | undefined}): ThemeData;
}
defineObject("flax.material/material#type:ThemeData", ["brightness","colorScheme","textTheme"], [], _flaxBindingMethods("flax.material/material#type:ThemeData", "object", {"copyWith":_flaxMemberParameters0}), []);
function _ThemeDataFactory(options: { colorScheme?: Readonly<{ "__flaxBound:package:material_ui/src/color_scheme.dart::ColorScheme": readonly [] }> | null | undefined; brightness?: upstream1.Brightness | null | undefined; colorSchemeSeed?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; textTheme?: Readonly<{ "__flaxBound:package:material_ui/src/text_theme.dart::TextTheme": readonly [] }> | null | undefined } = {}): ThemeData {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:ThemeData", "", [{"name":"colorScheme","required":false,"positional":false},{"name":"brightness","required":false,"positional":false},{"name":"colorSchemeSeed","required":false,"positional":false},{"name":"textTheme","required":false,"positional":false}], [], options) as ThemeData;
}
export const ThemeData: typeof _ThemeDataFactory & _FlaxInstanceType<ThemeData> = _flaxBindInstanceType<ThemeData, typeof _ThemeDataFactory>(_ThemeDataFactory, "flax.material/material#type:ThemeData", ["dart:core::Object","package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);
