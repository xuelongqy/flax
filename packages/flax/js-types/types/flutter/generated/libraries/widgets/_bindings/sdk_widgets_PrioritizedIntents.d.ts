import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PrioritizedIntents extends Omit<upstream0.Intent, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.Intent>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/actions.dart::PrioritizedIntents": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __PrioritizedIntents: unique symbol;
    readonly [_flaxDartTypeValue]: PrioritizedIntents;
    readonly orderedIntents: DartList<upstream0.Intent>;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream3.DiagnosticsTreeStyle | null | undefined;
    }): upstream2.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toString(options?: {
        minLevel?: upstream5.DiagnosticLevel | undefined;
    }): string;
}
export declare function _PrioritizedIntentsFactory(options: {
    orderedIntents: DartListInput<upstream0.Intent, Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>>;
}): PrioritizedIntents;
export interface _PrioritizedIntentsNative extends PrioritizedIntents {
    readonly [_flaxDartTypeValue]: _PrioritizedIntentsNative;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream3.DiagnosticsTreeStyle | null | undefined;
    }): upstream2.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toString(options?: {
        minLevel?: upstream5.DiagnosticLevel | undefined;
    }): string;
    get orderedIntents(): DartList<upstream0.Intent>;
}
export declare abstract class _PrioritizedIntentsNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<PrioritizedIntents>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: PrioritizedIntents;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:PrioritizedIntents", readonly [], false];
    constructor(options: {
        orderedIntents: DartListInput<upstream0.Intent, Readonly<{
            "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>>;
    });
}
export declare namespace _PrioritizedIntentsFactory {
    function implement(args: [options: {
        orderedIntents: DartListInput<upstream0.Intent, Readonly<{
            "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>>;
    }], implementation: {}): PrioritizedIntents;
}
declare const _PrioritizedIntentsBinding: typeof _PrioritizedIntentsFactory & (new (options: {
    orderedIntents: DartListInput<upstream0.Intent, Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>>;
}) => _PrioritizedIntentsNative);
export declare const PrioritizedIntents: typeof _PrioritizedIntentsBinding & _FlaxInstanceType<PrioritizedIntents> & _FlaxDartType<PrioritizedIntents, readonly ["class", "flax.core/sdk_widgets#type:PrioritizedIntents", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "orderedIntents" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/widgets/actions.dart::PrioritizedIntents" | "__flaxBound:package:flutter/src/widgets/actions.dart::Intent" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
