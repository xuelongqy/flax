// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { _flaxMemberParameters27, _flaxMemberParameters1, _flaxMemberParameters28 } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DiagnosticPropertiesBuilder extends Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }> { readonly __DiagnosticPropertiesBuilder: unique symbol;
readonly [_flaxDartTypeValue]: DiagnosticPropertiesBuilder;

readonly properties: DartList<upstream0.DiagnosticsNode>;
get defaultDiagnosticsTreeStyle(): upstream1.DiagnosticsTreeStyle;
get emptyBodyDescription(): string | null;
add(property: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>): void;
set defaultDiagnosticsTreeStyle(value: upstream1.DiagnosticsTreeStyle);
set emptyBodyDescription(value: string | null);
}
defineObject("flax.core/sdk_foundation#type:DiagnosticPropertiesBuilder", ["properties","defaultDiagnosticsTreeStyle","emptyBodyDescription"], ["defaultDiagnosticsTreeStyle","emptyBodyDescription"], _flaxBindingMethods("flax.core/sdk_foundation#type:DiagnosticPropertiesBuilder", "object", {"add":_flaxMemberParameters27}, {}), []);
export function _DiagnosticPropertiesBuilderFactory(): DiagnosticPropertiesBuilder {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_foundation#type:DiagnosticPropertiesBuilder", "", [], [], {}) as DiagnosticPropertiesBuilder;
}
export namespace _DiagnosticPropertiesBuilderFactory {
export function fromProperties(properties: DartListInput<upstream0.DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>>): DiagnosticPropertiesBuilder {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_foundation#type:DiagnosticPropertiesBuilder", "fromProperties", [{"name":"properties","required":true,"positional":true}], [properties], {}) as DiagnosticPropertiesBuilder;
}
}
const _DiagnosticPropertiesBuilderProxy = {type: "flax.core/sdk_foundation#type:DiagnosticPropertiesBuilder", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1,"fromProperties": _flaxMemberParameters28}, methods: {"add":_flaxMemberParameters27}, getters: ["properties","defaultDiagnosticsTreeStyle","emptyBodyDescription"], setters: ["defaultDiagnosticsTreeStyle","emptyBodyDescription"], contextMembers: [], superMembers: ["get:properties","get:defaultDiagnosticsTreeStyle","get:emptyBodyDescription","set:defaultDiagnosticsTreeStyle","set:emptyBodyDescription","add"]} as const;
export interface _DiagnosticPropertiesBuilderNative extends DiagnosticPropertiesBuilder {
readonly [_flaxDartTypeValue]: _DiagnosticPropertiesBuilderNative;
readonly [_flaxDartConstructors]?: {"": () => void;"fromProperties": (properties: DartListInput<upstream0.DiagnosticsNode, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>>) => void;};

add(property: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>): void;
get properties(): DartList<upstream0.DiagnosticsNode>;
get defaultDiagnosticsTreeStyle(): upstream1.DiagnosticsTreeStyle;
get emptyBodyDescription(): string | null;
set defaultDiagnosticsTreeStyle(value: upstream1.DiagnosticsTreeStyle);
set emptyBodyDescription(value: string | null);
}
export abstract class _DiagnosticPropertiesBuilderNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DiagnosticPropertiesBuilder>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DiagnosticPropertiesBuilder;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:DiagnosticPropertiesBuilder", readonly [], false];
constructor(); constructor(call: _FlaxProxySuper<_DiagnosticPropertiesBuilderNative>); constructor(...args: unknown[]) { super(_DiagnosticPropertiesBuilderProxy, args); }
}
_flaxDefineProxyBase(_DiagnosticPropertiesBuilderNative.prototype, _DiagnosticPropertiesBuilderProxy);
export namespace _DiagnosticPropertiesBuilderFactory { export function implement(args: [], implementation: {}): DiagnosticPropertiesBuilder {
return constructProxy(_DiagnosticPropertiesBuilderProxy, args, implementation) as DiagnosticPropertiesBuilder; } }
const _DiagnosticPropertiesBuilderBinding = _flaxProxyFactory(_DiagnosticPropertiesBuilderFactory, _DiagnosticPropertiesBuilderNative) as unknown as typeof _DiagnosticPropertiesBuilderFactory & (new() => _DiagnosticPropertiesBuilderNative) & (new(call: _FlaxProxySuper<_DiagnosticPropertiesBuilderNative>) => _DiagnosticPropertiesBuilderNative);
export const DiagnosticPropertiesBuilder: typeof _DiagnosticPropertiesBuilderBinding & _FlaxInstanceType<DiagnosticPropertiesBuilder> & _FlaxDartType<DiagnosticPropertiesBuilder, readonly ["class", "flax.core/sdk_foundation#type:DiagnosticPropertiesBuilder", readonly [], false]> = _flaxBindInstanceType<DiagnosticPropertiesBuilder, typeof _DiagnosticPropertiesBuilderBinding>(_DiagnosticPropertiesBuilderBinding, "flax.core/sdk_foundation#type:DiagnosticPropertiesBuilder", ["dart:core::Object"]) as typeof _DiagnosticPropertiesBuilderBinding & _FlaxInstanceType<DiagnosticPropertiesBuilder> & _FlaxDartType<DiagnosticPropertiesBuilder, readonly ["class", "flax.core/sdk_foundation#type:DiagnosticPropertiesBuilder", readonly [], false]>;
