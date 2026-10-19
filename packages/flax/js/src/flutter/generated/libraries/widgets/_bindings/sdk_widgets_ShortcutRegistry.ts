// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutActivator';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutActivator';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutRegistryEntry';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutRegistryEntry';
import { _flaxMemberParameters33, _flaxMemberParameters2, _flaxMemberParameters12 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ShortcutRegistry extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutRegistry": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __ShortcutRegistry: unique symbol;
readonly [_flaxDartTypeValue]: ShortcutRegistry;

}
defineObject("flax.core/sdk_widgets#type:ShortcutRegistry", ["hasListeners","shortcuts"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ShortcutRegistry", "object", {"addAll":_flaxMemberParameters33}, {}), ["removeListener"], undefined, "flax.core/sdk_foundation#type:ChangeNotifier");
const _ShortcutRegistryProxy = {type: "flax.core/sdk_widgets#type:ShortcutRegistry", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"addListener":_flaxMemberParameters12,"removeListener":_flaxMemberParameters12,"dispose":_flaxMemberParameters2,"addAll":_flaxMemberParameters33}, getters: ["shortcuts","hasListeners"], setters: [], contextMembers: [], superMembers: ["get:shortcuts","get:hasListeners","addListener","removeListener","dispose","addAll"]} as const;
export interface ShortcutRegistry {
readonly [_flaxDartTypeValue]: ShortcutRegistry;

addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
addAll(value: DartMapInput<upstream3.ShortcutActivator, upstream2.Intent, Readonly<{ "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>): upstream5.ShortcutRegistryEntry;
get shortcuts(): DartMap<upstream3.ShortcutActivator, upstream2.Intent>;
get hasListeners(): boolean;
}
export abstract class ShortcutRegistry extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ShortcutRegistry>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ShortcutRegistry;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ShortcutRegistry", readonly [], false];
constructor() { super(_ShortcutRegistryProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ShortcutRegistry.prototype, _ShortcutRegistryProxy);
export namespace ShortcutRegistry { export function implement(args: [], implementation: {}): ShortcutRegistry {
return constructProxy(_ShortcutRegistryProxy, args, implementation) as ShortcutRegistry; } }
export namespace ShortcutRegistry { export function of(context: upstream4.BuildContext): ShortcutRegistry {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:ShortcutRegistry.of", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as ShortcutRegistry;
} }
export namespace ShortcutRegistry { export function maybeOf(context: upstream4.BuildContext): ShortcutRegistry | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:ShortcutRegistry.maybeOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as ShortcutRegistry | null;
} }
_flaxBindInstanceType<ShortcutRegistry, typeof ShortcutRegistry>(ShortcutRegistry, "flax.core/sdk_widgets#type:ShortcutRegistry", ["dart:core::Object","flax.core/sdk_foundation#type:ChangeNotifier","flax.core/flutter#type:Listenable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "shortcuts" | "addListener" | "removeListener" | "dispose" | "addAll" | "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutRegistry" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
