// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_TextInputType';
import '@flax/flutter/services/_bindings/sdk_services_TextInputType';
import type * as upstream1 from '@flax/flutter/services/_bindings/sdk_services_SmartDashesType';
import '@flax/flutter/services/_bindings/sdk_services_SmartDashesType';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_SmartQuotesType';
import '@flax/flutter/services/_bindings/sdk_services_SmartQuotesType';
import type * as upstream3 from '@flax/flutter/services/_bindings/sdk_services_TextInputAction';
import '@flax/flutter/services/_bindings/sdk_services_TextInputAction';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import type * as upstream5 from '@flax/flutter/services/_bindings/sdk_services_TextCapitalization';
import '@flax/flutter/services/_bindings/sdk_services_TextCapitalization';
import type * as upstream6 from '@flax/flutter/services/_bindings/sdk_services_AutofillConfiguration';
import '@flax/flutter/services/_bindings/sdk_services_AutofillConfiguration';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import { _flaxMemberParameters119, _flaxMemberParameters0, _flaxMemberParameters120 } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/services/_bindings/sdk_services.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextInputConfiguration extends Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputConfiguration": readonly [] }> { readonly __TextInputConfiguration: unique symbol;
readonly [_flaxDartTypeValue]: TextInputConfiguration;

readonly viewId: number | null;
readonly inputType: upstream0.TextInputType;
readonly readOnly: boolean;
readonly obscureText: boolean;
readonly autocorrect: boolean;
readonly autofillConfiguration: upstream6.AutofillConfiguration;
readonly smartDashesType: upstream1.SmartDashesType;
readonly smartQuotesType: upstream2.SmartQuotesType;
readonly enableSuggestions: boolean;
readonly enableInteractiveSelection: boolean;
readonly actionLabel: string | null;
readonly inputAction: upstream3.TextInputAction;
readonly textCapitalization: upstream5.TextCapitalization;
readonly keyboardAppearance: upstream4.Brightness;
readonly enableIMEPersonalizedLearning: boolean;
readonly allowedMimeTypes: DartList<string>;
readonly hintLocales: DartList<upstream7.Locale> | null;
readonly enableInlinePrediction: boolean | null;
readonly enableDeltaModel: boolean;
copyWith(options?: {actionLabel?: string | null | undefined; allowedMimeTypes?: DartListInput<string, string> | null | undefined; autocorrect?: boolean | null | undefined; autofillConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/services/autofill.dart::AutofillConfiguration": readonly [] }> | null | undefined; enableDeltaModel?: boolean | null | undefined; enableIMEPersonalizedLearning?: boolean | null | undefined; enableInlinePrediction?: boolean | null | undefined; enableInteractiveSelection?: boolean | null | undefined; enableSuggestions?: boolean | null | undefined; hintLocales?: DartListInput<upstream7.Locale, Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }>> | null | undefined; inputAction?: upstream3.TextInputAction | null | undefined; inputType?: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputType": readonly [] }> | null | undefined; keyboardAppearance?: upstream4.Brightness | null | undefined; obscureText?: boolean | null | undefined; readOnly?: boolean | null | undefined; smartDashesType?: upstream1.SmartDashesType | null | undefined; smartQuotesType?: upstream2.SmartQuotesType | null | undefined; textCapitalization?: upstream5.TextCapitalization | null | undefined; viewId?: number | null | undefined}): TextInputConfiguration;
toJson(): DartMap<string, unknown | null>;
toString(): string;
}
defineObject("flax.core/sdk_services#type:TextInputConfiguration", ["viewId","inputType","readOnly","obscureText","autocorrect","autofillConfiguration","smartDashesType","smartQuotesType","enableSuggestions","enableInteractiveSelection","actionLabel","inputAction","textCapitalization","keyboardAppearance","enableIMEPersonalizedLearning","allowedMimeTypes","hintLocales","enableInlinePrediction","enableDeltaModel"], [], _flaxBindingMethods("flax.core/sdk_services#type:TextInputConfiguration", "object", {"copyWith":_flaxMemberParameters119,"toJson":_flaxMemberParameters0,"toString":_flaxMemberParameters0}, {}), []);
export function _TextInputConfigurationFactory(options: { viewId?: number | null | undefined; inputType?: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputType": readonly [] }> | undefined; readOnly?: boolean | undefined; obscureText?: boolean | undefined; autocorrect?: boolean | undefined; smartDashesType?: upstream1.SmartDashesType | null | undefined; smartQuotesType?: upstream2.SmartQuotesType | null | undefined; enableSuggestions?: boolean | undefined; enableInteractiveSelection?: boolean | undefined; actionLabel?: string | null | undefined; inputAction?: upstream3.TextInputAction | undefined; keyboardAppearance?: upstream4.Brightness | undefined; textCapitalization?: upstream5.TextCapitalization | undefined; autofillConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/services/autofill.dart::AutofillConfiguration": readonly [] }> | undefined; enableIMEPersonalizedLearning?: boolean | undefined; allowedMimeTypes?: DartListInput<string, string> | undefined; enableDeltaModel?: boolean | undefined; hintLocales?: DartListInput<upstream7.Locale, Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }>> | null | undefined; enableInlinePrediction?: boolean | null | undefined } = {}): TextInputConfiguration {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_services#type:TextInputConfiguration", "", [{"name":"viewId"},{"name":"inputType"},{"name":"readOnly"},{"name":"obscureText"},{"name":"autocorrect"},{"name":"smartDashesType"},{"name":"smartQuotesType"},{"name":"enableSuggestions"},{"name":"enableInteractiveSelection"},{"name":"actionLabel"},{"name":"inputAction"},{"name":"keyboardAppearance"},{"name":"textCapitalization"},{"name":"autofillConfiguration"},{"name":"enableIMEPersonalizedLearning"},{"name":"allowedMimeTypes"},{"name":"enableDeltaModel"},{"name":"hintLocales"},{"name":"enableInlinePrediction"}], [], options) as TextInputConfiguration;
}
const _TextInputConfigurationProxy = {type: "flax.core/sdk_services#type:TextInputConfiguration", parameters: _flaxMemberParameters120, constructors: {"": _flaxMemberParameters120}, methods: {"copyWith":_flaxMemberParameters119,"toJson":_flaxMemberParameters0,"toString":_flaxMemberParameters0}, getters: ["viewId","inputType","readOnly","obscureText","autocorrect","autofillConfiguration","smartDashesType","smartQuotesType","enableSuggestions","enableInteractiveSelection","actionLabel","inputAction","textCapitalization","keyboardAppearance","enableIMEPersonalizedLearning","allowedMimeTypes","hintLocales","enableInlinePrediction","enableDeltaModel"], setters: [], contextMembers: [], superMembers: ["get:viewId","get:inputType","get:readOnly","get:obscureText","get:autocorrect","get:autofillConfiguration","get:smartDashesType","get:smartQuotesType","get:enableSuggestions","get:enableInteractiveSelection","get:actionLabel","get:inputAction","get:textCapitalization","get:keyboardAppearance","get:enableIMEPersonalizedLearning","get:allowedMimeTypes","get:hintLocales","get:enableInlinePrediction","get:enableDeltaModel","copyWith","toJson","toString"]} as const;
export interface _TextInputConfigurationNative extends TextInputConfiguration {
readonly [_flaxDartTypeValue]: _TextInputConfigurationNative;

copyWith(options?: {viewId?: number | null | undefined; inputType?: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputType": readonly [] }> | null | undefined; readOnly?: boolean | null | undefined; obscureText?: boolean | null | undefined; autocorrect?: boolean | null | undefined; smartDashesType?: upstream1.SmartDashesType | null | undefined; smartQuotesType?: upstream2.SmartQuotesType | null | undefined; enableSuggestions?: boolean | null | undefined; enableInteractiveSelection?: boolean | null | undefined; actionLabel?: string | null | undefined; inputAction?: upstream3.TextInputAction | null | undefined; keyboardAppearance?: upstream4.Brightness | null | undefined; textCapitalization?: upstream5.TextCapitalization | null | undefined; enableIMEPersonalizedLearning?: boolean | null | undefined; allowedMimeTypes?: DartListInput<string, string> | null | undefined; autofillConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/services/autofill.dart::AutofillConfiguration": readonly [] }> | null | undefined; enableDeltaModel?: boolean | null | undefined; hintLocales?: DartListInput<upstream7.Locale, Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }>> | null | undefined; enableInlinePrediction?: boolean | null | undefined}): TextInputConfiguration;
toJson(): DartMap<string, unknown | null>;
toString(): string;
get viewId(): number | null;
get inputType(): upstream0.TextInputType;
get readOnly(): boolean;
get obscureText(): boolean;
get autocorrect(): boolean;
get autofillConfiguration(): upstream6.AutofillConfiguration;
get smartDashesType(): upstream1.SmartDashesType;
get smartQuotesType(): upstream2.SmartQuotesType;
get enableSuggestions(): boolean;
get enableInteractiveSelection(): boolean;
get actionLabel(): string | null;
get inputAction(): upstream3.TextInputAction;
get textCapitalization(): upstream5.TextCapitalization;
get keyboardAppearance(): upstream4.Brightness;
get enableIMEPersonalizedLearning(): boolean;
get allowedMimeTypes(): DartList<string>;
get hintLocales(): DartList<upstream7.Locale> | null;
get enableInlinePrediction(): boolean | null;
get enableDeltaModel(): boolean;
}
export abstract class _TextInputConfigurationNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextInputConfiguration>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TextInputConfiguration;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:TextInputConfiguration", readonly [], false];
constructor(options?: {viewId?: number | null | undefined; inputType?: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputType": readonly [] }> | undefined; readOnly?: boolean | undefined; obscureText?: boolean | undefined; autocorrect?: boolean | undefined; smartDashesType?: upstream1.SmartDashesType | null | undefined; smartQuotesType?: upstream2.SmartQuotesType | null | undefined; enableSuggestions?: boolean | undefined; enableInteractiveSelection?: boolean | undefined; actionLabel?: string | null | undefined; inputAction?: upstream3.TextInputAction | undefined; keyboardAppearance?: upstream4.Brightness | undefined; textCapitalization?: upstream5.TextCapitalization | undefined; autofillConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/services/autofill.dart::AutofillConfiguration": readonly [] }> | undefined; enableIMEPersonalizedLearning?: boolean | undefined; allowedMimeTypes?: DartListInput<string, string> | undefined; enableDeltaModel?: boolean | undefined; hintLocales?: DartListInput<upstream7.Locale, Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }>> | null | undefined; enableInlinePrediction?: boolean | null | undefined}) { super(_TextInputConfigurationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_TextInputConfigurationNative.prototype, _TextInputConfigurationProxy);
export namespace _TextInputConfigurationFactory { export function implement(args: [options?: {viewId?: number | null | undefined; inputType?: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputType": readonly [] }> | undefined; readOnly?: boolean | undefined; obscureText?: boolean | undefined; autocorrect?: boolean | undefined; smartDashesType?: upstream1.SmartDashesType | null | undefined; smartQuotesType?: upstream2.SmartQuotesType | null | undefined; enableSuggestions?: boolean | undefined; enableInteractiveSelection?: boolean | undefined; actionLabel?: string | null | undefined; inputAction?: upstream3.TextInputAction | undefined; keyboardAppearance?: upstream4.Brightness | undefined; textCapitalization?: upstream5.TextCapitalization | undefined; autofillConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/services/autofill.dart::AutofillConfiguration": readonly [] }> | undefined; enableIMEPersonalizedLearning?: boolean | undefined; allowedMimeTypes?: DartListInput<string, string> | undefined; enableDeltaModel?: boolean | undefined; hintLocales?: DartListInput<upstream7.Locale, Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }>> | null | undefined; enableInlinePrediction?: boolean | null | undefined}], implementation: {}): TextInputConfiguration {
return constructProxy(_TextInputConfigurationProxy, args, implementation) as TextInputConfiguration; } }
const _TextInputConfigurationBinding = _flaxProxyFactory(_TextInputConfigurationFactory, _TextInputConfigurationNative) as unknown as typeof _TextInputConfigurationFactory & (new(options?: {viewId?: number | null | undefined; inputType?: Readonly<{ "__flaxBound:package:flutter/src/services/text_input.dart::TextInputType": readonly [] }> | undefined; readOnly?: boolean | undefined; obscureText?: boolean | undefined; autocorrect?: boolean | undefined; smartDashesType?: upstream1.SmartDashesType | null | undefined; smartQuotesType?: upstream2.SmartQuotesType | null | undefined; enableSuggestions?: boolean | undefined; enableInteractiveSelection?: boolean | undefined; actionLabel?: string | null | undefined; inputAction?: upstream3.TextInputAction | undefined; keyboardAppearance?: upstream4.Brightness | undefined; textCapitalization?: upstream5.TextCapitalization | undefined; autofillConfiguration?: Readonly<{ "__flaxBound:package:flutter/src/services/autofill.dart::AutofillConfiguration": readonly [] }> | undefined; enableIMEPersonalizedLearning?: boolean | undefined; allowedMimeTypes?: DartListInput<string, string> | undefined; enableDeltaModel?: boolean | undefined; hintLocales?: DartListInput<upstream7.Locale, Readonly<{ "__flaxBound:dart:ui::Locale": readonly [] }>> | null | undefined; enableInlinePrediction?: boolean | null | undefined}) => _TextInputConfigurationNative);
export const TextInputConfiguration: typeof _TextInputConfigurationBinding & _FlaxInstanceType<TextInputConfiguration> & _FlaxDartType<TextInputConfiguration, readonly ["class", "flax.core/sdk_services#type:TextInputConfiguration", readonly [], false]> = _flaxBindInstanceType<TextInputConfiguration, typeof _TextInputConfigurationBinding>(_TextInputConfigurationBinding, "flax.core/sdk_services#type:TextInputConfiguration", ["dart:core::Object"]) as typeof _TextInputConfigurationBinding & _FlaxInstanceType<TextInputConfiguration> & _FlaxDartType<TextInputConfiguration, readonly ["class", "flax.core/sdk_services#type:TextInputConfiguration", readonly [], false]>;
