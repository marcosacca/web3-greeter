import '../styles/globals.css'
import { WagmiConfig, createClient, configureChains } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { Web3Modal } from '@web3modal/react'
import { EthereumClient } from '@web3modal/ethereum'

const monadTestnet = {
  id: 868455272153094,
  name: 'Monad Testnet',
  network: 'monad-testnet',
  nativeCurrency: {
    name: 'Test ETH',
    symbol: 'tETH',
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ['https://testnet-rpc.monad.xyz'] }
  }
}

const { chains, provider } = configureChains(
  [monadTestnet],
  [publicProvider()]
)

const client = createClient({
  autoConnect: true,
  connectors: [new InjectedConnector({ chains })],
  provider
})

const ethereumClient = new EthereumClient(client, chains)

function MyApp({ Component, pageProps }) {
  return (
    <>
      <WagmiConfig client={client}>
        <Component {...pageProps} />
      </WagmiConfig>
      <Web3Modal
        projectId="c70d74b8604b6afd42a7a522e36c450d"
        ethereumClient={ethereumClient}
      />
    </>
  )
}

export default MyApp
