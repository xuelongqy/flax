import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream2 from '@flax/cupertino-ui/_bindings/cupertino_CupertinoTextThemeData';
import '@flax/cupertino-ui/_bindings/cupertino_CupertinoTextThemeData';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface NoDefaultCupertinoThemeData extends Readonly<{
    "__flaxBound:package:cupertino_ui/src/theme.dart::NoDefaultCupertinoThemeData": readonly [];
}> {
    readonly __NoDefaultCupertinoThemeData: unique symbol;
    readonly [_flaxDartTypeValue]: NoDefaultCupertinoThemeData;
    readonly brightness: upstream0.Brightness | null;
    readonly primaryColor: upstream1.Color | null;
    readonly primaryContrastingColor: upstream1.Color | null;
    readonly textTheme: upstream2.CupertinoTextThemeData | null;
    readonly barBackgroundColor: upstream1.Color | null;
    readonly scaffoldBackgroundColor: upstream1.Color | null;
    readonly selectionHandleColor: upstream1.Color | null;
    readonly applyThemeToAll: boolean | null;
    noDefault(): NoDefaultCupertinoThemeData;
    resolveFrom(context: upstream3.BuildContext): NoDefaultCupertinoThemeData;
    copyWith(options?: {
        applyThemeToAll?: boolean | null | undefined;
        barBackgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        brightness?: upstream0.Brightness | null | undefined;
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
        textTheme?: (Readonly<{
            "__flaxBound:package:cupertino_ui/src/text_theme.dart::CupertinoTextThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }): NoDefaultCupertinoThemeData;
}
export declare function _NoDefaultCupertinoThemeDataFactory(options?: {
    brightness?: upstream0.Brightness | null | undefined;
    primaryColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    primaryContrastingColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    textTheme?: (Readonly<{
        "__flaxBound:package:cupertino_ui/src/text_theme.dart::CupertinoTextThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
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
}): NoDefaultCupertinoThemeData;
export declare const NoDefaultCupertinoThemeData: typeof _NoDefaultCupertinoThemeDataFactory & _FlaxInstanceType<NoDefaultCupertinoThemeData> & _FlaxDartType<NoDefaultCupertinoThemeData, readonly ["class", "flax.cupertino/cupertino#type:NoDefaultCupertinoThemeData", readonly [], false]>;
