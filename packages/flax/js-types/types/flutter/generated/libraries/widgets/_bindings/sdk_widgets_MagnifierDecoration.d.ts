import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/sdk_painting_BoxShadow';
import '@flax/flutter/painting/_bindings/sdk_painting_BoxShadow';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface MagnifierDecoration extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/magnifier.dart::MagnifierDecoration": readonly [];
}> {
    readonly __MagnifierDecoration: unique symbol;
    readonly [_flaxDartTypeValue]: MagnifierDecoration;
    readonly opacity: number;
    readonly shadows: DartList<upstream0.BoxShadow> | null;
    readonly shape: upstream1.ShapeBorder;
}
export declare function _MagnifierDecorationFactory(options?: {
    opacity?: number | undefined;
    shadows?: DartListInput<upstream0.BoxShadow, Readonly<{
        "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::Shadow": readonly [];
    }>> | null | undefined;
    shape?: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | undefined;
}): MagnifierDecoration;
export interface _MagnifierDecorationNative extends MagnifierDecoration {
    readonly [_flaxDartTypeValue]: _MagnifierDecorationNative;
    get opacity(): number;
    get shadows(): DartList<upstream0.BoxShadow> | null;
    get shape(): upstream1.ShapeBorder;
}
export declare abstract class _MagnifierDecorationNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MagnifierDecoration>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: MagnifierDecoration;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:MagnifierDecoration", readonly [], false];
    constructor(options?: {
        opacity?: number | undefined;
        shadows?: DartListInput<upstream0.BoxShadow, Readonly<{
            "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::Shadow": readonly [];
        }>> | null | undefined;
        shape?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | undefined;
    });
}
export declare namespace _MagnifierDecorationFactory {
    function implement(args: [options?: {
        opacity?: number | undefined;
        shadows?: DartListInput<upstream0.BoxShadow, Readonly<{
            "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::Shadow": readonly [];
        }>> | null | undefined;
        shape?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | undefined;
    }], implementation: {}): MagnifierDecoration;
}
declare const _MagnifierDecorationBinding: typeof _MagnifierDecorationFactory & (new (options?: {
    opacity?: number | undefined;
    shadows?: DartListInput<upstream0.BoxShadow, Readonly<{
        "__flaxBound:package:flutter/src/painting/box_shadow.dart::BoxShadow": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::Shadow": readonly [];
    }>> | null | undefined;
    shape?: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | undefined;
}) => _MagnifierDecorationNative);
export declare const MagnifierDecoration: typeof _MagnifierDecorationBinding & _FlaxInstanceType<MagnifierDecoration> & _FlaxDartType<MagnifierDecoration, readonly ["class", "flax.core/sdk_widgets#type:MagnifierDecoration", readonly [], false]>;
export {};
