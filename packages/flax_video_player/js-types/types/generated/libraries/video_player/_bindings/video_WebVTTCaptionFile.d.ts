import { type FlaxInstanceType as _FlaxInstanceType, type DartList } from '@flax/core/bindings';
import type * as upstream0 from '@flax/video-player/_bindings/video_ClosedCaptionFile';
import '@flax/video-player/_bindings/video_ClosedCaptionFile';
import type * as upstream1 from '@flax/video-player/_bindings/video_Caption';
import '@flax/video-player/_bindings/video_Caption';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface WebVTTCaptionFile extends Omit<upstream0.ClosedCaptionFile, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:video_player/src/web_vtt.dart::WebVTTCaptionFile": readonly [];
}>, Readonly<{
    "__flaxBound:package:video_player/src/closed_caption_file.dart::ClosedCaptionFile": readonly [];
}> {
    readonly __WebVTTCaptionFile: unique symbol;
    readonly [_flaxDartTypeValue]: WebVTTCaptionFile;
    readonly captions: DartList<upstream1.Caption>;
}
export declare function _WebVTTCaptionFileFactory(fileContents: string): WebVTTCaptionFile;
export interface _WebVTTCaptionFileNative extends WebVTTCaptionFile {
    readonly [_flaxDartTypeValue]: _WebVTTCaptionFileNative;
    get captions(): DartList<upstream1.Caption>;
}
export declare abstract class _WebVTTCaptionFileNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<WebVTTCaptionFile>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: WebVTTCaptionFile;
    static [_flaxDartTypeKey]: readonly ["class", "flax.video/video#type:WebVTTCaptionFile", readonly [], false];
    constructor(fileContents: string);
}
export declare namespace _WebVTTCaptionFileFactory {
    function implement(args: [fileContents: string], implementation: {}): WebVTTCaptionFile;
}
declare const _WebVTTCaptionFileBinding: typeof _WebVTTCaptionFileFactory & (new (fileContents: string) => _WebVTTCaptionFileNative);
export declare const WebVTTCaptionFile: typeof _WebVTTCaptionFileBinding & _FlaxInstanceType<WebVTTCaptionFile> & _FlaxDartType<WebVTTCaptionFile, readonly ["class", "flax.video/video#type:WebVTTCaptionFile", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "captions" | "__flaxBound:package:video_player/src/web_vtt.dart::WebVTTCaptionFile" | "__flaxBound:package:video_player/src/closed_caption_file.dart::ClosedCaptionFile";
export {};
