// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Image';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Image';
const _flaxMemberParameters0 = [{"name":"width","required":true,"positional":true},{"name":"height","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Scene extends Readonly<{ "__flaxBound:dart:ui::Scene": readonly [] }> { readonly __Scene: unique symbol;
readonly [_flaxDartTypeValue]: Scene;

toImageSync(width: number, height: number): upstream0.Image;
toImage(width: number, height: number): Promise<upstream0.Image>;
dispose(): void;
}
defineObject("flax.core/sdk_dart_ui#type:Scene", [], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:Scene", "object", {"toImageSync":_flaxMemberParameters0,"toImage":_flaxMemberParameters0,"dispose":_flaxMemberParameters1}, {}), []);
const _SceneProxy = {type: "flax.core/sdk_dart_ui#type:Scene", parameters: _flaxMemberParameters1, constructors: {}, methods: {"toImageSync":_flaxMemberParameters0,"toImage":_flaxMemberParameters0,"dispose":_flaxMemberParameters1}, getters: [], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _SceneFactory { export function implement(args: [], implementation: {toImageSync: ((width: number, height: number) => Readonly<{ "__flaxBound:dart:ui::Image": readonly [] }>); toImage: ((width: number, height: number) => Promise<Readonly<{ "__flaxBound:dart:ui::Image": readonly [] }>>); dispose: (() => void)}): Scene {
return constructProxy(_SceneProxy, args, implementation) as Scene; } }
export const Scene: typeof _SceneFactory & _FlaxInstanceType<Scene> & _FlaxDartType<Scene, readonly ["class", "flax.core/sdk_dart_ui#type:Scene", readonly [], false]> = _flaxBindInstanceType<Scene, typeof _SceneFactory>(_SceneFactory, "flax.core/sdk_dart_ui#type:Scene", ["dart:core::Object"]) as typeof _SceneFactory & _FlaxInstanceType<Scene> & _FlaxDartType<Scene, readonly ["class", "flax.core/sdk_dart_ui#type:Scene", readonly [], false]>;
