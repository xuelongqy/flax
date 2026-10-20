// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ThemeMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "isSystem" | "isLight" | "isDark" | "__flaxBound:package:material_ui/src/app.dart::ThemeMode">, Readonly<{ "__flaxBound:package:material_ui/src/app.dart::ThemeMode": readonly [] }> { readonly __ThemeMode: unique symbol;
readonly [_flaxDartTypeValue]: ThemeMode;
readonly name: string;
readonly index: number;

readonly isSystem: boolean;
readonly isLight: boolean;
readonly isDark: boolean;
}
defineEnum("flax.material/material#type:ThemeMode", ["system","light","dark"], {
get isSystem(): boolean { return invokeTopLevel("flax.material/material#function:ThemeMode.isSystem%3Aget", [this]) as boolean; },
get isLight(): boolean { return invokeTopLevel("flax.material/material#function:ThemeMode.isLight%3Aget", [this]) as boolean; },
get isDark(): boolean { return invokeTopLevel("flax.material/material#function:ThemeMode.isDark%3Aget", [this]) as boolean; },
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_ThemeMode_api = {
system: enumValue<ThemeMode>("flax.material/material#type:ThemeMode", "system"),
light: enumValue<ThemeMode>("flax.material/material#type:ThemeMode", "light"),
dark: enumValue<ThemeMode>("flax.material/material#type:ThemeMode", "dark"),
values: Object.freeze([enumValue<ThemeMode>("flax.material/material#type:ThemeMode", "system"), enumValue<ThemeMode>("flax.material/material#type:ThemeMode", "light"), enumValue<ThemeMode>("flax.material/material#type:ThemeMode", "dark")]),
};
export const ThemeMode = Object.freeze(_flaxBindInstanceType<ThemeMode, typeof _flaxEnum_ThemeMode_api>(_flaxEnum_ThemeMode_api, "flax.material/material#type:ThemeMode", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_ThemeMode_api & _FlaxInstanceType<ThemeMode> & _FlaxDartType<ThemeMode, readonly ["class", "flax.material/material#type:ThemeMode", readonly [], false]>);
