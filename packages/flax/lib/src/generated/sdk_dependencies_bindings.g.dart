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

import 'package:flax/src/sandbox/file_system.dart' as api8;

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
    _flaxBinding17,
    _flaxBinding39,
    _flaxBinding84,
    _flaxBinding11,
    _flaxBinding136,
    _flaxBinding137,
    _flaxBinding138,
    _flaxBinding148,
    _flaxBinding64,
    _flaxBinding150,
    _flaxBinding152,
    _flaxBinding204,
    _flaxBinding250,
    _flaxBinding350,
    _flaxBinding355,
    _flaxBinding388,
    _flaxBinding402,
    _flaxBinding405,
    _flaxBinding408,
    _flaxBinding422,
    _flaxBinding514,
    _flaxBinding604,
    _flaxBinding620,
    _flaxBinding685,
    _flaxBinding724,
    _flaxBinding731,
    _flaxBinding735,
    _flaxBinding831,
    _flaxBinding850,
    _flaxBinding853,
    _flaxBinding826,
    _flaxBinding854,
    _flaxBinding864,
    _flaxBinding870,
    _flaxBinding1039,
    _flaxBinding1512,
    _flaxBinding2780,
    _flaxBinding2788,
  ],
  functions: [
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#read:Directory.current",
      [],
      _flaxBinding46,
      _Directory_static_get_current,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#read:Directory.systemTemp",
      [],
      _flaxBinding46,
      _Directory_static_get_systemTemp,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:Directory.current%3D",
      [FlaxParameter.required("value", flaxNullableAnyType)],
      flaxVoidType,
      _Directory_static_set_current,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:Encoding.getByName",
      [FlaxParameter.required("name", flaxNullableStringType)],
      _flaxBinding2789,
      _Encoding_getByName,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:FileStat.statSync",
      [FlaxParameter.required("path", flaxStringType)],
      _flaxBinding57,
      _FileStat_statSync,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:FileStat.stat",
      [FlaxParameter.required("path", flaxStringType)],
      _flaxBinding58,
      _FileStat_stat,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:FileSystemEntity.identical",
      [
        FlaxParameter.required("path1", flaxStringType),
        FlaxParameter.required("path2", flaxStringType),
      ],
      _flaxBinding48,
      _FileSystemEntity_identical,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:FileSystemEntity.identicalSync",
      [
        FlaxParameter.required("path1", flaxStringType),
        FlaxParameter.required("path2", flaxStringType),
      ],
      flaxBoolType,
      _FileSystemEntity_identicalSync,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:FileSystemEntity.type",
      [
        FlaxParameter.required("path", flaxStringType),
        FlaxParameter(
          "followLinks",
          flaxBoolType,
          required: false,
          defaultValue: true,
        ),
      ],
      _flaxBinding2790,
      _FileSystemEntity_type,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:FileSystemEntity.typeSync",
      [
        FlaxParameter.required("path", flaxStringType),
        FlaxParameter(
          "followLinks",
          flaxBoolType,
          required: false,
          defaultValue: true,
        ),
      ],
      _flaxBinding142,
      _FileSystemEntity_typeSync,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:FileSystemEntity.isLink",
      [FlaxParameter.required("path", flaxStringType)],
      _flaxBinding48,
      _FileSystemEntity_isLink,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:FileSystemEntity.isFile",
      [FlaxParameter.required("path", flaxStringType)],
      _flaxBinding48,
      _FileSystemEntity_isFile,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:FileSystemEntity.isDirectory",
      [FlaxParameter.required("path", flaxStringType)],
      _flaxBinding48,
      _FileSystemEntity_isDirectory,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:FileSystemEntity.isLinkSync",
      [FlaxParameter.required("path", flaxStringType)],
      flaxBoolType,
      _FileSystemEntity_isLinkSync,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:FileSystemEntity.isFileSync",
      [FlaxParameter.required("path", flaxStringType)],
      flaxBoolType,
      _FileSystemEntity_isFileSync,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:FileSystemEntity.isDirectorySync",
      [FlaxParameter.required("path", flaxStringType)],
      flaxBoolType,
      _FileSystemEntity_isDirectorySync,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:FileSystemEntity.parentOf",
      [FlaxParameter.required("path", flaxStringType)],
      flaxStringType,
      _FileSystemEntity_parentOf,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#read:FileSystemEntity.isWatchSupported",
      [],
      flaxBoolType,
      _FileSystemEntity_static_get_isWatchSupported,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:Flow.begin",
      [FlaxParameter("id", flaxNullableIntType, required: false)],
      _flaxBinding2791,
      _Flow_begin,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:Flow.step",
      [FlaxParameter.required("id", flaxIntType)],
      _flaxBinding2791,
      _Flow_step,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:Flow.end",
      [FlaxParameter.required("id", flaxIntType)],
      _flaxBinding2791,
      _Flow_end,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:HttpClient.findProxyFromEnvironment",
      [
        FlaxParameter.required("url", _flaxBinding41),
        FlaxParameter("environment", _flaxBinding2792, required: false),
      ],
      flaxStringType,
      _HttpClient_findProxyFromEnvironment,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#read:HttpClient.enableTimelineLogging",
      [],
      flaxBoolType,
      _HttpClient_static_get_enableTimelineLogging,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:HttpClient.enableTimelineLogging%3D",
      [FlaxParameter.required("value", flaxBoolType)],
      flaxVoidType,
      _HttpClient_static_set_enableTimelineLogging,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:InternetAddress.lookup",
      [
        FlaxParameter.required("host", flaxStringType),
        FlaxParameter(
          "type",
          _flaxBinding389,
          required: false,
          omitWhenAbsent: true,
        ),
      ],
      _flaxBinding2795,
      _InternetAddress_lookup,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:InternetAddress.tryParse",
      [FlaxParameter.required("address", flaxStringType)],
      _flaxBinding2796,
      _InternetAddress_tryParse,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#read:InternetAddress.loopbackIPv4",
      [],
      _flaxBinding351,
      _InternetAddress_static_get_loopbackIPv4,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#read:InternetAddress.loopbackIPv6",
      [],
      _flaxBinding351,
      _InternetAddress_static_get_loopbackIPv6,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#read:InternetAddress.anyIPv4",
      [],
      _flaxBinding351,
      _InternetAddress_static_get_anyIPv4,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#read:InternetAddress.anyIPv6",
      [],
      _flaxBinding351,
      _InternetAddress_static_get_anyIPv6,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:Matrix2.solve",
      [
        FlaxParameter.required("A", _flaxBinding440),
        FlaxParameter.required("x", _flaxBinding426),
        FlaxParameter.required("b", _flaxBinding426),
      ],
      flaxVoidType,
      _Matrix2_solve,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:Matrix3.solve2",
      [
        FlaxParameter.required("A", _flaxBinding534),
        FlaxParameter.required("x", _flaxBinding426),
        FlaxParameter.required("b", _flaxBinding426),
      ],
      flaxVoidType,
      _Matrix3_solve2,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:Matrix3.solve",
      [
        FlaxParameter.required("A", _flaxBinding534),
        FlaxParameter.required("x", _flaxBinding517),
        FlaxParameter.required("b", _flaxBinding517),
      ],
      flaxVoidType,
      _Matrix3_solve,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#read:RawSocketOption.levelSocket",
      [],
      flaxIntType,
      _RawSocketOption_static_get_levelSocket,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#read:RawSocketOption.levelIPv4",
      [],
      flaxIntType,
      _RawSocketOption_static_get_levelIPv4,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#read:RawSocketOption.IPv4MulticastInterface",
      [],
      flaxIntType,
      _RawSocketOption_static_get_IPv4MulticastInterface,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#read:RawSocketOption.levelIPv6",
      [],
      flaxIntType,
      _RawSocketOption_static_get_levelIPv6,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#read:RawSocketOption.IPv6MulticastInterface",
      [],
      flaxIntType,
      _RawSocketOption_static_get_IPv6MulticastInterface,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#read:RawSocketOption.levelTcp",
      [],
      flaxIntType,
      _RawSocketOption_static_get_levelTcp,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#read:RawSocketOption.levelUdp",
      [],
      flaxIntType,
      _RawSocketOption_static_get_levelUdp,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:SecureSocket.connect",
      [
        FlaxParameter.required("host", flaxNullableAnyType),
        FlaxParameter.required("port", flaxIntType),
        FlaxParameter("context", _flaxBinding202, required: false),
        FlaxParameter("keyLog", _flaxBinding2798, required: false),
        FlaxParameter("onBadCertificate", _flaxBinding2800, required: false),
        FlaxParameter("supportedProtocols", _flaxBinding386, required: false),
        FlaxParameter("timeout", _flaxBinding154, required: false),
      ],
      _flaxBinding2802,
      _SecureSocket_connect,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:SecureSocket.secure",
      [
        FlaxParameter.required("socket", _flaxBinding277),
        FlaxParameter("context", _flaxBinding202, required: false),
        FlaxParameter(
          "host",
          flaxNullableAnyType,
          required: false,
          omitWhenAbsent: true,
        ),
        FlaxParameter("keyLog", _flaxBinding2798, required: false),
        FlaxParameter("onBadCertificate", _flaxBinding2800, required: false),
        FlaxParameter("supportedProtocols", _flaxBinding386, required: false),
      ],
      _flaxBinding2802,
      _SecureSocket_secure,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:SecureSocket.secureServer",
      [
        FlaxParameter.required("socket", _flaxBinding277),
        FlaxParameter.required("context", _flaxBinding202),
        FlaxParameter("bufferedData", _flaxBinding2803, required: false),
        FlaxParameter(
          "requestClientCertificate",
          flaxBoolType,
          required: false,
          defaultValue: false,
        ),
        FlaxParameter(
          "requireClientCertificate",
          flaxBoolType,
          required: false,
          defaultValue: false,
        ),
        FlaxParameter("supportedProtocols", _flaxBinding386, required: false),
      ],
      _flaxBinding2802,
      _SecureSocket_secureServer,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#read:SecurityContext.defaultContext",
      [],
      _flaxBinding2804,
      _SecurityContext_static_get_defaultContext,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#read:SecurityContext.alpnSupported",
      [],
      flaxBoolType,
      _SecurityContext_static_get_alpnSupported,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:Socket.connect",
      [
        FlaxParameter.required("host", flaxNullableAnyType),
        FlaxParameter.required("port", flaxIntType),
        FlaxParameter(
          "sourceAddress",
          flaxNullableAnyType,
          required: false,
          omitWhenAbsent: true,
        ),
        FlaxParameter(
          "sourcePort",
          flaxIntType,
          required: false,
          defaultValue: 0,
        ),
        FlaxParameter("timeout", _flaxBinding154, required: false),
      ],
      _flaxBinding278,
      _Socket_connect,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:Vector2.min",
      [
        FlaxParameter.required("a", _flaxBinding426),
        FlaxParameter.required("b", _flaxBinding426),
        FlaxParameter.required("result", _flaxBinding426),
      ],
      flaxVoidType,
      _Vector2_min,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:Vector2.max",
      [
        FlaxParameter.required("a", _flaxBinding426),
        FlaxParameter.required("b", _flaxBinding426),
        FlaxParameter.required("result", _flaxBinding426),
      ],
      flaxVoidType,
      _Vector2_max,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:Vector2.mix",
      [
        FlaxParameter.required("min", _flaxBinding426),
        FlaxParameter.required("max", _flaxBinding426),
        FlaxParameter.required("a", flaxDoubleType),
        FlaxParameter.required("result", _flaxBinding426),
      ],
      flaxVoidType,
      _Vector2_mix,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:Vector3.min",
      [
        FlaxParameter.required("a", _flaxBinding517),
        FlaxParameter.required("b", _flaxBinding517),
        FlaxParameter.required("result", _flaxBinding517),
      ],
      flaxVoidType,
      _Vector3_min,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:Vector3.max",
      [
        FlaxParameter.required("a", _flaxBinding517),
        FlaxParameter.required("b", _flaxBinding517),
        FlaxParameter.required("result", _flaxBinding517),
      ],
      flaxVoidType,
      _Vector3_max,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:Vector3.mix",
      [
        FlaxParameter.required("min", _flaxBinding517),
        FlaxParameter.required("max", _flaxBinding517),
        FlaxParameter.required("a", flaxDoubleType),
        FlaxParameter.required("result", _flaxBinding517),
      ],
      flaxVoidType,
      _Vector3_mix,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:Vector4.min",
      [
        FlaxParameter.required("a", _flaxBinding888),
        FlaxParameter.required("b", _flaxBinding888),
        FlaxParameter.required("result", _flaxBinding888),
      ],
      flaxVoidType,
      _Vector4_min,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:Vector4.max",
      [
        FlaxParameter.required("a", _flaxBinding888),
        FlaxParameter.required("b", _flaxBinding888),
        FlaxParameter.required("result", _flaxBinding888),
      ],
      flaxVoidType,
      _Vector4_max,
    ),
    FlaxFunctionBinding(
      "flax.core/sdk_dependencies#function:Vector4.mix",
      [
        FlaxParameter.required("min", _flaxBinding888),
        FlaxParameter.required("max", _flaxBinding888),
        FlaxParameter.required("a", flaxDoubleType),
        FlaxParameter.required("result", _flaxBinding888),
      ],
      flaxVoidType,
      _Vector4_mix,
    ),
  ],
  constants: [
    FlaxConstantGroup(_flaxBinding716, {
      "flax.core/sdk_dependencies#read:FileLock.shared": api3.FileLock.shared,
      "flax.core/sdk_dependencies#read:FileLock.exclusive":
          api3.FileLock.exclusive,
      "flax.core/sdk_dependencies#read:FileLock.blockingShared":
          api3.FileLock.blockingShared,
      "flax.core/sdk_dependencies#read:FileLock.blockingExclusive":
          api3.FileLock.blockingExclusive,
    }),
    FlaxConstantGroup(_flaxBinding109, {
      "flax.core/sdk_dependencies#read:FileMode.read": api3.FileMode.read,
      "flax.core/sdk_dependencies#read:FileMode.write": api3.FileMode.write,
      "flax.core/sdk_dependencies#read:FileMode.append": api3.FileMode.append,
      "flax.core/sdk_dependencies#read:FileMode.writeOnly":
          api3.FileMode.writeOnly,
      "flax.core/sdk_dependencies#read:FileMode.writeOnlyAppend":
          api3.FileMode.writeOnlyAppend,
    }),
    FlaxConstantGroup(_flaxBinding142, {
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
    FlaxConstantGroup(flaxIntType, {
      "flax.core/sdk_dependencies#read:HttpClient.defaultHttpPort":
          api3.HttpClient.defaultHttpPort,
      "flax.core/sdk_dependencies#read:HttpClient.defaultHttpsPort":
          api3.HttpClient.defaultHttpsPort,
    }),
    FlaxConstantGroup(flaxStringType, {
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
    FlaxConstantGroup(_flaxBinding125, {
      "flax.core/sdk_dependencies#read:HttpHeaders.generalHeaders":
          api3.HttpHeaders.generalHeaders,
      "flax.core/sdk_dependencies#read:HttpHeaders.entityHeaders":
          api3.HttpHeaders.entityHeaders,
      "flax.core/sdk_dependencies#read:HttpHeaders.responseHeaders":
          api3.HttpHeaders.responseHeaders,
      "flax.core/sdk_dependencies#read:HttpHeaders.requestHeaders":
          api3.HttpHeaders.requestHeaders,
    }),
    FlaxConstantGroup(_flaxBinding389, {
      "flax.core/sdk_dependencies#read:InternetAddressType.IPv4":
          api3.InternetAddressType.IPv4,
      "flax.core/sdk_dependencies#read:InternetAddressType.IPv6":
          api3.InternetAddressType.IPv6,
      "flax.core/sdk_dependencies#read:InternetAddressType.unix":
          api3.InternetAddressType.unix,
      "flax.core/sdk_dependencies#read:InternetAddressType.any":
          api3.InternetAddressType.any,
    }),
    FlaxConstantGroup(_flaxBinding754, {
      "flax.core/sdk_dependencies#read:SocketOption.tcpNoDelay":
          api3.SocketOption.tcpNoDelay,
    }),
  ],
  moduleId: "flax.core/sdk_dependencies",
  dependencyModules: ["flax.core/flutter", "flax.core/sdk_rendering"],
  uiProtocol: 24,
  requiredCapabilities: const <String>[
    "call-layouts",
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
    "sandbox-guards",
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
  sandboxGuards: {
    ("flax.core/sdk_dependencies#type:Directory", "construct", ""):
        FlaxSandboxBinding(_flaxSandbox0, replace: true),
    ("flax.core/sdk_dependencies#type:Directory", "construct", "fromRawPath"):
        FlaxSandboxBinding.deny(),
    ("flax.core/sdk_dependencies#type:Directory", "construct", "fromUri"):
        FlaxSandboxBinding(_flaxSandbox2, replace: true),
    ("flax.core/sdk_dependencies#type:Directory", "call", "exists"):
        FlaxSandboxBinding(_flaxSandbox3, replace: false),
    ("flax.core/sdk_dependencies#type:Directory", "call", "existsSync"):
        FlaxSandboxBinding(_flaxSandbox4, replace: false),
    ("flax.core/sdk_dependencies#type:Directory", "call", "rename"):
        FlaxSandboxBinding(_flaxSandbox5, replace: false),
    ("flax.core/sdk_dependencies#type:Directory", "call", "renameSync"):
        FlaxSandboxBinding(_flaxSandbox6, replace: false),
    (
      "flax.core/sdk_dependencies#type:Directory",
      "call",
      "resolveSymbolicLinks",
    ): FlaxSandboxBinding(
      _flaxSandbox7,
      replace: false,
    ),
    (
      "flax.core/sdk_dependencies#type:Directory",
      "call",
      "resolveSymbolicLinksSync",
    ): FlaxSandboxBinding(
      _flaxSandbox8,
      replace: false,
    ),
    ("flax.core/sdk_dependencies#type:Directory", "call", "stat"):
        FlaxSandboxBinding(_flaxSandbox9, replace: false),
    ("flax.core/sdk_dependencies#type:Directory", "call", "statSync"):
        FlaxSandboxBinding(_flaxSandbox10, replace: false),
    ("flax.core/sdk_dependencies#type:Directory", "call", "delete"):
        FlaxSandboxBinding(_flaxSandbox11, replace: false),
    ("flax.core/sdk_dependencies#type:Directory", "call", "deleteSync"):
        FlaxSandboxBinding(_flaxSandbox12, replace: false),
    ("flax.core/sdk_dependencies#type:Directory", "call", "create"):
        FlaxSandboxBinding(_flaxSandbox13, replace: false),
    ("flax.core/sdk_dependencies#type:Directory", "call", "createSync"):
        FlaxSandboxBinding(_flaxSandbox14, replace: false),
    ("flax.core/sdk_dependencies#type:Directory", "call", "createTemp"):
        FlaxSandboxBinding(_flaxSandbox15, replace: false),
    ("flax.core/sdk_dependencies#type:Directory", "call", "createTempSync"):
        FlaxSandboxBinding(_flaxSandbox16, replace: false),
    ("flax.core/sdk_dependencies#type:Directory", "call", "list"):
        FlaxSandboxBinding(_flaxSandbox17, replace: false),
    ("flax.core/sdk_dependencies#type:Directory", "call", "listSync"):
        FlaxSandboxBinding(_flaxSandbox18, replace: false),
    ("flax.core/sdk_dependencies#type:Directory", "get", "path"):
        FlaxSandboxBinding(_flaxSandbox19, replace: false),
    ("flax.core/sdk_dependencies#type:Directory", "get", "uri"):
        FlaxSandboxBinding(_flaxSandbox20, replace: false),
    ("flax.core/sdk_dependencies#type:Directory", "get", "isAbsolute"):
        FlaxSandboxBinding(_flaxSandbox21, replace: false),
    ("flax.core/sdk_dependencies#type:Directory", "get", "absolute"):
        FlaxSandboxBinding(_flaxSandbox22, replace: false),
    ("flax.core/sdk_dependencies#type:Directory", "get", "parent"):
        FlaxSandboxBinding(_flaxSandbox23, replace: false),
    ("flax.core/sdk_dependencies#read:Directory.current", "call", ""):
        FlaxSandboxBinding.deny(),
    ("flax.core/sdk_dependencies#read:Directory.systemTemp", "call", ""):
        FlaxSandboxBinding.deny(),
    ("flax.core/sdk_dependencies#function:Directory.current%3D", "call", ""):
        FlaxSandboxBinding.deny(),
    ("flax.core/sdk_dependencies#type:File", "construct", ""):
        FlaxSandboxBinding(_flaxSandbox27, replace: true),
    ("flax.core/sdk_dependencies#type:File", "construct", "fromUri"):
        FlaxSandboxBinding(_flaxSandbox28, replace: true),
    ("flax.core/sdk_dependencies#type:File", "construct", "fromRawPath"):
        FlaxSandboxBinding.deny(),
    ("flax.core/sdk_dependencies#type:File", "call", "exists"):
        FlaxSandboxBinding(_flaxSandbox30, replace: false),
    ("flax.core/sdk_dependencies#type:File", "call", "existsSync"):
        FlaxSandboxBinding(_flaxSandbox31, replace: false),
    ("flax.core/sdk_dependencies#type:File", "call", "rename"):
        FlaxSandboxBinding(_flaxSandbox32, replace: false),
    ("flax.core/sdk_dependencies#type:File", "call", "renameSync"):
        FlaxSandboxBinding(_flaxSandbox33, replace: false),
    ("flax.core/sdk_dependencies#type:File", "call", "resolveSymbolicLinks"):
        FlaxSandboxBinding(_flaxSandbox34, replace: false),
    (
      "flax.core/sdk_dependencies#type:File",
      "call",
      "resolveSymbolicLinksSync",
    ): FlaxSandboxBinding(
      _flaxSandbox35,
      replace: false,
    ),
    ("flax.core/sdk_dependencies#type:File", "call", "stat"):
        FlaxSandboxBinding(_flaxSandbox36, replace: false),
    ("flax.core/sdk_dependencies#type:File", "call", "statSync"):
        FlaxSandboxBinding(_flaxSandbox37, replace: false),
    ("flax.core/sdk_dependencies#type:File", "call", "delete"):
        FlaxSandboxBinding(_flaxSandbox38, replace: false),
    ("flax.core/sdk_dependencies#type:File", "call", "deleteSync"):
        FlaxSandboxBinding(_flaxSandbox39, replace: false),
    ("flax.core/sdk_dependencies#type:File", "call", "create"):
        FlaxSandboxBinding(_flaxSandbox40, replace: false),
    ("flax.core/sdk_dependencies#type:File", "call", "createSync"):
        FlaxSandboxBinding(_flaxSandbox41, replace: false),
    ("flax.core/sdk_dependencies#type:File", "call", "copy"):
        FlaxSandboxBinding(_flaxSandbox42, replace: false),
    ("flax.core/sdk_dependencies#type:File", "call", "copySync"):
        FlaxSandboxBinding(_flaxSandbox43, replace: false),
    ("flax.core/sdk_dependencies#type:File", "call", "length"):
        FlaxSandboxBinding(_flaxSandbox44, replace: false),
    ("flax.core/sdk_dependencies#type:File", "call", "lengthSync"):
        FlaxSandboxBinding(_flaxSandbox45, replace: false),
    ("flax.core/sdk_dependencies#type:File", "call", "lastAccessed"):
        FlaxSandboxBinding(_flaxSandbox46, replace: false),
    ("flax.core/sdk_dependencies#type:File", "call", "lastAccessedSync"):
        FlaxSandboxBinding(_flaxSandbox47, replace: false),
    ("flax.core/sdk_dependencies#type:File", "call", "setLastAccessed"):
        FlaxSandboxBinding(_flaxSandbox48, replace: false),
    ("flax.core/sdk_dependencies#type:File", "call", "setLastAccessedSync"):
        FlaxSandboxBinding(_flaxSandbox49, replace: false),
    ("flax.core/sdk_dependencies#type:File", "call", "lastModified"):
        FlaxSandboxBinding(_flaxSandbox50, replace: false),
    ("flax.core/sdk_dependencies#type:File", "call", "lastModifiedSync"):
        FlaxSandboxBinding(_flaxSandbox51, replace: false),
    ("flax.core/sdk_dependencies#type:File", "call", "setLastModified"):
        FlaxSandboxBinding(_flaxSandbox52, replace: false),
    ("flax.core/sdk_dependencies#type:File", "call", "setLastModifiedSync"):
        FlaxSandboxBinding(_flaxSandbox53, replace: false),
    ("flax.core/sdk_dependencies#type:File", "call", "open"):
        FlaxSandboxBinding.deny(),
    ("flax.core/sdk_dependencies#type:File", "call", "openSync"):
        FlaxSandboxBinding.deny(),
    ("flax.core/sdk_dependencies#type:File", "call", "openRead"):
        FlaxSandboxBinding(_flaxSandbox56, replace: false),
    ("flax.core/sdk_dependencies#type:File", "call", "readAsBytes"):
        FlaxSandboxBinding(_flaxSandbox57, replace: false),
    ("flax.core/sdk_dependencies#type:File", "call", "readAsBytesSync"):
        FlaxSandboxBinding(_flaxSandbox58, replace: false),
    ("flax.core/sdk_dependencies#type:File", "call", "readAsString"):
        FlaxSandboxBinding(_flaxSandbox59, replace: false),
    ("flax.core/sdk_dependencies#type:File", "call", "readAsStringSync"):
        FlaxSandboxBinding(_flaxSandbox60, replace: false),
    ("flax.core/sdk_dependencies#type:File", "call", "readAsLines"):
        FlaxSandboxBinding(_flaxSandbox61, replace: false),
    ("flax.core/sdk_dependencies#type:File", "call", "readAsLinesSync"):
        FlaxSandboxBinding(_flaxSandbox62, replace: false),
    ("flax.core/sdk_dependencies#type:File", "call", "writeAsBytes"):
        FlaxSandboxBinding(_flaxSandbox63, replace: false),
    ("flax.core/sdk_dependencies#type:File", "call", "writeAsBytesSync"):
        FlaxSandboxBinding(_flaxSandbox64, replace: false),
    ("flax.core/sdk_dependencies#type:File", "call", "writeAsString"):
        FlaxSandboxBinding(_flaxSandbox65, replace: false),
    ("flax.core/sdk_dependencies#type:File", "call", "writeAsStringSync"):
        FlaxSandboxBinding(_flaxSandbox66, replace: false),
    ("flax.core/sdk_dependencies#type:File", "get", "path"): FlaxSandboxBinding(
      _flaxSandbox67,
      replace: false,
    ),
    ("flax.core/sdk_dependencies#type:File", "get", "uri"): FlaxSandboxBinding(
      _flaxSandbox68,
      replace: false,
    ),
    ("flax.core/sdk_dependencies#type:File", "get", "isAbsolute"):
        FlaxSandboxBinding(_flaxSandbox69, replace: false),
    ("flax.core/sdk_dependencies#type:File", "get", "absolute"):
        FlaxSandboxBinding(_flaxSandbox70, replace: false),
    ("flax.core/sdk_dependencies#type:File", "get", "parent"):
        FlaxSandboxBinding(_flaxSandbox71, replace: false),
    ("dart:io::FileStat.statSync", "call", ""): FlaxSandboxBinding(
      _flaxSandbox72,
      replace: true,
    ),
    ("dart:io::FileStat.stat", "call", ""): FlaxSandboxBinding(
      _flaxSandbox73,
      replace: true,
    ),
    ("dart:io::FileSystemEntity.identical", "call", ""): FlaxSandboxBinding(
      _flaxSandbox74,
      replace: true,
    ),
    ("dart:io::FileSystemEntity.identicalSync", "call", ""): FlaxSandboxBinding(
      _flaxSandbox75,
      replace: true,
    ),
    ("dart:io::FileSystemEntity.type", "call", ""): FlaxSandboxBinding(
      _flaxSandbox76,
      replace: true,
    ),
    ("dart:io::FileSystemEntity.typeSync", "call", ""): FlaxSandboxBinding(
      _flaxSandbox77,
      replace: true,
    ),
    ("dart:io::FileSystemEntity.isLink", "call", ""): FlaxSandboxBinding(
      _flaxSandbox78,
      replace: true,
    ),
    ("dart:io::FileSystemEntity.isFile", "call", ""): FlaxSandboxBinding(
      _flaxSandbox79,
      replace: true,
    ),
    ("dart:io::FileSystemEntity.isDirectory", "call", ""): FlaxSandboxBinding(
      _flaxSandbox80,
      replace: true,
    ),
    ("dart:io::FileSystemEntity.isLinkSync", "call", ""): FlaxSandboxBinding(
      _flaxSandbox81,
      replace: true,
    ),
    ("dart:io::FileSystemEntity.isFileSync", "call", ""): FlaxSandboxBinding(
      _flaxSandbox82,
      replace: true,
    ),
    ("dart:io::FileSystemEntity.isDirectorySync", "call", ""):
        FlaxSandboxBinding(_flaxSandbox83, replace: true),
    ("flax.core/sdk_dependencies#type:FileSystemEntity", "call", "exists"):
        FlaxSandboxBinding(_flaxSandbox84, replace: false),
    ("flax.core/sdk_dependencies#type:FileSystemEntity", "call", "existsSync"):
        FlaxSandboxBinding(_flaxSandbox85, replace: false),
    ("flax.core/sdk_dependencies#type:FileSystemEntity", "call", "rename"):
        FlaxSandboxBinding(_flaxSandbox86, replace: false),
    ("flax.core/sdk_dependencies#type:FileSystemEntity", "call", "renameSync"):
        FlaxSandboxBinding(_flaxSandbox87, replace: false),
    (
      "flax.core/sdk_dependencies#type:FileSystemEntity",
      "call",
      "resolveSymbolicLinks",
    ): FlaxSandboxBinding(
      _flaxSandbox88,
      replace: false,
    ),
    (
      "flax.core/sdk_dependencies#type:FileSystemEntity",
      "call",
      "resolveSymbolicLinksSync",
    ): FlaxSandboxBinding(
      _flaxSandbox89,
      replace: false,
    ),
    ("flax.core/sdk_dependencies#type:FileSystemEntity", "call", "stat"):
        FlaxSandboxBinding(_flaxSandbox90, replace: false),
    ("flax.core/sdk_dependencies#type:FileSystemEntity", "call", "statSync"):
        FlaxSandboxBinding(_flaxSandbox91, replace: false),
    ("flax.core/sdk_dependencies#type:FileSystemEntity", "call", "delete"):
        FlaxSandboxBinding(_flaxSandbox92, replace: false),
    ("flax.core/sdk_dependencies#type:FileSystemEntity", "call", "deleteSync"):
        FlaxSandboxBinding(_flaxSandbox93, replace: false),
    ("flax.core/sdk_dependencies#type:FileSystemEntity", "get", "path"):
        FlaxSandboxBinding(_flaxSandbox94, replace: false),
    ("flax.core/sdk_dependencies#type:FileSystemEntity", "get", "uri"):
        FlaxSandboxBinding(_flaxSandbox95, replace: false),
    ("flax.core/sdk_dependencies#type:FileSystemEntity", "get", "isAbsolute"):
        FlaxSandboxBinding(_flaxSandbox96, replace: false),
    ("flax.core/sdk_dependencies#type:FileSystemEntity", "get", "absolute"):
        FlaxSandboxBinding(_flaxSandbox97, replace: false),
    ("flax.core/sdk_dependencies#type:FileSystemEntity", "get", "parent"):
        FlaxSandboxBinding(_flaxSandbox98, replace: false),
    ("flax.core/sdk_dependencies#type:Link", "construct", ""):
        FlaxSandboxBinding.deny(),
    ("flax.core/sdk_dependencies#type:Link", "construct", "fromRawPath"):
        FlaxSandboxBinding.deny(),
    ("flax.core/sdk_dependencies#type:Link", "construct", "fromUri"):
        FlaxSandboxBinding.deny(),
    ("flax.core/sdk_dependencies#type:Link", "call", "exists"):
        FlaxSandboxBinding(_flaxSandbox102, replace: false),
    ("flax.core/sdk_dependencies#type:Link", "call", "existsSync"):
        FlaxSandboxBinding(_flaxSandbox103, replace: false),
    ("flax.core/sdk_dependencies#type:Link", "call", "rename"):
        FlaxSandboxBinding(_flaxSandbox104, replace: false),
    ("flax.core/sdk_dependencies#type:Link", "call", "renameSync"):
        FlaxSandboxBinding(_flaxSandbox105, replace: false),
    ("flax.core/sdk_dependencies#type:Link", "call", "resolveSymbolicLinks"):
        FlaxSandboxBinding(_flaxSandbox106, replace: false),
    (
      "flax.core/sdk_dependencies#type:Link",
      "call",
      "resolveSymbolicLinksSync",
    ): FlaxSandboxBinding(
      _flaxSandbox107,
      replace: false,
    ),
    ("flax.core/sdk_dependencies#type:Link", "call", "stat"):
        FlaxSandboxBinding(_flaxSandbox108, replace: false),
    ("flax.core/sdk_dependencies#type:Link", "call", "statSync"):
        FlaxSandboxBinding(_flaxSandbox109, replace: false),
    ("flax.core/sdk_dependencies#type:Link", "call", "delete"):
        FlaxSandboxBinding(_flaxSandbox110, replace: false),
    ("flax.core/sdk_dependencies#type:Link", "call", "deleteSync"):
        FlaxSandboxBinding(_flaxSandbox111, replace: false),
    ("flax.core/sdk_dependencies#type:Link", "call", "create"):
        FlaxSandboxBinding.deny(),
    ("flax.core/sdk_dependencies#type:Link", "call", "createSync"):
        FlaxSandboxBinding.deny(),
    ("flax.core/sdk_dependencies#type:Link", "call", "updateSync"):
        FlaxSandboxBinding.deny(),
    ("flax.core/sdk_dependencies#type:Link", "call", "update"):
        FlaxSandboxBinding.deny(),
    ("flax.core/sdk_dependencies#type:Link", "call", "target"):
        FlaxSandboxBinding.deny(),
    ("flax.core/sdk_dependencies#type:Link", "call", "targetSync"):
        FlaxSandboxBinding.deny(),
    ("flax.core/sdk_dependencies#type:Link", "get", "path"): FlaxSandboxBinding(
      _flaxSandbox118,
      replace: false,
    ),
    ("flax.core/sdk_dependencies#type:Link", "get", "uri"): FlaxSandboxBinding(
      _flaxSandbox119,
      replace: false,
    ),
    ("flax.core/sdk_dependencies#type:Link", "get", "isAbsolute"):
        FlaxSandboxBinding(_flaxSandbox120, replace: false),
    ("flax.core/sdk_dependencies#type:Link", "get", "absolute"):
        FlaxSandboxBinding(_flaxSandbox121, replace: false),
    ("flax.core/sdk_dependencies#type:Link", "get", "parent"):
        FlaxSandboxBinding(_flaxSandbox122, replace: false),
    ("flax.core/sdk_dependencies#type:RandomAccessFile", "call", "close"):
        FlaxSandboxBinding.deny(),
    ("flax.core/sdk_dependencies#type:RandomAccessFile", "call", "closeSync"):
        FlaxSandboxBinding.deny(),
    ("flax.core/sdk_dependencies#type:RandomAccessFile", "call", "readByte"):
        FlaxSandboxBinding.deny(),
    (
      "flax.core/sdk_dependencies#type:RandomAccessFile",
      "call",
      "readByteSync",
    ): FlaxSandboxBinding.deny(),
    ("flax.core/sdk_dependencies#type:RandomAccessFile", "call", "read"):
        FlaxSandboxBinding.deny(),
    ("flax.core/sdk_dependencies#type:RandomAccessFile", "call", "readSync"):
        FlaxSandboxBinding.deny(),
    ("flax.core/sdk_dependencies#type:RandomAccessFile", "call", "readInto"):
        FlaxSandboxBinding.deny(),
    (
      "flax.core/sdk_dependencies#type:RandomAccessFile",
      "call",
      "readIntoSync",
    ): FlaxSandboxBinding.deny(),
    ("flax.core/sdk_dependencies#type:RandomAccessFile", "call", "writeByte"):
        FlaxSandboxBinding.deny(),
    (
      "flax.core/sdk_dependencies#type:RandomAccessFile",
      "call",
      "writeByteSync",
    ): FlaxSandboxBinding.deny(),
    ("flax.core/sdk_dependencies#type:RandomAccessFile", "call", "writeFrom"):
        FlaxSandboxBinding.deny(),
    (
      "flax.core/sdk_dependencies#type:RandomAccessFile",
      "call",
      "writeFromSync",
    ): FlaxSandboxBinding.deny(),
    ("flax.core/sdk_dependencies#type:RandomAccessFile", "call", "writeString"):
        FlaxSandboxBinding.deny(),
    (
      "flax.core/sdk_dependencies#type:RandomAccessFile",
      "call",
      "writeStringSync",
    ): FlaxSandboxBinding.deny(),
    ("flax.core/sdk_dependencies#type:RandomAccessFile", "call", "position"):
        FlaxSandboxBinding.deny(),
    (
      "flax.core/sdk_dependencies#type:RandomAccessFile",
      "call",
      "positionSync",
    ): FlaxSandboxBinding.deny(),
    ("flax.core/sdk_dependencies#type:RandomAccessFile", "call", "setPosition"):
        FlaxSandboxBinding.deny(),
    (
      "flax.core/sdk_dependencies#type:RandomAccessFile",
      "call",
      "setPositionSync",
    ): FlaxSandboxBinding.deny(),
    ("flax.core/sdk_dependencies#type:RandomAccessFile", "call", "truncate"):
        FlaxSandboxBinding.deny(),
    (
      "flax.core/sdk_dependencies#type:RandomAccessFile",
      "call",
      "truncateSync",
    ): FlaxSandboxBinding.deny(),
    ("flax.core/sdk_dependencies#type:RandomAccessFile", "call", "length"):
        FlaxSandboxBinding.deny(),
    ("flax.core/sdk_dependencies#type:RandomAccessFile", "call", "lengthSync"):
        FlaxSandboxBinding.deny(),
    ("flax.core/sdk_dependencies#type:RandomAccessFile", "call", "flush"):
        FlaxSandboxBinding.deny(),
    ("flax.core/sdk_dependencies#type:RandomAccessFile", "call", "flushSync"):
        FlaxSandboxBinding.deny(),
    ("flax.core/sdk_dependencies#type:RandomAccessFile", "call", "lock"):
        FlaxSandboxBinding.deny(),
    ("flax.core/sdk_dependencies#type:RandomAccessFile", "call", "lockSync"):
        FlaxSandboxBinding.deny(),
    ("flax.core/sdk_dependencies#type:RandomAccessFile", "call", "unlock"):
        FlaxSandboxBinding.deny(),
    ("flax.core/sdk_dependencies#type:RandomAccessFile", "call", "unlockSync"):
        FlaxSandboxBinding.deny(),
    ("flax.core/sdk_dependencies#type:RandomAccessFile", "get", "path"):
        FlaxSandboxBinding.deny(),
    (
      "flax.core/sdk_dependencies#type:SecurityContext",
      "call",
      "usePrivateKey",
    ): FlaxSandboxBinding(
      _flaxSandbox152,
      replace: true,
    ),
    (
      "flax.core/sdk_dependencies#type:SecurityContext",
      "call",
      "setTrustedCertificates",
    ): FlaxSandboxBinding(
      _flaxSandbox153,
      replace: true,
    ),
    (
      "flax.core/sdk_dependencies#type:SecurityContext",
      "call",
      "useCertificateChain",
    ): FlaxSandboxBinding(
      _flaxSandbox154,
      replace: true,
    ),
    (
      "flax.core/sdk_dependencies#type:SecurityContext",
      "call",
      "setClientAuthorities",
    ): FlaxSandboxBinding(
      _flaxSandbox155,
      replace: true,
    ),
    (
      "flax.core/sdk_dependencies#read:SecurityContext.defaultContext",
      "call",
      "",
    ): FlaxSandboxBinding.deny(),
  },
);
final sdk_dependenciesPlugin = FlaxBindingPlugin(
  id: "binding:flax.core/sdk_dependencies",
  bindingModules: [sdk_dependenciesBindings],
  jsModules: {
    "@flax/dart/convert",
    "@flax/dart/core",
    "@flax/dart/developer",
    "@flax/dart/io",
    "@flax/dart/isolate",
    "@flax/flutter/foundation",
    "@flax/flutter/vector_math",
  },
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
  return Function.apply(
    (receiver as api3.File).open,
    <Object?>[],
    <Symbol, Object?>{
      if (values.containsKey("mode")) #mode: values["mode"] as api3.FileMode,
    },
  ) as Future<api3.RandomAccessFile>;
}

Object? _File_openSync(Object receiver, Map<String, Object?> values) {
  return Function.apply(
    (receiver as api3.File).openSync,
    <Object?>[],
    <Symbol, Object?>{
      if (values.containsKey("mode")) #mode: values["mode"] as api3.FileMode,
    },
  ) as api3.RandomAccessFile;
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
  return Function.apply(
    (receiver as api3.File).readAsString,
    <Object?>[],
    <Symbol, Object?>{
      if (values.containsKey("encoding"))
        #encoding: values["encoding"] as api1.Encoding,
    },
  ) as Future<String>;
}

Object? _File_readAsStringSync(Object receiver, Map<String, Object?> values) {
  return Function.apply(
    (receiver as api3.File).readAsStringSync,
    <Object?>[],
    <Symbol, Object?>{
      if (values.containsKey("encoding"))
        #encoding: values["encoding"] as api1.Encoding,
    },
  ) as String;
}

Object? _File_readAsLines(Object receiver, Map<String, Object?> values) {
  return Function.apply(
    (receiver as api3.File).readAsLines,
    <Object?>[],
    <Symbol, Object?>{
      if (values.containsKey("encoding"))
        #encoding: values["encoding"] as api1.Encoding,
    },
  ) as Future<List<String>>;
}

Object? _File_readAsLinesSync(Object receiver, Map<String, Object?> values) {
  return Function.apply(
    (receiver as api3.File).readAsLinesSync,
    <Object?>[],
    <Symbol, Object?>{
      if (values.containsKey("encoding"))
        #encoding: values["encoding"] as api1.Encoding,
    },
  ) as List<String>;
}

Object? _File_writeAsBytes(Object receiver, Map<String, Object?> values) {
  return Function.apply(
    (receiver as api3.File).writeAsBytes,
    <Object?>[values["bytes"] as List<int>],
    <Symbol, Object?>{
      #flush: values["flush"] as bool,
      if (values.containsKey("mode")) #mode: values["mode"] as api3.FileMode,
    },
  ) as Future<api3.File>;
}

Object? _File_writeAsBytesSync(Object receiver, Map<String, Object?> values) {
  Function.apply(
    (receiver as api3.File).writeAsBytesSync,
    <Object?>[values["bytes"] as List<int>],
    <Symbol, Object?>{
      #flush: values["flush"] as bool,
      if (values.containsKey("mode")) #mode: values["mode"] as api3.FileMode,
    },
  );
  return null;
}

Object? _File_writeAsString(Object receiver, Map<String, Object?> values) {
  return Function.apply(
    (receiver as api3.File).writeAsString,
    <Object?>[values["contents"] as String],
    <Symbol, Object?>{
      if (values.containsKey("encoding"))
        #encoding: values["encoding"] as api1.Encoding,
      #flush: values["flush"] as bool,
      if (values.containsKey("mode")) #mode: values["mode"] as api3.FileMode,
    },
  ) as Future<api3.File>;
}

Object? _File_writeAsStringSync(Object receiver, Map<String, Object?> values) {
  Function.apply(
    (receiver as api3.File).writeAsStringSync,
    <Object?>[values["contents"] as String],
    <Symbol, Object?>{
      if (values.containsKey("encoding"))
        #encoding: values["encoding"] as api1.Encoding,
      #flush: values["flush"] as bool,
      if (values.containsKey("mode")) #mode: values["mode"] as api3.FileMode,
    },
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
  final _flaxHas0 = values.containsKey("object");
  flaxInvokeWithDefaults(
    (receiver as api3.HttpClientRequest).writeln,
    <Object?>[(_flaxHas0 ? values["object"] : null)],
    <int>[(_flaxHas0 ? 1 : 0)],
    const <String>[""],
  );
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
  final _flaxHas1 = values.containsKey("type");
  return flaxInvokeWithDefaults(
    api3.InternetAddress.lookup,
    <Object?>[
      values["host"] as String,
      (_flaxHas1 ? values["type"] as api3.InternetAddressType : null),
    ],
    <int>[1 | (_flaxHas1 ? 2 : 0)],
    const <String>["", "type"],
  ) as Future<List<api3.InternetAddress>>;
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
  return Function.apply(
    (receiver as api3.RandomAccessFile).writeString,
    <Object?>[values["string"] as String],
    <Symbol, Object?>{
      if (values.containsKey("encoding"))
        #encoding: values["encoding"] as api1.Encoding,
    },
  ) as Future<api3.RandomAccessFile>;
}

Object? _RandomAccessFile_writeStringSync(
  Object receiver,
  Map<String, Object?> values,
) {
  Function.apply(
    (receiver as api3.RandomAccessFile).writeStringSync,
    <Object?>[values["string"] as String],
    <Symbol, Object?>{
      if (values.containsKey("encoding"))
        #encoding: values["encoding"] as api1.Encoding,
    },
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
  return Function.apply((receiver as api3.RandomAccessFile).lock, <Object?>[
    if (values.containsKey("mode")) values["mode"] as api3.FileLock,
    if (values.containsKey("start")) values["start"] as int,
    if (values.containsKey("end")) values["end"] as int,
  ], <Symbol, Object?>{}) as Future<api3.RandomAccessFile>;
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
  Function.apply((receiver as api3.RandomAccessFile).lockSync, <Object?>[
    if (values.containsKey("mode")) values["mode"] as api3.FileLock,
    if (values.containsKey("start")) values["start"] as int,
    if (values.containsKey("end")) values["end"] as int,
  ], <Symbol, Object?>{});
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
  final _flaxHas2 = values.containsKey("host");
  return flaxInvokeWithDefaults(
    api3.SecureSocket.secure,
    <Object?>[
      values["socket"] as api3.Socket,
      values["context"] as api3.SecurityContext?,
      (_flaxHas2 ? values["host"] : null),
      values["keyLog"] as void Function(String line)?,
      values["onBadCertificate"]
          as bool Function(api3.X509Certificate certificate)?,
      values["supportedProtocols"] as List<String>?,
    ],
    <int>[1 | 2 | (_flaxHas2 ? 4 : 0) | 8 | 16 | 32],
    const <String>[
      "",
      "context",
      "host",
      "keyLog",
      "onBadCertificate",
      "supportedProtocols",
    ],
  ) as Future<api3.SecureSocket>;
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
  final _flaxHas2 = values.containsKey("sourceAddress");
  return flaxInvokeWithDefaults(
    api3.Socket.connect,
    <Object?>[
      values["host"],
      values["port"] as int,
      (_flaxHas2 ? values["sourceAddress"] : null),
      values["sourcePort"] as int,
      values["timeout"] as api4.Duration?,
    ],
    <int>[1 | 2 | (_flaxHas2 ? 4 : 0) | 8 | 16],
    const <String>["", "", "sourceAddress", "sourcePort", "timeout"],
  ) as Future<api3.Socket>;
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
  final _flaxHas0 = values.containsKey("object");
  flaxInvokeWithDefaults(
    (receiver as api3.Socket).writeln,
    <Object?>[(_flaxHas0 ? values["object"] : null)],
    <int>[(_flaxHas0 ? 1 : 0)],
    const <String>[""],
  );
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

      return FlaxInstanceMethod.plain(
        <FlaxParameter>[
          FlaxParameter.required(
            "convert",
            types.define<_Method0 Function(List<int> event)>(
              FlaxTypeRef(
                "callback",
                nullable: false,
                callback: FlaxCallbackBinding(
                  [FlaxCallbackParameter.plain("event", _flaxBinding2)],
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

  return FlaxInstanceMethod.plain(
    <FlaxParameter>[
      FlaxParameter.required(
        "convert",
        types.define<api5.FutureOr<_Method0> Function(List<int> event)>(
          FlaxTypeRef(
            "callback",
            nullable: false,
            callback: FlaxCallbackBinding(
              [FlaxCallbackParameter.plain("event", _flaxBinding2)],
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

  return FlaxInstanceMethod.plain(
    <FlaxParameter>[
      FlaxParameter.required(
        "convert",
        types.define<api5.Stream<_Method0>? Function(List<int> event)>(
          FlaxTypeRef(
            "callback",
            nullable: false,
            callback: FlaxCallbackBinding(
              [FlaxCallbackParameter.plain("event", _flaxBinding2)],
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

  return FlaxInstanceMethod.plain(
    <FlaxParameter>[
      FlaxParameter.required(
        "convert",
        types.define<Iterable<_Method0> Function(List<int> element)>(
          FlaxTypeRef(
            "callback",
            nullable: false,
            callback: FlaxCallbackBinding(
              [FlaxCallbackParameter.plain("element", _flaxBinding2)],
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

      return FlaxInstanceMethod.plain(
        <FlaxParameter>[
          FlaxParameter.required(
            "streamTransformer",
            types.ref<api5.StreamTransformer<List<int>, _Method0>>(),
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

  return FlaxInstanceMethod.plain(
    <FlaxParameter>[
      FlaxParameter.required("initialValue", types.ref<_Method0>()),
      FlaxParameter.required(
        "combine",
        types.define<_Method0 Function(_Method0 previous, List<int> element)>(
          FlaxTypeRef(
            "callback",
            nullable: false,
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter.plain(
                  "previous",
                  types.ref<_Method0>(withinCallback: true),
                ),
                FlaxCallbackParameter.plain("element", _flaxBinding2),
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

      return FlaxInstanceMethod.plain(
        _flaxBinding35,
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

      return FlaxInstanceMethod.plain(
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

      return FlaxInstanceMethod.plain(
        <FlaxParameter>[
          FlaxParameter.required(
            "convert",
            types.define<_Method0 Function(api2.Uint8List event)>(
              FlaxTypeRef(
                "callback",
                nullable: false,
                callback: FlaxCallbackBinding(
                  [FlaxCallbackParameter.plain("event", flaxUint8ListType)],
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

  return FlaxInstanceMethod.plain(
    <FlaxParameter>[
      FlaxParameter.required(
        "convert",
        types.define<api5.FutureOr<_Method0> Function(api2.Uint8List event)>(
          FlaxTypeRef(
            "callback",
            nullable: false,
            callback: FlaxCallbackBinding(
              [FlaxCallbackParameter.plain("event", flaxUint8ListType)],
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

      return FlaxInstanceMethod.plain(
        <FlaxParameter>[
          FlaxParameter.required(
            "convert",
            types.define<api5.Stream<_Method0>? Function(api2.Uint8List event)>(
              FlaxTypeRef(
                "callback",
                nullable: false,
                callback: FlaxCallbackBinding(
                  [FlaxCallbackParameter.plain("event", flaxUint8ListType)],
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

  return FlaxInstanceMethod.plain(
    <FlaxParameter>[
      FlaxParameter.required(
        "convert",
        types.define<Iterable<_Method0> Function(api2.Uint8List element)>(
          FlaxTypeRef(
            "callback",
            nullable: false,
            callback: FlaxCallbackBinding(
              [FlaxCallbackParameter.plain("element", flaxUint8ListType)],
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

      return FlaxInstanceMethod.plain(
        <FlaxParameter>[
          FlaxParameter.required(
            "streamTransformer",
            types.ref<api5.StreamTransformer<api2.Uint8List, _Method0>>(),
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

      return FlaxInstanceMethod.plain(
        <FlaxParameter>[
          FlaxParameter.required("initialValue", types.ref<_Method0>()),
          FlaxParameter.required(
            "combine",
            types.define<
              _Method0 Function(_Method0 previous, api2.Uint8List element)
            >(
              FlaxTypeRef(
                "callback",
                nullable: false,
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter.plain(
                      "previous",
                      types.ref<_Method0>(withinCallback: true),
                    ),
                    FlaxCallbackParameter.plain("element", flaxUint8ListType),
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

      return FlaxInstanceMethod.plain(
        _flaxBinding35,
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

      return FlaxInstanceMethod.plain(
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

      return FlaxInstanceMethod.plain(
        <FlaxParameter>[
          FlaxParameter.required(
            "convert",
            types.define<_Method0 Function(api2.Uint8List event)>(
              FlaxTypeRef(
                "callback",
                nullable: false,
                callback: FlaxCallbackBinding(
                  [FlaxCallbackParameter.plain("event", flaxUint8ListType)],
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

  return FlaxInstanceMethod.plain(
    <FlaxParameter>[
      FlaxParameter.required(
        "convert",
        types.define<api5.FutureOr<_Method0> Function(api2.Uint8List event)>(
          FlaxTypeRef(
            "callback",
            nullable: false,
            callback: FlaxCallbackBinding(
              [FlaxCallbackParameter.plain("event", flaxUint8ListType)],
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

      return FlaxInstanceMethod.plain(
        <FlaxParameter>[
          FlaxParameter.required(
            "convert",
            types.define<api5.Stream<_Method0>? Function(api2.Uint8List event)>(
              FlaxTypeRef(
                "callback",
                nullable: false,
                callback: FlaxCallbackBinding(
                  [FlaxCallbackParameter.plain("event", flaxUint8ListType)],
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

  return FlaxInstanceMethod.plain(
    <FlaxParameter>[
      FlaxParameter.required(
        "convert",
        types.define<Iterable<_Method0> Function(api2.Uint8List element)>(
          FlaxTypeRef(
            "callback",
            nullable: false,
            callback: FlaxCallbackBinding(
              [FlaxCallbackParameter.plain("element", flaxUint8ListType)],
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

      return FlaxInstanceMethod.plain(
        <FlaxParameter>[
          FlaxParameter.required(
            "streamTransformer",
            types.ref<api5.StreamTransformer<api2.Uint8List, _Method0>>(),
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

      return FlaxInstanceMethod.plain(
        <FlaxParameter>[
          FlaxParameter.required("initialValue", types.ref<_Method0>()),
          FlaxParameter.required(
            "combine",
            types.define<
              _Method0 Function(_Method0 previous, api2.Uint8List element)
            >(
              FlaxTypeRef(
                "callback",
                nullable: false,
                callback: FlaxCallbackBinding(
                  [
                    FlaxCallbackParameter.plain(
                      "previous",
                      types.ref<_Method0>(withinCallback: true),
                    ),
                    FlaxCallbackParameter.plain("element", flaxUint8ListType),
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

      return FlaxInstanceMethod.plain(
        _flaxBinding35,
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

      return FlaxInstanceMethod.plain(
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
                  FlaxCallbackParameter.plain(
                    "url",
                    types.ref<_Shape0>(withinCallback: true),
                  ),
                  FlaxCallbackParameter.plain(
                    "scheme",
                    types.ref<_Shape1>(withinCallback: true),
                  ),
                  FlaxCallbackParameter.plain(
                    "realm",
                    types.ref<_Shape2>(withinCallback: true),
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
              FlaxCallbackParameter.plain(
                "url",
                types.ref<_Shape0>(withinCallback: true),
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
              FlaxCallbackParameter.plain(
                "host",
                types.ref<_Shape0>(withinCallback: true),
              ),
              FlaxCallbackParameter.plain(
                "port",
                types.ref<_Shape1>(withinCallback: true),
              ),
              FlaxCallbackParameter.plain(
                "scheme",
                types.ref<_Shape2>(withinCallback: true),
              ),
              FlaxCallbackParameter.plain(
                "realm",
                types.ref<_Shape3>(withinCallback: true),
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
          FlaxCallbackParameter.plain(
            "previous",
            types.ref<_Shape0>(withinCallback: true),
          ),
          FlaxCallbackParameter.plain(
            "element",
            types.ref<_Shape1>(withinCallback: true),
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

const _flaxBinding0 = FlaxGetter.plain("name", flaxStringType, _Encoding_name);
const _flaxBinding1 = FlaxTypeRef(
  "iterable",
  item: flaxIntType,
  collection: FlaxCollectionBinding(
    "iterable:[int:]",
    _collection1Create,
    _collection1Matches,
    restore: _collection1Restore,
  ),
);
const _flaxBinding2 = FlaxTypeRef(
  "list",
  item: flaxIntType,
  collection: FlaxCollectionBinding(
    "list:[int:]",
    _collection0Create,
    _collection0Matches,
  ),
  iterable: _flaxBinding1,
);
const _flaxBinding3 = FlaxTypeRef(
  "stream",
  id: "flax.core/flutter#type:Stream",
  dartType: FlaxDartTypes.typeOf<api5.Stream<List<int>>>,
  item: _flaxBinding2,
  stream: FlaxStreamBinding(
    "stream:flax.core/flutter#type:Stream[list:[int:]]",
    _stream0Matches,
    _stream0Adapt,
  ),
);
const _flaxBinding4 = FlaxTypeRef(
  "future",
  item: flaxStringType,
  future: FlaxFutureBinding("String:", _future0Adapt),
);
const _flaxBinding5 = <FlaxParameter>[
  FlaxParameter.required("byteStream", _flaxBinding3),
];
const _flaxBinding6 = FlaxInstanceMethod.plain(
  _flaxBinding5,
  _flaxBinding4,
  _Encoding_decodeStream,
);
const _flaxBinding7 = <FlaxParameter>[
  FlaxParameter.required("input", flaxStringType),
];
const _flaxBinding8 = FlaxInstanceMethod.plain(
  _flaxBinding7,
  _flaxBinding2,
  _Encoding_encode,
);
const _flaxBinding9 = <FlaxParameter>[
  FlaxParameter.required("encoded", _flaxBinding2),
];
const _flaxBinding10 = FlaxInstanceMethod.plain(
  _flaxBinding9,
  flaxStringType,
  _Encoding_decode,
);
const _flaxBinding11 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:Encoding",
  [_flaxBinding0],
  {
    "decodeStream": _flaxBinding6,
    "encode": _flaxBinding8,
    "decode": _flaxBinding10,
  },
  constructors: {},
  create: _createEncoding,
  matches: _isEncoding,
  setters: [],
  supertypes: ["dart:convert::Codec", "dart:core::Object"],
);
const _flaxBinding12 = <FlaxParameter>[
  FlaxParameter.required("source", flaxStringType),
];
const _flaxBinding13 = FlaxInstanceMethod.plain(
  _flaxBinding12,
  flaxUint8ListType,
  _AsciiCodec_encode,
);
const _flaxBinding14 = <FlaxParameter>[
  FlaxParameter.required("bytes", _flaxBinding2),
  FlaxParameter("allowInvalid", flaxNullableBoolType, required: false),
];
const _flaxBinding15 = FlaxInstanceMethod.plain(
  _flaxBinding14,
  flaxStringType,
  _AsciiCodec_decode,
);
const _flaxBinding16 = <FlaxParameter>[
  FlaxParameter(
    "allowInvalid",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
];
const _flaxBinding17 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:AsciiCodec",
  [],
  {"encode": _flaxBinding13, "decode": _flaxBinding15},
  constructors: {"": _flaxBinding16},
  create: _createAsciiCodec,
  matches: _isAsciiCodec,
  setters: [],
  supertypes: [
    "flax.core/sdk_dependencies#type:Encoding",
    "dart:convert::Codec",
    "dart:core::Object",
  ],
  parent: _flaxBinding11,
);
const _flaxBinding18 = FlaxGetter.plain("name", flaxStringType, _Cookie_name);
const _flaxBinding19 = FlaxGetter.plain("value", flaxStringType, _Cookie_value);
const _flaxBinding20 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:DateTime",
  nullable: true,
);
const _flaxBinding21 = FlaxGetter.plain(
  "expires",
  _flaxBinding20,
  _Cookie_expires,
);
const _flaxBinding22 = FlaxGetter.plain(
  "maxAge",
  flaxNullableIntType,
  _Cookie_maxAge,
);
const _flaxBinding23 = FlaxGetter.plain(
  "domain",
  flaxNullableStringType,
  _Cookie_domain,
);
const _flaxBinding24 = FlaxGetter.plain(
  "path",
  flaxNullableStringType,
  _Cookie_path,
);
const _flaxBinding25 = FlaxGetter.plain("secure", flaxBoolType, _Cookie_secure);
const _flaxBinding26 = FlaxGetter.plain(
  "httpOnly",
  flaxBoolType,
  _Cookie_httpOnly,
);
const _flaxBinding27 = FlaxSetter("name", flaxStringType, _Cookie_set_name);
const _flaxBinding28 = FlaxSetter("value", flaxStringType, _Cookie_set_value);
const _flaxBinding29 = FlaxSetter(
  "expires",
  _flaxBinding20,
  _Cookie_set_expires,
);
const _flaxBinding30 = FlaxSetter(
  "maxAge",
  flaxNullableIntType,
  _Cookie_set_maxAge,
);
const _flaxBinding31 = FlaxSetter(
  "domain",
  flaxNullableStringType,
  _Cookie_set_domain,
);
const _flaxBinding32 = FlaxSetter(
  "path",
  flaxNullableStringType,
  _Cookie_set_path,
);
const _flaxBinding33 = FlaxSetter("secure", flaxBoolType, _Cookie_set_secure);
const _flaxBinding34 = FlaxSetter(
  "httpOnly",
  flaxBoolType,
  _Cookie_set_httpOnly,
);
const _flaxBinding35 = <FlaxParameter>[];
const _flaxBinding36 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxStringType,
  _Cookie_toString,
);
const _flaxBinding37 = <FlaxParameter>[
  FlaxParameter.required("name", flaxStringType),
  FlaxParameter.required("value", flaxStringType),
];
const _flaxBinding38 = <FlaxParameter>[
  FlaxParameter.required("value", flaxStringType),
];
const _flaxBinding39 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:Cookie",
  [
    _flaxBinding18,
    _flaxBinding19,
    _flaxBinding21,
    _flaxBinding22,
    _flaxBinding23,
    _flaxBinding24,
    _flaxBinding25,
    _flaxBinding26,
  ],
  {"toString": _flaxBinding36},
  constructors: {"": _flaxBinding37, "fromSetCookieValue": _flaxBinding38},
  create: _createCookie,
  matches: _isCookie,
  setters: [
    _flaxBinding27,
    _flaxBinding28,
    _flaxBinding29,
    _flaxBinding30,
    _flaxBinding31,
    _flaxBinding32,
    _flaxBinding33,
    _flaxBinding34,
  ],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding40 = FlaxGetter.plain(
  "path",
  flaxStringType,
  _FileSystemEntity_path,
);
const _flaxBinding41 = FlaxTypeRef("object", id: "flax.core/flutter#type:Uri");
const _flaxBinding42 = FlaxGetter.plain(
  "uri",
  _flaxBinding41,
  _FileSystemEntity_uri,
);
const _flaxBinding43 = FlaxGetter.plain(
  "isAbsolute",
  flaxBoolType,
  _FileSystemEntity_isAbsolute,
);
const _flaxBinding44 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:FileSystemEntity",
);
const _flaxBinding45 = FlaxGetter.plain(
  "absolute",
  _flaxBinding44,
  _FileSystemEntity_absolute,
);
const _flaxBinding46 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:Directory",
);
const _flaxBinding47 = FlaxGetter.plain(
  "parent",
  _flaxBinding46,
  _FileSystemEntity_parent,
);
const _flaxBinding48 = FlaxTypeRef(
  "future",
  item: flaxBoolType,
  future: FlaxFutureBinding("bool:", _future1Adapt),
);
const _flaxBinding49 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding48,
  _FileSystemEntity_exists,
);
const _flaxBinding50 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxBoolType,
  _FileSystemEntity_existsSync,
);
const _flaxBinding51 = FlaxTypeRef(
  "future",
  item: _flaxBinding44,
  future: FlaxFutureBinding(
    "object:flax.core/sdk_dependencies#type:FileSystemEntity",
    _future2Adapt,
  ),
);
const _flaxBinding52 = <FlaxParameter>[
  FlaxParameter.required("newPath", flaxStringType),
];
const _flaxBinding53 = FlaxInstanceMethod.plain(
  _flaxBinding52,
  _flaxBinding51,
  _FileSystemEntity_rename,
);
const _flaxBinding54 = FlaxInstanceMethod.plain(
  _flaxBinding52,
  _flaxBinding44,
  _FileSystemEntity_renameSync,
);
const _flaxBinding55 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding4,
  _FileSystemEntity_resolveSymbolicLinks,
);
const _flaxBinding56 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxStringType,
  _FileSystemEntity_resolveSymbolicLinksSync,
);
const _flaxBinding57 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:FileStat",
);
const _flaxBinding58 = FlaxTypeRef(
  "future",
  item: _flaxBinding57,
  future: FlaxFutureBinding(
    "object:flax.core/sdk_dependencies#type:FileStat",
    _future3Adapt,
  ),
);
const _flaxBinding59 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding58,
  _FileSystemEntity_stat,
);
const _flaxBinding60 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding57,
  _FileSystemEntity_statSync,
);
const _flaxBinding61 = <FlaxParameter>[
  FlaxParameter(
    "recursive",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
];
const _flaxBinding62 = FlaxInstanceMethod.plain(
  _flaxBinding61,
  _flaxBinding51,
  _FileSystemEntity_delete,
);
const _flaxBinding63 = FlaxInstanceMethod.plain(
  _flaxBinding61,
  flaxVoidType,
  _FileSystemEntity_deleteSync,
);
const _flaxBinding64 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:FileSystemEntity",
  [
    _flaxBinding40,
    _flaxBinding42,
    _flaxBinding43,
    _flaxBinding45,
    _flaxBinding47,
  ],
  {
    "exists": _flaxBinding49,
    "existsSync": _flaxBinding50,
    "rename": _flaxBinding53,
    "renameSync": _flaxBinding54,
    "resolveSymbolicLinks": _flaxBinding55,
    "resolveSymbolicLinksSync": _flaxBinding56,
    "stat": _flaxBinding59,
    "statSync": _flaxBinding60,
    "delete": _flaxBinding62,
    "deleteSync": _flaxBinding63,
  },
  constructors: {},
  create: _createFileSystemEntity,
  matches: _isFileSystemEntity,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding65 = FlaxGetter.plain(
  "absolute",
  _flaxBinding46,
  _Directory_absolute,
);
const _flaxBinding66 = FlaxTypeRef(
  "future",
  item: _flaxBinding46,
  future: FlaxFutureBinding(
    "object:flax.core/sdk_dependencies#type:Directory",
    _future4Adapt,
  ),
);
const _flaxBinding67 = FlaxInstanceMethod.plain(
  _flaxBinding52,
  _flaxBinding66,
  _Directory_rename,
);
const _flaxBinding68 = FlaxInstanceMethod.plain(
  _flaxBinding52,
  _flaxBinding46,
  _Directory_renameSync,
);
const _flaxBinding69 = FlaxInstanceMethod.plain(
  _flaxBinding61,
  _flaxBinding66,
  _Directory_create,
);
const _flaxBinding70 = FlaxInstanceMethod.plain(
  _flaxBinding61,
  flaxVoidType,
  _Directory_createSync,
);
const _flaxBinding71 = <FlaxParameter>[
  FlaxParameter("prefix", flaxNullableStringType, required: false),
];
const _flaxBinding72 = FlaxInstanceMethod.plain(
  _flaxBinding71,
  _flaxBinding66,
  _Directory_createTemp,
);
const _flaxBinding73 = FlaxInstanceMethod.plain(
  _flaxBinding71,
  _flaxBinding46,
  _Directory_createTempSync,
);
const _flaxBinding74 = <FlaxParameter>[
  FlaxParameter(
    "followLinks",
    flaxBoolType,
    required: false,
    defaultValue: true,
  ),
  FlaxParameter(
    "recursive",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
];
const _flaxBinding75 = FlaxTypeRef(
  "stream",
  id: "flax.core/flutter#type:Stream",
  dartType: FlaxDartTypes.typeOf<api5.Stream<api3.FileSystemEntity>>,
  item: _flaxBinding44,
  stream: FlaxStreamBinding(
    "stream:flax.core/flutter#type:Stream[object:flax.core/sdk_dependencies#type:FileSystemEntity]",
    _stream1Matches,
    _stream1Adapt,
  ),
);
const _flaxBinding76 = FlaxInstanceMethod.plain(
  _flaxBinding74,
  _flaxBinding75,
  _Directory_list,
);
const _flaxBinding77 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding44,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dependencies#type:FileSystemEntity]",
    _collection3Create,
    _collection3Matches,
    restore: _collection3Restore,
  ),
);
const _flaxBinding78 = FlaxTypeRef(
  "list",
  item: _flaxBinding44,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dependencies#type:FileSystemEntity]",
    _collection2Create,
    _collection2Matches,
  ),
  iterable: _flaxBinding77,
);
const _flaxBinding79 = FlaxInstanceMethod.plain(
  _flaxBinding74,
  _flaxBinding78,
  _Directory_listSync,
);
const _flaxBinding80 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxStringType,
  _Directory_toString,
);
const _flaxBinding81 = <FlaxParameter>[
  FlaxParameter.required("path", flaxStringType),
];
const _flaxBinding82 = <FlaxParameter>[
  FlaxParameter.required("path", flaxUint8ListType),
];
const _flaxBinding83 = <FlaxParameter>[
  FlaxParameter.required("uri", _flaxBinding41),
];
const _flaxBinding84 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:Directory",
  [_flaxBinding65],
  {
    "rename": _flaxBinding67,
    "renameSync": _flaxBinding68,
    "create": _flaxBinding69,
    "createSync": _flaxBinding70,
    "createTemp": _flaxBinding72,
    "createTempSync": _flaxBinding73,
    "list": _flaxBinding76,
    "listSync": _flaxBinding79,
    "toString": _flaxBinding80,
  },
  constructors: {
    "": _flaxBinding81,
    "fromRawPath": _flaxBinding82,
    "fromUri": _flaxBinding83,
  },
  create: _createDirectory,
  matches: _isDirectory,
  setters: [],
  supertypes: [
    "dart:core::Object",
    "flax.core/sdk_dependencies#type:FileSystemEntity",
  ],
  parent: _flaxBinding64,
);
const _flaxBinding85 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:File",
);
const _flaxBinding86 = FlaxGetter.plain(
  "absolute",
  _flaxBinding85,
  _File_absolute,
);
const _flaxBinding87 = FlaxTypeRef(
  "future",
  item: _flaxBinding85,
  future: FlaxFutureBinding(
    "object:flax.core/sdk_dependencies#type:File",
    _future5Adapt,
  ),
);
const _flaxBinding88 = FlaxInstanceMethod.plain(
  _flaxBinding52,
  _flaxBinding87,
  _File_rename,
);
const _flaxBinding89 = FlaxInstanceMethod.plain(
  _flaxBinding52,
  _flaxBinding85,
  _File_renameSync,
);
const _flaxBinding90 = <FlaxParameter>[
  FlaxParameter(
    "exclusive",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "recursive",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
];
const _flaxBinding91 = FlaxInstanceMethod.plain(
  _flaxBinding90,
  _flaxBinding87,
  _File_create,
);
const _flaxBinding92 = FlaxInstanceMethod.plain(
  _flaxBinding90,
  flaxVoidType,
  _File_createSync,
);
const _flaxBinding93 = FlaxInstanceMethod.plain(
  _flaxBinding52,
  _flaxBinding87,
  _File_copy,
);
const _flaxBinding94 = FlaxInstanceMethod.plain(
  _flaxBinding52,
  _flaxBinding85,
  _File_copySync,
);
const _flaxBinding95 = FlaxTypeRef(
  "future",
  item: flaxIntType,
  future: FlaxFutureBinding("int:", _future6Adapt),
);
const _flaxBinding96 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding95,
  _File_length,
);
const _flaxBinding97 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxIntType,
  _File_lengthSync,
);
const _flaxBinding98 = FlaxTypeRef(
  "future",
  item: flaxDateTimeType,
  future: FlaxFutureBinding(
    "object:flax.core/flutter#type:DateTime",
    _future7Adapt,
  ),
);
const _flaxBinding99 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding98,
  _File_lastAccessed,
);
const _flaxBinding100 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxDateTimeType,
  _File_lastAccessedSync,
);
const _flaxBinding101 = FlaxTypeRef(
  "future",
  item: flaxNullableAnyType,
  future: FlaxFutureBinding("any?:", _future8Adapt),
);
const _flaxBinding102 = <FlaxParameter>[
  FlaxParameter.required("time", flaxDateTimeType),
];
const _flaxBinding103 = FlaxInstanceMethod.plain(
  _flaxBinding102,
  _flaxBinding101,
  _File_setLastAccessed,
);
const _flaxBinding104 = FlaxInstanceMethod.plain(
  _flaxBinding102,
  flaxVoidType,
  _File_setLastAccessedSync,
);
const _flaxBinding105 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding98,
  _File_lastModified,
);
const _flaxBinding106 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxDateTimeType,
  _File_lastModifiedSync,
);
const _flaxBinding107 = FlaxInstanceMethod.plain(
  _flaxBinding102,
  _flaxBinding101,
  _File_setLastModified,
);
const _flaxBinding108 = FlaxInstanceMethod.plain(
  _flaxBinding102,
  flaxVoidType,
  _File_setLastModifiedSync,
);
const _flaxBinding109 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:FileMode",
);
const _flaxBinding110 = <FlaxParameter>[
  FlaxParameter("mode", _flaxBinding109, required: false, omitWhenAbsent: true),
];
const _flaxBinding111 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:RandomAccessFile",
);
const _flaxBinding112 = FlaxTypeRef(
  "future",
  item: _flaxBinding111,
  future: FlaxFutureBinding(
    "object:flax.core/sdk_dependencies#type:RandomAccessFile",
    _future9Adapt,
  ),
);
const _flaxBinding113 = FlaxInstanceMethod.plain(
  _flaxBinding110,
  _flaxBinding112,
  _File_open,
);
const _flaxBinding114 = FlaxInstanceMethod.plain(
  _flaxBinding110,
  _flaxBinding111,
  _File_openSync,
);
const _flaxBinding115 = <FlaxParameter>[
  FlaxParameter("start", flaxNullableIntType, required: false),
  FlaxParameter("end", flaxNullableIntType, required: false),
];
const _flaxBinding116 = FlaxInstanceMethod.plain(
  _flaxBinding115,
  _flaxBinding3,
  _File_openRead,
);
const _flaxBinding117 = FlaxTypeRef(
  "future",
  item: flaxUint8ListType,
  future: FlaxFutureBinding("Uint8List:", _future10Adapt),
);
const _flaxBinding118 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding117,
  _File_readAsBytes,
);
const _flaxBinding119 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxUint8ListType,
  _File_readAsBytesSync,
);
const _flaxBinding120 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:Encoding",
);
const _flaxBinding121 = <FlaxParameter>[
  FlaxParameter(
    "encoding",
    _flaxBinding120,
    required: false,
    omitWhenAbsent: true,
  ),
];
const _flaxBinding122 = FlaxInstanceMethod.plain(
  _flaxBinding121,
  _flaxBinding4,
  _File_readAsString,
);
const _flaxBinding123 = FlaxInstanceMethod.plain(
  _flaxBinding121,
  flaxStringType,
  _File_readAsStringSync,
);
const _flaxBinding124 = FlaxTypeRef(
  "iterable",
  item: flaxStringType,
  collection: FlaxCollectionBinding(
    "iterable:[String:]",
    _collection5Create,
    _collection5Matches,
    restore: _collection5Restore,
  ),
);
const _flaxBinding125 = FlaxTypeRef(
  "list",
  item: flaxStringType,
  collection: FlaxCollectionBinding(
    "list:[String:]",
    _collection4Create,
    _collection4Matches,
  ),
  iterable: _flaxBinding124,
);
const _flaxBinding126 = FlaxTypeRef(
  "future",
  item: _flaxBinding125,
  future: FlaxFutureBinding("list:[String:]", _future11Adapt),
);
const _flaxBinding127 = FlaxInstanceMethod.plain(
  _flaxBinding121,
  _flaxBinding126,
  _File_readAsLines,
);
const _flaxBinding128 = FlaxInstanceMethod.plain(
  _flaxBinding121,
  _flaxBinding125,
  _File_readAsLinesSync,
);
const _flaxBinding129 = <FlaxParameter>[
  FlaxParameter.required("bytes", _flaxBinding2),
  FlaxParameter("flush", flaxBoolType, required: false, defaultValue: false),
  FlaxParameter("mode", _flaxBinding109, required: false, omitWhenAbsent: true),
];
const _flaxBinding130 = FlaxInstanceMethod.plain(
  _flaxBinding129,
  _flaxBinding87,
  _File_writeAsBytes,
);
const _flaxBinding131 = FlaxInstanceMethod.plain(
  _flaxBinding129,
  flaxVoidType,
  _File_writeAsBytesSync,
);
const _flaxBinding132 = <FlaxParameter>[
  FlaxParameter.required("contents", flaxStringType),
  FlaxParameter(
    "encoding",
    _flaxBinding120,
    required: false,
    omitWhenAbsent: true,
  ),
  FlaxParameter("flush", flaxBoolType, required: false, defaultValue: false),
  FlaxParameter("mode", _flaxBinding109, required: false, omitWhenAbsent: true),
];
const _flaxBinding133 = FlaxInstanceMethod.plain(
  _flaxBinding132,
  _flaxBinding87,
  _File_writeAsString,
);
const _flaxBinding134 = FlaxInstanceMethod.plain(
  _flaxBinding132,
  flaxVoidType,
  _File_writeAsStringSync,
);
const _flaxBinding135 = <FlaxParameter>[
  FlaxParameter.required("rawPath", flaxUint8ListType),
];
const _flaxBinding136 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:File",
  [_flaxBinding86],
  {
    "rename": _flaxBinding88,
    "renameSync": _flaxBinding89,
    "create": _flaxBinding91,
    "createSync": _flaxBinding92,
    "copy": _flaxBinding93,
    "copySync": _flaxBinding94,
    "length": _flaxBinding96,
    "lengthSync": _flaxBinding97,
    "lastAccessed": _flaxBinding99,
    "lastAccessedSync": _flaxBinding100,
    "setLastAccessed": _flaxBinding103,
    "setLastAccessedSync": _flaxBinding104,
    "lastModified": _flaxBinding105,
    "lastModifiedSync": _flaxBinding106,
    "setLastModified": _flaxBinding107,
    "setLastModifiedSync": _flaxBinding108,
    "open": _flaxBinding113,
    "openSync": _flaxBinding114,
    "openRead": _flaxBinding116,
    "readAsBytes": _flaxBinding118,
    "readAsBytesSync": _flaxBinding119,
    "readAsString": _flaxBinding122,
    "readAsStringSync": _flaxBinding123,
    "readAsLines": _flaxBinding127,
    "readAsLinesSync": _flaxBinding128,
    "writeAsBytes": _flaxBinding130,
    "writeAsBytesSync": _flaxBinding131,
    "writeAsString": _flaxBinding133,
    "writeAsStringSync": _flaxBinding134,
  },
  constructors: {
    "": _flaxBinding81,
    "fromUri": _flaxBinding83,
    "fromRawPath": _flaxBinding135,
  },
  create: _createFile,
  matches: _isFile,
  setters: [],
  supertypes: [
    "dart:core::Object",
    "flax.core/sdk_dependencies#type:FileSystemEntity",
  ],
  parent: _flaxBinding64,
);
const _flaxBinding137 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:FileLock",
  [],
  {},
  constructors: {},
  create: _createFileLock,
  matches: _isFileLock,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding138 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:FileMode",
  [],
  {},
  constructors: {},
  create: _createFileMode,
  matches: _isFileMode,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding139 = FlaxGetter.plain(
  "changed",
  flaxDateTimeType,
  _FileStat_changed,
);
const _flaxBinding140 = FlaxGetter.plain(
  "modified",
  flaxDateTimeType,
  _FileStat_modified,
);
const _flaxBinding141 = FlaxGetter.plain(
  "accessed",
  flaxDateTimeType,
  _FileStat_accessed,
);
const _flaxBinding142 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:FileSystemEntityType",
);
const _flaxBinding143 = FlaxGetter.plain(
  "type",
  _flaxBinding142,
  _FileStat_type,
);
const _flaxBinding144 = FlaxGetter.plain("mode", flaxIntType, _FileStat_mode);
const _flaxBinding145 = FlaxGetter.plain("size", flaxIntType, _FileStat_size);
const _flaxBinding146 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxStringType,
  _FileStat_toString,
);
const _flaxBinding147 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxStringType,
  _FileStat_modeString,
);
const _flaxBinding148 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:FileStat",
  [
    _flaxBinding139,
    _flaxBinding140,
    _flaxBinding141,
    _flaxBinding143,
    _flaxBinding144,
    _flaxBinding145,
  ],
  {"toString": _flaxBinding146, "modeString": _flaxBinding147},
  constructors: {},
  create: _createFileStat,
  matches: _isFileStat,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding149 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxStringType,
  _FileSystemEntityType_toString,
);
const _flaxBinding150 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:FileSystemEntityType",
  [],
  {"toString": _flaxBinding149},
  constructors: {},
  create: _createFileSystemEntityType,
  matches: _isFileSystemEntityType,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding151 = FlaxGetter.plain("id", flaxIntType, _Flow_id);
const _flaxBinding152 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:Flow",
  [_flaxBinding151],
  {},
  constructors: {},
  create: _createFlow,
  matches: _isFlow,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding153 = FlaxGetter.plain(
  "idleTimeout",
  flaxDurationType,
  _HttpClient_idleTimeout,
);
const _flaxBinding154 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Duration",
  nullable: true,
);
const _flaxBinding155 = FlaxGetter.plain(
  "connectionTimeout",
  _flaxBinding154,
  _HttpClient_connectionTimeout,
);
const _flaxBinding156 = FlaxGetter.plain(
  "maxConnectionsPerHost",
  flaxNullableIntType,
  _HttpClient_maxConnectionsPerHost,
);
const _flaxBinding157 = FlaxGetter.plain(
  "autoUncompress",
  flaxBoolType,
  _HttpClient_autoUncompress,
);
const _flaxBinding158 = FlaxGetter.plain(
  "userAgent",
  flaxNullableStringType,
  _HttpClient_userAgent,
);
const _flaxBinding159 = FlaxSetter(
  "idleTimeout",
  flaxDurationType,
  _HttpClient_set_idleTimeout,
);
const _flaxBinding160 = FlaxSetter(
  "connectionTimeout",
  _flaxBinding154,
  _HttpClient_set_connectionTimeout,
);
const _flaxBinding161 = FlaxSetter(
  "maxConnectionsPerHost",
  flaxNullableIntType,
  _HttpClient_set_maxConnectionsPerHost,
);
const _flaxBinding162 = FlaxSetter(
  "autoUncompress",
  flaxBoolType,
  _HttpClient_set_autoUncompress,
);
const _flaxBinding163 = FlaxSetter(
  "userAgent",
  flaxNullableStringType,
  _HttpClient_set_userAgent,
);
const _flaxBinding164 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter.plain("url", _flaxBinding41),
    FlaxCallbackParameter.plain("scheme", flaxStringType),
    FlaxCallbackParameter.plain("realm", flaxNullableStringType),
  ],
  _flaxBinding48,
  _callback0,
  id: "callback:<>(p:r:url:object:flax.core/flutter#type:Uri,p:r:scheme:String:,p:r:realm:String?:)->future:[bool:]",
  invoke: _callback0Invoke,
  matches: _callback0Matches,
);
const _flaxBinding165 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding164,
);
const _flaxBinding166 = FlaxSetter(
  "authenticate",
  _flaxBinding165,
  _HttpClient_set_authenticate,
);
const _flaxBinding167 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("url", _flaxBinding41)],
  flaxStringType,
  FlaxCallbackAdapters.wrap1<api4.Uri, String>,
  id: "callback:<>(p:r:url:object:flax.core/flutter#type:Uri)->String:",
  invoke: FlaxCallbackAdapters.invoke1<api4.Uri, String>,
  matches: FlaxCallbackAdapters.matches1<api4.Uri, String>,
);
const _flaxBinding168 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding167,
);
const _flaxBinding169 = FlaxSetter(
  "findProxy",
  _flaxBinding168,
  _HttpClient_set_findProxy,
);
const _flaxBinding170 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter.plain("host", flaxStringType),
    FlaxCallbackParameter.plain("port", flaxIntType),
    FlaxCallbackParameter.plain("scheme", flaxStringType),
    FlaxCallbackParameter.plain("realm", flaxNullableStringType),
  ],
  _flaxBinding48,
  _callback1,
  id: "callback:<>(p:r:host:String:,p:r:port:int:,p:r:scheme:String:,p:r:realm:String?:)->future:[bool:]",
  invoke: _callback1Invoke,
  matches: _callback1Matches,
);
const _flaxBinding171 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding170,
);
const _flaxBinding172 = FlaxSetter(
  "authenticateProxy",
  _flaxBinding171,
  _HttpClient_set_authenticateProxy,
);
const _flaxBinding173 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:X509Certificate",
);
const _flaxBinding174 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter.plain("cert", _flaxBinding173),
    FlaxCallbackParameter.plain("host", flaxStringType),
    FlaxCallbackParameter.plain("port", flaxIntType),
  ],
  flaxBoolType,
  _callback2,
  id: "callback:<>(p:r:cert:object:flax.core/sdk_dependencies#type:X509Certificate,p:r:host:String:,p:r:port:int:)->bool:",
  invoke: _callback2Invoke,
  matches: _callback2Matches,
);
const _flaxBinding175 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding174,
);
const _flaxBinding176 = FlaxSetter(
  "badCertificateCallback",
  _flaxBinding175,
  _HttpClient_set_badCertificateCallback,
);
const _flaxBinding177 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("line", flaxStringType)],
  flaxNullableAnyType,
  FlaxCallbackAdapters.wrap1<String, Object?>,
  id: "callback:<>(p:r:line:String:)->any?:",
  invoke: FlaxCallbackAdapters.invoke1<String, Object?>,
  matches: FlaxCallbackAdapters.matches1<String, Object?>,
);
const _flaxBinding178 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding177,
);
const _flaxBinding179 = FlaxSetter(
  "keyLog",
  _flaxBinding178,
  _HttpClient_set_keyLog,
);
const _flaxBinding180 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:HttpClientRequest",
);
const _flaxBinding181 = FlaxTypeRef(
  "future",
  item: _flaxBinding180,
  future: FlaxFutureBinding(
    "object:flax.core/sdk_dependencies#type:HttpClientRequest",
    _future12Adapt,
  ),
);
const _flaxBinding182 = <FlaxParameter>[
  FlaxParameter.required("method", flaxStringType),
  FlaxParameter.required("host", flaxStringType),
  FlaxParameter.required("port", flaxIntType),
  FlaxParameter.required("path", flaxStringType),
];
const _flaxBinding183 = FlaxInstanceMethod.plain(
  _flaxBinding182,
  _flaxBinding181,
  _HttpClient_open,
);
const _flaxBinding184 = <FlaxParameter>[
  FlaxParameter.required("method", flaxStringType),
  FlaxParameter.required("url", _flaxBinding41),
];
const _flaxBinding185 = FlaxInstanceMethod.plain(
  _flaxBinding184,
  _flaxBinding181,
  _HttpClient_openUrl,
);
const _flaxBinding186 = <FlaxParameter>[
  FlaxParameter.required("host", flaxStringType),
  FlaxParameter.required("port", flaxIntType),
  FlaxParameter.required("path", flaxStringType),
];
const _flaxBinding187 = FlaxInstanceMethod.plain(
  _flaxBinding186,
  _flaxBinding181,
  _HttpClient_get,
);
const _flaxBinding188 = <FlaxParameter>[
  FlaxParameter.required("url", _flaxBinding41),
];
const _flaxBinding189 = FlaxInstanceMethod.plain(
  _flaxBinding188,
  _flaxBinding181,
  _HttpClient_getUrl,
);
const _flaxBinding190 = FlaxInstanceMethod.plain(
  _flaxBinding186,
  _flaxBinding181,
  _HttpClient_post,
);
const _flaxBinding191 = FlaxInstanceMethod.plain(
  _flaxBinding188,
  _flaxBinding181,
  _HttpClient_postUrl,
);
const _flaxBinding192 = FlaxInstanceMethod.plain(
  _flaxBinding186,
  _flaxBinding181,
  _HttpClient_put,
);
const _flaxBinding193 = FlaxInstanceMethod.plain(
  _flaxBinding188,
  _flaxBinding181,
  _HttpClient_putUrl,
);
const _flaxBinding194 = FlaxInstanceMethod.plain(
  _flaxBinding186,
  _flaxBinding181,
  _HttpClient_delete,
);
const _flaxBinding195 = FlaxInstanceMethod.plain(
  _flaxBinding188,
  _flaxBinding181,
  _HttpClient_deleteUrl,
);
const _flaxBinding196 = FlaxInstanceMethod.plain(
  _flaxBinding186,
  _flaxBinding181,
  _HttpClient_patch,
);
const _flaxBinding197 = FlaxInstanceMethod.plain(
  _flaxBinding188,
  _flaxBinding181,
  _HttpClient_patchUrl,
);
const _flaxBinding198 = FlaxInstanceMethod.plain(
  _flaxBinding186,
  _flaxBinding181,
  _HttpClient_head,
);
const _flaxBinding199 = FlaxInstanceMethod.plain(
  _flaxBinding188,
  _flaxBinding181,
  _HttpClient_headUrl,
);
const _flaxBinding200 = <FlaxParameter>[
  FlaxParameter("force", flaxBoolType, required: false, defaultValue: false),
];
const _flaxBinding201 = FlaxInstanceMethod.plain(
  _flaxBinding200,
  flaxVoidType,
  _HttpClient_close,
);
const _flaxBinding202 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:SecurityContext",
  nullable: true,
);
const _flaxBinding203 = <FlaxParameter>[
  FlaxParameter("context", _flaxBinding202, required: false),
];
const _flaxBinding204 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:HttpClient",
  [
    _flaxBinding153,
    _flaxBinding155,
    _flaxBinding156,
    _flaxBinding157,
    _flaxBinding158,
  ],
  {
    "open": _flaxBinding183,
    "openUrl": _flaxBinding185,
    "get": _flaxBinding187,
    "getUrl": _flaxBinding189,
    "post": _flaxBinding190,
    "postUrl": _flaxBinding191,
    "put": _flaxBinding192,
    "putUrl": _flaxBinding193,
    "delete": _flaxBinding194,
    "deleteUrl": _flaxBinding195,
    "patch": _flaxBinding196,
    "patchUrl": _flaxBinding197,
    "head": _flaxBinding198,
    "headUrl": _flaxBinding199,
    "close": _flaxBinding201,
  },
  constructors: {"": _flaxBinding203},
  create: _createHttpClient,
  matches: _isHttpClient,
  setters: [
    _flaxBinding159,
    _flaxBinding160,
    _flaxBinding161,
    _flaxBinding162,
    _flaxBinding163,
    _flaxBinding166,
    _flaxBinding169,
    _flaxBinding172,
    _flaxBinding176,
    _flaxBinding179,
  ],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding205 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:HttpClientResponse",
);
const _flaxBinding206 = FlaxTypeRef(
  "future",
  item: _flaxBinding205,
  future: FlaxFutureBinding(
    "object:flax.core/sdk_dependencies#type:HttpClientResponse",
    _future13Adapt,
  ),
);
const _flaxBinding207 = FlaxGetter.plain(
  "done",
  _flaxBinding206,
  _HttpClientRequest_done,
);
const _flaxBinding208 = FlaxGetter.plain(
  "persistentConnection",
  flaxBoolType,
  _HttpClientRequest_persistentConnection,
);
const _flaxBinding209 = FlaxGetter.plain(
  "followRedirects",
  flaxBoolType,
  _HttpClientRequest_followRedirects,
);
const _flaxBinding210 = FlaxGetter.plain(
  "maxRedirects",
  flaxIntType,
  _HttpClientRequest_maxRedirects,
);
const _flaxBinding211 = FlaxGetter.plain(
  "method",
  flaxStringType,
  _HttpClientRequest_method,
);
const _flaxBinding212 = FlaxGetter.plain(
  "uri",
  _flaxBinding41,
  _HttpClientRequest_uri,
);
const _flaxBinding213 = FlaxGetter.plain(
  "contentLength",
  flaxIntType,
  _HttpClientRequest_contentLength,
);
const _flaxBinding214 = FlaxGetter.plain(
  "bufferOutput",
  flaxBoolType,
  _HttpClientRequest_bufferOutput,
);
const _flaxBinding215 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:HttpHeaders",
);
const _flaxBinding216 = FlaxGetter.plain(
  "headers",
  _flaxBinding215,
  _HttpClientRequest_headers,
);
const _flaxBinding217 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:Cookie",
);
const _flaxBinding218 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding217,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dependencies#type:Cookie]",
    _collection7Create,
    _collection7Matches,
    restore: _collection7Restore,
  ),
);
const _flaxBinding219 = FlaxTypeRef(
  "list",
  item: _flaxBinding217,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dependencies#type:Cookie]",
    _collection6Create,
    _collection6Matches,
  ),
  iterable: _flaxBinding218,
);
const _flaxBinding220 = FlaxGetter.plain(
  "cookies",
  _flaxBinding219,
  _HttpClientRequest_cookies,
);
const _flaxBinding221 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:HttpConnectionInfo",
  nullable: true,
);
const _flaxBinding222 = FlaxGetter.plain(
  "connectionInfo",
  _flaxBinding221,
  _HttpClientRequest_connectionInfo,
);
const _flaxBinding223 = FlaxGetter.plain(
  "encoding",
  _flaxBinding120,
  _HttpClientRequest_encoding,
);
const _flaxBinding224 = FlaxSetter(
  "persistentConnection",
  flaxBoolType,
  _HttpClientRequest_set_persistentConnection,
);
const _flaxBinding225 = FlaxSetter(
  "followRedirects",
  flaxBoolType,
  _HttpClientRequest_set_followRedirects,
);
const _flaxBinding226 = FlaxSetter(
  "maxRedirects",
  flaxIntType,
  _HttpClientRequest_set_maxRedirects,
);
const _flaxBinding227 = FlaxSetter(
  "contentLength",
  flaxIntType,
  _HttpClientRequest_set_contentLength,
);
const _flaxBinding228 = FlaxSetter(
  "bufferOutput",
  flaxBoolType,
  _HttpClientRequest_set_bufferOutput,
);
const _flaxBinding229 = FlaxSetter(
  "encoding",
  _flaxBinding120,
  _HttpClientRequest_set_encoding,
);
const _flaxBinding230 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding206,
  _HttpClientRequest_close,
);
const _flaxBinding231 = <FlaxParameter>[
  FlaxParameter.required("data", _flaxBinding2),
];
const _flaxBinding232 = FlaxInstanceMethod.plain(
  _flaxBinding231,
  flaxVoidType,
  _HttpClientRequest_add,
);
const _flaxBinding233 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:StackTrace",
  nullable: true,
);
const _flaxBinding234 = <FlaxParameter>[
  FlaxParameter.required("error", flaxAnyType),
  FlaxParameter("stackTrace", _flaxBinding233, required: false),
];
const _flaxBinding235 = FlaxInstanceMethod.plain(
  _flaxBinding234,
  flaxVoidType,
  _HttpClientRequest_addError,
);
const _flaxBinding236 = <FlaxParameter>[
  FlaxParameter.required("stream", _flaxBinding3),
];
const _flaxBinding237 = FlaxInstanceMethod.plain(
  _flaxBinding236,
  _flaxBinding101,
  _HttpClientRequest_addStream,
);
const _flaxBinding238 = <FlaxParameter>[
  FlaxParameter("exception", flaxNullableAnyType, required: false),
  FlaxParameter("stackTrace", _flaxBinding233, required: false),
];
const _flaxBinding239 = FlaxInstanceMethod.plain(
  _flaxBinding238,
  flaxVoidType,
  _HttpClientRequest_abort,
);
const _flaxBinding240 = <FlaxParameter>[
  FlaxParameter.required("object", flaxNullableAnyType),
];
const _flaxBinding241 = FlaxInstanceMethod.plain(
  _flaxBinding240,
  flaxVoidType,
  _HttpClientRequest_write,
);
const _flaxBinding242 = FlaxTypeRef(
  "iterable",
  item: flaxNullableAnyType,
  collection: FlaxCollectionBinding(
    "iterable:[any?:]",
    _collection8Create,
    _collection8Matches,
    restore: _collection8Restore,
  ),
);
const _flaxBinding243 = <FlaxParameter>[
  FlaxParameter.required("objects", _flaxBinding242),
  FlaxParameter("separator", flaxStringType, required: false, defaultValue: ''),
];
const _flaxBinding244 = FlaxInstanceMethod.plain(
  _flaxBinding243,
  flaxVoidType,
  _HttpClientRequest_writeAll,
);
const _flaxBinding245 = <FlaxParameter>[
  FlaxParameter(
    "object",
    flaxNullableAnyType,
    required: false,
    omitWhenAbsent: true,
  ),
];
const _flaxBinding246 = FlaxInstanceMethod.plain(
  _flaxBinding245,
  flaxVoidType,
  _HttpClientRequest_writeln,
);
const _flaxBinding247 = <FlaxParameter>[
  FlaxParameter.required("charCode", flaxIntType),
];
const _flaxBinding248 = FlaxInstanceMethod.plain(
  _flaxBinding247,
  flaxVoidType,
  _HttpClientRequest_writeCharCode,
);
const _flaxBinding249 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding101,
  _HttpClientRequest_flush,
);
const _flaxBinding250 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:HttpClientRequest",
  [
    _flaxBinding207,
    _flaxBinding208,
    _flaxBinding209,
    _flaxBinding210,
    _flaxBinding211,
    _flaxBinding212,
    _flaxBinding213,
    _flaxBinding214,
    _flaxBinding216,
    _flaxBinding220,
    _flaxBinding222,
    _flaxBinding223,
  ],
  {
    "close": _flaxBinding230,
    "add": _flaxBinding232,
    "addError": _flaxBinding235,
    "addStream": _flaxBinding237,
    "abort": _flaxBinding239,
    "write": _flaxBinding241,
    "writeAll": _flaxBinding244,
    "writeln": _flaxBinding246,
    "writeCharCode": _flaxBinding248,
    "flush": _flaxBinding249,
  },
  constructors: {},
  create: _createHttpClientRequest,
  matches: _isHttpClientRequest,
  setters: [
    _flaxBinding224,
    _flaxBinding225,
    _flaxBinding226,
    _flaxBinding227,
    _flaxBinding228,
    _flaxBinding229,
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
const _flaxBinding251 = FlaxGetter.plain(
  "statusCode",
  flaxIntType,
  _HttpClientResponse_statusCode,
);
const _flaxBinding252 = FlaxGetter.plain(
  "reasonPhrase",
  flaxStringType,
  _HttpClientResponse_reasonPhrase,
);
const _flaxBinding253 = FlaxGetter.plain(
  "contentLength",
  flaxIntType,
  _HttpClientResponse_contentLength,
);
const _flaxBinding254 = FlaxTypeRef(
  "enum",
  id: "flax.core/sdk_dependencies#type:HttpClientResponseCompressionState",
);
const _flaxBinding255 = FlaxGetter.plain(
  "compressionState",
  _flaxBinding254,
  _HttpClientResponse_compressionState,
);
const _flaxBinding256 = FlaxGetter.plain(
  "persistentConnection",
  flaxBoolType,
  _HttpClientResponse_persistentConnection,
);
const _flaxBinding257 = FlaxGetter.plain(
  "isRedirect",
  flaxBoolType,
  _HttpClientResponse_isRedirect,
);
const _flaxBinding258 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:RedirectInfo",
);
const _flaxBinding259 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding258,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dependencies#type:RedirectInfo]",
    _collection10Create,
    _collection10Matches,
    restore: _collection10Restore,
  ),
);
const _flaxBinding260 = FlaxTypeRef(
  "list",
  item: _flaxBinding258,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dependencies#type:RedirectInfo]",
    _collection9Create,
    _collection9Matches,
  ),
  iterable: _flaxBinding259,
);
const _flaxBinding261 = FlaxGetter.plain(
  "redirects",
  _flaxBinding260,
  _HttpClientResponse_redirects,
);
const _flaxBinding262 = FlaxGetter.plain(
  "headers",
  _flaxBinding215,
  _HttpClientResponse_headers,
);
const _flaxBinding263 = FlaxGetter.plain(
  "cookies",
  _flaxBinding219,
  _HttpClientResponse_cookies,
);
const _flaxBinding264 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:X509Certificate",
  nullable: true,
);
const _flaxBinding265 = FlaxGetter.plain(
  "certificate",
  _flaxBinding264,
  _HttpClientResponse_certificate,
);
const _flaxBinding266 = FlaxGetter.plain(
  "connectionInfo",
  _flaxBinding221,
  _HttpClientResponse_connectionInfo,
);
const _flaxBinding267 = FlaxGetter.plain(
  "isBroadcast",
  flaxBoolType,
  _HttpClientResponse_isBroadcast,
);
const _flaxBinding268 = FlaxGetter.plain(
  "length",
  _flaxBinding95,
  _HttpClientResponse_length,
);
const _flaxBinding269 = FlaxGetter.plain(
  "isEmpty",
  _flaxBinding48,
  _HttpClientResponse_isEmpty,
);
const _flaxBinding270 = FlaxTypeRef(
  "future",
  item: _flaxBinding2,
  future: FlaxFutureBinding("list:[int:]", _future14Adapt),
);
const _flaxBinding271 = FlaxGetter.plain(
  "first",
  _flaxBinding270,
  _HttpClientResponse_first,
);
const _flaxBinding272 = FlaxGetter.plain(
  "last",
  _flaxBinding270,
  _HttpClientResponse_last,
);
const _flaxBinding273 = FlaxGetter.plain(
  "single",
  _flaxBinding270,
  _HttpClientResponse_single,
);
const _flaxBinding274 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:Uri",
  nullable: true,
);
const _flaxBinding275 = <FlaxParameter>[
  FlaxParameter("method", flaxNullableStringType, required: false),
  FlaxParameter("url", _flaxBinding274, required: false),
  FlaxParameter("followLoops", flaxNullableBoolType, required: false),
];
const _flaxBinding276 = FlaxInstanceMethod.plain(
  _flaxBinding275,
  _flaxBinding206,
  _HttpClientResponse_redirect,
);
const _flaxBinding277 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:Socket",
);
const _flaxBinding278 = FlaxTypeRef(
  "future",
  item: _flaxBinding277,
  future: FlaxFutureBinding(
    "object:flax.core/sdk_dependencies#type:Socket",
    _future15Adapt,
  ),
);
const _flaxBinding279 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding278,
  _HttpClientResponse_detachSocket,
);
const _flaxBinding280 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:StreamSubscription",
  dartType: FlaxDartTypes.typeOf<api5.StreamSubscription<List<int>>>,
);
const _flaxBinding281 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("subscription", _flaxBinding280)],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid1<api5.StreamSubscription<List<int>>>,
  id: "callback:<>(p:r:subscription:object:flax.core/flutter#type:StreamSubscription<list:[int:]>)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api5.StreamSubscription<List<int>>>,
  matches:
      FlaxCallbackAdapters.matchesVoid1<api5.StreamSubscription<List<int>>>,
);
const _flaxBinding282 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding281,
);
const _flaxBinding283 = <FlaxParameter>[
  FlaxParameter("onCancel", _flaxBinding282, required: false),
  FlaxParameter("onListen", _flaxBinding282, required: false),
];
const _flaxBinding284 = FlaxInstanceMethod.plain(
  _flaxBinding283,
  _flaxBinding3,
  _HttpClientResponse_asBroadcastStream,
);
const _flaxBinding285 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("event", _flaxBinding2)],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid1<List<int>>,
  id: "callback:<>(p:r:event:list:[int:])->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<List<int>>,
  matches: FlaxCallbackAdapters.matchesVoid1<List<int>>,
);
const _flaxBinding286 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding285,
);
const _flaxBinding287 = FlaxTypeRef("function", nullable: true);
const _flaxBinding288 = <FlaxParameter>[
  FlaxParameter.required("onData", _flaxBinding286),
  FlaxParameter("cancelOnError", flaxNullableBoolType, required: false),
  FlaxParameter("onDone", flaxVoidNullableCallbackType, required: false),
  FlaxParameter("onError", _flaxBinding287, required: false),
];
const _flaxBinding289 = FlaxInstanceMethod.plain(
  _flaxBinding288,
  _flaxBinding280,
  _HttpClientResponse_listen,
);
const _flaxBinding290 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("event", _flaxBinding2)],
  flaxBoolType,
  FlaxCallbackAdapters.wrap1<List<int>, bool>,
  id: "callback:<>(p:r:event:list:[int:])->bool:",
  invoke: FlaxCallbackAdapters.invoke1<List<int>, bool>,
  matches: FlaxCallbackAdapters.matches1<List<int>, bool>,
);
const _flaxBinding291 = FlaxTypeRef("callback", callback: _flaxBinding290);
const _flaxBinding292 = <FlaxParameter>[
  FlaxParameter.required("test", _flaxBinding291),
];
const _flaxBinding293 = FlaxInstanceMethod.plain(
  _flaxBinding292,
  _flaxBinding3,
  _HttpClientResponse_where,
);
const _flaxBinding294 = FlaxTypeRef(
  "futureOr",
  item: flaxNullableAnyType,
  future: FlaxFutureBinding("any?:", _future8Adapt),
);
const _flaxBinding295 = FlaxTypeRef(
  "stream",
  id: "flax.core/flutter#type:Stream",
  dartType: FlaxDartTypes.typeOf<api5.Stream<Object?>?>,
  nullable: true,
  item: flaxNullableAnyType,
  stream: FlaxStreamBinding(
    "stream:flax.core/flutter#type:Stream[any?:]",
    _stream2Matches,
    _stream2Adapt,
  ),
);
const _flaxBinding296 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("error", flaxNullableAnyType)],
  flaxBoolType,
  FlaxCallbackAdapters.wrap1<Object?, bool>,
  id: "callback:<>(p:r:error:any?:)->bool:",
  invoke: FlaxCallbackAdapters.invoke1<Object?, bool>,
  matches: FlaxCallbackAdapters.matches1<Object?, bool>,
);
const _flaxBinding297 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding296,
);
const _flaxBinding298 = <FlaxParameter>[
  FlaxParameter.required("onError", flaxFunctionType),
  FlaxParameter("test", _flaxBinding297, required: false),
];
const _flaxBinding299 = FlaxInstanceMethod.plain(
  _flaxBinding298,
  _flaxBinding3,
  _HttpClientResponse_handleError,
);
const _flaxBinding300 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:StreamConsumer",
  dartType: FlaxDartTypes.typeOf<api5.StreamConsumer<List<int>>>,
);
const _flaxBinding301 = <FlaxParameter>[
  FlaxParameter.required("streamConsumer", _flaxBinding300),
];
const _flaxBinding302 = FlaxInstanceMethod.plain(
  _flaxBinding301,
  _flaxBinding101,
  _HttpClientResponse_pipe,
);
const _flaxBinding303 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter.plain("previous", _flaxBinding2),
    FlaxCallbackParameter.plain("element", _flaxBinding2),
  ],
  _flaxBinding2,
  FlaxCallbackAdapters.wrap2<List<int>, List<int>, List<int>>,
  id: "callback:<>(p:r:previous:list:[int:],p:r:element:list:[int:])->list:[int:]",
  invoke: FlaxCallbackAdapters.invoke2<List<int>, List<int>, List<int>>,
  matches: FlaxCallbackAdapters.matches2<List<int>, List<int>, List<int>>,
);
const _flaxBinding304 = FlaxTypeRef("callback", callback: _flaxBinding303);
const _flaxBinding305 = <FlaxParameter>[
  FlaxParameter.required("combine", _flaxBinding304),
];
const _flaxBinding306 = FlaxInstanceMethod.plain(
  _flaxBinding305,
  _flaxBinding270,
  _HttpClientResponse_reduce,
);
const _flaxBinding307 = <FlaxParameter>[
  FlaxParameter("separator", flaxStringType, required: false, defaultValue: ''),
];
const _flaxBinding308 = FlaxInstanceMethod.plain(
  _flaxBinding307,
  _flaxBinding4,
  _HttpClientResponse_join,
);
const _flaxBinding309 = <FlaxParameter>[
  FlaxParameter.required("needle", flaxNullableAnyType),
];
const _flaxBinding310 = FlaxInstanceMethod.plain(
  _flaxBinding309,
  _flaxBinding48,
  _HttpClientResponse_contains,
);
const _flaxBinding311 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("element", _flaxBinding2)],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid1<List<int>>,
  id: "callback:<>(p:r:element:list:[int:])->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<List<int>>,
  matches: FlaxCallbackAdapters.matchesVoid1<List<int>>,
);
const _flaxBinding312 = FlaxTypeRef("callback", callback: _flaxBinding311);
const _flaxBinding313 = FlaxTypeRef(
  "future",
  item: flaxVoidType,
  future: FlaxFutureBinding("void:", _future16Adapt),
);
const _flaxBinding314 = <FlaxParameter>[
  FlaxParameter.required("action", _flaxBinding312),
];
const _flaxBinding315 = FlaxInstanceMethod.plain(
  _flaxBinding314,
  _flaxBinding313,
  _HttpClientResponse_forEach,
);
const _flaxBinding316 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("element", _flaxBinding2)],
  flaxBoolType,
  FlaxCallbackAdapters.wrap1<List<int>, bool>,
  id: "callback:<>(p:r:element:list:[int:])->bool:",
  invoke: FlaxCallbackAdapters.invoke1<List<int>, bool>,
  matches: FlaxCallbackAdapters.matches1<List<int>, bool>,
);
const _flaxBinding317 = FlaxTypeRef("callback", callback: _flaxBinding316);
const _flaxBinding318 = <FlaxParameter>[
  FlaxParameter.required("test", _flaxBinding317),
];
const _flaxBinding319 = FlaxInstanceMethod.plain(
  _flaxBinding318,
  _flaxBinding48,
  _HttpClientResponse_every,
);
const _flaxBinding320 = FlaxInstanceMethod.plain(
  _flaxBinding318,
  _flaxBinding48,
  _HttpClientResponse_any,
);
const _flaxBinding321 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding2,
  collection: FlaxCollectionBinding(
    "iterable:[list:[int:]]",
    _collection12Create,
    _collection12Matches,
    restore: _collection12Restore,
  ),
);
const _flaxBinding322 = FlaxTypeRef(
  "list",
  item: _flaxBinding2,
  collection: FlaxCollectionBinding(
    "list:[list:[int:]]",
    _collection11Create,
    _collection11Matches,
  ),
  iterable: _flaxBinding321,
);
const _flaxBinding323 = FlaxTypeRef(
  "future",
  item: _flaxBinding322,
  future: FlaxFutureBinding("list:[list:[int:]]", _future17Adapt),
);
const _flaxBinding324 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding323,
  _HttpClientResponse_toList,
);
const _flaxBinding325 = FlaxTypeRef(
  "set",
  item: _flaxBinding2,
  collection: FlaxCollectionBinding(
    "set:[list:[int:]]",
    _collection13Create,
    _collection13Matches,
  ),
  iterable: _flaxBinding321,
);
const _flaxBinding326 = FlaxTypeRef(
  "future",
  item: _flaxBinding325,
  future: FlaxFutureBinding("set:[list:[int:]]", _future18Adapt),
);
const _flaxBinding327 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding326,
  _HttpClientResponse_toSet,
);
const _flaxBinding328 = <FlaxParameter>[
  FlaxParameter.required("count", flaxIntType),
];
const _flaxBinding329 = FlaxInstanceMethod.plain(
  _flaxBinding328,
  _flaxBinding3,
  _HttpClientResponse_take,
);
const _flaxBinding330 = FlaxInstanceMethod.plain(
  _flaxBinding318,
  _flaxBinding3,
  _HttpClientResponse_takeWhile,
);
const _flaxBinding331 = FlaxInstanceMethod.plain(
  _flaxBinding328,
  _flaxBinding3,
  _HttpClientResponse_skip,
);
const _flaxBinding332 = FlaxInstanceMethod.plain(
  _flaxBinding318,
  _flaxBinding3,
  _HttpClientResponse_skipWhile,
);
const _flaxBinding333 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter.plain("previous", _flaxBinding2),
    FlaxCallbackParameter.plain("next", _flaxBinding2),
  ],
  flaxBoolType,
  FlaxCallbackAdapters.wrap2<List<int>, List<int>, bool>,
  id: "callback:<>(p:r:previous:list:[int:],p:r:next:list:[int:])->bool:",
  invoke: FlaxCallbackAdapters.invoke2<List<int>, List<int>, bool>,
  matches: FlaxCallbackAdapters.matches2<List<int>, List<int>, bool>,
);
const _flaxBinding334 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding333,
);
const _flaxBinding335 = <FlaxParameter>[
  FlaxParameter("equals", _flaxBinding334, required: false),
];
const _flaxBinding336 = FlaxInstanceMethod.plain(
  _flaxBinding335,
  _flaxBinding3,
  _HttpClientResponse_distinct,
);
const _flaxBinding337 = FlaxCallbackBinding(
  [],
  _flaxBinding2,
  FlaxCallbackAdapters.wrap0<List<int>>,
  id: "callback:<>()->list:[int:]",
  invoke: FlaxCallbackAdapters.invoke0<List<int>>,
  matches: FlaxCallbackAdapters.matches0<List<int>>,
);
const _flaxBinding338 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding337,
);
const _flaxBinding339 = <FlaxParameter>[
  FlaxParameter.required("test", _flaxBinding317),
  FlaxParameter("orElse", _flaxBinding338, required: false),
];
const _flaxBinding340 = FlaxInstanceMethod.plain(
  _flaxBinding339,
  _flaxBinding270,
  _HttpClientResponse_firstWhere,
);
const _flaxBinding341 = FlaxInstanceMethod.plain(
  _flaxBinding339,
  _flaxBinding270,
  _HttpClientResponse_lastWhere,
);
const _flaxBinding342 = FlaxInstanceMethod.plain(
  _flaxBinding339,
  _flaxBinding270,
  _HttpClientResponse_singleWhere,
);
const _flaxBinding343 = <FlaxParameter>[
  FlaxParameter.required("index", flaxIntType),
];
const _flaxBinding344 = FlaxInstanceMethod.plain(
  _flaxBinding343,
  _flaxBinding270,
  _HttpClientResponse_elementAt,
);
const _flaxBinding345 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:EventSink",
  dartType: FlaxDartTypes.typeOf<api5.EventSink<List<int>>>,
);
const _flaxBinding346 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("sink", _flaxBinding345)],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid1<api5.EventSink<List<int>>>,
  id: "callback:<>(p:r:sink:object:flax.core/flutter#type:EventSink<list:[int:]>)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api5.EventSink<List<int>>>,
  matches: FlaxCallbackAdapters.matchesVoid1<api5.EventSink<List<int>>>,
);
const _flaxBinding347 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding346,
);
const _flaxBinding348 = <FlaxParameter>[
  FlaxParameter.required("timeLimit", flaxDurationType),
  FlaxParameter("onTimeout", _flaxBinding347, required: false),
];
const _flaxBinding349 = FlaxInstanceMethod.plain(
  _flaxBinding348,
  _flaxBinding3,
  _HttpClientResponse_timeout,
);
const _flaxBinding350 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:HttpClientResponse",
  [
    _flaxBinding251,
    _flaxBinding252,
    _flaxBinding253,
    _flaxBinding255,
    _flaxBinding256,
    _flaxBinding257,
    _flaxBinding261,
    _flaxBinding262,
    _flaxBinding263,
    _flaxBinding265,
    _flaxBinding266,
    _flaxBinding267,
    _flaxBinding268,
    _flaxBinding269,
    _flaxBinding271,
    _flaxBinding272,
    _flaxBinding273,
  ],
  {
    "redirect": _flaxBinding276,
    "detachSocket": _flaxBinding279,
    "asBroadcastStream": _flaxBinding284,
    "listen": _flaxBinding289,
    "where": _flaxBinding293,
    "map": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter.required(
          "convert",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [FlaxCallbackParameter.plain("event", _flaxBinding2)],
              flaxNullableAnyType,
              _callback3,
              id: "callback:<>(p:r:event:list:[int:])->any?:",
              invoke: _callback3Invoke,
              matches: _callback3Matches,
            ),
          ),
        ),
      ],
      FlaxTypeRef(
        "stream",
        id: "flax.core/flutter#type:Stream",
        item: flaxNullableAnyType,
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
        FlaxParameter.required(
          "convert",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [FlaxCallbackParameter.plain("event", _flaxBinding2)],
              _flaxBinding294,
              _callback4,
              id: "callback:<>(p:r:event:list:[int:])->futureOr:[any?:]",
              invoke: _callback4Invoke,
              matches: _callback4Matches,
            ),
          ),
        ),
      ],
      FlaxTypeRef(
        "stream",
        id: "flax.core/flutter#type:Stream",
        item: flaxNullableAnyType,
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
        FlaxParameter.required(
          "convert",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [FlaxCallbackParameter.plain("event", _flaxBinding2)],
              _flaxBinding295,
              _callback5,
              id: "callback:<>(p:r:event:list:[int:])->stream?:flax.core/flutter#type:Stream[any?:]",
              invoke: _callback5Invoke,
              matches: _callback5Matches,
            ),
          ),
        ),
      ],
      FlaxTypeRef(
        "stream",
        id: "flax.core/flutter#type:Stream",
        item: flaxNullableAnyType,
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
    "handleError": _flaxBinding299,
    "expand": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter.required(
          "convert",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [FlaxCallbackParameter.plain("element", _flaxBinding2)],
              _flaxBinding242,
              _callback6,
              id: "callback:<>(p:r:element:list:[int:])->iterable:[any?:]",
              invoke: _callback6Invoke,
              matches: _callback6Matches,
            ),
          ),
        ),
      ],
      FlaxTypeRef(
        "stream",
        id: "flax.core/flutter#type:Stream",
        item: flaxNullableAnyType,
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
    "pipe": _flaxBinding302,
    "transform": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter.required(
          "streamTransformer",
          FlaxTypeRef("object", id: "flax.core/flutter#type:StreamTransformer"),
        ),
      ],
      FlaxTypeRef(
        "stream",
        id: "flax.core/flutter#type:Stream",
        item: flaxNullableAnyType,
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
    "reduce": _flaxBinding306,
    "fold": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter.required(
          "initialValue",
          FlaxTypeRef("any", nullable: true),
        ),
        FlaxParameter.required(
          "combine",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter.plain("previous", flaxNullableAnyType),
                FlaxCallbackParameter.plain("element", _flaxBinding2),
              ],
              flaxNullableAnyType,
              _callback7,
              id: "callback:<>(p:r:previous:any?:,p:r:element:list:[int:])->any?:",
              invoke: _callback7Invoke,
              matches: _callback7Matches,
            ),
          ),
        ),
      ],
      FlaxTypeRef(
        "future",
        item: flaxNullableAnyType,
        future: FlaxFutureBinding("any?:", _future8Adapt),
      ),
      _HttpClientResponse_fold,
      genericFactory: _flaxGeneric_HttpClientResponse_fold,
      ownerTypes: [],
    ),
    "join": _flaxBinding308,
    "contains": _flaxBinding310,
    "forEach": _flaxBinding315,
    "every": _flaxBinding319,
    "any": _flaxBinding320,
    "cast": FlaxInstanceMethod(
      _flaxBinding35,
      FlaxTypeRef(
        "stream",
        id: "flax.core/flutter#type:Stream",
        item: flaxNullableAnyType,
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
    "toList": _flaxBinding324,
    "toSet": _flaxBinding327,
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
        item: flaxNullableAnyType,
        future: FlaxFutureBinding("any?:", _future8Adapt),
      ),
      _HttpClientResponse_drain,
      genericFactory: _flaxGeneric_HttpClientResponse_drain,
      ownerTypes: [],
    ),
    "take": _flaxBinding329,
    "takeWhile": _flaxBinding330,
    "skip": _flaxBinding331,
    "skipWhile": _flaxBinding332,
    "distinct": _flaxBinding336,
    "firstWhere": _flaxBinding340,
    "lastWhere": _flaxBinding341,
    "singleWhere": _flaxBinding342,
    "elementAt": _flaxBinding344,
    "timeout": _flaxBinding349,
  },
  constructors: {},
  create: _createHttpClientResponse,
  matches: _isHttpClientResponse,
  setters: [],
  supertypes: ["dart:core::Object", "flax.core/flutter#type:Stream"],
);
const _flaxBinding351 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:InternetAddress",
);
const _flaxBinding352 = FlaxGetter.plain(
  "remoteAddress",
  _flaxBinding351,
  _HttpConnectionInfo_remoteAddress,
);
const _flaxBinding353 = FlaxGetter.plain(
  "remotePort",
  flaxIntType,
  _HttpConnectionInfo_remotePort,
);
const _flaxBinding354 = FlaxGetter.plain(
  "localPort",
  flaxIntType,
  _HttpConnectionInfo_localPort,
);
const _flaxBinding355 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:HttpConnectionInfo",
  [_flaxBinding352, _flaxBinding353, _flaxBinding354],
  {},
  constructors: {},
  create: _createHttpConnectionInfo,
  matches: _isHttpConnectionInfo,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding356 = FlaxGetter.plain(
  "date",
  _flaxBinding20,
  _HttpHeaders_date,
);
const _flaxBinding357 = FlaxGetter.plain(
  "expires",
  _flaxBinding20,
  _HttpHeaders_expires,
);
const _flaxBinding358 = FlaxGetter.plain(
  "ifModifiedSince",
  _flaxBinding20,
  _HttpHeaders_ifModifiedSince,
);
const _flaxBinding359 = FlaxGetter.plain(
  "host",
  flaxNullableStringType,
  _HttpHeaders_host,
);
const _flaxBinding360 = FlaxGetter.plain(
  "port",
  flaxNullableIntType,
  _HttpHeaders_port,
);
const _flaxBinding361 = FlaxGetter.plain(
  "contentLength",
  flaxIntType,
  _HttpHeaders_contentLength,
);
const _flaxBinding362 = FlaxGetter.plain(
  "persistentConnection",
  flaxBoolType,
  _HttpHeaders_persistentConnection,
);
const _flaxBinding363 = FlaxGetter.plain(
  "chunkedTransferEncoding",
  flaxBoolType,
  _HttpHeaders_chunkedTransferEncoding,
);
const _flaxBinding364 = FlaxSetter(
  "date",
  _flaxBinding20,
  _HttpHeaders_set_date,
);
const _flaxBinding365 = FlaxSetter(
  "expires",
  _flaxBinding20,
  _HttpHeaders_set_expires,
);
const _flaxBinding366 = FlaxSetter(
  "ifModifiedSince",
  _flaxBinding20,
  _HttpHeaders_set_ifModifiedSince,
);
const _flaxBinding367 = FlaxSetter(
  "host",
  flaxNullableStringType,
  _HttpHeaders_set_host,
);
const _flaxBinding368 = FlaxSetter(
  "port",
  flaxNullableIntType,
  _HttpHeaders_set_port,
);
const _flaxBinding369 = FlaxSetter(
  "contentLength",
  flaxIntType,
  _HttpHeaders_set_contentLength,
);
const _flaxBinding370 = FlaxSetter(
  "persistentConnection",
  flaxBoolType,
  _HttpHeaders_set_persistentConnection,
);
const _flaxBinding371 = FlaxSetter(
  "chunkedTransferEncoding",
  flaxBoolType,
  _HttpHeaders_set_chunkedTransferEncoding,
);
const _flaxBinding372 = <FlaxParameter>[
  FlaxParameter.required("name", flaxStringType),
];
const _flaxBinding373 = FlaxInstanceMethod.plain(
  _flaxBinding372,
  flaxNullableStringType,
  _HttpHeaders_value,
);
const _flaxBinding374 = <FlaxParameter>[
  FlaxParameter.required("name", flaxStringType),
  FlaxParameter.required("value", flaxAnyType),
  FlaxParameter(
    "preserveHeaderCase",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
];
const _flaxBinding375 = FlaxInstanceMethod.plain(
  _flaxBinding374,
  flaxVoidType,
  _HttpHeaders_add,
);
const _flaxBinding376 = FlaxInstanceMethod.plain(
  _flaxBinding374,
  flaxVoidType,
  _HttpHeaders_set,
);
const _flaxBinding377 = <FlaxParameter>[
  FlaxParameter.required("name", flaxStringType),
  FlaxParameter.required("value", flaxAnyType),
];
const _flaxBinding378 = FlaxInstanceMethod.plain(
  _flaxBinding377,
  flaxVoidType,
  _HttpHeaders_remove,
);
const _flaxBinding379 = FlaxInstanceMethod.plain(
  _flaxBinding372,
  flaxVoidType,
  _HttpHeaders_removeAll,
);
const _flaxBinding380 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter.plain("name", flaxStringType),
    FlaxCallbackParameter.plain("values", _flaxBinding125),
  ],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid2<String, List<String>>,
  id: "callback:<>(p:r:name:String:,p:r:values:list:[String:])->void:",
  invoke: FlaxCallbackAdapters.invokeVoid2<String, List<String>>,
  matches: FlaxCallbackAdapters.matchesVoid2<String, List<String>>,
);
const _flaxBinding381 = FlaxTypeRef("callback", callback: _flaxBinding380);
const _flaxBinding382 = <FlaxParameter>[
  FlaxParameter.required("action", _flaxBinding381),
];
const _flaxBinding383 = FlaxInstanceMethod.plain(
  _flaxBinding382,
  flaxVoidType,
  _HttpHeaders_forEach,
);
const _flaxBinding384 = FlaxInstanceMethod.plain(
  _flaxBinding372,
  flaxVoidType,
  _HttpHeaders_noFolding,
);
const _flaxBinding385 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxVoidType,
  _HttpHeaders_clear,
);
const _flaxBinding386 = FlaxTypeRef(
  "list",
  nullable: true,
  item: flaxStringType,
  collection: FlaxCollectionBinding(
    "list:[String:]",
    _collection4Create,
    _collection4Matches,
  ),
  iterable: _flaxBinding124,
);
const _flaxBinding387 = FlaxInstanceMethod.plain(
  _flaxBinding372,
  _flaxBinding386,
  _HttpHeaders_operatorGetIndex,
);
const _flaxBinding388 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:HttpHeaders",
  [
    _flaxBinding356,
    _flaxBinding357,
    _flaxBinding358,
    _flaxBinding359,
    _flaxBinding360,
    _flaxBinding361,
    _flaxBinding362,
    _flaxBinding363,
  ],
  {
    "value": _flaxBinding373,
    "add": _flaxBinding375,
    "set": _flaxBinding376,
    "remove": _flaxBinding378,
    "removeAll": _flaxBinding379,
    "forEach": _flaxBinding383,
    "noFolding": _flaxBinding384,
    "clear": _flaxBinding385,
    "operatorGetIndex": _flaxBinding387,
  },
  constructors: {},
  create: _createHttpHeaders,
  matches: _isHttpHeaders,
  setters: [
    _flaxBinding364,
    _flaxBinding365,
    _flaxBinding366,
    _flaxBinding367,
    _flaxBinding368,
    _flaxBinding369,
    _flaxBinding370,
    _flaxBinding371,
  ],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding389 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:InternetAddressType",
);
const _flaxBinding390 = FlaxGetter.plain(
  "type",
  _flaxBinding389,
  _InternetAddress_type,
);
const _flaxBinding391 = FlaxGetter.plain(
  "address",
  flaxStringType,
  _InternetAddress_address,
);
const _flaxBinding392 = FlaxGetter.plain(
  "host",
  flaxStringType,
  _InternetAddress_host,
);
const _flaxBinding393 = FlaxGetter.plain(
  "rawAddress",
  flaxUint8ListType,
  _InternetAddress_rawAddress,
);
const _flaxBinding394 = FlaxGetter.plain(
  "isLoopback",
  flaxBoolType,
  _InternetAddress_isLoopback,
);
const _flaxBinding395 = FlaxGetter.plain(
  "isLinkLocal",
  flaxBoolType,
  _InternetAddress_isLinkLocal,
);
const _flaxBinding396 = FlaxGetter.plain(
  "isMulticast",
  flaxBoolType,
  _InternetAddress_isMulticast,
);
const _flaxBinding397 = FlaxTypeRef(
  "future",
  item: _flaxBinding351,
  future: FlaxFutureBinding(
    "object:flax.core/sdk_dependencies#type:InternetAddress",
    _future19Adapt,
  ),
);
const _flaxBinding398 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding397,
  _InternetAddress_reverse,
);
const _flaxBinding399 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:InternetAddressType",
  nullable: true,
);
const _flaxBinding400 = <FlaxParameter>[
  FlaxParameter.required("address", flaxStringType),
  FlaxParameter("type", _flaxBinding399, required: false),
];
const _flaxBinding401 = <FlaxParameter>[
  FlaxParameter.required("rawAddress", flaxUint8ListType),
  FlaxParameter("type", _flaxBinding399, required: false),
];
const _flaxBinding402 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:InternetAddress",
  [
    _flaxBinding390,
    _flaxBinding391,
    _flaxBinding392,
    _flaxBinding393,
    _flaxBinding394,
    _flaxBinding395,
    _flaxBinding396,
  ],
  {"reverse": _flaxBinding398},
  constructors: {"": _flaxBinding400, "fromRawAddress": _flaxBinding401},
  create: _createInternetAddress,
  matches: _isInternetAddress,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding403 = FlaxGetter.plain(
  "name",
  flaxStringType,
  _InternetAddressType_name,
);
const _flaxBinding404 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxStringType,
  _InternetAddressType_toString,
);
const _flaxBinding405 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:InternetAddressType",
  [_flaxBinding403],
  {"toString": _flaxBinding404},
  constructors: {},
  create: _createInternetAddressType,
  matches: _isInternetAddressType,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding406 = FlaxInstanceMethod.plain(
  _flaxBinding12,
  flaxUint8ListType,
  _Latin1Codec_encode,
);
const _flaxBinding407 = FlaxInstanceMethod.plain(
  _flaxBinding14,
  flaxStringType,
  _Latin1Codec_decode,
);
const _flaxBinding408 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:Latin1Codec",
  [],
  {"encode": _flaxBinding406, "decode": _flaxBinding407},
  constructors: {"": _flaxBinding16},
  create: _createLatin1Codec,
  matches: _isLatin1Codec,
  setters: [],
  supertypes: [
    "flax.core/sdk_dependencies#type:Encoding",
    "dart:convert::Codec",
    "dart:core::Object",
  ],
  parent: _flaxBinding11,
);
const _flaxBinding409 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:Link",
);
const _flaxBinding410 = FlaxGetter.plain(
  "absolute",
  _flaxBinding409,
  _Link_absolute,
);
const _flaxBinding411 = FlaxTypeRef(
  "future",
  item: _flaxBinding409,
  future: FlaxFutureBinding(
    "object:flax.core/sdk_dependencies#type:Link",
    _future20Adapt,
  ),
);
const _flaxBinding412 = FlaxInstanceMethod.plain(
  _flaxBinding52,
  _flaxBinding411,
  _Link_rename,
);
const _flaxBinding413 = FlaxInstanceMethod.plain(
  _flaxBinding52,
  _flaxBinding409,
  _Link_renameSync,
);
const _flaxBinding414 = <FlaxParameter>[
  FlaxParameter.required("target", flaxStringType),
  FlaxParameter(
    "recursive",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
];
const _flaxBinding415 = FlaxInstanceMethod.plain(
  _flaxBinding414,
  _flaxBinding411,
  _Link_create,
);
const _flaxBinding416 = FlaxInstanceMethod.plain(
  _flaxBinding414,
  flaxVoidType,
  _Link_createSync,
);
const _flaxBinding417 = <FlaxParameter>[
  FlaxParameter.required("target", flaxStringType),
];
const _flaxBinding418 = FlaxInstanceMethod.plain(
  _flaxBinding417,
  flaxVoidType,
  _Link_updateSync,
);
const _flaxBinding419 = FlaxInstanceMethod.plain(
  _flaxBinding417,
  _flaxBinding411,
  _Link_update,
);
const _flaxBinding420 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding4,
  _Link_target,
);
const _flaxBinding421 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxStringType,
  _Link_targetSync,
);
const _flaxBinding422 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:Link",
  [_flaxBinding410],
  {
    "rename": _flaxBinding412,
    "renameSync": _flaxBinding413,
    "create": _flaxBinding415,
    "createSync": _flaxBinding416,
    "updateSync": _flaxBinding418,
    "update": _flaxBinding419,
    "target": _flaxBinding420,
    "targetSync": _flaxBinding421,
  },
  constructors: {
    "": _flaxBinding81,
    "fromRawPath": _flaxBinding135,
    "fromUri": _flaxBinding83,
  },
  create: _createLink,
  matches: _isLink,
  setters: [],
  supertypes: [
    "dart:core::Object",
    "flax.core/sdk_dependencies#type:FileSystemEntity",
  ],
  parent: _flaxBinding64,
);
const _flaxBinding423 = FlaxTypeRef("Float64List");
const _flaxBinding424 = FlaxGetter.plain(
  "storage",
  _flaxBinding423,
  _Matrix2_storage,
);
const _flaxBinding425 = FlaxGetter.plain(
  "dimension",
  flaxIntType,
  _Matrix2_dimension,
);
const _flaxBinding426 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:Vector2",
);
const _flaxBinding427 = FlaxGetter.plain(
  "row0",
  _flaxBinding426,
  _Matrix2_row0,
);
const _flaxBinding428 = FlaxGetter.plain(
  "row1",
  _flaxBinding426,
  _Matrix2_row1,
);
const _flaxBinding429 = FlaxSetter("row0", _flaxBinding426, _Matrix2_set_row0);
const _flaxBinding430 = FlaxSetter("row1", _flaxBinding426, _Matrix2_set_row1);
const _flaxBinding431 = <FlaxParameter>[
  FlaxParameter.required("row", flaxIntType),
  FlaxParameter.required("col", flaxIntType),
];
const _flaxBinding432 = FlaxInstanceMethod.plain(
  _flaxBinding431,
  flaxIntType,
  _Matrix2_index,
);
const _flaxBinding433 = FlaxInstanceMethod.plain(
  _flaxBinding431,
  flaxDoubleType,
  _Matrix2_entry,
);
const _flaxBinding434 = <FlaxParameter>[
  FlaxParameter.required("row", flaxIntType),
  FlaxParameter.required("col", flaxIntType),
  FlaxParameter.required("v", flaxDoubleType),
];
const _flaxBinding435 = FlaxInstanceMethod.plain(
  _flaxBinding434,
  flaxVoidType,
  _Matrix2_setEntry,
);
const _flaxBinding436 = <FlaxParameter>[
  FlaxParameter.required("arg0", flaxDoubleType),
  FlaxParameter.required("arg1", flaxDoubleType),
  FlaxParameter.required("arg2", flaxDoubleType),
  FlaxParameter.required("arg3", flaxDoubleType),
];
const _flaxBinding437 = FlaxInstanceMethod.plain(
  _flaxBinding436,
  flaxVoidType,
  _Matrix2_setValues,
);
const _flaxBinding438 = <FlaxParameter>[
  FlaxParameter.required("arg0", _flaxBinding426),
  FlaxParameter.required("arg1", _flaxBinding426),
];
const _flaxBinding439 = FlaxInstanceMethod.plain(
  _flaxBinding438,
  flaxVoidType,
  _Matrix2_setColumns,
);
const _flaxBinding440 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:Matrix2",
);
const _flaxBinding441 = <FlaxParameter>[
  FlaxParameter.required("arg", _flaxBinding440),
];
const _flaxBinding442 = FlaxInstanceMethod.plain(
  _flaxBinding441,
  flaxVoidType,
  _Matrix2_setFrom,
);
const _flaxBinding443 = <FlaxParameter>[
  FlaxParameter.required("u", _flaxBinding426),
  FlaxParameter.required("v", _flaxBinding426),
];
const _flaxBinding444 = FlaxInstanceMethod.plain(
  _flaxBinding443,
  flaxVoidType,
  _Matrix2_setOuter,
);
const _flaxBinding445 = <FlaxParameter>[
  FlaxParameter.required("arg", flaxDoubleType),
];
const _flaxBinding446 = FlaxInstanceMethod.plain(
  _flaxBinding445,
  flaxVoidType,
  _Matrix2_splatDiagonal,
);
const _flaxBinding447 = <FlaxParameter>[
  FlaxParameter.required("arg", _flaxBinding426),
];
const _flaxBinding448 = FlaxInstanceMethod.plain(
  _flaxBinding447,
  flaxVoidType,
  _Matrix2_setDiagonal,
);
const _flaxBinding449 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxStringType,
  _Matrix2_toString,
);
const _flaxBinding450 = <FlaxParameter>[
  FlaxParameter.required("row", flaxIntType),
  FlaxParameter.required("arg", _flaxBinding426),
];
const _flaxBinding451 = FlaxInstanceMethod.plain(
  _flaxBinding450,
  flaxVoidType,
  _Matrix2_setRow,
);
const _flaxBinding452 = <FlaxParameter>[
  FlaxParameter.required("row", flaxIntType),
];
const _flaxBinding453 = FlaxInstanceMethod.plain(
  _flaxBinding452,
  _flaxBinding426,
  _Matrix2_getRow,
);
const _flaxBinding454 = <FlaxParameter>[
  FlaxParameter.required("column", flaxIntType),
  FlaxParameter.required("arg", _flaxBinding426),
];
const _flaxBinding455 = FlaxInstanceMethod.plain(
  _flaxBinding454,
  flaxVoidType,
  _Matrix2_setColumn,
);
const _flaxBinding456 = <FlaxParameter>[
  FlaxParameter.required("column", flaxIntType),
];
const _flaxBinding457 = FlaxInstanceMethod.plain(
  _flaxBinding456,
  _flaxBinding426,
  _Matrix2_getColumn,
);
const _flaxBinding458 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding440,
  _Matrix2_clone,
);
const _flaxBinding459 = FlaxInstanceMethod.plain(
  _flaxBinding441,
  _flaxBinding440,
  _Matrix2_copyInto,
);
const _flaxBinding460 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxVoidType,
  _Matrix2_setZero,
);
const _flaxBinding461 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxVoidType,
  _Matrix2_setIdentity,
);
const _flaxBinding462 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding440,
  _Matrix2_transposed,
);
const _flaxBinding463 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxVoidType,
  _Matrix2_transpose,
);
const _flaxBinding464 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding440,
  _Matrix2_absolute,
);
const _flaxBinding465 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxDoubleType,
  _Matrix2_determinant,
);
const _flaxBinding466 = <FlaxParameter>[
  FlaxParameter.required("i", flaxIntType),
  FlaxParameter.required("v", _flaxBinding426),
];
const _flaxBinding467 = FlaxInstanceMethod.plain(
  _flaxBinding466,
  flaxDoubleType,
  _Matrix2_dotRow,
);
const _flaxBinding468 = <FlaxParameter>[
  FlaxParameter.required("j", flaxIntType),
  FlaxParameter.required("v", _flaxBinding426),
];
const _flaxBinding469 = FlaxInstanceMethod.plain(
  _flaxBinding468,
  flaxDoubleType,
  _Matrix2_dotColumn,
);
const _flaxBinding470 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxDoubleType,
  _Matrix2_trace,
);
const _flaxBinding471 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxDoubleType,
  _Matrix2_infinityNorm,
);
const _flaxBinding472 = <FlaxParameter>[
  FlaxParameter.required("correct", _flaxBinding440),
];
const _flaxBinding473 = FlaxInstanceMethod.plain(
  _flaxBinding472,
  flaxDoubleType,
  _Matrix2_relativeError,
);
const _flaxBinding474 = FlaxInstanceMethod.plain(
  _flaxBinding472,
  flaxDoubleType,
  _Matrix2_absoluteError,
);
const _flaxBinding475 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxDoubleType,
  _Matrix2_invert,
);
const _flaxBinding476 = FlaxInstanceMethod.plain(
  _flaxBinding441,
  flaxDoubleType,
  _Matrix2_copyInverse,
);
const _flaxBinding477 = <FlaxParameter>[
  FlaxParameter.required("radians", flaxDoubleType),
];
const _flaxBinding478 = FlaxInstanceMethod.plain(
  _flaxBinding477,
  flaxVoidType,
  _Matrix2_setRotation,
);
const _flaxBinding479 = <FlaxParameter>[
  FlaxParameter.required("scale", flaxDoubleType),
];
const _flaxBinding480 = FlaxInstanceMethod.plain(
  _flaxBinding479,
  flaxVoidType,
  _Matrix2_scaleAdjoint,
);
const _flaxBinding481 = FlaxInstanceMethod.plain(
  _flaxBinding479,
  flaxVoidType,
  _Matrix2_scale,
);
const _flaxBinding482 = FlaxInstanceMethod.plain(
  _flaxBinding479,
  _flaxBinding440,
  _Matrix2_scaled,
);
const _flaxBinding483 = <FlaxParameter>[
  FlaxParameter.required("o", _flaxBinding440),
];
const _flaxBinding484 = FlaxInstanceMethod.plain(
  _flaxBinding483,
  flaxVoidType,
  _Matrix2_add,
);
const _flaxBinding485 = FlaxInstanceMethod.plain(
  _flaxBinding483,
  flaxVoidType,
  _Matrix2_sub,
);
const _flaxBinding486 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxVoidType,
  _Matrix2_negate,
);
const _flaxBinding487 = FlaxInstanceMethod.plain(
  _flaxBinding441,
  flaxVoidType,
  _Matrix2_multiply,
);
const _flaxBinding488 = FlaxInstanceMethod.plain(
  _flaxBinding441,
  _flaxBinding440,
  _Matrix2_multiplied,
);
const _flaxBinding489 = FlaxInstanceMethod.plain(
  _flaxBinding441,
  flaxVoidType,
  _Matrix2_transposeMultiply,
);
const _flaxBinding490 = FlaxInstanceMethod.plain(
  _flaxBinding441,
  flaxVoidType,
  _Matrix2_multiplyTranspose,
);
const _flaxBinding491 = FlaxInstanceMethod.plain(
  _flaxBinding447,
  _flaxBinding426,
  _Matrix2_transform,
);
const _flaxBinding492 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:Vector2",
  nullable: true,
);
const _flaxBinding493 = <FlaxParameter>[
  FlaxParameter.required("arg", _flaxBinding426),
  FlaxParameter("out", _flaxBinding492, required: false),
];
const _flaxBinding494 = FlaxInstanceMethod.plain(
  _flaxBinding493,
  _flaxBinding426,
  _Matrix2_transformed,
);
const _flaxBinding495 = FlaxTypeRef(
  "iterable",
  item: flaxNumType,
  collection: FlaxCollectionBinding(
    "iterable:[num:]",
    _collection15Create,
    _collection15Matches,
    restore: _collection15Restore,
  ),
);
const _flaxBinding496 = FlaxTypeRef(
  "list",
  item: flaxNumType,
  collection: FlaxCollectionBinding(
    "list:[num:]",
    _collection14Create,
    _collection14Matches,
  ),
  iterable: _flaxBinding495,
);
const _flaxBinding497 = <FlaxParameter>[
  FlaxParameter.required("array", _flaxBinding496),
  FlaxParameter("offset", flaxIntType, required: false, defaultValue: 0),
];
const _flaxBinding498 = FlaxInstanceMethod.plain(
  _flaxBinding497,
  flaxVoidType,
  _Matrix2_copyIntoArray,
);
const _flaxBinding499 = FlaxTypeRef(
  "iterable",
  item: flaxDoubleType,
  collection: FlaxCollectionBinding(
    "iterable:[double:]",
    _collection17Create,
    _collection17Matches,
    restore: _collection17Restore,
  ),
);
const _flaxBinding500 = FlaxTypeRef(
  "list",
  item: flaxDoubleType,
  collection: FlaxCollectionBinding(
    "list:[double:]",
    _collection16Create,
    _collection16Matches,
  ),
  iterable: _flaxBinding499,
);
const _flaxBinding501 = <FlaxParameter>[
  FlaxParameter.required("array", _flaxBinding500),
  FlaxParameter("offset", flaxIntType, required: false, defaultValue: 0),
];
const _flaxBinding502 = FlaxInstanceMethod.plain(
  _flaxBinding501,
  flaxVoidType,
  _Matrix2_copyFromArray,
);
const _flaxBinding503 = <FlaxParameter>[
  FlaxParameter.required("i", flaxIntType),
];
const _flaxBinding504 = FlaxInstanceMethod.plain(
  _flaxBinding503,
  flaxDoubleType,
  _Matrix2_operatorGetIndex,
);
const _flaxBinding505 = <FlaxParameter>[
  FlaxParameter.required("i", flaxIntType),
  FlaxParameter.required("v", flaxDoubleType),
];
const _flaxBinding506 = FlaxInstanceMethod.plain(
  _flaxBinding505,
  flaxVoidType,
  _Matrix2_operatorSetIndex,
);
const _flaxBinding507 = FlaxInstanceMethod.plain(
  _flaxBinding441,
  _flaxBinding440,
  _Matrix2_operatorAdd,
);
const _flaxBinding508 = FlaxInstanceMethod.plain(
  _flaxBinding441,
  _flaxBinding440,
  _Matrix2_operatorSubtract,
);
const _flaxBinding509 = <FlaxParameter>[
  FlaxParameter.required("arg", flaxNullableAnyType),
];
const _flaxBinding510 = FlaxInstanceMethod.plain(
  _flaxBinding509,
  flaxNullableAnyType,
  _Matrix2_operatorMultiply,
);
const _flaxBinding511 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding440,
  _Matrix2_operatorNegate,
);
const _flaxBinding512 = <FlaxParameter>[
  FlaxParameter.required("values", _flaxBinding500),
];
const _flaxBinding513 = <FlaxParameter>[
  FlaxParameter.required("other", _flaxBinding440),
];
const _flaxBinding514 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:Matrix2",
  [_flaxBinding424, _flaxBinding425, _flaxBinding427, _flaxBinding428],
  {
    "index": _flaxBinding432,
    "entry": _flaxBinding433,
    "setEntry": _flaxBinding435,
    "setValues": _flaxBinding437,
    "setColumns": _flaxBinding439,
    "setFrom": _flaxBinding442,
    "setOuter": _flaxBinding444,
    "splatDiagonal": _flaxBinding446,
    "setDiagonal": _flaxBinding448,
    "toString": _flaxBinding449,
    "setRow": _flaxBinding451,
    "getRow": _flaxBinding453,
    "setColumn": _flaxBinding455,
    "getColumn": _flaxBinding457,
    "clone": _flaxBinding458,
    "copyInto": _flaxBinding459,
    "setZero": _flaxBinding460,
    "setIdentity": _flaxBinding461,
    "transposed": _flaxBinding462,
    "transpose": _flaxBinding463,
    "absolute": _flaxBinding464,
    "determinant": _flaxBinding465,
    "dotRow": _flaxBinding467,
    "dotColumn": _flaxBinding469,
    "trace": _flaxBinding470,
    "infinityNorm": _flaxBinding471,
    "relativeError": _flaxBinding473,
    "absoluteError": _flaxBinding474,
    "invert": _flaxBinding475,
    "copyInverse": _flaxBinding476,
    "setRotation": _flaxBinding478,
    "scaleAdjoint": _flaxBinding480,
    "scale": _flaxBinding481,
    "scaled": _flaxBinding482,
    "add": _flaxBinding484,
    "sub": _flaxBinding485,
    "negate": _flaxBinding486,
    "multiply": _flaxBinding487,
    "multiplied": _flaxBinding488,
    "transposeMultiply": _flaxBinding489,
    "multiplyTranspose": _flaxBinding490,
    "transform": _flaxBinding491,
    "transformed": _flaxBinding494,
    "copyIntoArray": _flaxBinding498,
    "copyFromArray": _flaxBinding502,
    "operatorGetIndex": _flaxBinding504,
    "operatorSetIndex": _flaxBinding506,
    "operatorAdd": _flaxBinding507,
    "operatorSubtract": _flaxBinding508,
    "operatorMultiply": _flaxBinding510,
    "operatorNegate": _flaxBinding511,
  },
  constructors: {
    "": _flaxBinding436,
    "fromList": _flaxBinding512,
    "zero": _flaxBinding35,
    "identity": _flaxBinding35,
    "copy": _flaxBinding513,
    "columns": _flaxBinding438,
    "outer": _flaxBinding443,
    "rotation": _flaxBinding477,
  },
  create: _createMatrix2,
  matches: _isMatrix2,
  setters: [_flaxBinding429, _flaxBinding430],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding515 = FlaxGetter.plain(
  "storage",
  _flaxBinding423,
  _Matrix3_storage,
);
const _flaxBinding516 = FlaxGetter.plain(
  "dimension",
  flaxIntType,
  _Matrix3_dimension,
);
const _flaxBinding517 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:Vector3",
);
const _flaxBinding518 = FlaxGetter.plain(
  "row0",
  _flaxBinding517,
  _Matrix3_row0,
);
const _flaxBinding519 = FlaxGetter.plain(
  "row1",
  _flaxBinding517,
  _Matrix3_row1,
);
const _flaxBinding520 = FlaxGetter.plain(
  "row2",
  _flaxBinding517,
  _Matrix3_row2,
);
const _flaxBinding521 = FlaxGetter.plain(
  "right",
  _flaxBinding517,
  _Matrix3_right,
);
const _flaxBinding522 = FlaxGetter.plain("up", _flaxBinding517, _Matrix3_up);
const _flaxBinding523 = FlaxGetter.plain(
  "forward",
  _flaxBinding517,
  _Matrix3_forward,
);
const _flaxBinding524 = FlaxSetter("row0", _flaxBinding517, _Matrix3_set_row0);
const _flaxBinding525 = FlaxSetter("row1", _flaxBinding517, _Matrix3_set_row1);
const _flaxBinding526 = FlaxSetter("row2", _flaxBinding517, _Matrix3_set_row2);
const _flaxBinding527 = FlaxInstanceMethod.plain(
  _flaxBinding431,
  flaxIntType,
  _Matrix3_index,
);
const _flaxBinding528 = FlaxInstanceMethod.plain(
  _flaxBinding431,
  flaxDoubleType,
  _Matrix3_entry,
);
const _flaxBinding529 = FlaxInstanceMethod.plain(
  _flaxBinding434,
  flaxVoidType,
  _Matrix3_setEntry,
);
const _flaxBinding530 = <FlaxParameter>[
  FlaxParameter.required("arg0", flaxDoubleType),
  FlaxParameter.required("arg1", flaxDoubleType),
  FlaxParameter.required("arg2", flaxDoubleType),
  FlaxParameter.required("arg3", flaxDoubleType),
  FlaxParameter.required("arg4", flaxDoubleType),
  FlaxParameter.required("arg5", flaxDoubleType),
  FlaxParameter.required("arg6", flaxDoubleType),
  FlaxParameter.required("arg7", flaxDoubleType),
  FlaxParameter.required("arg8", flaxDoubleType),
];
const _flaxBinding531 = FlaxInstanceMethod.plain(
  _flaxBinding530,
  flaxVoidType,
  _Matrix3_setValues,
);
const _flaxBinding532 = <FlaxParameter>[
  FlaxParameter.required("arg0", _flaxBinding517),
  FlaxParameter.required("arg1", _flaxBinding517),
  FlaxParameter.required("arg2", _flaxBinding517),
];
const _flaxBinding533 = FlaxInstanceMethod.plain(
  _flaxBinding532,
  flaxVoidType,
  _Matrix3_setColumns,
);
const _flaxBinding534 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:Matrix3",
);
const _flaxBinding535 = <FlaxParameter>[
  FlaxParameter.required("arg", _flaxBinding534),
];
const _flaxBinding536 = FlaxInstanceMethod.plain(
  _flaxBinding535,
  flaxVoidType,
  _Matrix3_setFrom,
);
const _flaxBinding537 = <FlaxParameter>[
  FlaxParameter.required("u", _flaxBinding517),
  FlaxParameter.required("v", _flaxBinding517),
];
const _flaxBinding538 = FlaxInstanceMethod.plain(
  _flaxBinding537,
  flaxVoidType,
  _Matrix3_setOuter,
);
const _flaxBinding539 = FlaxInstanceMethod.plain(
  _flaxBinding445,
  flaxVoidType,
  _Matrix3_splatDiagonal,
);
const _flaxBinding540 = <FlaxParameter>[
  FlaxParameter.required("arg", _flaxBinding517),
];
const _flaxBinding541 = FlaxInstanceMethod.plain(
  _flaxBinding540,
  flaxVoidType,
  _Matrix3_setDiagonal,
);
const _flaxBinding542 = FlaxInstanceMethod.plain(
  _flaxBinding441,
  flaxVoidType,
  _Matrix3_setUpper2x2,
);
const _flaxBinding543 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxStringType,
  _Matrix3_toString,
);
const _flaxBinding544 = <FlaxParameter>[
  FlaxParameter.required("row", flaxIntType),
  FlaxParameter.required("arg", _flaxBinding517),
];
const _flaxBinding545 = FlaxInstanceMethod.plain(
  _flaxBinding544,
  flaxVoidType,
  _Matrix3_setRow,
);
const _flaxBinding546 = FlaxInstanceMethod.plain(
  _flaxBinding452,
  _flaxBinding517,
  _Matrix3_getRow,
);
const _flaxBinding547 = <FlaxParameter>[
  FlaxParameter.required("column", flaxIntType),
  FlaxParameter.required("arg", _flaxBinding517),
];
const _flaxBinding548 = FlaxInstanceMethod.plain(
  _flaxBinding547,
  flaxVoidType,
  _Matrix3_setColumn,
);
const _flaxBinding549 = FlaxInstanceMethod.plain(
  _flaxBinding456,
  _flaxBinding517,
  _Matrix3_getColumn,
);
const _flaxBinding550 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding534,
  _Matrix3_clone,
);
const _flaxBinding551 = FlaxInstanceMethod.plain(
  _flaxBinding535,
  _flaxBinding534,
  _Matrix3_copyInto,
);
const _flaxBinding552 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxVoidType,
  _Matrix3_setZero,
);
const _flaxBinding553 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxVoidType,
  _Matrix3_setIdentity,
);
const _flaxBinding554 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding534,
  _Matrix3_transposed,
);
const _flaxBinding555 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxVoidType,
  _Matrix3_transpose,
);
const _flaxBinding556 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding534,
  _Matrix3_absolute,
);
const _flaxBinding557 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxDoubleType,
  _Matrix3_determinant,
);
const _flaxBinding558 = <FlaxParameter>[
  FlaxParameter.required("i", flaxIntType),
  FlaxParameter.required("v", _flaxBinding517),
];
const _flaxBinding559 = FlaxInstanceMethod.plain(
  _flaxBinding558,
  flaxDoubleType,
  _Matrix3_dotRow,
);
const _flaxBinding560 = <FlaxParameter>[
  FlaxParameter.required("j", flaxIntType),
  FlaxParameter.required("v", _flaxBinding517),
];
const _flaxBinding561 = FlaxInstanceMethod.plain(
  _flaxBinding560,
  flaxDoubleType,
  _Matrix3_dotColumn,
);
const _flaxBinding562 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxDoubleType,
  _Matrix3_trace,
);
const _flaxBinding563 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxDoubleType,
  _Matrix3_infinityNorm,
);
const _flaxBinding564 = <FlaxParameter>[
  FlaxParameter.required("correct", _flaxBinding534),
];
const _flaxBinding565 = FlaxInstanceMethod.plain(
  _flaxBinding564,
  flaxDoubleType,
  _Matrix3_relativeError,
);
const _flaxBinding566 = FlaxInstanceMethod.plain(
  _flaxBinding564,
  flaxDoubleType,
  _Matrix3_absoluteError,
);
const _flaxBinding567 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxDoubleType,
  _Matrix3_invert,
);
const _flaxBinding568 = FlaxInstanceMethod.plain(
  _flaxBinding535,
  flaxDoubleType,
  _Matrix3_copyInverse,
);
const _flaxBinding569 = <FlaxParameter>[
  FlaxParameter.required("arg", flaxMatrix4Type),
];
const _flaxBinding570 = FlaxInstanceMethod.plain(
  _flaxBinding569,
  flaxVoidType,
  _Matrix3_copyNormalMatrix,
);
const _flaxBinding571 = FlaxInstanceMethod.plain(
  _flaxBinding477,
  flaxVoidType,
  _Matrix3_setRotationX,
);
const _flaxBinding572 = FlaxInstanceMethod.plain(
  _flaxBinding477,
  flaxVoidType,
  _Matrix3_setRotationY,
);
const _flaxBinding573 = FlaxInstanceMethod.plain(
  _flaxBinding477,
  flaxVoidType,
  _Matrix3_setRotationZ,
);
const _flaxBinding574 = FlaxInstanceMethod.plain(
  _flaxBinding479,
  flaxVoidType,
  _Matrix3_scaleAdjoint,
);
const _flaxBinding575 = FlaxInstanceMethod.plain(
  _flaxBinding540,
  _flaxBinding517,
  _Matrix3_absoluteRotate,
);
const _flaxBinding576 = FlaxInstanceMethod.plain(
  _flaxBinding447,
  _flaxBinding426,
  _Matrix3_absoluteRotate2,
);
const _flaxBinding577 = FlaxInstanceMethod.plain(
  _flaxBinding447,
  _flaxBinding426,
  _Matrix3_transform2,
);
const _flaxBinding578 = FlaxInstanceMethod.plain(
  _flaxBinding479,
  flaxVoidType,
  _Matrix3_scale,
);
const _flaxBinding579 = FlaxInstanceMethod.plain(
  _flaxBinding479,
  _flaxBinding534,
  _Matrix3_scaled,
);
const _flaxBinding580 = <FlaxParameter>[
  FlaxParameter.required("o", _flaxBinding534),
];
const _flaxBinding581 = FlaxInstanceMethod.plain(
  _flaxBinding580,
  flaxVoidType,
  _Matrix3_add,
);
const _flaxBinding582 = FlaxInstanceMethod.plain(
  _flaxBinding580,
  flaxVoidType,
  _Matrix3_sub,
);
const _flaxBinding583 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxVoidType,
  _Matrix3_negate,
);
const _flaxBinding584 = FlaxInstanceMethod.plain(
  _flaxBinding535,
  flaxVoidType,
  _Matrix3_multiply,
);
const _flaxBinding585 = FlaxInstanceMethod.plain(
  _flaxBinding535,
  _flaxBinding534,
  _Matrix3_multiplied,
);
const _flaxBinding586 = FlaxInstanceMethod.plain(
  _flaxBinding535,
  flaxVoidType,
  _Matrix3_transposeMultiply,
);
const _flaxBinding587 = FlaxInstanceMethod.plain(
  _flaxBinding535,
  flaxVoidType,
  _Matrix3_multiplyTranspose,
);
const _flaxBinding588 = FlaxInstanceMethod.plain(
  _flaxBinding540,
  _flaxBinding517,
  _Matrix3_transform,
);
const _flaxBinding589 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:Vector3",
  nullable: true,
);
const _flaxBinding590 = <FlaxParameter>[
  FlaxParameter.required("arg", _flaxBinding517),
  FlaxParameter("out", _flaxBinding589, required: false),
];
const _flaxBinding591 = FlaxInstanceMethod.plain(
  _flaxBinding590,
  _flaxBinding517,
  _Matrix3_transformed,
);
const _flaxBinding592 = FlaxInstanceMethod.plain(
  _flaxBinding497,
  flaxVoidType,
  _Matrix3_copyIntoArray,
);
const _flaxBinding593 = FlaxInstanceMethod.plain(
  _flaxBinding501,
  flaxVoidType,
  _Matrix3_copyFromArray,
);
const _flaxBinding594 = FlaxInstanceMethod.plain(
  _flaxBinding501,
  _flaxBinding500,
  _Matrix3_applyToVector3Array,
);
const _flaxBinding595 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxBoolType,
  _Matrix3_isIdentity,
);
const _flaxBinding596 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxBoolType,
  _Matrix3_isZero,
);
const _flaxBinding597 = FlaxInstanceMethod.plain(
  _flaxBinding503,
  flaxDoubleType,
  _Matrix3_operatorGetIndex,
);
const _flaxBinding598 = FlaxInstanceMethod.plain(
  _flaxBinding505,
  flaxVoidType,
  _Matrix3_operatorSetIndex,
);
const _flaxBinding599 = FlaxInstanceMethod.plain(
  _flaxBinding535,
  _flaxBinding534,
  _Matrix3_operatorAdd,
);
const _flaxBinding600 = FlaxInstanceMethod.plain(
  _flaxBinding535,
  _flaxBinding534,
  _Matrix3_operatorSubtract,
);
const _flaxBinding601 = FlaxInstanceMethod.plain(
  _flaxBinding509,
  flaxNullableAnyType,
  _Matrix3_operatorMultiply,
);
const _flaxBinding602 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding534,
  _Matrix3_operatorNegate,
);
const _flaxBinding603 = <FlaxParameter>[
  FlaxParameter.required("other", _flaxBinding534),
];
const _flaxBinding604 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:Matrix3",
  [
    _flaxBinding515,
    _flaxBinding516,
    _flaxBinding518,
    _flaxBinding519,
    _flaxBinding520,
    _flaxBinding521,
    _flaxBinding522,
    _flaxBinding523,
  ],
  {
    "index": _flaxBinding527,
    "entry": _flaxBinding528,
    "setEntry": _flaxBinding529,
    "setValues": _flaxBinding531,
    "setColumns": _flaxBinding533,
    "setFrom": _flaxBinding536,
    "setOuter": _flaxBinding538,
    "splatDiagonal": _flaxBinding539,
    "setDiagonal": _flaxBinding541,
    "setUpper2x2": _flaxBinding542,
    "toString": _flaxBinding543,
    "setRow": _flaxBinding545,
    "getRow": _flaxBinding546,
    "setColumn": _flaxBinding548,
    "getColumn": _flaxBinding549,
    "clone": _flaxBinding550,
    "copyInto": _flaxBinding551,
    "setZero": _flaxBinding552,
    "setIdentity": _flaxBinding553,
    "transposed": _flaxBinding554,
    "transpose": _flaxBinding555,
    "absolute": _flaxBinding556,
    "determinant": _flaxBinding557,
    "dotRow": _flaxBinding559,
    "dotColumn": _flaxBinding561,
    "trace": _flaxBinding562,
    "infinityNorm": _flaxBinding563,
    "relativeError": _flaxBinding565,
    "absoluteError": _flaxBinding566,
    "invert": _flaxBinding567,
    "copyInverse": _flaxBinding568,
    "copyNormalMatrix": _flaxBinding570,
    "setRotationX": _flaxBinding571,
    "setRotationY": _flaxBinding572,
    "setRotationZ": _flaxBinding573,
    "scaleAdjoint": _flaxBinding574,
    "absoluteRotate": _flaxBinding575,
    "absoluteRotate2": _flaxBinding576,
    "transform2": _flaxBinding577,
    "scale": _flaxBinding578,
    "scaled": _flaxBinding579,
    "add": _flaxBinding581,
    "sub": _flaxBinding582,
    "negate": _flaxBinding583,
    "multiply": _flaxBinding584,
    "multiplied": _flaxBinding585,
    "transposeMultiply": _flaxBinding586,
    "multiplyTranspose": _flaxBinding587,
    "transform": _flaxBinding588,
    "transformed": _flaxBinding591,
    "copyIntoArray": _flaxBinding592,
    "copyFromArray": _flaxBinding593,
    "applyToVector3Array": _flaxBinding594,
    "isIdentity": _flaxBinding595,
    "isZero": _flaxBinding596,
    "operatorGetIndex": _flaxBinding597,
    "operatorSetIndex": _flaxBinding598,
    "operatorAdd": _flaxBinding599,
    "operatorSubtract": _flaxBinding600,
    "operatorMultiply": _flaxBinding601,
    "operatorNegate": _flaxBinding602,
  },
  constructors: {
    "": _flaxBinding530,
    "fromList": _flaxBinding512,
    "zero": _flaxBinding35,
    "identity": _flaxBinding35,
    "copy": _flaxBinding603,
    "columns": _flaxBinding532,
    "outer": _flaxBinding537,
    "rotationX": _flaxBinding477,
    "rotationY": _flaxBinding477,
    "rotationZ": _flaxBinding477,
  },
  create: _createMatrix3,
  matches: _isMatrix3,
  setters: [_flaxBinding524, _flaxBinding525, _flaxBinding526],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding605 = FlaxGetter.plain(
  "point0",
  _flaxBinding517,
  _Quad_point0,
);
const _flaxBinding606 = FlaxGetter.plain(
  "point1",
  _flaxBinding517,
  _Quad_point1,
);
const _flaxBinding607 = FlaxGetter.plain(
  "point2",
  _flaxBinding517,
  _Quad_point2,
);
const _flaxBinding608 = FlaxGetter.plain(
  "point3",
  _flaxBinding517,
  _Quad_point3,
);
const _flaxBinding609 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:Quad",
);
const _flaxBinding610 = <FlaxParameter>[
  FlaxParameter.required("other", _flaxBinding609),
];
const _flaxBinding611 = FlaxInstanceMethod.plain(
  _flaxBinding610,
  flaxVoidType,
  _Quad_copyFrom,
);
const _flaxBinding612 = <FlaxParameter>[
  FlaxParameter.required("normal", _flaxBinding517),
];
const _flaxBinding613 = FlaxInstanceMethod.plain(
  _flaxBinding612,
  flaxVoidType,
  _Quad_copyNormalInto,
);
const _flaxBinding614 = <FlaxParameter>[
  FlaxParameter.required("t", flaxMatrix4Type),
];
const _flaxBinding615 = FlaxInstanceMethod.plain(
  _flaxBinding614,
  flaxVoidType,
  _Quad_transform,
);
const _flaxBinding616 = <FlaxParameter>[
  FlaxParameter.required("offset", _flaxBinding517),
];
const _flaxBinding617 = FlaxInstanceMethod.plain(
  _flaxBinding616,
  flaxVoidType,
  _Quad_translate,
);
const _flaxBinding618 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxStringType,
  _Quad_toString,
);
const _flaxBinding619 = <FlaxParameter>[
  FlaxParameter.required("point0", _flaxBinding517),
  FlaxParameter.required("point1", _flaxBinding517),
  FlaxParameter.required("point2", _flaxBinding517),
  FlaxParameter.required("point3", _flaxBinding517),
];
const _flaxBinding620 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:Quad",
  [_flaxBinding605, _flaxBinding606, _flaxBinding607, _flaxBinding608],
  {
    "copyFrom": _flaxBinding611,
    "copyNormalInto": _flaxBinding613,
    "transform": _flaxBinding615,
    "translate": _flaxBinding617,
    "toString": _flaxBinding618,
  },
  constructors: {
    "": _flaxBinding35,
    "copy": _flaxBinding610,
    "points": _flaxBinding619,
  },
  create: _createQuad,
  matches: _isQuad,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding621 = FlaxGetter.plain(
  "storage",
  _flaxBinding423,
  _Quaternion_storage,
);
const _flaxBinding622 = FlaxGetter.plain("x", flaxDoubleType, _Quaternion_x);
const _flaxBinding623 = FlaxGetter.plain("y", flaxDoubleType, _Quaternion_y);
const _flaxBinding624 = FlaxGetter.plain("z", flaxDoubleType, _Quaternion_z);
const _flaxBinding625 = FlaxGetter.plain("w", flaxDoubleType, _Quaternion_w);
const _flaxBinding626 = FlaxGetter.plain(
  "radians",
  flaxDoubleType,
  _Quaternion_radians,
);
const _flaxBinding627 = FlaxGetter.plain(
  "axis",
  _flaxBinding517,
  _Quaternion_axis,
);
const _flaxBinding628 = FlaxGetter.plain(
  "length2",
  flaxDoubleType,
  _Quaternion_length2,
);
const _flaxBinding629 = FlaxGetter.plain(
  "length",
  flaxDoubleType,
  _Quaternion_length,
);
const _flaxBinding630 = FlaxSetter("x", flaxDoubleType, _Quaternion_set_x);
const _flaxBinding631 = FlaxSetter("y", flaxDoubleType, _Quaternion_set_y);
const _flaxBinding632 = FlaxSetter("z", flaxDoubleType, _Quaternion_set_z);
const _flaxBinding633 = FlaxSetter("w", flaxDoubleType, _Quaternion_set_w);
const _flaxBinding634 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:Quaternion",
);
const _flaxBinding635 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding634,
  _Quaternion_clone,
);
const _flaxBinding636 = <FlaxParameter>[
  FlaxParameter.required("source", _flaxBinding634),
];
const _flaxBinding637 = FlaxInstanceMethod.plain(
  _flaxBinding636,
  flaxVoidType,
  _Quaternion_setFrom,
);
const _flaxBinding638 = <FlaxParameter>[
  FlaxParameter.required("x", flaxDoubleType),
  FlaxParameter.required("y", flaxDoubleType),
  FlaxParameter.required("z", flaxDoubleType),
  FlaxParameter.required("w", flaxDoubleType),
];
const _flaxBinding639 = FlaxInstanceMethod.plain(
  _flaxBinding638,
  flaxVoidType,
  _Quaternion_setValues,
);
const _flaxBinding640 = <FlaxParameter>[
  FlaxParameter.required("axis", _flaxBinding517),
  FlaxParameter.required("radians", flaxDoubleType),
];
const _flaxBinding641 = FlaxInstanceMethod.plain(
  _flaxBinding640,
  flaxVoidType,
  _Quaternion_setAxisAngle,
);
const _flaxBinding642 = <FlaxParameter>[
  FlaxParameter.required("rotationMatrix", _flaxBinding534),
];
const _flaxBinding643 = FlaxInstanceMethod.plain(
  _flaxBinding642,
  flaxVoidType,
  _Quaternion_setFromRotation,
);
const _flaxBinding644 = <FlaxParameter>[
  FlaxParameter.required("a", _flaxBinding517),
  FlaxParameter.required("b", _flaxBinding517),
];
const _flaxBinding645 = FlaxInstanceMethod.plain(
  _flaxBinding644,
  flaxVoidType,
  _Quaternion_setFromTwoVectors,
);
const _flaxBinding646 = <FlaxParameter>[
  FlaxParameter.required("q", _flaxBinding634),
  FlaxParameter.required("omega", _flaxBinding517),
];
const _flaxBinding647 = FlaxInstanceMethod.plain(
  _flaxBinding646,
  flaxVoidType,
  _Quaternion_setDQ,
);
const _flaxBinding648 = <FlaxParameter>[
  FlaxParameter.required("yaw", flaxDoubleType),
  FlaxParameter.required("pitch", flaxDoubleType),
  FlaxParameter.required("roll", flaxDoubleType),
];
const _flaxBinding649 = FlaxInstanceMethod.plain(
  _flaxBinding648,
  flaxVoidType,
  _Quaternion_setEuler,
);
const _flaxBinding650 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxDoubleType,
  _Quaternion_normalize,
);
const _flaxBinding651 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxVoidType,
  _Quaternion_negate,
);
const _flaxBinding652 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxVoidType,
  _Quaternion_conjugate,
);
const _flaxBinding653 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxVoidType,
  _Quaternion_inverse,
);
const _flaxBinding654 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding634,
  _Quaternion_normalized,
);
const _flaxBinding655 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding634,
  _Quaternion_negated,
);
const _flaxBinding656 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding634,
  _Quaternion_conjugated,
);
const _flaxBinding657 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding634,
  _Quaternion_inverted,
);
const _flaxBinding658 = <FlaxParameter>[
  FlaxParameter.required("v", _flaxBinding517),
];
const _flaxBinding659 = FlaxInstanceMethod.plain(
  _flaxBinding658,
  _flaxBinding517,
  _Quaternion_rotated,
);
const _flaxBinding660 = FlaxInstanceMethod.plain(
  _flaxBinding658,
  _flaxBinding517,
  _Quaternion_rotate,
);
const _flaxBinding661 = <FlaxParameter>[
  FlaxParameter.required("arg", _flaxBinding634),
];
const _flaxBinding662 = FlaxInstanceMethod.plain(
  _flaxBinding661,
  flaxVoidType,
  _Quaternion_add,
);
const _flaxBinding663 = FlaxInstanceMethod.plain(
  _flaxBinding661,
  flaxVoidType,
  _Quaternion_sub,
);
const _flaxBinding664 = FlaxInstanceMethod.plain(
  _flaxBinding479,
  flaxVoidType,
  _Quaternion_scale,
);
const _flaxBinding665 = FlaxInstanceMethod.plain(
  _flaxBinding479,
  _flaxBinding634,
  _Quaternion_scaled,
);
const _flaxBinding666 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding534,
  _Quaternion_asRotationMatrix,
);
const _flaxBinding667 = FlaxInstanceMethod.plain(
  _flaxBinding642,
  _flaxBinding534,
  _Quaternion_copyRotationInto,
);
const _flaxBinding668 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxStringType,
  _Quaternion_toString,
);
const _flaxBinding669 = <FlaxParameter>[
  FlaxParameter.required("correct", _flaxBinding634),
];
const _flaxBinding670 = FlaxInstanceMethod.plain(
  _flaxBinding669,
  flaxDoubleType,
  _Quaternion_relativeError,
);
const _flaxBinding671 = FlaxInstanceMethod.plain(
  _flaxBinding669,
  flaxDoubleType,
  _Quaternion_absoluteError,
);
const _flaxBinding672 = FlaxInstanceMethod.plain(
  _flaxBinding503,
  flaxDoubleType,
  _Quaternion_operatorGetIndex,
);
const _flaxBinding673 = <FlaxParameter>[
  FlaxParameter.required("i", flaxIntType),
  FlaxParameter.required("arg", flaxDoubleType),
];
const _flaxBinding674 = FlaxInstanceMethod.plain(
  _flaxBinding673,
  flaxVoidType,
  _Quaternion_operatorSetIndex,
);
const _flaxBinding675 = <FlaxParameter>[
  FlaxParameter.required("other", _flaxBinding634),
];
const _flaxBinding676 = FlaxInstanceMethod.plain(
  _flaxBinding675,
  _flaxBinding634,
  _Quaternion_operatorAdd,
);
const _flaxBinding677 = FlaxInstanceMethod.plain(
  _flaxBinding675,
  _flaxBinding634,
  _Quaternion_operatorSubtract,
);
const _flaxBinding678 = FlaxInstanceMethod.plain(
  _flaxBinding675,
  _flaxBinding634,
  _Quaternion_operatorMultiply,
);
const _flaxBinding679 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding634,
  _Quaternion_operatorNegate,
);
const _flaxBinding680 = <FlaxParameter>[
  FlaxParameter.required("axis", _flaxBinding517),
  FlaxParameter.required("angle", flaxDoubleType),
];
const _flaxBinding681 = <FlaxParameter>[
  FlaxParameter.required("original", _flaxBinding634),
];
const _flaxBinding682 = <FlaxParameter>[
  FlaxParameter.required("_qStorage", _flaxBinding423),
];
const _flaxBinding683 = FlaxTypeRef("ByteBuffer");
const _flaxBinding684 = <FlaxParameter>[
  FlaxParameter.required("buffer", _flaxBinding683),
  FlaxParameter.required("offset", flaxIntType),
];
const _flaxBinding685 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:Quaternion",
  [
    _flaxBinding621,
    _flaxBinding622,
    _flaxBinding623,
    _flaxBinding624,
    _flaxBinding625,
    _flaxBinding626,
    _flaxBinding627,
    _flaxBinding628,
    _flaxBinding629,
  ],
  {
    "clone": _flaxBinding635,
    "setFrom": _flaxBinding637,
    "setValues": _flaxBinding639,
    "setAxisAngle": _flaxBinding641,
    "setFromRotation": _flaxBinding643,
    "setFromTwoVectors": _flaxBinding645,
    "setDQ": _flaxBinding647,
    "setEuler": _flaxBinding649,
    "normalize": _flaxBinding650,
    "negate": _flaxBinding651,
    "conjugate": _flaxBinding652,
    "inverse": _flaxBinding653,
    "normalized": _flaxBinding654,
    "negated": _flaxBinding655,
    "conjugated": _flaxBinding656,
    "inverted": _flaxBinding657,
    "rotated": _flaxBinding659,
    "rotate": _flaxBinding660,
    "add": _flaxBinding662,
    "sub": _flaxBinding663,
    "scale": _flaxBinding664,
    "scaled": _flaxBinding665,
    "asRotationMatrix": _flaxBinding666,
    "copyRotationInto": _flaxBinding667,
    "toString": _flaxBinding668,
    "relativeError": _flaxBinding670,
    "absoluteError": _flaxBinding671,
    "operatorGetIndex": _flaxBinding672,
    "operatorSetIndex": _flaxBinding674,
    "operatorAdd": _flaxBinding676,
    "operatorSubtract": _flaxBinding677,
    "operatorMultiply": _flaxBinding678,
    "operatorNegate": _flaxBinding679,
  },
  constructors: {
    "": _flaxBinding638,
    "fromRotation": _flaxBinding642,
    "axisAngle": _flaxBinding680,
    "fromTwoVectors": _flaxBinding644,
    "copy": _flaxBinding681,
    "identity": _flaxBinding35,
    "dq": _flaxBinding646,
    "euler": _flaxBinding648,
    "fromFloat64List": _flaxBinding682,
    "fromBuffer": _flaxBinding684,
  },
  create: _createQuaternion,
  matches: _isQuaternion,
  setters: [_flaxBinding630, _flaxBinding631, _flaxBinding632, _flaxBinding633],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding686 = FlaxGetter.plain(
  "path",
  flaxStringType,
  _RandomAccessFile_path,
);
const _flaxBinding687 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding313,
  _RandomAccessFile_close,
);
const _flaxBinding688 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxVoidType,
  _RandomAccessFile_closeSync,
);
const _flaxBinding689 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding95,
  _RandomAccessFile_readByte,
);
const _flaxBinding690 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxIntType,
  _RandomAccessFile_readByteSync,
);
const _flaxBinding691 = FlaxInstanceMethod.plain(
  _flaxBinding328,
  _flaxBinding117,
  _RandomAccessFile_read,
);
const _flaxBinding692 = FlaxInstanceMethod.plain(
  _flaxBinding328,
  flaxUint8ListType,
  _RandomAccessFile_readSync,
);
const _flaxBinding693 = <FlaxParameter>[
  FlaxParameter.required("buffer", _flaxBinding2),
  FlaxParameter("start", flaxIntType, required: false, defaultValue: 0),
  FlaxParameter("end", flaxNullableIntType, required: false),
];
const _flaxBinding694 = FlaxInstanceMethod.plain(
  _flaxBinding693,
  _flaxBinding95,
  _RandomAccessFile_readInto,
);
const _flaxBinding695 = FlaxInstanceMethod.plain(
  _flaxBinding693,
  flaxIntType,
  _RandomAccessFile_readIntoSync,
);
const _flaxBinding696 = <FlaxParameter>[
  FlaxParameter.required("value", flaxIntType),
];
const _flaxBinding697 = FlaxInstanceMethod.plain(
  _flaxBinding696,
  _flaxBinding112,
  _RandomAccessFile_writeByte,
);
const _flaxBinding698 = FlaxInstanceMethod.plain(
  _flaxBinding696,
  flaxIntType,
  _RandomAccessFile_writeByteSync,
);
const _flaxBinding699 = FlaxInstanceMethod.plain(
  _flaxBinding693,
  _flaxBinding112,
  _RandomAccessFile_writeFrom,
);
const _flaxBinding700 = FlaxInstanceMethod.plain(
  _flaxBinding693,
  flaxVoidType,
  _RandomAccessFile_writeFromSync,
);
const _flaxBinding701 = <FlaxParameter>[
  FlaxParameter.required("string", flaxStringType),
  FlaxParameter(
    "encoding",
    _flaxBinding120,
    required: false,
    omitWhenAbsent: true,
  ),
];
const _flaxBinding702 = FlaxInstanceMethod.plain(
  _flaxBinding701,
  _flaxBinding112,
  _RandomAccessFile_writeString,
);
const _flaxBinding703 = FlaxInstanceMethod.plain(
  _flaxBinding701,
  flaxVoidType,
  _RandomAccessFile_writeStringSync,
);
const _flaxBinding704 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding95,
  _RandomAccessFile_position,
);
const _flaxBinding705 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxIntType,
  _RandomAccessFile_positionSync,
);
const _flaxBinding706 = <FlaxParameter>[
  FlaxParameter.required("position", flaxIntType),
];
const _flaxBinding707 = FlaxInstanceMethod.plain(
  _flaxBinding706,
  _flaxBinding112,
  _RandomAccessFile_setPosition,
);
const _flaxBinding708 = FlaxInstanceMethod.plain(
  _flaxBinding706,
  flaxVoidType,
  _RandomAccessFile_setPositionSync,
);
const _flaxBinding709 = <FlaxParameter>[
  FlaxParameter.required("length", flaxIntType),
];
const _flaxBinding710 = FlaxInstanceMethod.plain(
  _flaxBinding709,
  _flaxBinding112,
  _RandomAccessFile_truncate,
);
const _flaxBinding711 = FlaxInstanceMethod.plain(
  _flaxBinding709,
  flaxVoidType,
  _RandomAccessFile_truncateSync,
);
const _flaxBinding712 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding95,
  _RandomAccessFile_length,
);
const _flaxBinding713 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxIntType,
  _RandomAccessFile_lengthSync,
);
const _flaxBinding714 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding112,
  _RandomAccessFile_flush,
);
const _flaxBinding715 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxVoidType,
  _RandomAccessFile_flushSync,
);
const _flaxBinding716 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:FileLock",
);
const _flaxBinding717 = <FlaxParameter>[
  FlaxParameter("mode", _flaxBinding716, required: false, omitWhenAbsent: true),
  FlaxParameter(
    "start",
    flaxIntType,
    required: false,
    defaultValue: 0,
    omitWhenAbsent: true,
  ),
  FlaxParameter(
    "end",
    flaxIntType,
    required: false,
    defaultValue: -1,
    omitWhenAbsent: true,
  ),
];
const _flaxBinding718 = FlaxInstanceMethod.plain(
  _flaxBinding717,
  _flaxBinding112,
  _RandomAccessFile_lock,
);
const _flaxBinding719 = FlaxInstanceMethod.plain(
  _flaxBinding717,
  flaxVoidType,
  _RandomAccessFile_lockSync,
);
const _flaxBinding720 = <FlaxParameter>[
  FlaxParameter("start", flaxIntType, required: false, defaultValue: 0),
  FlaxParameter("end", flaxIntType, required: false, defaultValue: -1),
];
const _flaxBinding721 = FlaxInstanceMethod.plain(
  _flaxBinding720,
  _flaxBinding112,
  _RandomAccessFile_unlock,
);
const _flaxBinding722 = FlaxInstanceMethod.plain(
  _flaxBinding720,
  flaxVoidType,
  _RandomAccessFile_unlockSync,
);
const _flaxBinding723 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxStringType,
  _RandomAccessFile_toString,
);
const _flaxBinding724 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:RandomAccessFile",
  [_flaxBinding686],
  {
    "close": _flaxBinding687,
    "closeSync": _flaxBinding688,
    "readByte": _flaxBinding689,
    "readByteSync": _flaxBinding690,
    "read": _flaxBinding691,
    "readSync": _flaxBinding692,
    "readInto": _flaxBinding694,
    "readIntoSync": _flaxBinding695,
    "writeByte": _flaxBinding697,
    "writeByteSync": _flaxBinding698,
    "writeFrom": _flaxBinding699,
    "writeFromSync": _flaxBinding700,
    "writeString": _flaxBinding702,
    "writeStringSync": _flaxBinding703,
    "position": _flaxBinding704,
    "positionSync": _flaxBinding705,
    "setPosition": _flaxBinding707,
    "setPositionSync": _flaxBinding708,
    "truncate": _flaxBinding710,
    "truncateSync": _flaxBinding711,
    "length": _flaxBinding712,
    "lengthSync": _flaxBinding713,
    "flush": _flaxBinding714,
    "flushSync": _flaxBinding715,
    "lock": _flaxBinding718,
    "lockSync": _flaxBinding719,
    "unlock": _flaxBinding721,
    "unlockSync": _flaxBinding722,
    "toString": _flaxBinding723,
  },
  constructors: {},
  create: _createRandomAccessFile,
  matches: _isRandomAccessFile,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding725 = FlaxGetter.plain(
  "level",
  flaxIntType,
  _RawSocketOption_level,
);
const _flaxBinding726 = FlaxGetter.plain(
  "option",
  flaxIntType,
  _RawSocketOption_option,
);
const _flaxBinding727 = FlaxGetter.plain(
  "value",
  flaxUint8ListType,
  _RawSocketOption_value,
);
const _flaxBinding728 = <FlaxParameter>[
  FlaxParameter.required("level", flaxIntType),
  FlaxParameter.required("option", flaxIntType),
  FlaxParameter.required("value", flaxUint8ListType),
];
const _flaxBinding729 = <FlaxParameter>[
  FlaxParameter.required("level", flaxIntType),
  FlaxParameter.required("option", flaxIntType),
  FlaxParameter.required("value", flaxIntType),
];
const _flaxBinding730 = <FlaxParameter>[
  FlaxParameter.required("level", flaxIntType),
  FlaxParameter.required("option", flaxIntType),
  FlaxParameter.required("value", flaxBoolType),
];
const _flaxBinding731 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:RawSocketOption",
  [_flaxBinding725, _flaxBinding726, _flaxBinding727],
  {},
  constructors: {
    "": _flaxBinding728,
    "fromInt": _flaxBinding729,
    "fromBool": _flaxBinding730,
  },
  create: _createRawSocketOption,
  matches: _isRawSocketOption,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding732 = FlaxGetter.plain(
  "statusCode",
  flaxIntType,
  _RedirectInfo_statusCode,
);
const _flaxBinding733 = FlaxGetter.plain(
  "method",
  flaxStringType,
  _RedirectInfo_method,
);
const _flaxBinding734 = FlaxGetter.plain(
  "location",
  _flaxBinding41,
  _RedirectInfo_location,
);
const _flaxBinding735 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:RedirectInfo",
  [_flaxBinding732, _flaxBinding733, _flaxBinding734],
  {},
  constructors: {},
  create: _createRedirectInfo,
  matches: _isRedirectInfo,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding736 = FlaxGetter.plain("done", _flaxBinding101, _Socket_done);
const _flaxBinding737 = FlaxGetter.plain("port", flaxIntType, _Socket_port);
const _flaxBinding738 = FlaxGetter.plain(
  "remotePort",
  flaxIntType,
  _Socket_remotePort,
);
const _flaxBinding739 = FlaxGetter.plain(
  "address",
  _flaxBinding351,
  _Socket_address,
);
const _flaxBinding740 = FlaxGetter.plain(
  "remoteAddress",
  _flaxBinding351,
  _Socket_remoteAddress,
);
const _flaxBinding741 = FlaxGetter.plain(
  "isBroadcast",
  flaxBoolType,
  _Socket_isBroadcast,
);
const _flaxBinding742 = FlaxGetter.plain(
  "length",
  _flaxBinding95,
  _Socket_length,
);
const _flaxBinding743 = FlaxGetter.plain(
  "isEmpty",
  _flaxBinding48,
  _Socket_isEmpty,
);
const _flaxBinding744 = FlaxGetter.plain(
  "first",
  _flaxBinding117,
  _Socket_first,
);
const _flaxBinding745 = FlaxGetter.plain("last", _flaxBinding117, _Socket_last);
const _flaxBinding746 = FlaxGetter.plain(
  "single",
  _flaxBinding117,
  _Socket_single,
);
const _flaxBinding747 = FlaxGetter.plain(
  "encoding",
  _flaxBinding120,
  _Socket_encoding,
);
const _flaxBinding748 = FlaxSetter(
  "encoding",
  _flaxBinding120,
  _Socket_set_encoding,
);
const _flaxBinding749 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding101,
  _Socket_close,
);
const _flaxBinding750 = FlaxInstanceMethod.plain(
  _flaxBinding231,
  flaxVoidType,
  _Socket_add,
);
const _flaxBinding751 = FlaxInstanceMethod.plain(
  _flaxBinding234,
  flaxVoidType,
  _Socket_addError,
);
const _flaxBinding752 = FlaxInstanceMethod.plain(
  _flaxBinding236,
  _flaxBinding101,
  _Socket_addStream,
);
const _flaxBinding753 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxVoidType,
  _Socket_destroy,
);
const _flaxBinding754 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:SocketOption",
);
const _flaxBinding755 = <FlaxParameter>[
  FlaxParameter.required("option", _flaxBinding754),
  FlaxParameter.required("enabled", flaxBoolType),
];
const _flaxBinding756 = FlaxInstanceMethod.plain(
  _flaxBinding755,
  flaxBoolType,
  _Socket_setOption,
);
const _flaxBinding757 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:RawSocketOption",
);
const _flaxBinding758 = <FlaxParameter>[
  FlaxParameter.required("option", _flaxBinding757),
];
const _flaxBinding759 = FlaxInstanceMethod.plain(
  _flaxBinding758,
  flaxUint8ListType,
  _Socket_getRawOption,
);
const _flaxBinding760 = FlaxInstanceMethod.plain(
  _flaxBinding758,
  flaxVoidType,
  _Socket_setRawOption,
);
const _flaxBinding761 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:StreamSubscription",
  dartType: FlaxDartTypes.typeOf<api5.StreamSubscription<api2.Uint8List>>,
);
const _flaxBinding762 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("subscription", _flaxBinding761)],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid1<api5.StreamSubscription<api2.Uint8List>>,
  id: "callback:<>(p:r:subscription:object:flax.core/flutter#type:StreamSubscription<Uint8List:>)->void:",
  invoke:
      FlaxCallbackAdapters.invokeVoid1<api5.StreamSubscription<api2.Uint8List>>,
  matches: FlaxCallbackAdapters
      .matchesVoid1<api5.StreamSubscription<api2.Uint8List>>,
);
const _flaxBinding763 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding762,
);
const _flaxBinding764 = <FlaxParameter>[
  FlaxParameter("onCancel", _flaxBinding763, required: false),
  FlaxParameter("onListen", _flaxBinding763, required: false),
];
const _flaxBinding765 = FlaxTypeRef(
  "stream",
  id: "flax.core/flutter#type:Stream",
  dartType: FlaxDartTypes.typeOf<api5.Stream<api2.Uint8List>>,
  item: flaxUint8ListType,
  stream: FlaxStreamBinding(
    "stream:flax.core/flutter#type:Stream[Uint8List:]",
    _stream3Matches,
    _stream3Adapt,
  ),
);
const _flaxBinding766 = FlaxInstanceMethod.plain(
  _flaxBinding764,
  _flaxBinding765,
  _Socket_asBroadcastStream,
);
const _flaxBinding767 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("event", flaxUint8ListType)],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid1<api2.Uint8List>,
  id: "callback:<>(p:r:event:Uint8List:)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api2.Uint8List>,
  matches: FlaxCallbackAdapters.matchesVoid1<api2.Uint8List>,
);
const _flaxBinding768 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding767,
);
const _flaxBinding769 = <FlaxParameter>[
  FlaxParameter.required("onData", _flaxBinding768),
  FlaxParameter("cancelOnError", flaxNullableBoolType, required: false),
  FlaxParameter("onDone", flaxVoidNullableCallbackType, required: false),
  FlaxParameter("onError", _flaxBinding287, required: false),
];
const _flaxBinding770 = FlaxInstanceMethod.plain(
  _flaxBinding769,
  _flaxBinding761,
  _Socket_listen,
);
const _flaxBinding771 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("event", flaxUint8ListType)],
  flaxBoolType,
  FlaxCallbackAdapters.wrap1<api2.Uint8List, bool>,
  id: "callback:<>(p:r:event:Uint8List:)->bool:",
  invoke: FlaxCallbackAdapters.invoke1<api2.Uint8List, bool>,
  matches: FlaxCallbackAdapters.matches1<api2.Uint8List, bool>,
);
const _flaxBinding772 = FlaxTypeRef("callback", callback: _flaxBinding771);
const _flaxBinding773 = <FlaxParameter>[
  FlaxParameter.required("test", _flaxBinding772),
];
const _flaxBinding774 = FlaxInstanceMethod.plain(
  _flaxBinding773,
  _flaxBinding765,
  _Socket_where,
);
const _flaxBinding775 = FlaxInstanceMethod.plain(
  _flaxBinding298,
  _flaxBinding765,
  _Socket_handleError,
);
const _flaxBinding776 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:StreamConsumer",
  dartType: FlaxDartTypes.typeOf<api5.StreamConsumer<api2.Uint8List>>,
);
const _flaxBinding777 = <FlaxParameter>[
  FlaxParameter.required("streamConsumer", _flaxBinding776),
];
const _flaxBinding778 = FlaxInstanceMethod.plain(
  _flaxBinding777,
  _flaxBinding101,
  _Socket_pipe,
);
const _flaxBinding779 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter.plain("previous", flaxUint8ListType),
    FlaxCallbackParameter.plain("element", flaxUint8ListType),
  ],
  flaxUint8ListType,
  FlaxCallbackAdapters.wrap2<api2.Uint8List, api2.Uint8List, api2.Uint8List>,
  id: "callback:<>(p:r:previous:Uint8List:,p:r:element:Uint8List:)->Uint8List:",
  invoke: FlaxCallbackAdapters
      .invoke2<api2.Uint8List, api2.Uint8List, api2.Uint8List>,
  matches: FlaxCallbackAdapters
      .matches2<api2.Uint8List, api2.Uint8List, api2.Uint8List>,
);
const _flaxBinding780 = FlaxTypeRef("callback", callback: _flaxBinding779);
const _flaxBinding781 = <FlaxParameter>[
  FlaxParameter.required("combine", _flaxBinding780),
];
const _flaxBinding782 = FlaxInstanceMethod.plain(
  _flaxBinding781,
  _flaxBinding117,
  _Socket_reduce,
);
const _flaxBinding783 = FlaxInstanceMethod.plain(
  _flaxBinding307,
  _flaxBinding4,
  _Socket_join,
);
const _flaxBinding784 = FlaxInstanceMethod.plain(
  _flaxBinding309,
  _flaxBinding48,
  _Socket_contains,
);
const _flaxBinding785 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("element", flaxUint8ListType)],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid1<api2.Uint8List>,
  id: "callback:<>(p:r:element:Uint8List:)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api2.Uint8List>,
  matches: FlaxCallbackAdapters.matchesVoid1<api2.Uint8List>,
);
const _flaxBinding786 = FlaxTypeRef("callback", callback: _flaxBinding785);
const _flaxBinding787 = <FlaxParameter>[
  FlaxParameter.required("action", _flaxBinding786),
];
const _flaxBinding788 = FlaxInstanceMethod.plain(
  _flaxBinding787,
  _flaxBinding313,
  _Socket_forEach,
);
const _flaxBinding789 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("element", flaxUint8ListType)],
  flaxBoolType,
  FlaxCallbackAdapters.wrap1<api2.Uint8List, bool>,
  id: "callback:<>(p:r:element:Uint8List:)->bool:",
  invoke: FlaxCallbackAdapters.invoke1<api2.Uint8List, bool>,
  matches: FlaxCallbackAdapters.matches1<api2.Uint8List, bool>,
);
const _flaxBinding790 = FlaxTypeRef("callback", callback: _flaxBinding789);
const _flaxBinding791 = <FlaxParameter>[
  FlaxParameter.required("test", _flaxBinding790),
];
const _flaxBinding792 = FlaxInstanceMethod.plain(
  _flaxBinding791,
  _flaxBinding48,
  _Socket_every,
);
const _flaxBinding793 = FlaxInstanceMethod.plain(
  _flaxBinding791,
  _flaxBinding48,
  _Socket_any,
);
const _flaxBinding794 = FlaxTypeRef(
  "iterable",
  item: flaxUint8ListType,
  collection: FlaxCollectionBinding(
    "iterable:[Uint8List:]",
    _collection19Create,
    _collection19Matches,
    restore: _collection19Restore,
  ),
);
const _flaxBinding795 = FlaxTypeRef(
  "list",
  item: flaxUint8ListType,
  collection: FlaxCollectionBinding(
    "list:[Uint8List:]",
    _collection18Create,
    _collection18Matches,
  ),
  iterable: _flaxBinding794,
);
const _flaxBinding796 = FlaxTypeRef(
  "future",
  item: _flaxBinding795,
  future: FlaxFutureBinding("list:[Uint8List:]", _future21Adapt),
);
const _flaxBinding797 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding796,
  _Socket_toList,
);
const _flaxBinding798 = FlaxTypeRef(
  "set",
  item: flaxUint8ListType,
  collection: FlaxCollectionBinding(
    "set:[Uint8List:]",
    _collection20Create,
    _collection20Matches,
  ),
  iterable: _flaxBinding794,
);
const _flaxBinding799 = FlaxTypeRef(
  "future",
  item: _flaxBinding798,
  future: FlaxFutureBinding("set:[Uint8List:]", _future22Adapt),
);
const _flaxBinding800 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding799,
  _Socket_toSet,
);
const _flaxBinding801 = FlaxInstanceMethod.plain(
  _flaxBinding328,
  _flaxBinding765,
  _Socket_take,
);
const _flaxBinding802 = FlaxInstanceMethod.plain(
  _flaxBinding791,
  _flaxBinding765,
  _Socket_takeWhile,
);
const _flaxBinding803 = FlaxInstanceMethod.plain(
  _flaxBinding328,
  _flaxBinding765,
  _Socket_skip,
);
const _flaxBinding804 = FlaxInstanceMethod.plain(
  _flaxBinding791,
  _flaxBinding765,
  _Socket_skipWhile,
);
const _flaxBinding805 = FlaxCallbackBinding(
  [
    FlaxCallbackParameter.plain("previous", flaxUint8ListType),
    FlaxCallbackParameter.plain("next", flaxUint8ListType),
  ],
  flaxBoolType,
  FlaxCallbackAdapters.wrap2<api2.Uint8List, api2.Uint8List, bool>,
  id: "callback:<>(p:r:previous:Uint8List:,p:r:next:Uint8List:)->bool:",
  invoke: FlaxCallbackAdapters.invoke2<api2.Uint8List, api2.Uint8List, bool>,
  matches: FlaxCallbackAdapters.matches2<api2.Uint8List, api2.Uint8List, bool>,
);
const _flaxBinding806 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding805,
);
const _flaxBinding807 = <FlaxParameter>[
  FlaxParameter("equals", _flaxBinding806, required: false),
];
const _flaxBinding808 = FlaxInstanceMethod.plain(
  _flaxBinding807,
  _flaxBinding765,
  _Socket_distinct,
);
const _flaxBinding809 = FlaxCallbackBinding(
  [],
  flaxUint8ListType,
  FlaxCallbackAdapters.wrap0<api2.Uint8List>,
  id: "callback:<>()->Uint8List:",
  invoke: FlaxCallbackAdapters.invoke0<api2.Uint8List>,
  matches: FlaxCallbackAdapters.matches0<api2.Uint8List>,
);
const _flaxBinding810 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding809,
);
const _flaxBinding811 = <FlaxParameter>[
  FlaxParameter.required("test", _flaxBinding790),
  FlaxParameter("orElse", _flaxBinding810, required: false),
];
const _flaxBinding812 = FlaxInstanceMethod.plain(
  _flaxBinding811,
  _flaxBinding117,
  _Socket_firstWhere,
);
const _flaxBinding813 = FlaxInstanceMethod.plain(
  _flaxBinding811,
  _flaxBinding117,
  _Socket_lastWhere,
);
const _flaxBinding814 = FlaxInstanceMethod.plain(
  _flaxBinding811,
  _flaxBinding117,
  _Socket_singleWhere,
);
const _flaxBinding815 = FlaxInstanceMethod.plain(
  _flaxBinding343,
  _flaxBinding117,
  _Socket_elementAt,
);
const _flaxBinding816 = FlaxTypeRef(
  "object",
  id: "flax.core/flutter#type:EventSink",
  dartType: FlaxDartTypes.typeOf<api5.EventSink<api2.Uint8List>>,
);
const _flaxBinding817 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("sink", _flaxBinding816)],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid1<api5.EventSink<api2.Uint8List>>,
  id: "callback:<>(p:r:sink:object:flax.core/flutter#type:EventSink<Uint8List:>)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<api5.EventSink<api2.Uint8List>>,
  matches: FlaxCallbackAdapters.matchesVoid1<api5.EventSink<api2.Uint8List>>,
);
const _flaxBinding818 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding817,
);
const _flaxBinding819 = <FlaxParameter>[
  FlaxParameter.required("timeLimit", flaxDurationType),
  FlaxParameter("onTimeout", _flaxBinding818, required: false),
];
const _flaxBinding820 = FlaxInstanceMethod.plain(
  _flaxBinding819,
  _flaxBinding765,
  _Socket_timeout,
);
const _flaxBinding821 = FlaxInstanceMethod.plain(
  _flaxBinding240,
  flaxVoidType,
  _Socket_write,
);
const _flaxBinding822 = FlaxInstanceMethod.plain(
  _flaxBinding243,
  flaxVoidType,
  _Socket_writeAll,
);
const _flaxBinding823 = FlaxInstanceMethod.plain(
  _flaxBinding245,
  flaxVoidType,
  _Socket_writeln,
);
const _flaxBinding824 = FlaxInstanceMethod.plain(
  _flaxBinding247,
  flaxVoidType,
  _Socket_writeCharCode,
);
const _flaxBinding825 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding101,
  _Socket_flush,
);
const _flaxBinding826 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:Socket",
  [
    _flaxBinding736,
    _flaxBinding737,
    _flaxBinding738,
    _flaxBinding739,
    _flaxBinding740,
    _flaxBinding741,
    _flaxBinding742,
    _flaxBinding743,
    _flaxBinding744,
    _flaxBinding745,
    _flaxBinding746,
    _flaxBinding747,
  ],
  {
    "close": _flaxBinding749,
    "add": _flaxBinding750,
    "addError": _flaxBinding751,
    "addStream": _flaxBinding752,
    "destroy": _flaxBinding753,
    "setOption": _flaxBinding756,
    "getRawOption": _flaxBinding759,
    "setRawOption": _flaxBinding760,
    "asBroadcastStream": _flaxBinding766,
    "listen": _flaxBinding770,
    "where": _flaxBinding774,
    "map": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter.required(
          "convert",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [FlaxCallbackParameter.plain("event", flaxUint8ListType)],
              flaxNullableAnyType,
              _callback8,
              id: "callback:<>(p:r:event:Uint8List:)->any?:",
              invoke: _callback8Invoke,
              matches: _callback8Matches,
            ),
          ),
        ),
      ],
      FlaxTypeRef(
        "stream",
        id: "flax.core/flutter#type:Stream",
        item: flaxNullableAnyType,
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
        FlaxParameter.required(
          "convert",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [FlaxCallbackParameter.plain("event", flaxUint8ListType)],
              _flaxBinding294,
              _callback9,
              id: "callback:<>(p:r:event:Uint8List:)->futureOr:[any?:]",
              invoke: _callback9Invoke,
              matches: _callback9Matches,
            ),
          ),
        ),
      ],
      FlaxTypeRef(
        "stream",
        id: "flax.core/flutter#type:Stream",
        item: flaxNullableAnyType,
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
        FlaxParameter.required(
          "convert",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [FlaxCallbackParameter.plain("event", flaxUint8ListType)],
              _flaxBinding295,
              _callback10,
              id: "callback:<>(p:r:event:Uint8List:)->stream?:flax.core/flutter#type:Stream[any?:]",
              invoke: _callback10Invoke,
              matches: _callback10Matches,
            ),
          ),
        ),
      ],
      FlaxTypeRef(
        "stream",
        id: "flax.core/flutter#type:Stream",
        item: flaxNullableAnyType,
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
    "handleError": _flaxBinding775,
    "expand": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter.required(
          "convert",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [FlaxCallbackParameter.plain("element", flaxUint8ListType)],
              _flaxBinding242,
              _callback11,
              id: "callback:<>(p:r:element:Uint8List:)->iterable:[any?:]",
              invoke: _callback11Invoke,
              matches: _callback11Matches,
            ),
          ),
        ),
      ],
      FlaxTypeRef(
        "stream",
        id: "flax.core/flutter#type:Stream",
        item: flaxNullableAnyType,
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
    "pipe": _flaxBinding778,
    "transform": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter.required(
          "streamTransformer",
          FlaxTypeRef("object", id: "flax.core/flutter#type:StreamTransformer"),
        ),
      ],
      FlaxTypeRef(
        "stream",
        id: "flax.core/flutter#type:Stream",
        item: flaxNullableAnyType,
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
    "reduce": _flaxBinding782,
    "fold": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter.required(
          "initialValue",
          FlaxTypeRef("any", nullable: true),
        ),
        FlaxParameter.required(
          "combine",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter.plain("previous", flaxNullableAnyType),
                FlaxCallbackParameter.plain("element", flaxUint8ListType),
              ],
              flaxNullableAnyType,
              _callback12,
              id: "callback:<>(p:r:previous:any?:,p:r:element:Uint8List:)->any?:",
              invoke: _callback12Invoke,
              matches: _callback12Matches,
            ),
          ),
        ),
      ],
      FlaxTypeRef(
        "future",
        item: flaxNullableAnyType,
        future: FlaxFutureBinding("any?:", _future8Adapt),
      ),
      _Socket_fold,
      genericFactory: _flaxGeneric_Socket_fold,
      ownerTypes: [],
    ),
    "join": _flaxBinding783,
    "contains": _flaxBinding784,
    "forEach": _flaxBinding788,
    "every": _flaxBinding792,
    "any": _flaxBinding793,
    "cast": FlaxInstanceMethod(
      _flaxBinding35,
      FlaxTypeRef(
        "stream",
        id: "flax.core/flutter#type:Stream",
        item: flaxNullableAnyType,
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
    "toList": _flaxBinding797,
    "toSet": _flaxBinding800,
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
        item: flaxNullableAnyType,
        future: FlaxFutureBinding("any?:", _future8Adapt),
      ),
      _Socket_drain,
      genericFactory: _flaxGeneric_Socket_drain,
      ownerTypes: [],
    ),
    "take": _flaxBinding801,
    "takeWhile": _flaxBinding802,
    "skip": _flaxBinding803,
    "skipWhile": _flaxBinding804,
    "distinct": _flaxBinding808,
    "firstWhere": _flaxBinding812,
    "lastWhere": _flaxBinding813,
    "singleWhere": _flaxBinding814,
    "elementAt": _flaxBinding815,
    "timeout": _flaxBinding820,
    "write": _flaxBinding821,
    "writeAll": _flaxBinding822,
    "writeln": _flaxBinding823,
    "writeCharCode": _flaxBinding824,
    "flush": _flaxBinding825,
  },
  constructors: {},
  create: _createSocket,
  matches: _isSocket,
  setters: [_flaxBinding748],
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
const _flaxBinding827 = FlaxGetter.plain(
  "peerCertificate",
  _flaxBinding264,
  _SecureSocket_peerCertificate,
);
const _flaxBinding828 = FlaxGetter.plain(
  "selectedProtocol",
  flaxNullableStringType,
  _SecureSocket_selectedProtocol,
);
const _flaxBinding829 = <FlaxParameter>[
  FlaxParameter(
    "requestClientCertificate",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "requireClientCertificate",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
  FlaxParameter(
    "useSessionCache",
    flaxBoolType,
    required: false,
    defaultValue: true,
  ),
];
const _flaxBinding830 = FlaxInstanceMethod.plain(
  _flaxBinding829,
  flaxVoidType,
  _SecureSocket_renegotiate,
);
const _flaxBinding831 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:SecureSocket",
  [_flaxBinding827, _flaxBinding828],
  {
    "map": FlaxInstanceMethod(
      <FlaxParameter>[
        FlaxParameter.required(
          "convert",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [FlaxCallbackParameter.plain("event", flaxUint8ListType)],
              flaxNullableAnyType,
              _callback13,
              id: "callback:<>(p:r:event:Uint8List:)->any?:",
              invoke: _callback13Invoke,
              matches: _callback13Matches,
            ),
          ),
        ),
      ],
      FlaxTypeRef(
        "stream",
        id: "flax.core/flutter#type:Stream",
        item: flaxNullableAnyType,
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
        FlaxParameter.required(
          "convert",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [FlaxCallbackParameter.plain("event", flaxUint8ListType)],
              _flaxBinding294,
              _callback14,
              id: "callback:<>(p:r:event:Uint8List:)->futureOr:[any?:]",
              invoke: _callback14Invoke,
              matches: _callback14Matches,
            ),
          ),
        ),
      ],
      FlaxTypeRef(
        "stream",
        id: "flax.core/flutter#type:Stream",
        item: flaxNullableAnyType,
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
        FlaxParameter.required(
          "convert",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [FlaxCallbackParameter.plain("event", flaxUint8ListType)],
              _flaxBinding295,
              _callback15,
              id: "callback:<>(p:r:event:Uint8List:)->stream?:flax.core/flutter#type:Stream[any?:]",
              invoke: _callback15Invoke,
              matches: _callback15Matches,
            ),
          ),
        ),
      ],
      FlaxTypeRef(
        "stream",
        id: "flax.core/flutter#type:Stream",
        item: flaxNullableAnyType,
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
        FlaxParameter.required(
          "convert",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [FlaxCallbackParameter.plain("element", flaxUint8ListType)],
              _flaxBinding242,
              _callback16,
              id: "callback:<>(p:r:element:Uint8List:)->iterable:[any?:]",
              invoke: _callback16Invoke,
              matches: _callback16Matches,
            ),
          ),
        ),
      ],
      FlaxTypeRef(
        "stream",
        id: "flax.core/flutter#type:Stream",
        item: flaxNullableAnyType,
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
        FlaxParameter.required(
          "streamTransformer",
          FlaxTypeRef("object", id: "flax.core/flutter#type:StreamTransformer"),
        ),
      ],
      FlaxTypeRef(
        "stream",
        id: "flax.core/flutter#type:Stream",
        item: flaxNullableAnyType,
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
        FlaxParameter.required(
          "initialValue",
          FlaxTypeRef("any", nullable: true),
        ),
        FlaxParameter.required(
          "combine",
          FlaxTypeRef(
            "callback",
            callback: FlaxCallbackBinding(
              [
                FlaxCallbackParameter.plain("previous", flaxNullableAnyType),
                FlaxCallbackParameter.plain("element", flaxUint8ListType),
              ],
              flaxNullableAnyType,
              _callback17,
              id: "callback:<>(p:r:previous:any?:,p:r:element:Uint8List:)->any?:",
              invoke: _callback17Invoke,
              matches: _callback17Matches,
            ),
          ),
        ),
      ],
      FlaxTypeRef(
        "future",
        item: flaxNullableAnyType,
        future: FlaxFutureBinding("any?:", _future8Adapt),
      ),
      _SecureSocket_fold,
      genericFactory: _flaxGeneric_SecureSocket_fold,
      ownerTypes: [],
    ),
    "cast": FlaxInstanceMethod(
      _flaxBinding35,
      FlaxTypeRef(
        "stream",
        id: "flax.core/flutter#type:Stream",
        item: flaxNullableAnyType,
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
        item: flaxNullableAnyType,
        future: FlaxFutureBinding("any?:", _future8Adapt),
      ),
      _SecureSocket_drain,
      genericFactory: _flaxGeneric_SecureSocket_drain,
      ownerTypes: [],
    ),
    "renegotiate": _flaxBinding830,
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
  parent: _flaxBinding826,
);
const _flaxBinding832 = FlaxGetter.plain(
  "allowLegacyUnsafeRenegotiation",
  flaxBoolType,
  _SecurityContext_allowLegacyUnsafeRenegotiation,
);
const _flaxBinding833 = FlaxSetter(
  "allowLegacyUnsafeRenegotiation",
  flaxBoolType,
  _SecurityContext_set_allowLegacyUnsafeRenegotiation,
);
const _flaxBinding834 = <FlaxParameter>[
  FlaxParameter.required("file", flaxStringType),
  FlaxParameter("password", flaxNullableStringType, required: false),
];
const _flaxBinding835 = FlaxInstanceMethod.plain(
  _flaxBinding834,
  flaxVoidType,
  _SecurityContext_usePrivateKey,
);
const _flaxBinding836 = <FlaxParameter>[
  FlaxParameter.required("keyBytes", _flaxBinding2),
  FlaxParameter("password", flaxNullableStringType, required: false),
];
const _flaxBinding837 = FlaxInstanceMethod.plain(
  _flaxBinding836,
  flaxVoidType,
  _SecurityContext_usePrivateKeyBytes,
);
const _flaxBinding838 = FlaxInstanceMethod.plain(
  _flaxBinding834,
  flaxVoidType,
  _SecurityContext_setTrustedCertificates,
);
const _flaxBinding839 = <FlaxParameter>[
  FlaxParameter.required("certBytes", _flaxBinding2),
  FlaxParameter("password", flaxNullableStringType, required: false),
];
const _flaxBinding840 = FlaxInstanceMethod.plain(
  _flaxBinding839,
  flaxVoidType,
  _SecurityContext_setTrustedCertificatesBytes,
);
const _flaxBinding841 = FlaxInstanceMethod.plain(
  _flaxBinding834,
  flaxVoidType,
  _SecurityContext_useCertificateChain,
);
const _flaxBinding842 = <FlaxParameter>[
  FlaxParameter.required("chainBytes", _flaxBinding2),
  FlaxParameter("password", flaxNullableStringType, required: false),
];
const _flaxBinding843 = FlaxInstanceMethod.plain(
  _flaxBinding842,
  flaxVoidType,
  _SecurityContext_useCertificateChainBytes,
);
const _flaxBinding844 = FlaxInstanceMethod.plain(
  _flaxBinding834,
  flaxVoidType,
  _SecurityContext_setClientAuthorities,
);
const _flaxBinding845 = <FlaxParameter>[
  FlaxParameter.required("authCertBytes", _flaxBinding2),
  FlaxParameter("password", flaxNullableStringType, required: false),
];
const _flaxBinding846 = FlaxInstanceMethod.plain(
  _flaxBinding845,
  flaxVoidType,
  _SecurityContext_setClientAuthoritiesBytes,
);
const _flaxBinding847 = <FlaxParameter>[
  FlaxParameter.required("protocols", _flaxBinding125),
  FlaxParameter.required("isServer", flaxBoolType),
];
const _flaxBinding848 = FlaxInstanceMethod.plain(
  _flaxBinding847,
  flaxVoidType,
  _SecurityContext_setAlpnProtocols,
);
const _flaxBinding849 = <FlaxParameter>[
  FlaxParameter(
    "withTrustedRoots",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
];
const _flaxBinding850 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:SecurityContext",
  [_flaxBinding832],
  {
    "usePrivateKey": _flaxBinding835,
    "usePrivateKeyBytes": _flaxBinding837,
    "setTrustedCertificates": _flaxBinding838,
    "setTrustedCertificatesBytes": _flaxBinding840,
    "useCertificateChain": _flaxBinding841,
    "useCertificateChainBytes": _flaxBinding843,
    "setClientAuthorities": _flaxBinding844,
    "setClientAuthoritiesBytes": _flaxBinding846,
    "setAlpnProtocols": _flaxBinding848,
  },
  constructors: {"": _flaxBinding849},
  create: _createSecurityContext,
  matches: _isSecurityContext,
  setters: [_flaxBinding833],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding851 = <FlaxParameter>[
  FlaxParameter.required("message", flaxNullableAnyType),
];
const _flaxBinding852 = FlaxInstanceMethod.plain(
  _flaxBinding851,
  flaxVoidType,
  _SendPort_send,
);
const _flaxBinding853 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:SendPort",
  [],
  {"send": _flaxBinding852},
  constructors: {},
  create: _createSendPort,
  matches: _isSendPort,
  setters: [],
  supertypes: ["dart:core::Object", "dart:isolate::Capability"],
);
const _flaxBinding854 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:SocketOption",
  [],
  {},
  constructors: {},
  create: _createSocketOption,
  matches: _isSocketOption,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding855 = FlaxGetter.plain(
  "frequency",
  flaxIntType,
  _Stopwatch_frequency,
);
const _flaxBinding856 = FlaxGetter.plain(
  "elapsedTicks",
  flaxIntType,
  _Stopwatch_elapsedTicks,
);
const _flaxBinding857 = FlaxGetter.plain(
  "elapsed",
  flaxDurationType,
  _Stopwatch_elapsed,
);
const _flaxBinding858 = FlaxGetter.plain(
  "elapsedMicroseconds",
  flaxIntType,
  _Stopwatch_elapsedMicroseconds,
);
const _flaxBinding859 = FlaxGetter.plain(
  "elapsedMilliseconds",
  flaxIntType,
  _Stopwatch_elapsedMilliseconds,
);
const _flaxBinding860 = FlaxGetter.plain(
  "isRunning",
  flaxBoolType,
  _Stopwatch_isRunning,
);
const _flaxBinding861 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxVoidType,
  _Stopwatch_start,
);
const _flaxBinding862 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxVoidType,
  _Stopwatch_stop,
);
const _flaxBinding863 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxVoidType,
  _Stopwatch_reset,
);
const _flaxBinding864 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:Stopwatch",
  [
    _flaxBinding855,
    _flaxBinding856,
    _flaxBinding857,
    _flaxBinding858,
    _flaxBinding859,
    _flaxBinding860,
  ],
  {"start": _flaxBinding861, "stop": _flaxBinding862, "reset": _flaxBinding863},
  constructors: {"": _flaxBinding35},
  create: _createStopwatch,
  matches: _isStopwatch,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding865 = <FlaxParameter>[
  FlaxParameter.required("string", flaxStringType),
];
const _flaxBinding866 = FlaxInstanceMethod.plain(
  _flaxBinding865,
  flaxUint8ListType,
  _Utf8Codec_encode,
);
const _flaxBinding867 = <FlaxParameter>[
  FlaxParameter.required("codeUnits", _flaxBinding2),
  FlaxParameter("allowMalformed", flaxNullableBoolType, required: false),
];
const _flaxBinding868 = FlaxInstanceMethod.plain(
  _flaxBinding867,
  flaxStringType,
  _Utf8Codec_decode,
);
const _flaxBinding869 = <FlaxParameter>[
  FlaxParameter(
    "allowMalformed",
    flaxBoolType,
    required: false,
    defaultValue: false,
  ),
];
const _flaxBinding870 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:Utf8Codec",
  [],
  {"encode": _flaxBinding866, "decode": _flaxBinding868},
  constructors: {"": _flaxBinding869},
  create: _createUtf8Codec,
  matches: _isUtf8Codec,
  setters: [],
  supertypes: [
    "flax.core/sdk_dependencies#type:Encoding",
    "dart:convert::Codec",
    "dart:core::Object",
  ],
  parent: _flaxBinding11,
);
const _flaxBinding871 = FlaxGetter.plain(
  "storage",
  _flaxBinding423,
  _Vector2_storage,
);
const _flaxBinding872 = FlaxGetter.plain(
  "length",
  flaxDoubleType,
  _Vector2_length,
);
const _flaxBinding873 = FlaxGetter.plain(
  "length2",
  flaxDoubleType,
  _Vector2_length2,
);
const _flaxBinding874 = FlaxGetter.plain(
  "isInfinite",
  flaxBoolType,
  _Vector2_isInfinite,
);
const _flaxBinding875 = FlaxGetter.plain("isNaN", flaxBoolType, _Vector2_isNaN);
const _flaxBinding876 = FlaxGetter.plain("xx", _flaxBinding426, _Vector2_xx);
const _flaxBinding877 = FlaxGetter.plain("xy", _flaxBinding426, _Vector2_xy);
const _flaxBinding878 = FlaxGetter.plain("yx", _flaxBinding426, _Vector2_yx);
const _flaxBinding879 = FlaxGetter.plain("yy", _flaxBinding426, _Vector2_yy);
const _flaxBinding880 = FlaxGetter.plain("xxx", _flaxBinding517, _Vector2_xxx);
const _flaxBinding881 = FlaxGetter.plain("xxy", _flaxBinding517, _Vector2_xxy);
const _flaxBinding882 = FlaxGetter.plain("xyx", _flaxBinding517, _Vector2_xyx);
const _flaxBinding883 = FlaxGetter.plain("xyy", _flaxBinding517, _Vector2_xyy);
const _flaxBinding884 = FlaxGetter.plain("yxx", _flaxBinding517, _Vector2_yxx);
const _flaxBinding885 = FlaxGetter.plain("yxy", _flaxBinding517, _Vector2_yxy);
const _flaxBinding886 = FlaxGetter.plain("yyx", _flaxBinding517, _Vector2_yyx);
const _flaxBinding887 = FlaxGetter.plain("yyy", _flaxBinding517, _Vector2_yyy);
const _flaxBinding888 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:Vector4",
);
const _flaxBinding889 = FlaxGetter.plain(
  "xxxx",
  _flaxBinding888,
  _Vector2_xxxx,
);
const _flaxBinding890 = FlaxGetter.plain(
  "xxxy",
  _flaxBinding888,
  _Vector2_xxxy,
);
const _flaxBinding891 = FlaxGetter.plain(
  "xxyx",
  _flaxBinding888,
  _Vector2_xxyx,
);
const _flaxBinding892 = FlaxGetter.plain(
  "xxyy",
  _flaxBinding888,
  _Vector2_xxyy,
);
const _flaxBinding893 = FlaxGetter.plain(
  "xyxx",
  _flaxBinding888,
  _Vector2_xyxx,
);
const _flaxBinding894 = FlaxGetter.plain(
  "xyxy",
  _flaxBinding888,
  _Vector2_xyxy,
);
const _flaxBinding895 = FlaxGetter.plain(
  "xyyx",
  _flaxBinding888,
  _Vector2_xyyx,
);
const _flaxBinding896 = FlaxGetter.plain(
  "xyyy",
  _flaxBinding888,
  _Vector2_xyyy,
);
const _flaxBinding897 = FlaxGetter.plain(
  "yxxx",
  _flaxBinding888,
  _Vector2_yxxx,
);
const _flaxBinding898 = FlaxGetter.plain(
  "yxxy",
  _flaxBinding888,
  _Vector2_yxxy,
);
const _flaxBinding899 = FlaxGetter.plain(
  "yxyx",
  _flaxBinding888,
  _Vector2_yxyx,
);
const _flaxBinding900 = FlaxGetter.plain(
  "yxyy",
  _flaxBinding888,
  _Vector2_yxyy,
);
const _flaxBinding901 = FlaxGetter.plain(
  "yyxx",
  _flaxBinding888,
  _Vector2_yyxx,
);
const _flaxBinding902 = FlaxGetter.plain(
  "yyxy",
  _flaxBinding888,
  _Vector2_yyxy,
);
const _flaxBinding903 = FlaxGetter.plain(
  "yyyx",
  _flaxBinding888,
  _Vector2_yyyx,
);
const _flaxBinding904 = FlaxGetter.plain(
  "yyyy",
  _flaxBinding888,
  _Vector2_yyyy,
);
const _flaxBinding905 = FlaxGetter.plain("r", flaxDoubleType, _Vector2_r);
const _flaxBinding906 = FlaxGetter.plain("g", flaxDoubleType, _Vector2_g);
const _flaxBinding907 = FlaxGetter.plain("s", flaxDoubleType, _Vector2_s);
const _flaxBinding908 = FlaxGetter.plain("t", flaxDoubleType, _Vector2_t);
const _flaxBinding909 = FlaxGetter.plain("x", flaxDoubleType, _Vector2_x);
const _flaxBinding910 = FlaxGetter.plain("y", flaxDoubleType, _Vector2_y);
const _flaxBinding911 = FlaxGetter.plain("rr", _flaxBinding426, _Vector2_rr);
const _flaxBinding912 = FlaxGetter.plain("rg", _flaxBinding426, _Vector2_rg);
const _flaxBinding913 = FlaxGetter.plain("gr", _flaxBinding426, _Vector2_gr);
const _flaxBinding914 = FlaxGetter.plain("gg", _flaxBinding426, _Vector2_gg);
const _flaxBinding915 = FlaxGetter.plain("rrr", _flaxBinding517, _Vector2_rrr);
const _flaxBinding916 = FlaxGetter.plain("rrg", _flaxBinding517, _Vector2_rrg);
const _flaxBinding917 = FlaxGetter.plain("rgr", _flaxBinding517, _Vector2_rgr);
const _flaxBinding918 = FlaxGetter.plain("rgg", _flaxBinding517, _Vector2_rgg);
const _flaxBinding919 = FlaxGetter.plain("grr", _flaxBinding517, _Vector2_grr);
const _flaxBinding920 = FlaxGetter.plain("grg", _flaxBinding517, _Vector2_grg);
const _flaxBinding921 = FlaxGetter.plain("ggr", _flaxBinding517, _Vector2_ggr);
const _flaxBinding922 = FlaxGetter.plain("ggg", _flaxBinding517, _Vector2_ggg);
const _flaxBinding923 = FlaxGetter.plain(
  "rrrr",
  _flaxBinding888,
  _Vector2_rrrr,
);
const _flaxBinding924 = FlaxGetter.plain(
  "rrrg",
  _flaxBinding888,
  _Vector2_rrrg,
);
const _flaxBinding925 = FlaxGetter.plain(
  "rrgr",
  _flaxBinding888,
  _Vector2_rrgr,
);
const _flaxBinding926 = FlaxGetter.plain(
  "rrgg",
  _flaxBinding888,
  _Vector2_rrgg,
);
const _flaxBinding927 = FlaxGetter.plain(
  "rgrr",
  _flaxBinding888,
  _Vector2_rgrr,
);
const _flaxBinding928 = FlaxGetter.plain(
  "rgrg",
  _flaxBinding888,
  _Vector2_rgrg,
);
const _flaxBinding929 = FlaxGetter.plain(
  "rggr",
  _flaxBinding888,
  _Vector2_rggr,
);
const _flaxBinding930 = FlaxGetter.plain(
  "rggg",
  _flaxBinding888,
  _Vector2_rggg,
);
const _flaxBinding931 = FlaxGetter.plain(
  "grrr",
  _flaxBinding888,
  _Vector2_grrr,
);
const _flaxBinding932 = FlaxGetter.plain(
  "grrg",
  _flaxBinding888,
  _Vector2_grrg,
);
const _flaxBinding933 = FlaxGetter.plain(
  "grgr",
  _flaxBinding888,
  _Vector2_grgr,
);
const _flaxBinding934 = FlaxGetter.plain(
  "grgg",
  _flaxBinding888,
  _Vector2_grgg,
);
const _flaxBinding935 = FlaxGetter.plain(
  "ggrr",
  _flaxBinding888,
  _Vector2_ggrr,
);
const _flaxBinding936 = FlaxGetter.plain(
  "ggrg",
  _flaxBinding888,
  _Vector2_ggrg,
);
const _flaxBinding937 = FlaxGetter.plain(
  "gggr",
  _flaxBinding888,
  _Vector2_gggr,
);
const _flaxBinding938 = FlaxGetter.plain(
  "gggg",
  _flaxBinding888,
  _Vector2_gggg,
);
const _flaxBinding939 = FlaxGetter.plain("ss", _flaxBinding426, _Vector2_ss);
const _flaxBinding940 = FlaxGetter.plain("st", _flaxBinding426, _Vector2_st);
const _flaxBinding941 = FlaxGetter.plain("ts", _flaxBinding426, _Vector2_ts);
const _flaxBinding942 = FlaxGetter.plain("tt", _flaxBinding426, _Vector2_tt);
const _flaxBinding943 = FlaxGetter.plain("sss", _flaxBinding517, _Vector2_sss);
const _flaxBinding944 = FlaxGetter.plain("sst", _flaxBinding517, _Vector2_sst);
const _flaxBinding945 = FlaxGetter.plain("sts", _flaxBinding517, _Vector2_sts);
const _flaxBinding946 = FlaxGetter.plain("stt", _flaxBinding517, _Vector2_stt);
const _flaxBinding947 = FlaxGetter.plain("tss", _flaxBinding517, _Vector2_tss);
const _flaxBinding948 = FlaxGetter.plain("tst", _flaxBinding517, _Vector2_tst);
const _flaxBinding949 = FlaxGetter.plain("tts", _flaxBinding517, _Vector2_tts);
const _flaxBinding950 = FlaxGetter.plain("ttt", _flaxBinding517, _Vector2_ttt);
const _flaxBinding951 = FlaxGetter.plain(
  "ssss",
  _flaxBinding888,
  _Vector2_ssss,
);
const _flaxBinding952 = FlaxGetter.plain(
  "ssst",
  _flaxBinding888,
  _Vector2_ssst,
);
const _flaxBinding953 = FlaxGetter.plain(
  "ssts",
  _flaxBinding888,
  _Vector2_ssts,
);
const _flaxBinding954 = FlaxGetter.plain(
  "sstt",
  _flaxBinding888,
  _Vector2_sstt,
);
const _flaxBinding955 = FlaxGetter.plain(
  "stss",
  _flaxBinding888,
  _Vector2_stss,
);
const _flaxBinding956 = FlaxGetter.plain(
  "stst",
  _flaxBinding888,
  _Vector2_stst,
);
const _flaxBinding957 = FlaxGetter.plain(
  "stts",
  _flaxBinding888,
  _Vector2_stts,
);
const _flaxBinding958 = FlaxGetter.plain(
  "sttt",
  _flaxBinding888,
  _Vector2_sttt,
);
const _flaxBinding959 = FlaxGetter.plain(
  "tsss",
  _flaxBinding888,
  _Vector2_tsss,
);
const _flaxBinding960 = FlaxGetter.plain(
  "tsst",
  _flaxBinding888,
  _Vector2_tsst,
);
const _flaxBinding961 = FlaxGetter.plain(
  "tsts",
  _flaxBinding888,
  _Vector2_tsts,
);
const _flaxBinding962 = FlaxGetter.plain(
  "tstt",
  _flaxBinding888,
  _Vector2_tstt,
);
const _flaxBinding963 = FlaxGetter.plain(
  "ttss",
  _flaxBinding888,
  _Vector2_ttss,
);
const _flaxBinding964 = FlaxGetter.plain(
  "ttst",
  _flaxBinding888,
  _Vector2_ttst,
);
const _flaxBinding965 = FlaxGetter.plain(
  "ttts",
  _flaxBinding888,
  _Vector2_ttts,
);
const _flaxBinding966 = FlaxGetter.plain(
  "tttt",
  _flaxBinding888,
  _Vector2_tttt,
);
const _flaxBinding967 = FlaxSetter(
  "length",
  flaxDoubleType,
  _Vector2_set_length,
);
const _flaxBinding968 = FlaxSetter("xy", _flaxBinding426, _Vector2_set_xy);
const _flaxBinding969 = FlaxSetter("yx", _flaxBinding426, _Vector2_set_yx);
const _flaxBinding970 = FlaxSetter("r", flaxDoubleType, _Vector2_set_r);
const _flaxBinding971 = FlaxSetter("g", flaxDoubleType, _Vector2_set_g);
const _flaxBinding972 = FlaxSetter("s", flaxDoubleType, _Vector2_set_s);
const _flaxBinding973 = FlaxSetter("t", flaxDoubleType, _Vector2_set_t);
const _flaxBinding974 = FlaxSetter("x", flaxDoubleType, _Vector2_set_x);
const _flaxBinding975 = FlaxSetter("y", flaxDoubleType, _Vector2_set_y);
const _flaxBinding976 = FlaxSetter("rg", _flaxBinding426, _Vector2_set_rg);
const _flaxBinding977 = FlaxSetter("gr", _flaxBinding426, _Vector2_set_gr);
const _flaxBinding978 = FlaxSetter("st", _flaxBinding426, _Vector2_set_st);
const _flaxBinding979 = FlaxSetter("ts", _flaxBinding426, _Vector2_set_ts);
const _flaxBinding980 = <FlaxParameter>[
  FlaxParameter.required("x_", flaxDoubleType),
  FlaxParameter.required("y_", flaxDoubleType),
];
const _flaxBinding981 = FlaxInstanceMethod.plain(
  _flaxBinding980,
  flaxVoidType,
  _Vector2_setValues,
);
const _flaxBinding982 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxVoidType,
  _Vector2_setZero,
);
const _flaxBinding983 = <FlaxParameter>[
  FlaxParameter.required("other", _flaxBinding426),
];
const _flaxBinding984 = FlaxInstanceMethod.plain(
  _flaxBinding983,
  flaxVoidType,
  _Vector2_setFrom,
);
const _flaxBinding985 = FlaxInstanceMethod.plain(
  _flaxBinding445,
  flaxVoidType,
  _Vector2_splat,
);
const _flaxBinding986 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxStringType,
  _Vector2_toString,
);
const _flaxBinding987 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxDoubleType,
  _Vector2_normalize,
);
const _flaxBinding988 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxDoubleType,
  _Vector2_normalizeLength,
);
const _flaxBinding989 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding426,
  _Vector2_normalized,
);
const _flaxBinding990 = <FlaxParameter>[
  FlaxParameter.required("out", _flaxBinding426),
];
const _flaxBinding991 = FlaxInstanceMethod.plain(
  _flaxBinding990,
  _flaxBinding426,
  _Vector2_normalizeInto,
);
const _flaxBinding992 = FlaxInstanceMethod.plain(
  _flaxBinding447,
  flaxDoubleType,
  _Vector2_distanceTo,
);
const _flaxBinding993 = FlaxInstanceMethod.plain(
  _flaxBinding447,
  flaxDoubleType,
  _Vector2_distanceToSquared,
);
const _flaxBinding994 = FlaxInstanceMethod.plain(
  _flaxBinding983,
  flaxDoubleType,
  _Vector2_angleTo,
);
const _flaxBinding995 = FlaxInstanceMethod.plain(
  _flaxBinding983,
  flaxDoubleType,
  _Vector2_angleToSigned,
);
const _flaxBinding996 = FlaxInstanceMethod.plain(
  _flaxBinding983,
  flaxDoubleType,
  _Vector2_dot,
);
const _flaxBinding997 = FlaxInstanceMethod.plain(
  _flaxBinding441,
  flaxVoidType,
  _Vector2_postmultiply,
);
const _flaxBinding998 = FlaxInstanceMethod.plain(
  _flaxBinding983,
  flaxDoubleType,
  _Vector2_cross,
);
const _flaxBinding999 = <FlaxParameter>[
  FlaxParameter.required("scale", flaxDoubleType),
  FlaxParameter.required("out", _flaxBinding426),
];
const _flaxBinding1000 = FlaxInstanceMethod.plain(
  _flaxBinding999,
  _flaxBinding426,
  _Vector2_scaleOrthogonalInto,
);
const _flaxBinding1001 = <FlaxParameter>[
  FlaxParameter.required("normal", _flaxBinding426),
];
const _flaxBinding1002 = FlaxInstanceMethod.plain(
  _flaxBinding1001,
  flaxVoidType,
  _Vector2_reflect,
);
const _flaxBinding1003 = FlaxInstanceMethod.plain(
  _flaxBinding1001,
  _flaxBinding426,
  _Vector2_reflected,
);
const _flaxBinding1004 = <FlaxParameter>[
  FlaxParameter.required("correct", _flaxBinding426),
];
const _flaxBinding1005 = FlaxInstanceMethod.plain(
  _flaxBinding1004,
  flaxDoubleType,
  _Vector2_relativeError,
);
const _flaxBinding1006 = FlaxInstanceMethod.plain(
  _flaxBinding1004,
  flaxDoubleType,
  _Vector2_absoluteError,
);
const _flaxBinding1007 = FlaxInstanceMethod.plain(
  _flaxBinding447,
  flaxVoidType,
  _Vector2_add,
);
const _flaxBinding1008 = <FlaxParameter>[
  FlaxParameter.required("arg", _flaxBinding426),
  FlaxParameter.required("factor", flaxDoubleType),
];
const _flaxBinding1009 = FlaxInstanceMethod.plain(
  _flaxBinding1008,
  flaxVoidType,
  _Vector2_addScaled,
);
const _flaxBinding1010 = FlaxInstanceMethod.plain(
  _flaxBinding447,
  flaxVoidType,
  _Vector2_sub,
);
const _flaxBinding1011 = FlaxInstanceMethod.plain(
  _flaxBinding447,
  flaxVoidType,
  _Vector2_multiply,
);
const _flaxBinding1012 = FlaxInstanceMethod.plain(
  _flaxBinding447,
  flaxVoidType,
  _Vector2_divide,
);
const _flaxBinding1013 = FlaxInstanceMethod.plain(
  _flaxBinding445,
  flaxVoidType,
  _Vector2_scale,
);
const _flaxBinding1014 = FlaxInstanceMethod.plain(
  _flaxBinding445,
  _flaxBinding426,
  _Vector2_scaled,
);
const _flaxBinding1015 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxVoidType,
  _Vector2_negate,
);
const _flaxBinding1016 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxVoidType,
  _Vector2_absolute,
);
const _flaxBinding1017 = <FlaxParameter>[
  FlaxParameter.required("min", _flaxBinding426),
  FlaxParameter.required("max", _flaxBinding426),
];
const _flaxBinding1018 = FlaxInstanceMethod.plain(
  _flaxBinding1017,
  flaxVoidType,
  _Vector2_clamp,
);
const _flaxBinding1019 = <FlaxParameter>[
  FlaxParameter.required("min", flaxDoubleType),
  FlaxParameter.required("max", flaxDoubleType),
];
const _flaxBinding1020 = FlaxInstanceMethod.plain(
  _flaxBinding1019,
  flaxVoidType,
  _Vector2_clampScalar,
);
const _flaxBinding1021 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxVoidType,
  _Vector2_floor,
);
const _flaxBinding1022 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxVoidType,
  _Vector2_ceil,
);
const _flaxBinding1023 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxVoidType,
  _Vector2_round,
);
const _flaxBinding1024 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxVoidType,
  _Vector2_roundToZero,
);
const _flaxBinding1025 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding426,
  _Vector2_clone,
);
const _flaxBinding1026 = FlaxInstanceMethod.plain(
  _flaxBinding447,
  _flaxBinding426,
  _Vector2_copyInto,
);
const _flaxBinding1027 = FlaxInstanceMethod.plain(
  _flaxBinding501,
  flaxVoidType,
  _Vector2_copyIntoArray,
);
const _flaxBinding1028 = FlaxInstanceMethod.plain(
  _flaxBinding501,
  flaxVoidType,
  _Vector2_copyFromArray,
);
const _flaxBinding1029 = FlaxInstanceMethod.plain(
  _flaxBinding503,
  flaxDoubleType,
  _Vector2_operatorGetIndex,
);
const _flaxBinding1030 = FlaxInstanceMethod.plain(
  _flaxBinding505,
  flaxVoidType,
  _Vector2_operatorSetIndex,
);
const _flaxBinding1031 = FlaxInstanceMethod.plain(
  _flaxBinding983,
  _flaxBinding426,
  _Vector2_operatorAdd,
);
const _flaxBinding1032 = FlaxInstanceMethod.plain(
  _flaxBinding983,
  _flaxBinding426,
  _Vector2_operatorSubtract,
);
const _flaxBinding1033 = FlaxInstanceMethod.plain(
  _flaxBinding479,
  _flaxBinding426,
  _Vector2_operatorMultiply,
);
const _flaxBinding1034 = FlaxInstanceMethod.plain(
  _flaxBinding479,
  _flaxBinding426,
  _Vector2_operatorDivide,
);
const _flaxBinding1035 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding426,
  _Vector2_operatorNegate,
);
const _flaxBinding1036 = <FlaxParameter>[
  FlaxParameter.required("x", flaxDoubleType),
  FlaxParameter.required("y", flaxDoubleType),
];
const _flaxBinding1037 = <FlaxParameter>[
  FlaxParameter.required("value", flaxDoubleType),
];
const _flaxBinding1038 = <FlaxParameter>[
  FlaxParameter.required("_v2storage", _flaxBinding423),
];
const _flaxBinding1039 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:Vector2",
  [
    _flaxBinding871,
    _flaxBinding872,
    _flaxBinding873,
    _flaxBinding874,
    _flaxBinding875,
    _flaxBinding876,
    _flaxBinding877,
    _flaxBinding878,
    _flaxBinding879,
    _flaxBinding880,
    _flaxBinding881,
    _flaxBinding882,
    _flaxBinding883,
    _flaxBinding884,
    _flaxBinding885,
    _flaxBinding886,
    _flaxBinding887,
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
    _flaxBinding906,
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
  ],
  {
    "setValues": _flaxBinding981,
    "setZero": _flaxBinding982,
    "setFrom": _flaxBinding984,
    "splat": _flaxBinding985,
    "toString": _flaxBinding986,
    "normalize": _flaxBinding987,
    "normalizeLength": _flaxBinding988,
    "normalized": _flaxBinding989,
    "normalizeInto": _flaxBinding991,
    "distanceTo": _flaxBinding992,
    "distanceToSquared": _flaxBinding993,
    "angleTo": _flaxBinding994,
    "angleToSigned": _flaxBinding995,
    "dot": _flaxBinding996,
    "postmultiply": _flaxBinding997,
    "cross": _flaxBinding998,
    "scaleOrthogonalInto": _flaxBinding1000,
    "reflect": _flaxBinding1002,
    "reflected": _flaxBinding1003,
    "relativeError": _flaxBinding1005,
    "absoluteError": _flaxBinding1006,
    "add": _flaxBinding1007,
    "addScaled": _flaxBinding1009,
    "sub": _flaxBinding1010,
    "multiply": _flaxBinding1011,
    "divide": _flaxBinding1012,
    "scale": _flaxBinding1013,
    "scaled": _flaxBinding1014,
    "negate": _flaxBinding1015,
    "absolute": _flaxBinding1016,
    "clamp": _flaxBinding1018,
    "clampScalar": _flaxBinding1020,
    "floor": _flaxBinding1021,
    "ceil": _flaxBinding1022,
    "round": _flaxBinding1023,
    "roundToZero": _flaxBinding1024,
    "clone": _flaxBinding1025,
    "copyInto": _flaxBinding1026,
    "copyIntoArray": _flaxBinding1027,
    "copyFromArray": _flaxBinding1028,
    "operatorGetIndex": _flaxBinding1029,
    "operatorSetIndex": _flaxBinding1030,
    "operatorAdd": _flaxBinding1031,
    "operatorSubtract": _flaxBinding1032,
    "operatorMultiply": _flaxBinding1033,
    "operatorDivide": _flaxBinding1034,
    "operatorNegate": _flaxBinding1035,
  },
  constructors: {
    "": _flaxBinding1036,
    "array": _flaxBinding501,
    "zero": _flaxBinding35,
    "all": _flaxBinding1037,
    "copy": _flaxBinding983,
    "fromFloat64List": _flaxBinding1038,
    "fromBuffer": _flaxBinding684,
  },
  create: _createVector2,
  matches: _isVector2,
  setters: [
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
  ],
  supertypes: [
    "dart:core::Object",
    "package:vector_math/vector_math_64.dart::Vector",
  ],
);
const _flaxBinding1040 = FlaxGetter.plain(
  "storage",
  _flaxBinding423,
  _Vector3_storage,
);
const _flaxBinding1041 = FlaxGetter.plain(
  "length",
  flaxDoubleType,
  _Vector3_length,
);
const _flaxBinding1042 = FlaxGetter.plain(
  "length2",
  flaxDoubleType,
  _Vector3_length2,
);
const _flaxBinding1043 = FlaxGetter.plain(
  "isInfinite",
  flaxBoolType,
  _Vector3_isInfinite,
);
const _flaxBinding1044 = FlaxGetter.plain(
  "isNaN",
  flaxBoolType,
  _Vector3_isNaN,
);
const _flaxBinding1045 = FlaxGetter.plain("xx", _flaxBinding426, _Vector3_xx);
const _flaxBinding1046 = FlaxGetter.plain("xy", _flaxBinding426, _Vector3_xy);
const _flaxBinding1047 = FlaxGetter.plain("xz", _flaxBinding426, _Vector3_xz);
const _flaxBinding1048 = FlaxGetter.plain("yx", _flaxBinding426, _Vector3_yx);
const _flaxBinding1049 = FlaxGetter.plain("yy", _flaxBinding426, _Vector3_yy);
const _flaxBinding1050 = FlaxGetter.plain("yz", _flaxBinding426, _Vector3_yz);
const _flaxBinding1051 = FlaxGetter.plain("zx", _flaxBinding426, _Vector3_zx);
const _flaxBinding1052 = FlaxGetter.plain("zy", _flaxBinding426, _Vector3_zy);
const _flaxBinding1053 = FlaxGetter.plain("zz", _flaxBinding426, _Vector3_zz);
const _flaxBinding1054 = FlaxGetter.plain("xxx", _flaxBinding517, _Vector3_xxx);
const _flaxBinding1055 = FlaxGetter.plain("xxy", _flaxBinding517, _Vector3_xxy);
const _flaxBinding1056 = FlaxGetter.plain("xxz", _flaxBinding517, _Vector3_xxz);
const _flaxBinding1057 = FlaxGetter.plain("xyx", _flaxBinding517, _Vector3_xyx);
const _flaxBinding1058 = FlaxGetter.plain("xyy", _flaxBinding517, _Vector3_xyy);
const _flaxBinding1059 = FlaxGetter.plain("xyz", _flaxBinding517, _Vector3_xyz);
const _flaxBinding1060 = FlaxGetter.plain("xzx", _flaxBinding517, _Vector3_xzx);
const _flaxBinding1061 = FlaxGetter.plain("xzy", _flaxBinding517, _Vector3_xzy);
const _flaxBinding1062 = FlaxGetter.plain("xzz", _flaxBinding517, _Vector3_xzz);
const _flaxBinding1063 = FlaxGetter.plain("yxx", _flaxBinding517, _Vector3_yxx);
const _flaxBinding1064 = FlaxGetter.plain("yxy", _flaxBinding517, _Vector3_yxy);
const _flaxBinding1065 = FlaxGetter.plain("yxz", _flaxBinding517, _Vector3_yxz);
const _flaxBinding1066 = FlaxGetter.plain("yyx", _flaxBinding517, _Vector3_yyx);
const _flaxBinding1067 = FlaxGetter.plain("yyy", _flaxBinding517, _Vector3_yyy);
const _flaxBinding1068 = FlaxGetter.plain("yyz", _flaxBinding517, _Vector3_yyz);
const _flaxBinding1069 = FlaxGetter.plain("yzx", _flaxBinding517, _Vector3_yzx);
const _flaxBinding1070 = FlaxGetter.plain("yzy", _flaxBinding517, _Vector3_yzy);
const _flaxBinding1071 = FlaxGetter.plain("yzz", _flaxBinding517, _Vector3_yzz);
const _flaxBinding1072 = FlaxGetter.plain("zxx", _flaxBinding517, _Vector3_zxx);
const _flaxBinding1073 = FlaxGetter.plain("zxy", _flaxBinding517, _Vector3_zxy);
const _flaxBinding1074 = FlaxGetter.plain("zxz", _flaxBinding517, _Vector3_zxz);
const _flaxBinding1075 = FlaxGetter.plain("zyx", _flaxBinding517, _Vector3_zyx);
const _flaxBinding1076 = FlaxGetter.plain("zyy", _flaxBinding517, _Vector3_zyy);
const _flaxBinding1077 = FlaxGetter.plain("zyz", _flaxBinding517, _Vector3_zyz);
const _flaxBinding1078 = FlaxGetter.plain("zzx", _flaxBinding517, _Vector3_zzx);
const _flaxBinding1079 = FlaxGetter.plain("zzy", _flaxBinding517, _Vector3_zzy);
const _flaxBinding1080 = FlaxGetter.plain("zzz", _flaxBinding517, _Vector3_zzz);
const _flaxBinding1081 = FlaxGetter.plain(
  "xxxx",
  _flaxBinding888,
  _Vector3_xxxx,
);
const _flaxBinding1082 = FlaxGetter.plain(
  "xxxy",
  _flaxBinding888,
  _Vector3_xxxy,
);
const _flaxBinding1083 = FlaxGetter.plain(
  "xxxz",
  _flaxBinding888,
  _Vector3_xxxz,
);
const _flaxBinding1084 = FlaxGetter.plain(
  "xxyx",
  _flaxBinding888,
  _Vector3_xxyx,
);
const _flaxBinding1085 = FlaxGetter.plain(
  "xxyy",
  _flaxBinding888,
  _Vector3_xxyy,
);
const _flaxBinding1086 = FlaxGetter.plain(
  "xxyz",
  _flaxBinding888,
  _Vector3_xxyz,
);
const _flaxBinding1087 = FlaxGetter.plain(
  "xxzx",
  _flaxBinding888,
  _Vector3_xxzx,
);
const _flaxBinding1088 = FlaxGetter.plain(
  "xxzy",
  _flaxBinding888,
  _Vector3_xxzy,
);
const _flaxBinding1089 = FlaxGetter.plain(
  "xxzz",
  _flaxBinding888,
  _Vector3_xxzz,
);
const _flaxBinding1090 = FlaxGetter.plain(
  "xyxx",
  _flaxBinding888,
  _Vector3_xyxx,
);
const _flaxBinding1091 = FlaxGetter.plain(
  "xyxy",
  _flaxBinding888,
  _Vector3_xyxy,
);
const _flaxBinding1092 = FlaxGetter.plain(
  "xyxz",
  _flaxBinding888,
  _Vector3_xyxz,
);
const _flaxBinding1093 = FlaxGetter.plain(
  "xyyx",
  _flaxBinding888,
  _Vector3_xyyx,
);
const _flaxBinding1094 = FlaxGetter.plain(
  "xyyy",
  _flaxBinding888,
  _Vector3_xyyy,
);
const _flaxBinding1095 = FlaxGetter.plain(
  "xyyz",
  _flaxBinding888,
  _Vector3_xyyz,
);
const _flaxBinding1096 = FlaxGetter.plain(
  "xyzx",
  _flaxBinding888,
  _Vector3_xyzx,
);
const _flaxBinding1097 = FlaxGetter.plain(
  "xyzy",
  _flaxBinding888,
  _Vector3_xyzy,
);
const _flaxBinding1098 = FlaxGetter.plain(
  "xyzz",
  _flaxBinding888,
  _Vector3_xyzz,
);
const _flaxBinding1099 = FlaxGetter.plain(
  "xzxx",
  _flaxBinding888,
  _Vector3_xzxx,
);
const _flaxBinding1100 = FlaxGetter.plain(
  "xzxy",
  _flaxBinding888,
  _Vector3_xzxy,
);
const _flaxBinding1101 = FlaxGetter.plain(
  "xzxz",
  _flaxBinding888,
  _Vector3_xzxz,
);
const _flaxBinding1102 = FlaxGetter.plain(
  "xzyx",
  _flaxBinding888,
  _Vector3_xzyx,
);
const _flaxBinding1103 = FlaxGetter.plain(
  "xzyy",
  _flaxBinding888,
  _Vector3_xzyy,
);
const _flaxBinding1104 = FlaxGetter.plain(
  "xzyz",
  _flaxBinding888,
  _Vector3_xzyz,
);
const _flaxBinding1105 = FlaxGetter.plain(
  "xzzx",
  _flaxBinding888,
  _Vector3_xzzx,
);
const _flaxBinding1106 = FlaxGetter.plain(
  "xzzy",
  _flaxBinding888,
  _Vector3_xzzy,
);
const _flaxBinding1107 = FlaxGetter.plain(
  "xzzz",
  _flaxBinding888,
  _Vector3_xzzz,
);
const _flaxBinding1108 = FlaxGetter.plain(
  "yxxx",
  _flaxBinding888,
  _Vector3_yxxx,
);
const _flaxBinding1109 = FlaxGetter.plain(
  "yxxy",
  _flaxBinding888,
  _Vector3_yxxy,
);
const _flaxBinding1110 = FlaxGetter.plain(
  "yxxz",
  _flaxBinding888,
  _Vector3_yxxz,
);
const _flaxBinding1111 = FlaxGetter.plain(
  "yxyx",
  _flaxBinding888,
  _Vector3_yxyx,
);
const _flaxBinding1112 = FlaxGetter.plain(
  "yxyy",
  _flaxBinding888,
  _Vector3_yxyy,
);
const _flaxBinding1113 = FlaxGetter.plain(
  "yxyz",
  _flaxBinding888,
  _Vector3_yxyz,
);
const _flaxBinding1114 = FlaxGetter.plain(
  "yxzx",
  _flaxBinding888,
  _Vector3_yxzx,
);
const _flaxBinding1115 = FlaxGetter.plain(
  "yxzy",
  _flaxBinding888,
  _Vector3_yxzy,
);
const _flaxBinding1116 = FlaxGetter.plain(
  "yxzz",
  _flaxBinding888,
  _Vector3_yxzz,
);
const _flaxBinding1117 = FlaxGetter.plain(
  "yyxx",
  _flaxBinding888,
  _Vector3_yyxx,
);
const _flaxBinding1118 = FlaxGetter.plain(
  "yyxy",
  _flaxBinding888,
  _Vector3_yyxy,
);
const _flaxBinding1119 = FlaxGetter.plain(
  "yyxz",
  _flaxBinding888,
  _Vector3_yyxz,
);
const _flaxBinding1120 = FlaxGetter.plain(
  "yyyx",
  _flaxBinding888,
  _Vector3_yyyx,
);
const _flaxBinding1121 = FlaxGetter.plain(
  "yyyy",
  _flaxBinding888,
  _Vector3_yyyy,
);
const _flaxBinding1122 = FlaxGetter.plain(
  "yyyz",
  _flaxBinding888,
  _Vector3_yyyz,
);
const _flaxBinding1123 = FlaxGetter.plain(
  "yyzx",
  _flaxBinding888,
  _Vector3_yyzx,
);
const _flaxBinding1124 = FlaxGetter.plain(
  "yyzy",
  _flaxBinding888,
  _Vector3_yyzy,
);
const _flaxBinding1125 = FlaxGetter.plain(
  "yyzz",
  _flaxBinding888,
  _Vector3_yyzz,
);
const _flaxBinding1126 = FlaxGetter.plain(
  "yzxx",
  _flaxBinding888,
  _Vector3_yzxx,
);
const _flaxBinding1127 = FlaxGetter.plain(
  "yzxy",
  _flaxBinding888,
  _Vector3_yzxy,
);
const _flaxBinding1128 = FlaxGetter.plain(
  "yzxz",
  _flaxBinding888,
  _Vector3_yzxz,
);
const _flaxBinding1129 = FlaxGetter.plain(
  "yzyx",
  _flaxBinding888,
  _Vector3_yzyx,
);
const _flaxBinding1130 = FlaxGetter.plain(
  "yzyy",
  _flaxBinding888,
  _Vector3_yzyy,
);
const _flaxBinding1131 = FlaxGetter.plain(
  "yzyz",
  _flaxBinding888,
  _Vector3_yzyz,
);
const _flaxBinding1132 = FlaxGetter.plain(
  "yzzx",
  _flaxBinding888,
  _Vector3_yzzx,
);
const _flaxBinding1133 = FlaxGetter.plain(
  "yzzy",
  _flaxBinding888,
  _Vector3_yzzy,
);
const _flaxBinding1134 = FlaxGetter.plain(
  "yzzz",
  _flaxBinding888,
  _Vector3_yzzz,
);
const _flaxBinding1135 = FlaxGetter.plain(
  "zxxx",
  _flaxBinding888,
  _Vector3_zxxx,
);
const _flaxBinding1136 = FlaxGetter.plain(
  "zxxy",
  _flaxBinding888,
  _Vector3_zxxy,
);
const _flaxBinding1137 = FlaxGetter.plain(
  "zxxz",
  _flaxBinding888,
  _Vector3_zxxz,
);
const _flaxBinding1138 = FlaxGetter.plain(
  "zxyx",
  _flaxBinding888,
  _Vector3_zxyx,
);
const _flaxBinding1139 = FlaxGetter.plain(
  "zxyy",
  _flaxBinding888,
  _Vector3_zxyy,
);
const _flaxBinding1140 = FlaxGetter.plain(
  "zxyz",
  _flaxBinding888,
  _Vector3_zxyz,
);
const _flaxBinding1141 = FlaxGetter.plain(
  "zxzx",
  _flaxBinding888,
  _Vector3_zxzx,
);
const _flaxBinding1142 = FlaxGetter.plain(
  "zxzy",
  _flaxBinding888,
  _Vector3_zxzy,
);
const _flaxBinding1143 = FlaxGetter.plain(
  "zxzz",
  _flaxBinding888,
  _Vector3_zxzz,
);
const _flaxBinding1144 = FlaxGetter.plain(
  "zyxx",
  _flaxBinding888,
  _Vector3_zyxx,
);
const _flaxBinding1145 = FlaxGetter.plain(
  "zyxy",
  _flaxBinding888,
  _Vector3_zyxy,
);
const _flaxBinding1146 = FlaxGetter.plain(
  "zyxz",
  _flaxBinding888,
  _Vector3_zyxz,
);
const _flaxBinding1147 = FlaxGetter.plain(
  "zyyx",
  _flaxBinding888,
  _Vector3_zyyx,
);
const _flaxBinding1148 = FlaxGetter.plain(
  "zyyy",
  _flaxBinding888,
  _Vector3_zyyy,
);
const _flaxBinding1149 = FlaxGetter.plain(
  "zyyz",
  _flaxBinding888,
  _Vector3_zyyz,
);
const _flaxBinding1150 = FlaxGetter.plain(
  "zyzx",
  _flaxBinding888,
  _Vector3_zyzx,
);
const _flaxBinding1151 = FlaxGetter.plain(
  "zyzy",
  _flaxBinding888,
  _Vector3_zyzy,
);
const _flaxBinding1152 = FlaxGetter.plain(
  "zyzz",
  _flaxBinding888,
  _Vector3_zyzz,
);
const _flaxBinding1153 = FlaxGetter.plain(
  "zzxx",
  _flaxBinding888,
  _Vector3_zzxx,
);
const _flaxBinding1154 = FlaxGetter.plain(
  "zzxy",
  _flaxBinding888,
  _Vector3_zzxy,
);
const _flaxBinding1155 = FlaxGetter.plain(
  "zzxz",
  _flaxBinding888,
  _Vector3_zzxz,
);
const _flaxBinding1156 = FlaxGetter.plain(
  "zzyx",
  _flaxBinding888,
  _Vector3_zzyx,
);
const _flaxBinding1157 = FlaxGetter.plain(
  "zzyy",
  _flaxBinding888,
  _Vector3_zzyy,
);
const _flaxBinding1158 = FlaxGetter.plain(
  "zzyz",
  _flaxBinding888,
  _Vector3_zzyz,
);
const _flaxBinding1159 = FlaxGetter.plain(
  "zzzx",
  _flaxBinding888,
  _Vector3_zzzx,
);
const _flaxBinding1160 = FlaxGetter.plain(
  "zzzy",
  _flaxBinding888,
  _Vector3_zzzy,
);
const _flaxBinding1161 = FlaxGetter.plain(
  "zzzz",
  _flaxBinding888,
  _Vector3_zzzz,
);
const _flaxBinding1162 = FlaxGetter.plain("r", flaxDoubleType, _Vector3_r);
const _flaxBinding1163 = FlaxGetter.plain("g", flaxDoubleType, _Vector3_g);
const _flaxBinding1164 = FlaxGetter.plain("b", flaxDoubleType, _Vector3_b);
const _flaxBinding1165 = FlaxGetter.plain("s", flaxDoubleType, _Vector3_s);
const _flaxBinding1166 = FlaxGetter.plain("t", flaxDoubleType, _Vector3_t);
const _flaxBinding1167 = FlaxGetter.plain("p", flaxDoubleType, _Vector3_p);
const _flaxBinding1168 = FlaxGetter.plain("x", flaxDoubleType, _Vector3_x);
const _flaxBinding1169 = FlaxGetter.plain("y", flaxDoubleType, _Vector3_y);
const _flaxBinding1170 = FlaxGetter.plain("z", flaxDoubleType, _Vector3_z);
const _flaxBinding1171 = FlaxGetter.plain("rr", _flaxBinding426, _Vector3_rr);
const _flaxBinding1172 = FlaxGetter.plain("rg", _flaxBinding426, _Vector3_rg);
const _flaxBinding1173 = FlaxGetter.plain("rb", _flaxBinding426, _Vector3_rb);
const _flaxBinding1174 = FlaxGetter.plain("gr", _flaxBinding426, _Vector3_gr);
const _flaxBinding1175 = FlaxGetter.plain("gg", _flaxBinding426, _Vector3_gg);
const _flaxBinding1176 = FlaxGetter.plain("gb", _flaxBinding426, _Vector3_gb);
const _flaxBinding1177 = FlaxGetter.plain("br", _flaxBinding426, _Vector3_br);
const _flaxBinding1178 = FlaxGetter.plain("bg", _flaxBinding426, _Vector3_bg);
const _flaxBinding1179 = FlaxGetter.plain("bb", _flaxBinding426, _Vector3_bb);
const _flaxBinding1180 = FlaxGetter.plain("rrr", _flaxBinding517, _Vector3_rrr);
const _flaxBinding1181 = FlaxGetter.plain("rrg", _flaxBinding517, _Vector3_rrg);
const _flaxBinding1182 = FlaxGetter.plain("rrb", _flaxBinding517, _Vector3_rrb);
const _flaxBinding1183 = FlaxGetter.plain("rgr", _flaxBinding517, _Vector3_rgr);
const _flaxBinding1184 = FlaxGetter.plain("rgg", _flaxBinding517, _Vector3_rgg);
const _flaxBinding1185 = FlaxGetter.plain("rgb", _flaxBinding517, _Vector3_rgb);
const _flaxBinding1186 = FlaxGetter.plain("rbr", _flaxBinding517, _Vector3_rbr);
const _flaxBinding1187 = FlaxGetter.plain("rbg", _flaxBinding517, _Vector3_rbg);
const _flaxBinding1188 = FlaxGetter.plain("rbb", _flaxBinding517, _Vector3_rbb);
const _flaxBinding1189 = FlaxGetter.plain("grr", _flaxBinding517, _Vector3_grr);
const _flaxBinding1190 = FlaxGetter.plain("grg", _flaxBinding517, _Vector3_grg);
const _flaxBinding1191 = FlaxGetter.plain("grb", _flaxBinding517, _Vector3_grb);
const _flaxBinding1192 = FlaxGetter.plain("ggr", _flaxBinding517, _Vector3_ggr);
const _flaxBinding1193 = FlaxGetter.plain("ggg", _flaxBinding517, _Vector3_ggg);
const _flaxBinding1194 = FlaxGetter.plain("ggb", _flaxBinding517, _Vector3_ggb);
const _flaxBinding1195 = FlaxGetter.plain("gbr", _flaxBinding517, _Vector3_gbr);
const _flaxBinding1196 = FlaxGetter.plain("gbg", _flaxBinding517, _Vector3_gbg);
const _flaxBinding1197 = FlaxGetter.plain("gbb", _flaxBinding517, _Vector3_gbb);
const _flaxBinding1198 = FlaxGetter.plain("brr", _flaxBinding517, _Vector3_brr);
const _flaxBinding1199 = FlaxGetter.plain("brg", _flaxBinding517, _Vector3_brg);
const _flaxBinding1200 = FlaxGetter.plain("brb", _flaxBinding517, _Vector3_brb);
const _flaxBinding1201 = FlaxGetter.plain("bgr", _flaxBinding517, _Vector3_bgr);
const _flaxBinding1202 = FlaxGetter.plain("bgg", _flaxBinding517, _Vector3_bgg);
const _flaxBinding1203 = FlaxGetter.plain("bgb", _flaxBinding517, _Vector3_bgb);
const _flaxBinding1204 = FlaxGetter.plain("bbr", _flaxBinding517, _Vector3_bbr);
const _flaxBinding1205 = FlaxGetter.plain("bbg", _flaxBinding517, _Vector3_bbg);
const _flaxBinding1206 = FlaxGetter.plain("bbb", _flaxBinding517, _Vector3_bbb);
const _flaxBinding1207 = FlaxGetter.plain(
  "rrrr",
  _flaxBinding888,
  _Vector3_rrrr,
);
const _flaxBinding1208 = FlaxGetter.plain(
  "rrrg",
  _flaxBinding888,
  _Vector3_rrrg,
);
const _flaxBinding1209 = FlaxGetter.plain(
  "rrrb",
  _flaxBinding888,
  _Vector3_rrrb,
);
const _flaxBinding1210 = FlaxGetter.plain(
  "rrgr",
  _flaxBinding888,
  _Vector3_rrgr,
);
const _flaxBinding1211 = FlaxGetter.plain(
  "rrgg",
  _flaxBinding888,
  _Vector3_rrgg,
);
const _flaxBinding1212 = FlaxGetter.plain(
  "rrgb",
  _flaxBinding888,
  _Vector3_rrgb,
);
const _flaxBinding1213 = FlaxGetter.plain(
  "rrbr",
  _flaxBinding888,
  _Vector3_rrbr,
);
const _flaxBinding1214 = FlaxGetter.plain(
  "rrbg",
  _flaxBinding888,
  _Vector3_rrbg,
);
const _flaxBinding1215 = FlaxGetter.plain(
  "rrbb",
  _flaxBinding888,
  _Vector3_rrbb,
);
const _flaxBinding1216 = FlaxGetter.plain(
  "rgrr",
  _flaxBinding888,
  _Vector3_rgrr,
);
const _flaxBinding1217 = FlaxGetter.plain(
  "rgrg",
  _flaxBinding888,
  _Vector3_rgrg,
);
const _flaxBinding1218 = FlaxGetter.plain(
  "rgrb",
  _flaxBinding888,
  _Vector3_rgrb,
);
const _flaxBinding1219 = FlaxGetter.plain(
  "rggr",
  _flaxBinding888,
  _Vector3_rggr,
);
const _flaxBinding1220 = FlaxGetter.plain(
  "rggg",
  _flaxBinding888,
  _Vector3_rggg,
);
const _flaxBinding1221 = FlaxGetter.plain(
  "rggb",
  _flaxBinding888,
  _Vector3_rggb,
);
const _flaxBinding1222 = FlaxGetter.plain(
  "rgbr",
  _flaxBinding888,
  _Vector3_rgbr,
);
const _flaxBinding1223 = FlaxGetter.plain(
  "rgbg",
  _flaxBinding888,
  _Vector3_rgbg,
);
const _flaxBinding1224 = FlaxGetter.plain(
  "rgbb",
  _flaxBinding888,
  _Vector3_rgbb,
);
const _flaxBinding1225 = FlaxGetter.plain(
  "rbrr",
  _flaxBinding888,
  _Vector3_rbrr,
);
const _flaxBinding1226 = FlaxGetter.plain(
  "rbrg",
  _flaxBinding888,
  _Vector3_rbrg,
);
const _flaxBinding1227 = FlaxGetter.plain(
  "rbrb",
  _flaxBinding888,
  _Vector3_rbrb,
);
const _flaxBinding1228 = FlaxGetter.plain(
  "rbgr",
  _flaxBinding888,
  _Vector3_rbgr,
);
const _flaxBinding1229 = FlaxGetter.plain(
  "rbgg",
  _flaxBinding888,
  _Vector3_rbgg,
);
const _flaxBinding1230 = FlaxGetter.plain(
  "rbgb",
  _flaxBinding888,
  _Vector3_rbgb,
);
const _flaxBinding1231 = FlaxGetter.plain(
  "rbbr",
  _flaxBinding888,
  _Vector3_rbbr,
);
const _flaxBinding1232 = FlaxGetter.plain(
  "rbbg",
  _flaxBinding888,
  _Vector3_rbbg,
);
const _flaxBinding1233 = FlaxGetter.plain(
  "rbbb",
  _flaxBinding888,
  _Vector3_rbbb,
);
const _flaxBinding1234 = FlaxGetter.plain(
  "grrr",
  _flaxBinding888,
  _Vector3_grrr,
);
const _flaxBinding1235 = FlaxGetter.plain(
  "grrg",
  _flaxBinding888,
  _Vector3_grrg,
);
const _flaxBinding1236 = FlaxGetter.plain(
  "grrb",
  _flaxBinding888,
  _Vector3_grrb,
);
const _flaxBinding1237 = FlaxGetter.plain(
  "grgr",
  _flaxBinding888,
  _Vector3_grgr,
);
const _flaxBinding1238 = FlaxGetter.plain(
  "grgg",
  _flaxBinding888,
  _Vector3_grgg,
);
const _flaxBinding1239 = FlaxGetter.plain(
  "grgb",
  _flaxBinding888,
  _Vector3_grgb,
);
const _flaxBinding1240 = FlaxGetter.plain(
  "grbr",
  _flaxBinding888,
  _Vector3_grbr,
);
const _flaxBinding1241 = FlaxGetter.plain(
  "grbg",
  _flaxBinding888,
  _Vector3_grbg,
);
const _flaxBinding1242 = FlaxGetter.plain(
  "grbb",
  _flaxBinding888,
  _Vector3_grbb,
);
const _flaxBinding1243 = FlaxGetter.plain(
  "ggrr",
  _flaxBinding888,
  _Vector3_ggrr,
);
const _flaxBinding1244 = FlaxGetter.plain(
  "ggrg",
  _flaxBinding888,
  _Vector3_ggrg,
);
const _flaxBinding1245 = FlaxGetter.plain(
  "ggrb",
  _flaxBinding888,
  _Vector3_ggrb,
);
const _flaxBinding1246 = FlaxGetter.plain(
  "gggr",
  _flaxBinding888,
  _Vector3_gggr,
);
const _flaxBinding1247 = FlaxGetter.plain(
  "gggg",
  _flaxBinding888,
  _Vector3_gggg,
);
const _flaxBinding1248 = FlaxGetter.plain(
  "gggb",
  _flaxBinding888,
  _Vector3_gggb,
);
const _flaxBinding1249 = FlaxGetter.plain(
  "ggbr",
  _flaxBinding888,
  _Vector3_ggbr,
);
const _flaxBinding1250 = FlaxGetter.plain(
  "ggbg",
  _flaxBinding888,
  _Vector3_ggbg,
);
const _flaxBinding1251 = FlaxGetter.plain(
  "ggbb",
  _flaxBinding888,
  _Vector3_ggbb,
);
const _flaxBinding1252 = FlaxGetter.plain(
  "gbrr",
  _flaxBinding888,
  _Vector3_gbrr,
);
const _flaxBinding1253 = FlaxGetter.plain(
  "gbrg",
  _flaxBinding888,
  _Vector3_gbrg,
);
const _flaxBinding1254 = FlaxGetter.plain(
  "gbrb",
  _flaxBinding888,
  _Vector3_gbrb,
);
const _flaxBinding1255 = FlaxGetter.plain(
  "gbgr",
  _flaxBinding888,
  _Vector3_gbgr,
);
const _flaxBinding1256 = FlaxGetter.plain(
  "gbgg",
  _flaxBinding888,
  _Vector3_gbgg,
);
const _flaxBinding1257 = FlaxGetter.plain(
  "gbgb",
  _flaxBinding888,
  _Vector3_gbgb,
);
const _flaxBinding1258 = FlaxGetter.plain(
  "gbbr",
  _flaxBinding888,
  _Vector3_gbbr,
);
const _flaxBinding1259 = FlaxGetter.plain(
  "gbbg",
  _flaxBinding888,
  _Vector3_gbbg,
);
const _flaxBinding1260 = FlaxGetter.plain(
  "gbbb",
  _flaxBinding888,
  _Vector3_gbbb,
);
const _flaxBinding1261 = FlaxGetter.plain(
  "brrr",
  _flaxBinding888,
  _Vector3_brrr,
);
const _flaxBinding1262 = FlaxGetter.plain(
  "brrg",
  _flaxBinding888,
  _Vector3_brrg,
);
const _flaxBinding1263 = FlaxGetter.plain(
  "brrb",
  _flaxBinding888,
  _Vector3_brrb,
);
const _flaxBinding1264 = FlaxGetter.plain(
  "brgr",
  _flaxBinding888,
  _Vector3_brgr,
);
const _flaxBinding1265 = FlaxGetter.plain(
  "brgg",
  _flaxBinding888,
  _Vector3_brgg,
);
const _flaxBinding1266 = FlaxGetter.plain(
  "brgb",
  _flaxBinding888,
  _Vector3_brgb,
);
const _flaxBinding1267 = FlaxGetter.plain(
  "brbr",
  _flaxBinding888,
  _Vector3_brbr,
);
const _flaxBinding1268 = FlaxGetter.plain(
  "brbg",
  _flaxBinding888,
  _Vector3_brbg,
);
const _flaxBinding1269 = FlaxGetter.plain(
  "brbb",
  _flaxBinding888,
  _Vector3_brbb,
);
const _flaxBinding1270 = FlaxGetter.plain(
  "bgrr",
  _flaxBinding888,
  _Vector3_bgrr,
);
const _flaxBinding1271 = FlaxGetter.plain(
  "bgrg",
  _flaxBinding888,
  _Vector3_bgrg,
);
const _flaxBinding1272 = FlaxGetter.plain(
  "bgrb",
  _flaxBinding888,
  _Vector3_bgrb,
);
const _flaxBinding1273 = FlaxGetter.plain(
  "bggr",
  _flaxBinding888,
  _Vector3_bggr,
);
const _flaxBinding1274 = FlaxGetter.plain(
  "bggg",
  _flaxBinding888,
  _Vector3_bggg,
);
const _flaxBinding1275 = FlaxGetter.plain(
  "bggb",
  _flaxBinding888,
  _Vector3_bggb,
);
const _flaxBinding1276 = FlaxGetter.plain(
  "bgbr",
  _flaxBinding888,
  _Vector3_bgbr,
);
const _flaxBinding1277 = FlaxGetter.plain(
  "bgbg",
  _flaxBinding888,
  _Vector3_bgbg,
);
const _flaxBinding1278 = FlaxGetter.plain(
  "bgbb",
  _flaxBinding888,
  _Vector3_bgbb,
);
const _flaxBinding1279 = FlaxGetter.plain(
  "bbrr",
  _flaxBinding888,
  _Vector3_bbrr,
);
const _flaxBinding1280 = FlaxGetter.plain(
  "bbrg",
  _flaxBinding888,
  _Vector3_bbrg,
);
const _flaxBinding1281 = FlaxGetter.plain(
  "bbrb",
  _flaxBinding888,
  _Vector3_bbrb,
);
const _flaxBinding1282 = FlaxGetter.plain(
  "bbgr",
  _flaxBinding888,
  _Vector3_bbgr,
);
const _flaxBinding1283 = FlaxGetter.plain(
  "bbgg",
  _flaxBinding888,
  _Vector3_bbgg,
);
const _flaxBinding1284 = FlaxGetter.plain(
  "bbgb",
  _flaxBinding888,
  _Vector3_bbgb,
);
const _flaxBinding1285 = FlaxGetter.plain(
  "bbbr",
  _flaxBinding888,
  _Vector3_bbbr,
);
const _flaxBinding1286 = FlaxGetter.plain(
  "bbbg",
  _flaxBinding888,
  _Vector3_bbbg,
);
const _flaxBinding1287 = FlaxGetter.plain(
  "bbbb",
  _flaxBinding888,
  _Vector3_bbbb,
);
const _flaxBinding1288 = FlaxGetter.plain("ss", _flaxBinding426, _Vector3_ss);
const _flaxBinding1289 = FlaxGetter.plain("st", _flaxBinding426, _Vector3_st);
const _flaxBinding1290 = FlaxGetter.plain("sp", _flaxBinding426, _Vector3_sp);
const _flaxBinding1291 = FlaxGetter.plain("ts", _flaxBinding426, _Vector3_ts);
const _flaxBinding1292 = FlaxGetter.plain("tt", _flaxBinding426, _Vector3_tt);
const _flaxBinding1293 = FlaxGetter.plain("tp", _flaxBinding426, _Vector3_tp);
const _flaxBinding1294 = FlaxGetter.plain("ps", _flaxBinding426, _Vector3_ps);
const _flaxBinding1295 = FlaxGetter.plain("pt", _flaxBinding426, _Vector3_pt);
const _flaxBinding1296 = FlaxGetter.plain("pp", _flaxBinding426, _Vector3_pp);
const _flaxBinding1297 = FlaxGetter.plain("sss", _flaxBinding517, _Vector3_sss);
const _flaxBinding1298 = FlaxGetter.plain("sst", _flaxBinding517, _Vector3_sst);
const _flaxBinding1299 = FlaxGetter.plain("ssp", _flaxBinding517, _Vector3_ssp);
const _flaxBinding1300 = FlaxGetter.plain("sts", _flaxBinding517, _Vector3_sts);
const _flaxBinding1301 = FlaxGetter.plain("stt", _flaxBinding517, _Vector3_stt);
const _flaxBinding1302 = FlaxGetter.plain("stp", _flaxBinding517, _Vector3_stp);
const _flaxBinding1303 = FlaxGetter.plain("sps", _flaxBinding517, _Vector3_sps);
const _flaxBinding1304 = FlaxGetter.plain("spt", _flaxBinding517, _Vector3_spt);
const _flaxBinding1305 = FlaxGetter.plain("spp", _flaxBinding517, _Vector3_spp);
const _flaxBinding1306 = FlaxGetter.plain("tss", _flaxBinding517, _Vector3_tss);
const _flaxBinding1307 = FlaxGetter.plain("tst", _flaxBinding517, _Vector3_tst);
const _flaxBinding1308 = FlaxGetter.plain("tsp", _flaxBinding517, _Vector3_tsp);
const _flaxBinding1309 = FlaxGetter.plain("tts", _flaxBinding517, _Vector3_tts);
const _flaxBinding1310 = FlaxGetter.plain("ttt", _flaxBinding517, _Vector3_ttt);
const _flaxBinding1311 = FlaxGetter.plain("ttp", _flaxBinding517, _Vector3_ttp);
const _flaxBinding1312 = FlaxGetter.plain("tps", _flaxBinding517, _Vector3_tps);
const _flaxBinding1313 = FlaxGetter.plain("tpt", _flaxBinding517, _Vector3_tpt);
const _flaxBinding1314 = FlaxGetter.plain("tpp", _flaxBinding517, _Vector3_tpp);
const _flaxBinding1315 = FlaxGetter.plain("pss", _flaxBinding517, _Vector3_pss);
const _flaxBinding1316 = FlaxGetter.plain("pst", _flaxBinding517, _Vector3_pst);
const _flaxBinding1317 = FlaxGetter.plain("psp", _flaxBinding517, _Vector3_psp);
const _flaxBinding1318 = FlaxGetter.plain("pts", _flaxBinding517, _Vector3_pts);
const _flaxBinding1319 = FlaxGetter.plain("ptt", _flaxBinding517, _Vector3_ptt);
const _flaxBinding1320 = FlaxGetter.plain("ptp", _flaxBinding517, _Vector3_ptp);
const _flaxBinding1321 = FlaxGetter.plain("pps", _flaxBinding517, _Vector3_pps);
const _flaxBinding1322 = FlaxGetter.plain("ppt", _flaxBinding517, _Vector3_ppt);
const _flaxBinding1323 = FlaxGetter.plain("ppp", _flaxBinding517, _Vector3_ppp);
const _flaxBinding1324 = FlaxGetter.plain(
  "ssss",
  _flaxBinding888,
  _Vector3_ssss,
);
const _flaxBinding1325 = FlaxGetter.plain(
  "ssst",
  _flaxBinding888,
  _Vector3_ssst,
);
const _flaxBinding1326 = FlaxGetter.plain(
  "sssp",
  _flaxBinding888,
  _Vector3_sssp,
);
const _flaxBinding1327 = FlaxGetter.plain(
  "ssts",
  _flaxBinding888,
  _Vector3_ssts,
);
const _flaxBinding1328 = FlaxGetter.plain(
  "sstt",
  _flaxBinding888,
  _Vector3_sstt,
);
const _flaxBinding1329 = FlaxGetter.plain(
  "sstp",
  _flaxBinding888,
  _Vector3_sstp,
);
const _flaxBinding1330 = FlaxGetter.plain(
  "ssps",
  _flaxBinding888,
  _Vector3_ssps,
);
const _flaxBinding1331 = FlaxGetter.plain(
  "sspt",
  _flaxBinding888,
  _Vector3_sspt,
);
const _flaxBinding1332 = FlaxGetter.plain(
  "sspp",
  _flaxBinding888,
  _Vector3_sspp,
);
const _flaxBinding1333 = FlaxGetter.plain(
  "stss",
  _flaxBinding888,
  _Vector3_stss,
);
const _flaxBinding1334 = FlaxGetter.plain(
  "stst",
  _flaxBinding888,
  _Vector3_stst,
);
const _flaxBinding1335 = FlaxGetter.plain(
  "stsp",
  _flaxBinding888,
  _Vector3_stsp,
);
const _flaxBinding1336 = FlaxGetter.plain(
  "stts",
  _flaxBinding888,
  _Vector3_stts,
);
const _flaxBinding1337 = FlaxGetter.plain(
  "sttt",
  _flaxBinding888,
  _Vector3_sttt,
);
const _flaxBinding1338 = FlaxGetter.plain(
  "sttp",
  _flaxBinding888,
  _Vector3_sttp,
);
const _flaxBinding1339 = FlaxGetter.plain(
  "stps",
  _flaxBinding888,
  _Vector3_stps,
);
const _flaxBinding1340 = FlaxGetter.plain(
  "stpt",
  _flaxBinding888,
  _Vector3_stpt,
);
const _flaxBinding1341 = FlaxGetter.plain(
  "stpp",
  _flaxBinding888,
  _Vector3_stpp,
);
const _flaxBinding1342 = FlaxGetter.plain(
  "spss",
  _flaxBinding888,
  _Vector3_spss,
);
const _flaxBinding1343 = FlaxGetter.plain(
  "spst",
  _flaxBinding888,
  _Vector3_spst,
);
const _flaxBinding1344 = FlaxGetter.plain(
  "spsp",
  _flaxBinding888,
  _Vector3_spsp,
);
const _flaxBinding1345 = FlaxGetter.plain(
  "spts",
  _flaxBinding888,
  _Vector3_spts,
);
const _flaxBinding1346 = FlaxGetter.plain(
  "sptt",
  _flaxBinding888,
  _Vector3_sptt,
);
const _flaxBinding1347 = FlaxGetter.plain(
  "sptp",
  _flaxBinding888,
  _Vector3_sptp,
);
const _flaxBinding1348 = FlaxGetter.plain(
  "spps",
  _flaxBinding888,
  _Vector3_spps,
);
const _flaxBinding1349 = FlaxGetter.plain(
  "sppt",
  _flaxBinding888,
  _Vector3_sppt,
);
const _flaxBinding1350 = FlaxGetter.plain(
  "sppp",
  _flaxBinding888,
  _Vector3_sppp,
);
const _flaxBinding1351 = FlaxGetter.plain(
  "tsss",
  _flaxBinding888,
  _Vector3_tsss,
);
const _flaxBinding1352 = FlaxGetter.plain(
  "tsst",
  _flaxBinding888,
  _Vector3_tsst,
);
const _flaxBinding1353 = FlaxGetter.plain(
  "tssp",
  _flaxBinding888,
  _Vector3_tssp,
);
const _flaxBinding1354 = FlaxGetter.plain(
  "tsts",
  _flaxBinding888,
  _Vector3_tsts,
);
const _flaxBinding1355 = FlaxGetter.plain(
  "tstt",
  _flaxBinding888,
  _Vector3_tstt,
);
const _flaxBinding1356 = FlaxGetter.plain(
  "tstp",
  _flaxBinding888,
  _Vector3_tstp,
);
const _flaxBinding1357 = FlaxGetter.plain(
  "tsps",
  _flaxBinding888,
  _Vector3_tsps,
);
const _flaxBinding1358 = FlaxGetter.plain(
  "tspt",
  _flaxBinding888,
  _Vector3_tspt,
);
const _flaxBinding1359 = FlaxGetter.plain(
  "tspp",
  _flaxBinding888,
  _Vector3_tspp,
);
const _flaxBinding1360 = FlaxGetter.plain(
  "ttss",
  _flaxBinding888,
  _Vector3_ttss,
);
const _flaxBinding1361 = FlaxGetter.plain(
  "ttst",
  _flaxBinding888,
  _Vector3_ttst,
);
const _flaxBinding1362 = FlaxGetter.plain(
  "ttsp",
  _flaxBinding888,
  _Vector3_ttsp,
);
const _flaxBinding1363 = FlaxGetter.plain(
  "ttts",
  _flaxBinding888,
  _Vector3_ttts,
);
const _flaxBinding1364 = FlaxGetter.plain(
  "tttt",
  _flaxBinding888,
  _Vector3_tttt,
);
const _flaxBinding1365 = FlaxGetter.plain(
  "tttp",
  _flaxBinding888,
  _Vector3_tttp,
);
const _flaxBinding1366 = FlaxGetter.plain(
  "ttps",
  _flaxBinding888,
  _Vector3_ttps,
);
const _flaxBinding1367 = FlaxGetter.plain(
  "ttpt",
  _flaxBinding888,
  _Vector3_ttpt,
);
const _flaxBinding1368 = FlaxGetter.plain(
  "ttpp",
  _flaxBinding888,
  _Vector3_ttpp,
);
const _flaxBinding1369 = FlaxGetter.plain(
  "tpss",
  _flaxBinding888,
  _Vector3_tpss,
);
const _flaxBinding1370 = FlaxGetter.plain(
  "tpst",
  _flaxBinding888,
  _Vector3_tpst,
);
const _flaxBinding1371 = FlaxGetter.plain(
  "tpsp",
  _flaxBinding888,
  _Vector3_tpsp,
);
const _flaxBinding1372 = FlaxGetter.plain(
  "tpts",
  _flaxBinding888,
  _Vector3_tpts,
);
const _flaxBinding1373 = FlaxGetter.plain(
  "tptt",
  _flaxBinding888,
  _Vector3_tptt,
);
const _flaxBinding1374 = FlaxGetter.plain(
  "tptp",
  _flaxBinding888,
  _Vector3_tptp,
);
const _flaxBinding1375 = FlaxGetter.plain(
  "tpps",
  _flaxBinding888,
  _Vector3_tpps,
);
const _flaxBinding1376 = FlaxGetter.plain(
  "tppt",
  _flaxBinding888,
  _Vector3_tppt,
);
const _flaxBinding1377 = FlaxGetter.plain(
  "tppp",
  _flaxBinding888,
  _Vector3_tppp,
);
const _flaxBinding1378 = FlaxGetter.plain(
  "psss",
  _flaxBinding888,
  _Vector3_psss,
);
const _flaxBinding1379 = FlaxGetter.plain(
  "psst",
  _flaxBinding888,
  _Vector3_psst,
);
const _flaxBinding1380 = FlaxGetter.plain(
  "pssp",
  _flaxBinding888,
  _Vector3_pssp,
);
const _flaxBinding1381 = FlaxGetter.plain(
  "psts",
  _flaxBinding888,
  _Vector3_psts,
);
const _flaxBinding1382 = FlaxGetter.plain(
  "pstt",
  _flaxBinding888,
  _Vector3_pstt,
);
const _flaxBinding1383 = FlaxGetter.plain(
  "pstp",
  _flaxBinding888,
  _Vector3_pstp,
);
const _flaxBinding1384 = FlaxGetter.plain(
  "psps",
  _flaxBinding888,
  _Vector3_psps,
);
const _flaxBinding1385 = FlaxGetter.plain(
  "pspt",
  _flaxBinding888,
  _Vector3_pspt,
);
const _flaxBinding1386 = FlaxGetter.plain(
  "pspp",
  _flaxBinding888,
  _Vector3_pspp,
);
const _flaxBinding1387 = FlaxGetter.plain(
  "ptss",
  _flaxBinding888,
  _Vector3_ptss,
);
const _flaxBinding1388 = FlaxGetter.plain(
  "ptst",
  _flaxBinding888,
  _Vector3_ptst,
);
const _flaxBinding1389 = FlaxGetter.plain(
  "ptsp",
  _flaxBinding888,
  _Vector3_ptsp,
);
const _flaxBinding1390 = FlaxGetter.plain(
  "ptts",
  _flaxBinding888,
  _Vector3_ptts,
);
const _flaxBinding1391 = FlaxGetter.plain(
  "pttt",
  _flaxBinding888,
  _Vector3_pttt,
);
const _flaxBinding1392 = FlaxGetter.plain(
  "pttp",
  _flaxBinding888,
  _Vector3_pttp,
);
const _flaxBinding1393 = FlaxGetter.plain(
  "ptps",
  _flaxBinding888,
  _Vector3_ptps,
);
const _flaxBinding1394 = FlaxGetter.plain(
  "ptpt",
  _flaxBinding888,
  _Vector3_ptpt,
);
const _flaxBinding1395 = FlaxGetter.plain(
  "ptpp",
  _flaxBinding888,
  _Vector3_ptpp,
);
const _flaxBinding1396 = FlaxGetter.plain(
  "ppss",
  _flaxBinding888,
  _Vector3_ppss,
);
const _flaxBinding1397 = FlaxGetter.plain(
  "ppst",
  _flaxBinding888,
  _Vector3_ppst,
);
const _flaxBinding1398 = FlaxGetter.plain(
  "ppsp",
  _flaxBinding888,
  _Vector3_ppsp,
);
const _flaxBinding1399 = FlaxGetter.plain(
  "ppts",
  _flaxBinding888,
  _Vector3_ppts,
);
const _flaxBinding1400 = FlaxGetter.plain(
  "pptt",
  _flaxBinding888,
  _Vector3_pptt,
);
const _flaxBinding1401 = FlaxGetter.plain(
  "pptp",
  _flaxBinding888,
  _Vector3_pptp,
);
const _flaxBinding1402 = FlaxGetter.plain(
  "ppps",
  _flaxBinding888,
  _Vector3_ppps,
);
const _flaxBinding1403 = FlaxGetter.plain(
  "pppt",
  _flaxBinding888,
  _Vector3_pppt,
);
const _flaxBinding1404 = FlaxGetter.plain(
  "pppp",
  _flaxBinding888,
  _Vector3_pppp,
);
const _flaxBinding1405 = FlaxSetter(
  "length",
  flaxDoubleType,
  _Vector3_set_length,
);
const _flaxBinding1406 = FlaxSetter("xy", _flaxBinding426, _Vector3_set_xy);
const _flaxBinding1407 = FlaxSetter("xz", _flaxBinding426, _Vector3_set_xz);
const _flaxBinding1408 = FlaxSetter("yx", _flaxBinding426, _Vector3_set_yx);
const _flaxBinding1409 = FlaxSetter("yz", _flaxBinding426, _Vector3_set_yz);
const _flaxBinding1410 = FlaxSetter("zx", _flaxBinding426, _Vector3_set_zx);
const _flaxBinding1411 = FlaxSetter("zy", _flaxBinding426, _Vector3_set_zy);
const _flaxBinding1412 = FlaxSetter("xyz", _flaxBinding517, _Vector3_set_xyz);
const _flaxBinding1413 = FlaxSetter("xzy", _flaxBinding517, _Vector3_set_xzy);
const _flaxBinding1414 = FlaxSetter("yxz", _flaxBinding517, _Vector3_set_yxz);
const _flaxBinding1415 = FlaxSetter("yzx", _flaxBinding517, _Vector3_set_yzx);
const _flaxBinding1416 = FlaxSetter("zxy", _flaxBinding517, _Vector3_set_zxy);
const _flaxBinding1417 = FlaxSetter("zyx", _flaxBinding517, _Vector3_set_zyx);
const _flaxBinding1418 = FlaxSetter("r", flaxDoubleType, _Vector3_set_r);
const _flaxBinding1419 = FlaxSetter("g", flaxDoubleType, _Vector3_set_g);
const _flaxBinding1420 = FlaxSetter("b", flaxDoubleType, _Vector3_set_b);
const _flaxBinding1421 = FlaxSetter("s", flaxDoubleType, _Vector3_set_s);
const _flaxBinding1422 = FlaxSetter("t", flaxDoubleType, _Vector3_set_t);
const _flaxBinding1423 = FlaxSetter("p", flaxDoubleType, _Vector3_set_p);
const _flaxBinding1424 = FlaxSetter("x", flaxDoubleType, _Vector3_set_x);
const _flaxBinding1425 = FlaxSetter("y", flaxDoubleType, _Vector3_set_y);
const _flaxBinding1426 = FlaxSetter("z", flaxDoubleType, _Vector3_set_z);
const _flaxBinding1427 = FlaxSetter("rg", _flaxBinding426, _Vector3_set_rg);
const _flaxBinding1428 = FlaxSetter("rb", _flaxBinding426, _Vector3_set_rb);
const _flaxBinding1429 = FlaxSetter("gr", _flaxBinding426, _Vector3_set_gr);
const _flaxBinding1430 = FlaxSetter("gb", _flaxBinding426, _Vector3_set_gb);
const _flaxBinding1431 = FlaxSetter("br", _flaxBinding426, _Vector3_set_br);
const _flaxBinding1432 = FlaxSetter("bg", _flaxBinding426, _Vector3_set_bg);
const _flaxBinding1433 = FlaxSetter("rgb", _flaxBinding517, _Vector3_set_rgb);
const _flaxBinding1434 = FlaxSetter("rbg", _flaxBinding517, _Vector3_set_rbg);
const _flaxBinding1435 = FlaxSetter("grb", _flaxBinding517, _Vector3_set_grb);
const _flaxBinding1436 = FlaxSetter("gbr", _flaxBinding517, _Vector3_set_gbr);
const _flaxBinding1437 = FlaxSetter("brg", _flaxBinding517, _Vector3_set_brg);
const _flaxBinding1438 = FlaxSetter("bgr", _flaxBinding517, _Vector3_set_bgr);
const _flaxBinding1439 = FlaxSetter("st", _flaxBinding426, _Vector3_set_st);
const _flaxBinding1440 = FlaxSetter("sp", _flaxBinding426, _Vector3_set_sp);
const _flaxBinding1441 = FlaxSetter("ts", _flaxBinding426, _Vector3_set_ts);
const _flaxBinding1442 = FlaxSetter("tp", _flaxBinding426, _Vector3_set_tp);
const _flaxBinding1443 = FlaxSetter("ps", _flaxBinding426, _Vector3_set_ps);
const _flaxBinding1444 = FlaxSetter("pt", _flaxBinding426, _Vector3_set_pt);
const _flaxBinding1445 = FlaxSetter("stp", _flaxBinding517, _Vector3_set_stp);
const _flaxBinding1446 = FlaxSetter("spt", _flaxBinding517, _Vector3_set_spt);
const _flaxBinding1447 = FlaxSetter("tsp", _flaxBinding517, _Vector3_set_tsp);
const _flaxBinding1448 = FlaxSetter("tps", _flaxBinding517, _Vector3_set_tps);
const _flaxBinding1449 = FlaxSetter("pst", _flaxBinding517, _Vector3_set_pst);
const _flaxBinding1450 = FlaxSetter("pts", _flaxBinding517, _Vector3_set_pts);
const _flaxBinding1451 = <FlaxParameter>[
  FlaxParameter.required("x", flaxDoubleType),
  FlaxParameter.required("y", flaxDoubleType),
  FlaxParameter.required("z", flaxDoubleType),
];
const _flaxBinding1452 = FlaxInstanceMethod.plain(
  _flaxBinding1451,
  flaxVoidType,
  _Vector3_setValues,
);
const _flaxBinding1453 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxVoidType,
  _Vector3_setZero,
);
const _flaxBinding1454 = <FlaxParameter>[
  FlaxParameter.required("other", _flaxBinding517),
];
const _flaxBinding1455 = FlaxInstanceMethod.plain(
  _flaxBinding1454,
  flaxVoidType,
  _Vector3_setFrom,
);
const _flaxBinding1456 = FlaxInstanceMethod.plain(
  _flaxBinding445,
  flaxVoidType,
  _Vector3_splat,
);
const _flaxBinding1457 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxStringType,
  _Vector3_toString,
);
const _flaxBinding1458 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxDoubleType,
  _Vector3_normalize,
);
const _flaxBinding1459 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxDoubleType,
  _Vector3_normalizeLength,
);
const _flaxBinding1460 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding517,
  _Vector3_normalized,
);
const _flaxBinding1461 = <FlaxParameter>[
  FlaxParameter.required("out", _flaxBinding517),
];
const _flaxBinding1462 = FlaxInstanceMethod.plain(
  _flaxBinding1461,
  _flaxBinding517,
  _Vector3_normalizeInto,
);
const _flaxBinding1463 = FlaxInstanceMethod.plain(
  _flaxBinding540,
  flaxDoubleType,
  _Vector3_distanceTo,
);
const _flaxBinding1464 = FlaxInstanceMethod.plain(
  _flaxBinding540,
  flaxDoubleType,
  _Vector3_distanceToSquared,
);
const _flaxBinding1465 = FlaxInstanceMethod.plain(
  _flaxBinding1454,
  flaxDoubleType,
  _Vector3_angleTo,
);
const _flaxBinding1466 = <FlaxParameter>[
  FlaxParameter.required("other", _flaxBinding517),
  FlaxParameter.required("normal", _flaxBinding517),
];
const _flaxBinding1467 = FlaxInstanceMethod.plain(
  _flaxBinding1466,
  flaxDoubleType,
  _Vector3_angleToSigned,
);
const _flaxBinding1468 = FlaxInstanceMethod.plain(
  _flaxBinding1454,
  flaxDoubleType,
  _Vector3_dot,
);
const _flaxBinding1469 = FlaxInstanceMethod.plain(
  _flaxBinding535,
  flaxVoidType,
  _Vector3_postmultiply,
);
const _flaxBinding1470 = FlaxInstanceMethod.plain(
  _flaxBinding1454,
  _flaxBinding517,
  _Vector3_cross,
);
const _flaxBinding1471 = <FlaxParameter>[
  FlaxParameter.required("other", _flaxBinding517),
  FlaxParameter.required("out", _flaxBinding517),
];
const _flaxBinding1472 = FlaxInstanceMethod.plain(
  _flaxBinding1471,
  _flaxBinding517,
  _Vector3_crossInto,
);
const _flaxBinding1473 = FlaxInstanceMethod.plain(
  _flaxBinding612,
  flaxVoidType,
  _Vector3_reflect,
);
const _flaxBinding1474 = FlaxInstanceMethod.plain(
  _flaxBinding612,
  _flaxBinding517,
  _Vector3_reflected,
);
const _flaxBinding1475 = FlaxInstanceMethod.plain(
  _flaxBinding569,
  flaxVoidType,
  _Vector3_applyProjection,
);
const _flaxBinding1476 = FlaxInstanceMethod.plain(
  _flaxBinding680,
  flaxVoidType,
  _Vector3_applyAxisAngle,
);
const _flaxBinding1477 = FlaxInstanceMethod.plain(
  _flaxBinding661,
  flaxVoidType,
  _Vector3_applyQuaternion,
);
const _flaxBinding1478 = FlaxInstanceMethod.plain(
  _flaxBinding535,
  flaxVoidType,
  _Vector3_applyMatrix3,
);
const _flaxBinding1479 = FlaxInstanceMethod.plain(
  _flaxBinding569,
  flaxVoidType,
  _Vector3_applyMatrix4,
);
const _flaxBinding1480 = <FlaxParameter>[
  FlaxParameter.required("correct", _flaxBinding517),
];
const _flaxBinding1481 = FlaxInstanceMethod.plain(
  _flaxBinding1480,
  flaxDoubleType,
  _Vector3_relativeError,
);
const _flaxBinding1482 = FlaxInstanceMethod.plain(
  _flaxBinding1480,
  flaxDoubleType,
  _Vector3_absoluteError,
);
const _flaxBinding1483 = FlaxInstanceMethod.plain(
  _flaxBinding540,
  flaxVoidType,
  _Vector3_add,
);
const _flaxBinding1484 = <FlaxParameter>[
  FlaxParameter.required("arg", _flaxBinding517),
  FlaxParameter.required("factor", flaxDoubleType),
];
const _flaxBinding1485 = FlaxInstanceMethod.plain(
  _flaxBinding1484,
  flaxVoidType,
  _Vector3_addScaled,
);
const _flaxBinding1486 = FlaxInstanceMethod.plain(
  _flaxBinding540,
  flaxVoidType,
  _Vector3_sub,
);
const _flaxBinding1487 = FlaxInstanceMethod.plain(
  _flaxBinding540,
  flaxVoidType,
  _Vector3_multiply,
);
const _flaxBinding1488 = FlaxInstanceMethod.plain(
  _flaxBinding540,
  flaxVoidType,
  _Vector3_divide,
);
const _flaxBinding1489 = FlaxInstanceMethod.plain(
  _flaxBinding445,
  flaxVoidType,
  _Vector3_scale,
);
const _flaxBinding1490 = FlaxInstanceMethod.plain(
  _flaxBinding445,
  _flaxBinding517,
  _Vector3_scaled,
);
const _flaxBinding1491 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxVoidType,
  _Vector3_negate,
);
const _flaxBinding1492 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxVoidType,
  _Vector3_absolute,
);
const _flaxBinding1493 = <FlaxParameter>[
  FlaxParameter.required("min", _flaxBinding517),
  FlaxParameter.required("max", _flaxBinding517),
];
const _flaxBinding1494 = FlaxInstanceMethod.plain(
  _flaxBinding1493,
  flaxVoidType,
  _Vector3_clamp,
);
const _flaxBinding1495 = FlaxInstanceMethod.plain(
  _flaxBinding1019,
  flaxVoidType,
  _Vector3_clampScalar,
);
const _flaxBinding1496 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxVoidType,
  _Vector3_floor,
);
const _flaxBinding1497 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxVoidType,
  _Vector3_ceil,
);
const _flaxBinding1498 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxVoidType,
  _Vector3_round,
);
const _flaxBinding1499 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxVoidType,
  _Vector3_roundToZero,
);
const _flaxBinding1500 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding517,
  _Vector3_clone,
);
const _flaxBinding1501 = FlaxInstanceMethod.plain(
  _flaxBinding540,
  _flaxBinding517,
  _Vector3_copyInto,
);
const _flaxBinding1502 = FlaxInstanceMethod.plain(
  _flaxBinding501,
  flaxVoidType,
  _Vector3_copyIntoArray,
);
const _flaxBinding1503 = FlaxInstanceMethod.plain(
  _flaxBinding501,
  flaxVoidType,
  _Vector3_copyFromArray,
);
const _flaxBinding1504 = FlaxInstanceMethod.plain(
  _flaxBinding503,
  flaxDoubleType,
  _Vector3_operatorGetIndex,
);
const _flaxBinding1505 = FlaxInstanceMethod.plain(
  _flaxBinding505,
  flaxVoidType,
  _Vector3_operatorSetIndex,
);
const _flaxBinding1506 = FlaxInstanceMethod.plain(
  _flaxBinding1454,
  _flaxBinding517,
  _Vector3_operatorAdd,
);
const _flaxBinding1507 = FlaxInstanceMethod.plain(
  _flaxBinding1454,
  _flaxBinding517,
  _Vector3_operatorSubtract,
);
const _flaxBinding1508 = FlaxInstanceMethod.plain(
  _flaxBinding479,
  _flaxBinding517,
  _Vector3_operatorMultiply,
);
const _flaxBinding1509 = FlaxInstanceMethod.plain(
  _flaxBinding479,
  _flaxBinding517,
  _Vector3_operatorDivide,
);
const _flaxBinding1510 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding517,
  _Vector3_operatorNegate,
);
const _flaxBinding1511 = <FlaxParameter>[
  FlaxParameter.required("_v3storage", _flaxBinding423),
];
const _flaxBinding1512 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:Vector3",
  [
    _flaxBinding1040,
    _flaxBinding1041,
    _flaxBinding1042,
    _flaxBinding1043,
    _flaxBinding1044,
    _flaxBinding1045,
    _flaxBinding1046,
    _flaxBinding1047,
    _flaxBinding1048,
    _flaxBinding1049,
    _flaxBinding1050,
    _flaxBinding1051,
    _flaxBinding1052,
    _flaxBinding1053,
    _flaxBinding1054,
    _flaxBinding1055,
    _flaxBinding1056,
    _flaxBinding1057,
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
  ],
  {
    "setValues": _flaxBinding1452,
    "setZero": _flaxBinding1453,
    "setFrom": _flaxBinding1455,
    "splat": _flaxBinding1456,
    "toString": _flaxBinding1457,
    "normalize": _flaxBinding1458,
    "normalizeLength": _flaxBinding1459,
    "normalized": _flaxBinding1460,
    "normalizeInto": _flaxBinding1462,
    "distanceTo": _flaxBinding1463,
    "distanceToSquared": _flaxBinding1464,
    "angleTo": _flaxBinding1465,
    "angleToSigned": _flaxBinding1467,
    "dot": _flaxBinding1468,
    "postmultiply": _flaxBinding1469,
    "cross": _flaxBinding1470,
    "crossInto": _flaxBinding1472,
    "reflect": _flaxBinding1473,
    "reflected": _flaxBinding1474,
    "applyProjection": _flaxBinding1475,
    "applyAxisAngle": _flaxBinding1476,
    "applyQuaternion": _flaxBinding1477,
    "applyMatrix3": _flaxBinding1478,
    "applyMatrix4": _flaxBinding1479,
    "relativeError": _flaxBinding1481,
    "absoluteError": _flaxBinding1482,
    "add": _flaxBinding1483,
    "addScaled": _flaxBinding1485,
    "sub": _flaxBinding1486,
    "multiply": _flaxBinding1487,
    "divide": _flaxBinding1488,
    "scale": _flaxBinding1489,
    "scaled": _flaxBinding1490,
    "negate": _flaxBinding1491,
    "absolute": _flaxBinding1492,
    "clamp": _flaxBinding1494,
    "clampScalar": _flaxBinding1495,
    "floor": _flaxBinding1496,
    "ceil": _flaxBinding1497,
    "round": _flaxBinding1498,
    "roundToZero": _flaxBinding1499,
    "clone": _flaxBinding1500,
    "copyInto": _flaxBinding1501,
    "copyIntoArray": _flaxBinding1502,
    "copyFromArray": _flaxBinding1503,
    "operatorGetIndex": _flaxBinding1504,
    "operatorSetIndex": _flaxBinding1505,
    "operatorAdd": _flaxBinding1506,
    "operatorSubtract": _flaxBinding1507,
    "operatorMultiply": _flaxBinding1508,
    "operatorDivide": _flaxBinding1509,
    "operatorNegate": _flaxBinding1510,
  },
  constructors: {
    "": _flaxBinding1451,
    "array": _flaxBinding501,
    "zero": _flaxBinding35,
    "all": _flaxBinding1037,
    "copy": _flaxBinding1454,
    "fromFloat64List": _flaxBinding1511,
    "fromBuffer": _flaxBinding684,
  },
  create: _createVector3,
  matches: _isVector3,
  setters: [
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
  ],
  supertypes: [
    "dart:core::Object",
    "package:vector_math/vector_math_64.dart::Vector",
  ],
);
const _flaxBinding1513 = FlaxGetter.plain(
  "storage",
  _flaxBinding423,
  _Vector4_storage,
);
const _flaxBinding1514 = FlaxGetter.plain(
  "length",
  flaxDoubleType,
  _Vector4_length,
);
const _flaxBinding1515 = FlaxGetter.plain(
  "length2",
  flaxDoubleType,
  _Vector4_length2,
);
const _flaxBinding1516 = FlaxGetter.plain(
  "isInfinite",
  flaxBoolType,
  _Vector4_isInfinite,
);
const _flaxBinding1517 = FlaxGetter.plain(
  "isNaN",
  flaxBoolType,
  _Vector4_isNaN,
);
const _flaxBinding1518 = FlaxGetter.plain("xx", _flaxBinding426, _Vector4_xx);
const _flaxBinding1519 = FlaxGetter.plain("xy", _flaxBinding426, _Vector4_xy);
const _flaxBinding1520 = FlaxGetter.plain("xz", _flaxBinding426, _Vector4_xz);
const _flaxBinding1521 = FlaxGetter.plain("xw", _flaxBinding426, _Vector4_xw);
const _flaxBinding1522 = FlaxGetter.plain("yx", _flaxBinding426, _Vector4_yx);
const _flaxBinding1523 = FlaxGetter.plain("yy", _flaxBinding426, _Vector4_yy);
const _flaxBinding1524 = FlaxGetter.plain("yz", _flaxBinding426, _Vector4_yz);
const _flaxBinding1525 = FlaxGetter.plain("yw", _flaxBinding426, _Vector4_yw);
const _flaxBinding1526 = FlaxGetter.plain("zx", _flaxBinding426, _Vector4_zx);
const _flaxBinding1527 = FlaxGetter.plain("zy", _flaxBinding426, _Vector4_zy);
const _flaxBinding1528 = FlaxGetter.plain("zz", _flaxBinding426, _Vector4_zz);
const _flaxBinding1529 = FlaxGetter.plain("zw", _flaxBinding426, _Vector4_zw);
const _flaxBinding1530 = FlaxGetter.plain("wx", _flaxBinding426, _Vector4_wx);
const _flaxBinding1531 = FlaxGetter.plain("wy", _flaxBinding426, _Vector4_wy);
const _flaxBinding1532 = FlaxGetter.plain("wz", _flaxBinding426, _Vector4_wz);
const _flaxBinding1533 = FlaxGetter.plain("ww", _flaxBinding426, _Vector4_ww);
const _flaxBinding1534 = FlaxGetter.plain("xxx", _flaxBinding517, _Vector4_xxx);
const _flaxBinding1535 = FlaxGetter.plain("xxy", _flaxBinding517, _Vector4_xxy);
const _flaxBinding1536 = FlaxGetter.plain("xxz", _flaxBinding517, _Vector4_xxz);
const _flaxBinding1537 = FlaxGetter.plain("xxw", _flaxBinding517, _Vector4_xxw);
const _flaxBinding1538 = FlaxGetter.plain("xyx", _flaxBinding517, _Vector4_xyx);
const _flaxBinding1539 = FlaxGetter.plain("xyy", _flaxBinding517, _Vector4_xyy);
const _flaxBinding1540 = FlaxGetter.plain("xyz", _flaxBinding517, _Vector4_xyz);
const _flaxBinding1541 = FlaxGetter.plain("xyw", _flaxBinding517, _Vector4_xyw);
const _flaxBinding1542 = FlaxGetter.plain("xzx", _flaxBinding517, _Vector4_xzx);
const _flaxBinding1543 = FlaxGetter.plain("xzy", _flaxBinding517, _Vector4_xzy);
const _flaxBinding1544 = FlaxGetter.plain("xzz", _flaxBinding517, _Vector4_xzz);
const _flaxBinding1545 = FlaxGetter.plain("xzw", _flaxBinding517, _Vector4_xzw);
const _flaxBinding1546 = FlaxGetter.plain("xwx", _flaxBinding517, _Vector4_xwx);
const _flaxBinding1547 = FlaxGetter.plain("xwy", _flaxBinding517, _Vector4_xwy);
const _flaxBinding1548 = FlaxGetter.plain("xwz", _flaxBinding517, _Vector4_xwz);
const _flaxBinding1549 = FlaxGetter.plain("xww", _flaxBinding517, _Vector4_xww);
const _flaxBinding1550 = FlaxGetter.plain("yxx", _flaxBinding517, _Vector4_yxx);
const _flaxBinding1551 = FlaxGetter.plain("yxy", _flaxBinding517, _Vector4_yxy);
const _flaxBinding1552 = FlaxGetter.plain("yxz", _flaxBinding517, _Vector4_yxz);
const _flaxBinding1553 = FlaxGetter.plain("yxw", _flaxBinding517, _Vector4_yxw);
const _flaxBinding1554 = FlaxGetter.plain("yyx", _flaxBinding517, _Vector4_yyx);
const _flaxBinding1555 = FlaxGetter.plain("yyy", _flaxBinding517, _Vector4_yyy);
const _flaxBinding1556 = FlaxGetter.plain("yyz", _flaxBinding517, _Vector4_yyz);
const _flaxBinding1557 = FlaxGetter.plain("yyw", _flaxBinding517, _Vector4_yyw);
const _flaxBinding1558 = FlaxGetter.plain("yzx", _flaxBinding517, _Vector4_yzx);
const _flaxBinding1559 = FlaxGetter.plain("yzy", _flaxBinding517, _Vector4_yzy);
const _flaxBinding1560 = FlaxGetter.plain("yzz", _flaxBinding517, _Vector4_yzz);
const _flaxBinding1561 = FlaxGetter.plain("yzw", _flaxBinding517, _Vector4_yzw);
const _flaxBinding1562 = FlaxGetter.plain("ywx", _flaxBinding517, _Vector4_ywx);
const _flaxBinding1563 = FlaxGetter.plain("ywy", _flaxBinding517, _Vector4_ywy);
const _flaxBinding1564 = FlaxGetter.plain("ywz", _flaxBinding517, _Vector4_ywz);
const _flaxBinding1565 = FlaxGetter.plain("yww", _flaxBinding517, _Vector4_yww);
const _flaxBinding1566 = FlaxGetter.plain("zxx", _flaxBinding517, _Vector4_zxx);
const _flaxBinding1567 = FlaxGetter.plain("zxy", _flaxBinding517, _Vector4_zxy);
const _flaxBinding1568 = FlaxGetter.plain("zxz", _flaxBinding517, _Vector4_zxz);
const _flaxBinding1569 = FlaxGetter.plain("zxw", _flaxBinding517, _Vector4_zxw);
const _flaxBinding1570 = FlaxGetter.plain("zyx", _flaxBinding517, _Vector4_zyx);
const _flaxBinding1571 = FlaxGetter.plain("zyy", _flaxBinding517, _Vector4_zyy);
const _flaxBinding1572 = FlaxGetter.plain("zyz", _flaxBinding517, _Vector4_zyz);
const _flaxBinding1573 = FlaxGetter.plain("zyw", _flaxBinding517, _Vector4_zyw);
const _flaxBinding1574 = FlaxGetter.plain("zzx", _flaxBinding517, _Vector4_zzx);
const _flaxBinding1575 = FlaxGetter.plain("zzy", _flaxBinding517, _Vector4_zzy);
const _flaxBinding1576 = FlaxGetter.plain("zzz", _flaxBinding517, _Vector4_zzz);
const _flaxBinding1577 = FlaxGetter.plain("zzw", _flaxBinding517, _Vector4_zzw);
const _flaxBinding1578 = FlaxGetter.plain("zwx", _flaxBinding517, _Vector4_zwx);
const _flaxBinding1579 = FlaxGetter.plain("zwy", _flaxBinding517, _Vector4_zwy);
const _flaxBinding1580 = FlaxGetter.plain("zwz", _flaxBinding517, _Vector4_zwz);
const _flaxBinding1581 = FlaxGetter.plain("zww", _flaxBinding517, _Vector4_zww);
const _flaxBinding1582 = FlaxGetter.plain("wxx", _flaxBinding517, _Vector4_wxx);
const _flaxBinding1583 = FlaxGetter.plain("wxy", _flaxBinding517, _Vector4_wxy);
const _flaxBinding1584 = FlaxGetter.plain("wxz", _flaxBinding517, _Vector4_wxz);
const _flaxBinding1585 = FlaxGetter.plain("wxw", _flaxBinding517, _Vector4_wxw);
const _flaxBinding1586 = FlaxGetter.plain("wyx", _flaxBinding517, _Vector4_wyx);
const _flaxBinding1587 = FlaxGetter.plain("wyy", _flaxBinding517, _Vector4_wyy);
const _flaxBinding1588 = FlaxGetter.plain("wyz", _flaxBinding517, _Vector4_wyz);
const _flaxBinding1589 = FlaxGetter.plain("wyw", _flaxBinding517, _Vector4_wyw);
const _flaxBinding1590 = FlaxGetter.plain("wzx", _flaxBinding517, _Vector4_wzx);
const _flaxBinding1591 = FlaxGetter.plain("wzy", _flaxBinding517, _Vector4_wzy);
const _flaxBinding1592 = FlaxGetter.plain("wzz", _flaxBinding517, _Vector4_wzz);
const _flaxBinding1593 = FlaxGetter.plain("wzw", _flaxBinding517, _Vector4_wzw);
const _flaxBinding1594 = FlaxGetter.plain("wwx", _flaxBinding517, _Vector4_wwx);
const _flaxBinding1595 = FlaxGetter.plain("wwy", _flaxBinding517, _Vector4_wwy);
const _flaxBinding1596 = FlaxGetter.plain("wwz", _flaxBinding517, _Vector4_wwz);
const _flaxBinding1597 = FlaxGetter.plain("www", _flaxBinding517, _Vector4_www);
const _flaxBinding1598 = FlaxGetter.plain(
  "xxxx",
  _flaxBinding888,
  _Vector4_xxxx,
);
const _flaxBinding1599 = FlaxGetter.plain(
  "xxxy",
  _flaxBinding888,
  _Vector4_xxxy,
);
const _flaxBinding1600 = FlaxGetter.plain(
  "xxxz",
  _flaxBinding888,
  _Vector4_xxxz,
);
const _flaxBinding1601 = FlaxGetter.plain(
  "xxxw",
  _flaxBinding888,
  _Vector4_xxxw,
);
const _flaxBinding1602 = FlaxGetter.plain(
  "xxyx",
  _flaxBinding888,
  _Vector4_xxyx,
);
const _flaxBinding1603 = FlaxGetter.plain(
  "xxyy",
  _flaxBinding888,
  _Vector4_xxyy,
);
const _flaxBinding1604 = FlaxGetter.plain(
  "xxyz",
  _flaxBinding888,
  _Vector4_xxyz,
);
const _flaxBinding1605 = FlaxGetter.plain(
  "xxyw",
  _flaxBinding888,
  _Vector4_xxyw,
);
const _flaxBinding1606 = FlaxGetter.plain(
  "xxzx",
  _flaxBinding888,
  _Vector4_xxzx,
);
const _flaxBinding1607 = FlaxGetter.plain(
  "xxzy",
  _flaxBinding888,
  _Vector4_xxzy,
);
const _flaxBinding1608 = FlaxGetter.plain(
  "xxzz",
  _flaxBinding888,
  _Vector4_xxzz,
);
const _flaxBinding1609 = FlaxGetter.plain(
  "xxzw",
  _flaxBinding888,
  _Vector4_xxzw,
);
const _flaxBinding1610 = FlaxGetter.plain(
  "xxwx",
  _flaxBinding888,
  _Vector4_xxwx,
);
const _flaxBinding1611 = FlaxGetter.plain(
  "xxwy",
  _flaxBinding888,
  _Vector4_xxwy,
);
const _flaxBinding1612 = FlaxGetter.plain(
  "xxwz",
  _flaxBinding888,
  _Vector4_xxwz,
);
const _flaxBinding1613 = FlaxGetter.plain(
  "xxww",
  _flaxBinding888,
  _Vector4_xxww,
);
const _flaxBinding1614 = FlaxGetter.plain(
  "xyxx",
  _flaxBinding888,
  _Vector4_xyxx,
);
const _flaxBinding1615 = FlaxGetter.plain(
  "xyxy",
  _flaxBinding888,
  _Vector4_xyxy,
);
const _flaxBinding1616 = FlaxGetter.plain(
  "xyxz",
  _flaxBinding888,
  _Vector4_xyxz,
);
const _flaxBinding1617 = FlaxGetter.plain(
  "xyxw",
  _flaxBinding888,
  _Vector4_xyxw,
);
const _flaxBinding1618 = FlaxGetter.plain(
  "xyyx",
  _flaxBinding888,
  _Vector4_xyyx,
);
const _flaxBinding1619 = FlaxGetter.plain(
  "xyyy",
  _flaxBinding888,
  _Vector4_xyyy,
);
const _flaxBinding1620 = FlaxGetter.plain(
  "xyyz",
  _flaxBinding888,
  _Vector4_xyyz,
);
const _flaxBinding1621 = FlaxGetter.plain(
  "xyyw",
  _flaxBinding888,
  _Vector4_xyyw,
);
const _flaxBinding1622 = FlaxGetter.plain(
  "xyzx",
  _flaxBinding888,
  _Vector4_xyzx,
);
const _flaxBinding1623 = FlaxGetter.plain(
  "xyzy",
  _flaxBinding888,
  _Vector4_xyzy,
);
const _flaxBinding1624 = FlaxGetter.plain(
  "xyzz",
  _flaxBinding888,
  _Vector4_xyzz,
);
const _flaxBinding1625 = FlaxGetter.plain(
  "xyzw",
  _flaxBinding888,
  _Vector4_xyzw,
);
const _flaxBinding1626 = FlaxGetter.plain(
  "xywx",
  _flaxBinding888,
  _Vector4_xywx,
);
const _flaxBinding1627 = FlaxGetter.plain(
  "xywy",
  _flaxBinding888,
  _Vector4_xywy,
);
const _flaxBinding1628 = FlaxGetter.plain(
  "xywz",
  _flaxBinding888,
  _Vector4_xywz,
);
const _flaxBinding1629 = FlaxGetter.plain(
  "xyww",
  _flaxBinding888,
  _Vector4_xyww,
);
const _flaxBinding1630 = FlaxGetter.plain(
  "xzxx",
  _flaxBinding888,
  _Vector4_xzxx,
);
const _flaxBinding1631 = FlaxGetter.plain(
  "xzxy",
  _flaxBinding888,
  _Vector4_xzxy,
);
const _flaxBinding1632 = FlaxGetter.plain(
  "xzxz",
  _flaxBinding888,
  _Vector4_xzxz,
);
const _flaxBinding1633 = FlaxGetter.plain(
  "xzxw",
  _flaxBinding888,
  _Vector4_xzxw,
);
const _flaxBinding1634 = FlaxGetter.plain(
  "xzyx",
  _flaxBinding888,
  _Vector4_xzyx,
);
const _flaxBinding1635 = FlaxGetter.plain(
  "xzyy",
  _flaxBinding888,
  _Vector4_xzyy,
);
const _flaxBinding1636 = FlaxGetter.plain(
  "xzyz",
  _flaxBinding888,
  _Vector4_xzyz,
);
const _flaxBinding1637 = FlaxGetter.plain(
  "xzyw",
  _flaxBinding888,
  _Vector4_xzyw,
);
const _flaxBinding1638 = FlaxGetter.plain(
  "xzzx",
  _flaxBinding888,
  _Vector4_xzzx,
);
const _flaxBinding1639 = FlaxGetter.plain(
  "xzzy",
  _flaxBinding888,
  _Vector4_xzzy,
);
const _flaxBinding1640 = FlaxGetter.plain(
  "xzzz",
  _flaxBinding888,
  _Vector4_xzzz,
);
const _flaxBinding1641 = FlaxGetter.plain(
  "xzzw",
  _flaxBinding888,
  _Vector4_xzzw,
);
const _flaxBinding1642 = FlaxGetter.plain(
  "xzwx",
  _flaxBinding888,
  _Vector4_xzwx,
);
const _flaxBinding1643 = FlaxGetter.plain(
  "xzwy",
  _flaxBinding888,
  _Vector4_xzwy,
);
const _flaxBinding1644 = FlaxGetter.plain(
  "xzwz",
  _flaxBinding888,
  _Vector4_xzwz,
);
const _flaxBinding1645 = FlaxGetter.plain(
  "xzww",
  _flaxBinding888,
  _Vector4_xzww,
);
const _flaxBinding1646 = FlaxGetter.plain(
  "xwxx",
  _flaxBinding888,
  _Vector4_xwxx,
);
const _flaxBinding1647 = FlaxGetter.plain(
  "xwxy",
  _flaxBinding888,
  _Vector4_xwxy,
);
const _flaxBinding1648 = FlaxGetter.plain(
  "xwxz",
  _flaxBinding888,
  _Vector4_xwxz,
);
const _flaxBinding1649 = FlaxGetter.plain(
  "xwxw",
  _flaxBinding888,
  _Vector4_xwxw,
);
const _flaxBinding1650 = FlaxGetter.plain(
  "xwyx",
  _flaxBinding888,
  _Vector4_xwyx,
);
const _flaxBinding1651 = FlaxGetter.plain(
  "xwyy",
  _flaxBinding888,
  _Vector4_xwyy,
);
const _flaxBinding1652 = FlaxGetter.plain(
  "xwyz",
  _flaxBinding888,
  _Vector4_xwyz,
);
const _flaxBinding1653 = FlaxGetter.plain(
  "xwyw",
  _flaxBinding888,
  _Vector4_xwyw,
);
const _flaxBinding1654 = FlaxGetter.plain(
  "xwzx",
  _flaxBinding888,
  _Vector4_xwzx,
);
const _flaxBinding1655 = FlaxGetter.plain(
  "xwzy",
  _flaxBinding888,
  _Vector4_xwzy,
);
const _flaxBinding1656 = FlaxGetter.plain(
  "xwzz",
  _flaxBinding888,
  _Vector4_xwzz,
);
const _flaxBinding1657 = FlaxGetter.plain(
  "xwzw",
  _flaxBinding888,
  _Vector4_xwzw,
);
const _flaxBinding1658 = FlaxGetter.plain(
  "xwwx",
  _flaxBinding888,
  _Vector4_xwwx,
);
const _flaxBinding1659 = FlaxGetter.plain(
  "xwwy",
  _flaxBinding888,
  _Vector4_xwwy,
);
const _flaxBinding1660 = FlaxGetter.plain(
  "xwwz",
  _flaxBinding888,
  _Vector4_xwwz,
);
const _flaxBinding1661 = FlaxGetter.plain(
  "xwww",
  _flaxBinding888,
  _Vector4_xwww,
);
const _flaxBinding1662 = FlaxGetter.plain(
  "yxxx",
  _flaxBinding888,
  _Vector4_yxxx,
);
const _flaxBinding1663 = FlaxGetter.plain(
  "yxxy",
  _flaxBinding888,
  _Vector4_yxxy,
);
const _flaxBinding1664 = FlaxGetter.plain(
  "yxxz",
  _flaxBinding888,
  _Vector4_yxxz,
);
const _flaxBinding1665 = FlaxGetter.plain(
  "yxxw",
  _flaxBinding888,
  _Vector4_yxxw,
);
const _flaxBinding1666 = FlaxGetter.plain(
  "yxyx",
  _flaxBinding888,
  _Vector4_yxyx,
);
const _flaxBinding1667 = FlaxGetter.plain(
  "yxyy",
  _flaxBinding888,
  _Vector4_yxyy,
);
const _flaxBinding1668 = FlaxGetter.plain(
  "yxyz",
  _flaxBinding888,
  _Vector4_yxyz,
);
const _flaxBinding1669 = FlaxGetter.plain(
  "yxyw",
  _flaxBinding888,
  _Vector4_yxyw,
);
const _flaxBinding1670 = FlaxGetter.plain(
  "yxzx",
  _flaxBinding888,
  _Vector4_yxzx,
);
const _flaxBinding1671 = FlaxGetter.plain(
  "yxzy",
  _flaxBinding888,
  _Vector4_yxzy,
);
const _flaxBinding1672 = FlaxGetter.plain(
  "yxzz",
  _flaxBinding888,
  _Vector4_yxzz,
);
const _flaxBinding1673 = FlaxGetter.plain(
  "yxzw",
  _flaxBinding888,
  _Vector4_yxzw,
);
const _flaxBinding1674 = FlaxGetter.plain(
  "yxwx",
  _flaxBinding888,
  _Vector4_yxwx,
);
const _flaxBinding1675 = FlaxGetter.plain(
  "yxwy",
  _flaxBinding888,
  _Vector4_yxwy,
);
const _flaxBinding1676 = FlaxGetter.plain(
  "yxwz",
  _flaxBinding888,
  _Vector4_yxwz,
);
const _flaxBinding1677 = FlaxGetter.plain(
  "yxww",
  _flaxBinding888,
  _Vector4_yxww,
);
const _flaxBinding1678 = FlaxGetter.plain(
  "yyxx",
  _flaxBinding888,
  _Vector4_yyxx,
);
const _flaxBinding1679 = FlaxGetter.plain(
  "yyxy",
  _flaxBinding888,
  _Vector4_yyxy,
);
const _flaxBinding1680 = FlaxGetter.plain(
  "yyxz",
  _flaxBinding888,
  _Vector4_yyxz,
);
const _flaxBinding1681 = FlaxGetter.plain(
  "yyxw",
  _flaxBinding888,
  _Vector4_yyxw,
);
const _flaxBinding1682 = FlaxGetter.plain(
  "yyyx",
  _flaxBinding888,
  _Vector4_yyyx,
);
const _flaxBinding1683 = FlaxGetter.plain(
  "yyyy",
  _flaxBinding888,
  _Vector4_yyyy,
);
const _flaxBinding1684 = FlaxGetter.plain(
  "yyyz",
  _flaxBinding888,
  _Vector4_yyyz,
);
const _flaxBinding1685 = FlaxGetter.plain(
  "yyyw",
  _flaxBinding888,
  _Vector4_yyyw,
);
const _flaxBinding1686 = FlaxGetter.plain(
  "yyzx",
  _flaxBinding888,
  _Vector4_yyzx,
);
const _flaxBinding1687 = FlaxGetter.plain(
  "yyzy",
  _flaxBinding888,
  _Vector4_yyzy,
);
const _flaxBinding1688 = FlaxGetter.plain(
  "yyzz",
  _flaxBinding888,
  _Vector4_yyzz,
);
const _flaxBinding1689 = FlaxGetter.plain(
  "yyzw",
  _flaxBinding888,
  _Vector4_yyzw,
);
const _flaxBinding1690 = FlaxGetter.plain(
  "yywx",
  _flaxBinding888,
  _Vector4_yywx,
);
const _flaxBinding1691 = FlaxGetter.plain(
  "yywy",
  _flaxBinding888,
  _Vector4_yywy,
);
const _flaxBinding1692 = FlaxGetter.plain(
  "yywz",
  _flaxBinding888,
  _Vector4_yywz,
);
const _flaxBinding1693 = FlaxGetter.plain(
  "yyww",
  _flaxBinding888,
  _Vector4_yyww,
);
const _flaxBinding1694 = FlaxGetter.plain(
  "yzxx",
  _flaxBinding888,
  _Vector4_yzxx,
);
const _flaxBinding1695 = FlaxGetter.plain(
  "yzxy",
  _flaxBinding888,
  _Vector4_yzxy,
);
const _flaxBinding1696 = FlaxGetter.plain(
  "yzxz",
  _flaxBinding888,
  _Vector4_yzxz,
);
const _flaxBinding1697 = FlaxGetter.plain(
  "yzxw",
  _flaxBinding888,
  _Vector4_yzxw,
);
const _flaxBinding1698 = FlaxGetter.plain(
  "yzyx",
  _flaxBinding888,
  _Vector4_yzyx,
);
const _flaxBinding1699 = FlaxGetter.plain(
  "yzyy",
  _flaxBinding888,
  _Vector4_yzyy,
);
const _flaxBinding1700 = FlaxGetter.plain(
  "yzyz",
  _flaxBinding888,
  _Vector4_yzyz,
);
const _flaxBinding1701 = FlaxGetter.plain(
  "yzyw",
  _flaxBinding888,
  _Vector4_yzyw,
);
const _flaxBinding1702 = FlaxGetter.plain(
  "yzzx",
  _flaxBinding888,
  _Vector4_yzzx,
);
const _flaxBinding1703 = FlaxGetter.plain(
  "yzzy",
  _flaxBinding888,
  _Vector4_yzzy,
);
const _flaxBinding1704 = FlaxGetter.plain(
  "yzzz",
  _flaxBinding888,
  _Vector4_yzzz,
);
const _flaxBinding1705 = FlaxGetter.plain(
  "yzzw",
  _flaxBinding888,
  _Vector4_yzzw,
);
const _flaxBinding1706 = FlaxGetter.plain(
  "yzwx",
  _flaxBinding888,
  _Vector4_yzwx,
);
const _flaxBinding1707 = FlaxGetter.plain(
  "yzwy",
  _flaxBinding888,
  _Vector4_yzwy,
);
const _flaxBinding1708 = FlaxGetter.plain(
  "yzwz",
  _flaxBinding888,
  _Vector4_yzwz,
);
const _flaxBinding1709 = FlaxGetter.plain(
  "yzww",
  _flaxBinding888,
  _Vector4_yzww,
);
const _flaxBinding1710 = FlaxGetter.plain(
  "ywxx",
  _flaxBinding888,
  _Vector4_ywxx,
);
const _flaxBinding1711 = FlaxGetter.plain(
  "ywxy",
  _flaxBinding888,
  _Vector4_ywxy,
);
const _flaxBinding1712 = FlaxGetter.plain(
  "ywxz",
  _flaxBinding888,
  _Vector4_ywxz,
);
const _flaxBinding1713 = FlaxGetter.plain(
  "ywxw",
  _flaxBinding888,
  _Vector4_ywxw,
);
const _flaxBinding1714 = FlaxGetter.plain(
  "ywyx",
  _flaxBinding888,
  _Vector4_ywyx,
);
const _flaxBinding1715 = FlaxGetter.plain(
  "ywyy",
  _flaxBinding888,
  _Vector4_ywyy,
);
const _flaxBinding1716 = FlaxGetter.plain(
  "ywyz",
  _flaxBinding888,
  _Vector4_ywyz,
);
const _flaxBinding1717 = FlaxGetter.plain(
  "ywyw",
  _flaxBinding888,
  _Vector4_ywyw,
);
const _flaxBinding1718 = FlaxGetter.plain(
  "ywzx",
  _flaxBinding888,
  _Vector4_ywzx,
);
const _flaxBinding1719 = FlaxGetter.plain(
  "ywzy",
  _flaxBinding888,
  _Vector4_ywzy,
);
const _flaxBinding1720 = FlaxGetter.plain(
  "ywzz",
  _flaxBinding888,
  _Vector4_ywzz,
);
const _flaxBinding1721 = FlaxGetter.plain(
  "ywzw",
  _flaxBinding888,
  _Vector4_ywzw,
);
const _flaxBinding1722 = FlaxGetter.plain(
  "ywwx",
  _flaxBinding888,
  _Vector4_ywwx,
);
const _flaxBinding1723 = FlaxGetter.plain(
  "ywwy",
  _flaxBinding888,
  _Vector4_ywwy,
);
const _flaxBinding1724 = FlaxGetter.plain(
  "ywwz",
  _flaxBinding888,
  _Vector4_ywwz,
);
const _flaxBinding1725 = FlaxGetter.plain(
  "ywww",
  _flaxBinding888,
  _Vector4_ywww,
);
const _flaxBinding1726 = FlaxGetter.plain(
  "zxxx",
  _flaxBinding888,
  _Vector4_zxxx,
);
const _flaxBinding1727 = FlaxGetter.plain(
  "zxxy",
  _flaxBinding888,
  _Vector4_zxxy,
);
const _flaxBinding1728 = FlaxGetter.plain(
  "zxxz",
  _flaxBinding888,
  _Vector4_zxxz,
);
const _flaxBinding1729 = FlaxGetter.plain(
  "zxxw",
  _flaxBinding888,
  _Vector4_zxxw,
);
const _flaxBinding1730 = FlaxGetter.plain(
  "zxyx",
  _flaxBinding888,
  _Vector4_zxyx,
);
const _flaxBinding1731 = FlaxGetter.plain(
  "zxyy",
  _flaxBinding888,
  _Vector4_zxyy,
);
const _flaxBinding1732 = FlaxGetter.plain(
  "zxyz",
  _flaxBinding888,
  _Vector4_zxyz,
);
const _flaxBinding1733 = FlaxGetter.plain(
  "zxyw",
  _flaxBinding888,
  _Vector4_zxyw,
);
const _flaxBinding1734 = FlaxGetter.plain(
  "zxzx",
  _flaxBinding888,
  _Vector4_zxzx,
);
const _flaxBinding1735 = FlaxGetter.plain(
  "zxzy",
  _flaxBinding888,
  _Vector4_zxzy,
);
const _flaxBinding1736 = FlaxGetter.plain(
  "zxzz",
  _flaxBinding888,
  _Vector4_zxzz,
);
const _flaxBinding1737 = FlaxGetter.plain(
  "zxzw",
  _flaxBinding888,
  _Vector4_zxzw,
);
const _flaxBinding1738 = FlaxGetter.plain(
  "zxwx",
  _flaxBinding888,
  _Vector4_zxwx,
);
const _flaxBinding1739 = FlaxGetter.plain(
  "zxwy",
  _flaxBinding888,
  _Vector4_zxwy,
);
const _flaxBinding1740 = FlaxGetter.plain(
  "zxwz",
  _flaxBinding888,
  _Vector4_zxwz,
);
const _flaxBinding1741 = FlaxGetter.plain(
  "zxww",
  _flaxBinding888,
  _Vector4_zxww,
);
const _flaxBinding1742 = FlaxGetter.plain(
  "zyxx",
  _flaxBinding888,
  _Vector4_zyxx,
);
const _flaxBinding1743 = FlaxGetter.plain(
  "zyxy",
  _flaxBinding888,
  _Vector4_zyxy,
);
const _flaxBinding1744 = FlaxGetter.plain(
  "zyxz",
  _flaxBinding888,
  _Vector4_zyxz,
);
const _flaxBinding1745 = FlaxGetter.plain(
  "zyxw",
  _flaxBinding888,
  _Vector4_zyxw,
);
const _flaxBinding1746 = FlaxGetter.plain(
  "zyyx",
  _flaxBinding888,
  _Vector4_zyyx,
);
const _flaxBinding1747 = FlaxGetter.plain(
  "zyyy",
  _flaxBinding888,
  _Vector4_zyyy,
);
const _flaxBinding1748 = FlaxGetter.plain(
  "zyyz",
  _flaxBinding888,
  _Vector4_zyyz,
);
const _flaxBinding1749 = FlaxGetter.plain(
  "zyyw",
  _flaxBinding888,
  _Vector4_zyyw,
);
const _flaxBinding1750 = FlaxGetter.plain(
  "zyzx",
  _flaxBinding888,
  _Vector4_zyzx,
);
const _flaxBinding1751 = FlaxGetter.plain(
  "zyzy",
  _flaxBinding888,
  _Vector4_zyzy,
);
const _flaxBinding1752 = FlaxGetter.plain(
  "zyzz",
  _flaxBinding888,
  _Vector4_zyzz,
);
const _flaxBinding1753 = FlaxGetter.plain(
  "zyzw",
  _flaxBinding888,
  _Vector4_zyzw,
);
const _flaxBinding1754 = FlaxGetter.plain(
  "zywx",
  _flaxBinding888,
  _Vector4_zywx,
);
const _flaxBinding1755 = FlaxGetter.plain(
  "zywy",
  _flaxBinding888,
  _Vector4_zywy,
);
const _flaxBinding1756 = FlaxGetter.plain(
  "zywz",
  _flaxBinding888,
  _Vector4_zywz,
);
const _flaxBinding1757 = FlaxGetter.plain(
  "zyww",
  _flaxBinding888,
  _Vector4_zyww,
);
const _flaxBinding1758 = FlaxGetter.plain(
  "zzxx",
  _flaxBinding888,
  _Vector4_zzxx,
);
const _flaxBinding1759 = FlaxGetter.plain(
  "zzxy",
  _flaxBinding888,
  _Vector4_zzxy,
);
const _flaxBinding1760 = FlaxGetter.plain(
  "zzxz",
  _flaxBinding888,
  _Vector4_zzxz,
);
const _flaxBinding1761 = FlaxGetter.plain(
  "zzxw",
  _flaxBinding888,
  _Vector4_zzxw,
);
const _flaxBinding1762 = FlaxGetter.plain(
  "zzyx",
  _flaxBinding888,
  _Vector4_zzyx,
);
const _flaxBinding1763 = FlaxGetter.plain(
  "zzyy",
  _flaxBinding888,
  _Vector4_zzyy,
);
const _flaxBinding1764 = FlaxGetter.plain(
  "zzyz",
  _flaxBinding888,
  _Vector4_zzyz,
);
const _flaxBinding1765 = FlaxGetter.plain(
  "zzyw",
  _flaxBinding888,
  _Vector4_zzyw,
);
const _flaxBinding1766 = FlaxGetter.plain(
  "zzzx",
  _flaxBinding888,
  _Vector4_zzzx,
);
const _flaxBinding1767 = FlaxGetter.plain(
  "zzzy",
  _flaxBinding888,
  _Vector4_zzzy,
);
const _flaxBinding1768 = FlaxGetter.plain(
  "zzzz",
  _flaxBinding888,
  _Vector4_zzzz,
);
const _flaxBinding1769 = FlaxGetter.plain(
  "zzzw",
  _flaxBinding888,
  _Vector4_zzzw,
);
const _flaxBinding1770 = FlaxGetter.plain(
  "zzwx",
  _flaxBinding888,
  _Vector4_zzwx,
);
const _flaxBinding1771 = FlaxGetter.plain(
  "zzwy",
  _flaxBinding888,
  _Vector4_zzwy,
);
const _flaxBinding1772 = FlaxGetter.plain(
  "zzwz",
  _flaxBinding888,
  _Vector4_zzwz,
);
const _flaxBinding1773 = FlaxGetter.plain(
  "zzww",
  _flaxBinding888,
  _Vector4_zzww,
);
const _flaxBinding1774 = FlaxGetter.plain(
  "zwxx",
  _flaxBinding888,
  _Vector4_zwxx,
);
const _flaxBinding1775 = FlaxGetter.plain(
  "zwxy",
  _flaxBinding888,
  _Vector4_zwxy,
);
const _flaxBinding1776 = FlaxGetter.plain(
  "zwxz",
  _flaxBinding888,
  _Vector4_zwxz,
);
const _flaxBinding1777 = FlaxGetter.plain(
  "zwxw",
  _flaxBinding888,
  _Vector4_zwxw,
);
const _flaxBinding1778 = FlaxGetter.plain(
  "zwyx",
  _flaxBinding888,
  _Vector4_zwyx,
);
const _flaxBinding1779 = FlaxGetter.plain(
  "zwyy",
  _flaxBinding888,
  _Vector4_zwyy,
);
const _flaxBinding1780 = FlaxGetter.plain(
  "zwyz",
  _flaxBinding888,
  _Vector4_zwyz,
);
const _flaxBinding1781 = FlaxGetter.plain(
  "zwyw",
  _flaxBinding888,
  _Vector4_zwyw,
);
const _flaxBinding1782 = FlaxGetter.plain(
  "zwzx",
  _flaxBinding888,
  _Vector4_zwzx,
);
const _flaxBinding1783 = FlaxGetter.plain(
  "zwzy",
  _flaxBinding888,
  _Vector4_zwzy,
);
const _flaxBinding1784 = FlaxGetter.plain(
  "zwzz",
  _flaxBinding888,
  _Vector4_zwzz,
);
const _flaxBinding1785 = FlaxGetter.plain(
  "zwzw",
  _flaxBinding888,
  _Vector4_zwzw,
);
const _flaxBinding1786 = FlaxGetter.plain(
  "zwwx",
  _flaxBinding888,
  _Vector4_zwwx,
);
const _flaxBinding1787 = FlaxGetter.plain(
  "zwwy",
  _flaxBinding888,
  _Vector4_zwwy,
);
const _flaxBinding1788 = FlaxGetter.plain(
  "zwwz",
  _flaxBinding888,
  _Vector4_zwwz,
);
const _flaxBinding1789 = FlaxGetter.plain(
  "zwww",
  _flaxBinding888,
  _Vector4_zwww,
);
const _flaxBinding1790 = FlaxGetter.plain(
  "wxxx",
  _flaxBinding888,
  _Vector4_wxxx,
);
const _flaxBinding1791 = FlaxGetter.plain(
  "wxxy",
  _flaxBinding888,
  _Vector4_wxxy,
);
const _flaxBinding1792 = FlaxGetter.plain(
  "wxxz",
  _flaxBinding888,
  _Vector4_wxxz,
);
const _flaxBinding1793 = FlaxGetter.plain(
  "wxxw",
  _flaxBinding888,
  _Vector4_wxxw,
);
const _flaxBinding1794 = FlaxGetter.plain(
  "wxyx",
  _flaxBinding888,
  _Vector4_wxyx,
);
const _flaxBinding1795 = FlaxGetter.plain(
  "wxyy",
  _flaxBinding888,
  _Vector4_wxyy,
);
const _flaxBinding1796 = FlaxGetter.plain(
  "wxyz",
  _flaxBinding888,
  _Vector4_wxyz,
);
const _flaxBinding1797 = FlaxGetter.plain(
  "wxyw",
  _flaxBinding888,
  _Vector4_wxyw,
);
const _flaxBinding1798 = FlaxGetter.plain(
  "wxzx",
  _flaxBinding888,
  _Vector4_wxzx,
);
const _flaxBinding1799 = FlaxGetter.plain(
  "wxzy",
  _flaxBinding888,
  _Vector4_wxzy,
);
const _flaxBinding1800 = FlaxGetter.plain(
  "wxzz",
  _flaxBinding888,
  _Vector4_wxzz,
);
const _flaxBinding1801 = FlaxGetter.plain(
  "wxzw",
  _flaxBinding888,
  _Vector4_wxzw,
);
const _flaxBinding1802 = FlaxGetter.plain(
  "wxwx",
  _flaxBinding888,
  _Vector4_wxwx,
);
const _flaxBinding1803 = FlaxGetter.plain(
  "wxwy",
  _flaxBinding888,
  _Vector4_wxwy,
);
const _flaxBinding1804 = FlaxGetter.plain(
  "wxwz",
  _flaxBinding888,
  _Vector4_wxwz,
);
const _flaxBinding1805 = FlaxGetter.plain(
  "wxww",
  _flaxBinding888,
  _Vector4_wxww,
);
const _flaxBinding1806 = FlaxGetter.plain(
  "wyxx",
  _flaxBinding888,
  _Vector4_wyxx,
);
const _flaxBinding1807 = FlaxGetter.plain(
  "wyxy",
  _flaxBinding888,
  _Vector4_wyxy,
);
const _flaxBinding1808 = FlaxGetter.plain(
  "wyxz",
  _flaxBinding888,
  _Vector4_wyxz,
);
const _flaxBinding1809 = FlaxGetter.plain(
  "wyxw",
  _flaxBinding888,
  _Vector4_wyxw,
);
const _flaxBinding1810 = FlaxGetter.plain(
  "wyyx",
  _flaxBinding888,
  _Vector4_wyyx,
);
const _flaxBinding1811 = FlaxGetter.plain(
  "wyyy",
  _flaxBinding888,
  _Vector4_wyyy,
);
const _flaxBinding1812 = FlaxGetter.plain(
  "wyyz",
  _flaxBinding888,
  _Vector4_wyyz,
);
const _flaxBinding1813 = FlaxGetter.plain(
  "wyyw",
  _flaxBinding888,
  _Vector4_wyyw,
);
const _flaxBinding1814 = FlaxGetter.plain(
  "wyzx",
  _flaxBinding888,
  _Vector4_wyzx,
);
const _flaxBinding1815 = FlaxGetter.plain(
  "wyzy",
  _flaxBinding888,
  _Vector4_wyzy,
);
const _flaxBinding1816 = FlaxGetter.plain(
  "wyzz",
  _flaxBinding888,
  _Vector4_wyzz,
);
const _flaxBinding1817 = FlaxGetter.plain(
  "wyzw",
  _flaxBinding888,
  _Vector4_wyzw,
);
const _flaxBinding1818 = FlaxGetter.plain(
  "wywx",
  _flaxBinding888,
  _Vector4_wywx,
);
const _flaxBinding1819 = FlaxGetter.plain(
  "wywy",
  _flaxBinding888,
  _Vector4_wywy,
);
const _flaxBinding1820 = FlaxGetter.plain(
  "wywz",
  _flaxBinding888,
  _Vector4_wywz,
);
const _flaxBinding1821 = FlaxGetter.plain(
  "wyww",
  _flaxBinding888,
  _Vector4_wyww,
);
const _flaxBinding1822 = FlaxGetter.plain(
  "wzxx",
  _flaxBinding888,
  _Vector4_wzxx,
);
const _flaxBinding1823 = FlaxGetter.plain(
  "wzxy",
  _flaxBinding888,
  _Vector4_wzxy,
);
const _flaxBinding1824 = FlaxGetter.plain(
  "wzxz",
  _flaxBinding888,
  _Vector4_wzxz,
);
const _flaxBinding1825 = FlaxGetter.plain(
  "wzxw",
  _flaxBinding888,
  _Vector4_wzxw,
);
const _flaxBinding1826 = FlaxGetter.plain(
  "wzyx",
  _flaxBinding888,
  _Vector4_wzyx,
);
const _flaxBinding1827 = FlaxGetter.plain(
  "wzyy",
  _flaxBinding888,
  _Vector4_wzyy,
);
const _flaxBinding1828 = FlaxGetter.plain(
  "wzyz",
  _flaxBinding888,
  _Vector4_wzyz,
);
const _flaxBinding1829 = FlaxGetter.plain(
  "wzyw",
  _flaxBinding888,
  _Vector4_wzyw,
);
const _flaxBinding1830 = FlaxGetter.plain(
  "wzzx",
  _flaxBinding888,
  _Vector4_wzzx,
);
const _flaxBinding1831 = FlaxGetter.plain(
  "wzzy",
  _flaxBinding888,
  _Vector4_wzzy,
);
const _flaxBinding1832 = FlaxGetter.plain(
  "wzzz",
  _flaxBinding888,
  _Vector4_wzzz,
);
const _flaxBinding1833 = FlaxGetter.plain(
  "wzzw",
  _flaxBinding888,
  _Vector4_wzzw,
);
const _flaxBinding1834 = FlaxGetter.plain(
  "wzwx",
  _flaxBinding888,
  _Vector4_wzwx,
);
const _flaxBinding1835 = FlaxGetter.plain(
  "wzwy",
  _flaxBinding888,
  _Vector4_wzwy,
);
const _flaxBinding1836 = FlaxGetter.plain(
  "wzwz",
  _flaxBinding888,
  _Vector4_wzwz,
);
const _flaxBinding1837 = FlaxGetter.plain(
  "wzww",
  _flaxBinding888,
  _Vector4_wzww,
);
const _flaxBinding1838 = FlaxGetter.plain(
  "wwxx",
  _flaxBinding888,
  _Vector4_wwxx,
);
const _flaxBinding1839 = FlaxGetter.plain(
  "wwxy",
  _flaxBinding888,
  _Vector4_wwxy,
);
const _flaxBinding1840 = FlaxGetter.plain(
  "wwxz",
  _flaxBinding888,
  _Vector4_wwxz,
);
const _flaxBinding1841 = FlaxGetter.plain(
  "wwxw",
  _flaxBinding888,
  _Vector4_wwxw,
);
const _flaxBinding1842 = FlaxGetter.plain(
  "wwyx",
  _flaxBinding888,
  _Vector4_wwyx,
);
const _flaxBinding1843 = FlaxGetter.plain(
  "wwyy",
  _flaxBinding888,
  _Vector4_wwyy,
);
const _flaxBinding1844 = FlaxGetter.plain(
  "wwyz",
  _flaxBinding888,
  _Vector4_wwyz,
);
const _flaxBinding1845 = FlaxGetter.plain(
  "wwyw",
  _flaxBinding888,
  _Vector4_wwyw,
);
const _flaxBinding1846 = FlaxGetter.plain(
  "wwzx",
  _flaxBinding888,
  _Vector4_wwzx,
);
const _flaxBinding1847 = FlaxGetter.plain(
  "wwzy",
  _flaxBinding888,
  _Vector4_wwzy,
);
const _flaxBinding1848 = FlaxGetter.plain(
  "wwzz",
  _flaxBinding888,
  _Vector4_wwzz,
);
const _flaxBinding1849 = FlaxGetter.plain(
  "wwzw",
  _flaxBinding888,
  _Vector4_wwzw,
);
const _flaxBinding1850 = FlaxGetter.plain(
  "wwwx",
  _flaxBinding888,
  _Vector4_wwwx,
);
const _flaxBinding1851 = FlaxGetter.plain(
  "wwwy",
  _flaxBinding888,
  _Vector4_wwwy,
);
const _flaxBinding1852 = FlaxGetter.plain(
  "wwwz",
  _flaxBinding888,
  _Vector4_wwwz,
);
const _flaxBinding1853 = FlaxGetter.plain(
  "wwww",
  _flaxBinding888,
  _Vector4_wwww,
);
const _flaxBinding1854 = FlaxGetter.plain("r", flaxDoubleType, _Vector4_r);
const _flaxBinding1855 = FlaxGetter.plain("g", flaxDoubleType, _Vector4_g);
const _flaxBinding1856 = FlaxGetter.plain("b", flaxDoubleType, _Vector4_b);
const _flaxBinding1857 = FlaxGetter.plain("a", flaxDoubleType, _Vector4_a);
const _flaxBinding1858 = FlaxGetter.plain("s", flaxDoubleType, _Vector4_s);
const _flaxBinding1859 = FlaxGetter.plain("t", flaxDoubleType, _Vector4_t);
const _flaxBinding1860 = FlaxGetter.plain("p", flaxDoubleType, _Vector4_p);
const _flaxBinding1861 = FlaxGetter.plain("q", flaxDoubleType, _Vector4_q);
const _flaxBinding1862 = FlaxGetter.plain("x", flaxDoubleType, _Vector4_x);
const _flaxBinding1863 = FlaxGetter.plain("y", flaxDoubleType, _Vector4_y);
const _flaxBinding1864 = FlaxGetter.plain("z", flaxDoubleType, _Vector4_z);
const _flaxBinding1865 = FlaxGetter.plain("w", flaxDoubleType, _Vector4_w);
const _flaxBinding1866 = FlaxGetter.plain("rr", _flaxBinding426, _Vector4_rr);
const _flaxBinding1867 = FlaxGetter.plain("rg", _flaxBinding426, _Vector4_rg);
const _flaxBinding1868 = FlaxGetter.plain("rb", _flaxBinding426, _Vector4_rb);
const _flaxBinding1869 = FlaxGetter.plain("ra", _flaxBinding426, _Vector4_ra);
const _flaxBinding1870 = FlaxGetter.plain("gr", _flaxBinding426, _Vector4_gr);
const _flaxBinding1871 = FlaxGetter.plain("gg", _flaxBinding426, _Vector4_gg);
const _flaxBinding1872 = FlaxGetter.plain("gb", _flaxBinding426, _Vector4_gb);
const _flaxBinding1873 = FlaxGetter.plain("ga", _flaxBinding426, _Vector4_ga);
const _flaxBinding1874 = FlaxGetter.plain("br", _flaxBinding426, _Vector4_br);
const _flaxBinding1875 = FlaxGetter.plain("bg", _flaxBinding426, _Vector4_bg);
const _flaxBinding1876 = FlaxGetter.plain("bb", _flaxBinding426, _Vector4_bb);
const _flaxBinding1877 = FlaxGetter.plain("ba", _flaxBinding426, _Vector4_ba);
const _flaxBinding1878 = FlaxGetter.plain("ar", _flaxBinding426, _Vector4_ar);
const _flaxBinding1879 = FlaxGetter.plain("ag", _flaxBinding426, _Vector4_ag);
const _flaxBinding1880 = FlaxGetter.plain("ab", _flaxBinding426, _Vector4_ab);
const _flaxBinding1881 = FlaxGetter.plain("aa", _flaxBinding426, _Vector4_aa);
const _flaxBinding1882 = FlaxGetter.plain("rrr", _flaxBinding517, _Vector4_rrr);
const _flaxBinding1883 = FlaxGetter.plain("rrg", _flaxBinding517, _Vector4_rrg);
const _flaxBinding1884 = FlaxGetter.plain("rrb", _flaxBinding517, _Vector4_rrb);
const _flaxBinding1885 = FlaxGetter.plain("rra", _flaxBinding517, _Vector4_rra);
const _flaxBinding1886 = FlaxGetter.plain("rgr", _flaxBinding517, _Vector4_rgr);
const _flaxBinding1887 = FlaxGetter.plain("rgg", _flaxBinding517, _Vector4_rgg);
const _flaxBinding1888 = FlaxGetter.plain("rgb", _flaxBinding517, _Vector4_rgb);
const _flaxBinding1889 = FlaxGetter.plain("rga", _flaxBinding517, _Vector4_rga);
const _flaxBinding1890 = FlaxGetter.plain("rbr", _flaxBinding517, _Vector4_rbr);
const _flaxBinding1891 = FlaxGetter.plain("rbg", _flaxBinding517, _Vector4_rbg);
const _flaxBinding1892 = FlaxGetter.plain("rbb", _flaxBinding517, _Vector4_rbb);
const _flaxBinding1893 = FlaxGetter.plain("rba", _flaxBinding517, _Vector4_rba);
const _flaxBinding1894 = FlaxGetter.plain("rar", _flaxBinding517, _Vector4_rar);
const _flaxBinding1895 = FlaxGetter.plain("rag", _flaxBinding517, _Vector4_rag);
const _flaxBinding1896 = FlaxGetter.plain("rab", _flaxBinding517, _Vector4_rab);
const _flaxBinding1897 = FlaxGetter.plain("raa", _flaxBinding517, _Vector4_raa);
const _flaxBinding1898 = FlaxGetter.plain("grr", _flaxBinding517, _Vector4_grr);
const _flaxBinding1899 = FlaxGetter.plain("grg", _flaxBinding517, _Vector4_grg);
const _flaxBinding1900 = FlaxGetter.plain("grb", _flaxBinding517, _Vector4_grb);
const _flaxBinding1901 = FlaxGetter.plain("gra", _flaxBinding517, _Vector4_gra);
const _flaxBinding1902 = FlaxGetter.plain("ggr", _flaxBinding517, _Vector4_ggr);
const _flaxBinding1903 = FlaxGetter.plain("ggg", _flaxBinding517, _Vector4_ggg);
const _flaxBinding1904 = FlaxGetter.plain("ggb", _flaxBinding517, _Vector4_ggb);
const _flaxBinding1905 = FlaxGetter.plain("gga", _flaxBinding517, _Vector4_gga);
const _flaxBinding1906 = FlaxGetter.plain("gbr", _flaxBinding517, _Vector4_gbr);
const _flaxBinding1907 = FlaxGetter.plain("gbg", _flaxBinding517, _Vector4_gbg);
const _flaxBinding1908 = FlaxGetter.plain("gbb", _flaxBinding517, _Vector4_gbb);
const _flaxBinding1909 = FlaxGetter.plain("gba", _flaxBinding517, _Vector4_gba);
const _flaxBinding1910 = FlaxGetter.plain("gar", _flaxBinding517, _Vector4_gar);
const _flaxBinding1911 = FlaxGetter.plain("gag", _flaxBinding517, _Vector4_gag);
const _flaxBinding1912 = FlaxGetter.plain("gab", _flaxBinding517, _Vector4_gab);
const _flaxBinding1913 = FlaxGetter.plain("gaa", _flaxBinding517, _Vector4_gaa);
const _flaxBinding1914 = FlaxGetter.plain("brr", _flaxBinding517, _Vector4_brr);
const _flaxBinding1915 = FlaxGetter.plain("brg", _flaxBinding517, _Vector4_brg);
const _flaxBinding1916 = FlaxGetter.plain("brb", _flaxBinding517, _Vector4_brb);
const _flaxBinding1917 = FlaxGetter.plain("bra", _flaxBinding517, _Vector4_bra);
const _flaxBinding1918 = FlaxGetter.plain("bgr", _flaxBinding517, _Vector4_bgr);
const _flaxBinding1919 = FlaxGetter.plain("bgg", _flaxBinding517, _Vector4_bgg);
const _flaxBinding1920 = FlaxGetter.plain("bgb", _flaxBinding517, _Vector4_bgb);
const _flaxBinding1921 = FlaxGetter.plain("bga", _flaxBinding517, _Vector4_bga);
const _flaxBinding1922 = FlaxGetter.plain("bbr", _flaxBinding517, _Vector4_bbr);
const _flaxBinding1923 = FlaxGetter.plain("bbg", _flaxBinding517, _Vector4_bbg);
const _flaxBinding1924 = FlaxGetter.plain("bbb", _flaxBinding517, _Vector4_bbb);
const _flaxBinding1925 = FlaxGetter.plain("bba", _flaxBinding517, _Vector4_bba);
const _flaxBinding1926 = FlaxGetter.plain("bar", _flaxBinding517, _Vector4_bar);
const _flaxBinding1927 = FlaxGetter.plain("bag", _flaxBinding517, _Vector4_bag);
const _flaxBinding1928 = FlaxGetter.plain("bab", _flaxBinding517, _Vector4_bab);
const _flaxBinding1929 = FlaxGetter.plain("baa", _flaxBinding517, _Vector4_baa);
const _flaxBinding1930 = FlaxGetter.plain("arr", _flaxBinding517, _Vector4_arr);
const _flaxBinding1931 = FlaxGetter.plain("arg", _flaxBinding517, _Vector4_arg);
const _flaxBinding1932 = FlaxGetter.plain("arb", _flaxBinding517, _Vector4_arb);
const _flaxBinding1933 = FlaxGetter.plain("ara", _flaxBinding517, _Vector4_ara);
const _flaxBinding1934 = FlaxGetter.plain("agr", _flaxBinding517, _Vector4_agr);
const _flaxBinding1935 = FlaxGetter.plain("agg", _flaxBinding517, _Vector4_agg);
const _flaxBinding1936 = FlaxGetter.plain("agb", _flaxBinding517, _Vector4_agb);
const _flaxBinding1937 = FlaxGetter.plain("aga", _flaxBinding517, _Vector4_aga);
const _flaxBinding1938 = FlaxGetter.plain("abr", _flaxBinding517, _Vector4_abr);
const _flaxBinding1939 = FlaxGetter.plain("abg", _flaxBinding517, _Vector4_abg);
const _flaxBinding1940 = FlaxGetter.plain("abb", _flaxBinding517, _Vector4_abb);
const _flaxBinding1941 = FlaxGetter.plain("aba", _flaxBinding517, _Vector4_aba);
const _flaxBinding1942 = FlaxGetter.plain("aar", _flaxBinding517, _Vector4_aar);
const _flaxBinding1943 = FlaxGetter.plain("aag", _flaxBinding517, _Vector4_aag);
const _flaxBinding1944 = FlaxGetter.plain("aab", _flaxBinding517, _Vector4_aab);
const _flaxBinding1945 = FlaxGetter.plain("aaa", _flaxBinding517, _Vector4_aaa);
const _flaxBinding1946 = FlaxGetter.plain(
  "rrrr",
  _flaxBinding888,
  _Vector4_rrrr,
);
const _flaxBinding1947 = FlaxGetter.plain(
  "rrrg",
  _flaxBinding888,
  _Vector4_rrrg,
);
const _flaxBinding1948 = FlaxGetter.plain(
  "rrrb",
  _flaxBinding888,
  _Vector4_rrrb,
);
const _flaxBinding1949 = FlaxGetter.plain(
  "rrra",
  _flaxBinding888,
  _Vector4_rrra,
);
const _flaxBinding1950 = FlaxGetter.plain(
  "rrgr",
  _flaxBinding888,
  _Vector4_rrgr,
);
const _flaxBinding1951 = FlaxGetter.plain(
  "rrgg",
  _flaxBinding888,
  _Vector4_rrgg,
);
const _flaxBinding1952 = FlaxGetter.plain(
  "rrgb",
  _flaxBinding888,
  _Vector4_rrgb,
);
const _flaxBinding1953 = FlaxGetter.plain(
  "rrga",
  _flaxBinding888,
  _Vector4_rrga,
);
const _flaxBinding1954 = FlaxGetter.plain(
  "rrbr",
  _flaxBinding888,
  _Vector4_rrbr,
);
const _flaxBinding1955 = FlaxGetter.plain(
  "rrbg",
  _flaxBinding888,
  _Vector4_rrbg,
);
const _flaxBinding1956 = FlaxGetter.plain(
  "rrbb",
  _flaxBinding888,
  _Vector4_rrbb,
);
const _flaxBinding1957 = FlaxGetter.plain(
  "rrba",
  _flaxBinding888,
  _Vector4_rrba,
);
const _flaxBinding1958 = FlaxGetter.plain(
  "rrar",
  _flaxBinding888,
  _Vector4_rrar,
);
const _flaxBinding1959 = FlaxGetter.plain(
  "rrag",
  _flaxBinding888,
  _Vector4_rrag,
);
const _flaxBinding1960 = FlaxGetter.plain(
  "rrab",
  _flaxBinding888,
  _Vector4_rrab,
);
const _flaxBinding1961 = FlaxGetter.plain(
  "rraa",
  _flaxBinding888,
  _Vector4_rraa,
);
const _flaxBinding1962 = FlaxGetter.plain(
  "rgrr",
  _flaxBinding888,
  _Vector4_rgrr,
);
const _flaxBinding1963 = FlaxGetter.plain(
  "rgrg",
  _flaxBinding888,
  _Vector4_rgrg,
);
const _flaxBinding1964 = FlaxGetter.plain(
  "rgrb",
  _flaxBinding888,
  _Vector4_rgrb,
);
const _flaxBinding1965 = FlaxGetter.plain(
  "rgra",
  _flaxBinding888,
  _Vector4_rgra,
);
const _flaxBinding1966 = FlaxGetter.plain(
  "rggr",
  _flaxBinding888,
  _Vector4_rggr,
);
const _flaxBinding1967 = FlaxGetter.plain(
  "rggg",
  _flaxBinding888,
  _Vector4_rggg,
);
const _flaxBinding1968 = FlaxGetter.plain(
  "rggb",
  _flaxBinding888,
  _Vector4_rggb,
);
const _flaxBinding1969 = FlaxGetter.plain(
  "rgga",
  _flaxBinding888,
  _Vector4_rgga,
);
const _flaxBinding1970 = FlaxGetter.plain(
  "rgbr",
  _flaxBinding888,
  _Vector4_rgbr,
);
const _flaxBinding1971 = FlaxGetter.plain(
  "rgbg",
  _flaxBinding888,
  _Vector4_rgbg,
);
const _flaxBinding1972 = FlaxGetter.plain(
  "rgbb",
  _flaxBinding888,
  _Vector4_rgbb,
);
const _flaxBinding1973 = FlaxGetter.plain(
  "rgba",
  _flaxBinding888,
  _Vector4_rgba,
);
const _flaxBinding1974 = FlaxGetter.plain(
  "rgar",
  _flaxBinding888,
  _Vector4_rgar,
);
const _flaxBinding1975 = FlaxGetter.plain(
  "rgag",
  _flaxBinding888,
  _Vector4_rgag,
);
const _flaxBinding1976 = FlaxGetter.plain(
  "rgab",
  _flaxBinding888,
  _Vector4_rgab,
);
const _flaxBinding1977 = FlaxGetter.plain(
  "rgaa",
  _flaxBinding888,
  _Vector4_rgaa,
);
const _flaxBinding1978 = FlaxGetter.plain(
  "rbrr",
  _flaxBinding888,
  _Vector4_rbrr,
);
const _flaxBinding1979 = FlaxGetter.plain(
  "rbrg",
  _flaxBinding888,
  _Vector4_rbrg,
);
const _flaxBinding1980 = FlaxGetter.plain(
  "rbrb",
  _flaxBinding888,
  _Vector4_rbrb,
);
const _flaxBinding1981 = FlaxGetter.plain(
  "rbra",
  _flaxBinding888,
  _Vector4_rbra,
);
const _flaxBinding1982 = FlaxGetter.plain(
  "rbgr",
  _flaxBinding888,
  _Vector4_rbgr,
);
const _flaxBinding1983 = FlaxGetter.plain(
  "rbgg",
  _flaxBinding888,
  _Vector4_rbgg,
);
const _flaxBinding1984 = FlaxGetter.plain(
  "rbgb",
  _flaxBinding888,
  _Vector4_rbgb,
);
const _flaxBinding1985 = FlaxGetter.plain(
  "rbga",
  _flaxBinding888,
  _Vector4_rbga,
);
const _flaxBinding1986 = FlaxGetter.plain(
  "rbbr",
  _flaxBinding888,
  _Vector4_rbbr,
);
const _flaxBinding1987 = FlaxGetter.plain(
  "rbbg",
  _flaxBinding888,
  _Vector4_rbbg,
);
const _flaxBinding1988 = FlaxGetter.plain(
  "rbbb",
  _flaxBinding888,
  _Vector4_rbbb,
);
const _flaxBinding1989 = FlaxGetter.plain(
  "rbba",
  _flaxBinding888,
  _Vector4_rbba,
);
const _flaxBinding1990 = FlaxGetter.plain(
  "rbar",
  _flaxBinding888,
  _Vector4_rbar,
);
const _flaxBinding1991 = FlaxGetter.plain(
  "rbag",
  _flaxBinding888,
  _Vector4_rbag,
);
const _flaxBinding1992 = FlaxGetter.plain(
  "rbab",
  _flaxBinding888,
  _Vector4_rbab,
);
const _flaxBinding1993 = FlaxGetter.plain(
  "rbaa",
  _flaxBinding888,
  _Vector4_rbaa,
);
const _flaxBinding1994 = FlaxGetter.plain(
  "rarr",
  _flaxBinding888,
  _Vector4_rarr,
);
const _flaxBinding1995 = FlaxGetter.plain(
  "rarg",
  _flaxBinding888,
  _Vector4_rarg,
);
const _flaxBinding1996 = FlaxGetter.plain(
  "rarb",
  _flaxBinding888,
  _Vector4_rarb,
);
const _flaxBinding1997 = FlaxGetter.plain(
  "rara",
  _flaxBinding888,
  _Vector4_rara,
);
const _flaxBinding1998 = FlaxGetter.plain(
  "ragr",
  _flaxBinding888,
  _Vector4_ragr,
);
const _flaxBinding1999 = FlaxGetter.plain(
  "ragg",
  _flaxBinding888,
  _Vector4_ragg,
);
const _flaxBinding2000 = FlaxGetter.plain(
  "ragb",
  _flaxBinding888,
  _Vector4_ragb,
);
const _flaxBinding2001 = FlaxGetter.plain(
  "raga",
  _flaxBinding888,
  _Vector4_raga,
);
const _flaxBinding2002 = FlaxGetter.plain(
  "rabr",
  _flaxBinding888,
  _Vector4_rabr,
);
const _flaxBinding2003 = FlaxGetter.plain(
  "rabg",
  _flaxBinding888,
  _Vector4_rabg,
);
const _flaxBinding2004 = FlaxGetter.plain(
  "rabb",
  _flaxBinding888,
  _Vector4_rabb,
);
const _flaxBinding2005 = FlaxGetter.plain(
  "raba",
  _flaxBinding888,
  _Vector4_raba,
);
const _flaxBinding2006 = FlaxGetter.plain(
  "raar",
  _flaxBinding888,
  _Vector4_raar,
);
const _flaxBinding2007 = FlaxGetter.plain(
  "raag",
  _flaxBinding888,
  _Vector4_raag,
);
const _flaxBinding2008 = FlaxGetter.plain(
  "raab",
  _flaxBinding888,
  _Vector4_raab,
);
const _flaxBinding2009 = FlaxGetter.plain(
  "raaa",
  _flaxBinding888,
  _Vector4_raaa,
);
const _flaxBinding2010 = FlaxGetter.plain(
  "grrr",
  _flaxBinding888,
  _Vector4_grrr,
);
const _flaxBinding2011 = FlaxGetter.plain(
  "grrg",
  _flaxBinding888,
  _Vector4_grrg,
);
const _flaxBinding2012 = FlaxGetter.plain(
  "grrb",
  _flaxBinding888,
  _Vector4_grrb,
);
const _flaxBinding2013 = FlaxGetter.plain(
  "grra",
  _flaxBinding888,
  _Vector4_grra,
);
const _flaxBinding2014 = FlaxGetter.plain(
  "grgr",
  _flaxBinding888,
  _Vector4_grgr,
);
const _flaxBinding2015 = FlaxGetter.plain(
  "grgg",
  _flaxBinding888,
  _Vector4_grgg,
);
const _flaxBinding2016 = FlaxGetter.plain(
  "grgb",
  _flaxBinding888,
  _Vector4_grgb,
);
const _flaxBinding2017 = FlaxGetter.plain(
  "grga",
  _flaxBinding888,
  _Vector4_grga,
);
const _flaxBinding2018 = FlaxGetter.plain(
  "grbr",
  _flaxBinding888,
  _Vector4_grbr,
);
const _flaxBinding2019 = FlaxGetter.plain(
  "grbg",
  _flaxBinding888,
  _Vector4_grbg,
);
const _flaxBinding2020 = FlaxGetter.plain(
  "grbb",
  _flaxBinding888,
  _Vector4_grbb,
);
const _flaxBinding2021 = FlaxGetter.plain(
  "grba",
  _flaxBinding888,
  _Vector4_grba,
);
const _flaxBinding2022 = FlaxGetter.plain(
  "grar",
  _flaxBinding888,
  _Vector4_grar,
);
const _flaxBinding2023 = FlaxGetter.plain(
  "grag",
  _flaxBinding888,
  _Vector4_grag,
);
const _flaxBinding2024 = FlaxGetter.plain(
  "grab",
  _flaxBinding888,
  _Vector4_grab,
);
const _flaxBinding2025 = FlaxGetter.plain(
  "graa",
  _flaxBinding888,
  _Vector4_graa,
);
const _flaxBinding2026 = FlaxGetter.plain(
  "ggrr",
  _flaxBinding888,
  _Vector4_ggrr,
);
const _flaxBinding2027 = FlaxGetter.plain(
  "ggrg",
  _flaxBinding888,
  _Vector4_ggrg,
);
const _flaxBinding2028 = FlaxGetter.plain(
  "ggrb",
  _flaxBinding888,
  _Vector4_ggrb,
);
const _flaxBinding2029 = FlaxGetter.plain(
  "ggra",
  _flaxBinding888,
  _Vector4_ggra,
);
const _flaxBinding2030 = FlaxGetter.plain(
  "gggr",
  _flaxBinding888,
  _Vector4_gggr,
);
const _flaxBinding2031 = FlaxGetter.plain(
  "gggg",
  _flaxBinding888,
  _Vector4_gggg,
);
const _flaxBinding2032 = FlaxGetter.plain(
  "gggb",
  _flaxBinding888,
  _Vector4_gggb,
);
const _flaxBinding2033 = FlaxGetter.plain(
  "ggga",
  _flaxBinding888,
  _Vector4_ggga,
);
const _flaxBinding2034 = FlaxGetter.plain(
  "ggbr",
  _flaxBinding888,
  _Vector4_ggbr,
);
const _flaxBinding2035 = FlaxGetter.plain(
  "ggbg",
  _flaxBinding888,
  _Vector4_ggbg,
);
const _flaxBinding2036 = FlaxGetter.plain(
  "ggbb",
  _flaxBinding888,
  _Vector4_ggbb,
);
const _flaxBinding2037 = FlaxGetter.plain(
  "ggba",
  _flaxBinding888,
  _Vector4_ggba,
);
const _flaxBinding2038 = FlaxGetter.plain(
  "ggar",
  _flaxBinding888,
  _Vector4_ggar,
);
const _flaxBinding2039 = FlaxGetter.plain(
  "ggag",
  _flaxBinding888,
  _Vector4_ggag,
);
const _flaxBinding2040 = FlaxGetter.plain(
  "ggab",
  _flaxBinding888,
  _Vector4_ggab,
);
const _flaxBinding2041 = FlaxGetter.plain(
  "ggaa",
  _flaxBinding888,
  _Vector4_ggaa,
);
const _flaxBinding2042 = FlaxGetter.plain(
  "gbrr",
  _flaxBinding888,
  _Vector4_gbrr,
);
const _flaxBinding2043 = FlaxGetter.plain(
  "gbrg",
  _flaxBinding888,
  _Vector4_gbrg,
);
const _flaxBinding2044 = FlaxGetter.plain(
  "gbrb",
  _flaxBinding888,
  _Vector4_gbrb,
);
const _flaxBinding2045 = FlaxGetter.plain(
  "gbra",
  _flaxBinding888,
  _Vector4_gbra,
);
const _flaxBinding2046 = FlaxGetter.plain(
  "gbgr",
  _flaxBinding888,
  _Vector4_gbgr,
);
const _flaxBinding2047 = FlaxGetter.plain(
  "gbgg",
  _flaxBinding888,
  _Vector4_gbgg,
);
const _flaxBinding2048 = FlaxGetter.plain(
  "gbgb",
  _flaxBinding888,
  _Vector4_gbgb,
);
const _flaxBinding2049 = FlaxGetter.plain(
  "gbga",
  _flaxBinding888,
  _Vector4_gbga,
);
const _flaxBinding2050 = FlaxGetter.plain(
  "gbbr",
  _flaxBinding888,
  _Vector4_gbbr,
);
const _flaxBinding2051 = FlaxGetter.plain(
  "gbbg",
  _flaxBinding888,
  _Vector4_gbbg,
);
const _flaxBinding2052 = FlaxGetter.plain(
  "gbbb",
  _flaxBinding888,
  _Vector4_gbbb,
);
const _flaxBinding2053 = FlaxGetter.plain(
  "gbba",
  _flaxBinding888,
  _Vector4_gbba,
);
const _flaxBinding2054 = FlaxGetter.plain(
  "gbar",
  _flaxBinding888,
  _Vector4_gbar,
);
const _flaxBinding2055 = FlaxGetter.plain(
  "gbag",
  _flaxBinding888,
  _Vector4_gbag,
);
const _flaxBinding2056 = FlaxGetter.plain(
  "gbab",
  _flaxBinding888,
  _Vector4_gbab,
);
const _flaxBinding2057 = FlaxGetter.plain(
  "gbaa",
  _flaxBinding888,
  _Vector4_gbaa,
);
const _flaxBinding2058 = FlaxGetter.plain(
  "garr",
  _flaxBinding888,
  _Vector4_garr,
);
const _flaxBinding2059 = FlaxGetter.plain(
  "garg",
  _flaxBinding888,
  _Vector4_garg,
);
const _flaxBinding2060 = FlaxGetter.plain(
  "garb",
  _flaxBinding888,
  _Vector4_garb,
);
const _flaxBinding2061 = FlaxGetter.plain(
  "gara",
  _flaxBinding888,
  _Vector4_gara,
);
const _flaxBinding2062 = FlaxGetter.plain(
  "gagr",
  _flaxBinding888,
  _Vector4_gagr,
);
const _flaxBinding2063 = FlaxGetter.plain(
  "gagg",
  _flaxBinding888,
  _Vector4_gagg,
);
const _flaxBinding2064 = FlaxGetter.plain(
  "gagb",
  _flaxBinding888,
  _Vector4_gagb,
);
const _flaxBinding2065 = FlaxGetter.plain(
  "gaga",
  _flaxBinding888,
  _Vector4_gaga,
);
const _flaxBinding2066 = FlaxGetter.plain(
  "gabr",
  _flaxBinding888,
  _Vector4_gabr,
);
const _flaxBinding2067 = FlaxGetter.plain(
  "gabg",
  _flaxBinding888,
  _Vector4_gabg,
);
const _flaxBinding2068 = FlaxGetter.plain(
  "gabb",
  _flaxBinding888,
  _Vector4_gabb,
);
const _flaxBinding2069 = FlaxGetter.plain(
  "gaba",
  _flaxBinding888,
  _Vector4_gaba,
);
const _flaxBinding2070 = FlaxGetter.plain(
  "gaar",
  _flaxBinding888,
  _Vector4_gaar,
);
const _flaxBinding2071 = FlaxGetter.plain(
  "gaag",
  _flaxBinding888,
  _Vector4_gaag,
);
const _flaxBinding2072 = FlaxGetter.plain(
  "gaab",
  _flaxBinding888,
  _Vector4_gaab,
);
const _flaxBinding2073 = FlaxGetter.plain(
  "gaaa",
  _flaxBinding888,
  _Vector4_gaaa,
);
const _flaxBinding2074 = FlaxGetter.plain(
  "brrr",
  _flaxBinding888,
  _Vector4_brrr,
);
const _flaxBinding2075 = FlaxGetter.plain(
  "brrg",
  _flaxBinding888,
  _Vector4_brrg,
);
const _flaxBinding2076 = FlaxGetter.plain(
  "brrb",
  _flaxBinding888,
  _Vector4_brrb,
);
const _flaxBinding2077 = FlaxGetter.plain(
  "brra",
  _flaxBinding888,
  _Vector4_brra,
);
const _flaxBinding2078 = FlaxGetter.plain(
  "brgr",
  _flaxBinding888,
  _Vector4_brgr,
);
const _flaxBinding2079 = FlaxGetter.plain(
  "brgg",
  _flaxBinding888,
  _Vector4_brgg,
);
const _flaxBinding2080 = FlaxGetter.plain(
  "brgb",
  _flaxBinding888,
  _Vector4_brgb,
);
const _flaxBinding2081 = FlaxGetter.plain(
  "brga",
  _flaxBinding888,
  _Vector4_brga,
);
const _flaxBinding2082 = FlaxGetter.plain(
  "brbr",
  _flaxBinding888,
  _Vector4_brbr,
);
const _flaxBinding2083 = FlaxGetter.plain(
  "brbg",
  _flaxBinding888,
  _Vector4_brbg,
);
const _flaxBinding2084 = FlaxGetter.plain(
  "brbb",
  _flaxBinding888,
  _Vector4_brbb,
);
const _flaxBinding2085 = FlaxGetter.plain(
  "brba",
  _flaxBinding888,
  _Vector4_brba,
);
const _flaxBinding2086 = FlaxGetter.plain(
  "brar",
  _flaxBinding888,
  _Vector4_brar,
);
const _flaxBinding2087 = FlaxGetter.plain(
  "brag",
  _flaxBinding888,
  _Vector4_brag,
);
const _flaxBinding2088 = FlaxGetter.plain(
  "brab",
  _flaxBinding888,
  _Vector4_brab,
);
const _flaxBinding2089 = FlaxGetter.plain(
  "braa",
  _flaxBinding888,
  _Vector4_braa,
);
const _flaxBinding2090 = FlaxGetter.plain(
  "bgrr",
  _flaxBinding888,
  _Vector4_bgrr,
);
const _flaxBinding2091 = FlaxGetter.plain(
  "bgrg",
  _flaxBinding888,
  _Vector4_bgrg,
);
const _flaxBinding2092 = FlaxGetter.plain(
  "bgrb",
  _flaxBinding888,
  _Vector4_bgrb,
);
const _flaxBinding2093 = FlaxGetter.plain(
  "bgra",
  _flaxBinding888,
  _Vector4_bgra,
);
const _flaxBinding2094 = FlaxGetter.plain(
  "bggr",
  _flaxBinding888,
  _Vector4_bggr,
);
const _flaxBinding2095 = FlaxGetter.plain(
  "bggg",
  _flaxBinding888,
  _Vector4_bggg,
);
const _flaxBinding2096 = FlaxGetter.plain(
  "bggb",
  _flaxBinding888,
  _Vector4_bggb,
);
const _flaxBinding2097 = FlaxGetter.plain(
  "bgga",
  _flaxBinding888,
  _Vector4_bgga,
);
const _flaxBinding2098 = FlaxGetter.plain(
  "bgbr",
  _flaxBinding888,
  _Vector4_bgbr,
);
const _flaxBinding2099 = FlaxGetter.plain(
  "bgbg",
  _flaxBinding888,
  _Vector4_bgbg,
);
const _flaxBinding2100 = FlaxGetter.plain(
  "bgbb",
  _flaxBinding888,
  _Vector4_bgbb,
);
const _flaxBinding2101 = FlaxGetter.plain(
  "bgba",
  _flaxBinding888,
  _Vector4_bgba,
);
const _flaxBinding2102 = FlaxGetter.plain(
  "bgar",
  _flaxBinding888,
  _Vector4_bgar,
);
const _flaxBinding2103 = FlaxGetter.plain(
  "bgag",
  _flaxBinding888,
  _Vector4_bgag,
);
const _flaxBinding2104 = FlaxGetter.plain(
  "bgab",
  _flaxBinding888,
  _Vector4_bgab,
);
const _flaxBinding2105 = FlaxGetter.plain(
  "bgaa",
  _flaxBinding888,
  _Vector4_bgaa,
);
const _flaxBinding2106 = FlaxGetter.plain(
  "bbrr",
  _flaxBinding888,
  _Vector4_bbrr,
);
const _flaxBinding2107 = FlaxGetter.plain(
  "bbrg",
  _flaxBinding888,
  _Vector4_bbrg,
);
const _flaxBinding2108 = FlaxGetter.plain(
  "bbrb",
  _flaxBinding888,
  _Vector4_bbrb,
);
const _flaxBinding2109 = FlaxGetter.plain(
  "bbra",
  _flaxBinding888,
  _Vector4_bbra,
);
const _flaxBinding2110 = FlaxGetter.plain(
  "bbgr",
  _flaxBinding888,
  _Vector4_bbgr,
);
const _flaxBinding2111 = FlaxGetter.plain(
  "bbgg",
  _flaxBinding888,
  _Vector4_bbgg,
);
const _flaxBinding2112 = FlaxGetter.plain(
  "bbgb",
  _flaxBinding888,
  _Vector4_bbgb,
);
const _flaxBinding2113 = FlaxGetter.plain(
  "bbga",
  _flaxBinding888,
  _Vector4_bbga,
);
const _flaxBinding2114 = FlaxGetter.plain(
  "bbbr",
  _flaxBinding888,
  _Vector4_bbbr,
);
const _flaxBinding2115 = FlaxGetter.plain(
  "bbbg",
  _flaxBinding888,
  _Vector4_bbbg,
);
const _flaxBinding2116 = FlaxGetter.plain(
  "bbbb",
  _flaxBinding888,
  _Vector4_bbbb,
);
const _flaxBinding2117 = FlaxGetter.plain(
  "bbba",
  _flaxBinding888,
  _Vector4_bbba,
);
const _flaxBinding2118 = FlaxGetter.plain(
  "bbar",
  _flaxBinding888,
  _Vector4_bbar,
);
const _flaxBinding2119 = FlaxGetter.plain(
  "bbag",
  _flaxBinding888,
  _Vector4_bbag,
);
const _flaxBinding2120 = FlaxGetter.plain(
  "bbab",
  _flaxBinding888,
  _Vector4_bbab,
);
const _flaxBinding2121 = FlaxGetter.plain(
  "bbaa",
  _flaxBinding888,
  _Vector4_bbaa,
);
const _flaxBinding2122 = FlaxGetter.plain(
  "barr",
  _flaxBinding888,
  _Vector4_barr,
);
const _flaxBinding2123 = FlaxGetter.plain(
  "barg",
  _flaxBinding888,
  _Vector4_barg,
);
const _flaxBinding2124 = FlaxGetter.plain(
  "barb",
  _flaxBinding888,
  _Vector4_barb,
);
const _flaxBinding2125 = FlaxGetter.plain(
  "bara",
  _flaxBinding888,
  _Vector4_bara,
);
const _flaxBinding2126 = FlaxGetter.plain(
  "bagr",
  _flaxBinding888,
  _Vector4_bagr,
);
const _flaxBinding2127 = FlaxGetter.plain(
  "bagg",
  _flaxBinding888,
  _Vector4_bagg,
);
const _flaxBinding2128 = FlaxGetter.plain(
  "bagb",
  _flaxBinding888,
  _Vector4_bagb,
);
const _flaxBinding2129 = FlaxGetter.plain(
  "baga",
  _flaxBinding888,
  _Vector4_baga,
);
const _flaxBinding2130 = FlaxGetter.plain(
  "babr",
  _flaxBinding888,
  _Vector4_babr,
);
const _flaxBinding2131 = FlaxGetter.plain(
  "babg",
  _flaxBinding888,
  _Vector4_babg,
);
const _flaxBinding2132 = FlaxGetter.plain(
  "babb",
  _flaxBinding888,
  _Vector4_babb,
);
const _flaxBinding2133 = FlaxGetter.plain(
  "baba",
  _flaxBinding888,
  _Vector4_baba,
);
const _flaxBinding2134 = FlaxGetter.plain(
  "baar",
  _flaxBinding888,
  _Vector4_baar,
);
const _flaxBinding2135 = FlaxGetter.plain(
  "baag",
  _flaxBinding888,
  _Vector4_baag,
);
const _flaxBinding2136 = FlaxGetter.plain(
  "baab",
  _flaxBinding888,
  _Vector4_baab,
);
const _flaxBinding2137 = FlaxGetter.plain(
  "baaa",
  _flaxBinding888,
  _Vector4_baaa,
);
const _flaxBinding2138 = FlaxGetter.plain(
  "arrr",
  _flaxBinding888,
  _Vector4_arrr,
);
const _flaxBinding2139 = FlaxGetter.plain(
  "arrg",
  _flaxBinding888,
  _Vector4_arrg,
);
const _flaxBinding2140 = FlaxGetter.plain(
  "arrb",
  _flaxBinding888,
  _Vector4_arrb,
);
const _flaxBinding2141 = FlaxGetter.plain(
  "arra",
  _flaxBinding888,
  _Vector4_arra,
);
const _flaxBinding2142 = FlaxGetter.plain(
  "argr",
  _flaxBinding888,
  _Vector4_argr,
);
const _flaxBinding2143 = FlaxGetter.plain(
  "argg",
  _flaxBinding888,
  _Vector4_argg,
);
const _flaxBinding2144 = FlaxGetter.plain(
  "argb",
  _flaxBinding888,
  _Vector4_argb,
);
const _flaxBinding2145 = FlaxGetter.plain(
  "arga",
  _flaxBinding888,
  _Vector4_arga,
);
const _flaxBinding2146 = FlaxGetter.plain(
  "arbr",
  _flaxBinding888,
  _Vector4_arbr,
);
const _flaxBinding2147 = FlaxGetter.plain(
  "arbg",
  _flaxBinding888,
  _Vector4_arbg,
);
const _flaxBinding2148 = FlaxGetter.plain(
  "arbb",
  _flaxBinding888,
  _Vector4_arbb,
);
const _flaxBinding2149 = FlaxGetter.plain(
  "arba",
  _flaxBinding888,
  _Vector4_arba,
);
const _flaxBinding2150 = FlaxGetter.plain(
  "arar",
  _flaxBinding888,
  _Vector4_arar,
);
const _flaxBinding2151 = FlaxGetter.plain(
  "arag",
  _flaxBinding888,
  _Vector4_arag,
);
const _flaxBinding2152 = FlaxGetter.plain(
  "arab",
  _flaxBinding888,
  _Vector4_arab,
);
const _flaxBinding2153 = FlaxGetter.plain(
  "araa",
  _flaxBinding888,
  _Vector4_araa,
);
const _flaxBinding2154 = FlaxGetter.plain(
  "agrr",
  _flaxBinding888,
  _Vector4_agrr,
);
const _flaxBinding2155 = FlaxGetter.plain(
  "agrg",
  _flaxBinding888,
  _Vector4_agrg,
);
const _flaxBinding2156 = FlaxGetter.plain(
  "agrb",
  _flaxBinding888,
  _Vector4_agrb,
);
const _flaxBinding2157 = FlaxGetter.plain(
  "agra",
  _flaxBinding888,
  _Vector4_agra,
);
const _flaxBinding2158 = FlaxGetter.plain(
  "aggr",
  _flaxBinding888,
  _Vector4_aggr,
);
const _flaxBinding2159 = FlaxGetter.plain(
  "aggg",
  _flaxBinding888,
  _Vector4_aggg,
);
const _flaxBinding2160 = FlaxGetter.plain(
  "aggb",
  _flaxBinding888,
  _Vector4_aggb,
);
const _flaxBinding2161 = FlaxGetter.plain(
  "agga",
  _flaxBinding888,
  _Vector4_agga,
);
const _flaxBinding2162 = FlaxGetter.plain(
  "agbr",
  _flaxBinding888,
  _Vector4_agbr,
);
const _flaxBinding2163 = FlaxGetter.plain(
  "agbg",
  _flaxBinding888,
  _Vector4_agbg,
);
const _flaxBinding2164 = FlaxGetter.plain(
  "agbb",
  _flaxBinding888,
  _Vector4_agbb,
);
const _flaxBinding2165 = FlaxGetter.plain(
  "agba",
  _flaxBinding888,
  _Vector4_agba,
);
const _flaxBinding2166 = FlaxGetter.plain(
  "agar",
  _flaxBinding888,
  _Vector4_agar,
);
const _flaxBinding2167 = FlaxGetter.plain(
  "agag",
  _flaxBinding888,
  _Vector4_agag,
);
const _flaxBinding2168 = FlaxGetter.plain(
  "agab",
  _flaxBinding888,
  _Vector4_agab,
);
const _flaxBinding2169 = FlaxGetter.plain(
  "agaa",
  _flaxBinding888,
  _Vector4_agaa,
);
const _flaxBinding2170 = FlaxGetter.plain(
  "abrr",
  _flaxBinding888,
  _Vector4_abrr,
);
const _flaxBinding2171 = FlaxGetter.plain(
  "abrg",
  _flaxBinding888,
  _Vector4_abrg,
);
const _flaxBinding2172 = FlaxGetter.plain(
  "abrb",
  _flaxBinding888,
  _Vector4_abrb,
);
const _flaxBinding2173 = FlaxGetter.plain(
  "abra",
  _flaxBinding888,
  _Vector4_abra,
);
const _flaxBinding2174 = FlaxGetter.plain(
  "abgr",
  _flaxBinding888,
  _Vector4_abgr,
);
const _flaxBinding2175 = FlaxGetter.plain(
  "abgg",
  _flaxBinding888,
  _Vector4_abgg,
);
const _flaxBinding2176 = FlaxGetter.plain(
  "abgb",
  _flaxBinding888,
  _Vector4_abgb,
);
const _flaxBinding2177 = FlaxGetter.plain(
  "abga",
  _flaxBinding888,
  _Vector4_abga,
);
const _flaxBinding2178 = FlaxGetter.plain(
  "abbr",
  _flaxBinding888,
  _Vector4_abbr,
);
const _flaxBinding2179 = FlaxGetter.plain(
  "abbg",
  _flaxBinding888,
  _Vector4_abbg,
);
const _flaxBinding2180 = FlaxGetter.plain(
  "abbb",
  _flaxBinding888,
  _Vector4_abbb,
);
const _flaxBinding2181 = FlaxGetter.plain(
  "abba",
  _flaxBinding888,
  _Vector4_abba,
);
const _flaxBinding2182 = FlaxGetter.plain(
  "abar",
  _flaxBinding888,
  _Vector4_abar,
);
const _flaxBinding2183 = FlaxGetter.plain(
  "abag",
  _flaxBinding888,
  _Vector4_abag,
);
const _flaxBinding2184 = FlaxGetter.plain(
  "abab",
  _flaxBinding888,
  _Vector4_abab,
);
const _flaxBinding2185 = FlaxGetter.plain(
  "abaa",
  _flaxBinding888,
  _Vector4_abaa,
);
const _flaxBinding2186 = FlaxGetter.plain(
  "aarr",
  _flaxBinding888,
  _Vector4_aarr,
);
const _flaxBinding2187 = FlaxGetter.plain(
  "aarg",
  _flaxBinding888,
  _Vector4_aarg,
);
const _flaxBinding2188 = FlaxGetter.plain(
  "aarb",
  _flaxBinding888,
  _Vector4_aarb,
);
const _flaxBinding2189 = FlaxGetter.plain(
  "aara",
  _flaxBinding888,
  _Vector4_aara,
);
const _flaxBinding2190 = FlaxGetter.plain(
  "aagr",
  _flaxBinding888,
  _Vector4_aagr,
);
const _flaxBinding2191 = FlaxGetter.plain(
  "aagg",
  _flaxBinding888,
  _Vector4_aagg,
);
const _flaxBinding2192 = FlaxGetter.plain(
  "aagb",
  _flaxBinding888,
  _Vector4_aagb,
);
const _flaxBinding2193 = FlaxGetter.plain(
  "aaga",
  _flaxBinding888,
  _Vector4_aaga,
);
const _flaxBinding2194 = FlaxGetter.plain(
  "aabr",
  _flaxBinding888,
  _Vector4_aabr,
);
const _flaxBinding2195 = FlaxGetter.plain(
  "aabg",
  _flaxBinding888,
  _Vector4_aabg,
);
const _flaxBinding2196 = FlaxGetter.plain(
  "aabb",
  _flaxBinding888,
  _Vector4_aabb,
);
const _flaxBinding2197 = FlaxGetter.plain(
  "aaba",
  _flaxBinding888,
  _Vector4_aaba,
);
const _flaxBinding2198 = FlaxGetter.plain(
  "aaar",
  _flaxBinding888,
  _Vector4_aaar,
);
const _flaxBinding2199 = FlaxGetter.plain(
  "aaag",
  _flaxBinding888,
  _Vector4_aaag,
);
const _flaxBinding2200 = FlaxGetter.plain(
  "aaab",
  _flaxBinding888,
  _Vector4_aaab,
);
const _flaxBinding2201 = FlaxGetter.plain(
  "aaaa",
  _flaxBinding888,
  _Vector4_aaaa,
);
const _flaxBinding2202 = FlaxGetter.plain("ss", _flaxBinding426, _Vector4_ss);
const _flaxBinding2203 = FlaxGetter.plain("st", _flaxBinding426, _Vector4_st);
const _flaxBinding2204 = FlaxGetter.plain("sp", _flaxBinding426, _Vector4_sp);
const _flaxBinding2205 = FlaxGetter.plain("sq", _flaxBinding426, _Vector4_sq);
const _flaxBinding2206 = FlaxGetter.plain("ts", _flaxBinding426, _Vector4_ts);
const _flaxBinding2207 = FlaxGetter.plain("tt", _flaxBinding426, _Vector4_tt);
const _flaxBinding2208 = FlaxGetter.plain("tp", _flaxBinding426, _Vector4_tp);
const _flaxBinding2209 = FlaxGetter.plain("tq", _flaxBinding426, _Vector4_tq);
const _flaxBinding2210 = FlaxGetter.plain("ps", _flaxBinding426, _Vector4_ps);
const _flaxBinding2211 = FlaxGetter.plain("pt", _flaxBinding426, _Vector4_pt);
const _flaxBinding2212 = FlaxGetter.plain("pp", _flaxBinding426, _Vector4_pp);
const _flaxBinding2213 = FlaxGetter.plain("pq", _flaxBinding426, _Vector4_pq);
const _flaxBinding2214 = FlaxGetter.plain("qs", _flaxBinding426, _Vector4_qs);
const _flaxBinding2215 = FlaxGetter.plain("qt", _flaxBinding426, _Vector4_qt);
const _flaxBinding2216 = FlaxGetter.plain("qp", _flaxBinding426, _Vector4_qp);
const _flaxBinding2217 = FlaxGetter.plain("qq", _flaxBinding426, _Vector4_qq);
const _flaxBinding2218 = FlaxGetter.plain("sss", _flaxBinding517, _Vector4_sss);
const _flaxBinding2219 = FlaxGetter.plain("sst", _flaxBinding517, _Vector4_sst);
const _flaxBinding2220 = FlaxGetter.plain("ssp", _flaxBinding517, _Vector4_ssp);
const _flaxBinding2221 = FlaxGetter.plain("ssq", _flaxBinding517, _Vector4_ssq);
const _flaxBinding2222 = FlaxGetter.plain("sts", _flaxBinding517, _Vector4_sts);
const _flaxBinding2223 = FlaxGetter.plain("stt", _flaxBinding517, _Vector4_stt);
const _flaxBinding2224 = FlaxGetter.plain("stp", _flaxBinding517, _Vector4_stp);
const _flaxBinding2225 = FlaxGetter.plain("stq", _flaxBinding517, _Vector4_stq);
const _flaxBinding2226 = FlaxGetter.plain("sps", _flaxBinding517, _Vector4_sps);
const _flaxBinding2227 = FlaxGetter.plain("spt", _flaxBinding517, _Vector4_spt);
const _flaxBinding2228 = FlaxGetter.plain("spp", _flaxBinding517, _Vector4_spp);
const _flaxBinding2229 = FlaxGetter.plain("spq", _flaxBinding517, _Vector4_spq);
const _flaxBinding2230 = FlaxGetter.plain("sqs", _flaxBinding517, _Vector4_sqs);
const _flaxBinding2231 = FlaxGetter.plain("sqt", _flaxBinding517, _Vector4_sqt);
const _flaxBinding2232 = FlaxGetter.plain("sqp", _flaxBinding517, _Vector4_sqp);
const _flaxBinding2233 = FlaxGetter.plain("sqq", _flaxBinding517, _Vector4_sqq);
const _flaxBinding2234 = FlaxGetter.plain("tss", _flaxBinding517, _Vector4_tss);
const _flaxBinding2235 = FlaxGetter.plain("tst", _flaxBinding517, _Vector4_tst);
const _flaxBinding2236 = FlaxGetter.plain("tsp", _flaxBinding517, _Vector4_tsp);
const _flaxBinding2237 = FlaxGetter.plain("tsq", _flaxBinding517, _Vector4_tsq);
const _flaxBinding2238 = FlaxGetter.plain("tts", _flaxBinding517, _Vector4_tts);
const _flaxBinding2239 = FlaxGetter.plain("ttt", _flaxBinding517, _Vector4_ttt);
const _flaxBinding2240 = FlaxGetter.plain("ttp", _flaxBinding517, _Vector4_ttp);
const _flaxBinding2241 = FlaxGetter.plain("ttq", _flaxBinding517, _Vector4_ttq);
const _flaxBinding2242 = FlaxGetter.plain("tps", _flaxBinding517, _Vector4_tps);
const _flaxBinding2243 = FlaxGetter.plain("tpt", _flaxBinding517, _Vector4_tpt);
const _flaxBinding2244 = FlaxGetter.plain("tpp", _flaxBinding517, _Vector4_tpp);
const _flaxBinding2245 = FlaxGetter.plain("tpq", _flaxBinding517, _Vector4_tpq);
const _flaxBinding2246 = FlaxGetter.plain("tqs", _flaxBinding517, _Vector4_tqs);
const _flaxBinding2247 = FlaxGetter.plain("tqt", _flaxBinding517, _Vector4_tqt);
const _flaxBinding2248 = FlaxGetter.plain("tqp", _flaxBinding517, _Vector4_tqp);
const _flaxBinding2249 = FlaxGetter.plain("tqq", _flaxBinding517, _Vector4_tqq);
const _flaxBinding2250 = FlaxGetter.plain("pss", _flaxBinding517, _Vector4_pss);
const _flaxBinding2251 = FlaxGetter.plain("pst", _flaxBinding517, _Vector4_pst);
const _flaxBinding2252 = FlaxGetter.plain("psp", _flaxBinding517, _Vector4_psp);
const _flaxBinding2253 = FlaxGetter.plain("psq", _flaxBinding517, _Vector4_psq);
const _flaxBinding2254 = FlaxGetter.plain("pts", _flaxBinding517, _Vector4_pts);
const _flaxBinding2255 = FlaxGetter.plain("ptt", _flaxBinding517, _Vector4_ptt);
const _flaxBinding2256 = FlaxGetter.plain("ptp", _flaxBinding517, _Vector4_ptp);
const _flaxBinding2257 = FlaxGetter.plain("ptq", _flaxBinding517, _Vector4_ptq);
const _flaxBinding2258 = FlaxGetter.plain("pps", _flaxBinding517, _Vector4_pps);
const _flaxBinding2259 = FlaxGetter.plain("ppt", _flaxBinding517, _Vector4_ppt);
const _flaxBinding2260 = FlaxGetter.plain("ppp", _flaxBinding517, _Vector4_ppp);
const _flaxBinding2261 = FlaxGetter.plain("ppq", _flaxBinding517, _Vector4_ppq);
const _flaxBinding2262 = FlaxGetter.plain("pqs", _flaxBinding517, _Vector4_pqs);
const _flaxBinding2263 = FlaxGetter.plain("pqt", _flaxBinding517, _Vector4_pqt);
const _flaxBinding2264 = FlaxGetter.plain("pqp", _flaxBinding517, _Vector4_pqp);
const _flaxBinding2265 = FlaxGetter.plain("pqq", _flaxBinding517, _Vector4_pqq);
const _flaxBinding2266 = FlaxGetter.plain("qss", _flaxBinding517, _Vector4_qss);
const _flaxBinding2267 = FlaxGetter.plain("qst", _flaxBinding517, _Vector4_qst);
const _flaxBinding2268 = FlaxGetter.plain("qsp", _flaxBinding517, _Vector4_qsp);
const _flaxBinding2269 = FlaxGetter.plain("qsq", _flaxBinding517, _Vector4_qsq);
const _flaxBinding2270 = FlaxGetter.plain("qts", _flaxBinding517, _Vector4_qts);
const _flaxBinding2271 = FlaxGetter.plain("qtt", _flaxBinding517, _Vector4_qtt);
const _flaxBinding2272 = FlaxGetter.plain("qtp", _flaxBinding517, _Vector4_qtp);
const _flaxBinding2273 = FlaxGetter.plain("qtq", _flaxBinding517, _Vector4_qtq);
const _flaxBinding2274 = FlaxGetter.plain("qps", _flaxBinding517, _Vector4_qps);
const _flaxBinding2275 = FlaxGetter.plain("qpt", _flaxBinding517, _Vector4_qpt);
const _flaxBinding2276 = FlaxGetter.plain("qpp", _flaxBinding517, _Vector4_qpp);
const _flaxBinding2277 = FlaxGetter.plain("qpq", _flaxBinding517, _Vector4_qpq);
const _flaxBinding2278 = FlaxGetter.plain("qqs", _flaxBinding517, _Vector4_qqs);
const _flaxBinding2279 = FlaxGetter.plain("qqt", _flaxBinding517, _Vector4_qqt);
const _flaxBinding2280 = FlaxGetter.plain("qqp", _flaxBinding517, _Vector4_qqp);
const _flaxBinding2281 = FlaxGetter.plain("qqq", _flaxBinding517, _Vector4_qqq);
const _flaxBinding2282 = FlaxGetter.plain(
  "ssss",
  _flaxBinding888,
  _Vector4_ssss,
);
const _flaxBinding2283 = FlaxGetter.plain(
  "ssst",
  _flaxBinding888,
  _Vector4_ssst,
);
const _flaxBinding2284 = FlaxGetter.plain(
  "sssp",
  _flaxBinding888,
  _Vector4_sssp,
);
const _flaxBinding2285 = FlaxGetter.plain(
  "sssq",
  _flaxBinding888,
  _Vector4_sssq,
);
const _flaxBinding2286 = FlaxGetter.plain(
  "ssts",
  _flaxBinding888,
  _Vector4_ssts,
);
const _flaxBinding2287 = FlaxGetter.plain(
  "sstt",
  _flaxBinding888,
  _Vector4_sstt,
);
const _flaxBinding2288 = FlaxGetter.plain(
  "sstp",
  _flaxBinding888,
  _Vector4_sstp,
);
const _flaxBinding2289 = FlaxGetter.plain(
  "sstq",
  _flaxBinding888,
  _Vector4_sstq,
);
const _flaxBinding2290 = FlaxGetter.plain(
  "ssps",
  _flaxBinding888,
  _Vector4_ssps,
);
const _flaxBinding2291 = FlaxGetter.plain(
  "sspt",
  _flaxBinding888,
  _Vector4_sspt,
);
const _flaxBinding2292 = FlaxGetter.plain(
  "sspp",
  _flaxBinding888,
  _Vector4_sspp,
);
const _flaxBinding2293 = FlaxGetter.plain(
  "sspq",
  _flaxBinding888,
  _Vector4_sspq,
);
const _flaxBinding2294 = FlaxGetter.plain(
  "ssqs",
  _flaxBinding888,
  _Vector4_ssqs,
);
const _flaxBinding2295 = FlaxGetter.plain(
  "ssqt",
  _flaxBinding888,
  _Vector4_ssqt,
);
const _flaxBinding2296 = FlaxGetter.plain(
  "ssqp",
  _flaxBinding888,
  _Vector4_ssqp,
);
const _flaxBinding2297 = FlaxGetter.plain(
  "ssqq",
  _flaxBinding888,
  _Vector4_ssqq,
);
const _flaxBinding2298 = FlaxGetter.plain(
  "stss",
  _flaxBinding888,
  _Vector4_stss,
);
const _flaxBinding2299 = FlaxGetter.plain(
  "stst",
  _flaxBinding888,
  _Vector4_stst,
);
const _flaxBinding2300 = FlaxGetter.plain(
  "stsp",
  _flaxBinding888,
  _Vector4_stsp,
);
const _flaxBinding2301 = FlaxGetter.plain(
  "stsq",
  _flaxBinding888,
  _Vector4_stsq,
);
const _flaxBinding2302 = FlaxGetter.plain(
  "stts",
  _flaxBinding888,
  _Vector4_stts,
);
const _flaxBinding2303 = FlaxGetter.plain(
  "sttt",
  _flaxBinding888,
  _Vector4_sttt,
);
const _flaxBinding2304 = FlaxGetter.plain(
  "sttp",
  _flaxBinding888,
  _Vector4_sttp,
);
const _flaxBinding2305 = FlaxGetter.plain(
  "sttq",
  _flaxBinding888,
  _Vector4_sttq,
);
const _flaxBinding2306 = FlaxGetter.plain(
  "stps",
  _flaxBinding888,
  _Vector4_stps,
);
const _flaxBinding2307 = FlaxGetter.plain(
  "stpt",
  _flaxBinding888,
  _Vector4_stpt,
);
const _flaxBinding2308 = FlaxGetter.plain(
  "stpp",
  _flaxBinding888,
  _Vector4_stpp,
);
const _flaxBinding2309 = FlaxGetter.plain(
  "stpq",
  _flaxBinding888,
  _Vector4_stpq,
);
const _flaxBinding2310 = FlaxGetter.plain(
  "stqs",
  _flaxBinding888,
  _Vector4_stqs,
);
const _flaxBinding2311 = FlaxGetter.plain(
  "stqt",
  _flaxBinding888,
  _Vector4_stqt,
);
const _flaxBinding2312 = FlaxGetter.plain(
  "stqp",
  _flaxBinding888,
  _Vector4_stqp,
);
const _flaxBinding2313 = FlaxGetter.plain(
  "stqq",
  _flaxBinding888,
  _Vector4_stqq,
);
const _flaxBinding2314 = FlaxGetter.plain(
  "spss",
  _flaxBinding888,
  _Vector4_spss,
);
const _flaxBinding2315 = FlaxGetter.plain(
  "spst",
  _flaxBinding888,
  _Vector4_spst,
);
const _flaxBinding2316 = FlaxGetter.plain(
  "spsp",
  _flaxBinding888,
  _Vector4_spsp,
);
const _flaxBinding2317 = FlaxGetter.plain(
  "spsq",
  _flaxBinding888,
  _Vector4_spsq,
);
const _flaxBinding2318 = FlaxGetter.plain(
  "spts",
  _flaxBinding888,
  _Vector4_spts,
);
const _flaxBinding2319 = FlaxGetter.plain(
  "sptt",
  _flaxBinding888,
  _Vector4_sptt,
);
const _flaxBinding2320 = FlaxGetter.plain(
  "sptp",
  _flaxBinding888,
  _Vector4_sptp,
);
const _flaxBinding2321 = FlaxGetter.plain(
  "sptq",
  _flaxBinding888,
  _Vector4_sptq,
);
const _flaxBinding2322 = FlaxGetter.plain(
  "spps",
  _flaxBinding888,
  _Vector4_spps,
);
const _flaxBinding2323 = FlaxGetter.plain(
  "sppt",
  _flaxBinding888,
  _Vector4_sppt,
);
const _flaxBinding2324 = FlaxGetter.plain(
  "sppp",
  _flaxBinding888,
  _Vector4_sppp,
);
const _flaxBinding2325 = FlaxGetter.plain(
  "sppq",
  _flaxBinding888,
  _Vector4_sppq,
);
const _flaxBinding2326 = FlaxGetter.plain(
  "spqs",
  _flaxBinding888,
  _Vector4_spqs,
);
const _flaxBinding2327 = FlaxGetter.plain(
  "spqt",
  _flaxBinding888,
  _Vector4_spqt,
);
const _flaxBinding2328 = FlaxGetter.plain(
  "spqp",
  _flaxBinding888,
  _Vector4_spqp,
);
const _flaxBinding2329 = FlaxGetter.plain(
  "spqq",
  _flaxBinding888,
  _Vector4_spqq,
);
const _flaxBinding2330 = FlaxGetter.plain(
  "sqss",
  _flaxBinding888,
  _Vector4_sqss,
);
const _flaxBinding2331 = FlaxGetter.plain(
  "sqst",
  _flaxBinding888,
  _Vector4_sqst,
);
const _flaxBinding2332 = FlaxGetter.plain(
  "sqsp",
  _flaxBinding888,
  _Vector4_sqsp,
);
const _flaxBinding2333 = FlaxGetter.plain(
  "sqsq",
  _flaxBinding888,
  _Vector4_sqsq,
);
const _flaxBinding2334 = FlaxGetter.plain(
  "sqts",
  _flaxBinding888,
  _Vector4_sqts,
);
const _flaxBinding2335 = FlaxGetter.plain(
  "sqtt",
  _flaxBinding888,
  _Vector4_sqtt,
);
const _flaxBinding2336 = FlaxGetter.plain(
  "sqtp",
  _flaxBinding888,
  _Vector4_sqtp,
);
const _flaxBinding2337 = FlaxGetter.plain(
  "sqtq",
  _flaxBinding888,
  _Vector4_sqtq,
);
const _flaxBinding2338 = FlaxGetter.plain(
  "sqps",
  _flaxBinding888,
  _Vector4_sqps,
);
const _flaxBinding2339 = FlaxGetter.plain(
  "sqpt",
  _flaxBinding888,
  _Vector4_sqpt,
);
const _flaxBinding2340 = FlaxGetter.plain(
  "sqpp",
  _flaxBinding888,
  _Vector4_sqpp,
);
const _flaxBinding2341 = FlaxGetter.plain(
  "sqpq",
  _flaxBinding888,
  _Vector4_sqpq,
);
const _flaxBinding2342 = FlaxGetter.plain(
  "sqqs",
  _flaxBinding888,
  _Vector4_sqqs,
);
const _flaxBinding2343 = FlaxGetter.plain(
  "sqqt",
  _flaxBinding888,
  _Vector4_sqqt,
);
const _flaxBinding2344 = FlaxGetter.plain(
  "sqqp",
  _flaxBinding888,
  _Vector4_sqqp,
);
const _flaxBinding2345 = FlaxGetter.plain(
  "sqqq",
  _flaxBinding888,
  _Vector4_sqqq,
);
const _flaxBinding2346 = FlaxGetter.plain(
  "tsss",
  _flaxBinding888,
  _Vector4_tsss,
);
const _flaxBinding2347 = FlaxGetter.plain(
  "tsst",
  _flaxBinding888,
  _Vector4_tsst,
);
const _flaxBinding2348 = FlaxGetter.plain(
  "tssp",
  _flaxBinding888,
  _Vector4_tssp,
);
const _flaxBinding2349 = FlaxGetter.plain(
  "tssq",
  _flaxBinding888,
  _Vector4_tssq,
);
const _flaxBinding2350 = FlaxGetter.plain(
  "tsts",
  _flaxBinding888,
  _Vector4_tsts,
);
const _flaxBinding2351 = FlaxGetter.plain(
  "tstt",
  _flaxBinding888,
  _Vector4_tstt,
);
const _flaxBinding2352 = FlaxGetter.plain(
  "tstp",
  _flaxBinding888,
  _Vector4_tstp,
);
const _flaxBinding2353 = FlaxGetter.plain(
  "tstq",
  _flaxBinding888,
  _Vector4_tstq,
);
const _flaxBinding2354 = FlaxGetter.plain(
  "tsps",
  _flaxBinding888,
  _Vector4_tsps,
);
const _flaxBinding2355 = FlaxGetter.plain(
  "tspt",
  _flaxBinding888,
  _Vector4_tspt,
);
const _flaxBinding2356 = FlaxGetter.plain(
  "tspp",
  _flaxBinding888,
  _Vector4_tspp,
);
const _flaxBinding2357 = FlaxGetter.plain(
  "tspq",
  _flaxBinding888,
  _Vector4_tspq,
);
const _flaxBinding2358 = FlaxGetter.plain(
  "tsqs",
  _flaxBinding888,
  _Vector4_tsqs,
);
const _flaxBinding2359 = FlaxGetter.plain(
  "tsqt",
  _flaxBinding888,
  _Vector4_tsqt,
);
const _flaxBinding2360 = FlaxGetter.plain(
  "tsqp",
  _flaxBinding888,
  _Vector4_tsqp,
);
const _flaxBinding2361 = FlaxGetter.plain(
  "tsqq",
  _flaxBinding888,
  _Vector4_tsqq,
);
const _flaxBinding2362 = FlaxGetter.plain(
  "ttss",
  _flaxBinding888,
  _Vector4_ttss,
);
const _flaxBinding2363 = FlaxGetter.plain(
  "ttst",
  _flaxBinding888,
  _Vector4_ttst,
);
const _flaxBinding2364 = FlaxGetter.plain(
  "ttsp",
  _flaxBinding888,
  _Vector4_ttsp,
);
const _flaxBinding2365 = FlaxGetter.plain(
  "ttsq",
  _flaxBinding888,
  _Vector4_ttsq,
);
const _flaxBinding2366 = FlaxGetter.plain(
  "ttts",
  _flaxBinding888,
  _Vector4_ttts,
);
const _flaxBinding2367 = FlaxGetter.plain(
  "tttt",
  _flaxBinding888,
  _Vector4_tttt,
);
const _flaxBinding2368 = FlaxGetter.plain(
  "tttp",
  _flaxBinding888,
  _Vector4_tttp,
);
const _flaxBinding2369 = FlaxGetter.plain(
  "tttq",
  _flaxBinding888,
  _Vector4_tttq,
);
const _flaxBinding2370 = FlaxGetter.plain(
  "ttps",
  _flaxBinding888,
  _Vector4_ttps,
);
const _flaxBinding2371 = FlaxGetter.plain(
  "ttpt",
  _flaxBinding888,
  _Vector4_ttpt,
);
const _flaxBinding2372 = FlaxGetter.plain(
  "ttpp",
  _flaxBinding888,
  _Vector4_ttpp,
);
const _flaxBinding2373 = FlaxGetter.plain(
  "ttpq",
  _flaxBinding888,
  _Vector4_ttpq,
);
const _flaxBinding2374 = FlaxGetter.plain(
  "ttqs",
  _flaxBinding888,
  _Vector4_ttqs,
);
const _flaxBinding2375 = FlaxGetter.plain(
  "ttqt",
  _flaxBinding888,
  _Vector4_ttqt,
);
const _flaxBinding2376 = FlaxGetter.plain(
  "ttqp",
  _flaxBinding888,
  _Vector4_ttqp,
);
const _flaxBinding2377 = FlaxGetter.plain(
  "ttqq",
  _flaxBinding888,
  _Vector4_ttqq,
);
const _flaxBinding2378 = FlaxGetter.plain(
  "tpss",
  _flaxBinding888,
  _Vector4_tpss,
);
const _flaxBinding2379 = FlaxGetter.plain(
  "tpst",
  _flaxBinding888,
  _Vector4_tpst,
);
const _flaxBinding2380 = FlaxGetter.plain(
  "tpsp",
  _flaxBinding888,
  _Vector4_tpsp,
);
const _flaxBinding2381 = FlaxGetter.plain(
  "tpsq",
  _flaxBinding888,
  _Vector4_tpsq,
);
const _flaxBinding2382 = FlaxGetter.plain(
  "tpts",
  _flaxBinding888,
  _Vector4_tpts,
);
const _flaxBinding2383 = FlaxGetter.plain(
  "tptt",
  _flaxBinding888,
  _Vector4_tptt,
);
const _flaxBinding2384 = FlaxGetter.plain(
  "tptp",
  _flaxBinding888,
  _Vector4_tptp,
);
const _flaxBinding2385 = FlaxGetter.plain(
  "tptq",
  _flaxBinding888,
  _Vector4_tptq,
);
const _flaxBinding2386 = FlaxGetter.plain(
  "tpps",
  _flaxBinding888,
  _Vector4_tpps,
);
const _flaxBinding2387 = FlaxGetter.plain(
  "tppt",
  _flaxBinding888,
  _Vector4_tppt,
);
const _flaxBinding2388 = FlaxGetter.plain(
  "tppp",
  _flaxBinding888,
  _Vector4_tppp,
);
const _flaxBinding2389 = FlaxGetter.plain(
  "tppq",
  _flaxBinding888,
  _Vector4_tppq,
);
const _flaxBinding2390 = FlaxGetter.plain(
  "tpqs",
  _flaxBinding888,
  _Vector4_tpqs,
);
const _flaxBinding2391 = FlaxGetter.plain(
  "tpqt",
  _flaxBinding888,
  _Vector4_tpqt,
);
const _flaxBinding2392 = FlaxGetter.plain(
  "tpqp",
  _flaxBinding888,
  _Vector4_tpqp,
);
const _flaxBinding2393 = FlaxGetter.plain(
  "tpqq",
  _flaxBinding888,
  _Vector4_tpqq,
);
const _flaxBinding2394 = FlaxGetter.plain(
  "tqss",
  _flaxBinding888,
  _Vector4_tqss,
);
const _flaxBinding2395 = FlaxGetter.plain(
  "tqst",
  _flaxBinding888,
  _Vector4_tqst,
);
const _flaxBinding2396 = FlaxGetter.plain(
  "tqsp",
  _flaxBinding888,
  _Vector4_tqsp,
);
const _flaxBinding2397 = FlaxGetter.plain(
  "tqsq",
  _flaxBinding888,
  _Vector4_tqsq,
);
const _flaxBinding2398 = FlaxGetter.plain(
  "tqts",
  _flaxBinding888,
  _Vector4_tqts,
);
const _flaxBinding2399 = FlaxGetter.plain(
  "tqtt",
  _flaxBinding888,
  _Vector4_tqtt,
);
const _flaxBinding2400 = FlaxGetter.plain(
  "tqtp",
  _flaxBinding888,
  _Vector4_tqtp,
);
const _flaxBinding2401 = FlaxGetter.plain(
  "tqtq",
  _flaxBinding888,
  _Vector4_tqtq,
);
const _flaxBinding2402 = FlaxGetter.plain(
  "tqps",
  _flaxBinding888,
  _Vector4_tqps,
);
const _flaxBinding2403 = FlaxGetter.plain(
  "tqpt",
  _flaxBinding888,
  _Vector4_tqpt,
);
const _flaxBinding2404 = FlaxGetter.plain(
  "tqpp",
  _flaxBinding888,
  _Vector4_tqpp,
);
const _flaxBinding2405 = FlaxGetter.plain(
  "tqpq",
  _flaxBinding888,
  _Vector4_tqpq,
);
const _flaxBinding2406 = FlaxGetter.plain(
  "tqqs",
  _flaxBinding888,
  _Vector4_tqqs,
);
const _flaxBinding2407 = FlaxGetter.plain(
  "tqqt",
  _flaxBinding888,
  _Vector4_tqqt,
);
const _flaxBinding2408 = FlaxGetter.plain(
  "tqqp",
  _flaxBinding888,
  _Vector4_tqqp,
);
const _flaxBinding2409 = FlaxGetter.plain(
  "tqqq",
  _flaxBinding888,
  _Vector4_tqqq,
);
const _flaxBinding2410 = FlaxGetter.plain(
  "psss",
  _flaxBinding888,
  _Vector4_psss,
);
const _flaxBinding2411 = FlaxGetter.plain(
  "psst",
  _flaxBinding888,
  _Vector4_psst,
);
const _flaxBinding2412 = FlaxGetter.plain(
  "pssp",
  _flaxBinding888,
  _Vector4_pssp,
);
const _flaxBinding2413 = FlaxGetter.plain(
  "pssq",
  _flaxBinding888,
  _Vector4_pssq,
);
const _flaxBinding2414 = FlaxGetter.plain(
  "psts",
  _flaxBinding888,
  _Vector4_psts,
);
const _flaxBinding2415 = FlaxGetter.plain(
  "pstt",
  _flaxBinding888,
  _Vector4_pstt,
);
const _flaxBinding2416 = FlaxGetter.plain(
  "pstp",
  _flaxBinding888,
  _Vector4_pstp,
);
const _flaxBinding2417 = FlaxGetter.plain(
  "pstq",
  _flaxBinding888,
  _Vector4_pstq,
);
const _flaxBinding2418 = FlaxGetter.plain(
  "psps",
  _flaxBinding888,
  _Vector4_psps,
);
const _flaxBinding2419 = FlaxGetter.plain(
  "pspt",
  _flaxBinding888,
  _Vector4_pspt,
);
const _flaxBinding2420 = FlaxGetter.plain(
  "pspp",
  _flaxBinding888,
  _Vector4_pspp,
);
const _flaxBinding2421 = FlaxGetter.plain(
  "pspq",
  _flaxBinding888,
  _Vector4_pspq,
);
const _flaxBinding2422 = FlaxGetter.plain(
  "psqs",
  _flaxBinding888,
  _Vector4_psqs,
);
const _flaxBinding2423 = FlaxGetter.plain(
  "psqt",
  _flaxBinding888,
  _Vector4_psqt,
);
const _flaxBinding2424 = FlaxGetter.plain(
  "psqp",
  _flaxBinding888,
  _Vector4_psqp,
);
const _flaxBinding2425 = FlaxGetter.plain(
  "psqq",
  _flaxBinding888,
  _Vector4_psqq,
);
const _flaxBinding2426 = FlaxGetter.plain(
  "ptss",
  _flaxBinding888,
  _Vector4_ptss,
);
const _flaxBinding2427 = FlaxGetter.plain(
  "ptst",
  _flaxBinding888,
  _Vector4_ptst,
);
const _flaxBinding2428 = FlaxGetter.plain(
  "ptsp",
  _flaxBinding888,
  _Vector4_ptsp,
);
const _flaxBinding2429 = FlaxGetter.plain(
  "ptsq",
  _flaxBinding888,
  _Vector4_ptsq,
);
const _flaxBinding2430 = FlaxGetter.plain(
  "ptts",
  _flaxBinding888,
  _Vector4_ptts,
);
const _flaxBinding2431 = FlaxGetter.plain(
  "pttt",
  _flaxBinding888,
  _Vector4_pttt,
);
const _flaxBinding2432 = FlaxGetter.plain(
  "pttp",
  _flaxBinding888,
  _Vector4_pttp,
);
const _flaxBinding2433 = FlaxGetter.plain(
  "pttq",
  _flaxBinding888,
  _Vector4_pttq,
);
const _flaxBinding2434 = FlaxGetter.plain(
  "ptps",
  _flaxBinding888,
  _Vector4_ptps,
);
const _flaxBinding2435 = FlaxGetter.plain(
  "ptpt",
  _flaxBinding888,
  _Vector4_ptpt,
);
const _flaxBinding2436 = FlaxGetter.plain(
  "ptpp",
  _flaxBinding888,
  _Vector4_ptpp,
);
const _flaxBinding2437 = FlaxGetter.plain(
  "ptpq",
  _flaxBinding888,
  _Vector4_ptpq,
);
const _flaxBinding2438 = FlaxGetter.plain(
  "ptqs",
  _flaxBinding888,
  _Vector4_ptqs,
);
const _flaxBinding2439 = FlaxGetter.plain(
  "ptqt",
  _flaxBinding888,
  _Vector4_ptqt,
);
const _flaxBinding2440 = FlaxGetter.plain(
  "ptqp",
  _flaxBinding888,
  _Vector4_ptqp,
);
const _flaxBinding2441 = FlaxGetter.plain(
  "ptqq",
  _flaxBinding888,
  _Vector4_ptqq,
);
const _flaxBinding2442 = FlaxGetter.plain(
  "ppss",
  _flaxBinding888,
  _Vector4_ppss,
);
const _flaxBinding2443 = FlaxGetter.plain(
  "ppst",
  _flaxBinding888,
  _Vector4_ppst,
);
const _flaxBinding2444 = FlaxGetter.plain(
  "ppsp",
  _flaxBinding888,
  _Vector4_ppsp,
);
const _flaxBinding2445 = FlaxGetter.plain(
  "ppsq",
  _flaxBinding888,
  _Vector4_ppsq,
);
const _flaxBinding2446 = FlaxGetter.plain(
  "ppts",
  _flaxBinding888,
  _Vector4_ppts,
);
const _flaxBinding2447 = FlaxGetter.plain(
  "pptt",
  _flaxBinding888,
  _Vector4_pptt,
);
const _flaxBinding2448 = FlaxGetter.plain(
  "pptp",
  _flaxBinding888,
  _Vector4_pptp,
);
const _flaxBinding2449 = FlaxGetter.plain(
  "pptq",
  _flaxBinding888,
  _Vector4_pptq,
);
const _flaxBinding2450 = FlaxGetter.plain(
  "ppps",
  _flaxBinding888,
  _Vector4_ppps,
);
const _flaxBinding2451 = FlaxGetter.plain(
  "pppt",
  _flaxBinding888,
  _Vector4_pppt,
);
const _flaxBinding2452 = FlaxGetter.plain(
  "pppp",
  _flaxBinding888,
  _Vector4_pppp,
);
const _flaxBinding2453 = FlaxGetter.plain(
  "pppq",
  _flaxBinding888,
  _Vector4_pppq,
);
const _flaxBinding2454 = FlaxGetter.plain(
  "ppqs",
  _flaxBinding888,
  _Vector4_ppqs,
);
const _flaxBinding2455 = FlaxGetter.plain(
  "ppqt",
  _flaxBinding888,
  _Vector4_ppqt,
);
const _flaxBinding2456 = FlaxGetter.plain(
  "ppqp",
  _flaxBinding888,
  _Vector4_ppqp,
);
const _flaxBinding2457 = FlaxGetter.plain(
  "ppqq",
  _flaxBinding888,
  _Vector4_ppqq,
);
const _flaxBinding2458 = FlaxGetter.plain(
  "pqss",
  _flaxBinding888,
  _Vector4_pqss,
);
const _flaxBinding2459 = FlaxGetter.plain(
  "pqst",
  _flaxBinding888,
  _Vector4_pqst,
);
const _flaxBinding2460 = FlaxGetter.plain(
  "pqsp",
  _flaxBinding888,
  _Vector4_pqsp,
);
const _flaxBinding2461 = FlaxGetter.plain(
  "pqsq",
  _flaxBinding888,
  _Vector4_pqsq,
);
const _flaxBinding2462 = FlaxGetter.plain(
  "pqts",
  _flaxBinding888,
  _Vector4_pqts,
);
const _flaxBinding2463 = FlaxGetter.plain(
  "pqtt",
  _flaxBinding888,
  _Vector4_pqtt,
);
const _flaxBinding2464 = FlaxGetter.plain(
  "pqtp",
  _flaxBinding888,
  _Vector4_pqtp,
);
const _flaxBinding2465 = FlaxGetter.plain(
  "pqtq",
  _flaxBinding888,
  _Vector4_pqtq,
);
const _flaxBinding2466 = FlaxGetter.plain(
  "pqps",
  _flaxBinding888,
  _Vector4_pqps,
);
const _flaxBinding2467 = FlaxGetter.plain(
  "pqpt",
  _flaxBinding888,
  _Vector4_pqpt,
);
const _flaxBinding2468 = FlaxGetter.plain(
  "pqpp",
  _flaxBinding888,
  _Vector4_pqpp,
);
const _flaxBinding2469 = FlaxGetter.plain(
  "pqpq",
  _flaxBinding888,
  _Vector4_pqpq,
);
const _flaxBinding2470 = FlaxGetter.plain(
  "pqqs",
  _flaxBinding888,
  _Vector4_pqqs,
);
const _flaxBinding2471 = FlaxGetter.plain(
  "pqqt",
  _flaxBinding888,
  _Vector4_pqqt,
);
const _flaxBinding2472 = FlaxGetter.plain(
  "pqqp",
  _flaxBinding888,
  _Vector4_pqqp,
);
const _flaxBinding2473 = FlaxGetter.plain(
  "pqqq",
  _flaxBinding888,
  _Vector4_pqqq,
);
const _flaxBinding2474 = FlaxGetter.plain(
  "qsss",
  _flaxBinding888,
  _Vector4_qsss,
);
const _flaxBinding2475 = FlaxGetter.plain(
  "qsst",
  _flaxBinding888,
  _Vector4_qsst,
);
const _flaxBinding2476 = FlaxGetter.plain(
  "qssp",
  _flaxBinding888,
  _Vector4_qssp,
);
const _flaxBinding2477 = FlaxGetter.plain(
  "qssq",
  _flaxBinding888,
  _Vector4_qssq,
);
const _flaxBinding2478 = FlaxGetter.plain(
  "qsts",
  _flaxBinding888,
  _Vector4_qsts,
);
const _flaxBinding2479 = FlaxGetter.plain(
  "qstt",
  _flaxBinding888,
  _Vector4_qstt,
);
const _flaxBinding2480 = FlaxGetter.plain(
  "qstp",
  _flaxBinding888,
  _Vector4_qstp,
);
const _flaxBinding2481 = FlaxGetter.plain(
  "qstq",
  _flaxBinding888,
  _Vector4_qstq,
);
const _flaxBinding2482 = FlaxGetter.plain(
  "qsps",
  _flaxBinding888,
  _Vector4_qsps,
);
const _flaxBinding2483 = FlaxGetter.plain(
  "qspt",
  _flaxBinding888,
  _Vector4_qspt,
);
const _flaxBinding2484 = FlaxGetter.plain(
  "qspp",
  _flaxBinding888,
  _Vector4_qspp,
);
const _flaxBinding2485 = FlaxGetter.plain(
  "qspq",
  _flaxBinding888,
  _Vector4_qspq,
);
const _flaxBinding2486 = FlaxGetter.plain(
  "qsqs",
  _flaxBinding888,
  _Vector4_qsqs,
);
const _flaxBinding2487 = FlaxGetter.plain(
  "qsqt",
  _flaxBinding888,
  _Vector4_qsqt,
);
const _flaxBinding2488 = FlaxGetter.plain(
  "qsqp",
  _flaxBinding888,
  _Vector4_qsqp,
);
const _flaxBinding2489 = FlaxGetter.plain(
  "qsqq",
  _flaxBinding888,
  _Vector4_qsqq,
);
const _flaxBinding2490 = FlaxGetter.plain(
  "qtss",
  _flaxBinding888,
  _Vector4_qtss,
);
const _flaxBinding2491 = FlaxGetter.plain(
  "qtst",
  _flaxBinding888,
  _Vector4_qtst,
);
const _flaxBinding2492 = FlaxGetter.plain(
  "qtsp",
  _flaxBinding888,
  _Vector4_qtsp,
);
const _flaxBinding2493 = FlaxGetter.plain(
  "qtsq",
  _flaxBinding888,
  _Vector4_qtsq,
);
const _flaxBinding2494 = FlaxGetter.plain(
  "qtts",
  _flaxBinding888,
  _Vector4_qtts,
);
const _flaxBinding2495 = FlaxGetter.plain(
  "qttt",
  _flaxBinding888,
  _Vector4_qttt,
);
const _flaxBinding2496 = FlaxGetter.plain(
  "qttp",
  _flaxBinding888,
  _Vector4_qttp,
);
const _flaxBinding2497 = FlaxGetter.plain(
  "qttq",
  _flaxBinding888,
  _Vector4_qttq,
);
const _flaxBinding2498 = FlaxGetter.plain(
  "qtps",
  _flaxBinding888,
  _Vector4_qtps,
);
const _flaxBinding2499 = FlaxGetter.plain(
  "qtpt",
  _flaxBinding888,
  _Vector4_qtpt,
);
const _flaxBinding2500 = FlaxGetter.plain(
  "qtpp",
  _flaxBinding888,
  _Vector4_qtpp,
);
const _flaxBinding2501 = FlaxGetter.plain(
  "qtpq",
  _flaxBinding888,
  _Vector4_qtpq,
);
const _flaxBinding2502 = FlaxGetter.plain(
  "qtqs",
  _flaxBinding888,
  _Vector4_qtqs,
);
const _flaxBinding2503 = FlaxGetter.plain(
  "qtqt",
  _flaxBinding888,
  _Vector4_qtqt,
);
const _flaxBinding2504 = FlaxGetter.plain(
  "qtqp",
  _flaxBinding888,
  _Vector4_qtqp,
);
const _flaxBinding2505 = FlaxGetter.plain(
  "qtqq",
  _flaxBinding888,
  _Vector4_qtqq,
);
const _flaxBinding2506 = FlaxGetter.plain(
  "qpss",
  _flaxBinding888,
  _Vector4_qpss,
);
const _flaxBinding2507 = FlaxGetter.plain(
  "qpst",
  _flaxBinding888,
  _Vector4_qpst,
);
const _flaxBinding2508 = FlaxGetter.plain(
  "qpsp",
  _flaxBinding888,
  _Vector4_qpsp,
);
const _flaxBinding2509 = FlaxGetter.plain(
  "qpsq",
  _flaxBinding888,
  _Vector4_qpsq,
);
const _flaxBinding2510 = FlaxGetter.plain(
  "qpts",
  _flaxBinding888,
  _Vector4_qpts,
);
const _flaxBinding2511 = FlaxGetter.plain(
  "qptt",
  _flaxBinding888,
  _Vector4_qptt,
);
const _flaxBinding2512 = FlaxGetter.plain(
  "qptp",
  _flaxBinding888,
  _Vector4_qptp,
);
const _flaxBinding2513 = FlaxGetter.plain(
  "qptq",
  _flaxBinding888,
  _Vector4_qptq,
);
const _flaxBinding2514 = FlaxGetter.plain(
  "qpps",
  _flaxBinding888,
  _Vector4_qpps,
);
const _flaxBinding2515 = FlaxGetter.plain(
  "qppt",
  _flaxBinding888,
  _Vector4_qppt,
);
const _flaxBinding2516 = FlaxGetter.plain(
  "qppp",
  _flaxBinding888,
  _Vector4_qppp,
);
const _flaxBinding2517 = FlaxGetter.plain(
  "qppq",
  _flaxBinding888,
  _Vector4_qppq,
);
const _flaxBinding2518 = FlaxGetter.plain(
  "qpqs",
  _flaxBinding888,
  _Vector4_qpqs,
);
const _flaxBinding2519 = FlaxGetter.plain(
  "qpqt",
  _flaxBinding888,
  _Vector4_qpqt,
);
const _flaxBinding2520 = FlaxGetter.plain(
  "qpqp",
  _flaxBinding888,
  _Vector4_qpqp,
);
const _flaxBinding2521 = FlaxGetter.plain(
  "qpqq",
  _flaxBinding888,
  _Vector4_qpqq,
);
const _flaxBinding2522 = FlaxGetter.plain(
  "qqss",
  _flaxBinding888,
  _Vector4_qqss,
);
const _flaxBinding2523 = FlaxGetter.plain(
  "qqst",
  _flaxBinding888,
  _Vector4_qqst,
);
const _flaxBinding2524 = FlaxGetter.plain(
  "qqsp",
  _flaxBinding888,
  _Vector4_qqsp,
);
const _flaxBinding2525 = FlaxGetter.plain(
  "qqsq",
  _flaxBinding888,
  _Vector4_qqsq,
);
const _flaxBinding2526 = FlaxGetter.plain(
  "qqts",
  _flaxBinding888,
  _Vector4_qqts,
);
const _flaxBinding2527 = FlaxGetter.plain(
  "qqtt",
  _flaxBinding888,
  _Vector4_qqtt,
);
const _flaxBinding2528 = FlaxGetter.plain(
  "qqtp",
  _flaxBinding888,
  _Vector4_qqtp,
);
const _flaxBinding2529 = FlaxGetter.plain(
  "qqtq",
  _flaxBinding888,
  _Vector4_qqtq,
);
const _flaxBinding2530 = FlaxGetter.plain(
  "qqps",
  _flaxBinding888,
  _Vector4_qqps,
);
const _flaxBinding2531 = FlaxGetter.plain(
  "qqpt",
  _flaxBinding888,
  _Vector4_qqpt,
);
const _flaxBinding2532 = FlaxGetter.plain(
  "qqpp",
  _flaxBinding888,
  _Vector4_qqpp,
);
const _flaxBinding2533 = FlaxGetter.plain(
  "qqpq",
  _flaxBinding888,
  _Vector4_qqpq,
);
const _flaxBinding2534 = FlaxGetter.plain(
  "qqqs",
  _flaxBinding888,
  _Vector4_qqqs,
);
const _flaxBinding2535 = FlaxGetter.plain(
  "qqqt",
  _flaxBinding888,
  _Vector4_qqqt,
);
const _flaxBinding2536 = FlaxGetter.plain(
  "qqqp",
  _flaxBinding888,
  _Vector4_qqqp,
);
const _flaxBinding2537 = FlaxGetter.plain(
  "qqqq",
  _flaxBinding888,
  _Vector4_qqqq,
);
const _flaxBinding2538 = FlaxSetter(
  "length",
  flaxDoubleType,
  _Vector4_set_length,
);
const _flaxBinding2539 = FlaxSetter("xy", _flaxBinding426, _Vector4_set_xy);
const _flaxBinding2540 = FlaxSetter("xz", _flaxBinding426, _Vector4_set_xz);
const _flaxBinding2541 = FlaxSetter("xw", _flaxBinding426, _Vector4_set_xw);
const _flaxBinding2542 = FlaxSetter("yx", _flaxBinding426, _Vector4_set_yx);
const _flaxBinding2543 = FlaxSetter("yz", _flaxBinding426, _Vector4_set_yz);
const _flaxBinding2544 = FlaxSetter("yw", _flaxBinding426, _Vector4_set_yw);
const _flaxBinding2545 = FlaxSetter("zx", _flaxBinding426, _Vector4_set_zx);
const _flaxBinding2546 = FlaxSetter("zy", _flaxBinding426, _Vector4_set_zy);
const _flaxBinding2547 = FlaxSetter("zw", _flaxBinding426, _Vector4_set_zw);
const _flaxBinding2548 = FlaxSetter("wx", _flaxBinding426, _Vector4_set_wx);
const _flaxBinding2549 = FlaxSetter("wy", _flaxBinding426, _Vector4_set_wy);
const _flaxBinding2550 = FlaxSetter("wz", _flaxBinding426, _Vector4_set_wz);
const _flaxBinding2551 = FlaxSetter("xyz", _flaxBinding517, _Vector4_set_xyz);
const _flaxBinding2552 = FlaxSetter("xyw", _flaxBinding517, _Vector4_set_xyw);
const _flaxBinding2553 = FlaxSetter("xzy", _flaxBinding517, _Vector4_set_xzy);
const _flaxBinding2554 = FlaxSetter("xzw", _flaxBinding517, _Vector4_set_xzw);
const _flaxBinding2555 = FlaxSetter("xwy", _flaxBinding517, _Vector4_set_xwy);
const _flaxBinding2556 = FlaxSetter("xwz", _flaxBinding517, _Vector4_set_xwz);
const _flaxBinding2557 = FlaxSetter("yxz", _flaxBinding517, _Vector4_set_yxz);
const _flaxBinding2558 = FlaxSetter("yxw", _flaxBinding517, _Vector4_set_yxw);
const _flaxBinding2559 = FlaxSetter("yzx", _flaxBinding517, _Vector4_set_yzx);
const _flaxBinding2560 = FlaxSetter("yzw", _flaxBinding517, _Vector4_set_yzw);
const _flaxBinding2561 = FlaxSetter("ywx", _flaxBinding517, _Vector4_set_ywx);
const _flaxBinding2562 = FlaxSetter("ywz", _flaxBinding517, _Vector4_set_ywz);
const _flaxBinding2563 = FlaxSetter("zxy", _flaxBinding517, _Vector4_set_zxy);
const _flaxBinding2564 = FlaxSetter("zxw", _flaxBinding517, _Vector4_set_zxw);
const _flaxBinding2565 = FlaxSetter("zyx", _flaxBinding517, _Vector4_set_zyx);
const _flaxBinding2566 = FlaxSetter("zyw", _flaxBinding517, _Vector4_set_zyw);
const _flaxBinding2567 = FlaxSetter("zwx", _flaxBinding517, _Vector4_set_zwx);
const _flaxBinding2568 = FlaxSetter("zwy", _flaxBinding517, _Vector4_set_zwy);
const _flaxBinding2569 = FlaxSetter("wxy", _flaxBinding517, _Vector4_set_wxy);
const _flaxBinding2570 = FlaxSetter("wxz", _flaxBinding517, _Vector4_set_wxz);
const _flaxBinding2571 = FlaxSetter("wyx", _flaxBinding517, _Vector4_set_wyx);
const _flaxBinding2572 = FlaxSetter("wyz", _flaxBinding517, _Vector4_set_wyz);
const _flaxBinding2573 = FlaxSetter("wzx", _flaxBinding517, _Vector4_set_wzx);
const _flaxBinding2574 = FlaxSetter("wzy", _flaxBinding517, _Vector4_set_wzy);
const _flaxBinding2575 = FlaxSetter("xyzw", _flaxBinding888, _Vector4_set_xyzw);
const _flaxBinding2576 = FlaxSetter("xywz", _flaxBinding888, _Vector4_set_xywz);
const _flaxBinding2577 = FlaxSetter("xzyw", _flaxBinding888, _Vector4_set_xzyw);
const _flaxBinding2578 = FlaxSetter("xzwy", _flaxBinding888, _Vector4_set_xzwy);
const _flaxBinding2579 = FlaxSetter("xwyz", _flaxBinding888, _Vector4_set_xwyz);
const _flaxBinding2580 = FlaxSetter("xwzy", _flaxBinding888, _Vector4_set_xwzy);
const _flaxBinding2581 = FlaxSetter("yxzw", _flaxBinding888, _Vector4_set_yxzw);
const _flaxBinding2582 = FlaxSetter("yxwz", _flaxBinding888, _Vector4_set_yxwz);
const _flaxBinding2583 = FlaxSetter("yzxw", _flaxBinding888, _Vector4_set_yzxw);
const _flaxBinding2584 = FlaxSetter("yzwx", _flaxBinding888, _Vector4_set_yzwx);
const _flaxBinding2585 = FlaxSetter("ywxz", _flaxBinding888, _Vector4_set_ywxz);
const _flaxBinding2586 = FlaxSetter("ywzx", _flaxBinding888, _Vector4_set_ywzx);
const _flaxBinding2587 = FlaxSetter("zxyw", _flaxBinding888, _Vector4_set_zxyw);
const _flaxBinding2588 = FlaxSetter("zxwy", _flaxBinding888, _Vector4_set_zxwy);
const _flaxBinding2589 = FlaxSetter("zyxw", _flaxBinding888, _Vector4_set_zyxw);
const _flaxBinding2590 = FlaxSetter("zywx", _flaxBinding888, _Vector4_set_zywx);
const _flaxBinding2591 = FlaxSetter("zwxy", _flaxBinding888, _Vector4_set_zwxy);
const _flaxBinding2592 = FlaxSetter("zwyx", _flaxBinding888, _Vector4_set_zwyx);
const _flaxBinding2593 = FlaxSetter("wxyz", _flaxBinding888, _Vector4_set_wxyz);
const _flaxBinding2594 = FlaxSetter("wxzy", _flaxBinding888, _Vector4_set_wxzy);
const _flaxBinding2595 = FlaxSetter("wyxz", _flaxBinding888, _Vector4_set_wyxz);
const _flaxBinding2596 = FlaxSetter("wyzx", _flaxBinding888, _Vector4_set_wyzx);
const _flaxBinding2597 = FlaxSetter("wzxy", _flaxBinding888, _Vector4_set_wzxy);
const _flaxBinding2598 = FlaxSetter("wzyx", _flaxBinding888, _Vector4_set_wzyx);
const _flaxBinding2599 = FlaxSetter("r", flaxDoubleType, _Vector4_set_r);
const _flaxBinding2600 = FlaxSetter("g", flaxDoubleType, _Vector4_set_g);
const _flaxBinding2601 = FlaxSetter("b", flaxDoubleType, _Vector4_set_b);
const _flaxBinding2602 = FlaxSetter("a", flaxDoubleType, _Vector4_set_a);
const _flaxBinding2603 = FlaxSetter("s", flaxDoubleType, _Vector4_set_s);
const _flaxBinding2604 = FlaxSetter("t", flaxDoubleType, _Vector4_set_t);
const _flaxBinding2605 = FlaxSetter("p", flaxDoubleType, _Vector4_set_p);
const _flaxBinding2606 = FlaxSetter("q", flaxDoubleType, _Vector4_set_q);
const _flaxBinding2607 = FlaxSetter("x", flaxDoubleType, _Vector4_set_x);
const _flaxBinding2608 = FlaxSetter("y", flaxDoubleType, _Vector4_set_y);
const _flaxBinding2609 = FlaxSetter("z", flaxDoubleType, _Vector4_set_z);
const _flaxBinding2610 = FlaxSetter("w", flaxDoubleType, _Vector4_set_w);
const _flaxBinding2611 = FlaxSetter("rg", _flaxBinding426, _Vector4_set_rg);
const _flaxBinding2612 = FlaxSetter("rb", _flaxBinding426, _Vector4_set_rb);
const _flaxBinding2613 = FlaxSetter("ra", _flaxBinding426, _Vector4_set_ra);
const _flaxBinding2614 = FlaxSetter("gr", _flaxBinding426, _Vector4_set_gr);
const _flaxBinding2615 = FlaxSetter("gb", _flaxBinding426, _Vector4_set_gb);
const _flaxBinding2616 = FlaxSetter("ga", _flaxBinding426, _Vector4_set_ga);
const _flaxBinding2617 = FlaxSetter("br", _flaxBinding426, _Vector4_set_br);
const _flaxBinding2618 = FlaxSetter("bg", _flaxBinding426, _Vector4_set_bg);
const _flaxBinding2619 = FlaxSetter("ba", _flaxBinding426, _Vector4_set_ba);
const _flaxBinding2620 = FlaxSetter("ar", _flaxBinding426, _Vector4_set_ar);
const _flaxBinding2621 = FlaxSetter("ag", _flaxBinding426, _Vector4_set_ag);
const _flaxBinding2622 = FlaxSetter("ab", _flaxBinding426, _Vector4_set_ab);
const _flaxBinding2623 = FlaxSetter("rgb", _flaxBinding517, _Vector4_set_rgb);
const _flaxBinding2624 = FlaxSetter("rga", _flaxBinding517, _Vector4_set_rga);
const _flaxBinding2625 = FlaxSetter("rbg", _flaxBinding517, _Vector4_set_rbg);
const _flaxBinding2626 = FlaxSetter("rba", _flaxBinding517, _Vector4_set_rba);
const _flaxBinding2627 = FlaxSetter("rag", _flaxBinding517, _Vector4_set_rag);
const _flaxBinding2628 = FlaxSetter("rab", _flaxBinding517, _Vector4_set_rab);
const _flaxBinding2629 = FlaxSetter("grb", _flaxBinding517, _Vector4_set_grb);
const _flaxBinding2630 = FlaxSetter("gra", _flaxBinding517, _Vector4_set_gra);
const _flaxBinding2631 = FlaxSetter("gbr", _flaxBinding517, _Vector4_set_gbr);
const _flaxBinding2632 = FlaxSetter("gba", _flaxBinding517, _Vector4_set_gba);
const _flaxBinding2633 = FlaxSetter("gar", _flaxBinding517, _Vector4_set_gar);
const _flaxBinding2634 = FlaxSetter("gab", _flaxBinding517, _Vector4_set_gab);
const _flaxBinding2635 = FlaxSetter("brg", _flaxBinding517, _Vector4_set_brg);
const _flaxBinding2636 = FlaxSetter("bra", _flaxBinding517, _Vector4_set_bra);
const _flaxBinding2637 = FlaxSetter("bgr", _flaxBinding517, _Vector4_set_bgr);
const _flaxBinding2638 = FlaxSetter("bga", _flaxBinding517, _Vector4_set_bga);
const _flaxBinding2639 = FlaxSetter("bar", _flaxBinding517, _Vector4_set_bar);
const _flaxBinding2640 = FlaxSetter("bag", _flaxBinding517, _Vector4_set_bag);
const _flaxBinding2641 = FlaxSetter("arg", _flaxBinding517, _Vector4_set_arg);
const _flaxBinding2642 = FlaxSetter("arb", _flaxBinding517, _Vector4_set_arb);
const _flaxBinding2643 = FlaxSetter("agr", _flaxBinding517, _Vector4_set_agr);
const _flaxBinding2644 = FlaxSetter("agb", _flaxBinding517, _Vector4_set_agb);
const _flaxBinding2645 = FlaxSetter("abr", _flaxBinding517, _Vector4_set_abr);
const _flaxBinding2646 = FlaxSetter("abg", _flaxBinding517, _Vector4_set_abg);
const _flaxBinding2647 = FlaxSetter("rgba", _flaxBinding888, _Vector4_set_rgba);
const _flaxBinding2648 = FlaxSetter("rgab", _flaxBinding888, _Vector4_set_rgab);
const _flaxBinding2649 = FlaxSetter("rbga", _flaxBinding888, _Vector4_set_rbga);
const _flaxBinding2650 = FlaxSetter("rbag", _flaxBinding888, _Vector4_set_rbag);
const _flaxBinding2651 = FlaxSetter("ragb", _flaxBinding888, _Vector4_set_ragb);
const _flaxBinding2652 = FlaxSetter("rabg", _flaxBinding888, _Vector4_set_rabg);
const _flaxBinding2653 = FlaxSetter("grba", _flaxBinding888, _Vector4_set_grba);
const _flaxBinding2654 = FlaxSetter("grab", _flaxBinding888, _Vector4_set_grab);
const _flaxBinding2655 = FlaxSetter("gbra", _flaxBinding888, _Vector4_set_gbra);
const _flaxBinding2656 = FlaxSetter("gbar", _flaxBinding888, _Vector4_set_gbar);
const _flaxBinding2657 = FlaxSetter("garb", _flaxBinding888, _Vector4_set_garb);
const _flaxBinding2658 = FlaxSetter("gabr", _flaxBinding888, _Vector4_set_gabr);
const _flaxBinding2659 = FlaxSetter("brga", _flaxBinding888, _Vector4_set_brga);
const _flaxBinding2660 = FlaxSetter("brag", _flaxBinding888, _Vector4_set_brag);
const _flaxBinding2661 = FlaxSetter("bgra", _flaxBinding888, _Vector4_set_bgra);
const _flaxBinding2662 = FlaxSetter("bgar", _flaxBinding888, _Vector4_set_bgar);
const _flaxBinding2663 = FlaxSetter("barg", _flaxBinding888, _Vector4_set_barg);
const _flaxBinding2664 = FlaxSetter("bagr", _flaxBinding888, _Vector4_set_bagr);
const _flaxBinding2665 = FlaxSetter("argb", _flaxBinding888, _Vector4_set_argb);
const _flaxBinding2666 = FlaxSetter("arbg", _flaxBinding888, _Vector4_set_arbg);
const _flaxBinding2667 = FlaxSetter("agrb", _flaxBinding888, _Vector4_set_agrb);
const _flaxBinding2668 = FlaxSetter("agbr", _flaxBinding888, _Vector4_set_agbr);
const _flaxBinding2669 = FlaxSetter("abrg", _flaxBinding888, _Vector4_set_abrg);
const _flaxBinding2670 = FlaxSetter("abgr", _flaxBinding888, _Vector4_set_abgr);
const _flaxBinding2671 = FlaxSetter("st", _flaxBinding426, _Vector4_set_st);
const _flaxBinding2672 = FlaxSetter("sp", _flaxBinding426, _Vector4_set_sp);
const _flaxBinding2673 = FlaxSetter("sq", _flaxBinding426, _Vector4_set_sq);
const _flaxBinding2674 = FlaxSetter("ts", _flaxBinding426, _Vector4_set_ts);
const _flaxBinding2675 = FlaxSetter("tp", _flaxBinding426, _Vector4_set_tp);
const _flaxBinding2676 = FlaxSetter("tq", _flaxBinding426, _Vector4_set_tq);
const _flaxBinding2677 = FlaxSetter("ps", _flaxBinding426, _Vector4_set_ps);
const _flaxBinding2678 = FlaxSetter("pt", _flaxBinding426, _Vector4_set_pt);
const _flaxBinding2679 = FlaxSetter("pq", _flaxBinding426, _Vector4_set_pq);
const _flaxBinding2680 = FlaxSetter("qs", _flaxBinding426, _Vector4_set_qs);
const _flaxBinding2681 = FlaxSetter("qt", _flaxBinding426, _Vector4_set_qt);
const _flaxBinding2682 = FlaxSetter("qp", _flaxBinding426, _Vector4_set_qp);
const _flaxBinding2683 = FlaxSetter("stp", _flaxBinding517, _Vector4_set_stp);
const _flaxBinding2684 = FlaxSetter("stq", _flaxBinding517, _Vector4_set_stq);
const _flaxBinding2685 = FlaxSetter("spt", _flaxBinding517, _Vector4_set_spt);
const _flaxBinding2686 = FlaxSetter("spq", _flaxBinding517, _Vector4_set_spq);
const _flaxBinding2687 = FlaxSetter("sqt", _flaxBinding517, _Vector4_set_sqt);
const _flaxBinding2688 = FlaxSetter("sqp", _flaxBinding517, _Vector4_set_sqp);
const _flaxBinding2689 = FlaxSetter("tsp", _flaxBinding517, _Vector4_set_tsp);
const _flaxBinding2690 = FlaxSetter("tsq", _flaxBinding517, _Vector4_set_tsq);
const _flaxBinding2691 = FlaxSetter("tps", _flaxBinding517, _Vector4_set_tps);
const _flaxBinding2692 = FlaxSetter("tpq", _flaxBinding517, _Vector4_set_tpq);
const _flaxBinding2693 = FlaxSetter("tqs", _flaxBinding517, _Vector4_set_tqs);
const _flaxBinding2694 = FlaxSetter("tqp", _flaxBinding517, _Vector4_set_tqp);
const _flaxBinding2695 = FlaxSetter("pst", _flaxBinding517, _Vector4_set_pst);
const _flaxBinding2696 = FlaxSetter("psq", _flaxBinding517, _Vector4_set_psq);
const _flaxBinding2697 = FlaxSetter("pts", _flaxBinding517, _Vector4_set_pts);
const _flaxBinding2698 = FlaxSetter("ptq", _flaxBinding517, _Vector4_set_ptq);
const _flaxBinding2699 = FlaxSetter("pqs", _flaxBinding517, _Vector4_set_pqs);
const _flaxBinding2700 = FlaxSetter("pqt", _flaxBinding517, _Vector4_set_pqt);
const _flaxBinding2701 = FlaxSetter("qst", _flaxBinding517, _Vector4_set_qst);
const _flaxBinding2702 = FlaxSetter("qsp", _flaxBinding517, _Vector4_set_qsp);
const _flaxBinding2703 = FlaxSetter("qts", _flaxBinding517, _Vector4_set_qts);
const _flaxBinding2704 = FlaxSetter("qtp", _flaxBinding517, _Vector4_set_qtp);
const _flaxBinding2705 = FlaxSetter("qps", _flaxBinding517, _Vector4_set_qps);
const _flaxBinding2706 = FlaxSetter("qpt", _flaxBinding517, _Vector4_set_qpt);
const _flaxBinding2707 = FlaxSetter("stpq", _flaxBinding888, _Vector4_set_stpq);
const _flaxBinding2708 = FlaxSetter("stqp", _flaxBinding888, _Vector4_set_stqp);
const _flaxBinding2709 = FlaxSetter("sptq", _flaxBinding888, _Vector4_set_sptq);
const _flaxBinding2710 = FlaxSetter("spqt", _flaxBinding888, _Vector4_set_spqt);
const _flaxBinding2711 = FlaxSetter("sqtp", _flaxBinding888, _Vector4_set_sqtp);
const _flaxBinding2712 = FlaxSetter("sqpt", _flaxBinding888, _Vector4_set_sqpt);
const _flaxBinding2713 = FlaxSetter("tspq", _flaxBinding888, _Vector4_set_tspq);
const _flaxBinding2714 = FlaxSetter("tsqp", _flaxBinding888, _Vector4_set_tsqp);
const _flaxBinding2715 = FlaxSetter("tpsq", _flaxBinding888, _Vector4_set_tpsq);
const _flaxBinding2716 = FlaxSetter("tpqs", _flaxBinding888, _Vector4_set_tpqs);
const _flaxBinding2717 = FlaxSetter("tqsp", _flaxBinding888, _Vector4_set_tqsp);
const _flaxBinding2718 = FlaxSetter("tqps", _flaxBinding888, _Vector4_set_tqps);
const _flaxBinding2719 = FlaxSetter("pstq", _flaxBinding888, _Vector4_set_pstq);
const _flaxBinding2720 = FlaxSetter("psqt", _flaxBinding888, _Vector4_set_psqt);
const _flaxBinding2721 = FlaxSetter("ptsq", _flaxBinding888, _Vector4_set_ptsq);
const _flaxBinding2722 = FlaxSetter("ptqs", _flaxBinding888, _Vector4_set_ptqs);
const _flaxBinding2723 = FlaxSetter("pqst", _flaxBinding888, _Vector4_set_pqst);
const _flaxBinding2724 = FlaxSetter("pqts", _flaxBinding888, _Vector4_set_pqts);
const _flaxBinding2725 = FlaxSetter("qstp", _flaxBinding888, _Vector4_set_qstp);
const _flaxBinding2726 = FlaxSetter("qspt", _flaxBinding888, _Vector4_set_qspt);
const _flaxBinding2727 = FlaxSetter("qtsp", _flaxBinding888, _Vector4_set_qtsp);
const _flaxBinding2728 = FlaxSetter("qtps", _flaxBinding888, _Vector4_set_qtps);
const _flaxBinding2729 = FlaxSetter("qpst", _flaxBinding888, _Vector4_set_qpst);
const _flaxBinding2730 = FlaxSetter("qpts", _flaxBinding888, _Vector4_set_qpts);
const _flaxBinding2731 = FlaxInstanceMethod.plain(
  _flaxBinding638,
  flaxVoidType,
  _Vector4_setValues,
);
const _flaxBinding2732 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxVoidType,
  _Vector4_setZero,
);
const _flaxBinding2733 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxVoidType,
  _Vector4_setIdentity,
);
const _flaxBinding2734 = <FlaxParameter>[
  FlaxParameter.required("other", _flaxBinding888),
];
const _flaxBinding2735 = FlaxInstanceMethod.plain(
  _flaxBinding2734,
  flaxVoidType,
  _Vector4_setFrom,
);
const _flaxBinding2736 = FlaxInstanceMethod.plain(
  _flaxBinding445,
  flaxVoidType,
  _Vector4_splat,
);
const _flaxBinding2737 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxStringType,
  _Vector4_toString,
);
const _flaxBinding2738 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxDoubleType,
  _Vector4_normalize,
);
const _flaxBinding2739 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxDoubleType,
  _Vector4_normalizeLength,
);
const _flaxBinding2740 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding888,
  _Vector4_normalized,
);
const _flaxBinding2741 = <FlaxParameter>[
  FlaxParameter.required("out", _flaxBinding888),
];
const _flaxBinding2742 = FlaxInstanceMethod.plain(
  _flaxBinding2741,
  _flaxBinding888,
  _Vector4_normalizeInto,
);
const _flaxBinding2743 = <FlaxParameter>[
  FlaxParameter.required("arg", _flaxBinding888),
];
const _flaxBinding2744 = FlaxInstanceMethod.plain(
  _flaxBinding2743,
  flaxDoubleType,
  _Vector4_distanceTo,
);
const _flaxBinding2745 = FlaxInstanceMethod.plain(
  _flaxBinding2743,
  flaxDoubleType,
  _Vector4_distanceToSquared,
);
const _flaxBinding2746 = FlaxInstanceMethod.plain(
  _flaxBinding2734,
  flaxDoubleType,
  _Vector4_dot,
);
const _flaxBinding2747 = FlaxInstanceMethod.plain(
  _flaxBinding569,
  flaxVoidType,
  _Vector4_applyMatrix4,
);
const _flaxBinding2748 = <FlaxParameter>[
  FlaxParameter.required("correct", _flaxBinding888),
];
const _flaxBinding2749 = FlaxInstanceMethod.plain(
  _flaxBinding2748,
  flaxDoubleType,
  _Vector4_relativeError,
);
const _flaxBinding2750 = FlaxInstanceMethod.plain(
  _flaxBinding2748,
  flaxDoubleType,
  _Vector4_absoluteError,
);
const _flaxBinding2751 = FlaxInstanceMethod.plain(
  _flaxBinding2743,
  flaxVoidType,
  _Vector4_add,
);
const _flaxBinding2752 = <FlaxParameter>[
  FlaxParameter.required("arg", _flaxBinding888),
  FlaxParameter.required("factor", flaxDoubleType),
];
const _flaxBinding2753 = FlaxInstanceMethod.plain(
  _flaxBinding2752,
  flaxVoidType,
  _Vector4_addScaled,
);
const _flaxBinding2754 = FlaxInstanceMethod.plain(
  _flaxBinding2743,
  flaxVoidType,
  _Vector4_sub,
);
const _flaxBinding2755 = FlaxInstanceMethod.plain(
  _flaxBinding2743,
  flaxVoidType,
  _Vector4_multiply,
);
const _flaxBinding2756 = FlaxInstanceMethod.plain(
  _flaxBinding2743,
  flaxVoidType,
  _Vector4_div,
);
const _flaxBinding2757 = FlaxInstanceMethod.plain(
  _flaxBinding445,
  flaxVoidType,
  _Vector4_scale,
);
const _flaxBinding2758 = FlaxInstanceMethod.plain(
  _flaxBinding445,
  _flaxBinding888,
  _Vector4_scaled,
);
const _flaxBinding2759 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxVoidType,
  _Vector4_negate,
);
const _flaxBinding2760 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxVoidType,
  _Vector4_absolute,
);
const _flaxBinding2761 = <FlaxParameter>[
  FlaxParameter.required("min", _flaxBinding888),
  FlaxParameter.required("max", _flaxBinding888),
];
const _flaxBinding2762 = FlaxInstanceMethod.plain(
  _flaxBinding2761,
  flaxVoidType,
  _Vector4_clamp,
);
const _flaxBinding2763 = FlaxInstanceMethod.plain(
  _flaxBinding1019,
  flaxVoidType,
  _Vector4_clampScalar,
);
const _flaxBinding2764 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxVoidType,
  _Vector4_floor,
);
const _flaxBinding2765 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxVoidType,
  _Vector4_ceil,
);
const _flaxBinding2766 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxVoidType,
  _Vector4_round,
);
const _flaxBinding2767 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  flaxVoidType,
  _Vector4_roundToZero,
);
const _flaxBinding2768 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding888,
  _Vector4_clone,
);
const _flaxBinding2769 = FlaxInstanceMethod.plain(
  _flaxBinding2743,
  _flaxBinding888,
  _Vector4_copyInto,
);
const _flaxBinding2770 = FlaxInstanceMethod.plain(
  _flaxBinding501,
  flaxVoidType,
  _Vector4_copyIntoArray,
);
const _flaxBinding2771 = FlaxInstanceMethod.plain(
  _flaxBinding501,
  flaxVoidType,
  _Vector4_copyFromArray,
);
const _flaxBinding2772 = FlaxInstanceMethod.plain(
  _flaxBinding503,
  flaxDoubleType,
  _Vector4_operatorGetIndex,
);
const _flaxBinding2773 = FlaxInstanceMethod.plain(
  _flaxBinding505,
  flaxVoidType,
  _Vector4_operatorSetIndex,
);
const _flaxBinding2774 = FlaxInstanceMethod.plain(
  _flaxBinding2734,
  _flaxBinding888,
  _Vector4_operatorAdd,
);
const _flaxBinding2775 = FlaxInstanceMethod.plain(
  _flaxBinding2734,
  _flaxBinding888,
  _Vector4_operatorSubtract,
);
const _flaxBinding2776 = FlaxInstanceMethod.plain(
  _flaxBinding479,
  _flaxBinding888,
  _Vector4_operatorMultiply,
);
const _flaxBinding2777 = FlaxInstanceMethod.plain(
  _flaxBinding479,
  _flaxBinding888,
  _Vector4_operatorDivide,
);
const _flaxBinding2778 = FlaxInstanceMethod.plain(
  _flaxBinding35,
  _flaxBinding888,
  _Vector4_operatorNegate,
);
const _flaxBinding2779 = <FlaxParameter>[
  FlaxParameter.required("_v4storage", _flaxBinding423),
];
const _flaxBinding2780 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:Vector4",
  [
    _flaxBinding1513,
    _flaxBinding1514,
    _flaxBinding1515,
    _flaxBinding1516,
    _flaxBinding1517,
    _flaxBinding1518,
    _flaxBinding1519,
    _flaxBinding1520,
    _flaxBinding1521,
    _flaxBinding1522,
    _flaxBinding1523,
    _flaxBinding1524,
    _flaxBinding1525,
    _flaxBinding1526,
    _flaxBinding1527,
    _flaxBinding1528,
    _flaxBinding1529,
    _flaxBinding1530,
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
  ],
  {
    "setValues": _flaxBinding2731,
    "setZero": _flaxBinding2732,
    "setIdentity": _flaxBinding2733,
    "setFrom": _flaxBinding2735,
    "splat": _flaxBinding2736,
    "toString": _flaxBinding2737,
    "normalize": _flaxBinding2738,
    "normalizeLength": _flaxBinding2739,
    "normalized": _flaxBinding2740,
    "normalizeInto": _flaxBinding2742,
    "distanceTo": _flaxBinding2744,
    "distanceToSquared": _flaxBinding2745,
    "dot": _flaxBinding2746,
    "applyMatrix4": _flaxBinding2747,
    "relativeError": _flaxBinding2749,
    "absoluteError": _flaxBinding2750,
    "add": _flaxBinding2751,
    "addScaled": _flaxBinding2753,
    "sub": _flaxBinding2754,
    "multiply": _flaxBinding2755,
    "div": _flaxBinding2756,
    "scale": _flaxBinding2757,
    "scaled": _flaxBinding2758,
    "negate": _flaxBinding2759,
    "absolute": _flaxBinding2760,
    "clamp": _flaxBinding2762,
    "clampScalar": _flaxBinding2763,
    "floor": _flaxBinding2764,
    "ceil": _flaxBinding2765,
    "round": _flaxBinding2766,
    "roundToZero": _flaxBinding2767,
    "clone": _flaxBinding2768,
    "copyInto": _flaxBinding2769,
    "copyIntoArray": _flaxBinding2770,
    "copyFromArray": _flaxBinding2771,
    "operatorGetIndex": _flaxBinding2772,
    "operatorSetIndex": _flaxBinding2773,
    "operatorAdd": _flaxBinding2774,
    "operatorSubtract": _flaxBinding2775,
    "operatorMultiply": _flaxBinding2776,
    "operatorDivide": _flaxBinding2777,
    "operatorNegate": _flaxBinding2778,
  },
  constructors: {
    "": _flaxBinding638,
    "array": _flaxBinding501,
    "zero": _flaxBinding35,
    "identity": _flaxBinding35,
    "all": _flaxBinding1037,
    "copy": _flaxBinding2734,
    "fromFloat64List": _flaxBinding2779,
    "fromBuffer": _flaxBinding684,
  },
  create: _createVector4,
  matches: _isVector4,
  setters: [
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
  ],
  supertypes: [
    "dart:core::Object",
    "package:vector_math/vector_math_64.dart::Vector",
  ],
);
const _flaxBinding2781 = FlaxGetter.plain(
  "der",
  flaxUint8ListType,
  _X509Certificate_der,
);
const _flaxBinding2782 = FlaxGetter.plain(
  "pem",
  flaxStringType,
  _X509Certificate_pem,
);
const _flaxBinding2783 = FlaxGetter.plain(
  "sha1",
  flaxUint8ListType,
  _X509Certificate_sha1,
);
const _flaxBinding2784 = FlaxGetter.plain(
  "subject",
  flaxStringType,
  _X509Certificate_subject,
);
const _flaxBinding2785 = FlaxGetter.plain(
  "issuer",
  flaxStringType,
  _X509Certificate_issuer,
);
const _flaxBinding2786 = FlaxGetter.plain(
  "startValidity",
  flaxDateTimeType,
  _X509Certificate_startValidity,
);
const _flaxBinding2787 = FlaxGetter.plain(
  "endValidity",
  flaxDateTimeType,
  _X509Certificate_endValidity,
);
const _flaxBinding2788 = FlaxObjectBinding(
  "flax.core/sdk_dependencies#type:X509Certificate",
  [
    _flaxBinding2781,
    _flaxBinding2782,
    _flaxBinding2783,
    _flaxBinding2784,
    _flaxBinding2785,
    _flaxBinding2786,
    _flaxBinding2787,
  ],
  {},
  constructors: {},
  create: _createX509Certificate,
  matches: _isX509Certificate,
  setters: [],
  supertypes: ["dart:core::Object"],
);
const _flaxBinding2789 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:Encoding",
  nullable: true,
);
const _flaxBinding2790 = FlaxTypeRef(
  "future",
  item: _flaxBinding142,
  future: FlaxFutureBinding(
    "object:flax.core/sdk_dependencies#type:FileSystemEntityType",
    _future23Adapt,
  ),
);
const _flaxBinding2791 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:Flow",
);
const _flaxBinding2792 = FlaxTypeRef(
  "map",
  nullable: true,
  item: flaxStringType,
  key: flaxStringType,
  collection: FlaxCollectionBinding(
    "map:[String:][String:]",
    _collection21Create,
    _collection21Matches,
  ),
);
const _flaxBinding2793 = FlaxTypeRef(
  "iterable",
  item: _flaxBinding351,
  collection: FlaxCollectionBinding(
    "iterable:[object:flax.core/sdk_dependencies#type:InternetAddress]",
    _collection23Create,
    _collection23Matches,
    restore: _collection23Restore,
  ),
);
const _flaxBinding2794 = FlaxTypeRef(
  "list",
  item: _flaxBinding351,
  collection: FlaxCollectionBinding(
    "list:[object:flax.core/sdk_dependencies#type:InternetAddress]",
    _collection22Create,
    _collection22Matches,
  ),
  iterable: _flaxBinding2793,
);
const _flaxBinding2795 = FlaxTypeRef(
  "future",
  item: _flaxBinding2794,
  future: FlaxFutureBinding(
    "list:[object:flax.core/sdk_dependencies#type:InternetAddress]",
    _future24Adapt,
  ),
);
const _flaxBinding2796 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:InternetAddress",
  nullable: true,
);
const _flaxBinding2797 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("line", flaxStringType)],
  flaxVoidType,
  FlaxCallbackAdapters.wrapVoid1<String>,
  id: "callback:<>(p:r:line:String:)->void:",
  invoke: FlaxCallbackAdapters.invokeVoid1<String>,
  matches: FlaxCallbackAdapters.matchesVoid1<String>,
);
const _flaxBinding2798 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding2797,
);
const _flaxBinding2799 = FlaxCallbackBinding(
  [FlaxCallbackParameter.plain("certificate", _flaxBinding173)],
  flaxBoolType,
  FlaxCallbackAdapters.wrap1<api3.X509Certificate, bool>,
  id: "callback:<>(p:r:certificate:object:flax.core/sdk_dependencies#type:X509Certificate)->bool:",
  invoke: FlaxCallbackAdapters.invoke1<api3.X509Certificate, bool>,
  matches: FlaxCallbackAdapters.matches1<api3.X509Certificate, bool>,
);
const _flaxBinding2800 = FlaxTypeRef(
  "callback",
  nullable: true,
  callback: _flaxBinding2799,
);
const _flaxBinding2801 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:SecureSocket",
);
const _flaxBinding2802 = FlaxTypeRef(
  "future",
  item: _flaxBinding2801,
  future: FlaxFutureBinding(
    "object:flax.core/sdk_dependencies#type:SecureSocket",
    _future25Adapt,
  ),
);
const _flaxBinding2803 = FlaxTypeRef(
  "list",
  nullable: true,
  item: flaxIntType,
  collection: FlaxCollectionBinding(
    "list:[int:]",
    _collection0Create,
    _collection0Matches,
  ),
  iterable: _flaxBinding1,
);
const _flaxBinding2804 = FlaxTypeRef(
  "object",
  id: "flax.core/sdk_dependencies#type:SecurityContext",
);
Object? _flaxSandbox0(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  return flaxInvokeWithDefaults(
    api8.createSandboxDirectory,
    <Object?>[
      context,
      context.requirePolicy<api8.FlaxFilePolicy>(),
      values["path"],
    ],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
}

Object? _flaxSandbox2(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  return flaxInvokeWithDefaults(
    api8.createSandboxDirectoryFromUri,
    <Object?>[
      context,
      context.requirePolicy<api8.FlaxFilePolicy>(),
      values["uri"],
    ],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
}

Object? _flaxSandbox3(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox4(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox5(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox6(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox7(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox8(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox9(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox10(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox11(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox12(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox13(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox14(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox15(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox16(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox17(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox18(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox19(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox20(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox21(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox22(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox23(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox27(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  return flaxInvokeWithDefaults(
    api8.createSandboxFile,
    <Object?>[
      context,
      context.requirePolicy<api8.FlaxFilePolicy>(),
      values["path"],
    ],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
}

Object? _flaxSandbox28(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  return flaxInvokeWithDefaults(
    api8.createSandboxFileFromUri,
    <Object?>[
      context,
      context.requirePolicy<api8.FlaxFilePolicy>(),
      values["uri"],
    ],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
}

Object? _flaxSandbox30(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox31(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox32(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox33(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox34(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox35(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox36(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox37(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox38(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox39(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox40(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox41(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox42(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox43(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox44(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox45(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox46(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox47(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox48(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox49(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox50(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox51(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox52(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox53(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox56(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox57(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox58(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox59(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox60(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox61(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox62(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox63(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox64(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox65(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox66(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox67(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox68(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox69(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox70(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox71(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox72(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  return flaxInvokeWithDefaults(
    api8.sandboxStatSync,
    <Object?>[
      context,
      context.requirePolicy<api8.FlaxFilePolicy>(),
      values["path"],
    ],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
}

Object? _flaxSandbox73(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  return flaxInvokeWithDefaults(
    api8.sandboxStat,
    <Object?>[
      context,
      context.requirePolicy<api8.FlaxFilePolicy>(),
      values["path"],
    ],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
}

Object? _flaxSandbox74(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  return flaxInvokeWithDefaults(
    api8.sandboxIdentical,
    <Object?>[
      context,
      context.requirePolicy<api8.FlaxFilePolicy>(),
      values["path1"],
      values["path2"],
    ],
    <int>[1 | 2 | 4 | 8],
    const <String>["", "", "", ""],
  );
}

Object? _flaxSandbox75(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  return flaxInvokeWithDefaults(
    api8.sandboxIdenticalSync,
    <Object?>[
      context,
      context.requirePolicy<api8.FlaxFilePolicy>(),
      values["path1"],
      values["path2"],
    ],
    <int>[1 | 2 | 4 | 8],
    const <String>["", "", "", ""],
  );
}

Object? _flaxSandbox76(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  return flaxInvokeWithDefaults(
    api8.sandboxType,
    <Object?>[
      context,
      context.requirePolicy<api8.FlaxFilePolicy>(),
      values["path"],
      values["followLinks"],
    ],
    <int>[1 | 2 | 4 | 8],
    const <String>["", "", "", "followLinks"],
  );
}

Object? _flaxSandbox77(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  return flaxInvokeWithDefaults(
    api8.sandboxTypeSync,
    <Object?>[
      context,
      context.requirePolicy<api8.FlaxFilePolicy>(),
      values["path"],
      values["followLinks"],
    ],
    <int>[1 | 2 | 4 | 8],
    const <String>["", "", "", "followLinks"],
  );
}

Object? _flaxSandbox78(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  return flaxInvokeWithDefaults(
    api8.sandboxIsLink,
    <Object?>[
      context,
      context.requirePolicy<api8.FlaxFilePolicy>(),
      values["path"],
    ],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
}

Object? _flaxSandbox79(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  return flaxInvokeWithDefaults(
    api8.sandboxIsFile,
    <Object?>[
      context,
      context.requirePolicy<api8.FlaxFilePolicy>(),
      values["path"],
    ],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
}

Object? _flaxSandbox80(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  return flaxInvokeWithDefaults(
    api8.sandboxIsDirectory,
    <Object?>[
      context,
      context.requirePolicy<api8.FlaxFilePolicy>(),
      values["path"],
    ],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
}

Object? _flaxSandbox81(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  return flaxInvokeWithDefaults(
    api8.sandboxIsLinkSync,
    <Object?>[
      context,
      context.requirePolicy<api8.FlaxFilePolicy>(),
      values["path"],
    ],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
}

Object? _flaxSandbox82(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  return flaxInvokeWithDefaults(
    api8.sandboxIsFileSync,
    <Object?>[
      context,
      context.requirePolicy<api8.FlaxFilePolicy>(),
      values["path"],
    ],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
}

Object? _flaxSandbox83(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  return flaxInvokeWithDefaults(
    api8.sandboxIsDirectorySync,
    <Object?>[
      context,
      context.requirePolicy<api8.FlaxFilePolicy>(),
      values["path"],
    ],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
}

Object? _flaxSandbox84(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox85(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox86(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox87(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox88(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox89(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox90(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox91(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox92(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox93(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox94(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox95(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox96(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox97(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox98(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox102(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox103(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox104(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox105(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox106(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox107(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox108(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox109(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox110(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox111(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox118(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox119(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox120(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox121(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox122(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.checkSandboxEntity,
    <Object?>[context, context.requirePolicy<api8.FlaxFilePolicy>(), receiver],
    <int>[1 | 2 | 4],
    const <String>["", "", ""],
  );
  return null;
}

Object? _flaxSandbox152(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.sandboxPrivateKey,
    <Object?>[
      context,
      context.requirePolicy<api8.FlaxFilePolicy>(),
      receiver,
      values["file"],
      values["password"],
    ],
    <int>[1 | 2 | 4 | 8 | 16],
    const <String>["", "", "", "", "password"],
  );
  return null;
}

Object? _flaxSandbox153(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.sandboxTrustedCertificates,
    <Object?>[
      context,
      context.requirePolicy<api8.FlaxFilePolicy>(),
      receiver,
      values["file"],
      values["password"],
    ],
    <int>[1 | 2 | 4 | 8 | 16],
    const <String>["", "", "", "", "password"],
  );
  return null;
}

Object? _flaxSandbox154(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.sandboxCertificateChain,
    <Object?>[
      context,
      context.requirePolicy<api8.FlaxFilePolicy>(),
      receiver,
      values["file"],
      values["password"],
    ],
    <int>[1 | 2 | 4 | 8 | 16],
    const <String>["", "", "", "", "password"],
  );
  return null;
}

Object? _flaxSandbox155(
  FlaxSandboxContext context,
  Object? receiver,
  Map<String, Object?> values,
) {
  flaxInvokeWithDefaults(
    api8.sandboxClientAuthorities,
    <Object?>[
      context,
      context.requirePolicy<api8.FlaxFilePolicy>(),
      receiver,
      values["file"],
      values["password"],
    ],
    <int>[1 | 2 | 4 | 8 | 16],
    const <String>["", "", "", "", "password"],
  );
  return null;
}
