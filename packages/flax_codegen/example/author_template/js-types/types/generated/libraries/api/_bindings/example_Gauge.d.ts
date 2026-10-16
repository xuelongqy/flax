import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Gauge extends Readonly<{
  '__flaxBound:package:your_package/src/gauge.dart::Gauge': readonly [];
}> {
  readonly __Gauge: unique symbol;
  get value(): number;
  increment(by?: number): void;
  set value(value: number);
}
declare function _GaugeFactory(options?: { value?: number | undefined }): Gauge;
export declare const Gauge: typeof _GaugeFactory &
  _FlaxInstanceType<Gauge> &
  _FlaxDartType<
    Gauge,
    readonly ['class', 'vendor.example/example#type:Gauge', readonly [], false]
  >;
export {};
