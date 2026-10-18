import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_Enum';
import '@flax/dart/core/_bindings/flutter_Enum';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RenderingServiceExtensions extends DartEnum, Omit<upstream0.Enum, typeof _flaxDartTypeValue | "__flaxBound:package:flutter/src/rendering/service_extensions.dart::RenderingServiceExtensions">, Readonly<{
    "__flaxBound:package:flutter/src/rendering/service_extensions.dart::RenderingServiceExtensions": readonly [];
}> {
    readonly __RenderingServiceExtensions: unique symbol;
    readonly [_flaxDartTypeValue]: RenderingServiceExtensions;
    readonly name: string;
    readonly index: number;
}
export declare const RenderingServiceExtensions: Readonly<{
    invertOversizedImages: RenderingServiceExtensions;
    debugPaint: RenderingServiceExtensions;
    debugPaintBaselinesEnabled: RenderingServiceExtensions;
    repaintRainbow: RenderingServiceExtensions;
    debugDumpLayerTree: RenderingServiceExtensions;
    debugDisableClipLayers: RenderingServiceExtensions;
    debugDisablePhysicalShapeLayers: RenderingServiceExtensions;
    debugDisableOpacityLayers: RenderingServiceExtensions;
    debugDumpRenderTree: RenderingServiceExtensions;
    debugDumpSemanticsTreeInTraversalOrder: RenderingServiceExtensions;
    debugDumpSemanticsTreeInInverseHitTestOrder: RenderingServiceExtensions;
    profileRenderObjectPaints: RenderingServiceExtensions;
    profileRenderObjectLayouts: RenderingServiceExtensions;
    values: readonly RenderingServiceExtensions[];
} & _FlaxInstanceType<RenderingServiceExtensions> & _FlaxDartType<RenderingServiceExtensions, readonly ["class", "flax.core/sdk_rendering#type:RenderingServiceExtensions", readonly [], false]>>;
