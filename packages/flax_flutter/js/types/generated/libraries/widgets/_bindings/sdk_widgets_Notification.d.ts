import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface Notification extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [];
}> {
    readonly __Notification: unique symbol;
    readonly [_flaxDartTypeValue]: Notification;
}
export interface Notification {
    readonly [_flaxDartTypeValue]: Notification;
    dispatch(target: upstream0.BuildContext | null): void;
    toString(): string;
    debugFillDescription(description: DartListInput<string, string>): void;
}
export declare abstract class Notification extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Notification>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: Notification;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:Notification", readonly [], false];
    constructor();
}
export declare namespace Notification {
    function implement(args: [], implementation: {}): Notification;
}
