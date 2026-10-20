import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Color';
import '@flax/dart/ui/_bindings/flutter_Color';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Shadow';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Shadow';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { flaxDartConstructors as _flaxDartConstructors, type FlaxProxySuper as _FlaxProxySuper, FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface IconThemeData extends Omit<upstream0.Diagnosticable, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __IconThemeData: unique symbol;
    readonly [_flaxDartTypeValue]: IconThemeData;
    readonly isConcrete: boolean;
    readonly size: number | null;
    readonly fill: number | null;
    readonly weight: number | null;
    readonly grade: number | null;
    readonly opticalSize: number | null;
    readonly color: upstream1.Color | null;
    readonly opacity: number | null;
    readonly shadows: DartList<upstream2.Shadow> | null;
    readonly applyTextScaling: boolean | null;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream3.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream5.DiagnosticsTreeStyle | null | undefined;
    }): upstream4.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    copyWith(options?: {
        applyTextScaling?: boolean | null | undefined;
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        fill?: number | null | undefined;
        grade?: number | null | undefined;
        opacity?: number | null | undefined;
        opticalSize?: number | null | undefined;
        shadows?: DartListInput<upstream2.Shadow, Readonly<{
            "__flaxBound:dart:ui::Shadow": readonly [];
        }>> | null | undefined;
        size?: number | null | undefined;
        weight?: number | null | undefined;
    }): IconThemeData;
    merge(other: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null): IconThemeData;
    resolve(context: upstream7.BuildContext): IconThemeData;
}
export declare function _IconThemeDataFactory(options?: {
    size?: number | null | undefined;
    fill?: number | null | undefined;
    weight?: number | null | undefined;
    grade?: number | null | undefined;
    opticalSize?: number | null | undefined;
    color?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    opacity?: number | null | undefined;
    shadows?: DartListInput<upstream2.Shadow, Readonly<{
        "__flaxBound:dart:ui::Shadow": readonly [];
    }>> | null | undefined;
    applyTextScaling?: boolean | null | undefined;
}): IconThemeData;
export declare namespace _IconThemeDataFactory {
    function fallback(): IconThemeData;
}
export interface _IconThemeDataNative extends IconThemeData {
    readonly [_flaxDartTypeValue]: _IconThemeDataNative;
    readonly [_flaxDartConstructors]?: {
        "": (options?: {
            size?: number | null | undefined;
            fill?: number | null | undefined;
            weight?: number | null | undefined;
            grade?: number | null | undefined;
            opticalSize?: number | null | undefined;
            color?: Readonly<{
                "__flaxBound:dart:ui::Color": readonly [];
            }> | null | undefined;
            opacity?: number | null | undefined;
            shadows?: DartListInput<upstream2.Shadow, Readonly<{
                "__flaxBound:dart:ui::Shadow": readonly [];
            }>> | null | undefined;
            applyTextScaling?: boolean | null | undefined;
        }) => void;
        "fallback": () => void;
    };
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream3.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream5.DiagnosticsTreeStyle | null | undefined;
    }): upstream4.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    copyWith(options?: {
        size?: number | null | undefined;
        fill?: number | null | undefined;
        weight?: number | null | undefined;
        grade?: number | null | undefined;
        opticalSize?: number | null | undefined;
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        opacity?: number | null | undefined;
        shadows?: DartListInput<upstream2.Shadow, Readonly<{
            "__flaxBound:dart:ui::Shadow": readonly [];
        }>> | null | undefined;
        applyTextScaling?: boolean | null | undefined;
    }): IconThemeData;
    merge(other: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null): IconThemeData;
    resolve(context: upstream7.BuildContext): IconThemeData;
    get isConcrete(): boolean;
    get size(): number | null;
    get fill(): number | null;
    get weight(): number | null;
    get grade(): number | null;
    get opticalSize(): number | null;
    get color(): upstream1.Color | null;
    get opacity(): number | null;
    get shadows(): DartList<upstream2.Shadow> | null;
    get applyTextScaling(): boolean | null;
}
export declare abstract class _IconThemeDataNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<IconThemeData>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: IconThemeData;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:IconThemeData", readonly [], false];
    constructor(options?: {
        size?: number | null | undefined;
        fill?: number | null | undefined;
        weight?: number | null | undefined;
        grade?: number | null | undefined;
        opticalSize?: number | null | undefined;
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        opacity?: number | null | undefined;
        shadows?: DartListInput<upstream2.Shadow, Readonly<{
            "__flaxBound:dart:ui::Shadow": readonly [];
        }>> | null | undefined;
        applyTextScaling?: boolean | null | undefined;
    });
    constructor(call: _FlaxProxySuper<_IconThemeDataNative>);
}
export declare namespace _IconThemeDataFactory {
    function implement(args: [options?: {
        size?: number | null | undefined;
        fill?: number | null | undefined;
        weight?: number | null | undefined;
        grade?: number | null | undefined;
        opticalSize?: number | null | undefined;
        color?: Readonly<{
            "__flaxBound:dart:ui::Color": readonly [];
        }> | null | undefined;
        opacity?: number | null | undefined;
        shadows?: DartListInput<upstream2.Shadow, Readonly<{
            "__flaxBound:dart:ui::Shadow": readonly [];
        }>> | null | undefined;
        applyTextScaling?: boolean | null | undefined;
    }], implementation: {}): IconThemeData;
}
declare const _IconThemeDataBinding: typeof _IconThemeDataFactory & (new (options?: {
    size?: number | null | undefined;
    fill?: number | null | undefined;
    weight?: number | null | undefined;
    grade?: number | null | undefined;
    opticalSize?: number | null | undefined;
    color?: Readonly<{
        "__flaxBound:dart:ui::Color": readonly [];
    }> | null | undefined;
    opacity?: number | null | undefined;
    shadows?: DartListInput<upstream2.Shadow, Readonly<{
        "__flaxBound:dart:ui::Shadow": readonly [];
    }>> | null | undefined;
    applyTextScaling?: boolean | null | undefined;
}) => _IconThemeDataNative) & (new (call: _FlaxProxySuper<_IconThemeDataNative>) => _IconThemeDataNative);
export declare namespace _IconThemeDataFactory {
    function lerp(a: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, b: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>) | null, t: number): IconThemeData;
}
export declare const IconThemeData: typeof _IconThemeDataBinding & _FlaxInstanceType<IconThemeData> & _FlaxDartType<IconThemeData, readonly ["class", "flax.core/sdk_widgets#type:IconThemeData", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "isConcrete" | "size" | "fill" | "weight" | "grade" | "opticalSize" | "color" | "opacity" | "shadows" | "applyTextScaling" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "copyWith" | "merge" | "resolve" | "__flaxBound:package:flutter/src/widgets/icon_theme_data.dart::IconThemeData" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
