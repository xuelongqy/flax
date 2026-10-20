import type * as upstream0 from '@flax/material-ui/_bindings/material_Thumb';
import '@flax/material-ui/_bindings/material_Thumb';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_TextDirection';
import '@flax/dart/ui/_bindings/flutter_TextDirection';
import type * as upstream2 from '@flax/material-ui/_bindings/material_RangeValues';
import '@flax/material-ui/_bindings/material_RangeValues';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
export type RangeThumbSelector = ((textDirection: upstream1.TextDirection, values: Readonly<{
    "__flaxBound:package:material_ui/src/range_slider_parts.dart::RangeValues": readonly [];
}>, tapValue: number, thumbSize: Readonly<{
    "__flaxBound:dart:ui::Size": readonly [];
}> & Readonly<{
    "__flaxBound:dart:ui::OffsetBase": readonly [];
}>, trackSize: Readonly<{
    "__flaxBound:dart:ui::Size": readonly [];
}> & Readonly<{
    "__flaxBound:dart:ui::OffsetBase": readonly [];
}>, dx: number) => upstream0.Thumb | null);
export type RangeThumbSelectorInput = ((textDirection: upstream1.TextDirection, values: upstream2.RangeValues, tapValue: number, thumbSize: upstream3.Size, trackSize: upstream3.Size, dx: number) => upstream0.Thumb | null);
