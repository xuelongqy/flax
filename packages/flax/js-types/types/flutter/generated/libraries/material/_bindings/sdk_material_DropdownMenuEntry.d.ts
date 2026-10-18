import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/material/_bindings/sdk_material_ButtonStyle';
import '@flax/flutter/material/_bindings/sdk_material_ButtonStyle';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DropdownMenuEntry<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:package:flutter/src/material/dropdown_menu.dart::DropdownMenuEntry": readonly [T];
}> {
    readonly __DropdownMenuEntry: unique symbol;
    readonly [_flaxDartTypeValue]: DropdownMenuEntry<T>;
}
export interface DropdownMenuEntry<T extends unknown | null = unknown | null> {
    readonly [_flaxDartTypeValue]: DropdownMenuEntry<T>;
    get value(): T;
    get label(): string;
    get labelWidget(): Widget | null;
    get leadingIcon(): Widget | null;
    get trailingIcon(): Widget | null;
    get enabled(): boolean;
    get style(): upstream0.ButtonStyle | null;
}
export declare abstract class DropdownMenuEntry<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DropdownMenuEntry<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DropdownMenuEntry<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:DropdownMenuEntry", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor(options: {
        value: unknown | null;
        label: string;
        labelWidget?: Widget | null | undefined;
        leadingIcon?: Widget | null | undefined;
        trailingIcon?: Widget | null | undefined;
        enabled?: boolean | undefined;
        style?: (Readonly<{
            "__flaxBound:package:flutter/src/material/button_style.dart::ButtonStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    });
}
export declare namespace DropdownMenuEntry {
    function implement<T extends unknown | null = unknown | null>(args: [options: {
        value: unknown | null;
        label: string;
        labelWidget?: Widget | null | undefined;
        leadingIcon?: Widget | null | undefined;
        trailingIcon?: Widget | null | undefined;
        enabled?: boolean | undefined;
        style?: (Readonly<{
            "__flaxBound:package:flutter/src/material/button_style.dart::ButtonStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }], implementation: {}): DropdownMenuEntry<T>;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (options: {
        value: unknown | null;
        label: string;
        labelWidget?: Widget | null | undefined;
        leadingIcon?: Widget | null | undefined;
        trailingIcon?: Widget | null | undefined;
        enabled?: boolean | undefined;
        style?: (Readonly<{
            "__flaxBound:package:flutter/src/material/button_style.dart::ButtonStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }) => DropdownMenuEntry<_Selected0>) & {
        readonly prototype: DropdownMenuEntry<_Selected0>;
        implement(args: readonly [options: {
            value: unknown | null;
            label: string;
            labelWidget?: Widget | null | undefined;
            leadingIcon?: Widget | null | undefined;
            trailingIcon?: Widget | null | undefined;
            enabled?: boolean | undefined;
            style?: (Readonly<{
                "__flaxBound:package:flutter/src/material/button_style.dart::ButtonStyle": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | null | undefined;
        }], implementation: Partial<DropdownMenuEntry<_Selected0>>): DropdownMenuEntry<_Selected0>;
    } & _FlaxInstanceType<DropdownMenuEntry<_Selected0>> & _FlaxDartType<DropdownMenuEntry<_Selected0>> : never : never;
}
export {};
