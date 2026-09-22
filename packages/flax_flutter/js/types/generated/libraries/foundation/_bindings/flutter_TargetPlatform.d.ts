import { type DartEnum } from '@flax/core/bindings';
export interface TargetPlatform extends DartEnum {
    readonly type: "flax.core/flutter#type:TargetPlatform";
}
export declare const TargetPlatform: Readonly<{
    android: TargetPlatform;
    fuchsia: TargetPlatform;
    iOS: TargetPlatform;
    linux: TargetPlatform;
    macOS: TargetPlatform;
    windows: TargetPlatform;
}>;
