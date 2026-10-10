// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindInstanceType as _flaxHostBindInstanceType, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"color","required":false,"positional":false},{"name":"strokeAlign","required":false,"positional":false},{"name":"style","required":false,"positional":false},{"name":"width","required":false,"positional":false}] as const;
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BorderStyle';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface BorderSide extends Readonly<{ "__flaxBound:package:flutter/src/painting/borders.dart::BorderSide": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __BorderSide: unique symbol;
readonly color: upstream0.Color;
readonly width: number;
readonly style: upstream1.BorderStyle;
readonly strokeAlign: number;
copyWith(options?: {color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | null | undefined; strokeAlign?: number | null | undefined; style?: upstream1.BorderStyle | null | undefined; width?: number | null | undefined}): BorderSide;
}
defineObject("flax.core/flutter#type:BorderSide", ["color","width","style","strokeAlign"], [], _flaxBindingMethods("flax.core/flutter#type:BorderSide", "object", {"copyWith":_flaxMemberParameters0}), []);
function _BorderSideFactory(options: { color?: Readonly<{ "__flaxBound:dart:ui::Color": readonly [] }> | undefined; width?: number | undefined; style?: upstream1.BorderStyle | undefined; strokeAlign?: number | undefined } = {}): BorderSide {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BorderSide", "", [{"name":"color","required":false,"positional":false},{"name":"width","required":false,"positional":false},{"name":"style","required":false,"positional":false},{"name":"strokeAlign","required":false,"positional":false}], [], options) as BorderSide;
}
namespace _BorderSideFactory { export declare const none: BorderSide; }
Object.defineProperty(_BorderSideFactory, "none", { get: () => invokeTopLevel("flax.core/flutter#read:BorderSide.none", []) });
namespace _BorderSideFactory { export declare const strokeAlignInside: number; }
Object.defineProperty(_BorderSideFactory, "strokeAlignInside", { get: () => invokeTopLevel("flax.core/flutter#read:BorderSide.strokeAlignInside", []) });
namespace _BorderSideFactory { export declare const strokeAlignCenter: number; }
Object.defineProperty(_BorderSideFactory, "strokeAlignCenter", { get: () => invokeTopLevel("flax.core/flutter#read:BorderSide.strokeAlignCenter", []) });
namespace _BorderSideFactory { export declare const strokeAlignOutside: number; }
Object.defineProperty(_BorderSideFactory, "strokeAlignOutside", { get: () => invokeTopLevel("flax.core/flutter#read:BorderSide.strokeAlignOutside", []) });
export const BorderSide: typeof _BorderSideFactory & _FlaxInstanceType<BorderSide> = _flaxBindInstanceType<BorderSide, typeof _BorderSideFactory>(_BorderSideFactory, "flax.core/flutter#type:BorderSide", ["dart:core::Object","package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);
