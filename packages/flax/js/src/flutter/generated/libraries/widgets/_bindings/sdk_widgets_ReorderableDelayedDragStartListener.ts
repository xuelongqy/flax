// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ReorderableDragStartListener';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ReorderableDragStartListener';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/flutter/gestures/_bindings/sdk_gestures_MultiDragGestureRecognizer';
import '@flax/flutter/gestures/_bindings/sdk_gestures_MultiDragGestureRecognizer';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ReorderableDelayedDragStartListener extends _FlaxDartWidget, Omit<upstream0.ReorderableDragStartListener, _flaxOwnMembers0>, Omit<upstream1.StatelessWidget, _flaxOwnMembers0 | keyof upstream0.ReorderableDragStartListener>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.ReorderableDragStartListener | keyof upstream1.StatelessWidget>, Readonly<{ "__flaxBound:package:flutter/src/widgets/reorderable_list.dart::ReorderableDelayedDragStartListener": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/reorderable_list.dart::ReorderableDragStartListener": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __ReorderableDelayedDragStartListener: unique symbol;
readonly [_flaxDartTypeValue]: ReorderableDelayedDragStartListener;

readonly child: Widget;
readonly index: number;
readonly enabled: boolean;
readonly key: upstream2.Key | null;
createRecognizer(): upstream3.MultiDragGestureRecognizer;
build(context: upstream4.BuildContext): Widget;
createElement(): upstream5.StatelessElement;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream7.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream7.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream9.DiagnosticsTreeStyle | null | undefined}): upstream8.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream8.DiagnosticsNode>;
}
defineObject("flax.core/sdk_widgets#type:ReorderableDelayedDragStartListener", ["child","index","enabled","key"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ReorderableDelayedDragStartListener", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:ReorderableDragStartListener");
export function _ReorderableDelayedDragStartListenerFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; child: Widget; index: number; enabled?: boolean | undefined }): ReorderableDelayedDragStartListener {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:ReorderableDelayedDragStartListener", "", [{"name":"key"},{"name":"child","required":true},{"name":"index","required":true},{"name":"enabled"}], [], options) as ReorderableDelayedDragStartListener;
}
export const ReorderableDelayedDragStartListener: typeof _ReorderableDelayedDragStartListenerFactory & _FlaxInstanceType<ReorderableDelayedDragStartListener> & _FlaxDartType<ReorderableDelayedDragStartListener, readonly ["class", "flax.core/sdk_widgets#type:ReorderableDelayedDragStartListener", readonly [], false]> = _flaxBindInstanceType<ReorderableDelayedDragStartListener, typeof _ReorderableDelayedDragStartListenerFactory>(_ReorderableDelayedDragStartListenerFactory, "flax.core/sdk_widgets#type:ReorderableDelayedDragStartListener", ["flax.core/sdk_widgets#type:ReorderableDragStartListener","flax.core/sdk_widgets#type:StatelessWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _ReorderableDelayedDragStartListenerFactory & _FlaxInstanceType<ReorderableDelayedDragStartListener> & _FlaxDartType<ReorderableDelayedDragStartListener, readonly ["class", "flax.core/sdk_widgets#type:ReorderableDelayedDragStartListener", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "child" | "index" | "enabled" | "key" | "createRecognizer" | "build" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/reorderable_list.dart::ReorderableDelayedDragStartListener" | "__flaxBound:package:flutter/src/widgets/reorderable_list.dart::ReorderableDragStartListener" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
