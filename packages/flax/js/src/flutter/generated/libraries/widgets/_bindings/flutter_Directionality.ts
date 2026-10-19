// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Directionality extends WidgetDescription, Omit<Readonly<{ "__flaxBound:package:flutter/src/widgets/basic.dart::Directionality": readonly [] }>, 'type'>, Omit<Readonly<{ "__flaxBound:package:flutter/src/widgets/basic.dart::_UbiquitousInheritedWidget": readonly [] }>, 'type'>, Omit<Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::InheritedWidget": readonly [] }>, 'type'>, Omit<Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget": readonly [] }>, 'type'>, Omit<Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, 'type'>, Omit<Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, 'type'>, Omit<Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, 'type'> { readonly type: "flax.core/flutter#type:Directionality";  }
export function _DirectionalityFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; textDirection: Bindable<upstream1.TextDirection>; child: Bindable<Widget> }): Directionality {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:Directionality", "", [{"name":"key"},{"name":"textDirection","required":true},{"name":"child","required":true}], [], options) as Directionality;
}
export namespace _DirectionalityFactory { export function of(context: upstream2.BuildContext): upstream1.TextDirection {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Directionality.of", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as upstream1.TextDirection;
} }
export namespace _DirectionalityFactory { export function maybeOf(context: upstream2.BuildContext): upstream1.TextDirection | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Directionality.maybeOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as upstream1.TextDirection | null;
} }
export const Directionality: typeof _DirectionalityFactory & _FlaxInstanceType<Directionality> & _FlaxDartType<Directionality, readonly ["class", "flax.core/flutter#type:Directionality", readonly [], false]> = _flaxBindInstanceType<Directionality, typeof _DirectionalityFactory>(_DirectionalityFactory, "flax.core/flutter#type:Directionality", ["package:flutter/src/widgets/basic.dart::_UbiquitousInheritedWidget","flax.core/sdk_widgets#type:InheritedWidget","flax.core/sdk_widgets#type:ProxyWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _DirectionalityFactory & _FlaxInstanceType<Directionality> & _FlaxDartType<Directionality, readonly ["class", "flax.core/flutter#type:Directionality", readonly [], false]>;
