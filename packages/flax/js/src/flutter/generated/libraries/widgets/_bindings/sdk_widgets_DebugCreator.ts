// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Element';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Element';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"element","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DebugCreator extends Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::DebugCreator": readonly [] }> { readonly __DebugCreator: unique symbol;
readonly [_flaxDartTypeValue]: DebugCreator;

}
defineObject("flax.core/sdk_widgets#type:DebugCreator", ["element"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:DebugCreator", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _DebugCreatorProxy = {type: "flax.core/sdk_widgets#type:DebugCreator", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"toString":_flaxMemberParameters0}, getters: ["element"], setters: [], contextMembers: [], superMembers: ["get:element","toString"]} as const;
export interface DebugCreator {
readonly [_flaxDartTypeValue]: DebugCreator;

toString(): string;
get element(): upstream0.Element;
}
export abstract class DebugCreator extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DebugCreator>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DebugCreator;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:DebugCreator", readonly [], false];
constructor(element: Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [] }>) { super(_DebugCreatorProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(DebugCreator.prototype, _DebugCreatorProxy);
export namespace DebugCreator { export function implement(args: [element: Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [] }>], implementation: {}): DebugCreator {
return constructProxy(_DebugCreatorProxy, args, implementation) as DebugCreator; } }
_flaxBindInstanceType<DebugCreator, typeof DebugCreator>(DebugCreator, "flax.core/sdk_widgets#type:DebugCreator", ["dart:core::Object"]);
