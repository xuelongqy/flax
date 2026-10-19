// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_StackParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_StackParentData';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/sdk_rendering_RelativeRect';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RelativeRect';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Positioned extends WidgetDescription, Omit<Readonly<{ "__flaxBound:package:flutter/src/widgets/basic.dart::Positioned": readonly [] }>, 'type'>, Omit<Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::ParentDataWidget": readonly [upstream0.StackParentData] }>, 'type'>, Omit<Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget": readonly [] }>, 'type'>, Omit<Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, 'type'>, Omit<Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, 'type'>, Omit<Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, 'type'> { readonly type: "flax.core/flutter#type:Positioned";  }
export function _PositionedFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; left?: Bindable<number | null> | undefined; top?: Bindable<number | null> | undefined; right?: Bindable<number | null> | undefined; bottom?: Bindable<number | null> | undefined; width?: Bindable<number | null> | undefined; height?: Bindable<number | null> | undefined; child: Bindable<Widget> }): Positioned {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:Positioned", "", [{"name":"key"},{"name":"left"},{"name":"top"},{"name":"right"},{"name":"bottom"},{"name":"width"},{"name":"height"},{"name":"child","required":true}], [], options) as Positioned;
}
export namespace _PositionedFactory {
export function fromRect(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; rect: Bindable<Readonly<{ "__flaxBound:dart:ui::Rect": readonly [] }>>; child: Bindable<Widget> }): Positioned {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:Positioned", "fromRect", [{"name":"key"},{"name":"rect","required":true},{"name":"child","required":true}], [], options) as Positioned;
}
}
export namespace _PositionedFactory {
export function fromRelativeRect(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; rect: Bindable<Readonly<{ "__flaxBound:package:flutter/src/rendering/stack.dart::RelativeRect": readonly [] }>>; child: Bindable<Widget> }): Positioned {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:Positioned", "fromRelativeRect", [{"name":"key"},{"name":"rect","required":true},{"name":"child","required":true}], [], options) as Positioned;
}
}
export namespace _PositionedFactory {
export function fill(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; left?: Bindable<number | null> | undefined; top?: Bindable<number | null> | undefined; right?: Bindable<number | null> | undefined; bottom?: Bindable<number | null> | undefined; child: Bindable<Widget> }): Positioned {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:Positioned", "fill", [{"name":"key"},{"name":"left"},{"name":"top"},{"name":"right"},{"name":"bottom"},{"name":"child","required":true}], [], options) as Positioned;
}
}
export namespace _PositionedFactory {
export function directional(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; textDirection: Bindable<upstream4.TextDirection>; start?: Bindable<number | null> | undefined; top?: Bindable<number | null> | undefined; end?: Bindable<number | null> | undefined; bottom?: Bindable<number | null> | undefined; width?: Bindable<number | null> | undefined; height?: Bindable<number | null> | undefined; child: Bindable<Widget> }): Positioned {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:Positioned", "directional", [{"name":"key"},{"name":"textDirection","required":true},{"name":"start"},{"name":"top"},{"name":"end"},{"name":"bottom"},{"name":"width"},{"name":"height"},{"name":"child","required":true}], [], options) as Positioned;
}
}
export const Positioned: typeof _PositionedFactory & _FlaxInstanceType<Positioned> & _FlaxDartType<Positioned, readonly ["class", "flax.core/flutter#type:Positioned", readonly [], false]> = _flaxBindInstanceType<Positioned, typeof _PositionedFactory>(_PositionedFactory, "flax.core/flutter#type:Positioned", ["flax.core/sdk_widgets#type:ParentDataWidget","flax.core/sdk_widgets#type:ProxyWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _PositionedFactory & _FlaxInstanceType<Positioned> & _FlaxDartType<Positioned, readonly ["class", "flax.core/flutter#type:Positioned", readonly [], false]>;
