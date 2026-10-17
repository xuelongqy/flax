// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
const _flaxMemberParameters0 = [] as const;
const _flaxMemberParameters1 = [{"name":"a","required":true,"positional":true},{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters2 = [{"name":"b","required":true,"positional":true},{"name":"t","required":true,"positional":true}] as const;
const _flaxMemberParameters3 = [{"name":"size","required":true,"positional":true},{"name":"position","required":true,"positional":true},{"name":"textDirection","required":false,"positional":false}] as const;
import type * as upstream0 from '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import '@flax/flutter/widgets/_bindings/flutter_EdgeInsetsGeometry';
import type * as upstream1 from '@flax/flutter/services/_bindings/flutter_Size';
import '@flax/flutter/services/_bindings/flutter_Size';
import type * as upstream2 from '@flax/flutter/gestures/_bindings/flutter_Offset';
import type * as upstream3 from '@flax/flutter/services/_bindings/flutter_TextDirection';
import '@flax/flutter/services/_bindings/flutter_TextDirection';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface Decoration extends Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __Decoration: unique symbol;

readonly padding: upstream0.EdgeInsetsGeometry;
readonly isComplex: boolean;
toStringShort(): string;
debugAssertIsValid(): boolean;
lerpFrom(a: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> | null, t: number): Decoration | null;
lerpTo(b: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> | null, t: number): Decoration | null;
hitTest(size: Readonly<{ "__flaxBound:dart:ui::Size": readonly [] }>, position: upstream2.Offset, options?: {textDirection?: upstream3.TextDirection | null | undefined}): boolean;
}
defineObject("flax.core/flutter#type:Decoration", ["padding","isComplex"], [], _flaxBindingMethods("flax.core/flutter#type:Decoration", "object", {"toStringShort":_flaxMemberParameters0,"debugAssertIsValid":_flaxMemberParameters0,"lerpFrom":_flaxMemberParameters1,"lerpTo":_flaxMemberParameters2,"hitTest":_flaxMemberParameters3}, {}), []);
export namespace _DecorationFactory { export function lerp(a: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> | null, b: Readonly<{ "__flaxBound:package:flutter/src/painting/decoration.dart::Decoration": readonly [] }> | null, t: number): Decoration | null {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:Decoration.lerp", [a, b, t]);
return _flaxResult as Decoration | null;
} }
export const Decoration: typeof _DecorationFactory & _FlaxInstanceType<Decoration> & _FlaxDartType<Decoration, readonly ["class", "flax.core/flutter#type:Decoration", readonly [], false]> = _flaxBindInstanceType<Decoration, typeof _DecorationFactory>(_DecorationFactory, "flax.core/flutter#type:Decoration", ["dart:core::Object","package:flutter/src/foundation/diagnostics.dart::Diagnosticable"]) as typeof _DecorationFactory & _FlaxInstanceType<Decoration> & _FlaxDartType<Decoration, readonly ["class", "flax.core/flutter#type:Decoration", readonly [], false]>;
