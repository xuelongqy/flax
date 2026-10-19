// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_TwoDimensionalScrollable';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollableState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollableState';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { _flaxMemberParameters2, _flaxMemberParameters3, _flaxMemberParameters0, _flaxMemberParameters14 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TwoDimensionalScrollableState extends Omit<upstream0.State<upstream1.TwoDimensionalScrollable>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.State<upstream1.TwoDimensionalScrollable>>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scrollable.dart::TwoDimensionalScrollableState": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream1.TwoDimensionalScrollable] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __TwoDimensionalScrollableState: unique symbol;
readonly [_flaxDartTypeValue]: TwoDimensionalScrollableState;

readonly verticalScrollable: upstream3.ScrollableState;
readonly horizontalScrollable: upstream3.ScrollableState;
readonly widget: upstream1.TwoDimensionalScrollable;
readonly context: upstream4.BuildContext;
readonly mounted: boolean;
toStringShort(): string;
toString(options?: {minLevel?: upstream5.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream7.DiagnosticsTreeStyle | null | undefined}): upstream6.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
initState(): void;
didUpdateWidget(oldWidget: upstream1.TwoDimensionalScrollable): void;
build(context: upstream4.BuildContext): Widget;
dispose(): void;
reassemble(): void;
setState(fn: (() => void)): void;
deactivate(): void;
activate(): void;
didChangeDependencies(): void;
}
defineObject("flax.core/sdk_widgets#type:TwoDimensionalScrollableState", ["verticalScrollable","horizontalScrollable","widget","context","mounted"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:TwoDimensionalScrollableState", "object", {"initState":_flaxMemberParameters2,"didUpdateWidget":_flaxMemberParameters3,"build":_flaxMemberParameters0,"dispose":_flaxMemberParameters2,"reassemble":_flaxMemberParameters2,"setState":_flaxMemberParameters14,"deactivate":_flaxMemberParameters2,"activate":_flaxMemberParameters2,"didChangeDependencies":_flaxMemberParameters2}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export function _TwoDimensionalScrollableStateFactory(): TwoDimensionalScrollableState {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:TwoDimensionalScrollableState", "", _flaxMemberParameters2, [], {}) as TwoDimensionalScrollableState;
}
export const TwoDimensionalScrollableState: typeof _TwoDimensionalScrollableStateFactory & _FlaxInstanceType<TwoDimensionalScrollableState> & _FlaxDartType<TwoDimensionalScrollableState, readonly ["class", "flax.core/sdk_widgets#type:TwoDimensionalScrollableState", readonly [], false]> = _flaxBindInstanceType<TwoDimensionalScrollableState, typeof _TwoDimensionalScrollableStateFactory>(_TwoDimensionalScrollableStateFactory, "flax.core/sdk_widgets#type:TwoDimensionalScrollableState", ["flax.core/components#type:State","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _TwoDimensionalScrollableStateFactory & _FlaxInstanceType<TwoDimensionalScrollableState> & _FlaxDartType<TwoDimensionalScrollableState, readonly ["class", "flax.core/sdk_widgets#type:TwoDimensionalScrollableState", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "verticalScrollable" | "horizontalScrollable" | "widget" | "context" | "mounted" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "initState" | "didUpdateWidget" | "build" | "dispose" | "reassemble" | "setState" | "deactivate" | "activate" | "didChangeDependencies" | "__flaxBound:package:flutter/src/widgets/scrollable.dart::TwoDimensionalScrollableState" | "__flaxBound:package:flutter/src/widgets/framework.dart::State" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
