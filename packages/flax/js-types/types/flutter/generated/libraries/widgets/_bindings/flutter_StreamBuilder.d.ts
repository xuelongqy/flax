import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type DartInput, type Widget, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_AsyncSnapshot';
import '@flax/flutter/widgets/_bindings/flutter_AsyncSnapshot';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/dart/async/_bindings/flutter_Stream';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StreamBuilder<T extends unknown | null = unknown | null> extends WidgetDescription, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/async.dart::StreamBuilder": readonly [T];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/async.dart::StreamBuilderBase": readonly [T, upstream0.AsyncSnapshot<T>];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, 'type'> {
    readonly type: "flax.core/flutter#type:StreamBuilder";
}
export declare function _StreamBuilderFactory<T extends unknown | null = unknown | null>(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    initialData?: Bindable<(T | DartInput<T>) | null> | undefined;
    stream: Bindable<(upstream2.Stream<T> | upstream2.Stream<(T | DartInput<T>)>) | null>;
    builder: Bindable<((context: upstream3.BuildContext, snapshot: upstream0.AsyncSnapshot<T>) => Widget)>;
}): StreamBuilder<T>;
export declare const StreamBuilder: typeof _StreamBuilderFactory & _FlaxInstanceType<StreamBuilder<unknown | null>> & _FlaxDartType<StreamBuilder<unknown | null>, readonly ["class", "flax.core/flutter#type:StreamBuilder", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        (options: {
            key?: Readonly<{
                "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
            }> | null | undefined;
            initialData?: (_Selected0 | DartInput<_Selected0>) | null | undefined;
            stream: (upstream2.Stream<_Selected0> | upstream2.Stream<(_Selected0 | DartInput<_Selected0>)>) | null;
            builder: ((context: upstream3.BuildContext, snapshot: upstream0.AsyncSnapshot<_Selected0>) => Widget);
        }): StreamBuilder<_Selected0>;
        readonly prototype: StreamBuilder<_Selected0>;
    } & _FlaxInstanceType<StreamBuilder<_Selected0>> & _FlaxDartType<StreamBuilder<_Selected0>> : never : never;
}
export {};
