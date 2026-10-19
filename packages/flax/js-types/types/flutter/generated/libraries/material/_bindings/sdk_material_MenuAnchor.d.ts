import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_MenuController';
import '@flax/flutter/widgets/_bindings/sdk_widgets_MenuController';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream4 from '@flax/flutter/material/_bindings/sdk_material_MenuStyle';
import '@flax/flutter/material/_bindings/sdk_material_MenuStyle';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream6 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream7 from '@flax/flutter/rendering/_bindings/sdk_rendering_LayerLink';
import '@flax/flutter/rendering/_bindings/sdk_rendering_LayerLink';
import type * as upstream8 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream9 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationStatus';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationStatus';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream14 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream16 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface MenuAnchor extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/material/menu_anchor.dart::MenuAnchor": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __MenuAnchor: unique symbol;
    readonly [_flaxDartTypeValue]: MenuAnchor;
    readonly controller: upstream2.MenuController | null;
    readonly childFocusNode: upstream3.FocusNode | null;
    readonly style: upstream4.MenuStyle | null;
    readonly alignmentOffset: upstream5.Offset | null;
    readonly layerLink: upstream7.LayerLink | null;
    readonly clipBehavior: upstream8.Clip;
    readonly anchorTapClosesMenu: boolean;
    readonly consumeOutsideTap: boolean;
    readonly onOpen: (() => void) | null;
    readonly onClose: (() => void) | null;
    readonly crossAxisUnconstrained: boolean;
    readonly useRootOverlay: boolean;
    readonly animated: boolean;
    readonly onAnimationStatusChanged: ((value: upstream9.AnimationStatus) => void) | null;
    readonly menuChildren: DartList<Widget>;
    readonly builder: ((context: upstream10.BuildContext, controller: Readonly<{
        "__flaxBound:package:flutter/src/widgets/raw_menu_anchor.dart::MenuController": readonly [];
    }>, child: Widget | null) => Widget) | null;
    readonly child: Widget | null;
    readonly reservedPadding: upstream6.EdgeInsetsGeometry | null;
    readonly key: upstream1.Key | null;
    createState(): upstream11.State<MenuAnchor>;
    debugDescribeChildren(): DartList<upstream12.DiagnosticsNode>;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    createElement(): upstream14.StatefulElement;
    toStringShort(): string;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream15.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream15.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream16.DiagnosticsTreeStyle | null | undefined;
    }): upstream12.DiagnosticsNode;
}
export declare function _MenuAnchorFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    controller?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/raw_menu_anchor.dart::MenuController": readonly [];
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
    style?: (Readonly<{
        "__flaxBound:package:flutter/src/material/menu_style.dart::MenuStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    alignmentOffset?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | null | undefined;
    reservedPadding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    layerLink?: Readonly<{
        "__flaxBound:package:flutter/src/rendering/layer.dart::LayerLink": readonly [];
    }> | null | undefined;
    clipBehavior?: upstream8.Clip | undefined;
    anchorTapClosesMenu?: boolean | undefined;
    consumeOutsideTap?: boolean | undefined;
    onOpen?: (() => void) | null | undefined;
    onClose?: (() => void) | null | undefined;
    crossAxisUnconstrained?: boolean | undefined;
    useRootOverlay?: boolean | undefined;
    animated?: boolean | undefined;
    onAnimationStatusChanged?: ((value: upstream9.AnimationStatus) => void) | null | undefined;
    menuChildren: DartListInput<Widget, Widget>;
    builder?: ((context: upstream10.BuildContext, controller: upstream2.MenuController, child: Widget | null) => Widget) | null | undefined;
    child?: Widget | null | undefined;
}): MenuAnchor;
export declare const MenuAnchor: typeof _MenuAnchorFactory & _FlaxInstanceType<MenuAnchor> & _FlaxDartType<MenuAnchor, readonly ["class", "flax.core/sdk_material#type:MenuAnchor", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "controller" | "childFocusNode" | "style" | "alignmentOffset" | "layerLink" | "clipBehavior" | "anchorTapClosesMenu" | "consumeOutsideTap" | "onOpen" | "onClose" | "crossAxisUnconstrained" | "useRootOverlay" | "animated" | "onAnimationStatusChanged" | "menuChildren" | "builder" | "child" | "reservedPadding" | "key" | "createState" | "debugDescribeChildren" | "debugFillProperties" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "__flaxBound:package:flutter/src/material/menu_anchor.dart::MenuAnchor" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
