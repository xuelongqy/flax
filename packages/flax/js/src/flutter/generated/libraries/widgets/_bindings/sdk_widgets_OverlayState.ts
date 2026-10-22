// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_Overlay';
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
import type * as upstream12 from '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayEntry';
import '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayEntry';
import { _flaxMemberParameters2, _flaxMemberParameters9, _flaxMemberParameters8, _flaxMemberParameters5, _flaxMemberParameters3, _flaxMemberParameters17, _flaxMemberParameters0, _flaxMemberParameters277, _flaxMemberParameters278, _flaxMemberParameters279, _flaxMemberParameters237 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface OverlayState extends Omit<upstream0.State<upstream1.Overlay>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.State<upstream1.Overlay>>, Omit<upstream3.TickerProviderStateMixin<upstream1.Overlay>, _flaxOwnMembers0 | keyof upstream0.State<upstream1.Overlay> | keyof upstream2.Diagnosticable>, Omit<upstream4.TickerProvider, _flaxOwnMembers0 | keyof upstream0.State<upstream1.Overlay> | keyof upstream2.Diagnosticable | keyof upstream3.TickerProviderStateMixin<upstream1.Overlay>>, Readonly<{ "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayState": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream1.Overlay] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin": readonly [upstream1.Overlay] }>, Readonly<{ "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [] }> { readonly __OverlayState: unique symbol;
readonly [_flaxDartTypeValue]: OverlayState;

readonly widget: upstream1.Overlay;
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
didUpdateWidget(oldWidget: upstream1.Overlay): void;
reassemble(): void;
setState(fn: (() => void)): void;
deactivate(): void;
build(context: upstream5.BuildContext): Widget;
didChangeDependencies(): void;
insert(entry: Readonly<{ "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayEntry": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>, options?: {above?: Readonly<{ "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayEntry": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined; below?: Readonly<{ "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayEntry": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined}): void;
insertAll(entries: DartIterableInput<upstream12.OverlayEntry, Readonly<{ "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayEntry": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>>, options?: {above?: Readonly<{ "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayEntry": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined; below?: Readonly<{ "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayEntry": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined}): void;
rearrange(newEntries: DartIterableInput<upstream12.OverlayEntry, Readonly<{ "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayEntry": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>>, options?: {above?: Readonly<{ "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayEntry": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined; below?: Readonly<{ "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayEntry": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined}): void;
debugIsVisible(entry: Readonly<{ "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayEntry": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>): boolean;
}
defineObject("flax.core/sdk_widgets#type:OverlayState", ["widget","context","mounted"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:OverlayState", "object", {"toStringShort":_flaxMemberParameters2,"toString":_flaxMemberParameters9,"toDiagnosticsNode":_flaxMemberParameters8,"debugFillProperties":_flaxMemberParameters5,"activate":_flaxMemberParameters2,"dispose":_flaxMemberParameters2,"initState":_flaxMemberParameters2,"didUpdateWidget":_flaxMemberParameters3,"reassemble":_flaxMemberParameters2,"setState":_flaxMemberParameters17,"deactivate":_flaxMemberParameters2,"build":_flaxMemberParameters0,"didChangeDependencies":_flaxMemberParameters2,"insert":_flaxMemberParameters277,"insertAll":_flaxMemberParameters278,"rearrange":_flaxMemberParameters279,"debugIsVisible":_flaxMemberParameters237}, {}), [], undefined, "flax.core/flutter#type:TickerProvider");
export function _OverlayStateFactory(): OverlayState {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:OverlayState", "", _flaxMemberParameters2, [], {}) as OverlayState;
}
export const OverlayState: typeof _OverlayStateFactory & _FlaxInstanceType<OverlayState> & _FlaxDartType<OverlayState, readonly ["class", "flax.core/sdk_widgets#type:OverlayState", readonly [], false]> = _flaxBindInstanceType<OverlayState, typeof _OverlayStateFactory>(_OverlayStateFactory, "flax.core/sdk_widgets#type:OverlayState", ["flax.core/components#type:State","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable","flax.core/sdk_widgets#type:TickerProviderStateMixin","flax.core/flutter#type:TickerProvider"]) as typeof _OverlayStateFactory & _FlaxInstanceType<OverlayState> & _FlaxDartType<OverlayState, readonly ["class", "flax.core/sdk_widgets#type:OverlayState", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "widget" | "context" | "mounted" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "createTicker" | "activate" | "dispose" | "initState" | "didUpdateWidget" | "reassemble" | "setState" | "deactivate" | "build" | "didChangeDependencies" | "insert" | "insertAll" | "rearrange" | "debugIsVisible" | "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayState" | "__flaxBound:package:flutter/src/widgets/framework.dart::State" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin" | "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider";
