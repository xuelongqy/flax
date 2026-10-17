// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"listener","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"disposition","required":false,"positional":false}] as const;
const _flaxMemberParameters2 = [] as const;
const _flaxMemberParameters3 = [{"name":"node","required":false,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"joiner","required":false,"positional":false}] as const;
const _flaxMemberParameters5 = [{"name":"prefixLineOne","required":false,"positional":false},{"name":"prefixOtherLines","required":false,"positional":false},{"name":"wrapWidth","required":false,"positional":false}] as const;
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_Size';
import '@flax/flutter/services/_bindings/flutter_Size';
import type * as upstream3 from '@flax/flutter/gestures/_bindings/flutter_Offset';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_UnfocusDisposition';
import '@flax/flutter/widgets/_bindings/flutter_UnfocusDisposition';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FocusNode extends Omit<upstream0.Listenable, typeof _flaxDartTypeValue | "skipTraversal" | "canRequestFocus" | "descendantsAreFocusable" | "descendantsAreTraversable" | "context" | "parent" | "children" | "traversalChildren" | "debugLabel" | "descendants" | "traversalDescendants" | "ancestors" | "hasFocus" | "hasPrimaryFocus" | "size" | "offset" | "hasListeners" | "addListener" | "removeListener" | "unfocus" | "consumeKeyboardToken" | "dispose" | "requestFocus" | "nextFocus" | "previousFocus" | "toStringShort" | "toStringShallow" | "toStringDeep">, Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> { readonly __FocusNode: unique symbol;

get skipTraversal(): boolean;
get canRequestFocus(): boolean;
get descendantsAreFocusable(): boolean;
get descendantsAreTraversable(): boolean;
readonly context: upstream1.BuildContext | null;
readonly parent: FocusNode | null;
readonly children: DartIterable<FocusNode>;
readonly traversalChildren: DartIterable<FocusNode>;
get debugLabel(): string | null;
readonly descendants: DartIterable<FocusNode>;
readonly traversalDescendants: DartIterable<FocusNode>;
readonly ancestors: DartIterable<FocusNode>;
readonly hasFocus: boolean;
readonly hasPrimaryFocus: boolean;
readonly size: upstream2.Size;
readonly offset: upstream3.Offset;
readonly hasListeners: boolean;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
unfocus(options?: {disposition?: upstream4.UnfocusDisposition | undefined}): void;
consumeKeyboardToken(): boolean;
dispose(): void;
requestFocus(node?: Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [] }> | null): void;
nextFocus(): boolean;
previousFocus(): boolean;
toStringShort(): string;
toStringShallow(options?: {joiner?: string | undefined}): string;
toStringDeep(options?: {prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
set skipTraversal(value: boolean);
set canRequestFocus(value: boolean);
set descendantsAreFocusable(value: boolean);
set descendantsAreTraversable(value: boolean);
set debugLabel(value: string | null);
}
defineObject("flax.core/flutter#type:FocusNode", ["skipTraversal","canRequestFocus","descendantsAreFocusable","descendantsAreTraversable","context","parent","children","traversalChildren","debugLabel","descendants","traversalDescendants","ancestors","hasFocus","hasPrimaryFocus","size","offset","hasListeners"], ["skipTraversal","canRequestFocus","descendantsAreFocusable","descendantsAreTraversable","debugLabel"], _flaxBindingMethods("flax.core/flutter#type:FocusNode", "object", {"addListener":_flaxMemberParameters0,"removeListener":_flaxMemberParameters0,"unfocus":_flaxMemberParameters1,"consumeKeyboardToken":_flaxMemberParameters2,"dispose":_flaxMemberParameters2,"requestFocus":_flaxMemberParameters3,"nextFocus":_flaxMemberParameters2,"previousFocus":_flaxMemberParameters2,"toStringShort":_flaxMemberParameters2,"toStringShallow":_flaxMemberParameters4,"toStringDeep":_flaxMemberParameters5}, {}), ["removeListener"]);
export function _FocusNodeFactory(options: { debugLabel?: string | null | undefined; skipTraversal?: boolean | undefined; canRequestFocus?: boolean | undefined; descendantsAreFocusable?: boolean | undefined; descendantsAreTraversable?: boolean | undefined } = {}): FocusNode {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:FocusNode", "", [{"name":"debugLabel","required":false,"positional":false},{"name":"skipTraversal","required":false,"positional":false},{"name":"canRequestFocus","required":false,"positional":false},{"name":"descendantsAreFocusable","required":false,"positional":false},{"name":"descendantsAreTraversable","required":false,"positional":false}], [], options) as FocusNode;
}
export const FocusNode: typeof _FocusNodeFactory & _FlaxInstanceType<FocusNode> & _FlaxDartType<FocusNode, readonly ["class", "flax.core/flutter#type:FocusNode", readonly [], false]> = _flaxBindInstanceType<FocusNode, typeof _FocusNodeFactory>(_FocusNodeFactory, "flax.core/flutter#type:FocusNode", ["dart:core::Object","package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin","package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree","package:flutter/src/foundation/diagnostics.dart::Diagnosticable","package:flutter/src/foundation/change_notifier.dart::ChangeNotifier","flax.core/flutter#type:Listenable"]) as typeof _FocusNodeFactory & _FlaxInstanceType<FocusNode> & _FlaxDartType<FocusNode, readonly ["class", "flax.core/flutter#type:FocusNode", readonly [], false]>;
