// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { componentStateCall as _flaxComponentStateCall, registerComponentStateVariant as _flaxRegisterComponentStateVariant } from '@flax/core/bindings';
import { State as _FlaxComponentState, StatefulWidget as _FlaxComponentStatefulWidget } from '../../../../components.js';
import type * as upstream0 from '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/components.__module";
export interface KeepAliveTickerState<T extends _FlaxComponentStatefulWidget = _FlaxComponentStatefulWidget> extends upstream0.TickerProvider {}
export abstract class KeepAliveTickerState<T extends _FlaxComponentStatefulWidget = _FlaxComponentStatefulWidget> extends _FlaxComponentState<T> {
constructor() { super(); _flaxRegisterComponentStateVariant(this, "flax.core/components#stateVariant:KeepAliveTickerState"); }
abstract get wantKeepAlive(): boolean;
updateKeepAlive(): void {
_flaxComponentStateCall(this, "native:updateKeepAlive", []);
}
build(context: ComponentContext): Widget { return this.invokeSuper("build", [context]) as Widget; }
}
