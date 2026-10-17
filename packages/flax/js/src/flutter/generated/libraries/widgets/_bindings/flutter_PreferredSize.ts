// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"joiner","required":false,"positional":false}] as const;
const _flaxMemberParameters3 = [{"name":"prefixLineOne","required":false,"positional":false},{"name":"prefixOtherLines","required":false,"positional":false},{"name":"wrapWidth","required":false,"positional":false}] as const;
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_Size';
import '@flax/flutter/services/_bindings/flutter_Size';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PreferredSize extends _FlaxDartWidget, Omit<upstream0.PreferredSizeWidget, 'kind'> { readonly __PreferredSize: unique symbol;

readonly preferredSize: upstream2.Size;
readonly child: Widget;
readonly key: upstream1.Key | null;
build(context: upstream3.BuildContext): Widget;
toStringShort(): string;
toStringShallow(options?: {joiner?: string | undefined}): string;
toStringDeep(options?: {prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
}
defineObject("flax.core/flutter#type:PreferredSize", ["preferredSize","child","key"], [], _flaxBindingMethods("flax.core/flutter#type:PreferredSize", "object", {"build":_flaxMemberParameters0,"toStringShort":_flaxMemberParameters1,"toStringShallow":_flaxMemberParameters2,"toStringDeep":_flaxMemberParameters3}, {}), []);
export function _PreferredSizeFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; preferredSize: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }>; child: Widget }): PreferredSize {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:PreferredSize", "", [{"name":"key","fixed":true,"required":false,"positional":false},{"name":"preferredSize","fixed":true,"required":true,"positional":false},{"name":"child","fixed":true,"required":true,"positional":false}], [], options) as PreferredSize;
}
export const PreferredSize: typeof _PreferredSizeFactory & _FlaxInstanceType<PreferredSize> & _FlaxDartType<PreferredSize, readonly ["class", "flax.core/flutter#type:PreferredSize", readonly [], false]> = _flaxBindInstanceType<PreferredSize, typeof _PreferredSizeFactory>(_PreferredSizeFactory, "flax.core/flutter#type:PreferredSize", ["package:flutter/src/widgets/framework.dart::StatelessWidget","package:flutter/src/widgets/framework.dart::Widget","package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree","dart:core::Object","package:flutter/src/foundation/diagnostics.dart::Diagnosticable","flax.core/flutter#type:PreferredSizeWidget"]) as typeof _PreferredSizeFactory & _FlaxInstanceType<PreferredSize> & _FlaxDartType<PreferredSize, readonly ["class", "flax.core/flutter#type:PreferredSize", readonly [], false]>;
