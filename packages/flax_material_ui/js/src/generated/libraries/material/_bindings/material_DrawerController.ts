// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_GlobalKey';
import '@flax/flutter/widgets/_bindings/sdk_widgets_GlobalKey';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream3 from '@flax/material-ui/_bindings/material_DrawerAlignment';
import '@flax/material-ui/_bindings/material_DrawerAlignment';
import type * as upstream4 from '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream8 from '@flax/material-ui/_bindings/material_DrawerControllerState';
import '@flax/material-ui/_bindings/material_DrawerControllerState';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream14 from '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { _flaxMemberParameters0, _flaxMemberParameters4 } from "@flax/material-ui/_bindings/material.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DrawerController extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{ "__flaxBound:package:material_ui/src/drawer.dart::DrawerController": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __DrawerController: unique symbol;
readonly [_flaxDartTypeValue]: DrawerController;

readonly child: Widget;
readonly alignment: upstream3.DrawerAlignment;
readonly drawerCallback: ((isOpened: boolean) => void) | null;
readonly drawerBarrierDismissible: boolean;
readonly dragStartBehavior: upstream4.DragStartBehavior;
readonly scrimColor: upstream5.Color | null;
readonly enableOpenDragGesture: boolean;
readonly edgeDragWidth: number | null;
readonly isDrawerOpen: boolean;
readonly key: upstream6.Key | null;
createState(): upstream8.DrawerControllerState;
createElement(): upstream9.StatefulElement;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream11.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream11.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream13.DiagnosticsTreeStyle | null | undefined}): upstream12.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream12.DiagnosticsNode>;
}
defineObject("flax.material/material#type:DrawerController", ["child","alignment","drawerCallback","drawerBarrierDismissible","dragStartBehavior","scrimColor","enableOpenDragGesture","edgeDragWidth","isDrawerOpen","key"], [], _flaxBindingMethods("flax.material/material#type:DrawerController", "object", {"createState":_flaxMemberParameters4,"createElement":_flaxMemberParameters4}, {}), [], undefined, "flax.core/sdk_widgets#type:Widget");
export function _DrawerControllerFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::GlobalKey": readonly [upstream2.State<upstream0.StatefulWidget>] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; child: Widget; alignment: upstream3.DrawerAlignment; isDrawerOpen?: boolean | undefined; drawerCallback?: ((isOpened: boolean) => void) | null | undefined; dragStartBehavior?: upstream4.DragStartBehavior | undefined; scrimColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; edgeDragWidth?: number | null | undefined; enableOpenDragGesture?: boolean | undefined; drawerBarrierDismissible?: boolean | undefined }): DrawerController {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:DrawerController", "", [{"name":"key"},{"name":"child","required":true},{"name":"alignment","required":true},{"name":"isDrawerOpen"},{"name":"drawerCallback"},{"name":"dragStartBehavior"},{"name":"scrimColor"},{"name":"edgeDragWidth"},{"name":"enableOpenDragGesture"},{"name":"drawerBarrierDismissible"}], [], options) as DrawerController;
}
export declare namespace _DrawerControllerFactory { const __flaxJsx: { readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _DrawerControllerFactory>[0]>), "child"> & ({ "child": (globalThis.NonNullable<globalThis.Parameters<typeof _DrawerControllerFactory>[0]>)["child"]; children?: never } | { "child"?: never; children: (globalThis.NonNullable<globalThis.Parameters<typeof _DrawerControllerFactory>[0]>)["child"] }); readonly slot: "child"; readonly many: false; }; }
export namespace _DrawerControllerFactory { export function maybeOf(context: upstream7.BuildContext): DrawerController | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:DrawerController.maybeOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")], _flaxMemberParameters0);
return _flaxResult as DrawerController | null;
} }
export namespace _DrawerControllerFactory { export function of(context: upstream7.BuildContext): DrawerController {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:DrawerController.of", [contextHandle(context, "flax.core/flutter#type:BuildContext")], _flaxMemberParameters0);
return _flaxResult as DrawerController;
} }
export const DrawerController: typeof _DrawerControllerFactory & _FlaxInstanceType<DrawerController> & _FlaxDartType<DrawerController, readonly ["class", "flax.material/material#type:DrawerController", readonly [], false]> = _flaxBindInstanceType<DrawerController, typeof _DrawerControllerFactory>(_DrawerControllerFactory, "flax.material/material#type:DrawerController", ["flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _DrawerControllerFactory & _FlaxInstanceType<DrawerController> & _FlaxDartType<DrawerController, readonly ["class", "flax.material/material#type:DrawerController", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "child" | "alignment" | "drawerCallback" | "drawerBarrierDismissible" | "dragStartBehavior" | "scrimColor" | "enableOpenDragGesture" | "edgeDragWidth" | "isDrawerOpen" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:material_ui/src/drawer.dart::DrawerController" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
