// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_FlutterView';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FlutterView';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import { _flaxMemberParameters1, _flaxMemberParameters355, _flaxMemberParameters356, _flaxMemberParameters357 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ViewConfiguration extends Readonly<{ "__flaxBound:package:flutter/src/rendering/view.dart::ViewConfiguration": readonly [] }> { readonly __ViewConfiguration: unique symbol;
readonly [_flaxDartTypeValue]: ViewConfiguration;

readonly logicalConstraints: upstream0.BoxConstraints;
readonly physicalConstraints: upstream0.BoxConstraints;
readonly devicePixelRatio: number;
toMatrix(): upstream2.Matrix4;
shouldUpdateMatrix(oldConfiguration: Readonly<{ "__flaxBound:package:flutter/src/rendering/view.dart::ViewConfiguration": readonly [] }>): boolean;
toPhysicalSize(logicalSize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream3.Size;
toString(): string;
}
defineObject("flax.core/sdk_rendering#type:ViewConfiguration", ["logicalConstraints","physicalConstraints","devicePixelRatio"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:ViewConfiguration", "object", {"toMatrix":_flaxMemberParameters1,"shouldUpdateMatrix":_flaxMemberParameters355,"toPhysicalSize":_flaxMemberParameters356,"toString":_flaxMemberParameters1}, {}), []);
export function _ViewConfigurationFactory(options: { physicalConstraints?: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }> | undefined; logicalConstraints?: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }> | undefined; devicePixelRatio?: number | undefined } = {}): ViewConfiguration {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:ViewConfiguration", "", [{"name":"physicalConstraints"},{"name":"logicalConstraints"},{"name":"devicePixelRatio"}], [], options) as ViewConfiguration;
}
export namespace _ViewConfigurationFactory {
export function fromView(view: Readonly<{ "__flaxBound:dart:ui::FlutterView": readonly [] }>): ViewConfiguration {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_rendering#type:ViewConfiguration", "fromView", [{"name":"view","required":true,"positional":true}], [view], {}) as ViewConfiguration;
}
}
const _ViewConfigurationProxy = {type: "flax.core/sdk_rendering#type:ViewConfiguration", parameters: _flaxMemberParameters357, constructors: {"": _flaxMemberParameters357}, methods: {"toMatrix":_flaxMemberParameters1,"shouldUpdateMatrix":_flaxMemberParameters355,"toPhysicalSize":_flaxMemberParameters356,"toString":_flaxMemberParameters1}, getters: ["logicalConstraints","physicalConstraints","devicePixelRatio"], setters: [], contextMembers: [], superMembers: ["get:logicalConstraints","get:physicalConstraints","get:devicePixelRatio","toMatrix","shouldUpdateMatrix","toPhysicalSize","toString"]} as const;
export interface _ViewConfigurationNative extends ViewConfiguration {
readonly [_flaxDartTypeValue]: _ViewConfigurationNative;

toMatrix(): upstream2.Matrix4;
shouldUpdateMatrix(oldConfiguration: Readonly<{ "__flaxBound:package:flutter/src/rendering/view.dart::ViewConfiguration": readonly [] }>): boolean;
toPhysicalSize(logicalSize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): upstream3.Size;
toString(): string;
get logicalConstraints(): upstream0.BoxConstraints;
get physicalConstraints(): upstream0.BoxConstraints;
get devicePixelRatio(): number;
}
export abstract class _ViewConfigurationNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ViewConfiguration>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ViewConfiguration;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:ViewConfiguration", readonly [], false];
constructor(options?: {physicalConstraints?: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }> | undefined; logicalConstraints?: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }> | undefined; devicePixelRatio?: number | undefined}) { super(_ViewConfigurationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_ViewConfigurationNative.prototype, _ViewConfigurationProxy);
export namespace _ViewConfigurationFactory { export function implement(args: [options?: {physicalConstraints?: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }> | undefined; logicalConstraints?: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }> | undefined; devicePixelRatio?: number | undefined}], implementation: {}): ViewConfiguration {
return constructProxy(_ViewConfigurationProxy, args, implementation) as ViewConfiguration; } }
const _ViewConfigurationBinding = _flaxProxyFactory(_ViewConfigurationFactory, _ViewConfigurationNative) as unknown as typeof _ViewConfigurationFactory & (new(options?: {physicalConstraints?: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }> | undefined; logicalConstraints?: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }> | undefined; devicePixelRatio?: number | undefined}) => _ViewConfigurationNative);
export const ViewConfiguration: typeof _ViewConfigurationBinding & _FlaxInstanceType<ViewConfiguration> & _FlaxDartType<ViewConfiguration, readonly ["class", "flax.core/sdk_rendering#type:ViewConfiguration", readonly [], false]> = _flaxBindInstanceType<ViewConfiguration, typeof _ViewConfigurationBinding>(_ViewConfigurationBinding, "flax.core/sdk_rendering#type:ViewConfiguration", ["dart:core::Object"]) as typeof _ViewConfigurationBinding & _FlaxInstanceType<ViewConfiguration> & _FlaxDartType<ViewConfiguration, readonly ["class", "flax.core/sdk_rendering#type:ViewConfiguration", readonly [], false]>;
