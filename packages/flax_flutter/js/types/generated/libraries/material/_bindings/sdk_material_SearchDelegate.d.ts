import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type DartInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/painting/_bindings/flutter_TextStyle';
import '@flax/flutter/painting/_bindings/flutter_TextStyle';
import type * as upstream1 from '@flax/flutter/material/_bindings/sdk_material_InputDecorationTheme';
import type * as upstream2 from '@flax/flutter/services/_bindings/sdk_services_TextInputType';
import '@flax/flutter/services/_bindings/sdk_services_TextInputType';
import type * as upstream3 from '@flax/flutter/services/_bindings/sdk_services_TextInputAction';
import '@flax/flutter/services/_bindings/sdk_services_TextInputAction';
import type * as upstream4 from '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import '@flax/flutter/animation/_bindings/sdk_animation_Animation';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import '@flax/flutter/widgets/_bindings/flutter_PreferredSizeWidget';
import type * as upstream7 from '@flax/flutter/material/_bindings/sdk_material_ThemeData';
import '@flax/flutter/material/_bindings/sdk_material_ThemeData';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SearchDelegate<T extends unknown | null = unknown | null> extends Readonly<{
    "__flaxBound:package:flutter/src/material/search.dart::SearchDelegate": readonly [T];
}> {
    readonly __SearchDelegate: unique symbol;
    readonly [_flaxDartTypeValue]: SearchDelegate<T>;
}
export interface SearchDelegate<T extends unknown | null = unknown | null> {
    readonly [_flaxDartTypeValue]: SearchDelegate<T>;
    buildBottom(context: upstream5.BuildContext): upstream6.PreferredSizeWidget | null;
    buildFlexibleSpace(context: upstream5.BuildContext): Widget | null;
    appBarTheme(context: upstream5.BuildContext): upstream7.ThemeData;
    showResults(context: upstream5.BuildContext): void;
    showSuggestions(context: upstream5.BuildContext): void;
    close(context: upstream5.BuildContext, result: (T | DartInput<T>)): void;
    dispose(): void;
    get automaticallyImplyLeading(): boolean | null;
    get leadingWidth(): number | null;
    get query(): string;
    get searchFieldLabel(): string | null;
    get searchFieldStyle(): upstream0.TextStyle | null;
    get searchFieldDecorationTheme(): upstream1.InputDecorationTheme | null;
    get keyboardType(): upstream2.TextInputType | null;
    get autocorrect(): boolean;
    get enableSuggestions(): boolean;
    get textInputAction(): upstream3.TextInputAction;
    get transitionAnimation(): upstream4.Animation<number>;
    set automaticallyImplyLeading(value: boolean | null);
    set leadingWidth(value: number | null);
    set query(value: string);
}
export declare abstract class SearchDelegate<T extends unknown | null = unknown | null> extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SearchDelegate<unknown | null>>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SearchDelegate<unknown | null>;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_material#type:SearchDelegate", readonly [readonly ["any", null, readonly [], true]], false];
    static $type: _FlaxDartTypeCases<unknown>['$type'];
    static [_flaxDartTypeCases]: _FlaxSignature1;
    constructor(options?: {
        searchFieldLabel?: string | null | undefined;
        searchFieldStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        searchFieldDecorationTheme?: upstream1.InputDecorationTheme | null | undefined;
        keyboardType?: Readonly<{
            "__flaxBound:package:flutter/src/services/text_input.dart::TextInputType": readonly [];
        }> | null | undefined;
        textInputAction?: upstream3.TextInputAction | undefined;
        autocorrect?: boolean | undefined;
        enableSuggestions?: boolean | undefined;
    });
    abstract buildSuggestions(context: upstream5.BuildContext): Widget;
    abstract buildResults(context: upstream5.BuildContext): Widget;
    abstract buildLeading(context: upstream5.BuildContext): Widget | null;
    abstract buildActions(context: upstream5.BuildContext): DartList<Widget> | null;
}
export declare namespace SearchDelegate {
    function implement<T extends unknown | null = unknown | null>(args: [options?: {
        searchFieldLabel?: string | null | undefined;
        searchFieldStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        searchFieldDecorationTheme?: upstream1.InputDecorationTheme | null | undefined;
        keyboardType?: Readonly<{
            "__flaxBound:package:flutter/src/services/text_input.dart::TextInputType": readonly [];
        }> | null | undefined;
        textInputAction?: upstream3.TextInputAction | undefined;
        autocorrect?: boolean | undefined;
        enableSuggestions?: boolean | undefined;
    }], implementation: {
        buildSuggestions: ((context: upstream5.BuildContext) => Widget);
        buildResults: ((context: upstream5.BuildContext) => Widget);
        buildLeading: ((context: upstream5.BuildContext) => Widget | null);
        buildActions: ((context: upstream5.BuildContext) => DartListInput<Widget, Widget> | null);
    }): SearchDelegate<T>;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [unknown | null] ? (abstract new (options?: {
        searchFieldLabel?: string | null | undefined;
        searchFieldStyle?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        searchFieldDecorationTheme?: upstream1.InputDecorationTheme | null | undefined;
        keyboardType?: Readonly<{
            "__flaxBound:package:flutter/src/services/text_input.dart::TextInputType": readonly [];
        }> | null | undefined;
        textInputAction?: upstream3.TextInputAction | undefined;
        autocorrect?: boolean | undefined;
        enableSuggestions?: boolean | undefined;
    }) => SearchDelegate<_Selected0>) & {
        readonly prototype: SearchDelegate<_Selected0>;
        implement(args: readonly [options?: {
            searchFieldLabel?: string | null | undefined;
            searchFieldStyle?: (Readonly<{
                "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [];
            }> & Readonly<{
                "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
            }>) | null | undefined;
            searchFieldDecorationTheme?: upstream1.InputDecorationTheme | null | undefined;
            keyboardType?: Readonly<{
                "__flaxBound:package:flutter/src/services/text_input.dart::TextInputType": readonly [];
            }> | null | undefined;
            textInputAction?: upstream3.TextInputAction | undefined;
            autocorrect?: boolean | undefined;
            enableSuggestions?: boolean | undefined;
        }], implementation: Partial<SearchDelegate<_Selected0>>): SearchDelegate<_Selected0>;
    } & _FlaxInstanceType<SearchDelegate<_Selected0>> & _FlaxDartType<SearchDelegate<_Selected0>> : never : never;
}
export {};
