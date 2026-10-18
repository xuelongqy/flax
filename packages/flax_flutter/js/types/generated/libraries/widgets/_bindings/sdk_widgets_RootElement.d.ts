import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type DartListInput, type DartSetInput, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_Element';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Element';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticableTree';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_RootElementMixin';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RootElementMixin';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_RootWidget';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_BuildOwner';
import '@flax/flutter/widgets/_bindings/sdk_widgets_BuildOwner';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/sdk_widgets_BuildScope';
import '@flax/flutter/widgets/_bindings/sdk_widgets_BuildScope';
import type * as upstream8 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import type * as upstream9 from '@flax/dart/ui/_bindings/flutter_Size';
import '@flax/dart/ui/_bindings/flutter_Size';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/dart/core/_bindings/flutter_Type';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream13 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedElement';
import type * as upstream14 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedWidget';
import type * as upstream15 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream16 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream19 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface RootElement extends Omit<upstream0.Element, _flaxOwnMembers0>, Omit<upstream1.DiagnosticableTree, _flaxOwnMembers0 | keyof upstream0.Element>, Omit<upstream2.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.Element | keyof upstream1.DiagnosticableTree>, Omit<upstream3.BuildContext, _flaxOwnMembers0 | keyof upstream0.Element | keyof upstream1.DiagnosticableTree | keyof upstream2.Diagnosticable>, Omit<upstream4.RootElementMixin, _flaxOwnMembers0 | keyof upstream0.Element | keyof upstream1.DiagnosticableTree | keyof upstream2.Diagnosticable | keyof upstream3.BuildContext>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/binding.dart::RootElement": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::RootElementMixin": readonly [];
}> {
    readonly __RootElement: unique symbol;
    readonly [_flaxDartTypeValue]: RootElement;
    readonly [_flaxDartMethodCases]?: {
        dependOnInheritedWidgetOfExactType: _FlaxSignature0;
        getInheritedWidgetOfExactType: _FlaxSignature1;
        getElementForInheritedWidgetOfExactType: _FlaxSignature2;
        findAncestorWidgetOfExactType: _FlaxSignature3;
        findAncestorStateOfType: _FlaxSignature4;
        findRootAncestorStateOfType: _FlaxSignature5;
        findAncestorRenderObjectOfType: _FlaxSignature6;
    };
    readonly slot: unknown | null;
    readonly depth: number;
    readonly widget: Widget;
    readonly mounted: boolean;
    readonly debugIsDefunct: boolean;
    readonly debugIsActive: boolean;
    readonly owner: upstream6.BuildOwner | null;
    readonly buildScope: upstream7.BuildScope;
    readonly renderObject: upstream8.RenderObject | null;
    readonly renderObjectAttachingChild: upstream0.Element | null;
    readonly size: upstream9.Size | null;
    readonly dirty: boolean;
    readonly debugDoingBuild: boolean;
    reassemble(): void;
    describeMissingAncestor(options: {
        expectedAncestorType: Readonly<{
            "__flaxBound:dart:core::Type": readonly [];
        }>;
    }): DartList<upstream10.DiagnosticsNode>;
    describeElement(name: string, options?: {
        style?: upstream12.DiagnosticsTreeStyle | undefined;
    }): upstream10.DiagnosticsNode;
    describeWidget(name: string, options?: {
        style?: upstream12.DiagnosticsTreeStyle | undefined;
    }): upstream10.DiagnosticsNode;
    describeOwnershipChain(name: string): upstream10.DiagnosticsNode;
    visitChildren(visitor: ((element: upstream0.Element) => void)): void;
    debugVisitOnstageChildren(visitor: ((element: upstream0.Element) => void)): void;
    visitChildElements(visitor: ((element: upstream0.Element) => void)): void;
    updateChild(child: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [];
    }>) | null, newWidget: Widget | null, newSlot: unknown | null): upstream0.Element | null;
    updateChildren(oldChildren: DartListInput<upstream0.Element, Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [];
    }>>, newWidgets: DartListInput<Widget, Widget>, options?: {
        forgottenChildren?: DartSetInput<upstream0.Element, Readonly<{
            "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
        }> & Readonly<{
            "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [];
        }>> | null | undefined;
        slots?: DartListInput<unknown | null, unknown | null> | null | undefined;
    }): DartList<upstream0.Element>;
    mount(parent: (Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [];
    }>) | null, newSlot: unknown | null): void;
    update(newWidget: upstream5.RootWidget): void;
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
    inflateWidget(newWidget: Widget, newSlot: unknown | null): upstream0.Element;
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
    }): upstream14.InheritedWidget;
    dependOnInheritedWidgetOfExactType<T extends upstream14.InheritedWidget = upstream14.InheritedWidget>(options?: {
        aspect?: unknown | null | undefined;
    }): T | null;
    getInheritedWidgetOfExactType<T extends upstream14.InheritedWidget = upstream14.InheritedWidget>(): T | null;
    getElementForInheritedWidgetOfExactType<T extends upstream14.InheritedWidget = upstream14.InheritedWidget>(): upstream13.InheritedElement | null;
    attachNotificationTree(): void;
    findAncestorWidgetOfExactType<T extends Widget = Widget>(): T | null;
    findAncestorStateOfType<T extends upstream15.State<Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>> = upstream15.State<upstream16.StatefulWidget>>(): T | null;
    findRootAncestorStateOfType<T extends upstream15.State<Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>> = upstream15.State<upstream16.StatefulWidget>>(): T | null;
    findAncestorRenderObjectOfType<T extends upstream8.RenderObject = upstream8.RenderObject>(): T | null;
    visitAncestorElements(visitor: ((element: upstream0.Element) => boolean)): void;
    didChangeDependencies(): void;
    debugGetCreatorChain(limit: number): string;
    debugGetDiagnosticChain(): DartList<upstream0.Element>;
    dispatchNotification(notification: Readonly<{
        "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [];
    }>): void;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream12.DiagnosticsTreeStyle | null | undefined;
    }): upstream10.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    debugDescribeChildren(): DartList<upstream10.DiagnosticsNode>;
    markNeedsBuild(): void;
    rebuild(options?: {
        force?: boolean | undefined;
    }): void;
    performRebuild(): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream19.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream19.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toString(options?: {
        minLevel?: upstream19.DiagnosticLevel | undefined;
    }): string;
    assignOwner(owner: Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::BuildOwner": readonly [];
    }>): void;
}
export declare function _RootElementFactory(widget: upstream5.RootWidget): RootElement;
export declare const RootElement: typeof _RootElementFactory & _FlaxInstanceType<RootElement> & _FlaxDartType<RootElement, readonly ["class", "flax.core/sdk_widgets#type:RootElement", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "slot" | "depth" | "widget" | "mounted" | "debugIsDefunct" | "debugIsActive" | "owner" | "buildScope" | "renderObject" | "renderObjectAttachingChild" | "size" | "dirty" | "debugDoingBuild" | "reassemble" | "describeMissingAncestor" | "describeElement" | "describeWidget" | "describeOwnershipChain" | "visitChildren" | "debugVisitOnstageChildren" | "visitChildElements" | "updateChild" | "updateChildren" | "mount" | "update" | "updateSlotForChild" | "updateSlot" | "detachRenderObject" | "attachRenderObject" | "inflateWidget" | "deactivateChild" | "forgetChild" | "activate" | "deactivate" | "debugDeactivated" | "unmount" | "debugExpectsRenderObjectForSlot" | "findRenderObject" | "doesDependOnInheritedElement" | "dependOnInheritedElement" | "dependOnInheritedWidgetOfExactType" | "getInheritedWidgetOfExactType" | "getElementForInheritedWidgetOfExactType" | "attachNotificationTree" | "findAncestorWidgetOfExactType" | "findAncestorStateOfType" | "findRootAncestorStateOfType" | "findAncestorRenderObjectOfType" | "visitAncestorElements" | "didChangeDependencies" | "debugGetCreatorChain" | "debugGetDiagnosticChain" | "dispatchNotification" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "debugDescribeChildren" | "markNeedsBuild" | "rebuild" | "performRebuild" | "toStringShallow" | "toStringDeep" | "toString" | "assignOwner" | "__flaxBound:package:flutter/src/widgets/binding.dart::RootElement" | "__flaxBound:package:flutter/src/widgets/framework.dart::Element" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext" | "__flaxBound:package:flutter/src/widgets/framework.dart::RootElementMixin";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream14.InheritedWidget] ? (options?: {
        aspect?: unknown | null | undefined;
    }) => _Selected0 | null : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream14.InheritedWidget] ? () => _Selected0 | null : never : never;
}
interface _FlaxSignature2 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream14.InheritedWidget] ? () => upstream13.InheritedElement | null : never : never;
}
interface _FlaxSignature3 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [Widget] ? () => _Selected0 | null : never : never;
}
interface _FlaxSignature4 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream15.State<Readonly<{
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
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream15.State<Readonly<{
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
