import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type DartMap, type DartMapInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DiagnosticsSerializationDelegate extends Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [];
}> {
    readonly __DiagnosticsSerializationDelegate: unique symbol;
    readonly [_flaxDartTypeValue]: DiagnosticsSerializationDelegate;
    readonly subtreeDepth: number;
    readonly includeProperties: boolean;
    readonly expandPropertyValues: boolean;
    additionalNodeProperties(node: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
    }>, options?: {
        fullDetails?: boolean | undefined;
    }): DartMap<string, unknown | null>;
    filterChildren(nodes: DartListInput<upstream0.DiagnosticsNode, Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
    }>>, owner: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
    }>): DartList<upstream0.DiagnosticsNode>;
    filterProperties(nodes: DartListInput<upstream0.DiagnosticsNode, Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
    }>>, owner: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
    }>): DartList<upstream0.DiagnosticsNode>;
    truncateNodesList(nodes: DartListInput<upstream0.DiagnosticsNode, Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
    }>>, owner: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
    }> | null): DartList<upstream0.DiagnosticsNode>;
    delegateForNode(node: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
    }>): DiagnosticsSerializationDelegate;
    copyWith(options?: {
        includeProperties?: boolean | undefined;
        subtreeDepth?: number | undefined;
    }): DiagnosticsSerializationDelegate;
}
export declare function _DiagnosticsSerializationDelegateFactory(options?: {
    subtreeDepth?: number | undefined;
    includeProperties?: boolean | undefined;
}): DiagnosticsSerializationDelegate;
export declare namespace _DiagnosticsSerializationDelegateFactory {
    function implement(args: [], implementation: {
        additionalNodeProperties: ((node: upstream0.DiagnosticsNode, options?: {
            fullDetails?: boolean | undefined;
        }) => DartMapInput<string, unknown | null, string, unknown | null>);
        filterChildren: ((nodes: DartList<upstream0.DiagnosticsNode>, owner: upstream0.DiagnosticsNode) => DartListInput<upstream0.DiagnosticsNode, Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
        }>>);
        filterProperties: ((nodes: DartList<upstream0.DiagnosticsNode>, owner: upstream0.DiagnosticsNode) => DartListInput<upstream0.DiagnosticsNode, Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
        }>>);
        truncateNodesList: ((nodes: DartList<upstream0.DiagnosticsNode>, owner: upstream0.DiagnosticsNode | null) => DartListInput<upstream0.DiagnosticsNode, Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsNode": readonly [];
        }>>);
        delegateForNode: ((node: upstream0.DiagnosticsNode) => Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [];
        }>);
        copyWith: ((options?: {
            subtreeDepth?: number | undefined;
            includeProperties?: boolean | undefined;
        }) => Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticsSerializationDelegate": readonly [];
        }>);
        get subtreeDepth(): number;
        get includeProperties(): boolean;
        get expandPropertyValues(): boolean;
    }): DiagnosticsSerializationDelegate;
}
export declare const DiagnosticsSerializationDelegate: typeof _DiagnosticsSerializationDelegateFactory & _FlaxInstanceType<DiagnosticsSerializationDelegate> & _FlaxDartType<DiagnosticsSerializationDelegate, readonly ["class", "flax.core/sdk_foundation#type:DiagnosticsSerializationDelegate", readonly [], false]>;
