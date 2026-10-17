// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_Size';
import '@flax/flutter/services/_bindings/flutter_Size';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/cupertino/_bindings/cupertino.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ObstructingPreferredSizeWidget extends _FlaxDartWidget, Omit<upstream0.PreferredSizeWidget, typeof _flaxDartTypeValue | "preferredSize" | "shouldFullyObstruct"> { readonly __ObstructingPreferredSizeWidget: unique symbol;

readonly preferredSize: upstream2.Size;
shouldFullyObstruct(context: upstream3.BuildContext): boolean;
}
defineObject("flax.cupertino/cupertino#type:ObstructingPreferredSizeWidget", ["preferredSize"], [], _flaxBindingMethods("flax.cupertino/cupertino#type:ObstructingPreferredSizeWidget", "object", {"shouldFullyObstruct":_flaxMemberParameters0}, {}), []);
const _ObstructingPreferredSizeWidgetProxy = {nativeWidget: true, type: "flax.cupertino/cupertino#type:ObstructingPreferredSizeWidget", parameters: [{"name":"key","required":false,"positional":false}], constructors: {"":[{"name":"key","required":false,"positional":false}]}, methods: {"shouldFullyObstruct":_flaxMemberParameters0,"build":_flaxMemberParameters0}, getters: ["preferredSize"], setters: [], contextMembers: [], superMembers: []} as const;
export interface _ObstructingPreferredSizeWidgetImplementation extends ObstructingPreferredSizeWidget {
readonly [_flaxDartTypeValue]: _ObstructingPreferredSizeWidgetImplementation;

}
export abstract class _ObstructingPreferredSizeWidgetImplementation extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ObstructingPreferredSizeWidget>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: ObstructingPreferredSizeWidget;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.cupertino/cupertino#type:ObstructingPreferredSizeWidget", readonly [], false];
constructor(options?: {key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined}) { super(_ObstructingPreferredSizeWidgetProxy, Array.from(arguments)); }
abstract shouldFullyObstruct(context: upstream3.BuildContext): boolean;
abstract build(context: upstream3.BuildContext): Widget;
abstract get preferredSize(): upstream2.Size;
}
_flaxDefineProxyBase(_ObstructingPreferredSizeWidgetImplementation.prototype, _ObstructingPreferredSizeWidgetProxy);
export const ObstructingPreferredSizeWidget: typeof _ObstructingPreferredSizeWidgetImplementation & _FlaxInstanceType<ObstructingPreferredSizeWidget> & _FlaxDartType<ObstructingPreferredSizeWidget, readonly ["class", "flax.cupertino/cupertino#type:ObstructingPreferredSizeWidget", readonly [], false]> = _flaxBindInstanceType<ObstructingPreferredSizeWidget, typeof _ObstructingPreferredSizeWidgetImplementation>(_ObstructingPreferredSizeWidgetImplementation, "flax.cupertino/cupertino#type:ObstructingPreferredSizeWidget", ["dart:core::Object","flax.core/flutter#type:PreferredSizeWidget","package:flutter/src/widgets/framework.dart::Widget","package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree","package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]) as typeof _ObstructingPreferredSizeWidgetImplementation & _FlaxInstanceType<ObstructingPreferredSizeWidget> & _FlaxDartType<ObstructingPreferredSizeWidget, readonly ["class", "flax.cupertino/cupertino#type:ObstructingPreferredSizeWidget", readonly [], false]>;
