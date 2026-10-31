// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FlaxCanvasContent extends Omit<upstream0.Listenable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flax/bindings.dart::FlaxCanvasContent": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __FlaxCanvasContent: unique symbol;
readonly [_flaxDartTypeValue]: FlaxCanvasContent;

addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
}
defineObject("flax.core/flutter#type:FlaxCanvasContent", [], [], _flaxBindingMethods("flax.core/flutter#type:FlaxCanvasContent", "object", {}, {}), ["removeListener"], undefined, "flax.core/flutter#type:Listenable");
export const FlaxCanvasContent: object & _FlaxInstanceType<FlaxCanvasContent> & _FlaxDartType<FlaxCanvasContent, readonly ["class", "flax.core/flutter#type:FlaxCanvasContent", readonly [], false]> = _flaxBindInstanceType<FlaxCanvasContent, object>({}, "flax.core/flutter#type:FlaxCanvasContent", ["dart:core::Object","flax.core/flutter#type:Listenable"]) as object & _FlaxInstanceType<FlaxCanvasContent> & _FlaxDartType<FlaxCanvasContent, readonly ["class", "flax.core/flutter#type:FlaxCanvasContent", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "addListener" | "removeListener" | "__flaxBound:package:flax/bindings.dart::FlaxCanvasContent" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
