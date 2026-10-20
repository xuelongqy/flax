import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_SingleChildLayoutDelegate';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SingleChildLayoutDelegate';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TextSelectionToolbarLayoutDelegate extends Omit<upstream0.SingleChildLayoutDelegate, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/text_selection_toolbar_layout_delegate.dart::TextSelectionToolbarLayoutDelegate": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/shifted_box.dart::SingleChildLayoutDelegate": readonly [];
}> {
    readonly __TextSelectionToolbarLayoutDelegate: unique symbol;
    readonly [_flaxDartTypeValue]: TextSelectionToolbarLayoutDelegate;
    readonly anchorAbove: upstream1.Offset;
    readonly anchorBelow: upstream1.Offset;
    readonly fitsAbove: boolean | null;
    getSize(constraints: Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>): upstream2.Size;
    getConstraintsForChild(constraints: Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>): upstream3.BoxConstraints;
    getPositionForChild(size: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, childSize: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): upstream1.Offset;
    shouldRelayout(oldDelegate: Readonly<{
        "__flaxBound:package:flutter/src/widgets/text_selection_toolbar_layout_delegate.dart::TextSelectionToolbarLayoutDelegate": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/shifted_box.dart::SingleChildLayoutDelegate": readonly [];
    }>): boolean;
}
export declare function _TextSelectionToolbarLayoutDelegateFactory(options: {
    anchorAbove: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>;
    anchorBelow: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>;
    fitsAbove?: boolean | null | undefined;
}): TextSelectionToolbarLayoutDelegate;
export interface _TextSelectionToolbarLayoutDelegateNative extends TextSelectionToolbarLayoutDelegate {
    readonly [_flaxDartTypeValue]: _TextSelectionToolbarLayoutDelegateNative;
    getSize(constraints: Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>): upstream2.Size;
    getConstraintsForChild(constraints: Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>): upstream3.BoxConstraints;
    getPositionForChild(size: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, childSize: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): upstream1.Offset;
    shouldRelayout(oldDelegate: Readonly<{
        "__flaxBound:package:flutter/src/widgets/text_selection_toolbar_layout_delegate.dart::TextSelectionToolbarLayoutDelegate": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/shifted_box.dart::SingleChildLayoutDelegate": readonly [];
    }>): boolean;
    get anchorAbove(): upstream1.Offset;
    get anchorBelow(): upstream1.Offset;
    get fitsAbove(): boolean | null;
}
export declare abstract class _TextSelectionToolbarLayoutDelegateNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextSelectionToolbarLayoutDelegate>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TextSelectionToolbarLayoutDelegate;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:TextSelectionToolbarLayoutDelegate", readonly [], false];
    constructor(options: {
        anchorAbove: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        anchorBelow: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        fitsAbove?: boolean | null | undefined;
    });
}
export declare namespace _TextSelectionToolbarLayoutDelegateFactory {
    function implement(args: [options: {
        anchorAbove: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        anchorBelow: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        fitsAbove?: boolean | null | undefined;
    }], implementation: {}): TextSelectionToolbarLayoutDelegate;
}
declare const _TextSelectionToolbarLayoutDelegateBinding: typeof _TextSelectionToolbarLayoutDelegateFactory & (new (options: {
    anchorAbove: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>;
    anchorBelow: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>;
    fitsAbove?: boolean | null | undefined;
}) => _TextSelectionToolbarLayoutDelegateNative);
export declare namespace _TextSelectionToolbarLayoutDelegateFactory {
    function centerOn(position: number, width: number, max: number): number;
}
export declare const TextSelectionToolbarLayoutDelegate: typeof _TextSelectionToolbarLayoutDelegateBinding & _FlaxInstanceType<TextSelectionToolbarLayoutDelegate> & _FlaxDartType<TextSelectionToolbarLayoutDelegate, readonly ["class", "flax.core/sdk_widgets#type:TextSelectionToolbarLayoutDelegate", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "anchorAbove" | "anchorBelow" | "fitsAbove" | "getSize" | "getConstraintsForChild" | "getPositionForChild" | "shouldRelayout" | "__flaxBound:package:flutter/src/widgets/text_selection_toolbar_layout_delegate.dart::TextSelectionToolbarLayoutDelegate" | "__flaxBound:package:flutter/src/rendering/shifted_box.dart::SingleChildLayoutDelegate";
export {};
