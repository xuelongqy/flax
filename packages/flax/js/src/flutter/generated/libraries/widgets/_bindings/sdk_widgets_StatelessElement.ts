// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
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
import type * as upstream5 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatelessWidget';
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
import type * as upstream11 from '@flax/dart/core/_bindings/flutter_Type';
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
import type * as upstream17 from '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import type * as upstream18 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream19 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { _flaxMemberParameters123, _flaxMemberParameters60, _flaxMemberParameters2 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface StatelessElement extends Omit<upstream0.ComponentElement, _flaxOwnMembers0>, Omit<upstream1.Element, _flaxOwnMembers0 | keyof upstream0.ComponentElement>, Omit<upstream2.DiagnosticableTree, _flaxOwnMembers0 | keyof upstream0.ComponentElement | keyof upstream1.Element>, Omit<upstream3.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.ComponentElement | keyof upstream1.Element | keyof upstream2.DiagnosticableTree>, Omit<upstream4.BuildContext, _flaxOwnMembers0 | keyof upstream0.ComponentElement | keyof upstream1.Element | keyof upstream2.DiagnosticableTree | keyof upstream3.Diagnosticable>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessElement": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::ComponentElement": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [] }> { readonly __StatelessElement: unique symbol;
readonly [_flaxDartTypeValue]: StatelessElement;
readonly [_flaxDartMethodCases]?: {dependOnInheritedWidgetOfExactType: _FlaxSignature0;getInheritedWidgetOfExactType: _FlaxSignature1;getElementForInheritedWidgetOfExactType: _FlaxSignature2;findAncestorWidgetOfExactType: _FlaxSignature3;findAncestorStateOfType: _FlaxSignature4;findRootAncestorStateOfType: _FlaxSignature5;findAncestorRenderObjectOfType: _FlaxSignature6;};
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
mount(parent: Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [] }> | null, newSlot: unknown | null): void;
performRebuild(): void;
build(): Widget;
visitChildren(visitor: ((element: upstream1.Element) => void)): void;
forgetChild(child: Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [] }>): void;
reassemble(): void;
describeMissingAncestor(options: {expectedAncestorType: Readonly<{ "__flaxBound:dart:core::Type": readonly [] }>}): DartList<upstream10.DiagnosticsNode>;
describeElement(name: string, options?: {style?: upstream12.DiagnosticsTreeStyle | undefined}): upstream10.DiagnosticsNode;
describeWidget(name: string, options?: {style?: upstream12.DiagnosticsTreeStyle | undefined}): upstream10.DiagnosticsNode;
describeOwnershipChain(name: string): upstream10.DiagnosticsNode;
debugVisitOnstageChildren(visitor: ((element: upstream1.Element) => void)): void;
visitChildElements(visitor: ((element: upstream1.Element) => void)): void;
updateChild(child: Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [] }> | null, newWidget: Widget | null, newSlot: unknown | null): upstream1.Element | null;
updateChildren(oldChildren: DartListInput<upstream1.Element, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [] }>>, newWidgets: DartListInput<Widget, Widget>, options?: {forgottenChildren?: DartSetInput<upstream1.Element, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [] }>> | null | undefined; slots?: DartListInput<unknown | null, unknown | null> | null | undefined}): DartList<upstream1.Element>;
update(newWidget: upstream5.StatelessWidget): void;
updateSlotForChild(child: Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [] }>, newSlot: unknown | null): void;
updateSlot(newSlot: unknown | null): void;
detachRenderObject(): void;
attachRenderObject(newSlot: unknown | null): void;
inflateWidget(newWidget: Widget, newSlot: unknown | null): upstream1.Element;
deactivateChild(child: Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [] }>): void;
activate(): void;
deactivate(): void;
debugDeactivated(): void;
unmount(): void;
debugExpectsRenderObjectForSlot(slot: unknown | null): boolean;
findRenderObject(): upstream8.RenderObject | null;
doesDependOnInheritedElement(ancestor: Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::InheritedElement": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyElement": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::ComponentElement": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [] }>): boolean;
dependOnInheritedElement(ancestor: Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::InheritedElement": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyElement": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::ComponentElement": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [] }>, options?: {aspect?: unknown | null | undefined}): upstream14.InheritedWidget;
dependOnInheritedWidgetOfExactType<T extends upstream14.InheritedWidget = upstream14.InheritedWidget>(options?: {aspect?: unknown | null | undefined}): T | null;
getInheritedWidgetOfExactType<T extends upstream14.InheritedWidget = upstream14.InheritedWidget>(): T | null;
getElementForInheritedWidgetOfExactType<T extends upstream14.InheritedWidget = upstream14.InheritedWidget>(): upstream13.InheritedElement | null;
attachNotificationTree(): void;
findAncestorWidgetOfExactType<T extends Widget = Widget>(): T | null;
findAncestorStateOfType<T extends upstream15.State<Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>> = upstream15.State<upstream16.StatefulWidget>>(): T | null;
findRootAncestorStateOfType<T extends upstream15.State<Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>> = upstream15.State<upstream16.StatefulWidget>>(): T | null;
findAncestorRenderObjectOfType<T extends upstream8.RenderObject = upstream8.RenderObject>(): T | null;
visitAncestorElements(visitor: ((element: upstream1.Element) => boolean)): void;
didChangeDependencies(): void;
debugGetCreatorChain(limit: number): string;
debugGetDiagnosticChain(): DartList<upstream1.Element>;
dispatchNotification(notification: Readonly<{ "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [] }>): void;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream12.DiagnosticsTreeStyle | null | undefined}): upstream10.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
debugDescribeChildren(): DartList<upstream10.DiagnosticsNode>;
markNeedsBuild(): void;
rebuild(options?: {force?: boolean | undefined}): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream19.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream19.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toString(options?: {minLevel?: upstream19.DiagnosticLevel | undefined}): string;
}
defineObject("flax.core/sdk_widgets#type:StatelessElement", ["debugDoingBuild","renderObjectAttachingChild","slot","depth","widget","mounted","debugIsDefunct","debugIsActive","owner","buildScope","renderObject","size","dirty"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:StatelessElement", "object", {"update":_flaxMemberParameters123,"dependOnInheritedWidgetOfExactType":_flaxMemberParameters60,"getInheritedWidgetOfExactType":_flaxMemberParameters2,"getElementForInheritedWidgetOfExactType":_flaxMemberParameters2,"findAncestorWidgetOfExactType":_flaxMemberParameters2,"findAncestorStateOfType":_flaxMemberParameters2,"findRootAncestorStateOfType":_flaxMemberParameters2,"findAncestorRenderObjectOfType":_flaxMemberParameters2}, {"dependOnInheritedWidgetOfExactType":{"id":"dependOnInheritedWidgetOfExactType","parameters":[{"name":"aspect"}]},"getInheritedWidgetOfExactType":{"id":"getInheritedWidgetOfExactType","parameters":[]},"getElementForInheritedWidgetOfExactType":{"id":"getElementForInheritedWidgetOfExactType","parameters":[]},"findAncestorWidgetOfExactType":{"id":"findAncestorWidgetOfExactType","parameters":[]},"findAncestorStateOfType":{"id":"findAncestorStateOfType","parameters":[]},"findRootAncestorStateOfType":{"id":"findRootAncestorStateOfType","parameters":[]},"findAncestorRenderObjectOfType":{"id":"findAncestorRenderObjectOfType","parameters":[]}}), [], undefined, "flax.core/sdk_widgets#type:ComponentElement");
export function _StatelessElementFactory(widget: upstream5.StatelessWidget): StatelessElement {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:StatelessElement", "", [{"name":"widget","required":true,"positional":true}], [widget], {}) as StatelessElement;
}
export const StatelessElement: typeof _StatelessElementFactory & _FlaxInstanceType<StatelessElement> & _FlaxDartType<StatelessElement, readonly ["class", "flax.core/sdk_widgets#type:StatelessElement", readonly [], false]> = _flaxBindInstanceType<StatelessElement, typeof _StatelessElementFactory>(_StatelessElementFactory, "flax.core/sdk_widgets#type:StatelessElement", ["flax.core/sdk_widgets#type:ComponentElement","flax.core/sdk_widgets#type:Element","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable","flax.core/flutter#type:BuildContext"]) as typeof _StatelessElementFactory & _FlaxInstanceType<StatelessElement> & _FlaxDartType<StatelessElement, readonly ["class", "flax.core/sdk_widgets#type:StatelessElement", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "debugDoingBuild" | "renderObjectAttachingChild" | "slot" | "depth" | "widget" | "mounted" | "debugIsDefunct" | "debugIsActive" | "owner" | "buildScope" | "renderObject" | "size" | "dirty" | "mount" | "performRebuild" | "build" | "visitChildren" | "forgetChild" | "reassemble" | "describeMissingAncestor" | "describeElement" | "describeWidget" | "describeOwnershipChain" | "debugVisitOnstageChildren" | "visitChildElements" | "updateChild" | "updateChildren" | "update" | "updateSlotForChild" | "updateSlot" | "detachRenderObject" | "attachRenderObject" | "inflateWidget" | "deactivateChild" | "activate" | "deactivate" | "debugDeactivated" | "unmount" | "debugExpectsRenderObjectForSlot" | "findRenderObject" | "doesDependOnInheritedElement" | "dependOnInheritedElement" | "dependOnInheritedWidgetOfExactType" | "getInheritedWidgetOfExactType" | "getElementForInheritedWidgetOfExactType" | "attachNotificationTree" | "findAncestorWidgetOfExactType" | "findAncestorStateOfType" | "findRootAncestorStateOfType" | "findAncestorRenderObjectOfType" | "visitAncestorElements" | "didChangeDependencies" | "debugGetCreatorChain" | "debugGetDiagnosticChain" | "dispatchNotification" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "debugDescribeChildren" | "markNeedsBuild" | "rebuild" | "toStringShallow" | "toStringDeep" | "toString" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatelessElement" | "__flaxBound:package:flutter/src/widgets/framework.dart::ComponentElement" | "__flaxBound:package:flutter/src/widgets/framework.dart::Element" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable" | "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext";
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream14.InheritedWidget] ? (options?: {aspect?: unknown | null | undefined}) => _Selected0 | null : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream14.InheritedWidget] ? () => _Selected0 | null : never : never; }
interface _FlaxSignature2 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream14.InheritedWidget] ? () => upstream13.InheritedElement | null : never : never; }
interface _FlaxSignature3 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [Widget] ? () => _Selected0 | null : never : never; }
interface _FlaxSignature4 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream15.State<Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>] ? () => _Selected0 | null : never : never; }
interface _FlaxSignature5 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream15.State<Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>] ? () => _Selected0 | null : never : never; }
interface _FlaxSignature6 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream8.RenderObject] ? () => _Selected0 | null : never : never; }
