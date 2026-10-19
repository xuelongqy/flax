// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ReorderableList';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream8 from '@flax/flutter/gestures/_bindings/sdk_gestures_PointerDownEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerDownEvent';
import type * as upstream9 from '@flax/flutter/gestures/_bindings/sdk_gestures_MultiDragGestureRecognizer';
import '@flax/flutter/gestures/_bindings/sdk_gestures_MultiDragGestureRecognizer';
import { _flaxMemberParameters333, _flaxMemberParameters2, _flaxMemberParameters0, _flaxMemberParameters3, _flaxMemberParameters14 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ReorderableListState extends Omit<upstream0.State<upstream1.ReorderableList>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.State<upstream1.ReorderableList>>, Readonly<{ "__flaxBound:package:flutter/src/widgets/reorderable_list.dart::ReorderableListState": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream1.ReorderableList] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __ReorderableListState: unique symbol;
readonly [_flaxDartTypeValue]: ReorderableListState;

readonly widget: upstream1.ReorderableList;
readonly context: upstream3.BuildContext;
readonly mounted: boolean;
toStringShort(): string;
toString(options?: {minLevel?: upstream4.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
startItemDragReorder(options: {event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerDownEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerDownEvent": readonly [] }>; index: number; recognizer: Readonly<{ "__flaxBound:package:flutter/src/gestures/multidrag.dart::MultiDragGestureRecognizer": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/recognizer.dart::GestureRecognizer": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaMember": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>}): void;
cancelReorder(): void;
build(context: upstream3.BuildContext): Widget;
initState(): void;
didUpdateWidget(oldWidget: upstream1.ReorderableList): void;
reassemble(): void;
setState(fn: (() => void)): void;
deactivate(): void;
activate(): void;
dispose(): void;
didChangeDependencies(): void;
}
defineObject("flax.core/sdk_widgets#type:ReorderableListState", ["widget","context","mounted"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ReorderableListState", "object", {"startItemDragReorder":_flaxMemberParameters333,"cancelReorder":_flaxMemberParameters2,"build":_flaxMemberParameters0,"initState":_flaxMemberParameters2,"didUpdateWidget":_flaxMemberParameters3,"reassemble":_flaxMemberParameters2,"setState":_flaxMemberParameters14,"deactivate":_flaxMemberParameters2,"activate":_flaxMemberParameters2,"dispose":_flaxMemberParameters2,"didChangeDependencies":_flaxMemberParameters2}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export function _ReorderableListStateFactory(): ReorderableListState {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:ReorderableListState", "", _flaxMemberParameters2, [], {}) as ReorderableListState;
}
export const ReorderableListState: typeof _ReorderableListStateFactory & _FlaxInstanceType<ReorderableListState> & _FlaxDartType<ReorderableListState, readonly ["class", "flax.core/sdk_widgets#type:ReorderableListState", readonly [], false]> = _flaxBindInstanceType<ReorderableListState, typeof _ReorderableListStateFactory>(_ReorderableListStateFactory, "flax.core/sdk_widgets#type:ReorderableListState", ["flax.core/components#type:State","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _ReorderableListStateFactory & _FlaxInstanceType<ReorderableListState> & _FlaxDartType<ReorderableListState, readonly ["class", "flax.core/sdk_widgets#type:ReorderableListState", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "widget" | "context" | "mounted" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "startItemDragReorder" | "cancelReorder" | "build" | "initState" | "didUpdateWidget" | "reassemble" | "setState" | "deactivate" | "activate" | "dispose" | "didChangeDependencies" | "__flaxBound:package:flutter/src/widgets/reorderable_list.dart::ReorderableListState" | "__flaxBound:package:flutter/src/widgets/framework.dart::State" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
