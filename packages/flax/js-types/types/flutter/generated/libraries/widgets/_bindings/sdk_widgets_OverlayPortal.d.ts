import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type { DartRecord as _FlaxDartRecord } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayPortalController';
import '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayPortalController';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayChildLocation';
import '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayChildLocation';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream6 from '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Matrix4';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface OverlayPortal extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayPortal": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __OverlayPortal: unique symbol;
    readonly [_flaxDartTypeValue]: OverlayPortal;
    readonly controller: upstream2.OverlayPortalController;
    readonly overlayChildBuilder: ((context: upstream3.BuildContext) => Widget);
    readonly child: Widget | null;
    readonly overlayLocation: upstream4.OverlayChildLocation;
    readonly key: upstream1.Key | null;
    createState(): upstream7.State<OverlayPortal>;
    createElement(): upstream8.StatefulElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream10.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream10.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream12.DiagnosticsTreeStyle | null | undefined;
    }): upstream11.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream11.DiagnosticsNode>;
}
export declare function _OverlayPortalFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    controller: Readonly<{
        "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayPortalController": readonly [];
    }>;
    overlayChildBuilder: ((context: upstream3.BuildContext) => Widget);
    overlayLocation?: upstream4.OverlayChildLocation | undefined;
    child?: Widget | null | undefined;
}): OverlayPortal;
export declare namespace _OverlayPortalFactory {
    function targetsRootOverlay(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        controller: Readonly<{
            "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayPortalController": readonly [];
        }>;
        overlayChildBuilder: ((context: upstream3.BuildContext) => Widget);
        child?: Widget | null | undefined;
    }): OverlayPortal;
}
export declare namespace _OverlayPortalFactory {
    function overlayChildLayoutBuilder(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        controller: Readonly<{
            "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayPortalController": readonly [];
        }>;
        overlayChildBuilder: ((context: upstream3.BuildContext, info: _FlaxDartRecord<{
            readonly $1: upstream5.Size;
            readonly $2: upstream6.Matrix4;
            readonly $3: upstream5.Size;
        }>) => Widget);
        overlayLocation?: upstream4.OverlayChildLocation | undefined;
        child: Widget | null;
    }): OverlayPortal;
}
export declare const OverlayPortal: typeof _OverlayPortalFactory & _FlaxInstanceType<OverlayPortal> & _FlaxDartType<OverlayPortal, readonly ["class", "flax.core/sdk_widgets#type:OverlayPortal", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "controller" | "overlayChildBuilder" | "child" | "overlayLocation" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/overlay.dart::OverlayPortal" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
