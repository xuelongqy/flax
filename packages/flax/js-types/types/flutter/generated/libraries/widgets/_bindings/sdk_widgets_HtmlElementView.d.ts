import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_PlatformViewHitTestBehavior';
import '@flax/flutter/rendering/_bindings/sdk_rendering_PlatformViewHitTestBehavior';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface HtmlElementView extends _FlaxDartWidget, Omit<upstream0.StatelessWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatelessWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/platform_view.dart::HtmlElementView": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __HtmlElementView: unique symbol;
    readonly [_flaxDartTypeValue]: HtmlElementView;
    readonly viewType: string;
    readonly onPlatformViewCreated: ((id: number) => void) | null;
    readonly creationParams: unknown | null;
    readonly hitTestBehavior: upstream2.PlatformViewHitTestBehavior;
    readonly key: upstream1.Key | null;
    build(context: upstream3.BuildContext): Widget;
    createElement(): upstream4.StatelessElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream6.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream6.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream8.DiagnosticsTreeStyle | null | undefined;
    }): upstream7.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream7.DiagnosticsNode>;
}
export declare function _HtmlElementViewFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    viewType: string;
    onPlatformViewCreated?: ((id: number) => void) | null | undefined;
    creationParams?: unknown | null | undefined;
    hitTestBehavior?: upstream2.PlatformViewHitTestBehavior | undefined;
}): HtmlElementView;
export declare namespace _HtmlElementViewFactory {
    const __flaxJsx: {
        readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof _HtmlElementViewFactory>[0]>);
        readonly slot: null;
        readonly many: false;
    };
}
export declare namespace _HtmlElementViewFactory {
    function fromTagName(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        tagName: string;
        isVisible?: boolean | undefined;
        onElementCreated?: ((element: {}) => void) | null | undefined;
        hitTestBehavior?: upstream2.PlatformViewHitTestBehavior | undefined;
    }): HtmlElementView;
    namespace fromTagName {
        const __flaxJsx: {
            readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof fromTagName>[0]>);
            readonly slot: null;
            readonly many: false;
        };
    }
}
export declare const HtmlElementView: typeof _HtmlElementViewFactory & _FlaxInstanceType<HtmlElementView> & _FlaxDartType<HtmlElementView, readonly ["class", "flax.core/sdk_widgets#type:HtmlElementView", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "viewType" | "onPlatformViewCreated" | "creationParams" | "hitTestBehavior" | "key" | "build" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/platform_view.dart::HtmlElementView" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
