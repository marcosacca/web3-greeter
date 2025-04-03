import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

export default function Home() {
  const { address, isConnected } = useAccount()
  const { connect } = useConnect({ connector: new InjectedConnector() })
  const { disconnect } = useDisconnect()

  return (
    <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
      <h1>✅ Connessione Wallet Monad</h1>
      {isConnected ? (
        <>
          <p>Wallet connesso: <strong>{address}</strong></p>
          <button onClick={() => disconnect()}>Disconnetti</button>
        </>
      ) : (
        <button onClick={() => connect()}>Connetti Wallet</button>
      )}
    </div>
  )
}
