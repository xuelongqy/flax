// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Focus extends WidgetDescription { readonly type: "flax.core/flutter#type:Focus";  }
export function _FocusFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; child: Bindable<Widget>; focusNode?: Bindable<Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [] }> | null> | undefined; parentNode?: Bindable<Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [] }> | null> | undefined; autofocus?: Bindable<boolean> | undefined; onFocusChange?: Bindable<((value: boolean) => void) | null> | undefined; canRequestFocus?: Bindable<boolean | null> | undefined; skipTraversal?: Bindable<boolean | null> | undefined; descendantsAreFocusable?: Bindable<boolean | null> | undefined; descendantsAreTraversable?: Bindable<boolean | null> | undefined; includeSemantics?: Bindable<boolean> | undefined; debugLabel?: Bindable<string | null> | undefined }): Focus {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:Focus", "", [{"name":"key","required":false,"positional":false},{"name":"child","required":true,"positional":false},{"name":"focusNode","required":false,"positional":false},{"name":"parentNode","required":false,"positional":false},{"name":"autofocus","required":false,"positional":false},{"name":"onFocusChange","required":false,"positional":false},{"name":"canRequestFocus","required":false,"positional":false},{"name":"skipTraversal","required":false,"positional":false},{"name":"descendantsAreFocusable","required":false,"positional":false},{"name":"descendantsAreTraversable","required":false,"positional":false},{"name":"includeSemantics","required":false,"positional":false},{"name":"debugLabel","required":false,"positional":false}], [], options) as Focus;
}
export namespace _FocusFactory {
export function withExternalFocusNode(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; child: Bindable<Widget>; focusNode: Bindable<Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [] }>>; parentNode?: Bindable<Readonly<{ "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [] }> | null> | undefined; autofocus?: Bindable<boolean> | undefined; onFocusChange?: Bindable<((value: boolean) => void) | null> | undefined; includeSemantics?: Bindable<boolean> | undefined }): Focus {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:Focus", "withExternalFocusNode", [{"name":"key","required":false,"positional":false},{"name":"child","required":true,"positional":false},{"name":"focusNode","required":true,"positional":false},{"name":"parentNode","required":false,"positional":false},{"name":"autofocus","required":false,"positional":false},{"name":"onFocusChange","required":false,"positional":false},{"name":"includeSemantics","required":false,"positional":false}], [], options) as Focus;
}
}
export namespace _FocusFactory { export function of(context: upstream2.BuildContext, options: { createDependency?: boolean | undefined; scopeOk?: boolean | undefined } = {}): upstream1.FocusNode {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["createDependency","scopeOk"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Focus.of", [contextHandle(context, "flax.core/flutter#type:BuildContext"), options.createDependency, options.scopeOk]);
return _flaxResult as upstream1.FocusNode;
} }
export namespace _FocusFactory { export function maybeOf(context: upstream2.BuildContext, options: { createDependency?: boolean | undefined; scopeOk?: boolean | undefined } = {}): upstream1.FocusNode | null {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["createDependency","scopeOk"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Focus.maybeOf", [contextHandle(context, "flax.core/flutter#type:BuildContext"), options.createDependency, options.scopeOk]);
return _flaxResult as upstream1.FocusNode | null;
} }
export namespace _FocusFactory { export function isAt(context: upstream2.BuildContext): boolean {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Focus.isAt", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as boolean;
} }
export const Focus: typeof _FocusFactory & _FlaxInstanceType<Focus> & _FlaxDartType<Focus, readonly ["class", "flax.core/flutter#type:Focus", readonly [], false]> = _flaxBindInstanceType<Focus, typeof _FocusFactory>(_FocusFactory, "flax.core/flutter#type:Focus", ["flax.core/components#type:StatefulWidget","package:flutter/src/widgets/framework.dart::Widget","package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree","dart:core::Object","package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]) as typeof _FocusFactory & _FlaxInstanceType<Focus> & _FlaxDartType<Focus, readonly ["class", "flax.core/flutter#type:Focus", readonly [], false]>;
