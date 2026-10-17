// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"joiner","required":false,"positional":false}] as const;
const _flaxMemberParameters2 = [{"name":"prefixLineOne","required":false,"positional":false},{"name":"prefixOtherLines","required":false,"positional":false},{"name":"wrapWidth","required":false,"positional":false}] as const;
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_TextStyle';
import '@flax/flutter/widgets/_bindings/flutter_TextStyle';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_Clip';
import '@flax/flutter/widgets/_bindings/flutter_Clip';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream8 from '@flax/flutter/services/_bindings/flutter_Size';
import '@flax/flutter/services/_bindings/flutter_Size';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AppBar extends _FlaxDartWidget, upstream0.StatefulWidget, Omit<upstream1.PreferredSizeWidget, 'kind'> { readonly __AppBar: unique symbol;

readonly preferredSize: upstream8.Size;
readonly leading: Widget | null;
readonly automaticallyImplyLeading: boolean;
readonly title: Widget | null;
readonly actions: DartList<Widget> | null;
readonly automaticallyImplyActions: boolean;
readonly flexibleSpace: Widget | null;
readonly bottom: upstream1.PreferredSizeWidget | null;
readonly elevation: number | null;
readonly scrolledUnderElevation: number | null;
readonly shadowColor: upstream3.Color | null;
readonly surfaceTintColor: upstream3.Color | null;
readonly shape: upstream4.ShapeBorder | null;
readonly backgroundColor: upstream3.Color | null;
readonly foregroundColor: upstream3.Color | null;
readonly primary: boolean;
readonly centerTitle: boolean | null;
readonly excludeHeaderSemantics: boolean;
readonly titleSpacing: number | null;
readonly toolbarOpacity: number;
readonly bottomOpacity: number;
readonly toolbarHeight: number | null;
readonly leadingWidth: number | null;
readonly toolbarTextStyle: upstream5.TextStyle | null;
readonly titleTextStyle: upstream5.TextStyle | null;
readonly forceMaterialTransparency: boolean;
readonly useDefaultSemanticsOrder: boolean;
readonly clipBehavior: upstream6.Clip | null;
readonly actionsPadding: upstream7.EdgeInsetsGeometry | null;
readonly animateColor: boolean;
readonly key: upstream2.Key | null;
createState(): upstream10.State<AppBar>;
toStringShort(): string;
toStringShallow(options?: {joiner?: string | undefined}): string;
toStringDeep(options?: {prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
}
defineObject("flax.material/material#type:AppBar", ["preferredSize","leading","automaticallyImplyLeading","title","actions","automaticallyImplyActions","flexibleSpace","bottom","elevation","scrolledUnderElevation","shadowColor","surfaceTintColor","shape","backgroundColor","foregroundColor","primary","centerTitle","excludeHeaderSemantics","titleSpacing","toolbarOpacity","bottomOpacity","toolbarHeight","leadingWidth","toolbarTextStyle","titleTextStyle","forceMaterialTransparency","useDefaultSemanticsOrder","clipBehavior","actionsPadding","animateColor","key"], [], _flaxBindingMethods("flax.material/material#type:AppBar", "object", {"createState":_flaxMemberParameters0,"toStringShort":_flaxMemberParameters0,"toStringShallow":_flaxMemberParameters1,"toStringDeep":_flaxMemberParameters2}, {}), []);
export function _AppBarFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; leading?: Widget | null | undefined; automaticallyImplyLeading?: boolean | undefined; title?: Widget | null | undefined; actions?: DartListInput<Widget, Widget> | null | undefined; automaticallyImplyActions?: boolean | undefined; flexibleSpace?: Widget | null | undefined; bottom?: upstream1.PreferredSizeWidget | null | undefined; elevation?: number | null | undefined; scrolledUnderElevation?: number | null | undefined; shadowColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; surfaceTintColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; shape?: Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [] }> | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; foregroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; primary?: boolean | undefined; centerTitle?: boolean | null | undefined; excludeHeaderSemantics?: boolean | undefined; titleSpacing?: number | null | undefined; toolbarOpacity?: number | undefined; bottomOpacity?: number | undefined; toolbarHeight?: number | null | undefined; leadingWidth?: number | null | undefined; toolbarTextStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> | null | undefined; titleTextStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> | null | undefined; forceMaterialTransparency?: boolean | undefined; useDefaultSemanticsOrder?: boolean | undefined; clipBehavior?: upstream6.Clip | null | undefined; actionsPadding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; animateColor?: boolean | undefined } = {}): AppBar {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:AppBar", "", [{"name":"key","fixed":true,"required":false,"positional":false},{"name":"leading","fixed":true,"required":false,"positional":false},{"name":"automaticallyImplyLeading","fixed":true,"required":false,"positional":false},{"name":"title","fixed":true,"required":false,"positional":false},{"name":"actions","fixed":true,"required":false,"positional":false},{"name":"automaticallyImplyActions","fixed":true,"required":false,"positional":false},{"name":"flexibleSpace","fixed":true,"required":false,"positional":false},{"name":"bottom","fixed":true,"required":false,"positional":false},{"name":"elevation","fixed":true,"required":false,"positional":false},{"name":"scrolledUnderElevation","fixed":true,"required":false,"positional":false},{"name":"shadowColor","fixed":true,"required":false,"positional":false},{"name":"surfaceTintColor","fixed":true,"required":false,"positional":false},{"name":"shape","fixed":true,"required":false,"positional":false},{"name":"backgroundColor","fixed":true,"required":false,"positional":false},{"name":"foregroundColor","fixed":true,"required":false,"positional":false},{"name":"primary","fixed":true,"required":false,"positional":false},{"name":"centerTitle","fixed":true,"required":false,"positional":false},{"name":"excludeHeaderSemantics","fixed":true,"required":false,"positional":false},{"name":"titleSpacing","fixed":true,"required":false,"positional":false},{"name":"toolbarOpacity","fixed":true,"required":false,"positional":false},{"name":"bottomOpacity","fixed":true,"required":false,"positional":false},{"name":"toolbarHeight","fixed":true,"required":false,"positional":false},{"name":"leadingWidth","fixed":true,"required":false,"positional":false},{"name":"toolbarTextStyle","fixed":true,"required":false,"positional":false},{"name":"titleTextStyle","fixed":true,"required":false,"positional":false},{"name":"forceMaterialTransparency","fixed":true,"required":false,"positional":false},{"name":"useDefaultSemanticsOrder","fixed":true,"required":false,"positional":false},{"name":"clipBehavior","fixed":true,"required":false,"positional":false},{"name":"actionsPadding","fixed":true,"required":false,"positional":false},{"name":"animateColor","fixed":true,"required":false,"positional":false}], [], options) as AppBar;
}
export namespace _AppBarFactory { export function preferredHeightFor(context: upstream9.BuildContext, preferredSize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }>): number {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:AppBar.preferredHeightFor", [contextHandle(context, "flax.core/flutter#type:BuildContext"), preferredSize]);
return _flaxResult as number;
} }
export const AppBar: typeof _AppBarFactory & _FlaxInstanceType<AppBar> & _FlaxDartType<AppBar, readonly ["class", "flax.material/material#type:AppBar", readonly [], false]> = _flaxBindInstanceType<AppBar, typeof _AppBarFactory>(_AppBarFactory, "flax.material/material#type:AppBar", ["flax.core/components#type:StatefulWidget","package:flutter/src/widgets/framework.dart::Widget","package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree","dart:core::Object","package:flutter/src/foundation/diagnostics.dart::Diagnosticable","flax.core/flutter#type:PreferredSizeWidget"]) as typeof _AppBarFactory & _FlaxInstanceType<AppBar> & _FlaxDartType<AppBar, readonly ["class", "flax.material/material#type:AppBar", readonly [], false]>;
