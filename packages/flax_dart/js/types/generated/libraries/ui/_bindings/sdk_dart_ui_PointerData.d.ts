import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerChange';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerChange';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerDeviceKind';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_PointerSignalKind';
import '@flax/dart/ui/_bindings/sdk_dart_ui_PointerSignalKind';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface PointerData extends Readonly<{
    "__flaxBound:dart:ui::PointerData": readonly [];
}> {
    readonly __PointerData: unique symbol;
    readonly [_flaxDartTypeValue]: PointerData;
}
export interface PointerData {
    readonly [_flaxDartTypeValue]: PointerData;
    respond(options: {
        allowPlatformDefault: boolean;
    }): void;
    toString(): string;
    toStringFull(): string;
    get viewId(): number;
    get embedderId(): number;
    get timeStamp(): upstream0.Duration;
    get change(): upstream1.PointerChange;
    get kind(): upstream2.PointerDeviceKind;
    get signalKind(): upstream3.PointerSignalKind | null;
    get device(): number;
    get pointerIdentifier(): number;
    get physicalX(): number;
    get physicalY(): number;
    get physicalDeltaX(): number;
    get physicalDeltaY(): number;
    get buttons(): number;
    get obscured(): boolean;
    get synthesized(): boolean;
    get pressure(): number;
    get pressureMin(): number;
    get pressureMax(): number;
    get distance(): number;
    get distanceMax(): number;
    get size(): number;
    get radiusMajor(): number;
    get radiusMinor(): number;
    get radiusMin(): number;
    get radiusMax(): number;
    get orientation(): number;
    get tilt(): number;
    get platformData(): number;
    get scrollDeltaX(): number;
    get scrollDeltaY(): number;
    get panX(): number;
    get panY(): number;
    get panDeltaX(): number;
    get panDeltaY(): number;
    get scale(): number;
    get rotation(): number;
}
export declare abstract class PointerData extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PointerData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: PointerData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_dart_ui#type:PointerData", readonly [], false];
    constructor(options?: {
        viewId?: number | undefined;
        embedderId?: number | undefined;
        timeStamp?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
        }>) | undefined;
        change?: upstream1.PointerChange | undefined;
        kind?: upstream2.PointerDeviceKind | undefined;
        signalKind?: upstream3.PointerSignalKind | null | undefined;
        device?: number | undefined;
        pointerIdentifier?: number | undefined;
        physicalX?: number | undefined;
        physicalY?: number | undefined;
        physicalDeltaX?: number | undefined;
        physicalDeltaY?: number | undefined;
        buttons?: number | undefined;
        obscured?: boolean | undefined;
        synthesized?: boolean | undefined;
        pressure?: number | undefined;
        pressureMin?: number | undefined;
        pressureMax?: number | undefined;
        distance?: number | undefined;
        distanceMax?: number | undefined;
        size?: number | undefined;
        radiusMajor?: number | undefined;
        radiusMinor?: number | undefined;
        radiusMin?: number | undefined;
        radiusMax?: number | undefined;
        orientation?: number | undefined;
        tilt?: number | undefined;
        platformData?: number | undefined;
        scrollDeltaX?: number | undefined;
        scrollDeltaY?: number | undefined;
        panX?: number | undefined;
        panY?: number | undefined;
        panDeltaX?: number | undefined;
        panDeltaY?: number | undefined;
        scale?: number | undefined;
        rotation?: number | undefined;
        onRespond?: ((options?: {
            allowPlatformDefault?: boolean | undefined;
        }) => void) | null | undefined;
    });
}
export declare namespace PointerData {
    function implement(args: [options?: {
        viewId?: number | undefined;
        embedderId?: number | undefined;
        timeStamp?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream0.Duration];
        }>) | undefined;
        change?: upstream1.PointerChange | undefined;
        kind?: upstream2.PointerDeviceKind | undefined;
        signalKind?: upstream3.PointerSignalKind | null | undefined;
        device?: number | undefined;
        pointerIdentifier?: number | undefined;
        physicalX?: number | undefined;
        physicalY?: number | undefined;
        physicalDeltaX?: number | undefined;
        physicalDeltaY?: number | undefined;
        buttons?: number | undefined;
        obscured?: boolean | undefined;
        synthesized?: boolean | undefined;
        pressure?: number | undefined;
        pressureMin?: number | undefined;
        pressureMax?: number | undefined;
        distance?: number | undefined;
        distanceMax?: number | undefined;
        size?: number | undefined;
        radiusMajor?: number | undefined;
        radiusMinor?: number | undefined;
        radiusMin?: number | undefined;
        radiusMax?: number | undefined;
        orientation?: number | undefined;
        tilt?: number | undefined;
        platformData?: number | undefined;
        scrollDeltaX?: number | undefined;
        scrollDeltaY?: number | undefined;
        panX?: number | undefined;
        panY?: number | undefined;
        panDeltaX?: number | undefined;
        panDeltaY?: number | undefined;
        scale?: number | undefined;
        rotation?: number | undefined;
        onRespond?: ((options?: {
            allowPlatformDefault?: boolean | undefined;
        }) => void) | null | undefined;
    }], implementation: {}): PointerData;
}
