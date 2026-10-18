import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_GlobalKey';
import '@flax/flutter/widgets/_bindings/sdk_widgets_GlobalKey';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_EditableTextState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_EditableTextState';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface TextSelectionGestureDetectorBuilderDelegate extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/text_selection.dart::TextSelectionGestureDetectorBuilderDelegate": readonly [];
}> {
    readonly __TextSelectionGestureDetectorBuilderDelegate: unique symbol;
    readonly [_flaxDartTypeValue]: TextSelectionGestureDetectorBuilderDelegate;
    readonly editableTextKey: upstream0.GlobalKey<upstream1.EditableTextState>;
    readonly forcePressEnabled: boolean;
    readonly selectionEnabled: boolean;
}
export declare namespace _TextSelectionGestureDetectorBuilderDelegateFactory {
    function implement(args: [], implementation: {
        get editableTextKey(): Readonly<{
            "__flaxBound:package:flutter/src/widgets/framework.dart::GlobalKey": readonly [upstream1.EditableTextState];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }>;
        get forcePressEnabled(): boolean;
        get selectionEnabled(): boolean;
    }): TextSelectionGestureDetectorBuilderDelegate;
}
export declare const TextSelectionGestureDetectorBuilderDelegate: typeof _TextSelectionGestureDetectorBuilderDelegateFactory & _FlaxInstanceType<TextSelectionGestureDetectorBuilderDelegate> & _FlaxDartType<TextSelectionGestureDetectorBuilderDelegate, readonly ["class", "flax.core/sdk_widgets#type:TextSelectionGestureDetectorBuilderDelegate", readonly [], false]>;
