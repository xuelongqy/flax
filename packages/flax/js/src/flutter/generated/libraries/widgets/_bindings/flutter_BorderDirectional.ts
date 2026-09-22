// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BoxBorder';
import '@flax/flutter/widgets/_bindings/flutter_BoxBorder';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import '@flax/flutter/widgets/_bindings/flutter_BorderSide';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface BorderDirectional extends upstream0.BoxBorder, upstream1.ShapeBorder, Readonly<{ "__flaxBound:package:flutter/src/painting/box_border.dart::BorderDirectional": readonly [] }> { readonly __BorderDirectional: unique symbol;
readonly top: upstream2.BorderSide;
readonly start: upstream2.BorderSide;
readonly end: upstream2.BorderSide;
readonly bottom: upstream2.BorderSide;
readonly isUniform: boolean;
}
defineObject("flax.core/flutter#type:BorderDirectional", ["top","start","end","bottom","isUniform"], [], {}, []);
export function BorderDirectional(options: { top?: upstream2.BorderSide | undefined; start?: upstream2.BorderSide | undefined; end?: upstream2.BorderSide | undefined; bottom?: upstream2.BorderSide | undefined } = {}): BorderDirectional {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BorderDirectional", "", [{"name":"top","required":false,"positional":false},{"name":"start","required":false,"positional":false},{"name":"end","required":false,"positional":false},{"name":"bottom","required":false,"positional":false}], [], options) as BorderDirectional;
}
