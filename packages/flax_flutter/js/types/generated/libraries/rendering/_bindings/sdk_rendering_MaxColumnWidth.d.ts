import { type FlaxInstanceType as _FlaxInstanceType, type DartIterableInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_TableColumnWidth';
import '@flax/flutter/rendering/_bindings/sdk_rendering_TableColumnWidth';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface MaxColumnWidth extends Omit<upstream0.TableColumnWidth, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/table.dart::MaxColumnWidth": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/table.dart::TableColumnWidth": readonly [];
}> {
    readonly __MaxColumnWidth: unique symbol;
    readonly [_flaxDartTypeValue]: MaxColumnWidth;
    readonly a: upstream0.TableColumnWidth;
    readonly b: upstream0.TableColumnWidth;
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
    }>>): number | null;
    toString(): string;
}
export declare function _MaxColumnWidthFactory(a: Readonly<{
    "__flaxBound:package:flutter/src/rendering/table.dart::TableColumnWidth": readonly [];
}>, b: Readonly<{
    "__flaxBound:package:flutter/src/rendering/table.dart::TableColumnWidth": readonly [];
}>): MaxColumnWidth;
export interface _MaxColumnWidthNative extends MaxColumnWidth {
    readonly [_flaxDartTypeValue]: _MaxColumnWidthNative;
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
    }>>): number | null;
    toString(): string;
    get a(): upstream0.TableColumnWidth;
    get b(): upstream0.TableColumnWidth;
}
export declare abstract class _MaxColumnWidthNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MaxColumnWidth>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: MaxColumnWidth;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:MaxColumnWidth", readonly [], false];
    constructor(a: Readonly<{
        "__flaxBound:package:flutter/src/rendering/table.dart::TableColumnWidth": readonly [];
    }>, b: Readonly<{
        "__flaxBound:package:flutter/src/rendering/table.dart::TableColumnWidth": readonly [];
    }>);
}
export declare namespace _MaxColumnWidthFactory {
    function implement(args: [a: Readonly<{
        "__flaxBound:package:flutter/src/rendering/table.dart::TableColumnWidth": readonly [];
    }>, b: Readonly<{
        "__flaxBound:package:flutter/src/rendering/table.dart::TableColumnWidth": readonly [];
    }>], implementation: {}): MaxColumnWidth;
}
declare const _MaxColumnWidthBinding: typeof _MaxColumnWidthFactory & (new (a: Readonly<{
    "__flaxBound:package:flutter/src/rendering/table.dart::TableColumnWidth": readonly [];
}>, b: Readonly<{
    "__flaxBound:package:flutter/src/rendering/table.dart::TableColumnWidth": readonly [];
}>) => _MaxColumnWidthNative);
export declare const MaxColumnWidth: typeof _MaxColumnWidthBinding & _FlaxInstanceType<MaxColumnWidth> & _FlaxDartType<MaxColumnWidth, readonly ["class", "flax.core/sdk_rendering#type:MaxColumnWidth", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "a" | "b" | "minIntrinsicWidth" | "maxIntrinsicWidth" | "flex" | "toString" | "__flaxBound:package:flutter/src/rendering/table.dart::MaxColumnWidth" | "__flaxBound:package:flutter/src/rendering/table.dart::TableColumnWidth";
export {};
