import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/widgets/_bindings/flutter_NavigatorState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_OverlayState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SliverReorderableListState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RawGestureDetectorState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollableState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_EditableTextState';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface GlobalKey<T extends upstream0.State<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>> = upstream0.State<upstream1.StatefulWidget>> extends Omit<upstream2.Key, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::GlobalKey": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
}> {
    readonly __GlobalKey: unique symbol;
    readonly [_flaxDartTypeValue]: GlobalKey<T>;
    readonly currentContext: upstream9.BuildContext | null;
    readonly currentWidget: Widget | null;
    readonly currentState: T | null;
}
export declare function _GlobalKeyFactory<T extends upstream0.State<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>> = upstream0.State<upstream1.StatefulWidget>>(options?: {
    debugLabel?: string | null | undefined;
}): GlobalKey<T>;
export declare function _GlobalKeyFactory(options?: {
    debugLabel?: string | null | undefined;
}): GlobalKey<upstream0.State<upstream1.StatefulWidget>>;
export interface _GlobalKeyNative<T extends upstream0.State<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>> = upstream0.State<upstream1.StatefulWidget>> extends GlobalKey<T> {
    readonly [_flaxDartTypeValue]: _GlobalKeyNative<T>;
    readonly [_flaxDartConstructors]?: {
        "constructor": () => void;
    };
    get currentContext(): upstream9.BuildContext | null;
    get currentWidget(): Widget | null;
    get currentState(): T | null;
}
export declare abstract class _GlobalKeyNative<T extends upstream0.State<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>> = upstream0.State<upstream1.StatefulWidget>> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<GlobalKey<upstream0.State<upstream1.StatefulWidget>>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: GlobalKey<upstream0.State<upstream1.StatefulWidget>>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:GlobalKey", readonly [readonly ["class", "flax.core/components#type:State", readonly [readonly ["class", "flax.core/components#type:StatefulWidget", readonly [], false]], false]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor();
    constructor(call: _FlaxProxySuper<_GlobalKeyNative<T>>);
}
export declare namespace _GlobalKeyFactory {
    function implement<T extends upstream0.State<Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>> = upstream0.State<upstream1.StatefulWidget>>(args: [], implementation: {}): GlobalKey<T>;
}
declare const _GlobalKeyBinding: typeof _GlobalKeyFactory & (abstract new <T extends upstream0.State<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>> = upstream0.State<upstream1.StatefulWidget>>() => _GlobalKeyNative<T>) & (abstract new <T extends upstream0.State<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>> = upstream0.State<upstream1.StatefulWidget>>(call: _FlaxProxySuper<_GlobalKeyNative<T>>) => _GlobalKeyNative<T>);
export declare const GlobalKey: typeof _GlobalKeyBinding & _FlaxInstanceType<GlobalKey<upstream0.State<upstream1.StatefulWidget>>> & _FlaxDartType<GlobalKey<upstream0.State<upstream1.StatefulWidget>>, readonly ["class", "flax.core/sdk_widgets#type:GlobalKey", readonly [readonly ["class", "flax.core/components#type:State", readonly [readonly ["class", "flax.core/components#type:StatefulWidget", readonly [], false]], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "currentContext" | "currentWidget" | "currentState" | "__flaxBound:package:flutter/src/widgets/framework.dart::GlobalKey" | "__flaxBound:package:flutter/src/foundation/key.dart::Key";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.State<Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>>] ? (abstract new () => _GlobalKeyNative<_Selected0>) & (abstract new (call: _FlaxProxySuper<_GlobalKeyNative<_Selected0>>) => _GlobalKeyNative<_Selected0>) & {
        (options?: {
            debugLabel?: string | null | undefined;
        }): _GlobalKeyNative<_Selected0>;
        readonly prototype: _GlobalKeyNative<_Selected0>;
        implement(args: readonly [], implementation: Partial<_GlobalKeyNative<_Selected0>>): _GlobalKeyNative<_Selected0>;
    } & _FlaxInstanceType<_GlobalKeyNative<_Selected0>> & _FlaxDartType<_GlobalKeyNative<_Selected0>> : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.State<Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>>] ? (abstract new () => _GlobalKeyNative<_Selected0>) & (abstract new (call: _FlaxProxySuper<_GlobalKeyNative<_Selected0>>) => _GlobalKeyNative<_Selected0>) & {
        (options?: {
            debugLabel?: string | null | undefined;
        }): _GlobalKeyNative<_Selected0>;
        readonly prototype: _GlobalKeyNative<_Selected0>;
        implement(args: readonly [], implementation: Partial<_GlobalKeyNative<_Selected0>>): _GlobalKeyNative<_Selected0>;
    } & _FlaxInstanceType<_GlobalKeyNative<_Selected0>> & _FlaxDartType<_GlobalKeyNative<_Selected0>> : never : never;
}
export {};
