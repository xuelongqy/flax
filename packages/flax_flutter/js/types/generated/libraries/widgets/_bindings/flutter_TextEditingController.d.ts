import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_TextSelection';
import '@flax/flutter/services/_bindings/flutter_TextSelection';
export interface TextEditingController extends upstream0.Listenable, upstream1.ValueListenable<upstream2.TextEditingValue>, Readonly<{
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
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    clear(): void;
    clearComposing(): void;
    dispose(): void;
    set text(value: string);
    set value(value: upstream2.TextEditingValue);
    set selection(value: upstream3.TextSelection);
}
export declare function TextEditingController(options?: {
    text?: string | null | undefined;
}): TextEditingController;
export declare namespace TextEditingController {
    function fromValue(value: upstream2.TextEditingValue | null): TextEditingController;
}
