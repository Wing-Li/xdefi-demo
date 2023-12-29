// eslint-disable-next-line no-unused-vars
import React, {useState, useCallback, useContext, useEffect} from 'react'
import './Home.css'
import styled from 'styled-components'
import {
    WalletsModal,
    DisconnectWalletsModal,
    WalletsContext,
    WALLETS_EVENTS
} from '@xdefi/wallets-connector'

const SHeader = styled.div`
  margin-top: -1px;
  margin-bottom: 1px;
  width: 100%;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`

const SAddress = styled.div`
  font-weight: bold;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 16px;
  margin-left: auto;
`
const SActiveAccount = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  font-weight: 500;
  margin-left: 12px;
`

const BtnOpen = styled.button`
  max-width: 250px;
  width: 200px;
  border-radius: 8px;
  padding: 0 15px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid;
`

function Home() {

    const [isConnected, setIsConnected] = useState(false)
    const context = useContext(WalletsContext)

    const onConnectHandler = useCallback(() => {
        setIsConnected(true)
    }, [setIsConnected])
    const onErrorHandler = useCallback(() => {
        setIsConnected(false)
    }, [setIsConnected])
    const onCloseHandler = useCallback(() => {
        setIsConnected(false)
    }, [setIsConnected])

    useEffect(() => {
        if (context) {
            context.on(WALLETS_EVENTS.CONNECT, onConnectHandler)
            context.on(WALLETS_EVENTS.DISCONNECTED, onCloseHandler)
            context.on(WALLETS_EVENTS.ERROR, onErrorHandler)
        }

        return () => {
            context?.off(WALLETS_EVENTS.CONNECT, onConnectHandler)
            context?.off(WALLETS_EVENTS.DISCONNECTED, onCloseHandler)
            context?.off(WALLETS_EVENTS.ERROR, onErrorHandler)
        }
    }, [
        context,
        onCloseHandler,
        onConnectHandler,
        onErrorHandler,
        setIsConnected
    ])

    return (
        <>
            <SHeader>
                <SAddress>
                    <WalletsModal
                        isDark={true}
                        trigger={(props) => (
                            <BtnOpen {...props}>Connect Dark Modal</BtnOpen>
                        )}
                    />
                </SAddress>
                <SActiveAccount>
                    {isConnected && <DisconnectWalletsModal/>}
                </SActiveAccount>
            </SHeader>
        </>
    )
}

export default Home
