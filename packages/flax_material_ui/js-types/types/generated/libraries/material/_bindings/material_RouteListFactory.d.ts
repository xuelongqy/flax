import { type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_Route';
import '@flax/flutter/widgets/_bindings/flutter_Route';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
export type RouteListFactory = ((navigator: upstream1.NavigatorState, initialRoute: string) => DartList<upstream0.Route<unknown | null>>);
export type RouteListFactoryInput = ((navigator: upstream1.NavigatorState, initialRoute: string) => DartListInput<upstream0.Route<unknown | null>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
}> & Readonly<{
    "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
}>>);
