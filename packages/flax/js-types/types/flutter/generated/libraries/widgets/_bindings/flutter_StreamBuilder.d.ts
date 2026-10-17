import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type DartInput, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/dart/async/_bindings/flutter_Stream';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_AsyncSnapshot';
import '@flax/flutter/widgets/_bindings/flutter_AsyncSnapshot';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StreamBuilder<T extends unknown | null = unknown | null> extends WidgetDescription {
    readonly type: "flax.core/flutter#type:StreamBuilder";
}
export declare function _StreamBuilderFactory<T extends unknown | null = unknown | null>(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    initialData?: Bindable<(T | DartInput<T>) | null> | undefined;
    stream: Bindable<(upstream1.Stream<T> | upstream1.Stream<(T | DartInput<T>)>) | null>;
    builder: Bindable<((context: upstream2.BuildContext, snapshot: upstream3.AsyncSnapshot<T>) => Widget)>;
}): StreamBuilder<T>;
export declare const StreamBuilder: typeof _StreamBuilderFactory & _FlaxInstanceType<StreamBuilder<unknown | null>> & _FlaxDartType<StreamBuilder<unknown | null>, readonly ["class", "flax.core/flutter#type:StreamBuilder", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        (options: {
            key?: Readonly<{
                "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
            }> | null | undefined;
            initialData?: (_Selected0 | DartInput<_Selected0>) | null | undefined;
            stream: (upstream1.Stream<_Selected0> | upstream1.Stream<(_Selected0 | DartInput<_Selected0>)>) | null;
            builder: ((context: upstream2.BuildContext, snapshot: upstream3.AsyncSnapshot<_Selected0>) => Widget);
        }): StreamBuilder<_Selected0>;
        readonly prototype: StreamBuilder<_Selected0>;
    } & _FlaxInstanceType<StreamBuilder<_Selected0>> & _FlaxDartType<StreamBuilder<_Selected0>> : never : never;
}
export {};
