#ifndef FLAX_WALLET_CORE_LIFECYCLE_H
#define FLAX_WALLET_CORE_LIFECYCLE_H

#include <TrustWalletCore/TWPrivateKey.h>

/* Count real Wallet Core allocations without depending on private runtime stats. */
struct TWPrivateKey *WCProbeCreate(TWData *data);
void WCProbeDelete(struct TWPrivateKey *key);
struct TWPublicKey *WCProbePublicKey(struct TWPrivateKey *key, bool compressed);
uint32_t WCProbeStat(int index);

#endif
