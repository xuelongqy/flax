// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
const _flaxMemberParameters0 = [] as const;
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/cupertino/_bindings/sdk_cupertino.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CupertinoListTile extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{ "__flaxBound:package:flutter/src/cupertino/list_tile.dart::CupertinoListTile": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __CupertinoListTile: unique symbol;
readonly [_flaxDartTypeValue]: CupertinoListTile;

readonly title: Widget;
readonly subtitle: Widget | null;
readonly additionalInfo: Widget | null;
readonly leading: Widget | null;
readonly trailing: Widget | null;
readonly onTap: (() => void | Promise<void>) | null;
readonly backgroundColor: upstream2.Color | null;
readonly backgroundColorActivated: upstream2.Color | null;
readonly padding: upstream3.EdgeInsetsGeometry | null;
readonly leadingSize: number;
readonly leadingToTitle: number;
readonly key: upstream1.Key | null;
createState(): upstream4.State<CupertinoListTile>;
createElement(): upstream5.StatefulElement;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream7.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream7.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream9.DiagnosticsTreeStyle | null | undefined}): upstream8.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream8.DiagnosticsNode>;
}
defineObject("flax.core/sdk_cupertino#type:CupertinoListTile", ["title","subtitle","additionalInfo","leading","trailing","onTap","backgroundColor","backgroundColorActivated","padding","leadingSize","leadingToTitle","key"], [], _flaxBindingMethods("flax.core/sdk_cupertino#type:CupertinoListTile", "object", {"createState":_flaxMemberParameters0,"createElement":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_widgets#type:Widget");
export function _CupertinoListTileFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; title: Widget; subtitle?: Widget | null | undefined; additionalInfo?: Widget | null | undefined; leading?: Widget | null | undefined; trailing?: Widget | null | undefined; onTap?: (() => void | Promise<void>) | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; backgroundColorActivated?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; leadingSize?: number | undefined; leadingToTitle?: number | undefined }): CupertinoListTile {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_cupertino#type:CupertinoListTile", "", [{"name":"key"},{"name":"title","required":true},{"name":"subtitle"},{"name":"additionalInfo"},{"name":"leading"},{"name":"trailing"},{"name":"onTap"},{"name":"backgroundColor"},{"name":"backgroundColorActivated"},{"name":"padding"},{"name":"leadingSize"},{"name":"leadingToTitle"}], [], options) as CupertinoListTile;
}
export namespace _CupertinoListTileFactory {
export function notched(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; title: Widget; subtitle?: Widget | null | undefined; additionalInfo?: Widget | null | undefined; leading?: Widget | null | undefined; trailing?: Widget | null | undefined; onTap?: (() => void | Promise<void>) | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; backgroundColorActivated?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; padding?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; leadingSize?: number | undefined; leadingToTitle?: number | undefined }): CupertinoListTile {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_cupertino#type:CupertinoListTile", "notched", [{"name":"key"},{"name":"title","required":true},{"name":"subtitle"},{"name":"additionalInfo"},{"name":"leading"},{"name":"trailing"},{"name":"onTap"},{"name":"backgroundColor"},{"name":"backgroundColorActivated"},{"name":"padding"},{"name":"leadingSize"},{"name":"leadingToTitle"}], [], options) as CupertinoListTile;
}
}
export const CupertinoListTile: typeof _CupertinoListTileFactory & _FlaxInstanceType<CupertinoListTile> & _FlaxDartType<CupertinoListTile, readonly ["class", "flax.core/sdk_cupertino#type:CupertinoListTile", readonly [], false]> = _flaxBindInstanceType<CupertinoListTile, typeof _CupertinoListTileFactory>(_CupertinoListTileFactory, "flax.core/sdk_cupertino#type:CupertinoListTile", ["flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _CupertinoListTileFactory & _FlaxInstanceType<CupertinoListTile> & _FlaxDartType<CupertinoListTile, readonly ["class", "flax.core/sdk_cupertino#type:CupertinoListTile", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "title" | "subtitle" | "additionalInfo" | "leading" | "trailing" | "onTap" | "backgroundColor" | "backgroundColorActivated" | "padding" | "leadingSize" | "leadingToTitle" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/cupertino/list_tile.dart::CupertinoListTile" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
