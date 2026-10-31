// V8 provides these builtins; the Core host supplies Response streaming.
import type { Response } from './fetch/http.js';
declare global {
  namespace WebAssembly {
    type BufferSource = ArrayBuffer | ArrayBufferView;
    type ValueType = 'i32' | 'i64' | 'f32' | 'f64' | 'v128' | 'externref' | 'anyfunc';
    type ImportValue = Function | Global | Memory | Table | number | bigint;
    type Imports = Record<string, Record<string, ImportValue>>;
    type ExportValue = Function | Global | Memory | Table;
    type Exports = Record<string, ExportValue>;
    interface CompileOptions {
      builtins?: string[];
      importedStringConstants?: string;
    }
    interface WebAssemblyInstantiatedSource {
      module: Module;
      instance: Instance;
    }
    class CompileError extends Error {}
    class LinkError extends Error {}
    class RuntimeError extends Error {}
    class Module {
      constructor(bytes: BufferSource, options?: CompileOptions);
      static customSections(module: Module, name: string): ArrayBuffer[];
      static exports(
        module: Module,
      ): { name: string; kind: 'function' | 'global' | 'memory' | 'table' | 'tag' }[];
      static imports(module: Module): {
        module: string;
        name: string;
        kind: 'function' | 'global' | 'memory' | 'table' | 'tag';
      }[];
    }
    class Instance {
      constructor(module: Module, imports?: Imports);
      readonly exports: Exports;
    }
    class Memory {
      constructor(descriptor: { initial: number; maximum?: number });
      readonly buffer: ArrayBuffer;
      grow(delta: number): number;
    }
    class Table {
      constructor(
        descriptor: {
          element: 'anyfunc' | 'externref';
          initial: number;
          maximum?: number;
        },
        value?: unknown,
      );
      readonly length: number;
      get(index: number): unknown;
      set(index: number, value?: unknown): void;
      grow(delta: number, value?: unknown): number;
    }
    class Global {
      constructor(descriptor: { value: ValueType; mutable?: boolean }, value?: unknown);
      value: unknown;
      valueOf(): unknown;
    }
    function compile(bytes: BufferSource, options?: CompileOptions): Promise<Module>;
    function validate(bytes: BufferSource, options?: CompileOptions): boolean;
    function instantiate(
      bytes: BufferSource,
      imports?: Imports,
      options?: CompileOptions,
    ): Promise<WebAssemblyInstantiatedSource>;
    function instantiate(module: Module, imports?: Imports): Promise<Instance>;
    function compileStreaming(
      source: Response | PromiseLike<Response>,
      options?: CompileOptions,
    ): Promise<Module>;
    function instantiateStreaming(
      source: Response | PromiseLike<Response>,
      imports?: Imports,
      options?: CompileOptions,
    ): Promise<WebAssemblyInstantiatedSource>;
  }
}
export {};
