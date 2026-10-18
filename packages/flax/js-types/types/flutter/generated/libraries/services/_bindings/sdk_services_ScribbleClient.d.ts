import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ScribbleClient extends Readonly<{
    "__flaxBound:package:flutter/src/services/text_input.dart::ScribbleClient": readonly [];
}> {
    readonly __ScribbleClient: unique symbol;
    readonly [_flaxDartTypeValue]: ScribbleClient;
    readonly elementIdentifier: string;
    readonly bounds: upstream0.Rect;
    onScribbleFocus(offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>): void;
    isInScribbleRect(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>): boolean;
}
export declare namespace _ScribbleClientFactory {
    function implement(args: [], implementation: {
        onScribbleFocus: ((offset: upstream1.Offset) => void);
        isInScribbleRect: ((rect: upstream0.Rect) => boolean);
        get elementIdentifier(): string;
        get bounds(): Readonly<{
            "__flaxBound:dart:ui::Rect": readonly [];
        }>;
    }): ScribbleClient;
}
export declare const ScribbleClient: typeof _ScribbleClientFactory & _FlaxInstanceType<ScribbleClient> & _FlaxDartType<ScribbleClient, readonly ["class", "flax.core/sdk_services#type:ScribbleClient", readonly [], false]>;
