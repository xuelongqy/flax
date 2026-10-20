import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestEntry';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestEntry';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface BoxHitTestEntry extends Omit<upstream0.HitTestEntry<upstream1.RenderBox>, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/box.dart::BoxHitTestEntry": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestEntry": readonly [upstream1.RenderBox];
}> {
    readonly __BoxHitTestEntry: unique symbol;
    readonly [_flaxDartTypeValue]: BoxHitTestEntry;
    readonly target: upstream1.RenderBox;
    readonly transform: upstream3.Matrix4 | null;
    readonly localPosition: upstream2.Offset;
    toString(): string;
}
export declare function _BoxHitTestEntryFactory(target: Readonly<{
    "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, localPosition: Readonly<{
    "__flaxBound:dart:ui::Offset": readonly [];
}> & Readonly<{
    "__flaxBound:dart:ui::OffsetBase": readonly [];
}>): BoxHitTestEntry;
export interface _BoxHitTestEntryNative extends BoxHitTestEntry {
    readonly [_flaxDartTypeValue]: _BoxHitTestEntryNative;
    toString(): string;
    get localPosition(): upstream2.Offset;
    get target(): upstream1.RenderBox;
    get transform(): upstream3.Matrix4 | null;
}
export declare abstract class _BoxHitTestEntryNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BoxHitTestEntry>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: BoxHitTestEntry;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:BoxHitTestEntry", readonly [], false];
    constructor(target: Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, localPosition: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>);
}
export declare namespace _BoxHitTestEntryFactory {
    function implement(args: [target: Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, localPosition: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>], implementation: {}): BoxHitTestEntry;
}
declare const _BoxHitTestEntryBinding: typeof _BoxHitTestEntryFactory & (new (target: Readonly<{
    "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, localPosition: Readonly<{
    "__flaxBound:dart:ui::Offset": readonly [];
}> & Readonly<{
    "__flaxBound:dart:ui::OffsetBase": readonly [];
}>) => _BoxHitTestEntryNative);
export declare const BoxHitTestEntry: typeof _BoxHitTestEntryBinding & _FlaxInstanceType<BoxHitTestEntry> & _FlaxDartType<BoxHitTestEntry, readonly ["class", "flax.core/sdk_rendering#type:BoxHitTestEntry", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "target" | "transform" | "localPosition" | "toString" | "__flaxBound:package:flutter/src/rendering/box.dart::BoxHitTestEntry" | "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestEntry";
export {};
