import { type FlaxInstanceType as _FlaxInstanceType, type DartInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/flutter/services/_bindings/sdk_services_RestorationBucket';
import '@flax/flutter/services/_bindings/sdk_services_RestorationBucket';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream6 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RestorableProperty';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface RestorationMixin<S extends Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> = upstream0.StatefulWidget> extends Omit<upstream1.State<S>, _flaxOwnMembers0>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream1.State<S>>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorationMixin": readonly [S];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::State": readonly [S];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __RestorationMixin: unique symbol;
    readonly [_flaxDartTypeValue]: RestorationMixin<S>;
    readonly restorationId: string | null;
    readonly bucket: upstream3.RestorationBucket | null;
    readonly restorePending: boolean;
    readonly widget: S;
    readonly context: upstream4.BuildContext;
    readonly mounted: boolean;
    toStringShort(): string;
    toString(options?: {
        minLevel?: upstream5.DiagnosticLevel | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream7.DiagnosticsTreeStyle | null | undefined;
    }): upstream6.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    restoreState(oldBucket: Readonly<{
        "__flaxBound:package:flutter/src/services/restoration.dart::RestorationBucket": readonly [];
    }> | null, initialRestore: boolean): void;
    didToggleBucket(oldBucket: Readonly<{
        "__flaxBound:package:flutter/src/services/restoration.dart::RestorationBucket": readonly [];
    }> | null): void;
    registerForRestoration(property: Readonly<{
        "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>, restorationId: string): void;
    unregisterFromRestoration(property: Readonly<{
        "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorableProperty": readonly [unknown | null];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [];
    }>): void;
    didUpdateRestorationId(): void;
    didUpdateWidget(oldWidget: (S | DartInput<S>)): void;
    didChangeDependencies(): void;
    dispose(): void;
    initState(): void;
    reassemble(): void;
    setState(fn: (() => void)): void;
    deactivate(): void;
    activate(): void;
    build(context: upstream4.BuildContext): Widget;
}
export declare const RestorationMixin: object & _FlaxInstanceType<RestorationMixin<upstream0.StatefulWidget>> & _FlaxDartType<RestorationMixin<upstream0.StatefulWidget>, readonly ["class", "flax.core/sdk_widgets#type:RestorationMixin", readonly [readonly ["class", "flax.core/components#type:StatefulWidget", readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "restorationId" | "bucket" | "restorePending" | "widget" | "context" | "mounted" | "toStringShort" | "toString" | "toDiagnosticsNode" | "debugFillProperties" | "restoreState" | "didToggleBucket" | "registerForRestoration" | "unregisterFromRestoration" | "didUpdateRestorationId" | "didUpdateWidget" | "didChangeDependencies" | "dispose" | "initState" | "reassemble" | "setState" | "deactivate" | "activate" | "build" | "__flaxBound:package:flutter/src/widgets/restoration.dart::RestorationMixin" | "__flaxBound:package:flutter/src/widgets/framework.dart::State" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>] ? {
        readonly prototype: RestorationMixin<_Selected0>;
    } & _FlaxInstanceType<RestorationMixin<_Selected0>> & _FlaxDartType<RestorationMixin<_Selected0>> : never : never;
}
export {};
