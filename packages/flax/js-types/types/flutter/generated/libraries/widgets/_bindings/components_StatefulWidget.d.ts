import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface StatefulWidget extends _FlaxDartWidget {
    readonly __StatefulWidget: unique symbol;
}
export declare const StatefulWidget: object & _FlaxInstanceType<StatefulWidget> & _FlaxDartType<StatefulWidget, readonly ["class", "flax.core/components#type:StatefulWidget", readonly [], false]>;
