// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindInstanceType as _flaxHostBindInstanceType, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineEnum as _flaxHostDefineEnum, invokeEnum as _flaxHostInvokeEnum, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"group","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"groupIndices","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"name","required":true,"positional":true}] as const;
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Match';
import '@flax/dart/core/_bindings/flutter_Match';
import type * as upstream1 from '@flax/dart/core/_bindings/flutter_RegExp';
import '@flax/dart/core/_bindings/flutter_RegExp';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface RegExpMatch extends upstream0.Match, Readonly<{ "__flaxBound:dart:core::RegExpMatch": readonly [] }> { readonly __RegExpMatch: unique symbol;
readonly start: number;
readonly end: number;
readonly groupCount: number;
readonly input: string;
readonly pattern: upstream1.RegExp;
readonly groupNames: DartIterable<string>;
group(group: number): string | null;
groups(groupIndices: DartListInput<number, number>): DartList<string | null>;
namedGroup(name: string): string | null;
}
defineObject("flax.core/flutter#type:RegExpMatch", ["start","end","groupCount","input","pattern","groupNames"], [], _flaxBindingMethods("flax.core/flutter#type:RegExpMatch", "object", {"group":_flaxMemberParameters0,"groups":_flaxMemberParameters1,"namedGroup":_flaxMemberParameters2}), []);
export const RegExpMatch: object & _FlaxInstanceType<RegExpMatch> = _flaxBindInstanceType<RegExpMatch, object>({}, "flax.core/flutter#type:RegExpMatch", ["dart:core::Object","flax.core/flutter#type:Match"]);
