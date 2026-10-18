import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ToolbarOptions extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/editable_text.dart::ToolbarOptions": readonly [];
}> {
    readonly __ToolbarOptions: unique symbol;
    readonly [_flaxDartTypeValue]: ToolbarOptions;
}
export interface ToolbarOptions {
    readonly [_flaxDartTypeValue]: ToolbarOptions;
    get copy(): boolean;
    get cut(): boolean;
    get paste(): boolean;
    get selectAll(): boolean;
}
export declare abstract class ToolbarOptions extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ToolbarOptions>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ToolbarOptions;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ToolbarOptions", readonly [], false];
    constructor(options?: {
        copy?: boolean | undefined;
        cut?: boolean | undefined;
        paste?: boolean | undefined;
        selectAll?: boolean | undefined;
    });
}
export declare namespace ToolbarOptions {
    function implement(args: [options?: {
        copy?: boolean | undefined;
        cut?: boolean | undefined;
        paste?: boolean | undefined;
        selectAll?: boolean | undefined;
    }], implementation: {}): ToolbarOptions;
}
export declare namespace ToolbarOptions {
    const empty: ToolbarOptions;
}
