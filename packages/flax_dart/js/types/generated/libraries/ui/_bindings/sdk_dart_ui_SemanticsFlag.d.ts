import { type FlaxInstanceType as _FlaxInstanceType, type DartList } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SemanticsFlag extends Readonly<{
    "__flaxBound:dart:ui::SemanticsFlag": readonly [];
}> {
    readonly __SemanticsFlag: unique symbol;
    readonly [_flaxDartTypeValue]: SemanticsFlag;
    readonly index: number;
    readonly name: string;
    toString(): string;
}
export declare namespace _SemanticsFlagFactory {
    function implement(args: [], implementation: {
        toString: (() => string);
        get index(): number;
        get name(): string;
    }): SemanticsFlag;
}
export declare namespace _SemanticsFlagFactory {
    const hasCheckedState: SemanticsFlag;
}
export declare namespace _SemanticsFlagFactory {
    const isChecked: SemanticsFlag;
}
export declare namespace _SemanticsFlagFactory {
    const isCheckStateMixed: SemanticsFlag;
}
export declare namespace _SemanticsFlagFactory {
    const hasSelectedState: SemanticsFlag;
}
export declare namespace _SemanticsFlagFactory {
    const isSelected: SemanticsFlag;
}
export declare namespace _SemanticsFlagFactory {
    const isButton: SemanticsFlag;
}
export declare namespace _SemanticsFlagFactory {
    const isTextField: SemanticsFlag;
}
export declare namespace _SemanticsFlagFactory {
    const isSlider: SemanticsFlag;
}
export declare namespace _SemanticsFlagFactory {
    const isKeyboardKey: SemanticsFlag;
}
export declare namespace _SemanticsFlagFactory {
    const isReadOnly: SemanticsFlag;
}
export declare namespace _SemanticsFlagFactory {
    const isLink: SemanticsFlag;
}
export declare namespace _SemanticsFlagFactory {
    const isFocusable: SemanticsFlag;
}
export declare namespace _SemanticsFlagFactory {
    const isFocused: SemanticsFlag;
}
export declare namespace _SemanticsFlagFactory {
    const hasEnabledState: SemanticsFlag;
}
export declare namespace _SemanticsFlagFactory {
    const isEnabled: SemanticsFlag;
}
export declare namespace _SemanticsFlagFactory {
    const isInMutuallyExclusiveGroup: SemanticsFlag;
}
export declare namespace _SemanticsFlagFactory {
    const isHeader: SemanticsFlag;
}
export declare namespace _SemanticsFlagFactory {
    const isObscured: SemanticsFlag;
}
export declare namespace _SemanticsFlagFactory {
    const isMultiline: SemanticsFlag;
}
export declare namespace _SemanticsFlagFactory {
    const scopesRoute: SemanticsFlag;
}
export declare namespace _SemanticsFlagFactory {
    const namesRoute: SemanticsFlag;
}
export declare namespace _SemanticsFlagFactory {
    const isHidden: SemanticsFlag;
}
export declare namespace _SemanticsFlagFactory {
    const isImage: SemanticsFlag;
}
export declare namespace _SemanticsFlagFactory {
    const isLiveRegion: SemanticsFlag;
}
export declare namespace _SemanticsFlagFactory {
    const hasToggledState: SemanticsFlag;
}
export declare namespace _SemanticsFlagFactory {
    const isToggled: SemanticsFlag;
}
export declare namespace _SemanticsFlagFactory {
    const hasImplicitScrolling: SemanticsFlag;
}
export declare namespace _SemanticsFlagFactory {
    const hasExpandedState: SemanticsFlag;
}
export declare namespace _SemanticsFlagFactory {
    const isExpanded: SemanticsFlag;
}
export declare namespace _SemanticsFlagFactory {
    const hasRequiredState: SemanticsFlag;
}
export declare namespace _SemanticsFlagFactory {
    const isRequired: SemanticsFlag;
}
export declare namespace _SemanticsFlagFactory {
    const values: DartList<SemanticsFlag>;
}
export declare namespace _SemanticsFlagFactory {
    function fromIndex(index: number): SemanticsFlag | null;
}
export declare const SemanticsFlag: typeof _SemanticsFlagFactory & _FlaxInstanceType<SemanticsFlag> & _FlaxDartType<SemanticsFlag, readonly ["class", "flax.core/sdk_dart_ui#type:SemanticsFlag", readonly [], false]>;
