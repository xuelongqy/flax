// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
// ignore_for_file: type=lint, unused_import, unnecessary_cast, deprecated_member_use, invalid_use_of_protected_member, invalid_use_of_visible_for_overriding_member, invalid_use_of_visible_for_testing_member
import 'dart:core';

import 'package:audioplayers/audioplayers.dart' as api;
import 'package:flax/bindings.dart';

import 'dart:core' as api1;
import 'dart:async' as api2;
import 'dart:typed_data' as api3;

// ignore: unused_element
const _flaxOmitted = Object();
const audioBindings = FlaxBindingModule(
  'audio',
  [
    FlaxEnumBinding(
      "flax.audio/audio#type:AVAudioSessionCategory",
      {
        "ambient": api.AVAudioSessionCategory.ambient,
        "soloAmbient": api.AVAudioSessionCategory.soloAmbient,
        "playback": api.AVAudioSessionCategory.playback,
        "record": api.AVAudioSessionCategory.record,
        "playAndRecord": api.AVAudioSessionCategory.playAndRecord,
        "multiRoute": api.AVAudioSessionCategory.multiRoute,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.audio/audio#type:AVAudioSessionOptions",
      {
        "mixWithOthers": api.AVAudioSessionOptions.mixWithOthers,
        "duckOthers": api.AVAudioSessionOptions.duckOthers,
        "interruptSpokenAudioAndMixWithOthers":
            api.AVAudioSessionOptions.interruptSpokenAudioAndMixWithOthers,
        "allowBluetooth": api.AVAudioSessionOptions.allowBluetooth,
        "allowBluetoothA2DP": api.AVAudioSessionOptions.allowBluetoothA2DP,
        "allowAirPlay": api.AVAudioSessionOptions.allowAirPlay,
        "defaultToSpeaker": api.AVAudioSessionOptions.defaultToSpeaker,
        "overrideMutedMicrophoneInterruption":
            api.AVAudioSessionOptions.overrideMutedMicrophoneInterruption,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.audio/audio#type:AndroidAudioFocus",
      {
        "none": api.AndroidAudioFocus.none,
        "gain": api.AndroidAudioFocus.gain,
        "gainTransient": api.AndroidAudioFocus.gainTransient,
        "gainTransientMayDuck": api.AndroidAudioFocus.gainTransientMayDuck,
        "gainTransientExclusive": api.AndroidAudioFocus.gainTransientExclusive,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.audio/audio#type:AndroidAudioMode",
      {
        "normal": api.AndroidAudioMode.normal,
        "ringtone": api.AndroidAudioMode.ringtone,
        "inCall": api.AndroidAudioMode.inCall,
        "inCommunication": api.AndroidAudioMode.inCommunication,
        "callScreening": api.AndroidAudioMode.callScreening,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.audio/audio#type:AndroidContentType",
      {
        "unknown": api.AndroidContentType.unknown,
        "speech": api.AndroidContentType.speech,
        "music": api.AndroidContentType.music,
        "movie": api.AndroidContentType.movie,
        "sonification": api.AndroidContentType.sonification,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.audio/audio#type:AndroidUsageType",
      {
        "unknown": api.AndroidUsageType.unknown,
        "media": api.AndroidUsageType.media,
        "voiceCommunication": api.AndroidUsageType.voiceCommunication,
        "voiceCommunicationSignalling":
            api.AndroidUsageType.voiceCommunicationSignalling,
        "alarm": api.AndroidUsageType.alarm,
        "notification": api.AndroidUsageType.notification,
        "notificationRingtone": api.AndroidUsageType.notificationRingtone,
        "notificationCommunicationRequest":
            api.AndroidUsageType.notificationCommunicationRequest,
        "notificationCommunicationInstant":
            api.AndroidUsageType.notificationCommunicationInstant,
        "notificationCommunicationDelayed":
            api.AndroidUsageType.notificationCommunicationDelayed,
        "notificationEvent": api.AndroidUsageType.notificationEvent,
        "assistanceAccessibility": api.AndroidUsageType.assistanceAccessibility,
        "assistanceNavigationGuidance":
            api.AndroidUsageType.assistanceNavigationGuidance,
        "assistanceSonification": api.AndroidUsageType.assistanceSonification,
        "game": api.AndroidUsageType.game,
        "virtualSource": api.AndroidUsageType.virtualSource,
        "assistant": api.AndroidUsageType.assistant,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.audio/audio#type:AudioContextConfigRoute",
      {
        "system": api.AudioContextConfigRoute.system,
        "earpiece": api.AudioContextConfigRoute.earpiece,
        "speaker": api.AudioContextConfigRoute.speaker,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.audio/audio#type:AudioContextConfigFocus",
      {
        "gain": api.AudioContextConfigFocus.gain,
        "duckOthers": api.AudioContextConfigFocus.duckOthers,
        "mixWithOthers": api.AudioContextConfigFocus.mixWithOthers,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.audio/audio#type:AudioEventType",
      {
        "log": api.AudioEventType.log,
        "duration": api.AudioEventType.duration,
        "seekComplete": api.AudioEventType.seekComplete,
        "complete": api.AudioEventType.complete,
        "prepared": api.AudioEventType.prepared,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.audio/audio#type:AudioLogLevel",
      {
        "none": api.AudioLogLevel.none,
        "error": api.AudioLogLevel.error,
        "info": api.AudioLogLevel.info,
      },
      supertypes: [
        "flax.core/flutter#type:Enum",
        "dart:core::Object",
        "flax.core/flutter#type:Comparable",
      ],
    ),
    FlaxEnumBinding(
      "flax.audio/audio#type:PlayerMode",
      {
        "mediaPlayer": api.PlayerMode.mediaPlayer,
        "lowLatency": api.PlayerMode.lowLatency,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.audio/audio#type:ReleaseMode",
      {
        "release": api.ReleaseMode.release,
        "loop": api.ReleaseMode.loop,
        "stop": api.ReleaseMode.stop,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.audio/audio#type:PlayerState",
      {
        "stopped": api.PlayerState.stopped,
        "playing": api.PlayerState.playing,
        "paused": api.PlayerState.paused,
        "completed": api.PlayerState.completed,
        "disposed": api.PlayerState.disposed,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    FlaxEnumBinding(
      "flax.audio/audio#type:GlobalAudioEventType",
      {"log": api.GlobalAudioEventType.log},
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    _flaxBinding122,
    _flaxBinding148,
    _flaxBinding164,
    _flaxBinding189,
    _flaxBinding214,
    _flaxBinding228,
    _flaxBinding240,
    _flaxBinding241,
    _flaxBinding337,
    _flaxBinding348,
    _flaxBinding369,
    _flaxBinding373,
    _flaxBinding376,
    _flaxBinding400,
    _flaxBinding406,
    _flaxBinding415,
    _flaxBinding395,
    _flaxBinding110,
    _flaxBinding419,
    _flaxBinding423,
  ],
  functions: [
    FlaxFunctionBinding(
      "flax.audio/audio#function:AndroidAudioFocus.value%3Aget",
      [FlaxParameter.required("receiver", _flaxBinding35)],
      flaxIntType,
      _enum_AndroidAudioFocus_get_value,
    ),
    FlaxFunctionBinding(
      "flax.audio/audio#function:AndroidAudioFocus.fromInt%3Afactory",
      [FlaxParameter.required("value", flaxIntType)],
      _flaxBinding35,
      _enum_AndroidAudioFocus_factory_fromInt,
    ),
    FlaxFunctionBinding(
      "flax.audio/audio#function:AndroidAudioMode.value%3Aget",
      [FlaxParameter.required("receiver", _flaxBinding29)],
      flaxIntType,
      _enum_AndroidAudioMode_get_value,
    ),
    FlaxFunctionBinding(
      "flax.audio/audio#function:AndroidAudioMode.fromInt%3Afactory",
      [FlaxParameter.required("value", flaxIntType)],
      _flaxBinding29,
      _enum_AndroidAudioMode_factory_fromInt,
    ),
    FlaxFunctionBinding(
      "flax.audio/audio#function:AndroidContentType.value%3Aget",
      [FlaxParameter.required("receiver", _flaxBinding31)],
      flaxIntType,
      _enum_AndroidContentType_get_value,
    ),
    FlaxFunctionBinding(
      "flax.audio/audio#function:AndroidContentType.fromInt%3Afactory",
      [FlaxParameter.required("value", flaxIntType)],
      _flaxBinding31,
      _enum_AndroidContentType_factory_fromInt,
    ),
    FlaxFunctionBinding(
      "flax.audio/audio#function:AndroidUsageType.value%3Aget",
      [FlaxParameter.required("receiver", _flaxBinding33)],
      flaxIntType,
      _enum_AndroidUsageType_get_value,
    ),
    FlaxFunctionBinding(
      "flax.audio/audio#function:AndroidUsageType.fromInt%3Afactory",
      [FlaxParameter.required("value", flaxIntType)],
      _flaxBinding33,
      _enum_AndroidUsageType_factory_fromInt,
    ),
    FlaxFunctionBinding(
      "flax.audio/audio#read:AudioCache.instance",
      [],
      _flaxBinding68,
      _AudioCache_static_get_instance,
    ),
    FlaxFunctionBinding(
      "flax.audio/audio#function:AudioCache.instance%3D",
      [FlaxParameter.required("value", _flaxBinding68)],
      flaxVoidType,
      _AudioCache_static_set_instance,
    ),
    FlaxFunctionBinding(
      "flax.audio/audio#function:AudioLogLevel.level%3Aget",
      [FlaxParameter.required("receiver", _flaxBinding424)],
      flaxIntType,
      _enum_AudioLogLevel_get_level,
    ),
    FlaxFunctionBinding(
      "flax.audio/audio#function:AudioLogLevel.compareTo%3Acall",
      [
        FlaxParameter.required("receiver", _flaxBinding424),
        FlaxParameter.required("other", _flaxBinding424),
      ],
      flaxIntType,
      _enum_AudioLogLevel_call_compareTo,
    ),
    FlaxFunctionBinding(
      "flax.audio/audio#function:AudioLogLevel.fromInt%3Afactory",
      [FlaxParameter.required("level", flaxIntType)],
      _flaxBinding424,
      _enum_AudioLogLevel_factory_fromInt,
    ),
    FlaxFunctionBinding(
      "flax.audio/audio#function:AudioLogger.log",
      [FlaxParameter.required("message", flaxStringType)],
      flaxVoidType,
      _AudioLogger_log,
    ),
    FlaxFunctionBinding(
      "flax.audio/audio#function:AudioLogger.error",
      [
        FlaxParameter.required("o", flaxAnyType),
        FlaxParameter("stacktrace", _flaxBinding425, required: false),
      ],
      flaxVoidType,
      _AudioLogger_error,
    ),
    FlaxFunctionBinding(
      "flax.audio/audio#function:AudioLogger.errorToString",
      [
        FlaxParameter.required("o", flaxAnyType),
        FlaxParameter("stackTrace", _flaxBinding425, required: false),
      ],
      flaxStringType,
      _AudioLogger_errorToString,
    ),
    FlaxFunctionBinding(
      "flax.audio/audio#read:AudioLogger.logLevel",
      [],
      _flaxBinding424,
      _AudioLogger_static_get_logLevel,
    ),
    FlaxFunctionBinding(
      "flax.audio/audio#function:AudioLogger.logLevel%3D",
      [FlaxParameter.required("value", _flaxBinding424)],
      flaxVoidType,
      _AudioLogger_static_set_logLevel,
    ),
    FlaxFunctionBinding(
      "flax.audio/audio#read:AudioPlayer.global",
      [],
      _flaxBinding426,
      _AudioPlayer_static_get_global,
    ),
    FlaxFunctionBinding(
      "flax.audio/audio#read:AudioPlayer.preparationTimeout",
      [],
      flaxDurationType,
      _AudioPlayer_static_get_preparationTimeout,
    ),
    FlaxFunctionBinding(
      "flax.audio/audio#read:AudioPlayer.seekingTimeout",
      [],
      flaxDurationType,
      _AudioPlayer_static_get_seekingTimeout,
    ),
    FlaxFunctionBinding(
      "flax.audio/audio#function:AudioPlayer.preparationTimeout%3D",
      [FlaxParameter.required("value", flaxDurationType)],
      flaxVoidType,
      _AudioPlayer_static_set_preparationTimeout,
    ),
    FlaxFunctionBinding(
      "flax.audio/audio#function:AudioPlayer.seekingTimeout%3D",
      [FlaxParameter.required("value", flaxDurationType)],
      flaxVoidType,
      _AudioPlayer_static_set_seekingTimeout,
    ),
    FlaxFunctionBinding(
      "flax.audio/audio#function:AudioPool.create",
      [
        FlaxParameter("audioCache", _flaxBinding427, required: false),
        FlaxParameter("audioContext", _flaxBinding263, required: false),
        FlaxParameter.required("maxPlayers", flaxIntType),
        FlaxParameter(
          "minPlayers",
          flaxIntType,
          required: false,
          defaultValue: 1,
        ),
        FlaxParameter(
          "playerMode",
          _flaxBinding56,
          required: false,
          defaultValue: api.PlayerMode.mediaPlayer,
        ),
        FlaxParameter.required("source", _flaxBinding64),
      ],
      _flaxBinding429,
      _AudioPool_create,
    ),
    FlaxFunctionBinding(
      "flax.audio/audio#function:AudioPool.createFromAsset",
      [
        FlaxParameter("audioCache", _flaxBinding427, required: false),
        FlaxParameter.required("maxPlayers", flaxIntType),
        FlaxParameter(
          "minPlayers",
          flaxIntType,
          required: false,
          defaultValue: 1,
        ),
        FlaxParameter.required("path", flaxStringType),
        FlaxParameter(
          "playerMode",
          _flaxBinding56,
          required: false,
          defaultValue: api.PlayerMode.mediaPlayer,
        ),
      ],
      _flaxBinding429,
      _AudioPool_createFromAsset,
    ),
  ],
  constants: [],
  moduleId: "flax.audio/audio",
  dependencyModules: ["flax.core/flutter"],
  uiProtocol: 24,
  requiredCapabilities: const <String>[
    "call-layouts",
    "generic-member-views",
    "inherited-binding-members",
    "instance-checks",
    "native-core-inputs",
    "native-navigation-objects",
    "native-widget-proxies",
    "shared-static-readers",
    "shared-uint8",
  ],
  stateVariants: [],
  dartTypes: [
    FlaxDartClassTemplate(
      "flax.audio/audio#type:AVAudioSessionCategory",
      api.AVAudioSessionCategory,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.audio/audio#type:AVAudioSessionOptions",
      api.AVAudioSessionOptions,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.audio/audio#type:AndroidAudioFocus",
      api.AndroidAudioFocus,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.audio/audio#type:AndroidAudioMode",
      api.AndroidAudioMode,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.audio/audio#type:AndroidContentType",
      api.AndroidContentType,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.audio/audio#type:AndroidUsageType",
      api.AndroidUsageType,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.audio/audio#type:AssetSource",
      api.AssetSource,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.audio/audio#type:AudioCache",
      api.AudioCache,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.audio/audio#type:AudioContext",
      api.AudioContext,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.audio/audio#type:AudioContextAndroid",
      api.AudioContextAndroid,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.audio/audio#type:AudioContextConfig",
      api.AudioContextConfig,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.audio/audio#type:AudioContextConfigFocus",
      api.AudioContextConfigFocus,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.audio/audio#type:AudioContextConfigRoute",
      api.AudioContextConfigRoute,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.audio/audio#type:AudioContextIOS",
      api.AudioContextIOS,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.audio/audio#type:AudioEvent",
      api.AudioEvent,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.audio/audio#type:AudioEventType",
      api.AudioEventType,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.audio/audio#type:AudioLogLevel",
      api.AudioLogLevel,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.audio/audio#type:AudioLogger",
      api.AudioLogger,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.audio/audio#type:AudioPlayer",
      api.AudioPlayer,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.audio/audio#type:AudioPlayerException",
      api.AudioPlayerException,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.audio/audio#type:AudioPool",
      api.AudioPool,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.audio/audio#type:BytesSource",
      api.BytesSource,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.audio/audio#type:DeviceFileSource",
      api.DeviceFileSource,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.audio/audio#type:FramePositionUpdater",
      api.FramePositionUpdater,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.audio/audio#type:GlobalAudioEvent",
      api.GlobalAudioEvent,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.audio/audio#type:GlobalAudioEventType",
      api.GlobalAudioEventType,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.audio/audio#type:GlobalAudioScope",
      api.GlobalAudioScope,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.audio/audio#type:PlayerMode",
      api.PlayerMode,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.audio/audio#type:PlayerState",
      api.PlayerState,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.audio/audio#type:PositionUpdater",
      api.PositionUpdater,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.audio/audio#type:ReleaseMode",
      api.ReleaseMode,
      "enum",
    ),
    FlaxDartClassTemplate("flax.audio/audio#type:Source", api.Source, "object"),
    FlaxDartClassTemplate(
      "flax.audio/audio#type:TimerPositionUpdater",
      api.TimerPositionUpdater,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.audio/audio#type:UrlSource",
      api.UrlSource,
      "object",
    ),
  ],
  dartShapes: _flaxDartShapes,
);
final audioPlugin = FlaxBindingPlugin(
  id: "binding:flax.audio/audio",
  bindingModules: [audioBindings],
  jsModules: {"@flax/audioplayers"},
);
Object? _enum_AndroidAudioFocus_get_value(Map<String, Object?> values) =>
    (values["receiver"] as api.AndroidAudioFocus).value;
Object? _enum_AndroidAudioFocus_factory_fromInt(Map<String, Object?> values) {
  return api.AndroidAudioFocus.fromInt(values["value"] as int);
}

Object? _enum_AndroidAudioMode_get_value(Map<String, Object?> values) =>
    (values["receiver"] as api.AndroidAudioMode).value;
Object? _enum_AndroidAudioMode_factory_fromInt(Map<String, Object?> values) {
  return api.AndroidAudioMode.fromInt(values["value"] as int);
}

Object? _enum_AndroidContentType_get_value(Map<String, Object?> values) =>
    (values["receiver"] as api.AndroidContentType).value;
Object? _enum_AndroidContentType_factory_fromInt(Map<String, Object?> values) {
  return api.AndroidContentType.fromInt(values["value"] as int);
}

Object? _enum_AndroidUsageType_get_value(Map<String, Object?> values) =>
    (values["receiver"] as api.AndroidUsageType).value;
Object? _enum_AndroidUsageType_factory_fromInt(Map<String, Object?> values) {
  return api.AndroidUsageType.fromInt(values["value"] as int);
}

bool _isAssetSource(Object value) => value is api.AssetSource;
Object? _AssetSource_path(Object value) => (value as api.AssetSource).path;
Object? _AssetSource_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AssetSource).toString();
}

Object? _FlaxProxyDispatch0_super_call_setOnPlayer(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _FlaxProxyDispatch0)._flaxSuper_setOnPlayer(
    values["player"] as api.AudioPlayer,
  );
}

Object? _FlaxProxyDispatch1_super_call_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _FlaxProxyDispatch1)._flaxSuper_toString();
}

Object? _FlaxProxyDispatch2_super_get_path(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch2)._flaxSuperGet_path;
Object? _FlaxProxyDispatch0_super_get_mimeType(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch0)._flaxSuperGet_mimeType;
Object _createAssetSource(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.AssetSource(
        values["path"] as String,
        mimeType: values["mimeType"] as String?,
      );
    case '@implementation':
      return _AssetSourceProxy(
        values['@peer'] as FlaxProxyPeer,
        values["path"] as String,
        mimeType: values["mimeType"] as String?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isAudioCache(Object value) => value is api.AudioCache;
Object? _AudioCache_loadedFiles(Object value) =>
    (value as api.AudioCache).loadedFiles;
Object? _AudioCache_prefix(Object value) => (value as api.AudioCache).prefix;
Object? _AudioCache_cacheId(Object value) => (value as api.AudioCache).cacheId;
Object? _AudioCache_static_get_instance(Map<String, Object?> values) =>
    api.AudioCache.instance;
Object? _AudioCache_static_set_instance(Map<String, Object?> values) {
  api.AudioCache.instance = values["value"] as api.AudioCache;
  return null;
}

void _AudioCache_set_prefix(Object receiver, Object? value) {
  (receiver as api.AudioCache).prefix = value as String;
}

void _AudioCache_set_cacheId(Object receiver, Object? value) {
  (receiver as api.AudioCache).cacheId = value as String?;
}

Object? _AudioCache_clear(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AudioCache).clear(values["fileName"] as String);
}

Object? _AudioCache_clearAll(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AudioCache).clearAll();
}

Object? _AudioCache_fetchToMemory(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AudioCache).fetchToMemory(
    values["fileName"] as String,
  );
}

Object? _AudioCache_load(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AudioCache).load(values["fileName"] as String);
}

Object? _AudioCache_loadPath(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AudioCache).loadPath(values["fileName"] as String);
}

Object? _AudioCache_loadAsBytes(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AudioCache).loadAsBytes(values["fileName"] as String);
}

Object? _AudioCache_loadAll(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AudioCache).loadAll(
    values["fileNames"] as List<String>,
  );
}

Object? _AudioCache_super_clear(Object receiver, Map<String, Object?> values) {
  return (receiver as _AudioCacheProxy)._flaxSuper_clear(
    values["fileName"] as String,
  );
}

Object? _AudioCache_super_clearAll(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AudioCacheProxy)._flaxSuper_clearAll();
}

Object? _AudioCache_super_fetchToMemory(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AudioCacheProxy)._flaxSuper_fetchToMemory(
    values["fileName"] as String,
  );
}

Object? _AudioCache_super_load(Object receiver, Map<String, Object?> values) {
  return (receiver as _AudioCacheProxy)._flaxSuper_load(
    values["fileName"] as String,
  );
}

Object? _AudioCache_super_loadPath(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AudioCacheProxy)._flaxSuper_loadPath(
    values["fileName"] as String,
  );
}

Object? _AudioCache_super_loadAsBytes(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AudioCacheProxy)._flaxSuper_loadAsBytes(
    values["fileName"] as String,
  );
}

Object? _AudioCache_super_loadAll(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AudioCacheProxy)._flaxSuper_loadAll(
    values["fileNames"] as List<String>,
  );
}

Object? _AudioCache_super_get_loadedFiles(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AudioCacheProxy)._flaxSuperGet_loadedFiles;
Object? _AudioCache_super_get_prefix(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AudioCacheProxy)._flaxSuperGet_prefix;
Object? _AudioCache_super_get_cacheId(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AudioCacheProxy)._flaxSuperGet_cacheId;
Object? _AudioCache_super_set_prefix(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AudioCacheProxy)._flaxSuperSet_prefix(
    values["value"] as String,
  );
  return null;
}

Object? _AudioCache_super_set_cacheId(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AudioCacheProxy)._flaxSuperSet_cacheId(
    values["value"] as String?,
  );
  return null;
}

Object _createAudioCache(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.AudioCache(
        prefix: values["prefix"] as String,
        cacheId: values["cacheId"] as String?,
      );
    case '@implementation':
      return _AudioCacheProxy(
        values['@peer'] as FlaxProxyPeer,
        prefix: values["prefix"] as String,
        cacheId: values["cacheId"] as String?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isAudioContext(Object value) => value is api.AudioContext;
Object? _AudioContext_android(Object value) =>
    (value as api.AudioContext).android;
Object? _AudioContext_iOS(Object value) => (value as api.AudioContext).iOS;
void _AudioContext_set_iOS(Object receiver, Object? value) {
  (receiver as api.AudioContext).iOS = value as api.AudioContextIOS;
}

Object? _AudioContext_copy(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AudioContext).copy(
    android: values["android"] as api.AudioContextAndroid?,
    iOS: values["iOS"] as api.AudioContextIOS?,
  );
}

Object? _AudioContext_toJson(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AudioContext).toJson();
}

Object? _AudioContext_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AudioContext).toString();
}

Object? _AudioContext_super_copy(Object receiver, Map<String, Object?> values) {
  return (receiver as _AudioContextProxy)._flaxSuper_copy(
    android: values["android"] as api.AudioContextAndroid?,
    iOS: values["iOS"] as api.AudioContextIOS?,
  );
}

Object? _FlaxProxyDispatch3_super_call_toJson(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _FlaxProxyDispatch3)._flaxSuper_toJson();
}

Object? _AudioContext_super_get_android(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AudioContextProxy)._flaxSuperGet_android;
Object? _AudioContext_super_get_iOS(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AudioContextProxy)._flaxSuperGet_iOS;
Object? _AudioContext_super_set_iOS(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AudioContextProxy)._flaxSuperSet_iOS(
    values["value"] as api.AudioContextIOS,
  );
  return null;
}

Object _createAudioContext(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.AudioContext(
        android: values["android"] as api.AudioContextAndroid?,
        iOS: values["iOS"] as api.AudioContextIOS?,
      );
    case '@implementation':
      return _AudioContextProxy(
        values['@peer'] as FlaxProxyPeer,
        android: values["android"] as api.AudioContextAndroid?,
        iOS: values["iOS"] as api.AudioContextIOS?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isAudioContextAndroid(Object value) => value is api.AudioContextAndroid;
Object? _AudioContextAndroid_isSpeakerphoneOn(Object value) =>
    (value as api.AudioContextAndroid).isSpeakerphoneOn;
Object? _AudioContextAndroid_audioMode(Object value) =>
    (value as api.AudioContextAndroid).audioMode;
Object? _AudioContextAndroid_stayAwake(Object value) =>
    (value as api.AudioContextAndroid).stayAwake;
Object? _AudioContextAndroid_contentType(Object value) =>
    (value as api.AudioContextAndroid).contentType;
Object? _AudioContextAndroid_usageType(Object value) =>
    (value as api.AudioContextAndroid).usageType;
Object? _AudioContextAndroid_audioFocus(Object value) =>
    (value as api.AudioContextAndroid).audioFocus;
Object? _AudioContextAndroid_copy(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AudioContextAndroid).copy(
    audioFocus: values["audioFocus"] as api.AndroidAudioFocus?,
    audioMode: values["audioMode"] as api.AndroidAudioMode?,
    contentType: values["contentType"] as api.AndroidContentType?,
    isSpeakerphoneOn: values["isSpeakerphoneOn"] as bool?,
    stayAwake: values["stayAwake"] as bool?,
    usageType: values["usageType"] as api.AndroidUsageType?,
  );
}

Object? _AudioContextAndroid_toJson(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AudioContextAndroid).toJson();
}

Object? _AudioContextAndroid_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AudioContextAndroid).toString();
}

Object? _AudioContextAndroid_super_copy(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AudioContextAndroidProxy)._flaxSuper_copy(
    audioFocus: values["audioFocus"] as api.AndroidAudioFocus?,
    audioMode: values["audioMode"] as api.AndroidAudioMode?,
    contentType: values["contentType"] as api.AndroidContentType?,
    isSpeakerphoneOn: values["isSpeakerphoneOn"] as bool?,
    stayAwake: values["stayAwake"] as bool?,
    usageType: values["usageType"] as api.AndroidUsageType?,
  );
}

Object? _AudioContextAndroid_super_get_isSpeakerphoneOn(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AudioContextAndroidProxy)._flaxSuperGet_isSpeakerphoneOn;
Object? _AudioContextAndroid_super_get_audioMode(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AudioContextAndroidProxy)._flaxSuperGet_audioMode;
Object? _FlaxProxyDispatch4_super_get_stayAwake(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch4)._flaxSuperGet_stayAwake;
Object? _AudioContextAndroid_super_get_contentType(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AudioContextAndroidProxy)._flaxSuperGet_contentType;
Object? _AudioContextAndroid_super_get_usageType(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AudioContextAndroidProxy)._flaxSuperGet_usageType;
Object? _AudioContextAndroid_super_get_audioFocus(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AudioContextAndroidProxy)._flaxSuperGet_audioFocus;
Object _createAudioContextAndroid(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.AudioContextAndroid(
        isSpeakerphoneOn: values["isSpeakerphoneOn"] as bool,
        audioMode: values["audioMode"] as api.AndroidAudioMode,
        stayAwake: values["stayAwake"] as bool,
        contentType: values["contentType"] as api.AndroidContentType,
        usageType: values["usageType"] as api.AndroidUsageType,
        audioFocus: values["audioFocus"] as api.AndroidAudioFocus,
      );
    case '@implementation':
      return _AudioContextAndroidProxy(
        values['@peer'] as FlaxProxyPeer,
        isSpeakerphoneOn: values["isSpeakerphoneOn"] as bool,
        audioMode: values["audioMode"] as api.AndroidAudioMode,
        stayAwake: values["stayAwake"] as bool,
        contentType: values["contentType"] as api.AndroidContentType,
        usageType: values["usageType"] as api.AndroidUsageType,
        audioFocus: values["audioFocus"] as api.AndroidAudioFocus,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isAudioContextConfig(Object value) => value is api.AudioContextConfig;
Object? _AudioContextConfig_route(Object value) =>
    (value as api.AudioContextConfig).route;
Object? _AudioContextConfig_focus(Object value) =>
    (value as api.AudioContextConfig).focus;
Object? _AudioContextConfig_respectSilence(Object value) =>
    (value as api.AudioContextConfig).respectSilence;
Object? _AudioContextConfig_stayAwake(Object value) =>
    (value as api.AudioContextConfig).stayAwake;
Object? _AudioContextConfig_copy(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AudioContextConfig).copy(
    focus: values["focus"] as api.AudioContextConfigFocus?,
    respectSilence: values["respectSilence"] as bool?,
    route: values["route"] as api.AudioContextConfigRoute?,
    stayAwake: values["stayAwake"] as bool?,
  );
}

Object? _AudioContextConfig_build(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AudioContextConfig).build();
}

Object? _AudioContextConfig_buildAndroid(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AudioContextConfig).buildAndroid();
}

Object? _AudioContextConfig_buildIOS(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AudioContextConfig).buildIOS();
}

Object? _AudioContextConfig_validateIOS(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.AudioContextConfig).validateIOS();
  return null;
}

Object? _AudioContextConfig_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AudioContextConfig).toString();
}

Object? _AudioContextConfig_super_copy(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AudioContextConfigProxy)._flaxSuper_copy(
    focus: values["focus"] as api.AudioContextConfigFocus?,
    respectSilence: values["respectSilence"] as bool?,
    route: values["route"] as api.AudioContextConfigRoute?,
    stayAwake: values["stayAwake"] as bool?,
  );
}

Object? _AudioContextConfig_super_build(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AudioContextConfigProxy)._flaxSuper_build();
}

Object? _AudioContextConfig_super_buildAndroid(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AudioContextConfigProxy)._flaxSuper_buildAndroid();
}

Object? _AudioContextConfig_super_buildIOS(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AudioContextConfigProxy)._flaxSuper_buildIOS();
}

Object? _AudioContextConfig_super_validateIOS(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AudioContextConfigProxy)._flaxSuper_validateIOS();
  return null;
}

Object? _AudioContextConfig_super_get_route(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AudioContextConfigProxy)._flaxSuperGet_route;
Object? _AudioContextConfig_super_get_focus(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AudioContextConfigProxy)._flaxSuperGet_focus;
Object? _AudioContextConfig_super_get_respectSilence(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AudioContextConfigProxy)._flaxSuperGet_respectSilence;
Object _createAudioContextConfig(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.AudioContextConfig(
        route: values["route"] as api.AudioContextConfigRoute,
        focus: values["focus"] as api.AudioContextConfigFocus,
        respectSilence: values["respectSilence"] as bool,
        stayAwake: values["stayAwake"] as bool,
      );
    case '@implementation':
      return _AudioContextConfigProxy(
        values['@peer'] as FlaxProxyPeer,
        route: values["route"] as api.AudioContextConfigRoute,
        focus: values["focus"] as api.AudioContextConfigFocus,
        respectSilence: values["respectSilence"] as bool,
        stayAwake: values["stayAwake"] as bool,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isAudioContextIOS(Object value) => value is api.AudioContextIOS;
Object? _AudioContextIOS_category(Object value) =>
    (value as api.AudioContextIOS).category;
Object? _AudioContextIOS_options(Object value) =>
    (value as api.AudioContextIOS).options;
Object? _AudioContextIOS_copy(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AudioContextIOS).copy(
    category: values["category"] as api.AVAudioSessionCategory?,
    options: values["options"] as Set<api.AVAudioSessionOptions>?,
  );
}

Object? _AudioContextIOS_toJson(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AudioContextIOS).toJson();
}

Object? _AudioContextIOS_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AudioContextIOS).toString();
}

Object? _AudioContextIOS_super_copy(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AudioContextIOSProxy)._flaxSuper_copy(
    category: values["category"] as api.AVAudioSessionCategory?,
    options: values["options"] as Set<api.AVAudioSessionOptions>?,
  );
}

Object? _AudioContextIOS_super_get_category(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AudioContextIOSProxy)._flaxSuperGet_category;
Object? _AudioContextIOS_super_get_options(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AudioContextIOSProxy)._flaxSuperGet_options;
Object _createAudioContextIOS(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      final _flaxHas1 = values.containsKey("options");
      return flaxInvokeWithDefaults(
        api.AudioContextIOS.new,
        <Object?>[
          values["category"] as api.AVAudioSessionCategory,
          (_flaxHas1
              ? values["options"] as Set<api.AVAudioSessionOptions>
              : null),
        ],
        <int>[1 | (_flaxHas1 ? 2 : 0)],
        const <String>["category", "options"],
      ) as api.AudioContextIOS;
    case '@implementation':
      final _flaxHas2 = values.containsKey("options");
      return flaxInvokeWithDefaults(
        _AudioContextIOSProxy.new,
        <Object?>[
          values['@peer'] as FlaxProxyPeer,
          values["category"] as api.AVAudioSessionCategory,
          (_flaxHas2
              ? values["options"] as Set<api.AVAudioSessionOptions>
              : null),
        ],
        <int>[1 | 2 | (_flaxHas2 ? 4 : 0)],
        const <String>["", "category", "options"],
      ) as api.AudioContextIOS;
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isAudioEvent(Object value) => value is api.AudioEvent;
Object? _AudioEvent_eventType(Object value) =>
    (value as api.AudioEvent).eventType;
Object? _AudioEvent_duration(Object value) =>
    (value as api.AudioEvent).duration;
Object? _AudioEvent_logMessage(Object value) =>
    (value as api.AudioEvent).logMessage;
Object? _AudioEvent_isPrepared(Object value) =>
    (value as api.AudioEvent).isPrepared;
Object? _AudioEvent_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AudioEvent).toString();
}

Object? _AudioEvent_super_get_eventType(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AudioEventProxy)._flaxSuperGet_eventType;
Object? _AudioEvent_super_get_duration(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AudioEventProxy)._flaxSuperGet_duration;
Object? _FlaxProxyDispatch5_super_get_logMessage(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch5)._flaxSuperGet_logMessage;
Object? _AudioEvent_super_get_isPrepared(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AudioEventProxy)._flaxSuperGet_isPrepared;
Object _createAudioEvent(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.AudioEvent(
        eventType: values["eventType"] as api.AudioEventType,
        duration: values["duration"] as api1.Duration?,
        logMessage: values["logMessage"] as String?,
        isPrepared: values["isPrepared"] as bool?,
      );
    case '@implementation':
      return _AudioEventProxy(
        values['@peer'] as FlaxProxyPeer,
        eventType: values["eventType"] as api.AudioEventType,
        duration: values["duration"] as api1.Duration?,
        logMessage: values["logMessage"] as String?,
        isPrepared: values["isPrepared"] as bool?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

Object? _enum_AudioLogLevel_get_level(Map<String, Object?> values) =>
    (values["receiver"] as api.AudioLogLevel).level;
Object? _enum_AudioLogLevel_call_compareTo(Map<String, Object?> values) {
  return (values["receiver"] as api.AudioLogLevel).compareTo(
    values["other"] as api.AudioLogLevel,
  );
}

Object? _enum_AudioLogLevel_factory_fromInt(Map<String, Object?> values) {
  return api.AudioLogLevel.fromInt(values["level"] as int);
}

bool _isAudioLogger(Object value) => value is api.AudioLogger;
Object? _AudioLogger_static_get_logLevel(Map<String, Object?> values) =>
    api.AudioLogger.logLevel;
Object? _AudioLogger_static_set_logLevel(Map<String, Object?> values) {
  api.AudioLogger.logLevel = values["value"] as api.AudioLogLevel;
  return null;
}

Object? _AudioLogger_log(Map<String, Object?> values) {
  api.AudioLogger.log(values["message"] as String);
  return null;
}

Object? _AudioLogger_error(Map<String, Object?> values) {
  api.AudioLogger.error(
    values["o"] as Object,
    values["stacktrace"] as api1.StackTrace?,
  );
  return null;
}

Object? _AudioLogger_errorToString(Map<String, Object?> values) {
  return api.AudioLogger.errorToString(
    values["o"] as Object,
    values["stackTrace"] as api1.StackTrace?,
  );
}

Object _createAudioLogger(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.AudioLogger();
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isAudioPlayer(Object value) => value is api.AudioPlayer;
Object? _AudioPlayer_audioCache(Object value) =>
    (value as api.AudioPlayer).audioCache;
Object? _AudioPlayer_playerId(Object value) =>
    (value as api.AudioPlayer).playerId;
Object? _AudioPlayer_source(Object value) => (value as api.AudioPlayer).source;
Object? _AudioPlayer_volume(Object value) => (value as api.AudioPlayer).volume;
Object? _AudioPlayer_balance(Object value) =>
    (value as api.AudioPlayer).balance;
Object? _AudioPlayer_playbackRate(Object value) =>
    (value as api.AudioPlayer).playbackRate;
Object? _AudioPlayer_mode(Object value) => (value as api.AudioPlayer).mode;
Object? _AudioPlayer_releaseMode(Object value) =>
    (value as api.AudioPlayer).releaseMode;
Object? _AudioPlayer_desiredState(Object value) =>
    (value as api.AudioPlayer).desiredState;
Object? _AudioPlayer_state(Object value) => (value as api.AudioPlayer).state;
Object? _AudioPlayer_eventStream(Object value) =>
    (value as api.AudioPlayer).eventStream;
Object? _AudioPlayer_onPlayerStateChanged(Object value) =>
    (value as api.AudioPlayer).onPlayerStateChanged;
Object? _AudioPlayer_onPositionChanged(Object value) =>
    (value as api.AudioPlayer).onPositionChanged;
Object? _AudioPlayer_onDurationChanged(Object value) =>
    (value as api.AudioPlayer).onDurationChanged;
Object? _AudioPlayer_onPlayerComplete(Object value) =>
    (value as api.AudioPlayer).onPlayerComplete;
Object? _AudioPlayer_onSeekComplete(Object value) =>
    (value as api.AudioPlayer).onSeekComplete;
Object? _AudioPlayer_onLog(Object value) => (value as api.AudioPlayer).onLog;
Object? _AudioPlayer_static_get_global(Map<String, Object?> values) =>
    api.AudioPlayer.global;
Object? _AudioPlayer_static_get_preparationTimeout(
  Map<String, Object?> values,
) => api.AudioPlayer.preparationTimeout;
Object? _AudioPlayer_static_get_seekingTimeout(Map<String, Object?> values) =>
    api.AudioPlayer.seekingTimeout;
Object? _AudioPlayer_static_set_preparationTimeout(
  Map<String, Object?> values,
) {
  api.AudioPlayer.preparationTimeout = values["value"] as api1.Duration;
  return null;
}

Object? _AudioPlayer_static_set_seekingTimeout(Map<String, Object?> values) {
  api.AudioPlayer.seekingTimeout = values["value"] as api1.Duration;
  return null;
}

void _AudioPlayer_set_audioCache(Object receiver, Object? value) {
  (receiver as api.AudioPlayer).audioCache = value as api.AudioCache;
}

void _AudioPlayer_set_desiredState(Object receiver, Object? value) {
  (receiver as api.AudioPlayer).desiredState = value as api.PlayerState;
}

void _AudioPlayer_set_state(Object receiver, Object? value) {
  (receiver as api.AudioPlayer).state = value as api.PlayerState;
}

void _AudioPlayer_set_positionUpdater(Object receiver, Object? value) {
  (receiver as api.AudioPlayer).positionUpdater = value as api.PositionUpdater?;
}

Object? _AudioPlayer_play(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AudioPlayer).play(
    values["source"] as api.Source,
    balance: values["balance"] as double?,
    ctx: values["ctx"] as api.AudioContext?,
    mode: values["mode"] as api.PlayerMode?,
    position: values["position"] as api1.Duration?,
    volume: values["volume"] as double?,
  );
}

Object? _AudioPlayer_setAudioContext(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AudioPlayer).setAudioContext(
    values["ctx"] as api.AudioContext,
  );
}

Object? _AudioPlayer_setPlayerMode(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AudioPlayer).setPlayerMode(
    values["mode"] as api.PlayerMode,
  );
}

Object? _AudioPlayer_pause(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AudioPlayer).pause();
}

Object? _AudioPlayer_stop(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AudioPlayer).stop();
}

Object? _AudioPlayer_resume(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AudioPlayer).resume();
}

Object? _AudioPlayer_release(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AudioPlayer).release();
}

Object? _AudioPlayer_seek(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AudioPlayer).seek(
    values["position"] as api1.Duration,
  );
}

Object? _AudioPlayer_setBalance(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AudioPlayer).setBalance(values["balance"] as double);
}

Object? _AudioPlayer_setVolume(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AudioPlayer).setVolume(values["volume"] as double);
}

Object? _AudioPlayer_setReleaseMode(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AudioPlayer).setReleaseMode(
    values["releaseMode"] as api.ReleaseMode,
  );
}

Object? _AudioPlayer_setPlaybackRate(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AudioPlayer).setPlaybackRate(
    values["playbackRate"] as double,
  );
}

Object? _AudioPlayer_setSource(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AudioPlayer).setSource(
    values["source"] as api.Source,
  );
}

Object? _AudioPlayer_setSourceUrl(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AudioPlayer).setSourceUrl(
    values["url"] as String,
    mimeType: values["mimeType"] as String?,
  );
}

Object? _AudioPlayer_setSourceDeviceFile(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AudioPlayer).setSourceDeviceFile(
    values["path"] as String,
    mimeType: values["mimeType"] as String?,
  );
}

Object? _AudioPlayer_setSourceAsset(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AudioPlayer).setSourceAsset(
    values["path"] as String,
    mimeType: values["mimeType"] as String?,
  );
}

Object? _AudioPlayer_setSourceBytes(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AudioPlayer).setSourceBytes(
    values["bytes"] as api3.Uint8List,
    mimeType: values["mimeType"] as String?,
  );
}

Object? _AudioPlayer_getDuration(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AudioPlayer).getDuration();
}

Object? _AudioPlayer_getCurrentPosition(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AudioPlayer).getCurrentPosition();
}

Object? _AudioPlayer_dispose(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AudioPlayer).dispose();
}

Object? _AudioPlayer_super_play(Object receiver, Map<String, Object?> values) {
  return (receiver as _AudioPlayerProxy)._flaxSuper_play(
    values["source"] as api.Source,
    balance: values["balance"] as double?,
    ctx: values["ctx"] as api.AudioContext?,
    mode: values["mode"] as api.PlayerMode?,
    position: values["position"] as api1.Duration?,
    volume: values["volume"] as double?,
  );
}

Object? _FlaxProxyDispatch6_super_call_setAudioContext(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _FlaxProxyDispatch6)._flaxSuper_setAudioContext(
    values["ctx"] as api.AudioContext,
  );
}

Object? _AudioPlayer_super_setPlayerMode(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AudioPlayerProxy)._flaxSuper_setPlayerMode(
    values["mode"] as api.PlayerMode,
  );
}

Object? _AudioPlayer_super_pause(Object receiver, Map<String, Object?> values) {
  return (receiver as _AudioPlayerProxy)._flaxSuper_pause();
}

Object? _AudioPlayer_super_stop(Object receiver, Map<String, Object?> values) {
  return (receiver as _AudioPlayerProxy)._flaxSuper_stop();
}

Object? _AudioPlayer_super_resume(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AudioPlayerProxy)._flaxSuper_resume();
}

Object? _AudioPlayer_super_release(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AudioPlayerProxy)._flaxSuper_release();
}

Object? _AudioPlayer_super_seek(Object receiver, Map<String, Object?> values) {
  return (receiver as _AudioPlayerProxy)._flaxSuper_seek(
    values["position"] as api1.Duration,
  );
}

Object? _AudioPlayer_super_setBalance(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AudioPlayerProxy)._flaxSuper_setBalance(
    values["balance"] as double,
  );
}

Object? _AudioPlayer_super_setVolume(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AudioPlayerProxy)._flaxSuper_setVolume(
    values["volume"] as double,
  );
}

Object? _AudioPlayer_super_setReleaseMode(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AudioPlayerProxy)._flaxSuper_setReleaseMode(
    values["releaseMode"] as api.ReleaseMode,
  );
}

Object? _AudioPlayer_super_setPlaybackRate(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AudioPlayerProxy)._flaxSuper_setPlaybackRate(
    values["playbackRate"] as double,
  );
}

Object? _AudioPlayer_super_setSource(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AudioPlayerProxy)._flaxSuper_setSource(
    values["source"] as api.Source,
  );
}

Object? _AudioPlayer_super_setSourceUrl(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AudioPlayerProxy)._flaxSuper_setSourceUrl(
    values["url"] as String,
    mimeType: values["mimeType"] as String?,
  );
}

Object? _AudioPlayer_super_setSourceDeviceFile(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AudioPlayerProxy)._flaxSuper_setSourceDeviceFile(
    values["path"] as String,
    mimeType: values["mimeType"] as String?,
  );
}

Object? _AudioPlayer_super_setSourceAsset(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AudioPlayerProxy)._flaxSuper_setSourceAsset(
    values["path"] as String,
    mimeType: values["mimeType"] as String?,
  );
}

Object? _AudioPlayer_super_setSourceBytes(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AudioPlayerProxy)._flaxSuper_setSourceBytes(
    values["bytes"] as api3.Uint8List,
    mimeType: values["mimeType"] as String?,
  );
}

Object? _AudioPlayer_super_getDuration(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AudioPlayerProxy)._flaxSuper_getDuration();
}

Object? _AudioPlayer_super_getCurrentPosition(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _AudioPlayerProxy)._flaxSuper_getCurrentPosition();
}

Object? _FlaxProxyDispatch7_super_call_dispose(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _FlaxProxyDispatch7)._flaxSuper_dispose();
}

Object? _AudioPlayer_super_get_audioCache(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AudioPlayerProxy)._flaxSuperGet_audioCache;
Object? _AudioPlayer_super_get_playerId(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AudioPlayerProxy)._flaxSuperGet_playerId;
Object? _AudioPlayer_super_get_source(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AudioPlayerProxy)._flaxSuperGet_source;
Object? _AudioPlayer_super_get_volume(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AudioPlayerProxy)._flaxSuperGet_volume;
Object? _AudioPlayer_super_get_balance(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AudioPlayerProxy)._flaxSuperGet_balance;
Object? _AudioPlayer_super_get_playbackRate(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AudioPlayerProxy)._flaxSuperGet_playbackRate;
Object? _AudioPlayer_super_get_mode(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AudioPlayerProxy)._flaxSuperGet_mode;
Object? _AudioPlayer_super_get_releaseMode(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AudioPlayerProxy)._flaxSuperGet_releaseMode;
Object? _AudioPlayer_super_get_desiredState(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AudioPlayerProxy)._flaxSuperGet_desiredState;
Object? _AudioPlayer_super_get_state(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AudioPlayerProxy)._flaxSuperGet_state;
Object? _AudioPlayer_super_get_eventStream(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AudioPlayerProxy)._flaxSuperGet_eventStream;
Object? _AudioPlayer_super_get_onPlayerStateChanged(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AudioPlayerProxy)._flaxSuperGet_onPlayerStateChanged;
Object? _AudioPlayer_super_get_onPositionChanged(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AudioPlayerProxy)._flaxSuperGet_onPositionChanged;
Object? _AudioPlayer_super_get_onDurationChanged(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AudioPlayerProxy)._flaxSuperGet_onDurationChanged;
Object? _AudioPlayer_super_get_onPlayerComplete(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AudioPlayerProxy)._flaxSuperGet_onPlayerComplete;
Object? _AudioPlayer_super_get_onSeekComplete(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AudioPlayerProxy)._flaxSuperGet_onSeekComplete;
Object? _FlaxProxyDispatch6_super_get_onLog(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch6)._flaxSuperGet_onLog;
Object? _AudioPlayer_super_set_audioCache(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AudioPlayerProxy)._flaxSuperSet_audioCache(
    values["value"] as api.AudioCache,
  );
  return null;
}

Object? _AudioPlayer_super_set_desiredState(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AudioPlayerProxy)._flaxSuperSet_desiredState(
    values["value"] as api.PlayerState,
  );
  return null;
}

Object? _AudioPlayer_super_set_state(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AudioPlayerProxy)._flaxSuperSet_state(
    values["value"] as api.PlayerState,
  );
  return null;
}

Object? _AudioPlayer_super_set_positionUpdater(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AudioPlayerProxy)._flaxSuperSet_positionUpdater(
    values["value"] as api.PositionUpdater?,
  );
  return null;
}

Object _createAudioPlayer(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.AudioPlayer(playerId: values["playerId"] as String?);
    case '@implementation':
      return _AudioPlayerProxy(
        values['@peer'] as FlaxProxyPeer,
        playerId: values["playerId"] as String?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isAudioPlayerException(Object value) => value is api.AudioPlayerException;
Object? _AudioPlayerException_cause(Object value) =>
    (value as api.AudioPlayerException).cause;
Object? _AudioPlayerException_player(Object value) =>
    (value as api.AudioPlayerException).player;
void _AudioPlayerException_set_cause(Object receiver, Object? value) {
  (receiver as api.AudioPlayerException).cause = value;
}

void _AudioPlayerException_set_player(Object receiver, Object? value) {
  (receiver as api.AudioPlayerException).player = value as api.AudioPlayer;
}

Object? _AudioPlayerException_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.AudioPlayerException).toString();
}

Object? _AudioPlayerException_super_get_cause(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AudioPlayerExceptionProxy)._flaxSuperGet_cause;
Object? _AudioPlayerException_super_get_player(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _AudioPlayerExceptionProxy)._flaxSuperGet_player;
Object? _AudioPlayerException_super_set_cause(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AudioPlayerExceptionProxy)._flaxSuperSet_cause(values["value"]);
  return null;
}

Object? _AudioPlayerException_super_set_player(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _AudioPlayerExceptionProxy)._flaxSuperSet_player(
    values["value"] as api.AudioPlayer,
  );
  return null;
}

Object _createAudioPlayerException(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.AudioPlayerException(
        values["player"] as api.AudioPlayer,
        cause: values["cause"],
      );
    case '@implementation':
      return _AudioPlayerExceptionProxy(
        values['@peer'] as FlaxProxyPeer,
        values["player"] as api.AudioPlayer,
        cause: values["cause"],
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isAudioPool(Object value) => value is api.AudioPool;
Object? _AudioPool_currentPlayers(Object value) =>
    (value as api.AudioPool).currentPlayers;
Object? _AudioPool_availablePlayers(Object value) =>
    (value as api.AudioPool).availablePlayers;
Object? _AudioPool_audioCache(Object value) =>
    (value as api.AudioPool).audioCache;
Object? _AudioPool_audioContext(Object value) =>
    (value as api.AudioPool).audioContext;
Object? _AudioPool_source(Object value) => (value as api.AudioPool).source;
Object? _AudioPool_minPlayers(Object value) =>
    (value as api.AudioPool).minPlayers;
Object? _AudioPool_maxPlayers(Object value) =>
    (value as api.AudioPool).maxPlayers;
Object? _AudioPool_playerMode(Object value) =>
    (value as api.AudioPool).playerMode;
Object? _AudioPool_duration(Object value) => (value as api.AudioPool).duration;
void _AudioPool_set_duration(Object receiver, Object? value) {
  (receiver as api.AudioPool).duration = value as api1.Duration?;
}

Object? _AudioPool_create(Map<String, Object?> values) {
  return api.AudioPool.create(
    audioCache: values["audioCache"] as api.AudioCache?,
    audioContext: values["audioContext"] as api.AudioContext?,
    maxPlayers: values["maxPlayers"] as int,
    minPlayers: values["minPlayers"] as int,
    playerMode: values["playerMode"] as api.PlayerMode,
    source: values["source"] as api.Source,
  );
}

Object? _AudioPool_createFromAsset(Map<String, Object?> values) {
  return api.AudioPool.createFromAsset(
    audioCache: values["audioCache"] as api.AudioCache?,
    maxPlayers: values["maxPlayers"] as int,
    minPlayers: values["minPlayers"] as int,
    path: values["path"] as String,
    playerMode: values["playerMode"] as api.PlayerMode,
  );
}

Object? _AudioPool_start(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AudioPool).start(volume: values["volume"] as double);
}

Object? _AudioPool_getDuration(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AudioPool).getDuration();
}

Object? _AudioPool_dispose(Object receiver, Map<String, Object?> values) {
  return (receiver as api.AudioPool).dispose();
}

Object _createAudioPool(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isBytesSource(Object value) => value is api.BytesSource;
Object? _BytesSource_bytes(Object value) => (value as api.BytesSource).bytes;
Object? _BytesSource_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.BytesSource).toString();
}

Object? _BytesSource_super_get_bytes(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _BytesSourceProxy)._flaxSuperGet_bytes;
Object _createBytesSource(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.BytesSource(
        values["bytes"] as api3.Uint8List,
        mimeType: values["mimeType"] as String?,
      );
    case '@implementation':
      return _BytesSourceProxy(
        values['@peer'] as FlaxProxyPeer,
        values["bytes"] as api3.Uint8List,
        mimeType: values["mimeType"] as String?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isDeviceFileSource(Object value) => value is api.DeviceFileSource;
Object? _DeviceFileSource_path(Object value) =>
    (value as api.DeviceFileSource).path;
Object? _DeviceFileSource_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.DeviceFileSource).toString();
}

Object _createDeviceFileSource(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.DeviceFileSource(
        values["path"] as String,
        mimeType: values["mimeType"] as String?,
      );
    case '@implementation':
      return _DeviceFileSourceProxy(
        values['@peer'] as FlaxProxyPeer,
        values["path"] as String,
        mimeType: values["mimeType"] as String?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isFramePositionUpdater(Object value) => value is api.FramePositionUpdater;
Object? _FlaxProxyDispatch8_super_call_update(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _FlaxProxyDispatch8)._flaxSuper_update();
}

Object? _FlaxProxyDispatch9_super_call_start(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _FlaxProxyDispatch9)._flaxSuper_start();
  return null;
}

Object? _FlaxProxyDispatch9_super_call_stop(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _FlaxProxyDispatch9)._flaxSuper_stop();
  return null;
}

Object? _FlaxProxyDispatch8_super_call_stopAndUpdate(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _FlaxProxyDispatch8)._flaxSuper_stopAndUpdate();
}

Object? _FlaxProxyDispatch8_super_get_getPosition(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch8)._flaxSuperGet_getPosition;
Object? _FlaxProxyDispatch8_super_get_positionStream(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _FlaxProxyDispatch8)._flaxSuperGet_positionStream;
Object _createFramePositionUpdater(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.FramePositionUpdater(
        getPosition: values["getPosition"] as Future<api1.Duration?> Function(),
      );
    case '@implementation':
      return _FramePositionUpdaterProxy(
        values['@peer'] as FlaxProxyPeer,
        getPosition: values["getPosition"] as Future<api1.Duration?> Function(),
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isGlobalAudioEvent(Object value) => value is api.GlobalAudioEvent;
Object? _GlobalAudioEvent_eventType(Object value) =>
    (value as api.GlobalAudioEvent).eventType;
Object? _GlobalAudioEvent_logMessage(Object value) =>
    (value as api.GlobalAudioEvent).logMessage;
Object? _GlobalAudioEvent_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.GlobalAudioEvent).toString();
}

Object? _GlobalAudioEvent_super_get_eventType(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _GlobalAudioEventProxy)._flaxSuperGet_eventType;
Object _createGlobalAudioEvent(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.GlobalAudioEvent(
        eventType: values["eventType"] as api.GlobalAudioEventType,
        logMessage: values["logMessage"] as String?,
      );
    case '@implementation':
      return _GlobalAudioEventProxy(
        values['@peer'] as FlaxProxyPeer,
        eventType: values["eventType"] as api.GlobalAudioEventType,
        logMessage: values["logMessage"] as String?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isGlobalAudioScope(Object value) => value is api.GlobalAudioScope;
Object? _GlobalAudioScope_eventStream(Object value) =>
    (value as api.GlobalAudioScope).eventStream;
Object? _GlobalAudioScope_onLog(Object value) =>
    (value as api.GlobalAudioScope).onLog;
void _GlobalAudioScope_set_eventStream(Object receiver, Object? value) {
  (receiver as api.GlobalAudioScope).eventStream =
      value as api2.Stream<api.GlobalAudioEvent>;
}

Object? _GlobalAudioScope_ensureInitialized(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.GlobalAudioScope).ensureInitialized();
}

Object? _GlobalAudioScope_setAudioContext(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.GlobalAudioScope).setAudioContext(
    values["ctx"] as api.AudioContext,
  );
}

Object? _GlobalAudioScope_super_ensureInitialized(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as _GlobalAudioScopeProxy)._flaxSuper_ensureInitialized();
}

Object? _GlobalAudioScope_super_get_eventStream(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _GlobalAudioScopeProxy)._flaxSuperGet_eventStream;
Object? _GlobalAudioScope_super_set_eventStream(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as _GlobalAudioScopeProxy)._flaxSuperSet_eventStream(
    values["value"] as api2.Stream<api.GlobalAudioEvent>,
  );
  return null;
}

Object _createGlobalAudioScope(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.GlobalAudioScope();
    case '@implementation':
      return _GlobalAudioScopeProxy(values['@peer'] as FlaxProxyPeer);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isPositionUpdater(Object value) => value is api.PositionUpdater;
Object? _PositionUpdater_getPosition(Object value) =>
    (value as api.PositionUpdater).getPosition;
Object? _PositionUpdater_positionStream(Object value) =>
    (value as api.PositionUpdater).positionStream;
Object? _PositionUpdater_update(Object receiver, Map<String, Object?> values) {
  return (receiver as api.PositionUpdater).update();
}

Object? _PositionUpdater_start(Object receiver, Map<String, Object?> values) {
  (receiver as api.PositionUpdater).start();
  return null;
}

Object? _PositionUpdater_stop(Object receiver, Map<String, Object?> values) {
  (receiver as api.PositionUpdater).stop();
  return null;
}

Object? _PositionUpdater_stopAndUpdate(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.PositionUpdater).stopAndUpdate();
}

Object? _PositionUpdater_dispose(Object receiver, Map<String, Object?> values) {
  return (receiver as api.PositionUpdater).dispose();
}

Object _createPositionUpdater(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case '@implementation':
      return _PositionUpdaterProxy(
        values['@peer'] as FlaxProxyPeer,
        getPosition: values["getPosition"] as Future<api1.Duration?> Function(),
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isSource(Object value) => value is api.Source;
Object? _Source_mimeType(Object value) => (value as api.Source).mimeType;
Object? _Source_setOnPlayer(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Source).setOnPlayer(
    values["player"] as api.AudioPlayer,
  );
}

Object _createSource(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case '@implementation':
      return _SourceProxy(values['@peer'] as FlaxProxyPeer);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isTimerPositionUpdater(Object value) => value is api.TimerPositionUpdater;
Object? _TimerPositionUpdater_interval(Object value) =>
    (value as api.TimerPositionUpdater).interval;
Object? _TimerPositionUpdater_super_get_interval(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _TimerPositionUpdaterProxy)._flaxSuperGet_interval;
Object _createTimerPositionUpdater(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.TimerPositionUpdater(
        getPosition: values["getPosition"] as Future<api1.Duration?> Function(),
        interval: values["interval"] as api1.Duration,
      );
    case '@implementation':
      return _TimerPositionUpdaterProxy(
        values['@peer'] as FlaxProxyPeer,
        getPosition: values["getPosition"] as Future<api1.Duration?> Function(),
        interval: values["interval"] as api1.Duration,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isUrlSource(Object value) => value is api.UrlSource;
Object? _UrlSource_url(Object value) => (value as api.UrlSource).url;
Object? _UrlSource_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.UrlSource).toString();
}

Object? _UrlSource_super_get_url(
  Object receiver,
  Map<String, Object?> values,
) => (receiver as _UrlSourceProxy)._flaxSuperGet_url;
Object _createUrlSource(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.UrlSource(
        values["url"] as String,
        mimeType: values["mimeType"] as String?,
      );
    case '@implementation':
      return _UrlSourceProxy(
        values['@peer'] as FlaxProxyPeer,
        values["url"] as String,
        mimeType: values["mimeType"] as String?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

abstract interface class _FlaxProxyDispatch1 {
  FlaxProxyPeer get _flaxPeer;
  String _flaxSuper_toString();
}

String _FlaxProxyDispatch1_call_toString(
  _FlaxProxyDispatch1 _flaxReceiver,
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

abstract interface class _FlaxProxyDispatch8 {
  FlaxProxyPeer get _flaxPeer;
  Future<void> _flaxSuper_update();
  Future<void> _flaxSuper_stopAndUpdate();
  Future<api1.Duration?> Function() get _flaxSuperGet_getPosition;
  api2.Stream<api1.Duration> get _flaxSuperGet_positionStream;
}

Future<void> _FlaxProxyDispatch8_call_update(
  _FlaxProxyDispatch8 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    <Object?>[],
    <String, Object?>{},
  );
  if (!_flaxResult.$1) {
    return _flaxReceiver._flaxSuper_update();
  }
  final _flaxConvertedResult = (_flaxResult.$2 as Future<Object?>).then<void>(
    (value) => null,
  );
  return _flaxConvertedResult;
}

Future<void> _FlaxProxyDispatch8_call_stopAndUpdate(
  _FlaxProxyDispatch8 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    <Object?>[],
    <String, Object?>{},
  );
  if (!_flaxResult.$1) {
    return _flaxReceiver._flaxSuper_stopAndUpdate();
  }
  final _flaxConvertedResult = (_flaxResult.$2 as Future<Object?>).then<void>(
    (value) => null,
  );
  return _flaxConvertedResult;
}

Future<api1.Duration?> Function() _FlaxProxyDispatch8_get_getPosition(
  _FlaxProxyDispatch8 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_getPosition;
  final _flaxConvertedResult =
      _flaxResult.$2 as Future<api1.Duration?> Function();
  return _flaxConvertedResult;
}

api2.Stream<api1.Duration> _FlaxProxyDispatch8_get_positionStream(
  _FlaxProxyDispatch8 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_positionStream;
  final _flaxConvertedResult = _flaxResult.$2 as api2.Stream<api1.Duration>;
  return _flaxConvertedResult;
}

abstract interface class _FlaxProxyDispatch0 {
  FlaxProxyPeer get _flaxPeer;
  Future<void> _flaxSuper_setOnPlayer(api.AudioPlayer player);
  String? get _flaxSuperGet_mimeType;
}

Future<void> _FlaxProxyDispatch0_call_setOnPlayer(
  _FlaxProxyDispatch0 _flaxReceiver,
  int _flaxMember,
  api.AudioPlayer player,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(_flaxMember, <Object?>[
    player,
  ], <String, Object?>{});
  if (!_flaxResult.$1) {
    return _flaxReceiver._flaxSuper_setOnPlayer(player);
  }
  final _flaxConvertedResult = (_flaxResult.$2 as Future<Object?>).then<void>(
    (value) => null,
  );
  return _flaxConvertedResult;
}

String? _FlaxProxyDispatch0_get_mimeType(
  _FlaxProxyDispatch0 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_mimeType;
  final _flaxConvertedResult = _flaxResult.$2 as String?;
  return _flaxConvertedResult;
}

abstract interface class _FlaxProxyDispatch7 {
  FlaxProxyPeer get _flaxPeer;
  Future<void> _flaxSuper_dispose();
}

Future<void> _FlaxProxyDispatch7_call_dispose(
  _FlaxProxyDispatch7 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    <Object?>[],
    <String, Object?>{},
  );
  if (!_flaxResult.$1) {
    return _flaxReceiver._flaxSuper_dispose();
  }
  final _flaxConvertedResult = (_flaxResult.$2 as Future<Object?>).then<void>(
    (value) => null,
  );
  return _flaxConvertedResult;
}

abstract interface class _FlaxProxyDispatch3 {
  FlaxProxyPeer get _flaxPeer;
  Map<String, Object?> _flaxSuper_toJson();
}

Map<String, Object?> _FlaxProxyDispatch3_call_toJson(
  _FlaxProxyDispatch3 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    <Object?>[],
    <String, Object?>{},
  );
  if (!_flaxResult.$1) {
    return _flaxReceiver._flaxSuper_toJson();
  }
  final _flaxConvertedResult = _flaxResult.$2 as Map<String, Object?>;
  return _flaxConvertedResult;
}

abstract interface class _FlaxProxyDispatch6 {
  FlaxProxyPeer get _flaxPeer;
  Future<void> _flaxSuper_setAudioContext(api.AudioContext ctx);
  api2.Stream<String> get _flaxSuperGet_onLog;
}

Future<void> _FlaxProxyDispatch6_call_setAudioContext(
  _FlaxProxyDispatch6 _flaxReceiver,
  int _flaxMember,
  api.AudioContext ctx,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(_flaxMember, <Object?>[
    ctx,
  ], <String, Object?>{});
  if (!_flaxResult.$1) {
    return _flaxReceiver._flaxSuper_setAudioContext(ctx);
  }
  final _flaxConvertedResult = (_flaxResult.$2 as Future<Object?>).then<void>(
    (value) => null,
  );
  return _flaxConvertedResult;
}

api2.Stream<String> _FlaxProxyDispatch6_get_onLog(
  _FlaxProxyDispatch6 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_onLog;
  final _flaxConvertedResult = _flaxResult.$2 as api2.Stream<String>;
  return _flaxConvertedResult;
}

abstract interface class _FlaxProxyDispatch9 {
  FlaxProxyPeer get _flaxPeer;
  void _flaxSuper_start();
  void _flaxSuper_stop();
}

void _FlaxProxyDispatch9_call_start(
  _FlaxProxyDispatch9 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    <Object?>[],
    <String, Object?>{},
  );
  if (!_flaxResult.$1) {
    _flaxReceiver._flaxSuper_start();
    return;
  }
  return;
}

void _FlaxProxyDispatch9_call_stop(
  _FlaxProxyDispatch9 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    <Object?>[],
    <String, Object?>{},
  );
  if (!_flaxResult.$1) {
    _flaxReceiver._flaxSuper_stop();
    return;
  }
  return;
}

abstract interface class _FlaxProxyDispatch2 {
  FlaxProxyPeer get _flaxPeer;
  String get _flaxSuperGet_path;
}

String _FlaxProxyDispatch2_get_path(
  _FlaxProxyDispatch2 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_path;
  final _flaxConvertedResult = _flaxResult.$2 as String;
  return _flaxConvertedResult;
}

abstract interface class _FlaxProxyDispatch4 {
  FlaxProxyPeer get _flaxPeer;
  bool get _flaxSuperGet_stayAwake;
}

bool _FlaxProxyDispatch4_get_stayAwake(
  _FlaxProxyDispatch4 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_stayAwake;
  final _flaxConvertedResult = _flaxResult.$2 as bool;
  return _flaxConvertedResult;
}

abstract interface class _FlaxProxyDispatch5 {
  FlaxProxyPeer get _flaxPeer;
  String? get _flaxSuperGet_logMessage;
}

String? _FlaxProxyDispatch5_get_logMessage(
  _FlaxProxyDispatch5 _flaxReceiver,
  int _flaxMember,
) {
  final _flaxResult = _flaxReceiver._flaxPeer.call(
    _flaxMember,
    const [],
    const {},
  );
  if (!_flaxResult.$1) return _flaxReceiver._flaxSuperGet_logMessage;
  final _flaxConvertedResult = _flaxResult.$2 as String?;
  return _flaxConvertedResult;
}

final class _AssetSourceProxy extends api.AssetSource
    implements _FlaxProxyDispatch1, _FlaxProxyDispatch0, _FlaxProxyDispatch2 {
  final FlaxProxyPeer _flaxPeer;
  _AssetSourceProxy(
    this._flaxPeer,
    String super.path, {
    String? super.mimeType,
  });
  @override
  Future<void> setOnPlayer(api.AudioPlayer player) {
    return _FlaxProxyDispatch0_call_setOnPlayer(this, 0, player);
  }

  Future<void> _flaxSuper_setOnPlayer(api.AudioPlayer player) {
    return super.setOnPlayer(player);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 1);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  String get path => _FlaxProxyDispatch2_get_path(this, 2);
  String get _flaxSuperGet_path {
    return super.path;
  }

  @override
  String? get mimeType => _FlaxProxyDispatch0_get_mimeType(this, 3);
  String? get _flaxSuperGet_mimeType {
    return super.mimeType;
  }
}

final class _AudioCacheProxy extends api.AudioCache {
  final FlaxProxyPeer _flaxPeer;
  _AudioCacheProxy(
    this._flaxPeer, {
    String super.prefix,
    String? super.cacheId,
  });
  @override
  Future<void> clear(String fileName) {
    final _flaxResult = _flaxPeer.call(0, <Object?>[
      fileName,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_clear(fileName);
    }
    final _flaxConvertedResult = (_flaxResult.$2 as Future<Object?>).then<void>(
      (value) => null,
    );
    return _flaxConvertedResult;
  }

  Future<void> _flaxSuper_clear(String fileName) {
    return super.clear(fileName);
  }

  @override
  Future<void> clearAll() {
    final _flaxResult = _flaxPeer.call(1, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_clearAll();
    }
    final _flaxConvertedResult = (_flaxResult.$2 as Future<Object?>).then<void>(
      (value) => null,
    );
    return _flaxConvertedResult;
  }

  Future<void> _flaxSuper_clearAll() {
    return super.clearAll();
  }

  @override
  Future<api1.Uri> fetchToMemory(String fileName) {
    final _flaxResult = _flaxPeer.call(2, <Object?>[
      fileName,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_fetchToMemory(fileName);
    }
    final _flaxConvertedResult = (_flaxResult.$2 as Future<Object?>)
        .then<api1.Uri>((value) => value as api1.Uri);
    return _flaxConvertedResult;
  }

  Future<api1.Uri> _flaxSuper_fetchToMemory(String fileName) {
    return super.fetchToMemory(fileName);
  }

  @override
  Future<api1.Uri> load(String fileName) {
    final _flaxResult = _flaxPeer.call(3, <Object?>[
      fileName,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_load(fileName);
    }
    final _flaxConvertedResult = (_flaxResult.$2 as Future<Object?>)
        .then<api1.Uri>((value) => value as api1.Uri);
    return _flaxConvertedResult;
  }

  Future<api1.Uri> _flaxSuper_load(String fileName) {
    return super.load(fileName);
  }

  @override
  Future<String> loadPath(String fileName) {
    final _flaxResult = _flaxPeer.call(4, <Object?>[
      fileName,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_loadPath(fileName);
    }
    final _flaxConvertedResult = (_flaxResult.$2 as Future<Object?>)
        .then<String>((value) => value as String);
    return _flaxConvertedResult;
  }

  Future<String> _flaxSuper_loadPath(String fileName) {
    return super.loadPath(fileName);
  }

  @override
  Future<api3.Uint8List> loadAsBytes(String fileName) {
    final _flaxResult = _flaxPeer.call(5, <Object?>[
      fileName,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_loadAsBytes(fileName);
    }
    final _flaxConvertedResult = (_flaxResult.$2 as Future<Object?>)
        .then<api3.Uint8List>((value) => value as api3.Uint8List);
    return _flaxConvertedResult;
  }

  Future<api3.Uint8List> _flaxSuper_loadAsBytes(String fileName) {
    return super.loadAsBytes(fileName);
  }

  @override
  Future<List<api1.Uri>> loadAll(List<String> fileNames) {
    final _flaxResult = _flaxPeer.call(6, <Object?>[
      fileNames,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_loadAll(fileNames);
    }
    final _flaxConvertedResult = (_flaxResult.$2 as Future<Object?>)
        .then<List<api1.Uri>>((value) => value as List<api1.Uri>);
    return _flaxConvertedResult;
  }

  Future<List<api1.Uri>> _flaxSuper_loadAll(List<String> fileNames) {
    return super.loadAll(fileNames);
  }

  @override
  Map<String, api1.Uri> get loadedFiles {
    final _flaxResult = _flaxPeer.call(7, const [], const {});
    if (!_flaxResult.$1) return super.loadedFiles;
    final _flaxConvertedResult = _flaxResult.$2 as Map<String, api1.Uri>;
    return _flaxConvertedResult;
  }

  Map<String, api1.Uri> get _flaxSuperGet_loadedFiles {
    return super.loadedFiles;
  }

  @override
  String get prefix {
    final _flaxResult = _flaxPeer.call(8, const [], const {});
    if (!_flaxResult.$1) return super.prefix;
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  String get _flaxSuperGet_prefix {
    return super.prefix;
  }

  @override
  String? get cacheId {
    final _flaxResult = _flaxPeer.call(9, const [], const {});
    if (!_flaxResult.$1) return super.cacheId;
    final _flaxConvertedResult = _flaxResult.$2 as String?;
    return _flaxConvertedResult;
  }

  String? get _flaxSuperGet_cacheId {
    return super.cacheId;
  }

  @override
  set prefix(String value) {
    final result = _flaxPeer.call(10, [value], const {});
    if (!result.$1) {
      super.prefix = value;
      return;
    }
  }

  void _flaxSuperSet_prefix(String value) {
    super.prefix = value;
  }

  @override
  set cacheId(String? value) {
    final result = _flaxPeer.call(11, [value], const {});
    if (!result.$1) {
      super.cacheId = value;
      return;
    }
  }

  void _flaxSuperSet_cacheId(String? value) {
    super.cacheId = value;
  }
}

final class _AudioContextProxy extends api.AudioContext
    implements _FlaxProxyDispatch1, _FlaxProxyDispatch3 {
  final FlaxProxyPeer _flaxPeer;
  _AudioContextProxy(
    this._flaxPeer, {
    api.AudioContextAndroid? super.android,
    api.AudioContextIOS? super.iOS,
  });
  @override
  api.AudioContext copy({
    Object? android = _flaxOmitted,
    Object? iOS = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(0, <Object?>[], <String, Object?>{
      if (!identical(android, _flaxOmitted)) "android": android,
      if (!identical(iOS, _flaxOmitted)) "iOS": iOS,
    });
    if (!_flaxResult.$1) {
      return _flaxSuper_copy(android: android, iOS: iOS);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.AudioContext;
    return _flaxConvertedResult;
  }

  api.AudioContext _flaxSuper_copy({
    Object? android = _flaxOmitted,
    Object? iOS = _flaxOmitted,
  }) {
    final _flaxHas0 = !identical(android, _flaxOmitted);
    final _flaxHas1 = !identical(iOS, _flaxOmitted);
    return (flaxInvokeWithDefaults(
      super.copy,
      <Object?>[
        (_flaxHas0 ? android as api.AudioContextAndroid? : null),
        (_flaxHas1 ? iOS as api.AudioContextIOS? : null),
      ],
      <int>[(_flaxHas0 ? 1 : 0) | (_flaxHas1 ? 2 : 0)],
      const <String>["android", "iOS"],
    ) as api.AudioContext);
  }

  @override
  Map<String, Object?> toJson() {
    return _FlaxProxyDispatch3_call_toJson(this, 1);
  }

  Map<String, Object?> _flaxSuper_toJson() {
    return super.toJson();
  }

  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 2);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  api.AudioContextAndroid get android {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    if (!_flaxResult.$1) return super.android;
    final _flaxConvertedResult = _flaxResult.$2 as api.AudioContextAndroid;
    return _flaxConvertedResult;
  }

  api.AudioContextAndroid get _flaxSuperGet_android {
    return super.android;
  }

  @override
  api.AudioContextIOS get iOS {
    final _flaxResult = _flaxPeer.call(4, const [], const {});
    if (!_flaxResult.$1) return super.iOS;
    final _flaxConvertedResult = _flaxResult.$2 as api.AudioContextIOS;
    return _flaxConvertedResult;
  }

  api.AudioContextIOS get _flaxSuperGet_iOS {
    return super.iOS;
  }

  @override
  set iOS(api.AudioContextIOS value) {
    final result = _flaxPeer.call(5, [value], const {});
    if (!result.$1) {
      super.iOS = value;
      return;
    }
  }

  void _flaxSuperSet_iOS(api.AudioContextIOS value) {
    super.iOS = value;
  }
}

final class _AudioContextAndroidProxy extends api.AudioContextAndroid
    implements _FlaxProxyDispatch1, _FlaxProxyDispatch3, _FlaxProxyDispatch4 {
  final FlaxProxyPeer _flaxPeer;
  _AudioContextAndroidProxy(
    this._flaxPeer, {
    bool super.isSpeakerphoneOn,
    api.AndroidAudioMode super.audioMode,
    bool super.stayAwake,
    api.AndroidContentType super.contentType,
    api.AndroidUsageType super.usageType,
    api.AndroidAudioFocus super.audioFocus,
  });
  @override
  api.AudioContextAndroid copy({
    Object? isSpeakerphoneOn = _flaxOmitted,
    Object? audioMode = _flaxOmitted,
    Object? stayAwake = _flaxOmitted,
    Object? contentType = _flaxOmitted,
    Object? usageType = _flaxOmitted,
    Object? audioFocus = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(0, <Object?>[], <String, Object?>{
      if (!identical(isSpeakerphoneOn, _flaxOmitted))
        "isSpeakerphoneOn": isSpeakerphoneOn,
      if (!identical(audioMode, _flaxOmitted)) "audioMode": audioMode,
      if (!identical(stayAwake, _flaxOmitted)) "stayAwake": stayAwake,
      if (!identical(contentType, _flaxOmitted)) "contentType": contentType,
      if (!identical(usageType, _flaxOmitted)) "usageType": usageType,
      if (!identical(audioFocus, _flaxOmitted)) "audioFocus": audioFocus,
    });
    if (!_flaxResult.$1) {
      return _flaxSuper_copy(
        isSpeakerphoneOn: isSpeakerphoneOn,
        audioMode: audioMode,
        stayAwake: stayAwake,
        contentType: contentType,
        usageType: usageType,
        audioFocus: audioFocus,
      );
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.AudioContextAndroid;
    return _flaxConvertedResult;
  }

  api.AudioContextAndroid _flaxSuper_copy({
    Object? isSpeakerphoneOn = _flaxOmitted,
    Object? audioMode = _flaxOmitted,
    Object? stayAwake = _flaxOmitted,
    Object? contentType = _flaxOmitted,
    Object? usageType = _flaxOmitted,
    Object? audioFocus = _flaxOmitted,
  }) {
    final _flaxHas0 = !identical(isSpeakerphoneOn, _flaxOmitted);
    final _flaxHas1 = !identical(audioMode, _flaxOmitted);
    final _flaxHas2 = !identical(stayAwake, _flaxOmitted);
    final _flaxHas3 = !identical(contentType, _flaxOmitted);
    final _flaxHas4 = !identical(usageType, _flaxOmitted);
    final _flaxHas5 = !identical(audioFocus, _flaxOmitted);
    return (flaxInvokeWithDefaults(
      super.copy,
      <Object?>[
        (_flaxHas0 ? isSpeakerphoneOn as bool? : null),
        (_flaxHas1 ? audioMode as api.AndroidAudioMode? : null),
        (_flaxHas2 ? stayAwake as bool? : null),
        (_flaxHas3 ? contentType as api.AndroidContentType? : null),
        (_flaxHas4 ? usageType as api.AndroidUsageType? : null),
        (_flaxHas5 ? audioFocus as api.AndroidAudioFocus? : null),
      ],
      <int>[
        (_flaxHas0 ? 1 : 0) |
            (_flaxHas1 ? 2 : 0) |
            (_flaxHas2 ? 4 : 0) |
            (_flaxHas3 ? 8 : 0) |
            (_flaxHas4 ? 16 : 0) |
            (_flaxHas5 ? 32 : 0),
      ],
      const <String>[
        "isSpeakerphoneOn",
        "audioMode",
        "stayAwake",
        "contentType",
        "usageType",
        "audioFocus",
      ],
    ) as api.AudioContextAndroid);
  }

  @override
  Map<String, Object?> toJson() {
    return _FlaxProxyDispatch3_call_toJson(this, 1);
  }

  Map<String, Object?> _flaxSuper_toJson() {
    return super.toJson();
  }

  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 2);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  bool get isSpeakerphoneOn {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    if (!_flaxResult.$1) return super.isSpeakerphoneOn;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_isSpeakerphoneOn {
    return super.isSpeakerphoneOn;
  }

  @override
  api.AndroidAudioMode get audioMode {
    final _flaxResult = _flaxPeer.call(4, const [], const {});
    if (!_flaxResult.$1) return super.audioMode;
    final _flaxConvertedResult = _flaxResult.$2 as api.AndroidAudioMode;
    return _flaxConvertedResult;
  }

  api.AndroidAudioMode get _flaxSuperGet_audioMode {
    return super.audioMode;
  }

  @override
  bool get stayAwake => _FlaxProxyDispatch4_get_stayAwake(this, 5);
  bool get _flaxSuperGet_stayAwake {
    return super.stayAwake;
  }

  @override
  api.AndroidContentType get contentType {
    final _flaxResult = _flaxPeer.call(6, const [], const {});
    if (!_flaxResult.$1) return super.contentType;
    final _flaxConvertedResult = _flaxResult.$2 as api.AndroidContentType;
    return _flaxConvertedResult;
  }

  api.AndroidContentType get _flaxSuperGet_contentType {
    return super.contentType;
  }

  @override
  api.AndroidUsageType get usageType {
    final _flaxResult = _flaxPeer.call(7, const [], const {});
    if (!_flaxResult.$1) return super.usageType;
    final _flaxConvertedResult = _flaxResult.$2 as api.AndroidUsageType;
    return _flaxConvertedResult;
  }

  api.AndroidUsageType get _flaxSuperGet_usageType {
    return super.usageType;
  }

  @override
  api.AndroidAudioFocus get audioFocus {
    final _flaxResult = _flaxPeer.call(8, const [], const {});
    if (!_flaxResult.$1) return super.audioFocus;
    final _flaxConvertedResult = _flaxResult.$2 as api.AndroidAudioFocus;
    return _flaxConvertedResult;
  }

  api.AndroidAudioFocus get _flaxSuperGet_audioFocus {
    return super.audioFocus;
  }
}

final class _AudioContextConfigProxy extends api.AudioContextConfig
    implements _FlaxProxyDispatch1, _FlaxProxyDispatch4 {
  final FlaxProxyPeer _flaxPeer;
  _AudioContextConfigProxy(
    this._flaxPeer, {
    api.AudioContextConfigRoute super.route,
    api.AudioContextConfigFocus super.focus,
    bool super.respectSilence,
    bool super.stayAwake,
  });
  @override
  api.AudioContextConfig copy({
    Object? route = _flaxOmitted,
    Object? focus = _flaxOmitted,
    Object? respectSilence = _flaxOmitted,
    Object? stayAwake = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(0, <Object?>[], <String, Object?>{
      if (!identical(route, _flaxOmitted)) "route": route,
      if (!identical(focus, _flaxOmitted)) "focus": focus,
      if (!identical(respectSilence, _flaxOmitted))
        "respectSilence": respectSilence,
      if (!identical(stayAwake, _flaxOmitted)) "stayAwake": stayAwake,
    });
    if (!_flaxResult.$1) {
      return _flaxSuper_copy(
        route: route,
        focus: focus,
        respectSilence: respectSilence,
        stayAwake: stayAwake,
      );
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.AudioContextConfig;
    return _flaxConvertedResult;
  }

  api.AudioContextConfig _flaxSuper_copy({
    Object? route = _flaxOmitted,
    Object? focus = _flaxOmitted,
    Object? respectSilence = _flaxOmitted,
    Object? stayAwake = _flaxOmitted,
  }) {
    final _flaxHas0 = !identical(route, _flaxOmitted);
    final _flaxHas1 = !identical(focus, _flaxOmitted);
    final _flaxHas2 = !identical(respectSilence, _flaxOmitted);
    final _flaxHas3 = !identical(stayAwake, _flaxOmitted);
    return (flaxInvokeWithDefaults(
      super.copy,
      <Object?>[
        (_flaxHas0 ? route as api.AudioContextConfigRoute? : null),
        (_flaxHas1 ? focus as api.AudioContextConfigFocus? : null),
        (_flaxHas2 ? respectSilence as bool? : null),
        (_flaxHas3 ? stayAwake as bool? : null),
      ],
      <int>[
        (_flaxHas0 ? 1 : 0) |
            (_flaxHas1 ? 2 : 0) |
            (_flaxHas2 ? 4 : 0) |
            (_flaxHas3 ? 8 : 0),
      ],
      const <String>["route", "focus", "respectSilence", "stayAwake"],
    ) as api.AudioContextConfig);
  }

  @override
  api.AudioContext build() {
    final _flaxResult = _flaxPeer.call(1, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_build();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.AudioContext;
    return _flaxConvertedResult;
  }

  api.AudioContext _flaxSuper_build() {
    return super.build();
  }

  @override
  api.AudioContextAndroid buildAndroid() {
    final _flaxResult = _flaxPeer.call(2, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_buildAndroid();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.AudioContextAndroid;
    return _flaxConvertedResult;
  }

  api.AudioContextAndroid _flaxSuper_buildAndroid() {
    return super.buildAndroid();
  }

  @override
  api.AudioContextIOS? buildIOS() {
    final _flaxResult = _flaxPeer.call(3, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_buildIOS();
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.AudioContextIOS?;
    return _flaxConvertedResult;
  }

  api.AudioContextIOS? _flaxSuper_buildIOS() {
    return super.buildIOS();
  }

  @override
  void validateIOS() {
    final _flaxResult = _flaxPeer.call(4, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      _flaxSuper_validateIOS();
      return;
    }
    return;
  }

  void _flaxSuper_validateIOS() {
    super.validateIOS();
    return;
  }

  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 5);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  api.AudioContextConfigRoute get route {
    final _flaxResult = _flaxPeer.call(6, const [], const {});
    if (!_flaxResult.$1) return super.route;
    final _flaxConvertedResult = _flaxResult.$2 as api.AudioContextConfigRoute;
    return _flaxConvertedResult;
  }

  api.AudioContextConfigRoute get _flaxSuperGet_route {
    return super.route;
  }

  @override
  api.AudioContextConfigFocus get focus {
    final _flaxResult = _flaxPeer.call(7, const [], const {});
    if (!_flaxResult.$1) return super.focus;
    final _flaxConvertedResult = _flaxResult.$2 as api.AudioContextConfigFocus;
    return _flaxConvertedResult;
  }

  api.AudioContextConfigFocus get _flaxSuperGet_focus {
    return super.focus;
  }

  @override
  bool get respectSilence {
    final _flaxResult = _flaxPeer.call(8, const [], const {});
    if (!_flaxResult.$1) return super.respectSilence;
    final _flaxConvertedResult = _flaxResult.$2 as bool;
    return _flaxConvertedResult;
  }

  bool get _flaxSuperGet_respectSilence {
    return super.respectSilence;
  }

  @override
  bool get stayAwake => _FlaxProxyDispatch4_get_stayAwake(this, 9);
  bool get _flaxSuperGet_stayAwake {
    return super.stayAwake;
  }
}

final class _AudioContextIOSProxy extends api.AudioContextIOS
    implements _FlaxProxyDispatch1, _FlaxProxyDispatch3 {
  final FlaxProxyPeer _flaxPeer;
  _AudioContextIOSProxy(
    this._flaxPeer, {
    api.AVAudioSessionCategory super.category,
    Set<api.AVAudioSessionOptions> super.options,
  });
  @override
  api.AudioContextIOS copy({
    Object? category = _flaxOmitted,
    Object? options = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(0, <Object?>[], <String, Object?>{
      if (!identical(category, _flaxOmitted)) "category": category,
      if (!identical(options, _flaxOmitted)) "options": options,
    });
    if (!_flaxResult.$1) {
      return _flaxSuper_copy(category: category, options: options);
    }
    final _flaxConvertedResult = _flaxResult.$2 as api.AudioContextIOS;
    return _flaxConvertedResult;
  }

  api.AudioContextIOS _flaxSuper_copy({
    Object? category = _flaxOmitted,
    Object? options = _flaxOmitted,
  }) {
    final _flaxHas0 = !identical(category, _flaxOmitted);
    final _flaxHas1 = !identical(options, _flaxOmitted);
    return (flaxInvokeWithDefaults(
      super.copy,
      <Object?>[
        (_flaxHas0 ? category as api.AVAudioSessionCategory? : null),
        (_flaxHas1 ? options as Set<api.AVAudioSessionOptions>? : null),
      ],
      <int>[(_flaxHas0 ? 1 : 0) | (_flaxHas1 ? 2 : 0)],
      const <String>["category", "options"],
    ) as api.AudioContextIOS);
  }

  @override
  Map<String, Object?> toJson() {
    return _FlaxProxyDispatch3_call_toJson(this, 1);
  }

  Map<String, Object?> _flaxSuper_toJson() {
    return super.toJson();
  }

  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 2);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  api.AVAudioSessionCategory get category {
    final _flaxResult = _flaxPeer.call(3, const [], const {});
    if (!_flaxResult.$1) return super.category;
    final _flaxConvertedResult = _flaxResult.$2 as api.AVAudioSessionCategory;
    return _flaxConvertedResult;
  }

  api.AVAudioSessionCategory get _flaxSuperGet_category {
    return super.category;
  }

  @override
  Set<api.AVAudioSessionOptions> get options {
    final _flaxResult = _flaxPeer.call(4, const [], const {});
    if (!_flaxResult.$1) return super.options;
    final _flaxConvertedResult =
        _flaxResult.$2 as Set<api.AVAudioSessionOptions>;
    return _flaxConvertedResult;
  }

  Set<api.AVAudioSessionOptions> get _flaxSuperGet_options {
    return super.options;
  }
}

final class _AudioEventProxy extends api.AudioEvent
    implements _FlaxProxyDispatch1, _FlaxProxyDispatch5 {
  final FlaxProxyPeer _flaxPeer;
  _AudioEventProxy(
    this._flaxPeer, {
    required api.AudioEventType super.eventType,
    api1.Duration? super.duration,
    String? super.logMessage,
    bool? super.isPrepared,
  });
  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 0);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  api.AudioEventType get eventType {
    final _flaxResult = _flaxPeer.call(1, const [], const {});
    if (!_flaxResult.$1) return super.eventType;
    final _flaxConvertedResult = _flaxResult.$2 as api.AudioEventType;
    return _flaxConvertedResult;
  }

  api.AudioEventType get _flaxSuperGet_eventType {
    return super.eventType;
  }

  @override
  api1.Duration? get duration {
    final _flaxResult = _flaxPeer.call(2, const [], const {});
    if (!_flaxResult.$1) return super.duration;
    final _flaxConvertedResult = _flaxResult.$2 as api1.Duration?;
    return _flaxConvertedResult;
  }

  api1.Duration? get _flaxSuperGet_duration {
    return super.duration;
  }

  @override
  String? get logMessage => _FlaxProxyDispatch5_get_logMessage(this, 3);
  String? get _flaxSuperGet_logMessage {
    return super.logMessage;
  }

  @override
  bool? get isPrepared {
    final _flaxResult = _flaxPeer.call(4, const [], const {});
    if (!_flaxResult.$1) return super.isPrepared;
    final _flaxConvertedResult = _flaxResult.$2 as bool?;
    return _flaxConvertedResult;
  }

  bool? get _flaxSuperGet_isPrepared {
    return super.isPrepared;
  }
}

final class _AudioPlayerProxy extends api.AudioPlayer
    implements _FlaxProxyDispatch7, _FlaxProxyDispatch6 {
  final FlaxProxyPeer _flaxPeer;
  _AudioPlayerProxy(this._flaxPeer, {String? super.playerId});
  @override
  Future<void> play(
    api.Source source, {
    Object? volume = _flaxOmitted,
    Object? balance = _flaxOmitted,
    Object? ctx = _flaxOmitted,
    Object? position = _flaxOmitted,
    Object? mode = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(
      0,
      <Object?>[source],
      <String, Object?>{
        if (!identical(volume, _flaxOmitted)) "volume": volume,
        if (!identical(balance, _flaxOmitted)) "balance": balance,
        if (!identical(ctx, _flaxOmitted)) "ctx": ctx,
        if (!identical(position, _flaxOmitted)) "position": position,
        if (!identical(mode, _flaxOmitted)) "mode": mode,
      },
    );
    if (!_flaxResult.$1) {
      return _flaxSuper_play(
        source,
        volume: volume,
        balance: balance,
        ctx: ctx,
        position: position,
        mode: mode,
      );
    }
    final _flaxConvertedResult = (_flaxResult.$2 as Future<Object?>).then<void>(
      (value) => null,
    );
    return _flaxConvertedResult;
  }

  Future<void> _flaxSuper_play(
    api.Source source, {
    Object? volume = _flaxOmitted,
    Object? balance = _flaxOmitted,
    Object? ctx = _flaxOmitted,
    Object? position = _flaxOmitted,
    Object? mode = _flaxOmitted,
  }) {
    final _flaxHas1 = !identical(volume, _flaxOmitted);
    final _flaxHas2 = !identical(balance, _flaxOmitted);
    final _flaxHas3 = !identical(ctx, _flaxOmitted);
    final _flaxHas4 = !identical(position, _flaxOmitted);
    final _flaxHas5 = !identical(mode, _flaxOmitted);
    return (flaxInvokeWithDefaults(
      super.play,
      <Object?>[
        source,
        (_flaxHas1 ? volume as double? : null),
        (_flaxHas2 ? balance as double? : null),
        (_flaxHas3 ? ctx as api.AudioContext? : null),
        (_flaxHas4 ? position as api1.Duration? : null),
        (_flaxHas5 ? mode as api.PlayerMode? : null),
      ],
      <int>[
        1 |
            (_flaxHas1 ? 2 : 0) |
            (_flaxHas2 ? 4 : 0) |
            (_flaxHas3 ? 8 : 0) |
            (_flaxHas4 ? 16 : 0) |
            (_flaxHas5 ? 32 : 0),
      ],
      const <String>["", "volume", "balance", "ctx", "position", "mode"],
    ) as Future<void>);
  }

  @override
  Future<void> setAudioContext(api.AudioContext ctx) {
    return _FlaxProxyDispatch6_call_setAudioContext(this, 1, ctx);
  }

  Future<void> _flaxSuper_setAudioContext(api.AudioContext ctx) {
    return super.setAudioContext(ctx);
  }

  @override
  Future<void> setPlayerMode(api.PlayerMode mode) {
    final _flaxResult = _flaxPeer.call(2, <Object?>[mode], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_setPlayerMode(mode);
    }
    final _flaxConvertedResult = (_flaxResult.$2 as Future<Object?>).then<void>(
      (value) => null,
    );
    return _flaxConvertedResult;
  }

  Future<void> _flaxSuper_setPlayerMode(api.PlayerMode mode) {
    return super.setPlayerMode(mode);
  }

  @override
  Future<void> pause() {
    final _flaxResult = _flaxPeer.call(3, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_pause();
    }
    final _flaxConvertedResult = (_flaxResult.$2 as Future<Object?>).then<void>(
      (value) => null,
    );
    return _flaxConvertedResult;
  }

  Future<void> _flaxSuper_pause() {
    return super.pause();
  }

  @override
  Future<void> stop() {
    final _flaxResult = _flaxPeer.call(4, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_stop();
    }
    final _flaxConvertedResult = (_flaxResult.$2 as Future<Object?>).then<void>(
      (value) => null,
    );
    return _flaxConvertedResult;
  }

  Future<void> _flaxSuper_stop() {
    return super.stop();
  }

  @override
  Future<void> resume() {
    final _flaxResult = _flaxPeer.call(5, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_resume();
    }
    final _flaxConvertedResult = (_flaxResult.$2 as Future<Object?>).then<void>(
      (value) => null,
    );
    return _flaxConvertedResult;
  }

  Future<void> _flaxSuper_resume() {
    return super.resume();
  }

  @override
  Future<void> release() {
    final _flaxResult = _flaxPeer.call(6, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_release();
    }
    final _flaxConvertedResult = (_flaxResult.$2 as Future<Object?>).then<void>(
      (value) => null,
    );
    return _flaxConvertedResult;
  }

  Future<void> _flaxSuper_release() {
    return super.release();
  }

  @override
  Future<void> seek(api1.Duration position) {
    final _flaxResult = _flaxPeer.call(7, <Object?>[
      position,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_seek(position);
    }
    final _flaxConvertedResult = (_flaxResult.$2 as Future<Object?>).then<void>(
      (value) => null,
    );
    return _flaxConvertedResult;
  }

  Future<void> _flaxSuper_seek(api1.Duration position) {
    return super.seek(position);
  }

  @override
  Future<void> setBalance(double balance) {
    final _flaxResult = _flaxPeer.call(8, <Object?>[
      balance,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_setBalance(balance);
    }
    final _flaxConvertedResult = (_flaxResult.$2 as Future<Object?>).then<void>(
      (value) => null,
    );
    return _flaxConvertedResult;
  }

  Future<void> _flaxSuper_setBalance(double balance) {
    return super.setBalance(balance);
  }

  @override
  Future<void> setVolume(double volume) {
    final _flaxResult = _flaxPeer.call(9, <Object?>[
      volume,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_setVolume(volume);
    }
    final _flaxConvertedResult = (_flaxResult.$2 as Future<Object?>).then<void>(
      (value) => null,
    );
    return _flaxConvertedResult;
  }

  Future<void> _flaxSuper_setVolume(double volume) {
    return super.setVolume(volume);
  }

  @override
  Future<void> setReleaseMode(api.ReleaseMode releaseMode) {
    final _flaxResult = _flaxPeer.call(10, <Object?>[
      releaseMode,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_setReleaseMode(releaseMode);
    }
    final _flaxConvertedResult = (_flaxResult.$2 as Future<Object?>).then<void>(
      (value) => null,
    );
    return _flaxConvertedResult;
  }

  Future<void> _flaxSuper_setReleaseMode(api.ReleaseMode releaseMode) {
    return super.setReleaseMode(releaseMode);
  }

  @override
  Future<void> setPlaybackRate(double playbackRate) {
    final _flaxResult = _flaxPeer.call(11, <Object?>[
      playbackRate,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_setPlaybackRate(playbackRate);
    }
    final _flaxConvertedResult = (_flaxResult.$2 as Future<Object?>).then<void>(
      (value) => null,
    );
    return _flaxConvertedResult;
  }

  Future<void> _flaxSuper_setPlaybackRate(double playbackRate) {
    return super.setPlaybackRate(playbackRate);
  }

  @override
  Future<void> setSource(api.Source source) {
    final _flaxResult = _flaxPeer.call(12, <Object?>[
      source,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_setSource(source);
    }
    final _flaxConvertedResult = (_flaxResult.$2 as Future<Object?>).then<void>(
      (value) => null,
    );
    return _flaxConvertedResult;
  }

  Future<void> _flaxSuper_setSource(api.Source source) {
    return super.setSource(source);
  }

  @override
  Future<void> setSourceUrl(String url, {Object? mimeType = _flaxOmitted}) {
    final _flaxResult = _flaxPeer.call(
      13,
      <Object?>[url],
      <String, Object?>{
        if (!identical(mimeType, _flaxOmitted)) "mimeType": mimeType,
      },
    );
    if (!_flaxResult.$1) {
      return _flaxSuper_setSourceUrl(url, mimeType: mimeType);
    }
    final _flaxConvertedResult = (_flaxResult.$2 as Future<Object?>).then<void>(
      (value) => null,
    );
    return _flaxConvertedResult;
  }

  Future<void> _flaxSuper_setSourceUrl(
    String url, {
    Object? mimeType = _flaxOmitted,
  }) {
    final _flaxHas1 = !identical(mimeType, _flaxOmitted);
    return (flaxInvokeWithDefaults(
      super.setSourceUrl,
      <Object?>[url, (_flaxHas1 ? mimeType as String? : null)],
      <int>[1 | (_flaxHas1 ? 2 : 0)],
      const <String>["", "mimeType"],
    ) as Future<void>);
  }

  @override
  Future<void> setSourceDeviceFile(
    String path, {
    Object? mimeType = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(
      14,
      <Object?>[path],
      <String, Object?>{
        if (!identical(mimeType, _flaxOmitted)) "mimeType": mimeType,
      },
    );
    if (!_flaxResult.$1) {
      return _flaxSuper_setSourceDeviceFile(path, mimeType: mimeType);
    }
    final _flaxConvertedResult = (_flaxResult.$2 as Future<Object?>).then<void>(
      (value) => null,
    );
    return _flaxConvertedResult;
  }

  Future<void> _flaxSuper_setSourceDeviceFile(
    String path, {
    Object? mimeType = _flaxOmitted,
  }) {
    final _flaxHas1 = !identical(mimeType, _flaxOmitted);
    return (flaxInvokeWithDefaults(
      super.setSourceDeviceFile,
      <Object?>[path, (_flaxHas1 ? mimeType as String? : null)],
      <int>[1 | (_flaxHas1 ? 2 : 0)],
      const <String>["", "mimeType"],
    ) as Future<void>);
  }

  @override
  Future<void> setSourceAsset(String path, {Object? mimeType = _flaxOmitted}) {
    final _flaxResult = _flaxPeer.call(
      15,
      <Object?>[path],
      <String, Object?>{
        if (!identical(mimeType, _flaxOmitted)) "mimeType": mimeType,
      },
    );
    if (!_flaxResult.$1) {
      return _flaxSuper_setSourceAsset(path, mimeType: mimeType);
    }
    final _flaxConvertedResult = (_flaxResult.$2 as Future<Object?>).then<void>(
      (value) => null,
    );
    return _flaxConvertedResult;
  }

  Future<void> _flaxSuper_setSourceAsset(
    String path, {
    Object? mimeType = _flaxOmitted,
  }) {
    final _flaxHas1 = !identical(mimeType, _flaxOmitted);
    return (flaxInvokeWithDefaults(
      super.setSourceAsset,
      <Object?>[path, (_flaxHas1 ? mimeType as String? : null)],
      <int>[1 | (_flaxHas1 ? 2 : 0)],
      const <String>["", "mimeType"],
    ) as Future<void>);
  }

  @override
  Future<void> setSourceBytes(
    api3.Uint8List bytes, {
    Object? mimeType = _flaxOmitted,
  }) {
    final _flaxResult = _flaxPeer.call(
      16,
      <Object?>[bytes],
      <String, Object?>{
        if (!identical(mimeType, _flaxOmitted)) "mimeType": mimeType,
      },
    );
    if (!_flaxResult.$1) {
      return _flaxSuper_setSourceBytes(bytes, mimeType: mimeType);
    }
    final _flaxConvertedResult = (_flaxResult.$2 as Future<Object?>).then<void>(
      (value) => null,
    );
    return _flaxConvertedResult;
  }

  Future<void> _flaxSuper_setSourceBytes(
    api3.Uint8List bytes, {
    Object? mimeType = _flaxOmitted,
  }) {
    final _flaxHas1 = !identical(mimeType, _flaxOmitted);
    return (flaxInvokeWithDefaults(
      super.setSourceBytes,
      <Object?>[bytes, (_flaxHas1 ? mimeType as String? : null)],
      <int>[1 | (_flaxHas1 ? 2 : 0)],
      const <String>["", "mimeType"],
    ) as Future<void>);
  }

  @override
  Future<api1.Duration?> getDuration() {
    final _flaxResult = _flaxPeer.call(17, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_getDuration();
    }
    final _flaxConvertedResult = (_flaxResult.$2 as Future<Object?>)
        .then<api1.Duration?>((value) => value as api1.Duration?);
    return _flaxConvertedResult;
  }

  Future<api1.Duration?> _flaxSuper_getDuration() {
    return super.getDuration();
  }

  @override
  Future<api1.Duration?> getCurrentPosition() {
    final _flaxResult = _flaxPeer.call(18, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_getCurrentPosition();
    }
    final _flaxConvertedResult = (_flaxResult.$2 as Future<Object?>)
        .then<api1.Duration?>((value) => value as api1.Duration?);
    return _flaxConvertedResult;
  }

  Future<api1.Duration?> _flaxSuper_getCurrentPosition() {
    return super.getCurrentPosition();
  }

  @override
  Future<void> dispose() {
    return _FlaxProxyDispatch7_call_dispose(this, 19);
  }

  Future<void> _flaxSuper_dispose() {
    return super.dispose();
  }

  @override
  api.AudioCache get audioCache {
    final _flaxResult = _flaxPeer.call(20, const [], const {});
    if (!_flaxResult.$1) return super.audioCache;
    final _flaxConvertedResult = _flaxResult.$2 as api.AudioCache;
    return _flaxConvertedResult;
  }

  api.AudioCache get _flaxSuperGet_audioCache {
    return super.audioCache;
  }

  @override
  String get playerId {
    final _flaxResult = _flaxPeer.call(21, const [], const {});
    if (!_flaxResult.$1) return super.playerId;
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  String get _flaxSuperGet_playerId {
    return super.playerId;
  }

  @override
  api.Source? get source {
    final _flaxResult = _flaxPeer.call(22, const [], const {});
    if (!_flaxResult.$1) return super.source;
    final _flaxConvertedResult = _flaxResult.$2 as api.Source?;
    return _flaxConvertedResult;
  }

  api.Source? get _flaxSuperGet_source {
    return super.source;
  }

  @override
  double get volume {
    final _flaxResult = _flaxPeer.call(23, const [], const {});
    if (!_flaxResult.$1) return super.volume;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_volume {
    return super.volume;
  }

  @override
  double get balance {
    final _flaxResult = _flaxPeer.call(24, const [], const {});
    if (!_flaxResult.$1) return super.balance;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_balance {
    return super.balance;
  }

  @override
  double get playbackRate {
    final _flaxResult = _flaxPeer.call(25, const [], const {});
    if (!_flaxResult.$1) return super.playbackRate;
    final _flaxConvertedResult = _flaxResult.$2 as double;
    return _flaxConvertedResult;
  }

  double get _flaxSuperGet_playbackRate {
    return super.playbackRate;
  }

  @override
  api.PlayerMode get mode {
    final _flaxResult = _flaxPeer.call(26, const [], const {});
    if (!_flaxResult.$1) return super.mode;
    final _flaxConvertedResult = _flaxResult.$2 as api.PlayerMode;
    return _flaxConvertedResult;
  }

  api.PlayerMode get _flaxSuperGet_mode {
    return super.mode;
  }

  @override
  api.ReleaseMode get releaseMode {
    final _flaxResult = _flaxPeer.call(27, const [], const {});
    if (!_flaxResult.$1) return super.releaseMode;
    final _flaxConvertedResult = _flaxResult.$2 as api.ReleaseMode;
    return _flaxConvertedResult;
  }

  api.ReleaseMode get _flaxSuperGet_releaseMode {
    return super.releaseMode;
  }

  @override
  api.PlayerState get desiredState {
    final _flaxResult = _flaxPeer.call(28, const [], const {});
    if (!_flaxResult.$1) return super.desiredState;
    final _flaxConvertedResult = _flaxResult.$2 as api.PlayerState;
    return _flaxConvertedResult;
  }

  api.PlayerState get _flaxSuperGet_desiredState {
    return super.desiredState;
  }

  @override
  api.PlayerState get state {
    final _flaxResult = _flaxPeer.call(29, const [], const {});
    if (!_flaxResult.$1) return super.state;
    final _flaxConvertedResult = _flaxResult.$2 as api.PlayerState;
    return _flaxConvertedResult;
  }

  api.PlayerState get _flaxSuperGet_state {
    return super.state;
  }

  @override
  api2.Stream<api.AudioEvent> get eventStream {
    final _flaxResult = _flaxPeer.call(30, const [], const {});
    if (!_flaxResult.$1) return super.eventStream;
    final _flaxConvertedResult = _flaxResult.$2 as api2.Stream<api.AudioEvent>;
    return _flaxConvertedResult;
  }

  api2.Stream<api.AudioEvent> get _flaxSuperGet_eventStream {
    return super.eventStream;
  }

  @override
  api2.Stream<api.PlayerState> get onPlayerStateChanged {
    final _flaxResult = _flaxPeer.call(31, const [], const {});
    if (!_flaxResult.$1) return super.onPlayerStateChanged;
    final _flaxConvertedResult = _flaxResult.$2 as api2.Stream<api.PlayerState>;
    return _flaxConvertedResult;
  }

  api2.Stream<api.PlayerState> get _flaxSuperGet_onPlayerStateChanged {
    return super.onPlayerStateChanged;
  }

  @override
  api2.Stream<api1.Duration> get onPositionChanged {
    final _flaxResult = _flaxPeer.call(32, const [], const {});
    if (!_flaxResult.$1) return super.onPositionChanged;
    final _flaxConvertedResult = _flaxResult.$2 as api2.Stream<api1.Duration>;
    return _flaxConvertedResult;
  }

  api2.Stream<api1.Duration> get _flaxSuperGet_onPositionChanged {
    return super.onPositionChanged;
  }

  @override
  api2.Stream<api1.Duration> get onDurationChanged {
    final _flaxResult = _flaxPeer.call(33, const [], const {});
    if (!_flaxResult.$1) return super.onDurationChanged;
    final _flaxConvertedResult = _flaxResult.$2 as api2.Stream<api1.Duration>;
    return _flaxConvertedResult;
  }

  api2.Stream<api1.Duration> get _flaxSuperGet_onDurationChanged {
    return super.onDurationChanged;
  }

  @override
  api2.Stream<void> get onPlayerComplete {
    final _flaxResult = _flaxPeer.call(34, const [], const {});
    if (!_flaxResult.$1) return super.onPlayerComplete;
    final _flaxConvertedResult = _flaxResult.$2 as api2.Stream<void>;
    return _flaxConvertedResult;
  }

  api2.Stream<void> get _flaxSuperGet_onPlayerComplete {
    return super.onPlayerComplete;
  }

  @override
  api2.Stream<void> get onSeekComplete {
    final _flaxResult = _flaxPeer.call(35, const [], const {});
    if (!_flaxResult.$1) return super.onSeekComplete;
    final _flaxConvertedResult = _flaxResult.$2 as api2.Stream<void>;
    return _flaxConvertedResult;
  }

  api2.Stream<void> get _flaxSuperGet_onSeekComplete {
    return super.onSeekComplete;
  }

  @override
  api2.Stream<String> get onLog => _FlaxProxyDispatch6_get_onLog(this, 36);
  api2.Stream<String> get _flaxSuperGet_onLog {
    return super.onLog;
  }

  @override
  set audioCache(api.AudioCache value) {
    final result = _flaxPeer.call(37, [value], const {});
    if (!result.$1) {
      super.audioCache = value;
      return;
    }
  }

  void _flaxSuperSet_audioCache(api.AudioCache value) {
    super.audioCache = value;
  }

  @override
  set desiredState(api.PlayerState value) {
    final result = _flaxPeer.call(38, [value], const {});
    if (!result.$1) {
      super.desiredState = value;
      return;
    }
  }

  void _flaxSuperSet_desiredState(api.PlayerState value) {
    super.desiredState = value;
  }

  @override
  set state(api.PlayerState value) {
    final result = _flaxPeer.call(39, [value], const {});
    if (!result.$1) {
      super.state = value;
      return;
    }
  }

  void _flaxSuperSet_state(api.PlayerState value) {
    super.state = value;
  }

  @override
  set positionUpdater(api.PositionUpdater? value) {
    final result = _flaxPeer.call(40, [value], const {});
    if (!result.$1) {
      super.positionUpdater = value;
      return;
    }
  }

  void _flaxSuperSet_positionUpdater(api.PositionUpdater? value) {
    super.positionUpdater = value;
  }
}

final class _AudioPlayerExceptionProxy extends api.AudioPlayerException
    implements _FlaxProxyDispatch1 {
  final FlaxProxyPeer _flaxPeer;
  _AudioPlayerExceptionProxy(
    this._flaxPeer,
    api.AudioPlayer super.player, {
    Object? super.cause,
  });
  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 0);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  Object? get cause {
    final _flaxResult = _flaxPeer.call(1, const [], const {});
    if (!_flaxResult.$1) return super.cause;
    final _flaxConvertedResult = _flaxResult.$2;
    return _flaxConvertedResult;
  }

  Object? get _flaxSuperGet_cause {
    return super.cause;
  }

  @override
  api.AudioPlayer get player {
    final _flaxResult = _flaxPeer.call(2, const [], const {});
    if (!_flaxResult.$1) return super.player;
    final _flaxConvertedResult = _flaxResult.$2 as api.AudioPlayer;
    return _flaxConvertedResult;
  }

  api.AudioPlayer get _flaxSuperGet_player {
    return super.player;
  }

  @override
  set cause(Object? value) {
    final result = _flaxPeer.call(3, [value], const {});
    if (!result.$1) {
      super.cause = value;
      return;
    }
  }

  void _flaxSuperSet_cause(Object? value) {
    super.cause = value;
  }

  @override
  set player(api.AudioPlayer value) {
    final result = _flaxPeer.call(4, [value], const {});
    if (!result.$1) {
      super.player = value;
      return;
    }
  }

  void _flaxSuperSet_player(api.AudioPlayer value) {
    super.player = value;
  }
}

final class _BytesSourceProxy extends api.BytesSource
    implements _FlaxProxyDispatch1, _FlaxProxyDispatch0 {
  final FlaxProxyPeer _flaxPeer;
  _BytesSourceProxy(
    this._flaxPeer,
    api3.Uint8List super.bytes, {
    String? super.mimeType,
  });
  @override
  Future<void> setOnPlayer(api.AudioPlayer player) {
    return _FlaxProxyDispatch0_call_setOnPlayer(this, 0, player);
  }

  Future<void> _flaxSuper_setOnPlayer(api.AudioPlayer player) {
    return super.setOnPlayer(player);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 1);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  api3.Uint8List get bytes {
    final _flaxResult = _flaxPeer.call(2, const [], const {});
    if (!_flaxResult.$1) return super.bytes;
    final _flaxConvertedResult = _flaxResult.$2 as api3.Uint8List;
    return _flaxConvertedResult;
  }

  api3.Uint8List get _flaxSuperGet_bytes {
    return super.bytes;
  }

  @override
  String? get mimeType => _FlaxProxyDispatch0_get_mimeType(this, 3);
  String? get _flaxSuperGet_mimeType {
    return super.mimeType;
  }
}

final class _DeviceFileSourceProxy extends api.DeviceFileSource
    implements _FlaxProxyDispatch1, _FlaxProxyDispatch0, _FlaxProxyDispatch2 {
  final FlaxProxyPeer _flaxPeer;
  _DeviceFileSourceProxy(
    this._flaxPeer,
    String super.path, {
    String? super.mimeType,
  });
  @override
  Future<void> setOnPlayer(api.AudioPlayer player) {
    return _FlaxProxyDispatch0_call_setOnPlayer(this, 0, player);
  }

  Future<void> _flaxSuper_setOnPlayer(api.AudioPlayer player) {
    return super.setOnPlayer(player);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 1);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  String get path => _FlaxProxyDispatch2_get_path(this, 2);
  String get _flaxSuperGet_path {
    return super.path;
  }

  @override
  String? get mimeType => _FlaxProxyDispatch0_get_mimeType(this, 3);
  String? get _flaxSuperGet_mimeType {
    return super.mimeType;
  }
}

final class _FramePositionUpdaterProxy extends api.FramePositionUpdater
    implements _FlaxProxyDispatch8, _FlaxProxyDispatch7, _FlaxProxyDispatch9 {
  final FlaxProxyPeer _flaxPeer;
  _FramePositionUpdaterProxy(
    this._flaxPeer, {
    required Future<api1.Duration?> Function() super.getPosition,
  });
  @override
  Future<void> update() {
    return _FlaxProxyDispatch8_call_update(this, 0);
  }

  Future<void> _flaxSuper_update() {
    return super.update();
  }

  @override
  void start() {
    return _FlaxProxyDispatch9_call_start(this, 1);
  }

  void _flaxSuper_start() {
    super.start();
    return;
  }

  @override
  void stop() {
    return _FlaxProxyDispatch9_call_stop(this, 2);
  }

  void _flaxSuper_stop() {
    super.stop();
    return;
  }

  @override
  Future<void> stopAndUpdate() {
    return _FlaxProxyDispatch8_call_stopAndUpdate(this, 3);
  }

  Future<void> _flaxSuper_stopAndUpdate() {
    return super.stopAndUpdate();
  }

  @override
  Future<void> dispose() {
    return _FlaxProxyDispatch7_call_dispose(this, 4);
  }

  Future<void> _flaxSuper_dispose() {
    return super.dispose();
  }

  @override
  Future<api1.Duration?> Function() get getPosition =>
      _FlaxProxyDispatch8_get_getPosition(this, 5);
  Future<api1.Duration?> Function() get _flaxSuperGet_getPosition {
    return super.getPosition;
  }

  @override
  api2.Stream<api1.Duration> get positionStream =>
      _FlaxProxyDispatch8_get_positionStream(this, 6);
  api2.Stream<api1.Duration> get _flaxSuperGet_positionStream {
    return super.positionStream;
  }
}

final class _GlobalAudioEventProxy extends api.GlobalAudioEvent
    implements _FlaxProxyDispatch1, _FlaxProxyDispatch5 {
  final FlaxProxyPeer _flaxPeer;
  _GlobalAudioEventProxy(
    this._flaxPeer, {
    required api.GlobalAudioEventType super.eventType,
    String? super.logMessage,
  });
  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 0);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  api.GlobalAudioEventType get eventType {
    final _flaxResult = _flaxPeer.call(1, const [], const {});
    if (!_flaxResult.$1) return super.eventType;
    final _flaxConvertedResult = _flaxResult.$2 as api.GlobalAudioEventType;
    return _flaxConvertedResult;
  }

  api.GlobalAudioEventType get _flaxSuperGet_eventType {
    return super.eventType;
  }

  @override
  String? get logMessage => _FlaxProxyDispatch5_get_logMessage(this, 2);
  String? get _flaxSuperGet_logMessage {
    return super.logMessage;
  }
}

final class _GlobalAudioScopeProxy extends api.GlobalAudioScope
    implements _FlaxProxyDispatch6 {
  final FlaxProxyPeer _flaxPeer;
  _GlobalAudioScopeProxy(this._flaxPeer);
  @override
  Future<void> ensureInitialized() {
    final _flaxResult = _flaxPeer.call(0, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      return _flaxSuper_ensureInitialized();
    }
    final _flaxConvertedResult = (_flaxResult.$2 as Future<Object?>).then<void>(
      (value) => null,
    );
    return _flaxConvertedResult;
  }

  Future<void> _flaxSuper_ensureInitialized() {
    return super.ensureInitialized();
  }

  @override
  Future<void> setAudioContext(api.AudioContext ctx) {
    return _FlaxProxyDispatch6_call_setAudioContext(this, 1, ctx);
  }

  Future<void> _flaxSuper_setAudioContext(api.AudioContext ctx) {
    return super.setAudioContext(ctx);
  }

  @override
  api2.Stream<api.GlobalAudioEvent> get eventStream {
    final _flaxResult = _flaxPeer.call(2, const [], const {});
    if (!_flaxResult.$1) return super.eventStream;
    final _flaxConvertedResult =
        _flaxResult.$2 as api2.Stream<api.GlobalAudioEvent>;
    return _flaxConvertedResult;
  }

  api2.Stream<api.GlobalAudioEvent> get _flaxSuperGet_eventStream {
    return super.eventStream;
  }

  @override
  api2.Stream<String> get onLog => _FlaxProxyDispatch6_get_onLog(this, 3);
  api2.Stream<String> get _flaxSuperGet_onLog {
    return super.onLog;
  }

  @override
  set eventStream(api2.Stream<api.GlobalAudioEvent> value) {
    final result = _flaxPeer.call(4, [value], const {});
    if (!result.$1) {
      super.eventStream = value;
      return;
    }
  }

  void _flaxSuperSet_eventStream(api2.Stream<api.GlobalAudioEvent> value) {
    super.eventStream = value;
  }
}

final class _PositionUpdaterProxy extends api.PositionUpdater
    implements _FlaxProxyDispatch8, _FlaxProxyDispatch7 {
  final FlaxProxyPeer _flaxPeer;
  _PositionUpdaterProxy(
    this._flaxPeer, {
    required Future<api1.Duration?> Function() super.getPosition,
  });
  @override
  Future<void> update() {
    return _FlaxProxyDispatch8_call_update(this, 0);
  }

  Future<void> _flaxSuper_update() {
    return super.update();
  }

  @override
  void start() {
    final _flaxResult = _flaxPeer.call(1, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: start');
    }
    return;
  }

  @override
  void stop() {
    final _flaxResult = _flaxPeer.call(2, <Object?>[], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: stop');
    }
    return;
  }

  @override
  Future<void> stopAndUpdate() {
    return _FlaxProxyDispatch8_call_stopAndUpdate(this, 3);
  }

  Future<void> _flaxSuper_stopAndUpdate() {
    return super.stopAndUpdate();
  }

  @override
  Future<void> dispose() {
    return _FlaxProxyDispatch7_call_dispose(this, 4);
  }

  Future<void> _flaxSuper_dispose() {
    return super.dispose();
  }

  @override
  Future<api1.Duration?> Function() get getPosition =>
      _FlaxProxyDispatch8_get_getPosition(this, 5);
  Future<api1.Duration?> Function() get _flaxSuperGet_getPosition {
    return super.getPosition;
  }

  @override
  api2.Stream<api1.Duration> get positionStream =>
      _FlaxProxyDispatch8_get_positionStream(this, 6);
  api2.Stream<api1.Duration> get _flaxSuperGet_positionStream {
    return super.positionStream;
  }
}

final class _SourceProxy implements api.Source {
  final FlaxProxyPeer _flaxPeer;
  _SourceProxy(this._flaxPeer);
  @override
  Future<void> setOnPlayer(api.AudioPlayer player) {
    final _flaxResult = _flaxPeer.call(0, <Object?>[
      player,
    ], <String, Object?>{});
    if (!_flaxResult.$1) {
      throw StateError('Missing proxy method: setOnPlayer');
    }
    final _flaxConvertedResult = (_flaxResult.$2 as Future<Object?>).then<void>(
      (value) => null,
    );
    return _flaxConvertedResult;
  }

  @override
  String? get mimeType {
    final _flaxResult = _flaxPeer.call(1, const [], const {});
    final _flaxConvertedResult = _flaxResult.$2 as String?;
    return _flaxConvertedResult;
  }
}

final class _TimerPositionUpdaterProxy extends api.TimerPositionUpdater
    implements _FlaxProxyDispatch8, _FlaxProxyDispatch7, _FlaxProxyDispatch9 {
  final FlaxProxyPeer _flaxPeer;
  _TimerPositionUpdaterProxy(
    this._flaxPeer, {
    required Future<api1.Duration?> Function() super.getPosition,
    required api1.Duration super.interval,
  });
  @override
  Future<void> update() {
    return _FlaxProxyDispatch8_call_update(this, 0);
  }

  Future<void> _flaxSuper_update() {
    return super.update();
  }

  @override
  void start() {
    return _FlaxProxyDispatch9_call_start(this, 1);
  }

  void _flaxSuper_start() {
    super.start();
    return;
  }

  @override
  void stop() {
    return _FlaxProxyDispatch9_call_stop(this, 2);
  }

  void _flaxSuper_stop() {
    super.stop();
    return;
  }

  @override
  Future<void> stopAndUpdate() {
    return _FlaxProxyDispatch8_call_stopAndUpdate(this, 3);
  }

  Future<void> _flaxSuper_stopAndUpdate() {
    return super.stopAndUpdate();
  }

  @override
  Future<void> dispose() {
    return _FlaxProxyDispatch7_call_dispose(this, 4);
  }

  Future<void> _flaxSuper_dispose() {
    return super.dispose();
  }

  @override
  api1.Duration get interval {
    final _flaxResult = _flaxPeer.call(5, const [], const {});
    if (!_flaxResult.$1) return super.interval;
    final _flaxConvertedResult = _flaxResult.$2 as api1.Duration;
    return _flaxConvertedResult;
  }

  api1.Duration get _flaxSuperGet_interval {
    return super.interval;
  }

  @override
  Future<api1.Duration?> Function() get getPosition =>
      _FlaxProxyDispatch8_get_getPosition(this, 6);
  Future<api1.Duration?> Function() get _flaxSuperGet_getPosition {
    return super.getPosition;
  }

  @override
  api2.Stream<api1.Duration> get positionStream =>
      _FlaxProxyDispatch8_get_positionStream(this, 7);
  api2.Stream<api1.Duration> get _flaxSuperGet_positionStream {
    return super.positionStream;
  }
}

final class _UrlSourceProxy extends api.UrlSource
    implements _FlaxProxyDispatch1, _FlaxProxyDispatch0 {
  final FlaxProxyPeer _flaxPeer;
  _UrlSourceProxy(this._flaxPeer, String super.url, {String? super.mimeType});
  @override
  Future<void> setOnPlayer(api.AudioPlayer player) {
    return _FlaxProxyDispatch0_call_setOnPlayer(this, 0, player);
  }

  Future<void> _flaxSuper_setOnPlayer(api.AudioPlayer player) {
    return super.setOnPlayer(player);
  }

  @override
  String toString() {
    return _FlaxProxyDispatch1_call_toString(this, 1);
  }

  String _flaxSuper_toString() {
    return super.toString();
  }

  @override
  String get url {
    final _flaxResult = _flaxPeer.call(2, const [], const {});
    if (!_flaxResult.$1) return super.url;
    final _flaxConvertedResult = _flaxResult.$2 as String;
    return _flaxConvertedResult;
  }

  String get _flaxSuperGet_url {
    return super.url;
  }

  @override
  String? get mimeType => _FlaxProxyDispatch0_get_mimeType(this, 3);
  String? get _flaxSuperGet_mimeType {
    return super.mimeType;
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
Object _callback0(FlaxCallback _flaxBridgeCallback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  return (_flaxBridgeCallback.call(positional, named) as Future<Object?>)
      .then<api1.Duration?>((value) => value as api1.Duration?);
};
bool _callback0Matches(Object value) =>
    value is Future<api1.Duration?> Function();
Object? _callback0Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Future<api1.Duration?> Function())();
}

Object _callback1(FlaxCallback _flaxBridgeCallback) => () {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  return (_flaxBridgeCallback.call(positional, named) as Future<Object?>)
      .then<void>((value) => null);
};
bool _callback1Matches(Object value) => value is Future<void> Function();
Object? _callback1Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Future<void> Function())();
}

Object _collection0Create() => <String>[];
bool _collection0Matches(Object value) => value is List<String>;
Object _collection1Create() => <String>[];
Object _collection1Restore(Object value) =>
    (value as Iterable<Object?>).cast<String>();
bool _collection1Matches(Object value) => value is Iterable<String>;
Object _collection2Create() => <api1.Uri>[];
bool _collection2Matches(Object value) => value is List<api1.Uri>;
Object _collection3Create() => <api1.Uri>[];
Object _collection3Restore(Object value) =>
    (value as Iterable<Object?>).cast<api1.Uri>();
bool _collection3Matches(Object value) => value is Iterable<api1.Uri>;
Object _collection4Create() => <String, api1.Uri>{};
bool _collection4Matches(Object value) => value is Map<String, api1.Uri>;
Object _collection5Create() => <String, Object?>{};
bool _collection5Matches(Object value) => value is Map<String, Object?>;
Object _collection6Create() => <api.AVAudioSessionOptions>{};
bool _collection6Matches(Object value) =>
    value is Set<api.AVAudioSessionOptions>;
Object _collection7Create() => <api.AVAudioSessionOptions>[];
Object _collection7Restore(Object value) =>
    (value as Iterable<Object?>).cast<api.AVAudioSessionOptions>();
bool _collection7Matches(Object value) =>
    value is Iterable<api.AVAudioSessionOptions>;
Object _collection8Create() => <String, api.AudioPlayer>{};
bool _collection8Matches(Object value) => value is Map<String, api.AudioPlayer>;
Object _collection9Create() => <api.AudioPlayer>[];
bool _collection9Matches(Object value) => value is List<api.AudioPlayer>;
Object _collection10Create() => <api.AudioPlayer>[];
Object _collection10Restore(Object value) =>
    (value as Iterable<Object?>).cast<api.AudioPlayer>();
bool _collection10Matches(Object value) => value is Iterable<api.AudioPlayer>;
Future<Object?> _future0Adapt(Future<Object?> value) =>
    value.then<void>((_) {});
Future<Object?> _future1Adapt(Future<Object?> value) =>
    value.then<api1.Uri>((value) => value as api1.Uri);
Future<Object?> _future2Adapt(Future<Object?> value) =>
    value.then<String>((value) => value as String);
Future<Object?> _future3Adapt(Future<Object?> value) =>
    value.then<api3.Uint8List>((value) => value as api3.Uint8List);
Future<Object?> _future4Adapt(Future<Object?> value) =>
    value.then<List<api1.Uri>>((value) => value as List<api1.Uri>);
Future<Object?> _future5Adapt(Future<Object?> value) =>
    value.then<api1.Duration?>((value) => value as api1.Duration?);
Future<Object?> _future6Adapt(Future<Object?> value) => value
    .then<Future<void> Function()>((value) => value as Future<void> Function());
Future<Object?> _future7Adapt(Future<Object?> value) =>
    value.then<api.AudioPool>((value) => value as api.AudioPool);
bool _stream0Matches(Object value) => value is api2.Stream<api.AudioEvent>;
api2.Stream<Object?> _stream0Adapt(Object value) =>
    (value is api2.Stream<api.AudioEvent>
            ? value
            : (value as api2.Stream<Object?>).map<api.AudioEvent>(
                (event) => _genericCallbackResult<api.AudioEvent>(event),
              ))
        as api2.Stream<Object?>;
bool _stream1Matches(Object value) => value is api2.Stream<api.PlayerState>;
api2.Stream<Object?> _stream1Adapt(Object value) =>
    (value is api2.Stream<api.PlayerState>
            ? value
            : (value as api2.Stream<Object?>).map<api.PlayerState>(
                (event) => _genericCallbackResult<api.PlayerState>(event),
              ))
        as api2.Stream<Object?>;
bool _stream2Matches(Object value) => value is api2.Stream<api1.Duration>;
api2.Stream<Object?> _stream2Adapt(Object value) =>
    (value is api2.Stream<api1.Duration>
            ? value
            : (value as api2.Stream<Object?>).map<api1.Duration>(
                (event) => _genericCallbackResult<api1.Duration>(event),
              ))
        as api2.Stream<Object?>;
bool _stream3Matches(Object value) => value is api2.Stream<void>;
api2.Stream<Object?> _stream3Adapt(Object value) =>
    (value is api2.Stream<void>
            ? value
            : (value as api2.Stream<Object?>).map<void>(
                (event) => _genericCallbackResult<void>(event),
              ))
        as api2.Stream<Object?>;
bool _stream4Matches(Object value) => value is api2.Stream<String>;
api2.Stream<Object?> _stream4Adapt(Object value) =>
    (value is api2.Stream<String>
            ? value
            : (value as api2.Stream<Object?>).map<String>(
                (event) => _genericCallbackResult<String>(event),
              ))
        as api2.Stream<Object?>;
bool _stream5Matches(Object value) =>
    value is api2.Stream<api.GlobalAudioEvent>;
api2.Stream<Object?> _stream5Adapt(Object value) =>
    (value is api2.Stream<api.GlobalAudioEvent>
            ? value
            : (value as api2.Stream<Object?>).map<api.GlobalAudioEvent>(
                (event) => _genericCallbackResult<api.GlobalAudioEvent>(event),
              ))
        as api2.Stream<Object?>;
T _genericCallbackResult<T>(Object? value) {
  // Test assignability to cover both nullable and non-nullable numeric T.
  // Broad bounds keep their decoded representation; only the Dart use site
  // selects a more specific numeric representation.
  if (value is num && value is! T) {
    if (0 is T && 0.0 is! T) {
      if (!value.isFinite ||
          value.abs() > 9007199254740991 ||
          value != value.truncateToDouble()) {
        throw ArgumentError('Expected a safe integer');
      }
      return value.toInt() as T;
    }
    if (0.0 is T && 0 is! T) return value.toDouble() as T;
  }
  return value as T;
}

const _flaxBinding0 = FlaxTypeRef(
  "object",
  id: "flax.audio/audio#type:AudioPlayer",
);
const _flaxBinding1 = FlaxTypeRef(
  "future",
  item: flaxVoidType,
  future: FlaxFutureBinding("void:", _future0Adapt),
);
const _flaxBinding2 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("player", _flaxBinding0)],
  _flaxBinding1,
  id: "callback:<>(p:r:player:object:flax.audio/audio#type:AudioPlayer)->future:[void:]",
);
const _flaxBinding3 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("fileName", flaxStringType)],
  _flaxBinding1,
  id: "callback:<>(p:r:fileName:String:)->future:[void:]",
);
const _flaxBinding4 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding1,
  id: "callback:<>()->future:[void:]",
);
const _flaxBinding5 = FlaxTypeRef("object", id: "flax.core/flutter#type:Uri");
const _flaxBinding6 = FlaxTypeRef(
  "future",
  item: _flaxBinding5,
  future: FlaxFutureBinding("object:flax.core/flutter#type:Uri", _future1Adapt),
);
const _flaxBinding7 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("fileName", flaxStringType)],
  _flaxBinding6,
  id: "callback:<>(p:r:fileName:String:)->future:[object:flax.core/flutter#type:Uri]",
);
const _flaxBinding8 = FlaxTypeRef(
  "future",
  item: flaxStringType,
  future: FlaxFutureBinding("String:", _future2Adapt),
);
const _flaxBinding9 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("fileName", flaxStringType)],
  _flaxBinding8,
  id: "callback:<>(p:r:fileName:String:)->future:[String:]",
);
const _flaxBinding10 = FlaxTypeRef(
  "future",
  item: flaxUint8ListType,
  future: FlaxFutureBinding("Uint8List:", _future3Adapt),
);
const _flaxBinding11 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("fileName", flaxStringType)],
  _flaxBinding10,
  id: "callback:<>(p:r:fileName:String:)->future:[Uint8List:]",
);
const _flaxBinding12 = FlaxTypeRef(
  "iterable",
  item: flaxStringType,
  collection: FlaxCollectionBinding(
    "iterable:[String:]",
    _collection1Create,
    _collection1Matches,
    restore: _collection1Restore,
  ),
);
const _flaxBinding13 = FlaxTypeRef(
  "list",
  item: flaxStringType,
  collection: FlaxCollectionBinding(
    "list:[String:]",
    _collection0Create,
    _collection0Matches,
  ),
  iterable: _flaxBinding12,
);
const _flaxBinding14 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding5,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/flutter#type:Uri]",
    _collection3Create,
    _collection3Matches,
    restore: _collection3Restore,
  ),
);
const _flaxBinding15 = FlaxTypeRef(
  "list",
  item: _flaxBinding5,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/flutter#type:Uri]",
    _collection2Create,
    _collection2Matches,
  ),
  iterable: _flaxBinding14,
);
const _flaxBinding16 = FlaxTypeRef(
  "future",
  item: _flaxBinding15,
  future: FlaxFutureBinding(
    "list:[object:flax.core/flutter#type:Uri]",
    _future4Adapt,
  ),
);
const _flaxBinding17 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("fileNames", _flaxBinding13)],
  _flaxBinding16,
  id: "callback:<>(p:r:fileNames:list:[String:])->future:[list:[object:flax.core/flutter#type:Uri]]",
);
const _flaxBinding18 = FlaxTypeRef(
  "map",
  item: _flaxBinding5,
  key: flaxStringType,
  collection: FlaxCollectionBinding(
    "map:[object:flax.core/flutter#type:Uri][String:]",
    _collection4Create,
    _collection4Matches,
  ),
);
const _flaxBinding19 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding18,
  id: "callback:<>()->map:[object:flax.core/flutter#type:Uri][String:]",
);
const _flaxBinding20 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", flaxStringType)],
  flaxVoidType,
  id: "callback:<>(p:r:value:String:)->void:",
);
const _flaxBinding21 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", flaxNullableStringType)],
  flaxVoidType,
  id: "callback:<>(p:r:value:String?:)->void:",
);
const _flaxBinding22 = FlaxTypeRef(
  "map",
  item: flaxNullableAnyType,
  key: flaxStringType,
  collection: FlaxCollectionBinding(
    "map:[any?:][String:]",
    _collection5Create,
    _collection5Matches,
  ),
);
const _flaxBinding23 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding22,
  id: "callback:<>()->map:[any?:][String:]",
);
const _flaxBinding24 = FlaxTypeRef(
  "object",
  id: "flax.audio/audio#type:AudioContextAndroid",
);
const _flaxBinding25 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding24,
  id: "callback:<>()->object:flax.audio/audio#type:AudioContextAndroid",
);
const _flaxBinding26 = FlaxTypeRef(
  "object",
  id: "flax.audio/audio#type:AudioContextIOS",
);
const _flaxBinding27 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding26,
  id: "callback:<>()->object:flax.audio/audio#type:AudioContextIOS",
);
const _flaxBinding28 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", _flaxBinding26)],
  flaxVoidType,
  id: "callback:<>(p:r:value:object:flax.audio/audio#type:AudioContextIOS)->void:",
);
const _flaxBinding29 = FlaxTypeRef(
  "enum",
  id: "flax.audio/audio#type:AndroidAudioMode",
);
const _flaxBinding30 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding29,
  id: "callback:<>()->enum:flax.audio/audio#type:AndroidAudioMode",
);
const _flaxBinding31 = FlaxTypeRef(
  "enum",
  id: "flax.audio/audio#type:AndroidContentType",
);
const _flaxBinding32 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding31,
  id: "callback:<>()->enum:flax.audio/audio#type:AndroidContentType",
);
const _flaxBinding33 = FlaxTypeRef(
  "enum",
  id: "flax.audio/audio#type:AndroidUsageType",
);
const _flaxBinding34 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding33,
  id: "callback:<>()->enum:flax.audio/audio#type:AndroidUsageType",
);
const _flaxBinding35 = FlaxTypeRef(
  "enum",
  id: "flax.audio/audio#type:AndroidAudioFocus",
);
const _flaxBinding36 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding35,
  id: "callback:<>()->enum:flax.audio/audio#type:AndroidAudioFocus",
);
const _flaxBinding37 = FlaxTypeRef(
  "object",
  id: "flax.audio/audio#type:AudioContext",
);
const _flaxBinding38 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding37,
  id: "callback:<>()->object:flax.audio/audio#type:AudioContext",
);
const _flaxBinding39 = FlaxTypeRef(
  "object",
  id: "flax.audio/audio#type:AudioContextIOS",
  nullable: true,
);
const _flaxBinding40 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding39,
  id: "callback:<>()->object?:flax.audio/audio#type:AudioContextIOS",
);
const _flaxBinding41 = FlaxTypeRef(
  "enum",
  id: "flax.audio/audio#type:AudioContextConfigRoute",
);
const _flaxBinding42 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding41,
  id: "callback:<>()->enum:flax.audio/audio#type:AudioContextConfigRoute",
);
const _flaxBinding43 = FlaxTypeRef(
  "enum",
  id: "flax.audio/audio#type:AudioContextConfigFocus",
);
const _flaxBinding44 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding43,
  id: "callback:<>()->enum:flax.audio/audio#type:AudioContextConfigFocus",
);
const _flaxBinding45 = FlaxTypeRef(
  "enum",
  id: "flax.audio/audio#type:AVAudioSessionCategory",
);
const _flaxBinding46 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding45,
  id: "callback:<>()->enum:flax.audio/audio#type:AVAudioSessionCategory",
);
const _flaxBinding47 = FlaxTypeRef(
  "enum",
  id: "flax.audio/audio#type:AVAudioSessionOptions",
);
const _flaxBinding48 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding47,
  collection: FlaxCollectionBinding(
    "iterable:[enum:flax.audio/audio#type:AVAudioSessionOptions]",
    _collection7Create,
    _collection7Matches,
    restore: _collection7Restore,
  ),
);
const _flaxBinding49 = FlaxTypeRef(
  "set",
  item: _flaxBinding47,
  collection: FlaxCollectionBinding(
    "set:[enum:flax.audio/audio#type:AVAudioSessionOptions]",
    _collection6Create,
    _collection6Matches,
  ),
  iterable: _flaxBinding48,
);
const _flaxBinding50 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding49,
  id: "callback:<>()->set:[enum:flax.audio/audio#type:AVAudioSessionOptions]",
);
const _flaxBinding51 = FlaxTypeRef(
  "enum",
  id: "flax.audio/audio#type:AudioEventType",
);
const _flaxBinding52 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding51,
  id: "callback:<>()->enum:flax.audio/audio#type:AudioEventType",
);
const _flaxBinding53 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Duration",
  nullable: true,
);
const _flaxBinding54 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding53,
  id: "callback:<>()->object?:flax.core/flutter#type:Duration",
);
const _flaxBinding55 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("ctx", _flaxBinding37)],
  _flaxBinding1,
  id: "callback:<>(p:r:ctx:object:flax.audio/audio#type:AudioContext)->future:[void:]",
);
const _flaxBinding56 = FlaxTypeRef(
  "enum",
  id: "flax.audio/audio#type:PlayerMode",
);
const _flaxBinding57 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("mode", _flaxBinding56)],
  _flaxBinding1,
  id: "callback:<>(p:r:mode:enum:flax.audio/audio#type:PlayerMode)->future:[void:]",
);
const _flaxBinding58 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("position", flaxDurationType)],
  _flaxBinding1,
  id: "callback:<>(p:r:position:object:flax.core/flutter#type:Duration)->future:[void:]",
);
const _flaxBinding59 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("balance", flaxDoubleType)],
  _flaxBinding1,
  id: "callback:<>(p:r:balance:double:)->future:[void:]",
);
const _flaxBinding60 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("volume", flaxDoubleType)],
  _flaxBinding1,
  id: "callback:<>(p:r:volume:double:)->future:[void:]",
);
const _flaxBinding61 = FlaxTypeRef(
  "enum",
  id: "flax.audio/audio#type:ReleaseMode",
);
const _flaxBinding62 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("releaseMode", _flaxBinding61)],
  _flaxBinding1,
  id: "callback:<>(p:r:releaseMode:enum:flax.audio/audio#type:ReleaseMode)->future:[void:]",
);
const _flaxBinding63 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("playbackRate", flaxDoubleType)],
  _flaxBinding1,
  id: "callback:<>(p:r:playbackRate:double:)->future:[void:]",
);
const _flaxBinding64 = FlaxTypeRef(
  "object",
  id: "flax.audio/audio#type:Source",
);
const _flaxBinding65 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("source", _flaxBinding64)],
  _flaxBinding1,
  id: "callback:<>(p:r:source:object:flax.audio/audio#type:Source)->future:[void:]",
);
const _flaxBinding66 = FlaxTypeRef(
  "future",
  item: _flaxBinding53,
  future: FlaxFutureBinding(
    "object?:flax.core/flutter#type:Duration",
    _future5Adapt,
  ),
);
const _flaxBinding67 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding66,
  id: "callback:<>()->future:[object?:flax.core/flutter#type:Duration]",
);
const _flaxBinding68 = FlaxTypeRef(
  "object",
  id: "flax.audio/audio#type:AudioCache",
);
const _flaxBinding69 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding68,
  id: "callback:<>()->object:flax.audio/audio#type:AudioCache",
);
const _flaxBinding70 = FlaxTypeRef(
  "object",
  id: "flax.audio/audio#type:Source",
  nullable: true,
);
const _flaxBinding71 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding70,
  id: "callback:<>()->object?:flax.audio/audio#type:Source",
);
const _flaxBinding72 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding56,
  id: "callback:<>()->enum:flax.audio/audio#type:PlayerMode",
);
const _flaxBinding73 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding61,
  id: "callback:<>()->enum:flax.audio/audio#type:ReleaseMode",
);
const _flaxBinding74 = FlaxTypeRef(
  "enum",
  id: "flax.audio/audio#type:PlayerState",
);
const _flaxBinding75 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding74,
  id: "callback:<>()->enum:flax.audio/audio#type:PlayerState",
);
const _flaxBinding76 = FlaxTypeRef(
  "object",
  id: "flax.audio/audio#type:AudioEvent",
);
const _flaxBinding77 = FlaxTypeRef(
  "stream",
  id: "flax.core/flutter#type:Stream",
  dartType: FlaxDartTypes.typeOf<api2.Stream<api.AudioEvent>>,
  item: _flaxBinding76,
  stream: FlaxStreamBinding(
    "stream:flax.core/flutter#type:Stream[object:flax.audio/audio#type:AudioEvent]",
    _stream0Matches,
    _stream0Adapt,
  ),
);
const _flaxBinding78 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding77,
  id: "callback:<>()->stream:flax.core/flutter#type:Stream[object:flax.audio/audio#type:AudioEvent]",
);
const _flaxBinding79 = FlaxTypeRef(
  "stream",
  id: "flax.core/flutter#type:Stream",
  dartType: FlaxDartTypes.typeOf<api2.Stream<api.PlayerState>>,
  item: _flaxBinding74,
  stream: FlaxStreamBinding(
    "stream:flax.core/flutter#type:Stream[enum:flax.audio/audio#type:PlayerState]",
    _stream1Matches,
    _stream1Adapt,
  ),
);
const _flaxBinding80 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding79,
  id: "callback:<>()->stream:flax.core/flutter#type:Stream[enum:flax.audio/audio#type:PlayerState]",
);
const _flaxBinding81 = FlaxTypeRef(
  "stream",
  id: "flax.core/flutter#type:Stream",
  dartType: FlaxDartTypes.typeOf<api2.Stream<api1.Duration>>,
  item: flaxDurationType,
  stream: FlaxStreamBinding(
    "stream:flax.core/flutter#type:Stream[object:flax.core/flutter#type:Duration]",
    _stream2Matches,
    _stream2Adapt,
  ),
);
const _flaxBinding82 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding81,
  id: "callback:<>()->stream:flax.core/flutter#type:Stream[object:flax.core/flutter#type:Duration]",
);
const _flaxBinding83 = FlaxTypeRef(
  "stream",
  id: "flax.core/flutter#type:Stream",
  dartType: FlaxDartTypes.typeOf<api2.Stream<void>>,
  item: flaxVoidType,
  stream: FlaxStreamBinding(
    "stream:flax.core/flutter#type:Stream[void:]",
    _stream3Matches,
    _stream3Adapt,
  ),
);
const _flaxBinding84 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding83,
  id: "callback:<>()->stream:flax.core/flutter#type:Stream[void:]",
);
const _flaxBinding85 = FlaxTypeRef(
  "stream",
  id: "flax.core/flutter#type:Stream",
  dartType: FlaxDartTypes.typeOf<api2.Stream<String>>,
  item: flaxStringType,
  stream: FlaxStreamBinding(
    "stream:flax.core/flutter#type:Stream[String:]",
    _stream4Matches,
    _stream4Adapt,
  ),
);
const _flaxBinding86 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding85,
  id: "callback:<>()->stream:flax.core/flutter#type:Stream[String:]",
);
const _flaxBinding87 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", _flaxBinding68)],
  flaxVoidType,
  id: "callback:<>(p:r:value:object:flax.audio/audio#type:AudioCache)->void:",
);
const _flaxBinding88 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", _flaxBinding74)],
  flaxVoidType,
  id: "callback:<>(p:r:value:enum:flax.audio/audio#type:PlayerState)->void:",
);
const _flaxBinding89 = FlaxTypeRef(
  "object",
  id: "flax.audio/audio#type:PositionUpdater",
  nullable: true,
);
const _flaxBinding90 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", _flaxBinding89)],
  flaxVoidType,
  id: "callback:<>(p:r:value:object?:flax.audio/audio#type:PositionUpdater)->void:",
);
const _flaxBinding91 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding0,
  id: "callback:<>()->object:flax.audio/audio#type:AudioPlayer",
);
const _flaxBinding92 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", flaxNullableAnyType)],
  flaxVoidType,
  id: "callback:<>(p:r:value:any?:)->void:",
);
const _flaxBinding93 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", _flaxBinding0)],
  flaxVoidType,
  id: "callback:<>(p:r:value:object:flax.audio/audio#type:AudioPlayer)->void:",
);
const _flaxBinding94 = FlaxCallbackBinding.signature(
  [],
  flaxUint8ListType,
  id: "callback:<>()->Uint8List:",
);
const _flaxBinding95 = FlaxCallbackBinding(
  [],
  _flaxBinding66,
  _callback0,
  id: "callback:<>()->future:[object?:flax.core/flutter#type:Duration]",
  invoke: _callback0Invoke,
  matches: _callback0Matches,
);
const _flaxBinding96 = FlaxTypeRef("callback", callback: _flaxBinding95);
const _flaxBinding97 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding96,
  id: "callback:<>()->callback:<>()->future:[object?:flax.core/flutter#type:Duration]",
);
const _flaxBinding98 = FlaxTypeRef(
  "enum",
  id: "flax.audio/audio#type:GlobalAudioEventType",
);
const _flaxBinding99 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding98,
  id: "callback:<>()->enum:flax.audio/audio#type:GlobalAudioEventType",
);
const _flaxBinding100 = FlaxTypeRef(
  "object",
  id: "flax.audio/audio#type:GlobalAudioEvent",
);
const _flaxBinding101 = FlaxTypeRef(
  "stream",
  id: "flax.core/flutter#type:Stream",
  dartType: FlaxDartTypes.typeOf<api2.Stream<api.GlobalAudioEvent>>,
  item: _flaxBinding100,
  stream: FlaxStreamBinding(
    "stream:flax.core/flutter#type:Stream[object:flax.audio/audio#type:GlobalAudioEvent]",
    _stream5Matches,
    _stream5Adapt,
  ),
);
const _flaxBinding102 = FlaxCallbackBinding.signature(
  [],
  _flaxBinding101,
  id: "callback:<>()->stream:flax.core/flutter#type:Stream[object:flax.audio/audio#type:GlobalAudioEvent]",
);
const _flaxBinding103 = FlaxCallbackBinding.signature(
  [FlaxCallbackParameter.plain("value", _flaxBinding101)],
  flaxVoidType,
  id: "callback:<>(p:r:value:stream:flax.core/flutter#type:Stream[object:flax.audio/audio#type:GlobalAudioEvent])->void:",
);
const _flaxBinding104 = FlaxCallbackBinding.signature(
  [],
  flaxDurationType,
  id: "callback:<>()->object:flax.core/flutter#type:Duration",
);
const _flaxBinding105 = FlaxGetter.plain(
  "mimeType",
  flaxNullableStringType,
  _Source_mimeType,
);
const _flaxBinding106 = FlaxInstanceMethod.shared(
  _flaxBinding2,
  _Source_setOnPlayer,
);
const _flaxBinding107 = <FlaxParameter>[];
const _flaxBinding108 = FlaxProxyMember("setOnPlayer", 0, _flaxBinding2);
const _flaxBinding109 = FlaxProxyMember("mimeType", 1, flaxNullableStringCall);
const _flaxBinding110 = FlaxObjectBinding(
  "flax.audio/audio#type:Source",
  [_flaxBinding105],
  {"setOnPlayer": _flaxBinding106},
  constructors: {"@implementation": _flaxBinding107},
  create: _createSource,
  matches: _isSource,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([_flaxBinding108, _flaxBinding109]),
);
const _flaxBinding111 = FlaxGetter.plain(
  "path",
  flaxStringType,
  _AssetSource_path,
);
const _flaxBinding112 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _AssetSource_toString,
);
const _flaxBinding113 = FlaxInstanceMethod.shared(
  _flaxBinding2,
  _FlaxProxyDispatch0_super_call_setOnPlayer,
);
const _flaxBinding114 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _FlaxProxyDispatch1_super_call_toString,
);
const _flaxBinding115 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _FlaxProxyDispatch2_super_get_path,
);
const _flaxBinding116 = FlaxInstanceMethod.shared(
  flaxNullableStringCall,
  _FlaxProxyDispatch0_super_get_mimeType,
);
const _flaxBinding117 = <FlaxParameter>[
  FlaxParameter.required("path", flaxStringType),
  FlaxParameter("mimeType", flaxNullableStringType, required: false),
];
const _flaxBinding118 = FlaxProxyMember(
  "setOnPlayer",
  0,
  _flaxBinding2,
  hasSuper: true,
);
const _flaxBinding119 = FlaxProxyMember(
  "toString",
  0,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding120 = FlaxProxyMember(
  "path",
  1,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding121 = FlaxProxyMember(
  "mimeType",
  1,
  flaxNullableStringCall,
  hasSuper: true,
);
const _flaxBinding122 = FlaxObjectBinding(
  "flax.audio/audio#type:AssetSource",
  [_flaxBinding111],
  {
    "toString": _flaxBinding112,
    "@super:setOnPlayer": _flaxBinding113,
    "@super:toString": _flaxBinding114,
    "@super:get:path": _flaxBinding115,
    "@super:get:mimeType": _flaxBinding116,
  },
  constructors: {"": _flaxBinding117, "@implementation": _flaxBinding117},
  create: _createAssetSource,
  matches: _isAssetSource,
  setters: [],
  supertypes: ["flax.audio/audio#type:Source", "dart:core::Object"],
  parent: _flaxBinding110,
  proxy: FlaxProxyBinding([
    _flaxBinding118,
    _flaxBinding119,
    _flaxBinding120,
    _flaxBinding121,
  ]),
);
const _flaxBinding123 = FlaxGetter.plain(
  "loadedFiles",
  _flaxBinding18,
  _AudioCache_loadedFiles,
);
const _flaxBinding124 = FlaxGetter.plain(
  "prefix",
  flaxStringType,
  _AudioCache_prefix,
);
const _flaxBinding125 = FlaxGetter.plain(
  "cacheId",
  flaxNullableStringType,
  _AudioCache_cacheId,
);
const _flaxBinding126 = FlaxSetter(
  "prefix",
  flaxStringType,
  _AudioCache_set_prefix,
);
const _flaxBinding127 = FlaxSetter(
  "cacheId",
  flaxNullableStringType,
  _AudioCache_set_cacheId,
);
const _flaxBinding128 = FlaxInstanceMethod.shared(
  _flaxBinding3,
  _AudioCache_clear,
);
const _flaxBinding129 = FlaxInstanceMethod.shared(
  _flaxBinding4,
  _AudioCache_clearAll,
);
const _flaxBinding130 = FlaxInstanceMethod.shared(
  _flaxBinding7,
  _AudioCache_fetchToMemory,
);
const _flaxBinding131 = FlaxInstanceMethod.shared(
  _flaxBinding7,
  _AudioCache_load,
);
const _flaxBinding132 = FlaxInstanceMethod.shared(
  _flaxBinding9,
  _AudioCache_loadPath,
);
const _flaxBinding133 = FlaxInstanceMethod.shared(
  _flaxBinding11,
  _AudioCache_loadAsBytes,
);
const _flaxBinding134 = FlaxInstanceMethod.shared(
  _flaxBinding17,
  _AudioCache_loadAll,
);
const _flaxBinding135 = <FlaxParameter>[
  FlaxParameter(
    "prefix",
    flaxStringType,
    required: false,
    defaultValue: 'assets/',
  ),
  FlaxParameter("cacheId", flaxNullableStringType, required: false),
];
const _flaxBinding136 = FlaxProxyMember(
  "clear",
  0,
  _flaxBinding3,
  hasSuper: true,
);
const _flaxBinding137 = FlaxProxyMember(
  "clearAll",
  0,
  _flaxBinding4,
  hasSuper: true,
);
const _flaxBinding138 = FlaxProxyMember(
  "fetchToMemory",
  0,
  _flaxBinding7,
  hasSuper: true,
);
const _flaxBinding139 = FlaxProxyMember(
  "load",
  0,
  _flaxBinding7,
  hasSuper: true,
);
const _flaxBinding140 = FlaxProxyMember(
  "loadPath",
  0,
  _flaxBinding9,
  hasSuper: true,
);
const _flaxBinding141 = FlaxProxyMember(
  "loadAsBytes",
  0,
  _flaxBinding11,
  hasSuper: true,
);
const _flaxBinding142 = FlaxProxyMember(
  "loadAll",
  0,
  _flaxBinding17,
  hasSuper: true,
);
const _flaxBinding143 = FlaxProxyMember(
  "loadedFiles",
  1,
  _flaxBinding19,
  hasSuper: true,
);
const _flaxBinding144 = FlaxProxyMember(
  "prefix",
  1,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding145 = FlaxProxyMember(
  "cacheId",
  1,
  flaxNullableStringCall,
  hasSuper: true,
);
const _flaxBinding146 = FlaxProxyMember(
  "prefix",
  2,
  _flaxBinding20,
  hasSuper: true,
);
const _flaxBinding147 = FlaxProxyMember(
  "cacheId",
  2,
  _flaxBinding21,
  hasSuper: true,
);
const _flaxBinding148 = FlaxObjectBinding(
  "flax.audio/audio#type:AudioCache",
  [_flaxBinding123, _flaxBinding124, _flaxBinding125],
  {
    "clear": _flaxBinding128,
    "clearAll": _flaxBinding129,
    "fetchToMemory": _flaxBinding130,
    "load": _flaxBinding131,
    "loadPath": _flaxBinding132,
    "loadAsBytes": _flaxBinding133,
    "loadAll": _flaxBinding134,
    "@super:clear": FlaxInstanceMethod.shared(
      _flaxBinding3,
      _AudioCache_super_clear,
    ),
    "@super:clearAll": FlaxInstanceMethod.shared(
      _flaxBinding4,
      _AudioCache_super_clearAll,
    ),
    "@super:fetchToMemory": FlaxInstanceMethod.shared(
      _flaxBinding7,
      _AudioCache_super_fetchToMemory,
    ),
    "@super:load": FlaxInstanceMethod.shared(
      _flaxBinding7,
      _AudioCache_super_load,
    ),
    "@super:loadPath": FlaxInstanceMethod.shared(
      _flaxBinding9,
      _AudioCache_super_loadPath,
    ),
    "@super:loadAsBytes": FlaxInstanceMethod.shared(
      _flaxBinding11,
      _AudioCache_super_loadAsBytes,
    ),
    "@super:loadAll": FlaxInstanceMethod.shared(
      _flaxBinding17,
      _AudioCache_super_loadAll,
    ),
    "@super:get:loadedFiles": FlaxInstanceMethod.shared(
      _flaxBinding19,
      _AudioCache_super_get_loadedFiles,
    ),
    "@super:get:prefix": FlaxInstanceMethod.shared(
      flaxStringCall,
      _AudioCache_super_get_prefix,
    ),
    "@super:get:cacheId": FlaxInstanceMethod.shared(
      flaxNullableStringCall,
      _AudioCache_super_get_cacheId,
    ),
    "@super:set:prefix": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxStringType)],
      flaxVoidType,
      _AudioCache_super_set_prefix,
    ),
    "@super:set:cacheId": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxNullableStringType)],
      flaxVoidType,
      _AudioCache_super_set_cacheId,
    ),
  },
  constructors: {"": _flaxBinding135, "@implementation": _flaxBinding135},
  create: _createAudioCache,
  matches: _isAudioCache,
  setters: [_flaxBinding126, _flaxBinding127],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding136,
    _flaxBinding137,
    _flaxBinding138,
    _flaxBinding139,
    _flaxBinding140,
    _flaxBinding141,
    _flaxBinding142,
    _flaxBinding143,
    _flaxBinding144,
    _flaxBinding145,
    _flaxBinding146,
    _flaxBinding147,
  ]),
);
const _flaxBinding149 = FlaxGetter.plain(
  "android",
  _flaxBinding24,
  _AudioContext_android,
);
const _flaxBinding150 = FlaxGetter.plain(
  "iOS",
  _flaxBinding26,
  _AudioContext_iOS,
);
const _flaxBinding151 = FlaxSetter(
  "iOS",
  _flaxBinding26,
  _AudioContext_set_iOS,
);
const _flaxBinding152 = FlaxTypeRef(
  "object",
  id: "flax.audio/audio#type:AudioContextAndroid",
  nullable: true,
);
const _flaxBinding153 = <FlaxParameter>[
  FlaxParameter("android", _flaxBinding152, required: false),
  FlaxParameter("iOS", _flaxBinding39, required: false),
];
const _flaxBinding154 = FlaxInstanceMethod.plain(
  _flaxBinding153,
  _flaxBinding37,
  _AudioContext_copy,
);
const _flaxBinding155 = FlaxInstanceMethod.shared(
  _flaxBinding23,
  _AudioContext_toJson,
);
const _flaxBinding156 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _AudioContext_toString,
);
const _flaxBinding157 = FlaxInstanceMethod.shared(
  _flaxBinding23,
  _FlaxProxyDispatch3_super_call_toJson,
);
const _flaxBinding158 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain(
      "android",
      _flaxBinding152,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "iOS",
      _flaxBinding39,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding37,
  id: "callback:<>(n:o:android:object?:flax.audio/audio#type:AudioContextAndroid,n:o:iOS:object?:flax.audio/audio#type:AudioContextIOS)->object:flax.audio/audio#type:AudioContext",
);
const _flaxBinding159 = FlaxProxyMember(
  "copy",
  0,
  _flaxBinding158,
  hasSuper: true,
);
const _flaxBinding160 = FlaxProxyMember(
  "toJson",
  0,
  _flaxBinding23,
  hasSuper: true,
);
const _flaxBinding161 = FlaxProxyMember(
  "android",
  1,
  _flaxBinding25,
  hasSuper: true,
);
const _flaxBinding162 = FlaxProxyMember(
  "iOS",
  1,
  _flaxBinding27,
  hasSuper: true,
);
const _flaxBinding163 = FlaxProxyMember(
  "iOS",
  2,
  _flaxBinding28,
  hasSuper: true,
);
const _flaxBinding164 = FlaxObjectBinding(
  "flax.audio/audio#type:AudioContext",
  [_flaxBinding149, _flaxBinding150],
  {
    "copy": _flaxBinding154,
    "toJson": _flaxBinding155,
    "toString": _flaxBinding156,
    "@super:copy": FlaxInstanceMethod.plain(
      _flaxBinding153,
      _flaxBinding37,
      _AudioContext_super_copy,
    ),
    "@super:toJson": _flaxBinding157,
    "@super:toString": _flaxBinding114,
    "@super:get:android": FlaxInstanceMethod.shared(
      _flaxBinding25,
      _AudioContext_super_get_android,
    ),
    "@super:get:iOS": FlaxInstanceMethod.shared(
      _flaxBinding27,
      _AudioContext_super_get_iOS,
    ),
    "@super:set:iOS": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding26)],
      flaxVoidType,
      _AudioContext_super_set_iOS,
    ),
  },
  constructors: {"": _flaxBinding153, "@implementation": _flaxBinding153},
  create: _createAudioContext,
  matches: _isAudioContext,
  setters: [_flaxBinding151],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding159,
    _flaxBinding160,
    _flaxBinding119,
    _flaxBinding161,
    _flaxBinding162,
    _flaxBinding163,
  ]),
);
const _flaxBinding165 = FlaxGetter.plain(
  "isSpeakerphoneOn",
  flaxBoolType,
  _AudioContextAndroid_isSpeakerphoneOn,
);
const _flaxBinding166 = FlaxGetter.plain(
  "audioMode",
  _flaxBinding29,
  _AudioContextAndroid_audioMode,
);
const _flaxBinding167 = FlaxGetter.plain(
  "stayAwake",
  flaxBoolType,
  _AudioContextAndroid_stayAwake,
);
const _flaxBinding168 = FlaxGetter.plain(
  "contentType",
  _flaxBinding31,
  _AudioContextAndroid_contentType,
);
const _flaxBinding169 = FlaxGetter.plain(
  "usageType",
  _flaxBinding33,
  _AudioContextAndroid_usageType,
);
const _flaxBinding170 = FlaxGetter.plain(
  "audioFocus",
  _flaxBinding35,
  _AudioContextAndroid_audioFocus,
);
const _flaxBinding171 = FlaxTypeRef(
  "enum",
  id: "flax.audio/audio#type:AndroidAudioFocus",
  nullable: true,
);
const _flaxBinding172 = FlaxTypeRef(
  "enum",
  id: "flax.audio/audio#type:AndroidAudioMode",
  nullable: true,
);
const _flaxBinding173 = FlaxTypeRef(
  "enum",
  id: "flax.audio/audio#type:AndroidContentType",
  nullable: true,
);
const _flaxBinding174 = FlaxTypeRef(
  "enum",
  id: "flax.audio/audio#type:AndroidUsageType",
  nullable: true,
);
const _flaxBinding175 = <FlaxParameter>[
  FlaxParameter("audioFocus", _flaxBinding171, required: false),
  FlaxParameter("audioMode", _flaxBinding172, required: false),
  FlaxParameter("contentType", _flaxBinding173, required: false),
  FlaxParameter("isSpeakerphoneOn", flaxNullableBoolType, required: false),
  FlaxParameter("stayAwake", flaxNullableBoolType, required: false),
  FlaxParameter("usageType", _flaxBinding174, required: false),
];
const _flaxBinding176 = FlaxInstanceMethod.plain(
  _flaxBinding175,
  _flaxBinding24,
  _AudioContextAndroid_copy,
);
const _flaxBinding177 = FlaxInstanceMethod.shared(
  _flaxBinding23,
  _AudioContextAndroid_toJson,
);
const _flaxBinding178 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _AudioContextAndroid_toString,
);
const _flaxBinding179 = FlaxInstanceMethod.shared(
  flaxBoolCall,
  _FlaxProxyDispatch4_super_get_stayAwake,
);
const _flaxBinding180 = <FlaxParameter>[
  FlaxParameter(
    "isSpeakerphoneOn",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "audioMode",
    _flaxBinding29,
    required: false,
    defaultValue: api.AndroidAudioMode.normal,
  ),
  FlaxParameter(
    "stayAwake",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "contentType",
    _flaxBinding31,
    required: false,
    defaultValue: api.AndroidContentType.music,
  ),
  FlaxParameter(
    "usageType",
    _flaxBinding33,
    required: false,
    defaultValue: api.AndroidUsageType.media,
  ),
  FlaxParameter(
    "audioFocus",
    _flaxBinding35,
    required: false,
    defaultValue: api.AndroidAudioFocus.gain,
  ),
];
const _flaxBinding181 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain(
      "isSpeakerphoneOn",
      flaxNullableBoolType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "audioMode",
      _flaxBinding172,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "stayAwake",
      flaxNullableBoolType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "contentType",
      _flaxBinding173,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "usageType",
      _flaxBinding174,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "audioFocus",
      _flaxBinding171,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding24,
  id: "callback:<>(n:o:isSpeakerphoneOn:bool?:,n:o:audioMode:enum?:flax.audio/audio#type:AndroidAudioMode,n:o:stayAwake:bool?:,n:o:contentType:enum?:flax.audio/audio#type:AndroidContentType,n:o:usageType:enum?:flax.audio/audio#type:AndroidUsageType,n:o:audioFocus:enum?:flax.audio/audio#type:AndroidAudioFocus)->object:flax.audio/audio#type:AudioContextAndroid",
);
const _flaxBinding182 = FlaxProxyMember(
  "copy",
  0,
  _flaxBinding181,
  hasSuper: true,
);
const _flaxBinding183 = FlaxProxyMember(
  "isSpeakerphoneOn",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding184 = FlaxProxyMember(
  "audioMode",
  1,
  _flaxBinding30,
  hasSuper: true,
);
const _flaxBinding185 = FlaxProxyMember(
  "stayAwake",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding186 = FlaxProxyMember(
  "contentType",
  1,
  _flaxBinding32,
  hasSuper: true,
);
const _flaxBinding187 = FlaxProxyMember(
  "usageType",
  1,
  _flaxBinding34,
  hasSuper: true,
);
const _flaxBinding188 = FlaxProxyMember(
  "audioFocus",
  1,
  _flaxBinding36,
  hasSuper: true,
);
const _flaxBinding189 = FlaxObjectBinding(
  "flax.audio/audio#type:AudioContextAndroid",
  [
    _flaxBinding165,
    _flaxBinding166,
    _flaxBinding167,
    _flaxBinding168,
    _flaxBinding169,
    _flaxBinding170,
  ],
  {
    "copy": _flaxBinding176,
    "toJson": _flaxBinding177,
    "toString": _flaxBinding178,
    "@super:copy": FlaxInstanceMethod.plain(
      _flaxBinding175,
      _flaxBinding24,
      _AudioContextAndroid_super_copy,
    ),
    "@super:toJson": _flaxBinding157,
    "@super:toString": _flaxBinding114,
    "@super:get:isSpeakerphoneOn": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _AudioContextAndroid_super_get_isSpeakerphoneOn,
    ),
    "@super:get:audioMode": FlaxInstanceMethod.shared(
      _flaxBinding30,
      _AudioContextAndroid_super_get_audioMode,
    ),
    "@super:get:stayAwake": _flaxBinding179,
    "@super:get:contentType": FlaxInstanceMethod.shared(
      _flaxBinding32,
      _AudioContextAndroid_super_get_contentType,
    ),
    "@super:get:usageType": FlaxInstanceMethod.shared(
      _flaxBinding34,
      _AudioContextAndroid_super_get_usageType,
    ),
    "@super:get:audioFocus": FlaxInstanceMethod.shared(
      _flaxBinding36,
      _AudioContextAndroid_super_get_audioFocus,
    ),
  },
  constructors: {"": _flaxBinding180, "@implementation": _flaxBinding180},
  create: _createAudioContextAndroid,
  matches: _isAudioContextAndroid,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding182,
    _flaxBinding160,
    _flaxBinding119,
    _flaxBinding183,
    _flaxBinding184,
    _flaxBinding185,
    _flaxBinding186,
    _flaxBinding187,
    _flaxBinding188,
  ]),
);
const _flaxBinding190 = FlaxGetter.plain(
  "route",
  _flaxBinding41,
  _AudioContextConfig_route,
);
const _flaxBinding191 = FlaxGetter.plain(
  "focus",
  _flaxBinding43,
  _AudioContextConfig_focus,
);
const _flaxBinding192 = FlaxGetter.plain(
  "respectSilence",
  flaxBoolType,
  _AudioContextConfig_respectSilence,
);
const _flaxBinding193 = FlaxGetter.plain(
  "stayAwake",
  flaxBoolType,
  _AudioContextConfig_stayAwake,
);
const _flaxBinding194 = FlaxTypeRef(
  "enum",
  id: "flax.audio/audio#type:AudioContextConfigFocus",
  nullable: true,
);
const _flaxBinding195 = FlaxTypeRef(
  "enum",
  id: "flax.audio/audio#type:AudioContextConfigRoute",
  nullable: true,
);
const _flaxBinding196 = <FlaxParameter>[
  FlaxParameter("focus", _flaxBinding194, required: false),
  FlaxParameter("respectSilence", flaxNullableBoolType, required: false),
  FlaxParameter("route", _flaxBinding195, required: false),
  FlaxParameter("stayAwake", flaxNullableBoolType, required: false),
];
const _flaxBinding197 = FlaxTypeRef(
  "object",
  id: "flax.audio/audio#type:AudioContextConfig",
);
const _flaxBinding198 = FlaxInstanceMethod.plain(
  _flaxBinding196,
  _flaxBinding197,
  _AudioContextConfig_copy,
);
const _flaxBinding199 = FlaxInstanceMethod.shared(
  _flaxBinding38,
  _AudioContextConfig_build,
);
const _flaxBinding200 = FlaxInstanceMethod.shared(
  _flaxBinding25,
  _AudioContextConfig_buildAndroid,
);
const _flaxBinding201 = FlaxInstanceMethod.shared(
  _flaxBinding40,
  _AudioContextConfig_buildIOS,
);
const _flaxBinding202 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _AudioContextConfig_validateIOS,
);
const _flaxBinding203 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _AudioContextConfig_toString,
);
const _flaxBinding204 = <FlaxParameter>[
  FlaxParameter(
    "route",
    _flaxBinding41,
    required: false,
    defaultValue: api.AudioContextConfigRoute.system,
  ),
  FlaxParameter(
    "focus",
    _flaxBinding43,
    required: false,
    defaultValue: api.AudioContextConfigFocus.gain,
  ),
  FlaxParameter(
    "respectSilence",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "stayAwake",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
];
const _flaxBinding205 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain(
      "route",
      _flaxBinding195,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "focus",
      _flaxBinding194,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "respectSilence",
      flaxNullableBoolType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "stayAwake",
      flaxNullableBoolType,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding197,
  id: "callback:<>(n:o:route:enum?:flax.audio/audio#type:AudioContextConfigRoute,n:o:focus:enum?:flax.audio/audio#type:AudioContextConfigFocus,n:o:respectSilence:bool?:,n:o:stayAwake:bool?:)->object:flax.audio/audio#type:AudioContextConfig",
);
const _flaxBinding206 = FlaxProxyMember(
  "copy",
  0,
  _flaxBinding205,
  hasSuper: true,
);
const _flaxBinding207 = FlaxProxyMember(
  "build",
  0,
  _flaxBinding38,
  hasSuper: true,
);
const _flaxBinding208 = FlaxProxyMember(
  "buildAndroid",
  0,
  _flaxBinding25,
  hasSuper: true,
);
const _flaxBinding209 = FlaxProxyMember(
  "buildIOS",
  0,
  _flaxBinding40,
  hasSuper: true,
);
const _flaxBinding210 = FlaxProxyMember(
  "validateIOS",
  0,
  flaxVoidCall,
  hasSuper: true,
);
const _flaxBinding211 = FlaxProxyMember(
  "route",
  1,
  _flaxBinding42,
  hasSuper: true,
);
const _flaxBinding212 = FlaxProxyMember(
  "focus",
  1,
  _flaxBinding44,
  hasSuper: true,
);
const _flaxBinding213 = FlaxProxyMember(
  "respectSilence",
  1,
  flaxBoolCall,
  hasSuper: true,
);
const _flaxBinding214 = FlaxObjectBinding(
  "flax.audio/audio#type:AudioContextConfig",
  [_flaxBinding190, _flaxBinding191, _flaxBinding192, _flaxBinding193],
  {
    "copy": _flaxBinding198,
    "build": _flaxBinding199,
    "buildAndroid": _flaxBinding200,
    "buildIOS": _flaxBinding201,
    "validateIOS": _flaxBinding202,
    "toString": _flaxBinding203,
    "@super:copy": FlaxInstanceMethod.plain(
      _flaxBinding196,
      _flaxBinding197,
      _AudioContextConfig_super_copy,
    ),
    "@super:build": FlaxInstanceMethod.shared(
      _flaxBinding38,
      _AudioContextConfig_super_build,
    ),
    "@super:buildAndroid": FlaxInstanceMethod.shared(
      _flaxBinding25,
      _AudioContextConfig_super_buildAndroid,
    ),
    "@super:buildIOS": FlaxInstanceMethod.shared(
      _flaxBinding40,
      _AudioContextConfig_super_buildIOS,
    ),
    "@super:validateIOS": FlaxInstanceMethod.shared(
      flaxVoidCall,
      _AudioContextConfig_super_validateIOS,
    ),
    "@super:toString": _flaxBinding114,
    "@super:get:route": FlaxInstanceMethod.shared(
      _flaxBinding42,
      _AudioContextConfig_super_get_route,
    ),
    "@super:get:focus": FlaxInstanceMethod.shared(
      _flaxBinding44,
      _AudioContextConfig_super_get_focus,
    ),
    "@super:get:respectSilence": FlaxInstanceMethod.shared(
      flaxBoolCall,
      _AudioContextConfig_super_get_respectSilence,
    ),
    "@super:get:stayAwake": _flaxBinding179,
  },
  constructors: {"": _flaxBinding204, "@implementation": _flaxBinding204},
  create: _createAudioContextConfig,
  matches: _isAudioContextConfig,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding206,
    _flaxBinding207,
    _flaxBinding208,
    _flaxBinding209,
    _flaxBinding210,
    _flaxBinding119,
    _flaxBinding211,
    _flaxBinding212,
    _flaxBinding213,
    _flaxBinding185,
  ]),
);
const _flaxBinding215 = FlaxGetter.plain(
  "category",
  _flaxBinding45,
  _AudioContextIOS_category,
);
const _flaxBinding216 = FlaxGetter.plain(
  "options",
  _flaxBinding49,
  _AudioContextIOS_options,
);
const _flaxBinding217 = FlaxTypeRef(
  "enum",
  id: "flax.audio/audio#type:AVAudioSessionCategory",
  nullable: true,
);
const _flaxBinding218 = FlaxTypeRef(
  "set",
  nullable: true,
  item: _flaxBinding47,
  collection: FlaxCollectionBinding(
    "set:[enum:flax.audio/audio#type:AVAudioSessionOptions]",
    _collection6Create,
    _collection6Matches,
  ),
  iterable: _flaxBinding48,
);
const _flaxBinding219 = <FlaxParameter>[
  FlaxParameter("category", _flaxBinding217, required: false),
  FlaxParameter("options", _flaxBinding218, required: false),
];
const _flaxBinding220 = FlaxInstanceMethod.plain(
  _flaxBinding219,
  _flaxBinding26,
  _AudioContextIOS_copy,
);
const _flaxBinding221 = FlaxInstanceMethod.shared(
  _flaxBinding23,
  _AudioContextIOS_toJson,
);
const _flaxBinding222 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _AudioContextIOS_toString,
);
const _flaxBinding223 = <FlaxParameter>[
  FlaxParameter(
    "category",
    _flaxBinding45,
    required: false,
    defaultValue: api.AVAudioSessionCategory.playback,
  ),
  FlaxParameter(
    "options",
    _flaxBinding49,
    required: false,
    omitWhenAbsent: true,
  ),
];
const _flaxBinding224 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain(
      "category",
      _flaxBinding217,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "options",
      _flaxBinding218,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding26,
  id: "callback:<>(n:o:category:enum?:flax.audio/audio#type:AVAudioSessionCategory,n:o:options:set?:[enum:flax.audio/audio#type:AVAudioSessionOptions])->object:flax.audio/audio#type:AudioContextIOS",
);
const _flaxBinding225 = FlaxProxyMember(
  "copy",
  0,
  _flaxBinding224,
  hasSuper: true,
);
const _flaxBinding226 = FlaxProxyMember(
  "category",
  1,
  _flaxBinding46,
  hasSuper: true,
);
const _flaxBinding227 = FlaxProxyMember(
  "options",
  1,
  _flaxBinding50,
  hasSuper: true,
);
const _flaxBinding228 = FlaxObjectBinding(
  "flax.audio/audio#type:AudioContextIOS",
  [_flaxBinding215, _flaxBinding216],
  {
    "copy": _flaxBinding220,
    "toJson": _flaxBinding221,
    "toString": _flaxBinding222,
    "@super:copy": FlaxInstanceMethod.plain(
      _flaxBinding219,
      _flaxBinding26,
      _AudioContextIOS_super_copy,
    ),
    "@super:toJson": _flaxBinding157,
    "@super:toString": _flaxBinding114,
    "@super:get:category": FlaxInstanceMethod.shared(
      _flaxBinding46,
      _AudioContextIOS_super_get_category,
    ),
    "@super:get:options": FlaxInstanceMethod.shared(
      _flaxBinding50,
      _AudioContextIOS_super_get_options,
    ),
  },
  constructors: {"": _flaxBinding223, "@implementation": _flaxBinding223},
  create: _createAudioContextIOS,
  matches: _isAudioContextIOS,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding225,
    _flaxBinding160,
    _flaxBinding119,
    _flaxBinding226,
    _flaxBinding227,
  ]),
);
const _flaxBinding229 = FlaxGetter.plain(
  "eventType",
  _flaxBinding51,
  _AudioEvent_eventType,
);
const _flaxBinding230 = FlaxGetter.plain(
  "duration",
  _flaxBinding53,
  _AudioEvent_duration,
);
const _flaxBinding231 = FlaxGetter.plain(
  "logMessage",
  flaxNullableStringType,
  _AudioEvent_logMessage,
);
const _flaxBinding232 = FlaxGetter.plain(
  "isPrepared",
  flaxNullableBoolType,
  _AudioEvent_isPrepared,
);
const _flaxBinding233 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _AudioEvent_toString,
);
const _flaxBinding234 = FlaxInstanceMethod.shared(
  flaxNullableStringCall,
  _FlaxProxyDispatch5_super_get_logMessage,
);
const _flaxBinding235 = <FlaxParameter>[
  FlaxParameter.required("eventType", _flaxBinding51),
  FlaxParameter("duration", _flaxBinding53, required: false),
  FlaxParameter("logMessage", flaxNullableStringType, required: false),
  FlaxParameter("isPrepared", flaxNullableBoolType, required: false),
];
const _flaxBinding236 = FlaxProxyMember(
  "eventType",
  1,
  _flaxBinding52,
  hasSuper: true,
);
const _flaxBinding237 = FlaxProxyMember(
  "duration",
  1,
  _flaxBinding54,
  hasSuper: true,
);
const _flaxBinding238 = FlaxProxyMember(
  "logMessage",
  1,
  flaxNullableStringCall,
  hasSuper: true,
);
const _flaxBinding239 = FlaxProxyMember(
  "isPrepared",
  1,
  flaxNullableBoolCall,
  hasSuper: true,
);
const _flaxBinding240 = FlaxObjectBinding(
  "flax.audio/audio#type:AudioEvent",
  [_flaxBinding229, _flaxBinding230, _flaxBinding231, _flaxBinding232],
  {
    "toString": _flaxBinding233,
    "@super:toString": _flaxBinding114,
    "@super:get:eventType": FlaxInstanceMethod.shared(
      _flaxBinding52,
      _AudioEvent_super_get_eventType,
    ),
    "@super:get:duration": FlaxInstanceMethod.shared(
      _flaxBinding54,
      _AudioEvent_super_get_duration,
    ),
    "@super:get:logMessage": _flaxBinding234,
    "@super:get:isPrepared": FlaxInstanceMethod.shared(
      flaxNullableBoolCall,
      _AudioEvent_super_get_isPrepared,
    ),
  },
  constructors: {"": _flaxBinding235, "@implementation": _flaxBinding235},
  create: _createAudioEvent,
  matches: _isAudioEvent,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding119,
    _flaxBinding236,
    _flaxBinding237,
    _flaxBinding238,
    _flaxBinding239,
  ]),
);
const _flaxBinding241 = FlaxObjectBinding(
  "flax.audio/audio#type:AudioLogger",
  [],
  {},
  constructors: {"": _flaxBinding107},
  create: _createAudioLogger,
  matches: _isAudioLogger,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding242 = FlaxGetter.plain(
  "audioCache",
  _flaxBinding68,
  _AudioPlayer_audioCache,
);
const _flaxBinding243 = FlaxGetter.plain(
  "playerId",
  flaxStringType,
  _AudioPlayer_playerId,
);
const _flaxBinding244 = FlaxGetter.plain(
  "source",
  _flaxBinding70,
  _AudioPlayer_source,
);
const _flaxBinding245 = FlaxGetter.plain(
  "volume",
  flaxDoubleType,
  _AudioPlayer_volume,
);
const _flaxBinding246 = FlaxGetter.plain(
  "balance",
  flaxDoubleType,
  _AudioPlayer_balance,
);
const _flaxBinding247 = FlaxGetter.plain(
  "playbackRate",
  flaxDoubleType,
  _AudioPlayer_playbackRate,
);
const _flaxBinding248 = FlaxGetter.plain(
  "mode",
  _flaxBinding56,
  _AudioPlayer_mode,
);
const _flaxBinding249 = FlaxGetter.plain(
  "releaseMode",
  _flaxBinding61,
  _AudioPlayer_releaseMode,
);
const _flaxBinding250 = FlaxGetter.plain(
  "desiredState",
  _flaxBinding74,
  _AudioPlayer_desiredState,
);
const _flaxBinding251 = FlaxGetter.plain(
  "state",
  _flaxBinding74,
  _AudioPlayer_state,
);
const _flaxBinding252 = FlaxGetter.plain(
  "eventStream",
  _flaxBinding77,
  _AudioPlayer_eventStream,
);
const _flaxBinding253 = FlaxGetter.plain(
  "onPlayerStateChanged",
  _flaxBinding79,
  _AudioPlayer_onPlayerStateChanged,
);
const _flaxBinding254 = FlaxGetter.plain(
  "onPositionChanged",
  _flaxBinding81,
  _AudioPlayer_onPositionChanged,
);
const _flaxBinding255 = FlaxGetter.plain(
  "onDurationChanged",
  _flaxBinding81,
  _AudioPlayer_onDurationChanged,
);
const _flaxBinding256 = FlaxGetter.plain(
  "onPlayerComplete",
  _flaxBinding83,
  _AudioPlayer_onPlayerComplete,
);
const _flaxBinding257 = FlaxGetter.plain(
  "onSeekComplete",
  _flaxBinding83,
  _AudioPlayer_onSeekComplete,
);
const _flaxBinding258 = FlaxGetter.plain(
  "onLog",
  _flaxBinding85,
  _AudioPlayer_onLog,
);
const _flaxBinding259 = FlaxSetter(
  "audioCache",
  _flaxBinding68,
  _AudioPlayer_set_audioCache,
);
const _flaxBinding260 = FlaxSetter(
  "desiredState",
  _flaxBinding74,
  _AudioPlayer_set_desiredState,
);
const _flaxBinding261 = FlaxSetter(
  "state",
  _flaxBinding74,
  _AudioPlayer_set_state,
);
const _flaxBinding262 = FlaxSetter(
  "positionUpdater",
  _flaxBinding89,
  _AudioPlayer_set_positionUpdater,
);
const _flaxBinding263 = FlaxTypeRef(
  "object",
  id: "flax.audio/audio#type:AudioContext",
  nullable: true,
);
const _flaxBinding264 = FlaxTypeRef(
  "enum",
  id: "flax.audio/audio#type:PlayerMode",
  nullable: true,
);
const _flaxBinding265 = <FlaxParameter>[
  FlaxParameter.required("source", _flaxBinding64),
  FlaxParameter("balance", flaxNullableDoubleType, required: false),
  FlaxParameter("ctx", _flaxBinding263, required: false),
  FlaxParameter("mode", _flaxBinding264, required: false),
  FlaxParameter("position", _flaxBinding53, required: false),
  FlaxParameter("volume", flaxNullableDoubleType, required: false),
];
const _flaxBinding266 = FlaxInstanceMethod.plain(
  _flaxBinding265,
  _flaxBinding1,
  _AudioPlayer_play,
);
const _flaxBinding267 = FlaxInstanceMethod.shared(
  _flaxBinding55,
  _AudioPlayer_setAudioContext,
);
const _flaxBinding268 = FlaxInstanceMethod.shared(
  _flaxBinding57,
  _AudioPlayer_setPlayerMode,
);
const _flaxBinding269 = FlaxInstanceMethod.shared(
  _flaxBinding4,
  _AudioPlayer_pause,
);
const _flaxBinding270 = FlaxInstanceMethod.shared(
  _flaxBinding4,
  _AudioPlayer_stop,
);
const _flaxBinding271 = FlaxInstanceMethod.shared(
  _flaxBinding4,
  _AudioPlayer_resume,
);
const _flaxBinding272 = FlaxInstanceMethod.shared(
  _flaxBinding4,
  _AudioPlayer_release,
);
const _flaxBinding273 = FlaxInstanceMethod.shared(
  _flaxBinding58,
  _AudioPlayer_seek,
);
const _flaxBinding274 = FlaxInstanceMethod.shared(
  _flaxBinding59,
  _AudioPlayer_setBalance,
);
const _flaxBinding275 = FlaxInstanceMethod.shared(
  _flaxBinding60,
  _AudioPlayer_setVolume,
);
const _flaxBinding276 = FlaxInstanceMethod.shared(
  _flaxBinding62,
  _AudioPlayer_setReleaseMode,
);
const _flaxBinding277 = FlaxInstanceMethod.shared(
  _flaxBinding63,
  _AudioPlayer_setPlaybackRate,
);
const _flaxBinding278 = FlaxInstanceMethod.shared(
  _flaxBinding65,
  _AudioPlayer_setSource,
);
const _flaxBinding279 = <FlaxParameter>[
  FlaxParameter.required("url", flaxStringType),
  FlaxParameter("mimeType", flaxNullableStringType, required: false),
];
const _flaxBinding280 = FlaxInstanceMethod.plain(
  _flaxBinding279,
  _flaxBinding1,
  _AudioPlayer_setSourceUrl,
);
const _flaxBinding281 = FlaxInstanceMethod.plain(
  _flaxBinding117,
  _flaxBinding1,
  _AudioPlayer_setSourceDeviceFile,
);
const _flaxBinding282 = FlaxInstanceMethod.plain(
  _flaxBinding117,
  _flaxBinding1,
  _AudioPlayer_setSourceAsset,
);
const _flaxBinding283 = <FlaxParameter>[
  FlaxParameter.required("bytes", flaxUint8ListType),
  FlaxParameter("mimeType", flaxNullableStringType, required: false),
];
const _flaxBinding284 = FlaxInstanceMethod.plain(
  _flaxBinding283,
  _flaxBinding1,
  _AudioPlayer_setSourceBytes,
);
const _flaxBinding285 = FlaxInstanceMethod.shared(
  _flaxBinding67,
  _AudioPlayer_getDuration,
);
const _flaxBinding286 = FlaxInstanceMethod.shared(
  _flaxBinding67,
  _AudioPlayer_getCurrentPosition,
);
const _flaxBinding287 = FlaxInstanceMethod.shared(
  _flaxBinding4,
  _AudioPlayer_dispose,
);
const _flaxBinding288 = FlaxInstanceMethod.shared(
  _flaxBinding55,
  _FlaxProxyDispatch6_super_call_setAudioContext,
);
const _flaxBinding289 = FlaxInstanceMethod.shared(
  _flaxBinding4,
  _FlaxProxyDispatch7_super_call_dispose,
);
const _flaxBinding290 = FlaxInstanceMethod.shared(
  _flaxBinding86,
  _FlaxProxyDispatch6_super_get_onLog,
);
const _flaxBinding291 = <FlaxParameter>[
  FlaxParameter("playerId", flaxNullableStringType, required: false),
];
const _flaxBinding292 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("source", _flaxBinding64),
    FlaxCallbackParameter.plain(
      "volume",
      flaxNullableDoubleType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "balance",
      flaxNullableDoubleType,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "ctx",
      _flaxBinding263,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "position",
      _flaxBinding53,
      required: false,
      positional: false,
    ),
    FlaxCallbackParameter.plain(
      "mode",
      _flaxBinding264,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding1,
  id: "callback:<>(p:r:source:object:flax.audio/audio#type:Source,n:o:volume:double?:,n:o:balance:double?:,n:o:ctx:object?:flax.audio/audio#type:AudioContext,n:o:position:object?:flax.core/flutter#type:Duration,n:o:mode:enum?:flax.audio/audio#type:PlayerMode)->future:[void:]",
);
const _flaxBinding293 = FlaxProxyMember(
  "play",
  0,
  _flaxBinding292,
  hasSuper: true,
);
const _flaxBinding294 = FlaxProxyMember(
  "setAudioContext",
  0,
  _flaxBinding55,
  hasSuper: true,
);
const _flaxBinding295 = FlaxProxyMember(
  "setPlayerMode",
  0,
  _flaxBinding57,
  hasSuper: true,
);
const _flaxBinding296 = FlaxProxyMember(
  "pause",
  0,
  _flaxBinding4,
  hasSuper: true,
);
const _flaxBinding297 = FlaxProxyMember(
  "stop",
  0,
  _flaxBinding4,
  hasSuper: true,
);
const _flaxBinding298 = FlaxProxyMember(
  "resume",
  0,
  _flaxBinding4,
  hasSuper: true,
);
const _flaxBinding299 = FlaxProxyMember(
  "release",
  0,
  _flaxBinding4,
  hasSuper: true,
);
const _flaxBinding300 = FlaxProxyMember(
  "seek",
  0,
  _flaxBinding58,
  hasSuper: true,
);
const _flaxBinding301 = FlaxProxyMember(
  "setBalance",
  0,
  _flaxBinding59,
  hasSuper: true,
);
const _flaxBinding302 = FlaxProxyMember(
  "setVolume",
  0,
  _flaxBinding60,
  hasSuper: true,
);
const _flaxBinding303 = FlaxProxyMember(
  "setReleaseMode",
  0,
  _flaxBinding62,
  hasSuper: true,
);
const _flaxBinding304 = FlaxProxyMember(
  "setPlaybackRate",
  0,
  _flaxBinding63,
  hasSuper: true,
);
const _flaxBinding305 = FlaxProxyMember(
  "setSource",
  0,
  _flaxBinding65,
  hasSuper: true,
);
const _flaxBinding306 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("url", flaxStringType),
    FlaxCallbackParameter.plain(
      "mimeType",
      flaxNullableStringType,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding1,
  id: "callback:<>(p:r:url:String:,n:o:mimeType:String?:)->future:[void:]",
);
const _flaxBinding307 = FlaxProxyMember(
  "setSourceUrl",
  0,
  _flaxBinding306,
  hasSuper: true,
);
const _flaxBinding308 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("path", flaxStringType),
    FlaxCallbackParameter.plain(
      "mimeType",
      flaxNullableStringType,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding1,
  id: "callback:<>(p:r:path:String:,n:o:mimeType:String?:)->future:[void:]",
);
const _flaxBinding309 = FlaxProxyMember(
  "setSourceDeviceFile",
  0,
  _flaxBinding308,
  hasSuper: true,
);
const _flaxBinding310 = FlaxProxyMember(
  "setSourceAsset",
  0,
  _flaxBinding308,
  hasSuper: true,
);
const _flaxBinding311 = FlaxCallbackBinding.signature(
  [
    FlaxCallbackParameter.plain("bytes", flaxUint8ListType),
    FlaxCallbackParameter.plain(
      "mimeType",
      flaxNullableStringType,
      required: false,
      positional: false,
    ),
  ],
  _flaxBinding1,
  id: "callback:<>(p:r:bytes:Uint8List:,n:o:mimeType:String?:)->future:[void:]",
);
const _flaxBinding312 = FlaxProxyMember(
  "setSourceBytes",
  0,
  _flaxBinding311,
  hasSuper: true,
);
const _flaxBinding313 = FlaxProxyMember(
  "getDuration",
  0,
  _flaxBinding67,
  hasSuper: true,
);
const _flaxBinding314 = FlaxProxyMember(
  "getCurrentPosition",
  0,
  _flaxBinding67,
  hasSuper: true,
);
const _flaxBinding315 = FlaxProxyMember(
  "dispose",
  0,
  _flaxBinding4,
  hasSuper: true,
);
const _flaxBinding316 = FlaxProxyMember(
  "audioCache",
  1,
  _flaxBinding69,
  hasSuper: true,
);
const _flaxBinding317 = FlaxProxyMember(
  "playerId",
  1,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding318 = FlaxProxyMember(
  "source",
  1,
  _flaxBinding71,
  hasSuper: true,
);
const _flaxBinding319 = FlaxProxyMember(
  "volume",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding320 = FlaxProxyMember(
  "balance",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding321 = FlaxProxyMember(
  "playbackRate",
  1,
  flaxDoubleCall,
  hasSuper: true,
);
const _flaxBinding322 = FlaxProxyMember(
  "mode",
  1,
  _flaxBinding72,
  hasSuper: true,
);
const _flaxBinding323 = FlaxProxyMember(
  "releaseMode",
  1,
  _flaxBinding73,
  hasSuper: true,
);
const _flaxBinding324 = FlaxProxyMember(
  "desiredState",
  1,
  _flaxBinding75,
  hasSuper: true,
);
const _flaxBinding325 = FlaxProxyMember(
  "state",
  1,
  _flaxBinding75,
  hasSuper: true,
);
const _flaxBinding326 = FlaxProxyMember(
  "eventStream",
  1,
  _flaxBinding78,
  hasSuper: true,
);
const _flaxBinding327 = FlaxProxyMember(
  "onPlayerStateChanged",
  1,
  _flaxBinding80,
  hasSuper: true,
);
const _flaxBinding328 = FlaxProxyMember(
  "onPositionChanged",
  1,
  _flaxBinding82,
  hasSuper: true,
);
const _flaxBinding329 = FlaxProxyMember(
  "onDurationChanged",
  1,
  _flaxBinding82,
  hasSuper: true,
);
const _flaxBinding330 = FlaxProxyMember(
  "onPlayerComplete",
  1,
  _flaxBinding84,
  hasSuper: true,
);
const _flaxBinding331 = FlaxProxyMember(
  "onSeekComplete",
  1,
  _flaxBinding84,
  hasSuper: true,
);
const _flaxBinding332 = FlaxProxyMember(
  "onLog",
  1,
  _flaxBinding86,
  hasSuper: true,
);
const _flaxBinding333 = FlaxProxyMember(
  "audioCache",
  2,
  _flaxBinding87,
  hasSuper: true,
);
const _flaxBinding334 = FlaxProxyMember(
  "desiredState",
  2,
  _flaxBinding88,
  hasSuper: true,
);
const _flaxBinding335 = FlaxProxyMember(
  "state",
  2,
  _flaxBinding88,
  hasSuper: true,
);
const _flaxBinding336 = FlaxProxyMember(
  "positionUpdater",
  2,
  _flaxBinding90,
  hasSuper: true,
);
const _flaxBinding337 = FlaxObjectBinding(
  "flax.audio/audio#type:AudioPlayer",
  [
    _flaxBinding242,
    _flaxBinding243,
    _flaxBinding244,
    _flaxBinding245,
    _flaxBinding246,
    _flaxBinding247,
    _flaxBinding248,
    _flaxBinding249,
    _flaxBinding250,
    _flaxBinding251,
    _flaxBinding252,
    _flaxBinding253,
    _flaxBinding254,
    _flaxBinding255,
    _flaxBinding256,
    _flaxBinding257,
    _flaxBinding258,
  ],
  {
    "play": _flaxBinding266,
    "setAudioContext": _flaxBinding267,
    "setPlayerMode": _flaxBinding268,
    "pause": _flaxBinding269,
    "stop": _flaxBinding270,
    "resume": _flaxBinding271,
    "release": _flaxBinding272,
    "seek": _flaxBinding273,
    "setBalance": _flaxBinding274,
    "setVolume": _flaxBinding275,
    "setReleaseMode": _flaxBinding276,
    "setPlaybackRate": _flaxBinding277,
    "setSource": _flaxBinding278,
    "setSourceUrl": _flaxBinding280,
    "setSourceDeviceFile": _flaxBinding281,
    "setSourceAsset": _flaxBinding282,
    "setSourceBytes": _flaxBinding284,
    "getDuration": _flaxBinding285,
    "getCurrentPosition": _flaxBinding286,
    "dispose": _flaxBinding287,
    "@super:play": FlaxInstanceMethod.plain(
      _flaxBinding265,
      _flaxBinding1,
      _AudioPlayer_super_play,
    ),
    "@super:setAudioContext": _flaxBinding288,
    "@super:setPlayerMode": FlaxInstanceMethod.shared(
      _flaxBinding57,
      _AudioPlayer_super_setPlayerMode,
    ),
    "@super:pause": FlaxInstanceMethod.shared(
      _flaxBinding4,
      _AudioPlayer_super_pause,
    ),
    "@super:stop": FlaxInstanceMethod.shared(
      _flaxBinding4,
      _AudioPlayer_super_stop,
    ),
    "@super:resume": FlaxInstanceMethod.shared(
      _flaxBinding4,
      _AudioPlayer_super_resume,
    ),
    "@super:release": FlaxInstanceMethod.shared(
      _flaxBinding4,
      _AudioPlayer_super_release,
    ),
    "@super:seek": FlaxInstanceMethod.shared(
      _flaxBinding58,
      _AudioPlayer_super_seek,
    ),
    "@super:setBalance": FlaxInstanceMethod.shared(
      _flaxBinding59,
      _AudioPlayer_super_setBalance,
    ),
    "@super:setVolume": FlaxInstanceMethod.shared(
      _flaxBinding60,
      _AudioPlayer_super_setVolume,
    ),
    "@super:setReleaseMode": FlaxInstanceMethod.shared(
      _flaxBinding62,
      _AudioPlayer_super_setReleaseMode,
    ),
    "@super:setPlaybackRate": FlaxInstanceMethod.shared(
      _flaxBinding63,
      _AudioPlayer_super_setPlaybackRate,
    ),
    "@super:setSource": FlaxInstanceMethod.shared(
      _flaxBinding65,
      _AudioPlayer_super_setSource,
    ),
    "@super:setSourceUrl": FlaxInstanceMethod.plain(
      _flaxBinding279,
      _flaxBinding1,
      _AudioPlayer_super_setSourceUrl,
    ),
    "@super:setSourceDeviceFile": FlaxInstanceMethod.plain(
      _flaxBinding117,
      _flaxBinding1,
      _AudioPlayer_super_setSourceDeviceFile,
    ),
    "@super:setSourceAsset": FlaxInstanceMethod.plain(
      _flaxBinding117,
      _flaxBinding1,
      _AudioPlayer_super_setSourceAsset,
    ),
    "@super:setSourceBytes": FlaxInstanceMethod.plain(
      _flaxBinding283,
      _flaxBinding1,
      _AudioPlayer_super_setSourceBytes,
    ),
    "@super:getDuration": FlaxInstanceMethod.shared(
      _flaxBinding67,
      _AudioPlayer_super_getDuration,
    ),
    "@super:getCurrentPosition": FlaxInstanceMethod.shared(
      _flaxBinding67,
      _AudioPlayer_super_getCurrentPosition,
    ),
    "@super:dispose": _flaxBinding289,
    "@super:get:audioCache": FlaxInstanceMethod.shared(
      _flaxBinding69,
      _AudioPlayer_super_get_audioCache,
    ),
    "@super:get:playerId": FlaxInstanceMethod.shared(
      flaxStringCall,
      _AudioPlayer_super_get_playerId,
    ),
    "@super:get:source": FlaxInstanceMethod.shared(
      _flaxBinding71,
      _AudioPlayer_super_get_source,
    ),
    "@super:get:volume": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _AudioPlayer_super_get_volume,
    ),
    "@super:get:balance": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _AudioPlayer_super_get_balance,
    ),
    "@super:get:playbackRate": FlaxInstanceMethod.shared(
      flaxDoubleCall,
      _AudioPlayer_super_get_playbackRate,
    ),
    "@super:get:mode": FlaxInstanceMethod.shared(
      _flaxBinding72,
      _AudioPlayer_super_get_mode,
    ),
    "@super:get:releaseMode": FlaxInstanceMethod.shared(
      _flaxBinding73,
      _AudioPlayer_super_get_releaseMode,
    ),
    "@super:get:desiredState": FlaxInstanceMethod.shared(
      _flaxBinding75,
      _AudioPlayer_super_get_desiredState,
    ),
    "@super:get:state": FlaxInstanceMethod.shared(
      _flaxBinding75,
      _AudioPlayer_super_get_state,
    ),
    "@super:get:eventStream": FlaxInstanceMethod.shared(
      _flaxBinding78,
      _AudioPlayer_super_get_eventStream,
    ),
    "@super:get:onPlayerStateChanged": FlaxInstanceMethod.shared(
      _flaxBinding80,
      _AudioPlayer_super_get_onPlayerStateChanged,
    ),
    "@super:get:onPositionChanged": FlaxInstanceMethod.shared(
      _flaxBinding82,
      _AudioPlayer_super_get_onPositionChanged,
    ),
    "@super:get:onDurationChanged": FlaxInstanceMethod.shared(
      _flaxBinding82,
      _AudioPlayer_super_get_onDurationChanged,
    ),
    "@super:get:onPlayerComplete": FlaxInstanceMethod.shared(
      _flaxBinding84,
      _AudioPlayer_super_get_onPlayerComplete,
    ),
    "@super:get:onSeekComplete": FlaxInstanceMethod.shared(
      _flaxBinding84,
      _AudioPlayer_super_get_onSeekComplete,
    ),
    "@super:get:onLog": _flaxBinding290,
    "@super:set:audioCache": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding68)],
      flaxVoidType,
      _AudioPlayer_super_set_audioCache,
    ),
    "@super:set:desiredState": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding74)],
      flaxVoidType,
      _AudioPlayer_super_set_desiredState,
    ),
    "@super:set:state": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding74)],
      flaxVoidType,
      _AudioPlayer_super_set_state,
    ),
    "@super:set:positionUpdater": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding89)],
      flaxVoidType,
      _AudioPlayer_super_set_positionUpdater,
    ),
  },
  constructors: {"": _flaxBinding291, "@implementation": _flaxBinding291},
  create: _createAudioPlayer,
  matches: _isAudioPlayer,
  setters: [_flaxBinding259, _flaxBinding260, _flaxBinding261, _flaxBinding262],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding293,
    _flaxBinding294,
    _flaxBinding295,
    _flaxBinding296,
    _flaxBinding297,
    _flaxBinding298,
    _flaxBinding299,
    _flaxBinding300,
    _flaxBinding301,
    _flaxBinding302,
    _flaxBinding303,
    _flaxBinding304,
    _flaxBinding305,
    _flaxBinding307,
    _flaxBinding309,
    _flaxBinding310,
    _flaxBinding312,
    _flaxBinding313,
    _flaxBinding314,
    _flaxBinding315,
    _flaxBinding316,
    _flaxBinding317,
    _flaxBinding318,
    _flaxBinding319,
    _flaxBinding320,
    _flaxBinding321,
    _flaxBinding322,
    _flaxBinding323,
    _flaxBinding324,
    _flaxBinding325,
    _flaxBinding326,
    _flaxBinding327,
    _flaxBinding328,
    _flaxBinding329,
    _flaxBinding330,
    _flaxBinding331,
    _flaxBinding332,
    _flaxBinding333,
    _flaxBinding334,
    _flaxBinding335,
    _flaxBinding336,
  ]),
);
const _flaxBinding338 = FlaxGetter.plain(
  "cause",
  flaxNullableAnyType,
  _AudioPlayerException_cause,
);
const _flaxBinding339 = FlaxGetter.plain(
  "player",
  _flaxBinding0,
  _AudioPlayerException_player,
);
const _flaxBinding340 = FlaxSetter(
  "cause",
  flaxNullableAnyType,
  _AudioPlayerException_set_cause,
);
const _flaxBinding341 = FlaxSetter(
  "player",
  _flaxBinding0,
  _AudioPlayerException_set_player,
);
const _flaxBinding342 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _AudioPlayerException_toString,
);
const _flaxBinding343 = <FlaxParameter>[
  FlaxParameter.required("player", _flaxBinding0),
  FlaxParameter("cause", flaxNullableAnyType, required: false),
];
const _flaxBinding344 = FlaxProxyMember(
  "cause",
  1,
  flaxNullableAnyCall,
  hasSuper: true,
);
const _flaxBinding345 = FlaxProxyMember(
  "player",
  1,
  _flaxBinding91,
  hasSuper: true,
);
const _flaxBinding346 = FlaxProxyMember(
  "cause",
  2,
  _flaxBinding92,
  hasSuper: true,
);
const _flaxBinding347 = FlaxProxyMember(
  "player",
  2,
  _flaxBinding93,
  hasSuper: true,
);
const _flaxBinding348 = FlaxObjectBinding(
  "flax.audio/audio#type:AudioPlayerException",
  [_flaxBinding338, _flaxBinding339],
  {
    "toString": _flaxBinding342,
    "@super:toString": _flaxBinding114,
    "@super:get:cause": FlaxInstanceMethod.shared(
      flaxNullableAnyCall,
      _AudioPlayerException_super_get_cause,
    ),
    "@super:get:player": FlaxInstanceMethod.shared(
      _flaxBinding91,
      _AudioPlayerException_super_get_player,
    ),
    "@super:set:cause": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", flaxNullableAnyType)],
      flaxVoidType,
      _AudioPlayerException_super_set_cause,
    ),
    "@super:set:player": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding0)],
      flaxVoidType,
      _AudioPlayerException_super_set_player,
    ),
  },
  constructors: {"": _flaxBinding343, "@implementation": _flaxBinding343},
  create: _createAudioPlayerException,
  matches: _isAudioPlayerException,
  setters: [_flaxBinding340, _flaxBinding341],
  supertypes: ["dart:core::Object", "dart:core::Exception"],
  proxy: FlaxProxyBinding([
    _flaxBinding119,
    _flaxBinding344,
    _flaxBinding345,
    _flaxBinding346,
    _flaxBinding347,
  ]),
);
const _flaxBinding349 = FlaxTypeRef(
  "map",
  item: _flaxBinding0,
  key: flaxStringType,
  collection: FlaxCollectionBinding(
    "map:[object:flax.audio/audio#type:AudioPlayer][String:]",
    _collection8Create,
    _collection8Matches,
  ),
);
const _flaxBinding350 = FlaxGetter.plain(
  "currentPlayers",
  _flaxBinding349,
  _AudioPool_currentPlayers,
);
const _flaxBinding351 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding0,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.audio/audio#type:AudioPlayer]",
    _collection10Create,
    _collection10Matches,
    restore: _collection10Restore,
  ),
);
const _flaxBinding352 = FlaxTypeRef(
  "list",
  item: _flaxBinding0,
  collection: FlaxCollectionBinding(
    "list:[object:flax.audio/audio#type:AudioPlayer]",
    _collection9Create,
    _collection9Matches,
  ),
  iterable: _flaxBinding351,
);
const _flaxBinding353 = FlaxGetter.plain(
  "availablePlayers",
  _flaxBinding352,
  _AudioPool_availablePlayers,
);
const _flaxBinding354 = FlaxGetter.plain(
  "audioCache",
  _flaxBinding68,
  _AudioPool_audioCache,
);
const _flaxBinding355 = FlaxGetter.plain(
  "audioContext",
  _flaxBinding263,
  _AudioPool_audioContext,
);
const _flaxBinding356 = FlaxGetter.plain(
  "source",
  _flaxBinding64,
  _AudioPool_source,
);
const _flaxBinding357 = FlaxGetter.plain(
  "minPlayers",
  flaxIntType,
  _AudioPool_minPlayers,
);
const _flaxBinding358 = FlaxGetter.plain(
  "maxPlayers",
  flaxIntType,
  _AudioPool_maxPlayers,
);
const _flaxBinding359 = FlaxGetter.plain(
  "playerMode",
  _flaxBinding56,
  _AudioPool_playerMode,
);
const _flaxBinding360 = FlaxGetter.plain(
  "duration",
  _flaxBinding53,
  _AudioPool_duration,
);
const _flaxBinding361 = FlaxSetter(
  "duration",
  _flaxBinding53,
  _AudioPool_set_duration,
);
const _flaxBinding362 = <FlaxParameter>[
  FlaxParameter("volume", flaxDoubleType, required: false, defaultValue: 1.0),
];
const _flaxBinding363 = FlaxCallbackBinding(
  [],
  _flaxBinding1,
  _callback1,
  id: "callback:<>()->future:[void:]",
  invoke: _callback1Invoke,
  matches: _callback1Matches,
);
const _flaxBinding364 = FlaxTypeRef("callback", callback: _flaxBinding363);
const _flaxBinding365 = FlaxTypeRef(
  "future",
  item: _flaxBinding364,
  future: FlaxFutureBinding("callback:<>()->future:[void:]", _future6Adapt),
);
const _flaxBinding366 = FlaxInstanceMethod.plain(
  _flaxBinding362,
  _flaxBinding365,
  _AudioPool_start,
);
const _flaxBinding367 = FlaxInstanceMethod.shared(
  _flaxBinding67,
  _AudioPool_getDuration,
);
const _flaxBinding368 = FlaxInstanceMethod.shared(
  _flaxBinding4,
  _AudioPool_dispose,
);
const _flaxBinding369 = FlaxObjectBinding(
  "flax.audio/audio#type:AudioPool",
  [
    _flaxBinding350,
    _flaxBinding353,
    _flaxBinding354,
    _flaxBinding355,
    _flaxBinding356,
    _flaxBinding357,
    _flaxBinding358,
    _flaxBinding359,
    _flaxBinding360,
  ],
  {
    "start": _flaxBinding366,
    "getDuration": _flaxBinding367,
    "dispose": _flaxBinding368,
  },
  constructors: {},
  create: _createAudioPool,
  matches: _isAudioPool,
  setters: [_flaxBinding361],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding370 = FlaxGetter.plain(
  "bytes",
  flaxUint8ListType,
  _BytesSource_bytes,
);
const _flaxBinding371 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _BytesSource_toString,
);
const _flaxBinding372 = FlaxProxyMember(
  "bytes",
  1,
  _flaxBinding94,
  hasSuper: true,
);
const _flaxBinding373 = FlaxObjectBinding(
  "flax.audio/audio#type:BytesSource",
  [_flaxBinding370],
  {
    "toString": _flaxBinding371,
    "@super:setOnPlayer": _flaxBinding113,
    "@super:toString": _flaxBinding114,
    "@super:get:bytes": FlaxInstanceMethod.shared(
      _flaxBinding94,
      _BytesSource_super_get_bytes,
    ),
    "@super:get:mimeType": _flaxBinding116,
  },
  constructors: {"": _flaxBinding283, "@implementation": _flaxBinding283},
  create: _createBytesSource,
  matches: _isBytesSource,
  setters: [],
  supertypes: ["flax.audio/audio#type:Source", "dart:core::Object"],
  parent: _flaxBinding110,
  proxy: FlaxProxyBinding([
    _flaxBinding118,
    _flaxBinding119,
    _flaxBinding372,
    _flaxBinding121,
  ]),
);
const _flaxBinding374 = FlaxGetter.plain(
  "path",
  flaxStringType,
  _DeviceFileSource_path,
);
const _flaxBinding375 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _DeviceFileSource_toString,
);
const _flaxBinding376 = FlaxObjectBinding(
  "flax.audio/audio#type:DeviceFileSource",
  [_flaxBinding374],
  {
    "toString": _flaxBinding375,
    "@super:setOnPlayer": _flaxBinding113,
    "@super:toString": _flaxBinding114,
    "@super:get:path": _flaxBinding115,
    "@super:get:mimeType": _flaxBinding116,
  },
  constructors: {"": _flaxBinding117, "@implementation": _flaxBinding117},
  create: _createDeviceFileSource,
  matches: _isDeviceFileSource,
  setters: [],
  supertypes: ["flax.audio/audio#type:Source", "dart:core::Object"],
  parent: _flaxBinding110,
  proxy: FlaxProxyBinding([
    _flaxBinding118,
    _flaxBinding119,
    _flaxBinding120,
    _flaxBinding121,
  ]),
);
const _flaxBinding377 = FlaxGetter.plain(
  "getPosition",
  _flaxBinding96,
  _PositionUpdater_getPosition,
);
const _flaxBinding378 = FlaxGetter.plain(
  "positionStream",
  _flaxBinding81,
  _PositionUpdater_positionStream,
);
const _flaxBinding379 = FlaxInstanceMethod.shared(
  _flaxBinding4,
  _PositionUpdater_update,
);
const _flaxBinding380 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _PositionUpdater_start,
);
const _flaxBinding381 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _PositionUpdater_stop,
);
const _flaxBinding382 = FlaxInstanceMethod.shared(
  _flaxBinding4,
  _PositionUpdater_stopAndUpdate,
);
const _flaxBinding383 = FlaxInstanceMethod.shared(
  _flaxBinding4,
  _PositionUpdater_dispose,
);
const _flaxBinding384 = FlaxInstanceMethod.shared(
  _flaxBinding4,
  _FlaxProxyDispatch8_super_call_update,
);
const _flaxBinding385 = FlaxInstanceMethod.shared(
  _flaxBinding4,
  _FlaxProxyDispatch8_super_call_stopAndUpdate,
);
const _flaxBinding386 = FlaxInstanceMethod.shared(
  _flaxBinding97,
  _FlaxProxyDispatch8_super_get_getPosition,
);
const _flaxBinding387 = FlaxInstanceMethod.shared(
  _flaxBinding82,
  _FlaxProxyDispatch8_super_get_positionStream,
);
const _flaxBinding388 = <FlaxParameter>[
  FlaxParameter.required("getPosition", _flaxBinding96),
];
const _flaxBinding389 = FlaxProxyMember(
  "update",
  0,
  _flaxBinding4,
  hasSuper: true,
);
const _flaxBinding390 = FlaxProxyMember("start", 0, flaxVoidCall);
const _flaxBinding391 = FlaxProxyMember("stop", 0, flaxVoidCall);
const _flaxBinding392 = FlaxProxyMember(
  "stopAndUpdate",
  0,
  _flaxBinding4,
  hasSuper: true,
);
const _flaxBinding393 = FlaxProxyMember(
  "getPosition",
  1,
  _flaxBinding97,
  hasSuper: true,
);
const _flaxBinding394 = FlaxProxyMember(
  "positionStream",
  1,
  _flaxBinding82,
  hasSuper: true,
);
const _flaxBinding395 = FlaxObjectBinding(
  "flax.audio/audio#type:PositionUpdater",
  [_flaxBinding377, _flaxBinding378],
  {
    "update": _flaxBinding379,
    "start": _flaxBinding380,
    "stop": _flaxBinding381,
    "stopAndUpdate": _flaxBinding382,
    "dispose": _flaxBinding383,
    "@super:update": _flaxBinding384,
    "@super:stopAndUpdate": _flaxBinding385,
    "@super:dispose": _flaxBinding289,
    "@super:get:getPosition": _flaxBinding386,
    "@super:get:positionStream": _flaxBinding387,
  },
  constructors: {"@implementation": _flaxBinding388},
  create: _createPositionUpdater,
  matches: _isPositionUpdater,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding389,
    _flaxBinding390,
    _flaxBinding391,
    _flaxBinding392,
    _flaxBinding315,
    _flaxBinding393,
    _flaxBinding394,
  ]),
);
const _flaxBinding396 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _FlaxProxyDispatch9_super_call_start,
);
const _flaxBinding397 = FlaxInstanceMethod.shared(
  flaxVoidCall,
  _FlaxProxyDispatch9_super_call_stop,
);
const _flaxBinding398 = FlaxProxyMember(
  "start",
  0,
  flaxVoidCall,
  hasSuper: true,
);
const _flaxBinding399 = FlaxProxyMember(
  "stop",
  0,
  flaxVoidCall,
  hasSuper: true,
);
const _flaxBinding400 = FlaxObjectBinding(
  "flax.audio/audio#type:FramePositionUpdater",
  [],
  {
    "@super:update": _flaxBinding384,
    "@super:start": _flaxBinding396,
    "@super:stop": _flaxBinding397,
    "@super:stopAndUpdate": _flaxBinding385,
    "@super:dispose": _flaxBinding289,
    "@super:get:getPosition": _flaxBinding386,
    "@super:get:positionStream": _flaxBinding387,
  },
  constructors: {"": _flaxBinding388, "@implementation": _flaxBinding388},
  create: _createFramePositionUpdater,
  matches: _isFramePositionUpdater,
  setters: [],
  supertypes: ["flax.audio/audio#type:PositionUpdater", "dart:core::Object"],
  parent: _flaxBinding395,
  proxy: FlaxProxyBinding([
    _flaxBinding389,
    _flaxBinding398,
    _flaxBinding399,
    _flaxBinding392,
    _flaxBinding315,
    _flaxBinding393,
    _flaxBinding394,
  ]),
);
const _flaxBinding401 = FlaxGetter.plain(
  "eventType",
  _flaxBinding98,
  _GlobalAudioEvent_eventType,
);
const _flaxBinding402 = FlaxGetter.plain(
  "logMessage",
  flaxNullableStringType,
  _GlobalAudioEvent_logMessage,
);
const _flaxBinding403 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _GlobalAudioEvent_toString,
);
const _flaxBinding404 = <FlaxParameter>[
  FlaxParameter.required("eventType", _flaxBinding98),
  FlaxParameter("logMessage", flaxNullableStringType, required: false),
];
const _flaxBinding405 = FlaxProxyMember(
  "eventType",
  1,
  _flaxBinding99,
  hasSuper: true,
);
const _flaxBinding406 = FlaxObjectBinding(
  "flax.audio/audio#type:GlobalAudioEvent",
  [_flaxBinding401, _flaxBinding402],
  {
    "toString": _flaxBinding403,
    "@super:toString": _flaxBinding114,
    "@super:get:eventType": FlaxInstanceMethod.shared(
      _flaxBinding99,
      _GlobalAudioEvent_super_get_eventType,
    ),
    "@super:get:logMessage": _flaxBinding234,
  },
  constructors: {"": _flaxBinding404, "@implementation": _flaxBinding404},
  create: _createGlobalAudioEvent,
  matches: _isGlobalAudioEvent,
  setters: [],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([_flaxBinding119, _flaxBinding405, _flaxBinding238]),
);
const _flaxBinding407 = FlaxGetter.plain(
  "eventStream",
  _flaxBinding101,
  _GlobalAudioScope_eventStream,
);
const _flaxBinding408 = FlaxGetter.plain(
  "onLog",
  _flaxBinding85,
  _GlobalAudioScope_onLog,
);
const _flaxBinding409 = FlaxSetter(
  "eventStream",
  _flaxBinding101,
  _GlobalAudioScope_set_eventStream,
);
const _flaxBinding410 = FlaxInstanceMethod.shared(
  _flaxBinding4,
  _GlobalAudioScope_ensureInitialized,
);
const _flaxBinding411 = FlaxInstanceMethod.shared(
  _flaxBinding55,
  _GlobalAudioScope_setAudioContext,
);
const _flaxBinding412 = FlaxProxyMember(
  "ensureInitialized",
  0,
  _flaxBinding4,
  hasSuper: true,
);
const _flaxBinding413 = FlaxProxyMember(
  "eventStream",
  1,
  _flaxBinding102,
  hasSuper: true,
);
const _flaxBinding414 = FlaxProxyMember(
  "eventStream",
  2,
  _flaxBinding103,
  hasSuper: true,
);
const _flaxBinding415 = FlaxObjectBinding(
  "flax.audio/audio#type:GlobalAudioScope",
  [_flaxBinding407, _flaxBinding408],
  {
    "ensureInitialized": _flaxBinding410,
    "setAudioContext": _flaxBinding411,
    "@super:ensureInitialized": FlaxInstanceMethod.shared(
      _flaxBinding4,
      _GlobalAudioScope_super_ensureInitialized,
    ),
    "@super:setAudioContext": _flaxBinding288,
    "@super:get:eventStream": FlaxInstanceMethod.shared(
      _flaxBinding102,
      _GlobalAudioScope_super_get_eventStream,
    ),
    "@super:get:onLog": _flaxBinding290,
    "@super:set:eventStream": FlaxInstanceMethod.plain(
      [FlaxParameter.required("value", _flaxBinding101)],
      flaxVoidType,
      _GlobalAudioScope_super_set_eventStream,
    ),
  },
  constructors: {"": _flaxBinding107, "@implementation": _flaxBinding107},
  create: _createGlobalAudioScope,
  matches: _isGlobalAudioScope,
  setters: [_flaxBinding409],
  supertypes: ["dart:core::Object"],
  proxy: FlaxProxyBinding([
    _flaxBinding412,
    _flaxBinding294,
    _flaxBinding413,
    _flaxBinding332,
    _flaxBinding414,
  ]),
);
const _flaxBinding416 = FlaxGetter.plain(
  "interval",
  flaxDurationType,
  _TimerPositionUpdater_interval,
);
const _flaxBinding417 = <FlaxParameter>[
  FlaxParameter.required("getPosition", _flaxBinding96),
  FlaxParameter.required("interval", flaxDurationType),
];
const _flaxBinding418 = FlaxProxyMember(
  "interval",
  1,
  _flaxBinding104,
  hasSuper: true,
);
const _flaxBinding419 = FlaxObjectBinding(
  "flax.audio/audio#type:TimerPositionUpdater",
  [_flaxBinding416],
  {
    "@super:update": _flaxBinding384,
    "@super:start": _flaxBinding396,
    "@super:stop": _flaxBinding397,
    "@super:stopAndUpdate": _flaxBinding385,
    "@super:dispose": _flaxBinding289,
    "@super:get:interval": FlaxInstanceMethod.shared(
      _flaxBinding104,
      _TimerPositionUpdater_super_get_interval,
    ),
    "@super:get:getPosition": _flaxBinding386,
    "@super:get:positionStream": _flaxBinding387,
  },
  constructors: {"": _flaxBinding417, "@implementation": _flaxBinding417},
  create: _createTimerPositionUpdater,
  matches: _isTimerPositionUpdater,
  setters: [],
  supertypes: ["flax.audio/audio#type:PositionUpdater", "dart:core::Object"],
  parent: _flaxBinding395,
  proxy: FlaxProxyBinding([
    _flaxBinding389,
    _flaxBinding398,
    _flaxBinding399,
    _flaxBinding392,
    _flaxBinding315,
    _flaxBinding418,
    _flaxBinding393,
    _flaxBinding394,
  ]),
);
const _flaxBinding420 = FlaxGetter.plain("url", flaxStringType, _UrlSource_url);
const _flaxBinding421 = FlaxInstanceMethod.shared(
  flaxStringCall,
  _UrlSource_toString,
);
const _flaxBinding422 = FlaxProxyMember(
  "url",
  1,
  flaxStringCall,
  hasSuper: true,
);
const _flaxBinding423 = FlaxObjectBinding(
  "flax.audio/audio#type:UrlSource",
  [_flaxBinding420],
  {
    "toString": _flaxBinding421,
    "@super:setOnPlayer": _flaxBinding113,
    "@super:toString": _flaxBinding114,
    "@super:get:url": FlaxInstanceMethod.shared(
      flaxStringCall,
      _UrlSource_super_get_url,
    ),
    "@super:get:mimeType": _flaxBinding116,
  },
  constructors: {"": _flaxBinding279, "@implementation": _flaxBinding279},
  create: _createUrlSource,
  matches: _isUrlSource,
  setters: [],
  supertypes: ["flax.audio/audio#type:Source", "dart:core::Object"],
  parent: _flaxBinding110,
  proxy: FlaxProxyBinding([
    _flaxBinding118,
    _flaxBinding119,
    _flaxBinding422,
    _flaxBinding121,
  ]),
);
const _flaxBinding424 = FlaxTypeRef(
  "enum",
  id: "flax.audio/audio#type:AudioLogLevel",
);
const _flaxBinding425 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:StackTrace",
  nullable: true,
);
const _flaxBinding426 = FlaxTypeRef(
  "object",
  id: "flax.audio/audio#type:GlobalAudioScope",
);
const _flaxBinding427 = FlaxTypeRef(
  "object",
  id: "flax.audio/audio#type:AudioCache",
  nullable: true,
);
const _flaxBinding428 = FlaxTypeRef(
  "object",
  id: "flax.audio/audio#type:AudioPool",
);
const _flaxBinding429 = FlaxTypeRef(
  "future",
  item: _flaxBinding428,
  future: FlaxFutureBinding(
    "object:flax.audio/audio#type:AudioPool",
    _future7Adapt,
  ),
);
