// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/dart/async/_bindings/flutter_Stream';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { _flaxMemberParameters2, _flaxMemberParameters414, _flaxMemberParameters415, _flaxMemberParameters416, _flaxMemberParameters417, _flaxMemberParameters5, _flaxMemberParameters6, _flaxMemberParameters7, _flaxMemberParameters8 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StreamBuilderBase<T extends unknown | null = unknown | null, S extends unknown | null = unknown | null> extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{ "__flaxBound:package:flutter/src/widgets/async.dart::StreamBuilderBase": readonly [T, S] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __StreamBuilderBase: unique symbol;
readonly [_flaxDartTypeValue]: StreamBuilderBase<T, S>;

readonly stream: upstream1.Stream<T> | null;
readonly key: upstream2.Key | null;
initial(): S;
afterConnected(current: (S | DartInput<S>)): S;
afterData(current: (S | DartInput<S>), data: (T | DartInput<T>)): S;
afterError(current: (S | DartInput<S>), error: {}, stackTrace: Readonly<{ "__flaxBound:dart:core::StackTrace": readonly [] }>): S;
afterDone(current: (S | DartInput<S>)): S;
afterDisconnected(current: (S | DartInput<S>)): S;
build(context: upstream4.BuildContext, currentSummary: (S | DartInput<S>)): Widget;
createState(): upstream5.State<StreamBuilderBase<T, S>>;
createElement(): upstream6.StatefulElement;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream8.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream8.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream10.DiagnosticsTreeStyle | null | undefined}): upstream9.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream9.DiagnosticsNode>;
}
defineObject("flax.core/sdk_widgets#type:StreamBuilderBase", ["stream","key"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:StreamBuilderBase", "object", {"initial":_flaxMemberParameters2,"afterConnected":_flaxMemberParameters414,"afterData":_flaxMemberParameters415,"afterError":_flaxMemberParameters416,"afterDone":_flaxMemberParameters414,"afterDisconnected":_flaxMemberParameters414,"build":_flaxMemberParameters417,"createState":_flaxMemberParameters2,"createElement":_flaxMemberParameters2,"toStringShort":_flaxMemberParameters2,"debugFillProperties":_flaxMemberParameters5,"toStringShallow":_flaxMemberParameters6,"toStringDeep":_flaxMemberParameters7,"toDiagnosticsNode":_flaxMemberParameters8,"debugDescribeChildren":_flaxMemberParameters2}, {}), []);
export const StreamBuilderBase: object & _FlaxInstanceType<StreamBuilderBase<unknown | null, unknown | null>> & _FlaxDartType<StreamBuilderBase<unknown | null, unknown | null>, readonly ["class", "flax.core/sdk_widgets#type:StreamBuilderBase", readonly [readonly ["any", null, readonly [], true], readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0> = _flaxBindInstanceType<StreamBuilderBase<unknown | null, unknown | null>, object>({}, "flax.core/sdk_widgets#type:StreamBuilderBase", ["flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as object & _FlaxInstanceType<StreamBuilderBase<unknown | null, unknown | null>> & _FlaxDartType<StreamBuilderBase<unknown | null, unknown | null>, readonly ["class", "flax.core/sdk_widgets#type:StreamBuilderBase", readonly [readonly ["any", null, readonly [], true], readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
_flaxDefineDartTypes(StreamBuilderBase, "flax.core/sdk_widgets#type:StreamBuilderBase", {"category":"object","constructors":{}});
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "stream" | "key" | "initial" | "afterConnected" | "afterData" | "afterError" | "afterDone" | "afterDisconnected" | "build" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/async.dart::StreamBuilderBase" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [unknown | null] ? [_Selected1] extends [unknown | null] ? {readonly prototype: StreamBuilderBase<_Selected0, _Selected1>;} & _FlaxInstanceType<StreamBuilderBase<_Selected0, _Selected1>> & _FlaxDartType<StreamBuilderBase<_Selected0, _Selected1>> : never : never : never; }
