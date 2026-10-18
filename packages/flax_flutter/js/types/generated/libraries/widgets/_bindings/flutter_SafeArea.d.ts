import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/painting/_bindings/flutter_EdgeInsets';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SafeArea extends WidgetDescription, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/safe_area.dart::SafeArea": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, 'type'> {
    readonly type: "flax.core/flutter#type:SafeArea";
}
export declare function _SafeAreaFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    left?: Bindable<boolean> | undefined;
    top?: Bindable<boolean> | undefined;
    right?: Bindable<boolean> | undefined;
    bottom?: Bindable<boolean> | undefined;
    minimum?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsets": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/painting/edge_insets.dart::EdgeInsetsGeometry": readonly [];
    }>> | undefined;
    maintainBottomViewPadding?: Bindable<boolean> | undefined;
    child: Bindable<Widget>;
}): SafeArea;
export declare const SafeArea: typeof _SafeAreaFactory & _FlaxInstanceType<SafeArea> & _FlaxDartType<SafeArea, readonly ["class", "flax.core/flutter#type:SafeArea", readonly [], false]>;
