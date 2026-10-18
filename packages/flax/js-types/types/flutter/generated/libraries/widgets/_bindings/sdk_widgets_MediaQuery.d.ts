import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartSetInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedWidget';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ProxyWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_MediaQueryData';
import '@flax/flutter/widgets/_bindings/sdk_widgets_MediaQueryData';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/dart/ui/_bindings/sdk_dart_ui_FlutterView';
import type * as upstream6 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_Orientation';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Orientation';
import type * as upstream8 from '@flax/flutter/painting/_bindings/sdk_painting_TextScaler';
import '@flax/flutter/painting/_bindings/sdk_painting_TextScaler';
import type * as upstream9 from '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import type * as upstream10 from '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/sdk_widgets_NavigationMode';
import '@flax/flutter/widgets/_bindings/sdk_widgets_NavigationMode';
import type * as upstream12 from '@flax/flutter/gestures/_bindings/sdk_gestures_DeviceGestureSettings';
import '@flax/flutter/gestures/_bindings/sdk_gestures_DeviceGestureSettings';
import type * as upstream13 from '@flax/dart/ui/_bindings/sdk_dart_ui_DisplayFeature';
import '@flax/dart/ui/_bindings/sdk_dart_ui_DisplayFeature';
import type * as upstream14 from '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import '@flax/flutter/painting/_bindings/flutter_BorderRadius';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream16 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream17 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream18 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface MediaQuery extends _FlaxDartWidget, Readonly<{
    "__flaxBound:package:flutter/src/widgets/inherited_model.dart::InheritedModel": readonly [Readonly<{
        "__flaxBound:package:flutter/src/widgets/media_query.dart::_MediaQueryAspect": readonly [];
    }>];
}>, Omit<upstream0.InheritedWidget, _flaxOwnMembers0>, Omit<upstream1.ProxyWidget, _flaxOwnMembers0 | keyof upstream0.InheritedWidget>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.InheritedWidget | keyof upstream1.ProxyWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/media_query.dart::MediaQuery": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/inherited_model.dart::InheritedModel": readonly [Readonly<{
        "__flaxBound:package:flutter/src/widgets/media_query.dart::_MediaQueryAspect": readonly [];
    }>];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::InheritedWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __MediaQuery: unique symbol;
    readonly [_flaxDartTypeValue]: MediaQuery;
    readonly data: upstream3.MediaQueryData;
    readonly child: Widget;
    readonly key: upstream2.Key | null;
    updateShouldNotify(oldWidget: MediaQuery): boolean;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    updateShouldNotifyDependent(oldWidget: MediaQuery, dependencies: DartSetInput<{}, {}>): boolean;
    isSupportedAspect(aspect: {}): boolean;
    toStringShort(): string;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream16.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream16.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream18.DiagnosticsTreeStyle | null | undefined;
    }): upstream17.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream17.DiagnosticsNode>;
}
export declare function _MediaQueryFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    data: Readonly<{
        "__flaxBound:package:flutter/src/widgets/media_query.dart::MediaQueryData": readonly [];
    }>;
    child: Widget;
}): MediaQuery;
export declare namespace _MediaQueryFactory {
    function removePadding(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        context: upstream4.BuildContext;
        removeLeft?: boolean | undefined;
        removeTop?: boolean | undefined;
        removeRight?: boolean | undefined;
        removeBottom?: boolean | undefined;
        child: Widget;
    }): MediaQuery;
}
export declare namespace _MediaQueryFactory {
    function removeViewInsets(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        context: upstream4.BuildContext;
        removeLeft?: boolean | undefined;
        removeTop?: boolean | undefined;
        removeRight?: boolean | undefined;
        removeBottom?: boolean | undefined;
        child: Widget;
    }): MediaQuery;
}
export declare namespace _MediaQueryFactory {
    function removeViewPadding(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        context: upstream4.BuildContext;
        removeLeft?: boolean | undefined;
        removeTop?: boolean | undefined;
        removeRight?: boolean | undefined;
        removeBottom?: boolean | undefined;
        child: Widget;
    }): MediaQuery;
}
export declare namespace _MediaQueryFactory {
    function applyTextStyleOverrides(options: {
        child: Widget;
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        letterSpacingOverride: number | null;
        lineHeightScaleFactorOverride: number | null;
        paragraphSpacingOverride: number | null;
        wordSpacingOverride: number | null;
    }): Widget;
}
export declare namespace _MediaQueryFactory {
    function fromWindow(options: {
        child: Widget;
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
    }): Widget;
}
export declare namespace _MediaQueryFactory {
    function fromView(options: {
        child: Widget;
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        view: Readonly<{
            "__flaxBound:dart:ui::FlutterView": readonly [];
        }>;
    }): Widget;
}
export declare namespace _MediaQueryFactory {
    function withNoTextScaling(options: {
        child: Widget;
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
    }): Widget;
}
export declare namespace _MediaQueryFactory {
    function withClampedTextScaling(options: {
        child: Widget;
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        maxScaleFactor?: number | undefined;
        minScaleFactor?: number | undefined;
    }): Widget;
}
export declare namespace _MediaQueryFactory {
    function of(context: upstream4.BuildContext): upstream3.MediaQueryData;
}
export declare namespace _MediaQueryFactory {
    function maybeOf(context: upstream4.BuildContext): upstream3.MediaQueryData | null;
}
export declare namespace _MediaQueryFactory {
    function sizeOf(context: upstream4.BuildContext): upstream6.Size;
}
export declare namespace _MediaQueryFactory {
    function maybeSizeOf(context: upstream4.BuildContext): upstream6.Size | null;
}
export declare namespace _MediaQueryFactory {
    function widthOf(context: upstream4.BuildContext): number;
}
export declare namespace _MediaQueryFactory {
    function maybeWidthOf(context: upstream4.BuildContext): number | null;
}
export declare namespace _MediaQueryFactory {
    function heightOf(context: upstream4.BuildContext): number;
}
export declare namespace _MediaQueryFactory {
    function maybeHeightOf(context: upstream4.BuildContext): number | null;
}
export declare namespace _MediaQueryFactory {
    function orientationOf(context: upstream4.BuildContext): upstream7.Orientation;
}
export declare namespace _MediaQueryFactory {
    function maybeOrientationOf(context: upstream4.BuildContext): upstream7.Orientation | null;
}
export declare namespace _MediaQueryFactory {
    function devicePixelRatioOf(context: upstream4.BuildContext): number;
}
export declare namespace _MediaQueryFactory {
    function maybeDevicePixelRatioOf(context: upstream4.BuildContext): number | null;
}
export declare namespace _MediaQueryFactory {
    function textScaleFactorOf(context: upstream4.BuildContext): number;
}
export declare namespace _MediaQueryFactory {
    function maybeTextScaleFactorOf(context: upstream4.BuildContext): number | null;
}
export declare namespace _MediaQueryFactory {
    function textScalerOf(context: upstream4.BuildContext): upstream8.TextScaler;
}
export declare namespace _MediaQueryFactory {
    function maybeTextScalerOf(context: upstream4.BuildContext): upstream8.TextScaler | null;
}
export declare namespace _MediaQueryFactory {
    function platformBrightnessOf(context: upstream4.BuildContext): upstream9.Brightness;
}
export declare namespace _MediaQueryFactory {
    function maybePlatformBrightnessOf(context: upstream4.BuildContext): upstream9.Brightness | null;
}
export declare namespace _MediaQueryFactory {
    function paddingOf(context: upstream4.BuildContext): upstream10.EdgeInsets;
}
export declare namespace _MediaQueryFactory {
    function maybePaddingOf(context: upstream4.BuildContext): upstream10.EdgeInsets | null;
}
export declare namespace _MediaQueryFactory {
    function viewInsetsOf(context: upstream4.BuildContext): upstream10.EdgeInsets;
}
export declare namespace _MediaQueryFactory {
    function maybeViewInsetsOf(context: upstream4.BuildContext): upstream10.EdgeInsets | null;
}
export declare namespace _MediaQueryFactory {
    function systemGestureInsetsOf(context: upstream4.BuildContext): upstream10.EdgeInsets;
}
export declare namespace _MediaQueryFactory {
    function maybeSystemGestureInsetsOf(context: upstream4.BuildContext): upstream10.EdgeInsets | null;
}
export declare namespace _MediaQueryFactory {
    function viewPaddingOf(context: upstream4.BuildContext): upstream10.EdgeInsets;
}
export declare namespace _MediaQueryFactory {
    function maybeViewPaddingOf(context: upstream4.BuildContext): upstream10.EdgeInsets | null;
}
export declare namespace _MediaQueryFactory {
    function alwaysUse24HourFormatOf(context: upstream4.BuildContext): boolean;
}
export declare namespace _MediaQueryFactory {
    function maybeAlwaysUse24HourFormatOf(context: upstream4.BuildContext): boolean | null;
}
export declare namespace _MediaQueryFactory {
    function accessibleNavigationOf(context: upstream4.BuildContext): boolean;
}
export declare namespace _MediaQueryFactory {
    function maybeAccessibleNavigationOf(context: upstream4.BuildContext): boolean | null;
}
export declare namespace _MediaQueryFactory {
    function invertColorsOf(context: upstream4.BuildContext): boolean;
}
export declare namespace _MediaQueryFactory {
    function maybeInvertColorsOf(context: upstream4.BuildContext): boolean | null;
}
export declare namespace _MediaQueryFactory {
    function highContrastOf(context: upstream4.BuildContext): boolean;
}
export declare namespace _MediaQueryFactory {
    function maybeHighContrastOf(context: upstream4.BuildContext): boolean | null;
}
export declare namespace _MediaQueryFactory {
    function onOffSwitchLabelsOf(context: upstream4.BuildContext): boolean;
}
export declare namespace _MediaQueryFactory {
    function maybeOnOffSwitchLabelsOf(context: upstream4.BuildContext): boolean | null;
}
export declare namespace _MediaQueryFactory {
    function disableAnimationsOf(context: upstream4.BuildContext): boolean;
}
export declare namespace _MediaQueryFactory {
    function maybeDisableAnimationsOf(context: upstream4.BuildContext): boolean | null;
}
export declare namespace _MediaQueryFactory {
    function boldTextOf(context: upstream4.BuildContext): boolean;
}
export declare namespace _MediaQueryFactory {
    function maybeBoldTextOf(context: upstream4.BuildContext): boolean | null;
}
export declare namespace _MediaQueryFactory {
    function supportsAnnounceOf(context: upstream4.BuildContext): boolean;
}
export declare namespace _MediaQueryFactory {
    function maybeSupportsAnnounceOf(context: upstream4.BuildContext): boolean | null;
}
export declare namespace _MediaQueryFactory {
    function navigationModeOf(context: upstream4.BuildContext): upstream11.NavigationMode;
}
export declare namespace _MediaQueryFactory {
    function maybeNavigationModeOf(context: upstream4.BuildContext): upstream11.NavigationMode | null;
}
export declare namespace _MediaQueryFactory {
    function gestureSettingsOf(context: upstream4.BuildContext): upstream12.DeviceGestureSettings;
}
export declare namespace _MediaQueryFactory {
    function maybeGestureSettingsOf(context: upstream4.BuildContext): upstream12.DeviceGestureSettings | null;
}
export declare namespace _MediaQueryFactory {
    function displayFeaturesOf(context: upstream4.BuildContext): DartList<upstream13.DisplayFeature>;
}
export declare namespace _MediaQueryFactory {
    function maybeDisplayFeaturesOf(context: upstream4.BuildContext): DartList<upstream13.DisplayFeature> | null;
}
export declare namespace _MediaQueryFactory {
    function supportsShowingSystemContextMenu(context: upstream4.BuildContext): boolean;
}
export declare namespace _MediaQueryFactory {
    function maybeSupportsShowingSystemContextMenu(context: upstream4.BuildContext): boolean | null;
}
export declare namespace _MediaQueryFactory {
    function maybeLineHeightScaleFactorOverrideOf(context: upstream4.BuildContext): number | null;
}
export declare namespace _MediaQueryFactory {
    function maybeLetterSpacingOverrideOf(context: upstream4.BuildContext): number | null;
}
export declare namespace _MediaQueryFactory {
    function maybeWordSpacingOverrideOf(context: upstream4.BuildContext): number | null;
}
export declare namespace _MediaQueryFactory {
    function maybeParagraphSpacingOverrideOf(context: upstream4.BuildContext): number | null;
}
export declare namespace _MediaQueryFactory {
    function displayCornerRadiiOf(context: upstream4.BuildContext): upstream14.BorderRadius | null;
}
export declare namespace _MediaQueryFactory {
    function maybeDisplayCornerRadiiOf(context: upstream4.BuildContext): upstream14.BorderRadius | null;
}
export declare const MediaQuery: typeof _MediaQueryFactory & _FlaxInstanceType<MediaQuery> & _FlaxDartType<MediaQuery, readonly ["class", "flax.core/sdk_widgets#type:MediaQuery", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "data" | "child" | "key" | "updateShouldNotify" | "debugFillProperties" | "updateShouldNotifyDependent" | "isSupportedAspect" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/inherited_model.dart::InheritedModel" | "__flaxBound:package:flutter/src/widgets/media_query.dart::MediaQuery" | "__flaxBound:package:flutter/src/widgets/framework.dart::InheritedWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
