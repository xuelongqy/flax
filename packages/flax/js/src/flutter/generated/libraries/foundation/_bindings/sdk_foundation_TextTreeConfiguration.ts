// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters105 } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/foundation/_bindings/sdk_foundation.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface TextTreeConfiguration extends Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [] }> { readonly __TextTreeConfiguration: unique symbol;
readonly [_flaxDartTypeValue]: TextTreeConfiguration;

readonly prefixLineOne: string;
readonly suffixLineOne: string;
readonly prefixOtherLines: string;
readonly prefixLastChildLineOne: string;
readonly prefixOtherLinesRootNode: string;
readonly propertyPrefixIfChildren: string;
readonly propertyPrefixNoChildren: string;
readonly linkCharacter: string;
readonly childLinkSpace: string;
readonly lineBreak: string;
readonly lineBreakProperties: boolean;
readonly beforeName: string;
readonly afterName: string;
readonly afterDescriptionIfBody: string;
readonly afterDescription: string;
readonly beforeProperties: string;
readonly afterProperties: string;
readonly mandatoryAfterProperties: string;
readonly propertySeparator: string;
readonly bodyIndent: string;
readonly showChildren: boolean;
readonly addBlankLineIfNoChildren: boolean;
readonly isNameOnOwnLine: boolean;
readonly footer: string;
readonly mandatoryFooter: string;
readonly isBlankLineBetweenPropertiesAndChildren: boolean;
}
defineObject("flax.core/sdk_foundation#type:TextTreeConfiguration", ["prefixLineOne","suffixLineOne","prefixOtherLines","prefixLastChildLineOne","prefixOtherLinesRootNode","propertyPrefixIfChildren","propertyPrefixNoChildren","linkCharacter","childLinkSpace","lineBreak","lineBreakProperties","beforeName","afterName","afterDescriptionIfBody","afterDescription","beforeProperties","afterProperties","mandatoryAfterProperties","propertySeparator","bodyIndent","showChildren","addBlankLineIfNoChildren","isNameOnOwnLine","footer","mandatoryFooter","isBlankLineBetweenPropertiesAndChildren"], [], _flaxBindingMethods("flax.core/sdk_foundation#type:TextTreeConfiguration", "object", {}, {}), []);
export function _TextTreeConfigurationFactory(options: { prefixLineOne: string; prefixOtherLines: string; prefixLastChildLineOne: string; prefixOtherLinesRootNode: string; linkCharacter: string; propertyPrefixIfChildren: string; propertyPrefixNoChildren: string; lineBreak?: string | undefined; lineBreakProperties?: boolean | undefined; afterName?: string | undefined; afterDescriptionIfBody?: string | undefined; afterDescription?: string | undefined; beforeProperties?: string | undefined; afterProperties?: string | undefined; mandatoryAfterProperties?: string | undefined; propertySeparator?: string | undefined; bodyIndent?: string | undefined; footer?: string | undefined; showChildren?: boolean | undefined; addBlankLineIfNoChildren?: boolean | undefined; isNameOnOwnLine?: boolean | undefined; isBlankLineBetweenPropertiesAndChildren?: boolean | undefined; beforeName?: string | undefined; suffixLineOne?: string | undefined; mandatoryFooter?: string | undefined }): TextTreeConfiguration {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_foundation#type:TextTreeConfiguration", "", [{"name":"prefixLineOne","required":true},{"name":"prefixOtherLines","required":true},{"name":"prefixLastChildLineOne","required":true},{"name":"prefixOtherLinesRootNode","required":true},{"name":"linkCharacter","required":true},{"name":"propertyPrefixIfChildren","required":true},{"name":"propertyPrefixNoChildren","required":true},{"name":"lineBreak"},{"name":"lineBreakProperties"},{"name":"afterName"},{"name":"afterDescriptionIfBody"},{"name":"afterDescription"},{"name":"beforeProperties"},{"name":"afterProperties"},{"name":"mandatoryAfterProperties"},{"name":"propertySeparator"},{"name":"bodyIndent"},{"name":"footer"},{"name":"showChildren"},{"name":"addBlankLineIfNoChildren"},{"name":"isNameOnOwnLine"},{"name":"isBlankLineBetweenPropertiesAndChildren"},{"name":"beforeName"},{"name":"suffixLineOne"},{"name":"mandatoryFooter"}], [], options) as TextTreeConfiguration;
}
const _TextTreeConfigurationProxy = {type: "flax.core/sdk_foundation#type:TextTreeConfiguration", parameters: _flaxMemberParameters105, constructors: {"": _flaxMemberParameters105}, methods: {}, getters: ["prefixLineOne","suffixLineOne","prefixOtherLines","prefixLastChildLineOne","prefixOtherLinesRootNode","propertyPrefixIfChildren","propertyPrefixNoChildren","linkCharacter","childLinkSpace","lineBreak","lineBreakProperties","beforeName","afterName","afterDescriptionIfBody","afterDescription","beforeProperties","afterProperties","mandatoryAfterProperties","propertySeparator","bodyIndent","showChildren","addBlankLineIfNoChildren","isNameOnOwnLine","footer","mandatoryFooter","isBlankLineBetweenPropertiesAndChildren"], setters: [], contextMembers: [], superMembers: ["get:prefixLineOne","get:suffixLineOne","get:prefixOtherLines","get:prefixLastChildLineOne","get:prefixOtherLinesRootNode","get:propertyPrefixIfChildren","get:propertyPrefixNoChildren","get:linkCharacter","get:childLinkSpace","get:lineBreak","get:lineBreakProperties","get:beforeName","get:afterName","get:afterDescriptionIfBody","get:afterDescription","get:beforeProperties","get:afterProperties","get:mandatoryAfterProperties","get:propertySeparator","get:bodyIndent","get:showChildren","get:addBlankLineIfNoChildren","get:isNameOnOwnLine","get:footer","get:mandatoryFooter","get:isBlankLineBetweenPropertiesAndChildren"]} as const;
export interface _TextTreeConfigurationNative extends TextTreeConfiguration {
readonly [_flaxDartTypeValue]: _TextTreeConfigurationNative;

get prefixLineOne(): string;
get suffixLineOne(): string;
get prefixOtherLines(): string;
get prefixLastChildLineOne(): string;
get prefixOtherLinesRootNode(): string;
get propertyPrefixIfChildren(): string;
get propertyPrefixNoChildren(): string;
get linkCharacter(): string;
get childLinkSpace(): string;
get lineBreak(): string;
get lineBreakProperties(): boolean;
get beforeName(): string;
get afterName(): string;
get afterDescriptionIfBody(): string;
get afterDescription(): string;
get beforeProperties(): string;
get afterProperties(): string;
get mandatoryAfterProperties(): string;
get propertySeparator(): string;
get bodyIndent(): string;
get showChildren(): boolean;
get addBlankLineIfNoChildren(): boolean;
get isNameOnOwnLine(): boolean;
get footer(): string;
get mandatoryFooter(): string;
get isBlankLineBetweenPropertiesAndChildren(): boolean;
}
export abstract class _TextTreeConfigurationNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextTreeConfiguration>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: TextTreeConfiguration;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:TextTreeConfiguration", readonly [], false];
constructor(options: {prefixLineOne: string; prefixOtherLines: string; prefixLastChildLineOne: string; prefixOtherLinesRootNode: string; linkCharacter: string; propertyPrefixIfChildren: string; propertyPrefixNoChildren: string; lineBreak?: string | undefined; lineBreakProperties?: boolean | undefined; afterName?: string | undefined; afterDescriptionIfBody?: string | undefined; afterDescription?: string | undefined; beforeProperties?: string | undefined; afterProperties?: string | undefined; mandatoryAfterProperties?: string | undefined; propertySeparator?: string | undefined; bodyIndent?: string | undefined; footer?: string | undefined; showChildren?: boolean | undefined; addBlankLineIfNoChildren?: boolean | undefined; isNameOnOwnLine?: boolean | undefined; isBlankLineBetweenPropertiesAndChildren?: boolean | undefined; beforeName?: string | undefined; suffixLineOne?: string | undefined; mandatoryFooter?: string | undefined}) { super(_TextTreeConfigurationProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_TextTreeConfigurationNative.prototype, _TextTreeConfigurationProxy);
export namespace _TextTreeConfigurationFactory { export function implement(args: [options: {prefixLineOne: string; prefixOtherLines: string; prefixLastChildLineOne: string; prefixOtherLinesRootNode: string; linkCharacter: string; propertyPrefixIfChildren: string; propertyPrefixNoChildren: string; lineBreak?: string | undefined; lineBreakProperties?: boolean | undefined; afterName?: string | undefined; afterDescriptionIfBody?: string | undefined; afterDescription?: string | undefined; beforeProperties?: string | undefined; afterProperties?: string | undefined; mandatoryAfterProperties?: string | undefined; propertySeparator?: string | undefined; bodyIndent?: string | undefined; footer?: string | undefined; showChildren?: boolean | undefined; addBlankLineIfNoChildren?: boolean | undefined; isNameOnOwnLine?: boolean | undefined; isBlankLineBetweenPropertiesAndChildren?: boolean | undefined; beforeName?: string | undefined; suffixLineOne?: string | undefined; mandatoryFooter?: string | undefined}], implementation: {}): TextTreeConfiguration {
return constructProxy(_TextTreeConfigurationProxy, args, implementation) as TextTreeConfiguration; } }
const _TextTreeConfigurationBinding = _flaxProxyFactory(_TextTreeConfigurationFactory, _TextTreeConfigurationNative) as unknown as typeof _TextTreeConfigurationFactory & (new(options: {prefixLineOne: string; prefixOtherLines: string; prefixLastChildLineOne: string; prefixOtherLinesRootNode: string; linkCharacter: string; propertyPrefixIfChildren: string; propertyPrefixNoChildren: string; lineBreak?: string | undefined; lineBreakProperties?: boolean | undefined; afterName?: string | undefined; afterDescriptionIfBody?: string | undefined; afterDescription?: string | undefined; beforeProperties?: string | undefined; afterProperties?: string | undefined; mandatoryAfterProperties?: string | undefined; propertySeparator?: string | undefined; bodyIndent?: string | undefined; footer?: string | undefined; showChildren?: boolean | undefined; addBlankLineIfNoChildren?: boolean | undefined; isNameOnOwnLine?: boolean | undefined; isBlankLineBetweenPropertiesAndChildren?: boolean | undefined; beforeName?: string | undefined; suffixLineOne?: string | undefined; mandatoryFooter?: string | undefined}) => _TextTreeConfigurationNative);
export const TextTreeConfiguration: typeof _TextTreeConfigurationBinding & _FlaxInstanceType<TextTreeConfiguration> & _FlaxDartType<TextTreeConfiguration, readonly ["class", "flax.core/sdk_foundation#type:TextTreeConfiguration", readonly [], false]> = _flaxBindInstanceType<TextTreeConfiguration, typeof _TextTreeConfigurationBinding>(_TextTreeConfigurationBinding, "flax.core/sdk_foundation#type:TextTreeConfiguration", ["dart:core::Object"]) as typeof _TextTreeConfigurationBinding & _FlaxInstanceType<TextTreeConfiguration> & _FlaxDartType<TextTreeConfiguration, readonly ["class", "flax.core/sdk_foundation#type:TextTreeConfiguration", readonly [], false]>;
