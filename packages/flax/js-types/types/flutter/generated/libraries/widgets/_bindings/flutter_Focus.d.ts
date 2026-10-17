import { type FlaxInstanceType as _FlaxInstanceType, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import '@flax/flutter/widgets/_bindings/flutter_FocusNode';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Focus extends WidgetDescription {
    readonly type: "flax.core/flutter#type:Focus";
}
export declare function _FocusFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    child: Bindable<Widget>;
    focusNode?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
    }> | null> | undefined;
    parentNode?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
    }> | null> | undefined;
    autofocus?: Bindable<boolean> | undefined;
    onFocusChange?: Bindable<((value: boolean) => void) | null> | undefined;
    canRequestFocus?: Bindable<boolean | null> | undefined;
    skipTraversal?: Bindable<boolean | null> | undefined;
    descendantsAreFocusable?: Bindable<boolean | null> | undefined;
    descendantsAreTraversable?: Bindable<boolean | null> | undefined;
    includeSemantics?: Bindable<boolean> | undefined;
    debugLabel?: Bindable<string | null> | undefined;
}): Focus;
export declare namespace _FocusFactory {
    function withExternalFocusNode(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        child: Bindable<Widget>;
        focusNode: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
        }>>;
        parentNode?: Bindable<Readonly<{
            "__flaxBound:package:flutter/src/widgets/focus_manager.dart::FocusNode": readonly [];
        }> | null> | undefined;
        autofocus?: Bindable<boolean> | undefined;
        onFocusChange?: Bindable<((value: boolean) => void) | null> | undefined;
        includeSemantics?: Bindable<boolean> | undefined;
    }): Focus;
}
export declare namespace _FocusFactory {
    function of(context: upstream2.BuildContext, options?: {
        createDependency?: boolean | undefined;
        scopeOk?: boolean | undefined;
    }): upstream1.FocusNode;
}
export declare namespace _FocusFactory {
    function maybeOf(context: upstream2.BuildContext, options?: {
        createDependency?: boolean | undefined;
        scopeOk?: boolean | undefined;
    }): upstream1.FocusNode | null;
}
export declare namespace _FocusFactory {
    function isAt(context: upstream2.BuildContext): boolean;
}
export declare const Focus: typeof _FocusFactory & _FlaxInstanceType<Focus> & _FlaxDartType<Focus, readonly ["class", "flax.core/flutter#type:Focus", readonly [], false]>;
