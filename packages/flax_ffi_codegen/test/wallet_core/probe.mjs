import {
  Buffer,
  DynamicLibrary,
  NativeFinalizer,
  toArrayBuffer,
  toBuffer,
  toString,
} from '@flax/ffi';
import { createBindings } from './generated/wallet/bindings.g.js';
import { constants, definitions } from './generated/wallet/definitions.g.js';
import { createBindings as probeBindings } from './generated/lifecycle/bindings.g.js';
import { platformLibraries } from './platform-libraries.mjs';

let checks = 0;
let allocationFailureCases = 0;
let cleanupFailureCases = 0;
function check(value, reason) {
  if (!value) throw new Error(reason);
  ++checks;
}
function throws(action, text) {
  let failed = false;
  try {
    action();
  } catch (error) {
    failed = String(error).includes(text);
  }
  check(failed, text);
}
const library = DynamicLibrary.codeAsset('wallet-core/core');
const { native: tw, PrivateKey, HDWallet, AbiFunction } = createBindings(library);
check(Object.keys(definitions).length === 464, 'All 464 C functions bind successfully');
const { TWCoinTypeBitcoin, TWCoinTypeEthereum, TWCurveSECP256k1 } = constants;
check(TWCoinTypeBitcoin === 0 && TWCoinTypeEthereum === 60, 'Generated coin enums');
check(constants.TWPrivateKeySize === 32, 'Header static integer constant');
check(constants.TWHashSHA512Length === 64, 'Header hash size constant');

function string(value, action) {
  const pointer = tw.TWStringCreateWithUTF8Bytes(value);
  check(pointer !== 0n, 'TWString allocation failed');
  try {
    return action(pointer);
  } finally {
    tw.TWStringDelete(pointer);
  }
}
function data(bytes, action) {
  const pointer = tw.TWDataCreateWithBytes(bytes, BigInt(bytes.length));
  check(pointer !== 0n, 'TWData allocation failed');
  try {
    return action(pointer);
  } finally {
    tw.TWDataDelete(pointer);
  }
}
function takeString(pointer) {
  check(pointer !== 0n, 'Owned string allocation failed');
  try {
    return toString(tw.TWStringUTF8Bytes(pointer));
  } finally {
    tw.TWStringDelete(pointer);
  }
}
function takeData(pointer) {
  check(pointer !== 0n, 'Owned byte allocation failed');
  try {
    return toBuffer(tw.TWDataBytes(pointer), Number(tw.TWDataSize(pointer)), true);
  } finally {
    tw.TWDataDelete(pointer);
  }
}
function publicKeyHex(pointer) {
  check(pointer !== 0n, 'Owned public key allocation failed');
  try {
    return takeData(tw.TWPublicKeyData(pointer)).toString('hex');
  } finally {
    tw.TWPublicKeyDelete(pointer);
  }
}
function signedMessage(key, message, action) {
  const digest = tw.TWHashKeccak256(message);
  check(digest !== 0n, 'Digest allocation failed');
  try {
    const signature = key.sign(digest, TWCurveSECP256k1);
    check(signature !== 0n, 'Signature allocation failed');
    try {
      const publicKey = key.publicKey(false);
      check(publicKey !== 0n, 'Public key allocation failed');
      try {
        return action(publicKey, signature, digest);
      } finally {
        tw.TWPublicKeyDelete(publicKey);
      }
    } finally {
      tw.TWDataDelete(signature);
    }
  } finally {
    tw.TWDataDelete(digest);
  }
}
function bitcoinAddress(wallet) {
  const key = wallet.keyForCoin(TWCoinTypeBitcoin);
  check(key !== 0n, 'Derived key allocation failed');
  try {
    const publicKey = tw.TWPrivateKeyGetPublicKeySecp256k1(key, true);
    check(publicKey !== 0n, 'Public key allocation failed');
    try {
      return takeString(
        tw.TWCoinTypeDeriveAddressFromPublicKey(TWCoinTypeBitcoin, publicKey),
      );
    } finally {
      tw.TWPublicKeyDelete(publicKey);
    }
  } finally {
    tw.TWPrivateKeyDelete(key);
  }
}

// Track each real allocation; reject a second release before it could reach C.
function verifyAllocationFailures(operation, stages) {
  const originals = Object.fromEntries(stages.flat().map((name) => [name, tw[name]]));
  const destructors = [...new Set(stages.map(([, destroy]) => destroy))];
  const cases = stages.flatMap((_, index) => [
    { index, mode: 'null' },
    { index, mode: 'throw' },
  ]);
  for (const destroy of destructors)
    cases.push({ index: -1, mode: 'cleanup', destroy });
  for (const fault of cases) {
    const live = new Map();
    let allocated = 0,
      freed = 0,
      cleanupFailed = false;
    try {
      for (const [index, [create, destroy]] of stages.entries()) {
        tw[create] = (...args) => {
          if (index === fault.index) {
            if (fault.mode === 'null') return 0n;
            throw new Error('injected allocation failure');
          }
          const pointer = originals[create](...args);
          check(pointer !== 0n && !live.has(pointer), 'Fresh owned native allocation');
          live.set(pointer, destroy);
          ++allocated;
          return pointer;
        };
      }
      for (const destroy of destructors) {
        tw[destroy] = (pointer) => {
          check(
            pointer !== 0n && live.get(pointer) === destroy,
            'Only release a live owned pointer once',
          );
          originals[destroy](pointer);
          live.delete(pointer);
          ++freed;
          if (destroy === fault.destroy && !cleanupFailed) {
            cleanupFailed = true;
            throw new Error('injected cleanup failure');
          }
        };
      }
      throws(
        operation,
        fault.mode === 'null'
          ? 'allocation failed'
          : `injected ${fault.mode === 'throw' ? 'allocation' : 'cleanup'} failure`,
      );
      const expected = fault.index < 0 ? stages.length : fault.index;
      check(
        allocated === expected && freed === expected && live.size === 0,
        'Every successful allocation is released exactly once',
      );
      if (fault.mode === 'cleanup') ++cleanupFailureCases;
      else ++allocationFailureCases;
    } finally {
      Object.assign(tw, originals);
      for (const [pointer, destroy] of live) originals[destroy](pointer);
    }
  }
}

verifyAllocationFailures(
  () => string('failure', () => {}),
  [['TWStringCreateWithUTF8Bytes', 'TWStringDelete']],
);
verifyAllocationFailures(
  () => data(Buffer.from([1]), () => {}),
  [['TWDataCreateWithBytes', 'TWDataDelete']],
);
for (const id of platformLibraries) {
  const platform = DynamicLibrary.codeAsset(id);
  try {
    check(
      platform.getFunction('wallet_platform_probe', { return: 'int32' })() === 42,
      'Load a legal old or multi-platform image',
    );
  } finally {
    platform.close();
  }
}

string('Flax 钱包 🔑', (value) => {
  check(toString(tw.TWStringUTF8Bytes(value)) === 'Flax 钱包 🔑', 'UTF-8 round trip');
  check(tw.TWStringSize(value) === 16n, 'size_t uses UTF-8 byte length and bigint');
  check(tw.TWStringGet(value, 5n) === -23, 'Apple plain char is signed');
  string('Flax 钱包 🔑', (other) =>
    check(tw.TWStringEqual(value, other), 'C bool result'),
  );
});
const input = new Uint8Array([0, 128, 255, 42]);
let copied;
data(input, (value) => {
  input[1] = 1;
  copied = toBuffer(tw.TWDataBytes(value), 4, true);
  check(copied.toString('hex') === '0080ff2a', 'TWData copies Uint8Array input');
  // This borrowed view never escapes its native owner or a resizing operation.
  const borrowed = new Uint8Array(toArrayBuffer(tw.TWDataBytes(value), 4, false));
  borrowed[0] = 7;
  check(
    takeData(tw.TWDataCreateWithData(value))[0] === 7,
    'Zero-copy JS write reaches C',
  );
  tw.TWDataSet(value, 1n, 254);
  check(borrowed[1] === 254, 'Zero-copy C write reaches JS');
  const output = Buffer.alloc(2);
  check(tw.TWDataCopyBytes(value, 1n, 2n, output) === 0, 'Buffer output pointer');
  check(output.toString('hex') === 'feff', 'Native writes Buffer bytes');
  check(
    tw.TWDataCopyBytes(value, 4n, 2n, output) === -1,
    'Native invalid range result',
  );
});
check(copied.toString('hex') === '0080ff2a', 'Copied bytes survive native deletion');
const vector = tw.TWDataVectorCreate();
try {
  data(Buffer.from([1, 2, 3]), (value) => tw.TWDataVectorAdd(vector, value));
  check(tw.TWDataVectorSize(vector) === 1n, 'Opaque vector retains its own copy');
  check(
    takeData(tw.TWDataVectorGet(vector, 0n)).toString('hex') === '010203',
    'Owned vector result',
  );
} finally {
  tw.TWDataVectorDelete(vector);
}
data(Buffer.from('The quick brown fox jumps over the lazy dog'), (value) => {
  check(
    takeData(tw.TWHashSHA256(value)).toString('hex') ===
      'd7a8fbb307d7809469ca9abcb0082e4f8d5651e46d3cdb762d02d0bf37c9e592',
    'SHA-256 known vector',
  );
});
data(Buffer.alloc(0), (value) => {
  check(
    takeData(tw.TWHashKeccak256(value)).toString('hex') ===
      'c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470',
    'Empty byte input and Keccak-256',
  );
});
const base58 = '1Bp9U1ogV3A14FMvKbRJms7ctyso4Z4Tcx';
data(Buffer.from('00769bdff96a02f9135a1d19b749db6a78fe07dc90', 'hex'), (value) => {
  check(takeString(tw.TWBase58Encode(value)) === base58, 'Base58 encode');
});
string(base58, (value) => {
  check(
    takeData(tw.TWBase58Decode(value)).toString('hex') ===
      '00769bdff96a02f9135a1d19b749db6a78fe07dc90',
    'Base58 decode',
  );
});
string('bad0', (value) =>
  check(tw.TWBase58Decode(value) === 0n, 'Nullable pointer is bigint zero'),
);

const privateHex = 'afeefca74d9a325cf1d6b6911d61a65c32afa8e02bd5e78e2e4ac2910bab45f5';
const publicHex =
  '0499c6f51ad6f98c9c583f8e92bb7758ab2ca9a04110c0a1126ec43e5453d196c166b489a4b7c491e7688e6ebea3a71fc3a1a48d60f98d5ce84c93b65e423fde91';
data(Buffer.from(privateHex, 'hex'), (bytes) => {
  check(
    tw.TWPrivateKeyIsValid(bytes, TWCurveSECP256k1),
    'Enum argument and native bool',
  );
  const key = new PrivateKey(bytes);
  try {
    check(
      takeData(key.data()).toString('hex') === privateHex,
      'Generated PrivateKey class',
    );
    check(
      publicKeyHex(key.publicKey(false)) === publicHex,
      'secp256k1 known public key',
    );
    data(Buffer.from('hello'), (message) => {
      verifyAllocationFailures(
        () => signedMessage(key, message, () => {}),
        [
          ['TWHashKeccak256', 'TWDataDelete'],
          ['TWPrivateKeySign', 'TWDataDelete'],
          ['TWPrivateKeyGetPublicKeySecp256k1', 'TWPublicKeyDelete'],
        ],
      );
      signedMessage(key, message, (publicKey, signature, digest) => {
        check(
          tw.TWPublicKeyVerify(publicKey, signature, digest),
          'Native sign and verify',
        );
        check(
          takeData(tw.TWDataCreateWithData(signature)).toString('hex') ===
            '8720a46b5b3963790d94bcc61ad57ca02fd153584315bfa161ed3455e336ba624d68df010ed934b8792c5b6a57ba86c3da31d039f9612b44d1bf054132254de901',
          'Deterministic signature vector',
        );
      });
    });
  } finally {
    key.close();
    key.close();
  }
  throws(() => key.data(), 'Resource closed');
});
data(Buffer.from('deadbeef', 'hex'), (bytes) => {
  check(!tw.TWPrivateKeyIsValid(bytes, TWCurveSECP256k1), 'Invalid key returns false');
  throws(() => new PrivateKey(bytes), 'Native allocation failed');
});
const mnemonic =
  'ripple scissors kick mammal hire column oak again sun offer wealth tomorrow wagon turn fatal';
string(mnemonic, (words) =>
  string('TREZOR', (password) => {
    const wallet = new HDWallet(words, password);
    try {
      check(takeString(wallet.mnemonic()) === mnemonic, 'Generated HDWallet class');
      check(
        takeData(wallet.seed()).toString('hex') ===
          '7ae6f661157bda6492f6162701e570097fc726b6235011ea5ad09bf04986731ed4d92bc43cbdee047b60ea0dd1b1fa4274377c9bf5bd14ab1982c272d8076f29',
        'BIP39 seed vector',
      );
      check(
        takeData(wallet.entropy()).toString('hex') ===
          'ba5821e8c356c05ba5f025d9532fe0f21f65d594',
        'BIP39 entropy',
      );
      verifyAllocationFailures(
        () => bitcoinAddress(wallet),
        [
          ['TWHDWalletGetKeyForCoin', 'TWPrivateKeyDelete'],
          ['TWPrivateKeyGetPublicKeySecp256k1', 'TWPublicKeyDelete'],
          ['TWCoinTypeDeriveAddressFromPublicKey', 'TWStringDelete'],
        ],
      );
      const address = bitcoinAddress(wallet);
      check(
        address === 'bc1qumwjg8danv2vm29lp5swdux4r60ezptzz7ce85',
        'BIP84 Bitcoin address',
      );
      string(address, (text) =>
        check(tw.TWAnyAddressIsValid(text, TWCoinTypeBitcoin), 'Address validation'),
      );
    } finally {
      wallet.close();
    }
  }),
);
check(
  takeString(tw.TWCoinTypeConfigurationGetSymbol(TWCoinTypeEthereum)) === 'ETH',
  'Coin metadata string',
);
check(
  tw.TWCoinTypeConfigurationGetDecimals(TWCoinTypeEthereum) === 18,
  'Coin metadata int',
);

string('integers', (name) => {
  const fn = new AbiFunction(name);
  const values = [
    255,
    65535,
    4294967295,
    18446744073709551615n,
    -128,
    -32768,
    -2147483648,
    -9223372036854775808n,
  ];
  const names = [
    'UInt8',
    'UInt16',
    'UInt32',
    'UInt64',
    'Int8',
    'Int16',
    'Int32',
    'Int64',
  ];
  try {
    for (let i = 0; i < names.length; ++i) {
      check(
        fn['add' + names[i]](values[i], false) === i,
        names[i] + ' exact input boundary',
      );
    }
    check(fn.addBool(true, false) === 8, 'C bool input');
    check(fn.getUInt8(0, false) === 255, 'uint8 return boundary');
    check(
      fn.getUInt64(3, false) === 18446744073709551615n,
      'uint64 return beyond safe JS number',
    );
    check(fn.getBool(8, false) === true, 'C bool return');
    check(
      takeString(fn.type()) ===
        'integers(uint8,uint16,uint32,uint64,int8,int16,int32,int64,bool)',
      'ABI integer type signature',
    );
    const encoded = takeData(fn.encode()).toString('hex');
    const words = [...values, 1]
      .map((value) => BigInt.asUintN(256, BigInt(value)).toString(16).padStart(64, '0'))
      .join('');
    check(
      encoded.slice(8) === words,
      'Every integer encoded exactly without precision loss',
    );
  } finally {
    fn.close();
  }
});

const observer = DynamicLibrary.codeAsset('wallet-core/lifecycle');
const { native: probe, ObservedKey } = probeBindings(observer);
globalThis.walletProbePath = observer.path;
data(Buffer.from('deadbeef', 'hex'), (bytes) =>
  throws(() => new ObservedKey(bytes), 'Native allocation failed'),
);
data(Buffer.from(privateHex, 'hex'), (bytes) => {
  const attach = NativeFinalizer.prototype.attach;
  try {
    NativeFinalizer.prototype.attach = () => {
      throw new Error('injected attach failure');
    };
    throws(() => new ObservedKey(bytes), 'injected attach failure');
  } finally {
    NativeFinalizer.prototype.attach = attach;
  }
  const manual = new ObservedKey(bytes);
  manual.close();
  manual.close();
  globalThis.walletCollected = new ObservedKey(bytes);
  globalThis.walletRetained = new ObservedKey(bytes);
});
check(
  probe.WCProbeStat(0) === 4 && probe.WCProbeStat(1) === 2,
  'Real key allocation and attach rollback counted once',
);
globalThis.walletDrop = () => {
  globalThis.walletCollected = null;
};
globalThis.walletRetainedValue = () =>
  publicKeyHex(globalThis.walletRetained.publicKey(false)) === publicHex;
globalThis.walletResult = {
  checks,
  allocationFailureCases,
  cleanupFailureCases,
  legalPlatformLibraries: platformLibraries.length,
  boundFunctions: 464,
  vectors: [
    'UTF-8',
    'native buffers',
    'SHA-256',
    'Keccak-256',
    'Base58',
    'secp256k1',
    'BIP39/BIP84',
    'Ethereum ABI integers',
  ],
};
globalThis.__flaxModules.require('@flax/core/bindings').mountRoot({
  kind: 'widget',
  type: 'flax.core/flutter#type:SizedBox',
  ctor: '',
  args: { width: 1, height: 1 },
});
