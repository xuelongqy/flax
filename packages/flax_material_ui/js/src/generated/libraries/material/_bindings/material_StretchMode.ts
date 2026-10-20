// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StretchMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:material_ui/src/flexible_space_bar.dart::StretchMode">, Readonly<{ "__flaxBound:package:material_ui/src/flexible_space_bar.dart::StretchMode": readonly [] }> { readonly __StretchMode: unique symbol;
readonly [_flaxDartTypeValue]: StretchMode;
readonly name: string;
readonly index: number;

}
defineEnum("flax.material/material#type:StretchMode", ["zoomBackground","blurBackground","fadeTitle"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_StretchMode_api = {
zoomBackground: enumValue<StretchMode>("flax.material/material#type:StretchMode", "zoomBackground"),
blurBackground: enumValue<StretchMode>("flax.material/material#type:StretchMode", "blurBackground"),
fadeTitle: enumValue<StretchMode>("flax.material/material#type:StretchMode", "fadeTitle"),
values: Object.freeze([enumValue<StretchMode>("flax.material/material#type:StretchMode", "zoomBackground"), enumValue<StretchMode>("flax.material/material#type:StretchMode", "blurBackground"), enumValue<StretchMode>("flax.material/material#type:StretchMode", "fadeTitle")]),
};
export const StretchMode = Object.freeze(_flaxBindInstanceType<StretchMode, typeof _flaxEnum_StretchMode_api>(_flaxEnum_StretchMode_api, "flax.material/material#type:StretchMode", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_StretchMode_api & _FlaxInstanceType<StretchMode> & _FlaxDartType<StretchMode, readonly ["class", "flax.material/material#type:StretchMode", readonly [], false]>);
