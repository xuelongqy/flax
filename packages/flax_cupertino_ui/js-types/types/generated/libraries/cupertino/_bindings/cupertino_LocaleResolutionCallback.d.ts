import { type DartIterable, type DartIterableInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
export type LocaleResolutionCallback = ((locale: Readonly<{
    "__flaxBound:dart:ui::Locale": readonly [];
}> | null, supportedLocales: DartIterableInput<upstream0.Locale, Readonly<{
    "__flaxBound:dart:ui::Locale": readonly [];
}>>) => upstream0.Locale | null);
export type LocaleResolutionCallbackInput = ((locale: upstream0.Locale | null, supportedLocales: DartIterable<upstream0.Locale>) => Readonly<{
    "__flaxBound:dart:ui::Locale": readonly [];
}> | null);
