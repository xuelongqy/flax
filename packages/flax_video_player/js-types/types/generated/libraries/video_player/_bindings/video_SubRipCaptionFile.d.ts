import { type FlaxInstanceType as _FlaxInstanceType, type DartList } from '@flax/core/bindings';
import type * as upstream0 from '@flax/video-player/_bindings/video_ClosedCaptionFile';
import '@flax/video-player/_bindings/video_ClosedCaptionFile';
import type * as upstream1 from '@flax/video-player/_bindings/video_Caption';
import '@flax/video-player/_bindings/video_Caption';
import { FlaxProxyBase as _FlaxProxyBase } from '@flax/core/bindings';
import { flaxDartTypeKey as _flaxDartTypeKey, flaxDartTypeValue as _flaxDartTypeValue, type FlaxDartType as _FlaxDartType } from '@flax/core/bindings';
export interface SubRipCaptionFile extends Omit<upstream0.ClosedCaptionFile, _flaxOwnMembers0>, Readonly<{
    "__flaxBound:package:video_player/src/sub_rip.dart::SubRipCaptionFile": readonly [];
}>, Readonly<{
    "__flaxBound:package:video_player/src/closed_caption_file.dart::ClosedCaptionFile": readonly [];
}> {
    readonly __SubRipCaptionFile: unique symbol;
    readonly [_flaxDartTypeValue]: SubRipCaptionFile;
    readonly captions: DartList<upstream1.Caption>;
    readonly fileContents: string;
}
export declare function _SubRipCaptionFileFactory(fileContents: string): SubRipCaptionFile;
export interface _SubRipCaptionFileNative extends SubRipCaptionFile {
    readonly [_flaxDartTypeValue]: _SubRipCaptionFileNative;
    get fileContents(): string;
    get captions(): DartList<upstream1.Caption>;
}
export declare abstract class _SubRipCaptionFileNative extends _FlaxProxyBase {
    static [globalThis.Symbol.hasInstance]: _FlaxInstanceType<SubRipCaptionFile>[typeof globalThis.Symbol.hasInstance];
    static [_flaxDartTypeValue]: SubRipCaptionFile;
    static [_flaxDartTypeKey]: readonly ["class", "flax.video/video#type:SubRipCaptionFile", readonly [], false];
    constructor(fileContents: string);
}
export declare namespace _SubRipCaptionFileFactory {
    function implement(args: [fileContents: string], implementation: {}): SubRipCaptionFile;
}
declare const _SubRipCaptionFileBinding: typeof _SubRipCaptionFileFactory & (new (fileContents: string) => _SubRipCaptionFileNative);
export declare const SubRipCaptionFile: typeof _SubRipCaptionFileBinding & _FlaxInstanceType<SubRipCaptionFile> & _FlaxDartType<SubRipCaptionFile, readonly ["class", "flax.video/video#type:SubRipCaptionFile", readonly [], false]>;
type _flaxOwnMembers0 = typeof _flaxDartTypeValue | "captions" | "fileContents" | "__flaxBound:package:video_player/src/sub_rip.dart::SubRipCaptionFile" | "__flaxBound:package:video_player/src/closed_caption_file.dart::ClosedCaptionFile";
export {};
