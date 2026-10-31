export interface Crypto {
    getRandomValues<T extends ArrayBufferView>(array: T): T;
    randomUUID(): `${string}-${string}-${string}-${string}-${string}`;
}
export interface CryptoConstructor {
    readonly prototype: Crypto;
}
export declare function installCrypto(global: typeof globalThis, randomBytes: (length: number) => ArrayBuffer): {
    close(): void;
};
