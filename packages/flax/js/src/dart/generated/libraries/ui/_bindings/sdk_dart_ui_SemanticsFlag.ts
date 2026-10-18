// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [] as const;
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SemanticsFlag extends Readonly<{ "__flaxBound:dart:ui::SemanticsFlag": readonly [] }> { readonly __SemanticsFlag: unique symbol;
readonly [_flaxDartTypeValue]: SemanticsFlag;

readonly index: number;
readonly name: string;
toString(): string;
}
defineObject("flax.core/sdk_dart_ui#type:SemanticsFlag", ["index","name"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:SemanticsFlag", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _SemanticsFlagProxy = {type: "flax.core/sdk_dart_ui#type:SemanticsFlag", parameters: [], constructors: {}, methods: {"toString":_flaxMemberParameters0}, getters: ["index","name"], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _SemanticsFlagFactory { export function implement(args: [], implementation: {toString: (() => string); get index(): number; get name(): string}): SemanticsFlag {
return constructProxy(_SemanticsFlagProxy, args, implementation) as SemanticsFlag; } }
export namespace _SemanticsFlagFactory { export declare const hasCheckedState: SemanticsFlag; }
export namespace _SemanticsFlagFactory { export declare const isChecked: SemanticsFlag; }
export namespace _SemanticsFlagFactory { export declare const isCheckStateMixed: SemanticsFlag; }
export namespace _SemanticsFlagFactory { export declare const hasSelectedState: SemanticsFlag; }
export namespace _SemanticsFlagFactory { export declare const isSelected: SemanticsFlag; }
export namespace _SemanticsFlagFactory { export declare const isButton: SemanticsFlag; }
export namespace _SemanticsFlagFactory { export declare const isTextField: SemanticsFlag; }
export namespace _SemanticsFlagFactory { export declare const isSlider: SemanticsFlag; }
export namespace _SemanticsFlagFactory { export declare const isKeyboardKey: SemanticsFlag; }
export namespace _SemanticsFlagFactory { export declare const isReadOnly: SemanticsFlag; }
export namespace _SemanticsFlagFactory { export declare const isLink: SemanticsFlag; }
export namespace _SemanticsFlagFactory { export declare const isFocusable: SemanticsFlag; }
export namespace _SemanticsFlagFactory { export declare const isFocused: SemanticsFlag; }
export namespace _SemanticsFlagFactory { export declare const hasEnabledState: SemanticsFlag; }
export namespace _SemanticsFlagFactory { export declare const isEnabled: SemanticsFlag; }
export namespace _SemanticsFlagFactory { export declare const isInMutuallyExclusiveGroup: SemanticsFlag; }
export namespace _SemanticsFlagFactory { export declare const isHeader: SemanticsFlag; }
export namespace _SemanticsFlagFactory { export declare const isObscured: SemanticsFlag; }
export namespace _SemanticsFlagFactory { export declare const isMultiline: SemanticsFlag; }
export namespace _SemanticsFlagFactory { export declare const scopesRoute: SemanticsFlag; }
export namespace _SemanticsFlagFactory { export declare const namesRoute: SemanticsFlag; }
export namespace _SemanticsFlagFactory { export declare const isHidden: SemanticsFlag; }
export namespace _SemanticsFlagFactory { export declare const isImage: SemanticsFlag; }
export namespace _SemanticsFlagFactory { export declare const isLiveRegion: SemanticsFlag; }
export namespace _SemanticsFlagFactory { export declare const hasToggledState: SemanticsFlag; }
export namespace _SemanticsFlagFactory { export declare const isToggled: SemanticsFlag; }
export namespace _SemanticsFlagFactory { export declare const hasImplicitScrolling: SemanticsFlag; }
export namespace _SemanticsFlagFactory { export declare const hasExpandedState: SemanticsFlag; }
export namespace _SemanticsFlagFactory { export declare const isExpanded: SemanticsFlag; }
export namespace _SemanticsFlagFactory { export declare const hasRequiredState: SemanticsFlag; }
export namespace _SemanticsFlagFactory { export declare const isRequired: SemanticsFlag; }
export namespace _SemanticsFlagFactory { export declare const values: DartList<SemanticsFlag>; }
_flaxDefineStaticGetters(_SemanticsFlagFactory, "flax.core/sdk_dart_ui#read:SemanticsFlag.", ["hasCheckedState","isChecked","isCheckStateMixed","hasSelectedState","isSelected","isButton","isTextField","isSlider","isKeyboardKey","isReadOnly","isLink","isFocusable","isFocused","hasEnabledState","isEnabled","isInMutuallyExclusiveGroup","isHeader","isObscured","isMultiline","scopesRoute","namesRoute","isHidden","isImage","isLiveRegion","hasToggledState","isToggled","hasImplicitScrolling","hasExpandedState","isExpanded","hasRequiredState","isRequired","values"]);
export namespace _SemanticsFlagFactory { export function fromIndex(index: number): SemanticsFlag | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dart_ui#function:SemanticsFlag.fromIndex", [index]);
return _flaxResult as SemanticsFlag | null;
} }
export const SemanticsFlag: typeof _SemanticsFlagFactory & _FlaxInstanceType<SemanticsFlag> & _FlaxDartType<SemanticsFlag, readonly ["class", "flax.core/sdk_dart_ui#type:SemanticsFlag", readonly [], false]> = _flaxBindInstanceType<SemanticsFlag, typeof _SemanticsFlagFactory>(_SemanticsFlagFactory, "flax.core/sdk_dart_ui#type:SemanticsFlag", ["dart:core::Object"]) as typeof _SemanticsFlagFactory & _FlaxInstanceType<SemanticsFlag> & _FlaxDartType<SemanticsFlag, readonly ["class", "flax.core/sdk_dart_ui#type:SemanticsFlag", readonly [], false]>;
