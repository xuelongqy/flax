// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_Axis';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface SingleChildScrollView extends WidgetDescription { readonly type: "flax.core/flutter#type:SingleChildScrollView";  }
export function SingleChildScrollView(options: { key?: upstream0.Key | null | undefined; scrollDirection?: Bindable<upstream1.Axis> | undefined; reverse?: Bindable<boolean> | undefined; padding?: Bindable<upstream2.EdgeInsetsGeometry | null> | undefined; primary?: Bindable<boolean | null> | undefined; physics?: Bindable<upstream3.ScrollPhysics | null> | undefined; controller?: Bindable<upstream4.ScrollController | null> | undefined; child?: Bindable<Widget | null> | undefined } = {}): SingleChildScrollView {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:SingleChildScrollView", "", [{"name":"key","required":false,"positional":false},{"name":"scrollDirection","required":false,"positional":false},{"name":"reverse","required":false,"positional":false},{"name":"padding","required":false,"positional":false},{"name":"primary","required":false,"positional":false},{"name":"physics","required":false,"positional":false},{"name":"controller","required":false,"positional":false},{"name":"child","required":false,"positional":false}], [], options) as SingleChildScrollView;
}
