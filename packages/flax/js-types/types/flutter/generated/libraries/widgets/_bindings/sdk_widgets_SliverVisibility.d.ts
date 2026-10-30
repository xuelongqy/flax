import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SliverVisibility extends _FlaxDartWidget, Omit<upstream0.StatelessWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatelessWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/indexed_stack.dart::SliverVisibility": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __SliverVisibility: unique symbol;
    readonly [_flaxDartTypeValue]: SliverVisibility;
    readonly sliver: Widget;
    readonly replacementSliver: Widget;
    readonly visible: boolean;
    readonly maintainState: boolean;
    readonly maintainAnimation: boolean;
    readonly maintainSize: boolean;
    readonly maintainSemantics: boolean;
    readonly maintainInteractivity: boolean;
    readonly key: upstream1.Key | null;
    build(context: upstream2.BuildContext): Widget;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    createElement(): upstream4.StatelessElement;
    toStringShort(): string;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream5.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream5.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream7.DiagnosticsTreeStyle | null | undefined;
    }): upstream6.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream6.DiagnosticsNode>;
}
export declare function _SliverVisibilityFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    sliver: Widget;
    replacementSliver?: Widget | undefined;
    visible?: boolean | undefined;
    maintainState?: boolean | undefined;
    maintainAnimation?: boolean | undefined;
    maintainSize?: boolean | undefined;
    maintainSemantics?: boolean | undefined;
    maintainInteractivity?: boolean | undefined;
}): SliverVisibility;
export declare namespace _SliverVisibilityFactory {
    const __flaxJsx: {
        readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof _SliverVisibilityFactory>[0]>);
        readonly slot: null;
        readonly many: false;
    };
}
export declare namespace _SliverVisibilityFactory {
    function maintain(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        sliver: Widget;
        replacementSliver?: Widget | undefined;
        visible?: boolean | undefined;
    }): SliverVisibility;
    namespace maintain {
        const __flaxJsx: {
            readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof maintain>[0]>);
            readonly slot: null;
            readonly many: false;
        };
    }
}
export declare const SliverVisibility: typeof _SliverVisibilityFactory & _FlaxInstanceType<SliverVisibility> & _FlaxDartType<SliverVisibility, readonly ["class", "flax.core/sdk_widgets#type:SliverVisibility", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "sliver" | "replacementSliver" | "visible" | "maintainState" | "maintainAnimation" | "maintainSize" | "maintainSemantics" | "maintainInteractivity" | "key" | "build" | "debugFillProperties" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/indexed_stack.dart::SliverVisibility" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
