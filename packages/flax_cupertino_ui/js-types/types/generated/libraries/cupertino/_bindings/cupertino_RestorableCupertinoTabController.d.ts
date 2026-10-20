import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableChangeNotifier';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableChangeNotifier';
import type * as upstream1 from '@flax/cupertino-ui/_bindings/cupertino_CupertinoTabController';
import '@flax/cupertino-ui/_bindings/cupertino_CupertinoTabController';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableListenable';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableListenable';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableProperty';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableProperty';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RestorableCupertinoTabController extends Omit<upstream0.RestorableChangeNotifier<upstream1.CupertinoTabController>, _flaxOwnMembers0>, Omit<upstream2.RestorableListenable<upstream1.CupertinoTabController>, _flaxOwnMembers0 | keyof upstream0.RestorableChangeNotifier<upstream1.CupertinoTabController>>, Omit<upstream3.RestorableProperty<upstream1.CupertinoTabController>, _flaxOwnMembers0 | keyof upstream0.RestorableChangeNotifier<upstream1.CupertinoTabController> | keyof upstream2.RestorableListenable<upstream1.CupertinoTabController>>, Omit<upstream4.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.RestorableChangeNotifier<upstream1.CupertinoTabController> | keyof upstream2.RestorableListenable<upstream1.CupertinoTabController> | keyof upstream3.RestorableProperty<upstream1.CupertinoTabController>>, Omit<upstream5.Listenable, _flaxOwnMembers0 | keyof upstream0.RestorableChangeNotifier<upstream1.CupertinoTabController> | keyof upstream2.RestorableListenable<upstream1.CupertinoTabController> | keyof upstream3.RestorableProperty<upstream1.CupertinoTabController> | keyof upstream4.ChangeNotifier>, Readonly<{
    "__flaxBound:package:cupertino_ui/src/tab_scaffold.dart::RestorableCupertinoTabController": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableChangeNotifier": readonly [upstream1.CupertinoTabController];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableListenable": readonly [upstream1.CupertinoTabController];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty": readonly [upstream1.CupertinoTabController];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __RestorableCupertinoTabController: unique symbol;
    readonly [_flaxDartTypeValue]: RestorableCupertinoTabController;
    readonly value: upstream1.CupertinoTabController;
    readonly enabled: boolean;
    readonly state: upstream6.State<upstream7.StatefulWidget>;
    readonly isRegistered: boolean;
    readonly hasListeners: boolean;
    initWithValue(value: Readonly<{
        "__flaxBound:package:cupertino_ui/src/tab_scaffold.dart::CupertinoTabController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): void;
    dispose(): void;
    createDefaultValue(): upstream1.CupertinoTabController;
    fromPrimitives(data: unknown | null): upstream1.CupertinoTabController;
    toPrimitives(): unknown | null;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
}
export declare function _RestorableCupertinoTabControllerFactory(options?: {
    initialIndex?: number | undefined;
}): RestorableCupertinoTabController;
export interface _RestorableCupertinoTabControllerNative extends RestorableCupertinoTabController {
    readonly [_flaxDartTypeValue]: _RestorableCupertinoTabControllerNative;
    initWithValue(value: Readonly<{
        "__flaxBound:package:cupertino_ui/src/tab_scaffold.dart::CupertinoTabController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): void;
    dispose(): void;
    createDefaultValue(): upstream1.CupertinoTabController;
    fromPrimitives(data: unknown | null): upstream1.CupertinoTabController;
    toPrimitives(): unknown | null;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    get value(): upstream1.CupertinoTabController;
    get enabled(): boolean;
    get state(): upstream6.State<upstream7.StatefulWidget>;
    get isRegistered(): boolean;
    get hasListeners(): boolean;
}
export declare abstract class _RestorableCupertinoTabControllerNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RestorableCupertinoTabController>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RestorableCupertinoTabController;
    static [_flaxDartTypeKey]: readonly ["class", "flax.cupertino/cupertino#type:RestorableCupertinoTabController", readonly [], false];
    constructor(options?: {
        initialIndex?: number | undefined;
    });
}
export declare namespace _RestorableCupertinoTabControllerFactory {
    function implement(args: [options?: {
        initialIndex?: number | undefined;
    }], implementation: {}): RestorableCupertinoTabController;
}
declare const _RestorableCupertinoTabControllerBinding: typeof _RestorableCupertinoTabControllerFactory & (new (options?: {
    initialIndex?: number | undefined;
}) => _RestorableCupertinoTabControllerNative);
export declare const RestorableCupertinoTabController: typeof _RestorableCupertinoTabControllerBinding & _FlaxInstanceType<RestorableCupertinoTabController> & _FlaxDartType<RestorableCupertinoTabController, readonly ["class", "flax.cupertino/cupertino#type:RestorableCupertinoTabController", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "enabled" | "state" | "isRegistered" | "hasListeners" | "initWithValue" | "dispose" | "createDefaultValue" | "fromPrimitives" | "toPrimitives" | "addListener" | "removeListener" | "__flaxBound:package:cupertino_ui/src/tab_scaffold.dart::RestorableCupertinoTabController" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableChangeNotifier" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableListenable" | "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
