import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsAction';
import '@flax/dart/ui/_bindings/sdk_dart_ui_SemanticsAction';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface SemanticsActionEvent extends Readonly<{
    "__flaxBound:dart:ui::SemanticsActionEvent": readonly [];
}> {
    readonly __SemanticsActionEvent: unique symbol;
    readonly [_flaxDartTypeValue]: SemanticsActionEvent;
}
export interface SemanticsActionEvent {
    readonly [_flaxDartTypeValue]: SemanticsActionEvent;
    copyWith(options?: {
        type?: Readonly<{
            "__flaxBound:dart:ui::SemanticsAction": readonly [];
        }> | null | undefined;
        viewId?: number | null | undefined;
        nodeId?: number | null | undefined;
        arguments?: unknown | null | undefined;
    }): SemanticsActionEvent;
    get type(): upstream0.SemanticsAction;
    get viewId(): number;
    get nodeId(): number;
    get arguments(): unknown | null;
}
export declare abstract class SemanticsActionEvent extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SemanticsActionEvent>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SemanticsActionEvent;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:SemanticsActionEvent", readonly [], false];
    constructor(options: {
        type: Readonly<{
            "__flaxBound:dart:ui::SemanticsAction": readonly [];
        }>;
        viewId: number;
        nodeId: number;
        arguments?: unknown | null | undefined;
    });
}
export declare namespace SemanticsActionEvent {
    function implement(args: [options: {
        type: Readonly<{
            "__flaxBound:dart:ui::SemanticsAction": readonly [];
        }>;
        viewId: number;
        nodeId: number;
        arguments?: unknown | null | undefined;
    }], implementation: {}): SemanticsActionEvent;
}
