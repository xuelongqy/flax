import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollNotification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollNotification';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RefreshIndicator extends WidgetDescription, Omit<Readonly<{
    "__flaxBound:package:material_ui/src/refresh_indicator.dart::RefreshIndicator": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, 'type'> {
    readonly type: "flax.material/material#type:RefreshIndicator";
}
export declare function _RefreshIndicatorFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    displacement?: Bindable<number> | undefined;
    edgeOffset?: Bindable<number> | undefined;
    onRefresh: Bindable<(() => Promise<void>)>;
    color?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    backgroundColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    notificationPredicate?: Bindable<((notification: upstream2.ScrollNotification) => boolean)> | undefined;
    semanticsLabel?: Bindable<string | null> | undefined;
    semanticsValue?: Bindable<string | null> | undefined;
    strokeWidth?: Bindable<number> | undefined;
    elevation?: Bindable<number> | undefined;
    child: Bindable<Widget>;
}): RefreshIndicator;
export declare namespace _RefreshIndicatorFactory {
    function adaptive(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        displacement?: Bindable<number> | undefined;
        edgeOffset?: Bindable<number> | undefined;
        onRefresh: Bindable<(() => Promise<void>)>;
        color?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        backgroundColor?: Bindable<Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null> | undefined;
        notificationPredicate?: Bindable<((notification: upstream2.ScrollNotification) => boolean)> | undefined;
        semanticsLabel?: Bindable<string | null> | undefined;
        semanticsValue?: Bindable<string | null> | undefined;
        strokeWidth?: Bindable<number> | undefined;
        elevation?: Bindable<number> | undefined;
        child: Bindable<Widget>;
    }): RefreshIndicator;
}
export declare namespace _RefreshIndicatorFactory {
    function noSpinner(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        onRefresh: Bindable<(() => Promise<void>)>;
        notificationPredicate?: Bindable<((notification: upstream2.ScrollNotification) => boolean)> | undefined;
        semanticsLabel?: Bindable<string | null> | undefined;
        semanticsValue?: Bindable<string | null> | undefined;
        elevation?: Bindable<number> | undefined;
        child: Bindable<Widget>;
    }): RefreshIndicator;
}
export declare const RefreshIndicator: typeof _RefreshIndicatorFactory & _FlaxInstanceType<RefreshIndicator> & _FlaxDartType<RefreshIndicator, readonly ["class", "flax.material/material#type:RefreshIndicator", readonly [], false]>;
