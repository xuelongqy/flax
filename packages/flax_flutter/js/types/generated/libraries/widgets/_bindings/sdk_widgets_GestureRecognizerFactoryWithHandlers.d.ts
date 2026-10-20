import { type FlaxInstanceType as _FlaxInstanceType, type DartInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/gestures/_bindings/sdk_gestures_GestureRecognizer';
import '@flax/flutter/gestures/_bindings/sdk_gestures_GestureRecognizer';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_GestureRecognizerFactory';
import '@flax/flutter/widgets/_bindings/sdk_widgets_GestureRecognizerFactory';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface GestureRecognizerFactoryWithHandlers<T extends upstream0.GestureRecognizer = upstream0.GestureRecognizer> extends Omit<upstream1.GestureRecognizerFactory<T>, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/gesture_detector.dart::GestureRecognizerFactoryWithHandlers": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/gesture_detector.dart::GestureRecognizerFactory": readonly [T];
}> {
    readonly __GestureRecognizerFactoryWithHandlers: unique symbol;
    readonly [_flaxDartTypeValue]: GestureRecognizerFactoryWithHandlers<T>;
    ["constructor"](): T;
    initializer(instance: (T | DartInput<T>)): void;
}
export declare function _GestureRecognizerFactoryWithHandlersFactory<T extends upstream0.GestureRecognizer = upstream0.GestureRecognizer>(_constructor: (() => (T | DartInput<T>)), _initializer: ((instance: T) => void)): GestureRecognizerFactoryWithHandlers<T>;
export declare function _GestureRecognizerFactoryWithHandlersFactory(_constructor: (() => Readonly<{
    "__flaxBound:package:flutter/src/gestures/recognizer.dart::GestureRecognizer": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaMember": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>), _initializer: ((instance: upstream0.GestureRecognizer) => void)): GestureRecognizerFactoryWithHandlers<upstream0.GestureRecognizer>;
export interface _GestureRecognizerFactoryWithHandlersNative<T extends upstream0.GestureRecognizer = upstream0.GestureRecognizer> extends GestureRecognizerFactoryWithHandlers<T> {
    readonly [_flaxDartTypeValue]: _GestureRecognizerFactoryWithHandlersNative<T>;
    ["constructor"](): T;
    initializer(instance: (T | DartInput<T>)): void;
}
export declare abstract class _GestureRecognizerFactoryWithHandlersNative<T extends upstream0.GestureRecognizer = upstream0.GestureRecognizer> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<GestureRecognizerFactoryWithHandlers<upstream0.GestureRecognizer>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: GestureRecognizerFactoryWithHandlers<upstream0.GestureRecognizer>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:GestureRecognizerFactoryWithHandlers", readonly [readonly ["class", "flax.core/sdk_gestures#type:GestureRecognizer", readonly [], false]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor(_constructor: (() => Readonly<{
        "__flaxBound:package:flutter/src/gestures/recognizer.dart::GestureRecognizer": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaMember": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>), _initializer: ((instance: upstream0.GestureRecognizer) => void));
}
export declare namespace _GestureRecognizerFactoryWithHandlersFactory {
    function implement<T extends upstream0.GestureRecognizer = upstream0.GestureRecognizer>(args: [_constructor: (() => Readonly<{
        "__flaxBound:package:flutter/src/gestures/recognizer.dart::GestureRecognizer": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaMember": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>), _initializer: ((instance: upstream0.GestureRecognizer) => void)], implementation: {}): GestureRecognizerFactoryWithHandlers<T>;
}
declare const _GestureRecognizerFactoryWithHandlersBinding: typeof _GestureRecognizerFactoryWithHandlersFactory & (new <T extends upstream0.GestureRecognizer = upstream0.GestureRecognizer>(_constructor: (() => Readonly<{
    "__flaxBound:package:flutter/src/gestures/recognizer.dart::GestureRecognizer": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaMember": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>), _initializer: ((instance: upstream0.GestureRecognizer) => void)) => _GestureRecognizerFactoryWithHandlersNative<T>);
export declare const GestureRecognizerFactoryWithHandlers: typeof _GestureRecognizerFactoryWithHandlersBinding & _FlaxInstanceType<GestureRecognizerFactoryWithHandlers<upstream0.GestureRecognizer>> & _FlaxDartType<GestureRecognizerFactoryWithHandlers<upstream0.GestureRecognizer>, readonly ["class", "flax.core/sdk_widgets#type:GestureRecognizerFactoryWithHandlers", readonly [readonly ["class", "flax.core/sdk_gestures#type:GestureRecognizer", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "constructor" | "initializer" | "__flaxBound:package:flutter/src/widgets/gesture_detector.dart::GestureRecognizerFactoryWithHandlers" | "__flaxBound:package:flutter/src/widgets/gesture_detector.dart::GestureRecognizerFactory";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.GestureRecognizer] ? (new (_constructor: (() => Readonly<{
        "__flaxBound:package:flutter/src/gestures/recognizer.dart::GestureRecognizer": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaMember": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>), _initializer: ((instance: upstream0.GestureRecognizer) => void)) => _GestureRecognizerFactoryWithHandlersNative<_Selected0>) & {
        (_constructor: (() => (_Selected0 | DartInput<_Selected0>)), _initializer: ((instance: _Selected0) => void)): _GestureRecognizerFactoryWithHandlersNative<_Selected0>;
        readonly prototype: _GestureRecognizerFactoryWithHandlersNative<_Selected0>;
        implement(args: readonly [(() => Readonly<{
            "__flaxBound:package:flutter/src/gestures/recognizer.dart::GestureRecognizer": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaMember": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>), ((instance: upstream0.GestureRecognizer) => void)], implementation: Partial<_GestureRecognizerFactoryWithHandlersNative<_Selected0>>): _GestureRecognizerFactoryWithHandlersNative<_Selected0>;
    } & _FlaxInstanceType<_GestureRecognizerFactoryWithHandlersNative<_Selected0>> & _FlaxDartType<_GestureRecognizerFactoryWithHandlersNative<_Selected0>> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.GestureRecognizer] ? (new (_constructor: (() => Readonly<{
        "__flaxBound:package:flutter/src/gestures/recognizer.dart::GestureRecognizer": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaMember": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>), _initializer: ((instance: upstream0.GestureRecognizer) => void)) => _GestureRecognizerFactoryWithHandlersNative<_Selected0>) & {
        (_constructor: (() => (_Selected0 | DartInput<_Selected0>)), _initializer: ((instance: _Selected0) => void)): _GestureRecognizerFactoryWithHandlersNative<_Selected0>;
        readonly prototype: _GestureRecognizerFactoryWithHandlersNative<_Selected0>;
        implement(args: readonly [(() => Readonly<{
            "__flaxBound:package:flutter/src/gestures/recognizer.dart::GestureRecognizer": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaMember": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>), ((instance: upstream0.GestureRecognizer) => void)], implementation: Partial<_GestureRecognizerFactoryWithHandlersNative<_Selected0>>): _GestureRecognizerFactoryWithHandlersNative<_Selected0>;
    } & _FlaxInstanceType<_GestureRecognizerFactoryWithHandlersNative<_Selected0>> & _FlaxDartType<_GestureRecognizerFactoryWithHandlersNative<_Selected0>> : never : never;
}
export {};
