import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
export interface TargetPlatform extends DartEnum {
    readonly __TargetPlatform: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const TargetPlatform: Readonly<{
    android: TargetPlatform;
    fuchsia: TargetPlatform;
    iOS: TargetPlatform;
    linux: TargetPlatform;
    macOS: TargetPlatform;
    windows: TargetPlatform;
    values: readonly TargetPlatform[];
} & _FlaxInstanceType<TargetPlatform> & _FlaxDartType<TargetPlatform, readonly ["class", "flax.core/flutter#type:TargetPlatform", readonly [], false]>>;
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
