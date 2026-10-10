import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import '@flax/flutter/services/_bindings/flutter_Color';
export interface Scaffold extends WidgetDescription {
    readonly type: "flax.material/material#type:Scaffold";
}
declare function _ScaffoldFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    appBar?: Bindable<upstream1.PreferredSizeWidget | null> | undefined;
    body?: Bindable<Widget | null> | undefined;
    floatingActionButton?: Bindable<Widget | null> | undefined;
    drawer?: Bindable<Widget | null> | undefined;
    endDrawer?: Bindable<Widget | null> | undefined;
    bottomNavigationBar?: Bindable<Widget | null> | undefined;
    backgroundColor?: Bindable<Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null> | undefined;
    resizeToAvoidBottomInset?: Bindable<boolean | null> | undefined;
    primary?: Bindable<boolean> | undefined;
    extendBody?: Bindable<boolean> | undefined;
    extendBodyBehindAppBar?: Bindable<boolean> | undefined;
}): Scaffold;
export declare const Scaffold: typeof _ScaffoldFactory & _FlaxInstanceType<Scaffold>;
export {};
