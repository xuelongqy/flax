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
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ListBodyParentData extends Omit<upstream0.ContainerBoxParentData<upstream1.RenderBox>, _flaxOwnMembers0>, Omit<upstream2.BoxParentData, _flaxOwnMembers0 | keyof upstream0.ContainerBoxParentData<upstream1.RenderBox>>, Omit<upstream3.ParentData, _flaxOwnMembers0 | keyof upstream0.ContainerBoxParentData<upstream1.RenderBox> | keyof upstream2.BoxParentData>, Omit<upstream4.ContainerParentDataMixin<upstream1.RenderBox>, _flaxOwnMembers0 | keyof upstream0.ContainerBoxParentData<upstream1.RenderBox> | keyof upstream2.BoxParentData | keyof upstream3.ParentData>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/list_body.dart::ListBodyParentData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/box.dart::ContainerBoxParentData": readonly [upstream1.RenderBox];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/box.dart::BoxParentData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::ParentData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/object.dart::ContainerParentDataMixin": readonly [upstream1.RenderBox];
}> {
    readonly __ListBodyParentData: unique symbol;
    readonly [_flaxDartTypeValue]: ListBodyParentData;
    get offset(): upstream5.Offset;
    get previousSibling(): upstream1.RenderBox | null;
    get nextSibling(): upstream1.RenderBox | null;
    detach(): void;
    toString(): string;
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
export declare function _ListBodyParentDataFactory(): ListBodyParentData;
export interface _ListBodyParentDataNative extends ListBodyParentData {
    readonly [_flaxDartTypeValue]: _ListBodyParentDataNative;
    detach(): void;
    toString(): string;
    get offset(): upstream5.Offset;
    get previousSibling(): upstream1.RenderBox | null;
    get nextSibling(): upstream1.RenderBox | null;
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
export declare abstract class _ListBodyParentDataNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ListBodyParentData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ListBodyParentData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:ListBodyParentData", readonly [], false];
    constructor();
}
export declare namespace _ListBodyParentDataFactory {
    function implement(args: [], implementation: {}): ListBodyParentData;
}
declare const _ListBodyParentDataBinding: typeof _ListBodyParentDataFactory & (new () => _ListBodyParentDataNative);
export declare const ListBodyParentData: typeof _ListBodyParentDataBinding & _FlaxInstanceType<ListBodyParentData> & _FlaxDartType<ListBodyParentData, readonly ["class", "flax.core/sdk_rendering#type:ListBodyParentData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "offset" | "previousSibling" | "nextSibling" | "detach" | "toString" | "__flaxBound:package:flutter/src/rendering/list_body.dart::ListBodyParentData" | "__flaxBound:package:flutter/src/rendering/box.dart::ContainerBoxParentData" | "__flaxBound:package:flutter/src/rendering/box.dart::BoxParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ParentData" | "__flaxBound:package:flutter/src/rendering/object.dart::ContainerParentDataMixin";
export {};
