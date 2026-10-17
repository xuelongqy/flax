import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput, type DartMapInput, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/cupertino/_bindings/cupertino_CupertinoThemeData';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_Route';
import '@flax/flutter/widgets/_bindings/flutter_Route';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_NavigatorObserver';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorObserver';
import '@flax/flutter/services/_bindings/flutter_Color';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CupertinoApp extends WidgetDescription {
    readonly type: "flax.cupertino/cupertino#type:CupertinoApp";
}
export declare function _CupertinoAppFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    home?: Bindable<Widget | null> | undefined;
    theme?: Bindable<Readonly<{
        "__flaxBound:package:cupertino_ui/src/theme.dart::CupertinoThemeData": readonly [];
    }> | null> | undefined;
    routes?: Bindable<DartMapInput<string, ((p0: upstream2.BuildContext) => Widget), string, ((p0: upstream2.BuildContext) => Widget)>> | undefined;
    initialRoute?: Bindable<string | null> | undefined;
    onGenerateRoute?: Bindable<((settings: upstream4.RouteSettings) => Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> | null) | null> | undefined;
    onGenerateInitialRoutes?: Bindable<((initialRoute: string) => DartListInput<upstream3.Route<unknown | null>, Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }>>) | null> | undefined;
    onUnknownRoute?: Bindable<((settings: upstream4.RouteSettings) => Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> | null) | null> | undefined;
    navigatorObservers?: Bindable<DartListInput<upstream5.NavigatorObserver, Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::NavigatorObserver": readonly [];
    }>>> | undefined;
    builder?: Bindable<((context: upstream2.BuildContext, child: Widget | null) => Widget) | null> | undefined;
    title?: Bindable<string | null> | undefined;
    onGenerateTitle?: Bindable<((context: upstream2.BuildContext) => string) | null> | undefined;
    color?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    showPerformanceOverlay?: Bindable<boolean> | undefined;
    checkerboardRasterCacheImages?: Bindable<boolean> | undefined;
    checkerboardOffscreenLayers?: Bindable<boolean> | undefined;
    showSemanticsDebugger?: Bindable<boolean> | undefined;
    debugShowCheckedModeBanner?: Bindable<boolean> | undefined;
    restorationScopeId?: Bindable<string | null> | undefined;
    useInheritedMediaQuery?: Bindable<boolean> | undefined;
}): CupertinoApp;
export declare namespace _CupertinoAppFactory {
    function router(options?: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        theme?: Bindable<Readonly<{
            "__flaxBound:package:cupertino_ui/src/theme.dart::CupertinoThemeData": readonly [];
        }> | null> | undefined;
        builder?: Bindable<((context: upstream2.BuildContext, child: Widget | null) => Widget) | null> | undefined;
        title?: Bindable<string | null> | undefined;
        onGenerateTitle?: Bindable<((context: upstream2.BuildContext) => string) | null> | undefined;
        color?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        showPerformanceOverlay?: Bindable<boolean> | undefined;
        checkerboardRasterCacheImages?: Bindable<boolean> | undefined;
        checkerboardOffscreenLayers?: Bindable<boolean> | undefined;
        showSemanticsDebugger?: Bindable<boolean> | undefined;
        debugShowCheckedModeBanner?: Bindable<boolean> | undefined;
        restorationScopeId?: Bindable<string | null> | undefined;
        useInheritedMediaQuery?: Bindable<boolean> | undefined;
    }): CupertinoApp;
}
export declare const CupertinoApp: typeof _CupertinoAppFactory & _FlaxInstanceType<CupertinoApp> & _FlaxDartType<CupertinoApp, readonly ["class", "flax.cupertino/cupertino#type:CupertinoApp", readonly [], false]>;
