declare const pointer: unique symbol;
export type Counter = { readonly [pointer]: true };
export declare function add(a: number, b: number): number;
export declare function counter(value: number): Counter;
export declare function alias(value: Counter): Counter;
export declare function update(value: Counter, delta: number): number;
export declare function close(value: Counter): void;
export declare function inline(
  callback: (value: number) => number,
  value: number,
): number;
export declare function stats(): {
  created: number;
  destroyed: number;
  wrongThreadDestroys: number;
};
