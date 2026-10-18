// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"oldConfiguration","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"logicalSize","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ViewConfiguration extends Readonly<{ "__flaxBound:package:flutter/src/rendering/view.dart::ViewConfiguration": readonly [] }> { readonly __ViewConfiguration: unique symbol;
readonly [_flaxDartTypeValue]: ViewConfiguration;

}
defineObject("flax.core/sdk_rendering#type:ViewConfiguration", ["logicalConstraints","physicalConstraints","devicePixelRatio"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:ViewConfiguration", "object", {"toMatrix":_flaxMemberParameters0,"shouldUpdateMatrix":_flaxMemberParameters1,"toPhysicalSize":_flaxMemberParameters2,"toString":_flaxMemberParameters0}, {}), []);
const _ViewConfigurationProxy = {type: "flax.core/sdk_rendering#type:ViewConfiguration", parameters: [{"name":"physicalConstraints","required":false,"positional":false},{"name":"logicalConstraints","required":false,"positional":false},{"name":"devicePixelRatio","required":false,"positional":false}], constructors: {"":[{"name":"physicalConstraints","required":false,"positional":false},{"name":"logicalConstraints","required":false,"positional":false},{"name":"devicePixelRatio","required":false,"positional":false}]}, methods: {"toMatrix":_flaxMemberParameters0,"shouldUpdateMatrix":_flaxMemberParameters1,"toPhysicalSize":_flaxMemberParameters2,"toString":_flaxMemberParameters0}, getters: ["logicalConstraints","physicalConstraints","devicePixelRatio"], setters: [], contextMembers: [], superMembers: ["get:logicalConstraints","get:physicalConstraints","get:devicePixelRatio","toMatrix","shouldUpdateMatrix","toPhysicalSize","toString"]} as const;
export interface ViewConfiguration {
readonly [_flaxDartTypeValue]: ViewConfiguration;

toMatrix(): upstream1.Matrix4;
shouldUpdateMatrix(oldConfiguration: Readonly<{ "__flaxBound:package:flutter/src/rendering/view.dart::ViewConfiguration": readonly [] }>): boolean;
toPhysicalSize(logicalSize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream2.Size;
toString(): string;
get logicalConstraints(): upstream0.BoxConstraints;
get physicalConstraints(): upstream0.BoxConstraints;
get devicePixelRatio(): number;
}
export abstract class ViewConfiguration extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ViewConfiguration>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ViewConfiguration;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:ViewConfiguration", readonly [], false];
constructor(options?: {physicalConstraints?: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }> | undefined; logicalConstraints?: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }> | undefined; devicePixelRatio?: number | undefined}) { super(_ViewConfigurationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ViewConfiguration.prototype, _ViewConfigurationProxy);
export namespace ViewConfiguration { export function implement(args: [options?: {physicalConstraints?: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }> | undefined; logicalConstraints?: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }> | undefined; devicePixelRatio?: number | undefined}], implementation: {}): ViewConfiguration {
return constructProxy(_ViewConfigurationProxy, args, implementation) as ViewConfiguration; } }
_flaxBindInstanceType<ViewConfiguration, typeof ViewConfiguration>(ViewConfiguration, "flax.core/sdk_rendering#type:ViewConfiguration", ["dart:core::Object"]);
