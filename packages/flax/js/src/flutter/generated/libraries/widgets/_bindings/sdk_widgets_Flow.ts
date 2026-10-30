// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/developer/_bindings/sdk_dependencies_Flow';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/sdk_widgets_MultiChildRenderObjectWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_MultiChildRenderObjectWidget';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_RenderObjectWidget';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream4 from '@flax/flutter/rendering/_bindings/sdk_rendering_FlowDelegate';
import '@flax/flutter/rendering/_bindings/sdk_rendering_FlowDelegate';
import type * as upstream5 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream6 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderFlow';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderFlow';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_MultiChildRenderObjectElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_MultiChildRenderObjectElement';
import type * as upstream9 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream14 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderBox';
import type * as upstream15 from '@flax/flutter/rendering/_bindings/sdk_rendering_FlowParentData';
import { _flaxMemberParameters0, _flaxMemberParameters1 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Flow extends _FlaxDartWidget, Omit<upstream1.MultiChildRenderObjectWidget, _flaxOwnMembers0>, Omit<upstream2.RenderObjectWidget, _flaxOwnMembers0 | keyof upstream1.MultiChildRenderObjectWidget>, Omit<Widget, _flaxOwnMembers0 | keyof upstream1.MultiChildRenderObjectWidget | keyof upstream2.RenderObjectWidget>, Readonly<{ "__flaxBound:package:flutter/src/widgets/basic.dart::Flow": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::MultiChildRenderObjectWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::RenderObjectWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __Flow: unique symbol;
readonly [_flaxDartTypeValue]: Flow;

readonly delegate: upstream4.FlowDelegate;
readonly clipBehavior: upstream5.Clip;
readonly children: DartList<Widget>;
readonly key: upstream3.Key | null;
createRenderObject(context: upstream7.BuildContext): upstream6.RenderFlow;
updateRenderObject(context: upstream7.BuildContext, renderObject: Readonly<{ "__flaxBound:package:flutter/src/rendering/flow.dart::RenderFlow": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBox": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/flow.dart::FlowPaintingContext": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::ContainerRenderObjectMixin": readonly [upstream14.RenderBox, upstream15.FlowParentData] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/box.dart::RenderBoxContainerDefaultsMixin": readonly [upstream14.RenderBox, upstream15.FlowParentData] }>): void;
createElement(): upstream8.MultiChildRenderObjectElement;
didUnmountRenderObject(renderObject: Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream11.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream11.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream13.DiagnosticsTreeStyle | null | undefined}): upstream12.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream12.DiagnosticsNode>;
}
defineObject("flax.core/sdk_widgets#type:Flow", ["delegate","clipBehavior","children","key"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:Flow", "object", {"createRenderObject":_flaxMemberParameters0,"updateRenderObject":_flaxMemberParameters1}, {}), [], undefined, "flax.core/sdk_widgets#type:MultiChildRenderObjectWidget");
export function _FlowFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; delegate: Readonly<{ "__flaxBound:package:flutter/src/rendering/flow.dart::FlowDelegate": readonly [] }>; children?: DartListInput<Widget, Widget> | undefined; clipBehavior?: upstream5.Clip | undefined }): Flow {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:Flow", "", [{"name":"key"},{"name":"delegate","required":true},{"name":"children"},{"name":"clipBehavior"}], [], options) as Flow;
}
export declare namespace _FlowFactory { const __flaxJsx: { readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _FlowFactory>[0]>), "children"> & { children?: (globalThis.NonNullable<globalThis.Parameters<typeof _FlowFactory>[0]>)["children"] | Widget }; readonly slot: "children"; readonly many: true; }; }
export namespace _FlowFactory {
export function unwrapped(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; delegate: Readonly<{ "__flaxBound:package:flutter/src/rendering/flow.dart::FlowDelegate": readonly [] }>; children?: DartListInput<Widget, Widget> | undefined; clipBehavior?: upstream5.Clip | undefined }): Flow {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:Flow", "unwrapped", [{"name":"key"},{"name":"delegate","required":true},{"name":"children"},{"name":"clipBehavior"}], [], options) as Flow;
}
export declare namespace unwrapped { const __flaxJsx: { readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof unwrapped>[0]>), "children"> & { children?: (globalThis.NonNullable<globalThis.Parameters<typeof unwrapped>[0]>)["children"] | Widget }; readonly slot: "children"; readonly many: true; }; }
}
export const Flow: typeof _FlowFactory & _FlaxInstanceType<Flow> & _FlaxDartType<Flow, readonly ["class", "flax.core/sdk_widgets#type:Flow", readonly [], false]> = _flaxBindInstanceType<Flow, typeof _FlowFactory>(_FlowFactory, "flax.core/sdk_widgets#type:Flow", ["flax.core/sdk_widgets#type:MultiChildRenderObjectWidget","flax.core/sdk_widgets#type:RenderObjectWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _FlowFactory & _FlaxInstanceType<Flow> & _FlaxDartType<Flow, readonly ["class", "flax.core/sdk_widgets#type:Flow", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "delegate" | "clipBehavior" | "children" | "key" | "createRenderObject" | "updateRenderObject" | "createElement" | "didUnmountRenderObject" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/basic.dart::Flow" | "__flaxBound:package:flutter/src/widgets/framework.dart::MultiChildRenderObjectWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::RenderObjectWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
