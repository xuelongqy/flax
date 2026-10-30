// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_BoxDecoration';
import '@flax/flutter/painting/_bindings/flutter_BoxDecoration';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream6 from '@flax/cupertino-ui/_bindings/cupertino_CupertinoListSectionType';
import '@flax/cupertino-ui/_bindings/cupertino_CupertinoListSectionType';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/cupertino-ui/_bindings/cupertino.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CupertinoListSection extends _FlaxDartWidget, Omit<upstream0.StatelessWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatelessWidget>, Readonly<{ "__flaxBound:package:cupertino_ui/src/list_section.dart::CupertinoListSection": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __CupertinoListSection: unique symbol;
readonly [_flaxDartTypeValue]: CupertinoListSection;

readonly type: upstream6.CupertinoListSectionType;
readonly header: Widget | null;
readonly footer: Widget | null;
readonly margin: upstream2.EdgeInsetsGeometry;
readonly children: DartList<Widget> | null;
readonly decoration: upstream4.BoxDecoration | null;
readonly backgroundColor: upstream3.Color;
readonly clipBehavior: upstream5.Clip;
readonly dividerMargin: number;
readonly additionalDividerMargin: number;
readonly topMargin: number | null;
readonly separatorColor: upstream3.Color | null;
readonly key: upstream1.Key | null;
build(context: upstream7.BuildContext): Widget;
createElement(): upstream8.StatelessElement;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream10.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream10.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream12.DiagnosticsTreeStyle | null | undefined}): upstream11.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream11.DiagnosticsNode>;
}
defineObject("flax.cupertino/cupertino#type:CupertinoListSection", ["type","header","footer","margin","children","decoration","backgroundColor","clipBehavior","dividerMargin","additionalDividerMargin","topMargin","separatorColor","key"], [], _flaxBindingMethods("flax.cupertino/cupertino#type:CupertinoListSection", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:StatelessWidget");
export function _CupertinoListSectionFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; children?: DartListInput<Widget, Widget> | null | undefined; header?: Widget | null | undefined; footer?: Widget | null | undefined; margin?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; decoration?: Readonly<{ "__flaxBound:package:flutter/src/painting/box_decoration.dart::BoxDecoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; clipBehavior?: upstream5.Clip | undefined; dividerMargin?: number | undefined; additionalDividerMargin?: number | null | undefined; topMargin?: number | null | undefined; hasLeading?: boolean | undefined; separatorColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined } = {}): CupertinoListSection {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.cupertino/cupertino#type:CupertinoListSection", "", [{"name":"key"},{"name":"children"},{"name":"header"},{"name":"footer"},{"name":"margin"},{"name":"backgroundColor"},{"name":"decoration"},{"name":"clipBehavior"},{"name":"dividerMargin"},{"name":"additionalDividerMargin"},{"name":"topMargin"},{"name":"hasLeading"},{"name":"separatorColor"}], [], options) as CupertinoListSection;
}
export declare namespace _CupertinoListSectionFactory { const __flaxJsx: { readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _CupertinoListSectionFactory>[0]>), "children"> & { children?: (globalThis.NonNullable<globalThis.Parameters<typeof _CupertinoListSectionFactory>[0]>)["children"] | Widget }; readonly slot: "children"; readonly many: true; }; }
export namespace _CupertinoListSectionFactory {
export function insetGrouped(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; children?: DartListInput<Widget, Widget> | null | undefined; header?: Widget | null | undefined; footer?: Widget | null | undefined; margin?: Readonly<{ "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [] }> | null | undefined; backgroundColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; decoration?: Readonly<{ "__flaxBound:package:flutter/src/painting/box_decoration.dart::BoxDecoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; clipBehavior?: upstream5.Clip | undefined; dividerMargin?: number | undefined; additionalDividerMargin?: number | null | undefined; topMargin?: number | null | undefined; hasLeading?: boolean | undefined; separatorColor?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined } = {}): CupertinoListSection {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.cupertino/cupertino#type:CupertinoListSection", "insetGrouped", [{"name":"key"},{"name":"children"},{"name":"header"},{"name":"footer"},{"name":"margin"},{"name":"backgroundColor"},{"name":"decoration"},{"name":"clipBehavior"},{"name":"dividerMargin"},{"name":"additionalDividerMargin"},{"name":"topMargin"},{"name":"hasLeading"},{"name":"separatorColor"}], [], options) as CupertinoListSection;
}
export declare namespace insetGrouped { const __flaxJsx: { readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof insetGrouped>[0]>), "children"> & { children?: (globalThis.NonNullable<globalThis.Parameters<typeof insetGrouped>[0]>)["children"] | Widget }; readonly slot: "children"; readonly many: true; }; }
}
export const CupertinoListSection: typeof _CupertinoListSectionFactory & _FlaxInstanceType<CupertinoListSection> & _FlaxDartType<CupertinoListSection, readonly ["class", "flax.cupertino/cupertino#type:CupertinoListSection", readonly [], false]> = _flaxBindInstanceType<CupertinoListSection, typeof _CupertinoListSectionFactory>(_CupertinoListSectionFactory, "flax.cupertino/cupertino#type:CupertinoListSection", ["flax.core/sdk_widgets#type:StatelessWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _CupertinoListSectionFactory & _FlaxInstanceType<CupertinoListSection> & _FlaxDartType<CupertinoListSection, readonly ["class", "flax.cupertino/cupertino#type:CupertinoListSection", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "type" | "header" | "footer" | "margin" | "children" | "decoration" | "backgroundColor" | "clipBehavior" | "dividerMargin" | "additionalDividerMargin" | "topMargin" | "separatorColor" | "key" | "build" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:cupertino_ui/src/list_section.dart::CupertinoListSection" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
