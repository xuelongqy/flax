// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_UnfocusDisposition';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface FocusNode extends upstream0.Listenable, Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> { readonly __FocusNode: unique symbol;
readonly hasFocus: boolean;
readonly hasPrimaryFocus: boolean;
get canRequestFocus(): boolean;
get skipTraversal(): boolean;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
requestFocus(node?: FocusNode | null): void;
unfocus(options?: {disposition?: upstream1.UnfocusDisposition | undefined}): void;
nextFocus(): boolean;
previousFocus(): boolean;
dispose(): void;
set canRequestFocus(value: boolean);
set skipTraversal(value: boolean);
}
defineObject("flax.core/flutter#type:FocusNode", ["hasFocus","hasPrimaryFocus","canRequestFocus","skipTraversal"], ["canRequestFocus","skipTraversal"], {addListener(this: object, listener: (() => void)): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:FocusNode", "addListener", [listener]);
},
removeListener(this: object, listener: (() => void)): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:FocusNode", "removeListener", [listener]);
},
requestFocus(this: object, node?: FocusNode | null): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:FocusNode", "requestFocus", [node]);
},
unfocus(this: object, options: { disposition?: upstream1.UnfocusDisposition | undefined } = {}): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["disposition"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:FocusNode", "unfocus", [options.disposition]);
},
nextFocus(this: object): boolean {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:FocusNode", "nextFocus", []);
return _flaxResult as boolean;
},
previousFocus(this: object): boolean {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:FocusNode", "previousFocus", []);
return _flaxResult as boolean;
},
dispose(this: object): void {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:FocusNode", "dispose", []);
},
}, ["removeListener"]);
export function FocusNode(options: { debugLabel?: string | null | undefined; skipTraversal?: boolean | undefined; canRequestFocus?: boolean | undefined } = {}): FocusNode {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:FocusNode", "", [{"name":"debugLabel","required":false,"positional":false},{"name":"skipTraversal","required":false,"positional":false},{"name":"canRequestFocus","required":false,"positional":false}], [], options) as FocusNode;
}
