// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream5 from '@flax/flutter/services/_bindings/sdk_services_MouseCursorSession';
import '@flax/flutter/services/_bindings/sdk_services_MouseCursorSession';
const _flaxMemberParameters0 = [{"name":"device","required":true,"positional":true}] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MouseCursor extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __MouseCursor: unique symbol;
readonly [_flaxDartTypeValue]: MouseCursor;

readonly debugDescription: string;
toStringShort(): string;
toString(options?: {minLevel?: upstream1.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream3.DiagnosticsTreeStyle | null | undefined}): upstream2.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
createSession(device: number): upstream5.MouseCursorSession;
}
defineObject("flax.core/flutter#type:MouseCursor", ["debugDescription"], [], _flaxBindingMethods("flax.core/flutter#type:MouseCursor", "object", {"createSession":_flaxMemberParameters0}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
const _MouseCursorFactory = {} as {readonly defer: MouseCursor;readonly uncontrolled: MouseCursor};
_flaxDefineStaticGetters(_MouseCursorFactory, "flax.core/flutter#read:MouseCursor.", ["defer","uncontrolled"]);
export const MouseCursor: typeof _MouseCursorFactory & _FlaxInstanceType<MouseCursor> & _FlaxDartType<MouseCursor, readonly ["class", "flax.core/flutter#type:MouseCursor", readonly [], false]> = _flaxBindInstanceType<MouseCursor, typeof _MouseCursorFactory>(_MouseCursorFactory, "flax.core/flutter#type:MouseCursor", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _MouseCursorFactory & _FlaxInstanceType<MouseCursor> & _FlaxDartType<MouseCursor, readonly ["class", "flax.core/flutter#type:MouseCursor", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "debugDescription" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "createSession" | "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
