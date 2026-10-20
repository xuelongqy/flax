// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface NavigationDrawer extends _FlaxDartWidget, Omit<upstream0.StatelessWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatelessWidget>, Readonly<{ "__flaxBound:package:material_ui/src/navigation_drawer.dart::NavigationDrawer": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __NavigationDrawer: unique symbol;
readonly [_flaxDartTypeValue]: NavigationDrawer;

readonly backgroundColor: upstream2.Color | null;
readonly shadowColor: upstream2.Color | null;
readonly surfaceTintColor: upstream2.Color | null;
readonly elevation: number | null;
readonly indicatorColor: upstream2.Color | null;
readonly indicatorShape: upstream3.ShapeBorder | null;
readonly children: DartList<Widget>;
readonly header: Widget | null;
readonly footer: Widget | null;
readonly selectedIndex: number | null;
readonly onDestinationSelected: ((value: number) => void) | null;
readonly tilePadding: upstream4.EdgeInsetsGeometry;
readonly key: upstream1.Key | null;
build(context: upstream5.BuildContext): Widget;
createElement(): upstream6.StatelessElement;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream8.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream8.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream10.DiagnosticsTreeStyle | null | undefined}): upstream9.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream9.DiagnosticsNode>;
}
defineObject("flax.material/material#type:NavigationDrawer", ["backgroundColor","shadowColor","surfaceTintColor","elevation","indicatorColor","indicatorShape","children","header","footer","selectedIndex","onDestinationSelected","tilePadding","key"], [], _flaxBindingMethods("flax.material/material#type:NavigationDrawer", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:StatelessWidget");
export function _NavigationDrawerFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; children: DartListInput<Widget, Widget>; header?: Widget | null | undefined; footer?: Widget | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; shadowColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; surfaceTintColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; elevation?: number | null | undefined; indicatorColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; indicatorShape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; onDestinationSelected?: ((value: number) => void) | null | undefined; selectedIndex?: number | null | undefined; tilePadding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | undefined }): NavigationDrawer {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:NavigationDrawer", "", [{"name":"key"},{"name":"children","required":true},{"name":"header"},{"name":"footer"},{"name":"backgroundColor"},{"name":"shadowColor"},{"name":"surfaceTintColor"},{"name":"elevation"},{"name":"indicatorColor"},{"name":"indicatorShape"},{"name":"onDestinationSelected"},{"name":"selectedIndex"},{"name":"tilePadding"}], [], options) as NavigationDrawer;
}
export const NavigationDrawer: typeof _NavigationDrawerFactory & _FlaxInstanceType<NavigationDrawer> & _FlaxDartType<NavigationDrawer, readonly ["class", "flax.material/material#type:NavigationDrawer", readonly [], false]> = _flaxBindInstanceType<NavigationDrawer, typeof _NavigationDrawerFactory>(_NavigationDrawerFactory, "flax.material/material#type:NavigationDrawer", ["flax.core/sdk_widgets#type:StatelessWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _NavigationDrawerFactory & _FlaxInstanceType<NavigationDrawer> & _FlaxDartType<NavigationDrawer, readonly ["class", "flax.material/material#type:NavigationDrawer", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "backgroundColor" | "shadowColor" | "surfaceTintColor" | "elevation" | "indicatorColor" | "indicatorShape" | "children" | "header" | "footer" | "selectedIndex" | "onDestinationSelected" | "tilePadding" | "key" | "build" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:material_ui/src/navigation_drawer.dart::NavigationDrawer" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
