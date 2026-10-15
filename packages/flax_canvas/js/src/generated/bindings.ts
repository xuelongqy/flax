// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, defineDartTypes as _flaxHostDefineDartTypes, bindInstanceType as _flaxHostBindInstanceType, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineEnum as _flaxHostDefineEnum, invokeEnum as _flaxHostInvokeEnum, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"listener","required":true,"positional":true}] as const;
import type * as upstream0 from '@flax/flutter/foundation';
import '@flax/flutter/foundation';
import type * as upstream1 from '@flax/flutter/foundation';
import '@flax/flutter/foundation';
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
    if (capability !== 'native-functions' && capability !== 'lazy-js-iterables' && capability !== 'callback-map-keys' && capability !== 'proxy-super-constructors' && capability !== 'bottom-types' && capability !== 'explicit-generic-types' && capability !== 'engine-type-handles' && capability !== 'generic-call-types' && capability !== 'dart-type-tokens' && capability !== 'generic-member-views' && capability !== 'instance-checks' && capability !== 'native-core-inputs' && capability !== 'native-bigint' && capability !== 'native-widget-proxies' && capability !== 'shared-buffers' && capability !== 'shared-uint8') {
      throw new TypeError(`Unsupported binding capability ${capability}`);
    }
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
    bindInstanceType: _flaxHostBindInstanceType,
    defineDartTypes: _flaxHostDefineDartTypes,
    defineObject: _flaxHostDefineObject,
    defineStream: _flaxHostDefineStream,
    invokeObject: _flaxHostInvokeObject,
    invokeObjectStatic: _flaxHostInvokeObjectStatic,
    invokeStream: _flaxHostInvokeStream,
    enumValue: _flaxHostEnumValue,
    defineEnum: _flaxHostDefineEnum,
    invokeEnum: _flaxHostInvokeEnum,
    defineContext: _flaxHostDefineContext,
    defineState: _flaxHostDefineState,
    contextHandle: _flaxHostContextHandle,
    invokeStatic: _flaxHostInvokeStatic,
    invokeInstance: _flaxHostInvokeInstance,
    invokeTopLevel: _flaxHostInvokeTopLevel,
  });
}
export const canvasBindingModule = _flaxInstallBindingModule("flax.canvas/canvas", 24, Object.freeze(["generic-member-views","instance-checks","native-widget-proxies"]) as readonly string[]);
const { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineDartTypes: _flaxDefineDartTypes, bindInstanceType: _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } = canvasBindingModule;
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FlaxCanvasSurface extends upstream0.Listenable, Readonly<{ "__flaxBound:package:flax_canvas/src/surface.dart::FlaxCanvasSurface": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> { readonly __FlaxCanvasSurface: unique symbol;

get width(): number;
get height(): number;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
set width(value: number);
set height(value: number);
}
defineObject("flax.canvas/canvas#type:FlaxCanvasSurface", ["width","height"], ["width","height"], _flaxBindingMethods("flax.canvas/canvas#type:FlaxCanvasSurface", "object", {"addListener":_flaxMemberParameters0,"removeListener":_flaxMemberParameters0}, {}), ["removeListener"]);
export interface FlaxCanvasView extends WidgetDescription { readonly type: "flax.canvas/canvas#type:FlaxCanvasView";  }
function _FlaxCanvasViewConstruct(canvas: Bindable<Readonly<{ "__flaxBound:package:flax_canvas/src/surface.dart::FlaxCanvasSurface": readonly [] }>>, options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; width?: Bindable<number | null> | undefined; height?: Bindable<number | null> | undefined } = {}): FlaxCanvasView {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.canvas/canvas#type:FlaxCanvasView", "", [{"name":"canvas","required":true,"positional":true},{"name":"key","required":false,"positional":false},{"name":"width","required":false,"positional":false},{"name":"height","required":false,"positional":false}], [canvas], options) as FlaxCanvasView;
}
export const FlaxCanvasSurface: object & _FlaxInstanceType<FlaxCanvasSurface> & _FlaxDartType<FlaxCanvasSurface, readonly ["class", "flax.canvas/canvas#type:FlaxCanvasSurface", readonly [], false]> = _flaxBindInstanceType<FlaxCanvasSurface, object>({}, "flax.canvas/canvas#type:FlaxCanvasSurface", ["package:flutter/src/foundation/change_notifier.dart::ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]) as object & _FlaxInstanceType<FlaxCanvasSurface> & _FlaxDartType<FlaxCanvasSurface, readonly ["class", "flax.canvas/canvas#type:FlaxCanvasSurface", readonly [], false]>;
export const FlaxCanvasView: object & _FlaxInstanceType<FlaxCanvasView> & _FlaxDartType<FlaxCanvasView, readonly ["class", "flax.canvas/canvas#type:FlaxCanvasView", readonly [], false]> = _flaxBindInstanceType<FlaxCanvasView, object>({}, "flax.canvas/canvas#type:FlaxCanvasView", ["package:flutter/src/widgets/framework.dart::LeafRenderObjectWidget","package:flutter/src/widgets/framework.dart::RenderObjectWidget","package:flutter/src/widgets/framework.dart::Widget","package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree","dart:core::Object","package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]) as object & _FlaxInstanceType<FlaxCanvasView> & _FlaxDartType<FlaxCanvasView, readonly ["class", "flax.canvas/canvas#type:FlaxCanvasView", readonly [], false]>;
export const CanvasView: typeof _FlaxCanvasViewConstruct & _FlaxInstanceType<FlaxCanvasView> = _flaxBindInstanceType<FlaxCanvasView, typeof _FlaxCanvasViewConstruct>(_FlaxCanvasViewConstruct, "flax.canvas/canvas#type:FlaxCanvasView", ["package:flutter/src/widgets/framework.dart::LeafRenderObjectWidget","package:flutter/src/widgets/framework.dart::RenderObjectWidget","package:flutter/src/widgets/framework.dart::Widget","package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree","dart:core::Object","package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);
