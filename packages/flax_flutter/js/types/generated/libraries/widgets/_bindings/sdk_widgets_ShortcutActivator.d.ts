import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_KeyEvent';
import '@flax/flutter/services/_bindings/flutter_KeyEvent';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_HardwareKeyboard';
import '@flax/flutter/services/_bindings/sdk_services_HardwareKeyboard';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ShortcutActivator extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator": readonly [];
}> {
    readonly __ShortcutActivator: unique symbol;
    readonly [_flaxDartTypeValue]: ShortcutActivator;
}
export interface ShortcutActivator {
    readonly [_flaxDartTypeValue]: ShortcutActivator;
    get triggers(): DartIterable<upstream0.LogicalKeyboardKey> | null;
}
export declare abstract class ShortcutActivator extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ShortcutActivator>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ShortcutActivator;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ShortcutActivator", readonly [], false];
    constructor();
    abstract accepts(event: Readonly<{
        "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, state: Readonly<{
        "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::HardwareKeyboard": readonly [];
    }>): boolean;
    abstract debugDescribeKeys(): string;
}
export declare namespace ShortcutActivator {
    function implement(args: [], implementation: {
        accepts: ((event: upstream1.KeyEvent, state: upstream2.HardwareKeyboard) => boolean);
        debugDescribeKeys: (() => string);
    }): ShortcutActivator;
}
export declare namespace ShortcutActivator {
    function isActivatedBy(activator: Readonly<{
        "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator": readonly [];
    }>, event: Readonly<{
        "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): boolean;
}
