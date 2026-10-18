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
}
export interface GestureRecognizerFactoryWithHandlers<T extends upstream0.GestureRecognizer = upstream0.GestureRecognizer> {
    readonly [_flaxDartTypeValue]: GestureRecognizerFactoryWithHandlers<T>;
    ["constructor"](): T;
    initializer(instance: (T | DartInput<T>)): void;
}
export declare abstract class GestureRecognizerFactoryWithHandlers<T extends upstream0.GestureRecognizer = upstream0.GestureRecognizer> extends _FlaxProxyBase {
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
export declare namespace GestureRecognizerFactoryWithHandlers {
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
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "constructor" | "initializer" | "__flaxBound:package:flutter/src/widgets/gesture_detector.dart::GestureRecognizerFactoryWithHandlers" | "__flaxBound:package:flutter/src/widgets/gesture_detector.dart::GestureRecognizerFactory";
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.GestureRecognizer] ? (abstract new (_constructor: (() => Readonly<{
        "__flaxBound:package:flutter/src/gestures/recognizer.dart::GestureRecognizer": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/arena.dart::GestureArenaMember": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>), _initializer: ((instance: upstream0.GestureRecognizer) => void)) => GestureRecognizerFactoryWithHandlers<_Selected0>) & {
        readonly prototype: GestureRecognizerFactoryWithHandlers<_Selected0>;
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
        }>), ((instance: upstream0.GestureRecognizer) => void)], implementation: Partial<GestureRecognizerFactoryWithHandlers<_Selected0>>): GestureRecognizerFactoryWithHandlers<_Selected0>;
    } & _FlaxInstanceType<GestureRecognizerFactoryWithHandlers<_Selected0>> & _FlaxDartType<GestureRecognizerFactoryWithHandlers<_Selected0>> : never : never;
}
export {};
