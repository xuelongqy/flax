// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_AsyncSnapshot';
import '@flax/flutter/widgets/_bindings/flutter_AsyncSnapshot';
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
import { _flaxMemberParameters2, _flaxMemberParameters5, _flaxMemberParameters6, _flaxMemberParameters7, _flaxMemberParameters8 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FutureBuilder<T extends unknown | null = unknown | null> extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{ "__flaxBound:package:flutter/src/widgets/async.dart::FutureBuilder": readonly [T] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __FutureBuilder: unique symbol;
readonly [_flaxDartTypeValue]: FutureBuilder<T>;

readonly future: Promise<T> | null;
readonly builder: ((context: upstream2.BuildContext, snapshot: Readonly<{ "__flaxBound:package:flutter/src/widgets/async.dart::AsyncSnapshot": readonly [T] }>) => Widget);
readonly initialData: T | null;
readonly key: upstream1.Key | null;
createState(): upstream4.State<FutureBuilder<T>>;
createElement(): upstream5.StatefulElement;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream7.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream7.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream9.DiagnosticsTreeStyle | null | undefined}): upstream8.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream8.DiagnosticsNode>;
}
defineObject("flax.core/sdk_widgets#type:FutureBuilder", ["future","builder","initialData","key"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:FutureBuilder", "object", {"createState":_flaxMemberParameters2,"createElement":_flaxMemberParameters2,"toStringShort":_flaxMemberParameters2,"debugFillProperties":_flaxMemberParameters5,"toStringShallow":_flaxMemberParameters6,"toStringDeep":_flaxMemberParameters7,"toDiagnosticsNode":_flaxMemberParameters8,"debugDescribeChildren":_flaxMemberParameters2}, {}), []);
export function _FutureBuilderFactory<T extends unknown | null = unknown | null>(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; future: Promise<(T | _FlaxDartOutput<T>)> | null; initialData?: (T | _FlaxDartOutput<T>) | null | undefined; builder: ((context: upstream2.BuildContext, snapshot: upstream3.AsyncSnapshot<_FlaxDartOutput<T>>) => Widget) }): FutureBuilder<T>;
export function _FutureBuilderFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; future: Promise<unknown | null> | null; initialData?: unknown | null | undefined; builder: ((context: upstream2.BuildContext, snapshot: upstream3.AsyncSnapshot<unknown | null>) => Widget) }): FutureBuilder<unknown | null>;
export function _FutureBuilderFactory(options: Record<string, unknown>): unknown {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:FutureBuilder", "", [{"name":"key"},{"name":"future","required":true},{"name":"initialData"},{"name":"builder","required":true}], [], options) as FutureBuilder<unknown | null>;
}
export namespace _FutureBuilderFactory { export function setDebugRethrowError(value: boolean): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:FutureBuilder.debugRethrowError%3D", [value]);
} }
export namespace _FutureBuilderFactory { export declare const debugRethrowError: boolean; }
_flaxDefineStaticGetters(_FutureBuilderFactory, "flax.core/sdk_widgets#read:FutureBuilder.", ["debugRethrowError"]);
export const FutureBuilder: typeof _FutureBuilderFactory & _FlaxInstanceType<FutureBuilder<unknown | null>> & _FlaxDartType<FutureBuilder<unknown | null>, readonly ["class", "flax.core/sdk_widgets#type:FutureBuilder", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<FutureBuilder<unknown | null>, typeof _FutureBuilderFactory>(_FutureBuilderFactory, "flax.core/sdk_widgets#type:FutureBuilder", ["flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _FutureBuilderFactory & _FlaxInstanceType<FutureBuilder<unknown | null>> & _FlaxDartType<FutureBuilder<unknown | null>, readonly ["class", "flax.core/sdk_widgets#type:FutureBuilder", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(FutureBuilder, "flax.core/sdk_widgets#type:FutureBuilder", {"category":"object","constructors":{"":[{"name":"key","required":false,"positional":false},{"name":"future","required":true,"positional":false},{"name":"initialData","required":false,"positional":false},{"name":"builder","required":true,"positional":false}]}});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "future" | "builder" | "initialData" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/async.dart::FutureBuilder" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {(options: {key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined;future: Promise<(_Selected0 | DartInput<_Selected0>)> | null;initialData?: (_Selected0 | DartInput<_Selected0>) | null | undefined;builder: ((context: upstream2.BuildContext, snapshot: upstream3.AsyncSnapshot<_Selected0>) => Widget)}): FutureBuilder<_Selected0>;readonly prototype: FutureBuilder<_Selected0>;} & _FlaxInstanceType<FutureBuilder<_Selected0>> & _FlaxDartType<FutureBuilder<_Selected0>> : never : never; }
