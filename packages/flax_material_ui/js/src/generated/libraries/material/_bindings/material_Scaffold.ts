// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import type * as upstream2 from '@flax/material-ui/_bindings/material_FloatingActionButtonLocation';
import '@flax/material-ui/_bindings/material_FloatingActionButtonLocation';
import type * as upstream3 from '@flax/material-ui/_bindings/material_FloatingActionButtonAnimator';
import '@flax/material-ui/_bindings/material_FloatingActionButtonAnimator';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_AlignmentDirectional';
import '@flax/flutter/painting/_bindings/flutter_AlignmentDirectional';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_BoxDecoration';
import '@flax/flutter/painting/_bindings/flutter_BoxDecoration';
import type * as upstream6 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream7 from '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream9 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream10 from '@flax/material-ui/_bindings/material_ScaffoldState';
import '@flax/material-ui/_bindings/material_ScaffoldState';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream12 from '@flax/material-ui/_bindings/material_ScaffoldGeometry';
import '@flax/material-ui/_bindings/material_ScaffoldGeometry';
import { _flaxMemberParameters0, _flaxMemberParameters276 } from "@flax/material-ui/_bindings/material.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Scaffold extends WidgetDescription, Omit<Readonly<{ "__flaxBound:package:material_ui/src/scaffold.dart::Scaffold": readonly [] }>, 'type'>, Omit<Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, 'type'>, Omit<Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, 'type'>, Omit<Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, 'type'>, Omit<Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, 'type'> { readonly type: "flax.material/material#type:Scaffold";  }
export function _ScaffoldFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; appBar?: Bindable<Readonly<{ "__flaxBound:package:flutter/src/widgets/preferred_size.dart::PreferredSizeWidget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null> | undefined; body?: Bindable<Widget | null> | undefined; floatingActionButton?: Bindable<Widget | null> | undefined; floatingActionButtonLocation?: Bindable<Readonly<{ "__flaxBound:package:material_ui/src/floating_action_button_location.dart::FloatingActionButtonLocation": readonly [] }> | null> | undefined; floatingActionButtonAnimator?: Bindable<Readonly<{ "__flaxBound:package:material_ui/src/floating_action_button_location.dart::FloatingActionButtonAnimator": readonly [] }> | null> | undefined; persistentFooterButtons?: Bindable<DartListInput<Widget, Widget> | null> | undefined; persistentFooterAlignment?: Bindable<Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentDirectional": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }>> | undefined; persistentFooterDecoration?: Bindable<Readonly<{ "__flaxBound:package:flutter/src/painting/box_decoration.dart::BoxDecoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null> | undefined; drawer?: Bindable<Widget | null> | undefined; onDrawerChanged?: Bindable<((isOpened: boolean) => void) | null> | undefined; endDrawer?: Bindable<Widget | null> | undefined; onEndDrawerChanged?: Bindable<((isOpened: boolean) => void) | null> | undefined; bottomNavigationBar?: Bindable<Widget | null> | undefined; bottomSheet?: Bindable<Widget | null> | undefined; backgroundColor?: Bindable<Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null> | undefined; resizeToAvoidBottomInset?: Bindable<boolean | null> | undefined; primary?: Bindable<boolean> | undefined; drawerDragStartBehavior?: Bindable<upstream7.DragStartBehavior> | undefined; extendBody?: Bindable<boolean> | undefined; drawerBarrierDismissible?: Bindable<boolean> | undefined; extendBodyBehindAppBar?: Bindable<boolean> | undefined; drawerScrimColor?: Bindable<Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null> | undefined; bottomSheetScrimBuilder?: Bindable<((p0: upstream8.BuildContext, p1: upstream9.Animation<number>) => Widget | null)> | undefined; drawerEdgeDragWidth?: Bindable<number | null> | undefined; drawerEnableOpenDragGesture?: Bindable<boolean> | undefined; endDrawerEnableOpenDragGesture?: Bindable<boolean> | undefined; restorationId?: Bindable<string | null> | undefined } = {}): Scaffold {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.material/material#type:Scaffold", "", [{"name":"key"},{"name":"appBar"},{"name":"body"},{"name":"floatingActionButton"},{"name":"floatingActionButtonLocation"},{"name":"floatingActionButtonAnimator"},{"name":"persistentFooterButtons"},{"name":"persistentFooterAlignment"},{"name":"persistentFooterDecoration"},{"name":"drawer"},{"name":"onDrawerChanged"},{"name":"endDrawer"},{"name":"onEndDrawerChanged"},{"name":"bottomNavigationBar"},{"name":"bottomSheet"},{"name":"backgroundColor"},{"name":"resizeToAvoidBottomInset"},{"name":"primary"},{"name":"drawerDragStartBehavior"},{"name":"extendBody"},{"name":"drawerBarrierDismissible"},{"name":"extendBodyBehindAppBar"},{"name":"drawerScrimColor"},{"name":"bottomSheetScrimBuilder"},{"name":"drawerEdgeDragWidth"},{"name":"drawerEnableOpenDragGesture"},{"name":"endDrawerEnableOpenDragGesture"},{"name":"restorationId"}], [], options) as Scaffold;
}
export namespace _ScaffoldFactory { export function of(context: upstream8.BuildContext): upstream10.ScaffoldState {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:Scaffold.of", [contextHandle(context, "flax.core/flutter#type:BuildContext")], _flaxMemberParameters0);
return _flaxResult as upstream10.ScaffoldState;
} }
export namespace _ScaffoldFactory { export function maybeOf(context: upstream8.BuildContext): upstream10.ScaffoldState | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:Scaffold.maybeOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")], _flaxMemberParameters0);
return _flaxResult as upstream10.ScaffoldState | null;
} }
export namespace _ScaffoldFactory { export function geometryOf(context: upstream8.BuildContext): upstream11.ValueListenable<upstream12.ScaffoldGeometry> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:Scaffold.geometryOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")], _flaxMemberParameters0);
return _flaxResult as upstream11.ValueListenable<upstream12.ScaffoldGeometry>;
} }
export namespace _ScaffoldFactory { export function hasDrawer(context: upstream8.BuildContext, options: { registerForUpdates?: boolean | undefined } = {}): boolean {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["registerForUpdates"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:Scaffold.hasDrawer", [contextHandle(context, "flax.core/flutter#type:BuildContext"), options.registerForUpdates], _flaxMemberParameters276);
return _flaxResult as boolean;
} }
export const Scaffold: typeof _ScaffoldFactory & _FlaxInstanceType<Scaffold> & _FlaxDartType<Scaffold, readonly ["class", "flax.material/material#type:Scaffold", readonly [], false]> = _flaxBindInstanceType<Scaffold, typeof _ScaffoldFactory>(_ScaffoldFactory, "flax.material/material#type:Scaffold", ["flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _ScaffoldFactory & _FlaxInstanceType<Scaffold> & _FlaxDartType<Scaffold, readonly ["class", "flax.material/material#type:Scaffold", readonly [], false]>;
