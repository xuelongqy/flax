// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
import '@flax/flutter/services/_bindings/flutter_LogicalKeyboardKey';
const _flaxMemberParameters0 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ShortcutSerialization extends Readonly<{ "__flaxBound:package:flutter/src/widgets/platform_menu_bar.dart::ShortcutSerialization": readonly [] }> { readonly __ShortcutSerialization: unique symbol;
readonly [_flaxDartTypeValue]: ShortcutSerialization;

readonly trigger: upstream0.LogicalKeyboardKey | null;
readonly character: string | null;
readonly alt: boolean | null;
readonly control: boolean | null;
readonly meta: boolean | null;
readonly shift: boolean | null;
toChannelRepresentation(): DartMap<string, unknown | null>;
}
defineObject("flax.core/sdk_widgets#type:ShortcutSerialization", ["trigger","character","alt","control","meta","shift"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ShortcutSerialization", "object", {"toChannelRepresentation":_flaxMemberParameters0}, {}), []);
export namespace _ShortcutSerializationFactory {
export function character(character: string, options: { alt?: boolean | undefined; control?: boolean | undefined; meta?: boolean | undefined } = {}): ShortcutSerialization {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:ShortcutSerialization", "character", [{"name":"character","required":true,"positional":true},{"name":"alt","required":false,"positional":false},{"name":"control","required":false,"positional":false},{"name":"meta","required":false,"positional":false}], [character], options) as ShortcutSerialization;
}
}
export namespace _ShortcutSerializationFactory {
export function modifier(trigger: Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::LogicalKeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, options: { alt?: boolean | undefined; control?: boolean | undefined; meta?: boolean | undefined; shift?: boolean | undefined } = {}): ShortcutSerialization {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:ShortcutSerialization", "modifier", [{"name":"trigger","required":true,"positional":true},{"name":"alt","required":false,"positional":false},{"name":"control","required":false,"positional":false},{"name":"meta","required":false,"positional":false},{"name":"shift","required":false,"positional":false}], [trigger], options) as ShortcutSerialization;
}
}
export const ShortcutSerialization: typeof _ShortcutSerializationFactory & _FlaxInstanceType<ShortcutSerialization> & _FlaxDartType<ShortcutSerialization, readonly ["class", "flax.core/sdk_widgets#type:ShortcutSerialization", readonly [], false]> = _flaxBindInstanceType<ShortcutSerialization, typeof _ShortcutSerializationFactory>(_ShortcutSerializationFactory, "flax.core/sdk_widgets#type:ShortcutSerialization", ["dart:core::Object"]) as typeof _ShortcutSerializationFactory & _FlaxInstanceType<ShortcutSerialization> & _FlaxDartType<ShortcutSerialization, readonly ["class", "flax.core/sdk_widgets#type:ShortcutSerialization", readonly [], false]>;
