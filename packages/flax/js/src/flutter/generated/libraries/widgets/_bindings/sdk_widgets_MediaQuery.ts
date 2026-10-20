// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedWidget';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ProxyWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_MediaQueryData';
import '@flax/flutter/widgets/_bindings/sdk_widgets_MediaQueryData';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_FlutterView';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FlutterView';
import type * as upstream6 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_Orientation';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Orientation';
import type * as upstream8 from '@flax/flutter/painting/_bindings/sdk_painting_TextScaler';
import '@flax/flutter/painting/_bindings/sdk_painting_TextScaler';
import type * as upstream9 from '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import type * as upstream10 from '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/sdk_widgets_NavigationMode';
import '@flax/flutter/widgets/_bindings/sdk_widgets_NavigationMode';
import type * as upstream12 from '@flax/flutter/gestures/_bindings/sdk_gestures_DeviceGestureSettings';
import '@flax/flutter/gestures/_bindings/sdk_gestures_DeviceGestureSettings';
import type * as upstream13 from '@flax/dart/ui/_bindings/sdk_dart_ui_DisplayFeature';
import '@flax/dart/ui/_bindings/sdk_dart_ui_DisplayFeature';
import type * as upstream14 from '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream16 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream17 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream18 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { _flaxMemberParameters3, _flaxMemberParameters5, _flaxMemberParameters192, _flaxMemberParameters193, _flaxMemberParameters2, _flaxMemberParameters6, _flaxMemberParameters7, _flaxMemberParameters8 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MediaQuery extends _FlaxDartWidget, Readonly<{ "__flaxBound:package:flutter/src/widgets/inherited_model.dart::InheritedModel": readonly [Readonly<{ "__flaxBound:package:flutter/src/widgets/media_query.dart::_MediaQueryAspect": readonly [] }>] }>, Omit<upstream0.InheritedWidget, _flaxOwnMembers0>, Omit<upstream1.ProxyWidget, _flaxOwnMembers0 | keyof upstream0.InheritedWidget>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.InheritedWidget | keyof upstream1.ProxyWidget>, Readonly<{ "__flaxBound:package:flutter/src/widgets/media_query.dart::MediaQuery": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/inherited_model.dart::InheritedModel": readonly [Readonly<{ "__flaxBound:package:flutter/src/widgets/media_query.dart::_MediaQueryAspect": readonly [] }>] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::InheritedWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __MediaQuery: unique symbol;
readonly [_flaxDartTypeValue]: MediaQuery;

readonly data: upstream3.MediaQueryData;
readonly child: Widget;
readonly key: upstream2.Key | null;
updateShouldNotify(oldWidget: MediaQuery): boolean;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
updateShouldNotifyDependent(oldWidget: MediaQuery, dependencies: DartSetInput<{}, {}>): boolean;
isSupportedAspect(aspect: {}): boolean;
toStringShort(): string;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream16.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream16.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream18.DiagnosticsTreeStyle | null | undefined}): upstream17.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream17.DiagnosticsNode>;
}
defineObject("flax.core/sdk_widgets#type:MediaQuery", ["data","child","key"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:MediaQuery", "object", {"updateShouldNotify":_flaxMemberParameters3,"debugFillProperties":_flaxMemberParameters5,"updateShouldNotifyDependent":_flaxMemberParameters192,"isSupportedAspect":_flaxMemberParameters193,"toStringShort":_flaxMemberParameters2,"toStringShallow":_flaxMemberParameters6,"toStringDeep":_flaxMemberParameters7,"toDiagnosticsNode":_flaxMemberParameters8,"debugDescribeChildren":_flaxMemberParameters2}, {}), []);
export function _MediaQueryFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; data: Readonly<{ "__flaxBound:package:flutter/src/widgets/media_query.dart::MediaQueryData": readonly [] }>; child: Widget }): MediaQuery {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:MediaQuery", "", [{"name":"key"},{"name":"data","required":true},{"name":"child","required":true}], [], options) as MediaQuery;
}
export namespace _MediaQueryFactory {
export function removePadding(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; context: upstream4.BuildContext; removeLeft?: boolean | undefined; removeTop?: boolean | undefined; removeRight?: boolean | undefined; removeBottom?: boolean | undefined; child: Widget }): MediaQuery {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:MediaQuery", "removePadding", [{"name":"key"},{"name":"context","required":true},{"name":"removeLeft"},{"name":"removeTop"},{"name":"removeRight"},{"name":"removeBottom"},{"name":"child","required":true}], [], options) as MediaQuery;
}
}
export namespace _MediaQueryFactory {
export function removeViewInsets(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; context: upstream4.BuildContext; removeLeft?: boolean | undefined; removeTop?: boolean | undefined; removeRight?: boolean | undefined; removeBottom?: boolean | undefined; child: Widget }): MediaQuery {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:MediaQuery", "removeViewInsets", [{"name":"key"},{"name":"context","required":true},{"name":"removeLeft"},{"name":"removeTop"},{"name":"removeRight"},{"name":"removeBottom"},{"name":"child","required":true}], [], options) as MediaQuery;
}
}
export namespace _MediaQueryFactory {
export function removeViewPadding(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; context: upstream4.BuildContext; removeLeft?: boolean | undefined; removeTop?: boolean | undefined; removeRight?: boolean | undefined; removeBottom?: boolean | undefined; child: Widget }): MediaQuery {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:MediaQuery", "removeViewPadding", [{"name":"key"},{"name":"context","required":true},{"name":"removeLeft"},{"name":"removeTop"},{"name":"removeRight"},{"name":"removeBottom"},{"name":"child","required":true}], [], options) as MediaQuery;
}
}
export namespace _MediaQueryFactory { export function applyTextStyleOverrides(options: { child: Widget; key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; letterSpacingOverride: number | null; lineHeightScaleFactorOverride: number | null; paragraphSpacingOverride: number | null; wordSpacingOverride: number | null }): Widget {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["child","key","letterSpacingOverride","lineHeightScaleFactorOverride","paragraphSpacingOverride","wordSpacingOverride"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.applyTextStyleOverrides", [options.child, options.key, options.letterSpacingOverride, options.lineHeightScaleFactorOverride, options.paragraphSpacingOverride, options.wordSpacingOverride]);
return _flaxResult as Widget;
} }
export namespace _MediaQueryFactory { export function fromWindow(options: { child: Widget; key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined }): Widget {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["child","key"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.fromWindow", [options.child, options.key]);
return _flaxResult as Widget;
} }
export namespace _MediaQueryFactory { export function fromView(options: { child: Widget; key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; view: Readonly<{ "__flaxBound:dart:ui::FlutterView": readonly [] }> }): Widget {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["child","key","view"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.fromView", [options.child, options.key, options.view]);
return _flaxResult as Widget;
} }
export namespace _MediaQueryFactory { export function withNoTextScaling(options: { child: Widget; key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined }): Widget {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["child","key"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.withNoTextScaling", [options.child, options.key]);
return _flaxResult as Widget;
} }
export namespace _MediaQueryFactory { export function withClampedTextScaling(options: { child: Widget; key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; maxScaleFactor?: number | undefined; minScaleFactor?: number | undefined }): Widget {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["child","key","maxScaleFactor","minScaleFactor"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.withClampedTextScaling", [options.child, options.key, options.maxScaleFactor, options.minScaleFactor]);
return _flaxResult as Widget;
} }
export namespace _MediaQueryFactory { export function of(context: upstream4.BuildContext): upstream3.MediaQueryData {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.of", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as upstream3.MediaQueryData;
} }
export namespace _MediaQueryFactory { export function maybeOf(context: upstream4.BuildContext): upstream3.MediaQueryData | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.maybeOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as upstream3.MediaQueryData | null;
} }
export namespace _MediaQueryFactory { export function sizeOf(context: upstream4.BuildContext): upstream6.Size {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.sizeOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as upstream6.Size;
} }
export namespace _MediaQueryFactory { export function maybeSizeOf(context: upstream4.BuildContext): upstream6.Size | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.maybeSizeOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as upstream6.Size | null;
} }
export namespace _MediaQueryFactory { export function widthOf(context: upstream4.BuildContext): number {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.widthOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as number;
} }
export namespace _MediaQueryFactory { export function maybeWidthOf(context: upstream4.BuildContext): number | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.maybeWidthOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as number | null;
} }
export namespace _MediaQueryFactory { export function heightOf(context: upstream4.BuildContext): number {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.heightOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as number;
} }
export namespace _MediaQueryFactory { export function maybeHeightOf(context: upstream4.BuildContext): number | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.maybeHeightOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as number | null;
} }
export namespace _MediaQueryFactory { export function orientationOf(context: upstream4.BuildContext): upstream7.Orientation {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.orientationOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as upstream7.Orientation;
} }
export namespace _MediaQueryFactory { export function maybeOrientationOf(context: upstream4.BuildContext): upstream7.Orientation | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.maybeOrientationOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as upstream7.Orientation | null;
} }
export namespace _MediaQueryFactory { export function devicePixelRatioOf(context: upstream4.BuildContext): number {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.devicePixelRatioOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as number;
} }
export namespace _MediaQueryFactory { export function maybeDevicePixelRatioOf(context: upstream4.BuildContext): number | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.maybeDevicePixelRatioOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as number | null;
} }
export namespace _MediaQueryFactory { export function textScaleFactorOf(context: upstream4.BuildContext): number {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.textScaleFactorOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as number;
} }
export namespace _MediaQueryFactory { export function maybeTextScaleFactorOf(context: upstream4.BuildContext): number | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.maybeTextScaleFactorOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as number | null;
} }
export namespace _MediaQueryFactory { export function textScalerOf(context: upstream4.BuildContext): upstream8.TextScaler {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.textScalerOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as upstream8.TextScaler;
} }
export namespace _MediaQueryFactory { export function maybeTextScalerOf(context: upstream4.BuildContext): upstream8.TextScaler | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.maybeTextScalerOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as upstream8.TextScaler | null;
} }
export namespace _MediaQueryFactory { export function platformBrightnessOf(context: upstream4.BuildContext): upstream9.Brightness {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.platformBrightnessOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as upstream9.Brightness;
} }
export namespace _MediaQueryFactory { export function maybePlatformBrightnessOf(context: upstream4.BuildContext): upstream9.Brightness | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.maybePlatformBrightnessOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as upstream9.Brightness | null;
} }
export namespace _MediaQueryFactory { export function paddingOf(context: upstream4.BuildContext): upstream10.EdgeInsets {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.paddingOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as upstream10.EdgeInsets;
} }
export namespace _MediaQueryFactory { export function maybePaddingOf(context: upstream4.BuildContext): upstream10.EdgeInsets | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.maybePaddingOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as upstream10.EdgeInsets | null;
} }
export namespace _MediaQueryFactory { export function viewInsetsOf(context: upstream4.BuildContext): upstream10.EdgeInsets {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.viewInsetsOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as upstream10.EdgeInsets;
} }
export namespace _MediaQueryFactory { export function maybeViewInsetsOf(context: upstream4.BuildContext): upstream10.EdgeInsets | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.maybeViewInsetsOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as upstream10.EdgeInsets | null;
} }
export namespace _MediaQueryFactory { export function systemGestureInsetsOf(context: upstream4.BuildContext): upstream10.EdgeInsets {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.systemGestureInsetsOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as upstream10.EdgeInsets;
} }
export namespace _MediaQueryFactory { export function maybeSystemGestureInsetsOf(context: upstream4.BuildContext): upstream10.EdgeInsets | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.maybeSystemGestureInsetsOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as upstream10.EdgeInsets | null;
} }
export namespace _MediaQueryFactory { export function viewPaddingOf(context: upstream4.BuildContext): upstream10.EdgeInsets {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.viewPaddingOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as upstream10.EdgeInsets;
} }
export namespace _MediaQueryFactory { export function maybeViewPaddingOf(context: upstream4.BuildContext): upstream10.EdgeInsets | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.maybeViewPaddingOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as upstream10.EdgeInsets | null;
} }
export namespace _MediaQueryFactory { export function alwaysUse24HourFormatOf(context: upstream4.BuildContext): boolean {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.alwaysUse24HourFormatOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as boolean;
} }
export namespace _MediaQueryFactory { export function maybeAlwaysUse24HourFormatOf(context: upstream4.BuildContext): boolean | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.maybeAlwaysUse24HourFormatOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as boolean | null;
} }
export namespace _MediaQueryFactory { export function accessibleNavigationOf(context: upstream4.BuildContext): boolean {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.accessibleNavigationOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as boolean;
} }
export namespace _MediaQueryFactory { export function maybeAccessibleNavigationOf(context: upstream4.BuildContext): boolean | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.maybeAccessibleNavigationOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as boolean | null;
} }
export namespace _MediaQueryFactory { export function invertColorsOf(context: upstream4.BuildContext): boolean {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.invertColorsOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as boolean;
} }
export namespace _MediaQueryFactory { export function maybeInvertColorsOf(context: upstream4.BuildContext): boolean | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.maybeInvertColorsOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as boolean | null;
} }
export namespace _MediaQueryFactory { export function highContrastOf(context: upstream4.BuildContext): boolean {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.highContrastOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as boolean;
} }
export namespace _MediaQueryFactory { export function maybeHighContrastOf(context: upstream4.BuildContext): boolean | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.maybeHighContrastOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as boolean | null;
} }
export namespace _MediaQueryFactory { export function onOffSwitchLabelsOf(context: upstream4.BuildContext): boolean {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.onOffSwitchLabelsOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as boolean;
} }
export namespace _MediaQueryFactory { export function maybeOnOffSwitchLabelsOf(context: upstream4.BuildContext): boolean | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.maybeOnOffSwitchLabelsOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as boolean | null;
} }
export namespace _MediaQueryFactory { export function disableAnimationsOf(context: upstream4.BuildContext): boolean {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.disableAnimationsOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as boolean;
} }
export namespace _MediaQueryFactory { export function maybeDisableAnimationsOf(context: upstream4.BuildContext): boolean | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.maybeDisableAnimationsOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as boolean | null;
} }
export namespace _MediaQueryFactory { export function boldTextOf(context: upstream4.BuildContext): boolean {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.boldTextOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as boolean;
} }
export namespace _MediaQueryFactory { export function maybeBoldTextOf(context: upstream4.BuildContext): boolean | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.maybeBoldTextOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as boolean | null;
} }
export namespace _MediaQueryFactory { export function supportsAnnounceOf(context: upstream4.BuildContext): boolean {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.supportsAnnounceOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as boolean;
} }
export namespace _MediaQueryFactory { export function maybeSupportsAnnounceOf(context: upstream4.BuildContext): boolean | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.maybeSupportsAnnounceOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as boolean | null;
} }
export namespace _MediaQueryFactory { export function navigationModeOf(context: upstream4.BuildContext): upstream11.NavigationMode {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.navigationModeOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as upstream11.NavigationMode;
} }
export namespace _MediaQueryFactory { export function maybeNavigationModeOf(context: upstream4.BuildContext): upstream11.NavigationMode | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.maybeNavigationModeOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as upstream11.NavigationMode | null;
} }
export namespace _MediaQueryFactory { export function gestureSettingsOf(context: upstream4.BuildContext): upstream12.DeviceGestureSettings {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.gestureSettingsOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as upstream12.DeviceGestureSettings;
} }
export namespace _MediaQueryFactory { export function maybeGestureSettingsOf(context: upstream4.BuildContext): upstream12.DeviceGestureSettings | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.maybeGestureSettingsOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as upstream12.DeviceGestureSettings | null;
} }
export namespace _MediaQueryFactory { export function displayFeaturesOf(context: upstream4.BuildContext): DartList<upstream13.DisplayFeature> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.displayFeaturesOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as DartList<upstream13.DisplayFeature>;
} }
export namespace _MediaQueryFactory { export function maybeDisplayFeaturesOf(context: upstream4.BuildContext): DartList<upstream13.DisplayFeature> | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.maybeDisplayFeaturesOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as DartList<upstream13.DisplayFeature> | null;
} }
export namespace _MediaQueryFactory { export function supportsShowingSystemContextMenu(context: upstream4.BuildContext): boolean {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.supportsShowingSystemContextMenu", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as boolean;
} }
export namespace _MediaQueryFactory { export function maybeSupportsShowingSystemContextMenu(context: upstream4.BuildContext): boolean | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.maybeSupportsShowingSystemContextMenu", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as boolean | null;
} }
export namespace _MediaQueryFactory { export function maybeLineHeightScaleFactorOverrideOf(context: upstream4.BuildContext): number | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.maybeLineHeightScaleFactorOverrideOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as number | null;
} }
export namespace _MediaQueryFactory { export function maybeLetterSpacingOverrideOf(context: upstream4.BuildContext): number | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.maybeLetterSpacingOverrideOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as number | null;
} }
export namespace _MediaQueryFactory { export function maybeWordSpacingOverrideOf(context: upstream4.BuildContext): number | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.maybeWordSpacingOverrideOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as number | null;
} }
export namespace _MediaQueryFactory { export function maybeParagraphSpacingOverrideOf(context: upstream4.BuildContext): number | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.maybeParagraphSpacingOverrideOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as number | null;
} }
export namespace _MediaQueryFactory { export function displayCornerRadiiOf(context: upstream4.BuildContext): upstream14.BorderRadius | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.displayCornerRadiiOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as upstream14.BorderRadius | null;
} }
export namespace _MediaQueryFactory { export function maybeDisplayCornerRadiiOf(context: upstream4.BuildContext): upstream14.BorderRadius | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:MediaQuery.maybeDisplayCornerRadiiOf", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as upstream14.BorderRadius | null;
} }
export const MediaQuery: typeof _MediaQueryFactory & _FlaxInstanceType<MediaQuery> & _FlaxDartType<MediaQuery, readonly ["class", "flax.core/sdk_widgets#type:MediaQuery", readonly [], false]> = _flaxBindInstanceType<MediaQuery, typeof _MediaQueryFactory>(_MediaQueryFactory, "flax.core/sdk_widgets#type:MediaQuery", ["flax.core/sdk_widgets#type:InheritedModel","flax.core/sdk_widgets#type:InheritedWidget","flax.core/sdk_widgets#type:ProxyWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _MediaQueryFactory & _FlaxInstanceType<MediaQuery> & _FlaxDartType<MediaQuery, readonly ["class", "flax.core/sdk_widgets#type:MediaQuery", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "data" | "child" | "key" | "updateShouldNotify" | "debugFillProperties" | "updateShouldNotifyDependent" | "isSupportedAspect" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/inherited_model.dart::InheritedModel" | "__flaxBound:package:flutter/src/widgets/media_query.dart::MediaQuery" | "__flaxBound:package:flutter/src/widgets/framework.dart::InheritedWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
