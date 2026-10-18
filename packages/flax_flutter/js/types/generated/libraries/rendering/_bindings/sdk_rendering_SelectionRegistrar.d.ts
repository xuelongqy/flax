import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/rendering/_bindings/sdk_rendering_Selectable';
import '@flax/flutter/rendering/_bindings/sdk_rendering_Selectable';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_SelectionGeometry';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SelectionRegistrar extends Readonly<{
    "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionRegistrar": readonly [];
}> {
    readonly __SelectionRegistrar: unique symbol;
    readonly [_flaxDartTypeValue]: SelectionRegistrar;
    add(selectable: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::Selectable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream1.SelectionGeometry];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): void;
    remove(selectable: Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::Selectable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/rendering/selection.dart::SelectionHandler": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ValueListenable": readonly [upstream1.SelectionGeometry];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): void;
}
export declare namespace _SelectionRegistrarFactory {
    function implement(args: [], implementation: {
        add: ((selectable: upstream0.Selectable) => void);
        remove: ((selectable: upstream0.Selectable) => void);
    }): SelectionRegistrar;
}
export declare const SelectionRegistrar: typeof _SelectionRegistrarFactory & _FlaxInstanceType<SelectionRegistrar> & _FlaxDartType<SelectionRegistrar, readonly ["class", "flax.core/sdk_rendering#type:SelectionRegistrar", readonly [], false]>;
