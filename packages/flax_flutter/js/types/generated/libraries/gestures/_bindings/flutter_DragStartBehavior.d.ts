import { type FlaxInstanceType as _FlaxInstanceType, type DartEnum } from '@flax/core/bindings';
export interface DragStartBehavior extends DartEnum {
    readonly __DragStartBehavior: unique symbol;
    readonly name: string;
    readonly index: number;
}
export declare const DragStartBehavior: Readonly<{
    down: DragStartBehavior;
    start: DragStartBehavior;
    values: readonly DragStartBehavior[];
} & _FlaxInstanceType<DragStartBehavior>>;
