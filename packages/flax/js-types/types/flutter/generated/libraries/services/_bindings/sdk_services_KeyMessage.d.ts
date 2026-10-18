import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_KeyEvent';
import '@flax/flutter/services/_bindings/flutter_KeyEvent';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_RawKeyEvent';
import '@flax/flutter/services/_bindings/sdk_services_RawKeyEvent';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface KeyMessage extends Readonly<{
    "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyMessage": readonly [];
}> {
    readonly __KeyMessage: unique symbol;
    readonly [_flaxDartTypeValue]: KeyMessage;
}
export interface KeyMessage {
    readonly [_flaxDartTypeValue]: KeyMessage;
    toString(): string;
    get events(): DartList<upstream0.KeyEvent>;
    get rawEvent(): upstream1.RawKeyEvent | null;
}
export declare abstract class KeyMessage extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<KeyMessage>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: KeyMessage;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:KeyMessage", readonly [], false];
    constructor(events: DartListInput<upstream0.KeyEvent, Readonly<{
        "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>>, rawEvent: (Readonly<{
        "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null);
}
export declare namespace KeyMessage {
    function implement(args: [events: DartListInput<upstream0.KeyEvent, Readonly<{
        "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>>, rawEvent: (Readonly<{
        "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null], implementation: {}): KeyMessage;
}
