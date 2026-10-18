import { type FlaxInstanceType as _FlaxInstanceType, type DartInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_RouterDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RouterDelegate';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_GlobalKey';
import '@flax/flutter/widgets/_bindings/sdk_widgets_GlobalKey';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PopNavigatorRouterDelegateMixin<T extends unknown | null = unknown | null> extends Omit<upstream0.RouterDelegate<T>, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.RouterDelegate<T>>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/router.dart::PopNavigatorRouterDelegateMixin": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/router.dart::RouterDelegate": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __PopNavigatorRouterDelegateMixin: unique symbol;
    readonly [_flaxDartTypeValue]: PopNavigatorRouterDelegateMixin<T>;
    readonly currentConfiguration: T | null;
    readonly navigatorKey: upstream2.GlobalKey<upstream3.NavigatorState> | null;
    setInitialRoutePath(configuration: (T | DartInput<T>)): Promise<void>;
    setRestoredRoutePath(configuration: (T | DartInput<T>)): Promise<void>;
    setNewRoutePath(configuration: (T | DartInput<T>)): Promise<void>;
    popRoute(): Promise<boolean>;
    build(context: upstream4.BuildContext): Widget;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
}
export declare const PopNavigatorRouterDelegateMixin: object & _FlaxInstanceType<PopNavigatorRouterDelegateMixin<unknown | null>> & _FlaxDartType<PopNavigatorRouterDelegateMixin<unknown | null>, readonly ["class", "flax.core/sdk_widgets#type:PopNavigatorRouterDelegateMixin", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "currentConfiguration" | "navigatorKey" | "setInitialRoutePath" | "setRestoredRoutePath" | "setNewRoutePath" | "popRoute" | "build" | "addListener" | "removeListener" | "__flaxBound:package:flutter/src/widgets/router.dart::PopNavigatorRouterDelegateMixin" | "__flaxBound:package:flutter/src/widgets/router.dart::RouterDelegate" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        readonly prototype: PopNavigatorRouterDelegateMixin<_Selected0>;
    } & _FlaxInstanceType<PopNavigatorRouterDelegateMixin<_Selected0>> & _FlaxDartType<PopNavigatorRouterDelegateMixin<_Selected0>> : never : never;
}
export {};
