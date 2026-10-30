import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface NavigationDestination extends WidgetDescription, Omit<Readonly<{
    "__flaxBound:package:material_ui/src/navigation_bar.dart::NavigationDestination": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, 'type'> {
    readonly type: "flax.material/material#type:NavigationDestination";
}
export declare function _NavigationDestinationFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    icon: Bindable<Widget>;
    selectedIcon?: Bindable<Widget | null> | undefined;
    label: Bindable<string>;
    tooltip?: Bindable<string | null> | undefined;
    enabled?: Bindable<boolean> | undefined;
}): NavigationDestination;
export declare namespace _NavigationDestinationFactory {
    const __flaxJsx: {
        readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof _NavigationDestinationFactory>[0]>);
        readonly slot: null;
        readonly many: false;
    };
}
export declare const NavigationDestination: typeof _NavigationDestinationFactory & _FlaxInstanceType<NavigationDestination> & _FlaxDartType<NavigationDestination, readonly ["class", "flax.material/material#type:NavigationDestination", readonly [], false]>;
