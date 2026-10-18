// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutRegistry';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutRegistry';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutActivator';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutActivator';
const _flaxMemberParameters0 = [{"name":"value","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ShortcutRegistryEntry extends Readonly<{ "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutRegistryEntry": readonly [] }> { readonly __ShortcutRegistryEntry: unique symbol;
readonly [_flaxDartTypeValue]: ShortcutRegistryEntry;

readonly registry: upstream0.ShortcutRegistry;
replaceAll(value: DartMapInput<upstream2.ShortcutActivator, upstream1.Intent, Readonly<{ "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>): void;
dispose(): void;
}
defineObject("flax.core/sdk_widgets#type:ShortcutRegistryEntry", ["registry"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ShortcutRegistryEntry", "object", {"replaceAll":_flaxMemberParameters0,"dispose":_flaxMemberParameters1}, {}), []);
const _ShortcutRegistryEntryProxy = {type: "flax.core/sdk_widgets#type:ShortcutRegistryEntry", parameters: [], constructors: {}, methods: {"replaceAll":_flaxMemberParameters0,"dispose":_flaxMemberParameters1}, getters: ["registry"], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _ShortcutRegistryEntryFactory { export function implement(args: [], implementation: {replaceAll: ((value: DartMap<upstream2.ShortcutActivator, upstream1.Intent>) => void); dispose: (() => void); get registry(): Readonly<{ "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutRegistry": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>}): ShortcutRegistryEntry {
return constructProxy(_ShortcutRegistryEntryProxy, args, implementation) as ShortcutRegistryEntry; } }
export const ShortcutRegistryEntry: typeof _ShortcutRegistryEntryFactory & _FlaxInstanceType<ShortcutRegistryEntry> & _FlaxDartType<ShortcutRegistryEntry, readonly ["class", "flax.core/sdk_widgets#type:ShortcutRegistryEntry", readonly [], false]> = _flaxBindInstanceType<ShortcutRegistryEntry, typeof _ShortcutRegistryEntryFactory>(_ShortcutRegistryEntryFactory, "flax.core/sdk_widgets#type:ShortcutRegistryEntry", ["dart:core::Object"]) as typeof _ShortcutRegistryEntryFactory & _FlaxInstanceType<ShortcutRegistryEntry> & _FlaxDartType<ShortcutRegistryEntry, readonly ["class", "flax.core/sdk_widgets#type:ShortcutRegistryEntry", readonly [], false]>;
