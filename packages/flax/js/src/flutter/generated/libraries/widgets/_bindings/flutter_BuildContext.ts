// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
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
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Notification';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream11 from '@flax/dart/core/_bindings/flutter_Type';
import '@flax/dart/core/_bindings/flutter_Type';
import { _flaxMemberParameters3, _flaxMemberParameters27, _flaxMemberParameters28, _flaxMemberParameters29, _flaxMemberParameters30, _flaxMemberParameters31, _flaxMemberParameters32, _flaxMemberParameters33 } from "@flax/core/navigation/_bindings/flutter.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface BuildContext extends ComponentContext { readonly __BuildContext: unique symbol;
readonly [_flaxDartTypeValue]: BuildContext;
readonly [_flaxDartMethodCases]?: {dependOnInheritedWidgetOfExactType: _FlaxSignature0;getInheritedWidgetOfExactType: _FlaxSignature1;getElementForInheritedWidgetOfExactType: _FlaxSignature2;findAncestorWidgetOfExactType: _FlaxSignature3;findAncestorStateOfType: _FlaxSignature4;findRootAncestorStateOfType: _FlaxSignature5;findAncestorRenderObjectOfType: _FlaxSignature6;};
readonly widget: Widget;
readonly owner: upstream0.BuildOwner | null;
readonly mounted: boolean;
readonly debugDoingBuild: boolean;
readonly size: upstream1.Size | null;
findRenderObject(): upstream2.RenderObject | null;
dependOnInheritedElement(ancestor: Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::InheritedElement": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyElement": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::ComponentElement": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Element": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::BuildContext": readonly [] }>, options?: {aspect?: unknown | null | undefined}): upstream3.InheritedWidget;
dependOnInheritedWidgetOfExactType<T extends upstream3.InheritedWidget = upstream3.InheritedWidget>(options?: {aspect?: unknown | null | undefined}): T | null;
getInheritedWidgetOfExactType<T extends upstream3.InheritedWidget = upstream3.InheritedWidget>(): T | null;
getElementForInheritedWidgetOfExactType<T extends upstream3.InheritedWidget = upstream3.InheritedWidget>(): upstream4.InheritedElement | null;
findAncestorWidgetOfExactType: (<T extends Widget = Widget>() => T | null) & ComponentContext["findAncestorWidgetOfExactType"];
findAncestorStateOfType<T extends upstream5.State<Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>> = upstream5.State<upstream6.StatefulWidget>>(): T | null;
findRootAncestorStateOfType<T extends upstream5.State<Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>> = upstream5.State<upstream6.StatefulWidget>>(): T | null;
findAncestorRenderObjectOfType<T extends upstream2.RenderObject = upstream2.RenderObject>(): T | null;
visitAncestorElements(visitor: ((element: upstream7.Element) => boolean)): void;
visitChildElements(visitor: ((element: upstream7.Element) => void)): void;
dispatchNotification(notification: Readonly<{ "__flaxBound:package:flutter/src/widgets/notification_listener.dart::Notification": readonly [] }>): void;
describeElement(name: string, options?: {style?: upstream10.DiagnosticsTreeStyle | undefined}): upstream9.DiagnosticsNode;
describeWidget(name: string, options?: {style?: upstream10.DiagnosticsTreeStyle | undefined}): upstream9.DiagnosticsNode;
describeMissingAncestor(options: {expectedAncestorType: Readonly<{ "__flaxBound:dart:core::Type": readonly [] }>}): DartList<upstream9.DiagnosticsNode>;
describeOwnershipChain(name: string): upstream9.DiagnosticsNode;
}
defineContext("flax.core/flutter#type:BuildContext", ["widget","owner","mounted","debugDoingBuild","size"], _flaxBindingMethods("flax.core/flutter#type:BuildContext", "context", {"findRenderObject":_flaxMemberParameters3,"dependOnInheritedElement":_flaxMemberParameters27,"dependOnInheritedWidgetOfExactType":_flaxMemberParameters28,"getInheritedWidgetOfExactType":_flaxMemberParameters3,"getElementForInheritedWidgetOfExactType":_flaxMemberParameters3,"findAncestorWidgetOfExactType":_flaxMemberParameters3,"findAncestorStateOfType":_flaxMemberParameters3,"findRootAncestorStateOfType":_flaxMemberParameters3,"findAncestorRenderObjectOfType":_flaxMemberParameters3,"visitAncestorElements":_flaxMemberParameters29,"visitChildElements":_flaxMemberParameters29,"dispatchNotification":_flaxMemberParameters30,"describeElement":_flaxMemberParameters31,"describeWidget":_flaxMemberParameters31,"describeMissingAncestor":_flaxMemberParameters32,"describeOwnershipChain":_flaxMemberParameters33}, {"dependOnInheritedWidgetOfExactType":{"id":"dependOnInheritedWidgetOfExactType","parameters":[{"name":"aspect"}]},"getInheritedWidgetOfExactType":{"id":"getInheritedWidgetOfExactType","parameters":[]},"getElementForInheritedWidgetOfExactType":{"id":"getElementForInheritedWidgetOfExactType","parameters":[]},"findAncestorWidgetOfExactType":{"id":"findAncestorWidgetOfExactType","parameters":[]},"findAncestorStateOfType":{"id":"findAncestorStateOfType","parameters":[]},"findRootAncestorStateOfType":{"id":"findRootAncestorStateOfType","parameters":[]},"findAncestorRenderObjectOfType":{"id":"findAncestorRenderObjectOfType","parameters":[]}}));
export const BuildContext: object & _FlaxInstanceType<BuildContext> & _FlaxDartType<BuildContext, readonly ["class", "flax.core/flutter#type:BuildContext", readonly [], false]> = _flaxBindInstanceType<BuildContext, object>({}, "flax.core/flutter#type:BuildContext", ["dart:core::Object"]) as object & _FlaxInstanceType<BuildContext> & _FlaxDartType<BuildContext, readonly ["class", "flax.core/flutter#type:BuildContext", readonly [], false]>;
interface _FlaxSignature0 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream3.InheritedWidget] ? (options?: {aspect?: unknown | null | undefined}) => _Selected0 | null : never : never; }
interface _FlaxSignature1 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream3.InheritedWidget] ? () => _Selected0 | null : never : never; }
interface _FlaxSignature2 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream3.InheritedWidget] ? () => upstream4.InheritedElement | null : never : never; }
interface _FlaxSignature3 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [Widget] ? () => _Selected0 | null : never : never; }
interface _FlaxSignature4 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream5.State<Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>] ? () => _Selected0 | null : never : never; }
interface _FlaxSignature5 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream5.State<Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>>] ? () => _Selected0 | null : never : never; }
interface _FlaxSignature6 extends _FlaxDartSignature { readonly call: this["arguments"] extends readonly [infer _Selected0] ? [_Selected0] extends [upstream2.RenderObject] ? () => _Selected0 | null : never : never; }
