// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Match';
import '@flax/dart/core/_bindings/flutter_Match';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_RegExp';
import '@flax/dart/core/_bindings/flutter_RegExp';
import { _flaxMemberParameters36 } from "@flax/core/navigation/_bindings/flutter.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RegExpMatch extends Omit<upstream0.Match, _flaxOwnMembers0>, Readonly<{ "__flaxBound:dart:core::RegExpMatch": readonly [] }>, Readonly<{ "__flaxBound:dart:core::Match": readonly [] }> { readonly __RegExpMatch: unique symbol;
readonly [_flaxDartTypeValue]: RegExpMatch;

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
defineObject("flax.core/flutter#type:RegExpMatch", ["start","end","groupCount","input","pattern","groupNames"], [], _flaxBindingMethods("flax.core/flutter#type:RegExpMatch", "object", {"namedGroup":_flaxMemberParameters36}, {}), [], undefined, "flax.core/flutter#type:Match");
export const RegExpMatch: object & _FlaxInstanceType<RegExpMatch> & _FlaxDartType<RegExpMatch, readonly ["class", "flax.core/flutter#type:RegExpMatch", readonly [], false]> = _flaxBindInstanceType<RegExpMatch, object>({}, "flax.core/flutter#type:RegExpMatch", ["dart:core::Object","flax.core/flutter#type:Match"]) as object & _FlaxInstanceType<RegExpMatch> & _FlaxDartType<RegExpMatch, readonly ["class", "flax.core/flutter#type:RegExpMatch", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "start" | "end" | "groupCount" | "input" | "pattern" | "groupNames" | "group" | "groups" | "namedGroup" | "operatorGetIndex" | "__flaxBound:dart:core::RegExpMatch" | "__flaxBound:dart:core::Match";
