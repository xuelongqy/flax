/// Session-owned Flutter isolation policies and synchronous binding handlers.
library;

import 'dart:io';
import 'dart:ui' as ui;

import 'package:flutter/widgets.dart';

import 'sandbox.dart';

final class FlaxAssetBundlePolicy {
  FlaxAssetBundlePolicy(this.bundle, this.scope);
  final AssetBundle bundle;
  final FlaxSandboxScope scope;
  final _imageKeys = Expando<bool>();
  void checkBundle(AssetBundle receiver) {
    scope.requireActive();
    if (!identical(receiver, bundle)) {
      throw const FlaxSandboxException(
        operation: 'assets',
        message: 'Foreign asset bundle',
      );
    }
  }

  AssetBundle select(AssetBundle? supplied) {
    checkBundle(supplied ?? bundle);
    return bundle;
  }
}

AssetBundle sandboxRootBundle(FlaxSandboxContext c, FlaxAssetBundlePolicy p) =>
    p.select(null);
AssetBundle sandboxDefaultBundle(
  FlaxSandboxContext c,
  FlaxAssetBundlePolicy p,
  BuildContext context,
) => p.select(null);
void checkSandboxBundle(
  FlaxSandboxContext c,
  FlaxAssetBundlePolicy p,
  AssetBundle receiver,
) => p.checkBundle(receiver);
AssetImage sandboxAssetImage(
  FlaxSandboxContext c,
  FlaxAssetBundlePolicy p,
  String assetName, {
  AssetBundle? bundle,
  String? package,
}) => AssetImage(assetName, bundle: p.select(bundle), package: package);
ExactAssetImage sandboxExactAssetImage(
  FlaxSandboxContext c,
  FlaxAssetBundlePolicy p,
  String assetName, {
  AssetBundle? bundle,
  double scale = 1.0,
  String? package,
}) => ExactAssetImage(
  assetName,
  bundle: p.select(bundle),
  scale: scale,
  package: package,
);
void checkSandboxAssetImage(
  FlaxSandboxContext c,
  FlaxAssetBundlePolicy p,
  AssetImage receiver,
) => p.checkBundle(
  receiver.bundle ??
      (throw const FlaxSandboxException(
        operation: 'AssetImage',
        message: 'Unscoped asset image',
      )),
);
void checkSandboxExactAssetImage(
  FlaxSandboxContext c,
  FlaxAssetBundlePolicy p,
  ExactAssetImage receiver,
) => p.checkBundle(
  receiver.bundle ??
      (throw const FlaxSandboxException(
        operation: 'AssetImage',
        message: 'Unscoped asset image',
      )),
);
Future<ui.ImmutableBuffer> sandboxAssetBuffer(
  FlaxSandboxContext c,
  FlaxAssetBundlePolicy p,
  String assetKey,
) => p.bundle.loadBuffer(assetKey);
void checkSandboxFileImage(FlaxSandboxContext c, FlaxFilePolicy p, File file) =>
    p.requireFile(c.scope, file);

void checkSandboxFileImageReceiver(
  FlaxSandboxContext c,
  FlaxFilePolicy p,
  FileImage receiver,
) {
  p.requireFile(c.scope, receiver.file);
}

Image sandboxImageAsset(
  FlaxSandboxContext c,
  FlaxAssetBundlePolicy p,
  String name, {
  Key? key,
  AssetBundle? bundle,
  ImageFrameBuilder? frameBuilder,
  ImageErrorWidgetBuilder? errorBuilder,
  String? semanticLabel,
  bool excludeFromSemantics = false,
  double? scale,
  double? width,
  double? height,
  Color? color,
  Animation<double>? opacity,
  BlendMode? colorBlendMode,
  BoxFit? fit,
  AlignmentGeometry alignment = Alignment.center,
  ImageRepeat repeat = ImageRepeat.noRepeat,
  Rect? centerSlice,
  bool matchTextDirection = false,
  bool gaplessPlayback = false,
  bool isAntiAlias = false,
  String? package,
  FilterQuality filterQuality = FilterQuality.medium,
  int? cacheWidth,
  int? cacheHeight,
}) => Image.asset(
  name,
  key: key,
  bundle: p.select(bundle),
  frameBuilder: frameBuilder,
  errorBuilder: errorBuilder,
  semanticLabel: semanticLabel,
  excludeFromSemantics: excludeFromSemantics,
  scale: scale,
  width: width,
  height: height,
  color: color,
  opacity: opacity,
  colorBlendMode: colorBlendMode,
  fit: fit,
  alignment: alignment,
  repeat: repeat,
  centerSlice: centerSlice,
  matchTextDirection: matchTextDirection,
  gaplessPlayback: gaplessPlayback,
  isAntiAlias: isAntiAlias,
  package: package,
  filterQuality: filterQuality,
  cacheWidth: cacheWidth,
  cacheHeight: cacheHeight,
);

void checkSandboxImageProvider(
  FlaxSandboxContext c,
  FlaxAssetBundlePolicy p,
  ImageProvider receiver,
) {
  c.scope.requireActive();
  if (receiver is FileImage) {
    c.requirePolicy<FlaxFilePolicy>().requireFile(c.scope, receiver.file);
  } else if (receiver is AssetImage) {
    checkSandboxAssetImage(c, p, receiver);
  } else if (receiver is ExactAssetImage) {
    checkSandboxExactAssetImage(c, p, receiver);
  } else if (receiver is ResizeImage) {
    checkSandboxImageProvider(c, p, receiver.imageProvider);
  } else if (receiver is ScrollAwareImageProvider) {
    checkSandboxImageProvider(c, p, receiver.imageProvider);
  }
}

void checkSandboxImageKey(
  FlaxSandboxContext c,
  FlaxAssetBundlePolicy p,
  ImageProvider receiver,
  Object key,
) {
  checkSandboxImageProvider(c, p, receiver);
  if (key is FileImage) {
    c.requirePolicy<FlaxFilePolicy>().requireFile(c.scope, key.file);
  } else if (key is AssetBundleImageKey) {
    p.checkBundle(key.bundle);
  } else if (key is ResizeImageKey && p._imageKeys[key] != true) {
    throw const FlaxSandboxException(
      operation: 'ImageProvider',
      message: 'Obtain this image key in the current session first',
    );
  }
}

Future<Object> sandboxImageKey(
  FlaxSandboxContext c,
  FlaxAssetBundlePolicy p,
  ImageProvider receiver,
  ImageConfiguration configuration,
) {
  return _scopedImageKey(c, p, receiver, configuration);
}

void checkSandboxImageInput(
  FlaxSandboxContext c,
  FlaxAssetBundlePolicy p,
  ImageProvider? image,
) {
  if (image != null) checkSandboxImageProvider(c, p, image);
}

void checkSandboxAssetKeyBundle(
  FlaxSandboxContext c,
  FlaxAssetBundlePolicy p,
  AssetBundle bundle,
) => p.checkBundle(bundle);
void checkSandboxCircleImages(
  FlaxSandboxContext c,
  FlaxAssetBundlePolicy p, {
  ImageProvider? backgroundImage,
  ImageProvider? foregroundImage,
}) {
  checkSandboxImageInput(c, p, backgroundImage);
  checkSandboxImageInput(c, p, foregroundImage);
}

void checkSandboxFadeImages(
  FlaxSandboxContext c,
  FlaxAssetBundlePolicy p, {
  required ImageProvider image,
  required ImageProvider placeholder,
}) {
  checkSandboxImageProvider(c, p, image);
  checkSandboxImageProvider(c, p, placeholder);
}

Future<T> _scopedImageKey<T extends Object>(
  FlaxSandboxContext c,
  FlaxAssetBundlePolicy p,
  ImageProvider<T> receiver,
  ImageConfiguration configuration,
) {
  checkSandboxImageProvider(c, p, receiver);
  return receiver.obtainKey(configuration).then((key) {
    c.scope.requireActive();
    try {
      p._imageKeys[key] = true;
    } on ArgumentError {
      /* Primitive keys carry no IO. */
    }
    return key;
  });
}

Future<FileImage> sandboxFileImageKey(
  FlaxSandboxContext c,
  FlaxAssetBundlePolicy p,
  FileImage receiver,
  ImageConfiguration configuration,
) => _scopedImageKey(c, p, receiver, configuration);
Future<AssetBundleImageKey> sandboxAssetImageKey(
  FlaxSandboxContext c,
  FlaxAssetBundlePolicy p,
  AssetBundleImageProvider receiver,
  ImageConfiguration configuration,
) => _scopedImageKey(c, p, receiver, configuration);
Future<ResizeImageKey> sandboxResizeImageKey(
  FlaxSandboxContext c,
  FlaxAssetBundlePolicy p,
  ResizeImage receiver,
  ImageConfiguration configuration,
) => _scopedImageKey(c, p, receiver, configuration);

Future<MemoryImage> sandboxMemoryImageKey(
  FlaxSandboxContext c,
  FlaxAssetBundlePolicy p,
  MemoryImage receiver,
  ImageConfiguration configuration,
) => _scopedImageKey(c, p, receiver, configuration);
FileImage sandboxFileImage(
  FlaxSandboxContext c,
  FlaxFilePolicy p,
  File file, {
  double scale = 1.0,
}) {
  p.requireFile(c.scope, file);
  // Flutter reads custom Files through readAsBytes, preserving rooted IO and caching.
  return FileImage(file, scale: scale);
}

ResizeImage sandboxResizeImage(
  FlaxSandboxContext c,
  FlaxAssetBundlePolicy p,
  ImageProvider imageProvider, {
  int? width,
  int? height,
  ResizeImagePolicy policy = ResizeImagePolicy.exact,
  bool allowUpscaling = false,
}) {
  checkSandboxImageProvider(c, p, imageProvider);
  return ResizeImage(
    imageProvider,
    width: width,
    height: height,
    policy: policy,
    allowUpscaling: allowUpscaling,
  );
}

void checkSandboxBundleInput(
  FlaxSandboxContext c,
  FlaxAssetBundlePolicy p,
  AssetBundle bundle,
) => p.checkBundle(bundle);
ImageConfiguration sandboxImageConfiguration(
  FlaxSandboxContext c,
  FlaxAssetBundlePolicy p, {
  AssetBundle? bundle,
  double? devicePixelRatio,
  ui.Locale? locale,
  TextDirection? textDirection,
  Size? size,
  TargetPlatform? platform,
}) => ImageConfiguration(
  bundle: p.select(bundle),
  devicePixelRatio: devicePixelRatio,
  locale: locale,
  textDirection: textDirection,
  size: size,
  platform: platform,
);
ImageConfiguration sandboxCopyImageConfiguration(
  FlaxSandboxContext c,
  FlaxAssetBundlePolicy p,
  ImageConfiguration receiver, {
  AssetBundle? bundle,
  double? devicePixelRatio,
  ui.Locale? locale,
  TextDirection? textDirection,
  Size? size,
  TargetPlatform? platform,
}) => receiver.copyWith(
  bundle: p.select(bundle),
  devicePixelRatio: devicePixelRatio,
  locale: locale,
  textDirection: textDirection,
  size: size,
  platform: platform,
);
ImageConfiguration sandboxLocalImageConfiguration(
  FlaxSandboxContext c,
  FlaxAssetBundlePolicy p,
  BuildContext context, {
  Size? size,
}) => createLocalImageConfiguration(
  context,
  size: size,
).copyWith(bundle: p.bundle);
FadeInImage sandboxFadeAssetNetwork(
  FlaxSandboxContext c,
  FlaxAssetBundlePolicy p, {
  Key? key,
  required String placeholder,
  ImageErrorWidgetBuilder? placeholderErrorBuilder,
  required String image,
  ImageErrorWidgetBuilder? imageErrorBuilder,
  AssetBundle? bundle,
  double? placeholderScale,
  double imageScale = 1.0,
  bool excludeFromSemantics = false,
  String? imageSemanticLabel,
  Duration fadeOutDuration = const Duration(milliseconds: 300),
  Curve fadeOutCurve = Curves.easeOut,
  Duration fadeInDuration = const Duration(milliseconds: 700),
  Curve fadeInCurve = Curves.easeIn,
  double? width,
  double? height,
  BoxFit? fit,
  Color? color,
  BlendMode? colorBlendMode,
  Color? placeholderColor,
  BlendMode? placeholderColorBlendMode,
  BoxFit? placeholderFit,
  FilterQuality filterQuality = FilterQuality.medium,
  FilterQuality? placeholderFilterQuality,
  AlignmentGeometry alignment = Alignment.center,
  ImageRepeat repeat = ImageRepeat.noRepeat,
  bool matchTextDirection = false,
  int? placeholderCacheWidth,
  int? placeholderCacheHeight,
  int? imageCacheWidth,
  int? imageCacheHeight,
}) => FadeInImage.assetNetwork(
  key: key,
  placeholder: placeholder,
  placeholderErrorBuilder: placeholderErrorBuilder,
  image: image,
  imageErrorBuilder: imageErrorBuilder,
  bundle: p.select(bundle),
  placeholderScale: placeholderScale,
  imageScale: imageScale,
  excludeFromSemantics: excludeFromSemantics,
  imageSemanticLabel: imageSemanticLabel,
  fadeOutDuration: fadeOutDuration,
  fadeOutCurve: fadeOutCurve,
  fadeInDuration: fadeInDuration,
  fadeInCurve: fadeInCurve,
  width: width,
  height: height,
  fit: fit,
  color: color,
  colorBlendMode: colorBlendMode,
  placeholderColor: placeholderColor,
  placeholderColorBlendMode: placeholderColorBlendMode,
  placeholderFit: placeholderFit,
  filterQuality: filterQuality,
  placeholderFilterQuality: placeholderFilterQuality,
  alignment: alignment,
  repeat: repeat,
  matchTextDirection: matchTextDirection,
  placeholderCacheWidth: placeholderCacheWidth,
  placeholderCacheHeight: placeholderCacheHeight,
  imageCacheWidth: imageCacheWidth,
  imageCacheHeight: imageCacheHeight,
);
