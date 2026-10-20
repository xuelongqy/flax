// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_TextSelectionGestureDetectorBuilderDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_TextSelectionGestureDetectorBuilderDelegate';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_EditableTextState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_EditableTextState';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderEditable';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderEditable';
import type * as upstream3 from '@flax/flutter/gestures/_bindings/sdk_gestures_TapDragDownDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_TapDragDownDetails';
import type * as upstream4 from '@flax/flutter/gestures/_bindings/sdk_gestures_ForcePressDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_ForcePressDetails';
import type * as upstream5 from '@flax/flutter/gestures/_bindings/sdk_gestures_TapDragUpDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_TapDragUpDetails';
import type * as upstream6 from '@flax/flutter/gestures/_bindings/sdk_gestures_LongPressStartDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_LongPressStartDetails';
import type * as upstream7 from '@flax/flutter/gestures/_bindings/sdk_gestures_LongPressMoveUpdateDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_LongPressMoveUpdateDetails';
import type * as upstream8 from '@flax/flutter/gestures/_bindings/sdk_gestures_LongPressEndDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_LongPressEndDetails';
import type * as upstream9 from '@flax/flutter/gestures/_bindings/sdk_gestures_TapDownDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_TapDownDetails';
import type * as upstream10 from '@flax/flutter/gestures/_bindings/sdk_gestures_TapDragStartDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_TapDragStartDetails';
import type * as upstream11 from '@flax/flutter/gestures/_bindings/sdk_gestures_TapDragUpdateDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_TapDragUpdateDetails';
import type * as upstream12 from '@flax/flutter/gestures/_bindings/sdk_gestures_TapDragEndDetails';
import '@flax/flutter/gestures/_bindings/sdk_gestures_TapDragEndDetails';
import type * as upstream13 from '@flax/flutter/rendering/_bindings/flutter_HitTestBehavior';
import '@flax/flutter/rendering/_bindings/flutter_HitTestBehavior';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import { _flaxMemberParameters2, _flaxMemberParameters272, _flaxMemberParameters406, _flaxMemberParameters407 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextSelectionGestureDetectorBuilder extends Readonly<{ "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionGestureDetectorBuilder": readonly [] }> { readonly __TextSelectionGestureDetectorBuilder: unique symbol;
readonly [_flaxDartTypeValue]: TextSelectionGestureDetectorBuilder;

readonly delegate: upstream0.TextSelectionGestureDetectorBuilderDelegate;
readonly shouldShowSelectionToolbar: boolean;
readonly shouldShowSelectionHandles: boolean;
readonly editableText: upstream1.EditableTextState;
readonly renderEditable: upstream2.RenderEditable;
readonly onUserTapAlwaysCalled: boolean;
onTapTrackStart(): void;
onTapTrackReset(): void;
onTapDown(details: Readonly<{ "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragDownDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
onForcePressStart(details: Readonly<{ "__flaxBound:package:flutter/src/gestures/force_press.dart::ForcePressDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
onForcePressEnd(details: Readonly<{ "__flaxBound:package:flutter/src/gestures/force_press.dart::ForcePressDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
onUserTap(): void;
onSingleTapUp(details: Readonly<{ "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragUpDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
onSingleTapCancel(): void;
onSingleLongTapStart(details: Readonly<{ "__flaxBound:package:flutter/src/gestures/long_press.dart::LongPressStartDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
onSingleLongTapMoveUpdate(details: Readonly<{ "__flaxBound:package:flutter/src/gestures/long_press.dart::LongPressMoveUpdateDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
onSingleLongTapEnd(details: Readonly<{ "__flaxBound:package:flutter/src/gestures/long_press.dart::LongPressEndDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
onSingleLongTapCancel(): void;
onSecondaryTap(): void;
onSecondaryTapDown(details: Readonly<{ "__flaxBound:package:flutter/src/gestures/tap.dart::TapDownDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
onDoubleTapDown(details: Readonly<{ "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragDownDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
onTripleTapDown(details: Readonly<{ "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragDownDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
onDragSelectionStart(details: Readonly<{ "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragStartDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
onDragSelectionUpdate(details: Readonly<{ "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragUpdateDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
onDragSelectionEnd(details: Readonly<{ "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragEndDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
buildGestureDetector(options: {behavior?: upstream13.HitTestBehavior | null | undefined; child: Widget; key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined}): Widget;
}
defineObject("flax.core/sdk_widgets#type:TextSelectionGestureDetectorBuilder", ["delegate","shouldShowSelectionToolbar","shouldShowSelectionHandles","editableText","renderEditable","onUserTapAlwaysCalled"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:TextSelectionGestureDetectorBuilder", "object", {"onTapTrackStart":_flaxMemberParameters2,"onTapTrackReset":_flaxMemberParameters2,"onTapDown":_flaxMemberParameters272,"onForcePressStart":_flaxMemberParameters272,"onForcePressEnd":_flaxMemberParameters272,"onUserTap":_flaxMemberParameters2,"onSingleTapUp":_flaxMemberParameters272,"onSingleTapCancel":_flaxMemberParameters2,"onSingleLongTapStart":_flaxMemberParameters272,"onSingleLongTapMoveUpdate":_flaxMemberParameters272,"onSingleLongTapEnd":_flaxMemberParameters272,"onSingleLongTapCancel":_flaxMemberParameters2,"onSecondaryTap":_flaxMemberParameters2,"onSecondaryTapDown":_flaxMemberParameters272,"onDoubleTapDown":_flaxMemberParameters272,"onTripleTapDown":_flaxMemberParameters272,"onDragSelectionStart":_flaxMemberParameters272,"onDragSelectionUpdate":_flaxMemberParameters272,"onDragSelectionEnd":_flaxMemberParameters272,"buildGestureDetector":_flaxMemberParameters406}, {}), []);
export function _TextSelectionGestureDetectorBuilderFactory(options: { delegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionGestureDetectorBuilderDelegate": readonly [] }> }): TextSelectionGestureDetectorBuilder {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:TextSelectionGestureDetectorBuilder", "", [{"name":"delegate","required":true}], [], options) as TextSelectionGestureDetectorBuilder;
}
const _TextSelectionGestureDetectorBuilderProxy = {type: "flax.core/sdk_widgets#type:TextSelectionGestureDetectorBuilder", parameters: _flaxMemberParameters407, constructors: {"": _flaxMemberParameters407}, methods: {"onTapTrackStart":_flaxMemberParameters2,"onTapTrackReset":_flaxMemberParameters2,"onTapDown":_flaxMemberParameters272,"onForcePressStart":_flaxMemberParameters272,"onForcePressEnd":_flaxMemberParameters272,"onUserTap":_flaxMemberParameters2,"onSingleTapUp":_flaxMemberParameters272,"onSingleTapCancel":_flaxMemberParameters2,"onSingleLongTapStart":_flaxMemberParameters272,"onSingleLongTapMoveUpdate":_flaxMemberParameters272,"onSingleLongTapEnd":_flaxMemberParameters272,"onSingleLongTapCancel":_flaxMemberParameters2,"onSecondaryTap":_flaxMemberParameters2,"onSecondaryTapDown":_flaxMemberParameters272,"onDoubleTapDown":_flaxMemberParameters272,"onTripleTapDown":_flaxMemberParameters272,"onDragSelectionStart":_flaxMemberParameters272,"onDragSelectionUpdate":_flaxMemberParameters272,"onDragSelectionEnd":_flaxMemberParameters272,"buildGestureDetector":_flaxMemberParameters406}, getters: ["delegate","shouldShowSelectionToolbar","shouldShowSelectionHandles","editableText","renderEditable","onUserTapAlwaysCalled"], setters: [], contextMembers: [], superMembers: ["get:delegate","get:shouldShowSelectionToolbar","get:shouldShowSelectionHandles","get:editableText","get:renderEditable","get:onUserTapAlwaysCalled","onTapTrackStart","onTapTrackReset","onTapDown","onForcePressStart","onForcePressEnd","onUserTap","onSingleTapUp","onSingleTapCancel","onSingleLongTapStart","onSingleLongTapMoveUpdate","onSingleLongTapEnd","onSingleLongTapCancel","onSecondaryTap","onSecondaryTapDown","onDoubleTapDown","onTripleTapDown","onDragSelectionStart","onDragSelectionUpdate","onDragSelectionEnd","buildGestureDetector"]} as const;
export interface _TextSelectionGestureDetectorBuilderNative extends TextSelectionGestureDetectorBuilder {
readonly [_flaxDartTypeValue]: _TextSelectionGestureDetectorBuilderNative;

onTapTrackStart(): void;
onTapTrackReset(): void;
onTapDown(details: Readonly<{ "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragDownDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
onForcePressStart(details: Readonly<{ "__flaxBound:package:flutter/src/gestures/force_press.dart::ForcePressDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
onForcePressEnd(details: Readonly<{ "__flaxBound:package:flutter/src/gestures/force_press.dart::ForcePressDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
onUserTap(): void;
onSingleTapUp(details: Readonly<{ "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragUpDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
onSingleTapCancel(): void;
onSingleLongTapStart(details: Readonly<{ "__flaxBound:package:flutter/src/gestures/long_press.dart::LongPressStartDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
onSingleLongTapMoveUpdate(details: Readonly<{ "__flaxBound:package:flutter/src/gestures/long_press.dart::LongPressMoveUpdateDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
onSingleLongTapEnd(details: Readonly<{ "__flaxBound:package:flutter/src/gestures/long_press.dart::LongPressEndDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
onSingleLongTapCancel(): void;
onSecondaryTap(): void;
onSecondaryTapDown(details: Readonly<{ "__flaxBound:package:flutter/src/gestures/tap.dart::TapDownDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
onDoubleTapDown(details: Readonly<{ "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragDownDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
onTripleTapDown(details: Readonly<{ "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragDownDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
onDragSelectionStart(details: Readonly<{ "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragStartDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
onDragSelectionUpdate(details: Readonly<{ "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragUpdateDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
onDragSelectionEnd(details: Readonly<{ "__flaxBound:package:flutter/src/gestures/tap_and_drag.dart::TapDragEndDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/gesture_details.dart::PositionedGestureDetails": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
buildGestureDetector(options: {key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; behavior?: upstream13.HitTestBehavior | null | undefined; child: Widget}): Widget;
get delegate(): upstream0.TextSelectionGestureDetectorBuilderDelegate;
get shouldShowSelectionToolbar(): boolean;
get shouldShowSelectionHandles(): boolean;
get editableText(): upstream1.EditableTextState;
get renderEditable(): upstream2.RenderEditable;
get onUserTapAlwaysCalled(): boolean;
}
export abstract class _TextSelectionGestureDetectorBuilderNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextSelectionGestureDetectorBuilder>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TextSelectionGestureDetectorBuilder;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:TextSelectionGestureDetectorBuilder", readonly [], false];
constructor(options: {delegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionGestureDetectorBuilderDelegate": readonly [] }>}) { super(_TextSelectionGestureDetectorBuilderProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_TextSelectionGestureDetectorBuilderNative.prototype, _TextSelectionGestureDetectorBuilderProxy);
export namespace _TextSelectionGestureDetectorBuilderFactory { export function implement(args: [options: {delegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionGestureDetectorBuilderDelegate": readonly [] }>}], implementation: {}): TextSelectionGestureDetectorBuilder {
return constructProxy(_TextSelectionGestureDetectorBuilderProxy, args, implementation) as TextSelectionGestureDetectorBuilder; } }
const _TextSelectionGestureDetectorBuilderBinding = _flaxProxyFactory(_TextSelectionGestureDetectorBuilderFactory, _TextSelectionGestureDetectorBuilderNative) as unknown as typeof _TextSelectionGestureDetectorBuilderFactory & (new(options: {delegate: Readonly<{ "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionGestureDetectorBuilderDelegate": readonly [] }>}) => _TextSelectionGestureDetectorBuilderNative);
export const TextSelectionGestureDetectorBuilder: typeof _TextSelectionGestureDetectorBuilderBinding & _FlaxInstanceType<TextSelectionGestureDetectorBuilder> & _FlaxDartType<TextSelectionGestureDetectorBuilder, readonly ["class", "flax.core/sdk_widgets#type:TextSelectionGestureDetectorBuilder", readonly [], false]> = _flaxBindInstanceType<TextSelectionGestureDetectorBuilder, typeof _TextSelectionGestureDetectorBuilderBinding>(_TextSelectionGestureDetectorBuilderBinding, "flax.core/sdk_widgets#type:TextSelectionGestureDetectorBuilder", ["dart:core::Object"]) as typeof _TextSelectionGestureDetectorBuilderBinding & _FlaxInstanceType<TextSelectionGestureDetectorBuilder> & _FlaxDartType<TextSelectionGestureDetectorBuilder, readonly ["class", "flax.core/sdk_widgets#type:TextSelectionGestureDetectorBuilder", readonly [], false]>;
