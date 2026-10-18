import { type FlaxInstanceType as _FlaxInstanceType, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream1 from '@flax/flutter/material/_bindings/sdk_material_PopupMenuButton';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PopupMenuButtonState<T extends unknown | null = unknown | null> extends Omit<upstream0.State<upstream1.PopupMenuButton<T>>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.State<upstream1.PopupMenuButton<T>>>, Readonly<{
    "__flaxBound:package:flutter/src/material/popup_menu.dart::PopupMenuButtonState": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [upstream1.PopupMenuButton<T>];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __PopupMenuButtonState: unique symbol;
    readonly [_flaxDartTypeValue]: PopupMenuButtonState<T>;
    readonly widget: upstream1.PopupMenuButton<T>;
    readonly context: upstream3.BuildContext;
    readonly mounted: boolean;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream4.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream6.DiagnosticsTreeStyle | null | undefined;
    }): upstream5.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    didChangeDependencies(): void;
    showButtonMenu(): void;
    build(context: upstream3.BuildContext): Widget;
    initState(): void;
    didUpdateWidget(oldWidget: upstream1.PopupMenuButton<T>): void;
    reassemble(): void;
    setState(fn: (() => void)): void;
    deactivate(): void;
    activate(): void;
    dispose(): void;
}
export declare function _PopupMenuButtonStateFactory<T extends unknown | null = unknown | null>(): PopupMenuButtonState<T>;
export declare function _PopupMenuButtonStateFactory(): PopupMenuButtonState<unknown | null>;
export declare const PopupMenuButtonState: typeof _PopupMenuButtonStateFactory & _FlaxInstanceType<PopupMenuButtonState<unknown | null>> & _FlaxDartType<PopupMenuButtonState<unknown | null>, readonly ["class", "flax.core/sdk_material#type:PopupMenuButtonState", readonly [readonly ["any", null, readonly [], true]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "widget" | "context" | "mounted" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "didChangeDependencies" | "showButtonMenu" | "build" | "initState" | "didUpdateWidget" | "reassemble" | "setState" | "deactivate" | "activate" | "dispose" | "__flaxBound:package:flutter/src/material/popup_menu.dart::PopupMenuButtonState" | "__flaxBound:package:flutter/src/widgets/framework.dart::State" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? {
        (): PopupMenuButtonState<_Selected0>;
        readonly prototype: PopupMenuButtonState<_Selected0>;
    } & _FlaxInstanceType<PopupMenuButtonState<_Selected0>> & _FlaxDartType<PopupMenuButtonState<_Selected0>> : never : never;
}
export {};
