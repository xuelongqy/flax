import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream1 from '@flax/material-ui/_bindings/material_CornerRounding';
import '@flax/material-ui/_bindings/material_CornerRounding';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RoundedPolygon extends Readonly<{
    "__flaxBound:package:material_ui/src/shapes/rounded_polygon.dart::RoundedPolygon": readonly [];
}> {
    readonly __RoundedPolygon: unique symbol;
    readonly [_flaxDartTypeValue]: RoundedPolygon;
    normalized(): RoundedPolygon;
    toString(): string;
}
export declare function _RoundedPolygonFactory(numVertices: number, options?: {
    radius?: number | undefined;
    center?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | undefined;
    rounding?: Readonly<{
        "__flaxBound:package:material_ui/src/shapes/corner_rounding.dart::CornerRounding": readonly [];
    }> | undefined;
    perVertexRounding?: DartListInput<upstream1.CornerRounding, Readonly<{
        "__flaxBound:package:material_ui/src/shapes/corner_rounding.dart::CornerRounding": readonly [];
    }>> | null | undefined;
}): RoundedPolygon;
export declare namespace _RoundedPolygonFactory {
    function fromVertices(vertices: DartListInput<upstream0.Offset, Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>>, options?: {
        rounding?: Readonly<{
            "__flaxBound:package:material_ui/src/shapes/corner_rounding.dart::CornerRounding": readonly [];
        }> | undefined;
        perVertexRounding?: DartListInput<upstream1.CornerRounding, Readonly<{
            "__flaxBound:package:material_ui/src/shapes/corner_rounding.dart::CornerRounding": readonly [];
        }>> | null | undefined;
        center?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
    }): RoundedPolygon;
}
export declare namespace _RoundedPolygonFactory {
    function circle(options?: {
        numVertices?: number | undefined;
        radius?: number | undefined;
        center?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | undefined;
    }): RoundedPolygon;
}
export declare namespace _RoundedPolygonFactory {
    function rectangle(options?: {
        width?: number | undefined;
        height?: number | undefined;
        rounding?: Readonly<{
            "__flaxBound:package:material_ui/src/shapes/corner_rounding.dart::CornerRounding": readonly [];
        }> | undefined;
        perVertexRounding?: DartListInput<upstream1.CornerRounding, Readonly<{
            "__flaxBound:package:material_ui/src/shapes/corner_rounding.dart::CornerRounding": readonly [];
        }>> | null | undefined;
        center?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | undefined;
    }): RoundedPolygon;
}
export declare namespace _RoundedPolygonFactory {
    function star(options: {
        numVerticesPerRadius: number;
        radius?: number | undefined;
        innerRadius?: number | undefined;
        rounding?: Readonly<{
            "__flaxBound:package:material_ui/src/shapes/corner_rounding.dart::CornerRounding": readonly [];
        }> | undefined;
        innerRounding?: Readonly<{
            "__flaxBound:package:material_ui/src/shapes/corner_rounding.dart::CornerRounding": readonly [];
        }> | null | undefined;
        perVertexRounding?: DartListInput<upstream1.CornerRounding, Readonly<{
            "__flaxBound:package:material_ui/src/shapes/corner_rounding.dart::CornerRounding": readonly [];
        }>> | null | undefined;
        center?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | undefined;
    }): RoundedPolygon;
}
export declare namespace _RoundedPolygonFactory {
    function pill(options?: {
        width?: number | undefined;
        height?: number | undefined;
        smoothing?: number | undefined;
        center?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | undefined;
    }): RoundedPolygon;
}
export declare namespace _RoundedPolygonFactory {
    function pillStar(options?: {
        width?: number | undefined;
        height?: number | undefined;
        numVerticesPerRadius?: number | undefined;
        innerRadiusRatio?: number | undefined;
        rounding?: Readonly<{
            "__flaxBound:package:material_ui/src/shapes/corner_rounding.dart::CornerRounding": readonly [];
        }> | undefined;
        innerRounding?: Readonly<{
            "__flaxBound:package:material_ui/src/shapes/corner_rounding.dart::CornerRounding": readonly [];
        }> | null | undefined;
        perVertexRounding?: DartListInput<upstream1.CornerRounding, Readonly<{
            "__flaxBound:package:material_ui/src/shapes/corner_rounding.dart::CornerRounding": readonly [];
        }>> | null | undefined;
        vertexSpacing?: number | undefined;
        startLocation?: number | undefined;
        center?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | undefined;
    }): RoundedPolygon;
}
export declare const RoundedPolygon: typeof _RoundedPolygonFactory & _FlaxInstanceType<RoundedPolygon> & _FlaxDartType<RoundedPolygon, readonly ["class", "flax.material/material#type:RoundedPolygon", readonly [], false]>;
