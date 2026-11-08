/// Optional standard WebGPU host backed by Dawn/Metal.
library;

import 'dart:async';
import 'dart:convert';
import 'dart:ffi';
import 'dart:io';
import 'dart:ui' as ui;

import 'package:flax/flax.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';

final class FlaxWebGpuPlugin extends FlaxPlugin {
  const FlaxWebGpuPlugin({this.videoSources = const {}});

  /// Maps main-realm source names to IDs supplied by a trusted native host.
  /// The session takes a snapshot during installation.
  final Map<String, String> videoSources;

  static final _videoSourceId = RegExp(
    r'^[0-9a-fA-F]{8}-(?:[0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}$',
  );

  @override
  String get id => 'flax.webgpu';
  @override
  Set<String> get jsModules => {
    '@flax/webgpu/host',
    if (videoSources.isNotEmpty) '@flax/webgpu',
  };
  @override
  Set<String> get globals => const {
    'GPU',
    'GPUSupportedFeatures',
    'WGSLLanguageFeatures',
    'GPUSupportedLimits',
    'GPUAdapterInfo',
    'GPUDeviceLostInfo',
    'GPUError',
    'GPUPipelineError',
    'GPUCanvasContext',
    'GPUAdapter',
    'GPUDevice',
    'GPUQueue',
    'GPUBuffer',
    'GPUTexture',
    'GPUTextureView',
    'GPUExternalTexture',
    'VideoFrame',
    'GPUSampler',
    'GPUShaderModule',
    'GPUBindGroupLayout',
    'GPUPipelineLayout',
    'GPUBindGroup',
    'GPUComputePipeline',
    'GPURenderPipeline',
    'GPUCommandEncoder',
    'GPUCommandBuffer',
    'GPUComputePassEncoder',
    'GPURenderPassEncoder',
    'GPURenderBundleEncoder',
    'GPURenderBundle',
    'GPUQuerySet',
    'GPUValidationError',
    'GPUOutOfMemoryError',
    'GPUInternalError',
    'GPUUncapturedErrorEvent',
    'GPUBufferUsage',
    'GPUTextureUsage',
    'GPUShaderStage',
    'GPUMapMode',
    'GPUColorWrite',
  };
  @override
  List<FlaxBindingModule> get bindingModules => const [];
  @override
  FlaxPluginInstance install(FlaxHostContext context) {
    final sources = <List<String>>[];
    for (final entry in videoSources.entries) {
      final name = entry.key;
      final id = entry.value;
      if (name.trim().isEmpty) {
        throw ArgumentError.value(
          name,
          'videoSources',
          'Expected a source name',
        );
      }
      if (id.length != 36 || !_videoSourceId.hasMatch(id)) {
        throw ArgumentError.value(id, 'videoSources', 'Expected a source UUID');
      }
      sources.add([name, id.toUpperCase()]);
    }
    if (!Platform.isMacOS) {
      throw UnsupportedError('Dawn WebGPU currently supports macOS arm64');
    }
    try {
      final engine = DynamicLibrary.process();
      final version = engine.lookupFunction<Uint32 Function(), int Function()>(
        'flax_webgpu_interop_version',
      )();
      if (version != 1) {
        throw UnsupportedError('Incompatible Flax WebGPU engine interop');
      }
      final supported = engine
          .lookupFunction<Uint32 Function(), int Function()>(
            'flax_webgpu_renderer_supported',
          )();
      if (supported != 1) {
        throw UnsupportedError(
          'WebGPU requires the current UI isolate to use Impeller Metal',
        );
      }
    } on ArgumentError {
      throw UnsupportedError(
        'WebGPU requires the maintained macOS mapping and renderer engine extensions',
      );
    }
    return _WebGpuHost(context)..install(sources);
  }
}

final class _WebGpuHost
    implements FlaxPluginInstance, FlaxWorkerPluginInstance {
  _WebGpuHost(this.context);
  final FlaxHostContext context;
  FlaxJsObject? state;
  bool closed = false;
  final surfaces = Expando<_GpuCanvasContent>();
  final contents = <WeakReference<_GpuCanvasContent>>[];
  final _workerReady = Completer<String>();
  String? _workerInitializationError;
  @override
  String get workerModule => '@flax/webgpu/host';
  @override
  Set<String> get workerNativeAssets => const {'@flax/webgpu/dawn'};
  @override
  Future<Map<String, Object?>> get workerConfiguration async {
    final registry = await _workerReady.future;
    if (_workerInitializationError != null) {
      throw StateError(_workerInitializationError!);
    }
    return {'registry': registry};
  }

  @override
  void workerMessage(String operation, List<Object?> arguments) {
    if (closed || !context.isActive) return;
    if (operation != 'resize' ||
        arguments.length != 1 ||
        arguments.first is! num) {
      throw ArgumentError('Unknown WebGPU Worker operation');
    }
    _call('resize', [FlaxJsNumber((arguments.first as num).toDouble())]);
  }

  void install(List<List<String>> videoSources) {
    context.registerFunction('__flaxWebGpuCall', (_, args) {
      if ((args[0] as FlaxJsString).value == 'resize') {
        context
            .requireObject<FlaxCanvasTarget>(args[1], flaxCanvasTargetType)
            .resize(
              (args[2] as FlaxJsNumber).value.toInt(),
              (args[3] as FlaxJsNumber).value.toInt(),
            );
        return const FlaxJsUndefined();
      }
      if ((args[0] as FlaxJsString).value == 'surface') {
        final target = context.requireObject<FlaxCanvasTarget>(
          args[1],
          flaxCanvasTargetType,
        );
        var surface = surfaces[target];
        if (surface == null) {
          surface = _GpuCanvasContent(target);
          surfaces[target] = surface;
          contents.add(WeakReference(surface));
        }
        target.attach(surface);
        surface.setTexture((args[2] as FlaxJsNumber).value.toInt());
        return const FlaxJsUndefined();
      }
      throw ArgumentError('Unknown WebGPU host operation');
    }, allowClosing: true);
    state = context.evaluate(
      'globalThis.__flaxModules.require("@flax/webgpu/host").install('
      'globalThis, __flaxWebGpuCall, ${jsonEncode(videoSources)})',
      sourceUrl: 'flax:webgpu',
    ) as FlaxJsObject;
    const MethodChannel('flax_webgpu')
        .invokeMethod<String>('registry')
        .then(
          (value) => _initialize(value ?? '0'),
          onError: (Object error) => _initialize('0', error.toString()),
        );
  }

  void _initialize(String value, [String? error]) {
    if (closed || !context.isActive) return;
    context.enqueue(() {
      if (!closed) {
        try {
          _call('initialize', [
            FlaxJsString(value),
            if (error != null) FlaxJsString(error),
          ]);
          if (!_workerReady.isCompleted) {
            if (error != null || value == '0') {
              _workerInitializationError =
                  error ?? 'The Flutter texture registry is unavailable';
              _workerReady.complete('0');
            } else {
              _workerReady.complete(value);
            }
          }
        } catch (failure) {
          if (!_workerReady.isCompleted) {
            _workerInitializationError = failure.toString();
            _workerReady.complete('0');
          }
          rethrow;
        }
      }
    });
  }

  void _call(String name, [List<FlaxJsValue> arguments = const []]) {
    final owner = state;
    if (owner == null) return;
    final function = owner.getProperty(name) as FlaxJsFunction;
    try {
      final value = function.call(arguments, thisValue: owner);
      if (value is FlaxJsObject) value.release();
    } finally {
      function.release();
    }
  }

  @override
  void close() {
    if (closed) return;
    closed = true;
    context.enqueue(() => _call('close'));
  }

  @override
  void dispose() {
    _call('close');
    for (final reference in contents) {
      reference.target?.dispose();
    }
    contents.clear();
    state?.release();
    state = null;
  }
}

final class _GpuCanvasContent extends ChangeNotifier
    implements FlaxCanvasContent {
  _GpuCanvasContent(this.target);
  final FlaxCanvasTarget target;
  int textureId = 0;
  @override
  int get width => target.width;
  @override
  int get height => target.height;
  @override
  bool get closed => target.closed;
  void setTexture(int value) {
    textureId = value;
    notifyListeners();
  }

  @override
  void paintTo(PaintingContext context, Offset offset, ui.Size size) {
    if (!closed && textureId != 0) {
      context.addLayer(TextureLayer(rect: offset & size, textureId: textureId));
    }
  }

  @override
  Future<ui.Image?> rasterize() => Future.error(
    UnsupportedError('WebGPU canvas snapshots are not implemented'),
  );
}
