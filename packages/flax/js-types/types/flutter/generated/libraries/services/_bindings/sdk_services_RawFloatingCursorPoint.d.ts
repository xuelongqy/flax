import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type { DartRecord as _FlaxDartRecord } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_TextPosition';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TextPosition';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_FloatingCursorDragState';
import '@flax/flutter/services/_bindings/sdk_services_FloatingCursorDragState';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface RawFloatingCursorPoint extends Readonly<{
    "__flaxBound:package:flutter/src/services/text_input.dart::RawFloatingCursorPoint": readonly [];
}> {
    readonly __RawFloatingCursorPoint: unique symbol;
    readonly [_flaxDartTypeValue]: RawFloatingCursorPoint;
}
export interface RawFloatingCursorPoint {
    readonly [_flaxDartTypeValue]: RawFloatingCursorPoint;
    get offset(): upstream0.Offset | null;
    get startLocation(): _FlaxDartRecord<{
        readonly $1: upstream0.Offset;
        readonly $2: upstream1.TextPosition;
    }> | null;
    get state(): upstream2.FloatingCursorDragState;
}
export declare abstract class RawFloatingCursorPoint extends _FlaxProxyBase {
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
export declare namespace RawFloatingCursorPoint {
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
