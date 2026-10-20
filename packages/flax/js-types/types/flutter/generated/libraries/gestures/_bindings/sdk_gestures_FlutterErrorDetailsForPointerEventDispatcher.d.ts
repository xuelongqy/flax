import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable, type DartIterableInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_FlutterErrorDetails';
import '@flax/flutter/foundation/_bindings/sdk_foundation_FlutterErrorDetails';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream4 from '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import '@flax/flutter/gestures/_bindings/flutter_PointerEvent';
import type * as upstream5 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestEntry';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestEntry';
import type * as upstream6 from '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestTarget';
import '@flax/flutter/gestures/_bindings/sdk_gestures_HitTestTarget';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface FlutterErrorDetailsForPointerEventDispatcher extends Omit<upstream0.FlutterErrorDetails, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.FlutterErrorDetails>, Readonly<{
    "__flaxBound:package:flutter/src/gestures/binding.dart::FlutterErrorDetailsForPointerEventDispatcher": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/assertions.dart::FlutterErrorDetails": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __FlutterErrorDetailsForPointerEventDispatcher: unique symbol;
    readonly [_flaxDartTypeValue]: FlutterErrorDetailsForPointerEventDispatcher;
    readonly exception: {};
    readonly stack: upstream2.StackTrace | null;
    readonly library: string | null;
    readonly context: upstream3.DiagnosticsNode | null;
    readonly stackFilter: ((input: DartIterableInput<string, string>) => DartIterable<string>) | null;
    readonly informationCollector: (() => DartIterable<upstream3.DiagnosticsNode>) | null;
    readonly silent: boolean;
    readonly summary: upstream3.DiagnosticsNode;
    readonly event: upstream4.PointerEvent | null;
    readonly hitTestEntry: upstream5.HitTestEntry<upstream6.HitTestTarget> | null;
    copyWith(options?: {
        context?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
        }> | null | undefined;
        exception?: unknown | null | undefined;
        informationCollector?: (() => DartIterableInput<upstream3.DiagnosticsNode, Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
        }>>) | null | undefined;
        library?: string | null | undefined;
        silent?: boolean | null | undefined;
        stack?: Readonly<{
            "__flaxBound:dart:core::StackTrace": readonly [];
        }> | null | undefined;
        stackFilter?: ((input: DartIterable<string>) => DartIterableInput<string, string>) | null | undefined;
    }): upstream0.FlutterErrorDetails;
    exceptionAsString(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream8.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream9.DiagnosticsTreeStyle | null | undefined;
    }): upstream3.DiagnosticsNode;
}
export declare function _FlutterErrorDetailsForPointerEventDispatcherFactory(options: {
    exception: {};
    stack?: Readonly<{
        "__flaxBound:dart:core::StackTrace": readonly [];
    }> | null | undefined;
    library?: string | null | undefined;
    context?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
    }> | null | undefined;
    event?: (Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    hitTestEntry?: Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestEntry": readonly [upstream6.HitTestTarget];
    }> | null | undefined;
    informationCollector?: (() => DartIterableInput<upstream3.DiagnosticsNode, Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
    }>>) | null | undefined;
    silent?: boolean | undefined;
}): FlutterErrorDetailsForPointerEventDispatcher;
export interface _FlutterErrorDetailsForPointerEventDispatcherNative extends FlutterErrorDetailsForPointerEventDispatcher {
    readonly [_flaxDartTypeValue]: _FlutterErrorDetailsForPointerEventDispatcherNative;
    copyWith(options?: {
        context?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
        }> | null | undefined;
        exception?: unknown | null | undefined;
        informationCollector?: (() => DartIterableInput<upstream3.DiagnosticsNode, Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
        }>>) | null | undefined;
        library?: string | null | undefined;
        silent?: boolean | null | undefined;
        stack?: Readonly<{
            "__flaxBound:dart:core::StackTrace": readonly [];
        }> | null | undefined;
        stackFilter?: ((input: DartIterable<string>) => DartIterableInput<string, string>) | null | undefined;
    }): upstream0.FlutterErrorDetails;
    exceptionAsString(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream8.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream9.DiagnosticsTreeStyle | null | undefined;
    }): upstream3.DiagnosticsNode;
    get event(): upstream4.PointerEvent | null;
    get hitTestEntry(): upstream5.HitTestEntry<upstream6.HitTestTarget> | null;
    get exception(): {};
    get stack(): upstream2.StackTrace | null;
    get library(): string | null;
    get context(): upstream3.DiagnosticsNode | null;
    get stackFilter(): ((input: DartIterableInput<string, string>) => DartIterable<string>) | null;
    get informationCollector(): (() => DartIterable<upstream3.DiagnosticsNode>) | null;
    get silent(): boolean;
    get summary(): upstream3.DiagnosticsNode;
}
export declare abstract class _FlutterErrorDetailsForPointerEventDispatcherNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<FlutterErrorDetailsForPointerEventDispatcher>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: FlutterErrorDetailsForPointerEventDispatcher;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_gestures#type:FlutterErrorDetailsForPointerEventDispatcher", readonly [], false];
    constructor(options: {
        exception: {};
        stack?: Readonly<{
            "__flaxBound:dart:core::StackTrace": readonly [];
        }> | null | undefined;
        library?: string | null | undefined;
        context?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
        }> | null | undefined;
        event?: (Readonly<{
            "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        hitTestEntry?: Readonly<{
            "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestEntry": readonly [upstream6.HitTestTarget];
        }> | null | undefined;
        informationCollector?: (() => DartIterableInput<upstream3.DiagnosticsNode, Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
        }>>) | null | undefined;
        silent?: boolean | undefined;
    });
}
export declare namespace _FlutterErrorDetailsForPointerEventDispatcherFactory {
    function implement(args: [options: {
        exception: {};
        stack?: Readonly<{
            "__flaxBound:dart:core::StackTrace": readonly [];
        }> | null | undefined;
        library?: string | null | undefined;
        context?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
        }> | null | undefined;
        event?: (Readonly<{
            "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        hitTestEntry?: Readonly<{
            "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestEntry": readonly [upstream6.HitTestTarget];
        }> | null | undefined;
        informationCollector?: (() => DartIterableInput<upstream3.DiagnosticsNode, Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
        }>>) | null | undefined;
        silent?: boolean | undefined;
    }], implementation: {}): FlutterErrorDetailsForPointerEventDispatcher;
}
declare const _FlutterErrorDetailsForPointerEventDispatcherBinding: typeof _FlutterErrorDetailsForPointerEventDispatcherFactory & (new (options: {
    exception: {};
    stack?: Readonly<{
        "__flaxBound:dart:core::StackTrace": readonly [];
    }> | null | undefined;
    library?: string | null | undefined;
    context?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
    }> | null | undefined;
    event?: (Readonly<{
        "__flaxBound:package:flutter/src/gestures/events.dart::PointerEvent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    hitTestEntry?: Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestEntry": readonly [upstream6.HitTestTarget];
    }> | null | undefined;
    informationCollector?: (() => DartIterableInput<upstream3.DiagnosticsNode, Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
    }>>) | null | undefined;
    silent?: boolean | undefined;
}) => _FlutterErrorDetailsForPointerEventDispatcherNative);
export declare const FlutterErrorDetailsForPointerEventDispatcher: typeof _FlutterErrorDetailsForPointerEventDispatcherBinding & _FlaxInstanceType<FlutterErrorDetailsForPointerEventDispatcher> & _FlaxDartType<FlutterErrorDetailsForPointerEventDispatcher, readonly ["class", "flax.core/sdk_gestures#type:FlutterErrorDetailsForPointerEventDispatcher", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "exception" | "stack" | "library" | "context" | "stackFilter" | "informationCollector" | "silent" | "summary" | "event" | "hitTestEntry" | "copyWith" | "exceptionAsString" | "debugFillProperties" | "toStringShort" | "toString" | "toDiagnosticsNode" | "__flaxBound:package:flutter/src/gestures/binding.dart::FlutterErrorDetailsForPointerEventDispatcher" | "__flaxBound:package:flutter/src/foundation/assertions.dart::FlutterErrorDetails" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
