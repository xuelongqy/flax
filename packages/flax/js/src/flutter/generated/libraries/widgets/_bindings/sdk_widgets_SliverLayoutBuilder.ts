// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ConstrainedLayoutBuilder';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverConstraints';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverConstraints';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_AbstractLayoutBuilder';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_RenderObjectWidget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RenderObjectWidget';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_RenderAbstractLayoutBuilderMixin';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RenderAbstractLayoutBuilderMixin';
import type * as upstream7 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderSliver';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderSliver';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_RenderObjectElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_RenderObjectElement';
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
import { _flaxMemberParameters0, _flaxMemberParameters3 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SliverLayoutBuilder extends _FlaxDartWidget, Omit<upstream0.ConstrainedLayoutBuilder<upstream1.SliverConstraints>, _flaxOwnMembers0>, Omit<upstream2.AbstractLayoutBuilder<upstream1.SliverConstraints>, _flaxOwnMembers0 | keyof upstream0.ConstrainedLayoutBuilder<upstream1.SliverConstraints>>, Omit<upstream3.RenderObjectWidget, _flaxOwnMembers0 | keyof upstream0.ConstrainedLayoutBuilder<upstream1.SliverConstraints> | keyof upstream2.AbstractLayoutBuilder<upstream1.SliverConstraints>>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.ConstrainedLayoutBuilder<upstream1.SliverConstraints> | keyof upstream2.AbstractLayoutBuilder<upstream1.SliverConstraints> | keyof upstream3.RenderObjectWidget>, Readonly<{ "__flaxBound:package:flutter/src/widgets/sliver_layout_builder.dart::SliverLayoutBuilder": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/layout_builder.dart::ConstrainedLayoutBuilder": readonly [upstream1.SliverConstraints] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/layout_builder.dart::AbstractLayoutBuilder": readonly [upstream1.SliverConstraints] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::RenderObjectWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __SliverLayoutBuilder: unique symbol;
readonly [_flaxDartTypeValue]: SliverLayoutBuilder;

readonly builder: ((context: upstream5.BuildContext, constraints: Readonly<{ "__flaxBound:package:flutter/src/rendering/sliver.dart::SliverConstraints": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::Constraints": readonly [] }>) => Widget);
readonly key: upstream4.Key | null;
createRenderObject(context: upstream5.BuildContext): upstream6.RenderAbstractLayoutBuilderMixin<upstream1.SliverConstraints, upstream7.RenderSliver>;
createElement(): upstream8.RenderObjectElement;
updateShouldRebuild(oldWidget: upstream2.AbstractLayoutBuilder<upstream1.SliverConstraints>): boolean;
updateRenderObject(context: upstream5.BuildContext, renderObject: Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
didUnmountRenderObject(renderObject: Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream11.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream11.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream13.DiagnosticsTreeStyle | null | undefined}): upstream12.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream12.DiagnosticsNode>;
}
defineObject("flax.core/sdk_widgets#type:SliverLayoutBuilder", ["builder","key"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:SliverLayoutBuilder", "object", {"createRenderObject":_flaxMemberParameters0,"updateShouldRebuild":_flaxMemberParameters3}, {}), [], undefined, "flax.core/sdk_widgets#type:RenderObjectWidget");
export function _SliverLayoutBuilderFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; builder: ((context: upstream5.BuildContext, constraints: upstream1.SliverConstraints) => Widget) }): SliverLayoutBuilder {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:SliverLayoutBuilder", "", [{"name":"key"},{"name":"builder","required":true}], [], options) as SliverLayoutBuilder;
}
export const SliverLayoutBuilder: typeof _SliverLayoutBuilderFactory & _FlaxInstanceType<SliverLayoutBuilder> & _FlaxDartType<SliverLayoutBuilder, readonly ["class", "flax.core/sdk_widgets#type:SliverLayoutBuilder", readonly [], false]> = _flaxBindInstanceType<SliverLayoutBuilder, typeof _SliverLayoutBuilderFactory>(_SliverLayoutBuilderFactory, "flax.core/sdk_widgets#type:SliverLayoutBuilder", ["flax.core/sdk_widgets#type:ConstrainedLayoutBuilder","flax.core/sdk_widgets#type:AbstractLayoutBuilder","flax.core/sdk_widgets#type:RenderObjectWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _SliverLayoutBuilderFactory & _FlaxInstanceType<SliverLayoutBuilder> & _FlaxDartType<SliverLayoutBuilder, readonly ["class", "flax.core/sdk_widgets#type:SliverLayoutBuilder", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "builder" | "key" | "createRenderObject" | "createElement" | "updateShouldRebuild" | "updateRenderObject" | "didUnmountRenderObject" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/sliver_layout_builder.dart::SliverLayoutBuilder" | "__flaxBound:package:flutter/src/widgets/layout_builder.dart::ConstrainedLayoutBuilder" | "__flaxBound:package:flutter/src/widgets/layout_builder.dart::AbstractLayoutBuilder" | "__flaxBound:package:flutter/src/widgets/framework.dart::RenderObjectWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
