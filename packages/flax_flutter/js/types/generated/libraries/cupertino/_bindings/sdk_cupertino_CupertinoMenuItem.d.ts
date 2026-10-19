import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream4 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream7 from '@flax/flutter/painting/_bindings/flutter_BoxDecoration';
import '@flax/flutter/painting/_bindings/flutter_BoxDecoration';
import type * as upstream8 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream9 from '@flax/flutter/rendering/_bindings/flutter_HitTestBehavior';
import '@flax/flutter/rendering/_bindings/flutter_HitTestBehavior';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream12 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CupertinoMenuItem extends _FlaxDartWidget, Omit<upstream0.StatelessWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatelessWidget>, Readonly<{
    "__flaxBound:package:flutter/src/cupertino/menu_anchor.dart::CupertinoMenuItem": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/cupertino/menu_anchor.dart::CupertinoMenuEntry": readonly [];
}> {
    readonly __CupertinoMenuItem: unique symbol;
    readonly [_flaxDartTypeValue]: CupertinoMenuItem;
    readonly child: Widget;
    readonly padding: upstream3.EdgeInsetsGeometry | null;
    readonly leading: Widget | null;
    readonly trailing: Widget | null;
    readonly subtitle: Widget | null;
    readonly onPressed: (() => void) | null;
    readonly onHover: ((value: boolean) => void) | null;
    readonly onFocusChange: ((value: boolean) => void) | null;
    readonly requestFocusOnHover: boolean;
    readonly autofocus: boolean;
    readonly focusNode: upstream5.FocusNode | null;
    readonly decoration: upstream6.WidgetStateProperty<upstream7.BoxDecoration> | null;
    readonly mouseCursor: upstream6.WidgetStateProperty<upstream8.MouseCursor> | null;
    readonly behavior: upstream9.HitTestBehavior;
    readonly requestCloseOnActivate: boolean;
    readonly isDestructiveAction: boolean;
    readonly leadingWidth: number | null;
    readonly trailingWidth: number | null;
    readonly leadingMidpointAlignment: upstream2.AlignmentGeometry | null;
    readonly trailingMidpointAlignment: upstream2.AlignmentGeometry | null;
    readonly constraints: upstream4.BoxConstraints | null;
    readonly isDivider: boolean;
    readonly key: upstream1.Key | null;
    hasLeading(context: upstream10.BuildContext): boolean;
    build(context: upstream10.BuildContext): Widget;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    createElement(): upstream12.StatelessElement;
    toStringShort(): string;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream13.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream13.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream15.DiagnosticsTreeStyle | null | undefined;
    }): upstream14.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream14.DiagnosticsNode>;
}
export declare function _CupertinoMenuItemFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    child: Widget;
    subtitle?: Widget | null | undefined;
    leading?: Widget | null | undefined;
    leadingWidth?: number | null | undefined;
    leadingMidpointAlignment?: Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }> | null | undefined;
    trailing?: Widget | null | undefined;
    trailingWidth?: number | null | undefined;
    trailingMidpointAlignment?: Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }> | null | undefined;
    padding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    constraints?: (Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>) | null | undefined;
    autofocus?: boolean | undefined;
    focusNode?: (Readonly<{
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
    onFocusChange?: ((value: boolean) => void) | null | undefined;
    onHover?: ((value: boolean) => void) | null | undefined;
    onPressed?: (() => void) | null | undefined;
    decoration?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream7.BoxDecoration];
    }> | null | undefined;
    mouseCursor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream8.MouseCursor];
    }> | null | undefined;
    behavior?: upstream9.HitTestBehavior | undefined;
    requestCloseOnActivate?: boolean | undefined;
    requestFocusOnHover?: boolean | undefined;
    isDestructiveAction?: boolean | undefined;
}): CupertinoMenuItem;
export declare namespace _CupertinoMenuItemFactory {
    const kDefaultDecoration: upstream6.WidgetStateProperty<upstream7.BoxDecoration>;
}
export declare const CupertinoMenuItem: typeof _CupertinoMenuItemFactory & _FlaxInstanceType<CupertinoMenuItem> & _FlaxDartType<CupertinoMenuItem, readonly ["class", "flax.core/sdk_cupertino#type:CupertinoMenuItem", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "child" | "padding" | "leading" | "trailing" | "subtitle" | "onPressed" | "onHover" | "onFocusChange" | "requestFocusOnHover" | "autofocus" | "focusNode" | "decoration" | "mouseCursor" | "behavior" | "requestCloseOnActivate" | "isDestructiveAction" | "leadingWidth" | "trailingWidth" | "leadingMidpointAlignment" | "trailingMidpointAlignment" | "constraints" | "isDivider" | "key" | "hasLeading" | "build" | "debugFillProperties" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/cupertino/menu_anchor.dart::CupertinoMenuItem" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/cupertino/menu_anchor.dart::CupertinoMenuEntry";
export {};
