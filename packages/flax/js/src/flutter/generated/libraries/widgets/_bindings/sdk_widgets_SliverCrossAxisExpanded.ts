// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/sdk_widgets_ParentDataWidget';
import type * as upstream1 from '@flax/flutter/rendering/_bindings/sdk_rendering_SliverPhysicalContainerParentData';
import '@flax/flutter/rendering/_bindings/sdk_rendering_SliverPhysicalContainerParentData';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_ProxyWidget';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream4 from '@flax/dart/core/_bindings/flutter_Type';
import '@flax/dart/core/_bindings/flutter_Type';
import type * as upstream5 from '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import '@flax/flutter/rendering/_bindings/sdk_rendering_RenderObject';
import type * as upstream6 from '@flax/flutter/widgets/_bindings/sdk_widgets_ParentDataElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ParentDataElement';
import type * as upstream7 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream8 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
const _flaxMemberParameters0 = [{"name":"renderObject","required":true,"positional":true}] as const;
const _flaxMemberParameters1 = [] as const;
const _flaxMemberParameters2 = [{"name":"properties","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"joiner","required":false,"positional":false},{"name":"minLevel","required":false,"positional":false}] as const;
const _flaxMemberParameters4 = [{"name":"minLevel","required":false,"positional":false},{"name":"prefixLineOne","required":false,"positional":false},{"name":"prefixOtherLines","required":false,"positional":false},{"name":"wrapWidth","required":false,"positional":false}] as const;
const _flaxMemberParameters5 = [{"name":"name","required":false,"positional":false},{"name":"style","required":false,"positional":false}] as const;
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface SliverCrossAxisExpanded extends _FlaxDartWidget, Omit<upstream0.ParentDataWidget<upstream1.SliverPhysicalContainerParentData>, _flaxOwnMembers0>, Omit<upstream2.ProxyWidget, _flaxOwnMembers0 | keyof upstream0.ParentDataWidget<upstream1.SliverPhysicalContainerParentData>>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.ParentDataWidget<upstream1.SliverPhysicalContainerParentData> | keyof upstream2.ProxyWidget>, Readonly<{ "__flaxBound:package:flutter/src/widgets/sliver.dart::SliverCrossAxisExpanded": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::ParentDataWidget": readonly [upstream1.SliverPhysicalContainerParentData] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __SliverCrossAxisExpanded: unique symbol;
readonly [_flaxDartTypeValue]: SliverCrossAxisExpanded;

readonly flex: number;
readonly debugTypicalAncestorWidgetClass: upstream4.Type;
readonly debugTypicalAncestorWidgetDescription: string;
readonly child: Widget;
readonly key: upstream3.Key | null;
applyParentData(renderObject: Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): void;
createElement(): upstream6.ParentDataElement<upstream1.SliverPhysicalContainerParentData>;
debugIsValidRenderObject(renderObject: Readonly<{ "__flaxBound:package:flutter/src/rendering/object.dart::RenderObject": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/gestures/hit_test.dart::HitTestTarget": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTreeMixin": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }>): boolean;
debugCanApplyOutOfTurn(): boolean;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream8.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream8.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream10.DiagnosticsTreeStyle | null | undefined}): upstream9.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream9.DiagnosticsNode>;
}
defineObject("flax.core/sdk_widgets#type:SliverCrossAxisExpanded", ["flex","debugTypicalAncestorWidgetClass","debugTypicalAncestorWidgetDescription","child","key"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:SliverCrossAxisExpanded", "object", {"applyParentData":_flaxMemberParameters0,"createElement":_flaxMemberParameters1,"debugIsValidRenderObject":_flaxMemberParameters0,"debugCanApplyOutOfTurn":_flaxMemberParameters1,"toStringShort":_flaxMemberParameters1,"debugFillProperties":_flaxMemberParameters2,"toStringShallow":_flaxMemberParameters3,"toStringDeep":_flaxMemberParameters4,"toDiagnosticsNode":_flaxMemberParameters5,"debugDescribeChildren":_flaxMemberParameters1}, {}), []);
export function _SliverCrossAxisExpandedFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; flex: number; sliver: Widget }): SliverCrossAxisExpanded {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:SliverCrossAxisExpanded", "", [{"name":"key","required":false,"positional":false},{"name":"flex","required":true,"positional":false},{"name":"sliver","required":true,"positional":false}], [], options) as SliverCrossAxisExpanded;
}
export const SliverCrossAxisExpanded: typeof _SliverCrossAxisExpandedFactory & _FlaxInstanceType<SliverCrossAxisExpanded> & _FlaxDartType<SliverCrossAxisExpanded, readonly ["class", "flax.core/sdk_widgets#type:SliverCrossAxisExpanded", readonly [], false]> = _flaxBindInstanceType<SliverCrossAxisExpanded, typeof _SliverCrossAxisExpandedFactory>(_SliverCrossAxisExpandedFactory, "flax.core/sdk_widgets#type:SliverCrossAxisExpanded", ["flax.core/sdk_widgets#type:ParentDataWidget","flax.core/sdk_widgets#type:ProxyWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _SliverCrossAxisExpandedFactory & _FlaxInstanceType<SliverCrossAxisExpanded> & _FlaxDartType<SliverCrossAxisExpanded, readonly ["class", "flax.core/sdk_widgets#type:SliverCrossAxisExpanded", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "flex" | "debugTypicalAncestorWidgetClass" | "debugTypicalAncestorWidgetDescription" | "child" | "key" | "applyParentData" | "createElement" | "debugIsValidRenderObject" | "debugCanApplyOutOfTurn" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/sliver.dart::SliverCrossAxisExpanded" | "__flaxBound:package:flutter/src/widgets/framework.dart::ParentDataWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::ProxyWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
