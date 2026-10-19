// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/dart/core/_bindings/flutter_DateTime';
import '@flax/dart/core/_bindings/flutter_DateTime';
import type * as upstream1 from '@flax/dart/io/_bindings/sdk_dependencies_FileSystemEntityType';
import '@flax/dart/io/_bindings/sdk_dependencies_FileSystemEntityType';
import { _flaxMemberParameters2 } from "@flax/flutter/vector_math/_bindings/sdk_dependencies.__module";
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/flutter/vector_math/_bindings/sdk_dependencies.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface FileStat extends Readonly<{ "__flaxBound:dart:io::FileStat": readonly [] }> { readonly __FileStat: unique symbol;
readonly [_flaxDartTypeValue]: FileStat;

readonly changed: upstream0.DateTime;
readonly modified: upstream0.DateTime;
readonly accessed: upstream0.DateTime;
readonly type: upstream1.FileSystemEntityType;
readonly mode: number;
readonly size: number;
toString(): string;
modeString(): string;
}
defineObject("flax.core/sdk_dependencies#type:FileStat", ["changed","modified","accessed","type","mode","size"], [], _flaxBindingMethods("flax.core/sdk_dependencies#type:FileStat", "object", {"toString":_flaxMemberParameters2,"modeString":_flaxMemberParameters2}, {}), []);
export namespace _FileStatFactory { export function statSync(path: string): FileStat {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dependencies#function:FileStat.statSync", [path]);
return _flaxResult as FileStat;
} }
export namespace _FileStatFactory { export function stat(path: string): Promise<FileStat> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/sdk_dependencies#function:FileStat.stat", [path]);
return _flaxResult as Promise<FileStat>;
} }
export const FileStat: typeof _FileStatFactory & _FlaxInstanceType<FileStat> & _FlaxDartType<FileStat, readonly ["class", "flax.core/sdk_dependencies#type:FileStat", readonly [], false]> = _flaxBindInstanceType<FileStat, typeof _FileStatFactory>(_FileStatFactory, "flax.core/sdk_dependencies#type:FileStat", ["dart:core::Object"]) as typeof _FileStatFactory & _FlaxInstanceType<FileStat> & _FlaxDartType<FileStat, readonly ["class", "flax.core/sdk_dependencies#type:FileStat", readonly [], false]>;
