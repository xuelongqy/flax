// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_Page';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_Route';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_NavigatorObserver';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorObserver';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface Navigator extends WidgetDescription { readonly type: "flax.core/flutter#type:Navigator";  }
export function Navigator(options: { key?: upstream0.Key | null | undefined; pages?: Bindable<DartListInput<upstream1.Page<unknown | null>, upstream1.Page<unknown | null>>> | undefined; initialRoute?: Bindable<string | null> | undefined; onGenerateRoute?: Bindable<((settings: upstream3.RouteSettings) => upstream2.Route<unknown | null> | null) | null> | undefined; onUnknownRoute?: Bindable<((settings: upstream3.RouteSettings) => upstream2.Route<unknown | null> | null) | null> | undefined; observers?: Bindable<DartListInput<upstream4.NavigatorObserver, upstream4.NavigatorObserver>> | undefined; onDidRemovePage?: Bindable<((page: upstream1.Page<unknown | null>) => void) | null> | undefined } = {}): Navigator {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:Navigator", "", [{"name":"key","required":false,"positional":false},{"name":"pages","required":false,"positional":false},{"name":"initialRoute","required":false,"positional":false},{"name":"onGenerateRoute","required":false,"positional":false},{"name":"onUnknownRoute","required":false,"positional":false},{"name":"observers","required":false,"positional":false},{"name":"onDidRemovePage","required":false,"positional":false}], [], options) as Navigator;
}
export namespace Navigator { export function of(context: upstream6.BuildContext, options: { rootNavigator?: boolean | undefined } = {}): upstream5.NavigatorState {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["rootNavigator"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeStatic("flax.core/flutter#type:Navigator", "of", [contextHandle(context, "flax.core/flutter#type:BuildContext"), options.rootNavigator]);
return _flaxResult as upstream5.NavigatorState;
} }
