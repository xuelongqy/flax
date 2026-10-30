import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Spacer extends WidgetDescription, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/spacer.dart::Spacer": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, 'type'> {
    readonly type: "flax.core/flutter#type:Spacer";
}
export declare function _SpacerFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    flex?: Bindable<number> | undefined;
}): Spacer;
export declare namespace _SpacerFactory {
    const __flaxJsx: {
        readonly props: (globalThis.NonNullable<globalThis.Parameters<typeof _SpacerFactory>[0]>);
        readonly slot: null;
        readonly many: false;
    };
}
export declare const Spacer: typeof _SpacerFactory & _FlaxInstanceType<Spacer> & _FlaxDartType<Spacer, readonly ["class", "flax.core/flutter#type:Spacer", readonly [], false]>;
