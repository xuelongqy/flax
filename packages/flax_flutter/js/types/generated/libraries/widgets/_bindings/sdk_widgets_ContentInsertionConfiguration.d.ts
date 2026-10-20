import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_KeyboardInsertedContent';
import '@flax/flutter/services/_bindings/sdk_services_KeyboardInsertedContent';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ContentInsertionConfiguration extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/editable_text.dart::ContentInsertionConfiguration": readonly [];
}> {
    readonly __ContentInsertionConfiguration: unique symbol;
    readonly [_flaxDartTypeValue]: ContentInsertionConfiguration;
    readonly onContentInserted: ((value: Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_inserted_content.dart::KeyboardInsertedContent": readonly [];
    }>) => void);
    readonly allowedMimeTypes: DartList<string>;
}
export declare function _ContentInsertionConfigurationFactory(options: {
    onContentInserted: ((value: upstream0.KeyboardInsertedContent) => void);
    allowedMimeTypes?: DartListInput<string, string> | undefined;
}): ContentInsertionConfiguration;
export interface _ContentInsertionConfigurationNative extends ContentInsertionConfiguration {
    readonly [_flaxDartTypeValue]: _ContentInsertionConfigurationNative;
    get onContentInserted(): ((value: Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_inserted_content.dart::KeyboardInsertedContent": readonly [];
    }>) => void);
    get allowedMimeTypes(): DartList<string>;
}
export declare abstract class _ContentInsertionConfigurationNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ContentInsertionConfiguration>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ContentInsertionConfiguration;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ContentInsertionConfiguration", readonly [], false];
    constructor(options: {
        onContentInserted: ((value: upstream0.KeyboardInsertedContent) => void);
        allowedMimeTypes?: DartListInput<string, string> | undefined;
    });
}
export declare namespace _ContentInsertionConfigurationFactory {
    function implement(args: [options: {
        onContentInserted: ((value: upstream0.KeyboardInsertedContent) => void);
        allowedMimeTypes?: DartListInput<string, string> | undefined;
    }], implementation: {}): ContentInsertionConfiguration;
}
declare const _ContentInsertionConfigurationBinding: typeof _ContentInsertionConfigurationFactory & (new (options: {
    onContentInserted: ((value: upstream0.KeyboardInsertedContent) => void);
    allowedMimeTypes?: DartListInput<string, string> | undefined;
}) => _ContentInsertionConfigurationNative);
export declare const ContentInsertionConfiguration: typeof _ContentInsertionConfigurationBinding & _FlaxInstanceType<ContentInsertionConfiguration> & _FlaxDartType<ContentInsertionConfiguration, readonly ["class", "flax.core/sdk_widgets#type:ContentInsertionConfiguration", readonly [], false]>;
export {};
