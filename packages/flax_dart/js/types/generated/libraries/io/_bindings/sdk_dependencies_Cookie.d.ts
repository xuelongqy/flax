import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Cookie extends Readonly<{
    "__flaxBound:dart:_http::Cookie": readonly [];
}> {
    readonly __Cookie: unique symbol;
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
    set expires(value: DartInput<Readonly<{
        "__flaxBound:dart:core::DateTime": readonly [];
    }>> | null);
    set maxAge(value: number | null);
    set domain(value: string | null);
    set path(value: string | null);
    set secure(value: boolean);
    set httpOnly(value: boolean);
}
export declare function _CookieFactory(name: string, value: string): Cookie;
export declare namespace _CookieFactory {
    function fromSetCookieValue(value: string): Cookie;
}
export declare const Cookie: typeof _CookieFactory & _FlaxInstanceType<Cookie> & _FlaxDartType<Cookie, readonly ["class", "flax.core/sdk_dependencies#type:Cookie", readonly [], false]>;
