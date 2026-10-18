import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SemanticsUpdate extends Readonly<{
    "__flaxBound:dart:ui::SemanticsUpdate": readonly [];
}> {
    readonly __SemanticsUpdate: unique symbol;
    readonly [_flaxDartTypeValue]: SemanticsUpdate;
    dispose(): void;
}
export declare namespace _SemanticsUpdateFactory {
    function implement(args: [], implementation: {
        dispose: (() => void);
    }): SemanticsUpdate;
}
export declare const SemanticsUpdate: typeof _SemanticsUpdateFactory & _FlaxInstanceType<SemanticsUpdate> & _FlaxDartType<SemanticsUpdate, readonly ["class", "flax.core/sdk_dart_ui#type:SemanticsUpdate", readonly [], false]>;
