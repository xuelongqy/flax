import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream3 from '@flax/flutter/painting/_bindings/sdk_painting_ImageProvider';
import '@flax/flutter/painting/_bindings/sdk_painting_ImageProvider';
import type * as upstream4 from '@flax/dart/core/_bindings/flutter_StackTrace';
import '@flax/dart/core/_bindings/flutter_StackTrace';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_Icon';
import type * as upstream7 from '@flax/flutter/services/_bindings/flutter_MouseCursor';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream9 from '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream12 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CupertinoSwitch extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:cupertino_ui/src/switch.dart::CupertinoSwitch": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __CupertinoSwitch: unique symbol;
    readonly [_flaxDartTypeValue]: CupertinoSwitch;
    readonly value: boolean;
    readonly onChanged: ((value: boolean) => void) | null;
    readonly activeColor: upstream2.Color | null;
    readonly activeTrackColor: upstream2.Color | null;
    readonly trackColor: upstream2.Color | null;
    readonly inactiveTrackColor: upstream2.Color | null;
    readonly thumbColor: upstream2.Color | null;
    readonly inactiveThumbColor: upstream2.Color | null;
    readonly focusColor: upstream2.Color | null;
    readonly onLabelColor: upstream2.Color | null;
    readonly offLabelColor: upstream2.Color | null;
    readonly activeThumbImage: upstream3.ImageProvider<any> | null;
    readonly onActiveThumbImageError: ((exception: {}, stackTrace: Readonly<{
        "__flaxBound:dart:core::StackTrace": readonly [];
    }> | null) => void) | null;
    readonly inactiveThumbImage: upstream3.ImageProvider<any> | null;
    readonly onInactiveThumbImageError: ((exception: {}, stackTrace: Readonly<{
        "__flaxBound:dart:core::StackTrace": readonly [];
    }> | null) => void) | null;
    readonly trackOutlineColor: upstream5.WidgetStateProperty<upstream2.Color | null> | null;
    readonly trackOutlineWidth: upstream5.WidgetStateProperty<number | null> | null;
    readonly thumbIcon: upstream5.WidgetStateProperty<upstream6.Icon | null> | null;
    readonly mouseCursor: upstream5.WidgetStateProperty<upstream7.MouseCursor> | null;
    readonly focusNode: upstream8.FocusNode | null;
    readonly onFocusChange: ((value: boolean) => void) | null;
    readonly autofocus: boolean;
    readonly applyTheme: boolean | null;
    readonly dragStartBehavior: upstream9.DragStartBehavior;
    readonly key: upstream1.Key | null;
    createState(): upstream10.State<CupertinoSwitch>;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    createElement(): upstream12.StatefulElement;
    toStringShort(): string;
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
export declare function _CupertinoSwitchFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    value: boolean;
    onChanged: ((value: boolean) => void) | null;
    activeColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    trackColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    activeTrackColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    inactiveTrackColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    thumbColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    inactiveThumbColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    applyTheme?: boolean | null | undefined;
    focusColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    onLabelColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    offLabelColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    activeThumbImage?: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [{}];
    }> | null | undefined;
    onActiveThumbImageError?: ((exception: {}, stackTrace: upstream4.StackTrace | null) => void) | null | undefined;
    inactiveThumbImage?: Readonly<{
        "__flaxBound:package:flutter/src/painting/image_provider.dart::ImageProvider": readonly [{}];
    }> | null | undefined;
    onInactiveThumbImageError?: ((exception: {}, stackTrace: upstream4.StackTrace | null) => void) | null | undefined;
    trackOutlineColor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
    }> | null | undefined;
    trackOutlineWidth?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [number | null];
    }> | null | undefined;
    thumbIcon?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream6.Icon | null];
    }> | null | undefined;
    mouseCursor?: Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream7.MouseCursor];
    }> | null | undefined;
    focusNode?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>) | null | undefined;
    onFocusChange?: ((value: boolean) => void) | null | undefined;
    autofocus?: boolean | undefined;
    dragStartBehavior?: upstream9.DragStartBehavior | undefined;
}): CupertinoSwitch;
export declare const CupertinoSwitch: typeof _CupertinoSwitchFactory & _FlaxInstanceType<CupertinoSwitch> & _FlaxDartType<CupertinoSwitch, readonly ["class", "flax.cupertino/cupertino#type:CupertinoSwitch", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "value" | "onChanged" | "activeColor" | "activeTrackColor" | "trackColor" | "inactiveTrackColor" | "thumbColor" | "inactiveThumbColor" | "focusColor" | "onLabelColor" | "offLabelColor" | "activeThumbImage" | "onActiveThumbImageError" | "inactiveThumbImage" | "onInactiveThumbImageError" | "trackOutlineColor" | "trackOutlineWidth" | "thumbIcon" | "mouseCursor" | "focusNode" | "onFocusChange" | "autofocus" | "applyTheme" | "dragStartBehavior" | "key" | "createState" | "debugFillProperties" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:cupertino_ui/src/switch.dart::CupertinoSwitch" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
