// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, defineDartTypes as _flaxHostDefineDartTypes, bindInstanceType as _flaxHostBindInstanceType, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineEnum as _flaxHostDefineEnum, invokeEnum as _flaxHostInvokeEnum, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_Size';
import '@flax/flutter/services/_bindings/flutter_Size';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PreferredSizeWidget extends _FlaxDartWidget { readonly __PreferredSizeWidget: unique symbol;

readonly preferredSize: upstream1.Size;
}
defineObject("flax.core/flutter#type:PreferredSizeWidget", ["preferredSize"], [], _flaxBindingMethods("flax.core/flutter#type:PreferredSizeWidget", "object", {}, {}), []);
const _PreferredSizeWidgetProxy = {nativeWidget: true, type: "flax.core/flutter#type:PreferredSizeWidget", parameters: [{"name":"key","required":false,"positional":false}], constructors: {"":[{"name":"key","required":false,"positional":false}]}, methods: {"build":_flaxMemberParameters0}, getters: ["preferredSize"], setters: [], contextMembers: [], superMembers: []} as const;
export interface _PreferredSizeWidgetImplementation extends PreferredSizeWidget {
readonly [_flaxDartTypeValue]: _PreferredSizeWidgetImplementation;

}
export abstract class _PreferredSizeWidgetImplementation extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PreferredSizeWidget>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: PreferredSizeWidget;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/flutter#type:PreferredSizeWidget", readonly [], false];
constructor(options?: {key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined}) { super(_PreferredSizeWidgetProxy, Array.from(arguments)); }
abstract build(context: upstream2.BuildContext): Widget;
abstract get preferredSize(): upstream1.Size;
}
_flaxDefineProxyBase(_PreferredSizeWidgetImplementation.prototype, _PreferredSizeWidgetProxy);
export const PreferredSizeWidget: typeof _PreferredSizeWidgetImplementation & _FlaxInstanceType<PreferredSizeWidget> & _FlaxDartType<PreferredSizeWidget, readonly ["class", "flax.core/flutter#type:PreferredSizeWidget", readonly [], false]> = _flaxBindInstanceType<PreferredSizeWidget, typeof _PreferredSizeWidgetImplementation>(_PreferredSizeWidgetImplementation, "flax.core/flutter#type:PreferredSizeWidget", ["dart:core::Object","package:flutter/src/widgets/framework.dart::Widget","package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree","package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]) as typeof _PreferredSizeWidgetImplementation & _FlaxInstanceType<PreferredSizeWidget> & _FlaxDartType<PreferredSizeWidget, readonly ["class", "flax.core/flutter#type:PreferredSizeWidget", readonly [], false]>;
