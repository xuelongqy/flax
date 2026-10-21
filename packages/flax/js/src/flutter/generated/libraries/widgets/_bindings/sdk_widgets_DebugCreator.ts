// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Element';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Element';
import { _flaxMemberParameters2, _flaxMemberParameters54 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DebugCreator extends Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::DebugCreator": readonly [] }> { readonly __DebugCreator: unique symbol;
readonly [_flaxDartTypeValue]: DebugCreator;

readonly element: upstream0.Element;
toString(): string;
}
defineObject("flax.core/sdk_widgets#type:DebugCreator", ["element"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:DebugCreator", "object", {"toString":_flaxMemberParameters2}, {}), []);
export function _DebugCreatorFactory(element: Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [] }>): DebugCreator {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:DebugCreator", "", [{"name":"element","required":true,"positional":true}], [element], {}) as DebugCreator;
}
const _DebugCreatorProxy = {type: "flax.core/sdk_widgets#type:DebugCreator", parameters: _flaxMemberParameters54, constructors: {"": _flaxMemberParameters54}, methods: {"toString":_flaxMemberParameters2}, getters: ["element"], setters: [], contextMembers: [], superMembers: ["get:element","toString"]} as const;
export interface _DebugCreatorNative extends DebugCreator {
readonly [_flaxDartTypeValue]: _DebugCreatorNative;

toString(): string;
get element(): upstream0.Element;
}
export abstract class _DebugCreatorNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DebugCreator>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DebugCreator;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:DebugCreator", readonly [], false];
constructor(element: Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [] }>) { super(_DebugCreatorProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_DebugCreatorNative.prototype, _DebugCreatorProxy);
export namespace _DebugCreatorFactory { export function implement(args: [element: Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [] }>], implementation: {}): DebugCreator {
return constructProxy(_DebugCreatorProxy, args, implementation) as DebugCreator; } }
const _DebugCreatorBinding = _flaxProxyFactory(_DebugCreatorFactory, _DebugCreatorNative) as unknown as typeof _DebugCreatorFactory & (new(element: Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [] }>) => _DebugCreatorNative);
export const DebugCreator: typeof _DebugCreatorBinding & _FlaxInstanceType<DebugCreator> & _FlaxDartType<DebugCreator, readonly ["class", "flax.core/sdk_widgets#type:DebugCreator", readonly [], false]> = _flaxBindInstanceType<DebugCreator, typeof _DebugCreatorBinding>(_DebugCreatorBinding, "flax.core/sdk_widgets#type:DebugCreator", ["dart:core::Object"]) as typeof _DebugCreatorBinding & _FlaxInstanceType<DebugCreator> & _FlaxDartType<DebugCreator, readonly ["class", "flax.core/sdk_widgets#type:DebugCreator", readonly [], false]>;
