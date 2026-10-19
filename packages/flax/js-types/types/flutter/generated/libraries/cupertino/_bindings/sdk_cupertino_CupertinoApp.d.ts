import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_GlobalKey';
import '@flax/flutter/widgets/_bindings/sdk_widgets_GlobalKey';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import type * as upstream4 from '@flax/flutter/cupertino/_bindings/sdk_cupertino_CupertinoThemeData';
import '@flax/flutter/cupertino/_bindings/sdk_cupertino_CupertinoThemeData';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_Route';
import '@flax/flutter/widgets/_bindings/flutter_Route';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_NavigationNotification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_NavigationNotification';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/flutter_NavigatorObserver';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorObserver';
import type * as upstream10 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream11 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import type * as upstream12 from '@flax/flutter/widgets/_bindings/sdk_widgets_LocalizationsDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_LocalizationsDelegate';
import type * as upstream13 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import type * as upstream14 from '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutActivator';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutActivator';
import type * as upstream15 from '@flax/flutter/widgets/_bindings/sdk_widgets_Action';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Action';
import type * as upstream16 from '@flax/dart/core/_bindings/flutter_Type';
import '@flax/dart/core/_bindings/flutter_Type';
import type * as upstream17 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollBehavior';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollBehavior';
import type * as upstream18 from '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformationProvider';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformationProvider';
import type * as upstream19 from '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformationParser';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformationParser';
import type * as upstream20 from '@flax/flutter/widgets/_bindings/sdk_widgets_RouterDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouterDelegate';
import type * as upstream21 from '@flax/flutter/widgets/_bindings/sdk_widgets_BackButtonDispatcher';
import '@flax/flutter/widgets/_bindings/sdk_widgets_BackButtonDispatcher';
import type * as upstream22 from '@flax/flutter/widgets/_bindings/sdk_widgets_RouterConfig';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouterConfig';
import type * as upstream23 from '@flax/flutter/widgets/_bindings/sdk_widgets_HeroController';
import '@flax/flutter/widgets/_bindings/sdk_widgets_HeroController';
import type * as upstream24 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream25 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream27 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream28 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream29 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import type * as upstream31 from '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformation';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CupertinoApp extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/cupertino/app.dart::CupertinoApp": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __CupertinoApp: unique symbol;
    readonly [_flaxDartTypeValue]: CupertinoApp;
    readonly navigatorKey: upstream2.GlobalKey<upstream3.NavigatorState> | null;
    readonly home: Widget | null;
    readonly theme: upstream4.CupertinoThemeData | null;
    readonly routes: DartMap<string, ((context: upstream5.BuildContext) => Widget)> | null;
    readonly initialRoute: string | null;
    readonly onGenerateRoute: ((settings: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
    }>) => upstream6.Route<unknown | null> | null) | null;
    readonly onGenerateInitialRoutes: ((initialRoute: string) => DartList<upstream6.Route<unknown | null>>) | null;
    readonly onUnknownRoute: ((settings: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
    }>) => upstream6.Route<unknown | null> | null) | null;
    readonly onNavigationNotification: ((notification: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::NavigationNotification": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [];
    }>) => boolean) | null;
    readonly navigatorObservers: DartList<upstream9.NavigatorObserver> | null;
    readonly routeInformationProvider: upstream18.RouteInformationProvider | null;
    readonly routeInformationParser: upstream19.RouteInformationParser<{}> | null;
    readonly routerDelegate: upstream20.RouterDelegate<{}> | null;
    readonly backButtonDispatcher: upstream21.BackButtonDispatcher | null;
    readonly routerConfig: upstream22.RouterConfig<{}> | null;
    readonly builder: ((context: upstream5.BuildContext, child: Widget | null) => Widget) | null;
    readonly title: string | null;
    readonly onGenerateTitle: ((context: upstream5.BuildContext) => string) | null;
    readonly color: upstream10.Color | null;
    readonly locale: upstream11.Locale | null;
    readonly localizationsDelegates: DartIterable<upstream12.LocalizationsDelegate<unknown | null>> | null;
    readonly localeListResolutionCallback: ((locales: DartListInput<upstream11.Locale, Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }>> | null, supportedLocales: DartIterableInput<upstream11.Locale, Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }>>) => upstream11.Locale | null) | null;
    readonly localeResolutionCallback: ((locale: Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }> | null, supportedLocales: DartIterableInput<upstream11.Locale, Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }>>) => upstream11.Locale | null) | null;
    readonly supportedLocales: DartIterable<upstream11.Locale>;
    readonly showPerformanceOverlay: boolean;
    readonly checkerboardRasterCacheImages: boolean;
    readonly checkerboardOffscreenLayers: boolean;
    readonly showSemanticsDebugger: boolean;
    readonly debugShowCheckedModeBanner: boolean;
    readonly shortcuts: DartMap<upstream14.ShortcutActivator, upstream13.Intent> | null;
    readonly actions: DartMap<upstream16.Type, upstream15.Action<upstream13.Intent>> | null;
    readonly restorationScopeId: string | null;
    readonly scrollBehavior: upstream17.ScrollBehavior | null;
    readonly useInheritedMediaQuery: boolean;
    readonly key: upstream1.Key | null;
    createState(): upstream24.State<CupertinoApp>;
    createElement(): upstream25.StatefulElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream27.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream27.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream29.DiagnosticsTreeStyle | null | undefined;
    }): upstream28.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream28.DiagnosticsNode>;
}
export declare function _CupertinoAppFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    navigatorKey?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::GlobalKey": readonly [upstream3.NavigatorState];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }>) | null | undefined;
    home?: Widget | null | undefined;
    theme?: (Readonly<{
        "__flaxBound:package:flutter/src/cupertino/theme.dart::CupertinoThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/cupertino/theme.dart::NoDefaultCupertinoThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    routes?: DartMapInput<string, ((p0: upstream5.BuildContext) => Widget), string, ((p0: upstream5.BuildContext) => Widget)> | undefined;
    initialRoute?: string | null | undefined;
    onGenerateRoute?: ((settings: upstream7.RouteSettings) => (Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>) | null) | null | undefined;
    onGenerateInitialRoutes?: ((initialRoute: string) => DartListInput<upstream6.Route<unknown | null>, Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>>) | null | undefined;
    onUnknownRoute?: ((settings: upstream7.RouteSettings) => (Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>) | null) | null | undefined;
    onNavigationNotification?: ((notification: upstream8.NavigationNotification) => boolean) | null | undefined;
    navigatorObservers?: DartListInput<upstream9.NavigatorObserver, Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::NavigatorObserver": readonly [];
    }>> | undefined;
    builder?: ((context: upstream5.BuildContext, child: Widget | null) => Widget) | null | undefined;
    title?: string | null | undefined;
    onGenerateTitle?: ((context: upstream5.BuildContext) => string) | null | undefined;
    color?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    locale?: Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }> | null | undefined;
    localizationsDelegates?: DartIterableInput<upstream12.LocalizationsDelegate<unknown | null>, Readonly<{
        "__flaxBound:package:flutter/src/widgets/localizations.dart::LocalizationsDelegate": readonly [unknown | null];
    }>> | null | undefined;
    localeListResolutionCallback?: ((locales: DartList<upstream11.Locale> | null, supportedLocales: DartIterable<upstream11.Locale>) => Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }> | null) | null | undefined;
    localeResolutionCallback?: ((locale: upstream11.Locale | null, supportedLocales: DartIterable<upstream11.Locale>) => Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }> | null) | null | undefined;
    supportedLocales?: DartIterableInput<upstream11.Locale, Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }>> | undefined;
    showPerformanceOverlay?: boolean | undefined;
    checkerboardRasterCacheImages?: boolean | undefined;
    checkerboardOffscreenLayers?: boolean | undefined;
    showSemanticsDebugger?: boolean | undefined;
    debugShowCheckedModeBanner?: boolean | undefined;
    shortcuts?: DartMapInput<upstream14.ShortcutActivator, upstream13.Intent, Readonly<{
        "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator": readonly [];
    }>, Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>> | null | undefined;
    actions?: DartMapInput<upstream16.Type, upstream15.Action<upstream13.Intent>, Readonly<{
        "__flaxBound:dart:core::Type": readonly [];
    }>, Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Action": readonly [upstream13.Intent];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>> | null | undefined;
    restorationScopeId?: string | null | undefined;
    scrollBehavior?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_configuration.dart::ScrollBehavior": readonly [];
    }> | null | undefined;
    useInheritedMediaQuery?: boolean | undefined;
}): CupertinoApp;
export declare namespace _CupertinoAppFactory {
    function router(options?: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        routeInformationProvider?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformationProvider": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream31.RouteInformation];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>) | null | undefined;
        routeInformationParser?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformationParser": readonly [{}];
        }> | null | undefined;
        routerDelegate?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/router.dart::RouterDelegate": readonly [{}];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>) | null | undefined;
        backButtonDispatcher?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider": readonly [Promise<boolean>];
        }>) | null | undefined;
        routerConfig?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/router.dart::RouterConfig": readonly [{}];
        }> | null | undefined;
        theme?: (Readonly<{
            "__flaxBound:package:flutter/src/cupertino/theme.dart::CupertinoThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/cupertino/theme.dart::NoDefaultCupertinoThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        builder?: ((context: upstream5.BuildContext, child: Widget | null) => Widget) | null | undefined;
        title?: string | null | undefined;
        onGenerateTitle?: ((context: upstream5.BuildContext) => string) | null | undefined;
        onNavigationNotification?: ((notification: upstream8.NavigationNotification) => boolean) | null | undefined;
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        locale?: Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null | undefined;
        localizationsDelegates?: DartIterableInput<upstream12.LocalizationsDelegate<unknown | null>, Readonly<{
            "__flaxBound:package:flutter/src/widgets/localizations.dart::LocalizationsDelegate": readonly [unknown | null];
        }>> | null | undefined;
        localeListResolutionCallback?: ((locales: DartList<upstream11.Locale> | null, supportedLocales: DartIterable<upstream11.Locale>) => Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null) | null | undefined;
        localeResolutionCallback?: ((locale: upstream11.Locale | null, supportedLocales: DartIterable<upstream11.Locale>) => Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null) | null | undefined;
        supportedLocales?: DartIterableInput<upstream11.Locale, Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }>> | undefined;
        showPerformanceOverlay?: boolean | undefined;
        checkerboardRasterCacheImages?: boolean | undefined;
        checkerboardOffscreenLayers?: boolean | undefined;
        showSemanticsDebugger?: boolean | undefined;
        debugShowCheckedModeBanner?: boolean | undefined;
        shortcuts?: DartMapInput<upstream14.ShortcutActivator, upstream13.Intent, Readonly<{
            "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator": readonly [];
        }>, Readonly<{
            "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>> | null | undefined;
        actions?: DartMapInput<upstream16.Type, upstream15.Action<upstream13.Intent>, Readonly<{
            "__flaxBound:dart:core::Type": readonly [];
        }>, Readonly<{
            "__flaxBound:package:flutter/src/widgets/actions.dart::Action": readonly [upstream13.Intent];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>> | null | undefined;
        restorationScopeId?: string | null | undefined;
        scrollBehavior?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_configuration.dart::ScrollBehavior": readonly [];
        }> | null | undefined;
        useInheritedMediaQuery?: boolean | undefined;
    }): CupertinoApp;
}
export declare namespace _CupertinoAppFactory {
    function createCupertinoHeroController(): upstream23.HeroController;
}
export declare const CupertinoApp: typeof _CupertinoAppFactory & _FlaxInstanceType<CupertinoApp> & _FlaxDartType<CupertinoApp, readonly ["class", "flax.core/sdk_cupertino#type:CupertinoApp", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "navigatorKey" | "home" | "theme" | "routes" | "initialRoute" | "onGenerateRoute" | "onGenerateInitialRoutes" | "onUnknownRoute" | "onNavigationNotification" | "navigatorObservers" | "routeInformationProvider" | "routeInformationParser" | "routerDelegate" | "backButtonDispatcher" | "routerConfig" | "builder" | "title" | "onGenerateTitle" | "color" | "locale" | "localizationsDelegates" | "localeListResolutionCallback" | "localeResolutionCallback" | "supportedLocales" | "showPerformanceOverlay" | "checkerboardRasterCacheImages" | "checkerboardOffscreenLayers" | "showSemanticsDebugger" | "debugShowCheckedModeBanner" | "shortcuts" | "actions" | "restorationScopeId" | "scrollBehavior" | "useInheritedMediaQuery" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/cupertino/app.dart::CupertinoApp" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
