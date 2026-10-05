import type { LogicalKeyboardKey } from "@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey";
import type { PhysicalKeyboardKey } from "@flax/flutter/services/_bindings/flutter_PhysicalKeyboardKey";
export interface KeyEvent {
    readonly type: string;
    readonly physicalKey: PhysicalKeyboardKey;
    readonly logicalKey: LogicalKeyboardKey;
    readonly character: string | null;
    readonly synthesized: boolean;
}
