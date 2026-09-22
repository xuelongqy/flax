import type { Offset } from "@flax/flutter/gestures/_bindings/flutter_Offset";
export interface PointerScrollEvent {
    readonly pointer: number;
    readonly device: number;
    readonly kind: "touch" | "mouse" | "stylus" | "invertedStylus" | "trackpad" | "unknown";
    readonly buttons: number;
    readonly down: boolean;
    readonly position: Offset;
    readonly localPosition: Offset;
    readonly delta: Offset;
    readonly localDelta: Offset;
    readonly pressure: number;
    readonly pressureMin: number;
    readonly pressureMax: number;
    readonly size: number;
    readonly synthesized: boolean;
    readonly scrollDelta: Offset;
}
