// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Iterator';
import '@flax/dart/core/_bindings/flutter_Iterator';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextPosition';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextPosition';
import { _flaxMemberParameters1, _flaxMemberParameters26 } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/rendering/_bindings/sdk_rendering.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface VerticalCaretMovementRun extends Omit<upstream0.Iterator<upstream1.TextPosition>, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/rendering/editable.dart::VerticalCaretMovementRun": readonly [] }>, Readonly<{ "__flaxBound:dart:core::Iterator": readonly [upstream1.TextPosition] }> { readonly __VerticalCaretMovementRun: unique symbol;
readonly [_flaxDartTypeValue]: VerticalCaretMovementRun;

readonly current: upstream1.TextPosition;
readonly isValid: boolean;
moveNext(): boolean;
movePrevious(): boolean;
moveByOffset(offset: number): boolean;
}
defineObject("flax.core/sdk_rendering#type:VerticalCaretMovementRun", ["current","isValid"], [], _flaxBindingMethods("flax.core/sdk_rendering#type:VerticalCaretMovementRun", "object", {"moveNext":_flaxMemberParameters1,"movePrevious":_flaxMemberParameters1,"moveByOffset":_flaxMemberParameters26}, {}), []);
export const VerticalCaretMovementRun: object & _FlaxInstanceType<VerticalCaretMovementRun> & _FlaxDartType<VerticalCaretMovementRun, readonly ["class", "flax.core/sdk_rendering#type:VerticalCaretMovementRun", readonly [], false]> = _flaxBindInstanceType<VerticalCaretMovementRun, object>({}, "flax.core/sdk_rendering#type:VerticalCaretMovementRun", ["dart:core::Object","flax.core/flutter#type:Iterator"]) as object & _FlaxInstanceType<VerticalCaretMovementRun> & _FlaxDartType<VerticalCaretMovementRun, readonly ["class", "flax.core/sdk_rendering#type:VerticalCaretMovementRun", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "current" | "isValid" | "moveNext" | "movePrevious" | "moveByOffset" | "__flaxBound:package:flutter/src/rendering/editable.dart::VerticalCaretMovementRun" | "__flaxBound:dart:core::Iterator";
