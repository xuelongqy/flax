// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/cupertino-ui/_bindings/cupertino.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CupertinoTextSelectionToolbar extends _FlaxDartWidget, Omit<upstream0.StatelessWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatelessWidget>, Readonly<{ "__flaxBound:package:cupertino_ui/src/text_selection_toolbar.dart::CupertinoTextSelectionToolbar": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __CupertinoTextSelectionToolbar: unique symbol;
readonly [_flaxDartTypeValue]: CupertinoTextSelectionToolbar;

readonly anchorAbove: upstream2.Offset;
readonly anchorBelow: upstream2.Offset;
readonly children: DartList<Widget>;
readonly toolbarBuilder: ((context: upstream3.BuildContext, anchorAbove: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, anchorBelow: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>, child: Widget) => Widget);
readonly key: upstream1.Key | null;
build(context: upstream3.BuildContext): Widget;
createElement(): upstream4.StatelessElement;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream6.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream6.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream8.DiagnosticsTreeStyle | null | undefined}): upstream7.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream7.DiagnosticsNode>;
}
defineObject("flax.cupertino/cupertino#type:CupertinoTextSelectionToolbar", ["anchorAbove","anchorBelow","children","toolbarBuilder","key"], [], _flaxBindingMethods("flax.cupertino/cupertino#type:CupertinoTextSelectionToolbar", "object", {}, {}), [], undefined, "flax.core/sdk_widgets#type:StatelessWidget");
export function _CupertinoTextSelectionToolbarFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; anchorAbove: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; anchorBelow: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>; children: DartListInput<Widget, Widget>; toolbarBuilder?: ((context: upstream3.BuildContext, anchorAbove: upstream2.Offset, anchorBelow: upstream2.Offset, child: Widget) => Widget) | undefined }): CupertinoTextSelectionToolbar {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.cupertino/cupertino#type:CupertinoTextSelectionToolbar", "", [{"name":"key"},{"name":"anchorAbove","required":true},{"name":"anchorBelow","required":true},{"name":"children","required":true},{"name":"toolbarBuilder"}], [], options) as CupertinoTextSelectionToolbar;
}
export declare namespace _CupertinoTextSelectionToolbarFactory { const __flaxJsx: { readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _CupertinoTextSelectionToolbarFactory>[0]>), "children"> & { children: (globalThis.NonNullable<globalThis.Parameters<typeof _CupertinoTextSelectionToolbarFactory>[0]>)["children"] | Widget }; readonly slot: "children"; readonly many: true; }; }
export namespace _CupertinoTextSelectionToolbarFactory { export declare const kToolbarScreenPadding: number; }
_flaxDefineStaticGetters(_CupertinoTextSelectionToolbarFactory, "flax.cupertino/cupertino#read:CupertinoTextSelectionToolbar.", ["kToolbarScreenPadding"]);
export const CupertinoTextSelectionToolbar: typeof _CupertinoTextSelectionToolbarFactory & _FlaxInstanceType<CupertinoTextSelectionToolbar> & _FlaxDartType<CupertinoTextSelectionToolbar, readonly ["class", "flax.cupertino/cupertino#type:CupertinoTextSelectionToolbar", readonly [], false]> = _flaxBindInstanceType<CupertinoTextSelectionToolbar, typeof _CupertinoTextSelectionToolbarFactory>(_CupertinoTextSelectionToolbarFactory, "flax.cupertino/cupertino#type:CupertinoTextSelectionToolbar", ["flax.core/sdk_widgets#type:StatelessWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _CupertinoTextSelectionToolbarFactory & _FlaxInstanceType<CupertinoTextSelectionToolbar> & _FlaxDartType<CupertinoTextSelectionToolbar, readonly ["class", "flax.cupertino/cupertino#type:CupertinoTextSelectionToolbar", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "anchorAbove" | "anchorBelow" | "children" | "toolbarBuilder" | "key" | "build" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:cupertino_ui/src/text_selection_toolbar.dart::CupertinoTextSelectionToolbar" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
