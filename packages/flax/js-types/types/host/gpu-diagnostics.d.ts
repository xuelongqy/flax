interface CompilationMessageFields {
    readonly message: string;
    readonly type: 'error' | 'warning' | 'info';
    readonly lineNum: number;
    readonly linePos: number;
    readonly offset: number;
    readonly length: number;
}
export declare function gpuDiagnosticsHost(global?: typeof globalThis): {
    message(value: CompilationMessageFields): {
        get message(): string;
        get type(): "error" | "info" | "warning";
        get lineNum(): number;
        get linePos(): number;
        get offset(): number;
        get length(): number;
    };
    info(messages: readonly {
        get message(): string;
        get type(): "error" | "info" | "warning";
        get lineNum(): number;
        get linePos(): number;
        get offset(): number;
        get length(): number;
    }[]): {
        get messages(): readonly {
            get message(): string;
            get type(): "error" | "info" | "warning";
            get lineNum(): number;
            get linePos(): number;
            get offset(): number;
            get length(): number;
        }[];
    };
    serialize(value: object): unknown[] | undefined;
    deserialize(record: any[]): {
        get messages(): readonly {
            get message(): string;
            get type(): "error" | "info" | "warning";
            get lineNum(): number;
            get linePos(): number;
            get offset(): number;
            get length(): number;
        }[];
    } | {
        get message(): string;
        get type(): "error" | "info" | "warning";
        get lineNum(): number;
        get linePos(): number;
        get offset(): number;
        get length(): number;
    };
};
export declare function installGPUDiagnostics(global: typeof globalThis): {
    message(value: CompilationMessageFields): {
        get message(): string;
        get type(): "error" | "info" | "warning";
        get lineNum(): number;
        get linePos(): number;
        get offset(): number;
        get length(): number;
    };
    info(messages: readonly {
        get message(): string;
        get type(): "error" | "info" | "warning";
        get lineNum(): number;
        get linePos(): number;
        get offset(): number;
        get length(): number;
    }[]): {
        get messages(): readonly {
            get message(): string;
            get type(): "error" | "info" | "warning";
            get lineNum(): number;
            get linePos(): number;
            get offset(): number;
            get length(): number;
        }[];
    };
    serialize(value: object): unknown[] | undefined;
    deserialize(record: any[]): {
        get messages(): readonly {
            get message(): string;
            get type(): "error" | "info" | "warning";
            get lineNum(): number;
            get linePos(): number;
            get offset(): number;
            get length(): number;
        }[];
    } | {
        get message(): string;
        get type(): "error" | "info" | "warning";
        get lineNum(): number;
        get linePos(): number;
        get offset(): number;
        get length(): number;
    };
};
export {};
