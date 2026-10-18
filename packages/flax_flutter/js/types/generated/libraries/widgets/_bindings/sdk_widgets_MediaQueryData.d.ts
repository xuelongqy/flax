import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream1 from '@flax/flutter/painting/_bindings/sdk_painting_TextScaler';
import '@flax/flutter/painting/_bindings/sdk_painting_TextScaler';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_NavigationMode';
import '@flax/flutter/widgets/_bindings/sdk_widgets_NavigationMode';
import type * as upstream5 from '@flax/flutter/gestures/_bindings/sdk_gestures_DeviceGestureSettings';
import '@flax/flutter/gestures/_bindings/sdk_gestures_DeviceGestureSettings';
import type * as upstream6 from '@flax/dart/ui/_bindings/sdk_dart_ui_DisplayFeature';
import '@flax/dart/ui/_bindings/sdk_dart_ui_DisplayFeature';
import type * as upstream7 from '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_Orientation';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Orientation';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Rect';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface MediaQueryData extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/media_query.dart::MediaQueryData": readonly [];
}> {
    readonly __MediaQueryData: unique symbol;
    readonly [_flaxDartTypeValue]: MediaQueryData;
}
export interface MediaQueryData {
    readonly [_flaxDartTypeValue]: MediaQueryData;
    copyWith(options?: {
        size?: (Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | null | undefined;
        devicePixelRatio?: number | null | undefined;
        textScaleFactor?: number | null | undefined;
        textScaler?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [];
        }> | null | undefined;
        platformBrightness?: upstream2.Brightness | null | undefined;
        padding?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }>) | null | undefined;
        viewPadding?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }>) | null | undefined;
        viewInsets?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }>) | null | undefined;
        systemGestureInsets?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }>) | null | undefined;
        alwaysUse24HourFormat?: boolean | null | undefined;
        highContrast?: boolean | null | undefined;
        onOffSwitchLabels?: boolean | null | undefined;
        disableAnimations?: boolean | null | undefined;
        invertColors?: boolean | null | undefined;
        accessibleNavigation?: boolean | null | undefined;
        boldText?: boolean | null | undefined;
        supportsAnnounce?: boolean | null | undefined;
        navigationMode?: upstream4.NavigationMode | null | undefined;
        gestureSettings?: Readonly<{
            "__flaxBound:package:flutter/src/gestures/gesture_settings.dart::DeviceGestureSettings": readonly [];
        }> | null | undefined;
        displayFeatures?: DartListInput<upstream6.DisplayFeature, Readonly<{
            "__flaxBound:dart:ui::DisplayFeature": readonly [];
        }>> | null | undefined;
        supportsShowingSystemContextMenu?: boolean | null | undefined;
    }): MediaQueryData;
    applyTextStyleOverrides(options: {
        lineHeightScaleFactorOverride: number | null;
        letterSpacingOverride: number | null;
        wordSpacingOverride: number | null;
        paragraphSpacingOverride: number | null;
    }): MediaQueryData;
    applyDisplayCornerRadii(displayCornerRadii: (Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
    }>) | null): MediaQueryData;
    removePadding(options?: {
        removeLeft?: boolean | undefined;
        removeTop?: boolean | undefined;
        removeRight?: boolean | undefined;
        removeBottom?: boolean | undefined;
    }): MediaQueryData;
    removeViewInsets(options?: {
        removeLeft?: boolean | undefined;
        removeTop?: boolean | undefined;
        removeRight?: boolean | undefined;
        removeBottom?: boolean | undefined;
    }): MediaQueryData;
    removeViewPadding(options?: {
        removeLeft?: boolean | undefined;
        removeTop?: boolean | undefined;
        removeRight?: boolean | undefined;
        removeBottom?: boolean | undefined;
    }): MediaQueryData;
    removeDisplayFeatures(subScreen: Readonly<{
        "__flaxBound:dart:ui::Rect": readonly [];
    }>): MediaQueryData;
    toString(): string;
    get size(): upstream0.Size;
    get devicePixelRatio(): number;
    get textScaleFactor(): number;
    get textScaler(): upstream1.TextScaler;
    get platformBrightness(): upstream2.Brightness;
    get viewInsets(): upstream3.EdgeInsets;
    get padding(): upstream3.EdgeInsets;
    get viewPadding(): upstream3.EdgeInsets;
    get systemGestureInsets(): upstream3.EdgeInsets;
    get alwaysUse24HourFormat(): boolean;
    get accessibleNavigation(): boolean;
    get invertColors(): boolean;
    get highContrast(): boolean;
    get onOffSwitchLabels(): boolean;
    get disableAnimations(): boolean;
    get boldText(): boolean;
    get supportsAnnounce(): boolean;
    get navigationMode(): upstream4.NavigationMode;
    get gestureSettings(): upstream5.DeviceGestureSettings;
    get displayFeatures(): DartList<upstream6.DisplayFeature>;
    get supportsShowingSystemContextMenu(): boolean;
    get lineHeightScaleFactorOverride(): number | null;
    get letterSpacingOverride(): number | null;
    get wordSpacingOverride(): number | null;
    get paragraphSpacingOverride(): number | null;
    get displayCornerRadii(): upstream7.BorderRadius | null;
    get orientation(): upstream8.Orientation;
}
export declare abstract class MediaQueryData extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<MediaQueryData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: MediaQueryData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:MediaQueryData", readonly [], false];
    constructor(options?: {
        size?: (Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | undefined;
        devicePixelRatio?: number | undefined;
        textScaleFactor?: number | undefined;
        textScaler?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [];
        }> | undefined;
        platformBrightness?: upstream2.Brightness | undefined;
        padding?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }>) | undefined;
        viewInsets?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }>) | undefined;
        systemGestureInsets?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }>) | undefined;
        viewPadding?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }>) | undefined;
        alwaysUse24HourFormat?: boolean | undefined;
        accessibleNavigation?: boolean | undefined;
        invertColors?: boolean | undefined;
        highContrast?: boolean | undefined;
        onOffSwitchLabels?: boolean | undefined;
        disableAnimations?: boolean | undefined;
        boldText?: boolean | undefined;
        supportsAnnounce?: boolean | undefined;
        navigationMode?: upstream4.NavigationMode | undefined;
        gestureSettings?: Readonly<{
            "__flaxBound:package:flutter/src/gestures/gesture_settings.dart::DeviceGestureSettings": readonly [];
        }> | undefined;
        displayFeatures?: DartListInput<upstream6.DisplayFeature, Readonly<{
            "__flaxBound:dart:ui::DisplayFeature": readonly [];
        }>> | undefined;
        supportsShowingSystemContextMenu?: boolean | undefined;
        lineHeightScaleFactorOverride?: number | null | undefined;
        letterSpacingOverride?: number | null | undefined;
        wordSpacingOverride?: number | null | undefined;
        paragraphSpacingOverride?: number | null | undefined;
        displayCornerRadii?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
        }>) | null | undefined;
    });
}
export declare namespace MediaQueryData {
    function implement(args: [options?: {
        size?: (Readonly<{
            "__flaxBound:dart:ui::Size": readonly [];
        }> & Readonly<{
            "__flaxBound:dart:ui::OffsetBase": readonly [];
        }>) | undefined;
        devicePixelRatio?: number | undefined;
        textScaleFactor?: number | undefined;
        textScaler?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_scaler.dart::TextScaler": readonly [];
        }> | undefined;
        platformBrightness?: upstream2.Brightness | undefined;
        padding?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }>) | undefined;
        viewInsets?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }>) | undefined;
        systemGestureInsets?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }>) | undefined;
        viewPadding?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
        }>) | undefined;
        alwaysUse24HourFormat?: boolean | undefined;
        accessibleNavigation?: boolean | undefined;
        invertColors?: boolean | undefined;
        highContrast?: boolean | undefined;
        onOffSwitchLabels?: boolean | undefined;
        disableAnimations?: boolean | undefined;
        boldText?: boolean | undefined;
        supportsAnnounce?: boolean | undefined;
        navigationMode?: upstream4.NavigationMode | undefined;
        gestureSettings?: Readonly<{
            "__flaxBound:package:flutter/src/gestures/gesture_settings.dart::DeviceGestureSettings": readonly [];
        }> | undefined;
        displayFeatures?: DartListInput<upstream6.DisplayFeature, Readonly<{
            "__flaxBound:dart:ui::DisplayFeature": readonly [];
        }>> | undefined;
        supportsShowingSystemContextMenu?: boolean | undefined;
        lineHeightScaleFactorOverride?: number | null | undefined;
        letterSpacingOverride?: number | null | undefined;
        wordSpacingOverride?: number | null | undefined;
        paragraphSpacingOverride?: number | null | undefined;
        displayCornerRadii?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadiusGeometry": readonly [];
        }>) | null | undefined;
    }], implementation: {}): MediaQueryData;
}
