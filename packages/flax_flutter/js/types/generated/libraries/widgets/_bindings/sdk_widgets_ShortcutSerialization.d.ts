import { type FlaxInstanceType as _FlaxInstanceType, type DartMap } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ShortcutSerialization extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::ShortcutSerialization": readonly [];
}> {
    readonly __ShortcutSerialization: unique symbol;
    readonly [_flaxDartTypeValue]: ShortcutSerialization;
    readonly trigger: upstream0.LogicalKeyboardKey | null;
    readonly character: string | null;
    readonly alt: boolean | null;
    readonly control: boolean | null;
    readonly meta: boolean | null;
    readonly shift: boolean | null;
    toChannelRepresentation(): DartMap<string, unknown | null>;
}
export declare namespace _ShortcutSerializationFactory {
    function character(character: string, options?: {
        alt?: boolean | undefined;
        control?: boolean | undefined;
        meta?: boolean | undefined;
    }): ShortcutSerialization;
}
export declare namespace _ShortcutSerializationFactory {
    function modifier(trigger: Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, options?: {
        alt?: boolean | undefined;
        control?: boolean | undefined;
        meta?: boolean | undefined;
        shift?: boolean | undefined;
    }): ShortcutSerialization;
}
export declare const ShortcutSerialization: typeof _ShortcutSerializationFactory & _FlaxInstanceType<ShortcutSerialization> & _FlaxDartType<ShortcutSerialization, readonly ["class", "flax.core/sdk_widgets#type:ShortcutSerialization", readonly [], false]>;
