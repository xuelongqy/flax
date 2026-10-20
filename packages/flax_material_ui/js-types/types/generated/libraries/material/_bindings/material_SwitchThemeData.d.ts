import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream3 from '@flax/material-ui/_bindings/material_MaterialTapTargetSize';
import '@flax/material-ui/_bindings/material_MaterialTapTargetSize';
import type * as upstream4 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_Icon';
import type * as upstream6 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SwitchThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:material_ui/src/switch_theme.dart::SwitchThemeData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __SwitchThemeData: unique symbol;
    readonly [_flaxDartTypeValue]: SwitchThemeData;
    readonly thumbColor: upstream1.WidgetStateProperty<upstream2.Color | null> | null;
    readonly trackColor: upstream1.WidgetStateProperty<upstream2.Color | null> | null;
    readonly trackOutlineColor: upstream1.WidgetStateProperty<upstream2.Color | null> | null;
    readonly trackOutlineWidth: upstream1.WidgetStateProperty<number | null> | null;
    readonly materialTapTargetSize: upstream3.MaterialTapTargetSize | null;
    readonly mouseCursor: upstream1.WidgetStateProperty<upstream4.MouseCursor | null> | null;
    readonly overlayColor: upstream1.WidgetStateProperty<upstream2.Color | null> | null;
    readonly splashRadius: number | null;
    readonly thumbIcon: upstream1.WidgetStateProperty<upstream5.Icon | null> | null;
    readonly padding: upstream6.EdgeInsetsGeometry | null;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream7.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream9.DiagnosticsTreeStyle | null | undefined;
    }): upstream8.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    copyWith(options?: {
        materialTapTargetSize?: upstream3.MaterialTapTargetSize | null | undefined;
        mouseCursor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream4.MouseCursor | null];
        }> | null | undefined;
        overlayColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        padding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        splashRadius?: number | null | undefined;
        thumbColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        thumbIcon?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.Icon | null];
        }> | null | undefined;
        trackColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        trackOutlineColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        trackOutlineWidth?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
        }> | null | undefined;
    }): SwitchThemeData;
}
export declare function _SwitchThemeDataFactory(options?: {
    thumbColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
    }> | null | undefined;
    trackColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
    }> | null | undefined;
    trackOutlineColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
    }> | null | undefined;
    trackOutlineWidth?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
    }> | null | undefined;
    materialTapTargetSize?: upstream3.MaterialTapTargetSize | null | undefined;
    mouseCursor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream4.MouseCursor | null];
    }> | null | undefined;
    overlayColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
    }> | null | undefined;
    splashRadius?: number | null | undefined;
    thumbIcon?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.Icon | null];
    }> | null | undefined;
    padding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
}): SwitchThemeData;
export interface _SwitchThemeDataNative extends SwitchThemeData {
    readonly [_flaxDartTypeValue]: _SwitchThemeDataNative;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream7.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream9.DiagnosticsTreeStyle | null | undefined;
    }): upstream8.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    copyWith(options?: {
        thumbColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        trackColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        trackOutlineColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        trackOutlineWidth?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
        }> | null | undefined;
        materialTapTargetSize?: upstream3.MaterialTapTargetSize | null | undefined;
        mouseCursor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream4.MouseCursor | null];
        }> | null | undefined;
        overlayColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        splashRadius?: number | null | undefined;
        thumbIcon?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.Icon | null];
        }> | null | undefined;
        padding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
    }): SwitchThemeData;
    get thumbColor(): upstream1.WidgetStateProperty<upstream2.Color | null> | null;
    get trackColor(): upstream1.WidgetStateProperty<upstream2.Color | null> | null;
    get trackOutlineColor(): upstream1.WidgetStateProperty<upstream2.Color | null> | null;
    get trackOutlineWidth(): upstream1.WidgetStateProperty<number | null> | null;
    get materialTapTargetSize(): upstream3.MaterialTapTargetSize | null;
    get mouseCursor(): upstream1.WidgetStateProperty<upstream4.MouseCursor | null> | null;
    get overlayColor(): upstream1.WidgetStateProperty<upstream2.Color | null> | null;
    get splashRadius(): number | null;
    get thumbIcon(): upstream1.WidgetStateProperty<upstream5.Icon | null> | null;
    get padding(): upstream6.EdgeInsetsGeometry | null;
}
export declare abstract class _SwitchThemeDataNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SwitchThemeData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SwitchThemeData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:SwitchThemeData", readonly [], false];
    constructor(options?: {
        thumbColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        trackColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        trackOutlineColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        trackOutlineWidth?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
        }> | null | undefined;
        materialTapTargetSize?: upstream3.MaterialTapTargetSize | null | undefined;
        mouseCursor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream4.MouseCursor | null];
        }> | null | undefined;
        overlayColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        splashRadius?: number | null | undefined;
        thumbIcon?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.Icon | null];
        }> | null | undefined;
        padding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
    });
}
export declare namespace _SwitchThemeDataFactory {
    function implement(args: [options?: {
        thumbColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        trackColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        trackOutlineColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        trackOutlineWidth?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
        }> | null | undefined;
        materialTapTargetSize?: upstream3.MaterialTapTargetSize | null | undefined;
        mouseCursor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream4.MouseCursor | null];
        }> | null | undefined;
        overlayColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
        }> | null | undefined;
        splashRadius?: number | null | undefined;
        thumbIcon?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.Icon | null];
        }> | null | undefined;
        padding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
    }], implementation: {}): SwitchThemeData;
}
declare const _SwitchThemeDataBinding: typeof _SwitchThemeDataFactory & (new (options?: {
    thumbColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
    }> | null | undefined;
    trackColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
    }> | null | undefined;
    trackOutlineColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
    }> | null | undefined;
    trackOutlineWidth?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
    }> | null | undefined;
    materialTapTargetSize?: upstream3.MaterialTapTargetSize | null | undefined;
    mouseCursor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream4.MouseCursor | null];
    }> | null | undefined;
    overlayColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
    }> | null | undefined;
    splashRadius?: number | null | undefined;
    thumbIcon?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.Icon | null];
    }> | null | undefined;
    padding?: Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }> | null | undefined;
}) => _SwitchThemeDataNative);
export declare namespace _SwitchThemeDataFactory {
    function lerp(a: (Readonly<{
        "__flaxBound:package:material_ui/src/switch_theme.dart::SwitchThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, b: (Readonly<{
        "__flaxBound:package:material_ui/src/switch_theme.dart::SwitchThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, t: number): SwitchThemeData;
}
export declare const SwitchThemeData: typeof _SwitchThemeDataBinding & _FlaxInstanceType<SwitchThemeData> & _FlaxDartType<SwitchThemeData, readonly ["class", "flax.material/material#type:SwitchThemeData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "thumbColor" | "trackColor" | "trackOutlineColor" | "trackOutlineWidth" | "materialTapTargetSize" | "mouseCursor" | "overlayColor" | "splashRadius" | "thumbIcon" | "padding" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "__flaxBound:package:material_ui/src/switch_theme.dart::SwitchThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
