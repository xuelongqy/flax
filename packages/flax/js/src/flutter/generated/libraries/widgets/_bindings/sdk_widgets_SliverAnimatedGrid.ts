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
import type * as upstream4 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridDelegate';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverGridDelegate';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_SliverAnimatedGridState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SliverAnimatedGridState';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { _flaxMemberParameters0, _flaxMemberParameters2 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SliverAnimatedGrid extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{ "__flaxBound:package:flutter/src/widgets/animated_scroll_view.dart::SliverAnimatedGrid": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/animated_scroll_view.dart::_SliverAnimatedMultiBoxAdaptor": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __SliverAnimatedGrid: unique symbol;
readonly [_flaxDartTypeValue]: SliverAnimatedGrid;

readonly gridDelegate: upstream4.SliverGridDelegate;
readonly itemBuilder: ((context: upstream2.BuildContext, index: number, animation: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>) => Widget);
readonly findChildIndexCallback: ((key: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }>) => number | null) | null;
readonly initialItemCount: number;
readonly key: upstream1.Key | null;
createState(): upstream5.SliverAnimatedGridState;
createElement(): upstream6.StatefulElement;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream8.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream8.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream10.DiagnosticsTreeStyle | null | undefined}): upstream9.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream9.DiagnosticsNode>;
}
defineObject("flax.core/sdk_widgets#type:SliverAnimatedGrid", ["gridDelegate","itemBuilder","findChildIndexCallback","initialItemCount","key"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:SliverAnimatedGrid", "object", {"createState":_flaxMemberParameters2,"createElement":_flaxMemberParameters2}, {}), [], undefined, "flax.core/sdk_widgets#type:Widget");
export function _SliverAnimatedGridFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; itemBuilder: ((context: upstream2.BuildContext, index: number, animation: upstream3.Animation<number>) => Widget); gridDelegate: Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver_grid.dart::SliverGridDelegate": readonly [] }>; findChildIndexCallback?: ((key: upstream1.Key) => number | null) | null | undefined; initialItemCount?: number | undefined }): SliverAnimatedGrid {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:SliverAnimatedGrid", "", [{"name":"key"},{"name":"itemBuilder","required":true},{"name":"gridDelegate","required":true},{"name":"findChildIndexCallback"},{"name":"initialItemCount"}], [], options) as SliverAnimatedGrid;
}
export namespace _SliverAnimatedGridFactory { export function of(context: upstream2.BuildContext): upstream5.SliverAnimatedGridState {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:SliverAnimatedGrid.of", [contextHandle(context, "flax.core/flutter#type:BuildContext")], _flaxMemberParameters0);
return _flaxResult as upstream5.SliverAnimatedGridState;
} }
export namespace _SliverAnimatedGridFactory { export function maybeOf(context: upstream2.BuildContext): upstream5.SliverAnimatedGridState | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:SliverAnimatedGrid.maybeOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")], _flaxMemberParameters0);
return _flaxResult as upstream5.SliverAnimatedGridState | null;
} }
export const SliverAnimatedGrid: typeof _SliverAnimatedGridFactory & _FlaxInstanceType<SliverAnimatedGrid> & _FlaxDartType<SliverAnimatedGrid, readonly ["class", "flax.core/sdk_widgets#type:SliverAnimatedGrid", readonly [], false]> = _flaxBindInstanceType<SliverAnimatedGrid, typeof _SliverAnimatedGridFactory>(_SliverAnimatedGridFactory, "flax.core/sdk_widgets#type:SliverAnimatedGrid", ["package:flutter/src/widgets/animated_scroll_view.dart::_SliverAnimatedMultiBoxAdaptor","flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _SliverAnimatedGridFactory & _FlaxInstanceType<SliverAnimatedGrid> & _FlaxDartType<SliverAnimatedGrid, readonly ["class", "flax.core/sdk_widgets#type:SliverAnimatedGrid", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "gridDelegate" | "itemBuilder" | "findChildIndexCallback" | "initialItemCount" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/animated_scroll_view.dart::SliverAnimatedGrid" | "__flaxBound:package:flutter/src/widgets/animated_scroll_view.dart::_SliverAnimatedMultiBoxAdaptor" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
