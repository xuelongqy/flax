import { type FlaxInstanceType as _FlaxInstanceType, type DartSet, type DartSetInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream2 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream4 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream6 from '@flax/material-ui/_bindings/material_IconAlignment';
import '@flax/material-ui/_bindings/material_IconAlignment';
import type * as upstream7 from '@flax/flutter/painting/_bindings/flutter_BorderSide';
import '@flax/flutter/painting/_bindings/flutter_BorderSide';
import type * as upstream8 from '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import '@flax/flutter/painting/_bindings/flutter_OutlinedBorder';
import type * as upstream9 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream10 from '@flax/material-ui/_bindings/material_VisualDensity';
import '@flax/material-ui/_bindings/material_VisualDensity';
import type * as upstream11 from '@flax/material-ui/_bindings/material_MaterialTapTargetSize';
import '@flax/material-ui/_bindings/material_MaterialTapTargetSize';
import type * as upstream12 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream13 from '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import type * as upstream14 from '@flax/material-ui/_bindings/material_InteractiveInkFeatureFactory';
import '@flax/material-ui/_bindings/material_InteractiveInkFeatureFactory';
import type * as upstream15 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream16 from '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import '@flax/flutter/widgets/_bindings/flutter_WidgetState';
import type * as upstream17 from '@flax/material-ui/_bindings/material_ButtonSizeVariant';
import '@flax/material-ui/_bindings/material_ButtonSizeVariant';
import type * as upstream18 from '@flax/material-ui/_bindings/material_IconButtonWidthVariant';
import '@flax/material-ui/_bindings/material_IconButtonWidthVariant';
import type * as upstream19 from '@flax/material-ui/_bindings/material_ButtonShapeVariant';
import '@flax/material-ui/_bindings/material_ButtonShapeVariant';
import type * as upstream20 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream21 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream22 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface ButtonStyle extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __ButtonStyle: unique symbol;
    readonly [_flaxDartTypeValue]: ButtonStyle;
    readonly textStyle: upstream1.WidgetStateProperty<upstream2.TextStyle | null> | null;
    readonly backgroundColor: upstream1.WidgetStateProperty<upstream3.Color | null> | null;
    readonly foregroundColor: upstream1.WidgetStateProperty<upstream3.Color | null> | null;
    readonly overlayColor: upstream1.WidgetStateProperty<upstream3.Color | null> | null;
    readonly shadowColor: upstream1.WidgetStateProperty<upstream3.Color | null> | null;
    readonly surfaceTintColor: upstream1.WidgetStateProperty<upstream3.Color | null> | null;
    readonly elevation: upstream1.WidgetStateProperty<number | null> | null;
    readonly padding: upstream1.WidgetStateProperty<upstream4.EdgeInsetsGeometry | null> | null;
    readonly minimumSize: upstream1.WidgetStateProperty<upstream5.Size | null> | null;
    readonly fixedSize: upstream1.WidgetStateProperty<upstream5.Size | null> | null;
    readonly maximumSize: upstream1.WidgetStateProperty<upstream5.Size | null> | null;
    readonly iconColor: upstream1.WidgetStateProperty<upstream3.Color | null> | null;
    readonly iconSize: upstream1.WidgetStateProperty<number | null> | null;
    readonly iconAlignment: upstream6.IconAlignment | null;
    readonly side: upstream1.WidgetStateProperty<upstream7.BorderSide | null> | null;
    readonly shape: upstream1.WidgetStateProperty<upstream8.OutlinedBorder | null> | null;
    readonly mouseCursor: upstream1.WidgetStateProperty<upstream9.MouseCursor | null> | null;
    readonly visualDensity: upstream10.VisualDensity | null;
    readonly tapTargetSize: upstream11.MaterialTapTargetSize | null;
    readonly animationDuration: upstream12.Duration | null;
    readonly enableFeedback: boolean | null;
    readonly alignment: upstream13.AlignmentGeometry | null;
    readonly splashFactory: upstream14.InteractiveInkFeatureFactory | null;
    readonly backgroundBuilder: ((context: upstream15.BuildContext, states: DartSetInput<upstream16.WidgetState, upstream16.WidgetState>, child: Widget | null) => Widget) | null;
    readonly foregroundBuilder: ((context: upstream15.BuildContext, states: DartSetInput<upstream16.WidgetState, upstream16.WidgetState>, child: Widget | null) => Widget) | null;
    readonly sizeVariant: upstream17.ButtonSizeVariant | null;
    readonly iconButtonWidth: upstream18.IconButtonWidthVariant | null;
    readonly shapeVariant: upstream19.ButtonShapeVariant | null;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream20.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream22.DiagnosticsTreeStyle | null | undefined;
    }): upstream21.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    copyWith(options?: {
        alignment?: Readonly<{
            "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
        }> | null | undefined;
        animationDuration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream12.Duration];
        }>) | null | undefined;
        backgroundBuilder?: ((context: upstream15.BuildContext, states: DartSet<upstream16.WidgetState>, child: Widget | null) => Widget) | null | undefined;
        backgroundColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        elevation?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
        }> | null | undefined;
        enableFeedback?: boolean | null | undefined;
        fixedSize?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.Size | null];
        }> | null | undefined;
        foregroundBuilder?: ((context: upstream15.BuildContext, states: DartSet<upstream16.WidgetState>, child: Widget | null) => Widget) | null | undefined;
        foregroundColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        iconAlignment?: upstream6.IconAlignment | null | undefined;
        iconButtonWidth?: upstream18.IconButtonWidthVariant | null | undefined;
        iconColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        iconSize?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
        }> | null | undefined;
        maximumSize?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.Size | null];
        }> | null | undefined;
        minimumSize?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.Size | null];
        }> | null | undefined;
        mouseCursor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream9.MouseCursor | null];
        }> | null | undefined;
        overlayColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        padding?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream4.EdgeInsetsGeometry | null];
        }> | null | undefined;
        shadowColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        shape?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream8.OutlinedBorder | null];
        }> | null | undefined;
        shapeVariant?: upstream19.ButtonShapeVariant | null | undefined;
        side?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream7.BorderSide | null];
        }> | null | undefined;
        sizeVariant?: upstream17.ButtonSizeVariant | null | undefined;
        splashFactory?: Readonly<{
            "__flaxBound:package:material_ui/src/ink_well.dart::InteractiveInkFeatureFactory": readonly [];
        }> | null | undefined;
        surfaceTintColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        tapTargetSize?: upstream11.MaterialTapTargetSize | null | undefined;
        textStyle?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.TextStyle | null];
        }> | null | undefined;
        visualDensity?: (Readonly<{
            "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }): ButtonStyle;
    merge(style: (Readonly<{
        "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null): ButtonStyle;
}
export declare function _ButtonStyleFactory(options?: {
    textStyle?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.TextStyle | null];
    }> | null | undefined;
    backgroundColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
    }> | null | undefined;
    foregroundColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
    }> | null | undefined;
    overlayColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
    }> | null | undefined;
    shadowColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
    }> | null | undefined;
    surfaceTintColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
    }> | null | undefined;
    elevation?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
    }> | null | undefined;
    padding?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream4.EdgeInsetsGeometry | null];
    }> | null | undefined;
    minimumSize?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.Size | null];
    }> | null | undefined;
    fixedSize?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.Size | null];
    }> | null | undefined;
    maximumSize?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.Size | null];
    }> | null | undefined;
    iconColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
    }> | null | undefined;
    iconSize?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
    }> | null | undefined;
    iconAlignment?: upstream6.IconAlignment | null | undefined;
    side?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream7.BorderSide | null];
    }> | null | undefined;
    shape?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream8.OutlinedBorder | null];
    }> | null | undefined;
    mouseCursor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream9.MouseCursor | null];
    }> | null | undefined;
    visualDensity?: (Readonly<{
        "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    tapTargetSize?: upstream11.MaterialTapTargetSize | null | undefined;
    animationDuration?: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream12.Duration];
    }>) | null | undefined;
    enableFeedback?: boolean | null | undefined;
    alignment?: Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }> | null | undefined;
    splashFactory?: Readonly<{
        "__flaxBound:package:material_ui/src/ink_well.dart::InteractiveInkFeatureFactory": readonly [];
    }> | null | undefined;
    backgroundBuilder?: ((context: upstream15.BuildContext, states: DartSet<upstream16.WidgetState>, child: Widget | null) => Widget) | null | undefined;
    foregroundBuilder?: ((context: upstream15.BuildContext, states: DartSet<upstream16.WidgetState>, child: Widget | null) => Widget) | null | undefined;
    sizeVariant?: upstream17.ButtonSizeVariant | null | undefined;
    iconButtonWidth?: upstream18.IconButtonWidthVariant | null | undefined;
    shapeVariant?: upstream19.ButtonShapeVariant | null | undefined;
}): ButtonStyle;
export interface _ButtonStyleNative extends ButtonStyle {
    readonly [_flaxDartTypeValue]: _ButtonStyleNative;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream20.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream22.DiagnosticsTreeStyle | null | undefined;
    }): upstream21.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    copyWith(options?: {
        textStyle?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.TextStyle | null];
        }> | null | undefined;
        backgroundColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        foregroundColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        overlayColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        shadowColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        surfaceTintColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        elevation?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
        }> | null | undefined;
        padding?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream4.EdgeInsetsGeometry | null];
        }> | null | undefined;
        minimumSize?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.Size | null];
        }> | null | undefined;
        fixedSize?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.Size | null];
        }> | null | undefined;
        maximumSize?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.Size | null];
        }> | null | undefined;
        iconColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        iconSize?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
        }> | null | undefined;
        iconAlignment?: upstream6.IconAlignment | null | undefined;
        side?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream7.BorderSide | null];
        }> | null | undefined;
        shape?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream8.OutlinedBorder | null];
        }> | null | undefined;
        mouseCursor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream9.MouseCursor | null];
        }> | null | undefined;
        visualDensity?: (Readonly<{
            "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        tapTargetSize?: upstream11.MaterialTapTargetSize | null | undefined;
        animationDuration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream12.Duration];
        }>) | null | undefined;
        enableFeedback?: boolean | null | undefined;
        alignment?: Readonly<{
            "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
        }> | null | undefined;
        splashFactory?: Readonly<{
            "__flaxBound:package:material_ui/src/ink_well.dart::InteractiveInkFeatureFactory": readonly [];
        }> | null | undefined;
        backgroundBuilder?: ((context: upstream15.BuildContext, states: DartSet<upstream16.WidgetState>, child: Widget | null) => Widget) | null | undefined;
        foregroundBuilder?: ((context: upstream15.BuildContext, states: DartSet<upstream16.WidgetState>, child: Widget | null) => Widget) | null | undefined;
        sizeVariant?: upstream17.ButtonSizeVariant | null | undefined;
        iconButtonWidth?: upstream18.IconButtonWidthVariant | null | undefined;
        shapeVariant?: upstream19.ButtonShapeVariant | null | undefined;
    }): ButtonStyle;
    merge(style: (Readonly<{
        "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null): ButtonStyle;
    get textStyle(): upstream1.WidgetStateProperty<upstream2.TextStyle | null> | null;
    get backgroundColor(): upstream1.WidgetStateProperty<upstream3.Color | null> | null;
    get foregroundColor(): upstream1.WidgetStateProperty<upstream3.Color | null> | null;
    get overlayColor(): upstream1.WidgetStateProperty<upstream3.Color | null> | null;
    get shadowColor(): upstream1.WidgetStateProperty<upstream3.Color | null> | null;
    get surfaceTintColor(): upstream1.WidgetStateProperty<upstream3.Color | null> | null;
    get elevation(): upstream1.WidgetStateProperty<number | null> | null;
    get padding(): upstream1.WidgetStateProperty<upstream4.EdgeInsetsGeometry | null> | null;
    get minimumSize(): upstream1.WidgetStateProperty<upstream5.Size | null> | null;
    get fixedSize(): upstream1.WidgetStateProperty<upstream5.Size | null> | null;
    get maximumSize(): upstream1.WidgetStateProperty<upstream5.Size | null> | null;
    get iconColor(): upstream1.WidgetStateProperty<upstream3.Color | null> | null;
    get iconSize(): upstream1.WidgetStateProperty<number | null> | null;
    get iconAlignment(): upstream6.IconAlignment | null;
    get side(): upstream1.WidgetStateProperty<upstream7.BorderSide | null> | null;
    get shape(): upstream1.WidgetStateProperty<upstream8.OutlinedBorder | null> | null;
    get mouseCursor(): upstream1.WidgetStateProperty<upstream9.MouseCursor | null> | null;
    get visualDensity(): upstream10.VisualDensity | null;
    get tapTargetSize(): upstream11.MaterialTapTargetSize | null;
    get animationDuration(): upstream12.Duration | null;
    get enableFeedback(): boolean | null;
    get alignment(): upstream13.AlignmentGeometry | null;
    get splashFactory(): upstream14.InteractiveInkFeatureFactory | null;
    get backgroundBuilder(): ((context: upstream15.BuildContext, states: DartSetInput<upstream16.WidgetState, upstream16.WidgetState>, child: Widget | null) => Widget) | null;
    get foregroundBuilder(): ((context: upstream15.BuildContext, states: DartSetInput<upstream16.WidgetState, upstream16.WidgetState>, child: Widget | null) => Widget) | null;
    get sizeVariant(): upstream17.ButtonSizeVariant | null;
    get iconButtonWidth(): upstream18.IconButtonWidthVariant | null;
    get shapeVariant(): upstream19.ButtonShapeVariant | null;
}
export declare abstract class _ButtonStyleNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<ButtonStyle>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: ButtonStyle;
    static [_flaxDartTypeKey]: readonly ["class", "flax.material/material#type:ButtonStyle", readonly [], false];
    constructor(options?: {
        textStyle?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.TextStyle | null];
        }> | null | undefined;
        backgroundColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        foregroundColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        overlayColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        shadowColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        surfaceTintColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        elevation?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
        }> | null | undefined;
        padding?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream4.EdgeInsetsGeometry | null];
        }> | null | undefined;
        minimumSize?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.Size | null];
        }> | null | undefined;
        fixedSize?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.Size | null];
        }> | null | undefined;
        maximumSize?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.Size | null];
        }> | null | undefined;
        iconColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        iconSize?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
        }> | null | undefined;
        iconAlignment?: upstream6.IconAlignment | null | undefined;
        side?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream7.BorderSide | null];
        }> | null | undefined;
        shape?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream8.OutlinedBorder | null];
        }> | null | undefined;
        mouseCursor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream9.MouseCursor | null];
        }> | null | undefined;
        visualDensity?: (Readonly<{
            "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        tapTargetSize?: upstream11.MaterialTapTargetSize | null | undefined;
        animationDuration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream12.Duration];
        }>) | null | undefined;
        enableFeedback?: boolean | null | undefined;
        alignment?: Readonly<{
            "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
        }> | null | undefined;
        splashFactory?: Readonly<{
            "__flaxBound:package:material_ui/src/ink_well.dart::InteractiveInkFeatureFactory": readonly [];
        }> | null | undefined;
        backgroundBuilder?: ((context: upstream15.BuildContext, states: DartSet<upstream16.WidgetState>, child: Widget | null) => Widget) | null | undefined;
        foregroundBuilder?: ((context: upstream15.BuildContext, states: DartSet<upstream16.WidgetState>, child: Widget | null) => Widget) | null | undefined;
        sizeVariant?: upstream17.ButtonSizeVariant | null | undefined;
        iconButtonWidth?: upstream18.IconButtonWidthVariant | null | undefined;
        shapeVariant?: upstream19.ButtonShapeVariant | null | undefined;
    });
}
export declare namespace _ButtonStyleFactory {
    function implement(args: [options?: {
        textStyle?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.TextStyle | null];
        }> | null | undefined;
        backgroundColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        foregroundColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        overlayColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        shadowColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        surfaceTintColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        elevation?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
        }> | null | undefined;
        padding?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream4.EdgeInsetsGeometry | null];
        }> | null | undefined;
        minimumSize?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.Size | null];
        }> | null | undefined;
        fixedSize?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.Size | null];
        }> | null | undefined;
        maximumSize?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.Size | null];
        }> | null | undefined;
        iconColor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
        }> | null | undefined;
        iconSize?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
        }> | null | undefined;
        iconAlignment?: upstream6.IconAlignment | null | undefined;
        side?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream7.BorderSide | null];
        }> | null | undefined;
        shape?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream8.OutlinedBorder | null];
        }> | null | undefined;
        mouseCursor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream9.MouseCursor | null];
        }> | null | undefined;
        visualDensity?: (Readonly<{
            "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        tapTargetSize?: upstream11.MaterialTapTargetSize | null | undefined;
        animationDuration?: (Readonly<{
            "__flaxBound:dart:core::Duration": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:core::Comparable": readonly [upstream12.Duration];
        }>) | null | undefined;
        enableFeedback?: boolean | null | undefined;
        alignment?: Readonly<{
            "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
        }> | null | undefined;
        splashFactory?: Readonly<{
            "__flaxBound:package:material_ui/src/ink_well.dart::InteractiveInkFeatureFactory": readonly [];
        }> | null | undefined;
        backgroundBuilder?: ((context: upstream15.BuildContext, states: DartSet<upstream16.WidgetState>, child: Widget | null) => Widget) | null | undefined;
        foregroundBuilder?: ((context: upstream15.BuildContext, states: DartSet<upstream16.WidgetState>, child: Widget | null) => Widget) | null | undefined;
        sizeVariant?: upstream17.ButtonSizeVariant | null | undefined;
        iconButtonWidth?: upstream18.IconButtonWidthVariant | null | undefined;
        shapeVariant?: upstream19.ButtonShapeVariant | null | undefined;
    }], implementation: {}): ButtonStyle;
}
declare const _ButtonStyleBinding: typeof _ButtonStyleFactory & (new (options?: {
    textStyle?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.TextStyle | null];
    }> | null | undefined;
    backgroundColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
    }> | null | undefined;
    foregroundColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
    }> | null | undefined;
    overlayColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
    }> | null | undefined;
    shadowColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
    }> | null | undefined;
    surfaceTintColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
    }> | null | undefined;
    elevation?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
    }> | null | undefined;
    padding?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream4.EdgeInsetsGeometry | null];
    }> | null | undefined;
    minimumSize?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.Size | null];
    }> | null | undefined;
    fixedSize?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.Size | null];
    }> | null | undefined;
    maximumSize?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream5.Size | null];
    }> | null | undefined;
    iconColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream3.Color | null];
    }> | null | undefined;
    iconSize?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
    }> | null | undefined;
    iconAlignment?: upstream6.IconAlignment | null | undefined;
    side?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream7.BorderSide | null];
    }> | null | undefined;
    shape?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream8.OutlinedBorder | null];
    }> | null | undefined;
    mouseCursor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream9.MouseCursor | null];
    }> | null | undefined;
    visualDensity?: (Readonly<{
        "__flaxBound:package:material_ui/src/theme_data.dart::VisualDensity": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    tapTargetSize?: upstream11.MaterialTapTargetSize | null | undefined;
    animationDuration?: (Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:core::Comparable": readonly [upstream12.Duration];
    }>) | null | undefined;
    enableFeedback?: boolean | null | undefined;
    alignment?: Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }> | null | undefined;
    splashFactory?: Readonly<{
        "__flaxBound:package:material_ui/src/ink_well.dart::InteractiveInkFeatureFactory": readonly [];
    }> | null | undefined;
    backgroundBuilder?: ((context: upstream15.BuildContext, states: DartSet<upstream16.WidgetState>, child: Widget | null) => Widget) | null | undefined;
    foregroundBuilder?: ((context: upstream15.BuildContext, states: DartSet<upstream16.WidgetState>, child: Widget | null) => Widget) | null | undefined;
    sizeVariant?: upstream17.ButtonSizeVariant | null | undefined;
    iconButtonWidth?: upstream18.IconButtonWidthVariant | null | undefined;
    shapeVariant?: upstream19.ButtonShapeVariant | null | undefined;
}) => _ButtonStyleNative);
export declare namespace _ButtonStyleFactory {
    function lerp(a: (Readonly<{
        "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, b: (Readonly<{
        "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, t: number): ButtonStyle | null;
}
export declare const ButtonStyle: typeof _ButtonStyleBinding & _FlaxInstanceType<ButtonStyle> & _FlaxDartType<ButtonStyle, readonly ["class", "flax.material/material#type:ButtonStyle", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "textStyle" | "backgroundColor" | "foregroundColor" | "overlayColor" | "shadowColor" | "surfaceTintColor" | "elevation" | "padding" | "minimumSize" | "fixedSize" | "maximumSize" | "iconColor" | "iconSize" | "iconAlignment" | "side" | "shape" | "mouseCursor" | "visualDensity" | "tapTargetSize" | "animationDuration" | "enableFeedback" | "alignment" | "splashFactory" | "backgroundBuilder" | "foregroundBuilder" | "sizeVariant" | "iconButtonWidth" | "shapeVariant" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "merge" | "__flaxBound:package:material_ui/src/button_style.dart::ButtonStyle" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
