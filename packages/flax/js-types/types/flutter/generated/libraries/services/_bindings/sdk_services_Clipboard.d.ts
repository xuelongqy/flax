import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_ClipboardData';
import '@flax/flutter/services/_bindings/sdk_services_ClipboardData';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Clipboard extends Readonly<{
    "__flaxBound:package:flutter/src/services/clipboard.dart::Clipboard": readonly [];
}> {
    readonly __Clipboard: unique symbol;
    readonly [_flaxDartTypeValue]: Clipboard;
}
export declare namespace _ClipboardFactory {
    const kTextPlain: string;
}
export declare namespace _ClipboardFactory {
    function setData(data: Readonly<{
        "__flaxBound:package:flutter/src/services/clipboard.dart::ClipboardData": readonly [];
    }>): Promise<void>;
}
export declare namespace _ClipboardFactory {
    function getData(format: string): Promise<upstream0.ClipboardData | null>;
}
export declare namespace _ClipboardFactory {
    function hasStrings(): Promise<boolean>;
}
export declare const Clipboard: typeof _ClipboardFactory & _FlaxInstanceType<Clipboard> & _FlaxDartType<Clipboard, readonly ["class", "flax.core/sdk_services#type:Clipboard", readonly [], false]>;
