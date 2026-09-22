// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_TextRange';
import '@flax/flutter/services/_bindings/flutter_TextRange';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_TextAffinity';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface TextSelection extends upstream0.TextRange, Readonly<{ "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [] }> { readonly __TextSelection: unique symbol;
readonly start: number;
readonly end: number;
readonly isValid: boolean;
readonly isCollapsed: boolean;
readonly isNormalized: boolean;
readonly baseOffset: number;
readonly extentOffset: number;
readonly affinity: upstream1.TextAffinity;
readonly isDirectional: boolean;
copyWith(options?: {affinity?: upstream1.TextAffinity | null | undefined; baseOffset?: number | null | undefined; extentOffset?: number | null | undefined; isDirectional?: boolean | null | undefined}): TextSelection;
}
defineObject("flax.core/flutter#type:TextSelection", ["start","end","isValid","isCollapsed","isNormalized","baseOffset","extentOffset","affinity","isDirectional"], [], {copyWith(this: object, options: { affinity?: upstream1.TextAffinity | null | undefined; baseOffset?: number | null | undefined; extentOffset?: number | null | undefined; isDirectional?: boolean | null | undefined } = {}): TextSelection {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["affinity","baseOffset","extentOffset","isDirectional"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:TextSelection", "copyWith", [options.affinity, options.baseOffset, options.extentOffset, options.isDirectional]);
return _flaxResult as TextSelection;
},
}, []);
export function TextSelection(options: { baseOffset: number; extentOffset: number; affinity?: upstream1.TextAffinity | undefined; isDirectional?: boolean | undefined }): TextSelection {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:TextSelection", "", [{"name":"baseOffset","required":true,"positional":false},{"name":"extentOffset","required":true,"positional":false},{"name":"affinity","required":false,"positional":false},{"name":"isDirectional","required":false,"positional":false}], [], options) as TextSelection;
}
export namespace TextSelection {
export function collapsed(options: { offset: number; affinity?: upstream1.TextAffinity | undefined }): TextSelection {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:TextSelection", "collapsed", [{"name":"offset","required":true,"positional":false},{"name":"affinity","required":false,"positional":false}], [], options) as TextSelection;
}
}
