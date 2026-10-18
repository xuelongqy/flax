import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/ui/_bindings/flutter_TextRange';
import '@flax/dart/ui/_bindings/flutter_TextRange';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface StringAttribute extends Readonly<{
    "__flaxBound:dart:ui::StringAttribute": readonly [];
}> {
    readonly __StringAttribute: unique symbol;
    readonly [_flaxDartTypeValue]: StringAttribute;
    readonly range: upstream0.TextRange;
    copy(options: {
        range: Readonly<{
            "__flaxBound:dart:ui::TextRange": readonly [];
        }>;
    }): StringAttribute;
}
export declare const StringAttribute: object & _FlaxInstanceType<StringAttribute> & _FlaxDartType<StringAttribute, readonly ["class", "flax.core/sdk_dart_ui#type:StringAttribute", readonly [], false]>;
