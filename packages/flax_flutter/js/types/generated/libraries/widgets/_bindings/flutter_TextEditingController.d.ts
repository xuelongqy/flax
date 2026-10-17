import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_TextSelection';
import '@flax/flutter/services/_bindings/flutter_TextSelection';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TextEditingController extends Omit<upstream0.Listenable, typeof _flaxDartTypeValue | "value" | "text" | "selection" | "hasListeners" | "addListener" | "removeListener" | "clear" | "clearComposing" | "dispose">, Omit<upstream1.ValueListenable<upstream2.TextEditingValue>, typeof _flaxDartTypeValue | "value" | "text" | "selection" | "hasListeners" | "addListener" | "removeListener" | "clear" | "clearComposing" | "dispose">, Readonly<{
    "__flaxBound:package:flutter/src/widgets/editable_text.dart::TextEditingController": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream2.TextEditingValue];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}> {
    readonly __TextEditingController: unique symbol;
    get value(): upstream2.TextEditingValue;
    get text(): string;
    get selection(): upstream3.TextSelection;
    readonly hasListeners: boolean;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    clear(): void;
    clearComposing(): void;
    dispose(): void;
    set text(value: string);
    set value(value: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
    }>);
    set selection(value: Readonly<{
        "__flaxBound:package:flutter/src/services/text_editing.dart::TextSelection": readonly [];
    }>);
}
export declare function _TextEditingControllerFactory(options?: {
    text?: string | null | undefined;
}): TextEditingController;
export declare namespace _TextEditingControllerFactory {
    function fromValue(value: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
    }> | null): TextEditingController;
}
export declare const TextEditingController: typeof _TextEditingControllerFactory & _FlaxInstanceType<TextEditingController> & _FlaxDartType<TextEditingController, readonly ["class", "flax.core/flutter#type:TextEditingController", readonly [], false]>;
