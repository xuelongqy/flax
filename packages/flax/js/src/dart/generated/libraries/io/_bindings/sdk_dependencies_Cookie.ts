// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
const _flaxMemberParameters0 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/vector_math/_bindings/sdk_dependencies.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Cookie extends Readonly<{ "__flaxBound:dart:_http::Cookie": readonly [] }> { readonly __Cookie: unique symbol;
readonly [_flaxDartTypeValue]: Cookie;

get name(): string;
get value(): string;
get expires(): upstream0.DateTime | null;
get maxAge(): number | null;
get domain(): string | null;
get path(): string | null;
get secure(): boolean;
get httpOnly(): boolean;
toString(): string;
set name(value: string);
set value(value: string);
set expires(value: DartInput<Readonly<{ "__flaxBound:dart:core::DateTime": readonly [] }>> | null);
set maxAge(value: number | null);
set domain(value: string | null);
set path(value: string | null);
set secure(value: boolean);
set httpOnly(value: boolean);
}
defineObject("flax.core/sdk_dependencies#type:Cookie", ["name","value","expires","maxAge","domain","path","secure","httpOnly"], ["name","value","expires","maxAge","domain","path","secure","httpOnly"], _flaxBindingMethods("flax.core/sdk_dependencies#type:Cookie", "object", {"toString":_flaxMemberParameters0}, {}), []);
export function _CookieFactory(name: string, value: string): Cookie {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Cookie", "", [{"name":"name","required":true,"positional":true},{"name":"value","required":true,"positional":true}], [name, value], {}) as Cookie;
}
export namespace _CookieFactory {
export function fromSetCookieValue(value: string): Cookie {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dependencies#type:Cookie", "fromSetCookieValue", [{"name":"value","required":true,"positional":true}], [value], {}) as Cookie;
}
}
export const Cookie: typeof _CookieFactory & _FlaxInstanceType<Cookie> & _FlaxDartType<Cookie, readonly ["class", "flax.core/sdk_dependencies#type:Cookie", readonly [], false]> = _flaxBindInstanceType<Cookie, typeof _CookieFactory>(_CookieFactory, "flax.core/sdk_dependencies#type:Cookie", ["dart:core::Object"]) as typeof _CookieFactory & _FlaxInstanceType<Cookie> & _FlaxDartType<Cookie, readonly ["class", "flax.core/sdk_dependencies#type:Cookie", readonly [], false]>;
