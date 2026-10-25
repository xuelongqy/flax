export interface TargetOptions {
  target?:
    | 'macos-arm64'
    | 'ios-arm64-simulator'
    | 'ios-arm64-device'
    | 'ios-simulator-arm64'
    | 'ios-device-arm64'
    | 'ios-arm64';
  deploymentTarget?: string;
}
export interface TargetProfile {
  target: string;
  os: 'macos' | 'ios';
  architecture: 'arm64';
  deploymentTarget: string;
  deploymentFlag: string;
  sdkName: string;
  sdk: string;
  sdkDigest: string;
  triple: string;
  compiler: string;
  compilerVersion: string;
  compilerDigest: string;
}
export type Selection =
  readonly string[] | { include: readonly string[]; exclude?: readonly string[] };
export interface GenerationOptions extends TargetOptions {
  cwd?: string;
  headers: readonly string[];
  output: string;
  includes?: readonly string[];
  defines?: Readonly<Record<string, string | null>>;
  flags?: readonly string[];
  language?: 'c' | 'c++';
  std?: string;
  functions: Selection;
  globals?: Selection;
  records?: Selection;
  callbacks?: Selection;
  enums?: Selection;
  constants?: readonly string[];
  variadic?: Readonly<
    Record<
      string,
      readonly ('int32' | 'uint32' | 'int64' | 'uint64' | 'float64' | 'pointer')[]
    >
  >;
  resources?: Readonly<
    Record<
      string,
      {
        create: string;
        destroy: string;
        methods?: Readonly<
          Record<string, string | { symbol: string; receiver?: number }>
        >;
      }
    >
  >;
  compatibility?: 'flax' | 'node';
  castxml?: string;
  cacheDirectory?: string;
  dependencies?: readonly string[];
}
export interface GenerationResult {
  formatVersion: 1;
  fingerprint: string;
  profile: TargetProfile;
  dependencies: Record<string, string>;
  outputs: Record<string, string>;
  cached: boolean;
  functions: string[];
  layouts: unknown[];
}
export function generateBindings(options: GenerationOptions): Promise<GenerationResult>;
export function resolveTarget(options?: TargetOptions): Promise<TargetProfile>;
export function prepareProject(
  options?: TargetOptions & {
    projectDirectory?: string;
    castxml?: string;
    cacheDirectory?: string;
  },
): Promise<(GenerationResult & { id: string })[]>;
