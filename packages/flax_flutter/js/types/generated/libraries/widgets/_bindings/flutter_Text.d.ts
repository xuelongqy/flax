import { type Bindable, type WidgetDescription } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_TextStyle';
import '@flax/flutter/widgets/_bindings/flutter_TextStyle';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_TextAlign';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_TextDirection';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_TextOverflow';
export interface Text extends WidgetDescription {
    readonly type: "flax.core/flutter#type:Text";
}
export declare function Text(data: Bindable<string>, options?: {
    key?: upstream0.Key | null | undefined;
    style?: Bindable<upstream1.TextStyle | null> | undefined;
    textAlign?: Bindable<upstream2.TextAlign | null> | undefined;
    textDirection?: Bindable<upstream3.TextDirection | null> | undefined;
    softWrap?: Bindable<boolean | null> | undefined;
    overflow?: Bindable<upstream4.TextOverflow | null> | undefined;
    maxLines?: Bindable<number | null> | undefined;
}): Text;
