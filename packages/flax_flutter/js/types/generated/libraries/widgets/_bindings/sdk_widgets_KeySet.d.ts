import { type FlaxInstanceType as _FlaxInstanceType, type DartSet, type DartSetInput, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_KeyboardKey';
import '@flax/flutter/services/_bindings/sdk_services_KeyboardKey';
import '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface KeySet<T extends upstream0.KeyboardKey = upstream0.KeyboardKey> extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/shortcuts.dart::KeySet": readonly [T];
}> {
    readonly __KeySet: unique symbol;
    readonly [_flaxDartTypeValue]: KeySet<T>;
    readonly keys: DartSet<T>;
}
export declare function _KeySetFactory<T extends upstream0.KeyboardKey = upstream0.KeyboardKey>(key1: (T | DartInput<T>), key2?: (T | DartInput<T>) | null, key3?: (T | DartInput<T>) | null, key4?: (T | DartInput<T>) | null): KeySet<T>;
export declare function _KeySetFactory(key1: Readonly<{
    "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, key2?: (Readonly<{
    "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>) | null, key3?: (Readonly<{
    "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>) | null, key4?: (Readonly<{
    "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>) | null): KeySet<upstream0.KeyboardKey>;
export declare namespace _KeySetFactory {
    function fromSet<T extends upstream0.KeyboardKey = upstream0.KeyboardKey>(keys: DartSetInput<T, (T | DartInput<T>)>): KeySet<T>;
    function fromSet(keys: DartSetInput<upstream0.KeyboardKey, Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>>): KeySet<upstream0.KeyboardKey>;
}
export interface _KeySetNative<T extends upstream0.KeyboardKey = upstream0.KeyboardKey> extends KeySet<T> {
    readonly [_flaxDartTypeValue]: _KeySetNative<T>;
    readonly [_flaxDartConstructors]?: {
        "": (key1: Readonly<{
            "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>, key2?: (Readonly<{
            "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null, key3?: (Readonly<{
            "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null, key4?: (Readonly<{
            "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null) => void;
        "fromSet": (keys: DartSetInput<upstream0.KeyboardKey, Readonly<{
            "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>>) => void;
    };
    get keys(): DartSet<T>;
}
export declare abstract class _KeySetNative<T extends upstream0.KeyboardKey = upstream0.KeyboardKey> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<KeySet<upstream0.KeyboardKey>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: KeySet<upstream0.KeyboardKey>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:KeySet", readonly [readonly ["class", "flax.core/sdk_services#type:KeyboardKey", readonly [], false]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor(key1: Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, key2?: (Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, key3?: (Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, key4?: (Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null);
    constructor(call: _FlaxProxySuper<_KeySetNative<T>>);
}
export declare namespace _KeySetFactory {
    function implement<T extends upstream0.KeyboardKey = upstream0.KeyboardKey>(args: [key1: Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, key2?: (Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, key3?: (Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, key4?: (Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null], implementation: {}): KeySet<T>;
}
declare const _KeySetBinding: typeof _KeySetFactory & (new <T extends upstream0.KeyboardKey = upstream0.KeyboardKey>(key1: Readonly<{
    "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, key2?: (Readonly<{
    "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>) | null, key3?: (Readonly<{
    "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>) | null, key4?: (Readonly<{
    "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>) | null) => _KeySetNative<T>) & (new <T extends upstream0.KeyboardKey = upstream0.KeyboardKey>(call: _FlaxProxySuper<_KeySetNative<T>>) => _KeySetNative<T>);
export declare const KeySet: typeof _KeySetBinding & _FlaxInstanceType<KeySet<upstream0.KeyboardKey>> & _FlaxDartType<KeySet<upstream0.KeyboardKey>, readonly ["class", "flax.core/sdk_widgets#type:KeySet", readonly [readonly ["class", "flax.core/sdk_services#type:KeyboardKey", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.KeyboardKey] ? (new (key1: Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, key2?: (Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, key3?: (Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, key4?: (Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null) => _KeySetNative<_Selected0>) & (new (call: _FlaxProxySuper<_KeySetNative<_Selected0>>) => _KeySetNative<_Selected0>) & {
        (key1: (_Selected0 | DartInput<_Selected0>), key2?: (_Selected0 | DartInput<_Selected0>) | null, key3?: (_Selected0 | DartInput<_Selected0>) | null, key4?: (_Selected0 | DartInput<_Selected0>) | null): _KeySetNative<_Selected0>;
        fromSet: (keys: DartSetInput<_Selected0, (_Selected0 | DartInput<_Selected0>)>) => _KeySetNative<_Selected0>;
        readonly prototype: _KeySetNative<_Selected0>;
        implement(args: readonly [Readonly<{
            "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>, (Readonly<{
            "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null, (Readonly<{
            "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null, (Readonly<{
            "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null], implementation: Partial<_KeySetNative<_Selected0>>): _KeySetNative<_Selected0>;
    } & _FlaxInstanceType<_KeySetNative<_Selected0>> & _FlaxDartType<_KeySetNative<_Selected0>> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.KeyboardKey] ? (new (key1: Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, key2?: (Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, key3?: (Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, key4?: (Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null) => _KeySetNative<_Selected0>) & (new (call: _FlaxProxySuper<_KeySetNative<_Selected0>>) => _KeySetNative<_Selected0>) & {
        (key1: (_Selected0 | DartInput<_Selected0>), key2?: (_Selected0 | DartInput<_Selected0>) | null, key3?: (_Selected0 | DartInput<_Selected0>) | null, key4?: (_Selected0 | DartInput<_Selected0>) | null): _KeySetNative<_Selected0>;
        fromSet: (keys: DartSetInput<_Selected0, (_Selected0 | DartInput<_Selected0>)>) => _KeySetNative<_Selected0>;
        readonly prototype: _KeySetNative<_Selected0>;
        implement(args: readonly [Readonly<{
            "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>, (Readonly<{
            "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null, (Readonly<{
            "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null, (Readonly<{
            "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null], implementation: Partial<_KeySetNative<_Selected0>>): _KeySetNative<_Selected0>;
    } & _FlaxInstanceType<_KeySetNative<_Selected0>> & _FlaxDartType<_KeySetNative<_Selected0>> : never : never;
}
export {};
