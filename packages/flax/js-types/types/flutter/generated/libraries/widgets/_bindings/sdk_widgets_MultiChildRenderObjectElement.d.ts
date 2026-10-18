import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type DartSetInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_RenderObjectElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RenderObjectElement';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_Element';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Element';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_MultiChildRenderObjectWidget';
import type * as upstream6 from '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerRenderObjectMixin';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerRenderObjectMixin';
import type * as upstream7 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import type * as upstream8 from '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerParentDataMixin';
import '@flax/flutter/rendering/_bindings/sdk_rendering_ContainerParentDataMixin';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/sdk_widgets_BuildOwner';
import '@flax/flutter/widgets/_bindings/sdk_widgets_BuildOwner';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/sdk_widgets_BuildScope';
import '@flax/flutter/widgets/_bindings/sdk_widgets_BuildScope';
import type * as upstream11 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/flutter/widgets/_bindings/sdk_widgets_IndexedSlot';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/dart/core/_bindings/flutter_Type';
import type * as upstream16 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream17 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedElement';
import type * as upstream18 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedWidget';
import type * as upstream19 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream20 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import type * as upstream22 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface MultiChildRenderObjectElement extends Omit<upstream0.RenderObjectElement, _flaxOwnMembers0>, Omit<upstream1.Element, _flaxOwnMembers0 | keyof upstream0.RenderObjectElement>, Omit<upstream2.DiagnosticableTree, _flaxOwnMembers0 | keyof upstream0.RenderObjectElement | keyof upstream1.Element>, Omit<upstream3.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.RenderObjectElement | keyof upstream1.Element | keyof upstream2.DiagnosticableTree>, Omit<upstream4.BuildContext, _flaxOwnMembers0 | keyof upstream0.RenderObjectElement | keyof upstream1.Element | keyof upstream2.DiagnosticableTree | keyof upstream3.Diagnosticable>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::MultiChildRenderObjectElement": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::RenderObjectElement": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [];
}> {
    readonly __MultiChildRenderObjectElement: unique symbol;
    readonly [_flaxDartTypeValue]: MultiChildRenderObjectElement;
    readonly [_flaxDartMethodCases]?: {
        dependOnInheritedWidgetOfExactType: _FlaxSignature0;
        getInheritedWidgetOfExactType: _FlaxSignature1;
        getElementForInheritedWidgetOfExactType: _FlaxSignature2;
        findAncestorWidgetOfExactType: _FlaxSignature3;
        findAncestorStateOfType: _FlaxSignature4;
        findRootAncestorStateOfType: _FlaxSignature5;
        findAncestorRenderObjectOfType: _FlaxSignature6;
    };
    readonly renderObject: upstream6.ContainerRenderObjectMixin<upstream7.RenderObject, upstream8.ContainerParentDataMixin<upstream7.RenderObject>>;
    readonly renderObjectAttachingChild: upstream1.Element | null;
    readonly debugDoingBuild: boolean;
    readonly slot: unknown | null;
    readonly depth: number;
    readonly widget: Widget;
    readonly mounted: boolean;
    readonly debugIsDefunct: boolean;
    readonly debugIsActive: boolean;
    readonly owner: upstream9.BuildOwner | null;
    readonly buildScope: upstream10.BuildScope;
    readonly size: upstream11.Size | null;
    readonly dirty: boolean;
    mount(parent: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [];
    }>) | null, newSlot: unknown | null): void;
    update(newWidget: upstream5.MultiChildRenderObjectWidget): void;
    performRebuild(): void;
    deactivate(): void;
    unmount(): void;
    updateSlot(newSlot: unknown | null): void;
    attachRenderObject(newSlot: unknown | null): void;
    detachRenderObject(): void;
    insertRenderObjectChild(child: Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, slot: Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::IndexedSlot": readonly [upstream1.Element | null];
    }>): void;
    moveRenderObjectChild(child: Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, oldSlot: Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::IndexedSlot": readonly [upstream1.Element | null];
    }>, newSlot: Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::IndexedSlot": readonly [upstream1.Element | null];
    }>): void;
    removeRenderObjectChild(child: Readonly<{
        "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>, slot: unknown | null): void;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    reassemble(): void;
    describeMissingAncestor(options: {
        expectedAncestorType: Readonly<{
            "__flaxBound:dart:core::Type": readonly [];
        }>;
    }): DartList<upstream14.DiagnosticsNode>;
    describeElement(name: string, options?: {
        style?: upstream16.DiagnosticsTreeStyle | undefined;
    }): upstream14.DiagnosticsNode;
    describeWidget(name: string, options?: {
        style?: upstream16.DiagnosticsTreeStyle | undefined;
    }): upstream14.DiagnosticsNode;
    describeOwnershipChain(name: string): upstream14.DiagnosticsNode;
    visitChildren(visitor: ((element: upstream1.Element) => void)): void;
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
    updateSlotForChild(child: Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [];
    }>, newSlot: unknown | null): void;
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
    forgetChild(child: Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [];
    }>): void;
    activate(): void;
    debugDeactivated(): void;
    debugExpectsRenderObjectForSlot(slot: unknown | null): boolean;
    findRenderObject(): upstream7.RenderObject | null;
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
    }): upstream18.InheritedWidget;
    dependOnInheritedWidgetOfExactType<T extends upstream18.InheritedWidget = upstream18.InheritedWidget>(options?: {
        aspect?: unknown | null | undefined;
    }): T | null;
    getInheritedWidgetOfExactType<T extends upstream18.InheritedWidget = upstream18.InheritedWidget>(): T | null;
    getElementForInheritedWidgetOfExactType<T extends upstream18.InheritedWidget = upstream18.InheritedWidget>(): upstream17.InheritedElement | null;
    attachNotificationTree(): void;
    findAncestorWidgetOfExactType<T extends Widget = Widget>(): T | null;
    findAncestorStateOfType<T extends upstream19.State<Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>> = upstream19.State<upstream20.StatefulWidget>>(): T | null;
    findRootAncestorStateOfType<T extends upstream19.State<Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>> = upstream19.State<upstream20.StatefulWidget>>(): T | null;
    findAncestorRenderObjectOfType<T extends upstream7.RenderObject = upstream7.RenderObject>(): T | null;
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
        style?: upstream16.DiagnosticsTreeStyle | null | undefined;
    }): upstream14.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream14.DiagnosticsNode>;
    markNeedsBuild(): void;
    rebuild(options?: {
        force?: boolean | undefined;
    }): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream22.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream22.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toString(options?: {
        minLevel?: upstream22.DiagnosticLevel | undefined;
    }): string;
}
export declare function _MultiChildRenderObjectElementFactory(widget: upstream5.MultiChildRenderObjectWidget): MultiChildRenderObjectElement;
export declare const MultiChildRenderObjectElement: typeof _MultiChildRenderObjectElementFactory & _FlaxInstanceType<MultiChildRenderObjectElement> & _FlaxDartType<MultiChildRenderObjectElement, readonly ["class", "flax.core/sdk_widgets#type:MultiChildRenderObjectElement", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "renderObject" | "renderObjectAttachingChild" | "debugDoingBuild" | "slot" | "depth" | "widget" | "mounted" | "debugIsDefunct" | "debugIsActive" | "owner" | "buildScope" | "size" | "dirty" | "mount" | "update" | "performRebuild" | "deactivate" | "unmount" | "updateSlot" | "attachRenderObject" | "detachRenderObject" | "insertRenderObjectChild" | "moveRenderObjectChild" | "removeRenderObjectChild" | "debugFillProperties" | "reassemble" | "describeMissingAncestor" | "describeElement" | "describeWidget" | "describeOwnershipChain" | "visitChildren" | "debugVisitOnstageChildren" | "visitChildElements" | "updateChild" | "updateChildren" | "updateSlotForChild" | "inflateWidget" | "deactivateChild" | "forgetChild" | "activate" | "debugDeactivated" | "debugExpectsRenderObjectForSlot" | "findRenderObject" | "doesDependOnInheritedElement" | "dependOnInheritedElement" | "dependOnInheritedWidgetOfExactType" | "getInheritedWidgetOfExactType" | "getElementForInheritedWidgetOfExactType" | "attachNotificationTree" | "findAncestorWidgetOfExactType" | "findAncestorStateOfType" | "findRootAncestorStateOfType" | "findAncestorRenderObjectOfType" | "visitAncestorElements" | "didChangeDependencies" | "debugGetCreatorChain" | "debugGetDiagnosticChain" | "dispatchNotification" | "toStringShort" | "toDiagnosticsNode" | "debugDescribeChildren" | "markNeedsBuild" | "rebuild" | "toStringShallow" | "toStringDeep" | "toString" | "__flaxBound:package:flutter/src/widgets/framework.dart::MultiChildRenderObjectElement" | "__flaxBound:package:flutter/src/widgets/framework.dart::RenderObjectElement" | "__flaxBound:package:flutter/src/widgets/framework.dart::Element" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream18.InheritedWidget] ? (options?: {
        aspect?: unknown | null | undefined;
    }) => _Selected0 | null : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream18.InheritedWidget] ? () => _Selected0 | null : never : never;
}
interface _FlaxSignature2 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream18.InheritedWidget] ? () => upstream17.InheritedElement | null : never : never;
}
interface _FlaxSignature3 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [Widget] ? () => _Selected0 | null : never : never;
}
interface _FlaxSignature4 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream19.State<Readonly<{
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
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream19.State<Readonly<{
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
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream7.RenderObject] ? () => _Selected0 | null : never : never;
}
export {};
