import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationStyle';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationStyle';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ChipAnimationStyle extends Readonly<{
    "__flaxBound:package:material_ui/src/chip.dart::ChipAnimationStyle": readonly [];
}> {
    readonly __ChipAnimationStyle: unique symbol;
    readonly [_flaxDartTypeValue]: ChipAnimationStyle;
    readonly enableAnimation: upstream0.AnimationStyle | null;
    readonly selectAnimation: upstream0.AnimationStyle | null;
    readonly avatarDrawerAnimation: upstream0.AnimationStyle | null;
    readonly deleteDrawerAnimation: upstream0.AnimationStyle | null;
}
export declare function _ChipAnimationStyleFactory(options?: {
    enableAnimation?: (Readonly<{
        "__flaxBound:package:flutter/src/animation/animation_style.dart::AnimationStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    selectAnimation?: (Readonly<{
        "__flaxBound:package:flutter/src/animation/animation_style.dart::AnimationStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    avatarDrawerAnimation?: (Readonly<{
        "__flaxBound:package:flutter/src/animation/animation_style.dart::AnimationStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    deleteDrawerAnimation?: (Readonly<{
        "__flaxBound:package:flutter/src/animation/animation_style.dart::AnimationStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
}): ChipAnimationStyle;
export interface _ChipAnimationStyleNative extends ChipAnimationStyle {
    readonly [_flaxDartTypeValue]: _ChipAnimationStyleNative;
    get enableAnimation(): upstream0.AnimationStyle | null;
    get selectAnimation(): upstream0.AnimationStyle | null;
    get avatarDrawerAnimation(): upstream0.AnimationStyle | null;
    get deleteDrawerAnimation(): upstream0.AnimationStyle | null;
}
export declare abstract class _ChipAnimationStyleNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ChipAnimationStyle>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ChipAnimationStyle;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:ChipAnimationStyle", readonly [], false];
    constructor(options?: {
        enableAnimation?: (Readonly<{
            "__flaxBound:package:flutter/src/animation/animation_style.dart::AnimationStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        selectAnimation?: (Readonly<{
            "__flaxBound:package:flutter/src/animation/animation_style.dart::AnimationStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        avatarDrawerAnimation?: (Readonly<{
            "__flaxBound:package:flutter/src/animation/animation_style.dart::AnimationStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        deleteDrawerAnimation?: (Readonly<{
            "__flaxBound:package:flutter/src/animation/animation_style.dart::AnimationStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    });
}
export declare namespace _ChipAnimationStyleFactory {
    function implement(args: [options?: {
        enableAnimation?: (Readonly<{
            "__flaxBound:package:flutter/src/animation/animation_style.dart::AnimationStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        selectAnimation?: (Readonly<{
            "__flaxBound:package:flutter/src/animation/animation_style.dart::AnimationStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        avatarDrawerAnimation?: (Readonly<{
            "__flaxBound:package:flutter/src/animation/animation_style.dart::AnimationStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        deleteDrawerAnimation?: (Readonly<{
            "__flaxBound:package:flutter/src/animation/animation_style.dart::AnimationStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }], implementation: {}): ChipAnimationStyle;
}
declare const _ChipAnimationStyleBinding: typeof _ChipAnimationStyleFactory & (new (options?: {
    enableAnimation?: (Readonly<{
        "__flaxBound:package:flutter/src/animation/animation_style.dart::AnimationStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    selectAnimation?: (Readonly<{
        "__flaxBound:package:flutter/src/animation/animation_style.dart::AnimationStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    avatarDrawerAnimation?: (Readonly<{
        "__flaxBound:package:flutter/src/animation/animation_style.dart::AnimationStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    deleteDrawerAnimation?: (Readonly<{
        "__flaxBound:package:flutter/src/animation/animation_style.dart::AnimationStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
}) => _ChipAnimationStyleNative);
export declare const ChipAnimationStyle: typeof _ChipAnimationStyleBinding & _FlaxInstanceType<ChipAnimationStyle> & _FlaxDartType<ChipAnimationStyle, readonly ["class", "flax.material/material#type:ChipAnimationStyle", readonly [], false]>;
export {};
