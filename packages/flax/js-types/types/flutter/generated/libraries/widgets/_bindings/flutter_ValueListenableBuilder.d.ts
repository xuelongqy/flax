import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_ValueListenable';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface ValueListenableBuilder<T extends unknown | null = unknown | null> extends WidgetDescription, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/value_listenable_builder.dart::ValueListenableBuilder": readonly [T];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, 'type'> {
    readonly type: "flax.core/flutter#type:ValueListenableBuilder";
}
export declare function _ValueListenableBuilderFactory<T extends unknown | null = unknown | null>(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    valueListenable: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [T];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>>;
    builder: Bindable<((context: upstream2.BuildContext, value: T, child: Widget | null) => Widget)>;
    child?: Bindable<Widget | null> | undefined;
}): ValueListenableBuilder<T>;
export declare const ValueListenableBuilder: typeof _ValueListenableBuilderFactory & _FlaxInstanceType<ValueListenableBuilder<unknown | null>> & _FlaxDartType<ValueListenableBuilder<unknown | null>, readonly ["class", "flax.core/flutter#type:ValueListenableBuilder", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        (options: {
            key?: Readonly<{
                "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
            }> | null | undefined;
            valueListenable: Readonly<{
                "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [_Selected0];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
            }>;
            builder: ((context: upstream2.BuildContext, value: _Selected0, child: Widget | null) => Widget);
            child?: Widget | null | undefined;
        }): ValueListenableBuilder<_Selected0>;
        readonly prototype: ValueListenableBuilder<_Selected0>;
    } & _FlaxInstanceType<ValueListenableBuilder<_Selected0>> & _FlaxDartType<ValueListenableBuilder<_Selected0>> : never : never;
}
export {};
