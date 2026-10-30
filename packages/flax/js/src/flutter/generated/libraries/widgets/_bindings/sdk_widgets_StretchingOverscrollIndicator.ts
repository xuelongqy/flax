// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollNotification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollNotification';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_Axis';
import '@flax/flutter/painting/_bindings/flutter_Axis';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream12 from '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { _flaxMemberParameters2 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StretchingOverscrollIndicator extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{ "__flaxBound:package:flutter/src/widgets/overscroll_indicator.dart::StretchingOverscrollIndicator": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __StretchingOverscrollIndicator: unique symbol;
readonly [_flaxDartTypeValue]: StretchingOverscrollIndicator;

readonly axisDirection: upstream2.AxisDirection;
readonly axis: upstream5.Axis;
readonly notificationPredicate: ((notification: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ScrollNotification": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/notification_listener.dart::LayoutChangedNotification": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin": readonly [] }>) => boolean);
readonly clipBehavior: upstream4.Clip;
readonly child: Widget | null;
readonly key: upstream1.Key | null;
createState(): upstream6.State<StretchingOverscrollIndicator>;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
createElement(): upstream8.StatefulElement;
toStringShort(): string;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream9.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream9.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream11.DiagnosticsTreeStyle | null | undefined}): upstream10.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream10.DiagnosticsNode>;
}
defineObject("flax.core/sdk_widgets#type:StretchingOverscrollIndicator", ["axisDirection","axis","notificationPredicate","clipBehavior","child","key"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:StretchingOverscrollIndicator", "object", {"createState":_flaxMemberParameters2,"createElement":_flaxMemberParameters2}, {}), [], undefined, "flax.core/sdk_widgets#type:Widget");
export function _StretchingOverscrollIndicatorFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; axisDirection: upstream2.AxisDirection; notificationPredicate?: ((notification: upstream3.ScrollNotification) => boolean) | undefined; clipBehavior?: upstream4.Clip | undefined; child?: Widget | null | undefined }): StretchingOverscrollIndicator {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:StretchingOverscrollIndicator", "", [{"name":"key"},{"name":"axisDirection","required":true},{"name":"notificationPredicate"},{"name":"clipBehavior"},{"name":"child"}], [], options) as StretchingOverscrollIndicator;
}
export declare namespace _StretchingOverscrollIndicatorFactory { const __flaxJsx: { readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _StretchingOverscrollIndicatorFactory>[0]>), "child"> & ({ "child"?: (globalThis.NonNullable<globalThis.Parameters<typeof _StretchingOverscrollIndicatorFactory>[0]>)["child"]; children?: never } | { "child"?: never; children?: (globalThis.NonNullable<globalThis.Parameters<typeof _StretchingOverscrollIndicatorFactory>[0]>)["child"] }); readonly slot: "child"; readonly many: false; }; }
export const StretchingOverscrollIndicator: typeof _StretchingOverscrollIndicatorFactory & _FlaxInstanceType<StretchingOverscrollIndicator> & _FlaxDartType<StretchingOverscrollIndicator, readonly ["class", "flax.core/sdk_widgets#type:StretchingOverscrollIndicator", readonly [], false]> = _flaxBindInstanceType<StretchingOverscrollIndicator, typeof _StretchingOverscrollIndicatorFactory>(_StretchingOverscrollIndicatorFactory, "flax.core/sdk_widgets#type:StretchingOverscrollIndicator", ["flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _StretchingOverscrollIndicatorFactory & _FlaxInstanceType<StretchingOverscrollIndicator> & _FlaxDartType<StretchingOverscrollIndicator, readonly ["class", "flax.core/sdk_widgets#type:StretchingOverscrollIndicator", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "axisDirection" | "axis" | "notificationPredicate" | "clipBehavior" | "child" | "key" | "createState" | "debugFillProperties" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/overscroll_indicator.dart::StretchingOverscrollIndicator" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
