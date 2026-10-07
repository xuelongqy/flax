import { type Bindable, type Widget, type WidgetDescription } from '@flax/core/bindings';
import { FlaxProxyBase as _FlaxProxyBase, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/widgets/_bindings/flutter_TextStyle';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_TextAlign';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_TextDirection';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_TextOverflow';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
export type Text = TextDescription | _TextNative;
export type TextDescription = WidgetDescription & {
    readonly type: "flax.core/flutter#type:Text";
};
export interface _TextNative extends _FlaxDartWidget {
    build(context: upstream5.BuildContext): Widget;
    get data(): string | null;
    get key(): upstream0.Key | null;
}
export declare abstract class _TextNative extends _FlaxProxyBase {
    constructor(data: string, options?: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        style?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> | null | undefined;
        textAlign?: upstream2.TextAlign | null | undefined;
        textDirection?: upstream3.TextDirection | null | undefined;
        softWrap?: boolean | null | undefined;
        overflow?: upstream4.TextOverflow | null | undefined;
        maxLines?: number | null | undefined;
    });
}
export declare function _TextFactory(data: Bindable<string>, options?: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    style?: Bindable<Readonly<{
        "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
    }> | null> | undefined;
    textAlign?: Bindable<upstream2.TextAlign | null> | undefined;
    textDirection?: Bindable<upstream3.TextDirection | null> | undefined;
    softWrap?: Bindable<boolean | null> | undefined;
    overflow?: Bindable<upstream4.TextOverflow | null> | undefined;
    maxLines?: Bindable<number | null> | undefined;
}): Text;
export declare const Text: typeof _TextFactory & {
    new (data: string, options?: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        style?: Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> | null | undefined;
        textAlign?: upstream2.TextAlign | null | undefined;
        textDirection?: upstream3.TextDirection | null | undefined;
        softWrap?: boolean | null | undefined;
        overflow?: upstream4.TextOverflow | null | undefined;
        maxLines?: number | null | undefined;
    }): _TextNative;
};
