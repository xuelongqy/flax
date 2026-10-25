#include "lifecycle.h"

static uint32_t allocated;
static uint32_t freed;

struct TWPrivateKey *WCProbeCreate(TWData *data) {
  struct TWPrivateKey *key = TWPrivateKeyCreateWithData(data);
  if (key) ++allocated;
  return key;
}

void WCProbeDelete(struct TWPrivateKey *key) {
  TWPrivateKeyDelete(key);
  ++freed;
}

struct TWPublicKey *WCProbePublicKey(struct TWPrivateKey *key, bool compressed) {
  return TWPrivateKeyGetPublicKeySecp256k1(key, compressed);
}

uint32_t WCProbeStat(int index) {
  return index == 0 ? allocated : index == 1 ? freed : allocated - freed;
}
