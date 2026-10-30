import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream7 from '@flax/material-ui/_bindings/material_CarouselController';
import '@flax/material-ui/_bindings/material_CarouselController';
import type * as upstream8 from '@flax/flutter/painting/_bindings/flutter_Axis';
import '@flax/flutter/painting/_bindings/flutter_Axis';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CarouselView extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:material_ui/src/carousel.dart::CarouselView": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __CarouselView: unique symbol;
    readonly [_flaxDartTypeValue]: CarouselView;
    readonly padding: upstream2.EdgeInsets | null;
    readonly backgroundColor: upstream3.Color | null;
    readonly elevation: number | null;
    readonly shape: upstream4.ShapeBorder | null;
    readonly itemClipBehavior: upstream5.Clip | null;
    readonly overlayColor: upstream6.WidgetStateProperty<upstream3.Color | null> | null;
    readonly shrinkExtent: number;
    readonly itemSnapping: boolean;
    readonly controller: upstream7.CarouselController | null;
    readonly scrollDirection: upstream8.Axis;
    readonly reverse: boolean;
    readonly consumeMaxWeight: boolean;
    readonly onTap: ((value: number) => void) | null;
    readonly enableSplash: boolean;
    readonly itemExtent: number | null;
    readonly flexWeights: DartList<number> | null;
    readonly children: DartList<Widget>;
    readonly onIndexChanged: ((value: number) => void) | null;
    readonly itemBuilder: ((context: upstream9.BuildContext, index: number) => Widget | null) | null;
    readonly itemCount: number | null;
    readonly infinite: boolean;
    readonly key: upstream1.Key | null;
    createState(): upstream10.State<CarouselView>;
    createElement(): upstream11.StatefulElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
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
export declare function _CarouselViewFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    padding?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }>) | null | undefined;
    backgroundColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    elevation?: number | null | undefined;
    shape?: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null | undefined;
    itemClipBehavior?: upstream5.Clip | null | undefined;
    overlayColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
    }> | null | undefined;
    itemSnapping?: boolean | undefined;
    shrinkExtent?: number | undefined;
    controller?: (Readonly<{
        "__flaxBound:package:material_ui/src/carousel.dart::CarouselController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>) | null | undefined;
    scrollDirection?: upstream8.Axis | undefined;
    reverse?: boolean | undefined;
    onTap?: ((value: number) => void) | null | undefined;
    enableSplash?: boolean | undefined;
    infinite?: boolean | undefined;
    itemExtent: number;
    children: DartListInput<Widget, Widget>;
    onIndexChanged?: ((value: number) => void) | null | undefined;
}): CarouselView;
export declare namespace _CarouselViewFactory {
    const __flaxJsx: {
        readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _CarouselViewFactory>[0]>), "children"> & {
            children: (globalThis.NonNullable<globalThis.Parameters<typeof _CarouselViewFactory>[0]>)["children"] | Widget;
        };
        readonly slot: "children";
        readonly many: true;
    };
}
export declare namespace _CarouselViewFactory {
    function weighted(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        padding?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }>) | null | undefined;
        backgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        elevation?: number | null | undefined;
        shape?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | null | undefined;
        itemClipBehavior?: upstream5.Clip | null | undefined;
        overlayColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        itemSnapping?: boolean | undefined;
        shrinkExtent?: number | undefined;
        controller?: (Readonly<{
            "__flaxBound:package:material_ui/src/carousel.dart::CarouselController": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>) | null | undefined;
        scrollDirection?: upstream8.Axis | undefined;
        reverse?: boolean | undefined;
        consumeMaxWeight?: boolean | undefined;
        onTap?: ((value: number) => void) | null | undefined;
        enableSplash?: boolean | undefined;
        infinite?: boolean | undefined;
        flexWeights: DartListInput<number, number>;
        children: DartListInput<Widget, Widget>;
        onIndexChanged?: ((value: number) => void) | null | undefined;
    }): CarouselView;
    namespace weighted {
        const __flaxJsx: {
            readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof weighted>[0]>), "children"> & {
                children: (globalThis.NonNullable<globalThis.Parameters<typeof weighted>[0]>)["children"] | Widget;
            };
            readonly slot: "children";
            readonly many: true;
        };
    }
}
export declare namespace _CarouselViewFactory {
    function builder(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        padding?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }>) | null | undefined;
        backgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        elevation?: number | null | undefined;
        shape?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | null | undefined;
        itemClipBehavior?: upstream5.Clip | null | undefined;
        overlayColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        itemSnapping?: boolean | undefined;
        shrinkExtent?: number | undefined;
        controller?: (Readonly<{
            "__flaxBound:package:material_ui/src/carousel.dart::CarouselController": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>) | null | undefined;
        scrollDirection?: upstream8.Axis | undefined;
        reverse?: boolean | undefined;
        onTap?: ((value: number) => void) | null | undefined;
        enableSplash?: boolean | undefined;
        itemExtent: number;
        itemBuilder: ((context: upstream9.BuildContext, index: number) => Widget | null) | null;
        itemCount?: number | null | undefined;
        onIndexChanged?: ((value: number) => void) | null | undefined;
        infinite?: boolean | undefined;
    }): CarouselView;
    namespace builder {
        const __flaxJsx: {
            readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof builder>[0]>);
            readonly slot: null;
            readonly many: false;
        };
    }
}
export declare namespace _CarouselViewFactory {
    function weightedBuilder(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        padding?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }>) | null | undefined;
        backgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        elevation?: number | null | undefined;
        shape?: Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }> | null | undefined;
        itemClipBehavior?: upstream5.Clip | null | undefined;
        overlayColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        itemSnapping?: boolean | undefined;
        shrinkExtent?: number | undefined;
        controller?: (Readonly<{
            "__flaxBound:package:material_ui/src/carousel.dart::CarouselController": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>) | null | undefined;
        scrollDirection?: upstream8.Axis | undefined;
        reverse?: boolean | undefined;
        consumeMaxWeight?: boolean | undefined;
        onTap?: ((value: number) => void) | null | undefined;
        enableSplash?: boolean | undefined;
        flexWeights: DartListInput<number, number>;
        itemBuilder: ((context: upstream9.BuildContext, index: number) => Widget | null) | null;
        itemCount?: number | null | undefined;
        onIndexChanged?: ((value: number) => void) | null | undefined;
        infinite?: boolean | undefined;
    }): CarouselView;
    namespace weightedBuilder {
        const __flaxJsx: {
            readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof weightedBuilder>[0]>);
            readonly slot: null;
            readonly many: false;
        };
    }
}
export declare const CarouselView: typeof _CarouselViewFactory & _FlaxInstanceType<CarouselView> & _FlaxDartType<CarouselView, readonly ["class", "flax.material/material#type:CarouselView", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "padding" | "backgroundColor" | "elevation" | "shape" | "itemClipBehavior" | "overlayColor" | "shrinkExtent" | "itemSnapping" | "controller" | "scrollDirection" | "reverse" | "consumeMaxWeight" | "onTap" | "enableSplash" | "itemExtent" | "flexWeights" | "children" | "onIndexChanged" | "itemBuilder" | "itemCount" | "infinite" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:material_ui/src/carousel.dart::CarouselView" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
