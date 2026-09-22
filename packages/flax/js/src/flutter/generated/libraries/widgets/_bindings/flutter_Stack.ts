// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/widgets/_bindings/flutter_AlignmentGeometry';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_TextDirection';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_StackFit';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_Clip';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface Stack extends WidgetDescription { readonly type: "flax.core/flutter#type:Stack";  }
export function Stack(options: { key?: upstream0.Key | null | undefined; alignment?: Bindable<upstream1.AlignmentGeometry> | undefined; textDirection?: Bindable<upstream2.TextDirection | null> | undefined; fit?: Bindable<upstream3.StackFit> | undefined; clipBehavior?: Bindable<upstream4.Clip> | undefined; children?: Bindable<DartListInput<Widget, Widget>> | undefined } = {}): Stack {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:Stack", "", [{"name":"key","required":false,"positional":false},{"name":"alignment","required":false,"positional":false},{"name":"textDirection","required":false,"positional":false},{"name":"fit","required":false,"positional":false},{"name":"clipBehavior","required":false,"positional":false},{"name":"children","required":false,"positional":false}], [], options) as Stack;
}
