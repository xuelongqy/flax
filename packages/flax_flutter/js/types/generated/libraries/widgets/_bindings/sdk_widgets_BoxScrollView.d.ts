import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollView';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_Axis';
import '@flax/flutter/painting/_bindings/flutter_Axis';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollBehavior';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollBehavior';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream8 from '@flax/flutter/rendering/_bindings/sdk_rendering_ScrollCacheExtent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ScrollCacheExtent';
import type * as upstream9 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverPaintOrder';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverPaintOrder';
import type * as upstream10 from '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollViewKeyboardDismissBehavior';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollViewKeyboardDismissBehavior';
import type * as upstream12 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream13 from '@flax/flutter/rendering/_bindings/flutter_HitTestBehavior';
import '@flax/flutter/rendering/_bindings/flutter_HitTestBehavior';
import type * as upstream14 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream16 from '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import '@flax/flutter/painting/_bindings/sdk_painting_AxisDirection';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ViewportOffset';
import type * as upstream18 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessElement';
import type * as upstream19 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream20 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream21 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface BoxScrollView extends _FlaxDartWidget, Omit<upstream0.ScrollView, _flaxOwnMembers0>, Omit<upstream1.StatelessWidget, _flaxOwnMembers0 | keyof upstream0.ScrollView>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.ScrollView | keyof upstream1.StatelessWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_view.dart::BoxScrollView": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/scroll_view.dart::ScrollView": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __BoxScrollView: unique symbol;
    readonly [_flaxDartTypeValue]: BoxScrollView;
    readonly padding: upstream2.EdgeInsetsGeometry | null;
    readonly scrollDirection: upstream3.Axis;
    readonly reverse: boolean;
    readonly controller: upstream4.ScrollController | null;
    readonly primary: boolean | null;
    readonly physics: upstream5.ScrollPhysics | null;
    readonly scrollBehavior: upstream6.ScrollBehavior | null;
    readonly shrinkWrap: boolean;
    readonly center: upstream7.Key | null;
    readonly anchor: number;
    readonly cacheExtent: number | null;
    readonly scrollCacheExtent: upstream8.ScrollCacheExtent | null;
    readonly semanticChildCount: number | null;
    readonly paintOrder: upstream9.SliverPaintOrder;
    readonly dragStartBehavior: upstream10.DragStartBehavior;
    readonly keyboardDismissBehavior: upstream11.ScrollViewKeyboardDismissBehavior | null;
    readonly restorationId: string | null;
    readonly clipBehavior: upstream12.Clip;
    readonly hitTestBehavior: upstream13.HitTestBehavior;
    readonly key: upstream7.Key | null;
    buildSlivers(context: upstream14.BuildContext): DartList<Widget>;
    buildChildLayout(context: upstream14.BuildContext): Widget;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    getDirection(context: upstream14.BuildContext): upstream16.AxisDirection;
    buildViewport(context: upstream14.BuildContext, offset: Readonly<{
        "__flaxBound:package:flutter/src/rendering/viewport_offset.dart::ViewportOffset": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>, axisDirection: upstream16.AxisDirection, slivers: DartListInput<Widget, Widget>): Widget;
    build(context: upstream14.BuildContext): Widget;
    createElement(): upstream18.StatelessElement;
    toStringShort(): string;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream19.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream19.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream21.DiagnosticsTreeStyle | null | undefined;
    }): upstream20.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream20.DiagnosticsNode>;
}
export declare const BoxScrollView: object & _FlaxInstanceType<BoxScrollView> & _FlaxDartType<BoxScrollView, readonly ["class", "flax.core/sdk_widgets#type:BoxScrollView", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "padding" | "scrollDirection" | "reverse" | "controller" | "primary" | "physics" | "scrollBehavior" | "shrinkWrap" | "center" | "anchor" | "cacheExtent" | "scrollCacheExtent" | "semanticChildCount" | "paintOrder" | "dragStartBehavior" | "keyboardDismissBehavior" | "restorationId" | "clipBehavior" | "hitTestBehavior" | "key" | "buildSlivers" | "buildChildLayout" | "debugFillProperties" | "getDirection" | "buildViewport" | "build" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/scroll_view.dart::BoxScrollView" | "__flaxBound:package:flutter/src/widgets/scroll_view.dart::ScrollView" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
