import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionPoint';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionPoint';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionStatus';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionStatus';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SelectionGeometry extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionGeometry": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __SelectionGeometry: unique symbol;
    readonly [_flaxDartTypeValue]: SelectionGeometry;
    readonly startSelectionPoint: upstream1.SelectionPoint | null;
    readonly endSelectionPoint: upstream1.SelectionPoint | null;
    readonly status: upstream3.SelectionStatus;
    readonly selectionRects: DartList<upstream2.Rect>;
    readonly hasContent: boolean;
    readonly hasSelection: boolean;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream4.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream6.DiagnosticsTreeStyle | null | undefined;
    }): upstream5.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    copyWith(options?: {
        endSelectionPoint?: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionPoint": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        hasContent?: boolean | null | undefined;
        selectionRects?: DartListInput<upstream2.Rect, Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>> | null | undefined;
        startSelectionPoint?: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionPoint": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        status?: upstream3.SelectionStatus | null | undefined;
    }): SelectionGeometry;
}
export declare function _SelectionGeometryFactory(options: {
    startSelectionPoint?: (Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionPoint": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    endSelectionPoint?: (Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionPoint": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    selectionRects?: DartListInput<upstream2.Rect, Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>> | undefined;
    status: upstream3.SelectionStatus;
    hasContent: boolean;
}): SelectionGeometry;
export interface _SelectionGeometryNative extends SelectionGeometry {
    readonly [_flaxDartTypeValue]: _SelectionGeometryNative;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream4.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream6.DiagnosticsTreeStyle | null | undefined;
    }): upstream5.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    copyWith(options?: {
        startSelectionPoint?: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionPoint": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        endSelectionPoint?: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionPoint": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        selectionRects?: DartListInput<upstream2.Rect, Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>> | null | undefined;
        status?: upstream3.SelectionStatus | null | undefined;
        hasContent?: boolean | null | undefined;
    }): SelectionGeometry;
    get startSelectionPoint(): upstream1.SelectionPoint | null;
    get endSelectionPoint(): upstream1.SelectionPoint | null;
    get status(): upstream3.SelectionStatus;
    get selectionRects(): DartList<upstream2.Rect>;
    get hasContent(): boolean;
    get hasSelection(): boolean;
}
export declare abstract class _SelectionGeometryNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SelectionGeometry>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SelectionGeometry;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:SelectionGeometry", readonly [], false];
    constructor(options: {
        startSelectionPoint?: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionPoint": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        endSelectionPoint?: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionPoint": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        selectionRects?: DartListInput<upstream2.Rect, Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>> | undefined;
        status: upstream3.SelectionStatus;
        hasContent: boolean;
    });
}
export declare namespace _SelectionGeometryFactory {
    function implement(args: [options: {
        startSelectionPoint?: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionPoint": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        endSelectionPoint?: (Readonly<{
            "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionPoint": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        selectionRects?: DartListInput<upstream2.Rect, Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>> | undefined;
        status: upstream3.SelectionStatus;
        hasContent: boolean;
    }], implementation: {}): SelectionGeometry;
}
declare const _SelectionGeometryBinding: typeof _SelectionGeometryFactory & (new (options: {
    startSelectionPoint?: (Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionPoint": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    endSelectionPoint?: (Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionPoint": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    selectionRects?: DartListInput<upstream2.Rect, Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>> | undefined;
    status: upstream3.SelectionStatus;
    hasContent: boolean;
}) => _SelectionGeometryNative);
export declare const SelectionGeometry: typeof _SelectionGeometryBinding & _FlaxInstanceType<SelectionGeometry> & _FlaxDartType<SelectionGeometry, readonly ["class", "flax.core/sdk_rendering#type:SelectionGeometry", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "startSelectionPoint" | "endSelectionPoint" | "status" | "selectionRects" | "hasContent" | "hasSelection" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionGeometry" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
