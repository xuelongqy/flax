import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ScaffoldFeatureController<T extends Widget = Widget, U extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:package:material_ui/src/scaffold.dart::ScaffoldFeatureController": readonly [T, U];
}> {
    readonly __ScaffoldFeatureController: unique symbol;
    readonly [_flaxDartTypeValue]: ScaffoldFeatureController<T, U>;
    readonly closed: Promise<U>;
    readonly close: (() => void);
    readonly setState: ((fn: (() => void)) => void) | null;
}
export declare const ScaffoldFeatureController: object & _FlaxInstanceType<ScaffoldFeatureController<Widget, unknown | null>> & _FlaxDartType<ScaffoldFeatureController<Widget, unknown | null>, readonly ["class", "flax.material/material#type:ScaffoldFeatureController", readonly [never, readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0, infer _Selected1] ? [_Selected0] extends [Widget] ? [_Selected1] extends [unknown | null] ? {
        readonly prototype: ScaffoldFeatureController<_Selected0, _Selected1>;
    } & _FlaxInstanceType<ScaffoldFeatureController<_Selected0, _Selected1>> & _FlaxDartType<ScaffoldFeatureController<_Selected0, _Selected1>> : never : never : never;
}
export {};
