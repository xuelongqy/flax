import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface IsolateNameServer extends Readonly<{
    "__flaxBound:dart:ui::IsolateNameServer": readonly [];
}> {
    readonly __IsolateNameServer: unique symbol;
    readonly [_flaxDartTypeValue]: IsolateNameServer;
}
export declare namespace _IsolateNameServerFactory {
    function removePortNameMapping(name: string): boolean;
}
export declare const IsolateNameServer: typeof _IsolateNameServerFactory & _FlaxInstanceType<IsolateNameServer> & _FlaxDartType<IsolateNameServer, readonly ["class", "flax.core/sdk_dart_ui#type:IsolateNameServer", readonly [], false]>;
