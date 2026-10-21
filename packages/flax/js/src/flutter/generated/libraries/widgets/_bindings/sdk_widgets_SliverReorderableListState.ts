// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_SliverReorderableList';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_TickerProviderStateMixin';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TickerProviderStateMixin';
import type * as upstream4 from '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream10 from '@flax/flutter/scheduler/_bindings/sdk_scheduler_Ticker';
import '@flax/flutter/scheduler/_bindings/sdk_scheduler_Ticker';
import type * as upstream11 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream12 from '@flax/flutter/gestures/_bindings/sdk_gestures_PointerDownEvent';
import '@flax/flutter/gestures/_bindings/sdk_gestures_PointerDownEvent';
import type * as upstream13 from '@flax/flutter/gestures/_bindings/sdk_gestures_MultiDragGestureRecognizer';
import '@flax/flutter/gestures/_bindings/sdk_gestures_MultiDragGestureRecognizer';
import { _flaxMemberParameters2, _flaxMemberParameters9, _flaxMemberParameters8, _flaxMemberParameters5, _flaxMemberParameters3, _flaxMemberParameters17, _flaxMemberParameters0, _flaxMemberParameters360 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SliverReorderableListState extends Omit<upstream0.State<upstream1.SliverReorderableList>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.State<upstream1.SliverReorderableList>>, Omit<upstream3.TickerProviderStateMixin<upstream1.SliverReorderableList>, _flaxOwnMembers0 | keyof upstream0.State<upstream1.SliverReorderableList> | keyof upstream2.Diagnosticable>, Omit<upstream4.TickerProvider, _flaxOwnMembers0 | keyof upstream0.State<upstream1.SliverReorderableList> | keyof upstream2.Diagnosticable | keyof upstream3.TickerProviderStateMixin<upstream1.SliverReorderableList>>, Readonly<{ "__flaxBound:package:flutter/src/widgets/reorderable_list.dart::SliverReorderableListState": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream1.SliverReorderableList] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin": readonly [upstream1.SliverReorderableList] }>, Readonly<{ "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [] }> { readonly __SliverReorderableListState: unique symbol;
readonly [_flaxDartTypeValue]: SliverReorderableListState;

readonly widget: upstream1.SliverReorderableList;
readonly context: upstream5.BuildContext;
readonly mounted: boolean;
toStringShort(): string;
toString(options?: {minLevel?: upstream6.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream8.DiagnosticsTreeStyle | null | undefined}): upstream7.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
createTicker(onTick: ((elapsed: upstream11.Duration) => void)): upstream10.Ticker;
activate(): void;
dispose(): void;
initState(): void;
didUpdateWidget(oldWidget: upstream1.SliverReorderableList): void;
reassemble(): void;
setState(fn: (() => void)): void;
deactivate(): void;
build(context: upstream5.BuildContext): Widget;
didChangeDependencies(): void;
startItemDragReorder(options: {event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerDownEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_PointerEventDescription": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::_CopyPointerDownEvent": readonly [] }>; index: number; recognizer: Readonly<{ "__flaxBound:package:flutter/src/gestures/multidrag.dart::MultiDragGestureRecognizer": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/recognizer.dart::GestureRecognizer": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaMember": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>}): void;
cancelReorder(): void;
}
defineObject("flax.core/sdk_widgets#type:SliverReorderableListState", ["widget","context","mounted"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:SliverReorderableListState", "object", {"toStringShort":_flaxMemberParameters2,"toString":_flaxMemberParameters9,"toDiagnosticsNode":_flaxMemberParameters8,"debugFillProperties":_flaxMemberParameters5,"activate":_flaxMemberParameters2,"dispose":_flaxMemberParameters2,"initState":_flaxMemberParameters2,"didUpdateWidget":_flaxMemberParameters3,"reassemble":_flaxMemberParameters2,"setState":_flaxMemberParameters17,"deactivate":_flaxMemberParameters2,"build":_flaxMemberParameters0,"didChangeDependencies":_flaxMemberParameters2,"startItemDragReorder":_flaxMemberParameters360,"cancelReorder":_flaxMemberParameters2}, {}), [], undefined, "flax.core/flutter#type:TickerProvider");
export function _SliverReorderableListStateFactory(): SliverReorderableListState {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:SliverReorderableListState", "", _flaxMemberParameters2, [], {}) as SliverReorderableListState;
}
export const SliverReorderableListState: typeof _SliverReorderableListStateFactory & _FlaxInstanceType<SliverReorderableListState> & _FlaxDartType<SliverReorderableListState, readonly ["class", "flax.core/sdk_widgets#type:SliverReorderableListState", readonly [], false]> = _flaxBindInstanceType<SliverReorderableListState, typeof _SliverReorderableListStateFactory>(_SliverReorderableListStateFactory, "flax.core/sdk_widgets#type:SliverReorderableListState", ["flax.core/components#type:State","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable","flax.core/sdk_widgets#type:TickerProviderStateMixin","flax.core/flutter#type:TickerProvider"]) as typeof _SliverReorderableListStateFactory & _FlaxInstanceType<SliverReorderableListState> & _FlaxDartType<SliverReorderableListState, readonly ["class", "flax.core/sdk_widgets#type:SliverReorderableListState", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "widget" | "context" | "mounted" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "createTicker" | "activate" | "dispose" | "initState" | "didUpdateWidget" | "reassemble" | "setState" | "deactivate" | "build" | "didChangeDependencies" | "startItemDragReorder" | "cancelReorder" | "__flaxBound:package:flutter/src/widgets/reorderable_list.dart::SliverReorderableListState" | "__flaxBound:package:flutter/src/widgets/framework.dart::State" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin" | "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider";
