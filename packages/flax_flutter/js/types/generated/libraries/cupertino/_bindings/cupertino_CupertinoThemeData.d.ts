import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CupertinoThemeData extends Readonly<{
    "__flaxBound:package:cupertino_ui/src/theme.dart::CupertinoThemeData": readonly [];
}>, Readonly<{
    "__flaxBound:package:cupertino_ui/src/theme.dart::NoDefaultCupertinoThemeData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __CupertinoThemeData: unique symbol;
    readonly primaryColor: upstream0.Color;
    readonly primaryContrastingColor: upstream0.Color;
    readonly barBackgroundColor: upstream0.Color;
    readonly scaffoldBackgroundColor: upstream0.Color;
    readonly selectionHandleColor: upstream0.Color;
    readonly applyThemeToAll: boolean;
    resolveFrom(context: upstream1.BuildContext): CupertinoThemeData;
    copyWith(options?: {
        applyThemeToAll?: boolean | null | undefined;
        barBackgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        primaryColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        primaryContrastingColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        scaffoldBackgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        selectionHandleColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
    }): CupertinoThemeData;
    toStringShort(): string;
}
export declare function _CupertinoThemeDataFactory(options?: {
    primaryColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    primaryContrastingColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    barBackgroundColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    scaffoldBackgroundColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    selectionHandleColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    applyThemeToAll?: boolean | null | undefined;
}): CupertinoThemeData;
export declare const CupertinoThemeData: typeof _CupertinoThemeDataFactory & _FlaxInstanceType<CupertinoThemeData> & _FlaxDartType<CupertinoThemeData, readonly ["class", "flax.cupertino/cupertino#type:CupertinoThemeData", readonly [], false]>;
