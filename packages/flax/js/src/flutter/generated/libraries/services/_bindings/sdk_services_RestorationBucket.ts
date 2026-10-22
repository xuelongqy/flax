// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_RestorationManager';
import '@flax/flutter/services/_bindings/sdk_services_RestorationManager';
import { _flaxMemberParameters87, _flaxMemberParameters88, _flaxMemberParameters89, _flaxMemberParameters90, _flaxMemberParameters91, _flaxMemberParameters0 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RestorationBucket extends Readonly<{ "__flaxBound:package:flutter/src/services/restoration.dart::RestorationBucket": readonly [] }> { readonly __RestorationBucket: unique symbol;
readonly [_flaxDartTypeValue]: RestorationBucket;
readonly [_flaxDartMethodCases]?: {read: _FlaxSignature0;write: _FlaxSignature1;remove: _FlaxSignature2;};
readonly debugOwner: unknown | null;
readonly isReplacing: boolean;
readonly restorationId: string;
read<P extends unknown | null = unknown | null>(restorationId: string): _FlaxDartOutput<P> | null;
write<P extends unknown | null = unknown | null>(restorationId: string, value: (P | _FlaxDartOutput<P>)): void;
remove<P extends unknown | null = unknown | null>(restorationId: string): _FlaxDartOutput<P> | null;
contains(restorationId: string): boolean;
claimChild(restorationId: string, options: {debugOwner: unknown | null}): RestorationBucket;
adoptChild(child: Readonly<{ "__flaxBound:package:flutter/src/services/restoration.dart::RestorationBucket": readonly [] }>): void;
rename(newRestorationId: string): void;
dispose(): void;
toString(): string;
}
defineObject("flax.core/sdk_services#type:RestorationBucket", ["debugOwner","isReplacing","restorationId"], [], _flaxBindingMethods("flax.core/sdk_services#type:RestorationBucket", "object", {"read":_flaxMemberParameters87,"write":_flaxMemberParameters88,"remove":_flaxMemberParameters87,"contains":_flaxMemberParameters87,"claimChild":_flaxMemberParameters89,"adoptChild":_flaxMemberParameters90,"rename":_flaxMemberParameters91,"dispose":_flaxMemberParameters0,"toString":_flaxMemberParameters0}, {"read":{"id":"read","parameters":[{"name":"restorationId","required":true,"positional":true}]},"write":{"id":"write","parameters":[{"name":"restorationId","required":true,"positional":true},{"name":"value","required":true,"positional":true}]},"remove":{"id":"remove","parameters":[{"name":"restorationId","required":true,"positional":true}]}}), []);
export namespace _RestorationBucketFactory {
export function empty(options: { restorationId: string; debugOwner: unknown | null }): RestorationBucket {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:RestorationBucket", "empty", [{"name":"restorationId","required":true},{"name":"debugOwner","required":true}], [], options) as RestorationBucket;
}
}
export namespace _RestorationBucketFactory {
export function root(options: { manager: Readonly<{ "__flaxBound:package:flutter/src/services/restoration.dart::RestorationManager": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>; rawData: DartMapInput<unknown | null, unknown | null, unknown | null, unknown | null> | null }): RestorationBucket {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:RestorationBucket", "root", [{"name":"manager","required":true},{"name":"rawData","required":true}], [], options) as RestorationBucket;
}
}
export namespace _RestorationBucketFactory {
export function child(options: { restorationId: string; parent: Readonly<{ "__flaxBound:package:flutter/src/services/restoration.dart::RestorationBucket": readonly [] }>; debugOwner: unknown | null }): RestorationBucket {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:RestorationBucket", "child", [{"name":"restorationId","required":true},{"name":"parent","required":true},{"name":"debugOwner","required":true}], [], options) as RestorationBucket;
}
}
export const RestorationBucket: typeof _RestorationBucketFactory & _FlaxInstanceType<RestorationBucket> & _FlaxDartType<RestorationBucket, readonly ["class", "flax.core/sdk_services#type:RestorationBucket", readonly [], false]> = _flaxBindInstanceType<RestorationBucket, typeof _RestorationBucketFactory>(_RestorationBucketFactory, "flax.core/sdk_services#type:RestorationBucket", ["dart:core::Object"]) as typeof _RestorationBucketFactory & _FlaxInstanceType<RestorationBucket> & _FlaxDartType<RestorationBucket, readonly ["class", "flax.core/sdk_services#type:RestorationBucket", readonly [], false]>;
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (restorationId: string) => _Selected0 | null : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (restorationId: string,value: (_Selected0 | DartInput<_Selected0>)) => void : never : never; }
interface _FlaxSignature2 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (restorationId: string) => _Selected0 | null : never : never; }
