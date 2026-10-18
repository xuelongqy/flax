import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_ScrollDirection';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ScrollDirection';
import type * as upstream3 from '@flax/flutter/animation/_bindings/flutter_Curve';
import '@flax/flutter/animation/_bindings/flutter_Curve';
import type * as upstream4 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface ViewportOffset extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{
    "__flaxBound:package:flutter/src/rendering/viewport_offset.dart::ViewportOffset": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __ViewportOffset: unique symbol;
    readonly [_flaxDartTypeValue]: ViewportOffset;
}
export interface ViewportOffset {
    readonly [_flaxDartTypeValue]: ViewportOffset;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    moveTo(to: number, options?: {
        duration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream4.Duration];
        }>) | null | undefined;
        curve?: (Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
        }>) | null | undefined;
        clamp?: boolean | null | undefined;
    }): Promise<void>;
    toString(): string;
    debugFillDescription(description: DartListInput<string, string>): void;
    get hasListeners(): boolean;
}
export declare abstract class ViewportOffset extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ViewportOffset>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ViewportOffset;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_rendering#type:ViewportOffset", readonly [], false];
    constructor();
    abstract applyViewportDimension(viewportDimension: number): boolean;
    abstract applyContentDimensions(minScrollExtent: number, maxScrollExtent: number): boolean;
    abstract correctBy(correction: number): void;
    abstract jumpTo(pixels: number): void;
    abstract animateTo(to: number, options: {
        duration: Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream4.Duration];
        }>;
        curve: Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::Curve": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/animation/curves.dart::ParametricCurve": readonly [number];
        }>;
    }): Promise<void>;
    abstract get pixels(): number;
    abstract get hasPixels(): boolean;
    abstract get userScrollDirection(): upstream2.ScrollDirection;
    abstract get allowImplicitScrolling(): boolean;
}
export declare namespace ViewportOffset {
    function implement(args: [], implementation: {
        applyViewportDimension: ((viewportDimension: number) => boolean);
        applyContentDimensions: ((minScrollExtent: number, maxScrollExtent: number) => boolean);
        correctBy: ((correction: number) => void);
        jumpTo: ((pixels: number) => void);
        animateTo: ((to: number, options: {
            duration: upstream4.Duration;
            curve: upstream3.Curve;
        }) => Promise<void>);
        get pixels(): number;
        get hasPixels(): boolean;
        get userScrollDirection(): upstream2.ScrollDirection;
        get allowImplicitScrolling(): boolean;
    }): ViewportOffset;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "pixels" | "hasPixels" | "userScrollDirection" | "allowImplicitScrolling" | "addListener" | "removeListener" | "dispose" | "applyViewportDimension" | "applyContentDimensions" | "correctBy" | "jumpTo" | "animateTo" | "moveTo" | "toString" | "debugFillDescription" | "__flaxBound:package:flutter/src/rendering/viewport_offset.dart::ViewportOffset" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
