import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styled from 'styled-components'
import {
    WalletsModal,
    DisconnectWalletsModal,
    WalletsContext,
    WALLETS_EVENTS
} from '@xdefi/wallets-connector'

const BtnOpen = styled.button`
  max-width: 154px;
  width: 154px;
  border-radius: 8px;
  padding: 0 15px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid;
`

function App() {

    return (
        <>
            <WalletsModal
                isDark={false}
                trigger={(props) => (
                    <BtnOpen {...props}>Connect Light Modal</BtnOpen>
                )}
            />
        </>
    )
}

export default App
