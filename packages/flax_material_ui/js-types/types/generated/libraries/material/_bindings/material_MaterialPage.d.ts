import { type FlaxInstanceType as _FlaxInstanceType, type DartInput, type Widget } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_Page';
import '@flax/flutter/widgets/_bindings/flutter_Page';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import '@flax/flutter/widgets/_bindings/flutter_RouteSettings';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_Route';
import '@flax/flutter/widgets/_bindings/flutter_Route';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface MaterialPage<T extends unknown | null = unknown | null> extends Omit<upstream0.Page<T>, _flaxOwnMembers0>, Omit<upstream1.RouteSettings, _flaxOwnMembers0 | keyof upstream0.Page<T>>, Readonly<{
    "__flaxBound:package:material_ui/src/page.dart::MaterialPage": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/navigator.dart::Page": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
}> {
    readonly __MaterialPage: unique symbol;
    readonly [_flaxDartTypeValue]: MaterialPage<T>;
    readonly name: string | null;
    readonly arguments: unknown | null;
    readonly key: upstream2.LocalKey | null;
    readonly restorationId: string | null;
    readonly onPopInvoked: ((didPop: boolean, result: (T | DartInput<T>) | null) => void);
    readonly canPop: boolean;
    readonly child: Widget;
    readonly maintainState: boolean;
    readonly fullscreenDialog: boolean;
    readonly allowSnapshotting: boolean;
    readonly includeRouteSemantics: boolean;
    toString(): string;
    canUpdate(other: Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::Page": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings": readonly [];
    }>): boolean;
    createRoute(context: upstream4.BuildContext): upstream3.Route<T>;
}
export declare function _MaterialPageFactory<T extends unknown | null = unknown | null>(options: {
    child: Widget;
    maintainState?: boolean | undefined;
    fullscreenDialog?: boolean | undefined;
    allowSnapshotting?: boolean | undefined;
    includeRouteSemantics?: boolean | undefined;
    key?: (Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }>) | null | undefined;
    canPop?: boolean | undefined;
    onPopInvoked?: ((didPop: boolean, result: _FlaxDartOutput<T> | null) => void) | undefined;
    name?: string | null | undefined;
    arguments?: unknown | null | undefined;
    restorationId?: string | null | undefined;
}): MaterialPage<T>;
export declare function _MaterialPageFactory(options: {
    child: Widget;
    maintainState?: boolean | undefined;
    fullscreenDialog?: boolean | undefined;
    allowSnapshotting?: boolean | undefined;
    includeRouteSemantics?: boolean | undefined;
    key?: (Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }>) | null | undefined;
    canPop?: boolean | undefined;
    onPopInvoked?: ((didPop: boolean, result: unknown | null) => void) | undefined;
    name?: string | null | undefined;
    arguments?: unknown | null | undefined;
    restorationId?: string | null | undefined;
}): MaterialPage<unknown | null>;
export declare const MaterialPage: typeof _MaterialPageFactory & _FlaxInstanceType<MaterialPage<unknown | null>> & _FlaxDartType<MaterialPage<unknown | null>, readonly ["class", "flax.material/material#type:MaterialPage", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "name" | "arguments" | "key" | "restorationId" | "onPopInvoked" | "canPop" | "child" | "maintainState" | "fullscreenDialog" | "allowSnapshotting" | "includeRouteSemantics" | "toString" | "canUpdate" | "createRoute" | "__flaxBound:package:material_ui/src/page.dart::MaterialPage" | "__flaxBound:package:flutter/src/widgets/navigator.dart::Page" | "__flaxBound:package:flutter/src/widgets/navigator.dart::RouteSettings";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        (options: {
            child: Widget;
            maintainState?: boolean | undefined;
            fullscreenDialog?: boolean | undefined;
            allowSnapshotting?: boolean | undefined;
            includeRouteSemantics?: boolean | undefined;
            key?: (Readonly<{
                "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
            }>) | null | undefined;
            canPop?: boolean | undefined;
            onPopInvoked?: ((didPop: boolean, result: _Selected0 | null) => void) | undefined;
            name?: string | null | undefined;
            arguments?: unknown | null | undefined;
            restorationId?: string | null | undefined;
        }): MaterialPage<_Selected0>;
        readonly prototype: MaterialPage<_Selected0>;
    } & _FlaxInstanceType<MaterialPage<_Selected0>> & _FlaxDartType<MaterialPage<_Selected0>> : never : never;
}
export {};
