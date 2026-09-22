// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/material.__module";
export interface TextInputAction extends DartEnum { readonly type: "flax.material/material#type:TextInputAction"; }
export const TextInputAction = Object.freeze({
none: enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "none"),
unspecified: enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "unspecified"),
done: enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "done"),
go: enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "go"),
search: enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "search"),
send: enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "send"),
next: enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "next"),
previous: enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "previous"),
continueAction: enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "continueAction"),
join: enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "join"),
route: enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "route"),
emergencyCall: enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "emergencyCall"),
newline: enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "newline"),
});
