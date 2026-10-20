import { type FlaxInstanceType as _FlaxInstanceType, type DartMapInput, type DartSetInput, type DartInput } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetStatesConstraint';
import '@flax/flutter/widgets/_bindings/sdk_widgets_WidgetStatesConstraint';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface WidgetStateMapper<T extends unknown | null = unknown | null> extends Omit<upstream0.WidgetStateProperty<T>, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.WidgetStateProperty<T>>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateMapper": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __WidgetStateMapper: unique symbol;
    readonly [_flaxDartTypeValue]: WidgetStateMapper<T>;
    resolve(states: DartSetInput<upstream3.WidgetState, upstream3.WidgetState>): T;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream4.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream6.DiagnosticsTreeStyle | null | undefined;
    }): upstream5.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>, options?: {
        prefix?: string | undefined;
    }): void;
}
export declare function _WidgetStateMapperFactory<T extends unknown | null = unknown | null>(map: DartMapInput<upstream2.WidgetStatesConstraint, _FlaxDartOutput<T>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [];
}>, (T | _FlaxDartOutput<T>)>): WidgetStateMapper<T>;
export declare function _WidgetStateMapperFactory(map: DartMapInput<upstream2.WidgetStatesConstraint, unknown | null, Readonly<{
    "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [];
}>, unknown | null>): WidgetStateMapper<unknown | null>;
export interface _WidgetStateMapperNative<T extends unknown | null = unknown | null> extends WidgetStateMapper<T> {
    readonly [_flaxDartTypeValue]: _WidgetStateMapperNative<T>;
    resolve(states: DartSetInput<upstream3.WidgetState, upstream3.WidgetState>): T;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream4.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream6.DiagnosticsTreeStyle | null | undefined;
    }): upstream5.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>, options?: {
        prefix?: string | undefined;
    }): void;
}
export declare abstract class _WidgetStateMapperNative<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<WidgetStateMapper<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: WidgetStateMapper<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:WidgetStateMapper", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor(map: DartMapInput<upstream2.WidgetStatesConstraint, unknown | null, Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [];
    }>, unknown | null>);
}
export declare namespace _WidgetStateMapperFactory {
    function implement<T extends unknown | null = unknown | null>(args: [map: DartMapInput<upstream2.WidgetStatesConstraint, unknown | null, Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [];
    }>, unknown | null>], implementation: {}): WidgetStateMapper<T>;
}
declare const _WidgetStateMapperBinding: typeof _WidgetStateMapperFactory & (new <T extends unknown | null = unknown | null>(map: DartMapInput<upstream2.WidgetStatesConstraint, unknown | null, Readonly<{
    "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [];
}>, unknown | null>) => _WidgetStateMapperNative<T>);
export declare const WidgetStateMapper: typeof _WidgetStateMapperBinding & _FlaxInstanceType<WidgetStateMapper<unknown | null>> & _FlaxDartType<WidgetStateMapper<unknown | null>, readonly ["class", "flax.core/sdk_widgets#type:WidgetStateMapper", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "resolve" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateMapper" | "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (map: DartMapInput<upstream2.WidgetStatesConstraint, unknown | null, Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [];
    }>, unknown | null>) => _WidgetStateMapperNative<_Selected0>) & {
        (map: DartMapInput<upstream2.WidgetStatesConstraint, _Selected0, Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [];
        }>, (_Selected0 | DartInput<_Selected0>)>): _WidgetStateMapperNative<_Selected0>;
        readonly prototype: _WidgetStateMapperNative<_Selected0>;
        implement(args: readonly [DartMapInput<upstream2.WidgetStatesConstraint, unknown | null, Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [];
        }>, unknown | null>], implementation: Partial<_WidgetStateMapperNative<_Selected0>>): _WidgetStateMapperNative<_Selected0>;
    } & _FlaxInstanceType<_WidgetStateMapperNative<_Selected0>> & _FlaxDartType<_WidgetStateMapperNative<_Selected0>> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (new (map: DartMapInput<upstream2.WidgetStatesConstraint, unknown | null, Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [];
    }>, unknown | null>) => _WidgetStateMapperNative<_Selected0>) & {
        (map: DartMapInput<upstream2.WidgetStatesConstraint, _Selected0, Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [];
        }>, (_Selected0 | DartInput<_Selected0>)>): _WidgetStateMapperNative<_Selected0>;
        readonly prototype: _WidgetStateMapperNative<_Selected0>;
        implement(args: readonly [DartMapInput<upstream2.WidgetStatesConstraint, unknown | null, Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStatesConstraint": readonly [];
        }>, unknown | null>], implementation: Partial<_WidgetStateMapperNative<_Selected0>>): _WidgetStateMapperNative<_Selected0>;
    } & _FlaxInstanceType<_WidgetStateMapperNative<_Selected0>> & _FlaxDartType<_WidgetStateMapperNative<_Selected0>> : never : never;
}
export {};
