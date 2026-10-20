import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream3 from '@flax/cupertino-ui/_bindings/cupertino_RefreshIndicatorMode';
import '@flax/cupertino-ui/_bindings/cupertino_RefreshIndicatorMode';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CupertinoSliverRefreshControl extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:cupertino_ui/src/refresh.dart::CupertinoSliverRefreshControl": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __CupertinoSliverRefreshControl: unique symbol;
    readonly [_flaxDartTypeValue]: CupertinoSliverRefreshControl;
    readonly refreshTriggerPullDistance: number;
    readonly refreshIndicatorExtent: number;
    readonly builder: ((context: upstream2.BuildContext, refreshState: upstream3.RefreshIndicatorMode, pulledExtent: number, refreshTriggerPullDistance: number, refreshIndicatorExtent: number) => Widget) | null;
    readonly onRefresh: (() => Promise<void>) | null;
    readonly key: upstream1.Key | null;
    createState(): upstream4.State<CupertinoSliverRefreshControl>;
    createElement(): upstream5.StatefulElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream7.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream7.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream9.DiagnosticsTreeStyle | null | undefined;
    }): upstream8.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream8.DiagnosticsNode>;
}
export declare function _CupertinoSliverRefreshControlFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    refreshTriggerPullDistance?: number | undefined;
    refreshIndicatorExtent?: number | undefined;
    builder?: ((context: upstream2.BuildContext, refreshState: upstream3.RefreshIndicatorMode, pulledExtent: number, refreshTriggerPullDistance: number, refreshIndicatorExtent: number) => Widget) | null | undefined;
    onRefresh?: (() => Promise<void>) | null | undefined;
}): CupertinoSliverRefreshControl;
export declare namespace _CupertinoSliverRefreshControlFactory {
    function buildRefreshIndicator(context: upstream2.BuildContext, refreshState: upstream3.RefreshIndicatorMode, pulledExtent: number, refreshTriggerPullDistance: number, refreshIndicatorExtent: number): Widget;
}
export declare const CupertinoSliverRefreshControl: typeof _CupertinoSliverRefreshControlFactory & _FlaxInstanceType<CupertinoSliverRefreshControl> & _FlaxDartType<CupertinoSliverRefreshControl, readonly ["class", "flax.cupertino/cupertino#type:CupertinoSliverRefreshControl", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "refreshTriggerPullDistance" | "refreshIndicatorExtent" | "builder" | "onRefresh" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:cupertino_ui/src/refresh.dart::CupertinoSliverRefreshControl" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
