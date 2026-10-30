// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { _flaxMemberParameters144, _flaxMemberParameters145, _flaxMemberParameters146, _flaxMemberParameters147 } from "@flax/material-ui/_bindings/material.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/material-ui/_bindings/material.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ElevationOverlay extends Readonly<{ "__flaxBound:package:material_ui/src/elevation_overlay.dart::ElevationOverlay": readonly [] }> { readonly __ElevationOverlay: unique symbol;
readonly [_flaxDartTypeValue]: ElevationOverlay;

}
defineObject("flax.material/material#type:ElevationOverlay", [], [], _flaxBindingMethods("flax.material/material#type:ElevationOverlay", "object", {}, {}), []);
export namespace _ElevationOverlayFactory { export function applySurfaceTint(color: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>, surfaceTint: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null, elevation: number): upstream0.Color {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:ElevationOverlay.applySurfaceTint", [color, surfaceTint, elevation], _flaxMemberParameters144);
return _flaxResult as upstream0.Color;
} }
export namespace _ElevationOverlayFactory { export function applyOverlay(context: upstream1.BuildContext, color: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>, elevation: number): upstream0.Color {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:ElevationOverlay.applyOverlay", [contextHandle(context, "flax.core/flutter#type:BuildContext"), color, elevation], _flaxMemberParameters145);
return _flaxResult as upstream0.Color;
} }
export namespace _ElevationOverlayFactory { export function overlayColor(context: upstream1.BuildContext, elevation: number): upstream0.Color {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:ElevationOverlay.overlayColor", [contextHandle(context, "flax.core/flutter#type:BuildContext"), elevation], _flaxMemberParameters146);
return _flaxResult as upstream0.Color;
} }
export namespace _ElevationOverlayFactory { export function colorWithOverlay(surface: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>, overlay: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }>, elevation: number): upstream0.Color {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:ElevationOverlay.colorWithOverlay", [surface, overlay, elevation], _flaxMemberParameters147);
return _flaxResult as upstream0.Color;
} }
export const ElevationOverlay: typeof _ElevationOverlayFactory & _FlaxInstanceType<ElevationOverlay> & _FlaxDartType<ElevationOverlay, readonly ["class", "flax.material/material#type:ElevationOverlay", readonly [], false]> = _flaxBindInstanceType<ElevationOverlay, typeof _ElevationOverlayFactory>(_ElevationOverlayFactory, "flax.material/material#type:ElevationOverlay", ["dart:core::Object"]) as typeof _ElevationOverlayFactory & _FlaxInstanceType<ElevationOverlay> & _FlaxDartType<ElevationOverlay, readonly ["class", "flax.material/material#type:ElevationOverlay", readonly [], false]>;
