// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutActivator';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutActivator';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/sdk_widgets_KeyEventResult';
import '@flax/flutter/widgets/_bindings/sdk_widgets_KeyEventResult';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream11 from '@flax/flutter/services/_bindings/flutter_KeyEvent';
import '@flax/flutter/services/_bindings/flutter_KeyEvent';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"minLevel"}] as const;
const _flaxMemberParameters2 = [{"name":"name"},{"name":"style"}] as const;
const _flaxMemberParameters3 = [{"name":"properties","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"},{"name":"event","required":true,"positional":true}] as const;
const _flaxMemberParameters5 = [{"name":"shortcuts"},{"name":"modal"}] as const;
const _flaxMemberParameters6 = [{"name":"listener","required":true,"positional":true}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ShortcutManager extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Omit<upstream1.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.Diagnosticable>, Omit<upstream2.Listenable, _flaxOwnMembers0 | keyof upstream0.Diagnosticable | keyof upstream1.ChangeNotifier>, Readonly<{ "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutManager": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> { readonly __ShortcutManager: unique symbol;
readonly [_flaxDartTypeValue]: ShortcutManager;

}
defineObject("flax.core/sdk_widgets#type:ShortcutManager", ["hasListeners","modal","shortcuts"], ["shortcuts"], _flaxBindingMethods("flax.core/sdk_widgets#type:ShortcutManager", "object", {"toStringShort":_flaxMemberParameters0,"toString":_flaxMemberParameters1,"toDiagnosticsNode":_flaxMemberParameters2,"debugFillProperties":_flaxMemberParameters3,"handleKeypress":_flaxMemberParameters4}, {}), ["removeListener"], undefined, "flax.core/sdk_foundation#type:ChangeNotifier");
const _ShortcutManagerProxy = {type: "flax.core/sdk_widgets#type:ShortcutManager", parameters: _flaxMemberParameters5, constructors: {"": _flaxMemberParameters5}, methods: {"toStringShort":_flaxMemberParameters0,"toString":_flaxMemberParameters1,"toDiagnosticsNode":_flaxMemberParameters2,"debugFillProperties":_flaxMemberParameters3,"addListener":_flaxMemberParameters6,"removeListener":_flaxMemberParameters6,"dispose":_flaxMemberParameters0,"handleKeypress":_flaxMemberParameters4}, getters: ["modal","shortcuts","hasListeners"], setters: ["shortcuts"], contextMembers: [], superMembers: ["get:modal","get:shortcuts","get:hasListeners","set:shortcuts","toStringShort","toString","toDiagnosticsNode","debugFillProperties","addListener","removeListener","dispose","handleKeypress"]} as const;
export interface ShortcutManager {
readonly [_flaxDartTypeValue]: ShortcutManager;

toStringShort(): string;
toString(options?: {minLevel?: upstream5.DiagnosticLevel | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream7.DiagnosticsTreeStyle | null | undefined}): upstream6.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
dispose(): void;
handleKeypress(context: upstream10.BuildContext, event: Readonly<{ "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): upstream9.KeyEventResult;
get modal(): boolean;
get shortcuts(): DartMap<upstream4.ShortcutActivator, upstream3.Intent>;
get hasListeners(): boolean;
set shortcuts(value: DartMapInput<upstream4.ShortcutActivator, upstream3.Intent, Readonly<{ "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>);
}
export abstract class ShortcutManager extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ShortcutManager>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ShortcutManager;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ShortcutManager", readonly [], false];
constructor(options?: {shortcuts?: DartMapInput<upstream4.ShortcutActivator, upstream3.Intent, Readonly<{ "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>> | undefined; modal?: boolean | undefined}) { super(_ShortcutManagerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(ShortcutManager.prototype, _ShortcutManagerProxy);
export namespace ShortcutManager { export function implement(args: [options?: {shortcuts?: DartMapInput<upstream4.ShortcutActivator, upstream3.Intent, Readonly<{ "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>> | undefined; modal?: boolean | undefined}], implementation: {}): ShortcutManager {
return constructProxy(_ShortcutManagerProxy, args, implementation) as ShortcutManager; } }
_flaxBindInstanceType<ShortcutManager, typeof ShortcutManager>(ShortcutManager, "flax.core/sdk_widgets#type:ShortcutManager", ["dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable","flax.core/sdk_foundation#type:ChangeNotifier","flax.core/flutter#type:Listenable"]);
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "modal" | "shortcuts" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "addListener" | "removeListener" | "dispose" | "handleKeypress" | "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutManager" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
