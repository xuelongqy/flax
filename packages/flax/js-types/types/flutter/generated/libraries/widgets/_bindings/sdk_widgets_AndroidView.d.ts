import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartSet, type DartSetInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_PlatformViewHitTestBehavior';
import '@flax/flutter/rendering/_bindings/sdk_rendering_PlatformViewHitTestBehavior';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_Factory_c1';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Factory_c1';
import type * as upstream5 from '@flax/flutter/gestures/_bindings/sdk_gestures_OneSequenceGestureRecognizer';
import '@flax/flutter/gestures/_bindings/sdk_gestures_OneSequenceGestureRecognizer';
import type * as upstream6 from '@flax/flutter/services/_bindings/sdk_services_MessageCodec';
import '@flax/flutter/services/_bindings/sdk_services_MessageCodec';
import type * as upstream7 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface AndroidView extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/platform_view.dart::AndroidView": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __AndroidView: unique symbol;
    readonly [_flaxDartTypeValue]: AndroidView;
    readonly viewType: string;
    readonly onPlatformViewCreated: ((id: number) => void) | null;
    readonly hitTestBehavior: upstream2.PlatformViewHitTestBehavior;
    readonly layoutDirection: upstream3.TextDirection | null;
    readonly gestureRecognizers: DartSet<upstream4.Factory<upstream5.OneSequenceGestureRecognizer>> | null;
    readonly creationParams: unknown | null;
    readonly creationParamsCodec: upstream6.MessageCodec<unknown | null> | null;
    readonly clipBehavior: upstream7.Clip;
    readonly key: upstream1.Key | null;
    createState(): upstream8.State<AndroidView>;
    createElement(): upstream9.StatefulElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream11.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream11.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream13.DiagnosticsTreeStyle | null | undefined;
    }): upstream12.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream12.DiagnosticsNode>;
}
export declare function _AndroidViewFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    viewType: string;
    onPlatformViewCreated?: ((id: number) => void) | null | undefined;
    hitTestBehavior?: upstream2.PlatformViewHitTestBehavior | undefined;
    layoutDirection?: upstream3.TextDirection | null | undefined;
    gestureRecognizers?: DartSetInput<upstream4.Factory<upstream5.OneSequenceGestureRecognizer>, Readonly<{
        "__flaxBound:package:flutter/src/foundation/basic_types.dart::Factory": readonly [upstream5.OneSequenceGestureRecognizer];
    }>> | null | undefined;
    creationParams?: unknown | null | undefined;
    creationParamsCodec?: Readonly<{
        "__flaxBound:package:flutter/src/services/message_codec.dart::MessageCodec": readonly [unknown | null];
    }> | null | undefined;
    clipBehavior?: upstream7.Clip | undefined;
}): AndroidView;
export declare const AndroidView: typeof _AndroidViewFactory & _FlaxInstanceType<AndroidView> & _FlaxDartType<AndroidView, readonly ["class", "flax.core/sdk_widgets#type:AndroidView", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "viewType" | "onPlatformViewCreated" | "hitTestBehavior" | "layoutDirection" | "gestureRecognizers" | "creationParams" | "creationParamsCodec" | "clipBehavior" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/platform_view.dart::AndroidView" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
