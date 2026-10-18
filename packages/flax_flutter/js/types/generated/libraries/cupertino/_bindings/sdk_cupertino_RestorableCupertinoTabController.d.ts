import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableChangeNotifier';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableChangeNotifier';
import type * as upstream1 from '@flax/flutter/cupertino/_bindings/sdk_cupertino_CupertinoTabController';
import '@flax/flutter/cupertino/_bindings/sdk_cupertino_CupertinoTabController';
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
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface RestorableCupertinoTabController extends Omit<upstream0.RestorableChangeNotifier<upstream1.CupertinoTabController>, _flaxOwnMembers0>, Omit<upstream2.RestorableListenable<upstream1.CupertinoTabController>, _flaxOwnMembers0 | keyof upstream0.RestorableChangeNotifier<upstream1.CupertinoTabController>>, Omit<upstream3.RestorableProperty<upstream1.CupertinoTabController>, _flaxOwnMembers0 | keyof upstream0.RestorableChangeNotifier<upstream1.CupertinoTabController> | keyof upstream2.RestorableListenable<upstream1.CupertinoTabController>>, Omit<upstream4.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.RestorableChangeNotifier<upstream1.CupertinoTabController> | keyof upstream2.RestorableListenable<upstream1.CupertinoTabController> | keyof upstream3.RestorableProperty<upstream1.CupertinoTabController>>, Omit<upstream5.Listenable, _flaxOwnMembers0 | keyof upstream0.RestorableChangeNotifier<upstream1.CupertinoTabController> | keyof upstream2.RestorableListenable<upstream1.CupertinoTabController> | keyof upstream3.RestorableProperty<upstream1.CupertinoTabController> | keyof upstream4.ChangeNotifier>, Readonly<{
    "__flaxBound:package:flutter/src/cupertino/tab_scaffold.dart::RestorableCupertinoTabController": readonly [];
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
}
export interface RestorableCupertinoTabController {
    readonly [_flaxDartTypeValue]: RestorableCupertinoTabController;
    initWithValue(value: Readonly<{
        "__flaxBound:package:flutter/src/cupertino/tab_scaffold.dart::CupertinoTabController": readonly [];
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
export declare abstract class RestorableCupertinoTabController extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RestorableCupertinoTabController>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RestorableCupertinoTabController;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_cupertino#type:RestorableCupertinoTabController", readonly [], false];
    constructor(options?: {
        initialIndex?: number | undefined;
    });
}
export declare namespace RestorableCupertinoTabController {
    function implement(args: [options?: {
        initialIndex?: number | undefined;
    }], implementation: {}): RestorableCupertinoTabController;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "enabled" | "state" | "isRegistered" | "hasListeners" | "initWithValue" | "dispose" | "createDefaultValue" | "fromPrimitives" | "toPrimitives" | "addListener" | "removeListener" | "__flaxBound:package:flutter/src/cupertino/tab_scaffold.dart::RestorableCupertinoTabController" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableChangeNotifier" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableListenable" | "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
