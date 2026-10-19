// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import type * as upstream3 from '@flax/flutter/material/_bindings/sdk_material_FloatingActionButtonLocation';
import '@flax/flutter/material/_bindings/sdk_material_FloatingActionButtonLocation';
import type * as upstream4 from '@flax/flutter/material/_bindings/sdk_material_FloatingActionButtonAnimator';
import '@flax/flutter/material/_bindings/sdk_material_FloatingActionButtonAnimator';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_AlignmentDirectional';
import '@flax/flutter/painting/_bindings/flutter_AlignmentDirectional';
import type * as upstream6 from '@flax/flutter/painting/_bindings/flutter_BoxDecoration';
import '@flax/flutter/painting/_bindings/flutter_BoxDecoration';
import type * as upstream7 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream8 from '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream10 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream11 from '@flax/flutter/material/_bindings/sdk_material_ScaffoldState';
import '@flax/flutter/material/_bindings/sdk_material_ScaffoldState';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream13 from '@flax/flutter/material/_bindings/sdk_material_ScaffoldGeometry';
import '@flax/flutter/material/_bindings/sdk_material_ScaffoldGeometry';
import type * as upstream14 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream16 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream17 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream18 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream19 from '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { _flaxMemberParameters2 } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/sdk_material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Scaffold extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{ "__flaxBound:package:flutter/src/material/scaffold.dart::Scaffold": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __Scaffold: unique symbol;
readonly [_flaxDartTypeValue]: Scaffold;

readonly extendBody: boolean;
readonly drawerBarrierDismissible: boolean;
readonly extendBodyBehindAppBar: boolean;
readonly appBar: upstream2.PreferredSizeWidget | null;
readonly body: Widget | null;
readonly floatingActionButton: Widget | null;
readonly floatingActionButtonLocation: upstream3.FloatingActionButtonLocation | null;
readonly floatingActionButtonAnimator: upstream4.FloatingActionButtonAnimator | null;
readonly persistentFooterButtons: DartList<Widget> | null;
readonly persistentFooterAlignment: upstream5.AlignmentDirectional;
readonly persistentFooterDecoration: upstream6.BoxDecoration | null;
readonly drawer: Widget | null;
readonly onDrawerChanged: ((isOpened: boolean) => void) | null;
readonly endDrawer: Widget | null;
readonly onEndDrawerChanged: ((isOpened: boolean) => void) | null;
readonly drawerScrimColor: upstream7.Color | null;
readonly bottomSheetScrimBuilder: ((p0: upstream9.BuildContext, p1: Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }>) => Widget | null);
readonly backgroundColor: upstream7.Color | null;
readonly bottomNavigationBar: Widget | null;
readonly bottomSheet: Widget | null;
readonly resizeToAvoidBottomInset: boolean | null;
readonly primary: boolean;
readonly drawerDragStartBehavior: upstream8.DragStartBehavior;
readonly drawerEdgeDragWidth: number | null;
readonly drawerEnableOpenDragGesture: boolean;
readonly endDrawerEnableOpenDragGesture: boolean;
readonly restorationId: string | null;
readonly key: upstream1.Key | null;
createState(): upstream11.ScaffoldState;
createElement(): upstream14.StatefulElement;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream16.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream16.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream18.DiagnosticsTreeStyle | null | undefined}): upstream17.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream17.DiagnosticsNode>;
}
defineObject("flax.core/sdk_material#type:Scaffold", ["extendBody","drawerBarrierDismissible","extendBodyBehindAppBar","appBar","body","floatingActionButton","floatingActionButtonLocation","floatingActionButtonAnimator","persistentFooterButtons","persistentFooterAlignment","persistentFooterDecoration","drawer","onDrawerChanged","endDrawer","onEndDrawerChanged","drawerScrimColor","bottomSheetScrimBuilder","backgroundColor","bottomNavigationBar","bottomSheet","resizeToAvoidBottomInset","primary","drawerDragStartBehavior","drawerEdgeDragWidth","drawerEnableOpenDragGesture","endDrawerEnableOpenDragGesture","restorationId","key"], [], _flaxBindingMethods("flax.core/sdk_material#type:Scaffold", "object", {"createState":_flaxMemberParameters2,"createElement":_flaxMemberParameters2}, {}), [], undefined, "flax.core/sdk_widgets#type:Widget");
export function _ScaffoldFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; appBar?: Readonly<{ "__flaxBound:package:flutter/src/widgets/preferred_size.dart::PreferredSizeWidget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; body?: Widget | null | undefined; floatingActionButton?: Widget | null | undefined; floatingActionButtonLocation?: Readonly<{ "__flaxBound:package:flutter/src/material/floating_action_button_location.dart::FloatingActionButtonLocation": readonly [] }> | null | undefined; floatingActionButtonAnimator?: Readonly<{ "__flaxBound:package:flutter/src/material/floating_action_button_location.dart::FloatingActionButtonAnimator": readonly [] }> | null | undefined; persistentFooterButtons?: DartListInput<Widget, Widget> | null | undefined; persistentFooterAlignment?: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentDirectional": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | undefined; persistentFooterDecoration?: Readonly<{ "__flaxBound:package:flutter/src/painting/box_decoration.dart::BoxDecoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; drawer?: Widget | null | undefined; onDrawerChanged?: ((isOpened: boolean) => void) | null | undefined; endDrawer?: Widget | null | undefined; onEndDrawerChanged?: ((isOpened: boolean) => void) | null | undefined; bottomNavigationBar?: Widget | null | undefined; bottomSheet?: Widget | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; resizeToAvoidBottomInset?: boolean | null | undefined; primary?: boolean | undefined; drawerDragStartBehavior?: upstream8.DragStartBehavior | undefined; extendBody?: boolean | undefined; drawerBarrierDismissible?: boolean | undefined; extendBodyBehindAppBar?: boolean | undefined; drawerScrimColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; bottomSheetScrimBuilder?: ((p0: upstream9.BuildContext, p1: upstream10.Animation<number>) => Widget | null) | undefined; drawerEdgeDragWidth?: number | null | undefined; drawerEnableOpenDragGesture?: boolean | undefined; endDrawerEnableOpenDragGesture?: boolean | undefined; restorationId?: string | null | undefined } = {}): Scaffold {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_material#type:Scaffold", "", [{"name":"key"},{"name":"appBar"},{"name":"body"},{"name":"floatingActionButton"},{"name":"floatingActionButtonLocation"},{"name":"floatingActionButtonAnimator"},{"name":"persistentFooterButtons"},{"name":"persistentFooterAlignment"},{"name":"persistentFooterDecoration"},{"name":"drawer"},{"name":"onDrawerChanged"},{"name":"endDrawer"},{"name":"onEndDrawerChanged"},{"name":"bottomNavigationBar"},{"name":"bottomSheet"},{"name":"backgroundColor"},{"name":"resizeToAvoidBottomInset"},{"name":"primary"},{"name":"drawerDragStartBehavior"},{"name":"extendBody"},{"name":"drawerBarrierDismissible"},{"name":"extendBodyBehindAppBar"},{"name":"drawerScrimColor"},{"name":"bottomSheetScrimBuilder"},{"name":"drawerEdgeDragWidth"},{"name":"drawerEnableOpenDragGesture"},{"name":"endDrawerEnableOpenDragGesture"},{"name":"restorationId"}], [], options) as Scaffold;
}
export namespace _ScaffoldFactory { export function of(context: upstream9.BuildContext): upstream11.ScaffoldState {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_material#function:Scaffold.of", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as upstream11.ScaffoldState;
} }
export namespace _ScaffoldFactory { export function maybeOf(context: upstream9.BuildContext): upstream11.ScaffoldState | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_material#function:Scaffold.maybeOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as upstream11.ScaffoldState | null;
} }
export namespace _ScaffoldFactory { export function geometryOf(context: upstream9.BuildContext): upstream12.ValueListenable<upstream13.ScaffoldGeometry> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_material#function:Scaffold.geometryOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as upstream12.ValueListenable<upstream13.ScaffoldGeometry>;
} }
export namespace _ScaffoldFactory { export function hasDrawer(context: upstream9.BuildContext, options: { registerForUpdates?: boolean | undefined } = {}): boolean {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["registerForUpdates"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_material#function:Scaffold.hasDrawer", [contextHandle(context, "flax.core/flutter#type:BuildContext"), options.registerForUpdates]);
return _flaxResult as boolean;
} }
export const Scaffold: typeof _ScaffoldFactory & _FlaxInstanceType<Scaffold> & _FlaxDartType<Scaffold, readonly ["class", "flax.core/sdk_material#type:Scaffold", readonly [], false]> = _flaxBindInstanceType<Scaffold, typeof _ScaffoldFactory>(_ScaffoldFactory, "flax.core/sdk_material#type:Scaffold", ["flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _ScaffoldFactory & _FlaxInstanceType<Scaffold> & _FlaxDartType<Scaffold, readonly ["class", "flax.core/sdk_material#type:Scaffold", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "extendBody" | "drawerBarrierDismissible" | "extendBodyBehindAppBar" | "appBar" | "body" | "floatingActionButton" | "floatingActionButtonLocation" | "floatingActionButtonAnimator" | "persistentFooterButtons" | "persistentFooterAlignment" | "persistentFooterDecoration" | "drawer" | "onDrawerChanged" | "endDrawer" | "onEndDrawerChanged" | "drawerScrimColor" | "bottomSheetScrimBuilder" | "backgroundColor" | "bottomNavigationBar" | "bottomSheet" | "resizeToAvoidBottomInset" | "primary" | "drawerDragStartBehavior" | "drawerEdgeDragWidth" | "drawerEnableOpenDragGesture" | "endDrawerEnableOpenDragGesture" | "restorationId" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/material/scaffold.dart::Scaffold" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
