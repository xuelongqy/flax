// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_RawScrollbar';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Radius';
import '@flax/dart/ui/_bindings/flutter_Radius';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollNotification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollNotification';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollbarOrientation';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollbarOrientation';
import type * as upstream7 from '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import type * as upstream8 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream9 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream10 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/sdk_widgets_RawScrollbarState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RawScrollbarState';
import type * as upstream12 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream16 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"properties","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"joiner","required":false,"positional":false},{"name":"minLevel","required":false,"positional":false}] as const;
const _flaxMemberParameters3 = [{"name":"minLevel","required":false,"positional":false},{"name":"prefixLineOne","required":false,"positional":false},{"name":"prefixOtherLines","required":false,"positional":false},{"name":"wrapWidth","required":false,"positional":false}] as const;
const _flaxMemberParameters4 = [{"name":"name","required":false,"positional":false},{"name":"style","required":false,"positional":false}] as const;
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/cupertino/_bindings/sdk_cupertino.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CupertinoScrollbar extends _FlaxDartWidget, Omit<upstream0.RawScrollbar, _flaxOwnMembers0>, Omit<upstream1.StatefulWidget, _flaxOwnMembers0 | keyof upstream0.RawScrollbar>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.RawScrollbar | keyof upstream1.StatefulWidget>, Readonly<{ "__flaxBound:package:flutter/src/cupertino/scrollbar.dart::CupertinoScrollbar": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scrollbar.dart::RawScrollbar": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __CupertinoScrollbar: unique symbol;
readonly [_flaxDartTypeValue]: CupertinoScrollbar;

readonly thicknessWhileDragging: number;
readonly radiusWhileDragging: upstream4.Radius;
readonly child: Widget;
readonly controller: upstream3.ScrollController | null;
readonly thumbVisibility: boolean | null;
readonly shape: upstream7.OutlinedBorder | null;
readonly radius: upstream4.Radius | null;
readonly thickness: number | null;
readonly thumbColor: upstream8.Color | null;
readonly minThumbLength: number;
readonly minOverscrollLength: number | null;
readonly trackVisibility: boolean | null;
readonly trackRadius: upstream4.Radius | null;
readonly trackColor: upstream8.Color | null;
readonly trackBorderColor: upstream8.Color | null;
readonly fadeDuration: upstream9.Duration;
readonly timeToFade: upstream9.Duration;
readonly pressDuration: upstream9.Duration;
readonly notificationPredicate: ((notification: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ScrollNotification": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/notification_listener.dart::LayoutChangedNotification": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin": readonly [] }>) => boolean);
readonly interactive: boolean | null;
readonly scrollbarOrientation: upstream6.ScrollbarOrientation | null;
readonly mainAxisMargin: number;
readonly crossAxisMargin: number;
readonly padding: upstream10.EdgeInsetsGeometry | null;
readonly key: upstream2.Key | null;
createState(): upstream11.RawScrollbarState<CupertinoScrollbar>;
createElement(): upstream12.StatefulElement;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream14.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream14.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream16.DiagnosticsTreeStyle | null | undefined}): upstream15.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream15.DiagnosticsNode>;
}
defineObject("flax.core/sdk_cupertino#type:CupertinoScrollbar", ["thicknessWhileDragging","radiusWhileDragging","child","controller","thumbVisibility","shape","radius","thickness","thumbColor","minThumbLength","minOverscrollLength","trackVisibility","trackRadius","trackColor","trackBorderColor","fadeDuration","timeToFade","pressDuration","notificationPredicate","interactive","scrollbarOrientation","mainAxisMargin","crossAxisMargin","padding","key"], [], _flaxBindingMethods("flax.core/sdk_cupertino#type:CupertinoScrollbar", "object", {"createState":_flaxMemberParameters0,"createElement":_flaxMemberParameters0,"toStringShort":_flaxMemberParameters0,"debugFillProperties":_flaxMemberParameters1,"toStringShallow":_flaxMemberParameters2,"toStringDeep":_flaxMemberParameters3,"toDiagnosticsNode":_flaxMemberParameters4,"debugDescribeChildren":_flaxMemberParameters0}, {}), []);
export function _CupertinoScrollbarFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; child: Widget; controller?: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined; thumbVisibility?: boolean | null | undefined; thickness?: number | undefined; thicknessWhileDragging?: number | undefined; radius?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; radiusWhileDragging?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; notificationPredicate?: ((notification: upstream5.ScrollNotification) => boolean) | null | undefined; scrollbarOrientation?: upstream6.ScrollbarOrientation | null | undefined; mainAxisMargin?: number | undefined }): CupertinoScrollbar {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_cupertino#type:CupertinoScrollbar", "", [{"name":"key","required":false,"positional":false},{"name":"child","required":true,"positional":false},{"name":"controller","required":false,"positional":false},{"name":"thumbVisibility","required":false,"positional":false},{"name":"thickness","required":false,"positional":false},{"name":"thicknessWhileDragging","required":false,"positional":false},{"name":"radius","required":false,"positional":false},{"name":"radiusWhileDragging","required":false,"positional":false},{"name":"notificationPredicate","required":false,"positional":false},{"name":"scrollbarOrientation","required":false,"positional":false},{"name":"mainAxisMargin","required":false,"positional":false}], [], options) as CupertinoScrollbar;
}
export namespace _CupertinoScrollbarFactory { export declare const defaultThickness: number; }
export namespace _CupertinoScrollbarFactory { export declare const defaultThicknessWhileDragging: number; }
export namespace _CupertinoScrollbarFactory { export declare const defaultRadius: upstream4.Radius; }
export namespace _CupertinoScrollbarFactory { export declare const defaultRadiusWhileDragging: upstream4.Radius; }
_flaxDefineStaticGetters(_CupertinoScrollbarFactory, "flax.core/sdk_cupertino#read:CupertinoScrollbar.", ["defaultThickness","defaultThicknessWhileDragging","defaultRadius","defaultRadiusWhileDragging"]);
export const CupertinoScrollbar: typeof _CupertinoScrollbarFactory & _FlaxInstanceType<CupertinoScrollbar> & _FlaxDartType<CupertinoScrollbar, readonly ["class", "flax.core/sdk_cupertino#type:CupertinoScrollbar", readonly [], false]> = _flaxBindInstanceType<CupertinoScrollbar, typeof _CupertinoScrollbarFactory>(_CupertinoScrollbarFactory, "flax.core/sdk_cupertino#type:CupertinoScrollbar", ["flax.core/sdk_widgets#type:RawScrollbar","flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _CupertinoScrollbarFactory & _FlaxInstanceType<CupertinoScrollbar> & _FlaxDartType<CupertinoScrollbar, readonly ["class", "flax.core/sdk_cupertino#type:CupertinoScrollbar", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "thicknessWhileDragging" | "radiusWhileDragging" | "child" | "controller" | "thumbVisibility" | "shape" | "radius" | "thickness" | "thumbColor" | "minThumbLength" | "minOverscrollLength" | "trackVisibility" | "trackRadius" | "trackColor" | "trackBorderColor" | "fadeDuration" | "timeToFade" | "pressDuration" | "notificationPredicate" | "interactive" | "scrollbarOrientation" | "mainAxisMargin" | "crossAxisMargin" | "padding" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/cupertino/scrollbar.dart::CupertinoScrollbar" | "__flaxBound:package:flutter/src/widgets/scrollbar.dart::RawScrollbar" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
