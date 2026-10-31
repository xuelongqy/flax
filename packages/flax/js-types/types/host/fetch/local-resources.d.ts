import { Blob } from '../data.js';
export declare function dataResource(url: string): {
    blob: Blob;
    type: string;
};
export declare function blobRange(blob: Blob, input: string): {
    blob: Blob;
    range: string;
};
