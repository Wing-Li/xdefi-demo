import NetworkManager from '@xdefi/wallets-connector'
import Home from "./Home.jsx";

function App() {
    const providerOptions = {
        xdefi: {},
    }

    return (
        <NetworkManager options={providerOptions} network='mainnet' cacheEnabled={true}>
            <Home/>
        </NetworkManager>
    )
}

export default App
