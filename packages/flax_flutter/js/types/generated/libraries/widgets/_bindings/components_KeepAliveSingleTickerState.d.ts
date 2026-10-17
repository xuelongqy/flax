import { type Widget, type ComponentContext } from '@flax/core/bindings';
import { State as _FlaxComponentState, StatefulWidget as _FlaxComponentStatefulWidget } from '../../../../components.js';
import type * as upstream0 from '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
export interface KeepAliveSingleTickerState<T extends _FlaxComponentStatefulWidget = _FlaxComponentStatefulWidget> extends upstream0.TickerProvider {
}
export interface KeepAliveSingleTickerState<T extends _FlaxComponentStatefulWidget = _FlaxComponentStatefulWidget> {
    updateKeepAlive(): void;
}
export declare abstract class KeepAliveSingleTickerState<T extends _FlaxComponentStatefulWidget = _FlaxComponentStatefulWidget> extends _FlaxComponentState<T> {
    constructor();
    abstract get wantKeepAlive(): boolean;
    build(context: ComponentContext): Widget;
}
