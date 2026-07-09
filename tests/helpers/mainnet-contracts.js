import MainnetContracts from '../artifacts/MainnetContracts.json' with { type: 'json' }

// Plants snapshots of the canonical mainnet contracts (EntryPoint v0.7, Safe
// factory/singletons/4337 module, MultiSend) at their real addresses, so the
// integration suite runs on a blank local chain instead of a mainnet fork.
export async function plantMainnetContracts (provider) {
  for (const [address, code] of Object.entries(MainnetContracts)) {
    await provider.send('hardhat_setCode', [address, code])
  }
}
