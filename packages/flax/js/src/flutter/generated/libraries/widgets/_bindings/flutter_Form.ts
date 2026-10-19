// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_AutovalidateMode';
import '@flax/flutter/widgets/_bindings/flutter_AutovalidateMode';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_FormState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_FormState';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Form extends WidgetDescription, Omit<Readonly<{ "__flaxBound:package:flutter/src/widgets/form.dart::Form": readonly [] }>, 'type'>, Omit<Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, 'type'>, Omit<Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, 'type'>, Omit<Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, 'type'>, Omit<Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, 'type'> { readonly type: "flax.core/flutter#type:Form";  }
export function _FormFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; child: Bindable<Widget>; canPop?: Bindable<boolean | null> | undefined; onPopInvoked?: Bindable<((didPop: boolean) => void) | null> | undefined; onPopInvokedWithResult?: Bindable<((didPop: boolean, result: NavigationData | null) => void) | null> | undefined; onWillPop?: Bindable<(() => Promise<boolean>) | null> | undefined; onChanged?: Bindable<(() => void) | null> | undefined; autovalidateMode?: Bindable<upstream1.AutovalidateMode | null> | undefined }): Form {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:Form", "", [{"name":"key"},{"name":"child","required":true},{"name":"canPop"},{"name":"onPopInvoked"},{"name":"onPopInvokedWithResult"},{"name":"onWillPop"},{"name":"onChanged"},{"name":"autovalidateMode"}], [], options) as Form;
}
export namespace _FormFactory { export function maybeOf(context: upstream3.BuildContext): upstream2.FormState | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Form.maybeOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as upstream2.FormState | null;
} }
export namespace _FormFactory { export function of(context: upstream3.BuildContext): upstream2.FormState {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Form.of", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as upstream2.FormState;
} }
export const Form: typeof _FormFactory & _FlaxInstanceType<Form> & _FlaxDartType<Form, readonly ["class", "flax.core/flutter#type:Form", readonly [], false]> = _flaxBindInstanceType<Form, typeof _FormFactory>(_FormFactory, "flax.core/flutter#type:Form", ["flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _FormFactory & _FlaxInstanceType<Form> & _FlaxDartType<Form, readonly ["class", "flax.core/flutter#type:Form", readonly [], false]>;
