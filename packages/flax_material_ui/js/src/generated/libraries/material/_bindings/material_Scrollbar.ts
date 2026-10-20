// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Radius';
import '@flax/dart/ui/_bindings/flutter_Radius';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollNotification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollNotification';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollbarOrientation';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollbarOrientation';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Scrollbar extends _FlaxDartWidget, Omit<upstream0.StatelessWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatelessWidget>, Readonly<{ "__flaxBound:package:material_ui/src/scrollbar.dart::Scrollbar": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __Scrollbar: unique symbol;
readonly [_flaxDartTypeValue]: Scrollbar;

readonly child: Widget;
readonly controller: upstream2.ScrollController | null;
readonly thumbVisibility: boolean | null;
readonly trackVisibility: boolean | null;
readonly thickness: number | null;
readonly radius: upstream3.Radius | null;
readonly interactive: boolean | null;
readonly notificationPredicate: ((notification: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ScrollNotification": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/notification_listener.dart::LayoutChangedNotification": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_notification.dart::ViewportNotificationMixin": readonly [] }>) => boolean) | null;
readonly scrollbarOrientation: upstream5.ScrollbarOrientation | null;
readonly key: upstream1.Key | null;
build(context: upstream6.BuildContext): Widget;
createElement(): upstream7.StatelessElement;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream9.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream9.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream11.DiagnosticsTreeStyle | null | undefined}): upstream10.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream10.DiagnosticsNode>;
}
defineObject("flax.material/material#type:Scrollbar", ["child","controller","thumbVisibility","trackVisibility","thickness","radius","interactive","notificationPredicate","scrollbarOrientation","key"], [], _flaxBindingMethods("flax.material/material#type:Scrollbar", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:StatelessWidget");
export function _ScrollbarFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; child: Widget; controller?: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined; thumbVisibility?: boolean | null | undefined; trackVisibility?: boolean | null | undefined; thickness?: number | null | undefined; radius?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | null | undefined; notificationPredicate?: ((notification: upstream4.ScrollNotification) => boolean) | null | undefined; interactive?: boolean | null | undefined; scrollbarOrientation?: upstream5.ScrollbarOrientation | null | undefined }): Scrollbar {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:Scrollbar", "", [{"name":"key"},{"name":"child","required":true},{"name":"controller"},{"name":"thumbVisibility"},{"name":"trackVisibility"},{"name":"thickness"},{"name":"radius"},{"name":"notificationPredicate"},{"name":"interactive"},{"name":"scrollbarOrientation"}], [], options) as Scrollbar;
}
export const Scrollbar: typeof _ScrollbarFactory & _FlaxInstanceType<Scrollbar> & _FlaxDartType<Scrollbar, readonly ["class", "flax.material/material#type:Scrollbar", readonly [], false]> = _flaxBindInstanceType<Scrollbar, typeof _ScrollbarFactory>(_ScrollbarFactory, "flax.material/material#type:Scrollbar", ["flax.core/sdk_widgets#type:StatelessWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _ScrollbarFactory & _FlaxInstanceType<Scrollbar> & _FlaxDartType<Scrollbar, readonly ["class", "flax.material/material#type:Scrollbar", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "child" | "controller" | "thumbVisibility" | "trackVisibility" | "thickness" | "radius" | "interactive" | "notificationPredicate" | "scrollbarOrientation" | "key" | "build" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:material_ui/src/scrollbar.dart::Scrollbar" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
