import { type FlaxInstanceType as _FlaxInstanceType, type DartList } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_CheckedState';
import '@flax/dart/ui/_bindings/sdk_dart_ui_CheckedState';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Tristate';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Tristate';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface SemanticsFlags extends Readonly<{
    "__flaxBound:dart:ui::SemanticsFlags": readonly [];
}> {
    readonly __SemanticsFlags: unique symbol;
    readonly [_flaxDartTypeValue]: SemanticsFlags;
}
export interface SemanticsFlags {
    readonly [_flaxDartTypeValue]: SemanticsFlags;
    merge(other: Readonly<{
        "__flaxBound:dart:ui::SemanticsFlags": readonly [];
    }>): SemanticsFlags;
    copyWith(options?: {
        isChecked?: upstream0.CheckedState | null | undefined;
        isSelected?: upstream1.Tristate | null | undefined;
        isEnabled?: upstream1.Tristate | null | undefined;
        isToggled?: upstream1.Tristate | null | undefined;
        isExpanded?: upstream1.Tristate | null | undefined;
        isRequired?: upstream1.Tristate | null | undefined;
        isFocused?: upstream1.Tristate | null | undefined;
        isButton?: boolean | null | undefined;
        isTextField?: boolean | null | undefined;
        isInMutuallyExclusiveGroup?: boolean | null | undefined;
        isHeader?: boolean | null | undefined;
        isObscured?: boolean | null | undefined;
        scopesRoute?: boolean | null | undefined;
        namesRoute?: boolean | null | undefined;
        isHidden?: boolean | null | undefined;
        isImage?: boolean | null | undefined;
        isLiveRegion?: boolean | null | undefined;
        hasImplicitScrolling?: boolean | null | undefined;
        isMultiline?: boolean | null | undefined;
        isReadOnly?: boolean | null | undefined;
        isLink?: boolean | null | undefined;
        isSlider?: boolean | null | undefined;
        isKeyboardKey?: boolean | null | undefined;
        isAccessibilityFocusBlocked?: boolean | null | undefined;
    }): SemanticsFlags;
    toStrings(): DartList<string>;
    hasRepeatedFlags(other: Readonly<{
        "__flaxBound:dart:ui::SemanticsFlags": readonly [];
    }>): boolean;
    hasConflictingFlags(other: Readonly<{
        "__flaxBound:dart:ui::SemanticsFlags": readonly [];
    }>): boolean;
    get isChecked(): upstream0.CheckedState;
    get isSelected(): upstream1.Tristate;
    get isEnabled(): upstream1.Tristate;
    get isToggled(): upstream1.Tristate;
    get isExpanded(): upstream1.Tristate;
    get isRequired(): upstream1.Tristate;
    get isFocused(): upstream1.Tristate;
    get isAccessibilityFocusBlocked(): boolean;
    get isButton(): boolean;
    get isTextField(): boolean;
    get isInMutuallyExclusiveGroup(): boolean;
    get isHeader(): boolean;
    get isObscured(): boolean;
    get scopesRoute(): boolean;
    get namesRoute(): boolean;
    get isHidden(): boolean;
    get isImage(): boolean;
    get isLiveRegion(): boolean;
    get hasImplicitScrolling(): boolean;
    get isMultiline(): boolean;
    get isReadOnly(): boolean;
    get isLink(): boolean;
    get isSlider(): boolean;
    get isKeyboardKey(): boolean;
}
export declare abstract class SemanticsFlags extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SemanticsFlags>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SemanticsFlags;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:SemanticsFlags", readonly [], false];
    constructor(options?: {
        isChecked?: upstream0.CheckedState | undefined;
        isSelected?: upstream1.Tristate | undefined;
        isEnabled?: upstream1.Tristate | undefined;
        isToggled?: upstream1.Tristate | undefined;
        isExpanded?: upstream1.Tristate | undefined;
        isRequired?: upstream1.Tristate | undefined;
        isFocused?: upstream1.Tristate | undefined;
        isButton?: boolean | undefined;
        isTextField?: boolean | undefined;
        isInMutuallyExclusiveGroup?: boolean | undefined;
        isHeader?: boolean | undefined;
        isObscured?: boolean | undefined;
        scopesRoute?: boolean | undefined;
        namesRoute?: boolean | undefined;
        isHidden?: boolean | undefined;
        isImage?: boolean | undefined;
        isLiveRegion?: boolean | undefined;
        hasImplicitScrolling?: boolean | undefined;
        isMultiline?: boolean | undefined;
        isReadOnly?: boolean | undefined;
        isLink?: boolean | undefined;
        isSlider?: boolean | undefined;
        isKeyboardKey?: boolean | undefined;
        isAccessibilityFocusBlocked?: boolean | undefined;
    });
}
export declare namespace SemanticsFlags {
    function implement(args: [options?: {
        isChecked?: upstream0.CheckedState | undefined;
        isSelected?: upstream1.Tristate | undefined;
        isEnabled?: upstream1.Tristate | undefined;
        isToggled?: upstream1.Tristate | undefined;
        isExpanded?: upstream1.Tristate | undefined;
        isRequired?: upstream1.Tristate | undefined;
        isFocused?: upstream1.Tristate | undefined;
        isButton?: boolean | undefined;
        isTextField?: boolean | undefined;
        isInMutuallyExclusiveGroup?: boolean | undefined;
        isHeader?: boolean | undefined;
        isObscured?: boolean | undefined;
        scopesRoute?: boolean | undefined;
        namesRoute?: boolean | undefined;
        isHidden?: boolean | undefined;
        isImage?: boolean | undefined;
        isLiveRegion?: boolean | undefined;
        hasImplicitScrolling?: boolean | undefined;
        isMultiline?: boolean | undefined;
        isReadOnly?: boolean | undefined;
        isLink?: boolean | undefined;
        isSlider?: boolean | undefined;
        isKeyboardKey?: boolean | undefined;
        isAccessibilityFocusBlocked?: boolean | undefined;
    }], implementation: {}): SemanticsFlags;
}
export declare namespace SemanticsFlags {
    function setNone(value: Readonly<{
        "__flaxBound:dart:ui::SemanticsFlags": readonly [];
    }>): void;
}
export declare namespace SemanticsFlags {
    const none: SemanticsFlags;
}
