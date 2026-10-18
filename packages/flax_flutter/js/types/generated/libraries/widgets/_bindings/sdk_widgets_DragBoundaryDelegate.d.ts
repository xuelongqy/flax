import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DragBoundaryDelegate<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/drag_boundary.dart::DragBoundaryDelegate": readonly [T];
}> {
    readonly __DragBoundaryDelegate: unique symbol;
    readonly [_flaxDartTypeValue]: DragBoundaryDelegate<T>;
    isWithinBoundary(draggedObject: (T | DartInput<T>)): boolean;
    nearestPositionWithinBoundary(draggedObject: (T | DartInput<T>)): T;
}
export declare namespace _DragBoundaryDelegateFactory {
    function implement<T extends unknown | null = unknown | null>(args: [], implementation: {
        isWithinBoundary: ((draggedObject: T) => boolean);
        nearestPositionWithinBoundary: ((draggedObject: T) => (T | DartInput<T>));
    }): DragBoundaryDelegate<T>;
}
export declare const DragBoundaryDelegate: typeof _DragBoundaryDelegateFactory & _FlaxInstanceType<DragBoundaryDelegate<unknown | null>> & _FlaxDartType<DragBoundaryDelegate<unknown | null>, readonly ["class", "flax.core/sdk_widgets#type:DragBoundaryDelegate", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        readonly prototype: DragBoundaryDelegate<_Selected0>;
        implement(args: readonly [], implementation: Partial<DragBoundaryDelegate<_Selected0>>): DragBoundaryDelegate<_Selected0>;
    } & _FlaxInstanceType<DragBoundaryDelegate<_Selected0>> & _FlaxDartType<DragBoundaryDelegate<_Selected0>> : never : never;
}
export {};
