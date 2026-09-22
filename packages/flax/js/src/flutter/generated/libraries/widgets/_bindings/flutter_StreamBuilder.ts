// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/dart/async/_bindings/flutter_Stream';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_AsyncSnapshot';
import '@flax/flutter/widgets/_bindings/flutter_AsyncSnapshot';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface StreamBuilder<T extends unknown | null = unknown | null> extends WidgetDescription { readonly type: "flax.core/flutter#type:StreamBuilder";  }
export function StreamBuilder<T extends unknown | null = unknown | null>(options: { key?: upstream0.Key | null | undefined; initialData?: Bindable<T | null> | undefined; stream: Bindable<upstream1.Stream<T> | null>; builder: Bindable<((context: upstream2.BuildContext, snapshot: upstream3.AsyncSnapshot<T>) => Widget)> }): StreamBuilder<T> {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:StreamBuilder", "", [{"name":"key","required":false,"positional":false},{"name":"initialData","required":false,"positional":false},{"name":"stream","required":true,"positional":false},{"name":"builder","required":true,"positional":false}], [], options) as StreamBuilder<T>;
}
