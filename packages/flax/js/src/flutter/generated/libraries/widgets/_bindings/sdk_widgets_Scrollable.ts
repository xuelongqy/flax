// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream6 from '@flax/flutter/rendering/_bindings/sdk_rendering_ViewportOffset';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ViewportOffset';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollIncrementDetails';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollIncrementDetails';
import type * as upstream8 from '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollBehavior';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollBehavior';
import type * as upstream10 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream11 from '@flax/flutter/rendering/_bindings/flutter_HitTestBehavior';
import '@flax/flutter/rendering/_bindings/flutter_HitTestBehavior';
import type * as upstream12 from '@flax/flutter/painting/_bindings/flutter_Axis';
import '@flax/flutter/painting/_bindings/flutter_Axis';
import type * as upstream13 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollableState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollableState';
import type * as upstream14 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollPositionAlignmentPolicy';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollPositionAlignmentPolicy';
import type * as upstream15 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream16 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream17 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream18 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream19 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream20 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream21 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream22 from '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { _flaxMemberParameters411, _flaxMemberParameters412, _flaxMemberParameters2 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Scrollable extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{ "__flaxBound:package:flutter/src/widgets/scrollable.dart::Scrollable": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __Scrollable: unique symbol;
readonly [_flaxDartTypeValue]: Scrollable;

readonly axisDirection: upstream2.AxisDirection;
readonly controller: upstream3.ScrollController | null;
readonly physics: upstream4.ScrollPhysics | null;
readonly viewportBuilder: ((context: upstream5.BuildContext, position: Readonly<{ "__flaxBound:package:flutter/src/rendering/viewport_offset.dart::ViewportOffset": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>) => Widget);
readonly incrementCalculator: ((details: Readonly<{ "__flaxBound:package:flutter/src/widgets/scrollable_helpers.dart::ScrollIncrementDetails": readonly [] }>) => number) | null;
readonly excludeFromSemantics: boolean;
readonly hitTestBehavior: upstream11.HitTestBehavior;
readonly semanticChildCount: number | null;
readonly dragStartBehavior: upstream8.DragStartBehavior;
readonly restorationId: string | null;
readonly scrollBehavior: upstream9.ScrollBehavior | null;
readonly clipBehavior: upstream10.Clip;
readonly axis: upstream12.Axis;
readonly key: upstream1.Key | null;
createState(): upstream13.ScrollableState;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
createElement(): upstream18.StatefulElement;
toStringShort(): string;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream19.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream19.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream21.DiagnosticsTreeStyle | null | undefined}): upstream20.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream20.DiagnosticsNode>;
}
defineObject("flax.core/sdk_widgets#type:Scrollable", ["axisDirection","controller","physics","viewportBuilder","incrementCalculator","excludeFromSemantics","hitTestBehavior","semanticChildCount","dragStartBehavior","restorationId","scrollBehavior","clipBehavior","axis","key"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:Scrollable", "object", {"createState":_flaxMemberParameters2,"createElement":_flaxMemberParameters2}, {}), [], undefined, "flax.core/sdk_widgets#type:Widget");
export function _ScrollableFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; axisDirection?: upstream2.AxisDirection | undefined; controller?: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined; physics?: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null | undefined; viewportBuilder: ((context: upstream5.BuildContext, position: upstream6.ViewportOffset) => Widget); incrementCalculator?: ((details: upstream7.ScrollIncrementDetails) => number) | null | undefined; excludeFromSemantics?: boolean | undefined; semanticChildCount?: number | null | undefined; dragStartBehavior?: upstream8.DragStartBehavior | undefined; restorationId?: string | null | undefined; scrollBehavior?: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_configuration.dart::ScrollBehavior": readonly [] }> | null | undefined; clipBehavior?: upstream10.Clip | undefined; hitTestBehavior?: upstream11.HitTestBehavior | undefined }): Scrollable {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:Scrollable", "", [{"name":"key"},{"name":"axisDirection"},{"name":"controller"},{"name":"physics"},{"name":"viewportBuilder","required":true},{"name":"incrementCalculator"},{"name":"excludeFromSemantics"},{"name":"semanticChildCount"},{"name":"dragStartBehavior"},{"name":"restorationId"},{"name":"scrollBehavior"},{"name":"clipBehavior"},{"name":"hitTestBehavior"}], [], options) as Scrollable;
}
export declare namespace _ScrollableFactory { const __flaxJsx: { readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof _ScrollableFactory>[0]>); readonly slot: null; readonly many: false; }; }
export namespace _ScrollableFactory { export function maybeOf(context: upstream5.BuildContext, options: { axis?: upstream12.Axis | null | undefined } = {}): upstream13.ScrollableState | null {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["axis"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:Scrollable.maybeOf", [contextHandle(context, "flax.core/flutter#type:BuildContext"), options.axis], _flaxMemberParameters411);
return _flaxResult as upstream13.ScrollableState | null;
} }
export namespace _ScrollableFactory { export function of(context: upstream5.BuildContext, options: { axis?: upstream12.Axis | null | undefined } = {}): upstream13.ScrollableState {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["axis"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:Scrollable.of", [contextHandle(context, "flax.core/flutter#type:BuildContext"), options.axis], _flaxMemberParameters411);
return _flaxResult as upstream13.ScrollableState;
} }
export namespace _ScrollableFactory { export function recommendDeferredLoadingForContext(context: upstream5.BuildContext, options: { axis?: upstream12.Axis | null | undefined } = {}): boolean {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["axis"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:Scrollable.recommendDeferredLoadingForContext", [contextHandle(context, "flax.core/flutter#type:BuildContext"), options.axis], _flaxMemberParameters411);
return _flaxResult as boolean;
} }
export namespace _ScrollableFactory { export function ensureVisible(context: upstream5.BuildContext, options: { alignment?: number | undefined; alignmentPolicy?: upstream14.ScrollPositionAlignmentPolicy | undefined; curve?: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number] }> | undefined; duration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream16.Duration] }> | undefined } = {}): Promise<void> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["alignment","alignmentPolicy","curve","duration"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:Scrollable.ensureVisible", [contextHandle(context, "flax.core/flutter#type:BuildContext"), options.alignment, options.alignmentPolicy, options.curve, options.duration], _flaxMemberParameters412);
return _flaxResult as Promise<void>;
} }
export const Scrollable: typeof _ScrollableFactory & _FlaxInstanceType<Scrollable> & _FlaxDartType<Scrollable, readonly ["class", "flax.core/sdk_widgets#type:Scrollable", readonly [], false]> = _flaxBindInstanceType<Scrollable, typeof _ScrollableFactory>(_ScrollableFactory, "flax.core/sdk_widgets#type:Scrollable", ["flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _ScrollableFactory & _FlaxInstanceType<Scrollable> & _FlaxDartType<Scrollable, readonly ["class", "flax.core/sdk_widgets#type:Scrollable", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "axisDirection" | "controller" | "physics" | "viewportBuilder" | "incrementCalculator" | "excludeFromSemantics" | "hitTestBehavior" | "semanticChildCount" | "dragStartBehavior" | "restorationId" | "scrollBehavior" | "clipBehavior" | "axis" | "key" | "createState" | "debugFillProperties" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/scrollable.dart::Scrollable" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
