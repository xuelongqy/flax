// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_PlatformViewController';
import '@flax/flutter/services/_bindings/sdk_services_PlatformViewController';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream2 from '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream4 from '@flax/flutter/services/_bindings/sdk_services_AndroidMotionEvent';
import '@flax/flutter/services/_bindings/sdk_services_AndroidMotionEvent';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
const _flaxMemberParameters0 = [{"name":"size","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [{"name":"off","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"event","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"listener","required":true,"positional":true}] as const;
const _flaxMemberParameters4 = [{"name":"layoutDirection","required":true,"positional":true}] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface AndroidViewController extends Omit<upstream0.PlatformViewController, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/services/platform_views.dart::AndroidViewController": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/platform_views.dart::PlatformViewController": readonly [] }> { readonly __AndroidViewController: unique symbol;
readonly [_flaxDartTypeValue]: AndroidViewController;

readonly viewId: number;
readonly awaitingCreation: boolean;
readonly textureId: number | null;
readonly requiresViewComposition: boolean;
get pointTransformer(): ((position: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>) => upstream1.Offset);
readonly isCreated: boolean;
dispatchPointerEvent(event: Readonly<{ "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): Promise<void>;
create(options?: {position?: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined; size?: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }> | null | undefined}): Promise<void>;
dispose(): Promise<void>;
clearFocus(): Promise<void>;
setSize(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): Promise<upstream3.Size>;
setOffset(off: Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>): Promise<void>;
sendMotionEvent(event: Readonly<{ "__flaxBound:package:flutter/src/services/platform_views.dart::AndroidMotionEvent": readonly [] }>): Promise<void>;
addOnPlatformViewCreatedListener(listener: ((id: number) => void)): void;
removeOnPlatformViewCreatedListener(listener: ((id: number) => void)): void;
setLayoutDirection(layoutDirection: upstream5.TextDirection): Promise<void>;
set pointTransformer(value: ((position: upstream1.Offset) => Readonly<{ "__flaxBound:dart:ui::Offset": readonly [] }> & Readonly<{ "__flaxBound:dart:ui::OffsetBase": readonly [] }>));
}
defineObject("flax.core/sdk_services#type:AndroidViewController", ["viewId","awaitingCreation","textureId","requiresViewComposition","pointTransformer","isCreated"], ["pointTransformer"], _flaxBindingMethods("flax.core/sdk_services#type:AndroidViewController", "object", {"setSize":_flaxMemberParameters0,"setOffset":_flaxMemberParameters1,"sendMotionEvent":_flaxMemberParameters2,"addOnPlatformViewCreatedListener":_flaxMemberParameters3,"removeOnPlatformViewCreatedListener":_flaxMemberParameters3,"setLayoutDirection":_flaxMemberParameters4}, {}), [], undefined, "flax.core/sdk_services#type:PlatformViewController");
export namespace _AndroidViewControllerFactory { export declare const kActionDown: number; }
export namespace _AndroidViewControllerFactory { export declare const kActionUp: number; }
export namespace _AndroidViewControllerFactory { export declare const kActionMove: number; }
export namespace _AndroidViewControllerFactory { export declare const kActionCancel: number; }
export namespace _AndroidViewControllerFactory { export declare const kActionPointerDown: number; }
export namespace _AndroidViewControllerFactory { export declare const kActionPointerUp: number; }
export namespace _AndroidViewControllerFactory { export declare const kAndroidLayoutDirectionLtr: number; }
export namespace _AndroidViewControllerFactory { export declare const kAndroidLayoutDirectionRtl: number; }
export namespace _AndroidViewControllerFactory { export declare const kInputDeviceSourceUnknown: number; }
export namespace _AndroidViewControllerFactory { export declare const kInputDeviceSourceTouchScreen: number; }
export namespace _AndroidViewControllerFactory { export declare const kInputDeviceSourceMouse: number; }
export namespace _AndroidViewControllerFactory { export declare const kInputDeviceSourceStylus: number; }
export namespace _AndroidViewControllerFactory { export declare const kInputDeviceSourceTouchPad: number; }
_flaxDefineStaticGetters(_AndroidViewControllerFactory, "flax.core/sdk_services#read:AndroidViewController.", ["kActionDown","kActionUp","kActionMove","kActionCancel","kActionPointerDown","kActionPointerUp","kAndroidLayoutDirectionLtr","kAndroidLayoutDirectionRtl","kInputDeviceSourceUnknown","kInputDeviceSourceTouchScreen","kInputDeviceSourceMouse","kInputDeviceSourceStylus","kInputDeviceSourceTouchPad"]);
export namespace _AndroidViewControllerFactory { export function pointerAction(pointerId: number, action: number): number {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_services#function:AndroidViewController.pointerAction", [pointerId, action]);
return _flaxResult as number;
} }
export const AndroidViewController: typeof _AndroidViewControllerFactory & _FlaxInstanceType<AndroidViewController> & _FlaxDartType<AndroidViewController, readonly ["class", "flax.core/sdk_services#type:AndroidViewController", readonly [], false]> = _flaxBindInstanceType<AndroidViewController, typeof _AndroidViewControllerFactory>(_AndroidViewControllerFactory, "flax.core/sdk_services#type:AndroidViewController", ["flax.core/sdk_services#type:PlatformViewController","dart:core::Object"]) as typeof _AndroidViewControllerFactory & _FlaxInstanceType<AndroidViewController> & _FlaxDartType<AndroidViewController, readonly ["class", "flax.core/sdk_services#type:AndroidViewController", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "viewId" | "awaitingCreation" | "textureId" | "requiresViewComposition" | "pointTransformer" | "isCreated" | "dispatchPointerEvent" | "create" | "dispose" | "clearFocus" | "setSize" | "setOffset" | "sendMotionEvent" | "addOnPlatformViewCreatedListener" | "removeOnPlatformViewCreatedListener" | "setLayoutDirection" | "__flaxBound:package:flutter/src/services/platform_views.dart::AndroidViewController" | "__flaxBound:package:flutter/src/services/platform_views.dart::PlatformViewController";
