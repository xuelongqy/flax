import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import '@flax/flutter/foundation/_bindings/sdk_foundation_ChangeNotifier';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Listenable';
import '@flax/flutter/foundation/_bindings/flutter_Listenable';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_Element';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Element';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface InspectorSelection extends Omit<upstream0.ChangeNotifier, _flaxOwnMembers0>, Omit<upstream1.Listenable, _flaxOwnMembers0 | keyof upstream0.ChangeNotifier>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/widget_inspector.dart::InspectorSelection": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
}> {
    readonly __InspectorSelection: unique symbol;
    readonly [_flaxDartTypeValue]: InspectorSelection;
    readonly hasListeners: boolean;
    get candidates(): DartList<upstream2.RenderObject>;
    get index(): number;
    get current(): upstream2.RenderObject | null;
    get currentElement(): upstream3.Element | null;
    readonly active: boolean;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    clear(): void;
    clearCandidates(): void;
    set candidates(value: DartListInput<upstream2.RenderObject, Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>>);
    set index(value: number);
    set current(value: (Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null);
    set currentElement(value: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [];
    }>) | null);
}
export declare function _InspectorSelectionFactory(): InspectorSelection;
export interface _InspectorSelectionNative extends InspectorSelection {
    readonly [_flaxDartTypeValue]: _InspectorSelectionNative;
    addListener(listener: (() => void)): void;
    removeListener(listener: (() => void)): void;
    dispose(): void;
    clear(): void;
    clearCandidates(): void;
    get candidates(): DartList<upstream2.RenderObject>;
    get index(): number;
    get current(): upstream2.RenderObject | null;
    get currentElement(): upstream3.Element | null;
    get active(): boolean;
    get hasListeners(): boolean;
    set candidates(value: DartListInput<upstream2.RenderObject, Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>>);
    set index(value: number);
    set current(value: (Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null);
    set currentElement(value: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [];
    }>) | null);
}
export declare abstract class _InspectorSelectionNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<InspectorSelection>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: InspectorSelection;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:InspectorSelection", readonly [], false];
    constructor();
}
export declare namespace _InspectorSelectionFactory {
    function implement(args: [], implementation: {}): InspectorSelection;
}
declare const _InspectorSelectionBinding: typeof _InspectorSelectionFactory & (new () => _InspectorSelectionNative);
export declare const InspectorSelection: typeof _InspectorSelectionBinding & _FlaxInstanceType<InspectorSelection> & _FlaxDartType<InspectorSelection, readonly ["class", "flax.core/sdk_widgets#type:InspectorSelection", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "hasListeners" | "candidates" | "index" | "current" | "currentElement" | "active" | "addListener" | "removeListener" | "dispose" | "clear" | "clearCandidates" | "__flaxBound:package:flutter/src/widgets/widget_inspector.dart::InspectorSelection" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier" | "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable";
export {};
