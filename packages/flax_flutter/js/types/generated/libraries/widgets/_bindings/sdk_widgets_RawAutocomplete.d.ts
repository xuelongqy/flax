import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartIterableInput, type DartList, type DartInput, type Widget } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_OptionsViewOpenDirection';
import '@flax/flutter/widgets/_bindings/sdk_widgets_OptionsViewOpenDirection';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_TextEditingController';
import '@flax/flutter/widgets/_bindings/flutter_TextEditingController';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/sdk_widgets_GlobalKey';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RawAutocomplete<T extends {} = {}> extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/autocomplete.dart::RawAutocomplete": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __RawAutocomplete: unique symbol;
    readonly [_flaxDartTypeValue]: RawAutocomplete<T>;
    readonly fieldViewBuilder: ((context: upstream2.BuildContext, textEditingController: Readonly<{
        "__flaxBound:package:flutter/src/widgets/editable_text.dart::TextEditingController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream3.TextEditingValue];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream3.TextEditingValue];
    }>, focusNode: Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>, onFieldSubmitted: (() => void)) => Widget) | null;
    readonly focusNode: upstream6.FocusNode | null;
    readonly optionsViewBuilder: ((context: upstream2.BuildContext, onSelected: ((option: T) => void), _flaxArg_6f7074696f6e73: DartIterableInput<T, (T | DartInput<T>)>) => Widget);
    readonly optionsViewOpenDirection: upstream4.OptionsViewOpenDirection;
    readonly displayStringForOption: ((option: (T | DartInput<T>)) => string);
    readonly onSelected: ((option: (T | DartInput<T>)) => void) | null;
    readonly optionsBuilder: ((textEditingValue: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
    }>) => DartIterable<T> | Promise<DartIterable<T>>);
    readonly textEditingController: upstream5.TextEditingController | null;
    readonly initialValue: upstream3.TextEditingValue | null;
    readonly key: upstream1.Key | null;
    createState(): upstream8.State<RawAutocomplete<T>>;
    createElement(): upstream9.StatefulElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream11.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream11.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream13.DiagnosticsTreeStyle | null | undefined;
    }): upstream12.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream12.DiagnosticsNode>;
}
export declare function _RawAutocompleteFactory<T extends {} = {}>(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    optionsViewBuilder: ((context: upstream2.BuildContext, onSelected: ((option: (T | _FlaxDartOutput<T>)) => void), _flaxArg_6f7074696f6e73: DartIterable<_FlaxDartOutput<T>>) => Widget);
    optionsBuilder: ((textEditingValue: upstream3.TextEditingValue) => DartIterableInput<_FlaxDartOutput<T>, (T | _FlaxDartOutput<T>)> | Promise<DartIterableInput<_FlaxDartOutput<T>, (T | _FlaxDartOutput<T>)>>);
    optionsViewOpenDirection?: upstream4.OptionsViewOpenDirection | undefined;
    displayStringForOption?: ((option: _FlaxDartOutput<T>) => string) | undefined;
    fieldViewBuilder?: ((context: upstream2.BuildContext, textEditingController: upstream5.TextEditingController, focusNode: upstream6.FocusNode, onFieldSubmitted: (() => void)) => Widget) | null | undefined;
    focusNode?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>) | null | undefined;
    onSelected?: ((option: _FlaxDartOutput<T>) => void) | null | undefined;
    textEditingController?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/editable_text.dart::TextEditingController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream3.TextEditingValue];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream3.TextEditingValue];
    }>) | null | undefined;
    initialValue?: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
    }> | null | undefined;
}): RawAutocomplete<T>;
export declare function _RawAutocompleteFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    optionsViewBuilder: ((context: upstream2.BuildContext, onSelected: ((option: {}) => void), _flaxArg_6f7074696f6e73: DartIterable<{}>) => Widget);
    optionsBuilder: ((textEditingValue: upstream3.TextEditingValue) => DartIterableInput<{}, {}> | Promise<DartIterableInput<{}, {}>>);
    optionsViewOpenDirection?: upstream4.OptionsViewOpenDirection | undefined;
    displayStringForOption?: ((option: {}) => string) | undefined;
    fieldViewBuilder?: ((context: upstream2.BuildContext, textEditingController: upstream5.TextEditingController, focusNode: upstream6.FocusNode, onFieldSubmitted: (() => void)) => Widget) | null | undefined;
    focusNode?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>) | null | undefined;
    onSelected?: ((option: {}) => void) | null | undefined;
    textEditingController?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/editable_text.dart::TextEditingController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream3.TextEditingValue];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream3.TextEditingValue];
    }>) | null | undefined;
    initialValue?: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
    }> | null | undefined;
}): RawAutocomplete<{}>;
export declare namespace _RawAutocompleteFactory {
    function _flaxDefault_onFieldSubmitted<T extends {} = {}>(key: Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::GlobalKey": readonly [upstream8.State<upstream0.StatefulWidget>];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }>): void;
    export const onFieldSubmitted: _FlaxDartCallable<typeof _flaxDefault_onFieldSubmitted, _FlaxSignature1>;
    export {};
}
export declare namespace _RawAutocompleteFactory {
    function defaultStringForOption(option: unknown | null): string;
}
export declare const RawAutocomplete: typeof _RawAutocompleteFactory & _FlaxInstanceType<RawAutocomplete<{}>> & _FlaxDartType<RawAutocomplete<{}>, readonly ["class", "flax.core/sdk_widgets#type:RawAutocomplete", readonly [readonly ["any", null, readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "fieldViewBuilder" | "focusNode" | "optionsViewBuilder" | "optionsViewOpenDirection" | "displayStringForOption" | "onSelected" | "optionsBuilder" | "textEditingController" | "initialValue" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/autocomplete.dart::RawAutocomplete" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? {
        (options: {
            key?: Readonly<{
                "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
            }> | null | undefined;
            optionsViewBuilder: ((context: upstream2.BuildContext, onSelected: ((option: (_Selected0 | DartInput<_Selected0>)) => void), _flaxArg_6f7074696f6e73: DartIterable<_Selected0>) => Widget);
            optionsBuilder: ((textEditingValue: upstream3.TextEditingValue) => DartIterableInput<_Selected0, (_Selected0 | DartInput<_Selected0>)> | Promise<DartIterableInput<_Selected0, (_Selected0 | DartInput<_Selected0>)>>);
            optionsViewOpenDirection?: upstream4.OptionsViewOpenDirection | undefined;
            displayStringForOption?: ((option: _Selected0) => string) | undefined;
            fieldViewBuilder?: ((context: upstream2.BuildContext, textEditingController: upstream5.TextEditingController, focusNode: upstream6.FocusNode, onFieldSubmitted: (() => void)) => Widget) | null | undefined;
            focusNode?: (Readonly<{
                "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
            }>) | null | undefined;
            onSelected?: ((option: _Selected0) => void) | null | undefined;
            textEditingController?: (Readonly<{
                "__flaxBound:package:flutter/src/widgets/editable_text.dart::TextEditingController": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream3.TextEditingValue];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream3.TextEditingValue];
            }>) | null | undefined;
            initialValue?: Readonly<{
                "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
            }> | null | undefined;
        }): RawAutocomplete<_Selected0>;
        readonly prototype: RawAutocomplete<_Selected0>;
    } & _FlaxInstanceType<RawAutocomplete<_Selected0>> & _FlaxDartType<RawAutocomplete<_Selected0>> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? (key: Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::GlobalKey": readonly [upstream8.State<upstream0.StatefulWidget>];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }>) => void : never : never;
}
export {};
