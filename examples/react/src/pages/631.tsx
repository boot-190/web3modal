import { useAccount, useBalance, useConnectModal, useDisconnect } from '@web3modal/react'

export default function Home() {
  const { open } = useConnectModal()
  const { account } = useAccount()
  const disconnect = useDisconnect()
  const { data } = useBalance({
    addressOrName: account.address,
    formatUnits: 'ether'
  })

  return (
    <div>
      {account.isConnected ? (
        <button onClick={disconnect}>Disconnect</button>
      ) : (
        <button onClick={open}>Connect</button>
      )}
      <p>
        Connected: <span>{account.isConnected ? 'Yes' : 'No'}</span>
      </p>
      {<p>{account.address}</p>}
      {data && <p>{`${data.symbol}: ${data.formatted}`}</p>}
    </div>
  )
}
