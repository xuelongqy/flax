// GENERATED CODE. Selected public API subset; do not edit.
// Regenerate with dart run melos run bindings:generate.
// ignore_for_file: type=lint, unused_import, unnecessary_cast, deprecated_member_use, invalid_use_of_protected_member, invalid_use_of_visible_for_overriding_member, invalid_use_of_visible_for_testing_member
import 'dart:core';

import 'package:vector_math/vector_math_64.dart' as api;
import 'package:flax/bindings.dart';

import 'dart:convert' as api1;
import 'dart:typed_data' as api2;
import 'dart:io' as api3;
import 'dart:core' as api4;
import 'dart:async' as api5;
import 'dart:developer' as api6;
import 'dart:isolate' as api7;

// ignore: unused_element
const _flaxOmitted = Object();
const sdk_dependenciesBindings = FlaxBindingModule(
  'sdk_dependencies',
  [
    FlaxEnumBinding(
      "flax.core/sdk_dependencies#type:HttpClientResponseCompressionState",
      {
        "notCompressed": api3.HttpClientResponseCompressionState.notCompressed,
        "decompressed": api3.HttpClientResponseCompressionState.decompressed,
        "compressed": api3.HttpClientResponseCompressionState.compressed,
      },
      supertypes: ["flax.core/flutter#type:Enum", "dart:core::Object"],
    ),
    _flaxBinding22,
    _flaxBinding46,
    _flaxBinding92,
    _flaxBinding13,
    _flaxBinding146,
    _flaxBinding147,
    _flaxBinding148,
    _flaxBinding158,
    _flaxBinding72,
    _flaxBinding160,
    _flaxBinding162,
    _flaxBinding215,
    _flaxBinding262,
    _flaxBinding365,
    _flaxBinding370,
    _flaxBinding403,
    _flaxBinding417,
    _flaxBinding420,
    _flaxBinding423,
    _flaxBinding437,
    _flaxBinding531,
    _flaxBinding622,
    _flaxBinding638,
    _flaxBinding703,
    _flaxBinding742,
    _flaxBinding749,
    _flaxBinding753,
    _flaxBinding849,
    _flaxBinding868,
    _flaxBinding871,
    _flaxBinding844,
    _flaxBinding872,
    _flaxBinding882,
    _flaxBinding888,
    _flaxBinding1057,
    _flaxBinding1530,
    _flaxBinding2798,
    _flaxBinding2806,
  ],
  functions: [
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#read:Directory.current",
      [],
      _flaxBinding53,
      _Directory_static_get_current,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#read:Directory.systemTemp",
      [],
      _flaxBinding53,
      _Directory_static_get_systemTemp,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:Directory.current%3D",
      [FlaxParameter("value", _flaxBinding110, required: true)],
      _flaxBinding70,
      _Directory_static_set_current,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:Encoding.getByName",
      [FlaxParameter("name", _flaxBinding29, required: true)],
      _flaxBinding2807,
      _Encoding_getByName,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:FileStat.statSync",
      [FlaxParameter("path", _flaxBinding0, required: true)],
      _flaxBinding64,
      _FileStat_statSync,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:FileStat.stat",
      [FlaxParameter("path", _flaxBinding0, required: true)],
      _flaxBinding65,
      _FileStat_stat,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:FileSystemEntity.identical",
      [
        FlaxParameter("path1", _flaxBinding0, required: true),
        FlaxParameter("path2", _flaxBinding0, required: true),
      ],
      _flaxBinding55,
      _FileSystemEntity_identical,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:FileSystemEntity.identicalSync",
      [
        FlaxParameter("path1", _flaxBinding0, required: true),
        FlaxParameter("path2", _flaxBinding0, required: true),
      ],
      _flaxBinding20,
      _FileSystemEntity_identicalSync,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:FileSystemEntity.type",
      [
        FlaxParameter("path", _flaxBinding0, required: true),
        FlaxParameter(
          "followLinks",
          _flaxBinding20,
          required: false,
          defaultValue: true,
        ),
      ],
      _flaxBinding2808,
      _FileSystemEntity_type,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:FileSystemEntity.typeSync",
      [
        FlaxParameter("path", _flaxBinding0, required: true),
        FlaxParameter(
          "followLinks",
          _flaxBinding20,
          required: false,
          defaultValue: true,
        ),
      ],
      _flaxBinding152,
      _FileSystemEntity_typeSync,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:FileSystemEntity.isLink",
      [FlaxParameter("path", _flaxBinding0, required: true)],
      _flaxBinding55,
      _FileSystemEntity_isLink,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:FileSystemEntity.isFile",
      [FlaxParameter("path", _flaxBinding0, required: true)],
      _flaxBinding55,
      _FileSystemEntity_isFile,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:FileSystemEntity.isDirectory",
      [FlaxParameter("path", _flaxBinding0, required: true)],
      _flaxBinding55,
      _FileSystemEntity_isDirectory,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:FileSystemEntity.isLinkSync",
      [FlaxParameter("path", _flaxBinding0, required: true)],
      _flaxBinding20,
      _FileSystemEntity_isLinkSync,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:FileSystemEntity.isFileSync",
      [FlaxParameter("path", _flaxBinding0, required: true)],
      _flaxBinding20,
      _FileSystemEntity_isFileSync,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:FileSystemEntity.isDirectorySync",
      [FlaxParameter("path", _flaxBinding0, required: true)],
      _flaxBinding20,
      _FileSystemEntity_isDirectorySync,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:FileSystemEntity.parentOf",
      [FlaxParameter("path", _flaxBinding0, required: true)],
      _flaxBinding0,
      _FileSystemEntity_parentOf,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#read:FileSystemEntity.isWatchSupported",
      [],
      _flaxBinding20,
      _FileSystemEntity_static_get_isWatchSupported,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:Flow.begin",
      [FlaxParameter("id", _flaxBinding27, required: false)],
      _flaxBinding2809,
      _Flow_begin,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:Flow.step",
      [FlaxParameter("id", _flaxBinding2, required: true)],
      _flaxBinding2809,
      _Flow_step,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:Flow.end",
      [FlaxParameter("id", _flaxBinding2, required: true)],
      _flaxBinding2809,
      _Flow_end,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:HttpClient.findProxyFromEnvironment",
      [
        FlaxParameter("url", _flaxBinding48, required: true),
        FlaxParameter("environment", _flaxBinding2810, required: false),
      ],
      _flaxBinding0,
      _HttpClient_findProxyFromEnvironment,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#read:HttpClient.enableTimelineLogging",
      [],
      _flaxBinding20,
      _HttpClient_static_get_enableTimelineLogging,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:HttpClient.enableTimelineLogging%3D",
      [FlaxParameter("value", _flaxBinding20, required: true)],
      _flaxBinding70,
      _HttpClient_static_set_enableTimelineLogging,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:InternetAddress.lookup",
      [
        FlaxParameter("host", _flaxBinding0, required: true),
        FlaxParameter(
          "type",
          _flaxBinding404,
          required: false,
          omitWhenAbsent: true,
        ),
      ],
      _flaxBinding2813,
      _InternetAddress_lookup,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:InternetAddress.tryParse",
      [FlaxParameter("address", _flaxBinding0, required: true)],
      _flaxBinding2814,
      _InternetAddress_tryParse,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#read:InternetAddress.loopbackIPv4",
      [],
      _flaxBinding366,
      _InternetAddress_static_get_loopbackIPv4,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#read:InternetAddress.loopbackIPv6",
      [],
      _flaxBinding366,
      _InternetAddress_static_get_loopbackIPv6,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#read:InternetAddress.anyIPv4",
      [],
      _flaxBinding366,
      _InternetAddress_static_get_anyIPv4,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#read:InternetAddress.anyIPv6",
      [],
      _flaxBinding366,
      _InternetAddress_static_get_anyIPv6,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:Matrix2.solve",
      [
        FlaxParameter("A", _flaxBinding456, required: true),
        FlaxParameter("x", _flaxBinding441, required: true),
        FlaxParameter("b", _flaxBinding441, required: true),
      ],
      _flaxBinding70,
      _Matrix2_solve,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:Matrix3.solve2",
      [
        FlaxParameter("A", _flaxBinding551, required: true),
        FlaxParameter("x", _flaxBinding441, required: true),
        FlaxParameter("b", _flaxBinding441, required: true),
      ],
      _flaxBinding70,
      _Matrix3_solve2,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:Matrix3.solve",
      [
        FlaxParameter("A", _flaxBinding551, required: true),
        FlaxParameter("x", _flaxBinding534, required: true),
        FlaxParameter("b", _flaxBinding534, required: true),
      ],
      _flaxBinding70,
      _Matrix3_solve,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#read:RawSocketOption.levelSocket",
      [],
      _flaxBinding2,
      _RawSocketOption_static_get_levelSocket,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#read:RawSocketOption.levelIPv4",
      [],
      _flaxBinding2,
      _RawSocketOption_static_get_levelIPv4,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#read:RawSocketOption.IPv4MulticastInterface",
      [],
      _flaxBinding2,
      _RawSocketOption_static_get_IPv4MulticastInterface,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#read:RawSocketOption.levelIPv6",
      [],
      _flaxBinding2,
      _RawSocketOption_static_get_levelIPv6,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#read:RawSocketOption.IPv6MulticastInterface",
      [],
      _flaxBinding2,
      _RawSocketOption_static_get_IPv6MulticastInterface,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#read:RawSocketOption.levelTcp",
      [],
      _flaxBinding2,
      _RawSocketOption_static_get_levelTcp,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#read:RawSocketOption.levelUdp",
      [],
      _flaxBinding2,
      _RawSocketOption_static_get_levelUdp,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:SecureSocket.connect",
      [
        FlaxParameter("host", _flaxBinding110, required: true),
        FlaxParameter("port", _flaxBinding2, required: true),
        FlaxParameter("context", _flaxBinding213, required: false),
        FlaxParameter("keyLog", _flaxBinding2816, required: false),
        FlaxParameter("onBadCertificate", _flaxBinding2818, required: false),
        FlaxParameter("supportedProtocols", _flaxBinding401, required: false),
        FlaxParameter("timeout", _flaxBinding165, required: false),
      ],
      _flaxBinding2820,
      _SecureSocket_connect,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:SecureSocket.secure",
      [
        FlaxParameter("socket", _flaxBinding289, required: true),
        FlaxParameter("context", _flaxBinding213, required: false),
        FlaxParameter(
          "host",
          _flaxBinding110,
          required: false,
          omitWhenAbsent: true,
        ),
        FlaxParameter("keyLog", _flaxBinding2816, required: false),
        FlaxParameter("onBadCertificate", _flaxBinding2818, required: false),
        FlaxParameter("supportedProtocols", _flaxBinding401, required: false),
      ],
      _flaxBinding2820,
      _SecureSocket_secure,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:SecureSocket.secureServer",
      [
        FlaxParameter("socket", _flaxBinding289, required: true),
        FlaxParameter("context", _flaxBinding213, required: true),
        FlaxParameter("bufferedData", _flaxBinding2821, required: false),
        FlaxParameter(
          "requestClientCertificate",
          _flaxBinding20,
          required: false,
          defaultValue: false,
        ),
        FlaxParameter(
          "requireClientCertificate",
          _flaxBinding20,
          required: false,
          defaultValue: false,
        ),
        FlaxParameter("supportedProtocols", _flaxBinding401, required: false),
      ],
      _flaxBinding2820,
      _SecureSocket_secureServer,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#read:SecurityContext.defaultContext",
      [],
      _flaxBinding2822,
      _SecurityContext_static_get_defaultContext,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#read:SecurityContext.alpnSupported",
      [],
      _flaxBinding20,
      _SecurityContext_static_get_alpnSupported,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:Socket.connect",
      [
        FlaxParameter("host", _flaxBinding110, required: true),
        FlaxParameter("port", _flaxBinding2, required: true),
        FlaxParameter(
          "sourceAddress",
          _flaxBinding110,
          required: false,
          omitWhenAbsent: true,
        ),
        FlaxParameter(
          "sourcePort",
          _flaxBinding2,
          required: false,
          defaultValue: 0,
        ),
        FlaxParameter("timeout", _flaxBinding165, required: false),
      ],
      _flaxBinding290,
      _Socket_connect,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:Vector2.min",
      [
        FlaxParameter("a", _flaxBinding441, required: true),
        FlaxParameter("b", _flaxBinding441, required: true),
        FlaxParameter("result", _flaxBinding441, required: true),
      ],
      _flaxBinding70,
      _Vector2_min,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:Vector2.max",
      [
        FlaxParameter("a", _flaxBinding441, required: true),
        FlaxParameter("b", _flaxBinding441, required: true),
        FlaxParameter("result", _flaxBinding441, required: true),
      ],
      _flaxBinding70,
      _Vector2_max,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:Vector2.mix",
      [
        FlaxParameter("min", _flaxBinding441, required: true),
        FlaxParameter("max", _flaxBinding441, required: true),
        FlaxParameter("a", _flaxBinding448, required: true),
        FlaxParameter("result", _flaxBinding441, required: true),
      ],
      _flaxBinding70,
      _Vector2_mix,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:Vector3.min",
      [
        FlaxParameter("a", _flaxBinding534, required: true),
        FlaxParameter("b", _flaxBinding534, required: true),
        FlaxParameter("result", _flaxBinding534, required: true),
      ],
      _flaxBinding70,
      _Vector3_min,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:Vector3.max",
      [
        FlaxParameter("a", _flaxBinding534, required: true),
        FlaxParameter("b", _flaxBinding534, required: true),
        FlaxParameter("result", _flaxBinding534, required: true),
      ],
      _flaxBinding70,
      _Vector3_max,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:Vector3.mix",
      [
        FlaxParameter("min", _flaxBinding534, required: true),
        FlaxParameter("max", _flaxBinding534, required: true),
        FlaxParameter("a", _flaxBinding448, required: true),
        FlaxParameter("result", _flaxBinding534, required: true),
      ],
      _flaxBinding70,
      _Vector3_mix,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:Vector4.min",
      [
        FlaxParameter("a", _flaxBinding906, required: true),
        FlaxParameter("b", _flaxBinding906, required: true),
        FlaxParameter("result", _flaxBinding906, required: true),
      ],
      _flaxBinding70,
      _Vector4_min,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:Vector4.max",
      [
        FlaxParameter("a", _flaxBinding906, required: true),
        FlaxParameter("b", _flaxBinding906, required: true),
        FlaxParameter("result", _flaxBinding906, required: true),
      ],
      _flaxBinding70,
      _Vector4_max,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:Vector4.mix",
      [
        FlaxParameter("min", _flaxBinding906, required: true),
        FlaxParameter("max", _flaxBinding906, required: true),
        FlaxParameter("a", _flaxBinding448, required: true),
        FlaxParameter("result", _flaxBinding906, required: true),
      ],
      _flaxBinding70,
      _Vector4_mix,
    ),
  ],
  constants: [
    FlaxConstantGroup(_flaxBinding734, {
      "flax.core/sdk_dependencies#read:FileLock.shared": api3.FileLock.shared,
      "flax.core/sdk_dependencies#read:FileLock.exclusive":
          api3.FileLock.exclusive,
      "flax.core/sdk_dependencies#read:FileLock.blockingShared":
          api3.FileLock.blockingShared,
      "flax.core/sdk_dependencies#read:FileLock.blockingExclusive":
          api3.FileLock.blockingExclusive,
    }),
    FlaxConstantGroup(_flaxBinding119, {
      "flax.core/sdk_dependencies#read:FileMode.read": api3.FileMode.read,
      "flax.core/sdk_dependencies#read:FileMode.write": api3.FileMode.write,
      "flax.core/sdk_dependencies#read:FileMode.append": api3.FileMode.append,
      "flax.core/sdk_dependencies#read:FileMode.writeOnly":
          api3.FileMode.writeOnly,
      "flax.core/sdk_dependencies#read:FileMode.writeOnlyAppend":
          api3.FileMode.writeOnlyAppend,
    }),
    FlaxConstantGroup(_flaxBinding152, {
      "flax.core/sdk_dependencies#read:FileSystemEntityType.file":
          api3.FileSystemEntityType.file,
      "flax.core/sdk_dependencies#read:FileSystemEntityType.directory":
          api3.FileSystemEntityType.directory,
      "flax.core/sdk_dependencies#read:FileSystemEntityType.link":
          api3.FileSystemEntityType.link,
      "flax.core/sdk_dependencies#read:FileSystemEntityType.unixDomainSock":
          api3.FileSystemEntityType.unixDomainSock,
      "flax.core/sdk_dependencies#read:FileSystemEntityType.pipe":
          api3.FileSystemEntityType.pipe,
      "flax.core/sdk_dependencies#read:FileSystemEntityType.notFound":
          api3.FileSystemEntityType.notFound,
      "flax.core/sdk_dependencies#read:FileSystemEntityType.NOT_FOUND":
          api3.FileSystemEntityType.NOT_FOUND,
    }),
    FlaxConstantGroup(_flaxBinding2, {
      "flax.core/sdk_dependencies#read:HttpClient.defaultHttpPort":
          api3.HttpClient.defaultHttpPort,
      "flax.core/sdk_dependencies#read:HttpClient.defaultHttpsPort":
          api3.HttpClient.defaultHttpsPort,
    }),
    FlaxConstantGroup(_flaxBinding0, {
      "flax.core/sdk_dependencies#read:HttpHeaders.acceptHeader":
          api3.HttpHeaders.acceptHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.acceptCharsetHeader":
          api3.HttpHeaders.acceptCharsetHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.acceptEncodingHeader":
          api3.HttpHeaders.acceptEncodingHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.acceptLanguageHeader":
          api3.HttpHeaders.acceptLanguageHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.acceptRangesHeader":
          api3.HttpHeaders.acceptRangesHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.accessControlAllowCredentialsHeader":
          api3.HttpHeaders.accessControlAllowCredentialsHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.accessControlAllowHeadersHeader":
          api3.HttpHeaders.accessControlAllowHeadersHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.accessControlAllowMethodsHeader":
          api3.HttpHeaders.accessControlAllowMethodsHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.accessControlAllowOriginHeader":
          api3.HttpHeaders.accessControlAllowOriginHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.accessControlExposeHeadersHeader":
          api3.HttpHeaders.accessControlExposeHeadersHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.accessControlMaxAgeHeader":
          api3.HttpHeaders.accessControlMaxAgeHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.accessControlRequestHeadersHeader":
          api3.HttpHeaders.accessControlRequestHeadersHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.accessControlRequestMethodHeader":
          api3.HttpHeaders.accessControlRequestMethodHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.ageHeader":
          api3.HttpHeaders.ageHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.allowHeader":
          api3.HttpHeaders.allowHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.authorizationHeader":
          api3.HttpHeaders.authorizationHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.cacheControlHeader":
          api3.HttpHeaders.cacheControlHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.connectionHeader":
          api3.HttpHeaders.connectionHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.contentEncodingHeader":
          api3.HttpHeaders.contentEncodingHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.contentLanguageHeader":
          api3.HttpHeaders.contentLanguageHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.contentLengthHeader":
          api3.HttpHeaders.contentLengthHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.contentLocationHeader":
          api3.HttpHeaders.contentLocationHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.contentMD5Header":
          api3.HttpHeaders.contentMD5Header,
      "flax.core/sdk_dependencies#read:HttpHeaders.contentRangeHeader":
          api3.HttpHeaders.contentRangeHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.contentTypeHeader":
          api3.HttpHeaders.contentTypeHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.dateHeader":
          api3.HttpHeaders.dateHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.etagHeader":
          api3.HttpHeaders.etagHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.expectHeader":
          api3.HttpHeaders.expectHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.expiresHeader":
          api3.HttpHeaders.expiresHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.fromHeader":
          api3.HttpHeaders.fromHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.hostHeader":
          api3.HttpHeaders.hostHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.ifMatchHeader":
          api3.HttpHeaders.ifMatchHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.ifModifiedSinceHeader":
          api3.HttpHeaders.ifModifiedSinceHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.ifNoneMatchHeader":
          api3.HttpHeaders.ifNoneMatchHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.ifRangeHeader":
          api3.HttpHeaders.ifRangeHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.ifUnmodifiedSinceHeader":
          api3.HttpHeaders.ifUnmodifiedSinceHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.lastModifiedHeader":
          api3.HttpHeaders.lastModifiedHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.locationHeader":
          api3.HttpHeaders.locationHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.maxForwardsHeader":
          api3.HttpHeaders.maxForwardsHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.pragmaHeader":
          api3.HttpHeaders.pragmaHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.proxyAuthenticateHeader":
          api3.HttpHeaders.proxyAuthenticateHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.proxyAuthorizationHeader":
          api3.HttpHeaders.proxyAuthorizationHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.rangeHeader":
          api3.HttpHeaders.rangeHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.refererHeader":
          api3.HttpHeaders.refererHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.retryAfterHeader":
          api3.HttpHeaders.retryAfterHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.serverHeader":
          api3.HttpHeaders.serverHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.teHeader":
          api3.HttpHeaders.teHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.trailerHeader":
          api3.HttpHeaders.trailerHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.transferEncodingHeader":
          api3.HttpHeaders.transferEncodingHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.upgradeHeader":
          api3.HttpHeaders.upgradeHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.userAgentHeader":
          api3.HttpHeaders.userAgentHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.varyHeader":
          api3.HttpHeaders.varyHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.viaHeader":
          api3.HttpHeaders.viaHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.warningHeader":
          api3.HttpHeaders.warningHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.wwwAuthenticateHeader":
          api3.HttpHeaders.wwwAuthenticateHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.contentDisposition":
          api3.HttpHeaders.contentDisposition,
      "flax.core/sdk_dependencies#read:HttpHeaders.cookieHeader":
          api3.HttpHeaders.cookieHeader,
      "flax.core/sdk_dependencies#read:HttpHeaders.setCookieHeader":
          api3.HttpHeaders.setCookieHeader,
    }),
    FlaxConstantGroup(_flaxBinding135, {
      "flax.core/sdk_dependencies#read:HttpHeaders.generalHeaders":
          api3.HttpHeaders.generalHeaders,
      "flax.core/sdk_dependencies#read:HttpHeaders.entityHeaders":
          api3.HttpHeaders.entityHeaders,
      "flax.core/sdk_dependencies#read:HttpHeaders.responseHeaders":
          api3.HttpHeaders.responseHeaders,
      "flax.core/sdk_dependencies#read:HttpHeaders.requestHeaders":
          api3.HttpHeaders.requestHeaders,
    }),
    FlaxConstantGroup(_flaxBinding404, {
      "flax.core/sdk_dependencies#read:InternetAddressType.IPv4":
          api3.InternetAddressType.IPv4,
      "flax.core/sdk_dependencies#read:InternetAddressType.IPv6":
          api3.InternetAddressType.IPv6,
      "flax.core/sdk_dependencies#read:InternetAddressType.unix":
          api3.InternetAddressType.unix,
      "flax.core/sdk_dependencies#read:InternetAddressType.any":
          api3.InternetAddressType.any,
    }),
    FlaxConstantGroup(_flaxBinding772, {
      "flax.core/sdk_dependencies#read:SocketOption.tcpNoDelay":
          api3.SocketOption.tcpNoDelay,
    }),
  ],
  moduleId: "flax.core/sdk_dependencies",
  dependencyModules: ["flax.core/flutter", "flax.core/sdk_rendering"],
  uiProtocol: 24,
  requiredCapabilities: const <String>[
    "engine-type-handles",
    "generic-call-types",
    "generic-member-views",
    "inherited-binding-members",
    "instance-checks",
    "lazy-js-iterables",
    "native-async-objects",
    "native-core-inputs",
    "native-functions",
    "native-navigation-objects",
    "native-widget-proxies",
    "shared-buffers",
    "shared-static-readers",
    "shared-uint8",
  ],
  stateVariants: [],
  dartTypes: [
    FlaxDartClassTemplate(
      "flax.core/sdk_dependencies#type:AsciiCodec",
      api1.AsciiCodec,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dependencies#type:Cookie",
      api3.Cookie,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dependencies#type:Directory",
      api3.Directory,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dependencies#type:Encoding",
      api1.Encoding,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dependencies#type:File",
      api3.File,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dependencies#type:FileLock",
      api3.FileLock,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dependencies#type:FileMode",
      api3.FileMode,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dependencies#type:FileStat",
      api3.FileStat,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dependencies#type:FileSystemEntity",
      api3.FileSystemEntity,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dependencies#type:FileSystemEntityType",
      api3.FileSystemEntityType,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dependencies#type:Flow",
      api6.Flow,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dependencies#type:HttpClient",
      api3.HttpClient,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dependencies#type:HttpClientRequest",
      api3.HttpClientRequest,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dependencies#type:HttpClientResponse",
      api3.HttpClientResponse,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dependencies#type:HttpClientResponseCompressionState",
      api3.HttpClientResponseCompressionState,
      "enum",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dependencies#type:HttpConnectionInfo",
      api3.HttpConnectionInfo,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dependencies#type:HttpHeaders",
      api3.HttpHeaders,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dependencies#type:InternetAddress",
      api3.InternetAddress,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dependencies#type:InternetAddressType",
      api3.InternetAddressType,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dependencies#type:Latin1Codec",
      api1.Latin1Codec,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dependencies#type:Link",
      api3.Link,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dependencies#type:Matrix2",
      api.Matrix2,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dependencies#type:Matrix3",
      api.Matrix3,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dependencies#type:Quad",
      api.Quad,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dependencies#type:Quaternion",
      api.Quaternion,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dependencies#type:RandomAccessFile",
      api3.RandomAccessFile,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dependencies#type:RawSocketOption",
      api3.RawSocketOption,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dependencies#type:RedirectInfo",
      api3.RedirectInfo,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dependencies#type:SecureSocket",
      api3.SecureSocket,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dependencies#type:SecurityContext",
      api3.SecurityContext,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dependencies#type:SendPort",
      api7.SendPort,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dependencies#type:Socket",
      api3.Socket,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dependencies#type:SocketOption",
      api3.SocketOption,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dependencies#type:Stopwatch",
      api4.Stopwatch,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dependencies#type:Utf8Codec",
      api1.Utf8Codec,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dependencies#type:Vector2",
      api.Vector2,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dependencies#type:Vector3",
      api.Vector3,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dependencies#type:Vector4",
      api.Vector4,
      "object",
    ),
    FlaxDartClassTemplate(
      "flax.core/sdk_dependencies#type:X509Certificate",
      api3.X509Certificate,
      "object",
    ),
  ],
  dartShapes: _flaxDartShapes,
);
bool _isAsciiCodec(Object value) => value is api1.AsciiCodec;
Object? _AsciiCodec_encode(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.AsciiCodec).encode(values["source"] as String);
}

Object? _AsciiCodec_decode(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.AsciiCodec).decode(
    values["bytes"] as List<int>,
    allowInvalid: values["allowInvalid"] as bool?,
  );
}

Object _createAsciiCodec(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api1.AsciiCodec(allowInvalid: values["allowInvalid"] as bool);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isCookie(Object value) => value is api3.Cookie;
Object? _Cookie_name(Object value) => (value as api3.Cookie).name;
Object? _Cookie_value(Object value) => (value as api3.Cookie).value;
Object? _Cookie_expires(Object value) => (value as api3.Cookie).expires;
Object? _Cookie_maxAge(Object value) => (value as api3.Cookie).maxAge;
Object? _Cookie_domain(Object value) => (value as api3.Cookie).domain;
Object? _Cookie_path(Object value) => (value as api3.Cookie).path;
Object? _Cookie_secure(Object value) => (value as api3.Cookie).secure;
Object? _Cookie_httpOnly(Object value) => (value as api3.Cookie).httpOnly;
void _Cookie_set_name(Object receiver, Object? value) {
  (receiver as api3.Cookie).name = value as String;
}

void _Cookie_set_value(Object receiver, Object? value) {
  (receiver as api3.Cookie).value = value as String;
}

void _Cookie_set_expires(Object receiver, Object? value) {
  (receiver as api3.Cookie).expires = value as api4.DateTime?;
}

void _Cookie_set_maxAge(Object receiver, Object? value) {
  (receiver as api3.Cookie).maxAge = value as int?;
}

void _Cookie_set_domain(Object receiver, Object? value) {
  (receiver as api3.Cookie).domain = value as String?;
}

void _Cookie_set_path(Object receiver, Object? value) {
  (receiver as api3.Cookie).path = value as String?;
}

void _Cookie_set_secure(Object receiver, Object? value) {
  (receiver as api3.Cookie).secure = value as bool;
}

void _Cookie_set_httpOnly(Object receiver, Object? value) {
  (receiver as api3.Cookie).httpOnly = value as bool;
}

Object? _Cookie_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Cookie).toString();
}

Object _createCookie(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api3.Cookie(values["name"] as String, values["value"] as String);
    case "fromSetCookieValue":
      return api3.Cookie.fromSetCookieValue(values["value"] as String);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isDirectory(Object value) => value is api3.Directory;
Object? _Directory_absolute(Object value) => (value as api3.Directory).absolute;
Object? _Directory_static_get_current(Map<String, Object?> values) =>
    api3.Directory.current;
Object? _Directory_static_get_systemTemp(Map<String, Object?> values) =>
    api3.Directory.systemTemp;
Object? _Directory_static_set_current(Map<String, Object?> values) {
  api3.Directory.current = values["value"];
  return null;
}

Object? _Directory_rename(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Directory).rename(values["newPath"] as String);
}

Object? _Directory_renameSync(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Directory).renameSync(values["newPath"] as String);
}

Object? _Directory_create(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Directory).create(
    recursive: values["recursive"] as bool,
  );
}

Object? _Directory_createSync(Object receiver, Map<String, Object?> values) {
  (receiver as api3.Directory).createSync(
    recursive: values["recursive"] as bool,
  );
  return null;
}

Object? _Directory_createTemp(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Directory).createTemp(values["prefix"] as String?);
}

Object? _Directory_createTempSync(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.Directory).createTempSync(
    values["prefix"] as String?,
  );
}

Object? _Directory_list(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Directory).list(
    followLinks: values["followLinks"] as bool,
    recursive: values["recursive"] as bool,
  );
}

Object? _Directory_listSync(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Directory).listSync(
    followLinks: values["followLinks"] as bool,
    recursive: values["recursive"] as bool,
  );
}

Object? _Directory_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Directory).toString();
}

Object _createDirectory(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api3.Directory(values["path"] as String);
    case "fromRawPath":
      return api3.Directory.fromRawPath(values["path"] as api2.Uint8List);
    case "fromUri":
      return api3.Directory.fromUri(values["uri"] as api4.Uri);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isEncoding(Object value) => value is api1.Encoding;
Object? _Encoding_name(Object value) => (value as api1.Encoding).name;
Object? _Encoding_getByName(Map<String, Object?> values) {
  return api1.Encoding.getByName(values["name"] as String?);
}

Object? _Encoding_decodeStream(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.Encoding).decodeStream(
    values["byteStream"] as api5.Stream<List<int>>,
  );
}

Object? _Encoding_encode(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.Encoding).encode(values["input"] as String);
}

Object? _Encoding_decode(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.Encoding).decode(values["encoded"] as List<int>);
}

Object _createEncoding(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isFile(Object value) => value is api3.File;
Object? _File_absolute(Object value) => (value as api3.File).absolute;
Object? _File_rename(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.File).rename(values["newPath"] as String);
}

Object? _File_renameSync(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.File).renameSync(values["newPath"] as String);
}

Object? _File_create(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.File).create(
    exclusive: values["exclusive"] as bool,
    recursive: values["recursive"] as bool,
  );
}

Object? _File_createSync(Object receiver, Map<String, Object?> values) {
  (receiver as api3.File).createSync(
    exclusive: values["exclusive"] as bool,
    recursive: values["recursive"] as bool,
  );
  return null;
}

Object? _File_copy(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.File).copy(values["newPath"] as String);
}

Object? _File_copySync(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.File).copySync(values["newPath"] as String);
}

Object? _File_length(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.File).length();
}

Object? _File_lengthSync(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.File).lengthSync();
}

Object? _File_lastAccessed(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.File).lastAccessed();
}

Object? _File_lastAccessedSync(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.File).lastAccessedSync();
}

Object? _File_setLastAccessed(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.File).setLastAccessed(
    values["time"] as api4.DateTime,
  );
}

Object? _File_setLastAccessedSync(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api3.File).setLastAccessedSync(values["time"] as api4.DateTime);
  return null;
}

Object? _File_lastModified(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.File).lastModified();
}

Object? _File_lastModifiedSync(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.File).lastModifiedSync();
}

Object? _File_setLastModified(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.File).setLastModified(
    values["time"] as api4.DateTime,
  );
}

Object? _File_setLastModifiedSync(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api3.File).setLastModifiedSync(values["time"] as api4.DateTime);
  return null;
}

Object? _File_open(Object receiver, Map<String, Object?> values) {
  if (!values.containsKey("mode")) {
    return (receiver as api3.File).open();
  }
  return (receiver as api3.File).open(mode: values["mode"] as api3.FileMode);
}

Object? _File_openSync(Object receiver, Map<String, Object?> values) {
  if (!values.containsKey("mode")) {
    return (receiver as api3.File).openSync();
  }
  return (receiver as api3.File).openSync(
    mode: values["mode"] as api3.FileMode,
  );
}

Object? _File_openRead(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.File).openRead(
    values["start"] as int?,
    values["end"] as int?,
  );
}

Object? _File_readAsBytes(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.File).readAsBytes();
}

Object? _File_readAsBytesSync(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.File).readAsBytesSync();
}

Object? _File_readAsString(Object receiver, Map<String, Object?> values) {
  if (!values.containsKey("encoding")) {
    return (receiver as api3.File).readAsString();
  }
  return (receiver as api3.File).readAsString(
    encoding: values["encoding"] as api1.Encoding,
  );
}

Object? _File_readAsStringSync(Object receiver, Map<String, Object?> values) {
  if (!values.containsKey("encoding")) {
    return (receiver as api3.File).readAsStringSync();
  }
  return (receiver as api3.File).readAsStringSync(
    encoding: values["encoding"] as api1.Encoding,
  );
}

Object? _File_readAsLines(Object receiver, Map<String, Object?> values) {
  if (!values.containsKey("encoding")) {
    return (receiver as api3.File).readAsLines();
  }
  return (receiver as api3.File).readAsLines(
    encoding: values["encoding"] as api1.Encoding,
  );
}

Object? _File_readAsLinesSync(Object receiver, Map<String, Object?> values) {
  if (!values.containsKey("encoding")) {
    return (receiver as api3.File).readAsLinesSync();
  }
  return (receiver as api3.File).readAsLinesSync(
    encoding: values["encoding"] as api1.Encoding,
  );
}

Object? _File_writeAsBytes(Object receiver, Map<String, Object?> values) {
  if (!values.containsKey("mode")) {
    return (receiver as api3.File).writeAsBytes(
      values["bytes"] as List<int>,
      flush: values["flush"] as bool,
    );
  }
  return (receiver as api3.File).writeAsBytes(
    values["bytes"] as List<int>,
    flush: values["flush"] as bool,
    mode: values["mode"] as api3.FileMode,
  );
}

Object? _File_writeAsBytesSync(Object receiver, Map<String, Object?> values) {
  if (!values.containsKey("mode")) {
    (receiver as api3.File).writeAsBytesSync(
      values["bytes"] as List<int>,
      flush: values["flush"] as bool,
    );
    return null;
  }
  (receiver as api3.File).writeAsBytesSync(
    values["bytes"] as List<int>,
    flush: values["flush"] as bool,
    mode: values["mode"] as api3.FileMode,
  );
  return null;
}

Object? _File_writeAsString(Object receiver, Map<String, Object?> values) {
  if (!values.containsKey("encoding")) {
    if (!values.containsKey("mode")) {
      return (receiver as api3.File).writeAsString(
        values["contents"] as String,
        flush: values["flush"] as bool,
      );
    }
    return (receiver as api3.File).writeAsString(
      values["contents"] as String,
      flush: values["flush"] as bool,
      mode: values["mode"] as api3.FileMode,
    );
  }
  if (!values.containsKey("mode")) {
    return (receiver as api3.File).writeAsString(
      values["contents"] as String,
      encoding: values["encoding"] as api1.Encoding,
      flush: values["flush"] as bool,
    );
  }
  return (receiver as api3.File).writeAsString(
    values["contents"] as String,
    encoding: values["encoding"] as api1.Encoding,
    flush: values["flush"] as bool,
    mode: values["mode"] as api3.FileMode,
  );
}

Object? _File_writeAsStringSync(Object receiver, Map<String, Object?> values) {
  if (!values.containsKey("encoding")) {
    if (!values.containsKey("mode")) {
      (receiver as api3.File).writeAsStringSync(
        values["contents"] as String,
        flush: values["flush"] as bool,
      );
      return null;
    }
    (receiver as api3.File).writeAsStringSync(
      values["contents"] as String,
      flush: values["flush"] as bool,
      mode: values["mode"] as api3.FileMode,
    );
    return null;
  }
  if (!values.containsKey("mode")) {
    (receiver as api3.File).writeAsStringSync(
      values["contents"] as String,
      encoding: values["encoding"] as api1.Encoding,
      flush: values["flush"] as bool,
    );
    return null;
  }
  (receiver as api3.File).writeAsStringSync(
    values["contents"] as String,
    encoding: values["encoding"] as api1.Encoding,
    flush: values["flush"] as bool,
    mode: values["mode"] as api3.FileMode,
  );
  return null;
}

Object _createFile(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api3.File(values["path"] as String);
    case "fromUri":
      return api3.File.fromUri(values["uri"] as api4.Uri);
    case "fromRawPath":
      return api3.File.fromRawPath(values["rawPath"] as api2.Uint8List);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isFileLock(Object value) => value is api3.FileLock;
Object _createFileLock(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isFileMode(Object value) => value is api3.FileMode;
Object _createFileMode(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isFileStat(Object value) => value is api3.FileStat;
Object? _FileStat_changed(Object value) => (value as api3.FileStat).changed;
Object? _FileStat_modified(Object value) => (value as api3.FileStat).modified;
Object? _FileStat_accessed(Object value) => (value as api3.FileStat).accessed;
Object? _FileStat_type(Object value) => (value as api3.FileStat).type;
Object? _FileStat_mode(Object value) => (value as api3.FileStat).mode;
Object? _FileStat_size(Object value) => (value as api3.FileStat).size;
Object? _FileStat_statSync(Map<String, Object?> values) {
  return api3.FileStat.statSync(values["path"] as String);
}

Object? _FileStat_stat(Map<String, Object?> values) {
  return api3.FileStat.stat(values["path"] as String);
}

Object? _FileStat_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.FileStat).toString();
}

Object? _FileStat_modeString(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.FileStat).modeString();
}

Object _createFileStat(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isFileSystemEntity(Object value) => value is api3.FileSystemEntity;
Object? _FileSystemEntity_path(Object value) =>
    (value as api3.FileSystemEntity).path;
Object? _FileSystemEntity_uri(Object value) =>
    (value as api3.FileSystemEntity).uri;
Object? _FileSystemEntity_isAbsolute(Object value) =>
    (value as api3.FileSystemEntity).isAbsolute;
Object? _FileSystemEntity_absolute(Object value) =>
    (value as api3.FileSystemEntity).absolute;
Object? _FileSystemEntity_parent(Object value) =>
    (value as api3.FileSystemEntity).parent;
Object? _FileSystemEntity_static_get_isWatchSupported(
  Map<String, Object?> values,
) => api3.FileSystemEntity.isWatchSupported;
Object? _FileSystemEntity_identical(Map<String, Object?> values) {
  return api3.FileSystemEntity.identical(
    values["path1"] as String,
    values["path2"] as String,
  );
}

Object? _FileSystemEntity_identicalSync(Map<String, Object?> values) {
  return api3.FileSystemEntity.identicalSync(
    values["path1"] as String,
    values["path2"] as String,
  );
}

Object? _FileSystemEntity_type(Map<String, Object?> values) {
  return api3.FileSystemEntity.type(
    values["path"] as String,
    followLinks: values["followLinks"] as bool,
  );
}

Object? _FileSystemEntity_typeSync(Map<String, Object?> values) {
  return api3.FileSystemEntity.typeSync(
    values["path"] as String,
    followLinks: values["followLinks"] as bool,
  );
}

Object? _FileSystemEntity_isLink(Map<String, Object?> values) {
  return api3.FileSystemEntity.isLink(values["path"] as String);
}

Object? _FileSystemEntity_isFile(Map<String, Object?> values) {
  return api3.FileSystemEntity.isFile(values["path"] as String);
}

Object? _FileSystemEntity_isDirectory(Map<String, Object?> values) {
  return api3.FileSystemEntity.isDirectory(values["path"] as String);
}

Object? _FileSystemEntity_isLinkSync(Map<String, Object?> values) {
  return api3.FileSystemEntity.isLinkSync(values["path"] as String);
}

Object? _FileSystemEntity_isFileSync(Map<String, Object?> values) {
  return api3.FileSystemEntity.isFileSync(values["path"] as String);
}

Object? _FileSystemEntity_isDirectorySync(Map<String, Object?> values) {
  return api3.FileSystemEntity.isDirectorySync(values["path"] as String);
}

Object? _FileSystemEntity_parentOf(Map<String, Object?> values) {
  return api3.FileSystemEntity.parentOf(values["path"] as String);
}

Object? _FileSystemEntity_exists(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.FileSystemEntity).exists();
}

Object? _FileSystemEntity_existsSync(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.FileSystemEntity).existsSync();
}

Object? _FileSystemEntity_rename(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.FileSystemEntity).rename(
    values["newPath"] as String,
  );
}

Object? _FileSystemEntity_renameSync(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.FileSystemEntity).renameSync(
    values["newPath"] as String,
  );
}

Object? _FileSystemEntity_resolveSymbolicLinks(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.FileSystemEntity).resolveSymbolicLinks();
}

Object? _FileSystemEntity_resolveSymbolicLinksSync(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.FileSystemEntity).resolveSymbolicLinksSync();
}

Object? _FileSystemEntity_stat(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.FileSystemEntity).stat();
}

Object? _FileSystemEntity_statSync(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.FileSystemEntity).statSync();
}

Object? _FileSystemEntity_delete(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.FileSystemEntity).delete(
    recursive: values["recursive"] as bool,
  );
}

Object? _FileSystemEntity_deleteSync(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api3.FileSystemEntity).deleteSync(
    recursive: values["recursive"] as bool,
  );
  return null;
}

Object _createFileSystemEntity(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isFileSystemEntityType(Object value) =>
    value is api3.FileSystemEntityType;
Object? _FileSystemEntityType_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.FileSystemEntityType).toString();
}

Object _createFileSystemEntityType(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isFlow(Object value) => value is api6.Flow;
Object? _Flow_id(Object value) => (value as api6.Flow).id;
Object? _Flow_begin(Map<String, Object?> values) {
  return api6.Flow.begin(id: values["id"] as int?);
}

Object? _Flow_step(Map<String, Object?> values) {
  return api6.Flow.step(values["id"] as int);
}

Object? _Flow_end(Map<String, Object?> values) {
  return api6.Flow.end(values["id"] as int);
}

Object _createFlow(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isHttpClient(Object value) => value is api3.HttpClient;
Object? _HttpClient_idleTimeout(Object value) =>
    (value as api3.HttpClient).idleTimeout;
Object? _HttpClient_connectionTimeout(Object value) =>
    (value as api3.HttpClient).connectionTimeout;
Object? _HttpClient_maxConnectionsPerHost(Object value) =>
    (value as api3.HttpClient).maxConnectionsPerHost;
Object? _HttpClient_autoUncompress(Object value) =>
    (value as api3.HttpClient).autoUncompress;
Object? _HttpClient_userAgent(Object value) =>
    (value as api3.HttpClient).userAgent;
Object? _HttpClient_static_get_enableTimelineLogging(
  Map<String, Object?> values,
) => api3.HttpClient.enableTimelineLogging;
Object? _HttpClient_static_set_enableTimelineLogging(
  Map<String, Object?> values,
) {
  api3.HttpClient.enableTimelineLogging = values["value"] as bool;
  return null;
}

void _HttpClient_set_idleTimeout(Object receiver, Object? value) {
  (receiver as api3.HttpClient).idleTimeout = value as api4.Duration;
}

void _HttpClient_set_connectionTimeout(Object receiver, Object? value) {
  (receiver as api3.HttpClient).connectionTimeout = value as api4.Duration?;
}

void _HttpClient_set_maxConnectionsPerHost(Object receiver, Object? value) {
  (receiver as api3.HttpClient).maxConnectionsPerHost = value as int?;
}

void _HttpClient_set_autoUncompress(Object receiver, Object? value) {
  (receiver as api3.HttpClient).autoUncompress = value as bool;
}

void _HttpClient_set_userAgent(Object receiver, Object? value) {
  (receiver as api3.HttpClient).userAgent = value as String?;
}

void _HttpClient_set_authenticate(Object receiver, Object? value) {
  (receiver as api3.HttpClient).authenticate =
      value
          as Future<bool> Function(api4.Uri url, String scheme, String? realm)?;
}

void _HttpClient_set_findProxy(Object receiver, Object? value) {
  (receiver as api3.HttpClient).findProxy =
      value as String Function(api4.Uri url)?;
}

void _HttpClient_set_authenticateProxy(Object receiver, Object? value) {
  (receiver as api3.HttpClient).authenticateProxy =
      value
          as Future<bool> Function(
            String host,
            int port,
            String scheme,
            String? realm,
          )?;
}

void _HttpClient_set_badCertificateCallback(Object receiver, Object? value) {
  (receiver as api3.HttpClient).badCertificateCallback =
      value as bool Function(api3.X509Certificate cert, String host, int port)?;
}

void _HttpClient_set_keyLog(Object receiver, Object? value) {
  (receiver as api3.HttpClient).keyLog =
      value as Object? Function(String line)?;
}

Object? _HttpClient_findProxyFromEnvironment(Map<String, Object?> values) {
  return api3.HttpClient.findProxyFromEnvironment(
    values["url"] as api4.Uri,
    environment: values["environment"] as Map<String, String>?,
  );
}

Object? _HttpClient_open(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.HttpClient).open(
    values["method"] as String,
    values["host"] as String,
    values["port"] as int,
    values["path"] as String,
  );
}

Object? _HttpClient_openUrl(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.HttpClient).openUrl(
    values["method"] as String,
    values["url"] as api4.Uri,
  );
}

Object? _HttpClient_get(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.HttpClient).get(
    values["host"] as String,
    values["port"] as int,
    values["path"] as String,
  );
}

Object? _HttpClient_getUrl(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.HttpClient).getUrl(values["url"] as api4.Uri);
}

Object? _HttpClient_post(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.HttpClient).post(
    values["host"] as String,
    values["port"] as int,
    values["path"] as String,
  );
}

Object? _HttpClient_postUrl(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.HttpClient).postUrl(values["url"] as api4.Uri);
}

Object? _HttpClient_put(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.HttpClient).put(
    values["host"] as String,
    values["port"] as int,
    values["path"] as String,
  );
}

Object? _HttpClient_putUrl(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.HttpClient).putUrl(values["url"] as api4.Uri);
}

Object? _HttpClient_delete(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.HttpClient).delete(
    values["host"] as String,
    values["port"] as int,
    values["path"] as String,
  );
}

Object? _HttpClient_deleteUrl(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.HttpClient).deleteUrl(values["url"] as api4.Uri);
}

Object? _HttpClient_patch(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.HttpClient).patch(
    values["host"] as String,
    values["port"] as int,
    values["path"] as String,
  );
}

Object? _HttpClient_patchUrl(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.HttpClient).patchUrl(values["url"] as api4.Uri);
}

Object? _HttpClient_head(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.HttpClient).head(
    values["host"] as String,
    values["port"] as int,
    values["path"] as String,
  );
}

Object? _HttpClient_headUrl(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.HttpClient).headUrl(values["url"] as api4.Uri);
}

Object? _HttpClient_close(Object receiver, Map<String, Object?> values) {
  (receiver as api3.HttpClient).close(force: values["force"] as bool);
  return null;
}

Object _createHttpClient(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api3.HttpClient(
        context: values["context"] as api3.SecurityContext?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isHttpClientRequest(Object value) => value is api3.HttpClientRequest;
Object? _HttpClientRequest_done(Object value) =>
    (value as api3.HttpClientRequest).done;
Object? _HttpClientRequest_persistentConnection(Object value) =>
    (value as api3.HttpClientRequest).persistentConnection;
Object? _HttpClientRequest_followRedirects(Object value) =>
    (value as api3.HttpClientRequest).followRedirects;
Object? _HttpClientRequest_maxRedirects(Object value) =>
    (value as api3.HttpClientRequest).maxRedirects;
Object? _HttpClientRequest_method(Object value) =>
    (value as api3.HttpClientRequest).method;
Object? _HttpClientRequest_uri(Object value) =>
    (value as api3.HttpClientRequest).uri;
Object? _HttpClientRequest_contentLength(Object value) =>
    (value as api3.HttpClientRequest).contentLength;
Object? _HttpClientRequest_bufferOutput(Object value) =>
    (value as api3.HttpClientRequest).bufferOutput;
Object? _HttpClientRequest_headers(Object value) =>
    (value as api3.HttpClientRequest).headers;
Object? _HttpClientRequest_cookies(Object value) =>
    (value as api3.HttpClientRequest).cookies;
Object? _HttpClientRequest_connectionInfo(Object value) =>
    (value as api3.HttpClientRequest).connectionInfo;
Object? _HttpClientRequest_encoding(Object value) =>
    (value as api3.HttpClientRequest).encoding;
void _HttpClientRequest_set_persistentConnection(
  Object receiver,
  Object? value,
) {
  (receiver as api3.HttpClientRequest).persistentConnection = value as bool;
}

void _HttpClientRequest_set_followRedirects(Object receiver, Object? value) {
  (receiver as api3.HttpClientRequest).followRedirects = value as bool;
}

void _HttpClientRequest_set_maxRedirects(Object receiver, Object? value) {
  (receiver as api3.HttpClientRequest).maxRedirects = value as int;
}

void _HttpClientRequest_set_contentLength(Object receiver, Object? value) {
  (receiver as api3.HttpClientRequest).contentLength = value as int;
}

void _HttpClientRequest_set_bufferOutput(Object receiver, Object? value) {
  (receiver as api3.HttpClientRequest).bufferOutput = value as bool;
}

void _HttpClientRequest_set_encoding(Object receiver, Object? value) {
  (receiver as api3.HttpClientRequest).encoding = value as api1.Encoding;
}

Object? _HttpClientRequest_close(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.HttpClientRequest).close();
}

Object? _HttpClientRequest_add(Object receiver, Map<String, Object?> values) {
  (receiver as api3.HttpClientRequest).add(values["data"] as List<int>);
  return null;
}

Object? _HttpClientRequest_addError(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api3.HttpClientRequest).addError(
    values["error"] as Object,
    values["stackTrace"] as api4.StackTrace?,
  );
  return null;
}

Object? _HttpClientRequest_addStream(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.HttpClientRequest).addStream(
    values["stream"] as api5.Stream<List<int>>,
  );
}

Object? _HttpClientRequest_abort(Object receiver, Map<String, Object?> values) {
  (receiver as api3.HttpClientRequest).abort(
    values["exception"],
    values["stackTrace"] as api4.StackTrace?,
  );
  return null;
}

Object? _HttpClientRequest_write(Object receiver, Map<String, Object?> values) {
  (receiver as api3.HttpClientRequest).write(values["object"]);
  return null;
}

Object? _HttpClientRequest_writeAll(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api3.HttpClientRequest).writeAll(
    values["objects"] as Iterable<Object?>,
    values["separator"] as String,
  );
  return null;
}

Object? _HttpClientRequest_writeln(
  Object receiver,
  Map<String, Object?> values,
) {
  if (!values.containsKey("object")) {
    (receiver as api3.HttpClientRequest).writeln();
    return null;
  }
  (receiver as api3.HttpClientRequest).writeln(values["object"]);
  return null;
}

Object? _HttpClientRequest_writeCharCode(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api3.HttpClientRequest).writeCharCode(values["charCode"] as int);
  return null;
}

Object? _HttpClientRequest_flush(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.HttpClientRequest).flush();
}

Object _createHttpClientRequest(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isHttpClientResponse(Object value) => value is api3.HttpClientResponse;
Object? _HttpClientResponse_statusCode(Object value) =>
    (value as api3.HttpClientResponse).statusCode;
Object? _HttpClientResponse_reasonPhrase(Object value) =>
    (value as api3.HttpClientResponse).reasonPhrase;
Object? _HttpClientResponse_contentLength(Object value) =>
    (value as api3.HttpClientResponse).contentLength;
Object? _HttpClientResponse_compressionState(Object value) =>
    (value as api3.HttpClientResponse).compressionState;
Object? _HttpClientResponse_persistentConnection(Object value) =>
    (value as api3.HttpClientResponse).persistentConnection;
Object? _HttpClientResponse_isRedirect(Object value) =>
    (value as api3.HttpClientResponse).isRedirect;
Object? _HttpClientResponse_redirects(Object value) =>
    (value as api3.HttpClientResponse).redirects;
Object? _HttpClientResponse_headers(Object value) =>
    (value as api3.HttpClientResponse).headers;
Object? _HttpClientResponse_cookies(Object value) =>
    (value as api3.HttpClientResponse).cookies;
Object? _HttpClientResponse_certificate(Object value) =>
    (value as api3.HttpClientResponse).certificate;
Object? _HttpClientResponse_connectionInfo(Object value) =>
    (value as api3.HttpClientResponse).connectionInfo;
Object? _HttpClientResponse_isBroadcast(Object value) =>
    (value as api3.HttpClientResponse).isBroadcast;
Object? _HttpClientResponse_length(Object value) =>
    (value as api3.HttpClientResponse).length;
Object? _HttpClientResponse_isEmpty(Object value) =>
    (value as api3.HttpClientResponse).isEmpty;
Object? _HttpClientResponse_first(Object value) =>
    (value as api3.HttpClientResponse).first;
Object? _HttpClientResponse_last(Object value) =>
    (value as api3.HttpClientResponse).last;
Object? _HttpClientResponse_single(Object value) =>
    (value as api3.HttpClientResponse).single;
Object? _HttpClientResponse_redirect(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.HttpClientResponse).redirect(
    values["method"] as String?,
    values["url"] as api4.Uri?,
    values["followLoops"] as bool?,
  );
}

Object? _HttpClientResponse_detachSocket(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.HttpClientResponse).detachSocket();
}

Object? _HttpClientResponse_asBroadcastStream(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.HttpClientResponse).asBroadcastStream(
    onCancel:
        values["onCancel"]
            as void Function(api5.StreamSubscription<List<int>> subscription)?,
    onListen:
        values["onListen"]
            as void Function(api5.StreamSubscription<List<int>> subscription)?,
  );
}

Object? _HttpClientResponse_listen(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.HttpClientResponse).listen(
    values["onData"] as void Function(List<int> event)?,
    cancelOnError: values["cancelOnError"] as bool?,
    onDone: values["onDone"] as void Function()?,
    onError: values["onError"] as Function?,
  );
}

Object? _HttpClientResponse_where(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.HttpClientResponse).where(
    values["test"] as bool Function(List<int> event),
  );
}

Object? _HttpClientResponse_map(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.HttpClientResponse).map<Object?>(
    values["convert"] as Object? Function(List<int> event),
  );
}

Object? _HttpClientResponse_asyncMap(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.HttpClientResponse).asyncMap<Object?>(
    values["convert"] as api5.FutureOr<Object?> Function(List<int> event),
  );
}

Object? _HttpClientResponse_asyncExpand(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.HttpClientResponse).asyncExpand<Object?>(
    values["convert"] as api5.Stream<Object?>? Function(List<int> event),
  );
}

Object? _HttpClientResponse_handleError(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.HttpClientResponse).handleError(
    values["onError"] as Function,
    test: values["test"] as bool Function(Object? error)?,
  );
}

Object? _HttpClientResponse_expand(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.HttpClientResponse).expand<Object?>(
    values["convert"] as Iterable<Object?> Function(List<int> element),
  );
}

Object? _HttpClientResponse_pipe(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.HttpClientResponse).pipe(
    values["streamConsumer"] as api5.StreamConsumer<List<int>>,
  );
}

Object? _HttpClientResponse_transform(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.HttpClientResponse).transform<Object?>(
    values["streamTransformer"] as api5.StreamTransformer<List<int>, Object?>,
  );
}

Object? _HttpClientResponse_reduce(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.HttpClientResponse).reduce(
    values["combine"]
        as List<int> Function(List<int> previous, List<int> element),
  );
}

Object? _HttpClientResponse_fold(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.HttpClientResponse).fold<Object?>(
    values["initialValue"],
    values["combine"] as Object? Function(Object? previous, List<int> element),
  );
}

Object? _HttpClientResponse_join(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.HttpClientResponse).join(
    values["separator"] as String,
  );
}

Object? _HttpClientResponse_contains(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.HttpClientResponse).contains(values["needle"]);
}

Object? _HttpClientResponse_forEach(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.HttpClientResponse).forEach(
    values["action"] as void Function(List<int> element),
  );
}

Object? _HttpClientResponse_every(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.HttpClientResponse).every(
    values["test"] as bool Function(List<int> element),
  );
}

Object? _HttpClientResponse_any(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.HttpClientResponse).any(
    values["test"] as bool Function(List<int> element),
  );
}

Object? _HttpClientResponse_cast(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.HttpClientResponse).cast<Object?>();
}

Object? _HttpClientResponse_toList(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.HttpClientResponse).toList();
}

Object? _HttpClientResponse_toSet(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.HttpClientResponse).toSet();
}

Object? _HttpClientResponse_drain(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.HttpClientResponse).drain<Object?>(
    values["futureValue"],
  );
}

Object? _HttpClientResponse_take(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.HttpClientResponse).take(values["count"] as int);
}

Object? _HttpClientResponse_takeWhile(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.HttpClientResponse).takeWhile(
    values["test"] as bool Function(List<int> element),
  );
}

Object? _HttpClientResponse_skip(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.HttpClientResponse).skip(values["count"] as int);
}

Object? _HttpClientResponse_skipWhile(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.HttpClientResponse).skipWhile(
    values["test"] as bool Function(List<int> element),
  );
}

Object? _HttpClientResponse_distinct(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.HttpClientResponse).distinct(
    values["equals"] as bool Function(List<int> previous, List<int> next)?,
  );
}

Object? _HttpClientResponse_firstWhere(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.HttpClientResponse).firstWhere(
    values["test"] as bool Function(List<int> element),
    orElse: values["orElse"] as List<int> Function()?,
  );
}

Object? _HttpClientResponse_lastWhere(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.HttpClientResponse).lastWhere(
    values["test"] as bool Function(List<int> element),
    orElse: values["orElse"] as List<int> Function()?,
  );
}

Object? _HttpClientResponse_singleWhere(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.HttpClientResponse).singleWhere(
    values["test"] as bool Function(List<int> element),
    orElse: values["orElse"] as List<int> Function()?,
  );
}

Object? _HttpClientResponse_elementAt(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.HttpClientResponse).elementAt(
    values["index"] as int,
  );
}

Object? _HttpClientResponse_timeout(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.HttpClientResponse).timeout(
    values["timeLimit"] as api4.Duration,
    onTimeout:
        values["onTimeout"] as void Function(api5.EventSink<List<int>> sink)?,
  );
}

Object _createHttpClientResponse(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isHttpConnectionInfo(Object value) => value is api3.HttpConnectionInfo;
Object? _HttpConnectionInfo_remoteAddress(Object value) =>
    (value as api3.HttpConnectionInfo).remoteAddress;
Object? _HttpConnectionInfo_remotePort(Object value) =>
    (value as api3.HttpConnectionInfo).remotePort;
Object? _HttpConnectionInfo_localPort(Object value) =>
    (value as api3.HttpConnectionInfo).localPort;
Object _createHttpConnectionInfo(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isHttpHeaders(Object value) => value is api3.HttpHeaders;
Object? _HttpHeaders_date(Object value) => (value as api3.HttpHeaders).date;
Object? _HttpHeaders_expires(Object value) =>
    (value as api3.HttpHeaders).expires;
Object? _HttpHeaders_ifModifiedSince(Object value) =>
    (value as api3.HttpHeaders).ifModifiedSince;
Object? _HttpHeaders_host(Object value) => (value as api3.HttpHeaders).host;
Object? _HttpHeaders_port(Object value) => (value as api3.HttpHeaders).port;
Object? _HttpHeaders_contentLength(Object value) =>
    (value as api3.HttpHeaders).contentLength;
Object? _HttpHeaders_persistentConnection(Object value) =>
    (value as api3.HttpHeaders).persistentConnection;
Object? _HttpHeaders_chunkedTransferEncoding(Object value) =>
    (value as api3.HttpHeaders).chunkedTransferEncoding;
void _HttpHeaders_set_date(Object receiver, Object? value) {
  (receiver as api3.HttpHeaders).date = value as api4.DateTime?;
}

void _HttpHeaders_set_expires(Object receiver, Object? value) {
  (receiver as api3.HttpHeaders).expires = value as api4.DateTime?;
}

void _HttpHeaders_set_ifModifiedSince(Object receiver, Object? value) {
  (receiver as api3.HttpHeaders).ifModifiedSince = value as api4.DateTime?;
}

void _HttpHeaders_set_host(Object receiver, Object? value) {
  (receiver as api3.HttpHeaders).host = value as String?;
}

void _HttpHeaders_set_port(Object receiver, Object? value) {
  (receiver as api3.HttpHeaders).port = value as int?;
}

void _HttpHeaders_set_contentLength(Object receiver, Object? value) {
  (receiver as api3.HttpHeaders).contentLength = value as int;
}

void _HttpHeaders_set_persistentConnection(Object receiver, Object? value) {
  (receiver as api3.HttpHeaders).persistentConnection = value as bool;
}

void _HttpHeaders_set_chunkedTransferEncoding(Object receiver, Object? value) {
  (receiver as api3.HttpHeaders).chunkedTransferEncoding = value as bool;
}

Object? _HttpHeaders_value(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.HttpHeaders).value(values["name"] as String);
}

Object? _HttpHeaders_add(Object receiver, Map<String, Object?> values) {
  (receiver as api3.HttpHeaders).add(
    values["name"] as String,
    values["value"] as Object,
    preserveHeaderCase: values["preserveHeaderCase"] as bool,
  );
  return null;
}

Object? _HttpHeaders_set(Object receiver, Map<String, Object?> values) {
  (receiver as api3.HttpHeaders).set(
    values["name"] as String,
    values["value"] as Object,
    preserveHeaderCase: values["preserveHeaderCase"] as bool,
  );
  return null;
}

Object? _HttpHeaders_remove(Object receiver, Map<String, Object?> values) {
  (receiver as api3.HttpHeaders).remove(
    values["name"] as String,
    values["value"] as Object,
  );
  return null;
}

Object? _HttpHeaders_removeAll(Object receiver, Map<String, Object?> values) {
  (receiver as api3.HttpHeaders).removeAll(values["name"] as String);
  return null;
}

Object? _HttpHeaders_forEach(Object receiver, Map<String, Object?> values) {
  (receiver as api3.HttpHeaders).forEach(
    values["action"] as void Function(String name, List<String> values),
  );
  return null;
}

Object? _HttpHeaders_noFolding(Object receiver, Map<String, Object?> values) {
  (receiver as api3.HttpHeaders).noFolding(values["name"] as String);
  return null;
}

Object? _HttpHeaders_clear(Object receiver, Map<String, Object?> values) {
  (receiver as api3.HttpHeaders).clear();
  return null;
}

Object? _HttpHeaders_operatorGetIndex(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.HttpHeaders)[values["name"] as String];
}

Object _createHttpHeaders(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isInternetAddress(Object value) => value is api3.InternetAddress;
Object? _InternetAddress_type(Object value) =>
    (value as api3.InternetAddress).type;
Object? _InternetAddress_address(Object value) =>
    (value as api3.InternetAddress).address;
Object? _InternetAddress_host(Object value) =>
    (value as api3.InternetAddress).host;
Object? _InternetAddress_rawAddress(Object value) =>
    (value as api3.InternetAddress).rawAddress;
Object? _InternetAddress_isLoopback(Object value) =>
    (value as api3.InternetAddress).isLoopback;
Object? _InternetAddress_isLinkLocal(Object value) =>
    (value as api3.InternetAddress).isLinkLocal;
Object? _InternetAddress_isMulticast(Object value) =>
    (value as api3.InternetAddress).isMulticast;
Object? _InternetAddress_static_get_loopbackIPv4(Map<String, Object?> values) =>
    api3.InternetAddress.loopbackIPv4;
Object? _InternetAddress_static_get_loopbackIPv6(Map<String, Object?> values) =>
    api3.InternetAddress.loopbackIPv6;
Object? _InternetAddress_static_get_anyIPv4(Map<String, Object?> values) =>
    api3.InternetAddress.anyIPv4;
Object? _InternetAddress_static_get_anyIPv6(Map<String, Object?> values) =>
    api3.InternetAddress.anyIPv6;
Object? _InternetAddress_lookup(Map<String, Object?> values) {
  if (!values.containsKey("type")) {
    return api3.InternetAddress.lookup(values["host"] as String);
  }
  return api3.InternetAddress.lookup(
    values["host"] as String,
    type: values["type"] as api3.InternetAddressType,
  );
}

Object? _InternetAddress_tryParse(Map<String, Object?> values) {
  return api3.InternetAddress.tryParse(values["address"] as String);
}

Object? _InternetAddress_reverse(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.InternetAddress).reverse();
}

Object _createInternetAddress(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api3.InternetAddress(
        values["address"] as String,
        type: values["type"] as api3.InternetAddressType?,
      );
    case "fromRawAddress":
      return api3.InternetAddress.fromRawAddress(
        values["rawAddress"] as api2.Uint8List,
        type: values["type"] as api3.InternetAddressType?,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isInternetAddressType(Object value) => value is api3.InternetAddressType;
Object? _InternetAddressType_name(Object value) =>
    (value as api3.InternetAddressType).name;
Object? _InternetAddressType_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.InternetAddressType).toString();
}

Object _createInternetAddressType(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isLatin1Codec(Object value) => value is api1.Latin1Codec;
Object? _Latin1Codec_encode(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.Latin1Codec).encode(values["source"] as String);
}

Object? _Latin1Codec_decode(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.Latin1Codec).decode(
    values["bytes"] as List<int>,
    allowInvalid: values["allowInvalid"] as bool?,
  );
}

Object _createLatin1Codec(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api1.Latin1Codec(allowInvalid: values["allowInvalid"] as bool);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isLink(Object value) => value is api3.Link;
Object? _Link_absolute(Object value) => (value as api3.Link).absolute;
Object? _Link_rename(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Link).rename(values["newPath"] as String);
}

Object? _Link_renameSync(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Link).renameSync(values["newPath"] as String);
}

Object? _Link_create(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Link).create(
    values["target"] as String,
    recursive: values["recursive"] as bool,
  );
}

Object? _Link_createSync(Object receiver, Map<String, Object?> values) {
  (receiver as api3.Link).createSync(
    values["target"] as String,
    recursive: values["recursive"] as bool,
  );
  return null;
}

Object? _Link_updateSync(Object receiver, Map<String, Object?> values) {
  (receiver as api3.Link).updateSync(values["target"] as String);
  return null;
}

Object? _Link_update(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Link).update(values["target"] as String);
}

Object? _Link_target(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Link).target();
}

Object? _Link_targetSync(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Link).targetSync();
}

Object _createLink(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api3.Link(values["path"] as String);
    case "fromRawPath":
      return api3.Link.fromRawPath(values["rawPath"] as api2.Uint8List);
    case "fromUri":
      return api3.Link.fromUri(values["uri"] as api4.Uri);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isMatrix2(Object value) => value is api.Matrix2;
Object? _Matrix2_storage(Object value) => (value as api.Matrix2).storage;
Object? _Matrix2_dimension(Object value) => (value as api.Matrix2).dimension;
Object? _Matrix2_row0(Object value) => (value as api.Matrix2).row0;
Object? _Matrix2_row1(Object value) => (value as api.Matrix2).row1;
void _Matrix2_set_row0(Object receiver, Object? value) {
  (receiver as api.Matrix2).row0 = value as api.Vector2;
}

void _Matrix2_set_row1(Object receiver, Object? value) {
  (receiver as api.Matrix2).row1 = value as api.Vector2;
}

Object? _Matrix2_solve(Map<String, Object?> values) {
  api.Matrix2.solve(
    values["A"] as api.Matrix2,
    values["x"] as api.Vector2,
    values["b"] as api.Vector2,
  );
  return null;
}

Object? _Matrix2_index(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix2).index(
    values["row"] as int,
    values["col"] as int,
  );
}

Object? _Matrix2_entry(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix2).entry(
    values["row"] as int,
    values["col"] as int,
  );
}

Object? _Matrix2_setEntry(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix2).setEntry(
    values["row"] as int,
    values["col"] as int,
    values["v"] as double,
  );
  return null;
}

Object? _Matrix2_setValues(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix2).setValues(
    values["arg0"] as double,
    values["arg1"] as double,
    values["arg2"] as double,
    values["arg3"] as double,
  );
  return null;
}

Object? _Matrix2_setColumns(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix2).setColumns(
    values["arg0"] as api.Vector2,
    values["arg1"] as api.Vector2,
  );
  return null;
}

Object? _Matrix2_setFrom(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix2).setFrom(values["arg"] as api.Matrix2);
  return null;
}

Object? _Matrix2_setOuter(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix2).setOuter(
    values["u"] as api.Vector2,
    values["v"] as api.Vector2,
  );
  return null;
}

Object? _Matrix2_splatDiagonal(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix2).splatDiagonal(values["arg"] as double);
  return null;
}

Object? _Matrix2_setDiagonal(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix2).setDiagonal(values["arg"] as api.Vector2);
  return null;
}

Object? _Matrix2_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix2).toString();
}

Object? _Matrix2_setRow(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix2).setRow(
    values["row"] as int,
    values["arg"] as api.Vector2,
  );
  return null;
}

Object? _Matrix2_getRow(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix2).getRow(values["row"] as int);
}

Object? _Matrix2_setColumn(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix2).setColumn(
    values["column"] as int,
    values["arg"] as api.Vector2,
  );
  return null;
}

Object? _Matrix2_getColumn(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix2).getColumn(values["column"] as int);
}

Object? _Matrix2_clone(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix2).clone();
}

Object? _Matrix2_copyInto(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix2).copyInto(values["arg"] as api.Matrix2);
}

Object? _Matrix2_setZero(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix2).setZero();
  return null;
}

Object? _Matrix2_setIdentity(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix2).setIdentity();
  return null;
}

Object? _Matrix2_transposed(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix2).transposed();
}

Object? _Matrix2_transpose(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix2).transpose();
  return null;
}

Object? _Matrix2_absolute(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix2).absolute();
}

Object? _Matrix2_determinant(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix2).determinant();
}

Object? _Matrix2_dotRow(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix2).dotRow(
    values["i"] as int,
    values["v"] as api.Vector2,
  );
}

Object? _Matrix2_dotColumn(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix2).dotColumn(
    values["j"] as int,
    values["v"] as api.Vector2,
  );
}

Object? _Matrix2_trace(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix2).trace();
}

Object? _Matrix2_infinityNorm(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix2).infinityNorm();
}

Object? _Matrix2_relativeError(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix2).relativeError(
    values["correct"] as api.Matrix2,
  );
}

Object? _Matrix2_absoluteError(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix2).absoluteError(
    values["correct"] as api.Matrix2,
  );
}

Object? _Matrix2_invert(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix2).invert();
}

Object? _Matrix2_copyInverse(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix2).copyInverse(values["arg"] as api.Matrix2);
}

Object? _Matrix2_setRotation(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix2).setRotation(values["radians"] as double);
  return null;
}

Object? _Matrix2_scaleAdjoint(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix2).scaleAdjoint(values["scale"] as double);
  return null;
}

Object? _Matrix2_scale(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix2).scale(values["scale"] as double);
  return null;
}

Object? _Matrix2_scaled(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix2).scaled(values["scale"] as double);
}

Object? _Matrix2_add(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix2).add(values["o"] as api.Matrix2);
  return null;
}

Object? _Matrix2_sub(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix2).sub(values["o"] as api.Matrix2);
  return null;
}

Object? _Matrix2_negate(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix2).negate();
  return null;
}

Object? _Matrix2_multiply(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix2).multiply(values["arg"] as api.Matrix2);
  return null;
}

Object? _Matrix2_multiplied(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix2).multiplied(values["arg"] as api.Matrix2);
}

Object? _Matrix2_transposeMultiply(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.Matrix2).transposeMultiply(values["arg"] as api.Matrix2);
  return null;
}

Object? _Matrix2_multiplyTranspose(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.Matrix2).multiplyTranspose(values["arg"] as api.Matrix2);
  return null;
}

Object? _Matrix2_transform(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix2).transform(values["arg"] as api.Vector2);
}

Object? _Matrix2_transformed(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix2).transformed(
    values["arg"] as api.Vector2,
    values["out"] as api.Vector2?,
  );
}

Object? _Matrix2_copyIntoArray(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix2).copyIntoArray(
    values["array"] as List<num>,
    values["offset"] as int,
  );
  return null;
}

Object? _Matrix2_copyFromArray(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix2).copyFromArray(
    values["array"] as List<double>,
    values["offset"] as int,
  );
  return null;
}

Object? _Matrix2_operatorGetIndex(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Matrix2)[values["i"] as int];
}

Object? _Matrix2_operatorSetIndex(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.Matrix2)[values["i"] as int] = values["v"] as double;
  return null;
}

Object? _Matrix2_operatorAdd(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix2) + (values["arg"] as api.Matrix2);
}

Object? _Matrix2_operatorSubtract(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Matrix2) - (values["arg"] as api.Matrix2);
}

Object? _Matrix2_operatorMultiply(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Matrix2) * (values["arg"]);
}

Object? _Matrix2_operatorNegate(Object receiver, Map<String, Object?> values) {
  return -(receiver as api.Matrix2);
}

Object _createMatrix2(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Matrix2(
        values["arg0"] as double,
        values["arg1"] as double,
        values["arg2"] as double,
        values["arg3"] as double,
      );
    case "fromList":
      return api.Matrix2.fromList(values["values"] as List<double>);
    case "zero":
      return api.Matrix2.zero();
    case "identity":
      return api.Matrix2.identity();
    case "copy":
      return api.Matrix2.copy(values["other"] as api.Matrix2);
    case "columns":
      return api.Matrix2.columns(
        values["arg0"] as api.Vector2,
        values["arg1"] as api.Vector2,
      );
    case "outer":
      return api.Matrix2.outer(
        values["u"] as api.Vector2,
        values["v"] as api.Vector2,
      );
    case "rotation":
      return api.Matrix2.rotation(values["radians"] as double);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isMatrix3(Object value) => value is api.Matrix3;
Object? _Matrix3_storage(Object value) => (value as api.Matrix3).storage;
Object? _Matrix3_dimension(Object value) => (value as api.Matrix3).dimension;
Object? _Matrix3_row0(Object value) => (value as api.Matrix3).row0;
Object? _Matrix3_row1(Object value) => (value as api.Matrix3).row1;
Object? _Matrix3_row2(Object value) => (value as api.Matrix3).row2;
Object? _Matrix3_right(Object value) => (value as api.Matrix3).right;
Object? _Matrix3_up(Object value) => (value as api.Matrix3).up;
Object? _Matrix3_forward(Object value) => (value as api.Matrix3).forward;
void _Matrix3_set_row0(Object receiver, Object? value) {
  (receiver as api.Matrix3).row0 = value as api.Vector3;
}

void _Matrix3_set_row1(Object receiver, Object? value) {
  (receiver as api.Matrix3).row1 = value as api.Vector3;
}

void _Matrix3_set_row2(Object receiver, Object? value) {
  (receiver as api.Matrix3).row2 = value as api.Vector3;
}

Object? _Matrix3_solve2(Map<String, Object?> values) {
  api.Matrix3.solve2(
    values["A"] as api.Matrix3,
    values["x"] as api.Vector2,
    values["b"] as api.Vector2,
  );
  return null;
}

Object? _Matrix3_solve(Map<String, Object?> values) {
  api.Matrix3.solve(
    values["A"] as api.Matrix3,
    values["x"] as api.Vector3,
    values["b"] as api.Vector3,
  );
  return null;
}

Object? _Matrix3_index(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix3).index(
    values["row"] as int,
    values["col"] as int,
  );
}

Object? _Matrix3_entry(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix3).entry(
    values["row"] as int,
    values["col"] as int,
  );
}

Object? _Matrix3_setEntry(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix3).setEntry(
    values["row"] as int,
    values["col"] as int,
    values["v"] as double,
  );
  return null;
}

Object? _Matrix3_setValues(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix3).setValues(
    values["arg0"] as double,
    values["arg1"] as double,
    values["arg2"] as double,
    values["arg3"] as double,
    values["arg4"] as double,
    values["arg5"] as double,
    values["arg6"] as double,
    values["arg7"] as double,
    values["arg8"] as double,
  );
  return null;
}

Object? _Matrix3_setColumns(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix3).setColumns(
    values["arg0"] as api.Vector3,
    values["arg1"] as api.Vector3,
    values["arg2"] as api.Vector3,
  );
  return null;
}

Object? _Matrix3_setFrom(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix3).setFrom(values["arg"] as api.Matrix3);
  return null;
}

Object? _Matrix3_setOuter(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix3).setOuter(
    values["u"] as api.Vector3,
    values["v"] as api.Vector3,
  );
  return null;
}

Object? _Matrix3_splatDiagonal(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix3).splatDiagonal(values["arg"] as double);
  return null;
}

Object? _Matrix3_setDiagonal(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix3).setDiagonal(values["arg"] as api.Vector3);
  return null;
}

Object? _Matrix3_setUpper2x2(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix3).setUpper2x2(values["arg"] as api.Matrix2);
  return null;
}

Object? _Matrix3_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix3).toString();
}

Object? _Matrix3_setRow(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix3).setRow(
    values["row"] as int,
    values["arg"] as api.Vector3,
  );
  return null;
}

Object? _Matrix3_getRow(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix3).getRow(values["row"] as int);
}

Object? _Matrix3_setColumn(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix3).setColumn(
    values["column"] as int,
    values["arg"] as api.Vector3,
  );
  return null;
}

Object? _Matrix3_getColumn(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix3).getColumn(values["column"] as int);
}

Object? _Matrix3_clone(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix3).clone();
}

Object? _Matrix3_copyInto(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix3).copyInto(values["arg"] as api.Matrix3);
}

Object? _Matrix3_setZero(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix3).setZero();
  return null;
}

Object? _Matrix3_setIdentity(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix3).setIdentity();
  return null;
}

Object? _Matrix3_transposed(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix3).transposed();
}

Object? _Matrix3_transpose(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix3).transpose();
  return null;
}

Object? _Matrix3_absolute(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix3).absolute();
}

Object? _Matrix3_determinant(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix3).determinant();
}

Object? _Matrix3_dotRow(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix3).dotRow(
    values["i"] as int,
    values["v"] as api.Vector3,
  );
}

Object? _Matrix3_dotColumn(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix3).dotColumn(
    values["j"] as int,
    values["v"] as api.Vector3,
  );
}

Object? _Matrix3_trace(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix3).trace();
}

Object? _Matrix3_infinityNorm(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix3).infinityNorm();
}

Object? _Matrix3_relativeError(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix3).relativeError(
    values["correct"] as api.Matrix3,
  );
}

Object? _Matrix3_absoluteError(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix3).absoluteError(
    values["correct"] as api.Matrix3,
  );
}

Object? _Matrix3_invert(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix3).invert();
}

Object? _Matrix3_copyInverse(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix3).copyInverse(values["arg"] as api.Matrix3);
}

Object? _Matrix3_copyNormalMatrix(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.Matrix3).copyNormalMatrix(values["arg"] as api.Matrix4);
  return null;
}

Object? _Matrix3_setRotationX(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix3).setRotationX(values["radians"] as double);
  return null;
}

Object? _Matrix3_setRotationY(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix3).setRotationY(values["radians"] as double);
  return null;
}

Object? _Matrix3_setRotationZ(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix3).setRotationZ(values["radians"] as double);
  return null;
}

Object? _Matrix3_scaleAdjoint(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix3).scaleAdjoint(values["scale"] as double);
  return null;
}

Object? _Matrix3_absoluteRotate(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix3).absoluteRotate(values["arg"] as api.Vector3);
}

Object? _Matrix3_absoluteRotate2(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix3).absoluteRotate2(
    values["arg"] as api.Vector2,
  );
}

Object? _Matrix3_transform2(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix3).transform2(values["arg"] as api.Vector2);
}

Object? _Matrix3_scale(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix3).scale(values["scale"] as double);
  return null;
}

Object? _Matrix3_scaled(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix3).scaled(values["scale"] as double);
}

Object? _Matrix3_add(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix3).add(values["o"] as api.Matrix3);
  return null;
}

Object? _Matrix3_sub(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix3).sub(values["o"] as api.Matrix3);
  return null;
}

Object? _Matrix3_negate(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix3).negate();
  return null;
}

Object? _Matrix3_multiply(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix3).multiply(values["arg"] as api.Matrix3);
  return null;
}

Object? _Matrix3_multiplied(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix3).multiplied(values["arg"] as api.Matrix3);
}

Object? _Matrix3_transposeMultiply(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.Matrix3).transposeMultiply(values["arg"] as api.Matrix3);
  return null;
}

Object? _Matrix3_multiplyTranspose(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.Matrix3).multiplyTranspose(values["arg"] as api.Matrix3);
  return null;
}

Object? _Matrix3_transform(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix3).transform(values["arg"] as api.Vector3);
}

Object? _Matrix3_transformed(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix3).transformed(
    values["arg"] as api.Vector3,
    values["out"] as api.Vector3?,
  );
}

Object? _Matrix3_copyIntoArray(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix3).copyIntoArray(
    values["array"] as List<num>,
    values["offset"] as int,
  );
  return null;
}

Object? _Matrix3_copyFromArray(Object receiver, Map<String, Object?> values) {
  (receiver as api.Matrix3).copyFromArray(
    values["array"] as List<double>,
    values["offset"] as int,
  );
  return null;
}

Object? _Matrix3_applyToVector3Array(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Matrix3).applyToVector3Array(
    values["array"] as List<double>,
    values["offset"] as int,
  );
}

Object? _Matrix3_isIdentity(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix3).isIdentity();
}

Object? _Matrix3_isZero(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix3).isZero();
}

Object? _Matrix3_operatorGetIndex(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Matrix3)[values["i"] as int];
}

Object? _Matrix3_operatorSetIndex(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.Matrix3)[values["i"] as int] = values["v"] as double;
  return null;
}

Object? _Matrix3_operatorAdd(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Matrix3) + (values["arg"] as api.Matrix3);
}

Object? _Matrix3_operatorSubtract(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Matrix3) - (values["arg"] as api.Matrix3);
}

Object? _Matrix3_operatorMultiply(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Matrix3) * (values["arg"]);
}

Object? _Matrix3_operatorNegate(Object receiver, Map<String, Object?> values) {
  return -(receiver as api.Matrix3);
}

Object _createMatrix3(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Matrix3(
        values["arg0"] as double,
        values["arg1"] as double,
        values["arg2"] as double,
        values["arg3"] as double,
        values["arg4"] as double,
        values["arg5"] as double,
        values["arg6"] as double,
        values["arg7"] as double,
        values["arg8"] as double,
      );
    case "fromList":
      return api.Matrix3.fromList(values["values"] as List<double>);
    case "zero":
      return api.Matrix3.zero();
    case "identity":
      return api.Matrix3.identity();
    case "copy":
      return api.Matrix3.copy(values["other"] as api.Matrix3);
    case "columns":
      return api.Matrix3.columns(
        values["arg0"] as api.Vector3,
        values["arg1"] as api.Vector3,
        values["arg2"] as api.Vector3,
      );
    case "outer":
      return api.Matrix3.outer(
        values["u"] as api.Vector3,
        values["v"] as api.Vector3,
      );
    case "rotationX":
      return api.Matrix3.rotationX(values["radians"] as double);
    case "rotationY":
      return api.Matrix3.rotationY(values["radians"] as double);
    case "rotationZ":
      return api.Matrix3.rotationZ(values["radians"] as double);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isQuad(Object value) => value is api.Quad;
Object? _Quad_point0(Object value) => (value as api.Quad).point0;
Object? _Quad_point1(Object value) => (value as api.Quad).point1;
Object? _Quad_point2(Object value) => (value as api.Quad).point2;
Object? _Quad_point3(Object value) => (value as api.Quad).point3;
Object? _Quad_copyFrom(Object receiver, Map<String, Object?> values) {
  (receiver as api.Quad).copyFrom(values["other"] as api.Quad);
  return null;
}

Object? _Quad_copyNormalInto(Object receiver, Map<String, Object?> values) {
  (receiver as api.Quad).copyNormalInto(values["normal"] as api.Vector3);
  return null;
}

Object? _Quad_transform(Object receiver, Map<String, Object?> values) {
  (receiver as api.Quad).transform(values["t"] as api.Matrix4);
  return null;
}

Object? _Quad_translate(Object receiver, Map<String, Object?> values) {
  (receiver as api.Quad).translate(values["offset"] as api.Vector3);
  return null;
}

Object? _Quad_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Quad).toString();
}

Object _createQuad(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Quad();
    case "copy":
      return api.Quad.copy(values["other"] as api.Quad);
    case "points":
      return api.Quad.points(
        values["point0"] as api.Vector3,
        values["point1"] as api.Vector3,
        values["point2"] as api.Vector3,
        values["point3"] as api.Vector3,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isQuaternion(Object value) => value is api.Quaternion;
Object? _Quaternion_storage(Object value) => (value as api.Quaternion).storage;
Object? _Quaternion_x(Object value) => (value as api.Quaternion).x;
Object? _Quaternion_y(Object value) => (value as api.Quaternion).y;
Object? _Quaternion_z(Object value) => (value as api.Quaternion).z;
Object? _Quaternion_w(Object value) => (value as api.Quaternion).w;
Object? _Quaternion_radians(Object value) => (value as api.Quaternion).radians;
Object? _Quaternion_axis(Object value) => (value as api.Quaternion).axis;
Object? _Quaternion_length2(Object value) => (value as api.Quaternion).length2;
Object? _Quaternion_length(Object value) => (value as api.Quaternion).length;
void _Quaternion_set_x(Object receiver, Object? value) {
  (receiver as api.Quaternion).x = value as double;
}

void _Quaternion_set_y(Object receiver, Object? value) {
  (receiver as api.Quaternion).y = value as double;
}

void _Quaternion_set_z(Object receiver, Object? value) {
  (receiver as api.Quaternion).z = value as double;
}

void _Quaternion_set_w(Object receiver, Object? value) {
  (receiver as api.Quaternion).w = value as double;
}

Object? _Quaternion_clone(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Quaternion).clone();
}

Object? _Quaternion_setFrom(Object receiver, Map<String, Object?> values) {
  (receiver as api.Quaternion).setFrom(values["source"] as api.Quaternion);
  return null;
}

Object? _Quaternion_setValues(Object receiver, Map<String, Object?> values) {
  (receiver as api.Quaternion).setValues(
    values["x"] as double,
    values["y"] as double,
    values["z"] as double,
    values["w"] as double,
  );
  return null;
}

Object? _Quaternion_setAxisAngle(Object receiver, Map<String, Object?> values) {
  (receiver as api.Quaternion).setAxisAngle(
    values["axis"] as api.Vector3,
    values["radians"] as double,
  );
  return null;
}

Object? _Quaternion_setFromRotation(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.Quaternion).setFromRotation(
    values["rotationMatrix"] as api.Matrix3,
  );
  return null;
}

Object? _Quaternion_setFromTwoVectors(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.Quaternion).setFromTwoVectors(
    values["a"] as api.Vector3,
    values["b"] as api.Vector3,
  );
  return null;
}

Object? _Quaternion_setDQ(Object receiver, Map<String, Object?> values) {
  (receiver as api.Quaternion).setDQ(
    values["q"] as api.Quaternion,
    values["omega"] as api.Vector3,
  );
  return null;
}

Object? _Quaternion_setEuler(Object receiver, Map<String, Object?> values) {
  (receiver as api.Quaternion).setEuler(
    values["yaw"] as double,
    values["pitch"] as double,
    values["roll"] as double,
  );
  return null;
}

Object? _Quaternion_normalize(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Quaternion).normalize();
}

Object? _Quaternion_negate(Object receiver, Map<String, Object?> values) {
  (receiver as api.Quaternion).negate();
  return null;
}

Object? _Quaternion_conjugate(Object receiver, Map<String, Object?> values) {
  (receiver as api.Quaternion).conjugate();
  return null;
}

Object? _Quaternion_inverse(Object receiver, Map<String, Object?> values) {
  (receiver as api.Quaternion).inverse();
  return null;
}

Object? _Quaternion_normalized(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Quaternion).normalized();
}

Object? _Quaternion_negated(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Quaternion).negated();
}

Object? _Quaternion_conjugated(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Quaternion).conjugated();
}

Object? _Quaternion_inverted(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Quaternion).inverted();
}

Object? _Quaternion_rotated(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Quaternion).rotated(values["v"] as api.Vector3);
}

Object? _Quaternion_rotate(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Quaternion).rotate(values["v"] as api.Vector3);
}

Object? _Quaternion_add(Object receiver, Map<String, Object?> values) {
  (receiver as api.Quaternion).add(values["arg"] as api.Quaternion);
  return null;
}

Object? _Quaternion_sub(Object receiver, Map<String, Object?> values) {
  (receiver as api.Quaternion).sub(values["arg"] as api.Quaternion);
  return null;
}

Object? _Quaternion_scale(Object receiver, Map<String, Object?> values) {
  (receiver as api.Quaternion).scale(values["scale"] as double);
  return null;
}

Object? _Quaternion_scaled(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Quaternion).scaled(values["scale"] as double);
}

Object? _Quaternion_asRotationMatrix(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Quaternion).asRotationMatrix();
}

Object? _Quaternion_copyRotationInto(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Quaternion).copyRotationInto(
    values["rotationMatrix"] as api.Matrix3,
  );
}

Object? _Quaternion_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Quaternion).toString();
}

Object? _Quaternion_relativeError(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Quaternion).relativeError(
    values["correct"] as api.Quaternion,
  );
}

Object? _Quaternion_absoluteError(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Quaternion).absoluteError(
    values["correct"] as api.Quaternion,
  );
}

Object? _Quaternion_operatorGetIndex(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Quaternion)[values["i"] as int];
}

Object? _Quaternion_operatorSetIndex(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.Quaternion)[values["i"] as int] = values["arg"] as double;
  return null;
}

Object? _Quaternion_operatorAdd(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Quaternion) + (values["other"] as api.Quaternion);
}

Object? _Quaternion_operatorSubtract(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Quaternion) - (values["other"] as api.Quaternion);
}

Object? _Quaternion_operatorMultiply(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Quaternion) * (values["other"] as api.Quaternion);
}

Object? _Quaternion_operatorNegate(
  Object receiver,
  Map<String, Object?> values,
) {
  return -(receiver as api.Quaternion);
}

Object _createQuaternion(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Quaternion(
        values["x"] as double,
        values["y"] as double,
        values["z"] as double,
        values["w"] as double,
      );
    case "fromRotation":
      return api.Quaternion.fromRotation(
        values["rotationMatrix"] as api.Matrix3,
      );
    case "axisAngle":
      return api.Quaternion.axisAngle(
        values["axis"] as api.Vector3,
        values["angle"] as double,
      );
    case "fromTwoVectors":
      return api.Quaternion.fromTwoVectors(
        values["a"] as api.Vector3,
        values["b"] as api.Vector3,
      );
    case "copy":
      return api.Quaternion.copy(values["original"] as api.Quaternion);
    case "identity":
      return api.Quaternion.identity();
    case "dq":
      return api.Quaternion.dq(
        values["q"] as api.Quaternion,
        values["omega"] as api.Vector3,
      );
    case "euler":
      return api.Quaternion.euler(
        values["yaw"] as double,
        values["pitch"] as double,
        values["roll"] as double,
      );
    case "fromFloat64List":
      return api.Quaternion.fromFloat64List(
        values["_qStorage"] as api2.Float64List,
      );
    case "fromBuffer":
      return api.Quaternion.fromBuffer(
        values["buffer"] as api2.ByteBuffer,
        values["offset"] as int,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isRandomAccessFile(Object value) => value is api3.RandomAccessFile;
Object? _RandomAccessFile_path(Object value) =>
    (value as api3.RandomAccessFile).path;
Object? _RandomAccessFile_close(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.RandomAccessFile).close();
}

Object? _RandomAccessFile_closeSync(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api3.RandomAccessFile).closeSync();
  return null;
}

Object? _RandomAccessFile_readByte(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.RandomAccessFile).readByte();
}

Object? _RandomAccessFile_readByteSync(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.RandomAccessFile).readByteSync();
}

Object? _RandomAccessFile_read(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.RandomAccessFile).read(values["count"] as int);
}

Object? _RandomAccessFile_readSync(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.RandomAccessFile).readSync(values["count"] as int);
}

Object? _RandomAccessFile_readInto(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.RandomAccessFile).readInto(
    values["buffer"] as List<int>,
    values["start"] as int,
    values["end"] as int?,
  );
}

Object? _RandomAccessFile_readIntoSync(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.RandomAccessFile).readIntoSync(
    values["buffer"] as List<int>,
    values["start"] as int,
    values["end"] as int?,
  );
}

Object? _RandomAccessFile_writeByte(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.RandomAccessFile).writeByte(values["value"] as int);
}

Object? _RandomAccessFile_writeByteSync(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.RandomAccessFile).writeByteSync(
    values["value"] as int,
  );
}

Object? _RandomAccessFile_writeFrom(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.RandomAccessFile).writeFrom(
    values["buffer"] as List<int>,
    values["start"] as int,
    values["end"] as int?,
  );
}

Object? _RandomAccessFile_writeFromSync(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api3.RandomAccessFile).writeFromSync(
    values["buffer"] as List<int>,
    values["start"] as int,
    values["end"] as int?,
  );
  return null;
}

Object? _RandomAccessFile_writeString(
  Object receiver,
  Map<String, Object?> values,
) {
  if (!values.containsKey("encoding")) {
    return (receiver as api3.RandomAccessFile).writeString(
      values["string"] as String,
    );
  }
  return (receiver as api3.RandomAccessFile).writeString(
    values["string"] as String,
    encoding: values["encoding"] as api1.Encoding,
  );
}

Object? _RandomAccessFile_writeStringSync(
  Object receiver,
  Map<String, Object?> values,
) {
  if (!values.containsKey("encoding")) {
    (receiver as api3.RandomAccessFile).writeStringSync(
      values["string"] as String,
    );
    return null;
  }
  (receiver as api3.RandomAccessFile).writeStringSync(
    values["string"] as String,
    encoding: values["encoding"] as api1.Encoding,
  );
  return null;
}

Object? _RandomAccessFile_position(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.RandomAccessFile).position();
}

Object? _RandomAccessFile_positionSync(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.RandomAccessFile).positionSync();
}

Object? _RandomAccessFile_setPosition(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.RandomAccessFile).setPosition(
    values["position"] as int,
  );
}

Object? _RandomAccessFile_setPositionSync(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api3.RandomAccessFile).setPositionSync(
    values["position"] as int,
  );
  return null;
}

Object? _RandomAccessFile_truncate(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.RandomAccessFile).truncate(values["length"] as int);
}

Object? _RandomAccessFile_truncateSync(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api3.RandomAccessFile).truncateSync(values["length"] as int);
  return null;
}

Object? _RandomAccessFile_length(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.RandomAccessFile).length();
}

Object? _RandomAccessFile_lengthSync(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.RandomAccessFile).lengthSync();
}

Object? _RandomAccessFile_flush(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.RandomAccessFile).flush();
}

Object? _RandomAccessFile_flushSync(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api3.RandomAccessFile).flushSync();
  return null;
}

Object? _RandomAccessFile_lock(Object receiver, Map<String, Object?> values) {
  if (!values.containsKey("mode") &&
      (values.containsKey("start") || values.containsKey("end")))
    throw ArgumentError(
      'Optional positional arguments must omit a trailing suffix',
    );
  if (!values.containsKey("start") && (values.containsKey("end")))
    throw ArgumentError(
      'Optional positional arguments must omit a trailing suffix',
    );
  if (!values.containsKey("mode")) {
    return (receiver as api3.RandomAccessFile).lock();
  }
  if (!values.containsKey("start")) {
    return (receiver as api3.RandomAccessFile).lock(
      values["mode"] as api3.FileLock,
    );
  }
  if (!values.containsKey("end")) {
    return (receiver as api3.RandomAccessFile).lock(
      values["mode"] as api3.FileLock,
      values["start"] as int,
    );
  }
  return (receiver as api3.RandomAccessFile).lock(
    values["mode"] as api3.FileLock,
    values["start"] as int,
    values["end"] as int,
  );
}

Object? _RandomAccessFile_lockSync(
  Object receiver,
  Map<String, Object?> values,
) {
  if (!values.containsKey("mode") &&
      (values.containsKey("start") || values.containsKey("end")))
    throw ArgumentError(
      'Optional positional arguments must omit a trailing suffix',
    );
  if (!values.containsKey("start") && (values.containsKey("end")))
    throw ArgumentError(
      'Optional positional arguments must omit a trailing suffix',
    );
  if (!values.containsKey("mode")) {
    (receiver as api3.RandomAccessFile).lockSync();
    return null;
  }
  if (!values.containsKey("start")) {
    (receiver as api3.RandomAccessFile).lockSync(
      values["mode"] as api3.FileLock,
    );
    return null;
  }
  if (!values.containsKey("end")) {
    (receiver as api3.RandomAccessFile).lockSync(
      values["mode"] as api3.FileLock,
      values["start"] as int,
    );
    return null;
  }
  (receiver as api3.RandomAccessFile).lockSync(
    values["mode"] as api3.FileLock,
    values["start"] as int,
    values["end"] as int,
  );
  return null;
}

Object? _RandomAccessFile_unlock(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.RandomAccessFile).unlock(
    values["start"] as int,
    values["end"] as int,
  );
}

Object? _RandomAccessFile_unlockSync(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api3.RandomAccessFile).unlockSync(
    values["start"] as int,
    values["end"] as int,
  );
  return null;
}

Object? _RandomAccessFile_toString(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.RandomAccessFile).toString();
}

Object _createRandomAccessFile(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isRawSocketOption(Object value) => value is api3.RawSocketOption;
Object? _RawSocketOption_level(Object value) =>
    (value as api3.RawSocketOption).level;
Object? _RawSocketOption_option(Object value) =>
    (value as api3.RawSocketOption).option;
Object? _RawSocketOption_value(Object value) =>
    (value as api3.RawSocketOption).value;
Object? _RawSocketOption_static_get_levelSocket(Map<String, Object?> values) =>
    api3.RawSocketOption.levelSocket;
Object? _RawSocketOption_static_get_levelIPv4(Map<String, Object?> values) =>
    api3.RawSocketOption.levelIPv4;
Object? _RawSocketOption_static_get_IPv4MulticastInterface(
  Map<String, Object?> values,
) => api3.RawSocketOption.IPv4MulticastInterface;
Object? _RawSocketOption_static_get_levelIPv6(Map<String, Object?> values) =>
    api3.RawSocketOption.levelIPv6;
Object? _RawSocketOption_static_get_IPv6MulticastInterface(
  Map<String, Object?> values,
) => api3.RawSocketOption.IPv6MulticastInterface;
Object? _RawSocketOption_static_get_levelTcp(Map<String, Object?> values) =>
    api3.RawSocketOption.levelTcp;
Object? _RawSocketOption_static_get_levelUdp(Map<String, Object?> values) =>
    api3.RawSocketOption.levelUdp;
Object _createRawSocketOption(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api3.RawSocketOption(
        values["level"] as int,
        values["option"] as int,
        values["value"] as api2.Uint8List,
      );
    case "fromInt":
      return api3.RawSocketOption.fromInt(
        values["level"] as int,
        values["option"] as int,
        values["value"] as int,
      );
    case "fromBool":
      return api3.RawSocketOption.fromBool(
        values["level"] as int,
        values["option"] as int,
        values["value"] as bool,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isRedirectInfo(Object value) => value is api3.RedirectInfo;
Object? _RedirectInfo_statusCode(Object value) =>
    (value as api3.RedirectInfo).statusCode;
Object? _RedirectInfo_method(Object value) =>
    (value as api3.RedirectInfo).method;
Object? _RedirectInfo_location(Object value) =>
    (value as api3.RedirectInfo).location;
Object _createRedirectInfo(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isSecureSocket(Object value) => value is api3.SecureSocket;
Object? _SecureSocket_peerCertificate(Object value) =>
    (value as api3.SecureSocket).peerCertificate;
Object? _SecureSocket_selectedProtocol(Object value) =>
    (value as api3.SecureSocket).selectedProtocol;
Object? _SecureSocket_connect(Map<String, Object?> values) {
  return api3.SecureSocket.connect(
    values["host"],
    values["port"] as int,
    context: values["context"] as api3.SecurityContext?,
    keyLog: values["keyLog"] as void Function(String line)?,
    onBadCertificate:
        values["onBadCertificate"]
            as bool Function(api3.X509Certificate certificate)?,
    supportedProtocols: values["supportedProtocols"] as List<String>?,
    timeout: values["timeout"] as api4.Duration?,
  );
}

Object? _SecureSocket_secure(Map<String, Object?> values) {
  if (!values.containsKey("host")) {
    return api3.SecureSocket.secure(
      values["socket"] as api3.Socket,
      context: values["context"] as api3.SecurityContext?,
      keyLog: values["keyLog"] as void Function(String line)?,
      onBadCertificate:
          values["onBadCertificate"]
              as bool Function(api3.X509Certificate certificate)?,
      supportedProtocols: values["supportedProtocols"] as List<String>?,
    );
  }
  return api3.SecureSocket.secure(
    values["socket"] as api3.Socket,
    context: values["context"] as api3.SecurityContext?,
    host: values["host"],
    keyLog: values["keyLog"] as void Function(String line)?,
    onBadCertificate:
        values["onBadCertificate"]
            as bool Function(api3.X509Certificate certificate)?,
    supportedProtocols: values["supportedProtocols"] as List<String>?,
  );
}

Object? _SecureSocket_secureServer(Map<String, Object?> values) {
  return api3.SecureSocket.secureServer(
    values["socket"] as api3.Socket,
    values["context"] as api3.SecurityContext?,
    bufferedData: values["bufferedData"] as List<int>?,
    requestClientCertificate: values["requestClientCertificate"] as bool,
    requireClientCertificate: values["requireClientCertificate"] as bool,
    supportedProtocols: values["supportedProtocols"] as List<String>?,
  );
}

Object? _SecureSocket_map(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.SecureSocket).map<Object?>(
    values["convert"] as Object? Function(api2.Uint8List event),
  );
}

Object? _SecureSocket_asyncMap(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.SecureSocket).asyncMap<Object?>(
    values["convert"] as api5.FutureOr<Object?> Function(api2.Uint8List event),
  );
}

Object? _SecureSocket_asyncExpand(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.SecureSocket).asyncExpand<Object?>(
    values["convert"] as api5.Stream<Object?>? Function(api2.Uint8List event),
  );
}

Object? _SecureSocket_expand(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.SecureSocket).expand<Object?>(
    values["convert"] as Iterable<Object?> Function(api2.Uint8List element),
  );
}

Object? _SecureSocket_transform(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.SecureSocket).transform<Object?>(
    values["streamTransformer"]
        as api5.StreamTransformer<api2.Uint8List, Object?>,
  );
}

Object? _SecureSocket_fold(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.SecureSocket).fold<Object?>(
    values["initialValue"],
    values["combine"]
        as Object? Function(Object? previous, api2.Uint8List element),
  );
}

Object? _SecureSocket_cast(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.SecureSocket).cast<Object?>();
}

Object? _SecureSocket_drain(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.SecureSocket).drain<Object?>(values["futureValue"]);
}

Object? _SecureSocket_renegotiate(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api3.SecureSocket).renegotiate(
    requestClientCertificate: values["requestClientCertificate"] as bool,
    requireClientCertificate: values["requireClientCertificate"] as bool,
    useSessionCache: values["useSessionCache"] as bool,
  );
  return null;
}

Object _createSecureSocket(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isSecurityContext(Object value) => value is api3.SecurityContext;
Object? _SecurityContext_allowLegacyUnsafeRenegotiation(Object value) =>
    (value as api3.SecurityContext).allowLegacyUnsafeRenegotiation;
Object? _SecurityContext_static_get_defaultContext(
  Map<String, Object?> values,
) => api3.SecurityContext.defaultContext;
Object? _SecurityContext_static_get_alpnSupported(
  Map<String, Object?> values,
) => api3.SecurityContext.alpnSupported;
void _SecurityContext_set_allowLegacyUnsafeRenegotiation(
  Object receiver,
  Object? value,
) {
  (receiver as api3.SecurityContext).allowLegacyUnsafeRenegotiation =
      value as bool;
}

Object? _SecurityContext_usePrivateKey(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api3.SecurityContext).usePrivateKey(
    values["file"] as String,
    password: values["password"] as String?,
  );
  return null;
}

Object? _SecurityContext_usePrivateKeyBytes(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api3.SecurityContext).usePrivateKeyBytes(
    values["keyBytes"] as List<int>,
    password: values["password"] as String?,
  );
  return null;
}

Object? _SecurityContext_setTrustedCertificates(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api3.SecurityContext).setTrustedCertificates(
    values["file"] as String,
    password: values["password"] as String?,
  );
  return null;
}

Object? _SecurityContext_setTrustedCertificatesBytes(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api3.SecurityContext).setTrustedCertificatesBytes(
    values["certBytes"] as List<int>,
    password: values["password"] as String?,
  );
  return null;
}

Object? _SecurityContext_useCertificateChain(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api3.SecurityContext).useCertificateChain(
    values["file"] as String,
    password: values["password"] as String?,
  );
  return null;
}

Object? _SecurityContext_useCertificateChainBytes(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api3.SecurityContext).useCertificateChainBytes(
    values["chainBytes"] as List<int>,
    password: values["password"] as String?,
  );
  return null;
}

Object? _SecurityContext_setClientAuthorities(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api3.SecurityContext).setClientAuthorities(
    values["file"] as String,
    password: values["password"] as String?,
  );
  return null;
}

Object? _SecurityContext_setClientAuthoritiesBytes(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api3.SecurityContext).setClientAuthoritiesBytes(
    values["authCertBytes"] as List<int>,
    password: values["password"] as String?,
  );
  return null;
}

Object? _SecurityContext_setAlpnProtocols(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api3.SecurityContext).setAlpnProtocols(
    values["protocols"] as List<String>,
    values["isServer"] as bool,
  );
  return null;
}

Object _createSecurityContext(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api3.SecurityContext(
        withTrustedRoots: values["withTrustedRoots"] as bool,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isSendPort(Object value) => value is api7.SendPort;
Object? _SendPort_send(Object receiver, Map<String, Object?> values) {
  (receiver as api7.SendPort).send(values["message"]);
  return null;
}

Object _createSendPort(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isSocket(Object value) => value is api3.Socket;
Object? _Socket_done(Object value) => (value as api3.Socket).done;
Object? _Socket_port(Object value) => (value as api3.Socket).port;
Object? _Socket_remotePort(Object value) => (value as api3.Socket).remotePort;
Object? _Socket_address(Object value) => (value as api3.Socket).address;
Object? _Socket_remoteAddress(Object value) =>
    (value as api3.Socket).remoteAddress;
Object? _Socket_isBroadcast(Object value) => (value as api3.Socket).isBroadcast;
Object? _Socket_length(Object value) => (value as api3.Socket).length;
Object? _Socket_isEmpty(Object value) => (value as api3.Socket).isEmpty;
Object? _Socket_first(Object value) => (value as api3.Socket).first;
Object? _Socket_last(Object value) => (value as api3.Socket).last;
Object? _Socket_single(Object value) => (value as api3.Socket).single;
Object? _Socket_encoding(Object value) => (value as api3.Socket).encoding;
void _Socket_set_encoding(Object receiver, Object? value) {
  (receiver as api3.Socket).encoding = value as api1.Encoding;
}

Object? _Socket_connect(Map<String, Object?> values) {
  if (!values.containsKey("sourceAddress")) {
    return api3.Socket.connect(
      values["host"],
      values["port"] as int,
      sourcePort: values["sourcePort"] as int,
      timeout: values["timeout"] as api4.Duration?,
    );
  }
  return api3.Socket.connect(
    values["host"],
    values["port"] as int,
    sourceAddress: values["sourceAddress"],
    sourcePort: values["sourcePort"] as int,
    timeout: values["timeout"] as api4.Duration?,
  );
}

Object? _Socket_close(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Socket).close();
}

Object? _Socket_add(Object receiver, Map<String, Object?> values) {
  (receiver as api3.Socket).add(values["data"] as List<int>);
  return null;
}

Object? _Socket_addError(Object receiver, Map<String, Object?> values) {
  (receiver as api3.Socket).addError(
    values["error"] as Object,
    values["stackTrace"] as api4.StackTrace?,
  );
  return null;
}

Object? _Socket_addStream(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Socket).addStream(
    values["stream"] as api5.Stream<List<int>>,
  );
}

Object? _Socket_destroy(Object receiver, Map<String, Object?> values) {
  (receiver as api3.Socket).destroy();
  return null;
}

Object? _Socket_setOption(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Socket).setOption(
    values["option"] as api3.SocketOption,
    values["enabled"] as bool,
  );
}

Object? _Socket_getRawOption(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Socket).getRawOption(
    values["option"] as api3.RawSocketOption,
  );
}

Object? _Socket_setRawOption(Object receiver, Map<String, Object?> values) {
  (receiver as api3.Socket).setRawOption(
    values["option"] as api3.RawSocketOption,
  );
  return null;
}

Object? _Socket_asBroadcastStream(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api3.Socket).asBroadcastStream(
    onCancel:
        values["onCancel"]
            as void Function(
              api5.StreamSubscription<api2.Uint8List> subscription,
            )?,
    onListen:
        values["onListen"]
            as void Function(
              api5.StreamSubscription<api2.Uint8List> subscription,
            )?,
  );
}

Object? _Socket_listen(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Socket).listen(
    values["onData"] as void Function(api2.Uint8List event)?,
    cancelOnError: values["cancelOnError"] as bool?,
    onDone: values["onDone"] as void Function()?,
    onError: values["onError"] as Function?,
  );
}

Object? _Socket_where(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Socket).where(
    values["test"] as bool Function(api2.Uint8List event),
  );
}

Object? _Socket_map(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Socket).map<Object?>(
    values["convert"] as Object? Function(api2.Uint8List event),
  );
}

Object? _Socket_asyncMap(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Socket).asyncMap<Object?>(
    values["convert"] as api5.FutureOr<Object?> Function(api2.Uint8List event),
  );
}

Object? _Socket_asyncExpand(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Socket).asyncExpand<Object?>(
    values["convert"] as api5.Stream<Object?>? Function(api2.Uint8List event),
  );
}

Object? _Socket_handleError(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Socket).handleError(
    values["onError"] as Function,
    test: values["test"] as bool Function(Object? error)?,
  );
}

Object? _Socket_expand(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Socket).expand<Object?>(
    values["convert"] as Iterable<Object?> Function(api2.Uint8List element),
  );
}

Object? _Socket_pipe(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Socket).pipe(
    values["streamConsumer"] as api5.StreamConsumer<api2.Uint8List>,
  );
}

Object? _Socket_transform(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Socket).transform<Object?>(
    values["streamTransformer"]
        as api5.StreamTransformer<api2.Uint8List, Object?>,
  );
}

Object? _Socket_reduce(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Socket).reduce(
    values["combine"]
        as api2.Uint8List Function(
          api2.Uint8List previous,
          api2.Uint8List element,
        ),
  );
}

Object? _Socket_fold(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Socket).fold<Object?>(
    values["initialValue"],
    values["combine"]
        as Object? Function(Object? previous, api2.Uint8List element),
  );
}

Object? _Socket_join(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Socket).join(values["separator"] as String);
}

Object? _Socket_contains(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Socket).contains(values["needle"]);
}

Object? _Socket_forEach(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Socket).forEach(
    values["action"] as void Function(api2.Uint8List element),
  );
}

Object? _Socket_every(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Socket).every(
    values["test"] as bool Function(api2.Uint8List element),
  );
}

Object? _Socket_any(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Socket).any(
    values["test"] as bool Function(api2.Uint8List element),
  );
}

Object? _Socket_cast(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Socket).cast<Object?>();
}

Object? _Socket_toList(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Socket).toList();
}

Object? _Socket_toSet(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Socket).toSet();
}

Object? _Socket_drain(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Socket).drain<Object?>(values["futureValue"]);
}

Object? _Socket_take(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Socket).take(values["count"] as int);
}

Object? _Socket_takeWhile(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Socket).takeWhile(
    values["test"] as bool Function(api2.Uint8List element),
  );
}

Object? _Socket_skip(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Socket).skip(values["count"] as int);
}

Object? _Socket_skipWhile(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Socket).skipWhile(
    values["test"] as bool Function(api2.Uint8List element),
  );
}

Object? _Socket_distinct(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Socket).distinct(
    values["equals"]
        as bool Function(api2.Uint8List previous, api2.Uint8List next)?,
  );
}

Object? _Socket_firstWhere(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Socket).firstWhere(
    values["test"] as bool Function(api2.Uint8List element),
    orElse: values["orElse"] as api2.Uint8List Function()?,
  );
}

Object? _Socket_lastWhere(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Socket).lastWhere(
    values["test"] as bool Function(api2.Uint8List element),
    orElse: values["orElse"] as api2.Uint8List Function()?,
  );
}

Object? _Socket_singleWhere(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Socket).singleWhere(
    values["test"] as bool Function(api2.Uint8List element),
    orElse: values["orElse"] as api2.Uint8List Function()?,
  );
}

Object? _Socket_elementAt(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Socket).elementAt(values["index"] as int);
}

Object? _Socket_timeout(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Socket).timeout(
    values["timeLimit"] as api4.Duration,
    onTimeout:
        values["onTimeout"]
            as void Function(api5.EventSink<api2.Uint8List> sink)?,
  );
}

Object? _Socket_write(Object receiver, Map<String, Object?> values) {
  (receiver as api3.Socket).write(values["object"]);
  return null;
}

Object? _Socket_writeAll(Object receiver, Map<String, Object?> values) {
  (receiver as api3.Socket).writeAll(
    values["objects"] as Iterable<Object?>,
    values["separator"] as String,
  );
  return null;
}

Object? _Socket_writeln(Object receiver, Map<String, Object?> values) {
  if (!values.containsKey("object")) {
    (receiver as api3.Socket).writeln();
    return null;
  }
  (receiver as api3.Socket).writeln(values["object"]);
  return null;
}

Object? _Socket_writeCharCode(Object receiver, Map<String, Object?> values) {
  (receiver as api3.Socket).writeCharCode(values["charCode"] as int);
  return null;
}

Object? _Socket_flush(Object receiver, Map<String, Object?> values) {
  return (receiver as api3.Socket).flush();
}

Object _createSocket(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isSocketOption(Object value) => value is api3.SocketOption;
Object _createSocketOption(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
bool _isStopwatch(Object value) => value is api4.Stopwatch;
Object? _Stopwatch_frequency(Object value) =>
    (value as api4.Stopwatch).frequency;
Object? _Stopwatch_elapsedTicks(Object value) =>
    (value as api4.Stopwatch).elapsedTicks;
Object? _Stopwatch_elapsed(Object value) => (value as api4.Stopwatch).elapsed;
Object? _Stopwatch_elapsedMicroseconds(Object value) =>
    (value as api4.Stopwatch).elapsedMicroseconds;
Object? _Stopwatch_elapsedMilliseconds(Object value) =>
    (value as api4.Stopwatch).elapsedMilliseconds;
Object? _Stopwatch_isRunning(Object value) =>
    (value as api4.Stopwatch).isRunning;
Object? _Stopwatch_start(Object receiver, Map<String, Object?> values) {
  (receiver as api4.Stopwatch).start();
  return null;
}

Object? _Stopwatch_stop(Object receiver, Map<String, Object?> values) {
  (receiver as api4.Stopwatch).stop();
  return null;
}

Object? _Stopwatch_reset(Object receiver, Map<String, Object?> values) {
  (receiver as api4.Stopwatch).reset();
  return null;
}

Object _createStopwatch(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api4.Stopwatch();
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isUtf8Codec(Object value) => value is api1.Utf8Codec;
Object? _Utf8Codec_encode(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.Utf8Codec).encode(values["string"] as String);
}

Object? _Utf8Codec_decode(Object receiver, Map<String, Object?> values) {
  return (receiver as api1.Utf8Codec).decode(
    values["codeUnits"] as List<int>,
    allowMalformed: values["allowMalformed"] as bool?,
  );
}

Object _createUtf8Codec(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api1.Utf8Codec(allowMalformed: values["allowMalformed"] as bool);
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isVector2(Object value) => value is api.Vector2;
Object? _Vector2_storage(Object value) => (value as api.Vector2).storage;
Object? _Vector2_length(Object value) => (value as api.Vector2).length;
Object? _Vector2_length2(Object value) => (value as api.Vector2).length2;
Object? _Vector2_isInfinite(Object value) => (value as api.Vector2).isInfinite;
Object? _Vector2_isNaN(Object value) => (value as api.Vector2).isNaN;
Object? _Vector2_xx(Object value) => (value as api.Vector2).xx;
Object? _Vector2_xy(Object value) => (value as api.Vector2).xy;
Object? _Vector2_yx(Object value) => (value as api.Vector2).yx;
Object? _Vector2_yy(Object value) => (value as api.Vector2).yy;
Object? _Vector2_xxx(Object value) => (value as api.Vector2).xxx;
Object? _Vector2_xxy(Object value) => (value as api.Vector2).xxy;
Object? _Vector2_xyx(Object value) => (value as api.Vector2).xyx;
Object? _Vector2_xyy(Object value) => (value as api.Vector2).xyy;
Object? _Vector2_yxx(Object value) => (value as api.Vector2).yxx;
Object? _Vector2_yxy(Object value) => (value as api.Vector2).yxy;
Object? _Vector2_yyx(Object value) => (value as api.Vector2).yyx;
Object? _Vector2_yyy(Object value) => (value as api.Vector2).yyy;
Object? _Vector2_xxxx(Object value) => (value as api.Vector2).xxxx;
Object? _Vector2_xxxy(Object value) => (value as api.Vector2).xxxy;
Object? _Vector2_xxyx(Object value) => (value as api.Vector2).xxyx;
Object? _Vector2_xxyy(Object value) => (value as api.Vector2).xxyy;
Object? _Vector2_xyxx(Object value) => (value as api.Vector2).xyxx;
Object? _Vector2_xyxy(Object value) => (value as api.Vector2).xyxy;
Object? _Vector2_xyyx(Object value) => (value as api.Vector2).xyyx;
Object? _Vector2_xyyy(Object value) => (value as api.Vector2).xyyy;
Object? _Vector2_yxxx(Object value) => (value as api.Vector2).yxxx;
Object? _Vector2_yxxy(Object value) => (value as api.Vector2).yxxy;
Object? _Vector2_yxyx(Object value) => (value as api.Vector2).yxyx;
Object? _Vector2_yxyy(Object value) => (value as api.Vector2).yxyy;
Object? _Vector2_yyxx(Object value) => (value as api.Vector2).yyxx;
Object? _Vector2_yyxy(Object value) => (value as api.Vector2).yyxy;
Object? _Vector2_yyyx(Object value) => (value as api.Vector2).yyyx;
Object? _Vector2_yyyy(Object value) => (value as api.Vector2).yyyy;
Object? _Vector2_r(Object value) => (value as api.Vector2).r;
Object? _Vector2_g(Object value) => (value as api.Vector2).g;
Object? _Vector2_s(Object value) => (value as api.Vector2).s;
Object? _Vector2_t(Object value) => (value as api.Vector2).t;
Object? _Vector2_x(Object value) => (value as api.Vector2).x;
Object? _Vector2_y(Object value) => (value as api.Vector2).y;
Object? _Vector2_rr(Object value) => (value as api.Vector2).rr;
Object? _Vector2_rg(Object value) => (value as api.Vector2).rg;
Object? _Vector2_gr(Object value) => (value as api.Vector2).gr;
Object? _Vector2_gg(Object value) => (value as api.Vector2).gg;
Object? _Vector2_rrr(Object value) => (value as api.Vector2).rrr;
Object? _Vector2_rrg(Object value) => (value as api.Vector2).rrg;
Object? _Vector2_rgr(Object value) => (value as api.Vector2).rgr;
Object? _Vector2_rgg(Object value) => (value as api.Vector2).rgg;
Object? _Vector2_grr(Object value) => (value as api.Vector2).grr;
Object? _Vector2_grg(Object value) => (value as api.Vector2).grg;
Object? _Vector2_ggr(Object value) => (value as api.Vector2).ggr;
Object? _Vector2_ggg(Object value) => (value as api.Vector2).ggg;
Object? _Vector2_rrrr(Object value) => (value as api.Vector2).rrrr;
Object? _Vector2_rrrg(Object value) => (value as api.Vector2).rrrg;
Object? _Vector2_rrgr(Object value) => (value as api.Vector2).rrgr;
Object? _Vector2_rrgg(Object value) => (value as api.Vector2).rrgg;
Object? _Vector2_rgrr(Object value) => (value as api.Vector2).rgrr;
Object? _Vector2_rgrg(Object value) => (value as api.Vector2).rgrg;
Object? _Vector2_rggr(Object value) => (value as api.Vector2).rggr;
Object? _Vector2_rggg(Object value) => (value as api.Vector2).rggg;
Object? _Vector2_grrr(Object value) => (value as api.Vector2).grrr;
Object? _Vector2_grrg(Object value) => (value as api.Vector2).grrg;
Object? _Vector2_grgr(Object value) => (value as api.Vector2).grgr;
Object? _Vector2_grgg(Object value) => (value as api.Vector2).grgg;
Object? _Vector2_ggrr(Object value) => (value as api.Vector2).ggrr;
Object? _Vector2_ggrg(Object value) => (value as api.Vector2).ggrg;
Object? _Vector2_gggr(Object value) => (value as api.Vector2).gggr;
Object? _Vector2_gggg(Object value) => (value as api.Vector2).gggg;
Object? _Vector2_ss(Object value) => (value as api.Vector2).ss;
Object? _Vector2_st(Object value) => (value as api.Vector2).st;
Object? _Vector2_ts(Object value) => (value as api.Vector2).ts;
Object? _Vector2_tt(Object value) => (value as api.Vector2).tt;
Object? _Vector2_sss(Object value) => (value as api.Vector2).sss;
Object? _Vector2_sst(Object value) => (value as api.Vector2).sst;
Object? _Vector2_sts(Object value) => (value as api.Vector2).sts;
Object? _Vector2_stt(Object value) => (value as api.Vector2).stt;
Object? _Vector2_tss(Object value) => (value as api.Vector2).tss;
Object? _Vector2_tst(Object value) => (value as api.Vector2).tst;
Object? _Vector2_tts(Object value) => (value as api.Vector2).tts;
Object? _Vector2_ttt(Object value) => (value as api.Vector2).ttt;
Object? _Vector2_ssss(Object value) => (value as api.Vector2).ssss;
Object? _Vector2_ssst(Object value) => (value as api.Vector2).ssst;
Object? _Vector2_ssts(Object value) => (value as api.Vector2).ssts;
Object? _Vector2_sstt(Object value) => (value as api.Vector2).sstt;
Object? _Vector2_stss(Object value) => (value as api.Vector2).stss;
Object? _Vector2_stst(Object value) => (value as api.Vector2).stst;
Object? _Vector2_stts(Object value) => (value as api.Vector2).stts;
Object? _Vector2_sttt(Object value) => (value as api.Vector2).sttt;
Object? _Vector2_tsss(Object value) => (value as api.Vector2).tsss;
Object? _Vector2_tsst(Object value) => (value as api.Vector2).tsst;
Object? _Vector2_tsts(Object value) => (value as api.Vector2).tsts;
Object? _Vector2_tstt(Object value) => (value as api.Vector2).tstt;
Object? _Vector2_ttss(Object value) => (value as api.Vector2).ttss;
Object? _Vector2_ttst(Object value) => (value as api.Vector2).ttst;
Object? _Vector2_ttts(Object value) => (value as api.Vector2).ttts;
Object? _Vector2_tttt(Object value) => (value as api.Vector2).tttt;
void _Vector2_set_length(Object receiver, Object? value) {
  (receiver as api.Vector2).length = value as double;
}

void _Vector2_set_xy(Object receiver, Object? value) {
  (receiver as api.Vector2).xy = value as api.Vector2;
}

void _Vector2_set_yx(Object receiver, Object? value) {
  (receiver as api.Vector2).yx = value as api.Vector2;
}

void _Vector2_set_r(Object receiver, Object? value) {
  (receiver as api.Vector2).r = value as double;
}

void _Vector2_set_g(Object receiver, Object? value) {
  (receiver as api.Vector2).g = value as double;
}

void _Vector2_set_s(Object receiver, Object? value) {
  (receiver as api.Vector2).s = value as double;
}

void _Vector2_set_t(Object receiver, Object? value) {
  (receiver as api.Vector2).t = value as double;
}

void _Vector2_set_x(Object receiver, Object? value) {
  (receiver as api.Vector2).x = value as double;
}

void _Vector2_set_y(Object receiver, Object? value) {
  (receiver as api.Vector2).y = value as double;
}

void _Vector2_set_rg(Object receiver, Object? value) {
  (receiver as api.Vector2).rg = value as api.Vector2;
}

void _Vector2_set_gr(Object receiver, Object? value) {
  (receiver as api.Vector2).gr = value as api.Vector2;
}

void _Vector2_set_st(Object receiver, Object? value) {
  (receiver as api.Vector2).st = value as api.Vector2;
}

void _Vector2_set_ts(Object receiver, Object? value) {
  (receiver as api.Vector2).ts = value as api.Vector2;
}

Object? _Vector2_min(Map<String, Object?> values) {
  api.Vector2.min(
    values["a"] as api.Vector2,
    values["b"] as api.Vector2,
    values["result"] as api.Vector2,
  );
  return null;
}

Object? _Vector2_max(Map<String, Object?> values) {
  api.Vector2.max(
    values["a"] as api.Vector2,
    values["b"] as api.Vector2,
    values["result"] as api.Vector2,
  );
  return null;
}

Object? _Vector2_mix(Map<String, Object?> values) {
  api.Vector2.mix(
    values["min"] as api.Vector2,
    values["max"] as api.Vector2,
    values["a"] as double,
    values["result"] as api.Vector2,
  );
  return null;
}

Object? _Vector2_setValues(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector2).setValues(
    values["x_"] as double,
    values["y_"] as double,
  );
  return null;
}

Object? _Vector2_setZero(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector2).setZero();
  return null;
}

Object? _Vector2_setFrom(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector2).setFrom(values["other"] as api.Vector2);
  return null;
}

Object? _Vector2_splat(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector2).splat(values["arg"] as double);
  return null;
}

Object? _Vector2_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector2).toString();
}

Object? _Vector2_normalize(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector2).normalize();
}

Object? _Vector2_normalizeLength(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector2).normalizeLength();
}

Object? _Vector2_normalized(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector2).normalized();
}

Object? _Vector2_normalizeInto(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector2).normalizeInto(values["out"] as api.Vector2);
}

Object? _Vector2_distanceTo(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector2).distanceTo(values["arg"] as api.Vector2);
}

Object? _Vector2_distanceToSquared(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Vector2).distanceToSquared(
    values["arg"] as api.Vector2,
  );
}

Object? _Vector2_angleTo(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector2).angleTo(values["other"] as api.Vector2);
}

Object? _Vector2_angleToSigned(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector2).angleToSigned(
    values["other"] as api.Vector2,
  );
}

Object? _Vector2_dot(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector2).dot(values["other"] as api.Vector2);
}

Object? _Vector2_postmultiply(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector2).postmultiply(values["arg"] as api.Matrix2);
  return null;
}

Object? _Vector2_cross(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector2).cross(values["other"] as api.Vector2);
}

Object? _Vector2_scaleOrthogonalInto(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Vector2).scaleOrthogonalInto(
    values["scale"] as double,
    values["out"] as api.Vector2,
  );
}

Object? _Vector2_reflect(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector2).reflect(values["normal"] as api.Vector2);
  return null;
}

Object? _Vector2_reflected(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector2).reflected(values["normal"] as api.Vector2);
}

Object? _Vector2_relativeError(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector2).relativeError(
    values["correct"] as api.Vector2,
  );
}

Object? _Vector2_absoluteError(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector2).absoluteError(
    values["correct"] as api.Vector2,
  );
}

Object? _Vector2_add(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector2).add(values["arg"] as api.Vector2);
  return null;
}

Object? _Vector2_addScaled(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector2).addScaled(
    values["arg"] as api.Vector2,
    values["factor"] as double,
  );
  return null;
}

Object? _Vector2_sub(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector2).sub(values["arg"] as api.Vector2);
  return null;
}

Object? _Vector2_multiply(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector2).multiply(values["arg"] as api.Vector2);
  return null;
}

Object? _Vector2_divide(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector2).divide(values["arg"] as api.Vector2);
  return null;
}

Object? _Vector2_scale(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector2).scale(values["arg"] as double);
  return null;
}

Object? _Vector2_scaled(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector2).scaled(values["arg"] as double);
}

Object? _Vector2_negate(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector2).negate();
  return null;
}

Object? _Vector2_absolute(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector2).absolute();
  return null;
}

Object? _Vector2_clamp(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector2).clamp(
    values["min"] as api.Vector2,
    values["max"] as api.Vector2,
  );
  return null;
}

Object? _Vector2_clampScalar(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector2).clampScalar(
    values["min"] as double,
    values["max"] as double,
  );
  return null;
}

Object? _Vector2_floor(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector2).floor();
  return null;
}

Object? _Vector2_ceil(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector2).ceil();
  return null;
}

Object? _Vector2_round(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector2).round();
  return null;
}

Object? _Vector2_roundToZero(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector2).roundToZero();
  return null;
}

Object? _Vector2_clone(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector2).clone();
}

Object? _Vector2_copyInto(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector2).copyInto(values["arg"] as api.Vector2);
}

Object? _Vector2_copyIntoArray(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector2).copyIntoArray(
    values["array"] as List<double>,
    values["offset"] as int,
  );
  return null;
}

Object? _Vector2_copyFromArray(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector2).copyFromArray(
    values["array"] as List<double>,
    values["offset"] as int,
  );
  return null;
}

Object? _Vector2_operatorGetIndex(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Vector2)[values["i"] as int];
}

Object? _Vector2_operatorSetIndex(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.Vector2)[values["i"] as int] = values["v"] as double;
  return null;
}

Object? _Vector2_operatorAdd(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector2) + (values["other"] as api.Vector2);
}

Object? _Vector2_operatorSubtract(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Vector2) - (values["other"] as api.Vector2);
}

Object? _Vector2_operatorMultiply(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Vector2) * (values["scale"] as double);
}

Object? _Vector2_operatorDivide(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector2) / (values["scale"] as double);
}

Object? _Vector2_operatorNegate(Object receiver, Map<String, Object?> values) {
  return -(receiver as api.Vector2);
}

Object _createVector2(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Vector2(values["x"] as double, values["y"] as double);
    case "array":
      return api.Vector2.array(
        values["array"] as List<double>,
        values["offset"] as int,
      );
    case "zero":
      return api.Vector2.zero();
    case "all":
      return api.Vector2.all(values["value"] as double);
    case "copy":
      return api.Vector2.copy(values["other"] as api.Vector2);
    case "fromFloat64List":
      return api.Vector2.fromFloat64List(
        values["_v2storage"] as api2.Float64List,
      );
    case "fromBuffer":
      return api.Vector2.fromBuffer(
        values["buffer"] as api2.ByteBuffer,
        values["offset"] as int,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isVector3(Object value) => value is api.Vector3;
Object? _Vector3_storage(Object value) => (value as api.Vector3).storage;
Object? _Vector3_length(Object value) => (value as api.Vector3).length;
Object? _Vector3_length2(Object value) => (value as api.Vector3).length2;
Object? _Vector3_isInfinite(Object value) => (value as api.Vector3).isInfinite;
Object? _Vector3_isNaN(Object value) => (value as api.Vector3).isNaN;
Object? _Vector3_xx(Object value) => (value as api.Vector3).xx;
Object? _Vector3_xy(Object value) => (value as api.Vector3).xy;
Object? _Vector3_xz(Object value) => (value as api.Vector3).xz;
Object? _Vector3_yx(Object value) => (value as api.Vector3).yx;
Object? _Vector3_yy(Object value) => (value as api.Vector3).yy;
Object? _Vector3_yz(Object value) => (value as api.Vector3).yz;
Object? _Vector3_zx(Object value) => (value as api.Vector3).zx;
Object? _Vector3_zy(Object value) => (value as api.Vector3).zy;
Object? _Vector3_zz(Object value) => (value as api.Vector3).zz;
Object? _Vector3_xxx(Object value) => (value as api.Vector3).xxx;
Object? _Vector3_xxy(Object value) => (value as api.Vector3).xxy;
Object? _Vector3_xxz(Object value) => (value as api.Vector3).xxz;
Object? _Vector3_xyx(Object value) => (value as api.Vector3).xyx;
Object? _Vector3_xyy(Object value) => (value as api.Vector3).xyy;
Object? _Vector3_xyz(Object value) => (value as api.Vector3).xyz;
Object? _Vector3_xzx(Object value) => (value as api.Vector3).xzx;
Object? _Vector3_xzy(Object value) => (value as api.Vector3).xzy;
Object? _Vector3_xzz(Object value) => (value as api.Vector3).xzz;
Object? _Vector3_yxx(Object value) => (value as api.Vector3).yxx;
Object? _Vector3_yxy(Object value) => (value as api.Vector3).yxy;
Object? _Vector3_yxz(Object value) => (value as api.Vector3).yxz;
Object? _Vector3_yyx(Object value) => (value as api.Vector3).yyx;
Object? _Vector3_yyy(Object value) => (value as api.Vector3).yyy;
Object? _Vector3_yyz(Object value) => (value as api.Vector3).yyz;
Object? _Vector3_yzx(Object value) => (value as api.Vector3).yzx;
Object? _Vector3_yzy(Object value) => (value as api.Vector3).yzy;
Object? _Vector3_yzz(Object value) => (value as api.Vector3).yzz;
Object? _Vector3_zxx(Object value) => (value as api.Vector3).zxx;
Object? _Vector3_zxy(Object value) => (value as api.Vector3).zxy;
Object? _Vector3_zxz(Object value) => (value as api.Vector3).zxz;
Object? _Vector3_zyx(Object value) => (value as api.Vector3).zyx;
Object? _Vector3_zyy(Object value) => (value as api.Vector3).zyy;
Object? _Vector3_zyz(Object value) => (value as api.Vector3).zyz;
Object? _Vector3_zzx(Object value) => (value as api.Vector3).zzx;
Object? _Vector3_zzy(Object value) => (value as api.Vector3).zzy;
Object? _Vector3_zzz(Object value) => (value as api.Vector3).zzz;
Object? _Vector3_xxxx(Object value) => (value as api.Vector3).xxxx;
Object? _Vector3_xxxy(Object value) => (value as api.Vector3).xxxy;
Object? _Vector3_xxxz(Object value) => (value as api.Vector3).xxxz;
Object? _Vector3_xxyx(Object value) => (value as api.Vector3).xxyx;
Object? _Vector3_xxyy(Object value) => (value as api.Vector3).xxyy;
Object? _Vector3_xxyz(Object value) => (value as api.Vector3).xxyz;
Object? _Vector3_xxzx(Object value) => (value as api.Vector3).xxzx;
Object? _Vector3_xxzy(Object value) => (value as api.Vector3).xxzy;
Object? _Vector3_xxzz(Object value) => (value as api.Vector3).xxzz;
Object? _Vector3_xyxx(Object value) => (value as api.Vector3).xyxx;
Object? _Vector3_xyxy(Object value) => (value as api.Vector3).xyxy;
Object? _Vector3_xyxz(Object value) => (value as api.Vector3).xyxz;
Object? _Vector3_xyyx(Object value) => (value as api.Vector3).xyyx;
Object? _Vector3_xyyy(Object value) => (value as api.Vector3).xyyy;
Object? _Vector3_xyyz(Object value) => (value as api.Vector3).xyyz;
Object? _Vector3_xyzx(Object value) => (value as api.Vector3).xyzx;
Object? _Vector3_xyzy(Object value) => (value as api.Vector3).xyzy;
Object? _Vector3_xyzz(Object value) => (value as api.Vector3).xyzz;
Object? _Vector3_xzxx(Object value) => (value as api.Vector3).xzxx;
Object? _Vector3_xzxy(Object value) => (value as api.Vector3).xzxy;
Object? _Vector3_xzxz(Object value) => (value as api.Vector3).xzxz;
Object? _Vector3_xzyx(Object value) => (value as api.Vector3).xzyx;
Object? _Vector3_xzyy(Object value) => (value as api.Vector3).xzyy;
Object? _Vector3_xzyz(Object value) => (value as api.Vector3).xzyz;
Object? _Vector3_xzzx(Object value) => (value as api.Vector3).xzzx;
Object? _Vector3_xzzy(Object value) => (value as api.Vector3).xzzy;
Object? _Vector3_xzzz(Object value) => (value as api.Vector3).xzzz;
Object? _Vector3_yxxx(Object value) => (value as api.Vector3).yxxx;
Object? _Vector3_yxxy(Object value) => (value as api.Vector3).yxxy;
Object? _Vector3_yxxz(Object value) => (value as api.Vector3).yxxz;
Object? _Vector3_yxyx(Object value) => (value as api.Vector3).yxyx;
Object? _Vector3_yxyy(Object value) => (value as api.Vector3).yxyy;
Object? _Vector3_yxyz(Object value) => (value as api.Vector3).yxyz;
Object? _Vector3_yxzx(Object value) => (value as api.Vector3).yxzx;
Object? _Vector3_yxzy(Object value) => (value as api.Vector3).yxzy;
Object? _Vector3_yxzz(Object value) => (value as api.Vector3).yxzz;
Object? _Vector3_yyxx(Object value) => (value as api.Vector3).yyxx;
Object? _Vector3_yyxy(Object value) => (value as api.Vector3).yyxy;
Object? _Vector3_yyxz(Object value) => (value as api.Vector3).yyxz;
Object? _Vector3_yyyx(Object value) => (value as api.Vector3).yyyx;
Object? _Vector3_yyyy(Object value) => (value as api.Vector3).yyyy;
Object? _Vector3_yyyz(Object value) => (value as api.Vector3).yyyz;
Object? _Vector3_yyzx(Object value) => (value as api.Vector3).yyzx;
Object? _Vector3_yyzy(Object value) => (value as api.Vector3).yyzy;
Object? _Vector3_yyzz(Object value) => (value as api.Vector3).yyzz;
Object? _Vector3_yzxx(Object value) => (value as api.Vector3).yzxx;
Object? _Vector3_yzxy(Object value) => (value as api.Vector3).yzxy;
Object? _Vector3_yzxz(Object value) => (value as api.Vector3).yzxz;
Object? _Vector3_yzyx(Object value) => (value as api.Vector3).yzyx;
Object? _Vector3_yzyy(Object value) => (value as api.Vector3).yzyy;
Object? _Vector3_yzyz(Object value) => (value as api.Vector3).yzyz;
Object? _Vector3_yzzx(Object value) => (value as api.Vector3).yzzx;
Object? _Vector3_yzzy(Object value) => (value as api.Vector3).yzzy;
Object? _Vector3_yzzz(Object value) => (value as api.Vector3).yzzz;
Object? _Vector3_zxxx(Object value) => (value as api.Vector3).zxxx;
Object? _Vector3_zxxy(Object value) => (value as api.Vector3).zxxy;
Object? _Vector3_zxxz(Object value) => (value as api.Vector3).zxxz;
Object? _Vector3_zxyx(Object value) => (value as api.Vector3).zxyx;
Object? _Vector3_zxyy(Object value) => (value as api.Vector3).zxyy;
Object? _Vector3_zxyz(Object value) => (value as api.Vector3).zxyz;
Object? _Vector3_zxzx(Object value) => (value as api.Vector3).zxzx;
Object? _Vector3_zxzy(Object value) => (value as api.Vector3).zxzy;
Object? _Vector3_zxzz(Object value) => (value as api.Vector3).zxzz;
Object? _Vector3_zyxx(Object value) => (value as api.Vector3).zyxx;
Object? _Vector3_zyxy(Object value) => (value as api.Vector3).zyxy;
Object? _Vector3_zyxz(Object value) => (value as api.Vector3).zyxz;
Object? _Vector3_zyyx(Object value) => (value as api.Vector3).zyyx;
Object? _Vector3_zyyy(Object value) => (value as api.Vector3).zyyy;
Object? _Vector3_zyyz(Object value) => (value as api.Vector3).zyyz;
Object? _Vector3_zyzx(Object value) => (value as api.Vector3).zyzx;
Object? _Vector3_zyzy(Object value) => (value as api.Vector3).zyzy;
Object? _Vector3_zyzz(Object value) => (value as api.Vector3).zyzz;
Object? _Vector3_zzxx(Object value) => (value as api.Vector3).zzxx;
Object? _Vector3_zzxy(Object value) => (value as api.Vector3).zzxy;
Object? _Vector3_zzxz(Object value) => (value as api.Vector3).zzxz;
Object? _Vector3_zzyx(Object value) => (value as api.Vector3).zzyx;
Object? _Vector3_zzyy(Object value) => (value as api.Vector3).zzyy;
Object? _Vector3_zzyz(Object value) => (value as api.Vector3).zzyz;
Object? _Vector3_zzzx(Object value) => (value as api.Vector3).zzzx;
Object? _Vector3_zzzy(Object value) => (value as api.Vector3).zzzy;
Object? _Vector3_zzzz(Object value) => (value as api.Vector3).zzzz;
Object? _Vector3_r(Object value) => (value as api.Vector3).r;
Object? _Vector3_g(Object value) => (value as api.Vector3).g;
Object? _Vector3_b(Object value) => (value as api.Vector3).b;
Object? _Vector3_s(Object value) => (value as api.Vector3).s;
Object? _Vector3_t(Object value) => (value as api.Vector3).t;
Object? _Vector3_p(Object value) => (value as api.Vector3).p;
Object? _Vector3_x(Object value) => (value as api.Vector3).x;
Object? _Vector3_y(Object value) => (value as api.Vector3).y;
Object? _Vector3_z(Object value) => (value as api.Vector3).z;
Object? _Vector3_rr(Object value) => (value as api.Vector3).rr;
Object? _Vector3_rg(Object value) => (value as api.Vector3).rg;
Object? _Vector3_rb(Object value) => (value as api.Vector3).rb;
Object? _Vector3_gr(Object value) => (value as api.Vector3).gr;
Object? _Vector3_gg(Object value) => (value as api.Vector3).gg;
Object? _Vector3_gb(Object value) => (value as api.Vector3).gb;
Object? _Vector3_br(Object value) => (value as api.Vector3).br;
Object? _Vector3_bg(Object value) => (value as api.Vector3).bg;
Object? _Vector3_bb(Object value) => (value as api.Vector3).bb;
Object? _Vector3_rrr(Object value) => (value as api.Vector3).rrr;
Object? _Vector3_rrg(Object value) => (value as api.Vector3).rrg;
Object? _Vector3_rrb(Object value) => (value as api.Vector3).rrb;
Object? _Vector3_rgr(Object value) => (value as api.Vector3).rgr;
Object? _Vector3_rgg(Object value) => (value as api.Vector3).rgg;
Object? _Vector3_rgb(Object value) => (value as api.Vector3).rgb;
Object? _Vector3_rbr(Object value) => (value as api.Vector3).rbr;
Object? _Vector3_rbg(Object value) => (value as api.Vector3).rbg;
Object? _Vector3_rbb(Object value) => (value as api.Vector3).rbb;
Object? _Vector3_grr(Object value) => (value as api.Vector3).grr;
Object? _Vector3_grg(Object value) => (value as api.Vector3).grg;
Object? _Vector3_grb(Object value) => (value as api.Vector3).grb;
Object? _Vector3_ggr(Object value) => (value as api.Vector3).ggr;
Object? _Vector3_ggg(Object value) => (value as api.Vector3).ggg;
Object? _Vector3_ggb(Object value) => (value as api.Vector3).ggb;
Object? _Vector3_gbr(Object value) => (value as api.Vector3).gbr;
Object? _Vector3_gbg(Object value) => (value as api.Vector3).gbg;
Object? _Vector3_gbb(Object value) => (value as api.Vector3).gbb;
Object? _Vector3_brr(Object value) => (value as api.Vector3).brr;
Object? _Vector3_brg(Object value) => (value as api.Vector3).brg;
Object? _Vector3_brb(Object value) => (value as api.Vector3).brb;
Object? _Vector3_bgr(Object value) => (value as api.Vector3).bgr;
Object? _Vector3_bgg(Object value) => (value as api.Vector3).bgg;
Object? _Vector3_bgb(Object value) => (value as api.Vector3).bgb;
Object? _Vector3_bbr(Object value) => (value as api.Vector3).bbr;
Object? _Vector3_bbg(Object value) => (value as api.Vector3).bbg;
Object? _Vector3_bbb(Object value) => (value as api.Vector3).bbb;
Object? _Vector3_rrrr(Object value) => (value as api.Vector3).rrrr;
Object? _Vector3_rrrg(Object value) => (value as api.Vector3).rrrg;
Object? _Vector3_rrrb(Object value) => (value as api.Vector3).rrrb;
Object? _Vector3_rrgr(Object value) => (value as api.Vector3).rrgr;
Object? _Vector3_rrgg(Object value) => (value as api.Vector3).rrgg;
Object? _Vector3_rrgb(Object value) => (value as api.Vector3).rrgb;
Object? _Vector3_rrbr(Object value) => (value as api.Vector3).rrbr;
Object? _Vector3_rrbg(Object value) => (value as api.Vector3).rrbg;
Object? _Vector3_rrbb(Object value) => (value as api.Vector3).rrbb;
Object? _Vector3_rgrr(Object value) => (value as api.Vector3).rgrr;
Object? _Vector3_rgrg(Object value) => (value as api.Vector3).rgrg;
Object? _Vector3_rgrb(Object value) => (value as api.Vector3).rgrb;
Object? _Vector3_rggr(Object value) => (value as api.Vector3).rggr;
Object? _Vector3_rggg(Object value) => (value as api.Vector3).rggg;
Object? _Vector3_rggb(Object value) => (value as api.Vector3).rggb;
Object? _Vector3_rgbr(Object value) => (value as api.Vector3).rgbr;
Object? _Vector3_rgbg(Object value) => (value as api.Vector3).rgbg;
Object? _Vector3_rgbb(Object value) => (value as api.Vector3).rgbb;
Object? _Vector3_rbrr(Object value) => (value as api.Vector3).rbrr;
Object? _Vector3_rbrg(Object value) => (value as api.Vector3).rbrg;
Object? _Vector3_rbrb(Object value) => (value as api.Vector3).rbrb;
Object? _Vector3_rbgr(Object value) => (value as api.Vector3).rbgr;
Object? _Vector3_rbgg(Object value) => (value as api.Vector3).rbgg;
Object? _Vector3_rbgb(Object value) => (value as api.Vector3).rbgb;
Object? _Vector3_rbbr(Object value) => (value as api.Vector3).rbbr;
Object? _Vector3_rbbg(Object value) => (value as api.Vector3).rbbg;
Object? _Vector3_rbbb(Object value) => (value as api.Vector3).rbbb;
Object? _Vector3_grrr(Object value) => (value as api.Vector3).grrr;
Object? _Vector3_grrg(Object value) => (value as api.Vector3).grrg;
Object? _Vector3_grrb(Object value) => (value as api.Vector3).grrb;
Object? _Vector3_grgr(Object value) => (value as api.Vector3).grgr;
Object? _Vector3_grgg(Object value) => (value as api.Vector3).grgg;
Object? _Vector3_grgb(Object value) => (value as api.Vector3).grgb;
Object? _Vector3_grbr(Object value) => (value as api.Vector3).grbr;
Object? _Vector3_grbg(Object value) => (value as api.Vector3).grbg;
Object? _Vector3_grbb(Object value) => (value as api.Vector3).grbb;
Object? _Vector3_ggrr(Object value) => (value as api.Vector3).ggrr;
Object? _Vector3_ggrg(Object value) => (value as api.Vector3).ggrg;
Object? _Vector3_ggrb(Object value) => (value as api.Vector3).ggrb;
Object? _Vector3_gggr(Object value) => (value as api.Vector3).gggr;
Object? _Vector3_gggg(Object value) => (value as api.Vector3).gggg;
Object? _Vector3_gggb(Object value) => (value as api.Vector3).gggb;
Object? _Vector3_ggbr(Object value) => (value as api.Vector3).ggbr;
Object? _Vector3_ggbg(Object value) => (value as api.Vector3).ggbg;
Object? _Vector3_ggbb(Object value) => (value as api.Vector3).ggbb;
Object? _Vector3_gbrr(Object value) => (value as api.Vector3).gbrr;
Object? _Vector3_gbrg(Object value) => (value as api.Vector3).gbrg;
Object? _Vector3_gbrb(Object value) => (value as api.Vector3).gbrb;
Object? _Vector3_gbgr(Object value) => (value as api.Vector3).gbgr;
Object? _Vector3_gbgg(Object value) => (value as api.Vector3).gbgg;
Object? _Vector3_gbgb(Object value) => (value as api.Vector3).gbgb;
Object? _Vector3_gbbr(Object value) => (value as api.Vector3).gbbr;
Object? _Vector3_gbbg(Object value) => (value as api.Vector3).gbbg;
Object? _Vector3_gbbb(Object value) => (value as api.Vector3).gbbb;
Object? _Vector3_brrr(Object value) => (value as api.Vector3).brrr;
Object? _Vector3_brrg(Object value) => (value as api.Vector3).brrg;
Object? _Vector3_brrb(Object value) => (value as api.Vector3).brrb;
Object? _Vector3_brgr(Object value) => (value as api.Vector3).brgr;
Object? _Vector3_brgg(Object value) => (value as api.Vector3).brgg;
Object? _Vector3_brgb(Object value) => (value as api.Vector3).brgb;
Object? _Vector3_brbr(Object value) => (value as api.Vector3).brbr;
Object? _Vector3_brbg(Object value) => (value as api.Vector3).brbg;
Object? _Vector3_brbb(Object value) => (value as api.Vector3).brbb;
Object? _Vector3_bgrr(Object value) => (value as api.Vector3).bgrr;
Object? _Vector3_bgrg(Object value) => (value as api.Vector3).bgrg;
Object? _Vector3_bgrb(Object value) => (value as api.Vector3).bgrb;
Object? _Vector3_bggr(Object value) => (value as api.Vector3).bggr;
Object? _Vector3_bggg(Object value) => (value as api.Vector3).bggg;
Object? _Vector3_bggb(Object value) => (value as api.Vector3).bggb;
Object? _Vector3_bgbr(Object value) => (value as api.Vector3).bgbr;
Object? _Vector3_bgbg(Object value) => (value as api.Vector3).bgbg;
Object? _Vector3_bgbb(Object value) => (value as api.Vector3).bgbb;
Object? _Vector3_bbrr(Object value) => (value as api.Vector3).bbrr;
Object? _Vector3_bbrg(Object value) => (value as api.Vector3).bbrg;
Object? _Vector3_bbrb(Object value) => (value as api.Vector3).bbrb;
Object? _Vector3_bbgr(Object value) => (value as api.Vector3).bbgr;
Object? _Vector3_bbgg(Object value) => (value as api.Vector3).bbgg;
Object? _Vector3_bbgb(Object value) => (value as api.Vector3).bbgb;
Object? _Vector3_bbbr(Object value) => (value as api.Vector3).bbbr;
Object? _Vector3_bbbg(Object value) => (value as api.Vector3).bbbg;
Object? _Vector3_bbbb(Object value) => (value as api.Vector3).bbbb;
Object? _Vector3_ss(Object value) => (value as api.Vector3).ss;
Object? _Vector3_st(Object value) => (value as api.Vector3).st;
Object? _Vector3_sp(Object value) => (value as api.Vector3).sp;
Object? _Vector3_ts(Object value) => (value as api.Vector3).ts;
Object? _Vector3_tt(Object value) => (value as api.Vector3).tt;
Object? _Vector3_tp(Object value) => (value as api.Vector3).tp;
Object? _Vector3_ps(Object value) => (value as api.Vector3).ps;
Object? _Vector3_pt(Object value) => (value as api.Vector3).pt;
Object? _Vector3_pp(Object value) => (value as api.Vector3).pp;
Object? _Vector3_sss(Object value) => (value as api.Vector3).sss;
Object? _Vector3_sst(Object value) => (value as api.Vector3).sst;
Object? _Vector3_ssp(Object value) => (value as api.Vector3).ssp;
Object? _Vector3_sts(Object value) => (value as api.Vector3).sts;
Object? _Vector3_stt(Object value) => (value as api.Vector3).stt;
Object? _Vector3_stp(Object value) => (value as api.Vector3).stp;
Object? _Vector3_sps(Object value) => (value as api.Vector3).sps;
Object? _Vector3_spt(Object value) => (value as api.Vector3).spt;
Object? _Vector3_spp(Object value) => (value as api.Vector3).spp;
Object? _Vector3_tss(Object value) => (value as api.Vector3).tss;
Object? _Vector3_tst(Object value) => (value as api.Vector3).tst;
Object? _Vector3_tsp(Object value) => (value as api.Vector3).tsp;
Object? _Vector3_tts(Object value) => (value as api.Vector3).tts;
Object? _Vector3_ttt(Object value) => (value as api.Vector3).ttt;
Object? _Vector3_ttp(Object value) => (value as api.Vector3).ttp;
Object? _Vector3_tps(Object value) => (value as api.Vector3).tps;
Object? _Vector3_tpt(Object value) => (value as api.Vector3).tpt;
Object? _Vector3_tpp(Object value) => (value as api.Vector3).tpp;
Object? _Vector3_pss(Object value) => (value as api.Vector3).pss;
Object? _Vector3_pst(Object value) => (value as api.Vector3).pst;
Object? _Vector3_psp(Object value) => (value as api.Vector3).psp;
Object? _Vector3_pts(Object value) => (value as api.Vector3).pts;
Object? _Vector3_ptt(Object value) => (value as api.Vector3).ptt;
Object? _Vector3_ptp(Object value) => (value as api.Vector3).ptp;
Object? _Vector3_pps(Object value) => (value as api.Vector3).pps;
Object? _Vector3_ppt(Object value) => (value as api.Vector3).ppt;
Object? _Vector3_ppp(Object value) => (value as api.Vector3).ppp;
Object? _Vector3_ssss(Object value) => (value as api.Vector3).ssss;
Object? _Vector3_ssst(Object value) => (value as api.Vector3).ssst;
Object? _Vector3_sssp(Object value) => (value as api.Vector3).sssp;
Object? _Vector3_ssts(Object value) => (value as api.Vector3).ssts;
Object? _Vector3_sstt(Object value) => (value as api.Vector3).sstt;
Object? _Vector3_sstp(Object value) => (value as api.Vector3).sstp;
Object? _Vector3_ssps(Object value) => (value as api.Vector3).ssps;
Object? _Vector3_sspt(Object value) => (value as api.Vector3).sspt;
Object? _Vector3_sspp(Object value) => (value as api.Vector3).sspp;
Object? _Vector3_stss(Object value) => (value as api.Vector3).stss;
Object? _Vector3_stst(Object value) => (value as api.Vector3).stst;
Object? _Vector3_stsp(Object value) => (value as api.Vector3).stsp;
Object? _Vector3_stts(Object value) => (value as api.Vector3).stts;
Object? _Vector3_sttt(Object value) => (value as api.Vector3).sttt;
Object? _Vector3_sttp(Object value) => (value as api.Vector3).sttp;
Object? _Vector3_stps(Object value) => (value as api.Vector3).stps;
Object? _Vector3_stpt(Object value) => (value as api.Vector3).stpt;
Object? _Vector3_stpp(Object value) => (value as api.Vector3).stpp;
Object? _Vector3_spss(Object value) => (value as api.Vector3).spss;
Object? _Vector3_spst(Object value) => (value as api.Vector3).spst;
Object? _Vector3_spsp(Object value) => (value as api.Vector3).spsp;
Object? _Vector3_spts(Object value) => (value as api.Vector3).spts;
Object? _Vector3_sptt(Object value) => (value as api.Vector3).sptt;
Object? _Vector3_sptp(Object value) => (value as api.Vector3).sptp;
Object? _Vector3_spps(Object value) => (value as api.Vector3).spps;
Object? _Vector3_sppt(Object value) => (value as api.Vector3).sppt;
Object? _Vector3_sppp(Object value) => (value as api.Vector3).sppp;
Object? _Vector3_tsss(Object value) => (value as api.Vector3).tsss;
Object? _Vector3_tsst(Object value) => (value as api.Vector3).tsst;
Object? _Vector3_tssp(Object value) => (value as api.Vector3).tssp;
Object? _Vector3_tsts(Object value) => (value as api.Vector3).tsts;
Object? _Vector3_tstt(Object value) => (value as api.Vector3).tstt;
Object? _Vector3_tstp(Object value) => (value as api.Vector3).tstp;
Object? _Vector3_tsps(Object value) => (value as api.Vector3).tsps;
Object? _Vector3_tspt(Object value) => (value as api.Vector3).tspt;
Object? _Vector3_tspp(Object value) => (value as api.Vector3).tspp;
Object? _Vector3_ttss(Object value) => (value as api.Vector3).ttss;
Object? _Vector3_ttst(Object value) => (value as api.Vector3).ttst;
Object? _Vector3_ttsp(Object value) => (value as api.Vector3).ttsp;
Object? _Vector3_ttts(Object value) => (value as api.Vector3).ttts;
Object? _Vector3_tttt(Object value) => (value as api.Vector3).tttt;
Object? _Vector3_tttp(Object value) => (value as api.Vector3).tttp;
Object? _Vector3_ttps(Object value) => (value as api.Vector3).ttps;
Object? _Vector3_ttpt(Object value) => (value as api.Vector3).ttpt;
Object? _Vector3_ttpp(Object value) => (value as api.Vector3).ttpp;
Object? _Vector3_tpss(Object value) => (value as api.Vector3).tpss;
Object? _Vector3_tpst(Object value) => (value as api.Vector3).tpst;
Object? _Vector3_tpsp(Object value) => (value as api.Vector3).tpsp;
Object? _Vector3_tpts(Object value) => (value as api.Vector3).tpts;
Object? _Vector3_tptt(Object value) => (value as api.Vector3).tptt;
Object? _Vector3_tptp(Object value) => (value as api.Vector3).tptp;
Object? _Vector3_tpps(Object value) => (value as api.Vector3).tpps;
Object? _Vector3_tppt(Object value) => (value as api.Vector3).tppt;
Object? _Vector3_tppp(Object value) => (value as api.Vector3).tppp;
Object? _Vector3_psss(Object value) => (value as api.Vector3).psss;
Object? _Vector3_psst(Object value) => (value as api.Vector3).psst;
Object? _Vector3_pssp(Object value) => (value as api.Vector3).pssp;
Object? _Vector3_psts(Object value) => (value as api.Vector3).psts;
Object? _Vector3_pstt(Object value) => (value as api.Vector3).pstt;
Object? _Vector3_pstp(Object value) => (value as api.Vector3).pstp;
Object? _Vector3_psps(Object value) => (value as api.Vector3).psps;
Object? _Vector3_pspt(Object value) => (value as api.Vector3).pspt;
Object? _Vector3_pspp(Object value) => (value as api.Vector3).pspp;
Object? _Vector3_ptss(Object value) => (value as api.Vector3).ptss;
Object? _Vector3_ptst(Object value) => (value as api.Vector3).ptst;
Object? _Vector3_ptsp(Object value) => (value as api.Vector3).ptsp;
Object? _Vector3_ptts(Object value) => (value as api.Vector3).ptts;
Object? _Vector3_pttt(Object value) => (value as api.Vector3).pttt;
Object? _Vector3_pttp(Object value) => (value as api.Vector3).pttp;
Object? _Vector3_ptps(Object value) => (value as api.Vector3).ptps;
Object? _Vector3_ptpt(Object value) => (value as api.Vector3).ptpt;
Object? _Vector3_ptpp(Object value) => (value as api.Vector3).ptpp;
Object? _Vector3_ppss(Object value) => (value as api.Vector3).ppss;
Object? _Vector3_ppst(Object value) => (value as api.Vector3).ppst;
Object? _Vector3_ppsp(Object value) => (value as api.Vector3).ppsp;
Object? _Vector3_ppts(Object value) => (value as api.Vector3).ppts;
Object? _Vector3_pptt(Object value) => (value as api.Vector3).pptt;
Object? _Vector3_pptp(Object value) => (value as api.Vector3).pptp;
Object? _Vector3_ppps(Object value) => (value as api.Vector3).ppps;
Object? _Vector3_pppt(Object value) => (value as api.Vector3).pppt;
Object? _Vector3_pppp(Object value) => (value as api.Vector3).pppp;
void _Vector3_set_length(Object receiver, Object? value) {
  (receiver as api.Vector3).length = value as double;
}

void _Vector3_set_xy(Object receiver, Object? value) {
  (receiver as api.Vector3).xy = value as api.Vector2;
}

void _Vector3_set_xz(Object receiver, Object? value) {
  (receiver as api.Vector3).xz = value as api.Vector2;
}

void _Vector3_set_yx(Object receiver, Object? value) {
  (receiver as api.Vector3).yx = value as api.Vector2;
}

void _Vector3_set_yz(Object receiver, Object? value) {
  (receiver as api.Vector3).yz = value as api.Vector2;
}

void _Vector3_set_zx(Object receiver, Object? value) {
  (receiver as api.Vector3).zx = value as api.Vector2;
}

void _Vector3_set_zy(Object receiver, Object? value) {
  (receiver as api.Vector3).zy = value as api.Vector2;
}

void _Vector3_set_xyz(Object receiver, Object? value) {
  (receiver as api.Vector3).xyz = value as api.Vector3;
}

void _Vector3_set_xzy(Object receiver, Object? value) {
  (receiver as api.Vector3).xzy = value as api.Vector3;
}

void _Vector3_set_yxz(Object receiver, Object? value) {
  (receiver as api.Vector3).yxz = value as api.Vector3;
}

void _Vector3_set_yzx(Object receiver, Object? value) {
  (receiver as api.Vector3).yzx = value as api.Vector3;
}

void _Vector3_set_zxy(Object receiver, Object? value) {
  (receiver as api.Vector3).zxy = value as api.Vector3;
}

void _Vector3_set_zyx(Object receiver, Object? value) {
  (receiver as api.Vector3).zyx = value as api.Vector3;
}

void _Vector3_set_r(Object receiver, Object? value) {
  (receiver as api.Vector3).r = value as double;
}

void _Vector3_set_g(Object receiver, Object? value) {
  (receiver as api.Vector3).g = value as double;
}

void _Vector3_set_b(Object receiver, Object? value) {
  (receiver as api.Vector3).b = value as double;
}

void _Vector3_set_s(Object receiver, Object? value) {
  (receiver as api.Vector3).s = value as double;
}

void _Vector3_set_t(Object receiver, Object? value) {
  (receiver as api.Vector3).t = value as double;
}

void _Vector3_set_p(Object receiver, Object? value) {
  (receiver as api.Vector3).p = value as double;
}

void _Vector3_set_x(Object receiver, Object? value) {
  (receiver as api.Vector3).x = value as double;
}

void _Vector3_set_y(Object receiver, Object? value) {
  (receiver as api.Vector3).y = value as double;
}

void _Vector3_set_z(Object receiver, Object? value) {
  (receiver as api.Vector3).z = value as double;
}

void _Vector3_set_rg(Object receiver, Object? value) {
  (receiver as api.Vector3).rg = value as api.Vector2;
}

void _Vector3_set_rb(Object receiver, Object? value) {
  (receiver as api.Vector3).rb = value as api.Vector2;
}

void _Vector3_set_gr(Object receiver, Object? value) {
  (receiver as api.Vector3).gr = value as api.Vector2;
}

void _Vector3_set_gb(Object receiver, Object? value) {
  (receiver as api.Vector3).gb = value as api.Vector2;
}

void _Vector3_set_br(Object receiver, Object? value) {
  (receiver as api.Vector3).br = value as api.Vector2;
}

void _Vector3_set_bg(Object receiver, Object? value) {
  (receiver as api.Vector3).bg = value as api.Vector2;
}

void _Vector3_set_rgb(Object receiver, Object? value) {
  (receiver as api.Vector3).rgb = value as api.Vector3;
}

void _Vector3_set_rbg(Object receiver, Object? value) {
  (receiver as api.Vector3).rbg = value as api.Vector3;
}

void _Vector3_set_grb(Object receiver, Object? value) {
  (receiver as api.Vector3).grb = value as api.Vector3;
}

void _Vector3_set_gbr(Object receiver, Object? value) {
  (receiver as api.Vector3).gbr = value as api.Vector3;
}

void _Vector3_set_brg(Object receiver, Object? value) {
  (receiver as api.Vector3).brg = value as api.Vector3;
}

void _Vector3_set_bgr(Object receiver, Object? value) {
  (receiver as api.Vector3).bgr = value as api.Vector3;
}

void _Vector3_set_st(Object receiver, Object? value) {
  (receiver as api.Vector3).st = value as api.Vector2;
}

void _Vector3_set_sp(Object receiver, Object? value) {
  (receiver as api.Vector3).sp = value as api.Vector2;
}

void _Vector3_set_ts(Object receiver, Object? value) {
  (receiver as api.Vector3).ts = value as api.Vector2;
}

void _Vector3_set_tp(Object receiver, Object? value) {
  (receiver as api.Vector3).tp = value as api.Vector2;
}

void _Vector3_set_ps(Object receiver, Object? value) {
  (receiver as api.Vector3).ps = value as api.Vector2;
}

void _Vector3_set_pt(Object receiver, Object? value) {
  (receiver as api.Vector3).pt = value as api.Vector2;
}

void _Vector3_set_stp(Object receiver, Object? value) {
  (receiver as api.Vector3).stp = value as api.Vector3;
}

void _Vector3_set_spt(Object receiver, Object? value) {
  (receiver as api.Vector3).spt = value as api.Vector3;
}

void _Vector3_set_tsp(Object receiver, Object? value) {
  (receiver as api.Vector3).tsp = value as api.Vector3;
}

void _Vector3_set_tps(Object receiver, Object? value) {
  (receiver as api.Vector3).tps = value as api.Vector3;
}

void _Vector3_set_pst(Object receiver, Object? value) {
  (receiver as api.Vector3).pst = value as api.Vector3;
}

void _Vector3_set_pts(Object receiver, Object? value) {
  (receiver as api.Vector3).pts = value as api.Vector3;
}

Object? _Vector3_min(Map<String, Object?> values) {
  api.Vector3.min(
    values["a"] as api.Vector3,
    values["b"] as api.Vector3,
    values["result"] as api.Vector3,
  );
  return null;
}

Object? _Vector3_max(Map<String, Object?> values) {
  api.Vector3.max(
    values["a"] as api.Vector3,
    values["b"] as api.Vector3,
    values["result"] as api.Vector3,
  );
  return null;
}

Object? _Vector3_mix(Map<String, Object?> values) {
  api.Vector3.mix(
    values["min"] as api.Vector3,
    values["max"] as api.Vector3,
    values["a"] as double,
    values["result"] as api.Vector3,
  );
  return null;
}

Object? _Vector3_setValues(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector3).setValues(
    values["x"] as double,
    values["y"] as double,
    values["z"] as double,
  );
  return null;
}

Object? _Vector3_setZero(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector3).setZero();
  return null;
}

Object? _Vector3_setFrom(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector3).setFrom(values["other"] as api.Vector3);
  return null;
}

Object? _Vector3_splat(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector3).splat(values["arg"] as double);
  return null;
}

Object? _Vector3_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector3).toString();
}

Object? _Vector3_normalize(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector3).normalize();
}

Object? _Vector3_normalizeLength(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector3).normalizeLength();
}

Object? _Vector3_normalized(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector3).normalized();
}

Object? _Vector3_normalizeInto(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector3).normalizeInto(values["out"] as api.Vector3);
}

Object? _Vector3_distanceTo(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector3).distanceTo(values["arg"] as api.Vector3);
}

Object? _Vector3_distanceToSquared(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Vector3).distanceToSquared(
    values["arg"] as api.Vector3,
  );
}

Object? _Vector3_angleTo(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector3).angleTo(values["other"] as api.Vector3);
}

Object? _Vector3_angleToSigned(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector3).angleToSigned(
    values["other"] as api.Vector3,
    values["normal"] as api.Vector3,
  );
}

Object? _Vector3_dot(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector3).dot(values["other"] as api.Vector3);
}

Object? _Vector3_postmultiply(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector3).postmultiply(values["arg"] as api.Matrix3);
  return null;
}

Object? _Vector3_cross(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector3).cross(values["other"] as api.Vector3);
}

Object? _Vector3_crossInto(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector3).crossInto(
    values["other"] as api.Vector3,
    values["out"] as api.Vector3,
  );
}

Object? _Vector3_reflect(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector3).reflect(values["normal"] as api.Vector3);
  return null;
}

Object? _Vector3_reflected(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector3).reflected(values["normal"] as api.Vector3);
}

Object? _Vector3_applyProjection(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector3).applyProjection(values["arg"] as api.Matrix4);
  return null;
}

Object? _Vector3_applyAxisAngle(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector3).applyAxisAngle(
    values["axis"] as api.Vector3,
    values["angle"] as double,
  );
  return null;
}

Object? _Vector3_applyQuaternion(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector3).applyQuaternion(values["arg"] as api.Quaternion);
  return null;
}

Object? _Vector3_applyMatrix3(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector3).applyMatrix3(values["arg"] as api.Matrix3);
  return null;
}

Object? _Vector3_applyMatrix4(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector3).applyMatrix4(values["arg"] as api.Matrix4);
  return null;
}

Object? _Vector3_relativeError(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector3).relativeError(
    values["correct"] as api.Vector3,
  );
}

Object? _Vector3_absoluteError(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector3).absoluteError(
    values["correct"] as api.Vector3,
  );
}

Object? _Vector3_add(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector3).add(values["arg"] as api.Vector3);
  return null;
}

Object? _Vector3_addScaled(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector3).addScaled(
    values["arg"] as api.Vector3,
    values["factor"] as double,
  );
  return null;
}

Object? _Vector3_sub(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector3).sub(values["arg"] as api.Vector3);
  return null;
}

Object? _Vector3_multiply(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector3).multiply(values["arg"] as api.Vector3);
  return null;
}

Object? _Vector3_divide(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector3).divide(values["arg"] as api.Vector3);
  return null;
}

Object? _Vector3_scale(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector3).scale(values["arg"] as double);
  return null;
}

Object? _Vector3_scaled(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector3).scaled(values["arg"] as double);
}

Object? _Vector3_negate(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector3).negate();
  return null;
}

Object? _Vector3_absolute(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector3).absolute();
  return null;
}

Object? _Vector3_clamp(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector3).clamp(
    values["min"] as api.Vector3,
    values["max"] as api.Vector3,
  );
  return null;
}

Object? _Vector3_clampScalar(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector3).clampScalar(
    values["min"] as double,
    values["max"] as double,
  );
  return null;
}

Object? _Vector3_floor(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector3).floor();
  return null;
}

Object? _Vector3_ceil(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector3).ceil();
  return null;
}

Object? _Vector3_round(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector3).round();
  return null;
}

Object? _Vector3_roundToZero(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector3).roundToZero();
  return null;
}

Object? _Vector3_clone(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector3).clone();
}

Object? _Vector3_copyInto(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector3).copyInto(values["arg"] as api.Vector3);
}

Object? _Vector3_copyIntoArray(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector3).copyIntoArray(
    values["array"] as List<double>,
    values["offset"] as int,
  );
  return null;
}

Object? _Vector3_copyFromArray(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector3).copyFromArray(
    values["array"] as List<double>,
    values["offset"] as int,
  );
  return null;
}

Object? _Vector3_operatorGetIndex(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Vector3)[values["i"] as int];
}

Object? _Vector3_operatorSetIndex(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.Vector3)[values["i"] as int] = values["v"] as double;
  return null;
}

Object? _Vector3_operatorAdd(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector3) + (values["other"] as api.Vector3);
}

Object? _Vector3_operatorSubtract(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Vector3) - (values["other"] as api.Vector3);
}

Object? _Vector3_operatorMultiply(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Vector3) * (values["scale"] as double);
}

Object? _Vector3_operatorDivide(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector3) / (values["scale"] as double);
}

Object? _Vector3_operatorNegate(Object receiver, Map<String, Object?> values) {
  return -(receiver as api.Vector3);
}

Object _createVector3(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Vector3(
        values["x"] as double,
        values["y"] as double,
        values["z"] as double,
      );
    case "array":
      return api.Vector3.array(
        values["array"] as List<double>,
        values["offset"] as int,
      );
    case "zero":
      return api.Vector3.zero();
    case "all":
      return api.Vector3.all(values["value"] as double);
    case "copy":
      return api.Vector3.copy(values["other"] as api.Vector3);
    case "fromFloat64List":
      return api.Vector3.fromFloat64List(
        values["_v3storage"] as api2.Float64List,
      );
    case "fromBuffer":
      return api.Vector3.fromBuffer(
        values["buffer"] as api2.ByteBuffer,
        values["offset"] as int,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isVector4(Object value) => value is api.Vector4;
Object? _Vector4_storage(Object value) => (value as api.Vector4).storage;
Object? _Vector4_length(Object value) => (value as api.Vector4).length;
Object? _Vector4_length2(Object value) => (value as api.Vector4).length2;
Object? _Vector4_isInfinite(Object value) => (value as api.Vector4).isInfinite;
Object? _Vector4_isNaN(Object value) => (value as api.Vector4).isNaN;
Object? _Vector4_xx(Object value) => (value as api.Vector4).xx;
Object? _Vector4_xy(Object value) => (value as api.Vector4).xy;
Object? _Vector4_xz(Object value) => (value as api.Vector4).xz;
Object? _Vector4_xw(Object value) => (value as api.Vector4).xw;
Object? _Vector4_yx(Object value) => (value as api.Vector4).yx;
Object? _Vector4_yy(Object value) => (value as api.Vector4).yy;
Object? _Vector4_yz(Object value) => (value as api.Vector4).yz;
Object? _Vector4_yw(Object value) => (value as api.Vector4).yw;
Object? _Vector4_zx(Object value) => (value as api.Vector4).zx;
Object? _Vector4_zy(Object value) => (value as api.Vector4).zy;
Object? _Vector4_zz(Object value) => (value as api.Vector4).zz;
Object? _Vector4_zw(Object value) => (value as api.Vector4).zw;
Object? _Vector4_wx(Object value) => (value as api.Vector4).wx;
Object? _Vector4_wy(Object value) => (value as api.Vector4).wy;
Object? _Vector4_wz(Object value) => (value as api.Vector4).wz;
Object? _Vector4_ww(Object value) => (value as api.Vector4).ww;
Object? _Vector4_xxx(Object value) => (value as api.Vector4).xxx;
Object? _Vector4_xxy(Object value) => (value as api.Vector4).xxy;
Object? _Vector4_xxz(Object value) => (value as api.Vector4).xxz;
Object? _Vector4_xxw(Object value) => (value as api.Vector4).xxw;
Object? _Vector4_xyx(Object value) => (value as api.Vector4).xyx;
Object? _Vector4_xyy(Object value) => (value as api.Vector4).xyy;
Object? _Vector4_xyz(Object value) => (value as api.Vector4).xyz;
Object? _Vector4_xyw(Object value) => (value as api.Vector4).xyw;
Object? _Vector4_xzx(Object value) => (value as api.Vector4).xzx;
Object? _Vector4_xzy(Object value) => (value as api.Vector4).xzy;
Object? _Vector4_xzz(Object value) => (value as api.Vector4).xzz;
Object? _Vector4_xzw(Object value) => (value as api.Vector4).xzw;
Object? _Vector4_xwx(Object value) => (value as api.Vector4).xwx;
Object? _Vector4_xwy(Object value) => (value as api.Vector4).xwy;
Object? _Vector4_xwz(Object value) => (value as api.Vector4).xwz;
Object? _Vector4_xww(Object value) => (value as api.Vector4).xww;
Object? _Vector4_yxx(Object value) => (value as api.Vector4).yxx;
Object? _Vector4_yxy(Object value) => (value as api.Vector4).yxy;
Object? _Vector4_yxz(Object value) => (value as api.Vector4).yxz;
Object? _Vector4_yxw(Object value) => (value as api.Vector4).yxw;
Object? _Vector4_yyx(Object value) => (value as api.Vector4).yyx;
Object? _Vector4_yyy(Object value) => (value as api.Vector4).yyy;
Object? _Vector4_yyz(Object value) => (value as api.Vector4).yyz;
Object? _Vector4_yyw(Object value) => (value as api.Vector4).yyw;
Object? _Vector4_yzx(Object value) => (value as api.Vector4).yzx;
Object? _Vector4_yzy(Object value) => (value as api.Vector4).yzy;
Object? _Vector4_yzz(Object value) => (value as api.Vector4).yzz;
Object? _Vector4_yzw(Object value) => (value as api.Vector4).yzw;
Object? _Vector4_ywx(Object value) => (value as api.Vector4).ywx;
Object? _Vector4_ywy(Object value) => (value as api.Vector4).ywy;
Object? _Vector4_ywz(Object value) => (value as api.Vector4).ywz;
Object? _Vector4_yww(Object value) => (value as api.Vector4).yww;
Object? _Vector4_zxx(Object value) => (value as api.Vector4).zxx;
Object? _Vector4_zxy(Object value) => (value as api.Vector4).zxy;
Object? _Vector4_zxz(Object value) => (value as api.Vector4).zxz;
Object? _Vector4_zxw(Object value) => (value as api.Vector4).zxw;
Object? _Vector4_zyx(Object value) => (value as api.Vector4).zyx;
Object? _Vector4_zyy(Object value) => (value as api.Vector4).zyy;
Object? _Vector4_zyz(Object value) => (value as api.Vector4).zyz;
Object? _Vector4_zyw(Object value) => (value as api.Vector4).zyw;
Object? _Vector4_zzx(Object value) => (value as api.Vector4).zzx;
Object? _Vector4_zzy(Object value) => (value as api.Vector4).zzy;
Object? _Vector4_zzz(Object value) => (value as api.Vector4).zzz;
Object? _Vector4_zzw(Object value) => (value as api.Vector4).zzw;
Object? _Vector4_zwx(Object value) => (value as api.Vector4).zwx;
Object? _Vector4_zwy(Object value) => (value as api.Vector4).zwy;
Object? _Vector4_zwz(Object value) => (value as api.Vector4).zwz;
Object? _Vector4_zww(Object value) => (value as api.Vector4).zww;
Object? _Vector4_wxx(Object value) => (value as api.Vector4).wxx;
Object? _Vector4_wxy(Object value) => (value as api.Vector4).wxy;
Object? _Vector4_wxz(Object value) => (value as api.Vector4).wxz;
Object? _Vector4_wxw(Object value) => (value as api.Vector4).wxw;
Object? _Vector4_wyx(Object value) => (value as api.Vector4).wyx;
Object? _Vector4_wyy(Object value) => (value as api.Vector4).wyy;
Object? _Vector4_wyz(Object value) => (value as api.Vector4).wyz;
Object? _Vector4_wyw(Object value) => (value as api.Vector4).wyw;
Object? _Vector4_wzx(Object value) => (value as api.Vector4).wzx;
Object? _Vector4_wzy(Object value) => (value as api.Vector4).wzy;
Object? _Vector4_wzz(Object value) => (value as api.Vector4).wzz;
Object? _Vector4_wzw(Object value) => (value as api.Vector4).wzw;
Object? _Vector4_wwx(Object value) => (value as api.Vector4).wwx;
Object? _Vector4_wwy(Object value) => (value as api.Vector4).wwy;
Object? _Vector4_wwz(Object value) => (value as api.Vector4).wwz;
Object? _Vector4_www(Object value) => (value as api.Vector4).www;
Object? _Vector4_xxxx(Object value) => (value as api.Vector4).xxxx;
Object? _Vector4_xxxy(Object value) => (value as api.Vector4).xxxy;
Object? _Vector4_xxxz(Object value) => (value as api.Vector4).xxxz;
Object? _Vector4_xxxw(Object value) => (value as api.Vector4).xxxw;
Object? _Vector4_xxyx(Object value) => (value as api.Vector4).xxyx;
Object? _Vector4_xxyy(Object value) => (value as api.Vector4).xxyy;
Object? _Vector4_xxyz(Object value) => (value as api.Vector4).xxyz;
Object? _Vector4_xxyw(Object value) => (value as api.Vector4).xxyw;
Object? _Vector4_xxzx(Object value) => (value as api.Vector4).xxzx;
Object? _Vector4_xxzy(Object value) => (value as api.Vector4).xxzy;
Object? _Vector4_xxzz(Object value) => (value as api.Vector4).xxzz;
Object? _Vector4_xxzw(Object value) => (value as api.Vector4).xxzw;
Object? _Vector4_xxwx(Object value) => (value as api.Vector4).xxwx;
Object? _Vector4_xxwy(Object value) => (value as api.Vector4).xxwy;
Object? _Vector4_xxwz(Object value) => (value as api.Vector4).xxwz;
Object? _Vector4_xxww(Object value) => (value as api.Vector4).xxww;
Object? _Vector4_xyxx(Object value) => (value as api.Vector4).xyxx;
Object? _Vector4_xyxy(Object value) => (value as api.Vector4).xyxy;
Object? _Vector4_xyxz(Object value) => (value as api.Vector4).xyxz;
Object? _Vector4_xyxw(Object value) => (value as api.Vector4).xyxw;
Object? _Vector4_xyyx(Object value) => (value as api.Vector4).xyyx;
Object? _Vector4_xyyy(Object value) => (value as api.Vector4).xyyy;
Object? _Vector4_xyyz(Object value) => (value as api.Vector4).xyyz;
Object? _Vector4_xyyw(Object value) => (value as api.Vector4).xyyw;
Object? _Vector4_xyzx(Object value) => (value as api.Vector4).xyzx;
Object? _Vector4_xyzy(Object value) => (value as api.Vector4).xyzy;
Object? _Vector4_xyzz(Object value) => (value as api.Vector4).xyzz;
Object? _Vector4_xyzw(Object value) => (value as api.Vector4).xyzw;
Object? _Vector4_xywx(Object value) => (value as api.Vector4).xywx;
Object? _Vector4_xywy(Object value) => (value as api.Vector4).xywy;
Object? _Vector4_xywz(Object value) => (value as api.Vector4).xywz;
Object? _Vector4_xyww(Object value) => (value as api.Vector4).xyww;
Object? _Vector4_xzxx(Object value) => (value as api.Vector4).xzxx;
Object? _Vector4_xzxy(Object value) => (value as api.Vector4).xzxy;
Object? _Vector4_xzxz(Object value) => (value as api.Vector4).xzxz;
Object? _Vector4_xzxw(Object value) => (value as api.Vector4).xzxw;
Object? _Vector4_xzyx(Object value) => (value as api.Vector4).xzyx;
Object? _Vector4_xzyy(Object value) => (value as api.Vector4).xzyy;
Object? _Vector4_xzyz(Object value) => (value as api.Vector4).xzyz;
Object? _Vector4_xzyw(Object value) => (value as api.Vector4).xzyw;
Object? _Vector4_xzzx(Object value) => (value as api.Vector4).xzzx;
Object? _Vector4_xzzy(Object value) => (value as api.Vector4).xzzy;
Object? _Vector4_xzzz(Object value) => (value as api.Vector4).xzzz;
Object? _Vector4_xzzw(Object value) => (value as api.Vector4).xzzw;
Object? _Vector4_xzwx(Object value) => (value as api.Vector4).xzwx;
Object? _Vector4_xzwy(Object value) => (value as api.Vector4).xzwy;
Object? _Vector4_xzwz(Object value) => (value as api.Vector4).xzwz;
Object? _Vector4_xzww(Object value) => (value as api.Vector4).xzww;
Object? _Vector4_xwxx(Object value) => (value as api.Vector4).xwxx;
Object? _Vector4_xwxy(Object value) => (value as api.Vector4).xwxy;
Object? _Vector4_xwxz(Object value) => (value as api.Vector4).xwxz;
Object? _Vector4_xwxw(Object value) => (value as api.Vector4).xwxw;
Object? _Vector4_xwyx(Object value) => (value as api.Vector4).xwyx;
Object? _Vector4_xwyy(Object value) => (value as api.Vector4).xwyy;
Object? _Vector4_xwyz(Object value) => (value as api.Vector4).xwyz;
Object? _Vector4_xwyw(Object value) => (value as api.Vector4).xwyw;
Object? _Vector4_xwzx(Object value) => (value as api.Vector4).xwzx;
Object? _Vector4_xwzy(Object value) => (value as api.Vector4).xwzy;
Object? _Vector4_xwzz(Object value) => (value as api.Vector4).xwzz;
Object? _Vector4_xwzw(Object value) => (value as api.Vector4).xwzw;
Object? _Vector4_xwwx(Object value) => (value as api.Vector4).xwwx;
Object? _Vector4_xwwy(Object value) => (value as api.Vector4).xwwy;
Object? _Vector4_xwwz(Object value) => (value as api.Vector4).xwwz;
Object? _Vector4_xwww(Object value) => (value as api.Vector4).xwww;
Object? _Vector4_yxxx(Object value) => (value as api.Vector4).yxxx;
Object? _Vector4_yxxy(Object value) => (value as api.Vector4).yxxy;
Object? _Vector4_yxxz(Object value) => (value as api.Vector4).yxxz;
Object? _Vector4_yxxw(Object value) => (value as api.Vector4).yxxw;
Object? _Vector4_yxyx(Object value) => (value as api.Vector4).yxyx;
Object? _Vector4_yxyy(Object value) => (value as api.Vector4).yxyy;
Object? _Vector4_yxyz(Object value) => (value as api.Vector4).yxyz;
Object? _Vector4_yxyw(Object value) => (value as api.Vector4).yxyw;
Object? _Vector4_yxzx(Object value) => (value as api.Vector4).yxzx;
Object? _Vector4_yxzy(Object value) => (value as api.Vector4).yxzy;
Object? _Vector4_yxzz(Object value) => (value as api.Vector4).yxzz;
Object? _Vector4_yxzw(Object value) => (value as api.Vector4).yxzw;
Object? _Vector4_yxwx(Object value) => (value as api.Vector4).yxwx;
Object? _Vector4_yxwy(Object value) => (value as api.Vector4).yxwy;
Object? _Vector4_yxwz(Object value) => (value as api.Vector4).yxwz;
Object? _Vector4_yxww(Object value) => (value as api.Vector4).yxww;
Object? _Vector4_yyxx(Object value) => (value as api.Vector4).yyxx;
Object? _Vector4_yyxy(Object value) => (value as api.Vector4).yyxy;
Object? _Vector4_yyxz(Object value) => (value as api.Vector4).yyxz;
Object? _Vector4_yyxw(Object value) => (value as api.Vector4).yyxw;
Object? _Vector4_yyyx(Object value) => (value as api.Vector4).yyyx;
Object? _Vector4_yyyy(Object value) => (value as api.Vector4).yyyy;
Object? _Vector4_yyyz(Object value) => (value as api.Vector4).yyyz;
Object? _Vector4_yyyw(Object value) => (value as api.Vector4).yyyw;
Object? _Vector4_yyzx(Object value) => (value as api.Vector4).yyzx;
Object? _Vector4_yyzy(Object value) => (value as api.Vector4).yyzy;
Object? _Vector4_yyzz(Object value) => (value as api.Vector4).yyzz;
Object? _Vector4_yyzw(Object value) => (value as api.Vector4).yyzw;
Object? _Vector4_yywx(Object value) => (value as api.Vector4).yywx;
Object? _Vector4_yywy(Object value) => (value as api.Vector4).yywy;
Object? _Vector4_yywz(Object value) => (value as api.Vector4).yywz;
Object? _Vector4_yyww(Object value) => (value as api.Vector4).yyww;
Object? _Vector4_yzxx(Object value) => (value as api.Vector4).yzxx;
Object? _Vector4_yzxy(Object value) => (value as api.Vector4).yzxy;
Object? _Vector4_yzxz(Object value) => (value as api.Vector4).yzxz;
Object? _Vector4_yzxw(Object value) => (value as api.Vector4).yzxw;
Object? _Vector4_yzyx(Object value) => (value as api.Vector4).yzyx;
Object? _Vector4_yzyy(Object value) => (value as api.Vector4).yzyy;
Object? _Vector4_yzyz(Object value) => (value as api.Vector4).yzyz;
Object? _Vector4_yzyw(Object value) => (value as api.Vector4).yzyw;
Object? _Vector4_yzzx(Object value) => (value as api.Vector4).yzzx;
Object? _Vector4_yzzy(Object value) => (value as api.Vector4).yzzy;
Object? _Vector4_yzzz(Object value) => (value as api.Vector4).yzzz;
Object? _Vector4_yzzw(Object value) => (value as api.Vector4).yzzw;
Object? _Vector4_yzwx(Object value) => (value as api.Vector4).yzwx;
Object? _Vector4_yzwy(Object value) => (value as api.Vector4).yzwy;
Object? _Vector4_yzwz(Object value) => (value as api.Vector4).yzwz;
Object? _Vector4_yzww(Object value) => (value as api.Vector4).yzww;
Object? _Vector4_ywxx(Object value) => (value as api.Vector4).ywxx;
Object? _Vector4_ywxy(Object value) => (value as api.Vector4).ywxy;
Object? _Vector4_ywxz(Object value) => (value as api.Vector4).ywxz;
Object? _Vector4_ywxw(Object value) => (value as api.Vector4).ywxw;
Object? _Vector4_ywyx(Object value) => (value as api.Vector4).ywyx;
Object? _Vector4_ywyy(Object value) => (value as api.Vector4).ywyy;
Object? _Vector4_ywyz(Object value) => (value as api.Vector4).ywyz;
Object? _Vector4_ywyw(Object value) => (value as api.Vector4).ywyw;
Object? _Vector4_ywzx(Object value) => (value as api.Vector4).ywzx;
Object? _Vector4_ywzy(Object value) => (value as api.Vector4).ywzy;
Object? _Vector4_ywzz(Object value) => (value as api.Vector4).ywzz;
Object? _Vector4_ywzw(Object value) => (value as api.Vector4).ywzw;
Object? _Vector4_ywwx(Object value) => (value as api.Vector4).ywwx;
Object? _Vector4_ywwy(Object value) => (value as api.Vector4).ywwy;
Object? _Vector4_ywwz(Object value) => (value as api.Vector4).ywwz;
Object? _Vector4_ywww(Object value) => (value as api.Vector4).ywww;
Object? _Vector4_zxxx(Object value) => (value as api.Vector4).zxxx;
Object? _Vector4_zxxy(Object value) => (value as api.Vector4).zxxy;
Object? _Vector4_zxxz(Object value) => (value as api.Vector4).zxxz;
Object? _Vector4_zxxw(Object value) => (value as api.Vector4).zxxw;
Object? _Vector4_zxyx(Object value) => (value as api.Vector4).zxyx;
Object? _Vector4_zxyy(Object value) => (value as api.Vector4).zxyy;
Object? _Vector4_zxyz(Object value) => (value as api.Vector4).zxyz;
Object? _Vector4_zxyw(Object value) => (value as api.Vector4).zxyw;
Object? _Vector4_zxzx(Object value) => (value as api.Vector4).zxzx;
Object? _Vector4_zxzy(Object value) => (value as api.Vector4).zxzy;
Object? _Vector4_zxzz(Object value) => (value as api.Vector4).zxzz;
Object? _Vector4_zxzw(Object value) => (value as api.Vector4).zxzw;
Object? _Vector4_zxwx(Object value) => (value as api.Vector4).zxwx;
Object? _Vector4_zxwy(Object value) => (value as api.Vector4).zxwy;
Object? _Vector4_zxwz(Object value) => (value as api.Vector4).zxwz;
Object? _Vector4_zxww(Object value) => (value as api.Vector4).zxww;
Object? _Vector4_zyxx(Object value) => (value as api.Vector4).zyxx;
Object? _Vector4_zyxy(Object value) => (value as api.Vector4).zyxy;
Object? _Vector4_zyxz(Object value) => (value as api.Vector4).zyxz;
Object? _Vector4_zyxw(Object value) => (value as api.Vector4).zyxw;
Object? _Vector4_zyyx(Object value) => (value as api.Vector4).zyyx;
Object? _Vector4_zyyy(Object value) => (value as api.Vector4).zyyy;
Object? _Vector4_zyyz(Object value) => (value as api.Vector4).zyyz;
Object? _Vector4_zyyw(Object value) => (value as api.Vector4).zyyw;
Object? _Vector4_zyzx(Object value) => (value as api.Vector4).zyzx;
Object? _Vector4_zyzy(Object value) => (value as api.Vector4).zyzy;
Object? _Vector4_zyzz(Object value) => (value as api.Vector4).zyzz;
Object? _Vector4_zyzw(Object value) => (value as api.Vector4).zyzw;
Object? _Vector4_zywx(Object value) => (value as api.Vector4).zywx;
Object? _Vector4_zywy(Object value) => (value as api.Vector4).zywy;
Object? _Vector4_zywz(Object value) => (value as api.Vector4).zywz;
Object? _Vector4_zyww(Object value) => (value as api.Vector4).zyww;
Object? _Vector4_zzxx(Object value) => (value as api.Vector4).zzxx;
Object? _Vector4_zzxy(Object value) => (value as api.Vector4).zzxy;
Object? _Vector4_zzxz(Object value) => (value as api.Vector4).zzxz;
Object? _Vector4_zzxw(Object value) => (value as api.Vector4).zzxw;
Object? _Vector4_zzyx(Object value) => (value as api.Vector4).zzyx;
Object? _Vector4_zzyy(Object value) => (value as api.Vector4).zzyy;
Object? _Vector4_zzyz(Object value) => (value as api.Vector4).zzyz;
Object? _Vector4_zzyw(Object value) => (value as api.Vector4).zzyw;
Object? _Vector4_zzzx(Object value) => (value as api.Vector4).zzzx;
Object? _Vector4_zzzy(Object value) => (value as api.Vector4).zzzy;
Object? _Vector4_zzzz(Object value) => (value as api.Vector4).zzzz;
Object? _Vector4_zzzw(Object value) => (value as api.Vector4).zzzw;
Object? _Vector4_zzwx(Object value) => (value as api.Vector4).zzwx;
Object? _Vector4_zzwy(Object value) => (value as api.Vector4).zzwy;
Object? _Vector4_zzwz(Object value) => (value as api.Vector4).zzwz;
Object? _Vector4_zzww(Object value) => (value as api.Vector4).zzww;
Object? _Vector4_zwxx(Object value) => (value as api.Vector4).zwxx;
Object? _Vector4_zwxy(Object value) => (value as api.Vector4).zwxy;
Object? _Vector4_zwxz(Object value) => (value as api.Vector4).zwxz;
Object? _Vector4_zwxw(Object value) => (value as api.Vector4).zwxw;
Object? _Vector4_zwyx(Object value) => (value as api.Vector4).zwyx;
Object? _Vector4_zwyy(Object value) => (value as api.Vector4).zwyy;
Object? _Vector4_zwyz(Object value) => (value as api.Vector4).zwyz;
Object? _Vector4_zwyw(Object value) => (value as api.Vector4).zwyw;
Object? _Vector4_zwzx(Object value) => (value as api.Vector4).zwzx;
Object? _Vector4_zwzy(Object value) => (value as api.Vector4).zwzy;
Object? _Vector4_zwzz(Object value) => (value as api.Vector4).zwzz;
Object? _Vector4_zwzw(Object value) => (value as api.Vector4).zwzw;
Object? _Vector4_zwwx(Object value) => (value as api.Vector4).zwwx;
Object? _Vector4_zwwy(Object value) => (value as api.Vector4).zwwy;
Object? _Vector4_zwwz(Object value) => (value as api.Vector4).zwwz;
Object? _Vector4_zwww(Object value) => (value as api.Vector4).zwww;
Object? _Vector4_wxxx(Object value) => (value as api.Vector4).wxxx;
Object? _Vector4_wxxy(Object value) => (value as api.Vector4).wxxy;
Object? _Vector4_wxxz(Object value) => (value as api.Vector4).wxxz;
Object? _Vector4_wxxw(Object value) => (value as api.Vector4).wxxw;
Object? _Vector4_wxyx(Object value) => (value as api.Vector4).wxyx;
Object? _Vector4_wxyy(Object value) => (value as api.Vector4).wxyy;
Object? _Vector4_wxyz(Object value) => (value as api.Vector4).wxyz;
Object? _Vector4_wxyw(Object value) => (value as api.Vector4).wxyw;
Object? _Vector4_wxzx(Object value) => (value as api.Vector4).wxzx;
Object? _Vector4_wxzy(Object value) => (value as api.Vector4).wxzy;
Object? _Vector4_wxzz(Object value) => (value as api.Vector4).wxzz;
Object? _Vector4_wxzw(Object value) => (value as api.Vector4).wxzw;
Object? _Vector4_wxwx(Object value) => (value as api.Vector4).wxwx;
Object? _Vector4_wxwy(Object value) => (value as api.Vector4).wxwy;
Object? _Vector4_wxwz(Object value) => (value as api.Vector4).wxwz;
Object? _Vector4_wxww(Object value) => (value as api.Vector4).wxww;
Object? _Vector4_wyxx(Object value) => (value as api.Vector4).wyxx;
Object? _Vector4_wyxy(Object value) => (value as api.Vector4).wyxy;
Object? _Vector4_wyxz(Object value) => (value as api.Vector4).wyxz;
Object? _Vector4_wyxw(Object value) => (value as api.Vector4).wyxw;
Object? _Vector4_wyyx(Object value) => (value as api.Vector4).wyyx;
Object? _Vector4_wyyy(Object value) => (value as api.Vector4).wyyy;
Object? _Vector4_wyyz(Object value) => (value as api.Vector4).wyyz;
Object? _Vector4_wyyw(Object value) => (value as api.Vector4).wyyw;
Object? _Vector4_wyzx(Object value) => (value as api.Vector4).wyzx;
Object? _Vector4_wyzy(Object value) => (value as api.Vector4).wyzy;
Object? _Vector4_wyzz(Object value) => (value as api.Vector4).wyzz;
Object? _Vector4_wyzw(Object value) => (value as api.Vector4).wyzw;
Object? _Vector4_wywx(Object value) => (value as api.Vector4).wywx;
Object? _Vector4_wywy(Object value) => (value as api.Vector4).wywy;
Object? _Vector4_wywz(Object value) => (value as api.Vector4).wywz;
Object? _Vector4_wyww(Object value) => (value as api.Vector4).wyww;
Object? _Vector4_wzxx(Object value) => (value as api.Vector4).wzxx;
Object? _Vector4_wzxy(Object value) => (value as api.Vector4).wzxy;
Object? _Vector4_wzxz(Object value) => (value as api.Vector4).wzxz;
Object? _Vector4_wzxw(Object value) => (value as api.Vector4).wzxw;
Object? _Vector4_wzyx(Object value) => (value as api.Vector4).wzyx;
Object? _Vector4_wzyy(Object value) => (value as api.Vector4).wzyy;
Object? _Vector4_wzyz(Object value) => (value as api.Vector4).wzyz;
Object? _Vector4_wzyw(Object value) => (value as api.Vector4).wzyw;
Object? _Vector4_wzzx(Object value) => (value as api.Vector4).wzzx;
Object? _Vector4_wzzy(Object value) => (value as api.Vector4).wzzy;
Object? _Vector4_wzzz(Object value) => (value as api.Vector4).wzzz;
Object? _Vector4_wzzw(Object value) => (value as api.Vector4).wzzw;
Object? _Vector4_wzwx(Object value) => (value as api.Vector4).wzwx;
Object? _Vector4_wzwy(Object value) => (value as api.Vector4).wzwy;
Object? _Vector4_wzwz(Object value) => (value as api.Vector4).wzwz;
Object? _Vector4_wzww(Object value) => (value as api.Vector4).wzww;
Object? _Vector4_wwxx(Object value) => (value as api.Vector4).wwxx;
Object? _Vector4_wwxy(Object value) => (value as api.Vector4).wwxy;
Object? _Vector4_wwxz(Object value) => (value as api.Vector4).wwxz;
Object? _Vector4_wwxw(Object value) => (value as api.Vector4).wwxw;
Object? _Vector4_wwyx(Object value) => (value as api.Vector4).wwyx;
Object? _Vector4_wwyy(Object value) => (value as api.Vector4).wwyy;
Object? _Vector4_wwyz(Object value) => (value as api.Vector4).wwyz;
Object? _Vector4_wwyw(Object value) => (value as api.Vector4).wwyw;
Object? _Vector4_wwzx(Object value) => (value as api.Vector4).wwzx;
Object? _Vector4_wwzy(Object value) => (value as api.Vector4).wwzy;
Object? _Vector4_wwzz(Object value) => (value as api.Vector4).wwzz;
Object? _Vector4_wwzw(Object value) => (value as api.Vector4).wwzw;
Object? _Vector4_wwwx(Object value) => (value as api.Vector4).wwwx;
Object? _Vector4_wwwy(Object value) => (value as api.Vector4).wwwy;
Object? _Vector4_wwwz(Object value) => (value as api.Vector4).wwwz;
Object? _Vector4_wwww(Object value) => (value as api.Vector4).wwww;
Object? _Vector4_r(Object value) => (value as api.Vector4).r;
Object? _Vector4_g(Object value) => (value as api.Vector4).g;
Object? _Vector4_b(Object value) => (value as api.Vector4).b;
Object? _Vector4_a(Object value) => (value as api.Vector4).a;
Object? _Vector4_s(Object value) => (value as api.Vector4).s;
Object? _Vector4_t(Object value) => (value as api.Vector4).t;
Object? _Vector4_p(Object value) => (value as api.Vector4).p;
Object? _Vector4_q(Object value) => (value as api.Vector4).q;
Object? _Vector4_x(Object value) => (value as api.Vector4).x;
Object? _Vector4_y(Object value) => (value as api.Vector4).y;
Object? _Vector4_z(Object value) => (value as api.Vector4).z;
Object? _Vector4_w(Object value) => (value as api.Vector4).w;
Object? _Vector4_rr(Object value) => (value as api.Vector4).rr;
Object? _Vector4_rg(Object value) => (value as api.Vector4).rg;
Object? _Vector4_rb(Object value) => (value as api.Vector4).rb;
Object? _Vector4_ra(Object value) => (value as api.Vector4).ra;
Object? _Vector4_gr(Object value) => (value as api.Vector4).gr;
Object? _Vector4_gg(Object value) => (value as api.Vector4).gg;
Object? _Vector4_gb(Object value) => (value as api.Vector4).gb;
Object? _Vector4_ga(Object value) => (value as api.Vector4).ga;
Object? _Vector4_br(Object value) => (value as api.Vector4).br;
Object? _Vector4_bg(Object value) => (value as api.Vector4).bg;
Object? _Vector4_bb(Object value) => (value as api.Vector4).bb;
Object? _Vector4_ba(Object value) => (value as api.Vector4).ba;
Object? _Vector4_ar(Object value) => (value as api.Vector4).ar;
Object? _Vector4_ag(Object value) => (value as api.Vector4).ag;
Object? _Vector4_ab(Object value) => (value as api.Vector4).ab;
Object? _Vector4_aa(Object value) => (value as api.Vector4).aa;
Object? _Vector4_rrr(Object value) => (value as api.Vector4).rrr;
Object? _Vector4_rrg(Object value) => (value as api.Vector4).rrg;
Object? _Vector4_rrb(Object value) => (value as api.Vector4).rrb;
Object? _Vector4_rra(Object value) => (value as api.Vector4).rra;
Object? _Vector4_rgr(Object value) => (value as api.Vector4).rgr;
Object? _Vector4_rgg(Object value) => (value as api.Vector4).rgg;
Object? _Vector4_rgb(Object value) => (value as api.Vector4).rgb;
Object? _Vector4_rga(Object value) => (value as api.Vector4).rga;
Object? _Vector4_rbr(Object value) => (value as api.Vector4).rbr;
Object? _Vector4_rbg(Object value) => (value as api.Vector4).rbg;
Object? _Vector4_rbb(Object value) => (value as api.Vector4).rbb;
Object? _Vector4_rba(Object value) => (value as api.Vector4).rba;
Object? _Vector4_rar(Object value) => (value as api.Vector4).rar;
Object? _Vector4_rag(Object value) => (value as api.Vector4).rag;
Object? _Vector4_rab(Object value) => (value as api.Vector4).rab;
Object? _Vector4_raa(Object value) => (value as api.Vector4).raa;
Object? _Vector4_grr(Object value) => (value as api.Vector4).grr;
Object? _Vector4_grg(Object value) => (value as api.Vector4).grg;
Object? _Vector4_grb(Object value) => (value as api.Vector4).grb;
Object? _Vector4_gra(Object value) => (value as api.Vector4).gra;
Object? _Vector4_ggr(Object value) => (value as api.Vector4).ggr;
Object? _Vector4_ggg(Object value) => (value as api.Vector4).ggg;
Object? _Vector4_ggb(Object value) => (value as api.Vector4).ggb;
Object? _Vector4_gga(Object value) => (value as api.Vector4).gga;
Object? _Vector4_gbr(Object value) => (value as api.Vector4).gbr;
Object? _Vector4_gbg(Object value) => (value as api.Vector4).gbg;
Object? _Vector4_gbb(Object value) => (value as api.Vector4).gbb;
Object? _Vector4_gba(Object value) => (value as api.Vector4).gba;
Object? _Vector4_gar(Object value) => (value as api.Vector4).gar;
Object? _Vector4_gag(Object value) => (value as api.Vector4).gag;
Object? _Vector4_gab(Object value) => (value as api.Vector4).gab;
Object? _Vector4_gaa(Object value) => (value as api.Vector4).gaa;
Object? _Vector4_brr(Object value) => (value as api.Vector4).brr;
Object? _Vector4_brg(Object value) => (value as api.Vector4).brg;
Object? _Vector4_brb(Object value) => (value as api.Vector4).brb;
Object? _Vector4_bra(Object value) => (value as api.Vector4).bra;
Object? _Vector4_bgr(Object value) => (value as api.Vector4).bgr;
Object? _Vector4_bgg(Object value) => (value as api.Vector4).bgg;
Object? _Vector4_bgb(Object value) => (value as api.Vector4).bgb;
Object? _Vector4_bga(Object value) => (value as api.Vector4).bga;
Object? _Vector4_bbr(Object value) => (value as api.Vector4).bbr;
Object? _Vector4_bbg(Object value) => (value as api.Vector4).bbg;
Object? _Vector4_bbb(Object value) => (value as api.Vector4).bbb;
Object? _Vector4_bba(Object value) => (value as api.Vector4).bba;
Object? _Vector4_bar(Object value) => (value as api.Vector4).bar;
Object? _Vector4_bag(Object value) => (value as api.Vector4).bag;
Object? _Vector4_bab(Object value) => (value as api.Vector4).bab;
Object? _Vector4_baa(Object value) => (value as api.Vector4).baa;
Object? _Vector4_arr(Object value) => (value as api.Vector4).arr;
Object? _Vector4_arg(Object value) => (value as api.Vector4).arg;
Object? _Vector4_arb(Object value) => (value as api.Vector4).arb;
Object? _Vector4_ara(Object value) => (value as api.Vector4).ara;
Object? _Vector4_agr(Object value) => (value as api.Vector4).agr;
Object? _Vector4_agg(Object value) => (value as api.Vector4).agg;
Object? _Vector4_agb(Object value) => (value as api.Vector4).agb;
Object? _Vector4_aga(Object value) => (value as api.Vector4).aga;
Object? _Vector4_abr(Object value) => (value as api.Vector4).abr;
Object? _Vector4_abg(Object value) => (value as api.Vector4).abg;
Object? _Vector4_abb(Object value) => (value as api.Vector4).abb;
Object? _Vector4_aba(Object value) => (value as api.Vector4).aba;
Object? _Vector4_aar(Object value) => (value as api.Vector4).aar;
Object? _Vector4_aag(Object value) => (value as api.Vector4).aag;
Object? _Vector4_aab(Object value) => (value as api.Vector4).aab;
Object? _Vector4_aaa(Object value) => (value as api.Vector4).aaa;
Object? _Vector4_rrrr(Object value) => (value as api.Vector4).rrrr;
Object? _Vector4_rrrg(Object value) => (value as api.Vector4).rrrg;
Object? _Vector4_rrrb(Object value) => (value as api.Vector4).rrrb;
Object? _Vector4_rrra(Object value) => (value as api.Vector4).rrra;
Object? _Vector4_rrgr(Object value) => (value as api.Vector4).rrgr;
Object? _Vector4_rrgg(Object value) => (value as api.Vector4).rrgg;
Object? _Vector4_rrgb(Object value) => (value as api.Vector4).rrgb;
Object? _Vector4_rrga(Object value) => (value as api.Vector4).rrga;
Object? _Vector4_rrbr(Object value) => (value as api.Vector4).rrbr;
Object? _Vector4_rrbg(Object value) => (value as api.Vector4).rrbg;
Object? _Vector4_rrbb(Object value) => (value as api.Vector4).rrbb;
Object? _Vector4_rrba(Object value) => (value as api.Vector4).rrba;
Object? _Vector4_rrar(Object value) => (value as api.Vector4).rrar;
Object? _Vector4_rrag(Object value) => (value as api.Vector4).rrag;
Object? _Vector4_rrab(Object value) => (value as api.Vector4).rrab;
Object? _Vector4_rraa(Object value) => (value as api.Vector4).rraa;
Object? _Vector4_rgrr(Object value) => (value as api.Vector4).rgrr;
Object? _Vector4_rgrg(Object value) => (value as api.Vector4).rgrg;
Object? _Vector4_rgrb(Object value) => (value as api.Vector4).rgrb;
Object? _Vector4_rgra(Object value) => (value as api.Vector4).rgra;
Object? _Vector4_rggr(Object value) => (value as api.Vector4).rggr;
Object? _Vector4_rggg(Object value) => (value as api.Vector4).rggg;
Object? _Vector4_rggb(Object value) => (value as api.Vector4).rggb;
Object? _Vector4_rgga(Object value) => (value as api.Vector4).rgga;
Object? _Vector4_rgbr(Object value) => (value as api.Vector4).rgbr;
Object? _Vector4_rgbg(Object value) => (value as api.Vector4).rgbg;
Object? _Vector4_rgbb(Object value) => (value as api.Vector4).rgbb;
Object? _Vector4_rgba(Object value) => (value as api.Vector4).rgba;
Object? _Vector4_rgar(Object value) => (value as api.Vector4).rgar;
Object? _Vector4_rgag(Object value) => (value as api.Vector4).rgag;
Object? _Vector4_rgab(Object value) => (value as api.Vector4).rgab;
Object? _Vector4_rgaa(Object value) => (value as api.Vector4).rgaa;
Object? _Vector4_rbrr(Object value) => (value as api.Vector4).rbrr;
Object? _Vector4_rbrg(Object value) => (value as api.Vector4).rbrg;
Object? _Vector4_rbrb(Object value) => (value as api.Vector4).rbrb;
Object? _Vector4_rbra(Object value) => (value as api.Vector4).rbra;
Object? _Vector4_rbgr(Object value) => (value as api.Vector4).rbgr;
Object? _Vector4_rbgg(Object value) => (value as api.Vector4).rbgg;
Object? _Vector4_rbgb(Object value) => (value as api.Vector4).rbgb;
Object? _Vector4_rbga(Object value) => (value as api.Vector4).rbga;
Object? _Vector4_rbbr(Object value) => (value as api.Vector4).rbbr;
Object? _Vector4_rbbg(Object value) => (value as api.Vector4).rbbg;
Object? _Vector4_rbbb(Object value) => (value as api.Vector4).rbbb;
Object? _Vector4_rbba(Object value) => (value as api.Vector4).rbba;
Object? _Vector4_rbar(Object value) => (value as api.Vector4).rbar;
Object? _Vector4_rbag(Object value) => (value as api.Vector4).rbag;
Object? _Vector4_rbab(Object value) => (value as api.Vector4).rbab;
Object? _Vector4_rbaa(Object value) => (value as api.Vector4).rbaa;
Object? _Vector4_rarr(Object value) => (value as api.Vector4).rarr;
Object? _Vector4_rarg(Object value) => (value as api.Vector4).rarg;
Object? _Vector4_rarb(Object value) => (value as api.Vector4).rarb;
Object? _Vector4_rara(Object value) => (value as api.Vector4).rara;
Object? _Vector4_ragr(Object value) => (value as api.Vector4).ragr;
Object? _Vector4_ragg(Object value) => (value as api.Vector4).ragg;
Object? _Vector4_ragb(Object value) => (value as api.Vector4).ragb;
Object? _Vector4_raga(Object value) => (value as api.Vector4).raga;
Object? _Vector4_rabr(Object value) => (value as api.Vector4).rabr;
Object? _Vector4_rabg(Object value) => (value as api.Vector4).rabg;
Object? _Vector4_rabb(Object value) => (value as api.Vector4).rabb;
Object? _Vector4_raba(Object value) => (value as api.Vector4).raba;
Object? _Vector4_raar(Object value) => (value as api.Vector4).raar;
Object? _Vector4_raag(Object value) => (value as api.Vector4).raag;
Object? _Vector4_raab(Object value) => (value as api.Vector4).raab;
Object? _Vector4_raaa(Object value) => (value as api.Vector4).raaa;
Object? _Vector4_grrr(Object value) => (value as api.Vector4).grrr;
Object? _Vector4_grrg(Object value) => (value as api.Vector4).grrg;
Object? _Vector4_grrb(Object value) => (value as api.Vector4).grrb;
Object? _Vector4_grra(Object value) => (value as api.Vector4).grra;
Object? _Vector4_grgr(Object value) => (value as api.Vector4).grgr;
Object? _Vector4_grgg(Object value) => (value as api.Vector4).grgg;
Object? _Vector4_grgb(Object value) => (value as api.Vector4).grgb;
Object? _Vector4_grga(Object value) => (value as api.Vector4).grga;
Object? _Vector4_grbr(Object value) => (value as api.Vector4).grbr;
Object? _Vector4_grbg(Object value) => (value as api.Vector4).grbg;
Object? _Vector4_grbb(Object value) => (value as api.Vector4).grbb;
Object? _Vector4_grba(Object value) => (value as api.Vector4).grba;
Object? _Vector4_grar(Object value) => (value as api.Vector4).grar;
Object? _Vector4_grag(Object value) => (value as api.Vector4).grag;
Object? _Vector4_grab(Object value) => (value as api.Vector4).grab;
Object? _Vector4_graa(Object value) => (value as api.Vector4).graa;
Object? _Vector4_ggrr(Object value) => (value as api.Vector4).ggrr;
Object? _Vector4_ggrg(Object value) => (value as api.Vector4).ggrg;
Object? _Vector4_ggrb(Object value) => (value as api.Vector4).ggrb;
Object? _Vector4_ggra(Object value) => (value as api.Vector4).ggra;
Object? _Vector4_gggr(Object value) => (value as api.Vector4).gggr;
Object? _Vector4_gggg(Object value) => (value as api.Vector4).gggg;
Object? _Vector4_gggb(Object value) => (value as api.Vector4).gggb;
Object? _Vector4_ggga(Object value) => (value as api.Vector4).ggga;
Object? _Vector4_ggbr(Object value) => (value as api.Vector4).ggbr;
Object? _Vector4_ggbg(Object value) => (value as api.Vector4).ggbg;
Object? _Vector4_ggbb(Object value) => (value as api.Vector4).ggbb;
Object? _Vector4_ggba(Object value) => (value as api.Vector4).ggba;
Object? _Vector4_ggar(Object value) => (value as api.Vector4).ggar;
Object? _Vector4_ggag(Object value) => (value as api.Vector4).ggag;
Object? _Vector4_ggab(Object value) => (value as api.Vector4).ggab;
Object? _Vector4_ggaa(Object value) => (value as api.Vector4).ggaa;
Object? _Vector4_gbrr(Object value) => (value as api.Vector4).gbrr;
Object? _Vector4_gbrg(Object value) => (value as api.Vector4).gbrg;
Object? _Vector4_gbrb(Object value) => (value as api.Vector4).gbrb;
Object? _Vector4_gbra(Object value) => (value as api.Vector4).gbra;
Object? _Vector4_gbgr(Object value) => (value as api.Vector4).gbgr;
Object? _Vector4_gbgg(Object value) => (value as api.Vector4).gbgg;
Object? _Vector4_gbgb(Object value) => (value as api.Vector4).gbgb;
Object? _Vector4_gbga(Object value) => (value as api.Vector4).gbga;
Object? _Vector4_gbbr(Object value) => (value as api.Vector4).gbbr;
Object? _Vector4_gbbg(Object value) => (value as api.Vector4).gbbg;
Object? _Vector4_gbbb(Object value) => (value as api.Vector4).gbbb;
Object? _Vector4_gbba(Object value) => (value as api.Vector4).gbba;
Object? _Vector4_gbar(Object value) => (value as api.Vector4).gbar;
Object? _Vector4_gbag(Object value) => (value as api.Vector4).gbag;
Object? _Vector4_gbab(Object value) => (value as api.Vector4).gbab;
Object? _Vector4_gbaa(Object value) => (value as api.Vector4).gbaa;
Object? _Vector4_garr(Object value) => (value as api.Vector4).garr;
Object? _Vector4_garg(Object value) => (value as api.Vector4).garg;
Object? _Vector4_garb(Object value) => (value as api.Vector4).garb;
Object? _Vector4_gara(Object value) => (value as api.Vector4).gara;
Object? _Vector4_gagr(Object value) => (value as api.Vector4).gagr;
Object? _Vector4_gagg(Object value) => (value as api.Vector4).gagg;
Object? _Vector4_gagb(Object value) => (value as api.Vector4).gagb;
Object? _Vector4_gaga(Object value) => (value as api.Vector4).gaga;
Object? _Vector4_gabr(Object value) => (value as api.Vector4).gabr;
Object? _Vector4_gabg(Object value) => (value as api.Vector4).gabg;
Object? _Vector4_gabb(Object value) => (value as api.Vector4).gabb;
Object? _Vector4_gaba(Object value) => (value as api.Vector4).gaba;
Object? _Vector4_gaar(Object value) => (value as api.Vector4).gaar;
Object? _Vector4_gaag(Object value) => (value as api.Vector4).gaag;
Object? _Vector4_gaab(Object value) => (value as api.Vector4).gaab;
Object? _Vector4_gaaa(Object value) => (value as api.Vector4).gaaa;
Object? _Vector4_brrr(Object value) => (value as api.Vector4).brrr;
Object? _Vector4_brrg(Object value) => (value as api.Vector4).brrg;
Object? _Vector4_brrb(Object value) => (value as api.Vector4).brrb;
Object? _Vector4_brra(Object value) => (value as api.Vector4).brra;
Object? _Vector4_brgr(Object value) => (value as api.Vector4).brgr;
Object? _Vector4_brgg(Object value) => (value as api.Vector4).brgg;
Object? _Vector4_brgb(Object value) => (value as api.Vector4).brgb;
Object? _Vector4_brga(Object value) => (value as api.Vector4).brga;
Object? _Vector4_brbr(Object value) => (value as api.Vector4).brbr;
Object? _Vector4_brbg(Object value) => (value as api.Vector4).brbg;
Object? _Vector4_brbb(Object value) => (value as api.Vector4).brbb;
Object? _Vector4_brba(Object value) => (value as api.Vector4).brba;
Object? _Vector4_brar(Object value) => (value as api.Vector4).brar;
Object? _Vector4_brag(Object value) => (value as api.Vector4).brag;
Object? _Vector4_brab(Object value) => (value as api.Vector4).brab;
Object? _Vector4_braa(Object value) => (value as api.Vector4).braa;
Object? _Vector4_bgrr(Object value) => (value as api.Vector4).bgrr;
Object? _Vector4_bgrg(Object value) => (value as api.Vector4).bgrg;
Object? _Vector4_bgrb(Object value) => (value as api.Vector4).bgrb;
Object? _Vector4_bgra(Object value) => (value as api.Vector4).bgra;
Object? _Vector4_bggr(Object value) => (value as api.Vector4).bggr;
Object? _Vector4_bggg(Object value) => (value as api.Vector4).bggg;
Object? _Vector4_bggb(Object value) => (value as api.Vector4).bggb;
Object? _Vector4_bgga(Object value) => (value as api.Vector4).bgga;
Object? _Vector4_bgbr(Object value) => (value as api.Vector4).bgbr;
Object? _Vector4_bgbg(Object value) => (value as api.Vector4).bgbg;
Object? _Vector4_bgbb(Object value) => (value as api.Vector4).bgbb;
Object? _Vector4_bgba(Object value) => (value as api.Vector4).bgba;
Object? _Vector4_bgar(Object value) => (value as api.Vector4).bgar;
Object? _Vector4_bgag(Object value) => (value as api.Vector4).bgag;
Object? _Vector4_bgab(Object value) => (value as api.Vector4).bgab;
Object? _Vector4_bgaa(Object value) => (value as api.Vector4).bgaa;
Object? _Vector4_bbrr(Object value) => (value as api.Vector4).bbrr;
Object? _Vector4_bbrg(Object value) => (value as api.Vector4).bbrg;
Object? _Vector4_bbrb(Object value) => (value as api.Vector4).bbrb;
Object? _Vector4_bbra(Object value) => (value as api.Vector4).bbra;
Object? _Vector4_bbgr(Object value) => (value as api.Vector4).bbgr;
Object? _Vector4_bbgg(Object value) => (value as api.Vector4).bbgg;
Object? _Vector4_bbgb(Object value) => (value as api.Vector4).bbgb;
Object? _Vector4_bbga(Object value) => (value as api.Vector4).bbga;
Object? _Vector4_bbbr(Object value) => (value as api.Vector4).bbbr;
Object? _Vector4_bbbg(Object value) => (value as api.Vector4).bbbg;
Object? _Vector4_bbbb(Object value) => (value as api.Vector4).bbbb;
Object? _Vector4_bbba(Object value) => (value as api.Vector4).bbba;
Object? _Vector4_bbar(Object value) => (value as api.Vector4).bbar;
Object? _Vector4_bbag(Object value) => (value as api.Vector4).bbag;
Object? _Vector4_bbab(Object value) => (value as api.Vector4).bbab;
Object? _Vector4_bbaa(Object value) => (value as api.Vector4).bbaa;
Object? _Vector4_barr(Object value) => (value as api.Vector4).barr;
Object? _Vector4_barg(Object value) => (value as api.Vector4).barg;
Object? _Vector4_barb(Object value) => (value as api.Vector4).barb;
Object? _Vector4_bara(Object value) => (value as api.Vector4).bara;
Object? _Vector4_bagr(Object value) => (value as api.Vector4).bagr;
Object? _Vector4_bagg(Object value) => (value as api.Vector4).bagg;
Object? _Vector4_bagb(Object value) => (value as api.Vector4).bagb;
Object? _Vector4_baga(Object value) => (value as api.Vector4).baga;
Object? _Vector4_babr(Object value) => (value as api.Vector4).babr;
Object? _Vector4_babg(Object value) => (value as api.Vector4).babg;
Object? _Vector4_babb(Object value) => (value as api.Vector4).babb;
Object? _Vector4_baba(Object value) => (value as api.Vector4).baba;
Object? _Vector4_baar(Object value) => (value as api.Vector4).baar;
Object? _Vector4_baag(Object value) => (value as api.Vector4).baag;
Object? _Vector4_baab(Object value) => (value as api.Vector4).baab;
Object? _Vector4_baaa(Object value) => (value as api.Vector4).baaa;
Object? _Vector4_arrr(Object value) => (value as api.Vector4).arrr;
Object? _Vector4_arrg(Object value) => (value as api.Vector4).arrg;
Object? _Vector4_arrb(Object value) => (value as api.Vector4).arrb;
Object? _Vector4_arra(Object value) => (value as api.Vector4).arra;
Object? _Vector4_argr(Object value) => (value as api.Vector4).argr;
Object? _Vector4_argg(Object value) => (value as api.Vector4).argg;
Object? _Vector4_argb(Object value) => (value as api.Vector4).argb;
Object? _Vector4_arga(Object value) => (value as api.Vector4).arga;
Object? _Vector4_arbr(Object value) => (value as api.Vector4).arbr;
Object? _Vector4_arbg(Object value) => (value as api.Vector4).arbg;
Object? _Vector4_arbb(Object value) => (value as api.Vector4).arbb;
Object? _Vector4_arba(Object value) => (value as api.Vector4).arba;
Object? _Vector4_arar(Object value) => (value as api.Vector4).arar;
Object? _Vector4_arag(Object value) => (value as api.Vector4).arag;
Object? _Vector4_arab(Object value) => (value as api.Vector4).arab;
Object? _Vector4_araa(Object value) => (value as api.Vector4).araa;
Object? _Vector4_agrr(Object value) => (value as api.Vector4).agrr;
Object? _Vector4_agrg(Object value) => (value as api.Vector4).agrg;
Object? _Vector4_agrb(Object value) => (value as api.Vector4).agrb;
Object? _Vector4_agra(Object value) => (value as api.Vector4).agra;
Object? _Vector4_aggr(Object value) => (value as api.Vector4).aggr;
Object? _Vector4_aggg(Object value) => (value as api.Vector4).aggg;
Object? _Vector4_aggb(Object value) => (value as api.Vector4).aggb;
Object? _Vector4_agga(Object value) => (value as api.Vector4).agga;
Object? _Vector4_agbr(Object value) => (value as api.Vector4).agbr;
Object? _Vector4_agbg(Object value) => (value as api.Vector4).agbg;
Object? _Vector4_agbb(Object value) => (value as api.Vector4).agbb;
Object? _Vector4_agba(Object value) => (value as api.Vector4).agba;
Object? _Vector4_agar(Object value) => (value as api.Vector4).agar;
Object? _Vector4_agag(Object value) => (value as api.Vector4).agag;
Object? _Vector4_agab(Object value) => (value as api.Vector4).agab;
Object? _Vector4_agaa(Object value) => (value as api.Vector4).agaa;
Object? _Vector4_abrr(Object value) => (value as api.Vector4).abrr;
Object? _Vector4_abrg(Object value) => (value as api.Vector4).abrg;
Object? _Vector4_abrb(Object value) => (value as api.Vector4).abrb;
Object? _Vector4_abra(Object value) => (value as api.Vector4).abra;
Object? _Vector4_abgr(Object value) => (value as api.Vector4).abgr;
Object? _Vector4_abgg(Object value) => (value as api.Vector4).abgg;
Object? _Vector4_abgb(Object value) => (value as api.Vector4).abgb;
Object? _Vector4_abga(Object value) => (value as api.Vector4).abga;
Object? _Vector4_abbr(Object value) => (value as api.Vector4).abbr;
Object? _Vector4_abbg(Object value) => (value as api.Vector4).abbg;
Object? _Vector4_abbb(Object value) => (value as api.Vector4).abbb;
Object? _Vector4_abba(Object value) => (value as api.Vector4).abba;
Object? _Vector4_abar(Object value) => (value as api.Vector4).abar;
Object? _Vector4_abag(Object value) => (value as api.Vector4).abag;
Object? _Vector4_abab(Object value) => (value as api.Vector4).abab;
Object? _Vector4_abaa(Object value) => (value as api.Vector4).abaa;
Object? _Vector4_aarr(Object value) => (value as api.Vector4).aarr;
Object? _Vector4_aarg(Object value) => (value as api.Vector4).aarg;
Object? _Vector4_aarb(Object value) => (value as api.Vector4).aarb;
Object? _Vector4_aara(Object value) => (value as api.Vector4).aara;
Object? _Vector4_aagr(Object value) => (value as api.Vector4).aagr;
Object? _Vector4_aagg(Object value) => (value as api.Vector4).aagg;
Object? _Vector4_aagb(Object value) => (value as api.Vector4).aagb;
Object? _Vector4_aaga(Object value) => (value as api.Vector4).aaga;
Object? _Vector4_aabr(Object value) => (value as api.Vector4).aabr;
Object? _Vector4_aabg(Object value) => (value as api.Vector4).aabg;
Object? _Vector4_aabb(Object value) => (value as api.Vector4).aabb;
Object? _Vector4_aaba(Object value) => (value as api.Vector4).aaba;
Object? _Vector4_aaar(Object value) => (value as api.Vector4).aaar;
Object? _Vector4_aaag(Object value) => (value as api.Vector4).aaag;
Object? _Vector4_aaab(Object value) => (value as api.Vector4).aaab;
Object? _Vector4_aaaa(Object value) => (value as api.Vector4).aaaa;
Object? _Vector4_ss(Object value) => (value as api.Vector4).ss;
Object? _Vector4_st(Object value) => (value as api.Vector4).st;
Object? _Vector4_sp(Object value) => (value as api.Vector4).sp;
Object? _Vector4_sq(Object value) => (value as api.Vector4).sq;
Object? _Vector4_ts(Object value) => (value as api.Vector4).ts;
Object? _Vector4_tt(Object value) => (value as api.Vector4).tt;
Object? _Vector4_tp(Object value) => (value as api.Vector4).tp;
Object? _Vector4_tq(Object value) => (value as api.Vector4).tq;
Object? _Vector4_ps(Object value) => (value as api.Vector4).ps;
Object? _Vector4_pt(Object value) => (value as api.Vector4).pt;
Object? _Vector4_pp(Object value) => (value as api.Vector4).pp;
Object? _Vector4_pq(Object value) => (value as api.Vector4).pq;
Object? _Vector4_qs(Object value) => (value as api.Vector4).qs;
Object? _Vector4_qt(Object value) => (value as api.Vector4).qt;
Object? _Vector4_qp(Object value) => (value as api.Vector4).qp;
Object? _Vector4_qq(Object value) => (value as api.Vector4).qq;
Object? _Vector4_sss(Object value) => (value as api.Vector4).sss;
Object? _Vector4_sst(Object value) => (value as api.Vector4).sst;
Object? _Vector4_ssp(Object value) => (value as api.Vector4).ssp;
Object? _Vector4_ssq(Object value) => (value as api.Vector4).ssq;
Object? _Vector4_sts(Object value) => (value as api.Vector4).sts;
Object? _Vector4_stt(Object value) => (value as api.Vector4).stt;
Object? _Vector4_stp(Object value) => (value as api.Vector4).stp;
Object? _Vector4_stq(Object value) => (value as api.Vector4).stq;
Object? _Vector4_sps(Object value) => (value as api.Vector4).sps;
Object? _Vector4_spt(Object value) => (value as api.Vector4).spt;
Object? _Vector4_spp(Object value) => (value as api.Vector4).spp;
Object? _Vector4_spq(Object value) => (value as api.Vector4).spq;
Object? _Vector4_sqs(Object value) => (value as api.Vector4).sqs;
Object? _Vector4_sqt(Object value) => (value as api.Vector4).sqt;
Object? _Vector4_sqp(Object value) => (value as api.Vector4).sqp;
Object? _Vector4_sqq(Object value) => (value as api.Vector4).sqq;
Object? _Vector4_tss(Object value) => (value as api.Vector4).tss;
Object? _Vector4_tst(Object value) => (value as api.Vector4).tst;
Object? _Vector4_tsp(Object value) => (value as api.Vector4).tsp;
Object? _Vector4_tsq(Object value) => (value as api.Vector4).tsq;
Object? _Vector4_tts(Object value) => (value as api.Vector4).tts;
Object? _Vector4_ttt(Object value) => (value as api.Vector4).ttt;
Object? _Vector4_ttp(Object value) => (value as api.Vector4).ttp;
Object? _Vector4_ttq(Object value) => (value as api.Vector4).ttq;
Object? _Vector4_tps(Object value) => (value as api.Vector4).tps;
Object? _Vector4_tpt(Object value) => (value as api.Vector4).tpt;
Object? _Vector4_tpp(Object value) => (value as api.Vector4).tpp;
Object? _Vector4_tpq(Object value) => (value as api.Vector4).tpq;
Object? _Vector4_tqs(Object value) => (value as api.Vector4).tqs;
Object? _Vector4_tqt(Object value) => (value as api.Vector4).tqt;
Object? _Vector4_tqp(Object value) => (value as api.Vector4).tqp;
Object? _Vector4_tqq(Object value) => (value as api.Vector4).tqq;
Object? _Vector4_pss(Object value) => (value as api.Vector4).pss;
Object? _Vector4_pst(Object value) => (value as api.Vector4).pst;
Object? _Vector4_psp(Object value) => (value as api.Vector4).psp;
Object? _Vector4_psq(Object value) => (value as api.Vector4).psq;
Object? _Vector4_pts(Object value) => (value as api.Vector4).pts;
Object? _Vector4_ptt(Object value) => (value as api.Vector4).ptt;
Object? _Vector4_ptp(Object value) => (value as api.Vector4).ptp;
Object? _Vector4_ptq(Object value) => (value as api.Vector4).ptq;
Object? _Vector4_pps(Object value) => (value as api.Vector4).pps;
Object? _Vector4_ppt(Object value) => (value as api.Vector4).ppt;
Object? _Vector4_ppp(Object value) => (value as api.Vector4).ppp;
Object? _Vector4_ppq(Object value) => (value as api.Vector4).ppq;
Object? _Vector4_pqs(Object value) => (value as api.Vector4).pqs;
Object? _Vector4_pqt(Object value) => (value as api.Vector4).pqt;
Object? _Vector4_pqp(Object value) => (value as api.Vector4).pqp;
Object? _Vector4_pqq(Object value) => (value as api.Vector4).pqq;
Object? _Vector4_qss(Object value) => (value as api.Vector4).qss;
Object? _Vector4_qst(Object value) => (value as api.Vector4).qst;
Object? _Vector4_qsp(Object value) => (value as api.Vector4).qsp;
Object? _Vector4_qsq(Object value) => (value as api.Vector4).qsq;
Object? _Vector4_qts(Object value) => (value as api.Vector4).qts;
Object? _Vector4_qtt(Object value) => (value as api.Vector4).qtt;
Object? _Vector4_qtp(Object value) => (value as api.Vector4).qtp;
Object? _Vector4_qtq(Object value) => (value as api.Vector4).qtq;
Object? _Vector4_qps(Object value) => (value as api.Vector4).qps;
Object? _Vector4_qpt(Object value) => (value as api.Vector4).qpt;
Object? _Vector4_qpp(Object value) => (value as api.Vector4).qpp;
Object? _Vector4_qpq(Object value) => (value as api.Vector4).qpq;
Object? _Vector4_qqs(Object value) => (value as api.Vector4).qqs;
Object? _Vector4_qqt(Object value) => (value as api.Vector4).qqt;
Object? _Vector4_qqp(Object value) => (value as api.Vector4).qqp;
Object? _Vector4_qqq(Object value) => (value as api.Vector4).qqq;
Object? _Vector4_ssss(Object value) => (value as api.Vector4).ssss;
Object? _Vector4_ssst(Object value) => (value as api.Vector4).ssst;
Object? _Vector4_sssp(Object value) => (value as api.Vector4).sssp;
Object? _Vector4_sssq(Object value) => (value as api.Vector4).sssq;
Object? _Vector4_ssts(Object value) => (value as api.Vector4).ssts;
Object? _Vector4_sstt(Object value) => (value as api.Vector4).sstt;
Object? _Vector4_sstp(Object value) => (value as api.Vector4).sstp;
Object? _Vector4_sstq(Object value) => (value as api.Vector4).sstq;
Object? _Vector4_ssps(Object value) => (value as api.Vector4).ssps;
Object? _Vector4_sspt(Object value) => (value as api.Vector4).sspt;
Object? _Vector4_sspp(Object value) => (value as api.Vector4).sspp;
Object? _Vector4_sspq(Object value) => (value as api.Vector4).sspq;
Object? _Vector4_ssqs(Object value) => (value as api.Vector4).ssqs;
Object? _Vector4_ssqt(Object value) => (value as api.Vector4).ssqt;
Object? _Vector4_ssqp(Object value) => (value as api.Vector4).ssqp;
Object? _Vector4_ssqq(Object value) => (value as api.Vector4).ssqq;
Object? _Vector4_stss(Object value) => (value as api.Vector4).stss;
Object? _Vector4_stst(Object value) => (value as api.Vector4).stst;
Object? _Vector4_stsp(Object value) => (value as api.Vector4).stsp;
Object? _Vector4_stsq(Object value) => (value as api.Vector4).stsq;
Object? _Vector4_stts(Object value) => (value as api.Vector4).stts;
Object? _Vector4_sttt(Object value) => (value as api.Vector4).sttt;
Object? _Vector4_sttp(Object value) => (value as api.Vector4).sttp;
Object? _Vector4_sttq(Object value) => (value as api.Vector4).sttq;
Object? _Vector4_stps(Object value) => (value as api.Vector4).stps;
Object? _Vector4_stpt(Object value) => (value as api.Vector4).stpt;
Object? _Vector4_stpp(Object value) => (value as api.Vector4).stpp;
Object? _Vector4_stpq(Object value) => (value as api.Vector4).stpq;
Object? _Vector4_stqs(Object value) => (value as api.Vector4).stqs;
Object? _Vector4_stqt(Object value) => (value as api.Vector4).stqt;
Object? _Vector4_stqp(Object value) => (value as api.Vector4).stqp;
Object? _Vector4_stqq(Object value) => (value as api.Vector4).stqq;
Object? _Vector4_spss(Object value) => (value as api.Vector4).spss;
Object? _Vector4_spst(Object value) => (value as api.Vector4).spst;
Object? _Vector4_spsp(Object value) => (value as api.Vector4).spsp;
Object? _Vector4_spsq(Object value) => (value as api.Vector4).spsq;
Object? _Vector4_spts(Object value) => (value as api.Vector4).spts;
Object? _Vector4_sptt(Object value) => (value as api.Vector4).sptt;
Object? _Vector4_sptp(Object value) => (value as api.Vector4).sptp;
Object? _Vector4_sptq(Object value) => (value as api.Vector4).sptq;
Object? _Vector4_spps(Object value) => (value as api.Vector4).spps;
Object? _Vector4_sppt(Object value) => (value as api.Vector4).sppt;
Object? _Vector4_sppp(Object value) => (value as api.Vector4).sppp;
Object? _Vector4_sppq(Object value) => (value as api.Vector4).sppq;
Object? _Vector4_spqs(Object value) => (value as api.Vector4).spqs;
Object? _Vector4_spqt(Object value) => (value as api.Vector4).spqt;
Object? _Vector4_spqp(Object value) => (value as api.Vector4).spqp;
Object? _Vector4_spqq(Object value) => (value as api.Vector4).spqq;
Object? _Vector4_sqss(Object value) => (value as api.Vector4).sqss;
Object? _Vector4_sqst(Object value) => (value as api.Vector4).sqst;
Object? _Vector4_sqsp(Object value) => (value as api.Vector4).sqsp;
Object? _Vector4_sqsq(Object value) => (value as api.Vector4).sqsq;
Object? _Vector4_sqts(Object value) => (value as api.Vector4).sqts;
Object? _Vector4_sqtt(Object value) => (value as api.Vector4).sqtt;
Object? _Vector4_sqtp(Object value) => (value as api.Vector4).sqtp;
Object? _Vector4_sqtq(Object value) => (value as api.Vector4).sqtq;
Object? _Vector4_sqps(Object value) => (value as api.Vector4).sqps;
Object? _Vector4_sqpt(Object value) => (value as api.Vector4).sqpt;
Object? _Vector4_sqpp(Object value) => (value as api.Vector4).sqpp;
Object? _Vector4_sqpq(Object value) => (value as api.Vector4).sqpq;
Object? _Vector4_sqqs(Object value) => (value as api.Vector4).sqqs;
Object? _Vector4_sqqt(Object value) => (value as api.Vector4).sqqt;
Object? _Vector4_sqqp(Object value) => (value as api.Vector4).sqqp;
Object? _Vector4_sqqq(Object value) => (value as api.Vector4).sqqq;
Object? _Vector4_tsss(Object value) => (value as api.Vector4).tsss;
Object? _Vector4_tsst(Object value) => (value as api.Vector4).tsst;
Object? _Vector4_tssp(Object value) => (value as api.Vector4).tssp;
Object? _Vector4_tssq(Object value) => (value as api.Vector4).tssq;
Object? _Vector4_tsts(Object value) => (value as api.Vector4).tsts;
Object? _Vector4_tstt(Object value) => (value as api.Vector4).tstt;
Object? _Vector4_tstp(Object value) => (value as api.Vector4).tstp;
Object? _Vector4_tstq(Object value) => (value as api.Vector4).tstq;
Object? _Vector4_tsps(Object value) => (value as api.Vector4).tsps;
Object? _Vector4_tspt(Object value) => (value as api.Vector4).tspt;
Object? _Vector4_tspp(Object value) => (value as api.Vector4).tspp;
Object? _Vector4_tspq(Object value) => (value as api.Vector4).tspq;
Object? _Vector4_tsqs(Object value) => (value as api.Vector4).tsqs;
Object? _Vector4_tsqt(Object value) => (value as api.Vector4).tsqt;
Object? _Vector4_tsqp(Object value) => (value as api.Vector4).tsqp;
Object? _Vector4_tsqq(Object value) => (value as api.Vector4).tsqq;
Object? _Vector4_ttss(Object value) => (value as api.Vector4).ttss;
Object? _Vector4_ttst(Object value) => (value as api.Vector4).ttst;
Object? _Vector4_ttsp(Object value) => (value as api.Vector4).ttsp;
Object? _Vector4_ttsq(Object value) => (value as api.Vector4).ttsq;
Object? _Vector4_ttts(Object value) => (value as api.Vector4).ttts;
Object? _Vector4_tttt(Object value) => (value as api.Vector4).tttt;
Object? _Vector4_tttp(Object value) => (value as api.Vector4).tttp;
Object? _Vector4_tttq(Object value) => (value as api.Vector4).tttq;
Object? _Vector4_ttps(Object value) => (value as api.Vector4).ttps;
Object? _Vector4_ttpt(Object value) => (value as api.Vector4).ttpt;
Object? _Vector4_ttpp(Object value) => (value as api.Vector4).ttpp;
Object? _Vector4_ttpq(Object value) => (value as api.Vector4).ttpq;
Object? _Vector4_ttqs(Object value) => (value as api.Vector4).ttqs;
Object? _Vector4_ttqt(Object value) => (value as api.Vector4).ttqt;
Object? _Vector4_ttqp(Object value) => (value as api.Vector4).ttqp;
Object? _Vector4_ttqq(Object value) => (value as api.Vector4).ttqq;
Object? _Vector4_tpss(Object value) => (value as api.Vector4).tpss;
Object? _Vector4_tpst(Object value) => (value as api.Vector4).tpst;
Object? _Vector4_tpsp(Object value) => (value as api.Vector4).tpsp;
Object? _Vector4_tpsq(Object value) => (value as api.Vector4).tpsq;
Object? _Vector4_tpts(Object value) => (value as api.Vector4).tpts;
Object? _Vector4_tptt(Object value) => (value as api.Vector4).tptt;
Object? _Vector4_tptp(Object value) => (value as api.Vector4).tptp;
Object? _Vector4_tptq(Object value) => (value as api.Vector4).tptq;
Object? _Vector4_tpps(Object value) => (value as api.Vector4).tpps;
Object? _Vector4_tppt(Object value) => (value as api.Vector4).tppt;
Object? _Vector4_tppp(Object value) => (value as api.Vector4).tppp;
Object? _Vector4_tppq(Object value) => (value as api.Vector4).tppq;
Object? _Vector4_tpqs(Object value) => (value as api.Vector4).tpqs;
Object? _Vector4_tpqt(Object value) => (value as api.Vector4).tpqt;
Object? _Vector4_tpqp(Object value) => (value as api.Vector4).tpqp;
Object? _Vector4_tpqq(Object value) => (value as api.Vector4).tpqq;
Object? _Vector4_tqss(Object value) => (value as api.Vector4).tqss;
Object? _Vector4_tqst(Object value) => (value as api.Vector4).tqst;
Object? _Vector4_tqsp(Object value) => (value as api.Vector4).tqsp;
Object? _Vector4_tqsq(Object value) => (value as api.Vector4).tqsq;
Object? _Vector4_tqts(Object value) => (value as api.Vector4).tqts;
Object? _Vector4_tqtt(Object value) => (value as api.Vector4).tqtt;
Object? _Vector4_tqtp(Object value) => (value as api.Vector4).tqtp;
Object? _Vector4_tqtq(Object value) => (value as api.Vector4).tqtq;
Object? _Vector4_tqps(Object value) => (value as api.Vector4).tqps;
Object? _Vector4_tqpt(Object value) => (value as api.Vector4).tqpt;
Object? _Vector4_tqpp(Object value) => (value as api.Vector4).tqpp;
Object? _Vector4_tqpq(Object value) => (value as api.Vector4).tqpq;
Object? _Vector4_tqqs(Object value) => (value as api.Vector4).tqqs;
Object? _Vector4_tqqt(Object value) => (value as api.Vector4).tqqt;
Object? _Vector4_tqqp(Object value) => (value as api.Vector4).tqqp;
Object? _Vector4_tqqq(Object value) => (value as api.Vector4).tqqq;
Object? _Vector4_psss(Object value) => (value as api.Vector4).psss;
Object? _Vector4_psst(Object value) => (value as api.Vector4).psst;
Object? _Vector4_pssp(Object value) => (value as api.Vector4).pssp;
Object? _Vector4_pssq(Object value) => (value as api.Vector4).pssq;
Object? _Vector4_psts(Object value) => (value as api.Vector4).psts;
Object? _Vector4_pstt(Object value) => (value as api.Vector4).pstt;
Object? _Vector4_pstp(Object value) => (value as api.Vector4).pstp;
Object? _Vector4_pstq(Object value) => (value as api.Vector4).pstq;
Object? _Vector4_psps(Object value) => (value as api.Vector4).psps;
Object? _Vector4_pspt(Object value) => (value as api.Vector4).pspt;
Object? _Vector4_pspp(Object value) => (value as api.Vector4).pspp;
Object? _Vector4_pspq(Object value) => (value as api.Vector4).pspq;
Object? _Vector4_psqs(Object value) => (value as api.Vector4).psqs;
Object? _Vector4_psqt(Object value) => (value as api.Vector4).psqt;
Object? _Vector4_psqp(Object value) => (value as api.Vector4).psqp;
Object? _Vector4_psqq(Object value) => (value as api.Vector4).psqq;
Object? _Vector4_ptss(Object value) => (value as api.Vector4).ptss;
Object? _Vector4_ptst(Object value) => (value as api.Vector4).ptst;
Object? _Vector4_ptsp(Object value) => (value as api.Vector4).ptsp;
Object? _Vector4_ptsq(Object value) => (value as api.Vector4).ptsq;
Object? _Vector4_ptts(Object value) => (value as api.Vector4).ptts;
Object? _Vector4_pttt(Object value) => (value as api.Vector4).pttt;
Object? _Vector4_pttp(Object value) => (value as api.Vector4).pttp;
Object? _Vector4_pttq(Object value) => (value as api.Vector4).pttq;
Object? _Vector4_ptps(Object value) => (value as api.Vector4).ptps;
Object? _Vector4_ptpt(Object value) => (value as api.Vector4).ptpt;
Object? _Vector4_ptpp(Object value) => (value as api.Vector4).ptpp;
Object? _Vector4_ptpq(Object value) => (value as api.Vector4).ptpq;
Object? _Vector4_ptqs(Object value) => (value as api.Vector4).ptqs;
Object? _Vector4_ptqt(Object value) => (value as api.Vector4).ptqt;
Object? _Vector4_ptqp(Object value) => (value as api.Vector4).ptqp;
Object? _Vector4_ptqq(Object value) => (value as api.Vector4).ptqq;
Object? _Vector4_ppss(Object value) => (value as api.Vector4).ppss;
Object? _Vector4_ppst(Object value) => (value as api.Vector4).ppst;
Object? _Vector4_ppsp(Object value) => (value as api.Vector4).ppsp;
Object? _Vector4_ppsq(Object value) => (value as api.Vector4).ppsq;
Object? _Vector4_ppts(Object value) => (value as api.Vector4).ppts;
Object? _Vector4_pptt(Object value) => (value as api.Vector4).pptt;
Object? _Vector4_pptp(Object value) => (value as api.Vector4).pptp;
Object? _Vector4_pptq(Object value) => (value as api.Vector4).pptq;
Object? _Vector4_ppps(Object value) => (value as api.Vector4).ppps;
Object? _Vector4_pppt(Object value) => (value as api.Vector4).pppt;
Object? _Vector4_pppp(Object value) => (value as api.Vector4).pppp;
Object? _Vector4_pppq(Object value) => (value as api.Vector4).pppq;
Object? _Vector4_ppqs(Object value) => (value as api.Vector4).ppqs;
Object? _Vector4_ppqt(Object value) => (value as api.Vector4).ppqt;
Object? _Vector4_ppqp(Object value) => (value as api.Vector4).ppqp;
Object? _Vector4_ppqq(Object value) => (value as api.Vector4).ppqq;
Object? _Vector4_pqss(Object value) => (value as api.Vector4).pqss;
Object? _Vector4_pqst(Object value) => (value as api.Vector4).pqst;
Object? _Vector4_pqsp(Object value) => (value as api.Vector4).pqsp;
Object? _Vector4_pqsq(Object value) => (value as api.Vector4).pqsq;
Object? _Vector4_pqts(Object value) => (value as api.Vector4).pqts;
Object? _Vector4_pqtt(Object value) => (value as api.Vector4).pqtt;
Object? _Vector4_pqtp(Object value) => (value as api.Vector4).pqtp;
Object? _Vector4_pqtq(Object value) => (value as api.Vector4).pqtq;
Object? _Vector4_pqps(Object value) => (value as api.Vector4).pqps;
Object? _Vector4_pqpt(Object value) => (value as api.Vector4).pqpt;
Object? _Vector4_pqpp(Object value) => (value as api.Vector4).pqpp;
Object? _Vector4_pqpq(Object value) => (value as api.Vector4).pqpq;
Object? _Vector4_pqqs(Object value) => (value as api.Vector4).pqqs;
Object? _Vector4_pqqt(Object value) => (value as api.Vector4).pqqt;
Object? _Vector4_pqqp(Object value) => (value as api.Vector4).pqqp;
Object? _Vector4_pqqq(Object value) => (value as api.Vector4).pqqq;
Object? _Vector4_qsss(Object value) => (value as api.Vector4).qsss;
Object? _Vector4_qsst(Object value) => (value as api.Vector4).qsst;
Object? _Vector4_qssp(Object value) => (value as api.Vector4).qssp;
Object? _Vector4_qssq(Object value) => (value as api.Vector4).qssq;
Object? _Vector4_qsts(Object value) => (value as api.Vector4).qsts;
Object? _Vector4_qstt(Object value) => (value as api.Vector4).qstt;
Object? _Vector4_qstp(Object value) => (value as api.Vector4).qstp;
Object? _Vector4_qstq(Object value) => (value as api.Vector4).qstq;
Object? _Vector4_qsps(Object value) => (value as api.Vector4).qsps;
Object? _Vector4_qspt(Object value) => (value as api.Vector4).qspt;
Object? _Vector4_qspp(Object value) => (value as api.Vector4).qspp;
Object? _Vector4_qspq(Object value) => (value as api.Vector4).qspq;
Object? _Vector4_qsqs(Object value) => (value as api.Vector4).qsqs;
Object? _Vector4_qsqt(Object value) => (value as api.Vector4).qsqt;
Object? _Vector4_qsqp(Object value) => (value as api.Vector4).qsqp;
Object? _Vector4_qsqq(Object value) => (value as api.Vector4).qsqq;
Object? _Vector4_qtss(Object value) => (value as api.Vector4).qtss;
Object? _Vector4_qtst(Object value) => (value as api.Vector4).qtst;
Object? _Vector4_qtsp(Object value) => (value as api.Vector4).qtsp;
Object? _Vector4_qtsq(Object value) => (value as api.Vector4).qtsq;
Object? _Vector4_qtts(Object value) => (value as api.Vector4).qtts;
Object? _Vector4_qttt(Object value) => (value as api.Vector4).qttt;
Object? _Vector4_qttp(Object value) => (value as api.Vector4).qttp;
Object? _Vector4_qttq(Object value) => (value as api.Vector4).qttq;
Object? _Vector4_qtps(Object value) => (value as api.Vector4).qtps;
Object? _Vector4_qtpt(Object value) => (value as api.Vector4).qtpt;
Object? _Vector4_qtpp(Object value) => (value as api.Vector4).qtpp;
Object? _Vector4_qtpq(Object value) => (value as api.Vector4).qtpq;
Object? _Vector4_qtqs(Object value) => (value as api.Vector4).qtqs;
Object? _Vector4_qtqt(Object value) => (value as api.Vector4).qtqt;
Object? _Vector4_qtqp(Object value) => (value as api.Vector4).qtqp;
Object? _Vector4_qtqq(Object value) => (value as api.Vector4).qtqq;
Object? _Vector4_qpss(Object value) => (value as api.Vector4).qpss;
Object? _Vector4_qpst(Object value) => (value as api.Vector4).qpst;
Object? _Vector4_qpsp(Object value) => (value as api.Vector4).qpsp;
Object? _Vector4_qpsq(Object value) => (value as api.Vector4).qpsq;
Object? _Vector4_qpts(Object value) => (value as api.Vector4).qpts;
Object? _Vector4_qptt(Object value) => (value as api.Vector4).qptt;
Object? _Vector4_qptp(Object value) => (value as api.Vector4).qptp;
Object? _Vector4_qptq(Object value) => (value as api.Vector4).qptq;
Object? _Vector4_qpps(Object value) => (value as api.Vector4).qpps;
Object? _Vector4_qppt(Object value) => (value as api.Vector4).qppt;
Object? _Vector4_qppp(Object value) => (value as api.Vector4).qppp;
Object? _Vector4_qppq(Object value) => (value as api.Vector4).qppq;
Object? _Vector4_qpqs(Object value) => (value as api.Vector4).qpqs;
Object? _Vector4_qpqt(Object value) => (value as api.Vector4).qpqt;
Object? _Vector4_qpqp(Object value) => (value as api.Vector4).qpqp;
Object? _Vector4_qpqq(Object value) => (value as api.Vector4).qpqq;
Object? _Vector4_qqss(Object value) => (value as api.Vector4).qqss;
Object? _Vector4_qqst(Object value) => (value as api.Vector4).qqst;
Object? _Vector4_qqsp(Object value) => (value as api.Vector4).qqsp;
Object? _Vector4_qqsq(Object value) => (value as api.Vector4).qqsq;
Object? _Vector4_qqts(Object value) => (value as api.Vector4).qqts;
Object? _Vector4_qqtt(Object value) => (value as api.Vector4).qqtt;
Object? _Vector4_qqtp(Object value) => (value as api.Vector4).qqtp;
Object? _Vector4_qqtq(Object value) => (value as api.Vector4).qqtq;
Object? _Vector4_qqps(Object value) => (value as api.Vector4).qqps;
Object? _Vector4_qqpt(Object value) => (value as api.Vector4).qqpt;
Object? _Vector4_qqpp(Object value) => (value as api.Vector4).qqpp;
Object? _Vector4_qqpq(Object value) => (value as api.Vector4).qqpq;
Object? _Vector4_qqqs(Object value) => (value as api.Vector4).qqqs;
Object? _Vector4_qqqt(Object value) => (value as api.Vector4).qqqt;
Object? _Vector4_qqqp(Object value) => (value as api.Vector4).qqqp;
Object? _Vector4_qqqq(Object value) => (value as api.Vector4).qqqq;
void _Vector4_set_length(Object receiver, Object? value) {
  (receiver as api.Vector4).length = value as double;
}

void _Vector4_set_xy(Object receiver, Object? value) {
  (receiver as api.Vector4).xy = value as api.Vector2;
}

void _Vector4_set_xz(Object receiver, Object? value) {
  (receiver as api.Vector4).xz = value as api.Vector2;
}

void _Vector4_set_xw(Object receiver, Object? value) {
  (receiver as api.Vector4).xw = value as api.Vector2;
}

void _Vector4_set_yx(Object receiver, Object? value) {
  (receiver as api.Vector4).yx = value as api.Vector2;
}

void _Vector4_set_yz(Object receiver, Object? value) {
  (receiver as api.Vector4).yz = value as api.Vector2;
}

void _Vector4_set_yw(Object receiver, Object? value) {
  (receiver as api.Vector4).yw = value as api.Vector2;
}

void _Vector4_set_zx(Object receiver, Object? value) {
  (receiver as api.Vector4).zx = value as api.Vector2;
}

void _Vector4_set_zy(Object receiver, Object? value) {
  (receiver as api.Vector4).zy = value as api.Vector2;
}

void _Vector4_set_zw(Object receiver, Object? value) {
  (receiver as api.Vector4).zw = value as api.Vector2;
}

void _Vector4_set_wx(Object receiver, Object? value) {
  (receiver as api.Vector4).wx = value as api.Vector2;
}

void _Vector4_set_wy(Object receiver, Object? value) {
  (receiver as api.Vector4).wy = value as api.Vector2;
}

void _Vector4_set_wz(Object receiver, Object? value) {
  (receiver as api.Vector4).wz = value as api.Vector2;
}

void _Vector4_set_xyz(Object receiver, Object? value) {
  (receiver as api.Vector4).xyz = value as api.Vector3;
}

void _Vector4_set_xyw(Object receiver, Object? value) {
  (receiver as api.Vector4).xyw = value as api.Vector3;
}

void _Vector4_set_xzy(Object receiver, Object? value) {
  (receiver as api.Vector4).xzy = value as api.Vector3;
}

void _Vector4_set_xzw(Object receiver, Object? value) {
  (receiver as api.Vector4).xzw = value as api.Vector3;
}

void _Vector4_set_xwy(Object receiver, Object? value) {
  (receiver as api.Vector4).xwy = value as api.Vector3;
}

void _Vector4_set_xwz(Object receiver, Object? value) {
  (receiver as api.Vector4).xwz = value as api.Vector3;
}

void _Vector4_set_yxz(Object receiver, Object? value) {
  (receiver as api.Vector4).yxz = value as api.Vector3;
}

void _Vector4_set_yxw(Object receiver, Object? value) {
  (receiver as api.Vector4).yxw = value as api.Vector3;
}

void _Vector4_set_yzx(Object receiver, Object? value) {
  (receiver as api.Vector4).yzx = value as api.Vector3;
}

void _Vector4_set_yzw(Object receiver, Object? value) {
  (receiver as api.Vector4).yzw = value as api.Vector3;
}

void _Vector4_set_ywx(Object receiver, Object? value) {
  (receiver as api.Vector4).ywx = value as api.Vector3;
}

void _Vector4_set_ywz(Object receiver, Object? value) {
  (receiver as api.Vector4).ywz = value as api.Vector3;
}

void _Vector4_set_zxy(Object receiver, Object? value) {
  (receiver as api.Vector4).zxy = value as api.Vector3;
}

void _Vector4_set_zxw(Object receiver, Object? value) {
  (receiver as api.Vector4).zxw = value as api.Vector3;
}

void _Vector4_set_zyx(Object receiver, Object? value) {
  (receiver as api.Vector4).zyx = value as api.Vector3;
}

void _Vector4_set_zyw(Object receiver, Object? value) {
  (receiver as api.Vector4).zyw = value as api.Vector3;
}

void _Vector4_set_zwx(Object receiver, Object? value) {
  (receiver as api.Vector4).zwx = value as api.Vector3;
}

void _Vector4_set_zwy(Object receiver, Object? value) {
  (receiver as api.Vector4).zwy = value as api.Vector3;
}

void _Vector4_set_wxy(Object receiver, Object? value) {
  (receiver as api.Vector4).wxy = value as api.Vector3;
}

void _Vector4_set_wxz(Object receiver, Object? value) {
  (receiver as api.Vector4).wxz = value as api.Vector3;
}

void _Vector4_set_wyx(Object receiver, Object? value) {
  (receiver as api.Vector4).wyx = value as api.Vector3;
}

void _Vector4_set_wyz(Object receiver, Object? value) {
  (receiver as api.Vector4).wyz = value as api.Vector3;
}

void _Vector4_set_wzx(Object receiver, Object? value) {
  (receiver as api.Vector4).wzx = value as api.Vector3;
}

void _Vector4_set_wzy(Object receiver, Object? value) {
  (receiver as api.Vector4).wzy = value as api.Vector3;
}

void _Vector4_set_xyzw(Object receiver, Object? value) {
  (receiver as api.Vector4).xyzw = value as api.Vector4;
}

void _Vector4_set_xywz(Object receiver, Object? value) {
  (receiver as api.Vector4).xywz = value as api.Vector4;
}

void _Vector4_set_xzyw(Object receiver, Object? value) {
  (receiver as api.Vector4).xzyw = value as api.Vector4;
}

void _Vector4_set_xzwy(Object receiver, Object? value) {
  (receiver as api.Vector4).xzwy = value as api.Vector4;
}

void _Vector4_set_xwyz(Object receiver, Object? value) {
  (receiver as api.Vector4).xwyz = value as api.Vector4;
}

void _Vector4_set_xwzy(Object receiver, Object? value) {
  (receiver as api.Vector4).xwzy = value as api.Vector4;
}

void _Vector4_set_yxzw(Object receiver, Object? value) {
  (receiver as api.Vector4).yxzw = value as api.Vector4;
}

void _Vector4_set_yxwz(Object receiver, Object? value) {
  (receiver as api.Vector4).yxwz = value as api.Vector4;
}

void _Vector4_set_yzxw(Object receiver, Object? value) {
  (receiver as api.Vector4).yzxw = value as api.Vector4;
}

void _Vector4_set_yzwx(Object receiver, Object? value) {
  (receiver as api.Vector4).yzwx = value as api.Vector4;
}

void _Vector4_set_ywxz(Object receiver, Object? value) {
  (receiver as api.Vector4).ywxz = value as api.Vector4;
}

void _Vector4_set_ywzx(Object receiver, Object? value) {
  (receiver as api.Vector4).ywzx = value as api.Vector4;
}

void _Vector4_set_zxyw(Object receiver, Object? value) {
  (receiver as api.Vector4).zxyw = value as api.Vector4;
}

void _Vector4_set_zxwy(Object receiver, Object? value) {
  (receiver as api.Vector4).zxwy = value as api.Vector4;
}

void _Vector4_set_zyxw(Object receiver, Object? value) {
  (receiver as api.Vector4).zyxw = value as api.Vector4;
}

void _Vector4_set_zywx(Object receiver, Object? value) {
  (receiver as api.Vector4).zywx = value as api.Vector4;
}

void _Vector4_set_zwxy(Object receiver, Object? value) {
  (receiver as api.Vector4).zwxy = value as api.Vector4;
}

void _Vector4_set_zwyx(Object receiver, Object? value) {
  (receiver as api.Vector4).zwyx = value as api.Vector4;
}

void _Vector4_set_wxyz(Object receiver, Object? value) {
  (receiver as api.Vector4).wxyz = value as api.Vector4;
}

void _Vector4_set_wxzy(Object receiver, Object? value) {
  (receiver as api.Vector4).wxzy = value as api.Vector4;
}

void _Vector4_set_wyxz(Object receiver, Object? value) {
  (receiver as api.Vector4).wyxz = value as api.Vector4;
}

void _Vector4_set_wyzx(Object receiver, Object? value) {
  (receiver as api.Vector4).wyzx = value as api.Vector4;
}

void _Vector4_set_wzxy(Object receiver, Object? value) {
  (receiver as api.Vector4).wzxy = value as api.Vector4;
}

void _Vector4_set_wzyx(Object receiver, Object? value) {
  (receiver as api.Vector4).wzyx = value as api.Vector4;
}

void _Vector4_set_r(Object receiver, Object? value) {
  (receiver as api.Vector4).r = value as double;
}

void _Vector4_set_g(Object receiver, Object? value) {
  (receiver as api.Vector4).g = value as double;
}

void _Vector4_set_b(Object receiver, Object? value) {
  (receiver as api.Vector4).b = value as double;
}

void _Vector4_set_a(Object receiver, Object? value) {
  (receiver as api.Vector4).a = value as double;
}

void _Vector4_set_s(Object receiver, Object? value) {
  (receiver as api.Vector4).s = value as double;
}

void _Vector4_set_t(Object receiver, Object? value) {
  (receiver as api.Vector4).t = value as double;
}

void _Vector4_set_p(Object receiver, Object? value) {
  (receiver as api.Vector4).p = value as double;
}

void _Vector4_set_q(Object receiver, Object? value) {
  (receiver as api.Vector4).q = value as double;
}

void _Vector4_set_x(Object receiver, Object? value) {
  (receiver as api.Vector4).x = value as double;
}

void _Vector4_set_y(Object receiver, Object? value) {
  (receiver as api.Vector4).y = value as double;
}

void _Vector4_set_z(Object receiver, Object? value) {
  (receiver as api.Vector4).z = value as double;
}

void _Vector4_set_w(Object receiver, Object? value) {
  (receiver as api.Vector4).w = value as double;
}

void _Vector4_set_rg(Object receiver, Object? value) {
  (receiver as api.Vector4).rg = value as api.Vector2;
}

void _Vector4_set_rb(Object receiver, Object? value) {
  (receiver as api.Vector4).rb = value as api.Vector2;
}

void _Vector4_set_ra(Object receiver, Object? value) {
  (receiver as api.Vector4).ra = value as api.Vector2;
}

void _Vector4_set_gr(Object receiver, Object? value) {
  (receiver as api.Vector4).gr = value as api.Vector2;
}

void _Vector4_set_gb(Object receiver, Object? value) {
  (receiver as api.Vector4).gb = value as api.Vector2;
}

void _Vector4_set_ga(Object receiver, Object? value) {
  (receiver as api.Vector4).ga = value as api.Vector2;
}

void _Vector4_set_br(Object receiver, Object? value) {
  (receiver as api.Vector4).br = value as api.Vector2;
}

void _Vector4_set_bg(Object receiver, Object? value) {
  (receiver as api.Vector4).bg = value as api.Vector2;
}

void _Vector4_set_ba(Object receiver, Object? value) {
  (receiver as api.Vector4).ba = value as api.Vector2;
}

void _Vector4_set_ar(Object receiver, Object? value) {
  (receiver as api.Vector4).ar = value as api.Vector2;
}

void _Vector4_set_ag(Object receiver, Object? value) {
  (receiver as api.Vector4).ag = value as api.Vector2;
}

void _Vector4_set_ab(Object receiver, Object? value) {
  (receiver as api.Vector4).ab = value as api.Vector2;
}

void _Vector4_set_rgb(Object receiver, Object? value) {
  (receiver as api.Vector4).rgb = value as api.Vector3;
}

void _Vector4_set_rga(Object receiver, Object? value) {
  (receiver as api.Vector4).rga = value as api.Vector3;
}

void _Vector4_set_rbg(Object receiver, Object? value) {
  (receiver as api.Vector4).rbg = value as api.Vector3;
}

void _Vector4_set_rba(Object receiver, Object? value) {
  (receiver as api.Vector4).rba = value as api.Vector3;
}

void _Vector4_set_rag(Object receiver, Object? value) {
  (receiver as api.Vector4).rag = value as api.Vector3;
}

void _Vector4_set_rab(Object receiver, Object? value) {
  (receiver as api.Vector4).rab = value as api.Vector3;
}

void _Vector4_set_grb(Object receiver, Object? value) {
  (receiver as api.Vector4).grb = value as api.Vector3;
}

void _Vector4_set_gra(Object receiver, Object? value) {
  (receiver as api.Vector4).gra = value as api.Vector3;
}

void _Vector4_set_gbr(Object receiver, Object? value) {
  (receiver as api.Vector4).gbr = value as api.Vector3;
}

void _Vector4_set_gba(Object receiver, Object? value) {
  (receiver as api.Vector4).gba = value as api.Vector3;
}

void _Vector4_set_gar(Object receiver, Object? value) {
  (receiver as api.Vector4).gar = value as api.Vector3;
}

void _Vector4_set_gab(Object receiver, Object? value) {
  (receiver as api.Vector4).gab = value as api.Vector3;
}

void _Vector4_set_brg(Object receiver, Object? value) {
  (receiver as api.Vector4).brg = value as api.Vector3;
}

void _Vector4_set_bra(Object receiver, Object? value) {
  (receiver as api.Vector4).bra = value as api.Vector3;
}

void _Vector4_set_bgr(Object receiver, Object? value) {
  (receiver as api.Vector4).bgr = value as api.Vector3;
}

void _Vector4_set_bga(Object receiver, Object? value) {
  (receiver as api.Vector4).bga = value as api.Vector3;
}

void _Vector4_set_bar(Object receiver, Object? value) {
  (receiver as api.Vector4).bar = value as api.Vector3;
}

void _Vector4_set_bag(Object receiver, Object? value) {
  (receiver as api.Vector4).bag = value as api.Vector3;
}

void _Vector4_set_arg(Object receiver, Object? value) {
  (receiver as api.Vector4).arg = value as api.Vector3;
}

void _Vector4_set_arb(Object receiver, Object? value) {
  (receiver as api.Vector4).arb = value as api.Vector3;
}

void _Vector4_set_agr(Object receiver, Object? value) {
  (receiver as api.Vector4).agr = value as api.Vector3;
}

void _Vector4_set_agb(Object receiver, Object? value) {
  (receiver as api.Vector4).agb = value as api.Vector3;
}

void _Vector4_set_abr(Object receiver, Object? value) {
  (receiver as api.Vector4).abr = value as api.Vector3;
}

void _Vector4_set_abg(Object receiver, Object? value) {
  (receiver as api.Vector4).abg = value as api.Vector3;
}

void _Vector4_set_rgba(Object receiver, Object? value) {
  (receiver as api.Vector4).rgba = value as api.Vector4;
}

void _Vector4_set_rgab(Object receiver, Object? value) {
  (receiver as api.Vector4).rgab = value as api.Vector4;
}

void _Vector4_set_rbga(Object receiver, Object? value) {
  (receiver as api.Vector4).rbga = value as api.Vector4;
}

void _Vector4_set_rbag(Object receiver, Object? value) {
  (receiver as api.Vector4).rbag = value as api.Vector4;
}

void _Vector4_set_ragb(Object receiver, Object? value) {
  (receiver as api.Vector4).ragb = value as api.Vector4;
}

void _Vector4_set_rabg(Object receiver, Object? value) {
  (receiver as api.Vector4).rabg = value as api.Vector4;
}

void _Vector4_set_grba(Object receiver, Object? value) {
  (receiver as api.Vector4).grba = value as api.Vector4;
}

void _Vector4_set_grab(Object receiver, Object? value) {
  (receiver as api.Vector4).grab = value as api.Vector4;
}

void _Vector4_set_gbra(Object receiver, Object? value) {
  (receiver as api.Vector4).gbra = value as api.Vector4;
}

void _Vector4_set_gbar(Object receiver, Object? value) {
  (receiver as api.Vector4).gbar = value as api.Vector4;
}

void _Vector4_set_garb(Object receiver, Object? value) {
  (receiver as api.Vector4).garb = value as api.Vector4;
}

void _Vector4_set_gabr(Object receiver, Object? value) {
  (receiver as api.Vector4).gabr = value as api.Vector4;
}

void _Vector4_set_brga(Object receiver, Object? value) {
  (receiver as api.Vector4).brga = value as api.Vector4;
}

void _Vector4_set_brag(Object receiver, Object? value) {
  (receiver as api.Vector4).brag = value as api.Vector4;
}

void _Vector4_set_bgra(Object receiver, Object? value) {
  (receiver as api.Vector4).bgra = value as api.Vector4;
}

void _Vector4_set_bgar(Object receiver, Object? value) {
  (receiver as api.Vector4).bgar = value as api.Vector4;
}

void _Vector4_set_barg(Object receiver, Object? value) {
  (receiver as api.Vector4).barg = value as api.Vector4;
}

void _Vector4_set_bagr(Object receiver, Object? value) {
  (receiver as api.Vector4).bagr = value as api.Vector4;
}

void _Vector4_set_argb(Object receiver, Object? value) {
  (receiver as api.Vector4).argb = value as api.Vector4;
}

void _Vector4_set_arbg(Object receiver, Object? value) {
  (receiver as api.Vector4).arbg = value as api.Vector4;
}

void _Vector4_set_agrb(Object receiver, Object? value) {
  (receiver as api.Vector4).agrb = value as api.Vector4;
}

void _Vector4_set_agbr(Object receiver, Object? value) {
  (receiver as api.Vector4).agbr = value as api.Vector4;
}

void _Vector4_set_abrg(Object receiver, Object? value) {
  (receiver as api.Vector4).abrg = value as api.Vector4;
}

void _Vector4_set_abgr(Object receiver, Object? value) {
  (receiver as api.Vector4).abgr = value as api.Vector4;
}

void _Vector4_set_st(Object receiver, Object? value) {
  (receiver as api.Vector4).st = value as api.Vector2;
}

void _Vector4_set_sp(Object receiver, Object? value) {
  (receiver as api.Vector4).sp = value as api.Vector2;
}

void _Vector4_set_sq(Object receiver, Object? value) {
  (receiver as api.Vector4).sq = value as api.Vector2;
}

void _Vector4_set_ts(Object receiver, Object? value) {
  (receiver as api.Vector4).ts = value as api.Vector2;
}

void _Vector4_set_tp(Object receiver, Object? value) {
  (receiver as api.Vector4).tp = value as api.Vector2;
}

void _Vector4_set_tq(Object receiver, Object? value) {
  (receiver as api.Vector4).tq = value as api.Vector2;
}

void _Vector4_set_ps(Object receiver, Object? value) {
  (receiver as api.Vector4).ps = value as api.Vector2;
}

void _Vector4_set_pt(Object receiver, Object? value) {
  (receiver as api.Vector4).pt = value as api.Vector2;
}

void _Vector4_set_pq(Object receiver, Object? value) {
  (receiver as api.Vector4).pq = value as api.Vector2;
}

void _Vector4_set_qs(Object receiver, Object? value) {
  (receiver as api.Vector4).qs = value as api.Vector2;
}

void _Vector4_set_qt(Object receiver, Object? value) {
  (receiver as api.Vector4).qt = value as api.Vector2;
}

void _Vector4_set_qp(Object receiver, Object? value) {
  (receiver as api.Vector4).qp = value as api.Vector2;
}

void _Vector4_set_stp(Object receiver, Object? value) {
  (receiver as api.Vector4).stp = value as api.Vector3;
}

void _Vector4_set_stq(Object receiver, Object? value) {
  (receiver as api.Vector4).stq = value as api.Vector3;
}

void _Vector4_set_spt(Object receiver, Object? value) {
  (receiver as api.Vector4).spt = value as api.Vector3;
}

void _Vector4_set_spq(Object receiver, Object? value) {
  (receiver as api.Vector4).spq = value as api.Vector3;
}

void _Vector4_set_sqt(Object receiver, Object? value) {
  (receiver as api.Vector4).sqt = value as api.Vector3;
}

void _Vector4_set_sqp(Object receiver, Object? value) {
  (receiver as api.Vector4).sqp = value as api.Vector3;
}

void _Vector4_set_tsp(Object receiver, Object? value) {
  (receiver as api.Vector4).tsp = value as api.Vector3;
}

void _Vector4_set_tsq(Object receiver, Object? value) {
  (receiver as api.Vector4).tsq = value as api.Vector3;
}

void _Vector4_set_tps(Object receiver, Object? value) {
  (receiver as api.Vector4).tps = value as api.Vector3;
}

void _Vector4_set_tpq(Object receiver, Object? value) {
  (receiver as api.Vector4).tpq = value as api.Vector3;
}

void _Vector4_set_tqs(Object receiver, Object? value) {
  (receiver as api.Vector4).tqs = value as api.Vector3;
}

void _Vector4_set_tqp(Object receiver, Object? value) {
  (receiver as api.Vector4).tqp = value as api.Vector3;
}

void _Vector4_set_pst(Object receiver, Object? value) {
  (receiver as api.Vector4).pst = value as api.Vector3;
}

void _Vector4_set_psq(Object receiver, Object? value) {
  (receiver as api.Vector4).psq = value as api.Vector3;
}

void _Vector4_set_pts(Object receiver, Object? value) {
  (receiver as api.Vector4).pts = value as api.Vector3;
}

void _Vector4_set_ptq(Object receiver, Object? value) {
  (receiver as api.Vector4).ptq = value as api.Vector3;
}

void _Vector4_set_pqs(Object receiver, Object? value) {
  (receiver as api.Vector4).pqs = value as api.Vector3;
}

void _Vector4_set_pqt(Object receiver, Object? value) {
  (receiver as api.Vector4).pqt = value as api.Vector3;
}

void _Vector4_set_qst(Object receiver, Object? value) {
  (receiver as api.Vector4).qst = value as api.Vector3;
}

void _Vector4_set_qsp(Object receiver, Object? value) {
  (receiver as api.Vector4).qsp = value as api.Vector3;
}

void _Vector4_set_qts(Object receiver, Object? value) {
  (receiver as api.Vector4).qts = value as api.Vector3;
}

void _Vector4_set_qtp(Object receiver, Object? value) {
  (receiver as api.Vector4).qtp = value as api.Vector3;
}

void _Vector4_set_qps(Object receiver, Object? value) {
  (receiver as api.Vector4).qps = value as api.Vector3;
}

void _Vector4_set_qpt(Object receiver, Object? value) {
  (receiver as api.Vector4).qpt = value as api.Vector3;
}

void _Vector4_set_stpq(Object receiver, Object? value) {
  (receiver as api.Vector4).stpq = value as api.Vector4;
}

void _Vector4_set_stqp(Object receiver, Object? value) {
  (receiver as api.Vector4).stqp = value as api.Vector4;
}

void _Vector4_set_sptq(Object receiver, Object? value) {
  (receiver as api.Vector4).sptq = value as api.Vector4;
}

void _Vector4_set_spqt(Object receiver, Object? value) {
  (receiver as api.Vector4).spqt = value as api.Vector4;
}

void _Vector4_set_sqtp(Object receiver, Object? value) {
  (receiver as api.Vector4).sqtp = value as api.Vector4;
}

void _Vector4_set_sqpt(Object receiver, Object? value) {
  (receiver as api.Vector4).sqpt = value as api.Vector4;
}

void _Vector4_set_tspq(Object receiver, Object? value) {
  (receiver as api.Vector4).tspq = value as api.Vector4;
}

void _Vector4_set_tsqp(Object receiver, Object? value) {
  (receiver as api.Vector4).tsqp = value as api.Vector4;
}

void _Vector4_set_tpsq(Object receiver, Object? value) {
  (receiver as api.Vector4).tpsq = value as api.Vector4;
}

void _Vector4_set_tpqs(Object receiver, Object? value) {
  (receiver as api.Vector4).tpqs = value as api.Vector4;
}

void _Vector4_set_tqsp(Object receiver, Object? value) {
  (receiver as api.Vector4).tqsp = value as api.Vector4;
}

void _Vector4_set_tqps(Object receiver, Object? value) {
  (receiver as api.Vector4).tqps = value as api.Vector4;
}

void _Vector4_set_pstq(Object receiver, Object? value) {
  (receiver as api.Vector4).pstq = value as api.Vector4;
}

void _Vector4_set_psqt(Object receiver, Object? value) {
  (receiver as api.Vector4).psqt = value as api.Vector4;
}

void _Vector4_set_ptsq(Object receiver, Object? value) {
  (receiver as api.Vector4).ptsq = value as api.Vector4;
}

void _Vector4_set_ptqs(Object receiver, Object? value) {
  (receiver as api.Vector4).ptqs = value as api.Vector4;
}

void _Vector4_set_pqst(Object receiver, Object? value) {
  (receiver as api.Vector4).pqst = value as api.Vector4;
}

void _Vector4_set_pqts(Object receiver, Object? value) {
  (receiver as api.Vector4).pqts = value as api.Vector4;
}

void _Vector4_set_qstp(Object receiver, Object? value) {
  (receiver as api.Vector4).qstp = value as api.Vector4;
}

void _Vector4_set_qspt(Object receiver, Object? value) {
  (receiver as api.Vector4).qspt = value as api.Vector4;
}

void _Vector4_set_qtsp(Object receiver, Object? value) {
  (receiver as api.Vector4).qtsp = value as api.Vector4;
}

void _Vector4_set_qtps(Object receiver, Object? value) {
  (receiver as api.Vector4).qtps = value as api.Vector4;
}

void _Vector4_set_qpst(Object receiver, Object? value) {
  (receiver as api.Vector4).qpst = value as api.Vector4;
}

void _Vector4_set_qpts(Object receiver, Object? value) {
  (receiver as api.Vector4).qpts = value as api.Vector4;
}

Object? _Vector4_min(Map<String, Object?> values) {
  api.Vector4.min(
    values["a"] as api.Vector4,
    values["b"] as api.Vector4,
    values["result"] as api.Vector4,
  );
  return null;
}

Object? _Vector4_max(Map<String, Object?> values) {
  api.Vector4.max(
    values["a"] as api.Vector4,
    values["b"] as api.Vector4,
    values["result"] as api.Vector4,
  );
  return null;
}

Object? _Vector4_mix(Map<String, Object?> values) {
  api.Vector4.mix(
    values["min"] as api.Vector4,
    values["max"] as api.Vector4,
    values["a"] as double,
    values["result"] as api.Vector4,
  );
  return null;
}

Object? _Vector4_setValues(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector4).setValues(
    values["x"] as double,
    values["y"] as double,
    values["z"] as double,
    values["w"] as double,
  );
  return null;
}

Object? _Vector4_setZero(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector4).setZero();
  return null;
}

Object? _Vector4_setIdentity(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector4).setIdentity();
  return null;
}

Object? _Vector4_setFrom(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector4).setFrom(values["other"] as api.Vector4);
  return null;
}

Object? _Vector4_splat(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector4).splat(values["arg"] as double);
  return null;
}

Object? _Vector4_toString(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector4).toString();
}

Object? _Vector4_normalize(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector4).normalize();
}

Object? _Vector4_normalizeLength(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector4).normalizeLength();
}

Object? _Vector4_normalized(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector4).normalized();
}

Object? _Vector4_normalizeInto(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector4).normalizeInto(values["out"] as api.Vector4);
}

Object? _Vector4_distanceTo(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector4).distanceTo(values["arg"] as api.Vector4);
}

Object? _Vector4_distanceToSquared(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Vector4).distanceToSquared(
    values["arg"] as api.Vector4,
  );
}

Object? _Vector4_dot(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector4).dot(values["other"] as api.Vector4);
}

Object? _Vector4_applyMatrix4(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector4).applyMatrix4(values["arg"] as api.Matrix4);
  return null;
}

Object? _Vector4_relativeError(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector4).relativeError(
    values["correct"] as api.Vector4,
  );
}

Object? _Vector4_absoluteError(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector4).absoluteError(
    values["correct"] as api.Vector4,
  );
}

Object? _Vector4_add(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector4).add(values["arg"] as api.Vector4);
  return null;
}

Object? _Vector4_addScaled(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector4).addScaled(
    values["arg"] as api.Vector4,
    values["factor"] as double,
  );
  return null;
}

Object? _Vector4_sub(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector4).sub(values["arg"] as api.Vector4);
  return null;
}

Object? _Vector4_multiply(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector4).multiply(values["arg"] as api.Vector4);
  return null;
}

Object? _Vector4_div(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector4).div(values["arg"] as api.Vector4);
  return null;
}

Object? _Vector4_scale(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector4).scale(values["arg"] as double);
  return null;
}

Object? _Vector4_scaled(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector4).scaled(values["arg"] as double);
}

Object? _Vector4_negate(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector4).negate();
  return null;
}

Object? _Vector4_absolute(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector4).absolute();
  return null;
}

Object? _Vector4_clamp(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector4).clamp(
    values["min"] as api.Vector4,
    values["max"] as api.Vector4,
  );
  return null;
}

Object? _Vector4_clampScalar(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector4).clampScalar(
    values["min"] as double,
    values["max"] as double,
  );
  return null;
}

Object? _Vector4_floor(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector4).floor();
  return null;
}

Object? _Vector4_ceil(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector4).ceil();
  return null;
}

Object? _Vector4_round(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector4).round();
  return null;
}

Object? _Vector4_roundToZero(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector4).roundToZero();
  return null;
}

Object? _Vector4_clone(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector4).clone();
}

Object? _Vector4_copyInto(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector4).copyInto(values["arg"] as api.Vector4);
}

Object? _Vector4_copyIntoArray(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector4).copyIntoArray(
    values["array"] as List<double>,
    values["offset"] as int,
  );
  return null;
}

Object? _Vector4_copyFromArray(Object receiver, Map<String, Object?> values) {
  (receiver as api.Vector4).copyFromArray(
    values["array"] as List<double>,
    values["offset"] as int,
  );
  return null;
}

Object? _Vector4_operatorGetIndex(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Vector4)[values["i"] as int];
}

Object? _Vector4_operatorSetIndex(
  Object receiver,
  Map<String, Object?> values,
) {
  (receiver as api.Vector4)[values["i"] as int] = values["v"] as double;
  return null;
}

Object? _Vector4_operatorAdd(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector4) + (values["other"] as api.Vector4);
}

Object? _Vector4_operatorSubtract(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Vector4) - (values["other"] as api.Vector4);
}

Object? _Vector4_operatorMultiply(
  Object receiver,
  Map<String, Object?> values,
) {
  return (receiver as api.Vector4) * (values["scale"] as double);
}

Object? _Vector4_operatorDivide(Object receiver, Map<String, Object?> values) {
  return (receiver as api.Vector4) / (values["scale"] as double);
}

Object? _Vector4_operatorNegate(Object receiver, Map<String, Object?> values) {
  return -(receiver as api.Vector4);
}

Object _createVector4(String ctor, Map<String, Object?> values) {
  switch (ctor) {
    case "":
      return api.Vector4(
        values["x"] as double,
        values["y"] as double,
        values["z"] as double,
        values["w"] as double,
      );
    case "array":
      return api.Vector4.array(
        values["array"] as List<double>,
        values["offset"] as int,
      );
    case "zero":
      return api.Vector4.zero();
    case "identity":
      return api.Vector4.identity();
    case "all":
      return api.Vector4.all(values["value"] as double);
    case "copy":
      return api.Vector4.copy(values["other"] as api.Vector4);
    case "fromFloat64List":
      return api.Vector4.fromFloat64List(
        values["_v4storage"] as api2.Float64List,
      );
    case "fromBuffer":
      return api.Vector4.fromBuffer(
        values["buffer"] as api2.ByteBuffer,
        values["offset"] as int,
      );
    default:
      throw ArgumentError('Unknown generated constructor');
  }
}

bool _isX509Certificate(Object value) => value is api3.X509Certificate;
Object? _X509Certificate_der(Object value) =>
    (value as api3.X509Certificate).der;
Object? _X509Certificate_pem(Object value) =>
    (value as api3.X509Certificate).pem;
Object? _X509Certificate_sha1(Object value) =>
    (value as api3.X509Certificate).sha1;
Object? _X509Certificate_subject(Object value) =>
    (value as api3.X509Certificate).subject;
Object? _X509Certificate_issuer(Object value) =>
    (value as api3.X509Certificate).issuer;
Object? _X509Certificate_startValidity(Object value) =>
    (value as api3.X509Certificate).startValidity;
Object? _X509Certificate_endValidity(Object value) =>
    (value as api3.X509Certificate).endValidity;
Object _createX509Certificate(String ctor, Map<String, Object?> values) =>
    throw ArgumentError('Abstract object has no constructor');
Function _flaxGeneric_HttpClientResponse_map<_Method0 extends Object?>() =>
    (FlaxDartTypes types) {
      Object? invoke(Object receiver, Map<String, Object?> values) {
        return (receiver as api3.HttpClientResponse).map<_Method0>(
          values["convert"] as _Method0 Function(List<int> event),
        );
      }

      return FlaxInstanceMethod(
        <FlaxParameter>[
          FlaxParameter(
            "convert",
            types.define<_Method0 Function(List<int> event)>(
              FlaxTypeRef(
                "callback",
                nullable: false,
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "event",
                      _flaxBinding4,
                      required: true,
                      positional: true,
                    ),
                  ],
                  types.ref<_Method0>(withinCallback: true),
                  FlaxCallbackAdapters.wrap1<List<int>, _Method0>,
                  id:
                      types.key<_Method0 Function(List<int> event)>() +
                      ":callback:<>(p:r:event:list:[int:])->parameter:",
                  invoke: FlaxCallbackAdapters.invoke1<List<int>, _Method0>,
                  matches: FlaxCallbackAdapters.matches1<List<int>, _Method0>,
                ),
              ),
            ),
            required: true,
          ),
        ],
        types.ref<api5.Stream<_Method0>>(),
        invoke,
      );
    };
Function _flaxGeneric_HttpClientResponse_asyncMap<
  _Method0 extends Object?
>() => (FlaxDartTypes types) {
  Object? invoke(Object receiver, Map<String, Object?> values) {
    return (receiver as api3.HttpClientResponse).asyncMap<_Method0>(
      values["convert"] as api5.FutureOr<_Method0> Function(List<int> event),
    );
  }

  Object _callback0(FlaxCallback _flaxBridgeCallback) => (List<int> p0) {
    final positional = <Object?>[];
    final named = <String, Object?>{};
    positional.add(p0);
    return _flaxBridgeCallback.call(positional, named)
        as api5.FutureOr<_Method0>;
  };
  bool _callback0Matches(Object value) =>
      value is api5.FutureOr<_Method0> Function(List<int> event);
  Object? _callback0Invoke(
    Object function,
    List<Object?> positional,
    Map<String, Object?> named,
  ) {
    return (function as api5.FutureOr<_Method0> Function(List<int> event))(
      positional[0] as List<int>,
    );
  }

  return FlaxInstanceMethod(
    <FlaxParameter>[
      FlaxParameter(
        "convert",
        types.define<api5.FutureOr<_Method0> Function(List<int> event)>(
          FlaxTypeRef(
            "callback",
            nullable: false,
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter(
                  "event",
                  _flaxBinding4,
                  required: true,
                  positional: true,
                ),
              ],
              types.ref<api5.FutureOr<_Method0>>(withinCallback: true),
              _callback0,
              id:
                  types
                      .key<
                        api5.FutureOr<_Method0> Function(List<int> event)
                      >() +
                  ":callback:<>(p:r:event:list:[int:])->futureOr:[parameter:]",
              invoke: _callback0Invoke,
              matches: _callback0Matches,
            ),
          ),
        ),
        required: true,
      ),
    ],
    types.ref<api5.Stream<_Method0>>(),
    invoke,
  );
};
Function _flaxGeneric_HttpClientResponse_asyncExpand<
  _Method0 extends Object?
>() => (FlaxDartTypes types) {
  Object? invoke(Object receiver, Map<String, Object?> values) {
    return (receiver as api3.HttpClientResponse).asyncExpand<_Method0>(
      values["convert"] as api5.Stream<_Method0>? Function(List<int> event),
    );
  }

  return FlaxInstanceMethod(
    <FlaxParameter>[
      FlaxParameter(
        "convert",
        types.define<api5.Stream<_Method0>? Function(List<int> event)>(
          FlaxTypeRef(
            "callback",
            nullable: false,
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter(
                  "event",
                  _flaxBinding4,
                  required: true,
                  positional: true,
                ),
              ],
              types.ref<api5.Stream<_Method0>?>(withinCallback: true),
              FlaxCallbackAdapters.wrap1<List<int>, api5.Stream<_Method0>?>,
              id:
                  types
                      .key<api5.Stream<_Method0>? Function(List<int> event)>() +
                  ":callback:<>(p:r:event:list:[int:])->stream?:flax.core/flutter#type:Stream[parameter:]",
              invoke: FlaxCallbackAdapters
                  .invoke1<List<int>, api5.Stream<_Method0>?>,
              matches: FlaxCallbackAdapters
                  .matches1<List<int>, api5.Stream<_Method0>?>,
            ),
          ),
        ),
        required: true,
      ),
    ],
    types.ref<api5.Stream<_Method0>>(),
    invoke,
  );
};
Function _flaxGeneric_HttpClientResponse_expand<
  _Method0 extends Object?
>() => (FlaxDartTypes types) {
  Object? invoke(Object receiver, Map<String, Object?> values) {
    return (receiver as api3.HttpClientResponse).expand<_Method0>(
      values["convert"] as Iterable<_Method0> Function(List<int> element),
    );
  }

  return FlaxInstanceMethod(
    <FlaxParameter>[
      FlaxParameter(
        "convert",
        types.define<Iterable<_Method0> Function(List<int> element)>(
          FlaxTypeRef(
            "callback",
            nullable: false,
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter(
                  "element",
                  _flaxBinding4,
                  required: true,
                  positional: true,
                ),
              ],
              types.ref<Iterable<_Method0>>(withinCallback: true),
              FlaxCallbackAdapters.wrap1<List<int>, Iterable<_Method0>>,
              id: types.key<Iterable<_Method0> Function(List<int> element)>() + ":callback:<>(p:r:element:list:[int:])->iterable:[parameter:]",
              invoke:
                  FlaxCallbackAdapters.invoke1<List<int>, Iterable<_Method0>>,
              matches:
                  FlaxCallbackAdapters.matches1<List<int>, Iterable<_Method0>>,
            ),
          ),
        ),
        required: true,
      ),
    ],
    types.ref<api5.Stream<_Method0>>(),
    invoke,
  );
};
Function
_flaxGeneric_HttpClientResponse_transform<_Method0 extends Object?>() =>
    (FlaxDartTypes types) {
      Object? invoke(Object receiver, Map<String, Object?> values) {
        return (receiver as api3.HttpClientResponse).transform<_Method0>(
          values["streamTransformer"]
              as api5.StreamTransformer<List<int>, _Method0>,
        );
      }

      return FlaxInstanceMethod(
        <FlaxParameter>[
          FlaxParameter(
            "streamTransformer",
            types.ref<api5.StreamTransformer<List<int>, _Method0>>(),
            required: true,
          ),
        ],
        types.ref<api5.Stream<_Method0>>(),
        invoke,
      );
    };
Function _flaxGeneric_HttpClientResponse_fold<
  _Method0 extends Object?
>() => (FlaxDartTypes types) {
  Object? invoke(Object receiver, Map<String, Object?> values) {
    return (receiver as api3.HttpClientResponse).fold<_Method0>(
      values["initialValue"] as _Method0,
      values["combine"]
          as _Method0 Function(_Method0 previous, List<int> element),
    );
  }

  return FlaxInstanceMethod(
    <FlaxParameter>[
      FlaxParameter("initialValue", types.ref<_Method0>(), required: true),
      FlaxParameter(
        "combine",
        types.define<_Method0 Function(_Method0 previous, List<int> element)>(
          FlaxTypeRef(
            "callback",
            nullable: false,
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter(
                  "previous",
                  types.ref<_Method0>(withinCallback: true),
                  required: true,
                  positional: true,
                ),
                FlaxCallbackParameter(
                  "element",
                  _flaxBinding4,
                  required: true,
                  positional: true,
                ),
              ],
              types.ref<_Method0>(withinCallback: true),
              FlaxCallbackAdapters.wrap2<_Method0, List<int>, _Method0>,
              id:
                  types
                      .key<
                        _Method0 Function(_Method0 previous, List<int> element)
                      >() +
                  ":callback:<>(p:r:previous:parameter:,p:r:element:list:[int:])->parameter:",
              invoke:
                  FlaxCallbackAdapters.invoke2<_Method0, List<int>, _Method0>,
              matches:
                  FlaxCallbackAdapters.matches2<_Method0, List<int>, _Method0>,
            ),
          ),
        ),
        required: true,
      ),
    ],
    types.ref<Future<_Method0>>(),
    invoke,
  );
};
Function _flaxGeneric_HttpClientResponse_cast<_Method0 extends Object?>() =>
    (FlaxDartTypes types) {
      Object? invoke(Object receiver, Map<String, Object?> values) {
        return (receiver as api3.HttpClientResponse).cast<_Method0>();
      }

      return FlaxInstanceMethod(
        _flaxBinding42,
        types.ref<api5.Stream<_Method0>>(),
        invoke,
      );
    };
Function _flaxGeneric_HttpClientResponse_drain<_Method0 extends Object?>() =>
    (FlaxDartTypes types) {
      Object? invoke(Object receiver, Map<String, Object?> values) {
        return (receiver as api3.HttpClientResponse).drain<_Method0>(
          values["futureValue"] as _Method0?,
        );
      }

      return FlaxInstanceMethod(
        <FlaxParameter>[
          FlaxParameter("futureValue", types.ref<_Method0?>(), required: false),
        ],
        types.ref<Future<_Method0>>(),
        invoke,
      );
    };
Function _flaxGeneric_SecureSocket_map<_Method0 extends Object?>() =>
    (FlaxDartTypes types) {
      Object? invoke(Object receiver, Map<String, Object?> values) {
        return (receiver as api3.SecureSocket).map<_Method0>(
          values["convert"] as _Method0 Function(api2.Uint8List event),
        );
      }

      return FlaxInstanceMethod(
        <FlaxParameter>[
          FlaxParameter(
            "convert",
            types.define<_Method0 Function(api2.Uint8List event)>(
              FlaxTypeRef(
                "callback",
                nullable: false,
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "event",
                      _flaxBinding14,
                      required: true,
                      positional: true,
                    ),
                  ],
                  types.ref<_Method0>(withinCallback: true),
                  FlaxCallbackAdapters.wrap1<api2.Uint8List, _Method0>,
                  id:
                      types.key<_Method0 Function(api2.Uint8List event)>() +
                      ":callback:<>(p:r:event:Uint8List:)->parameter:",
                  invoke:
                      FlaxCallbackAdapters.invoke1<api2.Uint8List, _Method0>,
                  matches:
                      FlaxCallbackAdapters.matches1<api2.Uint8List, _Method0>,
                ),
              ),
            ),
            required: true,
          ),
        ],
        types.ref<api5.Stream<_Method0>>(),
        invoke,
      );
    };
Function _flaxGeneric_SecureSocket_asyncMap<
  _Method0 extends Object?
>() => (FlaxDartTypes types) {
  Object? invoke(Object receiver, Map<String, Object?> values) {
    return (receiver as api3.SecureSocket).asyncMap<_Method0>(
      values["convert"]
          as api5.FutureOr<_Method0> Function(api2.Uint8List event),
    );
  }

  Object _callback0(FlaxCallback _flaxBridgeCallback) => (api2.Uint8List p0) {
    final positional = <Object?>[];
    final named = <String, Object?>{};
    positional.add(p0);
    return _flaxBridgeCallback.call(positional, named)
        as api5.FutureOr<_Method0>;
  };
  bool _callback0Matches(Object value) =>
      value is api5.FutureOr<_Method0> Function(api2.Uint8List event);
  Object? _callback0Invoke(
    Object function,
    List<Object?> positional,
    Map<String, Object?> named,
  ) {
    return (function as api5.FutureOr<_Method0> Function(api2.Uint8List event))(
      positional[0] as api2.Uint8List,
    );
  }

  return FlaxInstanceMethod(
    <FlaxParameter>[
      FlaxParameter(
        "convert",
        types.define<api5.FutureOr<_Method0> Function(api2.Uint8List event)>(
          FlaxTypeRef(
            "callback",
            nullable: false,
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter(
                  "event",
                  _flaxBinding14,
                  required: true,
                  positional: true,
                ),
              ],
              types.ref<api5.FutureOr<_Method0>>(withinCallback: true),
              _callback0,
              id:
                  types
                      .key<
                        api5.FutureOr<_Method0> Function(api2.Uint8List event)
                      >() +
                  ":callback:<>(p:r:event:Uint8List:)->futureOr:[parameter:]",
              invoke: _callback0Invoke,
              matches: _callback0Matches,
            ),
          ),
        ),
        required: true,
      ),
    ],
    types.ref<api5.Stream<_Method0>>(),
    invoke,
  );
};
Function _flaxGeneric_SecureSocket_asyncExpand<_Method0 extends Object?>() =>
    (FlaxDartTypes types) {
      Object? invoke(Object receiver, Map<String, Object?> values) {
        return (receiver as api3.SecureSocket).asyncExpand<_Method0>(
          values["convert"]
              as api5.Stream<_Method0>? Function(api2.Uint8List event),
        );
      }

      return FlaxInstanceMethod(
        <FlaxParameter>[
          FlaxParameter(
            "convert",
            types.define<api5.Stream<_Method0>? Function(api2.Uint8List event)>(
              FlaxTypeRef(
                "callback",
                nullable: false,
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "event",
                      _flaxBinding14,
                      required: true,
                      positional: true,
                    ),
                  ],
                  types.ref<api5.Stream<_Method0>?>(withinCallback: true),
                  FlaxCallbackAdapters
                      .wrap1<api2.Uint8List, api5.Stream<_Method0>?>,
                  id:
                      types
                          .key<
                            api5.Stream<_Method0>? Function(
                              api2.Uint8List event,
                            )
                          >() +
                      ":callback:<>(p:r:event:Uint8List:)->stream?:flax.core/flutter#type:Stream[parameter:]",
                  invoke: FlaxCallbackAdapters
                      .invoke1<api2.Uint8List, api5.Stream<_Method0>?>,
                  matches: FlaxCallbackAdapters
                      .matches1<api2.Uint8List, api5.Stream<_Method0>?>,
                ),
              ),
            ),
            required: true,
          ),
        ],
        types.ref<api5.Stream<_Method0>>(),
        invoke,
      );
    };
Function _flaxGeneric_SecureSocket_expand<
  _Method0 extends Object?
>() => (FlaxDartTypes types) {
  Object? invoke(Object receiver, Map<String, Object?> values) {
    return (receiver as api3.SecureSocket).expand<_Method0>(
      values["convert"] as Iterable<_Method0> Function(api2.Uint8List element),
    );
  }

  return FlaxInstanceMethod(
    <FlaxParameter>[
      FlaxParameter(
        "convert",
        types.define<Iterable<_Method0> Function(api2.Uint8List element)>(
          FlaxTypeRef(
            "callback",
            nullable: false,
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter(
                  "element",
                  _flaxBinding14,
                  required: true,
                  positional: true,
                ),
              ],
              types.ref<Iterable<_Method0>>(withinCallback: true),
              FlaxCallbackAdapters.wrap1<api2.Uint8List, Iterable<_Method0>>,
              id:
                  types
                      .key<
                        Iterable<_Method0> Function(api2.Uint8List element)
                      >() +
                  ":callback:<>(p:r:element:Uint8List:)->iterable:[parameter:]",
              invoke: FlaxCallbackAdapters
                  .invoke1<api2.Uint8List, Iterable<_Method0>>,
              matches: FlaxCallbackAdapters
                  .matches1<api2.Uint8List, Iterable<_Method0>>,
            ),
          ),
        ),
        required: true,
      ),
    ],
    types.ref<api5.Stream<_Method0>>(),
    invoke,
  );
};
Function _flaxGeneric_SecureSocket_transform<_Method0 extends Object?>() =>
    (FlaxDartTypes types) {
      Object? invoke(Object receiver, Map<String, Object?> values) {
        return (receiver as api3.SecureSocket).transform<_Method0>(
          values["streamTransformer"]
              as api5.StreamTransformer<api2.Uint8List, _Method0>,
        );
      }

      return FlaxInstanceMethod(
        <FlaxParameter>[
          FlaxParameter(
            "streamTransformer",
            types.ref<api5.StreamTransformer<api2.Uint8List, _Method0>>(),
            required: true,
          ),
        ],
        types.ref<api5.Stream<_Method0>>(),
        invoke,
      );
    };
Function _flaxGeneric_SecureSocket_fold<_Method0 extends Object?>() =>
    (FlaxDartTypes types) {
      Object? invoke(Object receiver, Map<String, Object?> values) {
        return (receiver as api3.SecureSocket).fold<_Method0>(
          values["initialValue"] as _Method0,
          values["combine"]
              as _Method0 Function(_Method0 previous, api2.Uint8List element),
        );
      }

      return FlaxInstanceMethod(
        <FlaxParameter>[
          FlaxParameter("initialValue", types.ref<_Method0>(), required: true),
          FlaxParameter(
            "combine",
            types.define<
              _Method0 Function(_Method0 previous, api2.Uint8List element)
            >(
              FlaxTypeRef(
                "callback",
                nullable: false,
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "previous",
                      types.ref<_Method0>(withinCallback: true),
                      required: true,
                      positional: true,
                    ),
                    FlaxCallbackParameter(
                      "element",
                      _flaxBinding14,
                      required: true,
                      positional: true,
                    ),
                  ],
                  types.ref<_Method0>(withinCallback: true),
                  FlaxCallbackAdapters
                      .wrap2<_Method0, api2.Uint8List, _Method0>,
                  id:
                      types
                          .key<
                            _Method0 Function(
                              _Method0 previous,
                              api2.Uint8List element,
                            )
                          >() +
                      ":callback:<>(p:r:previous:parameter:,p:r:element:Uint8List:)->parameter:",
                  invoke: FlaxCallbackAdapters
                      .invoke2<_Method0, api2.Uint8List, _Method0>,
                  matches: FlaxCallbackAdapters
                      .matches2<_Method0, api2.Uint8List, _Method0>,
                ),
              ),
            ),
            required: true,
          ),
        ],
        types.ref<Future<_Method0>>(),
        invoke,
      );
    };
Function _flaxGeneric_SecureSocket_cast<_Method0 extends Object?>() =>
    (FlaxDartTypes types) {
      Object? invoke(Object receiver, Map<String, Object?> values) {
        return (receiver as api3.SecureSocket).cast<_Method0>();
      }

      return FlaxInstanceMethod(
        _flaxBinding42,
        types.ref<api5.Stream<_Method0>>(),
        invoke,
      );
    };
Function _flaxGeneric_SecureSocket_drain<_Method0 extends Object?>() =>
    (FlaxDartTypes types) {
      Object? invoke(Object receiver, Map<String, Object?> values) {
        return (receiver as api3.SecureSocket).drain<_Method0>(
          values["futureValue"] as _Method0?,
        );
      }

      return FlaxInstanceMethod(
        <FlaxParameter>[
          FlaxParameter("futureValue", types.ref<_Method0?>(), required: false),
        ],
        types.ref<Future<_Method0>>(),
        invoke,
      );
    };
Function _flaxGeneric_Socket_map<_Method0 extends Object?>() =>
    (FlaxDartTypes types) {
      Object? invoke(Object receiver, Map<String, Object?> values) {
        return (receiver as api3.Socket).map<_Method0>(
          values["convert"] as _Method0 Function(api2.Uint8List event),
        );
      }

      return FlaxInstanceMethod(
        <FlaxParameter>[
          FlaxParameter(
            "convert",
            types.define<_Method0 Function(api2.Uint8List event)>(
              FlaxTypeRef(
                "callback",
                nullable: false,
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "event",
                      _flaxBinding14,
                      required: true,
                      positional: true,
                    ),
                  ],
                  types.ref<_Method0>(withinCallback: true),
                  FlaxCallbackAdapters.wrap1<api2.Uint8List, _Method0>,
                  id:
                      types.key<_Method0 Function(api2.Uint8List event)>() +
                      ":callback:<>(p:r:event:Uint8List:)->parameter:",
                  invoke:
                      FlaxCallbackAdapters.invoke1<api2.Uint8List, _Method0>,
                  matches:
                      FlaxCallbackAdapters.matches1<api2.Uint8List, _Method0>,
                ),
              ),
            ),
            required: true,
          ),
        ],
        types.ref<api5.Stream<_Method0>>(),
        invoke,
      );
    };
Function _flaxGeneric_Socket_asyncMap<
  _Method0 extends Object?
>() => (FlaxDartTypes types) {
  Object? invoke(Object receiver, Map<String, Object?> values) {
    return (receiver as api3.Socket).asyncMap<_Method0>(
      values["convert"]
          as api5.FutureOr<_Method0> Function(api2.Uint8List event),
    );
  }

  Object _callback0(FlaxCallback _flaxBridgeCallback) => (api2.Uint8List p0) {
    final positional = <Object?>[];
    final named = <String, Object?>{};
    positional.add(p0);
    return _flaxBridgeCallback.call(positional, named)
        as api5.FutureOr<_Method0>;
  };
  bool _callback0Matches(Object value) =>
      value is api5.FutureOr<_Method0> Function(api2.Uint8List event);
  Object? _callback0Invoke(
    Object function,
    List<Object?> positional,
    Map<String, Object?> named,
  ) {
    return (function as api5.FutureOr<_Method0> Function(api2.Uint8List event))(
      positional[0] as api2.Uint8List,
    );
  }

  return FlaxInstanceMethod(
    <FlaxParameter>[
      FlaxParameter(
        "convert",
        types.define<api5.FutureOr<_Method0> Function(api2.Uint8List event)>(
          FlaxTypeRef(
            "callback",
            nullable: false,
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter(
                  "event",
                  _flaxBinding14,
                  required: true,
                  positional: true,
                ),
              ],
              types.ref<api5.FutureOr<_Method0>>(withinCallback: true),
              _callback0,
              id:
                  types
                      .key<
                        api5.FutureOr<_Method0> Function(api2.Uint8List event)
                      >() +
                  ":callback:<>(p:r:event:Uint8List:)->futureOr:[parameter:]",
              invoke: _callback0Invoke,
              matches: _callback0Matches,
            ),
          ),
        ),
        required: true,
      ),
    ],
    types.ref<api5.Stream<_Method0>>(),
    invoke,
  );
};
Function _flaxGeneric_Socket_asyncExpand<_Method0 extends Object?>() =>
    (FlaxDartTypes types) {
      Object? invoke(Object receiver, Map<String, Object?> values) {
        return (receiver as api3.Socket).asyncExpand<_Method0>(
          values["convert"]
              as api5.Stream<_Method0>? Function(api2.Uint8List event),
        );
      }

      return FlaxInstanceMethod(
        <FlaxParameter>[
          FlaxParameter(
            "convert",
            types.define<api5.Stream<_Method0>? Function(api2.Uint8List event)>(
              FlaxTypeRef(
                "callback",
                nullable: false,
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "event",
                      _flaxBinding14,
                      required: true,
                      positional: true,
                    ),
                  ],
                  types.ref<api5.Stream<_Method0>?>(withinCallback: true),
                  FlaxCallbackAdapters
                      .wrap1<api2.Uint8List, api5.Stream<_Method0>?>,
                  id:
                      types
                          .key<
                            api5.Stream<_Method0>? Function(
                              api2.Uint8List event,
                            )
                          >() +
                      ":callback:<>(p:r:event:Uint8List:)->stream?:flax.core/flutter#type:Stream[parameter:]",
                  invoke: FlaxCallbackAdapters
                      .invoke1<api2.Uint8List, api5.Stream<_Method0>?>,
                  matches: FlaxCallbackAdapters
                      .matches1<api2.Uint8List, api5.Stream<_Method0>?>,
                ),
              ),
            ),
            required: true,
          ),
        ],
        types.ref<api5.Stream<_Method0>>(),
        invoke,
      );
    };
Function _flaxGeneric_Socket_expand<
  _Method0 extends Object?
>() => (FlaxDartTypes types) {
  Object? invoke(Object receiver, Map<String, Object?> values) {
    return (receiver as api3.Socket).expand<_Method0>(
      values["convert"] as Iterable<_Method0> Function(api2.Uint8List element),
    );
  }

  return FlaxInstanceMethod(
    <FlaxParameter>[
      FlaxParameter(
        "convert",
        types.define<Iterable<_Method0> Function(api2.Uint8List element)>(
          FlaxTypeRef(
            "callback",
            nullable: false,
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter(
                  "element",
                  _flaxBinding14,
                  required: true,
                  positional: true,
                ),
              ],
              types.ref<Iterable<_Method0>>(withinCallback: true),
              FlaxCallbackAdapters.wrap1<api2.Uint8List, Iterable<_Method0>>,
              id:
                  types
                      .key<
                        Iterable<_Method0> Function(api2.Uint8List element)
                      >() +
                  ":callback:<>(p:r:element:Uint8List:)->iterable:[parameter:]",
              invoke: FlaxCallbackAdapters
                  .invoke1<api2.Uint8List, Iterable<_Method0>>,
              matches: FlaxCallbackAdapters
                  .matches1<api2.Uint8List, Iterable<_Method0>>,
            ),
          ),
        ),
        required: true,
      ),
    ],
    types.ref<api5.Stream<_Method0>>(),
    invoke,
  );
};
Function _flaxGeneric_Socket_transform<_Method0 extends Object?>() =>
    (FlaxDartTypes types) {
      Object? invoke(Object receiver, Map<String, Object?> values) {
        return (receiver as api3.Socket).transform<_Method0>(
          values["streamTransformer"]
              as api5.StreamTransformer<api2.Uint8List, _Method0>,
        );
      }

      return FlaxInstanceMethod(
        <FlaxParameter>[
          FlaxParameter(
            "streamTransformer",
            types.ref<api5.StreamTransformer<api2.Uint8List, _Method0>>(),
            required: true,
          ),
        ],
        types.ref<api5.Stream<_Method0>>(),
        invoke,
      );
    };
Function _flaxGeneric_Socket_fold<_Method0 extends Object?>() =>
    (FlaxDartTypes types) {
      Object? invoke(Object receiver, Map<String, Object?> values) {
        return (receiver as api3.Socket).fold<_Method0>(
          values["initialValue"] as _Method0,
          values["combine"]
              as _Method0 Function(_Method0 previous, api2.Uint8List element),
        );
      }

      return FlaxInstanceMethod(
        <FlaxParameter>[
          FlaxParameter("initialValue", types.ref<_Method0>(), required: true),
          FlaxParameter(
            "combine",
            types.define<
              _Method0 Function(_Method0 previous, api2.Uint8List element)
            >(
              FlaxTypeRef(
                "callback",
                nullable: false,
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter(
                      "previous",
                      types.ref<_Method0>(withinCallback: true),
                      required: true,
                      positional: true,
                    ),
                    FlaxCallbackParameter(
                      "element",
                      _flaxBinding14,
                      required: true,
                      positional: true,
                    ),
                  ],
                  types.ref<_Method0>(withinCallback: true),
                  FlaxCallbackAdapters
                      .wrap2<_Method0, api2.Uint8List, _Method0>,
                  id:
                      types
                          .key<
                            _Method0 Function(
                              _Method0 previous,
                              api2.Uint8List element,
                            )
                          >() +
                      ":callback:<>(p:r:previous:parameter:,p:r:element:Uint8List:)->parameter:",
                  invoke: FlaxCallbackAdapters
                      .invoke2<_Method0, api2.Uint8List, _Method0>,
                  matches: FlaxCallbackAdapters
                      .matches2<_Method0, api2.Uint8List, _Method0>,
                ),
              ),
            ),
            required: true,
          ),
        ],
        types.ref<Future<_Method0>>(),
        invoke,
      );
    };
Function _flaxGeneric_Socket_cast<_Method0 extends Object?>() =>
    (FlaxDartTypes types) {
      Object? invoke(Object receiver, Map<String, Object?> values) {
        return (receiver as api3.Socket).cast<_Method0>();
      }

      return FlaxInstanceMethod(
        _flaxBinding42,
        types.ref<api5.Stream<_Method0>>(),
        invoke,
      );
    };
Function _flaxGeneric_Socket_drain<_Method0 extends Object?>() =>
    (FlaxDartTypes types) {
      Object? invoke(Object receiver, Map<String, Object?> values) {
        return (receiver as api3.Socket).drain<_Method0>(
          values["futureValue"] as _Method0?,
        );
      }

      return FlaxInstanceMethod(
        <FlaxParameter>[
          FlaxParameter("futureValue", types.ref<_Method0?>(), required: false),
        ],
        types.ref<Future<_Method0>>(),
        invoke,
      );
    };
const _flaxDartShapes = <FlaxDartShapeTemplate>[
  FlaxDartShapeTemplate("[\"callback\",[3,3,[],[]]]", _flaxShape0),
  FlaxDartShapeTemplate("[\"callback\",[1,1,[],[]]]", _flaxShape1),
  FlaxDartShapeTemplate("[\"callback\",[4,4,[],[]]]", _flaxShape2),
  FlaxDartShapeTemplate("[\"callback\",[0,0,[],[]]]", _flaxShape3),
  FlaxDartShapeTemplate("[\"callback\",[2,2,[],[]]]", _flaxShape4),
];
Function _flaxShape0<_Shape0, _Shape1, _Shape2, _Shape3>() =>
    (FlaxDartTypes types, bool withinCallback) {
      Object _callback0(FlaxCallback _flaxBridgeCallback) =>
          (_Shape0 p0, _Shape1 p1, _Shape2 p2) {
            final positional = <Object?>[];
            final named = <String, Object?>{};
            positional.add(p0);
            positional.add(p1);
            positional.add(p2);
            return _flaxBridgeCallback.call(positional, named) as _Shape3;
          };
      bool _callback0Matches(Object value) =>
          value is _Shape3 Function(_Shape0 url, _Shape1 scheme, _Shape2 realm);
      Object? _callback0Invoke(
        Object function,
        List<Object?> positional,
        Map<String, Object?> named,
      ) {
        return (function
            as _Shape3 Function(_Shape0 url, _Shape1 scheme, _Shape2 realm))(
          positional[0] as _Shape0,
          positional[1] as _Shape1,
          positional[2] as _Shape2,
        );
      }

      return types
          .define<_Shape3 Function(_Shape0 url, _Shape1 scheme, _Shape2 realm)>(
            FlaxTypeRef(
              "callback",
              nullable: false,
              callback: FlaxCallbackBinding(
                [
                  FlaxCallbackParameter(
                    "url",
                    types.ref<_Shape0>(withinCallback: true),
                    required: true,
                    positional: true,
                  ),
                  FlaxCallbackParameter(
                    "scheme",
                    types.ref<_Shape1>(withinCallback: true),
                    required: true,
                    positional: true,
                  ),
                  FlaxCallbackParameter(
                    "realm",
                    types.ref<_Shape2>(withinCallback: true),
                    required: true,
                    positional: true,
                  ),
                ],
                types.ref<_Shape3>(withinCallback: true),
                _callback0,
                id:
                    types
                        .key<
                          _Shape3 Function(
                            _Shape0 url,
                            _Shape1 scheme,
                            _Shape2 realm,
                          )
                        >() +
                    ":callback:<>(p:r:url:parameter:,p:r:scheme:parameter:,p:r:realm:parameter:)->parameter:",
                invoke: _callback0Invoke,
                matches: _callback0Matches,
              ),
            ),
            withinCallback: withinCallback,
          );
    };
Function _flaxShape1<_Shape0, _Shape1>() =>
    (FlaxDartTypes types, bool withinCallback) {
      return types.define<_Shape1 Function(_Shape0 url)>(
        FlaxTypeRef(
          "callback",
          nullable: false,
          callback: FlaxCallbackBinding(
            [
              FlaxCallbackParameter(
                "url",
                types.ref<_Shape0>(withinCallback: true),
                required: true,
                positional: true,
              ),
            ],
            types.ref<_Shape1>(withinCallback: true),
            FlaxCallbackAdapters.wrap1<_Shape0, _Shape1>,
            id:
                types.key<_Shape1 Function(_Shape0 url)>() +
                ":callback:<>(p:r:url:parameter:)->parameter:",
            invoke: FlaxCallbackAdapters.invoke1<_Shape0, _Shape1>,
            matches: FlaxCallbackAdapters.matches1<_Shape0, _Shape1>,
          ),
        ),
        withinCallback: withinCallback,
      );
    };
Function _flaxShape2<_Shape0, _Shape1, _Shape2, _Shape3, _Shape4>() =>
    (FlaxDartTypes types, bool withinCallback) {
      Object _callback0(FlaxCallback _flaxBridgeCallback) =>
          (_Shape0 p0, _Shape1 p1, _Shape2 p2, _Shape3 p3) {
            final positional = <Object?>[];
            final named = <String, Object?>{};
            positional.add(p0);
            positional.add(p1);
            positional.add(p2);
            positional.add(p3);
            return _flaxBridgeCallback.call(positional, named) as _Shape4;
          };
      bool _callback0Matches(Object value) =>
          value
              is _Shape4 Function(
                _Shape0 host,
                _Shape1 port,
                _Shape2 scheme,
                _Shape3 realm,
              );
      Object? _callback0Invoke(
        Object function,
        List<Object?> positional,
        Map<String, Object?> named,
      ) {
        return (function
            as _Shape4 Function(
              _Shape0 host,
              _Shape1 port,
              _Shape2 scheme,
              _Shape3 realm,
            ))(
          positional[0] as _Shape0,
          positional[1] as _Shape1,
          positional[2] as _Shape2,
          positional[3] as _Shape3,
        );
      }

      return types.define<
        _Shape4 Function(
          _Shape0 host,
          _Shape1 port,
          _Shape2 scheme,
          _Shape3 realm,
        )
      >(
        FlaxTypeRef(
          "callback",
          nullable: false,
          callback: FlaxCallbackBinding(
            [
              FlaxCallbackParameter(
                "host",
                types.ref<_Shape0>(withinCallback: true),
                required: true,
                positional: true,
              ),
              FlaxCallbackParameter(
                "port",
                types.ref<_Shape1>(withinCallback: true),
                required: true,
                positional: true,
              ),
              FlaxCallbackParameter(
                "scheme",
                types.ref<_Shape2>(withinCallback: true),
                required: true,
                positional: true,
              ),
              FlaxCallbackParameter(
                "realm",
                types.ref<_Shape3>(withinCallback: true),
                required: true,
                positional: true,
              ),
            ],
            types.ref<_Shape4>(withinCallback: true),
            _callback0,
            id:
                types
                    .key<
                      _Shape4 Function(
                        _Shape0 host,
                        _Shape1 port,
                        _Shape2 scheme,
                        _Shape3 realm,
                      )
                    >() +
                ":callback:<>(p:r:host:parameter:,p:r:port:parameter:,p:r:scheme:parameter:,p:r:realm:parameter:)->parameter:",
            invoke: _callback0Invoke,
            matches: _callback0Matches,
          ),
        ),
        withinCallback: withinCallback,
      );
    };
Function _flaxShape3<_Shape0>() => (FlaxDartTypes types, bool withinCallback) {
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
Function _flaxShape4<
  _Shape0,
  _Shape1,
  _Shape2
>() => (FlaxDartTypes types, bool withinCallback) {
  return types.define<_Shape2 Function(_Shape0 previous, _Shape1 element)>(
    FlaxTypeRef(
      "callback",
      nullable: false,
      callback: FlaxCallbackBinding(
        [
          FlaxCallbackParameter(
            "previous",
            types.ref<_Shape0>(withinCallback: true),
            required: true,
            positional: true,
          ),
          FlaxCallbackParameter(
            "element",
            types.ref<_Shape1>(withinCallback: true),
            required: true,
            positional: true,
          ),
        ],
        types.ref<_Shape2>(withinCallback: true),
        FlaxCallbackAdapters.wrap2<_Shape0, _Shape1, _Shape2>,
        id: types.key<_Shape2 Function(_Shape0 previous, _Shape1 element)>() + ":callback:<>(p:r:previous:parameter:,p:r:element:parameter:)->parameter:",
        invoke: FlaxCallbackAdapters.invoke2<_Shape0, _Shape1, _Shape2>,
        matches: FlaxCallbackAdapters.matches2<_Shape0, _Shape1, _Shape2>,
      ),
    ),
    withinCallback: withinCallback,
  );
};
Object _callback0(FlaxCallback _flaxBridgeCallback) =>
    (api4.Uri p0, String p1, String? p2) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      positional.add(p1);
      positional.add(p2);
      return (_flaxBridgeCallback.call(positional, named) as Future<Object?>)
          .then<bool>((value) => value as bool);
    };
bool _callback0Matches(Object value) =>
    value is Future<bool> Function(api4.Uri url, String scheme, String? realm);
Object? _callback0Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as Future<bool> Function(api4.Uri url, String scheme, String? realm))(
    positional[0] as api4.Uri,
    positional[1] as String,
    positional[2] as String?,
  );
}

Object _callback1(FlaxCallback _flaxBridgeCallback) =>
    (String p0, int p1, String p2, String? p3) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      positional.add(p1);
      positional.add(p2);
      positional.add(p3);
      return (_flaxBridgeCallback.call(positional, named) as Future<Object?>)
          .then<bool>((value) => value as bool);
    };
bool _callback1Matches(Object value) =>
    value
        is Future<bool> Function(
          String host,
          int port,
          String scheme,
          String? realm,
        );
Object? _callback1Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as Future<bool> Function(
        String host,
        int port,
        String scheme,
        String? realm,
      ))(
    positional[0] as String,
    positional[1] as int,
    positional[2] as String,
    positional[3] as String?,
  );
}

Object _callback2(FlaxCallback _flaxBridgeCallback) =>
    (api3.X509Certificate p0, String p1, int p2) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      positional.add(p1);
      positional.add(p2);
      return _flaxBridgeCallback.call(positional, named) as bool;
    };
bool _callback2Matches(Object value) =>
    value is bool Function(api3.X509Certificate cert, String host, int port);
Object? _callback2Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as bool Function(api3.X509Certificate cert, String host, int port))(
    positional[0] as api3.X509Certificate,
    positional[1] as String,
    positional[2] as int,
  );
}

Object _callback3(FlaxCallback _flaxBridgeCallback) => (List<int> p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return _flaxBridgeCallback.call(positional, named);
};
bool _callback3Matches(Object value) =>
    value is Object? Function(List<int> event);
Object? _callback3Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Object? Function(List<int> event))(
    positional[0] as List<int>,
  );
}

Object _callback4(FlaxCallback _flaxBridgeCallback) => (List<int> p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return _flaxBridgeCallback.call(positional, named) as api5.FutureOr<Object?>;
};
bool _callback4Matches(Object value) =>
    value is api5.FutureOr<Object?> Function(List<int> event);
Object? _callback4Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api5.FutureOr<Object?> Function(List<int> event))(
    positional[0] as List<int>,
  );
}

Object _callback5(FlaxCallback _flaxBridgeCallback) => (List<int> p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return _flaxBridgeCallback.call(positional, named) as api5.Stream<Object?>?;
};
bool _callback5Matches(Object value) =>
    value is api5.Stream<Object?>? Function(List<int> event);
Object? _callback5Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api5.Stream<Object?>? Function(List<int> event))(
    positional[0] as List<int>,
  );
}

Object _callback6(FlaxCallback _flaxBridgeCallback) => (List<int> p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return _flaxBridgeCallback.call(positional, named) as Iterable<Object?>;
};
bool _callback6Matches(Object value) =>
    value is Iterable<Object?> Function(List<int> element);
Object? _callback6Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Iterable<Object?> Function(List<int> element))(
    positional[0] as List<int>,
  );
}

Object _callback7(FlaxCallback _flaxBridgeCallback) =>
    (Object? p0, List<int> p1) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      positional.add(p1);
      return _flaxBridgeCallback.call(positional, named);
    };
bool _callback7Matches(Object value) =>
    value is Object? Function(Object? previous, List<int> element);
Object? _callback7Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Object? Function(Object? previous, List<int> element))(
    positional[0],
    positional[1] as List<int>,
  );
}

Object _callback8(FlaxCallback _flaxBridgeCallback) => (api2.Uint8List p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return _flaxBridgeCallback.call(positional, named);
};
bool _callback8Matches(Object value) =>
    value is Object? Function(api2.Uint8List event);
Object? _callback8Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Object? Function(api2.Uint8List event))(
    positional[0] as api2.Uint8List,
  );
}

Object _callback9(FlaxCallback _flaxBridgeCallback) => (api2.Uint8List p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return _flaxBridgeCallback.call(positional, named) as api5.FutureOr<Object?>;
};
bool _callback9Matches(Object value) =>
    value is api5.FutureOr<Object?> Function(api2.Uint8List event);
Object? _callback9Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api5.FutureOr<Object?> Function(api2.Uint8List event))(
    positional[0] as api2.Uint8List,
  );
}

Object _callback10(FlaxCallback _flaxBridgeCallback) => (api2.Uint8List p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return _flaxBridgeCallback.call(positional, named) as api5.Stream<Object?>?;
};
bool _callback10Matches(Object value) =>
    value is api5.Stream<Object?>? Function(api2.Uint8List event);
Object? _callback10Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api5.Stream<Object?>? Function(api2.Uint8List event))(
    positional[0] as api2.Uint8List,
  );
}

Object _callback11(FlaxCallback _flaxBridgeCallback) => (api2.Uint8List p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return _flaxBridgeCallback.call(positional, named) as Iterable<Object?>;
};
bool _callback11Matches(Object value) =>
    value is Iterable<Object?> Function(api2.Uint8List element);
Object? _callback11Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Iterable<Object?> Function(api2.Uint8List element))(
    positional[0] as api2.Uint8List,
  );
}

Object _callback12(FlaxCallback _flaxBridgeCallback) =>
    (Object? p0, api2.Uint8List p1) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      positional.add(p1);
      return _flaxBridgeCallback.call(positional, named);
    };
bool _callback12Matches(Object value) =>
    value is Object? Function(Object? previous, api2.Uint8List element);
Object? _callback12Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as Object? Function(Object? previous, api2.Uint8List element))(
    positional[0],
    positional[1] as api2.Uint8List,
  );
}

Object _callback13(FlaxCallback _flaxBridgeCallback) => (api2.Uint8List p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return _flaxBridgeCallback.call(positional, named);
};
bool _callback13Matches(Object value) =>
    value is Object? Function(api2.Uint8List event);
Object? _callback13Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Object? Function(api2.Uint8List event))(
    positional[0] as api2.Uint8List,
  );
}

Object _callback14(FlaxCallback _flaxBridgeCallback) => (api2.Uint8List p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return _flaxBridgeCallback.call(positional, named) as api5.FutureOr<Object?>;
};
bool _callback14Matches(Object value) =>
    value is api5.FutureOr<Object?> Function(api2.Uint8List event);
Object? _callback14Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api5.FutureOr<Object?> Function(api2.Uint8List event))(
    positional[0] as api2.Uint8List,
  );
}

Object _callback15(FlaxCallback _flaxBridgeCallback) => (api2.Uint8List p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return _flaxBridgeCallback.call(positional, named) as api5.Stream<Object?>?;
};
bool _callback15Matches(Object value) =>
    value is api5.Stream<Object?>? Function(api2.Uint8List event);
Object? _callback15Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as api5.Stream<Object?>? Function(api2.Uint8List event))(
    positional[0] as api2.Uint8List,
  );
}

Object _callback16(FlaxCallback _flaxBridgeCallback) => (api2.Uint8List p0) {
  final positional = <Object?>[];
  final named = <String, Object?>{};
  positional.add(p0);
  return _flaxBridgeCallback.call(positional, named) as Iterable<Object?>;
};
bool _callback16Matches(Object value) =>
    value is Iterable<Object?> Function(api2.Uint8List element);
Object? _callback16Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function as Iterable<Object?> Function(api2.Uint8List element))(
    positional[0] as api2.Uint8List,
  );
}

Object _callback17(FlaxCallback _flaxBridgeCallback) =>
    (Object? p0, api2.Uint8List p1) {
      final positional = <Object?>[];
      final named = <String, Object?>{};
      positional.add(p0);
      positional.add(p1);
      return _flaxBridgeCallback.call(positional, named);
    };
bool _callback17Matches(Object value) =>
    value is Object? Function(Object? previous, api2.Uint8List element);
Object? _callback17Invoke(
  Object function,
  List<Object?> positional,
  Map<String, Object?> named,
) {
  return (function
      as Object? Function(Object? previous, api2.Uint8List element))(
    positional[0],
    positional[1] as api2.Uint8List,
  );
}

Object _collection0Create() => <int>[];
bool _collection0Matches(Object value) => value is List<int>;
Object _collection1Create() => <int>[];
Object _collection1Restore(Object value) =>
    (value as Iterable<Object?>).cast<int>();
bool _collection1Matches(Object value) => value is Iterable<int>;
Object _collection2Create() => <api3.FileSystemEntity>[];
bool _collection2Matches(Object value) => value is List<api3.FileSystemEntity>;
Object _collection3Create() => <api3.FileSystemEntity>[];
Object _collection3Restore(Object value) =>
    (value as Iterable<Object?>).cast<api3.FileSystemEntity>();
bool _collection3Matches(Object value) =>
    value is Iterable<api3.FileSystemEntity>;
Object _collection4Create() => <String>[];
bool _collection4Matches(Object value) => value is List<String>;
Object _collection5Create() => <String>[];
Object _collection5Restore(Object value) =>
    (value as Iterable<Object?>).cast<String>();
bool _collection5Matches(Object value) => value is Iterable<String>;
Object _collection6Create() => <api3.Cookie>[];
bool _collection6Matches(Object value) => value is List<api3.Cookie>;
Object _collection7Create() => <api3.Cookie>[];
Object _collection7Restore(Object value) =>
    (value as Iterable<Object?>).cast<api3.Cookie>();
bool _collection7Matches(Object value) => value is Iterable<api3.Cookie>;
Object _collection8Create() => <Object?>[];
Object _collection8Restore(Object value) =>
    (value as Iterable<Object?>).cast<Object?>();
bool _collection8Matches(Object value) => value is Iterable<Object?>;
Object _collection9Create() => <api3.RedirectInfo>[];
bool _collection9Matches(Object value) => value is List<api3.RedirectInfo>;
Object _collection10Create() => <api3.RedirectInfo>[];
Object _collection10Restore(Object value) =>
    (value as Iterable<Object?>).cast<api3.RedirectInfo>();
bool _collection10Matches(Object value) => value is Iterable<api3.RedirectInfo>;
Object _collection11Create() => <List<int>>[];
bool _collection11Matches(Object value) => value is List<List<int>>;
Object _collection12Create() => <List<int>>[];
Object _collection12Restore(Object value) =>
    (value as Iterable<Object?>).cast<List<int>>();
bool _collection12Matches(Object value) => value is Iterable<List<int>>;
Object _collection13Create() => <List<int>>{};
bool _collection13Matches(Object value) => value is Set<List<int>>;
Object _collection14Create() => <num>[];
bool _collection14Matches(Object value) => value is List<num>;
Object _collection15Create() => <num>[];
Object _collection15Restore(Object value) =>
    (value as Iterable<Object?>).cast<num>();
bool _collection15Matches(Object value) => value is Iterable<num>;
Object _collection16Create() => <double>[];
bool _collection16Matches(Object value) => value is List<double>;
Object _collection17Create() => <double>[];
Object _collection17Restore(Object value) =>
    (value as Iterable<Object?>).cast<double>();
bool _collection17Matches(Object value) => value is Iterable<double>;
Object _collection18Create() => <api2.Uint8List>[];
bool _collection18Matches(Object value) => value is List<api2.Uint8List>;
Object _collection19Create() => <api2.Uint8List>[];
Object _collection19Restore(Object value) =>
    (value as Iterable<Object?>).cast<api2.Uint8List>();
bool _collection19Matches(Object value) => value is Iterable<api2.Uint8List>;
Object _collection20Create() => <api2.Uint8List>{};
bool _collection20Matches(Object value) => value is Set<api2.Uint8List>;
Object _collection21Create() => <String, String>{};
bool _collection21Matches(Object value) => value is Map<String, String>;
Object _collection22Create() => <api3.InternetAddress>[];
bool _collection22Matches(Object value) => value is List<api3.InternetAddress>;
Object _collection23Create() => <api3.InternetAddress>[];
Object _collection23Restore(Object value) =>
    (value as Iterable<Object?>).cast<api3.InternetAddress>();
bool _collection23Matches(Object value) =>
    value is Iterable<api3.InternetAddress>;
Future<Object?> _future0Adapt(Future<Object?> value) =>
    value.then<String>((value) => value as String);
Future<Object?> _future1Adapt(Future<Object?> value) =>
    value.then<bool>((value) => value as bool);
Future<Object?> _future2Adapt(Future<Object?> value) => value
    .then<api3.FileSystemEntity>((value) => value as api3.FileSystemEntity);
Future<Object?> _future3Adapt(Future<Object?> value) =>
    value.then<api3.FileStat>((value) => value as api3.FileStat);
Future<Object?> _future4Adapt(Future<Object?> value) =>
    value.then<api3.Directory>((value) => value as api3.Directory);
Future<Object?> _future5Adapt(Future<Object?> value) =>
    value.then<api3.File>((value) => value as api3.File);
Future<Object?> _future6Adapt(Future<Object?> value) =>
    value.then<int>((value) => value as int);
Future<Object?> _future7Adapt(Future<Object?> value) =>
    value.then<api4.DateTime>((value) => value as api4.DateTime);
Future<Object?> _future8Adapt(Future<Object?> value) => value;
Future<Object?> _future9Adapt(Future<Object?> value) => value
    .then<api3.RandomAccessFile>((value) => value as api3.RandomAccessFile);
Future<Object?> _future10Adapt(Future<Object?> value) =>
    value.then<api2.Uint8List>((value) => value as api2.Uint8List);
Future<Object?> _future11Adapt(Future<Object?> value) =>
    value.then<List<String>>((value) => value as List<String>);
Future<Object?> _future12Adapt(Future<Object?> value) => value
    .then<api3.HttpClientRequest>((value) => value as api3.HttpClientRequest);
Future<Object?> _future13Adapt(Future<Object?> value) => value
    .then<api3.HttpClientResponse>((value) => value as api3.HttpClientResponse);
Future<Object?> _future14Adapt(Future<Object?> value) =>
    value.then<List<int>>((value) => value as List<int>);
Future<Object?> _future15Adapt(Future<Object?> value) =>
    value.then<api3.Socket>((value) => value as api3.Socket);
Future<Object?> _future16Adapt(Future<Object?> value) =>
    value.then<void>((_) {});
Future<Object?> _future17Adapt(Future<Object?> value) =>
    value.then<List<List<int>>>((value) => value as List<List<int>>);
Future<Object?> _future18Adapt(Future<Object?> value) =>
    value.then<Set<List<int>>>((value) => value as Set<List<int>>);
Future<Object?> _future19Adapt(Future<Object?> value) =>
    value.then<api3.InternetAddress>((value) => value as api3.InternetAddress);
Future<Object?> _future20Adapt(Future<Object?> value) =>
    value.then<api3.Link>((value) => value as api3.Link);
Future<Object?> _future21Adapt(Future<Object?> value) =>
    value.then<List<api2.Uint8List>>((value) => value as List<api2.Uint8List>);
Future<Object?> _future22Adapt(Future<Object?> value) =>
    value.then<Set<api2.Uint8List>>((value) => value as Set<api2.Uint8List>);
Future<Object?> _future23Adapt(Future<Object?> value) =>
    value.then<api3.FileSystemEntityType>(
      (value) => value as api3.FileSystemEntityType,
    );
Future<Object?> _future24Adapt(Future<Object?> value) =>
    value.then<List<api3.InternetAddress>>(
      (value) => value as List<api3.InternetAddress>,
    );
Future<Object?> _future25Adapt(Future<Object?> value) =>
    value.then<api3.SecureSocket>((value) => value as api3.SecureSocket);
bool _stream0Matches(Object value) => value is api5.Stream<List<int>>;
api5.Stream<Object?> _stream0Adapt(Object value) =>
    (value is api5.Stream<List<int>>
            ? value
            : (value as api5.Stream<Object?>).map<List<int>>(
                (event) => (event is List<int>
                    ? event
                    : flaxRestoreJsCollection<List<int>>(
                        event as Object,
                        "list",
                        (collection) => (collection as Iterable<Object?>)
                            .map<int>(
                              (item) => _genericCallbackResult<int>(item),
                            )
                            .toList(),
                      )),
              ))
        as api5.Stream<Object?>;
bool _stream1Matches(Object value) =>
    value is api5.Stream<api3.FileSystemEntity>;
api5.Stream<Object?> _stream1Adapt(Object value) =>
    (value is api5.Stream<api3.FileSystemEntity>
            ? value
            : (value as api5.Stream<Object?>).map<api3.FileSystemEntity>(
                (event) => _genericCallbackResult<api3.FileSystemEntity>(event),
              ))
        as api5.Stream<Object?>;
bool _stream2Matches(Object value) => value is api5.Stream<Object?>;
api5.Stream<Object?> _stream2Adapt(Object value) =>
    value as api5.Stream<Object?>;
bool _stream3Matches(Object value) => value is api5.Stream<api2.Uint8List>;
api5.Stream<Object?> _stream3Adapt(Object value) =>
    (value is api5.Stream<api2.Uint8List>
            ? value
            : (value as api5.Stream<Object?>).map<api2.Uint8List>(
                (event) => _genericCallbackResult<api2.Uint8List>(event),
              ))
        as api5.Stream<Object?>;
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

const _flaxBinding0 = FlaxTypeRef("String");
const _flaxBinding1 = FlaxGetter("name", _flaxBinding0, _Encoding_name);
const _flaxBinding2 = FlaxTypeRef("int");
const _flaxBinding3 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding2,
  collection: FlaxCollectionBinding(
    "iterable:[int:]",
    _collection1Create,
    _collection1Matches,
    restore: _collection1Restore,
  ),
);
const _flaxBinding4 = FlaxTypeRef(
  "list",
  item: _flaxBinding2,
  collection: FlaxCollectionBinding(
    "list:[int:]",
    _collection0Create,
    _collection0Matches,
  ),
  iterable: _flaxBinding3,
);
const _flaxBinding5 = FlaxTypeRef(
  "stream",
  id: "flax.core/flutter#type:Stream",
  dartType: FlaxDartTypes.typeOf<api5.Stream<List<int>>>,
  item: _flaxBinding4,
  stream: FlaxStreamBinding(
    "stream:flax.core/flutter#type:Stream[list:[int:]]",
    _stream0Matches,
    _stream0Adapt,
  ),
);
const _flaxBinding6 = FlaxTypeRef(
  "future",
  item: _flaxBinding0,
  future: FlaxFutureBinding("String:", _future0Adapt),
);
const _flaxBinding7 = <FlaxParameter>[
  FlaxParameter("byteStream", _flaxBinding5, required: true),
];
const _flaxBinding8 = FlaxInstanceMethod(
  _flaxBinding7,
  _flaxBinding6,
  _Encoding_decodeStream,
);
const _flaxBinding9 = <FlaxParameter>[
  FlaxParameter("input", _flaxBinding0, required: true),
];
const _flaxBinding10 = FlaxInstanceMethod(
  _flaxBinding9,
  _flaxBinding4,
  _Encoding_encode,
);
const _flaxBinding11 = <FlaxParameter>[
  FlaxParameter("encoded", _flaxBinding4, required: true),
];
const _flaxBinding12 = FlaxInstanceMethod(
  _flaxBinding11,
  _flaxBinding0,
  _Encoding_decode,
);
const _flaxBinding13 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:Encoding",
  [_flaxBinding1],
  {
    "decodeStream": _flaxBinding8,
    "encode": _flaxBinding10,
    "decode": _flaxBinding12,
  },
  constructors: {},
  create: _createEncoding,
  matches: _isEncoding,
  setters: [],
  supertypes: ["dart:convert::Codec", "dart:core::Object"],
);
const _flaxBinding14 = FlaxTypeRef("Uint8List");
const _flaxBinding15 = <FlaxParameter>[
  FlaxParameter("source", _flaxBinding0, required: true),
];
const _flaxBinding16 = FlaxInstanceMethod(
  _flaxBinding15,
  _flaxBinding14,
  _AsciiCodec_encode,
);
const _flaxBinding17 = FlaxTypeRef("bool", nullable: true);
const _flaxBinding18 = <FlaxParameter>[
  FlaxParameter("bytes", _flaxBinding4, required: true),
  FlaxParameter("allowInvalid", _flaxBinding17, required: false),
];
const _flaxBinding19 = FlaxInstanceMethod(
  _flaxBinding18,
  _flaxBinding0,
  _AsciiCodec_decode,
);
const _flaxBinding20 = FlaxTypeRef("bool");
const _flaxBinding21 = <FlaxParameter>[
  FlaxParameter(
    "allowInvalid",
    _flaxBinding20,
    required: false,
    defaultValue: false,
  ),
];
const _flaxBinding22 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:AsciiCodec",
  [],
  {"encode": _flaxBinding16, "decode": _flaxBinding19},
  constructors: {"": _flaxBinding21},
  create: _createAsciiCodec,
  matches: _isAsciiCodec,
  setters: [],
  supertypes: [
    "flax.core/sdk_dependencies#type:Encoding",
    "dart:convert::Codec",
    "dart:core::Object",
  ],
  parent: _flaxBinding13,
);
const _flaxBinding23 = FlaxGetter("name", _flaxBinding0, _Cookie_name);
const _flaxBinding24 = FlaxGetter("value", _flaxBinding0, _Cookie_value);
const _flaxBinding25 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:DateTime",
  nullable: true,
);
const _flaxBinding26 = FlaxGetter("expires", _flaxBinding25, _Cookie_expires);
const _flaxBinding27 = FlaxTypeRef("int", nullable: true);
const _flaxBinding28 = FlaxGetter("maxAge", _flaxBinding27, _Cookie_maxAge);
const _flaxBinding29 = FlaxTypeRef("String", nullable: true);
const _flaxBinding30 = FlaxGetter("domain", _flaxBinding29, _Cookie_domain);
const _flaxBinding31 = FlaxGetter("path", _flaxBinding29, _Cookie_path);
const _flaxBinding32 = FlaxGetter("secure", _flaxBinding20, _Cookie_secure);
const _flaxBinding33 = FlaxGetter("httpOnly", _flaxBinding20, _Cookie_httpOnly);
const _flaxBinding34 = FlaxSetter("name", _flaxBinding0, _Cookie_set_name);
const _flaxBinding35 = FlaxSetter("value", _flaxBinding0, _Cookie_set_value);
const _flaxBinding36 = FlaxSetter(
  "expires",
  _flaxBinding25,
  _Cookie_set_expires,
);
const _flaxBinding37 = FlaxSetter("maxAge", _flaxBinding27, _Cookie_set_maxAge);
const _flaxBinding38 = FlaxSetter("domain", _flaxBinding29, _Cookie_set_domain);
const _flaxBinding39 = FlaxSetter("path", _flaxBinding29, _Cookie_set_path);
const _flaxBinding40 = FlaxSetter("secure", _flaxBinding20, _Cookie_set_secure);
const _flaxBinding41 = FlaxSetter(
  "httpOnly",
  _flaxBinding20,
  _Cookie_set_httpOnly,
);
const _flaxBinding42 = <FlaxParameter>[];
const _flaxBinding43 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding0,
  _Cookie_toString,
);
const _flaxBinding44 = <FlaxParameter>[
  FlaxParameter("name", _flaxBinding0, required: true),
  FlaxParameter("value", _flaxBinding0, required: true),
];
const _flaxBinding45 = <FlaxParameter>[
  FlaxParameter("value", _flaxBinding0, required: true),
];
const _flaxBinding46 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:Cookie",
  [
    _flaxBinding23,
    _flaxBinding24,
    _flaxBinding26,
    _flaxBinding28,
    _flaxBinding30,
    _flaxBinding31,
    _flaxBinding32,
    _flaxBinding33,
  ],
  {"toString": _flaxBinding43},
  constructors: {"": _flaxBinding44, "fromSetCookieValue": _flaxBinding45},
  create: _createCookie,
  matches: _isCookie,
  setters: [
    _flaxBinding34,
    _flaxBinding35,
    _flaxBinding36,
    _flaxBinding37,
    _flaxBinding38,
    _flaxBinding39,
    _flaxBinding40,
    _flaxBinding41,
  ],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding47 = FlaxGetter(
  "path",
  _flaxBinding0,
  _FileSystemEntity_path,
);
const _flaxBinding48 = FlaxTypeRef("object", id: "flax.core/flutter#type:Uri");
const _flaxBinding49 = FlaxGetter("uri", _flaxBinding48, _FileSystemEntity_uri);
const _flaxBinding50 = FlaxGetter(
  "isAbsolute",
  _flaxBinding20,
  _FileSystemEntity_isAbsolute,
);
const _flaxBinding51 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:FileSystemEntity",
);
const _flaxBinding52 = FlaxGetter(
  "absolute",
  _flaxBinding51,
  _FileSystemEntity_absolute,
);
const _flaxBinding53 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:Directory",
);
const _flaxBinding54 = FlaxGetter(
  "parent",
  _flaxBinding53,
  _FileSystemEntity_parent,
);
const _flaxBinding55 = FlaxTypeRef(
  "future",
  item: _flaxBinding20,
  future: FlaxFutureBinding("bool:", _future1Adapt),
);
const _flaxBinding56 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding55,
  _FileSystemEntity_exists,
);
const _flaxBinding57 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding20,
  _FileSystemEntity_existsSync,
);
const _flaxBinding58 = FlaxTypeRef(
  "future",
  item: _flaxBinding51,
  future: FlaxFutureBinding(
    "object:flax.core/sdk_dependencies#type:FileSystemEntity",
    _future2Adapt,
  ),
);
const _flaxBinding59 = <FlaxParameter>[
  FlaxParameter("newPath", _flaxBinding0, required: true),
];
const _flaxBinding60 = FlaxInstanceMethod(
  _flaxBinding59,
  _flaxBinding58,
  _FileSystemEntity_rename,
);
const _flaxBinding61 = FlaxInstanceMethod(
  _flaxBinding59,
  _flaxBinding51,
  _FileSystemEntity_renameSync,
);
const _flaxBinding62 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding6,
  _FileSystemEntity_resolveSymbolicLinks,
);
const _flaxBinding63 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding0,
  _FileSystemEntity_resolveSymbolicLinksSync,
);
const _flaxBinding64 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:FileStat",
);
const _flaxBinding65 = FlaxTypeRef(
  "future",
  item: _flaxBinding64,
  future: FlaxFutureBinding(
    "object:flax.core/sdk_dependencies#type:FileStat",
    _future3Adapt,
  ),
);
const _flaxBinding66 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding65,
  _FileSystemEntity_stat,
);
const _flaxBinding67 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding64,
  _FileSystemEntity_statSync,
);
const _flaxBinding68 = <FlaxParameter>[
  FlaxParameter(
    "recursive",
    _flaxBinding20,
    required: false,
    defaultValue: false,
  ),
];
const _flaxBinding69 = FlaxInstanceMethod(
  _flaxBinding68,
  _flaxBinding58,
  _FileSystemEntity_delete,
);
const _flaxBinding70 = FlaxTypeRef("void");
const _flaxBinding71 = FlaxInstanceMethod(
  _flaxBinding68,
  _flaxBinding70,
  _FileSystemEntity_deleteSync,
);
const _flaxBinding72 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:FileSystemEntity",
  [
    _flaxBinding47,
    _flaxBinding49,
    _flaxBinding50,
    _flaxBinding52,
    _flaxBinding54,
  ],
  {
    "exists": _flaxBinding56,
    "existsSync": _flaxBinding57,
    "rename": _flaxBinding60,
    "renameSync": _flaxBinding61,
    "resolveSymbolicLinks": _flaxBinding62,
    "resolveSymbolicLinksSync": _flaxBinding63,
    "stat": _flaxBinding66,
    "statSync": _flaxBinding67,
    "delete": _flaxBinding69,
    "deleteSync": _flaxBinding71,
  },
  constructors: {},
  create: _createFileSystemEntity,
  matches: _isFileSystemEntity,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding73 = FlaxGetter(
  "absolute",
  _flaxBinding53,
  _Directory_absolute,
);
const _flaxBinding74 = FlaxTypeRef(
  "future",
  item: _flaxBinding53,
  future: FlaxFutureBinding(
    "object:flax.core/sdk_dependencies#type:Directory",
    _future4Adapt,
  ),
);
const _flaxBinding75 = FlaxInstanceMethod(
  _flaxBinding59,
  _flaxBinding74,
  _Directory_rename,
);
const _flaxBinding76 = FlaxInstanceMethod(
  _flaxBinding59,
  _flaxBinding53,
  _Directory_renameSync,
);
const _flaxBinding77 = FlaxInstanceMethod(
  _flaxBinding68,
  _flaxBinding74,
  _Directory_create,
);
const _flaxBinding78 = FlaxInstanceMethod(
  _flaxBinding68,
  _flaxBinding70,
  _Directory_createSync,
);
const _flaxBinding79 = <FlaxParameter>[
  FlaxParameter("prefix", _flaxBinding29, required: false),
];
const _flaxBinding80 = FlaxInstanceMethod(
  _flaxBinding79,
  _flaxBinding74,
  _Directory_createTemp,
);
const _flaxBinding81 = FlaxInstanceMethod(
  _flaxBinding79,
  _flaxBinding53,
  _Directory_createTempSync,
);
const _flaxBinding82 = <FlaxParameter>[
  FlaxParameter(
    "followLinks",
    _flaxBinding20,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter(
    "recursive",
    _flaxBinding20,
    required: false,
    defaultValue: false,
  ),
];
const _flaxBinding83 = FlaxTypeRef(
  "stream",
  id: "flax.core/flutter#type:Stream",
  dartType: FlaxDartTypes.typeOf<api5.Stream<api3.FileSystemEntity>>,
  item: _flaxBinding51,
  stream: FlaxStreamBinding(
    "stream:flax.core/flutter#type:Stream[object:flax.core/sdk_dependencies#type:FileSystemEntity]",
    _stream1Matches,
    _stream1Adapt,
  ),
);
const _flaxBinding84 = FlaxInstanceMethod(
  _flaxBinding82,
  _flaxBinding83,
  _Directory_list,
);
const _flaxBinding85 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding51,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dependencies#type:FileSystemEntity]",
    _collection3Create,
    _collection3Matches,
    restore: _collection3Restore,
  ),
);
const _flaxBinding86 = FlaxTypeRef(
  "list",
  item: _flaxBinding51,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dependencies#type:FileSystemEntity]",
    _collection2Create,
    _collection2Matches,
  ),
  iterable: _flaxBinding85,
);
const _flaxBinding87 = FlaxInstanceMethod(
  _flaxBinding82,
  _flaxBinding86,
  _Directory_listSync,
);
const _flaxBinding88 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding0,
  _Directory_toString,
);
const _flaxBinding89 = <FlaxParameter>[
  FlaxParameter("path", _flaxBinding0, required: true),
];
const _flaxBinding90 = <FlaxParameter>[
  FlaxParameter("path", _flaxBinding14, required: true),
];
const _flaxBinding91 = <FlaxParameter>[
  FlaxParameter("uri", _flaxBinding48, required: true),
];
const _flaxBinding92 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:Directory",
  [_flaxBinding73],
  {
    "rename": _flaxBinding75,
    "renameSync": _flaxBinding76,
    "create": _flaxBinding77,
    "createSync": _flaxBinding78,
    "createTemp": _flaxBinding80,
    "createTempSync": _flaxBinding81,
    "list": _flaxBinding84,
    "listSync": _flaxBinding87,
    "toString": _flaxBinding88,
  },
  constructors: {
    "": _flaxBinding89,
    "fromRawPath": _flaxBinding90,
    "fromUri": _flaxBinding91,
  },
  create: _createDirectory,
  matches: _isDirectory,
  setters: [],
  supertypes: [
    "dart:core::Object",
    "flax.core/sdk_dependencies#type:FileSystemEntity",
  ],
  parent: _flaxBinding72,
);
const _flaxBinding93 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:File",
);
const _flaxBinding94 = FlaxGetter("absolute", _flaxBinding93, _File_absolute);
const _flaxBinding95 = FlaxTypeRef(
  "future",
  item: _flaxBinding93,
  future: FlaxFutureBinding(
    "object:flax.core/sdk_dependencies#type:File",
    _future5Adapt,
  ),
);
const _flaxBinding96 = FlaxInstanceMethod(
  _flaxBinding59,
  _flaxBinding95,
  _File_rename,
);
const _flaxBinding97 = FlaxInstanceMethod(
  _flaxBinding59,
  _flaxBinding93,
  _File_renameSync,
);
const _flaxBinding98 = <FlaxParameter>[
  FlaxParameter(
    "exclusive",
    _flaxBinding20,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "recursive",
    _flaxBinding20,
    required: false,
    defaultValue: false,
  ),
];
const _flaxBinding99 = FlaxInstanceMethod(
  _flaxBinding98,
  _flaxBinding95,
  _File_create,
);
const _flaxBinding100 = FlaxInstanceMethod(
  _flaxBinding98,
  _flaxBinding70,
  _File_createSync,
);
const _flaxBinding101 = FlaxInstanceMethod(
  _flaxBinding59,
  _flaxBinding95,
  _File_copy,
);
const _flaxBinding102 = FlaxInstanceMethod(
  _flaxBinding59,
  _flaxBinding93,
  _File_copySync,
);
const _flaxBinding103 = FlaxTypeRef(
  "future",
  item: _flaxBinding2,
  future: FlaxFutureBinding("int:", _future6Adapt),
);
const _flaxBinding104 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding103,
  _File_length,
);
const _flaxBinding105 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding2,
  _File_lengthSync,
);
const _flaxBinding106 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:DateTime",
);
const _flaxBinding107 = FlaxTypeRef(
  "future",
  item: _flaxBinding106,
  future: FlaxFutureBinding(
    "object:flax.core/flutter#type:DateTime",
    _future7Adapt,
  ),
);
const _flaxBinding108 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding107,
  _File_lastAccessed,
);
const _flaxBinding109 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding106,
  _File_lastAccessedSync,
);
const _flaxBinding110 = FlaxTypeRef("any", nullable: true);
const _flaxBinding111 = FlaxTypeRef(
  "future",
  item: _flaxBinding110,
  future: FlaxFutureBinding("any?:", _future8Adapt),
);
const _flaxBinding112 = <FlaxParameter>[
  FlaxParameter("time", _flaxBinding106, required: true),
];
const _flaxBinding113 = FlaxInstanceMethod(
  _flaxBinding112,
  _flaxBinding111,
  _File_setLastAccessed,
);
const _flaxBinding114 = FlaxInstanceMethod(
  _flaxBinding112,
  _flaxBinding70,
  _File_setLastAccessedSync,
);
const _flaxBinding115 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding107,
  _File_lastModified,
);
const _flaxBinding116 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding106,
  _File_lastModifiedSync,
);
const _flaxBinding117 = FlaxInstanceMethod(
  _flaxBinding112,
  _flaxBinding111,
  _File_setLastModified,
);
const _flaxBinding118 = FlaxInstanceMethod(
  _flaxBinding112,
  _flaxBinding70,
  _File_setLastModifiedSync,
);
const _flaxBinding119 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:FileMode",
);
const _flaxBinding120 = <FlaxParameter>[
  FlaxParameter("mode", _flaxBinding119, required: false, omitWhenAbsent: true),
];
const _flaxBinding121 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:RandomAccessFile",
);
const _flaxBinding122 = FlaxTypeRef(
  "future",
  item: _flaxBinding121,
  future: FlaxFutureBinding(
    "object:flax.core/sdk_dependencies#type:RandomAccessFile",
    _future9Adapt,
  ),
);
const _flaxBinding123 = FlaxInstanceMethod(
  _flaxBinding120,
  _flaxBinding122,
  _File_open,
);
const _flaxBinding124 = FlaxInstanceMethod(
  _flaxBinding120,
  _flaxBinding121,
  _File_openSync,
);
const _flaxBinding125 = <FlaxParameter>[
  FlaxParameter("start", _flaxBinding27, required: false),
  FlaxParameter("end", _flaxBinding27, required: false),
];
const _flaxBinding126 = FlaxInstanceMethod(
  _flaxBinding125,
  _flaxBinding5,
  _File_openRead,
);
const _flaxBinding127 = FlaxTypeRef(
  "future",
  item: _flaxBinding14,
  future: FlaxFutureBinding("Uint8List:", _future10Adapt),
);
const _flaxBinding128 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding127,
  _File_readAsBytes,
);
const _flaxBinding129 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding14,
  _File_readAsBytesSync,
);
const _flaxBinding130 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:Encoding",
);
const _flaxBinding131 = <FlaxParameter>[
  FlaxParameter(
    "encoding",
    _flaxBinding130,
    required: false,
    omitWhenAbsent: true,
  ),
];
const _flaxBinding132 = FlaxInstanceMethod(
  _flaxBinding131,
  _flaxBinding6,
  _File_readAsString,
);
const _flaxBinding133 = FlaxInstanceMethod(
  _flaxBinding131,
  _flaxBinding0,
  _File_readAsStringSync,
);
const _flaxBinding134 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding0,
  collection: FlaxCollectionBinding(
    "iterable:[String:]",
    _collection5Create,
    _collection5Matches,
    restore: _collection5Restore,
  ),
);
const _flaxBinding135 = FlaxTypeRef(
  "list",
  item: _flaxBinding0,
  collection: FlaxCollectionBinding(
    "list:[String:]",
    _collection4Create,
    _collection4Matches,
  ),
  iterable: _flaxBinding134,
);
const _flaxBinding136 = FlaxTypeRef(
  "future",
  item: _flaxBinding135,
  future: FlaxFutureBinding("list:[String:]", _future11Adapt),
);
const _flaxBinding137 = FlaxInstanceMethod(
  _flaxBinding131,
  _flaxBinding136,
  _File_readAsLines,
);
const _flaxBinding138 = FlaxInstanceMethod(
  _flaxBinding131,
  _flaxBinding135,
  _File_readAsLinesSync,
);
const _flaxBinding139 = <FlaxParameter>[
  FlaxParameter("bytes", _flaxBinding4, required: true),
  FlaxParameter("flush", _flaxBinding20, required: false, defaultValue: false),
  FlaxParameter("mode", _flaxBinding119, required: false, omitWhenAbsent: true),
];
const _flaxBinding140 = FlaxInstanceMethod(
  _flaxBinding139,
  _flaxBinding95,
  _File_writeAsBytes,
);
const _flaxBinding141 = FlaxInstanceMethod(
  _flaxBinding139,
  _flaxBinding70,
  _File_writeAsBytesSync,
);
const _flaxBinding142 = <FlaxParameter>[
  FlaxParameter("contents", _flaxBinding0, required: true),
  FlaxParameter(
    "encoding",
    _flaxBinding130,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter("flush", _flaxBinding20, required: false, defaultValue: false),
  FlaxParameter("mode", _flaxBinding119, required: false, omitWhenAbsent: true),
];
const _flaxBinding143 = FlaxInstanceMethod(
  _flaxBinding142,
  _flaxBinding95,
  _File_writeAsString,
);
const _flaxBinding144 = FlaxInstanceMethod(
  _flaxBinding142,
  _flaxBinding70,
  _File_writeAsStringSync,
);
const _flaxBinding145 = <FlaxParameter>[
  FlaxParameter("rawPath", _flaxBinding14, required: true),
];
const _flaxBinding146 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:File",
  [_flaxBinding94],
  {
    "rename": _flaxBinding96,
    "renameSync": _flaxBinding97,
    "create": _flaxBinding99,
    "createSync": _flaxBinding100,
    "copy": _flaxBinding101,
    "copySync": _flaxBinding102,
    "length": _flaxBinding104,
    "lengthSync": _flaxBinding105,
    "lastAccessed": _flaxBinding108,
    "lastAccessedSync": _flaxBinding109,
    "setLastAccessed": _flaxBinding113,
    "setLastAccessedSync": _flaxBinding114,
    "lastModified": _flaxBinding115,
    "lastModifiedSync": _flaxBinding116,
    "setLastModified": _flaxBinding117,
    "setLastModifiedSync": _flaxBinding118,
    "open": _flaxBinding123,
    "openSync": _flaxBinding124,
    "openRead": _flaxBinding126,
    "readAsBytes": _flaxBinding128,
    "readAsBytesSync": _flaxBinding129,
    "readAsString": _flaxBinding132,
    "readAsStringSync": _flaxBinding133,
    "readAsLines": _flaxBinding137,
    "readAsLinesSync": _flaxBinding138,
    "writeAsBytes": _flaxBinding140,
    "writeAsBytesSync": _flaxBinding141,
    "writeAsString": _flaxBinding143,
    "writeAsStringSync": _flaxBinding144,
  },
  constructors: {
    "": _flaxBinding89,
    "fromUri": _flaxBinding91,
    "fromRawPath": _flaxBinding145,
  },
  create: _createFile,
  matches: _isFile,
  setters: [],
  supertypes: [
    "dart:core::Object",
    "flax.core/sdk_dependencies#type:FileSystemEntity",
  ],
  parent: _flaxBinding72,
);
const _flaxBinding147 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:FileLock",
  [],
  {},
  constructors: {},
  create: _createFileLock,
  matches: _isFileLock,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding148 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:FileMode",
  [],
  {},
  constructors: {},
  create: _createFileMode,
  matches: _isFileMode,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding149 = FlaxGetter(
  "changed",
  _flaxBinding106,
  _FileStat_changed,
);
const _flaxBinding150 = FlaxGetter(
  "modified",
  _flaxBinding106,
  _FileStat_modified,
);
const _flaxBinding151 = FlaxGetter(
  "accessed",
  _flaxBinding106,
  _FileStat_accessed,
);
const _flaxBinding152 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:FileSystemEntityType",
);
const _flaxBinding153 = FlaxGetter("type", _flaxBinding152, _FileStat_type);
const _flaxBinding154 = FlaxGetter("mode", _flaxBinding2, _FileStat_mode);
const _flaxBinding155 = FlaxGetter("size", _flaxBinding2, _FileStat_size);
const _flaxBinding156 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding0,
  _FileStat_toString,
);
const _flaxBinding157 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding0,
  _FileStat_modeString,
);
const _flaxBinding158 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:FileStat",
  [
    _flaxBinding149,
    _flaxBinding150,
    _flaxBinding151,
    _flaxBinding153,
    _flaxBinding154,
    _flaxBinding155,
  ],
  {"toString": _flaxBinding156, "modeString": _flaxBinding157},
  constructors: {},
  create: _createFileStat,
  matches: _isFileStat,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding159 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding0,
  _FileSystemEntityType_toString,
);
const _flaxBinding160 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:FileSystemEntityType",
  [],
  {"toString": _flaxBinding159},
  constructors: {},
  create: _createFileSystemEntityType,
  matches: _isFileSystemEntityType,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding161 = FlaxGetter("id", _flaxBinding2, _Flow_id);
const _flaxBinding162 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:Flow",
  [_flaxBinding161],
  {},
  constructors: {},
  create: _createFlow,
  matches: _isFlow,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding163 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Duration",
);
const _flaxBinding164 = FlaxGetter(
  "idleTimeout",
  _flaxBinding163,
  _HttpClient_idleTimeout,
);
const _flaxBinding165 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Duration",
  nullable: true,
);
const _flaxBinding166 = FlaxGetter(
  "connectionTimeout",
  _flaxBinding165,
  _HttpClient_connectionTimeout,
);
const _flaxBinding167 = FlaxGetter(
  "maxConnectionsPerHost",
  _flaxBinding27,
  _HttpClient_maxConnectionsPerHost,
);
const _flaxBinding168 = FlaxGetter(
  "autoUncompress",
  _flaxBinding20,
  _HttpClient_autoUncompress,
);
const _flaxBinding169 = FlaxGetter(
  "userAgent",
  _flaxBinding29,
  _HttpClient_userAgent,
);
const _flaxBinding170 = FlaxSetter(
  "idleTimeout",
  _flaxBinding163,
  _HttpClient_set_idleTimeout,
);
const _flaxBinding171 = FlaxSetter(
  "connectionTimeout",
  _flaxBinding165,
  _HttpClient_set_connectionTimeout,
);
const _flaxBinding172 = FlaxSetter(
  "maxConnectionsPerHost",
  _flaxBinding27,
  _HttpClient_set_maxConnectionsPerHost,
);
const _flaxBinding173 = FlaxSetter(
  "autoUncompress",
  _flaxBinding20,
  _HttpClient_set_autoUncompress,
);
const _flaxBinding174 = FlaxSetter(
  "userAgent",
  _flaxBinding29,
  _HttpClient_set_userAgent,
);
const _flaxBinding175 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "url",
      _flaxBinding48,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "scheme",
      _flaxBinding0,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "realm",
      _flaxBinding29,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding55,
  _callback0,
  id: "callback:<>(p:r:url:object:flax.core/flutter#type:Uri,p:r:scheme:String:,p:r:realm:String?:)->future:[bool:]",
  invoke: _callback0Invoke,
  matches: _callback0Matches,
);
const _flaxBinding176 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding175,
);
const _flaxBinding177 = FlaxSetter(
  "authenticate",
  _flaxBinding176,
  _HttpClient_set_authenticate,
);
const _flaxBinding178 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "url",
      _flaxBinding48,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding0,
  FlaxCallbackAdapters.wrap1<api4.Uri, String>,
  id: "callback:<>(p:r:url:object:flax.core/flutter#type:Uri)->String:",
  invoke: FlaxCallbackAdapters.invoke1<api4.Uri, String>,
  matches: FlaxCallbackAdapters.matches1<api4.Uri, String>,
);
const _flaxBinding179 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding178,
);
const _flaxBinding180 = FlaxSetter(
  "findProxy",
  _flaxBinding179,
  _HttpClient_set_findProxy,
);
const _flaxBinding181 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "host",
      _flaxBinding0,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "port",
      _flaxBinding2,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "scheme",
      _flaxBinding0,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "realm",
      _flaxBinding29,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding55,
  _callback1,
  id: "callback:<>(p:r:host:String:,p:r:port:int:,p:r:scheme:String:,p:r:realm:String?:)->future:[bool:]",
  invoke: _callback1Invoke,
  matches: _callback1Matches,
);
const _flaxBinding182 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding181,
);
const _flaxBinding183 = FlaxSetter(
  "authenticateProxy",
  _flaxBinding182,
  _HttpClient_set_authenticateProxy,
);
const _flaxBinding184 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:X509Certificate",
);
const _flaxBinding185 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "cert",
      _flaxBinding184,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "host",
      _flaxBinding0,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "port",
      _flaxBinding2,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding20,
  _callback2,
  id: "callback:<>(p:r:cert:object:flax.core/sdk_dependencies#type:X509Certificate,p:r:host:String:,p:r:port:int:)->bool:",
  invoke: _callback2Invoke,
  matches: _callback2Matches,
);
const _flaxBinding186 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding185,
);
const _flaxBinding187 = FlaxSetter(
  "badCertificateCallback",
  _flaxBinding186,
  _HttpClient_set_badCertificateCallback,
);
const _flaxBinding188 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "line",
      _flaxBinding0,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding110,
  FlaxCallbackAdapters.wrap1<String, Object?>,
  id: "callback:<>(p:r:line:String:)->any?:",
  invoke: FlaxCallbackAdapters.invoke1<String, Object?>,
  matches: FlaxCallbackAdapters.matches1<String, Object?>,
);
const _flaxBinding189 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding188,
);
const _flaxBinding190 = FlaxSetter(
  "keyLog",
  _flaxBinding189,
  _HttpClient_set_keyLog,
);
const _flaxBinding191 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:HttpClientRequest",
);
const _flaxBinding192 = FlaxTypeRef(
  "future",
  item: _flaxBinding191,
  future: FlaxFutureBinding(
    "object:flax.core/sdk_dependencies#type:HttpClientRequest",
    _future12Adapt,
  ),
);
const _flaxBinding193 = <FlaxParameter>[
  FlaxParameter("method", _flaxBinding0, required: true),
  FlaxParameter("host", _flaxBinding0, required: true),
  FlaxParameter("port", _flaxBinding2, required: true),
  FlaxParameter("path", _flaxBinding0, required: true),
];
const _flaxBinding194 = FlaxInstanceMethod(
  _flaxBinding193,
  _flaxBinding192,
  _HttpClient_open,
);
const _flaxBinding195 = <FlaxParameter>[
  FlaxParameter("method", _flaxBinding0, required: true),
  FlaxParameter("url", _flaxBinding48, required: true),
];
const _flaxBinding196 = FlaxInstanceMethod(
  _flaxBinding195,
  _flaxBinding192,
  _HttpClient_openUrl,
);
const _flaxBinding197 = <FlaxParameter>[
  FlaxParameter("host", _flaxBinding0, required: true),
  FlaxParameter("port", _flaxBinding2, required: true),
  FlaxParameter("path", _flaxBinding0, required: true),
];
const _flaxBinding198 = FlaxInstanceMethod(
  _flaxBinding197,
  _flaxBinding192,
  _HttpClient_get,
);
const _flaxBinding199 = <FlaxParameter>[
  FlaxParameter("url", _flaxBinding48, required: true),
];
const _flaxBinding200 = FlaxInstanceMethod(
  _flaxBinding199,
  _flaxBinding192,
  _HttpClient_getUrl,
);
const _flaxBinding201 = FlaxInstanceMethod(
  _flaxBinding197,
  _flaxBinding192,
  _HttpClient_post,
);
const _flaxBinding202 = FlaxInstanceMethod(
  _flaxBinding199,
  _flaxBinding192,
  _HttpClient_postUrl,
);
const _flaxBinding203 = FlaxInstanceMethod(
  _flaxBinding197,
  _flaxBinding192,
  _HttpClient_put,
);
const _flaxBinding204 = FlaxInstanceMethod(
  _flaxBinding199,
  _flaxBinding192,
  _HttpClient_putUrl,
);
const _flaxBinding205 = FlaxInstanceMethod(
  _flaxBinding197,
  _flaxBinding192,
  _HttpClient_delete,
);
const _flaxBinding206 = FlaxInstanceMethod(
  _flaxBinding199,
  _flaxBinding192,
  _HttpClient_deleteUrl,
);
const _flaxBinding207 = FlaxInstanceMethod(
  _flaxBinding197,
  _flaxBinding192,
  _HttpClient_patch,
);
const _flaxBinding208 = FlaxInstanceMethod(
  _flaxBinding199,
  _flaxBinding192,
  _HttpClient_patchUrl,
);
const _flaxBinding209 = FlaxInstanceMethod(
  _flaxBinding197,
  _flaxBinding192,
  _HttpClient_head,
);
const _flaxBinding210 = FlaxInstanceMethod(
  _flaxBinding199,
  _flaxBinding192,
  _HttpClient_headUrl,
);
const _flaxBinding211 = <FlaxParameter>[
  FlaxParameter("force", _flaxBinding20, required: false, defaultValue: false),
];
const _flaxBinding212 = FlaxInstanceMethod(
  _flaxBinding211,
  _flaxBinding70,
  _HttpClient_close,
);
const _flaxBinding213 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:SecurityContext",
  nullable: true,
);
const _flaxBinding214 = <FlaxParameter>[
  FlaxParameter("context", _flaxBinding213, required: false),
];
const _flaxBinding215 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:HttpClient",
  [
    _flaxBinding164,
    _flaxBinding166,
    _flaxBinding167,
    _flaxBinding168,
    _flaxBinding169,
  ],
  {
    "open": _flaxBinding194,
    "openUrl": _flaxBinding196,
    "get": _flaxBinding198,
    "getUrl": _flaxBinding200,
    "post": _flaxBinding201,
    "postUrl": _flaxBinding202,
    "put": _flaxBinding203,
    "putUrl": _flaxBinding204,
    "delete": _flaxBinding205,
    "deleteUrl": _flaxBinding206,
    "patch": _flaxBinding207,
    "patchUrl": _flaxBinding208,
    "head": _flaxBinding209,
    "headUrl": _flaxBinding210,
    "close": _flaxBinding212,
  },
  constructors: {"": _flaxBinding214},
  create: _createHttpClient,
  matches: _isHttpClient,
  setters: [
    _flaxBinding170,
    _flaxBinding171,
    _flaxBinding172,
    _flaxBinding173,
    _flaxBinding174,
    _flaxBinding177,
    _flaxBinding180,
    _flaxBinding183,
    _flaxBinding187,
    _flaxBinding190,
  ],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding216 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:HttpClientResponse",
);
const _flaxBinding217 = FlaxTypeRef(
  "future",
  item: _flaxBinding216,
  future: FlaxFutureBinding(
    "object:flax.core/sdk_dependencies#type:HttpClientResponse",
    _future13Adapt,
  ),
);
const _flaxBinding218 = FlaxGetter(
  "done",
  _flaxBinding217,
  _HttpClientRequest_done,
);
const _flaxBinding219 = FlaxGetter(
  "persistentConnection",
  _flaxBinding20,
  _HttpClientRequest_persistentConnection,
);
const _flaxBinding220 = FlaxGetter(
  "followRedirects",
  _flaxBinding20,
  _HttpClientRequest_followRedirects,
);
const _flaxBinding221 = FlaxGetter(
  "maxRedirects",
  _flaxBinding2,
  _HttpClientRequest_maxRedirects,
);
const _flaxBinding222 = FlaxGetter(
  "method",
  _flaxBinding0,
  _HttpClientRequest_method,
);
const _flaxBinding223 = FlaxGetter(
  "uri",
  _flaxBinding48,
  _HttpClientRequest_uri,
);
const _flaxBinding224 = FlaxGetter(
  "contentLength",
  _flaxBinding2,
  _HttpClientRequest_contentLength,
);
const _flaxBinding225 = FlaxGetter(
  "bufferOutput",
  _flaxBinding20,
  _HttpClientRequest_bufferOutput,
);
const _flaxBinding226 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:HttpHeaders",
);
const _flaxBinding227 = FlaxGetter(
  "headers",
  _flaxBinding226,
  _HttpClientRequest_headers,
);
const _flaxBinding228 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:Cookie",
);
const _flaxBinding229 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding228,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dependencies#type:Cookie]",
    _collection7Create,
    _collection7Matches,
    restore: _collection7Restore,
  ),
);
const _flaxBinding230 = FlaxTypeRef(
  "list",
  item: _flaxBinding228,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dependencies#type:Cookie]",
    _collection6Create,
    _collection6Matches,
  ),
  iterable: _flaxBinding229,
);
const _flaxBinding231 = FlaxGetter(
  "cookies",
  _flaxBinding230,
  _HttpClientRequest_cookies,
);
const _flaxBinding232 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:HttpConnectionInfo",
  nullable: true,
);
const _flaxBinding233 = FlaxGetter(
  "connectionInfo",
  _flaxBinding232,
  _HttpClientRequest_connectionInfo,
);
const _flaxBinding234 = FlaxGetter(
  "encoding",
  _flaxBinding130,
  _HttpClientRequest_encoding,
);
const _flaxBinding235 = FlaxSetter(
  "persistentConnection",
  _flaxBinding20,
  _HttpClientRequest_set_persistentConnection,
);
const _flaxBinding236 = FlaxSetter(
  "followRedirects",
  _flaxBinding20,
  _HttpClientRequest_set_followRedirects,
);
const _flaxBinding237 = FlaxSetter(
  "maxRedirects",
  _flaxBinding2,
  _HttpClientRequest_set_maxRedirects,
);
const _flaxBinding238 = FlaxSetter(
  "contentLength",
  _flaxBinding2,
  _HttpClientRequest_set_contentLength,
);
const _flaxBinding239 = FlaxSetter(
  "bufferOutput",
  _flaxBinding20,
  _HttpClientRequest_set_bufferOutput,
);
const _flaxBinding240 = FlaxSetter(
  "encoding",
  _flaxBinding130,
  _HttpClientRequest_set_encoding,
);
const _flaxBinding241 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding217,
  _HttpClientRequest_close,
);
const _flaxBinding242 = <FlaxParameter>[
  FlaxParameter("data", _flaxBinding4, required: true),
];
const _flaxBinding243 = FlaxInstanceMethod(
  _flaxBinding242,
  _flaxBinding70,
  _HttpClientRequest_add,
);
const _flaxBinding244 = FlaxTypeRef("any");
const _flaxBinding245 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:StackTrace",
  nullable: true,
);
const _flaxBinding246 = <FlaxParameter>[
  FlaxParameter("error", _flaxBinding244, required: true),
  FlaxParameter("stackTrace", _flaxBinding245, required: false),
];
const _flaxBinding247 = FlaxInstanceMethod(
  _flaxBinding246,
  _flaxBinding70,
  _HttpClientRequest_addError,
);
const _flaxBinding248 = <FlaxParameter>[
  FlaxParameter("stream", _flaxBinding5, required: true),
];
const _flaxBinding249 = FlaxInstanceMethod(
  _flaxBinding248,
  _flaxBinding111,
  _HttpClientRequest_addStream,
);
const _flaxBinding250 = <FlaxParameter>[
  FlaxParameter("exception", _flaxBinding110, required: false),
  FlaxParameter("stackTrace", _flaxBinding245, required: false),
];
const _flaxBinding251 = FlaxInstanceMethod(
  _flaxBinding250,
  _flaxBinding70,
  _HttpClientRequest_abort,
);
const _flaxBinding252 = <FlaxParameter>[
  FlaxParameter("object", _flaxBinding110, required: true),
];
const _flaxBinding253 = FlaxInstanceMethod(
  _flaxBinding252,
  _flaxBinding70,
  _HttpClientRequest_write,
);
const _flaxBinding254 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding110,
  collection: FlaxCollectionBinding(
    "iterable:[any?:]",
    _collection8Create,
    _collection8Matches,
    restore: _collection8Restore,
  ),
);
const _flaxBinding255 = <FlaxParameter>[
  FlaxParameter("objects", _flaxBinding254, required: true),
  FlaxParameter("separator", _flaxBinding0, required: false, defaultValue: ''),
];
const _flaxBinding256 = FlaxInstanceMethod(
  _flaxBinding255,
  _flaxBinding70,
  _HttpClientRequest_writeAll,
);
const _flaxBinding257 = <FlaxParameter>[
  FlaxParameter(
    "object",
    _flaxBinding110,
    required: false,
    omitWhenAbsent: true,
  ),
];
const _flaxBinding258 = FlaxInstanceMethod(
  _flaxBinding257,
  _flaxBinding70,
  _HttpClientRequest_writeln,
);
const _flaxBinding259 = <FlaxParameter>[
  FlaxParameter("charCode", _flaxBinding2, required: true),
];
const _flaxBinding260 = FlaxInstanceMethod(
  _flaxBinding259,
  _flaxBinding70,
  _HttpClientRequest_writeCharCode,
);
const _flaxBinding261 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding111,
  _HttpClientRequest_flush,
);
const _flaxBinding262 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:HttpClientRequest",
  [
    _flaxBinding218,
    _flaxBinding219,
    _flaxBinding220,
    _flaxBinding221,
    _flaxBinding222,
    _flaxBinding223,
    _flaxBinding224,
    _flaxBinding225,
    _flaxBinding227,
    _flaxBinding231,
    _flaxBinding233,
    _flaxBinding234,
  ],
  {
    "close": _flaxBinding241,
    "add": _flaxBinding243,
    "addError": _flaxBinding247,
    "addStream": _flaxBinding249,
    "abort": _flaxBinding251,
    "write": _flaxBinding253,
    "writeAll": _flaxBinding256,
    "writeln": _flaxBinding258,
    "writeCharCode": _flaxBinding260,
    "flush": _flaxBinding261,
  },
  constructors: {},
  create: _createHttpClientRequest,
  matches: _isHttpClientRequest,
  setters: [
    _flaxBinding235,
    _flaxBinding236,
    _flaxBinding237,
    _flaxBinding238,
    _flaxBinding239,
    _flaxBinding240,
  ],
  supertypes: [
    "dart:core::Object",
    "dart:io::IOSink",
    "flax.core/flutter#type:StreamSink",
    "flax.core/flutter#type:EventSink",
    "flax.core/flutter#type:Sink",
    "flax.core/flutter#type:StreamConsumer",
    "dart:core::StringSink",
  ],
);
const _flaxBinding263 = FlaxGetter(
  "statusCode",
  _flaxBinding2,
  _HttpClientResponse_statusCode,
);
const _flaxBinding264 = FlaxGetter(
  "reasonPhrase",
  _flaxBinding0,
  _HttpClientResponse_reasonPhrase,
);
const _flaxBinding265 = FlaxGetter(
  "contentLength",
  _flaxBinding2,
  _HttpClientResponse_contentLength,
);
const _flaxBinding266 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dependencies#type:HttpClientResponseCompressionState",
);
const _flaxBinding267 = FlaxGetter(
  "compressionState",
  _flaxBinding266,
  _HttpClientResponse_compressionState,
);
const _flaxBinding268 = FlaxGetter(
  "persistentConnection",
  _flaxBinding20,
  _HttpClientResponse_persistentConnection,
);
const _flaxBinding269 = FlaxGetter(
  "isRedirect",
  _flaxBinding20,
  _HttpClientResponse_isRedirect,
);
const _flaxBinding270 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:RedirectInfo",
);
const _flaxBinding271 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding270,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dependencies#type:RedirectInfo]",
    _collection10Create,
    _collection10Matches,
    restore: _collection10Restore,
  ),
);
const _flaxBinding272 = FlaxTypeRef(
  "list",
  item: _flaxBinding270,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dependencies#type:RedirectInfo]",
    _collection9Create,
    _collection9Matches,
  ),
  iterable: _flaxBinding271,
);
const _flaxBinding273 = FlaxGetter(
  "redirects",
  _flaxBinding272,
  _HttpClientResponse_redirects,
);
const _flaxBinding274 = FlaxGetter(
  "headers",
  _flaxBinding226,
  _HttpClientResponse_headers,
);
const _flaxBinding275 = FlaxGetter(
  "cookies",
  _flaxBinding230,
  _HttpClientResponse_cookies,
);
const _flaxBinding276 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:X509Certificate",
  nullable: true,
);
const _flaxBinding277 = FlaxGetter(
  "certificate",
  _flaxBinding276,
  _HttpClientResponse_certificate,
);
const _flaxBinding278 = FlaxGetter(
  "connectionInfo",
  _flaxBinding232,
  _HttpClientResponse_connectionInfo,
);
const _flaxBinding279 = FlaxGetter(
  "isBroadcast",
  _flaxBinding20,
  _HttpClientResponse_isBroadcast,
);
const _flaxBinding280 = FlaxGetter(
  "length",
  _flaxBinding103,
  _HttpClientResponse_length,
);
const _flaxBinding281 = FlaxGetter(
  "isEmpty",
  _flaxBinding55,
  _HttpClientResponse_isEmpty,
);
const _flaxBinding282 = FlaxTypeRef(
  "future",
  item: _flaxBinding4,
  future: FlaxFutureBinding("list:[int:]", _future14Adapt),
);
const _flaxBinding283 = FlaxGetter(
  "first",
  _flaxBinding282,
  _HttpClientResponse_first,
);
const _flaxBinding284 = FlaxGetter(
  "last",
  _flaxBinding282,
  _HttpClientResponse_last,
);
const _flaxBinding285 = FlaxGetter(
  "single",
  _flaxBinding282,
  _HttpClientResponse_single,
);
const _flaxBinding286 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Uri",
  nullable: true,
);
const _flaxBinding287 = <FlaxParameter>[
  FlaxParameter("method", _flaxBinding29, required: false),
  FlaxParameter("url", _flaxBinding286, required: false),
  FlaxParameter("followLoops", _flaxBinding17, required: false),
];
const _flaxBinding288 = FlaxInstanceMethod(
  _flaxBinding287,
  _flaxBinding217,
  _HttpClientResponse_redirect,
);
const _flaxBinding289 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:Socket",
);
const _flaxBinding290 = FlaxTypeRef(
  "future",
  item: _flaxBinding289,
  future: FlaxFutureBinding(
    "object:flax.core/sdk_dependencies#type:Socket",
    _future15Adapt,
  ),
);
const _flaxBinding291 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding290,
  _HttpClientResponse_detachSocket,
);
const _flaxBinding292 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:StreamSubscription",
  dartType: FlaxDartTypes.typeOf<api5.StreamSubscription<List<int>>>,
);
const _flaxBinding293 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "subscription",
      _flaxBinding292,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding70,
  FlaxCallbackAdapters.wrapVoid1<api5.StreamSubscription<List<int>>>,
  id: "callback:<>(p:r:subscription:object:flax.core/flutter#type:StreamSubscription<list:[int:]>)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api5.StreamSubscription<List<int>>>,
  matches:
      FlaxCallbackAdapters.matchesVoid1<api5.StreamSubscription<List<int>>>,
);
const _flaxBinding294 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding293,
);
const _flaxBinding295 = <FlaxParameter>[
  FlaxParameter("onCancel", _flaxBinding294, required: false),
  FlaxParameter("onListen", _flaxBinding294, required: false),
];
const _flaxBinding296 = FlaxInstanceMethod(
  _flaxBinding295,
  _flaxBinding5,
  _HttpClientResponse_asBroadcastStream,
);
const _flaxBinding297 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "event",
      _flaxBinding4,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding70,
  FlaxCallbackAdapters.wrapVoid1<List<int>>,
  id: "callback:<>(p:r:event:list:[int:])->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<List<int>>,
  matches: FlaxCallbackAdapters.matchesVoid1<List<int>>,
);
const _flaxBinding298 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding297,
);
const _flaxBinding299 = FlaxCallbackBinding(
  [],
  _flaxBinding70,
  FlaxCallbackAdapters.wrapVoid0,
  id: "callback:<>()->void:",
  invoke: FlaxCallbackAdapters.invokeVoid0,
  matches: FlaxCallbackAdapters.matchesVoid0,
);
const _flaxBinding300 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding299,
);
const _flaxBinding301 = FlaxTypeRef("function", nullable: true);
const _flaxBinding302 = <FlaxParameter>[
  FlaxParameter("onData", _flaxBinding298, required: true),
  FlaxParameter("cancelOnError", _flaxBinding17, required: false),
  FlaxParameter("onDone", _flaxBinding300, required: false),
  FlaxParameter("onError", _flaxBinding301, required: false),
];
const _flaxBinding303 = FlaxInstanceMethod(
  _flaxBinding302,
  _flaxBinding292,
  _HttpClientResponse_listen,
);
const _flaxBinding304 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "event",
      _flaxBinding4,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding20,
  FlaxCallbackAdapters.wrap1<List<int>, bool>,
  id: "callback:<>(p:r:event:list:[int:])->bool:",
  invoke: FlaxCallbackAdapters.invoke1<List<int>, bool>,
  matches: FlaxCallbackAdapters.matches1<List<int>, bool>,
);
const _flaxBinding305 = FlaxTypeRef("callback", callback: _flaxBinding304);
const _flaxBinding306 = <FlaxParameter>[
  FlaxParameter("test", _flaxBinding305, required: true),
];
const _flaxBinding307 = FlaxInstanceMethod(
  _flaxBinding306,
  _flaxBinding5,
  _HttpClientResponse_where,
);
const _flaxBinding308 = FlaxTypeRef(
  "futureOr",
  item: _flaxBinding110,
  future: FlaxFutureBinding("any?:", _future8Adapt),
);
const _flaxBinding309 = FlaxTypeRef(
  "stream",
  id: "flax.core/flutter#type:Stream",
  dartType: FlaxDartTypes.typeOf<api5.Stream<Object?>?>,
  nullable: true,
  item: _flaxBinding110,
  stream: FlaxStreamBinding(
    "stream:flax.core/flutter#type:Stream[any?:]",
    _stream2Matches,
    _stream2Adapt,
  ),
);
const _flaxBinding310 = FlaxTypeRef("function");
const _flaxBinding311 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "error",
      _flaxBinding110,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding20,
  FlaxCallbackAdapters.wrap1<Object?, bool>,
  id: "callback:<>(p:r:error:any?:)->bool:",
  invoke: FlaxCallbackAdapters.invoke1<Object?, bool>,
  matches: FlaxCallbackAdapters.matches1<Object?, bool>,
);
const _flaxBinding312 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding311,
);
const _flaxBinding313 = <FlaxParameter>[
  FlaxParameter("onError", _flaxBinding310, required: true),
  FlaxParameter("test", _flaxBinding312, required: false),
];
const _flaxBinding314 = FlaxInstanceMethod(
  _flaxBinding313,
  _flaxBinding5,
  _HttpClientResponse_handleError,
);
const _flaxBinding315 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:StreamConsumer",
  dartType: FlaxDartTypes.typeOf<api5.StreamConsumer<List<int>>>,
);
const _flaxBinding316 = <FlaxParameter>[
  FlaxParameter("streamConsumer", _flaxBinding315, required: true),
];
const _flaxBinding317 = FlaxInstanceMethod(
  _flaxBinding316,
  _flaxBinding111,
  _HttpClientResponse_pipe,
);
const _flaxBinding318 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "previous",
      _flaxBinding4,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "element",
      _flaxBinding4,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding4,
  FlaxCallbackAdapters.wrap2<List<int>, List<int>, List<int>>,
  id: "callback:<>(p:r:previous:list:[int:],p:r:element:list:[int:])->list:[int:]",
  invoke: FlaxCallbackAdapters.invoke2<List<int>, List<int>, List<int>>,
  matches: FlaxCallbackAdapters.matches2<List<int>, List<int>, List<int>>,
);
const _flaxBinding319 = FlaxTypeRef("callback", callback: _flaxBinding318);
const _flaxBinding320 = <FlaxParameter>[
  FlaxParameter("combine", _flaxBinding319, required: true),
];
const _flaxBinding321 = FlaxInstanceMethod(
  _flaxBinding320,
  _flaxBinding282,
  _HttpClientResponse_reduce,
);
const _flaxBinding322 = <FlaxParameter>[
  FlaxParameter("separator", _flaxBinding0, required: false, defaultValue: ''),
];
const _flaxBinding323 = FlaxInstanceMethod(
  _flaxBinding322,
  _flaxBinding6,
  _HttpClientResponse_join,
);
const _flaxBinding324 = <FlaxParameter>[
  FlaxParameter("needle", _flaxBinding110, required: true),
];
const _flaxBinding325 = FlaxInstanceMethod(
  _flaxBinding324,
  _flaxBinding55,
  _HttpClientResponse_contains,
);
const _flaxBinding326 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "element",
      _flaxBinding4,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding70,
  FlaxCallbackAdapters.wrapVoid1<List<int>>,
  id: "callback:<>(p:r:element:list:[int:])->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<List<int>>,
  matches: FlaxCallbackAdapters.matchesVoid1<List<int>>,
);
const _flaxBinding327 = FlaxTypeRef("callback", callback: _flaxBinding326);
const _flaxBinding328 = FlaxTypeRef(
  "future",
  item: _flaxBinding70,
  future: FlaxFutureBinding("void:", _future16Adapt),
);
const _flaxBinding329 = <FlaxParameter>[
  FlaxParameter("action", _flaxBinding327, required: true),
];
const _flaxBinding330 = FlaxInstanceMethod(
  _flaxBinding329,
  _flaxBinding328,
  _HttpClientResponse_forEach,
);
const _flaxBinding331 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "element",
      _flaxBinding4,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding20,
  FlaxCallbackAdapters.wrap1<List<int>, bool>,
  id: "callback:<>(p:r:element:list:[int:])->bool:",
  invoke: FlaxCallbackAdapters.invoke1<List<int>, bool>,
  matches: FlaxCallbackAdapters.matches1<List<int>, bool>,
);
const _flaxBinding332 = FlaxTypeRef("callback", callback: _flaxBinding331);
const _flaxBinding333 = <FlaxParameter>[
  FlaxParameter("test", _flaxBinding332, required: true),
];
const _flaxBinding334 = FlaxInstanceMethod(
  _flaxBinding333,
  _flaxBinding55,
  _HttpClientResponse_every,
);
const _flaxBinding335 = FlaxInstanceMethod(
  _flaxBinding333,
  _flaxBinding55,
  _HttpClientResponse_any,
);
const _flaxBinding336 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding4,
  collection: FlaxCollectionBinding(
    "iterable:[list:[int:]]",
    _collection12Create,
    _collection12Matches,
    restore: _collection12Restore,
  ),
);
const _flaxBinding337 = FlaxTypeRef(
  "list",
  item: _flaxBinding4,
  collection: FlaxCollectionBinding(
    "list:[list:[int:]]",
    _collection11Create,
    _collection11Matches,
  ),
  iterable: _flaxBinding336,
);
const _flaxBinding338 = FlaxTypeRef(
  "future",
  item: _flaxBinding337,
  future: FlaxFutureBinding("list:[list:[int:]]", _future17Adapt),
);
const _flaxBinding339 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding338,
  _HttpClientResponse_toList,
);
const _flaxBinding340 = FlaxTypeRef(
  "set",
  item: _flaxBinding4,
  collection: FlaxCollectionBinding(
    "set:[list:[int:]]",
    _collection13Create,
    _collection13Matches,
  ),
  iterable: _flaxBinding336,
);
const _flaxBinding341 = FlaxTypeRef(
  "future",
  item: _flaxBinding340,
  future: FlaxFutureBinding("set:[list:[int:]]", _future18Adapt),
);
const _flaxBinding342 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding341,
  _HttpClientResponse_toSet,
);
const _flaxBinding343 = <FlaxParameter>[
  FlaxParameter("count", _flaxBinding2, required: true),
];
const _flaxBinding344 = FlaxInstanceMethod(
  _flaxBinding343,
  _flaxBinding5,
  _HttpClientResponse_take,
);
const _flaxBinding345 = FlaxInstanceMethod(
  _flaxBinding333,
  _flaxBinding5,
  _HttpClientResponse_takeWhile,
);
const _flaxBinding346 = FlaxInstanceMethod(
  _flaxBinding343,
  _flaxBinding5,
  _HttpClientResponse_skip,
);
const _flaxBinding347 = FlaxInstanceMethod(
  _flaxBinding333,
  _flaxBinding5,
  _HttpClientResponse_skipWhile,
);
const _flaxBinding348 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "previous",
      _flaxBinding4,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "next",
      _flaxBinding4,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding20,
  FlaxCallbackAdapters.wrap2<List<int>, List<int>, bool>,
  id: "callback:<>(p:r:previous:list:[int:],p:r:next:list:[int:])->bool:",
  invoke: FlaxCallbackAdapters.invoke2<List<int>, List<int>, bool>,
  matches: FlaxCallbackAdapters.matches2<List<int>, List<int>, bool>,
);
const _flaxBinding349 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding348,
);
const _flaxBinding350 = <FlaxParameter>[
  FlaxParameter("equals", _flaxBinding349, required: false),
];
const _flaxBinding351 = FlaxInstanceMethod(
  _flaxBinding350,
  _flaxBinding5,
  _HttpClientResponse_distinct,
);
const _flaxBinding352 = FlaxCallbackBinding(
  [],
  _flaxBinding4,
  FlaxCallbackAdapters.wrap0<List<int>>,
  id: "callback:<>()->list:[int:]",
  invoke: FlaxCallbackAdapters.invoke0<List<int>>,
  matches: FlaxCallbackAdapters.matches0<List<int>>,
);
const _flaxBinding353 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding352,
);
const _flaxBinding354 = <FlaxParameter>[
  FlaxParameter("test", _flaxBinding332, required: true),
  FlaxParameter("orElse", _flaxBinding353, required: false),
];
const _flaxBinding355 = FlaxInstanceMethod(
  _flaxBinding354,
  _flaxBinding282,
  _HttpClientResponse_firstWhere,
);
const _flaxBinding356 = FlaxInstanceMethod(
  _flaxBinding354,
  _flaxBinding282,
  _HttpClientResponse_lastWhere,
);
const _flaxBinding357 = FlaxInstanceMethod(
  _flaxBinding354,
  _flaxBinding282,
  _HttpClientResponse_singleWhere,
);
const _flaxBinding358 = <FlaxParameter>[
  FlaxParameter("index", _flaxBinding2, required: true),
];
const _flaxBinding359 = FlaxInstanceMethod(
  _flaxBinding358,
  _flaxBinding282,
  _HttpClientResponse_elementAt,
);
const _flaxBinding360 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:EventSink",
  dartType: FlaxDartTypes.typeOf<api5.EventSink<List<int>>>,
);
const _flaxBinding361 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "sink",
      _flaxBinding360,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding70,
  FlaxCallbackAdapters.wrapVoid1<api5.EventSink<List<int>>>,
  id: "callback:<>(p:r:sink:object:flax.core/flutter#type:EventSink<list:[int:]>)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api5.EventSink<List<int>>>,
  matches: FlaxCallbackAdapters.matchesVoid1<api5.EventSink<List<int>>>,
);
const _flaxBinding362 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding361,
);
const _flaxBinding363 = <FlaxParameter>[
  FlaxParameter("timeLimit", _flaxBinding163, required: true),
  FlaxParameter("onTimeout", _flaxBinding362, required: false),
];
const _flaxBinding364 = FlaxInstanceMethod(
  _flaxBinding363,
  _flaxBinding5,
  _HttpClientResponse_timeout,
);
const _flaxBinding365 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:HttpClientResponse",
  [
    _flaxBinding263,
    _flaxBinding264,
    _flaxBinding265,
    _flaxBinding267,
    _flaxBinding268,
    _flaxBinding269,
    _flaxBinding273,
    _flaxBinding274,
    _flaxBinding275,
    _flaxBinding277,
    _flaxBinding278,
    _flaxBinding279,
    _flaxBinding280,
    _flaxBinding281,
    _flaxBinding283,
    _flaxBinding284,
    _flaxBinding285,
  ],
  {
    "redirect": _flaxBinding288,
    "detachSocket": _flaxBinding291,
    "asBroadcastStream": _flaxBinding296,
    "listen": _flaxBinding303,
    "where": _flaxBinding307,
    "map": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter(
          "convert",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter(
                  "event",
                  _flaxBinding4,
                  required: true,
                  positional: true,
                ),
              ],
              _flaxBinding110,
              _callback3,
              id: "callback:<>(p:r:event:list:[int:])->any?:",
              invoke: _callback3Invoke,
              matches: _callback3Matches,
            ),
          ),
          required: true,
        ),
      ],
      FlaxTypeRef(
        "stream",
        id: "flax.core/flutter#type:Stream",
        item: _flaxBinding110,
        stream: FlaxStreamBinding(
          "stream:flax.core/flutter#type:Stream[any?:]",
          _stream2Matches,
          _stream2Adapt,
        ),
      ),
      _HttpClientResponse_map,
      genericFactory: _flaxGeneric_HttpClientResponse_map,
      ownerTypes: [],
    ),
    "asyncMap": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter(
          "convert",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter(
                  "event",
                  _flaxBinding4,
                  required: true,
                  positional: true,
                ),
              ],
              _flaxBinding308,
              _callback4,
              id: "callback:<>(p:r:event:list:[int:])->futureOr:[any?:]",
              invoke: _callback4Invoke,
              matches: _callback4Matches,
            ),
          ),
          required: true,
        ),
      ],
      FlaxTypeRef(
        "stream",
        id: "flax.core/flutter#type:Stream",
        item: _flaxBinding110,
        stream: FlaxStreamBinding(
          "stream:flax.core/flutter#type:Stream[any?:]",
          _stream2Matches,
          _stream2Adapt,
        ),
      ),
      _HttpClientResponse_asyncMap,
      genericFactory: _flaxGeneric_HttpClientResponse_asyncMap,
      ownerTypes: [],
    ),
    "asyncExpand": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter(
          "convert",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter(
                  "event",
                  _flaxBinding4,
                  required: true,
                  positional: true,
                ),
              ],
              _flaxBinding309,
              _callback5,
              id: "callback:<>(p:r:event:list:[int:])->stream?:flax.core/flutter#type:Stream[any?:]",
              invoke: _callback5Invoke,
              matches: _callback5Matches,
            ),
          ),
          required: true,
        ),
      ],
      FlaxTypeRef(
        "stream",
        id: "flax.core/flutter#type:Stream",
        item: _flaxBinding110,
        stream: FlaxStreamBinding(
          "stream:flax.core/flutter#type:Stream[any?:]",
          _stream2Matches,
          _stream2Adapt,
        ),
      ),
      _HttpClientResponse_asyncExpand,
      genericFactory: _flaxGeneric_HttpClientResponse_asyncExpand,
      ownerTypes: [],
    ),
    "handleError": _flaxBinding314,
    "expand": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter(
          "convert",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter(
                  "element",
                  _flaxBinding4,
                  required: true,
                  positional: true,
                ),
              ],
              _flaxBinding254,
              _callback6,
              id: "callback:<>(p:r:element:list:[int:])->iterable:[any?:]",
              invoke: _callback6Invoke,
              matches: _callback6Matches,
            ),
          ),
          required: true,
        ),
      ],
      FlaxTypeRef(
        "stream",
        id: "flax.core/flutter#type:Stream",
        item: _flaxBinding110,
        stream: FlaxStreamBinding(
          "stream:flax.core/flutter#type:Stream[any?:]",
          _stream2Matches,
          _stream2Adapt,
        ),
      ),
      _HttpClientResponse_expand,
      genericFactory: _flaxGeneric_HttpClientResponse_expand,
      ownerTypes: [],
    ),
    "pipe": _flaxBinding317,
    "transform": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter(
          "streamTransformer",
          FlaxTypeRef("object", id: "flax.core/flutter#type:StreamTransformer"),
          required: true,
        ),
      ],
      FlaxTypeRef(
        "stream",
        id: "flax.core/flutter#type:Stream",
        item: _flaxBinding110,
        stream: FlaxStreamBinding(
          "stream:flax.core/flutter#type:Stream[any?:]",
          _stream2Matches,
          _stream2Adapt,
        ),
      ),
      _HttpClientResponse_transform,
      genericFactory: _flaxGeneric_HttpClientResponse_transform,
      ownerTypes: [],
    ),
    "reduce": _flaxBinding321,
    "fold": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter(
          "initialValue",
          FlaxTypeRef("any", nullable: true),
          required: true,
        ),
        FlaxParameter(
          "combine",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter(
                  "previous",
                  _flaxBinding110,
                  required: true,
                  positional: true,
                ),
                FlaxCallbackParameter(
                  "element",
                  _flaxBinding4,
                  required: true,
                  positional: true,
                ),
              ],
              _flaxBinding110,
              _callback7,
              id: "callback:<>(p:r:previous:any?:,p:r:element:list:[int:])->any?:",
              invoke: _callback7Invoke,
              matches: _callback7Matches,
            ),
          ),
          required: true,
        ),
      ],
      FlaxTypeRef(
        "future",
        item: _flaxBinding110,
        future: FlaxFutureBinding("any?:", _future8Adapt),
      ),
      _HttpClientResponse_fold,
      genericFactory: _flaxGeneric_HttpClientResponse_fold,
      ownerTypes: [],
    ),
    "join": _flaxBinding323,
    "contains": _flaxBinding325,
    "forEach": _flaxBinding330,
    "every": _flaxBinding334,
    "any": _flaxBinding335,
    "cast": FlaxInstanceMethod(
      _flaxBinding42,
      FlaxTypeRef(
        "stream",
        id: "flax.core/flutter#type:Stream",
        item: _flaxBinding110,
        stream: FlaxStreamBinding(
          "stream:flax.core/flutter#type:Stream[any?:]",
          _stream2Matches,
          _stream2Adapt,
        ),
      ),
      _HttpClientResponse_cast,
      genericFactory: _flaxGeneric_HttpClientResponse_cast,
      ownerTypes: [],
    ),
    "toList": _flaxBinding339,
    "toSet": _flaxBinding342,
    "drain": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter(
          "futureValue",
          FlaxTypeRef("any", nullable: true),
          required: false,
        ),
      ],
      FlaxTypeRef(
        "future",
        item: _flaxBinding110,
        future: FlaxFutureBinding("any?:", _future8Adapt),
      ),
      _HttpClientResponse_drain,
      genericFactory: _flaxGeneric_HttpClientResponse_drain,
      ownerTypes: [],
    ),
    "take": _flaxBinding344,
    "takeWhile": _flaxBinding345,
    "skip": _flaxBinding346,
    "skipWhile": _flaxBinding347,
    "distinct": _flaxBinding351,
    "firstWhere": _flaxBinding355,
    "lastWhere": _flaxBinding356,
    "singleWhere": _flaxBinding357,
    "elementAt": _flaxBinding359,
    "timeout": _flaxBinding364,
  },
  constructors: {},
  create: _createHttpClientResponse,
  matches: _isHttpClientResponse,
  setters: [],
  supertypes: ["dart:core::Object", "flax.core/flutter#type:Stream"],
);
const _flaxBinding366 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:InternetAddress",
);
const _flaxBinding367 = FlaxGetter(
  "remoteAddress",
  _flaxBinding366,
  _HttpConnectionInfo_remoteAddress,
);
const _flaxBinding368 = FlaxGetter(
  "remotePort",
  _flaxBinding2,
  _HttpConnectionInfo_remotePort,
);
const _flaxBinding369 = FlaxGetter(
  "localPort",
  _flaxBinding2,
  _HttpConnectionInfo_localPort,
);
const _flaxBinding370 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:HttpConnectionInfo",
  [_flaxBinding367, _flaxBinding368, _flaxBinding369],
  {},
  constructors: {},
  create: _createHttpConnectionInfo,
  matches: _isHttpConnectionInfo,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding371 = FlaxGetter("date", _flaxBinding25, _HttpHeaders_date);
const _flaxBinding372 = FlaxGetter(
  "expires",
  _flaxBinding25,
  _HttpHeaders_expires,
);
const _flaxBinding373 = FlaxGetter(
  "ifModifiedSince",
  _flaxBinding25,
  _HttpHeaders_ifModifiedSince,
);
const _flaxBinding374 = FlaxGetter("host", _flaxBinding29, _HttpHeaders_host);
const _flaxBinding375 = FlaxGetter("port", _flaxBinding27, _HttpHeaders_port);
const _flaxBinding376 = FlaxGetter(
  "contentLength",
  _flaxBinding2,
  _HttpHeaders_contentLength,
);
const _flaxBinding377 = FlaxGetter(
  "persistentConnection",
  _flaxBinding20,
  _HttpHeaders_persistentConnection,
);
const _flaxBinding378 = FlaxGetter(
  "chunkedTransferEncoding",
  _flaxBinding20,
  _HttpHeaders_chunkedTransferEncoding,
);
const _flaxBinding379 = FlaxSetter(
  "date",
  _flaxBinding25,
  _HttpHeaders_set_date,
);
const _flaxBinding380 = FlaxSetter(
  "expires",
  _flaxBinding25,
  _HttpHeaders_set_expires,
);
const _flaxBinding381 = FlaxSetter(
  "ifModifiedSince",
  _flaxBinding25,
  _HttpHeaders_set_ifModifiedSince,
);
const _flaxBinding382 = FlaxSetter(
  "host",
  _flaxBinding29,
  _HttpHeaders_set_host,
);
const _flaxBinding383 = FlaxSetter(
  "port",
  _flaxBinding27,
  _HttpHeaders_set_port,
);
const _flaxBinding384 = FlaxSetter(
  "contentLength",
  _flaxBinding2,
  _HttpHeaders_set_contentLength,
);
const _flaxBinding385 = FlaxSetter(
  "persistentConnection",
  _flaxBinding20,
  _HttpHeaders_set_persistentConnection,
);
const _flaxBinding386 = FlaxSetter(
  "chunkedTransferEncoding",
  _flaxBinding20,
  _HttpHeaders_set_chunkedTransferEncoding,
);
const _flaxBinding387 = <FlaxParameter>[
  FlaxParameter("name", _flaxBinding0, required: true),
];
const _flaxBinding388 = FlaxInstanceMethod(
  _flaxBinding387,
  _flaxBinding29,
  _HttpHeaders_value,
);
const _flaxBinding389 = <FlaxParameter>[
  FlaxParameter("name", _flaxBinding0, required: true),
  FlaxParameter("value", _flaxBinding244, required: true),
  FlaxParameter(
    "preserveHeaderCase",
    _flaxBinding20,
    required: false,
    defaultValue: false,
  ),
];
const _flaxBinding390 = FlaxInstanceMethod(
  _flaxBinding389,
  _flaxBinding70,
  _HttpHeaders_add,
);
const _flaxBinding391 = FlaxInstanceMethod(
  _flaxBinding389,
  _flaxBinding70,
  _HttpHeaders_set,
);
const _flaxBinding392 = <FlaxParameter>[
  FlaxParameter("name", _flaxBinding0, required: true),
  FlaxParameter("value", _flaxBinding244, required: true),
];
const _flaxBinding393 = FlaxInstanceMethod(
  _flaxBinding392,
  _flaxBinding70,
  _HttpHeaders_remove,
);
const _flaxBinding394 = FlaxInstanceMethod(
  _flaxBinding387,
  _flaxBinding70,
  _HttpHeaders_removeAll,
);
const _flaxBinding395 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "name",
      _flaxBinding0,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "values",
      _flaxBinding135,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding70,
  FlaxCallbackAdapters.wrapVoid2<String, List<String>>,
  id: "callback:<>(p:r:name:String:,p:r:values:list:[String:])->void:",
  invoke: FlaxCallbackAdapters.invokeVoid2<String, List<String>>,
  matches: FlaxCallbackAdapters.matchesVoid2<String, List<String>>,
);
const _flaxBinding396 = FlaxTypeRef("callback", callback: _flaxBinding395);
const _flaxBinding397 = <FlaxParameter>[
  FlaxParameter("action", _flaxBinding396, required: true),
];
const _flaxBinding398 = FlaxInstanceMethod(
  _flaxBinding397,
  _flaxBinding70,
  _HttpHeaders_forEach,
);
const _flaxBinding399 = FlaxInstanceMethod(
  _flaxBinding387,
  _flaxBinding70,
  _HttpHeaders_noFolding,
);
const _flaxBinding400 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding70,
  _HttpHeaders_clear,
);
const _flaxBinding401 = FlaxTypeRef(
  "list",
  nullable: true,
  item: _flaxBinding0,
  collection: FlaxCollectionBinding(
    "list:[String:]",
    _collection4Create,
    _collection4Matches,
  ),
  iterable: _flaxBinding134,
);
const _flaxBinding402 = FlaxInstanceMethod(
  _flaxBinding387,
  _flaxBinding401,
  _HttpHeaders_operatorGetIndex,
);
const _flaxBinding403 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:HttpHeaders",
  [
    _flaxBinding371,
    _flaxBinding372,
    _flaxBinding373,
    _flaxBinding374,
    _flaxBinding375,
    _flaxBinding376,
    _flaxBinding377,
    _flaxBinding378,
  ],
  {
    "value": _flaxBinding388,
    "add": _flaxBinding390,
    "set": _flaxBinding391,
    "remove": _flaxBinding393,
    "removeAll": _flaxBinding394,
    "forEach": _flaxBinding398,
    "noFolding": _flaxBinding399,
    "clear": _flaxBinding400,
    "operatorGetIndex": _flaxBinding402,
  },
  constructors: {},
  create: _createHttpHeaders,
  matches: _isHttpHeaders,
  setters: [
    _flaxBinding379,
    _flaxBinding380,
    _flaxBinding381,
    _flaxBinding382,
    _flaxBinding383,
    _flaxBinding384,
    _flaxBinding385,
    _flaxBinding386,
  ],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding404 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:InternetAddressType",
);
const _flaxBinding405 = FlaxGetter(
  "type",
  _flaxBinding404,
  _InternetAddress_type,
);
const _flaxBinding406 = FlaxGetter(
  "address",
  _flaxBinding0,
  _InternetAddress_address,
);
const _flaxBinding407 = FlaxGetter(
  "host",
  _flaxBinding0,
  _InternetAddress_host,
);
const _flaxBinding408 = FlaxGetter(
  "rawAddress",
  _flaxBinding14,
  _InternetAddress_rawAddress,
);
const _flaxBinding409 = FlaxGetter(
  "isLoopback",
  _flaxBinding20,
  _InternetAddress_isLoopback,
);
const _flaxBinding410 = FlaxGetter(
  "isLinkLocal",
  _flaxBinding20,
  _InternetAddress_isLinkLocal,
);
const _flaxBinding411 = FlaxGetter(
  "isMulticast",
  _flaxBinding20,
  _InternetAddress_isMulticast,
);
const _flaxBinding412 = FlaxTypeRef(
  "future",
  item: _flaxBinding366,
  future: FlaxFutureBinding(
    "object:flax.core/sdk_dependencies#type:InternetAddress",
    _future19Adapt,
  ),
);
const _flaxBinding413 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding412,
  _InternetAddress_reverse,
);
const _flaxBinding414 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:InternetAddressType",
  nullable: true,
);
const _flaxBinding415 = <FlaxParameter>[
  FlaxParameter("address", _flaxBinding0, required: true),
  FlaxParameter("type", _flaxBinding414, required: false),
];
const _flaxBinding416 = <FlaxParameter>[
  FlaxParameter("rawAddress", _flaxBinding14, required: true),
  FlaxParameter("type", _flaxBinding414, required: false),
];
const _flaxBinding417 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:InternetAddress",
  [
    _flaxBinding405,
    _flaxBinding406,
    _flaxBinding407,
    _flaxBinding408,
    _flaxBinding409,
    _flaxBinding410,
    _flaxBinding411,
  ],
  {"reverse": _flaxBinding413},
  constructors: {"": _flaxBinding415, "fromRawAddress": _flaxBinding416},
  create: _createInternetAddress,
  matches: _isInternetAddress,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding418 = FlaxGetter(
  "name",
  _flaxBinding0,
  _InternetAddressType_name,
);
const _flaxBinding419 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding0,
  _InternetAddressType_toString,
);
const _flaxBinding420 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:InternetAddressType",
  [_flaxBinding418],
  {"toString": _flaxBinding419},
  constructors: {},
  create: _createInternetAddressType,
  matches: _isInternetAddressType,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding421 = FlaxInstanceMethod(
  _flaxBinding15,
  _flaxBinding14,
  _Latin1Codec_encode,
);
const _flaxBinding422 = FlaxInstanceMethod(
  _flaxBinding18,
  _flaxBinding0,
  _Latin1Codec_decode,
);
const _flaxBinding423 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:Latin1Codec",
  [],
  {"encode": _flaxBinding421, "decode": _flaxBinding422},
  constructors: {"": _flaxBinding21},
  create: _createLatin1Codec,
  matches: _isLatin1Codec,
  setters: [],
  supertypes: [
    "flax.core/sdk_dependencies#type:Encoding",
    "dart:convert::Codec",
    "dart:core::Object",
  ],
  parent: _flaxBinding13,
);
const _flaxBinding424 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:Link",
);
const _flaxBinding425 = FlaxGetter("absolute", _flaxBinding424, _Link_absolute);
const _flaxBinding426 = FlaxTypeRef(
  "future",
  item: _flaxBinding424,
  future: FlaxFutureBinding(
    "object:flax.core/sdk_dependencies#type:Link",
    _future20Adapt,
  ),
);
const _flaxBinding427 = FlaxInstanceMethod(
  _flaxBinding59,
  _flaxBinding426,
  _Link_rename,
);
const _flaxBinding428 = FlaxInstanceMethod(
  _flaxBinding59,
  _flaxBinding424,
  _Link_renameSync,
);
const _flaxBinding429 = <FlaxParameter>[
  FlaxParameter("target", _flaxBinding0, required: true),
  FlaxParameter(
    "recursive",
    _flaxBinding20,
    required: false,
    defaultValue: false,
  ),
];
const _flaxBinding430 = FlaxInstanceMethod(
  _flaxBinding429,
  _flaxBinding426,
  _Link_create,
);
const _flaxBinding431 = FlaxInstanceMethod(
  _flaxBinding429,
  _flaxBinding70,
  _Link_createSync,
);
const _flaxBinding432 = <FlaxParameter>[
  FlaxParameter("target", _flaxBinding0, required: true),
];
const _flaxBinding433 = FlaxInstanceMethod(
  _flaxBinding432,
  _flaxBinding70,
  _Link_updateSync,
);
const _flaxBinding434 = FlaxInstanceMethod(
  _flaxBinding432,
  _flaxBinding426,
  _Link_update,
);
const _flaxBinding435 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding6,
  _Link_target,
);
const _flaxBinding436 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding0,
  _Link_targetSync,
);
const _flaxBinding437 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:Link",
  [_flaxBinding425],
  {
    "rename": _flaxBinding427,
    "renameSync": _flaxBinding428,
    "create": _flaxBinding430,
    "createSync": _flaxBinding431,
    "updateSync": _flaxBinding433,
    "update": _flaxBinding434,
    "target": _flaxBinding435,
    "targetSync": _flaxBinding436,
  },
  constructors: {
    "": _flaxBinding89,
    "fromRawPath": _flaxBinding145,
    "fromUri": _flaxBinding91,
  },
  create: _createLink,
  matches: _isLink,
  setters: [],
  supertypes: [
    "dart:core::Object",
    "flax.core/sdk_dependencies#type:FileSystemEntity",
  ],
  parent: _flaxBinding72,
);
const _flaxBinding438 = FlaxTypeRef("Float64List");
const _flaxBinding439 = FlaxGetter(
  "storage",
  _flaxBinding438,
  _Matrix2_storage,
);
const _flaxBinding440 = FlaxGetter(
  "dimension",
  _flaxBinding2,
  _Matrix2_dimension,
);
const _flaxBinding441 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:Vector2",
);
const _flaxBinding442 = FlaxGetter("row0", _flaxBinding441, _Matrix2_row0);
const _flaxBinding443 = FlaxGetter("row1", _flaxBinding441, _Matrix2_row1);
const _flaxBinding444 = FlaxSetter("row0", _flaxBinding441, _Matrix2_set_row0);
const _flaxBinding445 = FlaxSetter("row1", _flaxBinding441, _Matrix2_set_row1);
const _flaxBinding446 = <FlaxParameter>[
  FlaxParameter("row", _flaxBinding2, required: true),
  FlaxParameter("col", _flaxBinding2, required: true),
];
const _flaxBinding447 = FlaxInstanceMethod(
  _flaxBinding446,
  _flaxBinding2,
  _Matrix2_index,
);
const _flaxBinding448 = FlaxTypeRef("double");
const _flaxBinding449 = FlaxInstanceMethod(
  _flaxBinding446,
  _flaxBinding448,
  _Matrix2_entry,
);
const _flaxBinding450 = <FlaxParameter>[
  FlaxParameter("row", _flaxBinding2, required: true),
  FlaxParameter("col", _flaxBinding2, required: true),
  FlaxParameter("v", _flaxBinding448, required: true),
];
const _flaxBinding451 = FlaxInstanceMethod(
  _flaxBinding450,
  _flaxBinding70,
  _Matrix2_setEntry,
);
const _flaxBinding452 = <FlaxParameter>[
  FlaxParameter("arg0", _flaxBinding448, required: true),
  FlaxParameter("arg1", _flaxBinding448, required: true),
  FlaxParameter("arg2", _flaxBinding448, required: true),
  FlaxParameter("arg3", _flaxBinding448, required: true),
];
const _flaxBinding453 = FlaxInstanceMethod(
  _flaxBinding452,
  _flaxBinding70,
  _Matrix2_setValues,
);
const _flaxBinding454 = <FlaxParameter>[
  FlaxParameter("arg0", _flaxBinding441, required: true),
  FlaxParameter("arg1", _flaxBinding441, required: true),
];
const _flaxBinding455 = FlaxInstanceMethod(
  _flaxBinding454,
  _flaxBinding70,
  _Matrix2_setColumns,
);
const _flaxBinding456 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:Matrix2",
);
const _flaxBinding457 = <FlaxParameter>[
  FlaxParameter("arg", _flaxBinding456, required: true),
];
const _flaxBinding458 = FlaxInstanceMethod(
  _flaxBinding457,
  _flaxBinding70,
  _Matrix2_setFrom,
);
const _flaxBinding459 = <FlaxParameter>[
  FlaxParameter("u", _flaxBinding441, required: true),
  FlaxParameter("v", _flaxBinding441, required: true),
];
const _flaxBinding460 = FlaxInstanceMethod(
  _flaxBinding459,
  _flaxBinding70,
  _Matrix2_setOuter,
);
const _flaxBinding461 = <FlaxParameter>[
  FlaxParameter("arg", _flaxBinding448, required: true),
];
const _flaxBinding462 = FlaxInstanceMethod(
  _flaxBinding461,
  _flaxBinding70,
  _Matrix2_splatDiagonal,
);
const _flaxBinding463 = <FlaxParameter>[
  FlaxParameter("arg", _flaxBinding441, required: true),
];
const _flaxBinding464 = FlaxInstanceMethod(
  _flaxBinding463,
  _flaxBinding70,
  _Matrix2_setDiagonal,
);
const _flaxBinding465 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding0,
  _Matrix2_toString,
);
const _flaxBinding466 = <FlaxParameter>[
  FlaxParameter("row", _flaxBinding2, required: true),
  FlaxParameter("arg", _flaxBinding441, required: true),
];
const _flaxBinding467 = FlaxInstanceMethod(
  _flaxBinding466,
  _flaxBinding70,
  _Matrix2_setRow,
);
const _flaxBinding468 = <FlaxParameter>[
  FlaxParameter("row", _flaxBinding2, required: true),
];
const _flaxBinding469 = FlaxInstanceMethod(
  _flaxBinding468,
  _flaxBinding441,
  _Matrix2_getRow,
);
const _flaxBinding470 = <FlaxParameter>[
  FlaxParameter("column", _flaxBinding2, required: true),
  FlaxParameter("arg", _flaxBinding441, required: true),
];
const _flaxBinding471 = FlaxInstanceMethod(
  _flaxBinding470,
  _flaxBinding70,
  _Matrix2_setColumn,
);
const _flaxBinding472 = <FlaxParameter>[
  FlaxParameter("column", _flaxBinding2, required: true),
];
const _flaxBinding473 = FlaxInstanceMethod(
  _flaxBinding472,
  _flaxBinding441,
  _Matrix2_getColumn,
);
const _flaxBinding474 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding456,
  _Matrix2_clone,
);
const _flaxBinding475 = FlaxInstanceMethod(
  _flaxBinding457,
  _flaxBinding456,
  _Matrix2_copyInto,
);
const _flaxBinding476 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding70,
  _Matrix2_setZero,
);
const _flaxBinding477 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding70,
  _Matrix2_setIdentity,
);
const _flaxBinding478 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding456,
  _Matrix2_transposed,
);
const _flaxBinding479 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding70,
  _Matrix2_transpose,
);
const _flaxBinding480 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding456,
  _Matrix2_absolute,
);
const _flaxBinding481 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding448,
  _Matrix2_determinant,
);
const _flaxBinding482 = <FlaxParameter>[
  FlaxParameter("i", _flaxBinding2, required: true),
  FlaxParameter("v", _flaxBinding441, required: true),
];
const _flaxBinding483 = FlaxInstanceMethod(
  _flaxBinding482,
  _flaxBinding448,
  _Matrix2_dotRow,
);
const _flaxBinding484 = <FlaxParameter>[
  FlaxParameter("j", _flaxBinding2, required: true),
  FlaxParameter("v", _flaxBinding441, required: true),
];
const _flaxBinding485 = FlaxInstanceMethod(
  _flaxBinding484,
  _flaxBinding448,
  _Matrix2_dotColumn,
);
const _flaxBinding486 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding448,
  _Matrix2_trace,
);
const _flaxBinding487 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding448,
  _Matrix2_infinityNorm,
);
const _flaxBinding488 = <FlaxParameter>[
  FlaxParameter("correct", _flaxBinding456, required: true),
];
const _flaxBinding489 = FlaxInstanceMethod(
  _flaxBinding488,
  _flaxBinding448,
  _Matrix2_relativeError,
);
const _flaxBinding490 = FlaxInstanceMethod(
  _flaxBinding488,
  _flaxBinding448,
  _Matrix2_absoluteError,
);
const _flaxBinding491 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding448,
  _Matrix2_invert,
);
const _flaxBinding492 = FlaxInstanceMethod(
  _flaxBinding457,
  _flaxBinding448,
  _Matrix2_copyInverse,
);
const _flaxBinding493 = <FlaxParameter>[
  FlaxParameter("radians", _flaxBinding448, required: true),
];
const _flaxBinding494 = FlaxInstanceMethod(
  _flaxBinding493,
  _flaxBinding70,
  _Matrix2_setRotation,
);
const _flaxBinding495 = <FlaxParameter>[
  FlaxParameter("scale", _flaxBinding448, required: true),
];
const _flaxBinding496 = FlaxInstanceMethod(
  _flaxBinding495,
  _flaxBinding70,
  _Matrix2_scaleAdjoint,
);
const _flaxBinding497 = FlaxInstanceMethod(
  _flaxBinding495,
  _flaxBinding70,
  _Matrix2_scale,
);
const _flaxBinding498 = FlaxInstanceMethod(
  _flaxBinding495,
  _flaxBinding456,
  _Matrix2_scaled,
);
const _flaxBinding499 = <FlaxParameter>[
  FlaxParameter("o", _flaxBinding456, required: true),
];
const _flaxBinding500 = FlaxInstanceMethod(
  _flaxBinding499,
  _flaxBinding70,
  _Matrix2_add,
);
const _flaxBinding501 = FlaxInstanceMethod(
  _flaxBinding499,
  _flaxBinding70,
  _Matrix2_sub,
);
const _flaxBinding502 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding70,
  _Matrix2_negate,
);
const _flaxBinding503 = FlaxInstanceMethod(
  _flaxBinding457,
  _flaxBinding70,
  _Matrix2_multiply,
);
const _flaxBinding504 = FlaxInstanceMethod(
  _flaxBinding457,
  _flaxBinding456,
  _Matrix2_multiplied,
);
const _flaxBinding505 = FlaxInstanceMethod(
  _flaxBinding457,
  _flaxBinding70,
  _Matrix2_transposeMultiply,
);
const _flaxBinding506 = FlaxInstanceMethod(
  _flaxBinding457,
  _flaxBinding70,
  _Matrix2_multiplyTranspose,
);
const _flaxBinding507 = FlaxInstanceMethod(
  _flaxBinding463,
  _flaxBinding441,
  _Matrix2_transform,
);
const _flaxBinding508 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:Vector2",
  nullable: true,
);
const _flaxBinding509 = <FlaxParameter>[
  FlaxParameter("arg", _flaxBinding441, required: true),
  FlaxParameter("out", _flaxBinding508, required: false),
];
const _flaxBinding510 = FlaxInstanceMethod(
  _flaxBinding509,
  _flaxBinding441,
  _Matrix2_transformed,
);
const _flaxBinding511 = FlaxTypeRef("num");
const _flaxBinding512 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding511,
  collection: FlaxCollectionBinding(
    "iterable:[num:]",
    _collection15Create,
    _collection15Matches,
    restore: _collection15Restore,
  ),
);
const _flaxBinding513 = FlaxTypeRef(
  "list",
  item: _flaxBinding511,
  collection: FlaxCollectionBinding(
    "list:[num:]",
    _collection14Create,
    _collection14Matches,
  ),
  iterable: _flaxBinding512,
);
const _flaxBinding514 = <FlaxParameter>[
  FlaxParameter("array", _flaxBinding513, required: true),
  FlaxParameter("offset", _flaxBinding2, required: false, defaultValue: 0),
];
const _flaxBinding515 = FlaxInstanceMethod(
  _flaxBinding514,
  _flaxBinding70,
  _Matrix2_copyIntoArray,
);
const _flaxBinding516 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding448,
  collection: FlaxCollectionBinding(
    "iterable:[double:]",
    _collection17Create,
    _collection17Matches,
    restore: _collection17Restore,
  ),
);
const _flaxBinding517 = FlaxTypeRef(
  "list",
  item: _flaxBinding448,
  collection: FlaxCollectionBinding(
    "list:[double:]",
    _collection16Create,
    _collection16Matches,
  ),
  iterable: _flaxBinding516,
);
const _flaxBinding518 = <FlaxParameter>[
  FlaxParameter("array", _flaxBinding517, required: true),
  FlaxParameter("offset", _flaxBinding2, required: false, defaultValue: 0),
];
const _flaxBinding519 = FlaxInstanceMethod(
  _flaxBinding518,
  _flaxBinding70,
  _Matrix2_copyFromArray,
);
const _flaxBinding520 = <FlaxParameter>[
  FlaxParameter("i", _flaxBinding2, required: true),
];
const _flaxBinding521 = FlaxInstanceMethod(
  _flaxBinding520,
  _flaxBinding448,
  _Matrix2_operatorGetIndex,
);
const _flaxBinding522 = <FlaxParameter>[
  FlaxParameter("i", _flaxBinding2, required: true),
  FlaxParameter("v", _flaxBinding448, required: true),
];
const _flaxBinding523 = FlaxInstanceMethod(
  _flaxBinding522,
  _flaxBinding70,
  _Matrix2_operatorSetIndex,
);
const _flaxBinding524 = FlaxInstanceMethod(
  _flaxBinding457,
  _flaxBinding456,
  _Matrix2_operatorAdd,
);
const _flaxBinding525 = FlaxInstanceMethod(
  _flaxBinding457,
  _flaxBinding456,
  _Matrix2_operatorSubtract,
);
const _flaxBinding526 = <FlaxParameter>[
  FlaxParameter("arg", _flaxBinding110, required: true),
];
const _flaxBinding527 = FlaxInstanceMethod(
  _flaxBinding526,
  _flaxBinding110,
  _Matrix2_operatorMultiply,
);
const _flaxBinding528 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding456,
  _Matrix2_operatorNegate,
);
const _flaxBinding529 = <FlaxParameter>[
  FlaxParameter("values", _flaxBinding517, required: true),
];
const _flaxBinding530 = <FlaxParameter>[
  FlaxParameter("other", _flaxBinding456, required: true),
];
const _flaxBinding531 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:Matrix2",
  [_flaxBinding439, _flaxBinding440, _flaxBinding442, _flaxBinding443],
  {
    "index": _flaxBinding447,
    "entry": _flaxBinding449,
    "setEntry": _flaxBinding451,
    "setValues": _flaxBinding453,
    "setColumns": _flaxBinding455,
    "setFrom": _flaxBinding458,
    "setOuter": _flaxBinding460,
    "splatDiagonal": _flaxBinding462,
    "setDiagonal": _flaxBinding464,
    "toString": _flaxBinding465,
    "setRow": _flaxBinding467,
    "getRow": _flaxBinding469,
    "setColumn": _flaxBinding471,
    "getColumn": _flaxBinding473,
    "clone": _flaxBinding474,
    "copyInto": _flaxBinding475,
    "setZero": _flaxBinding476,
    "setIdentity": _flaxBinding477,
    "transposed": _flaxBinding478,
    "transpose": _flaxBinding479,
    "absolute": _flaxBinding480,
    "determinant": _flaxBinding481,
    "dotRow": _flaxBinding483,
    "dotColumn": _flaxBinding485,
    "trace": _flaxBinding486,
    "infinityNorm": _flaxBinding487,
    "relativeError": _flaxBinding489,
    "absoluteError": _flaxBinding490,
    "invert": _flaxBinding491,
    "copyInverse": _flaxBinding492,
    "setRotation": _flaxBinding494,
    "scaleAdjoint": _flaxBinding496,
    "scale": _flaxBinding497,
    "scaled": _flaxBinding498,
    "add": _flaxBinding500,
    "sub": _flaxBinding501,
    "negate": _flaxBinding502,
    "multiply": _flaxBinding503,
    "multiplied": _flaxBinding504,
    "transposeMultiply": _flaxBinding505,
    "multiplyTranspose": _flaxBinding506,
    "transform": _flaxBinding507,
    "transformed": _flaxBinding510,
    "copyIntoArray": _flaxBinding515,
    "copyFromArray": _flaxBinding519,
    "operatorGetIndex": _flaxBinding521,
    "operatorSetIndex": _flaxBinding523,
    "operatorAdd": _flaxBinding524,
    "operatorSubtract": _flaxBinding525,
    "operatorMultiply": _flaxBinding527,
    "operatorNegate": _flaxBinding528,
  },
  constructors: {
    "": _flaxBinding452,
    "fromList": _flaxBinding529,
    "zero": _flaxBinding42,
    "identity": _flaxBinding42,
    "copy": _flaxBinding530,
    "columns": _flaxBinding454,
    "outer": _flaxBinding459,
    "rotation": _flaxBinding493,
  },
  create: _createMatrix2,
  matches: _isMatrix2,
  setters: [_flaxBinding444, _flaxBinding445],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding532 = FlaxGetter(
  "storage",
  _flaxBinding438,
  _Matrix3_storage,
);
const _flaxBinding533 = FlaxGetter(
  "dimension",
  _flaxBinding2,
  _Matrix3_dimension,
);
const _flaxBinding534 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:Vector3",
);
const _flaxBinding535 = FlaxGetter("row0", _flaxBinding534, _Matrix3_row0);
const _flaxBinding536 = FlaxGetter("row1", _flaxBinding534, _Matrix3_row1);
const _flaxBinding537 = FlaxGetter("row2", _flaxBinding534, _Matrix3_row2);
const _flaxBinding538 = FlaxGetter("right", _flaxBinding534, _Matrix3_right);
const _flaxBinding539 = FlaxGetter("up", _flaxBinding534, _Matrix3_up);
const _flaxBinding540 = FlaxGetter(
  "forward",
  _flaxBinding534,
  _Matrix3_forward,
);
const _flaxBinding541 = FlaxSetter("row0", _flaxBinding534, _Matrix3_set_row0);
const _flaxBinding542 = FlaxSetter("row1", _flaxBinding534, _Matrix3_set_row1);
const _flaxBinding543 = FlaxSetter("row2", _flaxBinding534, _Matrix3_set_row2);
const _flaxBinding544 = FlaxInstanceMethod(
  _flaxBinding446,
  _flaxBinding2,
  _Matrix3_index,
);
const _flaxBinding545 = FlaxInstanceMethod(
  _flaxBinding446,
  _flaxBinding448,
  _Matrix3_entry,
);
const _flaxBinding546 = FlaxInstanceMethod(
  _flaxBinding450,
  _flaxBinding70,
  _Matrix3_setEntry,
);
const _flaxBinding547 = <FlaxParameter>[
  FlaxParameter("arg0", _flaxBinding448, required: true),
  FlaxParameter("arg1", _flaxBinding448, required: true),
  FlaxParameter("arg2", _flaxBinding448, required: true),
  FlaxParameter("arg3", _flaxBinding448, required: true),
  FlaxParameter("arg4", _flaxBinding448, required: true),
  FlaxParameter("arg5", _flaxBinding448, required: true),
  FlaxParameter("arg6", _flaxBinding448, required: true),
  FlaxParameter("arg7", _flaxBinding448, required: true),
  FlaxParameter("arg8", _flaxBinding448, required: true),
];
const _flaxBinding548 = FlaxInstanceMethod(
  _flaxBinding547,
  _flaxBinding70,
  _Matrix3_setValues,
);
const _flaxBinding549 = <FlaxParameter>[
  FlaxParameter("arg0", _flaxBinding534, required: true),
  FlaxParameter("arg1", _flaxBinding534, required: true),
  FlaxParameter("arg2", _flaxBinding534, required: true),
];
const _flaxBinding550 = FlaxInstanceMethod(
  _flaxBinding549,
  _flaxBinding70,
  _Matrix3_setColumns,
);
const _flaxBinding551 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:Matrix3",
);
const _flaxBinding552 = <FlaxParameter>[
  FlaxParameter("arg", _flaxBinding551, required: true),
];
const _flaxBinding553 = FlaxInstanceMethod(
  _flaxBinding552,
  _flaxBinding70,
  _Matrix3_setFrom,
);
const _flaxBinding554 = <FlaxParameter>[
  FlaxParameter("u", _flaxBinding534, required: true),
  FlaxParameter("v", _flaxBinding534, required: true),
];
const _flaxBinding555 = FlaxInstanceMethod(
  _flaxBinding554,
  _flaxBinding70,
  _Matrix3_setOuter,
);
const _flaxBinding556 = FlaxInstanceMethod(
  _flaxBinding461,
  _flaxBinding70,
  _Matrix3_splatDiagonal,
);
const _flaxBinding557 = <FlaxParameter>[
  FlaxParameter("arg", _flaxBinding534, required: true),
];
const _flaxBinding558 = FlaxInstanceMethod(
  _flaxBinding557,
  _flaxBinding70,
  _Matrix3_setDiagonal,
);
const _flaxBinding559 = FlaxInstanceMethod(
  _flaxBinding457,
  _flaxBinding70,
  _Matrix3_setUpper2x2,
);
const _flaxBinding560 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding0,
  _Matrix3_toString,
);
const _flaxBinding561 = <FlaxParameter>[
  FlaxParameter("row", _flaxBinding2, required: true),
  FlaxParameter("arg", _flaxBinding534, required: true),
];
const _flaxBinding562 = FlaxInstanceMethod(
  _flaxBinding561,
  _flaxBinding70,
  _Matrix3_setRow,
);
const _flaxBinding563 = FlaxInstanceMethod(
  _flaxBinding468,
  _flaxBinding534,
  _Matrix3_getRow,
);
const _flaxBinding564 = <FlaxParameter>[
  FlaxParameter("column", _flaxBinding2, required: true),
  FlaxParameter("arg", _flaxBinding534, required: true),
];
const _flaxBinding565 = FlaxInstanceMethod(
  _flaxBinding564,
  _flaxBinding70,
  _Matrix3_setColumn,
);
const _flaxBinding566 = FlaxInstanceMethod(
  _flaxBinding472,
  _flaxBinding534,
  _Matrix3_getColumn,
);
const _flaxBinding567 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding551,
  _Matrix3_clone,
);
const _flaxBinding568 = FlaxInstanceMethod(
  _flaxBinding552,
  _flaxBinding551,
  _Matrix3_copyInto,
);
const _flaxBinding569 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding70,
  _Matrix3_setZero,
);
const _flaxBinding570 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding70,
  _Matrix3_setIdentity,
);
const _flaxBinding571 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding551,
  _Matrix3_transposed,
);
const _flaxBinding572 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding70,
  _Matrix3_transpose,
);
const _flaxBinding573 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding551,
  _Matrix3_absolute,
);
const _flaxBinding574 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding448,
  _Matrix3_determinant,
);
const _flaxBinding575 = <FlaxParameter>[
  FlaxParameter("i", _flaxBinding2, required: true),
  FlaxParameter("v", _flaxBinding534, required: true),
];
const _flaxBinding576 = FlaxInstanceMethod(
  _flaxBinding575,
  _flaxBinding448,
  _Matrix3_dotRow,
);
const _flaxBinding577 = <FlaxParameter>[
  FlaxParameter("j", _flaxBinding2, required: true),
  FlaxParameter("v", _flaxBinding534, required: true),
];
const _flaxBinding578 = FlaxInstanceMethod(
  _flaxBinding577,
  _flaxBinding448,
  _Matrix3_dotColumn,
);
const _flaxBinding579 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding448,
  _Matrix3_trace,
);
const _flaxBinding580 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding448,
  _Matrix3_infinityNorm,
);
const _flaxBinding581 = <FlaxParameter>[
  FlaxParameter("correct", _flaxBinding551, required: true),
];
const _flaxBinding582 = FlaxInstanceMethod(
  _flaxBinding581,
  _flaxBinding448,
  _Matrix3_relativeError,
);
const _flaxBinding583 = FlaxInstanceMethod(
  _flaxBinding581,
  _flaxBinding448,
  _Matrix3_absoluteError,
);
const _flaxBinding584 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding448,
  _Matrix3_invert,
);
const _flaxBinding585 = FlaxInstanceMethod(
  _flaxBinding552,
  _flaxBinding448,
  _Matrix3_copyInverse,
);
const _flaxBinding586 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_rendering#type:Matrix4",
);
const _flaxBinding587 = <FlaxParameter>[
  FlaxParameter("arg", _flaxBinding586, required: true),
];
const _flaxBinding588 = FlaxInstanceMethod(
  _flaxBinding587,
  _flaxBinding70,
  _Matrix3_copyNormalMatrix,
);
const _flaxBinding589 = FlaxInstanceMethod(
  _flaxBinding493,
  _flaxBinding70,
  _Matrix3_setRotationX,
);
const _flaxBinding590 = FlaxInstanceMethod(
  _flaxBinding493,
  _flaxBinding70,
  _Matrix3_setRotationY,
);
const _flaxBinding591 = FlaxInstanceMethod(
  _flaxBinding493,
  _flaxBinding70,
  _Matrix3_setRotationZ,
);
const _flaxBinding592 = FlaxInstanceMethod(
  _flaxBinding495,
  _flaxBinding70,
  _Matrix3_scaleAdjoint,
);
const _flaxBinding593 = FlaxInstanceMethod(
  _flaxBinding557,
  _flaxBinding534,
  _Matrix3_absoluteRotate,
);
const _flaxBinding594 = FlaxInstanceMethod(
  _flaxBinding463,
  _flaxBinding441,
  _Matrix3_absoluteRotate2,
);
const _flaxBinding595 = FlaxInstanceMethod(
  _flaxBinding463,
  _flaxBinding441,
  _Matrix3_transform2,
);
const _flaxBinding596 = FlaxInstanceMethod(
  _flaxBinding495,
  _flaxBinding70,
  _Matrix3_scale,
);
const _flaxBinding597 = FlaxInstanceMethod(
  _flaxBinding495,
  _flaxBinding551,
  _Matrix3_scaled,
);
const _flaxBinding598 = <FlaxParameter>[
  FlaxParameter("o", _flaxBinding551, required: true),
];
const _flaxBinding599 = FlaxInstanceMethod(
  _flaxBinding598,
  _flaxBinding70,
  _Matrix3_add,
);
const _flaxBinding600 = FlaxInstanceMethod(
  _flaxBinding598,
  _flaxBinding70,
  _Matrix3_sub,
);
const _flaxBinding601 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding70,
  _Matrix3_negate,
);
const _flaxBinding602 = FlaxInstanceMethod(
  _flaxBinding552,
  _flaxBinding70,
  _Matrix3_multiply,
);
const _flaxBinding603 = FlaxInstanceMethod(
  _flaxBinding552,
  _flaxBinding551,
  _Matrix3_multiplied,
);
const _flaxBinding604 = FlaxInstanceMethod(
  _flaxBinding552,
  _flaxBinding70,
  _Matrix3_transposeMultiply,
);
const _flaxBinding605 = FlaxInstanceMethod(
  _flaxBinding552,
  _flaxBinding70,
  _Matrix3_multiplyTranspose,
);
const _flaxBinding606 = FlaxInstanceMethod(
  _flaxBinding557,
  _flaxBinding534,
  _Matrix3_transform,
);
const _flaxBinding607 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:Vector3",
  nullable: true,
);
const _flaxBinding608 = <FlaxParameter>[
  FlaxParameter("arg", _flaxBinding534, required: true),
  FlaxParameter("out", _flaxBinding607, required: false),
];
const _flaxBinding609 = FlaxInstanceMethod(
  _flaxBinding608,
  _flaxBinding534,
  _Matrix3_transformed,
);
const _flaxBinding610 = FlaxInstanceMethod(
  _flaxBinding514,
  _flaxBinding70,
  _Matrix3_copyIntoArray,
);
const _flaxBinding611 = FlaxInstanceMethod(
  _flaxBinding518,
  _flaxBinding70,
  _Matrix3_copyFromArray,
);
const _flaxBinding612 = FlaxInstanceMethod(
  _flaxBinding518,
  _flaxBinding517,
  _Matrix3_applyToVector3Array,
);
const _flaxBinding613 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding20,
  _Matrix3_isIdentity,
);
const _flaxBinding614 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding20,
  _Matrix3_isZero,
);
const _flaxBinding615 = FlaxInstanceMethod(
  _flaxBinding520,
  _flaxBinding448,
  _Matrix3_operatorGetIndex,
);
const _flaxBinding616 = FlaxInstanceMethod(
  _flaxBinding522,
  _flaxBinding70,
  _Matrix3_operatorSetIndex,
);
const _flaxBinding617 = FlaxInstanceMethod(
  _flaxBinding552,
  _flaxBinding551,
  _Matrix3_operatorAdd,
);
const _flaxBinding618 = FlaxInstanceMethod(
  _flaxBinding552,
  _flaxBinding551,
  _Matrix3_operatorSubtract,
);
const _flaxBinding619 = FlaxInstanceMethod(
  _flaxBinding526,
  _flaxBinding110,
  _Matrix3_operatorMultiply,
);
const _flaxBinding620 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding551,
  _Matrix3_operatorNegate,
);
const _flaxBinding621 = <FlaxParameter>[
  FlaxParameter("other", _flaxBinding551, required: true),
];
const _flaxBinding622 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:Matrix3",
  [
    _flaxBinding532,
    _flaxBinding533,
    _flaxBinding535,
    _flaxBinding536,
    _flaxBinding537,
    _flaxBinding538,
    _flaxBinding539,
    _flaxBinding540,
  ],
  {
    "index": _flaxBinding544,
    "entry": _flaxBinding545,
    "setEntry": _flaxBinding546,
    "setValues": _flaxBinding548,
    "setColumns": _flaxBinding550,
    "setFrom": _flaxBinding553,
    "setOuter": _flaxBinding555,
    "splatDiagonal": _flaxBinding556,
    "setDiagonal": _flaxBinding558,
    "setUpper2x2": _flaxBinding559,
    "toString": _flaxBinding560,
    "setRow": _flaxBinding562,
    "getRow": _flaxBinding563,
    "setColumn": _flaxBinding565,
    "getColumn": _flaxBinding566,
    "clone": _flaxBinding567,
    "copyInto": _flaxBinding568,
    "setZero": _flaxBinding569,
    "setIdentity": _flaxBinding570,
    "transposed": _flaxBinding571,
    "transpose": _flaxBinding572,
    "absolute": _flaxBinding573,
    "determinant": _flaxBinding574,
    "dotRow": _flaxBinding576,
    "dotColumn": _flaxBinding578,
    "trace": _flaxBinding579,
    "infinityNorm": _flaxBinding580,
    "relativeError": _flaxBinding582,
    "absoluteError": _flaxBinding583,
    "invert": _flaxBinding584,
    "copyInverse": _flaxBinding585,
    "copyNormalMatrix": _flaxBinding588,
    "setRotationX": _flaxBinding589,
    "setRotationY": _flaxBinding590,
    "setRotationZ": _flaxBinding591,
    "scaleAdjoint": _flaxBinding592,
    "absoluteRotate": _flaxBinding593,
    "absoluteRotate2": _flaxBinding594,
    "transform2": _flaxBinding595,
    "scale": _flaxBinding596,
    "scaled": _flaxBinding597,
    "add": _flaxBinding599,
    "sub": _flaxBinding600,
    "negate": _flaxBinding601,
    "multiply": _flaxBinding602,
    "multiplied": _flaxBinding603,
    "transposeMultiply": _flaxBinding604,
    "multiplyTranspose": _flaxBinding605,
    "transform": _flaxBinding606,
    "transformed": _flaxBinding609,
    "copyIntoArray": _flaxBinding610,
    "copyFromArray": _flaxBinding611,
    "applyToVector3Array": _flaxBinding612,
    "isIdentity": _flaxBinding613,
    "isZero": _flaxBinding614,
    "operatorGetIndex": _flaxBinding615,
    "operatorSetIndex": _flaxBinding616,
    "operatorAdd": _flaxBinding617,
    "operatorSubtract": _flaxBinding618,
    "operatorMultiply": _flaxBinding619,
    "operatorNegate": _flaxBinding620,
  },
  constructors: {
    "": _flaxBinding547,
    "fromList": _flaxBinding529,
    "zero": _flaxBinding42,
    "identity": _flaxBinding42,
    "copy": _flaxBinding621,
    "columns": _flaxBinding549,
    "outer": _flaxBinding554,
    "rotationX": _flaxBinding493,
    "rotationY": _flaxBinding493,
    "rotationZ": _flaxBinding493,
  },
  create: _createMatrix3,
  matches: _isMatrix3,
  setters: [_flaxBinding541, _flaxBinding542, _flaxBinding543],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding623 = FlaxGetter("point0", _flaxBinding534, _Quad_point0);
const _flaxBinding624 = FlaxGetter("point1", _flaxBinding534, _Quad_point1);
const _flaxBinding625 = FlaxGetter("point2", _flaxBinding534, _Quad_point2);
const _flaxBinding626 = FlaxGetter("point3", _flaxBinding534, _Quad_point3);
const _flaxBinding627 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:Quad",
);
const _flaxBinding628 = <FlaxParameter>[
  FlaxParameter("other", _flaxBinding627, required: true),
];
const _flaxBinding629 = FlaxInstanceMethod(
  _flaxBinding628,
  _flaxBinding70,
  _Quad_copyFrom,
);
const _flaxBinding630 = <FlaxParameter>[
  FlaxParameter("normal", _flaxBinding534, required: true),
];
const _flaxBinding631 = FlaxInstanceMethod(
  _flaxBinding630,
  _flaxBinding70,
  _Quad_copyNormalInto,
);
const _flaxBinding632 = <FlaxParameter>[
  FlaxParameter("t", _flaxBinding586, required: true),
];
const _flaxBinding633 = FlaxInstanceMethod(
  _flaxBinding632,
  _flaxBinding70,
  _Quad_transform,
);
const _flaxBinding634 = <FlaxParameter>[
  FlaxParameter("offset", _flaxBinding534, required: true),
];
const _flaxBinding635 = FlaxInstanceMethod(
  _flaxBinding634,
  _flaxBinding70,
  _Quad_translate,
);
const _flaxBinding636 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding0,
  _Quad_toString,
);
const _flaxBinding637 = <FlaxParameter>[
  FlaxParameter("point0", _flaxBinding534, required: true),
  FlaxParameter("point1", _flaxBinding534, required: true),
  FlaxParameter("point2", _flaxBinding534, required: true),
  FlaxParameter("point3", _flaxBinding534, required: true),
];
const _flaxBinding638 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:Quad",
  [_flaxBinding623, _flaxBinding624, _flaxBinding625, _flaxBinding626],
  {
    "copyFrom": _flaxBinding629,
    "copyNormalInto": _flaxBinding631,
    "transform": _flaxBinding633,
    "translate": _flaxBinding635,
    "toString": _flaxBinding636,
  },
  constructors: {
    "": _flaxBinding42,
    "copy": _flaxBinding628,
    "points": _flaxBinding637,
  },
  create: _createQuad,
  matches: _isQuad,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding639 = FlaxGetter(
  "storage",
  _flaxBinding438,
  _Quaternion_storage,
);
const _flaxBinding640 = FlaxGetter("x", _flaxBinding448, _Quaternion_x);
const _flaxBinding641 = FlaxGetter("y", _flaxBinding448, _Quaternion_y);
const _flaxBinding642 = FlaxGetter("z", _flaxBinding448, _Quaternion_z);
const _flaxBinding643 = FlaxGetter("w", _flaxBinding448, _Quaternion_w);
const _flaxBinding644 = FlaxGetter(
  "radians",
  _flaxBinding448,
  _Quaternion_radians,
);
const _flaxBinding645 = FlaxGetter("axis", _flaxBinding534, _Quaternion_axis);
const _flaxBinding646 = FlaxGetter(
  "length2",
  _flaxBinding448,
  _Quaternion_length2,
);
const _flaxBinding647 = FlaxGetter(
  "length",
  _flaxBinding448,
  _Quaternion_length,
);
const _flaxBinding648 = FlaxSetter("x", _flaxBinding448, _Quaternion_set_x);
const _flaxBinding649 = FlaxSetter("y", _flaxBinding448, _Quaternion_set_y);
const _flaxBinding650 = FlaxSetter("z", _flaxBinding448, _Quaternion_set_z);
const _flaxBinding651 = FlaxSetter("w", _flaxBinding448, _Quaternion_set_w);
const _flaxBinding652 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:Quaternion",
);
const _flaxBinding653 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding652,
  _Quaternion_clone,
);
const _flaxBinding654 = <FlaxParameter>[
  FlaxParameter("source", _flaxBinding652, required: true),
];
const _flaxBinding655 = FlaxInstanceMethod(
  _flaxBinding654,
  _flaxBinding70,
  _Quaternion_setFrom,
);
const _flaxBinding656 = <FlaxParameter>[
  FlaxParameter("x", _flaxBinding448, required: true),
  FlaxParameter("y", _flaxBinding448, required: true),
  FlaxParameter("z", _flaxBinding448, required: true),
  FlaxParameter("w", _flaxBinding448, required: true),
];
const _flaxBinding657 = FlaxInstanceMethod(
  _flaxBinding656,
  _flaxBinding70,
  _Quaternion_setValues,
);
const _flaxBinding658 = <FlaxParameter>[
  FlaxParameter("axis", _flaxBinding534, required: true),
  FlaxParameter("radians", _flaxBinding448, required: true),
];
const _flaxBinding659 = FlaxInstanceMethod(
  _flaxBinding658,
  _flaxBinding70,
  _Quaternion_setAxisAngle,
);
const _flaxBinding660 = <FlaxParameter>[
  FlaxParameter("rotationMatrix", _flaxBinding551, required: true),
];
const _flaxBinding661 = FlaxInstanceMethod(
  _flaxBinding660,
  _flaxBinding70,
  _Quaternion_setFromRotation,
);
const _flaxBinding662 = <FlaxParameter>[
  FlaxParameter("a", _flaxBinding534, required: true),
  FlaxParameter("b", _flaxBinding534, required: true),
];
const _flaxBinding663 = FlaxInstanceMethod(
  _flaxBinding662,
  _flaxBinding70,
  _Quaternion_setFromTwoVectors,
);
const _flaxBinding664 = <FlaxParameter>[
  FlaxParameter("q", _flaxBinding652, required: true),
  FlaxParameter("omega", _flaxBinding534, required: true),
];
const _flaxBinding665 = FlaxInstanceMethod(
  _flaxBinding664,
  _flaxBinding70,
  _Quaternion_setDQ,
);
const _flaxBinding666 = <FlaxParameter>[
  FlaxParameter("yaw", _flaxBinding448, required: true),
  FlaxParameter("pitch", _flaxBinding448, required: true),
  FlaxParameter("roll", _flaxBinding448, required: true),
];
const _flaxBinding667 = FlaxInstanceMethod(
  _flaxBinding666,
  _flaxBinding70,
  _Quaternion_setEuler,
);
const _flaxBinding668 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding448,
  _Quaternion_normalize,
);
const _flaxBinding669 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding70,
  _Quaternion_negate,
);
const _flaxBinding670 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding70,
  _Quaternion_conjugate,
);
const _flaxBinding671 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding70,
  _Quaternion_inverse,
);
const _flaxBinding672 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding652,
  _Quaternion_normalized,
);
const _flaxBinding673 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding652,
  _Quaternion_negated,
);
const _flaxBinding674 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding652,
  _Quaternion_conjugated,
);
const _flaxBinding675 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding652,
  _Quaternion_inverted,
);
const _flaxBinding676 = <FlaxParameter>[
  FlaxParameter("v", _flaxBinding534, required: true),
];
const _flaxBinding677 = FlaxInstanceMethod(
  _flaxBinding676,
  _flaxBinding534,
  _Quaternion_rotated,
);
const _flaxBinding678 = FlaxInstanceMethod(
  _flaxBinding676,
  _flaxBinding534,
  _Quaternion_rotate,
);
const _flaxBinding679 = <FlaxParameter>[
  FlaxParameter("arg", _flaxBinding652, required: true),
];
const _flaxBinding680 = FlaxInstanceMethod(
  _flaxBinding679,
  _flaxBinding70,
  _Quaternion_add,
);
const _flaxBinding681 = FlaxInstanceMethod(
  _flaxBinding679,
  _flaxBinding70,
  _Quaternion_sub,
);
const _flaxBinding682 = FlaxInstanceMethod(
  _flaxBinding495,
  _flaxBinding70,
  _Quaternion_scale,
);
const _flaxBinding683 = FlaxInstanceMethod(
  _flaxBinding495,
  _flaxBinding652,
  _Quaternion_scaled,
);
const _flaxBinding684 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding551,
  _Quaternion_asRotationMatrix,
);
const _flaxBinding685 = FlaxInstanceMethod(
  _flaxBinding660,
  _flaxBinding551,
  _Quaternion_copyRotationInto,
);
const _flaxBinding686 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding0,
  _Quaternion_toString,
);
const _flaxBinding687 = <FlaxParameter>[
  FlaxParameter("correct", _flaxBinding652, required: true),
];
const _flaxBinding688 = FlaxInstanceMethod(
  _flaxBinding687,
  _flaxBinding448,
  _Quaternion_relativeError,
);
const _flaxBinding689 = FlaxInstanceMethod(
  _flaxBinding687,
  _flaxBinding448,
  _Quaternion_absoluteError,
);
const _flaxBinding690 = FlaxInstanceMethod(
  _flaxBinding520,
  _flaxBinding448,
  _Quaternion_operatorGetIndex,
);
const _flaxBinding691 = <FlaxParameter>[
  FlaxParameter("i", _flaxBinding2, required: true),
  FlaxParameter("arg", _flaxBinding448, required: true),
];
const _flaxBinding692 = FlaxInstanceMethod(
  _flaxBinding691,
  _flaxBinding70,
  _Quaternion_operatorSetIndex,
);
const _flaxBinding693 = <FlaxParameter>[
  FlaxParameter("other", _flaxBinding652, required: true),
];
const _flaxBinding694 = FlaxInstanceMethod(
  _flaxBinding693,
  _flaxBinding652,
  _Quaternion_operatorAdd,
);
const _flaxBinding695 = FlaxInstanceMethod(
  _flaxBinding693,
  _flaxBinding652,
  _Quaternion_operatorSubtract,
);
const _flaxBinding696 = FlaxInstanceMethod(
  _flaxBinding693,
  _flaxBinding652,
  _Quaternion_operatorMultiply,
);
const _flaxBinding697 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding652,
  _Quaternion_operatorNegate,
);
const _flaxBinding698 = <FlaxParameter>[
  FlaxParameter("axis", _flaxBinding534, required: true),
  FlaxParameter("angle", _flaxBinding448, required: true),
];
const _flaxBinding699 = <FlaxParameter>[
  FlaxParameter("original", _flaxBinding652, required: true),
];
const _flaxBinding700 = <FlaxParameter>[
  FlaxParameter("_qStorage", _flaxBinding438, required: true),
];
const _flaxBinding701 = FlaxTypeRef("ByteBuffer");
const _flaxBinding702 = <FlaxParameter>[
  FlaxParameter("buffer", _flaxBinding701, required: true),
  FlaxParameter("offset", _flaxBinding2, required: true),
];
const _flaxBinding703 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:Quaternion",
  [
    _flaxBinding639,
    _flaxBinding640,
    _flaxBinding641,
    _flaxBinding642,
    _flaxBinding643,
    _flaxBinding644,
    _flaxBinding645,
    _flaxBinding646,
    _flaxBinding647,
  ],
  {
    "clone": _flaxBinding653,
    "setFrom": _flaxBinding655,
    "setValues": _flaxBinding657,
    "setAxisAngle": _flaxBinding659,
    "setFromRotation": _flaxBinding661,
    "setFromTwoVectors": _flaxBinding663,
    "setDQ": _flaxBinding665,
    "setEuler": _flaxBinding667,
    "normalize": _flaxBinding668,
    "negate": _flaxBinding669,
    "conjugate": _flaxBinding670,
    "inverse": _flaxBinding671,
    "normalized": _flaxBinding672,
    "negated": _flaxBinding673,
    "conjugated": _flaxBinding674,
    "inverted": _flaxBinding675,
    "rotated": _flaxBinding677,
    "rotate": _flaxBinding678,
    "add": _flaxBinding680,
    "sub": _flaxBinding681,
    "scale": _flaxBinding682,
    "scaled": _flaxBinding683,
    "asRotationMatrix": _flaxBinding684,
    "copyRotationInto": _flaxBinding685,
    "toString": _flaxBinding686,
    "relativeError": _flaxBinding688,
    "absoluteError": _flaxBinding689,
    "operatorGetIndex": _flaxBinding690,
    "operatorSetIndex": _flaxBinding692,
    "operatorAdd": _flaxBinding694,
    "operatorSubtract": _flaxBinding695,
    "operatorMultiply": _flaxBinding696,
    "operatorNegate": _flaxBinding697,
  },
  constructors: {
    "": _flaxBinding656,
    "fromRotation": _flaxBinding660,
    "axisAngle": _flaxBinding698,
    "fromTwoVectors": _flaxBinding662,
    "copy": _flaxBinding699,
    "identity": _flaxBinding42,
    "dq": _flaxBinding664,
    "euler": _flaxBinding666,
    "fromFloat64List": _flaxBinding700,
    "fromBuffer": _flaxBinding702,
  },
  create: _createQuaternion,
  matches: _isQuaternion,
  setters: [_flaxBinding648, _flaxBinding649, _flaxBinding650, _flaxBinding651],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding704 = FlaxGetter(
  "path",
  _flaxBinding0,
  _RandomAccessFile_path,
);
const _flaxBinding705 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding328,
  _RandomAccessFile_close,
);
const _flaxBinding706 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding70,
  _RandomAccessFile_closeSync,
);
const _flaxBinding707 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding103,
  _RandomAccessFile_readByte,
);
const _flaxBinding708 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding2,
  _RandomAccessFile_readByteSync,
);
const _flaxBinding709 = FlaxInstanceMethod(
  _flaxBinding343,
  _flaxBinding127,
  _RandomAccessFile_read,
);
const _flaxBinding710 = FlaxInstanceMethod(
  _flaxBinding343,
  _flaxBinding14,
  _RandomAccessFile_readSync,
);
const _flaxBinding711 = <FlaxParameter>[
  FlaxParameter("buffer", _flaxBinding4, required: true),
  FlaxParameter("start", _flaxBinding2, required: false, defaultValue: 0),
  FlaxParameter("end", _flaxBinding27, required: false),
];
const _flaxBinding712 = FlaxInstanceMethod(
  _flaxBinding711,
  _flaxBinding103,
  _RandomAccessFile_readInto,
);
const _flaxBinding713 = FlaxInstanceMethod(
  _flaxBinding711,
  _flaxBinding2,
  _RandomAccessFile_readIntoSync,
);
const _flaxBinding714 = <FlaxParameter>[
  FlaxParameter("value", _flaxBinding2, required: true),
];
const _flaxBinding715 = FlaxInstanceMethod(
  _flaxBinding714,
  _flaxBinding122,
  _RandomAccessFile_writeByte,
);
const _flaxBinding716 = FlaxInstanceMethod(
  _flaxBinding714,
  _flaxBinding2,
  _RandomAccessFile_writeByteSync,
);
const _flaxBinding717 = FlaxInstanceMethod(
  _flaxBinding711,
  _flaxBinding122,
  _RandomAccessFile_writeFrom,
);
const _flaxBinding718 = FlaxInstanceMethod(
  _flaxBinding711,
  _flaxBinding70,
  _RandomAccessFile_writeFromSync,
);
const _flaxBinding719 = <FlaxParameter>[
  FlaxParameter("string", _flaxBinding0, required: true),
  FlaxParameter(
    "encoding",
    _flaxBinding130,
    required: false,
    omitWhenAbsent: true,
  ),
];
const _flaxBinding720 = FlaxInstanceMethod(
  _flaxBinding719,
  _flaxBinding122,
  _RandomAccessFile_writeString,
);
const _flaxBinding721 = FlaxInstanceMethod(
  _flaxBinding719,
  _flaxBinding70,
  _RandomAccessFile_writeStringSync,
);
const _flaxBinding722 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding103,
  _RandomAccessFile_position,
);
const _flaxBinding723 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding2,
  _RandomAccessFile_positionSync,
);
const _flaxBinding724 = <FlaxParameter>[
  FlaxParameter("position", _flaxBinding2, required: true),
];
const _flaxBinding725 = FlaxInstanceMethod(
  _flaxBinding724,
  _flaxBinding122,
  _RandomAccessFile_setPosition,
);
const _flaxBinding726 = FlaxInstanceMethod(
  _flaxBinding724,
  _flaxBinding70,
  _RandomAccessFile_setPositionSync,
);
const _flaxBinding727 = <FlaxParameter>[
  FlaxParameter("length", _flaxBinding2, required: true),
];
const _flaxBinding728 = FlaxInstanceMethod(
  _flaxBinding727,
  _flaxBinding122,
  _RandomAccessFile_truncate,
);
const _flaxBinding729 = FlaxInstanceMethod(
  _flaxBinding727,
  _flaxBinding70,
  _RandomAccessFile_truncateSync,
);
const _flaxBinding730 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding103,
  _RandomAccessFile_length,
);
const _flaxBinding731 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding2,
  _RandomAccessFile_lengthSync,
);
const _flaxBinding732 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding122,
  _RandomAccessFile_flush,
);
const _flaxBinding733 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding70,
  _RandomAccessFile_flushSync,
);
const _flaxBinding734 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:FileLock",
);
const _flaxBinding735 = <FlaxParameter>[
  FlaxParameter("mode", _flaxBinding734, required: false, omitWhenAbsent: true),
  FlaxParameter(
    "start",
    _flaxBinding2,
    required: false,
    defaultValue: 0,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "end",
    _flaxBinding2,
    required: false,
    defaultValue: -1,
    omitWhenAbsent: true,
  ),
];
const _flaxBinding736 = FlaxInstanceMethod(
  _flaxBinding735,
  _flaxBinding122,
  _RandomAccessFile_lock,
);
const _flaxBinding737 = FlaxInstanceMethod(
  _flaxBinding735,
  _flaxBinding70,
  _RandomAccessFile_lockSync,
);
const _flaxBinding738 = <FlaxParameter>[
  FlaxParameter("start", _flaxBinding2, required: false, defaultValue: 0),
  FlaxParameter("end", _flaxBinding2, required: false, defaultValue: -1),
];
const _flaxBinding739 = FlaxInstanceMethod(
  _flaxBinding738,
  _flaxBinding122,
  _RandomAccessFile_unlock,
);
const _flaxBinding740 = FlaxInstanceMethod(
  _flaxBinding738,
  _flaxBinding70,
  _RandomAccessFile_unlockSync,
);
const _flaxBinding741 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding0,
  _RandomAccessFile_toString,
);
const _flaxBinding742 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:RandomAccessFile",
  [_flaxBinding704],
  {
    "close": _flaxBinding705,
    "closeSync": _flaxBinding706,
    "readByte": _flaxBinding707,
    "readByteSync": _flaxBinding708,
    "read": _flaxBinding709,
    "readSync": _flaxBinding710,
    "readInto": _flaxBinding712,
    "readIntoSync": _flaxBinding713,
    "writeByte": _flaxBinding715,
    "writeByteSync": _flaxBinding716,
    "writeFrom": _flaxBinding717,
    "writeFromSync": _flaxBinding718,
    "writeString": _flaxBinding720,
    "writeStringSync": _flaxBinding721,
    "position": _flaxBinding722,
    "positionSync": _flaxBinding723,
    "setPosition": _flaxBinding725,
    "setPositionSync": _flaxBinding726,
    "truncate": _flaxBinding728,
    "truncateSync": _flaxBinding729,
    "length": _flaxBinding730,
    "lengthSync": _flaxBinding731,
    "flush": _flaxBinding732,
    "flushSync": _flaxBinding733,
    "lock": _flaxBinding736,
    "lockSync": _flaxBinding737,
    "unlock": _flaxBinding739,
    "unlockSync": _flaxBinding740,
    "toString": _flaxBinding741,
  },
  constructors: {},
  create: _createRandomAccessFile,
  matches: _isRandomAccessFile,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding743 = FlaxGetter(
  "level",
  _flaxBinding2,
  _RawSocketOption_level,
);
const _flaxBinding744 = FlaxGetter(
  "option",
  _flaxBinding2,
  _RawSocketOption_option,
);
const _flaxBinding745 = FlaxGetter(
  "value",
  _flaxBinding14,
  _RawSocketOption_value,
);
const _flaxBinding746 = <FlaxParameter>[
  FlaxParameter("level", _flaxBinding2, required: true),
  FlaxParameter("option", _flaxBinding2, required: true),
  FlaxParameter("value", _flaxBinding14, required: true),
];
const _flaxBinding747 = <FlaxParameter>[
  FlaxParameter("level", _flaxBinding2, required: true),
  FlaxParameter("option", _flaxBinding2, required: true),
  FlaxParameter("value", _flaxBinding2, required: true),
];
const _flaxBinding748 = <FlaxParameter>[
  FlaxParameter("level", _flaxBinding2, required: true),
  FlaxParameter("option", _flaxBinding2, required: true),
  FlaxParameter("value", _flaxBinding20, required: true),
];
const _flaxBinding749 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:RawSocketOption",
  [_flaxBinding743, _flaxBinding744, _flaxBinding745],
  {},
  constructors: {
    "": _flaxBinding746,
    "fromInt": _flaxBinding747,
    "fromBool": _flaxBinding748,
  },
  create: _createRawSocketOption,
  matches: _isRawSocketOption,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding750 = FlaxGetter(
  "statusCode",
  _flaxBinding2,
  _RedirectInfo_statusCode,
);
const _flaxBinding751 = FlaxGetter(
  "method",
  _flaxBinding0,
  _RedirectInfo_method,
);
const _flaxBinding752 = FlaxGetter(
  "location",
  _flaxBinding48,
  _RedirectInfo_location,
);
const _flaxBinding753 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:RedirectInfo",
  [_flaxBinding750, _flaxBinding751, _flaxBinding752],
  {},
  constructors: {},
  create: _createRedirectInfo,
  matches: _isRedirectInfo,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding754 = FlaxGetter("done", _flaxBinding111, _Socket_done);
const _flaxBinding755 = FlaxGetter("port", _flaxBinding2, _Socket_port);
const _flaxBinding756 = FlaxGetter(
  "remotePort",
  _flaxBinding2,
  _Socket_remotePort,
);
const _flaxBinding757 = FlaxGetter("address", _flaxBinding366, _Socket_address);
const _flaxBinding758 = FlaxGetter(
  "remoteAddress",
  _flaxBinding366,
  _Socket_remoteAddress,
);
const _flaxBinding759 = FlaxGetter(
  "isBroadcast",
  _flaxBinding20,
  _Socket_isBroadcast,
);
const _flaxBinding760 = FlaxGetter("length", _flaxBinding103, _Socket_length);
const _flaxBinding761 = FlaxGetter("isEmpty", _flaxBinding55, _Socket_isEmpty);
const _flaxBinding762 = FlaxGetter("first", _flaxBinding127, _Socket_first);
const _flaxBinding763 = FlaxGetter("last", _flaxBinding127, _Socket_last);
const _flaxBinding764 = FlaxGetter("single", _flaxBinding127, _Socket_single);
const _flaxBinding765 = FlaxGetter(
  "encoding",
  _flaxBinding130,
  _Socket_encoding,
);
const _flaxBinding766 = FlaxSetter(
  "encoding",
  _flaxBinding130,
  _Socket_set_encoding,
);
const _flaxBinding767 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding111,
  _Socket_close,
);
const _flaxBinding768 = FlaxInstanceMethod(
  _flaxBinding242,
  _flaxBinding70,
  _Socket_add,
);
const _flaxBinding769 = FlaxInstanceMethod(
  _flaxBinding246,
  _flaxBinding70,
  _Socket_addError,
);
const _flaxBinding770 = FlaxInstanceMethod(
  _flaxBinding248,
  _flaxBinding111,
  _Socket_addStream,
);
const _flaxBinding771 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding70,
  _Socket_destroy,
);
const _flaxBinding772 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:SocketOption",
);
const _flaxBinding773 = <FlaxParameter>[
  FlaxParameter("option", _flaxBinding772, required: true),
  FlaxParameter("enabled", _flaxBinding20, required: true),
];
const _flaxBinding774 = FlaxInstanceMethod(
  _flaxBinding773,
  _flaxBinding20,
  _Socket_setOption,
);
const _flaxBinding775 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:RawSocketOption",
);
const _flaxBinding776 = <FlaxParameter>[
  FlaxParameter("option", _flaxBinding775, required: true),
];
const _flaxBinding777 = FlaxInstanceMethod(
  _flaxBinding776,
  _flaxBinding14,
  _Socket_getRawOption,
);
const _flaxBinding778 = FlaxInstanceMethod(
  _flaxBinding776,
  _flaxBinding70,
  _Socket_setRawOption,
);
const _flaxBinding779 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:StreamSubscription",
  dartType: FlaxDartTypes.typeOf<api5.StreamSubscription<api2.Uint8List>>,
);
const _flaxBinding780 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "subscription",
      _flaxBinding779,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding70,
  FlaxCallbackAdapters.wrapVoid1<api5.StreamSubscription<api2.Uint8List>>,
  id: "callback:<>(p:r:subscription:object:flax.core/flutter#type:StreamSubscription<Uint8List:>)->void:",
  invoke:
      FlaxCallbackAdapters.invokeVoid1<api5.StreamSubscription<api2.Uint8List>>,
  matches: FlaxCallbackAdapters
      .matchesVoid1<api5.StreamSubscription<api2.Uint8List>>,
);
const _flaxBinding781 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding780,
);
const _flaxBinding782 = <FlaxParameter>[
  FlaxParameter("onCancel", _flaxBinding781, required: false),
  FlaxParameter("onListen", _flaxBinding781, required: false),
];
const _flaxBinding783 = FlaxTypeRef(
  "stream",
  id: "flax.core/flutter#type:Stream",
  dartType: FlaxDartTypes.typeOf<api5.Stream<api2.Uint8List>>,
  item: _flaxBinding14,
  stream: FlaxStreamBinding(
    "stream:flax.core/flutter#type:Stream[Uint8List:]",
    _stream3Matches,
    _stream3Adapt,
  ),
);
const _flaxBinding784 = FlaxInstanceMethod(
  _flaxBinding782,
  _flaxBinding783,
  _Socket_asBroadcastStream,
);
const _flaxBinding785 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "event",
      _flaxBinding14,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding70,
  FlaxCallbackAdapters.wrapVoid1<api2.Uint8List>,
  id: "callback:<>(p:r:event:Uint8List:)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api2.Uint8List>,
  matches: FlaxCallbackAdapters.matchesVoid1<api2.Uint8List>,
);
const _flaxBinding786 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding785,
);
const _flaxBinding787 = <FlaxParameter>[
  FlaxParameter("onData", _flaxBinding786, required: true),
  FlaxParameter("cancelOnError", _flaxBinding17, required: false),
  FlaxParameter("onDone", _flaxBinding300, required: false),
  FlaxParameter("onError", _flaxBinding301, required: false),
];
const _flaxBinding788 = FlaxInstanceMethod(
  _flaxBinding787,
  _flaxBinding779,
  _Socket_listen,
);
const _flaxBinding789 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "event",
      _flaxBinding14,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding20,
  FlaxCallbackAdapters.wrap1<api2.Uint8List, bool>,
  id: "callback:<>(p:r:event:Uint8List:)->bool:",
  invoke: FlaxCallbackAdapters.invoke1<api2.Uint8List, bool>,
  matches: FlaxCallbackAdapters.matches1<api2.Uint8List, bool>,
);
const _flaxBinding790 = FlaxTypeRef("callback", callback: _flaxBinding789);
const _flaxBinding791 = <FlaxParameter>[
  FlaxParameter("test", _flaxBinding790, required: true),
];
const _flaxBinding792 = FlaxInstanceMethod(
  _flaxBinding791,
  _flaxBinding783,
  _Socket_where,
);
const _flaxBinding793 = FlaxInstanceMethod(
  _flaxBinding313,
  _flaxBinding783,
  _Socket_handleError,
);
const _flaxBinding794 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:StreamConsumer",
  dartType: FlaxDartTypes.typeOf<api5.StreamConsumer<api2.Uint8List>>,
);
const _flaxBinding795 = <FlaxParameter>[
  FlaxParameter("streamConsumer", _flaxBinding794, required: true),
];
const _flaxBinding796 = FlaxInstanceMethod(
  _flaxBinding795,
  _flaxBinding111,
  _Socket_pipe,
);
const _flaxBinding797 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "previous",
      _flaxBinding14,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "element",
      _flaxBinding14,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding14,
  FlaxCallbackAdapters.wrap2<api2.Uint8List, api2.Uint8List, api2.Uint8List>,
  id: "callback:<>(p:r:previous:Uint8List:,p:r:element:Uint8List:)->Uint8List:",
  invoke: FlaxCallbackAdapters
      .invoke2<api2.Uint8List, api2.Uint8List, api2.Uint8List>,
  matches: FlaxCallbackAdapters
      .matches2<api2.Uint8List, api2.Uint8List, api2.Uint8List>,
);
const _flaxBinding798 = FlaxTypeRef("callback", callback: _flaxBinding797);
const _flaxBinding799 = <FlaxParameter>[
  FlaxParameter("combine", _flaxBinding798, required: true),
];
const _flaxBinding800 = FlaxInstanceMethod(
  _flaxBinding799,
  _flaxBinding127,
  _Socket_reduce,
);
const _flaxBinding801 = FlaxInstanceMethod(
  _flaxBinding322,
  _flaxBinding6,
  _Socket_join,
);
const _flaxBinding802 = FlaxInstanceMethod(
  _flaxBinding324,
  _flaxBinding55,
  _Socket_contains,
);
const _flaxBinding803 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "element",
      _flaxBinding14,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding70,
  FlaxCallbackAdapters.wrapVoid1<api2.Uint8List>,
  id: "callback:<>(p:r:element:Uint8List:)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api2.Uint8List>,
  matches: FlaxCallbackAdapters.matchesVoid1<api2.Uint8List>,
);
const _flaxBinding804 = FlaxTypeRef("callback", callback: _flaxBinding803);
const _flaxBinding805 = <FlaxParameter>[
  FlaxParameter("action", _flaxBinding804, required: true),
];
const _flaxBinding806 = FlaxInstanceMethod(
  _flaxBinding805,
  _flaxBinding328,
  _Socket_forEach,
);
const _flaxBinding807 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "element",
      _flaxBinding14,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding20,
  FlaxCallbackAdapters.wrap1<api2.Uint8List, bool>,
  id: "callback:<>(p:r:element:Uint8List:)->bool:",
  invoke: FlaxCallbackAdapters.invoke1<api2.Uint8List, bool>,
  matches: FlaxCallbackAdapters.matches1<api2.Uint8List, bool>,
);
const _flaxBinding808 = FlaxTypeRef("callback", callback: _flaxBinding807);
const _flaxBinding809 = <FlaxParameter>[
  FlaxParameter("test", _flaxBinding808, required: true),
];
const _flaxBinding810 = FlaxInstanceMethod(
  _flaxBinding809,
  _flaxBinding55,
  _Socket_every,
);
const _flaxBinding811 = FlaxInstanceMethod(
  _flaxBinding809,
  _flaxBinding55,
  _Socket_any,
);
const _flaxBinding812 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding14,
  collection: FlaxCollectionBinding(
    "iterable:[Uint8List:]",
    _collection19Create,
    _collection19Matches,
    restore: _collection19Restore,
  ),
);
const _flaxBinding813 = FlaxTypeRef(
  "list",
  item: _flaxBinding14,
  collection: FlaxCollectionBinding(
    "list:[Uint8List:]",
    _collection18Create,
    _collection18Matches,
  ),
  iterable: _flaxBinding812,
);
const _flaxBinding814 = FlaxTypeRef(
  "future",
  item: _flaxBinding813,
  future: FlaxFutureBinding("list:[Uint8List:]", _future21Adapt),
);
const _flaxBinding815 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding814,
  _Socket_toList,
);
const _flaxBinding816 = FlaxTypeRef(
  "set",
  item: _flaxBinding14,
  collection: FlaxCollectionBinding(
    "set:[Uint8List:]",
    _collection20Create,
    _collection20Matches,
  ),
  iterable: _flaxBinding812,
);
const _flaxBinding817 = FlaxTypeRef(
  "future",
  item: _flaxBinding816,
  future: FlaxFutureBinding("set:[Uint8List:]", _future22Adapt),
);
const _flaxBinding818 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding817,
  _Socket_toSet,
);
const _flaxBinding819 = FlaxInstanceMethod(
  _flaxBinding343,
  _flaxBinding783,
  _Socket_take,
);
const _flaxBinding820 = FlaxInstanceMethod(
  _flaxBinding809,
  _flaxBinding783,
  _Socket_takeWhile,
);
const _flaxBinding821 = FlaxInstanceMethod(
  _flaxBinding343,
  _flaxBinding783,
  _Socket_skip,
);
const _flaxBinding822 = FlaxInstanceMethod(
  _flaxBinding809,
  _flaxBinding783,
  _Socket_skipWhile,
);
const _flaxBinding823 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "previous",
      _flaxBinding14,
      required: true,
      positional: true,
    ),
    FlaxCallbackParameter(
      "next",
      _flaxBinding14,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding20,
  FlaxCallbackAdapters.wrap2<api2.Uint8List, api2.Uint8List, bool>,
  id: "callback:<>(p:r:previous:Uint8List:,p:r:next:Uint8List:)->bool:",
  invoke: FlaxCallbackAdapters.invoke2<api2.Uint8List, api2.Uint8List, bool>,
  matches: FlaxCallbackAdapters.matches2<api2.Uint8List, api2.Uint8List, bool>,
);
const _flaxBinding824 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding823,
);
const _flaxBinding825 = <FlaxParameter>[
  FlaxParameter("equals", _flaxBinding824, required: false),
];
const _flaxBinding826 = FlaxInstanceMethod(
  _flaxBinding825,
  _flaxBinding783,
  _Socket_distinct,
);
const _flaxBinding827 = FlaxCallbackBinding(
  [],
  _flaxBinding14,
  FlaxCallbackAdapters.wrap0<api2.Uint8List>,
  id: "callback:<>()->Uint8List:",
  invoke: FlaxCallbackAdapters.invoke0<api2.Uint8List>,
  matches: FlaxCallbackAdapters.matches0<api2.Uint8List>,
);
const _flaxBinding828 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding827,
);
const _flaxBinding829 = <FlaxParameter>[
  FlaxParameter("test", _flaxBinding808, required: true),
  FlaxParameter("orElse", _flaxBinding828, required: false),
];
const _flaxBinding830 = FlaxInstanceMethod(
  _flaxBinding829,
  _flaxBinding127,
  _Socket_firstWhere,
);
const _flaxBinding831 = FlaxInstanceMethod(
  _flaxBinding829,
  _flaxBinding127,
  _Socket_lastWhere,
);
const _flaxBinding832 = FlaxInstanceMethod(
  _flaxBinding829,
  _flaxBinding127,
  _Socket_singleWhere,
);
const _flaxBinding833 = FlaxInstanceMethod(
  _flaxBinding358,
  _flaxBinding127,
  _Socket_elementAt,
);
const _flaxBinding834 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:EventSink",
  dartType: FlaxDartTypes.typeOf<api5.EventSink<api2.Uint8List>>,
);
const _flaxBinding835 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "sink",
      _flaxBinding834,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding70,
  FlaxCallbackAdapters.wrapVoid1<api5.EventSink<api2.Uint8List>>,
  id: "callback:<>(p:r:sink:object:flax.core/flutter#type:EventSink<Uint8List:>)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api5.EventSink<api2.Uint8List>>,
  matches: FlaxCallbackAdapters.matchesVoid1<api5.EventSink<api2.Uint8List>>,
);
const _flaxBinding836 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding835,
);
const _flaxBinding837 = <FlaxParameter>[
  FlaxParameter("timeLimit", _flaxBinding163, required: true),
  FlaxParameter("onTimeout", _flaxBinding836, required: false),
];
const _flaxBinding838 = FlaxInstanceMethod(
  _flaxBinding837,
  _flaxBinding783,
  _Socket_timeout,
);
const _flaxBinding839 = FlaxInstanceMethod(
  _flaxBinding252,
  _flaxBinding70,
  _Socket_write,
);
const _flaxBinding840 = FlaxInstanceMethod(
  _flaxBinding255,
  _flaxBinding70,
  _Socket_writeAll,
);
const _flaxBinding841 = FlaxInstanceMethod(
  _flaxBinding257,
  _flaxBinding70,
  _Socket_writeln,
);
const _flaxBinding842 = FlaxInstanceMethod(
  _flaxBinding259,
  _flaxBinding70,
  _Socket_writeCharCode,
);
const _flaxBinding843 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding111,
  _Socket_flush,
);
const _flaxBinding844 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:Socket",
  [
    _flaxBinding754,
    _flaxBinding755,
    _flaxBinding756,
    _flaxBinding757,
    _flaxBinding758,
    _flaxBinding759,
    _flaxBinding760,
    _flaxBinding761,
    _flaxBinding762,
    _flaxBinding763,
    _flaxBinding764,
    _flaxBinding765,
  ],
  {
    "close": _flaxBinding767,
    "add": _flaxBinding768,
    "addError": _flaxBinding769,
    "addStream": _flaxBinding770,
    "destroy": _flaxBinding771,
    "setOption": _flaxBinding774,
    "getRawOption": _flaxBinding777,
    "setRawOption": _flaxBinding778,
    "asBroadcastStream": _flaxBinding784,
    "listen": _flaxBinding788,
    "where": _flaxBinding792,
    "map": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter(
          "convert",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter(
                  "event",
                  _flaxBinding14,
                  required: true,
                  positional: true,
                ),
              ],
              _flaxBinding110,
              _callback8,
              id: "callback:<>(p:r:event:Uint8List:)->any?:",
              invoke: _callback8Invoke,
              matches: _callback8Matches,
            ),
          ),
          required: true,
        ),
      ],
      FlaxTypeRef(
        "stream",
        id: "flax.core/flutter#type:Stream",
        item: _flaxBinding110,
        stream: FlaxStreamBinding(
          "stream:flax.core/flutter#type:Stream[any?:]",
          _stream2Matches,
          _stream2Adapt,
        ),
      ),
      _Socket_map,
      genericFactory: _flaxGeneric_Socket_map,
      ownerTypes: [],
    ),
    "asyncMap": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter(
          "convert",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter(
                  "event",
                  _flaxBinding14,
                  required: true,
                  positional: true,
                ),
              ],
              _flaxBinding308,
              _callback9,
              id: "callback:<>(p:r:event:Uint8List:)->futureOr:[any?:]",
              invoke: _callback9Invoke,
              matches: _callback9Matches,
            ),
          ),
          required: true,
        ),
      ],
      FlaxTypeRef(
        "stream",
        id: "flax.core/flutter#type:Stream",
        item: _flaxBinding110,
        stream: FlaxStreamBinding(
          "stream:flax.core/flutter#type:Stream[any?:]",
          _stream2Matches,
          _stream2Adapt,
        ),
      ),
      _Socket_asyncMap,
      genericFactory: _flaxGeneric_Socket_asyncMap,
      ownerTypes: [],
    ),
    "asyncExpand": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter(
          "convert",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter(
                  "event",
                  _flaxBinding14,
                  required: true,
                  positional: true,
                ),
              ],
              _flaxBinding309,
              _callback10,
              id: "callback:<>(p:r:event:Uint8List:)->stream?:flax.core/flutter#type:Stream[any?:]",
              invoke: _callback10Invoke,
              matches: _callback10Matches,
            ),
          ),
          required: true,
        ),
      ],
      FlaxTypeRef(
        "stream",
        id: "flax.core/flutter#type:Stream",
        item: _flaxBinding110,
        stream: FlaxStreamBinding(
          "stream:flax.core/flutter#type:Stream[any?:]",
          _stream2Matches,
          _stream2Adapt,
        ),
      ),
      _Socket_asyncExpand,
      genericFactory: _flaxGeneric_Socket_asyncExpand,
      ownerTypes: [],
    ),
    "handleError": _flaxBinding793,
    "expand": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter(
          "convert",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter(
                  "element",
                  _flaxBinding14,
                  required: true,
                  positional: true,
                ),
              ],
              _flaxBinding254,
              _callback11,
              id: "callback:<>(p:r:element:Uint8List:)->iterable:[any?:]",
              invoke: _callback11Invoke,
              matches: _callback11Matches,
            ),
          ),
          required: true,
        ),
      ],
      FlaxTypeRef(
        "stream",
        id: "flax.core/flutter#type:Stream",
        item: _flaxBinding110,
        stream: FlaxStreamBinding(
          "stream:flax.core/flutter#type:Stream[any?:]",
          _stream2Matches,
          _stream2Adapt,
        ),
      ),
      _Socket_expand,
      genericFactory: _flaxGeneric_Socket_expand,
      ownerTypes: [],
    ),
    "pipe": _flaxBinding796,
    "transform": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter(
          "streamTransformer",
          FlaxTypeRef("object", id: "flax.core/flutter#type:StreamTransformer"),
          required: true,
        ),
      ],
      FlaxTypeRef(
        "stream",
        id: "flax.core/flutter#type:Stream",
        item: _flaxBinding110,
        stream: FlaxStreamBinding(
          "stream:flax.core/flutter#type:Stream[any?:]",
          _stream2Matches,
          _stream2Adapt,
        ),
      ),
      _Socket_transform,
      genericFactory: _flaxGeneric_Socket_transform,
      ownerTypes: [],
    ),
    "reduce": _flaxBinding800,
    "fold": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter(
          "initialValue",
          FlaxTypeRef("any", nullable: true),
          required: true,
        ),
        FlaxParameter(
          "combine",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter(
                  "previous",
                  _flaxBinding110,
                  required: true,
                  positional: true,
                ),
                FlaxCallbackParameter(
                  "element",
                  _flaxBinding14,
                  required: true,
                  positional: true,
                ),
              ],
              _flaxBinding110,
              _callback12,
              id: "callback:<>(p:r:previous:any?:,p:r:element:Uint8List:)->any?:",
              invoke: _callback12Invoke,
              matches: _callback12Matches,
            ),
          ),
          required: true,
        ),
      ],
      FlaxTypeRef(
        "future",
        item: _flaxBinding110,
        future: FlaxFutureBinding("any?:", _future8Adapt),
      ),
      _Socket_fold,
      genericFactory: _flaxGeneric_Socket_fold,
      ownerTypes: [],
    ),
    "join": _flaxBinding801,
    "contains": _flaxBinding802,
    "forEach": _flaxBinding806,
    "every": _flaxBinding810,
    "any": _flaxBinding811,
    "cast": FlaxInstanceMethod(
      _flaxBinding42,
      FlaxTypeRef(
        "stream",
        id: "flax.core/flutter#type:Stream",
        item: _flaxBinding110,
        stream: FlaxStreamBinding(
          "stream:flax.core/flutter#type:Stream[any?:]",
          _stream2Matches,
          _stream2Adapt,
        ),
      ),
      _Socket_cast,
      genericFactory: _flaxGeneric_Socket_cast,
      ownerTypes: [],
    ),
    "toList": _flaxBinding815,
    "toSet": _flaxBinding818,
    "drain": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter(
          "futureValue",
          FlaxTypeRef("any", nullable: true),
          required: false,
        ),
      ],
      FlaxTypeRef(
        "future",
        item: _flaxBinding110,
        future: FlaxFutureBinding("any?:", _future8Adapt),
      ),
      _Socket_drain,
      genericFactory: _flaxGeneric_Socket_drain,
      ownerTypes: [],
    ),
    "take": _flaxBinding819,
    "takeWhile": _flaxBinding820,
    "skip": _flaxBinding821,
    "skipWhile": _flaxBinding822,
    "distinct": _flaxBinding826,
    "firstWhere": _flaxBinding830,
    "lastWhere": _flaxBinding831,
    "singleWhere": _flaxBinding832,
    "elementAt": _flaxBinding833,
    "timeout": _flaxBinding838,
    "write": _flaxBinding839,
    "writeAll": _flaxBinding840,
    "writeln": _flaxBinding841,
    "writeCharCode": _flaxBinding842,
    "flush": _flaxBinding843,
  },
  constructors: {},
  create: _createSocket,
  matches: _isSocket,
  setters: [_flaxBinding766],
  supertypes: [
    "dart:core::Object",
    "flax.core/flutter#type:Stream",
    "dart:io::IOSink",
    "flax.core/flutter#type:StreamSink",
    "flax.core/flutter#type:EventSink",
    "flax.core/flutter#type:Sink",
    "flax.core/flutter#type:StreamConsumer",
    "dart:core::StringSink",
  ],
);
const _flaxBinding845 = FlaxGetter(
  "peerCertificate",
  _flaxBinding276,
  _SecureSocket_peerCertificate,
);
const _flaxBinding846 = FlaxGetter(
  "selectedProtocol",
  _flaxBinding29,
  _SecureSocket_selectedProtocol,
);
const _flaxBinding847 = <FlaxParameter>[
  FlaxParameter(
    "requestClientCertificate",
    _flaxBinding20,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "requireClientCertificate",
    _flaxBinding20,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "useSessionCache",
    _flaxBinding20,
    required: false,
    defaultValue: true,
  ),
];
const _flaxBinding848 = FlaxInstanceMethod(
  _flaxBinding847,
  _flaxBinding70,
  _SecureSocket_renegotiate,
);
const _flaxBinding849 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:SecureSocket",
  [_flaxBinding845, _flaxBinding846],
  {
    "map": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter(
          "convert",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter(
                  "event",
                  _flaxBinding14,
                  required: true,
                  positional: true,
                ),
              ],
              _flaxBinding110,
              _callback13,
              id: "callback:<>(p:r:event:Uint8List:)->any?:",
              invoke: _callback13Invoke,
              matches: _callback13Matches,
            ),
          ),
          required: true,
        ),
      ],
      FlaxTypeRef(
        "stream",
        id: "flax.core/flutter#type:Stream",
        item: _flaxBinding110,
        stream: FlaxStreamBinding(
          "stream:flax.core/flutter#type:Stream[any?:]",
          _stream2Matches,
          _stream2Adapt,
        ),
      ),
      _SecureSocket_map,
      genericFactory: _flaxGeneric_SecureSocket_map,
      ownerTypes: [],
    ),
    "asyncMap": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter(
          "convert",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter(
                  "event",
                  _flaxBinding14,
                  required: true,
                  positional: true,
                ),
              ],
              _flaxBinding308,
              _callback14,
              id: "callback:<>(p:r:event:Uint8List:)->futureOr:[any?:]",
              invoke: _callback14Invoke,
              matches: _callback14Matches,
            ),
          ),
          required: true,
        ),
      ],
      FlaxTypeRef(
        "stream",
        id: "flax.core/flutter#type:Stream",
        item: _flaxBinding110,
        stream: FlaxStreamBinding(
          "stream:flax.core/flutter#type:Stream[any?:]",
          _stream2Matches,
          _stream2Adapt,
        ),
      ),
      _SecureSocket_asyncMap,
      genericFactory: _flaxGeneric_SecureSocket_asyncMap,
      ownerTypes: [],
    ),
    "asyncExpand": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter(
          "convert",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter(
                  "event",
                  _flaxBinding14,
                  required: true,
                  positional: true,
                ),
              ],
              _flaxBinding309,
              _callback15,
              id: "callback:<>(p:r:event:Uint8List:)->stream?:flax.core/flutter#type:Stream[any?:]",
              invoke: _callback15Invoke,
              matches: _callback15Matches,
            ),
          ),
          required: true,
        ),
      ],
      FlaxTypeRef(
        "stream",
        id: "flax.core/flutter#type:Stream",
        item: _flaxBinding110,
        stream: FlaxStreamBinding(
          "stream:flax.core/flutter#type:Stream[any?:]",
          _stream2Matches,
          _stream2Adapt,
        ),
      ),
      _SecureSocket_asyncExpand,
      genericFactory: _flaxGeneric_SecureSocket_asyncExpand,
      ownerTypes: [],
    ),
    "expand": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter(
          "convert",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter(
                  "element",
                  _flaxBinding14,
                  required: true,
                  positional: true,
                ),
              ],
              _flaxBinding254,
              _callback16,
              id: "callback:<>(p:r:element:Uint8List:)->iterable:[any?:]",
              invoke: _callback16Invoke,
              matches: _callback16Matches,
            ),
          ),
          required: true,
        ),
      ],
      FlaxTypeRef(
        "stream",
        id: "flax.core/flutter#type:Stream",
        item: _flaxBinding110,
        stream: FlaxStreamBinding(
          "stream:flax.core/flutter#type:Stream[any?:]",
          _stream2Matches,
          _stream2Adapt,
        ),
      ),
      _SecureSocket_expand,
      genericFactory: _flaxGeneric_SecureSocket_expand,
      ownerTypes: [],
    ),
    "transform": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter(
          "streamTransformer",
          FlaxTypeRef("object", id: "flax.core/flutter#type:StreamTransformer"),
          required: true,
        ),
      ],
      FlaxTypeRef(
        "stream",
        id: "flax.core/flutter#type:Stream",
        item: _flaxBinding110,
        stream: FlaxStreamBinding(
          "stream:flax.core/flutter#type:Stream[any?:]",
          _stream2Matches,
          _stream2Adapt,
        ),
      ),
      _SecureSocket_transform,
      genericFactory: _flaxGeneric_SecureSocket_transform,
      ownerTypes: [],
    ),
    "fold": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter(
          "initialValue",
          FlaxTypeRef("any", nullable: true),
          required: true,
        ),
        FlaxParameter(
          "combine",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter(
                  "previous",
                  _flaxBinding110,
                  required: true,
                  positional: true,
                ),
                FlaxCallbackParameter(
                  "element",
                  _flaxBinding14,
                  required: true,
                  positional: true,
                ),
              ],
              _flaxBinding110,
              _callback17,
              id: "callback:<>(p:r:previous:any?:,p:r:element:Uint8List:)->any?:",
              invoke: _callback17Invoke,
              matches: _callback17Matches,
            ),
          ),
          required: true,
        ),
      ],
      FlaxTypeRef(
        "future",
        item: _flaxBinding110,
        future: FlaxFutureBinding("any?:", _future8Adapt),
      ),
      _SecureSocket_fold,
      genericFactory: _flaxGeneric_SecureSocket_fold,
      ownerTypes: [],
    ),
    "cast": FlaxInstanceMethod(
      _flaxBinding42,
      FlaxTypeRef(
        "stream",
        id: "flax.core/flutter#type:Stream",
        item: _flaxBinding110,
        stream: FlaxStreamBinding(
          "stream:flax.core/flutter#type:Stream[any?:]",
          _stream2Matches,
          _stream2Adapt,
        ),
      ),
      _SecureSocket_cast,
      genericFactory: _flaxGeneric_SecureSocket_cast,
      ownerTypes: [],
    ),
    "drain": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter(
          "futureValue",
          FlaxTypeRef("any", nullable: true),
          required: false,
        ),
      ],
      FlaxTypeRef(
        "future",
        item: _flaxBinding110,
        future: FlaxFutureBinding("any?:", _future8Adapt),
      ),
      _SecureSocket_drain,
      genericFactory: _flaxGeneric_SecureSocket_drain,
      ownerTypes: [],
    ),
    "renegotiate": _flaxBinding848,
  },
  constructors: {},
  create: _createSecureSocket,
  matches: _isSecureSocket,
  setters: [],
  supertypes: [
    "dart:core::Object",
    "flax.core/sdk_dependencies#type:Socket",
    "flax.core/flutter#type:Stream",
    "dart:io::IOSink",
    "flax.core/flutter#type:StreamSink",
    "flax.core/flutter#type:EventSink",
    "flax.core/flutter#type:Sink",
    "flax.core/flutter#type:StreamConsumer",
    "dart:core::StringSink",
  ],
  parent: _flaxBinding844,
);
const _flaxBinding850 = FlaxGetter(
  "allowLegacyUnsafeRenegotiation",
  _flaxBinding20,
  _SecurityContext_allowLegacyUnsafeRenegotiation,
);
const _flaxBinding851 = FlaxSetter(
  "allowLegacyUnsafeRenegotiation",
  _flaxBinding20,
  _SecurityContext_set_allowLegacyUnsafeRenegotiation,
);
const _flaxBinding852 = <FlaxParameter>[
  FlaxParameter("file", _flaxBinding0, required: true),
  FlaxParameter("password", _flaxBinding29, required: false),
];
const _flaxBinding853 = FlaxInstanceMethod(
  _flaxBinding852,
  _flaxBinding70,
  _SecurityContext_usePrivateKey,
);
const _flaxBinding854 = <FlaxParameter>[
  FlaxParameter("keyBytes", _flaxBinding4, required: true),
  FlaxParameter("password", _flaxBinding29, required: false),
];
const _flaxBinding855 = FlaxInstanceMethod(
  _flaxBinding854,
  _flaxBinding70,
  _SecurityContext_usePrivateKeyBytes,
);
const _flaxBinding856 = FlaxInstanceMethod(
  _flaxBinding852,
  _flaxBinding70,
  _SecurityContext_setTrustedCertificates,
);
const _flaxBinding857 = <FlaxParameter>[
  FlaxParameter("certBytes", _flaxBinding4, required: true),
  FlaxParameter("password", _flaxBinding29, required: false),
];
const _flaxBinding858 = FlaxInstanceMethod(
  _flaxBinding857,
  _flaxBinding70,
  _SecurityContext_setTrustedCertificatesBytes,
);
const _flaxBinding859 = FlaxInstanceMethod(
  _flaxBinding852,
  _flaxBinding70,
  _SecurityContext_useCertificateChain,
);
const _flaxBinding860 = <FlaxParameter>[
  FlaxParameter("chainBytes", _flaxBinding4, required: true),
  FlaxParameter("password", _flaxBinding29, required: false),
];
const _flaxBinding861 = FlaxInstanceMethod(
  _flaxBinding860,
  _flaxBinding70,
  _SecurityContext_useCertificateChainBytes,
);
const _flaxBinding862 = FlaxInstanceMethod(
  _flaxBinding852,
  _flaxBinding70,
  _SecurityContext_setClientAuthorities,
);
const _flaxBinding863 = <FlaxParameter>[
  FlaxParameter("authCertBytes", _flaxBinding4, required: true),
  FlaxParameter("password", _flaxBinding29, required: false),
];
const _flaxBinding864 = FlaxInstanceMethod(
  _flaxBinding863,
  _flaxBinding70,
  _SecurityContext_setClientAuthoritiesBytes,
);
const _flaxBinding865 = <FlaxParameter>[
  FlaxParameter("protocols", _flaxBinding135, required: true),
  FlaxParameter("isServer", _flaxBinding20, required: true),
];
const _flaxBinding866 = FlaxInstanceMethod(
  _flaxBinding865,
  _flaxBinding70,
  _SecurityContext_setAlpnProtocols,
);
const _flaxBinding867 = <FlaxParameter>[
  FlaxParameter(
    "withTrustedRoots",
    _flaxBinding20,
    required: false,
    defaultValue: false,
  ),
];
const _flaxBinding868 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:SecurityContext",
  [_flaxBinding850],
  {
    "usePrivateKey": _flaxBinding853,
    "usePrivateKeyBytes": _flaxBinding855,
    "setTrustedCertificates": _flaxBinding856,
    "setTrustedCertificatesBytes": _flaxBinding858,
    "useCertificateChain": _flaxBinding859,
    "useCertificateChainBytes": _flaxBinding861,
    "setClientAuthorities": _flaxBinding862,
    "setClientAuthoritiesBytes": _flaxBinding864,
    "setAlpnProtocols": _flaxBinding866,
  },
  constructors: {"": _flaxBinding867},
  create: _createSecurityContext,
  matches: _isSecurityContext,
  setters: [_flaxBinding851],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding869 = <FlaxParameter>[
  FlaxParameter("message", _flaxBinding110, required: true),
];
const _flaxBinding870 = FlaxInstanceMethod(
  _flaxBinding869,
  _flaxBinding70,
  _SendPort_send,
);
const _flaxBinding871 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:SendPort",
  [],
  {"send": _flaxBinding870},
  constructors: {},
  create: _createSendPort,
  matches: _isSendPort,
  setters: [],
  supertypes: ["dart:core::Object", "dart:isolate::Capability"],
);
const _flaxBinding872 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:SocketOption",
  [],
  {},
  constructors: {},
  create: _createSocketOption,
  matches: _isSocketOption,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding873 = FlaxGetter(
  "frequency",
  _flaxBinding2,
  _Stopwatch_frequency,
);
const _flaxBinding874 = FlaxGetter(
  "elapsedTicks",
  _flaxBinding2,
  _Stopwatch_elapsedTicks,
);
const _flaxBinding875 = FlaxGetter(
  "elapsed",
  _flaxBinding163,
  _Stopwatch_elapsed,
);
const _flaxBinding876 = FlaxGetter(
  "elapsedMicroseconds",
  _flaxBinding2,
  _Stopwatch_elapsedMicroseconds,
);
const _flaxBinding877 = FlaxGetter(
  "elapsedMilliseconds",
  _flaxBinding2,
  _Stopwatch_elapsedMilliseconds,
);
const _flaxBinding878 = FlaxGetter(
  "isRunning",
  _flaxBinding20,
  _Stopwatch_isRunning,
);
const _flaxBinding879 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding70,
  _Stopwatch_start,
);
const _flaxBinding880 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding70,
  _Stopwatch_stop,
);
const _flaxBinding881 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding70,
  _Stopwatch_reset,
);
const _flaxBinding882 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:Stopwatch",
  [
    _flaxBinding873,
    _flaxBinding874,
    _flaxBinding875,
    _flaxBinding876,
    _flaxBinding877,
    _flaxBinding878,
  ],
  {"start": _flaxBinding879, "stop": _flaxBinding880, "reset": _flaxBinding881},
  constructors: {"": _flaxBinding42},
  create: _createStopwatch,
  matches: _isStopwatch,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding883 = <FlaxParameter>[
  FlaxParameter("string", _flaxBinding0, required: true),
];
const _flaxBinding884 = FlaxInstanceMethod(
  _flaxBinding883,
  _flaxBinding14,
  _Utf8Codec_encode,
);
const _flaxBinding885 = <FlaxParameter>[
  FlaxParameter("codeUnits", _flaxBinding4, required: true),
  FlaxParameter("allowMalformed", _flaxBinding17, required: false),
];
const _flaxBinding886 = FlaxInstanceMethod(
  _flaxBinding885,
  _flaxBinding0,
  _Utf8Codec_decode,
);
const _flaxBinding887 = <FlaxParameter>[
  FlaxParameter(
    "allowMalformed",
    _flaxBinding20,
    required: false,
    defaultValue: false,
  ),
];
const _flaxBinding888 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:Utf8Codec",
  [],
  {"encode": _flaxBinding884, "decode": _flaxBinding886},
  constructors: {"": _flaxBinding887},
  create: _createUtf8Codec,
  matches: _isUtf8Codec,
  setters: [],
  supertypes: [
    "flax.core/sdk_dependencies#type:Encoding",
    "dart:convert::Codec",
    "dart:core::Object",
  ],
  parent: _flaxBinding13,
);
const _flaxBinding889 = FlaxGetter(
  "storage",
  _flaxBinding438,
  _Vector2_storage,
);
const _flaxBinding890 = FlaxGetter("length", _flaxBinding448, _Vector2_length);
const _flaxBinding891 = FlaxGetter(
  "length2",
  _flaxBinding448,
  _Vector2_length2,
);
const _flaxBinding892 = FlaxGetter(
  "isInfinite",
  _flaxBinding20,
  _Vector2_isInfinite,
);
const _flaxBinding893 = FlaxGetter("isNaN", _flaxBinding20, _Vector2_isNaN);
const _flaxBinding894 = FlaxGetter("xx", _flaxBinding441, _Vector2_xx);
const _flaxBinding895 = FlaxGetter("xy", _flaxBinding441, _Vector2_xy);
const _flaxBinding896 = FlaxGetter("yx", _flaxBinding441, _Vector2_yx);
const _flaxBinding897 = FlaxGetter("yy", _flaxBinding441, _Vector2_yy);
const _flaxBinding898 = FlaxGetter("xxx", _flaxBinding534, _Vector2_xxx);
const _flaxBinding899 = FlaxGetter("xxy", _flaxBinding534, _Vector2_xxy);
const _flaxBinding900 = FlaxGetter("xyx", _flaxBinding534, _Vector2_xyx);
const _flaxBinding901 = FlaxGetter("xyy", _flaxBinding534, _Vector2_xyy);
const _flaxBinding902 = FlaxGetter("yxx", _flaxBinding534, _Vector2_yxx);
const _flaxBinding903 = FlaxGetter("yxy", _flaxBinding534, _Vector2_yxy);
const _flaxBinding904 = FlaxGetter("yyx", _flaxBinding534, _Vector2_yyx);
const _flaxBinding905 = FlaxGetter("yyy", _flaxBinding534, _Vector2_yyy);
const _flaxBinding906 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:Vector4",
);
const _flaxBinding907 = FlaxGetter("xxxx", _flaxBinding906, _Vector2_xxxx);
const _flaxBinding908 = FlaxGetter("xxxy", _flaxBinding906, _Vector2_xxxy);
const _flaxBinding909 = FlaxGetter("xxyx", _flaxBinding906, _Vector2_xxyx);
const _flaxBinding910 = FlaxGetter("xxyy", _flaxBinding906, _Vector2_xxyy);
const _flaxBinding911 = FlaxGetter("xyxx", _flaxBinding906, _Vector2_xyxx);
const _flaxBinding912 = FlaxGetter("xyxy", _flaxBinding906, _Vector2_xyxy);
const _flaxBinding913 = FlaxGetter("xyyx", _flaxBinding906, _Vector2_xyyx);
const _flaxBinding914 = FlaxGetter("xyyy", _flaxBinding906, _Vector2_xyyy);
const _flaxBinding915 = FlaxGetter("yxxx", _flaxBinding906, _Vector2_yxxx);
const _flaxBinding916 = FlaxGetter("yxxy", _flaxBinding906, _Vector2_yxxy);
const _flaxBinding917 = FlaxGetter("yxyx", _flaxBinding906, _Vector2_yxyx);
const _flaxBinding918 = FlaxGetter("yxyy", _flaxBinding906, _Vector2_yxyy);
const _flaxBinding919 = FlaxGetter("yyxx", _flaxBinding906, _Vector2_yyxx);
const _flaxBinding920 = FlaxGetter("yyxy", _flaxBinding906, _Vector2_yyxy);
const _flaxBinding921 = FlaxGetter("yyyx", _flaxBinding906, _Vector2_yyyx);
const _flaxBinding922 = FlaxGetter("yyyy", _flaxBinding906, _Vector2_yyyy);
const _flaxBinding923 = FlaxGetter("r", _flaxBinding448, _Vector2_r);
const _flaxBinding924 = FlaxGetter("g", _flaxBinding448, _Vector2_g);
const _flaxBinding925 = FlaxGetter("s", _flaxBinding448, _Vector2_s);
const _flaxBinding926 = FlaxGetter("t", _flaxBinding448, _Vector2_t);
const _flaxBinding927 = FlaxGetter("x", _flaxBinding448, _Vector2_x);
const _flaxBinding928 = FlaxGetter("y", _flaxBinding448, _Vector2_y);
const _flaxBinding929 = FlaxGetter("rr", _flaxBinding441, _Vector2_rr);
const _flaxBinding930 = FlaxGetter("rg", _flaxBinding441, _Vector2_rg);
const _flaxBinding931 = FlaxGetter("gr", _flaxBinding441, _Vector2_gr);
const _flaxBinding932 = FlaxGetter("gg", _flaxBinding441, _Vector2_gg);
const _flaxBinding933 = FlaxGetter("rrr", _flaxBinding534, _Vector2_rrr);
const _flaxBinding934 = FlaxGetter("rrg", _flaxBinding534, _Vector2_rrg);
const _flaxBinding935 = FlaxGetter("rgr", _flaxBinding534, _Vector2_rgr);
const _flaxBinding936 = FlaxGetter("rgg", _flaxBinding534, _Vector2_rgg);
const _flaxBinding937 = FlaxGetter("grr", _flaxBinding534, _Vector2_grr);
const _flaxBinding938 = FlaxGetter("grg", _flaxBinding534, _Vector2_grg);
const _flaxBinding939 = FlaxGetter("ggr", _flaxBinding534, _Vector2_ggr);
const _flaxBinding940 = FlaxGetter("ggg", _flaxBinding534, _Vector2_ggg);
const _flaxBinding941 = FlaxGetter("rrrr", _flaxBinding906, _Vector2_rrrr);
const _flaxBinding942 = FlaxGetter("rrrg", _flaxBinding906, _Vector2_rrrg);
const _flaxBinding943 = FlaxGetter("rrgr", _flaxBinding906, _Vector2_rrgr);
const _flaxBinding944 = FlaxGetter("rrgg", _flaxBinding906, _Vector2_rrgg);
const _flaxBinding945 = FlaxGetter("rgrr", _flaxBinding906, _Vector2_rgrr);
const _flaxBinding946 = FlaxGetter("rgrg", _flaxBinding906, _Vector2_rgrg);
const _flaxBinding947 = FlaxGetter("rggr", _flaxBinding906, _Vector2_rggr);
const _flaxBinding948 = FlaxGetter("rggg", _flaxBinding906, _Vector2_rggg);
const _flaxBinding949 = FlaxGetter("grrr", _flaxBinding906, _Vector2_grrr);
const _flaxBinding950 = FlaxGetter("grrg", _flaxBinding906, _Vector2_grrg);
const _flaxBinding951 = FlaxGetter("grgr", _flaxBinding906, _Vector2_grgr);
const _flaxBinding952 = FlaxGetter("grgg", _flaxBinding906, _Vector2_grgg);
const _flaxBinding953 = FlaxGetter("ggrr", _flaxBinding906, _Vector2_ggrr);
const _flaxBinding954 = FlaxGetter("ggrg", _flaxBinding906, _Vector2_ggrg);
const _flaxBinding955 = FlaxGetter("gggr", _flaxBinding906, _Vector2_gggr);
const _flaxBinding956 = FlaxGetter("gggg", _flaxBinding906, _Vector2_gggg);
const _flaxBinding957 = FlaxGetter("ss", _flaxBinding441, _Vector2_ss);
const _flaxBinding958 = FlaxGetter("st", _flaxBinding441, _Vector2_st);
const _flaxBinding959 = FlaxGetter("ts", _flaxBinding441, _Vector2_ts);
const _flaxBinding960 = FlaxGetter("tt", _flaxBinding441, _Vector2_tt);
const _flaxBinding961 = FlaxGetter("sss", _flaxBinding534, _Vector2_sss);
const _flaxBinding962 = FlaxGetter("sst", _flaxBinding534, _Vector2_sst);
const _flaxBinding963 = FlaxGetter("sts", _flaxBinding534, _Vector2_sts);
const _flaxBinding964 = FlaxGetter("stt", _flaxBinding534, _Vector2_stt);
const _flaxBinding965 = FlaxGetter("tss", _flaxBinding534, _Vector2_tss);
const _flaxBinding966 = FlaxGetter("tst", _flaxBinding534, _Vector2_tst);
const _flaxBinding967 = FlaxGetter("tts", _flaxBinding534, _Vector2_tts);
const _flaxBinding968 = FlaxGetter("ttt", _flaxBinding534, _Vector2_ttt);
const _flaxBinding969 = FlaxGetter("ssss", _flaxBinding906, _Vector2_ssss);
const _flaxBinding970 = FlaxGetter("ssst", _flaxBinding906, _Vector2_ssst);
const _flaxBinding971 = FlaxGetter("ssts", _flaxBinding906, _Vector2_ssts);
const _flaxBinding972 = FlaxGetter("sstt", _flaxBinding906, _Vector2_sstt);
const _flaxBinding973 = FlaxGetter("stss", _flaxBinding906, _Vector2_stss);
const _flaxBinding974 = FlaxGetter("stst", _flaxBinding906, _Vector2_stst);
const _flaxBinding975 = FlaxGetter("stts", _flaxBinding906, _Vector2_stts);
const _flaxBinding976 = FlaxGetter("sttt", _flaxBinding906, _Vector2_sttt);
const _flaxBinding977 = FlaxGetter("tsss", _flaxBinding906, _Vector2_tsss);
const _flaxBinding978 = FlaxGetter("tsst", _flaxBinding906, _Vector2_tsst);
const _flaxBinding979 = FlaxGetter("tsts", _flaxBinding906, _Vector2_tsts);
const _flaxBinding980 = FlaxGetter("tstt", _flaxBinding906, _Vector2_tstt);
const _flaxBinding981 = FlaxGetter("ttss", _flaxBinding906, _Vector2_ttss);
const _flaxBinding982 = FlaxGetter("ttst", _flaxBinding906, _Vector2_ttst);
const _flaxBinding983 = FlaxGetter("ttts", _flaxBinding906, _Vector2_ttts);
const _flaxBinding984 = FlaxGetter("tttt", _flaxBinding906, _Vector2_tttt);
const _flaxBinding985 = FlaxSetter(
  "length",
  _flaxBinding448,
  _Vector2_set_length,
);
const _flaxBinding986 = FlaxSetter("xy", _flaxBinding441, _Vector2_set_xy);
const _flaxBinding987 = FlaxSetter("yx", _flaxBinding441, _Vector2_set_yx);
const _flaxBinding988 = FlaxSetter("r", _flaxBinding448, _Vector2_set_r);
const _flaxBinding989 = FlaxSetter("g", _flaxBinding448, _Vector2_set_g);
const _flaxBinding990 = FlaxSetter("s", _flaxBinding448, _Vector2_set_s);
const _flaxBinding991 = FlaxSetter("t", _flaxBinding448, _Vector2_set_t);
const _flaxBinding992 = FlaxSetter("x", _flaxBinding448, _Vector2_set_x);
const _flaxBinding993 = FlaxSetter("y", _flaxBinding448, _Vector2_set_y);
const _flaxBinding994 = FlaxSetter("rg", _flaxBinding441, _Vector2_set_rg);
const _flaxBinding995 = FlaxSetter("gr", _flaxBinding441, _Vector2_set_gr);
const _flaxBinding996 = FlaxSetter("st", _flaxBinding441, _Vector2_set_st);
const _flaxBinding997 = FlaxSetter("ts", _flaxBinding441, _Vector2_set_ts);
const _flaxBinding998 = <FlaxParameter>[
  FlaxParameter("x_", _flaxBinding448, required: true),
  FlaxParameter("y_", _flaxBinding448, required: true),
];
const _flaxBinding999 = FlaxInstanceMethod(
  _flaxBinding998,
  _flaxBinding70,
  _Vector2_setValues,
);
const _flaxBinding1000 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding70,
  _Vector2_setZero,
);
const _flaxBinding1001 = <FlaxParameter>[
  FlaxParameter("other", _flaxBinding441, required: true),
];
const _flaxBinding1002 = FlaxInstanceMethod(
  _flaxBinding1001,
  _flaxBinding70,
  _Vector2_setFrom,
);
const _flaxBinding1003 = FlaxInstanceMethod(
  _flaxBinding461,
  _flaxBinding70,
  _Vector2_splat,
);
const _flaxBinding1004 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding0,
  _Vector2_toString,
);
const _flaxBinding1005 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding448,
  _Vector2_normalize,
);
const _flaxBinding1006 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding448,
  _Vector2_normalizeLength,
);
const _flaxBinding1007 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding441,
  _Vector2_normalized,
);
const _flaxBinding1008 = <FlaxParameter>[
  FlaxParameter("out", _flaxBinding441, required: true),
];
const _flaxBinding1009 = FlaxInstanceMethod(
  _flaxBinding1008,
  _flaxBinding441,
  _Vector2_normalizeInto,
);
const _flaxBinding1010 = FlaxInstanceMethod(
  _flaxBinding463,
  _flaxBinding448,
  _Vector2_distanceTo,
);
const _flaxBinding1011 = FlaxInstanceMethod(
  _flaxBinding463,
  _flaxBinding448,
  _Vector2_distanceToSquared,
);
const _flaxBinding1012 = FlaxInstanceMethod(
  _flaxBinding1001,
  _flaxBinding448,
  _Vector2_angleTo,
);
const _flaxBinding1013 = FlaxInstanceMethod(
  _flaxBinding1001,
  _flaxBinding448,
  _Vector2_angleToSigned,
);
const _flaxBinding1014 = FlaxInstanceMethod(
  _flaxBinding1001,
  _flaxBinding448,
  _Vector2_dot,
);
const _flaxBinding1015 = FlaxInstanceMethod(
  _flaxBinding457,
  _flaxBinding70,
  _Vector2_postmultiply,
);
const _flaxBinding1016 = FlaxInstanceMethod(
  _flaxBinding1001,
  _flaxBinding448,
  _Vector2_cross,
);
const _flaxBinding1017 = <FlaxParameter>[
  FlaxParameter("scale", _flaxBinding448, required: true),
  FlaxParameter("out", _flaxBinding441, required: true),
];
const _flaxBinding1018 = FlaxInstanceMethod(
  _flaxBinding1017,
  _flaxBinding441,
  _Vector2_scaleOrthogonalInto,
);
const _flaxBinding1019 = <FlaxParameter>[
  FlaxParameter("normal", _flaxBinding441, required: true),
];
const _flaxBinding1020 = FlaxInstanceMethod(
  _flaxBinding1019,
  _flaxBinding70,
  _Vector2_reflect,
);
const _flaxBinding1021 = FlaxInstanceMethod(
  _flaxBinding1019,
  _flaxBinding441,
  _Vector2_reflected,
);
const _flaxBinding1022 = <FlaxParameter>[
  FlaxParameter("correct", _flaxBinding441, required: true),
];
const _flaxBinding1023 = FlaxInstanceMethod(
  _flaxBinding1022,
  _flaxBinding448,
  _Vector2_relativeError,
);
const _flaxBinding1024 = FlaxInstanceMethod(
  _flaxBinding1022,
  _flaxBinding448,
  _Vector2_absoluteError,
);
const _flaxBinding1025 = FlaxInstanceMethod(
  _flaxBinding463,
  _flaxBinding70,
  _Vector2_add,
);
const _flaxBinding1026 = <FlaxParameter>[
  FlaxParameter("arg", _flaxBinding441, required: true),
  FlaxParameter("factor", _flaxBinding448, required: true),
];
const _flaxBinding1027 = FlaxInstanceMethod(
  _flaxBinding1026,
  _flaxBinding70,
  _Vector2_addScaled,
);
const _flaxBinding1028 = FlaxInstanceMethod(
  _flaxBinding463,
  _flaxBinding70,
  _Vector2_sub,
);
const _flaxBinding1029 = FlaxInstanceMethod(
  _flaxBinding463,
  _flaxBinding70,
  _Vector2_multiply,
);
const _flaxBinding1030 = FlaxInstanceMethod(
  _flaxBinding463,
  _flaxBinding70,
  _Vector2_divide,
);
const _flaxBinding1031 = FlaxInstanceMethod(
  _flaxBinding461,
  _flaxBinding70,
  _Vector2_scale,
);
const _flaxBinding1032 = FlaxInstanceMethod(
  _flaxBinding461,
  _flaxBinding441,
  _Vector2_scaled,
);
const _flaxBinding1033 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding70,
  _Vector2_negate,
);
const _flaxBinding1034 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding70,
  _Vector2_absolute,
);
const _flaxBinding1035 = <FlaxParameter>[
  FlaxParameter("min", _flaxBinding441, required: true),
  FlaxParameter("max", _flaxBinding441, required: true),
];
const _flaxBinding1036 = FlaxInstanceMethod(
  _flaxBinding1035,
  _flaxBinding70,
  _Vector2_clamp,
);
const _flaxBinding1037 = <FlaxParameter>[
  FlaxParameter("min", _flaxBinding448, required: true),
  FlaxParameter("max", _flaxBinding448, required: true),
];
const _flaxBinding1038 = FlaxInstanceMethod(
  _flaxBinding1037,
  _flaxBinding70,
  _Vector2_clampScalar,
);
const _flaxBinding1039 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding70,
  _Vector2_floor,
);
const _flaxBinding1040 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding70,
  _Vector2_ceil,
);
const _flaxBinding1041 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding70,
  _Vector2_round,
);
const _flaxBinding1042 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding70,
  _Vector2_roundToZero,
);
const _flaxBinding1043 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding441,
  _Vector2_clone,
);
const _flaxBinding1044 = FlaxInstanceMethod(
  _flaxBinding463,
  _flaxBinding441,
  _Vector2_copyInto,
);
const _flaxBinding1045 = FlaxInstanceMethod(
  _flaxBinding518,
  _flaxBinding70,
  _Vector2_copyIntoArray,
);
const _flaxBinding1046 = FlaxInstanceMethod(
  _flaxBinding518,
  _flaxBinding70,
  _Vector2_copyFromArray,
);
const _flaxBinding1047 = FlaxInstanceMethod(
  _flaxBinding520,
  _flaxBinding448,
  _Vector2_operatorGetIndex,
);
const _flaxBinding1048 = FlaxInstanceMethod(
  _flaxBinding522,
  _flaxBinding70,
  _Vector2_operatorSetIndex,
);
const _flaxBinding1049 = FlaxInstanceMethod(
  _flaxBinding1001,
  _flaxBinding441,
  _Vector2_operatorAdd,
);
const _flaxBinding1050 = FlaxInstanceMethod(
  _flaxBinding1001,
  _flaxBinding441,
  _Vector2_operatorSubtract,
);
const _flaxBinding1051 = FlaxInstanceMethod(
  _flaxBinding495,
  _flaxBinding441,
  _Vector2_operatorMultiply,
);
const _flaxBinding1052 = FlaxInstanceMethod(
  _flaxBinding495,
  _flaxBinding441,
  _Vector2_operatorDivide,
);
const _flaxBinding1053 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding441,
  _Vector2_operatorNegate,
);
const _flaxBinding1054 = <FlaxParameter>[
  FlaxParameter("x", _flaxBinding448, required: true),
  FlaxParameter("y", _flaxBinding448, required: true),
];
const _flaxBinding1055 = <FlaxParameter>[
  FlaxParameter("value", _flaxBinding448, required: true),
];
const _flaxBinding1056 = <FlaxParameter>[
  FlaxParameter("_v2storage", _flaxBinding438, required: true),
];
const _flaxBinding1057 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:Vector2",
  [
    _flaxBinding889,
    _flaxBinding890,
    _flaxBinding891,
    _flaxBinding892,
    _flaxBinding893,
    _flaxBinding894,
    _flaxBinding895,
    _flaxBinding896,
    _flaxBinding897,
    _flaxBinding898,
    _flaxBinding899,
    _flaxBinding900,
    _flaxBinding901,
    _flaxBinding902,
    _flaxBinding903,
    _flaxBinding904,
    _flaxBinding905,
    _flaxBinding907,
    _flaxBinding908,
    _flaxBinding909,
    _flaxBinding910,
    _flaxBinding911,
    _flaxBinding912,
    _flaxBinding913,
    _flaxBinding914,
    _flaxBinding915,
    _flaxBinding916,
    _flaxBinding917,
    _flaxBinding918,
    _flaxBinding919,
    _flaxBinding920,
    _flaxBinding921,
    _flaxBinding922,
    _flaxBinding923,
    _flaxBinding924,
    _flaxBinding925,
    _flaxBinding926,
    _flaxBinding927,
    _flaxBinding928,
    _flaxBinding929,
    _flaxBinding930,
    _flaxBinding931,
    _flaxBinding932,
    _flaxBinding933,
    _flaxBinding934,
    _flaxBinding935,
    _flaxBinding936,
    _flaxBinding937,
    _flaxBinding938,
    _flaxBinding939,
    _flaxBinding940,
    _flaxBinding941,
    _flaxBinding942,
    _flaxBinding943,
    _flaxBinding944,
    _flaxBinding945,
    _flaxBinding946,
    _flaxBinding947,
    _flaxBinding948,
    _flaxBinding949,
    _flaxBinding950,
    _flaxBinding951,
    _flaxBinding952,
    _flaxBinding953,
    _flaxBinding954,
    _flaxBinding955,
    _flaxBinding956,
    _flaxBinding957,
    _flaxBinding958,
    _flaxBinding959,
    _flaxBinding960,
    _flaxBinding961,
    _flaxBinding962,
    _flaxBinding963,
    _flaxBinding964,
    _flaxBinding965,
    _flaxBinding966,
    _flaxBinding967,
    _flaxBinding968,
    _flaxBinding969,
    _flaxBinding970,
    _flaxBinding971,
    _flaxBinding972,
    _flaxBinding973,
    _flaxBinding974,
    _flaxBinding975,
    _flaxBinding976,
    _flaxBinding977,
    _flaxBinding978,
    _flaxBinding979,
    _flaxBinding980,
    _flaxBinding981,
    _flaxBinding982,
    _flaxBinding983,
    _flaxBinding984,
  ],
  {
    "setValues": _flaxBinding999,
    "setZero": _flaxBinding1000,
    "setFrom": _flaxBinding1002,
    "splat": _flaxBinding1003,
    "toString": _flaxBinding1004,
    "normalize": _flaxBinding1005,
    "normalizeLength": _flaxBinding1006,
    "normalized": _flaxBinding1007,
    "normalizeInto": _flaxBinding1009,
    "distanceTo": _flaxBinding1010,
    "distanceToSquared": _flaxBinding1011,
    "angleTo": _flaxBinding1012,
    "angleToSigned": _flaxBinding1013,
    "dot": _flaxBinding1014,
    "postmultiply": _flaxBinding1015,
    "cross": _flaxBinding1016,
    "scaleOrthogonalInto": _flaxBinding1018,
    "reflect": _flaxBinding1020,
    "reflected": _flaxBinding1021,
    "relativeError": _flaxBinding1023,
    "absoluteError": _flaxBinding1024,
    "add": _flaxBinding1025,
    "addScaled": _flaxBinding1027,
    "sub": _flaxBinding1028,
    "multiply": _flaxBinding1029,
    "divide": _flaxBinding1030,
    "scale": _flaxBinding1031,
    "scaled": _flaxBinding1032,
    "negate": _flaxBinding1033,
    "absolute": _flaxBinding1034,
    "clamp": _flaxBinding1036,
    "clampScalar": _flaxBinding1038,
    "floor": _flaxBinding1039,
    "ceil": _flaxBinding1040,
    "round": _flaxBinding1041,
    "roundToZero": _flaxBinding1042,
    "clone": _flaxBinding1043,
    "copyInto": _flaxBinding1044,
    "copyIntoArray": _flaxBinding1045,
    "copyFromArray": _flaxBinding1046,
    "operatorGetIndex": _flaxBinding1047,
    "operatorSetIndex": _flaxBinding1048,
    "operatorAdd": _flaxBinding1049,
    "operatorSubtract": _flaxBinding1050,
    "operatorMultiply": _flaxBinding1051,
    "operatorDivide": _flaxBinding1052,
    "operatorNegate": _flaxBinding1053,
  },
  constructors: {
    "": _flaxBinding1054,
    "array": _flaxBinding518,
    "zero": _flaxBinding42,
    "all": _flaxBinding1055,
    "copy": _flaxBinding1001,
    "fromFloat64List": _flaxBinding1056,
    "fromBuffer": _flaxBinding702,
  },
  create: _createVector2,
  matches: _isVector2,
  setters: [
    _flaxBinding985,
    _flaxBinding986,
    _flaxBinding987,
    _flaxBinding988,
    _flaxBinding989,
    _flaxBinding990,
    _flaxBinding991,
    _flaxBinding992,
    _flaxBinding993,
    _flaxBinding994,
    _flaxBinding995,
    _flaxBinding996,
    _flaxBinding997,
  ],
  supertypes: [
    "dart:core::Object",
    "package:vector_math/vector_math_64.dart::Vector",
  ],
);
const _flaxBinding1058 = FlaxGetter(
  "storage",
  _flaxBinding438,
  _Vector3_storage,
);
const _flaxBinding1059 = FlaxGetter("length", _flaxBinding448, _Vector3_length);
const _flaxBinding1060 = FlaxGetter(
  "length2",
  _flaxBinding448,
  _Vector3_length2,
);
const _flaxBinding1061 = FlaxGetter(
  "isInfinite",
  _flaxBinding20,
  _Vector3_isInfinite,
);
const _flaxBinding1062 = FlaxGetter("isNaN", _flaxBinding20, _Vector3_isNaN);
const _flaxBinding1063 = FlaxGetter("xx", _flaxBinding441, _Vector3_xx);
const _flaxBinding1064 = FlaxGetter("xy", _flaxBinding441, _Vector3_xy);
const _flaxBinding1065 = FlaxGetter("xz", _flaxBinding441, _Vector3_xz);
const _flaxBinding1066 = FlaxGetter("yx", _flaxBinding441, _Vector3_yx);
const _flaxBinding1067 = FlaxGetter("yy", _flaxBinding441, _Vector3_yy);
const _flaxBinding1068 = FlaxGetter("yz", _flaxBinding441, _Vector3_yz);
const _flaxBinding1069 = FlaxGetter("zx", _flaxBinding441, _Vector3_zx);
const _flaxBinding1070 = FlaxGetter("zy", _flaxBinding441, _Vector3_zy);
const _flaxBinding1071 = FlaxGetter("zz", _flaxBinding441, _Vector3_zz);
const _flaxBinding1072 = FlaxGetter("xxx", _flaxBinding534, _Vector3_xxx);
const _flaxBinding1073 = FlaxGetter("xxy", _flaxBinding534, _Vector3_xxy);
const _flaxBinding1074 = FlaxGetter("xxz", _flaxBinding534, _Vector3_xxz);
const _flaxBinding1075 = FlaxGetter("xyx", _flaxBinding534, _Vector3_xyx);
const _flaxBinding1076 = FlaxGetter("xyy", _flaxBinding534, _Vector3_xyy);
const _flaxBinding1077 = FlaxGetter("xyz", _flaxBinding534, _Vector3_xyz);
const _flaxBinding1078 = FlaxGetter("xzx", _flaxBinding534, _Vector3_xzx);
const _flaxBinding1079 = FlaxGetter("xzy", _flaxBinding534, _Vector3_xzy);
const _flaxBinding1080 = FlaxGetter("xzz", _flaxBinding534, _Vector3_xzz);
const _flaxBinding1081 = FlaxGetter("yxx", _flaxBinding534, _Vector3_yxx);
const _flaxBinding1082 = FlaxGetter("yxy", _flaxBinding534, _Vector3_yxy);
const _flaxBinding1083 = FlaxGetter("yxz", _flaxBinding534, _Vector3_yxz);
const _flaxBinding1084 = FlaxGetter("yyx", _flaxBinding534, _Vector3_yyx);
const _flaxBinding1085 = FlaxGetter("yyy", _flaxBinding534, _Vector3_yyy);
const _flaxBinding1086 = FlaxGetter("yyz", _flaxBinding534, _Vector3_yyz);
const _flaxBinding1087 = FlaxGetter("yzx", _flaxBinding534, _Vector3_yzx);
const _flaxBinding1088 = FlaxGetter("yzy", _flaxBinding534, _Vector3_yzy);
const _flaxBinding1089 = FlaxGetter("yzz", _flaxBinding534, _Vector3_yzz);
const _flaxBinding1090 = FlaxGetter("zxx", _flaxBinding534, _Vector3_zxx);
const _flaxBinding1091 = FlaxGetter("zxy", _flaxBinding534, _Vector3_zxy);
const _flaxBinding1092 = FlaxGetter("zxz", _flaxBinding534, _Vector3_zxz);
const _flaxBinding1093 = FlaxGetter("zyx", _flaxBinding534, _Vector3_zyx);
const _flaxBinding1094 = FlaxGetter("zyy", _flaxBinding534, _Vector3_zyy);
const _flaxBinding1095 = FlaxGetter("zyz", _flaxBinding534, _Vector3_zyz);
const _flaxBinding1096 = FlaxGetter("zzx", _flaxBinding534, _Vector3_zzx);
const _flaxBinding1097 = FlaxGetter("zzy", _flaxBinding534, _Vector3_zzy);
const _flaxBinding1098 = FlaxGetter("zzz", _flaxBinding534, _Vector3_zzz);
const _flaxBinding1099 = FlaxGetter("xxxx", _flaxBinding906, _Vector3_xxxx);
const _flaxBinding1100 = FlaxGetter("xxxy", _flaxBinding906, _Vector3_xxxy);
const _flaxBinding1101 = FlaxGetter("xxxz", _flaxBinding906, _Vector3_xxxz);
const _flaxBinding1102 = FlaxGetter("xxyx", _flaxBinding906, _Vector3_xxyx);
const _flaxBinding1103 = FlaxGetter("xxyy", _flaxBinding906, _Vector3_xxyy);
const _flaxBinding1104 = FlaxGetter("xxyz", _flaxBinding906, _Vector3_xxyz);
const _flaxBinding1105 = FlaxGetter("xxzx", _flaxBinding906, _Vector3_xxzx);
const _flaxBinding1106 = FlaxGetter("xxzy", _flaxBinding906, _Vector3_xxzy);
const _flaxBinding1107 = FlaxGetter("xxzz", _flaxBinding906, _Vector3_xxzz);
const _flaxBinding1108 = FlaxGetter("xyxx", _flaxBinding906, _Vector3_xyxx);
const _flaxBinding1109 = FlaxGetter("xyxy", _flaxBinding906, _Vector3_xyxy);
const _flaxBinding1110 = FlaxGetter("xyxz", _flaxBinding906, _Vector3_xyxz);
const _flaxBinding1111 = FlaxGetter("xyyx", _flaxBinding906, _Vector3_xyyx);
const _flaxBinding1112 = FlaxGetter("xyyy", _flaxBinding906, _Vector3_xyyy);
const _flaxBinding1113 = FlaxGetter("xyyz", _flaxBinding906, _Vector3_xyyz);
const _flaxBinding1114 = FlaxGetter("xyzx", _flaxBinding906, _Vector3_xyzx);
const _flaxBinding1115 = FlaxGetter("xyzy", _flaxBinding906, _Vector3_xyzy);
const _flaxBinding1116 = FlaxGetter("xyzz", _flaxBinding906, _Vector3_xyzz);
const _flaxBinding1117 = FlaxGetter("xzxx", _flaxBinding906, _Vector3_xzxx);
const _flaxBinding1118 = FlaxGetter("xzxy", _flaxBinding906, _Vector3_xzxy);
const _flaxBinding1119 = FlaxGetter("xzxz", _flaxBinding906, _Vector3_xzxz);
const _flaxBinding1120 = FlaxGetter("xzyx", _flaxBinding906, _Vector3_xzyx);
const _flaxBinding1121 = FlaxGetter("xzyy", _flaxBinding906, _Vector3_xzyy);
const _flaxBinding1122 = FlaxGetter("xzyz", _flaxBinding906, _Vector3_xzyz);
const _flaxBinding1123 = FlaxGetter("xzzx", _flaxBinding906, _Vector3_xzzx);
const _flaxBinding1124 = FlaxGetter("xzzy", _flaxBinding906, _Vector3_xzzy);
const _flaxBinding1125 = FlaxGetter("xzzz", _flaxBinding906, _Vector3_xzzz);
const _flaxBinding1126 = FlaxGetter("yxxx", _flaxBinding906, _Vector3_yxxx);
const _flaxBinding1127 = FlaxGetter("yxxy", _flaxBinding906, _Vector3_yxxy);
const _flaxBinding1128 = FlaxGetter("yxxz", _flaxBinding906, _Vector3_yxxz);
const _flaxBinding1129 = FlaxGetter("yxyx", _flaxBinding906, _Vector3_yxyx);
const _flaxBinding1130 = FlaxGetter("yxyy", _flaxBinding906, _Vector3_yxyy);
const _flaxBinding1131 = FlaxGetter("yxyz", _flaxBinding906, _Vector3_yxyz);
const _flaxBinding1132 = FlaxGetter("yxzx", _flaxBinding906, _Vector3_yxzx);
const _flaxBinding1133 = FlaxGetter("yxzy", _flaxBinding906, _Vector3_yxzy);
const _flaxBinding1134 = FlaxGetter("yxzz", _flaxBinding906, _Vector3_yxzz);
const _flaxBinding1135 = FlaxGetter("yyxx", _flaxBinding906, _Vector3_yyxx);
const _flaxBinding1136 = FlaxGetter("yyxy", _flaxBinding906, _Vector3_yyxy);
const _flaxBinding1137 = FlaxGetter("yyxz", _flaxBinding906, _Vector3_yyxz);
const _flaxBinding1138 = FlaxGetter("yyyx", _flaxBinding906, _Vector3_yyyx);
const _flaxBinding1139 = FlaxGetter("yyyy", _flaxBinding906, _Vector3_yyyy);
const _flaxBinding1140 = FlaxGetter("yyyz", _flaxBinding906, _Vector3_yyyz);
const _flaxBinding1141 = FlaxGetter("yyzx", _flaxBinding906, _Vector3_yyzx);
const _flaxBinding1142 = FlaxGetter("yyzy", _flaxBinding906, _Vector3_yyzy);
const _flaxBinding1143 = FlaxGetter("yyzz", _flaxBinding906, _Vector3_yyzz);
const _flaxBinding1144 = FlaxGetter("yzxx", _flaxBinding906, _Vector3_yzxx);
const _flaxBinding1145 = FlaxGetter("yzxy", _flaxBinding906, _Vector3_yzxy);
const _flaxBinding1146 = FlaxGetter("yzxz", _flaxBinding906, _Vector3_yzxz);
const _flaxBinding1147 = FlaxGetter("yzyx", _flaxBinding906, _Vector3_yzyx);
const _flaxBinding1148 = FlaxGetter("yzyy", _flaxBinding906, _Vector3_yzyy);
const _flaxBinding1149 = FlaxGetter("yzyz", _flaxBinding906, _Vector3_yzyz);
const _flaxBinding1150 = FlaxGetter("yzzx", _flaxBinding906, _Vector3_yzzx);
const _flaxBinding1151 = FlaxGetter("yzzy", _flaxBinding906, _Vector3_yzzy);
const _flaxBinding1152 = FlaxGetter("yzzz", _flaxBinding906, _Vector3_yzzz);
const _flaxBinding1153 = FlaxGetter("zxxx", _flaxBinding906, _Vector3_zxxx);
const _flaxBinding1154 = FlaxGetter("zxxy", _flaxBinding906, _Vector3_zxxy);
const _flaxBinding1155 = FlaxGetter("zxxz", _flaxBinding906, _Vector3_zxxz);
const _flaxBinding1156 = FlaxGetter("zxyx", _flaxBinding906, _Vector3_zxyx);
const _flaxBinding1157 = FlaxGetter("zxyy", _flaxBinding906, _Vector3_zxyy);
const _flaxBinding1158 = FlaxGetter("zxyz", _flaxBinding906, _Vector3_zxyz);
const _flaxBinding1159 = FlaxGetter("zxzx", _flaxBinding906, _Vector3_zxzx);
const _flaxBinding1160 = FlaxGetter("zxzy", _flaxBinding906, _Vector3_zxzy);
const _flaxBinding1161 = FlaxGetter("zxzz", _flaxBinding906, _Vector3_zxzz);
const _flaxBinding1162 = FlaxGetter("zyxx", _flaxBinding906, _Vector3_zyxx);
const _flaxBinding1163 = FlaxGetter("zyxy", _flaxBinding906, _Vector3_zyxy);
const _flaxBinding1164 = FlaxGetter("zyxz", _flaxBinding906, _Vector3_zyxz);
const _flaxBinding1165 = FlaxGetter("zyyx", _flaxBinding906, _Vector3_zyyx);
const _flaxBinding1166 = FlaxGetter("zyyy", _flaxBinding906, _Vector3_zyyy);
const _flaxBinding1167 = FlaxGetter("zyyz", _flaxBinding906, _Vector3_zyyz);
const _flaxBinding1168 = FlaxGetter("zyzx", _flaxBinding906, _Vector3_zyzx);
const _flaxBinding1169 = FlaxGetter("zyzy", _flaxBinding906, _Vector3_zyzy);
const _flaxBinding1170 = FlaxGetter("zyzz", _flaxBinding906, _Vector3_zyzz);
const _flaxBinding1171 = FlaxGetter("zzxx", _flaxBinding906, _Vector3_zzxx);
const _flaxBinding1172 = FlaxGetter("zzxy", _flaxBinding906, _Vector3_zzxy);
const _flaxBinding1173 = FlaxGetter("zzxz", _flaxBinding906, _Vector3_zzxz);
const _flaxBinding1174 = FlaxGetter("zzyx", _flaxBinding906, _Vector3_zzyx);
const _flaxBinding1175 = FlaxGetter("zzyy", _flaxBinding906, _Vector3_zzyy);
const _flaxBinding1176 = FlaxGetter("zzyz", _flaxBinding906, _Vector3_zzyz);
const _flaxBinding1177 = FlaxGetter("zzzx", _flaxBinding906, _Vector3_zzzx);
const _flaxBinding1178 = FlaxGetter("zzzy", _flaxBinding906, _Vector3_zzzy);
const _flaxBinding1179 = FlaxGetter("zzzz", _flaxBinding906, _Vector3_zzzz);
const _flaxBinding1180 = FlaxGetter("r", _flaxBinding448, _Vector3_r);
const _flaxBinding1181 = FlaxGetter("g", _flaxBinding448, _Vector3_g);
const _flaxBinding1182 = FlaxGetter("b", _flaxBinding448, _Vector3_b);
const _flaxBinding1183 = FlaxGetter("s", _flaxBinding448, _Vector3_s);
const _flaxBinding1184 = FlaxGetter("t", _flaxBinding448, _Vector3_t);
const _flaxBinding1185 = FlaxGetter("p", _flaxBinding448, _Vector3_p);
const _flaxBinding1186 = FlaxGetter("x", _flaxBinding448, _Vector3_x);
const _flaxBinding1187 = FlaxGetter("y", _flaxBinding448, _Vector3_y);
const _flaxBinding1188 = FlaxGetter("z", _flaxBinding448, _Vector3_z);
const _flaxBinding1189 = FlaxGetter("rr", _flaxBinding441, _Vector3_rr);
const _flaxBinding1190 = FlaxGetter("rg", _flaxBinding441, _Vector3_rg);
const _flaxBinding1191 = FlaxGetter("rb", _flaxBinding441, _Vector3_rb);
const _flaxBinding1192 = FlaxGetter("gr", _flaxBinding441, _Vector3_gr);
const _flaxBinding1193 = FlaxGetter("gg", _flaxBinding441, _Vector3_gg);
const _flaxBinding1194 = FlaxGetter("gb", _flaxBinding441, _Vector3_gb);
const _flaxBinding1195 = FlaxGetter("br", _flaxBinding441, _Vector3_br);
const _flaxBinding1196 = FlaxGetter("bg", _flaxBinding441, _Vector3_bg);
const _flaxBinding1197 = FlaxGetter("bb", _flaxBinding441, _Vector3_bb);
const _flaxBinding1198 = FlaxGetter("rrr", _flaxBinding534, _Vector3_rrr);
const _flaxBinding1199 = FlaxGetter("rrg", _flaxBinding534, _Vector3_rrg);
const _flaxBinding1200 = FlaxGetter("rrb", _flaxBinding534, _Vector3_rrb);
const _flaxBinding1201 = FlaxGetter("rgr", _flaxBinding534, _Vector3_rgr);
const _flaxBinding1202 = FlaxGetter("rgg", _flaxBinding534, _Vector3_rgg);
const _flaxBinding1203 = FlaxGetter("rgb", _flaxBinding534, _Vector3_rgb);
const _flaxBinding1204 = FlaxGetter("rbr", _flaxBinding534, _Vector3_rbr);
const _flaxBinding1205 = FlaxGetter("rbg", _flaxBinding534, _Vector3_rbg);
const _flaxBinding1206 = FlaxGetter("rbb", _flaxBinding534, _Vector3_rbb);
const _flaxBinding1207 = FlaxGetter("grr", _flaxBinding534, _Vector3_grr);
const _flaxBinding1208 = FlaxGetter("grg", _flaxBinding534, _Vector3_grg);
const _flaxBinding1209 = FlaxGetter("grb", _flaxBinding534, _Vector3_grb);
const _flaxBinding1210 = FlaxGetter("ggr", _flaxBinding534, _Vector3_ggr);
const _flaxBinding1211 = FlaxGetter("ggg", _flaxBinding534, _Vector3_ggg);
const _flaxBinding1212 = FlaxGetter("ggb", _flaxBinding534, _Vector3_ggb);
const _flaxBinding1213 = FlaxGetter("gbr", _flaxBinding534, _Vector3_gbr);
const _flaxBinding1214 = FlaxGetter("gbg", _flaxBinding534, _Vector3_gbg);
const _flaxBinding1215 = FlaxGetter("gbb", _flaxBinding534, _Vector3_gbb);
const _flaxBinding1216 = FlaxGetter("brr", _flaxBinding534, _Vector3_brr);
const _flaxBinding1217 = FlaxGetter("brg", _flaxBinding534, _Vector3_brg);
const _flaxBinding1218 = FlaxGetter("brb", _flaxBinding534, _Vector3_brb);
const _flaxBinding1219 = FlaxGetter("bgr", _flaxBinding534, _Vector3_bgr);
const _flaxBinding1220 = FlaxGetter("bgg", _flaxBinding534, _Vector3_bgg);
const _flaxBinding1221 = FlaxGetter("bgb", _flaxBinding534, _Vector3_bgb);
const _flaxBinding1222 = FlaxGetter("bbr", _flaxBinding534, _Vector3_bbr);
const _flaxBinding1223 = FlaxGetter("bbg", _flaxBinding534, _Vector3_bbg);
const _flaxBinding1224 = FlaxGetter("bbb", _flaxBinding534, _Vector3_bbb);
const _flaxBinding1225 = FlaxGetter("rrrr", _flaxBinding906, _Vector3_rrrr);
const _flaxBinding1226 = FlaxGetter("rrrg", _flaxBinding906, _Vector3_rrrg);
const _flaxBinding1227 = FlaxGetter("rrrb", _flaxBinding906, _Vector3_rrrb);
const _flaxBinding1228 = FlaxGetter("rrgr", _flaxBinding906, _Vector3_rrgr);
const _flaxBinding1229 = FlaxGetter("rrgg", _flaxBinding906, _Vector3_rrgg);
const _flaxBinding1230 = FlaxGetter("rrgb", _flaxBinding906, _Vector3_rrgb);
const _flaxBinding1231 = FlaxGetter("rrbr", _flaxBinding906, _Vector3_rrbr);
const _flaxBinding1232 = FlaxGetter("rrbg", _flaxBinding906, _Vector3_rrbg);
const _flaxBinding1233 = FlaxGetter("rrbb", _flaxBinding906, _Vector3_rrbb);
const _flaxBinding1234 = FlaxGetter("rgrr", _flaxBinding906, _Vector3_rgrr);
const _flaxBinding1235 = FlaxGetter("rgrg", _flaxBinding906, _Vector3_rgrg);
const _flaxBinding1236 = FlaxGetter("rgrb", _flaxBinding906, _Vector3_rgrb);
const _flaxBinding1237 = FlaxGetter("rggr", _flaxBinding906, _Vector3_rggr);
const _flaxBinding1238 = FlaxGetter("rggg", _flaxBinding906, _Vector3_rggg);
const _flaxBinding1239 = FlaxGetter("rggb", _flaxBinding906, _Vector3_rggb);
const _flaxBinding1240 = FlaxGetter("rgbr", _flaxBinding906, _Vector3_rgbr);
const _flaxBinding1241 = FlaxGetter("rgbg", _flaxBinding906, _Vector3_rgbg);
const _flaxBinding1242 = FlaxGetter("rgbb", _flaxBinding906, _Vector3_rgbb);
const _flaxBinding1243 = FlaxGetter("rbrr", _flaxBinding906, _Vector3_rbrr);
const _flaxBinding1244 = FlaxGetter("rbrg", _flaxBinding906, _Vector3_rbrg);
const _flaxBinding1245 = FlaxGetter("rbrb", _flaxBinding906, _Vector3_rbrb);
const _flaxBinding1246 = FlaxGetter("rbgr", _flaxBinding906, _Vector3_rbgr);
const _flaxBinding1247 = FlaxGetter("rbgg", _flaxBinding906, _Vector3_rbgg);
const _flaxBinding1248 = FlaxGetter("rbgb", _flaxBinding906, _Vector3_rbgb);
const _flaxBinding1249 = FlaxGetter("rbbr", _flaxBinding906, _Vector3_rbbr);
const _flaxBinding1250 = FlaxGetter("rbbg", _flaxBinding906, _Vector3_rbbg);
const _flaxBinding1251 = FlaxGetter("rbbb", _flaxBinding906, _Vector3_rbbb);
const _flaxBinding1252 = FlaxGetter("grrr", _flaxBinding906, _Vector3_grrr);
const _flaxBinding1253 = FlaxGetter("grrg", _flaxBinding906, _Vector3_grrg);
const _flaxBinding1254 = FlaxGetter("grrb", _flaxBinding906, _Vector3_grrb);
const _flaxBinding1255 = FlaxGetter("grgr", _flaxBinding906, _Vector3_grgr);
const _flaxBinding1256 = FlaxGetter("grgg", _flaxBinding906, _Vector3_grgg);
const _flaxBinding1257 = FlaxGetter("grgb", _flaxBinding906, _Vector3_grgb);
const _flaxBinding1258 = FlaxGetter("grbr", _flaxBinding906, _Vector3_grbr);
const _flaxBinding1259 = FlaxGetter("grbg", _flaxBinding906, _Vector3_grbg);
const _flaxBinding1260 = FlaxGetter("grbb", _flaxBinding906, _Vector3_grbb);
const _flaxBinding1261 = FlaxGetter("ggrr", _flaxBinding906, _Vector3_ggrr);
const _flaxBinding1262 = FlaxGetter("ggrg", _flaxBinding906, _Vector3_ggrg);
const _flaxBinding1263 = FlaxGetter("ggrb", _flaxBinding906, _Vector3_ggrb);
const _flaxBinding1264 = FlaxGetter("gggr", _flaxBinding906, _Vector3_gggr);
const _flaxBinding1265 = FlaxGetter("gggg", _flaxBinding906, _Vector3_gggg);
const _flaxBinding1266 = FlaxGetter("gggb", _flaxBinding906, _Vector3_gggb);
const _flaxBinding1267 = FlaxGetter("ggbr", _flaxBinding906, _Vector3_ggbr);
const _flaxBinding1268 = FlaxGetter("ggbg", _flaxBinding906, _Vector3_ggbg);
const _flaxBinding1269 = FlaxGetter("ggbb", _flaxBinding906, _Vector3_ggbb);
const _flaxBinding1270 = FlaxGetter("gbrr", _flaxBinding906, _Vector3_gbrr);
const _flaxBinding1271 = FlaxGetter("gbrg", _flaxBinding906, _Vector3_gbrg);
const _flaxBinding1272 = FlaxGetter("gbrb", _flaxBinding906, _Vector3_gbrb);
const _flaxBinding1273 = FlaxGetter("gbgr", _flaxBinding906, _Vector3_gbgr);
const _flaxBinding1274 = FlaxGetter("gbgg", _flaxBinding906, _Vector3_gbgg);
const _flaxBinding1275 = FlaxGetter("gbgb", _flaxBinding906, _Vector3_gbgb);
const _flaxBinding1276 = FlaxGetter("gbbr", _flaxBinding906, _Vector3_gbbr);
const _flaxBinding1277 = FlaxGetter("gbbg", _flaxBinding906, _Vector3_gbbg);
const _flaxBinding1278 = FlaxGetter("gbbb", _flaxBinding906, _Vector3_gbbb);
const _flaxBinding1279 = FlaxGetter("brrr", _flaxBinding906, _Vector3_brrr);
const _flaxBinding1280 = FlaxGetter("brrg", _flaxBinding906, _Vector3_brrg);
const _flaxBinding1281 = FlaxGetter("brrb", _flaxBinding906, _Vector3_brrb);
const _flaxBinding1282 = FlaxGetter("brgr", _flaxBinding906, _Vector3_brgr);
const _flaxBinding1283 = FlaxGetter("brgg", _flaxBinding906, _Vector3_brgg);
const _flaxBinding1284 = FlaxGetter("brgb", _flaxBinding906, _Vector3_brgb);
const _flaxBinding1285 = FlaxGetter("brbr", _flaxBinding906, _Vector3_brbr);
const _flaxBinding1286 = FlaxGetter("brbg", _flaxBinding906, _Vector3_brbg);
const _flaxBinding1287 = FlaxGetter("brbb", _flaxBinding906, _Vector3_brbb);
const _flaxBinding1288 = FlaxGetter("bgrr", _flaxBinding906, _Vector3_bgrr);
const _flaxBinding1289 = FlaxGetter("bgrg", _flaxBinding906, _Vector3_bgrg);
const _flaxBinding1290 = FlaxGetter("bgrb", _flaxBinding906, _Vector3_bgrb);
const _flaxBinding1291 = FlaxGetter("bggr", _flaxBinding906, _Vector3_bggr);
const _flaxBinding1292 = FlaxGetter("bggg", _flaxBinding906, _Vector3_bggg);
const _flaxBinding1293 = FlaxGetter("bggb", _flaxBinding906, _Vector3_bggb);
const _flaxBinding1294 = FlaxGetter("bgbr", _flaxBinding906, _Vector3_bgbr);
const _flaxBinding1295 = FlaxGetter("bgbg", _flaxBinding906, _Vector3_bgbg);
const _flaxBinding1296 = FlaxGetter("bgbb", _flaxBinding906, _Vector3_bgbb);
const _flaxBinding1297 = FlaxGetter("bbrr", _flaxBinding906, _Vector3_bbrr);
const _flaxBinding1298 = FlaxGetter("bbrg", _flaxBinding906, _Vector3_bbrg);
const _flaxBinding1299 = FlaxGetter("bbrb", _flaxBinding906, _Vector3_bbrb);
const _flaxBinding1300 = FlaxGetter("bbgr", _flaxBinding906, _Vector3_bbgr);
const _flaxBinding1301 = FlaxGetter("bbgg", _flaxBinding906, _Vector3_bbgg);
const _flaxBinding1302 = FlaxGetter("bbgb", _flaxBinding906, _Vector3_bbgb);
const _flaxBinding1303 = FlaxGetter("bbbr", _flaxBinding906, _Vector3_bbbr);
const _flaxBinding1304 = FlaxGetter("bbbg", _flaxBinding906, _Vector3_bbbg);
const _flaxBinding1305 = FlaxGetter("bbbb", _flaxBinding906, _Vector3_bbbb);
const _flaxBinding1306 = FlaxGetter("ss", _flaxBinding441, _Vector3_ss);
const _flaxBinding1307 = FlaxGetter("st", _flaxBinding441, _Vector3_st);
const _flaxBinding1308 = FlaxGetter("sp", _flaxBinding441, _Vector3_sp);
const _flaxBinding1309 = FlaxGetter("ts", _flaxBinding441, _Vector3_ts);
const _flaxBinding1310 = FlaxGetter("tt", _flaxBinding441, _Vector3_tt);
const _flaxBinding1311 = FlaxGetter("tp", _flaxBinding441, _Vector3_tp);
const _flaxBinding1312 = FlaxGetter("ps", _flaxBinding441, _Vector3_ps);
const _flaxBinding1313 = FlaxGetter("pt", _flaxBinding441, _Vector3_pt);
const _flaxBinding1314 = FlaxGetter("pp", _flaxBinding441, _Vector3_pp);
const _flaxBinding1315 = FlaxGetter("sss", _flaxBinding534, _Vector3_sss);
const _flaxBinding1316 = FlaxGetter("sst", _flaxBinding534, _Vector3_sst);
const _flaxBinding1317 = FlaxGetter("ssp", _flaxBinding534, _Vector3_ssp);
const _flaxBinding1318 = FlaxGetter("sts", _flaxBinding534, _Vector3_sts);
const _flaxBinding1319 = FlaxGetter("stt", _flaxBinding534, _Vector3_stt);
const _flaxBinding1320 = FlaxGetter("stp", _flaxBinding534, _Vector3_stp);
const _flaxBinding1321 = FlaxGetter("sps", _flaxBinding534, _Vector3_sps);
const _flaxBinding1322 = FlaxGetter("spt", _flaxBinding534, _Vector3_spt);
const _flaxBinding1323 = FlaxGetter("spp", _flaxBinding534, _Vector3_spp);
const _flaxBinding1324 = FlaxGetter("tss", _flaxBinding534, _Vector3_tss);
const _flaxBinding1325 = FlaxGetter("tst", _flaxBinding534, _Vector3_tst);
const _flaxBinding1326 = FlaxGetter("tsp", _flaxBinding534, _Vector3_tsp);
const _flaxBinding1327 = FlaxGetter("tts", _flaxBinding534, _Vector3_tts);
const _flaxBinding1328 = FlaxGetter("ttt", _flaxBinding534, _Vector3_ttt);
const _flaxBinding1329 = FlaxGetter("ttp", _flaxBinding534, _Vector3_ttp);
const _flaxBinding1330 = FlaxGetter("tps", _flaxBinding534, _Vector3_tps);
const _flaxBinding1331 = FlaxGetter("tpt", _flaxBinding534, _Vector3_tpt);
const _flaxBinding1332 = FlaxGetter("tpp", _flaxBinding534, _Vector3_tpp);
const _flaxBinding1333 = FlaxGetter("pss", _flaxBinding534, _Vector3_pss);
const _flaxBinding1334 = FlaxGetter("pst", _flaxBinding534, _Vector3_pst);
const _flaxBinding1335 = FlaxGetter("psp", _flaxBinding534, _Vector3_psp);
const _flaxBinding1336 = FlaxGetter("pts", _flaxBinding534, _Vector3_pts);
const _flaxBinding1337 = FlaxGetter("ptt", _flaxBinding534, _Vector3_ptt);
const _flaxBinding1338 = FlaxGetter("ptp", _flaxBinding534, _Vector3_ptp);
const _flaxBinding1339 = FlaxGetter("pps", _flaxBinding534, _Vector3_pps);
const _flaxBinding1340 = FlaxGetter("ppt", _flaxBinding534, _Vector3_ppt);
const _flaxBinding1341 = FlaxGetter("ppp", _flaxBinding534, _Vector3_ppp);
const _flaxBinding1342 = FlaxGetter("ssss", _flaxBinding906, _Vector3_ssss);
const _flaxBinding1343 = FlaxGetter("ssst", _flaxBinding906, _Vector3_ssst);
const _flaxBinding1344 = FlaxGetter("sssp", _flaxBinding906, _Vector3_sssp);
const _flaxBinding1345 = FlaxGetter("ssts", _flaxBinding906, _Vector3_ssts);
const _flaxBinding1346 = FlaxGetter("sstt", _flaxBinding906, _Vector3_sstt);
const _flaxBinding1347 = FlaxGetter("sstp", _flaxBinding906, _Vector3_sstp);
const _flaxBinding1348 = FlaxGetter("ssps", _flaxBinding906, _Vector3_ssps);
const _flaxBinding1349 = FlaxGetter("sspt", _flaxBinding906, _Vector3_sspt);
const _flaxBinding1350 = FlaxGetter("sspp", _flaxBinding906, _Vector3_sspp);
const _flaxBinding1351 = FlaxGetter("stss", _flaxBinding906, _Vector3_stss);
const _flaxBinding1352 = FlaxGetter("stst", _flaxBinding906, _Vector3_stst);
const _flaxBinding1353 = FlaxGetter("stsp", _flaxBinding906, _Vector3_stsp);
const _flaxBinding1354 = FlaxGetter("stts", _flaxBinding906, _Vector3_stts);
const _flaxBinding1355 = FlaxGetter("sttt", _flaxBinding906, _Vector3_sttt);
const _flaxBinding1356 = FlaxGetter("sttp", _flaxBinding906, _Vector3_sttp);
const _flaxBinding1357 = FlaxGetter("stps", _flaxBinding906, _Vector3_stps);
const _flaxBinding1358 = FlaxGetter("stpt", _flaxBinding906, _Vector3_stpt);
const _flaxBinding1359 = FlaxGetter("stpp", _flaxBinding906, _Vector3_stpp);
const _flaxBinding1360 = FlaxGetter("spss", _flaxBinding906, _Vector3_spss);
const _flaxBinding1361 = FlaxGetter("spst", _flaxBinding906, _Vector3_spst);
const _flaxBinding1362 = FlaxGetter("spsp", _flaxBinding906, _Vector3_spsp);
const _flaxBinding1363 = FlaxGetter("spts", _flaxBinding906, _Vector3_spts);
const _flaxBinding1364 = FlaxGetter("sptt", _flaxBinding906, _Vector3_sptt);
const _flaxBinding1365 = FlaxGetter("sptp", _flaxBinding906, _Vector3_sptp);
const _flaxBinding1366 = FlaxGetter("spps", _flaxBinding906, _Vector3_spps);
const _flaxBinding1367 = FlaxGetter("sppt", _flaxBinding906, _Vector3_sppt);
const _flaxBinding1368 = FlaxGetter("sppp", _flaxBinding906, _Vector3_sppp);
const _flaxBinding1369 = FlaxGetter("tsss", _flaxBinding906, _Vector3_tsss);
const _flaxBinding1370 = FlaxGetter("tsst", _flaxBinding906, _Vector3_tsst);
const _flaxBinding1371 = FlaxGetter("tssp", _flaxBinding906, _Vector3_tssp);
const _flaxBinding1372 = FlaxGetter("tsts", _flaxBinding906, _Vector3_tsts);
const _flaxBinding1373 = FlaxGetter("tstt", _flaxBinding906, _Vector3_tstt);
const _flaxBinding1374 = FlaxGetter("tstp", _flaxBinding906, _Vector3_tstp);
const _flaxBinding1375 = FlaxGetter("tsps", _flaxBinding906, _Vector3_tsps);
const _flaxBinding1376 = FlaxGetter("tspt", _flaxBinding906, _Vector3_tspt);
const _flaxBinding1377 = FlaxGetter("tspp", _flaxBinding906, _Vector3_tspp);
const _flaxBinding1378 = FlaxGetter("ttss", _flaxBinding906, _Vector3_ttss);
const _flaxBinding1379 = FlaxGetter("ttst", _flaxBinding906, _Vector3_ttst);
const _flaxBinding1380 = FlaxGetter("ttsp", _flaxBinding906, _Vector3_ttsp);
const _flaxBinding1381 = FlaxGetter("ttts", _flaxBinding906, _Vector3_ttts);
const _flaxBinding1382 = FlaxGetter("tttt", _flaxBinding906, _Vector3_tttt);
const _flaxBinding1383 = FlaxGetter("tttp", _flaxBinding906, _Vector3_tttp);
const _flaxBinding1384 = FlaxGetter("ttps", _flaxBinding906, _Vector3_ttps);
const _flaxBinding1385 = FlaxGetter("ttpt", _flaxBinding906, _Vector3_ttpt);
const _flaxBinding1386 = FlaxGetter("ttpp", _flaxBinding906, _Vector3_ttpp);
const _flaxBinding1387 = FlaxGetter("tpss", _flaxBinding906, _Vector3_tpss);
const _flaxBinding1388 = FlaxGetter("tpst", _flaxBinding906, _Vector3_tpst);
const _flaxBinding1389 = FlaxGetter("tpsp", _flaxBinding906, _Vector3_tpsp);
const _flaxBinding1390 = FlaxGetter("tpts", _flaxBinding906, _Vector3_tpts);
const _flaxBinding1391 = FlaxGetter("tptt", _flaxBinding906, _Vector3_tptt);
const _flaxBinding1392 = FlaxGetter("tptp", _flaxBinding906, _Vector3_tptp);
const _flaxBinding1393 = FlaxGetter("tpps", _flaxBinding906, _Vector3_tpps);
const _flaxBinding1394 = FlaxGetter("tppt", _flaxBinding906, _Vector3_tppt);
const _flaxBinding1395 = FlaxGetter("tppp", _flaxBinding906, _Vector3_tppp);
const _flaxBinding1396 = FlaxGetter("psss", _flaxBinding906, _Vector3_psss);
const _flaxBinding1397 = FlaxGetter("psst", _flaxBinding906, _Vector3_psst);
const _flaxBinding1398 = FlaxGetter("pssp", _flaxBinding906, _Vector3_pssp);
const _flaxBinding1399 = FlaxGetter("psts", _flaxBinding906, _Vector3_psts);
const _flaxBinding1400 = FlaxGetter("pstt", _flaxBinding906, _Vector3_pstt);
const _flaxBinding1401 = FlaxGetter("pstp", _flaxBinding906, _Vector3_pstp);
const _flaxBinding1402 = FlaxGetter("psps", _flaxBinding906, _Vector3_psps);
const _flaxBinding1403 = FlaxGetter("pspt", _flaxBinding906, _Vector3_pspt);
const _flaxBinding1404 = FlaxGetter("pspp", _flaxBinding906, _Vector3_pspp);
const _flaxBinding1405 = FlaxGetter("ptss", _flaxBinding906, _Vector3_ptss);
const _flaxBinding1406 = FlaxGetter("ptst", _flaxBinding906, _Vector3_ptst);
const _flaxBinding1407 = FlaxGetter("ptsp", _flaxBinding906, _Vector3_ptsp);
const _flaxBinding1408 = FlaxGetter("ptts", _flaxBinding906, _Vector3_ptts);
const _flaxBinding1409 = FlaxGetter("pttt", _flaxBinding906, _Vector3_pttt);
const _flaxBinding1410 = FlaxGetter("pttp", _flaxBinding906, _Vector3_pttp);
const _flaxBinding1411 = FlaxGetter("ptps", _flaxBinding906, _Vector3_ptps);
const _flaxBinding1412 = FlaxGetter("ptpt", _flaxBinding906, _Vector3_ptpt);
const _flaxBinding1413 = FlaxGetter("ptpp", _flaxBinding906, _Vector3_ptpp);
const _flaxBinding1414 = FlaxGetter("ppss", _flaxBinding906, _Vector3_ppss);
const _flaxBinding1415 = FlaxGetter("ppst", _flaxBinding906, _Vector3_ppst);
const _flaxBinding1416 = FlaxGetter("ppsp", _flaxBinding906, _Vector3_ppsp);
const _flaxBinding1417 = FlaxGetter("ppts", _flaxBinding906, _Vector3_ppts);
const _flaxBinding1418 = FlaxGetter("pptt", _flaxBinding906, _Vector3_pptt);
const _flaxBinding1419 = FlaxGetter("pptp", _flaxBinding906, _Vector3_pptp);
const _flaxBinding1420 = FlaxGetter("ppps", _flaxBinding906, _Vector3_ppps);
const _flaxBinding1421 = FlaxGetter("pppt", _flaxBinding906, _Vector3_pppt);
const _flaxBinding1422 = FlaxGetter("pppp", _flaxBinding906, _Vector3_pppp);
const _flaxBinding1423 = FlaxSetter(
  "length",
  _flaxBinding448,
  _Vector3_set_length,
);
const _flaxBinding1424 = FlaxSetter("xy", _flaxBinding441, _Vector3_set_xy);
const _flaxBinding1425 = FlaxSetter("xz", _flaxBinding441, _Vector3_set_xz);
const _flaxBinding1426 = FlaxSetter("yx", _flaxBinding441, _Vector3_set_yx);
const _flaxBinding1427 = FlaxSetter("yz", _flaxBinding441, _Vector3_set_yz);
const _flaxBinding1428 = FlaxSetter("zx", _flaxBinding441, _Vector3_set_zx);
const _flaxBinding1429 = FlaxSetter("zy", _flaxBinding441, _Vector3_set_zy);
const _flaxBinding1430 = FlaxSetter("xyz", _flaxBinding534, _Vector3_set_xyz);
const _flaxBinding1431 = FlaxSetter("xzy", _flaxBinding534, _Vector3_set_xzy);
const _flaxBinding1432 = FlaxSetter("yxz", _flaxBinding534, _Vector3_set_yxz);
const _flaxBinding1433 = FlaxSetter("yzx", _flaxBinding534, _Vector3_set_yzx);
const _flaxBinding1434 = FlaxSetter("zxy", _flaxBinding534, _Vector3_set_zxy);
const _flaxBinding1435 = FlaxSetter("zyx", _flaxBinding534, _Vector3_set_zyx);
const _flaxBinding1436 = FlaxSetter("r", _flaxBinding448, _Vector3_set_r);
const _flaxBinding1437 = FlaxSetter("g", _flaxBinding448, _Vector3_set_g);
const _flaxBinding1438 = FlaxSetter("b", _flaxBinding448, _Vector3_set_b);
const _flaxBinding1439 = FlaxSetter("s", _flaxBinding448, _Vector3_set_s);
const _flaxBinding1440 = FlaxSetter("t", _flaxBinding448, _Vector3_set_t);
const _flaxBinding1441 = FlaxSetter("p", _flaxBinding448, _Vector3_set_p);
const _flaxBinding1442 = FlaxSetter("x", _flaxBinding448, _Vector3_set_x);
const _flaxBinding1443 = FlaxSetter("y", _flaxBinding448, _Vector3_set_y);
const _flaxBinding1444 = FlaxSetter("z", _flaxBinding448, _Vector3_set_z);
const _flaxBinding1445 = FlaxSetter("rg", _flaxBinding441, _Vector3_set_rg);
const _flaxBinding1446 = FlaxSetter("rb", _flaxBinding441, _Vector3_set_rb);
const _flaxBinding1447 = FlaxSetter("gr", _flaxBinding441, _Vector3_set_gr);
const _flaxBinding1448 = FlaxSetter("gb", _flaxBinding441, _Vector3_set_gb);
const _flaxBinding1449 = FlaxSetter("br", _flaxBinding441, _Vector3_set_br);
const _flaxBinding1450 = FlaxSetter("bg", _flaxBinding441, _Vector3_set_bg);
const _flaxBinding1451 = FlaxSetter("rgb", _flaxBinding534, _Vector3_set_rgb);
const _flaxBinding1452 = FlaxSetter("rbg", _flaxBinding534, _Vector3_set_rbg);
const _flaxBinding1453 = FlaxSetter("grb", _flaxBinding534, _Vector3_set_grb);
const _flaxBinding1454 = FlaxSetter("gbr", _flaxBinding534, _Vector3_set_gbr);
const _flaxBinding1455 = FlaxSetter("brg", _flaxBinding534, _Vector3_set_brg);
const _flaxBinding1456 = FlaxSetter("bgr", _flaxBinding534, _Vector3_set_bgr);
const _flaxBinding1457 = FlaxSetter("st", _flaxBinding441, _Vector3_set_st);
const _flaxBinding1458 = FlaxSetter("sp", _flaxBinding441, _Vector3_set_sp);
const _flaxBinding1459 = FlaxSetter("ts", _flaxBinding441, _Vector3_set_ts);
const _flaxBinding1460 = FlaxSetter("tp", _flaxBinding441, _Vector3_set_tp);
const _flaxBinding1461 = FlaxSetter("ps", _flaxBinding441, _Vector3_set_ps);
const _flaxBinding1462 = FlaxSetter("pt", _flaxBinding441, _Vector3_set_pt);
const _flaxBinding1463 = FlaxSetter("stp", _flaxBinding534, _Vector3_set_stp);
const _flaxBinding1464 = FlaxSetter("spt", _flaxBinding534, _Vector3_set_spt);
const _flaxBinding1465 = FlaxSetter("tsp", _flaxBinding534, _Vector3_set_tsp);
const _flaxBinding1466 = FlaxSetter("tps", _flaxBinding534, _Vector3_set_tps);
const _flaxBinding1467 = FlaxSetter("pst", _flaxBinding534, _Vector3_set_pst);
const _flaxBinding1468 = FlaxSetter("pts", _flaxBinding534, _Vector3_set_pts);
const _flaxBinding1469 = <FlaxParameter>[
  FlaxParameter("x", _flaxBinding448, required: true),
  FlaxParameter("y", _flaxBinding448, required: true),
  FlaxParameter("z", _flaxBinding448, required: true),
];
const _flaxBinding1470 = FlaxInstanceMethod(
  _flaxBinding1469,
  _flaxBinding70,
  _Vector3_setValues,
);
const _flaxBinding1471 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding70,
  _Vector3_setZero,
);
const _flaxBinding1472 = <FlaxParameter>[
  FlaxParameter("other", _flaxBinding534, required: true),
];
const _flaxBinding1473 = FlaxInstanceMethod(
  _flaxBinding1472,
  _flaxBinding70,
  _Vector3_setFrom,
);
const _flaxBinding1474 = FlaxInstanceMethod(
  _flaxBinding461,
  _flaxBinding70,
  _Vector3_splat,
);
const _flaxBinding1475 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding0,
  _Vector3_toString,
);
const _flaxBinding1476 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding448,
  _Vector3_normalize,
);
const _flaxBinding1477 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding448,
  _Vector3_normalizeLength,
);
const _flaxBinding1478 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding534,
  _Vector3_normalized,
);
const _flaxBinding1479 = <FlaxParameter>[
  FlaxParameter("out", _flaxBinding534, required: true),
];
const _flaxBinding1480 = FlaxInstanceMethod(
  _flaxBinding1479,
  _flaxBinding534,
  _Vector3_normalizeInto,
);
const _flaxBinding1481 = FlaxInstanceMethod(
  _flaxBinding557,
  _flaxBinding448,
  _Vector3_distanceTo,
);
const _flaxBinding1482 = FlaxInstanceMethod(
  _flaxBinding557,
  _flaxBinding448,
  _Vector3_distanceToSquared,
);
const _flaxBinding1483 = FlaxInstanceMethod(
  _flaxBinding1472,
  _flaxBinding448,
  _Vector3_angleTo,
);
const _flaxBinding1484 = <FlaxParameter>[
  FlaxParameter("other", _flaxBinding534, required: true),
  FlaxParameter("normal", _flaxBinding534, required: true),
];
const _flaxBinding1485 = FlaxInstanceMethod(
  _flaxBinding1484,
  _flaxBinding448,
  _Vector3_angleToSigned,
);
const _flaxBinding1486 = FlaxInstanceMethod(
  _flaxBinding1472,
  _flaxBinding448,
  _Vector3_dot,
);
const _flaxBinding1487 = FlaxInstanceMethod(
  _flaxBinding552,
  _flaxBinding70,
  _Vector3_postmultiply,
);
const _flaxBinding1488 = FlaxInstanceMethod(
  _flaxBinding1472,
  _flaxBinding534,
  _Vector3_cross,
);
const _flaxBinding1489 = <FlaxParameter>[
  FlaxParameter("other", _flaxBinding534, required: true),
  FlaxParameter("out", _flaxBinding534, required: true),
];
const _flaxBinding1490 = FlaxInstanceMethod(
  _flaxBinding1489,
  _flaxBinding534,
  _Vector3_crossInto,
);
const _flaxBinding1491 = FlaxInstanceMethod(
  _flaxBinding630,
  _flaxBinding70,
  _Vector3_reflect,
);
const _flaxBinding1492 = FlaxInstanceMethod(
  _flaxBinding630,
  _flaxBinding534,
  _Vector3_reflected,
);
const _flaxBinding1493 = FlaxInstanceMethod(
  _flaxBinding587,
  _flaxBinding70,
  _Vector3_applyProjection,
);
const _flaxBinding1494 = FlaxInstanceMethod(
  _flaxBinding698,
  _flaxBinding70,
  _Vector3_applyAxisAngle,
);
const _flaxBinding1495 = FlaxInstanceMethod(
  _flaxBinding679,
  _flaxBinding70,
  _Vector3_applyQuaternion,
);
const _flaxBinding1496 = FlaxInstanceMethod(
  _flaxBinding552,
  _flaxBinding70,
  _Vector3_applyMatrix3,
);
const _flaxBinding1497 = FlaxInstanceMethod(
  _flaxBinding587,
  _flaxBinding70,
  _Vector3_applyMatrix4,
);
const _flaxBinding1498 = <FlaxParameter>[
  FlaxParameter("correct", _flaxBinding534, required: true),
];
const _flaxBinding1499 = FlaxInstanceMethod(
  _flaxBinding1498,
  _flaxBinding448,
  _Vector3_relativeError,
);
const _flaxBinding1500 = FlaxInstanceMethod(
  _flaxBinding1498,
  _flaxBinding448,
  _Vector3_absoluteError,
);
const _flaxBinding1501 = FlaxInstanceMethod(
  _flaxBinding557,
  _flaxBinding70,
  _Vector3_add,
);
const _flaxBinding1502 = <FlaxParameter>[
  FlaxParameter("arg", _flaxBinding534, required: true),
  FlaxParameter("factor", _flaxBinding448, required: true),
];
const _flaxBinding1503 = FlaxInstanceMethod(
  _flaxBinding1502,
  _flaxBinding70,
  _Vector3_addScaled,
);
const _flaxBinding1504 = FlaxInstanceMethod(
  _flaxBinding557,
  _flaxBinding70,
  _Vector3_sub,
);
const _flaxBinding1505 = FlaxInstanceMethod(
  _flaxBinding557,
  _flaxBinding70,
  _Vector3_multiply,
);
const _flaxBinding1506 = FlaxInstanceMethod(
  _flaxBinding557,
  _flaxBinding70,
  _Vector3_divide,
);
const _flaxBinding1507 = FlaxInstanceMethod(
  _flaxBinding461,
  _flaxBinding70,
  _Vector3_scale,
);
const _flaxBinding1508 = FlaxInstanceMethod(
  _flaxBinding461,
  _flaxBinding534,
  _Vector3_scaled,
);
const _flaxBinding1509 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding70,
  _Vector3_negate,
);
const _flaxBinding1510 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding70,
  _Vector3_absolute,
);
const _flaxBinding1511 = <FlaxParameter>[
  FlaxParameter("min", _flaxBinding534, required: true),
  FlaxParameter("max", _flaxBinding534, required: true),
];
const _flaxBinding1512 = FlaxInstanceMethod(
  _flaxBinding1511,
  _flaxBinding70,
  _Vector3_clamp,
);
const _flaxBinding1513 = FlaxInstanceMethod(
  _flaxBinding1037,
  _flaxBinding70,
  _Vector3_clampScalar,
);
const _flaxBinding1514 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding70,
  _Vector3_floor,
);
const _flaxBinding1515 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding70,
  _Vector3_ceil,
);
const _flaxBinding1516 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding70,
  _Vector3_round,
);
const _flaxBinding1517 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding70,
  _Vector3_roundToZero,
);
const _flaxBinding1518 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding534,
  _Vector3_clone,
);
const _flaxBinding1519 = FlaxInstanceMethod(
  _flaxBinding557,
  _flaxBinding534,
  _Vector3_copyInto,
);
const _flaxBinding1520 = FlaxInstanceMethod(
  _flaxBinding518,
  _flaxBinding70,
  _Vector3_copyIntoArray,
);
const _flaxBinding1521 = FlaxInstanceMethod(
  _flaxBinding518,
  _flaxBinding70,
  _Vector3_copyFromArray,
);
const _flaxBinding1522 = FlaxInstanceMethod(
  _flaxBinding520,
  _flaxBinding448,
  _Vector3_operatorGetIndex,
);
const _flaxBinding1523 = FlaxInstanceMethod(
  _flaxBinding522,
  _flaxBinding70,
  _Vector3_operatorSetIndex,
);
const _flaxBinding1524 = FlaxInstanceMethod(
  _flaxBinding1472,
  _flaxBinding534,
  _Vector3_operatorAdd,
);
const _flaxBinding1525 = FlaxInstanceMethod(
  _flaxBinding1472,
  _flaxBinding534,
  _Vector3_operatorSubtract,
);
const _flaxBinding1526 = FlaxInstanceMethod(
  _flaxBinding495,
  _flaxBinding534,
  _Vector3_operatorMultiply,
);
const _flaxBinding1527 = FlaxInstanceMethod(
  _flaxBinding495,
  _flaxBinding534,
  _Vector3_operatorDivide,
);
const _flaxBinding1528 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding534,
  _Vector3_operatorNegate,
);
const _flaxBinding1529 = <FlaxParameter>[
  FlaxParameter("_v3storage", _flaxBinding438, required: true),
];
const _flaxBinding1530 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:Vector3",
  [
    _flaxBinding1058,
    _flaxBinding1059,
    _flaxBinding1060,
    _flaxBinding1061,
    _flaxBinding1062,
    _flaxBinding1063,
    _flaxBinding1064,
    _flaxBinding1065,
    _flaxBinding1066,
    _flaxBinding1067,
    _flaxBinding1068,
    _flaxBinding1069,
    _flaxBinding1070,
    _flaxBinding1071,
    _flaxBinding1072,
    _flaxBinding1073,
    _flaxBinding1074,
    _flaxBinding1075,
    _flaxBinding1076,
    _flaxBinding1077,
    _flaxBinding1078,
    _flaxBinding1079,
    _flaxBinding1080,
    _flaxBinding1081,
    _flaxBinding1082,
    _flaxBinding1083,
    _flaxBinding1084,
    _flaxBinding1085,
    _flaxBinding1086,
    _flaxBinding1087,
    _flaxBinding1088,
    _flaxBinding1089,
    _flaxBinding1090,
    _flaxBinding1091,
    _flaxBinding1092,
    _flaxBinding1093,
    _flaxBinding1094,
    _flaxBinding1095,
    _flaxBinding1096,
    _flaxBinding1097,
    _flaxBinding1098,
    _flaxBinding1099,
    _flaxBinding1100,
    _flaxBinding1101,
    _flaxBinding1102,
    _flaxBinding1103,
    _flaxBinding1104,
    _flaxBinding1105,
    _flaxBinding1106,
    _flaxBinding1107,
    _flaxBinding1108,
    _flaxBinding1109,
    _flaxBinding1110,
    _flaxBinding1111,
    _flaxBinding1112,
    _flaxBinding1113,
    _flaxBinding1114,
    _flaxBinding1115,
    _flaxBinding1116,
    _flaxBinding1117,
    _flaxBinding1118,
    _flaxBinding1119,
    _flaxBinding1120,
    _flaxBinding1121,
    _flaxBinding1122,
    _flaxBinding1123,
    _flaxBinding1124,
    _flaxBinding1125,
    _flaxBinding1126,
    _flaxBinding1127,
    _flaxBinding1128,
    _flaxBinding1129,
    _flaxBinding1130,
    _flaxBinding1131,
    _flaxBinding1132,
    _flaxBinding1133,
    _flaxBinding1134,
    _flaxBinding1135,
    _flaxBinding1136,
    _flaxBinding1137,
    _flaxBinding1138,
    _flaxBinding1139,
    _flaxBinding1140,
    _flaxBinding1141,
    _flaxBinding1142,
    _flaxBinding1143,
    _flaxBinding1144,
    _flaxBinding1145,
    _flaxBinding1146,
    _flaxBinding1147,
    _flaxBinding1148,
    _flaxBinding1149,
    _flaxBinding1150,
    _flaxBinding1151,
    _flaxBinding1152,
    _flaxBinding1153,
    _flaxBinding1154,
    _flaxBinding1155,
    _flaxBinding1156,
    _flaxBinding1157,
    _flaxBinding1158,
    _flaxBinding1159,
    _flaxBinding1160,
    _flaxBinding1161,
    _flaxBinding1162,
    _flaxBinding1163,
    _flaxBinding1164,
    _flaxBinding1165,
    _flaxBinding1166,
    _flaxBinding1167,
    _flaxBinding1168,
    _flaxBinding1169,
    _flaxBinding1170,
    _flaxBinding1171,
    _flaxBinding1172,
    _flaxBinding1173,
    _flaxBinding1174,
    _flaxBinding1175,
    _flaxBinding1176,
    _flaxBinding1177,
    _flaxBinding1178,
    _flaxBinding1179,
    _flaxBinding1180,
    _flaxBinding1181,
    _flaxBinding1182,
    _flaxBinding1183,
    _flaxBinding1184,
    _flaxBinding1185,
    _flaxBinding1186,
    _flaxBinding1187,
    _flaxBinding1188,
    _flaxBinding1189,
    _flaxBinding1190,
    _flaxBinding1191,
    _flaxBinding1192,
    _flaxBinding1193,
    _flaxBinding1194,
    _flaxBinding1195,
    _flaxBinding1196,
    _flaxBinding1197,
    _flaxBinding1198,
    _flaxBinding1199,
    _flaxBinding1200,
    _flaxBinding1201,
    _flaxBinding1202,
    _flaxBinding1203,
    _flaxBinding1204,
    _flaxBinding1205,
    _flaxBinding1206,
    _flaxBinding1207,
    _flaxBinding1208,
    _flaxBinding1209,
    _flaxBinding1210,
    _flaxBinding1211,
    _flaxBinding1212,
    _flaxBinding1213,
    _flaxBinding1214,
    _flaxBinding1215,
    _flaxBinding1216,
    _flaxBinding1217,
    _flaxBinding1218,
    _flaxBinding1219,
    _flaxBinding1220,
    _flaxBinding1221,
    _flaxBinding1222,
    _flaxBinding1223,
    _flaxBinding1224,
    _flaxBinding1225,
    _flaxBinding1226,
    _flaxBinding1227,
    _flaxBinding1228,
    _flaxBinding1229,
    _flaxBinding1230,
    _flaxBinding1231,
    _flaxBinding1232,
    _flaxBinding1233,
    _flaxBinding1234,
    _flaxBinding1235,
    _flaxBinding1236,
    _flaxBinding1237,
    _flaxBinding1238,
    _flaxBinding1239,
    _flaxBinding1240,
    _flaxBinding1241,
    _flaxBinding1242,
    _flaxBinding1243,
    _flaxBinding1244,
    _flaxBinding1245,
    _flaxBinding1246,
    _flaxBinding1247,
    _flaxBinding1248,
    _flaxBinding1249,
    _flaxBinding1250,
    _flaxBinding1251,
    _flaxBinding1252,
    _flaxBinding1253,
    _flaxBinding1254,
    _flaxBinding1255,
    _flaxBinding1256,
    _flaxBinding1257,
    _flaxBinding1258,
    _flaxBinding1259,
    _flaxBinding1260,
    _flaxBinding1261,
    _flaxBinding1262,
    _flaxBinding1263,
    _flaxBinding1264,
    _flaxBinding1265,
    _flaxBinding1266,
    _flaxBinding1267,
    _flaxBinding1268,
    _flaxBinding1269,
    _flaxBinding1270,
    _flaxBinding1271,
    _flaxBinding1272,
    _flaxBinding1273,
    _flaxBinding1274,
    _flaxBinding1275,
    _flaxBinding1276,
    _flaxBinding1277,
    _flaxBinding1278,
    _flaxBinding1279,
    _flaxBinding1280,
    _flaxBinding1281,
    _flaxBinding1282,
    _flaxBinding1283,
    _flaxBinding1284,
    _flaxBinding1285,
    _flaxBinding1286,
    _flaxBinding1287,
    _flaxBinding1288,
    _flaxBinding1289,
    _flaxBinding1290,
    _flaxBinding1291,
    _flaxBinding1292,
    _flaxBinding1293,
    _flaxBinding1294,
    _flaxBinding1295,
    _flaxBinding1296,
    _flaxBinding1297,
    _flaxBinding1298,
    _flaxBinding1299,
    _flaxBinding1300,
    _flaxBinding1301,
    _flaxBinding1302,
    _flaxBinding1303,
    _flaxBinding1304,
    _flaxBinding1305,
    _flaxBinding1306,
    _flaxBinding1307,
    _flaxBinding1308,
    _flaxBinding1309,
    _flaxBinding1310,
    _flaxBinding1311,
    _flaxBinding1312,
    _flaxBinding1313,
    _flaxBinding1314,
    _flaxBinding1315,
    _flaxBinding1316,
    _flaxBinding1317,
    _flaxBinding1318,
    _flaxBinding1319,
    _flaxBinding1320,
    _flaxBinding1321,
    _flaxBinding1322,
    _flaxBinding1323,
    _flaxBinding1324,
    _flaxBinding1325,
    _flaxBinding1326,
    _flaxBinding1327,
    _flaxBinding1328,
    _flaxBinding1329,
    _flaxBinding1330,
    _flaxBinding1331,
    _flaxBinding1332,
    _flaxBinding1333,
    _flaxBinding1334,
    _flaxBinding1335,
    _flaxBinding1336,
    _flaxBinding1337,
    _flaxBinding1338,
    _flaxBinding1339,
    _flaxBinding1340,
    _flaxBinding1341,
    _flaxBinding1342,
    _flaxBinding1343,
    _flaxBinding1344,
    _flaxBinding1345,
    _flaxBinding1346,
    _flaxBinding1347,
    _flaxBinding1348,
    _flaxBinding1349,
    _flaxBinding1350,
    _flaxBinding1351,
    _flaxBinding1352,
    _flaxBinding1353,
    _flaxBinding1354,
    _flaxBinding1355,
    _flaxBinding1356,
    _flaxBinding1357,
    _flaxBinding1358,
    _flaxBinding1359,
    _flaxBinding1360,
    _flaxBinding1361,
    _flaxBinding1362,
    _flaxBinding1363,
    _flaxBinding1364,
    _flaxBinding1365,
    _flaxBinding1366,
    _flaxBinding1367,
    _flaxBinding1368,
    _flaxBinding1369,
    _flaxBinding1370,
    _flaxBinding1371,
    _flaxBinding1372,
    _flaxBinding1373,
    _flaxBinding1374,
    _flaxBinding1375,
    _flaxBinding1376,
    _flaxBinding1377,
    _flaxBinding1378,
    _flaxBinding1379,
    _flaxBinding1380,
    _flaxBinding1381,
    _flaxBinding1382,
    _flaxBinding1383,
    _flaxBinding1384,
    _flaxBinding1385,
    _flaxBinding1386,
    _flaxBinding1387,
    _flaxBinding1388,
    _flaxBinding1389,
    _flaxBinding1390,
    _flaxBinding1391,
    _flaxBinding1392,
    _flaxBinding1393,
    _flaxBinding1394,
    _flaxBinding1395,
    _flaxBinding1396,
    _flaxBinding1397,
    _flaxBinding1398,
    _flaxBinding1399,
    _flaxBinding1400,
    _flaxBinding1401,
    _flaxBinding1402,
    _flaxBinding1403,
    _flaxBinding1404,
    _flaxBinding1405,
    _flaxBinding1406,
    _flaxBinding1407,
    _flaxBinding1408,
    _flaxBinding1409,
    _flaxBinding1410,
    _flaxBinding1411,
    _flaxBinding1412,
    _flaxBinding1413,
    _flaxBinding1414,
    _flaxBinding1415,
    _flaxBinding1416,
    _flaxBinding1417,
    _flaxBinding1418,
    _flaxBinding1419,
    _flaxBinding1420,
    _flaxBinding1421,
    _flaxBinding1422,
  ],
  {
    "setValues": _flaxBinding1470,
    "setZero": _flaxBinding1471,
    "setFrom": _flaxBinding1473,
    "splat": _flaxBinding1474,
    "toString": _flaxBinding1475,
    "normalize": _flaxBinding1476,
    "normalizeLength": _flaxBinding1477,
    "normalized": _flaxBinding1478,
    "normalizeInto": _flaxBinding1480,
    "distanceTo": _flaxBinding1481,
    "distanceToSquared": _flaxBinding1482,
    "angleTo": _flaxBinding1483,
    "angleToSigned": _flaxBinding1485,
    "dot": _flaxBinding1486,
    "postmultiply": _flaxBinding1487,
    "cross": _flaxBinding1488,
    "crossInto": _flaxBinding1490,
    "reflect": _flaxBinding1491,
    "reflected": _flaxBinding1492,
    "applyProjection": _flaxBinding1493,
    "applyAxisAngle": _flaxBinding1494,
    "applyQuaternion": _flaxBinding1495,
    "applyMatrix3": _flaxBinding1496,
    "applyMatrix4": _flaxBinding1497,
    "relativeError": _flaxBinding1499,
    "absoluteError": _flaxBinding1500,
    "add": _flaxBinding1501,
    "addScaled": _flaxBinding1503,
    "sub": _flaxBinding1504,
    "multiply": _flaxBinding1505,
    "divide": _flaxBinding1506,
    "scale": _flaxBinding1507,
    "scaled": _flaxBinding1508,
    "negate": _flaxBinding1509,
    "absolute": _flaxBinding1510,
    "clamp": _flaxBinding1512,
    "clampScalar": _flaxBinding1513,
    "floor": _flaxBinding1514,
    "ceil": _flaxBinding1515,
    "round": _flaxBinding1516,
    "roundToZero": _flaxBinding1517,
    "clone": _flaxBinding1518,
    "copyInto": _flaxBinding1519,
    "copyIntoArray": _flaxBinding1520,
    "copyFromArray": _flaxBinding1521,
    "operatorGetIndex": _flaxBinding1522,
    "operatorSetIndex": _flaxBinding1523,
    "operatorAdd": _flaxBinding1524,
    "operatorSubtract": _flaxBinding1525,
    "operatorMultiply": _flaxBinding1526,
    "operatorDivide": _flaxBinding1527,
    "operatorNegate": _flaxBinding1528,
  },
  constructors: {
    "": _flaxBinding1469,
    "array": _flaxBinding518,
    "zero": _flaxBinding42,
    "all": _flaxBinding1055,
    "copy": _flaxBinding1472,
    "fromFloat64List": _flaxBinding1529,
    "fromBuffer": _flaxBinding702,
  },
  create: _createVector3,
  matches: _isVector3,
  setters: [
    _flaxBinding1423,
    _flaxBinding1424,
    _flaxBinding1425,
    _flaxBinding1426,
    _flaxBinding1427,
    _flaxBinding1428,
    _flaxBinding1429,
    _flaxBinding1430,
    _flaxBinding1431,
    _flaxBinding1432,
    _flaxBinding1433,
    _flaxBinding1434,
    _flaxBinding1435,
    _flaxBinding1436,
    _flaxBinding1437,
    _flaxBinding1438,
    _flaxBinding1439,
    _flaxBinding1440,
    _flaxBinding1441,
    _flaxBinding1442,
    _flaxBinding1443,
    _flaxBinding1444,
    _flaxBinding1445,
    _flaxBinding1446,
    _flaxBinding1447,
    _flaxBinding1448,
    _flaxBinding1449,
    _flaxBinding1450,
    _flaxBinding1451,
    _flaxBinding1452,
    _flaxBinding1453,
    _flaxBinding1454,
    _flaxBinding1455,
    _flaxBinding1456,
    _flaxBinding1457,
    _flaxBinding1458,
    _flaxBinding1459,
    _flaxBinding1460,
    _flaxBinding1461,
    _flaxBinding1462,
    _flaxBinding1463,
    _flaxBinding1464,
    _flaxBinding1465,
    _flaxBinding1466,
    _flaxBinding1467,
    _flaxBinding1468,
  ],
  supertypes: [
    "dart:core::Object",
    "package:vector_math/vector_math_64.dart::Vector",
  ],
);
const _flaxBinding1531 = FlaxGetter(
  "storage",
  _flaxBinding438,
  _Vector4_storage,
);
const _flaxBinding1532 = FlaxGetter("length", _flaxBinding448, _Vector4_length);
const _flaxBinding1533 = FlaxGetter(
  "length2",
  _flaxBinding448,
  _Vector4_length2,
);
const _flaxBinding1534 = FlaxGetter(
  "isInfinite",
  _flaxBinding20,
  _Vector4_isInfinite,
);
const _flaxBinding1535 = FlaxGetter("isNaN", _flaxBinding20, _Vector4_isNaN);
const _flaxBinding1536 = FlaxGetter("xx", _flaxBinding441, _Vector4_xx);
const _flaxBinding1537 = FlaxGetter("xy", _flaxBinding441, _Vector4_xy);
const _flaxBinding1538 = FlaxGetter("xz", _flaxBinding441, _Vector4_xz);
const _flaxBinding1539 = FlaxGetter("xw", _flaxBinding441, _Vector4_xw);
const _flaxBinding1540 = FlaxGetter("yx", _flaxBinding441, _Vector4_yx);
const _flaxBinding1541 = FlaxGetter("yy", _flaxBinding441, _Vector4_yy);
const _flaxBinding1542 = FlaxGetter("yz", _flaxBinding441, _Vector4_yz);
const _flaxBinding1543 = FlaxGetter("yw", _flaxBinding441, _Vector4_yw);
const _flaxBinding1544 = FlaxGetter("zx", _flaxBinding441, _Vector4_zx);
const _flaxBinding1545 = FlaxGetter("zy", _flaxBinding441, _Vector4_zy);
const _flaxBinding1546 = FlaxGetter("zz", _flaxBinding441, _Vector4_zz);
const _flaxBinding1547 = FlaxGetter("zw", _flaxBinding441, _Vector4_zw);
const _flaxBinding1548 = FlaxGetter("wx", _flaxBinding441, _Vector4_wx);
const _flaxBinding1549 = FlaxGetter("wy", _flaxBinding441, _Vector4_wy);
const _flaxBinding1550 = FlaxGetter("wz", _flaxBinding441, _Vector4_wz);
const _flaxBinding1551 = FlaxGetter("ww", _flaxBinding441, _Vector4_ww);
const _flaxBinding1552 = FlaxGetter("xxx", _flaxBinding534, _Vector4_xxx);
const _flaxBinding1553 = FlaxGetter("xxy", _flaxBinding534, _Vector4_xxy);
const _flaxBinding1554 = FlaxGetter("xxz", _flaxBinding534, _Vector4_xxz);
const _flaxBinding1555 = FlaxGetter("xxw", _flaxBinding534, _Vector4_xxw);
const _flaxBinding1556 = FlaxGetter("xyx", _flaxBinding534, _Vector4_xyx);
const _flaxBinding1557 = FlaxGetter("xyy", _flaxBinding534, _Vector4_xyy);
const _flaxBinding1558 = FlaxGetter("xyz", _flaxBinding534, _Vector4_xyz);
const _flaxBinding1559 = FlaxGetter("xyw", _flaxBinding534, _Vector4_xyw);
const _flaxBinding1560 = FlaxGetter("xzx", _flaxBinding534, _Vector4_xzx);
const _flaxBinding1561 = FlaxGetter("xzy", _flaxBinding534, _Vector4_xzy);
const _flaxBinding1562 = FlaxGetter("xzz", _flaxBinding534, _Vector4_xzz);
const _flaxBinding1563 = FlaxGetter("xzw", _flaxBinding534, _Vector4_xzw);
const _flaxBinding1564 = FlaxGetter("xwx", _flaxBinding534, _Vector4_xwx);
const _flaxBinding1565 = FlaxGetter("xwy", _flaxBinding534, _Vector4_xwy);
const _flaxBinding1566 = FlaxGetter("xwz", _flaxBinding534, _Vector4_xwz);
const _flaxBinding1567 = FlaxGetter("xww", _flaxBinding534, _Vector4_xww);
const _flaxBinding1568 = FlaxGetter("yxx", _flaxBinding534, _Vector4_yxx);
const _flaxBinding1569 = FlaxGetter("yxy", _flaxBinding534, _Vector4_yxy);
const _flaxBinding1570 = FlaxGetter("yxz", _flaxBinding534, _Vector4_yxz);
const _flaxBinding1571 = FlaxGetter("yxw", _flaxBinding534, _Vector4_yxw);
const _flaxBinding1572 = FlaxGetter("yyx", _flaxBinding534, _Vector4_yyx);
const _flaxBinding1573 = FlaxGetter("yyy", _flaxBinding534, _Vector4_yyy);
const _flaxBinding1574 = FlaxGetter("yyz", _flaxBinding534, _Vector4_yyz);
const _flaxBinding1575 = FlaxGetter("yyw", _flaxBinding534, _Vector4_yyw);
const _flaxBinding1576 = FlaxGetter("yzx", _flaxBinding534, _Vector4_yzx);
const _flaxBinding1577 = FlaxGetter("yzy", _flaxBinding534, _Vector4_yzy);
const _flaxBinding1578 = FlaxGetter("yzz", _flaxBinding534, _Vector4_yzz);
const _flaxBinding1579 = FlaxGetter("yzw", _flaxBinding534, _Vector4_yzw);
const _flaxBinding1580 = FlaxGetter("ywx", _flaxBinding534, _Vector4_ywx);
const _flaxBinding1581 = FlaxGetter("ywy", _flaxBinding534, _Vector4_ywy);
const _flaxBinding1582 = FlaxGetter("ywz", _flaxBinding534, _Vector4_ywz);
const _flaxBinding1583 = FlaxGetter("yww", _flaxBinding534, _Vector4_yww);
const _flaxBinding1584 = FlaxGetter("zxx", _flaxBinding534, _Vector4_zxx);
const _flaxBinding1585 = FlaxGetter("zxy", _flaxBinding534, _Vector4_zxy);
const _flaxBinding1586 = FlaxGetter("zxz", _flaxBinding534, _Vector4_zxz);
const _flaxBinding1587 = FlaxGetter("zxw", _flaxBinding534, _Vector4_zxw);
const _flaxBinding1588 = FlaxGetter("zyx", _flaxBinding534, _Vector4_zyx);
const _flaxBinding1589 = FlaxGetter("zyy", _flaxBinding534, _Vector4_zyy);
const _flaxBinding1590 = FlaxGetter("zyz", _flaxBinding534, _Vector4_zyz);
const _flaxBinding1591 = FlaxGetter("zyw", _flaxBinding534, _Vector4_zyw);
const _flaxBinding1592 = FlaxGetter("zzx", _flaxBinding534, _Vector4_zzx);
const _flaxBinding1593 = FlaxGetter("zzy", _flaxBinding534, _Vector4_zzy);
const _flaxBinding1594 = FlaxGetter("zzz", _flaxBinding534, _Vector4_zzz);
const _flaxBinding1595 = FlaxGetter("zzw", _flaxBinding534, _Vector4_zzw);
const _flaxBinding1596 = FlaxGetter("zwx", _flaxBinding534, _Vector4_zwx);
const _flaxBinding1597 = FlaxGetter("zwy", _flaxBinding534, _Vector4_zwy);
const _flaxBinding1598 = FlaxGetter("zwz", _flaxBinding534, _Vector4_zwz);
const _flaxBinding1599 = FlaxGetter("zww", _flaxBinding534, _Vector4_zww);
const _flaxBinding1600 = FlaxGetter("wxx", _flaxBinding534, _Vector4_wxx);
const _flaxBinding1601 = FlaxGetter("wxy", _flaxBinding534, _Vector4_wxy);
const _flaxBinding1602 = FlaxGetter("wxz", _flaxBinding534, _Vector4_wxz);
const _flaxBinding1603 = FlaxGetter("wxw", _flaxBinding534, _Vector4_wxw);
const _flaxBinding1604 = FlaxGetter("wyx", _flaxBinding534, _Vector4_wyx);
const _flaxBinding1605 = FlaxGetter("wyy", _flaxBinding534, _Vector4_wyy);
const _flaxBinding1606 = FlaxGetter("wyz", _flaxBinding534, _Vector4_wyz);
const _flaxBinding1607 = FlaxGetter("wyw", _flaxBinding534, _Vector4_wyw);
const _flaxBinding1608 = FlaxGetter("wzx", _flaxBinding534, _Vector4_wzx);
const _flaxBinding1609 = FlaxGetter("wzy", _flaxBinding534, _Vector4_wzy);
const _flaxBinding1610 = FlaxGetter("wzz", _flaxBinding534, _Vector4_wzz);
const _flaxBinding1611 = FlaxGetter("wzw", _flaxBinding534, _Vector4_wzw);
const _flaxBinding1612 = FlaxGetter("wwx", _flaxBinding534, _Vector4_wwx);
const _flaxBinding1613 = FlaxGetter("wwy", _flaxBinding534, _Vector4_wwy);
const _flaxBinding1614 = FlaxGetter("wwz", _flaxBinding534, _Vector4_wwz);
const _flaxBinding1615 = FlaxGetter("www", _flaxBinding534, _Vector4_www);
const _flaxBinding1616 = FlaxGetter("xxxx", _flaxBinding906, _Vector4_xxxx);
const _flaxBinding1617 = FlaxGetter("xxxy", _flaxBinding906, _Vector4_xxxy);
const _flaxBinding1618 = FlaxGetter("xxxz", _flaxBinding906, _Vector4_xxxz);
const _flaxBinding1619 = FlaxGetter("xxxw", _flaxBinding906, _Vector4_xxxw);
const _flaxBinding1620 = FlaxGetter("xxyx", _flaxBinding906, _Vector4_xxyx);
const _flaxBinding1621 = FlaxGetter("xxyy", _flaxBinding906, _Vector4_xxyy);
const _flaxBinding1622 = FlaxGetter("xxyz", _flaxBinding906, _Vector4_xxyz);
const _flaxBinding1623 = FlaxGetter("xxyw", _flaxBinding906, _Vector4_xxyw);
const _flaxBinding1624 = FlaxGetter("xxzx", _flaxBinding906, _Vector4_xxzx);
const _flaxBinding1625 = FlaxGetter("xxzy", _flaxBinding906, _Vector4_xxzy);
const _flaxBinding1626 = FlaxGetter("xxzz", _flaxBinding906, _Vector4_xxzz);
const _flaxBinding1627 = FlaxGetter("xxzw", _flaxBinding906, _Vector4_xxzw);
const _flaxBinding1628 = FlaxGetter("xxwx", _flaxBinding906, _Vector4_xxwx);
const _flaxBinding1629 = FlaxGetter("xxwy", _flaxBinding906, _Vector4_xxwy);
const _flaxBinding1630 = FlaxGetter("xxwz", _flaxBinding906, _Vector4_xxwz);
const _flaxBinding1631 = FlaxGetter("xxww", _flaxBinding906, _Vector4_xxww);
const _flaxBinding1632 = FlaxGetter("xyxx", _flaxBinding906, _Vector4_xyxx);
const _flaxBinding1633 = FlaxGetter("xyxy", _flaxBinding906, _Vector4_xyxy);
const _flaxBinding1634 = FlaxGetter("xyxz", _flaxBinding906, _Vector4_xyxz);
const _flaxBinding1635 = FlaxGetter("xyxw", _flaxBinding906, _Vector4_xyxw);
const _flaxBinding1636 = FlaxGetter("xyyx", _flaxBinding906, _Vector4_xyyx);
const _flaxBinding1637 = FlaxGetter("xyyy", _flaxBinding906, _Vector4_xyyy);
const _flaxBinding1638 = FlaxGetter("xyyz", _flaxBinding906, _Vector4_xyyz);
const _flaxBinding1639 = FlaxGetter("xyyw", _flaxBinding906, _Vector4_xyyw);
const _flaxBinding1640 = FlaxGetter("xyzx", _flaxBinding906, _Vector4_xyzx);
const _flaxBinding1641 = FlaxGetter("xyzy", _flaxBinding906, _Vector4_xyzy);
const _flaxBinding1642 = FlaxGetter("xyzz", _flaxBinding906, _Vector4_xyzz);
const _flaxBinding1643 = FlaxGetter("xyzw", _flaxBinding906, _Vector4_xyzw);
const _flaxBinding1644 = FlaxGetter("xywx", _flaxBinding906, _Vector4_xywx);
const _flaxBinding1645 = FlaxGetter("xywy", _flaxBinding906, _Vector4_xywy);
const _flaxBinding1646 = FlaxGetter("xywz", _flaxBinding906, _Vector4_xywz);
const _flaxBinding1647 = FlaxGetter("xyww", _flaxBinding906, _Vector4_xyww);
const _flaxBinding1648 = FlaxGetter("xzxx", _flaxBinding906, _Vector4_xzxx);
const _flaxBinding1649 = FlaxGetter("xzxy", _flaxBinding906, _Vector4_xzxy);
const _flaxBinding1650 = FlaxGetter("xzxz", _flaxBinding906, _Vector4_xzxz);
const _flaxBinding1651 = FlaxGetter("xzxw", _flaxBinding906, _Vector4_xzxw);
const _flaxBinding1652 = FlaxGetter("xzyx", _flaxBinding906, _Vector4_xzyx);
const _flaxBinding1653 = FlaxGetter("xzyy", _flaxBinding906, _Vector4_xzyy);
const _flaxBinding1654 = FlaxGetter("xzyz", _flaxBinding906, _Vector4_xzyz);
const _flaxBinding1655 = FlaxGetter("xzyw", _flaxBinding906, _Vector4_xzyw);
const _flaxBinding1656 = FlaxGetter("xzzx", _flaxBinding906, _Vector4_xzzx);
const _flaxBinding1657 = FlaxGetter("xzzy", _flaxBinding906, _Vector4_xzzy);
const _flaxBinding1658 = FlaxGetter("xzzz", _flaxBinding906, _Vector4_xzzz);
const _flaxBinding1659 = FlaxGetter("xzzw", _flaxBinding906, _Vector4_xzzw);
const _flaxBinding1660 = FlaxGetter("xzwx", _flaxBinding906, _Vector4_xzwx);
const _flaxBinding1661 = FlaxGetter("xzwy", _flaxBinding906, _Vector4_xzwy);
const _flaxBinding1662 = FlaxGetter("xzwz", _flaxBinding906, _Vector4_xzwz);
const _flaxBinding1663 = FlaxGetter("xzww", _flaxBinding906, _Vector4_xzww);
const _flaxBinding1664 = FlaxGetter("xwxx", _flaxBinding906, _Vector4_xwxx);
const _flaxBinding1665 = FlaxGetter("xwxy", _flaxBinding906, _Vector4_xwxy);
const _flaxBinding1666 = FlaxGetter("xwxz", _flaxBinding906, _Vector4_xwxz);
const _flaxBinding1667 = FlaxGetter("xwxw", _flaxBinding906, _Vector4_xwxw);
const _flaxBinding1668 = FlaxGetter("xwyx", _flaxBinding906, _Vector4_xwyx);
const _flaxBinding1669 = FlaxGetter("xwyy", _flaxBinding906, _Vector4_xwyy);
const _flaxBinding1670 = FlaxGetter("xwyz", _flaxBinding906, _Vector4_xwyz);
const _flaxBinding1671 = FlaxGetter("xwyw", _flaxBinding906, _Vector4_xwyw);
const _flaxBinding1672 = FlaxGetter("xwzx", _flaxBinding906, _Vector4_xwzx);
const _flaxBinding1673 = FlaxGetter("xwzy", _flaxBinding906, _Vector4_xwzy);
const _flaxBinding1674 = FlaxGetter("xwzz", _flaxBinding906, _Vector4_xwzz);
const _flaxBinding1675 = FlaxGetter("xwzw", _flaxBinding906, _Vector4_xwzw);
const _flaxBinding1676 = FlaxGetter("xwwx", _flaxBinding906, _Vector4_xwwx);
const _flaxBinding1677 = FlaxGetter("xwwy", _flaxBinding906, _Vector4_xwwy);
const _flaxBinding1678 = FlaxGetter("xwwz", _flaxBinding906, _Vector4_xwwz);
const _flaxBinding1679 = FlaxGetter("xwww", _flaxBinding906, _Vector4_xwww);
const _flaxBinding1680 = FlaxGetter("yxxx", _flaxBinding906, _Vector4_yxxx);
const _flaxBinding1681 = FlaxGetter("yxxy", _flaxBinding906, _Vector4_yxxy);
const _flaxBinding1682 = FlaxGetter("yxxz", _flaxBinding906, _Vector4_yxxz);
const _flaxBinding1683 = FlaxGetter("yxxw", _flaxBinding906, _Vector4_yxxw);
const _flaxBinding1684 = FlaxGetter("yxyx", _flaxBinding906, _Vector4_yxyx);
const _flaxBinding1685 = FlaxGetter("yxyy", _flaxBinding906, _Vector4_yxyy);
const _flaxBinding1686 = FlaxGetter("yxyz", _flaxBinding906, _Vector4_yxyz);
const _flaxBinding1687 = FlaxGetter("yxyw", _flaxBinding906, _Vector4_yxyw);
const _flaxBinding1688 = FlaxGetter("yxzx", _flaxBinding906, _Vector4_yxzx);
const _flaxBinding1689 = FlaxGetter("yxzy", _flaxBinding906, _Vector4_yxzy);
const _flaxBinding1690 = FlaxGetter("yxzz", _flaxBinding906, _Vector4_yxzz);
const _flaxBinding1691 = FlaxGetter("yxzw", _flaxBinding906, _Vector4_yxzw);
const _flaxBinding1692 = FlaxGetter("yxwx", _flaxBinding906, _Vector4_yxwx);
const _flaxBinding1693 = FlaxGetter("yxwy", _flaxBinding906, _Vector4_yxwy);
const _flaxBinding1694 = FlaxGetter("yxwz", _flaxBinding906, _Vector4_yxwz);
const _flaxBinding1695 = FlaxGetter("yxww", _flaxBinding906, _Vector4_yxww);
const _flaxBinding1696 = FlaxGetter("yyxx", _flaxBinding906, _Vector4_yyxx);
const _flaxBinding1697 = FlaxGetter("yyxy", _flaxBinding906, _Vector4_yyxy);
const _flaxBinding1698 = FlaxGetter("yyxz", _flaxBinding906, _Vector4_yyxz);
const _flaxBinding1699 = FlaxGetter("yyxw", _flaxBinding906, _Vector4_yyxw);
const _flaxBinding1700 = FlaxGetter("yyyx", _flaxBinding906, _Vector4_yyyx);
const _flaxBinding1701 = FlaxGetter("yyyy", _flaxBinding906, _Vector4_yyyy);
const _flaxBinding1702 = FlaxGetter("yyyz", _flaxBinding906, _Vector4_yyyz);
const _flaxBinding1703 = FlaxGetter("yyyw", _flaxBinding906, _Vector4_yyyw);
const _flaxBinding1704 = FlaxGetter("yyzx", _flaxBinding906, _Vector4_yyzx);
const _flaxBinding1705 = FlaxGetter("yyzy", _flaxBinding906, _Vector4_yyzy);
const _flaxBinding1706 = FlaxGetter("yyzz", _flaxBinding906, _Vector4_yyzz);
const _flaxBinding1707 = FlaxGetter("yyzw", _flaxBinding906, _Vector4_yyzw);
const _flaxBinding1708 = FlaxGetter("yywx", _flaxBinding906, _Vector4_yywx);
const _flaxBinding1709 = FlaxGetter("yywy", _flaxBinding906, _Vector4_yywy);
const _flaxBinding1710 = FlaxGetter("yywz", _flaxBinding906, _Vector4_yywz);
const _flaxBinding1711 = FlaxGetter("yyww", _flaxBinding906, _Vector4_yyww);
const _flaxBinding1712 = FlaxGetter("yzxx", _flaxBinding906, _Vector4_yzxx);
const _flaxBinding1713 = FlaxGetter("yzxy", _flaxBinding906, _Vector4_yzxy);
const _flaxBinding1714 = FlaxGetter("yzxz", _flaxBinding906, _Vector4_yzxz);
const _flaxBinding1715 = FlaxGetter("yzxw", _flaxBinding906, _Vector4_yzxw);
const _flaxBinding1716 = FlaxGetter("yzyx", _flaxBinding906, _Vector4_yzyx);
const _flaxBinding1717 = FlaxGetter("yzyy", _flaxBinding906, _Vector4_yzyy);
const _flaxBinding1718 = FlaxGetter("yzyz", _flaxBinding906, _Vector4_yzyz);
const _flaxBinding1719 = FlaxGetter("yzyw", _flaxBinding906, _Vector4_yzyw);
const _flaxBinding1720 = FlaxGetter("yzzx", _flaxBinding906, _Vector4_yzzx);
const _flaxBinding1721 = FlaxGetter("yzzy", _flaxBinding906, _Vector4_yzzy);
const _flaxBinding1722 = FlaxGetter("yzzz", _flaxBinding906, _Vector4_yzzz);
const _flaxBinding1723 = FlaxGetter("yzzw", _flaxBinding906, _Vector4_yzzw);
const _flaxBinding1724 = FlaxGetter("yzwx", _flaxBinding906, _Vector4_yzwx);
const _flaxBinding1725 = FlaxGetter("yzwy", _flaxBinding906, _Vector4_yzwy);
const _flaxBinding1726 = FlaxGetter("yzwz", _flaxBinding906, _Vector4_yzwz);
const _flaxBinding1727 = FlaxGetter("yzww", _flaxBinding906, _Vector4_yzww);
const _flaxBinding1728 = FlaxGetter("ywxx", _flaxBinding906, _Vector4_ywxx);
const _flaxBinding1729 = FlaxGetter("ywxy", _flaxBinding906, _Vector4_ywxy);
const _flaxBinding1730 = FlaxGetter("ywxz", _flaxBinding906, _Vector4_ywxz);
const _flaxBinding1731 = FlaxGetter("ywxw", _flaxBinding906, _Vector4_ywxw);
const _flaxBinding1732 = FlaxGetter("ywyx", _flaxBinding906, _Vector4_ywyx);
const _flaxBinding1733 = FlaxGetter("ywyy", _flaxBinding906, _Vector4_ywyy);
const _flaxBinding1734 = FlaxGetter("ywyz", _flaxBinding906, _Vector4_ywyz);
const _flaxBinding1735 = FlaxGetter("ywyw", _flaxBinding906, _Vector4_ywyw);
const _flaxBinding1736 = FlaxGetter("ywzx", _flaxBinding906, _Vector4_ywzx);
const _flaxBinding1737 = FlaxGetter("ywzy", _flaxBinding906, _Vector4_ywzy);
const _flaxBinding1738 = FlaxGetter("ywzz", _flaxBinding906, _Vector4_ywzz);
const _flaxBinding1739 = FlaxGetter("ywzw", _flaxBinding906, _Vector4_ywzw);
const _flaxBinding1740 = FlaxGetter("ywwx", _flaxBinding906, _Vector4_ywwx);
const _flaxBinding1741 = FlaxGetter("ywwy", _flaxBinding906, _Vector4_ywwy);
const _flaxBinding1742 = FlaxGetter("ywwz", _flaxBinding906, _Vector4_ywwz);
const _flaxBinding1743 = FlaxGetter("ywww", _flaxBinding906, _Vector4_ywww);
const _flaxBinding1744 = FlaxGetter("zxxx", _flaxBinding906, _Vector4_zxxx);
const _flaxBinding1745 = FlaxGetter("zxxy", _flaxBinding906, _Vector4_zxxy);
const _flaxBinding1746 = FlaxGetter("zxxz", _flaxBinding906, _Vector4_zxxz);
const _flaxBinding1747 = FlaxGetter("zxxw", _flaxBinding906, _Vector4_zxxw);
const _flaxBinding1748 = FlaxGetter("zxyx", _flaxBinding906, _Vector4_zxyx);
const _flaxBinding1749 = FlaxGetter("zxyy", _flaxBinding906, _Vector4_zxyy);
const _flaxBinding1750 = FlaxGetter("zxyz", _flaxBinding906, _Vector4_zxyz);
const _flaxBinding1751 = FlaxGetter("zxyw", _flaxBinding906, _Vector4_zxyw);
const _flaxBinding1752 = FlaxGetter("zxzx", _flaxBinding906, _Vector4_zxzx);
const _flaxBinding1753 = FlaxGetter("zxzy", _flaxBinding906, _Vector4_zxzy);
const _flaxBinding1754 = FlaxGetter("zxzz", _flaxBinding906, _Vector4_zxzz);
const _flaxBinding1755 = FlaxGetter("zxzw", _flaxBinding906, _Vector4_zxzw);
const _flaxBinding1756 = FlaxGetter("zxwx", _flaxBinding906, _Vector4_zxwx);
const _flaxBinding1757 = FlaxGetter("zxwy", _flaxBinding906, _Vector4_zxwy);
const _flaxBinding1758 = FlaxGetter("zxwz", _flaxBinding906, _Vector4_zxwz);
const _flaxBinding1759 = FlaxGetter("zxww", _flaxBinding906, _Vector4_zxww);
const _flaxBinding1760 = FlaxGetter("zyxx", _flaxBinding906, _Vector4_zyxx);
const _flaxBinding1761 = FlaxGetter("zyxy", _flaxBinding906, _Vector4_zyxy);
const _flaxBinding1762 = FlaxGetter("zyxz", _flaxBinding906, _Vector4_zyxz);
const _flaxBinding1763 = FlaxGetter("zyxw", _flaxBinding906, _Vector4_zyxw);
const _flaxBinding1764 = FlaxGetter("zyyx", _flaxBinding906, _Vector4_zyyx);
const _flaxBinding1765 = FlaxGetter("zyyy", _flaxBinding906, _Vector4_zyyy);
const _flaxBinding1766 = FlaxGetter("zyyz", _flaxBinding906, _Vector4_zyyz);
const _flaxBinding1767 = FlaxGetter("zyyw", _flaxBinding906, _Vector4_zyyw);
const _flaxBinding1768 = FlaxGetter("zyzx", _flaxBinding906, _Vector4_zyzx);
const _flaxBinding1769 = FlaxGetter("zyzy", _flaxBinding906, _Vector4_zyzy);
const _flaxBinding1770 = FlaxGetter("zyzz", _flaxBinding906, _Vector4_zyzz);
const _flaxBinding1771 = FlaxGetter("zyzw", _flaxBinding906, _Vector4_zyzw);
const _flaxBinding1772 = FlaxGetter("zywx", _flaxBinding906, _Vector4_zywx);
const _flaxBinding1773 = FlaxGetter("zywy", _flaxBinding906, _Vector4_zywy);
const _flaxBinding1774 = FlaxGetter("zywz", _flaxBinding906, _Vector4_zywz);
const _flaxBinding1775 = FlaxGetter("zyww", _flaxBinding906, _Vector4_zyww);
const _flaxBinding1776 = FlaxGetter("zzxx", _flaxBinding906, _Vector4_zzxx);
const _flaxBinding1777 = FlaxGetter("zzxy", _flaxBinding906, _Vector4_zzxy);
const _flaxBinding1778 = FlaxGetter("zzxz", _flaxBinding906, _Vector4_zzxz);
const _flaxBinding1779 = FlaxGetter("zzxw", _flaxBinding906, _Vector4_zzxw);
const _flaxBinding1780 = FlaxGetter("zzyx", _flaxBinding906, _Vector4_zzyx);
const _flaxBinding1781 = FlaxGetter("zzyy", _flaxBinding906, _Vector4_zzyy);
const _flaxBinding1782 = FlaxGetter("zzyz", _flaxBinding906, _Vector4_zzyz);
const _flaxBinding1783 = FlaxGetter("zzyw", _flaxBinding906, _Vector4_zzyw);
const _flaxBinding1784 = FlaxGetter("zzzx", _flaxBinding906, _Vector4_zzzx);
const _flaxBinding1785 = FlaxGetter("zzzy", _flaxBinding906, _Vector4_zzzy);
const _flaxBinding1786 = FlaxGetter("zzzz", _flaxBinding906, _Vector4_zzzz);
const _flaxBinding1787 = FlaxGetter("zzzw", _flaxBinding906, _Vector4_zzzw);
const _flaxBinding1788 = FlaxGetter("zzwx", _flaxBinding906, _Vector4_zzwx);
const _flaxBinding1789 = FlaxGetter("zzwy", _flaxBinding906, _Vector4_zzwy);
const _flaxBinding1790 = FlaxGetter("zzwz", _flaxBinding906, _Vector4_zzwz);
const _flaxBinding1791 = FlaxGetter("zzww", _flaxBinding906, _Vector4_zzww);
const _flaxBinding1792 = FlaxGetter("zwxx", _flaxBinding906, _Vector4_zwxx);
const _flaxBinding1793 = FlaxGetter("zwxy", _flaxBinding906, _Vector4_zwxy);
const _flaxBinding1794 = FlaxGetter("zwxz", _flaxBinding906, _Vector4_zwxz);
const _flaxBinding1795 = FlaxGetter("zwxw", _flaxBinding906, _Vector4_zwxw);
const _flaxBinding1796 = FlaxGetter("zwyx", _flaxBinding906, _Vector4_zwyx);
const _flaxBinding1797 = FlaxGetter("zwyy", _flaxBinding906, _Vector4_zwyy);
const _flaxBinding1798 = FlaxGetter("zwyz", _flaxBinding906, _Vector4_zwyz);
const _flaxBinding1799 = FlaxGetter("zwyw", _flaxBinding906, _Vector4_zwyw);
const _flaxBinding1800 = FlaxGetter("zwzx", _flaxBinding906, _Vector4_zwzx);
const _flaxBinding1801 = FlaxGetter("zwzy", _flaxBinding906, _Vector4_zwzy);
const _flaxBinding1802 = FlaxGetter("zwzz", _flaxBinding906, _Vector4_zwzz);
const _flaxBinding1803 = FlaxGetter("zwzw", _flaxBinding906, _Vector4_zwzw);
const _flaxBinding1804 = FlaxGetter("zwwx", _flaxBinding906, _Vector4_zwwx);
const _flaxBinding1805 = FlaxGetter("zwwy", _flaxBinding906, _Vector4_zwwy);
const _flaxBinding1806 = FlaxGetter("zwwz", _flaxBinding906, _Vector4_zwwz);
const _flaxBinding1807 = FlaxGetter("zwww", _flaxBinding906, _Vector4_zwww);
const _flaxBinding1808 = FlaxGetter("wxxx", _flaxBinding906, _Vector4_wxxx);
const _flaxBinding1809 = FlaxGetter("wxxy", _flaxBinding906, _Vector4_wxxy);
const _flaxBinding1810 = FlaxGetter("wxxz", _flaxBinding906, _Vector4_wxxz);
const _flaxBinding1811 = FlaxGetter("wxxw", _flaxBinding906, _Vector4_wxxw);
const _flaxBinding1812 = FlaxGetter("wxyx", _flaxBinding906, _Vector4_wxyx);
const _flaxBinding1813 = FlaxGetter("wxyy", _flaxBinding906, _Vector4_wxyy);
const _flaxBinding1814 = FlaxGetter("wxyz", _flaxBinding906, _Vector4_wxyz);
const _flaxBinding1815 = FlaxGetter("wxyw", _flaxBinding906, _Vector4_wxyw);
const _flaxBinding1816 = FlaxGetter("wxzx", _flaxBinding906, _Vector4_wxzx);
const _flaxBinding1817 = FlaxGetter("wxzy", _flaxBinding906, _Vector4_wxzy);
const _flaxBinding1818 = FlaxGetter("wxzz", _flaxBinding906, _Vector4_wxzz);
const _flaxBinding1819 = FlaxGetter("wxzw", _flaxBinding906, _Vector4_wxzw);
const _flaxBinding1820 = FlaxGetter("wxwx", _flaxBinding906, _Vector4_wxwx);
const _flaxBinding1821 = FlaxGetter("wxwy", _flaxBinding906, _Vector4_wxwy);
const _flaxBinding1822 = FlaxGetter("wxwz", _flaxBinding906, _Vector4_wxwz);
const _flaxBinding1823 = FlaxGetter("wxww", _flaxBinding906, _Vector4_wxww);
const _flaxBinding1824 = FlaxGetter("wyxx", _flaxBinding906, _Vector4_wyxx);
const _flaxBinding1825 = FlaxGetter("wyxy", _flaxBinding906, _Vector4_wyxy);
const _flaxBinding1826 = FlaxGetter("wyxz", _flaxBinding906, _Vector4_wyxz);
const _flaxBinding1827 = FlaxGetter("wyxw", _flaxBinding906, _Vector4_wyxw);
const _flaxBinding1828 = FlaxGetter("wyyx", _flaxBinding906, _Vector4_wyyx);
const _flaxBinding1829 = FlaxGetter("wyyy", _flaxBinding906, _Vector4_wyyy);
const _flaxBinding1830 = FlaxGetter("wyyz", _flaxBinding906, _Vector4_wyyz);
const _flaxBinding1831 = FlaxGetter("wyyw", _flaxBinding906, _Vector4_wyyw);
const _flaxBinding1832 = FlaxGetter("wyzx", _flaxBinding906, _Vector4_wyzx);
const _flaxBinding1833 = FlaxGetter("wyzy", _flaxBinding906, _Vector4_wyzy);
const _flaxBinding1834 = FlaxGetter("wyzz", _flaxBinding906, _Vector4_wyzz);
const _flaxBinding1835 = FlaxGetter("wyzw", _flaxBinding906, _Vector4_wyzw);
const _flaxBinding1836 = FlaxGetter("wywx", _flaxBinding906, _Vector4_wywx);
const _flaxBinding1837 = FlaxGetter("wywy", _flaxBinding906, _Vector4_wywy);
const _flaxBinding1838 = FlaxGetter("wywz", _flaxBinding906, _Vector4_wywz);
const _flaxBinding1839 = FlaxGetter("wyww", _flaxBinding906, _Vector4_wyww);
const _flaxBinding1840 = FlaxGetter("wzxx", _flaxBinding906, _Vector4_wzxx);
const _flaxBinding1841 = FlaxGetter("wzxy", _flaxBinding906, _Vector4_wzxy);
const _flaxBinding1842 = FlaxGetter("wzxz", _flaxBinding906, _Vector4_wzxz);
const _flaxBinding1843 = FlaxGetter("wzxw", _flaxBinding906, _Vector4_wzxw);
const _flaxBinding1844 = FlaxGetter("wzyx", _flaxBinding906, _Vector4_wzyx);
const _flaxBinding1845 = FlaxGetter("wzyy", _flaxBinding906, _Vector4_wzyy);
const _flaxBinding1846 = FlaxGetter("wzyz", _flaxBinding906, _Vector4_wzyz);
const _flaxBinding1847 = FlaxGetter("wzyw", _flaxBinding906, _Vector4_wzyw);
const _flaxBinding1848 = FlaxGetter("wzzx", _flaxBinding906, _Vector4_wzzx);
const _flaxBinding1849 = FlaxGetter("wzzy", _flaxBinding906, _Vector4_wzzy);
const _flaxBinding1850 = FlaxGetter("wzzz", _flaxBinding906, _Vector4_wzzz);
const _flaxBinding1851 = FlaxGetter("wzzw", _flaxBinding906, _Vector4_wzzw);
const _flaxBinding1852 = FlaxGetter("wzwx", _flaxBinding906, _Vector4_wzwx);
const _flaxBinding1853 = FlaxGetter("wzwy", _flaxBinding906, _Vector4_wzwy);
const _flaxBinding1854 = FlaxGetter("wzwz", _flaxBinding906, _Vector4_wzwz);
const _flaxBinding1855 = FlaxGetter("wzww", _flaxBinding906, _Vector4_wzww);
const _flaxBinding1856 = FlaxGetter("wwxx", _flaxBinding906, _Vector4_wwxx);
const _flaxBinding1857 = FlaxGetter("wwxy", _flaxBinding906, _Vector4_wwxy);
const _flaxBinding1858 = FlaxGetter("wwxz", _flaxBinding906, _Vector4_wwxz);
const _flaxBinding1859 = FlaxGetter("wwxw", _flaxBinding906, _Vector4_wwxw);
const _flaxBinding1860 = FlaxGetter("wwyx", _flaxBinding906, _Vector4_wwyx);
const _flaxBinding1861 = FlaxGetter("wwyy", _flaxBinding906, _Vector4_wwyy);
const _flaxBinding1862 = FlaxGetter("wwyz", _flaxBinding906, _Vector4_wwyz);
const _flaxBinding1863 = FlaxGetter("wwyw", _flaxBinding906, _Vector4_wwyw);
const _flaxBinding1864 = FlaxGetter("wwzx", _flaxBinding906, _Vector4_wwzx);
const _flaxBinding1865 = FlaxGetter("wwzy", _flaxBinding906, _Vector4_wwzy);
const _flaxBinding1866 = FlaxGetter("wwzz", _flaxBinding906, _Vector4_wwzz);
const _flaxBinding1867 = FlaxGetter("wwzw", _flaxBinding906, _Vector4_wwzw);
const _flaxBinding1868 = FlaxGetter("wwwx", _flaxBinding906, _Vector4_wwwx);
const _flaxBinding1869 = FlaxGetter("wwwy", _flaxBinding906, _Vector4_wwwy);
const _flaxBinding1870 = FlaxGetter("wwwz", _flaxBinding906, _Vector4_wwwz);
const _flaxBinding1871 = FlaxGetter("wwww", _flaxBinding906, _Vector4_wwww);
const _flaxBinding1872 = FlaxGetter("r", _flaxBinding448, _Vector4_r);
const _flaxBinding1873 = FlaxGetter("g", _flaxBinding448, _Vector4_g);
const _flaxBinding1874 = FlaxGetter("b", _flaxBinding448, _Vector4_b);
const _flaxBinding1875 = FlaxGetter("a", _flaxBinding448, _Vector4_a);
const _flaxBinding1876 = FlaxGetter("s", _flaxBinding448, _Vector4_s);
const _flaxBinding1877 = FlaxGetter("t", _flaxBinding448, _Vector4_t);
const _flaxBinding1878 = FlaxGetter("p", _flaxBinding448, _Vector4_p);
const _flaxBinding1879 = FlaxGetter("q", _flaxBinding448, _Vector4_q);
const _flaxBinding1880 = FlaxGetter("x", _flaxBinding448, _Vector4_x);
const _flaxBinding1881 = FlaxGetter("y", _flaxBinding448, _Vector4_y);
const _flaxBinding1882 = FlaxGetter("z", _flaxBinding448, _Vector4_z);
const _flaxBinding1883 = FlaxGetter("w", _flaxBinding448, _Vector4_w);
const _flaxBinding1884 = FlaxGetter("rr", _flaxBinding441, _Vector4_rr);
const _flaxBinding1885 = FlaxGetter("rg", _flaxBinding441, _Vector4_rg);
const _flaxBinding1886 = FlaxGetter("rb", _flaxBinding441, _Vector4_rb);
const _flaxBinding1887 = FlaxGetter("ra", _flaxBinding441, _Vector4_ra);
const _flaxBinding1888 = FlaxGetter("gr", _flaxBinding441, _Vector4_gr);
const _flaxBinding1889 = FlaxGetter("gg", _flaxBinding441, _Vector4_gg);
const _flaxBinding1890 = FlaxGetter("gb", _flaxBinding441, _Vector4_gb);
const _flaxBinding1891 = FlaxGetter("ga", _flaxBinding441, _Vector4_ga);
const _flaxBinding1892 = FlaxGetter("br", _flaxBinding441, _Vector4_br);
const _flaxBinding1893 = FlaxGetter("bg", _flaxBinding441, _Vector4_bg);
const _flaxBinding1894 = FlaxGetter("bb", _flaxBinding441, _Vector4_bb);
const _flaxBinding1895 = FlaxGetter("ba", _flaxBinding441, _Vector4_ba);
const _flaxBinding1896 = FlaxGetter("ar", _flaxBinding441, _Vector4_ar);
const _flaxBinding1897 = FlaxGetter("ag", _flaxBinding441, _Vector4_ag);
const _flaxBinding1898 = FlaxGetter("ab", _flaxBinding441, _Vector4_ab);
const _flaxBinding1899 = FlaxGetter("aa", _flaxBinding441, _Vector4_aa);
const _flaxBinding1900 = FlaxGetter("rrr", _flaxBinding534, _Vector4_rrr);
const _flaxBinding1901 = FlaxGetter("rrg", _flaxBinding534, _Vector4_rrg);
const _flaxBinding1902 = FlaxGetter("rrb", _flaxBinding534, _Vector4_rrb);
const _flaxBinding1903 = FlaxGetter("rra", _flaxBinding534, _Vector4_rra);
const _flaxBinding1904 = FlaxGetter("rgr", _flaxBinding534, _Vector4_rgr);
const _flaxBinding1905 = FlaxGetter("rgg", _flaxBinding534, _Vector4_rgg);
const _flaxBinding1906 = FlaxGetter("rgb", _flaxBinding534, _Vector4_rgb);
const _flaxBinding1907 = FlaxGetter("rga", _flaxBinding534, _Vector4_rga);
const _flaxBinding1908 = FlaxGetter("rbr", _flaxBinding534, _Vector4_rbr);
const _flaxBinding1909 = FlaxGetter("rbg", _flaxBinding534, _Vector4_rbg);
const _flaxBinding1910 = FlaxGetter("rbb", _flaxBinding534, _Vector4_rbb);
const _flaxBinding1911 = FlaxGetter("rba", _flaxBinding534, _Vector4_rba);
const _flaxBinding1912 = FlaxGetter("rar", _flaxBinding534, _Vector4_rar);
const _flaxBinding1913 = FlaxGetter("rag", _flaxBinding534, _Vector4_rag);
const _flaxBinding1914 = FlaxGetter("rab", _flaxBinding534, _Vector4_rab);
const _flaxBinding1915 = FlaxGetter("raa", _flaxBinding534, _Vector4_raa);
const _flaxBinding1916 = FlaxGetter("grr", _flaxBinding534, _Vector4_grr);
const _flaxBinding1917 = FlaxGetter("grg", _flaxBinding534, _Vector4_grg);
const _flaxBinding1918 = FlaxGetter("grb", _flaxBinding534, _Vector4_grb);
const _flaxBinding1919 = FlaxGetter("gra", _flaxBinding534, _Vector4_gra);
const _flaxBinding1920 = FlaxGetter("ggr", _flaxBinding534, _Vector4_ggr);
const _flaxBinding1921 = FlaxGetter("ggg", _flaxBinding534, _Vector4_ggg);
const _flaxBinding1922 = FlaxGetter("ggb", _flaxBinding534, _Vector4_ggb);
const _flaxBinding1923 = FlaxGetter("gga", _flaxBinding534, _Vector4_gga);
const _flaxBinding1924 = FlaxGetter("gbr", _flaxBinding534, _Vector4_gbr);
const _flaxBinding1925 = FlaxGetter("gbg", _flaxBinding534, _Vector4_gbg);
const _flaxBinding1926 = FlaxGetter("gbb", _flaxBinding534, _Vector4_gbb);
const _flaxBinding1927 = FlaxGetter("gba", _flaxBinding534, _Vector4_gba);
const _flaxBinding1928 = FlaxGetter("gar", _flaxBinding534, _Vector4_gar);
const _flaxBinding1929 = FlaxGetter("gag", _flaxBinding534, _Vector4_gag);
const _flaxBinding1930 = FlaxGetter("gab", _flaxBinding534, _Vector4_gab);
const _flaxBinding1931 = FlaxGetter("gaa", _flaxBinding534, _Vector4_gaa);
const _flaxBinding1932 = FlaxGetter("brr", _flaxBinding534, _Vector4_brr);
const _flaxBinding1933 = FlaxGetter("brg", _flaxBinding534, _Vector4_brg);
const _flaxBinding1934 = FlaxGetter("brb", _flaxBinding534, _Vector4_brb);
const _flaxBinding1935 = FlaxGetter("bra", _flaxBinding534, _Vector4_bra);
const _flaxBinding1936 = FlaxGetter("bgr", _flaxBinding534, _Vector4_bgr);
const _flaxBinding1937 = FlaxGetter("bgg", _flaxBinding534, _Vector4_bgg);
const _flaxBinding1938 = FlaxGetter("bgb", _flaxBinding534, _Vector4_bgb);
const _flaxBinding1939 = FlaxGetter("bga", _flaxBinding534, _Vector4_bga);
const _flaxBinding1940 = FlaxGetter("bbr", _flaxBinding534, _Vector4_bbr);
const _flaxBinding1941 = FlaxGetter("bbg", _flaxBinding534, _Vector4_bbg);
const _flaxBinding1942 = FlaxGetter("bbb", _flaxBinding534, _Vector4_bbb);
const _flaxBinding1943 = FlaxGetter("bba", _flaxBinding534, _Vector4_bba);
const _flaxBinding1944 = FlaxGetter("bar", _flaxBinding534, _Vector4_bar);
const _flaxBinding1945 = FlaxGetter("bag", _flaxBinding534, _Vector4_bag);
const _flaxBinding1946 = FlaxGetter("bab", _flaxBinding534, _Vector4_bab);
const _flaxBinding1947 = FlaxGetter("baa", _flaxBinding534, _Vector4_baa);
const _flaxBinding1948 = FlaxGetter("arr", _flaxBinding534, _Vector4_arr);
const _flaxBinding1949 = FlaxGetter("arg", _flaxBinding534, _Vector4_arg);
const _flaxBinding1950 = FlaxGetter("arb", _flaxBinding534, _Vector4_arb);
const _flaxBinding1951 = FlaxGetter("ara", _flaxBinding534, _Vector4_ara);
const _flaxBinding1952 = FlaxGetter("agr", _flaxBinding534, _Vector4_agr);
const _flaxBinding1953 = FlaxGetter("agg", _flaxBinding534, _Vector4_agg);
const _flaxBinding1954 = FlaxGetter("agb", _flaxBinding534, _Vector4_agb);
const _flaxBinding1955 = FlaxGetter("aga", _flaxBinding534, _Vector4_aga);
const _flaxBinding1956 = FlaxGetter("abr", _flaxBinding534, _Vector4_abr);
const _flaxBinding1957 = FlaxGetter("abg", _flaxBinding534, _Vector4_abg);
const _flaxBinding1958 = FlaxGetter("abb", _flaxBinding534, _Vector4_abb);
const _flaxBinding1959 = FlaxGetter("aba", _flaxBinding534, _Vector4_aba);
const _flaxBinding1960 = FlaxGetter("aar", _flaxBinding534, _Vector4_aar);
const _flaxBinding1961 = FlaxGetter("aag", _flaxBinding534, _Vector4_aag);
const _flaxBinding1962 = FlaxGetter("aab", _flaxBinding534, _Vector4_aab);
const _flaxBinding1963 = FlaxGetter("aaa", _flaxBinding534, _Vector4_aaa);
const _flaxBinding1964 = FlaxGetter("rrrr", _flaxBinding906, _Vector4_rrrr);
const _flaxBinding1965 = FlaxGetter("rrrg", _flaxBinding906, _Vector4_rrrg);
const _flaxBinding1966 = FlaxGetter("rrrb", _flaxBinding906, _Vector4_rrrb);
const _flaxBinding1967 = FlaxGetter("rrra", _flaxBinding906, _Vector4_rrra);
const _flaxBinding1968 = FlaxGetter("rrgr", _flaxBinding906, _Vector4_rrgr);
const _flaxBinding1969 = FlaxGetter("rrgg", _flaxBinding906, _Vector4_rrgg);
const _flaxBinding1970 = FlaxGetter("rrgb", _flaxBinding906, _Vector4_rrgb);
const _flaxBinding1971 = FlaxGetter("rrga", _flaxBinding906, _Vector4_rrga);
const _flaxBinding1972 = FlaxGetter("rrbr", _flaxBinding906, _Vector4_rrbr);
const _flaxBinding1973 = FlaxGetter("rrbg", _flaxBinding906, _Vector4_rrbg);
const _flaxBinding1974 = FlaxGetter("rrbb", _flaxBinding906, _Vector4_rrbb);
const _flaxBinding1975 = FlaxGetter("rrba", _flaxBinding906, _Vector4_rrba);
const _flaxBinding1976 = FlaxGetter("rrar", _flaxBinding906, _Vector4_rrar);
const _flaxBinding1977 = FlaxGetter("rrag", _flaxBinding906, _Vector4_rrag);
const _flaxBinding1978 = FlaxGetter("rrab", _flaxBinding906, _Vector4_rrab);
const _flaxBinding1979 = FlaxGetter("rraa", _flaxBinding906, _Vector4_rraa);
const _flaxBinding1980 = FlaxGetter("rgrr", _flaxBinding906, _Vector4_rgrr);
const _flaxBinding1981 = FlaxGetter("rgrg", _flaxBinding906, _Vector4_rgrg);
const _flaxBinding1982 = FlaxGetter("rgrb", _flaxBinding906, _Vector4_rgrb);
const _flaxBinding1983 = FlaxGetter("rgra", _flaxBinding906, _Vector4_rgra);
const _flaxBinding1984 = FlaxGetter("rggr", _flaxBinding906, _Vector4_rggr);
const _flaxBinding1985 = FlaxGetter("rggg", _flaxBinding906, _Vector4_rggg);
const _flaxBinding1986 = FlaxGetter("rggb", _flaxBinding906, _Vector4_rggb);
const _flaxBinding1987 = FlaxGetter("rgga", _flaxBinding906, _Vector4_rgga);
const _flaxBinding1988 = FlaxGetter("rgbr", _flaxBinding906, _Vector4_rgbr);
const _flaxBinding1989 = FlaxGetter("rgbg", _flaxBinding906, _Vector4_rgbg);
const _flaxBinding1990 = FlaxGetter("rgbb", _flaxBinding906, _Vector4_rgbb);
const _flaxBinding1991 = FlaxGetter("rgba", _flaxBinding906, _Vector4_rgba);
const _flaxBinding1992 = FlaxGetter("rgar", _flaxBinding906, _Vector4_rgar);
const _flaxBinding1993 = FlaxGetter("rgag", _flaxBinding906, _Vector4_rgag);
const _flaxBinding1994 = FlaxGetter("rgab", _flaxBinding906, _Vector4_rgab);
const _flaxBinding1995 = FlaxGetter("rgaa", _flaxBinding906, _Vector4_rgaa);
const _flaxBinding1996 = FlaxGetter("rbrr", _flaxBinding906, _Vector4_rbrr);
const _flaxBinding1997 = FlaxGetter("rbrg", _flaxBinding906, _Vector4_rbrg);
const _flaxBinding1998 = FlaxGetter("rbrb", _flaxBinding906, _Vector4_rbrb);
const _flaxBinding1999 = FlaxGetter("rbra", _flaxBinding906, _Vector4_rbra);
const _flaxBinding2000 = FlaxGetter("rbgr", _flaxBinding906, _Vector4_rbgr);
const _flaxBinding2001 = FlaxGetter("rbgg", _flaxBinding906, _Vector4_rbgg);
const _flaxBinding2002 = FlaxGetter("rbgb", _flaxBinding906, _Vector4_rbgb);
const _flaxBinding2003 = FlaxGetter("rbga", _flaxBinding906, _Vector4_rbga);
const _flaxBinding2004 = FlaxGetter("rbbr", _flaxBinding906, _Vector4_rbbr);
const _flaxBinding2005 = FlaxGetter("rbbg", _flaxBinding906, _Vector4_rbbg);
const _flaxBinding2006 = FlaxGetter("rbbb", _flaxBinding906, _Vector4_rbbb);
const _flaxBinding2007 = FlaxGetter("rbba", _flaxBinding906, _Vector4_rbba);
const _flaxBinding2008 = FlaxGetter("rbar", _flaxBinding906, _Vector4_rbar);
const _flaxBinding2009 = FlaxGetter("rbag", _flaxBinding906, _Vector4_rbag);
const _flaxBinding2010 = FlaxGetter("rbab", _flaxBinding906, _Vector4_rbab);
const _flaxBinding2011 = FlaxGetter("rbaa", _flaxBinding906, _Vector4_rbaa);
const _flaxBinding2012 = FlaxGetter("rarr", _flaxBinding906, _Vector4_rarr);
const _flaxBinding2013 = FlaxGetter("rarg", _flaxBinding906, _Vector4_rarg);
const _flaxBinding2014 = FlaxGetter("rarb", _flaxBinding906, _Vector4_rarb);
const _flaxBinding2015 = FlaxGetter("rara", _flaxBinding906, _Vector4_rara);
const _flaxBinding2016 = FlaxGetter("ragr", _flaxBinding906, _Vector4_ragr);
const _flaxBinding2017 = FlaxGetter("ragg", _flaxBinding906, _Vector4_ragg);
const _flaxBinding2018 = FlaxGetter("ragb", _flaxBinding906, _Vector4_ragb);
const _flaxBinding2019 = FlaxGetter("raga", _flaxBinding906, _Vector4_raga);
const _flaxBinding2020 = FlaxGetter("rabr", _flaxBinding906, _Vector4_rabr);
const _flaxBinding2021 = FlaxGetter("rabg", _flaxBinding906, _Vector4_rabg);
const _flaxBinding2022 = FlaxGetter("rabb", _flaxBinding906, _Vector4_rabb);
const _flaxBinding2023 = FlaxGetter("raba", _flaxBinding906, _Vector4_raba);
const _flaxBinding2024 = FlaxGetter("raar", _flaxBinding906, _Vector4_raar);
const _flaxBinding2025 = FlaxGetter("raag", _flaxBinding906, _Vector4_raag);
const _flaxBinding2026 = FlaxGetter("raab", _flaxBinding906, _Vector4_raab);
const _flaxBinding2027 = FlaxGetter("raaa", _flaxBinding906, _Vector4_raaa);
const _flaxBinding2028 = FlaxGetter("grrr", _flaxBinding906, _Vector4_grrr);
const _flaxBinding2029 = FlaxGetter("grrg", _flaxBinding906, _Vector4_grrg);
const _flaxBinding2030 = FlaxGetter("grrb", _flaxBinding906, _Vector4_grrb);
const _flaxBinding2031 = FlaxGetter("grra", _flaxBinding906, _Vector4_grra);
const _flaxBinding2032 = FlaxGetter("grgr", _flaxBinding906, _Vector4_grgr);
const _flaxBinding2033 = FlaxGetter("grgg", _flaxBinding906, _Vector4_grgg);
const _flaxBinding2034 = FlaxGetter("grgb", _flaxBinding906, _Vector4_grgb);
const _flaxBinding2035 = FlaxGetter("grga", _flaxBinding906, _Vector4_grga);
const _flaxBinding2036 = FlaxGetter("grbr", _flaxBinding906, _Vector4_grbr);
const _flaxBinding2037 = FlaxGetter("grbg", _flaxBinding906, _Vector4_grbg);
const _flaxBinding2038 = FlaxGetter("grbb", _flaxBinding906, _Vector4_grbb);
const _flaxBinding2039 = FlaxGetter("grba", _flaxBinding906, _Vector4_grba);
const _flaxBinding2040 = FlaxGetter("grar", _flaxBinding906, _Vector4_grar);
const _flaxBinding2041 = FlaxGetter("grag", _flaxBinding906, _Vector4_grag);
const _flaxBinding2042 = FlaxGetter("grab", _flaxBinding906, _Vector4_grab);
const _flaxBinding2043 = FlaxGetter("graa", _flaxBinding906, _Vector4_graa);
const _flaxBinding2044 = FlaxGetter("ggrr", _flaxBinding906, _Vector4_ggrr);
const _flaxBinding2045 = FlaxGetter("ggrg", _flaxBinding906, _Vector4_ggrg);
const _flaxBinding2046 = FlaxGetter("ggrb", _flaxBinding906, _Vector4_ggrb);
const _flaxBinding2047 = FlaxGetter("ggra", _flaxBinding906, _Vector4_ggra);
const _flaxBinding2048 = FlaxGetter("gggr", _flaxBinding906, _Vector4_gggr);
const _flaxBinding2049 = FlaxGetter("gggg", _flaxBinding906, _Vector4_gggg);
const _flaxBinding2050 = FlaxGetter("gggb", _flaxBinding906, _Vector4_gggb);
const _flaxBinding2051 = FlaxGetter("ggga", _flaxBinding906, _Vector4_ggga);
const _flaxBinding2052 = FlaxGetter("ggbr", _flaxBinding906, _Vector4_ggbr);
const _flaxBinding2053 = FlaxGetter("ggbg", _flaxBinding906, _Vector4_ggbg);
const _flaxBinding2054 = FlaxGetter("ggbb", _flaxBinding906, _Vector4_ggbb);
const _flaxBinding2055 = FlaxGetter("ggba", _flaxBinding906, _Vector4_ggba);
const _flaxBinding2056 = FlaxGetter("ggar", _flaxBinding906, _Vector4_ggar);
const _flaxBinding2057 = FlaxGetter("ggag", _flaxBinding906, _Vector4_ggag);
const _flaxBinding2058 = FlaxGetter("ggab", _flaxBinding906, _Vector4_ggab);
const _flaxBinding2059 = FlaxGetter("ggaa", _flaxBinding906, _Vector4_ggaa);
const _flaxBinding2060 = FlaxGetter("gbrr", _flaxBinding906, _Vector4_gbrr);
const _flaxBinding2061 = FlaxGetter("gbrg", _flaxBinding906, _Vector4_gbrg);
const _flaxBinding2062 = FlaxGetter("gbrb", _flaxBinding906, _Vector4_gbrb);
const _flaxBinding2063 = FlaxGetter("gbra", _flaxBinding906, _Vector4_gbra);
const _flaxBinding2064 = FlaxGetter("gbgr", _flaxBinding906, _Vector4_gbgr);
const _flaxBinding2065 = FlaxGetter("gbgg", _flaxBinding906, _Vector4_gbgg);
const _flaxBinding2066 = FlaxGetter("gbgb", _flaxBinding906, _Vector4_gbgb);
const _flaxBinding2067 = FlaxGetter("gbga", _flaxBinding906, _Vector4_gbga);
const _flaxBinding2068 = FlaxGetter("gbbr", _flaxBinding906, _Vector4_gbbr);
const _flaxBinding2069 = FlaxGetter("gbbg", _flaxBinding906, _Vector4_gbbg);
const _flaxBinding2070 = FlaxGetter("gbbb", _flaxBinding906, _Vector4_gbbb);
const _flaxBinding2071 = FlaxGetter("gbba", _flaxBinding906, _Vector4_gbba);
const _flaxBinding2072 = FlaxGetter("gbar", _flaxBinding906, _Vector4_gbar);
const _flaxBinding2073 = FlaxGetter("gbag", _flaxBinding906, _Vector4_gbag);
const _flaxBinding2074 = FlaxGetter("gbab", _flaxBinding906, _Vector4_gbab);
const _flaxBinding2075 = FlaxGetter("gbaa", _flaxBinding906, _Vector4_gbaa);
const _flaxBinding2076 = FlaxGetter("garr", _flaxBinding906, _Vector4_garr);
const _flaxBinding2077 = FlaxGetter("garg", _flaxBinding906, _Vector4_garg);
const _flaxBinding2078 = FlaxGetter("garb", _flaxBinding906, _Vector4_garb);
const _flaxBinding2079 = FlaxGetter("gara", _flaxBinding906, _Vector4_gara);
const _flaxBinding2080 = FlaxGetter("gagr", _flaxBinding906, _Vector4_gagr);
const _flaxBinding2081 = FlaxGetter("gagg", _flaxBinding906, _Vector4_gagg);
const _flaxBinding2082 = FlaxGetter("gagb", _flaxBinding906, _Vector4_gagb);
const _flaxBinding2083 = FlaxGetter("gaga", _flaxBinding906, _Vector4_gaga);
const _flaxBinding2084 = FlaxGetter("gabr", _flaxBinding906, _Vector4_gabr);
const _flaxBinding2085 = FlaxGetter("gabg", _flaxBinding906, _Vector4_gabg);
const _flaxBinding2086 = FlaxGetter("gabb", _flaxBinding906, _Vector4_gabb);
const _flaxBinding2087 = FlaxGetter("gaba", _flaxBinding906, _Vector4_gaba);
const _flaxBinding2088 = FlaxGetter("gaar", _flaxBinding906, _Vector4_gaar);
const _flaxBinding2089 = FlaxGetter("gaag", _flaxBinding906, _Vector4_gaag);
const _flaxBinding2090 = FlaxGetter("gaab", _flaxBinding906, _Vector4_gaab);
const _flaxBinding2091 = FlaxGetter("gaaa", _flaxBinding906, _Vector4_gaaa);
const _flaxBinding2092 = FlaxGetter("brrr", _flaxBinding906, _Vector4_brrr);
const _flaxBinding2093 = FlaxGetter("brrg", _flaxBinding906, _Vector4_brrg);
const _flaxBinding2094 = FlaxGetter("brrb", _flaxBinding906, _Vector4_brrb);
const _flaxBinding2095 = FlaxGetter("brra", _flaxBinding906, _Vector4_brra);
const _flaxBinding2096 = FlaxGetter("brgr", _flaxBinding906, _Vector4_brgr);
const _flaxBinding2097 = FlaxGetter("brgg", _flaxBinding906, _Vector4_brgg);
const _flaxBinding2098 = FlaxGetter("brgb", _flaxBinding906, _Vector4_brgb);
const _flaxBinding2099 = FlaxGetter("brga", _flaxBinding906, _Vector4_brga);
const _flaxBinding2100 = FlaxGetter("brbr", _flaxBinding906, _Vector4_brbr);
const _flaxBinding2101 = FlaxGetter("brbg", _flaxBinding906, _Vector4_brbg);
const _flaxBinding2102 = FlaxGetter("brbb", _flaxBinding906, _Vector4_brbb);
const _flaxBinding2103 = FlaxGetter("brba", _flaxBinding906, _Vector4_brba);
const _flaxBinding2104 = FlaxGetter("brar", _flaxBinding906, _Vector4_brar);
const _flaxBinding2105 = FlaxGetter("brag", _flaxBinding906, _Vector4_brag);
const _flaxBinding2106 = FlaxGetter("brab", _flaxBinding906, _Vector4_brab);
const _flaxBinding2107 = FlaxGetter("braa", _flaxBinding906, _Vector4_braa);
const _flaxBinding2108 = FlaxGetter("bgrr", _flaxBinding906, _Vector4_bgrr);
const _flaxBinding2109 = FlaxGetter("bgrg", _flaxBinding906, _Vector4_bgrg);
const _flaxBinding2110 = FlaxGetter("bgrb", _flaxBinding906, _Vector4_bgrb);
const _flaxBinding2111 = FlaxGetter("bgra", _flaxBinding906, _Vector4_bgra);
const _flaxBinding2112 = FlaxGetter("bggr", _flaxBinding906, _Vector4_bggr);
const _flaxBinding2113 = FlaxGetter("bggg", _flaxBinding906, _Vector4_bggg);
const _flaxBinding2114 = FlaxGetter("bggb", _flaxBinding906, _Vector4_bggb);
const _flaxBinding2115 = FlaxGetter("bgga", _flaxBinding906, _Vector4_bgga);
const _flaxBinding2116 = FlaxGetter("bgbr", _flaxBinding906, _Vector4_bgbr);
const _flaxBinding2117 = FlaxGetter("bgbg", _flaxBinding906, _Vector4_bgbg);
const _flaxBinding2118 = FlaxGetter("bgbb", _flaxBinding906, _Vector4_bgbb);
const _flaxBinding2119 = FlaxGetter("bgba", _flaxBinding906, _Vector4_bgba);
const _flaxBinding2120 = FlaxGetter("bgar", _flaxBinding906, _Vector4_bgar);
const _flaxBinding2121 = FlaxGetter("bgag", _flaxBinding906, _Vector4_bgag);
const _flaxBinding2122 = FlaxGetter("bgab", _flaxBinding906, _Vector4_bgab);
const _flaxBinding2123 = FlaxGetter("bgaa", _flaxBinding906, _Vector4_bgaa);
const _flaxBinding2124 = FlaxGetter("bbrr", _flaxBinding906, _Vector4_bbrr);
const _flaxBinding2125 = FlaxGetter("bbrg", _flaxBinding906, _Vector4_bbrg);
const _flaxBinding2126 = FlaxGetter("bbrb", _flaxBinding906, _Vector4_bbrb);
const _flaxBinding2127 = FlaxGetter("bbra", _flaxBinding906, _Vector4_bbra);
const _flaxBinding2128 = FlaxGetter("bbgr", _flaxBinding906, _Vector4_bbgr);
const _flaxBinding2129 = FlaxGetter("bbgg", _flaxBinding906, _Vector4_bbgg);
const _flaxBinding2130 = FlaxGetter("bbgb", _flaxBinding906, _Vector4_bbgb);
const _flaxBinding2131 = FlaxGetter("bbga", _flaxBinding906, _Vector4_bbga);
const _flaxBinding2132 = FlaxGetter("bbbr", _flaxBinding906, _Vector4_bbbr);
const _flaxBinding2133 = FlaxGetter("bbbg", _flaxBinding906, _Vector4_bbbg);
const _flaxBinding2134 = FlaxGetter("bbbb", _flaxBinding906, _Vector4_bbbb);
const _flaxBinding2135 = FlaxGetter("bbba", _flaxBinding906, _Vector4_bbba);
const _flaxBinding2136 = FlaxGetter("bbar", _flaxBinding906, _Vector4_bbar);
const _flaxBinding2137 = FlaxGetter("bbag", _flaxBinding906, _Vector4_bbag);
const _flaxBinding2138 = FlaxGetter("bbab", _flaxBinding906, _Vector4_bbab);
const _flaxBinding2139 = FlaxGetter("bbaa", _flaxBinding906, _Vector4_bbaa);
const _flaxBinding2140 = FlaxGetter("barr", _flaxBinding906, _Vector4_barr);
const _flaxBinding2141 = FlaxGetter("barg", _flaxBinding906, _Vector4_barg);
const _flaxBinding2142 = FlaxGetter("barb", _flaxBinding906, _Vector4_barb);
const _flaxBinding2143 = FlaxGetter("bara", _flaxBinding906, _Vector4_bara);
const _flaxBinding2144 = FlaxGetter("bagr", _flaxBinding906, _Vector4_bagr);
const _flaxBinding2145 = FlaxGetter("bagg", _flaxBinding906, _Vector4_bagg);
const _flaxBinding2146 = FlaxGetter("bagb", _flaxBinding906, _Vector4_bagb);
const _flaxBinding2147 = FlaxGetter("baga", _flaxBinding906, _Vector4_baga);
const _flaxBinding2148 = FlaxGetter("babr", _flaxBinding906, _Vector4_babr);
const _flaxBinding2149 = FlaxGetter("babg", _flaxBinding906, _Vector4_babg);
const _flaxBinding2150 = FlaxGetter("babb", _flaxBinding906, _Vector4_babb);
const _flaxBinding2151 = FlaxGetter("baba", _flaxBinding906, _Vector4_baba);
const _flaxBinding2152 = FlaxGetter("baar", _flaxBinding906, _Vector4_baar);
const _flaxBinding2153 = FlaxGetter("baag", _flaxBinding906, _Vector4_baag);
const _flaxBinding2154 = FlaxGetter("baab", _flaxBinding906, _Vector4_baab);
const _flaxBinding2155 = FlaxGetter("baaa", _flaxBinding906, _Vector4_baaa);
const _flaxBinding2156 = FlaxGetter("arrr", _flaxBinding906, _Vector4_arrr);
const _flaxBinding2157 = FlaxGetter("arrg", _flaxBinding906, _Vector4_arrg);
const _flaxBinding2158 = FlaxGetter("arrb", _flaxBinding906, _Vector4_arrb);
const _flaxBinding2159 = FlaxGetter("arra", _flaxBinding906, _Vector4_arra);
const _flaxBinding2160 = FlaxGetter("argr", _flaxBinding906, _Vector4_argr);
const _flaxBinding2161 = FlaxGetter("argg", _flaxBinding906, _Vector4_argg);
const _flaxBinding2162 = FlaxGetter("argb", _flaxBinding906, _Vector4_argb);
const _flaxBinding2163 = FlaxGetter("arga", _flaxBinding906, _Vector4_arga);
const _flaxBinding2164 = FlaxGetter("arbr", _flaxBinding906, _Vector4_arbr);
const _flaxBinding2165 = FlaxGetter("arbg", _flaxBinding906, _Vector4_arbg);
const _flaxBinding2166 = FlaxGetter("arbb", _flaxBinding906, _Vector4_arbb);
const _flaxBinding2167 = FlaxGetter("arba", _flaxBinding906, _Vector4_arba);
const _flaxBinding2168 = FlaxGetter("arar", _flaxBinding906, _Vector4_arar);
const _flaxBinding2169 = FlaxGetter("arag", _flaxBinding906, _Vector4_arag);
const _flaxBinding2170 = FlaxGetter("arab", _flaxBinding906, _Vector4_arab);
const _flaxBinding2171 = FlaxGetter("araa", _flaxBinding906, _Vector4_araa);
const _flaxBinding2172 = FlaxGetter("agrr", _flaxBinding906, _Vector4_agrr);
const _flaxBinding2173 = FlaxGetter("agrg", _flaxBinding906, _Vector4_agrg);
const _flaxBinding2174 = FlaxGetter("agrb", _flaxBinding906, _Vector4_agrb);
const _flaxBinding2175 = FlaxGetter("agra", _flaxBinding906, _Vector4_agra);
const _flaxBinding2176 = FlaxGetter("aggr", _flaxBinding906, _Vector4_aggr);
const _flaxBinding2177 = FlaxGetter("aggg", _flaxBinding906, _Vector4_aggg);
const _flaxBinding2178 = FlaxGetter("aggb", _flaxBinding906, _Vector4_aggb);
const _flaxBinding2179 = FlaxGetter("agga", _flaxBinding906, _Vector4_agga);
const _flaxBinding2180 = FlaxGetter("agbr", _flaxBinding906, _Vector4_agbr);
const _flaxBinding2181 = FlaxGetter("agbg", _flaxBinding906, _Vector4_agbg);
const _flaxBinding2182 = FlaxGetter("agbb", _flaxBinding906, _Vector4_agbb);
const _flaxBinding2183 = FlaxGetter("agba", _flaxBinding906, _Vector4_agba);
const _flaxBinding2184 = FlaxGetter("agar", _flaxBinding906, _Vector4_agar);
const _flaxBinding2185 = FlaxGetter("agag", _flaxBinding906, _Vector4_agag);
const _flaxBinding2186 = FlaxGetter("agab", _flaxBinding906, _Vector4_agab);
const _flaxBinding2187 = FlaxGetter("agaa", _flaxBinding906, _Vector4_agaa);
const _flaxBinding2188 = FlaxGetter("abrr", _flaxBinding906, _Vector4_abrr);
const _flaxBinding2189 = FlaxGetter("abrg", _flaxBinding906, _Vector4_abrg);
const _flaxBinding2190 = FlaxGetter("abrb", _flaxBinding906, _Vector4_abrb);
const _flaxBinding2191 = FlaxGetter("abra", _flaxBinding906, _Vector4_abra);
const _flaxBinding2192 = FlaxGetter("abgr", _flaxBinding906, _Vector4_abgr);
const _flaxBinding2193 = FlaxGetter("abgg", _flaxBinding906, _Vector4_abgg);
const _flaxBinding2194 = FlaxGetter("abgb", _flaxBinding906, _Vector4_abgb);
const _flaxBinding2195 = FlaxGetter("abga", _flaxBinding906, _Vector4_abga);
const _flaxBinding2196 = FlaxGetter("abbr", _flaxBinding906, _Vector4_abbr);
const _flaxBinding2197 = FlaxGetter("abbg", _flaxBinding906, _Vector4_abbg);
const _flaxBinding2198 = FlaxGetter("abbb", _flaxBinding906, _Vector4_abbb);
const _flaxBinding2199 = FlaxGetter("abba", _flaxBinding906, _Vector4_abba);
const _flaxBinding2200 = FlaxGetter("abar", _flaxBinding906, _Vector4_abar);
const _flaxBinding2201 = FlaxGetter("abag", _flaxBinding906, _Vector4_abag);
const _flaxBinding2202 = FlaxGetter("abab", _flaxBinding906, _Vector4_abab);
const _flaxBinding2203 = FlaxGetter("abaa", _flaxBinding906, _Vector4_abaa);
const _flaxBinding2204 = FlaxGetter("aarr", _flaxBinding906, _Vector4_aarr);
const _flaxBinding2205 = FlaxGetter("aarg", _flaxBinding906, _Vector4_aarg);
const _flaxBinding2206 = FlaxGetter("aarb", _flaxBinding906, _Vector4_aarb);
const _flaxBinding2207 = FlaxGetter("aara", _flaxBinding906, _Vector4_aara);
const _flaxBinding2208 = FlaxGetter("aagr", _flaxBinding906, _Vector4_aagr);
const _flaxBinding2209 = FlaxGetter("aagg", _flaxBinding906, _Vector4_aagg);
const _flaxBinding2210 = FlaxGetter("aagb", _flaxBinding906, _Vector4_aagb);
const _flaxBinding2211 = FlaxGetter("aaga", _flaxBinding906, _Vector4_aaga);
const _flaxBinding2212 = FlaxGetter("aabr", _flaxBinding906, _Vector4_aabr);
const _flaxBinding2213 = FlaxGetter("aabg", _flaxBinding906, _Vector4_aabg);
const _flaxBinding2214 = FlaxGetter("aabb", _flaxBinding906, _Vector4_aabb);
const _flaxBinding2215 = FlaxGetter("aaba", _flaxBinding906, _Vector4_aaba);
const _flaxBinding2216 = FlaxGetter("aaar", _flaxBinding906, _Vector4_aaar);
const _flaxBinding2217 = FlaxGetter("aaag", _flaxBinding906, _Vector4_aaag);
const _flaxBinding2218 = FlaxGetter("aaab", _flaxBinding906, _Vector4_aaab);
const _flaxBinding2219 = FlaxGetter("aaaa", _flaxBinding906, _Vector4_aaaa);
const _flaxBinding2220 = FlaxGetter("ss", _flaxBinding441, _Vector4_ss);
const _flaxBinding2221 = FlaxGetter("st", _flaxBinding441, _Vector4_st);
const _flaxBinding2222 = FlaxGetter("sp", _flaxBinding441, _Vector4_sp);
const _flaxBinding2223 = FlaxGetter("sq", _flaxBinding441, _Vector4_sq);
const _flaxBinding2224 = FlaxGetter("ts", _flaxBinding441, _Vector4_ts);
const _flaxBinding2225 = FlaxGetter("tt", _flaxBinding441, _Vector4_tt);
const _flaxBinding2226 = FlaxGetter("tp", _flaxBinding441, _Vector4_tp);
const _flaxBinding2227 = FlaxGetter("tq", _flaxBinding441, _Vector4_tq);
const _flaxBinding2228 = FlaxGetter("ps", _flaxBinding441, _Vector4_ps);
const _flaxBinding2229 = FlaxGetter("pt", _flaxBinding441, _Vector4_pt);
const _flaxBinding2230 = FlaxGetter("pp", _flaxBinding441, _Vector4_pp);
const _flaxBinding2231 = FlaxGetter("pq", _flaxBinding441, _Vector4_pq);
const _flaxBinding2232 = FlaxGetter("qs", _flaxBinding441, _Vector4_qs);
const _flaxBinding2233 = FlaxGetter("qt", _flaxBinding441, _Vector4_qt);
const _flaxBinding2234 = FlaxGetter("qp", _flaxBinding441, _Vector4_qp);
const _flaxBinding2235 = FlaxGetter("qq", _flaxBinding441, _Vector4_qq);
const _flaxBinding2236 = FlaxGetter("sss", _flaxBinding534, _Vector4_sss);
const _flaxBinding2237 = FlaxGetter("sst", _flaxBinding534, _Vector4_sst);
const _flaxBinding2238 = FlaxGetter("ssp", _flaxBinding534, _Vector4_ssp);
const _flaxBinding2239 = FlaxGetter("ssq", _flaxBinding534, _Vector4_ssq);
const _flaxBinding2240 = FlaxGetter("sts", _flaxBinding534, _Vector4_sts);
const _flaxBinding2241 = FlaxGetter("stt", _flaxBinding534, _Vector4_stt);
const _flaxBinding2242 = FlaxGetter("stp", _flaxBinding534, _Vector4_stp);
const _flaxBinding2243 = FlaxGetter("stq", _flaxBinding534, _Vector4_stq);
const _flaxBinding2244 = FlaxGetter("sps", _flaxBinding534, _Vector4_sps);
const _flaxBinding2245 = FlaxGetter("spt", _flaxBinding534, _Vector4_spt);
const _flaxBinding2246 = FlaxGetter("spp", _flaxBinding534, _Vector4_spp);
const _flaxBinding2247 = FlaxGetter("spq", _flaxBinding534, _Vector4_spq);
const _flaxBinding2248 = FlaxGetter("sqs", _flaxBinding534, _Vector4_sqs);
const _flaxBinding2249 = FlaxGetter("sqt", _flaxBinding534, _Vector4_sqt);
const _flaxBinding2250 = FlaxGetter("sqp", _flaxBinding534, _Vector4_sqp);
const _flaxBinding2251 = FlaxGetter("sqq", _flaxBinding534, _Vector4_sqq);
const _flaxBinding2252 = FlaxGetter("tss", _flaxBinding534, _Vector4_tss);
const _flaxBinding2253 = FlaxGetter("tst", _flaxBinding534, _Vector4_tst);
const _flaxBinding2254 = FlaxGetter("tsp", _flaxBinding534, _Vector4_tsp);
const _flaxBinding2255 = FlaxGetter("tsq", _flaxBinding534, _Vector4_tsq);
const _flaxBinding2256 = FlaxGetter("tts", _flaxBinding534, _Vector4_tts);
const _flaxBinding2257 = FlaxGetter("ttt", _flaxBinding534, _Vector4_ttt);
const _flaxBinding2258 = FlaxGetter("ttp", _flaxBinding534, _Vector4_ttp);
const _flaxBinding2259 = FlaxGetter("ttq", _flaxBinding534, _Vector4_ttq);
const _flaxBinding2260 = FlaxGetter("tps", _flaxBinding534, _Vector4_tps);
const _flaxBinding2261 = FlaxGetter("tpt", _flaxBinding534, _Vector4_tpt);
const _flaxBinding2262 = FlaxGetter("tpp", _flaxBinding534, _Vector4_tpp);
const _flaxBinding2263 = FlaxGetter("tpq", _flaxBinding534, _Vector4_tpq);
const _flaxBinding2264 = FlaxGetter("tqs", _flaxBinding534, _Vector4_tqs);
const _flaxBinding2265 = FlaxGetter("tqt", _flaxBinding534, _Vector4_tqt);
const _flaxBinding2266 = FlaxGetter("tqp", _flaxBinding534, _Vector4_tqp);
const _flaxBinding2267 = FlaxGetter("tqq", _flaxBinding534, _Vector4_tqq);
const _flaxBinding2268 = FlaxGetter("pss", _flaxBinding534, _Vector4_pss);
const _flaxBinding2269 = FlaxGetter("pst", _flaxBinding534, _Vector4_pst);
const _flaxBinding2270 = FlaxGetter("psp", _flaxBinding534, _Vector4_psp);
const _flaxBinding2271 = FlaxGetter("psq", _flaxBinding534, _Vector4_psq);
const _flaxBinding2272 = FlaxGetter("pts", _flaxBinding534, _Vector4_pts);
const _flaxBinding2273 = FlaxGetter("ptt", _flaxBinding534, _Vector4_ptt);
const _flaxBinding2274 = FlaxGetter("ptp", _flaxBinding534, _Vector4_ptp);
const _flaxBinding2275 = FlaxGetter("ptq", _flaxBinding534, _Vector4_ptq);
const _flaxBinding2276 = FlaxGetter("pps", _flaxBinding534, _Vector4_pps);
const _flaxBinding2277 = FlaxGetter("ppt", _flaxBinding534, _Vector4_ppt);
const _flaxBinding2278 = FlaxGetter("ppp", _flaxBinding534, _Vector4_ppp);
const _flaxBinding2279 = FlaxGetter("ppq", _flaxBinding534, _Vector4_ppq);
const _flaxBinding2280 = FlaxGetter("pqs", _flaxBinding534, _Vector4_pqs);
const _flaxBinding2281 = FlaxGetter("pqt", _flaxBinding534, _Vector4_pqt);
const _flaxBinding2282 = FlaxGetter("pqp", _flaxBinding534, _Vector4_pqp);
const _flaxBinding2283 = FlaxGetter("pqq", _flaxBinding534, _Vector4_pqq);
const _flaxBinding2284 = FlaxGetter("qss", _flaxBinding534, _Vector4_qss);
const _flaxBinding2285 = FlaxGetter("qst", _flaxBinding534, _Vector4_qst);
const _flaxBinding2286 = FlaxGetter("qsp", _flaxBinding534, _Vector4_qsp);
const _flaxBinding2287 = FlaxGetter("qsq", _flaxBinding534, _Vector4_qsq);
const _flaxBinding2288 = FlaxGetter("qts", _flaxBinding534, _Vector4_qts);
const _flaxBinding2289 = FlaxGetter("qtt", _flaxBinding534, _Vector4_qtt);
const _flaxBinding2290 = FlaxGetter("qtp", _flaxBinding534, _Vector4_qtp);
const _flaxBinding2291 = FlaxGetter("qtq", _flaxBinding534, _Vector4_qtq);
const _flaxBinding2292 = FlaxGetter("qps", _flaxBinding534, _Vector4_qps);
const _flaxBinding2293 = FlaxGetter("qpt", _flaxBinding534, _Vector4_qpt);
const _flaxBinding2294 = FlaxGetter("qpp", _flaxBinding534, _Vector4_qpp);
const _flaxBinding2295 = FlaxGetter("qpq", _flaxBinding534, _Vector4_qpq);
const _flaxBinding2296 = FlaxGetter("qqs", _flaxBinding534, _Vector4_qqs);
const _flaxBinding2297 = FlaxGetter("qqt", _flaxBinding534, _Vector4_qqt);
const _flaxBinding2298 = FlaxGetter("qqp", _flaxBinding534, _Vector4_qqp);
const _flaxBinding2299 = FlaxGetter("qqq", _flaxBinding534, _Vector4_qqq);
const _flaxBinding2300 = FlaxGetter("ssss", _flaxBinding906, _Vector4_ssss);
const _flaxBinding2301 = FlaxGetter("ssst", _flaxBinding906, _Vector4_ssst);
const _flaxBinding2302 = FlaxGetter("sssp", _flaxBinding906, _Vector4_sssp);
const _flaxBinding2303 = FlaxGetter("sssq", _flaxBinding906, _Vector4_sssq);
const _flaxBinding2304 = FlaxGetter("ssts", _flaxBinding906, _Vector4_ssts);
const _flaxBinding2305 = FlaxGetter("sstt", _flaxBinding906, _Vector4_sstt);
const _flaxBinding2306 = FlaxGetter("sstp", _flaxBinding906, _Vector4_sstp);
const _flaxBinding2307 = FlaxGetter("sstq", _flaxBinding906, _Vector4_sstq);
const _flaxBinding2308 = FlaxGetter("ssps", _flaxBinding906, _Vector4_ssps);
const _flaxBinding2309 = FlaxGetter("sspt", _flaxBinding906, _Vector4_sspt);
const _flaxBinding2310 = FlaxGetter("sspp", _flaxBinding906, _Vector4_sspp);
const _flaxBinding2311 = FlaxGetter("sspq", _flaxBinding906, _Vector4_sspq);
const _flaxBinding2312 = FlaxGetter("ssqs", _flaxBinding906, _Vector4_ssqs);
const _flaxBinding2313 = FlaxGetter("ssqt", _flaxBinding906, _Vector4_ssqt);
const _flaxBinding2314 = FlaxGetter("ssqp", _flaxBinding906, _Vector4_ssqp);
const _flaxBinding2315 = FlaxGetter("ssqq", _flaxBinding906, _Vector4_ssqq);
const _flaxBinding2316 = FlaxGetter("stss", _flaxBinding906, _Vector4_stss);
const _flaxBinding2317 = FlaxGetter("stst", _flaxBinding906, _Vector4_stst);
const _flaxBinding2318 = FlaxGetter("stsp", _flaxBinding906, _Vector4_stsp);
const _flaxBinding2319 = FlaxGetter("stsq", _flaxBinding906, _Vector4_stsq);
const _flaxBinding2320 = FlaxGetter("stts", _flaxBinding906, _Vector4_stts);
const _flaxBinding2321 = FlaxGetter("sttt", _flaxBinding906, _Vector4_sttt);
const _flaxBinding2322 = FlaxGetter("sttp", _flaxBinding906, _Vector4_sttp);
const _flaxBinding2323 = FlaxGetter("sttq", _flaxBinding906, _Vector4_sttq);
const _flaxBinding2324 = FlaxGetter("stps", _flaxBinding906, _Vector4_stps);
const _flaxBinding2325 = FlaxGetter("stpt", _flaxBinding906, _Vector4_stpt);
const _flaxBinding2326 = FlaxGetter("stpp", _flaxBinding906, _Vector4_stpp);
const _flaxBinding2327 = FlaxGetter("stpq", _flaxBinding906, _Vector4_stpq);
const _flaxBinding2328 = FlaxGetter("stqs", _flaxBinding906, _Vector4_stqs);
const _flaxBinding2329 = FlaxGetter("stqt", _flaxBinding906, _Vector4_stqt);
const _flaxBinding2330 = FlaxGetter("stqp", _flaxBinding906, _Vector4_stqp);
const _flaxBinding2331 = FlaxGetter("stqq", _flaxBinding906, _Vector4_stqq);
const _flaxBinding2332 = FlaxGetter("spss", _flaxBinding906, _Vector4_spss);
const _flaxBinding2333 = FlaxGetter("spst", _flaxBinding906, _Vector4_spst);
const _flaxBinding2334 = FlaxGetter("spsp", _flaxBinding906, _Vector4_spsp);
const _flaxBinding2335 = FlaxGetter("spsq", _flaxBinding906, _Vector4_spsq);
const _flaxBinding2336 = FlaxGetter("spts", _flaxBinding906, _Vector4_spts);
const _flaxBinding2337 = FlaxGetter("sptt", _flaxBinding906, _Vector4_sptt);
const _flaxBinding2338 = FlaxGetter("sptp", _flaxBinding906, _Vector4_sptp);
const _flaxBinding2339 = FlaxGetter("sptq", _flaxBinding906, _Vector4_sptq);
const _flaxBinding2340 = FlaxGetter("spps", _flaxBinding906, _Vector4_spps);
const _flaxBinding2341 = FlaxGetter("sppt", _flaxBinding906, _Vector4_sppt);
const _flaxBinding2342 = FlaxGetter("sppp", _flaxBinding906, _Vector4_sppp);
const _flaxBinding2343 = FlaxGetter("sppq", _flaxBinding906, _Vector4_sppq);
const _flaxBinding2344 = FlaxGetter("spqs", _flaxBinding906, _Vector4_spqs);
const _flaxBinding2345 = FlaxGetter("spqt", _flaxBinding906, _Vector4_spqt);
const _flaxBinding2346 = FlaxGetter("spqp", _flaxBinding906, _Vector4_spqp);
const _flaxBinding2347 = FlaxGetter("spqq", _flaxBinding906, _Vector4_spqq);
const _flaxBinding2348 = FlaxGetter("sqss", _flaxBinding906, _Vector4_sqss);
const _flaxBinding2349 = FlaxGetter("sqst", _flaxBinding906, _Vector4_sqst);
const _flaxBinding2350 = FlaxGetter("sqsp", _flaxBinding906, _Vector4_sqsp);
const _flaxBinding2351 = FlaxGetter("sqsq", _flaxBinding906, _Vector4_sqsq);
const _flaxBinding2352 = FlaxGetter("sqts", _flaxBinding906, _Vector4_sqts);
const _flaxBinding2353 = FlaxGetter("sqtt", _flaxBinding906, _Vector4_sqtt);
const _flaxBinding2354 = FlaxGetter("sqtp", _flaxBinding906, _Vector4_sqtp);
const _flaxBinding2355 = FlaxGetter("sqtq", _flaxBinding906, _Vector4_sqtq);
const _flaxBinding2356 = FlaxGetter("sqps", _flaxBinding906, _Vector4_sqps);
const _flaxBinding2357 = FlaxGetter("sqpt", _flaxBinding906, _Vector4_sqpt);
const _flaxBinding2358 = FlaxGetter("sqpp", _flaxBinding906, _Vector4_sqpp);
const _flaxBinding2359 = FlaxGetter("sqpq", _flaxBinding906, _Vector4_sqpq);
const _flaxBinding2360 = FlaxGetter("sqqs", _flaxBinding906, _Vector4_sqqs);
const _flaxBinding2361 = FlaxGetter("sqqt", _flaxBinding906, _Vector4_sqqt);
const _flaxBinding2362 = FlaxGetter("sqqp", _flaxBinding906, _Vector4_sqqp);
const _flaxBinding2363 = FlaxGetter("sqqq", _flaxBinding906, _Vector4_sqqq);
const _flaxBinding2364 = FlaxGetter("tsss", _flaxBinding906, _Vector4_tsss);
const _flaxBinding2365 = FlaxGetter("tsst", _flaxBinding906, _Vector4_tsst);
const _flaxBinding2366 = FlaxGetter("tssp", _flaxBinding906, _Vector4_tssp);
const _flaxBinding2367 = FlaxGetter("tssq", _flaxBinding906, _Vector4_tssq);
const _flaxBinding2368 = FlaxGetter("tsts", _flaxBinding906, _Vector4_tsts);
const _flaxBinding2369 = FlaxGetter("tstt", _flaxBinding906, _Vector4_tstt);
const _flaxBinding2370 = FlaxGetter("tstp", _flaxBinding906, _Vector4_tstp);
const _flaxBinding2371 = FlaxGetter("tstq", _flaxBinding906, _Vector4_tstq);
const _flaxBinding2372 = FlaxGetter("tsps", _flaxBinding906, _Vector4_tsps);
const _flaxBinding2373 = FlaxGetter("tspt", _flaxBinding906, _Vector4_tspt);
const _flaxBinding2374 = FlaxGetter("tspp", _flaxBinding906, _Vector4_tspp);
const _flaxBinding2375 = FlaxGetter("tspq", _flaxBinding906, _Vector4_tspq);
const _flaxBinding2376 = FlaxGetter("tsqs", _flaxBinding906, _Vector4_tsqs);
const _flaxBinding2377 = FlaxGetter("tsqt", _flaxBinding906, _Vector4_tsqt);
const _flaxBinding2378 = FlaxGetter("tsqp", _flaxBinding906, _Vector4_tsqp);
const _flaxBinding2379 = FlaxGetter("tsqq", _flaxBinding906, _Vector4_tsqq);
const _flaxBinding2380 = FlaxGetter("ttss", _flaxBinding906, _Vector4_ttss);
const _flaxBinding2381 = FlaxGetter("ttst", _flaxBinding906, _Vector4_ttst);
const _flaxBinding2382 = FlaxGetter("ttsp", _flaxBinding906, _Vector4_ttsp);
const _flaxBinding2383 = FlaxGetter("ttsq", _flaxBinding906, _Vector4_ttsq);
const _flaxBinding2384 = FlaxGetter("ttts", _flaxBinding906, _Vector4_ttts);
const _flaxBinding2385 = FlaxGetter("tttt", _flaxBinding906, _Vector4_tttt);
const _flaxBinding2386 = FlaxGetter("tttp", _flaxBinding906, _Vector4_tttp);
const _flaxBinding2387 = FlaxGetter("tttq", _flaxBinding906, _Vector4_tttq);
const _flaxBinding2388 = FlaxGetter("ttps", _flaxBinding906, _Vector4_ttps);
const _flaxBinding2389 = FlaxGetter("ttpt", _flaxBinding906, _Vector4_ttpt);
const _flaxBinding2390 = FlaxGetter("ttpp", _flaxBinding906, _Vector4_ttpp);
const _flaxBinding2391 = FlaxGetter("ttpq", _flaxBinding906, _Vector4_ttpq);
const _flaxBinding2392 = FlaxGetter("ttqs", _flaxBinding906, _Vector4_ttqs);
const _flaxBinding2393 = FlaxGetter("ttqt", _flaxBinding906, _Vector4_ttqt);
const _flaxBinding2394 = FlaxGetter("ttqp", _flaxBinding906, _Vector4_ttqp);
const _flaxBinding2395 = FlaxGetter("ttqq", _flaxBinding906, _Vector4_ttqq);
const _flaxBinding2396 = FlaxGetter("tpss", _flaxBinding906, _Vector4_tpss);
const _flaxBinding2397 = FlaxGetter("tpst", _flaxBinding906, _Vector4_tpst);
const _flaxBinding2398 = FlaxGetter("tpsp", _flaxBinding906, _Vector4_tpsp);
const _flaxBinding2399 = FlaxGetter("tpsq", _flaxBinding906, _Vector4_tpsq);
const _flaxBinding2400 = FlaxGetter("tpts", _flaxBinding906, _Vector4_tpts);
const _flaxBinding2401 = FlaxGetter("tptt", _flaxBinding906, _Vector4_tptt);
const _flaxBinding2402 = FlaxGetter("tptp", _flaxBinding906, _Vector4_tptp);
const _flaxBinding2403 = FlaxGetter("tptq", _flaxBinding906, _Vector4_tptq);
const _flaxBinding2404 = FlaxGetter("tpps", _flaxBinding906, _Vector4_tpps);
const _flaxBinding2405 = FlaxGetter("tppt", _flaxBinding906, _Vector4_tppt);
const _flaxBinding2406 = FlaxGetter("tppp", _flaxBinding906, _Vector4_tppp);
const _flaxBinding2407 = FlaxGetter("tppq", _flaxBinding906, _Vector4_tppq);
const _flaxBinding2408 = FlaxGetter("tpqs", _flaxBinding906, _Vector4_tpqs);
const _flaxBinding2409 = FlaxGetter("tpqt", _flaxBinding906, _Vector4_tpqt);
const _flaxBinding2410 = FlaxGetter("tpqp", _flaxBinding906, _Vector4_tpqp);
const _flaxBinding2411 = FlaxGetter("tpqq", _flaxBinding906, _Vector4_tpqq);
const _flaxBinding2412 = FlaxGetter("tqss", _flaxBinding906, _Vector4_tqss);
const _flaxBinding2413 = FlaxGetter("tqst", _flaxBinding906, _Vector4_tqst);
const _flaxBinding2414 = FlaxGetter("tqsp", _flaxBinding906, _Vector4_tqsp);
const _flaxBinding2415 = FlaxGetter("tqsq", _flaxBinding906, _Vector4_tqsq);
const _flaxBinding2416 = FlaxGetter("tqts", _flaxBinding906, _Vector4_tqts);
const _flaxBinding2417 = FlaxGetter("tqtt", _flaxBinding906, _Vector4_tqtt);
const _flaxBinding2418 = FlaxGetter("tqtp", _flaxBinding906, _Vector4_tqtp);
const _flaxBinding2419 = FlaxGetter("tqtq", _flaxBinding906, _Vector4_tqtq);
const _flaxBinding2420 = FlaxGetter("tqps", _flaxBinding906, _Vector4_tqps);
const _flaxBinding2421 = FlaxGetter("tqpt", _flaxBinding906, _Vector4_tqpt);
const _flaxBinding2422 = FlaxGetter("tqpp", _flaxBinding906, _Vector4_tqpp);
const _flaxBinding2423 = FlaxGetter("tqpq", _flaxBinding906, _Vector4_tqpq);
const _flaxBinding2424 = FlaxGetter("tqqs", _flaxBinding906, _Vector4_tqqs);
const _flaxBinding2425 = FlaxGetter("tqqt", _flaxBinding906, _Vector4_tqqt);
const _flaxBinding2426 = FlaxGetter("tqqp", _flaxBinding906, _Vector4_tqqp);
const _flaxBinding2427 = FlaxGetter("tqqq", _flaxBinding906, _Vector4_tqqq);
const _flaxBinding2428 = FlaxGetter("psss", _flaxBinding906, _Vector4_psss);
const _flaxBinding2429 = FlaxGetter("psst", _flaxBinding906, _Vector4_psst);
const _flaxBinding2430 = FlaxGetter("pssp", _flaxBinding906, _Vector4_pssp);
const _flaxBinding2431 = FlaxGetter("pssq", _flaxBinding906, _Vector4_pssq);
const _flaxBinding2432 = FlaxGetter("psts", _flaxBinding906, _Vector4_psts);
const _flaxBinding2433 = FlaxGetter("pstt", _flaxBinding906, _Vector4_pstt);
const _flaxBinding2434 = FlaxGetter("pstp", _flaxBinding906, _Vector4_pstp);
const _flaxBinding2435 = FlaxGetter("pstq", _flaxBinding906, _Vector4_pstq);
const _flaxBinding2436 = FlaxGetter("psps", _flaxBinding906, _Vector4_psps);
const _flaxBinding2437 = FlaxGetter("pspt", _flaxBinding906, _Vector4_pspt);
const _flaxBinding2438 = FlaxGetter("pspp", _flaxBinding906, _Vector4_pspp);
const _flaxBinding2439 = FlaxGetter("pspq", _flaxBinding906, _Vector4_pspq);
const _flaxBinding2440 = FlaxGetter("psqs", _flaxBinding906, _Vector4_psqs);
const _flaxBinding2441 = FlaxGetter("psqt", _flaxBinding906, _Vector4_psqt);
const _flaxBinding2442 = FlaxGetter("psqp", _flaxBinding906, _Vector4_psqp);
const _flaxBinding2443 = FlaxGetter("psqq", _flaxBinding906, _Vector4_psqq);
const _flaxBinding2444 = FlaxGetter("ptss", _flaxBinding906, _Vector4_ptss);
const _flaxBinding2445 = FlaxGetter("ptst", _flaxBinding906, _Vector4_ptst);
const _flaxBinding2446 = FlaxGetter("ptsp", _flaxBinding906, _Vector4_ptsp);
const _flaxBinding2447 = FlaxGetter("ptsq", _flaxBinding906, _Vector4_ptsq);
const _flaxBinding2448 = FlaxGetter("ptts", _flaxBinding906, _Vector4_ptts);
const _flaxBinding2449 = FlaxGetter("pttt", _flaxBinding906, _Vector4_pttt);
const _flaxBinding2450 = FlaxGetter("pttp", _flaxBinding906, _Vector4_pttp);
const _flaxBinding2451 = FlaxGetter("pttq", _flaxBinding906, _Vector4_pttq);
const _flaxBinding2452 = FlaxGetter("ptps", _flaxBinding906, _Vector4_ptps);
const _flaxBinding2453 = FlaxGetter("ptpt", _flaxBinding906, _Vector4_ptpt);
const _flaxBinding2454 = FlaxGetter("ptpp", _flaxBinding906, _Vector4_ptpp);
const _flaxBinding2455 = FlaxGetter("ptpq", _flaxBinding906, _Vector4_ptpq);
const _flaxBinding2456 = FlaxGetter("ptqs", _flaxBinding906, _Vector4_ptqs);
const _flaxBinding2457 = FlaxGetter("ptqt", _flaxBinding906, _Vector4_ptqt);
const _flaxBinding2458 = FlaxGetter("ptqp", _flaxBinding906, _Vector4_ptqp);
const _flaxBinding2459 = FlaxGetter("ptqq", _flaxBinding906, _Vector4_ptqq);
const _flaxBinding2460 = FlaxGetter("ppss", _flaxBinding906, _Vector4_ppss);
const _flaxBinding2461 = FlaxGetter("ppst", _flaxBinding906, _Vector4_ppst);
const _flaxBinding2462 = FlaxGetter("ppsp", _flaxBinding906, _Vector4_ppsp);
const _flaxBinding2463 = FlaxGetter("ppsq", _flaxBinding906, _Vector4_ppsq);
const _flaxBinding2464 = FlaxGetter("ppts", _flaxBinding906, _Vector4_ppts);
const _flaxBinding2465 = FlaxGetter("pptt", _flaxBinding906, _Vector4_pptt);
const _flaxBinding2466 = FlaxGetter("pptp", _flaxBinding906, _Vector4_pptp);
const _flaxBinding2467 = FlaxGetter("pptq", _flaxBinding906, _Vector4_pptq);
const _flaxBinding2468 = FlaxGetter("ppps", _flaxBinding906, _Vector4_ppps);
const _flaxBinding2469 = FlaxGetter("pppt", _flaxBinding906, _Vector4_pppt);
const _flaxBinding2470 = FlaxGetter("pppp", _flaxBinding906, _Vector4_pppp);
const _flaxBinding2471 = FlaxGetter("pppq", _flaxBinding906, _Vector4_pppq);
const _flaxBinding2472 = FlaxGetter("ppqs", _flaxBinding906, _Vector4_ppqs);
const _flaxBinding2473 = FlaxGetter("ppqt", _flaxBinding906, _Vector4_ppqt);
const _flaxBinding2474 = FlaxGetter("ppqp", _flaxBinding906, _Vector4_ppqp);
const _flaxBinding2475 = FlaxGetter("ppqq", _flaxBinding906, _Vector4_ppqq);
const _flaxBinding2476 = FlaxGetter("pqss", _flaxBinding906, _Vector4_pqss);
const _flaxBinding2477 = FlaxGetter("pqst", _flaxBinding906, _Vector4_pqst);
const _flaxBinding2478 = FlaxGetter("pqsp", _flaxBinding906, _Vector4_pqsp);
const _flaxBinding2479 = FlaxGetter("pqsq", _flaxBinding906, _Vector4_pqsq);
const _flaxBinding2480 = FlaxGetter("pqts", _flaxBinding906, _Vector4_pqts);
const _flaxBinding2481 = FlaxGetter("pqtt", _flaxBinding906, _Vector4_pqtt);
const _flaxBinding2482 = FlaxGetter("pqtp", _flaxBinding906, _Vector4_pqtp);
const _flaxBinding2483 = FlaxGetter("pqtq", _flaxBinding906, _Vector4_pqtq);
const _flaxBinding2484 = FlaxGetter("pqps", _flaxBinding906, _Vector4_pqps);
const _flaxBinding2485 = FlaxGetter("pqpt", _flaxBinding906, _Vector4_pqpt);
const _flaxBinding2486 = FlaxGetter("pqpp", _flaxBinding906, _Vector4_pqpp);
const _flaxBinding2487 = FlaxGetter("pqpq", _flaxBinding906, _Vector4_pqpq);
const _flaxBinding2488 = FlaxGetter("pqqs", _flaxBinding906, _Vector4_pqqs);
const _flaxBinding2489 = FlaxGetter("pqqt", _flaxBinding906, _Vector4_pqqt);
const _flaxBinding2490 = FlaxGetter("pqqp", _flaxBinding906, _Vector4_pqqp);
const _flaxBinding2491 = FlaxGetter("pqqq", _flaxBinding906, _Vector4_pqqq);
const _flaxBinding2492 = FlaxGetter("qsss", _flaxBinding906, _Vector4_qsss);
const _flaxBinding2493 = FlaxGetter("qsst", _flaxBinding906, _Vector4_qsst);
const _flaxBinding2494 = FlaxGetter("qssp", _flaxBinding906, _Vector4_qssp);
const _flaxBinding2495 = FlaxGetter("qssq", _flaxBinding906, _Vector4_qssq);
const _flaxBinding2496 = FlaxGetter("qsts", _flaxBinding906, _Vector4_qsts);
const _flaxBinding2497 = FlaxGetter("qstt", _flaxBinding906, _Vector4_qstt);
const _flaxBinding2498 = FlaxGetter("qstp", _flaxBinding906, _Vector4_qstp);
const _flaxBinding2499 = FlaxGetter("qstq", _flaxBinding906, _Vector4_qstq);
const _flaxBinding2500 = FlaxGetter("qsps", _flaxBinding906, _Vector4_qsps);
const _flaxBinding2501 = FlaxGetter("qspt", _flaxBinding906, _Vector4_qspt);
const _flaxBinding2502 = FlaxGetter("qspp", _flaxBinding906, _Vector4_qspp);
const _flaxBinding2503 = FlaxGetter("qspq", _flaxBinding906, _Vector4_qspq);
const _flaxBinding2504 = FlaxGetter("qsqs", _flaxBinding906, _Vector4_qsqs);
const _flaxBinding2505 = FlaxGetter("qsqt", _flaxBinding906, _Vector4_qsqt);
const _flaxBinding2506 = FlaxGetter("qsqp", _flaxBinding906, _Vector4_qsqp);
const _flaxBinding2507 = FlaxGetter("qsqq", _flaxBinding906, _Vector4_qsqq);
const _flaxBinding2508 = FlaxGetter("qtss", _flaxBinding906, _Vector4_qtss);
const _flaxBinding2509 = FlaxGetter("qtst", _flaxBinding906, _Vector4_qtst);
const _flaxBinding2510 = FlaxGetter("qtsp", _flaxBinding906, _Vector4_qtsp);
const _flaxBinding2511 = FlaxGetter("qtsq", _flaxBinding906, _Vector4_qtsq);
const _flaxBinding2512 = FlaxGetter("qtts", _flaxBinding906, _Vector4_qtts);
const _flaxBinding2513 = FlaxGetter("qttt", _flaxBinding906, _Vector4_qttt);
const _flaxBinding2514 = FlaxGetter("qttp", _flaxBinding906, _Vector4_qttp);
const _flaxBinding2515 = FlaxGetter("qttq", _flaxBinding906, _Vector4_qttq);
const _flaxBinding2516 = FlaxGetter("qtps", _flaxBinding906, _Vector4_qtps);
const _flaxBinding2517 = FlaxGetter("qtpt", _flaxBinding906, _Vector4_qtpt);
const _flaxBinding2518 = FlaxGetter("qtpp", _flaxBinding906, _Vector4_qtpp);
const _flaxBinding2519 = FlaxGetter("qtpq", _flaxBinding906, _Vector4_qtpq);
const _flaxBinding2520 = FlaxGetter("qtqs", _flaxBinding906, _Vector4_qtqs);
const _flaxBinding2521 = FlaxGetter("qtqt", _flaxBinding906, _Vector4_qtqt);
const _flaxBinding2522 = FlaxGetter("qtqp", _flaxBinding906, _Vector4_qtqp);
const _flaxBinding2523 = FlaxGetter("qtqq", _flaxBinding906, _Vector4_qtqq);
const _flaxBinding2524 = FlaxGetter("qpss", _flaxBinding906, _Vector4_qpss);
const _flaxBinding2525 = FlaxGetter("qpst", _flaxBinding906, _Vector4_qpst);
const _flaxBinding2526 = FlaxGetter("qpsp", _flaxBinding906, _Vector4_qpsp);
const _flaxBinding2527 = FlaxGetter("qpsq", _flaxBinding906, _Vector4_qpsq);
const _flaxBinding2528 = FlaxGetter("qpts", _flaxBinding906, _Vector4_qpts);
const _flaxBinding2529 = FlaxGetter("qptt", _flaxBinding906, _Vector4_qptt);
const _flaxBinding2530 = FlaxGetter("qptp", _flaxBinding906, _Vector4_qptp);
const _flaxBinding2531 = FlaxGetter("qptq", _flaxBinding906, _Vector4_qptq);
const _flaxBinding2532 = FlaxGetter("qpps", _flaxBinding906, _Vector4_qpps);
const _flaxBinding2533 = FlaxGetter("qppt", _flaxBinding906, _Vector4_qppt);
const _flaxBinding2534 = FlaxGetter("qppp", _flaxBinding906, _Vector4_qppp);
const _flaxBinding2535 = FlaxGetter("qppq", _flaxBinding906, _Vector4_qppq);
const _flaxBinding2536 = FlaxGetter("qpqs", _flaxBinding906, _Vector4_qpqs);
const _flaxBinding2537 = FlaxGetter("qpqt", _flaxBinding906, _Vector4_qpqt);
const _flaxBinding2538 = FlaxGetter("qpqp", _flaxBinding906, _Vector4_qpqp);
const _flaxBinding2539 = FlaxGetter("qpqq", _flaxBinding906, _Vector4_qpqq);
const _flaxBinding2540 = FlaxGetter("qqss", _flaxBinding906, _Vector4_qqss);
const _flaxBinding2541 = FlaxGetter("qqst", _flaxBinding906, _Vector4_qqst);
const _flaxBinding2542 = FlaxGetter("qqsp", _flaxBinding906, _Vector4_qqsp);
const _flaxBinding2543 = FlaxGetter("qqsq", _flaxBinding906, _Vector4_qqsq);
const _flaxBinding2544 = FlaxGetter("qqts", _flaxBinding906, _Vector4_qqts);
const _flaxBinding2545 = FlaxGetter("qqtt", _flaxBinding906, _Vector4_qqtt);
const _flaxBinding2546 = FlaxGetter("qqtp", _flaxBinding906, _Vector4_qqtp);
const _flaxBinding2547 = FlaxGetter("qqtq", _flaxBinding906, _Vector4_qqtq);
const _flaxBinding2548 = FlaxGetter("qqps", _flaxBinding906, _Vector4_qqps);
const _flaxBinding2549 = FlaxGetter("qqpt", _flaxBinding906, _Vector4_qqpt);
const _flaxBinding2550 = FlaxGetter("qqpp", _flaxBinding906, _Vector4_qqpp);
const _flaxBinding2551 = FlaxGetter("qqpq", _flaxBinding906, _Vector4_qqpq);
const _flaxBinding2552 = FlaxGetter("qqqs", _flaxBinding906, _Vector4_qqqs);
const _flaxBinding2553 = FlaxGetter("qqqt", _flaxBinding906, _Vector4_qqqt);
const _flaxBinding2554 = FlaxGetter("qqqp", _flaxBinding906, _Vector4_qqqp);
const _flaxBinding2555 = FlaxGetter("qqqq", _flaxBinding906, _Vector4_qqqq);
const _flaxBinding2556 = FlaxSetter(
  "length",
  _flaxBinding448,
  _Vector4_set_length,
);
const _flaxBinding2557 = FlaxSetter("xy", _flaxBinding441, _Vector4_set_xy);
const _flaxBinding2558 = FlaxSetter("xz", _flaxBinding441, _Vector4_set_xz);
const _flaxBinding2559 = FlaxSetter("xw", _flaxBinding441, _Vector4_set_xw);
const _flaxBinding2560 = FlaxSetter("yx", _flaxBinding441, _Vector4_set_yx);
const _flaxBinding2561 = FlaxSetter("yz", _flaxBinding441, _Vector4_set_yz);
const _flaxBinding2562 = FlaxSetter("yw", _flaxBinding441, _Vector4_set_yw);
const _flaxBinding2563 = FlaxSetter("zx", _flaxBinding441, _Vector4_set_zx);
const _flaxBinding2564 = FlaxSetter("zy", _flaxBinding441, _Vector4_set_zy);
const _flaxBinding2565 = FlaxSetter("zw", _flaxBinding441, _Vector4_set_zw);
const _flaxBinding2566 = FlaxSetter("wx", _flaxBinding441, _Vector4_set_wx);
const _flaxBinding2567 = FlaxSetter("wy", _flaxBinding441, _Vector4_set_wy);
const _flaxBinding2568 = FlaxSetter("wz", _flaxBinding441, _Vector4_set_wz);
const _flaxBinding2569 = FlaxSetter("xyz", _flaxBinding534, _Vector4_set_xyz);
const _flaxBinding2570 = FlaxSetter("xyw", _flaxBinding534, _Vector4_set_xyw);
const _flaxBinding2571 = FlaxSetter("xzy", _flaxBinding534, _Vector4_set_xzy);
const _flaxBinding2572 = FlaxSetter("xzw", _flaxBinding534, _Vector4_set_xzw);
const _flaxBinding2573 = FlaxSetter("xwy", _flaxBinding534, _Vector4_set_xwy);
const _flaxBinding2574 = FlaxSetter("xwz", _flaxBinding534, _Vector4_set_xwz);
const _flaxBinding2575 = FlaxSetter("yxz", _flaxBinding534, _Vector4_set_yxz);
const _flaxBinding2576 = FlaxSetter("yxw", _flaxBinding534, _Vector4_set_yxw);
const _flaxBinding2577 = FlaxSetter("yzx", _flaxBinding534, _Vector4_set_yzx);
const _flaxBinding2578 = FlaxSetter("yzw", _flaxBinding534, _Vector4_set_yzw);
const _flaxBinding2579 = FlaxSetter("ywx", _flaxBinding534, _Vector4_set_ywx);
const _flaxBinding2580 = FlaxSetter("ywz", _flaxBinding534, _Vector4_set_ywz);
const _flaxBinding2581 = FlaxSetter("zxy", _flaxBinding534, _Vector4_set_zxy);
const _flaxBinding2582 = FlaxSetter("zxw", _flaxBinding534, _Vector4_set_zxw);
const _flaxBinding2583 = FlaxSetter("zyx", _flaxBinding534, _Vector4_set_zyx);
const _flaxBinding2584 = FlaxSetter("zyw", _flaxBinding534, _Vector4_set_zyw);
const _flaxBinding2585 = FlaxSetter("zwx", _flaxBinding534, _Vector4_set_zwx);
const _flaxBinding2586 = FlaxSetter("zwy", _flaxBinding534, _Vector4_set_zwy);
const _flaxBinding2587 = FlaxSetter("wxy", _flaxBinding534, _Vector4_set_wxy);
const _flaxBinding2588 = FlaxSetter("wxz", _flaxBinding534, _Vector4_set_wxz);
const _flaxBinding2589 = FlaxSetter("wyx", _flaxBinding534, _Vector4_set_wyx);
const _flaxBinding2590 = FlaxSetter("wyz", _flaxBinding534, _Vector4_set_wyz);
const _flaxBinding2591 = FlaxSetter("wzx", _flaxBinding534, _Vector4_set_wzx);
const _flaxBinding2592 = FlaxSetter("wzy", _flaxBinding534, _Vector4_set_wzy);
const _flaxBinding2593 = FlaxSetter("xyzw", _flaxBinding906, _Vector4_set_xyzw);
const _flaxBinding2594 = FlaxSetter("xywz", _flaxBinding906, _Vector4_set_xywz);
const _flaxBinding2595 = FlaxSetter("xzyw", _flaxBinding906, _Vector4_set_xzyw);
const _flaxBinding2596 = FlaxSetter("xzwy", _flaxBinding906, _Vector4_set_xzwy);
const _flaxBinding2597 = FlaxSetter("xwyz", _flaxBinding906, _Vector4_set_xwyz);
const _flaxBinding2598 = FlaxSetter("xwzy", _flaxBinding906, _Vector4_set_xwzy);
const _flaxBinding2599 = FlaxSetter("yxzw", _flaxBinding906, _Vector4_set_yxzw);
const _flaxBinding2600 = FlaxSetter("yxwz", _flaxBinding906, _Vector4_set_yxwz);
const _flaxBinding2601 = FlaxSetter("yzxw", _flaxBinding906, _Vector4_set_yzxw);
const _flaxBinding2602 = FlaxSetter("yzwx", _flaxBinding906, _Vector4_set_yzwx);
const _flaxBinding2603 = FlaxSetter("ywxz", _flaxBinding906, _Vector4_set_ywxz);
const _flaxBinding2604 = FlaxSetter("ywzx", _flaxBinding906, _Vector4_set_ywzx);
const _flaxBinding2605 = FlaxSetter("zxyw", _flaxBinding906, _Vector4_set_zxyw);
const _flaxBinding2606 = FlaxSetter("zxwy", _flaxBinding906, _Vector4_set_zxwy);
const _flaxBinding2607 = FlaxSetter("zyxw", _flaxBinding906, _Vector4_set_zyxw);
const _flaxBinding2608 = FlaxSetter("zywx", _flaxBinding906, _Vector4_set_zywx);
const _flaxBinding2609 = FlaxSetter("zwxy", _flaxBinding906, _Vector4_set_zwxy);
const _flaxBinding2610 = FlaxSetter("zwyx", _flaxBinding906, _Vector4_set_zwyx);
const _flaxBinding2611 = FlaxSetter("wxyz", _flaxBinding906, _Vector4_set_wxyz);
const _flaxBinding2612 = FlaxSetter("wxzy", _flaxBinding906, _Vector4_set_wxzy);
const _flaxBinding2613 = FlaxSetter("wyxz", _flaxBinding906, _Vector4_set_wyxz);
const _flaxBinding2614 = FlaxSetter("wyzx", _flaxBinding906, _Vector4_set_wyzx);
const _flaxBinding2615 = FlaxSetter("wzxy", _flaxBinding906, _Vector4_set_wzxy);
const _flaxBinding2616 = FlaxSetter("wzyx", _flaxBinding906, _Vector4_set_wzyx);
const _flaxBinding2617 = FlaxSetter("r", _flaxBinding448, _Vector4_set_r);
const _flaxBinding2618 = FlaxSetter("g", _flaxBinding448, _Vector4_set_g);
const _flaxBinding2619 = FlaxSetter("b", _flaxBinding448, _Vector4_set_b);
const _flaxBinding2620 = FlaxSetter("a", _flaxBinding448, _Vector4_set_a);
const _flaxBinding2621 = FlaxSetter("s", _flaxBinding448, _Vector4_set_s);
const _flaxBinding2622 = FlaxSetter("t", _flaxBinding448, _Vector4_set_t);
const _flaxBinding2623 = FlaxSetter("p", _flaxBinding448, _Vector4_set_p);
const _flaxBinding2624 = FlaxSetter("q", _flaxBinding448, _Vector4_set_q);
const _flaxBinding2625 = FlaxSetter("x", _flaxBinding448, _Vector4_set_x);
const _flaxBinding2626 = FlaxSetter("y", _flaxBinding448, _Vector4_set_y);
const _flaxBinding2627 = FlaxSetter("z", _flaxBinding448, _Vector4_set_z);
const _flaxBinding2628 = FlaxSetter("w", _flaxBinding448, _Vector4_set_w);
const _flaxBinding2629 = FlaxSetter("rg", _flaxBinding441, _Vector4_set_rg);
const _flaxBinding2630 = FlaxSetter("rb", _flaxBinding441, _Vector4_set_rb);
const _flaxBinding2631 = FlaxSetter("ra", _flaxBinding441, _Vector4_set_ra);
const _flaxBinding2632 = FlaxSetter("gr", _flaxBinding441, _Vector4_set_gr);
const _flaxBinding2633 = FlaxSetter("gb", _flaxBinding441, _Vector4_set_gb);
const _flaxBinding2634 = FlaxSetter("ga", _flaxBinding441, _Vector4_set_ga);
const _flaxBinding2635 = FlaxSetter("br", _flaxBinding441, _Vector4_set_br);
const _flaxBinding2636 = FlaxSetter("bg", _flaxBinding441, _Vector4_set_bg);
const _flaxBinding2637 = FlaxSetter("ba", _flaxBinding441, _Vector4_set_ba);
const _flaxBinding2638 = FlaxSetter("ar", _flaxBinding441, _Vector4_set_ar);
const _flaxBinding2639 = FlaxSetter("ag", _flaxBinding441, _Vector4_set_ag);
const _flaxBinding2640 = FlaxSetter("ab", _flaxBinding441, _Vector4_set_ab);
const _flaxBinding2641 = FlaxSetter("rgb", _flaxBinding534, _Vector4_set_rgb);
const _flaxBinding2642 = FlaxSetter("rga", _flaxBinding534, _Vector4_set_rga);
const _flaxBinding2643 = FlaxSetter("rbg", _flaxBinding534, _Vector4_set_rbg);
const _flaxBinding2644 = FlaxSetter("rba", _flaxBinding534, _Vector4_set_rba);
const _flaxBinding2645 = FlaxSetter("rag", _flaxBinding534, _Vector4_set_rag);
const _flaxBinding2646 = FlaxSetter("rab", _flaxBinding534, _Vector4_set_rab);
const _flaxBinding2647 = FlaxSetter("grb", _flaxBinding534, _Vector4_set_grb);
const _flaxBinding2648 = FlaxSetter("gra", _flaxBinding534, _Vector4_set_gra);
const _flaxBinding2649 = FlaxSetter("gbr", _flaxBinding534, _Vector4_set_gbr);
const _flaxBinding2650 = FlaxSetter("gba", _flaxBinding534, _Vector4_set_gba);
const _flaxBinding2651 = FlaxSetter("gar", _flaxBinding534, _Vector4_set_gar);
const _flaxBinding2652 = FlaxSetter("gab", _flaxBinding534, _Vector4_set_gab);
const _flaxBinding2653 = FlaxSetter("brg", _flaxBinding534, _Vector4_set_brg);
const _flaxBinding2654 = FlaxSetter("bra", _flaxBinding534, _Vector4_set_bra);
const _flaxBinding2655 = FlaxSetter("bgr", _flaxBinding534, _Vector4_set_bgr);
const _flaxBinding2656 = FlaxSetter("bga", _flaxBinding534, _Vector4_set_bga);
const _flaxBinding2657 = FlaxSetter("bar", _flaxBinding534, _Vector4_set_bar);
const _flaxBinding2658 = FlaxSetter("bag", _flaxBinding534, _Vector4_set_bag);
const _flaxBinding2659 = FlaxSetter("arg", _flaxBinding534, _Vector4_set_arg);
const _flaxBinding2660 = FlaxSetter("arb", _flaxBinding534, _Vector4_set_arb);
const _flaxBinding2661 = FlaxSetter("agr", _flaxBinding534, _Vector4_set_agr);
const _flaxBinding2662 = FlaxSetter("agb", _flaxBinding534, _Vector4_set_agb);
const _flaxBinding2663 = FlaxSetter("abr", _flaxBinding534, _Vector4_set_abr);
const _flaxBinding2664 = FlaxSetter("abg", _flaxBinding534, _Vector4_set_abg);
const _flaxBinding2665 = FlaxSetter("rgba", _flaxBinding906, _Vector4_set_rgba);
const _flaxBinding2666 = FlaxSetter("rgab", _flaxBinding906, _Vector4_set_rgab);
const _flaxBinding2667 = FlaxSetter("rbga", _flaxBinding906, _Vector4_set_rbga);
const _flaxBinding2668 = FlaxSetter("rbag", _flaxBinding906, _Vector4_set_rbag);
const _flaxBinding2669 = FlaxSetter("ragb", _flaxBinding906, _Vector4_set_ragb);
const _flaxBinding2670 = FlaxSetter("rabg", _flaxBinding906, _Vector4_set_rabg);
const _flaxBinding2671 = FlaxSetter("grba", _flaxBinding906, _Vector4_set_grba);
const _flaxBinding2672 = FlaxSetter("grab", _flaxBinding906, _Vector4_set_grab);
const _flaxBinding2673 = FlaxSetter("gbra", _flaxBinding906, _Vector4_set_gbra);
const _flaxBinding2674 = FlaxSetter("gbar", _flaxBinding906, _Vector4_set_gbar);
const _flaxBinding2675 = FlaxSetter("garb", _flaxBinding906, _Vector4_set_garb);
const _flaxBinding2676 = FlaxSetter("gabr", _flaxBinding906, _Vector4_set_gabr);
const _flaxBinding2677 = FlaxSetter("brga", _flaxBinding906, _Vector4_set_brga);
const _flaxBinding2678 = FlaxSetter("brag", _flaxBinding906, _Vector4_set_brag);
const _flaxBinding2679 = FlaxSetter("bgra", _flaxBinding906, _Vector4_set_bgra);
const _flaxBinding2680 = FlaxSetter("bgar", _flaxBinding906, _Vector4_set_bgar);
const _flaxBinding2681 = FlaxSetter("barg", _flaxBinding906, _Vector4_set_barg);
const _flaxBinding2682 = FlaxSetter("bagr", _flaxBinding906, _Vector4_set_bagr);
const _flaxBinding2683 = FlaxSetter("argb", _flaxBinding906, _Vector4_set_argb);
const _flaxBinding2684 = FlaxSetter("arbg", _flaxBinding906, _Vector4_set_arbg);
const _flaxBinding2685 = FlaxSetter("agrb", _flaxBinding906, _Vector4_set_agrb);
const _flaxBinding2686 = FlaxSetter("agbr", _flaxBinding906, _Vector4_set_agbr);
const _flaxBinding2687 = FlaxSetter("abrg", _flaxBinding906, _Vector4_set_abrg);
const _flaxBinding2688 = FlaxSetter("abgr", _flaxBinding906, _Vector4_set_abgr);
const _flaxBinding2689 = FlaxSetter("st", _flaxBinding441, _Vector4_set_st);
const _flaxBinding2690 = FlaxSetter("sp", _flaxBinding441, _Vector4_set_sp);
const _flaxBinding2691 = FlaxSetter("sq", _flaxBinding441, _Vector4_set_sq);
const _flaxBinding2692 = FlaxSetter("ts", _flaxBinding441, _Vector4_set_ts);
const _flaxBinding2693 = FlaxSetter("tp", _flaxBinding441, _Vector4_set_tp);
const _flaxBinding2694 = FlaxSetter("tq", _flaxBinding441, _Vector4_set_tq);
const _flaxBinding2695 = FlaxSetter("ps", _flaxBinding441, _Vector4_set_ps);
const _flaxBinding2696 = FlaxSetter("pt", _flaxBinding441, _Vector4_set_pt);
const _flaxBinding2697 = FlaxSetter("pq", _flaxBinding441, _Vector4_set_pq);
const _flaxBinding2698 = FlaxSetter("qs", _flaxBinding441, _Vector4_set_qs);
const _flaxBinding2699 = FlaxSetter("qt", _flaxBinding441, _Vector4_set_qt);
const _flaxBinding2700 = FlaxSetter("qp", _flaxBinding441, _Vector4_set_qp);
const _flaxBinding2701 = FlaxSetter("stp", _flaxBinding534, _Vector4_set_stp);
const _flaxBinding2702 = FlaxSetter("stq", _flaxBinding534, _Vector4_set_stq);
const _flaxBinding2703 = FlaxSetter("spt", _flaxBinding534, _Vector4_set_spt);
const _flaxBinding2704 = FlaxSetter("spq", _flaxBinding534, _Vector4_set_spq);
const _flaxBinding2705 = FlaxSetter("sqt", _flaxBinding534, _Vector4_set_sqt);
const _flaxBinding2706 = FlaxSetter("sqp", _flaxBinding534, _Vector4_set_sqp);
const _flaxBinding2707 = FlaxSetter("tsp", _flaxBinding534, _Vector4_set_tsp);
const _flaxBinding2708 = FlaxSetter("tsq", _flaxBinding534, _Vector4_set_tsq);
const _flaxBinding2709 = FlaxSetter("tps", _flaxBinding534, _Vector4_set_tps);
const _flaxBinding2710 = FlaxSetter("tpq", _flaxBinding534, _Vector4_set_tpq);
const _flaxBinding2711 = FlaxSetter("tqs", _flaxBinding534, _Vector4_set_tqs);
const _flaxBinding2712 = FlaxSetter("tqp", _flaxBinding534, _Vector4_set_tqp);
const _flaxBinding2713 = FlaxSetter("pst", _flaxBinding534, _Vector4_set_pst);
const _flaxBinding2714 = FlaxSetter("psq", _flaxBinding534, _Vector4_set_psq);
const _flaxBinding2715 = FlaxSetter("pts", _flaxBinding534, _Vector4_set_pts);
const _flaxBinding2716 = FlaxSetter("ptq", _flaxBinding534, _Vector4_set_ptq);
const _flaxBinding2717 = FlaxSetter("pqs", _flaxBinding534, _Vector4_set_pqs);
const _flaxBinding2718 = FlaxSetter("pqt", _flaxBinding534, _Vector4_set_pqt);
const _flaxBinding2719 = FlaxSetter("qst", _flaxBinding534, _Vector4_set_qst);
const _flaxBinding2720 = FlaxSetter("qsp", _flaxBinding534, _Vector4_set_qsp);
const _flaxBinding2721 = FlaxSetter("qts", _flaxBinding534, _Vector4_set_qts);
const _flaxBinding2722 = FlaxSetter("qtp", _flaxBinding534, _Vector4_set_qtp);
const _flaxBinding2723 = FlaxSetter("qps", _flaxBinding534, _Vector4_set_qps);
const _flaxBinding2724 = FlaxSetter("qpt", _flaxBinding534, _Vector4_set_qpt);
const _flaxBinding2725 = FlaxSetter("stpq", _flaxBinding906, _Vector4_set_stpq);
const _flaxBinding2726 = FlaxSetter("stqp", _flaxBinding906, _Vector4_set_stqp);
const _flaxBinding2727 = FlaxSetter("sptq", _flaxBinding906, _Vector4_set_sptq);
const _flaxBinding2728 = FlaxSetter("spqt", _flaxBinding906, _Vector4_set_spqt);
const _flaxBinding2729 = FlaxSetter("sqtp", _flaxBinding906, _Vector4_set_sqtp);
const _flaxBinding2730 = FlaxSetter("sqpt", _flaxBinding906, _Vector4_set_sqpt);
const _flaxBinding2731 = FlaxSetter("tspq", _flaxBinding906, _Vector4_set_tspq);
const _flaxBinding2732 = FlaxSetter("tsqp", _flaxBinding906, _Vector4_set_tsqp);
const _flaxBinding2733 = FlaxSetter("tpsq", _flaxBinding906, _Vector4_set_tpsq);
const _flaxBinding2734 = FlaxSetter("tpqs", _flaxBinding906, _Vector4_set_tpqs);
const _flaxBinding2735 = FlaxSetter("tqsp", _flaxBinding906, _Vector4_set_tqsp);
const _flaxBinding2736 = FlaxSetter("tqps", _flaxBinding906, _Vector4_set_tqps);
const _flaxBinding2737 = FlaxSetter("pstq", _flaxBinding906, _Vector4_set_pstq);
const _flaxBinding2738 = FlaxSetter("psqt", _flaxBinding906, _Vector4_set_psqt);
const _flaxBinding2739 = FlaxSetter("ptsq", _flaxBinding906, _Vector4_set_ptsq);
const _flaxBinding2740 = FlaxSetter("ptqs", _flaxBinding906, _Vector4_set_ptqs);
const _flaxBinding2741 = FlaxSetter("pqst", _flaxBinding906, _Vector4_set_pqst);
const _flaxBinding2742 = FlaxSetter("pqts", _flaxBinding906, _Vector4_set_pqts);
const _flaxBinding2743 = FlaxSetter("qstp", _flaxBinding906, _Vector4_set_qstp);
const _flaxBinding2744 = FlaxSetter("qspt", _flaxBinding906, _Vector4_set_qspt);
const _flaxBinding2745 = FlaxSetter("qtsp", _flaxBinding906, _Vector4_set_qtsp);
const _flaxBinding2746 = FlaxSetter("qtps", _flaxBinding906, _Vector4_set_qtps);
const _flaxBinding2747 = FlaxSetter("qpst", _flaxBinding906, _Vector4_set_qpst);
const _flaxBinding2748 = FlaxSetter("qpts", _flaxBinding906, _Vector4_set_qpts);
const _flaxBinding2749 = FlaxInstanceMethod(
  _flaxBinding656,
  _flaxBinding70,
  _Vector4_setValues,
);
const _flaxBinding2750 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding70,
  _Vector4_setZero,
);
const _flaxBinding2751 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding70,
  _Vector4_setIdentity,
);
const _flaxBinding2752 = <FlaxParameter>[
  FlaxParameter("other", _flaxBinding906, required: true),
];
const _flaxBinding2753 = FlaxInstanceMethod(
  _flaxBinding2752,
  _flaxBinding70,
  _Vector4_setFrom,
);
const _flaxBinding2754 = FlaxInstanceMethod(
  _flaxBinding461,
  _flaxBinding70,
  _Vector4_splat,
);
const _flaxBinding2755 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding0,
  _Vector4_toString,
);
const _flaxBinding2756 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding448,
  _Vector4_normalize,
);
const _flaxBinding2757 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding448,
  _Vector4_normalizeLength,
);
const _flaxBinding2758 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding906,
  _Vector4_normalized,
);
const _flaxBinding2759 = <FlaxParameter>[
  FlaxParameter("out", _flaxBinding906, required: true),
];
const _flaxBinding2760 = FlaxInstanceMethod(
  _flaxBinding2759,
  _flaxBinding906,
  _Vector4_normalizeInto,
);
const _flaxBinding2761 = <FlaxParameter>[
  FlaxParameter("arg", _flaxBinding906, required: true),
];
const _flaxBinding2762 = FlaxInstanceMethod(
  _flaxBinding2761,
  _flaxBinding448,
  _Vector4_distanceTo,
);
const _flaxBinding2763 = FlaxInstanceMethod(
  _flaxBinding2761,
  _flaxBinding448,
  _Vector4_distanceToSquared,
);
const _flaxBinding2764 = FlaxInstanceMethod(
  _flaxBinding2752,
  _flaxBinding448,
  _Vector4_dot,
);
const _flaxBinding2765 = FlaxInstanceMethod(
  _flaxBinding587,
  _flaxBinding70,
  _Vector4_applyMatrix4,
);
const _flaxBinding2766 = <FlaxParameter>[
  FlaxParameter("correct", _flaxBinding906, required: true),
];
const _flaxBinding2767 = FlaxInstanceMethod(
  _flaxBinding2766,
  _flaxBinding448,
  _Vector4_relativeError,
);
const _flaxBinding2768 = FlaxInstanceMethod(
  _flaxBinding2766,
  _flaxBinding448,
  _Vector4_absoluteError,
);
const _flaxBinding2769 = FlaxInstanceMethod(
  _flaxBinding2761,
  _flaxBinding70,
  _Vector4_add,
);
const _flaxBinding2770 = <FlaxParameter>[
  FlaxParameter("arg", _flaxBinding906, required: true),
  FlaxParameter("factor", _flaxBinding448, required: true),
];
const _flaxBinding2771 = FlaxInstanceMethod(
  _flaxBinding2770,
  _flaxBinding70,
  _Vector4_addScaled,
);
const _flaxBinding2772 = FlaxInstanceMethod(
  _flaxBinding2761,
  _flaxBinding70,
  _Vector4_sub,
);
const _flaxBinding2773 = FlaxInstanceMethod(
  _flaxBinding2761,
  _flaxBinding70,
  _Vector4_multiply,
);
const _flaxBinding2774 = FlaxInstanceMethod(
  _flaxBinding2761,
  _flaxBinding70,
  _Vector4_div,
);
const _flaxBinding2775 = FlaxInstanceMethod(
  _flaxBinding461,
  _flaxBinding70,
  _Vector4_scale,
);
const _flaxBinding2776 = FlaxInstanceMethod(
  _flaxBinding461,
  _flaxBinding906,
  _Vector4_scaled,
);
const _flaxBinding2777 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding70,
  _Vector4_negate,
);
const _flaxBinding2778 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding70,
  _Vector4_absolute,
);
const _flaxBinding2779 = <FlaxParameter>[
  FlaxParameter("min", _flaxBinding906, required: true),
  FlaxParameter("max", _flaxBinding906, required: true),
];
const _flaxBinding2780 = FlaxInstanceMethod(
  _flaxBinding2779,
  _flaxBinding70,
  _Vector4_clamp,
);
const _flaxBinding2781 = FlaxInstanceMethod(
  _flaxBinding1037,
  _flaxBinding70,
  _Vector4_clampScalar,
);
const _flaxBinding2782 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding70,
  _Vector4_floor,
);
const _flaxBinding2783 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding70,
  _Vector4_ceil,
);
const _flaxBinding2784 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding70,
  _Vector4_round,
);
const _flaxBinding2785 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding70,
  _Vector4_roundToZero,
);
const _flaxBinding2786 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding906,
  _Vector4_clone,
);
const _flaxBinding2787 = FlaxInstanceMethod(
  _flaxBinding2761,
  _flaxBinding906,
  _Vector4_copyInto,
);
const _flaxBinding2788 = FlaxInstanceMethod(
  _flaxBinding518,
  _flaxBinding70,
  _Vector4_copyIntoArray,
);
const _flaxBinding2789 = FlaxInstanceMethod(
  _flaxBinding518,
  _flaxBinding70,
  _Vector4_copyFromArray,
);
const _flaxBinding2790 = FlaxInstanceMethod(
  _flaxBinding520,
  _flaxBinding448,
  _Vector4_operatorGetIndex,
);
const _flaxBinding2791 = FlaxInstanceMethod(
  _flaxBinding522,
  _flaxBinding70,
  _Vector4_operatorSetIndex,
);
const _flaxBinding2792 = FlaxInstanceMethod(
  _flaxBinding2752,
  _flaxBinding906,
  _Vector4_operatorAdd,
);
const _flaxBinding2793 = FlaxInstanceMethod(
  _flaxBinding2752,
  _flaxBinding906,
  _Vector4_operatorSubtract,
);
const _flaxBinding2794 = FlaxInstanceMethod(
  _flaxBinding495,
  _flaxBinding906,
  _Vector4_operatorMultiply,
);
const _flaxBinding2795 = FlaxInstanceMethod(
  _flaxBinding495,
  _flaxBinding906,
  _Vector4_operatorDivide,
);
const _flaxBinding2796 = FlaxInstanceMethod(
  _flaxBinding42,
  _flaxBinding906,
  _Vector4_operatorNegate,
);
const _flaxBinding2797 = <FlaxParameter>[
  FlaxParameter("_v4storage", _flaxBinding438, required: true),
];
const _flaxBinding2798 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:Vector4",
  [
    _flaxBinding1531,
    _flaxBinding1532,
    _flaxBinding1533,
    _flaxBinding1534,
    _flaxBinding1535,
    _flaxBinding1536,
    _flaxBinding1537,
    _flaxBinding1538,
    _flaxBinding1539,
    _flaxBinding1540,
    _flaxBinding1541,
    _flaxBinding1542,
    _flaxBinding1543,
    _flaxBinding1544,
    _flaxBinding1545,
    _flaxBinding1546,
    _flaxBinding1547,
    _flaxBinding1548,
    _flaxBinding1549,
    _flaxBinding1550,
    _flaxBinding1551,
    _flaxBinding1552,
    _flaxBinding1553,
    _flaxBinding1554,
    _flaxBinding1555,
    _flaxBinding1556,
    _flaxBinding1557,
    _flaxBinding1558,
    _flaxBinding1559,
    _flaxBinding1560,
    _flaxBinding1561,
    _flaxBinding1562,
    _flaxBinding1563,
    _flaxBinding1564,
    _flaxBinding1565,
    _flaxBinding1566,
    _flaxBinding1567,
    _flaxBinding1568,
    _flaxBinding1569,
    _flaxBinding1570,
    _flaxBinding1571,
    _flaxBinding1572,
    _flaxBinding1573,
    _flaxBinding1574,
    _flaxBinding1575,
    _flaxBinding1576,
    _flaxBinding1577,
    _flaxBinding1578,
    _flaxBinding1579,
    _flaxBinding1580,
    _flaxBinding1581,
    _flaxBinding1582,
    _flaxBinding1583,
    _flaxBinding1584,
    _flaxBinding1585,
    _flaxBinding1586,
    _flaxBinding1587,
    _flaxBinding1588,
    _flaxBinding1589,
    _flaxBinding1590,
    _flaxBinding1591,
    _flaxBinding1592,
    _flaxBinding1593,
    _flaxBinding1594,
    _flaxBinding1595,
    _flaxBinding1596,
    _flaxBinding1597,
    _flaxBinding1598,
    _flaxBinding1599,
    _flaxBinding1600,
    _flaxBinding1601,
    _flaxBinding1602,
    _flaxBinding1603,
    _flaxBinding1604,
    _flaxBinding1605,
    _flaxBinding1606,
    _flaxBinding1607,
    _flaxBinding1608,
    _flaxBinding1609,
    _flaxBinding1610,
    _flaxBinding1611,
    _flaxBinding1612,
    _flaxBinding1613,
    _flaxBinding1614,
    _flaxBinding1615,
    _flaxBinding1616,
    _flaxBinding1617,
    _flaxBinding1618,
    _flaxBinding1619,
    _flaxBinding1620,
    _flaxBinding1621,
    _flaxBinding1622,
    _flaxBinding1623,
    _flaxBinding1624,
    _flaxBinding1625,
    _flaxBinding1626,
    _flaxBinding1627,
    _flaxBinding1628,
    _flaxBinding1629,
    _flaxBinding1630,
    _flaxBinding1631,
    _flaxBinding1632,
    _flaxBinding1633,
    _flaxBinding1634,
    _flaxBinding1635,
    _flaxBinding1636,
    _flaxBinding1637,
    _flaxBinding1638,
    _flaxBinding1639,
    _flaxBinding1640,
    _flaxBinding1641,
    _flaxBinding1642,
    _flaxBinding1643,
    _flaxBinding1644,
    _flaxBinding1645,
    _flaxBinding1646,
    _flaxBinding1647,
    _flaxBinding1648,
    _flaxBinding1649,
    _flaxBinding1650,
    _flaxBinding1651,
    _flaxBinding1652,
    _flaxBinding1653,
    _flaxBinding1654,
    _flaxBinding1655,
    _flaxBinding1656,
    _flaxBinding1657,
    _flaxBinding1658,
    _flaxBinding1659,
    _flaxBinding1660,
    _flaxBinding1661,
    _flaxBinding1662,
    _flaxBinding1663,
    _flaxBinding1664,
    _flaxBinding1665,
    _flaxBinding1666,
    _flaxBinding1667,
    _flaxBinding1668,
    _flaxBinding1669,
    _flaxBinding1670,
    _flaxBinding1671,
    _flaxBinding1672,
    _flaxBinding1673,
    _flaxBinding1674,
    _flaxBinding1675,
    _flaxBinding1676,
    _flaxBinding1677,
    _flaxBinding1678,
    _flaxBinding1679,
    _flaxBinding1680,
    _flaxBinding1681,
    _flaxBinding1682,
    _flaxBinding1683,
    _flaxBinding1684,
    _flaxBinding1685,
    _flaxBinding1686,
    _flaxBinding1687,
    _flaxBinding1688,
    _flaxBinding1689,
    _flaxBinding1690,
    _flaxBinding1691,
    _flaxBinding1692,
    _flaxBinding1693,
    _flaxBinding1694,
    _flaxBinding1695,
    _flaxBinding1696,
    _flaxBinding1697,
    _flaxBinding1698,
    _flaxBinding1699,
    _flaxBinding1700,
    _flaxBinding1701,
    _flaxBinding1702,
    _flaxBinding1703,
    _flaxBinding1704,
    _flaxBinding1705,
    _flaxBinding1706,
    _flaxBinding1707,
    _flaxBinding1708,
    _flaxBinding1709,
    _flaxBinding1710,
    _flaxBinding1711,
    _flaxBinding1712,
    _flaxBinding1713,
    _flaxBinding1714,
    _flaxBinding1715,
    _flaxBinding1716,
    _flaxBinding1717,
    _flaxBinding1718,
    _flaxBinding1719,
    _flaxBinding1720,
    _flaxBinding1721,
    _flaxBinding1722,
    _flaxBinding1723,
    _flaxBinding1724,
    _flaxBinding1725,
    _flaxBinding1726,
    _flaxBinding1727,
    _flaxBinding1728,
    _flaxBinding1729,
    _flaxBinding1730,
    _flaxBinding1731,
    _flaxBinding1732,
    _flaxBinding1733,
    _flaxBinding1734,
    _flaxBinding1735,
    _flaxBinding1736,
    _flaxBinding1737,
    _flaxBinding1738,
    _flaxBinding1739,
    _flaxBinding1740,
    _flaxBinding1741,
    _flaxBinding1742,
    _flaxBinding1743,
    _flaxBinding1744,
    _flaxBinding1745,
    _flaxBinding1746,
    _flaxBinding1747,
    _flaxBinding1748,
    _flaxBinding1749,
    _flaxBinding1750,
    _flaxBinding1751,
    _flaxBinding1752,
    _flaxBinding1753,
    _flaxBinding1754,
    _flaxBinding1755,
    _flaxBinding1756,
    _flaxBinding1757,
    _flaxBinding1758,
    _flaxBinding1759,
    _flaxBinding1760,
    _flaxBinding1761,
    _flaxBinding1762,
    _flaxBinding1763,
    _flaxBinding1764,
    _flaxBinding1765,
    _flaxBinding1766,
    _flaxBinding1767,
    _flaxBinding1768,
    _flaxBinding1769,
    _flaxBinding1770,
    _flaxBinding1771,
    _flaxBinding1772,
    _flaxBinding1773,
    _flaxBinding1774,
    _flaxBinding1775,
    _flaxBinding1776,
    _flaxBinding1777,
    _flaxBinding1778,
    _flaxBinding1779,
    _flaxBinding1780,
    _flaxBinding1781,
    _flaxBinding1782,
    _flaxBinding1783,
    _flaxBinding1784,
    _flaxBinding1785,
    _flaxBinding1786,
    _flaxBinding1787,
    _flaxBinding1788,
    _flaxBinding1789,
    _flaxBinding1790,
    _flaxBinding1791,
    _flaxBinding1792,
    _flaxBinding1793,
    _flaxBinding1794,
    _flaxBinding1795,
    _flaxBinding1796,
    _flaxBinding1797,
    _flaxBinding1798,
    _flaxBinding1799,
    _flaxBinding1800,
    _flaxBinding1801,
    _flaxBinding1802,
    _flaxBinding1803,
    _flaxBinding1804,
    _flaxBinding1805,
    _flaxBinding1806,
    _flaxBinding1807,
    _flaxBinding1808,
    _flaxBinding1809,
    _flaxBinding1810,
    _flaxBinding1811,
    _flaxBinding1812,
    _flaxBinding1813,
    _flaxBinding1814,
    _flaxBinding1815,
    _flaxBinding1816,
    _flaxBinding1817,
    _flaxBinding1818,
    _flaxBinding1819,
    _flaxBinding1820,
    _flaxBinding1821,
    _flaxBinding1822,
    _flaxBinding1823,
    _flaxBinding1824,
    _flaxBinding1825,
    _flaxBinding1826,
    _flaxBinding1827,
    _flaxBinding1828,
    _flaxBinding1829,
    _flaxBinding1830,
    _flaxBinding1831,
    _flaxBinding1832,
    _flaxBinding1833,
    _flaxBinding1834,
    _flaxBinding1835,
    _flaxBinding1836,
    _flaxBinding1837,
    _flaxBinding1838,
    _flaxBinding1839,
    _flaxBinding1840,
    _flaxBinding1841,
    _flaxBinding1842,
    _flaxBinding1843,
    _flaxBinding1844,
    _flaxBinding1845,
    _flaxBinding1846,
    _flaxBinding1847,
    _flaxBinding1848,
    _flaxBinding1849,
    _flaxBinding1850,
    _flaxBinding1851,
    _flaxBinding1852,
    _flaxBinding1853,
    _flaxBinding1854,
    _flaxBinding1855,
    _flaxBinding1856,
    _flaxBinding1857,
    _flaxBinding1858,
    _flaxBinding1859,
    _flaxBinding1860,
    _flaxBinding1861,
    _flaxBinding1862,
    _flaxBinding1863,
    _flaxBinding1864,
    _flaxBinding1865,
    _flaxBinding1866,
    _flaxBinding1867,
    _flaxBinding1868,
    _flaxBinding1869,
    _flaxBinding1870,
    _flaxBinding1871,
    _flaxBinding1872,
    _flaxBinding1873,
    _flaxBinding1874,
    _flaxBinding1875,
    _flaxBinding1876,
    _flaxBinding1877,
    _flaxBinding1878,
    _flaxBinding1879,
    _flaxBinding1880,
    _flaxBinding1881,
    _flaxBinding1882,
    _flaxBinding1883,
    _flaxBinding1884,
    _flaxBinding1885,
    _flaxBinding1886,
    _flaxBinding1887,
    _flaxBinding1888,
    _flaxBinding1889,
    _flaxBinding1890,
    _flaxBinding1891,
    _flaxBinding1892,
    _flaxBinding1893,
    _flaxBinding1894,
    _flaxBinding1895,
    _flaxBinding1896,
    _flaxBinding1897,
    _flaxBinding1898,
    _flaxBinding1899,
    _flaxBinding1900,
    _flaxBinding1901,
    _flaxBinding1902,
    _flaxBinding1903,
    _flaxBinding1904,
    _flaxBinding1905,
    _flaxBinding1906,
    _flaxBinding1907,
    _flaxBinding1908,
    _flaxBinding1909,
    _flaxBinding1910,
    _flaxBinding1911,
    _flaxBinding1912,
    _flaxBinding1913,
    _flaxBinding1914,
    _flaxBinding1915,
    _flaxBinding1916,
    _flaxBinding1917,
    _flaxBinding1918,
    _flaxBinding1919,
    _flaxBinding1920,
    _flaxBinding1921,
    _flaxBinding1922,
    _flaxBinding1923,
    _flaxBinding1924,
    _flaxBinding1925,
    _flaxBinding1926,
    _flaxBinding1927,
    _flaxBinding1928,
    _flaxBinding1929,
    _flaxBinding1930,
    _flaxBinding1931,
    _flaxBinding1932,
    _flaxBinding1933,
    _flaxBinding1934,
    _flaxBinding1935,
    _flaxBinding1936,
    _flaxBinding1937,
    _flaxBinding1938,
    _flaxBinding1939,
    _flaxBinding1940,
    _flaxBinding1941,
    _flaxBinding1942,
    _flaxBinding1943,
    _flaxBinding1944,
    _flaxBinding1945,
    _flaxBinding1946,
    _flaxBinding1947,
    _flaxBinding1948,
    _flaxBinding1949,
    _flaxBinding1950,
    _flaxBinding1951,
    _flaxBinding1952,
    _flaxBinding1953,
    _flaxBinding1954,
    _flaxBinding1955,
    _flaxBinding1956,
    _flaxBinding1957,
    _flaxBinding1958,
    _flaxBinding1959,
    _flaxBinding1960,
    _flaxBinding1961,
    _flaxBinding1962,
    _flaxBinding1963,
    _flaxBinding1964,
    _flaxBinding1965,
    _flaxBinding1966,
    _flaxBinding1967,
    _flaxBinding1968,
    _flaxBinding1969,
    _flaxBinding1970,
    _flaxBinding1971,
    _flaxBinding1972,
    _flaxBinding1973,
    _flaxBinding1974,
    _flaxBinding1975,
    _flaxBinding1976,
    _flaxBinding1977,
    _flaxBinding1978,
    _flaxBinding1979,
    _flaxBinding1980,
    _flaxBinding1981,
    _flaxBinding1982,
    _flaxBinding1983,
    _flaxBinding1984,
    _flaxBinding1985,
    _flaxBinding1986,
    _flaxBinding1987,
    _flaxBinding1988,
    _flaxBinding1989,
    _flaxBinding1990,
    _flaxBinding1991,
    _flaxBinding1992,
    _flaxBinding1993,
    _flaxBinding1994,
    _flaxBinding1995,
    _flaxBinding1996,
    _flaxBinding1997,
    _flaxBinding1998,
    _flaxBinding1999,
    _flaxBinding2000,
    _flaxBinding2001,
    _flaxBinding2002,
    _flaxBinding2003,
    _flaxBinding2004,
    _flaxBinding2005,
    _flaxBinding2006,
    _flaxBinding2007,
    _flaxBinding2008,
    _flaxBinding2009,
    _flaxBinding2010,
    _flaxBinding2011,
    _flaxBinding2012,
    _flaxBinding2013,
    _flaxBinding2014,
    _flaxBinding2015,
    _flaxBinding2016,
    _flaxBinding2017,
    _flaxBinding2018,
    _flaxBinding2019,
    _flaxBinding2020,
    _flaxBinding2021,
    _flaxBinding2022,
    _flaxBinding2023,
    _flaxBinding2024,
    _flaxBinding2025,
    _flaxBinding2026,
    _flaxBinding2027,
    _flaxBinding2028,
    _flaxBinding2029,
    _flaxBinding2030,
    _flaxBinding2031,
    _flaxBinding2032,
    _flaxBinding2033,
    _flaxBinding2034,
    _flaxBinding2035,
    _flaxBinding2036,
    _flaxBinding2037,
    _flaxBinding2038,
    _flaxBinding2039,
    _flaxBinding2040,
    _flaxBinding2041,
    _flaxBinding2042,
    _flaxBinding2043,
    _flaxBinding2044,
    _flaxBinding2045,
    _flaxBinding2046,
    _flaxBinding2047,
    _flaxBinding2048,
    _flaxBinding2049,
    _flaxBinding2050,
    _flaxBinding2051,
    _flaxBinding2052,
    _flaxBinding2053,
    _flaxBinding2054,
    _flaxBinding2055,
    _flaxBinding2056,
    _flaxBinding2057,
    _flaxBinding2058,
    _flaxBinding2059,
    _flaxBinding2060,
    _flaxBinding2061,
    _flaxBinding2062,
    _flaxBinding2063,
    _flaxBinding2064,
    _flaxBinding2065,
    _flaxBinding2066,
    _flaxBinding2067,
    _flaxBinding2068,
    _flaxBinding2069,
    _flaxBinding2070,
    _flaxBinding2071,
    _flaxBinding2072,
    _flaxBinding2073,
    _flaxBinding2074,
    _flaxBinding2075,
    _flaxBinding2076,
    _flaxBinding2077,
    _flaxBinding2078,
    _flaxBinding2079,
    _flaxBinding2080,
    _flaxBinding2081,
    _flaxBinding2082,
    _flaxBinding2083,
    _flaxBinding2084,
    _flaxBinding2085,
    _flaxBinding2086,
    _flaxBinding2087,
    _flaxBinding2088,
    _flaxBinding2089,
    _flaxBinding2090,
    _flaxBinding2091,
    _flaxBinding2092,
    _flaxBinding2093,
    _flaxBinding2094,
    _flaxBinding2095,
    _flaxBinding2096,
    _flaxBinding2097,
    _flaxBinding2098,
    _flaxBinding2099,
    _flaxBinding2100,
    _flaxBinding2101,
    _flaxBinding2102,
    _flaxBinding2103,
    _flaxBinding2104,
    _flaxBinding2105,
    _flaxBinding2106,
    _flaxBinding2107,
    _flaxBinding2108,
    _flaxBinding2109,
    _flaxBinding2110,
    _flaxBinding2111,
    _flaxBinding2112,
    _flaxBinding2113,
    _flaxBinding2114,
    _flaxBinding2115,
    _flaxBinding2116,
    _flaxBinding2117,
    _flaxBinding2118,
    _flaxBinding2119,
    _flaxBinding2120,
    _flaxBinding2121,
    _flaxBinding2122,
    _flaxBinding2123,
    _flaxBinding2124,
    _flaxBinding2125,
    _flaxBinding2126,
    _flaxBinding2127,
    _flaxBinding2128,
    _flaxBinding2129,
    _flaxBinding2130,
    _flaxBinding2131,
    _flaxBinding2132,
    _flaxBinding2133,
    _flaxBinding2134,
    _flaxBinding2135,
    _flaxBinding2136,
    _flaxBinding2137,
    _flaxBinding2138,
    _flaxBinding2139,
    _flaxBinding2140,
    _flaxBinding2141,
    _flaxBinding2142,
    _flaxBinding2143,
    _flaxBinding2144,
    _flaxBinding2145,
    _flaxBinding2146,
    _flaxBinding2147,
    _flaxBinding2148,
    _flaxBinding2149,
    _flaxBinding2150,
    _flaxBinding2151,
    _flaxBinding2152,
    _flaxBinding2153,
    _flaxBinding2154,
    _flaxBinding2155,
    _flaxBinding2156,
    _flaxBinding2157,
    _flaxBinding2158,
    _flaxBinding2159,
    _flaxBinding2160,
    _flaxBinding2161,
    _flaxBinding2162,
    _flaxBinding2163,
    _flaxBinding2164,
    _flaxBinding2165,
    _flaxBinding2166,
    _flaxBinding2167,
    _flaxBinding2168,
    _flaxBinding2169,
    _flaxBinding2170,
    _flaxBinding2171,
    _flaxBinding2172,
    _flaxBinding2173,
    _flaxBinding2174,
    _flaxBinding2175,
    _flaxBinding2176,
    _flaxBinding2177,
    _flaxBinding2178,
    _flaxBinding2179,
    _flaxBinding2180,
    _flaxBinding2181,
    _flaxBinding2182,
    _flaxBinding2183,
    _flaxBinding2184,
    _flaxBinding2185,
    _flaxBinding2186,
    _flaxBinding2187,
    _flaxBinding2188,
    _flaxBinding2189,
    _flaxBinding2190,
    _flaxBinding2191,
    _flaxBinding2192,
    _flaxBinding2193,
    _flaxBinding2194,
    _flaxBinding2195,
    _flaxBinding2196,
    _flaxBinding2197,
    _flaxBinding2198,
    _flaxBinding2199,
    _flaxBinding2200,
    _flaxBinding2201,
    _flaxBinding2202,
    _flaxBinding2203,
    _flaxBinding2204,
    _flaxBinding2205,
    _flaxBinding2206,
    _flaxBinding2207,
    _flaxBinding2208,
    _flaxBinding2209,
    _flaxBinding2210,
    _flaxBinding2211,
    _flaxBinding2212,
    _flaxBinding2213,
    _flaxBinding2214,
    _flaxBinding2215,
    _flaxBinding2216,
    _flaxBinding2217,
    _flaxBinding2218,
    _flaxBinding2219,
    _flaxBinding2220,
    _flaxBinding2221,
    _flaxBinding2222,
    _flaxBinding2223,
    _flaxBinding2224,
    _flaxBinding2225,
    _flaxBinding2226,
    _flaxBinding2227,
    _flaxBinding2228,
    _flaxBinding2229,
    _flaxBinding2230,
    _flaxBinding2231,
    _flaxBinding2232,
    _flaxBinding2233,
    _flaxBinding2234,
    _flaxBinding2235,
    _flaxBinding2236,
    _flaxBinding2237,
    _flaxBinding2238,
    _flaxBinding2239,
    _flaxBinding2240,
    _flaxBinding2241,
    _flaxBinding2242,
    _flaxBinding2243,
    _flaxBinding2244,
    _flaxBinding2245,
    _flaxBinding2246,
    _flaxBinding2247,
    _flaxBinding2248,
    _flaxBinding2249,
    _flaxBinding2250,
    _flaxBinding2251,
    _flaxBinding2252,
    _flaxBinding2253,
    _flaxBinding2254,
    _flaxBinding2255,
    _flaxBinding2256,
    _flaxBinding2257,
    _flaxBinding2258,
    _flaxBinding2259,
    _flaxBinding2260,
    _flaxBinding2261,
    _flaxBinding2262,
    _flaxBinding2263,
    _flaxBinding2264,
    _flaxBinding2265,
    _flaxBinding2266,
    _flaxBinding2267,
    _flaxBinding2268,
    _flaxBinding2269,
    _flaxBinding2270,
    _flaxBinding2271,
    _flaxBinding2272,
    _flaxBinding2273,
    _flaxBinding2274,
    _flaxBinding2275,
    _flaxBinding2276,
    _flaxBinding2277,
    _flaxBinding2278,
    _flaxBinding2279,
    _flaxBinding2280,
    _flaxBinding2281,
    _flaxBinding2282,
    _flaxBinding2283,
    _flaxBinding2284,
    _flaxBinding2285,
    _flaxBinding2286,
    _flaxBinding2287,
    _flaxBinding2288,
    _flaxBinding2289,
    _flaxBinding2290,
    _flaxBinding2291,
    _flaxBinding2292,
    _flaxBinding2293,
    _flaxBinding2294,
    _flaxBinding2295,
    _flaxBinding2296,
    _flaxBinding2297,
    _flaxBinding2298,
    _flaxBinding2299,
    _flaxBinding2300,
    _flaxBinding2301,
    _flaxBinding2302,
    _flaxBinding2303,
    _flaxBinding2304,
    _flaxBinding2305,
    _flaxBinding2306,
    _flaxBinding2307,
    _flaxBinding2308,
    _flaxBinding2309,
    _flaxBinding2310,
    _flaxBinding2311,
    _flaxBinding2312,
    _flaxBinding2313,
    _flaxBinding2314,
    _flaxBinding2315,
    _flaxBinding2316,
    _flaxBinding2317,
    _flaxBinding2318,
    _flaxBinding2319,
    _flaxBinding2320,
    _flaxBinding2321,
    _flaxBinding2322,
    _flaxBinding2323,
    _flaxBinding2324,
    _flaxBinding2325,
    _flaxBinding2326,
    _flaxBinding2327,
    _flaxBinding2328,
    _flaxBinding2329,
    _flaxBinding2330,
    _flaxBinding2331,
    _flaxBinding2332,
    _flaxBinding2333,
    _flaxBinding2334,
    _flaxBinding2335,
    _flaxBinding2336,
    _flaxBinding2337,
    _flaxBinding2338,
    _flaxBinding2339,
    _flaxBinding2340,
    _flaxBinding2341,
    _flaxBinding2342,
    _flaxBinding2343,
    _flaxBinding2344,
    _flaxBinding2345,
    _flaxBinding2346,
    _flaxBinding2347,
    _flaxBinding2348,
    _flaxBinding2349,
    _flaxBinding2350,
    _flaxBinding2351,
    _flaxBinding2352,
    _flaxBinding2353,
    _flaxBinding2354,
    _flaxBinding2355,
    _flaxBinding2356,
    _flaxBinding2357,
    _flaxBinding2358,
    _flaxBinding2359,
    _flaxBinding2360,
    _flaxBinding2361,
    _flaxBinding2362,
    _flaxBinding2363,
    _flaxBinding2364,
    _flaxBinding2365,
    _flaxBinding2366,
    _flaxBinding2367,
    _flaxBinding2368,
    _flaxBinding2369,
    _flaxBinding2370,
    _flaxBinding2371,
    _flaxBinding2372,
    _flaxBinding2373,
    _flaxBinding2374,
    _flaxBinding2375,
    _flaxBinding2376,
    _flaxBinding2377,
    _flaxBinding2378,
    _flaxBinding2379,
    _flaxBinding2380,
    _flaxBinding2381,
    _flaxBinding2382,
    _flaxBinding2383,
    _flaxBinding2384,
    _flaxBinding2385,
    _flaxBinding2386,
    _flaxBinding2387,
    _flaxBinding2388,
    _flaxBinding2389,
    _flaxBinding2390,
    _flaxBinding2391,
    _flaxBinding2392,
    _flaxBinding2393,
    _flaxBinding2394,
    _flaxBinding2395,
    _flaxBinding2396,
    _flaxBinding2397,
    _flaxBinding2398,
    _flaxBinding2399,
    _flaxBinding2400,
    _flaxBinding2401,
    _flaxBinding2402,
    _flaxBinding2403,
    _flaxBinding2404,
    _flaxBinding2405,
    _flaxBinding2406,
    _flaxBinding2407,
    _flaxBinding2408,
    _flaxBinding2409,
    _flaxBinding2410,
    _flaxBinding2411,
    _flaxBinding2412,
    _flaxBinding2413,
    _flaxBinding2414,
    _flaxBinding2415,
    _flaxBinding2416,
    _flaxBinding2417,
    _flaxBinding2418,
    _flaxBinding2419,
    _flaxBinding2420,
    _flaxBinding2421,
    _flaxBinding2422,
    _flaxBinding2423,
    _flaxBinding2424,
    _flaxBinding2425,
    _flaxBinding2426,
    _flaxBinding2427,
    _flaxBinding2428,
    _flaxBinding2429,
    _flaxBinding2430,
    _flaxBinding2431,
    _flaxBinding2432,
    _flaxBinding2433,
    _flaxBinding2434,
    _flaxBinding2435,
    _flaxBinding2436,
    _flaxBinding2437,
    _flaxBinding2438,
    _flaxBinding2439,
    _flaxBinding2440,
    _flaxBinding2441,
    _flaxBinding2442,
    _flaxBinding2443,
    _flaxBinding2444,
    _flaxBinding2445,
    _flaxBinding2446,
    _flaxBinding2447,
    _flaxBinding2448,
    _flaxBinding2449,
    _flaxBinding2450,
    _flaxBinding2451,
    _flaxBinding2452,
    _flaxBinding2453,
    _flaxBinding2454,
    _flaxBinding2455,
    _flaxBinding2456,
    _flaxBinding2457,
    _flaxBinding2458,
    _flaxBinding2459,
    _flaxBinding2460,
    _flaxBinding2461,
    _flaxBinding2462,
    _flaxBinding2463,
    _flaxBinding2464,
    _flaxBinding2465,
    _flaxBinding2466,
    _flaxBinding2467,
    _flaxBinding2468,
    _flaxBinding2469,
    _flaxBinding2470,
    _flaxBinding2471,
    _flaxBinding2472,
    _flaxBinding2473,
    _flaxBinding2474,
    _flaxBinding2475,
    _flaxBinding2476,
    _flaxBinding2477,
    _flaxBinding2478,
    _flaxBinding2479,
    _flaxBinding2480,
    _flaxBinding2481,
    _flaxBinding2482,
    _flaxBinding2483,
    _flaxBinding2484,
    _flaxBinding2485,
    _flaxBinding2486,
    _flaxBinding2487,
    _flaxBinding2488,
    _flaxBinding2489,
    _flaxBinding2490,
    _flaxBinding2491,
    _flaxBinding2492,
    _flaxBinding2493,
    _flaxBinding2494,
    _flaxBinding2495,
    _flaxBinding2496,
    _flaxBinding2497,
    _flaxBinding2498,
    _flaxBinding2499,
    _flaxBinding2500,
    _flaxBinding2501,
    _flaxBinding2502,
    _flaxBinding2503,
    _flaxBinding2504,
    _flaxBinding2505,
    _flaxBinding2506,
    _flaxBinding2507,
    _flaxBinding2508,
    _flaxBinding2509,
    _flaxBinding2510,
    _flaxBinding2511,
    _flaxBinding2512,
    _flaxBinding2513,
    _flaxBinding2514,
    _flaxBinding2515,
    _flaxBinding2516,
    _flaxBinding2517,
    _flaxBinding2518,
    _flaxBinding2519,
    _flaxBinding2520,
    _flaxBinding2521,
    _flaxBinding2522,
    _flaxBinding2523,
    _flaxBinding2524,
    _flaxBinding2525,
    _flaxBinding2526,
    _flaxBinding2527,
    _flaxBinding2528,
    _flaxBinding2529,
    _flaxBinding2530,
    _flaxBinding2531,
    _flaxBinding2532,
    _flaxBinding2533,
    _flaxBinding2534,
    _flaxBinding2535,
    _flaxBinding2536,
    _flaxBinding2537,
    _flaxBinding2538,
    _flaxBinding2539,
    _flaxBinding2540,
    _flaxBinding2541,
    _flaxBinding2542,
    _flaxBinding2543,
    _flaxBinding2544,
    _flaxBinding2545,
    _flaxBinding2546,
    _flaxBinding2547,
    _flaxBinding2548,
    _flaxBinding2549,
    _flaxBinding2550,
    _flaxBinding2551,
    _flaxBinding2552,
    _flaxBinding2553,
    _flaxBinding2554,
    _flaxBinding2555,
  ],
  {
    "setValues": _flaxBinding2749,
    "setZero": _flaxBinding2750,
    "setIdentity": _flaxBinding2751,
    "setFrom": _flaxBinding2753,
    "splat": _flaxBinding2754,
    "toString": _flaxBinding2755,
    "normalize": _flaxBinding2756,
    "normalizeLength": _flaxBinding2757,
    "normalized": _flaxBinding2758,
    "normalizeInto": _flaxBinding2760,
    "distanceTo": _flaxBinding2762,
    "distanceToSquared": _flaxBinding2763,
    "dot": _flaxBinding2764,
    "applyMatrix4": _flaxBinding2765,
    "relativeError": _flaxBinding2767,
    "absoluteError": _flaxBinding2768,
    "add": _flaxBinding2769,
    "addScaled": _flaxBinding2771,
    "sub": _flaxBinding2772,
    "multiply": _flaxBinding2773,
    "div": _flaxBinding2774,
    "scale": _flaxBinding2775,
    "scaled": _flaxBinding2776,
    "negate": _flaxBinding2777,
    "absolute": _flaxBinding2778,
    "clamp": _flaxBinding2780,
    "clampScalar": _flaxBinding2781,
    "floor": _flaxBinding2782,
    "ceil": _flaxBinding2783,
    "round": _flaxBinding2784,
    "roundToZero": _flaxBinding2785,
    "clone": _flaxBinding2786,
    "copyInto": _flaxBinding2787,
    "copyIntoArray": _flaxBinding2788,
    "copyFromArray": _flaxBinding2789,
    "operatorGetIndex": _flaxBinding2790,
    "operatorSetIndex": _flaxBinding2791,
    "operatorAdd": _flaxBinding2792,
    "operatorSubtract": _flaxBinding2793,
    "operatorMultiply": _flaxBinding2794,
    "operatorDivide": _flaxBinding2795,
    "operatorNegate": _flaxBinding2796,
  },
  constructors: {
    "": _flaxBinding656,
    "array": _flaxBinding518,
    "zero": _flaxBinding42,
    "identity": _flaxBinding42,
    "all": _flaxBinding1055,
    "copy": _flaxBinding2752,
    "fromFloat64List": _flaxBinding2797,
    "fromBuffer": _flaxBinding702,
  },
  create: _createVector4,
  matches: _isVector4,
  setters: [
    _flaxBinding2556,
    _flaxBinding2557,
    _flaxBinding2558,
    _flaxBinding2559,
    _flaxBinding2560,
    _flaxBinding2561,
    _flaxBinding2562,
    _flaxBinding2563,
    _flaxBinding2564,
    _flaxBinding2565,
    _flaxBinding2566,
    _flaxBinding2567,
    _flaxBinding2568,
    _flaxBinding2569,
    _flaxBinding2570,
    _flaxBinding2571,
    _flaxBinding2572,
    _flaxBinding2573,
    _flaxBinding2574,
    _flaxBinding2575,
    _flaxBinding2576,
    _flaxBinding2577,
    _flaxBinding2578,
    _flaxBinding2579,
    _flaxBinding2580,
    _flaxBinding2581,
    _flaxBinding2582,
    _flaxBinding2583,
    _flaxBinding2584,
    _flaxBinding2585,
    _flaxBinding2586,
    _flaxBinding2587,
    _flaxBinding2588,
    _flaxBinding2589,
    _flaxBinding2590,
    _flaxBinding2591,
    _flaxBinding2592,
    _flaxBinding2593,
    _flaxBinding2594,
    _flaxBinding2595,
    _flaxBinding2596,
    _flaxBinding2597,
    _flaxBinding2598,
    _flaxBinding2599,
    _flaxBinding2600,
    _flaxBinding2601,
    _flaxBinding2602,
    _flaxBinding2603,
    _flaxBinding2604,
    _flaxBinding2605,
    _flaxBinding2606,
    _flaxBinding2607,
    _flaxBinding2608,
    _flaxBinding2609,
    _flaxBinding2610,
    _flaxBinding2611,
    _flaxBinding2612,
    _flaxBinding2613,
    _flaxBinding2614,
    _flaxBinding2615,
    _flaxBinding2616,
    _flaxBinding2617,
    _flaxBinding2618,
    _flaxBinding2619,
    _flaxBinding2620,
    _flaxBinding2621,
    _flaxBinding2622,
    _flaxBinding2623,
    _flaxBinding2624,
    _flaxBinding2625,
    _flaxBinding2626,
    _flaxBinding2627,
    _flaxBinding2628,
    _flaxBinding2629,
    _flaxBinding2630,
    _flaxBinding2631,
    _flaxBinding2632,
    _flaxBinding2633,
    _flaxBinding2634,
    _flaxBinding2635,
    _flaxBinding2636,
    _flaxBinding2637,
    _flaxBinding2638,
    _flaxBinding2639,
    _flaxBinding2640,
    _flaxBinding2641,
    _flaxBinding2642,
    _flaxBinding2643,
    _flaxBinding2644,
    _flaxBinding2645,
    _flaxBinding2646,
    _flaxBinding2647,
    _flaxBinding2648,
    _flaxBinding2649,
    _flaxBinding2650,
    _flaxBinding2651,
    _flaxBinding2652,
    _flaxBinding2653,
    _flaxBinding2654,
    _flaxBinding2655,
    _flaxBinding2656,
    _flaxBinding2657,
    _flaxBinding2658,
    _flaxBinding2659,
    _flaxBinding2660,
    _flaxBinding2661,
    _flaxBinding2662,
    _flaxBinding2663,
    _flaxBinding2664,
    _flaxBinding2665,
    _flaxBinding2666,
    _flaxBinding2667,
    _flaxBinding2668,
    _flaxBinding2669,
    _flaxBinding2670,
    _flaxBinding2671,
    _flaxBinding2672,
    _flaxBinding2673,
    _flaxBinding2674,
    _flaxBinding2675,
    _flaxBinding2676,
    _flaxBinding2677,
    _flaxBinding2678,
    _flaxBinding2679,
    _flaxBinding2680,
    _flaxBinding2681,
    _flaxBinding2682,
    _flaxBinding2683,
    _flaxBinding2684,
    _flaxBinding2685,
    _flaxBinding2686,
    _flaxBinding2687,
    _flaxBinding2688,
    _flaxBinding2689,
    _flaxBinding2690,
    _flaxBinding2691,
    _flaxBinding2692,
    _flaxBinding2693,
    _flaxBinding2694,
    _flaxBinding2695,
    _flaxBinding2696,
    _flaxBinding2697,
    _flaxBinding2698,
    _flaxBinding2699,
    _flaxBinding2700,
    _flaxBinding2701,
    _flaxBinding2702,
    _flaxBinding2703,
    _flaxBinding2704,
    _flaxBinding2705,
    _flaxBinding2706,
    _flaxBinding2707,
    _flaxBinding2708,
    _flaxBinding2709,
    _flaxBinding2710,
    _flaxBinding2711,
    _flaxBinding2712,
    _flaxBinding2713,
    _flaxBinding2714,
    _flaxBinding2715,
    _flaxBinding2716,
    _flaxBinding2717,
    _flaxBinding2718,
    _flaxBinding2719,
    _flaxBinding2720,
    _flaxBinding2721,
    _flaxBinding2722,
    _flaxBinding2723,
    _flaxBinding2724,
    _flaxBinding2725,
    _flaxBinding2726,
    _flaxBinding2727,
    _flaxBinding2728,
    _flaxBinding2729,
    _flaxBinding2730,
    _flaxBinding2731,
    _flaxBinding2732,
    _flaxBinding2733,
    _flaxBinding2734,
    _flaxBinding2735,
    _flaxBinding2736,
    _flaxBinding2737,
    _flaxBinding2738,
    _flaxBinding2739,
    _flaxBinding2740,
    _flaxBinding2741,
    _flaxBinding2742,
    _flaxBinding2743,
    _flaxBinding2744,
    _flaxBinding2745,
    _flaxBinding2746,
    _flaxBinding2747,
    _flaxBinding2748,
  ],
  supertypes: [
    "dart:core::Object",
    "package:vector_math/vector_math_64.dart::Vector",
  ],
);
const _flaxBinding2799 = FlaxGetter(
  "der",
  _flaxBinding14,
  _X509Certificate_der,
);
const _flaxBinding2800 = FlaxGetter("pem", _flaxBinding0, _X509Certificate_pem);
const _flaxBinding2801 = FlaxGetter(
  "sha1",
  _flaxBinding14,
  _X509Certificate_sha1,
);
const _flaxBinding2802 = FlaxGetter(
  "subject",
  _flaxBinding0,
  _X509Certificate_subject,
);
const _flaxBinding2803 = FlaxGetter(
  "issuer",
  _flaxBinding0,
  _X509Certificate_issuer,
);
const _flaxBinding2804 = FlaxGetter(
  "startValidity",
  _flaxBinding106,
  _X509Certificate_startValidity,
);
const _flaxBinding2805 = FlaxGetter(
  "endValidity",
  _flaxBinding106,
  _X509Certificate_endValidity,
);
const _flaxBinding2806 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:X509Certificate",
  [
    _flaxBinding2799,
    _flaxBinding2800,
    _flaxBinding2801,
    _flaxBinding2802,
    _flaxBinding2803,
    _flaxBinding2804,
    _flaxBinding2805,
  ],
  {},
  constructors: {},
  create: _createX509Certificate,
  matches: _isX509Certificate,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding2807 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:Encoding",
  nullable: true,
);
const _flaxBinding2808 = FlaxTypeRef(
  "future",
  item: _flaxBinding152,
  future: FlaxFutureBinding(
    "object:flax.core/sdk_dependencies#type:FileSystemEntityType",
    _future23Adapt,
  ),
);
const _flaxBinding2809 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:Flow",
);
const _flaxBinding2810 = FlaxTypeRef(
  "map",
  nullable: true,
  item: _flaxBinding0,
  key: _flaxBinding0,
  collection: FlaxCollectionBinding(
    "map:[String:][String:]",
    _collection21Create,
    _collection21Matches,
  ),
);
const _flaxBinding2811 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding366,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dependencies#type:InternetAddress]",
    _collection23Create,
    _collection23Matches,
    restore: _collection23Restore,
  ),
);
const _flaxBinding2812 = FlaxTypeRef(
  "list",
  item: _flaxBinding366,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dependencies#type:InternetAddress]",
    _collection22Create,
    _collection22Matches,
  ),
  iterable: _flaxBinding2811,
);
const _flaxBinding2813 = FlaxTypeRef(
  "future",
  item: _flaxBinding2812,
  future: FlaxFutureBinding(
    "list:[object:flax.core/sdk_dependencies#type:InternetAddress]",
    _future24Adapt,
  ),
);
const _flaxBinding2814 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:InternetAddress",
  nullable: true,
);
const _flaxBinding2815 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "line",
      _flaxBinding0,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding70,
  FlaxCallbackAdapters.wrapVoid1<String>,
  id: "callback:<>(p:r:line:String:)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<String>,
  matches: FlaxCallbackAdapters.matchesVoid1<String>,
);
const _flaxBinding2816 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding2815,
);
const _flaxBinding2817 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter(
      "certificate",
      _flaxBinding184,
      required: true,
      positional: true,
    ),
  ],
  _flaxBinding20,
  FlaxCallbackAdapters.wrap1<api3.X509Certificate, bool>,
  id: "callback:<>(p:r:certificate:object:flax.core/sdk_dependencies#type:X509Certificate)->bool:",
  invoke: FlaxCallbackAdapters.invoke1<api3.X509Certificate, bool>,
  matches: FlaxCallbackAdapters.matches1<api3.X509Certificate, bool>,
);
const _flaxBinding2818 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding2817,
);
const _flaxBinding2819 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:SecureSocket",
);
const _flaxBinding2820 = FlaxTypeRef(
  "future",
  item: _flaxBinding2819,
  future: FlaxFutureBinding(
    "object:flax.core/sdk_dependencies#type:SecureSocket",
    _future25Adapt,
  ),
);
const _flaxBinding2821 = FlaxTypeRef(
  "list",
  nullable: true,
  item: _flaxBinding2,
  collection: FlaxCollectionBinding(
    "list:[int:]",
    _collection0Create,
    _collection0Matches,
  ),
  iterable: _flaxBinding3,
);
const _flaxBinding2822 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:SecurityContext",
);
