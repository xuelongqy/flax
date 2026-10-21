// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import { _flaxMemberParameters122, _flaxMemberParameters0 } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/dart/ui/_bindings/sdk_dart_ui.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SemanticsAction extends Readonly<{ "__flaxBound:dart:ui::SemanticsAction": readonly [] }> { readonly __SemanticsAction: unique symbol;
readonly [_flaxDartTypeValue]: SemanticsAction;

readonly index: number;
readonly name: string;
toString(): string;
}
defineObject("flax.core/sdk_dart_ui#type:SemanticsAction", ["index","name"], [], _flaxBindingMethods("flax.core/sdk_dart_ui#type:SemanticsAction", "object", {"toString":_flaxMemberParameters0}, {}), []);
const _SemanticsActionProxy = {type: "flax.core/sdk_dart_ui#type:SemanticsAction", parameters: _flaxMemberParameters0, constructors: {}, methods: {"toString":_flaxMemberParameters0}, getters: ["index","name"], setters: [], contextMembers: [], superMembers: []} as const;
export namespace _SemanticsActionFactory { export function implement(args: [], implementation: {toString: (() => string); get index(): number; get name(): string}): SemanticsAction {
return constructProxy(_SemanticsActionProxy, args, implementation) as SemanticsAction; } }
export namespace _SemanticsActionFactory { export declare const tap: SemanticsAction; }
export namespace _SemanticsActionFactory { export declare const longPress: SemanticsAction; }
export namespace _SemanticsActionFactory { export declare const scrollLeft: SemanticsAction; }
export namespace _SemanticsActionFactory { export declare const scrollRight: SemanticsAction; }
export namespace _SemanticsActionFactory { export declare const scrollUp: SemanticsAction; }
export namespace _SemanticsActionFactory { export declare const scrollDown: SemanticsAction; }
export namespace _SemanticsActionFactory { export declare const scrollToOffset: SemanticsAction; }
export namespace _SemanticsActionFactory { export declare const increase: SemanticsAction; }
export namespace _SemanticsActionFactory { export declare const decrease: SemanticsAction; }
export namespace _SemanticsActionFactory { export declare const showOnScreen: SemanticsAction; }
export namespace _SemanticsActionFactory { export declare const moveCursorForwardByCharacter: SemanticsAction; }
export namespace _SemanticsActionFactory { export declare const moveCursorBackwardByCharacter: SemanticsAction; }
export namespace _SemanticsActionFactory { export declare const setText: SemanticsAction; }
export namespace _SemanticsActionFactory { export declare const setSelection: SemanticsAction; }
export namespace _SemanticsActionFactory { export declare const copy: SemanticsAction; }
export namespace _SemanticsActionFactory { export declare const cut: SemanticsAction; }
export namespace _SemanticsActionFactory { export declare const paste: SemanticsAction; }
export namespace _SemanticsActionFactory { export declare const didGainAccessibilityFocus: SemanticsAction; }
export namespace _SemanticsActionFactory { export declare const didLoseAccessibilityFocus: SemanticsAction; }
export namespace _SemanticsActionFactory { export declare const customAction: SemanticsAction; }
export namespace _SemanticsActionFactory { export declare const dismiss: SemanticsAction; }
export namespace _SemanticsActionFactory { export declare const moveCursorForwardByWord: SemanticsAction; }
export namespace _SemanticsActionFactory { export declare const moveCursorBackwardByWord: SemanticsAction; }
export namespace _SemanticsActionFactory { export declare const focus: SemanticsAction; }
export namespace _SemanticsActionFactory { export declare const expand: SemanticsAction; }
export namespace _SemanticsActionFactory { export declare const collapse: SemanticsAction; }
export namespace _SemanticsActionFactory { export declare const values: DartList<SemanticsAction>; }
_flaxDefineStaticGetters(_SemanticsActionFactory, "flax.core/sdk_dart_ui#read:SemanticsAction.", ["tap","longPress","scrollLeft","scrollRight","scrollUp","scrollDown","scrollToOffset","increase","decrease","showOnScreen","moveCursorForwardByCharacter","moveCursorBackwardByCharacter","setText","setSelection","copy","cut","paste","didGainAccessibilityFocus","didLoseAccessibilityFocus","customAction","dismiss","moveCursorForwardByWord","moveCursorBackwardByWord","focus","expand","collapse","values"]);
export namespace _SemanticsActionFactory { export function fromIndex(index: number): SemanticsAction | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dart_ui#function:SemanticsAction.fromIndex", [index], _flaxMemberParameters122);
return _flaxResult as SemanticsAction | null;
} }
export const SemanticsAction: typeof _SemanticsActionFactory & _FlaxInstanceType<SemanticsAction> & _FlaxDartType<SemanticsAction, readonly ["class", "flax.core/sdk_dart_ui#type:SemanticsAction", readonly [], false]> = _flaxBindInstanceType<SemanticsAction, typeof _SemanticsActionFactory>(_SemanticsActionFactory, "flax.core/sdk_dart_ui#type:SemanticsAction", ["dart:core::Object"]) as typeof _SemanticsActionFactory & _FlaxInstanceType<SemanticsAction> & _FlaxDartType<SemanticsAction, readonly ["class", "flax.core/sdk_dart_ui#type:SemanticsAction", readonly [], false]>;
