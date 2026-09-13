// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { bindingVersion, construct as _flaxHostConstruct, constructProxy as _flaxHostConstructProxy, constructObject as _flaxHostConstructObject, constructDeferredObject as _flaxHostConstructDeferredObject, constructStream as _flaxHostConstructStream, constructAsyncIterableStream as _flaxHostConstructAsyncIterableStream, defineObject as _flaxHostDefineObject, defineStream as _flaxHostDefineStream, invokeObject as _flaxHostInvokeObject, invokeObjectStatic as _flaxHostInvokeObjectStatic, invokeStream as _flaxHostInvokeStream, enumValue as _flaxHostEnumValue, defineContext as _flaxHostDefineContext, defineState as _flaxHostDefineState, contextHandle as _flaxHostContextHandle, invokeStatic as _flaxHostInvokeStatic, invokeInstance as _flaxHostInvokeInstance, invokeTopLevel as _flaxHostInvokeTopLevel, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/core/flutter';
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
export const materialBindingModule = _flaxInstallBindingModule("flax.material/material", 20, Object.freeze([]) as readonly string[]);
const { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } = materialBindingModule;
export interface ThemeMode extends DartEnum { readonly type: "flax.material/material#type:ThemeMode"; }
export const ThemeMode = Object.freeze({
system: enumValue<ThemeMode>("flax.material/material#type:ThemeMode", "system"),
light: enumValue<ThemeMode>("flax.material/material#type:ThemeMode", "light"),
dark: enumValue<ThemeMode>("flax.material/material#type:ThemeMode", "dark"),
});
export interface Brightness extends DartEnum { readonly type: "flax.material/material#type:Brightness"; }
export const Brightness = Object.freeze({
dark: enumValue<Brightness>("flax.material/material#type:Brightness", "dark"),
light: enumValue<Brightness>("flax.material/material#type:Brightness", "light"),
});
export interface TextInputAction extends DartEnum { readonly type: "flax.material/material#type:TextInputAction"; }
export const TextInputAction = Object.freeze({
none: enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "none"),
unspecified: enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "unspecified"),
done: enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "done"),
go: enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "go"),
search: enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "search"),
send: enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "send"),
next: enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "next"),
previous: enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "previous"),
continueAction: enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "continueAction"),
join: enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "join"),
route: enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "route"),
emergencyCall: enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "emergencyCall"),
newline: enumValue<TextInputAction>("flax.material/material#type:TextInputAction", "newline"),
});
export interface ListTileStyle extends DartEnum { readonly type: "flax.material/material#type:ListTileStyle"; }
export const ListTileStyle = Object.freeze({
list: enumValue<ListTileStyle>("flax.material/material#type:ListTileStyle", "list"),
drawer: enumValue<ListTileStyle>("flax.material/material#type:ListTileStyle", "drawer"),
});
export interface NavigationDestinationLabelBehavior extends DartEnum { readonly type: "flax.material/material#type:NavigationDestinationLabelBehavior"; }
export const NavigationDestinationLabelBehavior = Object.freeze({
alwaysShow: enumValue<NavigationDestinationLabelBehavior>("flax.material/material#type:NavigationDestinationLabelBehavior", "alwaysShow"),
alwaysHide: enumValue<NavigationDestinationLabelBehavior>("flax.material/material#type:NavigationDestinationLabelBehavior", "alwaysHide"),
onlyShowSelected: enumValue<NavigationDestinationLabelBehavior>("flax.material/material#type:NavigationDestinationLabelBehavior", "onlyShowSelected"),
});
export interface AlertDialog extends WidgetDescription { readonly type: "flax.material/material#type:AlertDialog";  }
export function AlertDialog(options: { key?: upstream0.Key | null | undefined; title?: Bindable<Widget | null> | undefined; content?: Bindable<Widget | null> | undefined; actions?: Bindable<DartListInput<Widget, Widget> | null> | undefined; scrollable?: Bindable<boolean> | undefined } = {}): AlertDialog {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.material/material#type:AlertDialog", "", [{"name":"key","required":false,"positional":false},{"name":"title","required":false,"positional":false},{"name":"content","required":false,"positional":false},{"name":"actions","required":false,"positional":false},{"name":"scrollable","required":false,"positional":false}], [], options) as AlertDialog;
}
export interface MaterialApp extends WidgetDescription { readonly type: "flax.material/material#type:MaterialApp";  }
export function MaterialApp(options: { key?: upstream0.Key | null | undefined; home?: Bindable<Widget | null> | undefined; navigatorObservers?: Bindable<DartListInput<upstream0.NavigatorObserver, upstream0.NavigatorObserver>> | undefined; title?: Bindable<string | null> | undefined; theme?: Bindable<ThemeData | null> | undefined; darkTheme?: Bindable<ThemeData | null> | undefined; themeMode?: Bindable<ThemeMode | null> | undefined; debugShowCheckedModeBanner?: Bindable<boolean> | undefined } = {}): MaterialApp {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.material/material#type:MaterialApp", "", [{"name":"key","required":false,"positional":false},{"name":"home","required":false,"positional":false},{"name":"navigatorObservers","required":false,"positional":false},{"name":"title","required":false,"positional":false},{"name":"theme","required":false,"positional":false},{"name":"darkTheme","required":false,"positional":false},{"name":"themeMode","required":false,"positional":false},{"name":"debugShowCheckedModeBanner","required":false,"positional":false}], [], options) as MaterialApp;
}
export interface Scaffold extends WidgetDescription { readonly type: "flax.material/material#type:Scaffold";  }
export function Scaffold(options: { key?: upstream0.Key | null | undefined; appBar?: Bindable<upstream0.PreferredSizeWidget | null> | undefined; body?: Bindable<Widget | null> | undefined; floatingActionButton?: Bindable<Widget | null> | undefined; drawer?: Bindable<Widget | null> | undefined; endDrawer?: Bindable<Widget | null> | undefined; bottomNavigationBar?: Bindable<Widget | null> | undefined; backgroundColor?: Bindable<upstream0.Color | null> | undefined; resizeToAvoidBottomInset?: Bindable<boolean | null> | undefined; primary?: Bindable<boolean> | undefined; extendBody?: Bindable<boolean> | undefined; extendBodyBehindAppBar?: Bindable<boolean> | undefined } = {}): Scaffold {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.material/material#type:Scaffold", "", [{"name":"key","required":false,"positional":false},{"name":"appBar","required":false,"positional":false},{"name":"body","required":false,"positional":false},{"name":"floatingActionButton","required":false,"positional":false},{"name":"drawer","required":false,"positional":false},{"name":"endDrawer","required":false,"positional":false},{"name":"bottomNavigationBar","required":false,"positional":false},{"name":"backgroundColor","required":false,"positional":false},{"name":"resizeToAvoidBottomInset","required":false,"positional":false},{"name":"primary","required":false,"positional":false},{"name":"extendBody","required":false,"positional":false},{"name":"extendBodyBehindAppBar","required":false,"positional":false}], [], options) as Scaffold;
}
export interface RefreshIndicator extends WidgetDescription { readonly type: "flax.material/material#type:RefreshIndicator";  }
export function RefreshIndicator(options: { key?: upstream0.Key | null | undefined; onRefresh: Bindable<(() => Promise<void>)>; child: Bindable<Widget> }): RefreshIndicator {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.material/material#type:RefreshIndicator", "", [{"name":"key","required":false,"positional":false},{"name":"onRefresh","required":true,"positional":false},{"name":"child","required":true,"positional":false}], [], options) as RefreshIndicator;
}
export interface ButtonStyle { readonly __ButtonStyle: unique symbol;
readonly backgroundColor: upstream0.WidgetStateProperty<upstream0.Color | null> | null;
readonly foregroundColor: upstream0.WidgetStateProperty<upstream0.Color | null> | null;
readonly overlayColor: upstream0.WidgetStateProperty<upstream0.Color | null> | null;
readonly elevation: upstream0.WidgetStateProperty<number | null> | null;
copyWith(options?: {backgroundColor?: upstream0.WidgetStateProperty<upstream0.Color | null> | null | undefined; elevation?: upstream0.WidgetStateProperty<number | null> | null | undefined; foregroundColor?: upstream0.WidgetStateProperty<upstream0.Color | null> | null | undefined; overlayColor?: upstream0.WidgetStateProperty<upstream0.Color | null> | null | undefined}): ButtonStyle;
}
defineObject("flax.material/material#type:ButtonStyle", ["backgroundColor","foregroundColor","overlayColor","elevation"], [], {copyWith(this: object, options: { backgroundColor?: upstream0.WidgetStateProperty<upstream0.Color | null> | null | undefined; elevation?: upstream0.WidgetStateProperty<number | null> | null | undefined; foregroundColor?: upstream0.WidgetStateProperty<upstream0.Color | null> | null | undefined; overlayColor?: upstream0.WidgetStateProperty<upstream0.Color | null> | null | undefined } = {}): ButtonStyle {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["backgroundColor","elevation","foregroundColor","overlayColor"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeObject(this, "flax.material/material#type:ButtonStyle", "copyWith", [options.backgroundColor, options.elevation, options.foregroundColor, options.overlayColor]);
return _flaxResult as ButtonStyle;
},
}, []);
export function ButtonStyle(options: { backgroundColor?: upstream0.WidgetStateProperty<upstream0.Color | null> | null | undefined; foregroundColor?: upstream0.WidgetStateProperty<upstream0.Color | null> | null | undefined; overlayColor?: upstream0.WidgetStateProperty<upstream0.Color | null> | null | undefined; elevation?: upstream0.WidgetStateProperty<number | null> | null | undefined } = {}): ButtonStyle {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:ButtonStyle", "", [{"name":"backgroundColor","required":false,"positional":false},{"name":"foregroundColor","required":false,"positional":false},{"name":"overlayColor","required":false,"positional":false},{"name":"elevation","required":false,"positional":false}], [], options) as ButtonStyle;
}
export type AppBar = WidgetDescription & { readonly type: "flax.material/material#type:AppBar"; } & upstream0.PreferredSizeWidget;
export function AppBar(options: { key?: upstream0.Key | null | undefined; leading?: Widget | null | undefined; automaticallyImplyLeading?: boolean | undefined; title?: Widget | null | undefined; actions?: DartListInput<Widget, Widget> | null | undefined; bottom?: upstream0.PreferredSizeWidget | null | undefined; elevation?: number | null | undefined; backgroundColor?: upstream0.Color | null | undefined; foregroundColor?: upstream0.Color | null | undefined; primary?: boolean | undefined; centerTitle?: boolean | null | undefined; toolbarHeight?: number | null | undefined } = {}): AppBar {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.material/material#type:AppBar", "", [{"name":"key","fixed":true,"required":false,"positional":false},{"name":"leading","fixed":true,"required":false,"positional":false},{"name":"automaticallyImplyLeading","fixed":true,"required":false,"positional":false},{"name":"title","fixed":true,"required":false,"positional":false},{"name":"actions","fixed":true,"required":false,"positional":false},{"name":"bottom","fixed":true,"required":false,"positional":false},{"name":"elevation","fixed":true,"required":false,"positional":false},{"name":"backgroundColor","fixed":true,"required":false,"positional":false},{"name":"foregroundColor","fixed":true,"required":false,"positional":false},{"name":"primary","fixed":true,"required":false,"positional":false},{"name":"centerTitle","fixed":true,"required":false,"positional":false},{"name":"toolbarHeight","fixed":true,"required":false,"positional":false}], [], options) as AppBar;
}
export interface Theme extends WidgetDescription { readonly type: "flax.material/material#type:Theme";  }
export function Theme(options: { key?: upstream0.Key | null | undefined; data: Bindable<ThemeData>; child: Bindable<Widget> }): Theme {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.material/material#type:Theme", "", [{"name":"key","required":false,"positional":false},{"name":"data","required":true,"positional":false},{"name":"child","required":true,"positional":false}], [], options) as Theme;
}
export interface ThemeData { readonly __ThemeData: unique symbol;
readonly brightness: Brightness;
readonly colorScheme: ColorScheme;
readonly textTheme: TextTheme;
copyWith(options?: {brightness?: Brightness | null | undefined; colorScheme?: ColorScheme | null | undefined; textTheme?: TextTheme | null | undefined}): ThemeData;
}
defineObject("flax.material/material#type:ThemeData", ["brightness","colorScheme","textTheme"], [], {copyWith(this: object, options: { brightness?: Brightness | null | undefined; colorScheme?: ColorScheme | null | undefined; textTheme?: TextTheme | null | undefined } = {}): ThemeData {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["brightness","colorScheme","textTheme"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeObject(this, "flax.material/material#type:ThemeData", "copyWith", [options.brightness, options.colorScheme, options.textTheme]);
return _flaxResult as ThemeData;
},
}, []);
export function ThemeData(options: { colorScheme?: ColorScheme | null | undefined; brightness?: Brightness | null | undefined; colorSchemeSeed?: upstream0.Color | null | undefined; textTheme?: TextTheme | null | undefined } = {}): ThemeData {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:ThemeData", "", [{"name":"colorScheme","required":false,"positional":false},{"name":"brightness","required":false,"positional":false},{"name":"colorSchemeSeed","required":false,"positional":false},{"name":"textTheme","required":false,"positional":false}], [], options) as ThemeData;
}
export interface TextTheme { readonly __TextTheme: unique symbol;
readonly titleLarge: upstream0.TextStyle | null;
readonly titleMedium: upstream0.TextStyle | null;
readonly bodyLarge: upstream0.TextStyle | null;
readonly bodyMedium: upstream0.TextStyle | null;
readonly labelLarge: upstream0.TextStyle | null;
copyWith(options?: {bodyLarge?: upstream0.TextStyle | null | undefined; bodyMedium?: upstream0.TextStyle | null | undefined; labelLarge?: upstream0.TextStyle | null | undefined; titleLarge?: upstream0.TextStyle | null | undefined; titleMedium?: upstream0.TextStyle | null | undefined}): TextTheme;
}
defineObject("flax.material/material#type:TextTheme", ["titleLarge","titleMedium","bodyLarge","bodyMedium","labelLarge"], [], {copyWith(this: object, options: { bodyLarge?: upstream0.TextStyle | null | undefined; bodyMedium?: upstream0.TextStyle | null | undefined; labelLarge?: upstream0.TextStyle | null | undefined; titleLarge?: upstream0.TextStyle | null | undefined; titleMedium?: upstream0.TextStyle | null | undefined } = {}): TextTheme {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["bodyLarge","bodyMedium","labelLarge","titleLarge","titleMedium"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeObject(this, "flax.material/material#type:TextTheme", "copyWith", [options.bodyLarge, options.bodyMedium, options.labelLarge, options.titleLarge, options.titleMedium]);
return _flaxResult as TextTheme;
},
}, []);
export function TextTheme(options: { titleLarge?: upstream0.TextStyle | null | undefined; titleMedium?: upstream0.TextStyle | null | undefined; bodyLarge?: upstream0.TextStyle | null | undefined; bodyMedium?: upstream0.TextStyle | null | undefined; labelLarge?: upstream0.TextStyle | null | undefined } = {}): TextTheme {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:TextTheme", "", [{"name":"titleLarge","required":false,"positional":false},{"name":"titleMedium","required":false,"positional":false},{"name":"bodyLarge","required":false,"positional":false},{"name":"bodyMedium","required":false,"positional":false},{"name":"labelLarge","required":false,"positional":false}], [], options) as TextTheme;
}
export interface ColorScheme { readonly __ColorScheme: unique symbol;
readonly brightness: Brightness;
readonly primary: upstream0.Color;
readonly onPrimary: upstream0.Color;
readonly surface: upstream0.Color;
readonly onSurface: upstream0.Color;
readonly error: upstream0.Color;
readonly onError: upstream0.Color;
copyWith(options?: {brightness?: Brightness | null | undefined; error?: upstream0.Color | null | undefined; onError?: upstream0.Color | null | undefined; onPrimary?: upstream0.Color | null | undefined; onSurface?: upstream0.Color | null | undefined; primary?: upstream0.Color | null | undefined; surface?: upstream0.Color | null | undefined}): ColorScheme;
}
defineObject("flax.material/material#type:ColorScheme", ["brightness","primary","onPrimary","surface","onSurface","error","onError"], [], {copyWith(this: object, options: { brightness?: Brightness | null | undefined; error?: upstream0.Color | null | undefined; onError?: upstream0.Color | null | undefined; onPrimary?: upstream0.Color | null | undefined; onSurface?: upstream0.Color | null | undefined; primary?: upstream0.Color | null | undefined; surface?: upstream0.Color | null | undefined } = {}): ColorScheme {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["brightness","error","onError","onPrimary","onSurface","primary","surface"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeObject(this, "flax.material/material#type:ColorScheme", "copyWith", [options.brightness, options.error, options.onError, options.onPrimary, options.onSurface, options.primary, options.surface]);
return _flaxResult as ColorScheme;
},
}, []);
export namespace ColorScheme {
export function fromSeed(options: { seedColor: upstream0.Color; brightness?: Brightness | undefined }): ColorScheme {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:ColorScheme", "fromSeed", [{"name":"seedColor","required":true,"positional":false},{"name":"brightness","required":false,"positional":false}], [], options) as ColorScheme;
}
}
export interface InputDecoration { readonly __InputDecoration: unique symbol;
readonly labelText: string | null;
readonly hintText: string | null;
readonly helperText: string | null;
readonly errorText: string | null;
readonly labelStyle: upstream0.TextStyle | null;
readonly hintStyle: upstream0.TextStyle | null;
readonly helperStyle: upstream0.TextStyle | null;
readonly errorStyle: upstream0.TextStyle | null;
readonly isDense: boolean | null;
readonly contentPadding: upstream0.EdgeInsetsGeometry | null;
readonly filled: boolean | null;
readonly fillColor: upstream0.Color | null;
copyWith(options?: {contentPadding?: upstream0.EdgeInsetsGeometry | null | undefined; errorStyle?: upstream0.TextStyle | null | undefined; errorText?: string | null | undefined; fillColor?: upstream0.Color | null | undefined; filled?: boolean | null | undefined; helperStyle?: upstream0.TextStyle | null | undefined; helperText?: string | null | undefined; hintStyle?: upstream0.TextStyle | null | undefined; hintText?: string | null | undefined; isDense?: boolean | null | undefined; labelStyle?: upstream0.TextStyle | null | undefined; labelText?: string | null | undefined}): InputDecoration;
}
defineObject("flax.material/material#type:InputDecoration", ["labelText","hintText","helperText","errorText","labelStyle","hintStyle","helperStyle","errorStyle","isDense","contentPadding","filled","fillColor"], [], {copyWith(this: object, options: { contentPadding?: upstream0.EdgeInsetsGeometry | null | undefined; errorStyle?: upstream0.TextStyle | null | undefined; errorText?: string | null | undefined; fillColor?: upstream0.Color | null | undefined; filled?: boolean | null | undefined; helperStyle?: upstream0.TextStyle | null | undefined; helperText?: string | null | undefined; hintStyle?: upstream0.TextStyle | null | undefined; hintText?: string | null | undefined; isDense?: boolean | null | undefined; labelStyle?: upstream0.TextStyle | null | undefined; labelText?: string | null | undefined } = {}): InputDecoration {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["contentPadding","errorStyle","errorText","fillColor","filled","helperStyle","helperText","hintStyle","hintText","isDense","labelStyle","labelText"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeObject(this, "flax.material/material#type:InputDecoration", "copyWith", [options.contentPadding, options.errorStyle, options.errorText, options.fillColor, options.filled, options.helperStyle, options.helperText, options.hintStyle, options.hintText, options.isDense, options.labelStyle, options.labelText]);
return _flaxResult as InputDecoration;
},
}, []);
export function InputDecoration(options: { labelText?: string | null | undefined; labelStyle?: upstream0.TextStyle | null | undefined; helperText?: string | null | undefined; helperStyle?: upstream0.TextStyle | null | undefined; hintText?: string | null | undefined; hintStyle?: upstream0.TextStyle | null | undefined; errorText?: string | null | undefined; errorStyle?: upstream0.TextStyle | null | undefined; isDense?: boolean | null | undefined; contentPadding?: upstream0.EdgeInsetsGeometry | null | undefined; filled?: boolean | null | undefined; fillColor?: upstream0.Color | null | undefined } = {}): InputDecoration {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.material/material#type:InputDecoration", "", [{"name":"labelText","required":false,"positional":false},{"name":"labelStyle","required":false,"positional":false},{"name":"helperText","required":false,"positional":false},{"name":"helperStyle","required":false,"positional":false},{"name":"hintText","required":false,"positional":false},{"name":"hintStyle","required":false,"positional":false},{"name":"errorText","required":false,"positional":false},{"name":"errorStyle","required":false,"positional":false},{"name":"isDense","required":false,"positional":false},{"name":"contentPadding","required":false,"positional":false},{"name":"filled","required":false,"positional":false},{"name":"fillColor","required":false,"positional":false}], [], options) as InputDecoration;
}
export interface TextField extends WidgetDescription { readonly type: "flax.material/material#type:TextField";  }
export function TextField(options: { key?: upstream0.Key | null | undefined; controller?: Bindable<upstream0.TextEditingController | null> | undefined; focusNode?: Bindable<upstream0.FocusNode | null> | undefined; decoration?: Bindable<InputDecoration | null> | undefined; textInputAction?: Bindable<TextInputAction | null> | undefined; style?: Bindable<upstream0.TextStyle | null> | undefined; readOnly?: Bindable<boolean> | undefined; autofocus?: Bindable<boolean> | undefined; obscureText?: Bindable<boolean> | undefined; autocorrect?: Bindable<boolean | null> | undefined; enableSuggestions?: Bindable<boolean> | undefined; maxLines?: Bindable<number | null> | undefined; minLines?: Bindable<number | null> | undefined; onChanged?: Bindable<((value: string) => void) | null> | undefined; onEditingComplete?: Bindable<(() => void) | null> | undefined; onSubmitted?: Bindable<((value: string) => void) | null> | undefined; inputFormatters?: Bindable<DartListInput<upstream0.TextInputFormatter, upstream0.TextInputFormatter> | null> | undefined; enabled?: Bindable<boolean | null> | undefined } = {}): TextField {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.material/material#type:TextField", "", [{"name":"key","required":false,"positional":false},{"name":"controller","required":false,"positional":false},{"name":"focusNode","required":false,"positional":false},{"name":"decoration","required":false,"positional":false},{"name":"textInputAction","required":false,"positional":false},{"name":"style","required":false,"positional":false},{"name":"readOnly","required":false,"positional":false},{"name":"autofocus","required":false,"positional":false},{"name":"obscureText","required":false,"positional":false},{"name":"autocorrect","required":false,"positional":false},{"name":"enableSuggestions","required":false,"positional":false},{"name":"maxLines","required":false,"positional":false},{"name":"minLines","required":false,"positional":false},{"name":"onChanged","required":false,"positional":false},{"name":"onEditingComplete","required":false,"positional":false},{"name":"onSubmitted","required":false,"positional":false},{"name":"inputFormatters","required":false,"positional":false},{"name":"enabled","required":false,"positional":false}], [], options) as TextField;
}
export interface MaterialPageRoute<T extends unknown | null = unknown | null> extends DartValue, Omit<upstream0.Route<T>, 'type'> { readonly type: "flax.material/material#type:MaterialPageRoute"; readonly __MaterialPageRoute: unique symbol;  }
export function MaterialPageRoute<T extends unknown | null = unknown | null>(options: { builder: ((context: upstream0.BuildContext) => Widget); settings?: upstream0.RouteSettings | null | undefined; maintainState?: boolean | undefined; fullscreenDialog?: boolean | undefined }): MaterialPageRoute<T> {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("route", "flax.material/material#type:MaterialPageRoute", "", [{"name":"builder","required":true,"positional":false},{"name":"settings","required":false,"positional":false},{"name":"maintainState","required":false,"positional":false},{"name":"fullscreenDialog","required":false,"positional":false}], [], options) as MaterialPageRoute<T>;
}
export interface MaterialPage<T extends unknown | null = unknown | null> extends DartValue, Omit<upstream0.Page<T>, 'type'> { readonly type: "flax.material/material#type:MaterialPage"; readonly __MaterialPage: unique symbol; readonly key: upstream0.LocalKey | null; readonly name: string | null; readonly arguments: NavigationData | null; }
export function MaterialPage<T extends unknown | null = unknown | null>(options: { child: Widget; maintainState?: boolean | undefined; fullscreenDialog?: boolean | undefined; key?: upstream0.LocalKey | null | undefined; canPop?: boolean | undefined; onPopInvoked?: ((didPop: boolean, result: NavigationData | null) => void) | undefined; name?: string | null | undefined; arguments?: NavigationData | null | undefined }): MaterialPage<T> {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("page", "flax.material/material#type:MaterialPage", "", [{"name":"child","required":true,"positional":false},{"name":"maintainState","required":false,"positional":false},{"name":"fullscreenDialog","required":false,"positional":false},{"name":"key","required":false,"positional":false,"readonly":true,"defaultValue":null},{"name":"canPop","required":false,"positional":false},{"name":"onPopInvoked","required":false,"positional":false},{"name":"name","required":false,"positional":false,"readonly":true,"defaultValue":null},{"name":"arguments","required":false,"positional":false,"readonly":true,"defaultValue":null}], [], options) as MaterialPage<T>;
}
export interface TextButton extends WidgetDescription { readonly type: "flax.material/material#type:TextButton";  }
export function TextButton(options: { key?: upstream0.Key | null | undefined; onPressed: Bindable<(() => void) | null>; style?: Bindable<ButtonStyle | null> | undefined; child: Bindable<Widget> }): TextButton {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.material/material#type:TextButton", "", [{"name":"key","required":false,"positional":false},{"name":"onPressed","required":true,"positional":false},{"name":"style","required":false,"positional":false},{"name":"child","required":true,"positional":false}], [], options) as TextButton;
}
export interface ElevatedButton extends WidgetDescription { readonly type: "flax.material/material#type:ElevatedButton";  }
export function ElevatedButton(options: { key?: upstream0.Key | null | undefined; onPressed: Bindable<(() => void) | null>; style?: Bindable<ButtonStyle | null> | undefined; child: Bindable<Widget | null> }): ElevatedButton {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.material/material#type:ElevatedButton", "", [{"name":"key","required":false,"positional":false},{"name":"onPressed","required":true,"positional":false},{"name":"style","required":false,"positional":false},{"name":"child","required":true,"positional":false}], [], options) as ElevatedButton;
}
export interface OutlinedButton extends WidgetDescription { readonly type: "flax.material/material#type:OutlinedButton";  }
export function OutlinedButton(options: { key?: upstream0.Key | null | undefined; onPressed: Bindable<(() => void) | null>; style?: Bindable<ButtonStyle | null> | undefined; child: Bindable<Widget | null> }): OutlinedButton {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.material/material#type:OutlinedButton", "", [{"name":"key","required":false,"positional":false},{"name":"onPressed","required":true,"positional":false},{"name":"style","required":false,"positional":false},{"name":"child","required":true,"positional":false}], [], options) as OutlinedButton;
}
export interface FilledButton extends WidgetDescription { readonly type: "flax.material/material#type:FilledButton";  }
export function FilledButton(options: { key?: upstream0.Key | null | undefined; onPressed: Bindable<(() => void) | null>; style?: Bindable<ButtonStyle | null> | undefined; child: Bindable<Widget | null> }): FilledButton {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.material/material#type:FilledButton", "", [{"name":"key","required":false,"positional":false},{"name":"onPressed","required":true,"positional":false},{"name":"style","required":false,"positional":false},{"name":"child","required":true,"positional":false}], [], options) as FilledButton;
}
export namespace FilledButton {
export function tonal(options: { key?: upstream0.Key | null | undefined; onPressed: Bindable<(() => void) | null>; style?: Bindable<ButtonStyle | null> | undefined; child: Bindable<Widget | null> }): FilledButton {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.material/material#type:FilledButton", "tonal", [{"name":"key","required":false,"positional":false},{"name":"onPressed","required":true,"positional":false},{"name":"style","required":false,"positional":false},{"name":"child","required":true,"positional":false}], [], options) as FilledButton;
}
}
export interface IconButton extends WidgetDescription { readonly type: "flax.material/material#type:IconButton";  }
export function IconButton(options: { key?: upstream0.Key | null | undefined; iconSize?: Bindable<number | null> | undefined; padding?: Bindable<upstream0.EdgeInsetsGeometry | null> | undefined; alignment?: Bindable<upstream0.AlignmentGeometry | null> | undefined; color?: Bindable<upstream0.Color | null> | undefined; disabledColor?: Bindable<upstream0.Color | null> | undefined; onPressed: Bindable<(() => void) | null>; focusNode?: Bindable<upstream0.FocusNode | null> | undefined; autofocus?: Bindable<boolean> | undefined; tooltip?: Bindable<string | null> | undefined; style?: Bindable<ButtonStyle | null> | undefined; isSelected?: Bindable<boolean | null> | undefined; selectedIcon?: Bindable<Widget | null> | undefined; icon: Bindable<Widget> }): IconButton {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.material/material#type:IconButton", "", [{"name":"key","required":false,"positional":false},{"name":"iconSize","required":false,"positional":false},{"name":"padding","required":false,"positional":false},{"name":"alignment","required":false,"positional":false},{"name":"color","required":false,"positional":false},{"name":"disabledColor","required":false,"positional":false},{"name":"onPressed","required":true,"positional":false},{"name":"focusNode","required":false,"positional":false},{"name":"autofocus","required":false,"positional":false},{"name":"tooltip","required":false,"positional":false},{"name":"style","required":false,"positional":false},{"name":"isSelected","required":false,"positional":false},{"name":"selectedIcon","required":false,"positional":false},{"name":"icon","required":true,"positional":false}], [], options) as IconButton;
}
export namespace IconButton {
export function filled(options: { key?: upstream0.Key | null | undefined; iconSize?: Bindable<number | null> | undefined; padding?: Bindable<upstream0.EdgeInsetsGeometry | null> | undefined; alignment?: Bindable<upstream0.AlignmentGeometry | null> | undefined; color?: Bindable<upstream0.Color | null> | undefined; disabledColor?: Bindable<upstream0.Color | null> | undefined; onPressed: Bindable<(() => void) | null>; focusNode?: Bindable<upstream0.FocusNode | null> | undefined; autofocus?: Bindable<boolean> | undefined; tooltip?: Bindable<string | null> | undefined; style?: Bindable<ButtonStyle | null> | undefined; isSelected?: Bindable<boolean | null> | undefined; selectedIcon?: Bindable<Widget | null> | undefined; icon: Bindable<Widget> }): IconButton {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.material/material#type:IconButton", "filled", [{"name":"key","required":false,"positional":false},{"name":"iconSize","required":false,"positional":false},{"name":"padding","required":false,"positional":false},{"name":"alignment","required":false,"positional":false},{"name":"color","required":false,"positional":false},{"name":"disabledColor","required":false,"positional":false},{"name":"onPressed","required":true,"positional":false},{"name":"focusNode","required":false,"positional":false},{"name":"autofocus","required":false,"positional":false},{"name":"tooltip","required":false,"positional":false},{"name":"style","required":false,"positional":false},{"name":"isSelected","required":false,"positional":false},{"name":"selectedIcon","required":false,"positional":false},{"name":"icon","required":true,"positional":false}], [], options) as IconButton;
}
}
export namespace IconButton {
export function filledTonal(options: { key?: upstream0.Key | null | undefined; iconSize?: Bindable<number | null> | undefined; padding?: Bindable<upstream0.EdgeInsetsGeometry | null> | undefined; alignment?: Bindable<upstream0.AlignmentGeometry | null> | undefined; color?: Bindable<upstream0.Color | null> | undefined; disabledColor?: Bindable<upstream0.Color | null> | undefined; onPressed: Bindable<(() => void) | null>; focusNode?: Bindable<upstream0.FocusNode | null> | undefined; autofocus?: Bindable<boolean> | undefined; tooltip?: Bindable<string | null> | undefined; style?: Bindable<ButtonStyle | null> | undefined; isSelected?: Bindable<boolean | null> | undefined; selectedIcon?: Bindable<Widget | null> | undefined; icon: Bindable<Widget> }): IconButton {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.material/material#type:IconButton", "filledTonal", [{"name":"key","required":false,"positional":false},{"name":"iconSize","required":false,"positional":false},{"name":"padding","required":false,"positional":false},{"name":"alignment","required":false,"positional":false},{"name":"color","required":false,"positional":false},{"name":"disabledColor","required":false,"positional":false},{"name":"onPressed","required":true,"positional":false},{"name":"focusNode","required":false,"positional":false},{"name":"autofocus","required":false,"positional":false},{"name":"tooltip","required":false,"positional":false},{"name":"style","required":false,"positional":false},{"name":"isSelected","required":false,"positional":false},{"name":"selectedIcon","required":false,"positional":false},{"name":"icon","required":true,"positional":false}], [], options) as IconButton;
}
}
export namespace IconButton {
export function outlined(options: { key?: upstream0.Key | null | undefined; iconSize?: Bindable<number | null> | undefined; padding?: Bindable<upstream0.EdgeInsetsGeometry | null> | undefined; alignment?: Bindable<upstream0.AlignmentGeometry | null> | undefined; color?: Bindable<upstream0.Color | null> | undefined; disabledColor?: Bindable<upstream0.Color | null> | undefined; onPressed: Bindable<(() => void) | null>; focusNode?: Bindable<upstream0.FocusNode | null> | undefined; autofocus?: Bindable<boolean> | undefined; tooltip?: Bindable<string | null> | undefined; style?: Bindable<ButtonStyle | null> | undefined; isSelected?: Bindable<boolean | null> | undefined; selectedIcon?: Bindable<Widget | null> | undefined; icon: Bindable<Widget> }): IconButton {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.material/material#type:IconButton", "outlined", [{"name":"key","required":false,"positional":false},{"name":"iconSize","required":false,"positional":false},{"name":"padding","required":false,"positional":false},{"name":"alignment","required":false,"positional":false},{"name":"color","required":false,"positional":false},{"name":"disabledColor","required":false,"positional":false},{"name":"onPressed","required":true,"positional":false},{"name":"focusNode","required":false,"positional":false},{"name":"autofocus","required":false,"positional":false},{"name":"tooltip","required":false,"positional":false},{"name":"style","required":false,"positional":false},{"name":"isSelected","required":false,"positional":false},{"name":"selectedIcon","required":false,"positional":false},{"name":"icon","required":true,"positional":false}], [], options) as IconButton;
}
}
export interface FloatingActionButton extends WidgetDescription { readonly type: "flax.material/material#type:FloatingActionButton";  }
export function FloatingActionButton(options: { key?: upstream0.Key | null | undefined; child?: Bindable<Widget | null> | undefined; tooltip?: Bindable<string | null> | undefined; foregroundColor?: Bindable<upstream0.Color | null> | undefined; backgroundColor?: Bindable<upstream0.Color | null> | undefined; elevation?: Bindable<number | null> | undefined; onPressed: Bindable<(() => void) | null>; mini?: Bindable<boolean> | undefined; focusNode?: Bindable<upstream0.FocusNode | null> | undefined; autofocus?: Bindable<boolean> | undefined }): FloatingActionButton {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.material/material#type:FloatingActionButton", "", [{"name":"key","required":false,"positional":false},{"name":"child","required":false,"positional":false},{"name":"tooltip","required":false,"positional":false},{"name":"foregroundColor","required":false,"positional":false},{"name":"backgroundColor","required":false,"positional":false},{"name":"elevation","required":false,"positional":false},{"name":"onPressed","required":true,"positional":false},{"name":"mini","required":false,"positional":false},{"name":"focusNode","required":false,"positional":false},{"name":"autofocus","required":false,"positional":false}], [], options) as FloatingActionButton;
}
export namespace FloatingActionButton {
export function small(options: { key?: upstream0.Key | null | undefined; child?: Bindable<Widget | null> | undefined; tooltip?: Bindable<string | null> | undefined; foregroundColor?: Bindable<upstream0.Color | null> | undefined; backgroundColor?: Bindable<upstream0.Color | null> | undefined; elevation?: Bindable<number | null> | undefined; onPressed: Bindable<(() => void) | null>; focusNode?: Bindable<upstream0.FocusNode | null> | undefined; autofocus?: Bindable<boolean> | undefined }): FloatingActionButton {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.material/material#type:FloatingActionButton", "small", [{"name":"key","required":false,"positional":false},{"name":"child","required":false,"positional":false},{"name":"tooltip","required":false,"positional":false},{"name":"foregroundColor","required":false,"positional":false},{"name":"backgroundColor","required":false,"positional":false},{"name":"elevation","required":false,"positional":false},{"name":"onPressed","required":true,"positional":false},{"name":"focusNode","required":false,"positional":false},{"name":"autofocus","required":false,"positional":false}], [], options) as FloatingActionButton;
}
}
export namespace FloatingActionButton {
export function large(options: { key?: upstream0.Key | null | undefined; child?: Bindable<Widget | null> | undefined; tooltip?: Bindable<string | null> | undefined; foregroundColor?: Bindable<upstream0.Color | null> | undefined; backgroundColor?: Bindable<upstream0.Color | null> | undefined; elevation?: Bindable<number | null> | undefined; onPressed: Bindable<(() => void) | null>; focusNode?: Bindable<upstream0.FocusNode | null> | undefined; autofocus?: Bindable<boolean> | undefined }): FloatingActionButton {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.material/material#type:FloatingActionButton", "large", [{"name":"key","required":false,"positional":false},{"name":"child","required":false,"positional":false},{"name":"tooltip","required":false,"positional":false},{"name":"foregroundColor","required":false,"positional":false},{"name":"backgroundColor","required":false,"positional":false},{"name":"elevation","required":false,"positional":false},{"name":"onPressed","required":true,"positional":false},{"name":"focusNode","required":false,"positional":false},{"name":"autofocus","required":false,"positional":false}], [], options) as FloatingActionButton;
}
}
export namespace FloatingActionButton {
export function extended(options: { key?: upstream0.Key | null | undefined; tooltip?: Bindable<string | null> | undefined; foregroundColor?: Bindable<upstream0.Color | null> | undefined; backgroundColor?: Bindable<upstream0.Color | null> | undefined; elevation?: Bindable<number | null> | undefined; onPressed: Bindable<(() => void) | null>; focusNode?: Bindable<upstream0.FocusNode | null> | undefined; autofocus?: Bindable<boolean> | undefined; icon?: Bindable<Widget | null> | undefined; label: Bindable<Widget> }): FloatingActionButton {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.material/material#type:FloatingActionButton", "extended", [{"name":"key","required":false,"positional":false},{"name":"tooltip","required":false,"positional":false},{"name":"foregroundColor","required":false,"positional":false},{"name":"backgroundColor","required":false,"positional":false},{"name":"elevation","required":false,"positional":false},{"name":"onPressed","required":true,"positional":false},{"name":"focusNode","required":false,"positional":false},{"name":"autofocus","required":false,"positional":false},{"name":"icon","required":false,"positional":false},{"name":"label","required":true,"positional":false}], [], options) as FloatingActionButton;
}
}
export interface Drawer extends WidgetDescription { readonly type: "flax.material/material#type:Drawer";  }
export function Drawer(options: { key?: upstream0.Key | null | undefined; backgroundColor?: Bindable<upstream0.Color | null> | undefined; elevation?: Bindable<number | null> | undefined; shadowColor?: Bindable<upstream0.Color | null> | undefined; width?: Bindable<number | null> | undefined; child?: Bindable<Widget | null> | undefined; semanticLabel?: Bindable<string | null> | undefined; clipBehavior?: Bindable<upstream0.Clip | null> | undefined } = {}): Drawer {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.material/material#type:Drawer", "", [{"name":"key","required":false,"positional":false},{"name":"backgroundColor","required":false,"positional":false},{"name":"elevation","required":false,"positional":false},{"name":"shadowColor","required":false,"positional":false},{"name":"width","required":false,"positional":false},{"name":"child","required":false,"positional":false},{"name":"semanticLabel","required":false,"positional":false},{"name":"clipBehavior","required":false,"positional":false}], [], options) as Drawer;
}
export interface Divider extends WidgetDescription { readonly type: "flax.material/material#type:Divider";  }
export function Divider(options: { key?: upstream0.Key | null | undefined; height?: Bindable<number | null> | undefined; thickness?: Bindable<number | null> | undefined; indent?: Bindable<number | null> | undefined; endIndent?: Bindable<number | null> | undefined; color?: Bindable<upstream0.Color | null> | undefined; radius?: Bindable<upstream0.BorderRadiusGeometry | null> | undefined } = {}): Divider {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.material/material#type:Divider", "", [{"name":"key","required":false,"positional":false},{"name":"height","required":false,"positional":false},{"name":"thickness","required":false,"positional":false},{"name":"indent","required":false,"positional":false},{"name":"endIndent","required":false,"positional":false},{"name":"color","required":false,"positional":false},{"name":"radius","required":false,"positional":false}], [], options) as Divider;
}
export interface VerticalDivider extends WidgetDescription { readonly type: "flax.material/material#type:VerticalDivider";  }
export function VerticalDivider(options: { key?: upstream0.Key | null | undefined; width?: Bindable<number | null> | undefined; thickness?: Bindable<number | null> | undefined; indent?: Bindable<number | null> | undefined; endIndent?: Bindable<number | null> | undefined; color?: Bindable<upstream0.Color | null> | undefined; radius?: Bindable<upstream0.BorderRadiusGeometry | null> | undefined } = {}): VerticalDivider {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.material/material#type:VerticalDivider", "", [{"name":"key","required":false,"positional":false},{"name":"width","required":false,"positional":false},{"name":"thickness","required":false,"positional":false},{"name":"indent","required":false,"positional":false},{"name":"endIndent","required":false,"positional":false},{"name":"color","required":false,"positional":false},{"name":"radius","required":false,"positional":false}], [], options) as VerticalDivider;
}
export interface Card extends WidgetDescription { readonly type: "flax.material/material#type:Card";  }
export function Card(options: { key?: upstream0.Key | null | undefined; color?: Bindable<upstream0.Color | null> | undefined; shadowColor?: Bindable<upstream0.Color | null> | undefined; surfaceTintColor?: Bindable<upstream0.Color | null> | undefined; elevation?: Bindable<number | null> | undefined; margin?: Bindable<upstream0.EdgeInsetsGeometry | null> | undefined; clipBehavior?: Bindable<upstream0.Clip | null> | undefined; child?: Bindable<Widget | null> | undefined; semanticContainer?: Bindable<boolean> | undefined } = {}): Card {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.material/material#type:Card", "", [{"name":"key","required":false,"positional":false},{"name":"color","required":false,"positional":false},{"name":"shadowColor","required":false,"positional":false},{"name":"surfaceTintColor","required":false,"positional":false},{"name":"elevation","required":false,"positional":false},{"name":"margin","required":false,"positional":false},{"name":"clipBehavior","required":false,"positional":false},{"name":"child","required":false,"positional":false},{"name":"semanticContainer","required":false,"positional":false}], [], options) as Card;
}
export namespace Card {
export function filled(options: { key?: upstream0.Key | null | undefined; color?: Bindable<upstream0.Color | null> | undefined; shadowColor?: Bindable<upstream0.Color | null> | undefined; surfaceTintColor?: Bindable<upstream0.Color | null> | undefined; elevation?: Bindable<number | null> | undefined; margin?: Bindable<upstream0.EdgeInsetsGeometry | null> | undefined; clipBehavior?: Bindable<upstream0.Clip | null> | undefined; child?: Bindable<Widget | null> | undefined; semanticContainer?: Bindable<boolean> | undefined } = {}): Card {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.material/material#type:Card", "filled", [{"name":"key","required":false,"positional":false},{"name":"color","required":false,"positional":false},{"name":"shadowColor","required":false,"positional":false},{"name":"surfaceTintColor","required":false,"positional":false},{"name":"elevation","required":false,"positional":false},{"name":"margin","required":false,"positional":false},{"name":"clipBehavior","required":false,"positional":false},{"name":"child","required":false,"positional":false},{"name":"semanticContainer","required":false,"positional":false}], [], options) as Card;
}
}
export namespace Card {
export function outlined(options: { key?: upstream0.Key | null | undefined; color?: Bindable<upstream0.Color | null> | undefined; shadowColor?: Bindable<upstream0.Color | null> | undefined; surfaceTintColor?: Bindable<upstream0.Color | null> | undefined; elevation?: Bindable<number | null> | undefined; margin?: Bindable<upstream0.EdgeInsetsGeometry | null> | undefined; clipBehavior?: Bindable<upstream0.Clip | null> | undefined; child?: Bindable<Widget | null> | undefined; semanticContainer?: Bindable<boolean> | undefined } = {}): Card {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.material/material#type:Card", "outlined", [{"name":"key","required":false,"positional":false},{"name":"color","required":false,"positional":false},{"name":"shadowColor","required":false,"positional":false},{"name":"surfaceTintColor","required":false,"positional":false},{"name":"elevation","required":false,"positional":false},{"name":"margin","required":false,"positional":false},{"name":"clipBehavior","required":false,"positional":false},{"name":"child","required":false,"positional":false},{"name":"semanticContainer","required":false,"positional":false}], [], options) as Card;
}
}
export interface ListTile extends WidgetDescription { readonly type: "flax.material/material#type:ListTile";  }
export function ListTile(options: { key?: upstream0.Key | null | undefined; leading?: Bindable<Widget | null> | undefined; title?: Bindable<Widget | null> | undefined; subtitle?: Bindable<Widget | null> | undefined; trailing?: Bindable<Widget | null> | undefined; isThreeLine?: Bindable<boolean | null> | undefined; dense?: Bindable<boolean | null> | undefined; style?: Bindable<ListTileStyle | null> | undefined; selectedColor?: Bindable<upstream0.Color | null> | undefined; iconColor?: Bindable<upstream0.Color | null> | undefined; textColor?: Bindable<upstream0.Color | null> | undefined; titleTextStyle?: Bindable<upstream0.TextStyle | null> | undefined; contentPadding?: Bindable<upstream0.EdgeInsetsGeometry | null> | undefined; enabled?: Bindable<boolean> | undefined; onTap?: Bindable<(() => void) | null> | undefined; onLongPress?: Bindable<(() => void) | null> | undefined; selected?: Bindable<boolean> | undefined; focusNode?: Bindable<upstream0.FocusNode | null> | undefined; tileColor?: Bindable<upstream0.Color | null> | undefined; selectedTileColor?: Bindable<upstream0.Color | null> | undefined } = {}): ListTile {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.material/material#type:ListTile", "", [{"name":"key","required":false,"positional":false},{"name":"leading","required":false,"positional":false},{"name":"title","required":false,"positional":false},{"name":"subtitle","required":false,"positional":false},{"name":"trailing","required":false,"positional":false},{"name":"isThreeLine","required":false,"positional":false},{"name":"dense","required":false,"positional":false},{"name":"style","required":false,"positional":false},{"name":"selectedColor","required":false,"positional":false},{"name":"iconColor","required":false,"positional":false},{"name":"textColor","required":false,"positional":false},{"name":"titleTextStyle","required":false,"positional":false},{"name":"contentPadding","required":false,"positional":false},{"name":"enabled","required":false,"positional":false},{"name":"onTap","required":false,"positional":false},{"name":"onLongPress","required":false,"positional":false},{"name":"selected","required":false,"positional":false},{"name":"focusNode","required":false,"positional":false},{"name":"tileColor","required":false,"positional":false},{"name":"selectedTileColor","required":false,"positional":false}], [], options) as ListTile;
}
export interface Checkbox extends WidgetDescription { readonly type: "flax.material/material#type:Checkbox";  }
export function Checkbox(options: { key?: upstream0.Key | null | undefined; value: Bindable<boolean | null>; tristate?: Bindable<boolean> | undefined; onChanged: Bindable<((value: boolean | null) => void) | null>; activeColor?: Bindable<upstream0.Color | null> | undefined; fillColor?: Bindable<upstream0.WidgetStateProperty<upstream0.Color | null> | null> | undefined; checkColor?: Bindable<upstream0.Color | null> | undefined; overlayColor?: Bindable<upstream0.WidgetStateProperty<upstream0.Color | null> | null> | undefined; focusNode?: Bindable<upstream0.FocusNode | null> | undefined; autofocus?: Bindable<boolean> | undefined; isError?: Bindable<boolean> | undefined }): Checkbox {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.material/material#type:Checkbox", "", [{"name":"key","required":false,"positional":false},{"name":"value","required":true,"positional":false},{"name":"tristate","required":false,"positional":false},{"name":"onChanged","required":true,"positional":false},{"name":"activeColor","required":false,"positional":false},{"name":"fillColor","required":false,"positional":false},{"name":"checkColor","required":false,"positional":false},{"name":"overlayColor","required":false,"positional":false},{"name":"focusNode","required":false,"positional":false},{"name":"autofocus","required":false,"positional":false},{"name":"isError","required":false,"positional":false}], [], options) as Checkbox;
}
export interface Switch extends WidgetDescription { readonly type: "flax.material/material#type:Switch";  }
export function Switch(options: { key?: upstream0.Key | null | undefined; value: Bindable<boolean>; onChanged: Bindable<((value: boolean) => void) | null>; activeThumbColor?: Bindable<upstream0.Color | null> | undefined; activeTrackColor?: Bindable<upstream0.Color | null> | undefined; inactiveThumbColor?: Bindable<upstream0.Color | null> | undefined; focusNode?: Bindable<upstream0.FocusNode | null> | undefined; autofocus?: Bindable<boolean> | undefined; padding?: Bindable<upstream0.EdgeInsetsGeometry | null> | undefined }): Switch {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.material/material#type:Switch", "", [{"name":"key","required":false,"positional":false},{"name":"value","required":true,"positional":false},{"name":"onChanged","required":true,"positional":false},{"name":"activeThumbColor","required":false,"positional":false},{"name":"activeTrackColor","required":false,"positional":false},{"name":"inactiveThumbColor","required":false,"positional":false},{"name":"focusNode","required":false,"positional":false},{"name":"autofocus","required":false,"positional":false},{"name":"padding","required":false,"positional":false}], [], options) as Switch;
}
export interface CircularProgressIndicator extends WidgetDescription { readonly type: "flax.material/material#type:CircularProgressIndicator";  }
export function CircularProgressIndicator(options: { key?: upstream0.Key | null | undefined; value?: Bindable<number | null> | undefined; backgroundColor?: Bindable<upstream0.Color | null> | undefined; color?: Bindable<upstream0.Color | null> | undefined; strokeWidth?: Bindable<number | null> | undefined; semanticsLabel?: Bindable<string | null> | undefined } = {}): CircularProgressIndicator {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.material/material#type:CircularProgressIndicator", "", [{"name":"key","required":false,"positional":false},{"name":"value","required":false,"positional":false},{"name":"backgroundColor","required":false,"positional":false},{"name":"color","required":false,"positional":false},{"name":"strokeWidth","required":false,"positional":false},{"name":"semanticsLabel","required":false,"positional":false}], [], options) as CircularProgressIndicator;
}
export interface NavigationDestination extends WidgetDescription { readonly type: "flax.material/material#type:NavigationDestination";  }
export function NavigationDestination(options: { key?: upstream0.Key | null | undefined; icon: Bindable<Widget>; selectedIcon?: Bindable<Widget | null> | undefined; label: Bindable<string>; tooltip?: Bindable<string | null> | undefined; enabled?: Bindable<boolean> | undefined }): NavigationDestination {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.material/material#type:NavigationDestination", "", [{"name":"key","required":false,"positional":false},{"name":"icon","required":true,"positional":false},{"name":"selectedIcon","required":false,"positional":false},{"name":"label","required":true,"positional":false},{"name":"tooltip","required":false,"positional":false},{"name":"enabled","required":false,"positional":false}], [], options) as NavigationDestination;
}
export interface NavigationBar extends WidgetDescription { readonly type: "flax.material/material#type:NavigationBar";  }
export function NavigationBar(options: { key?: upstream0.Key | null | undefined; selectedIndex?: Bindable<number> | undefined; destinations: Bindable<DartListInput<Widget, Widget>>; onDestinationSelected?: Bindable<((value: number) => void) | null> | undefined; backgroundColor?: Bindable<upstream0.Color | null> | undefined; elevation?: Bindable<number | null> | undefined; shadowColor?: Bindable<upstream0.Color | null> | undefined; indicatorColor?: Bindable<upstream0.Color | null> | undefined; height?: Bindable<number | null> | undefined; labelBehavior?: Bindable<NavigationDestinationLabelBehavior | null> | undefined }): NavigationBar {
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return construct("widget", "flax.material/material#type:NavigationBar", "", [{"name":"key","required":false,"positional":false},{"name":"selectedIndex","required":false,"positional":false},{"name":"destinations","required":true,"positional":false},{"name":"onDestinationSelected","required":false,"positional":false},{"name":"backgroundColor","required":false,"positional":false},{"name":"elevation","required":false,"positional":false},{"name":"shadowColor","required":false,"positional":false},{"name":"indicatorColor","required":false,"positional":false},{"name":"height","required":false,"positional":false},{"name":"labelBehavior","required":false,"positional":false}], [], options) as NavigationBar;
}
export namespace Theme { export function of(context: upstream0.BuildContext): ThemeData {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeStatic("flax.material/material#type:Theme", "of", [contextHandle(context, "flax.core/flutter#type:BuildContext")]);
return _flaxResult as ThemeData;
} }
function _flaxTopLevel_showDialog<T extends NavigationData | null = NavigationData | null>(options: { barrierColor?: upstream0.Color | null | undefined; barrierDismissible?: boolean | undefined; barrierLabel?: string | null | undefined; builder: ((context: upstream0.BuildContext) => Widget); context: upstream0.BuildContext; fullscreenDialog?: boolean | undefined; requestFocus?: boolean | null | undefined; routeSettings?: upstream0.RouteSettings | null | undefined; useRootNavigator?: boolean | undefined; useSafeArea?: boolean | undefined }): Promise<T | null> {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
if (options === null || typeof options !== 'object' || Array.isArray(options) || Object.keys(options).some(k => !["barrierColor","barrierDismissible","barrierLabel","builder","context","fullscreenDialog","requestFocus","routeSettings","useRootNavigator","useSafeArea"].includes(k))) throw new TypeError('Invalid named method arguments');
const _flaxResult = invokeTopLevel("flax.material/material#function:showDialog", [options.barrierColor, options.barrierDismissible, options.barrierLabel, options.builder, contextHandle(options.context, "flax.core/flutter#type:BuildContext"), options.fullscreenDialog, options.requestFocus, options.routeSettings, options.useRootNavigator, options.useSafeArea]);
return _flaxResult as Promise<T | null>;
}
export { _flaxTopLevel_showDialog as showDialog };
