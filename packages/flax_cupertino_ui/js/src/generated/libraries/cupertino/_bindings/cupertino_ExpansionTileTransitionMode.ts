// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/cupertino-ui/_bindings/cupertino.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ExpansionTileTransitionMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:cupertino_ui/src/expansion_tile.dart::ExpansionTileTransitionMode">, Readonly<{ "__flaxBound:package:cupertino_ui/src/expansion_tile.dart::ExpansionTileTransitionMode": readonly [] }> { readonly __ExpansionTileTransitionMode: unique symbol;
readonly [_flaxDartTypeValue]: ExpansionTileTransitionMode;
readonly name: string;
readonly index: number;

}
defineEnum("flax.cupertino/cupertino#type:ExpansionTileTransitionMode", ["fade","scroll"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_ExpansionTileTransitionMode_api = {
fade: enumValue<ExpansionTileTransitionMode>("flax.cupertino/cupertino#type:ExpansionTileTransitionMode", "fade"),
scroll: enumValue<ExpansionTileTransitionMode>("flax.cupertino/cupertino#type:ExpansionTileTransitionMode", "scroll"),
values: Object.freeze([enumValue<ExpansionTileTransitionMode>("flax.cupertino/cupertino#type:ExpansionTileTransitionMode", "fade"), enumValue<ExpansionTileTransitionMode>("flax.cupertino/cupertino#type:ExpansionTileTransitionMode", "scroll")]),
};
export const ExpansionTileTransitionMode = Object.freeze(_flaxBindInstanceType<ExpansionTileTransitionMode, typeof _flaxEnum_ExpansionTileTransitionMode_api>(_flaxEnum_ExpansionTileTransitionMode_api, "flax.cupertino/cupertino#type:ExpansionTileTransitionMode", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_ExpansionTileTransitionMode_api & _FlaxInstanceType<ExpansionTileTransitionMode> & _FlaxDartType<ExpansionTileTransitionMode, readonly ["class", "flax.cupertino/cupertino#type:ExpansionTileTransitionMode", readonly [], false]>);
