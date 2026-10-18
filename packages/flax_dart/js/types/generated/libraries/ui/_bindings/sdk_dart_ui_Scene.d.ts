import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/sdk_dart_ui_Image';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Image';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Scene extends Readonly<{
    "__flaxBound:dart:ui::Scene": readonly [];
}> {
    readonly __Scene: unique symbol;
    readonly [_flaxDartTypeValue]: Scene;
    toImageSync(width: number, height: number): upstream0.Image;
    toImage(width: number, height: number): Promise<upstream0.Image>;
    dispose(): void;
}
export declare namespace _SceneFactory {
    function implement(args: [], implementation: {
        toImageSync: ((width: number, height: number) => Readonly<{
            "__flaxBound:dart:ui::Image": readonly [];
        }>);
        toImage: ((width: number, height: number) => Promise<Readonly<{
            "__flaxBound:dart:ui::Image": readonly [];
        }>>);
        dispose: (() => void);
    }): Scene;
}
export declare const Scene: typeof _SceneFactory & _FlaxInstanceType<Scene> & _FlaxDartType<Scene, readonly ["class", "flax.core/sdk_dart_ui#type:Scene", readonly [], false]>;
