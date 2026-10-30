import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type Widget } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import '@flax/dart/ui/_bindings/sdk_dart_ui_Locale';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_LocalizationsDelegate';
import '@flax/flutter/widgets/_bindings/sdk_widgets_LocalizationsDelegate';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/dart/core/_bindings/flutter_Type';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface Localizations extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/localizations.dart::Localizations": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __Localizations: unique symbol;
    readonly [_flaxDartTypeValue]: Localizations;
    readonly locale: upstream2.Locale;
    readonly delegates: DartList<upstream3.LocalizationsDelegate<unknown | null>>;
    readonly child: Widget | null;
    readonly isApplicationLevel: boolean;
    readonly key: upstream1.Key | null;
    createState(): upstream6.State<Localizations>;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    createElement(): upstream8.StatefulElement;
    toStringShort(): string;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream9.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream9.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream11.DiagnosticsTreeStyle | null | undefined;
    }): upstream10.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream10.DiagnosticsNode>;
}
export declare function _LocalizationsFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    locale: Readonly<{
        "__flaxBound:dart:ui::Locale": readonly [];
    }>;
    delegates: DartListInput<upstream3.LocalizationsDelegate<unknown | null>, Readonly<{
        "__flaxBound:package:flutter/src/widgets/localizations.dart::LocalizationsDelegate": readonly [unknown | null];
    }>>;
    child?: Widget | null | undefined;
    isApplicationLevel?: boolean | undefined;
}): Localizations;
export declare namespace _LocalizationsFactory {
    const __flaxJsx: {
        readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _LocalizationsFactory>[0]>), "child"> & ({
            "child"?: (globalThis.NonNullable<globalThis.Parameters<typeof _LocalizationsFactory>[0]>)["child"];
            children?: never;
        } | {
            "child"?: never;
            children?: (globalThis.NonNullable<globalThis.Parameters<typeof _LocalizationsFactory>[0]>)["child"];
        });
        readonly slot: "child";
        readonly many: false;
    };
}
export declare namespace _LocalizationsFactory {
    function override(options: {
        key?: Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }> | null | undefined;
        context: upstream4.BuildContext;
        locale?: Readonly<{
            "__flaxBound:dart:ui::Locale": readonly [];
        }> | null | undefined;
        delegates?: DartListInput<upstream3.LocalizationsDelegate<unknown | null>, Readonly<{
            "__flaxBound:package:flutter/src/widgets/localizations.dart::LocalizationsDelegate": readonly [unknown | null];
        }>> | null | undefined;
        child?: Widget | null | undefined;
    }): Localizations;
    namespace override {
        const __flaxJsx: {
            readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof override>[0]>), "child"> & ({
                "child"?: (globalThis.NonNullable<globalThis.Parameters<typeof override>[0]>)["child"];
                children?: never;
            } | {
                "child"?: never;
                children?: (globalThis.NonNullable<globalThis.Parameters<typeof override>[0]>)["child"];
            });
            readonly slot: "child";
            readonly many: false;
        };
    }
}
export declare namespace _LocalizationsFactory {
    function localeOf(context: upstream4.BuildContext): upstream2.Locale;
}
export declare namespace _LocalizationsFactory {
    function maybeLocaleOf(context: upstream4.BuildContext): upstream2.Locale | null;
}
export declare namespace _LocalizationsFactory {
    function _flaxDefault_of<T extends unknown | null = unknown | null>(context: upstream4.BuildContext, type: Readonly<{
        "__flaxBound:dart:core::Type": readonly [];
    }>): _FlaxDartOutput<T> | null;
    export const of: _FlaxDartCallable<typeof _flaxDefault_of, _FlaxSignature0>;
    export {};
}
export declare const Localizations: typeof _LocalizationsFactory & _FlaxInstanceType<Localizations> & _FlaxDartType<Localizations, readonly ["class", "flax.core/sdk_widgets#type:Localizations", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "locale" | "delegates" | "child" | "isApplicationLevel" | "key" | "createState" | "debugFillProperties" | "createElement" | "toStringShort" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/localizations.dart::Localizations" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (context: upstream4.BuildContext, type: Readonly<{
        "__flaxBound:dart:core::Type": readonly [];
    }>) => _Selected0 | null : never : never;
}
export {};
