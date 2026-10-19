import { type FlaxInstanceType as _FlaxInstanceType, type DartList, type Widget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedWidget';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_ProxyWidget';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_InheritedElement';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream7 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_Element';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Element';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface LookupBoundary extends _FlaxDartWidget, Omit<upstream0.InheritedWidget, _flaxOwnMembers0>, Omit<upstream1.ProxyWidget, _flaxOwnMembers0 | keyof upstream0.InheritedWidget>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.InheritedWidget | keyof upstream1.ProxyWidget>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/lookup_boundary.dart::LookupBoundary": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::InheritedWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __LookupBoundary: unique symbol;
    readonly [_flaxDartTypeValue]: LookupBoundary;
    readonly child: Widget;
    readonly key: upstream2.Key | null;
    updateShouldNotify(oldWidget: upstream0.InheritedWidget): boolean;
    createElement(): upstream4.InheritedElement;
    toStringShort(): string;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toStringShallow(options?: {
        joiner?: string | undefined;
        minLevel?: upstream10.DiagnosticLevel | undefined;
    }): string;
    toStringDeep(options?: {
        minLevel?: upstream10.DiagnosticLevel | undefined;
        prefixLineOne?: string | undefined;
        prefixOtherLines?: string | null | undefined;
        wrapWidth?: number | undefined;
    }): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream12.DiagnosticsTreeStyle | null | undefined;
    }): upstream11.DiagnosticsNode;
    debugDescribeChildren(): DartList<upstream11.DiagnosticsNode>;
}
export declare function _LookupBoundaryFactory(options: {
    key?: Readonly<{
        "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [];
    }> | null | undefined;
    child: Widget;
}): LookupBoundary;
export declare namespace _LookupBoundaryFactory {
    function _flaxDefault_dependOnInheritedWidgetOfExactType<T extends upstream0.InheritedWidget = upstream0.InheritedWidget>(context: upstream3.BuildContext, options?: {
        aspect?: unknown | null | undefined;
    }): T | null;
    export const dependOnInheritedWidgetOfExactType: _FlaxDartCallable<typeof _flaxDefault_dependOnInheritedWidgetOfExactType, _FlaxSignature0>;
    export {};
}
export declare namespace _LookupBoundaryFactory {
    function _flaxDefault_getInheritedWidgetOfExactType<T extends upstream0.InheritedWidget = upstream0.InheritedWidget>(context: upstream3.BuildContext, options?: {
        aspect?: unknown | null | undefined;
    }): T | null;
    export const getInheritedWidgetOfExactType: _FlaxDartCallable<typeof _flaxDefault_getInheritedWidgetOfExactType, _FlaxSignature1>;
    export {};
}
export declare namespace _LookupBoundaryFactory {
    function _flaxDefault_getElementForInheritedWidgetOfExactType<T extends upstream0.InheritedWidget = upstream0.InheritedWidget>(context: upstream3.BuildContext): upstream4.InheritedElement | null;
    export const getElementForInheritedWidgetOfExactType: _FlaxDartCallable<typeof _flaxDefault_getElementForInheritedWidgetOfExactType, _FlaxSignature2>;
    export {};
}
export declare namespace _LookupBoundaryFactory {
    function _flaxDefault_findAncestorWidgetOfExactType<T extends Widget = Widget>(context: upstream3.BuildContext): T | null;
    export const findAncestorWidgetOfExactType: _FlaxDartCallable<typeof _flaxDefault_findAncestorWidgetOfExactType, _FlaxSignature3>;
    export {};
}
export declare namespace _LookupBoundaryFactory {
    function _flaxDefault_findAncestorStateOfType<T extends upstream5.State<Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>> = upstream5.State<upstream6.StatefulWidget>>(context: upstream3.BuildContext): T | null;
    export const findAncestorStateOfType: _FlaxDartCallable<typeof _flaxDefault_findAncestorStateOfType, _FlaxSignature4>;
    export {};
}
export declare namespace _LookupBoundaryFactory {
    function _flaxDefault_findRootAncestorStateOfType<T extends upstream5.State<Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>> = upstream5.State<upstream6.StatefulWidget>>(context: upstream3.BuildContext): T | null;
    export const findRootAncestorStateOfType: _FlaxDartCallable<typeof _flaxDefault_findRootAncestorStateOfType, _FlaxSignature5>;
    export {};
}
export declare namespace _LookupBoundaryFactory {
    function _flaxDefault_findAncestorRenderObjectOfType<T extends upstream7.RenderObject = upstream7.RenderObject>(context: upstream3.BuildContext): T | null;
    export const findAncestorRenderObjectOfType: _FlaxDartCallable<typeof _flaxDefault_findAncestorRenderObjectOfType, _FlaxSignature6>;
    export {};
}
export declare namespace _LookupBoundaryFactory {
    function visitAncestorElements(context: upstream3.BuildContext, visitor: ((element: upstream8.Element) => boolean)): void;
}
export declare namespace _LookupBoundaryFactory {
    function visitChildElements(context: upstream3.BuildContext, visitor: ((element: upstream8.Element) => void)): void;
}
export declare namespace _LookupBoundaryFactory {
    function _flaxDefault_debugIsHidingAncestorWidgetOfExactType<T extends Widget = Widget>(context: upstream3.BuildContext): boolean;
    export const debugIsHidingAncestorWidgetOfExactType: _FlaxDartCallable<typeof _flaxDefault_debugIsHidingAncestorWidgetOfExactType, _FlaxSignature7>;
    export {};
}
export declare namespace _LookupBoundaryFactory {
    function _flaxDefault_debugIsHidingAncestorStateOfType<T extends upstream5.State<Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>> = upstream5.State<upstream6.StatefulWidget>>(context: upstream3.BuildContext): boolean;
    export const debugIsHidingAncestorStateOfType: _FlaxDartCallable<typeof _flaxDefault_debugIsHidingAncestorStateOfType, _FlaxSignature8>;
    export {};
}
export declare namespace _LookupBoundaryFactory {
    function _flaxDefault_debugIsHidingAncestorRenderObjectOfType<T extends upstream7.RenderObject = upstream7.RenderObject>(context: upstream3.BuildContext): boolean;
    export const debugIsHidingAncestorRenderObjectOfType: _FlaxDartCallable<typeof _flaxDefault_debugIsHidingAncestorRenderObjectOfType, _FlaxSignature9>;
    export {};
}
export declare const LookupBoundary: typeof _LookupBoundaryFactory & _FlaxInstanceType<LookupBoundary> & _FlaxDartType<LookupBoundary, readonly ["class", "flax.core/sdk_widgets#type:LookupBoundary", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "child" | "key" | "updateShouldNotify" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/lookup_boundary.dart::LookupBoundary" | "__flaxBound:package:flutter/src/widgets/framework.dart::InheritedWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
interface _FlaxSignature0 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.InheritedWidget] ? (context: upstream3.BuildContext, options?: {
        aspect?: unknown | null | undefined;
    }) => _Selected0 | null : never : never;
}
interface _FlaxSignature1 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.InheritedWidget] ? (context: upstream3.BuildContext, options?: {
        aspect?: unknown | null | undefined;
    }) => _Selected0 | null : never : never;
}
interface _FlaxSignature2 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream0.InheritedWidget] ? (context: upstream3.BuildContext) => upstream4.InheritedElement | null : never : never;
}
interface _FlaxSignature3 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [Widget] ? (context: upstream3.BuildContext) => _Selected0 | null : never : never;
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
    }>>] ? (context: upstream3.BuildContext) => _Selected0 | null : never : never;
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
    }>>] ? (context: upstream3.BuildContext) => _Selected0 | null : never : never;
}
interface _FlaxSignature6 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream7.RenderObject] ? (context: upstream3.BuildContext) => _Selected0 | null : never : never;
}
interface _FlaxSignature7 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [Widget] ? (context: upstream3.BuildContext) => boolean : never : never;
}
interface _FlaxSignature8 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream5.State<Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [];
    }> & Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
    }>>] ? (context: upstream3.BuildContext) => boolean : never : never;
}
interface _FlaxSignature9 extends _FlaxDartSignature {
    readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream7.RenderObject] ? (context: upstream3.BuildContext) => boolean : never : never;
}
export {};
