// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindInstanceType as _flaxHostBindInstanceType, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineEnum as _flaxHostDefineEnum, invokeEnum as _flaxHostInvokeEnum, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface FontWeight extends Readonly<{ "__flaxBound:dart:ui::FontWeight": readonly [] }> { readonly __FontWeight: unique symbol;
readonly value: number;
}
defineObject("flax.core/flutter#type:FontWeight", ["value"], [], _flaxBindingMethods("flax.core/flutter#type:FontWeight", "object", {}), []);
function _FontWeightFactory(value: number): FontWeight {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:FontWeight", "", [{"name":"value","required":true,"positional":true}], [value], {}) as FontWeight;
}
namespace _FontWeightFactory { export declare const w100: FontWeight; }
Object.defineProperty(_FontWeightFactory, "w100", { get: () => invokeTopLevel("flax.core/flutter#read:FontWeight.w100", []) });
namespace _FontWeightFactory { export declare const w200: FontWeight; }
Object.defineProperty(_FontWeightFactory, "w200", { get: () => invokeTopLevel("flax.core/flutter#read:FontWeight.w200", []) });
namespace _FontWeightFactory { export declare const w300: FontWeight; }
Object.defineProperty(_FontWeightFactory, "w300", { get: () => invokeTopLevel("flax.core/flutter#read:FontWeight.w300", []) });
namespace _FontWeightFactory { export declare const w400: FontWeight; }
Object.defineProperty(_FontWeightFactory, "w400", { get: () => invokeTopLevel("flax.core/flutter#read:FontWeight.w400", []) });
namespace _FontWeightFactory { export declare const w500: FontWeight; }
Object.defineProperty(_FontWeightFactory, "w500", { get: () => invokeTopLevel("flax.core/flutter#read:FontWeight.w500", []) });
namespace _FontWeightFactory { export declare const w600: FontWeight; }
Object.defineProperty(_FontWeightFactory, "w600", { get: () => invokeTopLevel("flax.core/flutter#read:FontWeight.w600", []) });
namespace _FontWeightFactory { export declare const w700: FontWeight; }
Object.defineProperty(_FontWeightFactory, "w700", { get: () => invokeTopLevel("flax.core/flutter#read:FontWeight.w700", []) });
namespace _FontWeightFactory { export declare const w800: FontWeight; }
Object.defineProperty(_FontWeightFactory, "w800", { get: () => invokeTopLevel("flax.core/flutter#read:FontWeight.w800", []) });
namespace _FontWeightFactory { export declare const w900: FontWeight; }
Object.defineProperty(_FontWeightFactory, "w900", { get: () => invokeTopLevel("flax.core/flutter#read:FontWeight.w900", []) });
namespace _FontWeightFactory { export declare const normal: FontWeight; }
Object.defineProperty(_FontWeightFactory, "normal", { get: () => invokeTopLevel("flax.core/flutter#read:FontWeight.normal", []) });
namespace _FontWeightFactory { export declare const bold: FontWeight; }
Object.defineProperty(_FontWeightFactory, "bold", { get: () => invokeTopLevel("flax.core/flutter#read:FontWeight.bold", []) });
export const FontWeight: typeof _FontWeightFactory & _FlaxInstanceType<FontWeight> = _flaxBindInstanceType<FontWeight, typeof _FontWeightFactory>(_FontWeightFactory, "flax.core/flutter#type:FontWeight", ["dart:core::Object"]);
