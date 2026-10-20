import { type FlaxInstanceType as _FlaxInstanceType, type DartList } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_CheckedState';
import '@flax/dart/ui/_bindings/sdk_dart_ui_CheckedState';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Tristate';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Tristate';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SemanticsFlags extends Readonly<{
    "__flaxBound:dart:ui::SemanticsFlags": readonly [];
}> {
    readonly __SemanticsFlags: unique symbol;
    readonly [_flaxDartTypeValue]: SemanticsFlags;
    readonly isChecked: upstream0.CheckedState;
    readonly isSelected: upstream1.Tristate;
    readonly isEnabled: upstream1.Tristate;
    readonly isToggled: upstream1.Tristate;
    readonly isExpanded: upstream1.Tristate;
    readonly isRequired: upstream1.Tristate;
    readonly isFocused: upstream1.Tristate;
    readonly isAccessibilityFocusBlocked: boolean;
    readonly isButton: boolean;
    readonly isTextField: boolean;
    readonly isInMutuallyExclusiveGroup: boolean;
    readonly isHeader: boolean;
    readonly isObscured: boolean;
    readonly scopesRoute: boolean;
    readonly namesRoute: boolean;
    readonly isHidden: boolean;
    readonly isImage: boolean;
    readonly isLiveRegion: boolean;
    readonly hasImplicitScrolling: boolean;
    readonly isMultiline: boolean;
    readonly isReadOnly: boolean;
    readonly isLink: boolean;
    readonly isSlider: boolean;
    readonly isKeyboardKey: boolean;
    merge(other: Readonly<{
        "__flaxBound:dart:ui::SemanticsFlags": readonly [];
    }>): SemanticsFlags;
    copyWith(options?: {
        hasImplicitScrolling?: boolean | null | undefined;
        isAccessibilityFocusBlocked?: boolean | null | undefined;
        isButton?: boolean | null | undefined;
        isChecked?: upstream0.CheckedState | null | undefined;
        isEnabled?: upstream1.Tristate | null | undefined;
        isExpanded?: upstream1.Tristate | null | undefined;
        isFocused?: upstream1.Tristate | null | undefined;
        isHeader?: boolean | null | undefined;
        isHidden?: boolean | null | undefined;
        isImage?: boolean | null | undefined;
        isInMutuallyExclusiveGroup?: boolean | null | undefined;
        isKeyboardKey?: boolean | null | undefined;
        isLink?: boolean | null | undefined;
        isLiveRegion?: boolean | null | undefined;
        isMultiline?: boolean | null | undefined;
        isObscured?: boolean | null | undefined;
        isReadOnly?: boolean | null | undefined;
        isRequired?: upstream1.Tristate | null | undefined;
        isSelected?: upstream1.Tristate | null | undefined;
        isSlider?: boolean | null | undefined;
        isTextField?: boolean | null | undefined;
        isToggled?: upstream1.Tristate | null | undefined;
        namesRoute?: boolean | null | undefined;
        scopesRoute?: boolean | null | undefined;
    }): SemanticsFlags;
    toStrings(): DartList<string>;
    hasRepeatedFlags(other: Readonly<{
        "__flaxBound:dart:ui::SemanticsFlags": readonly [];
    }>): boolean;
    hasConflictingFlags(other: Readonly<{
        "__flaxBound:dart:ui::SemanticsFlags": readonly [];
    }>): boolean;
}
export declare function _SemanticsFlagsFactory(options?: {
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
}): SemanticsFlags;
export interface _SemanticsFlagsNative extends SemanticsFlags {
    readonly [_flaxDartTypeValue]: _SemanticsFlagsNative;
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
export declare abstract class _SemanticsFlagsNative extends _FlaxProxyBase {
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
export declare namespace _SemanticsFlagsFactory {
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
declare const _SemanticsFlagsBinding: typeof _SemanticsFlagsFactory & (new (options?: {
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
}) => _SemanticsFlagsNative);
export declare namespace _SemanticsFlagsFactory {
    function setNone(value: Readonly<{
        "__flaxBound:dart:ui::SemanticsFlags": readonly [];
    }>): void;
}
export declare namespace _SemanticsFlagsFactory {
    const none: SemanticsFlags;
}
export declare const SemanticsFlags: typeof _SemanticsFlagsBinding & _FlaxInstanceType<SemanticsFlags> & _FlaxDartType<SemanticsFlags, readonly ["class", "flax.core/sdk_dart_ui#type:SemanticsFlags", readonly [], false]>;
export {};
