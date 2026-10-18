import { type FlaxInstanceType as _FlaxInstanceType, type DartIterable } from '@flax/core/bindings';
import type * as upstream0 from '@flax/flutter/services/_bindings/sdk_services_KeyboardKey';
import '@flax/flutter/services/_bindings/sdk_services_KeyboardKey';
import type * as upstream1 from '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import '@flax/flutter/foundation/_bindings/sdk_foundation_Diagnosticable';
import type * as upstream2 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsNode';
import type * as upstream3 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticsTreeStyle';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticPropertiesBuilder';
import type * as upstream5 from '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import '@flax/flutter/foundation/_bindings/sdk_foundation_DiagnosticLevel';
import { flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface PhysicalKeyboardKey extends Omit<upstream0.KeyboardKey, _flaxOwnMembers0>, Omit<upstream1.Diagnosticable, _flaxOwnMembers0 | keyof upstream0.KeyboardKey>, Readonly<{
    "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::PhysicalKeyboardKey": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey": readonly [];
}>, Readonly<{
    "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable": readonly [];
}> {
    readonly __PhysicalKeyboardKey: unique symbol;
    readonly [_flaxDartTypeValue]: PhysicalKeyboardKey;
    readonly usbHidUsage: number;
    readonly debugName: string | null;
    toStringShort(): string;
    toDiagnosticsNode(options?: {
        name?: string | null | undefined;
        style?: upstream3.DiagnosticsTreeStyle | null | undefined;
    }): upstream2.DiagnosticsNode;
    debugFillProperties(properties: Readonly<{
        "__flaxBound:package:flutter/src/foundation/diagnostics.dart::DiagnosticPropertiesBuilder": readonly [];
    }>): void;
    toString(options?: {
        minLevel?: upstream5.DiagnosticLevel | undefined;
    }): string;
}
export declare function _PhysicalKeyboardKeyFactory(usbHidUsage: number): PhysicalKeyboardKey;
export declare namespace _PhysicalKeyboardKeyFactory {
    const hyper: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const superKey: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const fn: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const fnLock: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const suspend: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const resume: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const turbo: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const privacyScreenToggle: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const microphoneMuteToggle: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const sleep: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const wakeUp: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const displayToggleIntExt: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const gameButton1: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const gameButton2: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const gameButton3: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const gameButton4: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const gameButton5: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const gameButton6: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const gameButton7: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const gameButton8: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const gameButton9: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const gameButton10: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const gameButton11: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const gameButton12: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const gameButton13: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const gameButton14: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const gameButton15: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const gameButton16: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const gameButtonA: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const gameButtonB: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const gameButtonC: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const gameButtonLeft1: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const gameButtonLeft2: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const gameButtonMode: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const gameButtonRight1: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const gameButtonRight2: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const gameButtonSelect: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const gameButtonStart: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const gameButtonThumbLeft: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const gameButtonThumbRight: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const gameButtonX: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const gameButtonY: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const gameButtonZ: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const usbReserved: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const usbErrorRollOver: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const usbPostFail: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const usbErrorUndefined: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const keyA: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const keyB: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const keyC: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const keyD: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const keyE: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const keyF: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const keyG: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const keyH: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const keyI: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const keyJ: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const keyK: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const keyL: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const keyM: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const keyN: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const keyO: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const keyP: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const keyQ: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const keyR: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const keyS: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const keyT: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const keyU: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const keyV: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const keyW: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const keyX: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const keyY: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const keyZ: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const digit1: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const digit2: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const digit3: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const digit4: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const digit5: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const digit6: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const digit7: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const digit8: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const digit9: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const digit0: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const enter: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const escape: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const backspace: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const tab: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const space: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const minus: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const equal: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const bracketLeft: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const bracketRight: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const backslash: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const semicolon: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const quote: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const backquote: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const comma: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const period: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const slash: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const capsLock: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const f1: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const f2: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const f3: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const f4: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const f5: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const f6: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const f7: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const f8: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const f9: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const f10: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const f11: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const f12: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const printScreen: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const scrollLock: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const pause: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const insert: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const home: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const pageUp: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const end: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const pageDown: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const arrowRight: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const arrowLeft: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const arrowDown: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const arrowUp: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const numLock: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const numpadDivide: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const numpadMultiply: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const numpadSubtract: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const numpadAdd: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const numpadEnter: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const numpad1: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const numpad2: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const numpad3: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const numpad4: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const numpad5: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const numpad6: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const numpad7: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const numpad8: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const numpad9: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const numpad0: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const numpadDecimal: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const intlBackslash: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const contextMenu: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const power: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const numpadEqual: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const f13: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const f14: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const f15: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const f16: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const f17: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const f18: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const f19: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const f20: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const f21: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const f22: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const f23: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const f24: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const open: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const help: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const select: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const again: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const undo: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const cut: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const copy: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const paste: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const find: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const audioVolumeMute: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const audioVolumeUp: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const audioVolumeDown: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const numpadComma: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const intlRo: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const kanaMode: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const intlYen: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const convert: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const nonConvert: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const lang1: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const lang2: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const lang3: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const lang4: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const lang5: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const abort: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const props: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const numpadParenLeft: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const numpadParenRight: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const numpadBackspace: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const numpadMemoryStore: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const numpadMemoryRecall: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const numpadMemoryClear: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const numpadMemoryAdd: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const numpadMemorySubtract: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const numpadSignChange: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const numpadClear: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const numpadClearEntry: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const controlLeft: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const shiftLeft: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const altLeft: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const metaLeft: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const controlRight: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const shiftRight: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const altRight: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const metaRight: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const info: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const closedCaptionToggle: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const brightnessUp: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const brightnessDown: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const brightnessToggle: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const brightnessMinimum: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const brightnessMaximum: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const brightnessAuto: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const kbdIllumUp: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const kbdIllumDown: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const mediaLast: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const launchPhone: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const programGuide: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const exit: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const channelUp: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const channelDown: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const mediaPlay: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const mediaPause: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const mediaRecord: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const mediaFastForward: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const mediaRewind: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const mediaTrackNext: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const mediaTrackPrevious: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const mediaStop: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const eject: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const mediaPlayPause: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const speechInputToggle: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const bassBoost: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const mediaSelect: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const launchWordProcessor: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const launchSpreadsheet: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const launchMail: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const launchContacts: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const launchCalendar: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const launchApp2: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const launchApp1: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const launchInternetBrowser: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const logOff: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const lockScreen: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const launchControlPanel: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const selectTask: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const launchDocuments: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const spellCheck: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const launchKeyboardLayout: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const launchScreenSaver: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const launchAudioBrowser: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const launchAssistant: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const newKey: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const close: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const save: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const print: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const browserSearch: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const browserHome: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const browserBack: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const browserForward: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const browserStop: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const browserRefresh: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const browserFavorites: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const zoomIn: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const zoomOut: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const zoomToggle: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const redo: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const mailReply: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const mailForward: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const mailSend: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const keyboardLayoutSelect: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const showAllWindows: PhysicalKeyboardKey;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    const knownPhysicalKeys: DartIterable<PhysicalKeyboardKey>;
}
export declare namespace _PhysicalKeyboardKeyFactory {
    function findKeyByCode(usageCode: number): PhysicalKeyboardKey | null;
}
export declare const PhysicalKeyboardKey: typeof _PhysicalKeyboardKeyFactory & _FlaxInstanceType<PhysicalKeyboardKey> & _FlaxDartType<PhysicalKeyboardKey, readonly ["class", "flax.core/flutter#type:PhysicalKeyboardKey", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "usbHidUsage" | "debugName" | "toStringShort" | "toDiagnosticsNode" | "debugFillProperties" | "toString" | "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::PhysicalKeyboardKey" | "__flaxBound:package:flutter/src/services/keyboard_key.g.dart::KeyboardKey" | "__flaxBound:package:flutter/src/foundation/diagnostics.dart::Diagnosticable";
export {};
