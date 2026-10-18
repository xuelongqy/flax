import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_FlutterView';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FlutterView';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface HitTestRequest extends Readonly<{
    "__flaxBound:dart:ui::HitTestRequest": readonly [];
}> {
    readonly __HitTestRequest: unique symbol;
    readonly [_flaxDartTypeValue]: HitTestRequest;
}
export interface HitTestRequest {
    readonly [_flaxDartTypeValue]: HitTestRequest;
    get view(): upstream0.FlutterView;
    get offset(): upstream1.Offset;
}
export declare abstract class HitTestRequest extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<HitTestRequest>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: HitTestRequest;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:HitTestRequest", readonly [], false];
    constructor(options: {
        view: Readonly<{
            "__flaxBound:dart:ui::FlutterView": readonly [];
        }>;
        offset: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    });
}
export declare namespace HitTestRequest {
    function implement(args: [options: {
        view: Readonly<{
            "__flaxBound:dart:ui::FlutterView": readonly [];
        }>;
        offset: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
    }], implementation: {}): HitTestRequest;
}
