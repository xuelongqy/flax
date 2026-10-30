import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMapInput, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/widgets/_bindings/sdk_widgets_GlobalKey';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import '@flax/cupertino-ui/_bindings/cupertino_CupertinoThemeData';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_Route';
import '@flax/flutter/widgets/_bindings/flutter_Route';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_NavigationNotification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_NavigationNotification';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/flutter_NavigatorObserver';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorObserver';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream10 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/sdk_widgets_LocalizationsDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_LocalizationsDelegate';
import type * as upstream12 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import type * as upstream13 from '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutActivator';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutActivator';
import type * as upstream14 from '@flax/flutter/widgets/_bindings/sdk_widgets_Action';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Action';
import type * as upstream15 from '@flax/dart/core/_bindings/flutter_Type';
import '@flax/dart/core/_bindings/flutter_Type';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollBehavior';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformationProvider';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformationParser';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouterDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_BackButtonDispatcher';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouterConfig';
import type * as upstream22 from '@flax/flutter/widgets/_bindings/sdk_widgets_HeroController';
import '@flax/flutter/widgets/_bindings/sdk_widgets_HeroController';
import type * as upstream23 from '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformation';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CupertinoApp extends WidgetDescription, Omit<Readonly<{
    "__flaxBound:package:cupertino_ui/src/app.dart::CupertinoApp": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, 'type'> {
    readonly type: "flax.cupertino/cupertino#type:CupertinoApp";
}
export declare function _CupertinoAppFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    navigatorKey?: Bindable<(Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::GlobalKey": readonly [upstream2.NavigatorState];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }>) | null> | undefined;
    home?: Bindable<Widget | null> | undefined;
    theme?: Bindable<(Readonly<{
        "__flaxBound:package:cupertino_ui/src/theme.dart::CupertinoThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:cupertino_ui/src/theme.dart::NoDefaultCupertinoThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null> | undefined;
    routes?: Bindable<DartMapInput<string, ((p0: upstream4.BuildContext) => Widget), string, ((p0: upstream4.BuildContext) => Widget)>> | undefined;
    initialRoute?: Bindable<string | null> | undefined;
    onGenerateRoute?: Bindable<((settings: upstream6.RouteSettings) => (Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>) | null) | null> | undefined;
    onGenerateInitialRoutes?: Bindable<((initialRoute: string) => DartListInput<upstream5.Route<unknown | null>, Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>>) | null> | undefined;
    onUnknownRoute?: Bindable<((settings: upstream6.RouteSettings) => (Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>) | null) | null> | undefined;
    onNavigationNotification?: Bindable<((notification: upstream7.NavigationNotification) => boolean) | null> | undefined;
    navigatorObservers?: Bindable<DartListInput<upstream8.NavigatorObserver, Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::NavigatorObserver": readonly [];
    }>>> | undefined;
    builder?: Bindable<((context: upstream4.BuildContext, child: Widget | null) => Widget) | null> | undefined;
    title?: Bindable<string | null> | undefined;
    onGenerateTitle?: Bindable<((context: upstream4.BuildContext) => string) | null> | undefined;
    color?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    locale?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }> | null> | undefined;
    localizationsDelegates?: Bindable<DartIterableInput<upstream11.LocalizationsDelegate<unknown | null>, Readonly<{
        "__flaxBound:package:flutter/src/widgets/localizations.dart::LocalizationsDelegate": readonly [unknown | null];
    }>> | null> | undefined;
    localeListResolutionCallback?: Bindable<((locales: DartList<upstream10.Locale> | null, supportedLocales: DartIterable<upstream10.Locale>) => Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }> | null) | null> | undefined;
    localeResolutionCallback?: Bindable<((locale: upstream10.Locale | null, supportedLocales: DartIterable<upstream10.Locale>) => Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }> | null) | null> | undefined;
    supportedLocales?: Bindable<DartIterableInput<upstream10.Locale, Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }>>> | undefined;
    showPerformanceOverlay?: Bindable<boolean> | undefined;
    checkerboardRasterCacheImages?: Bindable<boolean> | undefined;
    checkerboardOffscreenLayers?: Bindable<boolean> | undefined;
    showSemanticsDebugger?: Bindable<boolean> | undefined;
    debugShowCheckedModeBanner?: Bindable<boolean> | undefined;
    shortcuts?: Bindable<DartMapInput<upstream13.ShortcutActivator, upstream12.Intent, Readonly<{
        "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator": readonly [];
    }>, Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>> | null> | undefined;
    actions?: Bindable<DartMapInput<upstream15.Type, upstream14.Action<upstream12.Intent>, Readonly<{
        "__flaxBound:dart:core::Type": readonly [];
    }>, Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Action": readonly [upstream12.Intent];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>> | null> | undefined;
    restorationScopeId?: Bindable<string | null> | undefined;
    scrollBehavior?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_configuration.dart::ScrollBehavior": readonly [];
    }> | null> | undefined;
    useInheritedMediaQuery?: Bindable<boolean> | undefined;
}): CupertinoApp;
export declare namespace _CupertinoAppFactory {
    const __flaxJsx: {
        readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof _CupertinoAppFactory>[0]>);
        readonly slot: null;
        readonly many: false;
    };
}
export declare namespace _CupertinoAppFactory {
    function router(options?: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        routeInformationProvider?: Bindable<(Readonly<{
            "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformationProvider": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream23.RouteInformation];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>) | null> | undefined;
        routeInformationParser?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformationParser": readonly [{}];
        }> | null> | undefined;
        routerDelegate?: Bindable<(Readonly<{
            "__flaxBound:package:flutter/src/widgets/router.dart::RouterDelegate": readonly [{}];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>) | null> | undefined;
        backButtonDispatcher?: Bindable<(Readonly<{
            "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider": readonly [Promise<boolean>];
        }>) | null> | undefined;
        routerConfig?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/widgets/router.dart::RouterConfig": readonly [{}];
        }> | null> | undefined;
        theme?: Bindable<(Readonly<{
            "__flaxBound:package:cupertino_ui/src/theme.dart::CupertinoThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:cupertino_ui/src/theme.dart::NoDefaultCupertinoThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null> | undefined;
        builder?: Bindable<((context: upstream4.BuildContext, child: Widget | null) => Widget) | null> | undefined;
        title?: Bindable<string | null> | undefined;
        onGenerateTitle?: Bindable<((context: upstream4.BuildContext) => string) | null> | undefined;
        onNavigationNotification?: Bindable<((notification: upstream7.NavigationNotification) => boolean) | null> | undefined;
        color?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        locale?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null> | undefined;
        localizationsDelegates?: Bindable<DartIterableInput<upstream11.LocalizationsDelegate<unknown | null>, Readonly<{
            "__flaxBound:package:flutter/src/widgets/localizations.dart::LocalizationsDelegate": readonly [unknown | null];
        }>> | null> | undefined;
        localeListResolutionCallback?: Bindable<((locales: DartList<upstream10.Locale> | null, supportedLocales: DartIterable<upstream10.Locale>) => Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null) | null> | undefined;
        localeResolutionCallback?: Bindable<((locale: upstream10.Locale | null, supportedLocales: DartIterable<upstream10.Locale>) => Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null) | null> | undefined;
        supportedLocales?: Bindable<DartIterableInput<upstream10.Locale, Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }>>> | undefined;
        showPerformanceOverlay?: Bindable<boolean> | undefined;
        checkerboardRasterCacheImages?: Bindable<boolean> | undefined;
        checkerboardOffscreenLayers?: Bindable<boolean> | undefined;
        showSemanticsDebugger?: Bindable<boolean> | undefined;
        debugShowCheckedModeBanner?: Bindable<boolean> | undefined;
        shortcuts?: Bindable<DartMapInput<upstream13.ShortcutActivator, upstream12.Intent, Readonly<{
            "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator": readonly [];
        }>, Readonly<{
            "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>> | null> | undefined;
        actions?: Bindable<DartMapInput<upstream15.Type, upstream14.Action<upstream12.Intent>, Readonly<{
            "__flaxBound:dart:core::Type": readonly [];
        }>, Readonly<{
            "__flaxBound:package:flutter/src/widgets/actions.dart::Action": readonly [upstream12.Intent];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>> | null> | undefined;
        restorationScopeId?: Bindable<string | null> | undefined;
        scrollBehavior?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_configuration.dart::ScrollBehavior": readonly [];
        }> | null> | undefined;
        useInheritedMediaQuery?: Bindable<boolean> | undefined;
    }): CupertinoApp;
    namespace router {
        const __flaxJsx: {
            readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof router>[0]>);
            readonly slot: null;
            readonly many: false;
        };
    }
}
export declare namespace _CupertinoAppFactory {
    function createCupertinoHeroController(): upstream22.HeroController;
}
export declare const CupertinoApp: typeof _CupertinoAppFactory & _FlaxInstanceType<CupertinoApp> & _FlaxDartType<CupertinoApp, readonly ["class", "flax.cupertino/cupertino#type:CupertinoApp", readonly [], false]>;
