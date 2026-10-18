import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream1 from '@flax/flutter/semantics/_bindings/sdk_semantics_Assertiveness';
import '@flax/flutter/semantics/_bindings/sdk_semantics_Assertiveness';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FlutterView';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SemanticsService extends Readonly<{
    "__flaxBound:package:flutter/src/semantics/semantics_service.dart::SemanticsService": readonly [];
}> {
    readonly __SemanticsService: unique symbol;
    readonly [_flaxDartTypeValue]: SemanticsService;
}
export declare namespace _SemanticsServiceFactory {
    function announce(message: string, textDirection: upstream0.TextDirection, options?: {
        assertiveness?: upstream1.Assertiveness | undefined;
    }): Promise<void>;
}
export declare namespace _SemanticsServiceFactory {
    function sendAnnouncement(view: Readonly<{
        "__flaxBound:dart:ui::FlutterView": readonly [];
    }>, message: string, textDirection: upstream0.TextDirection, options?: {
        assertiveness?: upstream1.Assertiveness | undefined;
    }): Promise<void>;
}
export declare namespace _SemanticsServiceFactory {
    function tooltip(message: string): Promise<void>;
}
export declare const SemanticsService: typeof _SemanticsServiceFactory & _FlaxInstanceType<SemanticsService> & _FlaxDartType<SemanticsService, readonly ["class", "flax.core/sdk_semantics#type:SemanticsService", readonly [], false]>;
