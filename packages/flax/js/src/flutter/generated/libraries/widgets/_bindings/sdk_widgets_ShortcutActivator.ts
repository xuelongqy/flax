// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_KeyEvent';
import '@flax/flutter/services/_bindings/flutter_KeyEvent';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_HardwareKeyboard';
import '@flax/flutter/services/_bindings/sdk_services_HardwareKeyboard';
import { _flaxMemberParameters429, _flaxMemberParameters60, _flaxMemberParameters2 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ShortcutActivator extends Readonly<{ "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator": readonly [] }> { readonly __ShortcutActivator: unique symbol;
readonly [_flaxDartTypeValue]: ShortcutActivator;

}
defineObject("flax.core/sdk_widgets#type:ShortcutActivator", ["triggers"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ShortcutActivator", "object", {"accepts":_flaxMemberParameters60,"debugDescribeKeys":_flaxMemberParameters2}, {}), []);
const _ShortcutActivatorProxy = {type: "flax.core/sdk_widgets#type:ShortcutActivator", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"accepts":_flaxMemberParameters60,"debugDescribeKeys":_flaxMemberParameters2}, getters: ["triggers"], setters: [], contextMembers: [], superMembers: ["get:triggers"]} as const;
export interface ShortcutActivator {
readonly [_flaxDartTypeValue]: ShortcutActivator;

get triggers(): DartIterable<upstream0.LogicalKeyboardKey> | null;
}
export abstract class ShortcutActivator extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ShortcutActivator>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ShortcutActivator;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ShortcutActivator", readonly [], false];
constructor() { super(_ShortcutActivatorProxy, Array.from(arguments)); }
abstract accepts(event: Readonly<{ "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, state: Readonly<{ "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::HardwareKeyboard": readonly [] }>): boolean;
abstract debugDescribeKeys(): string;
}
_flaxDefineProxyBase(ShortcutActivator.prototype, _ShortcutActivatorProxy);
export namespace ShortcutActivator { export function implement(args: [], implementation: {accepts: ((event: upstream1.KeyEvent, state: upstream2.HardwareKeyboard) => boolean); debugDescribeKeys: (() => string)}): ShortcutActivator {
return constructProxy(_ShortcutActivatorProxy, args, implementation) as ShortcutActivator; } }
export namespace ShortcutActivator { export function isActivatedBy(activator: Readonly<{ "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator": readonly [] }>, event: Readonly<{ "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): boolean {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:ShortcutActivator.isActivatedBy", [activator, event], _flaxMemberParameters429);
return _flaxResult as boolean;
} }
_flaxBindInstanceType<ShortcutActivator, typeof ShortcutActivator>(ShortcutActivator, "flax.core/sdk_widgets#type:ShortcutActivator", ["dart:core::Object"]);
