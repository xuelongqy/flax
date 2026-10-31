import 'package:flax_annotations/flax_annotations.dart';

/// Standard permission metadata. A definition does not install a capability.
abstract final class FlaxPermissionDefinitions {
  static const network = FlaxPermissionDefinition(
    id: 'flax.network',
    title: 'Network',
    authorization: FlaxPermissionAuthorization.install,
  );
  static const moduleRemote = FlaxPermissionDefinition(
    id: 'flax.module.remote',
    title: 'Module remote',
    authorization: FlaxPermissionAuthorization.install,
  );
  static const wasm = FlaxPermissionDefinition(
    id: 'flax.wasm',
    title: 'Wasm',
    authorization: FlaxPermissionAuthorization.install,
  );
  static const clipboardRead = FlaxPermissionDefinition(
    id: 'flax.clipboard.read',
    title: 'Clipboard read',
    authorization: FlaxPermissionAuthorization.install,
  );
  static const clipboardWrite = FlaxPermissionDefinition(
    id: 'flax.clipboard.write',
    title: 'Clipboard write',
    authorization: FlaxPermissionAuthorization.install,
  );
  static const camera = FlaxPermissionDefinition(
    id: 'flax.camera',
    title: 'Camera',
    authorization: FlaxPermissionAuthorization.runtime,
  );
  static const microphone = FlaxPermissionDefinition(
    id: 'flax.microphone',
    title: 'Microphone',
    authorization: FlaxPermissionAuthorization.runtime,
  );
  static const speechRecognition = FlaxPermissionDefinition(
    id: 'flax.speech.recognition',
    title: 'Speech recognition',
    authorization: FlaxPermissionAuthorization.runtime,
  );
  static const location = FlaxPermissionDefinition(
    id: 'flax.location',
    title: 'Location',
    authorization: FlaxPermissionAuthorization.runtime,
  );
  static const locationBackground = FlaxPermissionDefinition(
    id: 'flax.location.background',
    title: 'Location background',
    authorization: FlaxPermissionAuthorization.runtime,
  );
  static const motion = FlaxPermissionDefinition(
    id: 'flax.motion',
    title: 'Motion',
    authorization: FlaxPermissionAuthorization.install,
  );
  static const activity = FlaxPermissionDefinition(
    id: 'flax.activity',
    title: 'Activity',
    authorization: FlaxPermissionAuthorization.runtime,
  );
  static const mediaPick = FlaxPermissionDefinition(
    id: 'flax.media.pick',
    title: 'Media pick',
    authorization: FlaxPermissionAuthorization.install,
  );
  static const photosRead = FlaxPermissionDefinition(
    id: 'flax.photos.read',
    title: 'Photos read',
    authorization: FlaxPermissionAuthorization.runtime,
  );
  static const photosAdd = FlaxPermissionDefinition(
    id: 'flax.photos.add',
    title: 'Photos add',
    authorization: FlaxPermissionAuthorization.runtime,
  );
  static const photosModify = FlaxPermissionDefinition(
    id: 'flax.photos.modify',
    title: 'Photos modify',
    authorization: FlaxPermissionAuthorization.runtime,
  );
  static const audioLibraryRead = FlaxPermissionDefinition(
    id: 'flax.audio.library.read',
    title: 'Audio library read',
    authorization: FlaxPermissionAuthorization.runtime,
  );
  static const contactsPick = FlaxPermissionDefinition(
    id: 'flax.contacts.pick',
    title: 'Contacts pick',
    authorization: FlaxPermissionAuthorization.install,
  );
  static const contactsRead = FlaxPermissionDefinition(
    id: 'flax.contacts.read',
    title: 'Contacts read',
    authorization: FlaxPermissionAuthorization.runtime,
  );
  static const contactsWrite = FlaxPermissionDefinition(
    id: 'flax.contacts.write',
    title: 'Contacts write',
    authorization: FlaxPermissionAuthorization.runtime,
  );
  static const calendarAdd = FlaxPermissionDefinition(
    id: 'flax.calendar.add',
    title: 'Calendar add',
    authorization: FlaxPermissionAuthorization.install,
  );
  static const calendarRead = FlaxPermissionDefinition(
    id: 'flax.calendar.read',
    title: 'Calendar read',
    authorization: FlaxPermissionAuthorization.runtime,
  );
  static const calendarWrite = FlaxPermissionDefinition(
    id: 'flax.calendar.write',
    title: 'Calendar write',
    authorization: FlaxPermissionAuthorization.runtime,
  );
  static const remindersRead = FlaxPermissionDefinition(
    id: 'flax.reminders.read',
    title: 'Reminders read',
    authorization: FlaxPermissionAuthorization.runtime,
  );
  static const remindersWrite = FlaxPermissionDefinition(
    id: 'flax.reminders.write',
    title: 'Reminders write',
    authorization: FlaxPermissionAuthorization.runtime,
  );
  static const documentsOpen = FlaxPermissionDefinition(
    id: 'flax.documents.open',
    title: 'Documents open',
    authorization: FlaxPermissionAuthorization.install,
  );
  static const documentsExport = FlaxPermissionDefinition(
    id: 'flax.documents.export',
    title: 'Documents export',
    authorization: FlaxPermissionAuthorization.install,
  );
  static const networkLocal = FlaxPermissionDefinition(
    id: 'flax.network.local',
    title: 'Network local',
    authorization: FlaxPermissionAuthorization.runtime,
  );
  static const bluetoothScan = FlaxPermissionDefinition(
    id: 'flax.bluetooth.scan',
    title: 'Bluetooth scan',
    authorization: FlaxPermissionAuthorization.runtime,
  );
  static const bluetoothConnect = FlaxPermissionDefinition(
    id: 'flax.bluetooth.connect',
    title: 'Bluetooth connect',
    authorization: FlaxPermissionAuthorization.runtime,
  );
  static const bluetoothAdvertise = FlaxPermissionDefinition(
    id: 'flax.bluetooth.advertise',
    title: 'Bluetooth advertise',
    authorization: FlaxPermissionAuthorization.runtime,
  );
  static const wifiConnect = FlaxPermissionDefinition(
    id: 'flax.wifi.connect',
    title: 'Wifi connect',
    authorization: FlaxPermissionAuthorization.install,
  );
  static const wifiInfo = FlaxPermissionDefinition(
    id: 'flax.wifi.info',
    title: 'Wifi info',
    authorization: FlaxPermissionAuthorization.runtime,
  );
  static const nfc = FlaxPermissionDefinition(
    id: 'flax.nfc',
    title: 'Nfc',
    authorization: FlaxPermissionAuthorization.install,
  );
  static const ranging = FlaxPermissionDefinition(
    id: 'flax.ranging',
    title: 'Ranging',
    authorization: FlaxPermissionAuthorization.runtime,
  );
  static const notifications = FlaxPermissionDefinition(
    id: 'flax.notifications',
    title: 'Notifications',
    authorization: FlaxPermissionAuthorization.runtime,
  );
  static const biometrics = FlaxPermissionDefinition(
    id: 'flax.biometrics',
    title: 'Biometrics',
    authorization: FlaxPermissionAuthorization.install,
  );
  static const externalOpen = FlaxPermissionDefinition(
    id: 'flax.external.open',
    title: 'External open',
    authorization: FlaxPermissionAuthorization.install,
  );
  static const share = FlaxPermissionDefinition(
    id: 'flax.share',
    title: 'Share',
    authorization: FlaxPermissionAuthorization.install,
  );
  static const dialerOpen = FlaxPermissionDefinition(
    id: 'flax.dialer.open',
    title: 'Dialer open',
    authorization: FlaxPermissionAuthorization.install,
  );
  static const smsCompose = FlaxPermissionDefinition(
    id: 'flax.sms.compose',
    title: 'Sms compose',
    authorization: FlaxPermissionAuthorization.install,
  );
  static const mailCompose = FlaxPermissionDefinition(
    id: 'flax.mail.compose',
    title: 'Mail compose',
    authorization: FlaxPermissionAuthorization.install,
  );
  static const print = FlaxPermissionDefinition(
    id: 'flax.print',
    title: 'Print',
    authorization: FlaxPermissionAuthorization.install,
  );
  static const healthRead = FlaxPermissionDefinition(
    id: 'flax.health.read',
    title: 'Health read',
    authorization: FlaxPermissionAuthorization.runtime,
  );
  static const healthWrite = FlaxPermissionDefinition(
    id: 'flax.health.write',
    title: 'Health write',
    authorization: FlaxPermissionAuthorization.runtime,
  );
  static const healthBackground = FlaxPermissionDefinition(
    id: 'flax.health.background',
    title: 'Health background',
    authorization: FlaxPermissionAuthorization.runtime,
  );
  static const healthLive = FlaxPermissionDefinition(
    id: 'flax.health.live',
    title: 'Health live',
    authorization: FlaxPermissionAuthorization.runtime,
  );

  static const all = <FlaxPermissionDefinition>[
    network,
    moduleRemote,
    wasm,
    clipboardRead,
    clipboardWrite,
    camera,
    microphone,
    speechRecognition,
    location,
    locationBackground,
    motion,
    activity,
    mediaPick,
    photosRead,
    photosAdd,
    photosModify,
    audioLibraryRead,
    contactsPick,
    contactsRead,
    contactsWrite,
    calendarAdd,
    calendarRead,
    calendarWrite,
    remindersRead,
    remindersWrite,
    documentsOpen,
    documentsExport,
    networkLocal,
    bluetoothScan,
    bluetoothConnect,
    bluetoothAdvertise,
    wifiConnect,
    wifiInfo,
    nfc,
    ranging,
    notifications,
    biometrics,
    externalOpen,
    share,
    dialerOpen,
    smsCompose,
    mailCompose,
    print,
    healthRead,
    healthWrite,
    healthBackground,
    healthLive,
  ];
}
