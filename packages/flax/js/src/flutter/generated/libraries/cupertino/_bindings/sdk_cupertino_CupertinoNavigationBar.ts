// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/cupertino/_bindings/sdk_cupertino_ObstructingPreferredSizeWidget';
import '@flax/flutter/cupertino/_bindings/sdk_cupertino_ObstructingPreferredSizeWidget';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_Border';
import '@flax/flutter/painting/_bindings/flutter_Border';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import type * as upstream7 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsDirectional';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsDirectional';
import type * as upstream8 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream13 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream14 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream15 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
const _flaxMemberParameters0 = [{"name":"joiner","required":false,"positional":false},{"name":"minLevel","required":false,"positional":false}] as const;
const _flaxMemberParameters1 = [{"name":"minLevel","required":false,"positional":false},{"name":"prefixLineOne","required":false,"positional":false},{"name":"prefixOtherLines","required":false,"positional":false},{"name":"wrapWidth","required":false,"positional":false}] as const;
const _flaxMemberParameters2 = [] as const;
const _flaxMemberParameters3 = [{"name":"name","required":false,"positional":false},{"name":"style","required":false,"positional":false}] as const;
const _flaxMemberParameters4 = [{"name":"properties","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"minLevel","required":false,"positional":false}] as const;
const _flaxMemberParameters6 = [{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"}] as const;
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/cupertino/_bindings/sdk_cupertino.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CupertinoNavigationBar extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{ "__flaxBound:package:flutter/src/cupertino/nav_bar.dart::CupertinoNavigationBar": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/cupertino/page_scaffold.dart::ObstructingPreferredSizeWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/preferred_size.dart::PreferredSizeWidget": readonly [] }>, Omit<upstream1.ObstructingPreferredSizeWidget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget | keyof Widget>, Omit<upstream2.PreferredSizeWidget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget | keyof Widget | keyof upstream1.ObstructingPreferredSizeWidget> { readonly __CupertinoNavigationBar: unique symbol;
readonly [_flaxDartTypeValue]: CupertinoNavigationBar;

readonly preferredSize: upstream8.Size;
readonly largeTitle: Widget | null;
readonly leading: Widget | null;
readonly automaticallyImplyLeading: boolean;
readonly automaticallyImplyMiddle: boolean;
readonly previousPageTitle: string | null;
readonly middle: Widget | null;
readonly trailing: Widget | null;
readonly backgroundColor: upstream5.Color | null;
readonly automaticBackgroundVisibility: boolean;
readonly brightness: upstream6.Brightness | null;
readonly padding: upstream7.EdgeInsetsDirectional | null;
readonly border: upstream4.Border | null;
readonly transitionBetweenRoutes: boolean;
readonly enableBackgroundFilterBlur: boolean;
readonly heroTag: {};
readonly bottom: upstream2.PreferredSizeWidget | null;
readonly key: upstream3.Key | null;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream9.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream9.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream11.DiagnosticsTreeStyle | null | undefined}): upstream10.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream10.DiagnosticsNode>;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream9.DiagnosticLevel | undefined}): string;
shouldFullyObstruct(context: upstream13.BuildContext): boolean;
createState(): upstream14.State<CupertinoNavigationBar>;
createElement(): upstream15.StatefulElement;
}
defineObject("flax.core/sdk_cupertino#type:CupertinoNavigationBar", ["preferredSize","largeTitle","leading","automaticallyImplyLeading","automaticallyImplyMiddle","previousPageTitle","middle","trailing","backgroundColor","automaticBackgroundVisibility","brightness","padding","border","transitionBetweenRoutes","enableBackgroundFilterBlur","heroTag","bottom","key"], [], _flaxBindingMethods("flax.core/sdk_cupertino#type:CupertinoNavigationBar", "object", {"toStringShallow":_flaxMemberParameters0,"toStringDeep":_flaxMemberParameters1,"toStringShort":_flaxMemberParameters2,"toDiagnosticsNode":_flaxMemberParameters3,"debugDescribeChildren":_flaxMemberParameters2,"debugFillProperties":_flaxMemberParameters4,"toString":_flaxMemberParameters5,"shouldFullyObstruct":_flaxMemberParameters6,"createState":_flaxMemberParameters2,"createElement":_flaxMemberParameters2}, {}), []);
export function _CupertinoNavigationBarFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; leading?: Widget | null | undefined; automaticallyImplyLeading?: boolean | undefined; automaticallyImplyMiddle?: boolean | undefined; previousPageTitle?: string | null | undefined; middle?: Widget | null | undefined; trailing?: Widget | null | undefined; border?: Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::Border": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; automaticBackgroundVisibility?: boolean | undefined; enableBackgroundFilterBlur?: boolean | undefined; brightness?: upstream6.Brightness | null | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsDirectional": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; transitionBetweenRoutes?: boolean | undefined; heroTag?: {} | undefined; bottom?: Readonly<{ "__flaxBound:package:flutter/src/widgets/preferred_size.dart::PreferredSizeWidget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined } = {}): CupertinoNavigationBar {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_cupertino#type:CupertinoNavigationBar", "", [{"name":"key","fixed":true,"required":false,"positional":false},{"name":"leading","fixed":true,"required":false,"positional":false},{"name":"automaticallyImplyLeading","fixed":true,"required":false,"positional":false},{"name":"automaticallyImplyMiddle","fixed":true,"required":false,"positional":false},{"name":"previousPageTitle","fixed":true,"required":false,"positional":false},{"name":"middle","fixed":true,"required":false,"positional":false},{"name":"trailing","fixed":true,"required":false,"positional":false},{"name":"border","fixed":true,"required":false,"positional":false},{"name":"backgroundColor","fixed":true,"required":false,"positional":false},{"name":"automaticBackgroundVisibility","fixed":true,"required":false,"positional":false},{"name":"enableBackgroundFilterBlur","fixed":true,"required":false,"positional":false},{"name":"brightness","fixed":true,"required":false,"positional":false},{"name":"padding","fixed":true,"required":false,"positional":false},{"name":"transitionBetweenRoutes","fixed":true,"required":false,"positional":false},{"name":"heroTag","fixed":true,"required":false,"positional":false},{"name":"bottom","fixed":true,"required":false,"positional":false}], [], options) as CupertinoNavigationBar;
}
export namespace _CupertinoNavigationBarFactory {
export function large(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; largeTitle?: Widget | null | undefined; leading?: Widget | null | undefined; automaticallyImplyLeading?: boolean | undefined; automaticallyImplyTitle?: boolean | undefined; previousPageTitle?: string | null | undefined; trailing?: Widget | null | undefined; border?: Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::Border": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; automaticBackgroundVisibility?: boolean | undefined; enableBackgroundFilterBlur?: boolean | undefined; brightness?: upstream6.Brightness | null | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsDirectional": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; transitionBetweenRoutes?: boolean | undefined; heroTag?: {} | undefined; bottom?: Readonly<{ "__flaxBound:package:flutter/src/widgets/preferred_size.dart::PreferredSizeWidget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined } = {}): CupertinoNavigationBar {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_cupertino#type:CupertinoNavigationBar", "large", [{"name":"key","fixed":true,"required":false,"positional":false},{"name":"largeTitle","fixed":true,"required":false,"positional":false},{"name":"leading","fixed":true,"required":false,"positional":false},{"name":"automaticallyImplyLeading","fixed":true,"required":false,"positional":false},{"name":"automaticallyImplyTitle","fixed":true,"required":false,"positional":false},{"name":"previousPageTitle","fixed":true,"required":false,"positional":false},{"name":"trailing","fixed":true,"required":false,"positional":false},{"name":"border","fixed":true,"required":false,"positional":false},{"name":"backgroundColor","fixed":true,"required":false,"positional":false},{"name":"automaticBackgroundVisibility","fixed":true,"required":false,"positional":false},{"name":"enableBackgroundFilterBlur","fixed":true,"required":false,"positional":false},{"name":"brightness","fixed":true,"required":false,"positional":false},{"name":"padding","fixed":true,"required":false,"positional":false},{"name":"transitionBetweenRoutes","fixed":true,"required":false,"positional":false},{"name":"heroTag","fixed":true,"required":false,"positional":false},{"name":"bottom","fixed":true,"required":false,"positional":false}], [], options) as CupertinoNavigationBar;
}
}
export const CupertinoNavigationBar: typeof _CupertinoNavigationBarFactory & _FlaxInstanceType<CupertinoNavigationBar> & _FlaxDartType<CupertinoNavigationBar, readonly ["class", "flax.core/sdk_cupertino#type:CupertinoNavigationBar", readonly [], false]> = _flaxBindInstanceType<CupertinoNavigationBar, typeof _CupertinoNavigationBarFactory>(_CupertinoNavigationBarFactory, "flax.core/sdk_cupertino#type:CupertinoNavigationBar", ["flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable","flax.core/sdk_cupertino#type:ObstructingPreferredSizeWidget","flax.core/flutter#type:PreferredSizeWidget"]) as typeof _CupertinoNavigationBarFactory & _FlaxInstanceType<CupertinoNavigationBar> & _FlaxDartType<CupertinoNavigationBar, readonly ["class", "flax.core/sdk_cupertino#type:CupertinoNavigationBar", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "preferredSize" | "largeTitle" | "leading" | "automaticallyImplyLeading" | "automaticallyImplyMiddle" | "previousPageTitle" | "middle" | "trailing" | "backgroundColor" | "automaticBackgroundVisibility" | "brightness" | "padding" | "border" | "transitionBetweenRoutes" | "enableBackgroundFilterBlur" | "heroTag" | "bottom" | "key" | "toStringShallow" | "toStringDeep" | "toStringShort" | "toDiagnosticsNode" | "debugDescribeChildren" | "debugFillProperties" | "toString" | "shouldFullyObstruct" | "createState" | "createElement" | "__flaxBound:package:flutter/src/cupertino/nav_bar.dart::CupertinoNavigationBar" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/cupertino/page_scaffold.dart::ObstructingPreferredSizeWidget" | "__flaxBound:package:flutter/src/widgets/preferred_size.dart::PreferredSizeWidget";
