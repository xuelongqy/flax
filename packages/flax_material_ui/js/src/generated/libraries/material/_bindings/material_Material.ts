// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/material/_bindings/material_MaterialType';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_TextStyle';
import '@flax/flutter/widgets/_bindings/flutter_TextStyle';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
import '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_Clip';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/material.__module";
export interface Material extends WidgetDescription { readonly type: "flax.material/material#type:Material";  }
export function Material(options: { key?: upstream0.Key | null | undefined; type?: Bindable<upstream1.MaterialType> | undefined; elevation?: Bindable<number> | undefined; color?: Bindable<upstream2.Color | null> | undefined; shadowColor?: Bindable<upstream2.Color | null> | undefined; surfaceTintColor?: Bindable<upstream2.Color | null> | undefined; textStyle?: Bindable<upstream3.TextStyle | null> | undefined; borderRadius?: Bindable<upstream4.BorderRadiusGeometry | null> | undefined; shape?: Bindable<upstream5.ShapeBorder | null> | undefined; clipBehavior?: Bindable<upstream6.Clip> | undefined; child?: Bindable<Widget | null> | undefined } = {}): Material {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.material/material#type:Material", "", [{"name":"key","required":false,"positional":false},{"name":"type","required":false,"positional":false},{"name":"elevation","required":false,"positional":false},{"name":"color","required":false,"positional":false},{"name":"shadowColor","required":false,"positional":false},{"name":"surfaceTintColor","required":false,"positional":false},{"name":"textStyle","required":false,"positional":false},{"name":"borderRadius","required":false,"positional":false},{"name":"shape","required":false,"positional":false},{"name":"clipBehavior","required":false,"positional":false},{"name":"child","required":false,"positional":false}], [], options) as Material;
}
