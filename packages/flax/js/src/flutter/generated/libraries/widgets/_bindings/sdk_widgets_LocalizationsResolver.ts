// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetsBindingObserver';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetsBindingObserver';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_LocalizationsDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_LocalizationsDelegate';
import type * as upstream5 from '@flax/flutter/services/_bindings/sdk_services_PredictiveBackEvent';
import '@flax/flutter/services/_bindings/sdk_services_PredictiveBackEvent';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformation';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouteInformation';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_AppLifecycleState';
import '@flax/dart/ui/_bindings/sdk_dart_ui_AppLifecycleState';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_ViewFocusEvent';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ViewFocusEvent';
import type * as upstream9 from '@flax/dart/ui/_bindings/sdk_dart_ui_AppExitResponse';
import '@flax/dart/ui/_bindings/sdk_dart_ui_AppExitResponse';
import { _flaxMemberParameters2, _flaxMemberParameters21, _flaxMemberParameters22, _flaxMemberParameters23, _flaxMemberParameters24, _flaxMemberParameters25, _flaxMemberParameters26, _flaxMemberParameters234, _flaxMemberParameters235, _flaxMemberParameters12 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface LocalizationsResolver extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Omit<upstream2.WidgetsBindingObserver, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier | keyof upstream1.Listenable>, Readonly<{ "__flaxBound:package:flutter/src/widgets/localizations.dart::LocalizationsResolver": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [] }> { readonly __LocalizationsResolver: unique symbol;
readonly [_flaxDartTypeValue]: LocalizationsResolver;

}
defineObject("flax.core/sdk_widgets#type:LocalizationsResolver", ["hasListeners","locale","localizationsDelegates","localeListResolutionCallback","localeResolutionCallback","supportedLocales"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:LocalizationsResolver", "object", {"didPopRoute":_flaxMemberParameters2,"handleStartBackGesture":_flaxMemberParameters21,"handleUpdateBackGestureProgress":_flaxMemberParameters21,"handleCommitBackGesture":_flaxMemberParameters2,"handleCancelBackGesture":_flaxMemberParameters2,"handleStatusBarTap":_flaxMemberParameters2,"didPushRoute":_flaxMemberParameters22,"didPushRouteInformation":_flaxMemberParameters23,"didChangeMetrics":_flaxMemberParameters2,"didChangeTextScaleFactor":_flaxMemberParameters2,"didChangePlatformBrightness":_flaxMemberParameters2,"didChangeLocales":_flaxMemberParameters24,"didChangeAppLifecycleState":_flaxMemberParameters25,"didChangeViewFocus":_flaxMemberParameters26,"didRequestAppExit":_flaxMemberParameters2,"didHaveMemoryPressure":_flaxMemberParameters2,"didChangeAccessibilityFeatures":_flaxMemberParameters2,"update":_flaxMemberParameters234,"toString":_flaxMemberParameters2}, {}), ["removeListener"], undefined, "flax.core/sdk_foundation#type:ChangeNotifier");
const _LocalizationsResolverProxy = {type: "flax.core/sdk_widgets#type:LocalizationsResolver", parameters: _flaxMemberParameters235, constructors: {"": _flaxMemberParameters235}, methods: {"addListener":_flaxMemberParameters12,"removeListener":_flaxMemberParameters12,"dispose":_flaxMemberParameters2,"didPopRoute":_flaxMemberParameters2,"handleStartBackGesture":_flaxMemberParameters21,"handleUpdateBackGestureProgress":_flaxMemberParameters21,"handleCommitBackGesture":_flaxMemberParameters2,"handleCancelBackGesture":_flaxMemberParameters2,"handleStatusBarTap":_flaxMemberParameters2,"didPushRoute":_flaxMemberParameters22,"didPushRouteInformation":_flaxMemberParameters23,"didChangeMetrics":_flaxMemberParameters2,"didChangeTextScaleFactor":_flaxMemberParameters2,"didChangePlatformBrightness":_flaxMemberParameters2,"didChangeLocales":_flaxMemberParameters24,"didChangeAppLifecycleState":_flaxMemberParameters25,"didChangeViewFocus":_flaxMemberParameters26,"didRequestAppExit":_flaxMemberParameters2,"didHaveMemoryPressure":_flaxMemberParameters2,"didChangeAccessibilityFeatures":_flaxMemberParameters2,"update":_flaxMemberParameters234,"toString":_flaxMemberParameters2}, getters: ["locale","localizationsDelegates","localeListResolutionCallback","localeResolutionCallback","supportedLocales","hasListeners"], setters: [], contextMembers: [], superMembers: ["get:locale","get:localizationsDelegates","get:localeListResolutionCallback","get:localeResolutionCallback","get:supportedLocales","get:hasListeners","addListener","removeListener","dispose","didPopRoute","handleStartBackGesture","handleUpdateBackGestureProgress","handleCommitBackGesture","handleCancelBackGesture","handleStatusBarTap","didPushRoute","didPushRouteInformation","didChangeMetrics","didChangeTextScaleFactor","didChangePlatformBrightness","didChangeLocales","didChangeAppLifecycleState","didChangeViewFocus","didRequestAppExit","didHaveMemoryPressure","didChangeAccessibilityFeatures","update","toString"]} as const;
export interface LocalizationsResolver {
readonly [_flaxDartTypeValue]: LocalizationsResolver;

addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
didPopRoute(): Promise<boolean>;
handleStartBackGesture(backEvent: Readonly<{ "__flaxBound:package:flutter/src/services/predictive_back_event.dart::PredictiveBackEvent": readonly [] }>): boolean;
handleUpdateBackGestureProgress(backEvent: Readonly<{ "__flaxBound:package:flutter/src/services/predictive_back_event.dart::PredictiveBackEvent": readonly [] }>): void;
handleCommitBackGesture(): void;
handleCancelBackGesture(): void;
handleStatusBarTap(): void;
didPushRoute(route: string): Promise<boolean>;
didPushRouteInformation(routeInformation: Readonly<{ "__flaxBound:package:flutter/src/widgets/router.dart::RouteInformation": readonly [] }>): Promise<boolean>;
didChangeMetrics(): void;
didChangeTextScaleFactor(): void;
didChangePlatformBrightness(): void;
didChangeLocales(locales: DartListInput<upstream3.Locale, Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }>> | null): void;
didChangeAppLifecycleState(state: upstream7.AppLifecycleState): void;
didChangeViewFocus(event: Readonly<{ "__flaxBound:dart:ui::ViewFocusEvent": readonly [] }>): void;
didRequestAppExit(): Promise<upstream9.AppExitResponse>;
didHaveMemoryPressure(): void;
didChangeAccessibilityFeatures(): void;
update(options: {locale: Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }> | null; localeListResolutionCallback: ((locales: DartList<upstream3.Locale> | null, supportedLocales: DartIterable<upstream3.Locale>) => Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }> | null) | null; localeResolutionCallback: ((locale: upstream3.Locale | null, supportedLocales: DartIterable<upstream3.Locale>) => Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }> | null) | null; localizationsDelegates: DartIterableInput<upstream4.LocalizationsDelegate<unknown | null>, Readonly<{ "__flaxBound:package:flutter/src/widgets/localizations.dart::LocalizationsDelegate": readonly [unknown | null] }>> | null; supportedLocales: DartIterableInput<upstream3.Locale, Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }>>}): void;
toString(): string;
get locale(): upstream3.Locale;
get localizationsDelegates(): DartIterable<upstream4.LocalizationsDelegate<unknown | null>>;
get localeListResolutionCallback(): ((locales: DartListInput<upstream3.Locale, Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }>> | null, supportedLocales: DartIterableInput<upstream3.Locale, Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }>>) => upstream3.Locale | null) | null;
get localeResolutionCallback(): ((locale: Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }> | null, supportedLocales: DartIterableInput<upstream3.Locale, Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }>>) => upstream3.Locale | null) | null;
get supportedLocales(): DartIterable<upstream3.Locale>;
get hasListeners(): boolean;
}
export abstract class LocalizationsResolver extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<LocalizationsResolver>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: LocalizationsResolver;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:LocalizationsResolver", readonly [], false];
constructor(options: {supportedLocales: DartIterableInput<upstream3.Locale, Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }>>; locale?: Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }> | null | undefined; localeListResolutionCallback?: ((locales: DartList<upstream3.Locale> | null, supportedLocales: DartIterable<upstream3.Locale>) => Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }> | null) | null | undefined; localeResolutionCallback?: ((locale: upstream3.Locale | null, supportedLocales: DartIterable<upstream3.Locale>) => Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }> | null) | null | undefined; localizationsDelegates?: DartIterableInput<upstream4.LocalizationsDelegate<unknown | null>, Readonly<{ "__flaxBound:package:flutter/src/widgets/localizations.dart::LocalizationsDelegate": readonly [unknown | null] }>> | null | undefined}) { super(_LocalizationsResolverProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(LocalizationsResolver.prototype, _LocalizationsResolverProxy);
export namespace LocalizationsResolver { export function implement(args: [options: {supportedLocales: DartIterableInput<upstream3.Locale, Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }>>; locale?: Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }> | null | undefined; localeListResolutionCallback?: ((locales: DartList<upstream3.Locale> | null, supportedLocales: DartIterable<upstream3.Locale>) => Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }> | null) | null | undefined; localeResolutionCallback?: ((locale: upstream3.Locale | null, supportedLocales: DartIterable<upstream3.Locale>) => Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }> | null) | null | undefined; localizationsDelegates?: DartIterableInput<upstream4.LocalizationsDelegate<unknown | null>, Readonly<{ "__flaxBound:package:flutter/src/widgets/localizations.dart::LocalizationsDelegate": readonly [unknown | null] }>> | null | undefined}], implementation: {}): LocalizationsResolver {
return constructProxy(_LocalizationsResolverProxy, args, implementation) as LocalizationsResolver; } }
_flaxBindInstanceType<LocalizationsResolver, typeof LocalizationsResolver>(LocalizationsResolver, "flax.core/sdk_widgets#type:LocalizationsResolver", ["flax.core/sdk_foundation#type:ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable","flax.core/sdk_widgets#type:WidgetsBindingObserver"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "locale" | "localizationsDelegates" | "localeListResolutionCallback" | "localeResolutionCallback" | "supportedLocales" | "addListener" | "removeListener" | "dispose" | "didPopRoute" | "handleStartBackGesture" | "handleUpdateBackGestureProgress" | "handleCommitBackGesture" | "handleCancelBackGesture" | "handleStatusBarTap" | "didPushRoute" | "didPushRouteInformation" | "didChangeMetrics" | "didChangeTextScaleFactor" | "didChangePlatformBrightness" | "didChangeLocales" | "didChangeAppLifecycleState" | "didChangeViewFocus" | "didRequestAppExit" | "didHaveMemoryPressure" | "didChangeAccessibilityFeatures" | "update" | "toString" | "__flaxBound:package:flutter/src/widgets/localizations.dart::LocalizationsResolver" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable" | "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver";
