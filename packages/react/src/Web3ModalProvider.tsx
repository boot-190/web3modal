import { ConfigType, Web3Modal } from '@web3modal/core'
import React, { ReactNode, useEffect } from 'react'
import { Web3Modal as Modal } from './Web3Modal'

/**
 * Props
 */
interface Props {
  children: ReactNode | ReactNode[]
  config: ConfigType
}

/**
 * Component
 */
export function Web3ModalProvider({ children, config }: Props) {
  async function onConfigure() {
    Web3Modal.configure(config)
    await import('@web3modal/ui')
  }

  useEffect(() => {
    onConfigure()
  }, [])

  return (
    <>
      {children}
      <Modal />
    </>
  )
}
