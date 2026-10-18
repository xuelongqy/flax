import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartIterableInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface TableColumnWidth extends Readonly<{
    "__flaxBound:package:flutter/src/rendering/table.dart::TableColumnWidth": readonly [];
}> {
    readonly __TableColumnWidth: unique symbol;
    readonly [_flaxDartTypeValue]: TableColumnWidth;
}
export interface TableColumnWidth {
    readonly [_flaxDartTypeValue]: TableColumnWidth;
    flex(cells: DartIterableInput<upstream0.RenderBox, Readonly<{
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
    }>>): number | null;
    toString(): string;
}
export declare abstract class TableColumnWidth extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TableColumnWidth>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TableColumnWidth;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:TableColumnWidth", readonly [], false];
    constructor();
    abstract minIntrinsicWidth(cells: DartIterableInput<upstream0.RenderBox, Readonly<{
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
    abstract maxIntrinsicWidth(cells: DartIterableInput<upstream0.RenderBox, Readonly<{
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
}
export declare namespace TableColumnWidth {
    function implement(args: [], implementation: {
        minIntrinsicWidth: ((cells: DartIterable<upstream0.RenderBox>, containerWidth: number) => number);
        maxIntrinsicWidth: ((cells: DartIterable<upstream0.RenderBox>, containerWidth: number) => number);
    }): TableColumnWidth;
}
