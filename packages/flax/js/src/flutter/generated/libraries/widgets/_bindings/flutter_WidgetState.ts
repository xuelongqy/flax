// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface WidgetState extends DartEnum { readonly type: "flax.core/flutter#type:WidgetState"; }
export const WidgetState = Object.freeze({
hovered: enumValue<WidgetState>("flax.core/flutter#type:WidgetState", "hovered"),
focused: enumValue<WidgetState>("flax.core/flutter#type:WidgetState", "focused"),
pressed: enumValue<WidgetState>("flax.core/flutter#type:WidgetState", "pressed"),
dragged: enumValue<WidgetState>("flax.core/flutter#type:WidgetState", "dragged"),
selected: enumValue<WidgetState>("flax.core/flutter#type:WidgetState", "selected"),
scrolledUnder: enumValue<WidgetState>("flax.core/flutter#type:WidgetState", "scrolledUnder"),
disabled: enumValue<WidgetState>("flax.core/flutter#type:WidgetState", "disabled"),
error: enumValue<WidgetState>("flax.core/flutter#type:WidgetState", "error"),
});
