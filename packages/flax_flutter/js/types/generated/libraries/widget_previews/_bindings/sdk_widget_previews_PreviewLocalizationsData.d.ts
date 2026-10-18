import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartIterableInput, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_LocalizationsDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_LocalizationsDelegate';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface PreviewLocalizationsData extends Readonly<{
    "__flaxBound:package:flutter/src/widget_previews/widget_previews.dart::PreviewLocalizationsData": readonly [];
}> {
    readonly __PreviewLocalizationsData: unique symbol;
    readonly [_flaxDartTypeValue]: PreviewLocalizationsData;
}
export interface PreviewLocalizationsData {
    readonly [_flaxDartTypeValue]: PreviewLocalizationsData;
    get locale(): upstream0.Locale | null;
    get supportedLocales(): DartList<upstream0.Locale>;
    get localizationsDelegates(): DartIterable<upstream1.LocalizationsDelegate<unknown | null>> | null;
    get localeListResolutionCallback(): ((locales: DartListInput<upstream0.Locale, Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }>> | null, supportedLocales: DartIterableInput<upstream0.Locale, Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }>>) => upstream0.Locale | null) | null;
    get localeResolutionCallback(): ((locale: Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }> | null, supportedLocales: DartIterableInput<upstream0.Locale, Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }>>) => upstream0.Locale | null) | null;
}
export declare abstract class PreviewLocalizationsData extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PreviewLocalizationsData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: PreviewLocalizationsData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widget_previews#type:PreviewLocalizationsData", readonly [], false];
    constructor(options?: {
        locale?: Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null | undefined;
        supportedLocales?: DartListInput<upstream0.Locale, Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }>> | undefined;
        localizationsDelegates?: DartIterableInput<upstream1.LocalizationsDelegate<unknown | null>, Readonly<{
            "__flaxBound:package:flutter/src/widgets/localizations.dart::LocalizationsDelegate": readonly [unknown | null];
        }>> | null | undefined;
        localeListResolutionCallback?: ((locales: DartList<upstream0.Locale> | null, supportedLocales: DartIterable<upstream0.Locale>) => Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null) | null | undefined;
        localeResolutionCallback?: ((locale: upstream0.Locale | null, supportedLocales: DartIterable<upstream0.Locale>) => Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null) | null | undefined;
    });
}
export declare namespace PreviewLocalizationsData {
    function implement(args: [options?: {
        locale?: Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null | undefined;
        supportedLocales?: DartListInput<upstream0.Locale, Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }>> | undefined;
        localizationsDelegates?: DartIterableInput<upstream1.LocalizationsDelegate<unknown | null>, Readonly<{
            "__flaxBound:package:flutter/src/widgets/localizations.dart::LocalizationsDelegate": readonly [unknown | null];
        }>> | null | undefined;
        localeListResolutionCallback?: ((locales: DartList<upstream0.Locale> | null, supportedLocales: DartIterable<upstream0.Locale>) => Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null) | null | undefined;
        localeResolutionCallback?: ((locale: upstream0.Locale | null, supportedLocales: DartIterable<upstream0.Locale>) => Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null) | null | undefined;
    }], implementation: {}): PreviewLocalizationsData;
}
