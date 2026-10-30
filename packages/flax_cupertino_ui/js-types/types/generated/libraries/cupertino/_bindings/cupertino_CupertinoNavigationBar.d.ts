import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/cupertino-ui/_bindings/cupertino_ObstructingPreferredSizeWidget';
import '@flax/cupertino-ui/_bindings/cupertino_ObstructingPreferredSizeWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_Border';
import '@flax/flutter/painting/_bindings/flutter_Border';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream5 from '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import type * as upstream6 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsDirectional';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsDirectional';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import type * as upstream8 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream13 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream14 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream15 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CupertinoNavigationBar extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:cupertino_ui/src/nav_bar.dart::CupertinoNavigationBar": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, Readonly<{
    "__flaxBound:package:cupertino_ui/src/page_scaffold.dart::ObstructingPreferredSizeWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/preferred_size.dart::PreferredSizeWidget": readonly [];
}>, Omit<upstream1.ObstructingPreferredSizeWidget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget | keyof Widget> {
    readonly __CupertinoNavigationBar: unique symbol;
    readonly [_flaxDartTypeValue]: CupertinoNavigationBar;
    readonly preferredSize: upstream8.Size;
    readonly largeTitle: Widget | null;
    readonly leading: Widget | null;
    readonly automaticallyImplyLeading: boolean;
    readonly automaticallyImplyMiddle: boolean;
    readonly previousPageTitle: string | null;
    readonly middle: Widget | null;
    readonly trailing: Widget | null;
    readonly backgroundColor: upstream4.Color | null;
    readonly automaticBackgroundVisibility: boolean;
    readonly brightness: upstream5.Brightness | null;
    readonly padding: upstream6.EdgeInsetsDirectional | null;
    readonly border: upstream3.Border | null;
    readonly transitionBetweenRoutes: boolean;
    readonly enableBackgroundFilterBlur: boolean;
    readonly heroTag: {};
    readonly bottom: upstream7.PreferredSizeWidget | null;
    readonly key: upstream2.Key | null;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream9.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream9.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream11.DiagnosticsTreeStyle | null | undefined;
    }): upstream10.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream10.DiagnosticsNode>;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toString(options?: {
        minLevel?: upstream9.DiagnosticLevel | undefined;
    }): string;
    shouldFullyObstruct(context: upstream13.BuildContext): boolean;
    createState(): upstream14.State<CupertinoNavigationBar>;
    createElement(): upstream15.StatefulElement;
}
export declare function _CupertinoNavigationBarFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    leading?: Widget | null | undefined;
    automaticallyImplyLeading?: boolean | undefined;
    automaticallyImplyMiddle?: boolean | undefined;
    previousPageTitle?: string | null | undefined;
    middle?: Widget | null | undefined;
    trailing?: Widget | null | undefined;
    border?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/box_border.dart::Border": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }>) | null | undefined;
    backgroundColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    automaticBackgroundVisibility?: boolean | undefined;
    enableBackgroundFilterBlur?: boolean | undefined;
    brightness?: upstream5.Brightness | null | undefined;
    padding?: (Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsDirectional": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }>) | null | undefined;
    transitionBetweenRoutes?: boolean | undefined;
    heroTag?: {} | undefined;
    bottom?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/preferred_size.dart::PreferredSizeWidget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
}): CupertinoNavigationBar;
export declare namespace _CupertinoNavigationBarFactory {
    const __flaxJsx: {
        readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof _CupertinoNavigationBarFactory>[0]>);
        readonly slot: null;
        readonly many: false;
    };
}
export declare namespace _CupertinoNavigationBarFactory {
    function large(options?: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        largeTitle?: Widget | null | undefined;
        leading?: Widget | null | undefined;
        automaticallyImplyLeading?: boolean | undefined;
        automaticallyImplyTitle?: boolean | undefined;
        previousPageTitle?: string | null | undefined;
        trailing?: Widget | null | undefined;
        border?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/box_border.dart::Border": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/box_border.dart::BoxBorder": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
        }>) | null | undefined;
        backgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        automaticBackgroundVisibility?: boolean | undefined;
        enableBackgroundFilterBlur?: boolean | undefined;
        brightness?: upstream5.Brightness | null | undefined;
        padding?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsDirectional": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }>) | null | undefined;
        transitionBetweenRoutes?: boolean | undefined;
        heroTag?: {} | undefined;
        bottom?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/preferred_size.dart::PreferredSizeWidget": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }): CupertinoNavigationBar;
    namespace large {
        const __flaxJsx: {
            readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof large>[0]>);
            readonly slot: null;
            readonly many: false;
        };
    }
}
export declare const CupertinoNavigationBar: typeof _CupertinoNavigationBarFactory & _FlaxInstanceType<CupertinoNavigationBar> & _FlaxDartType<CupertinoNavigationBar, readonly ["class", "flax.cupertino/cupertino#type:CupertinoNavigationBar", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "preferredSize" | "largeTitle" | "leading" | "automaticallyImplyLeading" | "automaticallyImplyMiddle" | "previousPageTitle" | "middle" | "trailing" | "backgroundColor" | "automaticBackgroundVisibility" | "brightness" | "padding" | "border" | "transitionBetweenRoutes" | "enableBackgroundFilterBlur" | "heroTag" | "bottom" | "key" | "toStringShallow" | "toStringDeep" | "toStringShort" | "toDiagnosticsNode" | "debugDescribeChildren" | "debugFillProperties" | "toString" | "shouldFullyObstruct" | "createState" | "createElement" | "__flaxBound:package:cupertino_ui/src/nav_bar.dart::CupertinoNavigationBar" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:cupertino_ui/src/page_scaffold.dart::ObstructingPreferredSizeWidget" | "__flaxBound:package:flutter/src/widgets/preferred_size.dart::PreferredSizeWidget";
export {};
