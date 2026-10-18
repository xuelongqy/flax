// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
import { defineStaticGetters as _flaxDefineStaticGetters, defineDartCallTypes as _flaxDefineDartCallTypes, installBindingModule as _flaxInstallBindingModule, type FlaxInstanceType as _FlaxInstanceType, bindingMethods as _flaxBindingMethods, type NavigationData, type DartIterable, type DartIterableInput, type DartList, type DartListInput, type DartMap, type DartMapInput, type DartSet, type DartSetInput, type FlaxStreamReference, type Bindable, type DartValue, type DartEnum, type DartInput, type Widget, type WidgetDescription, type ComponentContext } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_KeyboardKey';
import '@flax/flutter/services/_bindings/sdk_services_KeyboardKey';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import type * as upstream4 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { construct, constructProxy, constructObject, constructDeferredObject, constructStream, constructAsyncIterableStream, _flaxDefineDartTypes, _flaxBindInstanceType, defineObject, defineStream, invokeObject, invokeObjectStatic, invokeStream, enumValue, defineEnum, invokeEnum, defineContext, defineState, contextHandle, invokeStatic, invokeInstance, invokeTopLevel } from "@flax/core/navigation/_bindings/flutter.__module";
import { bindDartExtension as _flaxBindDartExtension, extensionReceiver as _flaxExtensionReceiver, flaxDartMethodCases as _flaxDartMethodCases, type FlaxDartSignature as _FlaxDartSignature, type FlaxDartCallable as _FlaxDartCallable, flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, flaxDartTypeCases as _flaxDartTypeCases, type FlaxDartType as _FlaxDartType, type FlaxDartTypeCases as _FlaxDartTypeCases } from '@flax/core/bindings';
export interface PhysicalKeyboardKey extends Omit<upstream0.KeyboardKey, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.KeyboardKey>, Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::PhysicalKeyboardKey": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [] }>, Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [] }> { readonly __PhysicalKeyboardKey: unique symbol;
readonly [_flaxDartTypeValue]: PhysicalKeyboardKey;

readonly usbHidUsage: number;
readonly debugName: string | null;
toStringShort(): string;
toDiagnosticsNode(options?: {name?: string | null | undefined; style?: upstream3.DiagnosticsTreeStyle | null | undefined}): upstream2.DiagnosticsNode;
debugFillProperties(properties: Readonly<{ "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [] }>): void;
toString(options?: {minLevel?: upstream5.DiagnosticLevel | undefined}): string;
}
defineObject("flax.core/flutter#type:PhysicalKeyboardKey", ["usbHidUsage","debugName"], [], _flaxBindingMethods("flax.core/flutter#type:PhysicalKeyboardKey", "object", {}, {}), [], undefined, "flax.core/sdk_services#type:KeyboardKey");
export function _PhysicalKeyboardKeyFactory(usbHidUsage: number): PhysicalKeyboardKey {
if (new.target) throw new TypeError('Use the Dart factory call; this binding is not a JS subclass constructor');
if (arguments.length > 1) throw new TypeError('Too many constructor arguments');
return constructObject("object", "flax.core/flutter#type:PhysicalKeyboardKey", "", [{"name":"usbHidUsage","required":true,"positional":true}], [usbHidUsage], {}) as PhysicalKeyboardKey;
}
export namespace _PhysicalKeyboardKeyFactory { export declare const hyper: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const superKey: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const fn: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const fnLock: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const suspend: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const resume: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const turbo: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const privacyScreenToggle: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const microphoneMuteToggle: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const sleep: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const wakeUp: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const displayToggleIntExt: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const gameButton1: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const gameButton2: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const gameButton3: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const gameButton4: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const gameButton5: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const gameButton6: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const gameButton7: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const gameButton8: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const gameButton9: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const gameButton10: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const gameButton11: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const gameButton12: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const gameButton13: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const gameButton14: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const gameButton15: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const gameButton16: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const gameButtonA: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const gameButtonB: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const gameButtonC: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const gameButtonLeft1: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const gameButtonLeft2: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const gameButtonMode: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const gameButtonRight1: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const gameButtonRight2: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const gameButtonSelect: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const gameButtonStart: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const gameButtonThumbLeft: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const gameButtonThumbRight: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const gameButtonX: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const gameButtonY: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const gameButtonZ: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const usbReserved: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const usbErrorRollOver: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const usbPostFail: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const usbErrorUndefined: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const keyA: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const keyB: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const keyC: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const keyD: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const keyE: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const keyF: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const keyG: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const keyH: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const keyI: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const keyJ: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const keyK: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const keyL: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const keyM: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const keyN: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const keyO: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const keyP: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const keyQ: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const keyR: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const keyS: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const keyT: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const keyU: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const keyV: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const keyW: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const keyX: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const keyY: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const keyZ: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const digit1: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const digit2: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const digit3: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const digit4: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const digit5: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const digit6: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const digit7: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const digit8: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const digit9: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const digit0: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const enter: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const escape: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const backspace: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const tab: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const space: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const minus: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const equal: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const bracketLeft: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const bracketRight: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const backslash: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const semicolon: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const quote: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const backquote: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const comma: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const period: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const slash: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const capsLock: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const f1: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const f2: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const f3: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const f4: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const f5: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const f6: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const f7: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const f8: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const f9: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const f10: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const f11: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const f12: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const printScreen: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const scrollLock: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const pause: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const insert: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const home: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const pageUp: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const end: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const pageDown: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const arrowRight: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const arrowLeft: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const arrowDown: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const arrowUp: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const numLock: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const numpadDivide: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const numpadMultiply: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const numpadSubtract: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const numpadAdd: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const numpadEnter: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const numpad1: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const numpad2: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const numpad3: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const numpad4: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const numpad5: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const numpad6: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const numpad7: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const numpad8: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const numpad9: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const numpad0: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const numpadDecimal: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const intlBackslash: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const contextMenu: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const power: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const numpadEqual: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const f13: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const f14: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const f15: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const f16: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const f17: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const f18: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const f19: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const f20: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const f21: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const f22: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const f23: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const f24: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const open: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const help: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const select: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const again: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const undo: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const cut: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const copy: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const paste: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const find: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const audioVolumeMute: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const audioVolumeUp: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const audioVolumeDown: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const numpadComma: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const intlRo: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const kanaMode: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const intlYen: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const convert: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const nonConvert: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const lang1: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const lang2: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const lang3: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const lang4: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const lang5: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const abort: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const props: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const numpadParenLeft: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const numpadParenRight: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const numpadBackspace: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const numpadMemoryStore: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const numpadMemoryRecall: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const numpadMemoryClear: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const numpadMemoryAdd: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const numpadMemorySubtract: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const numpadSignChange: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const numpadClear: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const numpadClearEntry: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const controlLeft: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const shiftLeft: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const altLeft: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const metaLeft: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const controlRight: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const shiftRight: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const altRight: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const metaRight: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const info: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const closedCaptionToggle: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const brightnessUp: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const brightnessDown: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const brightnessToggle: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const brightnessMinimum: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const brightnessMaximum: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const brightnessAuto: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const kbdIllumUp: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const kbdIllumDown: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const mediaLast: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const launchPhone: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const programGuide: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const exit: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const channelUp: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const channelDown: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const mediaPlay: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const mediaPause: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const mediaRecord: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const mediaFastForward: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const mediaRewind: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const mediaTrackNext: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const mediaTrackPrevious: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const mediaStop: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const eject: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const mediaPlayPause: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const speechInputToggle: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const bassBoost: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const mediaSelect: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const launchWordProcessor: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const launchSpreadsheet: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const launchMail: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const launchContacts: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const launchCalendar: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const launchApp2: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const launchApp1: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const launchInternetBrowser: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const logOff: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const lockScreen: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const launchControlPanel: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const selectTask: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const launchDocuments: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const spellCheck: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const launchKeyboardLayout: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const launchScreenSaver: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const launchAudioBrowser: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const launchAssistant: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const newKey: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const close: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const save: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const print: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const browserSearch: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const browserHome: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const browserBack: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const browserForward: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const browserStop: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const browserRefresh: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const browserFavorites: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const zoomIn: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const zoomOut: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const zoomToggle: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const redo: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const mailReply: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const mailForward: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const mailSend: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const keyboardLayoutSelect: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const showAllWindows: PhysicalKeyboardKey; }
export namespace _PhysicalKeyboardKeyFactory { export declare const knownPhysicalKeys: DartIterable<PhysicalKeyboardKey>; }
_flaxDefineStaticGetters(_PhysicalKeyboardKeyFactory, "flax.core/flutter#read:PhysicalKeyboardKey.", ["hyper","superKey","fn","fnLock","suspend","resume","turbo","privacyScreenToggle","microphoneMuteToggle","sleep","wakeUp","displayToggleIntExt","gameButton1","gameButton2","gameButton3","gameButton4","gameButton5","gameButton6","gameButton7","gameButton8","gameButton9","gameButton10","gameButton11","gameButton12","gameButton13","gameButton14","gameButton15","gameButton16","gameButtonA","gameButtonB","gameButtonC","gameButtonLeft1","gameButtonLeft2","gameButtonMode","gameButtonRight1","gameButtonRight2","gameButtonSelect","gameButtonStart","gameButtonThumbLeft","gameButtonThumbRight","gameButtonX","gameButtonY","gameButtonZ","usbReserved","usbErrorRollOver","usbPostFail","usbErrorUndefined","keyA","keyB","keyC","keyD","keyE","keyF","keyG","keyH","keyI","keyJ","keyK","keyL","keyM","keyN","keyO","keyP","keyQ","keyR","keyS","keyT","keyU","keyV","keyW","keyX","keyY","keyZ","digit1","digit2","digit3","digit4","digit5","digit6","digit7","digit8","digit9","digit0","enter","escape","backspace","tab","space","minus","equal","bracketLeft","bracketRight","backslash","semicolon","quote","backquote","comma","period","slash","capsLock","f1","f2","f3","f4","f5","f6","f7","f8","f9","f10","f11","f12","printScreen","scrollLock","pause","insert","home","pageUp","end","pageDown","arrowRight","arrowLeft","arrowDown","arrowUp","numLock","numpadDivide","numpadMultiply","numpadSubtract","numpadAdd","numpadEnter","numpad1","numpad2","numpad3","numpad4","numpad5","numpad6","numpad7","numpad8","numpad9","numpad0","numpadDecimal","intlBackslash","contextMenu","power","numpadEqual","f13","f14","f15","f16","f17","f18","f19","f20","f21","f22","f23","f24","open","help","select","again","undo","cut","copy","paste","find","audioVolumeMute","audioVolumeUp","audioVolumeDown","numpadComma","intlRo","kanaMode","intlYen","convert","nonConvert","lang1","lang2","lang3","lang4","lang5","abort","props","numpadParenLeft","numpadParenRight","numpadBackspace","numpadMemoryStore","numpadMemoryRecall","numpadMemoryClear","numpadMemoryAdd","numpadMemorySubtract","numpadSignChange","numpadClear","numpadClearEntry","controlLeft","shiftLeft","altLeft","metaLeft","controlRight","shiftRight","altRight","metaRight","info","closedCaptionToggle","brightnessUp","brightnessDown","brightnessToggle","brightnessMinimum","brightnessMaximum","brightnessAuto","kbdIllumUp","kbdIllumDown","mediaLast","launchPhone","programGuide","exit","channelUp","channelDown","mediaPlay","mediaPause","mediaRecord","mediaFastForward","mediaRewind","mediaTrackNext","mediaTrackPrevious","mediaStop","eject","mediaPlayPause","speechInputToggle","bassBoost","mediaSelect","launchWordProcessor","launchSpreadsheet","launchMail","launchContacts","launchCalendar","launchApp2","launchApp1","launchInternetBrowser","logOff","lockScreen","launchControlPanel","selectTask","launchDocuments","spellCheck","launchKeyboardLayout","launchScreenSaver","launchAudioBrowser","launchAssistant","newKey","close","save","print","browserSearch","browserHome","browserBack","browserForward","browserStop","browserRefresh","browserFavorites","zoomIn","zoomOut","zoomToggle","redo","mailReply","mailForward","mailSend","keyboardLayoutSelect","showAllWindows","knownPhysicalKeys"]);
export namespace _PhysicalKeyboardKeyFactory { export function findKeyByCode(usageCode: number): PhysicalKeyboardKey | null {
if (arguments.length > 1) throw new TypeError('Too many method arguments');
const _flaxResult = invokeTopLevel("flax.core/flutter#function:PhysicalKeyboardKey.findKeyByCode", [usageCode]);
return _flaxResult as PhysicalKeyboardKey | null;
} }
export const PhysicalKeyboardKey: typeof _PhysicalKeyboardKeyFactory & _FlaxInstanceType<PhysicalKeyboardKey> & _FlaxDartType<PhysicalKeyboardKey, readonly ["class", "flax.core/flutter#type:PhysicalKeyboardKey", readonly [], false]> = _flaxBindInstanceType<PhysicalKeyboardKey, typeof _PhysicalKeyboardKeyFactory>(_PhysicalKeyboardKeyFactory, "flax.core/flutter#type:PhysicalKeyboardKey", ["flax.core/sdk_services#type:KeyboardKey","dart:core::Object","flax.core/sdk_foundation#type:Diagnosticable"]) as typeof _PhysicalKeyboardKeyFactory & _FlaxInstanceType<PhysicalKeyboardKey> & _FlaxDartType<PhysicalKeyboardKey, readonly ["class", "flax.core/flutter#type:PhysicalKeyboardKey", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "usbHidUsage" | "debugName" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::PhysicalKeyboardKey" | "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
