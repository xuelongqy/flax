// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream1 from '@flax/flutter/material/_bindings/sdk_material_RefreshIndicator';
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
import { _flaxMemberParameters2, _flaxMemberParameters3, _flaxMemberParameters4, _flaxMemberParameters5, _flaxMemberParameters0, _flaxMemberParameters102, _flaxMemberParameters9, _flaxMemberParameters241 } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RefreshIndicatorState extends Omit<upstream0.State<upstream1.RefreshIndicator>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.State<upstream1.RefreshIndicator>>, Omit<upstream3.TickerProviderStateMixin<upstream1.RefreshIndicator>, _flaxOwnMembers0 | keyof upstream0.State<upstream1.RefreshIndicator> | keyof upstream2.Diagnosticable>, Omit<upstream4.TickerProvider, _flaxOwnMembers0 | keyof upstream0.State<upstream1.RefreshIndicator> | keyof upstream2.Diagnosticable | keyof upstream3.TickerProviderStateMixin<upstream1.RefreshIndicator>>, Readonly<{ "__flaxBound:package:flutter/src/material/refresh_indicator.dart::RefreshIndicatorState": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream1.RefreshIndicator] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin": readonly [upstream1.RefreshIndicator] }>, Readonly<{ "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [] }> { readonly __RefreshIndicatorState: unique symbol;
readonly [_flaxDartTypeValue]: RefreshIndicatorState;

readonly widget: upstream1.RefreshIndicator;
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
didUpdateWidget(oldWidget: upstream1.RefreshIndicator): void;
reassemble(): void;
setState(fn: (() => void)): void;
deactivate(): void;
build(context: upstream5.BuildContext): Widget;
didChangeDependencies(): void;
show(options?: {atTop?: boolean | undefined}): Promise<void>;
}
defineObject("flax.core/sdk_material#type:RefreshIndicatorState", ["widget","context","mounted"], [], _flaxBindingMethods("flax.core/sdk_material#type:RefreshIndicatorState", "object", {"toStringShort":_flaxMemberParameters2,"toString":_flaxMemberParameters3,"toDiagnosticsNode":_flaxMemberParameters4,"debugFillProperties":_flaxMemberParameters5,"activate":_flaxMemberParameters2,"dispose":_flaxMemberParameters2,"initState":_flaxMemberParameters2,"didUpdateWidget":_flaxMemberParameters0,"reassemble":_flaxMemberParameters2,"setState":_flaxMemberParameters102,"deactivate":_flaxMemberParameters2,"build":_flaxMemberParameters9,"didChangeDependencies":_flaxMemberParameters2,"show":_flaxMemberParameters241}, {}), [], undefined, "flax.core/flutter#type:TickerProvider");
export function _RefreshIndicatorStateFactory(): RefreshIndicatorState {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_material#type:RefreshIndicatorState", "", _flaxMemberParameters2, [], {}) as RefreshIndicatorState;
}
export const RefreshIndicatorState: typeof _RefreshIndicatorStateFactory & _FlaxInstanceType<RefreshIndicatorState> & _FlaxDartType<RefreshIndicatorState, readonly ["class", "flax.core/sdk_material#type:RefreshIndicatorState", readonly [], false]> = _flaxBindInstanceType<RefreshIndicatorState, typeof _RefreshIndicatorStateFactory>(_RefreshIndicatorStateFactory, "flax.core/sdk_material#type:RefreshIndicatorState", ["flax.core/components#type:State","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable","flax.core/sdk_widgets#type:TickerProviderStateMixin","flax.core/flutter#type:TickerProvider"]) as typeof _RefreshIndicatorStateFactory & _FlaxInstanceType<RefreshIndicatorState> & _FlaxDartType<RefreshIndicatorState, readonly ["class", "flax.core/sdk_material#type:RefreshIndicatorState", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "widget" | "context" | "mounted" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "createTicker" | "activate" | "dispose" | "initState" | "didUpdateWidget" | "reassemble" | "setState" | "deactivate" | "build" | "didChangeDependencies" | "show" | "__flaxBound:package:flutter/src/material/refresh_indicator.dart::RefreshIndicatorState" | "__flaxBound:package:flutter/src/widgets/framework.dart::State" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin" | "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider";
