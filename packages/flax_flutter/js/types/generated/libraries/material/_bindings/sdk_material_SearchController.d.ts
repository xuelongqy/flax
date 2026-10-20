import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_TextEditingController';
import '@flax/flutter/widgets/_bindings/flutter_TextEditingController';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_ValueNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ValueNotifier';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream6 from '@flax/flutter/services/_bindings/flutter_TextSelection';
import '@flax/flutter/services/_bindings/flutter_TextSelection';
import type * as upstream7 from '@flax/flutter/painting/_bindings/sdk_painting_TextSpan';
import '@flax/flutter/painting/_bindings/sdk_painting_TextSpan';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SearchController extends Omit<upstream0.TextEditingController, _flaxOwnMembers0>, Omit<upstream1.ValueNotifier<upstream2.TextEditingValue>, _flaxOwnMembers0 | keyof upstream0.TextEditingController>, Omit<upstream3.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.TextEditingController | keyof upstream1.ValueNotifier<upstream2.TextEditingValue>>, Omit<upstream4.Listenable, _flaxOwnMembers0 | keyof upstream0.TextEditingController | keyof upstream1.ValueNotifier<upstream2.TextEditingValue> | keyof upstream3.ChangeNotifier>, Omit<upstream5.ValueListenable<upstream2.TextEditingValue>, _flaxOwnMembers0 | keyof upstream0.TextEditingController | keyof upstream1.ValueNotifier<upstream2.TextEditingValue> | keyof upstream3.ChangeNotifier | keyof upstream4.Listenable>, Readonly<{
    "__flaxBound:package:flutter/src/material/search_anchor.dart::SearchController": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/editable_text.dart::TextEditingController": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream2.TextEditingValue];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream2.TextEditingValue];
}> {
    readonly __SearchController: unique symbol;
    readonly [_flaxDartTypeValue]: SearchController;
    get text(): string;
    get selection(): upstream6.TextSelection;
    get value(): upstream2.TextEditingValue;
    readonly hasListeners: boolean;
    readonly isAttached: boolean;
    readonly isOpen: boolean;
    buildTextSpan(options: {
        context: upstream8.BuildContext;
        style?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        withComposing: boolean;
    }): upstream7.TextSpan;
    clear(): void;
    clearComposing(): void;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    toString(): string;
    openView(): void;
    closeView(selectedText: string | null): void;
    set text(value: string);
    set value(value: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
    }>);
    set selection(value: Readonly<{
        "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::TextRange": readonly [];
    }>);
}
export declare function _SearchControllerFactory(): SearchController;
export interface _SearchControllerNative extends SearchController {
    readonly [_flaxDartTypeValue]: _SearchControllerNative;
    buildTextSpan(options: {
        context: upstream8.BuildContext;
        style?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        withComposing: boolean;
    }): upstream7.TextSpan;
    clear(): void;
    clearComposing(): void;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    toString(): string;
    openView(): void;
    closeView(selectedText: string | null): void;
    get isAttached(): boolean;
    get isOpen(): boolean;
    get text(): string;
    get selection(): upstream6.TextSelection;
    get value(): upstream2.TextEditingValue;
    get hasListeners(): boolean;
    set text(value: string);
    set value(value: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
    }>);
    set selection(value: Readonly<{
        "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::TextRange": readonly [];
    }>);
}
export declare abstract class _SearchControllerNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SearchController>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SearchController;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:SearchController", readonly [], false];
    constructor();
}
export declare namespace _SearchControllerFactory {
    function implement(args: [], implementation: {}): SearchController;
}
declare const _SearchControllerBinding: typeof _SearchControllerFactory & (new () => _SearchControllerNative);
export declare const SearchController: typeof _SearchControllerBinding & _FlaxInstanceType<SearchController> & _FlaxDartType<SearchController, readonly ["class", "flax.core/sdk_material#type:SearchController", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "text" | "selection" | "value" | "hasListeners" | "isAttached" | "isOpen" | "buildTextSpan" | "clear" | "clearComposing" | "addListener" | "removeListener" | "dispose" | "toString" | "openView" | "closeView" | "__flaxBound:package:flutter/src/material/search_anchor.dart::SearchController" | "__flaxBound:package:flutter/src/widgets/editable_text.dart::TextEditingController" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable";
export {};
