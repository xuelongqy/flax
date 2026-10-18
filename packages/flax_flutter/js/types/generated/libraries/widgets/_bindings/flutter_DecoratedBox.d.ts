import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/painting/_bindings/flutter_Decoration';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/flutter_DecorationPosition';
import '@flax/flutter/rendering/_bindings/flutter_DecorationPosition';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface DecoratedBox extends WidgetDescription, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/container.dart::DecoratedBox": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::SingleChildRenderObjectWidget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::RenderObjectWidget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, 'type'> {
    readonly type: "flax.core/flutter#type:DecoratedBox";
}
export declare function _DecoratedBoxFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    decoration: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>>;
    position?: Bindable<upstream2.DecorationPosition> | undefined;
    child?: Bindable<Widget | null> | undefined;
}): DecoratedBox;
export declare const DecoratedBox: typeof _DecoratedBoxFactory & _FlaxInstanceType<DecoratedBox> & _FlaxDartType<DecoratedBox, readonly ["class", "flax.core/flutter#type:DecoratedBox", readonly [], false]>;
