// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_TargetPlatform';
import '@flax/flutter/foundation/_bindings/flutter_TargetPlatform';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream7 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
const _flaxMemberParameters0 = [{"name":"horizontal"},{"name":"vertical"}] as const;
const _flaxMemberParameters1 = [{"name":"constraints","required":true,"positional":true}] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface VisualDensity extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __VisualDensity: unique symbol;
readonly [_flaxDartTypeValue]: VisualDensity;

readonly horizontal: number;
readonly vertical: number;
readonly baseSizeAdjustment: upstream1.Offset;
toStringShort(): string;
toString(options?: {minLevel?: upstream3.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream5.DiagnosticsTreeStyle | null | undefined}): upstream4.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
copyWith(options?: {horizontal?: number | null | undefined; vertical?: number | null | undefined}): VisualDensity;
effectiveConstraints(constraints: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }>): upstream7.BoxConstraints;
}
defineObject("flax.material/material#type:VisualDensity", ["horizontal","vertical","baseSizeAdjustment"], [], _flaxBindingMethods("flax.material/material#type:VisualDensity", "object", {"copyWith":_flaxMemberParameters0,"effectiveConstraints":_flaxMemberParameters1}, {}), [], undefined, "flax.core/sdk_foundation#type:Diagnosticable");
export function _VisualDensityFactory(options: { horizontal?: number | undefined; vertical?: number | undefined } = {}): VisualDensity {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:VisualDensity", "", _flaxMemberParameters0, [], options) as VisualDensity;
}
export namespace _VisualDensityFactory { export declare const minimumDensity: number; }
export namespace _VisualDensityFactory { export declare const maximumDensity: number; }
export namespace _VisualDensityFactory { export declare const standard: VisualDensity; }
export namespace _VisualDensityFactory { export declare const comfortable: VisualDensity; }
export namespace _VisualDensityFactory { export declare const compact: VisualDensity; }
export namespace _VisualDensityFactory { export declare const adaptivePlatformDensity: VisualDensity; }
_flaxDefineStaticGetters(_VisualDensityFactory, "flax.material/material#read:VisualDensity.", ["minimumDensity","maximumDensity","standard","comfortable","compact","adaptivePlatformDensity"]);
export namespace _VisualDensityFactory { export function defaultDensityForPlatform(platform: upstream2.TargetPlatform): VisualDensity {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:VisualDensity.defaultDensityForPlatform", [platform]);
return _flaxResult as VisualDensity;
} }
export namespace _VisualDensityFactory { export function lerp(a: Readonly<{ "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, b: Readonly<{ "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, t: number): VisualDensity {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:VisualDensity.lerp", [a, b, t]);
return _flaxResult as VisualDensity;
} }
export const VisualDensity: typeof _VisualDensityFactory & _FlaxInstanceType<VisualDensity> & _FlaxDartType<VisualDensity, readonly ["class", "flax.material/material#type:VisualDensity", readonly [], false]> = _flaxBindInstanceType<VisualDensity, typeof _VisualDensityFactory>(_VisualDensityFactory, "flax.material/material#type:VisualDensity", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _VisualDensityFactory & _FlaxInstanceType<VisualDensity> & _FlaxDartType<VisualDensity, readonly ["class", "flax.material/material#type:VisualDensity", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "horizontal" | "vertical" | "baseSizeAdjustment" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "effectiveConstraints" | "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
