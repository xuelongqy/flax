import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type DartInput, type Widget } from '@flax/core/bindings';
import type { DartOutput as _FlaxDartOutput } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_DragTargetDetails';
import '@flax/flutter/widgets/_bindings/sdk_widgets_DragTargetDetails';
import type * as upstream4 from '@flax/flutter/rendering/_bindings/flutter_HitTestBehavior';
import '@flax/flutter/rendering/_bindings/flutter_HitTestBehavior';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface DragTarget<T extends {} = {}> extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/drag_target.dart::DragTarget": readonly [T];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __DragTarget: unique symbol;
    readonly [_flaxDartTypeValue]: DragTarget<T>;
    readonly builder: ((context: upstream2.BuildContext, candidateData: DartListInput<T | null, (T | DartInput<T>) | null>, rejectedData: DartListInput<unknown | null, unknown | null>) => Widget);
    readonly onWillAccept: ((data: (T | DartInput<T>) | null) => boolean) | null;
    readonly onWillAcceptWithDetails: ((details: Readonly<{
        "__flaxBound:package:flutter/src/widgets/drag_target.dart::DragTargetDetails": readonly [T];
    }>) => boolean) | null;
    readonly onAccept: ((data: (T | DartInput<T>)) => void) | null;
    readonly onAcceptWithDetails: ((details: Readonly<{
        "__flaxBound:package:flutter/src/widgets/drag_target.dart::DragTargetDetails": readonly [T];
    }>) => void) | null;
    readonly onLeave: ((data: (T | DartInput<T>) | null) => void) | null;
    readonly onMove: ((details: Readonly<{
        "__flaxBound:package:flutter/src/widgets/drag_target.dart::DragTargetDetails": readonly [T];
    }>) => void) | null;
    readonly hitTestBehavior: upstream4.HitTestBehavior;
    readonly key: upstream1.Key | null;
    createState(): upstream5.State<DragTarget<T>>;
    createElement(): upstream6.StatefulElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream8.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream8.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream10.DiagnosticsTreeStyle | null | undefined;
    }): upstream9.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream9.DiagnosticsNode>;
}
export declare function _DragTargetFactory<T extends {} = {}>(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    builder: ((context: upstream2.BuildContext, candidateData: DartList<_FlaxDartOutput<T> | null>, rejectedData: DartList<unknown | null>) => Widget);
    onWillAccept?: ((data: _FlaxDartOutput<T> | null) => boolean) | null | undefined;
    onWillAcceptWithDetails?: ((details: upstream3.DragTargetDetails<_FlaxDartOutput<T>>) => boolean) | null | undefined;
    onAccept?: ((data: _FlaxDartOutput<T>) => void) | null | undefined;
    onAcceptWithDetails?: ((details: upstream3.DragTargetDetails<_FlaxDartOutput<T>>) => void) | null | undefined;
    onLeave?: ((data: _FlaxDartOutput<T> | null) => void) | null | undefined;
    onMove?: ((details: upstream3.DragTargetDetails<_FlaxDartOutput<T>>) => void) | null | undefined;
    hitTestBehavior?: upstream4.HitTestBehavior | undefined;
}): DragTarget<T>;
export declare function _DragTargetFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    builder: ((context: upstream2.BuildContext, candidateData: DartList<unknown | null>, rejectedData: DartList<unknown | null>) => Widget);
    onWillAccept?: ((data: unknown | null) => boolean) | null | undefined;
    onWillAcceptWithDetails?: ((details: upstream3.DragTargetDetails<{}>) => boolean) | null | undefined;
    onAccept?: ((data: {}) => void) | null | undefined;
    onAcceptWithDetails?: ((details: upstream3.DragTargetDetails<{}>) => void) | null | undefined;
    onLeave?: ((data: unknown | null) => void) | null | undefined;
    onMove?: ((details: upstream3.DragTargetDetails<{}>) => void) | null | undefined;
    hitTestBehavior?: upstream4.HitTestBehavior | undefined;
}): DragTarget<{}>;
export declare const DragTarget: typeof _DragTargetFactory & _FlaxInstanceType<DragTarget<{}>> & _FlaxDartType<DragTarget<{}>, readonly ["class", "flax.core/sdk_widgets#type:DragTarget", readonly [readonly ["any", null, readonly [], false]], false]> & _FlaxDartTypeCases<_FlaxSignature0>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "builder" | "onWillAccept" | "onWillAcceptWithDetails" | "onAccept" | "onAcceptWithDetails" | "onLeave" | "onMove" | "hitTestBehavior" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/drag_target.dart::DragTarget" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [{}] ? {
        (options: {
            key?: Readonly<{
                "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
            }> | null | undefined;
            builder: ((context: upstream2.BuildContext, candidateData: DartList<_Selected0 | null>, rejectedData: DartList<unknown | null>) => Widget);
            onWillAccept?: ((data: _Selected0 | null) => boolean) | null | undefined;
            onWillAcceptWithDetails?: ((details: upstream3.DragTargetDetails<_Selected0>) => boolean) | null | undefined;
            onAccept?: ((data: _Selected0) => void) | null | undefined;
            onAcceptWithDetails?: ((details: upstream3.DragTargetDetails<_Selected0>) => void) | null | undefined;
            onLeave?: ((data: _Selected0 | null) => void) | null | undefined;
            onMove?: ((details: upstream3.DragTargetDetails<_Selected0>) => void) | null | undefined;
            hitTestBehavior?: upstream4.HitTestBehavior | undefined;
        }): DragTarget<_Selected0>;
        readonly prototype: DragTarget<_Selected0>;
    } & _FlaxInstanceType<DragTarget<_Selected0>> & _FlaxDartType<DragTarget<_Selected0>> : never : never;
}
export {};
