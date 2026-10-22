// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_TextInputFormatter';
import '@flax/flutter/services/_bindings/flutter_TextInputFormatter';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_MaxLengthEnforcement';
import '@flax/flutter/services/_bindings/flutter_MaxLengthEnforcement';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_TargetPlatform';
import '@flax/flutter/foundation/_bindings/flutter_TargetPlatform';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import { _flaxMemberParameters68 } from "@flax/core/navigation/_bindings/flutter.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface LengthLimitingTextInputFormatter extends Omit<upstream0.TextInputFormatter, _flaxOwnMembers0>, Readonly<{ "__flaxBound:package:flutter/src/services/text_formatter.dart::LengthLimitingTextInputFormatter": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/text_formatter.dart::TextInputFormatter": readonly [] }> { readonly __LengthLimitingTextInputFormatter: unique symbol;
readonly [_flaxDartTypeValue]: LengthLimitingTextInputFormatter;

readonly maxLength: number | null;
readonly maxLengthEnforcement: upstream1.MaxLengthEnforcement | null;
formatEditUpdate(oldValue: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }>, newValue: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [] }>): upstream3.TextEditingValue;
}
defineObject("flax.core/flutter#type:LengthLimitingTextInputFormatter", ["maxLength","maxLengthEnforcement"], [], _flaxBindingMethods("flax.core/flutter#type:LengthLimitingTextInputFormatter", "object", {}, {}), [], undefined, "flax.core/flutter#type:TextInputFormatter");
export function _LengthLimitingTextInputFormatterFactory(maxLength: number | null, options: { maxLengthEnforcement?: upstream1.MaxLengthEnforcement | null | undefined } = {}): LengthLimitingTextInputFormatter {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:LengthLimitingTextInputFormatter", "", [{"name":"maxLength","required":true,"positional":true},{"name":"maxLengthEnforcement"}], [maxLength], options) as LengthLimitingTextInputFormatter;
}
export namespace _LengthLimitingTextInputFormatterFactory { export function getDefaultMaxLengthEnforcement(platform?: upstream2.TargetPlatform | null): upstream1.MaxLengthEnforcement {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:LengthLimitingTextInputFormatter.getDefaultMaxLengthEnforcement", [platform], _flaxMemberParameters68);
return _flaxResult as upstream1.MaxLengthEnforcement;
} }
export const LengthLimitingTextInputFormatter: typeof _LengthLimitingTextInputFormatterFactory & _FlaxInstanceType<LengthLimitingTextInputFormatter> & _FlaxDartType<LengthLimitingTextInputFormatter, readonly ["class", "flax.core/flutter#type:LengthLimitingTextInputFormatter", readonly [], false]> = _flaxBindInstanceType<LengthLimitingTextInputFormatter, typeof _LengthLimitingTextInputFormatterFactory>(_LengthLimitingTextInputFormatterFactory, "flax.core/flutter#type:LengthLimitingTextInputFormatter", ["flax.core/flutter#type:TextInputFormatter","dart:core::Object"]) as typeof _LengthLimitingTextInputFormatterFactory & _FlaxInstanceType<LengthLimitingTextInputFormatter> & _FlaxDartType<LengthLimitingTextInputFormatter, readonly ["class", "flax.core/flutter#type:LengthLimitingTextInputFormatter", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "maxLength" | "maxLengthEnforcement" | "formatEditUpdate" | "__flaxBound:package:flutter/src/services/text_formatter.dart::LengthLimitingTextInputFormatter" | "__flaxBound:package:flutter/src/services/text_formatter.dart::TextInputFormatter";
