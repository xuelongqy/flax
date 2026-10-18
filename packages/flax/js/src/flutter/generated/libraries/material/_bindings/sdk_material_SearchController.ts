// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_TextEditingController';
import '@flax/flutter/widgets/_bindings/flutter_TextEditingController';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_ValueNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ValueNotifier';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream6 from '@flax/flutter/services/_bindings/flutter_TextSelection';
import '@flax/flutter/services/_bindings/flutter_TextSelection';
import type * as upstream7 from '@flax/flutter/painting/_bindings/sdk_painting_TextSpan';
import '@flax/flutter/painting/_bindings/sdk_painting_TextSpan';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream9 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"selectedText","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"context","required":true,"positional":false,"context":"flax.core/flutter#type:BuildContext"},{"name":"style","required":false,"positional":false},{"name":"withComposing","required":true,"positional":false}] as const;
const _flaxMemberParameters3 = [{"name":"listener","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SearchController extends Omit<upstream0.TextEditingController, _flaxOwnMembers0>, Omit<upstream1.ValueNotifier<upstream2.TextEditingValue>, _flaxOwnMembers0 | keyof upstream0.TextEditingController>, Omit<upstream3.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.TextEditingController | keyof upstream1.ValueNotifier<upstream2.TextEditingValue>>, Omit<upstream4.Listenable, _flaxOwnMembers0 | keyof upstream0.TextEditingController | keyof upstream1.ValueNotifier<upstream2.TextEditingValue> | keyof upstream3.ChangeNotifier>, Omit<upstream5.ValueListenable<upstream2.TextEditingValue>, _flaxOwnMembers0 | keyof upstream0.TextEditingController | keyof upstream1.ValueNotifier<upstream2.TextEditingValue> | keyof upstream3.ChangeNotifier | keyof upstream4.Listenable>, Readonly<{ "__flaxBound:package:flutter/src/material/search_anchor.dart::SearchController": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/editable_text.dart::TextEditingController": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream2.TextEditingValue] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream2.TextEditingValue] }> { readonly __SearchController: unique symbol;
readonly [_flaxDartTypeValue]: SearchController;

}
defineObject("flax.core/sdk_material#type:SearchController", ["text","selection","value","hasListeners","isAttached","isOpen"], ["text","value","selection"], _flaxBindingMethods("flax.core/sdk_material#type:SearchController", "object", {"openView":_flaxMemberParameters0,"closeView":_flaxMemberParameters1}, {}), ["removeListener"], undefined, "flax.core/flutter#type:TextEditingController");
const _SearchControllerProxy = {type: "flax.core/sdk_material#type:SearchController", parameters: [], constructors: {"":[]}, methods: {"buildTextSpan":_flaxMemberParameters2,"clear":_flaxMemberParameters0,"clearComposing":_flaxMemberParameters0,"addListener":_flaxMemberParameters3,"removeListener":_flaxMemberParameters3,"dispose":_flaxMemberParameters0,"toString":_flaxMemberParameters0,"openView":_flaxMemberParameters0,"closeView":_flaxMemberParameters1}, getters: ["isAttached","isOpen","text","selection","value","hasListeners"], setters: ["text","value","selection"], contextMembers: [], superMembers: ["get:isAttached","get:isOpen","get:text","get:selection","get:value","get:hasListeners","set:text","set:value","set:selection","buildTextSpan","clear","clearComposing","addListener","removeListener","dispose","toString","openView","closeView"]} as const;
export interface SearchController {
readonly [_flaxDartTypeValue]: SearchController;

buildTextSpan(options: {context: upstream8.BuildContext; style?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; withComposing: boolean}): upstream7.TextSpan;
clear(): void;
clearComposing(): void;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
toString(): string;
openView(): void;
closeView(selectedText: string | null): void;
get isAttached(): boolean;
get isOpen(): boolean;
get text(): string;
get selection(): upstream6.TextSelection;
get value(): upstream2.TextEditingValue;
get hasListeners(): boolean;
set text(value: string);
set value(value: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }>);
set selection(value: Readonly<{ "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }>);
}
export abstract class SearchController extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SearchController>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SearchController;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:SearchController", readonly [], false];
constructor() { super(_SearchControllerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(SearchController.prototype, _SearchControllerProxy);
export namespace SearchController { export function implement(args: [], implementation: {}): SearchController {
return constructProxy(_SearchControllerProxy, args, implementation) as SearchController; } }
_flaxBindInstanceType<SearchController, typeof SearchController>(SearchController, "flax.core/sdk_material#type:SearchController", ["flax.core/flutter#type:TextEditingController","flax.core/sdk_foundation#type:ValueNotifier","flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable","flax.core/flutter#type:ValueListenable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "text" | "selection" | "value" | "hasListeners" | "isAttached" | "isOpen" | "buildTextSpan" | "clear" | "clearComposing" | "addListener" | "removeListener" | "dispose" | "toString" | "openView" | "closeView" | "__flaxBound:package:flutter/src/material/search_anchor.dart::SearchController" | "__flaxBound:package:flutter/src/widgets/editable_text.dart::TextEditingController" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable";
