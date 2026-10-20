import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_GlobalKey';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream3 from '@flax/material-ui/_bindings/material_DrawerAlignment';
import '@flax/material-ui/_bindings/material_DrawerAlignment';
import type * as upstream4 from '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream8 from '@flax/material-ui/_bindings/material_DrawerControllerState';
import '@flax/material-ui/_bindings/material_DrawerControllerState';
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
export interface DrawerController extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:material_ui/src/drawer.dart::DrawerController": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __DrawerController: unique symbol;
    readonly [_flaxDartTypeValue]: DrawerController;
    readonly child: Widget;
    readonly alignment: upstream3.DrawerAlignment;
    readonly drawerCallback: ((isOpened: boolean) => void) | null;
    readonly drawerBarrierDismissible: boolean;
    readonly dragStartBehavior: upstream4.DragStartBehavior;
    readonly scrimColor: upstream5.Color | null;
    readonly enableOpenDragGesture: boolean;
    readonly edgeDragWidth: number | null;
    readonly isDrawerOpen: boolean;
    readonly key: upstream6.Key | null;
    createState(): upstream8.DrawerControllerState;
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
export declare function _DrawerControllerFactory(options: {
    key?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::GlobalKey": readonly [upstream2.State<upstream0.StatefulWidget>];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }>) | null | undefined;
    child: Widget;
    alignment: upstream3.DrawerAlignment;
    isDrawerOpen?: boolean | undefined;
    drawerCallback?: ((isOpened: boolean) => void) | null | undefined;
    dragStartBehavior?: upstream4.DragStartBehavior | undefined;
    scrimColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    edgeDragWidth?: number | null | undefined;
    enableOpenDragGesture?: boolean | undefined;
    drawerBarrierDismissible?: boolean | undefined;
}): DrawerController;
export declare namespace _DrawerControllerFactory {
    function maybeOf(context: upstream7.BuildContext): DrawerController | null;
}
export declare namespace _DrawerControllerFactory {
    function of(context: upstream7.BuildContext): DrawerController;
}
export declare const DrawerController: typeof _DrawerControllerFactory & _FlaxInstanceType<DrawerController> & _FlaxDartType<DrawerController, readonly ["class", "flax.material/material#type:DrawerController", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "child" | "alignment" | "drawerCallback" | "drawerBarrierDismissible" | "dragStartBehavior" | "scrimColor" | "enableOpenDragGesture" | "edgeDragWidth" | "isDrawerOpen" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:material_ui/src/drawer.dart::DrawerController" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
