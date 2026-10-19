// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { _flaxMemberParameters24, _flaxMemberParameters0 } from "@flax/flutter/cupertino/_bindings/sdk_cupertino.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/cupertino/_bindings/sdk_cupertino.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface CupertinoMenuEntry extends Readonly<{ "__flaxBound:package:flutter/src/cupertino/menu_anchor.dart::CupertinoMenuEntry": readonly [] }> { readonly __CupertinoMenuEntry: unique symbol;
readonly [_flaxDartTypeValue]: CupertinoMenuEntry;

readonly isDivider: boolean;
hasLeading(context: upstream0.BuildContext): boolean;
}
defineObject("flax.core/sdk_cupertino#type:CupertinoMenuEntry", ["isDivider"], [], _flaxBindingMethods("flax.core/sdk_cupertino#type:CupertinoMenuEntry", "object", {"hasLeading":_flaxMemberParameters24}, {}), []);
const _CupertinoMenuEntryProxy = {type: "flax.core/sdk_cupertino#type:CupertinoMenuEntry", parameters: _flaxMemberParameters0, constructors: {}, methods: {"hasLeading":_flaxMemberParameters24}, getters: ["isDivider"], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _CupertinoMenuEntryFactory { export function implement(args: [], implementation: {hasLeading: ((context: upstream0.BuildContext) => boolean); get isDivider(): boolean}): CupertinoMenuEntry {
return constructProxy(_CupertinoMenuEntryProxy, args, implementation) as CupertinoMenuEntry; } }
export const CupertinoMenuEntry: typeof _CupertinoMenuEntryFactory & _FlaxInstanceType<CupertinoMenuEntry> & _FlaxDartType<CupertinoMenuEntry, readonly ["class", "flax.core/sdk_cupertino#type:CupertinoMenuEntry", readonly [], false]> = _flaxBindInstanceType<CupertinoMenuEntry, typeof _CupertinoMenuEntryFactory>(_CupertinoMenuEntryFactory, "flax.core/sdk_cupertino#type:CupertinoMenuEntry", ["dart:core::Object"]) as typeof _CupertinoMenuEntryFactory & _FlaxInstanceType<CupertinoMenuEntry> & _FlaxDartType<CupertinoMenuEntry, readonly ["class", "flax.core/sdk_cupertino#type:CupertinoMenuEntry", readonly [], false]>;
