import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/painting/_bindings/flutter_AlignmentGeometry';
import type * as upstream2 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream4 from '@flax/flutter/rendering/_bindings/flutter_StackFit';
import '@flax/flutter/rendering/_bindings/flutter_StackFit';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface IndexedStack extends WidgetDescription, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/indexed_stack.dart::IndexedStack": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessWidget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, 'type'> {
    readonly type: "flax.core/flutter#type:IndexedStack";
}
export declare function _IndexedStackFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    alignment?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/alignment.dart::AlignmentGeometry": readonly [];
    }>> | undefined;
    textDirection?: Bindable<upstream2.TextDirection | null> | undefined;
    clipBehavior?: Bindable<upstream3.Clip> | undefined;
    sizing?: Bindable<upstream4.StackFit> | undefined;
    index?: Bindable<number | null> | undefined;
    children?: Bindable<DartListInput<Widget, Widget>> | undefined;
}): IndexedStack;
export declare const IndexedStack: typeof _IndexedStackFactory & _FlaxInstanceType<IndexedStack> & _FlaxDartType<IndexedStack, readonly ["class", "flax.core/flutter#type:IndexedStack", readonly [], false]>;
