// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"horizontal","required":false,"positional":false},{"name":"vertical","required":false,"positional":false}] as const;
const _flaxMemberParameters1 = [{"name":"constraints","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [] as const;
import type * as upstream0 from '@flax/flutter/gestures/_bindings/flutter_Offset';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_TargetPlatform';
import '@flax/flutter/foundation/_bindings/flutter_TargetPlatform';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BoxConstraints';
import '@flax/flutter/widgets/_bindings/flutter_BoxConstraints';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface VisualDensity extends Readonly<{ "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __VisualDensity: unique symbol;

readonly horizontal: number;
readonly vertical: number;
readonly baseSizeAdjustment: upstream0.Offset;
copyWith(options?: {horizontal?: number | null | undefined; vertical?: number | null | undefined}): VisualDensity;
effectiveConstraints(constraints: Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [] }>): upstream2.BoxConstraints;
toStringShort(): string;
}
defineObject("flax.material/material#type:VisualDensity", ["horizontal","vertical","baseSizeAdjustment"], [], _flaxBindingMethods("flax.material/material#type:VisualDensity", "object", {"copyWith":_flaxMemberParameters0,"effectiveConstraints":_flaxMemberParameters1,"toStringShort":_flaxMemberParameters2}, {}), []);
export function _VisualDensityFactory(options: { horizontal?: number | undefined; vertical?: number | undefined } = {}): VisualDensity {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:VisualDensity", "", [{"name":"horizontal","required":false,"positional":false},{"name":"vertical","required":false,"positional":false}], [], options) as VisualDensity;
}
export namespace _VisualDensityFactory { export declare const minimumDensity: number; }
Object.defineProperty(_VisualDensityFactory, "minimumDensity", { get: () => invokeTopLevel("flax.material/material#read:VisualDensity.minimumDensity", []) });
export namespace _VisualDensityFactory { export declare const maximumDensity: number; }
Object.defineProperty(_VisualDensityFactory, "maximumDensity", { get: () => invokeTopLevel("flax.material/material#read:VisualDensity.maximumDensity", []) });
export namespace _VisualDensityFactory { export declare const standard: VisualDensity; }
Object.defineProperty(_VisualDensityFactory, "standard", { get: () => invokeTopLevel("flax.material/material#read:VisualDensity.standard", []) });
export namespace _VisualDensityFactory { export declare const comfortable: VisualDensity; }
Object.defineProperty(_VisualDensityFactory, "comfortable", { get: () => invokeTopLevel("flax.material/material#read:VisualDensity.comfortable", []) });
export namespace _VisualDensityFactory { export declare const compact: VisualDensity; }
Object.defineProperty(_VisualDensityFactory, "compact", { get: () => invokeTopLevel("flax.material/material#read:VisualDensity.compact", []) });
export namespace _VisualDensityFactory { export declare const adaptivePlatformDensity: VisualDensity; }
Object.defineProperty(_VisualDensityFactory, "adaptivePlatformDensity", { get: () => invokeTopLevel("flax.material/material#read:VisualDensity.adaptivePlatformDensity", []) });
export namespace _VisualDensityFactory { export function defaultDensityForPlatform(platform: upstream1.TargetPlatform): VisualDensity {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:VisualDensity.defaultDensityForPlatform", [platform]);
return _flaxResult as VisualDensity;
} }
export namespace _VisualDensityFactory { export function lerp(a: Readonly<{ "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [] }>, b: Readonly<{ "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [] }>, t: number): VisualDensity {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:VisualDensity.lerp", [a, b, t]);
return _flaxResult as VisualDensity;
} }
export const VisualDensity: typeof _VisualDensityFactory & _FlaxInstanceType<VisualDensity> & _FlaxDartType<VisualDensity, readonly ["class", "flax.material/material#type:VisualDensity", readonly [], false]> = _flaxBindInstanceType<VisualDensity, typeof _VisualDensityFactory>(_VisualDensityFactory, "flax.material/material#type:VisualDensity", ["dart:core::Object","package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]) as typeof _VisualDensityFactory & _FlaxInstanceType<VisualDensity> & _FlaxDartType<VisualDensity, readonly ["class", "flax.material/material#type:VisualDensity", readonly [], false]>;
