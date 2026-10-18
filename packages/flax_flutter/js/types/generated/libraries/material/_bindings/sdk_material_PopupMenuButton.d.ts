import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type DartInput, type Widget } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/material/_bindings/sdk_material_PopupMenuEntry';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream6 from '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import type * as upstream7 from '@flax/dart/ui/_bindings/flutter_Offset';
import '@flax/dart/ui/_bindings/flutter_Offset';
import type * as upstream8 from '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import '@flax/flutter/painting/_bindings/flutter_ShapeBorder';
import type * as upstream9 from '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import '@flax/flutter/rendering/_bindings/flutter_BoxConstraints';
import type * as upstream10 from '@flax/flutter/material/_bindings/sdk_material_PopupMenuPosition';
import '@flax/flutter/material/_bindings/sdk_material_PopupMenuPosition';
import type * as upstream11 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream12 from '@flax/flutter/animation/_bindings/sdk_animation_AnimationStyle';
import '@flax/flutter/animation/_bindings/sdk_animation_AnimationStyle';
import type * as upstream13 from '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import type * as upstream14 from '@flax/flutter/material/_bindings/sdk_material_ButtonStyle';
import '@flax/flutter/material/_bindings/sdk_material_ButtonStyle';
import type * as upstream15 from '@flax/flutter/material/_bindings/sdk_material_PopupMenuButtonState';
import '@flax/flutter/material/_bindings/sdk_material_PopupMenuButtonState';
import type * as upstream16 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream18 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream19 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream20 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PopupMenuButton<T extends unknown | null = unknown | null> extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/material/popup_menu.dart::PopupMenuButton": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __PopupMenuButton: unique symbol;
    readonly [_flaxDartTypeValue]: PopupMenuButton<T>;
    readonly itemBuilder: ((context: upstream3.BuildContext) => DartList<upstream2.PopupMenuEntry<T>>);
    readonly initialValue: T | null;
    readonly onOpened: (() => void) | null;
    readonly onSelected: ((value: (T | DartInput<T>)) => void) | null;
    readonly onCanceled: (() => void) | null;
    readonly tooltip: string | null;
    readonly elevation: number | null;
    readonly shadowColor: upstream4.Color | null;
    readonly surfaceTintColor: upstream4.Color | null;
    readonly padding: upstream5.EdgeInsetsGeometry;
    readonly menuPadding: upstream5.EdgeInsetsGeometry | null;
    readonly splashRadius: number | null;
    readonly child: Widget | null;
    readonly borderRadius: upstream6.BorderRadius | null;
    readonly icon: Widget | null;
    readonly offset: upstream7.Offset;
    readonly enabled: boolean;
    readonly shape: upstream8.ShapeBorder | null;
    readonly color: upstream4.Color | null;
    readonly iconColor: upstream4.Color | null;
    readonly enableFeedback: boolean | null;
    readonly iconSize: number | null;
    readonly constraints: upstream9.BoxConstraints | null;
    readonly position: upstream10.PopupMenuPosition | null;
    readonly clipBehavior: upstream11.Clip;
    readonly useRootNavigator: boolean;
    readonly popUpAnimationStyle: upstream12.AnimationStyle | null;
    readonly routeSettings: upstream13.RouteSettings | null;
    readonly style: upstream14.ButtonStyle | null;
    readonly requestFocus: boolean | null;
    readonly key: upstream1.Key | null;
    createState(): upstream15.PopupMenuButtonState<T>;
    createElement(): upstream16.StatefulElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream18.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream18.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream20.DiagnosticsTreeStyle | null | undefined;
    }): upstream19.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream19.DiagnosticsNode>;
}
export declare function _PopupMenuButtonFactory<T extends unknown | null = unknown | null>(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    itemBuilder: ((context: upstream3.BuildContext) => DartListInput<upstream2.PopupMenuEntry<_FlaxDartOutput<T>>, upstream2.PopupMenuEntry<_FlaxDartOutput<T>>>);
    initialValue?: (T | _FlaxDartOutput<T>) | null | undefined;
    onOpened?: (() => void) | null | undefined;
    onSelected?: ((value: _FlaxDartOutput<T>) => void) | null | undefined;
    onCanceled?: (() => void) | null | undefined;
    tooltip?: string | null | undefined;
    elevation?: number | null | undefined;
    shadowColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    surfaceTintColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    padding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | undefined;
    menuPadding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    child?: Widget | null | undefined;
    borderRadius?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
    }>) | null | undefined;
    splashRadius?: number | null | undefined;
    icon?: Widget | null | undefined;
    iconSize?: number | null | undefined;
    offset?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | undefined;
    enabled?: boolean | undefined;
    shape?: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null | undefined;
    color?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    iconColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    enableFeedback?: boolean | null | undefined;
    constraints?: (Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>) | null | undefined;
    position?: upstream10.PopupMenuPosition | null | undefined;
    clipBehavior?: upstream11.Clip | undefined;
    useRootNavigator?: boolean | undefined;
    popUpAnimationStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/animation/animation_style.dart::AnimationStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    routeSettings?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
    }> | null | undefined;
    style?: (Readonly<{
        "__flaxBound:package:flutter/src/material/button_style.dart::ButtonStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    requestFocus?: boolean | null | undefined;
}): PopupMenuButton<T>;
export declare function _PopupMenuButtonFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    itemBuilder: ((context: upstream3.BuildContext) => DartListInput<upstream2.PopupMenuEntry<unknown | null>, upstream2.PopupMenuEntry<unknown | null>>);
    initialValue?: unknown | null | undefined;
    onOpened?: (() => void) | null | undefined;
    onSelected?: ((value: unknown | null) => void) | null | undefined;
    onCanceled?: (() => void) | null | undefined;
    tooltip?: string | null | undefined;
    elevation?: number | null | undefined;
    shadowColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    surfaceTintColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    padding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | undefined;
    menuPadding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
    child?: Widget | null | undefined;
    borderRadius?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
    }>) | null | undefined;
    splashRadius?: number | null | undefined;
    icon?: Widget | null | undefined;
    iconSize?: number | null | undefined;
    offset?: (Readonly<{
        "__flaxBound:dart:ui::Offset": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>) | undefined;
    enabled?: boolean | undefined;
    shape?: Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null | undefined;
    color?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    iconColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    enableFeedback?: boolean | null | undefined;
    constraints?: (Readonly<{
        "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
    }>) | null | undefined;
    position?: upstream10.PopupMenuPosition | null | undefined;
    clipBehavior?: upstream11.Clip | undefined;
    useRootNavigator?: boolean | undefined;
    popUpAnimationStyle?: (Readonly<{
        "__flaxBound:package:flutter/src/animation/animation_style.dart::AnimationStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    routeSettings?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
    }> | null | undefined;
    style?: (Readonly<{
        "__flaxBound:package:flutter/src/material/button_style.dart::ButtonStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    requestFocus?: boolean | null | undefined;
}): PopupMenuButton<unknown | null>;
export declare const PopupMenuButton: typeof _PopupMenuButtonFactory & _FlaxInstanceType<PopupMenuButton<unknown | null>> & _FlaxDartType<PopupMenuButton<unknown | null>, readonly ["class", "flax.core/sdk_material#type:PopupMenuButton", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "itemBuilder" | "initialValue" | "onOpened" | "onSelected" | "onCanceled" | "tooltip" | "elevation" | "shadowColor" | "surfaceTintColor" | "padding" | "menuPadding" | "splashRadius" | "child" | "borderRadius" | "icon" | "offset" | "enabled" | "shape" | "color" | "iconColor" | "enableFeedback" | "iconSize" | "constraints" | "position" | "clipBehavior" | "useRootNavigator" | "popUpAnimationStyle" | "routeSettings" | "style" | "requestFocus" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/material/popup_menu.dart::PopupMenuButton" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        (options: {
            key?: Readonly<{
                "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
            }> | null | undefined;
            itemBuilder: ((context: upstream3.BuildContext) => DartListInput<upstream2.PopupMenuEntry<_Selected0>, upstream2.PopupMenuEntry<_Selected0>>);
            initialValue?: (_Selected0 | DartInput<_Selected0>) | null | undefined;
            onOpened?: (() => void) | null | undefined;
            onSelected?: ((value: _Selected0) => void) | null | undefined;
            onCanceled?: (() => void) | null | undefined;
            tooltip?: string | null | undefined;
            elevation?: number | null | undefined;
            shadowColor?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            surfaceTintColor?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            padding?: Readonly<{
                "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
            }> | undefined;
            menuPadding?: Readonly<{
                "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
            }> | null | undefined;
            child?: Widget | null | undefined;
            borderRadius?: (Readonly<{
                "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
            }>) | null | undefined;
            splashRadius?: number | null | undefined;
            icon?: Widget | null | undefined;
            iconSize?: number | null | undefined;
            offset?: (Readonly<{
                "__flaxBound:dart:ui::Offset": readonly [];
            }> & Readonly<{
                "__flaxBound:dart:ui::OffsetBase": readonly [];
            }>) | undefined;
            enabled?: boolean | undefined;
            shape?: Readonly<{
                "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
            }> | null | undefined;
            color?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            iconColor?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            enableFeedback?: boolean | null | undefined;
            constraints?: (Readonly<{
                "__flaxBound:package:flutter/src/rendering/box.dart::BoxConstraints": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [];
            }>) | null | undefined;
            position?: upstream10.PopupMenuPosition | null | undefined;
            clipBehavior?: upstream11.Clip | undefined;
            useRootNavigator?: boolean | undefined;
            popUpAnimationStyle?: (Readonly<{
                "__flaxBound:package:flutter/src/animation/animation_style.dart::AnimationStyle": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | null | undefined;
            routeSettings?: Readonly<{
                "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
            }> | null | undefined;
            style?: (Readonly<{
                "__flaxBound:package:flutter/src/material/button_style.dart::ButtonStyle": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | null | undefined;
            requestFocus?: boolean | null | undefined;
        }): PopupMenuButton<_Selected0>;
        readonly prototype: PopupMenuButton<_Selected0>;
    } & _FlaxInstanceType<PopupMenuButton<_Selected0>> & _FlaxDartType<PopupMenuButton<_Selected0>> : never : never;
}
export {};
