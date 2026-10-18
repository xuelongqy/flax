import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_DismissAction';
import '@flax/flutter/widgets/_bindings/sdk_widgets_DismissAction';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_Action';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Action';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_DismissIntent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_DismissIntent';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_MenuController';
import '@flax/flutter/widgets/_bindings/sdk_widgets_MenuController';
import type * as upstream5 from '@flax/dart/core/_bindings/flutter_Type';
import '@flax/dart/core/_bindings/flutter_Type';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_KeyEventResult';
import '@flax/flutter/widgets/_bindings/sdk_widgets_KeyEventResult';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Intent';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface DismissMenuAction extends Omit<upstream0.DismissAction, _flaxOwnMembers0>, Omit<upstream1.Action<upstream2.DismissIntent>, _flaxOwnMembers0 | keyof upstream0.DismissAction>, Omit<upstream3.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.DismissAction | keyof upstream1.Action<upstream2.DismissIntent>>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/raw_menu_anchor.dart::DismissMenuAction": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/actions.dart::DismissAction": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/actions.dart::Action": readonly [upstream2.DismissIntent];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __DismissMenuAction: unique symbol;
    readonly [_flaxDartTypeValue]: DismissMenuAction;
}
export interface DismissMenuAction {
    readonly [_flaxDartTypeValue]: DismissMenuAction;
    isEnabled(intent: Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::DismissIntent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): boolean;
    consumesKey(intent: Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::DismissIntent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): boolean;
    toKeyEventResult(intent: Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::DismissIntent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, invokeResult: unknown | null): upstream6.KeyEventResult;
    invoke(intent: Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::DismissIntent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/actions.dart::Intent": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    addActionListener(listener: ((action: upstream1.Action<upstream7.Intent>) => void)): void;
    removeActionListener(listener: ((action: upstream1.Action<upstream7.Intent>) => void)): void;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream9.DiagnosticsTreeStyle | null | undefined;
    }): upstream8.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toString(options?: {
        minLevel?: upstream11.DiagnosticLevel | undefined;
    }): string;
    get controller(): upstream4.MenuController;
    get callingAction(): upstream1.Action<upstream2.DismissIntent> | null;
    get intentType(): upstream5.Type;
    get isActionEnabled(): boolean;
}
export declare abstract class DismissMenuAction extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<DismissMenuAction>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: DismissMenuAction;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:DismissMenuAction", readonly [], false];
    constructor(options: {
        controller: Readonly<{
            "__flaxBound:package:flutter/src/widgets/raw_menu_anchor.dart::MenuController": readonly [];
        }>;
    });
}
export declare namespace DismissMenuAction {
    function implement(args: [options: {
        controller: Readonly<{
            "__flaxBound:package:flutter/src/widgets/raw_menu_anchor.dart::MenuController": readonly [];
        }>;
    }], implementation: {}): DismissMenuAction;
}
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "callingAction" | "intentType" | "isActionEnabled" | "controller" | "isEnabled" | "consumesKey" | "toKeyEventResult" | "invoke" | "addActionListener" | "removeActionListener" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/widgets/raw_menu_anchor.dart::DismissMenuAction" | "__flaxBound:package:flutter/src/widgets/actions.dart::DismissAction" | "__flaxBound:package:flutter/src/widgets/actions.dart::Action" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
