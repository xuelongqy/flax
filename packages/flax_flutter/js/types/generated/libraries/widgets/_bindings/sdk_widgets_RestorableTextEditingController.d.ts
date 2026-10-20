import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableChangeNotifier';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableChangeNotifier';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_TextEditingController';
import '@flax/flutter/widgets/_bindings/flutter_TextEditingController';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableListenable';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableListenable';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableProperty';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableProperty';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream6 from '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import '@flax/flutter/services/_bindings/flutter_TextEditingValue';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RestorableTextEditingController extends Omit<upstream0.RestorableChangeNotifier<upstream1.TextEditingController>, _flaxOwnMembers0>, Omit<upstream2.RestorableListenable<upstream1.TextEditingController>, _flaxOwnMembers0 | keyof upstream0.RestorableChangeNotifier<upstream1.TextEditingController>>, Omit<upstream3.RestorableProperty<upstream1.TextEditingController>, _flaxOwnMembers0 | keyof upstream0.RestorableChangeNotifier<upstream1.TextEditingController> | keyof upstream2.RestorableListenable<upstream1.TextEditingController>>, Omit<upstream4.ChangeNotifier, _flaxOwnMembers0 | keyof upstream0.RestorableChangeNotifier<upstream1.TextEditingController> | keyof upstream2.RestorableListenable<upstream1.TextEditingController> | keyof upstream3.RestorableProperty<upstream1.TextEditingController>>, Omit<upstream5.Listenable, _flaxOwnMembers0 | keyof upstream0.RestorableChangeNotifier<upstream1.TextEditingController> | keyof upstream2.RestorableListenable<upstream1.TextEditingController> | keyof upstream3.RestorableProperty<upstream1.TextEditingController> | keyof upstream4.ChangeNotifier>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableTextEditingController": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableChangeNotifier": readonly [upstream1.TextEditingController];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableListenable": readonly [upstream1.TextEditingController];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty": readonly [upstream1.TextEditingController];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __RestorableTextEditingController: unique symbol;
    readonly [_flaxDartTypeValue]: RestorableTextEditingController;
    readonly value: upstream1.TextEditingController;
    readonly enabled: boolean;
    readonly state: upstream7.State<upstream8.StatefulWidget>;
    readonly isRegistered: boolean;
    readonly hasListeners: boolean;
    initWithValue(value: Readonly<{
        "__flaxBound:package:flutter/src/widgets/editable_text.dart::TextEditingController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream6.TextEditingValue];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream6.TextEditingValue];
    }>): void;
    dispose(): void;
    createDefaultValue(): upstream1.TextEditingController;
    fromPrimitives(data: unknown | null): upstream1.TextEditingController;
    toPrimitives(): {};
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
}
export declare function _RestorableTextEditingControllerFactory(options?: {
    text?: string | null | undefined;
}): RestorableTextEditingController;
export declare namespace _RestorableTextEditingControllerFactory {
    function fromValue(value: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
    }>): RestorableTextEditingController;
}
export interface _RestorableTextEditingControllerNative extends RestorableTextEditingController {
    readonly [_flaxDartTypeValue]: _RestorableTextEditingControllerNative;
    readonly [_flaxDartConstructors]?: {
        "fromValue": (value: Readonly<{
            "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
        }>) => void;
    };
    initWithValue(value: Readonly<{
        "__flaxBound:package:flutter/src/widgets/editable_text.dart::TextEditingController": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueNotifier": readonly [upstream6.TextEditingValue];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream6.TextEditingValue];
    }>): void;
    dispose(): void;
    createDefaultValue(): upstream1.TextEditingController;
    fromPrimitives(data: unknown | null): upstream1.TextEditingController;
    toPrimitives(): {};
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    get value(): upstream1.TextEditingController;
    get enabled(): boolean;
    get state(): upstream7.State<upstream8.StatefulWidget>;
    get isRegistered(): boolean;
    get hasListeners(): boolean;
}
export declare abstract class _RestorableTextEditingControllerNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<RestorableTextEditingController>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: RestorableTextEditingController;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:RestorableTextEditingController", readonly [], false];
    constructor(value: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
    }>);
    constructor(call: _FlaxProxySuper<_RestorableTextEditingControllerNative>);
}
export declare namespace _RestorableTextEditingControllerFactory {
    function implement(args: [value: Readonly<{
        "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
    }>], implementation: {}): RestorableTextEditingController;
}
declare const _RestorableTextEditingControllerBinding: typeof _RestorableTextEditingControllerFactory & (new (value: Readonly<{
    "__flaxBound:package:flutter/src/services/text_input.dart::TextEditingValue": readonly [];
}>) => _RestorableTextEditingControllerNative) & (new (call: _FlaxProxySuper<_RestorableTextEditingControllerNative>) => _RestorableTextEditingControllerNative);
export declare const RestorableTextEditingController: typeof _RestorableTextEditingControllerBinding & _FlaxInstanceType<RestorableTextEditingController> & _FlaxDartType<RestorableTextEditingController, readonly ["class", "flax.core/sdk_widgets#type:RestorableTextEditingController", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "value" | "enabled" | "state" | "isRegistered" | "hasListeners" | "initWithValue" | "dispose" | "createDefaultValue" | "fromPrimitives" | "toPrimitives" | "addListener" | "removeListener" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableTextEditingController" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableChangeNotifier" | "__flaxBound:package:flutter/src/widgets/restoration_properties.dart::RestorableListenable" | "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
