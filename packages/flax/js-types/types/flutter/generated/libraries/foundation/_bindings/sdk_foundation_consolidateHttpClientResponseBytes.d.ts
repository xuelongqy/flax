import { type DartList } from '@flax/core/bindings';
import '@flax/flutter/foundation/_bindings/sdk_foundation_HttpClientResponse';
declare function _flaxTopLevel_consolidateHttpClientResponseBytes(response: Readonly<{
    "__flaxBound:dart:_http::HttpClientResponse": readonly [];
}> & Readonly<{
    "__flaxBound:dart:async::Stream": readonly [DartList<number>];
}>, options?: {
    autoUncompress?: boolean | undefined;
    onBytesReceived?: ((cumulative: number, total: number | null) => void) | null | undefined;
}): Promise<globalThis.Uint8Array>;
export { _flaxTopLevel_consolidateHttpClientResponseBytes as consolidateHttpClientResponseBytes };
