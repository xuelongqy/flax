// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_BottomNavigationBarItem';
import '@flax/flutter/widgets/_bindings/sdk_widgets_BottomNavigationBarItem';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_Border';
import '@flax/flutter/painting/_bindings/flutter_Border';
import type * as upstream6 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream12 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import { _flaxMemberParameters24, _flaxMemberParameters51, _flaxMemberParameters0 } from "@flax/flutter/cupertino/_bindings/sdk_cupertino.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/cupertino/_bindings/sdk_cupertino.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CupertinoTabBar extends _FlaxDartWidget, Omit<upstream0.StatelessWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatelessWidget>, Readonly<{ "__flaxBound:package:flutter/src/cupertino/bottom_tab_bar.dart::CupertinoTabBar": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/preferred_size.dart::PreferredSizeWidget": readonly [] }>, Omit<upstream1.PreferredSizeWidget, _flaxOwnMembers0 | keyof upstream0.StatelessWidget | keyof Widget> { readonly __CupertinoTabBar: unique symbol;
readonly [_flaxDartTypeValue]: CupertinoTabBar;

readonly preferredSize: upstream6.Size;
readonly items: DartList<upstream3.BottomNavigationBarItem>;
readonly onTap: ((value: number) => void) | null;
readonly currentIndex: number;
readonly backgroundColor: upstream4.Color | null;
readonly activeColor: upstream4.Color | null;
readonly inactiveColor: upstream4.Color;
readonly iconSize: number;
readonly height: number;
readonly border: upstream5.Border | null;
readonly key: upstream2.Key | null;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream7.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream7.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream9.DiagnosticsTreeStyle | null | undefined}): upstream8.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream8.DiagnosticsNode>;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream7.DiagnosticLevel | undefined}): string;
opaque(context: upstream11.BuildContext): boolean;
build(context: upstream11.BuildContext): Widget;
copyWith(options?: {activeColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; border?: Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::Border": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; currentIndex?: number | null | undefined; height?: number | null | undefined; iconSize?: number | null | undefined; inactiveColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; items?: DartListInput<upstream3.BottomNavigationBarItem, Readonly<{ "__flaxBound:package:flutter/src/widgets/bottom_navigation_bar_item.dart::BottomNavigationBarItem": readonly [] }>> | null | undefined; key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; onTap?: ((value: number) => void) | null | undefined}): CupertinoTabBar;
createElement(): upstream12.StatelessElement;
}
defineObject("flax.core/sdk_cupertino#type:CupertinoTabBar", ["preferredSize","items","onTap","currentIndex","backgroundColor","activeColor","inactiveColor","iconSize","height","border","key"], [], _flaxBindingMethods("flax.core/sdk_cupertino#type:CupertinoTabBar", "object", {"opaque":_flaxMemberParameters24,"build":_flaxMemberParameters24,"copyWith":_flaxMemberParameters51,"createElement":_flaxMemberParameters0}, {}), [], undefined, "flax.core/flutter#type:PreferredSizeWidget");
export function _CupertinoTabBarFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; items: DartListInput<upstream3.BottomNavigationBarItem, Readonly<{ "__flaxBound:package:flutter/src/widgets/bottom_navigation_bar_item.dart::BottomNavigationBarItem": readonly [] }>>; onTap?: ((value: number) => void) | null | undefined; currentIndex?: number | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; activeColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; inactiveColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; iconSize?: number | undefined; height?: number | undefined; border?: Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::Border": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined }): CupertinoTabBar {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_cupertino#type:CupertinoTabBar", "", [{"name":"key","fixed":true},{"name":"items","fixed":true,"required":true},{"name":"onTap","fixed":true},{"name":"currentIndex","fixed":true},{"name":"backgroundColor","fixed":true},{"name":"activeColor","fixed":true},{"name":"inactiveColor","fixed":true},{"name":"iconSize","fixed":true},{"name":"height","fixed":true},{"name":"border","fixed":true}], [], options) as CupertinoTabBar;
}
export const CupertinoTabBar: typeof _CupertinoTabBarFactory & _FlaxInstanceType<CupertinoTabBar> & _FlaxDartType<CupertinoTabBar, readonly ["class", "flax.core/sdk_cupertino#type:CupertinoTabBar", readonly [], false]> = _flaxBindInstanceType<CupertinoTabBar, typeof _CupertinoTabBarFactory>(_CupertinoTabBarFactory, "flax.core/sdk_cupertino#type:CupertinoTabBar", ["flax.core/sdk_widgets#type:StatelessWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable","flax.core/flutter#type:PreferredSizeWidget"]) as typeof _CupertinoTabBarFactory & _FlaxInstanceType<CupertinoTabBar> & _FlaxDartType<CupertinoTabBar, readonly ["class", "flax.core/sdk_cupertino#type:CupertinoTabBar", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "preferredSize" | "items" | "onTap" | "currentIndex" | "backgroundColor" | "activeColor" | "inactiveColor" | "iconSize" | "height" | "border" | "key" | "toStringShallow" | "toStringDeep" | "toStringShort" | "toDiagnosticsNode" | "debugDescribeChildren" | "debugFillProperties" | "toString" | "opaque" | "build" | "copyWith" | "createElement" | "__flaxBound:package:flutter/src/cupertino/bottom_tab_bar.dart::CupertinoTabBar" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/widgets/preferred_size.dart::PreferredSizeWidget";
