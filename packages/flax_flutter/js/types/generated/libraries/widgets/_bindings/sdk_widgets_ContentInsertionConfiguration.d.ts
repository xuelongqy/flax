import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_KeyboardInsertedContent';
import '@flax/flutter/services/_bindings/sdk_services_KeyboardInsertedContent';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ContentInsertionConfiguration extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/editable_text.dart::ContentInsertionConfiguration": readonly [];
}> {
    readonly __ContentInsertionConfiguration: unique symbol;
    readonly [_flaxDartTypeValue]: ContentInsertionConfiguration;
}
export interface ContentInsertionConfiguration {
    readonly [_flaxDartTypeValue]: ContentInsertionConfiguration;
    get onContentInserted(): ((value: Readonly<{
        "__flaxBound:package:flutter/src/services/keyboard_inserted_content.dart::KeyboardInsertedContent": readonly [];
    }>) => void);
    get allowedMimeTypes(): DartList<string>;
}
export declare abstract class ContentInsertionConfiguration extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ContentInsertionConfiguration>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ContentInsertionConfiguration;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:ContentInsertionConfiguration", readonly [], false];
    constructor(options: {
        onContentInserted: ((value: upstream0.KeyboardInsertedContent) => void);
        allowedMimeTypes?: DartListInput<string, string> | undefined;
    });
}
export declare namespace ContentInsertionConfiguration {
    function implement(args: [options: {
        onContentInserted: ((value: upstream0.KeyboardInsertedContent) => void);
        allowedMimeTypes?: DartListInput<string, string> | undefined;
    }], implementation: {}): ContentInsertionConfiguration;
}
