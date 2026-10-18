// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_RawGestureDetector';
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
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_GestureRecognizerFactory';
import '@flax/flutter/widgets/_bindings/sdk_widgets_GestureRecognizerFactory';
import type * as upstream9 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureRecognizer';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureRecognizer';
import type * as upstream10 from '@flax/dart/core/_bindings/flutter_Type';
import '@flax/dart/core/_bindings/flutter_Type';
import type * as upstream11 from '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsAction';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsAction';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"oldWidget","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"gestures","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"actions","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"}] as const;
const _flaxMemberParameters5 = [{"name":"fn","required":true,"positional":true}] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RawGestureDetectorState extends Omit<upstream0.State<upstream1.RawGestureDetector>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.State<upstream1.RawGestureDetector>>, Readonly<{ "__flaxBound:package:flutter/src/widgets/gesture_detector.dart::RawGestureDetectorState": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream1.RawGestureDetector] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __RawGestureDetectorState: unique symbol;
readonly [_flaxDartTypeValue]: RawGestureDetectorState;

readonly widget: upstream1.RawGestureDetector;
readonly context: upstream3.BuildContext;
readonly mounted: boolean;
toStringShort(): string;
toString(options?: {minLevel?: upstream4.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream6.DiagnosticsTreeStyle | null | undefined}): upstream5.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
initState(): void;
didUpdateWidget(oldWidget: upstream1.RawGestureDetector): void;
replaceGestureRecognizers(gestures: DartMapInput<upstream10.Type, upstream8.GestureRecognizerFactory<upstream9.GestureRecognizer>, Readonly<{ "__flaxBound:dart:core::Type": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/gesture_detector.dart::GestureRecognizerFactory": readonly [upstream9.GestureRecognizer] }>>): void;
replaceSemanticsActions(actions: DartSetInput<upstream11.SemanticsAction, Readonly<{ "__flaxBound:dart:ui::SemanticsAction": readonly [] }>>): void;
dispose(): void;
build(context: upstream3.BuildContext): Widget;
reassemble(): void;
setState(fn: (() => void)): void;
deactivate(): void;
activate(): void;
didChangeDependencies(): void;
}
defineObject("flax.core/sdk_widgets#type:RawGestureDetectorState", ["widget","context","mounted"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:RawGestureDetectorState", "object", {"initState":_flaxMemberParameters0,"didUpdateWidget":_flaxMemberParameters1,"replaceGestureRecognizers":_flaxMemberParameters2,"replaceSemanticsActions":_flaxMemberParameters3,"dispose":_flaxMemberParameters0,"build":_flaxMemberParameters4,"reassemble":_flaxMemberParameters0,"setState":_flaxMemberParameters5,"deactivate":_flaxMemberParameters0,"activate":_flaxMemberParameters0,"didChangeDependencies":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export function _RawGestureDetectorStateFactory(): RawGestureDetectorState {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:RawGestureDetectorState", "", [], [], {}) as RawGestureDetectorState;
}
export const RawGestureDetectorState: typeof _RawGestureDetectorStateFactory & _FlaxInstanceType<RawGestureDetectorState> & _FlaxDartType<RawGestureDetectorState, readonly ["class", "flax.core/sdk_widgets#type:RawGestureDetectorState", readonly [], false]> = _flaxBindInstanceType<RawGestureDetectorState, typeof _RawGestureDetectorStateFactory>(_RawGestureDetectorStateFactory, "flax.core/sdk_widgets#type:RawGestureDetectorState", ["flax.core/components#type:State","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _RawGestureDetectorStateFactory & _FlaxInstanceType<RawGestureDetectorState> & _FlaxDartType<RawGestureDetectorState, readonly ["class", "flax.core/sdk_widgets#type:RawGestureDetectorState", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "widget" | "context" | "mounted" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "initState" | "didUpdateWidget" | "replaceGestureRecognizers" | "replaceSemanticsActions" | "dispose" | "build" | "reassemble" | "setState" | "deactivate" | "activate" | "didChangeDependencies" | "__flaxBound:package:flutter/src/widgets/gesture_detector.dart::RawGestureDetectorState" | "__flaxBound:package:flutter/src/widgets/framework.dart::State" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
