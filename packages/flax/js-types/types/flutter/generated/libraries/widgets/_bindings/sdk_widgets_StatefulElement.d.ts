import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type DartSetInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ComponentElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ComponentElement';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_Element';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Element';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_BuildOwner';
import '@flax/flutter/widgets/_bindings/sdk_widgets_BuildOwner';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_BuildScope';
import '@flax/flutter/widgets/_bindings/sdk_widgets_BuildScope';
import type * as upstream8 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import type * as upstream9 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/dart/core/_bindings/flutter_Type';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream14 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedElement';
import type * as upstream15 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream18 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface StatefulElement extends Omit<upstream0.ComponentElement, _flaxOwnMembers0>, Omit<upstream1.Element, _flaxOwnMembers0 | keyof upstream0.ComponentElement>, Omit<upstream2.DiagnosticableTree, _flaxOwnMembers0 | keyof upstream0.ComponentElement | keyof upstream1.Element>, Omit<upstream3.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.ComponentElement | keyof upstream1.Element | keyof upstream2.DiagnosticableTree>, Omit<upstream4.BuildContext, _flaxOwnMembers0 | keyof upstream0.ComponentElement | keyof upstream1.Element | keyof upstream2.DiagnosticableTree | keyof upstream3.Diagnosticable>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulElement": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::ComponentElement": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [];
}> {
    readonly __StatefulElement: unique symbol;
    readonly [_flaxDartTypeValue]: StatefulElement;
    readonly [_flaxDartMethodCases]?: {
        dependOnInheritedWidgetOfExactType: _FlaxSignature0;
        getInheritedWidgetOfExactType: _FlaxSignature1;
        getElementForInheritedWidgetOfExactType: _FlaxSignature2;
        findAncestorWidgetOfExactType: _FlaxSignature3;
        findAncestorStateOfType: _FlaxSignature4;
        findRootAncestorStateOfType: _FlaxSignature5;
        findAncestorRenderObjectOfType: _FlaxSignature6;
    };
    readonly debugDoingBuild: boolean;
    readonly renderObjectAttachingChild: upstream1.Element | null;
    readonly slot: unknown | null;
    readonly depth: number;
    readonly widget: Widget;
    readonly mounted: boolean;
    readonly debugIsDefunct: boolean;
    readonly debugIsActive: boolean;
    readonly owner: upstream6.BuildOwner | null;
    readonly buildScope: upstream7.BuildScope;
    readonly renderObject: upstream8.RenderObject | null;
    readonly size: upstream9.Size | null;
    readonly dirty: boolean;
    readonly state: upstream10.State<upstream5.StatefulWidget>;
    mount(parent: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [];
    }>) | null, newSlot: unknown | null): void;
    performRebuild(): void;
    build(): Widget;
    visitChildren(visitor: ((element: upstream1.Element) => void)): void;
    forgetChild(child: Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [];
    }>): void;
    reassemble(): void;
    describeMissingAncestor(options: {
        expectedAncestorType: Readonly<{
            "__flaxBound:dart:core::Type": readonly [];
        }>;
    }): DartList<upstream11.DiagnosticsNode>;
    describeElement(name: string, options?: {
        style?: upstream13.DiagnosticsTreeStyle | undefined;
    }): upstream11.DiagnosticsNode;
    describeWidget(name: string, options?: {
        style?: upstream13.DiagnosticsTreeStyle | undefined;
    }): upstream11.DiagnosticsNode;
    describeOwnershipChain(name: string): upstream11.DiagnosticsNode;
    debugVisitOnstageChildren(visitor: ((element: upstream1.Element) => void)): void;
    visitChildElements(visitor: ((element: upstream1.Element) => void)): void;
    updateChild(child: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [];
    }>) | null, newWidget: Widget | null, newSlot: unknown | null): upstream1.Element | null;
    updateChildren(oldChildren: DartListInput<upstream1.Element, Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [];
    }>>, newWidgets: DartListInput<Widget, Widget>, options?: {
        forgottenChildren?: DartSetInput<upstream1.Element, Readonly<{
            "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [];
        }>> | null | undefined;
        slots?: DartListInput<unknown | null, unknown | null> | null | undefined;
    }): DartList<upstream1.Element>;
    update(newWidget: Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>): void;
    updateSlotForChild(child: Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [];
    }>, newSlot: unknown | null): void;
    updateSlot(newSlot: unknown | null): void;
    detachRenderObject(): void;
    attachRenderObject(newSlot: unknown | null): void;
    inflateWidget(newWidget: Widget, newSlot: unknown | null): upstream1.Element;
    deactivateChild(child: Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [];
    }>): void;
    activate(): void;
    deactivate(): void;
    debugDeactivated(): void;
    unmount(): void;
    debugExpectsRenderObjectForSlot(slot: unknown | null): boolean;
    findRenderObject(): upstream8.RenderObject | null;
    doesDependOnInheritedElement(ancestor: Readonly<{
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
    }>): boolean;
    dependOnInheritedElement(ancestor: Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [];
    }>, options?: {
        aspect?: unknown | null | undefined;
    }): upstream15.InheritedWidget;
    dependOnInheritedWidgetOfExactType<T extends upstream15.InheritedWidget = upstream15.InheritedWidget>(options?: {
        aspect?: unknown | null | undefined;
    }): T | null;
    getInheritedWidgetOfExactType<T extends upstream15.InheritedWidget = upstream15.InheritedWidget>(): T | null;
    getElementForInheritedWidgetOfExactType<T extends upstream15.InheritedWidget = upstream15.InheritedWidget>(): upstream14.InheritedElement | null;
    attachNotificationTree(): void;
    findAncestorWidgetOfExactType<T extends Widget = Widget>(): T | null;
    findAncestorStateOfType<T extends upstream10.State<Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>> = upstream10.State<upstream5.StatefulWidget>>(): T | null;
    findRootAncestorStateOfType<T extends upstream10.State<Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>> = upstream10.State<upstream5.StatefulWidget>>(): T | null;
    findAncestorRenderObjectOfType<T extends upstream8.RenderObject = upstream8.RenderObject>(): T | null;
    visitAncestorElements(visitor: ((element: upstream1.Element) => boolean)): void;
    didChangeDependencies(): void;
    debugGetCreatorChain(limit: number): string;
    debugGetDiagnosticChain(): DartList<upstream1.Element>;
    dispatchNotification(notification: Readonly<{
        "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [];
    }>): void;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream13.DiagnosticsTreeStyle | null | undefined;
    }): upstream11.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    debugDescribeChildren(): DartList<upstream11.DiagnosticsNode>;
    markNeedsBuild(): void;
    rebuild(options?: {
        force?: boolean | undefined;
    }): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream18.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream18.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toString(options?: {
        minLevel?: upstream18.DiagnosticLevel | undefined;
    }): string;
}
export declare function _StatefulElementFactory(widget: Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}> & Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>): StatefulElement;
export declare const StatefulElement: typeof _StatefulElementFactory & _FlaxInstanceType<StatefulElement> & _FlaxDartType<StatefulElement, readonly ["class", "flax.core/sdk_widgets#type:StatefulElement", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "debugDoingBuild" | "renderObjectAttachingChild" | "slot" | "depth" | "widget" | "mounted" | "debugIsDefunct" | "debugIsActive" | "owner" | "buildScope" | "renderObject" | "size" | "dirty" | "state" | "mount" | "performRebuild" | "build" | "visitChildren" | "forgetChild" | "reassemble" | "describeMissingAncestor" | "describeElement" | "describeWidget" | "describeOwnershipChain" | "debugVisitOnstageChildren" | "visitChildElements" | "updateChild" | "updateChildren" | "update" | "updateSlotForChild" | "updateSlot" | "detachRenderObject" | "attachRenderObject" | "inflateWidget" | "deactivateChild" | "activate" | "deactivate" | "debugDeactivated" | "unmount" | "debugExpectsRenderObjectForSlot" | "findRenderObject" | "doesDependOnInheritedElement" | "dependOnInheritedElement" | "dependOnInheritedWidgetOfExactType" | "getInheritedWidgetOfExactType" | "getElementForInheritedWidgetOfExactType" | "attachNotificationTree" | "findAncestorWidgetOfExactType" | "findAncestorStateOfType" | "findRootAncestorStateOfType" | "findAncestorRenderObjectOfType" | "visitAncestorElements" | "didChangeDependencies" | "debugGetCreatorChain" | "debugGetDiagnosticChain" | "dispatchNotification" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "debugDescribeChildren" | "markNeedsBuild" | "rebuild" | "toStringShallow" | "toStringDeep" | "toString" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulElement" | "__flaxBound:package:flutter/src/widgets/framework.dart::ComponentElement" | "__flaxBound:package:flutter/src/widgets/framework.dart::Element" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream15.InheritedWidget] ? (options?: {
        aspect?: unknown | null | undefined;
    }) => _Selected0 | null : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream15.InheritedWidget] ? () => _Selected0 | null : never : never;
}
interface _FlaxSignature2 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream15.InheritedWidget] ? () => upstream14.InheritedElement | null : never : never;
}
interface _FlaxSignature3 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [Widget] ? () => _Selected0 | null : never : never;
}
interface _FlaxSignature4 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream10.State<Readonly<{
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
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream10.State<Readonly<{
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
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream8.RenderObject] ? () => _Selected0 | null : never : never;
}
export {};
