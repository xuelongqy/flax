import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_Route';
import '@flax/flutter/widgets/_bindings/flutter_Route';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
export type RouteFactory = ((settings: Readonly<{
    "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
}>) => upstream0.Route<unknown | null> | null);
export type RouteFactoryInput = ((settings: upstream1.RouteSettings) => (Readonly<{
    "__flaxBound:package:flutter/src/widgets/navigator.dart::Route": readonly [unknown | null];
}> & Readonly<{
    "__flaxBound:package:flutter/src/widgets/navigator.dart::_RoutePlaceholder": readonly [];
}>) | null);
