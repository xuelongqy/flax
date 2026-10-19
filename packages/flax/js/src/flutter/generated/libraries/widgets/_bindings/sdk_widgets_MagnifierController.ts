// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationController';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationController';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayEntry';
import '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayEntry';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
const _flaxMemberParameters0 = [{"name":"below"},{"name":"builder","required":true},{"name":"context","required":true,"context":"flax.core/flutter#type:BuildContext"},{"name":"debugRequiredFor"}] as const;
const _flaxMemberParameters1 = [{"name":"removeFromOverlay"}] as const;
const _flaxMemberParameters2 = [{"name":"animationController"}] as const;
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MagnifierController extends Readonly<{ "__flaxBound:package:flutter/src/widgets/magnifier.dart::MagnifierController": readonly [] }> { readonly __MagnifierController: unique symbol;
readonly [_flaxDartTypeValue]: MagnifierController;

}
defineObject("flax.core/sdk_widgets#type:MagnifierController", ["animationController","overlayEntry","shown"], ["animationController"], _flaxBindingMethods("flax.core/sdk_widgets#type:MagnifierController", "object", {"show":_flaxMemberParameters0,"hide":_flaxMemberParameters1}, {}), []);
const _MagnifierControllerProxy = {type: "flax.core/sdk_widgets#type:MagnifierController", parameters: _flaxMemberParameters2, constructors: {"": _flaxMemberParameters2}, methods: {"show":_flaxMemberParameters0,"hide":_flaxMemberParameters1}, getters: ["animationController","overlayEntry","shown"], setters: ["animationController"], contextMembers: [], superMembers: ["get:animationController","get:overlayEntry","get:shown","set:animationController","show","hide"]} as const;
export interface MagnifierController {
readonly [_flaxDartTypeValue]: MagnifierController;

show(options: {context: upstream3.BuildContext; builder: ((context: upstream3.BuildContext) => Widget); debugRequiredFor?: Widget | null | undefined; below?: Readonly<{ "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayEntry": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined}): Promise<void>;
hide(options?: {removeFromOverlay?: boolean | undefined}): Promise<void>;
get animationController(): upstream0.AnimationController | null;
get overlayEntry(): upstream1.OverlayEntry | null;
get shown(): boolean;
set animationController(value: Readonly<{ "__flaxBound:package:flutter/src/animation/animation_controller.dart::AnimationController": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationEagerListenerMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalListenersMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalStatusListenersMixin": readonly [] }> | null);
}
export abstract class MagnifierController extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MagnifierController>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: MagnifierController;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:MagnifierController", readonly [], false];
constructor(options?: {animationController?: Readonly<{ "__flaxBound:package:flutter/src/animation/animation_controller.dart::AnimationController": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationEagerListenerMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalListenersMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalStatusListenersMixin": readonly [] }> | null | undefined}) { super(_MagnifierControllerProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(MagnifierController.prototype, _MagnifierControllerProxy);
export namespace MagnifierController { export function implement(args: [options?: {animationController?: Readonly<{ "__flaxBound:package:flutter/src/animation/animation_controller.dart::AnimationController": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/animation.dart::Animation": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [number] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationEagerListenerMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalListenersMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/animation/listener_helpers.dart::AnimationLocalStatusListenersMixin": readonly [] }> | null | undefined}], implementation: {}): MagnifierController {
return constructProxy(_MagnifierControllerProxy, args, implementation) as MagnifierController; } }
export namespace MagnifierController { export function shiftWithinBounds(options: { bounds: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>; rect: Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }> }): upstream2.Rect {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["bounds","rect"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MagnifierController.shiftWithinBounds", [options.bounds, options.rect]);
return _flaxResult as upstream2.Rect;
} }
_flaxBindInstanceType<MagnifierController, typeof MagnifierController>(MagnifierController, "flax.core/sdk_widgets#type:MagnifierController", ["dart:core::Object"]);
