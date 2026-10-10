// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindInstanceType as _flaxHostBindInstanceType, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineEnum as _flaxHostDefineEnum, invokeEnum as _flaxHostInvokeEnum, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [{"name":"context","required":true,"positional":true,"context":"flax.core/flutter#type:BuildContext"}] as const;
import { FlaxProxyBase as _FlaxProxyBase, defineProxyBase as _flaxDefineProxyBase, widgetProxyFactory as _flaxWidgetProxyFactory, type DartWidget as _FlaxDartWidget } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/foundation/_bindings/flutter_Key';
import '@flax/flutter/foundation/_bindings/flutter_Key';
import type * as upstream1 from '@flax/flutter/widgets/_bindings/flutter_TextStyle';
import '@flax/flutter/widgets/_bindings/flutter_TextStyle';
import type * as upstream2 from '@flax/flutter/services/_bindings/flutter_TextAlign';
import '@flax/flutter/services/_bindings/flutter_TextAlign';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_TextDirection';
import '@flax/flutter/services/_bindings/flutter_TextDirection';
import type * as upstream4 from '@flax/flutter/widgets/_bindings/flutter_TextOverflow';
import '@flax/flutter/widgets/_bindings/flutter_TextOverflow';
import type * as upstream5 from '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import '@flax/flutter/widgets/_bindings/flutter_BuildContext';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
defineObject("flax.core/flutter#type:Text", ["data","key"], [], _flaxBindingMethods("flax.core/flutter#type:Text", "object", {"build":_flaxMemberParameters0}), []);
export type Text = TextDescription | _TextNative;
export type TextDescription = WidgetDescription & { readonly type: "flax.core/flutter#type:Text"; };
const _TextProxy = {nativeWidget: true, type: "flax.core/flutter#type:Text", parameters: [{"name":"data","required":true,"positional":true},{"name":"key","required":false,"positional":false},{"name":"style","required":false,"positional":false},{"name":"textAlign","required":false,"positional":false},{"name":"textDirection","required":false,"positional":false},{"name":"softWrap","required":false,"positional":false},{"name":"overflow","required":false,"positional":false},{"name":"maxLines","required":false,"positional":false}], methods: {"build":_flaxMemberParameters0}, getters: ["data","key"], setters: [], superMembers: ["get:data","get:key","build"]} as const;
export interface _TextNative extends _FlaxDartWidget {
build(context: upstream5.BuildContext): Widget;
get data(): string | null;
get key(): upstream0.Key | null;
}
export abstract class _TextNative extends _FlaxProxyBase {
static declare [globalThis.Symbol.hasInstance]: _FlaxInstanceType<Text>[typeof globalThis.Symbol.hasInstance];
constructor(data: string, options?: {key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; style?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> | null | undefined; textAlign?: upstream2.TextAlign | null | undefined; textDirection?: upstream3.TextDirection | null | undefined; softWrap?: boolean | null | undefined; overflow?: upstream4.TextOverflow | null | undefined; maxLines?: number | null | undefined}) { super(_TextProxy, Array.from(arguments)); }
}
_flaxDefineProxyBase(_TextNative.prototype, _TextProxy, ["data","key"]);
function _TextFactory(data: Bindable<string>, options: { key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; style?: Bindable<Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> | null> | undefined; textAlign?: Bindable<upstream2.TextAlign | null> | undefined; textDirection?: Bindable<upstream3.TextDirection | null> | undefined; softWrap?: Bindable<boolean | null> | undefined; overflow?: Bindable<upstream4.TextOverflow | null> | undefined; maxLines?: Bindable<number | null> | undefined } = {}): Text {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:Text", "", [{"name":"data","required":true,"positional":true,"readonly":true,"defaultValue":null},{"name":"key","required":false,"positional":false,"readonly":true,"defaultValue":null},{"name":"style","required":false,"positional":false},{"name":"textAlign","required":false,"positional":false},{"name":"textDirection","required":false,"positional":false},{"name":"softWrap","required":false,"positional":false},{"name":"overflow","required":false,"positional":false},{"name":"maxLines","required":false,"positional":false}], [data], options) as Text;
}
const _TextBinding = _flaxWidgetProxyFactory(_TextFactory, _TextNative) as typeof _TextFactory & { new(data: string, options?: {key?: Readonly<{ "__flaxBound:package:flutter/src/foundation/key.dart::Key": readonly [] }> | null | undefined; style?: Readonly<{ "__flaxBound:package:flutter/src/painting/text_style.dart::TextStyle": readonly [] }> | null | undefined; textAlign?: upstream2.TextAlign | null | undefined; textDirection?: upstream3.TextDirection | null | undefined; softWrap?: boolean | null | undefined; overflow?: upstream4.TextOverflow | null | undefined; maxLines?: number | null | undefined}): _TextNative; };
export const Text: typeof _TextBinding & _FlaxInstanceType<Text> = _flaxBindInstanceType<Text, typeof _TextBinding>(_TextBinding, "flax.core/flutter#type:Text", ["package:flutter/src/widgets/framework.dart::StatelessWidget","package:flutter/src/widgets/framework.dart::Widget","package:flutter/src/foundation/diagnostics.dart::DiagnosticableTree","dart:core::Object","package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]);
