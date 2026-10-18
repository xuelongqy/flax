import { type Widget, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import '@flax/flutter/scheduler/_bindings/flutter_TickerProvider';
import { State as _FlaxComponentState, StatefulWidget as _FlaxComponentStatefulWidget } from '../../../../components.js';
import { flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface KeepAliveTickerState<T extends _FlaxComponentStatefulWidget = _FlaxComponentStatefulWidget> extends Omit<upstream0.TickerProvider, typeof _flaxDartTypeValue> {
}
export interface KeepAliveTickerState<T extends _FlaxComponentStatefulWidget = _FlaxComponentStatefulWidget> {
    updateKeepAlive(): void;
}
export declare abstract class KeepAliveTickerState<T extends _FlaxComponentStatefulWidget = _FlaxComponentStatefulWidget> extends _FlaxComponentState<T> {
    constructor();
    abstract get wantKeepAlive(): boolean;
    build(context: ComponentContext): Widget;
}
