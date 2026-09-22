// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
function _flaxInstallBindingModule(
  moduleId: string,
  uiProtocol: number,
  requiredCapabilities: readonly string[],
) {
  if (typeof moduleId !== 'string' || moduleId.length === 0 || moduleId.indexOf('/') < 1 || moduleId.indexOf('/') !== moduleId.lastIndexOf('/') || moduleId.startsWith('/') || moduleId.endsWith('/')) {
    throw new TypeError('Invalid binding moduleId');
  }
  if (uiProtocol !== bindingVersion) {
    throw new TypeError(`Incompatible binding uiProtocol: ${uiProtocol}`);
  }
  let previous: string | undefined;
  for (const capability of requiredCapabilities) {
    if (typeof capability !== 'string' || (previous !== undefined && capability <= previous)) {
      throw new TypeError('requiredCapabilities must be sorted unique strings');
    }
    previous = capability;
    throw new TypeError(`Unsupported binding capability ${capability}`);
  }
  return Object.freeze({
    moduleId,
    uiProtocol,
    requiredCapabilities: Object.freeze([...requiredCapabilities]),
    construct: _flaxHostConstruct,
    constructProxy: _flaxHostConstructProxy,
    constructObject: _flaxHostConstructObject,
    constructDeferredObject: _flaxHostConstructDeferredObject,
    constructStream: _flaxHostConstructStream,
    constructAsyncIterableStream: _flaxHostConstructAsyncIterableStream,
    defineObject: _flaxHostDefineObject,
    defineStream: _flaxHostDefineStream,
    invokeObject: _flaxHostInvokeObject,
    invokeObjectStatic: _flaxHostInvokeObjectStatic,
    invokeStream: _flaxHostInvokeStream,
    enumValue: _flaxHostEnumValue,
    defineContext: _flaxHostDefineContext,
    defineState: _flaxHostDefineState,
    contextHandle: _flaxHostContextHandle,
    invokeStatic: _flaxHostInvokeStatic,
    invokeInstance: _flaxHostInvokeInstance,
    invokeTopLevel: _flaxHostInvokeTopLevel,
  });
}
export const canvasBindingModule = _flaxInstallBindingModule("flax.canvas/canvas", 20, Object.freeze([]) as readonly string[]);
const { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } = canvasBindingModule;
export interface FlaxCanvasSurface extends upstream0.Listenable, Readonly<{ "__flaxBound:package:flax_canvas/src/surface.dart::FlaxCanvasSurface": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> { readonly __FlaxCanvasSurface: unique symbol;
get width(): number;
get height(): number;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
set width(value: number);
set height(value: number);
}
defineObject("flax.canvas/canvas#type:FlaxCanvasSurface", ["width","height"], ["width","height"], {addListener(this: object, listener: (() => void)): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.canvas/canvas#type:FlaxCanvasSurface", "addListener", [listener]);
},
removeListener(this: object, listener: (() => void)): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.canvas/canvas#type:FlaxCanvasSurface", "removeListener", [listener]);
},
}, ["removeListener"]);
export interface FlaxCanvasView extends WidgetDescription { readonly type: "flax.canvas/canvas#type:FlaxCanvasView";  }
export function CanvasView(canvas: Bindable<FlaxCanvasSurface>, options: { key?: upstream1.Key | null | undefined; width?: Bindable<number | null> | undefined; height?: Bindable<number | null> | undefined } = {}): FlaxCanvasView {
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.canvas/canvas#type:FlaxCanvasView", "", [{"name":"canvas","required":true,"positional":true},{"name":"key","required":false,"positional":false},{"name":"width","required":false,"positional":false},{"name":"height","required":false,"positional":false}], [canvas], options) as FlaxCanvasView;
}
