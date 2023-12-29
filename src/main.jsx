import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import NetworkManager, {injected} from "@xdefi/wallets-connector";
import App from "./App.jsx";

const providerOptions = {
    xdefi: {},
    injected: {
        display: {
            ...injected.INJECTED
        }
    },
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <NetworkManager options={providerOptions} network='mainnet' cacheEnabled={true}>
            <App/>
        </NetworkManager>
    </React.StrictMode>,
)
