// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/audioplayers/_bindings/audio_AudioLogLevel';
import '@flax/audioplayers/_bindings/audio_AudioLogLevel';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import { _flaxMemberParameters0, _flaxMemberParameters17, _flaxMemberParameters18, _flaxMemberParameters19 } from "@flax/audioplayers/_bindings/audio.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/audioplayers/_bindings/audio.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AudioLogger extends Readonly<{ "__flaxBound:package:audioplayers/src/audio_logger.dart::AudioLogger": readonly [] }> { readonly __AudioLogger: unique symbol;
readonly [_flaxDartTypeValue]: AudioLogger;

}
defineObject("flax.audio/audio#type:AudioLogger", [], [], _flaxBindingMethods("flax.audio/audio#type:AudioLogger", "object", {}, {}), []);
export function _AudioLoggerFactory(): AudioLogger {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.audio/audio#type:AudioLogger", "", [], [], {}) as AudioLogger;
}
export namespace _AudioLoggerFactory { export function setLogLevel(value: upstream0.AudioLogLevel): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.audio/audio#function:AudioLogger.logLevel%3D", [value], _flaxMemberParameters0);
} }
export namespace _AudioLoggerFactory { export declare const logLevel: upstream0.AudioLogLevel; }
_flaxDefineStaticGetters(_AudioLoggerFactory, "flax.audio/audio#read:AudioLogger.", ["logLevel"]);
export namespace _AudioLoggerFactory { export function log(message: string): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.audio/audio#function:AudioLogger.log", [message], _flaxMemberParameters17);
} }
export namespace _AudioLoggerFactory { export function error(o: {}, stacktrace?: Readonly<{ "__flaxBound:dart:core::StackTrace": readonly [] }> | null): void {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.audio/audio#function:AudioLogger.error", [o, stacktrace], _flaxMemberParameters18);
} }
export namespace _AudioLoggerFactory { export function errorToString(o: {}, stackTrace?: Readonly<{ "__flaxBound:dart:core::StackTrace": readonly [] }> | null): string {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.audio/audio#function:AudioLogger.errorToString", [o, stackTrace], _flaxMemberParameters19);
return _flaxResult as string;
} }
export const AudioLogger: typeof _AudioLoggerFactory & _FlaxInstanceType<AudioLogger> & _FlaxDartType<AudioLogger, readonly ["class", "flax.audio/audio#type:AudioLogger", readonly [], false]> = _flaxBindInstanceType<AudioLogger, typeof _AudioLoggerFactory>(_AudioLoggerFactory, "flax.audio/audio#type:AudioLogger", ["dart:core::Object"]) as typeof _AudioLoggerFactory & _FlaxInstanceType<AudioLogger> & _FlaxDartType<AudioLogger, readonly ["class", "flax.audio/audio#type:AudioLogger", readonly [], false]>;
