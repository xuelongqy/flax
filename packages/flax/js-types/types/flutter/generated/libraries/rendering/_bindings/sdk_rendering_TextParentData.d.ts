import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerParentDataMixin';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerParentDataMixin';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream4 from '@flax/flutter/painting/_bindings/sdk_painting_PlaceholderSpan';
import '@flax/flutter/painting/_bindings/sdk_painting_PlaceholderSpan';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface TextParentData extends Omit<upstream0.ParentData, _flaxOwnMembers0>, Omit<upstream1.ContainerParentDataMixin<upstream2.RenderBox>, _flaxOwnMembers0 | keyof upstream0.ParentData>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/paragraph.dart::TextParentData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::ParentData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::ContainerParentDataMixin": readonly [upstream2.RenderBox];
}> {
    readonly __TextParentData: unique symbol;
    readonly [_flaxDartTypeValue]: TextParentData;
}
export interface TextParentData {
    readonly [_flaxDartTypeValue]: TextParentData;
    detach(): void;
    toString(): string;
    get offset(): upstream3.Offset | null;
    get span(): upstream4.PlaceholderSpan | null;
    get previousSibling(): upstream2.RenderBox | null;
    get nextSibling(): upstream2.RenderBox | null;
    set span(value: (Readonly<{
        "__flaxBound:package:flutter/src/painting/placeholder_span.dart::PlaceholderSpan": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/inline_span.dart::InlineSpan": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null);
    set previousSibling(value: (Readonly<{
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
    }>) | null);
    set nextSibling(value: (Readonly<{
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
    }>) | null);
}
export declare abstract class TextParentData extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextParentData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TextParentData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:TextParentData", readonly [], false];
    constructor();
}
export declare namespace TextParentData {
    function implement(args: [], implementation: {}): TextParentData;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "previousSibling" | "nextSibling" | "offset" | "span" | "detach" | "toString" | "__flaxBound:package:flutter/src/rendering/paragraph.dart::TextParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ContainerParentDataMixin";
export {};
