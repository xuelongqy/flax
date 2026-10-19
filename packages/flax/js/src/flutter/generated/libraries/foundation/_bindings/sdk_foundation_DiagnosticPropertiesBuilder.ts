// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { _flaxMemberParameters29, _flaxMemberParameters1 } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DiagnosticPropertiesBuilder extends Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }> { readonly __DiagnosticPropertiesBuilder: unique symbol;
readonly [_flaxDartTypeValue]: DiagnosticPropertiesBuilder;

}
defineObject("flax.core/sdk_foundation#type:DiagnosticPropertiesBuilder", ["properties","defaultDiagnosticsTreeStyle","emptyBodyDescription"], ["defaultDiagnosticsTreeStyle","emptyBodyDescription"], _flaxBindingMethods("flax.core/sdk_foundation#type:DiagnosticPropertiesBuilder", "object", {"add":_flaxMemberParameters29}, {}), []);
const _DiagnosticPropertiesBuilderProxy = {type: "flax.core/sdk_foundation#type:DiagnosticPropertiesBuilder", parameters: _flaxMemberParameters1, constructors: {"": _flaxMemberParameters1}, methods: {"add":_flaxMemberParameters29}, getters: ["properties","defaultDiagnosticsTreeStyle","emptyBodyDescription"], setters: ["defaultDiagnosticsTreeStyle","emptyBodyDescription"], contextMembers: [], superMembers: ["get:properties","get:defaultDiagnosticsTreeStyle","get:emptyBodyDescription","set:defaultDiagnosticsTreeStyle","set:emptyBodyDescription","add"]} as const;
export interface DiagnosticPropertiesBuilder {
readonly [_flaxDartTypeValue]: DiagnosticPropertiesBuilder;

add(property: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [] }>): void;
get properties(): DartList<upstream0.DiagnosticsNode>;
get defaultDiagnosticsTreeStyle(): upstream1.DiagnosticsTreeStyle;
get emptyBodyDescription(): string | null;
set defaultDiagnosticsTreeStyle(value: upstream1.DiagnosticsTreeStyle);
set emptyBodyDescription(value: string | null);
}
export abstract class DiagnosticPropertiesBuilder extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DiagnosticPropertiesBuilder>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: DiagnosticPropertiesBuilder;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:DiagnosticPropertiesBuilder", readonly [], false];
constructor() { super(_DiagnosticPropertiesBuilderProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(DiagnosticPropertiesBuilder.prototype, _DiagnosticPropertiesBuilderProxy);
export namespace DiagnosticPropertiesBuilder { export function implement(args: [], implementation: {}): DiagnosticPropertiesBuilder {
return constructProxy(_DiagnosticPropertiesBuilderProxy, args, implementation) as DiagnosticPropertiesBuilder; } }
_flaxBindInstanceType<DiagnosticPropertiesBuilder, typeof DiagnosticPropertiesBuilder>(DiagnosticPropertiesBuilder, "flax.core/sdk_foundation#type:DiagnosticPropertiesBuilder", ["dart:core::Object"]);
