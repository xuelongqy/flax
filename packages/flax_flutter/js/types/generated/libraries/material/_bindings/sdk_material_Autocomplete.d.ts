import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartIterableInput, type DartList, type DartInput, type Widget } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_TextEditingController';
import '@flax/flutter/widgets/_bindings/flutter_TextEditingController';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_OptionsViewOpenDirection';
import '@flax/flutter/widgets/_bindings/sdk_widgets_OptionsViewOpenDirection';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Autocomplete<T extends {} = {}> extends _FlaxDartWidget, Omit<upstream0.StatelessWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatelessWidget>, Readonly<{
    "__flaxBound:package:flutter/src/material/autocomplete.dart::Autocomplete": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __Autocomplete: unique symbol;
    readonly [_flaxDartTypeValue]: Autocomplete<T>;
    readonly displayStringForOption: ((option: (T | DartInput<T>)) => string);
    readonly fieldViewBuilder: ((context: upstream3.BuildContext, textEditingController: Readonly<{
        "__flaxBound:package:flutter/src/widgets/editable_text.dart::TextEditingController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream2.TextEditingValue];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream2.TextEditingValue];
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
    }>, onFieldSubmitted: (() => void)) => Widget);
    readonly focusNode: upstream5.FocusNode | null;
    readonly onSelected: ((option: (T | DartInput<T>)) => void) | null;
    readonly optionsBuilder: ((textEditingValue: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
    }>) => DartIterable<T> | Promise<DartIterable<T>>);
    readonly optionsViewBuilder: ((context: upstream3.BuildContext, onSelected: ((option: T) => void), _flaxArg_6f7074696f6e73: DartIterableInput<T, (T | DartInput<T>)>) => Widget) | null;
    readonly optionsViewOpenDirection: upstream6.OptionsViewOpenDirection;
    readonly optionsMaxHeight: number;
    readonly textEditingController: upstream4.TextEditingController | null;
    readonly initialValue: upstream2.TextEditingValue | null;
    readonly key: upstream1.Key | null;
    build(context: upstream3.BuildContext): Widget;
    createElement(): upstream7.StatelessElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream9.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream9.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream11.DiagnosticsTreeStyle | null | undefined;
    }): upstream10.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream10.DiagnosticsNode>;
}
export declare function _AutocompleteFactory<T extends {} = {}>(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    optionsBuilder: ((textEditingValue: upstream2.TextEditingValue) => DartIterableInput<_FlaxDartOutput<T>, (T | _FlaxDartOutput<T>)> | Promise<DartIterableInput<_FlaxDartOutput<T>, (T | _FlaxDartOutput<T>)>>);
    displayStringForOption?: ((option: _FlaxDartOutput<T>) => string) | undefined;
    fieldViewBuilder?: ((context: upstream3.BuildContext, textEditingController: upstream4.TextEditingController, focusNode: upstream5.FocusNode, onFieldSubmitted: (() => void)) => Widget) | undefined;
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
    optionsMaxHeight?: number | undefined;
    optionsViewBuilder?: ((context: upstream3.BuildContext, onSelected: ((option: (T | _FlaxDartOutput<T>)) => void), _flaxArg_6f7074696f6e73: DartIterable<_FlaxDartOutput<T>>) => Widget) | null | undefined;
    optionsViewOpenDirection?: upstream6.OptionsViewOpenDirection | undefined;
    textEditingController?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/editable_text.dart::TextEditingController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream2.TextEditingValue];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream2.TextEditingValue];
    }>) | null | undefined;
    initialValue?: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
    }> | null | undefined;
}): Autocomplete<T>;
export declare function _AutocompleteFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    optionsBuilder: ((textEditingValue: upstream2.TextEditingValue) => DartIterableInput<{}, {}> | Promise<DartIterableInput<{}, {}>>);
    displayStringForOption?: ((option: {}) => string) | undefined;
    fieldViewBuilder?: ((context: upstream3.BuildContext, textEditingController: upstream4.TextEditingController, focusNode: upstream5.FocusNode, onFieldSubmitted: (() => void)) => Widget) | undefined;
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
    optionsMaxHeight?: number | undefined;
    optionsViewBuilder?: ((context: upstream3.BuildContext, onSelected: ((option: {}) => void), _flaxArg_6f7074696f6e73: DartIterable<{}>) => Widget) | null | undefined;
    optionsViewOpenDirection?: upstream6.OptionsViewOpenDirection | undefined;
    textEditingController?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/editable_text.dart::TextEditingController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream2.TextEditingValue];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream2.TextEditingValue];
    }>) | null | undefined;
    initialValue?: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
    }> | null | undefined;
}): Autocomplete<{}>;
export declare const Autocomplete: typeof _AutocompleteFactory & _FlaxInstanceType<Autocomplete<{}>> & _FlaxDartType<Autocomplete<{}>, readonly ["class", "flax.core/sdk_material#type:Autocomplete", readonly [readonly ["any", null, readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "displayStringForOption" | "fieldViewBuilder" | "focusNode" | "onSelected" | "optionsBuilder" | "optionsViewBuilder" | "optionsViewOpenDirection" | "optionsMaxHeight" | "textEditingController" | "initialValue" | "key" | "build" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/material/autocomplete.dart::Autocomplete" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? {
        (options: {
            key?: Readonly<{
                "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
            }> | null | undefined;
            optionsBuilder: ((textEditingValue: upstream2.TextEditingValue) => DartIterableInput<_Selected0, (_Selected0 | DartInput<_Selected0>)> | Promise<DartIterableInput<_Selected0, (_Selected0 | DartInput<_Selected0>)>>);
            displayStringForOption?: ((option: _Selected0) => string) | undefined;
            fieldViewBuilder?: ((context: upstream3.BuildContext, textEditingController: upstream4.TextEditingController, focusNode: upstream5.FocusNode, onFieldSubmitted: (() => void)) => Widget) | undefined;
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
            optionsMaxHeight?: number | undefined;
            optionsViewBuilder?: ((context: upstream3.BuildContext, onSelected: ((option: (_Selected0 | DartInput<_Selected0>)) => void), _flaxArg_6f7074696f6e73: DartIterable<_Selected0>) => Widget) | null | undefined;
            optionsViewOpenDirection?: upstream6.OptionsViewOpenDirection | undefined;
            textEditingController?: (Readonly<{
                "__flaxBound:package:flutter/src/widgets/editable_text.dart::TextEditingController": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream2.TextEditingValue];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream2.TextEditingValue];
            }>) | null | undefined;
            initialValue?: Readonly<{
                "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
            }> | null | undefined;
        }): Autocomplete<_Selected0>;
        readonly prototype: Autocomplete<_Selected0>;
    } & _FlaxInstanceType<Autocomplete<_Selected0>> & _FlaxDartType<Autocomplete<_Selected0>> : never : never;
}
export {};
