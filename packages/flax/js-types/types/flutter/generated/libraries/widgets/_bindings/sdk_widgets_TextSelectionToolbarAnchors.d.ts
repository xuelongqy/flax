import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_TextSelectionPoint';
import '@flax/flutter/rendering/_bindings/sdk_rendering_TextSelectionPoint';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TextSelectionToolbarAnchors extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/text_selection_toolbar_anchors.dart::TextSelectionToolbarAnchors": readonly [];
}> {
    readonly __TextSelectionToolbarAnchors: unique symbol;
    readonly [_flaxDartTypeValue]: TextSelectionToolbarAnchors;
    readonly primaryAnchor: upstream0.Offset;
    readonly secondaryAnchor: upstream0.Offset | null;
}
export declare function _TextSelectionToolbarAnchorsFactory(options: {
    primaryAnchor: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>;
    secondaryAnchor?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null | undefined;
}): TextSelectionToolbarAnchors;
export declare namespace _TextSelectionToolbarAnchorsFactory {
    function fromSelection(options: {
        renderBox: Readonly<{
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
        }>;
        startGlyphHeight: number;
        endGlyphHeight: number;
        selectionEndpoints: DartListInput<upstream2.TextSelectionPoint, Readonly<{
            "__flaxBound:package:flutter/src/rendering/editable.dart::TextSelectionPoint": readonly [];
        }>>;
    }): TextSelectionToolbarAnchors;
}
export interface _TextSelectionToolbarAnchorsNative extends TextSelectionToolbarAnchors {
    readonly [_flaxDartTypeValue]: _TextSelectionToolbarAnchorsNative;
    get primaryAnchor(): upstream0.Offset;
    get secondaryAnchor(): upstream0.Offset | null;
}
export declare abstract class _TextSelectionToolbarAnchorsNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextSelectionToolbarAnchors>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TextSelectionToolbarAnchors;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:TextSelectionToolbarAnchors", readonly [], false];
    constructor(options: {
        primaryAnchor: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        secondaryAnchor?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
    });
}
export declare namespace _TextSelectionToolbarAnchorsFactory {
    function implement(args: [options: {
        primaryAnchor: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        secondaryAnchor?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
    }], implementation: {}): TextSelectionToolbarAnchors;
}
declare const _TextSelectionToolbarAnchorsBinding: typeof _TextSelectionToolbarAnchorsFactory & (new (options: {
    primaryAnchor: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>;
    secondaryAnchor?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null | undefined;
}) => _TextSelectionToolbarAnchorsNative);
export declare namespace _TextSelectionToolbarAnchorsFactory {
    function getSelectionRect(renderBox: Readonly<{
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
    }>, startGlyphHeight: number, endGlyphHeight: number, selectionEndpoints: DartListInput<upstream2.TextSelectionPoint, Readonly<{
        "__flaxBound:package:flutter/src/rendering/editable.dart::TextSelectionPoint": readonly [];
    }>>): upstream3.Rect;
}
export declare const TextSelectionToolbarAnchors: typeof _TextSelectionToolbarAnchorsBinding & _FlaxInstanceType<TextSelectionToolbarAnchors> & _FlaxDartType<TextSelectionToolbarAnchors, readonly ["class", "flax.core/sdk_widgets#type:TextSelectionToolbarAnchors", readonly [], false]>;
export {};
