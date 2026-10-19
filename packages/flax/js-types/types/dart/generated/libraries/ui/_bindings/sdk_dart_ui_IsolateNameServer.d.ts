import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/isolate/_bindings/sdk_dependencies_SendPort';
import '@flax/dart/isolate/_bindings/sdk_dependencies_SendPort';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface IsolateNameServer extends Readonly<{
    "__flaxBound:dart:ui::IsolateNameServer": readonly [];
}> {
    readonly __IsolateNameServer: unique symbol;
    readonly [_flaxDartTypeValue]: IsolateNameServer;
}
export declare namespace _IsolateNameServerFactory {
    function lookupPortByName(name: string): upstream0.SendPort | null;
}
export declare namespace _IsolateNameServerFactory {
    function registerPortWithName(port: Readonly<{
        "__flaxBound:dart:isolate::SendPort": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:isolate::Capability": readonly [];
    }>, name: string): boolean;
}
export declare namespace _IsolateNameServerFactory {
    function removePortNameMapping(name: string): boolean;
}
export declare const IsolateNameServer: typeof _IsolateNameServerFactory & _FlaxInstanceType<IsolateNameServer> & _FlaxDartType<IsolateNameServer, readonly ["class", "flax.core/sdk_dart_ui#type:IsolateNameServer", readonly [], false]>;
