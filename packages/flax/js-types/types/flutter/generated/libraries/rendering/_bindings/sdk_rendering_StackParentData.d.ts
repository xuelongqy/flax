import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerBoxParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerBoxParentData';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_BoxParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_BoxParentData';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ParentData';
import type * as upstream4 from '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerParentDataMixin';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerParentDataMixin';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream6 from '@flax/flutter/rendering/_bindings/sdk_rendering_RelativeRect';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RelativeRect';
import type * as upstream7 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/dart/ui/_bindings/flutter_Size';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface StackParentData extends Omit<upstream0.ContainerBoxParentData<upstream1.RenderBox>, _flaxOwnMembers0>, Omit<upstream2.BoxParentData, _flaxOwnMembers0 | keyof upstream0.ContainerBoxParentData<upstream1.RenderBox>>, Omit<upstream3.ParentData, _flaxOwnMembers0 | keyof upstream0.ContainerBoxParentData<upstream1.RenderBox> | keyof upstream2.BoxParentData>, Omit<upstream4.ContainerParentDataMixin<upstream1.RenderBox>, _flaxOwnMembers0 | keyof upstream0.ContainerBoxParentData<upstream1.RenderBox> | keyof upstream2.BoxParentData | keyof upstream3.ParentData>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/stack.dart::StackParentData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/box.dart::ContainerBoxParentData": readonly [upstream1.RenderBox];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/box.dart::BoxParentData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::ParentData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::ContainerParentDataMixin": readonly [upstream1.RenderBox];
}> {
    readonly __StackParentData: unique symbol;
    readonly [_flaxDartTypeValue]: StackParentData;
    get offset(): upstream5.Offset;
    get previousSibling(): upstream1.RenderBox | null;
    get nextSibling(): upstream1.RenderBox | null;
    get top(): number | null;
    get right(): number | null;
    get bottom(): number | null;
    get left(): number | null;
    get width(): number | null;
    get height(): number | null;
    get rect(): upstream6.RelativeRect;
    readonly isPositioned: boolean;
    detach(): void;
    toString(): string;
    positionedChildConstraints(stackSize: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): upstream7.BoxConstraints;
    set offset(value: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>);
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
    set top(value: number | null);
    set right(value: number | null);
    set bottom(value: number | null);
    set left(value: number | null);
    set width(value: number | null);
    set height(value: number | null);
    set rect(value: Readonly<{
        "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [];
    }>);
}
export declare function _StackParentDataFactory(): StackParentData;
export interface _StackParentDataNative extends StackParentData {
    readonly [_flaxDartTypeValue]: _StackParentDataNative;
    detach(): void;
    toString(): string;
    positionedChildConstraints(stackSize: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): upstream7.BoxConstraints;
    get top(): number | null;
    get right(): number | null;
    get bottom(): number | null;
    get left(): number | null;
    get width(): number | null;
    get height(): number | null;
    get rect(): upstream6.RelativeRect;
    get isPositioned(): boolean;
    get offset(): upstream5.Offset;
    get previousSibling(): upstream1.RenderBox | null;
    get nextSibling(): upstream1.RenderBox | null;
    set top(value: number | null);
    set right(value: number | null);
    set bottom(value: number | null);
    set left(value: number | null);
    set width(value: number | null);
    set height(value: number | null);
    set rect(value: Readonly<{
        "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [];
    }>);
    set offset(value: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>);
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
export declare abstract class _StackParentDataNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<StackParentData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: StackParentData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:StackParentData", readonly [], false];
    constructor();
}
export declare namespace _StackParentDataFactory {
    function implement(args: [], implementation: {}): StackParentData;
}
declare const _StackParentDataBinding: typeof _StackParentDataFactory & (new () => _StackParentDataNative);
export declare const StackParentData: typeof _StackParentDataBinding & _FlaxInstanceType<StackParentData> & _FlaxDartType<StackParentData, readonly ["class", "flax.core/sdk_rendering#type:StackParentData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "offset" | "previousSibling" | "nextSibling" | "top" | "right" | "bottom" | "left" | "width" | "height" | "rect" | "isPositioned" | "detach" | "toString" | "positionedChildConstraints" | "__flaxBound:package:flutter/src/rendering/stack.dart::StackParentData" | "__flaxBound:package:flutter/src/rendering/box.dart::ContainerBoxParentData" | "__flaxBound:package:flutter/src/rendering/box.dart::BoxParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ContainerParentDataMixin";
export {};
