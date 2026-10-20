import { type FlaxInstanceType as _FlaxInstanceType, type DartIterableInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_TableColumnWidth';
import '@flax/flutter/rendering/_bindings/sdk_rendering_TableColumnWidth';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FlexColumnWidth extends Omit<upstream0.TableColumnWidth, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/table.dart::FlexColumnWidth": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/table.dart::TableColumnWidth": readonly [];
}> {
    readonly __FlexColumnWidth: unique symbol;
    readonly [_flaxDartTypeValue]: FlexColumnWidth;
    readonly value: number;
    minIntrinsicWidth(cells: DartIterableInput<upstream1.RenderBox, Readonly<{
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
    }>>, containerWidth: number): number;
    maxIntrinsicWidth(cells: DartIterableInput<upstream1.RenderBox, Readonly<{
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
    }>>, containerWidth: number): number;
    flex(cells: DartIterableInput<upstream1.RenderBox, Readonly<{
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
    }>>): number;
    toString(): string;
}
export declare function _FlexColumnWidthFactory(value?: number): FlexColumnWidth;
export interface _FlexColumnWidthNative extends FlexColumnWidth {
    readonly [_flaxDartTypeValue]: _FlexColumnWidthNative;
    minIntrinsicWidth(cells: DartIterableInput<upstream1.RenderBox, Readonly<{
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
    }>>, containerWidth: number): number;
    maxIntrinsicWidth(cells: DartIterableInput<upstream1.RenderBox, Readonly<{
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
    }>>, containerWidth: number): number;
    flex(cells: DartIterableInput<upstream1.RenderBox, Readonly<{
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
    }>>): number;
    toString(): string;
    get value(): number;
}
export declare abstract class _FlexColumnWidthNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FlexColumnWidth>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: FlexColumnWidth;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:FlexColumnWidth", readonly [], false];
    constructor(value?: number);
}
export declare namespace _FlexColumnWidthFactory {
    function implement(args: [value?: number], implementation: {}): FlexColumnWidth;
}
declare const _FlexColumnWidthBinding: typeof _FlexColumnWidthFactory & (new (value?: number) => _FlexColumnWidthNative);
export declare const FlexColumnWidth: typeof _FlexColumnWidthBinding & _FlaxInstanceType<FlexColumnWidth> & _FlaxDartType<FlexColumnWidth, readonly ["class", "flax.core/sdk_rendering#type:FlexColumnWidth", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "minIntrinsicWidth" | "maxIntrinsicWidth" | "flex" | "toString" | "__flaxBound:package:flutter/src/rendering/table.dart::FlexColumnWidth" | "__flaxBound:package:flutter/src/rendering/table.dart::TableColumnWidth";
export {};
