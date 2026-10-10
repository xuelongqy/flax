// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindInstanceType as _flaxHostBindInstanceType, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineEnum as _flaxHostDefineEnum, invokeEnum as _flaxHostInvokeEnum, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"bottomLeft","required":false,"positional":false},{"name":"bottomRight","required":false,"positional":false},{"name":"topLeft","required":false,"positional":false},{"name":"topRight","required":false,"positional":false}] as const;
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
import '@flax/flutter/widgets/_bindings/flutter_BorderRadiusGeometry';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_Radius';
import '@flax/flutter/widgets/_bindings/flutter_Radius';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface BorderRadius extends upstream0.BorderRadiusGeometry, Readonly<{ "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [] }> { readonly __BorderRadius: unique symbol;
readonly topLeft: upstream1.Radius;
readonly topRight: upstream1.Radius;
readonly bottomLeft: upstream1.Radius;
readonly bottomRight: upstream1.Radius;
copyWith(options?: {bottomLeft?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | null | undefined; bottomRight?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | null | undefined; topLeft?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | null | undefined; topRight?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | null | undefined}): BorderRadius;
}
defineObject("flax.core/flutter#type:BorderRadius", ["topLeft","topRight","bottomLeft","bottomRight"], [], _flaxBindingMethods("flax.core/flutter#type:BorderRadius", "object", {"copyWith":_flaxMemberParameters0}), []);
namespace _BorderRadiusFactory {
export function all(radius: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }>): BorderRadius {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BorderRadius", "all", [{"name":"radius","required":true,"positional":true}], [radius], {}) as BorderRadius;
}
}
namespace _BorderRadiusFactory {
export function circular(radius: number): BorderRadius {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BorderRadius", "circular", [{"name":"radius","required":true,"positional":true}], [radius], {}) as BorderRadius;
}
}
namespace _BorderRadiusFactory {
export function only(options: { topLeft?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; topRight?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; bottomLeft?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined; bottomRight?: Readonly<{ "__flaxBound:dart:ui::Radius": readonly [] }> | undefined } = {}): BorderRadius {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BorderRadius", "only", [{"name":"topLeft","required":false,"positional":false},{"name":"topRight","required":false,"positional":false},{"name":"bottomLeft","required":false,"positional":false},{"name":"bottomRight","required":false,"positional":false}], [], options) as BorderRadius;
}
}
namespace _BorderRadiusFactory { export declare const zero: BorderRadius; }
Object.defineProperty(_BorderRadiusFactory, "zero", { get: () => invokeTopLevel("flax.core/flutter#read:BorderRadius.zero", []) });
export const BorderRadius: typeof _BorderRadiusFactory & _FlaxInstanceType<BorderRadius> = _flaxBindInstanceType<BorderRadius, typeof _BorderRadiusFactory>(_BorderRadiusFactory, "flax.core/flutter#type:BorderRadius", ["flax.core/flutter#type:BorderRadiusGeometry","dart:core::Object"]);
