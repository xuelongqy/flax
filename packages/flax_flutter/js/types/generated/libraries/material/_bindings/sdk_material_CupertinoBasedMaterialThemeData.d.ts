import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import '@flax/flutter/cupertino/_bindings/sdk_cupertino_CupertinoThemeData';
import type * as upstream1 from '@flax/flutter/material/_bindings/sdk_material_ThemeData';
import '@flax/flutter/material/_bindings/sdk_material_ThemeData';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface CupertinoBasedMaterialThemeData extends Readonly<{
    "__flaxBound:package:flutter/src/material/theme_data.dart::CupertinoBasedMaterialThemeData": readonly [];
}> {
    readonly __CupertinoBasedMaterialThemeData: unique symbol;
    readonly [_flaxDartTypeValue]: CupertinoBasedMaterialThemeData;
}
export interface CupertinoBasedMaterialThemeData {
    readonly [_flaxDartTypeValue]: CupertinoBasedMaterialThemeData;
    get materialTheme(): upstream1.ThemeData;
}
export declare abstract class CupertinoBasedMaterialThemeData extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CupertinoBasedMaterialThemeData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: CupertinoBasedMaterialThemeData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:CupertinoBasedMaterialThemeData", readonly [], false];
    constructor(options: {
        themeData: Readonly<{
            "__flaxBound:package:flutter/src/cupertino/theme.dart::CupertinoThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/cupertino/theme.dart::NoDefaultCupertinoThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
    });
}
export declare namespace CupertinoBasedMaterialThemeData {
    function implement(args: [options: {
        themeData: Readonly<{
            "__flaxBound:package:flutter/src/cupertino/theme.dart::CupertinoThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/cupertino/theme.dart::NoDefaultCupertinoThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>;
    }], implementation: {}): CupertinoBasedMaterialThemeData;
}
