// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream3 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_Axis';
import '@flax/flutter/painting/_bindings/flutter_Axis';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import type * as upstream7 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream8 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream9 from '@flax/flutter/rendering/_bindings/sdk_rendering_ScrollCacheExtent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ScrollCacheExtent';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/sdk_widgets_AnimatedListState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_AnimatedListState';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream16 from '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { _flaxMemberParameters0, _flaxMemberParameters2 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AnimatedList extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{ "__flaxBound:package:flutter/src/widgets/animated_scroll_view.dart::AnimatedList": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/animated_scroll_view.dart::_AnimatedScrollView": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __AnimatedList: unique symbol;
readonly [_flaxDartTypeValue]: AnimatedList;

readonly itemBuilder: ((context: upstream2.BuildContext, index: number, animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>) => Widget);
readonly removedSeparatorBuilder: ((context: upstream2.BuildContext, index: number, animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>) => Widget) | null;
readonly initialItemCount: number;
readonly scrollDirection: upstream4.Axis;
readonly reverse: boolean;
readonly controller: upstream5.ScrollController | null;
readonly primary: boolean | null;
readonly physics: upstream6.ScrollPhysics | null;
readonly shrinkWrap: boolean;
readonly padding: upstream7.EdgeInsetsGeometry | null;
readonly clipBehavior: upstream8.Clip;
readonly scrollCacheExtent: upstream9.ScrollCacheExtent | null;
readonly key: upstream1.Key | null;
createState(): upstream10.AnimatedListState;
createElement(): upstream11.StatefulElement;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream13.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream13.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream15.DiagnosticsTreeStyle | null | undefined}): upstream14.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream14.DiagnosticsNode>;
}
defineObject("flax.core/sdk_widgets#type:AnimatedList", ["itemBuilder","removedSeparatorBuilder","initialItemCount","scrollDirection","reverse","controller","primary","physics","shrinkWrap","padding","clipBehavior","scrollCacheExtent","key"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:AnimatedList", "object", {"createState":_flaxMemberParameters2,"createElement":_flaxMemberParameters2}, {}), [], undefined, "flax.core/sdk_widgets#type:Widget");
export function _AnimatedListFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; itemBuilder: ((context: upstream2.BuildContext, index: number, animation: upstream3.Animation<number>) => Widget); initialItemCount?: number | undefined; scrollDirection?: upstream4.Axis | undefined; reverse?: boolean | undefined; controller?: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined; primary?: boolean | null | undefined; physics?: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null | undefined; shrinkWrap?: boolean | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; clipBehavior?: upstream8.Clip | undefined; scrollCacheExtent?: Readonly<{ "__flaxBound:package:flutter/src/rendering/viewport.dart::ScrollCacheExtent": readonly [] }> | null | undefined }): AnimatedList {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:AnimatedList", "", [{"name":"key"},{"name":"itemBuilder","required":true},{"name":"initialItemCount"},{"name":"scrollDirection"},{"name":"reverse"},{"name":"controller"},{"name":"primary"},{"name":"physics"},{"name":"shrinkWrap"},{"name":"padding"},{"name":"clipBehavior"},{"name":"scrollCacheExtent"}], [], options) as AnimatedList;
}
export declare namespace _AnimatedListFactory { const __flaxJsx: { readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof _AnimatedListFactory>[0]>); readonly slot: null; readonly many: false; }; }
export namespace _AnimatedListFactory {
export function separated(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; itemBuilder: ((context: upstream2.BuildContext, index: number, animation: upstream3.Animation<number>) => Widget); separatorBuilder: ((context: upstream2.BuildContext, index: number, animation: upstream3.Animation<number>) => Widget); removedSeparatorBuilder: ((context: upstream2.BuildContext, index: number, animation: upstream3.Animation<number>) => Widget); initialItemCount?: number | undefined; scrollDirection?: upstream4.Axis | undefined; reverse?: boolean | undefined; controller?: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined; primary?: boolean | null | undefined; physics?: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null | undefined; shrinkWrap?: boolean | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; clipBehavior?: upstream8.Clip | undefined; scrollCacheExtent?: Readonly<{ "__flaxBound:package:flutter/src/rendering/viewport.dart::ScrollCacheExtent": readonly [] }> | null | undefined }): AnimatedList {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:AnimatedList", "separated", [{"name":"key"},{"name":"itemBuilder","required":true},{"name":"separatorBuilder","required":true},{"name":"removedSeparatorBuilder","required":true},{"name":"initialItemCount"},{"name":"scrollDirection"},{"name":"reverse"},{"name":"controller"},{"name":"primary"},{"name":"physics"},{"name":"shrinkWrap"},{"name":"padding"},{"name":"clipBehavior"},{"name":"scrollCacheExtent"}], [], options) as AnimatedList;
}
export declare namespace separated { const __flaxJsx: { readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof separated>[0]>); readonly slot: null; readonly many: false; }; }
}
export namespace _AnimatedListFactory { export function of(context: upstream2.BuildContext): upstream10.AnimatedListState {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:AnimatedList.of", [contextHandle(context, "flax.core/flutter#type:BuildContext")], _flaxMemberParameters0);
return _flaxResult as upstream10.AnimatedListState;
} }
export namespace _AnimatedListFactory { export function maybeOf(context: upstream2.BuildContext): upstream10.AnimatedListState | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:AnimatedList.maybeOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")], _flaxMemberParameters0);
return _flaxResult as upstream10.AnimatedListState | null;
} }
export const AnimatedList: typeof _AnimatedListFactory & _FlaxInstanceType<AnimatedList> & _FlaxDartType<AnimatedList, readonly ["class", "flax.core/sdk_widgets#type:AnimatedList", readonly [], false]> = _flaxBindInstanceType<AnimatedList, typeof _AnimatedListFactory>(_AnimatedListFactory, "flax.core/sdk_widgets#type:AnimatedList", ["package:flutter/src/widgets/animated_scroll_view.dart::_AnimatedScrollView","flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _AnimatedListFactory & _FlaxInstanceType<AnimatedList> & _FlaxDartType<AnimatedList, readonly ["class", "flax.core/sdk_widgets#type:AnimatedList", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "itemBuilder" | "removedSeparatorBuilder" | "initialItemCount" | "scrollDirection" | "reverse" | "controller" | "primary" | "physics" | "shrinkWrap" | "padding" | "clipBehavior" | "scrollCacheExtent" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/animated_scroll_view.dart::AnimatedList" | "__flaxBound:package:flutter/src/widgets/animated_scroll_view.dart::_AnimatedScrollView" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
