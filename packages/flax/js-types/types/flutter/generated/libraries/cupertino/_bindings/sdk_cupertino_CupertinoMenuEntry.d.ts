import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CupertinoMenuEntry extends Readonly<{
    "__flaxBound:package:flutter/src/cupertino/menu_anchor.dart::CupertinoMenuEntry": readonly [];
}> {
    readonly __CupertinoMenuEntry: unique symbol;
    readonly [_flaxDartTypeValue]: CupertinoMenuEntry;
    readonly isDivider: boolean;
    hasLeading(context: upstream0.BuildContext): boolean;
}
export declare namespace _CupertinoMenuEntryFactory {
    function implement(args: [], implementation: {
        hasLeading: ((context: upstream0.BuildContext) => boolean);
        get isDivider(): boolean;
    }): CupertinoMenuEntry;
}
export declare const CupertinoMenuEntry: typeof _CupertinoMenuEntryFactory & _FlaxInstanceType<CupertinoMenuEntry> & _FlaxDartType<CupertinoMenuEntry, readonly ["class", "flax.core/sdk_cupertino#type:CupertinoMenuEntry", readonly [], false]>;
