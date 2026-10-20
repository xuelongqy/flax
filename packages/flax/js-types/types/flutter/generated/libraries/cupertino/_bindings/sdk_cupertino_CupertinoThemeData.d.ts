import { type FlaxInstanceType as _FlaxInstanceType } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/cupertino/_bindings/sdk_cupertino_NoDefaultCupertinoThemeData';
import '@flax/flutter/cupertino/_bindings/sdk_cupertino_NoDefaultCupertinoThemeData';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Brightness';
import type * as upstream3 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream4 from '@flax/flutter/cupertino/_bindings/sdk_cupertino_CupertinoTextThemeData';
import '@flax/flutter/cupertino/_bindings/sdk_cupertino_CupertinoTextThemeData';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface CupertinoThemeData extends Omit<upstream0.NoDefaultCupertinoThemeData, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.NoDefaultCupertinoThemeData>, Readonly<{
    "__flaxBound:package:flutter/src/cupertino/theme.dart::CupertinoThemeData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/cupertino/theme.dart::NoDefaultCupertinoThemeData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __CupertinoThemeData: unique symbol;
    readonly [_flaxDartTypeValue]: CupertinoThemeData;
    readonly brightness: upstream2.Brightness | null;
    readonly primaryColor: upstream3.Color;
    readonly primaryContrastingColor: upstream3.Color;
    readonly textTheme: upstream4.CupertinoTextThemeData;
    readonly barBackgroundColor: upstream3.Color;
    readonly scaffoldBackgroundColor: upstream3.Color;
    readonly selectionHandleColor: upstream3.Color;
    readonly applyThemeToAll: boolean;
    noDefault(): upstream0.NoDefaultCupertinoThemeData;
    resolveFrom(context: upstream5.BuildContext): CupertinoThemeData;
    copyWith(options?: {
        applyThemeToAll?: boolean | null | undefined;
        barBackgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        brightness?: upstream2.Brightness | null | undefined;
        primaryColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        primaryContrastingColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        scaffoldBackgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        selectionHandleColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        textTheme?: (Readonly<{
            "__flaxBound:package:flutter/src/cupertino/text_theme.dart::CupertinoTextThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
    }): CupertinoThemeData;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream6.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream8.DiagnosticsTreeStyle | null | undefined;
    }): upstream7.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
}
export declare function _CupertinoThemeDataFactory(options?: {
    brightness?: upstream2.Brightness | null | undefined;
    primaryColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    primaryContrastingColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    textTheme?: (Readonly<{
        "__flaxBound:package:flutter/src/cupertino/text_theme.dart::CupertinoTextThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    barBackgroundColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    scaffoldBackgroundColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    selectionHandleColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    applyThemeToAll?: boolean | null | undefined;
}): CupertinoThemeData;
export declare namespace _CupertinoThemeDataFactory {
    function raw(brightness: upstream2.Brightness | null, primaryColor: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null, primaryContrastingColor: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null, textTheme: (Readonly<{
        "__flaxBound:package:flutter/src/cupertino/text_theme.dart::CupertinoTextThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, barBackgroundColor: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null, scaffoldBackgroundColor: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null, selectionHandleColor: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null, applyThemeToAll: boolean | null): CupertinoThemeData;
}
export interface _CupertinoThemeDataNative extends CupertinoThemeData {
    readonly [_flaxDartTypeValue]: _CupertinoThemeDataNative;
    readonly [_flaxDartConstructors]?: {
        "": (options?: {
            brightness?: upstream2.Brightness | null | undefined;
            primaryColor?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            primaryContrastingColor?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            textTheme?: (Readonly<{
                "__flaxBound:package:flutter/src/cupertino/text_theme.dart::CupertinoTextThemeData": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | null | undefined;
            barBackgroundColor?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            scaffoldBackgroundColor?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            selectionHandleColor?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            applyThemeToAll?: boolean | null | undefined;
        }) => void;
        "raw": (brightness: upstream2.Brightness | null, primaryColor: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null, primaryContrastingColor: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null, textTheme: (Readonly<{
            "__flaxBound:package:flutter/src/cupertino/text_theme.dart::CupertinoTextThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null, barBackgroundColor: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null, scaffoldBackgroundColor: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null, selectionHandleColor: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null, applyThemeToAll: boolean | null) => void;
    };
    noDefault(): upstream0.NoDefaultCupertinoThemeData;
    resolveFrom(context: upstream5.BuildContext): CupertinoThemeData;
    copyWith(options?: {
        brightness?: upstream2.Brightness | null | undefined;
        primaryColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        primaryContrastingColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        textTheme?: (Readonly<{
            "__flaxBound:package:flutter/src/cupertino/text_theme.dart::CupertinoTextThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        barBackgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        scaffoldBackgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        selectionHandleColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        applyThemeToAll?: boolean | null | undefined;
    }): CupertinoThemeData;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream6.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream8.DiagnosticsTreeStyle | null | undefined;
    }): upstream7.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    get primaryColor(): upstream3.Color;
    get primaryContrastingColor(): upstream3.Color;
    get textTheme(): upstream4.CupertinoTextThemeData;
    get barBackgroundColor(): upstream3.Color;
    get scaffoldBackgroundColor(): upstream3.Color;
    get selectionHandleColor(): upstream3.Color;
    get applyThemeToAll(): boolean;
    get brightness(): upstream2.Brightness | null;
}
export declare abstract class _CupertinoThemeDataNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<CupertinoThemeData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: CupertinoThemeData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_cupertino#type:CupertinoThemeData", readonly [], false];
    constructor(options?: {
        brightness?: upstream2.Brightness | null | undefined;
        primaryColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        primaryContrastingColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        textTheme?: (Readonly<{
            "__flaxBound:package:flutter/src/cupertino/text_theme.dart::CupertinoTextThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        barBackgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        scaffoldBackgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        selectionHandleColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        applyThemeToAll?: boolean | null | undefined;
    });
    constructor(call: _FlaxProxySuper<_CupertinoThemeDataNative>);
}
export declare namespace _CupertinoThemeDataFactory {
    function implement(args: [options?: {
        brightness?: upstream2.Brightness | null | undefined;
        primaryColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        primaryContrastingColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        textTheme?: (Readonly<{
            "__flaxBound:package:flutter/src/cupertino/text_theme.dart::CupertinoTextThemeData": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        barBackgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        scaffoldBackgroundColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        selectionHandleColor?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        applyThemeToAll?: boolean | null | undefined;
    }], implementation: {}): CupertinoThemeData;
}
declare const _CupertinoThemeDataBinding: typeof _CupertinoThemeDataFactory & (new (options?: {
    brightness?: upstream2.Brightness | null | undefined;
    primaryColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    primaryContrastingColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    textTheme?: (Readonly<{
        "__flaxBound:package:flutter/src/cupertino/text_theme.dart::CupertinoTextThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null | undefined;
    barBackgroundColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    scaffoldBackgroundColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    selectionHandleColor?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    applyThemeToAll?: boolean | null | undefined;
}) => _CupertinoThemeDataNative) & (new (call: _FlaxProxySuper<_CupertinoThemeDataNative>) => _CupertinoThemeDataNative);
export declare const CupertinoThemeData: typeof _CupertinoThemeDataBinding & _FlaxInstanceType<CupertinoThemeData> & _FlaxDartType<CupertinoThemeData, readonly ["class", "flax.core/sdk_cupertino#type:CupertinoThemeData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "brightness" | "primaryColor" | "primaryContrastingColor" | "textTheme" | "barBackgroundColor" | "scaffoldBackgroundColor" | "selectionHandleColor" | "applyThemeToAll" | "noDefault" | "resolveFrom" | "copyWith" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "__flaxBound:package:flutter/src/cupertino/theme.dart::CupertinoThemeData" | "__flaxBound:package:flutter/src/cupertino/theme.dart::NoDefaultCupertinoThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
