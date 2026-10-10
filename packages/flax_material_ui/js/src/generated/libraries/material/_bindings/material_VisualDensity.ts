// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindInstanceType as _flaxHostBindInstanceType, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineEnum as _flaxHostDefineEnum, invokeEnum as _flaxHostInvokeEnum, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"horizontal","required":false,"positional":false},{"name":"vertical","required":false,"positional":false}] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/material/_bindings/material.__module";
export interface VisualDensity extends Readonly<{ "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __VisualDensity: unique symbol;
readonly horizontal: number;
readonly vertical: number;
copyWith(options?: {horizontal?: number | null | undefined; vertical?: number | null | undefined}): VisualDensity;
}
defineObject("flax.material/material#type:VisualDensity", ["horizontal","vertical"], [], _flaxBindingMethods("flax.material/material#type:VisualDensity", "object", {"copyWith":_flaxMemberParameters0}), []);
function _VisualDensityFactory(options: { horizontal?: number | undefined; vertical?: number | undefined } = {}): VisualDensity {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:VisualDensity", "", [{"name":"horizontal","required":false,"positional":false},{"name":"vertical","required":false,"positional":false}], [], options) as VisualDensity;
}
namespace _VisualDensityFactory { export declare const standard: VisualDensity; }
Object.defineProperty(_VisualDensityFactory, "standard", { get: () => invokeTopLevel("flax.material/material#read:VisualDensity.standard", []) });
namespace _VisualDensityFactory { export declare const comfortable: VisualDensity; }
Object.defineProperty(_VisualDensityFactory, "comfortable", { get: () => invokeTopLevel("flax.material/material#read:VisualDensity.comfortable", []) });
namespace _VisualDensityFactory { export declare const compact: VisualDensity; }
Object.defineProperty(_VisualDensityFactory, "compact", { get: () => invokeTopLevel("flax.material/material#read:VisualDensity.compact", []) });
export const VisualDensity: typeof _VisualDensityFactory & _FlaxInstanceType<VisualDensity> = _flaxBindInstanceType<VisualDensity, typeof _VisualDensityFactory>(_VisualDensityFactory, "flax.material/material#type:VisualDensity", ["dart:core::Object","package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);
