// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/material-ui/_bindings/material_InputDecoration';
import '@flax/material-ui/_bindings/material_InputDecoration';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_TextAlign';
import '@flax/dart/ui/_bindings/flutter_TextAlign';
import type * as upstream5 from '@flax/flutter/painting/_bindings/sdk_painting_TextAlignVertical';
import '@flax/flutter/painting/_bindings/sdk_painting_TextAlignVertical';
import type * as upstream6 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
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
export interface InputDecorator extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{ "__flaxBound:package:material_ui/src/input_decorator.dart::InputDecorator": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __InputDecorator: unique symbol;
readonly [_flaxDartTypeValue]: InputDecorator;

readonly decoration: upstream2.InputDecoration;
readonly baseStyle: upstream3.TextStyle | null;
readonly textAlign: upstream4.TextAlign | null;
readonly textAlignVertical: upstream5.TextAlignVertical | null;
readonly isFocused: boolean;
readonly isHovering: boolean;
readonly expands: boolean;
readonly isEmpty: boolean;
readonly child: Widget | null;
readonly key: upstream1.Key | null;
createState(): upstream8.State<InputDecorator>;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
createElement(): upstream10.StatefulElement;
toStringShort(): string;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream11.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream11.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream13.DiagnosticsTreeStyle | null | undefined}): upstream12.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream12.DiagnosticsNode>;
}
defineObject("flax.material/material#type:InputDecorator", ["decoration","baseStyle","textAlign","textAlignVertical","isFocused","isHovering","expands","isEmpty","child","key"], [], _flaxBindingMethods("flax.material/material#type:InputDecorator", "object", {"createState":_flaxMemberParameters4,"createElement":_flaxMemberParameters4}, {}), [], undefined, "flax.core/sdk_widgets#type:Widget");
export function _InputDecoratorFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; decoration: Readonly<{ "__flaxBound:package:material_ui/src/input_decorator.dart::InputDecoration": readonly [] }>; baseStyle?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> | null | undefined; textAlign?: upstream4.TextAlign | null | undefined; textAlignVertical?: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::TextAlignVertical": readonly [] }> | null | undefined; isFocused?: boolean | undefined; isHovering?: boolean | undefined; expands?: boolean | undefined; isEmpty?: boolean | undefined; child?: Widget | null | undefined }): InputDecorator {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:InputDecorator", "", [{"name":"key"},{"name":"decoration","required":true},{"name":"baseStyle"},{"name":"textAlign"},{"name":"textAlignVertical"},{"name":"isFocused"},{"name":"isHovering"},{"name":"expands"},{"name":"isEmpty"},{"name":"child"}], [], options) as InputDecorator;
}
export declare namespace _InputDecoratorFactory { const __flaxJsx: { readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _InputDecoratorFactory>[0]>), "child"> & ({ "child"?: (globalThis.NonNullable<globalThis.Parameters<typeof _InputDecoratorFactory>[0]>)["child"]; children?: never } | { "child"?: never; children?: (globalThis.NonNullable<globalThis.Parameters<typeof _InputDecoratorFactory>[0]>)["child"] }); readonly slot: "child"; readonly many: false; }; }
export namespace _InputDecoratorFactory { export function containerOf(context: upstream7.BuildContext): upstream6.RenderBox | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:InputDecorator.containerOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")], _flaxMemberParameters0);
return _flaxResult as upstream6.RenderBox | null;
} }
export const InputDecorator: typeof _InputDecoratorFactory & _FlaxInstanceType<InputDecorator> & _FlaxDartType<InputDecorator, readonly ["class", "flax.material/material#type:InputDecorator", readonly [], false]> = _flaxBindInstanceType<InputDecorator, typeof _InputDecoratorFactory>(_InputDecoratorFactory, "flax.material/material#type:InputDecorator", ["flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _InputDecoratorFactory & _FlaxInstanceType<InputDecorator> & _FlaxDartType<InputDecorator, readonly ["class", "flax.material/material#type:InputDecorator", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "decoration" | "baseStyle" | "textAlign" | "textAlignVertical" | "isFocused" | "isHovering" | "expands" | "isEmpty" | "child" | "key" | "createState" | "debugFillProperties" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:material_ui/src/input_decorator.dart::InputDecorator" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
