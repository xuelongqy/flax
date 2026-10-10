// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindInstanceType as _flaxHostBindInstanceType, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"listener","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"node","required":false,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"disposition","required":false,"positional":false}] as const;
const _flaxMemberParameters3 = [] as const;
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_UnfocusDisposition';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface FocusNode extends upstream0.Listenable, Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> { readonly __FocusNode: unique symbol;
readonly hasFocus: boolean;
readonly hasPrimaryFocus: boolean;
get canRequestFocus(): boolean;
get skipTraversal(): boolean;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
requestFocus(node?: Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [] }> | null): void;
unfocus(options?: {disposition?: upstream1.UnfocusDisposition | undefined}): void;
nextFocus(): boolean;
previousFocus(): boolean;
dispose(): void;
set canRequestFocus(value: boolean);
set skipTraversal(value: boolean);
}
defineObject("flax.core/flutter#type:FocusNode", ["hasFocus","hasPrimaryFocus","canRequestFocus","skipTraversal"], ["canRequestFocus","skipTraversal"], _flaxBindingMethods("flax.core/flutter#type:FocusNode", "object", {"addListener":_flaxMemberParameters0,"removeListener":_flaxMemberParameters0,"requestFocus":_flaxMemberParameters1,"unfocus":_flaxMemberParameters2,"nextFocus":_flaxMemberParameters3,"previousFocus":_flaxMemberParameters3,"dispose":_flaxMemberParameters3}), ["removeListener"]);
function _FocusNodeFactory(options: { debugLabel?: string | null | undefined; skipTraversal?: boolean | undefined; canRequestFocus?: boolean | undefined } = {}): FocusNode {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:FocusNode", "", [{"name":"debugLabel","required":false,"positional":false},{"name":"skipTraversal","required":false,"positional":false},{"name":"canRequestFocus","required":false,"positional":false}], [], options) as FocusNode;
}
export const FocusNode: typeof _FocusNodeFactory & _FlaxInstanceType<FocusNode> = _flaxBindInstanceType<FocusNode, typeof _FocusNodeFactory>(_FocusNodeFactory, "flax.core/flutter#type:FocusNode", ["dart:core::Object","package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin","package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree","package:flutter/src/foundation/diagnostics.dart::Diagnosticable","package:flutter/src/foundation/change_notifier.dart::ChangeNotifier","flax.core/flutter#type:Listenable"]);
