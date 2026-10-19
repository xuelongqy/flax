// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream1 from '@flax/flutter/material/_bindings/sdk_material_DrawerController';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_SingleTickerProviderStateMixin';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SingleTickerProviderStateMixin';
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
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"minLevel"}] as const;
const _flaxMemberParameters2 = [{"name":"name"},{"name":"style"}] as const;
const _flaxMemberParameters3 = [{"name":"properties","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"oldWidget","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"fn","required":true,"positional":true}] as const;
const _flaxMemberParameters6 = [{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"}] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DrawerControllerState extends Omit<upstream0.State<upstream1.DrawerController>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.State<upstream1.DrawerController>>, Omit<upstream3.SingleTickerProviderStateMixin<upstream1.DrawerController>, _flaxOwnMembers0 | keyof upstream0.State<upstream1.DrawerController> | keyof upstream2.Diagnosticable>, Omit<upstream4.TickerProvider, _flaxOwnMembers0 | keyof upstream0.State<upstream1.DrawerController> | keyof upstream2.Diagnosticable | keyof upstream3.SingleTickerProviderStateMixin<upstream1.DrawerController>>, Readonly<{ "__flaxBound:package:flutter/src/material/drawer.dart::DrawerControllerState": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream1.DrawerController] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::SingleTickerProviderStateMixin": readonly [upstream1.DrawerController] }>, Readonly<{ "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [] }> { readonly __DrawerControllerState: unique symbol;
readonly [_flaxDartTypeValue]: DrawerControllerState;

readonly widget: upstream1.DrawerController;
readonly context: upstream5.BuildContext;
readonly mounted: boolean;
toStringShort(): string;
toString(options?: {minLevel?: upstream6.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream8.DiagnosticsTreeStyle | null | undefined}): upstream7.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
createTicker(onTick: ((elapsed: upstream11.Duration) => void)): upstream10.Ticker;
dispose(): void;
activate(): void;
initState(): void;
didUpdateWidget(oldWidget: upstream1.DrawerController): void;
reassemble(): void;
setState(fn: (() => void)): void;
deactivate(): void;
build(context: upstream5.BuildContext): Widget;
didChangeDependencies(): void;
open(): void;
close(): void;
}
defineObject("flax.core/sdk_material#type:DrawerControllerState", ["widget","context","mounted"], [], _flaxBindingMethods("flax.core/sdk_material#type:DrawerControllerState", "object", {"toStringShort":_flaxMemberParameters0,"toString":_flaxMemberParameters1,"toDiagnosticsNode":_flaxMemberParameters2,"debugFillProperties":_flaxMemberParameters3,"dispose":_flaxMemberParameters0,"activate":_flaxMemberParameters0,"initState":_flaxMemberParameters0,"didUpdateWidget":_flaxMemberParameters4,"reassemble":_flaxMemberParameters0,"setState":_flaxMemberParameters5,"deactivate":_flaxMemberParameters0,"build":_flaxMemberParameters6,"didChangeDependencies":_flaxMemberParameters0,"open":_flaxMemberParameters0,"close":_flaxMemberParameters0}, {}), [], undefined, "flax.core/flutter#type:TickerProvider");
export function _DrawerControllerStateFactory(): DrawerControllerState {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_material#type:DrawerControllerState", "", _flaxMemberParameters0, [], {}) as DrawerControllerState;
}
export const DrawerControllerState: typeof _DrawerControllerStateFactory & _FlaxInstanceType<DrawerControllerState> & _FlaxDartType<DrawerControllerState, readonly ["class", "flax.core/sdk_material#type:DrawerControllerState", readonly [], false]> = _flaxBindInstanceType<DrawerControllerState, typeof _DrawerControllerStateFactory>(_DrawerControllerStateFactory, "flax.core/sdk_material#type:DrawerControllerState", ["flax.core/components#type:State","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable","flax.core/sdk_widgets#type:SingleTickerProviderStateMixin","flax.core/flutter#type:TickerProvider"]) as typeof _DrawerControllerStateFactory & _FlaxInstanceType<DrawerControllerState> & _FlaxDartType<DrawerControllerState, readonly ["class", "flax.core/sdk_material#type:DrawerControllerState", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "widget" | "context" | "mounted" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "createTicker" | "dispose" | "activate" | "initState" | "didUpdateWidget" | "reassemble" | "setState" | "deactivate" | "build" | "didChangeDependencies" | "open" | "close" | "__flaxBound:package:flutter/src/material/drawer.dart::DrawerControllerState" | "__flaxBound:package:flutter/src/widgets/framework.dart::State" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::SingleTickerProviderStateMixin" | "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider";
