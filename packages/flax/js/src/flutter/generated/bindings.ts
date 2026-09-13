// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
function _flaxInstallBindingModule(
  moduleId: string,
  uiProtocol: number,
  requiredCapabilities: readonly string[],
) {
  if (typeof moduleId !== 'string' || moduleId.length === 0 || moduleId.indexOf('/') < 1 || moduleId.indexOf('/') !== moduleId.lastIndexOf('/') || moduleId.startsWith('/') || moduleId.endsWith('/')) {
    throw new TypeError('Invalid binding moduleId');
  }
  if (uiProtocol !== bindingVersion) {
    throw new TypeError(`Incompatible binding uiProtocol: ${uiProtocol}`);
  }
  let previous: string | undefined;
  for (const capability of requiredCapabilities) {
    if (typeof capability !== 'string' || (previous !== undefined && capability <= previous)) {
      throw new TypeError('requiredCapabilities must be sorted unique strings');
    }
    previous = capability;
    throw new TypeError(`Unsupported binding capability ${capability}`);
  }
  return Object.freeze({
    moduleId,
    uiProtocol,
    requiredCapabilities: Object.freeze([...requiredCapabilities]),
    construct: _flaxHostConstruct,
    constructProxy: _flaxHostConstructProxy,
    constructObject: _flaxHostConstructObject,
    constructDeferredObject: _flaxHostConstructDeferredObject,
    constructStream: _flaxHostConstructStream,
    constructAsyncIterableStream: _flaxHostConstructAsyncIterableStream,
    defineObject: _flaxHostDefineObject,
    defineStream: _flaxHostDefineStream,
    invokeObject: _flaxHostInvokeObject,
    invokeObjectStatic: _flaxHostInvokeObjectStatic,
    invokeStream: _flaxHostInvokeStream,
    enumValue: _flaxHostEnumValue,
    defineContext: _flaxHostDefineContext,
    defineState: _flaxHostDefineState,
    contextHandle: _flaxHostContextHandle,
    invokeStatic: _flaxHostInvokeStatic,
    invokeInstance: _flaxHostInvokeInstance,
    invokeTopLevel: _flaxHostInvokeTopLevel,
  });
}
export const flutterBindingModule = _flaxInstallBindingModule("flax.core/flutter", 20, Object.freeze([]) as readonly string[]);
const { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } = flutterBindingModule;
export interface Offset {
  readonly dx: number;
  readonly dy: number;
}
export interface PhysicalKeyboardKey {
  readonly usbHidUsage: number;
}
export interface LogicalKeyboardKey {
  readonly keyId: number;
  readonly keyLabel: string;
}
export interface PointerEvent {
  readonly pointer: number;
  readonly device: number;
  readonly kind: "touch" | "mouse" | "stylus" | "invertedStylus" | "trackpad" | "unknown";
  readonly buttons: number;
  readonly down: boolean;
  readonly position: Offset;
  readonly localPosition: Offset;
  readonly delta: Offset;
  readonly localDelta: Offset;
  readonly pressure: number;
  readonly pressureMin: number;
  readonly pressureMax: number;
  readonly size: number;
  readonly synthesized: boolean;
}
export interface PointerScrollEvent {
  readonly pointer: number;
  readonly device: number;
  readonly kind: "touch" | "mouse" | "stylus" | "invertedStylus" | "trackpad" | "unknown";
  readonly buttons: number;
  readonly down: boolean;
  readonly position: Offset;
  readonly localPosition: Offset;
  readonly delta: Offset;
  readonly localDelta: Offset;
  readonly pressure: number;
  readonly pressureMin: number;
  readonly pressureMax: number;
  readonly size: number;
  readonly synthesized: boolean;
  readonly scrollDelta: Offset;
}
export interface KeyEvent {
  readonly type: string;
  readonly physicalKey: PhysicalKeyboardKey;
  readonly logicalKey: LogicalKeyboardKey;
  readonly character: string | null;
  readonly synthesized: boolean;
}
export interface ConnectionState extends DartEnum { readonly type: "flax.core/flutter#type:ConnectionState"; }
export const ConnectionState = Object.freeze({
none: enumValue<ConnectionState>("flax.core/flutter#type:ConnectionState", "none"),
waiting: enumValue<ConnectionState>("flax.core/flutter#type:ConnectionState", "waiting"),
active: enumValue<ConnectionState>("flax.core/flutter#type:ConnectionState", "active"),
done: enumValue<ConnectionState>("flax.core/flutter#type:ConnectionState", "done"),
});
export interface WidgetState extends DartEnum { readonly type: "flax.core/flutter#type:WidgetState"; }
export const WidgetState = Object.freeze({
hovered: enumValue<WidgetState>("flax.core/flutter#type:WidgetState", "hovered"),
focused: enumValue<WidgetState>("flax.core/flutter#type:WidgetState", "focused"),
pressed: enumValue<WidgetState>("flax.core/flutter#type:WidgetState", "pressed"),
dragged: enumValue<WidgetState>("flax.core/flutter#type:WidgetState", "dragged"),
selected: enumValue<WidgetState>("flax.core/flutter#type:WidgetState", "selected"),
scrolledUnder: enumValue<WidgetState>("flax.core/flutter#type:WidgetState", "scrolledUnder"),
disabled: enumValue<WidgetState>("flax.core/flutter#type:WidgetState", "disabled"),
error: enumValue<WidgetState>("flax.core/flutter#type:WidgetState", "error"),
});
export interface Clip extends DartEnum { readonly type: "flax.core/flutter#type:Clip"; }
export const Clip = Object.freeze({
none: enumValue<Clip>("flax.core/flutter#type:Clip", "none"),
hardEdge: enumValue<Clip>("flax.core/flutter#type:Clip", "hardEdge"),
antiAlias: enumValue<Clip>("flax.core/flutter#type:Clip", "antiAlias"),
antiAliasWithSaveLayer: enumValue<Clip>("flax.core/flutter#type:Clip", "antiAliasWithSaveLayer"),
});
export interface DecorationPosition extends DartEnum { readonly type: "flax.core/flutter#type:DecorationPosition"; }
export const DecorationPosition = Object.freeze({
background: enumValue<DecorationPosition>("flax.core/flutter#type:DecorationPosition", "background"),
foreground: enumValue<DecorationPosition>("flax.core/flutter#type:DecorationPosition", "foreground"),
});
export interface BoxShape extends DartEnum { readonly type: "flax.core/flutter#type:BoxShape"; }
export const BoxShape = Object.freeze({
rectangle: enumValue<BoxShape>("flax.core/flutter#type:BoxShape", "rectangle"),
circle: enumValue<BoxShape>("flax.core/flutter#type:BoxShape", "circle"),
});
export interface BorderStyle extends DartEnum { readonly type: "flax.core/flutter#type:BorderStyle"; }
export const BorderStyle = Object.freeze({
none: enumValue<BorderStyle>("flax.core/flutter#type:BorderStyle", "none"),
solid: enumValue<BorderStyle>("flax.core/flutter#type:BorderStyle", "solid"),
});
export interface FlexFit extends DartEnum { readonly type: "flax.core/flutter#type:FlexFit"; }
export const FlexFit = Object.freeze({
tight: enumValue<FlexFit>("flax.core/flutter#type:FlexFit", "tight"),
loose: enumValue<FlexFit>("flax.core/flutter#type:FlexFit", "loose"),
});
export interface TextDirection extends DartEnum { readonly type: "flax.core/flutter#type:TextDirection"; }
export const TextDirection = Object.freeze({
rtl: enumValue<TextDirection>("flax.core/flutter#type:TextDirection", "rtl"),
ltr: enumValue<TextDirection>("flax.core/flutter#type:TextDirection", "ltr"),
});
export interface StackFit extends DartEnum { readonly type: "flax.core/flutter#type:StackFit"; }
export const StackFit = Object.freeze({
loose: enumValue<StackFit>("flax.core/flutter#type:StackFit", "loose"),
expand: enumValue<StackFit>("flax.core/flutter#type:StackFit", "expand"),
passthrough: enumValue<StackFit>("flax.core/flutter#type:StackFit", "passthrough"),
});
export interface FontStyle extends DartEnum { readonly type: "flax.core/flutter#type:FontStyle"; }
export const FontStyle = Object.freeze({
normal: enumValue<FontStyle>("flax.core/flutter#type:FontStyle", "normal"),
italic: enumValue<FontStyle>("flax.core/flutter#type:FontStyle", "italic"),
});
export interface TextAffinity extends DartEnum { readonly type: "flax.core/flutter#type:TextAffinity"; }
export const TextAffinity = Object.freeze({
upstream: enumValue<TextAffinity>("flax.core/flutter#type:TextAffinity", "upstream"),
downstream: enumValue<TextAffinity>("flax.core/flutter#type:TextAffinity", "downstream"),
});
export interface TextAlign extends DartEnum { readonly type: "flax.core/flutter#type:TextAlign"; }
export const TextAlign = Object.freeze({
left: enumValue<TextAlign>("flax.core/flutter#type:TextAlign", "left"),
right: enumValue<TextAlign>("flax.core/flutter#type:TextAlign", "right"),
center: enumValue<TextAlign>("flax.core/flutter#type:TextAlign", "center"),
justify: enumValue<TextAlign>("flax.core/flutter#type:TextAlign", "justify"),
start: enumValue<TextAlign>("flax.core/flutter#type:TextAlign", "start"),
end: enumValue<TextAlign>("flax.core/flutter#type:TextAlign", "end"),
});
export interface TextOverflow extends DartEnum { readonly type: "flax.core/flutter#type:TextOverflow"; }
export const TextOverflow = Object.freeze({
clip: enumValue<TextOverflow>("flax.core/flutter#type:TextOverflow", "clip"),
fade: enumValue<TextOverflow>("flax.core/flutter#type:TextOverflow", "fade"),
ellipsis: enumValue<TextOverflow>("flax.core/flutter#type:TextOverflow", "ellipsis"),
visible: enumValue<TextOverflow>("flax.core/flutter#type:TextOverflow", "visible"),
});
export interface MainAxisAlignment extends DartEnum { readonly type: "flax.core/flutter#type:MainAxisAlignment"; }
export const MainAxisAlignment = Object.freeze({
start: enumValue<MainAxisAlignment>("flax.core/flutter#type:MainAxisAlignment", "start"),
end: enumValue<MainAxisAlignment>("flax.core/flutter#type:MainAxisAlignment", "end"),
center: enumValue<MainAxisAlignment>("flax.core/flutter#type:MainAxisAlignment", "center"),
spaceBetween: enumValue<MainAxisAlignment>("flax.core/flutter#type:MainAxisAlignment", "spaceBetween"),
spaceAround: enumValue<MainAxisAlignment>("flax.core/flutter#type:MainAxisAlignment", "spaceAround"),
spaceEvenly: enumValue<MainAxisAlignment>("flax.core/flutter#type:MainAxisAlignment", "spaceEvenly"),
});
export interface MainAxisSize extends DartEnum { readonly type: "flax.core/flutter#type:MainAxisSize"; }
export const MainAxisSize = Object.freeze({
min: enumValue<MainAxisSize>("flax.core/flutter#type:MainAxisSize", "min"),
max: enumValue<MainAxisSize>("flax.core/flutter#type:MainAxisSize", "max"),
});
export interface CrossAxisAlignment extends DartEnum { readonly type: "flax.core/flutter#type:CrossAxisAlignment"; }
export const CrossAxisAlignment = Object.freeze({
start: enumValue<CrossAxisAlignment>("flax.core/flutter#type:CrossAxisAlignment", "start"),
end: enumValue<CrossAxisAlignment>("flax.core/flutter#type:CrossAxisAlignment", "end"),
center: enumValue<CrossAxisAlignment>("flax.core/flutter#type:CrossAxisAlignment", "center"),
stretch: enumValue<CrossAxisAlignment>("flax.core/flutter#type:CrossAxisAlignment", "stretch"),
baseline: enumValue<CrossAxisAlignment>("flax.core/flutter#type:CrossAxisAlignment", "baseline"),
});
export interface VerticalDirection extends DartEnum { readonly type: "flax.core/flutter#type:VerticalDirection"; }
export const VerticalDirection = Object.freeze({
up: enumValue<VerticalDirection>("flax.core/flutter#type:VerticalDirection", "up"),
down: enumValue<VerticalDirection>("flax.core/flutter#type:VerticalDirection", "down"),
});
export interface TextBaseline extends DartEnum { readonly type: "flax.core/flutter#type:TextBaseline"; }
export const TextBaseline = Object.freeze({
alphabetic: enumValue<TextBaseline>("flax.core/flutter#type:TextBaseline", "alphabetic"),
ideographic: enumValue<TextBaseline>("flax.core/flutter#type:TextBaseline", "ideographic"),
});
export interface Axis extends DartEnum { readonly type: "flax.core/flutter#type:Axis"; }
export const Axis = Object.freeze({
horizontal: enumValue<Axis>("flax.core/flutter#type:Axis", "horizontal"),
vertical: enumValue<Axis>("flax.core/flutter#type:Axis", "vertical"),
});
export interface UnfocusDisposition extends DartEnum { readonly type: "flax.core/flutter#type:UnfocusDisposition"; }
export const UnfocusDisposition = Object.freeze({
scope: enumValue<UnfocusDisposition>("flax.core/flutter#type:UnfocusDisposition", "scope"),
previouslyFocusedChild: enumValue<UnfocusDisposition>("flax.core/flutter#type:UnfocusDisposition", "previouslyFocusedChild"),
});
export interface MaxLengthEnforcement extends DartEnum { readonly type: "flax.core/flutter#type:MaxLengthEnforcement"; }
export const MaxLengthEnforcement = Object.freeze({
none: enumValue<MaxLengthEnforcement>("flax.core/flutter#type:MaxLengthEnforcement", "none"),
enforced: enumValue<MaxLengthEnforcement>("flax.core/flutter#type:MaxLengthEnforcement", "enforced"),
truncateAfterCompositionEnds: enumValue<MaxLengthEnforcement>("flax.core/flutter#type:MaxLengthEnforcement", "truncateAfterCompositionEnds"),
});
export interface HitTestBehavior extends DartEnum { readonly type: "flax.core/flutter#type:HitTestBehavior"; }
export const HitTestBehavior = Object.freeze({
deferToChild: enumValue<HitTestBehavior>("flax.core/flutter#type:HitTestBehavior", "deferToChild"),
opaque: enumValue<HitTestBehavior>("flax.core/flutter#type:HitTestBehavior", "opaque"),
translucent: enumValue<HitTestBehavior>("flax.core/flutter#type:HitTestBehavior", "translucent"),
});
export interface WrapAlignment extends DartEnum { readonly type: "flax.core/flutter#type:WrapAlignment"; }
export const WrapAlignment = Object.freeze({
start: enumValue<WrapAlignment>("flax.core/flutter#type:WrapAlignment", "start"),
end: enumValue<WrapAlignment>("flax.core/flutter#type:WrapAlignment", "end"),
center: enumValue<WrapAlignment>("flax.core/flutter#type:WrapAlignment", "center"),
spaceBetween: enumValue<WrapAlignment>("flax.core/flutter#type:WrapAlignment", "spaceBetween"),
spaceAround: enumValue<WrapAlignment>("flax.core/flutter#type:WrapAlignment", "spaceAround"),
spaceEvenly: enumValue<WrapAlignment>("flax.core/flutter#type:WrapAlignment", "spaceEvenly"),
});
export interface WrapCrossAlignment extends DartEnum { readonly type: "flax.core/flutter#type:WrapCrossAlignment"; }
export const WrapCrossAlignment = Object.freeze({
start: enumValue<WrapCrossAlignment>("flax.core/flutter#type:WrapCrossAlignment", "start"),
end: enumValue<WrapCrossAlignment>("flax.core/flutter#type:WrapCrossAlignment", "end"),
center: enumValue<WrapCrossAlignment>("flax.core/flutter#type:WrapCrossAlignment", "center"),
});
export interface BoxFit extends DartEnum { readonly type: "flax.core/flutter#type:BoxFit"; }
export const BoxFit = Object.freeze({
fill: enumValue<BoxFit>("flax.core/flutter#type:BoxFit", "fill"),
contain: enumValue<BoxFit>("flax.core/flutter#type:BoxFit", "contain"),
cover: enumValue<BoxFit>("flax.core/flutter#type:BoxFit", "cover"),
fitWidth: enumValue<BoxFit>("flax.core/flutter#type:BoxFit", "fitWidth"),
fitHeight: enumValue<BoxFit>("flax.core/flutter#type:BoxFit", "fitHeight"),
none: enumValue<BoxFit>("flax.core/flutter#type:BoxFit", "none"),
scaleDown: enumValue<BoxFit>("flax.core/flutter#type:BoxFit", "scaleDown"),
});
export interface DragStartBehavior extends DartEnum { readonly type: "flax.core/flutter#type:DragStartBehavior"; }
export const DragStartBehavior = Object.freeze({
down: enumValue<DragStartBehavior>("flax.core/flutter#type:DragStartBehavior", "down"),
start: enumValue<DragStartBehavior>("flax.core/flutter#type:DragStartBehavior", "start"),
});
export interface AutovalidateMode extends DartEnum { readonly type: "flax.core/flutter#type:AutovalidateMode"; }
export const AutovalidateMode = Object.freeze({
disabled: enumValue<AutovalidateMode>("flax.core/flutter#type:AutovalidateMode", "disabled"),
always: enumValue<AutovalidateMode>("flax.core/flutter#type:AutovalidateMode", "always"),
onUserInteraction: enumValue<AutovalidateMode>("flax.core/flutter#type:AutovalidateMode", "onUserInteraction"),
onUnfocus: enumValue<AutovalidateMode>("flax.core/flutter#type:AutovalidateMode", "onUnfocus"),
onUserInteractionIfError: enumValue<AutovalidateMode>("flax.core/flutter#type:AutovalidateMode", "onUserInteractionIfError"),
});
export interface Stream<T extends unknown | null = unknown | null> extends AsyncIterable<T> { readonly __Stream: unique symbol;
readonly isBroadcast: boolean;
readonly length: Promise<number>;
readonly isEmpty: Promise<boolean>;
readonly first: Promise<T>;
readonly last: Promise<T>;
readonly single: Promise<T>;
asBroadcastStream(options?: {onCancel?: ((subscription: StreamSubscription<T>) => void) | null | undefined; onListen?: ((subscription: StreamSubscription<T>) => void) | null | undefined}): Stream<T>;
listen(onData: ((event: T) => void) | null, options?: {cancelOnError?: boolean | null | undefined; onDone?: (() => void) | null | undefined; onError?: ((p0: {}, p1?: StackTrace) => void) | null | undefined}): StreamSubscription<T>;
where(test: ((event: T) => boolean)): Stream<T>;
map<S extends unknown | null = unknown | null>(convert: ((event: T) => S)): Stream<S>;
asyncMap<E extends unknown | null = unknown | null>(convert: ((event: T) => E | Promise<E>)): Stream<E>;
asyncExpand<E extends unknown | null = unknown | null>(convert: ((event: T) => Stream<E> | null)): Stream<E>;
handleError(onError: ((p0: {}, p1?: StackTrace) => void), options?: {test?: ((error: unknown | null) => boolean) | null | undefined}): Stream<T>;
expand<S extends unknown | null = unknown | null>(convert: ((element: T) => DartIterableInput<S, S>)): Stream<S>;
pipe(streamConsumer: StreamConsumer<T>): Promise<unknown | null>;
transform<S extends unknown | null = unknown | null>(streamTransformer: StreamTransformer<T, S>): Stream<S>;
reduce(combine: ((previous: T, element: T) => T)): Promise<T>;
fold<S extends unknown | null = unknown | null>(initialValue: S, combine: ((previous: S, element: T) => S)): Promise<S>;
join(separator?: string): Promise<string>;
contains(needle: unknown | null): Promise<boolean>;
forEach(action: ((element: T) => void)): Promise<void>;
every(test: ((element: T) => boolean)): Promise<boolean>;
any(test: ((element: T) => boolean)): Promise<boolean>;
cast<R extends unknown | null = unknown | null>(): Stream<R>;
toList(): Promise<DartList<T>>;
toSet(): Promise<DartSet<T>>;
drain<E extends unknown | null = unknown | null>(futureValue?: E | null): Promise<E>;
take(count: number): Stream<T>;
takeWhile(test: ((element: T) => boolean)): Stream<T>;
skip(count: number): Stream<T>;
skipWhile(test: ((element: T) => boolean)): Stream<T>;
distinct(equals?: ((previous: T, next: T) => boolean) | null): Stream<T>;
firstWhere(test: ((element: T) => boolean), options?: {orElse?: (() => T) | null | undefined}): Promise<T>;
lastWhere(test: ((element: T) => boolean), options?: {orElse?: (() => T) | null | undefined}): Promise<T>;
singleWhere(test: ((element: T) => boolean), options?: {orElse?: (() => T) | null | undefined}): Promise<T>;
elementAt(index: number): Promise<T>;
timeout(timeLimit: Duration, options?: {onTimeout?: ((sink: EventSink<T>) => void) | null | undefined}): Stream<T>;
}
defineStream("flax.core/flutter#type:Stream", ["isBroadcast","length","isEmpty","first","last","single"], {asBroadcastStream(this: object, options: { onCancel?: ((subscription: StreamSubscription<unknown | null>) => void) | null | undefined; onListen?: ((subscription: StreamSubscription<unknown | null>) => void) | null | undefined } = {}): Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["onCancel","onListen"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "asBroadcastStream", [options.onCancel, options.onListen]);
return _flaxResult as Stream<unknown | null>;
},
listen(this: object, onData: ((event: unknown | null) => void) | null, options: { cancelOnError?: boolean | null | undefined; onDone?: (() => void) | null | undefined; onError?: ((p0: {}, p1?: StackTrace) => void) | null | undefined } = {}): StreamSubscription<unknown | null> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["cancelOnError","onDone","onError"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "listen", [onData, options.cancelOnError, options.onDone, options.onError]);
return _flaxResult as StreamSubscription<unknown | null>;
},
where(this: object, test: ((event: unknown | null) => boolean)): Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "where", [test]);
return _flaxResult as Stream<unknown | null>;
},
map(this: object, convert: ((event: unknown | null) => unknown | null)): Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "map", [convert]);
return _flaxResult as Stream<unknown | null>;
},
asyncMap(this: object, convert: ((event: unknown | null) => unknown | null | Promise<unknown | null>)): Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "asyncMap", [convert]);
return _flaxResult as Stream<unknown | null>;
},
asyncExpand(this: object, convert: ((event: unknown | null) => Stream<unknown | null> | null)): Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "asyncExpand", [convert]);
return _flaxResult as Stream<unknown | null>;
},
handleError(this: object, onError: ((p0: {}, p1?: StackTrace) => void), options: { test?: ((error: unknown | null) => boolean) | null | undefined } = {}): Stream<unknown | null> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["test"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "handleError", [onError, options.test]);
return _flaxResult as Stream<unknown | null>;
},
expand(this: object, convert: ((element: unknown | null) => DartIterableInput<unknown | null, unknown | null>)): Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "expand", [convert]);
return _flaxResult as Stream<unknown | null>;
},
pipe(this: object, streamConsumer: StreamConsumer<unknown | null>): Promise<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "pipe", [streamConsumer]);
return _flaxResult as Promise<unknown | null>;
},
transform(this: object, streamTransformer: StreamTransformer<unknown | null, unknown | null>): Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "transform", [streamTransformer]);
return _flaxResult as Stream<unknown | null>;
},
reduce(this: object, combine: ((previous: unknown | null, element: unknown | null) => unknown | null)): Promise<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "reduce", [combine]);
return _flaxResult as Promise<unknown | null>;
},
fold(this: object, initialValue: unknown | null, combine: ((previous: unknown | null, element: unknown | null) => unknown | null)): Promise<unknown | null> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "fold", [initialValue, combine]);
return _flaxResult as Promise<unknown | null>;
},
join(this: object, separator?: string): Promise<string> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "join", [separator]);
return _flaxResult as Promise<string>;
},
contains(this: object, needle: unknown | null): Promise<boolean> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "contains", [needle]);
return _flaxResult as Promise<boolean>;
},
forEach(this: object, action: ((element: unknown | null) => void)): Promise<void> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "forEach", [action]);
return _flaxResult as Promise<void>;
},
every(this: object, test: ((element: unknown | null) => boolean)): Promise<boolean> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "every", [test]);
return _flaxResult as Promise<boolean>;
},
any(this: object, test: ((element: unknown | null) => boolean)): Promise<boolean> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "any", [test]);
return _flaxResult as Promise<boolean>;
},
cast(this: object): Stream<unknown | null> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "cast", []);
return _flaxResult as Stream<unknown | null>;
},
toList(this: object): Promise<DartList<unknown | null>> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "toList", []);
return _flaxResult as Promise<DartList<unknown | null>>;
},
toSet(this: object): Promise<DartSet<unknown | null>> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "toSet", []);
return _flaxResult as Promise<DartSet<unknown | null>>;
},
drain(this: object, futureValue?: unknown | null): Promise<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "drain", [futureValue]);
return _flaxResult as Promise<unknown | null>;
},
take(this: object, count: number): Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "take", [count]);
return _flaxResult as Stream<unknown | null>;
},
takeWhile(this: object, test: ((element: unknown | null) => boolean)): Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "takeWhile", [test]);
return _flaxResult as Stream<unknown | null>;
},
skip(this: object, count: number): Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "skip", [count]);
return _flaxResult as Stream<unknown | null>;
},
skipWhile(this: object, test: ((element: unknown | null) => boolean)): Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "skipWhile", [test]);
return _flaxResult as Stream<unknown | null>;
},
distinct(this: object, equals?: ((previous: unknown | null, next: unknown | null) => boolean) | null): Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "distinct", [equals]);
return _flaxResult as Stream<unknown | null>;
},
firstWhere(this: object, test: ((element: unknown | null) => boolean), options: { orElse?: (() => unknown | null) | null | undefined } = {}): Promise<unknown | null> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["orElse"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "firstWhere", [test, options.orElse]);
return _flaxResult as Promise<unknown | null>;
},
lastWhere(this: object, test: ((element: unknown | null) => boolean), options: { orElse?: (() => unknown | null) | null | undefined } = {}): Promise<unknown | null> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["orElse"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "lastWhere", [test, options.orElse]);
return _flaxResult as Promise<unknown | null>;
},
singleWhere(this: object, test: ((element: unknown | null) => boolean), options: { orElse?: (() => unknown | null) | null | undefined } = {}): Promise<unknown | null> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["orElse"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "singleWhere", [test, options.orElse]);
return _flaxResult as Promise<unknown | null>;
},
elementAt(this: object, index: number): Promise<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "elementAt", [index]);
return _flaxResult as Promise<unknown | null>;
},
timeout(this: object, timeLimit: Duration, options: { onTimeout?: ((sink: EventSink<unknown | null>) => void) | null | undefined } = {}): Stream<unknown | null> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["onTimeout"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:Stream", "timeout", [timeLimit, options.onTimeout]);
return _flaxResult as Stream<unknown | null>;
},
});
export namespace Stream {
export function fromAsyncIterable<T extends unknown | null >(source: AsyncIterable<T>): Stream<T> {
return constructAsyncIterableStream("flax.core/flutter#type:Stream", source) as Stream<T>;
} }
export namespace Stream {
export function empty<T extends unknown | null = unknown | null>(options: { broadcast?: boolean | undefined } = {}): Stream<T> {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructStream("stream", "flax.core/flutter#type:Stream", "empty", [{"name":"broadcast","required":false,"positional":false}], [], options) as Stream<T>;
}
}
export namespace Stream {
export function value<T extends unknown | null = unknown | null>(value: T): Stream<T> {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructStream("stream", "flax.core/flutter#type:Stream", "value", [{"name":"value","required":true,"positional":true}], [value], {}) as Stream<T>;
}
}
export namespace Stream {
export function error<T extends unknown | null = unknown | null>(error: {}, stackTrace?: StackTrace | null): Stream<T> {
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructStream("stream", "flax.core/flutter#type:Stream", "error", [{"name":"error","required":true,"positional":true},{"name":"stackTrace","required":false,"positional":true}], [error, stackTrace], {}) as Stream<T>;
}
}
export namespace Stream {
export function fromFuture<T extends unknown | null = unknown | null>(future: Promise<T>): Stream<T> {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructStream("stream", "flax.core/flutter#type:Stream", "fromFuture", [{"name":"future","required":true,"positional":true}], [future], {}) as Stream<T>;
}
}
export namespace Stream {
export function fromFutures<T extends unknown | null = unknown | null>(futures: DartIterableInput<Promise<T>, Promise<T>>): Stream<T> {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructStream("stream", "flax.core/flutter#type:Stream", "fromFutures", [{"name":"futures","required":true,"positional":true}], [futures], {}) as Stream<T>;
}
}
export namespace Stream {
export function fromIterable<T extends unknown | null = unknown | null>(elements: DartIterableInput<T, T>): Stream<T> {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructStream("stream", "flax.core/flutter#type:Stream", "fromIterable", [{"name":"elements","required":true,"positional":true}], [elements], {}) as Stream<T>;
}
}
export namespace Stream {
export function multi<T extends unknown | null = unknown | null>(onListen: ((p0: MultiStreamController<T>) => void), options: { isBroadcast?: boolean | undefined } = {}): Stream<T> {
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructStream("stream", "flax.core/flutter#type:Stream", "multi", [{"name":"onListen","required":true,"positional":true},{"name":"isBroadcast","required":false,"positional":false}], [onListen], options) as Stream<T>;
}
}
export namespace Stream {
export function periodic<T extends unknown | null = unknown | null>(period: Duration, computation?: ((computationCount: number) => T) | null): Stream<T> {
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructStream("stream", "flax.core/flutter#type:Stream", "periodic", [{"name":"period","required":true,"positional":true},{"name":"computation","required":false,"positional":true}], [period, computation], {}) as Stream<T>;
}
}
export namespace Stream {
export function eventTransformed<T extends unknown | null = unknown | null>(source: Stream<unknown | null>, mapSink: ((sink: EventSink<T>) => EventSink<unknown | null>)): Stream<T> {
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructStream("stream", "flax.core/flutter#type:Stream", "eventTransformed", [{"name":"source","required":true,"positional":true},{"name":"mapSink","required":true,"positional":true}], [source, mapSink], {}) as Stream<T>;
}
}
export interface StreamSubscription<T extends unknown | null = unknown | null> { readonly __StreamSubscription: unique symbol;
readonly isPaused: boolean;
cancel(): Promise<void>;
onData(handleData: ((data: T) => void) | null): void;
onError(handleError: ((p0: {}, p1?: StackTrace) => void) | null): void;
onDone(handleDone: (() => void) | null): void;
pause(resumeSignal?: Promise<void> | null): void;
resume(): void;
asFuture<E extends unknown | null = unknown | null>(futureValue?: E | null): Promise<E>;
}
defineObject("flax.core/flutter#type:StreamSubscription", ["isPaused"], [], {cancel(this: object): Promise<void> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:StreamSubscription", "cancel", []);
return _flaxResult as Promise<void>;
},
onData(this: object, handleData: ((data: unknown | null) => void) | null): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:StreamSubscription", "onData", [handleData]);
},
onError(this: object, handleError: ((p0: {}, p1?: StackTrace) => void) | null): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:StreamSubscription", "onError", [handleError]);
},
onDone(this: object, handleDone: (() => void) | null): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:StreamSubscription", "onDone", [handleDone]);
},
pause(this: object, resumeSignal?: Promise<void> | null): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:StreamSubscription", "pause", [resumeSignal]);
},
resume(this: object): void {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:StreamSubscription", "resume", []);
},
asFuture(this: object, futureValue?: unknown | null): Promise<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:StreamSubscription", "asFuture", [futureValue]);
return _flaxResult as Promise<unknown | null>;
},
}, []);
export interface StreamController<T extends unknown | null = unknown | null> extends StreamSink<T>, EventSink<T>, Sink<T>, StreamConsumer<T> { readonly __StreamController: unique symbol;
readonly done: Promise<unknown | null>;
get onListen(): (() => void) | null;
get onPause(): (() => void) | null;
get onResume(): (() => void) | null;
get onCancel(): (() => void | Promise<void>) | null;
readonly stream: Stream<T>;
readonly sink: StreamSink<T>;
readonly isClosed: boolean;
readonly isPaused: boolean;
readonly hasListener: boolean;
add(event: T): void;
addError(error: {}, stackTrace?: StackTrace | null): void;
close(): Promise<unknown | null>;
addStream(source: Stream<T>, options?: {cancelOnError?: boolean | null | undefined}): Promise<unknown | null>;
set onListen(value: (() => void) | null);
set onPause(value: (() => void) | null);
set onResume(value: (() => void) | null);
set onCancel(value: (() => void | Promise<void>) | null);
}
defineObject("flax.core/flutter#type:StreamController", ["done","onListen","onPause","onResume","onCancel","stream","sink","isClosed","isPaused","hasListener"], ["onListen","onPause","onResume","onCancel"], {add(this: object, event: unknown | null): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:StreamController", "add", [event]);
},
addError(this: object, error: {}, stackTrace?: StackTrace | null): void {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:StreamController", "addError", [error, stackTrace]);
},
close(this: object): Promise<unknown | null> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:StreamController", "close", []);
return _flaxResult as Promise<unknown | null>;
},
addStream(this: object, source: Stream<unknown | null>, options: { cancelOnError?: boolean | null | undefined } = {}): Promise<unknown | null> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["cancelOnError"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:StreamController", "addStream", [source, options.cancelOnError]);
return _flaxResult as Promise<unknown | null>;
},
}, []);
export function StreamController<T extends unknown | null = unknown | null>(options: { onListen?: (() => void) | null | undefined; onPause?: (() => void) | null | undefined; onResume?: (() => void) | null | undefined; onCancel?: (() => void | Promise<void>) | null | undefined; sync?: boolean | undefined } = {}): StreamController<T> {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:StreamController", "", [{"name":"onListen","required":false,"positional":false},{"name":"onPause","required":false,"positional":false},{"name":"onResume","required":false,"positional":false},{"name":"onCancel","required":false,"positional":false},{"name":"sync","required":false,"positional":false}], [], options) as StreamController<T>;
}
export namespace StreamController {
export function broadcast<T extends unknown | null = unknown | null>(options: { onListen?: (() => void) | null | undefined; onCancel?: (() => void) | null | undefined; sync?: boolean | undefined } = {}): StreamController<T> {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:StreamController", "broadcast", [{"name":"onListen","required":false,"positional":false},{"name":"onCancel","required":false,"positional":false},{"name":"sync","required":false,"positional":false}], [], options) as StreamController<T>;
}
}
export interface SynchronousStreamController<T extends unknown | null = unknown | null> extends StreamController<T>, StreamSink<T>, EventSink<T>, Sink<T>, StreamConsumer<T> { readonly __SynchronousStreamController: unique symbol;
get onListen(): (() => void) | null;
get onPause(): (() => void) | null;
get onResume(): (() => void) | null;
get onCancel(): (() => void | Promise<void>) | null;
readonly stream: Stream<T>;
readonly sink: StreamSink<T>;
readonly isClosed: boolean;
readonly isPaused: boolean;
readonly hasListener: boolean;
readonly done: Promise<unknown | null>;
add(data: T): void;
addError(error: {}, stackTrace?: StackTrace | null): void;
close(): Promise<unknown | null>;
addStream(source: Stream<T>, options?: {cancelOnError?: boolean | null | undefined}): Promise<unknown | null>;
set onListen(value: (() => void) | null);
set onPause(value: (() => void) | null);
set onResume(value: (() => void) | null);
set onCancel(value: (() => void | Promise<void>) | null);
}
defineObject("flax.core/flutter#type:SynchronousStreamController", ["onListen","onPause","onResume","onCancel","stream","sink","isClosed","isPaused","hasListener","done"], ["onListen","onPause","onResume","onCancel"], {add(this: object, data: unknown | null): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:SynchronousStreamController", "add", [data]);
},
addError(this: object, error: {}, stackTrace?: StackTrace | null): void {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:SynchronousStreamController", "addError", [error, stackTrace]);
},
close(this: object): Promise<unknown | null> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:SynchronousStreamController", "close", []);
return _flaxResult as Promise<unknown | null>;
},
addStream(this: object, source: Stream<unknown | null>, options: { cancelOnError?: boolean | null | undefined } = {}): Promise<unknown | null> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["cancelOnError"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:SynchronousStreamController", "addStream", [source, options.cancelOnError]);
return _flaxResult as Promise<unknown | null>;
},
}, []);
export interface MultiStreamController<T extends unknown | null = unknown | null> extends StreamController<T>, StreamSink<T>, EventSink<T>, Sink<T>, StreamConsumer<T> { readonly __MultiStreamController: unique symbol;
get onListen(): (() => void) | null;
get onPause(): (() => void) | null;
get onResume(): (() => void) | null;
get onCancel(): (() => void | Promise<void>) | null;
readonly stream: Stream<T>;
readonly sink: StreamSink<T>;
readonly isClosed: boolean;
readonly isPaused: boolean;
readonly hasListener: boolean;
readonly done: Promise<unknown | null>;
add(event: T): void;
addError(error: {}, stackTrace?: StackTrace | null): void;
close(): Promise<unknown | null>;
addStream(source: Stream<T>, options?: {cancelOnError?: boolean | null | undefined}): Promise<unknown | null>;
addSync(value: T): void;
addErrorSync(error: {}, stackTrace?: StackTrace | null): void;
closeSync(): void;
set onListen(value: (() => void) | null);
set onPause(value: (() => void) | null);
set onResume(value: (() => void) | null);
set onCancel(value: (() => void | Promise<void>) | null);
}
defineObject("flax.core/flutter#type:MultiStreamController", ["onListen","onPause","onResume","onCancel","stream","sink","isClosed","isPaused","hasListener","done"], ["onListen","onPause","onResume","onCancel"], {add(this: object, event: unknown | null): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:MultiStreamController", "add", [event]);
},
addError(this: object, error: {}, stackTrace?: StackTrace | null): void {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:MultiStreamController", "addError", [error, stackTrace]);
},
close(this: object): Promise<unknown | null> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:MultiStreamController", "close", []);
return _flaxResult as Promise<unknown | null>;
},
addStream(this: object, source: Stream<unknown | null>, options: { cancelOnError?: boolean | null | undefined } = {}): Promise<unknown | null> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["cancelOnError"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:MultiStreamController", "addStream", [source, options.cancelOnError]);
return _flaxResult as Promise<unknown | null>;
},
addSync(this: object, value: unknown | null): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:MultiStreamController", "addSync", [value]);
},
addErrorSync(this: object, error: {}, stackTrace?: StackTrace | null): void {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:MultiStreamController", "addErrorSync", [error, stackTrace]);
},
closeSync(this: object): void {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:MultiStreamController", "closeSync", []);
},
}, []);
export interface Duration { readonly __Duration: unique symbol;
readonly inDays: number;
readonly inHours: number;
readonly inMinutes: number;
readonly inSeconds: number;
readonly inMilliseconds: number;
readonly inMicroseconds: number;
}
defineObject("flax.core/flutter#type:Duration", ["inDays","inHours","inMinutes","inSeconds","inMilliseconds","inMicroseconds"], [], {}, []);
export function Duration(options: { days?: number | undefined; hours?: number | undefined; minutes?: number | undefined; seconds?: number | undefined; milliseconds?: number | undefined; microseconds?: number | undefined } = {}): Duration {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Duration", "", [{"name":"days","required":false,"positional":false},{"name":"hours","required":false,"positional":false},{"name":"minutes","required":false,"positional":false},{"name":"seconds","required":false,"positional":false},{"name":"milliseconds","required":false,"positional":false},{"name":"microseconds","required":false,"positional":false}], [], options) as Duration;
}
export interface StackTrace { readonly __StackTrace: unique symbol;
toString(): string;
}
defineObject("flax.core/flutter#type:StackTrace", [], [], {toString(this: object): string {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:StackTrace", "toString", []);
return _flaxResult as string;
},
}, []);
export interface Sink<T extends unknown | null = unknown | null> { readonly __Sink: unique symbol;
}
defineObject("flax.core/flutter#type:Sink", [], [], {}, []);
export interface EventSink<T extends unknown | null = unknown | null> extends Sink<T> { readonly __EventSink: unique symbol;
add(event: T): void;
addError(error: {}, stackTrace?: StackTrace | null): void;
close(): void;
}
defineObject("flax.core/flutter#type:EventSink", [], [], {add(this: object, event: unknown | null): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:EventSink", "add", [event]);
},
addError(this: object, error: {}, stackTrace?: StackTrace | null): void {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:EventSink", "addError", [error, stackTrace]);
},
close(this: object): void {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:EventSink", "close", []);
},
}, []);
export namespace EventSink { export function implement<T extends unknown | null = unknown | null>(args: [], implementation: {add: ((event: T) => void); addError: ((error: {}, stackTrace?: StackTrace | null) => void); close: (() => void)}): EventSink<T> {
return constructProxy("flax.core/flutter#type:EventSink", [], args, implementation, ["add","addError","close"], [], []) as EventSink<T>; } }
export interface StreamConsumer<S extends unknown | null = unknown | null> { readonly __StreamConsumer: unique symbol;
addStream(stream: Stream<S>): Promise<unknown | null>;
close(): Promise<unknown | null>;
}
defineObject("flax.core/flutter#type:StreamConsumer", [], [], {addStream(this: object, stream: Stream<unknown | null>): Promise<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:StreamConsumer", "addStream", [stream]);
return _flaxResult as Promise<unknown | null>;
},
close(this: object): Promise<unknown | null> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:StreamConsumer", "close", []);
return _flaxResult as Promise<unknown | null>;
},
}, []);
export namespace StreamConsumer { export function implement<S extends unknown | null = unknown | null>(args: [], implementation: {addStream: ((stream: Stream<S>) => Promise<unknown | null>); close: (() => Promise<unknown | null>)}): StreamConsumer<S> {
return constructProxy("flax.core/flutter#type:StreamConsumer", [], args, implementation, ["addStream","close"], [], []) as StreamConsumer<S>; } }
export interface StreamSink<S extends unknown | null = unknown | null> extends EventSink<S>, Sink<S>, StreamConsumer<S> { readonly __StreamSink: unique symbol;
readonly done: Promise<unknown | null>;
add(event: S): void;
addError(error: {}, stackTrace?: StackTrace | null): void;
close(): Promise<unknown | null>;
addStream(stream: Stream<S>): Promise<unknown | null>;
}
defineObject("flax.core/flutter#type:StreamSink", ["done"], [], {add(this: object, event: unknown | null): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:StreamSink", "add", [event]);
},
addError(this: object, error: {}, stackTrace?: StackTrace | null): void {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:StreamSink", "addError", [error, stackTrace]);
},
close(this: object): Promise<unknown | null> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:StreamSink", "close", []);
return _flaxResult as Promise<unknown | null>;
},
addStream(this: object, stream: Stream<unknown | null>): Promise<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:StreamSink", "addStream", [stream]);
return _flaxResult as Promise<unknown | null>;
},
}, []);
export interface StreamTransformer<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null> { readonly __StreamTransformer: unique symbol;
bind(stream: Stream<S>): Stream<T>;
cast<RS extends unknown | null = unknown | null, RT extends unknown | null = unknown | null>(): StreamTransformer<RS, RT>;
}
defineObject("flax.core/flutter#type:StreamTransformer", [], [], {bind(this: object, stream: Stream<unknown | null>): Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:StreamTransformer", "bind", [stream]);
return _flaxResult as Stream<unknown | null>;
},
cast(this: object): StreamTransformer<unknown | null, unknown | null> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:StreamTransformer", "cast", []);
return _flaxResult as StreamTransformer<unknown | null, unknown | null>;
},
}, []);
export function StreamTransformer<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null>(onListen: ((stream: Stream<S>, cancelOnError: boolean) => StreamSubscription<T>)): StreamTransformer<S, T> {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:StreamTransformer", "", [{"name":"onListen","required":true,"positional":true}], [onListen], {}) as StreamTransformer<S, T>;
}
export namespace StreamTransformer {
export function fromHandlers<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null>(options: { handleData?: ((data: S, sink: EventSink<T>) => void) | null | undefined; handleError?: ((error: {}, stackTrace: StackTrace, sink: EventSink<T>) => void) | null | undefined; handleDone?: ((sink: EventSink<T>) => void) | null | undefined } = {}): StreamTransformer<S, T> {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:StreamTransformer", "fromHandlers", [{"name":"handleData","required":false,"positional":false},{"name":"handleError","required":false,"positional":false},{"name":"handleDone","required":false,"positional":false}], [], options) as StreamTransformer<S, T>;
}
}
export namespace StreamTransformer {
export function fromBind<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null>(bind: ((p0: Stream<S>) => Stream<T>)): StreamTransformer<S, T> {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:StreamTransformer", "fromBind", [{"name":"bind","required":true,"positional":true}], [bind], {}) as StreamTransformer<S, T>;
}
}
export namespace StreamTransformer { export function implement<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null>(args: [], implementation: {bind: ((stream: Stream<S>) => Stream<T>); cast: (<RS extends unknown | null, RT extends unknown | null>() => StreamTransformer<RS, RT>)}): StreamTransformer<S, T> {
return constructProxy("flax.core/flutter#type:StreamTransformer", [], args, implementation, ["bind","cast"], [], []) as StreamTransformer<S, T>; } }
export interface StreamTransformerBase<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null> extends StreamTransformer<S, T> { readonly __StreamTransformerBase: unique symbol;
bind(stream: Stream<S>): Stream<T>;
cast<RS extends unknown | null = unknown | null, RT extends unknown | null = unknown | null>(): StreamTransformer<RS, RT>;
}
defineObject("flax.core/flutter#type:StreamTransformerBase", [], [], {bind(this: object, stream: Stream<unknown | null>): Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:StreamTransformerBase", "bind", [stream]);
return _flaxResult as Stream<unknown | null>;
},
cast(this: object): StreamTransformer<unknown | null, unknown | null> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:StreamTransformerBase", "cast", []);
return _flaxResult as StreamTransformer<unknown | null, unknown | null>;
},
}, []);
export namespace StreamTransformerBase { export function implement<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null>(args: [], implementation: {bind: ((stream: Stream<S>) => Stream<T>)}): StreamTransformerBase<S, T> {
return constructProxy("flax.core/flutter#type:StreamTransformerBase", [], args, implementation, ["bind"], [], []) as StreamTransformerBase<S, T>; } }
export interface StreamView<T extends unknown | null = unknown | null> extends AsyncIterable<T> { readonly __StreamView: unique symbol;
readonly isBroadcast: boolean;
readonly length: Promise<number>;
readonly isEmpty: Promise<boolean>;
readonly first: Promise<T>;
readonly last: Promise<T>;
readonly single: Promise<T>;
asBroadcastStream(options?: {onCancel?: ((subscription: StreamSubscription<T>) => void) | null | undefined; onListen?: ((subscription: StreamSubscription<T>) => void) | null | undefined}): Stream<T>;
listen(onData: ((value: T) => void) | null, options?: {cancelOnError?: boolean | null | undefined; onDone?: (() => void) | null | undefined; onError?: ((p0: {}, p1?: StackTrace) => void) | null | undefined}): StreamSubscription<T>;
where(test: ((event: T) => boolean)): Stream<T>;
map<S extends unknown | null = unknown | null>(convert: ((event: T) => S)): Stream<S>;
asyncMap<E extends unknown | null = unknown | null>(convert: ((event: T) => E | Promise<E>)): Stream<E>;
asyncExpand<E extends unknown | null = unknown | null>(convert: ((event: T) => Stream<E> | null)): Stream<E>;
handleError(onError: ((p0: {}, p1?: StackTrace) => void), options?: {test?: ((error: unknown | null) => boolean) | null | undefined}): Stream<T>;
expand<S extends unknown | null = unknown | null>(convert: ((element: T) => DartIterableInput<S, S>)): Stream<S>;
pipe(streamConsumer: StreamConsumer<T>): Promise<unknown | null>;
transform<S extends unknown | null = unknown | null>(streamTransformer: StreamTransformer<T, S>): Stream<S>;
reduce(combine: ((previous: T, element: T) => T)): Promise<T>;
fold<S extends unknown | null = unknown | null>(initialValue: S, combine: ((previous: S, element: T) => S)): Promise<S>;
join(separator?: string): Promise<string>;
contains(needle: unknown | null): Promise<boolean>;
forEach(action: ((element: T) => void)): Promise<void>;
every(test: ((element: T) => boolean)): Promise<boolean>;
any(test: ((element: T) => boolean)): Promise<boolean>;
cast<R extends unknown | null = unknown | null>(): Stream<R>;
toList(): Promise<DartList<T>>;
toSet(): Promise<DartSet<T>>;
drain<E extends unknown | null = unknown | null>(futureValue?: E | null): Promise<E>;
take(count: number): Stream<T>;
takeWhile(test: ((element: T) => boolean)): Stream<T>;
skip(count: number): Stream<T>;
skipWhile(test: ((element: T) => boolean)): Stream<T>;
distinct(equals?: ((previous: T, next: T) => boolean) | null): Stream<T>;
firstWhere(test: ((element: T) => boolean), options?: {orElse?: (() => T) | null | undefined}): Promise<T>;
lastWhere(test: ((element: T) => boolean), options?: {orElse?: (() => T) | null | undefined}): Promise<T>;
singleWhere(test: ((element: T) => boolean), options?: {orElse?: (() => T) | null | undefined}): Promise<T>;
elementAt(index: number): Promise<T>;
timeout(timeLimit: Duration, options?: {onTimeout?: ((sink: EventSink<T>) => void) | null | undefined}): Stream<T>;
}
defineStream("flax.core/flutter#type:StreamView", ["isBroadcast","length","isEmpty","first","last","single"], {asBroadcastStream(this: object, options: { onCancel?: ((subscription: StreamSubscription<unknown | null>) => void) | null | undefined; onListen?: ((subscription: StreamSubscription<unknown | null>) => void) | null | undefined } = {}): Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["onCancel","onListen"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "asBroadcastStream", [options.onCancel, options.onListen]);
return _flaxResult as Stream<unknown | null>;
},
listen(this: object, onData: ((value: unknown | null) => void) | null, options: { cancelOnError?: boolean | null | undefined; onDone?: (() => void) | null | undefined; onError?: ((p0: {}, p1?: StackTrace) => void) | null | undefined } = {}): StreamSubscription<unknown | null> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["cancelOnError","onDone","onError"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "listen", [onData, options.cancelOnError, options.onDone, options.onError]);
return _flaxResult as StreamSubscription<unknown | null>;
},
where(this: object, test: ((event: unknown | null) => boolean)): Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "where", [test]);
return _flaxResult as Stream<unknown | null>;
},
map(this: object, convert: ((event: unknown | null) => unknown | null)): Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "map", [convert]);
return _flaxResult as Stream<unknown | null>;
},
asyncMap(this: object, convert: ((event: unknown | null) => unknown | null | Promise<unknown | null>)): Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "asyncMap", [convert]);
return _flaxResult as Stream<unknown | null>;
},
asyncExpand(this: object, convert: ((event: unknown | null) => Stream<unknown | null> | null)): Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "asyncExpand", [convert]);
return _flaxResult as Stream<unknown | null>;
},
handleError(this: object, onError: ((p0: {}, p1?: StackTrace) => void), options: { test?: ((error: unknown | null) => boolean) | null | undefined } = {}): Stream<unknown | null> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["test"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "handleError", [onError, options.test]);
return _flaxResult as Stream<unknown | null>;
},
expand(this: object, convert: ((element: unknown | null) => DartIterableInput<unknown | null, unknown | null>)): Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "expand", [convert]);
return _flaxResult as Stream<unknown | null>;
},
pipe(this: object, streamConsumer: StreamConsumer<unknown | null>): Promise<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "pipe", [streamConsumer]);
return _flaxResult as Promise<unknown | null>;
},
transform(this: object, streamTransformer: StreamTransformer<unknown | null, unknown | null>): Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "transform", [streamTransformer]);
return _flaxResult as Stream<unknown | null>;
},
reduce(this: object, combine: ((previous: unknown | null, element: unknown | null) => unknown | null)): Promise<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "reduce", [combine]);
return _flaxResult as Promise<unknown | null>;
},
fold(this: object, initialValue: unknown | null, combine: ((previous: unknown | null, element: unknown | null) => unknown | null)): Promise<unknown | null> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "fold", [initialValue, combine]);
return _flaxResult as Promise<unknown | null>;
},
join(this: object, separator?: string): Promise<string> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "join", [separator]);
return _flaxResult as Promise<string>;
},
contains(this: object, needle: unknown | null): Promise<boolean> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "contains", [needle]);
return _flaxResult as Promise<boolean>;
},
forEach(this: object, action: ((element: unknown | null) => void)): Promise<void> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "forEach", [action]);
return _flaxResult as Promise<void>;
},
every(this: object, test: ((element: unknown | null) => boolean)): Promise<boolean> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "every", [test]);
return _flaxResult as Promise<boolean>;
},
any(this: object, test: ((element: unknown | null) => boolean)): Promise<boolean> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "any", [test]);
return _flaxResult as Promise<boolean>;
},
cast(this: object): Stream<unknown | null> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "cast", []);
return _flaxResult as Stream<unknown | null>;
},
toList(this: object): Promise<DartList<unknown | null>> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "toList", []);
return _flaxResult as Promise<DartList<unknown | null>>;
},
toSet(this: object): Promise<DartSet<unknown | null>> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "toSet", []);
return _flaxResult as Promise<DartSet<unknown | null>>;
},
drain(this: object, futureValue?: unknown | null): Promise<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "drain", [futureValue]);
return _flaxResult as Promise<unknown | null>;
},
take(this: object, count: number): Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "take", [count]);
return _flaxResult as Stream<unknown | null>;
},
takeWhile(this: object, test: ((element: unknown | null) => boolean)): Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "takeWhile", [test]);
return _flaxResult as Stream<unknown | null>;
},
skip(this: object, count: number): Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "skip", [count]);
return _flaxResult as Stream<unknown | null>;
},
skipWhile(this: object, test: ((element: unknown | null) => boolean)): Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "skipWhile", [test]);
return _flaxResult as Stream<unknown | null>;
},
distinct(this: object, equals?: ((previous: unknown | null, next: unknown | null) => boolean) | null): Stream<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "distinct", [equals]);
return _flaxResult as Stream<unknown | null>;
},
firstWhere(this: object, test: ((element: unknown | null) => boolean), options: { orElse?: (() => unknown | null) | null | undefined } = {}): Promise<unknown | null> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["orElse"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "firstWhere", [test, options.orElse]);
return _flaxResult as Promise<unknown | null>;
},
lastWhere(this: object, test: ((element: unknown | null) => boolean), options: { orElse?: (() => unknown | null) | null | undefined } = {}): Promise<unknown | null> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["orElse"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "lastWhere", [test, options.orElse]);
return _flaxResult as Promise<unknown | null>;
},
singleWhere(this: object, test: ((element: unknown | null) => boolean), options: { orElse?: (() => unknown | null) | null | undefined } = {}): Promise<unknown | null> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["orElse"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "singleWhere", [test, options.orElse]);
return _flaxResult as Promise<unknown | null>;
},
elementAt(this: object, index: number): Promise<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "elementAt", [index]);
return _flaxResult as Promise<unknown | null>;
},
timeout(this: object, timeLimit: Duration, options: { onTimeout?: ((sink: EventSink<unknown | null>) => void) | null | undefined } = {}): Stream<unknown | null> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["onTimeout"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeStream(this, "flax.core/flutter#type:StreamView", "timeout", [timeLimit, options.onTimeout]);
return _flaxResult as Stream<unknown | null>;
},
});
export function StreamView<T extends unknown | null = unknown | null>(stream: Stream<T>): StreamView<T> {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructStream("stream", "flax.core/flutter#type:StreamView", "", [{"name":"stream","required":true,"positional":true}], [stream], {}) as StreamView<T>;
}
export interface StreamIterator<T extends unknown | null = unknown | null> { readonly __StreamIterator: unique symbol;
readonly current: T;
moveNext(): Promise<boolean>;
cancel(): Promise<unknown | null>;
}
defineObject("flax.core/flutter#type:StreamIterator", ["current"], [], {moveNext(this: object): Promise<boolean> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:StreamIterator", "moveNext", []);
return _flaxResult as Promise<boolean>;
},
cancel(this: object): Promise<unknown | null> {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:StreamIterator", "cancel", []);
return _flaxResult as Promise<unknown | null>;
},
}, []);
export function StreamIterator<T extends unknown | null = unknown | null>(stream: Stream<T>): StreamIterator<T> {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:StreamIterator", "", [{"name":"stream","required":true,"positional":true}], [stream], {}) as StreamIterator<T>;
}
export interface AsyncSnapshot<T extends unknown | null = unknown | null> { readonly __AsyncSnapshot: unique symbol;
readonly connectionState: ConnectionState;
readonly data: T | null;
readonly error: unknown | null;
readonly stackTrace: StackTrace | null;
readonly hasData: boolean;
readonly hasError: boolean;
readonly requireData: T;
inState(state: ConnectionState): AsyncSnapshot<T>;
}
defineObject("flax.core/flutter#type:AsyncSnapshot", ["connectionState","data","error","stackTrace","hasData","hasError","requireData"], [], {inState(this: object, state: ConnectionState): AsyncSnapshot<unknown | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:AsyncSnapshot", "inState", [state]);
return _flaxResult as AsyncSnapshot<unknown | null>;
},
}, []);
export namespace AsyncSnapshot {
export function nothing<T extends unknown | null = unknown | null>(): AsyncSnapshot<T> {
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:AsyncSnapshot", "nothing", [], [], {}) as AsyncSnapshot<T>;
}
}
export namespace AsyncSnapshot {
export function waiting<T extends unknown | null = unknown | null>(): AsyncSnapshot<T> {
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:AsyncSnapshot", "waiting", [], [], {}) as AsyncSnapshot<T>;
}
}
export namespace AsyncSnapshot {
export function withData<T extends unknown | null = unknown | null>(state: ConnectionState, data: T): AsyncSnapshot<T> {
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:AsyncSnapshot", "withData", [{"name":"state","required":true,"positional":true},{"name":"data","required":true,"positional":true}], [state, data], {}) as AsyncSnapshot<T>;
}
}
export namespace AsyncSnapshot {
export function withError<T extends unknown | null = unknown | null>(state: ConnectionState, error: {}, stackTrace?: StackTrace): AsyncSnapshot<T> {
if (arguments.length > 3) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:AsyncSnapshot", "withError", [{"name":"state","required":true,"positional":true},{"name":"error","required":true,"positional":true},{"name":"stackTrace","required":false,"positional":true}], [state, error, stackTrace], {}) as AsyncSnapshot<T>;
}
}
export interface StreamBuilder<T extends unknown | null = unknown | null> extends WidgetDescription { readonly type: "flax.core/flutter#type:StreamBuilder";  }
export function StreamBuilder<T extends unknown | null = unknown | null>(options: { key?: Key | null | undefined; initialData?: Bindable<T | null> | undefined; stream: Bindable<Stream<T> | null>; builder: Bindable<((context: BuildContext, snapshot: AsyncSnapshot<T>) => Widget)> }): StreamBuilder<T> {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:StreamBuilder", "", [{"name":"key","required":false,"positional":false},{"name":"initialData","required":false,"positional":false},{"name":"stream","required":true,"positional":false},{"name":"builder","required":true,"positional":false}], [], options) as StreamBuilder<T>;
}
export interface WidgetStateProperty<T extends unknown | null = unknown | null> { readonly __WidgetStateProperty: unique symbol;
resolve(states: DartSetInput<WidgetState, WidgetState>): T;
}
defineObject("flax.core/flutter#type:WidgetStateProperty", [], [], {resolve(this: object, states: DartSetInput<WidgetState, WidgetState>): unknown | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:WidgetStateProperty", "resolve", [states]);
return _flaxResult as unknown | null;
},
}, []);
export interface ValueListenableBuilder<T extends unknown | null = unknown | null> extends WidgetDescription { readonly type: "flax.core/flutter#type:ValueListenableBuilder";  }
export function ValueListenableBuilder<T extends unknown | null = unknown | null>(options: { key?: Key | null | undefined; valueListenable: Bindable<ValueListenable<T>>; builder: Bindable<((context: BuildContext, value: T, child: Widget | null) => Widget)>; child?: Bindable<Widget | null> | undefined }): ValueListenableBuilder<T> {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:ValueListenableBuilder", "", [{"name":"key","required":false,"positional":false},{"name":"valueListenable","required":true,"positional":false},{"name":"builder","required":true,"positional":false},{"name":"child","required":false,"positional":false}], [], options) as ValueListenableBuilder<T>;
}
export interface ListenableBuilder extends WidgetDescription { readonly type: "flax.core/flutter#type:ListenableBuilder";  }
export function ListenableBuilder(options: { key?: Key | null | undefined; listenable: Bindable<Listenable>; builder: Bindable<((context: BuildContext, child: Widget | null) => Widget)>; child?: Bindable<Widget | null> | undefined }): ListenableBuilder {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:ListenableBuilder", "", [{"name":"key","required":false,"positional":false},{"name":"listenable","required":true,"positional":false},{"name":"builder","required":true,"positional":false},{"name":"child","required":false,"positional":false}], [], options) as ListenableBuilder;
}
export interface Listenable { readonly __Listenable: unique symbol;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
}
defineObject("flax.core/flutter#type:Listenable", [], [], {addListener(this: object, listener: (() => void)): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:Listenable", "addListener", [listener]);
},
removeListener(this: object, listener: (() => void)): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:Listenable", "removeListener", [listener]);
},
}, ["removeListener"]);
export interface ValueListenable<T extends unknown | null = unknown | null> extends Listenable { readonly __ValueListenable: unique symbol;
readonly value: T;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
}
defineObject("flax.core/flutter#type:ValueListenable", ["value"], [], {addListener(this: object, listener: (() => void)): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:ValueListenable", "addListener", [listener]);
},
removeListener(this: object, listener: (() => void)): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:ValueListenable", "removeListener", [listener]);
},
}, ["removeListener"]);
export namespace ValueListenable { export function implement<T extends unknown | null = unknown | null>(args: [], implementation: {addListener: ((listener: (() => void)) => void); removeListener: ((listener: (() => void)) => void); get value(): T}): ValueListenable<T> {
return constructProxy("flax.core/flutter#type:ValueListenable", [], args, implementation, ["addListener","removeListener"], ["value"], []) as ValueListenable<T>; } }
export interface FittedSizes { readonly __FittedSizes: unique symbol;
readonly source: Size;
readonly destination: Size;
}
defineObject("flax.core/flutter#type:FittedSizes", ["source","destination"], [], {}, []);
export interface NavigatorObserver { readonly __NavigatorObserver: unique symbol;
}
defineObject("flax.core/flutter#type:NavigatorObserver", [], [], {}, []);
export interface FlaxNavigatorObserver extends NavigatorObserver { readonly __FlaxNavigatorObserver: unique symbol;
}
defineObject("flax.core/flutter#type:FlaxNavigatorObserver", [], [], {}, []);
export function FlaxNavigatorObserver(): FlaxNavigatorObserver {
if (arguments.length > 0) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:FlaxNavigatorObserver", "", [], [], {}) as FlaxNavigatorObserver;
}
export type PreferredSizeWidget = Widget & { readonly __PreferredSizeWidget: unique symbol; };
export type PreferredSize = WidgetDescription & { readonly type: "flax.core/flutter#type:PreferredSize"; } & PreferredSizeWidget;
export function PreferredSize(options: { key?: Key | null | undefined; preferredSize: Size; child: Widget }): PreferredSize {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:PreferredSize", "", [{"name":"key","fixed":true,"required":false,"positional":false},{"name":"preferredSize","fixed":true,"required":true,"positional":false},{"name":"child","fixed":true,"required":true,"positional":false}], [], options) as PreferredSize;
}
export interface Container extends WidgetDescription { readonly type: "flax.core/flutter#type:Container";  }
export function Container(options: { key?: Key | null | undefined; alignment?: Bindable<AlignmentGeometry | null> | undefined; padding?: Bindable<EdgeInsetsGeometry | null> | undefined; color?: Bindable<Color | null> | undefined; isAntiAlias?: Bindable<boolean> | undefined; decoration?: Bindable<Decoration | null> | undefined; foregroundDecoration?: Bindable<Decoration | null> | undefined; width?: Bindable<number | null> | undefined; height?: Bindable<number | null> | undefined; constraints?: Bindable<BoxConstraints | null> | undefined; margin?: Bindable<EdgeInsetsGeometry | null> | undefined; child?: Bindable<Widget | null> | undefined; clipBehavior?: Bindable<Clip> | undefined } = {}): Container {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:Container", "", [{"name":"key","required":false,"positional":false},{"name":"alignment","required":false,"positional":false},{"name":"padding","required":false,"positional":false},{"name":"color","required":false,"positional":false},{"name":"isAntiAlias","required":false,"positional":false},{"name":"decoration","required":false,"positional":false},{"name":"foregroundDecoration","required":false,"positional":false},{"name":"width","required":false,"positional":false},{"name":"height","required":false,"positional":false},{"name":"constraints","required":false,"positional":false},{"name":"margin","required":false,"positional":false},{"name":"child","required":false,"positional":false},{"name":"clipBehavior","required":false,"positional":false}], [], options) as Container;
}
export interface DecoratedBox extends WidgetDescription { readonly type: "flax.core/flutter#type:DecoratedBox";  }
export function DecoratedBox(options: { key?: Key | null | undefined; decoration: Bindable<Decoration>; position?: Bindable<DecorationPosition> | undefined; child?: Bindable<Widget | null> | undefined }): DecoratedBox {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:DecoratedBox", "", [{"name":"key","required":false,"positional":false},{"name":"decoration","required":true,"positional":false},{"name":"position","required":false,"positional":false},{"name":"child","required":false,"positional":false}], [], options) as DecoratedBox;
}
export interface Decoration { readonly __Decoration: unique symbol;
}
defineObject("flax.core/flutter#type:Decoration", [], [], {}, []);
export interface BoxBorder { readonly __BoxBorder: unique symbol;
}
defineObject("flax.core/flutter#type:BoxBorder", [], [], {}, []);
export interface BorderRadiusGeometry { readonly __BorderRadiusGeometry: unique symbol;
}
defineObject("flax.core/flutter#type:BorderRadiusGeometry", [], [], {}, []);
export interface EdgeInsetsGeometry { readonly __EdgeInsetsGeometry: unique symbol;
}
defineObject("flax.core/flutter#type:EdgeInsetsGeometry", [], [], {}, []);
export interface BoxDecoration extends Decoration { readonly __BoxDecoration: unique symbol;
readonly color: Color | null;
readonly border: BoxBorder | null;
readonly borderRadius: BorderRadiusGeometry | null;
readonly shape: BoxShape;
copyWith(options?: {border?: BoxBorder | null | undefined; borderRadius?: BorderRadiusGeometry | null | undefined; color?: Color | null | undefined; shape?: BoxShape | null | undefined}): BoxDecoration;
}
defineObject("flax.core/flutter#type:BoxDecoration", ["color","border","borderRadius","shape"], [], {copyWith(this: object, options: { border?: BoxBorder | null | undefined; borderRadius?: BorderRadiusGeometry | null | undefined; color?: Color | null | undefined; shape?: BoxShape | null | undefined } = {}): BoxDecoration {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["border","borderRadius","color","shape"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:BoxDecoration", "copyWith", [options.border, options.borderRadius, options.color, options.shape]);
return _flaxResult as BoxDecoration;
},
}, []);
export function BoxDecoration(options: { color?: Color | null | undefined; border?: BoxBorder | null | undefined; borderRadius?: BorderRadiusGeometry | null | undefined; shape?: BoxShape | undefined } = {}): BoxDecoration {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BoxDecoration", "", [{"name":"color","required":false,"positional":false},{"name":"border","required":false,"positional":false},{"name":"borderRadius","required":false,"positional":false},{"name":"shape","required":false,"positional":false}], [], options) as BoxDecoration;
}
export interface BorderSide { readonly __BorderSide: unique symbol;
readonly color: Color;
readonly width: number;
readonly style: BorderStyle;
readonly strokeAlign: number;
copyWith(options?: {color?: Color | null | undefined; strokeAlign?: number | null | undefined; style?: BorderStyle | null | undefined; width?: number | null | undefined}): BorderSide;
}
defineObject("flax.core/flutter#type:BorderSide", ["color","width","style","strokeAlign"], [], {copyWith(this: object, options: { color?: Color | null | undefined; strokeAlign?: number | null | undefined; style?: BorderStyle | null | undefined; width?: number | null | undefined } = {}): BorderSide {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["color","strokeAlign","style","width"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:BorderSide", "copyWith", [options.color, options.strokeAlign, options.style, options.width]);
return _flaxResult as BorderSide;
},
}, []);
export function BorderSide(options: { color?: Color | undefined; width?: number | undefined; style?: BorderStyle | undefined; strokeAlign?: number | undefined } = {}): BorderSide {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BorderSide", "", [{"name":"color","required":false,"positional":false},{"name":"width","required":false,"positional":false},{"name":"style","required":false,"positional":false},{"name":"strokeAlign","required":false,"positional":false}], [], options) as BorderSide;
}
export interface Border extends BoxBorder { readonly __Border: unique symbol;
readonly top: BorderSide;
readonly right: BorderSide;
readonly bottom: BorderSide;
readonly left: BorderSide;
readonly isUniform: boolean;
}
defineObject("flax.core/flutter#type:Border", ["top","right","bottom","left","isUniform"], [], {}, []);
export function Border(options: { top?: BorderSide | undefined; right?: BorderSide | undefined; bottom?: BorderSide | undefined; left?: BorderSide | undefined } = {}): Border {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Border", "", [{"name":"top","required":false,"positional":false},{"name":"right","required":false,"positional":false},{"name":"bottom","required":false,"positional":false},{"name":"left","required":false,"positional":false}], [], options) as Border;
}
export namespace Border {
export function all(options: { color?: Color | undefined; width?: number | undefined; style?: BorderStyle | undefined; strokeAlign?: number | undefined } = {}): Border {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Border", "all", [{"name":"color","required":false,"positional":false},{"name":"width","required":false,"positional":false},{"name":"style","required":false,"positional":false},{"name":"strokeAlign","required":false,"positional":false}], [], options) as Border;
}
}
export interface BorderDirectional extends BoxBorder { readonly __BorderDirectional: unique symbol;
readonly top: BorderSide;
readonly start: BorderSide;
readonly end: BorderSide;
readonly bottom: BorderSide;
readonly isUniform: boolean;
}
defineObject("flax.core/flutter#type:BorderDirectional", ["top","start","end","bottom","isUniform"], [], {}, []);
export function BorderDirectional(options: { top?: BorderSide | undefined; start?: BorderSide | undefined; end?: BorderSide | undefined; bottom?: BorderSide | undefined } = {}): BorderDirectional {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BorderDirectional", "", [{"name":"top","required":false,"positional":false},{"name":"start","required":false,"positional":false},{"name":"end","required":false,"positional":false},{"name":"bottom","required":false,"positional":false}], [], options) as BorderDirectional;
}
export interface Radius { readonly __Radius: unique symbol;
readonly x: number;
readonly y: number;
}
defineObject("flax.core/flutter#type:Radius", ["x","y"], [], {}, []);
export namespace Radius {
export function circular(radius: number): Radius {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Radius", "circular", [{"name":"radius","required":true,"positional":true}], [radius], {}) as Radius;
}
}
export namespace Radius {
export function elliptical(x: number, y: number): Radius {
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Radius", "elliptical", [{"name":"x","required":true,"positional":true},{"name":"y","required":true,"positional":true}], [x, y], {}) as Radius;
}
}
export interface BorderRadius extends BorderRadiusGeometry { readonly __BorderRadius: unique symbol;
readonly topLeft: Radius;
readonly topRight: Radius;
readonly bottomLeft: Radius;
readonly bottomRight: Radius;
copyWith(options?: {bottomLeft?: Radius | null | undefined; bottomRight?: Radius | null | undefined; topLeft?: Radius | null | undefined; topRight?: Radius | null | undefined}): BorderRadius;
}
defineObject("flax.core/flutter#type:BorderRadius", ["topLeft","topRight","bottomLeft","bottomRight"], [], {copyWith(this: object, options: { bottomLeft?: Radius | null | undefined; bottomRight?: Radius | null | undefined; topLeft?: Radius | null | undefined; topRight?: Radius | null | undefined } = {}): BorderRadius {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["bottomLeft","bottomRight","topLeft","topRight"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:BorderRadius", "copyWith", [options.bottomLeft, options.bottomRight, options.topLeft, options.topRight]);
return _flaxResult as BorderRadius;
},
}, []);
export namespace BorderRadius {
export function all(radius: Radius): BorderRadius {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BorderRadius", "all", [{"name":"radius","required":true,"positional":true}], [radius], {}) as BorderRadius;
}
}
export namespace BorderRadius {
export function circular(radius: number): BorderRadius {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BorderRadius", "circular", [{"name":"radius","required":true,"positional":true}], [radius], {}) as BorderRadius;
}
}
export namespace BorderRadius {
export function only(options: { topLeft?: Radius | undefined; topRight?: Radius | undefined; bottomLeft?: Radius | undefined; bottomRight?: Radius | undefined } = {}): BorderRadius {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BorderRadius", "only", [{"name":"topLeft","required":false,"positional":false},{"name":"topRight","required":false,"positional":false},{"name":"bottomLeft","required":false,"positional":false},{"name":"bottomRight","required":false,"positional":false}], [], options) as BorderRadius;
}
}
export interface BorderRadiusDirectional extends BorderRadiusGeometry { readonly __BorderRadiusDirectional: unique symbol;
readonly topStart: Radius;
readonly topEnd: Radius;
readonly bottomStart: Radius;
readonly bottomEnd: Radius;
}
defineObject("flax.core/flutter#type:BorderRadiusDirectional", ["topStart","topEnd","bottomStart","bottomEnd"], [], {}, []);
export namespace BorderRadiusDirectional {
export function all(radius: Radius): BorderRadiusDirectional {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BorderRadiusDirectional", "all", [{"name":"radius","required":true,"positional":true}], [radius], {}) as BorderRadiusDirectional;
}
}
export namespace BorderRadiusDirectional {
export function circular(radius: number): BorderRadiusDirectional {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BorderRadiusDirectional", "circular", [{"name":"radius","required":true,"positional":true}], [radius], {}) as BorderRadiusDirectional;
}
}
export namespace BorderRadiusDirectional {
export function only(options: { topStart?: Radius | undefined; topEnd?: Radius | undefined; bottomStart?: Radius | undefined; bottomEnd?: Radius | undefined } = {}): BorderRadiusDirectional {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BorderRadiusDirectional", "only", [{"name":"topStart","required":false,"positional":false},{"name":"topEnd","required":false,"positional":false},{"name":"bottomStart","required":false,"positional":false},{"name":"bottomEnd","required":false,"positional":false}], [], options) as BorderRadiusDirectional;
}
}
export interface EdgeInsetsDirectional extends EdgeInsetsGeometry { readonly __EdgeInsetsDirectional: unique symbol;
readonly start: number;
readonly top: number;
readonly end: number;
readonly bottom: number;
}
defineObject("flax.core/flutter#type:EdgeInsetsDirectional", ["start","top","end","bottom"], [], {}, []);
export namespace EdgeInsetsDirectional {
export function fromSTEB(start: number, top: number, end: number, bottom: number): EdgeInsetsDirectional {
if (arguments.length > 4) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:EdgeInsetsDirectional", "fromSTEB", [{"name":"start","required":true,"positional":true},{"name":"top","required":true,"positional":true},{"name":"end","required":true,"positional":true},{"name":"bottom","required":true,"positional":true}], [start, top, end, bottom], {}) as EdgeInsetsDirectional;
}
}
export namespace EdgeInsetsDirectional {
export function only(options: { start?: number | undefined; top?: number | undefined; end?: number | undefined; bottom?: number | undefined } = {}): EdgeInsetsDirectional {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:EdgeInsetsDirectional", "only", [{"name":"start","required":false,"positional":false},{"name":"top","required":false,"positional":false},{"name":"end","required":false,"positional":false},{"name":"bottom","required":false,"positional":false}], [], options) as EdgeInsetsDirectional;
}
}
export namespace EdgeInsetsDirectional {
export function all(value: number): EdgeInsetsDirectional {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:EdgeInsetsDirectional", "all", [{"name":"value","required":true,"positional":true}], [value], {}) as EdgeInsetsDirectional;
}
}
export namespace EdgeInsetsDirectional {
export function symmetric(options: { horizontal?: number | undefined; vertical?: number | undefined } = {}): EdgeInsetsDirectional {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:EdgeInsetsDirectional", "symmetric", [{"name":"horizontal","required":false,"positional":false},{"name":"vertical","required":false,"positional":false}], [], options) as EdgeInsetsDirectional;
}
}
export interface AlignmentGeometry { readonly __AlignmentGeometry: unique symbol;
}
defineObject("flax.core/flutter#type:AlignmentGeometry", [], [], {}, []);
export interface Alignment extends AlignmentGeometry { readonly __Alignment: unique symbol;
readonly x: number;
readonly y: number;
}
defineObject("flax.core/flutter#type:Alignment", ["x","y"], [], {}, []);
export function Alignment(x: number, y: number): Alignment {
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Alignment", "", [{"name":"x","required":true,"positional":true},{"name":"y","required":true,"positional":true}], [x, y], {}) as Alignment;
}
export interface AlignmentDirectional extends AlignmentGeometry { readonly __AlignmentDirectional: unique symbol;
readonly start: number;
readonly y: number;
}
defineObject("flax.core/flutter#type:AlignmentDirectional", ["start","y"], [], {}, []);
export function AlignmentDirectional(start: number, y: number): AlignmentDirectional {
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:AlignmentDirectional", "", [{"name":"start","required":true,"positional":true},{"name":"y","required":true,"positional":true}], [start, y], {}) as AlignmentDirectional;
}
export interface Expanded extends WidgetDescription { readonly type: "flax.core/flutter#type:Expanded";  }
export function Expanded(options: { key?: Key | null | undefined; flex?: Bindable<number> | undefined; child: Bindable<Widget> }): Expanded {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:Expanded", "", [{"name":"key","required":false,"positional":false},{"name":"flex","required":false,"positional":false},{"name":"child","required":true,"positional":false}], [], options) as Expanded;
}
export interface Flexible extends WidgetDescription { readonly type: "flax.core/flutter#type:Flexible";  }
export function Flexible(options: { key?: Key | null | undefined; flex?: Bindable<number> | undefined; fit?: Bindable<FlexFit> | undefined; child: Bindable<Widget> }): Flexible {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:Flexible", "", [{"name":"key","required":false,"positional":false},{"name":"flex","required":false,"positional":false},{"name":"fit","required":false,"positional":false},{"name":"child","required":true,"positional":false}], [], options) as Flexible;
}
export interface Stack extends WidgetDescription { readonly type: "flax.core/flutter#type:Stack";  }
export function Stack(options: { key?: Key | null | undefined; alignment?: Bindable<AlignmentGeometry> | undefined; textDirection?: Bindable<TextDirection | null> | undefined; fit?: Bindable<StackFit> | undefined; clipBehavior?: Bindable<Clip> | undefined; children?: Bindable<DartListInput<Widget, Widget>> | undefined } = {}): Stack {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:Stack", "", [{"name":"key","required":false,"positional":false},{"name":"alignment","required":false,"positional":false},{"name":"textDirection","required":false,"positional":false},{"name":"fit","required":false,"positional":false},{"name":"clipBehavior","required":false,"positional":false},{"name":"children","required":false,"positional":false}], [], options) as Stack;
}
export interface Positioned extends WidgetDescription { readonly type: "flax.core/flutter#type:Positioned";  }
export function Positioned(options: { key?: Key | null | undefined; left?: Bindable<number | null> | undefined; top?: Bindable<number | null> | undefined; right?: Bindable<number | null> | undefined; bottom?: Bindable<number | null> | undefined; width?: Bindable<number | null> | undefined; height?: Bindable<number | null> | undefined; child: Bindable<Widget> }): Positioned {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:Positioned", "", [{"name":"key","required":false,"positional":false},{"name":"left","required":false,"positional":false},{"name":"top","required":false,"positional":false},{"name":"right","required":false,"positional":false},{"name":"bottom","required":false,"positional":false},{"name":"width","required":false,"positional":false},{"name":"height","required":false,"positional":false},{"name":"child","required":true,"positional":false}], [], options) as Positioned;
}
export interface Align extends WidgetDescription { readonly type: "flax.core/flutter#type:Align";  }
export function Align(options: { key?: Key | null | undefined; alignment?: Bindable<AlignmentGeometry> | undefined; widthFactor?: Bindable<number | null> | undefined; heightFactor?: Bindable<number | null> | undefined; child?: Bindable<Widget | null> | undefined } = {}): Align {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:Align", "", [{"name":"key","required":false,"positional":false},{"name":"alignment","required":false,"positional":false},{"name":"widthFactor","required":false,"positional":false},{"name":"heightFactor","required":false,"positional":false},{"name":"child","required":false,"positional":false}], [], options) as Align;
}
export interface Color { readonly __Color: unique symbol;
readonly a: number;
readonly r: number;
readonly g: number;
readonly b: number;
toARGB32(): number;
}
defineObject("flax.core/flutter#type:Color", ["a","r","g","b"], [], {toARGB32(this: object): number {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:Color", "toARGB32", []);
return _flaxResult as number;
},
}, []);
export function Color(value: number): Color {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Color", "", [{"name":"value","required":true,"positional":true}], [value], {}) as Color;
}
export namespace Color {
export function fromARGB(a: number, r: number, g: number, b: number): Color {
if (arguments.length > 4) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Color", "fromARGB", [{"name":"a","required":true,"positional":true},{"name":"r","required":true,"positional":true},{"name":"g","required":true,"positional":true},{"name":"b","required":true,"positional":true}], [a, r, g, b], {}) as Color;
}
}
export interface FontWeight { readonly __FontWeight: unique symbol;
readonly value: number;
}
defineObject("flax.core/flutter#type:FontWeight", ["value"], [], {}, []);
export function FontWeight(value: number): FontWeight {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:FontWeight", "", [{"name":"value","required":true,"positional":true}], [value], {}) as FontWeight;
}
export interface TextStyle { readonly __TextStyle: unique symbol;
readonly inherit: boolean;
readonly color: Color | null;
readonly backgroundColor: Color | null;
readonly fontSize: number | null;
readonly fontWeight: FontWeight | null;
readonly fontStyle: FontStyle | null;
readonly letterSpacing: number | null;
readonly wordSpacing: number | null;
readonly height: number | null;
copyWith(options?: {backgroundColor?: Color | null | undefined; color?: Color | null | undefined; fontSize?: number | null | undefined; fontStyle?: FontStyle | null | undefined; fontWeight?: FontWeight | null | undefined; height?: number | null | undefined; inherit?: boolean | null | undefined; letterSpacing?: number | null | undefined; wordSpacing?: number | null | undefined}): TextStyle;
}
defineObject("flax.core/flutter#type:TextStyle", ["inherit","color","backgroundColor","fontSize","fontWeight","fontStyle","letterSpacing","wordSpacing","height"], [], {copyWith(this: object, options: { backgroundColor?: Color | null | undefined; color?: Color | null | undefined; fontSize?: number | null | undefined; fontStyle?: FontStyle | null | undefined; fontWeight?: FontWeight | null | undefined; height?: number | null | undefined; inherit?: boolean | null | undefined; letterSpacing?: number | null | undefined; wordSpacing?: number | null | undefined } = {}): TextStyle {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["backgroundColor","color","fontSize","fontStyle","fontWeight","height","inherit","letterSpacing","wordSpacing"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:TextStyle", "copyWith", [options.backgroundColor, options.color, options.fontSize, options.fontStyle, options.fontWeight, options.height, options.inherit, options.letterSpacing, options.wordSpacing]);
return _flaxResult as TextStyle;
},
}, []);
export function TextStyle(options: { inherit?: boolean | undefined; color?: Color | null | undefined; backgroundColor?: Color | null | undefined; fontSize?: number | null | undefined; fontWeight?: FontWeight | null | undefined; fontStyle?: FontStyle | null | undefined; letterSpacing?: number | null | undefined; wordSpacing?: number | null | undefined; height?: number | null | undefined } = {}): TextStyle {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:TextStyle", "", [{"name":"inherit","required":false,"positional":false},{"name":"color","required":false,"positional":false},{"name":"backgroundColor","required":false,"positional":false},{"name":"fontSize","required":false,"positional":false},{"name":"fontWeight","required":false,"positional":false},{"name":"fontStyle","required":false,"positional":false},{"name":"letterSpacing","required":false,"positional":false},{"name":"wordSpacing","required":false,"positional":false},{"name":"height","required":false,"positional":false}], [], options) as TextStyle;
}
export interface Key { readonly __Key: unique symbol;
}
defineObject("flax.core/flutter#type:Key", [], [], {}, []);
export interface LocalKey extends Key { readonly __LocalKey: unique symbol;
}
defineObject("flax.core/flutter#type:LocalKey", [], [], {}, []);
export interface TextEditingController extends Listenable, ValueListenable<TextEditingValue> { readonly __TextEditingController: unique symbol;
get value(): TextEditingValue;
get text(): string;
get selection(): TextSelection;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
clear(): void;
clearComposing(): void;
dispose(): void;
set text(value: string);
set value(value: TextEditingValue);
set selection(value: TextSelection);
}
defineObject("flax.core/flutter#type:TextEditingController", ["value","text","selection"], ["text","value","selection"], {addListener(this: object, listener: (() => void)): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:TextEditingController", "addListener", [listener]);
},
removeListener(this: object, listener: (() => void)): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:TextEditingController", "removeListener", [listener]);
},
clear(this: object): void {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:TextEditingController", "clear", []);
},
clearComposing(this: object): void {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:TextEditingController", "clearComposing", []);
},
dispose(this: object): void {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:TextEditingController", "dispose", []);
},
}, ["removeListener"]);
export function TextEditingController(options: { text?: string | null | undefined } = {}): TextEditingController {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:TextEditingController", "", [{"name":"text","required":false,"positional":false}], [], options) as TextEditingController;
}
export namespace TextEditingController {
export function fromValue(value: TextEditingValue | null): TextEditingController {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:TextEditingController", "fromValue", [{"name":"value","required":true,"positional":true}], [value], {}) as TextEditingController;
}
}
export interface TextEditingValue { readonly __TextEditingValue: unique symbol;
readonly text: string;
readonly selection: TextSelection;
readonly composing: TextRange;
readonly isComposingRangeValid: boolean;
copyWith(options?: {composing?: TextRange | null | undefined; selection?: TextSelection | null | undefined; text?: string | null | undefined}): TextEditingValue;
}
defineObject("flax.core/flutter#type:TextEditingValue", ["text","selection","composing","isComposingRangeValid"], [], {copyWith(this: object, options: { composing?: TextRange | null | undefined; selection?: TextSelection | null | undefined; text?: string | null | undefined } = {}): TextEditingValue {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["composing","selection","text"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:TextEditingValue", "copyWith", [options.composing, options.selection, options.text]);
return _flaxResult as TextEditingValue;
},
}, []);
export function TextEditingValue(options: { text?: string | undefined; selection?: TextSelection | undefined; composing?: TextRange | undefined } = {}): TextEditingValue {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:TextEditingValue", "", [{"name":"text","required":false,"positional":false},{"name":"selection","required":false,"positional":false},{"name":"composing","required":false,"positional":false}], [], options) as TextEditingValue;
}
export interface TextSelection extends TextRange { readonly __TextSelection: unique symbol;
readonly start: number;
readonly end: number;
readonly isValid: boolean;
readonly isCollapsed: boolean;
readonly isNormalized: boolean;
readonly baseOffset: number;
readonly extentOffset: number;
readonly affinity: TextAffinity;
readonly isDirectional: boolean;
copyWith(options?: {affinity?: TextAffinity | null | undefined; baseOffset?: number | null | undefined; extentOffset?: number | null | undefined; isDirectional?: boolean | null | undefined}): TextSelection;
}
defineObject("flax.core/flutter#type:TextSelection", ["start","end","isValid","isCollapsed","isNormalized","baseOffset","extentOffset","affinity","isDirectional"], [], {copyWith(this: object, options: { affinity?: TextAffinity | null | undefined; baseOffset?: number | null | undefined; extentOffset?: number | null | undefined; isDirectional?: boolean | null | undefined } = {}): TextSelection {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["affinity","baseOffset","extentOffset","isDirectional"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:TextSelection", "copyWith", [options.affinity, options.baseOffset, options.extentOffset, options.isDirectional]);
return _flaxResult as TextSelection;
},
}, []);
export function TextSelection(options: { baseOffset: number; extentOffset: number; affinity?: TextAffinity | undefined; isDirectional?: boolean | undefined }): TextSelection {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:TextSelection", "", [{"name":"baseOffset","required":true,"positional":false},{"name":"extentOffset","required":true,"positional":false},{"name":"affinity","required":false,"positional":false},{"name":"isDirectional","required":false,"positional":false}], [], options) as TextSelection;
}
export namespace TextSelection {
export function collapsed(options: { offset: number; affinity?: TextAffinity | undefined }): TextSelection {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:TextSelection", "collapsed", [{"name":"offset","required":true,"positional":false},{"name":"affinity","required":false,"positional":false}], [], options) as TextSelection;
}
}
export interface TextRange { readonly __TextRange: unique symbol;
readonly start: number;
readonly end: number;
readonly isValid: boolean;
readonly isCollapsed: boolean;
readonly isNormalized: boolean;
}
defineObject("flax.core/flutter#type:TextRange", ["start","end","isValid","isCollapsed","isNormalized"], [], {}, []);
export function TextRange(options: { start: number; end: number }): TextRange {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:TextRange", "", [{"name":"start","required":true,"positional":false},{"name":"end","required":true,"positional":false}], [], options) as TextRange;
}
export namespace TextRange {
export function collapsed(offset: number): TextRange {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:TextRange", "collapsed", [{"name":"offset","required":true,"positional":true}], [offset], {}) as TextRange;
}
}
export interface Navigator extends WidgetDescription { readonly type: "flax.core/flutter#type:Navigator";  }
export function Navigator(options: { key?: Key | null | undefined; pages?: Bindable<DartListInput<Page<unknown | null>, Page<unknown | null>>> | undefined; initialRoute?: Bindable<string | null> | undefined; onGenerateRoute?: Bindable<((settings: RouteSettings) => Route<unknown | null> | null) | null> | undefined; onUnknownRoute?: Bindable<((settings: RouteSettings) => Route<unknown | null> | null) | null> | undefined; observers?: Bindable<DartListInput<NavigatorObserver, NavigatorObserver>> | undefined; onDidRemovePage?: Bindable<((page: Page<unknown | null>) => void) | null> | undefined } = {}): Navigator {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:Navigator", "", [{"name":"key","required":false,"positional":false},{"name":"pages","required":false,"positional":false},{"name":"initialRoute","required":false,"positional":false},{"name":"onGenerateRoute","required":false,"positional":false},{"name":"onUnknownRoute","required":false,"positional":false},{"name":"observers","required":false,"positional":false},{"name":"onDidRemovePage","required":false,"positional":false}], [], options) as Navigator;
}
export interface NavigatorState { readonly __NavigatorState: unique symbol;
readonly mounted: boolean;
push<T extends NavigationData | null = NavigationData | null>(route: Route<T>): Promise<T | null>;
pushNamed<T extends NavigationData | null = NavigationData | null>(routeName: string, options?: {arguments?: NavigationData | null | undefined}): Promise<T | null>;
pushReplacement<T extends NavigationData | null = NavigationData | null, TO extends NavigationData | null = NavigationData | null>(newRoute: Route<T>, options?: {result?: TO | null | undefined}): Promise<T | null>;
pop<T extends NavigationData | null = NavigationData | null>(result?: T | null): void;
maybePop<T extends NavigationData | null = NavigationData | null>(result?: T | null): Promise<boolean>;
canPop(): boolean;
}
defineState("flax.core/flutter#type:NavigatorState", ["mounted"], {push(this: object, route: Route<unknown | null>): Promise<NavigationData | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeInstance(this, "flax.core/flutter#type:NavigatorState", "push", [route]);
return _flaxResult as Promise<NavigationData | null>;
},
pushNamed(this: object, routeName: string, options: { arguments?: NavigationData | null | undefined } = {}): Promise<NavigationData | null> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["arguments"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeInstance(this, "flax.core/flutter#type:NavigatorState", "pushNamed", [routeName, options.arguments]);
return _flaxResult as Promise<NavigationData | null>;
},
pushReplacement(this: object, newRoute: Route<unknown | null>, options: { result?: NavigationData | null | undefined } = {}): Promise<NavigationData | null> {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["result"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeInstance(this, "flax.core/flutter#type:NavigatorState", "pushReplacement", [newRoute, options.result]);
return _flaxResult as Promise<NavigationData | null>;
},
pop(this: object, result?: NavigationData | null): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeInstance(this, "flax.core/flutter#type:NavigatorState", "pop", [result]);
},
maybePop(this: object, result?: NavigationData | null): Promise<boolean> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeInstance(this, "flax.core/flutter#type:NavigatorState", "maybePop", [result]);
return _flaxResult as Promise<boolean>;
},
canPop(this: object): boolean {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeInstance(this, "flax.core/flutter#type:NavigatorState", "canPop", []);
return _flaxResult as boolean;
},
});
export interface Route<T extends unknown | null = unknown | null> extends DartValue { readonly __Route: unique symbol;  }
export interface Page<T extends unknown | null = unknown | null> extends DartValue { readonly __Page: unique symbol; readonly key: LocalKey | null; readonly name: string | null; readonly arguments: NavigationData | null; }
export interface RouteSettings { readonly __RouteSettings: unique symbol;
readonly name: string | null;
readonly arguments: NavigationData | null;
}
defineObject("flax.core/flutter#type:RouteSettings", ["name","arguments"], [], {}, []);
export function RouteSettings(options: { name?: string | null | undefined; arguments?: NavigationData | null | undefined } = {}): RouteSettings {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:RouteSettings", "", [{"name":"name","required":false,"positional":false},{"name":"arguments","required":false,"positional":false}], [], options) as RouteSettings;
}
export interface NavigatorPopHandler<T extends unknown | null = unknown | null> extends WidgetDescription { readonly type: "flax.core/flutter#type:NavigatorPopHandler";  }
export function NavigatorPopHandler<T extends unknown | null = unknown | null>(options: { key?: Key | null | undefined; onPopWithResult?: Bindable<((result: NavigationData | null) => void) | null> | undefined; enabled?: Bindable<boolean> | undefined; child: Bindable<Widget> }): NavigatorPopHandler<T> {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:NavigatorPopHandler", "", [{"name":"key","required":false,"positional":false},{"name":"onPopWithResult","required":false,"positional":false},{"name":"enabled","required":false,"positional":false},{"name":"child","required":true,"positional":false}], [], options) as NavigatorPopHandler<T>;
}
export interface PopScope<T extends unknown | null = unknown | null> extends WidgetDescription { readonly type: "flax.core/flutter#type:PopScope";  }
export function PopScope<T extends unknown | null = unknown | null>(options: { key?: Key | null | undefined; child: Bindable<Widget>; canPop?: Bindable<boolean> | undefined; onPopInvokedWithResult?: Bindable<((didPop: boolean, result: NavigationData | null) => void) | null> | undefined }): PopScope<T> {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:PopScope", "", [{"name":"key","required":false,"positional":false},{"name":"child","required":true,"positional":false},{"name":"canPop","required":false,"positional":false},{"name":"onPopInvokedWithResult","required":false,"positional":false}], [], options) as PopScope<T>;
}
export interface Builder extends WidgetDescription { readonly type: "flax.core/flutter#type:Builder";  }
export function Builder(options: { key?: Key | null | undefined; builder: Bindable<((context: BuildContext) => Widget)> }): Builder {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:Builder", "", [{"name":"key","required":false,"positional":false},{"name":"builder","required":true,"positional":false}], [], options) as Builder;
}
export interface LayoutBuilder extends WidgetDescription { readonly type: "flax.core/flutter#type:LayoutBuilder";  }
export function LayoutBuilder(options: { key?: Key | null | undefined; builder: Bindable<((context: BuildContext, constraints: BoxConstraints) => Widget)> }): LayoutBuilder {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:LayoutBuilder", "", [{"name":"key","required":false,"positional":false},{"name":"builder","required":true,"positional":false}], [], options) as LayoutBuilder;
}
export interface BuildContext extends ComponentContext { readonly __BuildContext: unique symbol;
readonly mounted: boolean;
readonly size: Size | null;
}
defineContext("flax.core/flutter#type:BuildContext", ["mounted","size"]);
export interface Size { readonly __Size: unique symbol;
readonly width: number;
readonly height: number;
}
defineObject("flax.core/flutter#type:Size", ["width","height"], [], {}, []);
export function Size(width: number, height: number): Size {
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Size", "", [{"name":"width","required":true,"positional":true},{"name":"height","required":true,"positional":true}], [width, height], {}) as Size;
}
export namespace Size {
export function fromHeight(height: number): Size {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:Size", "fromHeight", [{"name":"height","required":true,"positional":true}], [height], {}) as Size;
}
}
export interface SchedulerBinding { readonly __SchedulerBinding: unique symbol;
readonly endOfFrame: Promise<void>;
}
defineObject("flax.core/flutter#type:SchedulerBinding", ["endOfFrame"], [], {}, []);
export interface BoxConstraints { readonly __BoxConstraints: unique symbol;
readonly minWidth: number;
readonly maxWidth: number;
readonly minHeight: number;
readonly maxHeight: number;
}
defineObject("flax.core/flutter#type:BoxConstraints", ["minWidth","maxWidth","minHeight","maxHeight"], [], {}, []);
export function BoxConstraints(options: { minWidth?: number | undefined; maxWidth?: number | undefined; minHeight?: number | undefined; maxHeight?: number | undefined } = {}): BoxConstraints {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BoxConstraints", "", [{"name":"minWidth","required":false,"positional":false},{"name":"maxWidth","required":false,"positional":false},{"name":"minHeight","required":false,"positional":false},{"name":"maxHeight","required":false,"positional":false}], [], options) as BoxConstraints;
}
export namespace BoxConstraints {
export function tightFor(options: { width?: number | null | undefined; height?: number | null | undefined } = {}): BoxConstraints {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BoxConstraints", "tightFor", [{"name":"width","required":false,"positional":false},{"name":"height","required":false,"positional":false}], [], options) as BoxConstraints;
}
}
export namespace BoxConstraints {
export function expand(options: { width?: number | null | undefined; height?: number | null | undefined } = {}): BoxConstraints {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:BoxConstraints", "expand", [{"name":"width","required":false,"positional":false},{"name":"height","required":false,"positional":false}], [], options) as BoxConstraints;
}
}
export interface Text extends WidgetDescription { readonly type: "flax.core/flutter#type:Text";  }
export function Text(data: Bindable<string>, options: { key?: Key | null | undefined; style?: Bindable<TextStyle | null> | undefined; textAlign?: Bindable<TextAlign | null> | undefined; textDirection?: Bindable<TextDirection | null> | undefined; softWrap?: Bindable<boolean | null> | undefined; overflow?: Bindable<TextOverflow | null> | undefined; maxLines?: Bindable<number | null> | undefined } = {}): Text {
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:Text", "", [{"name":"data","required":true,"positional":true},{"name":"key","required":false,"positional":false},{"name":"style","required":false,"positional":false},{"name":"textAlign","required":false,"positional":false},{"name":"textDirection","required":false,"positional":false},{"name":"softWrap","required":false,"positional":false},{"name":"overflow","required":false,"positional":false},{"name":"maxLines","required":false,"positional":false}], [data], options) as Text;
}
export interface Row extends WidgetDescription { readonly type: "flax.core/flutter#type:Row";  }
export function Row(options: { key?: Key | null | undefined; mainAxisAlignment?: Bindable<MainAxisAlignment> | undefined; mainAxisSize?: Bindable<MainAxisSize> | undefined; crossAxisAlignment?: Bindable<CrossAxisAlignment> | undefined; textDirection?: Bindable<TextDirection | null> | undefined; verticalDirection?: Bindable<VerticalDirection> | undefined; textBaseline?: Bindable<TextBaseline | null> | undefined; spacing?: Bindable<number> | undefined; children?: Bindable<DartListInput<Widget, Widget>> | undefined } = {}): Row {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:Row", "", [{"name":"key","required":false,"positional":false},{"name":"mainAxisAlignment","required":false,"positional":false},{"name":"mainAxisSize","required":false,"positional":false},{"name":"crossAxisAlignment","required":false,"positional":false},{"name":"textDirection","required":false,"positional":false},{"name":"verticalDirection","required":false,"positional":false},{"name":"textBaseline","required":false,"positional":false},{"name":"spacing","required":false,"positional":false},{"name":"children","required":false,"positional":false}], [], options) as Row;
}
export interface Column extends WidgetDescription { readonly type: "flax.core/flutter#type:Column";  }
export function Column(options: { key?: Key | null | undefined; mainAxisAlignment?: Bindable<MainAxisAlignment> | undefined; mainAxisSize?: Bindable<MainAxisSize> | undefined; crossAxisAlignment?: Bindable<CrossAxisAlignment> | undefined; textDirection?: Bindable<TextDirection | null> | undefined; verticalDirection?: Bindable<VerticalDirection> | undefined; textBaseline?: Bindable<TextBaseline | null> | undefined; spacing?: Bindable<number> | undefined; children?: Bindable<DartListInput<Widget, Widget>> | undefined } = {}): Column {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:Column", "", [{"name":"key","required":false,"positional":false},{"name":"mainAxisAlignment","required":false,"positional":false},{"name":"mainAxisSize","required":false,"positional":false},{"name":"crossAxisAlignment","required":false,"positional":false},{"name":"textDirection","required":false,"positional":false},{"name":"verticalDirection","required":false,"positional":false},{"name":"textBaseline","required":false,"positional":false},{"name":"spacing","required":false,"positional":false},{"name":"children","required":false,"positional":false}], [], options) as Column;
}
export interface Center extends WidgetDescription { readonly type: "flax.core/flutter#type:Center";  }
export function Center(options: { key?: Key | null | undefined; widthFactor?: Bindable<number | null> | undefined; heightFactor?: Bindable<number | null> | undefined; child?: Bindable<Widget | null> | undefined } = {}): Center {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:Center", "", [{"name":"key","required":false,"positional":false},{"name":"widthFactor","required":false,"positional":false},{"name":"heightFactor","required":false,"positional":false},{"name":"child","required":false,"positional":false}], [], options) as Center;
}
export interface Padding extends WidgetDescription { readonly type: "flax.core/flutter#type:Padding";  }
export function Padding(options: { key?: Key | null | undefined; padding: Bindable<EdgeInsetsGeometry>; child?: Bindable<Widget | null> | undefined }): Padding {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:Padding", "", [{"name":"key","required":false,"positional":false},{"name":"padding","required":true,"positional":false},{"name":"child","required":false,"positional":false}], [], options) as Padding;
}
export interface SizedBox extends WidgetDescription { readonly type: "flax.core/flutter#type:SizedBox";  }
export function SizedBox(options: { key?: Key | null | undefined; width?: Bindable<number | null> | undefined; height?: Bindable<number | null> | undefined; child?: Bindable<Widget | null> | undefined } = {}): SizedBox {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:SizedBox", "", [{"name":"key","required":false,"positional":false},{"name":"width","required":false,"positional":false},{"name":"height","required":false,"positional":false},{"name":"child","required":false,"positional":false}], [], options) as SizedBox;
}
export interface EdgeInsets extends EdgeInsetsGeometry { readonly __EdgeInsets: unique symbol;
readonly left: number;
readonly top: number;
readonly right: number;
readonly bottom: number;
}
defineObject("flax.core/flutter#type:EdgeInsets", ["left","top","right","bottom"], [], {}, []);
export namespace EdgeInsets {
export function all(value: number): EdgeInsets {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:EdgeInsets", "all", [{"name":"value","required":true,"positional":true}], [value], {}) as EdgeInsets;
}
}
export namespace EdgeInsets {
export function symmetric(options: { vertical?: number | undefined; horizontal?: number | undefined } = {}): EdgeInsets {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:EdgeInsets", "symmetric", [{"name":"vertical","required":false,"positional":false},{"name":"horizontal","required":false,"positional":false}], [], options) as EdgeInsets;
}
}
export namespace EdgeInsets {
export function fromLTRB(left: number, top: number, right: number, bottom: number): EdgeInsets {
if (arguments.length > 4) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:EdgeInsets", "fromLTRB", [{"name":"left","required":true,"positional":true},{"name":"top","required":true,"positional":true},{"name":"right","required":true,"positional":true},{"name":"bottom","required":true,"positional":true}], [left, top, right, bottom], {}) as EdgeInsets;
}
}
export namespace EdgeInsets {
export function only(options: { left?: number | undefined; top?: number | undefined; right?: number | undefined; bottom?: number | undefined } = {}): EdgeInsets {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:EdgeInsets", "only", [{"name":"left","required":false,"positional":false},{"name":"top","required":false,"positional":false},{"name":"right","required":false,"positional":false},{"name":"bottom","required":false,"positional":false}], [], options) as EdgeInsets;
}
}
export interface ValueKey<T extends (string | number) = (string | number)> extends LocalKey, Key { readonly __ValueKey: unique symbol;
readonly value: T;
}
defineObject("flax.core/flutter#type:ValueKey", ["value"], [], {}, []);
export function ValueKey<T extends (string | number) = (string | number)>(value: T): ValueKey<T> {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:ValueKey", "", [{"name":"value","required":true,"positional":true}], [value], {}) as ValueKey<T>;
}
export interface ScrollController extends Listenable { readonly __ScrollController: unique symbol;
readonly hasClients: boolean;
readonly offset: number;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
jumpTo(value: number): void;
dispose(): void;
}
defineObject("flax.core/flutter#type:ScrollController", ["hasClients","offset"], [], {addListener(this: object, listener: (() => void)): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:ScrollController", "addListener", [listener]);
},
removeListener(this: object, listener: (() => void)): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:ScrollController", "removeListener", [listener]);
},
jumpTo(this: object, value: number): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:ScrollController", "jumpTo", [value]);
},
dispose(this: object): void {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:ScrollController", "dispose", []);
},
}, ["removeListener"]);
export function ScrollController(options: { initialScrollOffset?: number | undefined; keepScrollOffset?: boolean | undefined; debugLabel?: string | null | undefined } = {}): ScrollController {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:ScrollController", "", [{"name":"initialScrollOffset","required":false,"positional":false},{"name":"keepScrollOffset","required":false,"positional":false},{"name":"debugLabel","required":false,"positional":false}], [], options) as ScrollController;
}
export interface ListView extends WidgetDescription { readonly type: "flax.core/flutter#type:ListView";  }
export namespace ListView {
export function builder(options: { key?: Key | null | undefined; scrollDirection?: Bindable<Axis> | undefined; reverse?: Bindable<boolean> | undefined; controller?: Bindable<ScrollController | null> | undefined; primary?: Bindable<boolean | null> | undefined; shrinkWrap?: Bindable<boolean> | undefined; padding?: Bindable<EdgeInsetsGeometry | null> | undefined; itemExtent?: Bindable<number | null> | undefined; itemBuilder: Bindable<((context: BuildContext, index: number) => Widget | null)>; findChildIndexCallback?: Bindable<((key: Key) => number | null) | null> | undefined; itemCount?: Bindable<number | null> | undefined; addAutomaticKeepAlives?: Bindable<boolean> | undefined; addRepaintBoundaries?: Bindable<boolean> | undefined; addSemanticIndexes?: Bindable<boolean> | undefined }): ListView {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:ListView", "builder", [{"name":"key","required":false,"positional":false},{"name":"scrollDirection","required":false,"positional":false},{"name":"reverse","required":false,"positional":false},{"name":"controller","required":false,"positional":false},{"name":"primary","required":false,"positional":false},{"name":"shrinkWrap","required":false,"positional":false},{"name":"padding","required":false,"positional":false},{"name":"itemExtent","required":false,"positional":false},{"name":"itemBuilder","required":true,"positional":false},{"name":"findChildIndexCallback","required":false,"positional":false},{"name":"itemCount","required":false,"positional":false},{"name":"addAutomaticKeepAlives","required":false,"positional":false},{"name":"addRepaintBoundaries","required":false,"positional":false},{"name":"addSemanticIndexes","required":false,"positional":false}], [], options) as ListView;
}
}
export interface SingleChildScrollView extends WidgetDescription { readonly type: "flax.core/flutter#type:SingleChildScrollView";  }
export function SingleChildScrollView(options: { key?: Key | null | undefined; scrollDirection?: Bindable<Axis> | undefined; reverse?: Bindable<boolean> | undefined; padding?: Bindable<EdgeInsetsGeometry | null> | undefined; primary?: Bindable<boolean | null> | undefined; controller?: Bindable<ScrollController | null> | undefined; child?: Bindable<Widget | null> | undefined } = {}): SingleChildScrollView {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:SingleChildScrollView", "", [{"name":"key","required":false,"positional":false},{"name":"scrollDirection","required":false,"positional":false},{"name":"reverse","required":false,"positional":false},{"name":"padding","required":false,"positional":false},{"name":"primary","required":false,"positional":false},{"name":"controller","required":false,"positional":false},{"name":"child","required":false,"positional":false}], [], options) as SingleChildScrollView;
}
export interface FocusNode extends Listenable { readonly __FocusNode: unique symbol;
readonly hasFocus: boolean;
readonly hasPrimaryFocus: boolean;
get canRequestFocus(): boolean;
get skipTraversal(): boolean;
addListener(listener: (() => void)): void;
removeListener(listener: (() => void)): void;
requestFocus(node?: FocusNode | null): void;
unfocus(options?: {disposition?: UnfocusDisposition | undefined}): void;
nextFocus(): boolean;
previousFocus(): boolean;
dispose(): void;
set canRequestFocus(value: boolean);
set skipTraversal(value: boolean);
}
defineObject("flax.core/flutter#type:FocusNode", ["hasFocus","hasPrimaryFocus","canRequestFocus","skipTraversal"], ["canRequestFocus","skipTraversal"], {addListener(this: object, listener: (() => void)): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:FocusNode", "addListener", [listener]);
},
removeListener(this: object, listener: (() => void)): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:FocusNode", "removeListener", [listener]);
},
requestFocus(this: object, node?: FocusNode | null): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:FocusNode", "requestFocus", [node]);
},
unfocus(this: object, options: { disposition?: UnfocusDisposition | undefined } = {}): void {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["disposition"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:FocusNode", "unfocus", [options.disposition]);
},
nextFocus(this: object): boolean {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:FocusNode", "nextFocus", []);
return _flaxResult as boolean;
},
previousFocus(this: object): boolean {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:FocusNode", "previousFocus", []);
return _flaxResult as boolean;
},
dispose(this: object): void {
if (arguments.length > 0) throw new TypeError('Too many method arguments');
const _flaxResult = invokeObject(this, "flax.core/flutter#type:FocusNode", "dispose", []);
},
}, ["removeListener"]);
export function FocusNode(options: { debugLabel?: string | null | undefined; skipTraversal?: boolean | undefined; canRequestFocus?: boolean | undefined } = {}): FocusNode {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:FocusNode", "", [{"name":"debugLabel","required":false,"positional":false},{"name":"skipTraversal","required":false,"positional":false},{"name":"canRequestFocus","required":false,"positional":false}], [], options) as FocusNode;
}
export interface TextInputFormatter { readonly __TextInputFormatter: unique symbol;
}
defineObject("flax.core/flutter#type:TextInputFormatter", [], [], {}, []);
export namespace TextInputFormatter {
export function withFunction(formatFunction: ((oldValue: TextEditingValue, newValue: TextEditingValue) => TextEditingValue)): TextInputFormatter {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:TextInputFormatter", "withFunction", [{"name":"formatFunction","required":true,"positional":true}], [formatFunction], {}) as TextInputFormatter;
}
}
export interface FilteringTextInputFormatter extends TextInputFormatter { readonly __FilteringTextInputFormatter: unique symbol;
}
defineObject("flax.core/flutter#type:FilteringTextInputFormatter", [], [], {}, []);
export function FilteringTextInputFormatter(filterPattern: Pattern | string, options: { allow: boolean; replacementString?: string | undefined }): FilteringTextInputFormatter {
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:FilteringTextInputFormatter", "", [{"name":"filterPattern","required":true,"positional":true},{"name":"allow","required":true,"positional":false},{"name":"replacementString","required":false,"positional":false}], [filterPattern], options) as FilteringTextInputFormatter;
}
export namespace FilteringTextInputFormatter {
export function allow(filterPattern: Pattern | string, options: { replacementString?: string | undefined } = {}): FilteringTextInputFormatter {
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:FilteringTextInputFormatter", "allow", [{"name":"filterPattern","required":true,"positional":true},{"name":"replacementString","required":false,"positional":false}], [filterPattern], options) as FilteringTextInputFormatter;
}
}
export namespace FilteringTextInputFormatter {
export function deny(filterPattern: Pattern | string, options: { replacementString?: string | undefined } = {}): FilteringTextInputFormatter {
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:FilteringTextInputFormatter", "deny", [{"name":"filterPattern","required":true,"positional":true},{"name":"replacementString","required":false,"positional":false}], [filterPattern], options) as FilteringTextInputFormatter;
}
}
export interface LengthLimitingTextInputFormatter extends TextInputFormatter { readonly __LengthLimitingTextInputFormatter: unique symbol;
}
defineObject("flax.core/flutter#type:LengthLimitingTextInputFormatter", [], [], {}, []);
export function LengthLimitingTextInputFormatter(maxLength: number | null, options: { maxLengthEnforcement?: MaxLengthEnforcement | null | undefined } = {}): LengthLimitingTextInputFormatter {
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:LengthLimitingTextInputFormatter", "", [{"name":"maxLength","required":true,"positional":true},{"name":"maxLengthEnforcement","required":false,"positional":false}], [maxLength], options) as LengthLimitingTextInputFormatter;
}
export interface Pattern { readonly __Pattern: unique symbol;
}
defineObject("flax.core/flutter#type:Pattern", [], [], {}, []);
export interface RegExp extends Pattern { readonly __RegExp: unique symbol;
}
defineObject("flax.core/flutter#type:RegExp", [], [], {}, []);
export function RegExp(source: string, options: { multiLine?: boolean | undefined; caseSensitive?: boolean | undefined; unicode?: boolean | undefined; dotAll?: boolean | undefined } = {}): RegExp {
if (arguments.length > 2) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:RegExp", "", [{"name":"source","required":true,"positional":true},{"name":"multiLine","required":false,"positional":false},{"name":"caseSensitive","required":false,"positional":false},{"name":"unicode","required":false,"positional":false},{"name":"dotAll","required":false,"positional":false}], [source], options) as RegExp;
}
export interface Listener extends WidgetDescription { readonly type: "flax.core/flutter#type:Listener";  }
export function Listener(options: { key?: Key | null | undefined; onPointerDown?: Bindable<((event: PointerEvent) => void) | null> | undefined; onPointerMove?: Bindable<((event: PointerEvent) => void) | null> | undefined; onPointerUp?: Bindable<((event: PointerEvent) => void) | null> | undefined; onPointerHover?: Bindable<((event: PointerEvent) => void) | null> | undefined; onPointerCancel?: Bindable<((event: PointerEvent) => void) | null> | undefined; onPointerSignal?: Bindable<((event: PointerEvent) => void) | null> | undefined; behavior?: Bindable<HitTestBehavior> | undefined; child?: Bindable<Widget | null> | undefined } = {}): Listener {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:Listener", "", [{"name":"key","required":false,"positional":false},{"name":"onPointerDown","required":false,"positional":false},{"name":"onPointerMove","required":false,"positional":false},{"name":"onPointerUp","required":false,"positional":false},{"name":"onPointerHover","required":false,"positional":false},{"name":"onPointerCancel","required":false,"positional":false},{"name":"onPointerSignal","required":false,"positional":false},{"name":"behavior","required":false,"positional":false},{"name":"child","required":false,"positional":false}], [], options) as Listener;
}
export interface MouseRegion extends WidgetDescription { readonly type: "flax.core/flutter#type:MouseRegion";  }
export function MouseRegion(options: { key?: Key | null | undefined; onEnter?: Bindable<((event: PointerEvent) => void) | null> | undefined; onExit?: Bindable<((event: PointerEvent) => void) | null> | undefined; onHover?: Bindable<((event: PointerEvent) => void) | null> | undefined; opaque?: Bindable<boolean> | undefined; hitTestBehavior?: Bindable<HitTestBehavior | null> | undefined; child?: Bindable<Widget | null> | undefined } = {}): MouseRegion {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:MouseRegion", "", [{"name":"key","required":false,"positional":false},{"name":"onEnter","required":false,"positional":false},{"name":"onExit","required":false,"positional":false},{"name":"onHover","required":false,"positional":false},{"name":"opaque","required":false,"positional":false},{"name":"hitTestBehavior","required":false,"positional":false},{"name":"child","required":false,"positional":false}], [], options) as MouseRegion;
}
export interface KeyboardListener extends WidgetDescription { readonly type: "flax.core/flutter#type:KeyboardListener";  }
export function KeyboardListener(options: { key?: Key | null | undefined; focusNode: Bindable<FocusNode>; autofocus?: Bindable<boolean> | undefined; includeSemantics?: Bindable<boolean> | undefined; onKeyEvent?: Bindable<((value: KeyEvent) => void) | null> | undefined; child: Bindable<Widget> }): KeyboardListener {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:KeyboardListener", "", [{"name":"key","required":false,"positional":false},{"name":"focusNode","required":true,"positional":false},{"name":"autofocus","required":false,"positional":false},{"name":"includeSemantics","required":false,"positional":false},{"name":"onKeyEvent","required":false,"positional":false},{"name":"child","required":true,"positional":false}], [], options) as KeyboardListener;
}
export interface SafeArea extends WidgetDescription { readonly type: "flax.core/flutter#type:SafeArea";  }
export function SafeArea(options: { key?: Key | null | undefined; left?: Bindable<boolean> | undefined; top?: Bindable<boolean> | undefined; right?: Bindable<boolean> | undefined; bottom?: Bindable<boolean> | undefined; minimum?: Bindable<EdgeInsets> | undefined; maintainBottomViewPadding?: Bindable<boolean> | undefined; child: Bindable<Widget> }): SafeArea {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:SafeArea", "", [{"name":"key","required":false,"positional":false},{"name":"left","required":false,"positional":false},{"name":"top","required":false,"positional":false},{"name":"right","required":false,"positional":false},{"name":"bottom","required":false,"positional":false},{"name":"minimum","required":false,"positional":false},{"name":"maintainBottomViewPadding","required":false,"positional":false},{"name":"child","required":true,"positional":false}], [], options) as SafeArea;
}
export interface Wrap extends WidgetDescription { readonly type: "flax.core/flutter#type:Wrap";  }
export function Wrap(options: { key?: Key | null | undefined; direction?: Bindable<Axis> | undefined; alignment?: Bindable<WrapAlignment> | undefined; spacing?: Bindable<number> | undefined; runAlignment?: Bindable<WrapAlignment> | undefined; runSpacing?: Bindable<number> | undefined; crossAxisAlignment?: Bindable<WrapCrossAlignment> | undefined; textDirection?: Bindable<TextDirection | null> | undefined; verticalDirection?: Bindable<VerticalDirection> | undefined; clipBehavior?: Bindable<Clip> | undefined; children?: Bindable<DartListInput<Widget, Widget>> | undefined } = {}): Wrap {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:Wrap", "", [{"name":"key","required":false,"positional":false},{"name":"direction","required":false,"positional":false},{"name":"alignment","required":false,"positional":false},{"name":"spacing","required":false,"positional":false},{"name":"runAlignment","required":false,"positional":false},{"name":"runSpacing","required":false,"positional":false},{"name":"crossAxisAlignment","required":false,"positional":false},{"name":"textDirection","required":false,"positional":false},{"name":"verticalDirection","required":false,"positional":false},{"name":"clipBehavior","required":false,"positional":false},{"name":"children","required":false,"positional":false}], [], options) as Wrap;
}
export interface FittedBox extends WidgetDescription { readonly type: "flax.core/flutter#type:FittedBox";  }
export function FittedBox(options: { key?: Key | null | undefined; fit?: Bindable<BoxFit> | undefined; alignment?: Bindable<AlignmentGeometry> | undefined; clipBehavior?: Bindable<Clip> | undefined; child?: Bindable<Widget | null> | undefined } = {}): FittedBox {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:FittedBox", "", [{"name":"key","required":false,"positional":false},{"name":"fit","required":false,"positional":false},{"name":"alignment","required":false,"positional":false},{"name":"clipBehavior","required":false,"positional":false},{"name":"child","required":false,"positional":false}], [], options) as FittedBox;
}
export interface AspectRatio extends WidgetDescription { readonly type: "flax.core/flutter#type:AspectRatio";  }
export function AspectRatio(options: { key?: Key | null | undefined; aspectRatio: Bindable<number>; child?: Bindable<Widget | null> | undefined }): AspectRatio {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:AspectRatio", "", [{"name":"key","required":false,"positional":false},{"name":"aspectRatio","required":true,"positional":false},{"name":"child","required":false,"positional":false}], [], options) as AspectRatio;
}
export interface ConstrainedBox extends WidgetDescription { readonly type: "flax.core/flutter#type:ConstrainedBox";  }
export function ConstrainedBox(options: { key?: Key | null | undefined; constraints: Bindable<BoxConstraints>; child?: Bindable<Widget | null> | undefined }): ConstrainedBox {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:ConstrainedBox", "", [{"name":"key","required":false,"positional":false},{"name":"constraints","required":true,"positional":false},{"name":"child","required":false,"positional":false}], [], options) as ConstrainedBox;
}
export interface Opacity extends WidgetDescription { readonly type: "flax.core/flutter#type:Opacity";  }
export function Opacity(options: { key?: Key | null | undefined; opacity: Bindable<number>; alwaysIncludeSemantics?: Bindable<boolean> | undefined; child?: Bindable<Widget | null> | undefined }): Opacity {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:Opacity", "", [{"name":"key","required":false,"positional":false},{"name":"opacity","required":true,"positional":false},{"name":"alwaysIncludeSemantics","required":false,"positional":false},{"name":"child","required":false,"positional":false}], [], options) as Opacity;
}
export interface Visibility extends WidgetDescription { readonly type: "flax.core/flutter#type:Visibility";  }
export function Visibility(options: { key?: Key | null | undefined; child: Bindable<Widget>; visible?: Bindable<boolean> | undefined; maintainState?: Bindable<boolean> | undefined; maintainAnimation?: Bindable<boolean> | undefined; maintainSize?: Bindable<boolean> | undefined; maintainSemantics?: Bindable<boolean> | undefined; maintainInteractivity?: Bindable<boolean> | undefined; maintainFocusability?: Bindable<boolean> | undefined }): Visibility {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:Visibility", "", [{"name":"key","required":false,"positional":false},{"name":"child","required":true,"positional":false},{"name":"visible","required":false,"positional":false},{"name":"maintainState","required":false,"positional":false},{"name":"maintainAnimation","required":false,"positional":false},{"name":"maintainSize","required":false,"positional":false},{"name":"maintainSemantics","required":false,"positional":false},{"name":"maintainInteractivity","required":false,"positional":false},{"name":"maintainFocusability","required":false,"positional":false}], [], options) as Visibility;
}
export namespace Visibility {
export function maintain(options: { key?: Key | null | undefined; child: Bindable<Widget>; visible?: Bindable<boolean> | undefined }): Visibility {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:Visibility", "maintain", [{"name":"key","required":false,"positional":false},{"name":"child","required":true,"positional":false},{"name":"visible","required":false,"positional":false}], [], options) as Visibility;
}
}
export interface ColoredBox extends WidgetDescription { readonly type: "flax.core/flutter#type:ColoredBox";  }
export function ColoredBox(options: { color: Bindable<Color>; isAntiAlias?: Bindable<boolean> | undefined; child?: Bindable<Widget | null> | undefined; key?: Key | null | undefined }): ColoredBox {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:ColoredBox", "", [{"name":"color","required":true,"positional":false},{"name":"isAntiAlias","required":false,"positional":false},{"name":"child","required":false,"positional":false},{"name":"key","required":false,"positional":false}], [], options) as ColoredBox;
}
export interface ClipRRect extends WidgetDescription { readonly type: "flax.core/flutter#type:ClipRRect";  }
export function ClipRRect(options: { key?: Key | null | undefined; borderRadius?: Bindable<BorderRadiusGeometry> | undefined; clipBehavior?: Bindable<Clip> | undefined; child?: Bindable<Widget | null> | undefined } = {}): ClipRRect {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:ClipRRect", "", [{"name":"key","required":false,"positional":false},{"name":"borderRadius","required":false,"positional":false},{"name":"clipBehavior","required":false,"positional":false},{"name":"child","required":false,"positional":false}], [], options) as ClipRRect;
}
export interface IgnorePointer extends WidgetDescription { readonly type: "flax.core/flutter#type:IgnorePointer";  }
export function IgnorePointer(options: { key?: Key | null | undefined; ignoring?: Bindable<boolean> | undefined; child?: Bindable<Widget | null> | undefined } = {}): IgnorePointer {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:IgnorePointer", "", [{"name":"key","required":false,"positional":false},{"name":"ignoring","required":false,"positional":false},{"name":"child","required":false,"positional":false}], [], options) as IgnorePointer;
}
export interface IndexedStack extends WidgetDescription { readonly type: "flax.core/flutter#type:IndexedStack";  }
export function IndexedStack(options: { key?: Key | null | undefined; alignment?: Bindable<AlignmentGeometry> | undefined; textDirection?: Bindable<TextDirection | null> | undefined; clipBehavior?: Bindable<Clip> | undefined; sizing?: Bindable<StackFit> | undefined; index?: Bindable<number | null> | undefined; children?: Bindable<DartListInput<Widget, Widget>> | undefined } = {}): IndexedStack {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:IndexedStack", "", [{"name":"key","required":false,"positional":false},{"name":"alignment","required":false,"positional":false},{"name":"textDirection","required":false,"positional":false},{"name":"clipBehavior","required":false,"positional":false},{"name":"sizing","required":false,"positional":false},{"name":"index","required":false,"positional":false},{"name":"children","required":false,"positional":false}], [], options) as IndexedStack;
}
export interface GestureDetector extends WidgetDescription { readonly type: "flax.core/flutter#type:GestureDetector";  }
export function GestureDetector(options: { key?: Key | null | undefined; child?: Bindable<Widget | null> | undefined; onTap?: Bindable<(() => void) | null> | undefined; onTapCancel?: Bindable<(() => void) | null> | undefined; onSecondaryTap?: Bindable<(() => void) | null> | undefined; onSecondaryTapCancel?: Bindable<(() => void) | null> | undefined; onDoubleTap?: Bindable<(() => void) | null> | undefined; onDoubleTapCancel?: Bindable<(() => void) | null> | undefined; onLongPressCancel?: Bindable<(() => void) | null> | undefined; onLongPress?: Bindable<(() => void) | null> | undefined; behavior?: Bindable<HitTestBehavior | null> | undefined; excludeFromSemantics?: Bindable<boolean> | undefined; dragStartBehavior?: Bindable<DragStartBehavior> | undefined } = {}): GestureDetector {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:GestureDetector", "", [{"name":"key","required":false,"positional":false},{"name":"child","required":false,"positional":false},{"name":"onTap","required":false,"positional":false},{"name":"onTapCancel","required":false,"positional":false},{"name":"onSecondaryTap","required":false,"positional":false},{"name":"onSecondaryTapCancel","required":false,"positional":false},{"name":"onDoubleTap","required":false,"positional":false},{"name":"onDoubleTapCancel","required":false,"positional":false},{"name":"onLongPressCancel","required":false,"positional":false},{"name":"onLongPress","required":false,"positional":false},{"name":"behavior","required":false,"positional":false},{"name":"excludeFromSemantics","required":false,"positional":false},{"name":"dragStartBehavior","required":false,"positional":false}], [], options) as GestureDetector;
}
export interface Focus extends WidgetDescription { readonly type: "flax.core/flutter#type:Focus";  }
export function Focus(options: { key?: Key | null | undefined; child: Bindable<Widget>; focusNode?: Bindable<FocusNode | null> | undefined; autofocus?: Bindable<boolean> | undefined; onFocusChange?: Bindable<((value: boolean) => void) | null> | undefined; canRequestFocus?: Bindable<boolean | null> | undefined; skipTraversal?: Bindable<boolean | null> | undefined; descendantsAreFocusable?: Bindable<boolean | null> | undefined; descendantsAreTraversable?: Bindable<boolean | null> | undefined; includeSemantics?: Bindable<boolean> | undefined; debugLabel?: Bindable<string | null> | undefined }): Focus {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:Focus", "", [{"name":"key","required":false,"positional":false},{"name":"child","required":true,"positional":false},{"name":"focusNode","required":false,"positional":false},{"name":"autofocus","required":false,"positional":false},{"name":"onFocusChange","required":false,"positional":false},{"name":"canRequestFocus","required":false,"positional":false},{"name":"skipTraversal","required":false,"positional":false},{"name":"descendantsAreFocusable","required":false,"positional":false},{"name":"descendantsAreTraversable","required":false,"positional":false},{"name":"includeSemantics","required":false,"positional":false},{"name":"debugLabel","required":false,"positional":false}], [], options) as Focus;
}
export interface Form extends WidgetDescription { readonly type: "flax.core/flutter#type:Form";  }
export function Form(options: { key?: Key | null | undefined; child: Bindable<Widget>; canPop?: Bindable<boolean | null> | undefined; onPopInvokedWithResult?: Bindable<((didPop: boolean, result: NavigationData | null) => void) | null> | undefined; onChanged?: Bindable<(() => void) | null> | undefined; autovalidateMode?: Bindable<AutovalidateMode | null> | undefined }): Form {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:Form", "", [{"name":"key","required":false,"positional":false},{"name":"child","required":true,"positional":false},{"name":"canPop","required":false,"positional":false},{"name":"onPopInvokedWithResult","required":false,"positional":false},{"name":"onChanged","required":false,"positional":false},{"name":"autovalidateMode","required":false,"positional":false}], [], options) as Form;
}
export interface StatefulBuilder extends WidgetDescription { readonly type: "flax.core/flutter#type:StatefulBuilder";  }
export function StatefulBuilder(options: { key?: Key | null | undefined; builder: Bindable<((context: BuildContext, setState: ((fn: (() => void)) => void)) => Widget)> }): StatefulBuilder {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.core/flutter#type:StatefulBuilder", "", [{"name":"key","required":false,"positional":false},{"name":"builder","required":true,"positional":false}], [], options) as StatefulBuilder;
}
export namespace Stream { export function castFrom<S extends unknown | null = unknown | null, T extends unknown | null = unknown | null>(source: Stream<S>): Stream<T> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStatic("flax.core/flutter#type:Stream", "castFrom", [source]);
return _flaxResult as Stream<T>;
} }
export namespace Duration { export declare const zero: Duration; }
Object.defineProperty(Duration, "zero", { get: () => invokeObjectStatic("flax.core/flutter#type:Duration", "zero") });
export const StackTrace = {} as {readonly current: StackTrace;readonly empty: StackTrace};
Object.defineProperty(StackTrace, "current", { get: () => invokeObjectStatic("flax.core/flutter#type:StackTrace", "current") });
Object.defineProperty(StackTrace, "empty", { get: () => invokeObjectStatic("flax.core/flutter#type:StackTrace", "empty") });
export namespace StreamTransformer { export function castFrom<SS extends unknown | null = unknown | null, ST extends unknown | null = unknown | null, TS extends unknown | null = unknown | null, TT extends unknown | null = unknown | null>(source: StreamTransformer<SS, ST>): StreamTransformer<TS, TT> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStatic("flax.core/flutter#type:StreamTransformer", "castFrom", [source]);
return _flaxResult as StreamTransformer<TS, TT>;
} }
export namespace WidgetStateProperty { export function resolveWith<T extends unknown | null = unknown | null>(callback: ((states: DartSet<WidgetState>) => T)): WidgetStateProperty<T> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
return constructDeferredObject("flax.core/flutter#type:WidgetStateProperty", "resolveWith", [{"name":"callback","required":true,"positional":true}], [callback], {}) as WidgetStateProperty<T>;
} }
export namespace BorderSide { export declare const none: BorderSide; }
Object.defineProperty(BorderSide, "none", { get: () => invokeObjectStatic("flax.core/flutter#type:BorderSide", "none") });
export namespace BorderSide { export declare const strokeAlignInside: number; }
Object.defineProperty(BorderSide, "strokeAlignInside", { get: () => invokeObjectStatic("flax.core/flutter#type:BorderSide", "strokeAlignInside") });
export namespace BorderSide { export declare const strokeAlignCenter: number; }
Object.defineProperty(BorderSide, "strokeAlignCenter", { get: () => invokeObjectStatic("flax.core/flutter#type:BorderSide", "strokeAlignCenter") });
export namespace BorderSide { export declare const strokeAlignOutside: number; }
Object.defineProperty(BorderSide, "strokeAlignOutside", { get: () => invokeObjectStatic("flax.core/flutter#type:BorderSide", "strokeAlignOutside") });
export namespace Radius { export declare const zero: Radius; }
Object.defineProperty(Radius, "zero", { get: () => invokeObjectStatic("flax.core/flutter#type:Radius", "zero") });
export namespace BorderRadius { export declare const zero: BorderRadius; }
Object.defineProperty(BorderRadius, "zero", { get: () => invokeObjectStatic("flax.core/flutter#type:BorderRadius", "zero") });
export namespace BorderRadiusDirectional { export declare const zero: BorderRadiusDirectional; }
Object.defineProperty(BorderRadiusDirectional, "zero", { get: () => invokeObjectStatic("flax.core/flutter#type:BorderRadiusDirectional", "zero") });
export namespace EdgeInsetsDirectional { export declare const zero: EdgeInsetsDirectional; }
Object.defineProperty(EdgeInsetsDirectional, "zero", { get: () => invokeObjectStatic("flax.core/flutter#type:EdgeInsetsDirectional", "zero") });
export namespace Alignment { export declare const topLeft: Alignment; }
Object.defineProperty(Alignment, "topLeft", { get: () => invokeObjectStatic("flax.core/flutter#type:Alignment", "topLeft") });
export namespace Alignment { export declare const topCenter: Alignment; }
Object.defineProperty(Alignment, "topCenter", { get: () => invokeObjectStatic("flax.core/flutter#type:Alignment", "topCenter") });
export namespace Alignment { export declare const topRight: Alignment; }
Object.defineProperty(Alignment, "topRight", { get: () => invokeObjectStatic("flax.core/flutter#type:Alignment", "topRight") });
export namespace Alignment { export declare const centerLeft: Alignment; }
Object.defineProperty(Alignment, "centerLeft", { get: () => invokeObjectStatic("flax.core/flutter#type:Alignment", "centerLeft") });
export namespace Alignment { export declare const center: Alignment; }
Object.defineProperty(Alignment, "center", { get: () => invokeObjectStatic("flax.core/flutter#type:Alignment", "center") });
export namespace Alignment { export declare const centerRight: Alignment; }
Object.defineProperty(Alignment, "centerRight", { get: () => invokeObjectStatic("flax.core/flutter#type:Alignment", "centerRight") });
export namespace Alignment { export declare const bottomLeft: Alignment; }
Object.defineProperty(Alignment, "bottomLeft", { get: () => invokeObjectStatic("flax.core/flutter#type:Alignment", "bottomLeft") });
export namespace Alignment { export declare const bottomCenter: Alignment; }
Object.defineProperty(Alignment, "bottomCenter", { get: () => invokeObjectStatic("flax.core/flutter#type:Alignment", "bottomCenter") });
export namespace Alignment { export declare const bottomRight: Alignment; }
Object.defineProperty(Alignment, "bottomRight", { get: () => invokeObjectStatic("flax.core/flutter#type:Alignment", "bottomRight") });
export namespace AlignmentDirectional { export declare const topStart: AlignmentDirectional; }
Object.defineProperty(AlignmentDirectional, "topStart", { get: () => invokeObjectStatic("flax.core/flutter#type:AlignmentDirectional", "topStart") });
export namespace AlignmentDirectional { export declare const topCenter: AlignmentDirectional; }
Object.defineProperty(AlignmentDirectional, "topCenter", { get: () => invokeObjectStatic("flax.core/flutter#type:AlignmentDirectional", "topCenter") });
export namespace AlignmentDirectional { export declare const topEnd: AlignmentDirectional; }
Object.defineProperty(AlignmentDirectional, "topEnd", { get: () => invokeObjectStatic("flax.core/flutter#type:AlignmentDirectional", "topEnd") });
export namespace AlignmentDirectional { export declare const centerStart: AlignmentDirectional; }
Object.defineProperty(AlignmentDirectional, "centerStart", { get: () => invokeObjectStatic("flax.core/flutter#type:AlignmentDirectional", "centerStart") });
export namespace AlignmentDirectional { export declare const center: AlignmentDirectional; }
Object.defineProperty(AlignmentDirectional, "center", { get: () => invokeObjectStatic("flax.core/flutter#type:AlignmentDirectional", "center") });
export namespace AlignmentDirectional { export declare const centerEnd: AlignmentDirectional; }
Object.defineProperty(AlignmentDirectional, "centerEnd", { get: () => invokeObjectStatic("flax.core/flutter#type:AlignmentDirectional", "centerEnd") });
export namespace AlignmentDirectional { export declare const bottomStart: AlignmentDirectional; }
Object.defineProperty(AlignmentDirectional, "bottomStart", { get: () => invokeObjectStatic("flax.core/flutter#type:AlignmentDirectional", "bottomStart") });
export namespace AlignmentDirectional { export declare const bottomCenter: AlignmentDirectional; }
Object.defineProperty(AlignmentDirectional, "bottomCenter", { get: () => invokeObjectStatic("flax.core/flutter#type:AlignmentDirectional", "bottomCenter") });
export namespace AlignmentDirectional { export declare const bottomEnd: AlignmentDirectional; }
Object.defineProperty(AlignmentDirectional, "bottomEnd", { get: () => invokeObjectStatic("flax.core/flutter#type:AlignmentDirectional", "bottomEnd") });
export namespace FontWeight { export declare const w100: FontWeight; }
Object.defineProperty(FontWeight, "w100", { get: () => invokeObjectStatic("flax.core/flutter#type:FontWeight", "w100") });
export namespace FontWeight { export declare const w200: FontWeight; }
Object.defineProperty(FontWeight, "w200", { get: () => invokeObjectStatic("flax.core/flutter#type:FontWeight", "w200") });
export namespace FontWeight { export declare const w300: FontWeight; }
Object.defineProperty(FontWeight, "w300", { get: () => invokeObjectStatic("flax.core/flutter#type:FontWeight", "w300") });
export namespace FontWeight { export declare const w400: FontWeight; }
Object.defineProperty(FontWeight, "w400", { get: () => invokeObjectStatic("flax.core/flutter#type:FontWeight", "w400") });
export namespace FontWeight { export declare const w500: FontWeight; }
Object.defineProperty(FontWeight, "w500", { get: () => invokeObjectStatic("flax.core/flutter#type:FontWeight", "w500") });
export namespace FontWeight { export declare const w600: FontWeight; }
Object.defineProperty(FontWeight, "w600", { get: () => invokeObjectStatic("flax.core/flutter#type:FontWeight", "w600") });
export namespace FontWeight { export declare const w700: FontWeight; }
Object.defineProperty(FontWeight, "w700", { get: () => invokeObjectStatic("flax.core/flutter#type:FontWeight", "w700") });
export namespace FontWeight { export declare const w800: FontWeight; }
Object.defineProperty(FontWeight, "w800", { get: () => invokeObjectStatic("flax.core/flutter#type:FontWeight", "w800") });
export namespace FontWeight { export declare const w900: FontWeight; }
Object.defineProperty(FontWeight, "w900", { get: () => invokeObjectStatic("flax.core/flutter#type:FontWeight", "w900") });
export namespace FontWeight { export declare const normal: FontWeight; }
Object.defineProperty(FontWeight, "normal", { get: () => invokeObjectStatic("flax.core/flutter#type:FontWeight", "normal") });
export namespace FontWeight { export declare const bold: FontWeight; }
Object.defineProperty(FontWeight, "bold", { get: () => invokeObjectStatic("flax.core/flutter#type:FontWeight", "bold") });
export namespace TextEditingValue { export declare const empty: TextEditingValue; }
Object.defineProperty(TextEditingValue, "empty", { get: () => invokeObjectStatic("flax.core/flutter#type:TextEditingValue", "empty") });
export namespace TextRange { export declare const empty: TextRange; }
Object.defineProperty(TextRange, "empty", { get: () => invokeObjectStatic("flax.core/flutter#type:TextRange", "empty") });
export namespace Navigator { export function of(context: BuildContext, options: { rootNavigator?: boolean | undefined } = {}): NavigatorState {
if (arguments.length > 2) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["rootNavigator"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeStatic("flax.core/flutter#type:Navigator", "of", [contextHandle(context, "flax.core/flutter#type:BuildContext"), options.rootNavigator]);
return _flaxResult as NavigatorState;
} }
export const SchedulerBinding = {} as {readonly instance: SchedulerBinding};
Object.defineProperty(SchedulerBinding, "instance", { get: () => invokeObjectStatic("flax.core/flutter#type:SchedulerBinding", "instance") });
export namespace Directionality { export function of(context: BuildContext): TextDirection {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStatic("flax.core/flutter#type:Directionality", "of", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as TextDirection;
} }
export namespace EdgeInsets { export declare const zero: EdgeInsets; }
Object.defineProperty(EdgeInsets, "zero", { get: () => invokeObjectStatic("flax.core/flutter#type:EdgeInsets", "zero") });
export namespace FilteringTextInputFormatter { export declare const digitsOnly: TextInputFormatter; }
Object.defineProperty(FilteringTextInputFormatter, "digitsOnly", { get: () => invokeObjectStatic("flax.core/flutter#type:FilteringTextInputFormatter", "digitsOnly") });
export namespace FilteringTextInputFormatter { export declare const singleLineFormatter: TextInputFormatter; }
Object.defineProperty(FilteringTextInputFormatter, "singleLineFormatter", { get: () => invokeObjectStatic("flax.core/flutter#type:FilteringTextInputFormatter", "singleLineFormatter") });
function _flaxTopLevel_applyBoxFit(fit: BoxFit, inputSize: Size, outputSize: Size): FittedSizes {
if (arguments.length > 3) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:applyBoxFit", [fit, inputSize, outputSize]);
return _flaxResult as FittedSizes;
}
export { _flaxTopLevel_applyBoxFit as applyBoxFit };
