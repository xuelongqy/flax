// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutActivator';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutActivator';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutManager';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ShortcutManager';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { _flaxMemberParameters2 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Shortcuts extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{ "__flaxBound:package:flutter/src/widgets/shortcuts.dart::Shortcuts": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __Shortcuts: unique symbol;
readonly [_flaxDartTypeValue]: Shortcuts;

readonly manager: upstream4.ShortcutManager | null;
readonly shortcuts: DartMap<upstream3.ShortcutActivator, upstream2.Intent>;
readonly child: Widget;
readonly debugLabel: string | null;
readonly includeSemantics: boolean;
readonly key: upstream1.Key | null;
createState(): upstream5.State<Shortcuts>;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
createElement(): upstream7.StatefulElement;
toStringShort(): string;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream8.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream8.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream10.DiagnosticsTreeStyle | null | undefined}): upstream9.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream9.DiagnosticsNode>;
}
defineObject("flax.core/sdk_widgets#type:Shortcuts", ["manager","shortcuts","child","debugLabel","includeSemantics","key"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:Shortcuts", "object", {"createState":_flaxMemberParameters2,"createElement":_flaxMemberParameters2}, {}), [], undefined, "flax.core/sdk_widgets#type:Widget");
export function _ShortcutsFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; shortcuts: DartMapInput<upstream3.ShortcutActivator, upstream2.Intent, Readonly<{ "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutActivator": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>; child: Widget; debugLabel?: string | null | undefined; includeSemantics?: boolean | undefined }): Shortcuts {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:Shortcuts", "", [{"name":"key"},{"name":"shortcuts","required":true},{"name":"child","required":true},{"name":"debugLabel"},{"name":"includeSemantics"}], [], options) as Shortcuts;
}
export declare namespace _ShortcutsFactory { const __flaxJsx: { readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _ShortcutsFactory>[0]>), "child"> & ({ "child": (globalThis.NonNullable<globalThis.Parameters<typeof _ShortcutsFactory>[0]>)["child"]; children?: never } | { "child"?: never; children: (globalThis.NonNullable<globalThis.Parameters<typeof _ShortcutsFactory>[0]>)["child"] }); readonly slot: "child"; readonly many: false; }; }
export namespace _ShortcutsFactory {
export function manager(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; manager: Readonly<{ "__flaxBound:package:flutter/src/widgets/shortcuts.dart::ShortcutManager": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>; child: Widget; debugLabel?: string | null | undefined; includeSemantics?: boolean | undefined }): Shortcuts {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:Shortcuts", "manager", [{"name":"key"},{"name":"manager","required":true},{"name":"child","required":true},{"name":"debugLabel"},{"name":"includeSemantics"}], [], options) as Shortcuts;
}
export declare namespace manager { const __flaxJsx: { readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof manager>[0]>), "child"> & ({ "child": (globalThis.NonNullable<globalThis.Parameters<typeof manager>[0]>)["child"]; children?: never } | { "child"?: never; children: (globalThis.NonNullable<globalThis.Parameters<typeof manager>[0]>)["child"] }); readonly slot: "child"; readonly many: false; }; }
}
export const Shortcuts: typeof _ShortcutsFactory & _FlaxInstanceType<Shortcuts> & _FlaxDartType<Shortcuts, readonly ["class", "flax.core/sdk_widgets#type:Shortcuts", readonly [], false]> = _flaxBindInstanceType<Shortcuts, typeof _ShortcutsFactory>(_ShortcutsFactory, "flax.core/sdk_widgets#type:Shortcuts", ["flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _ShortcutsFactory & _FlaxInstanceType<Shortcuts> & _FlaxDartType<Shortcuts, readonly ["class", "flax.core/sdk_widgets#type:Shortcuts", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "manager" | "shortcuts" | "child" | "debugLabel" | "includeSemantics" | "key" | "createState" | "debugFillProperties" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/shortcuts.dart::Shortcuts" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
