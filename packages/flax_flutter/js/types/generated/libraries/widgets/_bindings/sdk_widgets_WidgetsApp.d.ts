import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type Widget } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_GlobalKey';
import '@flax/flutter/widgets/_bindings/sdk_widgets_GlobalKey';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_Route';
import '@flax/flutter/widgets/_bindings/flutter_Route';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_NavigationNotification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_NavigationNotification';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_NavigatorObserver';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorObserver';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_PageRoute';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PageRoute';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream10 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream11 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream12 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import type * as upstream13 from '@flax/flutter/widgets/_bindings/sdk_widgets_LocalizationsDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_LocalizationsDelegate';
import type * as upstream14 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream15 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import type * as upstream16 from '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutActivator';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutActivator';
import type * as upstream17 from '@flax/flutter/widgets/_bindings/sdk_widgets_Action';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Action';
import type * as upstream18 from '@flax/dart/core/_bindings/flutter_Type';
import '@flax/dart/core/_bindings/flutter_Type';
import type * as upstream19 from '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformationProvider';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformationProvider';
import type * as upstream20 from '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformationParser';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformationParser';
import type * as upstream21 from '@flax/flutter/widgets/_bindings/sdk_widgets_RouterDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouterDelegate';
import type * as upstream22 from '@flax/flutter/widgets/_bindings/sdk_widgets_RouterConfig';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouterConfig';
import type * as upstream23 from '@flax/flutter/widgets/_bindings/sdk_widgets_BackButtonDispatcher';
import '@flax/flutter/widgets/_bindings/sdk_widgets_BackButtonDispatcher';
import type * as upstream24 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream26 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream27 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream28 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import type * as upstream30 from '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformation';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface WidgetsApp extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/app.dart::WidgetsApp": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __WidgetsApp: unique symbol;
    readonly [_flaxDartTypeValue]: WidgetsApp;
    readonly navigatorKey: upstream2.GlobalKey<upstream3.NavigatorState> | null;
    readonly onGenerateRoute: ((settings: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
    }>) => upstream4.Route<unknown | null> | null) | null;
    readonly onGenerateInitialRoutes: ((initialRoute: string) => DartList<upstream4.Route<unknown | null>>) | null;
    readonly pageRouteBuilder: _FlaxDartCallable<(<T extends unknown | null>(settings: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
    }>, builder: ((context: upstream9.BuildContext) => Widget)) => upstream8.PageRoute<_FlaxDartOutput<T>>), _FlaxSignature0> | null;
    readonly routeInformationParser: upstream20.RouteInformationParser<{}> | null;
    readonly routerDelegate: upstream21.RouterDelegate<{}> | null;
    readonly backButtonDispatcher: upstream23.BackButtonDispatcher | null;
    readonly routeInformationProvider: upstream19.RouteInformationProvider | null;
    readonly routerConfig: upstream22.RouterConfig<{}> | null;
    readonly home: Widget | null;
    readonly routes: DartMap<string, ((context: upstream9.BuildContext) => Widget)> | null;
    readonly onUnknownRoute: ((settings: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
    }>) => upstream4.Route<unknown | null> | null) | null;
    readonly onNavigationNotification: ((notification: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::NavigationNotification": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [];
    }>) => boolean) | null;
    readonly initialRoute: string | null;
    readonly navigatorObservers: DartList<upstream7.NavigatorObserver> | null;
    readonly builder: ((context: upstream9.BuildContext, child: Widget | null) => Widget) | null;
    readonly title: string | null;
    readonly onGenerateTitle: ((context: upstream9.BuildContext) => string) | null;
    readonly textStyle: upstream10.TextStyle | null;
    readonly color: upstream11.Color;
    readonly locale: upstream12.Locale | null;
    readonly localizationsDelegates: DartIterable<upstream13.LocalizationsDelegate<unknown | null>> | null;
    readonly localeListResolutionCallback: ((locales: DartListInput<upstream12.Locale, Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }>> | null, supportedLocales: DartIterableInput<upstream12.Locale, Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }>>) => upstream12.Locale | null) | null;
    readonly localeResolutionCallback: ((locale: Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }> | null, supportedLocales: DartIterableInput<upstream12.Locale, Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }>>) => upstream12.Locale | null) | null;
    readonly supportedLocales: DartIterable<upstream12.Locale>;
    readonly showPerformanceOverlay: boolean;
    readonly showSemanticsDebugger: boolean;
    readonly debugShowWidgetInspector: boolean;
    readonly exitWidgetSelectionButtonBuilder: ((context: upstream9.BuildContext, options: {
        key: Readonly<{
            "__flaxBound:package:flutter/src/widgets/framework.dart::GlobalKey": readonly [upstream14.State<upstream0.StatefulWidget>];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }>;
        onPressed: (() => void);
        semanticsLabel: string;
    }) => Widget) | null;
    readonly moveExitWidgetSelectionButtonBuilder: ((context: upstream9.BuildContext, options: {
        onPressed: (() => void);
        semanticsLabel: string;
        usesDefaultAlignment?: boolean | undefined;
    }) => Widget) | null;
    readonly tapBehaviorButtonBuilder: ((context: upstream9.BuildContext, options: {
        onPressed: (() => void);
        selectionOnTapEnabled: boolean;
        semanticsLabel: string;
    }) => Widget) | null;
    readonly debugShowCheckedModeBanner: boolean;
    readonly shortcuts: DartMap<upstream16.ShortcutActivator, upstream15.Intent> | null;
    readonly actions: DartMap<upstream18.Type, upstream17.Action<upstream15.Intent>> | null;
    readonly restorationScopeId: string | null;
    readonly useInheritedMediaQuery: boolean;
    readonly key: upstream1.Key | null;
    createState(): upstream14.State<WidgetsApp>;
    createElement(): upstream24.StatefulElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream26.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream26.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream28.DiagnosticsTreeStyle | null | undefined;
    }): upstream27.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream27.DiagnosticsNode>;
}
export declare function _WidgetsAppFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    navigatorKey?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::GlobalKey": readonly [upstream3.NavigatorState];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }>) | null | undefined;
    onGenerateRoute?: ((settings: upstream5.RouteSettings) => (Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>) | null) | null | undefined;
    onGenerateInitialRoutes?: ((initialRoute: string) => DartListInput<upstream4.Route<unknown | null>, Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>>) | null | undefined;
    onUnknownRoute?: ((settings: upstream5.RouteSettings) => (Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }>) | null) | null | undefined;
    onNavigationNotification?: ((notification: upstream6.NavigationNotification) => boolean) | null | undefined;
    navigatorObservers?: DartListInput<upstream7.NavigatorObserver, Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::NavigatorObserver": readonly [];
    }>> | undefined;
    initialRoute?: string | null | undefined;
    pageRouteBuilder?: (<T extends unknown | null>(settings: upstream5.RouteSettings, builder: ((context: upstream9.BuildContext) => Widget)) => Readonly<{
        "__flaxBound:package:flutter/src/widgets/pages.dart::PageRoute": readonly [_FlaxDartOutput<T>];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::ModalRoute": readonly [_FlaxDartOutput<T>];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::TransitionRoute": readonly [_FlaxDartOutput<T>];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::OverlayRoute": readonly [_FlaxDartOutput<T>];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [_FlaxDartOutput<T>];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::PredictiveBackRoute": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/routes.dart::LocalHistoryRoute": readonly [_FlaxDartOutput<T>];
    }>) | null | undefined;
    home?: Widget | null | undefined;
    routes?: DartMapInput<string, ((context: upstream9.BuildContext) => Widget), string, ((context: upstream9.BuildContext) => Widget)> | undefined;
    builder?: ((context: upstream9.BuildContext, child: Widget | null) => Widget) | null | undefined;
    title?: string | null | undefined;
    onGenerateTitle?: ((context: upstream9.BuildContext) => string) | null | undefined;
    textStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    color: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }>;
    locale?: Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }> | null | undefined;
    localizationsDelegates?: DartIterableInput<upstream13.LocalizationsDelegate<unknown | null>, Readonly<{
        "__flaxBound:package:flutter/src/widgets/localizations.dart::LocalizationsDelegate": readonly [unknown | null];
    }>> | null | undefined;
    localeListResolutionCallback?: ((locales: DartList<upstream12.Locale> | null, supportedLocales: DartIterable<upstream12.Locale>) => Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }> | null) | null | undefined;
    localeResolutionCallback?: ((locale: upstream12.Locale | null, supportedLocales: DartIterable<upstream12.Locale>) => Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }> | null) | null | undefined;
    supportedLocales?: DartIterableInput<upstream12.Locale, Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }>> | undefined;
    showPerformanceOverlay?: boolean | undefined;
    showSemanticsDebugger?: boolean | undefined;
    debugShowWidgetInspector?: boolean | undefined;
    debugShowCheckedModeBanner?: boolean | undefined;
    exitWidgetSelectionButtonBuilder?: ((context: upstream9.BuildContext, options: {
        key: upstream2.GlobalKey<upstream14.State<upstream0.StatefulWidget>>;
        onPressed: (() => void);
        semanticsLabel: string;
    }) => Widget) | null | undefined;
    moveExitWidgetSelectionButtonBuilder?: ((context: upstream9.BuildContext, options: {
        onPressed: (() => void);
        semanticsLabel: string;
        usesDefaultAlignment?: boolean | undefined;
    }) => Widget) | null | undefined;
    tapBehaviorButtonBuilder?: ((context: upstream9.BuildContext, options: {
        onPressed: (() => void);
        selectionOnTapEnabled: boolean;
        semanticsLabel: string;
    }) => Widget) | null | undefined;
    shortcuts?: DartMapInput<upstream16.ShortcutActivator, upstream15.Intent, Readonly<{
        "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator": readonly [];
    }>, Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>> | null | undefined;
    actions?: DartMapInput<upstream18.Type, upstream17.Action<upstream15.Intent>, Readonly<{
        "__flaxBound:dart:core::Type": readonly [];
    }>, Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Action": readonly [upstream15.Intent];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>> | null | undefined;
    restorationScopeId?: string | null | undefined;
    useInheritedMediaQuery?: boolean | undefined;
}): WidgetsApp;
export declare namespace _WidgetsAppFactory {
    const __flaxJsx: {
        readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof _WidgetsAppFactory>[0]>);
        readonly slot: null;
        readonly many: false;
    };
}
export declare namespace _WidgetsAppFactory {
    function router(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        routeInformationProvider?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformationProvider": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream30.RouteInformation];
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
        routerConfig?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/router.dart::RouterConfig": readonly [{}];
        }> | null | undefined;
        backButtonDispatcher?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/router.dart::BackButtonDispatcher": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/router.dart::_CallbackHookProvider": readonly [Promise<boolean>];
        }>) | null | undefined;
        builder?: ((context: upstream9.BuildContext, child: Widget | null) => Widget) | null | undefined;
        title?: string | null | undefined;
        onGenerateTitle?: ((context: upstream9.BuildContext) => string) | null | undefined;
        onNavigationNotification?: ((notification: upstream6.NavigationNotification) => boolean) | null | undefined;
        textStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        color: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }>;
        locale?: Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null | undefined;
        localizationsDelegates?: DartIterableInput<upstream13.LocalizationsDelegate<unknown | null>, Readonly<{
            "__flaxBound:package:flutter/src/widgets/localizations.dart::LocalizationsDelegate": readonly [unknown | null];
        }>> | null | undefined;
        localeListResolutionCallback?: ((locales: DartList<upstream12.Locale> | null, supportedLocales: DartIterable<upstream12.Locale>) => Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null) | null | undefined;
        localeResolutionCallback?: ((locale: upstream12.Locale | null, supportedLocales: DartIterable<upstream12.Locale>) => Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null) | null | undefined;
        supportedLocales?: DartIterableInput<upstream12.Locale, Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }>> | undefined;
        showPerformanceOverlay?: boolean | undefined;
        showSemanticsDebugger?: boolean | undefined;
        debugShowWidgetInspector?: boolean | undefined;
        debugShowCheckedModeBanner?: boolean | undefined;
        exitWidgetSelectionButtonBuilder?: ((context: upstream9.BuildContext, options: {
            key: upstream2.GlobalKey<upstream14.State<upstream0.StatefulWidget>>;
            onPressed: (() => void);
            semanticsLabel: string;
        }) => Widget) | null | undefined;
        moveExitWidgetSelectionButtonBuilder?: ((context: upstream9.BuildContext, options: {
            onPressed: (() => void);
            semanticsLabel: string;
            usesDefaultAlignment?: boolean | undefined;
        }) => Widget) | null | undefined;
        tapBehaviorButtonBuilder?: ((context: upstream9.BuildContext, options: {
            onPressed: (() => void);
            selectionOnTapEnabled: boolean;
            semanticsLabel: string;
        }) => Widget) | null | undefined;
        shortcuts?: DartMapInput<upstream16.ShortcutActivator, upstream15.Intent, Readonly<{
            "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator": readonly [];
        }>, Readonly<{
            "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>> | null | undefined;
        actions?: DartMapInput<upstream18.Type, upstream17.Action<upstream15.Intent>, Readonly<{
            "__flaxBound:dart:core::Type": readonly [];
        }>, Readonly<{
            "__flaxBound:package:flutter/src/widgets/actions.dart::Action": readonly [upstream15.Intent];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>> | null | undefined;
        restorationScopeId?: string | null | undefined;
        useInheritedMediaQuery?: boolean | undefined;
    }): WidgetsApp;
    namespace router {
        const __flaxJsx: {
            readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof router>[0]>);
            readonly slot: null;
            readonly many: false;
        };
    }
}
export declare namespace _WidgetsAppFactory {
    function setShowPerformanceOverlayOverride(value: boolean): void;
}
export declare namespace _WidgetsAppFactory {
    function setDebugShowWidgetInspectorOverride(value: boolean): void;
}
export declare namespace _WidgetsAppFactory {
    function setDebugAllowBannerOverride(value: boolean): void;
}
export declare namespace _WidgetsAppFactory {
    function setDefaultActions(value: DartMapInput<upstream18.Type, upstream17.Action<upstream15.Intent>, Readonly<{
        "__flaxBound:dart:core::Type": readonly [];
    }>, Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Action": readonly [upstream15.Intent];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>>): void;
}
export declare namespace _WidgetsAppFactory {
    const showPerformanceOverlayOverride: boolean;
}
export declare namespace _WidgetsAppFactory {
    const debugShowWidgetInspectorOverride: boolean;
}
export declare namespace _WidgetsAppFactory {
    const debugAllowBannerOverride: boolean;
}
export declare namespace _WidgetsAppFactory {
    const defaultShortcuts: DartMap<upstream16.ShortcutActivator, upstream15.Intent>;
}
export declare namespace _WidgetsAppFactory {
    const defaultActions: DartMap<upstream18.Type, upstream17.Action<upstream15.Intent>>;
}
export declare const WidgetsApp: typeof _WidgetsAppFactory & _FlaxInstanceType<WidgetsApp> & _FlaxDartType<WidgetsApp, readonly ["class", "flax.core/sdk_widgets#type:WidgetsApp", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "navigatorKey" | "onGenerateRoute" | "onGenerateInitialRoutes" | "pageRouteBuilder" | "routeInformationParser" | "routerDelegate" | "backButtonDispatcher" | "routeInformationProvider" | "routerConfig" | "home" | "routes" | "onUnknownRoute" | "onNavigationNotification" | "initialRoute" | "navigatorObservers" | "builder" | "title" | "onGenerateTitle" | "textStyle" | "color" | "locale" | "localizationsDelegates" | "localeListResolutionCallback" | "localeResolutionCallback" | "supportedLocales" | "showPerformanceOverlay" | "showSemanticsDebugger" | "debugShowWidgetInspector" | "exitWidgetSelectionButtonBuilder" | "moveExitWidgetSelectionButtonBuilder" | "tapBehaviorButtonBuilder" | "debugShowCheckedModeBanner" | "shortcuts" | "actions" | "restorationScopeId" | "useInheritedMediaQuery" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/app.dart::WidgetsApp" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (settings: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
    }>, builder: ((context: upstream9.BuildContext) => Widget)) => upstream8.PageRoute<_Selected0> : never : never;
}
export {};
