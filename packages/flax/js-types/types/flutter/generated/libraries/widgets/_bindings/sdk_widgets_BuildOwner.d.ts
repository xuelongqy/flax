import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_FocusManager';
import '@flax/flutter/widgets/_bindings/sdk_widgets_FocusManager';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Element';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface BuildOwner extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::BuildOwner": readonly [];
}> {
    readonly __BuildOwner: unique symbol;
    readonly [_flaxDartTypeValue]: BuildOwner;
    get onBuildScheduled(): (() => void) | null;
    get focusManager(): upstream0.FocusManager;
    readonly debugBuilding: boolean;
    readonly globalKeyCount: number;
    scheduleBuildFor(element: Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [];
    }>): void;
    lockState(callback: (() => void)): void;
    buildScope(context: Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [];
    }>, callback?: (() => void) | null): void;
    finalizeTree(): void;
    reassemble(root: Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [];
    }>): void;
    set onBuildScheduled(value: (() => void) | null);
    set focusManager(value: Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusManager": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>);
}
export declare function _BuildOwnerFactory(options?: {
    onBuildScheduled?: (() => void) | null | undefined;
    focusManager?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusManager": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>) | null | undefined;
}): BuildOwner;
export interface _BuildOwnerNative extends BuildOwner {
    readonly [_flaxDartTypeValue]: _BuildOwnerNative;
    scheduleBuildFor(element: Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [];
    }>): void;
    lockState(callback: (() => void)): void;
    buildScope(context: Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [];
    }>, callback?: (() => void) | null): void;
    finalizeTree(): void;
    reassemble(root: Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [];
    }>): void;
    get onBuildScheduled(): (() => void) | null;
    get focusManager(): upstream0.FocusManager;
    get debugBuilding(): boolean;
    get globalKeyCount(): number;
    set onBuildScheduled(value: (() => void) | null);
    set focusManager(value: Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusManager": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>);
}
export declare abstract class _BuildOwnerNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<BuildOwner>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: BuildOwner;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:BuildOwner", readonly [], false];
    constructor(options?: {
        onBuildScheduled?: (() => void) | null | undefined;
        focusManager?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusManager": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>) | null | undefined;
    });
}
export declare namespace _BuildOwnerFactory {
    function implement(args: [options?: {
        onBuildScheduled?: (() => void) | null | undefined;
        focusManager?: (Readonly<{
            "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusManager": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
        }>) | null | undefined;
    }], implementation: {}): BuildOwner;
}
declare const _BuildOwnerBinding: typeof _BuildOwnerFactory & (new (options?: {
    onBuildScheduled?: (() => void) | null | undefined;
    focusManager?: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusManager": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>) | null | undefined;
}) => _BuildOwnerNative);
export declare const BuildOwner: typeof _BuildOwnerBinding & _FlaxInstanceType<BuildOwner> & _FlaxDartType<BuildOwner, readonly ["class", "flax.core/sdk_widgets#type:BuildOwner", readonly [], false]>;
export {};
