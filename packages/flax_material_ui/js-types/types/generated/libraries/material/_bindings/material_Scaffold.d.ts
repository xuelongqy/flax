import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import '@flax/flutter/painting/_bindings/flutter_AlignmentDirectional';
import '@flax/flutter/painting/_bindings/flutter_BoxDecoration';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream5 from '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream7 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Scaffold extends WidgetDescription, Omit<Readonly<{
    "__flaxBound:package:material_ui/src/scaffold.dart::Scaffold": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, 'type'> {
    readonly type: "flax.material/material#type:Scaffold";
}
export declare function _ScaffoldFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    appBar?: Bindable<(Readonly<{
        "__flaxBound:package:flutter/src/widgets/preferred_size.dart::PreferredSizeWidget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null> | undefined;
    body?: Bindable<Widget | null> | undefined;
    floatingActionButton?: Bindable<Widget | null> | undefined;
    persistentFooterButtons?: Bindable<DartListInput<Widget, Widget> | null> | undefined;
    persistentFooterAlignment?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentDirectional": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }>> | undefined;
    persistentFooterDecoration?: Bindable<(Readonly<{
        "__flaxBound:package:flutter/src/painting/box_decoration.dart::BoxDecoration": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null> | undefined;
    drawer?: Bindable<Widget | null> | undefined;
    onDrawerChanged?: Bindable<((isOpened: boolean) => void) | null> | undefined;
    endDrawer?: Bindable<Widget | null> | undefined;
    onEndDrawerChanged?: Bindable<((isOpened: boolean) => void) | null> | undefined;
    bottomNavigationBar?: Bindable<Widget | null> | undefined;
    bottomSheet?: Bindable<Widget | null> | undefined;
    backgroundColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    resizeToAvoidBottomInset?: Bindable<boolean | null> | undefined;
    primary?: Bindable<boolean> | undefined;
    drawerDragStartBehavior?: Bindable<upstream5.DragStartBehavior> | undefined;
    extendBody?: Bindable<boolean> | undefined;
    drawerBarrierDismissible?: Bindable<boolean> | undefined;
    extendBodyBehindAppBar?: Bindable<boolean> | undefined;
    drawerScrimColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    bottomSheetScrimBuilder?: Bindable<((p0: upstream6.BuildContext, p1: upstream7.Animation<number>) => Widget | null)> | undefined;
    drawerEdgeDragWidth?: Bindable<number | null> | undefined;
    drawerEnableOpenDragGesture?: Bindable<boolean> | undefined;
    endDrawerEnableOpenDragGesture?: Bindable<boolean> | undefined;
    restorationId?: Bindable<string | null> | undefined;
}): Scaffold;
export declare namespace _ScaffoldFactory {
    function hasDrawer(context: upstream6.BuildContext, options?: {
        registerForUpdates?: boolean | undefined;
    }): boolean;
}
export declare const Scaffold: typeof _ScaffoldFactory & _FlaxInstanceType<Scaffold> & _FlaxDartType<Scaffold, readonly ["class", "flax.material/material#type:Scaffold", readonly [], false]>;
