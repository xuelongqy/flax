import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_KeyEventResult';
import '@flax/flutter/widgets/_bindings/sdk_widgets_KeyEventResult';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_KeyEvent';
import '@flax/flutter/services/_bindings/flutter_KeyEvent';
import type * as upstream4 from '@flax/flutter/services/_bindings/sdk_services_RawKeyEvent';
import '@flax/flutter/services/_bindings/sdk_services_RawKeyEvent';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Focus extends WidgetDescription, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/focus_scope.dart::Focus": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, 'type'> {
    readonly type: "flax.core/flutter#type:Focus";
}
export declare function _FocusFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    child: Bindable<Widget>;
    focusNode?: Bindable<(Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
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
    }>) | null> | undefined;
    parentNode?: Bindable<(Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
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
    }>) | null> | undefined;
    autofocus?: Bindable<boolean> | undefined;
    onFocusChange?: Bindable<((value: boolean) => void) | null> | undefined;
    onKeyEvent?: Bindable<((node: upstream1.FocusNode, event: upstream3.KeyEvent) => upstream2.KeyEventResult) | null> | undefined;
    onKey?: Bindable<((node: upstream1.FocusNode, event: upstream4.RawKeyEvent) => upstream2.KeyEventResult) | null> | undefined;
    canRequestFocus?: Bindable<boolean | null> | undefined;
    skipTraversal?: Bindable<boolean | null> | undefined;
    descendantsAreFocusable?: Bindable<boolean | null> | undefined;
    descendantsAreTraversable?: Bindable<boolean | null> | undefined;
    includeSemantics?: Bindable<boolean> | undefined;
    debugLabel?: Bindable<string | null> | undefined;
}): Focus;
export declare namespace _FocusFactory {
    const __flaxJsx: {
        readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _FocusFactory>[0]>), "child"> & ({
            "child": (globalThis.NonNullable<globalThis.Parameters<typeof _FocusFactory>[0]>)["child"];
            children?: never;
        } | {
            "child"?: never;
            children: (globalThis.NonNullable<globalThis.Parameters<typeof _FocusFactory>[0]>)["child"];
        });
        readonly slot: "child";
        readonly many: false;
    };
}
export declare namespace _FocusFactory {
    function withExternalFocusNode(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        child: Bindable<Widget>;
        focusNode: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
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
        }>>;
        parentNode?: Bindable<(Readonly<{
            "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
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
        }>) | null> | undefined;
        autofocus?: Bindable<boolean> | undefined;
        onFocusChange?: Bindable<((value: boolean) => void) | null> | undefined;
        includeSemantics?: Bindable<boolean> | undefined;
    }): Focus;
    namespace withExternalFocusNode {
        const __flaxJsx: {
            readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof withExternalFocusNode>[0]>), "child"> & ({
                "child": (globalThis.NonNullable<globalThis.Parameters<typeof withExternalFocusNode>[0]>)["child"];
                children?: never;
            } | {
                "child"?: never;
                children: (globalThis.NonNullable<globalThis.Parameters<typeof withExternalFocusNode>[0]>)["child"];
            });
            readonly slot: "child";
            readonly many: false;
        };
    }
}
export declare namespace _FocusFactory {
    function of(context: upstream5.BuildContext, options?: {
        createDependency?: boolean | undefined;
        scopeOk?: boolean | undefined;
    }): upstream1.FocusNode;
}
export declare namespace _FocusFactory {
    function maybeOf(context: upstream5.BuildContext, options?: {
        createDependency?: boolean | undefined;
        scopeOk?: boolean | undefined;
    }): upstream1.FocusNode | null;
}
export declare namespace _FocusFactory {
    function isAt(context: upstream5.BuildContext): boolean;
}
export declare const Focus: typeof _FocusFactory & _FlaxInstanceType<Focus> & _FlaxDartType<Focus, readonly ["class", "flax.core/flutter#type:Focus", readonly [], false]>;
