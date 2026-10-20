import { type FlaxInstanceType as _FlaxInstanceType, type DartInput, type Widget } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/material-ui/_bindings/material_ButtonStyle';
import '@flax/material-ui/_bindings/material_ButtonStyle';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DropdownMenuEntry<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:package:material_ui/src/dropdown_menu.dart::DropdownMenuEntry": readonly [T];
}> {
    readonly __DropdownMenuEntry: unique symbol;
    readonly [_flaxDartTypeValue]: DropdownMenuEntry<T>;
    readonly value: T;
    readonly label: string;
    readonly labelWidget: Widget | null;
    readonly leadingIcon: Widget | null;
    readonly trailingIcon: Widget | null;
    readonly enabled: boolean;
    readonly style: upstream0.ButtonStyle | null;
}
export declare function _DropdownMenuEntryFactory<T extends unknown | null = unknown | null>(options: {
    value: (T | _FlaxDartOutput<T>);
    label: string;
    labelWidget?: Widget | null | undefined;
    leadingIcon?: Widget | null | undefined;
    trailingIcon?: Widget | null | undefined;
    enabled?: boolean | undefined;
    style?: (Readonly<{
        "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
}): DropdownMenuEntry<T>;
export declare function _DropdownMenuEntryFactory(options: {
    value: unknown | null;
    label: string;
    labelWidget?: Widget | null | undefined;
    leadingIcon?: Widget | null | undefined;
    trailingIcon?: Widget | null | undefined;
    enabled?: boolean | undefined;
    style?: (Readonly<{
        "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
}): DropdownMenuEntry<unknown | null>;
export interface _DropdownMenuEntryNative<T extends unknown | null = unknown | null> extends DropdownMenuEntry<T> {
    readonly [_flaxDartTypeValue]: _DropdownMenuEntryNative<T>;
    get value(): T;
    get label(): string;
    get labelWidget(): Widget | null;
    get leadingIcon(): Widget | null;
    get trailingIcon(): Widget | null;
    get enabled(): boolean;
    get style(): upstream0.ButtonStyle | null;
}
export declare abstract class _DropdownMenuEntryNative<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DropdownMenuEntry<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DropdownMenuEntry<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:DropdownMenuEntry", readonly [readonly ["any", null, readonly [], true]], false];
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
            "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    });
}
export declare namespace _DropdownMenuEntryFactory {
    function implement<T extends unknown | null = unknown | null>(args: [options: {
        value: unknown | null;
        label: string;
        labelWidget?: Widget | null | undefined;
        leadingIcon?: Widget | null | undefined;
        trailingIcon?: Widget | null | undefined;
        enabled?: boolean | undefined;
        style?: (Readonly<{
            "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }], implementation: {}): DropdownMenuEntry<T>;
}
declare const _DropdownMenuEntryBinding: typeof _DropdownMenuEntryFactory & (new <T extends unknown | null = unknown | null>(options: {
    value: unknown | null;
    label: string;
    labelWidget?: Widget | null | undefined;
    leadingIcon?: Widget | null | undefined;
    trailingIcon?: Widget | null | undefined;
    enabled?: boolean | undefined;
    style?: (Readonly<{
        "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
}) => _DropdownMenuEntryNative<T>);
export declare const DropdownMenuEntry: typeof _DropdownMenuEntryBinding & _FlaxInstanceType<DropdownMenuEntry<unknown | null>> & _FlaxDartType<DropdownMenuEntry<unknown | null>, readonly ["class", "flax.material/material#type:DropdownMenuEntry", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (options: {
        value: unknown | null;
        label: string;
        labelWidget?: Widget | null | undefined;
        leadingIcon?: Widget | null | undefined;
        trailingIcon?: Widget | null | undefined;
        enabled?: boolean | undefined;
        style?: (Readonly<{
            "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }) => _DropdownMenuEntryNative<_Selected0>) & {
        (options: {
            value: (_Selected0 | DartInput<_Selected0>);
            label: string;
            labelWidget?: Widget | null | undefined;
            leadingIcon?: Widget | null | undefined;
            trailingIcon?: Widget | null | undefined;
            enabled?: boolean | undefined;
            style?: (Readonly<{
                "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | null | undefined;
        }): _DropdownMenuEntryNative<_Selected0>;
        readonly prototype: _DropdownMenuEntryNative<_Selected0>;
        implement(args: readonly [options: {
            value: unknown | null;
            label: string;
            labelWidget?: Widget | null | undefined;
            leadingIcon?: Widget | null | undefined;
            trailingIcon?: Widget | null | undefined;
            enabled?: boolean | undefined;
            style?: (Readonly<{
                "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | null | undefined;
        }], implementation: Partial<_DropdownMenuEntryNative<_Selected0>>): _DropdownMenuEntryNative<_Selected0>;
    } & _FlaxInstanceType<_DropdownMenuEntryNative<_Selected0>> & _FlaxDartType<_DropdownMenuEntryNative<_Selected0>> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (options: {
        value: unknown | null;
        label: string;
        labelWidget?: Widget | null | undefined;
        leadingIcon?: Widget | null | undefined;
        trailingIcon?: Widget | null | undefined;
        enabled?: boolean | undefined;
        style?: (Readonly<{
            "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }) => _DropdownMenuEntryNative<_Selected0>) & {
        (options: {
            value: (_Selected0 | DartInput<_Selected0>);
            label: string;
            labelWidget?: Widget | null | undefined;
            leadingIcon?: Widget | null | undefined;
            trailingIcon?: Widget | null | undefined;
            enabled?: boolean | undefined;
            style?: (Readonly<{
                "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | null | undefined;
        }): _DropdownMenuEntryNative<_Selected0>;
        readonly prototype: _DropdownMenuEntryNative<_Selected0>;
        implement(args: readonly [options: {
            value: unknown | null;
            label: string;
            labelWidget?: Widget | null | undefined;
            leadingIcon?: Widget | null | undefined;
            trailingIcon?: Widget | null | undefined;
            enabled?: boolean | undefined;
            style?: (Readonly<{
                "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | null | undefined;
        }], implementation: Partial<_DropdownMenuEntryNative<_Selected0>>): _DropdownMenuEntryNative<_Selected0>;
    } & _FlaxInstanceType<_DropdownMenuEntryNative<_Selected0>> & _FlaxDartType<_DropdownMenuEntryNative<_Selected0>> : never : never;
}
export {};
