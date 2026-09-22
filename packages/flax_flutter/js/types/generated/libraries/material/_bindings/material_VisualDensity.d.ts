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
export declare function VisualDensity(options?: {
    horizontal?: number | undefined;
    vertical?: number | undefined;
}): VisualDensity;
export declare namespace VisualDensity {
    const standard: VisualDensity;
}
export declare namespace VisualDensity {
    const comfortable: VisualDensity;
}
export declare namespace VisualDensity {
    const compact: VisualDensity;
}
