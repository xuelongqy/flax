import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PopScope<T extends unknown | null = unknown | null> extends WidgetDescription {
    readonly type: "flax.core/flutter#type:PopScope";
}
declare function _PopScopeFactory<T extends unknown | null = unknown | null>(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    child: Bindable<Widget>;
    canPop?: Bindable<boolean> | undefined;
    onPopInvokedWithResult?: Bindable<((didPop: boolean, result: T | null) => void) | null> | undefined;
}): PopScope<T>;
export declare const PopScope: typeof _PopScopeFactory & _FlaxInstanceType<PopScope<unknown | null>> & _FlaxDartType<PopScope<unknown | null>, readonly ["class", "flax.core/flutter#type:PopScope", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        (options: {
            key?: Readonly<{
                "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
            }> | null | undefined;
            child: Widget;
            canPop?: boolean | undefined;
            onPopInvokedWithResult?: ((didPop: boolean, result: _Selected0 | null) => void) | null | undefined;
        }): PopScope<_Selected0>;
        readonly prototype: PopScope<_Selected0>;
    } & _FlaxInstanceType<PopScope<_Selected0>> & _FlaxDartType<PopScope<_Selected0>> : never : never;
}
export {};
