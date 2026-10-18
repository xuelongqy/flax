import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_TransformEngineLayer';
import '@flax/dart/ui/_bindings/sdk_dart_ui_TransformEngineLayer';
import type * as upstream1 from '@flax/dart/ui/_bindings/sdk_dart_ui_OffsetEngineLayer';
import '@flax/dart/ui/_bindings/sdk_dart_ui_OffsetEngineLayer';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_ClipRectEngineLayer';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ClipRectEngineLayer';
import type * as upstream3 from '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_ClipRRectEngineLayer';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ClipRRectEngineLayer';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_RRect';
import '@flax/dart/ui/_bindings/sdk_dart_ui_RRect';
import type * as upstream7 from '@flax/dart/ui/_bindings/sdk_dart_ui_ClipRSuperellipseEngineLayer';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ClipRSuperellipseEngineLayer';
import type * as upstream8 from '@flax/dart/ui/_bindings/sdk_dart_ui_RSuperellipse';
import '@flax/dart/ui/_bindings/sdk_dart_ui_RSuperellipse';
import type * as upstream9 from '@flax/dart/ui/_bindings/sdk_dart_ui_ClipPathEngineLayer';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ClipPathEngineLayer';
import type * as upstream10 from '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Path';
import type * as upstream11 from '@flax/dart/ui/_bindings/sdk_dart_ui_OpacityEngineLayer';
import '@flax/dart/ui/_bindings/sdk_dart_ui_OpacityEngineLayer';
import type * as upstream12 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream13 from '@flax/dart/ui/_bindings/sdk_dart_ui_ColorFilterEngineLayer';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ColorFilterEngineLayer';
import type * as upstream14 from '@flax/dart/ui/_bindings/sdk_dart_ui_ColorFilter';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ColorFilter';
import type * as upstream15 from '@flax/dart/ui/_bindings/sdk_dart_ui_ImageFilterEngineLayer';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ImageFilterEngineLayer';
import type * as upstream16 from '@flax/dart/ui/_bindings/flutter_ImageFilter';
import '@flax/dart/ui/_bindings/flutter_ImageFilter';
import type * as upstream17 from '@flax/dart/ui/_bindings/sdk_dart_ui_BackdropFilterEngineLayer';
import '@flax/dart/ui/_bindings/sdk_dart_ui_BackdropFilterEngineLayer';
import type * as upstream18 from '@flax/dart/ui/_bindings/sdk_dart_ui_BlendMode';
import '@flax/dart/ui/_bindings/sdk_dart_ui_BlendMode';
import type * as upstream19 from '@flax/dart/ui/_bindings/sdk_dart_ui_ShaderMaskEngineLayer';
import '@flax/dart/ui/_bindings/sdk_dart_ui_ShaderMaskEngineLayer';
import type * as upstream20 from '@flax/dart/ui/_bindings/sdk_dart_ui_Shader';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Shader';
import type * as upstream21 from '@flax/dart/ui/_bindings/sdk_dart_ui_FilterQuality';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FilterQuality';
import type * as upstream22 from '@flax/dart/ui/_bindings/sdk_dart_ui_EngineLayer';
import '@flax/dart/ui/_bindings/sdk_dart_ui_EngineLayer';
import type * as upstream23 from '@flax/dart/ui/_bindings/sdk_dart_ui_Picture';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Picture';
import type * as upstream24 from '@flax/dart/ui/_bindings/sdk_dart_ui_Scene';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Scene';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SceneBuilder extends Readonly<{
    "__flaxBound:dart:ui::SceneBuilder": readonly [];
}> {
    readonly __SceneBuilder: unique symbol;
    readonly [_flaxDartTypeValue]: SceneBuilder;
    pushTransform(matrix4: globalThis.Float64Array, options?: {
        oldLayer?: (Readonly<{
            "__flaxBound:dart:ui::TransformEngineLayer": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::_EngineLayerWrapper": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::EngineLayer": readonly [];
        }>) | null | undefined;
    }): upstream0.TransformEngineLayer;
    pushOffset(dx: number, dy: number, options?: {
        oldLayer?: (Readonly<{
            "__flaxBound:dart:ui::OffsetEngineLayer": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::_EngineLayerWrapper": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::EngineLayer": readonly [];
        }>) | null | undefined;
    }): upstream1.OffsetEngineLayer;
    pushClipRect(rect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, options?: {
        clipBehavior?: upstream4.Clip | undefined;
        oldLayer?: (Readonly<{
            "__flaxBound:dart:ui::ClipRectEngineLayer": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::_EngineLayerWrapper": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::EngineLayer": readonly [];
        }>) | null | undefined;
    }): upstream2.ClipRectEngineLayer;
    pushClipRRect(rrect: Readonly<{
        "__flaxBound:dart:ui::RRect": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::_RRectLike": readonly [upstream6.RRect];
    }>, options?: {
        clipBehavior?: upstream4.Clip | undefined;
        oldLayer?: (Readonly<{
            "__flaxBound:dart:ui::ClipRRectEngineLayer": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::_EngineLayerWrapper": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::EngineLayer": readonly [];
        }>) | null | undefined;
    }): upstream5.ClipRRectEngineLayer;
    pushClipRSuperellipse(rsuperellipse: Readonly<{
        "__flaxBound:dart:ui::RSuperellipse": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::_RRectLike": readonly [upstream8.RSuperellipse];
    }>, options?: {
        clipBehavior?: upstream4.Clip | undefined;
        oldLayer?: (Readonly<{
            "__flaxBound:dart:ui::ClipRSuperellipseEngineLayer": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::_EngineLayerWrapper": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::EngineLayer": readonly [];
        }>) | null | undefined;
    }): upstream7.ClipRSuperellipseEngineLayer;
    pushClipPath(path: Readonly<{
        "__flaxBound:dart:ui::Path": readonly [];
    }>, options?: {
        clipBehavior?: upstream4.Clip | undefined;
        oldLayer?: (Readonly<{
            "__flaxBound:dart:ui::ClipPathEngineLayer": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::_EngineLayerWrapper": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::EngineLayer": readonly [];
        }>) | null | undefined;
    }): upstream9.ClipPathEngineLayer;
    pushOpacity(alpha: number, options?: {
        offset?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        oldLayer?: (Readonly<{
            "__flaxBound:dart:ui::OpacityEngineLayer": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::_EngineLayerWrapper": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::EngineLayer": readonly [];
        }>) | null | undefined;
    }): upstream11.OpacityEngineLayer;
    pushColorFilter(filter: Readonly<{
        "__flaxBound:dart:ui::ColorFilter": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::ImageFilter": readonly [];
    }>, options?: {
        oldLayer?: (Readonly<{
            "__flaxBound:dart:ui::ColorFilterEngineLayer": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::_EngineLayerWrapper": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::EngineLayer": readonly [];
        }>) | null | undefined;
    }): upstream13.ColorFilterEngineLayer;
    pushImageFilter(filter: Readonly<{
        "__flaxBound:dart:ui::ImageFilter": readonly [];
    }>, options?: {
        offset?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | undefined;
        oldLayer?: (Readonly<{
            "__flaxBound:dart:ui::ImageFilterEngineLayer": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::_EngineLayerWrapper": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::EngineLayer": readonly [];
        }>) | null | undefined;
    }): upstream15.ImageFilterEngineLayer;
    pushBackdropFilter(filter: Readonly<{
        "__flaxBound:dart:ui::ImageFilter": readonly [];
    }>, options?: {
        backdropId?: number | null | undefined;
        blendMode?: upstream18.BlendMode | undefined;
        oldLayer?: (Readonly<{
            "__flaxBound:dart:ui::BackdropFilterEngineLayer": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::_EngineLayerWrapper": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::EngineLayer": readonly [];
        }>) | null | undefined;
    }): upstream17.BackdropFilterEngineLayer;
    pushShaderMask(shader: Readonly<{
        "__flaxBound:dart:ui::Shader": readonly [];
    }>, maskRect: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>, blendMode: upstream18.BlendMode, options?: {
        filterQuality?: upstream21.FilterQuality | undefined;
        oldLayer?: (Readonly<{
            "__flaxBound:dart:ui::ShaderMaskEngineLayer": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::_EngineLayerWrapper": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::EngineLayer": readonly [];
        }>) | null | undefined;
    }): upstream19.ShaderMaskEngineLayer;
    pop(): void;
    addRetained(retainedLayer: Readonly<{
        "__flaxBound:dart:ui::EngineLayer": readonly [];
    }>): void;
    addPerformanceOverlay(enabledOptions: number, bounds: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>): void;
    addPicture(offset: Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, picture: Readonly<{
        "__flaxBound:dart:ui::Picture": readonly [];
    }>, options?: {
        isComplexHint?: boolean | undefined;
        willChangeHint?: boolean | undefined;
    }): void;
    addTexture(textureId: number, options?: {
        filterQuality?: upstream21.FilterQuality | undefined;
        freeze?: boolean | undefined;
        height?: number | undefined;
        offset?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | undefined;
        width?: number | undefined;
    }): void;
    addPlatformView(viewId: number, options?: {
        height?: number | undefined;
        offset?: (Readonly<{
            "__flaxBound:dart:ui::Offset": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | undefined;
        width?: number | undefined;
    }): void;
    build(): upstream24.Scene;
}
export declare function _SceneBuilderFactory(): SceneBuilder;
export declare namespace _SceneBuilderFactory {
    function implement(args: [], implementation: {
        pushTransform: ((matrix4: globalThis.Float64Array, options?: {
            oldLayer?: upstream0.TransformEngineLayer | null | undefined;
        }) => Readonly<{
            "__flaxBound:dart:ui::TransformEngineLayer": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::_EngineLayerWrapper": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::EngineLayer": readonly [];
        }>);
        pushOffset: ((dx: number, dy: number, options?: {
            oldLayer?: upstream1.OffsetEngineLayer | null | undefined;
        }) => Readonly<{
            "__flaxBound:dart:ui::OffsetEngineLayer": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::_EngineLayerWrapper": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::EngineLayer": readonly [];
        }>);
        pushClipRect: ((rect: upstream3.Rect, options?: {
            clipBehavior?: upstream4.Clip | undefined;
            oldLayer?: upstream2.ClipRectEngineLayer | null | undefined;
        }) => Readonly<{
            "__flaxBound:dart:ui::ClipRectEngineLayer": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::_EngineLayerWrapper": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::EngineLayer": readonly [];
        }>);
        pushClipRRect: ((rrect: upstream6.RRect, options?: {
            clipBehavior?: upstream4.Clip | undefined;
            oldLayer?: upstream5.ClipRRectEngineLayer | null | undefined;
        }) => Readonly<{
            "__flaxBound:dart:ui::ClipRRectEngineLayer": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::_EngineLayerWrapper": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::EngineLayer": readonly [];
        }>);
        pushClipRSuperellipse: ((rsuperellipse: upstream8.RSuperellipse, options?: {
            clipBehavior?: upstream4.Clip | undefined;
            oldLayer?: upstream7.ClipRSuperellipseEngineLayer | null | undefined;
        }) => Readonly<{
            "__flaxBound:dart:ui::ClipRSuperellipseEngineLayer": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::_EngineLayerWrapper": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::EngineLayer": readonly [];
        }>);
        pushClipPath: ((path: upstream10.Path, options?: {
            clipBehavior?: upstream4.Clip | undefined;
            oldLayer?: upstream9.ClipPathEngineLayer | null | undefined;
        }) => Readonly<{
            "__flaxBound:dart:ui::ClipPathEngineLayer": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::_EngineLayerWrapper": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::EngineLayer": readonly [];
        }>);
        pushOpacity: ((alpha: number, options?: {
            offset?: upstream12.Offset | null | undefined;
            oldLayer?: upstream11.OpacityEngineLayer | null | undefined;
        }) => Readonly<{
            "__flaxBound:dart:ui::OpacityEngineLayer": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::_EngineLayerWrapper": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::EngineLayer": readonly [];
        }>);
        pushColorFilter: ((filter: upstream14.ColorFilter, options?: {
            oldLayer?: upstream13.ColorFilterEngineLayer | null | undefined;
        }) => Readonly<{
            "__flaxBound:dart:ui::ColorFilterEngineLayer": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::_EngineLayerWrapper": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::EngineLayer": readonly [];
        }>);
        pushImageFilter: ((filter: upstream16.ImageFilter, options?: {
            offset?: upstream12.Offset | undefined;
            oldLayer?: upstream15.ImageFilterEngineLayer | null | undefined;
        }) => Readonly<{
            "__flaxBound:dart:ui::ImageFilterEngineLayer": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::_EngineLayerWrapper": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::EngineLayer": readonly [];
        }>);
        pushBackdropFilter: ((filter: upstream16.ImageFilter, options?: {
            blendMode?: upstream18.BlendMode | undefined;
            oldLayer?: upstream17.BackdropFilterEngineLayer | null | undefined;
            backdropId?: number | null | undefined;
        }) => Readonly<{
            "__flaxBound:dart:ui::BackdropFilterEngineLayer": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::_EngineLayerWrapper": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::EngineLayer": readonly [];
        }>);
        pushShaderMask: ((shader: upstream20.Shader, maskRect: upstream3.Rect, blendMode: upstream18.BlendMode, options?: {
            oldLayer?: upstream19.ShaderMaskEngineLayer | null | undefined;
            filterQuality?: upstream21.FilterQuality | undefined;
        }) => Readonly<{
            "__flaxBound:dart:ui::ShaderMaskEngineLayer": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::_EngineLayerWrapper": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::EngineLayer": readonly [];
        }>);
        pop: (() => void);
        addRetained: ((retainedLayer: upstream22.EngineLayer) => void);
        addPerformanceOverlay: ((enabledOptions: number, bounds: upstream3.Rect) => void);
        addPicture: ((offset: upstream12.Offset, picture: upstream23.Picture, options?: {
            isComplexHint?: boolean | undefined;
            willChangeHint?: boolean | undefined;
        }) => void);
        addTexture: ((textureId: number, options?: {
            offset?: upstream12.Offset | undefined;
            width?: number | undefined;
            height?: number | undefined;
            freeze?: boolean | undefined;
            filterQuality?: upstream21.FilterQuality | undefined;
        }) => void);
        addPlatformView: ((viewId: number, options?: {
            offset?: upstream12.Offset | undefined;
            width?: number | undefined;
            height?: number | undefined;
        }) => void);
        build: (() => Readonly<{
            "__flaxBound:dart:ui::Scene": readonly [];
        }>);
    }): SceneBuilder;
}
export declare const SceneBuilder: typeof _SceneBuilderFactory & _FlaxInstanceType<SceneBuilder> & _FlaxDartType<SceneBuilder, readonly ["class", "flax.core/sdk_dart_ui#type:SceneBuilder", readonly [], false]>;
