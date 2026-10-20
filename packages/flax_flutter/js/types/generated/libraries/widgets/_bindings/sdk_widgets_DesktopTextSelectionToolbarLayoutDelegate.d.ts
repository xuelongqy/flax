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
export interface DesktopTextSelectionToolbarLayoutDelegate extends Omit<upstream0.SingleChildLayoutDelegate, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/desktop_text_selection_toolbar_layout_delegate.dart::DesktopTextSelectionToolbarLayoutDelegate": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/shifted_box.dart::SingleChildLayoutDelegate": readonly [];
}> {
    readonly __DesktopTextSelectionToolbarLayoutDelegate: unique symbol;
    readonly [_flaxDartTypeValue]: DesktopTextSelectionToolbarLayoutDelegate;
    readonly anchor: upstream1.Offset;
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
        "__flaxBound:package:flutter/src/widgets/desktop_text_selection_toolbar_layout_delegate.dart::DesktopTextSelectionToolbarLayoutDelegate": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/shifted_box.dart::SingleChildLayoutDelegate": readonly [];
    }>): boolean;
}
export declare function _DesktopTextSelectionToolbarLayoutDelegateFactory(options: {
    anchor: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>;
}): DesktopTextSelectionToolbarLayoutDelegate;
export interface _DesktopTextSelectionToolbarLayoutDelegateNative extends DesktopTextSelectionToolbarLayoutDelegate {
    readonly [_flaxDartTypeValue]: _DesktopTextSelectionToolbarLayoutDelegateNative;
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
        "__flaxBound:package:flutter/src/widgets/desktop_text_selection_toolbar_layout_delegate.dart::DesktopTextSelectionToolbarLayoutDelegate": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/shifted_box.dart::SingleChildLayoutDelegate": readonly [];
    }>): boolean;
    get anchor(): upstream1.Offset;
}
export declare abstract class _DesktopTextSelectionToolbarLayoutDelegateNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DesktopTextSelectionToolbarLayoutDelegate>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DesktopTextSelectionToolbarLayoutDelegate;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:DesktopTextSelectionToolbarLayoutDelegate", readonly [], false];
    constructor(options: {
        anchor: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    });
}
export declare namespace _DesktopTextSelectionToolbarLayoutDelegateFactory {
    function implement(args: [options: {
        anchor: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    }], implementation: {}): DesktopTextSelectionToolbarLayoutDelegate;
}
declare const _DesktopTextSelectionToolbarLayoutDelegateBinding: typeof _DesktopTextSelectionToolbarLayoutDelegateFactory & (new (options: {
    anchor: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>;
}) => _DesktopTextSelectionToolbarLayoutDelegateNative);
export declare const DesktopTextSelectionToolbarLayoutDelegate: typeof _DesktopTextSelectionToolbarLayoutDelegateBinding & _FlaxInstanceType<DesktopTextSelectionToolbarLayoutDelegate> & _FlaxDartType<DesktopTextSelectionToolbarLayoutDelegate, readonly ["class", "flax.core/sdk_widgets#type:DesktopTextSelectionToolbarLayoutDelegate", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "anchor" | "getSize" | "getConstraintsForChild" | "getPositionForChild" | "shouldRelayout" | "__flaxBound:package:flutter/src/widgets/desktop_text_selection_toolbar_layout_delegate.dart::DesktopTextSelectionToolbarLayoutDelegate" | "__flaxBound:package:flutter/src/rendering/shifted_box.dart::SingleChildLayoutDelegate";
export {};
