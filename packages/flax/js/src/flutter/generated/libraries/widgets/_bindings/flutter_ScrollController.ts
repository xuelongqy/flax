// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindInstanceType as _flaxHostBindInstanceType, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"listener","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"value","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"offset","required":true,"positional":true},{"name":"curve","required":true,"positional":false},{"name":"duration","required":true,"positional":false}] as const;
const _flaxMemberParameters3 = [] as const;
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_Curve';
import '@flax/flutter/widgets/_bindings/flutter_Curve';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
export interface ScrollController extends upstream0.Listenable, Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> { readonly __ScrollController: unique symbol;
readonly hasClients: boolean;
readonly offset: number;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
jumpTo(value: number): void;
animateTo(offset: number, options: {curve: Readonly<{ "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [] }>; duration: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }>}): Promise<void>;
dispose(): void;
}
defineObject("flax.core/flutter#type:ScrollController", ["hasClients","offset"], [], _flaxBindingMethods("flax.core/flutter#type:ScrollController", "object", {"addListener":_flaxMemberParameters0,"removeListener":_flaxMemberParameters0,"jumpTo":_flaxMemberParameters1,"animateTo":_flaxMemberParameters2,"dispose":_flaxMemberParameters3}), ["removeListener"]);
function _ScrollControllerFactory(options: { initialScrollOffset?: number | undefined; keepScrollOffset?: boolean | undefined; debugLabel?: string | null | undefined } = {}): ScrollController {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:ScrollController", "", [{"name":"initialScrollOffset","required":false,"positional":false},{"name":"keepScrollOffset","required":false,"positional":false},{"name":"debugLabel","required":false,"positional":false}], [], options) as ScrollController;
}
export const ScrollController: typeof _ScrollControllerFactory & _FlaxInstanceType<ScrollController> = _flaxBindInstanceType<ScrollController, typeof _ScrollControllerFactory>(_ScrollControllerFactory, "flax.core/flutter#type:ScrollController", ["package:flutter/src/foundation/change_notifier.dart::ChangeNotifier","dart:core::Object","flax.core/flutter#type:Listenable"]);
