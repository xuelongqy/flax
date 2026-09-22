import type * as upstream0 from '@flax/flutter/services/_bindings/flutter_Color';
import '@flax/flutter/services/_bindings/flutter_Color';
export interface CupertinoThemeData extends Readonly<{
    "__flaxBound:package:cupertino_ui/src/theme.dart::CupertinoThemeData": readonly [];
}>, Readonly<{
    "__flaxBound:package:cupertino_ui/src/theme.dart::NoDefaultCupertinoThemeData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __CupertinoThemeData: unique symbol;
    readonly primaryColor: upstream0.Color;
    readonly scaffoldBackgroundColor: upstream0.Color;
}
export declare function CupertinoThemeData(options?: {
    primaryColor?: upstream0.Color | null | undefined;
    scaffoldBackgroundColor?: upstream0.Color | null | undefined;
}): CupertinoThemeData;
