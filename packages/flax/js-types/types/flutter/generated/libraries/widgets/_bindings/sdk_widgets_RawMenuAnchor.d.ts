import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_MenuController';
import '@flax/flutter/widgets/_bindings/sdk_widgets_MenuController';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_RawMenuOverlayInfo';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RawMenuOverlayInfo';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RawMenuAnchor extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/raw_menu_anchor.dart::RawMenuAnchor": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __RawMenuAnchor: unique symbol;
    readonly [_flaxDartTypeValue]: RawMenuAnchor;
    readonly onOpen: (() => void) | null;
    readonly onClose: (() => void) | null;
    readonly onOpenRequested: ((position: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null, showOverlay: (() => void)) => void);
    readonly onCloseRequested: ((hideOverlay: (() => void)) => void);
    readonly builder: ((context: upstream4.BuildContext, controller: Readonly<{
        "__flaxBound:package:flutter/src/widgets/raw_menu_anchor.dart::MenuController": readonly [];
    }>, child: Widget | null) => Widget) | null;
    readonly child: Widget | null;
    readonly overlayBuilder: ((context: upstream4.BuildContext, info: Readonly<{
        "__flaxBound:package:flutter/src/widgets/raw_menu_anchor.dart::RawMenuOverlayInfo": readonly [];
    }>) => Widget);
    readonly useRootOverlay: boolean;
    readonly childFocusNode: upstream2.FocusNode | null;
    readonly consumeOutsideTaps: boolean;
    readonly controller: upstream5.MenuController;
    readonly key: upstream1.Key | null;
    createState(): upstream7.State<RawMenuAnchor>;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    createElement(): upstream9.StatefulElement;
    toStringShort(): string;
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
export declare function _RawMenuAnchorFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    childFocusNode?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>) | null | undefined;
    consumeOutsideTaps?: boolean | undefined;
    onOpen?: (() => void) | null | undefined;
    onClose?: (() => void) | null | undefined;
    onOpenRequested?: ((position: upstream3.Offset | null, showOverlay: (() => void)) => void) | undefined;
    onCloseRequested?: ((hideOverlay: (() => void)) => void) | undefined;
    useRootOverlay?: boolean | undefined;
    builder?: ((context: upstream4.BuildContext, controller: upstream5.MenuController, child: Widget | null) => Widget) | null | undefined;
    controller: Readonly<{
        "__flaxBound:package:flutter/src/widgets/raw_menu_anchor.dart::MenuController": readonly [];
    }>;
    overlayBuilder: ((context: upstream4.BuildContext, info: upstream6.RawMenuOverlayInfo) => Widget);
    child?: Widget | null | undefined;
}): RawMenuAnchor;
export declare const RawMenuAnchor: typeof _RawMenuAnchorFactory & _FlaxInstanceType<RawMenuAnchor> & _FlaxDartType<RawMenuAnchor, readonly ["class", "flax.core/sdk_widgets#type:RawMenuAnchor", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "onOpen" | "onClose" | "onOpenRequested" | "onCloseRequested" | "builder" | "child" | "overlayBuilder" | "useRootOverlay" | "childFocusNode" | "consumeOutsideTaps" | "controller" | "key" | "createState" | "debugFillProperties" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/raw_menu_anchor.dart::RawMenuAnchor" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
