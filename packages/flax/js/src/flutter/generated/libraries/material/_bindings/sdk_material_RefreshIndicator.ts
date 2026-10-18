// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollNotification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollNotification';
import type * as upstream4 from '@flax/flutter/material/_bindings/sdk_material_RefreshIndicatorTriggerMode';
import '@flax/flutter/material/_bindings/sdk_material_RefreshIndicatorTriggerMode';
import type * as upstream5 from '@flax/flutter/material/_bindings/sdk_material_RefreshIndicatorStatus';
import '@flax/flutter/material/_bindings/sdk_material_RefreshIndicatorStatus';
import type * as upstream6 from '@flax/flutter/material/_bindings/sdk_material_RefreshIndicatorState';
import '@flax/flutter/material/_bindings/sdk_material_RefreshIndicatorState';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"properties","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"joiner","required":false,"positional":false},{"name":"minLevel","required":false,"positional":false}] as const;
const _flaxMemberParameters3 = [{"name":"minLevel","required":false,"positional":false},{"name":"prefixLineOne","required":false,"positional":false},{"name":"prefixOtherLines","required":false,"positional":false},{"name":"wrapWidth","required":false,"positional":false}] as const;
const _flaxMemberParameters4 = [{"name":"name","required":false,"positional":false},{"name":"style","required":false,"positional":false}] as const;
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RefreshIndicator extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{ "__flaxBound:package:flutter/src/material/refresh_indicator.dart::RefreshIndicator": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __RefreshIndicator: unique symbol;
readonly [_flaxDartTypeValue]: RefreshIndicator;

readonly child: Widget;
readonly displacement: number;
readonly edgeOffset: number;
readonly onRefresh: (() => Promise<void>);
readonly onStatusChange: ((value: upstream5.RefreshIndicatorStatus | null) => void) | null;
readonly color: upstream2.Color | null;
readonly backgroundColor: upstream2.Color | null;
readonly notificationPredicate: ((notification: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ScrollNotification": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/notification_listener.dart::LayoutChangedNotification": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin": readonly [] }>) => boolean);
readonly semanticsLabel: string | null;
readonly semanticsValue: string | null;
readonly strokeWidth: number;
readonly triggerMode: upstream4.RefreshIndicatorTriggerMode;
readonly elevation: number;
readonly key: upstream1.Key | null;
createState(): upstream6.RefreshIndicatorState;
createElement(): upstream7.StatefulElement;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream9.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream9.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream11.DiagnosticsTreeStyle | null | undefined}): upstream10.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream10.DiagnosticsNode>;
}
defineObject("flax.core/sdk_material#type:RefreshIndicator", ["child","displacement","edgeOffset","onRefresh","onStatusChange","color","backgroundColor","notificationPredicate","semanticsLabel","semanticsValue","strokeWidth","triggerMode","elevation","key"], [], _flaxBindingMethods("flax.core/sdk_material#type:RefreshIndicator", "object", {"createState":_flaxMemberParameters0,"createElement":_flaxMemberParameters0,"toStringShort":_flaxMemberParameters0,"debugFillProperties":_flaxMemberParameters1,"toStringShallow":_flaxMemberParameters2,"toStringDeep":_flaxMemberParameters3,"toDiagnosticsNode":_flaxMemberParameters4,"debugDescribeChildren":_flaxMemberParameters0}, {}), []);
export function _RefreshIndicatorFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; displacement?: number | undefined; edgeOffset?: number | undefined; onRefresh: (() => Promise<void>); color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; notificationPredicate?: ((notification: upstream3.ScrollNotification) => boolean) | undefined; semanticsLabel?: string | null | undefined; semanticsValue?: string | null | undefined; strokeWidth?: number | undefined; triggerMode?: upstream4.RefreshIndicatorTriggerMode | undefined; elevation?: number | undefined; child: Widget }): RefreshIndicator {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_material#type:RefreshIndicator", "", [{"name":"key","required":false,"positional":false},{"name":"displacement","required":false,"positional":false},{"name":"edgeOffset","required":false,"positional":false},{"name":"onRefresh","required":true,"positional":false},{"name":"color","required":false,"positional":false},{"name":"backgroundColor","required":false,"positional":false},{"name":"notificationPredicate","required":false,"positional":false},{"name":"semanticsLabel","required":false,"positional":false},{"name":"semanticsValue","required":false,"positional":false},{"name":"strokeWidth","required":false,"positional":false},{"name":"triggerMode","required":false,"positional":false},{"name":"elevation","required":false,"positional":false},{"name":"child","required":true,"positional":false}], [], options) as RefreshIndicator;
}
export namespace _RefreshIndicatorFactory {
export function adaptive(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; displacement?: number | undefined; edgeOffset?: number | undefined; onRefresh: (() => Promise<void>); color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; notificationPredicate?: ((notification: upstream3.ScrollNotification) => boolean) | undefined; semanticsLabel?: string | null | undefined; semanticsValue?: string | null | undefined; strokeWidth?: number | undefined; triggerMode?: upstream4.RefreshIndicatorTriggerMode | undefined; elevation?: number | undefined; child: Widget }): RefreshIndicator {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_material#type:RefreshIndicator", "adaptive", [{"name":"key","required":false,"positional":false},{"name":"displacement","required":false,"positional":false},{"name":"edgeOffset","required":false,"positional":false},{"name":"onRefresh","required":true,"positional":false},{"name":"color","required":false,"positional":false},{"name":"backgroundColor","required":false,"positional":false},{"name":"notificationPredicate","required":false,"positional":false},{"name":"semanticsLabel","required":false,"positional":false},{"name":"semanticsValue","required":false,"positional":false},{"name":"strokeWidth","required":false,"positional":false},{"name":"triggerMode","required":false,"positional":false},{"name":"elevation","required":false,"positional":false},{"name":"child","required":true,"positional":false}], [], options) as RefreshIndicator;
}
}
export namespace _RefreshIndicatorFactory {
export function noSpinner(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; onRefresh: (() => Promise<void>); onStatusChange?: ((value: upstream5.RefreshIndicatorStatus | null) => void) | null | undefined; notificationPredicate?: ((notification: upstream3.ScrollNotification) => boolean) | undefined; semanticsLabel?: string | null | undefined; semanticsValue?: string | null | undefined; triggerMode?: upstream4.RefreshIndicatorTriggerMode | undefined; elevation?: number | undefined; child: Widget }): RefreshIndicator {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_material#type:RefreshIndicator", "noSpinner", [{"name":"key","required":false,"positional":false},{"name":"onRefresh","required":true,"positional":false},{"name":"onStatusChange","required":false,"positional":false},{"name":"notificationPredicate","required":false,"positional":false},{"name":"semanticsLabel","required":false,"positional":false},{"name":"semanticsValue","required":false,"positional":false},{"name":"triggerMode","required":false,"positional":false},{"name":"elevation","required":false,"positional":false},{"name":"child","required":true,"positional":false}], [], options) as RefreshIndicator;
}
}
export const RefreshIndicator: typeof _RefreshIndicatorFactory & _FlaxInstanceType<RefreshIndicator> & _FlaxDartType<RefreshIndicator, readonly ["class", "flax.core/sdk_material#type:RefreshIndicator", readonly [], false]> = _flaxBindInstanceType<RefreshIndicator, typeof _RefreshIndicatorFactory>(_RefreshIndicatorFactory, "flax.core/sdk_material#type:RefreshIndicator", ["flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _RefreshIndicatorFactory & _FlaxInstanceType<RefreshIndicator> & _FlaxDartType<RefreshIndicator, readonly ["class", "flax.core/sdk_material#type:RefreshIndicator", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "child" | "displacement" | "edgeOffset" | "onRefresh" | "onStatusChange" | "color" | "backgroundColor" | "notificationPredicate" | "semanticsLabel" | "semanticsValue" | "strokeWidth" | "triggerMode" | "elevation" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/material/refresh_indicator.dart::RefreshIndicator" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
