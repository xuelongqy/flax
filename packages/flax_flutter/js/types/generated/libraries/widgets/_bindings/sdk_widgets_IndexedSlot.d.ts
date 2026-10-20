import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Element';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Element';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface IndexedSlot<T extends upstream0.Element | null = upstream0.Element | null> extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::IndexedSlot": readonly [T];
}> {
    readonly __IndexedSlot: unique symbol;
    readonly [_flaxDartTypeValue]: IndexedSlot<T>;
    readonly value: T;
    readonly index: number;
}
export declare function _IndexedSlotFactory<T extends upstream0.Element | null = upstream0.Element | null>(index: number, value: (T | DartInput<T>)): IndexedSlot<T>;
export declare function _IndexedSlotFactory(index: number, value: (Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [];
}>) | null): IndexedSlot<upstream0.Element | null>;
export interface _IndexedSlotNative<T extends upstream0.Element | null = upstream0.Element | null> extends IndexedSlot<T> {
    readonly [_flaxDartTypeValue]: _IndexedSlotNative<T>;
    get value(): T;
    get index(): number;
}
export declare abstract class _IndexedSlotNative<T extends upstream0.Element | null = upstream0.Element | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<IndexedSlot<upstream0.Element | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: IndexedSlot<upstream0.Element | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:IndexedSlot", readonly [readonly ["class", "flax.core/sdk_widgets#type:Element", readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor(index: number, value: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [];
    }>) | null);
}
export declare namespace _IndexedSlotFactory {
    function implement<T extends upstream0.Element | null = upstream0.Element | null>(args: [index: number, value: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [];
    }>) | null], implementation: {}): IndexedSlot<T>;
}
declare const _IndexedSlotBinding: typeof _IndexedSlotFactory & (new <T extends upstream0.Element | null = upstream0.Element | null>(index: number, value: (Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [];
}>) | null) => _IndexedSlotNative<T>);
export declare const IndexedSlot: typeof _IndexedSlotBinding & _FlaxInstanceType<IndexedSlot<upstream0.Element | null>> & _FlaxDartType<IndexedSlot<upstream0.Element | null>, readonly ["class", "flax.core/sdk_widgets#type:IndexedSlot", readonly [readonly ["class", "flax.core/sdk_widgets#type:Element", readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Element | null] ? (new (index: number, value: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [];
    }>) | null) => _IndexedSlotNative<_Selected0>) & {
        (index: number, value: (_Selected0 | DartInput<_Selected0>)): _IndexedSlotNative<_Selected0>;
        readonly prototype: _IndexedSlotNative<_Selected0>;
        implement(args: readonly [number, (Readonly<{
            "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [];
        }>) | null], implementation: Partial<_IndexedSlotNative<_Selected0>>): _IndexedSlotNative<_Selected0>;
    } & _FlaxInstanceType<_IndexedSlotNative<_Selected0>> & _FlaxDartType<_IndexedSlotNative<_Selected0>> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.Element | null] ? (new (index: number, value: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [];
    }>) | null) => _IndexedSlotNative<_Selected0>) & {
        (index: number, value: (_Selected0 | DartInput<_Selected0>)): _IndexedSlotNative<_Selected0>;
        readonly prototype: _IndexedSlotNative<_Selected0>;
        implement(args: readonly [number, (Readonly<{
            "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [];
        }>) | null], implementation: Partial<_IndexedSlotNative<_Selected0>>): _IndexedSlotNative<_Selected0>;
    } & _FlaxInstanceType<_IndexedSlotNative<_Selected0>> & _FlaxDartType<_IndexedSlotNative<_Selected0>> : never : never;
}
export {};
