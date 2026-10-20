import { type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_Route';
import '@flax/flutter/widgets/_bindings/flutter_Route';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
export type RawDialogRouteBuilder<T extends unknown | null = unknown | null> = ((context: upstream1.BuildContext, builder: ((context: upstream1.BuildContext) => Widget)) => upstream0.Route<T>);
export type RawDialogRouteBuilderInput<T extends unknown | null = unknown | null> = ((context: upstream1.BuildContext, builder: ((context: upstream1.BuildContext) => Widget)) => Readonly<{
    "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [T];
}> & Readonly<{
    "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
}>);
