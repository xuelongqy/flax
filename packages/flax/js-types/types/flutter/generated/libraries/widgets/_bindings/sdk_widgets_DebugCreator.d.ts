import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Element';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Element';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DebugCreator extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::DebugCreator": readonly [];
}> {
    readonly __DebugCreator: unique symbol;
    readonly [_flaxDartTypeValue]: DebugCreator;
    readonly element: upstream0.Element;
    toString(): string;
}
export declare function _DebugCreatorFactory(element: Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [];
}>): DebugCreator;
export interface _DebugCreatorNative extends DebugCreator {
    readonly [_flaxDartTypeValue]: _DebugCreatorNative;
    toString(): string;
    get element(): upstream0.Element;
}
export declare abstract class _DebugCreatorNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DebugCreator>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DebugCreator;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:DebugCreator", readonly [], false];
    constructor(element: Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [];
    }>);
}
export declare namespace _DebugCreatorFactory {
    function implement(args: [element: Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [];
    }>], implementation: {}): DebugCreator;
}
declare const _DebugCreatorBinding: typeof _DebugCreatorFactory & (new (element: Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [];
}>) => _DebugCreatorNative);
export declare const DebugCreator: typeof _DebugCreatorBinding & _FlaxInstanceType<DebugCreator> & _FlaxDartType<DebugCreator, readonly ["class", "flax.core/sdk_widgets#type:DebugCreator", readonly [], false]>;
export {};
