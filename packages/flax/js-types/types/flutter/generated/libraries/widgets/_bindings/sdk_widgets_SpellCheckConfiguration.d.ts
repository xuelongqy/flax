import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_SpellCheckService';
import '@flax/flutter/services/_bindings/sdk_services_SpellCheckService';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_EditableTextState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_EditableTextState';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_EditableText';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SpellCheckConfiguration extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/spell_check.dart::SpellCheckConfiguration": readonly [];
}> {
    readonly __SpellCheckConfiguration: unique symbol;
    readonly [_flaxDartTypeValue]: SpellCheckConfiguration;
    readonly spellCheckService: upstream0.SpellCheckService | null;
    readonly misspelledSelectionColor: upstream1.Color | null;
    readonly misspelledTextStyle: upstream2.TextStyle | null;
    readonly spellCheckSuggestionsToolbarBuilder: ((context: upstream3.BuildContext, editableTextState: Readonly<{
        "__flaxBound:package:flutter/src/widgets/editable_text.dart::EditableTextState": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream5.EditableText];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/services/autofill.dart::AutofillClient": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/automatic_keep_alive.dart::AutomaticKeepAliveClientMixin": readonly [upstream5.EditableText];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin": readonly [upstream5.EditableText];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextInputClient": readonly [];
    }>) => Widget) | null;
    readonly spellCheckEnabled: boolean;
    copyWith(options?: {
        misspelledSelectionColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        misspelledTextStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        spellCheckService?: Readonly<{
            "__flaxBound:package:flutter/src/services/spell_check.dart::SpellCheckService": readonly [];
        }> | null | undefined;
        spellCheckSuggestionsToolbarBuilder?: ((context: upstream3.BuildContext, editableTextState: upstream4.EditableTextState) => Widget) | null | undefined;
    }): SpellCheckConfiguration;
    toString(): string;
}
export declare function _SpellCheckConfigurationFactory(options?: {
    spellCheckService?: Readonly<{
        "__flaxBound:package:flutter/src/services/spell_check.dart::SpellCheckService": readonly [];
    }> | null | undefined;
    misspelledSelectionColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    misspelledTextStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    spellCheckSuggestionsToolbarBuilder?: ((context: upstream3.BuildContext, editableTextState: upstream4.EditableTextState) => Widget) | null | undefined;
}): SpellCheckConfiguration;
export declare namespace _SpellCheckConfigurationFactory {
    function disabled(): SpellCheckConfiguration;
}
export interface _SpellCheckConfigurationNative extends SpellCheckConfiguration {
    readonly [_flaxDartTypeValue]: _SpellCheckConfigurationNative;
    readonly [_flaxDartConstructors]?: {
        "": (options?: {
            spellCheckService?: Readonly<{
                "__flaxBound:package:flutter/src/services/spell_check.dart::SpellCheckService": readonly [];
            }> | null | undefined;
            misspelledSelectionColor?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            misspelledTextStyle?: (Readonly<{
                "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | null | undefined;
            spellCheckSuggestionsToolbarBuilder?: ((context: upstream3.BuildContext, editableTextState: upstream4.EditableTextState) => Widget) | null | undefined;
        }) => void;
        "disabled": () => void;
    };
    copyWith(options?: {
        spellCheckService?: Readonly<{
            "__flaxBound:package:flutter/src/services/spell_check.dart::SpellCheckService": readonly [];
        }> | null | undefined;
        misspelledSelectionColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        misspelledTextStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        spellCheckSuggestionsToolbarBuilder?: ((context: upstream3.BuildContext, editableTextState: upstream4.EditableTextState) => Widget) | null | undefined;
    }): SpellCheckConfiguration;
    toString(): string;
    get spellCheckService(): upstream0.SpellCheckService | null;
    get misspelledSelectionColor(): upstream1.Color | null;
    get misspelledTextStyle(): upstream2.TextStyle | null;
    get spellCheckSuggestionsToolbarBuilder(): ((context: upstream3.BuildContext, editableTextState: Readonly<{
        "__flaxBound:package:flutter/src/widgets/editable_text.dart::EditableTextState": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream5.EditableText];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/services/autofill.dart::AutofillClient": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/automatic_keep_alive.dart::AutomaticKeepAliveClientMixin": readonly [upstream5.EditableText];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/binding.dart::WidgetsBindingObserver": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/ticker_provider.dart::TickerProviderStateMixin": readonly [upstream5.EditableText];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/scheduler/ticker.dart::TickerProvider": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextSelectionDelegate": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextInputClient": readonly [];
    }>) => Widget) | null;
    get spellCheckEnabled(): boolean;
}
export declare abstract class _SpellCheckConfigurationNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SpellCheckConfiguration>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SpellCheckConfiguration;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:SpellCheckConfiguration", readonly [], false];
    constructor(options?: {
        spellCheckService?: Readonly<{
            "__flaxBound:package:flutter/src/services/spell_check.dart::SpellCheckService": readonly [];
        }> | null | undefined;
        misspelledSelectionColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        misspelledTextStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        spellCheckSuggestionsToolbarBuilder?: ((context: upstream3.BuildContext, editableTextState: upstream4.EditableTextState) => Widget) | null | undefined;
    });
    constructor(call: _FlaxProxySuper<_SpellCheckConfigurationNative>);
}
export declare namespace _SpellCheckConfigurationFactory {
    function implement(args: [options?: {
        spellCheckService?: Readonly<{
            "__flaxBound:package:flutter/src/services/spell_check.dart::SpellCheckService": readonly [];
        }> | null | undefined;
        misspelledSelectionColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        misspelledTextStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        spellCheckSuggestionsToolbarBuilder?: ((context: upstream3.BuildContext, editableTextState: upstream4.EditableTextState) => Widget) | null | undefined;
    }], implementation: {}): SpellCheckConfiguration;
}
declare const _SpellCheckConfigurationBinding: typeof _SpellCheckConfigurationFactory & (new (options?: {
    spellCheckService?: Readonly<{
        "__flaxBound:package:flutter/src/services/spell_check.dart::SpellCheckService": readonly [];
    }> | null | undefined;
    misspelledSelectionColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    misspelledTextStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    spellCheckSuggestionsToolbarBuilder?: ((context: upstream3.BuildContext, editableTextState: upstream4.EditableTextState) => Widget) | null | undefined;
}) => _SpellCheckConfigurationNative) & (new (call: _FlaxProxySuper<_SpellCheckConfigurationNative>) => _SpellCheckConfigurationNative);
export declare const SpellCheckConfiguration: typeof _SpellCheckConfigurationBinding & _FlaxInstanceType<SpellCheckConfiguration> & _FlaxDartType<SpellCheckConfiguration, readonly ["class", "flax.core/sdk_widgets#type:SpellCheckConfiguration", readonly [], false]>;
export {};
