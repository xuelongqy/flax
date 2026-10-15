import { type Widget, type ComponentContext } from '@flax/core/bindings';
import { State as _FlaxComponentState, StatefulWidget as _FlaxComponentStatefulWidget } from '../../../../components.js';
export interface KeepAliveState<T extends _FlaxComponentStatefulWidget = _FlaxComponentStatefulWidget> {
    updateKeepAlive(): void;
}
export declare abstract class KeepAliveState<T extends _FlaxComponentStatefulWidget = _FlaxComponentStatefulWidget> extends _FlaxComponentState<T> {
    constructor();
    abstract get wantKeepAlive(): boolean;
    build(context: ComponentContext): Widget;
}
