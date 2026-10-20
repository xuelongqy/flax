import { type FlaxInstanceType as _FlaxInstanceType, type DartIterableInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_TableColumnWidth';
import '@flax/flutter/rendering/_bindings/sdk_rendering_TableColumnWidth';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface MinColumnWidth extends Omit<upstream0.TableColumnWidth, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/table.dart::MinColumnWidth": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/table.dart::TableColumnWidth": readonly [];
}> {
    readonly __MinColumnWidth: unique symbol;
    readonly [_flaxDartTypeValue]: MinColumnWidth;
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
export declare function _MinColumnWidthFactory(a: Readonly<{
    "__flaxBound:package:flutter/src/rendering/table.dart::TableColumnWidth": readonly [];
}>, b: Readonly<{
    "__flaxBound:package:flutter/src/rendering/table.dart::TableColumnWidth": readonly [];
}>): MinColumnWidth;
export interface _MinColumnWidthNative extends MinColumnWidth {
    readonly [_flaxDartTypeValue]: _MinColumnWidthNative;
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
export declare abstract class _MinColumnWidthNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MinColumnWidth>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: MinColumnWidth;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:MinColumnWidth", readonly [], false];
    constructor(a: Readonly<{
        "__flaxBound:package:flutter/src/rendering/table.dart::TableColumnWidth": readonly [];
    }>, b: Readonly<{
        "__flaxBound:package:flutter/src/rendering/table.dart::TableColumnWidth": readonly [];
    }>);
}
export declare namespace _MinColumnWidthFactory {
    function implement(args: [a: Readonly<{
        "__flaxBound:package:flutter/src/rendering/table.dart::TableColumnWidth": readonly [];
    }>, b: Readonly<{
        "__flaxBound:package:flutter/src/rendering/table.dart::TableColumnWidth": readonly [];
    }>], implementation: {}): MinColumnWidth;
}
declare const _MinColumnWidthBinding: typeof _MinColumnWidthFactory & (new (a: Readonly<{
    "__flaxBound:package:flutter/src/rendering/table.dart::TableColumnWidth": readonly [];
}>, b: Readonly<{
    "__flaxBound:package:flutter/src/rendering/table.dart::TableColumnWidth": readonly [];
}>) => _MinColumnWidthNative);
export declare const MinColumnWidth: typeof _MinColumnWidthBinding & _FlaxInstanceType<MinColumnWidth> & _FlaxDartType<MinColumnWidth, readonly ["class", "flax.core/sdk_rendering#type:MinColumnWidth", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "a" | "b" | "minIntrinsicWidth" | "maxIntrinsicWidth" | "flex" | "toString" | "__flaxBound:package:flutter/src/rendering/table.dart::MinColumnWidth" | "__flaxBound:package:flutter/src/rendering/table.dart::TableColumnWidth";
export {};
