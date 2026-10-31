declare global {
    var OffscreenCanvasRenderingContext2D: {
        prototype: OffscreenCanvasRenderingContext2D;
    };
    var Path2D: {
        new (path?: Path2D | string): Path2D;
    };
    var CanvasGradient: {
        prototype: CanvasGradient;
    };
    var CanvasPattern: {
        prototype: CanvasPattern;
    };
    type OffscreenCanvasRenderingContext2D = import('./types.js').OffscreenCanvasRenderingContext2D;
    type Path2D = import('./types.js').Path2D;
    type CanvasGradient = import('./types.js').CanvasGradient;
    type CanvasPattern = import('./types.js').CanvasPattern;
}
export {};
