export interface Gauge extends Readonly<{
  '__flaxBound:package:your_package/src/gauge.dart::Gauge': readonly [];
}> {
  readonly __Gauge: unique symbol;
  get value(): number;
  increment(by?: number): void;
  set value(value: number);
}
export declare function Gauge(options?: { value?: number | undefined }): Gauge;
