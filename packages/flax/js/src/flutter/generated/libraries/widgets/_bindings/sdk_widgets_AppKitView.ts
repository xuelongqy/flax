// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_PlatformViewHitTestBehavior';
import '@flax/flutter/rendering/_bindings/sdk_rendering_PlatformViewHitTestBehavior';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream4 from '@flax/flutter/services/_bindings/sdk_services_MessageCodec';
import '@flax/flutter/services/_bindings/sdk_services_MessageCodec';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_Factory_c1';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Factory_c1';
import type * as upstream6 from '@flax/flutter/gestures/_bindings/sdk_gestures_OneSequenceGestureRecognizer';
import '@flax/flutter/gestures/_bindings/sdk_gestures_OneSequenceGestureRecognizer';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream13 from '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { _flaxMemberParameters2 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AppKitView extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_view.dart::AppKitView": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_view.dart::_DarwinView": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __AppKitView: unique symbol;
readonly [_flaxDartTypeValue]: AppKitView;

readonly viewType: string;
readonly onPlatformViewCreated: ((id: number) => void) | null;
readonly hitTestBehavior: upstream2.PlatformViewHitTestBehavior;
readonly layoutDirection: upstream3.TextDirection | null;
readonly creationParams: unknown | null;
readonly creationParamsCodec: upstream4.MessageCodec<unknown | null> | null;
readonly gestureRecognizers: DartSet<upstream5.Factory<upstream6.OneSequenceGestureRecognizer>> | null;
readonly key: upstream1.Key | null;
createState(): upstream7.State<AppKitView>;
createElement(): upstream8.StatefulElement;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream10.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream10.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream12.DiagnosticsTreeStyle | null | undefined}): upstream11.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream11.DiagnosticsNode>;
}
defineObject("flax.core/sdk_widgets#type:AppKitView", ["viewType","onPlatformViewCreated","hitTestBehavior","layoutDirection","creationParams","creationParamsCodec","gestureRecognizers","key"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:AppKitView", "object", {"createState":_flaxMemberParameters2,"createElement":_flaxMemberParameters2}, {}), [], undefined, "flax.core/sdk_widgets#type:Widget");
export function _AppKitViewFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; viewType: string; onPlatformViewCreated?: ((id: number) => void) | null | undefined; hitTestBehavior?: upstream2.PlatformViewHitTestBehavior | undefined; layoutDirection?: upstream3.TextDirection | null | undefined; creationParams?: unknown | null | undefined; creationParamsCodec?: Readonly<{ "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null] }> | null | undefined; gestureRecognizers?: DartSetInput<upstream5.Factory<upstream6.OneSequenceGestureRecognizer>, Readonly<{ "__flaxBound:package:flutter/src/foundation/basic_types.dart::Factory": readonly [upstream6.OneSequenceGestureRecognizer] }>> | null | undefined }): AppKitView {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:AppKitView", "", [{"name":"key"},{"name":"viewType","required":true},{"name":"onPlatformViewCreated"},{"name":"hitTestBehavior"},{"name":"layoutDirection"},{"name":"creationParams"},{"name":"creationParamsCodec"},{"name":"gestureRecognizers"}], [], options) as AppKitView;
}
export const AppKitView: typeof _AppKitViewFactory & _FlaxInstanceType<AppKitView> & _FlaxDartType<AppKitView, readonly ["class", "flax.core/sdk_widgets#type:AppKitView", readonly [], false]> = _flaxBindInstanceType<AppKitView, typeof _AppKitViewFactory>(_AppKitViewFactory, "flax.core/sdk_widgets#type:AppKitView", ["package:flutter/src/widgets/platform_view.dart::_DarwinView","flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _AppKitViewFactory & _FlaxInstanceType<AppKitView> & _FlaxDartType<AppKitView, readonly ["class", "flax.core/sdk_widgets#type:AppKitView", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "viewType" | "onPlatformViewCreated" | "hitTestBehavior" | "layoutDirection" | "creationParams" | "creationParamsCodec" | "gestureRecognizers" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/platform_view.dart::AppKitView" | "__flaxBound:package:flutter/src/widgets/platform_view.dart::_DarwinView" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
