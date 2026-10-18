import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream2 from '@flax/flutter/material/_bindings/sdk_material_SliderComponentShape';
import '@flax/flutter/material/_bindings/sdk_material_SliderComponentShape';
import type * as upstream3 from '@flax/flutter/material/_bindings/sdk_material_SliderTickMarkShape';
import '@flax/flutter/material/_bindings/sdk_material_SliderTickMarkShape';
import type * as upstream4 from '@flax/flutter/material/_bindings/sdk_material_SliderTrackShape';
import '@flax/flutter/material/_bindings/sdk_material_SliderTrackShape';
import type * as upstream5 from '@flax/flutter/material/_bindings/sdk_material_RangeSliderTickMarkShape';
import '@flax/flutter/material/_bindings/sdk_material_RangeSliderTickMarkShape';
import type * as upstream6 from '@flax/flutter/material/_bindings/sdk_material_RangeSliderThumbShape';
import '@flax/flutter/material/_bindings/sdk_material_RangeSliderThumbShape';
import type * as upstream7 from '@flax/flutter/material/_bindings/sdk_material_RangeSliderTrackShape';
import '@flax/flutter/material/_bindings/sdk_material_RangeSliderTrackShape';
import type * as upstream8 from '@flax/flutter/material/_bindings/sdk_material_RangeSliderValueIndicatorShape';
import '@flax/flutter/material/_bindings/sdk_material_RangeSliderValueIndicatorShape';
import type * as upstream9 from '@flax/flutter/material/_bindings/sdk_material_ShowValueIndicator';
import '@flax/flutter/material/_bindings/sdk_material_ShowValueIndicator';
import type * as upstream10 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream11 from '@flax/flutter/material/_bindings/sdk_material_Thumb';
import '@flax/flutter/material/_bindings/sdk_material_Thumb';
import type * as upstream12 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream13 from '@flax/flutter/material/_bindings/sdk_material_RangeValues';
import '@flax/flutter/material/_bindings/sdk_material_RangeValues';
import type * as upstream14 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream15 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream16 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream17 from '@flax/flutter/material/_bindings/sdk_material_SliderInteraction';
import '@flax/flutter/material/_bindings/sdk_material_SliderInteraction';
import type * as upstream18 from '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream19 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream20 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream21 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface SliderThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/material/slider_theme.dart::SliderThemeData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __SliderThemeData: unique symbol;
    readonly [_flaxDartTypeValue]: SliderThemeData;
}
export interface SliderThemeData {
    readonly [_flaxDartTypeValue]: SliderThemeData;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream19.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream21.DiagnosticsTreeStyle | null | undefined;
    }): upstream20.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    copyWith(options?: {
        trackHeight?: number | null | undefined;
        activeTrackColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        inactiveTrackColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        secondaryActiveTrackColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        disabledActiveTrackColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        disabledInactiveTrackColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        disabledSecondaryActiveTrackColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        activeTickMarkColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        inactiveTickMarkColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        disabledActiveTickMarkColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        disabledInactiveTickMarkColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        thumbColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        overlappingShapeStrokeColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        disabledThumbColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        overlayColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        valueIndicatorColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        valueIndicatorStrokeColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        overlayShape?: Readonly<{
            "__flaxBound:package:flutter/src/material/slider_value_indicator_shape.dart::SliderComponentShape": readonly [];
        }> | null | undefined;
        tickMarkShape?: Readonly<{
            "__flaxBound:package:flutter/src/material/slider_parts.dart::SliderTickMarkShape": readonly [];
        }> | null | undefined;
        thumbShape?: Readonly<{
            "__flaxBound:package:flutter/src/material/slider_value_indicator_shape.dart::SliderComponentShape": readonly [];
        }> | null | undefined;
        trackShape?: Readonly<{
            "__flaxBound:package:flutter/src/material/slider_parts.dart::SliderTrackShape": readonly [];
        }> | null | undefined;
        valueIndicatorShape?: Readonly<{
            "__flaxBound:package:flutter/src/material/slider_value_indicator_shape.dart::SliderComponentShape": readonly [];
        }> | null | undefined;
        rangeTickMarkShape?: Readonly<{
            "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RangeSliderTickMarkShape": readonly [];
        }> | null | undefined;
        rangeThumbShape?: Readonly<{
            "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RangeSliderThumbShape": readonly [];
        }> | null | undefined;
        rangeTrackShape?: Readonly<{
            "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RangeSliderTrackShape": readonly [];
        }> | null | undefined;
        rangeValueIndicatorShape?: Readonly<{
            "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RangeSliderValueIndicatorShape": readonly [];
        }> | null | undefined;
        showValueIndicator?: upstream9.ShowValueIndicator | null | undefined;
        valueIndicatorTextStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        minThumbSeparation?: number | null | undefined;
        thumbSelector?: ((textDirection: upstream12.TextDirection, values: upstream13.RangeValues, tapValue: number, thumbSize: upstream14.Size, trackSize: upstream14.Size, dx: number) => upstream11.Thumb | null) | null | undefined;
        mouseCursor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream16.MouseCursor | null];
        }> | null | undefined;
        allowedInteraction?: upstream17.SliderInteraction | null | undefined;
        padding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        thumbSize?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream14.Size | null];
        }> | null | undefined;
        trackGap?: number | null | undefined;
        year2023?: boolean | null | undefined;
    }): SliderThemeData;
    get trackHeight(): number | null;
    get activeTrackColor(): upstream1.Color | null;
    get inactiveTrackColor(): upstream1.Color | null;
    get secondaryActiveTrackColor(): upstream1.Color | null;
    get disabledActiveTrackColor(): upstream1.Color | null;
    get disabledSecondaryActiveTrackColor(): upstream1.Color | null;
    get disabledInactiveTrackColor(): upstream1.Color | null;
    get activeTickMarkColor(): upstream1.Color | null;
    get inactiveTickMarkColor(): upstream1.Color | null;
    get disabledActiveTickMarkColor(): upstream1.Color | null;
    get disabledInactiveTickMarkColor(): upstream1.Color | null;
    get thumbColor(): upstream1.Color | null;
    get overlappingShapeStrokeColor(): upstream1.Color | null;
    get disabledThumbColor(): upstream1.Color | null;
    get overlayColor(): upstream1.Color | null;
    get valueIndicatorColor(): upstream1.Color | null;
    get valueIndicatorStrokeColor(): upstream1.Color | null;
    get overlayShape(): upstream2.SliderComponentShape | null;
    get tickMarkShape(): upstream3.SliderTickMarkShape | null;
    get thumbShape(): upstream2.SliderComponentShape | null;
    get trackShape(): upstream4.SliderTrackShape | null;
    get valueIndicatorShape(): upstream2.SliderComponentShape | null;
    get rangeTickMarkShape(): upstream5.RangeSliderTickMarkShape | null;
    get rangeThumbShape(): upstream6.RangeSliderThumbShape | null;
    get rangeTrackShape(): upstream7.RangeSliderTrackShape | null;
    get rangeValueIndicatorShape(): upstream8.RangeSliderValueIndicatorShape | null;
    get showValueIndicator(): upstream9.ShowValueIndicator | null;
    get valueIndicatorTextStyle(): upstream10.TextStyle | null;
    get minThumbSeparation(): number | null;
    get thumbSelector(): ((textDirection: upstream12.TextDirection, values: Readonly<{
        "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RangeValues": readonly [];
    }>, tapValue: number, thumbSize: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, trackSize: Readonly<{
        "__flaxBound:dart:ui::Size": readonly [];
    }> & Readonly<{
        "__flaxBound:dart:ui::OffsetBase": readonly [];
    }>, dx: number) => upstream11.Thumb | null) | null;
    get mouseCursor(): upstream15.WidgetStateProperty<upstream16.MouseCursor | null> | null;
    get allowedInteraction(): upstream17.SliderInteraction | null;
    get padding(): upstream18.EdgeInsetsGeometry | null;
    get thumbSize(): upstream15.WidgetStateProperty<upstream14.Size | null> | null;
    get trackGap(): number | null;
    get year2023(): boolean | null;
}
export declare abstract class SliderThemeData extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SliderThemeData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SliderThemeData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:SliderThemeData", readonly [], false];
    constructor(options?: {
        trackHeight?: number | null | undefined;
        activeTrackColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        inactiveTrackColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        secondaryActiveTrackColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        disabledActiveTrackColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        disabledInactiveTrackColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        disabledSecondaryActiveTrackColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        activeTickMarkColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        inactiveTickMarkColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        disabledActiveTickMarkColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        disabledInactiveTickMarkColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        thumbColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        overlappingShapeStrokeColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        disabledThumbColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        overlayColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        valueIndicatorColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        valueIndicatorStrokeColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        overlayShape?: Readonly<{
            "__flaxBound:package:flutter/src/material/slider_value_indicator_shape.dart::SliderComponentShape": readonly [];
        }> | null | undefined;
        tickMarkShape?: Readonly<{
            "__flaxBound:package:flutter/src/material/slider_parts.dart::SliderTickMarkShape": readonly [];
        }> | null | undefined;
        thumbShape?: Readonly<{
            "__flaxBound:package:flutter/src/material/slider_value_indicator_shape.dart::SliderComponentShape": readonly [];
        }> | null | undefined;
        trackShape?: Readonly<{
            "__flaxBound:package:flutter/src/material/slider_parts.dart::SliderTrackShape": readonly [];
        }> | null | undefined;
        valueIndicatorShape?: Readonly<{
            "__flaxBound:package:flutter/src/material/slider_value_indicator_shape.dart::SliderComponentShape": readonly [];
        }> | null | undefined;
        rangeTickMarkShape?: Readonly<{
            "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RangeSliderTickMarkShape": readonly [];
        }> | null | undefined;
        rangeThumbShape?: Readonly<{
            "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RangeSliderThumbShape": readonly [];
        }> | null | undefined;
        rangeTrackShape?: Readonly<{
            "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RangeSliderTrackShape": readonly [];
        }> | null | undefined;
        rangeValueIndicatorShape?: Readonly<{
            "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RangeSliderValueIndicatorShape": readonly [];
        }> | null | undefined;
        showValueIndicator?: upstream9.ShowValueIndicator | null | undefined;
        valueIndicatorTextStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        minThumbSeparation?: number | null | undefined;
        thumbSelector?: ((textDirection: upstream12.TextDirection, values: upstream13.RangeValues, tapValue: number, thumbSize: upstream14.Size, trackSize: upstream14.Size, dx: number) => upstream11.Thumb | null) | null | undefined;
        mouseCursor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream16.MouseCursor | null];
        }> | null | undefined;
        allowedInteraction?: upstream17.SliderInteraction | null | undefined;
        padding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        thumbSize?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream14.Size | null];
        }> | null | undefined;
        trackGap?: number | null | undefined;
        year2023?: boolean | null | undefined;
    });
}
export declare namespace SliderThemeData {
    function implement(args: [options?: {
        trackHeight?: number | null | undefined;
        activeTrackColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        inactiveTrackColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        secondaryActiveTrackColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        disabledActiveTrackColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        disabledInactiveTrackColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        disabledSecondaryActiveTrackColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        activeTickMarkColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        inactiveTickMarkColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        disabledActiveTickMarkColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        disabledInactiveTickMarkColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        thumbColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        overlappingShapeStrokeColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        disabledThumbColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        overlayColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        valueIndicatorColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        valueIndicatorStrokeColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        overlayShape?: Readonly<{
            "__flaxBound:package:flutter/src/material/slider_value_indicator_shape.dart::SliderComponentShape": readonly [];
        }> | null | undefined;
        tickMarkShape?: Readonly<{
            "__flaxBound:package:flutter/src/material/slider_parts.dart::SliderTickMarkShape": readonly [];
        }> | null | undefined;
        thumbShape?: Readonly<{
            "__flaxBound:package:flutter/src/material/slider_value_indicator_shape.dart::SliderComponentShape": readonly [];
        }> | null | undefined;
        trackShape?: Readonly<{
            "__flaxBound:package:flutter/src/material/slider_parts.dart::SliderTrackShape": readonly [];
        }> | null | undefined;
        valueIndicatorShape?: Readonly<{
            "__flaxBound:package:flutter/src/material/slider_value_indicator_shape.dart::SliderComponentShape": readonly [];
        }> | null | undefined;
        rangeTickMarkShape?: Readonly<{
            "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RangeSliderTickMarkShape": readonly [];
        }> | null | undefined;
        rangeThumbShape?: Readonly<{
            "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RangeSliderThumbShape": readonly [];
        }> | null | undefined;
        rangeTrackShape?: Readonly<{
            "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RangeSliderTrackShape": readonly [];
        }> | null | undefined;
        rangeValueIndicatorShape?: Readonly<{
            "__flaxBound:package:flutter/src/material/range_slider_parts.dart::RangeSliderValueIndicatorShape": readonly [];
        }> | null | undefined;
        showValueIndicator?: upstream9.ShowValueIndicator | null | undefined;
        valueIndicatorTextStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        minThumbSeparation?: number | null | undefined;
        thumbSelector?: ((textDirection: upstream12.TextDirection, values: upstream13.RangeValues, tapValue: number, thumbSize: upstream14.Size, trackSize: upstream14.Size, dx: number) => upstream11.Thumb | null) | null | undefined;
        mouseCursor?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream16.MouseCursor | null];
        }> | null | undefined;
        allowedInteraction?: upstream17.SliderInteraction | null | undefined;
        padding?: Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }> | null | undefined;
        thumbSize?: Readonly<{
            "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream14.Size | null];
        }> | null | undefined;
        trackGap?: number | null | undefined;
        year2023?: boolean | null | undefined;
    }], implementation: {}): SliderThemeData;
}
export declare namespace SliderThemeData {
    function lerp(a: Readonly<{
        "__flaxBound:package:flutter/src/material/slider_theme.dart::SliderThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, b: Readonly<{
        "__flaxBound:package:flutter/src/material/slider_theme.dart::SliderThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, t: number): SliderThemeData;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "trackHeight" | "activeTrackColor" | "inactiveTrackColor" | "secondaryActiveTrackColor" | "disabledActiveTrackColor" | "disabledSecondaryActiveTrackColor" | "disabledInactiveTrackColor" | "activeTickMarkColor" | "inactiveTickMarkColor" | "disabledActiveTickMarkColor" | "disabledInactiveTickMarkColor" | "thumbColor" | "overlappingShapeStrokeColor" | "disabledThumbColor" | "overlayColor" | "valueIndicatorColor" | "valueIndicatorStrokeColor" | "overlayShape" | "tickMarkShape" | "thumbShape" | "trackShape" | "valueIndicatorShape" | "rangeTickMarkShape" | "rangeThumbShape" | "rangeTrackShape" | "rangeValueIndicatorShape" | "showValueIndicator" | "valueIndicatorTextStyle" | "minThumbSeparation" | "thumbSelector" | "mouseCursor" | "allowedInteraction" | "padding" | "thumbSize" | "trackGap" | "year2023" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "__flaxBound:package:flutter/src/material/slider_theme.dart::SliderThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
