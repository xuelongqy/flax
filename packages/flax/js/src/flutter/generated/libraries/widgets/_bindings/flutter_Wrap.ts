// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_Axis';
import '@flax/flutter/widgets/_bindings/flutter_Axis';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_WrapAlignment';
import '@flax/flutter/widgets/_bindings/flutter_WrapAlignment';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_WrapCrossAlignment';
import '@flax/flutter/widgets/_bindings/flutter_WrapCrossAlignment';
import type * as upstream4 from '@flax/flutter/services/_bindings/flutter_TextDirection';
import '@flax/flutter/services/_bindings/flutter_TextDirection';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_VerticalDirection';
import '@flax/flutter/widgets/_bindings/flutter_VerticalDirection';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_Clip';
import '@flax/flutter/widgets/_bindings/flutter_Clip';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Wrap extends WidgetDescription { readonly type: "flax.core/flutter#type:Wrap";  }
export function _WrapFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; direction?: Bindable<upstream1.Axis> | undefined; alignment?: Bindable<upstream2.WrapAlignment> | undefined; spacing?: Bindable<number> | undefined; runAlignment?: Bindable<upstream2.WrapAlignment> | undefined; runSpacing?: Bindable<number> | undefined; crossAxisAlignment?: Bindable<upstream3.WrapCrossAlignment> | undefined; textDirection?: Bindable<upstream4.TextDirection | null> | undefined; verticalDirection?: Bindable<upstream5.VerticalDirection> | undefined; clipBehavior?: Bindable<upstream6.Clip> | undefined; children?: Bindable<DartListInput<Widget, Widget>> | undefined } = {}): Wrap {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:Wrap", "", [{"name":"key","required":false,"positional":false},{"name":"direction","required":false,"positional":false},{"name":"alignment","required":false,"positional":false},{"name":"spacing","required":false,"positional":false},{"name":"runAlignment","required":false,"positional":false},{"name":"runSpacing","required":false,"positional":false},{"name":"crossAxisAlignment","required":false,"positional":false},{"name":"textDirection","required":false,"positional":false},{"name":"verticalDirection","required":false,"positional":false},{"name":"clipBehavior","required":false,"positional":false},{"name":"children","required":false,"positional":false}], [], options) as Wrap;
}
export const Wrap: typeof _WrapFactory & _FlaxInstanceType<Wrap> & _FlaxDartType<Wrap, readonly ["class", "flax.core/flutter#type:Wrap", readonly [], false]> = _flaxBindInstanceType<Wrap, typeof _WrapFactory>(_WrapFactory, "flax.core/flutter#type:Wrap", ["package:flutter/src/widgets/framework.dart::MultiChildRenderObjectWidget","package:flutter/src/widgets/framework.dart::RenderObjectWidget","package:flutter/src/widgets/framework.dart::Widget","package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree","dart:core::Object","package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]) as typeof _WrapFactory & _FlaxInstanceType<Wrap> & _FlaxDartType<Wrap, readonly ["class", "flax.core/flutter#type:Wrap", readonly [], false]>;
