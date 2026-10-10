import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
export interface VisualDensity extends Readonly<{
    "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __VisualDensity: unique symbol;
    readonly horizontal: number;
    readonly vertical: number;
    copyWith(options?: {
        horizontal?: number | null | undefined;
        vertical?: number | null | undefined;
    }): VisualDensity;
}
declare function _VisualDensityFactory(options?: {
    horizontal?: number | undefined;
    vertical?: number | undefined;
}): VisualDensity;
declare namespace _VisualDensityFactory {
    const standard: VisualDensity;
}
declare namespace _VisualDensityFactory {
    const comfortable: VisualDensity;
}
declare namespace _VisualDensityFactory {
    const compact: VisualDensity;
}
export declare const VisualDensity: typeof _VisualDensityFactory & _FlaxInstanceType<VisualDensity>;
export {};
