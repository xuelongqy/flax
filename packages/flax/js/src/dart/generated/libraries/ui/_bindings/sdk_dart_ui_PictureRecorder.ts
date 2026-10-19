// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Picture';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Picture';
import { _flaxMemberParameters0 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PictureRecorder extends Readonly<{ "__flaxBound:dart:ui::PictureRecorder": readonly [] }> { readonly __PictureRecorder: unique symbol;
readonly [_flaxDartTypeValue]: PictureRecorder;

readonly isRecording: boolean;
endRecording(): upstream0.Picture;
}
defineObject("flax.core/sdk_dart_ui#type:PictureRecorder", ["isRecording"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:PictureRecorder", "object", {"endRecording":_flaxMemberParameters0}, {}), []);
export function _PictureRecorderFactory(): PictureRecorder {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:PictureRecorder", "", _flaxMemberParameters0, [], {}) as PictureRecorder;
}
const _PictureRecorderProxy = {type: "flax.core/sdk_dart_ui#type:PictureRecorder", parameters: _flaxMemberParameters0, constructors: {"": _flaxMemberParameters0}, methods: {"endRecording":_flaxMemberParameters0}, getters: ["isRecording"], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _PictureRecorderFactory { export function implement(args: [], implementation: {endRecording: (() => Readonly<{ "__flaxBound:dart:ui::Picture": readonly [] }>); get isRecording(): boolean}): PictureRecorder {
return constructProxy(_PictureRecorderProxy, args, implementation) as PictureRecorder; } }
export const PictureRecorder: typeof _PictureRecorderFactory & _FlaxInstanceType<PictureRecorder> & _FlaxDartType<PictureRecorder, readonly ["class", "flax.core/sdk_dart_ui#type:PictureRecorder", readonly [], false]> = _flaxBindInstanceType<PictureRecorder, typeof _PictureRecorderFactory>(_PictureRecorderFactory, "flax.core/sdk_dart_ui#type:PictureRecorder", ["dart:core::Object"]) as typeof _PictureRecorderFactory & _FlaxInstanceType<PictureRecorder> & _FlaxDartType<PictureRecorder, readonly ["class", "flax.core/sdk_dart_ui#type:PictureRecorder", readonly [], false]>;
