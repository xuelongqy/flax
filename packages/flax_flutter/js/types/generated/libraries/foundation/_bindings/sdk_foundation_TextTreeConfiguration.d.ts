import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface TextTreeConfiguration extends Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::TextTreeConfiguration": readonly [];
}> {
    readonly __TextTreeConfiguration: unique symbol;
    readonly [_flaxDartTypeValue]: TextTreeConfiguration;
}
export interface TextTreeConfiguration {
    readonly [_flaxDartTypeValue]: TextTreeConfiguration;
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
export declare abstract class TextTreeConfiguration extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextTreeConfiguration>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TextTreeConfiguration;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:TextTreeConfiguration", readonly [], false];
    constructor(options: {
        prefixLineOne: string;
        prefixOtherLines: string;
        prefixLastChildLineOne: string;
        prefixOtherLinesRootNode: string;
        linkCharacter: string;
        propertyPrefixIfChildren: string;
        propertyPrefixNoChildren: string;
        lineBreak?: string | undefined;
        lineBreakProperties?: boolean | undefined;
        afterName?: string | undefined;
        afterDescriptionIfBody?: string | undefined;
        afterDescription?: string | undefined;
        beforeProperties?: string | undefined;
        afterProperties?: string | undefined;
        mandatoryAfterProperties?: string | undefined;
        propertySeparator?: string | undefined;
        bodyIndent?: string | undefined;
        footer?: string | undefined;
        showChildren?: boolean | undefined;
        addBlankLineIfNoChildren?: boolean | undefined;
        isNameOnOwnLine?: boolean | undefined;
        isBlankLineBetweenPropertiesAndChildren?: boolean | undefined;
        beforeName?: string | undefined;
        suffixLineOne?: string | undefined;
        mandatoryFooter?: string | undefined;
    });
}
export declare namespace TextTreeConfiguration {
    function implement(args: [options: {
        prefixLineOne: string;
        prefixOtherLines: string;
        prefixLastChildLineOne: string;
        prefixOtherLinesRootNode: string;
        linkCharacter: string;
        propertyPrefixIfChildren: string;
        propertyPrefixNoChildren: string;
        lineBreak?: string | undefined;
        lineBreakProperties?: boolean | undefined;
        afterName?: string | undefined;
        afterDescriptionIfBody?: string | undefined;
        afterDescription?: string | undefined;
        beforeProperties?: string | undefined;
        afterProperties?: string | undefined;
        mandatoryAfterProperties?: string | undefined;
        propertySeparator?: string | undefined;
        bodyIndent?: string | undefined;
        footer?: string | undefined;
        showChildren?: boolean | undefined;
        addBlankLineIfNoChildren?: boolean | undefined;
        isNameOnOwnLine?: boolean | undefined;
        isBlankLineBetweenPropertiesAndChildren?: boolean | undefined;
        beforeName?: string | undefined;
        suffixLineOne?: string | undefined;
        mandatoryFooter?: string | undefined;
    }], implementation: {}): TextTreeConfiguration;
}
