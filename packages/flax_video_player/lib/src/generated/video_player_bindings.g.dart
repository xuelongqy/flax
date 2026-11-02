// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
// ignore_for_file: type=lint, unused_import, unnecessary_cast, deprecated_member_use, invalid_use_of_protected_member, invalid_use_of_visible_for_overriding_member, invalid_use_of_visible_for_testing_member
import 'dart:core';

import 'package:video_player/video_player.dart' as api;
import 'package:flax/bindings.dart';
import 'package:flutter/widgets.dart' as api1;
import 'package:flutter/foundation.dart' as api2;

import 'dart:ui' as api3;
import 'dart:core' as api4;

import 'package:flutter/painting.dart' as api5;

import 'dart:io' as api6;

// ignore: unused_element
const _flaxOmitted = Object();
const videoBindings = FlaxBindingModule(
  'video',
  [
    FlaxEnumBinding(
      "flax.video/video#type:DataSourceType",
      {
        "asset": api.DataSourceType.asset,
        "network": api.DataSourceType.network,
        "file": api.DataSourceType.file,
        "contentUri": api.DataSourceType.contentUri,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.video/video#type:VideoFormat",
      {
        "dash": api.VideoFormat.dash,
        "hls": api.VideoFormat.hls,
        "ss": api.VideoFormat.ss,
        "other": api.VideoFormat.other,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.video/video#type:VideoViewType",
      {
        "textureView": api.VideoViewType.textureView,
        "platformView": api.VideoViewType.platformView,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    _flaxBinding33,
    _flaxBinding62,
    _flaxBinding65,
    _flaxBinding74,
    _flaxBinding80,
    _flaxBinding104,
    _flaxBinding119,
    _flaxBinding189,
    _flaxBinding202,
    _flaxBinding247,
    _flaxBinding257,
    _flaxBinding270,
    _flaxBinding278,
    _flaxBinding295,
    _flaxBinding309,
    _flaxBinding323,
    _flaxBinding324,
  ],
  functions: [],
  constants: [
    FlaxConstantGroup(_flaxBinding1, {
      "flax.video/video#read:Caption.none": api.Caption.none,
    }),
    FlaxConstantGroup(flaxIntType, {
      "flax.video/video#read:VideoPlayerController.kUninitializedPlayerId":
          api.VideoPlayerController.kUninitializedPlayerId,
    }),
  ],
  moduleId: "flax.video/video",
  dependencyModules: [
    "flax.core/components",
    "flax.core/flutter",
    "flax.core/sdk_dependencies",
    "flax.core/sdk_foundation",
    "flax.core/sdk_widgets",
  ],
  uiProtocol: 24,
  requiredCapabilities: const <String>[
    "call-layouts",
    "generic-member-views",
    "inherited-binding-members",
    "instance-checks",
    "native-core-inputs",
    "native-navigation-objects",
    "native-widget-proxies",
    "proxy-super-constructors",
    "shared-static-readers",
  ],
  stateVariants: [],
  dartTypes: [
    FlaxDartClassTemplate(
      "flax.video/video#type:Caption",
      api.Caption,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.video/video#type:ClosedCaption",
      api.ClosedCaption,
      "widget",
    ),
    FlaxDartClassTemplate(
      "flax.video/video#type:ClosedCaptionFile",
      api.ClosedCaptionFile,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.video/video#type:DataSourceType",
      api.DataSourceType,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.video/video#type:DurationRange",
      api.DurationRange,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.video/video#type:SubRipCaptionFile",
      api.SubRipCaptionFile,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.video/video#type:VideoAudioTrack",
      api.VideoAudioTrack,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.video/video#type:VideoFormat",
      api.VideoFormat,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.video/video#type:VideoPlayer",
      api.VideoPlayer,
      "widget",
    ),
    FlaxDartClassTemplate(
      "flax.video/video#type:VideoPlayerController",
      api.VideoPlayerController,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.video/video#type:VideoPlayerOptions",
      api.VideoPlayerOptions,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.video/video#type:VideoPlayerValue",
      api.VideoPlayerValue,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.video/video#type:VideoPlayerWebOptions",
      api.VideoPlayerWebOptions,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.video/video#type:VideoPlayerWebOptionsControls",
      api.VideoPlayerWebOptionsControls,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.video/video#type:VideoProgressColors",
      api.VideoProgressColors,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.video/video#type:VideoProgressIndicator",
      api.VideoProgressIndicator,
      "widget",
    ),
    FlaxDartClassTemplate(
      "flax.video/video#type:VideoScrubber",
      api.VideoScrubber,
      "widget",
    ),
    FlaxDartClassTemplate(
      "flax.video/video#type:VideoTrack",
      api.VideoTrack,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.video/video#type:VideoViewType",
      api.VideoViewType,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.video/video#type:WebVTTCaptionFile",
      api.WebVTTCaptionFile,
      "object",
    ),
  ],
  dartShapes: _flaxDartShapes,
);
final videoPlugin = FlaxBindingPlugin(
  id: "binding:flax.video/video",
  bindingModules: [videoBindings],
  jsModules: {"@flax/video-player"},
);
bool _isCaption(Object value) => value is api.Caption;
Object? _Caption_number(Object value) => (value as api.Caption).number;
Object? _Caption_start(Object value) => (value as api.Caption).start;
Object? _Caption_end(Object value) => (value as api.Caption).end;
Object? _Caption_text(Object value) => (value as api.Caption).text;
Object? _Caption_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Caption).toString();
}

Object? _FlaxProxyDispatch0_super_call_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _FlaxProxyDispatch0)._flaxSuper_toString();
}

Object? _Caption_super_get_number(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _CaptionProxy)._flaxSuperGet_number;
Object? _FlaxProxyDispatch1_super_get_start(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch1)._flaxSuperGet_start;
Object? _FlaxProxyDispatch1_super_get_end(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch1)._flaxSuperGet_end;
Object? _Caption_super_get_text(Object receiver, Map<String, Object?> values) =>
    (receiver as _CaptionProxy)._flaxSuperGet_text;
Object _createCaption(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Caption(
        number: values["number"] as int,
        start: values["start"] as api4.Duration,
        end: values["end"] as api4.Duration,
        text: values["text"] as String,
      );
    case '@implementation':
      return _CaptionProxy(
        values['@peer'] as FlaxProxyPeer,
        number: values["number"] as int,
        start: values["start"] as api4.Duration,
        end: values["end"] as api4.Duration,
        text: values["text"] as String,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isClosedCaption(Object value) => value is api.ClosedCaption;
Object? _ClosedCaption_text(Object value) => (value as api.ClosedCaption).text;
Object? _ClosedCaption_textStyle(Object value) =>
    (value as api.ClosedCaption).textStyle;
Object? _ClosedCaption_key(Object value) => (value as api.ClosedCaption).key;
Object? _ClosedCaption_build(Object receiver, Map<String, Object?> values) {
  return (receiver as api.ClosedCaption).build(
    values["context"] as api1.BuildContext,
  );
}

Object? _ClosedCaption_createElement(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.ClosedCaption).createElement();
}

Object? _ClosedCaption_toStringShort(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.ClosedCaption).toStringShort();
}

Object? _ClosedCaption_debugFillProperties(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.ClosedCaption).debugFillProperties(
    values["properties"] as api2.DiagnosticPropertiesBuilder,
  );
  return null;
}

Object? _ClosedCaption_toStringShallow(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.ClosedCaption).toStringShallow(
    joiner: values["joiner"] as String,
    minLevel: values["minLevel"] as api2.DiagnosticLevel,
  );
}

Object? _ClosedCaption_toStringDeep(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.ClosedCaption).toStringDeep(
    minLevel: values["minLevel"] as api2.DiagnosticLevel,
    prefixLineOne: values["prefixLineOne"] as String,
    prefixOtherLines: values["prefixOtherLines"] as String?,
    wrapWidth: values["wrapWidth"] as int,
  );
}

Object? _ClosedCaption_toDiagnosticsNode(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.ClosedCaption).toDiagnosticsNode(
    name: values["name"] as String?,
    style: values["style"] as api2.DiagnosticsTreeStyle?,
  );
}

Object? _ClosedCaption_debugDescribeChildren(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.ClosedCaption).debugDescribeChildren();
}

api1.Widget _createClosedCaption(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.ClosedCaption(
        key: values["key"] as api2.Key?,
        text: values["text"] as String?,
        textStyle: values["textStyle"] as api5.TextStyle?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isClosedCaptionFile(Object value) => value is api.ClosedCaptionFile;
Object? _ClosedCaptionFile_captions(Object value) =>
    (value as api.ClosedCaptionFile).captions;
Object _createClosedCaptionFile(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case '@implementation':
      return _ClosedCaptionFileProxy(values['@peer'] as FlaxProxyPeer);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isDurationRange(Object value) => value is api.DurationRange;
Object? _DurationRange_start(Object value) =>
    (value as api.DurationRange).start;
Object? _DurationRange_end(Object value) => (value as api.DurationRange).end;
Object? _DurationRange_startFraction(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.DurationRange).startFraction(
    values["duration"] as api4.Duration,
  );
}

Object? _DurationRange_endFraction(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.DurationRange).endFraction(
    values["duration"] as api4.Duration,
  );
}

Object? _DurationRange_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.DurationRange).toString();
}

Object? _DurationRange_super_startFraction(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _DurationRangeProxy)._flaxSuper_startFraction(
    values["duration"] as api4.Duration,
  );
}

Object? _DurationRange_super_endFraction(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _DurationRangeProxy)._flaxSuper_endFraction(
    values["duration"] as api4.Duration,
  );
}

Object _createDurationRange(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.DurationRange(
        values["start"] as api4.Duration,
        values["end"] as api4.Duration,
      );
    case '@implementation':
      return _DurationRangeProxy(
        values['@peer'] as FlaxProxyPeer,
        values["start"] as api4.Duration,
        values["end"] as api4.Duration,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isSubRipCaptionFile(Object value) => value is api.SubRipCaptionFile;
Object? _SubRipCaptionFile_fileContents(Object value) =>
    (value as api.SubRipCaptionFile).fileContents;
Object? _SubRipCaptionFile_super_get_fileContents(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _SubRipCaptionFileProxy)._flaxSuperGet_fileContents;
Object? _FlaxProxyDispatch2_super_get_captions(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch2)._flaxSuperGet_captions;
Object _createSubRipCaptionFile(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.SubRipCaptionFile(values["fileContents"] as String);
    case '@implementation':
      return _SubRipCaptionFileProxy(
        values['@peer'] as FlaxProxyPeer,
        values["fileContents"] as String,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isVideoAudioTrack(Object value) => value is api.VideoAudioTrack;
Object? _VideoAudioTrack_id(Object value) => (value as api.VideoAudioTrack).id;
Object? _VideoAudioTrack_label(Object value) =>
    (value as api.VideoAudioTrack).label;
Object? _VideoAudioTrack_language(Object value) =>
    (value as api.VideoAudioTrack).language;
Object? _VideoAudioTrack_isSelected(Object value) =>
    (value as api.VideoAudioTrack).isSelected;
Object? _VideoAudioTrack_bitrate(Object value) =>
    (value as api.VideoAudioTrack).bitrate;
Object? _VideoAudioTrack_sampleRate(Object value) =>
    (value as api.VideoAudioTrack).sampleRate;
Object? _VideoAudioTrack_channelCount(Object value) =>
    (value as api.VideoAudioTrack).channelCount;
Object? _VideoAudioTrack_codec(Object value) =>
    (value as api.VideoAudioTrack).codec;
Object? _VideoAudioTrack_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.VideoAudioTrack).toString();
}

Object? _FlaxProxyDispatch3_super_get_id(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch3)._flaxSuperGet_id;
Object? _FlaxProxyDispatch3_super_get_label(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch3)._flaxSuperGet_label;
Object? _VideoAudioTrack_super_get_language(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _VideoAudioTrackProxy)._flaxSuperGet_language;
Object? _FlaxProxyDispatch3_super_get_isSelected(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch3)._flaxSuperGet_isSelected;
Object? _FlaxProxyDispatch3_super_get_bitrate(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch3)._flaxSuperGet_bitrate;
Object? _VideoAudioTrack_super_get_sampleRate(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _VideoAudioTrackProxy)._flaxSuperGet_sampleRate;
Object? _VideoAudioTrack_super_get_channelCount(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _VideoAudioTrackProxy)._flaxSuperGet_channelCount;
Object? _FlaxProxyDispatch3_super_get_codec(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch3)._flaxSuperGet_codec;
Object _createVideoAudioTrack(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.VideoAudioTrack(
        id: values["id"] as String,
        isSelected: values["isSelected"] as bool,
        label: values["label"] as String?,
        language: values["language"] as String?,
        bitrate: values["bitrate"] as int?,
        sampleRate: values["sampleRate"] as int?,
        channelCount: values["channelCount"] as int?,
        codec: values["codec"] as String?,
      );
    case '@implementation':
      return _VideoAudioTrackProxy(
        values['@peer'] as FlaxProxyPeer,
        id: values["id"] as String,
        isSelected: values["isSelected"] as bool,
        label: values["label"] as String?,
        language: values["language"] as String?,
        bitrate: values["bitrate"] as int?,
        sampleRate: values["sampleRate"] as int?,
        channelCount: values["channelCount"] as int?,
        codec: values["codec"] as String?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isVideoPlayer(Object value) => value is api.VideoPlayer;
Object? _VideoPlayer_controller(Object value) =>
    (value as api.VideoPlayer).controller;
Object? _VideoPlayer_key(Object value) => (value as api.VideoPlayer).key;
Object? _VideoPlayer_createState(Object receiver, Map<String, Object?> values) {
  return (receiver as api.VideoPlayer).createState();
}

Object? _VideoPlayer_createElement(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.VideoPlayer).createElement();
}

Object? _VideoPlayer_toStringShort(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.VideoPlayer).toStringShort();
}

Object? _VideoPlayer_debugFillProperties(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.VideoPlayer).debugFillProperties(
    values["properties"] as api2.DiagnosticPropertiesBuilder,
  );
  return null;
}

Object? _VideoPlayer_toStringShallow(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.VideoPlayer).toStringShallow(
    joiner: values["joiner"] as String,
    minLevel: values["minLevel"] as api2.DiagnosticLevel,
  );
}

Object? _VideoPlayer_toStringDeep(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.VideoPlayer).toStringDeep(
    minLevel: values["minLevel"] as api2.DiagnosticLevel,
    prefixLineOne: values["prefixLineOne"] as String,
    prefixOtherLines: values["prefixOtherLines"] as String?,
    wrapWidth: values["wrapWidth"] as int,
  );
}

Object? _VideoPlayer_toDiagnosticsNode(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.VideoPlayer).toDiagnosticsNode(
    name: values["name"] as String?,
    style: values["style"] as api2.DiagnosticsTreeStyle?,
  );
}

Object? _VideoPlayer_debugDescribeChildren(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.VideoPlayer).debugDescribeChildren();
}

api1.Widget _createVideoPlayer(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.VideoPlayer(
        values["controller"] as api.VideoPlayerController,
        key: values["key"] as api2.Key?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isVideoPlayerController(Object value) =>
    value is api.VideoPlayerController;
Object? _VideoPlayerController_hasListeners(Object value) =>
    (value as api.VideoPlayerController).hasListeners;
Object? _VideoPlayerController_value(Object value) =>
    (value as api.VideoPlayerController).value;
Object? _VideoPlayerController_dataSource(Object value) =>
    (value as api.VideoPlayerController).dataSource;
Object? _VideoPlayerController_httpHeaders(Object value) =>
    (value as api.VideoPlayerController).httpHeaders;
Object? _VideoPlayerController_formatHint(Object value) =>
    (value as api.VideoPlayerController).formatHint;
Object? _VideoPlayerController_dataSourceType(Object value) =>
    (value as api.VideoPlayerController).dataSourceType;
Object? _VideoPlayerController_videoPlayerOptions(Object value) =>
    (value as api.VideoPlayerController).videoPlayerOptions;
Object? _VideoPlayerController_package(Object value) =>
    (value as api.VideoPlayerController).package;
Object? _VideoPlayerController_viewType(Object value) =>
    (value as api.VideoPlayerController).viewType;
Object? _VideoPlayerController_position(Object value) =>
    (value as api.VideoPlayerController).position;
Object? _VideoPlayerController_closedCaptionFile(Object value) =>
    (value as api.VideoPlayerController).closedCaptionFile;
void _VideoPlayerController_set_value(Object receiver, Object? value) {
  (receiver as api.VideoPlayerController).value = value as api.VideoPlayerValue;
}

Object? _VideoPlayerController_addListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.VideoPlayerController).addListener(
    values["listener"] as void Function(),
  );
  return null;
}

Object? _VideoPlayerController_removeListener(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.VideoPlayerController).removeListener(
    values["listener"] as void Function(),
  );
  return null;
}

Object? _VideoPlayerController_dispose(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.VideoPlayerController).dispose();
}

Object? _VideoPlayerController_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.VideoPlayerController).toString();
}

Object? _VideoPlayerController_initialize(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.VideoPlayerController).initialize();
}

Object? _VideoPlayerController_play(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.VideoPlayerController).play();
}

Object? _VideoPlayerController_setLooping(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.VideoPlayerController).setLooping(
    values["looping"] as bool,
  );
}

Object? _VideoPlayerController_setPreventsDisplaySleepDuringVideoPlayback(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.VideoPlayerController)
      .setPreventsDisplaySleepDuringVideoPlayback(
        values["preventsDisplaySleepDuringVideoPlayback"] as bool,
      );
}

Object? _VideoPlayerController_pause(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.VideoPlayerController).pause();
}

Object? _VideoPlayerController_seekTo(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.VideoPlayerController).seekTo(
    values["position"] as api4.Duration,
  );
}

Object? _VideoPlayerController_setVolume(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.VideoPlayerController).setVolume(
    values["volume"] as double,
  );
}

Object? _VideoPlayerController_setPlaybackSpeed(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.VideoPlayerController).setPlaybackSpeed(
    values["speed"] as double,
  );
}

Object? _VideoPlayerController_setCaptionOffset(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.VideoPlayerController).setCaptionOffset(
    values["offset"] as api4.Duration,
  );
  return null;
}

Object? _VideoPlayerController_setClosedCaptionFile(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.VideoPlayerController).setClosedCaptionFile(
    values["closedCaptionFile"] as Future<api.ClosedCaptionFile>?,
  );
}

Object? _VideoPlayerController_getAudioTracks(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.VideoPlayerController).getAudioTracks();
}

Object? _VideoPlayerController_selectAudioTrack(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.VideoPlayerController).selectAudioTrack(
    values["trackId"] as String,
  );
}

Object? _VideoPlayerController_isAudioTrackSupportAvailable(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.VideoPlayerController).isAudioTrackSupportAvailable();
}

Object? _VideoPlayerController_getVideoTracks(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.VideoPlayerController).getVideoTracks();
}

Object? _VideoPlayerController_selectVideoTrack(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.VideoPlayerController).selectVideoTrack(
    values["track"] as api.VideoTrack?,
  );
}

Object? _VideoPlayerController_isVideoTrackSupportAvailable(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.VideoPlayerController).isVideoTrackSupportAvailable();
}

Object _createVideoPlayerController(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "asset":
      return api.VideoPlayerController.asset(
        values["dataSource"] as String,
        package: values["package"] as String?,
        closedCaptionFile:
            values["closedCaptionFile"] as Future<api.ClosedCaptionFile>?,
        videoPlayerOptions:
            values["videoPlayerOptions"] as api.VideoPlayerOptions?,
        viewType: values["viewType"] as api.VideoViewType,
      );
    case "network":
      final _flaxHas4 = values.containsKey("httpHeaders");
      return flaxInvokeWithDefaults(
        api.VideoPlayerController.network,
        <Object?>[
          values["dataSource"] as String,
          values["formatHint"] as api.VideoFormat?,
          values["closedCaptionFile"] as Future<api.ClosedCaptionFile>?,
          values["videoPlayerOptions"] as api.VideoPlayerOptions?,
          (_flaxHas4 ? values["httpHeaders"] as Map<String, String> : null),
          values["viewType"] as api.VideoViewType,
        ],
        <int>[1 | 2 | 4 | 8 | (_flaxHas4 ? 16 : 0) | 32],
        const <String>[
          "",
          "formatHint",
          "closedCaptionFile",
          "videoPlayerOptions",
          "httpHeaders",
          "viewType",
        ],
      ) as api.VideoPlayerController;
    case "networkUrl":
      final _flaxHas4 = values.containsKey("httpHeaders");
      return flaxInvokeWithDefaults(
        api.VideoPlayerController.networkUrl,
        <Object?>[
          values["url"] as api4.Uri,
          values["formatHint"] as api.VideoFormat?,
          values["closedCaptionFile"] as Future<api.ClosedCaptionFile>?,
          values["videoPlayerOptions"] as api.VideoPlayerOptions?,
          (_flaxHas4 ? values["httpHeaders"] as Map<String, String> : null),
          values["viewType"] as api.VideoViewType,
        ],
        <int>[1 | 2 | 4 | 8 | (_flaxHas4 ? 16 : 0) | 32],
        const <String>[
          "",
          "formatHint",
          "closedCaptionFile",
          "videoPlayerOptions",
          "httpHeaders",
          "viewType",
        ],
      ) as api.VideoPlayerController;
    case "file":
      final _flaxHas3 = values.containsKey("httpHeaders");
      return flaxInvokeWithDefaults(
        api.VideoPlayerController.file,
        <Object?>[
          values["file"] as api6.File,
          values["closedCaptionFile"] as Future<api.ClosedCaptionFile>?,
          values["videoPlayerOptions"] as api.VideoPlayerOptions?,
          (_flaxHas3 ? values["httpHeaders"] as Map<String, String> : null),
          values["viewType"] as api.VideoViewType,
        ],
        <int>[1 | 2 | 4 | (_flaxHas3 ? 8 : 0) | 16],
        const <String>[
          "",
          "closedCaptionFile",
          "videoPlayerOptions",
          "httpHeaders",
          "viewType",
        ],
      ) as api.VideoPlayerController;
    case "contentUri":
      return api.VideoPlayerController.contentUri(
        values["contentUri"] as api4.Uri,
        closedCaptionFile:
            values["closedCaptionFile"] as Future<api.ClosedCaptionFile>?,
        videoPlayerOptions:
            values["videoPlayerOptions"] as api.VideoPlayerOptions?,
        viewType: values["viewType"] as api.VideoViewType,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isVideoPlayerOptions(Object value) => value is api.VideoPlayerOptions;
Object? _VideoPlayerOptions_allowBackgroundPlayback(Object value) =>
    (value as api.VideoPlayerOptions).allowBackgroundPlayback;
Object? _VideoPlayerOptions_mixWithOthers(Object value) =>
    (value as api.VideoPlayerOptions).mixWithOthers;
Object? _VideoPlayerOptions_preventsDisplaySleepDuringVideoPlayback(
  Object value,
) => (value as api.VideoPlayerOptions).preventsDisplaySleepDuringVideoPlayback;
Object? _VideoPlayerOptions_webOptions(Object value) =>
    (value as api.VideoPlayerOptions).webOptions;
Object? _VideoPlayerOptions_backBufferDurationMs(Object value) =>
    (value as api.VideoPlayerOptions).backBufferDurationMs;
Object? _VideoPlayerOptions_super_get_allowBackgroundPlayback(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _VideoPlayerOptionsProxy)
    ._flaxSuperGet_allowBackgroundPlayback;
Object? _VideoPlayerOptions_super_get_mixWithOthers(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _VideoPlayerOptionsProxy)._flaxSuperGet_mixWithOthers;
Object? _FlaxProxyDispatch4_super_get_preventsDisplaySleepDuringVideoPlayback(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch4)
    ._flaxSuperGet_preventsDisplaySleepDuringVideoPlayback;
Object? _VideoPlayerOptions_super_get_webOptions(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _VideoPlayerOptionsProxy)._flaxSuperGet_webOptions;
Object? _VideoPlayerOptions_super_get_backBufferDurationMs(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _VideoPlayerOptionsProxy)._flaxSuperGet_backBufferDurationMs;
Object _createVideoPlayerOptions(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.VideoPlayerOptions(
        mixWithOthers: values["mixWithOthers"] as bool,
        allowBackgroundPlayback: values["allowBackgroundPlayback"] as bool,
        preventsDisplaySleepDuringVideoPlayback:
            values["preventsDisplaySleepDuringVideoPlayback"] as bool,
        webOptions: values["webOptions"] as api.VideoPlayerWebOptions?,
        backBufferDurationMs: values["backBufferDurationMs"] as int?,
      );
    case '@implementation':
      return _VideoPlayerOptionsProxy(
        values['@peer'] as FlaxProxyPeer,
        mixWithOthers: values["mixWithOthers"] as bool,
        allowBackgroundPlayback: values["allowBackgroundPlayback"] as bool,
        preventsDisplaySleepDuringVideoPlayback:
            values["preventsDisplaySleepDuringVideoPlayback"] as bool,
        webOptions: values["webOptions"] as api.VideoPlayerWebOptions?,
        backBufferDurationMs: values["backBufferDurationMs"] as int?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isVideoPlayerValue(Object value) => value is api.VideoPlayerValue;
Object? _VideoPlayerValue_duration(Object value) =>
    (value as api.VideoPlayerValue).duration;
Object? _VideoPlayerValue_position(Object value) =>
    (value as api.VideoPlayerValue).position;
Object? _VideoPlayerValue_caption(Object value) =>
    (value as api.VideoPlayerValue).caption;
Object? _VideoPlayerValue_captionOffset(Object value) =>
    (value as api.VideoPlayerValue).captionOffset;
Object? _VideoPlayerValue_buffered(Object value) =>
    (value as api.VideoPlayerValue).buffered;
Object? _VideoPlayerValue_isPlaying(Object value) =>
    (value as api.VideoPlayerValue).isPlaying;
Object? _VideoPlayerValue_isLooping(Object value) =>
    (value as api.VideoPlayerValue).isLooping;
Object? _VideoPlayerValue_isBuffering(Object value) =>
    (value as api.VideoPlayerValue).isBuffering;
Object? _VideoPlayerValue_volume(Object value) =>
    (value as api.VideoPlayerValue).volume;
Object? _VideoPlayerValue_playbackSpeed(Object value) =>
    (value as api.VideoPlayerValue).playbackSpeed;
Object? _VideoPlayerValue_errorDescription(Object value) =>
    (value as api.VideoPlayerValue).errorDescription;
Object? _VideoPlayerValue_isCompleted(Object value) =>
    (value as api.VideoPlayerValue).isCompleted;
Object? _VideoPlayerValue_preventsDisplaySleepDuringVideoPlayback(
  Object value,
) => (value as api.VideoPlayerValue).preventsDisplaySleepDuringVideoPlayback;
Object? _VideoPlayerValue_size(Object value) =>
    (value as api.VideoPlayerValue).size;
Object? _VideoPlayerValue_rotationCorrection(Object value) =>
    (value as api.VideoPlayerValue).rotationCorrection;
Object? _VideoPlayerValue_isInitialized(Object value) =>
    (value as api.VideoPlayerValue).isInitialized;
Object? _VideoPlayerValue_hasError(Object value) =>
    (value as api.VideoPlayerValue).hasError;
Object? _VideoPlayerValue_aspectRatio(Object value) =>
    (value as api.VideoPlayerValue).aspectRatio;
Object? _VideoPlayerValue_copyWith(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.VideoPlayerValue).copyWith(
    buffered: values["buffered"] as List<api.DurationRange>?,
    caption: values["caption"] as api.Caption?,
    captionOffset: values["captionOffset"] as api4.Duration?,
    duration: values["duration"] as api4.Duration?,
    errorDescription: values["errorDescription"] as String?,
    isBuffering: values["isBuffering"] as bool?,
    isCompleted: values["isCompleted"] as bool?,
    isInitialized: values["isInitialized"] as bool?,
    isLooping: values["isLooping"] as bool?,
    isPlaying: values["isPlaying"] as bool?,
    playbackSpeed: values["playbackSpeed"] as double?,
    position: values["position"] as api4.Duration?,
    preventsDisplaySleepDuringVideoPlayback:
        values["preventsDisplaySleepDuringVideoPlayback"] as bool?,
    rotationCorrection: values["rotationCorrection"] as int?,
    size: values["size"] as api3.Size?,
    volume: values["volume"] as double?,
  );
}

Object? _VideoPlayerValue_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.VideoPlayerValue).toString();
}

Object? _VideoPlayerValue_super_copyWith(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _VideoPlayerValueProxy)._flaxSuper_copyWith(
    buffered: values["buffered"] as List<api.DurationRange>?,
    caption: values["caption"] as api.Caption?,
    captionOffset: values["captionOffset"] as api4.Duration?,
    duration: values["duration"] as api4.Duration?,
    errorDescription: values["errorDescription"] as String?,
    isBuffering: values["isBuffering"] as bool?,
    isCompleted: values["isCompleted"] as bool?,
    isInitialized: values["isInitialized"] as bool?,
    isLooping: values["isLooping"] as bool?,
    isPlaying: values["isPlaying"] as bool?,
    playbackSpeed: values["playbackSpeed"] as double?,
    position: values["position"] as api4.Duration?,
    preventsDisplaySleepDuringVideoPlayback:
        values["preventsDisplaySleepDuringVideoPlayback"] as bool?,
    rotationCorrection: values["rotationCorrection"] as int?,
    size: values["size"] as api3.Size?,
    volume: values["volume"] as double?,
  );
}

Object? _VideoPlayerValue_super_get_duration(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _VideoPlayerValueProxy)._flaxSuperGet_duration;
Object? _VideoPlayerValue_super_get_position(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _VideoPlayerValueProxy)._flaxSuperGet_position;
Object? _VideoPlayerValue_super_get_caption(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _VideoPlayerValueProxy)._flaxSuperGet_caption;
Object? _VideoPlayerValue_super_get_captionOffset(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _VideoPlayerValueProxy)._flaxSuperGet_captionOffset;
Object? _VideoPlayerValue_super_get_buffered(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _VideoPlayerValueProxy)._flaxSuperGet_buffered;
Object? _VideoPlayerValue_super_get_isPlaying(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _VideoPlayerValueProxy)._flaxSuperGet_isPlaying;
Object? _VideoPlayerValue_super_get_isLooping(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _VideoPlayerValueProxy)._flaxSuperGet_isLooping;
Object? _VideoPlayerValue_super_get_isBuffering(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _VideoPlayerValueProxy)._flaxSuperGet_isBuffering;
Object? _VideoPlayerValue_super_get_volume(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _VideoPlayerValueProxy)._flaxSuperGet_volume;
Object? _VideoPlayerValue_super_get_playbackSpeed(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _VideoPlayerValueProxy)._flaxSuperGet_playbackSpeed;
Object? _VideoPlayerValue_super_get_errorDescription(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _VideoPlayerValueProxy)._flaxSuperGet_errorDescription;
Object? _VideoPlayerValue_super_get_isCompleted(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _VideoPlayerValueProxy)._flaxSuperGet_isCompleted;
Object? _VideoPlayerValue_super_get_size(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _VideoPlayerValueProxy)._flaxSuperGet_size;
Object? _VideoPlayerValue_super_get_rotationCorrection(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _VideoPlayerValueProxy)._flaxSuperGet_rotationCorrection;
Object? _VideoPlayerValue_super_get_isInitialized(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _VideoPlayerValueProxy)._flaxSuperGet_isInitialized;
Object? _VideoPlayerValue_super_get_hasError(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _VideoPlayerValueProxy)._flaxSuperGet_hasError;
Object? _VideoPlayerValue_super_get_aspectRatio(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _VideoPlayerValueProxy)._flaxSuperGet_aspectRatio;
Object _createVideoPlayerValue(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      final _flaxHas1 = values.containsKey("size");
      final _flaxHas2 = values.containsKey("position");
      final _flaxHas3 = values.containsKey("caption");
      final _flaxHas4 = values.containsKey("captionOffset");
      final _flaxHas5 = values.containsKey("buffered");
      return flaxInvokeWithDefaults(
        api.VideoPlayerValue.new,
        <Object?>[
          values["duration"] as api4.Duration,
          (_flaxHas1 ? values["size"] as api3.Size : null),
          (_flaxHas2 ? values["position"] as api4.Duration : null),
          (_flaxHas3 ? values["caption"] as api.Caption : null),
          (_flaxHas4 ? values["captionOffset"] as api4.Duration : null),
          (_flaxHas5 ? values["buffered"] as List<api.DurationRange> : null),
          values["isInitialized"] as bool,
          values["isPlaying"] as bool,
          values["isLooping"] as bool,
          values["isBuffering"] as bool,
          values["volume"] as double,
          values["playbackSpeed"] as double,
          values["rotationCorrection"] as int,
          values["errorDescription"] as String?,
          values["isCompleted"] as bool,
          values["preventsDisplaySleepDuringVideoPlayback"] as bool,
        ],
        <int>[
          1 |
              (_flaxHas1 ? 2 : 0) |
              (_flaxHas2 ? 4 : 0) |
              (_flaxHas3 ? 8 : 0) |
              (_flaxHas4 ? 16 : 0) |
              (_flaxHas5 ? 32 : 0) |
              64 |
              128 |
              256 |
              512 |
              1024 |
              2048 |
              4096 |
              8192 |
              16384 |
              32768,
        ],
        const <String>[
          "duration",
          "size",
          "position",
          "caption",
          "captionOffset",
          "buffered",
          "isInitialized",
          "isPlaying",
          "isLooping",
          "isBuffering",
          "volume",
          "playbackSpeed",
          "rotationCorrection",
          "errorDescription",
          "isCompleted",
          "preventsDisplaySleepDuringVideoPlayback",
        ],
      ) as api.VideoPlayerValue;
    case "uninitialized":
      return api.VideoPlayerValue.uninitialized();
    case "erroneous":
      return api.VideoPlayerValue.erroneous(
        values["errorDescription"] as String,
      );
    case '@implementation':
      final _flaxHas2 = values.containsKey("size");
      final _flaxHas3 = values.containsKey("position");
      final _flaxHas4 = values.containsKey("caption");
      final _flaxHas5 = values.containsKey("captionOffset");
      final _flaxHas6 = values.containsKey("buffered");
      return flaxInvokeWithDefaults(
        _VideoPlayerValueProxy.new,
        <Object?>[
          values['@peer'] as FlaxProxyPeer,
          values["duration"] as api4.Duration,
          (_flaxHas2 ? values["size"] as api3.Size : null),
          (_flaxHas3 ? values["position"] as api4.Duration : null),
          (_flaxHas4 ? values["caption"] as api.Caption : null),
          (_flaxHas5 ? values["captionOffset"] as api4.Duration : null),
          (_flaxHas6 ? values["buffered"] as List<api.DurationRange> : null),
          values["isInitialized"] as bool,
          values["isPlaying"] as bool,
          values["isLooping"] as bool,
          values["isBuffering"] as bool,
          values["volume"] as double,
          values["playbackSpeed"] as double,
          values["rotationCorrection"] as int,
          values["errorDescription"] as String?,
          values["isCompleted"] as bool,
          values["preventsDisplaySleepDuringVideoPlayback"] as bool,
        ],
        <int>[
          1 |
              2 |
              (_flaxHas2 ? 4 : 0) |
              (_flaxHas3 ? 8 : 0) |
              (_flaxHas4 ? 16 : 0) |
              (_flaxHas5 ? 32 : 0) |
              (_flaxHas6 ? 64 : 0) |
              128 |
              256 |
              512 |
              1024 |
              2048 |
              4096 |
              8192 |
              16384 |
              32768 |
              65536,
        ],
        const <String>[
          "",
          "duration",
          "size",
          "position",
          "caption",
          "captionOffset",
          "buffered",
          "isInitialized",
          "isPlaying",
          "isLooping",
          "isBuffering",
          "volume",
          "playbackSpeed",
          "rotationCorrection",
          "errorDescription",
          "isCompleted",
          "preventsDisplaySleepDuringVideoPlayback",
        ],
      ) as api.VideoPlayerValue;
    case "@implementation:uninitialized":
      return _VideoPlayerValueProxy.uninitialized(
        values['@peer'] as FlaxProxyPeer,
      );
    case "@implementation:erroneous":
      return _VideoPlayerValueProxy.erroneous(
        values['@peer'] as FlaxProxyPeer,
        values["errorDescription"] as String,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isVideoPlayerWebOptions(Object value) =>
    value is api.VideoPlayerWebOptions;
Object? _VideoPlayerWebOptions_controls(Object value) =>
    (value as api.VideoPlayerWebOptions).controls;
Object? _VideoPlayerWebOptions_allowContextMenu(Object value) =>
    (value as api.VideoPlayerWebOptions).allowContextMenu;
Object? _VideoPlayerWebOptions_allowRemotePlayback(Object value) =>
    (value as api.VideoPlayerWebOptions).allowRemotePlayback;
Object? _VideoPlayerWebOptions_poster(Object value) =>
    (value as api.VideoPlayerWebOptions).poster;
Object? _VideoPlayerWebOptions_super_get_controls(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _VideoPlayerWebOptionsProxy)._flaxSuperGet_controls;
Object? _VideoPlayerWebOptions_super_get_allowContextMenu(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _VideoPlayerWebOptionsProxy)._flaxSuperGet_allowContextMenu;
Object? _VideoPlayerWebOptions_super_get_allowRemotePlayback(
  Object receiver,
  Map<String, Object?> values,
) =>
    (receiver as _VideoPlayerWebOptionsProxy)._flaxSuperGet_allowRemotePlayback;
Object? _VideoPlayerWebOptions_super_get_poster(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _VideoPlayerWebOptionsProxy)._flaxSuperGet_poster;
Object _createVideoPlayerWebOptions(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      final _flaxHas0 = values.containsKey("controls");
      return flaxInvokeWithDefaults(
        api.VideoPlayerWebOptions.new,
        <Object?>[
          (_flaxHas0
              ? values["controls"] as api.VideoPlayerWebOptionsControls
              : null),
          values["allowContextMenu"] as bool,
          values["allowRemotePlayback"] as bool,
          values["poster"] as api4.Uri?,
        ],
        <int>[(_flaxHas0 ? 1 : 0) | 2 | 4 | 8],
        const <String>[
          "controls",
          "allowContextMenu",
          "allowRemotePlayback",
          "poster",
        ],
      ) as api.VideoPlayerWebOptions;
    case '@implementation':
      final _flaxHas1 = values.containsKey("controls");
      return flaxInvokeWithDefaults(
        _VideoPlayerWebOptionsProxy.new,
        <Object?>[
          values['@peer'] as FlaxProxyPeer,
          (_flaxHas1
              ? values["controls"] as api.VideoPlayerWebOptionsControls
              : null),
          values["allowContextMenu"] as bool,
          values["allowRemotePlayback"] as bool,
          values["poster"] as api4.Uri?,
        ],
        <int>[1 | (_flaxHas1 ? 2 : 0) | 4 | 8 | 16],
        const <String>[
          "",
          "controls",
          "allowContextMenu",
          "allowRemotePlayback",
          "poster",
        ],
      ) as api.VideoPlayerWebOptions;
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isVideoPlayerWebOptionsControls(Object value) =>
    value is api.VideoPlayerWebOptionsControls;
Object? _VideoPlayerWebOptionsControls_enabled(Object value) =>
    (value as api.VideoPlayerWebOptionsControls).enabled;
Object? _VideoPlayerWebOptionsControls_allowDownload(Object value) =>
    (value as api.VideoPlayerWebOptionsControls).allowDownload;
Object? _VideoPlayerWebOptionsControls_allowFullscreen(Object value) =>
    (value as api.VideoPlayerWebOptionsControls).allowFullscreen;
Object? _VideoPlayerWebOptionsControls_allowPlaybackRate(Object value) =>
    (value as api.VideoPlayerWebOptionsControls).allowPlaybackRate;
Object? _VideoPlayerWebOptionsControls_allowPictureInPicture(Object value) =>
    (value as api.VideoPlayerWebOptionsControls).allowPictureInPicture;
Object? _VideoPlayerWebOptionsControls_controlsList(Object value) =>
    (value as api.VideoPlayerWebOptionsControls).controlsList;
Object _createVideoPlayerWebOptionsControls(
  String ctor,
  Map<String, Object?> values,
) {
  switch (ctor) {
    case '@implementation':
      return _VideoPlayerWebOptionsControlsProxy(
        values['@peer'] as FlaxProxyPeer,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isVideoProgressColors(Object value) => value is api.VideoProgressColors;
Object? _VideoProgressColors_playedColor(Object value) =>
    (value as api.VideoProgressColors).playedColor;
Object? _VideoProgressColors_bufferedColor(Object value) =>
    (value as api.VideoProgressColors).bufferedColor;
Object? _VideoProgressColors_backgroundColor(Object value) =>
    (value as api.VideoProgressColors).backgroundColor;
Object? _VideoProgressColors_super_get_playedColor(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _VideoProgressColorsProxy)._flaxSuperGet_playedColor;
Object? _VideoProgressColors_super_get_bufferedColor(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _VideoProgressColorsProxy)._flaxSuperGet_bufferedColor;
Object? _VideoProgressColors_super_get_backgroundColor(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _VideoProgressColorsProxy)._flaxSuperGet_backgroundColor;
Object _createVideoProgressColors(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      final _flaxHas0 = values.containsKey("playedColor");
      final _flaxHas1 = values.containsKey("bufferedColor");
      final _flaxHas2 = values.containsKey("backgroundColor");
      return flaxInvokeWithDefaults(
        api.VideoProgressColors.new,
        <Object?>[
          (_flaxHas0 ? values["playedColor"] as api3.Color : null),
          (_flaxHas1 ? values["bufferedColor"] as api3.Color : null),
          (_flaxHas2 ? values["backgroundColor"] as api3.Color : null),
        ],
        <int>[(_flaxHas0 ? 1 : 0) | (_flaxHas1 ? 2 : 0) | (_flaxHas2 ? 4 : 0)],
        const <String>["playedColor", "bufferedColor", "backgroundColor"],
      ) as api.VideoProgressColors;
    case '@implementation':
      final _flaxHas1 = values.containsKey("playedColor");
      final _flaxHas2 = values.containsKey("bufferedColor");
      final _flaxHas3 = values.containsKey("backgroundColor");
      return flaxInvokeWithDefaults(
        _VideoProgressColorsProxy.new,
        <Object?>[
          values['@peer'] as FlaxProxyPeer,
          (_flaxHas1 ? values["playedColor"] as api3.Color : null),
          (_flaxHas2 ? values["bufferedColor"] as api3.Color : null),
          (_flaxHas3 ? values["backgroundColor"] as api3.Color : null),
        ],
        <int>[
          1 | (_flaxHas1 ? 2 : 0) | (_flaxHas2 ? 4 : 0) | (_flaxHas3 ? 8 : 0),
        ],
        const <String>["", "playedColor", "bufferedColor", "backgroundColor"],
      ) as api.VideoProgressColors;
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isVideoProgressIndicator(Object value) =>
    value is api.VideoProgressIndicator;
Object? _VideoProgressIndicator_controller(Object value) =>
    (value as api.VideoProgressIndicator).controller;
Object? _VideoProgressIndicator_colors(Object value) =>
    (value as api.VideoProgressIndicator).colors;
Object? _VideoProgressIndicator_allowScrubbing(Object value) =>
    (value as api.VideoProgressIndicator).allowScrubbing;
Object? _VideoProgressIndicator_padding(Object value) =>
    (value as api.VideoProgressIndicator).padding;
Object? _VideoProgressIndicator_key(Object value) =>
    (value as api.VideoProgressIndicator).key;
Object? _VideoProgressIndicator_createState(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.VideoProgressIndicator).createState();
}

Object? _VideoProgressIndicator_createElement(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.VideoProgressIndicator).createElement();
}

Object? _VideoProgressIndicator_toStringShort(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.VideoProgressIndicator).toStringShort();
}

Object? _VideoProgressIndicator_debugFillProperties(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.VideoProgressIndicator).debugFillProperties(
    values["properties"] as api2.DiagnosticPropertiesBuilder,
  );
  return null;
}

Object? _VideoProgressIndicator_toStringShallow(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.VideoProgressIndicator).toStringShallow(
    joiner: values["joiner"] as String,
    minLevel: values["minLevel"] as api2.DiagnosticLevel,
  );
}

Object? _VideoProgressIndicator_toStringDeep(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.VideoProgressIndicator).toStringDeep(
    minLevel: values["minLevel"] as api2.DiagnosticLevel,
    prefixLineOne: values["prefixLineOne"] as String,
    prefixOtherLines: values["prefixOtherLines"] as String?,
    wrapWidth: values["wrapWidth"] as int,
  );
}

Object? _VideoProgressIndicator_toDiagnosticsNode(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.VideoProgressIndicator).toDiagnosticsNode(
    name: values["name"] as String?,
    style: values["style"] as api2.DiagnosticsTreeStyle?,
  );
}

Object? _VideoProgressIndicator_debugDescribeChildren(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.VideoProgressIndicator).debugDescribeChildren();
}

api1.Widget _createVideoProgressIndicator(
  String ctor,
  Map<String, Object?> values,
) {
  switch (ctor) {
    case "":
      final _flaxHas2 = values.containsKey("colors");
      final _flaxHas4 = values.containsKey("padding");
      return flaxInvokeWithDefaults(
        api.VideoProgressIndicator.new,
        <Object?>[
          values["controller"] as api.VideoPlayerController,
          values["key"] as api2.Key?,
          (_flaxHas2 ? values["colors"] as api.VideoProgressColors : null),
          values["allowScrubbing"] as bool,
          (_flaxHas4 ? values["padding"] as api5.EdgeInsets : null),
        ],
        <int>[1 | 2 | (_flaxHas2 ? 4 : 0) | 8 | (_flaxHas4 ? 16 : 0)],
        const <String>["", "key", "colors", "allowScrubbing", "padding"],
      ) as api.VideoProgressIndicator;
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isVideoScrubber(Object value) => value is api.VideoScrubber;
Object? _VideoScrubber_child(Object value) =>
    (value as api.VideoScrubber).child;
Object? _VideoScrubber_controller(Object value) =>
    (value as api.VideoScrubber).controller;
Object? _VideoScrubber_key(Object value) => (value as api.VideoScrubber).key;
Object? _VideoScrubber_createState(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.VideoScrubber).createState();
}

Object? _VideoScrubber_createElement(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.VideoScrubber).createElement();
}

Object? _VideoScrubber_toStringShort(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.VideoScrubber).toStringShort();
}

Object? _VideoScrubber_debugFillProperties(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.VideoScrubber).debugFillProperties(
    values["properties"] as api2.DiagnosticPropertiesBuilder,
  );
  return null;
}

Object? _VideoScrubber_toStringShallow(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.VideoScrubber).toStringShallow(
    joiner: values["joiner"] as String,
    minLevel: values["minLevel"] as api2.DiagnosticLevel,
  );
}

Object? _VideoScrubber_toStringDeep(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.VideoScrubber).toStringDeep(
    minLevel: values["minLevel"] as api2.DiagnosticLevel,
    prefixLineOne: values["prefixLineOne"] as String,
    prefixOtherLines: values["prefixOtherLines"] as String?,
    wrapWidth: values["wrapWidth"] as int,
  );
}

Object? _VideoScrubber_toDiagnosticsNode(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.VideoScrubber).toDiagnosticsNode(
    name: values["name"] as String?,
    style: values["style"] as api2.DiagnosticsTreeStyle?,
  );
}

Object? _VideoScrubber_debugDescribeChildren(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.VideoScrubber).debugDescribeChildren();
}

api1.Widget _createVideoScrubber(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.VideoScrubber(
        key: values["key"] as api2.Key?,
        child: values["child"] as api1.Widget,
        controller: values["controller"] as api.VideoPlayerController,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isVideoTrack(Object value) => value is api.VideoTrack;
Object? _VideoTrack_id(Object value) => (value as api.VideoTrack).id;
Object? _VideoTrack_isSelected(Object value) =>
    (value as api.VideoTrack).isSelected;
Object? _VideoTrack_label(Object value) => (value as api.VideoTrack).label;
Object? _VideoTrack_bitrate(Object value) => (value as api.VideoTrack).bitrate;
Object? _VideoTrack_width(Object value) => (value as api.VideoTrack).width;
Object? _VideoTrack_height(Object value) => (value as api.VideoTrack).height;
Object? _VideoTrack_frameRate(Object value) =>
    (value as api.VideoTrack).frameRate;
Object? _VideoTrack_codec(Object value) => (value as api.VideoTrack).codec;
Object? _VideoTrack_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.VideoTrack).toString();
}

Object? _VideoTrack_super_get_width(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _VideoTrackProxy)._flaxSuperGet_width;
Object? _VideoTrack_super_get_height(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _VideoTrackProxy)._flaxSuperGet_height;
Object? _VideoTrack_super_get_frameRate(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _VideoTrackProxy)._flaxSuperGet_frameRate;
Object _createVideoTrack(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.VideoTrack(
        id: values["id"] as String,
        isSelected: values["isSelected"] as bool,
        label: values["label"] as String?,
        bitrate: values["bitrate"] as int?,
        width: values["width"] as int?,
        height: values["height"] as int?,
        frameRate: values["frameRate"] as double?,
        codec: values["codec"] as String?,
      );
    case '@implementation':
      return _VideoTrackProxy(
        values['@peer'] as FlaxProxyPeer,
        id: values["id"] as String,
        isSelected: values["isSelected"] as bool,
        label: values["label"] as String?,
        bitrate: values["bitrate"] as int?,
        width: values["width"] as int?,
        height: values["height"] as int?,
        frameRate: values["frameRate"] as double?,
        codec: values["codec"] as String?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isWebVTTCaptionFile(Object value) => value is api.WebVTTCaptionFile;
Object _createWebVTTCaptionFile(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.WebVTTCaptionFile(values["fileContents"] as String);
    case '@implementation':
      return _WebVTTCaptionFileProxy(
        values['@peer'] as FlaxProxyPeer,
        values["fileContents"] as String,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

abstract interface class _FlaxProxyDispatch3 {
  FlaxProxyPeer get _flaxPeer;
  String get _flaxSuperGet_id;
  String? get _flaxSuperGet_label;
  bool get _flaxSuperGet_isSelected;
  int? get _flaxSuperGet_bitrate;
  String? get _flaxSuperGet_codec;
}

String _FlaxProxyDispatch3_get_id(
  _FlaxProxyDispatch3 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_id;
  final _flaxConvertedResult = _flaxResult.$2 as String;
  return _flaxConvertedResult;
}

String? _FlaxProxyDispatch3_get_label(
  _FlaxProxyDispatch3 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_label;
  final _flaxConvertedResult = _flaxResult.$2 as String?;
  return _flaxConvertedResult;
}

bool _FlaxProxyDispatch3_get_isSelected(
  _FlaxProxyDispatch3 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_isSelected;
  final _flaxConvertedResult = _flaxResult.$2 as bool;
  return _flaxConvertedResult;
}

int? _FlaxProxyDispatch3_get_bitrate(
  _FlaxProxyDispatch3 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_bitrate;
  final _flaxConvertedResult = _flaxResult.$2 as int?;
  return _flaxConvertedResult;
}

String? _FlaxProxyDispatch3_get_codec(
  _FlaxProxyDispatch3 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_codec;
  final _flaxConvertedResult = _flaxResult.$2 as String?;
  return _flaxConvertedResult;
}

abstract interface class _FlaxProxyDispatch0 {
  FlaxProxyPeer get _flaxPeer;
  String _flaxSuper_toString();
}

String _FlaxProxyDispatch0_call_toString(
  _FlaxProxyDispatch0 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    <Object?>[],
    <String, Object?>{},
  );
  if (!_flaxResult.$1) {
    return _flaxReceiver._flaxSuper_toString();
  }
  final _flaxConvertedResult = _flaxResult.$2 as String;
  return _flaxConvertedResult;
}

abstract interface class _FlaxProxyDispatch1 {
  FlaxProxyPeer get _flaxPeer;
  api4.Duration get _flaxSuperGet_start;
  api4.Duration get _flaxSuperGet_end;
}

api4.Duration _FlaxProxyDispatch1_get_start(
  _FlaxProxyDispatch1 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_start;
  final _flaxConvertedResult = _flaxResult.$2 as api4.Duration;
  return _flaxConvertedResult;
}

api4.Duration _FlaxProxyDispatch1_get_end(
  _FlaxProxyDispatch1 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_end;
  final _flaxConvertedResult = _flaxResult.$2 as api4.Duration;
  return _flaxConvertedResult;
}

abstract interface class _FlaxProxyDispatch2 {
  FlaxProxyPeer get _flaxPeer;
  List<api.Caption> get _flaxSuperGet_captions;
}

List<api.Caption> _FlaxProxyDispatch2_get_captions(
  _FlaxProxyDispatch2 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_captions;
  final _flaxConvertedResult = _flaxResult.$2 as List<api.Caption>;
  return _flaxConvertedResult;
}

abstract interface class _FlaxProxyDispatch4 {
  FlaxProxyPeer get _flaxPeer;
  bool get _flaxSuperGet_preventsDisplaySleepDuringVideoPlayback;
}

bool _FlaxProxyDispatch4_get_preventsDisplaySleepDuringVideoPlayback(
  _FlaxProxyDispatch4 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1)
    return _flaxReceiver._flaxSuperGet_preventsDisplaySleepDuringVideoPlayback;
  final _flaxConvertedResult = _flaxResult.$2 as bool;
  return _flaxConvertedResult;
}

final class _CaptionProxy extends api.Caption
    implements _FlaxProxyDispatch0, _FlaxProxyDispatch1 {
  final FlaxProxyPeer _flaxPeer;
  _CaptionProxy(
    this._flaxPeer, {
    required int super.number,
    required api4.Duration super.start,
    required api4.Duration super.end,
    required String super.text,
  });
  @override
  String toString() {
    return _FlaxProxyDispatch0_call_toString(this, 0);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  int get number {
    final _flaxResult = _flaxPeer.call(1, const [], const {});
    if (!_flaxResult.$1) return super.number;
    final _flaxConvertedResult = _flaxResult.$2 as int;
    return _flaxConvertedResult;
  }

  int get _flaxSuperGet_number {
    return super.number;
  }

  @override
  api4.Duration get start => _FlaxProxyDispatch1_get_start(this, 2);
  api4.Duration get _flaxSuperGet_start {
    return super.start;
  }

  @override
  api4.Duration get end => _FlaxProxyDispatch1_get_end(this, 3);
  api4.Duration get _flaxSuperGet_end {
    return super.end;
  }

  @override
  String get text {
    final _flaxResult = _flaxPeer.call(4, const [], const {});
    if (!_flaxResult.$1) return super.text;
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  String get _flaxSuperGet_text {
    return super.text;
  }
}

final class _ClosedCaptionFileProxy implements api.ClosedCaptionFile {
  final FlaxProxyPeer _flaxPeer;
  _ClosedCaptionFileProxy(this._flaxPeer);
  @override
  List<api.Caption> get captions {
    final _flaxResult = _flaxPeer.call(0, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as List<api.Caption>;
    return _flaxConvertedResult;
  }
}

final class _DurationRangeProxy extends api.DurationRange
    implements _FlaxProxyDispatch0, _FlaxProxyDispatch1 {
  final FlaxProxyPeer _flaxPeer;
  _DurationRangeProxy(
    this._flaxPeer,
    api4.Duration super.start,
    api4.Duration super.end,
  );
  @override
  double startFraction(api4.Duration duration) {
    final _flaxResult = _flaxPeer.call(0, <Object?>[
      duration,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_startFraction(duration);
    }
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double _flaxSuper_startFraction(api4.Duration duration) {
    return super.startFraction(duration);
  }

  @override
  double endFraction(api4.Duration duration) {
    final _flaxResult = _flaxPeer.call(1, <Object?>[
      duration,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_endFraction(duration);
    }
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double _flaxSuper_endFraction(api4.Duration duration) {
    return super.endFraction(duration);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch0_call_toString(this, 2);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  api4.Duration get start => _FlaxProxyDispatch1_get_start(this, 3);
  api4.Duration get _flaxSuperGet_start {
    return super.start;
  }

  @override
  api4.Duration get end => _FlaxProxyDispatch1_get_end(this, 4);
  api4.Duration get _flaxSuperGet_end {
    return super.end;
  }
}

final class _SubRipCaptionFileProxy extends api.SubRipCaptionFile
    implements _FlaxProxyDispatch2 {
  final FlaxProxyPeer _flaxPeer;
  _SubRipCaptionFileProxy(this._flaxPeer, String super.fileContents);
  @override
  String get fileContents {
    final _flaxResult = _flaxPeer.call(0, const [], const {});
    if (!_flaxResult.$1) return super.fileContents;
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  String get _flaxSuperGet_fileContents {
    return super.fileContents;
  }

  @override
  List<api.Caption> get captions => _FlaxProxyDispatch2_get_captions(this, 1);
  List<api.Caption> get _flaxSuperGet_captions {
    return super.captions;
  }
}

final class _VideoAudioTrackProxy extends api.VideoAudioTrack
    implements _FlaxProxyDispatch3, _FlaxProxyDispatch0 {
  final FlaxProxyPeer _flaxPeer;
  _VideoAudioTrackProxy(
    this._flaxPeer, {
    required String super.id,
    required bool super.isSelected,
    String? super.label,
    String? super.language,
    int? super.bitrate,
    int? super.sampleRate,
    int? super.channelCount,
    String? super.codec,
  });
  @override
  String toString() {
    return _FlaxProxyDispatch0_call_toString(this, 0);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  String get id => _FlaxProxyDispatch3_get_id(this, 1);
  String get _flaxSuperGet_id {
    return super.id;
  }

  @override
  String? get label => _FlaxProxyDispatch3_get_label(this, 2);
  String? get _flaxSuperGet_label {
    return super.label;
  }

  @override
  String? get language {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    if (!_flaxResult.$1) return super.language;
    final _flaxConvertedResult = _flaxResult.$2 as String?;
    return _flaxConvertedResult;
  }

  String? get _flaxSuperGet_language {
    return super.language;
  }

  @override
  bool get isSelected => _FlaxProxyDispatch3_get_isSelected(this, 4);
  bool get _flaxSuperGet_isSelected {
    return super.isSelected;
  }

  @override
  int? get bitrate => _FlaxProxyDispatch3_get_bitrate(this, 5);
  int? get _flaxSuperGet_bitrate {
    return super.bitrate;
  }

  @override
  int? get sampleRate {
    final _flaxResult = _flaxPeer.call(6, const [], const {});
    if (!_flaxResult.$1) return super.sampleRate;
    final _flaxConvertedResult = _flaxResult.$2 as int?;
    return _flaxConvertedResult;
  }

  int? get _flaxSuperGet_sampleRate {
    return super.sampleRate;
  }

  @override
  int? get channelCount {
    final _flaxResult = _flaxPeer.call(7, const [], const {});
    if (!_flaxResult.$1) return super.channelCount;
    final _flaxConvertedResult = _flaxResult.$2 as int?;
    return _flaxConvertedResult;
  }

  int? get _flaxSuperGet_channelCount {
    return super.channelCount;
  }

  @override
  String? get codec => _FlaxProxyDispatch3_get_codec(this, 8);
  String? get _flaxSuperGet_codec {
    return super.codec;
  }
}

final class _VideoPlayerOptionsProxy extends api.VideoPlayerOptions
    implements _FlaxProxyDispatch4 {
  final FlaxProxyPeer _flaxPeer;
  _VideoPlayerOptionsProxy(
    this._flaxPeer, {
    bool super.mixWithOthers,
    bool super.allowBackgroundPlayback,
    bool super.preventsDisplaySleepDuringVideoPlayback,
    api.VideoPlayerWebOptions? super.webOptions,
    int? super.backBufferDurationMs,
  });
  @override
  bool get allowBackgroundPlayback {
    final _flaxResult = _flaxPeer.call(0, const [], const {});
    if (!_flaxResult.$1) return super.allowBackgroundPlayback;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_allowBackgroundPlayback {
    return super.allowBackgroundPlayback;
  }

  @override
  bool get mixWithOthers {
    final _flaxResult = _flaxPeer.call(1, const [], const {});
    if (!_flaxResult.$1) return super.mixWithOthers;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_mixWithOthers {
    return super.mixWithOthers;
  }

  @override
  bool get preventsDisplaySleepDuringVideoPlayback =>
      _FlaxProxyDispatch4_get_preventsDisplaySleepDuringVideoPlayback(this, 2);
  bool get _flaxSuperGet_preventsDisplaySleepDuringVideoPlayback {
    return super.preventsDisplaySleepDuringVideoPlayback;
  }

  @override
  api.VideoPlayerWebOptions? get webOptions {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    if (!_flaxResult.$1) return super.webOptions;
    final _flaxConvertedResult = _flaxResult.$2 as api.VideoPlayerWebOptions?;
    return _flaxConvertedResult;
  }

  api.VideoPlayerWebOptions? get _flaxSuperGet_webOptions {
    return super.webOptions;
  }

  @override
  int? get backBufferDurationMs {
    final _flaxResult = _flaxPeer.call(4, const [], const {});
    if (!_flaxResult.$1) return super.backBufferDurationMs;
    final _flaxConvertedResult = _flaxResult.$2 as int?;
    return _flaxConvertedResult;
  }

  int? get _flaxSuperGet_backBufferDurationMs {
    return super.backBufferDurationMs;
  }
}

final class _VideoPlayerValueProxy extends api.VideoPlayerValue
    implements _FlaxProxyDispatch0, _FlaxProxyDispatch4 {
  final FlaxProxyPeer _flaxPeer;
  _VideoPlayerValueProxy(
    this._flaxPeer, {
    required api4.Duration super.duration,
    api3.Size super.size,
    api4.Duration super.position,
    api.Caption super.caption,
    api4.Duration super.captionOffset,
    List<api.DurationRange> super.buffered,
    bool super.isInitialized,
    bool super.isPlaying,
    bool super.isLooping,
    bool super.isBuffering,
    double super.volume,
    double super.playbackSpeed,
    int super.rotationCorrection,
    String? super.errorDescription,
    bool super.isCompleted,
    bool super.preventsDisplaySleepDuringVideoPlayback,
  });
  _VideoPlayerValueProxy.uninitialized(this._flaxPeer) : super.uninitialized();
  _VideoPlayerValueProxy.erroneous(
    this._flaxPeer,
    String super.errorDescription,
  ) : super.erroneous();
  @override
  api.VideoPlayerValue copyWith({
    Object? duration = _flaxOmitted,
    Object? size = _flaxOmitted,
    Object? position = _flaxOmitted,
    Object? caption = _flaxOmitted,
    Object? captionOffset = _flaxOmitted,
    Object? buffered = _flaxOmitted,
    Object? isInitialized = _flaxOmitted,
    Object? isPlaying = _flaxOmitted,
    Object? isLooping = _flaxOmitted,
    Object? isBuffering = _flaxOmitted,
    Object? volume = _flaxOmitted,
    Object? playbackSpeed = _flaxOmitted,
    Object? rotationCorrection = _flaxOmitted,
    Object? errorDescription = _flaxOmitted,
    Object? isCompleted = _flaxOmitted,
    Object? preventsDisplaySleepDuringVideoPlayback = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(0, <Object?>[], <String, Object?>{
      if (!identical(duration, _flaxOmitted)) "duration": duration,
      if (!identical(size, _flaxOmitted)) "size": size,
      if (!identical(position, _flaxOmitted)) "position": position,
      if (!identical(caption, _flaxOmitted)) "caption": caption,
      if (!identical(captionOffset, _flaxOmitted))
        "captionOffset": captionOffset,
      if (!identical(buffered, _flaxOmitted)) "buffered": buffered,
      if (!identical(isInitialized, _flaxOmitted))
        "isInitialized": isInitialized,
      if (!identical(isPlaying, _flaxOmitted)) "isPlaying": isPlaying,
      if (!identical(isLooping, _flaxOmitted)) "isLooping": isLooping,
      if (!identical(isBuffering, _flaxOmitted)) "isBuffering": isBuffering,
      if (!identical(volume, _flaxOmitted)) "volume": volume,
      if (!identical(playbackSpeed, _flaxOmitted))
        "playbackSpeed": playbackSpeed,
      if (!identical(rotationCorrection, _flaxOmitted))
        "rotationCorrection": rotationCorrection,
      if (!identical(errorDescription, _flaxOmitted))
        "errorDescription": errorDescription,
      if (!identical(isCompleted, _flaxOmitted)) "isCompleted": isCompleted,
      if (!identical(preventsDisplaySleepDuringVideoPlayback, _flaxOmitted))
        "preventsDisplaySleepDuringVideoPlayback":
            preventsDisplaySleepDuringVideoPlayback,
    });
    if (!_flaxResult.$1) {
      return _flaxSuper_copyWith(
        duration: duration,
        size: size,
        position: position,
        caption: caption,
        captionOffset: captionOffset,
        buffered: buffered,
        isInitialized: isInitialized,
        isPlaying: isPlaying,
        isLooping: isLooping,
        isBuffering: isBuffering,
        volume: volume,
        playbackSpeed: playbackSpeed,
        rotationCorrection: rotationCorrection,
        errorDescription: errorDescription,
        isCompleted: isCompleted,
        preventsDisplaySleepDuringVideoPlayback:
            preventsDisplaySleepDuringVideoPlayback,
      );
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.VideoPlayerValue;
    return _flaxConvertedResult;
  }

  api.VideoPlayerValue _flaxSuper_copyWith({
    Object? duration = _flaxOmitted,
    Object? size = _flaxOmitted,
    Object? position = _flaxOmitted,
    Object? caption = _flaxOmitted,
    Object? captionOffset = _flaxOmitted,
    Object? buffered = _flaxOmitted,
    Object? isInitialized = _flaxOmitted,
    Object? isPlaying = _flaxOmitted,
    Object? isLooping = _flaxOmitted,
    Object? isBuffering = _flaxOmitted,
    Object? volume = _flaxOmitted,
    Object? playbackSpeed = _flaxOmitted,
    Object? rotationCorrection = _flaxOmitted,
    Object? errorDescription = _flaxOmitted,
    Object? isCompleted = _flaxOmitted,
    Object? preventsDisplaySleepDuringVideoPlayback = _flaxOmitted,
  }) {
    final _flaxHas0 = !identical(duration, _flaxOmitted);
    final _flaxHas1 = !identical(size, _flaxOmitted);
    final _flaxHas2 = !identical(position, _flaxOmitted);
    final _flaxHas3 = !identical(caption, _flaxOmitted);
    final _flaxHas4 = !identical(captionOffset, _flaxOmitted);
    final _flaxHas5 = !identical(buffered, _flaxOmitted);
    final _flaxHas6 = !identical(isInitialized, _flaxOmitted);
    final _flaxHas7 = !identical(isPlaying, _flaxOmitted);
    final _flaxHas8 = !identical(isLooping, _flaxOmitted);
    final _flaxHas9 = !identical(isBuffering, _flaxOmitted);
    final _flaxHas10 = !identical(volume, _flaxOmitted);
    final _flaxHas11 = !identical(playbackSpeed, _flaxOmitted);
    final _flaxHas12 = !identical(rotationCorrection, _flaxOmitted);
    final _flaxHas13 = !identical(errorDescription, _flaxOmitted);
    final _flaxHas14 = !identical(isCompleted, _flaxOmitted);
    final _flaxHas15 = !identical(
      preventsDisplaySleepDuringVideoPlayback,
      _flaxOmitted,
    );
    return (flaxInvokeWithDefaults(
      super.copyWith,
      <Object?>[
        (_flaxHas0 ? duration as api4.Duration? : null),
        (_flaxHas1 ? size as api3.Size? : null),
        (_flaxHas2 ? position as api4.Duration? : null),
        (_flaxHas3 ? caption as api.Caption? : null),
        (_flaxHas4 ? captionOffset as api4.Duration? : null),
        (_flaxHas5 ? buffered as List<api.DurationRange>? : null),
        (_flaxHas6 ? isInitialized as bool? : null),
        (_flaxHas7 ? isPlaying as bool? : null),
        (_flaxHas8 ? isLooping as bool? : null),
        (_flaxHas9 ? isBuffering as bool? : null),
        (_flaxHas10 ? volume as double? : null),
        (_flaxHas11 ? playbackSpeed as double? : null),
        (_flaxHas12 ? rotationCorrection as int? : null),
        (_flaxHas13 ? errorDescription as String? : null),
        (_flaxHas14 ? isCompleted as bool? : null),
        (_flaxHas15 ? preventsDisplaySleepDuringVideoPlayback as bool? : null),
      ],
      <int>[
        (_flaxHas0 ? 1 : 0) |
            (_flaxHas1 ? 2 : 0) |
            (_flaxHas2 ? 4 : 0) |
            (_flaxHas3 ? 8 : 0) |
            (_flaxHas4 ? 16 : 0) |
            (_flaxHas5 ? 32 : 0) |
            (_flaxHas6 ? 64 : 0) |
            (_flaxHas7 ? 128 : 0) |
            (_flaxHas8 ? 256 : 0) |
            (_flaxHas9 ? 512 : 0) |
            (_flaxHas10 ? 1024 : 0) |
            (_flaxHas11 ? 2048 : 0) |
            (_flaxHas12 ? 4096 : 0) |
            (_flaxHas13 ? 8192 : 0) |
            (_flaxHas14 ? 16384 : 0) |
            (_flaxHas15 ? 32768 : 0),
      ],
      const <String>[
        "duration",
        "size",
        "position",
        "caption",
        "captionOffset",
        "buffered",
        "isInitialized",
        "isPlaying",
        "isLooping",
        "isBuffering",
        "volume",
        "playbackSpeed",
        "rotationCorrection",
        "errorDescription",
        "isCompleted",
        "preventsDisplaySleepDuringVideoPlayback",
      ],
    ) as api.VideoPlayerValue);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch0_call_toString(this, 1);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  api4.Duration get duration {
    final _flaxResult = _flaxPeer.call(2, const [], const {});
    if (!_flaxResult.$1) return super.duration;
    final _flaxConvertedResult = _flaxResult.$2 as api4.Duration;
    return _flaxConvertedResult;
  }

  api4.Duration get _flaxSuperGet_duration {
    return super.duration;
  }

  @override
  api4.Duration get position {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    if (!_flaxResult.$1) return super.position;
    final _flaxConvertedResult = _flaxResult.$2 as api4.Duration;
    return _flaxConvertedResult;
  }

  api4.Duration get _flaxSuperGet_position {
    return super.position;
  }

  @override
  api.Caption get caption {
    final _flaxResult = _flaxPeer.call(4, const [], const {});
    if (!_flaxResult.$1) return super.caption;
    final _flaxConvertedResult = _flaxResult.$2 as api.Caption;
    return _flaxConvertedResult;
  }

  api.Caption get _flaxSuperGet_caption {
    return super.caption;
  }

  @override
  api4.Duration get captionOffset {
    final _flaxResult = _flaxPeer.call(5, const [], const {});
    if (!_flaxResult.$1) return super.captionOffset;
    final _flaxConvertedResult = _flaxResult.$2 as api4.Duration;
    return _flaxConvertedResult;
  }

  api4.Duration get _flaxSuperGet_captionOffset {
    return super.captionOffset;
  }

  @override
  List<api.DurationRange> get buffered {
    final _flaxResult = _flaxPeer.call(6, const [], const {});
    if (!_flaxResult.$1) return super.buffered;
    final _flaxConvertedResult = _flaxResult.$2 as List<api.DurationRange>;
    return _flaxConvertedResult;
  }

  List<api.DurationRange> get _flaxSuperGet_buffered {
    return super.buffered;
  }

  @override
  bool get isPlaying {
    final _flaxResult = _flaxPeer.call(7, const [], const {});
    if (!_flaxResult.$1) return super.isPlaying;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isPlaying {
    return super.isPlaying;
  }

  @override
  bool get isLooping {
    final _flaxResult = _flaxPeer.call(8, const [], const {});
    if (!_flaxResult.$1) return super.isLooping;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isLooping {
    return super.isLooping;
  }

  @override
  bool get isBuffering {
    final _flaxResult = _flaxPeer.call(9, const [], const {});
    if (!_flaxResult.$1) return super.isBuffering;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isBuffering {
    return super.isBuffering;
  }

  @override
  double get volume {
    final _flaxResult = _flaxPeer.call(10, const [], const {});
    if (!_flaxResult.$1) return super.volume;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_volume {
    return super.volume;
  }

  @override
  double get playbackSpeed {
    final _flaxResult = _flaxPeer.call(11, const [], const {});
    if (!_flaxResult.$1) return super.playbackSpeed;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_playbackSpeed {
    return super.playbackSpeed;
  }

  @override
  String? get errorDescription {
    final _flaxResult = _flaxPeer.call(12, const [], const {});
    if (!_flaxResult.$1) return super.errorDescription;
    final _flaxConvertedResult = _flaxResult.$2 as String?;
    return _flaxConvertedResult;
  }

  String? get _flaxSuperGet_errorDescription {
    return super.errorDescription;
  }

  @override
  bool get isCompleted {
    final _flaxResult = _flaxPeer.call(13, const [], const {});
    if (!_flaxResult.$1) return super.isCompleted;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isCompleted {
    return super.isCompleted;
  }

  @override
  bool get preventsDisplaySleepDuringVideoPlayback =>
      _FlaxProxyDispatch4_get_preventsDisplaySleepDuringVideoPlayback(this, 14);
  bool get _flaxSuperGet_preventsDisplaySleepDuringVideoPlayback {
    return super.preventsDisplaySleepDuringVideoPlayback;
  }

  @override
  api3.Size get size {
    final _flaxResult = _flaxPeer.call(15, const [], const {});
    if (!_flaxResult.$1) return super.size;
    final _flaxConvertedResult = _flaxResult.$2 as api3.Size;
    return _flaxConvertedResult;
  }

  api3.Size get _flaxSuperGet_size {
    return super.size;
  }

  @override
  int get rotationCorrection {
    final _flaxResult = _flaxPeer.call(16, const [], const {});
    if (!_flaxResult.$1) return super.rotationCorrection;
    final _flaxConvertedResult = _flaxResult.$2 as int;
    return _flaxConvertedResult;
  }

  int get _flaxSuperGet_rotationCorrection {
    return super.rotationCorrection;
  }

  @override
  bool get isInitialized {
    final _flaxResult = _flaxPeer.call(17, const [], const {});
    if (!_flaxResult.$1) return super.isInitialized;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isInitialized {
    return super.isInitialized;
  }

  @override
  bool get hasError {
    final _flaxResult = _flaxPeer.call(18, const [], const {});
    if (!_flaxResult.$1) return super.hasError;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_hasError {
    return super.hasError;
  }

  @override
  double get aspectRatio {
    final _flaxResult = _flaxPeer.call(19, const [], const {});
    if (!_flaxResult.$1) return super.aspectRatio;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_aspectRatio {
    return super.aspectRatio;
  }
}

final class _VideoPlayerWebOptionsProxy extends api.VideoPlayerWebOptions {
  final FlaxProxyPeer _flaxPeer;
  _VideoPlayerWebOptionsProxy(
    this._flaxPeer, {
    api.VideoPlayerWebOptionsControls super.controls,
    bool super.allowContextMenu,
    bool super.allowRemotePlayback,
    api4.Uri? super.poster,
  });
  @override
  api.VideoPlayerWebOptionsControls get controls {
    final _flaxResult = _flaxPeer.call(0, const [], const {});
    if (!_flaxResult.$1) return super.controls;
    final _flaxConvertedResult =
        _flaxResult.$2 as api.VideoPlayerWebOptionsControls;
    return _flaxConvertedResult;
  }

  api.VideoPlayerWebOptionsControls get _flaxSuperGet_controls {
    return super.controls;
  }

  @override
  bool get allowContextMenu {
    final _flaxResult = _flaxPeer.call(1, const [], const {});
    if (!_flaxResult.$1) return super.allowContextMenu;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_allowContextMenu {
    return super.allowContextMenu;
  }

  @override
  bool get allowRemotePlayback {
    final _flaxResult = _flaxPeer.call(2, const [], const {});
    if (!_flaxResult.$1) return super.allowRemotePlayback;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_allowRemotePlayback {
    return super.allowRemotePlayback;
  }

  @override
  api4.Uri? get poster {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    if (!_flaxResult.$1) return super.poster;
    final _flaxConvertedResult = _flaxResult.$2 as api4.Uri?;
    return _flaxConvertedResult;
  }

  api4.Uri? get _flaxSuperGet_poster {
    return super.poster;
  }
}

final class _VideoPlayerWebOptionsControlsProxy
    implements api.VideoPlayerWebOptionsControls {
  final FlaxProxyPeer _flaxPeer;
  _VideoPlayerWebOptionsControlsProxy(this._flaxPeer);
  @override
  bool get enabled {
    final _flaxResult = _flaxPeer.call(0, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  @override
  bool get allowDownload {
    final _flaxResult = _flaxPeer.call(1, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  @override
  bool get allowFullscreen {
    final _flaxResult = _flaxPeer.call(2, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  @override
  bool get allowPlaybackRate {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  @override
  bool get allowPictureInPicture {
    final _flaxResult = _flaxPeer.call(4, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  @override
  String get controlsList {
    final _flaxResult = _flaxPeer.call(5, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }
}

final class _VideoProgressColorsProxy extends api.VideoProgressColors {
  final FlaxProxyPeer _flaxPeer;
  _VideoProgressColorsProxy(
    this._flaxPeer, {
    api3.Color super.playedColor,
    api3.Color super.bufferedColor,
    api3.Color super.backgroundColor,
  });
  @override
  api3.Color get playedColor {
    final _flaxResult = _flaxPeer.call(0, const [], const {});
    if (!_flaxResult.$1) return super.playedColor;
    final _flaxConvertedResult = _flaxResult.$2 as api3.Color;
    return _flaxConvertedResult;
  }

  api3.Color get _flaxSuperGet_playedColor {
    return super.playedColor;
  }

  @override
  api3.Color get bufferedColor {
    final _flaxResult = _flaxPeer.call(1, const [], const {});
    if (!_flaxResult.$1) return super.bufferedColor;
    final _flaxConvertedResult = _flaxResult.$2 as api3.Color;
    return _flaxConvertedResult;
  }

  api3.Color get _flaxSuperGet_bufferedColor {
    return super.bufferedColor;
  }

  @override
  api3.Color get backgroundColor {
    final _flaxResult = _flaxPeer.call(2, const [], const {});
    if (!_flaxResult.$1) return super.backgroundColor;
    final _flaxConvertedResult = _flaxResult.$2 as api3.Color;
    return _flaxConvertedResult;
  }

  api3.Color get _flaxSuperGet_backgroundColor {
    return super.backgroundColor;
  }
}

final class _VideoTrackProxy extends api.VideoTrack
    implements _FlaxProxyDispatch3, _FlaxProxyDispatch0 {
  final FlaxProxyPeer _flaxPeer;
  _VideoTrackProxy(
    this._flaxPeer, {
    required String super.id,
    required bool super.isSelected,
    String? super.label,
    int? super.bitrate,
    int? super.width,
    int? super.height,
    double? super.frameRate,
    String? super.codec,
  });
  @override
  String toString() {
    return _FlaxProxyDispatch0_call_toString(this, 0);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  String get id => _FlaxProxyDispatch3_get_id(this, 1);
  String get _flaxSuperGet_id {
    return super.id;
  }

  @override
  bool get isSelected => _FlaxProxyDispatch3_get_isSelected(this, 2);
  bool get _flaxSuperGet_isSelected {
    return super.isSelected;
  }

  @override
  String? get label => _FlaxProxyDispatch3_get_label(this, 3);
  String? get _flaxSuperGet_label {
    return super.label;
  }

  @override
  int? get bitrate => _FlaxProxyDispatch3_get_bitrate(this, 4);
  int? get _flaxSuperGet_bitrate {
    return super.bitrate;
  }

  @override
  int? get width {
    final _flaxResult = _flaxPeer.call(5, const [], const {});
    if (!_flaxResult.$1) return super.width;
    final _flaxConvertedResult = _flaxResult.$2 as int?;
    return _flaxConvertedResult;
  }

  int? get _flaxSuperGet_width {
    return super.width;
  }

  @override
  int? get height {
    final _flaxResult = _flaxPeer.call(6, const [], const {});
    if (!_flaxResult.$1) return super.height;
    final _flaxConvertedResult = _flaxResult.$2 as int?;
    return _flaxConvertedResult;
  }

  int? get _flaxSuperGet_height {
    return super.height;
  }

  @override
  double? get frameRate {
    final _flaxResult = _flaxPeer.call(7, const [], const {});
    if (!_flaxResult.$1) return super.frameRate;
    final _flaxConvertedResult = _flaxResult.$2 as double?;
    return _flaxConvertedResult;
  }

  double? get _flaxSuperGet_frameRate {
    return super.frameRate;
  }

  @override
  String? get codec => _FlaxProxyDispatch3_get_codec(this, 8);
  String? get _flaxSuperGet_codec {
    return super.codec;
  }
}

final class _WebVTTCaptionFileProxy extends api.WebVTTCaptionFile
    implements _FlaxProxyDispatch2 {
  final FlaxProxyPeer _flaxPeer;
  _WebVTTCaptionFileProxy(this._flaxPeer, String super.fileContents);
  @override
  List<api.Caption> get captions => _FlaxProxyDispatch2_get_captions(this, 0);
  List<api.Caption> get _flaxSuperGet_captions {
    return super.captions;
  }
}

const _flaxDartShapes = <FlaxDartShapeTemplate>[
  FlaxDartShapeTemplate("[\"callback\",[0,0,[],[]]]", _flaxShape0),
];
Function _flaxShape0<_Shape0>() => (FlaxDartTypes types, bool withinCallback) {
  return types.define<_Shape0 Function()>(
    FlaxTypeRef(
      "callback",
      nullable: false,
      callback: FlaxCallbackBinding(
        [],
        types.ref<_Shape0>(withinCallback: true),
        FlaxCallbackAdapters.wrap0<_Shape0>,
        id: types.key<_Shape0 Function()>() + ":callback:<>()->parameter:",
        invoke: FlaxCallbackAdapters.invoke0<_Shape0>,
        matches: FlaxCallbackAdapters.matches0<_Shape0>,
      ),
    ),
    withinCallback: withinCallback,
  );
};
Object _collection0Create() => <api.Caption>[];
bool _collection0Matches(Object value) => value is List<api.Caption>;
Object _collection1Create() => <api.Caption>[];
Object _collection1Restore(Object value) =>
    (value as Iterable<Object?>).cast<api.Caption>();
bool _collection1Matches(Object value) => value is Iterable<api.Caption>;
Object _collection2Create() => <api.DurationRange>[];
bool _collection2Matches(Object value) => value is List<api.DurationRange>;
Object _collection3Create() => <api.DurationRange>[];
Object _collection3Restore(Object value) =>
    (value as Iterable<Object?>).cast<api.DurationRange>();
bool _collection3Matches(Object value) => value is Iterable<api.DurationRange>;
Object _collection4Create() => <api2.DiagnosticsNode>[];
bool _collection4Matches(Object value) => value is List<api2.DiagnosticsNode>;
Object _collection5Create() => <api2.DiagnosticsNode>[];
Object _collection5Restore(Object value) =>
    (value as Iterable<Object?>).cast<api2.DiagnosticsNode>();
bool _collection5Matches(Object value) =>
    value is Iterable<api2.DiagnosticsNode>;
Object _collection6Create() => <String, String>{};
bool _collection6Matches(Object value) => value is Map<String, String>;
Object _collection7Create() => <api.VideoAudioTrack>[];
bool _collection7Matches(Object value) => value is List<api.VideoAudioTrack>;
Object _collection8Create() => <api.VideoAudioTrack>[];
Object _collection8Restore(Object value) =>
    (value as Iterable<Object?>).cast<api.VideoAudioTrack>();
bool _collection8Matches(Object value) =>
    value is Iterable<api.VideoAudioTrack>;
Object _collection9Create() => <api.VideoTrack>[];
bool _collection9Matches(Object value) => value is List<api.VideoTrack>;
Object _collection10Create() => <api.VideoTrack>[];
Object _collection10Restore(Object value) =>
    (value as Iterable<Object?>).cast<api.VideoTrack>();
bool _collection10Matches(Object value) => value is Iterable<api.VideoTrack>;
Future<Object?> _future0Adapt(Future<Object?> value) =>
    value.then<api4.Duration?>((value) => value as api4.Duration?);
Future<Object?> _future1Adapt(Future<Object?> value) => value
    .then<api.ClosedCaptionFile>((value) => value as api.ClosedCaptionFile);
Future<Object?> _future2Adapt(Future<Object?> value) =>
    value.then<void>((_) {});
Future<Object?> _future3Adapt(Future<Object?> value) =>
    value.then<List<api.VideoAudioTrack>>(
      (value) => value as List<api.VideoAudioTrack>,
    );
Future<Object?> _future4Adapt(Future<Object?> value) =>
    value.then<List<api.VideoTrack>>((value) => value as List<api.VideoTrack>);
const _flaxBinding0 = FlaxCallbackBinding.signature(
  [],
  flaxDurationType,
  id: "callback:<>()->object:flax.core/flutter#type:Duration",
);
const _flaxBinding1 = FlaxTypeRef(
  "object",
  id: "flax.video/video#type:Caption",
);
const _flaxBinding2 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding1,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.video/video#type:Caption]",
    _collection1Create,
    _collection1Matches,
    restore: _collection1Restore,
  ),
);
const _flaxBinding3 = FlaxTypeRef(
  "list",
  item: _flaxBinding1,
  collection: FlaxCollectionBinding(
    "list:[object:flax.video/video#type:Caption]",
    _collection0Create,
    _collection0Matches,
  ),
  iterable: _flaxBinding2,
);
const _flaxBinding4 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding3,
  id: "callback:<>()->list:[object:flax.video/video#type:Caption]",
);
const _flaxBinding5 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("duration", flaxDurationType)],
  flaxDoubleType,
  id: "callback:<>(p:r:duration:object:flax.core/flutter#type:Duration)->double:",
);
const _flaxBinding6 = FlaxTypeRef(
  "object",
  id: "flax.video/video#type:VideoPlayerWebOptions",
  nullable: true,
);
const _flaxBinding7 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding6,
  id: "callback:<>()->object?:flax.video/video#type:VideoPlayerWebOptions",
);
const _flaxBinding8 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding1,
  id: "callback:<>()->object:flax.video/video#type:Caption",
);
const _flaxBinding9 = FlaxTypeRef(
  "object",
  id: "flax.video/video#type:DurationRange",
);
const _flaxBinding10 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding9,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.video/video#type:DurationRange]",
    _collection3Create,
    _collection3Matches,
    restore: _collection3Restore,
  ),
);
const _flaxBinding11 = FlaxTypeRef(
  "list",
  item: _flaxBinding9,
  collection: FlaxCollectionBinding(
    "list:[object:flax.video/video#type:DurationRange]",
    _collection2Create,
    _collection2Matches,
  ),
  iterable: _flaxBinding10,
);
const _flaxBinding12 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding11,
  id: "callback:<>()->list:[object:flax.video/video#type:DurationRange]",
);
const _flaxBinding13 = FlaxCallbackBinding.signature(
  [],
  flaxSizeType,
  id: "callback:<>()->object:flax.core/flutter#type:Size",
);
const _flaxBinding14 = FlaxTypeRef(
  "object",
  id: "flax.video/video#type:VideoPlayerWebOptionsControls",
);
const _flaxBinding15 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding14,
  id: "callback:<>()->object:flax.video/video#type:VideoPlayerWebOptionsControls",
);
const _flaxBinding16 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Uri",
  nullable: true,
);
const _flaxBinding17 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding16,
  id: "callback:<>()->object?:flax.core/flutter#type:Uri",
);
const _flaxBinding18 = FlaxCallbackBinding.signature(
  [],
  flaxColorType,
  id: "callback:<>()->object:flax.core/flutter#type:Color",
);
const _flaxBinding19 = FlaxGetter.plain("number", flaxIntType, _Caption_number);
const _flaxBinding20 = FlaxGetter.plain(
  "start",
  flaxDurationType,
  _Caption_start,
);
const _flaxBinding21 = FlaxGetter.plain("end", flaxDurationType, _Caption_end);
const _flaxBinding22 = FlaxGetter.plain("text", flaxStringType, _Caption_text);
const _flaxBinding23 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _Caption_toString,
);
const _flaxBinding24 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _FlaxProxyDispatch0_super_call_toString,
);
const _flaxBinding25 = FlaxInstanceMethod.shared(
  _flaxBinding0,
  _FlaxProxyDispatch1_super_get_start,
);
const _flaxBinding26 = FlaxInstanceMethod.shared(
  _flaxBinding0,
  _FlaxProxyDispatch1_super_get_end,
);
const _flaxBinding27 = <FlaxParameter>[
  FlaxParameter.required("number", flaxIntType),
  FlaxParameter.required("start", flaxDurationType),
  FlaxParameter.required("end", flaxDurationType),
  FlaxParameter.required("text", flaxStringType),
];
const _flaxBinding28 = FlaxProxyMember(
  "toString",
  0,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding29 = FlaxProxyMember(
  "number",
  1,
  flaxIntCall,
  hasSuper: true,
);
const _flaxBinding30 = FlaxProxyMember(
  "start",
  1,
  _flaxBinding0,
  hasSuper: true,
);
const _flaxBinding31 = FlaxProxyMember("end", 1, _flaxBinding0, hasSuper: true);
const _flaxBinding32 = FlaxProxyMember(
  "text",
  1,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding33 = FlaxObjectBinding(
  "flax.video/video#type:Caption",
  [_flaxBinding19, _flaxBinding20, _flaxBinding21, _flaxBinding22],
  {
    "toString": _flaxBinding23,
    "@super:toString": _flaxBinding24,
    "@super:get:number": FlaxInstanceMethod.shared(
      flaxIntCall,
      _Caption_super_get_number,
    ),
    "@super:get:start": _flaxBinding25,
    "@super:get:end": _flaxBinding26,
    "@super:get:text": FlaxInstanceMethod.shared(
      flaxStringCall,
      _Caption_super_get_text,
    ),
  },
  constructors: {"": _flaxBinding27, "@implementation": _flaxBinding27},
  create: _createCaption,
  matches: _isCaption,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding28,
    _flaxBinding29,
    _flaxBinding30,
    _flaxBinding31,
    _flaxBinding32,
  ]),
);
const _flaxBinding34 = FlaxGetter.plain(
  "text",
  flaxNullableStringType,
  _ClosedCaption_text,
);
const _flaxBinding35 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:TextStyle",
  nullable: true,
);
const _flaxBinding36 = FlaxGetter.plain(
  "textStyle",
  _flaxBinding35,
  _ClosedCaption_textStyle,
);
const _flaxBinding37 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Key",
  nullable: true,
);
const _flaxBinding38 = FlaxGetter.plain(
  "key",
  _flaxBinding37,
  _ClosedCaption_key,
);
const _flaxBinding39 = FlaxTypeRef(
  "context",
  id: "flax.core/flutter#type:BuildContext",
);
const _flaxBinding40 = <FlaxParameter>[
  FlaxParameter.required("context", _flaxBinding39),
];
const _flaxBinding41 = FlaxInstanceMethod.plain(
  _flaxBinding40,
  flaxWidgetType,
  _ClosedCaption_build,
);
const _flaxBinding42 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:StatelessElement",
);
const _flaxBinding43 = <FlaxParameter>[];
const _flaxBinding44 = FlaxInstanceMethod.plain(
  _flaxBinding43,
  _flaxBinding42,
  _ClosedCaption_createElement,
);
const _flaxBinding45 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _ClosedCaption_toStringShort,
);
const _flaxBinding46 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_foundation#type:DiagnosticPropertiesBuilder",
);
const _flaxBinding47 = <FlaxParameter>[
  FlaxParameter.required("properties", _flaxBinding46),
];
const _flaxBinding48 = FlaxInstanceMethod.plain(
  _flaxBinding47,
  flaxVoidType,
  _ClosedCaption_debugFillProperties,
);
const _flaxBinding49 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_foundation#type:DiagnosticLevel",
);
const _flaxBinding50 = <FlaxParameter>[
  FlaxParameter("joiner", flaxStringType, required: false, defaultValue: ', '),
  FlaxParameter(
    "minLevel",
    _flaxBinding49,
    required: false,
    defaultValue: api2.DiagnosticLevel.debug,
  ),
];
const _flaxBinding51 = FlaxInstanceMethod.plain(
  _flaxBinding50,
  flaxStringType,
  _ClosedCaption_toStringShallow,
);
const _flaxBinding52 = <FlaxParameter>[
  FlaxParameter(
    "minLevel",
    _flaxBinding49,
    required: false,
    defaultValue: api2.DiagnosticLevel.debug,
  ),
  FlaxParameter(
    "prefixLineOne",
    flaxStringType,
    required: false,
    defaultValue: '',
  ),
  FlaxParameter("prefixOtherLines", flaxNullableStringType, required: false),
  FlaxParameter("wrapWidth", flaxIntType, required: false, defaultValue: 65),
];
const _flaxBinding53 = FlaxInstanceMethod.plain(
  _flaxBinding52,
  flaxStringType,
  _ClosedCaption_toStringDeep,
);
const _flaxBinding54 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_foundation#type:DiagnosticsTreeStyle",
  nullable: true,
);
const _flaxBinding55 = <FlaxParameter>[
  FlaxParameter("name", flaxNullableStringType, required: false),
  FlaxParameter("style", _flaxBinding54, required: false),
];
const _flaxBinding56 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_foundation#type:DiagnosticsNode",
);
const _flaxBinding57 = FlaxInstanceMethod.plain(
  _flaxBinding55,
  _flaxBinding56,
  _ClosedCaption_toDiagnosticsNode,
);
const _flaxBinding58 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding56,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_foundation#type:DiagnosticsNode]",
    _collection5Create,
    _collection5Matches,
    restore: _collection5Restore,
  ),
);
const _flaxBinding59 = FlaxTypeRef(
  "list",
  item: _flaxBinding56,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_foundation#type:DiagnosticsNode]",
    _collection4Create,
    _collection4Matches,
  ),
  iterable: _flaxBinding58,
);
const _flaxBinding60 = FlaxInstanceMethod.plain(
  _flaxBinding43,
  _flaxBinding59,
  _ClosedCaption_debugDescribeChildren,
);
const _flaxBinding61 = <FlaxParameter>[
  FlaxParameter("key", _flaxBinding37, required: false),
  FlaxParameter("text", flaxNullableStringType, required: false),
  FlaxParameter("textStyle", _flaxBinding35, required: false),
];
const _flaxBinding62 = FlaxObjectBinding(
  "flax.video/video#type:ClosedCaption",
  [_flaxBinding34, _flaxBinding36, _flaxBinding38],
  {
    "build": _flaxBinding41,
    "createElement": _flaxBinding44,
    "toStringShort": _flaxBinding45,
    "debugFillProperties": _flaxBinding48,
    "toStringShallow": _flaxBinding51,
    "toStringDeep": _flaxBinding53,
    "toDiagnosticsNode": _flaxBinding57,
    "debugDescribeChildren": _flaxBinding60,
  },
  constructors: {"": _flaxBinding61},
  create: _createClosedCaption,
  matches: _isClosedCaption,
  setters: [],
  supertypes: [
    "flax.core/sdk_widgets#type:StatelessWidget",
    "flax.core/sdk_widgets#type:Widget",
    "flax.core/sdk_foundation#type:DiagnosticableTree",
    "dart:core::Object",
    "flax.core/sdk_foundation#type:Diagnosticable",
  ],
);
const _flaxBinding63 = FlaxGetter.plain(
  "captions",
  _flaxBinding3,
  _ClosedCaptionFile_captions,
);
const _flaxBinding64 = FlaxProxyMember("captions", 1, _flaxBinding4);
const _flaxBinding65 = FlaxObjectBinding(
  "flax.video/video#type:ClosedCaptionFile",
  [_flaxBinding63],
  {},
  constructors: {"@implementation": _flaxBinding43},
  create: _createClosedCaptionFile,
  matches: _isClosedCaptionFile,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([_flaxBinding64]),
);
const _flaxBinding66 = FlaxGetter.plain(
  "start",
  flaxDurationType,
  _DurationRange_start,
);
const _flaxBinding67 = FlaxGetter.plain(
  "end",
  flaxDurationType,
  _DurationRange_end,
);
const _flaxBinding68 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _DurationRange_startFraction,
);
const _flaxBinding69 = FlaxInstanceMethod.shared(
  _flaxBinding5,
  _DurationRange_endFraction,
);
const _flaxBinding70 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _DurationRange_toString,
);
const _flaxBinding71 = <FlaxParameter>[
  FlaxParameter.required("start", flaxDurationType),
  FlaxParameter.required("end", flaxDurationType),
];
const _flaxBinding72 = FlaxProxyMember(
  "startFraction",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding73 = FlaxProxyMember(
  "endFraction",
  0,
  _flaxBinding5,
  hasSuper: true,
);
const _flaxBinding74 = FlaxObjectBinding(
  "flax.video/video#type:DurationRange",
  [_flaxBinding66, _flaxBinding67],
  {
    "startFraction": _flaxBinding68,
    "endFraction": _flaxBinding69,
    "toString": _flaxBinding70,
    "@super:startFraction": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _DurationRange_super_startFraction,
    ),
    "@super:endFraction": FlaxInstanceMethod.shared(
      _flaxBinding5,
      _DurationRange_super_endFraction,
    ),
    "@super:toString": _flaxBinding24,
    "@super:get:start": _flaxBinding25,
    "@super:get:end": _flaxBinding26,
  },
  constructors: {"": _flaxBinding71, "@implementation": _flaxBinding71},
  create: _createDurationRange,
  matches: _isDurationRange,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding72,
    _flaxBinding73,
    _flaxBinding28,
    _flaxBinding30,
    _flaxBinding31,
  ]),
);
const _flaxBinding75 = FlaxGetter.plain(
  "fileContents",
  flaxStringType,
  _SubRipCaptionFile_fileContents,
);
const _flaxBinding76 = FlaxInstanceMethod.shared(
  _flaxBinding4,
  _FlaxProxyDispatch2_super_get_captions,
);
const _flaxBinding77 = <FlaxParameter>[
  FlaxParameter.required("fileContents", flaxStringType),
];
const _flaxBinding78 = FlaxProxyMember(
  "fileContents",
  1,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding79 = FlaxProxyMember(
  "captions",
  1,
  _flaxBinding4,
  hasSuper: true,
);
const _flaxBinding80 = FlaxObjectBinding(
  "flax.video/video#type:SubRipCaptionFile",
  [_flaxBinding75],
  {
    "@super:get:fileContents": FlaxInstanceMethod.shared(
      flaxStringCall,
      _SubRipCaptionFile_super_get_fileContents,
    ),
    "@super:get:captions": _flaxBinding76,
  },
  constructors: {"": _flaxBinding77, "@implementation": _flaxBinding77},
  create: _createSubRipCaptionFile,
  matches: _isSubRipCaptionFile,
  setters: [],
  supertypes: ["flax.video/video#type:ClosedCaptionFile", "dart:core::Object"],
  parent: _flaxBinding65,
  proxy: FlaxProxyBinding([_flaxBinding78, _flaxBinding79]),
);
const _flaxBinding81 = FlaxGetter.plain(
  "id",
  flaxStringType,
  _VideoAudioTrack_id,
);
const _flaxBinding82 = FlaxGetter.plain(
  "label",
  flaxNullableStringType,
  _VideoAudioTrack_label,
);
const _flaxBinding83 = FlaxGetter.plain(
  "language",
  flaxNullableStringType,
  _VideoAudioTrack_language,
);
const _flaxBinding84 = FlaxGetter.plain(
  "isSelected",
  flaxBoolType,
  _VideoAudioTrack_isSelected,
);
const _flaxBinding85 = FlaxGetter.plain(
  "bitrate",
  flaxNullableIntType,
  _VideoAudioTrack_bitrate,
);
const _flaxBinding86 = FlaxGetter.plain(
  "sampleRate",
  flaxNullableIntType,
  _VideoAudioTrack_sampleRate,
);
const _flaxBinding87 = FlaxGetter.plain(
  "channelCount",
  flaxNullableIntType,
  _VideoAudioTrack_channelCount,
);
const _flaxBinding88 = FlaxGetter.plain(
  "codec",
  flaxNullableStringType,
  _VideoAudioTrack_codec,
);
const _flaxBinding89 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _VideoAudioTrack_toString,
);
const _flaxBinding90 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _FlaxProxyDispatch3_super_get_id,
);
const _flaxBinding91 = FlaxInstanceMethod.shared(
  flaxNullableStringCall,
  _FlaxProxyDispatch3_super_get_label,
);
const _flaxBinding92 = FlaxInstanceMethod.shared(
  flaxBoolCall,
  _FlaxProxyDispatch3_super_get_isSelected,
);
const _flaxBinding93 = FlaxInstanceMethod.shared(
  flaxNullableIntCall,
  _FlaxProxyDispatch3_super_get_bitrate,
);
const _flaxBinding94 = FlaxInstanceMethod.shared(
  flaxNullableStringCall,
  _FlaxProxyDispatch3_super_get_codec,
);
const _flaxBinding95 = <FlaxParameter>[
  FlaxParameter.required("id", flaxStringType),
  FlaxParameter.required("isSelected", flaxBoolType),
  FlaxParameter("label", flaxNullableStringType, required: false),
  FlaxParameter("language", flaxNullableStringType, required: false),
  FlaxParameter("bitrate", flaxNullableIntType, required: false),
  FlaxParameter("sampleRate", flaxNullableIntType, required: false),
  FlaxParameter("channelCount", flaxNullableIntType, required: false),
  FlaxParameter("codec", flaxNullableStringType, required: false),
];
const _flaxBinding96 = FlaxProxyMember("id", 1, flaxStringCall, hasSuper: true);
const _flaxBinding97 = FlaxProxyMember(
  "label",
  1,
  flaxNullableStringCall,
  hasSuper: true,
);
const _flaxBinding98 = FlaxProxyMember(
  "language",
  1,
  flaxNullableStringCall,
  hasSuper: true,
);
const _flaxBinding99 = FlaxProxyMember(
  "isSelected",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding100 = FlaxProxyMember(
  "bitrate",
  1,
  flaxNullableIntCall,
  hasSuper: true,
);
const _flaxBinding101 = FlaxProxyMember(
  "sampleRate",
  1,
  flaxNullableIntCall,
  hasSuper: true,
);
const _flaxBinding102 = FlaxProxyMember(
  "channelCount",
  1,
  flaxNullableIntCall,
  hasSuper: true,
);
const _flaxBinding103 = FlaxProxyMember(
  "codec",
  1,
  flaxNullableStringCall,
  hasSuper: true,
);
const _flaxBinding104 = FlaxObjectBinding(
  "flax.video/video#type:VideoAudioTrack",
  [
    _flaxBinding81,
    _flaxBinding82,
    _flaxBinding83,
    _flaxBinding84,
    _flaxBinding85,
    _flaxBinding86,
    _flaxBinding87,
    _flaxBinding88,
  ],
  {
    "toString": _flaxBinding89,
    "@super:toString": _flaxBinding24,
    "@super:get:id": _flaxBinding90,
    "@super:get:label": _flaxBinding91,
    "@super:get:language": FlaxInstanceMethod.shared(
      flaxNullableStringCall,
      _VideoAudioTrack_super_get_language,
    ),
    "@super:get:isSelected": _flaxBinding92,
    "@super:get:bitrate": _flaxBinding93,
    "@super:get:sampleRate": FlaxInstanceMethod.shared(
      flaxNullableIntCall,
      _VideoAudioTrack_super_get_sampleRate,
    ),
    "@super:get:channelCount": FlaxInstanceMethod.shared(
      flaxNullableIntCall,
      _VideoAudioTrack_super_get_channelCount,
    ),
    "@super:get:codec": _flaxBinding94,
  },
  constructors: {"": _flaxBinding95, "@implementation": _flaxBinding95},
  create: _createVideoAudioTrack,
  matches: _isVideoAudioTrack,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding28,
    _flaxBinding96,
    _flaxBinding97,
    _flaxBinding98,
    _flaxBinding99,
    _flaxBinding100,
    _flaxBinding101,
    _flaxBinding102,
    _flaxBinding103,
  ]),
);
const _flaxBinding105 = FlaxTypeRef(
  "object",
  id: "flax.video/video#type:VideoPlayerController",
);
const _flaxBinding106 = FlaxGetter.plain(
  "controller",
  _flaxBinding105,
  _VideoPlayer_controller,
);
const _flaxBinding107 = FlaxGetter.plain(
  "key",
  _flaxBinding37,
  _VideoPlayer_key,
);
const _flaxBinding108 = FlaxTypeRef(
  "state",
  id: "flax.core/components#type:State",
  dartType: FlaxDartTypes.typeOf<api1.State<api.VideoPlayer>>,
);
const _flaxBinding109 = FlaxInstanceMethod.plain(
  _flaxBinding43,
  _flaxBinding108,
  _VideoPlayer_createState,
);
const _flaxBinding110 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_widgets#type:StatefulElement",
);
const _flaxBinding111 = FlaxInstanceMethod.plain(
  _flaxBinding43,
  _flaxBinding110,
  _VideoPlayer_createElement,
);
const _flaxBinding112 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _VideoPlayer_toStringShort,
);
const _flaxBinding113 = FlaxInstanceMethod.plain(
  _flaxBinding47,
  flaxVoidType,
  _VideoPlayer_debugFillProperties,
);
const _flaxBinding114 = FlaxInstanceMethod.plain(
  _flaxBinding50,
  flaxStringType,
  _VideoPlayer_toStringShallow,
);
const _flaxBinding115 = FlaxInstanceMethod.plain(
  _flaxBinding52,
  flaxStringType,
  _VideoPlayer_toStringDeep,
);
const _flaxBinding116 = FlaxInstanceMethod.plain(
  _flaxBinding55,
  _flaxBinding56,
  _VideoPlayer_toDiagnosticsNode,
);
const _flaxBinding117 = FlaxInstanceMethod.plain(
  _flaxBinding43,
  _flaxBinding59,
  _VideoPlayer_debugDescribeChildren,
);
const _flaxBinding118 = <FlaxParameter>[
  FlaxParameter.required("controller", _flaxBinding105),
  FlaxParameter("key", _flaxBinding37, required: false),
];
const _flaxBinding119 = FlaxObjectBinding(
  "flax.video/video#type:VideoPlayer",
  [_flaxBinding106, _flaxBinding107],
  {
    "createState": _flaxBinding109,
    "createElement": _flaxBinding111,
    "toStringShort": _flaxBinding112,
    "debugFillProperties": _flaxBinding113,
    "toStringShallow": _flaxBinding114,
    "toStringDeep": _flaxBinding115,
    "toDiagnosticsNode": _flaxBinding116,
    "debugDescribeChildren": _flaxBinding117,
  },
  constructors: {"": _flaxBinding118},
  create: _createVideoPlayer,
  matches: _isVideoPlayer,
  setters: [],
  supertypes: [
    "flax.core/components#type:StatefulWidget",
    "flax.core/sdk_widgets#type:Widget",
    "flax.core/sdk_foundation#type:DiagnosticableTree",
    "dart:core::Object",
    "flax.core/sdk_foundation#type:Diagnosticable",
  ],
);
const _flaxBinding120 = FlaxGetter.plain(
  "hasListeners",
  flaxBoolType,
  _VideoPlayerController_hasListeners,
);
const _flaxBinding121 = FlaxTypeRef(
  "object",
  id: "flax.video/video#type:VideoPlayerValue",
);
const _flaxBinding122 = FlaxGetter.plain(
  "value",
  _flaxBinding121,
  _VideoPlayerController_value,
);
const _flaxBinding123 = FlaxGetter.plain(
  "dataSource",
  flaxStringType,
  _VideoPlayerController_dataSource,
);
const _flaxBinding124 = FlaxTypeRef(
  "map",
  item: flaxStringType,
  key: flaxStringType,
  collection: FlaxCollectionBinding(
    "map:[String:][String:]",
    _collection6Create,
    _collection6Matches,
  ),
);
const _flaxBinding125 = FlaxGetter.plain(
  "httpHeaders",
  _flaxBinding124,
  _VideoPlayerController_httpHeaders,
);
const _flaxBinding126 = FlaxTypeRef(
  "enum",
  id: "flax.video/video#type:VideoFormat",
  nullable: true,
);
const _flaxBinding127 = FlaxGetter.plain(
  "formatHint",
  _flaxBinding126,
  _VideoPlayerController_formatHint,
);
const _flaxBinding128 = FlaxTypeRef(
  "enum",
  id: "flax.video/video#type:DataSourceType",
);
const _flaxBinding129 = FlaxGetter.plain(
  "dataSourceType",
  _flaxBinding128,
  _VideoPlayerController_dataSourceType,
);
const _flaxBinding130 = FlaxTypeRef(
  "object",
  id: "flax.video/video#type:VideoPlayerOptions",
  nullable: true,
);
const _flaxBinding131 = FlaxGetter.plain(
  "videoPlayerOptions",
  _flaxBinding130,
  _VideoPlayerController_videoPlayerOptions,
);
const _flaxBinding132 = FlaxGetter.plain(
  "package",
  flaxNullableStringType,
  _VideoPlayerController_package,
);
const _flaxBinding133 = FlaxTypeRef(
  "enum",
  id: "flax.video/video#type:VideoViewType",
);
const _flaxBinding134 = FlaxGetter.plain(
  "viewType",
  _flaxBinding133,
  _VideoPlayerController_viewType,
);
const _flaxBinding135 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Duration",
  nullable: true,
);
const _flaxBinding136 = FlaxTypeRef(
  "future",
  item: _flaxBinding135,
  future: FlaxFutureBinding(
    "object?:flax.core/flutter#type:Duration",
    _future0Adapt,
  ),
);
const _flaxBinding137 = FlaxGetter.plain(
  "position",
  _flaxBinding136,
  _VideoPlayerController_position,
);
const _flaxBinding138 = FlaxTypeRef(
  "object",
  id: "flax.video/video#type:ClosedCaptionFile",
);
const _flaxBinding139 = FlaxTypeRef(
  "future",
  nullable: true,
  item: _flaxBinding138,
  future: FlaxFutureBinding(
    "object:flax.video/video#type:ClosedCaptionFile",
    _future1Adapt,
  ),
);
const _flaxBinding140 = FlaxGetter.plain(
  "closedCaptionFile",
  _flaxBinding139,
  _VideoPlayerController_closedCaptionFile,
);
const _flaxBinding141 = FlaxSetter(
  "value",
  _flaxBinding121,
  _VideoPlayerController_set_value,
);
const _flaxBinding142 = <FlaxParameter>[
  FlaxParameter.required("listener", flaxVoidCallbackType),
];
const _flaxBinding143 = FlaxInstanceMethod.plain(
  _flaxBinding142,
  flaxVoidType,
  _VideoPlayerController_addListener,
);
const _flaxBinding144 = FlaxInstanceMethod.plain(
  _flaxBinding142,
  flaxVoidType,
  _VideoPlayerController_removeListener,
);
const _flaxBinding145 = FlaxTypeRef(
  "future",
  item: flaxVoidType,
  future: FlaxFutureBinding("void:", _future2Adapt),
);
const _flaxBinding146 = FlaxInstanceMethod.plain(
  _flaxBinding43,
  _flaxBinding145,
  _VideoPlayerController_dispose,
);
const _flaxBinding147 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _VideoPlayerController_toString,
);
const _flaxBinding148 = FlaxInstanceMethod.plain(
  _flaxBinding43,
  _flaxBinding145,
  _VideoPlayerController_initialize,
);
const _flaxBinding149 = FlaxInstanceMethod.plain(
  _flaxBinding43,
  _flaxBinding145,
  _VideoPlayerController_play,
);
const _flaxBinding150 = <FlaxParameter>[
  FlaxParameter.required("looping", flaxBoolType),
];
const _flaxBinding151 = FlaxInstanceMethod.plain(
  _flaxBinding150,
  _flaxBinding145,
  _VideoPlayerController_setLooping,
);
const _flaxBinding152 = <FlaxParameter>[
  FlaxParameter.required(
    "preventsDisplaySleepDuringVideoPlayback",
    flaxBoolType,
  ),
];
const _flaxBinding153 = FlaxInstanceMethod.plain(
  _flaxBinding152,
  _flaxBinding145,
  _VideoPlayerController_setPreventsDisplaySleepDuringVideoPlayback,
);
const _flaxBinding154 = FlaxInstanceMethod.plain(
  _flaxBinding43,
  _flaxBinding145,
  _VideoPlayerController_pause,
);
const _flaxBinding155 = <FlaxParameter>[
  FlaxParameter.required("position", flaxDurationType),
];
const _flaxBinding156 = FlaxInstanceMethod.plain(
  _flaxBinding155,
  _flaxBinding145,
  _VideoPlayerController_seekTo,
);
const _flaxBinding157 = <FlaxParameter>[
  FlaxParameter.required("volume", flaxDoubleType),
];
const _flaxBinding158 = FlaxInstanceMethod.plain(
  _flaxBinding157,
  _flaxBinding145,
  _VideoPlayerController_setVolume,
);
const _flaxBinding159 = <FlaxParameter>[
  FlaxParameter.required("speed", flaxDoubleType),
];
const _flaxBinding160 = FlaxInstanceMethod.plain(
  _flaxBinding159,
  _flaxBinding145,
  _VideoPlayerController_setPlaybackSpeed,
);
const _flaxBinding161 = <FlaxParameter>[
  FlaxParameter.required("offset", flaxDurationType),
];
const _flaxBinding162 = FlaxInstanceMethod.plain(
  _flaxBinding161,
  flaxVoidType,
  _VideoPlayerController_setCaptionOffset,
);
const _flaxBinding163 = <FlaxParameter>[
  FlaxParameter.required("closedCaptionFile", _flaxBinding139),
];
const _flaxBinding164 = FlaxInstanceMethod.plain(
  _flaxBinding163,
  _flaxBinding145,
  _VideoPlayerController_setClosedCaptionFile,
);
const _flaxBinding165 = FlaxTypeRef(
  "object",
  id: "flax.video/video#type:VideoAudioTrack",
);
const _flaxBinding166 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding165,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.video/video#type:VideoAudioTrack]",
    _collection8Create,
    _collection8Matches,
    restore: _collection8Restore,
  ),
);
const _flaxBinding167 = FlaxTypeRef(
  "list",
  item: _flaxBinding165,
  collection: FlaxCollectionBinding(
    "list:[object:flax.video/video#type:VideoAudioTrack]",
    _collection7Create,
    _collection7Matches,
  ),
  iterable: _flaxBinding166,
);
const _flaxBinding168 = FlaxTypeRef(
  "future",
  item: _flaxBinding167,
  future: FlaxFutureBinding(
    "list:[object:flax.video/video#type:VideoAudioTrack]",
    _future3Adapt,
  ),
);
const _flaxBinding169 = FlaxInstanceMethod.plain(
  _flaxBinding43,
  _flaxBinding168,
  _VideoPlayerController_getAudioTracks,
);
const _flaxBinding170 = <FlaxParameter>[
  FlaxParameter.required("trackId", flaxStringType),
];
const _flaxBinding171 = FlaxInstanceMethod.plain(
  _flaxBinding170,
  _flaxBinding145,
  _VideoPlayerController_selectAudioTrack,
);
const _flaxBinding172 = FlaxInstanceMethod.shared(
  flaxBoolCall,
  _VideoPlayerController_isAudioTrackSupportAvailable,
);
const _flaxBinding173 = FlaxTypeRef(
  "object",
  id: "flax.video/video#type:VideoTrack",
);
const _flaxBinding174 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding173,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.video/video#type:VideoTrack]",
    _collection10Create,
    _collection10Matches,
    restore: _collection10Restore,
  ),
);
const _flaxBinding175 = FlaxTypeRef(
  "list",
  item: _flaxBinding173,
  collection: FlaxCollectionBinding(
    "list:[object:flax.video/video#type:VideoTrack]",
    _collection9Create,
    _collection9Matches,
  ),
  iterable: _flaxBinding174,
);
const _flaxBinding176 = FlaxTypeRef(
  "future",
  item: _flaxBinding175,
  future: FlaxFutureBinding(
    "list:[object:flax.video/video#type:VideoTrack]",
    _future4Adapt,
  ),
);
const _flaxBinding177 = FlaxInstanceMethod.plain(
  _flaxBinding43,
  _flaxBinding176,
  _VideoPlayerController_getVideoTracks,
);
const _flaxBinding178 = FlaxTypeRef(
  "object",
  id: "flax.video/video#type:VideoTrack",
  nullable: true,
);
const _flaxBinding179 = <FlaxParameter>[
  FlaxParameter.required("track", _flaxBinding178),
];
const _flaxBinding180 = FlaxInstanceMethod.plain(
  _flaxBinding179,
  _flaxBinding145,
  _VideoPlayerController_selectVideoTrack,
);
const _flaxBinding181 = FlaxInstanceMethod.shared(
  flaxBoolCall,
  _VideoPlayerController_isVideoTrackSupportAvailable,
);
const _flaxBinding182 = <FlaxParameter>[
  FlaxParameter.required("dataSource", flaxStringType),
  FlaxParameter("package", flaxNullableStringType, required: false),
  FlaxParameter("closedCaptionFile", _flaxBinding139, required: false),
  FlaxParameter("videoPlayerOptions", _flaxBinding130, required: false),
  FlaxParameter(
    "viewType",
    _flaxBinding133,
    required: false,
    defaultValue: api.VideoViewType.textureView,
  ),
];
const _flaxBinding183 = <FlaxParameter>[
  FlaxParameter.required("dataSource", flaxStringType),
  FlaxParameter("formatHint", _flaxBinding126, required: false),
  FlaxParameter("closedCaptionFile", _flaxBinding139, required: false),
  FlaxParameter("videoPlayerOptions", _flaxBinding130, required: false),
  FlaxParameter(
    "httpHeaders",
    _flaxBinding124,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "viewType",
    _flaxBinding133,
    required: false,
    defaultValue: api.VideoViewType.textureView,
  ),
];
const _flaxBinding184 = FlaxTypeRef("object", id: "flax.core/flutter#type:Uri");
const _flaxBinding185 = <FlaxParameter>[
  FlaxParameter.required("url", _flaxBinding184),
  FlaxParameter("formatHint", _flaxBinding126, required: false),
  FlaxParameter("closedCaptionFile", _flaxBinding139, required: false),
  FlaxParameter("videoPlayerOptions", _flaxBinding130, required: false),
  FlaxParameter(
    "httpHeaders",
    _flaxBinding124,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "viewType",
    _flaxBinding133,
    required: false,
    defaultValue: api.VideoViewType.textureView,
  ),
];
const _flaxBinding186 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:File",
);
const _flaxBinding187 = <FlaxParameter>[
  FlaxParameter.required("file", _flaxBinding186),
  FlaxParameter("closedCaptionFile", _flaxBinding139, required: false),
  FlaxParameter("videoPlayerOptions", _flaxBinding130, required: false),
  FlaxParameter(
    "httpHeaders",
    _flaxBinding124,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "viewType",
    _flaxBinding133,
    required: false,
    defaultValue: api.VideoViewType.textureView,
  ),
];
const _flaxBinding188 = <FlaxParameter>[
  FlaxParameter.required("contentUri", _flaxBinding184),
  FlaxParameter("closedCaptionFile", _flaxBinding139, required: false),
  FlaxParameter("videoPlayerOptions", _flaxBinding130, required: false),
  FlaxParameter(
    "viewType",
    _flaxBinding133,
    required: false,
    defaultValue: api.VideoViewType.textureView,
  ),
];
const _flaxBinding189 = FlaxObjectBinding(
  "flax.video/video#type:VideoPlayerController",
  [
    _flaxBinding120,
    _flaxBinding122,
    _flaxBinding123,
    _flaxBinding125,
    _flaxBinding127,
    _flaxBinding129,
    _flaxBinding131,
    _flaxBinding132,
    _flaxBinding134,
    _flaxBinding137,
    _flaxBinding140,
  ],
  {
    "addListener": _flaxBinding143,
    "removeListener": _flaxBinding144,
    "dispose": _flaxBinding146,
    "toString": _flaxBinding147,
    "initialize": _flaxBinding148,
    "play": _flaxBinding149,
    "setLooping": _flaxBinding151,
    "setPreventsDisplaySleepDuringVideoPlayback": _flaxBinding153,
    "pause": _flaxBinding154,
    "seekTo": _flaxBinding156,
    "setVolume": _flaxBinding158,
    "setPlaybackSpeed": _flaxBinding160,
    "setCaptionOffset": _flaxBinding162,
    "setClosedCaptionFile": _flaxBinding164,
    "getAudioTracks": _flaxBinding169,
    "selectAudioTrack": _flaxBinding171,
    "isAudioTrackSupportAvailable": _flaxBinding172,
    "getVideoTracks": _flaxBinding177,
    "selectVideoTrack": _flaxBinding180,
    "isVideoTrackSupportAvailable": _flaxBinding181,
  },
  constructors: {
    "asset": _flaxBinding182,
    "network": _flaxBinding183,
    "networkUrl": _flaxBinding185,
    "file": _flaxBinding187,
    "contentUri": _flaxBinding188,
  },
  create: _createVideoPlayerController,
  matches: _isVideoPlayerController,
  setters: [_flaxBinding141],
  supertypes: [
    "flax.core/sdk_foundation#type:ValueNotifier",
    "flax.core/sdk_foundation#type:ChangeNotifier",
    "dart:core::Object",
    "flax.core/flutter#type:Listenable",
    "flax.core/flutter#type:ValueListenable",
  ],
  listenerPairs: {"addListener": "removeListener"},
);
const _flaxBinding190 = FlaxGetter.plain(
  "allowBackgroundPlayback",
  flaxBoolType,
  _VideoPlayerOptions_allowBackgroundPlayback,
);
const _flaxBinding191 = FlaxGetter.plain(
  "mixWithOthers",
  flaxBoolType,
  _VideoPlayerOptions_mixWithOthers,
);
const _flaxBinding192 = FlaxGetter.plain(
  "preventsDisplaySleepDuringVideoPlayback",
  flaxBoolType,
  _VideoPlayerOptions_preventsDisplaySleepDuringVideoPlayback,
);
const _flaxBinding193 = FlaxGetter.plain(
  "webOptions",
  _flaxBinding6,
  _VideoPlayerOptions_webOptions,
);
const _flaxBinding194 = FlaxGetter.plain(
  "backBufferDurationMs",
  flaxNullableIntType,
  _VideoPlayerOptions_backBufferDurationMs,
);
const _flaxBinding195 = FlaxInstanceMethod.shared(
  flaxBoolCall,
  _FlaxProxyDispatch4_super_get_preventsDisplaySleepDuringVideoPlayback,
);
const _flaxBinding196 = <FlaxParameter>[
  FlaxParameter(
    "mixWithOthers",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "allowBackgroundPlayback",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "preventsDisplaySleepDuringVideoPlayback",
    flaxBoolType,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter("webOptions", _flaxBinding6, required: false),
  FlaxParameter("backBufferDurationMs", flaxNullableIntType, required: false),
];
const _flaxBinding197 = FlaxProxyMember(
  "allowBackgroundPlayback",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding198 = FlaxProxyMember(
  "mixWithOthers",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding199 = FlaxProxyMember(
  "preventsDisplaySleepDuringVideoPlayback",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding200 = FlaxProxyMember(
  "webOptions",
  1,
  _flaxBinding7,
  hasSuper: true,
);
const _flaxBinding201 = FlaxProxyMember(
  "backBufferDurationMs",
  1,
  flaxNullableIntCall,
  hasSuper: true,
);
const _flaxBinding202 = FlaxObjectBinding(
  "flax.video/video#type:VideoPlayerOptions",
  [
    _flaxBinding190,
    _flaxBinding191,
    _flaxBinding192,
    _flaxBinding193,
    _flaxBinding194,
  ],
  {
    "@super:get:allowBackgroundPlayback": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _VideoPlayerOptions_super_get_allowBackgroundPlayback,
    ),
    "@super:get:mixWithOthers": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _VideoPlayerOptions_super_get_mixWithOthers,
    ),
    "@super:get:preventsDisplaySleepDuringVideoPlayback": _flaxBinding195,
    "@super:get:webOptions": FlaxInstanceMethod.shared(
      _flaxBinding7,
      _VideoPlayerOptions_super_get_webOptions,
    ),
    "@super:get:backBufferDurationMs": FlaxInstanceMethod.shared(
      flaxNullableIntCall,
      _VideoPlayerOptions_super_get_backBufferDurationMs,
    ),
  },
  constructors: {"": _flaxBinding196, "@implementation": _flaxBinding196},
  create: _createVideoPlayerOptions,
  matches: _isVideoPlayerOptions,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding197,
    _flaxBinding198,
    _flaxBinding199,
    _flaxBinding200,
    _flaxBinding201,
  ]),
);
const _flaxBinding203 = FlaxGetter.plain(
  "duration",
  flaxDurationType,
  _VideoPlayerValue_duration,
);
const _flaxBinding204 = FlaxGetter.plain(
  "position",
  flaxDurationType,
  _VideoPlayerValue_position,
);
const _flaxBinding205 = FlaxGetter.plain(
  "caption",
  _flaxBinding1,
  _VideoPlayerValue_caption,
);
const _flaxBinding206 = FlaxGetter.plain(
  "captionOffset",
  flaxDurationType,
  _VideoPlayerValue_captionOffset,
);
const _flaxBinding207 = FlaxGetter.plain(
  "buffered",
  _flaxBinding11,
  _VideoPlayerValue_buffered,
);
const _flaxBinding208 = FlaxGetter.plain(
  "isPlaying",
  flaxBoolType,
  _VideoPlayerValue_isPlaying,
);
const _flaxBinding209 = FlaxGetter.plain(
  "isLooping",
  flaxBoolType,
  _VideoPlayerValue_isLooping,
);
const _flaxBinding210 = FlaxGetter.plain(
  "isBuffering",
  flaxBoolType,
  _VideoPlayerValue_isBuffering,
);
const _flaxBinding211 = FlaxGetter.plain(
  "volume",
  flaxDoubleType,
  _VideoPlayerValue_volume,
);
const _flaxBinding212 = FlaxGetter.plain(
  "playbackSpeed",
  flaxDoubleType,
  _VideoPlayerValue_playbackSpeed,
);
const _flaxBinding213 = FlaxGetter.plain(
  "errorDescription",
  flaxNullableStringType,
  _VideoPlayerValue_errorDescription,
);
const _flaxBinding214 = FlaxGetter.plain(
  "isCompleted",
  flaxBoolType,
  _VideoPlayerValue_isCompleted,
);
const _flaxBinding215 = FlaxGetter.plain(
  "preventsDisplaySleepDuringVideoPlayback",
  flaxBoolType,
  _VideoPlayerValue_preventsDisplaySleepDuringVideoPlayback,
);
const _flaxBinding216 = FlaxGetter.plain(
  "size",
  flaxSizeType,
  _VideoPlayerValue_size,
);
const _flaxBinding217 = FlaxGetter.plain(
  "rotationCorrection",
  flaxIntType,
  _VideoPlayerValue_rotationCorrection,
);
const _flaxBinding218 = FlaxGetter.plain(
  "isInitialized",
  flaxBoolType,
  _VideoPlayerValue_isInitialized,
);
const _flaxBinding219 = FlaxGetter.plain(
  "hasError",
  flaxBoolType,
  _VideoPlayerValue_hasError,
);
const _flaxBinding220 = FlaxGetter.plain(
  "aspectRatio",
  flaxDoubleType,
  _VideoPlayerValue_aspectRatio,
);
const _flaxBinding221 = FlaxTypeRef(
  "list",
  nullable: true,
  item: _flaxBinding9,
  collection: FlaxCollectionBinding(
    "list:[object:flax.video/video#type:DurationRange]",
    _collection2Create,
    _collection2Matches,
  ),
  iterable: _flaxBinding10,
);
const _flaxBinding222 = FlaxTypeRef(
  "object",
  id: "flax.video/video#type:Caption",
  nullable: true,
);
const _flaxBinding223 = <FlaxParameter>[
  FlaxParameter("buffered", _flaxBinding221, required: false),
  FlaxParameter("caption", _flaxBinding222, required: false),
  FlaxParameter("captionOffset", _flaxBinding135, required: false),
  FlaxParameter("duration", _flaxBinding135, required: false),
  FlaxParameter(
    "errorDescription",
    flaxNullableStringType,
    required: false,
    defaultValue: 'defaultErrorDescription',
  ),
  FlaxParameter("isBuffering", flaxNullableBoolType, required: false),
  FlaxParameter("isCompleted", flaxNullableBoolType, required: false),
  FlaxParameter("isInitialized", flaxNullableBoolType, required: false),
  FlaxParameter("isLooping", flaxNullableBoolType, required: false),
  FlaxParameter("isPlaying", flaxNullableBoolType, required: false),
  FlaxParameter("playbackSpeed", flaxNullableDoubleType, required: false),
  FlaxParameter("position", _flaxBinding135, required: false),
  FlaxParameter(
    "preventsDisplaySleepDuringVideoPlayback",
    flaxNullableBoolType,
    required: false,
  ),
  FlaxParameter("rotationCorrection", flaxNullableIntType, required: false),
  FlaxParameter("size", flaxNullableSizeType, required: false),
  FlaxParameter("volume", flaxNullableDoubleType, required: false),
];
const _flaxBinding224 = FlaxInstanceMethod.plain(
  _flaxBinding223,
  _flaxBinding121,
  _VideoPlayerValue_copyWith,
);
const _flaxBinding225 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _VideoPlayerValue_toString,
);
const _flaxBinding226 = <FlaxParameter>[
  FlaxParameter.required("duration", flaxDurationType),
  FlaxParameter("size", flaxSizeType, required: false, omitWhenAbsent: true),
  FlaxParameter(
    "position",
    flaxDurationType,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "caption",
    _flaxBinding1,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "captionOffset",
    flaxDurationType,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "buffered",
    _flaxBinding11,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "isInitialized",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "isPlaying",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "isLooping",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "isBuffering",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter("volume", flaxDoubleType, required: false, defaultValue: 1.0),
  FlaxParameter(
    "playbackSpeed",
    flaxDoubleType,
    required: false,
    defaultValue: 1.0,
  ),
  FlaxParameter(
    "rotationCorrection",
    flaxIntType,
    required: false,
    defaultValue: 0,
  ),
  FlaxParameter("errorDescription", flaxNullableStringType, required: false),
  FlaxParameter(
    "isCompleted",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "preventsDisplaySleepDuringVideoPlayback",
    flaxBoolType,
    required: false,
    defaultValue: true,
  ),
];
const _flaxBinding227 = <FlaxParameter>[
  FlaxParameter.required("errorDescription", flaxStringType),
];
const _flaxBinding228 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain(
      "duration",
      _flaxBinding135,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "size",
      flaxNullableSizeType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "position",
      _flaxBinding135,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "caption",
      _flaxBinding222,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "captionOffset",
      _flaxBinding135,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "buffered",
      _flaxBinding221,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "isInitialized",
      flaxNullableBoolType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "isPlaying",
      flaxNullableBoolType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "isLooping",
      flaxNullableBoolType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "isBuffering",
      flaxNullableBoolType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "volume",
      flaxNullableDoubleType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "playbackSpeed",
      flaxNullableDoubleType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "rotationCorrection",
      flaxNullableIntType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "errorDescription",
      flaxNullableStringType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "isCompleted",
      flaxNullableBoolType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "preventsDisplaySleepDuringVideoPlayback",
      flaxNullableBoolType,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding121,
  id: "callback:<>(n:o:duration:object?:flax.core/flutter#type:Duration,n:o:size:object?:flax.core/flutter#type:Size,n:o:position:object?:flax.core/flutter#type:Duration,n:o:caption:object?:flax.video/video#type:Caption,n:o:captionOffset:object?:flax.core/flutter#type:Duration,n:o:buffered:list?:[object:flax.video/video#type:DurationRange],n:o:isInitialized:bool?:,n:o:isPlaying:bool?:,n:o:isLooping:bool?:,n:o:isBuffering:bool?:,n:o:volume:double?:,n:o:playbackSpeed:double?:,n:o:rotationCorrection:int?:,n:o:errorDescription:String?:,n:o:isCompleted:bool?:,n:o:preventsDisplaySleepDuringVideoPlayback:bool?:)->object:flax.video/video#type:VideoPlayerValue",
);
const _flaxBinding229 = FlaxProxyMember(
  "copyWith",
  0,
  _flaxBinding228,
  hasSuper: true,
);
const _flaxBinding230 = FlaxProxyMember(
  "duration",
  1,
  _flaxBinding0,
  hasSuper: true,
);
const _flaxBinding231 = FlaxProxyMember(
  "position",
  1,
  _flaxBinding0,
  hasSuper: true,
);
const _flaxBinding232 = FlaxProxyMember(
  "caption",
  1,
  _flaxBinding8,
  hasSuper: true,
);
const _flaxBinding233 = FlaxProxyMember(
  "captionOffset",
  1,
  _flaxBinding0,
  hasSuper: true,
);
const _flaxBinding234 = FlaxProxyMember(
  "buffered",
  1,
  _flaxBinding12,
  hasSuper: true,
);
const _flaxBinding235 = FlaxProxyMember(
  "isPlaying",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding236 = FlaxProxyMember(
  "isLooping",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding237 = FlaxProxyMember(
  "isBuffering",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding238 = FlaxProxyMember(
  "volume",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding239 = FlaxProxyMember(
  "playbackSpeed",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding240 = FlaxProxyMember(
  "errorDescription",
  1,
  flaxNullableStringCall,
  hasSuper: true,
);
const _flaxBinding241 = FlaxProxyMember(
  "isCompleted",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding242 = FlaxProxyMember(
  "size",
  1,
  _flaxBinding13,
  hasSuper: true,
);
const _flaxBinding243 = FlaxProxyMember(
  "rotationCorrection",
  1,
  flaxIntCall,
  hasSuper: true,
);
const _flaxBinding244 = FlaxProxyMember(
  "isInitialized",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding245 = FlaxProxyMember(
  "hasError",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding246 = FlaxProxyMember(
  "aspectRatio",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding247 = FlaxObjectBinding(
  "flax.video/video#type:VideoPlayerValue",
  [
    _flaxBinding203,
    _flaxBinding204,
    _flaxBinding205,
    _flaxBinding206,
    _flaxBinding207,
    _flaxBinding208,
    _flaxBinding209,
    _flaxBinding210,
    _flaxBinding211,
    _flaxBinding212,
    _flaxBinding213,
    _flaxBinding214,
    _flaxBinding215,
    _flaxBinding216,
    _flaxBinding217,
    _flaxBinding218,
    _flaxBinding219,
    _flaxBinding220,
  ],
  {
    "copyWith": _flaxBinding224,
    "toString": _flaxBinding225,
    "@super:copyWith": FlaxInstanceMethod.plain(
      _flaxBinding223,
      _flaxBinding121,
      _VideoPlayerValue_super_copyWith,
    ),
    "@super:toString": _flaxBinding24,
    "@super:get:duration": FlaxInstanceMethod.shared(
      _flaxBinding0,
      _VideoPlayerValue_super_get_duration,
    ),
    "@super:get:position": FlaxInstanceMethod.shared(
      _flaxBinding0,
      _VideoPlayerValue_super_get_position,
    ),
    "@super:get:caption": FlaxInstanceMethod.shared(
      _flaxBinding8,
      _VideoPlayerValue_super_get_caption,
    ),
    "@super:get:captionOffset": FlaxInstanceMethod.shared(
      _flaxBinding0,
      _VideoPlayerValue_super_get_captionOffset,
    ),
    "@super:get:buffered": FlaxInstanceMethod.shared(
      _flaxBinding12,
      _VideoPlayerValue_super_get_buffered,
    ),
    "@super:get:isPlaying": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _VideoPlayerValue_super_get_isPlaying,
    ),
    "@super:get:isLooping": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _VideoPlayerValue_super_get_isLooping,
    ),
    "@super:get:isBuffering": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _VideoPlayerValue_super_get_isBuffering,
    ),
    "@super:get:volume": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _VideoPlayerValue_super_get_volume,
    ),
    "@super:get:playbackSpeed": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _VideoPlayerValue_super_get_playbackSpeed,
    ),
    "@super:get:errorDescription": FlaxInstanceMethod.shared(
      flaxNullableStringCall,
      _VideoPlayerValue_super_get_errorDescription,
    ),
    "@super:get:isCompleted": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _VideoPlayerValue_super_get_isCompleted,
    ),
    "@super:get:preventsDisplaySleepDuringVideoPlayback": _flaxBinding195,
    "@super:get:size": FlaxInstanceMethod.shared(
      _flaxBinding13,
      _VideoPlayerValue_super_get_size,
    ),
    "@super:get:rotationCorrection": FlaxInstanceMethod.shared(
      flaxIntCall,
      _VideoPlayerValue_super_get_rotationCorrection,
    ),
    "@super:get:isInitialized": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _VideoPlayerValue_super_get_isInitialized,
    ),
    "@super:get:hasError": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _VideoPlayerValue_super_get_hasError,
    ),
    "@super:get:aspectRatio": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _VideoPlayerValue_super_get_aspectRatio,
    ),
  },
  constructors: {
    "": _flaxBinding226,
    "uninitialized": _flaxBinding43,
    "erroneous": _flaxBinding227,
    "@implementation": _flaxBinding226,
    "@implementation:uninitialized": _flaxBinding43,
    "@implementation:erroneous": _flaxBinding227,
  },
  create: _createVideoPlayerValue,
  matches: _isVideoPlayerValue,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding229,
    _flaxBinding28,
    _flaxBinding230,
    _flaxBinding231,
    _flaxBinding232,
    _flaxBinding233,
    _flaxBinding234,
    _flaxBinding235,
    _flaxBinding236,
    _flaxBinding237,
    _flaxBinding238,
    _flaxBinding239,
    _flaxBinding240,
    _flaxBinding241,
    _flaxBinding199,
    _flaxBinding242,
    _flaxBinding243,
    _flaxBinding244,
    _flaxBinding245,
    _flaxBinding246,
  ]),
);
const _flaxBinding248 = FlaxGetter.plain(
  "controls",
  _flaxBinding14,
  _VideoPlayerWebOptions_controls,
);
const _flaxBinding249 = FlaxGetter.plain(
  "allowContextMenu",
  flaxBoolType,
  _VideoPlayerWebOptions_allowContextMenu,
);
const _flaxBinding250 = FlaxGetter.plain(
  "allowRemotePlayback",
  flaxBoolType,
  _VideoPlayerWebOptions_allowRemotePlayback,
);
const _flaxBinding251 = FlaxGetter.plain(
  "poster",
  _flaxBinding16,
  _VideoPlayerWebOptions_poster,
);
const _flaxBinding252 = <FlaxParameter>[
  FlaxParameter(
    "controls",
    _flaxBinding14,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "allowContextMenu",
    flaxBoolType,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter(
    "allowRemotePlayback",
    flaxBoolType,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter("poster", _flaxBinding16, required: false),
];
const _flaxBinding253 = FlaxProxyMember(
  "controls",
  1,
  _flaxBinding15,
  hasSuper: true,
);
const _flaxBinding254 = FlaxProxyMember(
  "allowContextMenu",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding255 = FlaxProxyMember(
  "allowRemotePlayback",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding256 = FlaxProxyMember(
  "poster",
  1,
  _flaxBinding17,
  hasSuper: true,
);
const _flaxBinding257 = FlaxObjectBinding(
  "flax.video/video#type:VideoPlayerWebOptions",
  [_flaxBinding248, _flaxBinding249, _flaxBinding250, _flaxBinding251],
  {
    "@super:get:controls": FlaxInstanceMethod.shared(
      _flaxBinding15,
      _VideoPlayerWebOptions_super_get_controls,
    ),
    "@super:get:allowContextMenu": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _VideoPlayerWebOptions_super_get_allowContextMenu,
    ),
    "@super:get:allowRemotePlayback": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _VideoPlayerWebOptions_super_get_allowRemotePlayback,
    ),
    "@super:get:poster": FlaxInstanceMethod.shared(
      _flaxBinding17,
      _VideoPlayerWebOptions_super_get_poster,
    ),
  },
  constructors: {"": _flaxBinding252, "@implementation": _flaxBinding252},
  create: _createVideoPlayerWebOptions,
  matches: _isVideoPlayerWebOptions,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding253,
    _flaxBinding254,
    _flaxBinding255,
    _flaxBinding256,
  ]),
);
const _flaxBinding258 = FlaxGetter.plain(
  "enabled",
  flaxBoolType,
  _VideoPlayerWebOptionsControls_enabled,
);
const _flaxBinding259 = FlaxGetter.plain(
  "allowDownload",
  flaxBoolType,
  _VideoPlayerWebOptionsControls_allowDownload,
);
const _flaxBinding260 = FlaxGetter.plain(
  "allowFullscreen",
  flaxBoolType,
  _VideoPlayerWebOptionsControls_allowFullscreen,
);
const _flaxBinding261 = FlaxGetter.plain(
  "allowPlaybackRate",
  flaxBoolType,
  _VideoPlayerWebOptionsControls_allowPlaybackRate,
);
const _flaxBinding262 = FlaxGetter.plain(
  "allowPictureInPicture",
  flaxBoolType,
  _VideoPlayerWebOptionsControls_allowPictureInPicture,
);
const _flaxBinding263 = FlaxGetter.plain(
  "controlsList",
  flaxStringType,
  _VideoPlayerWebOptionsControls_controlsList,
);
const _flaxBinding264 = FlaxProxyMember("enabled", 1, flaxBoolCall);
const _flaxBinding265 = FlaxProxyMember("allowDownload", 1, flaxBoolCall);
const _flaxBinding266 = FlaxProxyMember("allowFullscreen", 1, flaxBoolCall);
const _flaxBinding267 = FlaxProxyMember("allowPlaybackRate", 1, flaxBoolCall);
const _flaxBinding268 = FlaxProxyMember(
  "allowPictureInPicture",
  1,
  flaxBoolCall,
);
const _flaxBinding269 = FlaxProxyMember("controlsList", 1, flaxStringCall);
const _flaxBinding270 = FlaxObjectBinding(
  "flax.video/video#type:VideoPlayerWebOptionsControls",
  [
    _flaxBinding258,
    _flaxBinding259,
    _flaxBinding260,
    _flaxBinding261,
    _flaxBinding262,
    _flaxBinding263,
  ],
  {},
  constructors: {"@implementation": _flaxBinding43},
  create: _createVideoPlayerWebOptionsControls,
  matches: _isVideoPlayerWebOptionsControls,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding264,
    _flaxBinding265,
    _flaxBinding266,
    _flaxBinding267,
    _flaxBinding268,
    _flaxBinding269,
  ]),
);
const _flaxBinding271 = FlaxGetter.plain(
  "playedColor",
  flaxColorType,
  _VideoProgressColors_playedColor,
);
const _flaxBinding272 = FlaxGetter.plain(
  "bufferedColor",
  flaxColorType,
  _VideoProgressColors_bufferedColor,
);
const _flaxBinding273 = FlaxGetter.plain(
  "backgroundColor",
  flaxColorType,
  _VideoProgressColors_backgroundColor,
);
const _flaxBinding274 = <FlaxParameter>[
  FlaxParameter(
    "playedColor",
    flaxColorType,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "bufferedColor",
    flaxColorType,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "backgroundColor",
    flaxColorType,
    required: false,
    omitWhenAbsent: true,
  ),
];
const _flaxBinding275 = FlaxProxyMember(
  "playedColor",
  1,
  _flaxBinding18,
  hasSuper: true,
);
const _flaxBinding276 = FlaxProxyMember(
  "bufferedColor",
  1,
  _flaxBinding18,
  hasSuper: true,
);
const _flaxBinding277 = FlaxProxyMember(
  "backgroundColor",
  1,
  _flaxBinding18,
  hasSuper: true,
);
const _flaxBinding278 = FlaxObjectBinding(
  "flax.video/video#type:VideoProgressColors",
  [_flaxBinding271, _flaxBinding272, _flaxBinding273],
  {
    "@super:get:playedColor": FlaxInstanceMethod.shared(
      _flaxBinding18,
      _VideoProgressColors_super_get_playedColor,
    ),
    "@super:get:bufferedColor": FlaxInstanceMethod.shared(
      _flaxBinding18,
      _VideoProgressColors_super_get_bufferedColor,
    ),
    "@super:get:backgroundColor": FlaxInstanceMethod.shared(
      _flaxBinding18,
      _VideoProgressColors_super_get_backgroundColor,
    ),
  },
  constructors: {"": _flaxBinding274, "@implementation": _flaxBinding274},
  create: _createVideoProgressColors,
  matches: _isVideoProgressColors,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([_flaxBinding275, _flaxBinding276, _flaxBinding277]),
);
const _flaxBinding279 = FlaxGetter.plain(
  "controller",
  _flaxBinding105,
  _VideoProgressIndicator_controller,
);
const _flaxBinding280 = FlaxTypeRef(
  "object",
  id: "flax.video/video#type:VideoProgressColors",
);
const _flaxBinding281 = FlaxGetter.plain(
  "colors",
  _flaxBinding280,
  _VideoProgressIndicator_colors,
);
const _flaxBinding282 = FlaxGetter.plain(
  "allowScrubbing",
  flaxBoolType,
  _VideoProgressIndicator_allowScrubbing,
);
const _flaxBinding283 = FlaxGetter.plain(
  "padding",
  flaxEdgeInsetsType,
  _VideoProgressIndicator_padding,
);
const _flaxBinding284 = FlaxGetter.plain(
  "key",
  _flaxBinding37,
  _VideoProgressIndicator_key,
);
const _flaxBinding285 = FlaxTypeRef(
  "state",
  id: "flax.core/components#type:State",
  dartType: FlaxDartTypes.typeOf<api1.State<api.VideoProgressIndicator>>,
);
const _flaxBinding286 = FlaxInstanceMethod.plain(
  _flaxBinding43,
  _flaxBinding285,
  _VideoProgressIndicator_createState,
);
const _flaxBinding287 = FlaxInstanceMethod.plain(
  _flaxBinding43,
  _flaxBinding110,
  _VideoProgressIndicator_createElement,
);
const _flaxBinding288 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _VideoProgressIndicator_toStringShort,
);
const _flaxBinding289 = FlaxInstanceMethod.plain(
  _flaxBinding47,
  flaxVoidType,
  _VideoProgressIndicator_debugFillProperties,
);
const _flaxBinding290 = FlaxInstanceMethod.plain(
  _flaxBinding50,
  flaxStringType,
  _VideoProgressIndicator_toStringShallow,
);
const _flaxBinding291 = FlaxInstanceMethod.plain(
  _flaxBinding52,
  flaxStringType,
  _VideoProgressIndicator_toStringDeep,
);
const _flaxBinding292 = FlaxInstanceMethod.plain(
  _flaxBinding55,
  _flaxBinding56,
  _VideoProgressIndicator_toDiagnosticsNode,
);
const _flaxBinding293 = FlaxInstanceMethod.plain(
  _flaxBinding43,
  _flaxBinding59,
  _VideoProgressIndicator_debugDescribeChildren,
);
const _flaxBinding294 = <FlaxParameter>[
  FlaxParameter.required("controller", _flaxBinding105),
  FlaxParameter("key", _flaxBinding37, required: false),
  FlaxParameter(
    "colors",
    _flaxBinding280,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter.required("allowScrubbing", flaxBoolType),
  FlaxParameter(
    "padding",
    flaxEdgeInsetsType,
    required: false,
    omitWhenAbsent: true,
  ),
];
const _flaxBinding295 = FlaxObjectBinding(
  "flax.video/video#type:VideoProgressIndicator",
  [
    _flaxBinding279,
    _flaxBinding281,
    _flaxBinding282,
    _flaxBinding283,
    _flaxBinding284,
  ],
  {
    "createState": _flaxBinding286,
    "createElement": _flaxBinding287,
    "toStringShort": _flaxBinding288,
    "debugFillProperties": _flaxBinding289,
    "toStringShallow": _flaxBinding290,
    "toStringDeep": _flaxBinding291,
    "toDiagnosticsNode": _flaxBinding292,
    "debugDescribeChildren": _flaxBinding293,
  },
  constructors: {"": _flaxBinding294},
  create: _createVideoProgressIndicator,
  matches: _isVideoProgressIndicator,
  setters: [],
  supertypes: [
    "flax.core/components#type:StatefulWidget",
    "flax.core/sdk_widgets#type:Widget",
    "flax.core/sdk_foundation#type:DiagnosticableTree",
    "dart:core::Object",
    "flax.core/sdk_foundation#type:Diagnosticable",
  ],
);
const _flaxBinding296 = FlaxGetter.plain(
  "child",
  flaxWidgetType,
  _VideoScrubber_child,
);
const _flaxBinding297 = FlaxGetter.plain(
  "controller",
  _flaxBinding105,
  _VideoScrubber_controller,
);
const _flaxBinding298 = FlaxGetter.plain(
  "key",
  _flaxBinding37,
  _VideoScrubber_key,
);
const _flaxBinding299 = FlaxTypeRef(
  "state",
  id: "flax.core/components#type:State",
  dartType: FlaxDartTypes.typeOf<api1.State<api.VideoScrubber>>,
);
const _flaxBinding300 = FlaxInstanceMethod.plain(
  _flaxBinding43,
  _flaxBinding299,
  _VideoScrubber_createState,
);
const _flaxBinding301 = FlaxInstanceMethod.plain(
  _flaxBinding43,
  _flaxBinding110,
  _VideoScrubber_createElement,
);
const _flaxBinding302 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _VideoScrubber_toStringShort,
);
const _flaxBinding303 = FlaxInstanceMethod.plain(
  _flaxBinding47,
  flaxVoidType,
  _VideoScrubber_debugFillProperties,
);
const _flaxBinding304 = FlaxInstanceMethod.plain(
  _flaxBinding50,
  flaxStringType,
  _VideoScrubber_toStringShallow,
);
const _flaxBinding305 = FlaxInstanceMethod.plain(
  _flaxBinding52,
  flaxStringType,
  _VideoScrubber_toStringDeep,
);
const _flaxBinding306 = FlaxInstanceMethod.plain(
  _flaxBinding55,
  _flaxBinding56,
  _VideoScrubber_toDiagnosticsNode,
);
const _flaxBinding307 = FlaxInstanceMethod.plain(
  _flaxBinding43,
  _flaxBinding59,
  _VideoScrubber_debugDescribeChildren,
);
const _flaxBinding308 = <FlaxParameter>[
  FlaxParameter("key", _flaxBinding37, required: false),
  FlaxParameter.required("child", flaxWidgetType),
  FlaxParameter.required("controller", _flaxBinding105),
];
const _flaxBinding309 = FlaxObjectBinding(
  "flax.video/video#type:VideoScrubber",
  [_flaxBinding296, _flaxBinding297, _flaxBinding298],
  {
    "createState": _flaxBinding300,
    "createElement": _flaxBinding301,
    "toStringShort": _flaxBinding302,
    "debugFillProperties": _flaxBinding303,
    "toStringShallow": _flaxBinding304,
    "toStringDeep": _flaxBinding305,
    "toDiagnosticsNode": _flaxBinding306,
    "debugDescribeChildren": _flaxBinding307,
  },
  constructors: {"": _flaxBinding308},
  create: _createVideoScrubber,
  matches: _isVideoScrubber,
  setters: [],
  supertypes: [
    "flax.core/components#type:StatefulWidget",
    "flax.core/sdk_widgets#type:Widget",
    "flax.core/sdk_foundation#type:DiagnosticableTree",
    "dart:core::Object",
    "flax.core/sdk_foundation#type:Diagnosticable",
  ],
);
const _flaxBinding310 = FlaxGetter.plain("id", flaxStringType, _VideoTrack_id);
const _flaxBinding311 = FlaxGetter.plain(
  "isSelected",
  flaxBoolType,
  _VideoTrack_isSelected,
);
const _flaxBinding312 = FlaxGetter.plain(
  "label",
  flaxNullableStringType,
  _VideoTrack_label,
);
const _flaxBinding313 = FlaxGetter.plain(
  "bitrate",
  flaxNullableIntType,
  _VideoTrack_bitrate,
);
const _flaxBinding314 = FlaxGetter.plain(
  "width",
  flaxNullableIntType,
  _VideoTrack_width,
);
const _flaxBinding315 = FlaxGetter.plain(
  "height",
  flaxNullableIntType,
  _VideoTrack_height,
);
const _flaxBinding316 = FlaxGetter.plain(
  "frameRate",
  flaxNullableDoubleType,
  _VideoTrack_frameRate,
);
const _flaxBinding317 = FlaxGetter.plain(
  "codec",
  flaxNullableStringType,
  _VideoTrack_codec,
);
const _flaxBinding318 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _VideoTrack_toString,
);
const _flaxBinding319 = <FlaxParameter>[
  FlaxParameter.required("id", flaxStringType),
  FlaxParameter.required("isSelected", flaxBoolType),
  FlaxParameter("label", flaxNullableStringType, required: false),
  FlaxParameter("bitrate", flaxNullableIntType, required: false),
  FlaxParameter("width", flaxNullableIntType, required: false),
  FlaxParameter("height", flaxNullableIntType, required: false),
  FlaxParameter("frameRate", flaxNullableDoubleType, required: false),
  FlaxParameter("codec", flaxNullableStringType, required: false),
];
const _flaxBinding320 = FlaxProxyMember(
  "width",
  1,
  flaxNullableIntCall,
  hasSuper: true,
);
const _flaxBinding321 = FlaxProxyMember(
  "height",
  1,
  flaxNullableIntCall,
  hasSuper: true,
);
const _flaxBinding322 = FlaxProxyMember(
  "frameRate",
  1,
  flaxNullableDoubleCall,
  hasSuper: true,
);
const _flaxBinding323 = FlaxObjectBinding(
  "flax.video/video#type:VideoTrack",
  [
    _flaxBinding310,
    _flaxBinding311,
    _flaxBinding312,
    _flaxBinding313,
    _flaxBinding314,
    _flaxBinding315,
    _flaxBinding316,
    _flaxBinding317,
  ],
  {
    "toString": _flaxBinding318,
    "@super:toString": _flaxBinding24,
    "@super:get:id": _flaxBinding90,
    "@super:get:isSelected": _flaxBinding92,
    "@super:get:label": _flaxBinding91,
    "@super:get:bitrate": _flaxBinding93,
    "@super:get:width": FlaxInstanceMethod.shared(
      flaxNullableIntCall,
      _VideoTrack_super_get_width,
    ),
    "@super:get:height": FlaxInstanceMethod.shared(
      flaxNullableIntCall,
      _VideoTrack_super_get_height,
    ),
    "@super:get:frameRate": FlaxInstanceMethod.shared(
      flaxNullableDoubleCall,
      _VideoTrack_super_get_frameRate,
    ),
    "@super:get:codec": _flaxBinding94,
  },
  constructors: {"": _flaxBinding319, "@implementation": _flaxBinding319},
  create: _createVideoTrack,
  matches: _isVideoTrack,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding28,
    _flaxBinding96,
    _flaxBinding99,
    _flaxBinding97,
    _flaxBinding100,
    _flaxBinding320,
    _flaxBinding321,
    _flaxBinding322,
    _flaxBinding103,
  ]),
);
const _flaxBinding324 = FlaxObjectBinding(
  "flax.video/video#type:WebVTTCaptionFile",
  [],
  {"@super:get:captions": _flaxBinding76},
  constructors: {"": _flaxBinding77, "@implementation": _flaxBinding77},
  create: _createWebVTTCaptionFile,
  matches: _isWebVTTCaptionFile,
  setters: [],
  supertypes: ["flax.video/video#type:ClosedCaptionFile", "dart:core::Object"],
  parent: _flaxBinding65,
  proxy: FlaxProxyBinding([_flaxBinding79]),
);
