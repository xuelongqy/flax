import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import '@flax/flutter/foundation/_bindings/flutter_LocalKey';
import type * as upstream1 from '@flax/flutter/painting/_bindings/flutter_Decoration';
import '@flax/flutter/painting/_bindings/flutter_Decoration';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue } from '@flax/core/bindings';
export interface TableRow extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/table.dart::TableRow": readonly [];
}> {
    readonly __TableRow: unique symbol;
    readonly [_flaxDartTypeValue]: TableRow;
}
export interface TableRow {
    readonly [_flaxDartTypeValue]: TableRow;
    toString(): string;
    get key(): upstream0.LocalKey | null;
    get decoration(): upstream1.Decoration | null;
    get children(): DartList<Widget>;
}
export declare abstract class TableRow extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<TableRow>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: TableRow;
    static [_flaxDartTypeKey]: readonly ["class", "flax.core/sdk_widgets#type:TableRow", readonly [], false];
    constructor(options?: {
        key?: (Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }>) | null | undefined;
        decoration?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        children?: DartListInput<Widget, Widget> | undefined;
    });
}
export declare namespace TableRow {
    function implement(args: [options?: {
        key?: (Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::LocalKey": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
        }>) | null | undefined;
        decoration?: (Readonly<{
            "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }>) | null | undefined;
        children?: DartListInput<Widget, Widget> | undefined;
    }], implementation: {}): TableRow;
}
