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
export interface SpellCheckSuggestionsToolbarLayoutDelegate extends Omit<upstream0.SingleChildLayoutDelegate, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/material/spell_check_suggestions_toolbar_layout_delegate.dart::SpellCheckSuggestionsToolbarLayoutDelegate": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/shifted_box.dart::SingleChildLayoutDelegate": readonly [];
}> {
    readonly __SpellCheckSuggestionsToolbarLayoutDelegate: unique symbol;
    readonly [_flaxDartTypeValue]: SpellCheckSuggestionsToolbarLayoutDelegate;
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
        "__flaxBound:package:flutter/src/material/spell_check_suggestions_toolbar_layout_delegate.dart::SpellCheckSuggestionsToolbarLayoutDelegate": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/shifted_box.dart::SingleChildLayoutDelegate": readonly [];
    }>): boolean;
}
export declare function _SpellCheckSuggestionsToolbarLayoutDelegateFactory(options: {
    anchor: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>;
}): SpellCheckSuggestionsToolbarLayoutDelegate;
export interface _SpellCheckSuggestionsToolbarLayoutDelegateNative extends SpellCheckSuggestionsToolbarLayoutDelegate {
    readonly [_flaxDartTypeValue]: _SpellCheckSuggestionsToolbarLayoutDelegateNative;
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
        "__flaxBound:package:flutter/src/material/spell_check_suggestions_toolbar_layout_delegate.dart::SpellCheckSuggestionsToolbarLayoutDelegate": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/shifted_box.dart::SingleChildLayoutDelegate": readonly [];
    }>): boolean;
    get anchor(): upstream1.Offset;
}
export declare abstract class _SpellCheckSuggestionsToolbarLayoutDelegateNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SpellCheckSuggestionsToolbarLayoutDelegate>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SpellCheckSuggestionsToolbarLayoutDelegate;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:SpellCheckSuggestionsToolbarLayoutDelegate", readonly [], false];
    constructor(options: {
        anchor: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    });
}
export declare namespace _SpellCheckSuggestionsToolbarLayoutDelegateFactory {
    function implement(args: [options: {
        anchor: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    }], implementation: {}): SpellCheckSuggestionsToolbarLayoutDelegate;
}
declare const _SpellCheckSuggestionsToolbarLayoutDelegateBinding: typeof _SpellCheckSuggestionsToolbarLayoutDelegateFactory & (new (options: {
    anchor: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>;
}) => _SpellCheckSuggestionsToolbarLayoutDelegateNative);
export declare const SpellCheckSuggestionsToolbarLayoutDelegate: typeof _SpellCheckSuggestionsToolbarLayoutDelegateBinding & _FlaxInstanceType<SpellCheckSuggestionsToolbarLayoutDelegate> & _FlaxDartType<SpellCheckSuggestionsToolbarLayoutDelegate, readonly ["class", "flax.core/sdk_material#type:SpellCheckSuggestionsToolbarLayoutDelegate", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "anchor" | "getSize" | "getConstraintsForChild" | "getPositionForChild" | "shouldRelayout" | "__flaxBound:package:flutter/src/material/spell_check_suggestions_toolbar_layout_delegate.dart::SpellCheckSuggestionsToolbarLayoutDelegate" | "__flaxBound:package:flutter/src/rendering/shifted_box.dart::SingleChildLayoutDelegate";
export {};
