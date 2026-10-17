import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/services/_bindings/flutter_MouseCursor';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/widgets/_bindings/flutter_WidgetStateProperty';
import '@flax/flutter/widgets/_bindings/flutter_BorderRadius';
import '@flax/flutter/widgets/_bindings/flutter_ShapeBorder';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/dart/core/_bindings/flutter_Duration';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface InkWell extends WidgetDescription {
    readonly type: "flax.material/material#type:InkWell";
}
export declare function _InkWellFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    child?: Bindable<Widget | null> | undefined;
    onTap?: Bindable<(() => void) | null> | undefined;
    onDoubleTap?: Bindable<(() => void) | null> | undefined;
    onLongPress?: Bindable<(() => void) | null> | undefined;
    onLongPressUp?: Bindable<(() => void) | null> | undefined;
    onTapCancel?: Bindable<(() => void) | null> | undefined;
    onSecondaryTap?: Bindable<(() => void) | null> | undefined;
    onSecondaryTapCancel?: Bindable<(() => void) | null> | undefined;
    onHighlightChanged?: Bindable<((value: boolean) => void) | null> | undefined;
    onHover?: Bindable<((value: boolean) => void) | null> | undefined;
    mouseCursor?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/services/mouse_cursor.dart::MouseCursor": readonly [];
    }> | null> | undefined;
    focusColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    hoverColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    highlightColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    overlayColor?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/widgets/widget_state.dart::WidgetStateProperty": readonly [upstream2.Color | null];
    }> | null> | undefined;
    splashColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    radius?: Bindable<number | null> | undefined;
    borderRadius?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/border_radius.dart::BorderRadius": readonly [];
    }> | null> | undefined;
    customBorder?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/borders.dart::ShapeBorder": readonly [];
    }> | null> | undefined;
    enableFeedback?: Bindable<boolean> | undefined;
    excludeFromSemantics?: Bindable<boolean> | undefined;
    focusNode?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
    }> | null> | undefined;
    canRequestFocus?: Bindable<boolean> | undefined;
    onFocusChange?: Bindable<((value: boolean) => void) | null> | undefined;
    autofocus?: Bindable<boolean> | undefined;
    hoverDuration?: Bindable<Readonly<{
        "__flaxBound:dart:core::Duration": readonly [];
    }> | null> | undefined;
}): InkWell;
export declare const InkWell: typeof _InkWellFactory & _FlaxInstanceType<InkWell> & _FlaxDartType<InkWell, readonly ["class", "flax.material/material#type:InkWell", readonly [], false]>;
