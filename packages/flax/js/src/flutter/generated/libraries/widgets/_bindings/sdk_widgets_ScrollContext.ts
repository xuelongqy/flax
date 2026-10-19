// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream1 from '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import type * as upstream2 from '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsAction';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsAction';
import { _flaxMemberParameters33, _flaxMemberParameters284, _flaxMemberParameters358, _flaxMemberParameters2 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ScrollContext extends Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_context.dart::ScrollContext": readonly [] }> { readonly __ScrollContext: unique symbol;
readonly [_flaxDartTypeValue]: ScrollContext;

readonly notificationContext: upstream0.BuildContext | null;
readonly storageContext: upstream0.BuildContext;
readonly vsync: upstream1.TickerProvider;
readonly axisDirection: upstream2.AxisDirection;
readonly devicePixelRatio: number;
setIgnorePointer(value: boolean): void;
setCanDrag(value: boolean): void;
setSemanticsActions(actions: DartSetInput<upstream3.SemanticsAction, Readonly<{ "__flaxBound:dart:ui::SemanticsAction": readonly [] }>>): void;
saveOffset(offset: number): void;
}
defineObject("flax.core/sdk_widgets#type:ScrollContext", ["notificationContext","storageContext","vsync","axisDirection","devicePixelRatio"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:ScrollContext", "object", {"setIgnorePointer":_flaxMemberParameters33,"setCanDrag":_flaxMemberParameters33,"setSemanticsActions":_flaxMemberParameters284,"saveOffset":_flaxMemberParameters358}, {}), []);
const _ScrollContextProxy = {type: "flax.core/sdk_widgets#type:ScrollContext", parameters: _flaxMemberParameters2, constructors: {}, methods: {"setIgnorePointer":_flaxMemberParameters33,"setCanDrag":_flaxMemberParameters33,"setSemanticsActions":_flaxMemberParameters284,"saveOffset":_flaxMemberParameters358}, getters: ["notificationContext","storageContext","vsync","axisDirection","devicePixelRatio"], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _ScrollContextFactory { export function implement(args: [], implementation: {setIgnorePointer: ((value: boolean) => void); setCanDrag: ((value: boolean) => void); setSemanticsActions: ((actions: DartSet<upstream3.SemanticsAction>) => void); saveOffset: ((offset: number) => void); get notificationContext(): upstream0.BuildContext | null; get storageContext(): upstream0.BuildContext; get vsync(): Readonly<{ "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [] }>; get axisDirection(): upstream2.AxisDirection; get devicePixelRatio(): number}): ScrollContext {
return constructProxy(_ScrollContextProxy, args, implementation) as ScrollContext; } }
export const ScrollContext: typeof _ScrollContextFactory & _FlaxInstanceType<ScrollContext> & _FlaxDartType<ScrollContext, readonly ["class", "flax.core/sdk_widgets#type:ScrollContext", readonly [], false]> = _flaxBindInstanceType<ScrollContext, typeof _ScrollContextFactory>(_ScrollContextFactory, "flax.core/sdk_widgets#type:ScrollContext", ["dart:core::Object"]) as typeof _ScrollContextFactory & _FlaxInstanceType<ScrollContext> & _FlaxDartType<ScrollContext, readonly ["class", "flax.core/sdk_widgets#type:ScrollContext", readonly [], false]>;
