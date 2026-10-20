import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartSet, type DartSetInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_KeySet';
import '@flax/flutter/widgets/_bindings/sdk_widgets_KeySet';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutActivator';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutActivator';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/services/_bindings/flutter_KeyEvent';
import '@flax/flutter/services/_bindings/sdk_services_HardwareKeyboard';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface LogicalKeySet extends Omit<upstream0.KeySet<upstream1.LogicalKeyboardKey>, _flaxOwnMembers0>, Omit<upstream2.ShortcutActivator, _flaxOwnMembers0 | keyof upstream0.KeySet<upstream1.LogicalKeyboardKey>>, Omit<upstream3.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.KeySet<upstream1.LogicalKeyboardKey> | keyof upstream2.ShortcutActivator>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/shortcuts.dart::LogicalKeySet": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/shortcuts.dart::KeySet": readonly [upstream1.LogicalKeyboardKey];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __LogicalKeySet: unique symbol;
    readonly [_flaxDartTypeValue]: LogicalKeySet;
    readonly keys: DartSet<upstream1.LogicalKeyboardKey>;
    readonly triggers: DartIterable<upstream1.LogicalKeyboardKey>;
    accepts(event: Readonly<{
        "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, state: Readonly<{
        "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::HardwareKeyboard": readonly [];
    }>): boolean;
    debugDescribeKeys(): string;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream6.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream8.DiagnosticsTreeStyle | null | undefined;
    }): upstream7.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
}
export declare function _LogicalKeySetFactory(key1: Readonly<{
    "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, key2?: (Readonly<{
    "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>) | null, key3?: (Readonly<{
    "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>) | null, key4?: (Readonly<{
    "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>) | null): LogicalKeySet;
export declare namespace _LogicalKeySetFactory {
    function fromSet(keys: DartSetInput<upstream1.LogicalKeyboardKey, Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>>): LogicalKeySet;
}
export interface _LogicalKeySetNative extends LogicalKeySet {
    readonly [_flaxDartTypeValue]: _LogicalKeySetNative;
    readonly [_flaxDartConstructors]?: {
        "": (key1: Readonly<{
            "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>, key2?: (Readonly<{
            "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null, key3?: (Readonly<{
            "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null, key4?: (Readonly<{
            "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null) => void;
        "fromSet": (keys: DartSetInput<upstream1.LogicalKeyboardKey, Readonly<{
            "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>>) => void;
    };
    accepts(event: Readonly<{
        "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, state: Readonly<{
        "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::HardwareKeyboard": readonly [];
    }>): boolean;
    debugDescribeKeys(): string;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream6.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream8.DiagnosticsTreeStyle | null | undefined;
    }): upstream7.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    get triggers(): DartIterable<upstream1.LogicalKeyboardKey>;
    get keys(): DartSet<upstream1.LogicalKeyboardKey>;
}
export declare abstract class _LogicalKeySetNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LogicalKeySet>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: LogicalKeySet;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:LogicalKeySet", readonly [], false];
    constructor(key1: Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, key2?: (Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, key3?: (Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, key4?: (Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null);
    constructor(call: _FlaxProxySuper<_LogicalKeySetNative>);
}
export declare namespace _LogicalKeySetFactory {
    function implement(args: [key1: Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, key2?: (Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, key3?: (Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, key4?: (Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null], implementation: {}): LogicalKeySet;
}
declare const _LogicalKeySetBinding: typeof _LogicalKeySetFactory & (new (key1: Readonly<{
    "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, key2?: (Readonly<{
    "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>) | null, key3?: (Readonly<{
    "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>) | null, key4?: (Readonly<{
    "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>) | null) => _LogicalKeySetNative) & (new (call: _FlaxProxySuper<_LogicalKeySetNative>) => _LogicalKeySetNative);
export declare const LogicalKeySet: typeof _LogicalKeySetBinding & _FlaxInstanceType<LogicalKeySet> & _FlaxDartType<LogicalKeySet, readonly ["class", "flax.core/sdk_widgets#type:LogicalKeySet", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "keys" | "triggers" | "accepts" | "debugDescribeKeys" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:flutter/src/widgets/shortcuts.dart::LogicalKeySet" | "__flaxBound:package:flutter/src/widgets/shortcuts.dart::KeySet" | "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
