import { FACTORY_ADDRESS, INIT_CODE_HASH } from '../common/swap'
import IceChain from '../ice-chain'

export const core: IceChain = {
  id: 1116,
  name: 'Core Blockchain',
  features: ['swap', 'bridge', 'farms', 'info'],
  network: 'core',
  rpcUrls: {
    public: 'https://rpc.coredao.org/',
    default: 'https://rpc.coredao.org/',
  },
  blockExplorers: {
    default: { name: 'CORE Explorer', url: 'https://scan.coredao.org' },
  },
  nativeCurrency: {
    name: 'CORE',
    symbol: 'CORE',
    decimals: 18,
  },
  multicall: {
    address: '0xf3a3dAf360161B2f10c645EF039C709A3Fd4Ea62',
    blockCreated: 852772,
  },
  wrappedNative: {
    address: '0x40375C92d9FAf44d2f9db9Bd9ba41a3317a2404f',
    decimals: 18,
    symbol: 'WCORE',
    name: 'Wrapped CORE',
  },
  swap: {
    factoryAddress: FACTORY_ADDRESS,
    initCodeHash: INIT_CODE_HASH,
  },
}
