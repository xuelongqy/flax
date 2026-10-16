// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"string","required":true,"positional":true},{"name":"start","required":false,"positional":true}] as const;
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Match';
import '@flax/dart/core/_bindings/flutter_Match';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Pattern extends Readonly<{ "__flaxBound:dart:core::Pattern": readonly [] }> { readonly __Pattern: unique symbol;

allMatches(string: string, start?: number): DartIterable<upstream0.Match>;
matchAsPrefix(string: string, start?: number): upstream0.Match | null;
}
defineObject("flax.core/flutter#type:Pattern", [], [], _flaxBindingMethods("flax.core/flutter#type:Pattern", "object", {"allMatches":_flaxMemberParameters0,"matchAsPrefix":_flaxMemberParameters0}, {}), []);
export const Pattern: object & _FlaxInstanceType<Pattern> & _FlaxDartType<Pattern, readonly ["class", "flax.core/flutter#type:Pattern", readonly [], false]> = _flaxBindInstanceType<Pattern, object>({}, "flax.core/flutter#type:Pattern", ["dart:core::Object"]) as object & _FlaxInstanceType<Pattern> & _FlaxDartType<Pattern, readonly ["class", "flax.core/flutter#type:Pattern", readonly [], false]>;
