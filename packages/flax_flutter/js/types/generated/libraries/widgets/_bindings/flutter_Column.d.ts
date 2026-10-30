import { type FlaxInstanceType as _FlaxInstanceType, type DartListInput, type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/flutter_MainAxisAlignment';
import '@flax/flutter/rendering/_bindings/flutter_MainAxisAlignment';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/flutter_MainAxisSize';
import '@flax/flutter/rendering/_bindings/flutter_MainAxisSize';
import type * as upstream3 from '@flax/flutter/rendering/_bindings/flutter_CrossAxisAlignment';
import '@flax/flutter/rendering/_bindings/flutter_CrossAxisAlignment';
import type * as upstream4 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream5 from '@flax/flutter/painting/_bindings/flutter_VerticalDirection';
import '@flax/flutter/painting/_bindings/flutter_VerticalDirection';
import type * as upstream6 from '@flax/dart/ui/_bindings/flutter_TextBaseline';
import '@flax/dart/ui/_bindings/flutter_TextBaseline';
import { type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Column extends WidgetDescription, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/basic.dart::Column": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/basic.dart::Flex": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::MultiChildRenderObjectWidget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::RenderObjectWidget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, 'type'>, Omit<Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, 'type'> {
    readonly type: "flax.core/flutter#type:Column";
}
export declare function _ColumnFactory(options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    mainAxisAlignment?: Bindable<upstream1.MainAxisAlignment> | undefined;
    mainAxisSize?: Bindable<upstream2.MainAxisSize> | undefined;
    crossAxisAlignment?: Bindable<upstream3.CrossAxisAlignment> | undefined;
    textDirection?: Bindable<upstream4.TextDirection | null> | undefined;
    verticalDirection?: Bindable<upstream5.VerticalDirection> | undefined;
    textBaseline?: Bindable<upstream6.TextBaseline | null> | undefined;
    spacing?: Bindable<number> | undefined;
    children?: Bindable<DartListInput<Widget, Widget>> | undefined;
}): Column;
export declare namespace _ColumnFactory {
    const __flaxJsx: {
        readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _ColumnFactory>[0]>), "children"> & {
            children?: (globalThis.NonNullable<globalThis.Parameters<typeof _ColumnFactory>[0]>)["children"] | Widget;
        };
        readonly slot: "children";
        readonly many: true;
    };
}
export declare const Column: typeof _ColumnFactory & _FlaxInstanceType<Column> & _FlaxDartType<Column, readonly ["class", "flax.core/flutter#type:Column", readonly [], false]>;
