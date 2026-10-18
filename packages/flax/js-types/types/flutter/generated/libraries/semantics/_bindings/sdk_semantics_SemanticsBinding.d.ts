import { type FlaxInstanceType as _FlaxInstanceType, type DartMap, type DartMapInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_BindingBase';
import '@flax/flutter/foundation/_bindings/sdk_foundation_BindingBase';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_SingletonFlutterWindow';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SingletonFlutterWindow';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_PlatformDispatcher';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PlatformDispatcher';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_AccessibilityFeatures';
import '@flax/dart/ui/_bindings/sdk_dart_ui_AccessibilityFeatures';
import type * as upstream4 from '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsActionEvent';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsActionEvent';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream6 from '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsHandle';
import '@flax/flutter/semantics/_bindings/sdk_semantics_SemanticsHandle';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsUpdateBuilder';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsUpdateBuilder';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SemanticsBinding extends Omit<upstream0.BindingBase, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/semantics/binding.dart::SemanticsBinding": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/binding.dart::BindingBase": readonly [];
}> {
    readonly __SemanticsBinding: unique symbol;
    readonly [_flaxDartTypeValue]: SemanticsBinding;
    readonly window: upstream1.SingletonFlutterWindow;
    readonly platformDispatcher: upstream2.PlatformDispatcher;
    readonly locked: boolean;
    readonly semanticsEnabled: boolean;
    readonly debugOutstandingSemanticsHandles: number;
    readonly accessibilityFeatures: upstream3.AccessibilityFeatures;
    readonly disableAnimations: boolean;
    initInstances(): void;
    debugCheckZone(entryPoint: string): boolean;
    initServiceExtensions(): void;
    lockEvents(callback: (() => Promise<void>)): Promise<void>;
    unlocked(): void;
    reassembleApplication(): Promise<void>;
    performReassemble(): Promise<void>;
    registerSignalServiceExtension(options: {
        callback: (() => Promise<void>);
        name: string;
    }): void;
    registerBoolServiceExtension(options: {
        getter: (() => Promise<boolean>);
        name: string;
        setter: ((value: boolean) => Promise<void>);
    }): void;
    registerNumericServiceExtension(options: {
        getter: (() => Promise<number>);
        name: string;
        setter: ((value: number) => Promise<void>);
    }): void;
    postEvent(eventKind: string, eventData: DartMapInput<string, unknown | null, string, unknown | null>): void;
    registerStringServiceExtension(options: {
        getter: (() => Promise<string>);
        name: string;
        setter: ((value: string) => Promise<void>);
    }): void;
    registerServiceExtension(options: {
        callback: ((parameters: DartMap<string, string>) => Promise<DartMapInput<string, unknown | null, string, unknown | null>>);
        name: string;
    }): void;
    toString(): string;
    addSemanticsEnabledListener(listener: (() => void)): void;
    removeSemanticsEnabledListener(listener: (() => void)): void;
    addSemanticsActionListener(listener: ((value: upstream4.SemanticsActionEvent) => void)): void;
    removeSemanticsActionListener(listener: ((value: upstream4.SemanticsActionEvent) => void)): void;
    getRectOfSemanticsNodeInViewCoordinates(viewId: number, nodeId: number): upstream5.Rect | null;
    ensureSemantics(): upstream6.SemanticsHandle;
    performSemanticsAction(action: Readonly<{
        "__flaxBound:dart:ui::SemanticsActionEvent": readonly [];
    }>): void;
    handleAccessibilityFeaturesChanged(): void;
    createSemanticsUpdateBuilder(): upstream7.SemanticsUpdateBuilder;
}
declare const _SemanticsBindingFactory: {
    readonly instance: SemanticsBinding;
};
export declare const SemanticsBinding: typeof _SemanticsBindingFactory & _FlaxInstanceType<SemanticsBinding> & _FlaxDartType<SemanticsBinding, readonly ["class", "flax.core/sdk_semantics#type:SemanticsBinding", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "window" | "platformDispatcher" | "locked" | "semanticsEnabled" | "debugOutstandingSemanticsHandles" | "accessibilityFeatures" | "disableAnimations" | "initInstances" | "debugCheckZone" | "initServiceExtensions" | "lockEvents" | "unlocked" | "reassembleApplication" | "performReassemble" | "registerSignalServiceExtension" | "registerBoolServiceExtension" | "registerNumericServiceExtension" | "postEvent" | "registerStringServiceExtension" | "registerServiceExtension" | "toString" | "addSemanticsEnabledListener" | "removeSemanticsEnabledListener" | "addSemanticsActionListener" | "removeSemanticsActionListener" | "getRectOfSemanticsNodeInViewCoordinates" | "ensureSemantics" | "performSemanticsAction" | "handleAccessibilityFeaturesChanged" | "createSemanticsUpdateBuilder" | "__flaxBound:package:flutter/src/semantics/binding.dart::SemanticsBinding" | "__flaxBound:package:flutter/src/foundation/binding.dart::BindingBase";
export {};
