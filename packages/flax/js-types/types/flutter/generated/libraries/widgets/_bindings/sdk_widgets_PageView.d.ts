import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_Axis';
import '@flax/flutter/painting/_bindings/flutter_Axis';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_PageController';
import '@flax/flutter/widgets/_bindings/sdk_widgets_PageController';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import type * as upstream5 from '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import type * as upstream6 from '@flax/flutter/rendering/_bindings/sdk_rendering_ScrollCacheExtent';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ScrollCacheExtent';
import type * as upstream7 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream8 from '@flax/flutter/rendering/_bindings/flutter_HitTestBehavior';
import '@flax/flutter/rendering/_bindings/flutter_HitTestBehavior';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollBehavior';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollBehavior';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/sdk_widgets_SliverChildDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SliverChildDelegate';
import type * as upstream12 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream13 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream16 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream17 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PageView extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/page_view.dart::PageView": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __PageView: unique symbol;
    readonly [_flaxDartTypeValue]: PageView;
    readonly allowImplicitScrolling: boolean;
    readonly scrollCacheExtent: upstream6.ScrollCacheExtent;
    readonly restorationId: string | null;
    readonly scrollDirection: upstream2.Axis;
    readonly reverse: boolean;
    readonly controller: upstream3.PageController | null;
    readonly physics: upstream4.ScrollPhysics | null;
    readonly pageSnapping: boolean;
    readonly onPageChanged: ((value: number) => void) | null;
    readonly childrenDelegate: upstream11.SliverChildDelegate;
    readonly dragStartBehavior: upstream5.DragStartBehavior;
    readonly clipBehavior: upstream7.Clip;
    readonly hitTestBehavior: upstream8.HitTestBehavior;
    readonly scrollBehavior: upstream9.ScrollBehavior | null;
    readonly padEnds: boolean;
    readonly key: upstream1.Key | null;
    createState(): upstream12.State<PageView>;
    createElement(): upstream13.StatefulElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
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
        style?: upstream17.DiagnosticsTreeStyle | null | undefined;
    }): upstream16.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream16.DiagnosticsNode>;
}
export declare function _PageViewFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    scrollDirection?: upstream2.Axis | undefined;
    reverse?: boolean | undefined;
    controller?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/page_view.dart::PageController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>) | null | undefined;
    physics?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
    }> | null | undefined;
    pageSnapping?: boolean | undefined;
    onPageChanged?: ((value: number) => void) | null | undefined;
    children?: DartListInput<Widget, Widget> | undefined;
    dragStartBehavior?: upstream5.DragStartBehavior | undefined;
    allowImplicitScrolling?: boolean | undefined;
    scrollCacheExtent?: Readonly<{
        "__flaxBound:package:flutter/src/rendering/viewport.dart::ScrollCacheExtent": readonly [];
    }> | null | undefined;
    restorationId?: string | null | undefined;
    clipBehavior?: upstream7.Clip | undefined;
    hitTestBehavior?: upstream8.HitTestBehavior | undefined;
    scrollBehavior?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_configuration.dart::ScrollBehavior": readonly [];
    }> | null | undefined;
    padEnds?: boolean | undefined;
}): PageView;
export declare namespace _PageViewFactory {
    function builder(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        scrollDirection?: upstream2.Axis | undefined;
        reverse?: boolean | undefined;
        controller?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/page_view.dart::PageController": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>) | null | undefined;
        physics?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
        }> | null | undefined;
        pageSnapping?: boolean | undefined;
        onPageChanged?: ((value: number) => void) | null | undefined;
        itemBuilder: ((context: upstream10.BuildContext, index: number) => Widget | null);
        findChildIndexCallback?: ((key: upstream1.Key) => number | null) | null | undefined;
        itemCount?: number | null | undefined;
        dragStartBehavior?: upstream5.DragStartBehavior | undefined;
        allowImplicitScrolling?: boolean | undefined;
        scrollCacheExtent?: Readonly<{
            "__flaxBound:package:flutter/src/rendering/viewport.dart::ScrollCacheExtent": readonly [];
        }> | null | undefined;
        restorationId?: string | null | undefined;
        clipBehavior?: upstream7.Clip | undefined;
        hitTestBehavior?: upstream8.HitTestBehavior | undefined;
        scrollBehavior?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_configuration.dart::ScrollBehavior": readonly [];
        }> | null | undefined;
        padEnds?: boolean | undefined;
    }): PageView;
}
export declare namespace _PageViewFactory {
    function custom(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        scrollDirection?: upstream2.Axis | undefined;
        reverse?: boolean | undefined;
        controller?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/page_view.dart::PageController": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>) | null | undefined;
        physics?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [];
        }> | null | undefined;
        pageSnapping?: boolean | undefined;
        onPageChanged?: ((value: number) => void) | null | undefined;
        childrenDelegate: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_delegate.dart::SliverChildDelegate": readonly [];
        }>;
        dragStartBehavior?: upstream5.DragStartBehavior | undefined;
        allowImplicitScrolling?: boolean | undefined;
        scrollCacheExtent?: Readonly<{
            "__flaxBound:package:flutter/src/rendering/viewport.dart::ScrollCacheExtent": readonly [];
        }> | null | undefined;
        restorationId?: string | null | undefined;
        clipBehavior?: upstream7.Clip | undefined;
        hitTestBehavior?: upstream8.HitTestBehavior | undefined;
        scrollBehavior?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_configuration.dart::ScrollBehavior": readonly [];
        }> | null | undefined;
        padEnds?: boolean | undefined;
    }): PageView;
}
export declare const PageView: typeof _PageViewFactory & _FlaxInstanceType<PageView> & _FlaxDartType<PageView, readonly ["class", "flax.core/sdk_widgets#type:PageView", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "allowImplicitScrolling" | "scrollCacheExtent" | "restorationId" | "scrollDirection" | "reverse" | "controller" | "physics" | "pageSnapping" | "onPageChanged" | "childrenDelegate" | "dragStartBehavior" | "clipBehavior" | "hitTestBehavior" | "scrollBehavior" | "padEnds" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/page_view.dart::PageView" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
