import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/cupertino/_bindings/cupertino_CupertinoThemeData';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_NavigatorObserver';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorObserver';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CupertinoApp extends WidgetDescription {
    readonly type: "flax.cupertino/cupertino#type:CupertinoApp";
}
declare function _CupertinoAppFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    home?: Bindable<Widget | null> | undefined;
    theme?: Bindable<Readonly<{
        "__flaxBound:package:cupertino_ui/src/theme.dart::CupertinoThemeData": readonly [];
    }> | null> | undefined;
    navigatorObservers?: Bindable<DartListInput<upstream2.NavigatorObserver, Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::NavigatorObserver": readonly [];
    }>>> | undefined;
    debugShowCheckedModeBanner?: Bindable<boolean> | undefined;
}): CupertinoApp;
export declare const CupertinoApp: typeof _CupertinoAppFactory & _FlaxInstanceType<CupertinoApp> & _FlaxDartType<CupertinoApp, readonly ["class", "flax.cupertino/cupertino#type:CupertinoApp", readonly [], false]>;
export {};
