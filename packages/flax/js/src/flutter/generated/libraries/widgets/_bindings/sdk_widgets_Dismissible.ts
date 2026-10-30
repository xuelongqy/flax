// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import '@flax/flutter/widgets/_bindings/components_StatefulWidget';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream2 from '@flax/flutter/widgets/_bindings/sdk_widgets_DismissDirection';
import '@flax/flutter/widgets/_bindings/sdk_widgets_DismissDirection';
import type * as upstream3 from '@flax/flutter/widgets/_bindings/sdk_widgets_DismissUpdateDetails';
import '@flax/flutter/widgets/_bindings/sdk_widgets_DismissUpdateDetails';
import type * as upstream4 from '@flax/dart/core/_bindings/flutter_Duration';
import '@flax/dart/core/_bindings/flutter_Duration';
import type * as upstream5 from '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import '@flax/flutter/gestures/_bindings/flutter_DragStartBehavior';
import type * as upstream6 from '@flax/flutter/rendering/_bindings/flutter_HitTestBehavior';
import '@flax/flutter/rendering/_bindings/flutter_HitTestBehavior';
import type * as upstream7 from '@flax/flutter/widgets/_bindings/components_State';
import '@flax/flutter/widgets/_bindings/components_State';
import type * as upstream8 from '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import '@flax/flutter/widgets/_bindings/sdk_widgets_StatefulElement';
import type * as upstream9 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream10 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import type * as upstream11 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream12 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream13 from '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import '@flax/flutter/widgets/_bindings/sdk_widgets_Widget';
import { _flaxMemberParameters2 } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/widgets/_bindings/sdk_widgets.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Dismissible extends _FlaxDartWidget, Omit<upstream0.StatefulWidget, _flaxOwnMembers0>, Omit<Widget, _flaxOwnMembers0 | keyof upstream0.StatefulWidget>, Readonly<{ "__flaxBound:package:flutter/src/widgets/dismissible.dart::Dismissible": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/widgets/framework.dart::Widget": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __Dismissible: unique symbol;
readonly [_flaxDartTypeValue]: Dismissible;

readonly child: Widget;
readonly background: Widget | null;
readonly secondaryBackground: Widget | null;
readonly confirmDismiss: ((direction: upstream2.DismissDirection) => Promise<boolean | null>) | null;
readonly onResize: (() => void) | null;
readonly onDismissed: ((direction: upstream2.DismissDirection) => void) | null;
readonly direction: upstream2.DismissDirection;
readonly resizeDuration: upstream4.Duration | null;
readonly dismissThresholds: DartMap<upstream2.DismissDirection, number>;
readonly movementDuration: upstream4.Duration;
readonly crossAxisEndOffset: number;
readonly dragStartBehavior: upstream5.DragStartBehavior;
readonly behavior: upstream6.HitTestBehavior;
readonly onUpdate: ((details: Readonly<{ "__flaxBound:package:flutter/src/widgets/dismissible.dart::DismissUpdateDetails": readonly [] }>) => void) | null;
readonly key: upstream1.Key | null;
createState(): upstream7.State<Dismissible>;
createElement(): upstream8.StatefulElement;
toStringShort(): string;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toStringShallow(options?: {joiner?: string | undefined; minLevel?: upstream10.DiagnosticLevel | undefined}): string;
toStringDeep(options?: {minLevel?: upstream10.DiagnosticLevel | undefined; prefixLineOne?: string | undefined; prefixOtherLines?: string | null | undefined; wrapWidth?: number | undefined}): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream12.DiagnosticsTreeStyle | null | undefined}): upstream11.DiagnosticsNode;
debugDescribeChildren(): DartList<upstream11.DiagnosticsNode>;
}
defineObject("flax.core/sdk_widgets#type:Dismissible", ["child","background","secondaryBackground","confirmDismiss","onResize","onDismissed","direction","resizeDuration","dismissThresholds","movementDuration","crossAxisEndOffset","dragStartBehavior","behavior","onUpdate","key"], [], _flaxBindingMethods("flax.core/sdk_widgets#type:Dismissible", "object", {"createState":_flaxMemberParameters2,"createElement":_flaxMemberParameters2}, {}), [], undefined, "flax.core/sdk_widgets#type:Widget");
export function _DismissibleFactory(options: { key: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }>; child: Widget; background?: Widget | null | undefined; secondaryBackground?: Widget | null | undefined; confirmDismiss?: ((direction: upstream2.DismissDirection) => Promise<boolean | null>) | null | undefined; onResize?: (() => void) | null | undefined; onUpdate?: ((details: upstream3.DismissUpdateDetails) => void) | null | undefined; onDismissed?: ((direction: upstream2.DismissDirection) => void) | null | undefined; direction?: upstream2.DismissDirection | undefined; resizeDuration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream4.Duration] }> | null | undefined; dismissThresholds?: DartMapInput<upstream2.DismissDirection, number, upstream2.DismissDirection, number> | undefined; movementDuration?: Readonly<{ "__flaxBound:dart:core::Duration": readonly [] }> & Readonly<{ "__flaxBound:dart:core::Comparable": readonly [upstream4.Duration] }> | undefined; crossAxisEndOffset?: number | undefined; dragStartBehavior?: upstream5.DragStartBehavior | undefined; behavior?: upstream6.HitTestBehavior | undefined }): Dismissible {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/sdk_widgets#type:Dismissible", "", [{"name":"key","required":true},{"name":"child","required":true},{"name":"background"},{"name":"secondaryBackground"},{"name":"confirmDismiss"},{"name":"onResize"},{"name":"onUpdate"},{"name":"onDismissed"},{"name":"direction"},{"name":"resizeDuration"},{"name":"dismissThresholds"},{"name":"movementDuration"},{"name":"crossAxisEndOffset"},{"name":"dragStartBehavior"},{"name":"behavior"}], [], options) as Dismissible;
}
export declare namespace _DismissibleFactory { const __flaxJsx: { readonly props: globalThis.Omit<(globalThis.NonNullable<globalThis.Parameters<typeof _DismissibleFactory>[0]>), "child"> & ({ "child": (globalThis.NonNullable<globalThis.Parameters<typeof _DismissibleFactory>[0]>)["child"]; children?: never } | { "child"?: never; children: (globalThis.NonNullable<globalThis.Parameters<typeof _DismissibleFactory>[0]>)["child"] }); readonly slot: "child"; readonly many: false; }; }
export const Dismissible: typeof _DismissibleFactory & _FlaxInstanceType<Dismissible> & _FlaxDartType<Dismissible, readonly ["class", "flax.core/sdk_widgets#type:Dismissible", readonly [], false]> = _flaxBindInstanceType<Dismissible, typeof _DismissibleFactory>(_DismissibleFactory, "flax.core/sdk_widgets#type:Dismissible", ["flax.core/components#type:StatefulWidget","flax.core/sdk_widgets#type:Widget","flax.core/sdk_foundation#type:DiagnosticableTree","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _DismissibleFactory & _FlaxInstanceType<Dismissible> & _FlaxDartType<Dismissible, readonly ["class", "flax.core/sdk_widgets#type:Dismissible", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | 'kind' | "child" | "background" | "secondaryBackground" | "confirmDismiss" | "onResize" | "onDismissed" | "direction" | "resizeDuration" | "dismissThresholds" | "movementDuration" | "crossAxisEndOffset" | "dragStartBehavior" | "behavior" | "onUpdate" | "key" | "createState" | "createElement" | "toStringShort" | "debugFillProperties" | "toStringShallow" | "toStringDeep" | "toDiagnosticsNode" | "debugDescribeChildren" | "__flaxBound:package:flutter/src/widgets/dismissible.dart::Dismissible" | "__flaxBound:package:flutter/src/widgets/framework.dart::StatefulWidget" | "__flaxBound:package:flutter/src/widgets/framework.dart::Widget" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
