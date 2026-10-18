// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BlendMode extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:dart:ui::BlendMode">, Readonly<{ "__flaxBound:dart:ui::BlendMode": readonly [] }> { readonly __BlendMode: unique symbol;
readonly [_flaxDartTypeValue]: BlendMode;
readonly name: string;
readonly index: number;

}
defineEnum("flax.core/sdk_dart_ui#type:BlendMode", ["clear","src","dst","srcOver","dstOver","srcIn","dstIn","srcOut","dstOut","srcATop","dstATop","xor","plus","modulate","screen","overlay","darken","lighten","colorDodge","colorBurn","hardLight","softLight","difference","exclusion","multiply","hue","saturation","color","luminosity"], {
}, [], ["flax.core/flutter#type:Enum","dart:core::Object"]);
const _flaxEnum_BlendMode_api = {
clear: enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "clear"),
src: enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "src"),
dst: enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "dst"),
srcOver: enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "srcOver"),
dstOver: enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "dstOver"),
srcIn: enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "srcIn"),
dstIn: enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "dstIn"),
srcOut: enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "srcOut"),
dstOut: enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "dstOut"),
srcATop: enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "srcATop"),
dstATop: enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "dstATop"),
xor: enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "xor"),
plus: enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "plus"),
modulate: enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "modulate"),
screen: enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "screen"),
overlay: enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "overlay"),
darken: enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "darken"),
lighten: enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "lighten"),
colorDodge: enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "colorDodge"),
colorBurn: enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "colorBurn"),
hardLight: enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "hardLight"),
softLight: enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "softLight"),
difference: enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "difference"),
exclusion: enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "exclusion"),
multiply: enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "multiply"),
hue: enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "hue"),
saturation: enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "saturation"),
color: enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "color"),
luminosity: enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "luminosity"),
values: Object.freeze([enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "clear"), enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "src"), enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "dst"), enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "srcOver"), enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "dstOver"), enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "srcIn"), enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "dstIn"), enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "srcOut"), enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "dstOut"), enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "srcATop"), enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "dstATop"), enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "xor"), enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "plus"), enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "modulate"), enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "screen"), enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "overlay"), enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "darken"), enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "lighten"), enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "colorDodge"), enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "colorBurn"), enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "hardLight"), enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "softLight"), enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "difference"), enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "exclusion"), enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "multiply"), enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "hue"), enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "saturation"), enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "color"), enumValue<BlendMode>("flax.core/sdk_dart_ui#type:BlendMode", "luminosity")]),
};
export const BlendMode = Object.freeze(_flaxBindInstanceType<BlendMode, typeof _flaxEnum_BlendMode_api>(_flaxEnum_BlendMode_api, "flax.core/sdk_dart_ui#type:BlendMode", ["flax.core/flutter#type:Enum","dart:core::Object"]) as typeof _flaxEnum_BlendMode_api & _FlaxInstanceType<BlendMode> & _FlaxDartType<BlendMode, readonly ["class", "flax.core/sdk_dart_ui#type:BlendMode", readonly [], false]>);
