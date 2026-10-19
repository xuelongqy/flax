import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_BuildOwner';
import '@flax/flutter/widgets/_bindings/sdk_widgets_BuildOwner';
import type * as upstream1 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream2 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedWidget';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedElement';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_Element';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Element';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/dart/core/_bindings/flutter_Type';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface BuildContext extends ComponentContext {
    readonly __BuildContext: unique symbol;
    readonly [_flaxDartTypeValue]: BuildContext;
    readonly [_flaxDartMethodCases]?: {
        dependOnInheritedWidgetOfExactType: _FlaxSignature0;
        getInheritedWidgetOfExactType: _FlaxSignature1;
        getElementForInheritedWidgetOfExactType: _FlaxSignature2;
        findAncestorWidgetOfExactType: _FlaxSignature3;
        findAncestorStateOfType: _FlaxSignature4;
        findRootAncestorStateOfType: _FlaxSignature5;
        findAncestorRenderObjectOfType: _FlaxSignature6;
    };
    readonly widget: Widget;
    readonly owner: upstream0.BuildOwner | null;
    readonly mounted: boolean;
    readonly debugDoingBuild: boolean;
    readonly size: upstream1.Size | null;
    findRenderObject(): upstream2.RenderObject | null;
    dependOnInheritedElement(ancestor: Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::InheritedElement": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyElement": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::ComponentElement": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [];
    }>, options?: {
        aspect?: unknown | null | undefined;
    }): upstream3.InheritedWidget;
    dependOnInheritedWidgetOfExactType<T extends upstream3.InheritedWidget = upstream3.InheritedWidget>(options?: {
        aspect?: unknown | null | undefined;
    }): T | null;
    getInheritedWidgetOfExactType<T extends upstream3.InheritedWidget = upstream3.InheritedWidget>(): T | null;
    getElementForInheritedWidgetOfExactType<T extends upstream3.InheritedWidget = upstream3.InheritedWidget>(): upstream4.InheritedElement | null;
    findAncestorWidgetOfExactType: (<T extends Widget = Widget>() => T | null) & ComponentContext["findAncestorWidgetOfExactType"];
    findAncestorStateOfType<T extends upstream5.State<Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>> = upstream5.State<upstream6.StatefulWidget>>(): T | null;
    findRootAncestorStateOfType<T extends upstream5.State<Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>> = upstream5.State<upstream6.StatefulWidget>>(): T | null;
    findAncestorRenderObjectOfType<T extends upstream2.RenderObject = upstream2.RenderObject>(): T | null;
    visitAncestorElements(visitor: ((element: upstream7.Element) => boolean)): void;
    visitChildElements(visitor: ((element: upstream7.Element) => void)): void;
    dispatchNotification(notification: Readonly<{
        "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [];
    }>): void;
    describeElement(name: string, options?: {
        style?: upstream10.DiagnosticsTreeStyle | undefined;
    }): upstream9.DiagnosticsNode;
    describeWidget(name: string, options?: {
        style?: upstream10.DiagnosticsTreeStyle | undefined;
    }): upstream9.DiagnosticsNode;
    describeMissingAncestor(options: {
        expectedAncestorType: Readonly<{
            "__flaxBound:dart:core::Type": readonly [];
        }>;
    }): DartList<upstream9.DiagnosticsNode>;
    describeOwnershipChain(name: string): upstream9.DiagnosticsNode;
}
export declare const BuildContext: object & _FlaxInstanceType<BuildContext> & _FlaxDartType<BuildContext, readonly ["class", "flax.core/flutter#type:BuildContext", readonly [], false]>;
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream3.InheritedWidget] ? (options?: {
        aspect?: unknown | null | undefined;
    }) => _Selected0 | null : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream3.InheritedWidget] ? () => _Selected0 | null : never : never;
}
interface _FlaxSignature2 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream3.InheritedWidget] ? () => upstream4.InheritedElement | null : never : never;
}
interface _FlaxSignature3 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [Widget] ? () => _Selected0 | null : never : never;
}
interface _FlaxSignature4 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream5.State<Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>>] ? () => _Selected0 | null : never : never;
}
interface _FlaxSignature5 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream5.State<Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>>] ? () => _Selected0 | null : never : never;
}
interface _FlaxSignature6 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream2.RenderObject] ? () => _Selected0 | null : never : never;
}
export {};
