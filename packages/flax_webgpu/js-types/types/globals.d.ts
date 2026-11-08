import type * as WebGPU from './types.g.js';
import type { OffscreenCanvasConstructor } from '@flax/core/host/common';
import type { VideoFrame as HostVideoFrame } from './video-frame.js';
declare global {
    var OffscreenCanvas: OffscreenCanvasConstructor;
    type VideoFrame = HostVideoFrame;
    var VideoFrame: {
        readonly prototype: HostVideoFrame;
        [Symbol.hasInstance](value: unknown): value is HostVideoFrame;
    };
    function requestAnimationFrame(callback: (time: number) => void): number;
    function cancelAnimationFrame(id?: number): void;
    type GPU = WebGPU.GPU;
    var GPU: {
        readonly prototype: WebGPU.GPU;
    };
    type GPUAdapter = WebGPU.GPUAdapter;
    var GPUAdapter: {
        readonly prototype: WebGPU.GPUAdapter;
    };
    type GPUDevice = WebGPU.GPUDevice;
    var GPUDevice: {
        readonly prototype: WebGPU.GPUDevice;
    };
    type GPUBuffer = WebGPU.GPUBuffer;
    var GPUBuffer: {
        readonly prototype: WebGPU.GPUBuffer;
    };
    type GPUTexture = WebGPU.GPUTexture;
    var GPUTexture: {
        readonly prototype: WebGPU.GPUTexture;
    };
    type GPUTextureView = WebGPU.GPUTextureView;
    var GPUTextureView: {
        readonly prototype: WebGPU.GPUTextureView;
    };
    type GPUExternalTexture = WebGPU.GPUExternalTexture;
    var GPUExternalTexture: {
        readonly prototype: WebGPU.GPUExternalTexture;
        [Symbol.hasInstance](value: unknown): value is WebGPU.GPUExternalTexture;
    };
    type GPUSampler = WebGPU.GPUSampler;
    var GPUSampler: {
        readonly prototype: WebGPU.GPUSampler;
    };
    type GPUBindGroupLayout = WebGPU.GPUBindGroupLayout;
    var GPUBindGroupLayout: {
        readonly prototype: WebGPU.GPUBindGroupLayout;
    };
    type GPUPipelineLayout = WebGPU.GPUPipelineLayout;
    var GPUPipelineLayout: {
        readonly prototype: WebGPU.GPUPipelineLayout;
    };
    type GPUBindGroup = WebGPU.GPUBindGroup;
    var GPUBindGroup: {
        readonly prototype: WebGPU.GPUBindGroup;
    };
    type GPUShaderModule = WebGPU.GPUShaderModule;
    var GPUShaderModule: {
        readonly prototype: WebGPU.GPUShaderModule;
    };
    type GPUComputePipeline = WebGPU.GPUComputePipeline;
    var GPUComputePipeline: {
        readonly prototype: WebGPU.GPUComputePipeline;
    };
    type GPURenderPipeline = WebGPU.GPURenderPipeline;
    var GPURenderPipeline: {
        readonly prototype: WebGPU.GPURenderPipeline;
    };
    type GPUCommandEncoder = WebGPU.GPUCommandEncoder;
    var GPUCommandEncoder: {
        readonly prototype: WebGPU.GPUCommandEncoder;
    };
    type GPUCommandBuffer = WebGPU.GPUCommandBuffer;
    var GPUCommandBuffer: {
        readonly prototype: WebGPU.GPUCommandBuffer;
    };
    type GPUComputePassEncoder = WebGPU.GPUComputePassEncoder;
    var GPUComputePassEncoder: {
        readonly prototype: WebGPU.GPUComputePassEncoder;
    };
    type GPURenderPassEncoder = WebGPU.GPURenderPassEncoder;
    var GPURenderPassEncoder: {
        readonly prototype: WebGPU.GPURenderPassEncoder;
    };
    type GPURenderBundleEncoder = WebGPU.GPURenderBundleEncoder;
    var GPURenderBundleEncoder: {
        readonly prototype: WebGPU.GPURenderBundleEncoder;
    };
    type GPURenderBundle = WebGPU.GPURenderBundle;
    var GPURenderBundle: {
        readonly prototype: WebGPU.GPURenderBundle;
    };
    type GPUQueue = WebGPU.GPUQueue;
    var GPUQueue: {
        readonly prototype: WebGPU.GPUQueue;
    };
    type GPUQuerySet = WebGPU.GPUQuerySet;
    var GPUQuerySet: {
        readonly prototype: WebGPU.GPUQuerySet;
    };
    type GPUCanvasContext = WebGPU.GPUCanvasContext;
    var GPUCanvasContext: {
        readonly prototype: WebGPU.GPUCanvasContext;
    };
    type GPUError = WebGPU.GPUError;
    var GPUError: {
        readonly prototype: WebGPU.GPUError;
    };
    type GPUValidationError = WebGPU.GPUValidationError;
    var GPUValidationError: {
        new (message: string): WebGPU.GPUValidationError;
        readonly prototype: WebGPU.GPUValidationError;
    };
    type GPUOutOfMemoryError = WebGPU.GPUOutOfMemoryError;
    var GPUOutOfMemoryError: {
        new (message: string): WebGPU.GPUOutOfMemoryError;
        readonly prototype: WebGPU.GPUOutOfMemoryError;
    };
    type GPUInternalError = WebGPU.GPUInternalError;
    var GPUInternalError: {
        new (message: string): WebGPU.GPUInternalError;
        readonly prototype: WebGPU.GPUInternalError;
    };
    type GPUUncapturedErrorEvent = WebGPU.GPUUncapturedErrorEvent;
    var GPUUncapturedErrorEvent: {
        new (type: string, init: WebGPU.GPUUncapturedErrorEventInit): WebGPU.GPUUncapturedErrorEvent;
        readonly prototype: WebGPU.GPUUncapturedErrorEvent;
    };
    type GPUDeviceLostInfo = WebGPU.GPUDeviceLostInfo;
    var GPUDeviceLostInfo: {
        readonly prototype: WebGPU.GPUDeviceLostInfo;
    };
    type GPUAdapterInfo = WebGPU.GPUAdapterInfo;
    var GPUAdapterInfo: {
        readonly prototype: WebGPU.GPUAdapterInfo;
    };
    type GPUCompilationMessage = WebGPU.GPUCompilationMessage;
    var GPUCompilationMessage: {
        readonly prototype: WebGPU.GPUCompilationMessage;
    };
    type GPUCompilationInfo = WebGPU.GPUCompilationInfo;
    var GPUCompilationInfo: {
        readonly prototype: WebGPU.GPUCompilationInfo;
    };
    type GPUSupportedLimits = WebGPU.GPUSupportedLimits;
    var GPUSupportedLimits: {
        readonly prototype: WebGPU.GPUSupportedLimits;
    };
    type GPUPipelineError = WebGPU.GPUPipelineError;
    var GPUPipelineError: {
        new (message: string, init: WebGPU.GPUPipelineErrorInit): WebGPU.GPUPipelineError;
        readonly prototype: WebGPU.GPUPipelineError;
    };
    type GPUSupportedFeatures = WebGPU.GPUSupportedFeatures;
    var GPUSupportedFeatures: {
        readonly prototype: WebGPU.GPUSupportedFeatures;
    };
    type WGSLLanguageFeatures = WebGPU.WGSLLanguageFeatures;
    var WGSLLanguageFeatures: {
        readonly prototype: WebGPU.WGSLLanguageFeatures;
    };
    var GPUBufferUsage: typeof WebGPU.GPUBufferUsage;
    var GPUMapMode: typeof WebGPU.GPUMapMode;
    var GPUTextureUsage: typeof WebGPU.GPUTextureUsage;
    var GPUShaderStage: typeof WebGPU.GPUShaderStage;
    var GPUColorWrite: typeof WebGPU.GPUColorWrite;
}
declare module '@flax/core/host/canvas-contexts' {
    interface CanvasContextMap {
        webgpu: WebGPU.GPUCanvasContext;
    }
}
declare module '@flax/core/host/common' {
    interface Navigator {
        readonly gpu: WebGPU.GPU;
    }
}
export {};
