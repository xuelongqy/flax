// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_FocusScopeNode';
import '@flax/flutter/widgets/_bindings/sdk_widgets_FocusScopeNode';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_KeyEventResult';
import '@flax/flutter/widgets/_bindings/sdk_widgets_KeyEventResult';
import type * as upstream5 from '@flax/flutter/services/_bindings/flutter_KeyEvent';
import '@flax/flutter/services/_bindings/flutter_KeyEvent';
import type * as upstream6 from '@flax/flutter/services/_bindings/sdk_services_RawKeyEvent';
import '@flax/flutter/services/_bindings/sdk_services_RawKeyEvent';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/flutter_Focus';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream15 from '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { _flaxMemberParameters173, _flaxMemberParameters2 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FocusScope extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_scope.dart::FocusScope": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_scope.dart::Focus": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __FocusScope: unique symbol;
readonly [_flaxDartTypeValue]: FocusScope;

readonly parentNode: upstream3.FocusNode | null;
readonly child: Widget;
readonly focusNode: upstream3.FocusNode | null;
readonly autofocus: boolean;
readonly onFocusChange: ((value: boolean) => void) | null;
readonly onKeyEvent: ((node: Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>, event: Readonly<{ "__flaxBound:package:flutter/src/services/hardware_keyboard.dart::KeyEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>) => upstream4.KeyEventResult) | null;
readonly onKey: ((node: Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>, event: Readonly<{ "__flaxBound:package:flutter/src/services/raw_keyboard.dart::RawKeyEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>) => upstream4.KeyEventResult) | null;
readonly canRequestFocus: boolean;
readonly skipTraversal: boolean;
readonly descendantsAreFocusable: boolean;
readonly descendantsAreTraversable: boolean;
readonly includeSemantics: boolean;
readonly debugLabel: string | null;
readonly key: upstream1.Key | null;
createState(): upstream8.State<upstream9.Focus>;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
createElement(): upstream11.StatefulElement;
toStringShort(): string;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream12.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream12.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream14.DiagnosticsTreeStyle | null | undefined}): upstream13.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream13.DiagnosticsNode>;
}
defineObject("flax.core/sdk_widgets#type:FocusScope", ["parentNode","child","focusNode","autofocus","onFocusChange","onKeyEvent","onKey","canRequestFocus","skipTraversal","descendantsAreFocusable","descendantsAreTraversable","includeSemantics","debugLabel","key"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:FocusScope", "object", {"createState":_flaxMemberParameters2,"createElement":_flaxMemberParameters2}, {}), [], undefined, "flax.core/sdk_widgets#type:Widget");
export function _FocusScopeFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; node?: Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusScopeNode": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined; parentNode?: Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined; child: Widget; autofocus?: boolean | undefined; onFocusChange?: ((value: boolean) => void) | null | undefined; canRequestFocus?: boolean | null | undefined; skipTraversal?: boolean | null | undefined; onKeyEvent?: ((node: upstream3.FocusNode, event: upstream5.KeyEvent) => upstream4.KeyEventResult) | null | undefined; onKey?: ((node: upstream3.FocusNode, event: upstream6.RawKeyEvent) => upstream4.KeyEventResult) | null | undefined; debugLabel?: string | null | undefined; includeSemantics?: boolean | undefined; descendantsAreFocusable?: boolean | null | undefined; descendantsAreTraversable?: boolean | null | undefined }): FocusScope {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:FocusScope", "", [{"name":"key"},{"name":"node"},{"name":"parentNode"},{"name":"child","required":true},{"name":"autofocus"},{"name":"onFocusChange"},{"name":"canRequestFocus"},{"name":"skipTraversal"},{"name":"onKeyEvent"},{"name":"onKey"},{"name":"debugLabel"},{"name":"includeSemantics"},{"name":"descendantsAreFocusable"},{"name":"descendantsAreTraversable"}], [], options) as FocusScope;
}
export declare namespace _FocusScopeFactory { const __flaxJsx: { readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _FocusScopeFactory>[0]>), "child"> & ({ "child": (globalThis.NonNullable<globalThis.Parameters<typeof _FocusScopeFactory>[0]>)["child"]; children?: never } | { "child"?: never; children: (globalThis.NonNullable<globalThis.Parameters<typeof _FocusScopeFactory>[0]>)["child"] }); readonly slot: "child"; readonly many: false; }; }
export namespace _FocusScopeFactory {
export function withExternalFocusNode(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; child: Widget; focusScopeNode: Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusScopeNode": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }>; parentNode?: Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined; autofocus?: boolean | undefined; includeSemantics?: boolean | undefined; onFocusChange?: ((value: boolean) => void) | null | undefined }): FocusScope {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:FocusScope", "withExternalFocusNode", [{"name":"key"},{"name":"child","required":true},{"name":"focusScopeNode","required":true},{"name":"parentNode"},{"name":"autofocus"},{"name":"includeSemantics"},{"name":"onFocusChange"}], [], options) as FocusScope;
}
export declare namespace withExternalFocusNode { const __flaxJsx: { readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof withExternalFocusNode>[0]>), "child"> & ({ "child": (globalThis.NonNullable<globalThis.Parameters<typeof withExternalFocusNode>[0]>)["child"]; children?: never } | { "child"?: never; children: (globalThis.NonNullable<globalThis.Parameters<typeof withExternalFocusNode>[0]>)["child"] }); readonly slot: "child"; readonly many: false; }; }
}
export namespace _FocusScopeFactory { export function of(context: upstream7.BuildContext, options: { createDependency?: boolean | undefined } = {}): upstream2.FocusScopeNode {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["createDependency"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:FocusScope.of", [contextHandle(context, "flax.core/flutter#type:BuildContext"), options.createDependency], _flaxMemberParameters173);
return _flaxResult as upstream2.FocusScopeNode;
} }
export const FocusScope: typeof _FocusScopeFactory & _FlaxInstanceType<FocusScope> & _FlaxDartType<FocusScope, readonly ["class", "flax.core/sdk_widgets#type:FocusScope", readonly [], false]> = _flaxBindInstanceType<FocusScope, typeof _FocusScopeFactory>(_FocusScopeFactory, "flax.core/sdk_widgets#type:FocusScope", ["flax.core/flutter#type:Focus","flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _FocusScopeFactory & _FlaxInstanceType<FocusScope> & _FlaxDartType<FocusScope, readonly ["class", "flax.core/sdk_widgets#type:FocusScope", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "parentNode" | "child" | "focusNode" | "autofocus" | "onFocusChange" | "onKeyEvent" | "onKey" | "canRequestFocus" | "skipTraversal" | "descendantsAreFocusable" | "descendantsAreTraversable" | "includeSemantics" | "debugLabel" | "key" | "createState" | "debugFillProperties" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/focus_scope.dart::FocusScope" | "__flaxBound:package:flutter/src/widgets/focus_scope.dart::Focus" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
