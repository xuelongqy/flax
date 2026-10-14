import { type FlaxInstanceType as _FlaxInstanceType, type NavigationData, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface NavigatorPopHandler<T extends unknown | null = unknown | null> extends WidgetDescription {
    readonly type: "flax.core/flutter#type:NavigatorPopHandler";
}
declare function _NavigatorPopHandlerFactory<T extends unknown | null = unknown | null>(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    onPopWithResult?: Bindable<((result: NavigationData | null) => void) | null> | undefined;
    enabled?: Bindable<boolean> | undefined;
    child: Bindable<Widget>;
}): NavigatorPopHandler<T>;
export declare const NavigatorPopHandler: typeof _NavigatorPopHandlerFactory & _FlaxInstanceType<NavigatorPopHandler<unknown | null>> & _FlaxDartType<NavigatorPopHandler<unknown | null>, readonly ["class", "flax.core/flutter#type:NavigatorPopHandler", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        (options: {
            key?: Readonly<{
                "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
            }> | null | undefined;
            onPopWithResult?: ((result: NavigationData | null) => void) | null | undefined;
            enabled?: boolean | undefined;
            child: Widget;
        }): NavigatorPopHandler<_Selected0>;
        readonly prototype: NavigatorPopHandler<_Selected0>;
    } & _FlaxInstanceType<NavigatorPopHandler<_Selected0>> & _FlaxDartType<NavigatorPopHandler<_Selected0>> : never : never;
}
export {};
