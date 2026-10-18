// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_SelectionDetails';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SelectionDetails';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SelectionListenerNotifier extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/widgets/selectable_region.dart::SelectionListenerNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __SelectionListenerNotifier: unique symbol;
readonly [_flaxDartTypeValue]: SelectionListenerNotifier;

readonly hasListeners: boolean;
readonly selection: upstream2.SelectionDetails;
readonly registered: boolean;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
}
defineObject("flax.core/sdk_widgets#type:SelectionListenerNotifier", ["hasListeners","selection","registered"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:SelectionListenerNotifier", "object", {}, {}), ["removeListener"], undefined, "flax.core/sdk_foundation#type:ChangeNotifier");
export function _SelectionListenerNotifierFactory(): SelectionListenerNotifier {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:SelectionListenerNotifier", "", [], [], {}) as SelectionListenerNotifier;
}
export const SelectionListenerNotifier: typeof _SelectionListenerNotifierFactory & _FlaxInstanceType<SelectionListenerNotifier> & _FlaxDartType<SelectionListenerNotifier, readonly ["class", "flax.core/sdk_widgets#type:SelectionListenerNotifier", readonly [], false]> = _flaxBindInstanceType<SelectionListenerNotifier, typeof _SelectionListenerNotifierFactory>(_SelectionListenerNotifierFactory, "flax.core/sdk_widgets#type:SelectionListenerNotifier", ["flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]) as typeof _SelectionListenerNotifierFactory & _FlaxInstanceType<SelectionListenerNotifier> & _FlaxDartType<SelectionListenerNotifier, readonly ["class", "flax.core/sdk_widgets#type:SelectionListenerNotifier", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "selection" | "registered" | "addListener" | "removeListener" | "dispose" | "__flaxBound:package:flutter/src/widgets/selectable_region.dart::SelectionListenerNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
