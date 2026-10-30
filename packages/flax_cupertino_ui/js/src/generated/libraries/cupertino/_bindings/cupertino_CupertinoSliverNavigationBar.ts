// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_Border';
import '@flax/flutter/painting/_bindings/flutter_Border';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsDirectional';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsDirectional';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import type * as upstream7 from '@flax/cupertino-ui/_bindings/cupertino_NavigationBarBottomMode';
import '@flax/cupertino-ui/_bindings/cupertino_NavigationBarBottomMode';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
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
import { _flaxMemberParameters0 } from "@flax/cupertino-ui/_bindings/cupertino.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/cupertino-ui/_bindings/cupertino.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CupertinoSliverNavigationBar extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{ "__flaxBound:package:cupertino_ui/src/nav_bar.dart::CupertinoSliverNavigationBar": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __CupertinoSliverNavigationBar: unique symbol;
readonly [_flaxDartTypeValue]: CupertinoSliverNavigationBar;

readonly largeTitle: Widget | null;
readonly leading: Widget | null;
readonly automaticallyImplyLeading: boolean;
readonly automaticallyImplyTitle: boolean;
readonly alwaysShowMiddle: boolean;
readonly previousPageTitle: string | null;
readonly middle: Widget | null;
readonly trailing: Widget | null;
readonly backgroundColor: upstream3.Color | null;
readonly automaticBackgroundVisibility: boolean;
readonly enableBackgroundFilterBlur: boolean;
readonly brightness: upstream4.Brightness | null;
readonly padding: upstream5.EdgeInsetsDirectional | null;
readonly border: upstream2.Border | null;
readonly transitionBetweenRoutes: boolean;
readonly heroTag: {};
readonly bottom: upstream6.PreferredSizeWidget | null;
readonly bottomMode: upstream7.NavigationBarBottomMode | null;
readonly onSearchableBottomTap: ((value: boolean) => void) | null;
readonly opaque: boolean;
readonly stretch: boolean;
readonly searchField: Widget | null;
readonly key: upstream1.Key | null;
createState(): upstream8.State<CupertinoSliverNavigationBar>;
createElement(): upstream9.StatefulElement;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream11.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream11.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream13.DiagnosticsTreeStyle | null | undefined}): upstream12.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream12.DiagnosticsNode>;
}
defineObject("flax.cupertino/cupertino#type:CupertinoSliverNavigationBar", ["largeTitle","leading","automaticallyImplyLeading","automaticallyImplyTitle","alwaysShowMiddle","previousPageTitle","middle","trailing","backgroundColor","automaticBackgroundVisibility","enableBackgroundFilterBlur","brightness","padding","border","transitionBetweenRoutes","heroTag","bottom","bottomMode","onSearchableBottomTap","opaque","stretch","searchField","key"], [], _flaxBindingMethods("flax.cupertino/cupertino#type:CupertinoSliverNavigationBar", "object", {"createState":_flaxMemberParameters0,"createElement":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_widgets#type:Widget");
export function _CupertinoSliverNavigationBarFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; largeTitle?: Widget | null | undefined; leading?: Widget | null | undefined; automaticallyImplyLeading?: boolean | undefined; automaticallyImplyTitle?: boolean | undefined; alwaysShowMiddle?: boolean | undefined; previousPageTitle?: string | null | undefined; middle?: Widget | null | undefined; trailing?: Widget | null | undefined; border?: Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::Border": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; automaticBackgroundVisibility?: boolean | undefined; enableBackgroundFilterBlur?: boolean | undefined; brightness?: upstream4.Brightness | null | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsDirectional": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; transitionBetweenRoutes?: boolean | undefined; heroTag?: {} | undefined; stretch?: boolean | undefined; bottom?: Readonly<{ "__flaxBound:package:flutter/src/widgets/preferred_size.dart::PreferredSizeWidget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; bottomMode?: upstream7.NavigationBarBottomMode | null | undefined } = {}): CupertinoSliverNavigationBar {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.cupertino/cupertino#type:CupertinoSliverNavigationBar", "", [{"name":"key"},{"name":"largeTitle"},{"name":"leading"},{"name":"automaticallyImplyLeading"},{"name":"automaticallyImplyTitle"},{"name":"alwaysShowMiddle"},{"name":"previousPageTitle"},{"name":"middle"},{"name":"trailing"},{"name":"border"},{"name":"backgroundColor"},{"name":"automaticBackgroundVisibility"},{"name":"enableBackgroundFilterBlur"},{"name":"brightness"},{"name":"padding"},{"name":"transitionBetweenRoutes"},{"name":"heroTag"},{"name":"stretch"},{"name":"bottom"},{"name":"bottomMode"}], [], options) as CupertinoSliverNavigationBar;
}
export declare namespace _CupertinoSliverNavigationBarFactory { const __flaxJsx: { readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof _CupertinoSliverNavigationBarFactory>[0]>); readonly slot: null; readonly many: false; }; }
export namespace _CupertinoSliverNavigationBarFactory {
export function search(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; searchField: Widget; largeTitle?: Widget | null | undefined; leading?: Widget | null | undefined; automaticallyImplyLeading?: boolean | undefined; automaticallyImplyTitle?: boolean | undefined; alwaysShowMiddle?: boolean | undefined; previousPageTitle?: string | null | undefined; middle?: Widget | null | undefined; trailing?: Widget | null | undefined; border?: Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::Border": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; automaticBackgroundVisibility?: boolean | undefined; enableBackgroundFilterBlur?: boolean | undefined; brightness?: upstream4.Brightness | null | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsDirectional": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; transitionBetweenRoutes?: boolean | undefined; heroTag?: {} | undefined; stretch?: boolean | undefined; bottomMode?: upstream7.NavigationBarBottomMode | null | undefined; onSearchableBottomTap?: ((value: boolean) => void) | null | undefined }): CupertinoSliverNavigationBar {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.cupertino/cupertino#type:CupertinoSliverNavigationBar", "search", [{"name":"key"},{"name":"searchField","required":true},{"name":"largeTitle"},{"name":"leading"},{"name":"automaticallyImplyLeading"},{"name":"automaticallyImplyTitle"},{"name":"alwaysShowMiddle"},{"name":"previousPageTitle"},{"name":"middle"},{"name":"trailing"},{"name":"border"},{"name":"backgroundColor"},{"name":"automaticBackgroundVisibility"},{"name":"enableBackgroundFilterBlur"},{"name":"brightness"},{"name":"padding"},{"name":"transitionBetweenRoutes"},{"name":"heroTag"},{"name":"stretch"},{"name":"bottomMode"},{"name":"onSearchableBottomTap"}], [], options) as CupertinoSliverNavigationBar;
}
export declare namespace search { const __flaxJsx: { readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof search>[0]>); readonly slot: null; readonly many: false; }; }
}
export const CupertinoSliverNavigationBar: typeof _CupertinoSliverNavigationBarFactory & _FlaxInstanceType<CupertinoSliverNavigationBar> & _FlaxDartType<CupertinoSliverNavigationBar, readonly ["class", "flax.cupertino/cupertino#type:CupertinoSliverNavigationBar", readonly [], false]> = _flaxBindInstanceType<CupertinoSliverNavigationBar, typeof _CupertinoSliverNavigationBarFactory>(_CupertinoSliverNavigationBarFactory, "flax.cupertino/cupertino#type:CupertinoSliverNavigationBar", ["flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _CupertinoSliverNavigationBarFactory & _FlaxInstanceType<CupertinoSliverNavigationBar> & _FlaxDartType<CupertinoSliverNavigationBar, readonly ["class", "flax.cupertino/cupertino#type:CupertinoSliverNavigationBar", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "largeTitle" | "leading" | "automaticallyImplyLeading" | "automaticallyImplyTitle" | "alwaysShowMiddle" | "previousPageTitle" | "middle" | "trailing" | "backgroundColor" | "automaticBackgroundVisibility" | "enableBackgroundFilterBlur" | "brightness" | "padding" | "border" | "transitionBetweenRoutes" | "heroTag" | "bottom" | "bottomMode" | "onSearchableBottomTap" | "opaque" | "stretch" | "searchField" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:cupertino_ui/src/nav_bar.dart::CupertinoSliverNavigationBar" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
