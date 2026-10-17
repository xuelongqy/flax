// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"group","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"groupIndices","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"name","required":true,"positional":true}] as const;
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Match';
import '@flax/dart/core/_bindings/flutter_Match';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_RegExp';
import '@flax/dart/core/_bindings/flutter_RegExp';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RegExpMatch extends Omit<upstream0.Match, typeof _flaxDartTypeValue | "start" | "end" | "groupCount" | "input" | "pattern" | "groupNames" | "group" | "groups" | "namedGroup" | "operatorGetIndex">, Readonly<{ "__flaxBound:dart:core::RegExpMatch": readonly [] }> { readonly __RegExpMatch: unique symbol;

readonly start: number;
readonly end: number;
readonly groupCount: number;
readonly input: string;
readonly pattern: upstream1.RegExp;
readonly groupNames: DartIterable<string>;
group(group: number): string | null;
groups(groupIndices: DartListInput<number, number>): DartList<string | null>;
namedGroup(name: string): string | null;
operatorGetIndex(group: number): string | null;
}
defineObject("flax.core/flutter#type:RegExpMatch", ["start","end","groupCount","input","pattern","groupNames"], [], _flaxBindingMethods("flax.core/flutter#type:RegExpMatch", "object", {"group":_flaxMemberParameters0,"groups":_flaxMemberParameters1,"namedGroup":_flaxMemberParameters2,"operatorGetIndex":_flaxMemberParameters0}, {}), []);
export const RegExpMatch: object & _FlaxInstanceType<RegExpMatch> & _FlaxDartType<RegExpMatch, readonly ["class", "flax.core/flutter#type:RegExpMatch", readonly [], false]> = _flaxBindInstanceType<RegExpMatch, object>({}, "flax.core/flutter#type:RegExpMatch", ["dart:core::Object","flax.core/flutter#type:Match"]) as object & _FlaxInstanceType<RegExpMatch> & _FlaxDartType<RegExpMatch, readonly ["class", "flax.core/flutter#type:RegExpMatch", readonly [], false]>;
