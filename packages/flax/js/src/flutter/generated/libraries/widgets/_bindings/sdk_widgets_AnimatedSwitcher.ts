// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream3 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream4 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { _flaxMemberParameters22, _flaxMemberParameters23, _flaxMemberParameters2 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AnimatedSwitcher extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{ "__flaxBound:package:flutter/src/widgets/animated_switcher.dart::AnimatedSwitcher": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __AnimatedSwitcher: unique symbol;
readonly [_flaxDartTypeValue]: AnimatedSwitcher;

readonly child: Widget | null;
readonly duration: upstream2.Duration;
readonly reverseDuration: upstream2.Duration | null;
readonly switchInCurve: upstream3.Curve;
readonly switchOutCurve: upstream3.Curve;
readonly transitionBuilder: ((child: Widget, animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>) => Widget);
readonly layoutBuilder: ((currentChild: Widget | null, previousChildren: DartListInput<Widget, Widget>) => Widget);
readonly key: upstream1.Key | null;
createState(): upstream5.State<AnimatedSwitcher>;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
createElement(): upstream7.StatefulElement;
toStringShort(): string;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream8.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream8.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream10.DiagnosticsTreeStyle | null | undefined}): upstream9.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream9.DiagnosticsNode>;
}
defineObject("flax.core/sdk_widgets#type:AnimatedSwitcher", ["child","duration","reverseDuration","switchInCurve","switchOutCurve","transitionBuilder","layoutBuilder","key"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:AnimatedSwitcher", "object", {"createState":_flaxMemberParameters2,"createElement":_flaxMemberParameters2}, {}), [], undefined, "flax.core/sdk_widgets#type:Widget");
export function _AnimatedSwitcherFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; child?: Widget | null | undefined; duration: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration] }>; reverseDuration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream2.Duration] }> | null | undefined; switchInCurve?: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> | undefined; switchOutCurve?: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> | undefined; transitionBuilder?: ((child: Widget, animation: upstream4.Animation<number>) => Widget) | undefined; layoutBuilder?: ((currentChild: Widget | null, previousChildren: DartList<Widget>) => Widget) | undefined }): AnimatedSwitcher {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:AnimatedSwitcher", "", [{"name":"key"},{"name":"child"},{"name":"duration","required":true},{"name":"reverseDuration"},{"name":"switchInCurve"},{"name":"switchOutCurve"},{"name":"transitionBuilder"},{"name":"layoutBuilder"}], [], options) as AnimatedSwitcher;
}
export declare namespace _AnimatedSwitcherFactory { const __flaxJsx: { readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _AnimatedSwitcherFactory>[0]>), "child"> & ({ "child"?: (globalThis.NonNullable<globalThis.Parameters<typeof _AnimatedSwitcherFactory>[0]>)["child"]; children?: never } | { "child"?: never; children?: (globalThis.NonNullable<globalThis.Parameters<typeof _AnimatedSwitcherFactory>[0]>)["child"] }); readonly slot: "child"; readonly many: false; }; }
export namespace _AnimatedSwitcherFactory { export function defaultTransitionBuilder(child: Widget, animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>): Widget {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:AnimatedSwitcher.defaultTransitionBuilder", [child, animation], _flaxMemberParameters22);
return _flaxResult as Widget;
} }
export namespace _AnimatedSwitcherFactory { export function defaultLayoutBuilder(currentChild: Widget | null, previousChildren: DartListInput<Widget, Widget>): Widget {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:AnimatedSwitcher.defaultLayoutBuilder", [currentChild, previousChildren], _flaxMemberParameters23);
return _flaxResult as Widget;
} }
export const AnimatedSwitcher: typeof _AnimatedSwitcherFactory & _FlaxInstanceType<AnimatedSwitcher> & _FlaxDartType<AnimatedSwitcher, readonly ["class", "flax.core/sdk_widgets#type:AnimatedSwitcher", readonly [], false]> = _flaxBindInstanceType<AnimatedSwitcher, typeof _AnimatedSwitcherFactory>(_AnimatedSwitcherFactory, "flax.core/sdk_widgets#type:AnimatedSwitcher", ["flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _AnimatedSwitcherFactory & _FlaxInstanceType<AnimatedSwitcher> & _FlaxDartType<AnimatedSwitcher, readonly ["class", "flax.core/sdk_widgets#type:AnimatedSwitcher", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "child" | "duration" | "reverseDuration" | "switchInCurve" | "switchOutCurve" | "transitionBuilder" | "layoutBuilder" | "key" | "createState" | "debugFillProperties" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/animated_switcher.dart::AnimatedSwitcher" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
