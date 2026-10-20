import { type FlaxInstanceType as _FlaxInstanceType, type DartMap, type DartInput } from '@flax/core/bindings';
import type { DartFunction as _FlaxDartFunction } from '@flax/core/bindings';
import type * as upstream0 from '@flax/material-ui/dependencies/intl/_bindings/dependency_intl_NumberFormat';
import '@flax/material-ui/dependencies/intl/_bindings/dependency_intl_NumberFormat';
import type * as upstream1 from '@flax/material-ui/dependencies/intl/_bindings/dependency_intl_NumberSymbols';
import '@flax/material-ui/dependencies/intl/_bindings/dependency_intl_NumberSymbols';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface NumberParserBase<R extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:package:intl/src/intl/number_parser_base.dart::NumberParserBase": readonly [R];
}> {
    readonly __NumberParserBase: unique symbol;
    readonly [_flaxDartTypeValue]: NumberParserBase<R>;
}
export interface NumberParserBase<R extends unknown | null = unknown | null> {
    readonly [_flaxDartTypeValue]: NumberParserBase<R>;
    invalidFormat(): void;
    handleSpace(): void;
    asDigit(char: string): number | null;
    checkPrefixes(options?: {
        skip?: boolean | undefined;
    }): void;
    checkSuffixes(): void;
    processNonDigit(): void;
    parse(): R;
    invalidNumber(): void;
    get format(): upstream0.NumberFormat;
    get text(): string;
    get value(): R | null;
    get symbols(): upstream1.NumberSymbols;
    get gotPositive(): boolean;
    get gotNegative(): boolean;
    get gotPositiveSuffix(): boolean;
    get gotNegativeSuffix(): boolean;
    get done(): boolean;
    get prefixesSkipped(): boolean;
    get scale(): number;
    get replacements(): DartMap<string, _FlaxDartFunction>;
    get groupingIsNotASpaceOrElseItIsSpaceFollowedByADigit(): boolean;
    set value(value: (R | DartInput<R>) | null);
    set gotPositive(value: boolean);
    set gotNegative(value: boolean);
    set gotPositiveSuffix(value: boolean);
    set gotNegativeSuffix(value: boolean);
    set done(value: boolean);
    set prefixesSkipped(value: boolean);
    set scale(value: number);
}
export declare abstract class NumberParserBase<R extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<NumberParserBase<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: NumberParserBase<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/dependency_intl#type:NumberParserBase", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor(format: Readonly<{
        "__flaxBound:package:intl/src/intl/number_format.dart::NumberFormat": readonly [];
    }>, text: string);
    abstract fromNormalized(normalizedText: string): R;
    abstract scaled(parsed: (R | DartInput<R>), scale: number): R;
    abstract nan(): R;
    abstract positiveInfinity(): R;
    abstract negativeInfinity(): R;
}
export declare namespace NumberParserBase {
    function implement<R extends unknown | null = unknown | null>(args: [format: Readonly<{
        "__flaxBound:package:intl/src/intl/number_format.dart::NumberFormat": readonly [];
    }>, text: string], implementation: {
        fromNormalized: ((normalizedText: string) => (R | DartInput<R>));
        scaled: ((parsed: R, scale: number) => (R | DartInput<R>));
        nan: (() => (R | DartInput<R>));
        positiveInfinity: (() => (R | DartInput<R>));
        negativeInfinity: (() => (R | DartInput<R>));
    }): NumberParserBase<R>;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (format: Readonly<{
        "__flaxBound:package:intl/src/intl/number_format.dart::NumberFormat": readonly [];
    }>, text: string) => NumberParserBase<_Selected0>) & {
        readonly prototype: NumberParserBase<_Selected0>;
        implement(args: readonly [Readonly<{
            "__flaxBound:package:intl/src/intl/number_format.dart::NumberFormat": readonly [];
        }>, string], implementation: Partial<NumberParserBase<_Selected0>>): NumberParserBase<_Selected0>;
    } & _FlaxInstanceType<NumberParserBase<_Selected0>> & _FlaxDartType<NumberParserBase<_Selected0>> : never : never;
}
export {};
