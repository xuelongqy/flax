// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Visibility extends WidgetDescription { readonly type: "flax.core/flutter#type:Visibility";  }
export function _VisibilityFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; child: Bindable<Widget>; replacement?: Bindable<Widget> | undefined; visible?: Bindable<boolean> | undefined; maintainState?: Bindable<boolean> | undefined; maintainAnimation?: Bindable<boolean> | undefined; maintainSize?: Bindable<boolean> | undefined; maintainSemantics?: Bindable<boolean> | undefined; maintainInteractivity?: Bindable<boolean> | undefined; maintainFocusability?: Bindable<boolean> | undefined }): Visibility {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:Visibility", "", [{"name":"key","required":false,"positional":false},{"name":"child","required":true,"positional":false},{"name":"replacement","required":false,"positional":false},{"name":"visible","required":false,"positional":false},{"name":"maintainState","required":false,"positional":false},{"name":"maintainAnimation","required":false,"positional":false},{"name":"maintainSize","required":false,"positional":false},{"name":"maintainSemantics","required":false,"positional":false},{"name":"maintainInteractivity","required":false,"positional":false},{"name":"maintainFocusability","required":false,"positional":false}], [], options) as Visibility;
}
export namespace _VisibilityFactory {
export function maintain(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; child: Bindable<Widget>; visible?: Bindable<boolean> | undefined }): Visibility {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:Visibility", "maintain", [{"name":"key","required":false,"positional":false},{"name":"child","required":true,"positional":false},{"name":"visible","required":false,"positional":false}], [], options) as Visibility;
}
}
export namespace _VisibilityFactory { export function of(context: upstream1.BuildContext): boolean {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Visibility.of", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as boolean;
} }
export const Visibility: typeof _VisibilityFactory & _FlaxInstanceType<Visibility> & _FlaxDartType<Visibility, readonly ["class", "flax.core/flutter#type:Visibility", readonly [], false]> = _flaxBindInstanceType<Visibility, typeof _VisibilityFactory>(_VisibilityFactory, "flax.core/flutter#type:Visibility", ["package:flutter/src/widgets/framework.dart::StatelessWidget","package:flutter/src/widgets/framework.dart::Widget","package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree","dart:core::Object","package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]) as typeof _VisibilityFactory & _FlaxInstanceType<Visibility> & _FlaxDartType<Visibility, readonly ["class", "flax.core/flutter#type:Visibility", readonly [], false]>;
