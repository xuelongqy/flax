// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FloatingLabelBehavior extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:material_ui/src/input_decorator.dart::FloatingLabelBehavior">, Readonly<{ "__flaxBound:package:material_ui/src/input_decorator.dart::FloatingLabelBehavior": readonly [] }> { readonly __FloatingLabelBehavior: unique symbol;
readonly [_flaxDartTypeValue]: FloatingLabelBehavior;
readonly name: string;
readonly index: number;

}
defineEnum("flax.material/material#type:FloatingLabelBehavior", ["never","auto","always"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_FloatingLabelBehavior_api = {
never: enumValue<FloatingLabelBehavior>("flax.material/material#type:FloatingLabelBehavior", "never"),
auto: enumValue<FloatingLabelBehavior>("flax.material/material#type:FloatingLabelBehavior", "auto"),
always: enumValue<FloatingLabelBehavior>("flax.material/material#type:FloatingLabelBehavior", "always"),
values: Object.freeze([enumValue<FloatingLabelBehavior>("flax.material/material#type:FloatingLabelBehavior", "never"), enumValue<FloatingLabelBehavior>("flax.material/material#type:FloatingLabelBehavior", "auto"), enumValue<FloatingLabelBehavior>("flax.material/material#type:FloatingLabelBehavior", "always")]),
};
export const FloatingLabelBehavior = Object.freeze(_flaxBindInstanceType<FloatingLabelBehavior, typeof _flaxEnum_FloatingLabelBehavior_api>(_flaxEnum_FloatingLabelBehavior_api, "flax.material/material#type:FloatingLabelBehavior", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_FloatingLabelBehavior_api & _FlaxInstanceType<FloatingLabelBehavior> & _FlaxDartType<FloatingLabelBehavior, readonly ["class", "flax.material/material#type:FloatingLabelBehavior", readonly [], false]>);
