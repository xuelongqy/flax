import { type FlaxInstanceType as _FlaxInstanceType, type DartList } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface DiagnosticPropertiesBuilder extends Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
}> {
    readonly __DiagnosticPropertiesBuilder: unique symbol;
    readonly [_flaxDartTypeValue]: DiagnosticPropertiesBuilder;
}
export interface DiagnosticPropertiesBuilder {
    readonly [_flaxDartTypeValue]: DiagnosticPropertiesBuilder;
    add(property: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
    }>): void;
    get properties(): DartList<upstream0.DiagnosticsNode>;
    get defaultDiagnosticsTreeStyle(): upstream1.DiagnosticsTreeStyle;
    get emptyBodyDescription(): string | null;
    set defaultDiagnosticsTreeStyle(value: upstream1.DiagnosticsTreeStyle);
    set emptyBodyDescription(value: string | null);
}
export declare abstract class DiagnosticPropertiesBuilder extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DiagnosticPropertiesBuilder>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DiagnosticPropertiesBuilder;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_foundation#type:DiagnosticPropertiesBuilder", readonly [], false];
    constructor();
}
export declare namespace DiagnosticPropertiesBuilder {
    function implement(args: [], implementation: {}): DiagnosticPropertiesBuilder;
}
