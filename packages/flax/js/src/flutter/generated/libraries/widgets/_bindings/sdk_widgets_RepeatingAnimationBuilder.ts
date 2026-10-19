// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import '@flax/flutter/animation/_bindings/sdk_animation_Animatable';
import type * as upstream3 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream4 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_RepeatMode';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RepeatMode';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
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
import { _flaxMemberParameters2, _flaxMemberParameters5, _flaxMemberParameters6, _flaxMemberParameters7, _flaxMemberParameters8 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RepeatingAnimationBuilder<T extends {} = {}> extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{ "__flaxBound:package:flutter/src/widgets/repeating_animation_builder.dart::RepeatingAnimationBuilder": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __RepeatingAnimationBuilder: unique symbol;
readonly [_flaxDartTypeValue]: RepeatingAnimationBuilder<T>;

readonly animatable: upstream2.Animatable<T>;
readonly duration: upstream3.Duration;
readonly curve: upstream4.Curve;
readonly builder: ((context: upstream6.BuildContext, value: (T | DartInput<T>), child: Widget | null) => Widget);
readonly child: Widget | null;
readonly repeatMode: upstream5.RepeatMode;
readonly paused: boolean;
readonly key: upstream1.Key | null;
createState(): upstream7.State<RepeatingAnimationBuilder<T>>;
createElement(): upstream8.StatefulElement;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream10.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream10.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream12.DiagnosticsTreeStyle | null | undefined}): upstream11.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream11.DiagnosticsNode>;
}
defineObject("flax.core/sdk_widgets#type:RepeatingAnimationBuilder", ["animatable","duration","curve","builder","child","repeatMode","paused","key"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:RepeatingAnimationBuilder", "object", {"createState":_flaxMemberParameters2,"createElement":_flaxMemberParameters2,"toStringShort":_flaxMemberParameters2,"debugFillProperties":_flaxMemberParameters5,"toStringShallow":_flaxMemberParameters6,"toStringDeep":_flaxMemberParameters7,"toDiagnosticsNode":_flaxMemberParameters8,"debugDescribeChildren":_flaxMemberParameters2}, {}), []);
export function _RepeatingAnimationBuilderFactory<T extends {} = {}>(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; animatable: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_FlaxDartOutput<T>] }>; duration: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream3.Duration] }>; curve?: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> | undefined; repeatMode?: upstream5.RepeatMode | undefined; paused?: boolean | undefined; builder: ((context: upstream6.BuildContext, value: _FlaxDartOutput<T>, child: Widget | null) => Widget); child?: Widget | null | undefined }): RepeatingAnimationBuilder<T>;
export function _RepeatingAnimationBuilderFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; animatable: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [{}] }>; duration: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream3.Duration] }>; curve?: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> | undefined; repeatMode?: upstream5.RepeatMode | undefined; paused?: boolean | undefined; builder: ((context: upstream6.BuildContext, value: {}, child: Widget | null) => Widget); child?: Widget | null | undefined }): RepeatingAnimationBuilder<{}>;
export function _RepeatingAnimationBuilderFactory(options: Record<string, unknown>): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:RepeatingAnimationBuilder", "", [{"name":"key"},{"name":"animatable","required":true},{"name":"duration","required":true},{"name":"curve"},{"name":"repeatMode"},{"name":"paused"},{"name":"builder","required":true},{"name":"child"}], [], options) as RepeatingAnimationBuilder<{}>;
}
export const RepeatingAnimationBuilder: typeof _RepeatingAnimationBuilderFactory & _FlaxInstanceType<RepeatingAnimationBuilder<{}>> & _FlaxDartType<RepeatingAnimationBuilder<{}>, readonly ["class", "flax.core/sdk_widgets#type:RepeatingAnimationBuilder", readonly [readonly ["any", null, readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<RepeatingAnimationBuilder<{}>, typeof _RepeatingAnimationBuilderFactory>(_RepeatingAnimationBuilderFactory, "flax.core/sdk_widgets#type:RepeatingAnimationBuilder", ["flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _RepeatingAnimationBuilderFactory & _FlaxInstanceType<RepeatingAnimationBuilder<{}>> & _FlaxDartType<RepeatingAnimationBuilder<{}>, readonly ["class", "flax.core/sdk_widgets#type:RepeatingAnimationBuilder", readonly [readonly ["any", null, readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(RepeatingAnimationBuilder, "flax.core/sdk_widgets#type:RepeatingAnimationBuilder", {"category":"object","constructors":{"":[{"name":"key","required":false,"positional":false},{"name":"animatable","required":true,"positional":false},{"name":"duration","required":true,"positional":false},{"name":"curve","required":false,"positional":false},{"name":"repeatMode","required":false,"positional":false},{"name":"paused","required":false,"positional":false},{"name":"builder","required":true,"positional":false},{"name":"child","required":false,"positional":false}]}});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "animatable" | "duration" | "curve" | "builder" | "child" | "repeatMode" | "paused" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/repeating_animation_builder.dart::RepeatingAnimationBuilder" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? {(options: {key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined;animatable: Readonly<{ "__flaxBound:package:flutter/src/animation/tween.dart::Animatable": readonly [_Selected0] }>;duration: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream3.Duration] }>;curve?: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> | undefined;repeatMode?: upstream5.RepeatMode | undefined;paused?: boolean | undefined;builder: ((context: upstream6.BuildContext, value: _Selected0, child: Widget | null) => Widget);child?: Widget | null | undefined}): RepeatingAnimationBuilder<_Selected0>;readonly prototype: RepeatingAnimationBuilder<_Selected0>;} & _FlaxInstanceType<RepeatingAnimationBuilder<_Selected0>> & _FlaxDartType<RepeatingAnimationBuilder<_Selected0>> : never : never; }
