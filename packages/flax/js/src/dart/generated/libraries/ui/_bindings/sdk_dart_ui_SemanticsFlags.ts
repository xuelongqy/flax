// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_CheckedState';
import '@flax/dart/ui/_bindings/sdk_dart_ui_CheckedState';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_Tristate';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Tristate';
import { _flaxMemberParameters48, _flaxMemberParameters40, _flaxMemberParameters164, _flaxMemberParameters0, _flaxMemberParameters165 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, proxyFactory as _flaxProxyFactory, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SemanticsFlags extends Readonly<{ "__flaxBound:dart:ui::SemanticsFlags": readonly [] }> { readonly __SemanticsFlags: unique symbol;
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
merge(other: Readonly<{ "__flaxBound:dart:ui::SemanticsFlags": readonly [] }>): SemanticsFlags;
copyWith(options?: {hasImplicitScrolling?: boolean | null | undefined; isAccessibilityFocusBlocked?: boolean | null | undefined; isButton?: boolean | null | undefined; isChecked?: upstream0.CheckedState | null | undefined; isEnabled?: upstream1.Tristate | null | undefined; isExpanded?: upstream1.Tristate | null | undefined; isFocused?: upstream1.Tristate | null | undefined; isHeader?: boolean | null | undefined; isHidden?: boolean | null | undefined; isImage?: boolean | null | undefined; isInMutuallyExclusiveGroup?: boolean | null | undefined; isKeyboardKey?: boolean | null | undefined; isLink?: boolean | null | undefined; isLiveRegion?: boolean | null | undefined; isMultiline?: boolean | null | undefined; isObscured?: boolean | null | undefined; isReadOnly?: boolean | null | undefined; isRequired?: upstream1.Tristate | null | undefined; isSelected?: upstream1.Tristate | null | undefined; isSlider?: boolean | null | undefined; isTextField?: boolean | null | undefined; isToggled?: upstream1.Tristate | null | undefined; namesRoute?: boolean | null | undefined; scopesRoute?: boolean | null | undefined}): SemanticsFlags;
toStrings(): DartList<string>;
hasRepeatedFlags(other: Readonly<{ "__flaxBound:dart:ui::SemanticsFlags": readonly [] }>): boolean;
hasConflictingFlags(other: Readonly<{ "__flaxBound:dart:ui::SemanticsFlags": readonly [] }>): boolean;
}
defineObject("flax.core/sdk_dart_ui#type:SemanticsFlags", ["isChecked","isSelected","isEnabled","isToggled","isExpanded","isRequired","isFocused","isAccessibilityFocusBlocked","isButton","isTextField","isInMutuallyExclusiveGroup","isHeader","isObscured","scopesRoute","namesRoute","isHidden","isImage","isLiveRegion","hasImplicitScrolling","isMultiline","isReadOnly","isLink","isSlider","isKeyboardKey"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:SemanticsFlags", "object", {"merge":_flaxMemberParameters40,"copyWith":_flaxMemberParameters164,"toStrings":_flaxMemberParameters0,"hasRepeatedFlags":_flaxMemberParameters40,"hasConflictingFlags":_flaxMemberParameters40}, {}), []);
export function _SemanticsFlagsFactory(options: { isChecked?: upstream0.CheckedState | undefined; isSelected?: upstream1.Tristate | undefined; isEnabled?: upstream1.Tristate | undefined; isToggled?: upstream1.Tristate | undefined; isExpanded?: upstream1.Tristate | undefined; isRequired?: upstream1.Tristate | undefined; isFocused?: upstream1.Tristate | undefined; isButton?: boolean | undefined; isTextField?: boolean | undefined; isInMutuallyExclusiveGroup?: boolean | undefined; isHeader?: boolean | undefined; isObscured?: boolean | undefined; scopesRoute?: boolean | undefined; namesRoute?: boolean | undefined; isHidden?: boolean | undefined; isImage?: boolean | undefined; isLiveRegion?: boolean | undefined; hasImplicitScrolling?: boolean | undefined; isMultiline?: boolean | undefined; isReadOnly?: boolean | undefined; isLink?: boolean | undefined; isSlider?: boolean | undefined; isKeyboardKey?: boolean | undefined; isAccessibilityFocusBlocked?: boolean | undefined } = {}): SemanticsFlags {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_dart_ui#type:SemanticsFlags", "", [{"name":"isChecked"},{"name":"isSelected"},{"name":"isEnabled"},{"name":"isToggled"},{"name":"isExpanded"},{"name":"isRequired"},{"name":"isFocused"},{"name":"isButton"},{"name":"isTextField"},{"name":"isInMutuallyExclusiveGroup"},{"name":"isHeader"},{"name":"isObscured"},{"name":"scopesRoute"},{"name":"namesRoute"},{"name":"isHidden"},{"name":"isImage"},{"name":"isLiveRegion"},{"name":"hasImplicitScrolling"},{"name":"isMultiline"},{"name":"isReadOnly"},{"name":"isLink"},{"name":"isSlider"},{"name":"isKeyboardKey"},{"name":"isAccessibilityFocusBlocked"}], [], options) as SemanticsFlags;
}
const _SemanticsFlagsProxy = {type: "flax.core/sdk_dart_ui#type:SemanticsFlags", parameters: _flaxMemberParameters165, constructors: {"": _flaxMemberParameters165}, methods: {"merge":_flaxMemberParameters40,"copyWith":_flaxMemberParameters164,"toStrings":_flaxMemberParameters0,"hasRepeatedFlags":_flaxMemberParameters40,"hasConflictingFlags":_flaxMemberParameters40}, getters: ["isChecked","isSelected","isEnabled","isToggled","isExpanded","isRequired","isFocused","isAccessibilityFocusBlocked","isButton","isTextField","isInMutuallyExclusiveGroup","isHeader","isObscured","scopesRoute","namesRoute","isHidden","isImage","isLiveRegion","hasImplicitScrolling","isMultiline","isReadOnly","isLink","isSlider","isKeyboardKey"], setters: [], contextMembers: [], superMembers: ["get:isChecked","get:isSelected","get:isEnabled","get:isToggled","get:isExpanded","get:isRequired","get:isFocused","get:isAccessibilityFocusBlocked","get:isButton","get:isTextField","get:isInMutuallyExclusiveGroup","get:isHeader","get:isObscured","get:scopesRoute","get:namesRoute","get:isHidden","get:isImage","get:isLiveRegion","get:hasImplicitScrolling","get:isMultiline","get:isReadOnly","get:isLink","get:isSlider","get:isKeyboardKey","merge","copyWith","toStrings","hasRepeatedFlags","hasConflictingFlags"]} as const;
export interface _SemanticsFlagsNative extends SemanticsFlags {
readonly [_flaxDartTypeValue]: _SemanticsFlagsNative;

merge(other: Readonly<{ "__flaxBound:dart:ui::SemanticsFlags": readonly [] }>): SemanticsFlags;
copyWith(options?: {isChecked?: upstream0.CheckedState | null | undefined; isSelected?: upstream1.Tristate | null | undefined; isEnabled?: upstream1.Tristate | null | undefined; isToggled?: upstream1.Tristate | null | undefined; isExpanded?: upstream1.Tristate | null | undefined; isRequired?: upstream1.Tristate | null | undefined; isFocused?: upstream1.Tristate | null | undefined; isButton?: boolean | null | undefined; isTextField?: boolean | null | undefined; isInMutuallyExclusiveGroup?: boolean | null | undefined; isHeader?: boolean | null | undefined; isObscured?: boolean | null | undefined; scopesRoute?: boolean | null | undefined; namesRoute?: boolean | null | undefined; isHidden?: boolean | null | undefined; isImage?: boolean | null | undefined; isLiveRegion?: boolean | null | undefined; hasImplicitScrolling?: boolean | null | undefined; isMultiline?: boolean | null | undefined; isReadOnly?: boolean | null | undefined; isLink?: boolean | null | undefined; isSlider?: boolean | null | undefined; isKeyboardKey?: boolean | null | undefined; isAccessibilityFocusBlocked?: boolean | null | undefined}): SemanticsFlags;
toStrings(): DartList<string>;
hasRepeatedFlags(other: Readonly<{ "__flaxBound:dart:ui::SemanticsFlags": readonly [] }>): boolean;
hasConflictingFlags(other: Readonly<{ "__flaxBound:dart:ui::SemanticsFlags": readonly [] }>): boolean;
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
export abstract class _SemanticsFlagsNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SemanticsFlags>[typeof globalThis.Symbol.hasInstance];
static declare [_flaxDartTypeValue]: SemanticsFlags;
static declare [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:SemanticsFlags", readonly [], false];
constructor(options?: {isChecked?: upstream0.CheckedState | undefined; isSelected?: upstream1.Tristate | undefined; isEnabled?: upstream1.Tristate | undefined; isToggled?: upstream1.Tristate | undefined; isExpanded?: upstream1.Tristate | undefined; isRequired?: upstream1.Tristate | undefined; isFocused?: upstream1.Tristate | undefined; isButton?: boolean | undefined; isTextField?: boolean | undefined; isInMutuallyExclusiveGroup?: boolean | undefined; isHeader?: boolean | undefined; isObscured?: boolean | undefined; scopesRoute?: boolean | undefined; namesRoute?: boolean | undefined; isHidden?: boolean | undefined; isImage?: boolean | undefined; isLiveRegion?: boolean | undefined; hasImplicitScrolling?: boolean | undefined; isMultiline?: boolean | undefined; isReadOnly?: boolean | undefined; isLink?: boolean | undefined; isSlider?: boolean | undefined; isKeyboardKey?: boolean | undefined; isAccessibilityFocusBlocked?: boolean | undefined}) { super(_SemanticsFlagsProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_SemanticsFlagsNative.prototype, _SemanticsFlagsProxy);
export namespace _SemanticsFlagsFactory { export function implement(args: [options?: {isChecked?: upstream0.CheckedState | undefined; isSelected?: upstream1.Tristate | undefined; isEnabled?: upstream1.Tristate | undefined; isToggled?: upstream1.Tristate | undefined; isExpanded?: upstream1.Tristate | undefined; isRequired?: upstream1.Tristate | undefined; isFocused?: upstream1.Tristate | undefined; isButton?: boolean | undefined; isTextField?: boolean | undefined; isInMutuallyExclusiveGroup?: boolean | undefined; isHeader?: boolean | undefined; isObscured?: boolean | undefined; scopesRoute?: boolean | undefined; namesRoute?: boolean | undefined; isHidden?: boolean | undefined; isImage?: boolean | undefined; isLiveRegion?: boolean | undefined; hasImplicitScrolling?: boolean | undefined; isMultiline?: boolean | undefined; isReadOnly?: boolean | undefined; isLink?: boolean | undefined; isSlider?: boolean | undefined; isKeyboardKey?: boolean | undefined; isAccessibilityFocusBlocked?: boolean | undefined}], implementation: {}): SemanticsFlags {
return constructProxy(_SemanticsFlagsProxy, args, implementation) as SemanticsFlags; } }
const _SemanticsFlagsBinding = _flaxProxyFactory(_SemanticsFlagsFactory, _SemanticsFlagsNative) as unknown as typeof _SemanticsFlagsFactory & (new(options?: {isChecked?: upstream0.CheckedState | undefined; isSelected?: upstream1.Tristate | undefined; isEnabled?: upstream1.Tristate | undefined; isToggled?: upstream1.Tristate | undefined; isExpanded?: upstream1.Tristate | undefined; isRequired?: upstream1.Tristate | undefined; isFocused?: upstream1.Tristate | undefined; isButton?: boolean | undefined; isTextField?: boolean | undefined; isInMutuallyExclusiveGroup?: boolean | undefined; isHeader?: boolean | undefined; isObscured?: boolean | undefined; scopesRoute?: boolean | undefined; namesRoute?: boolean | undefined; isHidden?: boolean | undefined; isImage?: boolean | undefined; isLiveRegion?: boolean | undefined; hasImplicitScrolling?: boolean | undefined; isMultiline?: boolean | undefined; isReadOnly?: boolean | undefined; isLink?: boolean | undefined; isSlider?: boolean | undefined; isKeyboardKey?: boolean | undefined; isAccessibilityFocusBlocked?: boolean | undefined}) => _SemanticsFlagsNative);
export namespace _SemanticsFlagsFactory { export function setNone(value: Readonly<{ "__flaxBound:dart:ui::SemanticsFlags": readonly [] }>): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dart_ui#function:SemanticsFlags.none%3D", [value], _flaxMemberParameters48);
} }
export namespace _SemanticsFlagsFactory { export declare const none: SemanticsFlags; }
_flaxDefineStaticGetters(_SemanticsFlagsFactory, "flax.core/sdk_dart_ui#read:SemanticsFlags.", ["none"]);
export const SemanticsFlags: typeof _SemanticsFlagsBinding & _FlaxInstanceType<SemanticsFlags> & _FlaxDartType<SemanticsFlags, readonly ["class", "flax.core/sdk_dart_ui#type:SemanticsFlags", readonly [], false]> = _flaxBindInstanceType<SemanticsFlags, typeof _SemanticsFlagsBinding>(_SemanticsFlagsBinding, "flax.core/sdk_dart_ui#type:SemanticsFlags", ["dart:core::Object"]) as typeof _SemanticsFlagsBinding & _FlaxInstanceType<SemanticsFlags> & _FlaxDartType<SemanticsFlags, readonly ["class", "flax.core/sdk_dart_ui#type:SemanticsFlags", readonly [], false]>;
