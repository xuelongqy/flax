import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/services/_bindings/flutter_Color';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RefreshIndicator extends WidgetDescription {
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
        semanticsLabel?: Bindable<string | null> | undefined;
        semanticsValue?: Bindable<string | null> | undefined;
        elevation?: Bindable<number> | undefined;
        child: Bindable<Widget>;
    }): RefreshIndicator;
}
export declare const RefreshIndicator: typeof _RefreshIndicatorFactory & _FlaxInstanceType<RefreshIndicator> & _FlaxDartType<RefreshIndicator, readonly ["class", "flax.material/material#type:RefreshIndicator", readonly [], false]>;
