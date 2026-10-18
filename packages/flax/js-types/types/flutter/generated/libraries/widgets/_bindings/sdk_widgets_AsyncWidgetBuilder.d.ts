import { type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_AsyncSnapshot';
import '@flax/flutter/widgets/_bindings/flutter_AsyncSnapshot';
export type AsyncWidgetBuilder<T extends unknown | null = unknown | null> = ((context: upstream0.BuildContext, snapshot: Readonly<{
    "__flaxBound:package:flutter/src/widgets/async.dart::AsyncSnapshot": readonly [T];
}>) => Widget);
export type AsyncWidgetBuilderInput<T extends unknown | null = unknown | null> = ((context: upstream0.BuildContext, snapshot: upstream1.AsyncSnapshot<T>) => Widget);
