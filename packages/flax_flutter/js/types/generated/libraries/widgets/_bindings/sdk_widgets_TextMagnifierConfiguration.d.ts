import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_MagnifierController';
import '@flax/flutter/widgets/_bindings/sdk_widgets_MagnifierController';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_ValueNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ValueNotifier';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_MagnifierInfo';
import '@flax/flutter/widgets/_bindings/sdk_widgets_MagnifierInfo';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TextMagnifierConfiguration extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/magnifier.dart::TextMagnifierConfiguration": readonly [];
}> {
    readonly __TextMagnifierConfiguration: unique symbol;
    readonly [_flaxDartTypeValue]: TextMagnifierConfiguration;
    readonly magnifierBuilder: ((context: upstream0.BuildContext, controller: Readonly<{
        "__flaxBound:package:flutter/src/widgets/magnifier.dart::MagnifierController": readonly [];
    }>, magnifierInfo: Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream3.MagnifierInfo];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream3.MagnifierInfo];
    }>) => Widget | null);
    readonly shouldDisplayHandlesInMagnifier: boolean;
}
export declare function _TextMagnifierConfigurationFactory(options?: {
    magnifierBuilder?: ((context: upstream0.BuildContext, controller: upstream1.MagnifierController, magnifierInfo: upstream2.ValueNotifier<upstream3.MagnifierInfo>) => Widget | null) | null | undefined;
    shouldDisplayHandlesInMagnifier?: boolean | undefined;
}): TextMagnifierConfiguration;
export interface _TextMagnifierConfigurationNative extends TextMagnifierConfiguration {
    readonly [_flaxDartTypeValue]: _TextMagnifierConfigurationNative;
    get magnifierBuilder(): ((context: upstream0.BuildContext, controller: Readonly<{
        "__flaxBound:package:flutter/src/widgets/magnifier.dart::MagnifierController": readonly [];
    }>, magnifierInfo: Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream3.MagnifierInfo];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream3.MagnifierInfo];
    }>) => Widget | null);
    get shouldDisplayHandlesInMagnifier(): boolean;
}
export declare abstract class _TextMagnifierConfigurationNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TextMagnifierConfiguration>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TextMagnifierConfiguration;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:TextMagnifierConfiguration", readonly [], false];
    constructor(options?: {
        magnifierBuilder?: ((context: upstream0.BuildContext, controller: upstream1.MagnifierController, magnifierInfo: upstream2.ValueNotifier<upstream3.MagnifierInfo>) => Widget | null) | null | undefined;
        shouldDisplayHandlesInMagnifier?: boolean | undefined;
    });
}
export declare namespace _TextMagnifierConfigurationFactory {
    function implement(args: [options?: {
        magnifierBuilder?: ((context: upstream0.BuildContext, controller: upstream1.MagnifierController, magnifierInfo: upstream2.ValueNotifier<upstream3.MagnifierInfo>) => Widget | null) | null | undefined;
        shouldDisplayHandlesInMagnifier?: boolean | undefined;
    }], implementation: {}): TextMagnifierConfiguration;
}
declare const _TextMagnifierConfigurationBinding: typeof _TextMagnifierConfigurationFactory & (new (options?: {
    magnifierBuilder?: ((context: upstream0.BuildContext, controller: upstream1.MagnifierController, magnifierInfo: upstream2.ValueNotifier<upstream3.MagnifierInfo>) => Widget | null) | null | undefined;
    shouldDisplayHandlesInMagnifier?: boolean | undefined;
}) => _TextMagnifierConfigurationNative);
export declare namespace _TextMagnifierConfigurationFactory {
    const disabled: TextMagnifierConfiguration;
}
export declare const TextMagnifierConfiguration: typeof _TextMagnifierConfigurationBinding & _FlaxInstanceType<TextMagnifierConfiguration> & _FlaxDartType<TextMagnifierConfiguration, readonly ["class", "flax.core/sdk_widgets#type:TextMagnifierConfiguration", readonly [], false]>;
export {};
