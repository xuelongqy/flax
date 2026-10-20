import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type { DartRecord as _FlaxDartRecord } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextPosition';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextPosition';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_FloatingCursorDragState';
import '@flax/flutter/services/_bindings/sdk_services_FloatingCursorDragState';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RawFloatingCursorPoint extends Readonly<{
    "__flaxBound:package:flutter/src/services/text_input.dart::RawFloatingCursorPoint": readonly [];
}> {
    readonly __RawFloatingCursorPoint: unique symbol;
    readonly [_flaxDartTypeValue]: RawFloatingCursorPoint;
    readonly offset: upstream0.Offset | null;
    readonly startLocation: _FlaxDartRecord<{
        readonly $1: upstream0.Offset;
        readonly $2: upstream1.TextPosition;
    }> | null;
    readonly state: upstream2.FloatingCursorDragState;
}
export declare function _RawFloatingCursorPointFactory(options: {
    offset?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null | undefined;
    startLocation?: {
        readonly $1: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        readonly $2: Readonly<{
            "__flaxBound:dart:ui::TextPosition": readonly [];
        }>;
    } | null | undefined;
    state: upstream2.FloatingCursorDragState;
}): RawFloatingCursorPoint;
export interface _RawFloatingCursorPointNative extends RawFloatingCursorPoint {
    readonly [_flaxDartTypeValue]: _RawFloatingCursorPointNative;
    get offset(): upstream0.Offset | null;
    get startLocation(): _FlaxDartRecord<{
        readonly $1: upstream0.Offset;
        readonly $2: upstream1.TextPosition;
    }> | null;
    get state(): upstream2.FloatingCursorDragState;
}
export declare abstract class _RawFloatingCursorPointNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RawFloatingCursorPoint>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RawFloatingCursorPoint;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_services#type:RawFloatingCursorPoint", readonly [], false];
    constructor(options: {
        offset?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        startLocation?: {
            readonly $1: Readonly<{
                "__flaxBound:dart:ui::Offset": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:ui::OffsetBase": readonly [];
            }>;
            readonly $2: Readonly<{
                "__flaxBound:dart:ui::TextPosition": readonly [];
            }>;
        } | null | undefined;
        state: upstream2.FloatingCursorDragState;
    });
}
export declare namespace _RawFloatingCursorPointFactory {
    function implement(args: [options: {
        offset?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        startLocation?: {
            readonly $1: Readonly<{
                "__flaxBound:dart:ui::Offset": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:ui::OffsetBase": readonly [];
            }>;
            readonly $2: Readonly<{
                "__flaxBound:dart:ui::TextPosition": readonly [];
            }>;
        } | null | undefined;
        state: upstream2.FloatingCursorDragState;
    }], implementation: {}): RawFloatingCursorPoint;
}
declare const _RawFloatingCursorPointBinding: typeof _RawFloatingCursorPointFactory & (new (options: {
    offset?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null | undefined;
    startLocation?: {
        readonly $1: Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>;
        readonly $2: Readonly<{
            "__flaxBound:dart:ui::TextPosition": readonly [];
        }>;
    } | null | undefined;
    state: upstream2.FloatingCursorDragState;
}) => _RawFloatingCursorPointNative);
export declare const RawFloatingCursorPoint: typeof _RawFloatingCursorPointBinding & _FlaxInstanceType<RawFloatingCursorPoint> & _FlaxDartType<RawFloatingCursorPoint, readonly ["class", "flax.core/sdk_services#type:RawFloatingCursorPoint", readonly [], false]>;
export {};
