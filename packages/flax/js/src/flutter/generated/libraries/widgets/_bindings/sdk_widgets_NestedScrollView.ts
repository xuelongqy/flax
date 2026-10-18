// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import '@flax/flutter/widgets/_bindings/flutter_ScrollController';
import type * as upstream3 from '@flax/flutter/painting/_bindings/flutter_Axis';
import '@flax/flutter/painting/_bindings/flutter_Axis';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import '@flax/flutter/widgets/_bindings/flutter_ScrollPhysics';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import type * as upstream6 from '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import type * as upstream7 from '@flax/dart/ui/_bindings/flutter_Clip';
import '@flax/dart/ui/_bindings/flutter_Clip';
import type * as upstream8 from '@flax/flutter/rendering/_bindings/flutter_HitTestBehavior';
import '@flax/flutter/rendering/_bindings/flutter_HitTestBehavior';
import type * as upstream9 from '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollBehavior';
import '@flax/flutter/widgets/_bindings/sdk_widgets_ScrollBehavior';
import type * as upstream10 from '@flax/flutter/widgets/_bindings/sdk_widgets_SliverOverlapAbsorberHandle';
import '@flax/flutter/widgets/_bindings/sdk_widgets_SliverOverlapAbsorberHandle';
import type * as upstream11 from '@flax/flutter/widgets/_bindings/sdk_widgets_NestedScrollViewState';
import '@flax/flutter/widgets/_bindings/sdk_widgets_NestedScrollViewState';
import type * as upstream12 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream13 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream14 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream15 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream16 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"properties","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"joiner","required":false,"positional":false},{"name":"minLevel","required":false,"positional":false}] as const;
const _flaxMemberParameters3 = [{"name":"minLevel","required":false,"positional":false},{"name":"prefixLineOne","required":false,"positional":false},{"name":"prefixOtherLines","required":false,"positional":false},{"name":"wrapWidth","required":false,"positional":false}] as const;
const _flaxMemberParameters4 = [{"name":"name","required":false,"positional":false},{"name":"style","required":false,"positional":false}] as const;
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface NestedScrollView extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{ "__flaxBound:package:flutter/src/widgets/nested_scroll_view.dart::NestedScrollView": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __NestedScrollView: unique symbol;
readonly [_flaxDartTypeValue]: NestedScrollView;

readonly controller: upstream2.ScrollController | null;
readonly scrollDirection: upstream3.Axis;
readonly reverse: boolean;
readonly physics: upstream4.ScrollPhysics | null;
readonly headerSliverBuilder: ((context: upstream5.BuildContext, innerBoxIsScrolled: boolean) => DartList<Widget>);
readonly body: Widget;
readonly dragStartBehavior: upstream6.DragStartBehavior;
readonly floatHeaderSlivers: boolean;
readonly clipBehavior: upstream7.Clip;
readonly hitTestBehavior: upstream8.HitTestBehavior;
readonly restorationId: string | null;
readonly scrollBehavior: upstream9.ScrollBehavior | null;
readonly key: upstream1.Key | null;
createState(): upstream11.NestedScrollViewState;
createElement(): upstream12.StatefulElement;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream14.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream14.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream16.DiagnosticsTreeStyle | null | undefined}): upstream15.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream15.DiagnosticsNode>;
}
defineObject("flax.core/sdk_widgets#type:NestedScrollView", ["controller","scrollDirection","reverse","physics","headerSliverBuilder","body","dragStartBehavior","floatHeaderSlivers","clipBehavior","hitTestBehavior","restorationId","scrollBehavior","key"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:NestedScrollView", "object", {"createState":_flaxMemberParameters0,"createElement":_flaxMemberParameters0,"toStringShort":_flaxMemberParameters0,"debugFillProperties":_flaxMemberParameters1,"toStringShallow":_flaxMemberParameters2,"toStringDeep":_flaxMemberParameters3,"toDiagnosticsNode":_flaxMemberParameters4,"debugDescribeChildren":_flaxMemberParameters0}, {}), []);
export function _NestedScrollViewFactory(options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; controller?: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_controller.dart::ScrollController": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::ChangeNotifier": readonly [] }> & Readonly<{ "__flaxBound:package:flutter/src/foundation/change_notifier.dart::Listenable": readonly [] }> | null | undefined; scrollDirection?: upstream3.Axis | undefined; reverse?: boolean | undefined; physics?: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_physics.dart::ScrollPhysics": readonly [] }> | null | undefined; headerSliverBuilder: ((context: upstream5.BuildContext, innerBoxIsScrolled: boolean) => DartListInput<Widget, Widget>); body: Widget; dragStartBehavior?: upstream6.DragStartBehavior | undefined; floatHeaderSlivers?: boolean | undefined; clipBehavior?: upstream7.Clip | undefined; hitTestBehavior?: upstream8.HitTestBehavior | undefined; restorationId?: string | null | undefined; scrollBehavior?: Readonly<{ "__flaxBound:package:flutter/src/widgets/scroll_configuration.dart::ScrollBehavior": readonly [] }> | null | undefined }): NestedScrollView {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:NestedScrollView", "", [{"name":"key","required":false,"positional":false},{"name":"controller","required":false,"positional":false},{"name":"scrollDirection","required":false,"positional":false},{"name":"reverse","required":false,"positional":false},{"name":"physics","required":false,"positional":false},{"name":"headerSliverBuilder","required":true,"positional":false},{"name":"body","required":true,"positional":false},{"name":"dragStartBehavior","required":false,"positional":false},{"name":"floatHeaderSlivers","required":false,"positional":false},{"name":"clipBehavior","required":false,"positional":false},{"name":"hitTestBehavior","required":false,"positional":false},{"name":"restorationId","required":false,"positional":false},{"name":"scrollBehavior","required":false,"positional":false}], [], options) as NestedScrollView;
}
export namespace _NestedScrollViewFactory { export function sliverOverlapAbsorberHandleFor(context: upstream5.BuildContext): upstream10.SliverOverlapAbsorberHandle {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_widgets#function:NestedScrollView.sliverOverlapAbsorberHandleFor", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as upstream10.SliverOverlapAbsorberHandle;
} }
export const NestedScrollView: typeof _NestedScrollViewFactory & _FlaxInstanceType<NestedScrollView> & _FlaxDartType<NestedScrollView, readonly ["class", "flax.core/sdk_widgets#type:NestedScrollView", readonly [], false]> = _flaxBindInstanceType<NestedScrollView, typeof _NestedScrollViewFactory>(_NestedScrollViewFactory, "flax.core/sdk_widgets#type:NestedScrollView", ["flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _NestedScrollViewFactory & _FlaxInstanceType<NestedScrollView> & _FlaxDartType<NestedScrollView, readonly ["class", "flax.core/sdk_widgets#type:NestedScrollView", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "controller" | "scrollDirection" | "reverse" | "physics" | "headerSliverBuilder" | "body" | "dragStartBehavior" | "floatHeaderSlivers" | "clipBehavior" | "hitTestBehavior" | "restorationId" | "scrollBehavior" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/nested_scroll_view.dart::NestedScrollView" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
