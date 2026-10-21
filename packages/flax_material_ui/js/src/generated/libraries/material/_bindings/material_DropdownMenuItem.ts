// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
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
import { _flaxMemberParameters0, _flaxMemberParameters4, _flaxMemberParameters7, _flaxMemberParameters14, _flaxMemberParameters15, _flaxMemberParameters6 } from "@flax/material-ui/_bindings/material.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DropdownMenuItem<T extends unknown | null = unknown | null> extends _FlaxDartWidget, Omit<upstream0.StatelessWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatelessWidget>, Readonly<{ "__flaxBound:package:material_ui/src/dropdown.dart::DropdownMenuItem": readonly [T] }>, Readonly<{ "__flaxBound:package:material_ui/src/dropdown.dart::_DropdownMenuItemContainer": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __DropdownMenuItem: unique symbol;
readonly [_flaxDartTypeValue]: DropdownMenuItem<T>;

readonly onTap: (() => void) | null;
readonly value: T | null;
readonly enabled: boolean;
readonly child: Widget;
readonly alignment: upstream2.AlignmentGeometry;
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
defineObject("flax.material/material#type:DropdownMenuItem", ["onTap","value","enabled","child","alignment","key"], [], _flaxBindingMethods("flax.material/material#type:DropdownMenuItem", "object", {"build":_flaxMemberParameters0,"createElement":_flaxMemberParameters4,"toStringShort":_flaxMemberParameters4,"debugFillProperties":_flaxMemberParameters7,"toStringShallow":_flaxMemberParameters14,"toStringDeep":_flaxMemberParameters15,"toDiagnosticsNode":_flaxMemberParameters6,"debugDescribeChildren":_flaxMemberParameters4}, {}), []);
export function _DropdownMenuItemFactory<T extends unknown | null = unknown | null>(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; onTap?: (() => void) | null | undefined; value?: (T | _FlaxDartOutput<T>) | null | undefined; enabled?: boolean | undefined; alignment?: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | undefined; child: Widget }): DropdownMenuItem<T>;
export function _DropdownMenuItemFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; onTap?: (() => void) | null | undefined; value?: unknown | null | undefined; enabled?: boolean | undefined; alignment?: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | undefined; child: Widget }): DropdownMenuItem<unknown | null>;
export function _DropdownMenuItemFactory(options: Record<string, unknown>): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:DropdownMenuItem", "", [{"name":"key"},{"name":"onTap"},{"name":"value"},{"name":"enabled"},{"name":"alignment"},{"name":"child","required":true}], [], options) as DropdownMenuItem<unknown | null>;
}
export const DropdownMenuItem: typeof _DropdownMenuItemFactory & _FlaxInstanceType<DropdownMenuItem<unknown | null>> & _FlaxDartType<DropdownMenuItem<unknown | null>, readonly ["class", "flax.material/material#type:DropdownMenuItem", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<DropdownMenuItem<unknown | null>, typeof _DropdownMenuItemFactory>(_DropdownMenuItemFactory, "flax.material/material#type:DropdownMenuItem", ["package:material_ui/src/dropdown.dart::_DropdownMenuItemContainer","flax.core/sdk_widgets#type:StatelessWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _DropdownMenuItemFactory & _FlaxInstanceType<DropdownMenuItem<unknown | null>> & _FlaxDartType<DropdownMenuItem<unknown | null>, readonly ["class", "flax.material/material#type:DropdownMenuItem", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(DropdownMenuItem, "flax.material/material#type:DropdownMenuItem", {"category":"object","constructors":{"":[{"name":"key","required":false,"positional":false},{"name":"onTap","required":false,"positional":false},{"name":"value","required":false,"positional":false},{"name":"enabled","required":false,"positional":false},{"name":"alignment","required":false,"positional":false},{"name":"child","required":true,"positional":false}]}});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "onTap" | "value" | "enabled" | "child" | "alignment" | "key" | "build" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:material_ui/src/dropdown.dart::DropdownMenuItem" | "__flaxBound:package:material_ui/src/dropdown.dart::_DropdownMenuItemContainer" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {(options: {key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined;onTap?: (() => void) | null | undefined;value?: (_Selected0 | DartInput<_Selected0>) | null | undefined;enabled?: boolean | undefined;alignment?: Readonly<{ "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [] }> | undefined;child: Widget}): DropdownMenuItem<_Selected0>;readonly prototype: DropdownMenuItem<_Selected0>;} & _FlaxInstanceType<DropdownMenuItem<_Selected0>> & _FlaxDartType<DropdownMenuItem<_Selected0>> : never : never; }
