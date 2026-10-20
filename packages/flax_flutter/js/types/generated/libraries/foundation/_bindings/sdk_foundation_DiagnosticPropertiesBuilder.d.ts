import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DiagnosticPropertiesBuilder extends Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
}> {
    readonly __DiagnosticPropertiesBuilder: unique symbol;
    readonly [_flaxDartTypeValue]: DiagnosticPropertiesBuilder;
    readonly properties: DartList<upstream0.DiagnosticsNode>;
    get defaultDiagnosticsTreeStyle(): upstream1.DiagnosticsTreeStyle;
    get emptyBodyDescription(): string | null;
    add(property: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
    }>): void;
    set defaultDiagnosticsTreeStyle(value: upstream1.DiagnosticsTreeStyle);
    set emptyBodyDescription(value: string | null);
}
export declare function _DiagnosticPropertiesBuilderFactory(): DiagnosticPropertiesBuilder;
export declare namespace _DiagnosticPropertiesBuilderFactory {
    function fromProperties(properties: DartListInput<upstream0.DiagnosticsNode, Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
    }>>): DiagnosticPropertiesBuilder;
}
export interface _DiagnosticPropertiesBuilderNative extends DiagnosticPropertiesBuilder {
    readonly [_flaxDartTypeValue]: _DiagnosticPropertiesBuilderNative;
    readonly [_flaxDartConstructors]?: {
        "": () => void;
        "fromProperties": (properties: DartListInput<upstream0.DiagnosticsNode, Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
        }>>) => void;
    };
    add(property: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
    }>): void;
    get properties(): DartList<upstream0.DiagnosticsNode>;
    get defaultDiagnosticsTreeStyle(): upstream1.DiagnosticsTreeStyle;
    get emptyBodyDescription(): string | null;
    set defaultDiagnosticsTreeStyle(value: upstream1.DiagnosticsTreeStyle);
    set emptyBodyDescription(value: string | null);
}
export declare abstract class _DiagnosticPropertiesBuilderNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DiagnosticPropertiesBuilder>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DiagnosticPropertiesBuilder;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:DiagnosticPropertiesBuilder", readonly [], false];
    constructor();
    constructor(call: _FlaxProxySuper<_DiagnosticPropertiesBuilderNative>);
}
export declare namespace _DiagnosticPropertiesBuilderFactory {
    function implement(args: [], implementation: {}): DiagnosticPropertiesBuilder;
}
declare const _DiagnosticPropertiesBuilderBinding: typeof _DiagnosticPropertiesBuilderFactory & (new () => _DiagnosticPropertiesBuilderNative) & (new (call: _FlaxProxySuper<_DiagnosticPropertiesBuilderNative>) => _DiagnosticPropertiesBuilderNative);
export declare const DiagnosticPropertiesBuilder: typeof _DiagnosticPropertiesBuilderBinding & _FlaxInstanceType<DiagnosticPropertiesBuilder> & _FlaxDartType<DiagnosticPropertiesBuilder, readonly ["class", "flax.core/sdk_foundation#type:DiagnosticPropertiesBuilder", readonly [], false]>;
export {};
