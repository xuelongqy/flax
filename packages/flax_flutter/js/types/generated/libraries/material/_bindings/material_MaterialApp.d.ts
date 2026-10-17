import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput, type DartMapInput, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_Route';
import '@flax/flutter/widgets/_bindings/flutter_Route';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_NavigatorObserver';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorObserver';
import '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/material/_bindings/material_ThemeData';
import type * as upstream7 from '@flax/flutter/material/_bindings/material_ThemeMode';
import '@flax/flutter/material/_bindings/material_ThemeMode';
import '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/flutter/widgets/_bindings/flutter_Curve';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface MaterialApp extends WidgetDescription {
    readonly type: "flax.material/material#type:MaterialApp";
}
export declare function _MaterialAppFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    home?: Bindable<Widget | null> | undefined;
    routes?: Bindable<DartMapInput<string, ((context: upstream1.BuildContext) => Widget), string, ((context: upstream1.BuildContext) => Widget)>> | undefined;
    initialRoute?: Bindable<string | null> | undefined;
    onGenerateRoute?: Bindable<((settings: upstream3.RouteSettings) => Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> | null) | null> | undefined;
    onGenerateInitialRoutes?: Bindable<((initialRoute: string) => DartListInput<upstream2.Route<unknown | null>, Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }>>) | null> | undefined;
    onUnknownRoute?: Bindable<((settings: upstream3.RouteSettings) => Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> | null) | null> | undefined;
    navigatorObservers?: Bindable<DartListInput<upstream4.NavigatorObserver, Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::NavigatorObserver": readonly [];
    }>>> | undefined;
    builder?: Bindable<((context: upstream1.BuildContext, child: Widget | null) => Widget) | null> | undefined;
    title?: Bindable<string | null> | undefined;
    onGenerateTitle?: Bindable<((context: upstream1.BuildContext) => string) | null> | undefined;
    color?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    theme?: Bindable<Readonly<{
        "__flaxBound:package:material_ui/src/theme_data.dart::ThemeData": readonly [];
    }> | null> | undefined;
    darkTheme?: Bindable<Readonly<{
        "__flaxBound:package:material_ui/src/theme_data.dart::ThemeData": readonly [];
    }> | null> | undefined;
    highContrastTheme?: Bindable<Readonly<{
        "__flaxBound:package:material_ui/src/theme_data.dart::ThemeData": readonly [];
    }> | null> | undefined;
    highContrastDarkTheme?: Bindable<Readonly<{
        "__flaxBound:package:material_ui/src/theme_data.dart::ThemeData": readonly [];
    }> | null> | undefined;
    themeMode?: Bindable<upstream7.ThemeMode | null> | undefined;
    themeAnimationDuration?: Bindable<Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }>> | undefined;
    themeAnimationCurve?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
    }>> | undefined;
    debugShowMaterialGrid?: Bindable<boolean> | undefined;
    showPerformanceOverlay?: Bindable<boolean> | undefined;
    checkerboardRasterCacheImages?: Bindable<boolean> | undefined;
    checkerboardOffscreenLayers?: Bindable<boolean> | undefined;
    showSemanticsDebugger?: Bindable<boolean> | undefined;
    debugShowCheckedModeBanner?: Bindable<boolean> | undefined;
    restorationScopeId?: Bindable<string | null> | undefined;
    useInheritedMediaQuery?: Bindable<boolean> | undefined;
}): MaterialApp;
export declare namespace _MaterialAppFactory {
    function router(options?: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        builder?: Bindable<((context: upstream1.BuildContext, child: Widget | null) => Widget) | null> | undefined;
        title?: Bindable<string | null> | undefined;
        onGenerateTitle?: Bindable<((context: upstream1.BuildContext) => string) | null> | undefined;
        color?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        theme?: Bindable<Readonly<{
            "__flaxBound:package:material_ui/src/theme_data.dart::ThemeData": readonly [];
        }> | null> | undefined;
        darkTheme?: Bindable<Readonly<{
            "__flaxBound:package:material_ui/src/theme_data.dart::ThemeData": readonly [];
        }> | null> | undefined;
        highContrastTheme?: Bindable<Readonly<{
            "__flaxBound:package:material_ui/src/theme_data.dart::ThemeData": readonly [];
        }> | null> | undefined;
        highContrastDarkTheme?: Bindable<Readonly<{
            "__flaxBound:package:material_ui/src/theme_data.dart::ThemeData": readonly [];
        }> | null> | undefined;
        themeMode?: Bindable<upstream7.ThemeMode | null> | undefined;
        themeAnimationDuration?: Bindable<Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }>> | undefined;
        themeAnimationCurve?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
        }>> | undefined;
        debugShowMaterialGrid?: Bindable<boolean> | undefined;
        showPerformanceOverlay?: Bindable<boolean> | undefined;
        checkerboardRasterCacheImages?: Bindable<boolean> | undefined;
        checkerboardOffscreenLayers?: Bindable<boolean> | undefined;
        showSemanticsDebugger?: Bindable<boolean> | undefined;
        debugShowCheckedModeBanner?: Bindable<boolean> | undefined;
        restorationScopeId?: Bindable<string | null> | undefined;
        useInheritedMediaQuery?: Bindable<boolean> | undefined;
    }): MaterialApp;
}
export declare const MaterialApp: typeof _MaterialAppFactory & _FlaxInstanceType<MaterialApp> & _FlaxDartType<MaterialApp, readonly ["class", "flax.material/material#type:MaterialApp", readonly [], false]>;
