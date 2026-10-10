import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
export interface FloatingActionButton extends WidgetDescription {
    readonly type: "flax.material/material#type:FloatingActionButton";
}
declare function _FloatingActionButtonFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    child?: Bindable<Widget | null> | undefined;
    tooltip?: Bindable<string | null> | undefined;
    foregroundColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    backgroundColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    elevation?: Bindable<number | null> | undefined;
    onPressed: Bindable<(() => void) | null>;
    mini?: Bindable<boolean> | undefined;
    focusNode?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
    }> | null> | undefined;
    autofocus?: Bindable<boolean> | undefined;
}): FloatingActionButton;
declare namespace _FloatingActionButtonFactory {
    function small(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        child?: Bindable<Widget | null> | undefined;
        tooltip?: Bindable<string | null> | undefined;
        foregroundColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        backgroundColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        elevation?: Bindable<number | null> | undefined;
        onPressed: Bindable<(() => void) | null>;
        focusNode?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
        }> | null> | undefined;
        autofocus?: Bindable<boolean> | undefined;
    }): FloatingActionButton;
}
declare namespace _FloatingActionButtonFactory {
    function large(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        child?: Bindable<Widget | null> | undefined;
        tooltip?: Bindable<string | null> | undefined;
        foregroundColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        backgroundColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        elevation?: Bindable<number | null> | undefined;
        onPressed: Bindable<(() => void) | null>;
        focusNode?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
        }> | null> | undefined;
        autofocus?: Bindable<boolean> | undefined;
    }): FloatingActionButton;
}
declare namespace _FloatingActionButtonFactory {
    function extended(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        tooltip?: Bindable<string | null> | undefined;
        foregroundColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        backgroundColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        elevation?: Bindable<number | null> | undefined;
        onPressed: Bindable<(() => void) | null>;
        focusNode?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
        }> | null> | undefined;
        autofocus?: Bindable<boolean> | undefined;
        icon?: Bindable<Widget | null> | undefined;
        label: Bindable<Widget>;
    }): FloatingActionButton;
}
export declare const FloatingActionButton: typeof _FloatingActionButtonFactory & _FlaxInstanceType<FloatingActionButton>;
export {};
