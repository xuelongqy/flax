// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_TextRange';
import '@flax/dart/ui/_bindings/flutter_TextRange';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_TextAffinity';
import '@flax/dart/ui/_bindings/flutter_TextAffinity';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextPosition';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextPosition';
import { _flaxMemberParameters177, _flaxMemberParameters178, _flaxMemberParameters135 } from "@flax/core/navigation/_bindings/flutter.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextSelection extends Omit<upstream0.TextRange, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [] }>, Readonly<{ "__flaxBound:dart:ui::TextRange": readonly [] }> { readonly __TextSelection: unique symbol;
readonly [_flaxDartTypeValue]: TextSelection;

readonly start: number;
readonly end: number;
readonly isValid: boolean;
readonly isCollapsed: boolean;
readonly isNormalized: boolean;
readonly baseOffset: number;
readonly extentOffset: number;
readonly affinity: upstream1.TextAffinity;
readonly isDirectional: boolean;
readonly base: upstream2.TextPosition;
readonly extent: upstream2.TextPosition;
textBefore(text: string): string;
textAfter(text: string): string;
textInside(text: string): string;
toString(): string;
copyWith(options?: {affinity?: upstream1.TextAffinity | null | undefined; baseOffset?: number | null | undefined; extentOffset?: number | null | undefined; isDirectional?: boolean | null | undefined}): TextSelection;
expandTo(position: Readonly<{ "__flaxBound:dart:ui::TextPosition": readonly [] }>, extentAtIndex?: boolean): TextSelection;
extendTo(position: Readonly<{ "__flaxBound:dart:ui::TextPosition": readonly [] }>): TextSelection;
}
defineObject("flax.core/flutter#type:TextSelection", ["start","end","isValid","isCollapsed","isNormalized","baseOffset","extentOffset","affinity","isDirectional","base","extent"], [], _flaxBindingMethods("flax.core/flutter#type:TextSelection", "object", {"copyWith":_flaxMemberParameters177,"expandTo":_flaxMemberParameters178,"extendTo":_flaxMemberParameters135}, {}), [], undefined, "flax.core/flutter#type:TextRange");
export function _TextSelectionFactory(options: { baseOffset: number; extentOffset: number; affinity?: upstream1.TextAffinity | undefined; isDirectional?: boolean | undefined }): TextSelection {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:TextSelection", "", [{"name":"baseOffset","required":true},{"name":"extentOffset","required":true},{"name":"affinity"},{"name":"isDirectional"}], [], options) as TextSelection;
}
export namespace _TextSelectionFactory {
export function collapsed(options: { offset: number; affinity?: upstream1.TextAffinity | undefined }): TextSelection {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:TextSelection", "collapsed", [{"name":"offset","required":true},{"name":"affinity"}], [], options) as TextSelection;
}
}
export namespace _TextSelectionFactory {
export function fromPosition(position: Readonly<{ "__flaxBound:dart:ui::TextPosition": readonly [] }>): TextSelection {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:TextSelection", "fromPosition", _flaxMemberParameters135, [position], {}) as TextSelection;
}
}
export const TextSelection: typeof _TextSelectionFactory & _FlaxInstanceType<TextSelection> & _FlaxDartType<TextSelection, readonly ["class", "flax.core/flutter#type:TextSelection", readonly [], false]> = _flaxBindInstanceType<TextSelection, typeof _TextSelectionFactory>(_TextSelectionFactory, "flax.core/flutter#type:TextSelection", ["flax.core/flutter#type:TextRange","dart:core::Object"]) as typeof _TextSelectionFactory & _FlaxInstanceType<TextSelection> & _FlaxDartType<TextSelection, readonly ["class", "flax.core/flutter#type:TextSelection", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "start" | "end" | "isValid" | "isCollapsed" | "isNormalized" | "baseOffset" | "extentOffset" | "affinity" | "isDirectional" | "base" | "extent" | "textBefore" | "textAfter" | "textInside" | "toString" | "copyWith" | "expandTo" | "extendTo" | "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection" | "__flaxBound:dart:ui::TextRange";
