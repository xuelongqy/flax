import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TooltipPositionContext extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/raw_tooltip.dart::TooltipPositionContext": readonly [];
}> {
    readonly __TooltipPositionContext: unique symbol;
    readonly [_flaxDartTypeValue]: TooltipPositionContext;
    readonly target: upstream0.Offset;
    readonly targetSize: upstream1.Size;
    readonly tooltipSize: upstream1.Size;
    readonly verticalOffset: number;
    readonly preferBelow: boolean;
    readonly overlaySize: upstream1.Size;
}
export declare function _TooltipPositionContextFactory(options: {
    target: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>;
    targetSize: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>;
    tooltipSize: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>;
    verticalOffset: number;
    preferBelow?: boolean | undefined;
    overlaySize?: (Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | undefined;
}): TooltipPositionContext;
export interface _TooltipPositionContextNative extends TooltipPositionContext {
    readonly [_flaxDartTypeValue]: _TooltipPositionContextNative;
    get target(): upstream0.Offset;
    get targetSize(): upstream1.Size;
    get tooltipSize(): upstream1.Size;
    get verticalOffset(): number;
    get preferBelow(): boolean;
    get overlaySize(): upstream1.Size;
}
export declare abstract class _TooltipPositionContextNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TooltipPositionContext>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TooltipPositionContext;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:TooltipPositionContext", readonly [], false];
    constructor(options: {
        target: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        targetSize: Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        tooltipSize: Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        verticalOffset: number;
        preferBelow?: boolean | undefined;
        overlaySize?: (Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | undefined;
    });
}
export declare namespace _TooltipPositionContextFactory {
    function implement(args: [options: {
        target: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        targetSize: Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        tooltipSize: Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        verticalOffset: number;
        preferBelow?: boolean | undefined;
        overlaySize?: (Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | undefined;
    }], implementation: {}): TooltipPositionContext;
}
declare const _TooltipPositionContextBinding: typeof _TooltipPositionContextFactory & (new (options: {
    target: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>;
    targetSize: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>;
    tooltipSize: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>;
    verticalOffset: number;
    preferBelow?: boolean | undefined;
    overlaySize?: (Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | undefined;
}) => _TooltipPositionContextNative);
export declare const TooltipPositionContext: typeof _TooltipPositionContextBinding & _FlaxInstanceType<TooltipPositionContext> & _FlaxDartType<TooltipPositionContext, readonly ["class", "flax.core/sdk_widgets#type:TooltipPositionContext", readonly [], false]>;
export {};
