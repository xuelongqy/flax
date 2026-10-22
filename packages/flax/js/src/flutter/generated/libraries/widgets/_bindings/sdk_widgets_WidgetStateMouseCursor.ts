// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetStatesConstraint';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetStatesConstraint';
import type * as upstream5 from '@flax/flutter/services/_bindings/sdk_services_MouseCursorSession';
import '@flax/flutter/services/_bindings/sdk_services_MouseCursorSession';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { _flaxMemberParameters514, _flaxMemberParameters2, _flaxMemberParameters524, _flaxMemberParameters9, _flaxMemberParameters8, _flaxMemberParameters5 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface WidgetStateMouseCursor extends Omit<upstream0.MouseCursor, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.MouseCursor>, Omit<upstream2.WidgetStateProperty<upstream0.MouseCursor>, _flaxOwnMembers0 | keyof upstream0.MouseCursor | keyof upstream1.Diagnosticable>, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateMouseCursor": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream0.MouseCursor] }> { readonly __WidgetStateMouseCursor: unique symbol;
readonly [_flaxDartTypeValue]: WidgetStateMouseCursor;

readonly debugDescription: string;
createSession(device: number): upstream5.MouseCursorSession;
toString(options?: {minLevel?: upstream6.DiagnosticLevel | undefined}): string;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream8.DiagnosticsTreeStyle | null | undefined}): upstream7.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
resolve(states: DartSetInput<upstream3.WidgetState, upstream3.WidgetState>): upstream0.MouseCursor;
}
defineObject("flax.core/sdk_widgets#type:WidgetStateMouseCursor", ["debugDescription"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:WidgetStateMouseCursor", "object", {"resolve":_flaxMemberParameters514}, {}), [], undefined, "flax.core/flutter#type:MouseCursor");
export namespace _WidgetStateMouseCursorFactory {
export function resolveWith(callback: ((states: DartSet<upstream3.WidgetState>) => Readonly<{ "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>), options: { debugDescription?: string | undefined } = {}): WidgetStateMouseCursor {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:WidgetStateMouseCursor", "resolveWith", [{"name":"callback","required":true,"positional":true},{"name":"debugDescription"}], [callback], options) as WidgetStateMouseCursor;
}
}
export namespace _WidgetStateMouseCursorFactory {
export function fromMap(map: DartMapInput<upstream4.WidgetStatesConstraint, upstream0.MouseCursor, Readonly<{ "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>): WidgetStateMouseCursor {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:WidgetStateMouseCursor", "fromMap", [{"name":"map","required":true,"positional":true}], [map], {}) as WidgetStateMouseCursor;
}
}
const _WidgetStateMouseCursorProxy = {type: "flax.core/sdk_widgets#type:WidgetStateMouseCursor", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"createSession":_flaxMemberParameters524,"toString":_flaxMemberParameters9,"toStringShort":_flaxMemberParameters2,"toDiagnosticsNode":_flaxMemberParameters8,"debugFillProperties":_flaxMemberParameters5,"resolve":_flaxMemberParameters514}, getters: ["debugDescription"], setters: [], contextMembers: [], superMembers: ["createSession","toString","toStringShort","toDiagnosticsNode","debugFillProperties"]} as const;
export interface _WidgetStateMouseCursorNative extends WidgetStateMouseCursor {
readonly [_flaxDartTypeValue]: _WidgetStateMouseCursorNative;

createSession(device: number): upstream5.MouseCursorSession;
toString(options?: {minLevel?: upstream6.DiagnosticLevel | undefined}): string;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream8.DiagnosticsTreeStyle | null | undefined}): upstream7.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
}
export abstract class _WidgetStateMouseCursorNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<WidgetStateMouseCursor>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: WidgetStateMouseCursor;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:WidgetStateMouseCursor", readonly [], false];
constructor() { super(_WidgetStateMouseCursorProxy, Array.from(arguments)); }
abstract resolve(states: DartSetInput<upstream3.WidgetState, upstream3.WidgetState>): upstream0.MouseCursor;
abstract get debugDescription(): string;
}
_flaxDefineProxyBase(_WidgetStateMouseCursorNative.prototype, _WidgetStateMouseCursorProxy);
export namespace _WidgetStateMouseCursorFactory { export function implement(args: [], implementation: {resolve: ((states: DartSet<upstream3.WidgetState>) => Readonly<{ "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>); get debugDescription(): string}): WidgetStateMouseCursor {
return constructProxy(_WidgetStateMouseCursorProxy, args, implementation) as WidgetStateMouseCursor; } }
const _WidgetStateMouseCursorBinding = _flaxProxyFactory(_WidgetStateMouseCursorFactory, _WidgetStateMouseCursorNative) as unknown as typeof _WidgetStateMouseCursorFactory & (abstract new() => _WidgetStateMouseCursorNative);
export namespace _WidgetStateMouseCursorFactory { export declare const clickable: WidgetStateMouseCursor; }
export namespace _WidgetStateMouseCursorFactory { export declare const adaptiveClickable: WidgetStateMouseCursor; }
export namespace _WidgetStateMouseCursorFactory { export declare const textable: WidgetStateMouseCursor; }
_flaxDefineStaticGetters(_WidgetStateMouseCursorFactory, "flax.core/sdk_widgets#read:WidgetStateMouseCursor.", ["clickable","adaptiveClickable","textable"]);
export const WidgetStateMouseCursor: typeof _WidgetStateMouseCursorBinding & _FlaxInstanceType<WidgetStateMouseCursor> & _FlaxDartType<WidgetStateMouseCursor, readonly ["class", "flax.core/sdk_widgets#type:WidgetStateMouseCursor", readonly [], false]> = _flaxBindInstanceType<WidgetStateMouseCursor, typeof _WidgetStateMouseCursorBinding>(_WidgetStateMouseCursorBinding, "flax.core/sdk_widgets#type:WidgetStateMouseCursor", ["flax.core/flutter#type:MouseCursor","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable","flax.core/flutter#type:WidgetStateProperty"]) as typeof _WidgetStateMouseCursorBinding & _FlaxInstanceType<WidgetStateMouseCursor> & _FlaxDartType<WidgetStateMouseCursor, readonly ["class", "flax.core/sdk_widgets#type:WidgetStateMouseCursor", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "debugDescription" | "createSession" | "toString" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "resolve" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateMouseCursor" | "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty";
