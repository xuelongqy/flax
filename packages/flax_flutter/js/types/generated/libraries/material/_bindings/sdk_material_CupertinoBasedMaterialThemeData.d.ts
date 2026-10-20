import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import '@flax/flutter/cupertino/_bindings/sdk_cupertino_CupertinoThemeData';
import type * as upstream1 from '@flax/flutter/material/_bindings/sdk_material_ThemeData';
import '@flax/flutter/material/_bindings/sdk_material_ThemeData';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CupertinoBasedMaterialThemeData extends Readonly<{
    "__flaxBound:package:flutter/src/material/theme_data.dart::CupertinoBasedMaterialThemeData": readonly [];
}> {
    readonly __CupertinoBasedMaterialThemeData: unique symbol;
    readonly [_flaxDartTypeValue]: CupertinoBasedMaterialThemeData;
    readonly materialTheme: upstream1.ThemeData;
}
export declare function _CupertinoBasedMaterialThemeDataFactory(options: {
    themeData: Readonly<{
        "__flaxBound:package:flutter/src/cupertino/theme.dart::CupertinoThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/cupertino/theme.dart::NoDefaultCupertinoThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>;
}): CupertinoBasedMaterialThemeData;
export interface _CupertinoBasedMaterialThemeDataNative extends CupertinoBasedMaterialThemeData {
    readonly [_flaxDartTypeValue]: _CupertinoBasedMaterialThemeDataNative;
    get materialTheme(): upstream1.ThemeData;
}
export declare abstract class _CupertinoBasedMaterialThemeDataNative extends _FlaxProxyBase {
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
export declare namespace _CupertinoBasedMaterialThemeDataFactory {
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
declare const _CupertinoBasedMaterialThemeDataBinding: typeof _CupertinoBasedMaterialThemeDataFactory & (new (options: {
    themeData: Readonly<{
        "__flaxBound:package:flutter/src/cupertino/theme.dart::CupertinoThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/cupertino/theme.dart::NoDefaultCupertinoThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>;
}) => _CupertinoBasedMaterialThemeDataNative);
export declare const CupertinoBasedMaterialThemeData: typeof _CupertinoBasedMaterialThemeDataBinding & _FlaxInstanceType<CupertinoBasedMaterialThemeData> & _FlaxDartType<CupertinoBasedMaterialThemeData, readonly ["class", "flax.core/sdk_material#type:CupertinoBasedMaterialThemeData", readonly [], false]>;
export {};
