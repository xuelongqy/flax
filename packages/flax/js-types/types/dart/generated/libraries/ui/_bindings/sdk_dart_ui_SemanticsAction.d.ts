import { type FlaxInstanceType as _FlaxInstanceType, type DartList } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SemanticsAction extends Readonly<{
    "__flaxBound:dart:ui::SemanticsAction": readonly [];
}> {
    readonly __SemanticsAction: unique symbol;
    readonly [_flaxDartTypeValue]: SemanticsAction;
    readonly index: number;
    readonly name: string;
    toString(): string;
}
export declare namespace _SemanticsActionFactory {
    function implement(args: [], implementation: {
        toString: (() => string);
        get index(): number;
        get name(): string;
    }): SemanticsAction;
}
export declare namespace _SemanticsActionFactory {
    const tap: SemanticsAction;
}
export declare namespace _SemanticsActionFactory {
    const longPress: SemanticsAction;
}
export declare namespace _SemanticsActionFactory {
    const scrollLeft: SemanticsAction;
}
export declare namespace _SemanticsActionFactory {
    const scrollRight: SemanticsAction;
}
export declare namespace _SemanticsActionFactory {
    const scrollUp: SemanticsAction;
}
export declare namespace _SemanticsActionFactory {
    const scrollDown: SemanticsAction;
}
export declare namespace _SemanticsActionFactory {
    const scrollToOffset: SemanticsAction;
}
export declare namespace _SemanticsActionFactory {
    const increase: SemanticsAction;
}
export declare namespace _SemanticsActionFactory {
    const decrease: SemanticsAction;
}
export declare namespace _SemanticsActionFactory {
    const showOnScreen: SemanticsAction;
}
export declare namespace _SemanticsActionFactory {
    const moveCursorForwardByCharacter: SemanticsAction;
}
export declare namespace _SemanticsActionFactory {
    const moveCursorBackwardByCharacter: SemanticsAction;
}
export declare namespace _SemanticsActionFactory {
    const setText: SemanticsAction;
}
export declare namespace _SemanticsActionFactory {
    const setSelection: SemanticsAction;
}
export declare namespace _SemanticsActionFactory {
    const copy: SemanticsAction;
}
export declare namespace _SemanticsActionFactory {
    const cut: SemanticsAction;
}
export declare namespace _SemanticsActionFactory {
    const paste: SemanticsAction;
}
export declare namespace _SemanticsActionFactory {
    const didGainAccessibilityFocus: SemanticsAction;
}
export declare namespace _SemanticsActionFactory {
    const didLoseAccessibilityFocus: SemanticsAction;
}
export declare namespace _SemanticsActionFactory {
    const customAction: SemanticsAction;
}
export declare namespace _SemanticsActionFactory {
    const dismiss: SemanticsAction;
}
export declare namespace _SemanticsActionFactory {
    const moveCursorForwardByWord: SemanticsAction;
}
export declare namespace _SemanticsActionFactory {
    const moveCursorBackwardByWord: SemanticsAction;
}
export declare namespace _SemanticsActionFactory {
    const focus: SemanticsAction;
}
export declare namespace _SemanticsActionFactory {
    const expand: SemanticsAction;
}
export declare namespace _SemanticsActionFactory {
    const collapse: SemanticsAction;
}
export declare namespace _SemanticsActionFactory {
    const values: DartList<SemanticsAction>;
}
export declare namespace _SemanticsActionFactory {
    function fromIndex(index: number): SemanticsAction | null;
}
export declare const SemanticsAction: typeof _SemanticsActionFactory & _FlaxInstanceType<SemanticsAction> & _FlaxDartType<SemanticsAction, readonly ["class", "flax.core/sdk_dart_ui#type:SemanticsAction", readonly [], false]>;
